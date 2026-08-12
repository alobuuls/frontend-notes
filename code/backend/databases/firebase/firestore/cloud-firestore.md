# 📄 01 - Cloud Firestore

## 📑 Índice

- [� 01 - Cloud Firestore](#-01---cloud-firestore)
  - [📑 Índice](#-índice)
  - [🔥 ¿Qué es Cloud Firestore?](#-qué-es-cloud-firestore)
  - [🗄️ Firestore como Database NoSQL](#️-firestore-como-database-nosql)
- [📄 Modelo documental](#-modelo-documental)
- [🆚 Firestore vs SQL](#-firestore-vs-sql)
- [🗃️ Database](#️-database)
- [📦 Collections](#-collections)
- [📄 Documents](#-documents)
- [🏷️ Fields](#️-fields)
- [📁 Subcollections](#-subcollections)
- [🆔 Document ID](#-document-id)
- [📊 Tipos de datos soportados](#-tipos-de-datos-soportados)
- [💾 ¿Cómo se almacenan los datos?](#-cómo-se-almacenan-los-datos)
- [⭐ ¿Por qué Firestore es NoSQL y orientado a documentos?](#-por-qué-firestore-es-nosql-y-orientado-a-documentos)

## 🔥 ¿Qué es Cloud Firestore?

**Cloud Firestore** es una base de datos **NoSQL orientada a documentos** proporcionada por Firebase.

Está diseñada para almacenar y consultar datos mediante **collections y documents**.

```text
Cloud Firestore
      ↓
  Collections
      ↓
  Documents
      ↓
    Fields
```

---

## 🗄️ Firestore como Database NoSQL

Firestore pertenece al modelo **NoSQL**, por lo que no utiliza la estructura tradicional de:

```text
Database
   ↓
Tables
   ↓
Rows
   ↓
Columns
```

En cambio, utiliza un modelo documental:

```text
Database
   ↓
Collections
   ↓
Documents
   ↓
Fields
```

---

# 📄 Modelo documental

Firestore almacena la información en **documents** agrupados dentro de **collections**.

Por ejemplo:

```text
users
│
├── user123
│     ├── name
│     ├── email
│     └── age
│
└── user456
      ├── name
      ├── email
      └── age
```

Cada documento contiene campos que representan la información almacenada.

---

# 🆚 Firestore vs SQL

Conceptualmente:

| SQL      | Firestore  |
| -------- | ---------- |
| Database | Database   |
| Table    | Collection |
| Row      | Document   |
| Column   | Field      |

> ⚠️ **Pero estas equivalencias no son exactas.**
>
> Firestore tiene un modelo documental diferente al modelo relacional de SQL.

Por ejemplo, en SQL normalmente tienes:

```text
users
────────────────
id | name | email
```

Mientras que Firestore utiliza documentos:

```text
users
   ↓
user123
   ↓
{
  name: "Alo",
  email: "alo@example.com"
}
```

---

# 🗃️ Database

Una **Firestore Database** es el contenedor principal donde se almacenan los datos.

Dentro de ella existen collections:

```text
Firestore Database
       ↓
   Collections
```

---

# 📦 Collections

Una **Collection** agrupa documentos relacionados.

Por ejemplo:

```text
Firestore
   ↓
users
   ↓
Documents
```

Una collection puede contener múltiples documents.

---

# 📄 Documents

Un **Document** es una unidad individual de información dentro de una collection.

Por ejemplo:

```text
users
  ↓
user123
```

El documento puede contener:

```text
{
  name: "Alo",
  email: "alo@example.com",
  age: 25
}
```

---

# 🏷️ Fields

Los **Fields** son los datos individuales almacenados dentro de un documento.

Por ejemplo:

```text
{
  name: "Alo",
  email: "alo@example.com",
  age: 25
}
```

Aquí:

```text
name
email
age
```

son fields.

---

# 📁 Subcollections

Una **Subcollection** es una collection ubicada dentro de un document.

Conceptualmente:

```text
users
  ↓
user123
  ↓
orders
  ↓
order456
```

Esto permite organizar datos relacionados jerárquicamente.

Por ejemplo:

```text
users
│
└── user123
      │
      └── orders
            ├── order1
            └── order2
```

---

# 🆔 Document ID

Cada document tiene un **Document ID** que permite identificarlo dentro de su collection.

Por ejemplo:

```text
users
   ↓
user123
```

Aquí:

```text
user123
```

es el Document ID.

Firestore puede generar IDs automáticamente o puedes proporcionar uno tú mismo.

---

# 📊 Tipos de datos soportados

Firestore permite almacenar diferentes tipos de datos dentro de los fields.

Entre ellos:

```text
String
Number
Boolean
Map
Array
Null
Timestamp
GeoPoint
Reference
```

Por ejemplo:

```text
{
  name: "Alo",
  age: 25,
  active: true,
  hobbies: ["Programming", "Reading"]
}
```

---

# 💾 ¿Cómo se almacenan los datos?

La estructura general es:

```text
Cloud Firestore
      ↓
   Database
      ↓
  Collection
      ↓
  Document
      ↓
    Fields
```

Por ejemplo:

```text
users
   │
   ├── user123
   │     ├── name
   │     ├── email
   │     └── age
   │
   └── user456
         ├── name
         ├── email
         └── age
```

---

# ⭐ ¿Por qué Firestore es NoSQL y orientado a documentos?

Porque Firestore **no organiza los datos mediante tablas y filas relacionadas como una base de datos relacional**.

En cambio, organiza la información mediante:

```text
Collections
     ↓
Documents
     ↓
Fields
```

Cada document puede contener estructuras de datos como **objetos, arrays y subcollections**, lo que permite representar información de manera flexible.

> **Firestore es NoSQL porque utiliza un modelo de datos no relacional, y está orientado a documentos porque su unidad principal de almacenamiento es el document.**
