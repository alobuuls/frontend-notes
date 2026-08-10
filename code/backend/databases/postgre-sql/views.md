# 📄 PostgreSQL Views

🔥 Una **View** permite encapsular una query y darle un nombre para poder consultarla posteriormente como si fuera una tabla.

La idea principal es:

```text id="a8z1pq"
Complex Query
      ↓
     View
      ↓
Simple SELECT
```

Por ejemplo, podemos tener:

```text id="9z4y1p"
Users
   +
Orders
   +
Products
   ↓
Complex JOIN
   ↓
View
```

Y posteriormente consultar:

```sql id="r4q3yw"
SELECT *
FROM user_order_summary;
```

---

## 📑 ÍNDICE

- [📄 PostgreSQL Views](#-postgresql-views)
  - [📑 ÍNDICE](#-índice)
- [🧠 WHAT IS A VIEW?](#-what-is-a-view)
  - [🧠 Idea importante](#-idea-importante)
- [1️⃣ 🏗️ CREATING VIEWS](#1️⃣-️-creating-views)
  - [🧩 View con una query más sencilla](#-view-con-una-query-más-sencilla)
- [2️⃣ 🔎 QUERYING VIEWS](#2️⃣--querying-views)
  - [🔄 View como capa intermedia](#-view-como-capa-intermedia)
- [3️⃣ ✏️ UPDATING VIEWS](#3️⃣-️-updating-views)
  - [⚠️ No todas las Views son actualizables](#️-no-todas-las-views-son-actualizables)
- [4️⃣ 🗑️ DROPPING VIEWS](#4️⃣-️-dropping-views)
  - [🧩 DROP VIEW IF EXISTS](#-drop-view-if-exists)
- [5️⃣ ⚠️ VIEW LIMITATIONS](#5️⃣-️-view-limitations)
    - [❌ 1. No son necesariamente datos almacenados](#-1-no-son-necesariamente-datos-almacenados)
    - [❌ 2. No todas son actualizables](#-2-no-todas-son-actualizables)
    - [❌ 3. La query sigue existiendo](#-3-la-query-sigue-existiendo)
- [6️⃣ ⚡ MATERIALIZED VIEWS](#6️⃣--materialized-views)
  - [🏗️ CREATE MATERIALIZED VIEW](#️-create-materialized-view)
- [🔄 REFRESH MATERIALIZED VIEW](#-refresh-materialized-view)
- [🆚 VIEW VS MATERIALIZED VIEW](#-view-vs-materialized-view)
  - [👀 VIEW](#-view)
  - [⚡ MATERIALIZED VIEW](#-materialized-view)
- [🧠 COMPARACIÓN VISUAL](#-comparación-visual)
- [💡 ¿CUÁNDO PENSAR EN CADA UNA?](#-cuándo-pensar-en-cada-una)
    - [🟢 VIEW](#-view-1)
    - [⚡ MATERIALIZED VIEW](#-materialized-view-1)
- [🧠 MAPA MENTAL](#-mapa-mental)
- [⚠️ ERRORES COMUNES](#️-errores-comunes)
    - [❌ 1. Pensar que una View almacena el resultado](#-1-pensar-que-una-view-almacena-el-resultado)
    - [❌ 2. Pensar que una Materialized View siempre está actualizada](#-2-pensar-que-una-materialized-view-siempre-está-actualizada)
    - [❌ 3. Pensar que todas las Views pueden actualizarse](#-3-pensar-que-todas-las-views-pueden-actualizarse)
    - [❌ 4. Confundir `DROP` con `REFRESH`](#-4-confundir-drop-con-refresh)
- [🎯 IDEA PRINCIPAL](#-idea-principal)

---

# 🧠 WHAT IS A VIEW?

Una **View** es una consulta almacenada a la que se le asigna un nombre.

En lugar de escribir repetidamente una query compleja:

```sql id="3k3hmb"
SELECT
    users.id,
    users.name,
    orders.id AS order_id,
    products.name AS product
FROM users
JOIN orders
    ON orders.user_id = users.id
JOIN products
    ON products.id = orders.product_id;
```

podemos crear una View:

```text id="8e2f1c"
Complex Query
      ↓
     View
      ↓
user_order_summary
```

Y después consultar:

```sql id="5tly8h"
SELECT *
FROM user_order_summary;
```

---

## 🧠 Idea importante

Una View **no es simplemente copiar los resultados de una query y guardarlos**.

Una View representa una query que PostgreSQL puede ejecutar cuando consultas la View.

Conceptualmente:

```text id="t72c3d"
View
 ↓
Underlying Query
 ↓
Current Data
```

Por eso:

```text id="2qdr8j"
View
 ↓
No almacena normalmente
los resultados físicamente
```

---

# 1️⃣ 🏗️ CREATING VIEWS

Para crear una View utilizamos:

```sql id="j7w1pm"
CREATE VIEW
```

La estructura básica es:

```sql id="e3x7wa"
CREATE VIEW view_name AS
SELECT ...
```

Por ejemplo:

```sql id="p5i6p8"
CREATE VIEW user_order_summary AS
SELECT
    users.id AS user_id,
    users.name,
    orders.id AS order_id
FROM users
JOIN orders
    ON orders.user_id = users.id;
```

Ahora existe:

```text id="0r3c9x"
user_order_summary
```

que representa esa query.

---

## 🧩 View con una query más sencilla

También podemos crear una View a partir de una sola tabla:

```sql id="y4ck2m"
CREATE VIEW active_users AS
SELECT
    id,
    name,
    email
FROM users
WHERE active = true;
```

Ahora tenemos:

```text id="v7v6ib"
users
  ↓
WHERE active = true
  ↓
active_users View
```

---

# 2️⃣ 🔎 QUERYING VIEWS

Una vez creada una View, podemos consultarla utilizando `SELECT`.

```sql id="1k1y4r"
SELECT *
FROM active_users;
```

Para PostgreSQL, podemos consultar la View utilizando una sintaxis similar a una tabla.

Por ejemplo:

```sql id="7v4z4x"
SELECT name, email
FROM active_users;
```

También podemos aplicar condiciones a la consulta:

```sql id="g5h2e7"
SELECT *
FROM active_users
WHERE name = 'Ana';
```

La idea:

```text id="d3b7t9"
View
 ↓
SELECT
 ↓
Result
```

---

## 🔄 View como capa intermedia

Podemos visualizarlo así:

```text id="q7x2w0"
Users
Orders
Products
   ↓
Complex Query
   ↓
View
   ↓
SELECT
   ↓
Application
```

Esto permite que la aplicación consulte:

```sql id="e7f5a2"
SELECT *
FROM user_order_summary;
```

sin tener que repetir toda la lógica de la query compleja.

---

# 3️⃣ ✏️ UPDATING VIEWS

Las Views pueden tener diferentes posibilidades respecto a las operaciones de modificación.

No todas las Views pueden actualizarse directamente.

Una View puede ser **updatable** cuando PostgreSQL puede determinar cómo traducir una modificación sobre la View hacia la tabla subyacente.

Por ejemplo, una View sencilla:

```sql id="5d3f5f"
CREATE VIEW active_users AS
SELECT
    id,
    name,
    email
FROM users;
```

Puede permitir operaciones como:

```sql id="f9r8n0"
UPDATE active_users
SET name = 'Andrea'
WHERE id = 1;
```

La modificación afecta a los datos de la tabla subyacente.

Conceptualmente:

```text id="b3z5kh"
UPDATE View
     ↓
Underlying Table
     ↓
UPDATE
```

---

## ⚠️ No todas las Views son actualizables

Una View compleja puede no ser directamente modificable.

Por ejemplo, una View que combina:

```text id="8s5r7v"
Multiple Tables
      +
JOIN
      +
Aggregation
```

puede no ser directamente actualizable de la misma forma que una View sencilla.

Por eso debes distinguir:

```text id="6t7m2c"
Simple View
    ↓
Puede ser actualizable

Complex View
    ↓
Puede tener limitaciones
```

---

# 4️⃣ 🗑️ DROPPING VIEWS

Para eliminar una View utilizamos:

```sql id="3i5lqf"
DROP VIEW
```

Por ejemplo:

```sql id="n6x1q2"
DROP VIEW active_users;
```

La View desaparece.

Conceptualmente:

```text id="k2s4j7"
active_users
     ↓
DROP VIEW
     ↓
❌ View eliminada
```

---

## 🧩 DROP VIEW IF EXISTS

También podemos utilizar:

```sql id="6n0n9w"
DROP VIEW IF EXISTS active_users;
```

Esto permite evitar un error si la View no existe.

La idea:

```text id="s2j7w9"
¿Existe?
  │
 ┌┴───────┐
YES      NO
 │        │
 ▼        ▼
DROP    No error
```

---

# 5️⃣ ⚠️ VIEW LIMITATIONS

Las Views son muy útiles, pero tienen algunas limitaciones.

### ❌ 1. No son necesariamente datos almacenados

Una View normal representa una query.

```text id="k0z8pr"
View
 ↓
Query
 ↓
Current Data
```

No debemos pensar en ella como una copia física de los resultados.

---

### ❌ 2. No todas son actualizables

Una View puede ser sencilla y actualizable:

```text id="g9d2qf"
Table
 ↓
Simple SELECT
 ↓
View
```

Pero una View más compleja puede tener restricciones:

```text id="s4n1cd"
Multiple Tables
      ↓
JOIN
      ↓
Aggregation
      ↓
View
      ↓
Possible update limitations
```

---

### ❌ 3. La query sigue existiendo

Una View simplifica el acceso a una query compleja:

```text id="6z1g5f"
Complex Query
      ↓
     View
      ↓
Simple SELECT
```

pero no significa que la complejidad de la query haya desaparecido.

La View simplemente la **encapsula**.

---

# 6️⃣ ⚡ MATERIALIZED VIEWS

Una **Materialized View** es diferente de una View normal.

La diferencia fundamental es:

```text id="x8g1m5"
View
 ↓
Query ejecutada cuando consultas
```

mientras:

```text id="p9z2r4"
Materialized View
 ↓
Resultado almacenado
```

Una Materialized View guarda físicamente el resultado de la query.

---

## 🏗️ CREATE MATERIALIZED VIEW

Podemos crear una Materialized View utilizando:

```sql id="3m8h1v"
CREATE MATERIALIZED VIEW
```

Por ejemplo:

```sql id="0k4j8q"
CREATE MATERIALIZED VIEW user_order_summary AS
SELECT
    user_id,
    COUNT(*) AS total_orders
FROM orders
GROUP BY user_id;
```

PostgreSQL ejecuta la query y almacena su resultado.

Conceptualmente:

```text id="e4q7m2"
Complex Query
      ↓
Materialized View
      ↓
Stored Result
```

---

# 🔄 REFRESH MATERIALIZED VIEW

Aquí aparece una diferencia fundamental.

Una Materialized View almacena un resultado.

Por lo tanto, si los datos originales cambian:

```text id="x2m9a7"
Original Data
     ↓
   changes
     ↓
Materialized View
     ↓
Old Result
```

Necesitamos actualizar el resultado almacenado.

Para eso utilizamos:

```sql id="w6r4k2"
REFRESH MATERIALIZED VIEW user_order_summary;
```

Conceptualmente:

```text id="a8n4s1"
Underlying Tables
      ↓
     changes
      ↓
REFRESH
      ↓
Materialized View
      ↓
Updated Result
```

---

# 🆚 VIEW VS MATERIALIZED VIEW

Esta diferencia es **MUY importante**.

|                        | View                       | Materialized View                              |
| ---------------------- | -------------------------- | ---------------------------------------------- |
| Resultado almacenado   | ❌ No normalmente           | ✅ Sí                                           |
| Query al consultar     | Se ejecuta                 | No necesita recalcular el resultado almacenado |
| Datos siempre actuales | ✅ Según los datos actuales | ❌ Puede quedar desactualizada                  |
| Necesita `REFRESH`     | ❌                          | ✅                                              |
| Resultado persistido   | ❌                          | ✅                                              |

---

## 👀 VIEW

```text id="5x1d8k"
SELECT
   ↓
View
   ↓
Underlying Query
   ↓
Current Data
```

Cada vez que consultas la View, PostgreSQL utiliza la query que define la View.

---

## ⚡ MATERIALIZED VIEW

```text id="q4z7m2"
CREATE MATERIALIZED VIEW
          ↓
      Execute Query
          ↓
      Store Result
          ↓
   Materialized View
```

Después:

```text id="a1v5n8"
SELECT
   ↓
Materialized View
   ↓
Stored Result
```

Si los datos originales cambian:

```text id="f8r3k6"
Original Data
      ↓
     Change
      ↓
Materialized View
      ↓
Potentially stale
```

Necesitas:

```sql id="q7s4m9"
REFRESH MATERIALIZED VIEW user_order_summary;
```

---

# 🧠 COMPARACIÓN VISUAL

```text id="u1x5c7"
                VIEW
                  │
                  ▼
             Stored Query
                  │
                  ▼
             Query Data
                  │
                  ▼
             Current Result
```

vs.

```text id="m4q8z2"
          MATERIALIZED VIEW
                  │
                  ▼
              Run Query
                  │
                  ▼
           Store Result
                  │
                  ▼
          SELECT stored data
                  │
                  ▼
             Result
```

Y cuando cambia la información original:

```text id="h7k3p1"
VIEW
 ↓
Consulta nuevamente
 ↓
Resultado actualizado
```

mientras:

```text id="r5n9w4"
MATERIALIZED VIEW
 ↓
Resultado almacenado
 ↓
Puede quedar viejo
 ↓
REFRESH
 ↓
Nuevo resultado
```

---

# 💡 ¿CUÁNDO PENSAR EN CADA UNA?

### 🟢 VIEW

Piensa:

> "Quiero encapsular una query y consultarla fácilmente."

```text id="v8j2m6"
Complex Query
      ↓
     View
      ↓
Simple SELECT
```

---

### ⚡ MATERIALIZED VIEW

Piensa:

> "Quiero guardar el resultado de una query para poder consultarlo sin recalcularla cada vez."

```text id="z3f7q1"
Complex Query
      ↓
Stored Result
      ↓
Materialized View
```

Pero recuerda:

```text id="b5k9r2"
Stored Result
     ↓
Puede quedar desactualizado
     ↓
REFRESH
```

---

# 🧠 MAPA MENTAL

```text id="c7m1x4"
                    PostgreSQL Views
                          │
              ┌───────────┴───────────┐
              ▼                       ▼
            VIEW             MATERIALIZED VIEW
              │                       │
              ▼                       ▼
       Stored Query            Stored Result
              │                       │
              ▼                       ▼
      Query when used             SELECT
              │                       │
              ▼                       ▼
       Current Data             Stored Data
                                      │
                                      ▼
                                    REFRESH
```

---

# ⚠️ ERRORES COMUNES

### ❌ 1. Pensar que una View almacena el resultado

Una View normal representa una query.

```text id="x3p7m9"
VIEW
 ↓
Query
```

Mientras:

```text id="k6r2w8"
MATERIALIZED VIEW
 ↓
Stored Result
```

---

### ❌ 2. Pensar que una Materialized View siempre está actualizada

No.

```text id="j8q4n2"
Original Data
      ↓
Change
      ↓
Materialized View
      ↓
Puede estar desactualizada
```

Debes hacer:

```sql id="d3v7k1"
REFRESH MATERIALIZED VIEW ...
```

---

### ❌ 3. Pensar que todas las Views pueden actualizarse

No todas son actualizables.

```text id="w2m6p8"
Simple View
    ↓
Puede ser actualizable

Complex View
    ↓
Puede tener limitaciones
```

---

### ❌ 4. Confundir `DROP` con `REFRESH`

Son operaciones completamente diferentes:

```text id="q1n5r7"
DROP VIEW
   ↓
Eliminar la View
```

mientras:

```text id="s4k8m2"
REFRESH MATERIALIZED VIEW
   ↓
Actualizar el resultado almacenado
```

---

# 🎯 IDEA PRINCIPAL

Las **Views** permiten encapsular queries para poder reutilizarlas mediante un nombre sencillo.

```text id="x9p3m6"
Complex Query
      ↓
     View
      ↓
Simple SELECT
```

Una View normal representa la query:

```text id="v5k2q8"
View
 ↓
Query
 ↓
Current Data
```

Mientras que una Materialized View almacena el resultado:

```text id="n7r4w1"
Materialized View
       ↓
Stored Result
       ↓
REFRESH
       ↓
Updated Result
```

🔥 La diferencia que debes tener grabada:

```text id="b2m8q5"
VIEW
↓
Query almacenada
↓
Resultado no almacenado normalmente
↓
Consulta los datos actuales
```

vs.

```text id="c6r1n9"
MATERIALIZED VIEW
↓
Resultado almacenado
↓
Consulta el resultado almacenado
↓
Necesita REFRESH para actualizarlo
```

> 🧠 **View = encapsular una query.**
>
> ⚡ **Materialized View = almacenar el resultado de una query y actualizarlo mediante `REFRESH`.**
