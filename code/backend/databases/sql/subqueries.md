# 📄 SUBQUERIES

🔥 Este ya es un tema más avanzado.

Una **subquery** es una query dentro de otra query.

---

## 📑 ÍNDICE 

- [� SUBQUERIES](#-subqueries)
  - [📑 ÍNDICE](#-índice)
  - [🔍 SUBQUERY](#-subquery)
    - [1️⃣ 📝 ¿QUÉ ES UNA SUBQUERY?](#1️⃣--qué-es-una-subquery)
  - [📍 SUBQUERY EN `WHERE`](#-subquery-en-where)
    - [2️⃣ 🔎 SUBQUERY EN `WHERE`](#2️⃣--subquery-en-where)
  - [📦 SUBQUERY EN `FROM`](#-subquery-en-from)
    - [3️⃣ 📊 SUBQUERY EN `FROM`](#3️⃣--subquery-en-from)
  - [🎯 SUBQUERY EN `SELECT`](#-subquery-en-select)
    - [4️⃣ 📋 SUBQUERY EN `SELECT`](#4️⃣--subquery-en-select)
  - [🔄 CORRELATED SUBQUERY](#-correlated-subquery)
    - [5️⃣ 🧠 ¿QUÉ ES UNA CORRELATED SUBQUERY?](#5️⃣--qué-es-una-correlated-subquery)
  - [✅ `EXISTS`](#-exists)
    - [6️⃣ 🔎 `EXISTS`](#6️⃣--exists)
  - [🆚 `IN` VS `EXISTS`](#-in-vs-exists)
    - [7️⃣ 🔄 COMPARACIÓN](#7️⃣--comparación)
      - [`IN`](#in)
      - [`EXISTS`](#exists)
    - [🎯 IDEA CLAVE](#-idea-clave)

## 🔍 SUBQUERY

### 1️⃣ 📝 ¿QUÉ ES UNA SUBQUERY?

Una subquery es una consulta SQL que se encuentra **dentro de otra consulta**.

```sql
SELECT *
FROM users
WHERE id IN (
    SELECT user_id
    FROM orders
);
```

Conceptualmente:

```text
Outer Query
     │
     ▼
   users
     │
     ▼
  Subquery
     │
     ▼
   orders
```

---

## 📍 SUBQUERY EN `WHERE`

### 2️⃣ 🔎 SUBQUERY EN `WHERE`

Una subquery puede utilizarse dentro de `WHERE`.

```sql
SELECT *
FROM users
WHERE id IN (
    SELECT user_id
    FROM orders
);
```

La subquery:

```sql
SELECT user_id
FROM orders
```

obtiene los `user_id`.

La query externa utiliza esos resultados para filtrar `users`.

---

## 📦 SUBQUERY EN `FROM`

### 3️⃣ 📊 SUBQUERY EN `FROM`

Una subquery también puede aparecer dentro de `FROM`.

Conceptualmente:

```sql
SELECT *
FROM (
    SELECT *
    FROM users
) AS users_data;
```

Aquí la subquery produce un resultado que la consulta externa puede utilizar como una fuente de datos.

```text
Subquery
   ↓
Resultado
   ↓
FROM
   ↓
Outer Query
```

---

## 🎯 SUBQUERY EN `SELECT`

### 4️⃣ 📋 SUBQUERY EN `SELECT`

También puede utilizarse una subquery dentro de `SELECT`.

Conceptualmente:

```sql
SELECT
    name,
    (
        SELECT COUNT(*)
        FROM orders
    )
FROM users;
```

La subquery produce un valor que forma parte del resultado del `SELECT`.

---

## 🔄 CORRELATED SUBQUERY

### 5️⃣ 🧠 ¿QUÉ ES UNA CORRELATED SUBQUERY?

Una **correlated subquery** es una subquery que depende de la fila de la **query externa**.

Conceptualmente:

```text
Outer Query
     ↓
  fila actual
     ↓
Subquery
     ↓
depende de la fila externa
```

A diferencia de una subquery independiente, la subquery necesita información de la consulta externa.

---

## ✅ `EXISTS`

### 6️⃣ 🔎 `EXISTS`

`EXISTS` permite comprobar si una subquery **devuelve algún resultado**.

```sql
SELECT *
FROM users
WHERE EXISTS (
    SELECT 1
    FROM orders
    WHERE orders.user_id = users.id
);
```

Conceptualmente:

```text
User
 ↓
¿Existe una orden relacionada?
 ↓
┌─────────┐
│         │
Sí       No
│         │
▼         ▼
incluir  excluir
```

---

## 🆚 `IN` VS `EXISTS`

### 7️⃣ 🔄 COMPARACIÓN

#### `IN`

```sql
WHERE id IN (...)
```

Se utiliza para comprobar si un valor pertenece a un conjunto de resultados.

```text
Valor
  ↓
¿Está dentro del resultado?
```

#### `EXISTS`

```sql
WHERE EXISTS (...)
```

Se utiliza para comprobar si la subquery **devuelve alguna fila**.

```text
Subquery
   ↓
¿Existe algún resultado?
```

### 🎯 IDEA CLAVE

> **Una subquery es una consulta dentro de otra consulta. Puede aparecer en `WHERE`, `FROM` o `SELECT`. Una correlated subquery depende de la fila de la query externa, mientras que `EXISTS` comprueba si existen resultados.**
