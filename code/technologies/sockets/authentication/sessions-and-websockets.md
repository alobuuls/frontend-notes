# 📄 04 — Sessions and WebSockets

> **¿Cómo relaciona el servidor una conexión WebSocket con un usuario existente?**

Las **sessions** permiten que el servidor mantenga la identidad de un usuario y pueda asociarla con una conexión WebSocket.

---

## 📚 Índice

- [📄 04 — Sessions and WebSockets](#-04--sessions-and-websockets)
  - [📚 Índice](#-índice)
- [1️⃣ What are Sessions? 🔐](#1️⃣-what-are-sessions-)
- [2️⃣ Server Side Sessions 🖥️](#2️⃣-server-side-sessions-️)
    - [Pueden vivir en:](#pueden-vivir-en)
    - [Estructura conceptual:](#estructura-conceptual)
- [3️⃣ Session IDs 🆔](#3️⃣-session-ids-)
- [4️⃣ Session Storage 💾](#4️⃣-session-storage-)
    - [Opciones:](#opciones)
- [5️⃣ WebSocket Session Association 🔗](#5️⃣-websocket-session-association-)
    - [🔄 Flujo:](#-flujo)
- [6️⃣ User Connection Mapping 👤](#6️⃣-user-connection-mapping-)
- [7️⃣ Session Lifecycle 🔄](#7️⃣-session-lifecycle-)
    - [🔄 Flujo:](#-flujo-1)
- [8️⃣ Session Expiration ⏳](#8️⃣-session-expiration-)
- [9️⃣ Distributed Sessions 🌐](#9️⃣-distributed-sessions-)
    - [Servidor A:](#servidor-a)
    - [Servidor B:](#servidor-b)
- [🔟 Scaling Problems 📈](#-scaling-problems-)
    - [Problema:](#problema)
- [✅ Solution: Shared Session Storage](#-solution-shared-session-storage)
- [🔄 Session Authentication Flow](#-session-authentication-flow)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)
    - [🔄 Flujo:](#-flujo-2)

# 1️⃣ What are Sessions? 🔐

Una **Session** representa la información de un usuario almacenada en el servidor durante una interacción con la aplicación.

> 💡 **Tip**
>
> Permite relacionar:

```text id="m7q3xp"
Session

    ↓

User Identity
```

---

# 2️⃣ Server Side Sessions 🖥️

Las sesiones se almacenan del lado del servidor.

### Pueden vivir en:

| Storage  |
| -------- |
| Database |
| Memory   |
| Redis    |

### Estructura conceptual:

```text id="p5m2qx"
Database / Memory / Redis

          |

          |

sessionId → User
```

---

# 3️⃣ Session IDs 🆔

Un **Session ID** es un identificador único que permite encontrar la sesión de un usuario.

**Ejemplo:**

```json
{
  "sessionId":"abc123",
  "userId":50
}
```

El servidor utiliza este identificador para recuperar la información del usuario.

---

# 4️⃣ Session Storage 💾

Las sesiones necesitan un lugar donde almacenarse.

### Opciones:

| Storage  |
| -------- |
| Memory   |
| Database |
| Redis    |

---

# 5️⃣ WebSocket Session Association 🔗

Cuando un usuario abre una conexión WebSocket, el servidor puede asociarla con una sesión existente.

### 🔄 Flujo:

```text id="n6m8qx"
WebSocket Connection

        ↓

sessionId

        ↓

User
```

---

# 6️⃣ User Connection Mapping 👤

El servidor debe saber qué usuario pertenece a cada conexión.

**Ejemplo:**

```text id="k4q9mp"
Socket

   ↓

sessionId

   ↓

User 50
```

Permite conocer:

| Questions              |
| ---------------------- |
| Who is connected?      |
| Who sends messages?    |
| Who receives messages? |

---

# 7️⃣ Session Lifecycle 🔄

Una sesión tiene un ciclo de vida.

### 🔄 Flujo:

```text id="r5m8qx"
User Login

      ↓

Server creates session

      ↓

Browser receives sessionId

      ↓

WebSocket connects

      ↓

Server finds session

      ↓

User identified
```

---

# 8️⃣ Session Expiration ⏳

Las sesiones pueden tener un tiempo de vida limitado.

Cuando expiran:

```text id="t6m2qx"
Session Expired

        ↓

User must authenticate again
```

> ⚠️ **Tip**
>
> Una sesión expirada requiere que el usuario se autentique nuevamente.

---

# 9️⃣ Distributed Sessions 🌐

En aplicaciones con varios servidores, las sesiones deben estar disponibles para todos.

### Servidor A:

```text id="x3q8mv"
Session stored here
```

### Servidor B:

```text id="a7m4qp"
No session found
```

---

# 🔟 Scaling Problems 📈

Cuando existen múltiples servidores, almacenar sesiones solamente en memoria puede generar problemas.

### Problema:

```text id="b6n9mx"
User connects to Server A

        ↓

Session stored in Server A

        ↓

User connects to Server B

        ↓

Session not found
```

---

# ✅ Solution: Shared Session Storage

Usar almacenamiento compartido:

| Shared Storage       |
| -------------------- |
| Redis                |
| Database             |
| Shared Session Store |

---

# 🔄 Session Authentication Flow

```text id="h5m8qx"
User Login

      ↓

Server creates session

      ↓

Browser receives sessionId

      ↓

WebSocket connects

      ↓

Server finds session

      ↓

User identified
```

---

# 🧠 Conceptos principales

| Concepto                       | Significado                                    |
| ------------------------------ | ---------------------------------------------- |
| 🔐 **Session**                 | Información del usuario almacenada en servidor |
| 🆔 **Session ID**              | Identificador de una sesión                    |
| 🔗 **Stateful Authentication** | Autenticación basada en estado guardado        |
| ⚡ **Redis**                    | Almacenamiento compartido de sesiones          |
| 🌐 **Distributed Systems**     | Sistemas con múltiples servidores              |

---

# 🎯 Al terminar

Una sesión permite asociar una conexión WebSocket con un usuario existente.

### 🔄 Flujo:

```text id="w8p2mq"
WebSocket Connection

        ↓

Session ID

        ↓

Find Session

        ↓

Identify User
```

> 💡 **Remember**
>
> En sistemas escalables, las sesiones necesitan un almacenamiento compartido como Redis o una base de datos.
