# 📄 ERD

**ERD** significa **Entity Relationship Diagram**.

Es una representación visual del diseño de una base de datos. Permite visualizar **entidades, atributos, claves y relaciones** antes de convertir el diseño en tablas SQL.

---

# 📑 ÍNDICE — ERD

- [📄 ERD](#-erd)
- [📑 ÍNDICE — ERD](#-índice--erd)
  - [1️⃣ 🧩 ¿QUÉ ES UN ERD?](#1️⃣--qué-es-un-erd)
  - [2️⃣ 🧩 ENTITIES](#2️⃣--entities)
  - [3️⃣ 📋 ATTRIBUTES](#3️⃣--attributes)
  - [4️⃣ 🔑 PRIMARY KEYS](#4️⃣--primary-keys)
  - [5️⃣ 🔗 FOREIGN KEYS](#5️⃣--foreign-keys)
  - [6️⃣ 🔗 RELATIONSHIPS](#6️⃣--relationships)
  - [7️⃣ 🔢 CARDINALITY](#7️⃣--cardinality)
- [8️⃣ 🐦 CROW'S FOOT NOTATION](#8️⃣--crows-foot-notation)
- [9️⃣ ⚖️ OPTIONALITY](#9️⃣-️-optionality)
- [🔟 🏗️ CÓMO DISEÑAR UN ERD](#-️-cómo-diseñar-un-erd)
- [1️⃣1️⃣ 📖 CÓMO LEER UN ERD](#1️⃣1️⃣--cómo-leer-un-erd)
- [🔄 REQUISITOS → ERD → SQL](#-requisitos--erd--sql)
    - [🎯 IDEA CLAVE](#-idea-clave)

## 1️⃣ 🧩 ¿QUÉ ES UN ERD?

Un **Entity Relationship Diagram** es un diagrama que representa la estructura y las relaciones de una base de datos.

Permite visualizar:

```text
Entities
   ↓
Attributes
   ↓
Keys
   ↓
Relationships
   ↓
Cardinality
```

Por ejemplo:

```text
┌──────────────┐
│    USERS     │
├──────────────┤
│ PK id        │
│ name         │
│ email        │
└──────┬───────┘
       │
       │ 1
       │
       │ N
       ▼
┌──────────────┐
│    ORDERS    │
├──────────────┤
│ PK id        │
│ FK user_id   │
│ total        │
└──────────────┘
```

---

## 2️⃣ 🧩 ENTITIES

Una **Entity** representa una cosa importante del sistema que necesitamos almacenar.

Por ejemplo:

```text
User
Order
Product
```

En un ERD, cada entidad normalmente se representa mediante un bloque o rectángulo.

```text
┌──────────────┐
│    USERS     │
└──────────────┘
```

---

## 3️⃣ 📋 ATTRIBUTES

Los **Attributes** representan las características que queremos almacenar sobre una entidad.

Por ejemplo:

```text
User
│
├── id
├── name
└── email
```

En un ERD:

```text
┌──────────────┐
│    USERS     │
├──────────────┤
│ id           │
│ name         │
│ email        │
└──────────────┘
```

---

## 4️⃣ 🔑 PRIMARY KEYS

Una **Primary Key** identifica de manera única cada registro de una entidad.

En un ERD puede representarse como:

```text
PK id
```

Por ejemplo:

```text
┌──────────────┐
│    USERS     │
├──────────────┤
│ PK id        │
│ name         │
│ email        │
└──────────────┘
```

---

## 5️⃣ 🔗 FOREIGN KEYS

Una **Foreign Key** representa una referencia hacia otra entidad.

Por ejemplo:

```text
┌──────────────┐
│    ORDERS    │
├──────────────┤
│ PK id        │
│ FK user_id   │
│ total        │
└──────────────┘
```

`user_id` referencia al `id` de `Users`.

```text
users.id
   ▲
   │
   │ FK
   │
orders.user_id
```

---

## 6️⃣ 🔗 RELATIONSHIPS

Los ERD permiten representar las relaciones entre entidades.

Por ejemplo:

```text
User
 │
 └── Orders
```

Visualmente:

```text
USERS
  │
  │
ORDERS
```

La relación indica que ambas entidades están conectadas.

---

## 7️⃣ 🔢 CARDINALITY

La **Cardinality** indica cuántas instancias pueden relacionarse.

Por ejemplo:

```text
User 1 ───────── N Orders
```

Significa:

```text
1 User
   ↓
N Orders
```

Otros ejemplos:

```text
1 : 1
1 : N
N : M
```

La cardinalidad es una parte fundamental de un ERD porque permite entender exactamente cómo se relacionan las entidades.

---

# 8️⃣ 🐦 CROW'S FOOT NOTATION

**Crow's Foot Notation** es una de las notaciones utilizadas para representar relaciones y cardinalidad en un ERD.

La "pata de cuervo" representa el lado **many** de una relación.

Conceptualmente:

```text
User ─────────< Orders
  1              N
```

La pata de cuervo:

```text
<
```

representa:

```text
Many
```

Por ejemplo:

```text
USERS ─────────< ORDERS
   1                N
```

Esto significa:

> Un `User` puede tener muchos `Orders`.

---

# 9️⃣ ⚖️ OPTIONALITY

La **Optionality** indica si una relación es obligatoria u opcional.

Por ejemplo:

```text
User
  │
  └── 0..N Orders
```

El `0` indica que un usuario puede no tener ningún pedido.

Mientras que:

```text
Order
  │
  └── 1 User
```

indica que un pedido debe estar asociado con un usuario.

La optionality permite representar conceptos como:

```text
0..1
1..1
0..N
1..N
```

---

# 🔟 🏗️ CÓMO DISEÑAR UN ERD

Puedes pensar en el proceso de esta manera:

```text
Requisitos
    ↓
Identificar Entities
    ↓
Identificar Attributes
    ↓
Definir Primary Keys
    ↓
Identificar Relationships
    ↓
Definir Foreign Keys
    ↓
Definir Cardinality
    ↓
Definir Optionality
    ↓
ERD
```

Por ejemplo, a partir de:

> Un usuario puede realizar muchos pedidos y cada pedido pertenece a un usuario.

Puedes obtener:

```text
User 1 ───────── N Orders
```

Y posteriormente:

```text
USERS
------
PK id
name
email
```

```text
ORDERS
-------
PK id
FK user_id
total
```

---

# 1️⃣1️⃣ 📖 CÓMO LEER UN ERD

Al leer un ERD debes poder identificar:

```text
¿Qué entidades existen?
        ↓
¿Qué atributos tienen?
        ↓
¿Cuáles son sus Primary Keys?
        ↓
¿Cuáles son sus Foreign Keys?
        ↓
¿Qué relaciones existen?
        ↓
¿Cuál es su cardinalidad?
        ↓
¿Son opcionales u obligatorias?
```

Por ejemplo:

```text
┌──────────────┐
│    USERS     │
├──────────────┤
│ PK id        │
│ name         │
│ email        │
└──────┬───────┘
       │
       │ 1
       │
       │ N
       ▼
┌──────────────┐
│    ORDERS    │
├──────────────┤
│ PK id        │
│ FK user_id   │
│ total        │
└──────────────┘
```

Puedes leerlo como:

> `Users` tiene una relación **1****:N** con `Orders`. Un usuario puede tener muchos pedidos y cada pedido referencia a un usuario mediante `user_id`.

---

# 🔄 REQUISITOS → ERD → SQL

El objetivo final es poder pasar de los requisitos del sistema a una representación visual y posteriormente a la estructura de la base de datos:

```text
Requisitos
    ↓
ERD
    ↓
SQL Tables
```

Por ejemplo:

```text
User 1 ───────── N Orders
```

↓

```text
USERS
------
PK id
name
email

ORDERS
-------
PK id
FK user_id
total
```

↓

```sql
CREATE TABLE users (...);

CREATE TABLE orders (...);
```

### 🎯 IDEA CLAVE

> **Un ERD es el puente entre el diseño conceptual de una base de datos y su implementación como tablas SQL.**
