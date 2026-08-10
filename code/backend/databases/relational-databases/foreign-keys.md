# 🔗 FOREIGN KEYS

Las **Foreign Keys (FK)** son las que permiten conectar registros de diferentes tablas y mantener la **integridad de esas relaciones**.

La idea principal es:

```text id="m5y7sx"
Table A
   │
   │ Primary Key
   ▼
Table B
   │
   └── Foreign Key
```

---

## 📑 ÍNDICE

- [🔗 FOREIGN KEYS](#-foreign-keys)
  - [📑 ÍNDICE](#-índice)
- [🔗 FOREIGN KEY](#-foreign-key)
  - [1️⃣ 🧠 ¿QUÉ ES UNA FOREIGN KEY?](#1️⃣--qué-es-una-foreign-key)
  - [2️⃣ 🎯 ¿PARA QUÉ SIRVE?](#2️⃣--para-qué-sirve)
  - [3️⃣ 🔗 CÓMO REFERENCIA OTRA TABLA](#3️⃣--cómo-referencia-otra-tabla)
  - [4️⃣ 🧩 RELACIÓN ENTRE TABLAS](#4️⃣--relación-entre-tablas)
- [🧠 REFERENCED VS REFERENCING](#-referenced-vs-referencing)
  - [5️⃣ 📌 REFERENCED TABLE](#5️⃣--referenced-table)
  - [6️⃣ 🔗 REFERENCING TABLE](#6️⃣--referencing-table)
  - [7️⃣ 🧠 ¿QUIÉN REFERENCIA A QUIÉN?](#7️⃣--quién-referencia-a-quién)
- [🔐 REFERENTIAL INTEGRITY](#-referential-integrity)
  - [8️⃣ 🛡️ ¿QUÉ ES REFERENTIAL INTEGRITY?](#8️⃣-️-qué-es-referential-integrity)
  - [9️⃣ 🚫 REFERENCIA INVÁLIDA](#9️⃣--referencia-inválida)
    - [🎯 Idea fundamental](#-idea-fundamental)
- [🗑️ ON DELETE](#️-on-delete)
  - [🔟 🗑️ ¿QUÉ PASA AL ELIMINAR UN REGISTRO?](#-️-qué-pasa-al-eliminar-un-registro)
  - [1️⃣1️⃣ 💥 ON DELETE CASCADE](#1️⃣1️⃣--on-delete-cascade)
  - [1️⃣2️⃣ 🔄 ON DELETE SET NULL](#1️⃣2️⃣--on-delete-set-null)
  - [1️⃣3️⃣ 🚫 ON DELETE RESTRICT](#1️⃣3️⃣--on-delete-restrict)
  - [1️⃣4️⃣ 🛑 ON DELETE NO ACTION](#1️⃣4️⃣--on-delete-no-action)
  - [1️⃣5️⃣ 🆚 ON DELETE](#1️⃣5️⃣--on-delete)
- [✏️ ON UPDATE](#️-on-update)
  - [1️⃣6️⃣ 🔄 ¿QUÉ ES `ON UPDATE`?](#1️⃣6️⃣--qué-es-on-update)
  - [1️⃣7️⃣ 🔄 ON UPDATE CASCADE](#1️⃣7️⃣--on-update-cascade)
  - [1️⃣8️⃣ 🧩 OTRAS OPCIONES DE `ON UPDATE`](#1️⃣8️⃣--otras-opciones-de-on-update)
- [🧠 MODELO MENTAL](#-modelo-mental)
    - [🎯 IDEA CLAVE](#-idea-clave)

# 🔗 FOREIGN KEY

## 1️⃣ 🧠 ¿QUÉ ES UNA FOREIGN KEY?

Una **Foreign Key** es una columna, o conjunto de columnas, que **referencia una clave de otra tabla**.

Por ejemplo:

```text id="z2n8vq"
users
---------
id
name
```

y:

```text id="q7p4kc"
orders
---------
id
user_id ← FOREIGN KEY
total
```

Aquí:

```text id="w6s1jf"
users.id
   ▲
   │
   │ references
   │
orders.user_id
```

`orders.user_id` guarda el identificador del usuario al que pertenece esa orden.

---

## 2️⃣ 🎯 ¿PARA QUÉ SIRVE?

Una Foreign Key sirve principalmente para:

```text id="c9r5mt"
🔗 Conectar tablas
🛡️ Mantener integridad referencial
📌 Representar relaciones entre datos
```

Por ejemplo:

```text id="x4k7ps"
users
   │
   │ id
   ▼
orders.user_id
```

Esto permite expresar:

> Esta orden pertenece a este usuario.

---

## 3️⃣ 🔗 CÓMO REFERENCIA OTRA TABLA

Una Foreign Key normalmente referencia una **Primary Key** de otra tabla.

```text id="f2m8ya"
users
┌────┬────────┐
│ id │ name   │
├────┼────────┤
│ 1  │ Ana    │
│ 2  │ Luis   │
└────┴────────┘
```

```text id="n6v3qd"
orders
┌────┬─────────┬───────┐
│ id │ user_id │ total │
├────┼─────────┼───────┤
│ 10 │ 1       │ 50.00 │
│ 11 │ 1       │ 25.00 │
│ 12 │ 2       │ 80.00 │
└────┴─────────┴───────┘
```

La relación es:

```text id="t8w1hx"
orders.user_id
      ↓
users.id
```

Por lo tanto:

```text id="b3p6zn"
Order 10 → Ana
Order 11 → Ana
Order 12 → Luis
```

---

## 4️⃣ 🧩 RELACIÓN ENTRE TABLAS

Las Foreign Keys permiten representar relaciones como:

```text id="r5q9vk"
users
  │
  │ id
  ▼
orders
```

Un usuario puede tener varias órdenes:

```text id="s7j2lm"
Ana
 │
 ├── Order 10
 ├── Order 11
 └── Order 15
```

La FK permite que la database conozca esa conexión.

---

# 🧠 REFERENCED VS REFERENCING

## 5️⃣ 📌 REFERENCED TABLE

La tabla que contiene la clave que está siendo referenciada se llama **referenced table**.

En nuestro ejemplo:

```text id="v4n8cx"
users
  │
  └── id
```

es la:

```text id="k1y6pm"
Referenced Table
```

Porque `users.id` es el valor al que apunta la Foreign Key.

---

## 6️⃣ 🔗 REFERENCING TABLE

La tabla que contiene la Foreign Key se llama **referencing table**.

En nuestro ejemplo:

```text id="d9w3qs"
orders
  │
  └── user_id
```

es la:

```text id="p5h7rt"
Referencing Table
```

porque `orders.user_id` referencia a `users.id`.

---

## 7️⃣ 🧠 ¿QUIÉN REFERENCIA A QUIÉN?

Recuerda:

```text id="m2k7vx"
users
  │
  │ id
  ▼
orders.user_id
```

Por lo tanto:

```text id="n8p4qs"
users
→ Referenced table

orders
→ Referencing table
```

Y:

```text id="c5w9jt"
users.id
→ Referenced key

orders.user_id
→ Foreign key
```

---

# 🔐 REFERENTIAL INTEGRITY

## 8️⃣ 🛡️ ¿QUÉ ES REFERENTIAL INTEGRITY?

La **Referential Integrity (integridad referencial)** garantiza que las referencias entre tablas sean válidas.

Por ejemplo:

```text id="r3f6ka"
users
---------
id
1
2
3
```

Entonces esto es válido:

```text id="v7q2lm"
orders
---------
user_id
1
2
3
```

Pero esto:

```text id="x4j8ps"
orders
---------
user_id
999
```

sería inválido si:

```text id="b6n1wd"
users.id = 999
```

no existe.

La Foreign Key puede impedir que se cree esa referencia inválida.

---

## 9️⃣ 🚫 REFERENCIA INVÁLIDA

Imagina:

```text id="k9s3hy"
users

id
--
1
2
3
```

Intentamos insertar:

```text id="q5m7zn"
orders

id | user_id
---|--------
10 | 999
```

Pero:

```text id="t8v2cx"
users.id
```

no contiene:

```text id="p4r6jk"
999
```

Por lo tanto, la Foreign Key puede impedir la operación.

```text id="w1d5qs"
orders.user_id = 999
          ↓
¿Existe users.id = 999?
          ↓
         ❌ NO
          ↓
Referencia inválida
```

### 🎯 Idea fundamental

> **Una FK ayuda a garantizar que una referencia apunte a un registro válido.**

---

# 🗑️ ON DELETE

## 🔟 🗑️ ¿QUÉ PASA AL ELIMINAR UN REGISTRO?

Aquí aparece un problema importante.

Tenemos:

```text id="z6h3mp"
User
 │
 └── Orders
```

Supongamos:

```text id="a9k2xr"
User #1
   │
   ├── Order #10
   ├── Order #11
   └── Order #12
```

¿Qué debería pasar con las órdenes si eliminamos al usuario?

Ahí entra:

```text id="f7q1nv"
ON DELETE
```

---

## 1️⃣1️⃣ 💥 ON DELETE CASCADE

```text id="s4m8yc"
ON DELETE CASCADE
```

Significa que al eliminar el registro referenciado, los registros relacionados también se eliminan.

```text id="j3v6pt"
Delete User #1
      ↓
Orders of User #1
      ↓
Delete
```

Conceptualmente:

```text id="r8n2kw"
User
 │
 ├── Order
 ├── Order
 └── Order
      ↓
User deleted
      ↓
Orders deleted
```

Es útil cuando los registros relacionados **no tienen sentido sin el registro principal**.

---

## 1️⃣2️⃣ 🔄 ON DELETE SET NULL

```text
ON DELETE SET NULL
```

Al eliminar el registro referenciado, la Foreign Key de los registros relacionados se establece en `NULL`.

```text
User #1
   ↓
DELETE
   ↓
orders.user_id
   ↓
NULL
```

Por ejemplo:

```text
Antes:

order_id | user_id
---------|--------
10       | 1
11       | 1
```

Después:

```text
order_id | user_id
---------|--------
10       | NULL
11       | NULL
```

Esto requiere que la Foreign Key pueda aceptar `NULL`.

---

## 1️⃣3️⃣ 🚫 ON DELETE RESTRICT

```text
ON DELETE RESTRICT
```

Impide eliminar el registro referenciado si existen registros que dependen de él.

Por ejemplo:

```text
User #1
   │
   └── Order #10
```

Intentamos:

```text
DELETE User #1
```

La database responde conceptualmente:

```text
❌ No puedes eliminar este usuario
   porque existen órdenes relacionadas.
```

---

## 1️⃣4️⃣ 🛑 ON DELETE NO ACTION

```text
ON DELETE NO ACTION
```

También impide que la operación deje referencias inválidas.

Es importante saber que el comportamiento exacto y el momento en que se comprueba la restricción pueden depender del RDBMS y de cómo maneje las constraints.

Para tu modelo mental inicial:

```text
NO ACTION
   ↓
No permitir que la operación
viole la integridad referencial
```

---

## 1️⃣5️⃣ 🆚 ON DELETE

| Comportamiento | ¿Qué ocurre?                                           |
| -------------- | ------------------------------------------------------ |
| `CASCADE`      | Elimina los registros relacionados                     |
| `SET NULL`     | Establece la FK en `NULL`                              |
| `RESTRICT`     | Impide eliminar si existen referencias                 |
| `NO ACTION`    | Evita que la operación viole la integridad referencial |

No necesitas memorizar todas inmediatamente.

Primero entiende **qué problema resuelve** **`ON DELETE`**:

> Define qué debe hacer la database con los registros relacionados cuando se elimina el registro referenciado.

---

# ✏️ ON UPDATE

## 1️⃣6️⃣ 🔄 ¿QUÉ ES `ON UPDATE`?

`ON UPDATE` define qué ocurre con los registros relacionados cuando cambia el valor referenciado por una Foreign Key.

Por ejemplo:

```text
users.id
   ↓
orders.user_id
```

Si cambia el valor de la clave referenciada, puede definirse cómo debe reaccionar la FK.

---

## 1️⃣7️⃣ 🔄 ON UPDATE CASCADE

```text
ON UPDATE CASCADE
```

Significa que el cambio se propaga a las Foreign Keys relacionadas.

Conceptualmente:

```text
users.id
   ↓
Cambio de valor
   ↓
orders.user_id
   ↓
Se actualiza
```

Por ejemplo:

```text
Antes:

users.id = 10

orders.user_id = 10
```

Si el valor referenciado cambia:

```text
users.id = 20
```

con `ON UPDATE CASCADE`:

```text
orders.user_id = 20
```

---

## 1️⃣8️⃣ 🧩 OTRAS OPCIONES DE `ON UPDATE`

Al igual que con `ON DELETE`, existen diferentes comportamientos para `ON UPDATE`, dependiendo del RDBMS:

```text
CASCADE
SET NULL
RESTRICT
NO ACTION
```

No necesitas memorizar todos todavía.

Lo importante es entender que:

```text
ON DELETE
    ↓
¿Qué ocurre cuando se elimina
el registro referenciado?

ON UPDATE
    ↓
¿Qué ocurre cuando cambia
el valor referenciado?
```

---

# 🧠 MODELO MENTAL

Quédate con esta relación:

```text
        🔑 PRIMARY KEY
             │
             │ referenced
             ▼
          users.id
             ▲
             │
             │ FOREIGN KEY
             │
       orders.user_id
```

Y con:

```text
🗄️ Referenced Table
        ↓
      users

🔗 Referencing Table
        ↓
      orders
```

Finalmente:

```text
🔐 Referential Integrity
        ↓
Las referencias deben ser válidas

🗑️ ON DELETE
        ↓
¿Qué pasa al eliminar?

✏️ ON UPDATE
        ↓
¿Qué pasa al actualizar?
```

### 🎯 IDEA CLAVE

> **Una Foreign Key conecta una tabla con otra mediante una referencia a una clave válida. Esto permite mantener la integridad referencial y definir qué sucede con las relaciones cuando se eliminan o actualizan registros.**

