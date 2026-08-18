# 📄 05 — Rate Limiting 🚦

> **¿Qué pasa si un cliente envía demasiados mensajes?**

Un servidor WebSocket necesita controlar la cantidad de mensajes y conexiones que puede realizar un cliente para evitar abusos y proteger los recursos del sistema.

---

## 📚 Índice 

- [📄 05 — Rate Limiting 🚦](#-05--rate-limiting-)
  - [📚 Índice](#-índice)
- [1️⃣ What is Rate Limiting? 🚦](#1️⃣-what-is-rate-limiting-)
    - [Permite controlar:](#permite-controlar)
- [2️⃣ Why Rate Limit WebSockets? 🔌](#2️⃣-why-rate-limit-websockets-)
    - [Problema:](#problema)
    - [Resultado:](#resultado)
- [3️⃣ Message Limits 💬](#3️⃣-message-limits-)
    - [Ejemplo:](#ejemplo)
- [4️⃣ Connection Limits 🔗](#4️⃣-connection-limits-)
    - [Ejemplo:](#ejemplo-1)
- [5️⃣ Requests per Second ⏱️](#5️⃣-requests-per-second-️)
- [6️⃣ User-Based Limits 👤](#6️⃣-user-based-limits-)
- [7️⃣ IP-Based Limits 🌐](#7️⃣-ip-based-limits-)
- [8️⃣ Throttling 🐢](#8️⃣-throttling-)
    - [Ejemplo:](#ejemplo-2)
- [9️⃣ Abuse Prevention 🛡️](#9️⃣-abuse-prevention-️)
    - [Protege:](#protege)
- [🔟 Implementation Strategies ⚙️](#-implementation-strategies-️)
    - [Ejemplo:](#ejemplo-3)
- [🔄 Rate Limiting Flow](#-rate-limiting-flow)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)


# 1️⃣ What is Rate Limiting? 🚦

**Rate Limiting** es una técnica que limita la cantidad de acciones que un cliente puede realizar durante un periodo de tiempo.

### Permite controlar:

| Recursos    |
| ----------- |
| Messages    |
| Connections |
| Requests    |

**Ejemplo:**

```text
100 messages / minute
```

---

# 2️⃣ Why Rate Limit WebSockets? 🔌

Las conexiones WebSocket permanecen abiertas y permiten enviar mensajes continuamente.

Un cliente puede abusar enviando demasiados mensajes.

### Problema:

```text
Client

send()

send()

send()

send()

send()
```

### Resultado:

```text
CPU ↑

Memory ↑

Performance ↓
```

> ⚠️ **Warning**
>
> Un cliente puede abusar enviando demasiados mensajes.

---

# 3️⃣ Message Limits 💬

El servidor puede limitar la cantidad de mensajes que un cliente puede enviar.

### Ejemplo:

```text
Maximum:

100 messages per minute
```

Si supera el límite:

```text
Message Rejected
```

---

# 4️⃣ Connection Limits 🔗

También se pueden limitar la cantidad de conexiones activas.

### Ejemplo:

```text
Maximum:

5 connections per user
```

Evita:

```text
Too many open connections
```

---

# 5️⃣ Requests per Second ⏱️

Aunque WebSocket utiliza mensajes, se puede medir la frecuencia de envío.

**Ejemplo:**

```text
50 messages / second
```

Permite detectar clientes que generan demasiado tráfico.

---

# 6️⃣ User-Based Limits 👤

El límite puede aplicarse por usuario.

**Ejemplo:**

```text
User A

100 messages/min
```

> 💡 **Tip**
>
> Cada usuario tiene su propia cuota.

---

# 7️⃣ IP-Based Limits 🌐

El límite también puede aplicarse utilizando la dirección IP.

**Ejemplo:**

```text
192.168.1.1

50 connections
```

Ayuda a bloquear abusos desde una misma fuente.

---

# 8️⃣ Throttling 🐢

**Throttling** consiste en reducir o controlar la velocidad a la que un cliente puede realizar acciones.

### Ejemplo:

```text
Client sends too fast

        ↓

Slow down messages

        ↓

Protect Server
```

---

# 9️⃣ Abuse Prevention 🛡️

Rate Limiting ayuda a prevenir:

```text
Spam
```

```text
Message Flooding
```

```text
Resource Exhaustion
```

### Protege:

| Resources |
| --------- |
| CPU       |
| Memory    |
| Network   |

---

# 🔟 Implementation Strategies ⚙️

Las estrategias pueden aplicarse en diferentes niveles:

```text
User

↓

IP

↓

Connection

↓

Message
```

### Ejemplo:

```text
Check Limit

      ↓

Allow Message

      ↓

Reject or Throttle
```

---

# 🔄 Rate Limiting Flow

```text
Client

      |

      | send(message)

      ▼

WebSocket Server

      |

      | Check Rate Limit

      ▼

Allowed?

   /       \

 YES       NO

  |         |

Process   Reject
Message   Message
```

---

# 🧠 Conceptos principales

| Concepto                 | Significado                   |
| ------------------------ | ----------------------------- |
| 🚦 **Rate Limit**        | Límite de acciones permitidas |
| 🐢 **Throttle**          | Reducir velocidad de acciones |
| 🛡️ **Abuse Prevention** | Evitar uso malicioso          |
| 📊 **Quota**             | Cantidad máxima permitida     |

---

# 🎯 Al terminar

Debes poder explicar:

**Rate Limiting controla cuántos mensajes o conexiones puede realizar un cliente para evitar abusos y proteger el servidor WebSocket.**

```text
Too many messages

↓

Server Overload

↓

Rate Limiting

↓

Protected System
```

> 🎯 **Remember**
>
> Rate Limiting ayuda a evitar abusos y proteger los recursos del servidor WebSocket.
