# 📄 EXECUTION PLANS

🔥 Aquí aprendes a **investigar por qué una query puede ser lenta**.

La database puede mostrarte cómo planea ejecutar una consulta mediante un **Execution Plan**.

---

## 📑 ÍNDICE 

- [📄 EXECUTION PLANS](#-execution-plans)
  - [📑 ÍNDICE](#-índice)
  - [1️⃣ 🧠 ¿QUÉ ES UN EXECUTION PLAN?](#1️⃣--qué-es-un-execution-plan)
  - [2️⃣ 🔎 ¿POR QUÉ ANALIZAR UNA QUERY?](#2️⃣--por-qué-analizar-una-query)
  - [3️⃣ 📋 EXPLAIN](#3️⃣--explain)
  - [4️⃣ 🔬 EXPLAIN ANALYZE](#4️⃣--explain-analyze)
  - [5️⃣ 💰 QUERY COST](#5️⃣--query-cost)
  - [6️⃣ 🔍 SEQUENTIAL SCAN](#6️⃣--sequential-scan)
  - [7️⃣ 📇 INDEX SCAN](#7️⃣--index-scan)
  - [8️⃣ 🎯 INDEX SEEK](#8️⃣--index-seek)
  - [9️⃣ 🔗 JOIN STRATEGIES](#9️⃣--join-strategies)
- [🔟 🔄 NESTED LOOP](#--nested-loop)
- [1️⃣1️⃣ #️⃣ HASH JOIN](#1️⃣1️⃣-️⃣-hash-join)
- [1️⃣2️⃣ 🔀 MERGE JOIN](#1️⃣2️⃣--merge-join)
- [1️⃣3️⃣ 📊 ESTIMATED VS ACTUAL COST](#1️⃣3️⃣--estimated-vs-actual-cost)
- [1️⃣4️⃣ 🔢 ROWS](#1️⃣4️⃣--rows)
- [1️⃣5️⃣ 🧠 QUERY PLANNING](#1️⃣5️⃣--query-planning)
- [🔗 INDEXES + QUERY OPTIMIZATION](#-indexes--query-optimization)
    - [🔄 FLUJO COMPLETO](#-flujo-completo)

## 1️⃣ 🧠 ¿QUÉ ES UN EXECUTION PLAN?

Un **Execution Plan** es el plan que utiliza la database para ejecutar una query.

```text
SQL Query
   ↓
Database
   ↓
Execution Plan
   ↓
¿Cómo se ejecutará?
```

El plan muestra las operaciones que la database considera necesarias para obtener el resultado.

---

## 2️⃣ 🔎 ¿POR QUÉ ANALIZAR UNA QUERY?

Una query puede funcionar correctamente y aun así tener un coste elevado.

Analizar su Execution Plan permite identificar posibles problemas como:

```text
⚠️ Revisar demasiados registros
⚠️ Sequential Scans
⚠️ JOINs costosos
⚠️ Falta de un Index
⚠️ Estimaciones incorrectas
```

El objetivo es entender **qué está haciendo realmente la database**.

---

## 3️⃣ 📋 EXPLAIN

`EXPLAIN` permite mostrar el plan de ejecución de una query.

```sql
EXPLAIN
SELECT *
FROM users
WHERE email = 'ana@mail.com';
```

Conceptualmente:

```text
Query
 ↓
EXPLAIN
 ↓
Execution Plan
```

No ejecuta necesariamente la consulta de la misma manera que `EXPLAIN ANALYZE`; muestra el plan que la database considera utilizar.

---

## 4️⃣ 🔬 EXPLAIN ANALYZE

`EXPLAIN ANALYZE` permite analizar la ejecución real de la query.

```sql
EXPLAIN ANALYZE
SELECT *
FROM users
WHERE email = 'ana@mail.com';
```

Conceptualmente:

```text
Query
 ↓
EXPLAIN ANALYZE
 ↓
Execution Plan
 ↓
Ejecución real
 ↓
Resultados de ejecución
```

Esto permite comparar lo que la database **estimaba** con lo que **ocurrió realmente**.

---

## 5️⃣ 💰 QUERY COST

El **Query Cost** representa una estimación del coste que la database asigna a las operaciones necesarias para ejecutar la consulta.

```text
Query
 ↓
Execution Plan
 ↓
Cost
 ↓
Estimación del trabajo necesario
```

El significado exacto del coste depende del DBMS.

---

## 6️⃣ 🔍 SEQUENTIAL SCAN

Un **Sequential Scan** ocurre cuando la database recorre secuencialmente los registros de una tabla.

```text
Table
 ↓
Row 1
 ↓
Row 2
 ↓
Row 3
 ↓
Row 4
 ↓
...
```

Puede ser adecuado en algunos casos, pero puede resultar costoso cuando hay muchos registros y la consulta necesita revisar una gran parte de la tabla.

---

## 7️⃣ 📇 INDEX SCAN

Un **Index Scan** utiliza un índice para encontrar información.

```text
Query
 ↓
Index
 ↓
Scan
 ↓
Records
```

La database utiliza la estructura del índice para localizar los datos.

---

## 8️⃣ 🎯 INDEX SEEK

Un **Index Seek** busca directamente en el índice utilizando un valor o condición.

```text
Query
 ↓
Index
 ↓
Valor buscado
 ↓
Record
```

La terminología y disponibilidad exacta puede variar según el DBMS.

---

## 9️⃣ 🔗 JOIN STRATEGIES

Cuando una query utiliza `JOIN`, la database necesita decidir **cómo combinar las tablas**.

Entre las estrategias principales están:

| JOIN Strategy |
| ------------- |
| `Nested Loop` |
| `Hash Join`   |
| `Merge Join`  |

La database puede elegir diferentes estrategias dependiendo de los datos y del Execution Plan.

# 🔟 🔄 NESTED LOOP

Un **Nested Loop** combina registros utilizando un proceso de iteración entre las tablas.

Conceptualmente:

```text
Table A
   ↓
Record
   ↓
buscar coincidencias
   ↓
Table B
```

Puede ser eficiente cuando una de las entradas es pequeña o cuando existe un índice adecuado para encontrar las coincidencias.

---

# 1️⃣1️⃣ #️⃣ HASH JOIN

Un **Hash Join** utiliza una estructura hash para encontrar coincidencias entre las tablas.

Conceptualmente:

```text
Table
 ↓
Hash
 ↓
buscar coincidencias
 ↓
JOIN
```

Puede ser útil para determinados `JOINs`, especialmente cuando no existe un índice adecuado para realizar la combinación de otra manera.

---

# 1️⃣2️⃣ 🔀 MERGE JOIN

Un **Merge Join** combina dos conjuntos de datos ordenados.

Conceptualmente:

```text
Table A
 ↓
Ordenada
      ↘
       JOIN
      ↗
Table B
 ↓
Ordenada
```

La database compara los valores ordenados para encontrar coincidencias.

---

# 1️⃣3️⃣ 📊 ESTIMATED VS ACTUAL COST

El Execution Plan puede mostrar información **estimada** y, mediante herramientas como `EXPLAIN ANALYZE`, información de la ejecución **real**.

Conceptualmente:

| Tipo          | Significado                 |
| ------------- | --------------------------- |
| **Estimated** | Lo que la database esperaba |
| **Actual**    | Lo que realmente ocurrió    |

Una diferencia importante entre ambos puede indicar que las estimaciones de la database no representan correctamente la realidad de los datos.

---

# 1️⃣4️⃣ 🔢 ROWS

El Execution Plan también puede mostrar información relacionada con la cantidad de filas.

Conceptualmente:

```text
Estimated Rows
      ↓
Filas que la database esperaba

Actual Rows
      ↓
Filas que realmente procesó
```

Compararlas ayuda a detectar diferencias entre las estimaciones y la ejecución real.

---

# 1️⃣5️⃣ 🧠 QUERY PLANNING

Antes de ejecutar una query, la database analiza diferentes posibilidades y selecciona un plan de ejecución.

Conceptualmente:

```text
SQL Query
   ↓
Query Planning
   ↓
Execution Plan
   ↓
Execute
```

La database puede decidir:

```text
Sequential Scan
        o
Index Scan
        o
Nested Loop
        o
Hash Join
        o
Merge Join
```

dependiendo de la consulta y de las características de los datos.

---

# 🔗 INDEXES + QUERY OPTIMIZATION

Este documento conecta directamente los temas anteriores:

```text
Indexes
   │
   ▼
Query Optimization
   │
   ▼
Execution Plans
   │
   ├── Sequential Scan
   ├── Index Scan
   ├── Index Seek
   └── Join Strategies
```

### 🔄 FLUJO COMPLETO

```text
SQL Query
   ↓
EXPLAIN
   ↓
Execution Plan
   ↓
Detectar problemas
   ↓
Analizar Index / JOIN / Scan
   ↓
Optimizar
   ↓
EXPLAIN ANALYZE
   ↓
Comprobar la ejecución
```

