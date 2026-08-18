# 🔁 06 — Request Response over WebSocket

> 💡 **¿Si WebSocket no tiene requests y responses obligatorios, cómo podemos crear ese comportamiento?**

WebSocket funciona mediante intercambio de mensajes, pero no tiene una relación automática entre un mensaje enviado y una respuesta recibida como ocurre en HTTP.

Para crear un comportamiento similar, se utiliza un patrón de **Request Response** usando identificadores.

---

## 📚 Índice
- [🔁 06 — Request Response over WebSocket](#-06--request-response-over-websocket)
  - [📚 Índice](#-índice)
- [1️⃣ WebSocket is Message Based 💬](#1️⃣-websocket-is-message-based-)
- [2️⃣ Request Response Pattern 🔄](#2️⃣-request-response-pattern-)
    - [Flujo](#flujo)
- [3️⃣ Request IDs 🆔](#3️⃣-request-ids-)
    - [Ejemplo](#ejemplo)
- [4️⃣ Correlation IDs 🔗](#4️⃣-correlation-ids-)
    - [Flujo](#flujo-1)
- [5️⃣ Client Requests 📤](#5️⃣-client-requests-)
    - [Ejemplo](#ejemplo-1)
- [6️⃣ Server Responses 📥](#6️⃣-server-responses-)
    - [Ejemplo](#ejemplo-2)
- [7️⃣ Async Responses ⏳](#7️⃣-async-responses-)
    - [Flujo](#flujo-2)
- [8️⃣ Timeouts ⏱️](#8️⃣-timeouts-️)
    - [Problema](#problema)
- [9️⃣ Error Responses ⚠️](#9️⃣-error-responses-️)
    - [Ejemplo](#ejemplo-3)
    - [Flujo](#flujo-3)
- [🔟 Difference with HTTP 🌐](#-difference-with-http-)
  - [HTTP](#http)
  - [WebSocket](#websocket)
- [📊 HTTP vs WebSocket Request Response](#-http-vs-websocket-request-response)
- [🔄 Request Response Flow](#-request-response-flow)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)
    - [Cliente](#cliente)
    - [Servidor](#servidor)


# 1️⃣ WebSocket is Message Based 💬

WebSocket funciona basado en mensajes.

No existe un modelo obligatorio de:

```text
Request
   ↓
Response
```

En WebSocket:

```text
Message
   ↓
Message
```

Cada mensaje es independiente.

> 💡 **TIP:** WebSocket trabaja con mensajes independientes, no con un modelo obligatorio de request/response.

---

# 2️⃣ Request Response Pattern 🔄

El patrón **Request Response** permite crear una comunicación donde:

1. El cliente envía una solicitud.
2. El servidor procesa la información.
3. El servidor envía una respuesta relacionada.

### Flujo

```text id="m7q3xp"
Client
Request
   ↓
Server
Process
   ↓
Response
   ↓
Client
```

---

# 3️⃣ Request IDs 🆔

Un **Request ID** identifica una solicitud específica.

Permite saber qué respuesta pertenece a qué request.

### Ejemplo

**Cliente:**

```json id="q8m4vx"
{
  "type":"get_user",
  "requestId":"123"
}
```

El servidor responde usando el mismo ID.

> 🆔 **TIP:** El `requestId` permite identificar una solicitud específica.

---

# 4️⃣ Correlation IDs 🔗

Un **Correlation ID** conecta un mensaje inicial con todos los mensajes relacionados.

### Flujo

```text id="p5n2mq"
Request
ID:123
   ↓
Processing
   ↓
Response
ID:123
```

Permite relacionar:

```text id="x7m3qp"
Request
   ↕
Response
```

---

# 5️⃣ Client Requests 📤

El cliente envía una solicitud con información específica.

### Ejemplo

```json id="n6m8qx"
{
  "type":"get_user",

  "requestId":"123",

  "payload":{
    "userId":50
  }
}
```

Contiene:

```text id="k4q9mp"
type

requestId

payload
```

---

# 6️⃣ Server Responses 📥

El servidor procesa el request y devuelve una respuesta.

### Ejemplo

```json id="v8m3qx"
{
  "type":"user_response",

  "requestId":"123",

  "payload":{
    "name":"John"
  }
}
```

El `requestId` permite relacionar la respuesta con la solicitud original.

> 🔗 **TIP:** La respuesta utiliza el mismo `requestId` para poder asociarse con el request correspondiente.

---

# 7️⃣ Async Responses ⏳

Las respuestas en WebSocket pueden ser asíncronas.

El servidor puede responder después de un tiempo.

### Flujo

```text id="r5n8mq"
Client
Request
   ↓
Server
Processing
   ↓
Later Response
```

La respuesta no tiene que llegar inmediatamente.

---

# 8️⃣ Timeouts ⏱️

Como WebSocket no tiene una respuesta automática, el cliente debe controlar tiempos de espera.

### Problema

```text id="t6m2qx"
Request
   ↓
No Response
   ↓
Timeout
```

El cliente puede establecer un límite de tiempo para esperar una respuesta.

> ⚠️ **TIP:** El cliente debe controlar qué ocurre cuando una respuesta no llega dentro del tiempo esperado.

---

# 9️⃣ Error Responses ⚠️

El servidor también puede responder indicando errores.

### Ejemplo

```json id="x3q8mv"
{
  "type":"error",

  "requestId":"123",

  "message":"User not found"
}
```

### Flujo

```text id="a7m4qp"
Request
   ↓
Process
   ↓
Error Response
```

---

# 🔟 Difference with HTTP 🌐

## HTTP

Tiene una relación integrada:

```text id="b6n9mx"
Request
   ↓
Response
```

El protocolo maneja automáticamente esa relación.

## WebSocket

Funciona con mensajes independientes:

```text id="c8m4qx"
Message
   ↓
Message
```

La aplicación debe crear la relación usando IDs.

---

# 📊 HTTP vs WebSocket Request Response

| HTTP                                 | WebSocket                         |
| ------------------------------------ | --------------------------------- |
| Request obligatorio                  | Mensajes independientes           |
| Response relacionado automáticamente | Response necesita ID              |
| Comunicación por petición            | Comunicación continua             |
| Relación integrada                   | Relación creada por la aplicación |

---

# 🔄 Request Response Flow

```text id="h5m8qx"
Client

Request

ID: 123

      ↓

Server

Process

      ↓

Response

ID: 123

      ↓

Client matches response
```

---

# 🧠 Conceptos principales

| Concepto                    | Significado                                       |
| --------------------------- | ------------------------------------------------- |
| 🆔 **Request ID**           | Identificador de una solicitud                    |
| 🔗 **Correlation ID**       | ID que relaciona mensajes relacionados            |
| ⏳ **Async Response**        | Respuesta enviada después de un tiempo            |
| ⏱️ **Timeout**              | Tiempo máximo de espera                           |
| 🔄 **Promise-like Pattern** | Patrón similar a promesas para manejar respuestas |

---

# 🎯 Al terminar

WebSocket no tiene requests y responses automáticos como HTTP, pero se puede crear ese comportamiento agregando identificadores.

### Cliente

```json
{
  "type":"get_user",
  "requestId":"123",
  "payload":{
    "userId":50
  }
}
```

### Servidor

```json
{
  "type":"user_response",
  "requestId":"123",
  "payload":{
    "name":"John"
  }
}
```

> 🧠 **TIP:** El `requestId` permite que el cliente pueda asociar cada respuesta con su solicitud correspondiente.
