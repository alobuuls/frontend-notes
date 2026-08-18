# 📄 07 — Connection Limits 🔗

> **¿Qué pasa si un atacante abre miles de conexiones WebSocket?**

Un servidor WebSocket necesita controlar la cantidad de conexiones activas para proteger sus recursos y evitar sobrecarga.

---

## 📚 Índice

- [📄 07 — Connection Limits 🔗](#-07--connection-limits-)
  - [📚 Índice](#-índice)
- [1️⃣ What are Connection Limits? 🔗](#1️⃣-what-are-connection-limits-)
    - [Permiten controlar:](#permiten-controlar)
- [2️⃣ Why Limit Connections? 🛡️](#2️⃣-why-limit-connections-️)
- [3️⃣ Maximum Connections 📊](#3️⃣-maximum-connections-)
- [4️⃣ Per User Limits 👤](#4️⃣-per-user-limits-)
- [5️⃣ Per IP Limits 🌐](#5️⃣-per-ip-limits-)
- [6️⃣ Resource Management ⚙️](#6️⃣-resource-management-️)
    - [El servidor debe administrar:](#el-servidor-debe-administrar)
    - [Objetivo:](#objetivo)
- [7️⃣ Connection Cleanup 🧹](#7️⃣-connection-cleanup-)
    - [🔄 Flujo:](#-flujo)
- [8️⃣ DoS Protection 🛡️](#8️⃣-dos-protection-️)
    - [Problema:](#problema)
    - [Protección:](#protección)
- [9️⃣ Server Capacity 🖥️](#9️⃣-server-capacity-️)
    - [Depende de:](#depende-de)
- [🔟 Scaling Considerations 📈](#-scaling-considerations-)
    - [Ejemplo:](#ejemplo)
- [🔄 Connection Limit Flow](#-connection-limit-flow)
- [🧹 Connection Cleanup Flow](#-connection-cleanup-flow)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)

# 1️⃣ What are Connection Limits? 🔗

**Connection Limits** son reglas que establecen cuántas conexiones WebSocket pueden mantenerse abiertas.

### Permiten controlar:

| Control              |
| -------------------- |
| Maximum Connections  |
| Active Connections   |
| Connections per User |

---

# 2️⃣ Why Limit Connections? 🛡️

Una conexión WebSocket permanece abierta y consume recursos del servidor.

Muchas conexiones pueden provocar:

```text id="j5x8mv"
Memory ↑

CPU ↑

Server Overload
```

> ⚠️ **Warning**
>
> Muchas conexiones pueden provocar sobrecarga del servidor.

---

# 3️⃣ Maximum Connections 📊

El servidor puede definir un número máximo de conexiones permitidas.

**Ejemplo:**

```text id="p4y8ks"
Maximum:

10000 connections
```

Cuando se alcanza el límite:

```text id="q2z7na"
New Connection

↓

Rejected
```

---

# 4️⃣ Per User Limits 👤

También se pueden limitar conexiones por usuario.

**Ejemplo:**

```text id="v9d2lm"
User:

Maximum 5 connections
```

Evita que un solo usuario consuma demasiados recursos.

---

# 5️⃣ Per IP Limits 🌐

El servidor puede limitar conexiones según la dirección IP.

**Ejemplo:**

```text id="r6m1op"
192.168.1.1

Maximum:

50 connections
```

Ayuda a detectar comportamientos abusivos desde una misma fuente.

---

# 6️⃣ Resource Management ⚙️

Cada conexión utiliza recursos del servidor.

### El servidor debe administrar:

| Resources      |
| -------------- |
| Memory         |
| CPU            |
| Network        |
| Active Sockets |

### Objetivo:

```text id="u4n8qx"
Keep Resources Under Control
```

---

# 7️⃣ Connection Cleanup 🧹

Las conexiones que ya no son útiles deben eliminarse.

### 🔄 Flujo:

```text id="h2m7rz"
Detect

↓

Close

↓

Free Resources
```

Evita mantener conexiones abandonadas.

> 🧹 **Tip**
>
> Las conexiones que ya no son útiles deben eliminarse.

---

# 8️⃣ DoS Protection 🛡️

Los límites de conexiones ayudan a proteger contra ataques de denegación de servicio (**DoS**).

### Problema:

```text id="w5k9pv"
Attacker

    |

    |

100000 connections

    |

    |

Server Overload
```

### Protección:

```text id="m8c2yd"
Connection Limits

↓

Reduced Impact
```

---

# 9️⃣ Server Capacity 🖥️

El servidor debe conocer cuántas conexiones puede soportar.

### Depende de:

| Recursos       |
| -------------- |
| CPU            |
| Memory         |
| Network        |
| Infrastructure |

---

# 🔟 Scaling Considerations 📈

Cuando aumenta el número de clientes, se deben considerar límites y distribución de conexiones.

### Ejemplo:

```text id="d7m4kp"
Many Connections

        ↓

Server Capacity

        ↓

Scaling Strategy
```

---

# 🔄 Connection Limit Flow

```text id="s8q1mv"
Client

      |

      | Connect

      ▼

WebSocket Server

      |

      | Check Limit

      ▼

Available?

   /        \

 YES        NO

  |          |

Accept    Reject

Connection Connection
```

---

# 🧹 Connection Cleanup Flow

```text id="e6r9qw"
Inactive Connection

        ↓

Detect

        ↓

Close

        ↓

Free Resources
```

---

# 🧠 Conceptos principales

| Concepto                   | Significado                                |
| -------------------------- | ------------------------------------------ |
| 🔗 **Connection Limit**    | Límite de conexiones permitidas            |
| 🛡️ **DoS Protection**     | Protección contra sobrecarga de conexiones |
| ⚙️ **Resource Management** | Administración de recursos del servidor    |
| ⏳ **Idle Timeout**         | Tiempo máximo sin actividad                |
| 📊 **Capacity Planning**   | Planificación de capacidad                 |

---

# 🎯 Al terminar

**Connection Limits protegen un servidor WebSocket controlando cuántas conexiones pueden existir y evitando que clientes maliciosos consuman todos los recursos.**

```text id="z4p8mt"
Too Many Connections

↓

Server Overload

↓

Connection Limits

↓

Protected Server
```

> 🎯 **Remember**
>
> Connection Limits protegen un servidor WebSocket controlando cuántas conexiones pueden existir.
