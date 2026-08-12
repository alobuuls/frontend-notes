# 📄 02 - Collections & Documents

## 📑 Índice

- [� 02 - Collections \& Documents](#-02---collections--documents)
  - [📑 Índice](#-índice)
  - [📦 Collection](#-collection)
  - [📄 Document](#-document)
  - [🆔 Document ID](#-document-id)
  - [🏷️ Fields](#️-fields)
  - [🪆 Nested Objects](#-nested-objects)
  - [📚 Arrays](#-arrays)
  - [📁 Subcollections](#-subcollections)
  - [🔗 Document References](#-document-references)
- [🌳 Estructura jerárquica](#-estructura-jerárquica)
- [⭐ Collection vs Document](#-collection-vs-document)

## 📦 Collection

Una **Collection** es un conjunto de documentos relacionados dentro de Firestore.

```text
users
 │
 ├── user_001
 └── user_002
```

La collection `users` contiene los documentos `user_001` y `user_002`.

---

## 📄 Document

Un **Document** es una unidad de información dentro de una collection.

```text
users
   ↓
user_001
```

Un documento contiene **Fields** y también puede contener **Subcollections**.

---

## 🆔 Document ID

El **Document ID** identifica de forma única un documento dentro de su collection.

```text
users
 │
 └── user_001
       ↑
   Document ID
```

Puede ser generado automáticamente por Firestore o definido explícitamente.

---

## 🏷️ Fields

Los **Fields** son los datos que contiene un documento.

```text
user_001
 │
 ├── name
 ├── email
 └── age
```

Por ejemplo:

```text
{
  name: "Alo",
  email: "alo@example.com",
  age: 25
}
```

---

## 🪆 Nested Objects

Un document puede contener objetos anidados.

```text
{
  name: "Alo",
  address: {
    city: "Bogotá",
    country: "Colombia"
  }
}
```

Aquí `address` es un objeto dentro del documento.

---

## 📚 Arrays

Los documentos también pueden contener arrays.

```text
{
  name: "Alo",
  hobbies: [
    "Programming",
    "Reading"
  ]
}
```

Los arrays permiten almacenar múltiples valores dentro de un mismo field.

---

## 📁 Subcollections

Una **Subcollection** es una collection que pertenece a un document.

```text
users
 └── user_001
      └── posts
           ├── post_001
           └── post_002
```

Aquí:

```text
users
```

es una collection.

```text
user_001
```

es un document.

```text
posts
```

es una subcollection del document `user_001`.

---

## 🔗 Document References

Una **Document Reference** es una referencia que apunta a otro documento de Firestore.

Conceptualmente:

```text
users
 └── user_001

posts
 └── post_001
       ↓
    Reference
       ↓
    user_001
```

Esto permite guardar una referencia a otro documento sin tener que almacenar todo su contenido nuevamente.

---

# 🌳 Estructura jerárquica

La estructura puede verse así:

```text
Firestore
   ↓
Collection
   ↓
Document
   ↓
Fields
   ↓
Nested Objects / Arrays
```

Y los documentos también pueden contener subcollections:

```text
Collection
   ↓
Document
   ↓
Subcollection
   ↓
Document
```

Por ejemplo:

```text
users
 │
 └── user_001
      │
      ├── name
      ├── email
      │
      └── posts
           ├── post_001
           └── post_002
```

---

# ⭐ Collection vs Document

Es fundamental distinguirlos:

| Concepto       | Contenido                                       |
| -------------- | ----------------------------------------------- |
| **Collection** | conjunto de Documents                           |
| **Document**   | contiene Fields y puede contener Subcollections |

En resumen:

```text
Collection
   │
   ├── Document
   │     ├── Fields
   │     └── Subcollections
   │
   └── Document
         ├── Fields
         └── Subcollections
```
