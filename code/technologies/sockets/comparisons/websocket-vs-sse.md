# 📄 02 — WebSocket vs SSE 🔌📡

> [!TIP]
> 💡 **¿Necesito comunicación bidireccional o solamente recibir actualizaciones del servidor?**
>
> **SSE (Server-Sent Events)** permite que el servidor envíe actualizaciones al cliente mediante un flujo unidireccional, mientras que **WebSocket** permite comunicación en ambas direcciones.

---

## 📚 Índice

- [📄 02 — WebSocket vs SSE 🔌📡](#-02--websocket-vs-sse-)
  - [📚 Índice](#-índice)
- [1️⃣ What is SSE? 📡](#1️⃣-what-is-sse-)
- [2️⃣ SSE Architecture 🏗️](#2️⃣-sse-architecture-️)
- [3️⃣ WebSocket Communication 🔌](#3️⃣-websocket-communication-)
- [4️⃣ One-Way Communication ➡️](#4️⃣-one-way-communication-️)
- [5️⃣ Two-Way Communication ↔️](#5️⃣-two-way-communication-️)
    - [Flujo](#flujo)
- [6️⃣ Browser Support 🌐](#6️⃣-browser-support-)
- [7️⃣ Reconnection 🔄](#7️⃣-reconnection-)
- [8️⃣ Performance ⚡](#8️⃣-performance-)
- [9️⃣ Use Cases 🎯](#9️⃣-use-cases-)
  - [📡 SSE funciona bien para:](#-sse-funciona-bien-para)
  - [🔌 WebSocket funciona mejor para:](#-websocket-funciona-mejor-para)
- [🔟 Choosing SSE or WebSocket 🤔](#-choosing-sse-or-websocket-)
    - [✅ YES](#-yes)
    - [❌ NO](#-no)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)

---

# 1️⃣ What is SSE? 📡

**SSE (Server-Sent Events)** es una tecnología que permite al servidor enviar datos al cliente mediante un flujo de comunicación **unidireccional**.

```text
Client

   |

   |

Server
```

La comunicación ocurre solamente en una dirección:

```text
Server → Client
```

> [!TIP]
> 💡 El servidor puede enviar actualizaciones al cliente sin que este tenga que realizar una nueva petición para cada actualización.

---

# 2️⃣ SSE Architecture 🏗️

La arquitectura de SSE se basa en una conexión HTTP mediante la cual el servidor mantiene un flujo de eventos hacia el cliente.

```text
Client

   |

   | HTTP Connection

   ↓

Server

   |

   | Events

   ↓

Client
```

> [!IMPORTANT]
> 🎯 SSE está diseñado principalmente para **Server Push** y actualizaciones en tiempo real desde el servidor.

---

# 3️⃣ WebSocket Communication 🔌

WebSocket permite comunicación bidireccional entre cliente y servidor.

```text
Client

 ↕

Server
```

Ambos lados pueden enviar información:

```text
Client → Server

Server → Client
```

> [!TIP]
> 💡 WebSocket permite **Two-Way Communication** mediante una conexión persistente.

---

# 4️⃣ One-Way Communication ➡️

SSE utiliza comunicación unidireccional.

```text
Server

   |

   | Data

   ↓

Client
```

> [!TIP]
> 💡 El flujo principal de información es **Server → Client**.

Esto permite recibir actualizaciones del servidor sin necesitar comunicación bidireccional.

---

# 5️⃣ Two-Way Communication ↔️

WebSocket permite que ambos lados puedan enviar información.

```text
Client

   ↕

Server
```

### Flujo

```text
Client

   | -------------------->

   | <--------------------

Server
```

> [!IMPORTANT]
> 🎯 Es apropiado cuando el cliente también necesita enviar datos en tiempo real al servidor.

---

# 6️⃣ Browser Support 🌐

SSE está disponible directamente en los navegadores mediante la API `EventSource`.

```text
Browser

   ↓

EventSource

   ↓

SSE
```

WebSocket también cuenta con una API disponible en los navegadores:

```text
Browser

   ↓

WebSocket API

   ↓

WebSocket
```

> [!TIP]
> 💡 Ambas tecnologías cuentan con soporte en navegadores modernos.

---

# 7️⃣ Reconnection 🔄

SSE incluye un mecanismo de **Automatic Reconnect**.

```text
Connection

   ↓

Disconnect

   ↓

Reconnect

   ↓

Connection
```

WebSocket puede requerir una estrategia de reconexión manual o personalizada.

```text
Connection

   ↓

Disconnect

   ↓

Custom Reconnect

   ↓

Connection
```

---

# 8️⃣ Performance ⚡

SSE y WebSocket tienen diferentes características.

| 📡 **SSE**                           | 🔌 **WebSocket**                 |
| ------------------------------------ | -------------------------------- |
| ↔️ Communication: One direction      | ↔️ Communication: Two directions |
| 🌐 Protocol: HTTP based              | 🌐 Protocol: WebSocket protocol  |
| 🔄 Reconnection: Automatic reconnect | 🔄 Reconnection: Manual/custom   |
| 📦 Data: Text only                   | 📦 Data: Text + Binary           |
| 🧩 Complexity: Simpler               | 🧩 Complexity: More complex      |

> [!TIP]
> 💡 SSE puede ser una opción más sencilla cuando únicamente se necesitan actualizaciones del servidor.

---

# 9️⃣ Use Cases 🎯

## 📡 SSE funciona bien para:

```text
News Feed

Stock Updates

Notifications

Live Scores
```

> [!TIP]
> 💡 Son casos donde principalmente se necesita recibir actualizaciones del servidor.

---

## 🔌 WebSocket funciona mejor para:

```text
Chat

Games

Collaboration

Video/Audio signaling
```

> [!TIP]
> 💡 Son casos donde se necesita comunicación en ambas direcciones.

---

# 🔟 Choosing SSE or WebSocket 🤔

La pregunta principal es:

```text
Do I need the client to send real-time data?
```

### ✅ YES

```text
YES

↓

WebSocket
```

> [!IMPORTANT]
> 🔌 Utiliza **WebSocket** cuando el cliente también necesita enviar datos en tiempo real.

### ❌ NO

```text
NO

↓

SSE may be enough
```

> [!TIP]
> 📡 **SSE may be enough** cuando solamente necesitas recibir actualizaciones del servidor.

---

# 🧠 Conceptos principales

| Concepto                | Significado                                |
| ----------------------- | ------------------------------------------ |
| 📡 **SSE**              | Server-Sent Events                         |
| 📤 **Server Push**      | Servidor enviando información al cliente   |
| ➡️ **One-way Stream**   | Flujo de información en una sola dirección |
| ↔️ **Full Duplex**      | Comunicación bidireccional                 |
| ⚡ **Real-Time Updates** | Actualizaciones recibidas en tiempo real   |

---

# 🎯 Al terminar

> **SSE es adecuado cuando solamente necesitas recibir actualizaciones del servidor. WebSocket es mejor cuando necesitas comunicación bidireccional en tiempo real.**

```text
📡 SSE

Server → Client
```

```text
🔌 WebSocket

Client ↔ Server
```
