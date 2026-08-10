# 📄 05 - TypeORM.md

## 📚 ÍNDICE 

- [📄 05 - TypeORM.md](#-05---typeormmd)
  - [📚 ÍNDICE](#-índice)
  - [🧠 ¿Qué es TypeORM?](#-qué-es-typeorm)
  - [🏛️ Entities](#️-entities)
  - [📦 Repositories](#-repositories)
  - [🔌 DataSource](#-datasource)
  - [📝 CRUD básico](#-crud-básico)
  - [🔗 Relations](#-relations)
  - [🔄 Migrations](#-migrations)
  - [🔎 Query Builder](#-query-builder)
  - [🔄 Transactions](#-transactions)
- [🆚 Prisma vs TypeORM](#-prisma-vs-typeorm)
- [⭐ Reconocer TypeORM](#-reconocer-typeorm)

## 🧠 ¿Qué es TypeORM?

**TypeORM** es un **ORM para TypeScript y JavaScript** que permite trabajar con bases de datos relacionales utilizando clases y objetos.

```text
TypeScript
    ↓
TypeORM
    ↓
SQL
    ↓
Relational Database
```

Su principal característica es el uso de **Entities** para representar tablas.

---

## 🏛️ Entities

Una **Entity** representa una tabla de la database mediante una clase.

```ts
@Entity()
class User {
    id: number;
    name: string;
    email: string;
}
```

Conceptualmente:

```text
@Entity()
    ↓
 User Entity
    ↓
users table
```

---

## 📦 Repositories

Un **Repository** proporciona métodos para interactuar con una Entity y sus datos.

Conceptualmente:

```text
User Entity
     ↓
User Repository
     ↓
Database
```

Estudia:

* Qué es un Repository
* Obtener un Repository
* Utilizar un Repository para operaciones CRUD
* Repository vs Entity

---

## 🔌 DataSource

El **DataSource** representa la configuración y conexión de TypeORM con la database.

Conceptualmente:

```text
DataSource
    ↓
Database Connection
    ↓
TypeORM
    ↓
Database
```

Estudia:

* Qué es `DataSource`
* Configuración
* Inicialización
* Conexión con la database

---

## 📝 CRUD básico

Estudia cómo realizar operaciones básicas mediante TypeORM:

```text
Create
Read
Update
Delete
```

Principalmente mediante:

```text
Repository
    ↓
CRUD
    ↓
Database
```

No necesitas memorizar todos los métodos.

---

## 🔗 Relations

Estudia cómo TypeORM representa relaciones entre Entities.

```text
User
 │
 └── Orders
```

Principalmente:

* One-to-One
* One-to-Many
* Many-to-One
* Many-to-Many

Entiende cómo se definen las relaciones entre Entities.

---

## 🔄 Migrations

Estudia cómo TypeORM utiliza migrations para gestionar cambios en el schema de la database.

```text
Entity
   ↓
Migration
   ↓
Database
```

Entiende:

* Qué es una migration en TypeORM
* Crear migrations
* Ejecutar migrations
* Revertir migrations

---

## 🔎 Query Builder

TypeORM proporciona un **Query Builder** para construir queries de forma programática.

Conceptualmente:

```text
Query Builder
      ↓
    SQL
      ↓
 Database
```

Estudia:

* Qué es Query Builder
* Construcción de consultas
* Filtering
* Joins
* Ordenamiento

No necesitas memorizar todos sus métodos.

---

## 🔄 Transactions

TypeORM permite ejecutar varias operaciones dentro de una transaction.

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

Estudia cómo TypeORM inicia, ejecuta y finaliza una transaction.

---

# 🆚 Prisma vs TypeORM

Debes conocer las diferencias principales:

```text
Prisma
   ↓
Schema-first
   ↓
Prisma Client
```

vs.

```text
TypeORM
   ↓
Entity-based
   ↓
Repositories
```

Compara principalmente:

| Prisma               | TypeORM              |
| -------------------- | -------------------- |
| Schema / Entities    | Schema / Entities    |
| Type safety          | Type safety          |
| Migrations           | Migrations           |
| Querying             | Querying             |
| Relations            | Relations            |
| Query Builder        | Query Builder        |
| Developer experience | Developer experience |

No necesitas memorizar todos los métodos de TypeORM.

---

# ⭐ Reconocer TypeORM

La meta principal es poder reconocer su sintaxis en un proyecto.

Por ejemplo:

```ts
@Entity()
class User
```

y pensar:

> **"Ah, esto es TypeORM."**
