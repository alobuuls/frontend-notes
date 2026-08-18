# 📁 02 — Real-Time Chat 💬⚡

> [!TIP]
> 💡 **¿Cómo pueden múltiples usuarios comunicarse en tiempo real?**
>
> Un **Real-Time Chat** utiliza WebSockets para mantener conectados a múltiples usuarios y permitir el intercambio de mensajes en tiempo real.

---

## 📚 Índice

- [📁 02 — Real-Time Chat 💬⚡](#-02--real-time-chat-)
  - [📚 Índice](#-índice)
- [1️⃣ Chat Architecture 🏗️](#1️⃣-chat-architecture-️)
- [2️⃣ Multiple Clients 👥](#2️⃣-multiple-clients-)
- [3️⃣ User Connections 🔗](#3️⃣-user-connections-)
- [4️⃣ Sending Messages 📤](#4️⃣-sending-messages-)
- [5️⃣ Broadcasting 📢](#5️⃣-broadcasting-)
    - [Flujo](#flujo)
- [6️⃣ Message Format 📨](#6️⃣-message-format-)
    - [Estructura](#estructura)
- [7️⃣ User Identification 👤](#7️⃣-user-identification-)
- [8️⃣ Chat Rooms 🚪](#8️⃣-chat-rooms-)
- [9️⃣ Message History 📜](#9️⃣-message-history-)
- [🔟 Error Handling ⚠️](#-error-handling-️)
- [✨ Features](#-features)
  - [🟢 Basic](#-basic)
  - [🚀 Advanced](#-advanced)
- [🧠 Conceptos practicados](#-conceptos-practicados)

---

# 1️⃣ Chat Architecture 🏗️

La arquitectura permite que múltiples usuarios se conecten al mismo **WebSocket Server**.

```text id="y7k3mp"
User A

   |

   |

   ▼

WebSocket Server

   ▲

   |

 User B
```

> [!TIP]
> 💡 El servidor actúa como intermediario entre los usuarios conectados.

---

# 2️⃣ Multiple Clients 👥

Un **Real-Time Chat** permite conectar múltiples clientes simultáneamente.

```text id="q4v8nz"
User A ──┐

User B ──┼──→ WebSocket Server

User C ──┘
```

> [!IMPORTANT]
> 🎯 Cada usuario mantiene una conexión con el servidor.

---

# 3️⃣ User Connections 🔗

Cada usuario establece una conexión WebSocket con el servidor.

```text id="m2c6rx"
User A

   ↓

Connection

   ↓

WebSocket Server
```

```text id="w8p1kd"
User A ──→ Connection ──┐
                        │
User B ──→ Connection ──┼──→ Server
                        │
User C ──→ Connection ──┘
```

> [!TIP]
> 💡 El servidor administra las conexiones de los usuarios.

---

# 4️⃣ Sending Messages 📤

Un usuario puede enviar un mensaje al servidor.

```text id="n5z9bt"
User A

   ↓

Send Message

   ↓

WebSocket Server
```

> [!TIP]
> 💡 El servidor recibe el mensaje para procesarlo y distribuirlo.

---

# 5️⃣ Broadcasting 📢

El servidor puede distribuir un mensaje a múltiples usuarios conectados.

### Flujo

```text id="r3k7qx"
User A

Send Message

      ↓

Server receives

      ↓

Broadcast

      ↓

Users receive
```

```text id="c9m2vw"
            WebSocket Server

              /    |    \

             ↓     ↓     ↓

          User A User B User C
```

> [!TIP]
> 💡 **Broadcasting** permite distribuir el mensaje a los usuarios correspondientes.

---

# 6️⃣ Message Format 📨

Los mensajes pueden utilizar un formato estructurado mediante JSON.

```json id="p6x1ns"
{
  "type": "message",
  "payload": {
    "user": "John",
    "text": "Hello"
  }
}
```

### Estructura

| Campo     | Contenido         |
| --------- | ----------------- |
| `type`    | Tipo del mensaje  |
| `payload` | Datos del mensaje |
| `user`    | Usuario que envía |
| `text`    | Texto del mensaje |

> [!TIP]
> 💡 Un formato estructurado facilita el intercambio de información entre clientes y servidor.

---

# 7️⃣ User Identification 👤

Cada mensaje puede incluir información para identificar al usuario que lo envió.

```text id="h4w8cz"
Message

   ↓

user

   ↓

John
```

Ejemplo:

```json id="v2q7md"
{
  "user": "John",
  "text": "Hello"
}
```

> [!TIP]
> 💡 La identificación permite saber qué usuario envió el mensaje.

---

# 8️⃣ Chat Rooms 🚪

Los usuarios pueden organizarse en diferentes **Chat Rooms**.

```text id="k8s3xp"
WebSocket Server

      |

   ┌──┴──┐

   ↓     ↓

Room 1  Room 2

Users   Users
```

> [!TIP]
> 💡 Las Rooms permiten separar grupos de usuarios dentro del chat.

---

# 9️⃣ Message History 📜

Un chat puede mantener un historial de los mensajes.

```text id="t5m9qr"
Messages

   ↓

Message History

   ↓

Previous Messages
```

> [!TIP]
> 💡 **Message History** permite conservar y consultar mensajes anteriores.

---

# 🔟 Error Handling ⚠️

El sistema debe manejar errores que puedan ocurrir durante la comunicación.

```text id="b7x2nk"
User

   ↓

Message

   ↓

Error

   ↓

Error Handling
```

> [!WARNING]
> 💡 **Error Handling** permite gestionar errores relacionados con las conexiones y mensajes.

---

# ✨ Features

## 🟢 Basic

```text id="d4p8sy"
✓ Connect users

✓ Send messages

✓ Receive messages
```

---

## 🚀 Advanced

```text id="f9k3mw"
✓ Rooms

✓ Typing indicator

✓ Online status

✓ Message timestamps
```

---

# 🧠 Conceptos practicados

| Concepto                | Significado                                   |
| ----------------------- | --------------------------------------------- |
| 📢 **Broadcasting**     | Distribución de mensajes a múltiples usuarios |
| 📨 **Message Types**    | Tipos de mensajes intercambiados              |
| 📦 **Payload Design**   | Estructura de los datos enviados              |
| 👥 **Multiple Clients** | Comunicación con múltiples clientes           |

---
