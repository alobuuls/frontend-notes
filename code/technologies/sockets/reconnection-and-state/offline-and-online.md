# 🚀 04 — Exponential Backoff

> 💡 **¿Cómo evitamos saturar el servidor cuando muchos clientes intentan reconectar?**

**Exponential Backoff** es una estrategia de reconexión que aumenta progresivamente el tiempo de espera entre intentos para evitar sobrecargar el servidor.

---

## 📚 Índice

- [🚀 04 — Exponential Backoff](#-04--exponential-backoff)
  - [📚 Índice](#-índice)
- [1️⃣ What is Exponential Backoff? ⏳](#1️⃣-what-is-exponential-backoff-)
    - [En lugar de:](#en-lugar-de)
    - [Se utilizan esperas progresivas:](#se-utilizan-esperas-progresivas)
- [2️⃣ Why Use Backoff? 🤔](#2️⃣-why-use-backoff-)
    - [❌ Problema](#-problema)
- [3️⃣ Retry Delays ⏱️](#3️⃣-retry-delays-️)
    - [Ejemplo](#ejemplo)
    - [Con Exponential Backoff](#con-exponential-backoff)
- [4️⃣ Backoff Formula 🧮](#4️⃣-backoff-formula-)
    - [Ejemplo](#ejemplo-1)
    - [Siguiente intento](#siguiente-intento)
- [5️⃣ Maximum Delay 🛑](#5️⃣-maximum-delay-)
    - [Ejemplo](#ejemplo-2)
- [6️⃣ Jitter 🎲](#6️⃣-jitter-)
    - [Ejemplo](#ejemplo-3)
    - [❌ Sin jitter](#-sin-jitter)
    - [✅ Con jitter](#-con-jitter)
- [7️⃣ Real-World Usage 🌎](#7️⃣-real-world-usage-)
    - [Ejemplos](#ejemplos)
- [8️⃣ Reconnection Algorithm 🔄](#8️⃣-reconnection-algorithm-)
    - [Flujo general](#flujo-general)
- [🔁 Exponential Backoff Flow](#-exponential-backoff-flow)
- [⚠️ Thundering Herd Problem](#️-thundering-herd-problem)
    - [Ejemplo](#ejemplo-4)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)
    - [Ejemplo](#ejemplo-5)

# 1️⃣ What is Exponential Backoff? ⏳

**Exponential Backoff** es una técnica donde cada nuevo intento de reconexión espera más tiempo que el anterior.

### En lugar de:

```text id="m7q3xp"
Retry

Retry

Retry
```

### Se utilizan esperas progresivas:

```text id="q8m4vx"
Attempt 1

1 second


Attempt 2

2 seconds


Attempt 3

4 seconds


Attempt 4

8 seconds
```

---

# 2️⃣ Why Use Backoff? 🤔

Cuando muchos clientes intentan reconectar al mismo tiempo, pueden generar una sobrecarga.

### ❌ Problema

```text id="p5m2qx"
Server Restart

        ↓

10000 clients reconnect instantly

        ↓

Server overload
```

> 💡 Backoff permite distribuir los intentos en el tiempo.

---

# 3️⃣ Retry Delays ⏱️

El **Retry Delay** define cuánto tiempo espera la aplicación antes de realizar otro intento.

### Ejemplo

```text id="x7m3qp"
Failed

   ↓

Wait 2 seconds

   ↓

Retry
```

### Con Exponential Backoff

```text id="n6m8qx"
1s

2s

4s

8s
```

---

# 4️⃣ Backoff Formula 🧮

La fórmula conceptual es:

```text id="k4q9mp"
delay = base * 2 ^ attempts
```

### Ejemplo

```text id="v8m3qx"
base = 1 second

attempt 0

delay = 1 * 2^0

= 1 second
```

### Siguiente intento

```text id="r5m8qx"
attempt 3

delay = 1 * 2^3

= 8 seconds
```

---

# 5️⃣ Maximum Delay 🛑

El tiempo de espera puede tener un límite máximo.

### Ejemplo

```text id="t6m2qx"
1s

2s

4s

8s

16s

Maximum: 30s
```

> 💡 Evita esperas demasiado grandes.

---

# 6️⃣ Jitter 🎲

**Jitter** agrega un valor aleatorio al tiempo de espera.

### Ejemplo

```text id="x3q8mv"
2 seconds

+

random value
```

> 💡 Esto evita que muchos clientes realicen la reconexión exactamente al mismo tiempo.

### ❌ Sin jitter

```text id="a7m4qp"
Client A → Retry at 5s

Client B → Retry at 5s

Client C → Retry at 5s
```

### ✅ Con jitter

```text id="b6n9mx"
Client A → Retry at 5.2s

Client B → Retry at 5.8s

Client C → Retry at 6.1s
```

---

# 7️⃣ Real-World Usage 🌎

Exponential Backoff se utiliza en sistemas donde muchas conexiones pueden fallar al mismo tiempo.

### Ejemplos

```text id="c8m4qx"
WebSocket Reconnection

API Requests

Distributed Systems

Cloud Services
```

---

# 8️⃣ Reconnection Algorithm 🔄

### Flujo general

```text id="h5m8qx"
Connection Lost

        ↓

Calculate Delay

        ↓

Wait

        ↓

Reconnect Attempt

        ↓

Success

        ↓

Connection Restored
```

---

# 🔁 Exponential Backoff Flow

```text id="m3q7xp"
Connection Lost

        ↓

Attempt 1

Wait 1s

        ↓

Attempt 2

Wait 2s

        ↓

Attempt 3

Wait 4s

        ↓

Attempt 4

Wait 8s
```

---

# ⚠️ Thundering Herd Problem

El **Thundering Herd Problem** ocurre cuando muchos clientes intentan realizar la misma acción al mismo tiempo.

### Ejemplo

```text id="w8p2mq"
Server Restart

        ↓

Thousands of Clients

        ↓

Reconnect Together

        ↓

Server Overload
```

> 💡 Exponential Backoff + Jitter ayuda a evitar este problema.

---

# 🧠 Conceptos principales

| Concepto                   | Significado                                   |
| -------------------------- | --------------------------------------------- |
| 🚀 Exponential Backoff     | Aumenta progresivamente los tiempos de espera |
| 🎲 Jitter                  | Valor aleatorio añadido al delay              |
| ⏳ Retry Delay              | Tiempo antes del siguiente intento            |
| 🐘 Thundering Herd Problem | Muchos clientes actuando al mismo tiempo      |

---

# 🎯 Al terminar

**Exponential Backoff** evita saturar un servidor durante reconexiones aumentando progresivamente el tiempo entre intentos.

### Ejemplo

```text
Attempt 1 → 1s

Attempt 2 → 2s

Attempt 3 → 4s

Attempt 4 → 8s
```

> 💡 Con **Jitter** se evita que todos los clientes reconecten exactamente al mismo tiempo.
