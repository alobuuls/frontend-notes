# 🔄 04 — Long Polling

> **¿Podemos evitar hacer requests constantemente?**

Long Polling es una evolución de Polling que intenta mejorar el problema de realizar peticiones constantemente.

La idea principal es:

* Mantener una petición HTTP abierta durante más tiempo.
* Esperar hasta que exista nueva información.
* Responder únicamente cuando haya datos disponibles.

---

# 📑 Índice — 🔄 04 Long Polling

- [🔄 04 — Long Polling](#-04--long-polling)
- [📑 Índice — 🔄 04 Long Polling](#-índice---04-long-polling)
- [1️⃣ What is Long Polling? 🔄](#1️⃣-what-is-long-polling-)
  - [¿Qué es Long Polling?](#qué-es-long-polling)
  - [Polling normal](#polling-normal)
  - [Long Polling](#long-polling)
- [2️⃣ How Long Polling Works ⚙️](#2️⃣-how-long-polling-works-️)
    - [1. Cliente realiza una petición](#1-cliente-realiza-una-petición)
    - [2. Servidor mantiene la petición abierta](#2-servidor-mantiene-la-petición-abierta)
    - [3. Aparece nueva información](#3-aparece-nueva-información)
    - [4. Servidor responde](#4-servidor-responde)
    - [5. Cliente realiza una nueva petición](#5-cliente-realiza-una-nueva-petición)
- [3️⃣ HTTP Connection Lifecycle 🌐](#3️⃣-http-connection-lifecycle-)
- [4️⃣ Server Holds the Request ⏳](#4️⃣-server-holds-the-request-)
- [5️⃣ Response When Data Is Available 📩](#5️⃣-response-when-data-is-available-)
- [6️⃣ Client Reconnects 🔁](#6️⃣-client-reconnects-)
- [7️⃣ Advantages ✅](#7️⃣-advantages-)
  - [👍 Reduce requests innecesarios](#-reduce-requests-innecesarios)
  - [👍 Menor latencia](#-menor-latencia)
  - [👍 Compatible con HTTP](#-compatible-con-http)
- [8️⃣ Disadvantages ❌](#8️⃣-disadvantages-)
  - [❌ Sigue usando Request/Response](#-sigue-usando-requestresponse)
  - [❌ Mantiene conexiones abiertas](#-mantiene-conexiones-abiertas)
  - [❌ Más complejidad](#-más-complejidad)
- [9️⃣ Long Polling vs Polling 🔄](#9️⃣-long-polling-vs-polling-)
  - [Polling](#polling)
  - [Long Polling](#long-polling-1)
- [🔟 Long Polling vs WebSocket 🔌](#-long-polling-vs-websocket-)
  - [Long Polling](#long-polling-2)
  - [WebSocket](#websocket)
- [🧠 Conceptos principales](#-conceptos-principales)

# 1️⃣ What is Long Polling? 🔄

## ¿Qué es Long Polling?

**Long Polling** es una técnica donde el cliente realiza una petición HTTP al servidor, pero en lugar de recibir una respuesta inmediatamente, el servidor mantiene la petición abierta hasta que existe nueva información.

Flujo básico:

```text id="p8rxkq"
Client:

GET /messages

        ↓

Server:

Esperar hasta que exista información

        ↓

Response
```

---

A diferencia del Polling tradicional:

## Polling normal

```text id="7wx1jd"
Request

↓

Response

↓

Wait

↓

Request again
```

---

## Long Polling

```text id="m6f0q3"
Request

↓

Server waits

↓

Data available

↓

Response
```

---

# 2️⃣ How Long Polling Works ⚙️

Long Polling funciona mediante estos pasos:

### 1. Cliente realiza una petición

```text id="j3xqdd"
Client

GET /messages

        ↓

Server
```

---

### 2. Servidor mantiene la petición abierta

El servidor no responde inmediatamente.

```text id="6xj0m4"
Client

GET /messages

        ↓

Server

waiting...
```

---

### 3. Aparece nueva información

Ejemplo:

```text id="s5f2gv"
New message arrives
```

---

### 4. Servidor responde

```text id="9pv9db"
Server

Response

        ↓

Client
```

---

### 5. Cliente realiza una nueva petición

Después de recibir la respuesta, vuelve a conectarse.

```text id="v5qj9p"
Client

GET /messages

        ↓

Server
```

---

# 3️⃣ HTTP Connection Lifecycle 🌐

Aunque Long Polling mejora Polling, sigue utilizando el ciclo tradicional de HTTP.

Flujo:

```text id="g2z3cc"
Request

   ↓

Server keeps connection open

   ↓

Response

   ↓

Connection ends

   ↓

New Request
```

---

La conexión no permanece abierta indefinidamente.

Cada respuesta termina la petición HTTP actual.

---

# 4️⃣ Server Holds the Request ⏳

Una característica importante de Long Polling es que el servidor mantiene la solicitud esperando.

Ejemplo:

```text id="8p3m1y"
Client:

GET /messages


Server:

(waiting...)
```

El servidor mantiene esa conexión hasta que:

* Existe nueva información.
* O ocurre un timeout.

---

Durante este tiempo:

```text id="w3h5oa"
Client ─────────► Server

        waiting...
```

---

# 5️⃣ Response When Data Is Available 📩

Cuando llega nueva información:

```text id="z6h1nd"
New message

      ↓

Server sends response

      ↓

Client receives data
```

Ejemplo:

```text id="9xm7b4"
Client:

GET /messages


Server:

[
 "Hello"
]
```

---

El cliente recibe la información sin tener que preguntar constantemente.

---

# 6️⃣ Client Reconnects 🔁

Después de recibir una respuesta, el cliente vuelve a crear otra petición.

Flujo:

```text id="i2j9dz"
Request

   ↓

Wait

   ↓

Response

   ↓

New Request

   ↓

Wait again
```

---

El ciclo continúa mientras el cliente necesite actualizaciones.

---

# 7️⃣ Advantages ✅

## 👍 Reduce requests innecesarios

Comparado con Polling:

```text id="z8m2ke"
Polling:

GET
GET
GET
GET
```

Long Polling:

```text id="0okj2j"
GET

(wait)

Response

GET

(wait)

Response
```

---

## 👍 Menor latencia

Cuando existe nueva información, el servidor responde inmediatamente.

No es necesario esperar un intervalo fijo.

---

## 👍 Compatible con HTTP

No necesita un protocolo diferente.

Utiliza:

```text id="3p2p9q"
HTTP Request
HTTP Response
```

---

# 8️⃣ Disadvantages ❌

## ❌ Sigue usando Request/Response

Aunque mejora el polling, sigue dependiendo de HTTP.

El cliente debe iniciar cada nueva conexión.

---

## ❌ Mantiene conexiones abiertas

El servidor debe mantener muchas solicitudes esperando.

Ejemplo:

```text id="q9w8fj"
10000 clients

        ↓

10000 pending requests
```

Esto puede consumir recursos.

---

## ❌ Más complejidad

El sistema debe manejar:

* Timeouts.
* Reconexiones.
* Errores de conexión.

---

# 9️⃣ Long Polling vs Polling 🔄

| Feature                         | Polling          | Long Polling      |
| ------------------------------- | ---------------- | ----------------- |
| Comunicación                    | Request/Response | Request/Response  |
| Cliente pregunta constantemente | ✅ Sí             | ❌ Menos frecuente |
| Servidor espera                 | ❌ No             | ✅ Sí              |
| Requests innecesarios           | Muchos           | Menos             |
| Tiempo real                     | ❌ No real        | ⚠️ Más cercano    |

---

## Polling

```text id="n3x8bm"
Client ──► Request

Client ◄── Response


wait


Client ──► Request

Client ◄── Response
```

El servidor responde inmediatamente aunque no exista información.

---

## Long Polling

```text id="1e8q5d"
Client ──► Request

              │

              │ wait

              │

              │ data available

              ▼

Client ◄── Response
```

El servidor espera antes de responder.

---

# 🔟 Long Polling vs WebSocket 🔌

| Feature                            | Long Polling     | WebSocket     |
| ---------------------------------- | ---------------- | ------------- |
| Protocolo                          | HTTP             | WebSocket     |
| Comunicación                       | Request/Response | Message-based |
| Conexión                           | Temporal         | Persistente   |
| Cliente inicia                     | ✅ Sí             | ✅ Sí          |
| Servidor puede enviar directamente | ❌ No             | ✅ Sí          |
| Bidireccional real                 | ❌ No             | ✅ Sí          |
| Tiempo real                        | ⚠️ Aproximado    | ✅ Sí          |

---

## Long Polling

```text id="d4j2ba"
Client

Request

   ↓

Server waits

   ↓

Response

   ↓

Client requests again
```

---

## WebSocket

```text id="r1w6gp"
Client ◄────────► Server

Connection remains open

Messages flow continuously
```

---

# 🧠 Conceptos principales

| Concepto               | Significado                                                    |
| ---------------------- | -------------------------------------------------------------- |
| 🔄 Long Polling        | Técnica HTTP que mantiene una petición abierta esperando datos |
| ⏳ Server Holds Request | El servidor espera antes de responder                          |
| 📩 Response            | Respuesta enviada cuando hay información                       |
| 🔁 Reconnect           | Cliente crea una nueva petición después de recibir respuesta   |
| 🌐 HTTP Lifecycle      | Request → Response → Connection ends                           |
| 🔌 WebSocket           | Comunicación persistente basada en mensajes                    |

---

