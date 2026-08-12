# 📄 02 - Realtime Database Data Model

## 📑 Índice

- [📄 02 - Realtime Database Data Model](#-02---realtime-database-data-model)
  - [📑 Índice](#-índice)
  - [🌳 JSON Tree](#-json-tree)
  - [🧩 Nodes y Paths](#-nodes-y-paths)
  - [🌲 Hierarchical Data](#-hierarchical-data)
  - [📐 Flat Data Structures](#-flat-data-structures)
  - [📦 Nested Data](#-nested-data)
  - [🔄 Data Duplication](#-data-duplication)
  - [🔀 Denormalization](#-denormalization)
  - [📡 Fan-out](#-fan-out)
  - [🔎 Data Modeling para consultas](#-data-modeling-para-consultas)
  - [⚠️ Evitar árboles excesivamente profundos](#️-evitar-árboles-excesivamente-profundos)
- [⭐ Idea clave](#-idea-clave)

## 🌳 JSON Tree

Realtime Database organiza los datos como un **árbol jerárquico de JSON**.

```text
Realtime Database
        ↓
    JSON Tree
        ↓
      Nodes
        ↓
      Paths
```

La estructura de los datos determina cómo podrás acceder a ellos.

---

## 🧩 Nodes y Paths

Los datos están organizados mediante **nodes** y sus respectivos **paths**.

```text
users
 └── user_001
      └── posts
           └── post_001
```

Su ubicación puede representarse mediante:

```text
users/user_001/posts/post_001
```

---

## 🌲 Hierarchical Data

Puedes construir estructuras profundamente anidadas:

```text
users
 └── user_001
      └── posts
           └── post_001
                └── comments
                     └── comment_001
```

Sin embargo, una estructura excesivamente profunda puede dificultar las consultas y el mantenimiento de los datos.

---

## 📐 Flat Data Structures

En Realtime Database suele ser conveniente mantener los datos **más planos**.

En lugar de:

```text
users
 └── user_001
      └── posts
           └── post_001
                └── comments
                     └── comment_001
```

puedes separar las entidades:

```text
users
 └── user_001

posts
 └── post_001

comments
 └── comment_001
```

Y relacionarlas mediante IDs:

```text
post_001
 ├── authorId: "user_001"
 └── ...
```

---

## 📦 Nested Data

Los datos también pueden estar anidados cuando tiene sentido mantenerlos juntos.

```text
user_001
 ├── name: "Alo"
 └── address
      ├── city: "CDMX"
      └── country: "Mexico"
```

La decisión entre datos anidados y estructuras separadas depende de cómo se accederá a ellos.

---

## 🔄 Data Duplication

En Realtime Database puede ser necesario **duplicar determinados datos**.

Por ejemplo:

```text
users
 └── user_001
      └── name: "Alo"
```

y:

```text
posts
 └── post_001
      ├── authorId: "user_001"
      └── authorName: "Alo"
```

`"Alo"` aparece en ambos lugares.

Esto introduce duplicación, pero puede simplificar las lecturas.

---

## 🔀 Denormalization

La **denormalización** consiste en organizar o duplicar datos para que las consultas necesarias sean más sencillas o eficientes.

Conceptualmente:

```text
Data
 ↓
Denormalization
 ↓
Datos duplicados
 ↓
Lecturas más sencillas
```

En Realtime Database es una estrategia muy habitual debido a su estructura y modelo de consultas.

---

## 📡 Fan-out

**Fan-out** consiste en escribir un mismo cambio en diferentes ubicaciones del árbol.

Por ejemplo, una información puede necesitar existir en varias estructuras:

```text
New Data
   │
   ├── users/...
   ├── posts/...
   └── feeds/...
```

Una única operación puede actualizar esas diferentes ubicaciones para mantener los datos necesarios disponibles donde se consumen.

---

## 🔎 Data Modeling para consultas

El diseño de los datos debe considerar **cómo se van a consultar**.

```text
¿Cómo voy a leer los datos?
          ↓
¿Cómo debo estructurarlos?
          ↓
¿Cómo voy a actualizarlos?
```

Por eso no debes diseñar únicamente pensando en evitar duplicación.

Debes pensar en:

```text
Reads
  +
Updates
  +
Data relationships
      ↓
Data Model
```

---

## ⚠️ Evitar árboles excesivamente profundos

Una estructura demasiado profunda puede complicar:

* Consultas.
* Actualizaciones.
* Mantenimiento.
* Reglas de seguridad.
* Acceso a los datos.

Por eso suele preferirse:

```text
❌ Árbol profundamente anidado
```

frente a:

```text
✅ Estructura más plana
   +
   IDs para relacionar datos
```

---

# ⭐ Idea clave

En Realtime Database no debes pensar únicamente:

> **"¿Cómo evito duplicar datos?"**

Debes pensar:

> **"¿Cómo voy a leer y actualizar estos datos?"**

El modelo debe diseñarse alrededor de los **access patterns** de la aplicación.

```text
Queries / Reads
      ↓
Data Model
      ↓
Flat structures
      ↓
Denormalization
      ↓
Efficient access
```
