# 📄 06 - Multi-Container Applications

> [!IMPORTANT]
> 🔥🔥🔥 Este documento conecta prácticamente todo lo que has estudiado hasta ahora: **containers, networks, volumes, environment variables y Docker Compose**.

La idea es dejar de pensar en Docker como:

> `"Tengo un container."`

y empezar a pensar en:

> **"Tengo una aplicación compuesta por varios servicios que trabajan juntos."**

---

## 📚 ÍNDICE 

- [📄 06 - Multi-Container Applications](#-06---multi-container-applications)
  - [📚 ÍNDICE](#-índice)
- [🧩 ¿Qué es una Multi-Container Application?](#-qué-es-una-multi-container-application)
- [🏗️ Separación de responsabilidades](#️-separación-de-responsabilidades)
- [🌐 Frontend + Backend + Database](#-frontend--backend--database)
- [🔗 Backend + Database](#-backend--database)
- [🌐 Frontend + Backend](#-frontend--backend)
- [🔌 Puertos internos vs puertos del Host](#-puertos-internos-vs-puertos-del-host)
- [🧠 ¿Por qué no todos los servicios necesitan `ports`?](#-por-qué-no-todos-los-servicios-necesitan-ports)
- [💾 Database + Volume](#-database--volume)
- [🔐 Environment Variables](#-environment-variables)
- [🔄 Service Dependencies](#-service-dependencies)
- [🧱 Ejemplo completo](#-ejemplo-completo)
    - [🏛️ Arquitectura](#️-arquitectura)
- [🚀 Levantar toda la aplicación](#-levantar-toda-la-aplicación)
- [🧪 Ejemplo: Angular + Express + PostgreSQL](#-ejemplo-angular--express--postgresql)
- [🧪 Ejemplo: Express + MongoDB](#-ejemplo-express--mongodb)
- [🧠 Desarrollo local](#-desarrollo-local)
- [🗺️ El mapa mental completo](#️-el-mapa-mental-completo)

# 🧩 ¿Qué es una Multi-Container Application?

Una **Multi-Container Application** es una aplicación formada por varios servicios, donde cada servicio puede ejecutarse en su propio container.

```text
Frontend
    +
Backend
    +
Database
        ↓
Multi-Container Application
```

Una arquitectura típica podría ser:

```text
              Docker Compose
                    │
       ┌────────────┼────────────┐
       ▼            ▼            ▼
    Angular       Express     PostgreSQL
    Container     Container    Container
       │            │            │
       └────────────┼────────────┘
                    │
              Docker Network
```

Cada container tiene una responsabilidad diferente.

---

# 🏗️ Separación de responsabilidades

Una de las principales ventajas de esta arquitectura es que cada servicio puede encargarse de una tarea específica.

| Servicio       | Responsabilidad            |
| -------------- | -------------------------- |
| 🖥️ Angular    | Frontend / UI              |
| ⚙️ Express     | API / Business Logic       |
| 🗄️ PostgreSQL | Database / Persistent Data |

En conjunto:

```text
User
  ↓
Angular
  ↓
Express
  ↓
PostgreSQL
```

---

# 🌐 Frontend + Backend + Database

Una arquitectura completa podría verse así:

```text
                    Docker Compose
                          │
          ┌───────────────┼───────────────┐
          ▼               ▼               ▼
      Angular           Express       PostgreSQL
          │               │               │
          │               │               │
          └───────────────┼───────────────┘
                          │
                    Docker Network
```

Pero la comunicación real no es que todos los servicios necesariamente hablen con todos.

Normalmente:

```text
Angular
   │
   │ HTTP
   ▼
Express
   │
   │ Database connection
   ▼
PostgreSQL
```

La arquitectura sería:

```text
User
 ↓
Frontend
 ↓
Backend
 ↓
Database
```

---

# 🔗 Backend + Database

Este es uno de los casos más importantes.

Supongamos:

```text
api
postgres
```

Ambos están dentro de la misma Docker Network:

```text
Docker Network
      │
 ┌────┴────┐
 ▼         ▼
api     postgres
```

El backend puede comunicarse con PostgreSQL utilizando el nombre del service:

```text
postgres:5432
```

Por ejemplo:

```env
DATABASE_HOST=postgres
DATABASE_PORT=5432
```

No:

```env
DATABASE_HOST=localhost
```

Porque:

```text
localhost
   ↓
API Container
```

mientras:

```text
postgres
   ↓
PostgreSQL Container
```

> [!IMPORTANT]
> 🌐 Dentro de una Docker Network, los services pueden comunicarse utilizando **el nombre del service** como hostname.

---

# 🌐 Frontend + Backend

El frontend normalmente realiza peticiones HTTP hacia el backend.

```text
Angular
   │
   │ HTTP
   ▼
Express
```

El backend podría estar escuchando:

```text
3000
```

Por ejemplo:

```text
http://localhost:3000/api
```

si el puerto del backend está publicado hacia el host.

---

# 🔌 Puertos internos vs puertos del Host

Aquí debes conectar lo aprendido sobre **Port Mapping**.

Supongamos:

```yaml
services:

  api:
    build: ./backend
    ports:
      - "3000:3000"

  postgres:
    image: postgres:17
```

Desde tu máquina:

```text
localhost:3000
      ↓
API Container :3000
```

Pero desde otro container de la misma network:

```text
api:3000
```

Y para PostgreSQL:

```text
postgres:5432
```

> [!TIP]
> 🔥 No necesitas publicar el puerto de PostgreSQL al host para que el backend pueda utilizarlo.

---

# 🧠 ¿Por qué no todos los servicios necesitan `ports`?

`ports` sirve principalmente para hacer accesible un puerto del container desde el host.

Por ejemplo:

```yaml
ports:
  - "3000:3000"
```

permite:

```text
Host
localhost:3000
      ↓
API Container
```

Pero si PostgreSQL solamente necesita ser utilizado por el backend:

```text
Express
   ↓
postgres:5432
```

no necesariamente necesitas:

```yaml
ports:
  - "5432:5432"
```

Puedes mantener PostgreSQL accesible únicamente dentro de la Docker Network.

> [!TIP]
> 🔐 Esto ayuda a reducir la superficie de exposición del servicio.

---

# 💾 Database + Volume

Las bases de datos necesitan persistencia.

Por eso normalmente:

```text
PostgreSQL
    ↓
Volume
    ↓
Persistent Data
```

Por ejemplo:

```yaml
services:

  postgres:
    image: postgres:17
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

La arquitectura completa:

```text
Express
   │
   │ postgres:5432
   ▼
PostgreSQL Container
   │
   ▼
postgres_data
   │
   ▼
Persistent Database
```

Si recreas el container:

```text
Old PostgreSQL Container
          ❌
          │
          ▼
    postgres_data
          │
          ▼
New PostgreSQL Container
```

los datos pueden permanecer en el Volume.

---

# 🔐 Environment Variables

Cada servicio puede necesitar su propia configuración.

Por ejemplo:

```text
API Container
│
├── NODE_ENV=development
├── PORT=3000
├── DATABASE_HOST=postgres
├── DATABASE_PORT=5432
└── DATABASE_NAME=mydb
```

Mientras PostgreSQL podría utilizar:

```text
PostgreSQL Container
│
├── POSTGRES_DB=mydb
├── POSTGRES_USER=postgres
└── POSTGRES_PASSWORD=...
```

Conceptualmente:

```text
Environment Variables
          ↓
      Containers
          ↓
     Configuration
```

Esto permite utilizar la misma Image con diferentes configuraciones.

> [!NOTE]
> 🔐 En aplicaciones reales, evita colocar secretos sensibles directamente en `compose.yaml` cuando no sea apropiado.

---

# 🔄 Service Dependencies

Un servicio puede depender de otro.

Por ejemplo:

```text
Angular
   ↓
Express
   ↓
PostgreSQL
```

Conceptualmente:

```text
Frontend
   ↓
Backend
   ↓
Database
```

En Compose puedes expresar algunas relaciones mediante:

```yaml
depends_on:
```

Por ejemplo:

```yaml
services:

  api:
    build: ./backend
    depends_on:
      - postgres

  postgres:
    image: postgres:17
```

Esto expresa que `api` depende de `postgres` dentro de la configuración de Compose.

> [!WARNING]
> ⚠️ `depends_on` no significa necesariamente que PostgreSQL ya esté completamente listo para aceptar conexiones.
>
> Que un container haya iniciado no garantiza que la aplicación que contiene esté lista.
>
> Para aplicaciones reales puedes necesitar mecanismos adicionales de **health checks, retries o connection handling**.

---

# 🧱 Ejemplo completo

Una aplicación sencilla podría tener:

```text
project/
│
├── frontend/
│   └── Angular
│
├── backend/
│   └── Express
│
└── compose.yaml
```

Y:

```yaml
services:

  frontend:
    build: ./frontend
    ports:
      - "4200:4200"

  api:
    build: ./backend
    ports:
      - "3000:3000"
    environment:
      DATABASE_HOST: postgres
      DATABASE_PORT: 5432
    depends_on:
      - postgres

  postgres:
    image: postgres:17
    environment:
      POSTGRES_DB: mydb
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

### 🏛️ Arquitectura

```text
                         Docker Compose
                              │
          ┌───────────────────┼───────────────────┐
          ▼                   ▼                   ▼
      Angular              Express           PostgreSQL
      Container             Container          Container
          │                   │                   │
          │                   │                   │
          │              postgres:5432            │
          │                   │                   │
          └───────────────────┼───────────────────┘
                              │
                        Docker Network
                              │
                              ▼
                       postgres_data
                              │
                              ▼
                       Persistent Data
```

---

# 🚀 Levantar toda la aplicación

Sin Compose tendrías que ejecutar múltiples comandos:

```text
docker run ...
docker run ...
docker run ...
```

Con Compose defines toda la arquitectura:

```text
compose.yaml
      ↓
docker compose up
      ↓
┌───────────────┐
│   Frontend    │
│   Backend     │
│   PostgreSQL  │
└───────────────┘
```

Docker Compose se encarga de crear y conectar los servicios según la configuración.

---

# 🧪 Ejemplo: Angular + Express + PostgreSQL

Este es un ejercicio especialmente importante para ti porque representa una arquitectura **full-stack** muy común:

```text
             USER
               │
               ▼
            Angular
               │
               │ HTTP
               ▼
            Express
               │
               │ PostgreSQL Protocol
               ▼
          PostgreSQL
               │
               ▼
         Docker Volume
```

Cada pieza tiene una responsabilidad:

| Servicio       | Responsabilidad               |
| -------------- | ----------------------------- |
| Angular        | Frontend / UI                 |
| Express        | API + lógica de negocio       |
| PostgreSQL     | Persistencia de datos         |
| Docker Network | Comunicación entre servicios  |
| Volume         | Persistencia de PostgreSQL    |
| Compose        | Orquestación de la aplicación |

---

# 🧪 Ejemplo: Express + MongoDB

La arquitectura puede cambiar de database sin cambiar el concepto general:

```text
Express
   │
   │ mongodb:27017
   ▼
MongoDB
   │
   ▼
Volume
```

Por ejemplo:

```text
Docker Compose
      │
 ┌────┴─────┐
 ▼          ▼
Express   MongoDB
   │          │
   └────┬─────┘
        │
   Docker Network
        │
        ▼
      Volume
```

El backend podría utilizar:

```env
DATABASE_HOST=mongodb
DATABASE_PORT=27017
```

La idea sigue siendo la misma:

```text
Backend
   ↓
Service name
   ↓
Database
   ↓
Persistent Storage
```

---

# 🧠 Desarrollo local

Una de las grandes ventajas de esta arquitectura es poder reproducir todo el entorno de desarrollo.

En lugar de instalar manualmente:

```text
Node
PostgreSQL
MongoDB
Redis
...
```

puedes definir los servicios:

```text
compose.yaml
     ↓
docker compose up
     ↓
Development Environment
```

Por ejemplo:

```text
Frontend
Backend
Database
Redis
```

todos ejecutándose de manera coordinada.

---

# 🗺️ El mapa mental completo

A estas alturas deberías poder conectar todos los conceptos:

```text
                    Docker Compose
                         │
          ┌──────────────┼──────────────┐
          ▼              ▼              ▼
       Frontend        Backend        Database
       Container       Container      Container
          │              │              │
          │              │              │
          │              └──────┐       │
          │                     │       │
          └─────────────────────┼───────┘
                                ▼
                         Docker Network
                                │
                                ▼
                           Communication
```

Y para los datos:

```text
Database Container
        │
        ▼
      Volume
        │
        ▼
 Persistent Data
```

Y para la configuración:

```text
Environment Variables
        │
        ▼
    Containers
        │
        ▼
 Application Configuration
```

Por lo tanto:

```text
        Multi-Container Application
                    │
      ┌─────────────┼─────────────┐
      ▼             ▼             ▼
   Containers    Networks       Volumes
      │             │             │
      ▼             ▼             ▼
   Services     Communication   Persistence
                    │
                    ▼
             Environment Variables
```

> [!IMPORTANT]
> 🔥 **La idea central:** Docker no solamente sirve para ejecutar una aplicación aislada. Puedes utilizar varios containers como piezas independientes de una arquitectura completa: cada servicio tiene una responsabilidad, las Networks permiten que se comuniquen, los Volumes mantienen los datos y las Environment Variables proporcionan la configuración.
