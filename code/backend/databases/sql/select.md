# 📄 SELECT

Aquí aprendes a **obtener información de una tabla** utilizando `SELECT`.

---

## 📚 ÍNDICE

- [� SELECT](#-select)
  - [📚 ÍNDICE](#-índice)
- [🔎 SELECT](#-select-1)
  - [1️⃣ 📝 ¿QUÉ ES `SELECT`?](#1️⃣--qué-es-select)
  - [2️⃣ 🗃️ `FROM`](#2️⃣-️-from)
- [📋 SELECCIONAR COLUMNAS](#-seleccionar-columnas)
  - [3️⃣ 🌟 TODAS LAS COLUMNAS](#3️⃣--todas-las-columnas)
  - [4️⃣ 🎯 COLUMNAS ESPECÍFICAS](#4️⃣--columnas-específicas)
  - [5️⃣ 📌 UNA COLUMNA](#5️⃣--una-columna)
  - [6️⃣ 📌 VARIAS COLUMNAS](#6️⃣--varias-columnas)
- [🏷️ ALIASES](#️-aliases)
  - [7️⃣ 🔤 ¿QUÉ ES UN ALIAS?](#7️⃣--qué-es-un-alias)
  - [8️⃣ 🏷️ `AS`](#8️⃣-️-as)
- [🔗 TABLE ALIASES](#-table-aliases)
  - [9️⃣ 🅰️ ALIAS PARA TABLAS](#9️⃣-️-alias-para-tablas)
  - [🔟 📌 COLUMNAS CON TABLE ALIAS](#--columnas-con-table-alias)
- [🧮 EXPRESIONES EN SELECT](#-expresiones-en-select)
  - [1️⃣1️⃣ ➕ EXPRESSIONS](#1️⃣1️⃣--expressions)
- [📌 COLUMN SELECTION](#-column-selection)
  - [1️⃣2️⃣ 🎯 FORMAS PRINCIPALES](#1️⃣2️⃣--formas-principales)
    - [Todas las columnas](#todas-las-columnas)
    - [Una columna](#una-columna)
    - [Varias columnas](#varias-columnas)
    - [Con alias](#con-alias)
    - [Con alias de tabla](#con-alias-de-tabla)
- [🧠 MODELO MENTAL](#-modelo-mental)
    - [🎯 IDEA CLAVE](#-idea-clave)

# 🔎 SELECT

## 1️⃣ 📝 ¿QUÉ ES `SELECT`?

`SELECT` se utiliza para indicar **qué información quieres obtener** de la base de datos.

La estructura básica es:

```sql
SELECT ...
FROM ...;
```

Ejemplo:

```sql
SELECT *
FROM users;
```

Esto obtiene todas las columnas de la tabla `users`.

---

## 2️⃣ 🗃️ `FROM`

`FROM` indica **de qué tabla se obtendrán los datos**.

```sql
SELECT *
FROM users;
```

Aquí:

```text
SELECT → qué obtener
FROM   → de dónde obtenerlo
```

---

# 📋 SELECCIONAR COLUMNAS

## 3️⃣ 🌟 TODAS LAS COLUMNAS

Para seleccionar todas las columnas:

```sql
SELECT *
FROM users;
```

El `*` representa **todas las columnas**.

---

## 4️⃣ 🎯 COLUMNAS ESPECÍFICAS

Puedes indicar exactamente qué columnas quieres obtener:

```sql
SELECT name, email
FROM users;
```

Resultado conceptual:

```text
name | email
-----|----------------
Ana  | ana@mail.com
Luis | luis@mail.com
```

Esto permite obtener únicamente las columnas necesarias.

---

## 5️⃣ 📌 UNA COLUMNA

También puedes seleccionar una sola columna:

```sql
SELECT name
FROM users;
```

---

## 6️⃣ 📌 VARIAS COLUMNAS

Puedes seleccionar varias columnas separándolas con `,`:

```sql
SELECT name, email
FROM users;
```

La estructura es:

```text
SELECT
    column1,
    column2,
    column3
FROM table;
```

---

# 🏷️ ALIASES

## 7️⃣ 🔤 ¿QUÉ ES UN ALIAS?

Un **alias** permite darle otro nombre a una columna dentro del resultado de la consulta.

Se utiliza `AS`.

```sql
SELECT
    name AS user_name
FROM users;
```

La columna original se llama:

```text
name
```

pero el resultado aparecerá como:

```text
user_name
```

---

## 8️⃣ 🏷️ `AS`

La estructura es:

```sql
SELECT column AS alias
FROM table;
```

Por ejemplo:

```sql
SELECT
    email AS user_email
FROM users;
```

El alias cambia **el nombre mostrado en el resultado**, no el nombre real de la columna en la tabla.

---

# 🔗 TABLE ALIASES

## 9️⃣ 🅰️ ALIAS PARA TABLAS

También puedes crear un alias para una tabla.

```sql
SELECT
    u.name
FROM users AS u;
```

Aquí:

```text
users → nombre real de la tabla
u     → alias
```

Por lo tanto:

```text
u.name
```

significa:

```text
tabla users → columna name
```

---

## 🔟 📌 COLUMNAS CON TABLE ALIAS

Cuando utilizas un alias para una tabla, puedes acceder a sus columnas mediante:

```text
alias.column
```

Ejemplo:

```sql
SELECT
    u.name
FROM users AS u;
```

Conceptualmente:

```text
u
│
└── name
```

---

# 🧮 EXPRESIONES EN SELECT

## 1️⃣1️⃣ ➕ EXPRESSIONS

`SELECT` también puede contener **expresiones**, no únicamente nombres de columnas.

Por ejemplo:

```sql
SELECT
    age + 1
FROM users;
```

La expresión:

```text
age + 1
```

se evalúa para cada registro y forma parte del resultado.

---

# 📌 COLUMN SELECTION

## 1️⃣2️⃣ 🎯 FORMAS PRINCIPALES

### Todas las columnas

```sql
SELECT *
FROM users;
```

### Una columna

```sql
SELECT name
FROM users;
```

### Varias columnas

```sql
SELECT name, email
FROM users;
```

### Con alias

```sql
SELECT
    name AS user_name
FROM users;
```

### Con alias de tabla

```sql
SELECT
    u.name
FROM users AS u;
```

---

# 🧠 MODELO MENTAL

```text
SELECT
   │
   ├── *              → todas las columnas
   ├── column         → una columna
   ├── column1, ...   → varias columnas
   ├── column AS x    → alias
   └── expression     → expresión
        │
        ▼
FROM users
        │
        ▼
   Tabla de origen
```

### 🎯 IDEA CLAVE

> **`SELECT`** **define qué quieres obtener y** **`FROM`** **indica de qué tabla provienen esos datos.**
