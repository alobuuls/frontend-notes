# 🔌 06 — When to Use WebSockets?

> **¿Cuándo realmente necesito WebSockets?**

WebSocket no siempre es la mejor solución. Antes de utilizarlo debemos analizar si la aplicación realmente necesita:

* ⚡ Datos en tiempo real.
* 🔄 Comunicación bidireccional.
* 🚀 Baja latencia.
* 🔗 Una conexión persistente.

El objetivo es saber **cuándo WebSocket aporta valor** y cuándo una solución más simple como HTTP, SSE o REST es suficiente.

---

## 📚 Índice

- [🔌 06 — When to Use WebSockets?](#-06--when-to-use-websockets)
  - [📚 Índice](#-índice)
- [1️⃣ Real-Time Applications ⚡](#1️⃣-real-time-applications-)
- [2️⃣ Bidirectional Communication 🔄](#2️⃣-bidirectional-communication-)
- [3️⃣ Frequent Updates ⏱️](#3️⃣-frequent-updates-️)
- [4️⃣ Low-Latency Communication 🚀](#4️⃣-low-latency-communication-)
- [5️⃣ Persistent Connections 🔗](#5️⃣-persistent-connections-)
- [6️⃣ WebSocket Use Cases 📌](#6️⃣-websocket-use-cases-)
  - [💬 Chat Applications](#-chat-applications)
  - [🎮 Multiplayer Games](#-multiplayer-games)
  - [📊 Real-Time Dashboards](#-real-time-dashboards)
  - [🔔 Live Notifications](#-live-notifications)
  - [📍 Live Location](#-live-location)
  - [💹 Financial Data](#-financial-data)
  - [🤝 Collaborative Applications](#-collaborative-applications)
- [7️⃣ When NOT to Use WebSockets ❌](#7️⃣-when-not-to-use-websockets-)
  - [🗂️ CRUD Application](#️-crud-application)
  - [📰 Blog](#-blog)
  - [🌐 Static Website](#-static-website)
  - [🔌 Simple REST API](#-simple-rest-api)
  - [👤 User Registration](#-user-registration)
  - [🔐 Login](#-login)
  - [📁 File Upload](#-file-upload)
  - [📝 Basic Forms](#-basic-forms)
- [8️⃣ WebSocket vs Polling 🔄](#8️⃣-websocket-vs-polling-)
  - [Polling](#polling)
  - [WebSocket](#websocket)
- [9️⃣ WebSocket vs Long Polling 🔄](#9️⃣-websocket-vs-long-polling-)
  - [Long Polling](#long-polling)
  - [WebSocket](#websocket-1)
- [🔟 WebSocket vs SSE 📡](#-websocket-vs-sse-)
  - [SSE](#sse)
  - [WebSocket](#websocket-2)
- [1️⃣1️⃣ Decision Guide 🧠](#1️⃣1️⃣-decision-guide-)
  - [Regla rápida:](#regla-rápida)
    - [❌ No necesitas tiempo real](#-no-necesitas-tiempo-real)
    - [⚡ Necesitas actualizaciones del servidor](#-necesitas-actualizaciones-del-servidor)
    - [🔄 Necesitas comunicación en ambos sentidos](#-necesitas-comunicación-en-ambos-sentidos)
- [1️⃣2️⃣ Common Mistakes ⚠️](#1️⃣2️⃣-common-mistakes-️)
  - [❌ Usar WebSocket para todo](#-usar-websocket-para-todo)
  - [❌ Ignorar la complejidad](#-ignorar-la-complejidad)
  - [❌ Elegir WebSocket cuando HTTP es suficiente](#-elegir-websocket-cuando-http-es-suficiente)

# 1️⃣ Real-Time Applications ⚡

WebSocket es ideal para aplicaciones donde la información debe actualizarse inmediatamente.

Ejemplo:

```text
Evento ocurre

      ↓

Servidor envía información

      ↓

Cliente actualiza automáticamente
```

---

Aplicaciones comunes:

* 💬 Chats.
* 🎮 Juegos online.
* 📊 Dashboards en vivo.
* 🔔 Notificaciones.
* 📍 Seguimiento de ubicación.

---

# 2️⃣ Bidirectional Communication 🔄

Una de las principales razones para utilizar WebSocket es cuando necesitamos comunicación en ambos sentidos.

```text
Client ◄────────► Server
```

Tanto cliente como servidor pueden enviar información.

---

Ejemplo:

Aplicación de chat:

```text
User A

   │

   ▼

Server

   │

   ▼

User B
```

El servidor puede enviar mensajes inmediatamente y los clientes también pueden responder.

---

Si solamente necesitamos:

```text
Server ─────────► Client
```

otras tecnologías como SSE pueden ser suficientes.

---

# 3️⃣ Frequent Updates ⏱️

WebSocket es útil cuando los datos cambian constantemente.

Ejemplos:

* 📈 Precios de mercado.
* 🎮 Estado de jugadores.
* 📊 Métricas en tiempo real.
* 📍 Ubicación actualizada.

---

Cuando existe una gran frecuencia de cambios:

```text
Update

↓

Update

↓

Update

↓

Update
```

mantener una conexión abierta es más eficiente que hacer muchas peticiones HTTP.

---

# 4️⃣ Low-Latency Communication 🚀

WebSocket permite comunicación con baja latencia porque evita crear nuevas peticiones constantemente.

HTTP tradicional:

```text
Request

↓

Response

↓

Nueva Request
```

---

WebSocket:

```text
Connection

↓

Message

↓

Message

↓

Message
```

---

Los mensajes pueden viajar inmediatamente cuando ocurre un evento.

---

# 5️⃣ Persistent Connections 🔗

WebSocket utiliza una conexión persistente.

Esto significa que una vez establecida:

```text
Client ◄────────► Server
```

permanece abierta hasta que alguno de los lados la cierre.

---

Ventajas:

* Menos creación de conexiones.
* Comunicación continua.
* Respuestas rápidas.

---

# 6️⃣ WebSocket Use Cases 📌

## 💬 Chat Applications

Ejemplo:

* Mensajería instantánea.
* Chats en vivo.

Necesitan:

```text
User sends message

        ↓

Server broadcasts

        ↓

Users receive instantly
```

---

## 🎮 Multiplayer Games

Los juegos online necesitan enviar acciones constantemente:

* Movimiento.
* Estado del jugador.
* Eventos del juego.

---

## 📊 Real-Time Dashboards

Ejemplos:

* Métricas de servidores.
* Datos de negocio.
* Sistemas de monitoreo.

---

## 🔔 Live Notifications

Ejemplos:

* Nuevos mensajes.
* Alertas.
* Eventos importantes.

---

## 📍 Live Location

Ejemplos:

* Seguimiento de vehículos.
* Mapas en vivo.
* Delivery tracking.

---

## 💹 Financial Data

Ejemplos:

* Precios de acciones.
* Mercados financieros.
* Datos en tiempo real.

---

## 🤝 Collaborative Applications

Aplicaciones donde varios usuarios trabajan al mismo tiempo.

Ejemplos:

* Editores colaborativos.
* Herramientas compartidas.

---

# 7️⃣ When NOT to Use WebSockets ❌

No todas las aplicaciones necesitan WebSocket.

Si la aplicación solamente realiza operaciones tradicionales:

```text
Create
Read
Update
Delete
```

HTTP/REST normalmente es suficiente.

---

Ejemplos:

## 🗂️ CRUD Application

Aplicaciones donde los usuarios crean y modifican datos ocasionalmente.

---

## 📰 Blog

Un blog normalmente solo necesita:

* Obtener artículos.
* Mostrar contenido.

---

## 🌐 Static Website

Contenido que no cambia constantemente.

---

## 🔌 Simple REST API

APIs tradicionales:

```text
GET
POST
PUT
DELETE
```

---

## 👤 User Registration

Ejemplo:

* Crear cuenta.
* Actualizar perfil.

---

## 🔐 Login

El usuario envía credenciales y recibe una respuesta.

---

## 📁 File Upload

Subir archivos normalmente no requiere comunicación continua.

---

## 📝 Basic Forms

Formularios simples:

```text
Submit

↓

Response
```

---

# 8️⃣ WebSocket vs Polling 🔄

| Feature                         | Polling          | WebSocket     |
| ------------------------------- | ---------------- | ------------- |
| Comunicación                    | Request/Response | Bidirectional |
| Conexión                        | Temporal         | Persistente   |
| Cliente pregunta constantemente | ✅ Sí             | ❌ No          |
| Tiempo real                     | ⚠️ Limitado      | ✅ Sí          |
| Latencia                        | Mayor            | Menor         |

---

## Polling

```text
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

## WebSocket

```text
Client ◄────────► Server

Messages flow continuously
```

---

# 9️⃣ WebSocket vs Long Polling 🔄

| Feature                    | Long Polling  | WebSocket   |
| -------------------------- | ------------- | ----------- |
| Protocolo                  | HTTP          | WebSocket   |
| Conexión                   | Temporal      | Persistente |
| Request/Response           | ✅ Sí          | ❌ No        |
| Comunicación bidireccional | ❌ No          | ✅ Sí        |
| Tiempo real                | ⚠️ Aproximado | ✅ Sí        |

---

## Long Polling

```text
Request

↓

Server waits

↓

Response

↓

New Request
```

---

## WebSocket

```text
Connection

↓

Messages

↓

Connection remains open
```

---

# 🔟 WebSocket vs SSE 📡

| Feature                    | SSE                  | WebSocket             |
| -------------------------- | -------------------- | --------------------- |
| Dirección                  | Server → Client      | Client ↔ Server       |
| Conexión                   | Persistente          | Persistente           |
| Comunicación bidireccional | ❌ No                 | ✅ Sí                  |
| Full-Duplex                | ❌ No                 | ✅ Sí                  |
| Uso principal              | Eventos del servidor | Comunicación completa |

---

## SSE

```text
Server ─────────► Client
```

---

## WebSocket

```text
Server ◄────────► Client
```

---

# 1️⃣1️⃣ Decision Guide 🧠

Para elegir tecnología:

```text
                 Do you need
              real-time data?

                       │

              ┌────────┴────────┐

              │                 │

             NO                YES

              │                 │

          HTTP/REST             │

                                ▼

                       Is communication

                       bidirectional?

                         │          │

                        NO         YES

                         │          │

                         ▼          ▼

                        SSE      WebSocket
```

---

## Regla rápida:

### ❌ No necesitas tiempo real

Usa:

```text
HTTP / REST
```

---

### ⚡ Necesitas actualizaciones del servidor

Usa:

```text
SSE
```

---

### 🔄 Necesitas comunicación en ambos sentidos

Usa:

```text
WebSocket
```

---

# 1️⃣2️⃣ Common Mistakes ⚠️

## ❌ Usar WebSocket para todo

No todas las aplicaciones necesitan una conexión persistente.

---

## ❌ Ignorar la complejidad

WebSocket requiere manejar:

* Conexiones.
* Estados.
* Errores.
* Desconexiones.

---

## ❌ Elegir WebSocket cuando HTTP es suficiente

Si una aplicación solamente necesita:

```text
Request

↓

Response
```

HTTP es más simple.

---

