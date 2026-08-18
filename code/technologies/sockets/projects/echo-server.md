# 📁 01 — Echo Server 🔁

> [!TIP]
> 💡 **¿Cómo funciona una comunicación WebSocket mínima?**
>
> Un **Echo Server** recibe un mensaje del cliente y devuelve exactamente el mismo mensaje.

---

## 📚 Índice

- [📁 01 — Echo Server 🔁](#-01--echo-server-)
  - [📚 Índice](#-índice)
- [1️⃣ Project Overview 📋](#1️⃣-project-overview-)
    - [Flujo](#flujo)
- [2️⃣ WebSocket Server Setup 🖥️](#2️⃣-websocket-server-setup-️)
- [3️⃣ WebSocket Client Setup 🌐](#3️⃣-websocket-client-setup-)
- [4️⃣ Opening Connection 🔗](#4️⃣-opening-connection-)
- [5️⃣ Receiving Messages 📥](#5️⃣-receiving-messages-)
- [6️⃣ Sending Messages 📤](#6️⃣-sending-messages-)
- [7️⃣ Echo Logic 🔁](#7️⃣-echo-logic-)
    - [Cliente envía](#cliente-envía)
    - [Servidor responde](#servidor-responde)
    - [Flujo](#flujo-1)
- [8️⃣ Closing Connection 🔒](#8️⃣-closing-connection-)
- [9️⃣ Error Handling ⚠️](#9️⃣-error-handling-️)
- [🔟 Testing 🧪](#-testing-)
    - [Flujo de prueba](#flujo-de-prueba)
- [🧠 Conceptos practicados](#-conceptos-practicados)

---

# 1️⃣ Project Overview 📋

Un **Echo Server** es una aplicación WebSocket básica donde el servidor recibe un mensaje y responde con el mismo mensaje.

### Flujo

```text id="j2x6qc"
Client

  |

  | Message: Hello

  ▼

WebSocket Server

  |

  | Same Message

  ▼

Client
```

> [!IMPORTANT]
> 🎯 El objetivo es entender el flujo completo de una comunicación WebSocket.

---

# 2️⃣ WebSocket Server Setup 🖥️

El **WebSocket Server** acepta conexiones de los clientes y procesa los mensajes recibidos.

```text id="m9r4vt"
WebSocket Server

      ↓

Accept Connection

      ↓

Receive Message

      ↓

Send Message
```

> [!TIP]
> 💡 El servidor es responsable de recibir y devolver los mensajes.

---

# 3️⃣ WebSocket Client Setup 🌐

El cliente establece una conexión con el WebSocket Server.

```text id="c7n2wp"
Browser

   ↓

WebSocket Client

   ↓

WebSocket Server
```

> [!TIP]
> 💡 El cliente puede enviar y recibir mensajes mediante la conexión WebSocket.

---

# 4️⃣ Opening Connection 🔗

Primero se establece la conexión entre el cliente y el servidor.

```text id="v5q8hs"
Client

   |

   | Connect

   ▼

WebSocket Server

   |

   | Connection Open

   ▼

Client
```

> [!NOTE]
> 🟢 Una vez abierta la conexión, el cliente y el servidor pueden intercambiar mensajes.

---

# 5️⃣ Receiving Messages 📥

El servidor recibe los mensajes enviados por el cliente.

```text id="k3w7nz"
Client

   |

   | Message

   ▼

WebSocket Server

   |

   | Receive

   ▼

Message
```

> [!TIP]
> 💡 El servidor debe escuchar los mensajes recibidos para poder procesarlos.

---

# 6️⃣ Sending Messages 📤

El cliente puede enviar un mensaje mediante `send()`.

```javascript id="q8m4vc"
socket.send(message);
```

El servidor también puede enviar información al cliente.

```text id="p6z1yr"
Server

   |

   | Message

   ▼

Client
```

> [!TIP]
> 💡 `send()` permite enviar datos mediante la conexión WebSocket.

---

# 7️⃣ Echo Logic 🔁

La lógica principal del **Echo Server** consiste en devolver el mismo mensaje que recibió.

### Cliente envía

```json id="x4k9sd"
{
  "message": "Hello"
}
```

### Servidor responde

```json id="h7n2qm"
{
  "message": "Hello"
}
```

### Flujo

```text id="b5v8rx"
Client

   |

   | {"message":"Hello"}

   ▼

WebSocket Server

   |

   | {"message":"Hello"}

   ▼

Client
```

> [!IMPORTANT]
> 🎯 **Echo = Receive → Send the same message**

---

# 8️⃣ Closing Connection 🔒

Cuando la comunicación termina, la conexión WebSocket puede cerrarse.

```text id="z3c6yp"
Client

   |

   | close()

   ▼

WebSocket Server
```

El cliente puede cerrar la conexión mediante:

```javascript id="n8q5kt"
socket.close();
```

> [!TIP]
> 💡 `close()` finaliza la conexión WebSocket.

---

# 9️⃣ Error Handling ⚠️

El cliente puede detectar errores relacionados con la conexión.

```text id="r4m7jx"
Connection

   ↓

Error

   ↓

Error Handling
```

> [!WARNING]
> 💡 **Error Handling** permite gestionar errores que ocurran durante la comunicación.

---

# 🔟 Testing 🧪

Para probar el Echo Server:

```text id="w2p9hs"
Browser

   ↕

WebSocket Server
```

### Flujo de prueba

```text id="t6x3mq"
1. Open Connection

       ↓

2. Send Message

       ↓

3. Server Receives

       ↓

4. Server Sends Same Message

       ↓

5. Client Receives
```

> [!IMPORTANT]
> 🎯 El resultado esperado es recibir exactamente el mismo mensaje enviado.

---

# 🧠 Conceptos practicados

| Concepto          | Significado                                   |
| ----------------- | --------------------------------------------- |
| 🔗 **Connection** | Conexión entre cliente y servidor             |
| 📨 **Message**    | Información intercambiada                     |
| 📤 **send()**     | Envía un mensaje                              |
| 📥 **receive()**  | Recibe un mensaje                             |
| 🔒 **close()**    | Cierra la conexión                            |
| 📡 **Events**     | Permiten reaccionar a acciones de la conexión |

---