# 💬 03 — Messages

> 💡 **¿Cómo procesa el servidor la información enviada por los clientes?**

> 💡 **Tip:** Un servidor WebSocket recibe mensajes enviados por los clientes, procesa la información y puede enviar respuestas mediante la misma conexión.

---

## 📚 Índice

- [💬 03 — Messages](#-03--messages)
  - [📚 Índice](#-índice)
- [1️⃣ Receiving Messages 📥](#1️⃣-receiving-messages-)
  - [¿Cómo recibe mensajes el servidor?](#cómo-recibe-mensajes-el-servidor)
    - [🔄 Flujo](#-flujo)
- [2️⃣ Message Event ⚡](#2️⃣-message-event-)
    - [💻 Conceptualmente](#-conceptualmente)
- [3️⃣ Sending Messages 📤](#3️⃣-sending-messages-)
    - [🔄 Flujo](#-flujo-1)
    - [Ejemplo](#ejemplo)
- [4️⃣ Message Payload 📦](#4️⃣-message-payload-)
    - [Ejemplo](#ejemplo-1)
- [5️⃣ Text Messages 📝](#5️⃣-text-messages-)
    - [Ejemplo](#ejemplo-2)
- [6️⃣ JSON Messages 🧾](#6️⃣-json-messages-)
    - [Ejemplo](#ejemplo-3)
    - [🔄 Flujo](#-flujo-2)
- [7️⃣ Message Validation ✅](#7️⃣-message-validation-)
    - [🔄 Flujo](#-flujo-3)
    - [Ejemplo](#ejemplo-4)
- [8️⃣ Message Processing ⚙️](#8️⃣-message-processing-️)
    - [🔄 Flujo](#-flujo-4)
    - [Ejemplos](#ejemplos)
- [9️⃣ Response Messages 📤](#9️⃣-response-messages-)
    - [🔄 Flujo](#-flujo-5)
    - [Ejemplo](#ejemplo-5)
- [🔟 Message Flow 🔄](#-message-flow-)
- [🧾 Ejemplo conceptual](#-ejemplo-conceptual)
  - [Cliente:](#cliente)
  - [Servidor:](#servidor)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)
    - [🔄 Flujo](#-flujo-6)


# 1️⃣ Receiving Messages 📥

## ¿Cómo recibe mensajes el servidor?

Cuando un cliente envía un mensaje, el servidor recibe esa información mediante un evento de mensaje.

### 🔄 Flujo

```text id="m7q3xp"
Client

send(message)

        ↓

Server

Receive Message
```

El servidor utiliza el mensaje recibido para realizar alguna acción.

---

# 2️⃣ Message Event ⚡

El servidor utiliza un evento para detectar cuando llega un nuevo mensaje.

### 💻 Conceptualmente

```javascript id="q8m4vx"
socket.on("message", message => {

});
```

Cuando llega información:

```text id="p5n2mq"
Client

Message

        ↓

Server

message event
```

> 🔎 **Importante:** El evento entrega el contenido enviado por el cliente.

---

# 3️⃣ Sending Messages 📤

El servidor también puede enviar mensajes al cliente.

### 🔄 Flujo

```text id="x7m3qp"
Server

send(message)

        ↓

Client
```

### Ejemplo

```text id="n6m8qx"
Client

        ◄────────►

Server
```

> 💡 **Tip:** La comunicación puede ocurrir en ambas direcciones.

---

# 4️⃣ Message Payload 📦

El **payload** es la información contenida dentro de un mensaje.

### Ejemplo

```json id="k4q9mp"
{
  "type": "chat",
  "text": "Hello"
}
```

El payload contiene los datos que el servidor debe procesar.

```text id="v8m3qx"
Message

        ↓

Payload

        ↓

Processing
```

---

# 5️⃣ Text Messages 📝

Un servidor puede recibir mensajes de texto enviados por clientes.

### Ejemplo

**Cliente envía:**

```text id="r5n8mq"
Hello
```

**Servidor recibe:**

```text id="t6m2qx"
Message:

Hello
```

Los mensajes de texto son utilizados para información simple.

---

# 6️⃣ JSON Messages 🧾

Normalmente las aplicaciones utilizan JSON para enviar información estructurada.

### Ejemplo

**Cliente:**

```json id="x3q8mv"
{
  "type":"chat",
  "text":"Hello"
}
```

El servidor recibe el mensaje y procesa sus propiedades.

### 🔄 Flujo

```text id="a7m4qp"
JSON Message

        ↓

Parse Data

        ↓

Process Information
```

---

# 7️⃣ Message Validation ✅

Antes de procesar un mensaje, el servidor puede validar la información recibida.

### 🔄 Flujo

```text id="b6n9mx"
Receive

   ↓

Validate

   ↓

Process
```

Puede comprobar:

* 📌 Tipo de mensaje.
* 📌 Datos requeridos.
* 📌 Formato correcto.

### Ejemplo

```json id="c8m4qx"
{
  "type":"chat",
  "text":"Hello"
}
```

El servidor verifica que exista:

```text id="h5m8qx"
type

text
```

> 💡 **Tip:** La validación permite comprobar que la información recibida tenga el formato esperado.

---

# 8️⃣ Message Processing ⚙️

Después de validar el mensaje, el servidor procesa la información.

### 🔄 Flujo

```text id="m3q7xp"
Receive

   ↓

Validate

   ↓

Process

   ↓

Action
```

### Ejemplos

* 💬 Guardar un mensaje.
* 🔔 Crear una notificación.
* 📊 Actualizar información.

---

# 9️⃣ Response Messages 📤

Después de procesar un mensaje, el servidor puede enviar una respuesta.

### 🔄 Flujo

```text id="w8p2mq"
Client

Message

        ↓

Server

Process

        ↓

Response

        ↓

Client
```

### Ejemplo

**Cliente:**

```json id="s6m9qx"
{
  "type":"chat",
  "text":"Hello"
}
```

**Servidor:**

```json id="n4q8mv"
{
  "type":"response",
  "message":"Received"
}
```

---

# 🔟 Message Flow 🔄

Flujo completo de un mensaje:

```text id="p7m3qx"
Client

   |

   | send(message)

   ▼

Server

   |

   | process

   ▼

Response

   |

   ▼

Client
```

---

# 🧾 Ejemplo conceptual

## Cliente:

```json id="k9m5vx"
{
  "type":"chat",
  "text":"Hello"
}
```

## Servidor:

```text id="q6m8xp"
Receive

   ↓

Validate

   ↓

Process

   ↓

Send response
```

---

# 🧠 Conceptos principales

| Concepto             | Significado                                  |
| -------------------- | -------------------------------------------- |
| 💬 **Message**       | Información enviada entre cliente y servidor |
| 📦 **Payload**       | Datos contenidos dentro del mensaje          |
| ⚡ **Event**          | Evento que detecta la llegada de mensajes    |
| 🛠️ **Handler**      | Código encargado de procesar eventos         |
| 🔄 **Serialization** | Convertir datos a un formato transmisible    |
| ✅ **Validation**     | Verificar que los datos sean correctos       |

---

# 🎯 Al terminar

Un servidor WebSocket recibe mensajes enviados por clientes, valida y procesa la información, y puede responder mediante la misma conexión.

### 🔄 Flujo

```text id="m8q3vx"
Client

send(message)

        ↓

Server

Receive

        ↓

Validate

        ↓

Process

        ↓

Send response

        ↓

Client
```
