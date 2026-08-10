# 📄 SQL FUNCTIONS

Aquí estudias las **funciones integradas de SQL** que no sean las agregaciones de `09 - Aggregations`.

---

## 📑 ÍNDICE

- [📄 SQL FUNCTIONS](#-sql-functions)
  - [📑 ÍNDICE](#-índice)
  - [🔤 STRING FUNCTIONS](#-string-functions)
    - [1️⃣ 🔤 Funciones de texto](#1️⃣--funciones-de-texto)
  - [🔢 NUMERIC FUNCTIONS](#-numeric-functions)
    - [2️⃣ 🔢 Funciones numéricas](#2️⃣--funciones-numéricas)
  - [📅 DATE FUNCTIONS](#-date-functions)
    - [3️⃣ 📅 Funciones de fecha](#3️⃣--funciones-de-fecha)
    - [`CURRENT_DATE`](#current_date)
    - [`CURRENT_TIMESTAMP`](#current_timestamp)
    - [`EXTRACT()`](#extract)
  - [🧩 NULL FUNCTIONS](#-null-functions)
    - [4️⃣ 🔄 `COALESCE()`](#4️⃣--coalesce)
    - [5️⃣ 🚫 `NULLIF()`](#5️⃣--nullif)
  - [⚠️ FUNCIONES Y DBMS](#️-funciones-y-dbms)
    - [6️⃣ 🗄️ DIFERENCIAS ENTRE DBMS](#6️⃣-️-diferencias-entre-dbms)

## 🔤 STRING FUNCTIONS

### 1️⃣ 🔤 Funciones de texto

Dependiendo del DBMS:

```text
LOWER()
UPPER()
LENGTH()
TRIM()
CONCAT()
SUBSTRING()
```

| Función       | Descripción                                         | Ejemplo                              |
| ------------- | --------------------------------------------------- | ------------------------------------ |
| `LOWER()`     | Convierte texto a minúsculas.                       | `LOWER(name)`                        |
| `UPPER()`     | Convierte texto a mayúsculas.                       | `UPPER(name)`                        |
| `LENGTH()`    | Obtiene la longitud de un texto.                    | `LENGTH(name)`                       |
| `TRIM()`      | Elimina espacios innecesarios al inicio y al final. | `TRIM(name)`                         |
| `CONCAT()`    | Concatena valores de texto.                         | `CONCAT(first_name, ' ', last_name)` |
| `SUBSTRING()` | Obtiene una parte de un texto.                      | `SUBSTRING(name, 1, 3)`              |

---

## 🔢 NUMERIC FUNCTIONS

### 2️⃣ 🔢 Funciones numéricas

```text
ROUND()
CEIL()
FLOOR()
ABS()
```

| Función   | Descripción                | Ejemplo        |
| --------- | -------------------------- | -------------- |
| `ROUND()` | Redondea un número.        | `ROUND(price)` |
| `CEIL()`  | Redondea hacia arriba.     | `CEIL(price)`  |
| `FLOOR()` | Redondea hacia abajo.      | `FLOOR(price)` |
| `ABS()`   | Obtiene el valor absoluto. | `ABS(value)`   |

---

## 📅 DATE FUNCTIONS

### 3️⃣ 📅 Funciones de fecha

Dependiendo del DBMS:

```text
CURRENT_DATE
CURRENT_TIMESTAMP
EXTRACT()
```

### `CURRENT_DATE`

Obtiene la fecha actual.

```sql
CURRENT_DATE
```

Conceptualmente:

```text
2026-08-08
```

### `CURRENT_TIMESTAMP`

Obtiene la fecha y hora actuales.

```sql
CURRENT_TIMESTAMP
```

Conceptualmente:

```text
2026-08-08 15:30:00
```

### `EXTRACT()`

Permite obtener una parte específica de una fecha o timestamp.

```sql
EXTRACT(YEAR FROM created_at)
```

Por ejemplo:

```text
created_at
    ↓
2026-08-08
    ↓
EXTRACT(YEAR ...)
    ↓
2026
```

---

## 🧩 NULL FUNCTIONS

### 4️⃣ 🔄 `COALESCE()`

`COALESCE()` devuelve el **primer valor que no sea** **`NULL`**.

```sql
COALESCE(phone, 'No phone')
```

Conceptualmente:

```text
phone
  ↓
¿NULL?
 ┌──┴──┐
Sí    No
↓      ↓
siguiente  phone
valor
```

---

### 5️⃣ 🚫 `NULLIF()`

`NULLIF()` devuelve `NULL` cuando los dos valores proporcionados son iguales.

```sql
NULLIF(value1, value2)
```

Conceptualmente:

```text
value1 = value2
      ↓
    NULL
```

Si son diferentes, devuelve el primer valor.

```text
value1 ≠ value2
      ↓
    value1
```

---

## ⚠️ FUNCIONES Y DBMS

### 6️⃣ 🗄️ DIFERENCIAS ENTRE DBMS

Las funciones disponibles pueden **cambiar dependiendo del DBMS**.

Por ejemplo:

```text
PostgreSQL
    │
MySQL
    │
SQL Server
```

No tienen exactamente el mismo conjunto de funciones ni necesariamente la misma sintaxis.

Por eso debes entender:

> **SQL tiene funciones comunes, pero cada DBMS puede implementar funciones adicionales o utilizar una sintaxis diferente.**
