# 📄 02 - What is ODM

> 🧠 **ODM** significa **Object-Document Mapping**.

Es una herramienta que permite trabajar con una **document database** utilizando objetos y estructuras del lenguaje de programación, en lugar de interactuar directamente con los documentos de la base de datos.

Conceptualmente:

```text
TypeScript
    ↓
   ODM
    ↓
MongoDB
```

El ODM funciona como una capa entre la aplicación y la database:

```text
Application
     ↓
    ODM
     ↓
MongoDB
```

---

# 📑 ÍNDICE — 02 · What is ODM

- [📄 02 - What is ODM](#-02---what-is-odm)
- [📑 ÍNDICE — 02 · What is ODM](#-índice--02--what-is-odm)
  - [🔄 Object-Document Mapping](#-object-document-mapping)
  - [🆚 ORM vs ODM](#-orm-vs-odm)
    - [ORM](#orm)
    - [ODM](#odm)
  - [📚 Document Databases](#-document-databases)
  - [🗂️ Collections](#️-collections)
  - [📄 Documents](#-documents)
  - [🔗 Mapping entre objetos y documentos](#-mapping-entre-objetos-y-documentos)
  - [✅ Ventajas](#-ventajas)
  - [❌ Desventajas](#-desventajas)
  - [🟢 ¿Cuándo utilizar ODM?](#-cuándo-utilizar-odm)
  - [🧠 Concepto fundamental](#-concepto-fundamental)
    - [🔑 Comparación fundamental](#-comparación-fundamental)

## 🔄 Object-Document Mapping

El ODM realiza un mapeo entre los objetos de la aplicación y los documentos de una document database.

```text
Object
   ↕
Document
```

Por ejemplo, en TypeScript:

```ts
const user = {
  name: 'Alo',
  email: 'alo@example.com',
  age: 25
};
```

Puede corresponder a un documento en MongoDB:

```json
{
  "name": "Alo",
  "email": "alo@example.com",
  "age": 25
}
```

El ODM facilita esta conversión y la interacción con los documentos.

---

## 🆚 ORM vs ODM

La diferencia principal está en el tipo de database con el que trabajan.

|             | ORM                          | ODM                     |
| ----------- | ---------------------------- | ----------------------- |
| Database    | Relational Database          | Document Database       |
| Estructuras | Tables / Rows                | Collections / Documents |
| Mapping     | Model ↔ Table / Object ↔ Row | Object ↔ Document       |

### ORM

```text
ORM
 ↓
Relational Database
 ↓
Tables / Rows
```

El ORM realiza el mapeo entre objetos y estructuras relacionales.

```text
Model ↔ Table
Object ↔ Row
```

### ODM

```text
ODM
 ↓
Document Database
 ↓
Collections / Documents
```

El ODM realiza el mapeo entre objetos y documentos.

```text
Object ↔ Document
```

Por lo tanto:

```text
ORM → Relational DB
ODM → Document DB
```

---

## 📚 Document Databases

Los ODM están diseñados para trabajar con **document databases**.

En MongoDB, la estructura principal es:

```text
MongoDB
   ↓
Database
   ↓
Collection
   ↓
Document
```

El ODM permite trabajar con estas estructuras desde el lenguaje de programación.

Por ejemplo:

```text
TypeScript Object
       ↕
      ODM
       ↕
MongoDB Document
```

---

## 🗂️ Collections

Una **collection** es donde MongoDB almacena documentos relacionados.

Por ejemplo:

```text
users
   ↓
Document
Document
Document
```

El ODM puede proporcionar una representación de esa collection dentro de la aplicación.

Conceptualmente:

```text
User Model
    ↕
users Collection
```

---

## 📄 Documents

Un **document** contiene los datos de un registro en una document database.

Por ejemplo:

```json
{
  "name": "Alo",
  "email": "alo@example.com",
  "age": 25
}
```

El ODM permite trabajar con ese documento mediante objetos:

```text
Application Object
       ↕
      ODM
       ↕
MongoDB Document
```

---

## 🔗 Mapping entre objetos y documentos

El objetivo principal del ODM es facilitar esta relación:

```text
TypeScript Object
       ↕
      ODM
       ↕
MongoDB Document
```

Por ejemplo:

```ts
const user = {
  name: 'Alo',
  age: 25
};
```

puede corresponder a:

```json
{
  "name": "Alo",
  "age": 25
}
```

El ODM proporciona mecanismos para trabajar con estos documentos desde la aplicación.

---

## ✅ Ventajas

Un ODM puede ofrecer:

* Trabajar con documentos mediante objetos.
* Reducir código repetitivo para interactuar con MongoDB.
* Proporcionar una API para operaciones sobre documentos.
* Facilitar la definición de modelos.
* Facilitar validaciones y estructuras de datos.
* Integrarse con lenguajes como TypeScript.

---

## ❌ Desventajas

Los ODM también pueden:

* Añadir una capa de abstracción.
* Ocultar parte del funcionamiento de MongoDB.
* Tener una API propia que debes aprender.
* Hacer más complejas algunas operaciones específicas.
* Generar abstracciones innecesarias para operaciones muy simples.

---

## 🟢 ¿Cuándo utilizar ODM?

Un ODM puede ser conveniente cuando:

* La aplicación trabaja principalmente con MongoDB.
* Quieres trabajar con objetos y modelos desde TypeScript.
* El proyecto tiene muchos documentos y operaciones sobre ellos.
* Necesitas una capa estructurada para interactuar con MongoDB.
* Quieres aprovechar las características que proporciona el ODM para modelos y validaciones.

---

## 🧠 Concepto fundamental

El ODM **no reemplaza MongoDB**.

Es una herramienta para interactuar con una document database:

```text
ODM
 ↓
Herramienta para interactuar
con MongoDB
```

El flujo completo es:

```text
TypeScript
    ↓
   ODM
    ↓
MongoDB
```

Mientras que en una base de datos relacional:

```text
TypeScript
    ↓
   ORM
    ↓
   SQL
    ↓
PostgreSQL
```

### 🔑 Comparación fundamental

```text
ORM
 ↓
Relational DB
 ↓
Tables / Rows
```

vs.

```text
ODM
 ↓
Document DB
 ↓
Collections / Documents
```
