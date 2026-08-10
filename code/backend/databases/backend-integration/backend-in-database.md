# 📄 01 - Backend + Database.md ⭐⭐⭐

## 📚 ÍNDICE 

- [📄 01 - Backend + Database.md ⭐⭐⭐](#-01---backend--databasemd-)
  - [📚 ÍNDICE](#-índice)
  - [🔌 ¿Cómo un backend se conecta a una database?](#-cómo-un-backend-se-conecta-a-una-database)
  - [🔗 Database Connection](#-database-connection)
  - [⚙️ Connection Configuration](#️-connection-configuration)
  - [🔄 Connection Lifecycle](#-connection-lifecycle)
  - [🗄️ Database Client](#️-database-client)
  - [🔎 Queries desde el Backend](#-queries-desde-el-backend)
  - [📝 CRUD desde el Backend](#-crud-desde-el-backend)
  - [⚠️ Manejo de errores de Database](#️-manejo-de-errores-de-database)
  - [🔄 Connection Pooling](#-connection-pooling)
  - [🔐 Transactions desde el Backend](#-transactions-desde-el-backend)
  - [🌎 Environment Variables](#-environment-variables)
- [🧩 Separación de responsabilidades](#-separación-de-responsabilidades)
- [🔥 Flujo completo](#-flujo-completo)
    - [🧠 La idea fundamental](#-la-idea-fundamental)

## 🔌 ¿Cómo un backend se conecta a una database?

El backend necesita un **database client/driver** para comunicarse con la database.

```text
Backend
   ↓
Database Driver / Client
   ↓
Database
```

Por ejemplo:

```text
Express
   ↓
Prisma
   ↓
PostgreSQL
```

---

## 🔗 Database Connection

Una **database connection** es el canal que permite al backend comunicarse con la database.

Conceptualmente:

```text
Application
     ↓
Connection
     ↓
Database
```

La conexión necesita información como:

* Host
* Port
* Database name
* Username
* Password

---

## ⚙️ Connection Configuration

La configuración de la conexión determina cómo el backend accederá a la database.

Conceptualmente:

```text
Configuration
      ↓
Database Client
      ↓
Database Connection
```

La configuración normalmente se obtiene mediante **Environment Variables**.

---

## 🔄 Connection Lifecycle

Una conexión tiene un ciclo de vida:

```text
Create
  ↓
Connect
  ↓
Use
  ↓
Query
  ↓
Release / Close
```

Cuando utilizas **Connection Pooling**, las conexiones pueden reutilizarse en lugar de crear una nueva para cada request.

---

## 🗄️ Database Client

El **Database Client** es la herramienta que permite al backend ejecutar operaciones contra la database.

```text
Backend
   ↓
Database Client
   ↓
Queries
   ↓
Database
```

Ejemplos:

```text
Prisma Client
pg
Mongoose
Sequelize
TypeORM
```

Dependiendo de la database y la herramienta utilizada.

---

## 🔎 Queries desde el Backend

El backend ejecuta queries para obtener o modificar información.

```text
Request
   ↓
Backend
   ↓
Query
   ↓
Database
   ↓
Result
```

Por ejemplo:

```text
GET /users
    ↓
Service
    ↓
Query users
    ↓
PostgreSQL
    ↓
Users
```

---

## 📝 CRUD desde el Backend

El backend puede realizar las operaciones principales:

```text
Create
Read
Update
Delete
```

Por ejemplo:

| HTTP     | Endpoint | Operación |
| -------- | -------- | --------- |
| `POST`   | `/users` | Create    |
| `GET`    | `/users` | Read      |
| `PATCH`  | `/users` | Update    |
| `DELETE` | `/users` | Delete    |

```
```

## ⚠️ Manejo de errores de Database

Las operaciones de database pueden fallar.

Por ejemplo:

```text
Backend
   ↓
Database Query
   ↓
❌ Error
```

El backend debe:

* Detectar el error
* Manejarlo correctamente
* Evitar exponer información sensible
* Devolver una respuesta HTTP apropiada

Conceptualmente:

```text
Database Error
      ↓
Service / Controller
      ↓
HTTP Error Response
      ↓
Frontend
```

---

## 🔄 Connection Pooling

Cuando existen muchas requests, crear una conexión nueva para cada una puede ser costoso.

Por eso se utiliza un **connection pool**:

```text
Express
   ↓
Connection Pool
   ├── Connection 1
   ├── Connection 2
   ├── Connection 3
   └── Connection 4
          ↓
      Database
```

Las conexiones se reutilizan entre requests.

---

## 🔐 Transactions desde el Backend

El backend puede ejecutar varias operaciones como una sola transaction.

```text
Request
   ↓
BEGIN
   ↓
Operation 1
   ↓
Operation 2
   ↓
Operation 3
   ↓
COMMIT
```

Si ocurre un error:

```text
Operation
   ↓
❌ Error
   ↓
ROLLBACK
```

Esto permite mantener la integridad de una operación completa.

---

## 🌎 Environment Variables

Las credenciales y configuración de la database **no deberían estar directamente escritas en el código fuente**.

Por ejemplo:

```text
DATABASE_HOST
DATABASE_PORT
DATABASE_NAME
DATABASE_USER
DATABASE_PASSWORD
DATABASE_URL
```

Conceptualmente:

```text
Environment Variables
        ↓
Database Configuration
        ↓
Database Client
        ↓
Database
```

---

# 🧩 Separación de responsabilidades

Una arquitectura común separa las responsabilidades:

```text
Controller
   ↓
HTTP
```

```text
Service
   ↓
Business Logic
```

```text
Database / Repository
   ↓
Data Access
```

```text
Database
   ↓
Data Storage
```

Cada capa tiene una responsabilidad diferente.

---

# 🔥 Flujo completo

Este es el flujo que debes poder visualizar:

```text
Frontend
   ↓
HTTP Request
   ↓
Express
   ↓
Route
   ↓
Controller
   ↓
Service
   ↓
Database Access
   ↓
Database
   ↓
Result
   ↓
Service
   ↓
Controller
   ↓
HTTP Response
   ↓
Frontend
```

Por ejemplo:

```text
POST /users
      ↓
users.controller
      ↓
users.service
      ↓
users.repository
      ↓
PostgreSQL
      ↓
Result
      ↓
users.service
      ↓
users.controller
      ↓
HTTP Response
```

### 🧠 La idea fundamental

```text
Controller
   ↓
HTTP
```

```text
Service
   ↓
Business Logic
```

```text
Repository / Database Access
   ↓
Data Access
```

```text
Database
   ↓
Data Storage
```

Este flujo conecta **Express + arquitectura backend + ORM + PostgreSQL + transactions + connection pooling + HTTP** en una sola pieza.
