# 🔗 02 — Connections

> 💡 **¿Cómo sabe el servidor qué clientes están conectados?**

> 💡 **Tip:** Un servidor WebSocket debe administrar las conexiones activas para saber qué clientes están conectados, quién envía mensajes y quién debe recibirlos.

---

## 📚 Índice 

- [🔗 02 — Connections](#-02--connections)
  - [📚 Índice](#-índice)
- [1️⃣ What is a WebSocket Connection? 🔗](#1️⃣-what-is-a-websocket-connection-)
  - [¿Qué es una WebSocket Connection?](#qué-es-una-websocket-connection)
    - [🔄 Flujo](#-flujo)
    - [Ejemplo](#ejemplo)
- [2️⃣ Connection Event ⚡](#2️⃣-connection-event-)
    - [💻 Conceptualmente](#-conceptualmente)
    - [🔄 Flujo](#-flujo-1)
- [3️⃣ Accepting Clients 🤝](#3️⃣-accepting-clients-)
- [4️⃣ Socket Instance 🔌](#4️⃣-socket-instance-)
    - [Ejemplo](#ejemplo-1)
- [5️⃣ Tracking Connected Clients 📋](#5️⃣-tracking-connected-clients-)
    - [Ejemplo conceptual](#ejemplo-conceptual)
- [6️⃣ Connection IDs 🆔](#6️⃣-connection-ids-)
    - [Ejemplo](#ejemplo-2)
- [7️⃣ Client Lifecycle 🔄](#7️⃣-client-lifecycle-)
    - [🔄 Flujo](#-flujo-2)
    - [Estados](#estados)
- [8️⃣ Disconnect Handling 🔌](#8️⃣-disconnect-handling-)
    - [Ejemplos](#ejemplos)
    - [🔄 Flujo](#-flujo-3)
- [9️⃣ Active Connections 🟢](#9️⃣-active-connections-)
    - [Ejemplo](#ejemplo-3)
- [🔟 Connection Management ⚙️](#-connection-management-️)
    - [Incluye](#incluye)
    - [🔄 Flujo](#-flujo-4)
- [🔄 Connection Management Flow](#-connection-management-flow)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)

# 1️⃣ What is a WebSocket Connection? 🔗

## ¿Qué es una WebSocket Connection?

Una **WebSocket Connection** es una conexión persistente entre un cliente y un servidor que permite intercambiar mensajes mientras permanece abierta.

### 🔄 Flujo

```text id="m7q3xp"
Client

        ◄────────►

Server
```

> 🔎 **Importante:** Cada cliente conectado representa una conexión independiente.

### Ejemplo

```text id="q8m4vx"
Client A

        ↕

Server


Client B

        ↕

Server
```

---

# 2️⃣ Connection Event ⚡

Cuando un cliente se conecta, el servidor recibe un evento de conexión.

### 💻 Conceptualmente

```javascript id="p5n2mq"
server.on("connection", socket => {

});
```

Este evento indica:

```text id="x7m3qp"
New Client Connected
```

### 🔄 Flujo

```text id="n6m8qx"
Client

Connect

        ↓

Server

connection event

        ↓

Create Socket Instance
```

---

# 3️⃣ Accepting Clients 🤝

El servidor debe aceptar nuevos clientes cuando intentan conectarse.

```text id="k4q9mp"
Client

        |

WebSocket Connection

        ▼

Server

        |

Accept Connection
```

Después de aceptar la conexión, el servidor crea un socket para ese cliente.

---

# 4️⃣ Socket Instance 🔌

Cuando un cliente se conecta, el servidor crea una instancia llamada:

```text id="v8m3qx"
Socket Instance
```

Esta instancia representa la conexión con ese cliente específico.

### Ejemplo

```text id="r5n8mq"
Client A

        ↓

Server

        ↓

Socket A
```

Cada cliente tiene su propio socket:

```text id="t6m2qx"
Client A → Socket A

Client B → Socket B

Client C → Socket C
```

> 💡 **Tip:** La **Socket Instance** representa la conexión específica de un cliente.

---

# 5️⃣ Tracking Connected Clients 📋

El servidor necesita mantener información sobre los clientes conectados.

### Ejemplo conceptual

```text id="x3q8mv"
Connected Clients

[
 Client A,
 Client B,
 Client C
]
```

Esto permite saber:

* 👥 Quién está conectado.
* 📩 Quién envió un mensaje.
* 📤 Quién debe recibir información.

---

# 6️⃣ Connection IDs 🆔

Cada conexión puede tener un identificador único.

### Ejemplo

```text id="a7m4qp"
Client A

Connection ID:

001
```

```text id="b6n9mx"
Client B

Connection ID:

002
```

Los IDs permiten identificar conexiones específicas.

```text id="c8m4qx"
Connection ID

        ↓

Find Client

        ↓

Send Message
```

---

# 7️⃣ Client Lifecycle 🔄

Cada cliente tiene un ciclo de vida dentro del servidor.

### 🔄 Flujo

```text id="h5m8qx"
Client Connects

        ↓

Connection Created

        ↓

Exchange Messages

        ↓

Client Disconnects
```

### Estados

```text id="m3q7xp"
Connected

      ↓

Active

      ↓

Disconnected
```

---

# 8️⃣ Disconnect Handling 🔌

El servidor debe manejar cuando un cliente se desconecta.

### Ejemplos

* Usuario cierra la aplicación.
* Problema de red.
* Cierre del navegador.

### 🔄 Flujo

```text id="w8p2mq"
Client

Disconnect

        ↓

Server

        ↓

Remove Connection
```

El servidor debe actualizar la lista de clientes activos.

---

# 9️⃣ Active Connections 🟢

Las conexiones activas representan los clientes que actualmente están conectados.

### Ejemplo

```text id="s6m9qx"
Active Connections

[
 Client A,
 Client B,
 Client C
]
```

Si un cliente se desconecta:

```text id="n4q8mv"
Before:

[
 Client A,
 Client B,
 Client C
]


After:

[
 Client A,
 Client C
]
```

> 🟢 **Active Connections:** representan los clientes que actualmente están conectados.

---

# 🔟 Connection Management ⚙️

La administración de conexiones permite controlar los clientes conectados.

### Incluye

* 🔗 Crear conexiones.
* 📋 Registrar clientes.
* 🆔 Identificar conexiones.
* 🧹 Eliminar conexiones cerradas.

### 🔄 Flujo

```text id="p7m3qx"
New Connection

        ↓

Create Socket

        ↓

Store Client

        ↓

Manage Communication

        ↓

Remove on Disconnect
```

---

# 🔄 Connection Management Flow

```text id="k9m5vx"
Client Connects

        ↓

Connection Event

        ↓

Create Socket Instance

        ↓

Track Client

        ↓

Exchange Messages

        ↓

Handle Disconnect
```

---

# 🧠 Conceptos principales

| Concepto             | Significado                                  |
| -------------------- | -------------------------------------------- |
| 🔗 **Connection**    | Comunicación activa entre cliente y servidor |
| 🔌 **Socket**        | Representación de una conexión específica    |
| 👤 **Client**        | Aplicación conectada al servidor             |
| 📦 **Session**       | Información asociada a una conexión          |
| 🆔 **Connection ID** | Identificador único de una conexión          |
| 🟢 **Active Users**  | Clientes actualmente conectados              |

---

# 🎯 Al terminar

Debes poder explicar:

```text id="m8q3vx"
Who is connected?

        ↓

Who sent the message?

        ↓

Who receives the message?
```

Cuando un cliente conecta:

```text id="q4m8xp"
Client A

    ↓

Server

    ↓

Socket A
```

> 🎯 **Idea clave:** El servidor mantiene un registro de clientes conectados para gestionar la comunicación.
