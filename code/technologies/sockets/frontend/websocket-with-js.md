# 🌐 01 — WebSocket with JavaScript

> 💡 **¿Cómo consume una aplicación web una conexión WebSocket usando la API nativa?**

JavaScript permite utilizar WebSockets directamente desde el navegador mediante la **Browser WebSocket API**, creando una conexión entre el cliente y el servidor.

---

## 📚 Índice 

- [🌐 01 — WebSocket with JavaScript](#-01--websocket-with-javascript)
  - [📚 Índice](#-índice)
- [1️⃣ Browser WebSocket API Review 🌐](#1️⃣-browser-websocket-api-review-)
    - [Objeto principal](#objeto-principal)
    - [Ejemplo](#ejemplo)
- [2️⃣ Creating a WebSocket Connection 🔗](#2️⃣-creating-a-websocket-connection-)
    - [Sintaxis](#sintaxis)
    - [Ejemplo](#ejemplo-1)
    - [Flujo](#flujo)
- [3️⃣ Opening a Connection 🟢](#3️⃣-opening-a-connection-)
    - [Ejemplo](#ejemplo-2)
    - [Ejemplo](#ejemplo-3)
- [4️⃣ Sending Messages 📤](#4️⃣-sending-messages-)
    - [Ejemplo](#ejemplo-4)
    - [Flujo](#flujo-1)
- [5️⃣ Receiving Messages 📥](#5️⃣-receiving-messages-)
    - [Ejemplo](#ejemplo-5)
    - [Flujo](#flujo-2)
- [6️⃣ Handling Events ⚡](#6️⃣-handling-events-)
    - [Eventos principales](#eventos-principales)
    - [Ejemplo](#ejemplo-6)
- [7️⃣ Closing Connections 🔒](#7️⃣-closing-connections-)
    - [Ejemplo](#ejemplo-7)
    - [Flujo](#flujo-3)
- [8️⃣ Working with JSON 🧾](#8️⃣-working-with-json-)
    - [Para enviar objetos](#para-enviar-objetos)
    - [Ejemplo](#ejemplo-8)
    - [Para recibir](#para-recibir)
    - [Ejemplo](#ejemplo-9)
    - [Flujo](#flujo-4)
- [9️⃣ Basic Chat Example 💬](#9️⃣-basic-chat-example-)
    - [Ejemplo completo](#ejemplo-completo)
- [🔟 Common Mistakes ⚠️](#-common-mistakes-️)
  - [❌ Enviar antes de abrir conexión](#-enviar-antes-de-abrir-conexión)
  - [❌ No manejar eventos](#-no-manejar-eventos)
  - [❌ No procesar datos correctamente](#-no-procesar-datos-correctamente)
- [🏗️ Simple WebSocket Client](#️-simple-websocket-client)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)
    - [Flujo](#flujo-5)
    - [Ejemplo](#ejemplo-10)


---

# 1️⃣ Browser WebSocket API Review 🌐

La API nativa del navegador proporciona las herramientas necesarias para:

* 🔌 Crear conexiones WebSocket.
* 📤 Enviar mensajes.
* 📥 Recibir mensajes.
* ⚠️ Manejar eventos.
* 🔒 Cerrar conexiones.

### Objeto principal

```javascript
WebSocket
```

### Ejemplo

```javascript
const socket = new WebSocket(
  "ws://localhost:3000"
);
```

Esto crea una instancia de WebSocket.

> 💡 **TIP:** El objeto principal para trabajar con WebSockets en el navegador es `WebSocket`.

---

# 2️⃣ Creating a WebSocket Connection 🔗

Para crear una conexión se utiliza:

```javascript
new WebSocket()
```

### Sintaxis

```javascript
const socket = new WebSocket(url);
```

### Ejemplo

```javascript
const socket = new WebSocket(
  "ws://localhost:3000"
);
```

### Flujo

```text id="m7q3xp"
Create WebSocket
        ↓
Connection Attempt
        ↓
Server
```

---

# 3️⃣ Opening a Connection 🟢

Cuando la conexión se establece correctamente, ocurre el evento:

```javascript
onopen
```

### Ejemplo

```javascript
socket.onopen = () => {

};
```

Se ejecuta cuando el cliente puede comunicarse con el servidor.

### Ejemplo

```javascript
socket.onopen = () => {

  socket.send(
    "Hello Server"
  );

};
```

> 🟢 **TIP:** `onopen` indica que la conexión está establecida y lista para comunicarse.

---

# 4️⃣ Sending Messages 📤

Para enviar información se utiliza:

```javascript
send()
```

### Ejemplo

```javascript
socket.send(
  "Hello Server"
);
```

### Flujo

```text id="q8m4vx"
Client

send()

   ↓

Server
```

---

# 5️⃣ Receiving Messages 📥

Para recibir mensajes se utiliza:

```javascript
onmessage
```

### Ejemplo

```javascript
socket.onmessage = (event) => {

  console.log(event.data);

};
```

El mensaje recibido está disponible en:

```javascript
event.data
```

### Flujo

```text id="p5m2qx"
Server

Message

   ↓

Client

onmessage
```

> 📩 **TIP:** `event.data` contiene el mensaje recibido.

---

# 6️⃣ Handling Events ⚡

WebSocket utiliza eventos para controlar el ciclo de vida de la conexión.

### Eventos principales

| Evento         | Función              |
| -------------- | -------------------- |
| 🟢 `onopen`    | Conexión establecida |
| 📩 `onmessage` | Mensaje recibido     |
| ⚠️ `onerror`   | Error ocurrido       |
| 🔴 `onclose`   | Conexión cerrada     |

### Ejemplo

```javascript
socket.onopen = () => {

};

socket.onmessage = (event) => {

};

socket.onerror = () => {

};

socket.onclose = () => {

};
```

> ⚡ **TIP:** Los eventos permiten reaccionar a diferentes estados de la conexión.

---

# 7️⃣ Closing Connections 🔒

Para cerrar una conexión se utiliza:

```javascript
close()
```

### Ejemplo

```javascript
socket.close();
```

También puede manejarse con:

```javascript
socket.onclose = () => {

  console.log(
    "Disconnected"
  );

};
```

### Flujo

```text id="x7m3qp"
OPEN

   ↓

close()

   ↓

CLOSED
```

---

# 8️⃣ Working with JSON 🧾

Los mensajes pueden enviarse utilizando JSON.

### Para enviar objetos

```javascript
JSON.stringify()
```

### Ejemplo

```javascript
socket.send(
  JSON.stringify({
    type:"message",
    text:"Hello"
  })
);
```

### Para recibir

```javascript
JSON.parse()
```

### Ejemplo

```javascript
socket.onmessage = (event) => {

  const data = JSON.parse(event.data);

};
```

### Flujo

```text id="n6m8qx"
Object
   ↓
JSON.stringify()
   ↓
WebSocket
   ↓
JSON.parse()
   ↓
Object
```

> 🧾 **TIP:** `JSON.stringify()` convierte objetos a JSON y `JSON.parse()` convierte JSON nuevamente en objetos.

---

# 9️⃣ Basic Chat Example 💬

Un chat simple utiliza:

```text id="k4q9mp"
Browser

   |

   |

WebSocket

   |

   |

Server
```

### Ejemplo completo

```javascript
const socket = new WebSocket(
  "ws://localhost:3000"
);


socket.onopen = () => {

  socket.send(
    "Hello Server"
  );

};


socket.onmessage = (event) => {

  console.log(event.data);

};


socket.onclose = () => {

  console.log(
    "Disconnected"
  );

};
```

---

# 🔟 Common Mistakes ⚠️

Errores comunes al trabajar con WebSockets:

## ❌ Enviar antes de abrir conexión

Incorrecto:

```javascript
socket.send("Hello");
```

antes de:

```javascript
onopen
```

## ❌ No manejar eventos

No controlar:

```text id="t6m2qx"
onerror

onclose
```

## ❌ No procesar datos correctamente

Enviar objetos directamente sin convertirlos a JSON.

> ⚠️ **TIP:** Es importante esperar a que la conexión esté abierta y manejar los eventos principales.

---

# 🏗️ Simple WebSocket Client

Proyecto pequeño:

```text id="a7m4qp"
Browser

   |

   |

WebSocket

   |

   |

Server
```

El cliente debe poder:

```text id="b6n9mx"
Create Connection
        ↓
Open Connection
        ↓
Send Messages
        ↓
Receive Messages
        ↓
Close Connection
```

---

# 🧠 Conceptos principales

| Concepto                  | Significado                       |
| ------------------------- | --------------------------------- |
| 🌐 **WebSocket Instance** | Objeto que representa la conexión |
| ⚡ **Events**              | Eventos del ciclo de vida         |
| 📤 `send()`               | Envía mensajes                    |
| 📩 `onmessage`            | Recibe mensajes                   |
| 🔒 `close()`              | Cierra la conexión                |
| 🧾 **JSON**               | Formato para intercambiar datos   |

---

# 🎯 Al terminar

Una aplicación web puede utilizar la API nativa de JavaScript para crear y administrar una conexión WebSocket.

### Flujo

```text id="m8q3vx"
Create WebSocket
        ↓
Open Connection
        ↓
Send Messages
        ↓
Receive Messages
        ↓
Close Connection
```

### Ejemplo

```javascript
const socket = new WebSocket(
  "ws://localhost:3000"
);
```
