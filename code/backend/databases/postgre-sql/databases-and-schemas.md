# 📄 Databases & Schemas

## 🗄️ PostgreSQL Database

Una **Database** es un contenedor lógico que agrupa los objetos y datos de una aplicación dentro de PostgreSQL.

Por ejemplo:

```text
PostgreSQL Server
      │
      ├── Database
      └── Database
```

Una database puede contener diferentes **schemas**.

---

## 📑 ÍNDICE 

- [📄 Databases \& Schemas](#-databases--schemas)
  - [🗄️ PostgreSQL Database](#️-postgresql-database)
  - [📑 ÍNDICE](#-índice)
  - [📁 PostgreSQL Schema](#-postgresql-schema)
  - [🌐 Public Schema](#-public-schema)
  - [🆚 Database vs Schema](#-database-vs-schema)
    - [Database](#database)
    - [Schema](#schema)
  - [🔎 Search Path](#-search-path)
  - [🏗️ Creating Databases](#️-creating-databases)
  - [📁 Creating Schemas](#-creating-schemas)
  - [🗑️ Dropping Schemas](#️-dropping-schemas)
  - [🗂️ Schema Organization](#️-schema-organization)
  - [🧠 Estructura mental](#-estructura-mental)

## 📁 PostgreSQL Schema

Un **Schema** es un espacio de nombres dentro de una database que permite organizar objetos como:

```text
Schema
 ├── Tables
 ├── Views
 └── Functions
```

Por ejemplo:

```text
Database
   │
   ├── Schema
   │    ├── users
   │    └── orders
   │
   └── Schema
        └── products
```

Los schemas ayudan a **organizar y separar objetos** dentro de una misma database.

---

## 🌐 Public Schema

`public` es el schema que PostgreSQL utiliza normalmente **por defecto** cuando se crea una database.

Por ejemplo:

```text
Database
   │
   └── public
        ├── users
        ├── orders
        └── products
```

Cuando creas una tabla sin especificar un schema, normalmente termina en `public`.

---

## 🆚 Database vs Schema

Es importante no confundirlos:

```text
PostgreSQL Server
       │
       ├── Database
       │      │
       │      ├── Schema
       │      └── Schema
       │
       └── Database
```

### Database

Es un **contenedor de nivel superior**.

### Schema

Es un **espacio de organización dentro de una database**.

Por lo tanto:

```text
Database
   ≠
Schema
```

Una database puede contener múltiples schemas.

---

## 🔎 Search Path

`search_path` indica a PostgreSQL **en qué schemas debe buscar los objetos cuando no especificas explícitamente el schema**.

Por ejemplo:

```sql
SELECT *
FROM users;
```

PostgreSQL utiliza el `search_path` para determinar dónde buscar `users`.

En cambio, puedes especificar directamente el schema:

```sql
SELECT *
FROM public.users;
```

Conceptualmente:

```text
Query
  ↓
search_path
  ↓
Schema
  ↓
Object
```

---

## 🏗️ Creating Databases

Para crear una database:

```sql
CREATE DATABASE my_database;
```

Esto crea una nueva database dentro del PostgreSQL Server.

---

## 📁 Creating Schemas

Para crear un schema:

```sql
CREATE SCHEMA my_schema;
```

Después puedes crear objetos dentro de él:

```text
Database
   │
   └── my_schema
         ├── Table
         ├── View
         └── Function
```

---

## 🗑️ Dropping Schemas

Para eliminar un schema:

```sql
DROP SCHEMA my_schema;
```

Si el schema contiene objetos, PostgreSQL puede impedir su eliminación dependiendo de las opciones utilizadas.

---

## 🗂️ Schema Organization

Los schemas permiten organizar los objetos de una database.

Por ejemplo:

```text
Database
   │
   ├── public
   │    ├── users
   │    └── orders
   │
   ├── admin
   │    └── users
   │
   └── reporting
        └── sales
```

Esto permite separar objetos según su propósito u organización.

---

## 🧠 Estructura mental

```text
PostgreSQL Server
       │
       ├── Database
       │      │
       │      ├── Schema
       │      │     ├── Tables
       │      │     ├── Views
       │      │     └── Functions
       │      │
       │      └── Schema
       │
       └── Database
```

La idea fundamental:

> **Una Database contiene Schemas, y los Schemas contienen objetos como Tables, Views y Functions.**
