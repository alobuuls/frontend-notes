# 📄 RELATIONSHIPS

Aquí estudias **cómo se relacionan las entidades entre sí**.

---

## 📑 ÍNDICE

- [📄 RELATIONSHIPS](#-relationships)
  - [📑 ÍNDICE](#-índice)
  - [1️⃣ 🔗 ¿QUÉ ES UNA RELATIONSHIP?](#1️⃣--qué-es-una-relationship)
  - [2️⃣ 1️⃣ ONE-TO-ONE](#2️⃣-1️⃣-one-to-one)
  - [3️⃣ 2️⃣ ONE-TO-MANY](#3️⃣-2️⃣-one-to-many)
  - [4️⃣ 3️⃣ MANY-TO-MANY](#4️⃣-3️⃣-many-to-many)
  - [5️⃣ ➡️ RELACIONES DIRECTAS](#5️⃣-️-relaciones-directas)
  - [6️⃣ 🔗 RELACIONES MEDIANTE TABLA INTERMEDIA](#6️⃣--relaciones-mediante-tabla-intermedia)
  - [7️⃣ 🔑 FOREIGN KEYS](#7️⃣--foreign-keys)
  - [8️⃣ ⚖️ OPTIONAL VS REQUIRED RELATIONSHIPS](#8️⃣-️-optional-vs-required-relationships)
    - [Required](#required)
    - [Optional](#optional)
  - [🔄 RELATIONSHIPS → FOREIGN KEYS → JOINS](#-relationships--foreign-keys--joins)
    - [🎯 IDEA CLAVE](#-idea-clave)

## 1️⃣ 🔗 ¿QUÉ ES UNA RELATIONSHIP?

Una **Relationship** representa la conexión entre dos o más entidades dentro de un sistema.

Por ejemplo:

```text
User
 │
 └── Order
```

Esto indica que existe una relación entre `User` y `Order`.

---

## 2️⃣ 1️⃣ ONE-TO-ONE

Una relación **One-to-One (1:1)** significa que una instancia de una entidad se relaciona con una sola instancia de otra entidad.

```text
User
 │
 └── Profile
```

Conceptualmente:

```text
1 User
   ↓
1 Profile
```

---

## 3️⃣ 2️⃣ ONE-TO-MANY

Una relación **One-to-Many (1:N)** significa que una instancia de una entidad puede relacionarse con muchas instancias de otra.

```text
User
 │
 ├── Order
 ├── Order
 └── Order
```

Conceptualmente:

```text
1 User
   ↓
N Orders
```

---

## 4️⃣ 3️⃣ MANY-TO-MANY

Una relación **Many-to-Many (N:M)** significa que muchas instancias de una entidad pueden relacionarse con muchas instancias de otra.

```text
Student
   ↕
Course
```

Un estudiante puede tener muchos cursos y un curso puede tener muchos estudiantes.

---

## 5️⃣ ➡️ RELACIONES DIRECTAS

Una relación directa conecta las entidades directamente.

Por ejemplo:

```text
User
 │
 └── Order
```

En una base de datos relacional, esta relación puede representarse mediante una **Foreign Key**.

---

## 6️⃣ 🔗 RELACIONES MEDIANTE TABLA INTERMEDIA

Las relaciones **Many-to-Many** normalmente necesitan una tabla intermedia.

Por ejemplo:

```text
Student
   ↕
Course
```

Se convierte en:

```text
Students
Courses
StudentCourses
```

Conceptualmente:

```text
Students
    │
    ▼
StudentCourses
    ▲
    │
Courses
```

La tabla `StudentCourses` representa la relación entre ambas entidades.

---

## 7️⃣ 🔑 FOREIGN KEYS

Una **Foreign Key** permite representar una relación entre tablas.

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

Conceptualmente:

```text
users.id
    ▲
    │
    │ Foreign Key
    │
orders.user_id
```

La Foreign Key conecta el registro de una tabla con un registro de otra.

---

## 8️⃣ ⚖️ OPTIONAL VS REQUIRED RELATIONSHIPS

Una relación puede ser **obligatoria** u **opcional**.

### Required

La entidad debe estar relacionada con otra.

```text
Order
  ↓
MUST have
  ↓
User
```

### Optional

La entidad puede existir sin tener una relación.

```text
User
  ↓
MAY have
  ↓
Profile
```

Esto puede relacionarse con:

```text
NULL
NOT NULL
FOREIGN KEY
```

---

## 🔄 RELATIONSHIPS → FOREIGN KEYS → JOINS

Este tema conecta directamente con otros conceptos:

```text
Relationships
      ↓
Foreign Keys
      ↓
Tables
      ↓
JOINs
```

Por ejemplo:

```text
User
 │
 └── Orders
```

se puede representar mediante:

```text
users
------
id
```

```text
orders
-------
id
user_id
```

y posteriormente consultar mediante un `JOIN`.

### 🎯 IDEA CLAVE

> **Las Relationships describen cómo se conectan las entidades. En una base relacional, estas relaciones normalmente se implementan mediante Foreign Keys y pueden consultarse utilizando JOINs.**
