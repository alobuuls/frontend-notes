# 📄 04 - Prisma.md ⭐⭐⭐

---

## 📑 ÍNDICE — 04 · Prisma ⭐⭐⭐

- [🧠 Prisma Schema](#-prisma-schema)
  - [`schema.prisma`](#schemaprisma)
- [🗄️ Prisma Models](#️-prisma-models)
- [🔎 Prisma Client](#-prisma-client)
  - [Métodos principales](#métodos-principales)
- [🔍 Prisma Queries](#-prisma-queries)
  - [Filtering](#filtering)
  - [Querying relations](#querying-relations)
  - [Nested queries](#nested-queries)
- [🔄 Prisma Migrations](#-prisma-migrations)
  - [Crear migrations](#crear-migrations)
  - [Aplicar migrations](#aplicar-migrations)
  - [Migration history](#migration-history)
  - [Development migrations](#development-migrations)
  - [Production migrations](#production-migrations)
  - [Cambios en el schema](#cambios-en-el-schema)
  - [Evolución del schema](#evolución-del-schema)
- [🔄 Prisma Transactions](#-prisma-transactions)
  - [`$transaction`](#transaction)
  - [Sequential transactions](#sequential-transactions)
  - [Interactive transactions](#interactive-transactions)
  - [Cuándo utilizar una transaction](#cuándo-utilizar-una-transaction)
- [🌱 Prisma Seeding](#-prisma-seeding)
  - [Seed data](#seed-data)
  - [Configuración del seed](#configuración-del-seed)
  - [Cuándo utilizarlo](#cuándo-utilizarlo)
  - [Desarrollo](#desarrollo)
  - [Testing](#testing)
- [⚠️ Raw SQL](#️-raw-sql)
  - [`$queryRaw`](#queryraw)
  - [`$executeRaw`](#executeraw)
  - [Cuándo utilizar Raw SQL](#cuándo-utilizar-raw-sql)
  - [Cuándo preferir Prisma Client](#cuándo-preferir-prisma-client)
  - [Riesgos de SQL Injection con Raw SQL](#riesgos-de-sql-injection-con-raw-sql)
  - [🧠 Idea fundamental](#-idea-fundamental)

## 🧠 Prisma Schema

### `schema.prisma`

Estudia:

* `datasource`
* `generator`
* `model`
* fields
* types
* attributes

Conceptualmente:

```prisma
model User {
    id
    name
    email
}
```

---

## 🗄️ Prisma Models

Estudia cómo Prisma define modelos mediante `model`.

```text
schema.prisma
      ↓
   model
      ↓
 Database Table
```

Estudia:

* Definición de modelos
* Tipos de campos
* Atributos de campos
* Identificadores
* Relaciones entre modelos

---

## 🔎 Prisma Client

Estudia:

```text
Prisma Client
     ↓
Type-safe API
     ↓
Database
```

### Métodos principales

| Operación  | Métodos                                       |
| ---------- | --------------------------------------------- |
| 🔍 Read    | `findMany()` · `findUnique()` · `findFirst()` |
| ➕ Create   | `create()` · `createMany()`                   |
| 🔄 Update  | `update()` · `updateMany()`                   |
| 🗑️ Delete | `delete()` · `deleteMany()`                   |

Entiende qué devuelve cada operación y cuándo utilizar cada método.

---

## 🔍 Prisma Queries

Estudia cómo construir consultas utilizando Prisma Client.

| Opción    | Función                            |
| --------- | ---------------------------------- |
| `where`   | Filtrar resultados                 |
| `select`  | Elegir qué campos devolver         |
| `include` | Incluir relaciones en el resultado |
| `orderBy` | Ordenar resultados                 |
| `take`    | Limitar la cantidad de resultados  |
| `skip`    | Saltar resultados                  |

También estudia:

* Filtering
* Querying relations
* Nested queries

Conceptualmente:

```text
User
 ↓
Orders
 ↓
user + orders
```

---

## 🔄 Prisma Migrations

🔥 Uno de los temas más importantes de Prisma.

Entiende el flujo:

```text
schema.prisma
      ↓
Migration
      ↓
Database
```

Estudia:

* Crear migrations
* Aplicar migrations
* Migration history
* Development migrations
* Production migrations
* Cambios en el schema
* Evolución del schema

---

## 🔄 Prisma Transactions

Estudia cómo ejecutar varias operaciones como una única unidad de trabajo.

```text
Transaction
     ↓
Operation 1
     ↓
Operation 2
     ↓
Operation 3
     ↓
Commit / Rollback
```

En Prisma estudia:

* `$transaction`
* Sequential transactions
* Interactive transactions
* Cuándo utilizar una transaction

---

## 🌱 Prisma Seeding

Estudia:

* Qué es Prisma seeding
* Seed data
* Configuración del seed
* Cuándo utilizarlo
* Desarrollo
* Testing

Conceptualmente:

```text
Seed Script
     ↓
Prisma Client
     ↓
Database
     ↓
Initial Data
```

---

## ⚠️ Raw SQL

Prisma **no elimina la necesidad de SQL**.

Entiende:

```text
Prisma
  ↓
Prisma Client
  ↓
SQL
  ↓
PostgreSQL
```

Estudia:

* `$queryRaw`
* `$executeRaw`
* Cuándo utilizar Raw SQL
* Cuándo preferir Prisma Client
* Riesgos de SQL Injection con Raw SQL

### 🧠 Idea fundamental

```text
Prisma
   ↓
ORM
   ↓
Type-safe database access
   ↓
SQL
   ↓
PostgreSQL
```

> No necesitas volver a estudiar aquí qué es un ORM, relaciones, CRUD, migrations, transactions, etc.; esos conceptos ya quedaron cubiertos en los documentos anteriores.
