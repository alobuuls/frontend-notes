# 📄 CONSTRAINTS

Las **Constraints** son reglas que la database utiliza para **controlar y proteger la integridad de los datos**.

La idea principal es:

```text
Datos
  ↓
Constraints
  ↓
¿Cumplen las reglas?
  ↓
Sí → ✅ Se permiten
No → ❌ Se rechazan
```

---

# 📑 ÍNDICE 

- [📄 CONSTRAINTS](#-constraints)
- [📑 ÍNDICE](#-índice)
  - [1️⃣ 🧠 ¿QUÉ ES UNA CONSTRAINT?](#1️⃣--qué-es-una-constraint)
  - [2️⃣ 🔑 PRIMARY KEY](#2️⃣--primary-key)
  - [3️⃣ 🔗 FOREIGN KEY](#3️⃣--foreign-key)
  - [4️⃣ 🆔 UNIQUE](#4️⃣--unique)
  - [5️⃣ 🚫 NOT NULL](#5️⃣--not-null)
  - [6️⃣ ✅ CHECK](#6️⃣--check)
  - [7️⃣ ⚙️ DEFAULT](#7️⃣-️-default)
- [8️⃣ 🛡️ REFERENTIAL INTEGRITY](#8️⃣-️-referential-integrity)
- [9️⃣ 🗑️ ON DELETE](#9️⃣-️-on-delete)
    - [CASCADE](#cascade)
    - [SET NULL](#set-null)
    - [RESTRICT](#restrict)
- [🔟 ✏️ ON UPDATE](#-️-on-update)
- [🧩 EJEMPLO](#-ejemplo)
- [🛡️ DATABASE COMO CAPA DE PROTECCIÓN](#️-database-como-capa-de-protección)

## 1️⃣ 🧠 ¿QUÉ ES UNA CONSTRAINT?

Una **Constraint** es una regla definida sobre una tabla o columna que limita qué datos pueden almacenarse.

Por ejemplo:

```sql
email VARCHAR(255) UNIQUE NOT NULL
```

Aquí existen dos constraints:

```text
UNIQUE
NOT NULL
```

La database se encarga de hacer cumplir esas reglas.

---

## 2️⃣ 🔑 PRIMARY KEY

Una **PRIMARY KEY** identifica de manera única cada registro.

```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY
);
```

Una Primary Key garantiza que:

```text
✔️ El valor sea único
✔️ No sea NULL
```

Ejemplo:

```text
id
---
1
2
3
```

No podrías tener:

```text
1
1 ❌
```

ni:

```text
NULL ❌
```

---

## 3️⃣ 🔗 FOREIGN KEY

Una **FOREIGN KEY** establece una referencia entre tablas.

Por ejemplo:

```sql
user_id INTEGER REFERENCES users(id)
```

Esto significa:

```text
orders.user_id
      ↓
users.id
```

La Foreign Key ayuda a garantizar la **referential integrity**.

Por ejemplo, si no existe:

```text
users.id = 999
```

la database puede impedir:

```text
orders.user_id = 999
```

---

## 4️⃣ 🆔 UNIQUE

`UNIQUE` garantiza que los valores de una columna no se repitan.

Por ejemplo:

```sql
email VARCHAR(255) UNIQUE
```

Esto permite:

```text
ana@mail.com
luis@mail.com
pedro@mail.com
```

pero no:

```text
ana@mail.com
ana@mail.com ❌
```

Es común utilizarlo para datos que deben ser únicos, como un email.

---

## 5️⃣ 🚫 NOT NULL

`NOT NULL` indica que una columna debe tener un valor.

Por ejemplo:

```sql
name VARCHAR(100) NOT NULL
```

Esto significa que:

```text
name = 'Ana' ✅
```

pero:

```text
name = NULL ❌
```

no está permitido.

---

## 6️⃣ ✅ CHECK

`CHECK` permite definir una condición que los valores deben cumplir.

Por ejemplo:

```sql
age INTEGER CHECK (age >= 18)
```

Entonces:

```text
age = 20  → ✅
age = 18  → ✅
age = 15  → ❌
```

La database rechaza los valores que no cumplen la condición.

---

## 7️⃣ ⚙️ DEFAULT

`DEFAULT` define un valor que se utilizará automáticamente cuando no se proporcione uno.

Por ejemplo:

```sql
is_active BOOLEAN DEFAULT TRUE
```

Si insertas:

```sql
INSERT INTO users (name)
VALUES ('Ana');
```

la database puede asignar automáticamente:

```text
is_active
    ↓
TRUE
```

---

# 8️⃣ 🛡️ REFERENTIAL INTEGRITY

La **Referential Integrity** garantiza que las referencias entre tablas sean válidas.

Por ejemplo:

```text
users
------
id
```

```text
orders
-------
user_id
```

con:

```text
orders.user_id
      ↓
users.id
```

Si un `user_id` apunta a un usuario que no existe, la Foreign Key puede impedir la operación.

La idea es:

```text
Foreign Key
     ↓
Referencia válida
     ↓
Integridad referencial
```

---

# 9️⃣ 🗑️ ON DELETE

`ON DELETE` define qué ocurre con los registros relacionados cuando se elimina el registro referenciado.

Por ejemplo:

```text
User
 │
 └── Orders
```

Si eliminas el usuario, puedes definir diferentes comportamientos.

### CASCADE

```sql
ON DELETE CASCADE
```

Al eliminar el registro padre, también se eliminan los registros relacionados.

```text
User ❌
 │
 └── Orders ❌
```

---

### SET NULL

```sql
ON DELETE SET NULL
```

Al eliminar el registro padre, la Foreign Key relacionada se establece como `NULL`.

```text
User ❌
 │
 └── Order
      user_id → NULL
```

Esto requiere que la columna pueda aceptar `NULL`.

---

### RESTRICT

```sql
ON DELETE RESTRICT
```

Impide eliminar el registro padre mientras existan registros relacionados.

```text
User
 │
 └── Orders
      ↓
❌ No se puede eliminar User
```

---

# 🔟 ✏️ ON UPDATE

`ON UPDATE` define qué ocurre cuando cambia el valor referenciado por una Foreign Key.

Por ejemplo:

```sql
ON UPDATE CASCADE
```

Si cambia el valor de la clave referenciada, el cambio puede propagarse a las Foreign Keys relacionadas.

Conceptualmente:

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

# 🧩 EJEMPLO

Una tabla puede utilizar varias constraints simultáneamente:

```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    age INTEGER CHECK (age >= 18),
    is_active BOOLEAN DEFAULT TRUE
);
```

Aquí:

```text
id
↓
PRIMARY KEY

email
↓
UNIQUE + NOT NULL

age
↓
CHECK

is_active
↓
DEFAULT
```

Y una relación podría ser:

```sql
user_id INTEGER REFERENCES users(id)
```

---

# 🛡️ DATABASE COMO CAPA DE PROTECCIÓN

Las constraints son importantes porque la integridad de los datos **no debe depender exclusivamente del backend**.

Por ejemplo:

```text
Backend
   ↓
❌ Bug
   ↓
Database
   ↓
🛡️ Constraints
   ↓
❌ Dato inválido rechazado
```

Por eso:

> **La database también protege los datos mediante constraints.**
