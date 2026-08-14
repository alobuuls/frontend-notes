# 📄 04 - Compose Networking

> [!IMPORTANT]
> 🔥🔥 **Muy importante.**
>
> Aquí conectas todo lo aprendido sobre **NETWORKING** con Docker Compose.

---

## 📑 ÍNDICE 

- [📄 04 - Compose Networking](#-04---compose-networking)
  - [📑 ÍNDICE](#-índice)
- [🌐 ¿Qué es Compose Networking?](#-qué-es-compose-networking)
- [🔗 Comunicación entre Services](#-comunicación-entre-services)
- [🌐 Service Names como Hostnames](#-service-names-como-hostnames)
- [🚫 `localhost` dentro de Compose](#-localhost-dentro-de-compose)
  - [❌ Configuración incorrecta](#-configuración-incorrecta)
  - [✅ Configuración correcta](#-configuración-correcta)
- [🔌 Puertos internos vs puertos del Host](#-puertos-internos-vs-puertos-del-host)
- [🔀 `ports` vs comunicación interna](#-ports-vs-comunicación-interna)
- [🧠 Ejemplo completo](#-ejemplo-completo)
- [🧩 Networks Personalizadas](#-networks-personalizadas)
- [🔐 Aislamiento mediante Networks](#-aislamiento-mediante-networks)
- [🌍 DNS interno de Compose](#-dns-interno-de-compose)
- [🧠 Service Name vs Container Name](#-service-name-vs-container-name)
- [🚨 Error típico](#-error-típico)
- [🔄 Mapa mental](#-mapa-mental)

# 🌐 ¿Qué es Compose Networking?

Docker Compose crea y administra redes para permitir que los **services de una aplicación se comuniquen entre sí**.

En una aplicación típica puedes tener:

```text
Docker Compose
      ↓
Docker Network
      │
 ┌────┴─────────────┐
 ▼                  ▼
API              PostgreSQL
```

Por ejemplo:

```text
              Docker Network
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
       api:3000           postgres:5432
          │                   │
          └───────────────────┘
```

La API puede comunicarse directamente con PostgreSQL porque ambos services pertenecen a una red común.

---

# 🔗 Comunicación entre Services

Supongamos este `compose.yaml`:

```yaml
services:

  api:
    build: ./backend

  postgres:
    image: postgres:17
```

Compose crea containers para ambos services y los conecta mediante una red.

Conceptualmente:

```text
services
   │
   ├── api
   │    ↓
   │  API Container
   │
   └── postgres
        ↓
      PostgreSQL Container
             │
             └── Docker Network
```

Entonces:

```text
API Container
      ↓
Docker Network
      ↓
PostgreSQL Container
```

---

# 🌐 Service Names como Hostnames

> [!IMPORTANT]
> 🔥 Este es uno de los conceptos más importantes de Compose.

Dentro de la red de Compose, los services pueden encontrarse utilizando **su nombre de service**.

Si tienes:

```yaml
services:

  api:
    build: ./backend

  postgres:
    image: postgres:17
```

El nombre:

```text
postgres
```

funciona como hostname para el service de PostgreSQL.

Por eso la API puede conectarse utilizando:

```text
postgres:5432
```

En lugar de una IP.

Conceptualmente:

```text
api
 ↓
"¿Dónde está postgres?"
 ↓
Docker DNS
 ↓
PostgreSQL Container
```

---

# 🚫 `localhost` dentro de Compose

> [!WARNING]
> Este concepto debes tenerlo **MUY claro**.
>
> Dentro de un container:
>
> ```text
> localhost
> ```
>
> significa:
>
> **El propio container.**

Por ejemplo:

```text
API Container
localhost:5432
```

significa:

```text
API Container
      ↓
localhost:5432
      ↓
❌ PostgreSQL
```

No significa que esté buscando otro container.

---

## ❌ Configuración incorrecta

Si PostgreSQL está en otro service:

```yaml
services:

  api:
    build: ./backend

  postgres:
    image: postgres:17
```

No deberías configurar la API así:

```env
DATABASE_HOST=localhost
DATABASE_PORT=5432
```

Porque `localhost` apunta al container de la API.

---

## ✅ Configuración correcta

Utilizas el nombre del service:

```env
DATABASE_HOST=postgres
DATABASE_PORT=5432
```

Entonces:

```text
API Container
      │
      │ postgres:5432
      ▼
PostgreSQL Container
```

> [!TIP]
> 🔥 Esta es la razón por la que los nombres de los services son tan importantes en Compose.

---

# 🔌 Puertos internos vs puertos del Host

Aquí hay una diferencia fundamental.

Supongamos:

```yaml
services:

  api:
    build: ./backend
    ports:
      - "3000:3000"

  postgres:
    image: postgres:17
    ports:
      - "5432:5432"
```

Tenemos:

```text
HOST
localhost:3000
      ↓
API Container :3000
```

y:

```text
HOST
localhost:5432
      ↓
PostgreSQL Container :5432
```

Pero entre containers **no necesitas utilizar el puerto publicado del host**.

La API utiliza:

```text
postgres:5432
```

No:

```text
localhost:5432
```

ni:

```text
host:5432
```

---

# 🔀 `ports` vs comunicación interna

| `ports`                             | Comunicación interna      |
| ----------------------------------- | ------------------------- |
| Publica/mapea puertos hacia el host | Utiliza la Docker Network |
| Host → Container                    | Container → Container     |
| Ejemplo: `localhost:3000`           | Ejemplo: `postgres:5432`  |

`ports` sirve principalmente para hacer accesible un puerto del container **desde el host** u otras interfaces externas según el binding configurado.

Por ejemplo:

```yaml
ports:
  - "3000:3000"
```

significa:

```text
HOST
3000
 ↓
CONTAINER
3000
```

Pero para:

```text
API → PostgreSQL
```

ambos pueden comunicarse directamente mediante la red de Docker:

```text
API
 ↓
postgres:5432
 ↓
PostgreSQL
```

> [!IMPORTANT]
> Por eso **no necesitas publicar todos los puertos al host**.
>
> Por ejemplo, una base de datos que solamente necesita ser utilizada por la API puede no necesitar:
>
> ```yaml
> ports:
>   - "5432:5432"
> ```

---

# 🧠 Ejemplo completo

Una aplicación podría tener:

```yaml
services:

  api:
    build: ./backend
    ports:
      - "3000:3000"

  postgres:
    image: postgres:17
```

La arquitectura sería:

```text
                    Docker Host
                         │
                  localhost:3000
                         │
                         ▼
                    ┌─────────┐
                    │   API   │
                    └────┬────┘
                         │
                  postgres:5432
                         │
                         ▼
                  ┌────────────┐
                  │ PostgreSQL │
                  └────────────┘
```

La comunicación interna:

```text
API
 ↓
postgres:5432
 ↓
PostgreSQL
```

La comunicación desde tu computadora:

```text
localhost:3000
 ↓
API Container
```

---

# 🧩 Networks Personalizadas

Compose puede crear redes automáticamente, pero también puedes definirlas explícitamente.

Por ejemplo:

```yaml
services:

  api:
    build: ./backend
    networks:
      - app-network

  postgres:
    image: postgres:17
    networks:
      - app-network

networks:
  app-network:
```

Ahora:

```text
app-network
     │
 ┌───┴───────┐
 ▼           ▼
api       postgres
```

Ambos services pueden comunicarse porque pertenecen a la misma network.

---

# 🔐 Aislamiento mediante Networks

Las networks también permiten controlar qué services pueden comunicarse.

Por ejemplo:

```text
Frontend
   │
   │
app-network
   │
   ├── API
   │
   └── PostgreSQL
```

Puedes diseñar diferentes redes para separar partes de una aplicación.

Conceptualmente:

```text
Network A
   │
   ├── Frontend
   └── API

Network B
   │
   ├── API
   └── Database
```

De esta manera, la API puede comunicarse con ambas redes, mientras que la base de datos no necesita estar directamente expuesta al frontend.

---

# 🌍 DNS interno de Compose

Compose utiliza el sistema de networking de Docker para proporcionar **resolución de nombres entre services**.

Por ejemplo:

```text
api
 ↓
postgres
 ↓
Docker DNS
 ↓
IP actual de PostgreSQL
```

Esto evita depender de una IP fija:

```env
❌ DATABASE_HOST=172.18.0.5
```

y permite utilizar:

```env
✅ DATABASE_HOST=postgres
```

Si el container de PostgreSQL cambia de IP, el nombre:

```text
postgres
```

continúa siendo la forma adecuada de encontrarlo dentro de la red.

---

# 🧠 Service Name vs Container Name

En Compose debes pensar principalmente en:

```text
service name
```

Por ejemplo:

```yaml
services:
  postgres:
    image: postgres:17
```

Aquí:

```text
postgres
```

es el nombre del service.

Desde otro service puedes utilizar:

```text
postgres:5432
```

Esto conecta directamente con el concepto de **Service Discovery**:

```text
API
 ↓
Service Name
 ↓
Docker DNS
 ↓
Container
```

---

# 🚨 Error típico

Si tu aplicación está dentro de Docker Compose y tienes:

```yaml
services:

  api:
    build: .

  postgres:
    image: postgres:17
```

Tu configuración debería ser:

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

---

# 🔄 Mapa mental

La idea completa que debes tener es:

```text
                    Docker Compose
                         │
                         ▼
                  Docker Network
                         │
             ┌───────────┴───────────┐
             ▼                       ▼
          api:3000              postgres:5432
             │                       │
             │                       │
             └───────────┬───────────┘
                         │
                    Docker DNS
```

Y desde la aplicación:

```text
Express
   ↓
DATABASE_HOST=postgres
   ↓
Docker DNS
   ↓
PostgreSQL Container
   ↓
Port 5432
```

Mientras que desde tu computadora:

```text
Browser
   ↓
localhost:3000
   ↓
API Container
```

> [!NOTE]
>
> ### 💡 La idea que debes llevarte
>
> **Dentro de Compose, los containers se comunican utilizando los nombres de sus services y los puertos internos. Los `ports` sirven para publicar servicios hacia el host; no son necesarios para que dos services de la misma network se comuniquen entre sí.**
