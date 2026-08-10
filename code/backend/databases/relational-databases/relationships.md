# 🔗 RELATIONSHIPS

Una **Relationship (relación)** describe cómo una entidad se conecta con otra dentro de una base de datos relacional.

---

# 06.1 — ¿QUÉ ES UNA RELATIONSHIP?

## 1️⃣ 🧠 ¿QUÉ ES UNA RELACIÓN?

Una relación representa cómo una entidad se conecta con otra.

Por ejemplo:

```text id="n8q3vx"
User
 │
 └── Orders
```

Conceptualmente:

```text id="w5m2kp"
Entity A
   │
   │ Relationship
   ▼
Entity B
```

En una database, estas relaciones normalmente se representan mediante **Foreign Keys**.

---

# 06.2 — CARDINALITY

## 2️⃣ 🔢 ¿QUÉ ES CARDINALITY?

La **cardinality (cardinalidad)** describe **cuántas instancias de una entidad pueden relacionarse con otra**.

Las relaciones principales son:

```text id="j4c7sy"
1 : 1
1 : N
N : M
```

Donde:

```text id="p9v2la"
1 = One
N = Many
M = Many
```

---

## 3️⃣ 1️⃣ 1:1 — ONE-TO-ONE

Significa:

```text id="r6k1mt"
1 entidad
   ↓
1 entidad
```

Ejemplo:

```text id="x8d3qw"
User
 │
 └── Profile
```

Un usuario puede tener un perfil y ese perfil pertenece a un único usuario.

```text id="v5n9hc"
1 User
   ↓
1 Profile
```

---

## 4️⃣ 🔗 1:N — ONE-TO-MANY

Significa:

```text id="a2s7jk"
1 entidad
   ↓
Many entidades
```

Ejemplo:

```text id="m4q8zp"
User
 │
 ├── Order
 ├── Order
 └── Order
```

Un usuario puede tener muchos pedidos.

Pero cada pedido pertenece a un usuario:

```text id="t6y1wv"
Order
   ↓
1 User
```

Esta es una de las relaciones más comunes en bases de datos.

---

## 5️⃣ 🔄 N:M — MANY-TO-MANY

Significa:

```text id="c9p3xl"
Many
  ↕
Many
```

Ejemplo:

```text id="h7v2qs"
Students
    ↕
Courses
```

Un estudiante puede tener muchos cursos.

Un curso puede tener muchos estudiantes.

Por eso:

```text id="d5m8ka"
N : M
```

---

# 06.3 — ONE-TO-ONE

## 6️⃣ 👤 ONE-TO-ONE

Ejemplo:

```text id="s3f9yn"
User
 │
 └── Profile
```

Conceptualmente:

```text id="k8w1rp"
User
  │
  │ 1
  ▼
Profile
  ▲
  │ 1
```

---

## 7️⃣ 🔑 FOREIGN KEY EN 1:1

Podemos colocar una Foreign Key en la tabla `profiles`:

```text id="q4x7mz"
users
------
id
```

```text id="e9v2lc"
profiles
--------
id
user_id → FK
```

Pero necesitamos garantizar que un usuario no pueda tener varios perfiles.

Por eso:

```text id="u6j3ps"
profiles.user_id
        ↓
    FK + UNIQUE
```

El `UNIQUE` hace que un mismo `user_id` no pueda aparecer varias veces.

```text id="b5r8kw"
profiles

id | user_id
---|--------
1  | 10
2  | 11
```

Pero:

```text id="n2y6vf"
id | user_id
---|--------
1  | 10
2  | 10 ❌
```

no sería válido si `user_id` tiene `UNIQUE`.

---

## 8️⃣ 🎯 ¿CUÁNDO UTILIZAR 1:1?

Una relación `1:1` puede utilizarse cuando una entidad tiene información adicional que se mantiene separada.

Por ejemplo:

```text id="m7x2qk"
users
   │
   └── profiles
```

