# 📄 07 - Mongoose.md

## 📚 ÍNDICE 

- [🧠 ¿Qué es Mongoose?](#-qué-es-mongoose)
- [🧱 Schema](#-schema)
- [📦 Model](#-model)
- [📄 Document](#-document)
- [🗂️ Collections](#️-collections)
- [📝 CRUD](#-crud)
- [🔎 Queries](#-queries)
  - [Filtering](#filtering)
  - [Conditions](#conditions)
  - [Sorting](#sorting)
  - [Limiting](#limiting)
  - [Query methods](#query-methods)
- [✅ Validation](#-validation)
  - [Required](#required)
  - [Data types](#data-types)
  - [Validation rules](#validation-rules)
  - [Custom validation](#custom-validation)
  - [Validation errors](#validation-errors)
- [🔗 Relationships / References](#-relationships--references)
  - [References](#references)
  - [ObjectId references](#objectid-references)
  - [Relación entre Models](#relación-entre-models)
  - [Referencing vs Embedding](#referencing-vs-embedding)
- [🔄 `populate()`](#-populate)
  - [Qué problema resuelve `populate()`](#qué-problema-resuelve-populate)
  - [Cómo funciona conceptualmente](#cómo-funciona-conceptualmente)
  - [Referencias entre Models](#referencias-entre-models)
- [⚙️ Middleware / Hooks](#️-middleware--hooks)
  - [Qué es Middleware](#qué-es-middleware)
  - [Pre hooks](#pre-hooks)
  - [Post hooks](#post-hooks)
  - [Cuándo utilizarlos](#cuándo-utilizarlos)
- [⚡ Indexes](#-indexes)
  - [Indexes en Mongoose](#indexes-en-mongoose)
  - [Single-field indexes](#single-field-indexes)
  - [Compound indexes](#compound-indexes)
  - [Unique indexes](#unique-indexes)
  - [Definición de indexes mediante Schema](#definición-de-indexes-mediante-schema)
- [🔄 Transactions](#-transactions)
  - [Qué es una transaction en Mongoose](#qué-es-una-transaction-en-mongoose)
  - [Sessions](#sessions)
  - [Transactions](#transactions)
  - [Commit](#commit)
  - [Rollback](#rollback)
- [🧠 Flujo fundamental](#-flujo-fundamental)

## 🧠 ¿Qué es Mongoose?

**Mongoose** es un **ODM para Node.js** que permite trabajar con MongoDB utilizando JavaScript o TypeScript.

```text
MongoDB
   ↑
Mongoose
   ↑
Node.js / Express
```

Mongoose proporciona una capa para definir estructuras, validar datos y trabajar con documentos de MongoDB.

---

## 🧱 Schema

Un **Schema** define la estructura y reglas de los documentos.

Estudia:

* Qué es un Schema
* Fields
* Data Types
* Default values
* Validation
* Schema configuration

Conceptualmente:

```text
Schema
   ↓
Define structure
   ↓
Document
```

---

## 📦 Model

Un **Model** se construye a partir de un Schema y permite interactuar con una colección de MongoDB.

```text
Schema
   ↓
Model
   ↓
Collection
```

Estudia:

* Qué es un Model
* Crear Models
* Relación entre Schema y Model

---

## 📄 Document

Un **Document** representa un registro almacenado en MongoDB.

```text
Model
   ↓
Document
   ↓
MongoDB
```

Entiende la diferencia entre:

| Concepto     | Función              |
| ------------ | -------------------- |
| **Schema**   | Define cómo debe ser |
| **Document** | Dato almacenado      |

---

## 🗂️ Collections

Mongoose trabaja con **Collections** de MongoDB.

```text
Database
   ↓
Collection
   ↓
Documents
```

Entiende cómo un Model se relaciona con una Collection.

---

## 📝 CRUD

Estudia cómo realizar:

```text
Create
Read
Update
Delete
```

mediante Models y Documents.

No necesitas memorizar todos los métodos.

---

## 🔎 Queries

Estudia cómo realizar consultas sobre documentos.

Principalmente:

* Filtering
* Conditions
* Sorting
* Limiting
* Query methods

Conceptualmente:

```text
Mongoose Query
      ↓
   MongoDB
      ↓
   Documents
```

---

## ✅ Validation

Mongoose permite definir reglas de validación dentro del Schema.

Estudia:

* Required
* Data types
* Validation rules
* Custom validation
* Validation errors

Conceptualmente:

```text
Data
 ↓
Mongoose Validation
 ↓
Valid
 ├── Yes → Save
 └── No  → Error
```

---

## 🔗 Relationships / References

MongoDB puede representar relaciones utilizando **references**.

Conceptualmente:

```text
User
 ↓
userId
 ↓
Order
```

Estudia:

* References
* ObjectId references
* Relación entre Models
* Referencing vs Embedding

---

## 🔄 `populate()`

`populate()` permite obtener los documentos relacionados a través de una referencia.

Conceptualmente:

```text
User
 ↓
userId
 ↓
populate()
 ↓
User Document
```

Entiende:

* Qué problema resuelve `populate()`
* Cómo funciona conceptualmente
* Referencias entre Models

---

## ⚙️ Middleware / Hooks

Mongoose permite ejecutar lógica antes o después de determinadas operaciones.

Estudia:

* Qué es Middleware
* Pre hooks
* Post hooks
* Cuándo utilizarlos

Conceptualmente:

```text
Operation
    ↓
Pre Hook
    ↓
Operation
    ↓
Post Hook
```

---

## ⚡ Indexes

Mongoose permite definir índices para las Collections de MongoDB.

Estudia:

* Indexes en Mongoose
* Single-field indexes
* Compound indexes
* Unique indexes
* Definición de indexes mediante Schema

Conceptualmente:

```text
Schema
   ↓
Index
   ↓
MongoDB
   ↓
Efficient Query
```

---

## 🔄 Transactions

Mongoose permite trabajar con transactions de MongoDB.

Conceptualmente:

```text
Transaction
     ↓
Operation 1
     ↓
Operation 2
     ↓
Commit / Rollback
```

Estudia:

* Qué es una transaction en Mongoose
* Sessions
* Transactions
* Commit
* Rollback

---

# 🧠 Flujo fundamental

Debes entender perfectamente esta relación:

```text
Schema
   ↓
Model
   ↓
Document
   ↓
MongoDB
```

Y el flujo completo:

```text
Node.js / Express
        ↓
     Mongoose
        ↓
      Model
        ↓
    Collection
        ↓
    Documents
        ↓
     MongoDB
```
