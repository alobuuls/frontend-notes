# 🔌 01 — Fundamentals

## 📚 ÍNDICE

- [🔌 01 — Fundamentals](#-01--fundamentals)
  - [📚 ÍNDICE](#-índice)
- [🧠 Conceptos principales](#-conceptos-principales)
- [1️⃣ Definition](#1️⃣-definition)
  - [🔌 ¿Qué es WebSocket?](#-qué-es-websocket)
  - [❓ ¿Qué problema intenta resolver?](#-qué-problema-intenta-resolver)
- [2️⃣ Real-Time Communication ⚡](#2️⃣-real-time-communication-)
  - [¿Qué significa comunicación en tiempo real?](#qué-significa-comunicación-en-tiempo-real)
    - [⚡ WebSocket permite:](#-websocket-permite)
- [3️⃣ Client-Server Communication 🖥️](#3️⃣-client-server-communication-️)
  - [🖥️ Client](#️-client)
  - [🖥️ Server](#️-server)
- [4️⃣ Persistent Connection 🔗](#4️⃣-persistent-connection-)
  - [¿Qué es una conexión persistente?](#qué-es-una-conexión-persistente)
    - [HTTP tradicional](#http-tradicional)
    - [WebSocket](#websocket)
- [5️⃣ Bidirectional Communication 🔄](#5️⃣-bidirectional-communication-)
  - [¿Qué significa bidireccional?](#qué-significa-bidireccional)
- [6️⃣ Full-Duplex Communication 🚀](#6️⃣-full-duplex-communication-)
  - [¿Qué significa Full-Duplex?](#qué-significa-full-duplex)
    - [HTTP tradicional](#http-tradicional-1)
    - [WebSocket](#websocket-1)
- [7️⃣ WebSocket URLs 🌐](#7️⃣-websocket-urls-)
  - [🔹 `ws://`](#-ws)
  - [🔹 `wss://`](#-wss)
- [8️⃣ Basic Architecture 🏗️](#8️⃣-basic-architecture-️)
    - [🧩 Componentes principales](#-componentes-principales)
- [9️⃣ WebSocket Lifecycle — Overview 🔄](#9️⃣-websocket-lifecycle--overview-)
  - [1. Connection Opening 🔓](#1-connection-opening-)
  - [2. Connection Established ✅](#2-connection-established-)
  - [3. Message Exchange 💬](#3-message-exchange-)
  - [4. Connection Closing 🔒](#4-connection-closing-)
- [🔟 Basic Use Cases 📌](#-basic-use-cases-)
    - [💬 Chat Applications](#-chat-applications)
- [🧠 Conceptos principales](#-conceptos-principales-1)

---

# 🧠 Conceptos principales

- [WebSocket](#-qué-es-websocket)
- [Real-Time Communication](#qué-significa-comunicación-en-tiempo-real)
- [Persistent Connection](#qué-es-una-conexión-persistente)
- [Bidirectional Communication](#qué-significa-bidireccional)
- [Full-Duplex Communication](#qué-significa-full-duplex)
- [Client-Server Communication](#️-3-client-server-communication)
- [WebSocket Lifecycle](#-9-websocket-lifecycle--overview)
- [WebSocket URLs](#-7-websocket-urls)

---

# 1️⃣ Definition

## 🔌 ¿Qué es WebSocket?

**WebSocket** es un protocolo de comunicación que permite crear una conexión persistente entre un **cliente** y un **servidor**.

A diferencia de HTTP tradicional, donde el cliente debe hacer una petición para recibir una respuesta, WebSocket permite que ambos lados puedan comunicarse continuamente usando una misma conexión abierta.

> [!TIP]
> Su objetivo principal es permitir comunicación:
>
> |    |                                 |
> | -- | ------------------------------- |
> | ⚡  | En tiempo real                  |
> | 🔄 | Bidireccional                   |
> | 🚀 | Con baja latencia               |
> | 🔗 | Manteniendo una conexión activa |

---

## ❓ ¿Qué problema intenta resolver?

Antes de WebSocket, muchas aplicaciones necesitaban actualizar información constantemente.

Ejemplo:

* 💬 Chats
* 📈 Datos financieros
* 🎮 Juegos online
* 🔔 Notificaciones

Con HTTP tradicional, el cliente debía preguntar constantemente:

```text
Client:
"¿Hay nuevos mensajes?"

Server:
"No"

Client:
"¿Hay nuevos mensajes?"

Server:
"No"

Client:
"¿Hay nuevos mensajes?"

Server:
"Sí, aquí tienes"
```

Esto genera:

* ❌ Muchas peticiones innecesarias
* ❌ Mayor consumo de recursos
* ❌ Retraso en la actualización de información

WebSocket resuelve esto creando una conexión donde el servidor puede enviar información cuando ocurre un evento.

---

# 2️⃣ Real-Time Communication ⚡

## ¿Qué significa comunicación en tiempo real?

Es la capacidad de intercambiar información inmediatamente cuando ocurre un evento.

Ejemplo:

Un usuario envía un mensaje:

```text
User A
   |
   |
   ▼
Server
   |
   |
   ▼
User B
```

El usuario B recibe el mensaje inmediatamente sin tener que preguntar si existe un nuevo mensaje.

### ⚡ WebSocket permite:

```text
Evento ocurre
      |
      ▼
Servidor envía información inmediatamente
      |
      ▼
Cliente recibe actualización
```

---

# 3️⃣ Client-Server Communication 🖥️

WebSocket utiliza el modelo clásico:

```text
Client  ◄────────►  Server
```

## 🖥️ Client

Es la aplicación que inicia la comunicación.

Ejemplos:

* Navegador web
* Aplicación móvil
* Aplicación desktop

---

## 🖥️ Server

Es la aplicación que mantiene la conexión y responde enviando mensajes.

Ejemplos:

* Backend
* API
* Servicio en tiempo real

---

La comunicación ocurre mediante mensajes:

```text
Client
   |
   | Message
   ▼
Server


Server
   |
   | Message
   ▼
Client
```

---

# 4️⃣ Persistent Connection 🔗

## ¿Qué es una conexión persistente?

Es una conexión que permanece abierta después de ser creada.

### HTTP tradicional

```text
Request
   |
   ▼
Response
   |
   ▼
Connection ends
```

### WebSocket

```text
Connection opened
        |
        |
        ▼
Communication
        |
        |
        ▼
Connection remains active
```

Esto permite que:

* El cliente pueda enviar mensajes.
* El servidor pueda enviar mensajes.
* No sea necesario crear una nueva conexión para cada comunicación.

---

# 5️⃣ Bidirectional Communication 🔄

## ¿Qué significa bidireccional?

Significa que ambos lados pueden enviar información.

Tanto:

```text
Client
```

como:

```text
Server
```

pueden iniciar una comunicación.

Ejemplo:

```text
Client ─────────► Server

Client ◄───────── Server
```

El servidor no necesita esperar una petición del cliente para responder.

Puede enviar información cuando quiera.

---

# 6️⃣ Full-Duplex Communication 🚀

## ¿Qué significa Full-Duplex?

Full-Duplex significa que ambos lados pueden comunicarse al mismo tiempo.

Ejemplo:

```text
Client ─────────► Server
       ◄─────────
```

Ambos pueden enviar mensajes simultáneamente.

### HTTP tradicional

```text
Client:
Enviar petición

Server:
Responder

Fin
```

Comunicación limitada por petición/respuesta.

### WebSocket

```text
Client:
Enviar mensaje  ─────►

Server:
Enviar mensaje  ─────►

Ambos continúan conectados
```

---

# 7️⃣ WebSocket URLs 🌐

WebSocket utiliza URLs especiales.

## 🔹 `ws://`

Representa una conexión WebSocket sin cifrado.

Ejemplo:

```text
ws://example.com/socket
```

Similar a:

```text
http://
```

---

## 🔹 `wss://`

Representa una conexión WebSocket segura utilizando TLS/SSL.

Ejemplo:

```text
wss://example.com/socket
```

Similar a:

```text
https://
```

> [!IMPORTANT]
> En aplicaciones reales normalmente se utiliza:
>
> ```text
> wss://
> ```
>
> porque protege la información enviada entre cliente y servidor.

---

# 8️⃣ Basic Architecture 🏗️

La arquitectura básica de WebSocket contiene:

```text
             WebSocket Connection


        ┌───────────────┐
        │    Client     │
        └───────┬───────┘
                │

         persistent

         connection

                │

        ┌───────▼───────┐
        │    Server     │
        └───────────────┘


        Client ◄──────► Server
```

### 🧩 Componentes principales

| Componente    | Descripción                     |
| ------------- | ------------------------------- |
| 🖥️ Client    | Inicia la conexión              |
| 🖥️ Server    | Mantiene la conexión            |
| 🔗 Connection | Canal abierto de comunicación   |
| 💬 Message    | Información enviada entre ambos |

---

# 9️⃣ WebSocket Lifecycle — Overview 🔄

El ciclo de vida básico de WebSocket tiene varias etapas:

## 1. Connection Opening 🔓

El cliente solicita iniciar una conexión.

```text
Client
   |
   | Connect request
   ▼
Server
```

## 2. Connection Established ✅

Cliente y servidor tienen una conexión abierta.

```text
Client ◄────────► Server
```

## 3. Message Exchange 💬

Ambos pueden enviar mensajes.

```text
Client ─────► Server

Client ◄───── Server
```

## 4. Connection Closing 🔒

Uno de los lados cierra la conexión.

```text
Client ──X── Server
```

---

# 🔟 Basic Use Cases 📌

WebSocket se utiliza cuando necesitamos información actualizada constantemente.

| Caso de uso                | Ejemplos                                                     |
| -------------------------- | ------------------------------------------------------------ |
| 💬 Chat Applications       | Mensajería instantánea · Chats en vivo                       |
| 🔔 Real-Time Notifications | Alertas · Nuevos eventos · Actualizaciones                   |
| 📈 Financial Data          | Precios de acciones · Criptomonedas · Mercados en vivo       |
| 🎮 Online Games            | Permite enviar acciones del jugador rápidamente.             |
| 📺 Live Updates            | Resultados deportivos · Tracking en tiempo real · Dashboards |

### 💬 Chat Applications

```text
User A
   |
   ▼
Server
   |
   ▼
User B
```

---

# 🧠 Conceptos principales

| Concepto                 | Significado                                  |
| ------------------------ | -------------------------------------------- |
| 🔌 WebSocket             | Protocolo de comunicación en tiempo real     |
| ⚡ Real-Time              | Información actualizada inmediatamente       |
| 🔗 Persistent Connection | Conexión que permanece abierta               |
| 🔄 Bidirectional         | Cliente y servidor pueden enviar información |
| 🚀 Full-Duplex           | Comunicación simultánea en ambos sentidos    |
| 🖥️ Client               | Aplicación que inicia la conexión            |
| 🖥️ Server               | Sistema que mantiene la conexión             |
| 🔗 Connection            | Canal abierto de comunicación                |
| 💬 Message               | Información enviada entre cliente y servidor |

---
