# 📄 CARDINALITY

Aunque está relacionada con `Relationships`, aquí estudias específicamente **cuántos registros pueden relacionarse entre sí**.

---

# 📑 ÍNDICE

- [📄 CARDINALITY](#-cardinality)
- [📑 ÍNDICE](#-índice)
  - [1️⃣ 🔢 ¿QUÉ ES CARDINALITY?](#1️⃣--qué-es-cardinality)
  - [2️⃣ 1️⃣ 1:1](#2️⃣-1️⃣-11)
  - [3️⃣ 2️⃣ 1:N](#3️⃣-2️⃣-1n)
  - [4️⃣ 3️⃣ N:M](#4️⃣-3️⃣-nm)
  - [5️⃣ 🔽 MINIMUM CARDINALITY](#5️⃣--minimum-cardinality)
  - [6️⃣ 🔼 MAXIMUM CARDINALITY](#6️⃣--maximum-cardinality)
  - [7️⃣ ⚖️ OPTIONALITY](#7️⃣-️-optionality)
    - [Opcional](#opcional)
    - [Obligatoria](#obligatoria)
  - [8️⃣ 📐 CÓMO REPRESENTAR CARDINALIDAD](#8️⃣--cómo-representar-cardinalidad)
  - [🔑 CARDINALITY Y FOREIGN KEYS](#-cardinality-y-foreign-keys)
    - [🎯 IDEA CLAVE](#-idea-clave)

## 1️⃣ 🔢 ¿QUÉ ES CARDINALITY?

La **Cardinality** describe cuántas instancias de una entidad pueden relacionarse con instancias de otra entidad.

Por ejemplo:

```text
User 1 ───────── N Orders
```

Significa que:

```text
1 User
   ↓
0..N Orders
```

Un usuario puede tener cero, uno o muchos pedidos.

---

## 2️⃣ 1️⃣ 1:1

Una relación **1:1** significa:

```text
Entity A
   ↓
1
   ↓
Entity B
```

Una instancia de A se relaciona con una instancia de B.

Por ejemplo:

```text
User 1 ───────── 1 Profile
```

---

## 3️⃣ 2️⃣ 1:N

Una relación **1:N** significa que una instancia de una entidad puede relacionarse con múltiples instancias de otra.

```text
User 1 ───────── N Orders
```

Por ejemplo:

```text
1 User
   ↓
0..N Orders
```

---

## 4️⃣ 3️⃣ N:M

Una relación **N:M** significa que múltiples instancias de una entidad pueden relacionarse con múltiples instancias de otra.

```text
Student N ───────── M Courses
```

Por ejemplo:

```text
Students
   ↕
Courses
```

---

## 5️⃣ 🔽 MINIMUM CARDINALITY

La **Minimum Cardinality** indica el número mínimo de instancias que pueden participar en una relación.

Puede ser:

```text
0
```

o:

```text
1
```

Por ejemplo:

```text
User
  │
  └── 0..N Orders
```

El `0` significa que un usuario **puede no tener ningún pedido**.

Mientras que:

```text
Order
  │
  └── 1..1 User
```

indica que un pedido **debe tener un usuario**.

---

## 6️⃣ 🔼 MAXIMUM CARDINALITY

La **Maximum Cardinality** indica el número máximo de instancias que pueden participar en una relación.

Puede ser:

```text
1
```

o:

```text
N
```

Por ejemplo:

```text
User
  │
  └── 0..N Orders
```

Aquí:

| Valor | Significado |
| ----- | ----------- |
| `0`   | mínimo      |
| `N`   | máximo      |

---

## 7️⃣ ⚖️ OPTIONALITY

La **Optionality** indica si una relación es opcional u obligatoria.

### Opcional

```text
0..N
```

La relación puede no existir.

### Obligatoria

```text
1..N
```

Debe existir al menos una relación.

Por ejemplo:

```text
User
  │
  └── 0..N Orders
```

El usuario puede no tener pedidos.

---

## 8️⃣ 📐 CÓMO REPRESENTAR CARDINALIDAD

Puedes utilizar diferentes notaciones para representar la cardinalidad.

Por ejemplo:

```text
User 1 ───────── N Orders
```

O de manera más precisa:

```text
User
  │
  └── 0..N Orders
```

Otro ejemplo:

```text
Order 1 ───────── N OrderItems
```

Significa:

```text
1 Order
   ↓
1..N OrderItems
```

---

## 🔑 CARDINALITY Y FOREIGN KEYS

La cardinalidad te ayuda posteriormente a decidir **dónde colocar la Foreign Key**.

Por ejemplo:

```text
User 1 ───────── N Orders
```

Normalmente:

```text
users
------
id
```

```text
orders
-------
id
user_id ← FK
```

La FK se coloca en el lado **N** de una relación `1:N`.

### 🎯 IDEA CLAVE

> **Cardinality indica cuántas instancias pueden relacionarse. La minimum cardinality indica el mínimo, la maximum cardinality indica el máximo y la optionality indica si la relación puede existir o no.**
