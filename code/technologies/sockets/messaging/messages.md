# 💬 01 — Messages

> 💡 **¿Qué información intercambian el cliente y el servidor?**

> 💡 **Tip:** Dentro de una comunicación WebSocket, los clientes y servidores intercambian **mensajes** mediante una conexión que permanece abierta.

---

## 📚 Índice

- [💬 01 — Messages](#-01--messages)
  - [📚 Índice](#-índice)
- [1️⃣ What is a WebSocket Message? 💬](#1️⃣-what-is-a-websocket-message-)
  - [¿Qué es un WebSocket Message?](#qué-es-un-websocket-message)
    - [🔄 Flujo](#-flujo)
- [2️⃣ Message Communication 🔄](#2️⃣-message-communication-)
- [3️⃣ Sending Messages 📤](#3️⃣-sending-messages-)
    - [🔄 Flujo](#-flujo-1)
    - [💬 Ejemplo conceptual](#-ejemplo-conceptual)
- [4️⃣ Receiving Messages 📥](#4️⃣-receiving-messages-)
    - [🔄 Flujo](#-flujo-2)
    - [Ejemplo](#ejemplo)
- [5️⃣ Message Flow 🔄](#5️⃣-message-flow-)
- [6️⃣ Message Structure 📦](#6️⃣-message-structure-)
    - [Conceptualmente](#conceptualmente)
- [7️⃣ Text Messages 📝](#7️⃣-text-messages-)
    - [Ejemplo](#ejemplo-1)
    - [Uso común](#uso-común)
    - [🔄 Flujo](#-flujo-3)
- [8️⃣ Binary Messages 📦](#8️⃣-binary-messages-)
    - [Ejemplos](#ejemplos)
    - [🔄 Flujo](#-flujo-4)
- [9️⃣ Message Lifecycle 🔄](#9️⃣-message-lifecycle-)
    - [🔄 Flujo](#-flujo-5)
- [🔟 Message Handling ⚙️](#-message-handling-️)
    - [Incluye](#incluye)
    - [🔄 Flujo](#-flujo-6)
- [📡 Communication Flow](#-communication-flow)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)
    - [🔄 El flujo es:](#-el-flujo-es)
    - [📦 Los mensajes pueden ser:](#-los-mensajes-pueden-ser)

# 1️⃣ What is a WebSocket Message? 💬

## ¿Qué es un WebSocket Message?

Un **WebSocket Message** es una unidad de información enviada entre un cliente y un servidor mediante una conexión WebSocket.

> 🔎 **Importante:** La conexión permanece abierta y permite intercambiar mensajes continuamente.

### 🔄 Flujo

```text id="m7q3xp"
Client                         Server


   |                              |

   | -------- Message ----------> |

   |                              |

   | <------- Message ----------- |

   |                              |
```

---

# 2️⃣ Message Communication 🔄

La comunicación WebSocket se basa en el intercambio de mensajes entre dos extremos:

```text id="q8m4vx"
Sender

   ↓

Message

   ↓

Receiver
```

Los participantes pueden ser:

* 👤 Client.
* 🖥️ Server.

---

# 3️⃣ Sending Messages 📤

Un mensaje puede ser creado y enviado desde un cliente hacia un servidor.

### 🔄 Flujo

```text id="p5n2mq"
Client

Create Message

        ↓

Send

        ↓

Server
```

### 💬 Ejemplo conceptual

```text id="x7m3qp"
Client

"Hello"

        ↓

Server
```

---

# 4️⃣ Receiving Messages 📥

Cuando un mensaje llega, el receptor debe obtener y procesar la información enviada.

### 🔄 Flujo

```text id="n6m8qx"
Message Received

        ↓

Read Data

        ↓

Process
```

### Ejemplo

```text id="k4q9mp"
Server

receives

message
```

---

# 5️⃣ Message Flow 🔄

El flujo de un mensaje WebSocket sigue diferentes pasos.

```text id="v8m3qx"
Create Message

      ↓

Serialize Data

      ↓

Send

      ↓

Receive

      ↓

Process

      ↓

Respond
```

---

# 6️⃣ Message Structure 📦

Un mensaje contiene información que será enviada entre cliente y servidor.

### Conceptualmente

```text id="r5n8mq"
Message

   ↓

Data

   ↓

Processing
```

Puede contener:

* 📝 Texto.
* 📦 Datos binarios.

---

# 7️⃣ Text Messages 📝

Los mensajes de texto contienen información en formato de texto.

### Ejemplo

```text id="t6m2qx"
Hello Server
```

### Uso común

* 💬 Chat.
* 🔔 Notificaciones.
* 📄 Información estructurada.

### 🔄 Flujo

```text id="x3q8mv"
Text Data

      ↓

Send

      ↓

Receive
```

---

# 8️⃣ Binary Messages 📦

Los mensajes binarios contienen datos en formato binario.

### Ejemplos

* 🖼️ Imágenes.
* 📁 Archivos.
* 📊 Datos binarios.

### 🔄 Flujo

```text id="a7m4qp"
Binary Data

      ↓

Send

      ↓

Receive
```

---

# 9️⃣ Message Lifecycle 🔄

Un mensaje tiene un ciclo desde que se crea hasta que es procesado.

### 🔄 Flujo

```text id="b6n9mx"
Create Message

        ↓

Serialize

        ↓

Send

        ↓

Receive

        ↓

Process
```

---

# 🔟 Message Handling ⚙️

El manejo de mensajes consiste en recibir, procesar y responder información.

### Incluye

* 📥 Recibir mensajes.
* 🔍 Procesar datos.
* 📤 Enviar respuestas.

### 🔄 Flujo

```text id="c8m4qx"
Receive

   ↓

Process

   ↓

Respond
```

---

# 📡 Communication Flow

```text id="h5m8qx"
Client                         Server


   |                              |

   | -------- Message ----------> |

   |                              |

   | <------- Message ----------- |

   |                              |
```

---

# 🧠 Conceptos principales

| Concepto                  | Significado                                  |
| ------------------------- | -------------------------------------------- |
| 💬 **Message**            | Información intercambiada mediante WebSocket |
| 👤 **Sender**             | Quien envía el mensaje                       |
| 🎯 **Receiver**           | Quien recibe el mensaje                      |
| 📦 **Data**               | Información contenida dentro del mensaje     |
| 🔄 **Communication Flow** | Proceso de intercambio de mensajes           |

---

# 🎯 Al terminar

Un **WebSocket Message** es información intercambiada entre cliente y servidor mediante una conexión persistente.

### 🔄 El flujo es:

```text id="m8q3vx"
Create Message

      ↓

Serialize Data

      ↓

Send

      ↓

Receive

      ↓

Process

      ↓

Respond
```

### 📦 Los mensajes pueden ser:

```text id="q4m8xp"
📝 Text

📦 Binary
```
