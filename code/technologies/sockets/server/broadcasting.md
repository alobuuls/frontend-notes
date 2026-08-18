# 📢 04 — Broadcasting

> 💡 **¿Cómo hago que un mensaje llegue a todos los usuarios conectados?**

> 💡 **Tip:** Cuando múltiples clientes están conectados a un servidor WebSocket, el servidor puede enviar un mismo mensaje a varios clientes al mismo tiempo mediante **Broadcasting**.

---

## 📚 Índice

- [📢 04 — Broadcasting](#-04--broadcasting)
  - [📚 Índice](#-índice)
- [1️⃣ What is Broadcasting? 📢](#1️⃣-what-is-broadcasting-)
  - [¿Qué es Broadcasting?](#qué-es-broadcasting)
    - [🔄 Flujo](#-flujo)
- [2️⃣ Broadcast Concept 🌐](#2️⃣-broadcast-concept-)
    - [💬 Ejemplo](#-ejemplo)
- [3️⃣ Sending to Multiple Clients 👥](#3️⃣-sending-to-multiple-clients-)
    - [🔄 Flujo](#-flujo-1)
    - [📋 Ejemplo](#-ejemplo-1)
- [4️⃣ Broadcasting Algorithm ⚙️](#4️⃣-broadcasting-algorithm-️)
    - [🔄 Proceso](#-proceso)
- [5️⃣ Excluding Sender 🚫](#5️⃣-excluding-sender-)
    - [📩 Ejemplo](#-ejemplo-2)
    - [🔄 Flujo](#-flujo-2)
- [6️⃣ Chat Example 💬](#6️⃣-chat-example-)
    - [🔄 Flujo](#-flujo-3)
- [7️⃣ Real-Time Notifications 🔔](#7️⃣-real-time-notifications-)
    - [Ejemplos](#ejemplos)
    - [🔄 Flujo](#-flujo-4)
- [8️⃣ Broadcast vs Direct Message 🔄](#8️⃣-broadcast-vs-direct-message-)
  - [📢 Broadcast](#-broadcast)
    - [Ejemplo](#ejemplo)
  - [💬 Direct Message](#-direct-message)
    - [Ejemplo](#ejemplo-1)
- [📊 Tipos de Broadcasting](#-tipos-de-broadcasting)
  - [📢 Broadcast completo](#-broadcast-completo)
    - [Ejemplo](#ejemplo-2)
  - [🚫 Broadcast excepto sender](#-broadcast-excepto-sender)
    - [Ejemplo](#ejemplo-3)
- [🔄 Broadcasting Flow](#-broadcasting-flow)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)
    - [Ejemplo](#ejemplo-4)
    - [Tipos](#tipos)
    - [Usos principales](#usos-principales)

# 1️⃣ What is Broadcasting? 📢

## ¿Qué es Broadcasting?

**Broadcasting** es la acción de enviar un mensaje desde el servidor hacia múltiples clientes conectados.

### 🔄 Flujo

```text id="m7q3xp"
Server

        ↓

Multiple Clients
```

El servidor recibe un mensaje y lo distribuye a varios usuarios.

---

# 2️⃣ Broadcast Concept 🌐

El concepto principal es:

```text id="q8m4vx"
One Message

      ↓

Many Clients
```

### 💬 Ejemplo

Un cliente envía:

```text id="p5n2mq"
Hello everyone
```

El servidor distribuye:

```text id="x7m3qp"
              Server


        /      |      \


       ▼       ▼       ▼


    Client A Client B Client C
```

---

# 3️⃣ Sending to Multiple Clients 👥

El servidor mantiene una lista de clientes conectados y envía el mensaje a cada uno.

### 🔄 Flujo

```text id="n6m8qx"
Client A

Message

        ↓

Server

        ↓

Send to:

Client A

Client B

Client C
```

### 📋 Ejemplo

```text id="k4q9mp"
Connected Clients

[
 Client A,
 Client B,
 Client C
]
```

El servidor recorre los clientes activos y envía el mensaje.

---

# 4️⃣ Broadcasting Algorithm ⚙️

Conceptualmente, el algoritmo funciona así:

```text id="v8m3qx"
Receive Message

        ↓

Get Connected Clients

        ↓

Loop Through Clients

        ↓

Send Message
```

### 🔄 Proceso

```text id="r5n8mq"
Message Received

        ↓

Find Active Connections

        ↓

Broadcast Message

        ↓

Clients Receive
```

---

# 5️⃣ Excluding Sender 🚫

En algunos casos el servidor debe enviar el mensaje a todos excepto al cliente que lo envió.

### 📩 Ejemplo

Cliente A envía:

```text id="t6m2qx"
Hello everyone
```

El servidor envía a:

```text id="x3q8mv"
Client B

Client C

Client D
```

### 🔄 Flujo

```text id="a7m4qp"
A → Server

        ↓

Server

        ↓

B, C, D
```

> 💡 **Tip:** El **Excluding Sender** permite enviar a todos excepto al emisor.

---

# 6️⃣ Chat Example 💬

Un ejemplo común de Broadcasting es un chat.

### 🔄 Flujo

```text id="b6n9mx"
Client A

"Hello"

        ↓

Server

        ↓

Broadcast

        ↓

Client B

Client C

Client D
```

Todos los usuarios reciben el mensaje enviado.

---

# 7️⃣ Real-Time Notifications 🔔

Broadcasting también se utiliza para enviar actualizaciones en tiempo real.

### Ejemplos

* 🔔 Notificaciones.
* 📊 Actualizaciones en vivo.
* 🎮 Eventos de juegos.

### 🔄 Flujo

```text id="c8m4qx"
Server

        ↓

Broadcast Event

        ↓

Connected Clients
```

---

# 8️⃣ Broadcast vs Direct Message 🔄

Existen dos formas principales de enviar mensajes.

| Tipo                  | Significado                             | Ejemplo        |
| --------------------- | --------------------------------------- | -------------- |
| 📢 **Broadcast**      | Mensaje enviado a varios clientes       | `A → Everyone` |
| 💬 **Direct Message** | Mensaje enviado a un cliente específico | `A → B`        |

## 📢 Broadcast

Mensaje enviado a varios clientes.

```text id="h5m8qx"
A

 ↓

Server

 ↓

Everyone
```

### Ejemplo

```text id="m3q7xp"
A → Everyone
```

## 💬 Direct Message

Mensaje enviado a un cliente específico.

```text id="w8p2mq"
A

 ↓

Server

 ↓

B
```

### Ejemplo

```text id="s6m9qx"
A → B
```

---

# 📊 Tipos de Broadcasting

## 📢 Broadcast completo

Todos reciben el mensaje.

```text id="n4q8mv"
A → Everyone
```

### Ejemplo

```text
Client A

        ↓

Server

        ↓

Client A

Client B

Client C
```

---

## 🚫 Broadcast excepto sender

Todos reciben excepto quien envió.

```text id="p7m3qx"
A → B,C,D
```

### Ejemplo

```text
Client A

        ↓

Server

        ↓

Client B

Client C

Client D
```

---

# 🔄 Broadcasting Flow

```text id="k9m5vx"
Client A

        |

        | Message

        ▼

Server

        |

        | Broadcast

        ▼

Client A   Client B   Client C
```

---

# 🧠 Conceptos principales

| Concepto                      | Significado                              |
| ----------------------------- | ---------------------------------------- |
| 📢 **Broadcasting**           | Enviar mensajes a múltiples clientes     |
| 🌐 **Broadcast Concept**      | Un mensaje distribuido a varios usuarios |
| 👥 **Multiple Clients**       | Varios clientes conectados al servidor   |
| ⚙️ **Broadcasting Algorithm** | Proceso para enviar mensajes masivamente |
| 🚫 **Excluding Sender**       | Enviar a todos excepto al emisor         |
| 💬 **Direct Message**         | Mensaje enviado a un cliente específico  |

---

# 🎯 Al terminar

**Broadcasting** permite que un servidor WebSocket envíe un mensaje a múltiples clientes conectados.

### Ejemplo

```text id="m8q3vx"
Client A sends:

"Hello everyone"


        ↓


Server


        ↓


Client A Client B Client C
```

### Tipos

```text
Broadcast completo

A → Everyone


Broadcast excepto sender

A → B,C,D
```

### Usos principales

```text
💬 Chat

🔔 Notifications

📊 Live Updates

🎮 Games
```
