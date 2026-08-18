# 📄 01 — HTTP vs WebSocket 🌐🔌

> 💡 **¿Por qué necesitaríamos WebSocket si HTTP ya existe?**
>
> **HTTP** utiliza principalmente un modelo de **Request/Response**, mientras que **WebSocket** permite una comunicación bidireccional y persistente entre cliente y servidor.

---

## 📚 Índice

- [📄 01 — HTTP vs WebSocket 🌐🔌](#-01--http-vs-websocket-)
  - [📚 Índice](#-índice)
- [1️⃣ HTTP Communication Model 🌐](#1️⃣-http-communication-model-)
- [2️⃣ WebSocket Communication Model 🔌](#2️⃣-websocket-communication-model-)
- [3️⃣ Request Response Pattern 🔄](#3️⃣-request-response-pattern-)
    - [Flujo](#flujo)
- [4️⃣ Persistent Connections 🔗](#4️⃣-persistent-connections-)
    - [Comparación](#comparación)
- [5️⃣ Server Push 📤](#5️⃣-server-push-)
- [6️⃣ Real-Time Communication ⚡](#6️⃣-real-time-communication-)
- [7️⃣ Performance Differences ⚡](#7️⃣-performance-differences-)
    - [🌐 HTTP](#-http)
    - [🔌 WebSocket](#-websocket)
- [8️⃣ Resource Usage 💻](#8️⃣-resource-usage-)
    - [HTTP](#http)
    - [WebSocket](#websocket)
- [9️⃣ Use Cases 🎯](#9️⃣-use-cases-)
  - [🌐 HTTP](#-http-1)
  - [🔌 WebSocket](#-websocket-1)
- [🔟 Choosing Between HTTP and WebSocket 🤔](#-choosing-between-http-and-websocket-)
    - [🌐 Choose HTTP](#-choose-http)
    - [🔌 Choose WebSocket](#-choose-websocket)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)

---

# 1️⃣ HTTP Communication Model 🌐

**HTTP** utiliza un modelo tradicional basado en **Request/Response**.

```text
Client

  |

  | Request

  ▼

Server

  |

  | Response

  ▼

Client
```

> [!TIP]
> 💡 El cliente realiza una petición y el servidor devuelve una respuesta.

---

# 2️⃣ WebSocket Communication Model 🔌

**WebSocket** permite una comunicación **bidireccional** entre cliente y servidor.

```text
Client                 Server

   | -------------------->

   | <-------------------->

   | -------------------->

   | <-------------------->
```

> [!TIP]
> 💡 Tanto el cliente como el servidor pueden enviar información.

---

# 3️⃣ Request Response Pattern 🔄

En HTTP, cada comunicación sigue principalmente el patrón:

```text
Request

   +

Response
```

### Flujo

```text
Client

   ↓

Request

   ↓

Server

   ↓

Response

   ↓

Client
```

> [!TIP]
> 💡 El cliente inicia la comunicación mediante una petición.

---

# 4️⃣ Persistent Connections 🔗

WebSocket mantiene una conexión persistente entre cliente y servidor.

```text
Client

   ↕

WebSocket Connection

   ↕

Server
```

> [!TIP]
> 💡 La conexión permanece abierta para permitir múltiples intercambios de información.

### Comparación

| HTTP              | WebSocket             |
| ----------------- | --------------------- |
| Short connections | Long-lived connection |
| Request/Response  | Persistent Connection |

---

# 5️⃣ Server Push 📤

Con WebSocket, el servidor puede enviar información al cliente sin esperar una nueva petición.

```text
Client

      ↕

Server
```

El servidor puede iniciar el envío de información:

```text
Server

   |

   | Update

   ▼

Client
```

> [!TIP]
> 💡 Esto permite que el servidor realice **Server Push**.

---

# 6️⃣ Real-Time Communication ⚡

WebSocket permite **Real-Time Communication** porque mantiene una conexión abierta y permite comunicación en ambas direcciones.

```text
Client

   ↕

Persistent Connection

   ↕

Server
```

> [!TIP]
> 🎯 Es útil cuando la información debe actualizarse continuamente.

---

# 7️⃣ Performance Differences ⚡

HTTP y WebSocket tienen diferentes modelos de comunicación.

### 🌐 HTTP

```text
Request

   ↓

Response

   ↓

Request

   ↓

Response
```

### 🔌 WebSocket

```text
Connection

   ↓

Message

   ↕

Message

   ↕

Message
```

> [!TIP]
> 💡 WebSocket evita tener que iniciar un nuevo intercambio Request/Response para cada actualización dentro de una conexión persistente.

---

# 8️⃣ Resource Usage 💻

Los dos modelos utilizan los recursos del servidor de manera diferente.

### HTTP

```text
Request

   ↓

Processing

   ↓

Response
```

### WebSocket

```text
Connection

   ↓

Persistent Connection
```

> [!TIP]
> 💡 WebSocket mantiene conexiones abiertas, por lo que el servidor debe administrar esas conexiones persistentes.

---

# 9️⃣ Use Cases 🎯

## 🌐 HTTP

HTTP es adecuado para operaciones tradicionales como:

```text
User Profile

Products

Orders

Search
```

> [!TIP]
> 💡 Estas operaciones normalmente siguen un modelo de petición y respuesta.

---

## 🔌 WebSocket

WebSocket es adecuado para aplicaciones que necesitan comunicación en tiempo real.

```text
Chat

Gaming

Live Notifications

Tracking
```

> [!TIP]
> ⚡ Estas aplicaciones necesitan recibir actualizaciones mientras la conexión permanece activa.

---

# 🔟 Choosing Between HTTP and WebSocket 🤔

### 🌐 Choose HTTP

Cuando la aplicación utiliza principalmente:

* 📤 Request/Response
* 🔌 Comunicaciones independientes
* 📦 REST APIs
* 🔎 Consultas como Products, Orders o Search

### 🔌 Choose WebSocket

Cuando la aplicación necesita:

* ⚡ Real-Time Communication
* 🔄 Persistent Connection
* ↔️ Comunicación bidireccional
* 📤 Server Push
* 💬 Actualizaciones continuas

---

# 🧠 Conceptos principales

| Concepto                      | Significado                                                         |
| ----------------------------- | ------------------------------------------------------------------- |
| 🌐 **HTTP**                   | Protocolo basado principalmente en Request/Response                 |
| 🔄 **Request Response**       | Modelo donde el cliente realiza una petición y recibe una respuesta |
| ↔️ **Full Duplex**            | Comunicación bidireccional entre cliente y servidor                 |
| 🔗 **Persistent Connection**  | Conexión que permanece abierta                                      |
| 📤 **Server Push**            | Servidor enviando información al cliente                            |
| ⚡ **Real-Time Communication** | Comunicación con actualizaciones continuas                          |

---

# 🎯 Al terminar

> **HTTP utiliza principalmente el patrón Request/Response, mientras que WebSocket mantiene una conexión persistente y permite comunicación bidireccional. Por eso WebSocket es especialmente útil para aplicaciones que necesitan comunicación en tiempo real.**

```text
🌐 HTTP

Client

   ↓ Request

Server

   ↓ Response

Client
```

```text
🔌 WebSocket

Client

   ↕

Persistent Connection

   ↕

Server
```
