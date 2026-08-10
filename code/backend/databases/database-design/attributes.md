# 📄 ATTRIBUTES

Una vez que tienes las entidades, debes determinar **qué información necesitas guardar sobre cada una**.

---

# 📑 ÍNDICE — ATTRIBUTES

- [📄 ATTRIBUTES](#-attributes)
- [📑 ÍNDICE — ATTRIBUTES](#-índice--attributes)
  - [1️⃣ 🧩 ¿QUÉ ES UN ATTRIBUTE?](#1️⃣--qué-es-un-attribute)
  - [2️⃣ 🔎 IDENTIFICAR ATRIBUTOS](#2️⃣--identificar-atributos)
  - [3️⃣ 🔴 ATRIBUTOS OBLIGATORIOS](#3️⃣--atributos-obligatorios)
  - [4️⃣ 🟡 ATRIBUTOS OPCIONALES](#4️⃣--atributos-opcionales)
  - [5️⃣ 🔹 ATRIBUTOS SIMPLES](#5️⃣--atributos-simples)
  - [6️⃣ 🧩 ATRIBUTOS COMPUESTOS](#6️⃣--atributos-compuestos)
  - [7️⃣ 🧮 ATRIBUTOS DERIVADOS](#7️⃣--atributos-derivados)
  - [8️⃣ 🔢 IDENTIFICAR EL TIPO DE DATO](#8️⃣--identificar-el-tipo-de-dato)
  - [9️⃣ 🏷️ ELEGIR BUENOS NOMBRES](#9️⃣-️-elegir-buenos-nombres)
  - [🔄 ENTITIES → ATTRIBUTES → COLUMNS](#-entities--attributes--columns)
    - [🎯 IDEA CLAVE](#-idea-clave)

## 1️⃣ 🧩 ¿QUÉ ES UN ATTRIBUTE?

Un **Attribute** es una característica o propiedad que describe una entidad.

Por ejemplo:

```text
User
│
├── id
├── name
├── email
├── birthDate
└── createdAt
```

Cada elemento representa una característica del `User`.

---

## 2️⃣ 🔎 IDENTIFICAR ATRIBUTOS

Para identificar los atributos, pregunta:

> **¿Qué información necesito guardar sobre esta entidad?**

Por ejemplo:

```text
Entity: User

Attributes:
- id
- name
- email
- birthDate
- createdAt
```

---

## 3️⃣ 🔴 ATRIBUTOS OBLIGATORIOS

Son atributos que **deben tener un valor** para que el registro sea válido.

Por ejemplo:

```text
User

id       → obligatorio
name     → obligatorio
email    → obligatorio
```

En una base de datos relacional, esto puede representarse mediante:

```sql
NOT NULL
```

---

## 4️⃣ 🟡 ATRIBUTOS OPCIONALES

Son atributos que **pueden no tener un valor**.

Por ejemplo:

| Attribute   | Tipo        |
| ----------- | ----------- |
| `id`        | obligatorio |
| `name`      | obligatorio |
| `email`     | obligatorio |
| `phone`     | opcional    |
| `birthDate` | opcional    |

En una tabla, un atributo opcional puede permitir:

```text
NULL
```

---

## 5️⃣ 🔹 ATRIBUTOS SIMPLES

Un atributo simple representa un dato que puede almacenarse directamente como un único valor.

Por ejemplo:

```text
User
│
├── name
├── email
└── birthDate
```

Cada uno representa un valor individual.

---

## 6️⃣ 🧩 ATRIBUTOS COMPUESTOS

Un atributo compuesto puede dividirse conceptualmente en varios componentes.

Por ejemplo:

```text
Address
│
├── street
├── city
├── state
└── country
```

Conceptualmente:

```text
Address
   │
   ├── street
   ├── city
   ├── state
   └── country
```

---

## 7️⃣ 🧮 ATRIBUTOS DERIVADOS

Un atributo derivado es un valor que puede **obtenerse a partir de otros datos**.

Por ejemplo:

```text
birthDate
    ↓
    ↓ calcular
    ↓
age
```

`age` puede derivarse de `birthDate`.

Por eso, dependiendo del diseño, puede no ser necesario almacenar ambos valores.

---

## 8️⃣ 🔢 IDENTIFICAR EL TIPO DE DATO

Cada atributo debe tener un tipo de dato adecuado.

Por ejemplo:

| Attribute   | Tipo de dato |
| ----------- | ------------ |
| `id`        | `INTEGER`    |
| `name`      | `VARCHAR`    |
| `email`     | `VARCHAR`    |
| `birthDate` | `DATE`       |
| `createdAt` | `TIMESTAMP`  |

Esto conecta directamente con el tema de **Data Types**.

---

## 9️⃣ 🏷️ ELEGIR BUENOS NOMBRES

Los atributos deben tener nombres:

* Claros
* Descriptivos
* Consistentes
* Fáciles de entender

Por ejemplo:

```text
✅ birthDate
✅ createdAt
✅ email

❌ x
❌ data1
❌ value
```

La nomenclatura debe mantenerse consistente dentro del diseño.

---

## 🔄 ENTITIES → ATTRIBUTES → COLUMNS

Aquí conectas el diseño conceptual con la estructura de la base de datos:

```text
Entities
    ↓
Attributes
    ↓
Columns
```

Por ejemplo:

```text
Entity
  ↓
User
  ↓
Attributes
  ↓
id
name
email
birthDate
  ↓
Table
  ↓
users
```

### 🎯 IDEA CLAVE

> **Los atributos describen las características de una entidad y, al implementar el diseño en una base de datos relacional, normalmente se representan como columnas.**
