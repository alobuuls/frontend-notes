# 🔑 PRIMARY KEYS

Una **Primary Key (clave primaria)** es una de las piezas fundamentales de una base de datos relacional.

Su función principal es **identificar de manera única cada registro de una tabla**.

---

# 📑 ÍNDICE — PRIMARY KEYS

- [🔑 PRIMARY KEYS](#-primary-keys)
- [📑 ÍNDICE — PRIMARY KEYS](#-índice--primary-keys)
- [🔑 PRIMARY KEY](#-primary-key)
  - [1️⃣ 🧠 ¿QUÉ ES UNA PRIMARY KEY?](#1️⃣--qué-es-una-primary-key)
  - [2️⃣ 🎯 ¿PARA QUÉ SIRVE?](#2️⃣--para-qué-sirve)
  - [3️⃣ 🆔 IDENTIFICACIÓN ÚNICA](#3️⃣--identificación-única)
  - [4️⃣ 🔢 UNICIDAD](#4️⃣--unicidad)
  - [5️⃣ 🛡️ INTEGRIDAD DE ENTIDAD](#5️⃣-️-integridad-de-entidad)
- [📌 CARACTERÍSTICAS](#-características)
  - [6️⃣ ✔️ IDENTIFICAR UN REGISTRO](#6️⃣-️-identificar-un-registro)
  - [7️⃣ 🔒 SER ÚNICA](#7️⃣--ser-única)
  - [8️⃣ 🚫 NO SER `NULL`](#8️⃣--no-ser-null)
- [🆔 TIPOS DE IDENTIFICADORES](#-tipos-de-identificadores)
  - [9️⃣ 🔢 INTEGER IDs](#9️⃣--integer-ids)
    - [✅ Ventajas](#-ventajas)
    - [⚠️ Consideración](#️-consideración)
  - [🔟 🔄 AUTO-INCREMENT IDs](#--auto-increment-ids)
  - [1️⃣1️⃣ 🆔 UUID](#1️⃣1️⃣--uuid)
    - [✅ Ventajas](#-ventajas-1)
    - [⚠️ Desventajas](#️-desventajas)
  - [1️⃣2️⃣ 🆚 INTEGER / AUTO-INCREMENT VS UUID](#1️⃣2️⃣--integer--auto-increment-vs-uuid)
- [🔗 COMPOSITE PRIMARY KEY](#-composite-primary-key)
  - [1️⃣3️⃣ 🧩 ¿QUÉ ES UNA COMPOSITE PRIMARY KEY?](#1️⃣3️⃣--qué-es-una-composite-primary-key)
  - [1️⃣4️⃣ 🧑‍🎓📚 EJEMPLO](#1️⃣4️⃣--ejemplo)
  - [1️⃣5️⃣ 🔗 MANY-TO-MANY](#1️⃣5️⃣--many-to-many)
- [🆚 PRIMARY KEY VS UNIQUE](#-primary-key-vs-unique)
  - [1️⃣6️⃣ 🔑 PRIMARY KEY](#1️⃣6️⃣--primary-key)
  - [1️⃣7️⃣ 🏷️ UNIQUE](#1️⃣7️⃣-️-unique)
  - [1️⃣8️⃣ 🆚 DIFERENCIA PRINCIPAL](#1️⃣8️⃣--diferencia-principal)
- [🧠 MODELO MENTAL](#-modelo-mental)
    - [🎯 IDEA CLAVE](#-idea-clave)

# 🔑 PRIMARY KEY

## 1️⃣ 🧠 ¿QUÉ ES UNA PRIMARY KEY?

Una **Primary Key** es una columna, o conjunto de columnas, utilizada para identificar de forma única cada `row` de una tabla.

Por ejemplo:

```text id="9s4yqk"
users

id ← PRIMARY KEY
```

```text id="l8a2v1"
id | name
---|------
1  | Ana
2  | Luis
3  | Pedro
```

Aquí:

```text id="v2d7kq"
id = 1 → Ana
id = 2 → Luis
id = 3 → Pedro
```

Cada usuario puede identificarse sin ambigüedad mediante su `id`.

---

## 2️⃣ 🎯 ¿PARA QUÉ SIRVE?

La Primary Key permite que la database pueda distinguir un registro de otro.

Sin una identificación única podríamos tener:

```text id="c5h9x0"
name
------
Ana
Ana
Luis
```

¿Cómo sabemos cuál `Ana` es cuál?

Una Primary Key resuelve ese problema:

```text id="2w8s3m"
id | name
---|------
1  | Ana
2  | Ana
3  | Luis
```

Aunque dos registros tengan el mismo nombre, sus IDs son diferentes.

---

## 3️⃣ 🆔 IDENTIFICACIÓN ÚNICA

La idea fundamental es:

```text id="r4b7z2"
Row
 ↓
Unique Identifier
 ↓
Primary Key
```

Por ejemplo:

```text id="m9x1kp"
users

id | name
---|------
1  | Ana
2  | Luis
3  | Pedro
```

Podemos decir:

```text id="q6v3nt"
User #1
User #2
User #3
```

Cada uno representa un registro diferente.

---

## 4️⃣ 🔢 UNICIDAD

Una Primary Key **debe ser única**.

No podemos tener:

```text id="e7k2pz"
id | name
---|------
1  | Ana
1  | Luis ❌
```

Porque dos registros estarían intentando utilizar el mismo identificador.

La regla es:

```text id="u3f8lm"
PRIMARY KEY
      ↓
   UNIQUE
```

---

## 5️⃣ 🛡️ INTEGRIDAD DE ENTIDAD

La **Entity Integrity** establece que cada registro de una tabla debe poder identificarse de manera única.

Por eso una Primary Key:

```text id="d1n6xs"
✔️ Identifica
✔️ Es única
✔️ No puede ser NULL
```

Esto garantiza que cada registro tenga una identidad propia dentro de la tabla.

---

# 📌 CARACTERÍSTICAS

## 6️⃣ ✔️ IDENTIFICAR UN REGISTRO

La Primary Key debe permitir identificar un registro específico.

```text id="h5v9qc"
users

id → PRIMARY KEY
```

```text id="t2k7rw"
id = 25
```

identifica un registro concreto.

---

## 7️⃣ 🔒 SER ÚNICA

No puede existir más de un registro con la misma Primary Key.

```text id="a8m4yx"
id
--
1
2
3
```

Correcto.

```text id="p6s1kv"
id
--
1
2
2 ❌
```

Incorrecto.

---

## 8️⃣ 🚫 NO SER `NULL`

Una Primary Key no puede tener `NULL`.

Incorrecto:

```text id="w3j8nf"
id | name
---|------
1  | Ana
NULL | Luis ❌
```

Esto tiene sentido porque:

```text id="z7c2mq"
NULL
 ↓
No identifier
```

y una Primary Key debe identificar al registro.

---

# 🆔 TIPOS DE IDENTIFICADORES

Existen diferentes estrategias para generar identificadores.

---


## 9️⃣ 🔢 INTEGER IDs

Una opción muy común es utilizar números enteros:

```text
1
2
3
4
5
```

Por ejemplo:

```text
users

id | name
---|------
1  | Ana
2  | Luis
3  | Pedro
```

### ✅ Ventajas

* 🧠 Simples de entender.
* ⚡ Fáciles de manejar.
* 📦 Ocupan relativamente poco espacio.
* 🔎 Son cómodos para trabajar con ellos.

### ⚠️ Consideración

Los IDs secuenciales pueden revelar información sobre el orden o cantidad aproximada de registros.

Por ejemplo:

```text
/users/100
```

permite inferir que existen IDs alrededor de ese número.

---

## 🔟 🔄 AUTO-INCREMENT IDs

Una variante común es utilizar un entero generado automáticamente.

Conceptualmente:

```text
INSERT
  ↓
Database genera ID
  ↓
1
2
3
4
```

Por ejemplo:

```text
users

id | name
---|------
1  | Ana
2  | Luis
3  | Pedro
```

No necesitas proporcionar manualmente el `id` cada vez.

La database se encarga de generar el siguiente identificador.

---

## 1️⃣1️⃣ 🆔 UUID

Otra opción es utilizar un **UUID (Universally Unique Identifier)**.

Por ejemplo:

```text
550e8400-e29b-41d4-a716-446655440000
```

En lugar de:

```text
1
2
3
```

podríamos tener:

```text
users

id
------------------------------------
550e8400-e29b-41d4-a716-446655440000
```

### ✅ Ventajas

* 🔐 Son difíciles de adivinar.
* 🌐 Son adecuados para sistemas distribuidos.
* 🆔 No dependen de una secuencia central.
* 🔀 Reducen la posibilidad de colisiones al generar IDs en diferentes sistemas.

### ⚠️ Desventajas

* 📏 Son mucho más largos que un integer.
* 🧠 Son menos fáciles de leer.
* 💾 Pueden ocupar más espacio.
* 🔎 Son menos cómodos de manejar manualmente.

---

## 1️⃣2️⃣ 🆚 INTEGER / AUTO-INCREMENT VS UUID

|                       | 🔢 Integer / Auto-increment | 🆔 UUID           |
| --------------------- | --------------------------- | ----------------- |
| Tamaño                | Menor                       | Mayor             |
| Lectura humana        | Fácil                       | Difícil           |
| Generación            | Secuencial                  | No secuencial     |
| Adivinable            | Sí                          | Mucho más difícil |
| Sistemas distribuidos | Menos conveniente           | Conveniente       |
| Simplicidad           | ⭐⭐⭐                         | ⭐⭐                |

No existe un identificador universalmente mejor.

La decisión depende de la aplicación y de sus necesidades.

---

# 🔗 COMPOSITE PRIMARY KEY

## 1️⃣3️⃣ 🧩 ¿QUÉ ES UNA COMPOSITE PRIMARY KEY?

Una Primary Key no necesariamente tiene que estar formada por **una sola columna**.

Puede estar formada por **varias columnas juntas**.

Por ejemplo:

```text
student_courses

student_id
course_id
```

Podemos definir:

```sql
PRIMARY KEY (
    student_id,
    course_id
)
```

La combinación de ambas columnas identifica de manera única el registro.

---

## 1️⃣4️⃣ 🧑‍🎓📚 EJEMPLO

Imagina:

```text
student_courses

student_id | course_id
-----------|----------
1          | 10
1          | 20
2          | 10
```

Aquí:

```text
student_id = 1
course_id  = 10
```

representa una combinación única.

Pero:

```text
student_id = 1
```

por sí solo **no es único**.

Y:

```text
course_id = 10
```

por sí solo tampoco.

La unicidad está en:

```text
student_id + course_id
```

Por eso:

```text
PRIMARY KEY (
    student_id,
    course_id
)
```

---


## 1️⃣5️⃣ 🔗 MANY-TO-MANY

Las Composite Primary Keys son especialmente importantes en relaciones **Many-to-Many**.

Por ejemplo:

```text id="j4p0xv"
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

La tabla intermedia puede tener:

```text id="w0j8qm"
student_id
course_id
```

y utilizar ambos como Primary Key:

```text id="n4s5qd"
student_courses

student_id | course_id
-----------|----------
1          | 10
1          | 20
2          | 10
```

Así evitamos registrar dos veces la misma combinación:

```text id="z7v2pc"
1 | 10
1 | 10 ❌
```

---

# 🆚 PRIMARY KEY VS UNIQUE

## 1️⃣6️⃣ 🔑 PRIMARY KEY

Una Primary Key:

```text id="v5g9nr"
✔️ Identifica el registro
✔️ Debe ser única
✔️ No puede ser NULL
```

Normalmente representa el **identificador principal** de la entidad.

Ejemplo:

```text id="h1w6kx"
id → PRIMARY KEY
```

---

## 1️⃣7️⃣ 🏷️ UNIQUE

`UNIQUE` también impone unicidad sobre una columna o conjunto de columnas.

Por ejemplo:

```text id="x3m8vs"
email → UNIQUE
```

Esto significa que no deberían existir dos usuarios con el mismo email.

```text id="r9c4ya"
id | email
---|----------------
1  | ana@mail.com
2  | luis@mail.com
```

Pero:

```text id="q6f2zt"
id | email
---|----------------
1  | ana@mail.com
2  | ana@mail.com ❌
```

no sería válido.

---

## 1️⃣8️⃣ 🆚 DIFERENCIA PRINCIPAL

```text id="k2p7mb"
users

id       → PRIMARY KEY
email    → UNIQUE
```

Puedes pensar:

```text id="a8n3rx"
🔑 PRIMARY KEY
      ↓
Identidad principal del registro

🏷️ UNIQUE
      ↓
Regla de unicidad para un dato
```

Una tabla tiene **una sola Primary Key**, aunque esa Primary Key pueda estar compuesta por varias columnas.

Una tabla puede tener **múltiples restricciones** **`UNIQUE`**.

---

# 🧠 MODELO MENTAL

```text id="y4s9qk"
                    🗄️ TABLE
                       │
                       ▼
                 🔑 PRIMARY KEY
                       │
            ┌──────────┼──────────┐
            ▼          ▼          ▼
         Única      NOT NULL   Identifica
            │
            ▼
        Cada ROW
```

Y recuerda:

```text id="e6j1tw"
🔑 PRIMARY KEY
↓
Identidad del registro

🏷️ UNIQUE
↓
Evita valores duplicados
```

### 🎯 IDEA CLAVE

> **Una Primary Key identifica de forma única cada registro de una tabla. Debe ser única y no puede ser** **`NULL`****. Puede utilizar un** **`INTEGER`****, un identificador auto-incremental, un** **`UUID`** **o estar formada por varias columnas mediante una Composite Primary Key.**
