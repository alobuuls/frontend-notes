# 📄 CASE

Aquí estudias **lógica condicional dentro de SQL**.

---

## 📑 ÍNDICE 

- [📄 CASE](#-case)
  - [📑 ÍNDICE](#-índice)
  - [🔀 CASE](#-case-1)
    - [1️⃣ 🧠 ¿QUÉ ES `CASE`?](#1️⃣--qué-es-case)
  - [🧩 WHEN](#-when)
    - [2️⃣ 🔎 `WHEN`](#2️⃣--when)
  - [👉 THEN](#-then)
    - [3️⃣ 📋 `THEN`](#3️⃣--then)
  - [🔀 ELSE](#-else)
    - [4️⃣ 📌 `ELSE`](#4️⃣--else)
  - [🛑 END](#-end)
    - [5️⃣ 🔚 `END`](#5️⃣--end)
  - [📊 CASE EN SELECT](#-case-en-select)
    - [6️⃣ 📝 `SELECT`](#6️⃣--select)
  - [↕️ CASE EN ORDER BY](#️-case-en-order-by)
    - [7️⃣ 🔢 `ORDER BY`](#7️⃣--order-by)
  - [📦 CASE EN GROUP BY](#-case-en-group-by)
    - [8️⃣ 📊 `GROUP BY`](#8️⃣--group-by)
  - [✏️ CASE EN UPDATE](#️-case-en-update)
    - [9️⃣ 🔄 `UPDATE`](#9️⃣--update)
    - [🎯 IDEA CLAVE](#-idea-clave)

## 🔀 CASE

### 1️⃣ 🧠 ¿QUÉ ES `CASE`?

`CASE` permite realizar condiciones dentro de una consulta SQL y devolver un valor dependiendo de si una condición se cumple.

```sql
SELECT
    name,
    CASE
        WHEN age >= 18 THEN 'Adult'
        ELSE 'Minor'
    END AS age_group
FROM users;
```

Conceptualmente:

```text
age
 ↓
¿age >= 18?
 ┌──────┴──────┐
Sí            No
 ↓              ↓
Adult         Minor
```

---

## 🧩 WHEN

### 2️⃣ 🔎 `WHEN`

`WHEN` define la **condición** que SQL debe evaluar.

```sql
CASE
    WHEN age >= 18
```

Conceptualmente:

```text
WHEN
 ↓
condición
 ↓
¿Se cumple?
```

---

## 👉 THEN

### 3️⃣ 📋 `THEN`

`THEN` define el **valor que se devuelve cuando la condición de `WHEN` se cumple**.

```sql
CASE
    WHEN age >= 18 THEN 'Adult'
```

```text
WHEN age >= 18
       ↓
     TRUE
       ↓
THEN 'Adult'
```

---

## 🔀 ELSE

### 4️⃣ 📌 `ELSE`

`ELSE` define el valor que se devuelve cuando **ninguna de las condiciones anteriores se cumple**.

```sql
CASE
    WHEN age >= 18 THEN 'Adult'
    ELSE 'Minor'
END
```

Conceptualmente:

```text
¿Cumple WHEN?
 ┌──────┴──────┐
Sí            No
 ↓              ↓
THEN           ELSE
```

---

## 🛑 END

### 5️⃣ 🔚 `END`

`END` indica el **final de la expresión `CASE`**.

```sql
CASE
    WHEN age >= 18 THEN 'Adult'
    ELSE 'Minor'
END
```

---

## 📊 CASE EN SELECT

### 6️⃣ 📝 `SELECT`

Uno de los usos más comunes es utilizar `CASE` dentro de `SELECT`.

```sql
SELECT
    name,
    CASE
        WHEN age >= 18 THEN 'Adult'
        ELSE 'Minor'
    END AS age_group
FROM users;
```

Resultado conceptual:

| name  | age_group |
| ----- | --------- |
| Ana   | Adult     |
| Luis  | Minor     |
| Pedro | Adult     |

---

## ↕️ CASE EN ORDER BY

### 7️⃣ 🔢 `ORDER BY`

`CASE` también puede utilizarse para definir una lógica de ordenamiento.

```sql
SELECT *
FROM users
ORDER BY
    CASE
        WHEN age >= 18 THEN 1
        ELSE 2
    END;
```

---

## 📦 CASE EN GROUP BY

### 8️⃣ 📊 `GROUP BY`

También puede utilizarse para crear grupos basados en condiciones.

```sql
SELECT
    CASE
        WHEN age >= 18 THEN 'Adult'
        ELSE 'Minor'
    END AS age_group,
    COUNT(*)
FROM users
GROUP BY
    CASE
        WHEN age >= 18 THEN 'Adult'
        ELSE 'Minor'
    END;
```

Conceptualmente:

```text
Users
  ↓
CASE
  ↓
┌──────────────┐
│ Adult        │
│ Minor        │
└──────────────┘
  ↓
GROUP BY
  ↓
Grupos
```

---

## ✏️ CASE EN UPDATE

### 9️⃣ 🔄 `UPDATE`

`CASE` también puede utilizarse para asignar diferentes valores durante un `UPDATE`.

```sql
UPDATE users
SET status =
    CASE
        WHEN age >= 18 THEN 'adult'
        ELSE 'minor'
    END;
```

Conceptualmente:

```text
Users
  ↓
CASE
  ↓
¿age >= 18?
 ┌──────┴──────┐
Sí            No
 ↓              ↓
adult          minor
  └──────┬──────┘
         ↓
      UPDATE
```

### 🎯 IDEA CLAVE

> **`CASE` permite implementar lógica condicional dentro de SQL utilizando `WHEN`, `THEN`, `ELSE` y `END`. Puede utilizarse en `SELECT`, `ORDER BY`, `GROUP BY` y `UPDATE`.**
