# 📊 TABLES / ROWS / COLUMNS

En una base de datos relacional, la información se organiza principalmente mediante **tables, columns y rows**.

La idea fundamental es:

```text
🗄️ Table
   │
   ├── 🏷️ Columns → características
   │
   └── 🧾 Rows    → registros
```

---

## 📑 ÍNDICE — TABLES / ROWS / COLUMNS

- [📊 TABLES / ROWS / COLUMNS](#-tables--rows--columns)
  - [📑 ÍNDICE — TABLES / ROWS / COLUMNS](#-índice--tables--rows--columns)
- [📊 TABLES](#-tables)
  - [1️⃣ 🗄️ ¿QUÉ ES UNA TABLA?](#1️⃣-️-qué-es-una-tabla)
  - [2️⃣ 🎯 PROPÓSITO DE UNA TABLA](#2️⃣--propósito-de-una-tabla)
  - [3️⃣ 🏷️ NOMBRE DE UNA TABLA](#3️⃣-️-nombre-de-una-tabla)
  - [4️⃣ 🧱 ESTRUCTURA DE UNA TABLA](#4️⃣--estructura-de-una-tabla)
  - [5️⃣ 📐 SCHEMA DE UNA TABLA](#5️⃣--schema-de-una-tabla)
- [📏 COLUMNS](#-columns)
  - [6️⃣ 🏷️ ¿QUÉ ES UNA COLUMNA?](#6️⃣-️-qué-es-una-columna)
  - [7️⃣ 🔤 COLUMN NAME](#7️⃣--column-name)
  - [8️⃣ 🔢 COLUMN DATA TYPE](#8️⃣--column-data-type)
  - [9️⃣ 🛡️ COLUMN CONSTRAINTS](#9️⃣-️-column-constraints)
  - [🔟 ✅ VALORES PERMITIDOS](#--valores-permitidos)
- [🧾 ROWS](#-rows)
  - [1️⃣1️⃣ 🧾 ¿QUÉ ES UNA FILA?](#1️⃣1️⃣--qué-es-una-fila)
  - [1️⃣2️⃣ 👤 ROW COMO REGISTRO](#1️⃣2️⃣--row-como-registro)
  - [1️⃣3️⃣ 🧩 ROW COMO INSTANCIA DE UNA ENTIDAD](#1️⃣3️⃣--row-como-instancia-de-una-entidad)
  - [1️⃣4️⃣ 🆚 ROW VS COLUMN](#1️⃣4️⃣--row-vs-column)
- [🔢 NULL](#-null)
  - [1️⃣5️⃣ ❓ ¿QUÉ SIGNIFICA `NULL`?](#1️⃣5️⃣--qué-significa-null)
  - [1️⃣6️⃣ 🆚 `NULL` VS `0`](#1️⃣6️⃣--null-vs-0)
  - [1️⃣7️⃣ 🆚 `NULL` VS `''`](#1️⃣7️⃣--null-vs-)
  - [1️⃣9️⃣ 🤔 ¿CUÁNDO PERMITIR `NULL`?](#1️⃣9️⃣--cuándo-permitir-null)
  - [2️⃣0️⃣ 🚫 ¿CUÁNDO UTILIZAR `NOT NULL`?](#2️⃣0️⃣--cuándo-utilizar-not-null)
- [🧠 MODELO MENTAL](#-modelo-mental)
    - [🎯 IDEA CLAVE](#-idea-clave)

# 📊 TABLES

## 1️⃣ 🗄️ ¿QUÉ ES UNA TABLA?

Una **table (tabla)** es una estructura donde se almacenan datos relacionados.

Por ejemplo, una aplicación puede tener:

```text
users
products
orders
guests
payments
```

Una tabla normalmente representa una **entidad o concepto** del sistema.

```text
users
   ↓
Usuarios de la aplicación
```

---

## 2️⃣ 🎯 PROPÓSITO DE UNA TABLA

Una tabla sirve para organizar información que pertenece al mismo tipo de entidad.

Por ejemplo:

```text
users
```

almacena información sobre usuarios:

```text
id
name
email
birth_date
```

Mientras que:

```text
orders
```

almacena información sobre pedidos:

```text
id
user_id
total
created_at
```

La idea es evitar mezclar información de conceptos diferentes sin necesidad.

---

## 3️⃣ 🏷️ NOMBRE DE UNA TABLA

Cada tabla tiene un nombre que permite identificarla.

**Ejemplos:**

```text
users
products
orders
categories
```

Es importante utilizar nombres **claros y consistentes**.

Por ejemplo:

```text
users
```

es mucho más descriptivo que:

```text
data
```

---

## 4️⃣ 🧱 ESTRUCTURA DE UNA TABLA

Una tabla está formada principalmente por:

```text
Table
 │
 ├── Columns
 │      ↓
 │   Structure
 │
 └── Rows
        ↓
     Data
```

Ejemplo:

```text
users

┌────┬────────┬─────────────────┐
│ id │ name   │ email           │
├────┼────────┼─────────────────┤
│ 1  │ Ana    │ ana@mail.com    │
│ 2  │ Luis   │ luis@mail.com   │
└────┴────────┴─────────────────┘
```

Aquí:

```text
id
name
email
```

son **columns**.

Mientras que:

```text
1 | Ana  | ana@mail.com
2 | Luis | luis@mail.com
```

son **rows**.

---

## 5️⃣ 📐 SCHEMA DE UNA TABLA

El **schema de una tabla** describe cómo está estructurada.

Define aspectos como:

```text
Column names
Data types
Constraints
Relationships
```

Por ejemplo:

```text
users
│
├── id
│   └── INTEGER
│
├── name
│   └── VARCHAR
│
├── email
│   └── VARCHAR
│
└── birth_date
    └── DATE
```

El schema describe **cómo deben organizarse los datos**, no los datos concretos que contiene la tabla.

# 📏 COLUMNS

## 6️⃣ 🏷️ ¿QUÉ ES UNA COLUMNA?

Una **column (columna)** representa una característica o atributo de los registros de una tabla.

Por ejemplo:

```text id="8y4qpn"
users

id
name
email
birth_date
```

Cada usuario tendrá valores correspondientes a esas características.

| Column       | Significado         |
| ------------ | ------------------- |
| `id`         | identificador       |
| `name`       | nombre              |
| `email`      | correo              |
| `birth_date` | fecha de nacimiento |

---

## 7️⃣ 🔤 COLUMN NAME

Cada columna tiene un nombre.

Ejemplo:

```text id="k3f8ue"
users

id
name
email
birth_date
```

Los nombres deberían ser:

* 🧠 Claros.
* 📖 Descriptivos.
* 🔤 Consistentes.
* 🚫 Evitar nombres ambiguos.

Por ejemplo:

```text id="0w4m8v"
birth_date
```

es más descriptivo que:

```text id="r6v1cz"
date
```

porque indica exactamente qué fecha representa.

---

## 8️⃣ 🔢 COLUMN DATA TYPE

Cada columna tiene un **data type**, que determina qué tipo de valores puede almacenar.

Ejemplo:

```text id="q6n2xk"
id          → INTEGER
name        → VARCHAR
birth_date  → DATE
active      → BOOLEAN
```

Conceptualmente:

```text id="f3c9vz"
Column
  ↓
Data Type
  ↓
Allowed kind of value
```

Por ejemplo:

```text id="7q2vma"
age → INTEGER
```

está destinada a valores numéricos enteros.

---

## 9️⃣ 🛡️ COLUMN CONSTRAINTS

Los **constraints** son reglas que restringen qué valores pueden almacenarse.

Algunos ejemplos:

```text id="w5k8sd"
PRIMARY KEY
NOT NULL
UNIQUE
DEFAULT
CHECK
FOREIGN KEY
```

Por ejemplo:

```text id="q2f7am"
email
  ↓
UNIQUE
```

indica que no deberían existir dos registros con el mismo email.

O:

```text id="n8s4yc"
name
  ↓
NOT NULL
```

indica que el nombre debe tener un valor.

---

## 🔟 ✅ VALORES PERMITIDOS

El tipo de dato y los constraints determinan qué valores puede recibir una columna.

Por ejemplo:

```text id="p6w2kd"
age → INTEGER
```

Valores válidos:

```text id="4n7xqj"
18
25
30
```

Mientras que:

```text id="j5r8mc"
"hello"
```

no corresponde al tipo esperado.

También pueden existir restricciones más específicas:

```text id="u3c9az"
age
↓
INTEGER
↓
CHECK (age >= 0)
```

Ahora la database puede impedir valores negativos.

---

# 🧾 ROWS

## 1️⃣1️⃣ 🧾 ¿QUÉ ES UNA FILA?

Una **row (fila)** representa un registro dentro de una tabla.

Ejemplo:

```text id="e7k3bp"
users

┌────┬────────┬─────────────────┐
│ id │ name   │ email           │
├────┼────────┼─────────────────┤
│ 1  │ Ana    │ ana@mail.com    │ ← Row
│ 2  │ Luis   │ luis@mail.com   │ ← Row
└────┴────────┴─────────────────┘
```

Cada row representa un conjunto completo de valores.

## 1️⃣2️⃣ 👤 ROW COMO REGISTRO

Una row puede representar una instancia concreta de una entidad.

```text
users

id | name | email
---|------|---------------
1  | Ana  | ana@mail.com
```

Esta row representa:

```text
👤 User
id: 1
name: Ana
email: ana@mail.com
```

Por eso:

```text
1 Row
   ↓
1 Record
   ↓
1 Entity instance
```

---

## 1️⃣3️⃣ 🧩 ROW COMO INSTANCIA DE UNA ENTIDAD

Si la entidad es:

```text
User
```

la tabla:

```text
users
```

puede contener muchas instancias:

```text
users

┌────┬─────────┐
│ id │ name    │
├────┼─────────┤
│ 1  │ Ana     │ ← User
│ 2  │ Luis    │ ← User
│ 3  │ Carlos  │ ← User
└────┴─────────┘
```

Cada row representa un usuario diferente.

---

## 1️⃣4️⃣ 🆚 ROW VS COLUMN

Esta diferencia debes tenerla muy clara:

| 🧾 Row                              | 📏 Column                           |
| ----------------------------------- | ----------------------------------- |
| Representa un registro              | Representa una característica       |
| Horizontal                          | Vertical                            |
| Contiene valores de varias columnas | Contiene valores del mismo atributo |
| Ej: un usuario                      | Ej: `email`                         |

Visualmente:

```text
             Columns
        ↓       ↓       ↓
       id      name    email
        │       │       │
        ├───────┼───────┤
        │   Row 1       │
        ├───────┼───────┤
        │   Row 2       │
        └───────┴───────┘
```

---

# 🔢 NULL

## 1️⃣5️⃣ ❓ ¿QUÉ SIGNIFICA `NULL`?

`NULL` significa que **no existe un valor disponible/conocido para ese campo**.

Por ejemplo:

```text
users

id | name | phone
---|------|-------
1  | Ana  | NULL
```

Esto significa que para Ana **no tenemos un valor de teléfono almacenado**.

> ⚠️ `NULL` no significa necesariamente "vacío". Representa la **ausencia de un valor**.

---

## 1️⃣6️⃣ 🆚 `NULL` VS `0`

Son cosas diferentes.

```text
age = 0
```

significa que el valor es **cero**.

Mientras:

```text
age = NULL
```

significa que **no hay un valor conocido**.

```text
0
↓
Existe un valor

NULL
↓
No existe un valor
```

---

## 1️⃣7️⃣ 🆚 `NULL` VS `''`

Tampoco son iguales.

```text
''
```

es un **string vacío**.

Mientras:

```text
NULL
```

representa ausencia de valor.

Por ejemplo:

```text
phone = ''
```

significa:

> Existe un string, pero tiene cero caracteres.

Mientras:

```text
phone = NULL
```

significa:

> No hay un valor almacenado.

```

## 1️⃣8️⃣ 🆚 `NULL` VS `false`

Tampoco significan lo mismo.

```text
active = false
```

significa:

> El valor booleano es falso.

Mientras:

```text
active = NULL
```

significa:

> No tenemos un valor definido.

Por ejemplo:

```text
active
------
true
false
NULL
```

Son **tres estados conceptualmente diferentes**.

---

## 1️⃣9️⃣ 🤔 ¿CUÁNDO PERMITIR `NULL`?

Permitir `NULL` tiene sentido cuando un dato puede **legítimamente no existir o no estar disponible**.

Por ejemplo:

```text
users

phone
middle_name
birth_date
```

Si esos datos son opcionales, podrían permitir `NULL`.

```text
phone → NULL
```

puede significar:

> El usuario no proporcionó un teléfono.

---

## 2️⃣0️⃣ 🚫 ¿CUÁNDO UTILIZAR `NOT NULL`?

Usa `NOT NULL` cuando una columna **debe tener un valor para que el registro sea válido**.

Por ejemplo:

```text
users

id
name
email
```

Probablemente:

```text
name → NOT NULL
email → NOT NULL
```

porque un usuario sin información básica podría no tener sentido para la aplicación.

Conceptualmente:

```text
Required field
      ↓
   NOT NULL
```

Mientras:

```text
Optional field
      ↓
    NULL
```

---

# 🧠 MODELO MENTAL

Quédate con esto:

```text
                 🗄️ TABLE
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
      📏 COLUMNS           🧾 ROWS
          │                   │
          ▼                   ▼
   Characteristics         Records
          │                   │
          ▼                   ▼
      Data Types          Values
          │
          ▼
     Constraints
```

Y específicamente:

```text
users

id | name | email | birth_date
---|------|-------|-----------
1  | Ana  | ...   | NULL
2  | Luis | ...   | 2000-05-10
```

Puedes identificar:

```text
📊 Table
   ↓
users

📏 Columns
   ↓
id / name / email / birth_date

🧾 Rows
   ↓
Ana / Luis

🔢 NULL
   ↓
birth_date no tiene valor para Ana
```

### 🎯 IDEA CLAVE

> **Una table define la estructura, las columns describen qué información se almacena y las rows representan los registros concretos. `NULL` representa ausencia de un valor y no debe confundirse con `0`, `''` o `false`.**
