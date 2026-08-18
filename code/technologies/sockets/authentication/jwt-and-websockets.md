# 📄 05 — JWT and WebSockets

> **¿Cómo usamos tokens para identificar usuarios en una conexión persistente?**

JWT permite autenticar usuarios utilizando un token que contiene información de identidad y que puede ser validado por el servidor durante una conexión WebSocket.

---

## 📚 Índice

- [📄 05 — JWT and WebSockets](#-05--jwt-and-websockets)
  - [📚 Índice](#-índice)
- [1️⃣ What is JWT? 🔑](#1️⃣-what-is-jwt-)
    - [El token contiene información como:](#el-token-contiene-información-como)
- [2️⃣ JWT Authentication Flow 🔄](#2️⃣-jwt-authentication-flow-)
    - [🔄 Flujo tradicional:](#-flujo-tradicional)
- [3️⃣ JWT in WebSocket Handshake 🔌](#3️⃣-jwt-in-websocket-handshake-)
    - [Flujo:](#flujo)
- [4️⃣ Sending Token 📤](#4️⃣-sending-token-)
- [5️⃣ Token Validation ✅](#5️⃣-token-validation-)
    - [Proceso:](#proceso)
- [6️⃣ Token Expiration ⏳](#6️⃣-token-expiration-)
- [7️⃣ Refresh Tokens 🔄](#7️⃣-refresh-tokens-)
    - [🔄 Flujo:](#-flujo)
- [8️⃣ Secure Token Storage 🔒](#8️⃣-secure-token-storage-)
    - [Conceptos:](#conceptos)
- [9️⃣ JWT vs Sessions ⚖️](#9️⃣-jwt-vs-sessions-️)
    - [Comparación:](#comparación)
    - [JWT](#jwt)
    - [Session](#session)
- [🔟 Production Considerations 🚀](#-production-considerations-)
- [🔐 JWT Authentication Example](#-jwt-authentication-example)
    - [Cliente:](#cliente)
    - [Servidor:](#servidor)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)
    - [🔄 Flujo:](#-flujo-1)

# 1️⃣ What is JWT? 🔑

**JWT (JSON Web Token)** es un token utilizado para representar la identidad de un usuario.

### El token contiene información como:

| Información     |
| --------------- |
| User Identity   |
| Roles           |
| Expiration Time |

**Ejemplo:**

```json id="q8m4vx"
{
  "sub":123,
  "role":"admin",
  "exp":123456789
}
```

---

# 2️⃣ JWT Authentication Flow 🔄

### 🔄 Flujo tradicional:

```text id="p5m2qx"
Login

    ↓

Backend generates JWT

    ↓

Frontend stores token

    ↓

WebSocket connection

    ↓

Send JWT

    ↓

Server validates token

    ↓

Connection accepted
```

---

# 3️⃣ JWT in WebSocket Handshake 🔌

El JWT puede enviarse durante el inicio de la conexión WebSocket.

### Flujo:

```text id="x7m3qp"
Client

        ↓

WebSocket Handshake

        ↓

JWT Token

        ↓

Server Validation
```

---

# 4️⃣ Sending Token 📤

El cliente envía el token al establecer la conexión.

**Ejemplo conceptual:**

```text id="n6m8qx"
Connect:

wss://server.com

Authorization:

Bearer token123
```

---

# 5️⃣ Token Validation ✅

El servidor debe verificar que el token sea válido.

### Proceso:

```text id="k4q9mp"
Receive Token

      ↓

Verify Signature

      ↓

Extract User

      ↓

Allow Connection
```

> 💡 **Tip**
>
> El servidor debe verificar que el token sea válido antes de permitir la conexión.

---

# 6️⃣ Token Expiration ⏳

Los JWT tienen un tiempo de expiración definido.

**Ejemplo:**

```json id="v8m3qx"
{
  "exp":123456789
}
```

Cuando expira:

```text id="r5m8qx"
Token Expired

        ↓

Authentication Required
```

---

# 7️⃣ Refresh Tokens 🔄

Los **Refresh Tokens** permiten obtener nuevos tokens cuando el JWT principal expira.

### 🔄 Flujo:

```text id="t6m2qx"
JWT Expired

      ↓

Use Refresh Token

      ↓

Generate New JWT
```

---

# 8️⃣ Secure Token Storage 🔒

Los tokens necesitan almacenarse de forma segura.

### Conceptos:

| Concepto         |
| ---------------- |
| Secure Storage   |
| Token Protection |
| Access Control   |

> 🔒 **Security Tip**
>
> Los tokens necesitan almacenarse de forma segura.

---

# 9️⃣ JWT vs Sessions ⚖️

### Comparación:

| JWT                 | Session                 |
| ------------------- | ----------------------- |
| Stateless           | Stateful                |
| Token contains data | Server stores data      |
| Easy scaling        | Requires shared storage |
| Client stores token | Server stores session   |

### JWT

```text id="a7m4qp"
Client

   ↓

Stores Token

   ↓

Sends Token

   ↓

Server Validates
```

### Session

```text id="b6n9mx"
Client

   ↓

Session ID

   ↓

Server finds Session

   ↓

User Identified
```

---

# 🔟 Production Considerations 🚀

Al usar JWT con WebSockets se deben considerar:

| Considerations   |
| ---------------- |
| Token Expiration |
| Token Revocation |
| Token Refresh    |
| Secure Storage   |

---

# 🔐 JWT Authentication Example

### Cliente:

```text id="h5m8qx"
Connect:

wss://server.com

Authorization:

Bearer token123
```

### Servidor:

```text id="w8p2mq"
Receive Token

      ↓

Verify Signature

      ↓

Extract User

      ↓

Allow Connection
```

---

# 🧠 Conceptos principales

| Concepto                       | Significado                    |
| ------------------------------ | ------------------------------ |
| 🔑 **JWT**                     | Token de identidad del usuario |
| 🔄 **JWT Authentication Flow** | Flujo de validación del token  |
| 🛡️ **Token Validation**       | Verificación del token         |
| ⏳ **Token Expiration**         | Tiempo de vida del token       |
| 🔁 **Refresh Token**           | Renovación de tokens           |
| 🔒 **Secure Storage**          | Almacenamiento seguro          |

---

# 🎯 Al terminar

JWT permite identificar usuarios en conexiones WebSocket enviando un token durante el proceso inicial de conexión.

### 🔄 Flujo:

```text id="s6m9qx"
Login

↓

Generate JWT

↓

WebSocket Connection

↓

Send Token

↓

Validate Token

↓

Connection Accepted
```
