# 📄 NULL

Aquí estudias **cómo trabajar con** **`NULL`** **en SQL**.

---

## 📑 ÍNDICE

- [� NULL](#-null)
  - [📑 ÍNDICE](#-índice)
- [🚫 IS NULL](#-is-null)
  - [1️⃣ 🔎 ¿QUÉ ES `IS NULL`?](#1️⃣--qué-es-is-null)
- [✅ IS NOT NULL](#-is-not-null)
  - [2️⃣ 🔎 ¿QUÉ ES `IS NOT NULL`?](#2️⃣--qué-es-is-not-null)
- [⚠️ NULL Y COMPARACIONES](#️-null-y-comparaciones)
  - [3️⃣ ❌ `= NULL`](#3️⃣---null)
- [🧠 NULL EN OPERACIONES](#-null-en-operaciones)
  - [4️⃣ ➕ `NULL + value`](#4️⃣--null--value)
  - [5️⃣ 🟰 `NULL = value`](#5️⃣--null--value)
  - [6️⃣ ⚖️ `NULL != value`](#6️⃣-️-null--value)
- [🧩 COALESCE()](#-coalesce)
  - [7️⃣ 🔄 `COALESCE()`](#7️⃣--coalesce)
    - [🎯 IDEA CLAVE](#-idea-clave)

# 🚫 IS NULL

## 1️⃣ 🔎 ¿QUÉ ES `IS NULL`?

`IS NULL` permite comprobar si una columna contiene `NULL`.

```sql
SELECT *
FROM users
WHERE phone IS NULL;
```

Esto devuelve los registros donde `phone` **no tiene un valor**.

---

# ✅ IS NOT NULL

## 2️⃣ 🔎 ¿QUÉ ES `IS NOT NULL`?

`IS NOT NULL` permite comprobar si una columna **no contiene** **`NULL`**.

```sql
SELECT *
FROM users
WHERE phone IS NOT NULL;
```

Esto devuelve los registros donde `phone` tiene algún valor.

---

# ⚠️ NULL Y COMPARACIONES

## 3️⃣ ❌ `= NULL`

Esto **no funciona como podrías esperar**:

```sql
WHERE phone = NULL;
```

Para comprobar `NULL`, debes utilizar:

```sql
WHERE phone IS NULL;
```

La razón es que `NULL` representa la **ausencia de un valor**, por lo que no se compara utilizando `=`.

---

# 🧠 NULL EN OPERACIONES

## 4️⃣ ➕ `NULL + value`

Las operaciones que involucran `NULL` producen normalmente `NULL`.

```text
NULL + value
   ↓
NULL
```

---

## 5️⃣ 🟰 `NULL = value`

Una comparación con `NULL` no produce `TRUE` como una comparación normal.

```text
NULL = value
   ↓
UNKNOWN
```

---

## 6️⃣ ⚖️ `NULL != value`

Tampoco produce `TRUE`.

```text
NULL != value
   ↓
UNKNOWN
```

Esto está relacionado con la **lógica de tres valores de SQL**:

| Resultado | Significado |
| --------- | ----------- |
| `TRUE`    | Verdadero   |
| `FALSE`   | Falso       |
| `UNKNOWN` | Desconocido |

---

# 🧩 COALESCE()

## 7️⃣ 🔄 `COALESCE()`

`COALESCE()` permite trabajar posteriormente con valores `NULL`, devolviendo el primer valor que **no sea** **`NULL`**.

```sql
COALESCE(phone, 'No phone')
```

Conceptualmente:

```text
phone
  ↓
¿Es NULL?
  │
 ┌┴───────┐
Sí       No
│         │
▼         ▼
'No      phone
phone'
```

---

### 🎯 IDEA CLAVE

> **`NULL`** representa ausencia de valor. Para comprobarlo utilizas **`IS NULL`** o **`IS NOT NULL`**, no **`=`** ni **`!=`**.
