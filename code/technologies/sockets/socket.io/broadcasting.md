# 📄 06 — Broadcasting 📢

> 💡 **¿Cómo envío información a muchos usuarios al mismo tiempo?**
>
> **Broadcasting** permite enviar eventos y datos a múltiples clientes simultáneamente.

---

## 📚 Índice

- [📄 06 — Broadcasting 📢](#-06--broadcasting-)
  - [📚 Índice](#-índice)
- [1️⃣ What is Broadcasting? 📢](#1️⃣-what-is-broadcasting-)
- [2️⃣ Sending to All Clients 🌎](#2️⃣-sending-to-all-clients-)
    - [🔄 Flujo](#-flujo)
- [3️⃣ Sending to Rooms 🚪](#3️⃣-sending-to-rooms-)
    - [🔄 Flujo](#-flujo-1)
- [4️⃣ Excluding Sender 🚫](#4️⃣-excluding-sender-)
    - [🔄 Flujo](#-flujo-2)
- [5️⃣ Broadcasting Events 📡](#5️⃣-broadcasting-events-)
- [6️⃣ Real-Time Updates ⚡](#6️⃣-real-time-updates-)
- [7️⃣ Notification Systems 🔔](#7️⃣-notification-systems-)
- [8️⃣ Scaling Broadcasting 📈](#8️⃣-scaling-broadcasting-)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)

---

# 1️⃣ What is Broadcasting? 📢

**Broadcasting** es el proceso de enviar un evento a múltiples clientes al mismo tiempo.

```text id="broadcast"
Client A

Client B

Client C
```

> 💡 En lugar de enviar un mensaje únicamente a un cliente, el servidor puede distribuirlo entre múltiples conexiones.

---

# 2️⃣ Sending to All Clients 🌎

Para enviar un evento a todos los clientes conectados se utiliza:

```javascript id="global-broadcast"
io.emit(
  "notification",
  data
);
```

### 🔄 Flujo

```text id="all"
Server

   |

   | notification

   ├────────→ Client A
   ├────────→ Client B
   └────────→ Client C
```

> 🎯 Todos los clientes reciben el evento.

---

# 3️⃣ Sending to Rooms 🚪

También es posible enviar un evento únicamente a los clientes que pertenecen a una Room.

```javascript id="room-broadcast"
io.to(
  "room1"
)
.emit(
  "update",
  data
);
```

### 🔄 Flujo

```text id="room-flow"
Server

   ↓

room1

   ├── Client A
   ├── Client B
   └── Client C
```

> 💡 Solo los clientes pertenecientes a `room1` reciben el evento.

---

# 4️⃣ Excluding Sender 🚫

Es posible enviar un evento a todos los clientes **excepto al cliente que lo emitió**.

```javascript id="exclude"
socket.broadcast.emit(
  "message",
  data
);
```

### 🔄 Flujo

```text id="exclude-flow"
Client A

   |

   | message

   ↓

Server

   ├────────→ Client B
   └────────→ Client C
```

> 💡 El cliente que realizó el `emit` queda excluido del broadcast.

---

# 5️⃣ Broadcasting Events 📡

Los **Broadcasting Events** permiten distribuir eventos a múltiples clientes.

```text id="event-broadcast"
Server

   ↓

Broadcast Event

   ├──→ Client A
   ├──→ Client B
   └──→ Client C
```

El evento puede contener información:

```javascript id="event-data"
io.emit(
  "notification",
  data
);
```

> 💡 El evento y su payload se distribuyen a los clientes correspondientes.

---

# 6️⃣ Real-Time Updates ⚡

Broadcasting permite enviar actualizaciones en tiempo real a múltiples usuarios.

```text id="realtime"
Server

   ↓

Update

   ├──→ Client A
   ├──→ Client B
   └──→ Client C
```

> 🎯 Los clientes pueden recibir cambios sin tener que solicitar constantemente nueva información.

---

# 7️⃣ Notification Systems 🔔

Los sistemas de notificaciones pueden utilizar Broadcasting para informar a múltiples clientes.

```text id="notifications"
Server

   ↓

"notification"

   ├──→ Client A
   ├──→ Client B
   └──→ Client C
```

**Ejemplo:**

```javascript id="notification"
io.emit(
  "notification",
  data
);
```

> 💡 Todos los clientes conectados pueden recibir la notificación.

---

# 8️⃣ Scaling Broadcasting 📈

Cuando existen múltiples servidores WebSocket, el Broadcasting necesita distribuir los eventos entre las diferentes instancias.

```text id="scaling"
             Server

          /    |    \

        WS1   WS2   WS3

          \    |    /

          Shared Communication
```

> 💡 En una arquitectura distribuida, los servidores necesitan compartir los eventos para que el Broadcasting alcance a los clientes conectados a diferentes instancias.

---

# 🧠 Conceptos principales

| Concepto             | Significado                                                      |
| -------------------- | ---------------------------------------------------------------- |
| 📢 **Broadcast**     | Enviar un evento a múltiples clientes                            |
| 📡 **Multicast**     | Comunicación dirigida a múltiples destinatarios                  |
| 📈 **Fan-out**       | Distribuir un mensaje desde un origen hacia múltiples receptores |
| 📡 **Events**        | Información identificada mediante un nombre de evento            |
| 🔔 **Notifications** | Mensajes enviados para informar a los clientes                   |

---

# 🎯 Al terminar

> 🧠 **Broadcasting permite enviar eventos a múltiples clientes, a todos los clientes, a una Room específica o a todos excepto al sender.**

```text id="summary"
Server

   ↓

Broadcast

   ├──→ Client A
   ├──→ Client B
   └──→ Client C
```
