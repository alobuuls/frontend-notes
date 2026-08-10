# 📄 MongoDB Concepts

🔥 Aquí pondrás los conceptos que necesitas dominar para **trabajar realmente con MongoDB**, no solamente conocer su estructura.

---

## 📑 ÍNDICE

- [📄 MongoDB Concepts](#-mongodb-concepts)
  - [📑 ÍNDICE](#-índice)
  - [📝 1️⃣ CRUD OPERATIONS](#-1️⃣-crud-operations)
  - [🔎 2️⃣ QUERIES](#-2️⃣-queries)
    - [`find()`](#find)
    - [`findOne()`](#findone)
    - [🔍 Query Filters](#-query-filters)
      - [Comparación](#comparación)
  - [👁️ 3️⃣ PROJECTION](#️-3️⃣-projection)
  - [↕️ 4️⃣ SORTING](#️-4️⃣-sorting)
  - [📄 5️⃣ PAGINATION](#-5️⃣-pagination)
  - [✏️ 6️⃣ UPDATING DOCUMENTS](#️-6️⃣-updating-documents)
    - [`updateOne()`](#updateone)
    - [`updateMany()`](#updatemany)
    - [🔧 Update Operators](#-update-operators)
  - [🗑️ 7️⃣ Deleting Documents](#️-7️⃣-deleting-documents)
  - [⚡ 8️⃣ Indexes](#-8️⃣-indexes)
    - [📚 Debes estudiar](#-debes-estudiar)
  - [📊 9️⃣ Aggregation](#-9️⃣-aggregation)
    - [🔹 Stages importantes](#-stages-importantes)
  - [🔗 🔟 Relationships](#--relationships)
    - [📦 Embedding](#-embedding)
    - [🔗 Referencing](#-referencing)
  - [🧱 1️⃣1️⃣ Schema Design](#-1️⃣1️⃣-schema-design)
  - [🔄 1️⃣2️⃣ Transactions](#-1️⃣2️⃣-transactions)
    - [📚 Debes estudiar](#-debes-estudiar-1)
- [🧠 Modelo Mental](#-modelo-mental)

---

## 📝 1️⃣ CRUD OPERATIONS

CRUD representa las cuatro operaciones fundamentales sobre los datos:

```text
Create
   ↓
Read
   ↓
Update
   ↓
Delete
```

En MongoDB se relacionan conceptualmente con:

```text
Create → insert
Read   → find
Update → update
Delete → delete
```

---

## 🔎 2️⃣ QUERIES

Las queries permiten **buscar documentos** dentro de una collection.

Las operaciones principales son:

```text
find()
findOne()
```

### `find()`

Permite obtener los documentos que coinciden con un filtro.

```text
Collection
    ↓
find()
    ↓
Documents
```

### `findOne()`

Busca un único documento que coincida con el filtro.

### 🔍 Query Filters

MongoDB proporciona operadores para construir filtros.

#### Comparación

```text
$eq
$ne
$gt
$gte
$lt
$lte
$in
$nin
```

Por ejemplo:

```text
age > 18
```

se puede representar conceptualmente mediante:

```text
$gt
```

También existen operadores lógicos:

```text
$and
$or
$not
```

---

## 👁️ 3️⃣ PROJECTION

La **Projection** permite seleccionar qué fields quieres obtener de los documentos.

Conceptualmente:

```text
Document
    ↓
Projection
    ↓
Solo algunos fields
```

Por ejemplo, si un documento contiene:

```text
_id
name
email
age
country
```

puedes solicitar únicamente:

```text
name
email
```

Esto permite evitar obtener información que no necesitas.

---

## ↕️ 4️⃣ SORTING

MongoDB permite ordenar los resultados mediante:

```text
sort()
```

Puedes ordenar de forma:

```text
ASC
DESC
```

Conceptualmente:

```text
Documents
    ↓
sort()
    ↓
Ordered Documents
```

---

## 📄 5️⃣ PAGINATION

Ya estudiaste la teoría general de pagination en:

```text
05 - PERFORMANCE
└── Pagination.md
```

Aquí solamente necesitas entender cómo se aplica **específicamente en MongoDB**.

Los conceptos básicos son:

```text
skip()
limit()
```

Por ejemplo:

```text
Collection
    ↓
skip()
    ↓
limit()
    ↓
Results
```

Más adelante podrás estudiar alternativas más eficientes para datasets grandes, como la **cursor-based pagination**.

---

## ✏️ 6️⃣ UPDATING DOCUMENTS

MongoDB permite actualizar documentos mediante:

```text
updateOne()
updateMany()
```

### `updateOne()`

Actualiza un documento.

### `updateMany()`

Actualiza múltiples documentos.

### 🔧 Update Operators

Los operadores principales que debes estudiar son:

```text
$set
$inc
$push
$pull
$unset
```

Por ejemplo:

```text
$set
```

permite establecer un valor.

```text
$inc
```

permite incrementar un valor.

```text
$push
```

permite agregar elementos a un array.

```text
$pull
```

permite eliminar elementos de un array.

```text
$unset
```

permite eliminar un field.

---

## 🗑️ 7️⃣ Deleting Documents

Las operaciones principales son:

```text
deleteOne()
deleteMany()
```

Conceptualmente:

```text
Collection
    ↓
Filter
    ↓
deleteOne() / deleteMany()
    ↓
Documents removed
```

---

## ⚡ 8️⃣ Indexes

MongoDB también utiliza índices para mejorar determinadas consultas.

Esto conecta directamente con:

```text
05 - PERFORMANCE
└── Indexes.md
```

Aquí no necesitas repetir toda la teoría de performance.

Debes enfocarte en cómo funcionan **específicamente en MongoDB**.

Conceptualmente:

```text
Collection
    ↓
Index
    ↓
Query
    ↓
Efficient lookup
```

### 📚 Debes estudiar

* Qué es un index en MongoDB
* Single-field indexes
* Compound indexes
* Unique indexes
* Cuándo utilizar índices

---

## 📊 9️⃣ Aggregation

🔥 La **Aggregation** es uno de los conceptos más importantes de MongoDB.

Permite procesar múltiples documentos y transformar los resultados.

El concepto principal es:

```text
Aggregation
     ↓
Aggregation Pipeline
```

Una pipeline está formada por diferentes stages:

```text
Documents
    ↓
$match
    ↓
$group
    ↓
$sort
    ↓
$project
    ↓
Result
```

### 🔹 Stages importantes

Debes estudiar:

```text
$match
$group
$project
$sort
$limit
$lookup
$unwind
```

Cada stage transforma o procesa los documentos antes de pasarlos al siguiente stage.

---

## 🔗 🔟 Relationships

MongoDB puede representar relaciones principalmente de dos maneras:

```text
Embedding
```

o:

```text
Referencing
```

Esto es diferente de la forma tradicional de modelar relaciones en SQL.

### 📦 Embedding

Consiste en guardar información relacionada **dentro del mismo documento**.

Por ejemplo:

```json
{
  "name": "Alo",
  "address": {
    "city": "Bogotá"
  }
}
```

La dirección forma parte del documento del usuario.

Conceptualmente:

```text
User
 │
 └── address
       └── city
```

### 🔗 Referencing

Consiste en guardar una referencia hacia otro documento.

Por ejemplo:

```json
{
  "name": "Alo",
  "addressId": "..."
}
```

Conceptualmente:

```text
User
 │
 └── addressId
        ↓
     Address
```

Debes entender:

> **¿Cuándo conviene utilizar Embedded Documents y cuándo conviene utilizar References?**

---

## 🧱 1️⃣1️⃣ Schema Design

MongoDB tiene un **schema flexible**, pero eso **no significa que no debas diseñar tus datos**.

El diseño debe considerar cómo la aplicación utilizará la información.

Conceptualmente:

```text
Schema Design
      ↓
Access Patterns
      ↓
Embedding / Referencing
      ↓
Indexes
```

🔥 Una idea fundamental:

> **En MongoDB debes diseñar pensando en cómo se van a consultar los datos.**

Por eso el diseño no comienza simplemente preguntando:

> "¿Qué tablas necesito?"

Sino también:

> "¿Cómo voy a acceder a estos datos?"

---

## 🔄 1️⃣2️⃣ Transactions

MongoDB también soporta **transactions**.

Aquí solamente necesitas diferenciar:

```text
Single-document operations
        vs
Multi-document transactions
```

Una operación sobre un único documento tiene propiedades transaccionales importantes a nivel de ese documento.

Las **multi-document transactions** permiten agrupar operaciones que involucran múltiples documentos.

### 📚 Debes estudiar

* Single-document operations
* Multi-document transactions
* Cuándo realmente necesitas una transaction

La teoría profunda ya está en:

```text
06 - TRANSACTIONS & CONCURRENCY

├── Transactions
├── ACID
├── Concurrency
├── Isolation Levels
├── Locks
├── Race Conditions
└── Deadlocks
```

Por lo tanto, aquí **no necesitas repetir esa teoría**.

---

# 🧠 Modelo Mental

Al terminar este documento deberías visualizar MongoDB así:

```text
                    MongoDB
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
      CRUD           Queries       Indexes
        │              │              │
        │         ┌────┴────┐         │
        │         ▼         ▼         │
        │      Filters   Projection   │
        │                   │         │
        │                Sorting      │
        │                   │         │
        └──────────────┬────┴─────────┘
                       ▼
                  Documents
                       │
              ┌────────┴────────┐
              ▼                 ▼
          Embedding         Referencing
              │                 │
              └────────┬────────┘
                       ▼
                  Schema Design
                       │
                       ▼
                 Access Patterns
                       │
                       ▼
                  Aggregation
                       │
                       ▼
                  Transactions
```

> 🔥 **La idea principal:** trabajar con MongoDB no es solamente saber guardar documentos. Debes saber **consultarlos, filtrarlos, proyectarlos, ordenarlos, paginarlos, actualizarlos, indexarlos, agregarlos y decidir correctamente cómo modelar las relaciones mediante embedding o referencing**.
