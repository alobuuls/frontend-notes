# 📄 PostgreSQL Relationships

PostgreSQL implementa las relaciones entre tablas principalmente mediante **Foreign Keys**. Estas permiten conectar registros de diferentes tablas y mantener la **integridad referencial**.

---

## 📑 Índice

- [📄 PostgreSQL Relationships](#-postgresql-relationships)
  - [📑 Índice](#-índice)
  - [1️⃣ One-to-One](#1️⃣-one-to-one)
  - [2️⃣ One-to-Many](#2️⃣-one-to-many)
  - [3️⃣ Many-to-Many](#3️⃣-many-to-many)
  - [🔗 4️⃣ Foreign Keys](#-4️⃣-foreign-keys)
  - [🛡️ 5️⃣ Referential Integrity](#️-5️⃣-referential-integrity)
  - [🗑️ 6️⃣ ON DELETE](#️-6️⃣-on-delete)
    - [CASCADE](#cascade)
    - [SET NULL](#set-null)
    - [RESTRICT](#restrict)
    - [NO ACTION](#no-action)
- [🔄 7️⃣ ON UPDATE](#-7️⃣-on-update)
- [🔗 8️⃣ Cascading](#-8️⃣-cascading)
- [🔄 Many-to-Many en PostgreSQL](#-many-to-many-en-postgresql)

## 1️⃣ One-to-One

Una relación **One-to-One (1:1)** significa que un registro de una tabla se relaciona con un único registro de otra tabla.

Por ejemplo:

```text id="0xq3c9"
users
  │
  │ 1
  ▼
profiles
  │
  │ 1
```

Un usuario puede tener un perfil y ese perfil pertenece a un usuario.

En PostgreSQL, esta relación puede implementarse mediante una `FOREIGN KEY` acompañada de `UNIQUE`.

---

## 2️⃣ One-to-Many

Una relación **One-to-Many (1:N)** significa que un registro puede estar relacionado con muchos registros de otra tabla.

Por ejemplo:

```text id="z0f0rc"
users
  │
  │ 1
  ▼
orders
  │
  │ N
```

Un usuario puede tener muchas órdenes.

Normalmente, la Foreign Key se coloca en el lado **many**:

```text id="n9e5jz"
users
------
id

orders
------
id
user_id
```

Donde:

```text id="g0a7ot"
orders.user_id
       ↓
users.id
```

---

## 3️⃣ Many-to-Many

Una relación **Many-to-Many (N:M)** ocurre cuando muchos registros de una tabla pueden relacionarse con muchos registros de otra.

Por ejemplo:

```text id="8g08qx"
students
    ↕
courses
```

Un estudiante puede tener muchos cursos y un curso puede tener muchos estudiantes.

En PostgreSQL se implementa mediante una **tabla intermedia**:

```text id="m52sj0"
students
courses
    ↓
student_courses
```

La tabla intermedia contiene las Foreign Keys:

```text id="7o0b2b"
student_courses
---------------
student_id
course_id
```

---

## 🔗 4️⃣ Foreign Keys

Una **Foreign Key** permite que una columna de una tabla haga referencia a una columna de otra tabla.

Se define mediante:

```sql id="2s4z7u"
REFERENCES
```

Por ejemplo:

```sql id="xq8t6g"
user_id INTEGER REFERENCES users(id)
```

Esto establece que `user_id` referencia a `users.id`.

Conceptualmente:

```text id="n8f6ab"
orders
   │
   │ user_id
   ▼
users.id
```

La Foreign Key ayuda a garantizar la **integridad referencial**.

---

## 🛡️ 5️⃣ Referential Integrity

La **integridad referencial** garantiza que una Foreign Key haga referencia a un registro válido.

Por ejemplo:

```text id="5s4d2e"
users
-----
id
1
2
3
```

Si:

```text id="v6c6e8"
orders.user_id = 2
```

la referencia es válida porque `users.id = 2` existe.

Pero si:

```text id="c2l9pp"
orders.user_id = 999
```

y `users.id = 999` no existe, la Foreign Key puede impedir esa operación.

---

## 🗑️ 6️⃣ ON DELETE

`ON DELETE` define qué ocurre con los registros relacionados cuando se elimina el registro al que apunta una Foreign Key.

Por ejemplo:

```text id="w5e5j4"
User
 │
 └── Orders
```

Si eliminamos el usuario, PostgreSQL necesita saber qué hacer con sus órdenes.

### CASCADE

```sql id="rq0y4g"
ON DELETE CASCADE
```

Al eliminar el registro padre, también se eliminan los registros relacionados.

```text id="4xw4d5"
User ❌
  ↓
Orders ❌
```

### SET NULL

```sql id="l6z6lq"
ON DELETE SET NULL
```

Al eliminar el registro padre, la Foreign Key de los registros relacionados se establece en `NULL`.

```text id="1i1r8a"
User ❌
  ↓
Order
user_id → NULL
```

La columna debe permitir `NULL`.

### RESTRICT

```sql id="0ym3ga"
ON DELETE RESTRICT
```

Impide eliminar el registro padre mientras existan registros relacionados.

```text id="j7m8s8"
User
  ↓
Orders
  ↓
❌ No se puede eliminar User
```

### NO ACTION

```sql id="82a4mt"
ON DELETE NO ACTION
```

Impide que la eliminación deje una referencia inválida cuando la restricción sea comprobada.

Es el comportamiento predeterminado de PostgreSQL para una Foreign Key si no especificas otra acción.

---

# 🔄 7️⃣ ON UPDATE

`ON UPDATE` define qué ocurre cuando cambia el valor al que apunta una Foreign Key.

Por ejemplo:

```sql
ON UPDATE CASCADE
```

Si cambia el valor referenciado, PostgreSQL puede actualizar automáticamente los valores correspondientes en las tablas relacionadas.

```text
users.id
   ↓
cambia
   ↓
orders.user_id
   ↓
se actualiza
```

---

# 🔗 8️⃣ Cascading

**Cascading** significa que una operación realizada sobre un registro puede propagarse automáticamente a los registros relacionados.

Por ejemplo:

```sql
ON DELETE CASCADE
```

hace que la eliminación del registro padre se propague a los registros relacionados.

```text
User
 │
 ├── Order
 ├── Order
 └── Order
      ↓
DELETE User
      ↓
DELETE Orders
```

---

# 🔄 Many-to-Many en PostgreSQL

La relación:

```text
students
courses
```

se convierte en:

```text
students
courses
    ↓
student_courses
```

La tabla intermedia contiene:

```text
student_courses
---------------
student_id
course_id
```

Y ambas columnas funcionan como Foreign Keys:

```text
student_id → students.id
course_id  → courses.id
```

Conceptualmente:

```text
Students
   │
   │ 1
   ▼
StudentCourses
   ▲
   │ N
   │
Courses
```

Así PostgreSQL puede representar correctamente una relación **Many-to-Many**.
