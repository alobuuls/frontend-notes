# 🔄 03 — Polling

> **¿Cómo puedo obtener información nueva del servidor usando HTTP?**

> 💡 **Idea clave:** Antes de WebSocket, una de las formas más utilizadas para simular comunicación en tiempo real era **Polling**.

Polling permite que un cliente consulte constantemente al servidor para verificar si existe nueva información.

---

# 📚 ÍNDICE — 03. POLLING

- [🔄 03 — Polling](#-03--polling)
- [📚 ÍNDICE — 03. POLLING](#-índice--03-polling)
- [🧠 Conceptos principales](#-conceptos-principales)
- [1️⃣ What is Polling? 🔄](#1️⃣-what-is-polling-)
  - [¿Qué es Polling?](#qué-es-polling)
    - [💬 Ejemplo](#-ejemplo)
- [2️⃣ How Polling Works ⚙️](#2️⃣-how-polling-works-️)
- [3️⃣ Polling Flow 🔁](#3️⃣-polling-flow-)
- [4️⃣ Fixed Intervals ⏱️](#4️⃣-fixed-intervals-️)
    - [📌 Ejemplo](#-ejemplo-1)
- [5️⃣ Example 💬](#5️⃣-example-)
- [6️⃣ Advantages ✅](#6️⃣-advantages-)
  - [👍 Simple de implementar](#-simple-de-implementar)
  - [👍 Compatible](#-compatible)
  - [👍 Fácil de entender](#-fácil-de-entender)
- [7️⃣ Disadvantages ❌](#7️⃣-disadvantages-)
  - [❌ Peticiones innecesarias](#-peticiones-innecesarias)
  - [❌ No es realmente tiempo real](#-no-es-realmente-tiempo-real)
- [8️⃣ Server Load 🖥️](#8️⃣-server-load-️)
    - [📌 Ejemplo](#-ejemplo-2)
- [9️⃣ Network Overhead 🌐](#9️⃣-network-overhead-)
- [🔟 Polling vs Real-Time ⚡](#-polling-vs-real-time-)
    - [🔄 Polling](#-polling)
    - [⚡ Real-Time Communication](#-real-time-communication)
- [1️⃣1️⃣ When Polling Makes Sense ✅](#1️⃣1️⃣-when-polling-makes-sense-)
- [🧠 Conceptos principales](#-conceptos-principales-1)

---

# 🧠 Conceptos principales

- [Polling](#qué-es-polling)
- [Fixed Interval](#️-4-fixed-intervals)
- [Request](#request--response--wait--request-again)
- [Response](#request--response--wait--request-again)
- [Server Load](#️-8-server-load)
- [Network Overhead](#-9-network-overhead)
- [Real-Time Communication](#-10-polling-vs-real-time)

---

# 1️⃣ What is Polling? 🔄

## ¿Qué es Polling?

**Polling** es una técnica donde un cliente realiza peticiones HTTP repetidamente al servidor en intervalos de tiempo determinados para preguntar si existe nueva información.

El cliente básicamente pregunta:

```text
"¿Hay nuevos datos?"
```

Si existen cambios, el servidor responde con la información.

Si no existen cambios, devuelve una respuesta vacía.

### 💬 Ejemplo

```text
Client:

¿Hay nuevos mensajes?

        ↓

Server:

No, todavía no

        ↓

Client:

Esperar y preguntar nuevamente
```

---

# 2️⃣ How Polling Works ⚙️

Polling funciona mediante un ciclo repetitivo:

1. El cliente realiza una petición.
2. El servidor responde.
3. El cliente espera un tiempo.
4. El cliente vuelve a realizar la petición.

```text
Request
   ↓
Response
   ↓
Wait
   ↓
Request again
```

---

# 3️⃣ Polling Flow 🔁

Ejemplo de comunicación:

```text
Client

   │
   │ GET /messages
   ▼

Server

   │
   │ []
   ▼

Client

   │
   │ wait 5 seconds
   ▼

Client

   │
   │ GET /messages
   ▼

Server
```

El proceso continúa:

```text
GET
 ↓
wait
 ↓
GET
 ↓
wait
 ↓
GET
 ↓
...
```

---

# 4️⃣ Fixed Intervals ⏱️

Polling normalmente utiliza intervalos de tiempo definidos.

### 📌 Ejemplo

```text
Cada 5 segundos:

GET /messages
```

```text
0s
 |
 GET

5s
 |
 GET

10s
 |
 GET

15s
 |
 GET
```

| Intervalo | Resultado                                         |
| --------- | ------------------------------------------------- |
| ⏱️ Corto  | Más actualizaciones, más consumo                  |
| ⏱️ Largo  | Menos consumo, pero información menos actualizada |

---

# 5️⃣ Example 💬

Supongamos una aplicación de mensajes.

El cliente quiere saber si hay nuevos mensajes:

```text
Client:

GET /messages


Server:

[]
```

No hay mensajes nuevos.

Después de 5 segundos:

```text
Client:

GET /messages


Server:

[
  "Hello"
]
```

El cliente recibe la nueva información.

---

# 6️⃣ Advantages ✅

## 👍 Simple de implementar

Utiliza HTTP tradicional:

```text
GET
POST
PUT
DELETE
```

No requiere una conexión especial.

## 👍 Compatible

Funciona prácticamente con cualquier servidor HTTP.

## 👍 Fácil de entender

El flujo es sencillo:

```text
Request
   ↓
Response
```

---

# 7️⃣ Disadvantages ❌

## ❌ Peticiones innecesarias

El cliente puede preguntar aunque no exista información nueva.

```text
Client:

¿Hay mensajes?

Server:

No


5 segundos después:


Client:

¿Hay mensajes?

Server:

No
```

La mayoría de peticiones pueden ser inútiles.

## ❌ No es realmente tiempo real

Polling depende del intervalo.

```text
Evento ocurre

↓
Cliente espera

↓
Hasta 5 segundos después recibe información
```

Existe retraso.

---

# 8️⃣ Server Load 🖥️

Polling puede aumentar la carga del servidor.

Cada petición requiere:

* Recibir request.
* Procesar información.
* Crear response.

### 📌 Ejemplo

```text
1000 usuarios

Cada 5 segundos:

GET /messages
```

Esto genera muchas solicitudes constantes.

> ⚠️ **Problema**

```text
Too many requests
        ↓
Server Load
        ↓
More resources consumed
```

---

# 9️⃣ Network Overhead 🌐

Cada petición HTTP tiene información adicional:

* Headers.
* Cookies.
* Metadata.
* Procesamiento de conexión.

Aunque no existan datos nuevos, la red sigue transportando solicitudes.

```text
GET /messages

Response:

[]
```

> 💡 La respuesta está vacía, pero la comunicación ocurrió.

---

# 🔟 Polling vs Real-Time ⚡

Polling intenta simular tiempo real, pero no es comunicación verdaderamente en tiempo real.

### 🔄 Polling

```text
Client:

Pregunta constantemente

        ↓

Server:

Responde cuando recibe una petición
```

El cliente decide cuándo preguntar.

### ⚡ Real-Time Communication

Ejemplo WebSocket:

```text
Event happens

        ↓

Server sends message

        ↓

Client receives immediately
```

El servidor puede enviar información cuando ocurre un evento.

> 🧠 **Por eso:**
> **Polling is not truly real-time.**

Polling solo realiza consultas frecuentes para aproximarse a una experiencia en tiempo real.

---

# 1️⃣1️⃣ When Polling Makes Sense ✅

Aunque tiene limitaciones, Polling puede ser útil cuando:

| Situación                                     | Ejemplo                                                                                                      |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| 📌 Actualizaciones poco frecuentes            | Revisar estado de una tarea. Verificar procesos largos.                                                      |
| 📌 Aplicaciones simples                       | Cuando no se necesita comunicación inmediata.                                                                |
| 📌 Sistemas donde WebSocket sería innecesario | Si la información cambia pocas veces, hacer una conexión persistente puede ser más complejo de lo necesario. |

---

# 🧠 Conceptos principales

| Concepto                | Significado                                   |
| ----------------------- | --------------------------------------------- |
| 🔄 **Polling**          | Cliente consulta periódicamente al servidor   |
| ⏱️ **Fixed Interval**   | Tiempo definido entre solicitudes             |
| 📡 **Request**          | Petición enviada al servidor                  |
| 📩 **Response**         | Respuesta del servidor                        |
| 🖥️ **Server Load**     | Carga generada por múltiples peticiones       |
| 🌐 **Network Overhead** | Datos y procesamiento extra de cada solicitud |
| ⚡ **Real-Time**         | Información recibida inmediatamente           |
