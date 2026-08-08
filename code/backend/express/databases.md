# 🗄️ DATABASES

Express por sí mismo **no almacena los datos de tu aplicación**. Para guardar información de forma persistente necesitas conectarlo con una base de datos.

El flujo habitual es:

```text
Express
   ↓
Service
   ↓
Repository
   ↓
Database
```

La base de datos se encarga de **persistir la información**, mientras que Express se encarga principalmente de manejar las peticiones y respuestas HTTP.

---

## 📑 ÍNDICE — DATABASES

- [🗄️ DATABASES](#️-databases)
  - [📑 ÍNDICE — DATABASES](#-índice--databases)
- [1️⃣ 🔌 EXPRESS + DATABASE](#1️⃣--express--database)
- [2️⃣ 🆚 SQL VS NOSQL](#2️⃣--sql-vs-nosql)
  - [🧱 SQL](#-sql)
  - [📦 NoSQL](#-nosql)
    - [🧠 Diferencia mental](#-diferencia-mental)
- [3️⃣ 🐘 POSTGRESQL](#3️⃣--postgresql)
- [4️⃣ 🐬 MYSQL](#4️⃣--mysql)
- [5️⃣ 🍃 MONGODB](#5️⃣--mongodb)
- [6️⃣ 🪶 SQLITE](#6️⃣--sqlite)
- [7️⃣ 🔌 DATABASE CONNECTION](#7️⃣--database-connection)
- [8️⃣ 🔎 QUERIES](#8️⃣--queries)
- [9️⃣ 🧩 MODELS](#9️⃣--models)
- [🔗 1️⃣0️⃣ RELATIONSHIPS](#-1️⃣0️⃣-relationships)
    - [Ejemplo](#ejemplo)
    - [Relaciones comunes](#relaciones-comunes)
- [🔄 1️⃣1️⃣ TRANSACTIONS](#-1️⃣1️⃣-transactions)
    - [🧠 Idea clave](#-idea-clave)
- [🗃️ 1️⃣2️⃣ REPOSITORIES](#️-1️⃣2️⃣-repositories)
    - [🧠 Responsabilidades](#-responsabilidades)
- [🧩 ORM / ODM](#-orm--odm)
  - [🏗️ ORM](#️-orm)
- [🍃 ODM](#-odm)
    - [🧠 ORM vs ODM](#-orm-vs-odm)
- [🏗️ ARQUITECTURA COMPLETA](#️-arquitectura-completa)
- [🧠 IDEA CLAVE](#-idea-clave-1)

---

# 1️⃣ 🔌 EXPRESS + DATABASE

Una aplicación Express puede conectarse a diferentes tipos de bases de datos.

Por ejemplo:

```text
Express
   ↓
Service
   ↓
Repository
   ↓
PostgreSQL
```

o:

```text
Express
   ↓
Service
   ↓
Repository
   ↓
MongoDB
```

Express no obliga a utilizar una base de datos específica.

---

# 2️⃣ 🆚 SQL VS NOSQL

Las bases de datos suelen clasificarse, de forma general, en **SQL** y **NoSQL**.

## 🧱 SQL

Las bases de datos SQL utilizan principalmente:

* tablas
* filas
* columnas
* relaciones
* SQL

Ejemplo conceptual:

```text
USERS
┌────┬─────────┬──────────────────┐
│ id │ name    │ email            │
├────┼─────────┼──────────────────┤
│ 1  │ Ana     │ ana@example.com  │
│ 2  │ Luis    │ luis@example.com │
└────┴─────────┴──────────────────┘
```

Ejemplos:

* PostgreSQL
* MySQL
* SQLite

---

## 📦 NoSQL

NoSQL utiliza diferentes estructuras dependiendo de la base de datos.

En MongoDB, por ejemplo, los datos se almacenan como **documentos**.

```json
{
  "_id": 1,
  "name": "Ana",
  "email": "ana@example.com"
}
```

Ejemplo:

```text
MongoDB
   ↓
Collections
   ↓
Documents
```

### 🧠 Diferencia mental

```text
SQL
↓
Tablas + relaciones

NoSQL
↓
Documentos / estructuras flexibles
```

> [!IMPORTANT]
> No significa que SQL sea "mejor" que NoSQL o viceversa. La elección depende de las necesidades de la aplicación.

---

# 3️⃣ 🐘 POSTGRESQL

**PostgreSQL** es una base de datos relacional SQL.

Utiliza:

```text
Database
   ↓
Tables
   ↓
Rows
   ↓
Columns
```

Ejemplo:

```text
users
├── id
├── name
├── email
└── created_at
```

Es muy utilizada en aplicaciones backend por sus capacidades para:

* relaciones
* consultas complejas
* transacciones
* integridad de datos
* grandes cantidades de información

---

# 4️⃣ 🐬 MYSQL

**MySQL** también es una base de datos relacional SQL.

Su modelo principal es:

```text
Database
   ↓
Tables
   ↓
Rows
   ↓
Columns
```

Ejemplo:

```text
products
├── id
├── name
├── price
└── stock
```

Al igual que PostgreSQL, utiliza SQL para realizar consultas.

---

# 5️⃣ 🍃 MONGODB

**MongoDB** es una base de datos NoSQL orientada a documentos.

Su estructura principal es:

```text
Database
   ↓
Collections
   ↓
Documents
```

Ejemplo:

```json
{
  "_id": "123",
  "name": "Ana",
  "age": 25,
  "skills": ["Angular", "React"]
}
```

Una diferencia importante respecto a SQL es que los datos no tienen que organizarse necesariamente en tablas y columnas.

---

# 6️⃣ 🪶 SQLITE

**SQLite** es una base de datos SQL ligera que funciona como un archivo local.

Por ejemplo:

```text
my-app/
├── src/
└── database.sqlite
```

No necesitas ejecutar un servidor de base de datos independiente para utilizarla.

Es especialmente útil para:

* proyectos pequeños
* prototipos
* testing
* aplicaciones locales
* desarrollo

---

# 7️⃣ 🔌 DATABASE CONNECTION

Antes de realizar consultas, la aplicación necesita establecer una conexión con la base de datos.

Conceptualmente:

```text
Express
   ↓
Database Driver / ORM / ODM
   ↓
Database Connection
   ↓
Database
```

Por ejemplo:

```text
Application starts
       ↓
Connect to PostgreSQL
       ↓
Connection successful
       ↓
Application ready
```

La configuración de conexión normalmente utiliza variables de entorno:

```env
DATABASE_URL=...
```

> [!WARNING]
> Las credenciales de una base de datos no deberían escribirse directamente en el código ni subirse a GitHub.

---

# 8️⃣ 🔎 QUERIES

Una **query** es una operación que solicita o modifica información en una base de datos.

En SQL:

```sql
SELECT * FROM users;
```

Esto significa:

> Obtener los usuarios de la tabla `users`.

Crear:

```sql
INSERT INTO users (name, email)
VALUES ('Ana', 'ana@example.com');
```

Actualizar:

```sql
UPDATE users
SET name = 'Ana López'
WHERE id = 1;
```

Eliminar:

```sql
DELETE FROM users
WHERE id = 1;
```

En MongoDB, las operaciones utilizan una sintaxis diferente.

> [!NOTE]
> El objetivo de esta sección es entender qué es una query. La sintaxis específica de SQL o MongoDB pertenece al estudio particular de cada base de datos.

---

# 9️⃣ 🧩 MODELS

Un **Model** representa la estructura de los datos que maneja la aplicación.

Por ejemplo, un usuario podría tener:

```text
User
├── id
├── name
├── email
└── password
```

Dependiendo de la tecnología utilizada, el Model puede representar:

* una tabla SQL
* una entidad
* un esquema
* un documento
* una estructura de datos

Por ejemplo:

```text
User Model
      ↓
users table
```

o:

```text
User Schema
      ↓
users collection
```

> [!IMPORTANT]
> El concepto de "Model" puede cambiar ligeramente dependiendo de si utilizas SQL, un ORM, MongoDB o un ODM.

---

# 🔗 1️⃣0️⃣ RELATIONSHIPS

En bases de datos relacionales, los datos pueden estar relacionados entre sí.

Por ejemplo:

```text
User
 │
 │ 1:N
 ▼
Orders
```

Un usuario puede tener muchas órdenes.

### Ejemplo

```text
users
┌────┬─────────┐
│ id │ name    │
├────┼─────────┤
│ 1  │ Ana     │
└────┴─────────┘

orders
┌────┬─────────┬─────────┐
│ id │ user_id │ total   │
├────┼─────────┼─────────┤
│ 10 │ 1       │ 100     │
│ 11 │ 1       │ 250     │
└────┴─────────┴─────────┘
```

Aquí:

```text
users.id
   ↑
   │
orders.user_id
```

### Relaciones comunes

| Relación | Significado     |
| -------- | --------------- |
| `1:1`    | Uno a uno       |
| `1:N`    | Uno a muchos    |
| `N:N`    | Muchos a muchos |

---

# 🔄 1️⃣1️⃣ TRANSACTIONS

Una **transaction** permite agrupar varias operaciones de base de datos para que se comporten como una sola operación lógica.

Por ejemplo:

```text
Crear pedido
      ↓
Descontar stock
      ↓
Registrar pago
```

Si una operación falla, puede ser necesario revertir las anteriores.

```text
BEGIN
  ↓
Crear Order
  ↓
Actualizar Stock
  ↓
Registrar Payment
  ↓
COMMIT
```

Si algo falla:

```text
BEGIN
  ↓
Crear Order
  ↓
Actualizar Stock ❌
  ↓
ROLLBACK
```

### 🧠 Idea clave

```text
COMMIT
↓
Confirmar cambios

ROLLBACK
↓
Deshacer cambios
```

Las transacciones son especialmente importantes cuando varias operaciones deben mantenerse consistentes.

---

# 🗃️ 1️⃣2️⃣ REPOSITORIES

El Repository actúa como una capa entre la lógica de negocio y la base de datos.

```text
Service
   ↓
Repository
   ↓
Database
```

Por ejemplo:

```text
UserService
     ↓
UserRepository.findById()
     ↓
PostgreSQL
```

El Service no necesita conocer todos los detalles de cómo se ejecuta la consulta.

### 🧠 Responsabilidades

**Service:**

> ¿Qué debe hacer la aplicación?

**Repository:**

> ¿Cómo obtengo o modifico los datos?

---

# 🧩 ORM / ODM

## 🏗️ ORM

**ORM** significa *Object-Relational Mapping*.

Permite trabajar con una base de datos SQL utilizando objetos y código de la aplicación en lugar de escribir todas las consultas SQL manualmente.

Ejemplos:

* Prisma
* TypeORM
* Sequelize

Conceptualmente:

```text
JavaScript / TypeScript
        ↓
       ORM
        ↓
    SQL Database
```

Por ejemplo:

```text
User
 ↓
ORM
 ↓
users table
```

---

# 🍃 ODM

**ODM** significa *Object-Document Mapping*.

Se utiliza principalmente con bases de datos orientadas a documentos como MongoDB.

Un ejemplo conocido es:

**Mongoose**

Conceptualmente:

```text
JavaScript / TypeScript
        ↓
       ODM
        ↓
     MongoDB
```

### 🧠 ORM vs ODM

| Concepto | Base de datos      | Ejemplos                   |
| -------- | ------------------ | -------------------------- |
| 🏗️ ORM  | SQL / relacional   | Prisma, TypeORM, Sequelize |
| 🍃 ODM   | Documentos / NoSQL | Mongoose                   |

---

# 🏗️ ARQUITECTURA COMPLETA

Uniendo todo lo estudiado hasta ahora:

```text
                    HTTP Request
                         ↓
                       Route
                         ↓
                     Controller
                         ↓
                       Service
                         ↓
                    Repository
                         ↓
                ORM / ODM / Driver
                         ↓
                     Database
```

Por ejemplo, utilizando PostgreSQL:

```text
Angular / React
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
Repository
      ↓
Prisma
      ↓
PostgreSQL
```

---

# 🧠 IDEA CLAVE

No necesitas memorizar todas las bases de datos ahora. Lo importante es entender **qué papel cumple cada elemento**:

| Elemento       | ¿Qué hace?                                |
| -------------- | ----------------------------------------- |
| 🟢 Express     | Maneja HTTP y el servidor                 |
| ⚙️ Service     | Contiene lógica de negocio                |
| 🗃️ Repository | Accede a los datos                        |
| 🏗️ ORM        | Facilita trabajar con bases SQL           |
| 🍃 ODM         | Facilita trabajar con bases de documentos |
| 🗄️ Database   | Persiste los datos                        |

El flujo fundamental que debes recordar es:

```text
Express
   ↓
Service
   ↓
Repository
   ↓
Database
```

Y **Express no depende de una única base de datos**: puedes construir una API utilizando PostgreSQL, MySQL, MongoDB, SQLite u otras tecnologías según las necesidades del proyecto.
