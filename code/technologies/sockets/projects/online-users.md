# 📁 04 — Online Users 🟢👥

> 💡 **¿Cómo sabemos quién está conectado ahora mismo?**
>
> Un sistema de **Presence** permite conocer qué usuarios están conectados, cuándo se desconectaron y cuál es su estado actual.

---

## 📚 Índice

- [📁 04 — Online Users 🟢👥](#-04--online-users-)
  - [📚 Índice](#-índice)
- [1️⃣ Presence System 🟢](#1️⃣-presence-system-)
- [2️⃣ User Connection Tracking 🔗](#2️⃣-user-connection-tracking-)
- [3️⃣ Online Status 🟢](#3️⃣-online-status-)
- [4️⃣ Offline Detection 🔴](#4️⃣-offline-detection-)
- [5️⃣ Heartbeats 💓](#5️⃣-heartbeats-)
- [6️⃣ Last Seen 🕐](#6️⃣-last-seen-)
    - [Ejemplo](#ejemplo)
- [7️⃣ User Mapping 🗺️](#7️⃣-user-mapping-️)
- [8️⃣ Multiple Devices 📱](#8️⃣-multiple-devices-)
- [9️⃣ Presence Events 📡](#9️⃣-presence-events-)
    - [🟢 Usuario entra](#-usuario-entra)
    - [🔴 Usuario sale](#-usuario-sale)
- [🔟 Scaling Presence 📈](#-scaling-presence-)
- [✨ Features](#-features)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)

---

# 1️⃣ Presence System 🟢

Un **Presence System** permite conocer el estado de conexión de los usuarios.

```text
User

   ↓

Connection

   ↓

Presence System

   ↓

Online / Offline
```

> 💡 **Tip:** El sistema mantiene información sobre la presencia de los usuarios.

---

# 2️⃣ User Connection Tracking 🔗

El servidor mantiene un registro de los usuarios conectados y sus sockets.

```text
Connected Users

User A → Socket 123

User B → Socket 456

User C → Socket 789
```

> 💡 **Tip:** **Connection Tracking** permite asociar cada usuario con su conexión WebSocket.

---

# 3️⃣ Online Status 🟢

El estado de un usuario puede indicar si está conectado.

```json
{
  "userId": 10,
  "status": "online",
  "lastSeen": null
}
```

> 🟢 **Nota:** `online` indica que el usuario está conectado actualmente.

---

# 4️⃣ Offline Detection 🔴

Cuando un usuario se desconecta, el sistema detecta el cambio de estado.

```text
DISCONNECT

   ↓

Remove User

   ↓

Broadcast Offline Event
```

> 💡 **Tip:** **Offline Detection** permite actualizar el estado del usuario cuando abandona la conexión.

---

# 5️⃣ Heartbeats 💓

Los **Heartbeats** permiten comprobar que una conexión continúa activa.

```text
Client

   ↓

Heartbeat

   ↓

Server

   ↓

Connection Active
```

> 💡 **Tip:** Los heartbeats ayudan a detectar conexiones que ya no están activas.

---

# 6️⃣ Last Seen 🕐

Cuando un usuario deja de estar conectado, se puede registrar cuándo fue visto por última vez.

```text
User

   ↓

DISCONNECT

   ↓

Last Seen

   ↓

Time
```

### Ejemplo

```json
{
  "userId": 10,
  "status": "offline",
  "lastSeen": "..."
}
```

> 💡 **Tip:** **Last Seen** representa el momento de la última conexión del usuario.

---

# 7️⃣ User Mapping 🗺️

El servidor mantiene una relación entre usuarios y sus sockets.

```text
User A → Socket 123

User B → Socket 456

User C → Socket 789
```

> 🎯 **Tip:** **User Mapping** permite identificar qué conexión pertenece a cada usuario.

---

# 8️⃣ Multiple Devices 📱

Un mismo usuario puede tener múltiples conexiones desde diferentes dispositivos.

```text
User A

 ├── Device 1 → Socket 123
 ├── Device 2 → Socket 456
 └── Device 3 → Socket 789
```

> 💡 **Tip:** **Multiple Devices** permite manejar varias sesiones de un mismo usuario.

---

# 9️⃣ Presence Events 📡

Los cambios de presencia pueden generar eventos.

### 🟢 Usuario entra

```text
CONNECT

   ↓

Add User

   ↓

Broadcast Online Event
```

### 🔴 Usuario sale

```text
DISCONNECT

   ↓

Remove User

   ↓

Broadcast Offline Event
```

> 💡 **Tip:** Los **Presence Events** permiten informar a otros usuarios cuando alguien entra o sale.

---

# 🔟 Scaling Presence 📈

Cuando existen múltiples servidores WebSocket, el sistema de presencia debe manejar las conexiones distribuidas.

```text
Users

   ↓

WS1   WS2   WS3

   ↓    ↓    ↓

Presence
```

> 💡 **Tip:** **Scaling Presence** permite mantener el estado de presencia cuando las conexiones están distribuidas entre diferentes servidores.

---

# ✨ Features

```text
✓ Online indicator

✓ Last seen

✓ Multiple sessions

✓ Presence updates
```

---

# 🧠 Conceptos principales

| Concepto                   | Significado                                      |
| -------------------------- | ------------------------------------------------ |
| 🟢 **Presence**            | Estado de conexión de un usuario                 |
| 💓 **Heartbeat**           | Verificación de que una conexión continúa activa |
| 🔗 **Connection Tracking** | Seguimiento de las conexiones de los usuarios    |
| 🧠 **State Management**    | Administración del estado de presencia           |

---

# 🎯 Al terminar

> **Un sistema de presencia mantiene el estado de los usuarios mediante el seguimiento de sus conexiones, detectando cuándo están online u offline y registrando su Last Seen.**

```text
CONNECT

   ↓

Add User

   ↓

Online

   ↓

DISCONNECT

   ↓

Remove User

   ↓

Offline
```
