# 📡 05 — Server-Sent Events (SSE)

> **¿Qué pasa si solamente necesitamos que el servidor envíe información al cliente?**

Cuando una aplicación necesita que el **servidor envíe actualizaciones al cliente automáticamente**, pero no necesita que el cliente envíe información constantemente, aparece:

```text
Server-Sent Events
```

---

# 📑 Índice — 📡 05 Server-Sent Events (SSE)

- [📡 05 — Server-Sent Events (SSE)](#-05--server-sent-events-sse)
- [📑 Índice — 📡 05 Server-Sent Events (SSE)](#-índice---05-server-sent-events-sse)
- [1️⃣ What are Server-Sent Events? 📡](#1️⃣-what-are-server-sent-events-)
  - [¿Qué son Server-Sent Events?](#qué-son-server-sent-events)
- [2️⃣ Server → Client Communication 🖥️](#2️⃣-server--client-communication-️)
- [3️⃣ Persistent HTTP Connection 🔗](#3️⃣-persistent-http-connection-)
- [4️⃣ Event Stream 🌊](#4️⃣-event-stream-)
- [5️⃣ EventSource API 🌐](#5️⃣-eventsource-api-)
- [6️⃣ Basic Example 💻](#6️⃣-basic-example-)
- [7️⃣ Advantages ✅](#7️⃣-advantages-)
  - [👍 Comunicación automática del servidor](#-comunicación-automática-del-servidor)
  - [👍 Menos requests innecesarios](#-menos-requests-innecesarios)
  - [👍 Usa HTTP](#-usa-http)
  - [👍 Reconexión automática](#-reconexión-automática)
- [8️⃣ Disadvantages ❌](#8️⃣-disadvantages-)
  - [❌ Comunicación en una sola dirección](#-comunicación-en-una-sola-dirección)
  - [❌ No es ideal para comunicación bidireccional](#-no-es-ideal-para-comunicación-bidireccional)
  - [❌ Limitaciones del navegador/protocolo](#-limitaciones-del-navegadorprotocolo)
- [9️⃣ SSE vs Polling 🔄](#9️⃣-sse-vs-polling-)
  - [Polling](#polling)
  - [SSE](#sse)
- [🔟 SSE vs Long Polling 🔄](#-sse-vs-long-polling-)
  - [Long Polling](#long-polling)
  - [SSE](#sse-1)
- [1️⃣1️⃣ SSE vs WebSocket 🔌](#1️⃣1️⃣-sse-vs-websocket-)
  - [SSE](#sse-2)
  - [WebSocket](#websocket)
- [1️⃣2️⃣ Use Cases 📌](#1️⃣2️⃣-use-cases-)
  - [📰 Live News](#-live-news)
  - [📈 Stock Prices](#-stock-prices)
  - [🔔 Notifications](#-notifications)
  - [⏳ Progress Updates](#-progress-updates)
  - [📊 Monitoring](#-monitoring)
  - [📈 Dashboards](#-dashboards)
- [🏗️ Arquitectura](#️-arquitectura)
- [🧠 Conceptos principales](#-conceptos-principales)

# 1️⃣ What are Server-Sent Events? 📡

## ¿Qué son Server-Sent Events?

**Server-Sent Events (SSE)** es una tecnología que permite que un servidor envíe información al cliente mediante una conexión HTTP persistente.

A diferencia de Polling:

* ❌ El cliente no necesita preguntar constantemente.
* ✅ El servidor puede enviar eventos automáticamente cuando ocurren.

---

Flujo principal:

```text id="5yn8h3"
Server

   │

   │ Event

   ▼

Client
```

---

SSE está diseñado principalmente para comunicación:

```text id="3m8p9w"
Server ─────────► Client
```

Es decir:

* Servidor envía.
* Cliente recibe.

---

# 2️⃣ Server → Client Communication 🖥️

La característica principal de SSE es la comunicación en una sola dirección.

```text id="x7j2qf"
Server ─────────► Client
```

El servidor puede enviar eventos cuando tiene nueva información.

---

Ejemplo:

Un servidor detecta una nueva noticia:

```text id="v4q9nt"
New article published

        ↓

Server sends event

        ↓

Client updates UI
```

---

El cliente no necesita realizar una nueva petición.

---

# 3️⃣ Persistent HTTP Connection 🔗

SSE utiliza una conexión HTTP que permanece abierta.

Flujo:

```text id="u9j6se"
Client connects

        ↓

HTTP connection opened

        ↓

Server sends events

        ↓

Connection remains open
```

---

A diferencia del HTTP tradicional:

```text id="h8z5sq"
Request

 ↓

Response

 ↓

Connection ends
```

SSE mantiene la conexión activa.

---

# 4️⃣ Event Stream 🌊

SSE utiliza un flujo continuo de eventos llamado:

```text
Event Stream
```

El servidor envía eventos conforme ocurren.

Ejemplo:

```text id="k8q2ld"
Server

Event 1
   |
   ▼
Client


Event 2
   |
   ▼
Client


Event 3
   |
   ▼
Client
```

---

Cada evento contiene información que el cliente puede procesar.

Ejemplo:

```text id="m4p8zr"
event: message

data: Hello User
```

---

# 5️⃣ EventSource API 🌐

Los navegadores implementan SSE mediante la API:

```javascript
EventSource
```

Permite crear una conexión con un servidor SSE.

Ejemplo básico:

```javascript
const source = new EventSource(
  "/events"
);

source.onmessage = (event) => {
  console.log(event.data);
};
```

---

Funcionamiento:

```text id="6h5kq9"
Client

EventSource

      ↓

Server

Event Stream
```

---

Cuando el servidor envía un evento:

```javascript
onmessage()
```

se ejecuta automáticamente.

---

# 6️⃣ Basic Example 💻

Servidor enviando eventos:

```text id="n7r2dk"
Server:

Event:
"New notification"
```

---

Cliente recibe:

```javascript
const events = new EventSource('/notifications');

events.onmessage = (event) => {

  console.log(event.data);

};
```

---

Resultado:

```text id="v3x8rp"
Server

"New notification"

        ↓

Client

Updates interface
```

---

# 7️⃣ Advantages ✅

## 👍 Comunicación automática del servidor

El cliente no necesita preguntar constantemente.

```text id="3r7n8m"
Server

Event

   ↓

Client
```

---

## 👍 Menos requests innecesarios

Comparado con Polling:

Polling:

```text id="6xk5rm"
GET
GET
GET
GET
```

SSE:

```text id="b7k3ns"
Connection

Event

Event

Event
```

---

## 👍 Usa HTTP

No requiere un protocolo completamente diferente.

Utiliza conexiones HTTP estándar.

---

## 👍 Reconexión automática

Los navegadores pueden intentar reconectar si la conexión se pierde.

---

# 8️⃣ Disadvantages ❌

## ❌ Comunicación en una sola dirección

SSE solamente permite:

```text id="4h8m1z"
Server ─────────► Client
```

El cliente no puede enviar eventos por la misma conexión.

---

## ❌ No es ideal para comunicación bidireccional

Si necesitamos:

```text id="2j6p8x"
Client ◄────────► Server
```

WebSocket es una mejor opción.

---

## ❌ Limitaciones del navegador/protocolo

SSE depende de HTTP y está pensado principalmente para envío de eventos.

---

# 9️⃣ SSE vs Polling 🔄

| Feature                        | Polling          | SSE             |
| ------------------------------ | ---------------- | --------------- |
| Comunicación                   | Request/Response | Server → Client |
| Conexión                       | Temporal         | Persistente     |
| Cliente pregunta               | ✅ Sí             | ❌ No            |
| Servidor envía automáticamente | ❌ No             | ✅ Sí            |
| Real-time                      | ⚠️ Limitado      | ✅ Mejor         |

---

## Polling

```text id="9j4k7m"
Client

GET

↓

Server

Response

↓

Wait

↓

GET again
```

---

## SSE

```text id="a6q2xm"
Client

HTTP Connection

        ↑

        |

Server sends events
```

---

# 🔟 SSE vs Long Polling 🔄

| Feature           | Long Polling       | SSE                  |
| ----------------- | ------------------ | -------------------- |
| Protocolo         | HTTP               | HTTP                 |
| Conexión          | Se crea nuevamente | Persistente          |
| Servidor espera   | ✅ Sí               | ❌ No necesita        |
| Eventos continuos | ⚠️ Limitado        | ✅ Sí                 |
| Dirección         | Server responde    | Server envía eventos |

---

## Long Polling

```text id="4p9s2q"
Client

Request

   ↓

Server waits

   ↓

Response

   ↓

Reconnect
```

---

## SSE

```text id="r5k8tx"
Client

HTTP Connection

        ↑

        |

Server

Event

Event

Event
```

---

# 1️⃣1️⃣ SSE vs WebSocket 🔌

| Feature                        | SSE             | WebSocket     |
| ------------------------------ | --------------- | ------------- |
| Comunicación                   | Server → Client | Bidirectional |
| Conexión                       | Persistente     | Persistente   |
| Protocolo                      | HTTP            | WebSocket     |
| Cliente puede enviar mensajes  | ❌ No            | ✅ Sí          |
| Servidor puede enviar mensajes | ✅ Sí            | ✅ Sí          |
| Full-Duplex                    | ❌ No            | ✅ Sí          |

---

## SSE

```text id="x5q9mv"
Server ─────────► Client
```

El servidor envía eventos al cliente.

---

## WebSocket

```text id="k2m8ps"
Server ◄────────► Client
```

Ambos lados pueden comunicarse.

---

# 1️⃣2️⃣ Use Cases 📌

SSE es útil cuando necesitamos actualizaciones del servidor hacia el cliente.

---

## 📰 Live News

Noticias en vivo.

Ejemplo:

```text id="w7p2cn"
New article published

        ↓

Client receives update
```

---

## 📈 Stock Prices

Actualización de precios financieros.

```text id="m3q8zx"
Stock price changed

        ↓

Update dashboard
```

---

## 🔔 Notifications

Ejemplo:

* Alertas.
* Mensajes del sistema.
* Eventos.

---

## ⏳ Progress Updates

Ejemplo:

Un proceso largo:

```text id="z6k1hy"
Upload 20%

Upload 50%

Upload 100%
```

---

## 📊 Monitoring

Ejemplo:

* Métricas.
* Logs.
* Estado de servicios.

---

## 📈 Dashboards

Información actualizada constantemente.

Ejemplo:

```text id="j4v9qm"
Server metrics

        ↓

Dashboard update
```

---

# 🏗️ Arquitectura

```text id="z5q8nm"
        Client

           │

           │ HTTP connection

           ▼

        Server

           │

           │ Event

           ▼

        Client

           │

           │ Event

           ▼

        Client
```

---

# 🧠 Conceptos principales

| Concepto                      | Significado                                            |
| ----------------------------- | ------------------------------------------------------ |
| 📡 SSE                        | Tecnología para enviar eventos del servidor al cliente |
| 🔗 Persistent HTTP Connection | Conexión HTTP que permanece abierta                    |
| 🌊 Event Stream               | Flujo continuo de eventos                              |
| 🌐 EventSource                | API del navegador para consumir SSE                    |
| 📩 Event                      | Información enviada por el servidor                    |

---