# 🗄️ DATABASES

Esta carpeta construye el **modelo mental básico de las bases de datos** antes de entrar a SQL, consultas, tablas o código.

La idea principal es entender:

```text
Aplicación
    ↓
Database
    ↓
Datos
```

---

# 📑 ÍNDICE — DATABASES

1. [🧠 Qué es una Database](#1-🧠-qué-es-una-database)

   * 💾 ¿Por qué necesitamos una Database?
   * 🧩 ¿Qué puede almacenar?
   * 🆚 Database vs File

2. [🗄️ DBMS](#2-🗄️-DBMS)

   * ⚙️ Responsabilidades de un DBMS
   * 💾 Almacenamiento
   * 🔎 Consultas
   * 🔐 Seguridad
   * 🔄 Transacciones
   * 👥 Concurrencia
   * 🛡️ Integridad
   * 🧩 Ejemplos de DBMS

3. [🆚 SQL vs NoSQL](#3-🆚-SQL-vs-NoSQL)

   * 🟦 SQL / Relational Databases
   * 🟨 NoSQL
   * 🧩 Modelos de Datos

     * 📄 Document
     * 🔑 Key-Value
     * 🕸️ Graph
     * 📊 Column-Oriented
   * 🆚 Comparación SQL vs NoSQL

4. [🤔 ¿Cuándo usar SQL?](#4-🤔-cuándo-usar-SQL)

5. [🤔 ¿Cuándo usar NoSQL?](#5-🤔-cuándo-usar-NoSQL)

6. [🧠 Modelo Mental](#6-🧠-modelo-mental)

   * 🖥️ Relación entre Application y Database
   * 🎯 Idea clave


# 1️⃣ 🧠 QUE ES UNA DATABASE ?

Una **database (base de datos)** es un sistema organizado para **almacenar, gestionar y recuperar información**.

Una aplicación necesita guardar datos que deben permanecer disponibles después de cerrar o reiniciar la aplicación.

Por ejemplo, una aplicación de usuarios puede necesitar almacenar:

```text
👤 Users
├── id
├── name
├── email
└── password
```

Una aplicación de viajes:

```text
✈️ Trips
├── id
├── destination
├── date
└── price
```

La database permite que esos datos puedan:

```text
➕ Crear
🔎 Consultar
✏️ Modificar
🗑️ Eliminar
```

Estas operaciones forman la base del concepto **CRUD**.

---

## 💾 ¿POR QUÉ NECESITAMOS UNA DATABASE?

Sin una base de datos, una aplicación podría mantener información únicamente en memoria:

```text
Application
     ↓
RAM
     ↓
Data
```

Pero cuando la aplicación se detiene:

```text
Application
     ↓
❌ Shutdown
     ↓
Data in memory → Lost
```

Una database proporciona **persistencia**:

```text
Application
     ↓
Database
     ↓
💾 Persistent Data
```

Por eso los datos pueden continuar existiendo aunque la aplicación se reinicie.

---

## 🧩 ¿QUÉ PUEDE ALMACENAR?

Una database puede almacenar diferentes tipos de información:

```text
👤 Users
🛒 Products
📦 Orders
💬 Messages
💳 Payments
📍 Locations
📅 Appointments
```

La estructura dependerá del tipo de database que utilicemos.

---

## 🆚 DATABASE VS FILE

Una aplicación también puede guardar información en archivos:

```text
data.json
users.csv
config.txt
```

Pero una database está diseñada específicamente para **gestionar grandes cantidades de información y permitir acceso, consultas, relaciones, concurrencia y seguridad de manera controlada**.

Por ejemplo:

| Recurso          | Uso                               |
| ---------------- | --------------------------------- |
| 📄 **JSON**      | Guardar información sencilla      |
| 🗄️ **Database** | Gestionar datos de una aplicación |

No significa que los archivos sean inútiles; simplemente resuelven problemas diferentes.

---

# 2️⃣ 🗄️ DBMS

**DBMS** significa:

> **Database Management System**

Es el software encargado de **administrar una base de datos**.

Una database contiene los datos, mientras que el DBMS proporciona las herramientas y mecanismos necesarios para trabajar con ellos.

Conceptualmente:

```text
👨‍💻 Application
       ↓
      DBMS
       ↓
   🗄️ Database
       ↓
      Data
```

---

## ⚙️ ¿QUÉ RESPONSABILIDADES TIENE UN DBMS?

Un DBMS puede encargarse de:

| Responsabilidad       | Función                                                                                             |
| --------------------- | --------------------------------------------------------------------------------------------------- |
| 💾 **Almacenamiento** | Gestionar cómo se almacenan los datos.                                                              |
| 🔎 **Consultas**      | Permitir buscar y recuperar información.                                                            |
| 🔐 **Seguridad**      | Controlar quién puede acceder a determinados datos.                                                 |
| 🔄 **Transacciones**  | Controlar operaciones que deben ejecutarse correctamente como una unidad.                           |
| 👥 **Concurrencia**   | Permitir que múltiples usuarios o procesos trabajen con los datos al mismo tiempo sin corromperlos. |
| 🛡️ **Integridad**    | Ayudar a mantener los datos consistentes y válidos.                                                 |

### 💾 Almacenamiento

```text
DBMS
 ↓
Database
 ↓
Data
```

### 🔎 Consultas

```text
Query
  ↓
DBMS
  ↓
Results
```

### 🔐 Seguridad

```text
User
 ↓
Authentication / Permissions
 ↓
Database
```

### 🔄 Transacciones

```text
Transaction
   ↓
Operation A
   ↓
Operation B
   ↓
Operation C
```

### 👥 Concurrencia

```text
User A ──┐
         ├──→ DBMS → Database
User B ──┘
```

### 🛡️ Integridad

Ayudar a mantener los datos consistentes y válidos.

Por ejemplo:

```text
User
id → debe ser único
email → debe cumplir determinadas reglas
```

---

## 🧩 EJEMPLOS DE DBMS

Algunos sistemas conocidos son:

### SQL / Relacionales

```text
🐘 PostgreSQL
🐬 MySQL
🪶 SQLite
🟥 Microsoft SQL Server
🟧 Oracle Database
```

### NoSQL

```text
🍃 MongoDB
⚡ Redis
```

Cada uno implementa diferentes modelos y características para trabajar con datos.


# 3️⃣ 🆚 SQL VS NOSQL

Una de las primeras decisiones importantes al estudiar databases es entender la diferencia entre **bases de datos relacionales (SQL)** y **bases de datos NoSQL**.

---

## 🟦 SQL / RELATIONAL DATABASES

Las databases relacionales organizan la información principalmente mediante **tablas**.

Por ejemplo:

```text id="4x7m2p"
USERS
┌────┬─────────┬──────────────────┐
│ id │ name    │ email            │
├────┼─────────┼──────────────────┤
│ 1  │ Ana     │ ana@email.com    │
│ 2  │ Carlos  │ carlos@email.com │
└────┴─────────┴──────────────────┘
```

Los datos pueden relacionarse mediante claves.

Por ejemplo:

```text id="8q3v6n"
Users
  │
  │ user_id
  ▼
Orders
```

### 🧠 Características

```text id="2m9r5x"
📊 Tablas
🔗 Relaciones
📐 Esquema estructurado
🔎 SQL
🔒 Integridad
🔄 Transactions
```

Ejemplos:

```text id="6p4k1w"
PostgreSQL
MySQL
SQLite
SQL Server
Oracle
```

---

## 🟨 NOSQL

**NoSQL** hace referencia a bases de datos que utilizan modelos diferentes al modelo relacional tradicional.

Uno de los modelos más conocidos es el **document database**.

Por ejemplo, MongoDB puede representar información como documentos:

```json id="7n2x5m"
{
  "name": "Ana",
  "email": "ana@email.com",
  "age": 25
}
```

En lugar de pensar principalmente en:

```text id="3r8q6v"
Database
   ↓
Tables
   ↓
Rows
   ↓
Columns
```

podemos pensar:

```text id="9m4p2x"
Database
   ↓
Collections
   ↓
Documents
```

### 🧠 Características

```text id="5x7k1q"
📄 Documents
🧩 Estructuras flexibles
📈 Escalabilidad según el sistema
⚡ Diferentes modelos de almacenamiento
```

Ejemplos:

```text id="8v3m6r"
MongoDB
Redis
Cassandra
DynamoDB
```

---

# 🧩 MODELOS DE DATOS

NoSQL no significa simplemente "JSON".

Existen diferentes modelos NoSQL.

### 📄 Document

Los datos se almacenan como documentos.

```text id="4q9x2m"
Collection
   ↓
Document
   ↓
JSON-like data
```

Ejemplo:

```json id="6k3p8v"
{
  "name": "Ana",
  "age": 25
}
```

### 🔑 Key-Value

Los datos se almacenan como pares:

```text id="2m7r5x"
Key → Value
```

Ejemplo conceptual:

```text id="9p4v1n"
user:123 → "Ana"
```

Un ejemplo conocido es Redis.

### 🕸️ Graph

Los datos se representan mediante **nodos y relaciones**.

```text id="5x8q3m"
Ana
 │
 │ FRIEND_OF
 ▼
Carlos
 │
 │ WORKS_WITH
 ▼
Laura
```

Es útil cuando las relaciones entre entidades son especialmente importantes.

### 📊 Column-Oriented

Los datos se organizan alrededor de columnas y están orientados a determinados tipos de cargas de trabajo.

Son utilizados en sistemas donde se necesita trabajar eficientemente con grandes volúmenes de datos distribuidos.

---

# 🆚 SQL VS NOSQL

| Característica   | 🟦 SQL                  | 🟨 NoSQL                               |
| ---------------- | ----------------------- | -------------------------------------- |
| **Modelo**       | Relacional              | Varios modelos                         |
| **Estructura**   | Tablas                  | Documentos, key-value, graph, etc.     |
| **Schema**       | Generalmente definido   | Puede ser más flexible                 |
| **Relaciones**   | Muy importantes         | Depende del modelo                     |
| **Consultas**    | SQL                     | Depende del sistema                    |
| **Transactions** | Muy comunes             | Depende del sistema                    |
| **Flexibilidad** | Estructura más definida | Estructura frecuentemente más flexible |

> ⚠️ No pienses que **SQL = mejor** o **NoSQL = mejor**. La elección depende de las necesidades de la aplicación.

---

# 🤔 ¿CUÁNDO USAR SQL?

SQL suele ser una buena opción cuando:

```text id="7n2m6q"
🔗 Existen muchas relaciones
📐 Los datos tienen una estructura clara
💳 Se necesitan transacciones importantes
🛡️ La integridad de los datos es crítica
🔎 Se necesitan consultas complejas
```

Por ejemplo:

```text id="3x8p5r"
Banking
E-commerce
ERP
Accounting
Reservations
```

Un sistema de reservas podría tener:

```text id="6m4q9v"
Users
   │
   ├── Reservations
   │          │
   │          └── Rooms
   │
   └── Payments
```

Las relaciones son fundamentales.

---

# 🤔 ¿CUÁNDO USAR NOSQL?

NoSQL puede ser apropiado cuando:

```text id="8q2v5m"
📄 Los datos tienen estructuras variables
📈 Se necesita escalar determinado tipo de carga
⚡ Se necesitan patrones de acceso específicos
🧩 El modelo de documentos resulta natural
```

Por ejemplo:

```text id="4r7x1n"
Real-time applications
Large-scale distributed systems
Content platforms
Catalogs
Certain caching workloads
```

Pero nuevamente:

> **NoSQL no significa automáticamente más rápido ni SQL significa automáticamente más lento.**

La arquitectura y el patrón de acceso a los datos importan muchísimo.

---

# 🧠 MODELO MENTAL

Antes de aprender SQL, quédate con esta jerarquía:

```text id="9m3p6x"
                    🗄️ DATABASE
                         │
                         ▼
                       DBMS
                         │
              ┌──────────┴──────────┐
              ▼                     ▼
         🟦 RELATIONAL          🟨 NoSQL
              │                     │
              ▼                     ▼
           Tables              Different Models
              │                     │
        ┌─────┴─────┐        ┌──────┼──────┐
        ▼           ▼        ▼      ▼      ▼
      Rows       Columns   Document Key-Value Graph
```

Y la relación con una aplicación:

```text id="2x8q4v"
🖥️ Frontend
      ↓
🌐 API / Backend
      ↓
🧠 Business Logic
      ↓
🗄️ Database
      ↓
💾 Persistent Data
```

### 🎯 IDEA CLAVE

> **Una database almacena y organiza datos; un DBMS es el software que permite administrarlos; SQL y NoSQL son diferentes enfoques para modelar y trabajar con esos datos.**

Este es el modelo mental que necesitas antes de entrar a **tablas, SQL, queries, relaciones, índices y transacciones**.
