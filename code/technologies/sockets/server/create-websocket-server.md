# 🖥️ 01 — Creating a WebSocket Server

> 💡 **¿Cómo recibe el backend una conexión WebSocket desde un cliente?**

> 💡 **Tip:** Un **WebSocket Server** es un servidor capaz de aceptar conexiones WebSocket desde clientes y mantener una comunicación persistente.

Su responsabilidad es:

* 🔗 Aceptar conexiones.
* 📩 Recibir mensajes.
* ⚙️ Procesar información.
* 📤 Enviar respuestas.
* 🔒 Cerrar conexiones.

---

## 📚 Índice 

- [🖥️ 01 — Creating a WebSocket Server](#️-01--creating-a-websocket-server)
  - [📚 Índice](#-índice)
- [1️⃣ What is a WebSocket Server? 🖥️](#1️⃣-what-is-a-websocket-server-️)
  - [¿Qué es un WebSocket Server?](#qué-es-un-websocket-server)
    - [🔄 Flujo](#-flujo)
- [2️⃣ Server Responsibilities ⚙️](#2️⃣-server-responsibilities-️)
    - [🔗 Accept Connections](#-accept-connections)
    - [📩 Receive Messages](#-receive-messages)
    - [⚙️ Process Data](#️-process-data)
    - [📤 Send Responses](#-send-responses)
    - [🔒 Close Connections](#-close-connections)
- [3️⃣ WebSocket Server Architecture 🏗️](#3️⃣-websocket-server-architecture-️)
    - [🏗️ Arquitectura](#️-arquitectura)
    - [🔄 Ejemplo](#-ejemplo)
- [4️⃣ Creating a Basic Server 🛠️](#4️⃣-creating-a-basic-server-️)
    - [💻 Conceptualmente](#-conceptualmente)
- [5️⃣ Listening for Connections 👂](#5️⃣-listening-for-connections-)
    - [🔄 Flujo](#-flujo-1)
- [6️⃣ WebSocket Libraries 📚](#6️⃣-websocket-libraries-)
- [7️⃣ Server Lifecycle 🔄](#7️⃣-server-lifecycle-)
    - [🔄 Flujo](#-flujo-2)
- [8️⃣ Client-Server Communication 🔄](#8️⃣-client-server-communication-)
    - [📩 Ejemplo](#-ejemplo-1)
- [9️⃣ Basic Echo Server 🔁](#9️⃣-basic-echo-server-)
    - [🔁 Concepto](#-concepto)
    - [Funcionamiento](#funcionamiento)
    - [💬 Ejemplo](#-ejemplo-2)
- [🔟 Running a WebSocket Server 🚀](#-running-a-websocket-server-)
- [🔄 Basic Server Flow](#-basic-server-flow)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)

# 1️⃣ What is a WebSocket Server? 🖥️

## ¿Qué es un WebSocket Server?

Un **WebSocket Server** es una aplicación backend que permite establecer y administrar conexiones WebSocket con clientes.

> 🔎 **A diferencia de:** un servidor HTTP tradicional, mantiene una conexión abierta para intercambiar mensajes continuamente.

### 🔄 Flujo

```text
Client

WebSocket Connection

        ↓

WebSocket Server

        ↓

Messages
```

---

# 2️⃣ Server Responsibilities ⚙️

Un WebSocket Server debe encargarse de varias tareas.

### 🔗 Accept Connections

Aceptar nuevas conexiones de clientes.

```text
Client

        ↓

Connection Request

        ↓

Server
```

### 📩 Receive Messages

Recibir información enviada por los clientes.

```text
Client

Message

        ↓

Server
```

### ⚙️ Process Data

Procesar la información recibida.

```text
Receive Data

        ↓

Process

        ↓

Action
```

### 📤 Send Responses

Enviar mensajes de vuelta al cliente.

```text
Server

Response

        ↓

Client
```

### 🔒 Close Connections

Cerrar conexiones cuando sea necesario.

```text
Connection

        ↓

Close

        ↓

Disconnected
```

---

# 3️⃣ WebSocket Server Architecture 🏗️

Un servidor WebSocket puede manejar múltiples clientes conectados al mismo tiempo.

### 🏗️ Arquitectura

```text
             WebSocket Server


                    │

        ┌───────────┼───────────┐

        │           │           │

        ▼           ▼           ▼


     Client A    Client B    Client C
```

Cada cliente mantiene su propia conexión con el servidor.

### 🔄 Ejemplo

```text
Client A

      ↕

Server


Client B

      ↕

Server


Client C

      ↕

Server
```

---

# 4️⃣ Creating a Basic Server 🛠️

Para crear un servidor WebSocket se utiliza una librería WebSocket del lenguaje backend elegido.

El servidor necesita:

```text
Server Instance

        ↓

Listen for Connections

        ↓

Handle Clients
```

### 💻 Conceptualmente

```javascript
Create Server

Listen

Accept Connections
```

---

# 5️⃣ Listening for Connections 👂

El servidor debe escuchar nuevas conexiones entrantes.

### 🔄 Flujo

```text
Client

        |

WebSocket Connection

        ▼

Server

        |

connection event

        ▼

Create Socket Instance
```

Cuando llega una conexión:

```text
New Client Connected
```

El servidor crea una instancia del socket para comunicarse con ese cliente.

> 💡 **Tip:** Cada cliente conectado tiene su propia **Socket Instance**.

---

# 6️⃣ WebSocket Libraries 📚

Los servidores WebSocket normalmente utilizan librerías que proporcionan funcionalidades como:

* 🔗 Crear servidores.
* 👂 Escuchar conexiones.
* 📩 Recibir mensajes.
* 📤 Enviar mensajes.

Estas librerías permiten trabajar con:

```text
WebSocket Server

Connection Handler

Socket Instance
```

---

# 7️⃣ Server Lifecycle 🔄

Un servidor WebSocket sigue un ciclo de vida.

### 🔄 Flujo

```text
Start Server

        ↓

Listen for Connections

        ↓

Accept Client

        ↓

Exchange Messages

        ↓

Close Connection
```

---

# 8️⃣ Client-Server Communication 🔄

Una vez establecida la conexión, cliente y servidor pueden intercambiar mensajes.

```text
Client

        ◄────────►

Server
```

### 📩 Ejemplo

```text
Client

Message

        ↓

Server


Server

Response

        ↓

Client
```

---

# 9️⃣ Basic Echo Server 🔁

Un **Echo Server** es un servidor que devuelve al cliente el mismo mensaje que recibió.

### 🔁 Concepto

```text
Client

  |

  | "Hello"

  ▼

Server

  | "Hello"

  ▼

Client
```

### Funcionamiento

1. Cliente envía un mensaje.
2. Servidor recibe el mensaje.
3. Servidor devuelve el mismo contenido.

### 💬 Ejemplo

```text
Client:

"Hello"


Server:

"Hello"
```

> 💡 **Tip:** Un **Echo Server** permite comprobar fácilmente que la comunicación entre cliente y servidor funciona correctamente.

---

# 🔟 Running a WebSocket Server 🚀

Para ejecutar un servidor WebSocket se debe:

```text
Create Server

        ↓

Start Server

        ↓

Listen

        ↓

Accept Connections
```

Una vez ejecutándose:

```text
WebSocket Server Running

        ↓

Clients Can Connect
```

---

# 🔄 Basic Server Flow

```text
Client

   |

   | WebSocket Connection

   ▼

Server

   | connection event

   ▼

Create Socket Instance

   |

   ▼

Receive Messages

   |

   ▼

Send Responses
```

---

# 🧠 Conceptos principales

| Concepto                  | Significado                                  |
| ------------------------- | -------------------------------------------- |
| 🖥️ **WebSocket Server**  | Servidor que acepta conexiones WebSocket     |
| 🔗 **Client Connection**  | Conexión creada desde un cliente             |
| 👂 **Listener**           | Mecanismo que espera nuevas conexiones       |
| ⚙️ **Connection Handler** | Código que maneja una conexión nueva         |
| 🏢 **Server Instance**    | Instancia del servidor WebSocket             |
| 🔌 **Socket Instance**    | Instancia creada para cada cliente conectado |

---

# 🎯 Al terminar

Un **WebSocket Server** recibe conexiones de clientes y mantiene comunicación mediante una conexión persistente.

El servidor debe:

```text
Accept connections

        ↓

Receive messages

        ↓

Process data

        ↓

Send responses

        ↓

Close connections
```

> 🔁 **En resumen:** Un servidor básico puede funcionar como un **Echo Server**, recibiendo un mensaje y devolviéndolo al cliente.
