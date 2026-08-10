# 📄 CACHING

**Caching** consiste en almacenar temporalmente datos que se consultan frecuentemente para poder recuperarlos más rápidamente sin tener que consultar constantemente la database.

## 📑 ÍNDICE 

- [📄 CACHING](#-caching)
  - [📑 ÍNDICE](#-índice)
    - [💡 IDEA PRINCIPAL](#-idea-principal)
      - [❌ Sin Cache](#-sin-cache)
      - [✅ Con Cache](#-con-cache)
  - [1️⃣ 🧠 ¿QUÉ ES CACHING?](#1️⃣--qué-es-caching)
  - [2️⃣ ⚡ ¿POR QUÉ UTILIZAR CACHE?](#2️⃣--por-qué-utilizar-cache)
    - [❌ Sin cache](#-sin-cache-1)
    - [✅ Con cache](#-con-cache-1)
  - [3️⃣ 🎯 CACHE HIT](#3️⃣--cache-hit)
  - [4️⃣ ❌ CACHE MISS](#4️⃣--cache-miss)
  - [5️⃣ 🔄 CACHE INVALIDATION](#5️⃣--cache-invalidation)
  - [6️⃣ ⏱️ TTL](#6️⃣-️-ttl)
  - [7️⃣ 🧠 IN-MEMORY CACHE](#7️⃣--in-memory-cache)
  - [8️⃣ 🌐 DISTRIBUTED CACHE](#8️⃣--distributed-cache)
  - [9️⃣ 🔴 REDIS](#9️⃣--redis)
    - [✅ Si existe](#-si-existe)
    - [❌ Si no existe](#-si-no-existe)
  - [🔟 🔄 CACHE-ASIDE PATTERN](#--cache-aside-pattern)
    - [🔁 Flujo](#-flujo)
  - [1️⃣1️⃣ 🎯 ¿QUÉ DATOS CONVIENE CACHEAR?](#1️⃣1️⃣--qué-datos-conviene-cachear)
  - [1️⃣2️⃣ ⚠️ PROBLEMAS DE CONSISTENCIA](#1️⃣2️⃣-️-problemas-de-consistencia)
  - [🧠 IDEA PRINCIPAL](#-idea-principal-1)

### 💡 IDEA PRINCIPAL

#### ❌ Sin Cache

```text
Request
   ↓
Database
   ↓
Response
```

#### ✅ Con Cache

```text
Request
   ↓
Cache
   ↓
¿Existe?
 ├── Sí → Response
 │
 └── No
      ↓
   Database
      ↓
    Cache
      ↓
   Response
```

---

## 1️⃣ 🧠 ¿QUÉ ES CACHING?

**Caching** es la técnica de almacenar temporalmente información para poder acceder a ella más rápidamente en futuras solicitudes.

Conceptualmente:

```text
Request
   ↓
Cache
   ↓
Datos
```

Si los datos no están disponibles:

```text
Request
   ↓
Cache
   ↓
No existe
   ↓
Database
```

---

## 2️⃣ ⚡ ¿POR QUÉ UTILIZAR CACHE?

El objetivo principal es evitar consultas innecesarias a la database.

### ❌ Sin cache

```text
Request
   ↓
PostgreSQL
   ↓
Response

Request
   ↓
PostgreSQL
   ↓
Response

Request
   ↓
PostgreSQL
   ↓
Response
```

### ✅ Con cache

```text
Request
   ↓
Cache
   ↓
Response
```

Esto puede reducir la carga sobre la database y mejorar los tiempos de respuesta.

---

## 3️⃣ 🎯 CACHE HIT

Un **Cache Hit** ocurre cuando los datos solicitados **sí existen en el cache**.

```text
Request
   ↓
Cache
   ↓
✅ Existe
   ↓
Response
```

Ejemplo conceptual:

```text
Request → users:123
             ↓
          Cache
             ↓
        encontrado
             ↓
          Response
```

---

## 4️⃣ ❌ CACHE MISS

Un **Cache Miss** ocurre cuando los datos solicitados **no existen en el cache**.

```text
Request
   ↓
Cache
   ↓
❌ No existe
   ↓
Database
```

Después de obtener los datos, pueden almacenarse en el cache:

```text
Database
   ↓
Datos
   ↓
Cache
```

---

## 5️⃣ 🔄 CACHE INVALIDATION

La **Cache Invalidation** consiste en determinar cuándo un dato almacenado en cache deja de ser válido.

Por ejemplo:

```text
Database
   ↓
User name = "Ana"
   ↓
Cache
```

Si posteriormente cambia en la database:

```text
Database
   ↓
User name = "Alo"
```

el valor almacenado en cache puede quedar desactualizado.

Por eso es necesario invalidarlo o actualizarlo.

```text
Database cambia
      ↓
Cache
      ↓
❌ dato antiguo
      ↓
Invalidation
```

---

## 6️⃣ ⏱️ TTL

**TTL** significa **Time To Live**.

Indica cuánto tiempo puede permanecer un dato en cache antes de expirar.

Por ejemplo:

```text
TTL = 60 segundos
```

Conceptualmente:

```text
Cache
  ↓
Dato almacenado
  ↓
60 segundos
  ↓
Expira
```

Después de expirar:

```text
Cache
   ↓
❌ Expirado
   ↓
Database
```

## 7️⃣ 🧠 IN-MEMORY CACHE

Un **In-Memory Cache** almacena los datos directamente en memoria.

Conceptualmente:

```text id="r7q0my"
Application
     ↓
Memory
     ↓
Cache
```

El acceso a memoria puede ser muy rápido.

Sin embargo, este tipo de cache depende de la memoria disponible y tiene limitaciones cuando existen múltiples instancias de una aplicación.

---

## 8️⃣ 🌐 DISTRIBUTED CACHE

Un **Distributed Cache** es un cache accesible por diferentes instancias de una aplicación.

Conceptualmente:

```text id="6t4j5h"
          ┌── App Instance 1
          │
Cache ────┼── App Instance 2
          │
          └── App Instance 3
```

Esto permite que diferentes instancias compartan los mismos datos almacenados en cache.

---

## 9️⃣ 🔴 REDIS

**Redis** es una tecnología muy utilizada para implementar caches.

Un escenario común:

```text id="v2f3rj"
Express
   ↓
Redis
   ↓
PostgreSQL
```

La aplicación puede consultar primero Redis:

```text id="z4z0mw"
Request
   ↓
Redis
   ↓
¿Existe?
```

### ✅ Si existe

```text id="d4j6p1"
Redis
 ↓
Response
```

### ❌ Si no existe

```text id="p6g1x9"
Redis
 ↓
❌
 ↓
PostgreSQL
 ↓
Redis
 ↓
Response
```

---

## 🔟 🔄 CACHE-ASIDE PATTERN

En el **Cache-aside Pattern**, la aplicación consulta primero el cache y, si no encuentra los datos, consulta la database.

### 🔁 Flujo

```text id="x5n0rq"
Request
   ↓
Cache
   ↓
¿Existe?
 ├── Sí
 │    ↓
 │ Response
 │
 └── No
      ↓
   Database
      ↓
    Cache
      ↓
   Response
```

La aplicación es responsable de cargar los datos al cache cuando ocurre un **Cache Miss**.

---

## 1️⃣1️⃣ 🎯 ¿QUÉ DATOS CONVIENE CACHEAR?

No todos los datos necesitan estar en cache.

Puede ser útil cachear datos que:

* ✔️ Se consultan frecuentemente
* ✔️ Cambian poco
* ✔️ Son costosos de obtener
* ✔️ Pueden reutilizarse entre requests

Conceptualmente:

```text id="l4y0c2"
Muchas lecturas
      +
Pocos cambios
      ↓
Buen candidato para Cache
```

---

## 1️⃣2️⃣ ⚠️ PROBLEMAS DE CONSISTENCIA

El principal problema del caching es que el cache puede contener información diferente a la database.

Por ejemplo:

```text id="8x5z0v"
Database
name = "Alo"
```

pero:

```text id="4n3j5k"
Cache
name = "Ana"
```

Entonces:

```text id="5d9q1p"
Database ≠ Cache
```

Esto genera un problema de **consistencia**.

Por eso debes decidir cuándo:

```text id="s4w7q2"
Actualizar Cache
      o
Invalidar Cache
      o
Esperar TTL
```

---

## 🧠 IDEA PRINCIPAL

El flujo típico puede ser:

```text id="0j4m8x"
Express
   ↓
Cache
   ↓
¿Existe?
 ├── Sí → Response
 │
 └── No
      ↓
   PostgreSQL
      ↓
    Cache
      ↓
   Response
```

> **Caching mejora performance, pero introduce complejidad de consistencia e invalidación.**
