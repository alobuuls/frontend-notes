# 📄 WebSocket API 🔌📚

> 💡 **¿Cuáles son los métodos y propiedades principales de WebSocket?**
>
> La **WebSocket API** del navegador permite crear conexiones persistentes entre cliente y servidor, enviar datos, recibir mensajes y manejar eventos de conexión.

---

## 📚 Índice

- [📄 WebSocket API 🔌📚](#-websocket-api-)
  - [📚 Índice](#-índice)
- [1️⃣ Creating a WebSocket 🔌](#1️⃣-creating-a-websocket-)
- [2️⃣ Constructor 🏗️](#2️⃣-constructor-️)
    - [🔄 Flujo](#-flujo)
- [3️⃣ Properties ⚙️](#3️⃣-properties-️)
  - [🌐 url](#-url)
  - [🔄 readyState](#-readystate)
    - [Valores](#valores)
  - [📦 bufferedAmount](#-bufferedamount)
  - [🔗 protocol](#-protocol)
- [4️⃣ Methods 🛠️](#4️⃣-methods-️)
  - [📤 send()](#-send)
    - [Enviar JSON](#enviar-json)
  - [🔒 close()](#-close)
- [5️⃣ Events 📡](#5️⃣-events-)
  - [🟢 onopen](#-onopen)
  - [📥 onmessage](#-onmessage)
  - [⚠️ onerror](#️-onerror)
  - [🔴 onclose](#-onclose)
- [6️⃣ readyState 🔄](#6️⃣-readystate-)
    - [Estados](#estados)
- [7️⃣ Sending Data 📤](#7️⃣-sending-data-)
    - [Ejemplo](#ejemplo)
- [8️⃣ Receiving Data 📥](#8️⃣-receiving-data-)
    - [Ejemplo](#ejemplo-1)
- [9️⃣ Closing Connection 🔒](#9️⃣-closing-connection-)
    - [🔄 Flujo](#-flujo-1)
- [🔟 Complete Example 💻](#-complete-example-)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)

---

# 1️⃣ Creating a WebSocket 🔌

Para crear una conexión WebSocket se utiliza la API nativa del navegador.

```javascript
const socket = new WebSocket(
  "wss://example.com"
);
```

> 💡 **Tip:** Esta instancia permite comunicarse con el servidor mediante WebSocket.

---

# 2️⃣ Constructor 🏗️

El constructor **WebSocket()** crea una nueva conexión.

```javascript
const socket = new WebSocket(
  "wss://example.com"
);
```

### 🔄 Flujo

```text
Client

   ↓

WebSocket()

   ↓

Server Connection
```

---

# 3️⃣ Properties ⚙️

Las propiedades permiten consultar información de la conexión.

---

## 🌐 url

Indica la URL utilizada para la conexión.

```javascript
socket.url
```

---

## 🔄 readyState

Muestra el estado actual de la conexión.

```javascript
socket.readyState
```

### Valores

| Valor | Estado            |
| :---: | ----------------- |
|  `0`  | 🔄 **CONNECTING** |
|  `1`  | 🟢 **OPEN**       |
|  `2`  | 🔒 **CLOSING**    |
|  `3`  | ❌ **CLOSED**      |

---

## 📦 bufferedAmount

Indica la cantidad de datos pendientes de envío.

```javascript
socket.bufferedAmount
```

> 💡 **Tip:** Representa los datos almacenados temporalmente antes de enviarse.

---

## 🔗 protocol

Muestra el subprotocolo utilizado.

```javascript
socket.protocol
```

---

# 4️⃣ Methods 🛠️

Los métodos permiten realizar acciones sobre la conexión WebSocket.

---

## 📤 send()

Permite enviar datos al servidor.

```javascript
socket.send(
  "Hello"
);
```

### Enviar JSON

```javascript
socket.send(
  JSON.stringify({
    type:"message"
  })
);
```

> 💡 **Tip:** `send()` transmite información mediante la conexión WebSocket.

---

## 🔒 close()

Permite cerrar la conexión.

```javascript
socket.close();
```

También puede recibir código y motivo:

```javascript
socket.close(
  1000,
  "Finished"
);
```

---

# 5️⃣ Events 📡

Los eventos permiten reaccionar a cambios dentro de la conexión.

---

## 🟢 onopen

Se ejecuta cuando la conexión se establece.

```javascript
socket.onopen = () => {

};
```

---

## 📥 onmessage

Se ejecuta cuando se recibe un mensaje.

```javascript
socket.onmessage = event => {

};
```

---

## ⚠️ onerror

Se ejecuta cuando ocurre un error.

```javascript
socket.onerror = error => {

};
```

---

## 🔴 onclose

Se ejecuta cuando la conexión se cierra.

```javascript
socket.onclose = event => {

};
```

---

# 6️⃣ readyState 🔄

`readyState` permite conocer el estado actual de la conexión.

```javascript
socket.readyState
```

### Estados

| Valor | Estado            | Descripción                     |
| :---: | ----------------- | ------------------------------- |
|  `0`  | 🔄 **CONNECTING** | La conexión está siendo creada. |
|  `1`  | 🟢 **OPEN**       | La conexión está abierta.       |
|  `2`  | 🔒 **CLOSING**    | La conexión está cerrándose.    |
|  `3`  | ❌ **CLOSED**      | La conexión está cerrada.       |

---

# 7️⃣ Sending Data 📤

Los datos se envían utilizando:

```javascript
socket.send(
  data
);
```

### Ejemplo

```javascript
socket.send(
  "Hello"
);
```

También pueden enviarse objetos convertidos a JSON:

```javascript
socket.send(
  JSON.stringify({
    type:"message"
  })
);
```

---

# 8️⃣ Receiving Data 📥

Los mensajes recibidos se manejan mediante:

```javascript
socket.onmessage = event => {

};
```

### Ejemplo

```javascript
socket.onmessage = event => {

  console.log(event.data);

};
```

> 💡 **Tip:** `event.data` contiene la información recibida.

---

# 9️⃣ Closing Connection 🔒

La conexión puede cerrarse utilizando:

```javascript
socket.close();
```

También puede especificarse información adicional:

```javascript
socket.close(
  1000,
  "Finished"
);
```

### 🔄 Flujo

```text
Connection

   ↓

close()

   ↓

Closed
```

---

# 🔟 Complete Example 💻

```javascript
const socket =
new WebSocket(
  "wss://server.com"
);


socket.onopen = () => {

  socket.send(
    "Hello"
  );

};


socket.onmessage = event => {

  console.log(
    event.data
  );

};


socket.onclose = () => {

  console.log(
    "Disconnected"
  );

};
```

---

# 🧠 Conceptos principales

| Concepto           | Significado                                   |
| ------------------ | --------------------------------------------- |
| 🔌 **WebSocket()** | Constructor para crear una conexión WebSocket |
| 📤 **send()**      | Envía datos mediante WebSocket                |
| 🔒 **close()**     | Cierra una conexión WebSocket                 |
| 🔄 **readyState**  | Estado actual de la conexión                  |
| 📡 **Events**      | Acciones que ocurren durante la conexión      |

---

# 🎯 Al terminar

> **La WebSocket API permite crear conexiones, enviar y recibir mensajes, consultar estados y manejar eventos mediante métodos y propiedades nativas del navegador.**

```text
WebSocket()

    ↓

send()

    ↓

onmessage

    ↓

close()
```
