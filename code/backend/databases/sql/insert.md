# 📄 INSERT

Aquí estudias cómo **crear nuevos registros** dentro de una tabla.

---

# 📚 ÍNDICE — 03 — INSERT

- [📄 INSERT](#-insert)
- [📚 ÍNDICE — 03 — INSERT](#-índice--03--insert)
- [➕ INSERT INTO](#-insert-into)
  - [1️⃣ 📝 ¿QUÉ ES `INSERT INTO`?](#1️⃣--qué-es-insert-into)
  - [2️⃣ 📋 ESPECIFICAR COLUMNAS](#2️⃣--especificar-columnas)
- [📦 VALUES](#-values)
  - [3️⃣ 🔢 ¿QUÉ ES `VALUES`?](#3️⃣--qué-es-values)
- [👤 INSERTAR UNA FILA](#-insertar-una-fila)
  - [4️⃣ 1️⃣ UNA FILA](#4️⃣-1️⃣-una-fila)
- [👥 INSERTAR MÚLTIPLES FILAS](#-insertar-múltiples-filas)
  - [5️⃣ ➕➕ MÚLTIPLES FILAS](#5️⃣--múltiples-filas)
- [⚙️ DEFAULT](#️-default)
  - [6️⃣ 🧩 VALORES POR DEFECTO](#6️⃣--valores-por-defecto)
  - [7️⃣ 🔧 `DEFAULT`](#7️⃣--default)
- [❌ NULL](#-null)
  - [8️⃣ NULL](#8️⃣-null)
- [🧠 MODELO MENTAL](#-modelo-mental)
    - [🎯 IDEA CLAVE](#-idea-clave)

# ➕ INSERT INTO

## 1️⃣ 📝 ¿QUÉ ES `INSERT INTO`?

`INSERT INTO` se utiliza para agregar nuevos registros a una tabla.

Estructura básica:

```sql
INSERT INTO users (...)
VALUES (...);
```

---

## 2️⃣ 📋 ESPECIFICAR COLUMNAS

Puedes indicar explícitamente qué columnas recibirán los valores:

```sql
INSERT INTO users (name, email)
VALUES ('Ana', 'ana@mail.com');
```

Aquí:

```text
users
  ↓
name  → 'Ana'
email → 'ana@mail.com'
```

Las columnas no especificadas no reciben un valor mediante este `INSERT`.

---

# 📦 VALUES

## 3️⃣ 🔢 ¿QUÉ ES `VALUES`?

`VALUES` indica **los valores que se van a insertar**.

```sql
INSERT INTO users (name, email)
VALUES ('Ana', 'ana@mail.com');
```

La correspondencia es:

```text
(name, email)
     ↓
('Ana', 'ana@mail.com')
```

Por posición:

```text
name  → 'Ana'
email → 'ana@mail.com'
```

---

# 👤 INSERTAR UNA FILA

## 4️⃣ 1️⃣ UNA FILA

Puedes insertar un único registro:

```sql
INSERT INTO users (name, email)
VALUES ('Ana', 'ana@mail.com');
```

Resultado conceptual:

```text
id | name | email
---|------|----------------
1  | Ana  | ana@mail.com
```

---

# 👥 INSERTAR MÚLTIPLES FILAS

## 5️⃣ ➕➕ MÚLTIPLES FILAS

Puedes insertar varios registros utilizando un mismo `INSERT`:

```sql
INSERT INTO users (name, email)
VALUES
    ('Ana', 'ana@mail.com'),
    ('Luis', 'luis@mail.com');
```

Resultado conceptual:

```text
id | name | email
---|------|----------------
1  | Ana  | ana@mail.com
2  | Luis | luis@mail.com
```

Cada conjunto de valores representa una fila:

```text
('Ana',  'ana@mail.com')  → fila 1
('Luis', 'luis@mail.com') → fila 2
```

---

# ⚙️ DEFAULT

## 6️⃣ 🧩 VALORES POR DEFECTO

Una columna puede tener un **valor por defecto** definido en su estructura.

Cuando insertas un registro sin proporcionar un valor para esa columna, puede utilizarse ese valor por defecto.

También puedes indicar explícitamente:

```sql
DEFAULT
```

Ejemplo:

```sql
INSERT INTO users (name, status)
VALUES ('Ana', DEFAULT);
```

Aquí `status` utilizará el valor por defecto definido para esa columna.

---

## 7️⃣ 🔧 `DEFAULT`

`DEFAULT` indica:

> Utiliza el valor por defecto de esta columna.

Ejemplo:

```sql
INSERT INTO users (name, status)
VALUES ('Ana', DEFAULT);
```

Conceptualmente:

```text
name
 ↓
'Ana'

status
 ↓
DEFAULT
 ↓
valor definido por la tabla
```

---

# ❌ NULL

## 8️⃣ NULL

También puedes insertar explícitamente `NULL` cuando una columna permite valores nulos:

```sql
INSERT INTO users (name, email)
VALUES ('Ana', NULL);
```

Resultado conceptual:

```text
name  → Ana
email → NULL
```

`NULL` significa que **no existe un valor disponible para esa columna**.

La columna debe permitir `NULL`; de lo contrario, el `INSERT` puede fallar.

---

# 🧠 MODELO MENTAL

```text
INSERT INTO
      ↓
   TABLE
      ↓
  COLUMNS
      ↓
   VALUES
      ↓
   NEW ROW
```

Para una fila:

```sql
INSERT INTO users (name, email)
VALUES ('Ana', 'ana@mail.com');
```

Para varias:

```sql
INSERT INTO users (name, email)
VALUES
    ('Ana', 'ana@mail.com'),
    ('Luis', 'luis@mail.com');
```

Y los valores especiales:

```text
DEFAULT → utiliza el valor por defecto
NULL    → ausencia de valor
```

### 🎯 IDEA CLAVE

> **`INSERT INTO`** **indica dónde crear el registro, las columnas indican qué campos estás proporcionando y** **`VALUES`** **contiene los valores que serán almacenados.**
