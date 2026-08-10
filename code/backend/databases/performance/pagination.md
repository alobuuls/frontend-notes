# 📄 PAGINATION

Aquí estudias cómo **limitar la cantidad de registros que devuelve una consulta**, especialmente cuando trabajas con grandes cantidades de datos.

---

## 📑 ÍNDICE

- [📄 PAGINATION](#-pagination)
  - [📑 ÍNDICE](#-índice)
  - [1️⃣ 📄 ¿QUÉ ES PAGINATION?](#1️⃣--qué-es-pagination)
  - [2️⃣ 🎯 ¿POR QUÉ NECESITAMOS PAGINATION?](#2️⃣--por-qué-necesitamos-pagination)
    - [❌ Sin pagination](#-sin-pagination)
    - [✅ Con pagination](#-con-pagination)
  - [3️⃣ 🔢 LIMIT](#3️⃣--limit)
  - [4️⃣ ⏭️ OFFSET](#4️⃣-️-offset)
  - [5️⃣ 📑 PAGE-BASED PAGINATION](#5️⃣--page-based-pagination)
  - [6️⃣ ⏭️ OFFSET PAGINATION](#6️⃣-️-offset-pagination)
  - [7️⃣ 🎯 CURSOR PAGINATION](#7️⃣--cursor-pagination)
  - [8️⃣ 🔑 KEYSET PAGINATION](#8️⃣--keyset-pagination)
  - [9️⃣ 🆚 CURSOR VS OFFSET](#9️⃣--cursor-vs-offset)
    - [OFFSET](#offset)
    - [CURSOR / KEYSET](#cursor--keyset)
  - [🔟 📐 ORDENAMIENTO ESTABLE](#--ordenamiento-estable)
  - [1️⃣1️⃣ 📇 PAGINATION + INDEXES](#1️⃣1️⃣--pagination--indexes)
  - [1️⃣2️⃣ 🌐 PAGINATION EN APIs](#1️⃣2️⃣--pagination-en-apis)
  - [🧠 OFFSET VS CURSOR / KEYSET](#-offset-vs-cursor--keyset)

## 1️⃣ 📄 ¿QUÉ ES PAGINATION?

**Pagination** es la técnica de dividir un conjunto grande de resultados en partes más pequeñas.

```text
10,000,000 users
       ↓
Pagination
       ↓
20 users
```

En una API:

```http
GET /users?page=1&limit=20
```

Así el frontend recibe solamente una parte de los registros.

---

## 2️⃣ 🎯 ¿POR QUÉ NECESITAMOS PAGINATION?

### ❌ Sin pagination

```text
Database
   ↓
10,000,000 records
   ↓
API
   ↓
Frontend
```

❌ Esto puede generar respuestas demasiado grandes y aumentar el trabajo de la database, backend y frontend.

### ✅ Con pagination

```text
Database
   ↓
10,000,000 records
   ↓
Pagination
   ↓
20 records
   ↓
API
   ↓
Frontend
```

La idea es **no devolver todos los registros de una sola vez**.

---

## 3️⃣ 🔢 LIMIT

`LIMIT` indica la cantidad máxima de registros que queremos obtener.

```sql
SELECT *
FROM users
LIMIT 20;
```

Conceptualmente:

```text
LIMIT 20
   ↓
Máximo 20 registros
```

---

## 4️⃣ ⏭️ OFFSET

`OFFSET` indica cuántos registros se deben saltar antes de comenzar a devolver resultados.

```sql
SELECT *
FROM users
LIMIT 20 OFFSET 40;
```

Conceptualmente:

```text
Records
   ↓
Saltar 40
   ↓
Obtener 20
```

Por ejemplo:

| OFFSET | Resultado            |
| -----: | -------------------- |
|    `0` | primeros registros   |
|   `20` | siguientes registros |
|   `40` | siguientes registros |

---

## 5️⃣ 📑 PAGE-BASED PAGINATION

La **Page-based Pagination** representa los resultados mediante páginas.

Por ejemplo:

```http
GET /users?page=1&limit=20
```

```http
GET /users?page=2&limit=20
```

```http
GET /users?page=3&limit=20
```

Conceptualmente:

```text
Page 1 → records 1–20
Page 2 → records 21–40
Page 3 → records 41–60
```

---

## 6️⃣ ⏭️ OFFSET PAGINATION

La **Offset Pagination** utiliza `LIMIT` + `OFFSET`.

Por ejemplo:

```sql
SELECT *
FROM users
ORDER BY id
LIMIT 20 OFFSET 40;
```

Conceptualmente:

```text
OFFSET
   ↓
Saltar registros
   ↓
LIMIT
   ↓
Devolver registros
```

Una API podría representar esto como:

```http
GET /users?limit=20&offset=40
```
## 7️⃣ 🎯 CURSOR PAGINATION

La **Cursor Pagination** utiliza un valor que representa la posición actual dentro del conjunto de resultados.

Por ejemplo:

```http
GET /users?limit=20&cursor=abc123
```

La respuesta puede proporcionar otro cursor:

```json
{
  "data": [],
  "nextCursor": "xyz789"
}
```

Conceptualmente:

```text
First Request
     ↓
20 records
     ↓
nextCursor
     ↓
Next Request
     ↓
20 records
```

En lugar de indicar directamente cuántos registros saltar, se continúa desde una posición determinada.

---

## 8️⃣ 🔑 KEYSET PAGINATION

La **Keyset Pagination** utiliza una columna ordenada como punto de referencia para obtener la siguiente página.

Por ejemplo:

```sql
SELECT *
FROM users
WHERE id > 1000
ORDER BY id
LIMIT 20;
```

Conceptualmente:

```text
Last ID
   ↓
id > 1000
   ↓
ORDER BY id
   ↓
LIMIT 20
```

La siguiente consulta puede continuar desde el último `id` obtenido.

---

## 9️⃣ 🆚 CURSOR VS OFFSET

### OFFSET

```text
OFFSET
   ↓
Saltar N registros
   ↓
LIMIT
```

Es sencillo de implementar y resulta útil en muchos casos.

Pero cuando el `OFFSET` es muy grande, puede tener implicaciones de performance porque la database puede necesitar recorrer o descartar muchos registros antes de llegar a la posición solicitada.

### CURSOR / KEYSET

```text
Cursor / Last Key
        ↓
Buscar desde esa posición
        ↓
LIMIT
```

Puede ser más adecuado para datasets grandes y paginación continua.

---

## 🔟 📐 ORDENAMIENTO ESTABLE

La pagination debe utilizar un **ordenamiento estable**.

Por ejemplo:

```sql
SELECT *
FROM users
ORDER BY id
LIMIT 20;
```

El orden definido permite determinar de manera consistente qué registros pertenecen a cada página.

Sin un ordenamiento adecuado, los resultados pueden cambiar entre diferentes consultas.

---

## 1️⃣1️⃣ 📇 PAGINATION + INDEXES

Los índices pueden ser especialmente importantes para pagination.

Por ejemplo:

```sql
SELECT *
FROM users
WHERE id > 1000
ORDER BY id
LIMIT 20;
```

Un índice adecuado sobre `id` puede ayudar a localizar los registros necesarios de manera eficiente.

Conceptualmente:

```text
Pagination
     ↓
WHERE / ORDER BY
     ↓
Index
     ↓
Records
```

Por eso pagination e indexes están directamente relacionados.

---

## 1️⃣2️⃣ 🌐 PAGINATION EN APIs

Una API puede exponer diferentes mecanismos de pagination.

| Tipo           | Ejemplo                             |
| -------------- | ----------------------------------- |
| **Page-based** | `GET /users?page=2&limit=20`        |
| **Offset**     | `GET /users?offset=40&limit=20`     |
| **Cursor**     | `GET /users?cursor=abc123&limit=20` |

El backend utiliza estos parámetros para determinar qué registros debe obtener de la database.

---

## 🧠 OFFSET VS CURSOR / KEYSET

Esta es una de las partes más importantes del documento:

```text
OFFSET PAGINATION
        │
        ▼
Saltar registros
        │
        ▼
LIMIT
```

vs.

```text
CURSOR / KEYSET PAGINATION
        │
        ▼
Punto de referencia
        │
        ▼
Buscar desde esa posición
        │
        ▼
LIMIT
```

La elección depende del caso de uso, pero cuando trabajas con **datasets muy grandes**, debes prestar especial atención a las implicaciones de performance de `OFFSET` frente a `CURSOR / KEYSET`.
