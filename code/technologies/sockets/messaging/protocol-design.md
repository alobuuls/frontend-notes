# 📡 05 — Protocol Design

> 💡 **¿Cómo organizo las reglas de comunicación entre frontend y backend?**

WebSocket permite enviar mensajes entre cliente y servidor, pero la aplicación necesita definir sus propias reglas para saber qué mensajes existen, qué información contienen y cómo deben comportarse.

---

## 📚 Índice

- [📡 05 — Protocol Design](#-05--protocol-design)
  - [📚 Índice](#-índice)
- [1️⃣ What is a Communication Protocol? 📡](#1️⃣-what-is-a-communication-protocol-)
  - [¿Qué es un Communication Protocol?](#qué-es-un-communication-protocol)
    - [En WebSockets](#en-websockets)
- [2️⃣ Why Design a Protocol? 🤔](#2️⃣-why-design-a-protocol-)
    - [Sin un protocolo definido](#sin-un-protocolo-definido)
    - [Con un protocolo](#con-un-protocolo)
- [3️⃣ Message Rules 📋](#3️⃣-message-rules-)
    - [Ejemplos](#ejemplos)
    - [Flujo](#flujo)
- [4️⃣ Message Structure 🏗️](#4️⃣-message-structure-️)
    - [Ejemplo](#ejemplo)
    - [Estructura](#estructura)
- [5️⃣ Naming Conventions 🏷️](#5️⃣-naming-conventions-️)
    - [Ejemplo](#ejemplo-1)
- [6️⃣ Events ⚡](#6️⃣-events-)
    - [Ejemplos](#ejemplos-1)
- [7️⃣ Commands ⚙️](#7️⃣-commands-️)
    - [Flujo](#flujo-1)
    - [Ejemplo](#ejemplo-2)
- [8️⃣ Responses 📤](#8️⃣-responses-)
    - [Cliente envía](#cliente-envía)
    - [Servidor responde](#servidor-responde)
- [9️⃣ Versioning 🔢](#9️⃣-versioning-)
    - [Ejemplo](#ejemplo-3)
- [🔟 Protocol Documentation 📚](#-protocol-documentation-)
    - [Ejemplo](#ejemplo-4)
- [🧾 Ejemplo de protocolo](#-ejemplo-de-protocolo)
  - [Cliente → Servidor](#cliente--servidor)
  - [Servidor → Cliente](#servidor--cliente)
- [✅ Buen diseño de protocolo](#-buen-diseño-de-protocolo)
- [🔄 Protocol Flow](#-protocol-flow)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)
    - [Ejemplo](#ejemplo-5)


# 1️⃣ What is a Communication Protocol? 📡

## ¿Qué es un Communication Protocol?

Un **Communication Protocol** es un conjunto de reglas que define cómo se comunican dos sistemas.

### En WebSockets

```text id="m7q3xp"
WebSocket
    ↓
Send Messages
```

Pero la aplicación debe definir:

```text id="q8m4vx"
What messages exist?

What data they contain?

How they behave?
```

> 💡 **TIP:** WebSocket proporciona el transporte, pero la aplicación debe definir sus propias reglas de comunicación.

---

# 2️⃣ Why Design a Protocol? 🤔

Un protocolo propio permite organizar la comunicación entre frontend y backend.

### Sin un protocolo definido

```text id="p5n2mq"
Different Messages
    ↓
Different Formats
    ↓
Confusion
```

### Con un protocolo

```text id="x7m3qp"
Rules
    ↓
Consistent Communication
    ↓
Predictable Behavior
```

---

# 3️⃣ Message Rules 📋

Un protocolo define las reglas que deben seguir los mensajes.

### Ejemplos

* 🏷️ Qué tipos de mensajes existen.
* 📦 Qué datos contienen.
* 🔄 Cómo responde el servidor.

### Flujo

```text id="n6m8qx"
Message Rules
    ↓
Frontend
    ↓
Backend
```

---

# 4️⃣ Message Structure 🏗️

El protocolo define cómo se organiza cada mensaje.

### Ejemplo

```json id="k4q9mp"
{
  "type":"user.login",

  "payload":{
    "email":"test@test.com"
  }
}
```

### Estructura

```text id="v8m3qx"
Message
├── Type
└── Payload
```

---

# 5️⃣ Naming Conventions 🏷️

Los nombres de los mensajes deben seguir una regla consistente.

### Ejemplo

```text id="r5n8mq"
user.login

user.login.success

user.logout
```

> 💡 **TIP:** Esto facilita identificar acciones y eventos.

---

# 6️⃣ Events ⚡

Los **Events** representan acciones o sucesos dentro del sistema.

### Ejemplos

```text id="t6m2qx"
user.created

message.received

notification.sent
```

Representan algo que ocurrió.

---

# 7️⃣ Commands ⚙️

Los **Commands** representan acciones solicitadas por un cliente.

### Flujo

```text id="x3q8mv"
Client
    ↓
Command
    ↓
Server Action
```

### Ejemplo

```json id="a7m4qp"
{
  "type":"user.login",

  "payload":{
    "email":"test@test.com"
  }
}
```

---

# 8️⃣ Responses 📤

El servidor debe responder siguiendo el formato definido por el protocolo.

### Cliente envía

```json id="b6n9mx"
{
  "type":"user.login",

  "payload":{
    "email":"test@test.com"
  }
}
```

### Servidor responde

```json id="c8m4qx"
{
  "type":"user.login.success",

  "payload":{
    "token":"abc123"
  }
}
```

> 🔄 **TIP:** Cliente y servidor deben seguir el formato definido por el protocolo.

---

# 9️⃣ Versioning 🔢

Un protocolo puede cambiar con el tiempo, por eso necesita versiones.

### Ejemplo

```text id="h5m8qx"
Protocol v1

Protocol v2
```

Permite mantener compatibilidad cuando se agregan cambios.

---

# 🔟 Protocol Documentation 📚

Un protocolo debe estar documentado para que frontend y backend conozcan las reglas.

Debe definir:

* 🏷️ Tipos de mensajes.
* 📦 Estructura de datos.
* 🔄 Comportamiento esperado.

### Ejemplo

```text id="m3q7xp"
Message Type

Payload Format

Expected Response
```

---

# 🧾 Ejemplo de protocolo

## Cliente → Servidor

```json id="w8p2mq"
{
  "type":"user.login",

  "payload":{
    "email":"test@test.com"
  }
}
```

## Servidor → Cliente

```json id="s6m9qx"
{
  "type":"user.login.success",

  "payload":{
    "token":"abc123"
  }
}
```

---

# ✅ Buen diseño de protocolo

Un buen protocolo debe ser:

| Característica     | Significado                   |
| ------------------ | ----------------------------- |
| ✅ **Consistent**   | Mantiene reglas iguales       |
| 🔮 **Predictable** | Su comportamiento es esperado |
| 📚 **Documented**  | Tiene información clara       |
| 🔢 **Versioned**   | Permite evolucionar           |
| ✔️ **Validated**   | Verifica los datos            |

---

# 🔄 Protocol Flow

```text id="n4q8mv"
Client
    ↓
Message Format
    ↓
Server
    ↓
Response Format
```

---

# 🧠 Conceptos principales

| Concepto              | Significado                            |
| --------------------- | -------------------------------------- |
| 📡 **Protocol**       | Reglas de comunicación entre sistemas  |
| 🤝 **Contract**       | Acuerdo entre frontend y backend       |
| 📋 **Schema**         | Estructura esperada de los mensajes    |
| 🔢 **Versioning**     | Control de versiones del protocolo     |
| 🧾 **Message Format** | Forma en que se organizan los mensajes |

---

# 🎯 Al terminar

WebSocket solamente proporciona el transporte de mensajes, pero la aplicación necesita definir un protocolo propio.

Ese protocolo define:

```text id="m8q3vx"
What messages exist?

    ↓

What data they contain?

    ↓

How they behave?
```

### Ejemplo

```json id="q4m8xp"
{
  "type":"user.login",

  "payload":{
    "email":"test@test.com"
  }
}
```
