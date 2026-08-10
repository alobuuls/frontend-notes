# 📄 ENTITIES

Aquí estudias **qué cosas existen dentro del sistema y que necesitas almacenar**.

---

## 📑 ÍNDICE 

- [📄 ENTITIES](#-entities)
  - [📑 ÍNDICE](#-índice)
  - [1️⃣ 🧩 ¿QUÉ ES UNA ENTITY?](#1️⃣--qué-es-una-entity)
  - [2️⃣ 🔎 IDENTIFICACIÓN DE ENTIDADES](#2️⃣--identificación-de-entidades)
  - [3️⃣ ⭐ ENTIDADES PRINCIPALES](#3️⃣--entidades-principales)
  - [4️⃣ 🧩 ENTIDADES DEPENDIENTES](#4️⃣--entidades-dependientes)
  - [5️⃣ 🔗 ENTIDADES INTERMEDIAS](#5️⃣--entidades-intermedias)
  - [6️⃣ 🆚 ENTITY VS TABLE](#6️⃣--entity-vs-table)
    - [🎯 IDEA CLAVE](#-idea-clave)

## 1️⃣ 🧩 ¿QUÉ ES UNA ENTITY?

Una **Entity** es una cosa, objeto, concepto o elemento importante dentro de un sistema sobre el cual necesitas almacenar información.

Por ejemplo, en un e-commerce:

```text
User
Product
Order
Address
Payment
```

Cada uno representa algo diferente que existe dentro del sistema.

---

## 2️⃣ 🔎 IDENTIFICACIÓN DE ENTIDADES

Para identificar entidades, piensa:

> **¿Qué cosas importantes existen en mi sistema?**

Por ejemplo:

```text
Sistema de viajes

Guest
Trip
Destination
Country
```

Cada uno podría representar una entidad porque el sistema necesita almacenar información sobre ellos.

---

## 3️⃣ ⭐ ENTIDADES PRINCIPALES

Son las entidades que representan los elementos **principales del sistema**.

Por ejemplo, en un e-commerce:

```text
User
Product
Order
```

Estas entidades normalmente tienen información propia y participan en diferentes relaciones.

---

## 4️⃣ 🧩 ENTIDADES DEPENDIENTES

Una entidad dependiente es aquella cuya existencia está relacionada con otra entidad.

Por ejemplo:

```text
User
 │
 └── Address
```

Un `Address` puede estar asociado a un `User`.

La dependencia debe analizarse dentro del contexto del sistema y de sus reglas.

---

## 5️⃣ 🔗 ENTIDADES INTERMEDIAS

Una entidad intermedia se utiliza para representar una relación entre otras entidades.

Especialmente aparece en relaciones **Many-to-Many**.

Por ejemplo:

```text
Student
   ↕
Course
```

Puede existir una entidad intermedia:

```text
Student
    │
    ▼
StudentCourse
    ▲
    │
Course
```

Esta entidad representa la asociación entre ambas.

---

## 6️⃣ 🆚 ENTITY VS TABLE

Una **Entity** pertenece principalmente al nivel de **diseño y modelado**.

Una **Table** pertenece al nivel de **implementación dentro de la base de datos**.

Conceptualmente:

```text
Entity
   ↓
Diseño
   ↓
Table
   ↓
Database
```

Por ejemplo:

```text
Entity
  ↓
User
  ↓
Table
  ↓
users
```

No necesariamente debes asumir que **cada entity siempre se convierte exactamente en una tabla**, pero esta es una correspondencia muy común en bases de datos relacionales.

### 🎯 IDEA CLAVE

> **Una Entity representa una cosa importante del sistema sobre la que necesitamos almacenar información; una Table es la estructura utilizada para almacenar esos datos dentro de la base de datos.**
