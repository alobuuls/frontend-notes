# 📄 JOINs

Aquí estudias cómo **combinar información de diferentes tablas**.

---

## 📑 ÍNDICE

- [📄 JOINs](#-joins)
  - [📑 ÍNDICE](#-índice)
- [🔗 JOIN](#-join)
  - [1️⃣ 📝 ¿QUÉ ES UN `JOIN`?](#1️⃣--qué-es-un-join)
- [🔵 INNER JOIN](#-inner-join)
  - [2️⃣ INNER JOIN](#2️⃣-inner-join)
- [🟢 LEFT JOIN](#-left-join)
  - [3️⃣ LEFT JOIN](#3️⃣-left-join)
- [🟡 RIGHT JOIN](#-right-join)
  - [4️⃣ RIGHT JOIN](#4️⃣-right-join)
- [🟣 FULL OUTER JOIN](#-full-outer-join)
  - [5️⃣ FULL OUTER JOIN](#5️⃣-full-outer-join)
- [🔗 ON](#-on)
  - [6️⃣ 🧩 ¿QUÉ ES `ON`?](#6️⃣--qué-es-on)
- [🏷️ TABLE ALIASES](#️-table-aliases)
  - [7️⃣ 📝 ALIAS DE TABLAS](#7️⃣--alias-de-tablas)
- [🧠 VISUALIZACIÓN DE JOINs](#-visualización-de-joins)
  - [8️⃣ 📊 ¿QUÉ DEVUELVE CADA JOIN?](#8️⃣--qué-devuelve-cada-join)
    - [🎯 IDEA CLAVE](#-idea-clave)


# 🔗 JOIN

## 1️⃣ 📝 ¿QUÉ ES UN `JOIN`?

Un `JOIN` permite combinar filas de diferentes tablas utilizando una relación entre ellas.

Por ejemplo:

```text
users
   │
   └── orders
```

Podemos tener:

```text
users
---------
id
name
```

y:

```text
orders
---------
id
user_id
total
```

La relación está en:

```text
users.id
    ↕
orders.user_id
```

---

# 🔵 INNER JOIN

## 2️⃣ INNER JOIN

`INNER JOIN` devuelve únicamente los registros que **tienen coincidencia en ambas tablas**.

Conceptualmente:

```text
A ∩ B
```

Es decir:

```text
Users
   │
   │ coincidencia
   ▼
Orders
```

Si un usuario no tiene una orden relacionada, ese usuario no aparece en el resultado del `INNER JOIN`.

---

# 🟢 LEFT JOIN

## 3️⃣ LEFT JOIN

`LEFT JOIN` devuelve **todos los registros de la tabla izquierda** y las coincidencias de la tabla derecha.

Conceptualmente:

```text
Todo A + coincidencias B
```

Por ejemplo:

```text
users
   │
   └── LEFT JOIN
          │
          ▼
       orders
```

Todos los usuarios aparecen, incluso aquellos que no tienen órdenes.

Cuando no existe una coincidencia en la tabla derecha, los valores correspondientes serán `NULL`.

---

# 🟡 RIGHT JOIN

## 4️⃣ RIGHT JOIN

`RIGHT JOIN` devuelve **todos los registros de la tabla derecha** y las coincidencias de la tabla izquierda.

Conceptualmente:

```text
Todo B + coincidencias A
```

Por ejemplo:

```text
users
   │
   └── RIGHT JOIN
          │
          ▼
       orders
```

Todas las órdenes aparecen, incluso si no existe una coincidencia correspondiente en la tabla izquierda.

---

# 🟣 FULL OUTER JOIN

## 5️⃣ FULL OUTER JOIN

`FULL OUTER JOIN` devuelve:

* Todos los registros de la tabla izquierda.
* Todos los registros de la tabla derecha.
* Las coincidencias entre ambas.

Conceptualmente:

```text
Todo A + Todo B
```

Los registros que no tengan coincidencia tendrán `NULL` en las columnas del otro lado.

---

# 🔗 ON

## 6️⃣ 🧩 ¿QUÉ ES `ON`?

`ON` define **la condición que relaciona las tablas**.

Por ejemplo:

```sql
JOIN orders
ON users.id = orders.user_id;
```

Aquí:

```text
users.id
   =
orders.user_id
```

La condición indica qué registros deben considerarse relacionados.

---

# 🏷️ TABLE ALIASES

## 7️⃣ 📝 ALIAS DE TABLAS

Puedes asignar alias a las tablas para escribir consultas más cortas y claras.

```sql
FROM users AS u
JOIN orders AS o
ON u.id = o.user_id;
```

Aquí:

```text
users  → u
orders → o
```

Por lo tanto:

```text
u.id
   =
o.user_id
```

También puedes utilizar los alias para indicar de qué tabla viene una columna:

```sql
SELECT
    u.name,
    o.total
FROM users AS u
JOIN orders AS o
ON u.id = o.user_id;
```

---

# 🧠 VISUALIZACIÓN DE JOINs

## 8️⃣ 📊 ¿QUÉ DEVUELVE CADA JOIN?

| JOIN              | Resultado                |
| ----------------- | ------------------------ |
| `INNER JOIN`      | `A ∩ B`                  |
| `LEFT JOIN`       | Todo A + coincidencias B |
| `RIGHT JOIN`      | Todo B + coincidencias A |
| `FULL OUTER JOIN` | Todo A + Todo B          |

Visualmente:

```text
        A           B
    ┌───────┐   ┌───────┐
    │       │   │       │
    │   ┌───┼───┼───┐   │
    │   │   │   │   │   │
    └───┼───┘   └───┼───┘
        │           │
```

---

### 🎯 IDEA CLAVE

> **`JOIN`** permite combinar información de diferentes tablas. El tipo de **`JOIN`** determina qué registros se conservan y **`ON`** define cómo se relacionan las tablas.
