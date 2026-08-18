# 🔐 01 — Authentication

> 💡 **¿Cómo sabe el servidor quién está conectado?**

Una conexión WebSocket necesita identificar al usuario para saber quién está enviando y recibiendo información durante una comunicación persistente.

---

## 📚 Índice

- [🔐 01 — Authentication](#-01--authentication)
  - [📚 Índice](#-índice)
- [1️⃣ What is Authentication? 🔑](#1️⃣-what-is-authentication-)
- [2️⃣ Authentication vs HTTP 🌐](#2️⃣-authentication-vs-http-)
    - [🔄 Flujo](#-flujo)
- [3️⃣ Authentication in WebSockets 🔌](#3️⃣-authentication-in-websockets-)
    - [🔄 Flujo](#-flujo-1)
- [4️⃣ User Identity 👤](#4️⃣-user-identity-)
    - [Permite conocer](#permite-conocer)
    - [Ejemplo](#ejemplo)
- [5️⃣ Connection Authentication 🔒](#5️⃣-connection-authentication-)
    - [🔄 Proceso](#-proceso)
- [6️⃣ Authentication Flow 🔄](#6️⃣-authentication-flow-)
    - [🔄 Flujo general](#-flujo-general)
- [7️⃣ Public vs Private Connections 🌐🔒](#7️⃣-public-vs-private-connections-)
  - [🌐 Public Connection](#-public-connection)
  - [🔒 Private Connection](#-private-connection)
- [8️⃣ Anonymous Connections 👤](#8️⃣-anonymous-connections-)
    - [Ejemplo](#ejemplo-1)
- [9️⃣ Secure WebSocket Connections 🛡️](#9️⃣-secure-websocket-connections-️)
    - [Ejemplo](#ejemplo-2)
- [🔟 Authentication Strategies 🔑](#-authentication-strategies-)
    - [Ejemplos](#ejemplos)
- [👤 Authentication Example](#-authentication-example)
    - [🔄 Flujo](#-flujo-2)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)
    - [🔄 Flujo](#-flujo-3)

# 1️⃣ What is Authentication? 🔑

La **Authentication** es el proceso de verificar la identidad de un usuario.

> 💡 Permite responder:

```text id="m7q3xp"
Who is this user?
```

La autenticación utiliza información como:

```text id="q8m4vx"
Credentials

Tokens

Login Information
```

---

# 2️⃣ Authentication vs HTTP 🌐

En HTTP, la autenticación ocurre normalmente en cada request.

### 🔄 Flujo

```text id="p5m2qx"
Request

   ↓

Authentication

   ↓

Response
```

> 💡 Cada request puede incluir credenciales.

---

# 3️⃣ Authentication in WebSockets 🔌

En WebSocket, la autenticación ocurre normalmente al establecer la conexión.

### 🔄 Flujo

```text id="x7m3qp"
Connection

   ↓

Authentication

   ↓

Persistent Communication
```

> 💡 Después de validar al usuario, la conexión permanece abierta.

---

# 4️⃣ User Identity 👤

La identidad representa quién es el usuario conectado.

### Permite conocer

```text id="n6m8qx"
User

Connection

Permissions
```

### Ejemplo

```text id="k4q9mp"
User A

        ↓

WebSocket Connection

        ↓

Server
```

---

# 5️⃣ Connection Authentication 🔒

La autenticación de conexión ocurre cuando un cliente intenta establecer un WebSocket.

### 🔄 Proceso

```text id="v8m3qx"
Client Connects

        ↓

Send Credentials

        ↓

Server Validates

        ↓

Connection Accepted
```

---

# 6️⃣ Authentication Flow 🔄

### 🔄 Flujo general

```text id="r5m8qx"
Client

    |

    | Connect + Credentials

    |

    ▼

WebSocket Server

    |

    | Validate User

    |

    ▼

Authenticated Connection
```

---

# 7️⃣ Public vs Private Connections 🌐🔒

Existen diferentes tipos de conexiones.

## 🌐 Public Connection

No requiere autenticación.

```text id="t6m2qx"
Client

   ↓

WebSocket Server

   ↓

Connection
```

---

## 🔒 Private Connection

Requiere identificar al usuario.

```text id="x3q8mv"
Client

   ↓

Credentials

   ↓

Authenticated Connection
```

---

# 8️⃣ Anonymous Connections 👤

Una conexión anónima no está asociada a un usuario identificado.

### Ejemplo

```text id="a7m4qp"
Anonymous User

        ↓

WebSocket Connection
```

> ⚠️ No tiene identidad verificada.

---

# 9️⃣ Secure WebSocket Connections 🛡️

Las conexiones seguras protegen la comunicación entre cliente y servidor.

### Ejemplo

```text id="b6n9mx"
Secure Connection

        ↓

Protected Communication
```

---

# 🔟 Authentication Strategies 🔑

Existen diferentes estrategias para autenticar usuarios.

### Ejemplos

```text id="c8m4qx"
Login

Token

Credentials

Secure Connection
```

---

# 👤 Authentication Example

### 🔄 Flujo

```text id="h5m8qx"
User Login

      ↓

Receive Token

      ↓

Open WebSocket

      ↓

Server validates user

      ↓

Connection accepted
```

---

# 🧠 Conceptos principales

| Concepto               | Significado                              |
| ---------------------- | ---------------------------------------- |
| 👤 Identity            | Identidad del usuario                    |
| 🔑 Credentials         | Información usada para validar identidad |
| 🔐 Login               | Proceso de identificación                |
| 🔄 Authentication Flow | Flujo de validación                      |
| 🛡️ Secure Connection  | Comunicación protegida                   |

---

# 🎯 Al terminar

En WebSocket, la autenticación ocurre normalmente al inicio de la conexión.

### 🔄 Flujo

```text id="w8p2mq"
Client

    ↓

Connect + Credentials

    ↓

Validate User

    ↓

Authenticated Connection
```

> 💡 Después de autenticarse, el servidor conoce la identidad del usuario durante la comunicación persistente.
