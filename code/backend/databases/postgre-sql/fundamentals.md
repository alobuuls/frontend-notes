# 📄 PostgreSQL

## 🧠 ¿Qué es PostgreSQL?

PostgreSQL es un **sistema de gestión de bases de datos relacional (RDBMS)** de código abierto.

Permite almacenar, consultar, modificar y administrar datos utilizando principalmente **SQL**.

Su estructura general es:

```text
PostgreSQL
    ↓
Database Server
    ↓
Databases
    ↓
Schemas
    ↓
Tables
```

---

## 📑 ÍNDICE 

- [📄 PostgreSQL](#-postgresql)
  - [🧠 ¿Qué es PostgreSQL?](#-qué-es-postgresql)
  - [📑 ÍNDICE](#-índice)
  - [🗄️ PostgreSQL como RDBMS](#️-postgresql-como-rdbms)
  - [🆚 PostgreSQL vs MySQL](#-postgresql-vs-mysql)
  - [🆚 PostgreSQL vs MongoDB](#-postgresql-vs-mongodb)
  - [🏗️ PostgreSQL Architecture](#️-postgresql-architecture)
  - [🖥️ PostgreSQL Server](#️-postgresql-server)
  - [🔄 Client / Server](#-client--server)
  - [💻 psql](#-psql)
  - [🖥️ pgAdmin](#️-pgadmin)
  - [🔧 PostgreSQL Extensions](#-postgresql-extensions)
- [🔧 Herramientas](#-herramientas)
  - [`psql`](#psql)
  - [`pgAdmin`](#pgadmin)
  - [PostgreSQL CLI](#postgresql-cli)
  - [PostgreSQL Server](#postgresql-server)

## 🗄️ PostgreSQL como RDBMS

PostgreSQL es un **RDBMS (Relational Database Management System)**.

Esto significa que trabaja con datos organizados principalmente en:

```text
Database
    ↓
Schema
    ↓
Tables
    ↓
Rows + Columns
```

Utiliza relaciones entre tablas mediante elementos como **Primary Keys** y **Foreign Keys**.

---

## 🆚 PostgreSQL vs MySQL

Ambos son **RDBMS** y utilizan SQL.

|             | PostgreSQL         | MySQL         |
| ----------- | ------------------ | ------------- |
| Tipo        | RDBMS              | RDBMS         |
| SQL         | ✅                  | ✅             |
| Relaciones  | ✅                  | ✅             |
| Open Source | ✅                  | ✅             |
| Uso         | General y avanzado | General y web |

La diferencia principal es que tienen distintas características, comportamientos y sintaxis específicas.

---

## 🆚 PostgreSQL vs MongoDB

PostgreSQL es una base de datos **relacional**, mientras que MongoDB es una **document database**.

```text
PostgreSQL
    ↓
Database
    ↓
Schema
    ↓
Table
    ↓
Row
    ↓
Column
```

vs.

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

PostgreSQL utiliza principalmente **relaciones entre tablas**, mientras que MongoDB utiliza **documentos**.

---

## 🏗️ PostgreSQL Architecture

De forma general, PostgreSQL funciona mediante una arquitectura **client/server**.

```text
Client
   ↓
PostgreSQL Server
   ↓
Database
   ↓
Schemas
   ↓
Tables
```

El cliente realiza solicitudes y el servidor PostgreSQL se encarga de procesarlas y trabajar con los datos.

---

## 🖥️ PostgreSQL Server

El **PostgreSQL Server** es el componente que ejecuta PostgreSQL y administra las bases de datos.

Se encarga de:

```text
Client
   ↓
Request
   ↓
PostgreSQL Server
   ↓
Database
   ↓
Response
```

---

## 🔄 Client / Server

PostgreSQL utiliza un modelo **Client / Server**.

El:

```text
Client
```

realiza solicitudes al:

```text
PostgreSQL Server
```

y el servidor procesa esas solicitudes.

Por ejemplo:

```text
psql
  │
  │ SQL
  ▼
PostgreSQL Server
  │
  ▼
Database
```

---

## 💻 psql

`psql` es el **cliente de línea de comandos de PostgreSQL**.

Permite conectarse a un servidor PostgreSQL y ejecutar comandos SQL desde la terminal.

Conceptualmente:

```text
Terminal
   ↓
psql
   ↓
PostgreSQL Server
```

---

## 🖥️ pgAdmin

**pgAdmin** es una herramienta gráfica para trabajar con PostgreSQL.

Permite interactuar visualmente con:

```text
PostgreSQL Server
        ↓
    Databases
        ↓
     Schemas
        ↓
     Tables
```

En lugar de trabajar únicamente desde la terminal, proporciona una interfaz gráfica para administrar PostgreSQL.

---

## 🔧 PostgreSQL Extensions

Las **PostgreSQL Extensions** permiten agregar funcionalidades adicionales a PostgreSQL.

Conceptualmente:

```text
PostgreSQL
     ↓
Extensions
     ↓
Additional functionality
```

Una extensión puede añadir funcionalidades que no forman parte del comportamiento básico de PostgreSQL.

---

# 🔧 Herramientas

## `psql`

Cliente de PostgreSQL basado en terminal.

```text
Terminal
   ↓
psql
   ↓
PostgreSQL
```

## `pgAdmin`

Interfaz gráfica para trabajar con PostgreSQL.

```text
GUI
 ↓
pgAdmin
 ↓
PostgreSQL
```

## PostgreSQL CLI

La **CLI (Command Line Interface)** permite interactuar con PostgreSQL mediante comandos desde la terminal.

`psql` es la herramienta principal utilizada para esta interacción.

## PostgreSQL Server

Es el servidor que ejecuta PostgreSQL y administra las bases de datos.

```text
Client / CLI
      ↓
PostgreSQL Server
      ↓
Databases
      ↓
Schemas
      ↓
Tables
```
