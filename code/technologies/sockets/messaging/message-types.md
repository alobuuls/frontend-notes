# 🏷️ 03 — Message Types

> 💡 **¿Cómo sabe el servidor qué acción debe ejecutar?**

En una aplicación WebSocket, los mensajes pueden tener diferentes propósitos. Para que el servidor pueda identificar qué hacer con cada mensaje, se utilizan **Message Types**.

---

# 📚 Índice — 03 Message Types

- [🏷️ 03 — Message Types](#️-03--message-types)
- [📚 Índice — 03 Message Types](#-índice--03-message-types)
- [1️⃣ What are Message Types? 💬](#1️⃣-what-are-message-types-)
  - [¿Qué son Message Types?](#qué-son-message-types)
    - [Ejemplo](#ejemplo)
- [2️⃣ Message Identification 🆔](#2️⃣-message-identification-)
    - [Problema](#problema)
    - [Solución](#solución)
- [3️⃣ Event-Based Messages ⚡](#3️⃣-event-based-messages-)
    - [Ejemplos](#ejemplos)
    - [Ejemplo](#ejemplo-1)
- [4️⃣ Command Messages ⚙️](#4️⃣-command-messages-️)
    - [Flujo](#flujo)
    - [Ejemplo](#ejemplo-2)
- [5️⃣ Notification Messages 🔔](#5️⃣-notification-messages-)
    - [Ejemplos](#ejemplos-1)
    - [Ejemplo](#ejemplo-3)
- [6️⃣ System Messages 🖥️](#6️⃣-system-messages-️)
    - [Ejemplos](#ejemplos-2)
    - [Ejemplo](#ejemplo-4)
- [7️⃣ User Messages 👤](#7️⃣-user-messages-)
    - [Ejemplo común](#ejemplo-común)
    - [Ejemplo](#ejemplo-5)
- [8️⃣ Error Messages ⚠️](#8️⃣-error-messages-️)
    - [Ejemplo](#ejemplo-6)
    - [Flujo](#flujo-1)
- [9️⃣ Message Routing 🛣️](#9️⃣-message-routing-️)
    - [Flujo](#flujo-2)
    - [Ejemplo](#ejemplo-7)
- [🔟 Message Handlers 🛠️](#-message-handlers-️)
    - [Ejemplo conceptual](#ejemplo-conceptual)
- [📋 Ejemplos de Message Types](#-ejemplos-de-message-types)
  - [💬 Chat](#-chat)
  - [👤 Usuario conectado](#-usuario-conectado)
  - [⚠️ Error](#️-error)
- [🔄 Message Handling Flow](#-message-handling-flow)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)
    - [Ejemplo](#ejemplo-8)
    - [Flujo](#flujo-3)

# 1️⃣ What are Message Types? 💬

## ¿Qué son Message Types?

Un **Message Type** indica qué tipo de acción o evento representa un mensaje.

> 💡 **TIP:** Permite que el servidor entienda la intención del mensaje.

### Ejemplo

```json id="m7q3xp"
{
  "type":"chat_message",
  "text":"Hello"
}
```

El campo:

```text id="q8m4vx"
type
```

indica qué debe hacer el servidor.

---

# 2️⃣ Message Identification 🆔

El servidor necesita identificar cada mensaje recibido.

### Problema

Si solamente envías:

```json id="p5n2mq"
{
  "text":"Hello"
}
```

El servidor no sabe:

```text id="x7m3qp"
¿Es esto?

💬 Chat

🔔 Notification

⚙️ Command

📊 Update
```

### Solución

Agregar un tipo:

```json id="n6m8qx"
{
  "type":"chat_message",
  "text":"Hello"
}
```

> 💡 **TIP:** El campo `type` permite identificar la intención del mensaje.

---

# 3️⃣ Event-Based Messages ⚡

Los mensajes basados en eventos representan acciones que ocurrieron dentro del sistema.

### Ejemplos

```text id="k4q9mp"
user_joined

message_created

user_left
```

### Ejemplo

```json id="v8m3qx"
{
  "type":"user_joined",
  "userId":10
}
```

---

# 4️⃣ Command Messages ⚙️

Los **Command Messages** representan una instrucción que el cliente envía al servidor.

### Flujo

```text id="r5n8mq"
Client
   ↓
Command
   ↓
Server Action
```

### Ejemplo

```json id="t6m2qx"
{
  "type":"send_message",
  "text":"Hello"
}
```

El servidor interpreta el comando y ejecuta una acción.

> 💡 **TIP:** Un **Command** representa una instrucción enviada al servidor.

---

# 5️⃣ Notification Messages 🔔

Las notificaciones informan al cliente que ocurrió algo.

### Ejemplos

* 🔔 Nueva notificación.
* 👤 Usuario conectado.
* 📢 Nuevo evento.

### Ejemplo

```json id="x3q8mv"
{
  "type":"notification",
  "message":"New update"
}
```

---

# 6️⃣ System Messages 🖥️

Los mensajes del sistema representan información interna de la aplicación.

### Ejemplos

```text id="a7m4qp"
Connection status

Server event

Maintenance message
```

### Ejemplo

```json id="b6n9mx"
{
  "type":"system",
  "message":"Server restart"
}
```

---

# 7️⃣ User Messages 👤

Son mensajes generados directamente por usuarios.

### Ejemplo común

```text id="c8m4qx"
Chat message
```

### Ejemplo

```json id="h5m8qx"
{
  "type":"message",
  "text":"Hello"
}
```

---

# 8️⃣ Error Messages ⚠️

Los mensajes de error informan problemas durante la comunicación.

### Ejemplo

```json id="m3q7xp"
{
  "type":"error",
  "message":"Invalid data"
}
```

### Flujo

```text id="w8p2mq"
Receive Message
      ↓
Detect Error
      ↓
Send Error Message
```

> ⚠️ **TIP:** Los mensajes de error permiten informar al cliente cuando ocurre un problema durante la comunicación.

---

# 9️⃣ Message Routing 🛣️

El **Message Routing** permite dirigir cada mensaje al proceso correcto según su tipo.

### Flujo

```text id="s6m9qx"
Receive Message
      ↓
Read Type
      ↓
Route
      ↓
Handler
```

### Ejemplo

```text id="n4q8mv"
chat_message
      ↓
Chat Handler
```

```text id="p7m3qx"
error
      ↓
Error Handler
```

---

# 🔟 Message Handlers 🛠️

Un **Message Handler** es la función encargada de procesar un tipo específico de mensaje.

### Ejemplo conceptual

```javascript id="k9m5vx"
handleChatMessage()

handleError()

handleNotification()
```

Cada tipo de mensaje tiene una lógica diferente.

> 🛠️ **TIP:** Cada **Handler** se encarga de procesar un tipo específico de mensaje.

---

# 📋 Ejemplos de Message Types

| Tipo                     | Ejemplo       |
| ------------------------ | ------------- |
| 💬 **Chat**              | `message`     |
| 👤 **Usuario conectado** | `user_joined` |
| ⚠️ **Error**             | `error`       |

## 💬 Chat

```json id="8m4qxv"
{
  "type":"message",
  "text":"Hello"
}
```

## 👤 Usuario conectado

```json id="7p3mqx"
{
  "type":"user_joined",
  "userId":10
}
```

## ⚠️ Error

```json id="5n8mqx"
{
  "type":"error",
  "message":"Invalid data"
}
```

---

# 🔄 Message Handling Flow

```text id="q3m8xp"
Message Received
      ↓
Read Type
      ↓
Route Message
      ↓
Execute Handler
      ↓
Send Response
```

---

# 🧠 Conceptos principales

| Concepto                | Significado                             |
| ----------------------- | --------------------------------------- |
| 🏷️ **Event Type**      | Tipo que identifica un mensaje          |
| 🛣️ **Message Routing** | Proceso de dirigir mensajes             |
| 🛠️ **Handler**         | Código encargado de procesar un mensaje |
| ⚙️ **Command**          | Instrucción enviada al servidor         |
| 🔔 **Notification**     | Información enviada al usuario          |

---

# 🎯 Al terminar

Los **Message Types** permiten que el servidor identifique qué acción ejecutar cuando recibe un mensaje.

### Ejemplo

```json id="m8q3vx"
{
  "type":"chat_message",
  "text":"Hello"
}
```

### Flujo

```text id="q4m8xp"
Receive
   ↓
Identify Type
   ↓
Route
   ↓
Execute Handler
```
