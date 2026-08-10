# 📄 08 — PostgreSQL Queries

🔥 En este documento nos enfocamos en características y particularidades de **PostgreSQL** relacionadas con las queries.

⚠️ **Importante:** aquí no vamos a repetir SQL desde cero.

La carpeta:

```text
03 - SQL
```

ya cubre la sintaxis y fundamentos generales de SQL.

Este documento se centra específicamente en:

```text
PostgreSQL Query Syntax
RETURNING
UPSERT
ON CONFLICT
CTEs
Recursive CTEs
Window Functions
FILTER
DISTINCT ON
```

---

# 📑 Índice — 08 — PostgreSQL Queries

- [📄 08 — PostgreSQL Queries](#-08--postgresql-queries)
- [📑 Índice — 08 — PostgreSQL Queries](#-índice--08--postgresql-queries)
- [🧠 PostgreSQL Query Syntax](#-postgresql-query-syntax)
- [1️⃣ 🔥 RETURNING](#1️⃣--returning)
  - [🧩 RETURNING con múltiples columnas](#-returning-con-múltiples-columnas)
  - [🔄 RETURNING con UPDATE](#-returning-con-update)
  - [🗑️ RETURNING con DELETE](#️-returning-con-delete)
  - [🚀 RETURNING en Backend](#-returning-en-backend)
    - [💡 TIP](#-tip)
- [2️⃣ 🔄 UPSERT](#2️⃣--upsert)
  - [🧩 Ejemplo](#-ejemplo)
- [3️⃣ ⚡ ON CONFLICT](#3️⃣--on-conflict)
  - [🚫 DO NOTHING](#-do-nothing)
  - [🔄 DO UPDATE](#-do-update)
  - [🧠 ¿Qué es EXCLUDED?](#-qué-es-excluded)
- [4️⃣ 🧩 COMMON TABLE EXPRESSIONS](#4️⃣--common-table-expressions)
- [5️⃣ 📦 CTEs](#5️⃣--ctes)
  - [🧠 ¿Por qué utilizar CTEs?](#-por-qué-utilizar-ctes)
  - [🔗 Múltiples CTEs](#-múltiples-ctes)
- [6️⃣ 🔁 RECURSIVE CTEs](#6️⃣--recursive-ctes)
  - [🧠 Estructura de un Recursive CTE](#-estructura-de-un-recursive-cte)
- [7️⃣ 📊 WINDOW FUNCTIONS](#7️⃣--window-functions)
- [🧩 OVER()](#-over)
- [7️⃣1️⃣ ROW\_NUMBER()](#7️⃣1️⃣-row_number)
- [7️⃣2️⃣ RANK()](#7️⃣2️⃣-rank)
- [7️⃣3️⃣ DENSE\_RANK()](#7️⃣3️⃣-dense_rank)
    - [🆚 RANK vs DENSE\_RANK](#-rank-vs-dense_rank)
- [7️⃣4️⃣ LAG()](#7️⃣4️⃣-lag)
- [7️⃣5️⃣ LEAD()](#7️⃣5️⃣-lead)
- [🧩 PARTITION BY](#-partition-by)
  - [🧠 PARTITION BY vs GROUP BY](#-partition-by-vs-group-by)
- [🔢 ORDER BY](#-order-by)
- [8️⃣ ⭐ FILTER](#8️⃣--filter)
  - [🧠 ¿Por qué es útil FILTER?](#-por-qué-es-útil-filter)
- [9️⃣ ⭐ DISTINCT ON](#9️⃣--distinct-on)
  - [🧩 ¿Qué problema resuelve?](#-qué-problema-resuelve)
  - [⚠️ ORDER BY es MUY importante](#️-order-by-es-muy-importante)
- [🆚 DISTINCT ON vs Window Functions](#-distinct-on-vs-window-functions)
    - [🧠 Idea clave](#-idea-clave)
- [🧠 MAPA MENTAL](#-mapa-mental)
- [⚠️ ERRORES COMUNES](#️-errores-comunes)
    - [❌ 1. Confundir RETURNING con SELECT](#-1-confundir-returning-con-select)
    - [❌ 2. Confundir UPSERT con UPDATE](#-2-confundir-upsert-con-update)
    - [❌ 3. Confundir `RANK()` con `DENSE_RANK()`](#-3-confundir-rank-con-dense_rank)
    - [❌ 4. Confundir PARTITION BY con GROUP BY](#-4-confundir-partition-by-con-group-by)
    - [❌ 5. Olvidar ORDER BY con DISTINCT ON](#-5-olvidar-order-by-con-distinct-on)
- [🎯 IDEA PRINCIPAL](#-idea-principal)

---

# 🧠 PostgreSQL Query Syntax

PostgreSQL utiliza SQL como lenguaje para interactuar con la base de datos, pero además proporciona características específicas que hacen que ciertas operaciones sean más cómodas o potentes.

En este documento nos interesan especialmente:

```text
INSERT ... RETURNING
ON CONFLICT
WITH / CTE
Recursive CTE
Window Functions
FILTER
DISTINCT ON
```

Estas características aparecen constantemente cuando trabajas con PostgreSQL desde aplicaciones backend.

---

# 1️⃣ 🔥 RETURNING

`RETURNING` permite obtener inmediatamente los datos de las filas afectadas por una operación.

Puede utilizarse con operaciones como:

```sql
INSERT
UPDATE
DELETE
```

Por ejemplo:

```sql
INSERT INTO users (name, email)
VALUES ('Ana', 'ana@example.com')
RETURNING id;
```

En lugar de hacer:

```text
INSERT
  ↓
SELECT nuevamente
  ↓
Buscar el registro creado
```

puedes obtener el dato directamente:

```text
INSERT
  ↓
RETURNING
  ↓
id
```

Por ejemplo:

```text
id
---
42
```

---

## 🧩 RETURNING con múltiples columnas

No estás limitado a devolver solamente el `id`.

Puedes hacer:

```sql
INSERT INTO users (name, email)
VALUES ('Ana', 'ana@example.com')
RETURNING id, name, email;
```

Resultado:

```text
id | name | email
---|------|----------------
42 | Ana  | ana@example.com
```

---

## 🔄 RETURNING con UPDATE

También puede utilizarse después de actualizar:

```sql
UPDATE users
SET name = 'Andrea'
WHERE id = 42
RETURNING id, name;
```

Resultado:

```text
id | name
---|--------
42 | Andrea
```

---

## 🗑️ RETURNING con DELETE

También puedes obtener las filas eliminadas:

```sql
DELETE FROM users
WHERE id = 42
RETURNING id, name;
```

---

## 🚀 RETURNING en Backend

Es especialmente útil cuando una API crea un registro.

Por ejemplo:

```text
POST /users
      ↓
INSERT
      ↓
RETURNING id, name, email
      ↓
Created User
      ↓
API Response
```

En lugar de tener que realizar otra consulta para recuperar el registro recién creado.

### 💡 TIP

Cuando necesites saber **qué registro fue afectado por un `INSERT`, `UPDATE` o `DELETE`**, piensa en:

```text
RETURNING
```

---

# 2️⃣ 🔄 UPSERT

**UPSERT** es el nombre que recibe el patrón:

```text
INSERT
   ↓
si existe conflicto
   ↓
UPDATE
```

Es una combinación conceptual de:

```text
UPDATE
+
INSERT
```

La idea es:

```text
¿Existe el registro?
       │
   ┌───┴───┐
   │       │
  NO      SÍ
   │       │
INSERT   UPDATE
```

En PostgreSQL, este comportamiento se consigue mediante:

```sql
INSERT ...
ON CONFLICT ...
DO UPDATE
```

---

## 🧩 Ejemplo

Supongamos:

```text
users

id | email           | name
---|-----------------|------
1  | ana@example.com | Ana
```

Intentamos insertar:

```sql
INSERT INTO users (email, name)
VALUES ('ana@example.com', 'Andrea');
```

Pero `email` tiene una restricción que impide duplicados.

Existe un conflicto:

```text
ana@example.com
       ↓
   already exists
```

Con UPSERT podemos decir:

```text
Si no existe
   ↓
INSERT

Si existe
   ↓
UPDATE
```

---

# 3️⃣ ⚡ ON CONFLICT

`ON CONFLICT` permite especificar qué debe hacer PostgreSQL cuando un `INSERT` provoca un conflicto con una restricción de unicidad.

La estructura general es:

```sql
INSERT INTO table (...)
VALUES (...)
ON CONFLICT (...)
DO ...
```

Existen dos comportamientos principales:

```text
DO NOTHING
DO UPDATE
```

---

## 🚫 DO NOTHING

Si ocurre un conflicto, simplemente no se realiza la inserción.

```sql
INSERT INTO users (email, name)
VALUES ('ana@example.com', 'Ana')
ON CONFLICT (email)
DO NOTHING;
```

Conceptualmente:

```text
INSERT
  ↓
¿Conflict?
  │
 ┌┴────────────┐
NO            YES
 │              │
 ▼              ▼
INSERT       DO NOTHING
```

---

## 🔄 DO UPDATE

En lugar de ignorar el conflicto, podemos actualizar el registro existente.

```sql
INSERT INTO users (email, name)
VALUES ('ana@example.com', 'Andrea')
ON CONFLICT (email)
DO UPDATE
SET name = EXCLUDED.name;
```

Aquí:

```text
INSERT
   ↓
Conflict
   ↓
DO UPDATE
```

---

## 🧠 ¿Qué es EXCLUDED?

Cuando utilizamos:

```sql
ON CONFLICT ... DO UPDATE
```

`EXCLUDED` representa los valores que PostgreSQL **intentó insertar** pero que no pudieron insertarse debido al conflicto.

Por ejemplo:

```sql
INSERT INTO users (email, name)
VALUES ('ana@example.com', 'Andrea')
ON CONFLICT (email)
DO UPDATE
SET name = EXCLUDED.name;
```

Aquí:

```text
EXCLUDED.name
      ↓
'Andrea'
```

Por lo tanto, PostgreSQL actualiza el registro existente utilizando el valor que se intentaba insertar.

---

# 4️⃣ 🧩 COMMON TABLE EXPRESSIONS

Una **Common Table Expression**, normalmente llamada **CTE**, permite definir un resultado temporal con:

```sql
WITH
```

La estructura básica es:

```sql
WITH name AS (
    SELECT ...
)
SELECT ...
FROM name;
```

Conceptualmente:

```text
WITH
  ↓
Crear resultado temporal
  ↓
Utilizarlo
```

---

# 5️⃣ 📦 CTEs

Un CTE permite separar una query compleja en partes más fáciles de entender.

Por ejemplo:

```sql
WITH active_users AS (
    SELECT *
    FROM users
    WHERE active = true
)
SELECT *
FROM active_users;
```

Aquí:

```text
active_users
      ↓
resultado definido dentro del WITH
      ↓
SELECT final
```

---

## 🧠 ¿Por qué utilizar CTEs?

Una query complicada puede ser difícil de leer:

```text
Query gigante
     ↓
😵‍💫 difícil de entender
```

Con un CTE puedes dividir conceptualmente el proceso:

```text
WITH
   ↓
Paso intermedio
   ↓
Query final
```

Esto puede hacer que la query sea más clara y organizada.

---

## 🔗 Múltiples CTEs

También puedes definir más de un CTE:

```sql
WITH active_users AS (
    SELECT *
    FROM users
    WHERE active = true
),
recent_orders AS (
    SELECT *
    FROM orders
    WHERE created_at >= CURRENT_DATE - INTERVAL '7 days'
)
SELECT ...
```

Conceptualmente:

```text
WITH
 ├── active_users
 │
 └── recent_orders
          ↓
      Query final
```

---

# 6️⃣ 🔁 RECURSIVE CTEs

Un **Recursive CTE** es un CTE que puede hacer referencia a sí mismo.

Se declara utilizando:

```sql
WITH RECURSIVE
```

Es especialmente útil para trabajar con estructuras que tienen relaciones jerárquicas.

Por ejemplo:

```text
Company
   │
   ├── Manager
   │      ├── Employee
   │      └── Employee
   │
   └── Manager
          └── Employee
```

O:

```text
Category
   │
   ├── Subcategory
   │      ├── Item
   │      └── Item
   │
   └── Subcategory
```

---

## 🧠 Estructura de un Recursive CTE

Normalmente puedes pensar en dos partes:

```text
Base case
    ↓
Recursive case
    ↓
Repeat
```

Por ejemplo:

```sql
WITH RECURSIVE numbers AS (
    SELECT 1

    UNION ALL

    SELECT number + 1
    FROM numbers
    WHERE number < 5
)
SELECT *
FROM numbers;
```

Resultado:

```text
1
2
3
4
5
```

La idea es:

```text
1
 ↓
2
 ↓
3
 ↓
4
 ↓
5
```

El CTE se referencia a sí mismo:

```text
numbers
   ↓
numbers
   ↓
numbers
```

🔥 Esa es la característica que lo convierte en **recursive CTE**.

---

# 7️⃣ 📊 WINDOW FUNCTIONS

🔥 Este es uno de los conceptos más importantes de este documento.

Una **Window Function** permite realizar cálculos sobre un conjunto de filas relacionadas con la fila actual **sin convertirlas en una sola fila**, como ocurre con ciertas agregaciones tradicionales.

Algunas Window Functions importantes son:

```text
ROW_NUMBER()
RANK()
DENSE_RANK()
LAG()
LEAD()
```

Y normalmente utilizan:

```text
OVER()
PARTITION BY
ORDER BY
```

---

# 🧩 OVER()

`OVER()` define la ventana sobre la que trabaja la Window Function.

Por ejemplo:

```sql
SELECT
    name,
    ROW_NUMBER() OVER ()
FROM users;
```

Conceptualmente:

```text
Users
  ↓
Window
  ↓
ROW_NUMBER()
```

---

# 7️⃣1️⃣ ROW_NUMBER()

`ROW_NUMBER()` asigna un número consecutivo a cada fila.

```sql
SELECT
    name,
    ROW_NUMBER() OVER (
        ORDER BY name
    ) AS row_number
FROM users;
```

Resultado conceptual:

```text
name   | row_number
-------|-----------
Ana    | 1
Carlos | 2
Luis   | 3
```

Cada fila recibe un número diferente.

```text
1
2
3
4
5
...
```

---

# 7️⃣2️⃣ RANK()

`RANK()` asigna una posición teniendo en cuenta empates.

Por ejemplo:

```text
score
-----
100
100
90
80
```

Podría producir:

```text
score | rank
------|-----
100   | 1
100   | 1
90    | 3
80    | 4
```

Observa que después del empate aparece:

```text
1
1
3
4
```

Existe un salto.

---

# 7️⃣3️⃣ DENSE_RANK()

`DENSE_RANK()` también considera empates, pero **no deja saltos** después de ellos.

Con:

```text
score
-----
100
100
90
80
```

obtendríamos:

```text
score | dense_rank
------|-----------
100   | 1
100   | 1
90    | 2
80    | 3
```

### 🆚 RANK vs DENSE_RANK

| Function       | Empates | Saltos |
| -------------- | ------- | ------ |
| `RANK()`       | Sí      | Sí     |
| `DENSE_RANK()` | Sí      | No     |

---

# 7️⃣4️⃣ LAG()

`LAG()` permite acceder a un valor de una fila anterior dentro de la ventana.

Por ejemplo:

```sql
SELECT
    date,
    sales,
    LAG(sales) OVER (
        ORDER BY date
    ) AS previous_sales
FROM daily_sales;
```

Resultado conceptual:

```text
date       | sales | previous_sales
-----------|-------|---------------
2026-08-01 | 100   | NULL
2026-08-02 | 120   | 100
2026-08-03 | 150   | 120
```

La idea:

```text
Fila actual
    ↓
LAG()
    ↓
Fila anterior
```

---

# 7️⃣5️⃣ LEAD()

`LEAD()` hace lo contrario:

permite acceder al valor de una fila posterior.

```sql
SELECT
    date,
    sales,
    LEAD(sales) OVER (
        ORDER BY date
    ) AS next_sales
FROM daily_sales;
```

Resultado conceptual:

```text
date       | sales | next_sales
-----------|-------|-----------
2026-08-01 | 100   | 120
2026-08-02 | 120   | 150
2026-08-03 | 150   | NULL
```

La idea:

```text
Fila actual
    ↓
LEAD()
    ↓
Fila siguiente
```

---

# 🧩 PARTITION BY

`PARTITION BY` divide las filas en grupos dentro de la ventana.

Por ejemplo:

```sql
ROW_NUMBER() OVER (
    PARTITION BY department
    ORDER BY salary DESC
)
```

En lugar de numerar todos los empleados juntos:

```text
Todos los empleados
      ↓
1
2
3
4
5
```

se crean grupos:

```text
Department A
   ↓
1
2
3

Department B
   ↓
1
2
3
```

Cada partición tiene su propio cálculo.

---

## 🧠 PARTITION BY vs GROUP BY

No son lo mismo.

`GROUP BY` agrupa filas para producir resultados agrupados.

`PARTITION BY` divide las filas para que una **Window Function** pueda realizar un cálculo dentro de cada grupo, manteniendo las filas individuales.

Conceptualmente:

```text
GROUP BY
   ↓
Reduce / agrupa filas

PARTITION BY
   ↓
Divide la ventana
   ↓
Mantiene las filas
```

---

# 🔢 ORDER BY

Dentro de `OVER()` puedes utilizar `ORDER BY`.

Por ejemplo:

```sql
ROW_NUMBER() OVER (
    ORDER BY salary DESC
)
```

Esto determina el orden en el que se realiza el cálculo de la ventana.

También puedes combinarlo con `PARTITION BY`:

```sql
ROW_NUMBER() OVER (
    PARTITION BY department
    ORDER BY salary DESC
)
```

La lectura conceptual sería:

```text
PARTITION BY
    ↓
Divide en grupos
    ↓
ORDER BY
    ↓
Ordena dentro de cada grupo
    ↓
Window Function
```

---

# 8️⃣ ⭐ FILTER

`FILTER` permite aplicar una condición a los valores que participan en una función de agregación.

La estructura es:

```sql
aggregate_function(...)
FILTER (WHERE condition)
```

Por ejemplo:

```sql
SELECT
    COUNT(*) AS total_users,
    COUNT(*) FILTER (
        WHERE active = true
    ) AS active_users
FROM users;
```

Podemos obtener:

```text
total_users | active_users
------------|-------------
100         | 75
```

La idea:

```text
Todos los usuarios
      │
      ├── COUNT(*) → 100
      │
      └── FILTER active
                ↓
              75
```

---

## 🧠 ¿Por qué es útil FILTER?

Permite realizar diferentes agregaciones condicionadas dentro de una misma query.

Por ejemplo:

```sql
SELECT
    COUNT(*) AS total,
    COUNT(*) FILTER (WHERE status = 'active') AS active,
    COUNT(*) FILTER (WHERE status = 'blocked') AS blocked
FROM users;
```

Resultado:

```text
total | active | blocked
------|--------|--------
100   | 75     | 10
```

Esto permite obtener diferentes métricas en una sola consulta.

---

# 9️⃣ ⭐ DISTINCT ON

🔥 `DISTINCT ON` es una característica particularmente interesante de PostgreSQL.

Permite obtener **una fila por cada grupo de valores**, de acuerdo con el orden especificado.

La estructura es:

```sql
SELECT DISTINCT ON (column)
    ...
FROM table
ORDER BY column, ...;
```

---

## 🧩 ¿Qué problema resuelve?

Imagina:

```text
orders

id | user_id | created_at
---|---------|------------
1  | 10      | 2026-08-01
2  | 10      | 2026-08-05
3  | 20      | 2026-08-02
4  | 20      | 2026-08-06
```

Queremos:

> Obtener el pedido más reciente de cada usuario.

Podemos utilizar:

```sql
SELECT DISTINCT ON (user_id)
    id,
    user_id,
    created_at
FROM orders
ORDER BY user_id, created_at DESC;
```

Resultado:

```text
id | user_id | created_at
---|---------|------------
2  | 10      | 2026-08-05
4  | 20      | 2026-08-06
```

Tenemos:

```text
User 10
   ↓
último order

User 20
   ↓
último order
```

---

## ⚠️ ORDER BY es MUY importante

Con `DISTINCT ON`, el `ORDER BY` determina **qué fila queda seleccionada dentro de cada grupo**.

Por eso:

```sql
ORDER BY user_id, created_at DESC
```

significa:

```text
user_id
   ↓
Agrupar conceptualmente por usuario

created_at DESC
   ↓
Primero aparece el más reciente
   ↓
DISTINCT ON conserva esa fila
```

Si utilizáramos:

```sql
ORDER BY user_id, created_at ASC
```

obtendríamos el pedido más antiguo de cada usuario.

---

# 🆚 DISTINCT ON vs Window Functions

Ambos pueden resolver ciertos problemas similares, pero `DISTINCT ON` es una característica específica de PostgreSQL y resulta especialmente cómoda para obtener **una fila representativa por grupo**.

Por ejemplo:

```text
"Último registro de cada usuario"
```

puede expresarse de forma muy directa con:

```sql
DISTINCT ON
```

### 🧠 Idea clave

```text
DISTINCT ON
     ↓
Una fila por grupo
     +
ORDER BY
     ↓
Controla qué fila queda
```

---

# 🧠 MAPA MENTAL

```text
              PostgreSQL Queries
                     │
       ┌─────────────┼──────────────┐
       ▼             ▼              ▼
   RETURNING       UPSERT          CTE
       │             │              │
       ▼             ▼         ┌────┴────┐
   Obtener       INSERT +      CTE      Recursive
   afectados     ON CONFLICT    │          CTE
                                │
                                ▼
                         Window Functions
                                │
                 ┌──────────────┼──────────────┐
                 ▼              ▼              ▼
             ROW_NUMBER       RANK        DENSE_RANK
                 │
              LAG / LEAD
                 │
              OVER()
                 │
       ┌─────────┴─────────┐
       ▼                   ▼
 PARTITION BY           ORDER BY

              FILTER
                │
                ▼
       Aggregate + condition

            DISTINCT ON
                │
                ▼
       Una fila por grupo
```

---

# ⚠️ ERRORES COMUNES

### ❌ 1. Confundir RETURNING con SELECT

`RETURNING` devuelve las filas afectadas directamente por:

```text
INSERT
UPDATE
DELETE
```

No es simplemente otro `SELECT`.

---

### ❌ 2. Confundir UPSERT con UPDATE

UPSERT significa:

```text
INSERT
   ↓
si hay conflicto
   ↓
UPDATE
```

No significa simplemente actualizar.

---

### ❌ 3. Confundir `RANK()` con `DENSE_RANK()`

Recuerda:

```text
RANK()
→ puede dejar saltos

DENSE_RANK()
→ no deja saltos
```

---

### ❌ 4. Confundir PARTITION BY con GROUP BY

```text
GROUP BY
→ agrupa resultados

PARTITION BY
→ divide la ventana para una Window Function
```

---

### ❌ 5. Olvidar ORDER BY con DISTINCT ON

`DISTINCT ON` depende del orden para determinar qué fila queda dentro de cada grupo.

---

# 🎯 IDEA PRINCIPAL

Este documento reúne varias características de PostgreSQL que hacen que las queries sean más potentes y expresivas:

```text
RETURNING
   ↓
Obtener inmediatamente filas afectadas

UPSERT
   ↓
INSERT + UPDATE

ON CONFLICT
   ↓
Controlar conflictos de INSERT

CTE
   ↓
Construir resultados intermedios con WITH

Recursive CTE
   ↓
Resolver estructuras recursivas

Window Functions
   ↓
Calcular sobre filas relacionadas
sin perder las filas individuales

FILTER
   ↓
Aplicar condiciones a agregaciones

DISTINCT ON
   ↓
Obtener una fila por grupo
según ORDER BY
```

> 🧠 **Lo más importante:** no memorices solamente la sintaxis. Entiende **qué problema resuelve cada feature** y cuándo tiene sentido utilizarla.
