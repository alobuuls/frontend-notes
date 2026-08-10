# 📄 01 - What is ORM

> 🧠 **ORM** significa **Object-Relational Mapping**.

Es una técnica/herramienta que permite trabajar con una base de datos relacional utilizando **objetos y estructuras del lenguaje de programación**, en lugar de escribir directamente todas las consultas SQL.

Por ejemplo, en lugar de pensar únicamente en:

```text
Table → Row → Column
```

el ORM permite trabajar con:

```text
Model → Object → Data
```

El ORM funciona como una capa entre tu aplicación y la base de datos:

```text
Application
     ↓
    ORM
     ↓
Database
```

---

# 📑 ÍNDICE — 01 · What is ORM

- [📄 01 - What is ORM](#-01---what-is-orm)
- [📑 ÍNDICE — 01 · What is ORM](#-índice--01--what-is-orm)
  - [🔄 Object-Relational Mapping](#-object-relational-mapping)
  - [🎯 Problema que resuelve](#-problema-que-resuelve)
  - [🆚 ORM vs SQL directo](#-orm-vs-sql-directo)
    - [SQL directo](#sql-directo)
    - [ORM](#orm)
  - [🧩 Models](#-models)
  - [🧱 Objects](#-objects)
  - [📊 Tables](#-tables)
  - [📄 Rows](#-rows)
  - [⚙️ ¿Cómo un ORM termina generando SQL?](#️-cómo-un-orm-termina-generando-sql)
  - [🔥 Flujo fundamental](#-flujo-fundamental)
  - [✅ Ventajas](#-ventajas)
  - [❌ Desventajas](#-desventajas)
  - [🟢 ¿Cuándo utilizar ORM?](#-cuándo-utilizar-orm)
  - [🔵 ¿Cuándo puede convenir SQL directo?](#-cuándo-puede-convenir-sql-directo)
  - [🧠 Concepto fundamental](#-concepto-fundamental)

## 🔄 Object-Relational Mapping

El concepto consiste en realizar un mapeo entre:

```text
Object
   ↕
Row
```

y:

```text
Model
   ↕
Table
```

Por ejemplo, una tabla:

```text
users
----------------
id
name
email
```

puede representarse mediante un modelo:

```text
User
```

Y una fila:

```text
1 | Alo | alo@example.com
```

puede representarse como un objeto:

```ts
{
  id: 1,
  name: 'Alo',
  email: 'alo@example.com'
}
```

El ORM se encarga de relacionar estas estructuras.

---

## 🎯 Problema que resuelve

Sin un ORM, una aplicación puede interactuar directamente con SQL:

```text
Application
     ↓
SQL
     ↓
PostgreSQL
```

El desarrollador debe escribir y administrar las queries SQL.

Con un ORM:

```text
Application
     ↓
ORM
     ↓
SQL
     ↓
PostgreSQL
```

El ORM permite trabajar con modelos y objetos y se encarga de traducir esas operaciones a SQL.

Esto puede reducir la cantidad de SQL que necesitas escribir directamente.

---

## 🆚 ORM vs SQL directo

|             | SQL directo                  | ORM                                |
| ----------- | ---------------------------- | ---------------------------------- |
| Interacción | SQL explícito                | Modelos y objetos                  |
| Flujo       | Application → SQL → Database | Application → ORM → SQL → Database |
| Abstracción | Menor                        | Mayor                              |

### SQL directo

La aplicación escribe SQL explícitamente:

```ts
const result = await db.query(
  'SELECT * FROM users WHERE id = $1',
  [1]
);
```

Conceptualmente:

```text
Application
     ↓
SQL
     ↓
Database
```

### ORM

La aplicación trabaja mediante el ORM:

```ts
const user = await User.findById(1);
```

Conceptualmente:

```text
Application
     ↓
ORM
     ↓
SQL
     ↓
Database
```

El ORM **no elimina SQL**.

Simplemente proporciona una abstracción para interactuar con la base de datos.

---

## 🧩 Models

Un **Model** representa una entidad de la base de datos dentro del ORM.

Por ejemplo:

```text
Database
   ↓
users table
```

puede tener:

```text
ORM
 ↓
User Model
```

El modelo normalmente representa:

```text
User
```

y está relacionado con:

```text
users
```

---

## 🧱 Objects

Los objetos representan los datos con los que trabaja la aplicación.

Por ejemplo:

```ts
const user = {
  id: 1,
  name: 'Alo',
  email: 'alo@example.com'
};
```

El ORM puede mapear ese objeto con una fila de la tabla.

```text
Object
   ↕
Row
```

---

## 📊 Tables

Una tabla pertenece al modelo relacional de la base de datos.

Por ejemplo:

```text
users
----------------
id
name
email
```

El ORM puede representar esa tabla mediante un modelo:

```text
User Model
     ↕
users table
```

---

## 📄 Rows

Una fila representa un registro de la tabla.

Por ejemplo:

```text
users

id | name | email
---|------|----------------
1  | Alo  | alo@example.com
```

El ORM puede convertir esa fila en un objeto:

```ts
{
  id: 1,
  name: 'Alo',
  email: 'alo@example.com'
}
```

Conceptualmente:

```text
Database Row
     ↓
    ORM
     ↓
Application Object
```

---

## ⚙️ ¿Cómo un ORM termina generando SQL?

Este es uno de los conceptos más importantes.

Cuando utilizas un ORM, tú realizas una operación utilizando la API del ORM:

```text
ORM Method
    ↓
ORM
    ↓
SQL Query
    ↓
Database
```

Por ejemplo, conceptualmente:

```ts
User.find({ age: 18 });
```

El ORM puede transformar esa operación en algo equivalente a:

```sql
SELECT *
FROM users
WHERE age = 18;
```

La aplicación no necesariamente escribe esa query directamente, pero **SQL sigue siendo lo que finalmente entiende la database relacional**.

---

## 🔥 Flujo fundamental

```text
TypeScript
    ↓
   ORM
    ↓
   SQL
    ↓
PostgreSQL
```

El ORM actúa como una capa de abstracción:

```text
TypeScript
    ↓
  Objects
    ↓
   ORM
    ↓
   SQL
    ↓
PostgreSQL
```

---

## ✅ Ventajas

Los ORM pueden ofrecer:

* Trabajar con objetos y modelos.
* Reducir la cantidad de SQL escrito directamente.
* Abstraer parte de la interacción con la database.
* Facilitar operaciones CRUD.
* Integrarse con lenguajes como TypeScript.
* Facilitar el trabajo con relaciones entre modelos.
* Proporcionar una API más cercana al lenguaje de programación.

---

## ❌ Desventajas

Los ORM también tienen inconvenientes:

* Añaden una capa de abstracción.
* Pueden ocultar el SQL que realmente se está ejecutando.
* Algunas queries complejas pueden ser más difíciles de expresar.
* Pueden generar queries menos eficientes si no se utilizan correctamente.
* Requieren aprender la API y comportamiento específico del ORM.
* Para optimización avanzada puede ser necesario conocer SQL igualmente.

Por eso utilizar un ORM **no significa dejar de aprender SQL**.

---

## 🟢 ¿Cuándo utilizar ORM?

Un ORM puede ser conveniente cuando:

* La aplicación utiliza muchas operaciones CRUD.
* Quieres trabajar principalmente con modelos y objetos.
* Quieres reducir SQL repetitivo.
* El proyecto tiene muchas entidades y relaciones.
* Quieres una abstracción entre la aplicación y la database.

---

## 🔵 ¿Cuándo puede convenir SQL directo?

SQL directo puede ser conveniente cuando:

* Necesitas queries muy específicas.
* Tienes consultas complejas.
* Necesitas controlar exactamente el SQL generado.
* Necesitas optimización avanzada.
* Una operación es más sencilla de expresar directamente en SQL.

También es posible utilizar **ambos**:

```text
ORM
 ↓
Operaciones normales

SQL directo
 ↓
Queries específicas o complejas
```

---

## 🧠 Concepto fundamental

Nunca debes pensar:

> **"El ORM reemplaza la database."**

No.

El ORM es una herramienta para interactuar con ella:

```text
ORM
 ↓
Herramienta para interactuar
con la database
```

La arquitectura completa es:

```text
┌──────────────┐
│  TypeScript  │
└──────┬───────┘
       ↓
┌──────────────┐
│     ORM      │
└──────┬───────┘
       ↓
┌──────────────┐
│     SQL      │
└──────┬───────┘
       ↓
┌──────────────┐
│ PostgreSQL   │
└──────────────┘
```

> **El ORM abstrae parte de SQL, pero PostgreSQL sigue siendo quien almacena y procesa los datos.**
