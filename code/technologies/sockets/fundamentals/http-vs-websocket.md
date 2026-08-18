# 🌐 02 — HTTP vs WebSocket

> **¿Qué diferencia existe entre HTTP tradicional y WebSocket?**

HTTP y WebSocket son protocolos utilizados para la comunicación entre un **cliente** y un **servidor**, pero funcionan de manera diferente.

> [!IMPORTANT]
> La principal diferencia es:
>
> * HTTP utiliza un modelo de **request/response**.
> * WebSocket mantiene una conexión abierta para enviar mensajes continuamente.

---

## 📚 ÍNDICE 

- [🌐 02 — HTTP vs WebSocket](#-02--http-vs-websocket)
  - [📚 ÍNDICE](#-índice)
- [🧠 Conceptos clave](#-conceptos-clave)
- [1️⃣ HTTP Request/Response 📩](#1️⃣-http-requestresponse-)
  - [¿Cómo funciona HTTP tradicional?](#cómo-funciona-http-tradicional)
    - [🔄 Flujo](#-flujo)
- [2️⃣ WebSocket Communication 🔌](#2️⃣-websocket-communication-)
    - [🔄 Flujo](#-flujo-1)
- [3️⃣ Stateless vs Persistent Connection 🔗](#3️⃣-stateless-vs-persistent-connection-)
  - [HTTP — Stateless](#http--stateless)
  - [WebSocket — Persistent Connection](#websocket--persistent-connection)
- [4️⃣ Client Initiated Communication 🖥️](#4️⃣-client-initiated-communication-️)
  - [HTTP](#http)
  - [WebSocket](#websocket)
- [5️⃣ Bidirectional Communication 🔄](#5️⃣-bidirectional-communication-)
  - [HTTP](#http-1)
  - [WebSocket](#websocket-1)
- [6️⃣ Request/Response vs Message-Based Communication 💬](#6️⃣-requestresponse-vs-message-based-communication-)
  - [HTTP — Request/Response](#http--requestresponse)
  - [WebSocket — Message-Based](#websocket--message-based)
- [7️⃣ Connection Lifecycle 🔄](#7️⃣-connection-lifecycle-)
  - [HTTP Lifecycle](#http-lifecycle)
  - [WebSocket Lifecycle](#websocket-lifecycle)
- [8️⃣ Performance Considerations ⚡](#8️⃣-performance-considerations-)
  - [HTTP](#http-2)
  - [WebSocket](#websocket-2)
- [9️⃣ Real-Time Communication ⚡](#9️⃣-real-time-communication-)
  - [HTTP](#http-3)
  - [WebSocket](#websocket-3)
- [🔟 Comparison Table 📊](#-comparison-table-)
- [🧠 Conceptos clave](#-conceptos-clave-1)

---

# 🧠 Conceptos clave

- [Request/Response](#-1-http-requestresponse)
- [Persistent Connection](#-3-stateless-vs-persistent-connection)
- [Stateless](#http--stateless)
- [Bidirectional Communication](#-5-bidirectional-communication)
- [Message-Based Communication](#-6-requestresponse-vs-message-based-communication)
- [Connection Lifecycle](#-7-connection-lifecycle)
- [Real-Time Communication](#-9-real-time-communication)


# 1️⃣ HTTP Request/Response 📩

## ¿Cómo funciona HTTP tradicional?

HTTP utiliza un modelo donde el **cliente siempre inicia la comunicación**.

El cliente envía una petición:

```text
Request
```

y el servidor responde:

```text
Response
```

### 🔄 Flujo

```text
Client

   │
   │ Request
   ▼

Server

   │
   │ Response
   ▼

Client
```

---

Ejemplo:

Un usuario abre una página web:

```text
Client:
"Necesito los datos del usuario"

        ↓

Server:
"Aquí están los datos"

        ↓

Connection ends
```

Cada interacción normalmente requiere una nueva petición.

---

# 2️⃣ WebSocket Communication 🔌

WebSocket cambia este modelo creando una conexión permanente entre cliente y servidor.

### 🔄 Flujo

```text
Client

   │
   │◄──────────────►│
   │                │
   │   Messages     │
   │◄──────────────►│
   │                │

Server
```

Una vez creada la conexión:

* El cliente puede enviar mensajes.
* El servidor puede enviar mensajes.
* Ambos pueden comunicarse continuamente.

---

Ejemplo:

```text
Client:
"Usuario conectado"

        ↓

Server:
"Nuevo mensaje recibido"

        ↓

Client:
"Enviar respuesta"
```

---

# 3️⃣ Stateless vs Persistent Connection 🔗

## HTTP — Stateless

HTTP tradicional es **stateless**.

Esto significa que cada petición es independiente.

El servidor no mantiene una conexión activa después de responder.

```text
Request

   ↓

Response

   ↓

Connection ends
```

---

## WebSocket — Persistent Connection

WebSocket mantiene una conexión abierta.

```text
Connection opened

        ↓

Messages

        ↓

Connection remains open
```

El servidor y cliente pueden seguir intercambiando información mientras la conexión exista.

---

# 4️⃣ Client Initiated Communication 🖥️

## HTTP

En HTTP el cliente siempre inicia la comunicación.

```text
Client
   |
   | Request
   ▼
Server
```

El servidor no puede enviar información si el cliente no hizo una petición.

---

## WebSocket

La conexión comienza desde el cliente, pero después ambos lados pueden comunicarse.

```text
Client ◄────────► Server
```

Una vez conectados:

* El cliente puede enviar mensajes.
* El servidor puede enviar mensajes.

---

# 5️⃣ Bidirectional Communication 🔄

## HTTP

La comunicación es limitada:

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

El servidor responde únicamente después de recibir una petición.

---

## WebSocket

La comunicación es bidireccional:

```text
Client ◄────────► Server
```

Ambos pueden iniciar el envío de información.

Ejemplo:

Un servidor puede enviar una notificación:

```text
Server
   |
   ▼
"Nuevo mensaje recibido"
```

sin esperar una petición del cliente.

---

# 6️⃣ Request/Response vs Message-Based Communication 💬

## HTTP — Request/Response

HTTP trabaja con:

```text
Request
   ↓
Response
```

Cada interacción tiene:

1. Cliente solicita información.
2. Servidor procesa.
3. Servidor responde.

---

## WebSocket — Message-Based

WebSocket trabaja mediante mensajes.

```text
Message
   ↕
Message
   ↕
Message
```

No existe una relación obligatoria:

```text
Request → Response
```

Los mensajes pueden viajar en cualquier dirección.

---

# 7️⃣ Connection Lifecycle 🔄

## HTTP Lifecycle

```text
1. Client creates request

          ↓

2. Server receives request

          ↓

3. Server sends response

          ↓

4. Connection ends
```

---

## WebSocket Lifecycle

```text
1. Client opens connection

          ↓

2. Server accepts connection

          ↓

3. Messages are exchanged

          ↓

4. Connection remains open

          ↓

5. Connection closes
```

---

# 8️⃣ Performance Considerations ⚡

## HTTP

Puede generar más consumo debido a:

* Muchas conexiones.
* Headers enviados repetidamente.
* Peticiones constantes.

Ejemplo:

```text
Client:
"¿Hay nuevos datos?"

Server:
"No"

Client:
"¿Hay nuevos datos?"

Server:
"No"
```

---

## WebSocket

Reduce comunicación innecesaria porque:

* Mantiene una conexión abierta.
* Envía únicamente mensajes cuando existe información.
* Tiene menor latencia para datos en tiempo real.

---

# 9️⃣ Real-Time Communication ⚡

## HTTP

HTTP puede manejar información actualizada, pero normalmente requiere:

* Nuevas peticiones.
* Polling.
* Actualizaciones manuales.

Ejemplo:

```text
Client pregunta constantemente:

"¿Hay algo nuevo?"
```

---

## WebSocket

Permite comunicación en tiempo real.

Cuando ocurre un evento:

```text
Event happens

      ↓

Server sends message

      ↓

Client updates immediately
```

Ejemplos:

* 💬 Chats
* 🔔 Notificaciones
* 📈 Datos financieros
* 🎮 Juegos online

---

# 🔟 Comparison Table 📊

| Feature                 | HTTP             | WebSocket     |
| ----------------------- | ---------------- | ------------- |
| 📡 Communication        | Request/Response | Bidirectional |
| 🔗 Connection           | Request based    | Persistent    |
| 🖥️ Server can initiate | ❌ No             | ✅ Yes         |
| ⚡ Real-time             | Limited          | ✅ Yes         |
| 🔌 Protocol             | HTTP             | WebSocket     |

---

# 🧠 Conceptos clave

| Concepto               | HTTP                              | WebSocket                   |
| ---------------------- | --------------------------------- | --------------------------- |
| Comunicación           | Petición y respuesta              | Mensajes continuos          |
| Inicio de comunicación | Cliente                           | Cliente inicia conexión     |
| Conexión               | Temporal                          | Persistente                 |
| Dirección              | Principalmente cliente → servidor | Cliente ↔ servidor          |
| Uso principal          | APIs tradicionales, páginas web   | Aplicaciones en tiempo real |

---
