# 📄 WebSocket Events 📡🔌

> 💡 **¿Qué eventos ocurren durante la vida de una conexión WebSocket?**
>
> Los **WebSocket Events** permiten controlar las diferentes etapas de una conexión, desde su apertura hasta su cierre.

---

## 📚 Índice

- [📄 WebSocket Events 📡🔌](#-websocket-events-)
  - [📚 Índice](#-índice)
- [1️⃣ Event Overview 📋](#1️⃣-event-overview-)
    - [📡 Eventos principales](#-eventos-principales)
- [2️⃣ open Event 🟢](#2️⃣-open-event-)
    - [Usos](#usos)
- [3️⃣ message Event 📥](#3️⃣-message-event-)
    - [Ejemplo](#ejemplo)
- [4️⃣ error Event ⚠️](#4️⃣-error-event-️)
    - [Ejemplos](#ejemplos)
- [5️⃣ close Event 🔒](#5️⃣-close-event-)
    - [Información disponible](#información-disponible)
- [6️⃣ Event Object 📦](#6️⃣-event-object-)
    - [Ejemplos](#ejemplos-1)
- [7️⃣ Close Codes 🔢](#7️⃣-close-codes-)
- [8️⃣ Event Flow 🔄](#8️⃣-event-flow-)
    - [🔄 Flujo](#-flujo)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)

---

# 1️⃣ Event Overview 📋

Los **WebSocket Events** representan acciones importantes durante el ciclo de vida de una conexión.

```text
WebSocket Events
```

### 📡 Eventos principales

| Evento       | Función                          |
| ------------ | -------------------------------- |
| 🟢 `open`    | Apertura de la conexión          |
| 📥 `message` | Recepción de información         |
| ⚠️ `error`   | Problema durante la comunicación |
| 🔒 `close`   | Cierre de la conexión            |

> 💡 **Tip:** Cada evento permite ejecutar una acción específica cuando ocurre un cambio en la conexión.

---

# 2️⃣ open Event 🟢

El evento **open** ocurre cuando la conexión WebSocket se establece correctamente.

```javascript
socket.addEventListener(
  "open",
  () => {

  }
);
```

### Usos

```text
Initialize application

Send first message

Update UI
```

> 💡 **Tip:** Se utiliza para ejecutar acciones después de conectar con el servidor.

---

# 3️⃣ message Event 📥

El evento **message** ocurre cuando el cliente recibe información del servidor.

```javascript
socket.addEventListener(
  "message",
  (event)=>{

  }
);
```

Los datos recibidos están disponibles en:

```javascript
event.data
```

### Ejemplo

```json
{
  "type":"notification",
  "message":"Hello"
}
```

> 💡 **Tip:** `message` permite procesar la información recibida mediante WebSocket.

---

# 4️⃣ error Event ⚠️

El evento **error** ocurre cuando sucede un problema durante la comunicación.

```javascript
socket.onerror =
(error)=>{

};
```

### Ejemplos

```text
Connection failure

Network error

Protocol error
```

> 💡 **Tip:** Permite detectar y manejar errores de la conexión.

---

# 5️⃣ close Event 🔒

El evento **close** ocurre cuando la conexión WebSocket termina.

```javascript
socket.onclose =
(event)=>{

};
```

### Información disponible

```text
event.code

event.reason

event.wasClean
```

| Propiedad          | Significado                    |
| ------------------ | ------------------------------ |
| 🔢 `event.code`    | Código de cierre               |
| 📝 `event.reason`  | Motivo del cierre              |
| ✅ `event.wasClean` | Indica si el cierre fue limpio |

---

# 6️⃣ Event Object 📦

Los eventos WebSocket proporcionan información mediante un objeto de evento.

```text
Event

   ↓

Event Object

   ↓

Data / Information
```

### Ejemplos

```text
event.data

event.code

event.reason
```

> 💡 **Tip:** El **Event Object** contiene información relacionada con el evento ocurrido.

---

# 7️⃣ Close Codes 🔢

Los **Close Codes** indican la razón por la que una conexión fue cerrada.

|  Code  | Meaning             |
| :----: | ------------------- |
| `1000` | 🟢 Normal closure   |
| `1001` | 🚪 Going away       |
| `1006` | ⚠️ Abnormal closure |
| `1008` | 🚫 Policy violation |
| `1011` | 🔴 Server error     |

---

# 8️⃣ Event Flow 🔄

Los eventos ocurren siguiendo el ciclo de vida de una conexión WebSocket.

```text
create WebSocket

        ↓

open

        ↓

message

        ↓

message

        ↓

close
```

### 🔄 Flujo

```text
Create Connection

        ↓

Connection Open

        ↓

Exchange Messages

        ↓

Connection Close
```

---

# 🧠 Conceptos principales

| Concepto                | Significado                             |
| ----------------------- | --------------------------------------- |
| 🎯 **Event Handler**    | Función que responde a un evento        |
| 📦 **Event Object**     | Información del evento ocurrido         |
| 🔢 **Close Code**       | Código que indica la razón del cierre   |
| 🔄 **Lifecycle Events** | Eventos durante la vida de una conexión |

---

# 🎯 Al terminar

> **Los WebSocket Events permiten controlar la conexión desde su creación, recepción de mensajes, errores y cierre mediante eventos como** **`open`**, **`message`**, **`error`** **y** **`close`**.

```text
create WebSocket

        ↓

open

        ↓

message

        ↓

error

        ↓

close
```
