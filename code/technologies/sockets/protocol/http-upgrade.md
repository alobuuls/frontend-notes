# ⬆️ 02 — HTTP Upgrade

> **¿Cómo le dice el cliente al servidor que quiere cambiar de HTTP a WebSocket?**

El mecanismo **HTTP Upgrade** permite que una conexión HTTP existente cambie a otro protocolo.

En WebSocket, este mecanismo se utiliza durante el **Handshake** para transformar una conexión HTTP normal en una conexión WebSocket.

---

## 📚 Índice

- [⬆️ 02 — HTTP Upgrade](#️-02--http-upgrade)
  - [📚 Índice](#-índice)
- [1️⃣ What is HTTP Upgrade? ⬆️](#1️⃣-what-is-http-upgrade-️)
  - [¿Qué es HTTP Upgrade?](#qué-es-http-upgrade)
    - [🔄 Flujo](#-flujo)
- [2️⃣ Upgrade Header 📋](#2️⃣-upgrade-header-)
    - [📌 Ejemplo](#-ejemplo)
- [3️⃣ Connection Header 🔗](#3️⃣-connection-header-)
- [4️⃣ WebSocket Protocol Header 🔌](#4️⃣-websocket-protocol-header-)
  - [🔑 Sec-WebSocket-Key](#-sec-websocket-key)
  - [🔢 Sec-WebSocket-Version](#-sec-websocket-version)
    - [🔄 Handshake](#-handshake)
- [5️⃣ HTTP/1.1 Upgrade Mechanism 🌐](#5️⃣-http11-upgrade-mechanism-)
    - [🔄 Flujo general](#-flujo-general)
- [6️⃣ 101 Status Code ✅](#6️⃣-101-status-code-)
    - [🔴 Antes](#-antes)
    - [🟢 Después](#-después)
- [7️⃣ Upgrade Flow 🔄](#7️⃣-upgrade-flow-)
- [8️⃣ Headers Example 📄](#8️⃣-headers-example-)
  - [Client Request](#client-request)
    - [📋 Headers](#-headers)
  - [Server Response](#server-response)
- [🧠 Conceptos principales](#-conceptos-principales)

# 1️⃣ What is HTTP Upgrade? ⬆️

## ¿Qué es HTTP Upgrade?

**HTTP Upgrade** es un mecanismo de HTTP/1.1 que permite solicitar un cambio de protocolo sobre una conexión existente.

En el caso de WebSocket:

```text
HTTP

↓

WebSocket
```

> 💡 El cliente envía una petición indicando:
>
> "Quiero actualizar esta conexión para utilizar WebSocket".

### 🔄 Flujo

```text
Client

HTTP Request

Upgrade: websocket

        ↓

Server

Accepts Upgrade

        ↓

WebSocket Connection
```

---

# 2️⃣ Upgrade Header 📋

El header:

```http
Upgrade: websocket
```

indica el protocolo al que el cliente quiere cambiar.

### 📌 Ejemplo

```http
GET /chat HTTP/1.1

Upgrade: websocket
```

Significa:

```text
Current Protocol:

HTTP


Requested Protocol:

WebSocket
```

---

# 3️⃣ Connection Header 🔗

El header:

```http
Connection: Upgrade
```

indica que la petición utiliza el mecanismo de actualización de protocolo.

Trabaja junto con:

```http
Upgrade: websocket
```

> 💡 Ambos headers indican:

```text
Connection:

"Quiero cambiar el protocolo"
```

---

# 4️⃣ WebSocket Protocol Header 🔌

Durante el upgrade, WebSocket utiliza headers específicos para identificar y validar la conexión.

Los principales son:

## 🔑 Sec-WebSocket-Key

```http
Sec-WebSocket-Key: xxxxxxxxx
```

Es un valor generado por el cliente para iniciar la negociación.

## 🔢 Sec-WebSocket-Version

```http
Sec-WebSocket-Version: 13
```

Indica la versión del protocolo WebSocket utilizada.

### 🔄 Handshake

Estos headers forman parte del handshake:

```text
HTTP Request

        ↓

WebSocket Upgrade

        ↓

Connection Established
```

---

# 5️⃣ HTTP/1.1 Upgrade Mechanism 🌐

HTTP/1.1 permite que una conexión cambie de protocolo utilizando headers especiales.

### 🔄 Flujo general

```text
Client

Requests protocol change

        ↓

Server

Accepts or rejects

        ↓

New protocol starts
```

En WebSocket:

```text
HTTP/1.1

        ↓

Upgrade Request

        ↓

WebSocket
```

> 💡 El cambio ocurre sobre la misma conexión TCP.

---

# 6️⃣ 101 Status Code ✅

Cuando el servidor acepta el cambio, responde con:

```http
HTTP/1.1 101 Switching Protocols
```

Esto significa:

```text
HTTP upgrade accepted
```

Después de recibir:

```text
101 Switching Protocols
```

la comunicación deja de utilizar HTTP tradicional.

### 🔴 Antes

```text
HTTP

Request

↓

Response
```

### 🟢 Después

```text
WebSocket

Messages

↕
```

---

# 7️⃣ Upgrade Flow 🔄

El proceso completo:

```text
Client                         Server

   │                              │

   │ HTTP Request                 │
   │ Upgrade: websocket           │
   │ Connection: Upgrade          │
   │─────────────────────────────►│

   │                              │

   │ HTTP/1.1 101                 │
   │ Switching Protocols          │
   │◄─────────────────────────────│

   │                              │

   │ WebSocket Communication      │
   │◄────────────────────────────►│
```

---

# 8️⃣ Headers Example 📄

## Client Request

El cliente envía:

```http
GET /chat HTTP/1.1

Host: example.com

Upgrade: websocket

Connection: Upgrade

Sec-WebSocket-Key: xxxxxxxxx

Sec-WebSocket-Version: 13
```

### 📋 Headers

| Header                    | Función                            |
| ------------------------- | ---------------------------------- |
| **Host**                  | Servidor destino                   |
| **Upgrade**               | Solicita cambiar a WebSocket       |
| **Connection**            | Indica que se realizará un upgrade |
| **Sec-WebSocket-Key**     | Valor de negociación del cliente   |
| **Sec-WebSocket-Version** | Versión WebSocket                  |

---

## Server Response

El servidor responde:

```http
HTTP/1.1 101 Switching Protocols

Upgrade: websocket

Connection: Upgrade

Sec-WebSocket-Accept: xxxxxxxx
```

> ✅ La respuesta confirma:

```text
HTTP Upgrade accepted

        ↓

WebSocket Ready
```

---

# 🧠 Conceptos principales

| Concepto                  | Significado                                  |
| ------------------------- | -------------------------------------------- |
| ⬆️ **Upgrade Header**     | Indica el protocolo al que se quiere cambiar |
| 🔗 **Connection Header**  | Indica que se realizará un upgrade           |
| 🔄 **Protocol Switching** | Cambio de HTTP a WebSocket                   |
| 🤝 **HTTP Handshake**     | Proceso inicial de negociación               |
