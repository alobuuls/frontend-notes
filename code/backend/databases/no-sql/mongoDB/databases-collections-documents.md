# 📄 Databases, Collections & Documents

🔥 Este documento es para aprender **cómo se estructura MongoDB**.

---

## 📑 ÍNDICE 

- [📄 Databases, Collections \& Documents](#-databases-collections--documents)
  - [📑 ÍNDICE](#-índice)
  - [🧱 1️⃣ DATABASE](#-1️⃣-database)
  - [📦 2️⃣ COLLECTION](#-2️⃣-collection)
  - [📄 3️⃣ DOCUMENT](#-3️⃣-document)
  - [🏷️ 4️⃣ FIELD](#️-4️⃣-field)
  - [🧠 ESTRUCTURA COMPLETA](#-estructura-completa)
  - [📦 5️⃣ EMBEDDED DOCUMENTS](#-5️⃣-embedded-documents)
  - [📚 6️⃣ ARRAYS](#-6️⃣-arrays)
  - [🔑 7️⃣ OBJECTID](#-7️⃣-objectid)
  - [🧠 MODELO MENTAL FINAL](#-modelo-mental-final)

## 🧱 1️⃣ DATABASE

Una **Database** es un contenedor lógico que agrupa collections relacionadas.

Conceptualmente:

```text
MongoDB
   │
   ├── Database
   ├── Database
   └── Database
```

Por ejemplo:

```text
travel_app
```

Dentro de ella podrías tener diferentes collections:

```text
travel_app
   │
   ├── users
   ├── trips
   └── destinations
```

---

## 📦 2️⃣ COLLECTION

Una **Collection** es un conjunto de documentos.

Es conceptualmente similar a una **Table** en una base de datos relacional, aunque no funciona exactamente de la misma manera.

```text
Database
   │
   └── Collection
          │
          ├── Document
          ├── Document
          └── Document
```

Por ejemplo:

```text
users
```

puede contener todos los documentos relacionados con usuarios.

---

## 📄 3️⃣ DOCUMENT

Un **Document** es la unidad principal de almacenamiento en MongoDB.

Los documentos tienen una estructura similar a JSON y se almacenan como BSON.

Ejemplo:

```text
{
  "_id": "ObjectId(...)",
  "name": "Alo",
  "email": "alo@example.com",
  "age": 25
}
```

Cada documento representa normalmente una instancia de una entidad.

Por ejemplo:

```text
users
   │
   ├── Alo
   ├── Ana
   └── Luis
```

Cada uno puede estar representado mediante un documento.

---

## 🏷️ 4️⃣ FIELD

Un **Field** es un campo dentro de un documento.

En este documento:

```text
{
  "name": "Alo",
  "email": "alo@example.com",
  "age": 25
}
```

tenemos:

```text
name
email
age
```

Los valores correspondientes son:

```text
name  → "Alo"
email → "alo@example.com"
age   → 25
```

Conceptualmente:

```text
Document
   │
   ├── Field
   ├── Field
   └── Field
```

---

## 🧠 ESTRUCTURA COMPLETA

La estructura mental que debes recordar es:

```text
MongoDB
   │
   └── Database
          │
          └── Collection
                 │
                 ├── Document
                 ├── Document
                 └── Document
```

Y cada documento contiene fields:

```text
Collection
    │
    ├── Document
    │      ├── Field
    │      ├── Field
    │      └── Field
    │
    └── Document
           ├── Field
           ├── Field
           └── Field
```

---

## 📦 5️⃣ EMBEDDED DOCUMENTS

MongoDB permite almacenar **documentos dentro de otros documentos**.

Esto se conoce como **Embedded Document**.

Por ejemplo:

```text
{
  "name": "Alo",
  "address": {
    "city": "Bogotá",
    "country": "Colombia"
  }
}
```

Aquí:

```text
Document
   │
   ├── name
   │
   └── address
          │
          ├── city
          └── country
```

`address` es un documento anidado dentro del documento principal.


## 📚 6️⃣ ARRAYS

Los documentos también pueden contener **arrays**.

Por ejemplo:

```json
{
  "name": "Alo",
  "hobbies": [
    "Programming",
    "Reading"
  ]
}
```

Aquí:

```text
Document
   │
   ├── name
   │
   └── hobbies
          │
          ├── Programming
          └── Reading
```

Los arrays permiten almacenar múltiples valores dentro de un mismo field.

También pueden contener documentos:

```json
{
  "name": "Alo",
  "addresses": [
    {
      "city": "Bogotá",
      "country": "Colombia"
    },
    {
      "city": "Madrid",
      "country": "Spain"
    }
  ]
}
```

---

## 🔑 7️⃣ OBJECTID

MongoDB utiliza normalmente un campo especial llamado:

```text
_id
```

Este campo identifica de forma única cada documento dentro de una collection.

Por defecto, MongoDB suele generar un:

```text
ObjectId
```

Conceptualmente:

```text
_id
 ↓
ObjectId
```

Ejemplo:

```json
{
  "_id": "ObjectId(...)",
  "name": "Alo"
}
```

El `ObjectId` es un identificador generado para distinguir documentos.

Por ejemplo:

```text
Document 1
_id → ObjectId(...)

Document 2
_id → ObjectId(...)

Document 3
_id → ObjectId(...)
```

Cada documento tiene su propio `_id`.

---

## 🧠 MODELO MENTAL FINAL

Debes poder visualizar MongoDB así:

```text
MongoDB
   │
   ▼
Database
   │
   ▼
Collection
   │
   ├───────────────┐
   ▼               ▼
Document        Document
   │
   ├── _id
   ├── Field
   ├── Field
   │
   ├── Embedded Document
   │      ├── Field
   │      └── Field
   │
   └── Array
          ├── Value
          └── Value
```

Y la comparación con lo que ya estudiaste:

```text
SQL                         MongoDB

Database                    Database
   ↓                           ↓
Table                       Collection
   ↓                           ↓
Row                         Document
   ↓                           ↓
Column                      Field
```

> 🔥 **Lo importante:** en MongoDB la estructura gira alrededor de **documents**, que pueden contener **fields, embedded documents y arrays**, y normalmente utilizan `_id` con un **ObjectId** como identificador.
