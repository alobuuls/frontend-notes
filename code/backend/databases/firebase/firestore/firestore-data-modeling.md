# 📄 06 - Firestore Data Modeling

## 🔥 ¿Qué es Data Modeling?

**Data Modeling** es el proceso de decidir **cómo organizar y estructurar los datos** dentro de Firestore.

La pregunta principal es:

> **¿Cómo debería estructurar mis datos para que las consultas que necesita mi aplicación sean eficientes y sencillas?**

En Firestore, el modelado está muy relacionado con **cómo se van a consultar los datos**.

```text
Data Modeling
      ↓
Collection Structure
      ↓
Documents
      ↓
Queries
```

---

## 📑 Índice

- [� 06 - Firestore Data Modeling](#-06---firestore-data-modeling)
  - [🔥 ¿Qué es Data Modeling?](#-qué-es-data-modeling)
  - [📑 Índice](#-índice)
  - [📄 Document-Oriented Modeling](#-document-oriented-modeling)
  - [🪆 Embedding](#-embedding)
    - [✅ Ventajas](#-ventajas)
    - [⚠️ Desventaja](#️-desventaja)
  - [🔗 Referencing](#-referencing)
  - [📁 Subcollections](#-subcollections)
  - [🔄 Denormalization](#-denormalization)
  - [📋 Data Duplication](#-data-duplication)
  - [📖 Read-Oriented Design](#-read-oriented-design)
  - [🔎 Query-Oriented Design](#-query-oriented-design)
  - [🗂️ Collection Structure](#️-collection-structure)
  - [📏 Document Size Considerations](#-document-size-considerations)
  - [🔗 Relación entre Modeling y Queries](#-relación-entre-modeling-y-queries)
    - [⭐ Concepto fundamental](#-concepto-fundamental)

## 📄 Document-Oriented Modeling

Firestore utiliza un modelo orientado a documentos.

Por eso, en lugar de diseñar pensando principalmente en tablas y relaciones como en SQL, debes pensar en:

```text
Collections
     ↓
Documents
     ↓
Fields
     ↓
Queries
```

El diseño debe adaptarse a la forma en que la aplicación necesita acceder a los datos.

---

## 🪆 Embedding

**Embedding** consiste en almacenar información relacionada directamente dentro de un document.

```text
users
 └── user_001

      {
        name: "Alo",
        address: {
          city: "CDMX",
          country: "Mexico"
        }
      }
```

La información de `address` forma parte del mismo documento.

### ✅ Ventajas

* Los datos relacionados pueden obtenerse junto con el documento principal.
* Puede simplificar las lecturas.
* Evita tener que consultar otro documento.

### ⚠️ Desventaja

Si la información embebida cambia frecuentemente o necesita reutilizarse en muchos documentos, puede ser menos conveniente.

---

## 🔗 Referencing

**Referencing** consiste en mantener la información separada y guardar una referencia hacia ella.

```text
users
 └── user_001
       │
       └── addressId → address_001
```

La información relacionada se encuentra en otro documento.

Conceptualmente:

```text
User
 ↓
Reference
 ↓
Address
```

Es útil cuando los datos relacionados necesitan existir de manera independiente o pueden ser compartidos.

---

## 📁 Subcollections

Las **Subcollections** permiten organizar datos relacionados dentro de un documento mediante una collection propia.

```text
users
 └── user_001
      └── addresses
           ├── address_001
           └── address_002
```

Esto resulta útil cuando existe un conjunto de documentos relacionados con un documento principal.

Por ejemplo:

```text
User
 ↓
Addresses
 ↓
Multiple address documents
```

---

## 🔄 Denormalization

La **denormalización** consiste en almacenar información repetida en diferentes documentos para facilitar las lecturas.

Por ejemplo:

```text
orders
 ├── order_001
 │     ├── userId
 │     └── userName
 │
 └── order_002
       ├── userId
       └── userName
```

El nombre del usuario puede estar duplicado en varios documentos.

Esto puede hacer las lecturas más sencillas, pero introduce un problema:

> Si el dato original cambia, las copias también pueden necesitar actualizarse.

---

## 📋 Data Duplication

Firestore puede utilizar **duplicación de datos** como parte del diseño.

Por ejemplo:

```text
User
 ↓
name = "Alo"
```

y ese mismo dato podría almacenarse también en documentos relacionados:

```text
Order
 ↓
userName = "Alo"
```

La duplicación puede mejorar las lecturas, pero aumenta la responsabilidad de mantener los datos sincronizados.

---

## 📖 Read-Oriented Design

Firestore suele favorecer un diseño **orientado a las lecturas**.

Esto significa que debes pensar:

> **¿Qué información necesita obtener mi aplicación y cómo puedo estructurar los documentos para obtenerla fácilmente?**

Por ejemplo:

```text
UI
 ↓
¿Qué datos necesita?
 ↓
Query
 ↓
¿Cómo debería estar estructurado el documento?
```

---

## 🔎 Query-Oriented Design

El diseño de Firestore debe considerar las **queries que realizará la aplicación**.

Por ejemplo, si frecuentemente necesitas obtener:

```text
Users
 ↓
country = "Mexico"
 ↓
active = true
```

el modelo debe permitir realizar esa consulta de manera adecuada.

La relación fundamental es:

```text
Access Patterns
      ↓
Queries
      ↓
Data Model
      ↓
Indexes
```

No deberías diseñar los documentos sin considerar cómo serán consultados.

---

## 🗂️ Collection Structure

Debes decidir cómo organizar tus collections y documents.

Por ejemplo:

```text
users
 ├── user_001
 └── user_002
```

o:

```text
users
 └── user_001
      └── addresses
           ├── address_001
           └── address_002
```

La estructura depende de cómo se utilizarán los datos.

---

## 📏 Document Size Considerations

Los documentos de Firestore tienen **límites de tamaño**, por lo que no debes intentar almacenar cantidades ilimitadas de información dentro de un solo document.

Por eso debes considerar:

```text
Document
   ↓
Amount of data
   ↓
Document size
```

Si una colección de información puede crecer mucho, puede ser más apropiado utilizar documentos separados o subcollections.

---

## 🔗 Relación entre Modeling y Queries

Este es uno de los conceptos **más importantes**.

En Firestore:

```text
Data Model
     ↓
Queries
```

pero también:

```text
Queries
     ↓
Data Model
```

Es decir, el modelo de datos debe diseñarse pensando en **cómo la aplicación accederá a la información**.

Por eso:

```text
                    Firestore
                       │
             ┌─────────┴─────────┐
             ↓                   ↓
        Data Model            Queries
             │                   │
             └─────────┬─────────┘
                       ↓
                  Application
```

### ⭐ Concepto fundamental

> **En Firestore no debes diseñar solamente pensando en cómo se ven los datos. Debes diseñarlos pensando en cómo la aplicación los va a consultar y utilizar.**

Y para decidir entre **Embedding, Referencing, Subcollections o duplicación**, debes considerar principalmente:

```text
¿Cómo se leen?
¿Cómo se actualizan?
¿Cuánto crecen?
¿Se reutilizan?
¿Qué queries necesito?
```