La información básica del usuario está en `users` y la información adicional del perfil está en `profiles`.

---

# 06.4 — ONE-TO-MANY

## 9️⃣ 👤📦 ONE-TO-MANY

Ejemplo:

```text id="r5n8vp"
User
 │
 ├── Order
 ├── Order
 └── Order
```

Esto significa:

```text id="c3j6wy"
1 User
   ↓
Many Orders
```

Pero desde el otro lado:

```text id="t9k2fs"
1 Order
   ↓
1 User
```

Ambas afirmaciones describen la misma relación.

---

## 🔟 🔑 ¿DÓNDE VA LA FOREIGN KEY?

En una relación `1:N`, normalmente colocas la Foreign Key en el lado **many**.

```text id="h4q7mz"
users
------
id
```

```text id="v8p1nx"
orders
------
id
user_id → FK
```

Conceptualmente:

```text id="a6s3kd"
Users
   │
   │ 1
   │
   │ N
   ▼
Orders
```

La regla importante es:

> **En una relación One-to-Many, la Foreign Key normalmente se encuentra en el lado Many.**

---

# 06.5 — MANY-TO-MANY

## 1️⃣1️⃣ 🔄 MANY-TO-MANY

Ejemplo:

```text id="y2w9rc"
Students
    ↕
Courses
```

Un estudiante puede tener muchos cursos:

```text id="f6m3kp"
Student
   ├── Course A
   ├── Course B
   └── Course C
```

Y un curso puede tener muchos estudiantes:

```text id="n8x5vz"
Course
   ├── Student A
   ├── Student B
   └── Student C
```

Por eso:

```text id="q4j7sw"
N : M
```

---

## 1️⃣2️⃣ 🧩 JUNCTION TABLE

En una base de datos relacional, normalmente utilizamos una **tabla intermedia**.

```text id="k9v2mb"
students
courses
student_courses
```

La tabla intermedia:

```text id="p5r8tx"
student_courses

student_id
course_id
```

conecta ambas tablas:

```text id="w3f6ya"
Students
   │
   │
   ▼
student_courses
   ▲
   │
   │
Courses
```

---

## 1️⃣3️⃣ 🔗 FOREIGN KEYS EN LA JUNCTION TABLE

Cada columna referencia una tabla diferente:

```text id="s7n4qc"
student_courses

student_id → FK → students.id
course_id  → FK → courses.id
```

Conceptualmente:

```text id="e2m8vk"
students
   │
   │ 1
   ▼
student_courses
   ▲
   │ 1
   │
courses
```

La tabla intermedia permite representar la relación `N:M`.

---

## 1️⃣4️⃣ 🔑 COMPOSITE PRIMARY KEY

Normalmente podemos utilizar ambas Foreign Keys como una **Composite Primary Key**:

```sql id="z6t1pw"
PRIMARY KEY (
    student_id,
    course_id
)
```

Por ejemplo:

```text id="u4j9nx"
student_courses

student_id | course_id
-----------|----------
1          | 10
1          | 20
2          | 10
```

Esto evita registrar dos veces la misma relación:

```text id="c8q3mr"
student_id | course_id
-----------|----------
1          | 10
1          | 10 ❌
```

---
## 1️⃣5️⃣ 🏷️ JUNCTION / JOIN / ASSOCIATIVE TABLE

Una tabla intermedia para una relación `N:M` puede recibir diferentes nombres:

```text id="k4v8pq"
Junction Table
Join Table
Associative Table
```

En esencia, cumplen la misma función:

> **Representar una relación Many-to-Many mediante una tabla intermedia.**

---

# 06.6 — OPTIONAL VS REQUIRED RELATIONSHIPS

## 1️⃣6️⃣ ❓ OPTIONAL VS REQUIRED

Una relación puede ser:

```text id="s9m2tx"
Required
```

o:

```text id="c5w7hn"
Optional
```

### Required

La relación es obligatoria:

```text id="q8f3ka"
Order
  ↓
MUST have
  ↓
User
```

