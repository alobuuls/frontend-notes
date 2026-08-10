# 📄 INDEXES

🔥 Los **Indexes** son uno de los temas más importantes relacionados con **database performance**.

Un índice es una estructura que ayuda a la database a **encontrar registros más rápidamente**, especialmente cuando realizas búsquedas sobre determinadas columnas.

---

# 📑 ÍNDICE

- [📄 INDEXES](#-indexes)
- [📑 ÍNDICE](#-índice)
  - [1️⃣ 🔎 ¿QUÉ ES UN INDEX?](#1️⃣--qué-es-un-index)
  - [2️⃣ ❓ ¿POR QUÉ EXISTEN LOS ÍNDICES?](#2️⃣--por-qué-existen-los-índices)
  - [3️⃣ ⚙️ CÓMO FUNCIONA UN INDEX](#3️⃣-️-cómo-funciona-un-index)
  - [4️⃣ 🔍 TABLE SCAN](#4️⃣--table-scan)
  - [5️⃣ 🔎 INDEX SCAN](#5️⃣--index-scan)
  - [6️⃣ 🎯 INDEX SEEK](#6️⃣--index-seek)
  - [7️⃣ 🔑 PRIMARY KEY INDEX](#7️⃣--primary-key-index)
  - [8️⃣ 🆔 UNIQUE INDEX](#8️⃣--unique-index)
  - [9️⃣ 📌 SINGLE-COLUMN INDEX](#9️⃣--single-column-index)
  - [🔟 🧩 COMPOSITE INDEX](#--composite-index)
  - [1️⃣1️⃣ 🎯 CÓMO ELEGIR COLUMNAS PARA INDEXAR](#1️⃣1️⃣--cómo-elegir-columnas-para-indexar)
  - [1️⃣2️⃣ 🚫 CUÁNDO NO CREAR UN INDEX](#1️⃣2️⃣--cuándo-no-crear-un-index)
  - [1️⃣3️⃣ 💰 COSTE DE LOS INDEXES](#1️⃣3️⃣--coste-de-los-indexes)
  - [1️⃣4️⃣ ✏️ INDEXES Y INSERT / UPDATE / DELETE](#1️⃣4️⃣-️-indexes-y-insert--update--delete)
  - [1️⃣5️⃣ ↕️ INDEXES Y ORDER BY](#1️⃣5️⃣-️-indexes-y-order-by)
  - [1️⃣6️⃣ 🔎 INDEXES Y WHERE](#1️⃣6️⃣--indexes-y-where)
  - [1️⃣7️⃣ 📊 INDEX SELECTIVITY](#1️⃣7️⃣--index-selectivity)
    - [📊 Conceptualmente](#-conceptualmente)
- [🧠 CONCEPTO PRINCIPAL](#-concepto-principal)
    - [❌ Sin Index](#-sin-index)
    - [✅ Con Index](#-con-index)

## 1️⃣ 🔎 ¿QUÉ ES UN INDEX?

Un **Index** es una estructura de datos asociada a una tabla que permite localizar registros de manera más eficiente.

Conceptualmente:

```text
Table
  │
  └── Index
        ↓
   localizar datos
        ↓
      Record
```

En lugar de revisar todos los registros, la database puede utilizar el índice para encontrar los registros relevantes.

---

## 2️⃣ ❓ ¿POR QUÉ EXISTEN LOS ÍNDICES?

Los índices existen principalmente para **acelerar determinadas operaciones de lectura**.

Por ejemplo:

```sql
SELECT *
FROM users
WHERE email = 'ana@mail.com';
```

Sin un índice sobre `email`, la database puede necesitar revisar muchos registros.

Con un índice:

```text
Query
  ↓
Index
  ↓
Registro
  ↓
Resultado
```

La búsqueda puede ser mucho más eficiente.

---

## 3️⃣ ⚙️ CÓMO FUNCIONA UN INDEX

Un índice mantiene información que permite localizar rápidamente los registros relacionados con determinados valores.

Conceptualmente:

```text
Index
 │
 ├── value A → Record
 ├── value B → Record
 └── value C → Record
```

La database puede utilizar esta estructura para localizar los registros sin tener que revisar toda la tabla.

---

## 4️⃣ 🔍 TABLE SCAN

Un **Table Scan** ocurre cuando la database revisa los registros de una tabla para encontrar los que necesita.

Conceptualmente:

```text
Table
 ↓
Record 1
 ↓
Record 2
 ↓
Record 3
 ↓
Record 4
 ↓
...
```

Puede resultar costoso cuando una tabla contiene muchos registros.

---

## 5️⃣ 🔎 INDEX SCAN

Un **Index Scan** utiliza un índice para recorrer sus entradas y encontrar los datos necesarios.

Conceptualmente:

```text
Query
 ↓
Index
 ↓
recorre entradas
 ↓
Records
```

---

## 6️⃣ 🎯 INDEX SEEK

Un **Index Seek** busca directamente en el índice la información que necesita.

Conceptualmente:

```text
Query
 ↓
Index
 ↓
valor buscado
 ↓
Record
```

La diferencia conceptual es:

```text
Table Scan
→ revisar la tabla

Index Scan
→ recorrer entradas del índice

Index Seek
→ buscar directamente en el índice
```

---

## 7️⃣ 🔑 PRIMARY KEY INDEX

Una **Primary Key** normalmente tiene un índice asociado.

Por ejemplo:

```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY
);
```

El índice permite realizar búsquedas eficientes sobre `id`.

```sql
SELECT *
FROM users
WHERE id = 10;
```

---

## 8️⃣ 🆔 UNIQUE INDEX

Una restricción `UNIQUE` puede estar respaldada por un índice único.

Por ejemplo:

```sql
email VARCHAR(255) UNIQUE
```

Esto permite garantizar la unicidad y, dependiendo del DBMS, proporciona una estructura indexada para esa columna.

---

## 9️⃣ 📌 SINGLE-COLUMN INDEX

Un **Single-Column Index** es un índice creado sobre una sola columna.

Por ejemplo:

```sql
CREATE INDEX idx_users_email
ON users(email);
```

El índice está asociado únicamente con:

```text
email
```

---

## 🔟 🧩 COMPOSITE INDEX

Un **Composite Index** es un índice creado utilizando varias columnas.

Por ejemplo:

```sql
CREATE INDEX idx_users_country_name
ON users(country, name);
```

El índice utiliza:

```text
country
   +
name
```

El orden de las columnas dentro del índice es importante.


## 1️⃣1️⃣ 🎯 CÓMO ELEGIR COLUMNAS PARA INDEXAR

No todas las columnas necesitan un índice.

Debes considerar principalmente las columnas que aparecen frecuentemente en operaciones como:

```text
WHERE
ORDER BY
```

Por ejemplo:

```sql
SELECT *
FROM users
WHERE email = 'ana@mail.com';
```

Un índice sobre:

```text
email
```

puede ser útil si este tipo de consulta es frecuente.

También debes considerar la **selectivity** de la columna.

---

## 1️⃣2️⃣ 🚫 CUÁNDO NO CREAR UN INDEX

No conviene crear índices indiscriminadamente.

Un índice puede no ser útil cuando:

```text
❌ La columna casi nunca se utiliza para búsquedas
❌ La tabla es muy pequeña
❌ El índice no aporta una mejora significativa
```

La decisión depende de cómo se consulta la base de datos.

---

## 1️⃣3️⃣ 💰 COSTE DE LOS INDEXES

Los índices tienen un coste.

Ocupan:

```text
💾 Espacio
```

y requieren mantenimiento cuando cambian los datos.

Por eso:

```text
Más índices
≠
Más performance automáticamente
```

---

## 1️⃣4️⃣ ✏️ INDEXES Y INSERT / UPDATE / DELETE

Los índices pueden acelerar determinadas lecturas, pero también pueden hacer más costosas las operaciones de escritura.

Cuando se inserta, actualiza o elimina información, los índices relacionados pueden necesitar ser actualizados.

Conceptualmente:

```text
INSERT / UPDATE / DELETE
          ↓
       Table
          ↓
       Indexes
          ↓
     Maintenance
```

Por eso demasiados índices pueden perjudicar el rendimiento de las escrituras.

---

## 1️⃣5️⃣ ↕️ INDEXES Y ORDER BY

Los índices también pueden ayudar en operaciones de ordenamiento.

Por ejemplo:

```sql
SELECT *
FROM users
ORDER BY name;
```

Un índice relacionado con `name` puede permitir que la database aproveche el orden existente en el índice.

---

## 1️⃣6️⃣ 🔎 INDEXES Y WHERE

Las columnas utilizadas frecuentemente en `WHERE` pueden ser buenas candidatas para índices.

Por ejemplo:

```sql
SELECT *
FROM users
WHERE email = 'ana@mail.com';
```

Con un índice:

```text
WHERE email
     ↓
   Index
     ↓
  Record
```

la database puede localizar los registros de manera más eficiente.

---

## 1️⃣7️⃣ 📊 INDEX SELECTIVITY

La **Index Selectivity** describe qué tan bien un índice puede distinguir entre diferentes valores.

Una columna con muchos valores diferentes suele tener mayor selectividad.

Por ejemplo:

```text
email
----------------
ana@mail.com
luis@mail.com
pedro@mail.com
sofia@mail.com
...
```

Tiene muchos valores distintos.

Mientras que:

```text
gender
----------------
Male
Female
Male
Female
Male
```

tiene pocos valores distintos.

### 📊 Conceptualmente

| Selectividad          | Concepto                                                               |
| --------------------- | ---------------------------------------------------------------------- |
| **Alta selectividad** | → muchos valores diferentes → puede ser un buen candidato para indexar |
| **Baja selectividad** | → pocos valores diferentes → el índice puede ser menos útil            |

---

# 🧠 CONCEPTO PRINCIPAL

### ❌ Sin Index

```text
Query
 ↓
Database
 ↓
Revisa muchos registros
 ↓
Resultado
```

### ✅ Con Index

```text
Query
 ↓
Index
 ↓
Registro
 ↓
Resultado
```

> **Más índices no significa automáticamente más performance.**

Los índices pueden **acelerar determinadas lecturas**, pero ocupan espacio y pueden hacer más costosas las operaciones de `INSERT`, `UPDATE` y `DELETE`.
