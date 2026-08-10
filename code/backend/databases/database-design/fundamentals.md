# 📄 FUNDAMENTALS 

Aquí estudias **qué significa diseñar una base de datos**.

---

## 📚 ÍNDICE

- [📄 FUNDAMENTALS](#-fundamentals)
  - [📚 ÍNDICE](#-índice)
  - [🧠 DATABASE DESIGN](#-database-design)
    - [1️⃣ 🏗️ ¿QUÉ ES DATABASE DESIGN?](#1️⃣-️-qué-es-database-design)
    - [2️⃣ 🎯 OBJETIVOS DEL DISEÑO](#2️⃣--objetivos-del-diseño)
    - [3️⃣ 📋 IDENTIFICAR LOS DATOS NECESARIOS](#3️⃣--identificar-los-datos-necesarios)
    - [4️⃣ 🧩 IDENTIFICAR ENTIDADES](#4️⃣--identificar-entidades)
    - [5️⃣ 📝 IDENTIFICAR ATRIBUTOS](#5️⃣--identificar-atributos)
    - [6️⃣ 🔗 IDENTIFICAR RELACIONES](#6️⃣--identificar-relaciones)
    - [7️⃣ 🔢 DEFINIR CARDINALIDAD](#7️⃣--definir-cardinalidad)
    - [8️⃣ 🔐 DEFINIR RESTRICCIONES](#8️⃣--definir-restricciones)
    - [9️⃣ 🚫 EVITAR DATOS DUPLICADOS](#9️⃣--evitar-datos-duplicados)
    - [🔟 🗃️ CONVERTIR EL DISEÑO EN TABLAS](#-️-convertir-el-diseño-en-tablas)
  - [🔄 DATABASE DESIGN PROCESS](#-database-design-process)
    - [🎯 IDEA CLAVE](#-idea-clave)

## 🧠 DATABASE DESIGN

### 1️⃣ 🏗️ ¿QUÉ ES DATABASE DESIGN?

**Database Design** es el proceso de definir cómo se organizarán y relacionarán los datos dentro de una base de datos.

El objetivo es transformar los requisitos de una aplicación en una estructura de datos organizada.

---

### 2️⃣ 🎯 OBJETIVOS DEL DISEÑO

Un buen diseño busca:

* Organizar correctamente los datos.
* Evitar datos duplicados.
* Representar correctamente las relaciones.
* Mantener la integridad de los datos.
* Definir restricciones adecuadas.
* Facilitar el acceso y mantenimiento de la información.

---

### 3️⃣ 📋 IDENTIFICAR LOS DATOS NECESARIOS

Primero debes determinar **qué información necesita almacenar la aplicación**.

Por ejemplo, para una aplicación de usuarios:

```text
Users

id
name
email
birth_date
```

---

### 4️⃣ 🧩 IDENTIFICAR ENTIDADES

Una **entidad** representa algo sobre lo que necesitas almacenar información.

Por ejemplo:

```text
User
Order
Product
Category
```

Cada entidad puede convertirse posteriormente en una tabla.

---

### 5️⃣ 📝 IDENTIFICAR ATRIBUTOS

Los **atributos** representan las características de una entidad.

Por ejemplo:

```text
User
 │
 ├── id
 ├── name
 ├── email
 └── birth_date
```

Estos atributos posteriormente se convierten en columnas.

---

### 6️⃣ 🔗 IDENTIFICAR RELACIONES

Debes identificar cómo se conectan las diferentes entidades.

Por ejemplo:

```text
User
 │
 └── Orders
```

Esto representa una relación entre `User` y `Order`.

---

### 7️⃣ 🔢 DEFINIR CARDINALIDAD

La **cardinalidad** indica cuántas instancias de una entidad pueden relacionarse con otra.

Por ejemplo:

| Cardinalidad |
| ------------ |
| `1 : 1`      |
| `1 : N`      |
| `N : M`      |

Debes determinar qué tipo de relación existe entre las entidades.

---

### 8️⃣ 🔐 DEFINIR RESTRICCIONES

Las **constraints** ayudan a garantizar la integridad de los datos.

Por ejemplo:

| Constraints   |
| ------------- |
| `PRIMARY KEY` |
| `FOREIGN KEY` |
| `UNIQUE`      |
| `NOT NULL`    |

Estas restricciones definen qué valores pueden almacenarse y cómo pueden relacionarse los registros.

---

### 9️⃣ 🚫 EVITAR DATOS DUPLICADOS

El diseño debe evitar almacenar innecesariamente la misma información varias veces.

Por ejemplo, en lugar de repetir los datos de un usuario en cada pedido:

```text
Order
 ├── user_name
 ├── user_email
 └── user_phone
```

puedes relacionar el pedido con el usuario:

```text
User
  │
  └── Order
```

utilizando una `FOREIGN KEY`.

---

### 🔟 🗃️ CONVERTIR EL DISEÑO EN TABLAS

Finalmente, el diseño conceptual se transforma en estructuras de la base de datos.

Por ejemplo:

```text
User
 ↓
users

Order
 ↓
orders
```

Con sus respectivas columnas, claves, relaciones y constraints.

---

## 🔄 DATABASE DESIGN PROCESS

El proceso general:

```text
Requisitos
    ↓
Entidades
    ↓
Atributos
    ↓
Relaciones
    ↓
Cardinalidad
    ↓
Constraints
    ↓
Tables
```

### 🎯 IDEA CLAVE

> **Database Design consiste en transformar los requisitos de una aplicación en una estructura organizada de entidades, atributos, relaciones, cardinalidades y restricciones que finalmente se representan mediante tablas.**
