# 📄 06 - Sequelize.md

# 📚 ÍNDICE — 06 · Sequelize

- [📄 06 - Sequelize.md](#-06---sequelizemd)
- [📚 ÍNDICE — 06 · Sequelize](#-índice--06--sequelize)
  - [🧠 ¿Qué es Sequelize?](#-qué-es-sequelize)
  - [🏗️ Models](#️-models)
  - [🔗 Associations](#-associations)
  - [📝 CRUD básico](#-crud-básico)
  - [🔎 Queries](#-queries)
  - [🔄 Migrations](#-migrations)
  - [🔄 Transactions](#-transactions)
- [🆚 Sequelize vs Prisma](#-sequelize-vs-prisma)
- [🎯 Objetivo del documento](#-objetivo-del-documento)

## 🧠 ¿Qué es Sequelize?

**Sequelize** es un **ORM para Node.js** que permite trabajar con bases de datos relacionales mediante JavaScript o TypeScript.

Conceptualmente:

```text
Node.js / TypeScript
        ↓
    Sequelize
        ↓
       SQL
        ↓
Relational Database
```

---

## 🏗️ Models

Los **Models** representan las estructuras de datos con las que trabaja Sequelize.

Conceptualmente:

```text
Model
  ↓
Table
```

Estudia:

* Qué es un Model
* Definición de Models
* Attributes
* Data Types
* Model configuration

---

## 🔗 Associations

Las **Associations** permiten definir relaciones entre Models.

Estudia:

* One-to-One
* One-to-Many
* Many-to-Many
* `hasOne`
* `hasMany`
* `belongsTo`
* `belongsToMany`

Conceptualmente:

```text
User
  │
  └── Orders
```

---

## 📝 CRUD básico

Estudia cómo realizar las operaciones principales:

```text
Create
Read
Update
Delete
```

Utilizando los Models de Sequelize.

No necesitas memorizar todos los métodos.

---

## 🔎 Queries

Estudia cómo realizar consultas mediante Sequelize.

Principalmente:

* Filtering
* Conditions
* Sorting
* Limiting
* Relations

Conceptualmente:

```text
Sequelize Query
      ↓
      SQL
      ↓
   Database
```

---

## 🔄 Migrations

Estudia cómo Sequelize utiliza migrations para gestionar cambios en la estructura de la database.

```text
Migration
    ↓
Database Schema
```

Entiende:

* Crear migrations
* Ejecutar migrations
* Revertir migrations
* Migration history

---

## 🔄 Transactions

Sequelize permite ejecutar múltiples operaciones dentro de una transaction.

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

Estudia cómo iniciar y manejar transactions en Sequelize.

---

# 🆚 Sequelize vs Prisma

Conoce las diferencias principales:

```text
Prisma
   ↓
Prisma Schema
   ↓
Prisma Client
```

vs.

```text
Sequelize
   ↓
Models
   ↓
Sequelize API
```

Compara principalmente:

| Prisma               | Sequelize            |
| -------------------- | -------------------- |
| Models               | Models               |
| Schema               | Schema               |
| Queries              | Queries              |
| Relations            | Relations            |
| Migrations           | Migrations           |
| Transactions         | Transactions         |
| Developer experience | Developer experience |

No necesitas profundizar demasiado en Sequelize.

---

# 🎯 Objetivo del documento

La meta es:

```text
"Conozco la herramienta
y entiendo cómo funciona."
```

No:

```text
"Debo dominar Sequelize."
```
