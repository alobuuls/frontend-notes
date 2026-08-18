# 🔌 02 — new WebSocket

> 💡 **¿Cómo inicia un cliente una conexión WebSocket?**

Para crear una conexión WebSocket desde el navegador se utiliza el constructor:

```javascript
new WebSocket()
```

> 💡 Este constructor crea una nueva instancia de WebSocket e inicia el proceso de conexión con el servidor.

---

## 🔌 Índice

- [🔌 02 — new WebSocket](#-02--new-websocket)
  - [🔌 Índice](#-índice)
- [1️⃣ WebSocket Constructor 🔨](#1️⃣-websocket-constructor-)
  - [¿Qué es el WebSocket Constructor?](#qué-es-el-websocket-constructor)
    - [📌 Sintaxis](#-sintaxis)
    - [🔄 Flujo](#-flujo)
- [2️⃣ WebSocket URL 🌐](#2️⃣-websocket-url-)
    - [📌 Ejemplo](#-ejemplo)
    - [📌 Formato](#-formato)
    - [📌 Ejemplo](#-ejemplo-1)
- [3️⃣ ws Protocol 🌐](#3️⃣-ws-protocol-)
    - [📌 Ejemplo](#-ejemplo-2)
    - [Características](#características)
- [4️⃣ wss Protocol 🔒](#4️⃣-wss-protocol-)
    - [📌 Ejemplo](#-ejemplo-3)
    - [Características](#características-1)
- [5️⃣ Creating a Connection 🔗](#5️⃣-creating-a-connection-)
    - [🔄 Proceso](#-proceso)
- [6️⃣ Connection Errors ⚠️](#6️⃣-connection-errors-️)
    - [❌ Ejemplos](#-ejemplos)
    - [🔄 Flujo](#-flujo-1)
    - [📌 Ejemplo](#-ejemplo-4)
- [7️⃣ Multiple Connections 🔗🔗](#7️⃣-multiple-connections-)
    - [📌 Ejemplo](#-ejemplo-5)
- [8️⃣ WebSocket Instance 🔌](#8️⃣-websocket-instance-)
    - [📌 Ejemplo](#-ejemplo-6)
    - [🔨 Métodos](#-métodos)
    - [⚡ Eventos](#-eventos)
    - [📦 Propiedades](#-propiedades)
- [🔄 Connection Flow](#-connection-flow)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)
    - [📌 Ejemplo](#-ejemplo-7)

# 1️⃣ WebSocket Constructor 🔨

## ¿Qué es el WebSocket Constructor?

El constructor **WebSocket** permite crear una nueva conexión WebSocket.

### 📌 Sintaxis

```javascript
const socket = new WebSocket(url);
```

Al ejecutarse:

```javascript
new WebSocket()
```

el navegador comienza a establecer una conexión con el servidor indicado.

### 🔄 Flujo

```text
new WebSocket()

        ↓

Start Connection

        ↓

CONNECTING
```

---

# 2️⃣ WebSocket URL 🌐

El constructor necesita una URL que indique dónde se encuentra el servidor WebSocket.

### 📌 Ejemplo

```javascript
const socket = new WebSocket(
  "ws://localhost:8080"
);
```

La URL define:

| Elemento     | Significado          |
| ------------ | -------------------- |
| 🌍 Servidor  | Servidor destino     |
| 🔌 Protocolo | Protocolo utilizado  |
| 📍 Endpoint  | Endpoint de conexión |

### 📌 Formato

```text
protocol://host:port/path
```

### 📌 Ejemplo

```text
ws://localhost:8080/chat
```

---

# 3️⃣ ws Protocol 🌐

El protocolo:

```text
ws://
```

representa una conexión WebSocket sin cifrado.

### 📌 Ejemplo

```javascript
const socket = new WebSocket(
  "ws://localhost:8080"
);
```

### Características

* 🔓 Comunicación sin TLS.
* 🧪 Usado comúnmente en desarrollo local.
* ⚠️ No recomendado para información sensible en producción.

> 💡 **Tip:** `ws://` representa una conexión WebSocket sin cifrado.

---

# 4️⃣ wss Protocol 🔒

El protocolo:

```text
wss://
```

representa una conexión WebSocket segura.

Utiliza:

```text
TLS
```

para cifrar la comunicación.

### 📌 Ejemplo

```javascript
const socket = new WebSocket(
  "wss://example.com"
);
```

### Características

* 🔐 Datos cifrados.
* 🌍 Usado en aplicaciones reales.
* ✅ Recomendado para producción.

> 💡 **Tip:** `wss://` es la versión segura de WebSocket y utiliza **TLS**.

---

# 5️⃣ Creating a Connection 🔗

Para crear una conexión:

```javascript
const socket = new WebSocket(
  "ws://localhost:8080"
);
```

### 🔄 Proceso

```text
new WebSocket()

        |

        ▼

CONNECTING

        |

        ▼

OPEN

        |

        ▼

Communication
```

La conexión comienza en estado:

```text
CONNECTING
```

y después pasa a:

```text
OPEN
```

cuando se establece correctamente.

---

# 6️⃣ Connection Errors ⚠️

Durante la creación de una conexión pueden ocurrir errores.

### ❌ Ejemplos

* ❌ Servidor no disponible.
* ❌ URL incorrecta.
* ❌ Fallo de red.
* ❌ Problemas durante el handshake.

### 🔄 Flujo

```text
new WebSocket()

        ↓

CONNECTING

        ↓

Connection Error
```

Los errores pueden manejarse con:

```javascript
socket.onerror
```

### 📌 Ejemplo

```javascript
socket.onerror = (error) => {
  console.log(error);
};
```

> ⚠️ **Tip:** Los errores de conexión pueden manejarse mediante `socket.onerror`.

---

# 7️⃣ Multiple Connections 🔗🔗

Es posible crear múltiples conexiones WebSocket.

### 📌 Ejemplo

```javascript
const chatSocket = new WebSocket(
  "ws://localhost:8080/chat"
);

const notificationSocket = new WebSocket(
  "ws://localhost:8080/notifications"
);
```

Cada conexión es independiente:

```text
Connection 1

Client ◄────────► Server


Connection 2

Client ◄────────► Server
```

Cada instancia tiene:

* Su propio estado.
* Sus propios eventos.
* Su propia comunicación.

---

# 8️⃣ WebSocket Instance 🔌

Cuando usamos:

```javascript
new WebSocket()
```

obtenemos una instancia:

```text
WebSocket Instance
```

### 📌 Ejemplo

```javascript
const socket = new WebSocket(
  "ws://localhost:8080"
);
```

La variable:

```javascript
socket
```

representa la conexión WebSocket.

Permite utilizar:

### 🔨 Métodos

```javascript
send()

close()
```

### ⚡ Eventos

```javascript
onopen

onmessage

onerror

onclose
```

### 📦 Propiedades

```javascript
readyState

url

protocol
```

---

# 🔄 Connection Flow

```text
new WebSocket()

        |

        ▼

CONNECTING

        |

        ▼

OPEN

        |

        ▼

Communication

        |

        ▼

CLOSED
```

---

# 🧠 Conceptos principales

| Concepto       | Significado                                       |
| -------------- | ------------------------------------------------- |
| 🔨 Constructor | Función utilizada para crear un WebSocket         |
| 🔌 Instance    | Objeto creado mediante `new WebSocket()`          |
| 🌐 URL         | Dirección del servidor WebSocket                  |
| 🔗 Protocol    | `ws://` o `wss://` utilizado por la conexión      |
| 🔄 Connection  | Comunicación establecida entre cliente y servidor |

---

# 🎯 Al terminar

Un cliente inicia una conexión WebSocket utilizando:

```javascript
const socket = new WebSocket(url);
```

### 📌 Ejemplo

```javascript
const socket = new WebSocket(
  "ws://localhost:8080"
);
```

El proceso pasa por:

```text
new WebSocket()

        ↓

CONNECTING

        ↓

OPEN

        ↓

Communication
```

El constructor crea una **WebSocket Instance** que permite comunicarse con un servidor mediante los protocolos:

```text
ws://

wss://
```
