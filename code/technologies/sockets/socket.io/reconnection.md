# 📄 07 — Reconnection 🔄

> 💡 **¿Qué pasa si el usuario pierde conexión?**
>
> **Socket.IO puede intentar restablecer automáticamente la conexión cuando se produce una desconexión.**

---

## 📚 Índice

- [📄 07 — Reconnection 🔄](#-07--reconnection-)
  - [📚 Índice](#-índice)
- [1️⃣ Automatic Reconnection 🔄](#1️⃣-automatic-reconnection-)
- [2️⃣ Reconnection Attempts 🔁](#2️⃣-reconnection-attempts-)
    - [🔄 Flujo](#-flujo)
- [3️⃣ Reconnection Delay ⏱️](#3️⃣-reconnection-delay-️)
- [4️⃣ Backoff Strategy 📈](#4️⃣-backoff-strategy-)
- [5️⃣ Connection Events 📡](#5️⃣-connection-events-)
    - [`connect`](#connect)
    - [`disconnect`](#disconnect)
    - [🔄 Flujo](#-flujo-1)
- [6️⃣ Handling Failures ⚠️](#6️⃣-handling-failures-️)
- [7️⃣ Client Configuration ⚙️](#7️⃣-client-configuration-️)
    - [⚙️ Configuración](#️-configuración)
- [8️⃣ Server Recovery 🛠️](#8️⃣-server-recovery-️)
- [9️⃣ Connection State Recovery 🔄](#9️⃣-connection-state-recovery-)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)

---

# 1️⃣ Automatic Reconnection 🔄

**Automatic Reconnection** permite que Socket.IO intente establecer nuevamente la conexión después de una desconexión.

```text
Connected

    ↓

Network Lost

    ↓

Disconnect

    ↓

Retry

    ↓

Reconnect

    ↓

Connected
```

> 💡 **Tip:** El cliente puede intentar reconectarse automáticamente después de perder la conexión.

---

# 2️⃣ Reconnection Attempts 🔁

**Reconnection Attempts** define cuántos intentos realizará el cliente para volver a conectarse.

```javascript
io({
  reconnection: true,
  reconnectionAttempts: 5
});
```

> 💡 En este ejemplo, Socket.IO puede realizar hasta **5 intentos de reconexión**.

### 🔄 Flujo

```text
Disconnect

   ↓

Attempt 1

   ↓

Attempt 2

   ↓

Attempt 3

   ↓

Attempt 4

   ↓

Attempt 5
```

---

# 3️⃣ Reconnection Delay ⏱️

**Reconnection Delay** define cuánto tiempo espera Socket.IO antes de realizar un nuevo intento.

```javascript
io({
  reconnectionDelay: 1000
});
```

> 💡 `1000` representa **1000 milisegundos**, es decir, **1 segundo**.

```text
Disconnect

   ↓

Wait 1000ms

   ↓

Retry
```

---

# 4️⃣ Backoff Strategy 📈

Una **Backoff Strategy** aumenta progresivamente el tiempo entre los intentos de reconexión.

```text
Attempt 1

   ↓

Short Delay

   ↓

Attempt 2

   ↓

Longer Delay

   ↓

Attempt 3

   ↓

Longer Delay
```

> 💡 **Tip:** El objetivo es evitar realizar demasiados intentos de conexión rápidamente cuando el servidor o la red continúan sin estar disponibles.

---

# 5️⃣ Connection Events 📡

Socket.IO proporciona eventos para detectar cambios en el estado de la conexión.

### `connect`

Se ejecuta cuando se establece una conexión.

```javascript
socket.on(
  "connect",
  () => {}
);
```

### `disconnect`

Se ejecuta cuando se pierde la conexión.

```javascript
socket.on(
  "disconnect",
  () => {}
);
```

### 🔄 Flujo

```text
connect

   ↓

Connected

   ↓

disconnect

   ↓

Reconnect

   ↓

connect
```

---

# 6️⃣ Handling Failures ⚠️

Cuando los intentos de reconexión fallan, la aplicación debe poder manejar la situación.

```text
Disconnect

   ↓

Retry

   ↓

Retry

   ↓

Retry

   ↓

Failure
```

> ⚠️ **Failure Handling** permite responder cuando la conexión no puede recuperarse.

---

# 7️⃣ Client Configuration ⚙️

La reconexión puede configurarse desde el cliente.

```javascript
io({
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000
});
```

### ⚙️ Configuración

| Opción | Función |
|---|---|
| 🔄 `reconnection` | Habilita la reconexión |
| 🔁 `reconnectionAttempts` | Define el número de intentos |
| ⏱️ `reconnectionDelay` | Define el tiempo de espera entre intentos |

---

# 8️⃣ Server Recovery 🛠️

Cuando un cliente pierde la conexión, el sistema puede intentar restablecerla.

```text
Client

   ↓

Disconnect

   ↓

Retry

   ↓

Server

   ↓

Reconnect
```

> 💡 **Server Recovery** permite que la conexión vuelva a establecerse después de una interrupción.

---

# 9️⃣ Connection State Recovery 🔄

**Connection State Recovery** permite recuperar el estado de una conexión después de una desconexión temporal.

```text
Connected

   ↓

Disconnect

   ↓

Temporary Failure

   ↓

Reconnect

   ↓

Recover State
```

> 💡 Permite recuperar información relacionada con el estado de la conexión cuando esta puede ser recuperada.

---

# 🧠 Conceptos principales

| Concepto | Significado |
|---|---|
| 🔄 **Reconnect** | Volver a establecer una conexión |
| 🔁 **Retry** | Intentar nuevamente una operación |
| 📈 **Backoff** | Aumentar progresivamente el tiempo entre intentos |
| 🔄 **Connection Recovery** | Recuperar una conexión después de una interrupción |
| ⚠️ **Failure Handling** | Manejar los fallos de conexión |

---

# 🎯 Al terminar

> 🧠 **Socket.IO puede manejar automáticamente las reconexiones cuando un cliente pierde conexión, utilizando intentos de reconexión, delays y una estrategia de backoff.**

```text
Connected

    ↓

Network Lost

    ↓

Disconnect

    ↓

Retry

    ↓

Reconnect

    ↓

Connected
```