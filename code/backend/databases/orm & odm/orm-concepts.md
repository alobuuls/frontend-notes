# 📄 03 - ORM Concepts ⭐

## 📑 ÍNDICE ⭐

- [📄 03 - ORM Concepts ⭐](#-03---orm-concepts-)
  - [📑 ÍNDICE ⭐](#-índice-)
  - [🧩 Models / Entities](#-models--entities)
  - [🏗️ Schema](#️-schema)
  - [🔄 Migrations](#-migrations)
  - [📝 CRUD](#-crud)
  - [🔎 Queries](#-queries)
  - [🔗 Relations](#-relations)
    - [One-to-One](#one-to-one)
    - [One-to-Many](#one-to-many)
    - [Many-to-Many](#many-to-many)
  - [⚡ Eager Loading](#-eager-loading)
  - [💤 Lazy Loading](#-lazy-loading)
  - [🔄 Transactions](#-transactions)
  - [🧱 Query Builder](#-query-builder)
  - [📝 Raw SQL](#-raw-sql)
  - [🔌 Connection Management](#-connection-management)
  - [🌱 Seeding](#-seeding)
  - [🧠 Concepto fundamental](#-concepto-fundamental)

## 🧩 Models / Entities

Los **Models** o **Entities** representan las estructuras de datos de la aplicación y su relación con las tablas de la database.

Conceptualmente:

```text
Model / Entity
      ↓
   Database
      ↓
    Table
```

Por ejemplo:

```text
User Model
    ↓
users table
```

---

## 🏗️ Schema

El **Schema** define la estructura de los datos que maneja el ORM.

Puede incluir:

* Campos
* Tipos de datos
* Relaciones
* Restricciones
* Configuración del modelo

Conceptualmente:

```text
Schema
   ↓
Define la estructura
   ↓
Model / Entity
```

---

## 🔄 Migrations

Las **Migrations** permiten gestionar cambios estructurales en la database mediante código.

```text
Migration 1
   ↓
Create users

Migration 2
   ↓
Add email

Migration 3
   ↓
Add birth_date
```

Permiten mantener sincronizada la estructura de la aplicación con la database.

---

## 📝 CRUD

Los ORMs proporcionan operaciones para trabajar con los datos:

| Operación  | Significado |
| ---------- | ----------- |
| **Create** | Crear       |
| **Read**   | Leer        |
| **Update** | Actualizar  |
| **Delete** | Eliminar    |

Conceptualmente:

```text
ORM
 ↓
CRUD Operations
 ↓
Database
```

---

## 🔎 Queries

Los ORMs proporcionan mecanismos para consultar datos sin escribir necesariamente SQL directamente.

Conceptualmente:

```text
Application
    ↓
ORM Query
    ↓
SQL
    ↓
Database
```

Las queries pueden incluir:

* Filtros
* Ordenamiento
* Límites
* Relaciones
* Agregaciones

---

## 🔗 Relations

Los ORMs permiten representar relaciones entre modelos.

```text
User
 │
 └── Order
```

Las relaciones principales son:

### One-to-One

```text
User 1 ─── 1 Profile
```

### One-to-Many

```text
User 1 ─── N Orders
```

### Many-to-Many

```text
Student N ─── N Course
```

---

## ⚡ Eager Loading

**Eager Loading** obtiene los datos relacionados junto con la consulta principal.

```text
Query User
    ↓
User + Orders
```

Se utiliza cuando sabes que necesitas las relaciones inmediatamente.

---

## 💤 Lazy Loading

**Lazy Loading** obtiene los datos relacionados solamente cuando son necesarios.

```text
Query User
    ↓
User
    ↓
Necesito Orders
    ↓
Query Orders
```

La diferencia fundamental:

|              | Eager Loading                   | Lazy Loading                         |
| ------------ | ------------------------------- | ------------------------------------ |
| Cuándo carga | Inmediatamente                  | Cuando se necesita                   |
| Concepto     | Carga relaciones inmediatamente | Carga relaciones cuando se necesitan |

---

## 🔄 Transactions

Los ORMs permiten ejecutar varias operaciones dentro de una misma transacción.

Conceptualmente:

```text
ORM
 ↓
BEGIN
 ↓
Operation 1
 ↓
Operation 2
 ↓
COMMIT
```

Si ocurre un error:

```text
ROLLBACK
```

---

## 🧱 Query Builder

Un **Query Builder** permite construir queries mediante métodos del ORM en lugar de escribir SQL directamente.

Conceptualmente:

```text
Query Builder
      ↓
   SQL Query
      ↓
   Database
```

Permite construir consultas más complejas manteniendo una API programática.

---

## 📝 Raw SQL

Aunque utilices un ORM, puedes ejecutar **SQL directamente** cuando necesitas una consulta específica o una característica que el ORM no representa bien.

```text
ORM
 ↓
Raw SQL
 ↓
Database
```

Por eso:

```text
ORM ≠ no usar SQL
```

Un ORM puede convivir con SQL directo.

---

## 🔌 Connection Management

El ORM también puede encargarse de administrar la comunicación con la database.

Conceptualmente:

```text
Application
     ↓
    ORM
     ↓
Connection Management
     ↓
Database
```

Puede gestionar aspectos como:

* Conexiones
* Connection Pooling
* Liberación de conexiones

---

## 🌱 Seeding

El **Seeding** consiste en insertar datos iniciales o de prueba en la database.

Por ejemplo:

```text
Seed
 ↓
Create users
 ↓
Create products
 ↓
Create categories
```

Es especialmente útil para:

* Datos iniciales
* Desarrollo
* Testing
* Entornos de prueba

---

## 🧠 Concepto fundamental

Los conceptos principales de un ORM se pueden visualizar así:

```text
ORM
 │
 ├── Models
 ├── Queries
 ├── Relations
 ├── Migrations
 ├── Transactions
 └── Database
```

> Estos conceptos son **independientes del ORM específico** que utilices.
