# 📄 SET OPERATIONS

Aquí estudias cómo **combinar resultados de diferentes queries**.

---

## 📑 ÍNDICE

- [📄 SET OPERATIONS](#-set-operations)
  - [📑 ÍNDICE](#-índice)
  - [🔗 UNION](#-union)
    - [1️⃣ 🔗 `UNION`](#1️⃣--union)
  - [🔗 UNION ALL](#-union-all)
    - [2️⃣ 📋 `UNION ALL`](#2️⃣--union-all)
  - [🔀 INTERSECT](#-intersect)
    - [3️⃣ 🔄 `INTERSECT`](#3️⃣--intersect)
  - [➖ EXCEPT](#-except)
    - [4️⃣ ➖ `EXCEPT`](#4️⃣--except)
  - [🆚 JOIN VS UNION](#-join-vs-union)
    - [5️⃣ 🔗 DIFERENCIA FUNDAMENTAL](#5️⃣--diferencia-fundamental)
      - [`JOIN`](#join)
      - [`UNION`](#union)
    - [🎯 IDEA CLAVE](#-idea-clave)

## 🔗 UNION

### 1️⃣ 🔗 `UNION`

`UNION` combina los resultados de dos o más consultas y **elimina los registros duplicados**.

```sql
SELECT name
FROM users

UNION

SELECT name
FROM customers;
```

Conceptualmente:

```text
Query A
   │
   ├──────┐
   │      │
   ▼      ▼
      UNION
        │
        ▼
Resultado combinado
        │
        ▼
Sin duplicados
```

---

## 🔗 UNION ALL

### 2️⃣ 📋 `UNION ALL`

`UNION ALL` también combina los resultados, pero **mantiene los duplicados**.

```sql
SELECT name
FROM users

UNION ALL

SELECT name
FROM customers;
```

Conceptualmente:

```text
Query A
   │
   ├──────┐
   │      │
   ▼      ▼
   UNION ALL
       │
       ▼
Resultado combinado
       │
       ▼
Incluye duplicados
```

---

## 🔀 INTERSECT

### 3️⃣ 🔄 `INTERSECT`

`INTERSECT` devuelve los registros que **aparecen en ambos resultados**.

```text
Query A
   │
   │
   ▼
INTERSECT
   ▲
   │
Query B
```

Conceptualmente:

```text
A ∩ B
```

Es decir:

```text
A
┌─────────┐
│ 1       │
│ 2       │
│ 3       │
└─────────┘
     ∩
B
┌─────────┐
│ 2       │
│ 3       │
│ 4       │
└─────────┘
     ↓
┌─────────┐
│ 2       │
│ 3       │
└─────────┘
```

---

## ➖ EXCEPT

### 4️⃣ ➖ `EXCEPT`

`EXCEPT` devuelve los registros que aparecen en la **primera query pero no en la segunda**.

Conceptualmente:

```text
A - B
```

Por ejemplo:

```text
A
┌─────────┐
│ 1       │
│ 2       │
│ 3       │
└─────────┘

B
┌─────────┐
│ 2       │
│ 3       │
│ 4       │
└─────────┘

EXCEPT
   ↓

┌─────────┐
│ 1       │
└─────────┘
```

---

## 🆚 JOIN VS UNION

### 5️⃣ 🔗 DIFERENCIA FUNDAMENTAL

#### `JOIN`

```text
JOIN
 ↓
combina columnas / relaciones
```

`JOIN` combina información de diferentes tablas **relacionando sus filas**.

```text
users
   │
   └── JOIN
         │
         ▼
      orders
```

El resultado puede contener columnas provenientes de ambas tablas.

---

#### `UNION`

```text
UNION
 ↓
combina resultados de queries
```

`UNION` combina los resultados de diferentes consultas **uno debajo del otro**.

```text
Query A
   ↓
Query B
   ↓
UNION
   ↓
Resultado combinado
```

### 🎯 IDEA CLAVE

> **`JOIN` combina columnas y relaciones entre tablas; las operaciones de conjuntos (`UNION`, `UNION ALL`, `INTERSECT`, `EXCEPT`) combinan resultados de diferentes queries.**
