# 🔁 03 — Retry

> 💡 **¿Cuántas veces debería intentar conectarse nuevamente?**

Una estrategia de **Retry** permite repetir una operación que falló de manera controlada, evitando intentos excesivos que puedan afectar al sistema.

---

## 📚 Índice

- [🔁 03 — Retry](#-03--retry)
  - [📚 Índice](#-índice)
- [1️⃣ What is Retry? 🔄](#1️⃣-what-is-retry-)
    - [Ejemplo](#ejemplo)
- [2️⃣ Retry Strategy 🧠](#2️⃣-retry-strategy-)
    - [Puede controlar](#puede-controlar)
- [3️⃣ Retry Attempts 🔢](#3️⃣-retry-attempts-)
    - [Ejemplo](#ejemplo-1)
- [4️⃣ Maximum Retries 🔢](#4️⃣-maximum-retries-)
    - [Ejemplo](#ejemplo-2)
    - [🔄 Flujo](#-flujo)
- [5️⃣ Retry Delay ⏳](#5️⃣-retry-delay-)
    - [Ejemplo](#ejemplo-3)
- [6️⃣ Immediate Retry Problems ⚠️](#6️⃣-immediate-retry-problems-️)
    - [Ejemplo](#ejemplo-4)
- [7️⃣ Retry Policies 📋](#7️⃣-retry-policies-)
    - [Puede incluir](#puede-incluir)
- [8️⃣ Retry on Failure ⚠️](#8️⃣-retry-on-failure-️)
    - [🔄 Flujo](#-flujo-1)
- [9️⃣ When Not to Retry 🚫](#9️⃣-when-not-to-retry-)
    - [Ejemplos](#ejemplos)
- [🔟 Retry vs Reconnection 🔄](#-retry-vs-reconnection-)
    - [Ejemplo](#ejemplo-5)
- [🔄 Retry Flow](#-retry-flow)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)
    - [Debe controlar](#debe-controlar)

# 1️⃣ What is Retry? 🔄

**Retry** es el proceso de volver a intentar una operación que no pudo completarse correctamente.

### Ejemplo

```text id="m7q3xp"
Connect

   ↓

Failed

   ↓

Retry
```

> 💡 En WebSocket se utiliza para intentar recuperar una conexión fallida.

---

# 2️⃣ Retry Strategy 🧠

Una **Retry Strategy** define cómo y cuándo se realizarán nuevos intentos.

### Puede controlar

```text id="q8m4vx"
Number of Attempts

Delay Between Attempts

Maximum Retries
```

---

# 3️⃣ Retry Attempts 🔢

Cada nuevo intento de conexión representa un **Retry Attempt**.

### Ejemplo

```text id="p5m2qx"
First Attempt

Connect

   ↓

Failed


Retry #2

   ↓

Failed


Retry #3

   ↓

Success
```

---

# 4️⃣ Maximum Retries 🔢

Define el número máximo de veces que la aplicación intentará repetir una operación.

### Ejemplo

```text id="x7m3qp"
Maximum Retries: 3
```

### 🔄 Flujo

```text id="n6m8qx"
Attempt 1

Attempt 2

Attempt 3

Stop
```

---

# 5️⃣ Retry Delay ⏳

El **Retry Delay** es el tiempo de espera entre intentos.

### Ejemplo

```text id="k4q9mp"
Failed

   ↓

Wait

   ↓

Retry
```

> 💡 Permite controlar la frecuencia de nuevos intentos.

---

# 6️⃣ Immediate Retry Problems ⚠️

Un retry inmediato puede generar demasiados intentos seguidos.

### Ejemplo

```text id="v8m3qx"
Server Down

      ↓

Client

      ↓

Retry

Retry

Retry

Retry

Retry
```

Esto puede causar:

```text id="r5m8qx"
More Load

Server Stress

Network Spam
```

---

# 7️⃣ Retry Policies 📋

Una **Retry Policy** define las reglas para repetir operaciones.

### Puede incluir

```text id="t6m2qx"
Maximum Attempts

Delay

Retry Conditions
```

---

# 8️⃣ Retry on Failure ⚠️

El retry ocurre cuando una operación falla.

### 🔄 Flujo

```text id="x3q8mv"
Operation

      ↓

Failure

      ↓

Retry

      ↓

Success
```

---

# 9️⃣ When Not to Retry 🚫

No todas las fallas deben generar nuevos intentos.

### Ejemplos

```text id="a7m4qp"
Invalid Configuration

Authentication Error

Permanent Failure
```

> ⚠️ En estos casos, repetir la operación no resolverá el problema.

---

# 🔟 Retry vs Reconnection 🔄

| Concepto        | Significado                           |
| --------------- | ------------------------------------- |
| 🔁 Retry        | Repetir una operación fallida         |
| 🔌 Reconnection | Crear nuevamente una conexión perdida |

### Ejemplo

```text id="b6n9mx"
Reconnection

        ↓

Uses Retry Strategy

        ↓

Multiple Connection Attempts
```

---

# 🔄 Retry Flow

```text id="c8m4qx"
Connect

   ↓

Failed

   ↓

Retry #2

   ↓

Failed

   ↓

Retry #3

   ↓

Success
```

---

# 🧠 Conceptos principales

| Concepto            | Significado                     |
| ------------------- | ------------------------------- |
| 🔢 Retry Count      | Número de intentos realizados   |
| 📋 Retry Policy     | Reglas para repetir operaciones |
| ⏳ Delay             | Tiempo entre intentos           |
| 🔢 Maximum Attempts | Límite de intentos permitidos   |

---

# 🎯 Al terminar

Un **Retry** permite repetir operaciones fallidas de forma controlada usando límites y tiempos de espera para evitar sobrecargar el servidor.

### Debe controlar

```text id="h5m8qx"
Retry Count

Delay

Maximum Attempts

Retry Policy
```
