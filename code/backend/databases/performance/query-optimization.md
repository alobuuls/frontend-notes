# 📄 QUERY OPTIMIZATION

Aquí estudias cómo hacer que tus **queries sean más eficientes**, evitando trabajo innecesario y reduciendo el coste de las consultas.

---

# 📑 ÍNDICE — QUERY OPTIMIZATION

- [📄 QUERY OPTIMIZATION](#-query-optimization)
- [📑 ÍNDICE — QUERY OPTIMIZATION](#-índice--query-optimization)
  - [1️⃣ ⚡ ¿QUÉ ES QUERY OPTIMIZATION?](#1️⃣--qué-es-query-optimization)
  - [2️⃣ 🆚 QUERIES EFICIENTES VS INEFICIENTES](#2️⃣--queries-eficientes-vs-ineficientes)
  - [3️⃣ 📦 SELECT \*](#3️⃣--select-)
  - [4️⃣ 🎯 FILTRAR CORRECTAMENTE](#4️⃣--filtrar-correctamente)
  - [5️⃣ 🔎 WHERE](#5️⃣--where)
  - [6️⃣ 🔗 JOINs EFICIENTES](#6️⃣--joins-eficientes)
  - [7️⃣ ↕️ ORDER BY](#7️⃣-️-order-by)
  - [8️⃣ 📦 GROUP BY](#8️⃣--group-by)
  - [9️⃣ 🧩 SUBQUERIES](#9️⃣--subqueries)
  - [🔟 🔄 CORRELATED SUBQUERIES](#--correlated-subqueries)
  - [1️⃣1️⃣ 🚫 EVITAR CONSULTAS INNECESARIAS](#1️⃣1️⃣--evitar-consultas-innecesarias)
  - [1️⃣2️⃣ 🔥 EVITAR N+1 QUERIES](#1️⃣2️⃣--evitar-n1-queries)
  - [1️⃣3️⃣ 📇 INDEXES Y QUERIES](#1️⃣3️⃣--indexes-y-queries)
  - [1️⃣4️⃣ 🔄 QUERY OPTIMIZATION WORKFLOW](#1️⃣4️⃣--query-optimization-workflow)

## 1️⃣ ⚡ ¿QUÉ ES QUERY OPTIMIZATION?

**Query Optimization** es el proceso de mejorar una consulta para que utilice los recursos de la database de manera más eficiente.

La idea es obtener:

```text
Mismo resultado
      ↓
Menos trabajo
      ↓
Mejor performance
```

---

## 2️⃣ 🆚 QUERIES EFICIENTES VS INEFICIENTES

Una query puede devolver el resultado correcto y aun así ser ineficiente.

Por ejemplo:

```sql
SELECT *
FROM users;
```

puede obtener mucha más información de la necesaria.

Una query más específica:

```sql
SELECT id, name, email
FROM users;
```

solamente solicita las columnas necesarias.

---

## 3️⃣ 📦 SELECT *

`SELECT *` obtiene **todas las columnas** de una tabla.

```sql
SELECT *
FROM users;
```

No siempre es necesario obtener toda la información.

Si solamente necesitas:

```text
id
name
email
```

es preferible especificarlas:

```sql
SELECT id, name, email
FROM users;
```

Esto evita solicitar datos innecesarios.

---

## 4️⃣ 🎯 FILTRAR CORRECTAMENTE

Las queries deben obtener solamente los registros que realmente necesitas.

Por ejemplo:

```sql
SELECT id, name
FROM users
WHERE country = 'Mexico';
```

En lugar de obtener todos los usuarios y después filtrar los datos fuera de la database.

---

## 5️⃣ 🔎 WHERE

`WHERE` permite reducir las filas que participan en una consulta.

```sql
SELECT *
FROM users
WHERE age >= 18;
```

En lugar de:

```sql
SELECT *
FROM users;
```

y posteriormente procesar los registros innecesarios.

Los filtros adecuados pueden reducir considerablemente la cantidad de datos que debe procesar la database.

---

## 6️⃣ 🔗 JOINs EFICIENTES

Los `JOINs` permiten combinar información relacionada entre tablas.

Por ejemplo:

```sql
SELECT
    u.name,
    o.total
FROM users AS u
JOIN orders AS o
    ON u.id = o.user_id;
```

Es importante que los `JOINs` utilicen correctamente las relaciones entre las tablas.

Un `JOIN` mal planteado puede generar más registros de los necesarios y aumentar el trabajo de la consulta.

---

## 7️⃣ ↕️ ORDER BY

`ORDER BY` permite ordenar los resultados.

```sql
SELECT id, name
FROM users
ORDER BY name;
```

El ordenamiento puede requerir trabajo adicional, especialmente cuando se trabaja con grandes cantidades de datos.

Los índices también pueden ayudar en determinadas consultas con `ORDER BY`.

---

## 8️⃣ 📦 GROUP BY

`GROUP BY` agrupa registros para realizar operaciones sobre grupos.

Por ejemplo:

```sql
SELECT country, COUNT(*)
FROM users
GROUP BY country;
```

La database debe procesar los registros para formar los grupos.

Por eso es importante utilizar únicamente los datos y agrupaciones que realmente necesita la consulta.

## 9️⃣ 🧩 SUBQUERIES

Una **Subquery** es una query dentro de otra query.

Por ejemplo:

```sql
SELECT *
FROM users
WHERE id IN (
    SELECT user_id
    FROM orders
);
```

Las subqueries pueden ser útiles, pero dependiendo del caso pueden existir alternativas más eficientes.

Por eso deben evaluarse dentro del contexto de la consulta.

---

## 🔟 🔄 CORRELATED SUBQUERIES

Una **Correlated Subquery** depende de la fila de la query externa.

Conceptualmente:

```text
Outer Query
     ↓
Subquery
     ↓
depende de la fila externa
```

Esto puede provocar que la subquery se evalúe repetidamente para diferentes filas.

Por eso las correlated subqueries deben analizarse cuidadosamente cuando se trabaja con grandes cantidades de datos.

---

## 1️⃣1️⃣ 🚫 EVITAR CONSULTAS INNECESARIAS

No deberías realizar consultas que no sean necesarias.

Por ejemplo:

```text
❌ Obtener todos los usuarios
❌ Obtener todas sus columnas
❌ Procesar los datos
❌ Utilizar solamente 3 columnas
```

En su lugar:

```text
✅ Obtener únicamente los usuarios necesarios
✅ Obtener únicamente las columnas necesarias
```

La idea es:

```text
Request
   ↓
Database
   ↓
Solo datos necesarios
   ↓
Application
```

---

## 1️⃣2️⃣ 🔥 EVITAR N+1 QUERIES

El **N + 1 Query Problem** ocurre cuando una consulta inicial genera muchas consultas adicionales.

Por ejemplo:

```text
1 query
   ↓
obtener users
```

Después:

```text
N queries
   ↓
obtener orders de cada user
```

Si tienes 100 usuarios:

```text
1 + 100
= 101 queries
```

Esto puede ser muy ineficiente.

Una alternativa puede ser obtener la información relacionada mediante un `JOIN`:

```text
1 query
   ↓
JOIN
   ↓
users + orders
```

Por ejemplo:

```sql
SELECT
    u.id,
    u.name,
    o.id,
    o.total
FROM users AS u
JOIN orders AS o
    ON u.id = o.user_id;
```

---

## 1️⃣3️⃣ 📇 INDEXES Y QUERIES

Los **Indexes** pueden ayudar a que determinadas queries encuentren registros más rápidamente.

Por ejemplo:

```sql
SELECT *
FROM users
WHERE email = 'ana@mail.com';
```

Si `email` tiene un índice adecuado:

```text
Query
  ↓
Index
  ↓
Record
```

La database puede evitar revisar innecesariamente muchos registros.

Pero:

```text
Más indexes
≠
Más performance automáticamente
```

Los índices también tienen costes en espacio y en operaciones de escritura.

---

## 1️⃣4️⃣ 🔄 QUERY OPTIMIZATION WORKFLOW

No se trata de modificar queries al azar.

Un workflow conceptual sería:

```text
Query
  ↓
Identificar el problema
  ↓
Analizar la query
  ↓
Revisar filtros / JOINs / indexes
  ↓
Optimizar
  ↓
Comparar resultados
```

La idea principal:

> **No optimices a ciegas. Primero identifica dónde está el problema.**

