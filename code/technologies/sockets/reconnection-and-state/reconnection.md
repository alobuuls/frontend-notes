# 🔁 02 — Reconnection

> 💡 **¿Qué debe hacer una aplicación cuando pierde la conexión?**

Una aplicación WebSocket debe ser capaz de recuperar la comunicación después de una desconexión para continuar funcionando correctamente.

---

## 📚 Índice

- [🔁 02 — Reconnection](#-02--reconnection)
  - [📚 Índice](#-índice)
- [1️⃣ What is Reconnection? 🔄](#1️⃣-what-is-reconnection-)
    - [🔄 Flujo](#-flujo)
- [2️⃣ Why Reconnection is Needed? 🤔](#2️⃣-why-reconnection-is-needed-)
    - [❌ Sin reconexión](#-sin-reconexión)
    - [✅ Con reconexión](#-con-reconexión)
- [3️⃣ Detecting Disconnections 🔍](#3️⃣-detecting-disconnections-)
    - [Ejemplo](#ejemplo)
    - [🔍 Flujo](#-flujo-1)
- [4️⃣ Automatic Reconnect 🤖](#4️⃣-automatic-reconnect-)
    - [🔄 Flujo](#-flujo-2)
- [5️⃣ Manual Reconnect 👤](#5️⃣-manual-reconnect-)
    - [Ejemplo](#ejemplo-1)
- [6️⃣ Reconnection Flow 🔄](#6️⃣-reconnection-flow-)
- [7️⃣ Maximum Attempts 🔢](#7️⃣-maximum-attempts-)
    - [Ejemplo](#ejemplo-2)
- [8️⃣ Reconnecting State 🟡](#8️⃣-reconnecting-state-)
    - [Estado](#estado)
    - [Ejemplo visual](#ejemplo-visual)
- [9️⃣ Reinitializing Connection 🔌](#9️⃣-reinitializing-connection-)
    - [🔄 Proceso](#-proceso)
- [🔟 Restoring Application State 🔄](#-restoring-application-state-)
    - [Ejemplos](#ejemplos)
    - [🔄 Flujo](#-flujo-3)
- [🔄 Reconnection Flow Complete](#-reconnection-flow-complete)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)
    - [🔄 Flujo](#-flujo-4)

# 1️⃣ What is Reconnection? 🔄

La **reconnection** es el proceso de volver a establecer una conexión WebSocket después de que una conexión existente se pierde.

### 🔄 Flujo

```text id="m7q3xp"
Connection Lost

        ↓

Reconnect

        ↓

Connected Again
```

---

# 2️⃣ Why Reconnection is Needed? 🤔

Las conexiones pueden perderse por diferentes razones:

```text id="q8m4vx"
Internet Lost

Server Restart

Network Problem

Connection Error
```

### ❌ Sin reconexión

```text id="p5m2qx"
Connected

    ↓

Internet Lost

    ↓

Application Broken
```

### ✅ Con reconexión

```text id="x7m3qp"
Connected

    ↓

Connection Lost

    ↓

Reconnect

    ↓

Connected Again
```

---

# 3️⃣ Detecting Disconnections 🔍

La aplicación debe detectar cuando la conexión termina.

### Ejemplo

```typescript id="n6m8qx"
onclose()
```

### 🔍 Flujo

```text id="k4q9mp"
Connection Closed

        ↓

Detect Disconnection

        ↓

Start Reconnection
```

---

# 4️⃣ Automatic Reconnect 🤖

La aplicación puede intentar reconectarse automáticamente.

### 🔄 Flujo

```text id="v8m3qx"
Connection Lost

        ↓

Reconnect Attempt

        ↓

Connection Restored
```

---

# 5️⃣ Manual Reconnect 👤

El usuario o la aplicación pueden iniciar una reconexión manual.

### Ejemplo

```text id="r5m8qx"
Click Retry

        ↓

connect()

        ↓

WebSocket Connection
```

---

# 6️⃣ Reconnection Flow 🔄

Proceso completo de recuperación:

```text id="t6m2qx"
onclose()

     ↓

wait

     ↓

connect()

     ↓

onopen()

     ↓

resume communication
```

---

# 7️⃣ Maximum Attempts 🔢

La reconexión puede tener un límite de intentos.

### Ejemplo

```text id="x3q8mv"
Attempt 1

Attempt 2

Attempt 3

Stop
```

> 💡 Permite evitar intentos infinitos.

---

# 8️⃣ Reconnecting State 🟡

Durante la recuperación, la aplicación debe representar un estado de reconexión.

### Estado

```text id="a7m4qp"
RECONNECTING
```

### Ejemplo visual

```text id="b6n9mx"
🟡 Reconnecting
```

---

# 9️⃣ Reinitializing Connection 🔌

Cuando se recupera la conexión, se debe inicializar nuevamente.

### 🔄 Proceso

```text id="c8m4qx"
Create Connection

        ↓

Handshake

        ↓

Open Connection

        ↓

Communication
```

---

# 🔟 Restoring Application State 🔄

Después de reconectar, la aplicación puede necesitar recuperar información anterior.

### Ejemplos

```text id="h5m8qx"
Restore Data

Reconnect User

Sync State
```

### 🔄 Flujo

```text id="m3q7xp"
Reconnect

      ↓

Restore State

      ↓

Continue Application
```

---

# 🔄 Reconnection Flow Complete

```text id="w8p2mq"
CONNECTED

      ↓

Connection Lost

      ↓

DISCONNECTED

      ↓

RECONNECTING

      ↓

connect()

      ↓

onopen()

      ↓

CONNECTED
```

---

# 🧠 Conceptos principales

| Concepto               | Significado                          |
| ---------------------- | ------------------------------------ |
| 🔁 Reconnect           | Crear nuevamente una conexión        |
| 🔢 Reconnect Attempts  | Número de intentos de reconexión     |
| 🔄 Connection Recovery | Recuperar la comunicación perdida    |
| 💾 State Restoration   | Restaurar el estado de la aplicación |

---

# 🎯 Al terminar

Cuando una conexión WebSocket se pierde, la aplicación puede detectar la desconexión, entrar en estado **RECONNECTING**, intentar conectarse nuevamente y restaurar la comunicación.

### 🔄 Flujo

```text id="s6m9qx"
onclose()

     ↓

wait

     ↓

connect()

     ↓

onopen()

     ↓

resume communication
```
