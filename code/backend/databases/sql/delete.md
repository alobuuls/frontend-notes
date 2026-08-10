# 📄 DELETE

Aquí estudias cómo **eliminar registros** de una tabla.

---

## 🗑️ `DELETE`

## 📚 ÍNDICE 

- [� DELETE](#-delete)
  - [🗑️ `DELETE`](#️-delete)
  - [📚 ÍNDICE](#-índice)
    - [1️⃣ 📝 ¿QUÉ ES `DELETE`?](#1️⃣--qué-es-delete)
    - [2️⃣ 🗃️ `FROM`](#2️⃣-️-from)
    - [3️⃣ 🎯 `WHERE`](#3️⃣--where)
  - [👤 ELIMINAR UN REGISTRO](#-eliminar-un-registro)
    - [4️⃣ 1️⃣ UN REGISTRO](#4️⃣-1️⃣-un-registro)
  - [👥 ELIMINAR MÚLTIPLES REGISTROS](#-eliminar-múltiples-registros)
    - [5️⃣ 🔄 VARIOS REGISTROS](#5️⃣--varios-registros)
  - [⚠️ `DELETE` SIN `WHERE`](#️-delete-sin-where)
    - [6️⃣ 🚨 MUY IMPORTANTE](#6️⃣--muy-importante)
  - [🆚 `DELETE` VS `TRUNCATE` VS `DROP`](#-delete-vs-truncate-vs-drop)
    - [7️⃣ 🔍 DIFERENCIA GENERAL](#7️⃣--diferencia-general)
    - [`DELETE`](#delete)
    - [`TRUNCATE`](#truncate)
    - [`DROP`](#drop)
    - [🎯 IDEA CLAVE](#-idea-clave)

### 1️⃣ 📝 ¿QUÉ ES `DELETE`?

`DELETE` se utiliza para eliminar registros existentes de una tabla.

**Estructura básica:**

```sql
DELETE FROM users
WHERE id = 1;
```

Conceptualmente:

```text
DELETE
  ↓
FROM → tabla
  ↓
WHERE → qué registros eliminar
```

---

### 2️⃣ 🗃️ `FROM`

`FROM` indica **de qué tabla se eliminarán los registros**.

```sql
DELETE FROM users
WHERE id = 1;
```

Aquí:

```text
FROM users
     ↓
tabla users
```

---

### 3️⃣ 🎯 `WHERE`

`WHERE` indica **qué registros serán eliminados**.

```sql
DELETE FROM users
WHERE id = 1;
```

La condición:

```text
id = 1
```

hace que únicamente se elimine el registro que cumple esa condición.

---

## 👤 ELIMINAR UN REGISTRO

### 4️⃣ 1️⃣ UN REGISTRO

```sql
DELETE FROM users
WHERE id = 1;
```

**Antes:**

| id | name  |
| -: | ----- |
|  1 | Ana   |
|  2 | Luis  |
|  3 | Pedro |

**Después:**

| id | name  |
| -: | ----- |
|  2 | Luis  |
|  3 | Pedro |

---

## 👥 ELIMINAR MÚLTIPLES REGISTROS

### 5️⃣ 🔄 VARIOS REGISTROS

Un `DELETE` puede eliminar múltiples filas si varias cumplen la condición.

Por ejemplo:

```sql
DELETE FROM users
WHERE name = 'Alo';
```

Si existen varios registros con `name = 'Alo'`, todos ellos serán eliminados.

Conceptualmente:

```text
WHERE
  ↓
encuentra registros
  ↓
DELETE
  ↓
elimina todos los encontrados
```

---

## ⚠️ `DELETE` SIN `WHERE`

### 6️⃣ 🚨 MUY IMPORTANTE

Si ejecutas:

```sql
DELETE FROM users;
```

sin `WHERE`, se eliminan **todos los registros de la tabla**.

Por eso:

```sql
DELETE FROM users
WHERE id = 1;
```

es diferente de:

```sql
DELETE FROM users;
```

Conceptualmente:

| Condición       | Resultado             |
| --------------- | --------------------- |
| **CON `WHERE`** | Registros específicos |
| **SIN `WHERE`** | Todos los registros   |

---

## 🆚 `DELETE` VS `TRUNCATE` VS `DROP`

### 7️⃣ 🔍 DIFERENCIA GENERAL

| Operación  | ¿Qué elimina?                            |
| ---------- | ---------------------------------------- |
| `DELETE`   | Registros                                |
| `TRUNCATE` | Todos los registros de una tabla         |
| `DROP`     | La estructura/objeto de la base de datos |

### `DELETE`

```sql
DELETE FROM users
WHERE id = 1;
```

Elimina registros específicos según una condición.

### `TRUNCATE`

Elimina todos los registros de una tabla.

```text
Table
 ↓
❌ Rows
```

La tabla continúa existiendo.

### `DROP`

Elimina la estructura.

```text
Table
 ↓
❌ Table
```

La tabla deja de existir.

`TRUNCATE` y `DROP` los estudiarás con mayor profundidad cuando llegues a **DDL**.

---

### 🎯 IDEA CLAVE

> **`DELETE`** elimina registros de una tabla. **`WHERE`** determina cuáles se eliminan; sin **`WHERE`**, todos los registros pueden ser eliminados. **`TRUNCATE`** y **`DROP`** tienen un alcance diferente y se estudiarán más profundamente en DDL.
