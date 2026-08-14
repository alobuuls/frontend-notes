# 📄 04 - Docker + PostgreSQL

> [!IMPORTANT]
> 🔥🔥 **MUY IMPORTANTE**
>
> Este documento conecta Docker con **PostgreSQL**, especialmente con los conceptos que ya estudiaste de databases: configuración, persistencia, networking e inicialización.
>
> La idea principal es aprender a utilizar PostgreSQL como un **servicio dentro de Docker**, sin perder tus datos cuando recreas el container.

---
## 📑 ÍNDICEL

1. 🐘 [PostgreSQL dentro de Docker](#-postgresql-dentro-de-docker)
2. 🔐 [Environment Variables](#-environment-variables)
3. 💾 [PostgreSQL + Volumes](#-postgresql--volumes)
4. 📦 [Named Volume](#-named-volume)
5. 🔄 [Recrear el Container](#-recrear-el-container)
6. 🌐 [PostgreSQL Networking](#-postgresql-networking)
7. 🚨 [`localhost` NO es PostgreSQL](#-localhost-no-es-postgresql)
8. 🔌 [¿Por qué PostgreSQL utiliza el puerto `5432`?](#-por-qué-postgresql-utiliza-el-puerto-5432)
9. 🌎 [¿Cuándo necesitas `ports`?](#-cuándo-necesitas-ports)
10. 🗄️ [Database Initialization](#️-database-initialization)
11. ⚠️ [Initialization ≠ Migrations](#️-initialization--migrations)
12. 🔄 [Docker + Migrations](#-docker--migrations)
13. 🧩 [PostgreSQL + Docker Compose](#-postgresql--docker-compose)
14. 🧠 [El mapa mental de PostgreSQL en Docker](#-el-mapa-mental-de-postgresql-en-docker)
15. 🎯 [Idea principal](#-idea-principal)

# 🐘 PostgreSQL dentro de Docker

En lugar de instalar PostgreSQL directamente en tu máquina:

```text
Host
 │
 └── PostgreSQL instalado
```

puedes utilizar una Docker Image:

```text
PostgreSQL Image
      ↓
PostgreSQL Container
      ↓
PostgreSQL Server
      ↓
Database
```

Por ejemplo:

```text
postgres:17
```

es una imagen que contiene PostgreSQL.

Puedes crear un container a partir de ella:

```bash
docker run --name postgres postgres:17
```

La relación fundamental es:

```text
postgres:17
     ↓
docker run
     ↓
PostgreSQL Container
     ↓
PostgreSQL
```

---

# 🔐 Environment Variables

La imagen oficial de PostgreSQL utiliza variables de entorno para configurar inicialmente la base de datos.

Las más importantes son:

| Variable            | Función                |
| ------------------- | ---------------------- |
| `POSTGRES_DB`       | Base de datos inicial  |
| `POSTGRES_USER`     | Usuario inicial        |
| `POSTGRES_PASSWORD` | Contraseña del usuario |

Por ejemplo:

```bash
docker run \
  --name postgres \
  -e POSTGRES_DB=myapp \
  -e POSTGRES_USER=admin \
  -e POSTGRES_PASSWORD=secret \
  postgres:17
```

Conceptualmente:

```text
Environment Variables
        ↓
PostgreSQL Container
        ↓
PostgreSQL Configuration
        ↓
Database
```

Por ejemplo:

```text
POSTGRES_DB=myapp
```

indica la base de datos inicial que quieres utilizar.

```text
POSTGRES_USER=admin
```

define el usuario inicial.

```text
POSTGRES_PASSWORD=secret
```

define su contraseña.

> [!WARNING]
> ⚠️ En proyectos reales, evita escribir contraseñas directamente en comandos, Dockerfiles o archivos que vayan a Git.
>
> Puedes proporcionar esta configuración mediante un `.env`, Compose u otros mecanismos de configuración.

---

# 💾 PostgreSQL + Volumes

> [!IMPORTANT]
> 🔥 Este es probablemente el concepto más importante de Docker + PostgreSQL.

Un container tiene un filesystem propio.

Si PostgreSQL guarda sus datos únicamente dentro de ese filesystem:

```text
PostgreSQL Container
       ↓
Container Filesystem
       ↓
Database Data
```

y posteriormente eliminas el container:

```text
PostgreSQL Container
       ↓
docker rm
       ↓
❌ Container eliminado
       ↓
❌ Datos pueden perderse
```

Por eso PostgreSQL normalmente necesita un **Docker Volume**.

```text
PostgreSQL Container
       ↓
Docker Volume
       ↓
Persistent Data
```

Ahora puedes eliminar y recrear el container:

```text
PostgreSQL Container
       ↓
docker rm
       ↓
❌ Container eliminado

Docker Volume
       ↓
✅ Sigue existiendo
```

Después:

```text
New PostgreSQL Container
       ↓
Same Volume
       ↓
✅ Previous Data
```

> [!TIP]
> 🧠 **El container puede ser reemplazado; los datos deben vivir fuera del ciclo de vida del container.**

---

# 📦 Named Volume

Puedes crear un volume:

```bash
docker volume create postgres_data
```

Ver los volumes:

```bash
docker volume ls
```

Y utilizarlo con PostgreSQL:

```bash
docker run \
  --name postgres \
  -v postgres_data:/var/lib/postgresql/data \
  postgres:17
```

La estructura conceptual es:

```text
Docker
 │
 ├── Container
 │      │
 │      ▼
 │   PostgreSQL
 │
 └── Volume
        │
        ▼
   Database Data
```

La ruta:

```text
/var/lib/postgresql/data
```

es el directorio donde PostgreSQL almacena sus datos dentro de la imagen/container.

El volume se monta sobre esa ubicación.

```text
postgres_data
      │
      ▼
/var/lib/postgresql/data
      │
      ▼
PostgreSQL
```

---

# 🔄 Recrear el Container

Supongamos que tienes:

```text
postgres
   ↓
postgres_data
   ↓
Users
Tables
Records
```

Eliminas el container:

```bash
docker rm -f postgres
```

El volume continúa existiendo:

```text
postgres_data
   ↓
Users
Tables
Records
```

Ahora creas otro container utilizando el mismo volume:

```bash
docker run \
  --name postgres \
  -v postgres_data:/var/lib/postgresql/data \
  postgres:17
```

Resultado:

```text
New Container
      ↓
Existing Volume
      ↓
Existing PostgreSQL Data
```

Esto es exactamente lo que buscas en un entorno donde los containers pueden ser recreados.

---

# 🌐 PostgreSQL Networking

Ahora conecta PostgreSQL con tu backend.

Supongamos:

```text
Express
PostgreSQL
```

y ambos están dentro de la misma Docker Network:

```text
Docker Network
       │
   ┌───┴────┐
   ▼        ▼
 Express  PostgreSQL
```

El backend necesita conectarse a PostgreSQL.

Dentro de Docker puedes utilizar el nombre del servicio/container:

```text
DATABASE_HOST=postgres
DATABASE_PORT=5432
```

Por ejemplo:

```text
Express Container
       │
       │ postgres:5432
       ▼
PostgreSQL Container
```

---

# 🚨 `localhost` NO es PostgreSQL

> [!IMPORTANT]
> 🧠 Este concepto debes tenerlo clarísimo.

Si tienes:

```text
Express Container
PostgreSQL Container
```

y Express intenta:

```text
localhost:5432
```

`localhost` significa:

> **El propio Express container.**

No significa:

```text
PostgreSQL Container
```

Por eso:

```text
❌ DATABASE_HOST=localhost
```

normalmente está mal cuando PostgreSQL está en otro container.

Lo correcto sería:

```text
✅ DATABASE_HOST=postgres
```

si `postgres` es el nombre del servicio/container.

Entonces:

```text
Express
   ↓
postgres:5432
   ↓
PostgreSQL
```

---

# 🔌 ¿Por qué PostgreSQL utiliza el puerto `5432`?

PostgreSQL utiliza normalmente:

```text
5432
```

como puerto interno.

Por ejemplo:

```text
PostgreSQL Container
       │
       └── :5432
```

> [!NOTE]
> El puerto interno no necesita publicarse para que otro container de la misma network pueda utilizarlo.

Puedes tener:

```text
Express
   │
   │ postgres:5432
   ▼
PostgreSQL
```

sin necesariamente utilizar:

```yaml
ports:
  - "5432:5432"
```

---

# 🌎 ¿Cuándo necesitas `ports`?

`ports` es principalmente necesario cuando quieres acceder al container **desde fuera de la Docker Network**, por ejemplo desde tu máquina.

```text
HOST
localhost:5432
      ↓
PostgreSQL Container
      ↓
PostgreSQL :5432
```

Por ejemplo:

```bash
docker run \
  -p 5432:5432 \
  --name postgres \
  postgres:17
```

Entonces una herramienta instalada en tu máquina podría conectarse mediante:

```text
localhost:5432
```

Por ejemplo:

```text
DBeaver
   ↓
localhost:5432
   ↓
PostgreSQL Container
```

Pero entre containers:

```text
Express
   ↓
postgres:5432
```

No:

```text
❌ localhost:5432
```

---

# 🗄️ Database Initialization

La imagen oficial de PostgreSQL también permite realizar una **inicialización automática** cuando se crea una base de datos nueva.

Conceptualmente:

```text
PostgreSQL Container
       ↓
First Initialization
       ↓
Database
       ↓
Initialization Scripts
       ↓
Tables / Initial Data
```

Puedes proporcionar scripts SQL en un directorio de inicialización.

Conceptualmente:

```text
init.sql
   ↓
PostgreSQL
   ↓
Database initialization
```

Por ejemplo:

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100)
);
```

Esto permite automatizar la preparación inicial de una base de datos.

---

# ⚠️ Initialization ≠ Migrations

> [!WARNING]
> ⚠️ No confundas ambos conceptos.

### 🆕 Initialization

Normalmente ocurre cuando PostgreSQL crea una **base de datos nueva**.

```text
New Database
     ↓
Initialization
     ↓
Initial Schema
```

### 🔄 Migrations

Se utilizan para evolucionar el esquema de una base de datos existente.

```text
Database v1
     ↓
Migration
     ↓
Database v2
```

Por ejemplo:

```text
Migration
   ↓
ALTER TABLE
   ↓
Add column
```

Docker no reemplaza tu sistema de migrations.

Docker simplemente proporciona el entorno donde se ejecutan:

```text
Application / Migration Tool
          ↓
       Network
          ↓
      PostgreSQL
```

---

# 🔄 Docker + Migrations

En un proyecto real puedes tener:

```text
Express Container
       │
       ├── Application
       │
       └── Migration Tool
                │
                ▼
        PostgreSQL Container
```

Por ejemplo, conceptualmente:

```text
docker compose up
       ↓
PostgreSQL
       ↓
Database ready
       ↓
Migration
       ↓
Tables updated
       ↓
API
```

La herramienta concreta puede ser Prisma, TypeORM, Sequelize, Knex, Flyway, etc.

> [!TIP]
> 🧠 Lo importante aquí no es volver a estudiar migrations, sino entender que **Docker proporciona el entorno y networking necesarios para que las migrations puedan conectarse a PostgreSQL**.

---

# 🧩 PostgreSQL + Docker Compose

En aplicaciones reales, PostgreSQL normalmente encaja muy bien con Compose:

```yaml
services:

  postgres:
    image: postgres:17

    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: secret

    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

Aquí ya estás utilizando varios conceptos que estudiaste anteriormente:

| Concepto              | Uso                 |
| --------------------- | ------------------- |
| Compose               | Orquestación        |
| Service               | Servicio PostgreSQL |
| Image                 | `postgres:17`       |
| Environment Variables | Configuración       |
| Volume                | Persistencia        |

Y si agregas Express:

```yaml
services:

  api:
    build: ./backend
    environment:
      DATABASE_HOST: postgres
      DATABASE_PORT: 5432

  postgres:
    image: postgres:17

    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: secret

    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

La arquitectura queda:

```text
                Docker Compose
                      │
            ┌─────────┴─────────┐
            ▼                   ▼
       API Service       PostgreSQL Service
            │                   │
            │                   │
            └────── Network ────┘
                      │
                   postgres
                      │
                      ▼
                 PostgreSQL
                      │
                      ▼
                postgres_data
                      │
                      ▼
                Persistent Data
```

---

# 🧠 El mapa mental de PostgreSQL en Docker

Todos los conceptos se conectan así:

```text
             postgres:17
                  │
                  ▼
        PostgreSQL Container
                  │
        ┌─────────┼─────────┐
        ▼         ▼         ▼
 Environment   Network    Volume
 Variables        │          │
        │         ▼          ▼
        │      Express   Persistent Data
        │
        ▼
 Database Configuration
```

Y en una aplicación completa:

```text
                    Docker Compose
                          │
            ┌─────────────┴─────────────┐
            ▼                           ▼
       Express API                PostgreSQL
            │                           │
            │ postgres:5432             │
            └────────── Network ─────────┘
                                        │
                                        ▼
                                 postgres_data
                                        │
                                        ▼
                                  Persistent Data
```

> [!IMPORTANT]
> 🔥 **La idea que debes llevarte:**
>
> **PostgreSQL puede ejecutarse perfectamente dentro de un container, pero sus datos deben vivir en un almacenamiento persistente y su configuración/conexión debe manejarse mediante variables de entorno y networking.**
