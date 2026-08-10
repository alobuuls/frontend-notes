# 📄 UPDATE

Aquí estudias cómo **modificar registros existentes** dentro de una tabla.

---

# 📚 ÍNDICE — UPDATE

- [📄 UPDATE](#-update)
- [📚 ÍNDICE — UPDATE](#-índice--update)
  - [✏️ `UPDATE`](#️-update)
    - [1️⃣ 📝 ¿QUÉ ES `UPDATE`?](#1️⃣--qué-es-update)
    - [2️⃣ 🔧 `SET`](#2️⃣--set)
    - [3️⃣ 🎯 `WHERE`](#3️⃣--where)
  - [📌 ACTUALIZAR UNA COLUMNA](#-actualizar-una-columna)
    - [4️⃣ 1️⃣ UNA COLUMNA](#4️⃣-1️⃣-una-columna)
  - [📋 ACTUALIZAR MÚLTIPLES COLUMNAS](#-actualizar-múltiples-columnas)
    - [5️⃣ ✏️ VARIAS COLUMNAS](#5️⃣-️-varias-columnas)
  - [👥 ACTUALIZAR MÚLTIPLES REGISTROS](#-actualizar-múltiples-registros)
    - [6️⃣ 🔄 VARIOS REGISTROS](#6️⃣--varios-registros)
  - [⚠️ `UPDATE` SIN `WHERE`](#️-update-sin-where)
    - [7️⃣ 🚨 MUY IMPORTANTE](#7️⃣--muy-importante)
    - [🎯 IDEA CLAVE](#-idea-clave)

## ✏️ `UPDATE`

### 1️⃣ 📝 ¿QUÉ ES `UPDATE`?

`UPDATE` se utiliza para modificar datos que ya existen en una tabla.

```sql
UPDATE users
SET name = 'Alo'
WHERE id = 1;
```

Conceptualmente:

```text
UPDATE
  ↓
tabla
  ↓
SET → qué modificar
  ↓
WHERE → qué registros modificar
```

### 2️⃣ 🔧 `SET`

`SET` indica **qué columna se va a modificar y cuál será su nuevo valor**.

```sql
UPDATE users
SET name = 'Alo'
WHERE id = 1;
```

Aquí:

```text
name
 ↓
'Alo'
```

El valor anterior de `name` será reemplazado por `'Alo'`.

### 3️⃣ 🎯 `WHERE`

`WHERE` indica **qué registros serán modificados**.

```sql
UPDATE users
SET name = 'Alo'
WHERE id = 1;
```

La condición:

```text
id = 1
```

hace que solamente se actualice el registro cuyo `id` sea `1`.

---

## 📌 ACTUALIZAR UNA COLUMNA

### 4️⃣ 1️⃣ UNA COLUMNA

Puedes modificar una sola columna:

```sql
UPDATE users
SET name = 'Alo'
WHERE id = 1;
```

| id | name |
| -: | ---- |
|  1 | Ana  |

Después:

| id | name |
| -: | ---- |
|  1 | Alo  |

---

## 📋 ACTUALIZAR MÚLTIPLES COLUMNAS

### 5️⃣ ✏️ VARIAS COLUMNAS

Puedes modificar varias columnas dentro del mismo `UPDATE`:

```sql
UPDATE users
SET
    name = 'Alo',
    email = 'alo@mail.com'
WHERE id = 1;
```

Aquí se modifican:

```text
name
email
```

del registro con `id = 1`.

---

## 👥 ACTUALIZAR MÚLTIPLES REGISTROS

### 6️⃣ 🔄 VARIOS REGISTROS

Un `UPDATE` puede modificar más de una fila si la condición de `WHERE` coincide con varios registros.

Por ejemplo:

```sql
UPDATE users
SET name = 'Unknown'
WHERE name IS NULL;
```

Si existen varios usuarios cuyo `name` es `NULL`, todos ellos serán modificados.

Conceptualmente:

```text
WHERE
  ↓
encuentra varios registros
  ↓
SET
  ↓
modifica todos los encontrados
```

---

## ⚠️ `UPDATE` SIN `WHERE`

### 7️⃣ 🚨 MUY IMPORTANTE

Si haces:

```sql
UPDATE users
SET name = 'Alo';
```

**sin `WHERE`**, no estás indicando qué registros modificar.

Por lo tanto, el `UPDATE` se aplica a **todas las filas de la tabla**.

**Antes:**

| id | name  |
| -: | ----- |
|  1 | Ana   |
|  2 | Luis  |
|  3 | Pedro |

**Después:**

| id | name |
| -: | ---- |
|  1 | Alo  |
|  2 | Alo  |
|  3 | Alo  |

Por eso debes tener mucho cuidado con:

```sql
UPDATE users
SET name = 'Alo';
```

frente a:

```sql
UPDATE users
SET name = 'Alo'
WHERE id = 1;
```

La diferencia fundamental es:

| `UPDATE`        | Resultado             |
| --------------- | --------------------- |
| **CON `WHERE`** | Registros específicos |
| **SIN `WHERE`** | Todos los registros   |

### 🎯 IDEA CLAVE

> **`UPDATE`** modifica registros existentes. **`SET`** indica qué cambiar y **`WHERE`** determina qué registros serán afectados. Sin **`WHERE`**, todos los registros de la tabla pueden ser modificados.
