# 📄 AGGREGATIONS

Aquí estudias **funciones que trabajan con múltiples registros**.

---

# 📑 ÍNDICE — AGGREGATIONS

- [📄 AGGREGATIONS](#-aggregations)
- [📑 ÍNDICE — AGGREGATIONS](#-índice--aggregations)
- [🔢 COUNT](#-count)
  - [1️⃣ 🔢 `COUNT()`](#1️⃣--count)
  - [2️⃣ 📋 `COUNT(*)`](#2️⃣--count)
  - [3️⃣ 🧩 `COUNT(column)`](#3️⃣--countcolumn)
  - [4️⃣ 🎯 `COUNT(DISTINCT column)`](#4️⃣--countdistinct-column)
- [➕](#)
  - [5️⃣ `SUM()`](#5️⃣-sum)
- [📊](#-1)
  - [6️⃣ `AVG()`](#6️⃣-avg)
- [⬇️](#️)
  - [7️⃣ `MIN()`](#7️⃣-min)
- [⬆️](#️-1)
  - [8️⃣ `MAX()`](#8️⃣-max)
- [🧠 FUNCIONES DE AGREGACIÓN](#-funciones-de-agregación)
  - [9️⃣ 📊 CONJUNTOS DE FILAS](#9️⃣--conjuntos-de-filas)
    - [🎯 IDEA CLAVE](#-idea-clave)


# 🔢 COUNT

## 1️⃣ 🔢 `COUNT()`

`COUNT()` permite **contar registros**.

```sql
SELECT COUNT(*)
FROM users;
```

Devuelve la cantidad de filas del resultado.

---

## 2️⃣ 📋 `COUNT(*)`

```sql
COUNT(*)
```

Cuenta **todas las filas**.

```sql
SELECT COUNT(*)
FROM users;
```

Conceptualmente:

```text
users
 ↓
Row
Row
Row
Row
 ↓
COUNT(*)
 ↓
4
```

---

## 3️⃣ 🧩 `COUNT(column)`

```sql
COUNT(column)
```

Cuenta los registros donde esa columna **tiene un valor**, ignorando los `NULL`.

```sql
SELECT COUNT(email)
FROM users;
```

---

## 4️⃣ 🎯 `COUNT(DISTINCT column)`

```sql
COUNT(DISTINCT column)
```

Cuenta únicamente los **valores diferentes** de una columna.

```sql
SELECT COUNT(DISTINCT country)
FROM users;
```

Conceptualmente:

```text
Mexico
Mexico
Colombia
Spain
Colombia

        ↓

Mexico
Colombia
Spain

        ↓

COUNT(DISTINCT)
        ↓
3
```

---

# ➕

## 5️⃣ `SUM()`

`SUM()` calcula la **suma de los valores** de una columna.

```sql
SELECT SUM(total)
FROM orders;
```

Conceptualmente:

```text
100
200
300
 ↓
SUM()
 ↓
600
```

---

# 📊

## 6️⃣ `AVG()`

`AVG()` calcula el **promedio** de los valores.

```sql
SELECT AVG(age)
FROM users;
```

Conceptualmente:

```text
20
30
40
 ↓
AVG()
 ↓
30
```

---

# ⬇️

## 7️⃣ `MIN()`

`MIN()` devuelve el **valor mínimo** de un conjunto.

```sql
SELECT MIN(age)
FROM users;
```

Conceptualmente:

```text
20
35
18
40
 ↓
MIN()
 ↓
18
```

---

# ⬆️

## 8️⃣ `MAX()`

`MAX()` devuelve el **valor máximo** de un conjunto.

```sql
SELECT MAX(age)
FROM users;
```

Conceptualmente:

```text
20
35
18
40
 ↓
MAX()
 ↓
40
```

---

# 🧠 FUNCIONES DE AGREGACIÓN

## 9️⃣ 📊 CONJUNTOS DE FILAS

Las funciones:

```text
COUNT
SUM
AVG
MIN
MAX
```

trabajan sobre **conjuntos de filas**.

| Función | ¿Qué hace?          |
| ------- | ------------------- |
| `COUNT` | Cuenta              |
| `SUM`   | Suma                |
| `AVG`   | Calcula el promedio |
| `MIN`   | Devuelve el mínimo  |
| `MAX`   | Devuelve el máximo  |

Por ejemplo:

```text
users
│
├── Ana
├── Luis
├── Pedro
└── Maria
       │
       ▼
   Aggregation
       │
       ▼
   COUNT / AVG / ...
```

---

### 🎯 IDEA CLAVE

> **Las funciones de agregación procesan múltiples filas para producir un único resultado, como un conteo, una suma, un promedio, un mínimo o un máximo.**
