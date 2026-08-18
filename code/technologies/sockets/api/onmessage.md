# 📩 04 — onmessage

> 💡 **¿Cómo recibe datos un cliente WebSocket?**

Cuando un servidor envía información mediante una conexión WebSocket, el navegador ejecuta un evento llamado:

```javascript
onmessage
```

> 💡 Este evento permite recibir y procesar los mensajes enviados desde el servidor.

---

## 📑 Índice 

- [📩 04 — onmessage](#-04--onmessage)
  - [📑 Índice](#-índice)
- [1️⃣ What is onmessage? 📩](#1️⃣-what-is-onmessage-)
  - [¿Qué es onmessage?](#qué-es-onmessage)
    - [📌 Ejemplo](#-ejemplo)
    - [🔄 Flujo](#-flujo)
- [2️⃣ Receiving Messages 📥](#2️⃣-receiving-messages-)
    - [🔄 Flujo](#-flujo-1)
- [3️⃣ Message Event 📦](#3️⃣-message-event-)
    - [📌 Ejemplo](#-ejemplo-1)
    - [🔄 Flujo](#-flujo-2)
- [4️⃣ event.data 📦](#4️⃣-eventdata-)
    - [📤 Servidor envía](#-servidor-envía)
    - [📥 Cliente recibe](#-cliente-recibe)
    - [✅ Resultado](#-resultado)
- [5️⃣ Text Messages 📝](#5️⃣-text-messages-)
    - [📤 Servidor envía](#-servidor-envía-1)
    - [📥 Cliente](#-cliente)
    - [✅ Resultado](#-resultado-1)
- [6️⃣ JSON Messages 🧾](#6️⃣-json-messages-)
    - [📤 Servidor envía](#-servidor-envía-2)
    - [📥 Cliente recibe](#-cliente-recibe-1)
- [7️⃣ Parsing Data 🔄](#7️⃣-parsing-data-)
    - [📌 Ejemplo](#-ejemplo-2)
    - [🔄 Flujo](#-flujo-3)
    - [📤 Antes](#-antes)
    - [📥 Después](#-después)
- [8️⃣ Handling Different Message Types 🏷️](#8️⃣-handling-different-message-types-️)
    - [📌 Ejemplo](#-ejemplo-3)
    - [🔄 Flujo](#-flujo-4)
    - [🏷️ Ejemplos de tipos](#️-ejemplos-de-tipos)
- [🔄 onmessage Flow](#-onmessage-flow)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)
    - [📌 Ejemplo](#-ejemplo-4)

# 1️⃣ What is onmessage? 📩

## ¿Qué es onmessage?

`onmessage` es un evento de WebSocket que se ejecuta cuando el cliente recibe un mensaje.

### 📌 Ejemplo

```javascript
socket.onmessage = (event) => {

  console.log(event.data);

};
```

### 🔄 Flujo

```text
Server

Message

      ↓

Client

onmessage executes
```

---

# 2️⃣ Receiving Messages 📥

El cliente recibe información del servidor utilizando el evento:

```javascript
onmessage
```

### 🔄 Flujo

```text
Server

send message

        ↓

WebSocket Connection

        ↓

Client

onmessage

        ↓

Process Data
```

> 💡 El cliente no necesita preguntar constantemente por nuevos datos.
>
> El servidor puede enviar información cuando esté disponible.

---

# 3️⃣ Message Event 📦

Cuando `onmessage` se ejecuta, recibe un objeto llamado:

```text
Message Event
```

### 📌 Ejemplo

```javascript
socket.onmessage = (event) => {

  console.log(event);

};
```

El objeto contiene información sobre el mensaje recibido.

### 🔄 Flujo

```text
Message Event

        ↓

event.data

        ↓

Message Content
```

---

# 4️⃣ event.data 📦

La propiedad:

```javascript
event.data
```

contiene los datos enviados por el servidor.

### 📤 Servidor envía

```text
Hello Client
```

### 📥 Cliente recibe

```javascript
socket.onmessage = (event) => {

  console.log(event.data);

};
```

### ✅ Resultado

```text
Hello Client
```

> 💡 `event.data` representa el payload recibido.

---

# 5️⃣ Text Messages 📝

WebSocket permite recibir mensajes de texto.

### 📤 Servidor envía

```text
"Hello"
```

### 📥 Cliente

```javascript
socket.onmessage = (event) => {

  console.log(event.data);

};
```

### ✅ Resultado

```text
Hello
```

Los mensajes de texto suelen utilizarse para:

* 💬 Chats.
* 🔔 Notificaciones.
* 📄 Datos simples.

---

# 6️⃣ JSON Messages 🧾

Muchos sistemas envían información utilizando JSON.

### 📤 Servidor envía

```json
{
  "type": "notification",
  "message": "Hello"
}
```

### 📥 Cliente recibe

```javascript
socket.onmessage = (event) => {

  console.log(event.data);

};
```

> 💡 Pero inicialmente el JSON llega como texto.

---

# 7️⃣ Parsing Data 🔄

Para trabajar con JSON, el cliente debe convertir el texto recibido en un objeto JavaScript.

Este proceso se llama:

```text
Deserialization
```

### 📌 Ejemplo

```javascript
socket.onmessage = (event) => {

  const data = JSON.parse(event.data);

};
```

### 🔄 Flujo

```text
JSON String

        ↓

JSON.parse()

        ↓

JavaScript Object
```

### 📤 Antes

```json
{
  "type": "notification",
  "message": "Hello"
}
```

### 📥 Después

```javascript
{
  type: "notification",
  message: "Hello"
}
```

> 💡 **Tip:** `JSON.parse(event.data)` permite trabajar con los datos JSON recibidos.

---

# 8️⃣ Handling Different Message Types 🏷️

Una aplicación puede recibir diferentes tipos de mensajes.

### 📌 Ejemplo

```json
{
  "type": "notification",
  "message": "Hello"
}
```

El cliente puede revisar:

```javascript
socket.onmessage = (event) => {

  const data = JSON.parse(event.data);


  if (data.type === "notification") {

    console.log(data.message);

  }

};
```

### 🔄 Flujo

```text
Receive Message

        ↓

Parse Data

        ↓

Check Type

        ↓

Execute Action
```

### 🏷️ Ejemplos de tipos

```text
notification

chat

update

error
```

---

# 🔄 onmessage Flow

```text
Server

      ↓

Send Message

      ↓

WebSocket Connection

      ↓

Client

      ↓

onmessage

      ↓

event.data

      ↓

Process Data
```

---

# 🧠 Conceptos principales

| Concepto           | Significado                                     |
| ------------------ | ----------------------------------------------- |
| 📩 Message Event   | Evento ejecutado cuando llega un mensaje        |
| 📦 Payload         | Información transportada dentro del mensaje     |
| 📄 Data            | Contenido recibido mediante `event.data`        |
| 🔄 Serialization   | Convertir datos a formato transmisible          |
| 🔄 Deserialization | Convertir datos recibidos a objetos utilizables |

---

# 🎯 Al terminar

`onmessage` permite que un cliente WebSocket reciba información enviada por el servidor.

### 📌 Ejemplo

```javascript
socket.onmessage = (event) => {

  console.log(event.data);

};
```

Cuando el servidor envía JSON:

```json
{
  "type": "notification",
  "message": "Hello"
}
```

El cliente puede convertirlo usando:

```javascript
JSON.parse(event.data)
```

> 🎯 para trabajar con los datos recibidos.
