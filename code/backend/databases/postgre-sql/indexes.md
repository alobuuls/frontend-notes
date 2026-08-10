# 📄 PostgreSQL Indexes

Los **indexes** permiten a PostgreSQL encontrar datos de forma más eficiente, especialmente cuando trabajas con consultas frecuentes sobre determinadas columnas.

---

# 📑 Índice

- [📄 PostgreSQL Indexes](#-postgresql-indexes)
- [📑 Índice](#-índice)
  - [🧠 1️⃣ What is an Index?](#-1️⃣-what-is-an-index)
  - [🌳 2️⃣ B-tree Index](#-2️⃣-b-tree-index)
  - [#️⃣ 3️⃣ Hash Index](#️⃣-3️⃣-hash-index)
  - [🧩 4️⃣ Composite Index](#-4️⃣-composite-index)
  - [🆔 5️⃣ Unique Index](#-5️⃣-unique-index)
  - [🎯 6️⃣ Partial Index](#-6️⃣-partial-index)
  - [🧮 7️⃣ Expression Index](#-7️⃣-expression-index)
  - [🧩 8️⃣ Multicolumn Index](#-8️⃣-multicolumn-index)
  - [🔎 9️⃣ Index Only Scan](#-9️⃣-index-only-scan)
- [⚠️ 🔟 When NOT to use an Index](#️--when-not-to-use-an-index)
- [⚡ Performance](#-performance)

## 🧠 1️⃣ What is an Index?

Un **Index** es una estructura de datos que PostgreSQL mantiene para acelerar determinadas consultas sobre una tabla.

Conceptualmente:

```text
Table
  ↓
Index
  ↓
Efficient lookup
```

Sin un índice, PostgreSQL puede necesitar revisar muchos registros.

Con un índice adecuado, puede encontrar los registros de forma más eficiente.

---

## 🌳 2️⃣ B-tree Index

El **B-tree** es el tipo de índice más común y el que encontrarás con mayor frecuencia en PostgreSQL.

Conceptualmente:

```text
Table
  ↓
B-tree Index
  ↓
Efficient lookup
```

Es especialmente útil para operaciones como:

```text
=
>
<
>=
<=
```

y para determinadas consultas con:

```text
ORDER BY
```

---

## #️⃣ 3️⃣ Hash Index

Un **Hash Index** utiliza una estructura basada en hashing.

Está orientado principalmente a búsquedas de igualdad:

```text
=
```

Por ejemplo:

```sql
WHERE email = 'ana@mail.com'
```

---

## 🧩 4️⃣ Composite Index

Un **Composite Index** utiliza varias columnas.

Por ejemplo:

```text
(country, city)
```

Conceptualmente:

```text
Index
  ↓
country
  ↓
city
```

Es importante entender que **el orden de las columnas importa**.

Por ejemplo:

```text
(country, city)
```

no es equivalente a:

```text
(city, country)
```

El orden afecta qué consultas pueden aprovechar eficientemente el índice.

---

## 🆔 5️⃣ Unique Index

Un **Unique Index** garantiza que los valores indexados no se repitan.

Por ejemplo:

```text
email
-----
ana@mail.com
luis@mail.com
ana@mail.com ❌
```

Esto está relacionado con:

```sql
UNIQUE
```

Una `UNIQUE` constraint normalmente utiliza un índice único para hacer cumplir la unicidad.

---

## 🎯 6️⃣ Partial Index

Un **Partial Index** indexa únicamente un subconjunto de los registros.

Por ejemplo:

```text
WHERE active = true
```

Conceptualmente:

```text
Toda la tabla
     ↓
Solo subconjunto
     ↓
Index
```

Puede ser útil cuando solo necesitas indexar registros que cumplen una determinada condición.

---

## 🧮 7️⃣ Expression Index

Un **Expression Index** indexa el resultado de una expresión en lugar de una columna directamente.

Por ejemplo:

```text
LOWER(email)
```

En lugar de indexar simplemente:

```text
email
```

Esto permite que determinadas consultas que utilizan esa expresión puedan aprovechar el índice.

---

## 🧩 8️⃣ Multicolumn Index

Un **Multicolumn Index** utiliza varias columnas dentro del mismo índice.

Por ejemplo:

```text
(country, city)
```

Es conceptualmente equivalente a un índice compuesto.

Debes prestar especial atención al **orden de las columnas**, porque afecta cómo PostgreSQL puede utilizar el índice en las consultas.

---

## 🔎 9️⃣ Index Only Scan

Un **Index Only Scan** ocurre cuando PostgreSQL puede obtener la información necesaria directamente desde el índice sin tener que acceder a la tabla para cada registro.

Conceptualmente:

```text
Query
  ↓
Index
  ↓
Result
```

En lugar de:

```text
Query
  ↓
Index
  ↓
Table
  ↓
Result
```

Puede ser especialmente eficiente cuando el índice contiene toda la información necesaria para la consulta.

---

# ⚠️ 🔟 When NOT to use an Index

No todas las columnas necesitan un índice.

Un índice puede ser poco útil cuando:

| ❌ Situación                                   |   |
| --------------------------------------------- | - |
| La tabla es muy pequeña                       | ❌ |
| La columna tiene poca selectividad            | ❌ |
| Las consultas casi nunca utilizan esa columna | ❌ |

También debes considerar el coste de mantener los índices.

---

# ⚡ Performance

Los índices pueden proporcionar:

```text
Index
 ↓
Fast reads
```

Pero también tienen costes:

```text
Index
 ↓
Extra storage
 ↓
Extra work on INSERT / UPDATE / DELETE
```

Cada vez que los datos cambian, PostgreSQL puede necesitar actualizar los índices correspondientes.

Por eso:

> **Más índices no significa automáticamente más performance.**

Debes crear índices basándote en las consultas y necesidades reales de la aplicación.
