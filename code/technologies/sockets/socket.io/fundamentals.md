# 📄 01 — What is Socket.IO? 🔌

> 💡 **¿Por qué usar Socket.IO si ya existe WebSocket?**
>
> **Socket.IO** es una librería para comunicación en tiempo real que proporciona funcionalidades adicionales sobre la capa de transporte.

---

## 📚 Índice

- [📄 01 — What is Socket.IO? 🔌](#-01--what-is-socketio-)
  - [📚 Índice](#-índice)
- [1️⃣ What is Socket.IO? 🔌](#1️⃣-what-is-socketio-)
- [2️⃣ Socket.IO Architecture 🏗️](#2️⃣-socketio-architecture-️)
- [3️⃣ Socket.IO Client 💻](#3️⃣-socketio-client-)
    - [💻 Ejemplo](#-ejemplo)
- [4️⃣ Socket.IO Server 🖥️](#4️⃣-socketio-server-️)
    - [🖥️ Ejemplo](#️-ejemplo)
- [5️⃣ Transport Layer 🚚](#5️⃣-transport-layer-)
- [6️⃣ Features ✨](#6️⃣-features-)
    - [🔄 Automatic Reconnection](#-automatic-reconnection)
    - [📡 Events](#-events)
    - [🚪 Rooms](#-rooms)
    - [🏷️ Namespaces](#️-namespaces)
    - [📢 Broadcasting](#-broadcasting)
    - [🔁 Fallback Transport](#-fallback-transport)
- [7️⃣ Advantages 👍](#7️⃣-advantages-)
    - [✨ Principales ventajas](#-principales-ventajas)
- [8️⃣ Limitations ⚠️](#8️⃣-limitations-️)
- [9️⃣ Socket.IO Ecosystem 🌐](#9️⃣-socketio-ecosystem-)
- [🔟 Common Use Cases 🎯](#-common-use-cases-)
    - [🎯 Ejemplos](#-ejemplos)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)

---

# 1️⃣ What is Socket.IO? 🔌

**Socket.IO** es una librería que facilita la creación de aplicaciones de **Real-time Communication**.

Permite establecer comunicación entre cliente y servidor y proporciona funcionalidades adicionales como eventos, reconexión automática, rooms y namespaces.

> ⚠️ **Socket.IO no es un WebSocket puro.**

Socket.IO utiliza diferentes transportes mediante **Engine.IO**.

```text id="socketlayer"
Socket.IO

      ↓

Engine.IO

      ↓

WebSocket

      \+

HTTP Long Polling
```

---

# 2️⃣ Socket.IO Architecture 🏗️

La arquitectura de Socket.IO conecta el frontend con el servidor y posteriormente con la lógica de la aplicación.

```text id="socketarch"
Frontend

   |

   |

Socket.IO Client

   |

   |

Socket.IO Server

   |

   |

Application Logic
```

> 💡 El **Socket.IO Client** se comunica con el **Socket.IO Server**, que posteriormente interactúa con la lógica de la aplicación.

---

# 3️⃣ Socket.IO Client 💻

El **Socket.IO Client** es la parte que se ejecuta en el cliente y permite establecer comunicación con el servidor Socket.IO.

```text id="client"
Frontend

   ↓

Socket.IO Client

   ↓

Socket.IO Server
```

### 💻 Ejemplo

```javascript
const socket =
io("http://localhost:3000");
```

> 💡 El cliente utiliza `io()` para conectarse al servidor Socket.IO.

---

# 4️⃣ Socket.IO Server 🖥️

El **Socket.IO Server** recibe conexiones de los clientes y permite manejar eventos de comunicación.

### 🖥️ Ejemplo

```javascript
io.on(
  "connection",
  socket => {

  }
);
```

> 💡 El evento `"connection"` se ejecuta cuando un cliente establece una conexión.

---

# 5️⃣ Transport Layer 🚚

La **Transport Layer** define el mecanismo utilizado para transportar la comunicación entre cliente y servidor.

Socket.IO utiliza **Engine.IO** para gestionar los transportes.

```text id="transport"
Socket.IO

      ↓

Engine.IO

      ↓

┌───────────────────┐
│ WebSocket         │
│ HTTP Long Polling │
└───────────────────┘
```

> 💡 WebSocket y HTTP Long Polling son transportes que pueden utilizarse para la comunicación.

---

# 6️⃣ Features ✨

Socket.IO proporciona funcionalidades adicionales para facilitar la comunicación en tiempo real.

```text id="features"
Automatic Reconnection

Events

Rooms

Namespaces

Broadcasting

Fallback Transport
```

### 🔄 Automatic Reconnection

Permite intentar reconectar automáticamente cuando se pierde la conexión.

### 📡 Events

Permite trabajar con eventos para enviar y recibir información.

### 🚪 Rooms

Permite agrupar conexiones dentro de diferentes rooms.

### 🏷️ Namespaces

Permite separar diferentes canales de comunicación.

### 📢 Broadcasting

Permite enviar mensajes a múltiples clientes.

### 🔁 Fallback Transport

Permite utilizar otro transporte cuando WebSocket no está disponible.

---

# 7️⃣ Advantages 👍

Socket.IO proporciona funcionalidades que facilitan el desarrollo de aplicaciones de comunicación en tiempo real.

### ✨ Principales ventajas

|     |                            |
| --- | -------------------------- |
| 🔄  | **Automatic Reconnection** |
| 📡  | **Events**                 |
| 🚪  | **Rooms**                  |
| 🏷️ | **Namespaces**             |
| 📢  | **Broadcasting**           |
| 🔁  | **Fallback Transport**     |

> 💡 Estas funcionalidades permiten construir aplicaciones Real-time Communication con mayor facilidad.

---

# 8️⃣ Limitations ⚠️

Socket.IO **no es equivalente a utilizar WebSocket directamente**.

> ⚠️ Un cliente WebSocket estándar no puede comunicarse directamente con un servidor Socket.IO como si fuera un servidor WebSocket puro.

Socket.IO utiliza su propia arquitectura:

```text id="socketarch2"
Socket.IO

   ↓

Engine.IO

   ↓

Transport
```

---

# 9️⃣ Socket.IO Ecosystem 🌐

El ecosistema de Socket.IO está formado principalmente por diferentes componentes que permiten establecer y administrar la comunicación.

```text id="ecosystem"
Socket.IO

   ├── Client
   │
   ├── Server
   │
   └── Engine.IO
```

> 💡 El **Client** y el **Server** permiten establecer la comunicación, mientras **Engine.IO** gestiona la capa de transporte.

---

# 🔟 Common Use Cases 🎯

Socket.IO puede utilizarse para aplicaciones que necesitan **Real-time Communication**.

### 🎯 Ejemplos

|    | Use Case                       |
| -- | ------------------------------ |
| 💬 | **Chat applications**          |
| 🔔 | **Real-time notifications**    |
| 📊 | **Real-time dashboards**       |
| 🎮 | **Online games**               |
| 👥 | **Collaborative applications** |

---

# 🧠 Conceptos principales

| Concepto                      | Significado                                          |
| ----------------------------- | ---------------------------------------------------- |
| 🔌 **Socket.IO**              | Librería para comunicación en tiempo real            |
| ⚙️ **Engine.IO**              | Gestiona la capa de transporte                       |
| 🚚 **Transport**              | Mecanismo utilizado para transportar la comunicación |
| 💻 **Client**                 | Parte que establece la comunicación desde el cliente |
| 🖥️ **Server**                | Parte que recibe y gestiona las conexiones           |
| ⚡ **Real-time Communication** | Comunicación entre cliente y servidor en tiempo real |

---

# 🎯 Al terminar

> 🧠 **Socket.IO es una librería de comunicación en tiempo real que utiliza Engine.IO y diferentes transportes, como WebSocket y HTTP Long Polling, además de proporcionar funcionalidades como eventos, reconexión automática, rooms, namespaces y broadcasting.**

```text id="summary"
Socket.IO

      ↓

Engine.IO

      ↓

WebSocket
     +
HTTP Long Polling
```
