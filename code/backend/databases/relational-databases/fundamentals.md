# 🗄️ 01 — RELATIONAL DATABASES

Las **Relational Databases** son la base de gran parte del desarrollo backend. Antes de aprender SQL, es importante entender cómo organizan los datos y qué significa realmente que una base de datos sea *relacional*.

---

## 📑 ÍNDICE — RELATIONAL DATABASES

1. [🧠 ¿Qué es una Base de Datos Relacional?](#1-🧠-qué-es-una-base-de-datos-relacional)
2. [🔗 ¿Qué significa Relational?](#2-🔗-qué-significa-relational)
3. [🖥️ ¿Qué es un RDBMS?](#3-🖥️-qué-es-un-rdbms)
4. [🆚 Database vs DBMS / RDBMS](#4-🆚-database-vs-dbms--rdbms)
5. [⚙️ Características de una Base de Datos Relacional](#5-⚙️-características-de-una-base-de-datos-relacional)
6. [🧩 Modelo Relacional](#6-🧩-modelo-relacional)
7. [📐 Datos Estructurados](#7-📐-datos-estructurados)
8. [🧱 Schema](#8-🧱-schema)

## 🧩 ESTRUCTURA

9. [🗄️ Database](#9-🗄️-database)
10. [📐 Schema](#10-📐-schema)
11. [📊 Table](#11-📊-table)
12. [🧾 Row](#12-🧾-row)
13. [🏷️ Column](#13-🏷️-column)
14. [🔗 Relationship](#14-🔗-relationship)

## 🧠 ESTRUCTURA COMPLETA

* RDBMS
* Database
* Schema
* Tables
* Columns
* Rows
* Relationships

## 🆚 COMPARACIONES

15. [🟦 Relational vs Non-Relational](#15-🟦-relational-vs-non-relational)
16. [🔎 SQL vs NoSQL](#16-🔎-sql-vs-nosql)
17. [🖥️ RDBMS vs NoSQL Database](#17-🖥️-rdbms-vs-nosql-database)
18. [🤔 ¿Cuándo utilizar una Base Relacional?](#18-🤔-cuándo-utilizar-una-base-relacional)

## 🛠️ RDBMS POPULARES

* 🐘 PostgreSQL
* 🐬 MySQL
* 🦭 MariaDB
* 🪟 SQL Server
* 🟠 Oracle Database
* 🪶 SQLite

### 🎯 Para estudiar

* Relational Database
* SQL
* PostgreSQL
* PostgreSQL-specific features


## 📘 CONCEPTOS FUNDAMENTALES

### 1️⃣ 🧠 ¿QUÉ ES UNA BASE DE DATOS RELACIONAL?

Una **base de datos relacional** es una base de datos que organiza la información principalmente en **tablas** y permite establecer **relaciones entre los datos**.

```text
Database
│
├── users
├── products
└── orders
```

Cada tabla contiene información sobre una determinada entidad.

```text
users
┌────┬─────────┬─────────────────┐
│ id │ name    │ email           │
├────┼─────────┼─────────────────┤
│ 1  │ Ana     │ ana@email.com   │
│ 2  │ Carlos  │ carlos@email.com│
└────┴─────────┴─────────────────┘
```

La información se organiza mediante:

```text
Table
  ↓
Rows
  ↓
Columns
```

---

### 2️⃣ 🔗 ¿QUÉ SIGNIFICA *RELATIONAL*?

**Relational** significa que los datos pueden estar **relacionados entre diferentes tablas**.

Por ejemplo:

```text
USERS
  │
  │ user_id
  ▼
ORDERS
```

Un usuario puede tener varios pedidos:

```text
Ana
 │
 ├── Order #1
 ├── Order #2
 └── Order #3
```

Las tablas no necesitan almacenar toda la información juntas.

En lugar de:

```text
Order
├── user_name
├── user_email
├── product
└── price
```

podemos tener:

```text
Users
Orders
Products
```

y relacionarlas mediante identificadores.

---

### 3️⃣ 🖥️ ¿QUÉ ES UN RDBMS?

**RDBMS** significa:

> **Relational Database Management System**

Es el software que permite **crear, administrar y trabajar con bases de datos relacionales**.

Conceptualmente:

```text
Application
     ↓
   RDBMS
     ↓
Database
```

El RDBMS se encarga de proporcionar mecanismos para:

* 📊 Gestionar tablas.
* 🔎 Ejecutar consultas.
* 🔗 Gestionar relaciones.
* 🔐 Controlar permisos.
* 🔄 Gestionar transacciones.
* 🛡️ Mantener la integridad de los datos.

**Ejemplos:**

```text
PostgreSQL
MySQL
MariaDB
SQL Server
Oracle
SQLite
```

---

### 4️⃣ 🆚 DATABASE VS DBMS / RDBMS

Es importante no confundirlos:

| Concepto         | Significado                                                        |
| ---------------- | ------------------------------------------------------------------ |
| 🗄️ **Database** | Los datos y su estructura organizada.                              |
| 🛠️ **DBMS**     | El software utilizado para administrar una database.               |
| 🛠️ **RDBMS**    | Un DBMS diseñado específicamente para bases de datos relacionales. |

Conceptualmente:

```text
🖥️ Application
       ↓
   🛠️ RDBMS
       ↓
 🗄️ Database
       ↓
    📊 Data
```

Por ejemplo, **PostgreSQL** es un RDBMS que puede administrar una database.

---

### 5️⃣ ⚙️ CARACTERÍSTICAS DE UNA BASE DE DATOS RELACIONAL

Las principales características son:

#### 📊 Datos estructurados

Los datos siguen una estructura definida.

```text
users
├── id
├── name
└── email
```

#### 🔗 Relaciones

Las tablas pueden relacionarse mediante claves.

```text
users
  ↓
orders
```

#### 📐 Schema definido

La estructura de la database se puede definir previamente.

#### 🔑 Keys

Se utilizan claves para identificar y relacionar registros.

```text
Primary Key
Foreign Key
```

#### 🛡️ Integridad

Existen reglas que ayudan a mantener los datos correctos y consistentes.

#### 🔄 Transactions

Varias operaciones pueden ejecutarse como una unidad.


### 6️⃣ 🧩 MODELO RELACIONAL

El **modelo relacional** es el modelo utilizado para representar los datos mediante **relaciones**.

En la práctica, esas relaciones se representan mediante tablas.

Por ejemplo:

```text
USERS

id | name
---|------
1  | Ana
2  | Carlos
```

Una tabla puede entenderse como una representación estructurada de una relación entre atributos y registros.

Lo importante para ti como developer es pensar:

```text
Entity
   ↓
Table
   ↓
Columns + Rows
   ↓
Relationships
```

---

### 7️⃣ 📐 DATOS ESTRUCTURADOS

Los datos estructurados tienen una organización definida.

Por ejemplo:

```text
USER

id       → INTEGER
name     → VARCHAR
email    → VARCHAR
age      → INTEGER
active   → BOOLEAN
```

La database conoce:

```text
¿Qué columnas existen?
¿Qué tipo de datos tienen?
¿Qué reglas deben cumplir?
```

Esto permite controlar mejor la información almacenada.

---

### 8️⃣ 🧱 SCHEMA

Un **schema** define la estructura lógica de los datos.

Puede incluir:

```text
Tables
Columns
Data Types
Relationships
Constraints
```

Por ejemplo:

```text
users
├── id → INTEGER
├── name → VARCHAR
└── email → VARCHAR

orders
├── id → INTEGER
├── user_id → INTEGER
└── total → DECIMAL
```

El schema describe **cómo está organizada la información**.

> [!WARNING]
> El significado exacto de *schema* puede variar ligeramente según el RDBMS. En PostgreSQL, por ejemplo, un schema es también un namespace dentro de una database.

---

# 🧩 ESTRUCTURA

## 9️⃣ 🗄️ DATABASE

Una **database** es un contenedor lógico que contiene estructuras y datos relacionados.

Por ejemplo:

```text
company_db
│
├── users
├── orders
├── products
└── payments
```

---

## 🔟 📐 SCHEMA

El schema organiza objetos dentro de una database.

Una forma sencilla de visualizarlo:

```text
Database
   ↓
Schema
   ↓
Tables
```

En algunos sistemas puede existir un schema por defecto; en otros podemos crear múltiples schemas.

---

## 1️⃣1️⃣ 📊 TABLE

Una **table** almacena registros organizados en filas y columnas.

```text
users

┌────┬─────────┬─────────────────┐
│ id │ name    │ email           │
├────┼─────────┼─────────────────┤
│ 1  │ Ana     │ ana@email.com   │
│ 2  │ Carlos  │ carlos@email.com│
└────┴─────────┴─────────────────┘
```

---

## 1️⃣2️⃣ 🧾 ROW

Una **row** representa un registro.

```text
┌────┬─────────┬─────────────────┐
│ 1  │ Ana     │ ana@email.com   │ ← Row
└────┴─────────┴─────────────────┘
```

Podemos pensar:

```text
1 Row
 ↓
1 Record
```

---

## 1️⃣3️⃣ 🏷️ COLUMN

Una **column** representa un atributo del registro.

```text
┌────┬─────────┬─────────────┐
│ id │ name    │ email       │
└────┴─────────┴─────────────┘
  ↑       ↑           ↑
Column  Column      Column
```

Cada columna normalmente tiene un tipo de dato.

```text
id     → INTEGER
name   → VARCHAR
active → BOOLEAN
```

## 1️⃣4️⃣ 🔗 RELATIONSHIP

Una **relationship** conecta información entre tablas.

Por ejemplo:

```text
users
  │
  │ id
  ▼
orders
  │
  │ user_id
  ▼
users
```

En una relación típica:

```text
users.id
   ↑
   │
orders.user_id
```

Esto permite representar relaciones como:

```text
1 : 1
1 : N
N : N
```

---

# 🧠 ESTRUCTURA COMPLETA

```text
RDBMS
  │
  ▼
Database
  │
  ▼
Schema
  │
  ├── Table
  │     ├── Column
  │     ├── Column
  │     └── Row
  │
  ├── Table
  │
  └── Table
        │
        └── Relationships
```

---

# 🆚 COMPARACIONES

## 1️⃣5️⃣ 🟦 RELATIONAL VS NON-RELATIONAL

| Característica | 🟦 Relational        | 🟨 Non-Relational         |
| -------------- | -------------------- | ------------------------- |
| **Modelo**     | Tablas               | Varios modelos            |
| **Estructura** | Más definida         | Generalmente más flexible |
| **Relaciones** | Fundamentales        | Depende del modelo        |
| **Schema**     | Normalmente definido | Puede ser flexible        |
| **Consultas**  | SQL                  | Depende del sistema       |
| **Ejemplos**   | PostgreSQL, MySQL    | MongoDB, Redis            |

---

## 1️⃣6️⃣ 🔎 SQL VS NoSQL

No son exactamente lo mismo que **Relational vs Non-Relational**, aunque están estrechamente relacionados.

```text
🟦 Relational
      ↓
     SQL
```

Mientras que:

```text
🟨 NoSQL
      ↓
Different Data Models
```

Por ejemplo, una database relacional utiliza normalmente SQL para consultar sus datos:

```sql
SELECT *
FROM users;
```

Una database NoSQL puede utilizar otros mecanismos dependiendo del sistema.

> [!NOTE]
> 🧠 **SQL es un lenguaje; relational es un modelo de datos.** No son sinónimos.

---

## 1️⃣7️⃣ 🖥️ RDBMS VS NOSQL DATABASE

Un **RDBMS** utiliza el modelo relacional:

```text
RDBMS
 ↓
Tables
 ↓
Rows + Columns
 ↓
Relationships
```

Una database NoSQL puede utilizar otros modelos:

```text
NoSQL
 ├── Documents
 ├── Key-Value
 ├── Graph
 └── Column-oriented
```

---

## 1️⃣8️⃣ 🤔 ¿CUÁNDO UTILIZAR UNA BASE RELACIONAL?

Una base relacional suele ser una excelente opción cuando:

```text
🔗 Existen muchas relaciones entre datos
📐 Los datos tienen una estructura clara
💳 Las transacciones son importantes
🛡️ La integridad de los datos es crítica
🔎 Necesitas consultas complejas
```

**Ejemplos:**

```text
💳 Banking
🛒 E-commerce
🏥 Sistemas administrativos
✈️ Reservaciones
📦 Inventarios
💰 Contabilidad
```

Por ejemplo:

```text
Users
  │
  ├── Orders
  │      │
  │      └── Products
  │
  └── Payments
```

Este tipo de relaciones encaja naturalmente con el modelo relacional.

---

# 🛠️ RDBMS POPULARES

No necesitas aprender todos todavía. Primero identifica qué son y qué los diferencia a grandes rasgos.

| RDBMS                  | 📌 Característica general                                                     |
| ---------------------- | ----------------------------------------------------------------------------- |
| 🐘 **PostgreSQL**      | Potente, completo y muy utilizado en aplicaciones modernas                    |
| 🐬 **MySQL**           | Muy popular en aplicaciones web                                               |
| 🦭 **MariaDB**         | Sistema compatible con el ecosistema de MySQL                                 |
| 🪟 **SQL Server**      | RDBMS de Microsoft                                                            |
| 🟠 **Oracle Database** | Muy utilizado en entornos empresariales                                       |
| 🪶 **SQLite**          | Ligero y basado en un archivo, muy útil para aplicaciones locales y embebidas |

### 🎯 Para estudiar

No necesitas aprender:

```text
PostgreSQL
   +
MySQL
   +
MariaDB
   +
SQL Server
   +
Oracle
   +
SQLite
```

como si fueran seis tecnologías completamente diferentes.

Primero aprende **el modelo relacional y SQL**.

Después puedes profundizar en un RDBMS concreto, por ejemplo:

```text
Relational Database
        ↓
      SQL
        ↓
   PostgreSQL
        ↓
PostgreSQL-specific features
```

Así el conocimiento que aprendas será mucho más transferible entre diferentes bases de datos.
