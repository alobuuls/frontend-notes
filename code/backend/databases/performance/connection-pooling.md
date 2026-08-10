# 📄 CONNECTION POOLING

**Connection Pooling** es una técnica utilizada para administrar y reutilizar conexiones entre una aplicación y una database.

Cuando Express necesita comunicarse con PostgreSQL, necesita una conexión.

---

# 📑 ÍNDICE — CONNECTION POOLING

- [📄 CONNECTION POOLING](#-connection-pooling)
- [📑 ÍNDICE — CONNECTION POOLING](#-índice--connection-pooling)
  - [1️⃣ 🧠 ¿QUÉ ES CONNECTION POOLING?](#1️⃣--qué-es-connection-pooling)
  - [2️⃣ 🔌 DATABASE CONNECTIONS](#2️⃣--database-connections)
  - [3️⃣ 🏊 CONNECTION POOL](#3️⃣--connection-pool)
  - [4️⃣ ➕ CREAR CONEXIONES](#4️⃣--crear-conexiones)
  - [5️⃣ ♻️ REUTILIZAR CONEXIONES](#5️⃣-️-reutilizar-conexiones)
  - [6️⃣ 📏 POOL SIZE](#6️⃣--pool-size)
  - [7️⃣ 🔢 MAXIMUM CONNECTIONS](#7️⃣--maximum-connections)
  - [8️⃣ 📉 MINIMUM CONNECTIONS](#8️⃣--minimum-connections)
  - [9️⃣ ⏱️ CONNECTION TIMEOUT](#9️⃣-️-connection-timeout)
  - [🔟 💤 IDLE CONNECTIONS](#--idle-connections)
  - [1️⃣1️⃣ 🚨 CONNECTION LEAKS](#1️⃣1️⃣--connection-leaks)
  - [1️⃣2️⃣ 🟢 POOLING EN NODE.JS](#1️⃣2️⃣--pooling-en-nodejs)
  - [1️⃣3️⃣ 🐘 POOLING EN POSTGRESQL](#1️⃣3️⃣--pooling-en-postgresql)
- [🔄 FLUJO COMPLETO](#-flujo-completo)
    - [❌ Sin pooling](#-sin-pooling)
    - [✅ Con pooling](#-con-pooling)
- [🧠 CONEXIÓN CON EL BACKEND](#-conexión-con-el-backend)
- [🧠 CÓMO SE CONECTA TODA LA CARPETA](#-cómo-se-conecta-toda-la-carpeta)
    - [🎯 IDEA GENERAL](#-idea-general)

## 1️⃣ 🧠 ¿QUÉ ES CONNECTION POOLING?

Una forma ingenua sería crear y cerrar una conexión para cada request:

```text
Request
   ↓
Crear conexión
   ↓
Query
   ↓
Cerrar conexión
```

Si existen muchas requests:

```text
Request 1 → conexión
Request 2 → conexión
Request 3 → conexión
Request 4 → conexión
...
```

Crear y cerrar conexiones constantemente puede ser costoso.

Con **Connection Pooling**, las conexiones se mantienen disponibles y pueden reutilizarse:

```text
              ┌── Connection 1
              ├── Connection 2
Express ──────┼── Connection 3
              ├── Connection 4
              └── Connection 5
                    ↓
                 Database
```

---

## 2️⃣ 🔌 DATABASE CONNECTIONS

Una **Database Connection** es la comunicación establecida entre una aplicación y la database.

```text
Application
     ↓
Connection
     ↓
Database
```

A través de esta conexión la aplicación puede enviar queries y recibir resultados.

---

## 3️⃣ 🏊 CONNECTION POOL

Un **Connection Pool** es un conjunto de conexiones disponibles para ser utilizadas por la aplicación.

```text
Connection Pool
     │
     ├── Connection 1
     ├── Connection 2
     ├── Connection 3
     ├── Connection 4
     └── Connection 5
```

Cuando una request necesita ejecutar una query, puede utilizar una conexión disponible del pool.

---

## 4️⃣ ➕ CREAR CONEXIONES

El pool puede crear conexiones con la database.

```text
Connection Pool
      ↓
Crear conexiones
      ↓
Database
```

No es necesario crear una conexión completamente nueva para cada request.

---

## 5️⃣ ♻️ REUTILIZAR CONEXIONES

Una de las principales ventajas del pooling es que las conexiones pueden reutilizarse.

```text
Request
   ↓
Pool
   ↓
Connection 1
   ↓
Query
   ↓
Connection vuelve al Pool
```

Después otra request puede utilizar esa misma conexión.

```text
Request 2
   ↓
Pool
   ↓
Connection 1
   ↓
Query
```

---

## 6️⃣ 📏 POOL SIZE

El **Pool Size** representa la cantidad de conexiones que el pool puede mantener disponibles.

Por ejemplo:

```text
Pool Size = 5

Connection 1
Connection 2
Connection 3
Connection 4
Connection 5
```

El tamaño debe configurarse de acuerdo con las necesidades de la aplicación y la capacidad de la database.

---

## 7️⃣ 🔢 MAXIMUM CONNECTIONS

El **Maximum Connections** establece el número máximo de conexiones que pueden existir simultáneamente.

Por ejemplo:

```text
Maximum Connections = 10
```

El pool no debería superar ese límite.

Esto es importante porque la database también tiene un límite de conexiones que puede manejar.

---

## 8️⃣ 📉 MINIMUM CONNECTIONS

El **Minimum Connections** establece la cantidad mínima de conexiones que el pool puede mantener disponibles.

Conceptualmente:

```text
Minimum = 2

Pool
 ├── Connection 1
 └── Connection 2
```

Esto permite mantener conexiones disponibles incluso cuando la carga es baja.

---

## 9️⃣ ⏱️ CONNECTION TIMEOUT

Un **Connection Timeout** establece cuánto tiempo se espera para obtener una conexión antes de considerar que la operación ha fallado.

Conceptualmente:

```text
Request
   ↓
Pool
   ↓
¿Hay conexión disponible?
   ↓
Esperar
   ↓
Timeout
```

Esto evita que una request permanezca esperando indefinidamente.

## 🔟 💤 IDLE CONNECTIONS

Una **Idle Connection** es una conexión que actualmente no está ejecutando una operación, pero permanece disponible en el pool.

```text
Pool
 ├── Connection 1 → 🟢 Active
 ├── Connection 2 → 💤 Idle
 ├── Connection 3 → 💤 Idle
 └── Connection 4 → 🟢 Active
```

Las conexiones idle pueden reutilizarse cuando llegan nuevas requests.

---

## 1️⃣1️⃣ 🚨 CONNECTION LEAKS

Un **Connection Leak** ocurre cuando una conexión obtenida del pool no se devuelve correctamente.

Conceptualmente:

```text
Request
   ↓
Pool
   ↓
Connection
   ↓
Query
   ↓
❌ No devuelve la conexión
```

Si esto ocurre repetidamente:

```text
Connection 1 → perdida
Connection 2 → perdida
Connection 3 → perdida
...
```

el pool puede quedarse sin conexiones disponibles.

> Por eso las conexiones deben liberarse correctamente después de utilizarlas.

---

## 1️⃣2️⃣ 🟢 POOLING EN NODE.JS

Cuando una aplicación Node.js utiliza una database, normalmente utiliza un **Database Driver** que proporciona mecanismos para administrar conexiones.

```text
Node.js
   ↓
Database Driver
   ↓
Connection Pool
   ↓
Database
```

Express recibe la request y utiliza el driver para ejecutar las queries mediante el pool.

---

## 1️⃣3️⃣ 🐘 POOLING EN POSTGRESQL

Cuando trabajas con PostgreSQL desde Node.js, puedes utilizar un connection pool para administrar las conexiones.

```text
Express
   ↓
PostgreSQL Driver
   ↓
Connection Pool
   ↓
PostgreSQL
```

Las diferentes requests pueden reutilizar las conexiones disponibles.

---

# 🔄 FLUJO COMPLETO

### ❌ Sin pooling

```text
Request
   ↓
Crear conexión
   ↓
Query
   ↓
Cerrar conexión
```

### ✅ Con pooling

```text
Request
   ↓
Connection Pool
   ↓
Obtener conexión disponible
   ↓
Query
   ↓
Liberar conexión
   ↓
Connection vuelve al Pool
```

---

# 🧠 CONEXIÓN CON EL BACKEND

El flujo que debes tener en mente es:

```text
Express
   ↓
Database Driver
   ↓
Connection Pool
   ↓
PostgreSQL
```

El pool permite **reutilizar conexiones** y evitar el coste de crear y cerrar una conexión para cada request.

---

# 🧠 CÓMO SE CONECTA TODA LA CARPETA

Ahora puedes visualizar la carpeta de **Performance** así:

```text
                    🗄️ DATABASE
                         │
                         ▼
                  📊 PERFORMANCE
                         │
        ┌────────────────┼────────────────┐
        ▼                ▼                ▼
     Indexes         Query Tuning     Pagination
        │                │                │
        └────────────┬───┴────────────────┘
                     ▼
              Execution Plans
                     │
                     ▼
                Optimization
```

Y fuera de las queries:

```text
                 🚀 APPLICATION
                       │
             ┌─────────┴─────────┐
             ▼                   ▼
          Caching          Connection Pool
             │                   │
             ▼                   ▼
           Redis             Database
```

### 🎯 IDEA GENERAL

> **Indexes y Query Optimization mejoran cómo se consultan los datos; Caching reduce consultas innecesarias; Connection Pooling optimiza cómo la aplicación se conecta con la database.**
