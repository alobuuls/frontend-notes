# 🔌 01 — WebSocket Handshake

> **¿Cómo pasa una conexión HTTP normal a convertirse en una conexión WebSocket?**

El **WebSocket Handshake** es el proceso inicial donde un cliente y un servidor negocian cambiar una conexión HTTP tradicional a una conexión WebSocket.

> 💡 **Idea principal**

**Antes:**

```text
HTTP

Client → Server

Request → Response
```

**Después:**

```text
WebSocket

Client ↔ Server

Messages
```

---

## 📚 Índice

- [🔌 01 — WebSocket Handshake](#-01--websocket-handshake)
  - [📚 Índice](#-índice)
- [1️⃣ What is the WebSocket Handshake? 🤝](#1️⃣-what-is-the-websocket-handshake-)
  - [¿Qué es el WebSocket Handshake?](#qué-es-el-websocket-handshake)
    - [🔄 Flujo](#-flujo)
- [2️⃣ Why a Handshake is Needed? ❓](#2️⃣-why-a-handshake-is-needed-)
  - [¿Por qué necesitamos un Handshake?](#por-qué-necesitamos-un-handshake)
- [3️⃣ HTTP Request Before WebSocket 🌐](#3️⃣-http-request-before-websocket-)
- [4️⃣ Upgrade Request ⬆️](#4️⃣-upgrade-request-️)
- [5️⃣ Client Handshake 🖥️](#5️⃣-client-handshake-️)
    - [📋 Headers principales](#-headers-principales)
- [6️⃣ Server Handshake Response 🖥️](#6️⃣-server-handshake-response-️)
- [7️⃣ 101 Switching Protocols ✅](#7️⃣-101-switching-protocols-)
    - [🔄 Flujo](#-flujo-1)
- [8️⃣ Sec-WebSocket-Key 🔑](#8️⃣-sec-websocket-key-)
- [9️⃣ Sec-WebSocket-Accept 🔐](#9️⃣-sec-websocket-accept-)
    - [🔄 Flujo](#-flujo-2)
- [🔟 After Handshake 🚀](#-after-handshake-)
- [🏗️ WebSocket Handshake Diagram](#️-websocket-handshake-diagram)
- [🧠 Conceptos principales](#-conceptos-principales)

# 1️⃣ What is the WebSocket Handshake? 🤝

## ¿Qué es el WebSocket Handshake?

El **Handshake** es el proceso de negociación que permite establecer una conexión WebSocket.

Inicialmente, la comunicación comienza utilizando HTTP.

El cliente envía una petición HTTP especial indicando:

> "Quiero cambiar esta conexión a WebSocket".

Si el servidor acepta, responde confirmando el cambio.

### 🔄 Flujo

```text
Client

HTTP Request

      ↓

Server

Accept Upgrade

      ↓

WebSocket Connection
```

---

# 2️⃣ Why a Handshake is Needed? ❓

## ¿Por qué necesitamos un Handshake?

Porque WebSocket no comienza directamente como una conexión independiente.

Primero utiliza HTTP para establecer la comunicación inicial.

El handshake permite:

* 🔄 Cambiar de protocolo HTTP a WebSocket.
* 🤝 Verificar que ambos lados soportan WebSocket.
* 🔗 Crear la conexión persistente.

```text
HTTP Connection

        ↓

Handshake

        ↓

WebSocket Connection
```

---

# 3️⃣ HTTP Request Before WebSocket 🌐

Antes de existir WebSocket, el cliente envía una petición HTTP normal.

Pero esta petición incluye información especial indicando que quiere actualizar la conexión.

```http
GET /chat HTTP/1.1
Host: example.com
Upgrade: websocket
Connection: Upgrade
```

> 💬 El cliente está diciendo:

```text
"Quiero cambiar esta conexión HTTP a WebSocket"
```

---

# 4️⃣ Upgrade Request ⬆️

El cliente utiliza el mecanismo:

```text
Upgrade
```

para solicitar el cambio de protocolo.

La petición incluye headers especiales:

```text
Upgrade: websocket
```

y:

```text
Connection: Upgrade
```

Estos headers indican:

```text
HTTP

↓

Upgrade

↓

WebSocket
```

---

# 5️⃣ Client Handshake 🖥️

El cliente inicia el handshake enviando una petición HTTP especial.

```http
GET /socket HTTP/1.1

Host: example.com

Upgrade: websocket

Connection: Upgrade

Sec-WebSocket-Key: xxxxxxxxx

Sec-WebSocket-Version: 13
```

### 📋 Headers principales

| Header                  | Propósito                          |
| ----------------------- | ---------------------------------- |
| `Upgrade`               | Solicita cambiar a WebSocket       |
| `Connection`            | Indica que se realizará un upgrade |
| `Sec-WebSocket-Key`     | Identificador único del handshake  |
| `Sec-WebSocket-Version` | Versión de WebSocket utilizada     |

---

# 6️⃣ Server Handshake Response 🖥️

Si el servidor acepta la conexión, responde confirmando el cambio.

```http
HTTP/1.1 101 Switching Protocols

Upgrade: websocket

Connection: Upgrade

Sec-WebSocket-Accept: xxxxxxxx
```

> 💬 El servidor indica:

```text
"Acepto cambiar esta conexión HTTP a WebSocket"
```

---

# 7️⃣ 101 Switching Protocols ✅

El código:

```text
101 Switching Protocols
```

es la respuesta HTTP que indica que el servidor aceptó cambiar de protocolo.

Significa:

```text
HTTP

↓

WebSocket
```

### 🔄 Flujo

```text
Client

Request Upgrade

        ↓

Server

101 Switching Protocols

        ↓

WebSocket Connection
```

---

# 8️⃣ Sec-WebSocket-Key 🔑

`Sec-WebSocket-Key` es un valor generado por el cliente durante el handshake.

Ejemplo:

```http
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
```

Su objetivo es permitir que el servidor confirme que la respuesta pertenece a una petición WebSocket válida.

```text
Client

Sec-WebSocket-Key

        ↓

Server

Generates response
```

---

# 9️⃣ Sec-WebSocket-Accept 🔐

El servidor utiliza el valor recibido en:

```text
Sec-WebSocket-Key
```

para generar:

```text
Sec-WebSocket-Accept
```

Este valor se envía en la respuesta:

```http
Sec-WebSocket-Accept: xxxxxxxxx
```

Sirve para confirmar:

* ✅ Que el servidor recibió correctamente el handshake.
* ✅ Que acepta la conexión WebSocket.

### 🔄 Flujo

```text
Client

Sec-WebSocket-Key

        ↓

Server

Sec-WebSocket-Accept

        ↓

Client
```

---

# 🔟 After Handshake 🚀

Cuando el handshake termina correctamente:

La conexión deja de ser HTTP tradicional.

**Antes:**

```text
HTTP

Client

Request

↓

Server

Response
```

**Después:**

```text
WebSocket

Client ◄────────► Server

Messages
```

Ahora ambos lados pueden intercambiar mensajes utilizando la misma conexión.

---

# 🏗️ WebSocket Handshake Diagram

```text
Client                         Server

   │                              │

   │ HTTP Request                 │
   │ Upgrade: websocket           │
   │─────────────────────────────►│

   │                              │

   │ 101 Switching Protocols      │
   │◄─────────────────────────────│

   │                              │

   │ WebSocket Connection         │
   │◄────────────────────────────►│
```

---

# 🧠 Conceptos principales

| Concepto                        | Significado                               |
| ------------------------------- | ----------------------------------------- |
| 🤝 **Handshake**                | Proceso inicial para establecer WebSocket |
| ⬆️ **Upgrade**                  | Cambio de HTTP a WebSocket                |
| 📩 **HTTP Request**             | Petición inicial del cliente              |
| 📤 **HTTP Response**            | Respuesta del servidor                    |
| ✅ **101 Switching Protocols**   | Confirmación del cambio de protocolo      |
| 📋 **WebSocket Headers**        | Información usada durante la negociación  |
| 🔗 **Connection Establishment** | Creación de la conexión WebSocket         |
