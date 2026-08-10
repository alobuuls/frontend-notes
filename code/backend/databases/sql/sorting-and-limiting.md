# 📄 SORTING AND LIMITING

Aquí estudias cómo **ordenar y limitar los resultados** de una consulta.

---

# 📑 ÍNDICE

- [📄 SORTING AND LIMITING](#-sorting-and-limiting)
- [📑 ÍNDICE](#-índice)
  - [↕️ `ORDER BY`](#️-order-by)
    - [1️⃣ 📝 ¿QUÉ ES `ORDER BY`?](#1️⃣--qué-es-order-by)
    - [2️⃣ ⬆️ `ASC`](#2️⃣-️-asc)
    - [3️⃣ ⬇️ `DESC`](#3️⃣-️-desc)
  - [🔀 ORDENAR POR MÚLTIPLES COLUMNAS](#-ordenar-por-múltiples-columnas)
    - [4️⃣ 📊 MULTIPLE SORTING](#4️⃣--multiple-sorting)
  - [🔢 `LIMIT`](#-limit)
    - [5️⃣ 📝 ¿QUÉ ES `LIMIT`?](#5️⃣--qué-es-limit)
    - [6️⃣ 🔢 `LIMIT` CON `ORDER BY`](#6️⃣--limit-con-order-by)
  - [⏭️ `OFFSET`](#️-offset)
    - [7️⃣ 📝 ¿QUÉ ES `OFFSET`?](#7️⃣--qué-es-offset)
  - [📄 `LIMIT` + `OFFSET`](#-limit--offset)
    - [8️⃣ 📑 PAGINACIÓN](#8️⃣--paginación)
  - [🧠 ORDEN DE EJECUCIÓN](#-orden-de-ejecución)
    - [9️⃣ 🔄 EJECUCIÓN CONCEPTUAL](#9️⃣--ejecución-conceptual)
    - [🎯 IDEA CLAVE](#-idea-clave)


## ↕️ `ORDER BY`

### 1️⃣ 📝 ¿QUÉ ES `ORDER BY`?

`ORDER BY` permite ordenar los resultados de una consulta según una o más columnas.

```sql
SELECT *
FROM users
ORDER BY name;
```

Por defecto, el orden es **ascendente (`ASC`)**.

### 2️⃣ ⬆️ `ASC`

`ASC` significa **ascendente**.

```sql
SELECT *
FROM users
ORDER BY name ASC;
```

Para valores numéricos:

```text
1
2
3
4
5
```

Para texto, se ordenan alfabéticamente.

### 3️⃣ ⬇️ `DESC`

`DESC` significa **descendente**.

```sql
SELECT *
FROM users
ORDER BY age DESC;
```

Resultado conceptual:

```text
50
35
28
21
18
```

---

## 🔀 ORDENAR POR MÚLTIPLES COLUMNAS

### 4️⃣ 📊 MULTIPLE SORTING

Puedes ordenar utilizando varias columnas:

```sql
SELECT *
FROM users
ORDER BY country ASC, name ASC;
```

Primero se ordena por:

```text
country ASC
```

y dentro de cada país:

```text
name ASC
```

Conceptualmente:

```text
country
   ↓
name
```

Por ejemplo:

```text
Colombia → Ana
Colombia → Luis
Mexico   → Alo
Mexico   → Pedro
Spain    → Carlos
```

---

## 🔢 `LIMIT`

### 5️⃣ 📝 ¿QUÉ ES `LIMIT`?

`LIMIT` permite establecer **cuántos registros como máximo** quieres obtener.

```sql
SELECT *
FROM users
LIMIT 10;
```

Esto limita el resultado a:

```text
máximo → 10 registros
```

### 6️⃣ 🔢 `LIMIT` CON `ORDER BY`

`LIMIT` puede combinarse con `ORDER BY`.

```sql
SELECT *
FROM users
ORDER BY age DESC
LIMIT 10;
```

Conceptualmente:

```text
Users
  ↓
Ordenar por edad
  ↓
DESC
  ↓
Tomar los primeros 10
```

---

## ⏭️ `OFFSET`

### 7️⃣ 📝 ¿QUÉ ES `OFFSET`?

`OFFSET` permite **saltar una cantidad determinada de registros** antes de comenzar a devolver resultados.

```sql
SELECT *
FROM users
LIMIT 10 OFFSET 20;
```

Esto significa:

```text
OFFSET 20
   ↓
saltar 20 registros
   ↓
LIMIT 10
   ↓
obtener los siguientes 10
```

---

## 📄 `LIMIT` + `OFFSET`

### 8️⃣ 📑 PAGINACIÓN

`LIMIT` y `OFFSET` son importantes para entender la **paginación**.

Por ejemplo:

```text
Página 1
LIMIT 10 OFFSET 0

Página 2
LIMIT 10 OFFSET 10

Página 3
LIMIT 10 OFFSET 20
```

Conceptualmente:

```text
Todos los registros
        │
        ▼
┌─────────────────┐
│ 1 - 10          │ ← Página 1
├─────────────────┤
│ 11 - 20         │ ← Página 2
├─────────────────┤
│ 21 - 30         │ ← Página 3
└─────────────────┘
```

---

## 🧠 ORDEN DE EJECUCIÓN

### 9️⃣ 🔄 EJECUCIÓN CONCEPTUAL

Una consulta puede entenderse conceptualmente en este orden:

```text
FROM
 ↓
WHERE
 ↓
SELECT
 ↓
ORDER BY
 ↓
LIMIT
```

Por ejemplo:

```sql
SELECT name
FROM users
WHERE age >= 18
ORDER BY name ASC
LIMIT 10;
```

Conceptualmente:

```text
FROM
 ↓
users
 ↓
WHERE
 ↓
filtrar mayores de edad
 ↓
SELECT
 ↓
name
 ↓
ORDER BY
 ↓
ordenar por name
 ↓
LIMIT
 ↓
primeros 10
```

### 🎯 IDEA CLAVE

> **`ORDER BY`** controla el orden de los resultados, **`LIMIT`** limita cuántos resultados se devuelven y **`OFFSET`** permite saltar resultados. Juntos son fundamentales para implementar paginación.
