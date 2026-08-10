# 📄 NoSQL Data Models

> Aquí debes entender que **NoSQL no es una sola tecnología**.

Existen diferentes modelos de almacenamiento, cada uno pensado para distintos tipos de problemas.

---

## 📑 ÍNDICE 

- [📄 NoSQL Data Models](#-nosql-data-models)
  - [📑 ÍNDICE](#-índice)
  - [🧩 1️⃣ DOCUMENT DATABASES](#-1️⃣-document-databases)
    - [📚 Debes estudiar](#-debes-estudiar)
  - [🔑 2️⃣ KEY-VALUE DATABASES](#-2️⃣-key-value-databases)
    - [📚 Debes estudiar](#-debes-estudiar-1)
  - [🗂️ 3️⃣ WIDE-COLUMN DATABASES](#️-3️⃣-wide-column-databases)
    - [📚 Debes estudiar](#-debes-estudiar-2)
  - [🕸️ 4️⃣ GRAPH DATABASES](#️-4️⃣-graph-databases)
    - [📚 Debes estudiar](#-debes-estudiar-3)
  - [⭐ COMPARACIÓN DE LOS MODELOS](#-comparación-de-los-modelos)
    - [🧠 ¿Qué problema resuelve cada modelo?](#-qué-problema-resuelve-cada-modelo)

## 🧩 1️⃣ DOCUMENT DATABASES

En una **Document Database**, los datos se almacenan como documentos.

La estructura conceptual es:

```text
Database
   ↓
Collection
   ↓
Document
```

Ejemplo conceptual:

```json
{
  "name": "Alo",
  "email": "alo@example.com",
  "age": 25
}
```

### 📚 Debes estudiar

* Documentos
* Collections
* JSON / BSON
* Schema flexibility
* Nested documents

La idea principal:

```text
Collection
    │
    ├── Document
    ├── Document
    └── Document
```

Cada documento puede representar una entidad completa.

---

## 🔑 2️⃣ KEY-VALUE DATABASES

En este modelo, la información se almacena como:

```text
key → value
```

Ejemplo:

```text
"user:123" → "Alo"
```

La aplicación utiliza una **key** para encontrar rápidamente su correspondiente **value**.

### 📚 Debes estudiar

* Keys
* Values
* Lookup
* Caching
* Sesiones

Conceptualmente:

```text
"user:123"
     ↓
   Lookup
     ↓
   "Alo"
```

Este modelo es especialmente útil cuando el acceso principal consiste en:

> **Tengo una key y quiero obtener rápidamente su value.**

---

## 🗂️ 3️⃣ WIDE-COLUMN DATABASES

Las **Wide-Column Databases** utilizan un modelo orientado a columnas y están diseñadas para trabajar con grandes cantidades de datos distribuidos.

Conceptualmente:

```text
Row
 ↓
Column Families
 ↓
Columns
```

### 📚 Debes estudiar

* Column Families
* Distributed Storage
* High Scalability
* Workloads de grandes volúmenes

La idea general es:

```text
Large Dataset
      ↓
Distributed Storage
      ↓
Multiple Nodes
```

Este modelo está especialmente relacionado con sistemas que necesitan manejar **grandes volúmenes de datos distribuidos**.

---

## 🕸️ 4️⃣ GRAPH DATABASES

Las **Graph Databases** representan los datos mediante nodos y relaciones.

Conceptualmente:

```text
Nodes
   ↓
Relationships
   ↓
Edges
```

Ejemplo:

```text
        FRIEND_OF
Alo ─────────────→ Ana
 │
 │ LIKES
 ↓
Movie
```

### 📚 Debes estudiar

* Nodes
* Edges
* Properties
* Graph Traversal
* Relationships

Aquí las relaciones son una parte fundamental del modelo.

Por ejemplo:

```text
Alo
 │
 ├── FRIEND_OF ──→ Ana
 │
 └── LIKES ──────→ Movie
```

El **Graph Traversal** consiste en recorrer estas conexiones para encontrar información relacionada.

---

## ⭐ COMPARACIÓN DE LOS MODELOS

```text
                    NoSQL
                      │
        ┌─────────────┼──────────────┐
        ▼             ▼              ▼
    Document      Key-Value        Graph
        │             │              │
     MongoDB         Redis          Neo4j
```

Y también:

```text
                 ┌─────────────────────┐
                 │   NoSQL Data Models  │
                 └─────────────────────┘
                           │
        ┌──────────────────┼──────────────────┐
        ▼                  ▼                  ▼
    Document           Key-Value           Graph
        │                  │                  │
   Documents              Key              Nodes
   Collections            Value            Edges
   JSON/BSON              Lookup           Traversal
   Nested Data            Cache            Relationships
```

Además:

```text
Wide-Column
     │
     ├── Column Families
     ├── Distributed Storage
     └── High Scalability
```

### 🧠 ¿Qué problema resuelve cada modelo?

| Modelo              | Idea principal                                       |
| ------------------- | ---------------------------------------------------- |
| 📄 **Document**     | Almacenar entidades como documentos flexibles        |
| 🔑 **Key-Value**    | Obtener rápidamente un valor mediante una key        |
| 🗂️ **Wide-Column** | Trabajar con grandes volúmenes de datos distribuidos |
| 🕸️ **Graph**       | Trabajar con datos altamente conectados y relaciones |

> 🔥 **Lo importante no es memorizar las tecnologías, sino entender que NoSQL es una familia de diferentes modelos de datos, y que cada modelo está diseñado para resolver problemas distintos.**
