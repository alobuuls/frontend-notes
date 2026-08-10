# 📄 03 - Data Access Layer.md ⭐⭐

## 📚 ÍNDICE

- [📄 03 - Data Access Layer.md ⭐⭐](#-03---data-access-layermd-)
  - [📚 ÍNDICE](#-índice)
  - [🗄️ ¿Qué es Data Access Layer?](#️-qué-es-data-access-layer)
  - [🎯 Responsabilidad de la DAL](#-responsabilidad-de-la-dal)
  - [🧩 Database Clients](#-database-clients)
  - [📦 Repositories](#-repositories)
  - [🔄 ORM dentro de la DAL](#-orm-dentro-de-la-dal)
  - [📝 SQL dentro de la DAL](#-sql-dentro-de-la-dal)
  - [📝 CRUD](#-crud)
  - [🔎 Queries](#-queries)
  - [🔄 Mapping de datos](#-mapping-de-datos)
  - [⚠️ Manejo de errores de Database](#️-manejo-de-errores-de-database)
- [⚖️ DAL vs Service Layer](#️-dal-vs-service-layer)
    - [🗄️ Data Access Layer](#️-data-access-layer)
    - [🧠 Service Layer](#-service-layer)
- [🧩 DAL vs Repository Pattern](#-dal-vs-repository-pattern)
    - [Data Access Layer](#data-access-layer)
    - [Repository Pattern](#repository-pattern)
    - [🧠 Idea clave](#-idea-clave)

## 🗄️ ¿Qué es Data Access Layer?

La **Data Access Layer (DAL)** es la capa responsable de interactuar con la **fuente de datos**.

Su objetivo es separar el acceso a los datos del resto de la aplicación.

```text
Application
     ↓
Service Layer
     ↓
Data Access Layer
     ↓
ORM / Repository
     ↓
Database
```

---

## 🎯 Responsabilidad de la DAL

La DAL se encarga de todo lo relacionado con el acceso y manipulación de datos.

Incluye:

* Database clients
* Repositories
* ORM
* SQL
* CRUD
* Queries
* Mapping de datos
* Manejo de errores de database

---

## 🧩 Database Clients

La DAL puede utilizar un **Database Client** para comunicarse con la database.

```text
DAL
 ↓
Database Client
 ↓
Database
```

El cliente se encarga de ejecutar las operaciones necesarias contra la fuente de datos.

---

## 📦 Repositories

Los **Repositories** pueden formar parte de la DAL.

```text
Data Access Layer
       │
       ├── UserRepository
       ├── OrderRepository
       └── ProductRepository
```

Cada Repository puede encargarse del acceso a los datos de una determinada entidad o recurso.

---

## 🔄 ORM dentro de la DAL

Un ORM puede utilizarse dentro de la DAL para interactuar con una database relacional.

```text
DAL
 ↓
ORM
 ↓
Database
```

Por ejemplo:

```text
Repository
     ↓
Prisma
     ↓
PostgreSQL
```

El ORM forma parte de la implementación del acceso a datos.

---

## 📝 SQL dentro de la DAL

También puedes utilizar SQL directamente dentro de la DAL.

```text
DAL
 ↓
SQL
 ↓
PostgreSQL
```

La idea es que el SQL permanezca dentro de la capa encargada del acceso a datos, en lugar de mezclarse con la lógica de negocio.

## 📝 CRUD

La DAL puede encargarse de las operaciones CRUD:

```text
Create
Read
Update
Delete
```

Por ejemplo:

```text id="u3g8ka"
UserRepository
      │
      ├── create()
      ├── findById()
      ├── update()
      └── delete()
```

---

## 🔎 Queries

Las queries pertenecen a la parte de acceso a datos.

```text id="0w3f5x"
Service
   ↓
DAL
   ↓
Query
   ↓
Database
```

La Service Layer no necesita conocer necesariamente los detalles de cómo se ejecuta la query.

---

## 🔄 Mapping de datos

La DAL también puede encargarse de transformar los datos entre la representación de la database y la representación utilizada por la aplicación.

Conceptualmente:

```text id="v8n6bp"
Database Data
      ↓
   Mapping
      ↓
Application Data
```

Por ejemplo:

```text id="j2x7mp"
Database
   ↓
Database Row
   ↓
Mapper
   ↓
Application Object
```

---

## ⚠️ Manejo de errores de Database

Los errores producidos durante el acceso a datos deben ser manejados dentro de la capa correspondiente.

```text id="5m9q1z"
Database
    ↓
❌ Error
    ↓
Data Access Layer
    ↓
Service
```

La DAL puede detectar errores específicos de la database y permitir que las capas superiores los manejen apropiadamente.

---

# ⚖️ DAL vs Service Layer

### 🗄️ Data Access Layer

Se encarga del **acceso a datos**:

```text id="4b6k2p"
DAL
 ↓
Queries
 ↓
CRUD
 ↓
Database
```

### 🧠 Service Layer

Se encarga de la **lógica de negocio**:

```text id="8r1m7c"
Service
 ↓
Business Rules
 ↓
Business Logic
```

La diferencia fundamental:

| Capa        | Responsabilidad                |
| ----------- | ------------------------------ |
| **Service** | ¿Qué debe hacer la aplicación? |
| **DAL**     | ¿Cómo accedo a los datos?      |

---

# 🧩 DAL vs Repository Pattern

No son lo mismo.

### Data Access Layer

Es el concepto de una **capa completa**:

```text id="q6s4yx"
Data Access Layer
       ↓
Todo lo relacionado con acceder a datos
```

### Repository Pattern

Es un **patrón** que puede utilizarse dentro de esa capa:

```text id="e2p9wd"
Data Access Layer
       │
       ├── UserRepository
       ├── OrderRepository
       └── ProductRepository
```

Por ejemplo:

```text id="c7h4vn"
Controller
    ↓
Service
    ↓
Repository
    ↓
Prisma
    ↓
PostgreSQL
```

Aquí:

```text id="n5k8tz"
Repository + Prisma
        ↓
Data Access Layer
```

### 🧠 Idea clave

> **DAL = la capa.**
> **Repository = un patrón que puede formar parte de esa capa.**
