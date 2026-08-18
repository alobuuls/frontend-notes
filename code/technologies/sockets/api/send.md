# 📤 07 — send()

> 💡 **¿Cómo manda información el cliente?**

Una vez que la conexión WebSocket está abierta, el cliente puede enviar información al servidor utilizando el método:

```javascript
send()
```

> 💡 Este método permite transmitir mensajes mediante una conexión WebSocket activa.

---

## 📑 Índice 

- [📤 07 — send()](#-07--send)
  - [📑 Índice](#-índice)
- [1️⃣ What is send()? 📤](#1️⃣-what-is-send-)
  - [¿Qué es send()?](#qué-es-send)
    - [📌 Sintaxis](#-sintaxis)
    - [📌 Ejemplo](#-ejemplo)
    - [🔄 Flujo](#-flujo)
- [2️⃣ Sending Text Messages 📝](#2️⃣-sending-text-messages-)
    - [📌 Ejemplo](#-ejemplo-1)
    - [🔄 Flujo](#-flujo-1)
- [3️⃣ Sending JSON 🧾](#3️⃣-sending-json-)
    - [📌 Ejemplo](#-ejemplo-2)
    - [🔄 Flujo](#-flujo-2)
- [4️⃣ Sending Binary Data 📦](#4️⃣-sending-binary-data-)
    - [📌 Ejemplos](#-ejemplos)
    - [🔄 Flujo](#-flujo-3)
- [5️⃣ Checking Connection State 🔄](#5️⃣-checking-connection-state-)
    - [📌 Ejemplo](#-ejemplo-3)
    - [📊 Estados principales](#-estados-principales)
- [6️⃣ Sending Before Open ⚠️](#6️⃣-sending-before-open-️)
    - [❌ Incorrecto](#-incorrecto)
    - [⚠️ Problema](#️-problema)
    - [✅ La forma correcta es esperar:](#-la-forma-correcta-es-esperar)
    - [🔄 Flujo correcto](#-flujo-correcto)
- [7️⃣ Buffered Messages 📦](#7️⃣-buffered-messages-)
    - [📌 Ejemplo](#-ejemplo-4)
    - [🔄 Flujo](#-flujo-4)
- [🔄 send() Flow](#-send-flow)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)
    - [📌 Ejemplo](#-ejemplo-5)

# 1️⃣ What is send()? 📤

## ¿Qué es send()?

`send()` es un método del objeto WebSocket utilizado para enviar datos desde el cliente hacia el servidor.

### 📌 Sintaxis

```javascript
socket.send(data);
```

### 📌 Ejemplo

```javascript
socket.send(
  "Hello Server"
);
```

### 🔄 Flujo

```text
Client

send()

   ↓

WebSocket Connection

   ↓

Server
```

---

# 2️⃣ Sending Text Messages 📝

WebSocket permite enviar mensajes de texto utilizando `send()`.

### 📌 Ejemplo

```javascript
socket.send(
  "Hello Server"
);
```

### 🔄 Flujo

```text
Client

"Hello Server"

        ↓

Server
```

Los mensajes de texto se utilizan comúnmente para:

* 💬 Chat.
* 🔔 Notificaciones.
* 📄 Información simple.

---

# 3️⃣ Sending JSON 🧾

Para enviar objetos JavaScript normalmente se convierten a JSON utilizando:

```javascript
JSON.stringify()
```

### 📌 Ejemplo

```javascript
socket.send(

  JSON.stringify({

    type:"message",

    text:"Hello"

  })

);
```

### 🔄 Flujo

```text
JavaScript Object

        ↓

JSON.stringify()

        ↓

JSON String

        ↓

send()

        ↓

Server
```

> 💡 El servidor recibe el JSON como texto y puede procesarlo.

---

# 4️⃣ Sending Binary Data 📦

WebSocket también permite enviar datos binarios.

### 📌 Ejemplos

* 📷 Imágenes.
* 🎵 Archivos.
* 📄 Datos binarios.

### 🔄 Flujo

```text
Binary Data

      ↓

send()

      ↓

WebSocket

      ↓

Server
```

> 💡 El método `send()` puede enviar diferentes tipos de datos.

---

# 5️⃣ Checking Connection State 🔄

Antes de enviar mensajes es importante comprobar que la conexión está abierta.

Se utiliza:

```javascript
readyState
```

### 📌 Ejemplo

```javascript
if (socket.readyState === WebSocket.OPEN) {

  socket.send(
    "Hello"
  );

}
```

### 📊 Estados principales

| Estado | Significado  |
| -----: | ------------ |
|    `0` | `CONNECTING` |
|    `1` | `OPEN`       |
|    `2` | `CLOSING`    |
|    `3` | `CLOSED`     |

Solo se deben enviar mensajes cuando:

```text
readyState === OPEN
```

> 💡 **Tip:** `readyState` permite comprobar el estado actual de la conexión antes de utilizar `send()`.

---

# 6️⃣ Sending Before Open ⚠️

No se deben enviar mensajes antes de que la conexión esté abierta.

### ❌ Incorrecto

```javascript
const socket = new WebSocket(
  "ws://localhost:8080"
);


socket.send(
  "Hello"
);
```

### ⚠️ Problema

```text
CONNECTING

        ↓

send()

        ↓

Connection not ready
```

### ✅ La forma correcta es esperar:

```javascript
socket.onopen = () => {

  socket.send(
    "Hello"
  );

};
```

### 🔄 Flujo correcto

```text
Create Socket

        ↓

Handshake

        ↓

OPEN

        ↓

send()
```

---

# 7️⃣ Buffered Messages 📦

Cuando se envían datos, WebSocket puede almacenar mensajes temporalmente mientras espera enviarlos.

Esta información se puede consultar con:

```javascript
bufferedAmount
```

### 📌 Ejemplo

```javascript
socket.bufferedAmount
```

Representa:

```text
Pending Data

waiting to be sent
```

### 🔄 Flujo

```text
send()

 ↓

Buffer

 ↓

Network

 ↓

Server
```

> 💡 **Tip:** `bufferedAmount` representa los datos pendientes de envío.

---

# 🔄 send() Flow

```text
Connection Open

        ↓

send()

        ↓

Message Sent

        ↓

Server Receives
```

---

# 🧠 Conceptos principales

| Concepto               | Significado                                         |
| ---------------------- | --------------------------------------------------- |
| 📤 `send()`            | Método para enviar mensajes al servidor             |
| 📝 Text Messages       | Mensajes de texto enviados por WebSocket            |
| 🧾 JSON                | Formato utilizado para enviar objetos estructurados |
| 📦 Binary Data         | Datos enviados en formato binario                   |
| 🔄 `readyState`        | Estado actual de la conexión                        |
| ⚠️ Sending Before Open | Error de enviar antes de abrir la conexión          |
| 📦 Buffered Messages   | Datos pendientes de envío                           |

---

# 🎯 Al terminar

El cliente envía mensajes mediante:

```javascript
socket.send(data);
```

### 📌 Ejemplo

```javascript
socket.send(
  "Hello Server"
);
```

Para enviar JSON:

```javascript
socket.send(

  JSON.stringify({

    type:"message",

    text:"Hello"

  })

);
```

> ⚠️ Siempre se debe enviar después de que la conexión esté abierta:

```javascript
socket.onopen = () => {

  socket.send("Hello");

};
```
