# 📄 SQL FUNDAMENTALS

SQL es el lenguaje que utilizarás para **comunicarte con una base de datos relacional**.

---

## 📚 ÍNDICE 

- [📄 SQL FUNDAMENTALS](#-sql-fundamentals)
  - [📚 ÍNDICE](#-índice)
- [🧠 CONCEPTOS](#-conceptos)
  - [1️⃣ 🗃️ ¿QUÉ ES SQL?](#1️⃣-️-qué-es-sql)
  - [2️⃣ 🎯 ¿PARA QUÉ SIRVE SQL?](#2️⃣--para-qué-sirve-sql)
  - [3️⃣ 🆚 SQL VS DATABASE](#3️⃣--sql-vs-database)
    - [Database](#database)
    - [SQL](#sql)
  - [4️⃣ 🆚 SQL VS DBMS](#4️⃣--sql-vs-dbms)
    - [SQL](#sql-1)
    - [DBMS](#dbms)
- [📜 SQL STATEMENTS](#-sql-statements)
  - [5️⃣ 📝 SQL STATEMENT](#5️⃣--sql-statement)
- [🔑 SQL KEYWORDS](#-sql-keywords)
  - [6️⃣ 🗝️ SQL KEYWORDS](#6️⃣-️-sql-keywords)
- [🧩 SQL CLAUSES](#-sql-clauses)
  - [7️⃣ 🧱 SQL CLAUSES](#7️⃣--sql-clauses)
- [🧮 SQL EXPRESSIONS](#-sql-expressions)
  - [8️⃣ 🔢 SQL EXPRESSIONS](#8️⃣--sql-expressions)
- [📐 SQL SYNTAX](#-sql-syntax)
  - [9️⃣ 📏 SQL SYNTAX](#9️⃣--sql-syntax)
- [💬 SQL COMMENTS](#-sql-comments)
  - [🔟 📝 SQL COMMENTS](#--sql-comments)
    - [Comentario de una línea](#comentario-de-una-línea)
    - [Comentario de varias líneas](#comentario-de-varias-líneas)
- [🏗️ SQL CATEGORIES](#️-sql-categories)
  - [1️⃣1️⃣ 🔎 DQL — DATA QUERY LANGUAGE](#1️⃣1️⃣--dql--data-query-language)
  - [1️⃣2️⃣ ✏️ DML — DATA MANIPULATION LANGUAGE](#1️⃣2️⃣-️-dml--data-manipulation-language)
  - [1️⃣3️⃣ 🏗️ DDL — DATA DEFINITION LANGUAGE](#1️⃣3️⃣-️-ddl--data-definition-language)
  - [1️⃣4️⃣ 🔐 DCL — DATA CONTROL LANGUAGE](#1️⃣4️⃣--dcl--data-control-language)
  - [1️⃣5️⃣ 🔄 TCL — TRANSACTION CONTROL LANGUAGE](#1️⃣5️⃣--tcl--transaction-control-language)
- [🧠 MODELO MENTAL](#-modelo-mental)
    - [🎯 IDEA CLAVE](#-idea-clave)

# 🧠 CONCEPTOS

## 1️⃣ 🗃️ ¿QUÉ ES SQL?

**SQL (Structured Query Language)** es un lenguaje utilizado para trabajar con bases de datos relacionales.

Permite realizar operaciones como:

```text
Consultar datos
Insertar datos
Modificar datos
Eliminar datos
Crear estructuras
Modificar estructuras
```

Por ejemplo:

```sql
SELECT *
FROM users;
```

Aquí SQL le indica a la base de datos:

> Dame los registros de `users`.

---

## 2️⃣ 🎯 ¿PARA QUÉ SIRVE SQL?

SQL permite trabajar con los datos y estructuras de una base de datos.

Principalmente permite:

```text
📖 Consultar datos
➕ Insertar datos
✏️ Actualizar datos
🗑️ Eliminar datos
🏗️ Crear estructuras
🔧 Modificar estructuras
```

Por ejemplo:

```sql
INSERT INTO users (name)
VALUES ('Ana');
```

```sql
UPDATE users
SET name = 'Anna'
WHERE id = 1;
```

```sql
DELETE FROM users
WHERE id = 1;
```

---

## 3️⃣ 🆚 SQL VS DATABASE

No son lo mismo.

### Database

Es el lugar donde se almacenan los datos.

```text
Database
   │
   ├── users
   ├── orders
   └── products
```

### SQL

Es el lenguaje utilizado para interactuar con esa base de datos.

```text
SQL
 ↓
Database
 ↓
Data
```

Por lo tanto:

> **Database = dónde están los datos.**
> **SQL = lenguaje para trabajar con ellos.**

---

## 4️⃣ 🆚 SQL VS DBMS

Tampoco son lo mismo.

### SQL

Es el lenguaje:

```text
SQL
 ↓
SELECT
INSERT
UPDATE
DELETE
```

### DBMS

Es el software que administra la base de datos.

Ejemplos:

```text
PostgreSQL
MySQL
SQL Server
Oracle
```

Conceptualmente:

```text
Application
     ↓
    SQL
     ↓
   DBMS
     ↓
 Database
```

---

# 📜 SQL STATEMENTS

## 5️⃣ 📝 SQL STATEMENT

Un **SQL statement** es una instrucción escrita en SQL que le indica al DBMS qué operación realizar.

Ejemplo:

```sql
SELECT *
FROM users;
```

Otro:

```sql
INSERT INTO users (name)
VALUES ('Ana');
```

Cada instrucción representa una operación que el DBMS debe ejecutar.

---

# 🔑 SQL KEYWORDS

## 6️⃣ 🗝️ SQL KEYWORDS

Las **keywords** son palabras reservadas del lenguaje SQL que tienen un significado específico.

Algunos ejemplos:

```text
SELECT
FROM
WHERE
INSERT
UPDATE
DELETE
CREATE
ALTER
DROP
```

Por ejemplo:

```sql
SELECT name
FROM users
WHERE id = 1;
```

Aquí:

```text
SELECT → keyword
FROM   → keyword
WHERE  → keyword
```

---

# 🧩 SQL CLAUSES

## 7️⃣ 🧱 SQL CLAUSES

Una **clause** es una parte de un SQL statement que cumple una función específica.

Por ejemplo:

```sql
SELECT name
FROM users
WHERE age > 18;
```

Tenemos:

```text
SELECT
  ↓
qué datos queremos

FROM
  ↓
de dónde vienen

WHERE
  ↓
qué condición deben cumplir
```

Una query puede estar formada por diferentes clauses.

---

# 🧮 SQL EXPRESSIONS

## 8️⃣ 🔢 SQL EXPRESSIONS

Una **expression** es una combinación de valores, columnas, operadores o funciones que produce un resultado.

Por ejemplo:

```sql
age + 1
```

o:

```sql
price * quantity
```

También:

```sql
age > 18
```

puede producir:

```text
TRUE
FALSE
```

Las expressions aparecen dentro de diferentes partes de las consultas.

---

# 📐 SQL SYNTAX

## 9️⃣ 📏 SQL SYNTAX

La **syntax** son las reglas que determinan cómo debe escribirse una instrucción SQL correctamente.

Por ejemplo:

```sql
SELECT name
FROM users;
```

La estructura básica es:

```text
SELECT
   ↓
columnas

FROM
   ↓
tabla

WHERE
   ↓
condición
```

Una sintaxis incorrecta puede provocar un error del DBMS.

---

# 💬 SQL COMMENTS

## 🔟 📝 SQL COMMENTS

Los comentarios permiten escribir información dentro del código SQL sin que forme parte de la operación ejecutada.

### Comentario de una línea

```sql
-- Obtener todos los usuarios
SELECT *
FROM users;
```

### Comentario de varias líneas

```sql
/*
  Obtener usuarios
  mayores de edad
*/
SELECT *
FROM users
WHERE age >= 18;
```

Los comentarios son útiles para:

```text
📖 Explicar queries
🧠 Dejar notas
🛠️ Documentar SQL
```

---

# 🏗️ SQL CATEGORIES

SQL puede organizarse en diferentes categorías según el tipo de operación que realiza.

```text
DQL
DML
DDL
DCL
TCL
```

---

## 1️⃣1️⃣ 🔎 DQL — DATA QUERY LANGUAGE

DQL está relacionada con la **consulta de datos**.

La operación principal es:

```text
SELECT
```

Ejemplo:

```sql
SELECT *
FROM users;
```

Conceptualmente:

```text
DQL
└── SELECT
```

---

## 1️⃣2️⃣ ✏️ DML — DATA MANIPULATION LANGUAGE

DML se utiliza para **manipular los datos almacenados**.

Incluye principalmente:

```text
INSERT
UPDATE
DELETE
```

Conceptualmente:

```text
DML
├── INSERT
├── UPDATE
└── DELETE
```

Ejemplos:

```sql
INSERT INTO users (name)
VALUES ('Ana');
```

```sql
UPDATE users
SET name = 'Luis'
WHERE id = 1;
```

```sql
DELETE FROM users
WHERE id = 1;
```

---


## 1️⃣3️⃣ 🏗️ DDL — DATA DEFINITION LANGUAGE

DDL se utiliza para **definir y modificar estructuras de la base de datos**.

Incluye:

```text id="q7m2vx"
CREATE
ALTER
DROP
```

Conceptualmente:

```text id="n5k8rc"
DDL
├── CREATE
├── ALTER
└── DROP
```

Ejemplo:

```sql id="w3p9la"
CREATE TABLE users (
    id INTEGER,
    name VARCHAR(100)
);
```

No necesitas profundizar todavía en DDL.

---

## 1️⃣4️⃣ 🔐 DCL — DATA CONTROL LANGUAGE

DCL está relacionada con el **control de permisos y acceso** a los recursos de la base de datos.

Por ahora basta con reconocerla como una categoría de SQL.

```text id="f6t1yb"
DCL
└── Control de acceso y permisos
```

---

## 1️⃣5️⃣ 🔄 TCL — TRANSACTION CONTROL LANGUAGE

TCL está relacionada con el **control de transacciones**.

Por ahora basta con reconocerla como una categoría de SQL.

```text id="c9v4ks"
TCL
└── Control de transacciones
```

Más adelante podrás estudiar sus operaciones con mayor profundidad.

---

# 🧠 MODELO MENTAL

```text id="j2x8qp"
                         SQL
                          │
        ┌─────────────────┼─────────────────┐
        ▼                 ▼                 ▼
      QUERY          MANIPULATION       DEFINITION
        │                 │                 │
       DQL               DML               DDL
        │                 │                 │
     SELECT        INSERT / UPDATE      CREATE / ALTER
                       / DELETE            / DROP
```

Y además:

```text id="m7r3wn"
SQL
├── DQL → consultar datos
├── DML → modificar datos
├── DDL → definir estructuras
├── DCL → controlar permisos
└── TCL → controlar transacciones
```

### 🎯 IDEA CLAVE

> **SQL es el lenguaje utilizado para comunicarse con bases de datos relacionales. Sus instrucciones se organizan en categorías según si consultan datos, los modifican, definen estructuras, controlan permisos o manejan transacciones.**
