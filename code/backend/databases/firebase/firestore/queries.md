# 📄 04 - Queries

Las **queries** permiten buscar y obtener documentos específicos de una collection de Firestore.

```text
Collection
    ↓
Query
    ↓
Filtered / Ordered Documents
    ↓
Results
```

---

## 📑 Índice

- [📄 04 - Queries](#-04---queries)
  - [📑 Índice](#-índice)
  - [🔎 `where`](#-where)
    - [⚖️ Equality Filters](#️-equality-filters)
    - [🔢 Comparison Filters](#-comparison-filters)
    - [📋 `in`](#-in)
    - [🚫 `not-in`](#-not-in)
    - [📚 `array-contains`](#-array-contains)
    - [📚 `array-contains-any`](#-array-contains-any)
  - [↕️ `orderBy`](#️-orderby)
  - [🔢 `limit`](#-limit)
  - [📄 Pagination](#-pagination)
  - [🧩 Compound Queries](#-compound-queries)
  - [⚡ Indexes para Queries](#-indexes-para-queries)
  - [🧠 Filtering + Ordering + Limiting](#-filtering--ordering--limiting)
  - [⚠️ Firestore ≠ SQL](#️-firestore--sql)
    - [⭐ Concepto fundamental](#-concepto-fundamental)

## 🔎 `where`

`where` permite **filtrar documentos** según el valor de uno de sus fields.

```text
users
   ↓
where(country == "Mexico")
   ↓
Matching documents
```

### ⚖️ Equality Filters

Permiten buscar documentos donde un field tenga un valor determinado.

```text
==
```

Ejemplo conceptual:

```text
country == "Mexico"
```

### 🔢 Comparison Filters

Permiten comparar valores.

```text
!=
<
<=
>
>=
```

Por ejemplo:

```text
age >= 18
```

significa obtener documentos cuyo `age` sea mayor o igual a `18`.

### 📋 `in`

Permite buscar documentos cuyo valor coincida con **alguno de varios valores**.

```text
country in ["Mexico", "Colombia", "Spain"]
```

### 🚫 `not-in`

Permite buscar documentos cuyo valor **no coincida** con ninguno de los valores especificados.

```text
country not-in ["Mexico", "Colombia"]
```

### 📚 `array-contains`

Permite buscar documentos cuyo array contenga un valor específico.

```text
hobbies
   ↓
["Programming", "Reading"]
```

Puedes buscar documentos que contengan:

```text
array-contains "Programming"
```

### 📚 `array-contains-any`

Permite buscar documentos cuyo array contenga **al menos uno** de varios valores.

```text
array-contains-any
["Programming", "Gaming"]
```

---

## ↕️ `orderBy`

Permite ordenar los resultados de una query según un field.

```text
users
   ↓
orderBy(name)
   ↓
Results
```

Puede utilizarse para ordenar los resultados de acuerdo con el criterio necesario.

---

## 🔢 `limit`

Permite limitar la cantidad de documentos que devuelve una query.

```text
users
   ↓
limit(10)
   ↓
10 documents
```

Esto es especialmente útil cuando no necesitas obtener todos los documentos de una collection.

---

## 📄 Pagination

La **pagination** permite dividir los resultados en diferentes partes en lugar de obtenerlos todos de una sola vez.

```text
Collection
    ↓
Query
    ↓
Page 1
    ↓
Page 2
    ↓
Page 3
```

Esto resulta especialmente útil cuando una collection contiene muchos documentos.

---

## 🧩 Compound Queries

Una **compound query** combina diferentes condiciones u operaciones dentro de una misma consulta.

Por ejemplo:

```text
users
   ↓
where(country == "Mexico")
   ↓
where(age >= 18)
   ↓
orderBy(name)
   ↓
Results
```

La idea es combinar:

```text
Filtering
    +
Ordering
    +
Limiting
```

según lo que necesite la aplicación.

---

## ⚡ Indexes para Queries

Firestore utiliza **indexes** para poder ejecutar determinadas queries de manera eficiente.

```text
Query
   ↓
Index
   ↓
Efficient lookup
   ↓
Results
```

Algunas queries pueden requerir **composite indexes**, especialmente cuando combinan determinados filtros y ordenamientos.

Por eso es importante entender la relación:

```text
Queries
   ↓
Indexes
   ↓
Performance
```

---

## 🧠 Filtering + Ordering + Limiting

Una query puede combinar diferentes operaciones:

```text
users
   ↓
where(country == "Mexico")
   ↓
orderBy(name)
   ↓
limit(10)
   ↓
Results
```

El flujo conceptual es:

```text
Collection
     ↓
Filtering
     ↓
Ordering
     ↓
Limiting
     ↓
Results
```

---

## ⚠️ Firestore ≠ SQL

En SQL puedes pensar en algo como:

```text
SELECT *
FROM users
WHERE country = 'Mexico'
ORDER BY name;
```

Firestore utiliza **su propio modelo de queries**.

No debes intentar convertir mentalmente cada query de Firestore directamente en SQL.

La forma correcta de pensar es:

```text
Firestore
   ↓
Query model
   ↓
Filters
   ↓
Ordering
   ↓
Limits / Pagination
   ↓
Indexes
   ↓
Results
```

### ⭐ Concepto fundamental

Debes dominar la relación entre:

```text
Filtering
     +
Ordering
     +
Limiting
     +
Pagination
     +
Compound Queries
     +
Indexes
```