El pedido debe tener un usuario.

### Optional

La relación puede existir o no:

```text id="v1n6ry"
User
  ↓
MAY have
  ↓
Profile
```

El usuario puede tener un perfil, pero no necesariamente.

---

## 1️⃣7️⃣ 🔒 NULL Y NOT NULL

Esto se relaciona directamente con la Foreign Key.

Por ejemplo:

```text id="j3x9mv"
orders
------
user_id FK NOT NULL
```

significa que:

```text id="p6r2ws"
user_id
   ↓
Debe tener un valor
```

Por lo tanto:

```text id="h7k4qc"
Order
  ↓
MUST have
  ↓
User
```

Mientras que:

```text id="z5t8bn"
profiles
--------
user_id FK
```

si permite `NULL`, puede representar una relación opcional:

```text id="m2v9xf"
User
  ↓
MAY have
  ↓
Profile
```

---

# 06.7 — RELATIONSHIP DIRECTION

## 1️⃣8️⃣ 🔄 VISTA DESDE DIFERENTES LADOS

Una relación puede describirse desde cualquiera de las dos entidades.

Tenemos:

```text id="r4p7yk"
User
  ↓
Orders
```

Podemos decir:

> Un usuario tiene muchos pedidos.

Pero también:

```text id="w8n3qs"
Order
  ↓
User
```

Podemos decir:

> Un pedido pertenece a un usuario.

No son dos relaciones diferentes.

Es **la misma relación vista desde perspectivas diferentes**.

---

## 1️⃣9️⃣ 🧠 EJEMPLO

```text id="f6m1vz"
User
 │
 ├── Order 1
 ├── Order 2
 └── Order 3
```

Desde `User`:

```text id="a9c5jt"
User
  ↓
Many Orders
```

Desde `Order`:

```text id="x2q8mp"
Order
  ↓
One User
```

Por eso se llama:

```text id="n7v3sk"
One-to-Many
```

---

# 06.8 — FOREIGN KEYS + RELATIONSHIPS

## 2️⃣0️⃣ 🔗 CONECTANDO TODO

Ahora podemos pasar de una relación conceptual:

```text id="b5r9wh"
Users
   │
   │ 1
   │
   │ N
   ▼
Orders
```

a una estructura real de tablas.

### `users`

```text id="q3k7mx"
users
------
id PK
```

### `orders`

```text id="t8n2pv"
orders
------
id PK
user_id FK
```

La relación queda representada mediante:

```text id="m4s6yc"
orders.user_id
      ↓
users.id
```

---


## 2️⃣1️⃣ 🧩 DEL MODELO CONCEPTUAL AL MODELO DE TABLAS

El proceso mental es:

```text id="v8q2mx"
Relationship
      ↓
Cardinality
      ↓
¿Cómo se relacionan?
      ↓
Foreign Key
      ↓
Tables
```

Por ejemplo:

```text id="r5n9kc"
Concepto:

User 1 ───── N Orders
```

se convierte en:

```text id="m3x7qp"
users
------
id PK
```

```text id="j6t1ws"
orders
------
id PK
user_id FK
```

---

# 🧠 MODELO MENTAL

```text id="c4v8zn"
                RELATIONSHIPS
                      │
          ┌───────────┼───────────┐
          ▼           ▼           ▼
         1:1         1:N         N:M
          │           │           │
          ▼           ▼           ▼
        FK+UNIQUE     FK       Junction Table
                                  │
                                  ▼
                            Composite Key
```

Y recuerda:

```text id="p7k2ym"
1️⃣ 1:1
One → One

2️⃣ 1:N
One → Many
FK → lado Many

3️⃣ N:M
Many ↔ Many
Junction Table
```

### 🎯 IDEA CLAVE

> **Una Relationship describe cómo se conectan las entidades. La cardinalidad indica cuántos registros pueden participar en esa relación, y las Foreign Keys permiten llevar esa relación conceptual a la estructura real de las tablas.**
