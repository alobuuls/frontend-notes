# 📄 03 — Events 📡

> 💡 **¿Cómo se comunican cliente y servidor usando eventos?**
>
> Socket.IO utiliza un sistema de **eventos** para que el cliente y el servidor puedan enviar y recibir información identificando cada acción mediante un nombre de evento.

---

## 📚 Índice

- [📄 03 — Events 📡](#-03--events-)
  - [📚 Índice](#-índice)
- [1️⃣ Event Based Communication 📡](#1️⃣-event-based-communication-)
    - [🔌 WebSocket](#-websocket)
    - [📡 Socket.IO](#-socketio)
- [2️⃣ emit() 📤](#2️⃣-emit-)
- [3️⃣ on() 👂](#3️⃣-on-)
- [4️⃣ Custom Events 🛠️](#4️⃣-custom-events-️)
- [5️⃣ Event Naming 🏷️](#5️⃣-event-naming-️)
- [6️⃣ Event Payloads 📦](#6️⃣-event-payloads-)
- [7️⃣ Server Events 🖥️](#7️⃣-server-events-️)
- [8️⃣ Client Events 💻](#8️⃣-client-events-)
- [9️⃣ Acknowledgements ✅](#9️⃣-acknowledgements-)
    - [💻 Cliente](#-cliente)
    - [🖥️ Servidor](#️-servidor)
    - [🔄 Flujo](#-flujo)
- [🔟 Error Events ❌](#-error-events-)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)

---

# 1️⃣ Event Based Communication 📡

Socket.IO utiliza **Event Based Communication**.

En lugar de enviar solamente mensajes genéricos, cada comunicación puede asociarse con un **Event Name**.

```text
Event Name

     ↓

Handler
```

> 💡 El nombre del evento permite identificar qué acción debe ejecutarse.

### 🔌 WebSocket

Con WebSocket normalmente se recibe un mensaje y se determina qué acción realizar.

```text
message received

↓

parse type

↓

execute action
```

### 📡 Socket.IO

Socket.IO utiliza directamente el nombre del evento.

```text
Event Name

↓

Handler
```

---

# 2️⃣ emit() 📤

`emit()` se utiliza para **emitir o enviar un evento**.

```javascript
socket.emit(
  "chat-message",
  {
    text: "Hello"
  }
);
```

> 💡 El primer argumento es el **nombre del evento** y los siguientes argumentos contienen los datos que se envían.

---

# 3️⃣ on() 👂

`on()` se utiliza para **escuchar un evento**.

```javascript
socket.on(
  "chat-message",
  data => {

  }
);
```

> 💡 Cuando llega el evento `"chat-message"`, se ejecuta el **Handler**.

---

# 4️⃣ Custom Events 🛠️

Los **Custom Events** son eventos creados por la aplicación para representar acciones específicas.

```javascript
socket.emit(
  "chat-message",
  {
    text: "Hello"
  }
);
```

El servidor puede escuchar ese evento:

```javascript
socket.on(
  "chat-message",
  data => {

  }
);
```

> 💡 `"chat-message"` es un **Custom Event** definido por la aplicación.

---

# 5️⃣ Event Naming 🏷️

Los eventos necesitan un nombre que permita identificar la acción que representan.

```text
connect

disconnect

message

error

custom events
```

Los nombres deben representar claramente la acción o información relacionada con el evento.

**Ejemplos:**

```text
chat-message
user-login
send-message
save
```

---

# 6️⃣ Event Payloads 📦

El **Event Payload** es la información enviada junto con un evento.

```javascript
socket.emit(
  "chat-message",
  {
    text: "Hello"
  }
);
```

En este ejemplo:

| Elemento           | Valor               |
| ------------------ | ------------------- |
| 🏷️ **Event Name** | `"chat-message"`    |
| 📦 **Payload**     | `{ text: "Hello" }` |

El servidor recibe el payload:

```javascript
socket.on(
  "chat-message",
  data => {

  }
);
```

> 💡 `data` contiene la información enviada con el evento.

---

# 7️⃣ Server Events 🖥️

Los **Server Events** son eventos gestionados por el servidor Socket.IO.

El servidor puede escuchar eventos enviados por el cliente:

```javascript
socket.on(
  "chat-message",
  data => {

  }
);
```

También puede emitir eventos:

```javascript
socket.emit(
  "message",
  data
);
```

> 💡 El servidor puede actuar como **Listener** y como **Emitter**.

---

# 8️⃣ Client Events 💻

Los **Client Events** son eventos gestionados por el cliente Socket.IO.

El cliente puede emitir:

```javascript
socket.emit(
  "chat-message",
  {
    text: "Hello"
  }
);
```

Y puede escuchar:

```javascript
socket.on(
  "message",
  data => {

  }
);
```

> 💡 El cliente también puede actuar como **Emitter** y **Listener**.

---

# 9️⃣ Acknowledgements ✅

Los **Acknowledgements** permiten que quien emite un evento reciba una respuesta cuando el servidor termina de procesarlo.

### 💻 Cliente

```javascript
socket.emit(
  "save",
  data,
  callback
);
```

### 🖥️ Servidor

```javascript
callback({
  success: true
});
```

### 🔄 Flujo

```text
Client

   |

   | emit()

   ▼

Server

   |

   | callback()

   ▼

Client
```

> 💡 El `callback` permite confirmar el resultado de la operación.

---

# 🔟 Error Events ❌

Los **Error Events** permiten comunicar problemas relacionados con la conexión o con una operación.

**Eventos típicos:**

```text
error
```

También existen eventos relacionados con el estado de la conexión:

```text
connect

disconnect
```

> 💡 Los eventos permiten manejar diferentes situaciones de comunicación entre cliente y servidor.

---

# 🧠 Conceptos principales

| Concepto              | Significado                                      |
| --------------------- | ------------------------------------------------ |
| 📡 **Event**          | Acción o comunicación identificada por un nombre |
| 📤 **Emitter**        | Componente que emite un evento                   |
| 👂 **Listener**       | Componente que escucha un evento                 |
| ⚙️ **Handler**        | Función que se ejecuta cuando ocurre un evento   |
| ✅ **Acknowledgement** | Respuesta asociada a un evento emitido           |

---

# 🎯 Al terminar

> 🧠 **Socket.IO utiliza comunicación basada en eventos.** **`emit()`** **permite enviar eventos y** **`on()`** **permite escucharlos. Los eventos pueden incluir payloads y utilizar acknowledgements para recibir una respuesta.**

```text
Client

   |

   | emit("event", data)

   ▼

Server

   |

   | on("event", handler)

   ▼

Handler
```
