# 🏠 06 — Rooms and Channels

> 💡 **¿Cómo envío mensajes solamente a ciertos usuarios?**

> 💡 **Tip:** Cuando existen muchos clientes conectados, el servidor necesita una forma de organizar usuarios en grupos específicos.

Para esto existen:

```text
Rooms
```

y

```text
Channels
```

---

## 📚 Índice
- [🏠 06 — Rooms and Channels](#-06--rooms-and-channels)
  - [📚 Índice](#-índice)
- [1️⃣ What are Rooms? 🏠](#1️⃣-what-are-rooms-)
  - [¿Qué son Rooms?](#qué-son-rooms)
    - [Ejemplo](#ejemplo)
- [2️⃣ What are Channels? 📡](#2️⃣-what-are-channels-)
    - [Conceptualmente](#conceptualmente)
    - [Ejemplo](#ejemplo-1)
- [3️⃣ Why Rooms Exist? 🤔](#3️⃣-why-rooms-exist-)
    - [⚠️ Problema sin rooms](#️-problema-sin-rooms)
- [4️⃣ Joining Rooms 🚪](#4️⃣-joining-rooms-)
    - [🔄 Flujo](#-flujo)
    - [Ejemplo](#ejemplo-2)
- [5️⃣ Leaving Rooms 🚪](#5️⃣-leaving-rooms-)
    - [🔄 Flujo](#-flujo-1)
    - [Ejemplo](#ejemplo-3)
- [6️⃣ Sending Messages to Rooms 📤](#6️⃣-sending-messages-to-rooms-)
    - [🔄 Flujo](#-flujo-2)
    - [Ejemplo](#ejemplo-4)
- [7️⃣ Private Communication 🔒](#7️⃣-private-communication-)
    - [Ejemplo](#ejemplo-5)
- [8️⃣ Chat Rooms Example 💬](#8️⃣-chat-rooms-example-)
    - [🏗️ Arquitectura](#️-arquitectura)
    - [Ejemplo](#ejemplo-6)
- [9️⃣ Groups 👥](#9️⃣-groups-)
    - [Ejemplos](#ejemplos)
- [🔟 Room Management ⚙️](#-room-management-️)
    - [Incluye](#incluye)
    - [🔄 Flujo](#-flujo-3)
- [🏠 Rooms Architecture](#-rooms-architecture)
- [🔄 Room Communication Flow](#-room-communication-flow)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)
    - [❌ Sin rooms](#-sin-rooms)
    - [🏠 Con rooms](#-con-rooms)
    - [Ejemplos](#ejemplos-1)

# 1️⃣ What are Rooms? 🏠

## ¿Qué son Rooms?

Una **Room** es un grupo lógico donde varios clientes pueden conectarse para recibir mensajes específicos.

Permite separar usuarios dentro del servidor.

### Ejemplo

```text id="m7q3xp"
Room A

User 1
User 2
User 3
```

> 📌 Los mensajes enviados a una room solamente llegan a los usuarios que pertenecen a ella.

---

# 2️⃣ What are Channels? 📡

Un **Channel** representa un espacio de comunicación donde los clientes pueden recibir determinados mensajes.

### Conceptualmente

```text id="q8m4vx"
Channel

        ↓

Group of Connections
```

Puede utilizarse para organizar diferentes tipos de comunicación.

### Ejemplo

```text id="p5n2mq"
Company Channel

Game Channel

Chat Channel
```

---

# 3️⃣ Why Rooms Exist? 🤔

Sin rooms, un mensaje enviado por el servidor podría llegar a todos los clientes conectados.

### ⚠️ Problema sin rooms

```text id="x7m3qp"
Message


        Server


          |


          |


    Everyone receives
```

Esto puede provocar:

* ❌ Mensajes enviados a usuarios incorrectos.
* ❌ Falta de organización.
* ❌ Información innecesaria.

---

# 4️⃣ Joining Rooms 🚪

Un cliente puede unirse a una room para formar parte de un grupo.

### 🔄 Flujo

```text id="n6m8qx"
Client

        ↓

Join Room

        ↓

Room Membership
```

### Ejemplo

```text id="k4q9mp"
User A

joins

Room Chat
```

Después:

```text id="v8m3qx"
Room Chat

User A
User B
User C
```

---

# 5️⃣ Leaving Rooms 🚪

Un cliente también puede salir de una room.

### 🔄 Flujo

```text id="r5n8mq"
Client

        ↓

Leave Room

        ↓

Removed from Group
```

### Ejemplo

```text id="t6m2qx"
User A

leaves

Room Chat
```

El usuario deja de recibir mensajes de esa room.

---

# 6️⃣ Sending Messages to Rooms 📤

El servidor puede enviar mensajes solamente a los usuarios dentro de una room.

### 🔄 Flujo

```text id="x3q8mv"
Server

        ↓

Select Room

        ↓

Send Message

        ↓

Room Members
```

### Ejemplo

```text id="a7m4qp"
Message

        ↓

Room A

        ↓

Users in Room A
```

---

# 7️⃣ Private Communication 🔒

Las rooms también permiten crear comunicación privada entre grupos específicos.

### Ejemplo

```text id="b6n9mx"
Private Room

User A

User B
```

> 🔒 Solamente los miembros reciben los mensajes.

---

# 8️⃣ Chat Rooms Example 💬

Un ejemplo común son las aplicaciones de chat.

### 🏗️ Arquitectura

```text id="c8m4qx"
              Server


        ┌─────┴─────┐


      Room A      Room B


     Users        Users
```

### Ejemplo

```text id="h5m8qx"
Room Gaming

Player A
Player B
Player C
```

```text id="m3q7xp"
Room Support

User X
User Y
```

Cada grupo recibe solamente sus propios mensajes.

---

# 9️⃣ Groups 👥

Una room funciona como un grupo de usuarios conectados.

### Ejemplos

```text id="w8p2mq"
Chat Group

Game Match

Company Team
```

Los grupos permiten organizar la comunicación.

---

# 🔟 Room Management ⚙️

El servidor debe administrar las rooms y sus miembros.

### Incluye

* 🚪 Crear rooms.
* ➕ Agregar usuarios.
* ➖ Remover usuarios.
* 📤 Enviar mensajes al grupo.

### 🔄 Flujo

```text id="s6m9qx"
Create Room

        ↓

Join Users

        ↓

Manage Members

        ↓

Broadcast Messages
```

---

# 🏠 Rooms Architecture

```text id="n4q8mv"
              Server


        ┌─────┴─────┐


      Room A      Room B


     Users        Users
```

---

# 🔄 Room Communication Flow

```text id="p7m3qx"
Client

        ↓

Join Room

        ↓

Room Membership

        ↓

Send Message

        ↓

Room Members Receive
```

---

# 🧠 Conceptos principales

| Concepto            | Significado                                |
| ------------------- | ------------------------------------------ |
| 🏠 **Room**         | Grupo lógico de clientes conectados        |
| 📡 **Channel**      | Espacio de comunicación organizado         |
| 👥 **Group**        | Conjunto de usuarios relacionados          |
| 🔔 **Subscription** | Unión de un cliente a un grupo de mensajes |
| 👤 **Membership**   | Pertenencia de un usuario a una room       |

---

# 🎯 Al terminar

Las **rooms** permiten separar clientes en grupos para enviar mensajes solamente a usuarios específicos.

### ❌ Sin rooms

```text id="m8q3vx"
Message

        ↓

Everyone receives
```

### 🏠 Con rooms

```text id="q4m8xp"
Server


        ┌─────┴─────┐


      Room A      Room B


     Users        Users
```

### Ejemplos

```text id="z5p7mx"
💬 Chat Room

🎮 Game Match

🏢 Company Channel

🔒 Private Group
```
