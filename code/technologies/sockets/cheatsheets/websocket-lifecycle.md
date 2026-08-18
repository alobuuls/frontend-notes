# 📄 WebSocket Lifecycle 🔄🔌

> 💡 **¿Qué estados atraviesa un WebSocket desde que inicia hasta que termina?**
>
> El **WebSocket Lifecycle** representa las diferentes etapas que atraviesa una conexión desde que comienza hasta que termina.

---

## 📚 Índice

- [📄 WebSocket Lifecycle 🔄🔌](#-websocket-lifecycle-)
  - [📚 Índice](#-índice)
- [1️⃣ Lifecycle Overview 🔄](#1️⃣-lifecycle-overview-)
- [2️⃣ Connection States 🔌](#2️⃣-connection-states-)
- [3️⃣ Opening Phase 🟡](#3️⃣-opening-phase-)
- [4️⃣ Active Phase 🟢](#4️⃣-active-phase-)
- [5️⃣ Closing Phase 🟠](#5️⃣-closing-phase-)
- [6️⃣ Closed Phase 🔴](#6️⃣-closed-phase-)
- [7️⃣ State Diagram 📊](#7️⃣-state-diagram-)
    - [🔄 Complete Flow](#-complete-flow)
- [8️⃣ Common Problems ⚠️](#8️⃣-common-problems-️)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)

---

# 1️⃣ Lifecycle Overview 🔄

El ciclo de vida de una conexión WebSocket está compuesto por diferentes estados.

```text id="k0t9fz"
CONNECTING

      ↓

OPEN

      ↓

CLOSING

      ↓

CLOSED
```

> 💡 **Tip:** Cada estado representa una etapa diferente de la conexión.

---

# 2️⃣ Connection States 🔌

Los estados principales son:

| Estado            | `readyState` | Significado                    |
| ----------------- | :----------: | ------------------------------ |
| 🟡 **CONNECTING** |      `0`     | Intentando establecer conexión |
| 🟢 **OPEN**       |      `1`     | Conexión activa                |
| 🟠 **CLOSING**    |      `2`     | Cierre iniciado                |
| 🔴 **CLOSED**     |      `3`     | Conexión terminada             |

---

# 3️⃣ Opening Phase 🟡

Durante **CONNECTING**, la conexión está intentando establecerse.

```javascript id="k3i2j9"
socket.readyState === 0
```

```text id="2pkq4c"
CONNECTING

      ↓

Handshake

      ↓

OPEN
```

> 💡 **Tip:** Durante esta fase todavía no existe una conexión WebSocket activa.

---

# 4️⃣ Active Phase 🟢

Durante **OPEN**, la conexión está activa.

```javascript id="8ekc72"
socket.readyState === 1
```

Permite:

```text id="v8t3gk"
send()

receive()
```

> 💡 **Tip:** En esta fase el cliente y el servidor pueden intercambiar mensajes.

---

# 5️⃣ Closing Phase 🟠

Durante **CLOSING**, se inició el proceso de cierre.

```javascript id="n1y9bx"
socket.readyState === 2
```

```text id="j2q5sy"
OPEN

  ↓

Close

  ↓

CLOSING

  ↓

CLOSED
```

> 💡 **Tip:** La conexión está en proceso de terminar.

---

# 6️⃣ Closed Phase 🔴

Durante **CLOSED**, la conexión terminó.

```javascript id="n9b7v1"
socket.readyState === 3
```

```text id="3z8w9m"
CLOSING

    ↓

CLOSED
```

> 💡 **Tip:** La conexión ya no está activa.

---

# 7️⃣ State Diagram 📊

```text id="1x4y8q"
CONNECTING

    ↓

OPEN

    ↓

CLOSING

    ↓

CLOSED
```

### 🔄 Complete Flow

```text id="6k3m2a"
Create Socket

      ↓

Handshake

      ↓

OPEN

      ↓

Exchange Messages

      ↓

Close

      ↓

Cleanup
```

---

# 8️⃣ Common Problems ⚠️

Durante el ciclo de vida pueden ocurrir diferentes problemas:

```text id="p0q5xv"
Connection timeout

Unexpected disconnect

Network failure

Server unavailable
```

> ⚠️ **Warning:** Estos problemas pueden impedir que la conexión se establezca, permanezca activa o termine correctamente.

---

# 🧠 Conceptos principales

| Concepto                | Significado                                 |
| ----------------------- | ------------------------------------------- |
| 🔄 **Lifecycle**        | Ciclo de vida de una conexión               |
| 🔁 **State Machine**    | Estados por los que atraviesa la conexión   |
| 🤝 **Handshake**        | Proceso inicial para establecer la conexión |
| 🔌 **Connection State** | Estado actual del WebSocket                 |

---

# 🎯 Al terminar

> **Un WebSocket atraviesa cuatro estados principales:** **`CONNECTING`**, **`OPEN`**, **`CLOSING`** **y** **`CLOSED`**.

```text id="7x1q4n"
CONNECTING

      ↓

OPEN

      ↓

CLOSING

      ↓

CLOSED
```
