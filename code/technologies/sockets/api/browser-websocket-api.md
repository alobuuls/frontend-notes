# 🌐 01 — Browser WebSocket API

> **¿Cómo puede un navegador crear y administrar una conexión WebSocket?**

Los navegadores proporcionan una API nativa para trabajar con WebSockets mediante un objeto llamado:

```text
WebSocket
```

Esta API permite:

* 🔗 Crear conexiones WebSocket.
* 📤 Enviar mensajes.
* 📥 Recibir mensajes.
* 🔒 Cerrar conexiones.
* 👀 Escuchar eventos del ciclo de vida.

---

## 🌐 Índice

- [🌐 01 — Browser WebSocket API](#-01--browser-websocket-api)
  - [🌐 Índice](#-índice)
- [1️⃣ What is the Browser WebSocket API? 🌐](#1️⃣-what-is-the-browser-websocket-api-)
  - [¿Qué es la Browser WebSocket API?](#qué-es-la-browser-websocket-api)
    - [🔄 Flujo](#-flujo)
- [2️⃣ WebSocket Object 🔌](#2️⃣-websocket-object-)
    - [💻 Ejemplo](#-ejemplo)
- [3️⃣ Creating a WebSocket Connection 🔗](#3️⃣-creating-a-websocket-connection-)
    - [💻 Ejemplo](#-ejemplo-1)
    - [🔄 Proceso](#-proceso)
- [4️⃣ WebSocket Events ⚡](#4️⃣-websocket-events-)
  - [🟢 `onopen`](#-onopen)
  - [📩 `onmessage`](#-onmessage)
    - [🔄 Flujo](#-flujo-1)
  - [⚠️ `onerror`](#️-onerror)
  - [🔒 `onclose`](#-onclose)
- [5️⃣ Sending Messages 📤](#5️⃣-sending-messages-)
    - [💻 Ejemplo](#-ejemplo-2)
    - [🔄 Flujo](#-flujo-2)
- [6️⃣ Receiving Messages 📥](#6️⃣-receiving-messages-)
    - [💻 Ejemplo](#-ejemplo-3)
    - [🔄 Flujo](#-flujo-3)
- [7️⃣ Closing Connections 🔒](#7️⃣-closing-connections-)
    - [💻 Ejemplo](#-ejemplo-4)
    - [🔄 Flujo](#-flujo-4)
- [8️⃣ WebSocket Properties 📋](#8️⃣-websocket-properties-)
  - [🔄 `readyState`](#-readystate)
  - [🌐 `url`](#-url)
  - [🔌 `protocol`](#-protocol)
  - [📦 `bufferedAmount`](#-bufferedamount)
- [9️⃣ Browser Support 🌍](#9️⃣-browser-support-)
- [🔟 Basic Example 💻](#-basic-example-)
- [🔄 WebSocket API Flow](#-websocket-api-flow)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)


# 1️⃣ What is the Browser WebSocket API? 🌐

## ¿Qué es la Browser WebSocket API?

La **Browser WebSocket API** es una interfaz incluida en los navegadores que permite crear y administrar conexiones WebSocket directamente desde JavaScript.

Permite que una aplicación web pueda comunicarse con un servidor mediante una conexión persistente.

### 🔄 Flujo

```text id="m8x2vp"
Browser

        ↕

WebSocket Connection

        ↕
        
Server
```

---

# 2️⃣ WebSocket Object 🔌

El navegador utiliza el objeto:

```javascript
WebSocket
```

para representar una conexión WebSocket.

Este objeto permite controlar:

* 🔗 Estado de conexión.
* 📤 Envío de mensajes.
* 📥 Recepción de mensajes.
* 🔒 Cierre de conexión.

### 💻 Ejemplo

```javascript
const socket = new WebSocket(
  "ws://localhost:3000"
);
```

El resultado es una instancia de WebSocket:

```text id="k7p3mx"
WebSocket Instance
```

---

# 3️⃣ Creating a WebSocket Connection 🔗

Para crear una conexión se utiliza el constructor:

```javascript
new WebSocket()
```

### 💻 Ejemplo

```javascript
const socket = new WebSocket(
  "ws://localhost:3000"
);
```

### 🔄 Proceso

```text id="w4m8qs"
Create WebSocket Object

        ↓

Browser starts connection

        ↓

Handshake

        ↓

Connection Open
```

---

# 4️⃣ WebSocket Events ⚡

Los eventos permiten reaccionar a diferentes momentos del ciclo de vida de la conexión.

Los principales eventos son:

| Evento         | Función                                                  |
| -------------- | -------------------------------------------------------- |
| 🟢 `onopen`    | Se ejecuta cuando la conexión se establece correctamente |
| 📩 `onmessage` | Se ejecuta cuando llega un mensaje desde el servidor     |
| ⚠️ `onerror`   | Se ejecuta cuando ocurre un error en la conexión         |
| 🔒 `onclose`   | Se ejecuta cuando la conexión se cierra                  |

---

## 🟢 `onopen`

Se ejecuta cuando la conexión se establece correctamente.

```javascript
socket.onopen = () => {
  console.log("Connected");
};
```

Representa:

```text id="p5x8nm"
CONNECTING

      ↓

OPEN
```

---

## 📩 `onmessage`

Se ejecuta cuando llega un mensaje desde el servidor.

```javascript
socket.onmessage = (event) => {
  console.log(event.data);
};
```

### 🔄 Flujo

```text id="n3k7qx"
Server

Message

   ↓

Browser

onmessage
```

---

## ⚠️ `onerror`

Se ejecuta cuando ocurre un error en la conexión.

```javascript
socket.onerror = (error) => {
  console.log(error);
};
```

Ejemplo:

```text id="v8m2kp"
Connection Error

        ↓

onerror
```

---

## 🔒 `onclose`

Se ejecuta cuando la conexión se cierra.

```javascript
socket.onclose = () => {
  console.log("Disconnected");
};
```

Flujo:

```text id="b6q9mx"
OPEN

 ↓

Close

 ↓

onclose
```

---

# 5️⃣ Sending Messages 📤

Para enviar mensajes se utiliza:

```javascript
send()
```

### 💻 Ejemplo

```javascript
socket.send("Hello");
```

### 🔄 Flujo

```text id="r7m3kx"
Browser

send()

        ↓

WebSocket

        ↓

Server
```

> 💡 Los mensajes pueden enviarse mientras la conexión está abierta.

---

# 6️⃣ Receiving Messages 📥

Para recibir mensajes se utiliza el evento:

```javascript
onmessage
```

### 💻 Ejemplo

```javascript
socket.onmessage = (event) => {
  console.log(event.data);
};
```

### 🔄 Flujo

```text id="t8p4mv"
Server

Message

        ↓

Browser

onmessage

        ↓

event.data
```

---

# 7️⃣ Closing Connections 🔒

Para cerrar una conexión se utiliza:

```javascript
close()
```

### 💻 Ejemplo

```javascript
socket.close();
```

### 🔄 Flujo

```text id="x5m9qp"
OPEN

 ↓

close()

 ↓

CLOSED
```

Cuando se cierra:

```text id="h3n7vz"
onclose event
```

puede ejecutarse.

---

# 8️⃣ WebSocket Properties 📋

El objeto WebSocket contiene propiedades para conocer información de la conexión.

---

## 🔄 `readyState`

Indica el estado actual de la conexión.

```javascript
socket.readyState
```

| Valor | Estado     |
| ----: | ---------- |
|   `0` | CONNECTING |
|   `1` | OPEN       |
|   `2` | CLOSING    |
|   `3` | CLOSED     |

---

## 🌐 `url`

Contiene la URL utilizada para crear la conexión.

```javascript
socket.url
```

Ejemplo:

```text id="q8m4xs"
ws://localhost:3000
```

---

## 🔌 `protocol`

Indica el protocolo utilizado en la conexión.

```javascript
socket.protocol
```

---

## 📦 `bufferedAmount`

Indica la cantidad de datos pendientes de enviar.

```javascript
socket.bufferedAmount
```

---

# 9️⃣ Browser Support 🌍

La WebSocket API está disponible en los navegadores modernos.

Soportada por:

* 🌐 Chrome.
* 🦊 Firefox.
* 🧭 Safari.
* 🌎 Edge.

> 💡 Los navegadores incluyen WebSocket como una API estándar de JavaScript.

---

# 🔟 Basic Example 💻

Ejemplo básico utilizando la Browser WebSocket API:

```javascript
const socket = new WebSocket(
  "ws://localhost:3000"
);


socket.onopen = () => {
  console.log("Connected");
};


socket.onmessage = (event) => {
  console.log(event.data);
};


socket.send("Hello");


socket.close();
```

---

# 🔄 WebSocket API Flow

```text id="m6q2xp"
Create Connection

        ↓

new WebSocket()

        ↓

onopen

        ↓

send()

        ↓

onmessage

        ↓

close()
```

---

# 🧠 Conceptos principales

| Concepto                  | Significado                                 |
| ------------------------- | ------------------------------------------- |
| 🌐 **WebSocket Object**   | Objeto del navegador para manejar WebSocket |
| 🔌 **WebSocket Instance** | Instancia creada con `new WebSocket()`      |
| ⚡ **Events**              | Eventos del ciclo de vida                   |
| 🛠️ **Methods**           | Funciones para interactuar con la conexión  |
| 📋 **Properties**         | Información del estado de la conexión       |
| 🔄 **Connection State**   | Estado actual del WebSocket                 |

---

# 🎯 Al terminar

La **Browser WebSocket API** permite crear y administrar conexiones WebSocket desde JavaScript.

Se utiliza:

```javascript
new WebSocket()
```

para crear la conexión.

Los eventos controlan el ciclo de vida:

```javascript
onopen

onmessage

onerror

onclose
```

Los métodos permiten comunicarse:

```javascript
send()

close()
```

Y las propiedades permiten consultar información:

```javascript
readyState

url

protocol

bufferedAmount
```

> 🎯 Con esta API un navegador puede establecer una conexión WebSocket persistente y comunicarse con un servidor en tiempo real.
