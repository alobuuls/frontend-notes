# 🟢 03 — onopen

> 💡 **¿Cómo sé que mi WebSocket está listo para enviar mensajes?**

Cuando una conexión WebSocket se establece correctamente, el navegador ejecuta un evento llamado:

```javascript
onopen
```

> 💡 Este evento indica que la conexión está abierta y lista para comunicarse.

---

## 📑 Índice

- [🟢 03 — onopen](#-03--onopen)
  - [📑 Índice](#-índice)
- [1️⃣ What is onopen? 🟢](#1️⃣-what-is-onopen-)
  - [¿Qué es onopen?](#qué-es-onopen)
    - [📌 Ejemplo](#-ejemplo)
- [2️⃣ Connection Established Event 🔗](#2️⃣-connection-established-event-)
    - [🔄 Flujo](#-flujo)
- [3️⃣ When onopen Executes ⏱️](#3️⃣-when-onopen-executes-️)
    - [🔄 Flujo](#-flujo-1)
- [4️⃣ Sending Data After Connection 📤](#4️⃣-sending-data-after-connection-)
    - [📌 Ejemplo](#-ejemplo-1)
    - [🔄 Flujo](#-flujo-2)
- [5️⃣ Event Object 📦](#5️⃣-event-object-)
    - [📌 Ejemplo](#-ejemplo-2)
- [6️⃣ Common Uses 🛠️](#6️⃣-common-uses-️)
    - [📦 Initialize Data](#-initialize-data)
    - [📤 Send First Message](#-send-first-message)
    - [🖥️ Update UI](#️-update-ui)
    - [🔄 Change Connection Status](#-change-connection-status)
- [🔄 onopen Flow](#-onopen-flow)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)
    - [🔄 Flujo](#-flujo-3)

# 1️⃣ What is onopen? 🟢

## ¿Qué es onopen?

`onopen` es un evento de WebSocket que se ejecuta cuando la conexión ha sido creada correctamente.

Representa el momento donde el estado cambia de:

```text
CONNECTING
```

a:

```text
OPEN
```

### 📌 Ejemplo

```javascript
socket.onopen = () => {
  console.log(
    "WebSocket connected"
  );
};
```

Cuando este evento ocurre significa:

```text
Connection Ready
```

---

# 2️⃣ Connection Established Event 🔗

`onopen` representa el evento de conexión establecida.

### 🔄 Flujo

```text
Client

Create Socket

        ↓

Handshake

        ↓

Server accepts

        ↓

Connection Open

        ↓

onopen executes
```

> 💡 Después de `onopen`, la conexión puede utilizarse para enviar y recibir mensajes.

---

# 3️⃣ When onopen Executes ⏱️

`onopen` se ejecuta después de que:

1. Se crea la instancia WebSocket.
2. Se realiza el handshake.
3. El servidor acepta la conexión.
4. La conexión queda disponible.

### 🔄 Flujo

```text
new WebSocket()

        ↓

CONNECTING

        ↓

Handshake

        ↓

OPEN

        ↓

onopen()
```

| Momento                | Estado               |
| ---------------------- | -------------------- |
| ⏳ Antes de `onopen`    | Connection not ready |
| 🟢 Después de `onopen` | Connection ready     |

---

# 4️⃣ Sending Data After Connection 📤

Los mensajes deben enviarse cuando la conexión está abierta.

### 📌 Ejemplo

```javascript
socket.onopen = () => {

  socket.send(
    "Hello Server"
  );

};
```

### 🔄 Flujo

```text
Connection Open

        ↓

onopen executes

        ↓

send()

        ↓

Server receives message
```

> ⚠️ Intentar enviar datos antes de que la conexión esté abierta puede provocar problemas.

---

# 5️⃣ Event Object 📦

El evento `onopen` puede recibir un objeto de evento.

### 📌 Ejemplo

```javascript
socket.onopen = (event) => {

  console.log(event);

};
```

El objeto contiene información relacionada con el evento de apertura de conexión.

```text
(event)

↓

Open Event Information
```

> 💡 **Tip:** El objeto `event` permite acceder a información relacionada con el evento.

---

# 6️⃣ Common Uses 🛠️

`onopen` se utiliza para ejecutar acciones cuando la conexión está lista.

### 📦 Initialize Data

Inicializar información después de conectarse.

```text
Connection Open

        ↓

Load initial data
```

### 📤 Send First Message

Enviar un primer mensaje automáticamente.

```javascript
socket.onopen = () => {

  socket.send(
    "Hello"
  );

};
```

### 🖥️ Update UI

Actualizar la interfaz indicando que existe conexión.

```text
Disconnected

        ↓

Connected 🟢
```

### 🔄 Change Connection Status

Cambiar el estado de la aplicación.

```text
Connecting...

        ↓

Connected
```

---

# 🔄 onopen Flow

```text
Create Socket

      ↓

Handshake

      ↓

Connection Open

      ↓

onopen executes

      ↓

Send Messages
```

---

# 🧠 Conceptos principales

| Concepto                  | Significado                                 |
| ------------------------- | ------------------------------------------- |
| 🟢 `onopen`               | Evento ejecutado cuando la conexión se abre |
| 🔗 Connection Established | Momento donde WebSocket queda disponible    |
| 🤝 Handshake              | Proceso previo a abrir la conexión          |
| 📤 Sending Data           | Enviar mensajes después de la apertura      |
| 📦 Event Object           | Información del evento generado             |

---

# 🎯 Al terminar

`onopen` se ejecuta cuando la conexión WebSocket se establece correctamente.

### 🔄 Flujo

```text
Create Socket

      ↓

Handshake

      ↓

Connection Open

      ↓

onopen executes
```

> 💡 Después de `onopen`, la aplicación puede enviar mensajes utilizando:

```javascript
socket.send()
```

y comenzar la comunicación con el servidor.
