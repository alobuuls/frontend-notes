# 📄 GROUP BY AND HAVING

Aquí estudias cómo **agrupar resultados y filtrar esos grupos**.

---

# 📑 ÍNDICE — GROUP BY AND HAVING

- [📄 GROUP BY AND HAVING](#-group-by-and-having)
- [📑 ÍNDICE — GROUP BY AND HAVING](#-índice--group-by-and-having)
- [📦 GROUP BY](#-group-by)
  - [1️⃣ 📝 ¿QUÉ ES `GROUP BY`?](#1️⃣--qué-es-group-by)
  - [2️⃣ 🌎 AGRUPAR POR COUNTRY](#2️⃣--agrupar-por-country)
- [📊 GROUP BY + AGGREGATIONS](#-group-by--aggregations)
  - [3️⃣ 🔢 AGRUPAR Y AGREGAR](#3️⃣--agrupar-y-agregar)
- [🚦 HAVING](#-having)
  - [4️⃣ 📝 ¿QUÉ ES `HAVING`?](#4️⃣--qué-es-having)
- [🆚 WHERE VS HAVING](#-where-vs-having)
  - [5️⃣ 🔎 DIFERENCIA FUNDAMENTAL](#5️⃣--diferencia-fundamental)
    - [`WHERE`](#where)
    - [`HAVING`](#having)
  - [6️⃣ 🧠 VISUALIZACIÓN](#6️⃣--visualización)
    - [🎯 IDEA CLAVE](#-idea-clave)


# 📦 GROUP BY

## 1️⃣ 📝 ¿QUÉ ES `GROUP BY`?

`GROUP BY` permite agrupar filas que tienen el mismo valor en una o más columnas.

```sql
SELECT country, COUNT(*)
FROM users
GROUP BY country;
```

En lugar de trabajar con cada usuario individualmente, agrupamos los usuarios según su `country`.

---

## 2️⃣ 🌎 AGRUPAR POR COUNTRY

Conceptualmente:

```text
Users
  ↓
GROUP BY country
  ↓
Mexico     → 20
Colombia   → 15
Spain      → 10
```

Por ejemplo, si tenemos:

```text
id | name  | country
---|-------|---------
1  | Ana   | Mexico
2  | Luis  | Mexico
3  | Pedro | Colombia
4  | Maria | Spain
5  | Juan  | Mexico
```

Podemos agrupar:

```text
Mexico
├── Ana
├── Luis
└── Juan

Colombia
└── Pedro

Spain
└── Maria
```

Y utilizar una función de agregación:

```sql
SELECT country, COUNT(*)
FROM users
GROUP BY country;
```

Resultado conceptual:

```text
country   | count
----------|------
Mexico    | 3
Colombia  | 1
Spain     | 1
```

---

# 📊 GROUP BY + AGGREGATIONS

## 3️⃣ 🔢 AGRUPAR Y AGREGAR

`GROUP BY` suele utilizarse junto con funciones de agregación como:

```text
COUNT
SUM
AVG
MIN
MAX
```

Por ejemplo:

```sql
SELECT country, COUNT(*)
FROM users
GROUP BY country;
```

Aquí:

```text
GROUP BY
   ↓
crea los grupos

COUNT(*)
   ↓
calcula un valor para cada grupo
```

---

# 🚦 HAVING

## 4️⃣ 📝 ¿QUÉ ES `HAVING`?

`HAVING` permite **filtrar los grupos creados por** **`GROUP BY`**.

Por ejemplo:

```sql
SELECT country, COUNT(*)
FROM users
GROUP BY country
HAVING COUNT(*) > 10;
```

Conceptualmente:

```text
Users
  ↓
GROUP BY country
  ↓
Mexico     → 20
Colombia   → 15
Spain      → 10
  ↓
HAVING COUNT(*) > 10
  ↓
Mexico     → 20
Colombia   → 15
```

El grupo de `Spain` queda fuera porque no cumple la condición.

---

# 🆚 WHERE VS HAVING

## 5️⃣ 🔎 DIFERENCIA FUNDAMENTAL

| `WHERE`                | `HAVING`                         |
| ---------------------- | -------------------------------- |
| Filtra filas           | Filtra grupos                    |
| Registros individuales | Grupos resultantes de `GROUP BY` |
| Antes de la agrupación | Después de la agrupación         |

### `WHERE`

```text
WHERE
  ↓
filtra filas
```

Se utiliza para filtrar **registros individuales** antes de realizar la agrupación.

### `HAVING`

```text
HAVING
  ↓
filtra grupos
```

Se utiliza para filtrar **los grupos resultantes de** **`GROUP BY`**.

---

## 6️⃣ 🧠 VISUALIZACIÓN

```text
Filas
  ↓
WHERE
  ↓
Filas filtradas
  ↓
GROUP BY
  ↓
Grupos
  ↓
HAVING
  ↓
Grupos filtrados
```

Por ejemplo:

```sql
SELECT country, COUNT(*)
FROM users
WHERE age >= 18
GROUP BY country
HAVING COUNT(*) > 10;
```

Conceptualmente:

```text
Users
  ↓
WHERE age >= 18
  ↓
Filtrar filas
  ↓
GROUP BY country
  ↓
Crear grupos
  ↓
HAVING COUNT(*) > 10
  ↓
Filtrar grupos
```

---

### 🎯 IDEA CLAVE

> **`WHERE`** filtra filas, mientras que **`GROUP BY`** crea grupos y **`HAVING`** filtra esos grupos.
