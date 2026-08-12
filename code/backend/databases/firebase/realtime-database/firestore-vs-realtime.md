# 📄 03 - Firestore vs Realtime Database

## 📑 Índice

- [� 03 - Firestore vs Realtime Database](#-03---firestore-vs-realtime-database)
  - [📑 Índice](#-índice)
- [🔥 Firebase Databases](#-firebase-databases)
- [🗄️ Firestore](#️-firestore)
- [🔄 Realtime Database](#-realtime-database)
- [🔎 Modelo de datos](#-modelo-de-datos)
- [🔍 Queries y Filtering](#-queries-y-filtering)
- [📑 Indexing](#-indexing)
- [⚡ Realtime Synchronization](#-realtime-synchronization)
    - [Firestore](#firestore)
    - [Realtime Database](#realtime-database)
- [📱 Offline Support](#-offline-support)
- [📈 Scalability](#-scalability)
- [🧱 Data Modeling](#-data-modeling)
    - [🗄️ Firestore](#️-firestore-1)
    - [🔄 Realtime Database](#-realtime-database-1)
- [🔐 Security Rules](#-security-rules)
- [💰 Pricing Model](#-pricing-model)
- [🎯 Typical Use Cases](#-typical-use-cases)
  - [🗄️ Firestore](#️-firestore-2)
  - [🔄 Realtime Database](#-realtime-database-2)
- [⭐ ¿Cuál elegir?](#-cuál-elegir)

# 🔥 Firebase Databases

Firebase ofrece dos principales bases de datos NoSQL:

```text
              FIREBASE DATABASES
                     │
            ┌────────┴────────┐
            ▼                 ▼
       Firestore       Realtime Database
            │                 │
            ▼                 ▼
 Collections /         JSON Tree
 Documents
```

La diferencia fundamental está en **el modelo de datos y el tipo de acceso que necesita tu aplicación**.

---

# 🗄️ Firestore

Firestore utiliza un **modelo documental**:

```text
Collections
    ↓
Documents
    ↓
Fields
```

Sus características principales son:

* Modelo orientado a documentos.
* Queries estructuradas.
* Filtering.
* Indexes.
* Subcollections.
* Realtime listeners.
* Escalabilidad.

Firestore resulta especialmente interesante cuando trabajas con datos que pueden organizarse naturalmente como **documentos y colecciones** y necesitas realizar consultas estructuradas sobre ellos.

---

# 🔄 Realtime Database

Realtime Database utiliza un **árbol JSON**:

```text
JSON Tree
    ↓
Nodes
    ↓
Paths
```

Sus características principales son:

* Sincronización en tiempo real.
* Estructura jerárquica.
* Datos que cambian constantemente.
* Estado compartido en tiempo real.
* Denormalización frecuente.

Es especialmente interesante cuando el modelo de datos encaja naturalmente en una estructura jerárquica y necesitas una sincronización directa y sencilla.

---

# 🔎 Modelo de datos

|                     | Firestore                             | Realtime Database      |
| ------------------- | ------------------------------------- | ---------------------- |
| **Modelo**          | Documental                            | Árbol JSON             |
| **Estructura**      | Collections → Documents → Fields      | Nodes → Paths → Values |
| **Relaciones**      | Documents, references, subcollections | Paths e IDs            |
| **Denormalización** | Puede utilizarse                      | Muy frecuente          |

---

# 🔍 Queries y Filtering

Firestore proporciona un modelo de consultas más estructurado:

```text
Collection
    ↓
Filter
    ↓
Order
    ↓
Limit
    ↓
Results
```

Realtime Database trabaja principalmente con la estructura de paths y consultas sobre el árbol:

```text
JSON Tree
    ↓
Path
    ↓
Query
    ↓
Results
```

No debes intentar pensar en ambos sistemas como si fueran SQL.

---

# 📑 Indexing

Ambos sistemas utilizan índices para optimizar determinadas consultas, pero funcionan de acuerdo con sus respectivos modelos de datos.

```text
Firestore
   ↓
Documents
   ↓
Indexes
   ↓
Queries
```

vs.

```text
Realtime Database
   ↓
JSON Tree
   ↓
Paths / indexed data
   ↓
Queries
```

---

# ⚡ Realtime Synchronization

Ambos permiten trabajar con datos en tiempo real.

### Firestore

```text
Firestore
    ↓
Realtime Listener
    ↓
Client
```

### Realtime Database

```text
Realtime Database
    ↓
Listener
    ↓
Client
```

La diferencia no es simplemente que uno tenga realtime y el otro no, sino **cómo está estructurado y consultado el dato que se sincroniza**.

---

# 📱 Offline Support

Ambos ofrecen capacidades para trabajar con datos cuando el dispositivo pierde temporalmente la conexión.

Conceptualmente:

```text
Application
    ↓
Offline
    ↓
Local state / cached data
    ↓
Connection restored
    ↓
Synchronization
```

Las capacidades concretas y su comportamiento dependen del servicio y del SDK utilizado.

---

# 📈 Scalability

Firestore está diseñado para aplicaciones que necesitan trabajar con grandes cantidades de documentos y consultas estructuradas.

Realtime Database también puede escalar, pero su modelo de árbol JSON hace que el **diseño de los datos** sea especialmente importante.

```text
Firestore
   ↓
Document-oriented
   ↓
Scalable queries
```

```text
Realtime Database
   ↓
JSON Tree
   ↓
Scalable real-time data
```

---

# 🧱 Data Modeling

Esta es una de las diferencias más importantes.

### 🗄️ Firestore

```text
Collections
    ↓
Documents
    ↓
Fields
    ↓
Subcollections
```

Su modelado está orientado a **documentos y patrones de consulta**.

### 🔄 Realtime Database

```text
JSON Tree
    ↓
Nodes
    ↓
Paths
```

Su modelado suele favorecer estructuras **planas y denormalizadas** para facilitar las lecturas.

---

# 🔐 Security Rules

Ambos servicios utilizan **Firebase Security Rules**, pero las reglas se escriben de acuerdo con el modelo de cada database.

```text
Firestore
   ↓
Firestore Security Rules
```

```text
Realtime Database
   ↓
Realtime Database Security Rules
```

La lógica general sigue siendo:

```text
Request
   ↓
Security Rules
   ↓
ALLOW / DENY
```

---

# 💰 Pricing Model

El modelo de precios es diferente entre ambos servicios.

Por eso, al elegir una database no debes considerar únicamente:

```text
¿Cuál es técnicamente mejor?
```

También debes considerar:

```text
Usage
  +
Reads / Writes
  +
Storage
  +
Network
  +
Application scale
      ↓
Cost
```

Los precios concretos pueden cambiar, así que cuando llegue el momento de trabajar con Firebase en producción conviene revisar la documentación oficial de precios.

---

# 🎯 Typical Use Cases

## 🗄️ Firestore

Puede ser una buena opción cuando necesitas:

```text
📄 Document-oriented data
🔎 Queries estructuradas
📊 Datos relativamente complejos
📈 Escalabilidad
🔗 Subcollections
⚡ Realtime listeners
```

Ejemplos conceptuales:

```text
Users
Orders
Products
Posts
Comments
```

---

## 🔄 Realtime Database

Puede ser interesante cuando necesitas:

```text
⚡ Sincronización extremadamente simple
🔄 Datos que cambian constantemente
🌳 Estructura jerárquica
📡 Estado compartido en tiempo real
```

Un ejemplo clásico es el **estado online de usuarios**:

```text
Realtime Database
        ↓
     Online status
        ↓
   User is online
        ↓
   User goes offline
        ↓
     UI updates
```

---

# ⭐ ¿Cuál elegir?

No existen reglas absolutas, pero puedes pensar así:

```text
¿Mis datos encajan naturalmente
en documentos y colecciones?
          │
          ├── Sí → Firestore puede encajar
          │
          └── No
                ↓
¿Necesito principalmente
sincronización simple y jerárquica?
          │
          └── Sí → Realtime Database puede encajar
```

La decisión depende principalmente de:

```text
Data Model
    +
Queries
    +
Realtime requirements
    +
Scale
    +
Cost
    +
Security
    ↓
Database choice
```

> **Firestore está orientado a documentos y consultas estructuradas; Realtime Database está orientada a un árbol JSON sincronizado en tiempo real.**
