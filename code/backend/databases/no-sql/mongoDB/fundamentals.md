# 📄 MongoDB

> Este documento es una **introducción completa a MongoDB**, enfocada en entender qué es, cómo funciona y cómo se relaciona con las bases de datos relacionales.

---

## 📚 ÍNDICE

- [📄 MongoDB](#-mongodb)
  - [📚 ÍNDICE](#-índice)
  - [🧠 1️⃣ ¿QUÉ ES MONGODB?](#-1️⃣-qué-es-mongodb)
  - [🗂️ 2️⃣ ¿QUÉ TIPO DE DATABASE ES?](#️-2️⃣-qué-tipo-de-database-es)
  - [📄 3️⃣ ¿POR QUÉ ES UNA DOCUMENT DATABASE?](#-3️⃣-por-qué-es-una-document-database)
  - [🆚 4️⃣ MONGODB VS SQL](#-4️⃣-mongodb-vs-sql)
    - [SQL](#sql)
    - [MongoDB](#mongodb)
    - [📊 Comparación conceptual](#-comparación-conceptual)
  - [🏗️ 5️⃣ MONGODB ARCHITECTURE](#️-5️⃣-mongodb-architecture)
  - [🔤 6️⃣ BSON](#-6️⃣-bson)
  - [🖥️ 7️⃣ MONGODB SERVER](#️-7️⃣-mongodb-server)
  - [💻 8️⃣ MONGODB SHELL — `mongosh`](#-8️⃣-mongodb-shell--mongosh)
  - [🧭 9️⃣ MONGODB COMPASS](#-9️⃣-mongodb-compass)
  - [☁️ 🔟 MONGODB ATLAS](#️--mongodb-atlas)
  - [🔄 JSON → BSON → MONGODB](#-json--bson--mongodb)
  - [🧠 MODELO MENTAL](#-modelo-mental)
    - [🏗️ Arquitectura](#️-arquitectura)
    - [🛠️ Herramientas](#️-herramientas)

## 🧠 1️⃣ ¿QUÉ ES MONGODB?

**MongoDB** es una **Document Database NoSQL**.

En lugar de almacenar información principalmente en tablas y filas, MongoDB almacena información como **documentos**.

Conceptualmente:

```text
MongoDB
   ↓
Database
   ↓
Collection
   ↓
Document
   ↓
Field
```

Un documento puede verse conceptualmente así:

```json
{
  "name": "Alo",
  "email": "alo@example.com",
  "age": 25
}
```

---

## 🗂️ 2️⃣ ¿QUÉ TIPO DE DATABASE ES?

MongoDB es:

```text
NoSQL
   ↓
Document Database
```

Esto significa que utiliza un modelo basado en documentos.

MongoDB no utiliza el modelo relacional tradicional de:

```text
Tables
Rows
Columns
```

sino:

```text
Collections
Documents
Fields
```

---

## 📄 3️⃣ ¿POR QUÉ ES UNA DOCUMENT DATABASE?

MongoDB almacena los datos como **documentos**.

Una collection puede contener múltiples documentos:

```text
users
   │
   ├── Document
   ├── Document
   ├── Document
   └── Document
```

Por ejemplo:

```json
{
  "name": "Alo",
  "email": "alo@example.com",
  "age": 25
}
```

Los documentos pueden contener estructuras anidadas:

```json
{
  "name": "Alo",
  "address": {
    "city": "Bogota",
    "country": "Colombia"
  }
}
```

Esto es una de las características importantes del modelo documental.

---

## 🆚 4️⃣ MONGODB VS SQL

Puedes relacionar los conceptos que ya estudiaste:

### SQL

```text
Database
   ↓
Table
   ↓
Row
   ↓
Column
```

### MongoDB

```text
Database
   ↓
Collection
   ↓
Document
   ↓
Field
```

### 📊 Comparación conceptual

| Relational Database | MongoDB                                     |
| ------------------- | ------------------------------------------- |
| Database            | Database                                    |
| Table               | Collection                                  |
| Row                 | Document                                    |
| Column              | Field                                       |
| Foreign Key         | Referencias / documentos relacionados       |
| JOIN                | Operaciones específicas para combinar datos |
| Schema estructurado | Schema más flexible                         |

> ⚠️ Esto es una **comparación conceptual**, no significa que los dos modelos funcionen exactamente igual.

---

## 🏗️ 5️⃣ MONGODB ARCHITECTURE

Conceptualmente puedes visualizar MongoDB así:

```text
Application
     ↓
MongoDB Driver
     ↓
MongoDB Server
     ↓
Database
     ↓
Collections
     ↓
Documents
```

La aplicación se comunica con MongoDB mediante un **driver**.

El servidor de MongoDB administra las bases de datos y sus datos.

---

## 🔤 6️⃣ BSON

MongoDB utiliza **BSON** para representar los documentos internamente.

BSON significa:

> **Binary JSON**

Conceptualmente:

```text
JSON
 ↓
BSON
 ↓
MongoDB
```

Por ejemplo, conceptualmente puedes representar un documento como:

```json
{
  "name": "Alo",
  "age": 25
}
```

MongoDB utiliza BSON para almacenar y transmitir documentos.

BSON además permite tipos de datos que no existen de la misma manera en JSON, como:

* Date
* Binary data
* ObjectId
* Decimal128


## 🖥️ 7️⃣ MONGODB SERVER

El **MongoDB Server** es el componente que ejecuta y administra la database.

Conceptualmente:

```text
Application
      ↓
MongoDB Server
      ↓
Database
      ↓
Collections
      ↓
Documents
```

El servidor se encarga de recibir las operaciones de las aplicaciones y trabajar con los datos almacenados.

---

## 💻 8️⃣ MONGODB SHELL — `mongosh`

**`mongosh`** es el shell oficial de MongoDB.

Permite interactuar con MongoDB mediante comandos.

Conceptualmente:

```text
Terminal
   ↓
mongosh
   ↓
MongoDB Server
```

Por ejemplo, puedes utilizarlo para:

* Conectarte a MongoDB.
* Consultar datos.
* Insertar documentos.
* Actualizar documentos.
* Eliminar documentos.
* Administrar databases y collections.

Más adelante podrás estudiar las operaciones específicas de MongoDB con mayor profundidad.

---

## 🧭 9️⃣ MONGODB COMPASS

**MongoDB Compass** es una herramienta gráfica para trabajar con MongoDB.

En lugar de utilizar únicamente la terminal:

```text
mongosh
   ↓
MongoDB
```

puedes utilizar una interfaz visual:

```text
MongoDB Compass
       ↓
MongoDB
```

Permite explorar visualmente:

* Databases
* Collections
* Documents
* Indexes
* Queries

Es especialmente útil para explorar los datos durante el desarrollo.

---

## ☁️ 🔟 MONGODB ATLAS

**MongoDB Atlas** es el servicio administrado de MongoDB en la nube.

Conceptualmente:

```text
MongoDB
   ↓
Cloud
   ↓
MongoDB Atlas
```

En lugar de encargarte directamente de administrar un servidor MongoDB, Atlas proporciona una infraestructura administrada.

Puedes utilizarlo para crear y administrar deployments de MongoDB en la nube.

Conceptualmente:

```text
Application
     ↓
Internet
     ↓
MongoDB Atlas
     ↓
MongoDB
```

---

## 🔄 JSON → BSON → MONGODB

Es importante conectar estos conceptos:

```text
JavaScript / API
       ↓
      JSON
       ↓
     BSON
       ↓
   MongoDB
```

Por ejemplo, desde una aplicación puedes trabajar con una estructura similar a:

```json
{
  "name": "Alo",
  "email": "alo@example.com"
}
```

MongoDB trabaja con documentos BSON.

Por eso normalmente verás documentos de MongoDB representados con una sintaxis muy similar a JSON.

---

## 🧠 MODELO MENTAL

La comparación que debes recordar es:

```text
        SQL                    MongoDB
         │                        │
         ▼                        ▼
      Database                 Database
         │                        │
         ▼                        ▼
       Table                  Collection
         │                        │
         ▼                        ▼
        Row                    Document
         │                        │
         ▼                        ▼
      Column                    Field
```

### 🏗️ Arquitectura

```text
Application
     │
     ▼
MongoDB Driver
     │
     ▼
MongoDB Server
     │
     ▼
Database
     │
     ▼
Collection
     │
     ▼
Document
     │
     ▼
Field
```

### 🛠️ Herramientas

```text
                 MongoDB
                    │
       ┌────────────┼────────────┐
       ▼            ▼            ▼
    MongoDB       mongosh      Compass
     Server                      │
       │                         │
       └────────────┬────────────┘
                    ▼
              MongoDB Atlas
```

> 🔥 **La idea principal:** MongoDB es una **NoSQL Document Database** que organiza la información en **databases → collections → documents → fields**, utiliza **BSON** para representar los documentos y puede administrarse mediante herramientas como **mongosh, Compass y MongoDB Atlas**.
