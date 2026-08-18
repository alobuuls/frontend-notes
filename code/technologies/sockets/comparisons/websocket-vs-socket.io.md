# 📄 04 — WebSocket vs Socket.IO 🔌📡

> [!TIP]
> 💡 **¿Necesito trabajar directamente con WebSocket o una librería más completa?**
>
> **WebSocket puro** ofrece una API estándar y mayor control, mientras que **Socket.IO** proporciona una capa de abstracción con funcionalidades integradas para facilitar el desarrollo.

---

## 📚 Índice

- [📄 04 — WebSocket vs Socket.IO 🔌📡](#-04--websocket-vs-socketio-)
  - [📚 Índice](#-índice)
- [1️⃣ Native WebSocket 🔌](#1️⃣-native-websocket-)
    - [Tú implementas](#tú-implementas)
- [2️⃣ Socket.IO Overview 📡](#2️⃣-socketio-overview-)
- [3️⃣ API Differences 🧩](#3️⃣-api-differences-)
- [4️⃣ Protocol Differences 🔄](#4️⃣-protocol-differences-)
    - [🔌 WebSocket](#-websocket)
    - [📡 Socket.IO](#-socketio)
- [5️⃣ Features Comparison ⚖️](#5️⃣-features-comparison-️)
- [6️⃣ Performance ⚡](#6️⃣-performance-)
- [7️⃣ Reconnection 🔄](#7️⃣-reconnection-)
    - [🔌 WebSocket](#-websocket-1)
    - [📡 Socket.IO](#-socketio-1)
- [8️⃣ Rooms 🚪](#8️⃣-rooms-)
    - [🔌 WebSocket](#-websocket-2)
    - [📡 Socket.IO](#-socketio-2)
- [9️⃣ Events 📡](#9️⃣-events-)
    - [🔌 WebSocket](#-websocket-3)
    - [📡 Socket.IO](#-socketio-3)
- [🔟 Use Cases 🎯](#-use-cases-)
  - [🔌 WebSocket](#-websocket-4)
  - [📡 Socket.IO](#-socketio-4)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)

---

# 1️⃣ Native WebSocket 🔌

**WebSocket puro** utiliza directamente la API estándar de WebSocket.

```text id="r7n3qx"
Application

     |

WebSocket API

     |

Protocol
```

> [!TIP]
> 💡 El desarrollador trabaja directamente con la API y tiene mayor control sobre la comunicación.

### Tú implementas

```text id="m8v4zs"
Reconnect

Message Format

Rooms

Broadcasting

State Management
```

> [!WARNING]
> ⚠️ Estas funcionalidades deben gestionarse manualmente cuando no existe una librería que las proporcione.

---

# 2️⃣ Socket.IO Overview 📡

**Socket.IO** proporciona una capa de abstracción sobre la comunicación WebSocket.

```text id="f2k9bd"
Application

     |

Socket.IO

     |

Engine.IO

     |

WebSocket
```

Incluye funcionalidades como:

```text id="c6w1ap"
Automatic Reconnect

Events

Rooms

Namespaces

Broadcasting
```

> [!TIP]
> 💡 Socket.IO facilita el desarrollo al proporcionar funcionalidades integradas.

---

# 3️⃣ API Differences 🧩

WebSocket puro proporciona una API de bajo nivel.

```javascript
socket.send(
  JSON.stringify(message)
);
```

Socket.IO utiliza una API basada en eventos.

```javascript
socket.emit(
  "message",
  data
);
```

| 🔌 **WebSocket**      | 📡 **Socket.IO**            |
| --------------------- | --------------------------- |
| API: Standard API     | API: Library                |
| Nivel: Más bajo       | Nivel: Más alto             |
| Control: More control | Control: Easier development |

> [!IMPORTANT]
> 🎯 Socket.IO proporciona una API más orientada a funcionalidades de aplicación.

---

# 4️⃣ Protocol Differences 🔄

### 🔌 WebSocket

WebSocket utiliza directamente el protocolo WebSocket.

```text id="b5xq8v"
Application

     ↓

WebSocket API

     ↓

Protocol
```

### 📡 Socket.IO

Socket.IO utiliza una capa adicional.

```text id="n2h7yc"
Application

     ↓

Socket.IO

     ↓

Engine.IO

     ↓

WebSocket
```

> [!WARNING]
> ⚠️ Socket.IO y WebSocket puro no son directamente intercambiables.

---

# 5️⃣ Features Comparison ⚖️

| 🔌 **WebSocket**             | 📡 **Socket.IO**                 |
| ---------------------------- | -------------------------------- |
| 📜 API: Standard API         | 📜 API: Library                  |
| 🪶 Complejidad: Lightweight  | 🪶 Complejidad: More features    |
| 🎛️ Control: More control    | 🎛️ Control: Easier development  |
| ⚙️ Features: Manual features | ⚙️ Features: Built-in features   |
| 📦 Abstracción: Lower        | 📦 Abstracción: More abstraction |

> [!TIP]
> 💡 WebSocket proporciona una solución más directa, mientras Socket.IO agrega funcionalidades para facilitar el desarrollo.

---

# 6️⃣ Performance ⚡

WebSocket puro tiene una comunicación más directa.

```text id="z8q3km"
Application

     ↓

WebSocket API

     ↓

Protocol
```

Socket.IO agrega una capa de abstracción:

```text id="p4v6nx"
Application

     ↓

Socket.IO

     ↓

Engine.IO

     ↓

WebSocket
```

> [!TIP]
> 💡 WebSocket puede ofrecer menor overhead, mientras Socket.IO proporciona más funcionalidades a cambio de una mayor abstracción.

---

# 7️⃣ Reconnection 🔄

### 🔌 WebSocket

Con WebSocket puro, la reconexión debe implementarse.

```text id="q3c7wy"
Connection Lost

      ↓

Reconnect

      ↓

Connection
```

> [!TIP]
> 💡 El desarrollador controla la estrategia de reconexión.

### 📡 Socket.IO

Socket.IO incluye **Automatic Reconnect**.

```text id="h6m2za"
Connection Lost

      ↓

Automatic Reconnect

      ↓

Connection
```

> [!IMPORTANT]
> 🎯 Socket.IO facilita el manejo de reconexiones.

---

# 8️⃣ Rooms 🚪

### 🔌 WebSocket

WebSocket puro no proporciona Rooms directamente.

```text id="v9k1de"
Application

     ↓

Manual Rooms
```

> [!TIP]
> 💡 La lógica de Rooms debe implementarse.

### 📡 Socket.IO

Socket.IO incluye Rooms.

```text id="x4r8bp"
Socket.IO

     ↓

Rooms

 ┌────┼────┐

Room1 Room2 Room3
```

> [!TIP]
> 💡 Permite agrupar clientes y enviar información a grupos específicos.

---

# 9️⃣ Events 📡

### 🔌 WebSocket

WebSocket utiliza mensajes y la aplicación debe determinar cómo interpretarlos.

```text id="s7d2kf"
Message

   ↓

Parse

   ↓

Action
```

### 📡 Socket.IO

Socket.IO proporciona un sistema basado en eventos.

```text id="a5n9cu"
Event Name

   ↓

Handler
```

Ejemplo:

```javascript
socket.emit(
  "message",
  data
);
```

> [!TIP]
> 💡 Los eventos permiten organizar la comunicación mediante nombres y handlers.

---

# 🔟 Use Cases 🎯

## 🔌 WebSocket

Utiliza **WebSocket** cuando necesitas:

```text id="e3p7qx"
Need maximum control

Custom protocol

Low overhead
```

> [!IMPORTANT]
> 🎯 Es adecuado cuando se busca una comunicación directa y control sobre la implementación.

---

## 📡 Socket.IO

Utiliza **Socket.IO** cuando necesitas:

```text id="k8w2mf"
Need productivity

Chat applications

Rooms/events

Fast development
```

> [!IMPORTANT]
> 🎯 Es adecuado cuando se buscan funcionalidades integradas y un desarrollo más rápido.

---

# 🧠 Conceptos principales

| Concepto                 | Significado                                             |
| ------------------------ | ------------------------------------------------------- |
| 🔌 **WebSocket API**     | API estándar para trabajar con WebSocket                |
| 📡 **Socket.IO**         | Librería con funcionalidades adicionales                |
| 🧩 **Abstraction Layer** | Capa que simplifica el uso de una tecnología            |
| 📡 **Events**            | Sistema para organizar la comunicación mediante eventos |
| ✨ **Features**           | Funcionalidades proporcionadas por una tecnología       |

---

# 🎯 Al terminar

> **WebSocket puro ofrece mayor control, una API estándar y menor overhead. Socket.IO agrega una capa de abstracción con funcionalidades como Automatic Reconnect, Events, Rooms, Namespaces y Broadcasting para facilitar el desarrollo.**

```text id="d1v8ra"
🔌 WebSocket

Application
     ↓
WebSocket API
     ↓
Protocol
```

```text id="w6m3pt"
📡 Socket.IO

Application
     ↓
Socket.IO
     ↓
Engine.IO
     ↓
WebSocket
```
