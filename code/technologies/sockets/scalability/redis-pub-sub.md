# 📄 04 — Multiple WebSocket Servers 🌐

> 💡 **¿Cómo se comunican servidores independientes?**
>
> Cuando una aplicación WebSocket crece, puede necesitar múltiples servidores para manejar más conexiones.
>
> El problema aparece cuando cada servidor funciona de forma independiente y no conoce las conexiones existentes en otros servidores.

---

## 📚 Índice 

- [📄 04 — Multiple WebSocket Servers 🌐](#-04--multiple-websocket-servers-)
  - [📚 Índice](#-índice)
- [1️⃣ Multiple Server Architecture 🏗️](#1️⃣-multiple-server-architecture-️)
- [2️⃣ Independent Connections 🔗](#2️⃣-independent-connections-)
- [3️⃣ Shared State Problem 🧩](#3️⃣-shared-state-problem-)
- [4️⃣ User Distribution 👥](#4️⃣-user-distribution-)
- [5️⃣ Message Routing 📩](#5️⃣-message-routing-)
- [6️⃣ Server Communication 🔄](#6️⃣-server-communication-)
- [7️⃣ Synchronization Problems 🔁](#7️⃣-synchronization-problems-)
- [8️⃣ Distributed Systems 🌐](#8️⃣-distributed-systems-)
- [9️⃣ Real Examples 💡](#9️⃣-real-examples-)
- [🔄 Multiple WebSocket Servers Flow](#-multiple-websocket-servers-flow)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)


# 1️⃣ Multiple Server Architecture 🏗️

Una arquitectura con múltiples servidores distribuye clientes entre diferentes instancias WebSocket.

**Ejemplo:**

```text id="multi"
          Client A

              |

           Server 1





          Client B

              |

           Server 2
```

> 💡 Cada servidor administra sus propias conexiones.

---

# 2️⃣ Independent Connections 🔗

Cada servidor mantiene sus propias conexiones WebSocket activas.

**Ejemplo:**

```text id="independent"
Server 1

↓

Client A
```

Y:

```text id="independent2"
Server 2

↓

Client B
```

> 🔹 Los servidores funcionan de manera independiente.

---

# 3️⃣ Shared State Problem 🧩

Cada servidor conoce únicamente las conexiones que administra.

**Problema:**

```text id="state"
Server 1

knows Client A
```

Pero:

```text id="state2"
Server 2

knows Client B
```

> ⚠️ Server 1 no tiene información sobre Server 2.

---

# 4️⃣ User Distribution 👥

Los usuarios pueden estar distribuidos entre diferentes servidores.

**Ejemplo:**

| Usuario      | Estado                 |
| ------------ | ---------------------- |
| 👤 Usuario A | `Connected → Server 1` |
| 👤 Usuario B | `Connected → Server 2` |

---

# 5️⃣ Message Routing 📩

Cuando un usuario envía un mensaje, el servidor necesita saber dónde está el receptor.

**Ejemplo: Usuario A envía mensaje a B:**

```text id="routing"
Server 1

    ?

Where is B?
```

> ❓ El servidor necesita encontrar la conexión correcta.

---

# 6️⃣ Server Communication 🔄

Los servidores necesitan una forma de comunicarse entre ellos.

**Ejemplo:**

```text id="communication"
Server 1

      ↓

Shared Communication Layer

      ↓

Server 2
```

> 💡 Permite enviar información entre servidores.

---

# 7️⃣ Synchronization Problems 🔁

Con múltiples servidores aparecen problemas de sincronización.

**Ejemplos:**

```text id="sync"
User State

Connections

Messages
```

> ⚠️ Todos los servidores necesitan mantener información consistente.

---

# 8️⃣ Distributed Systems 🌐

Múltiples servidores WebSocket forman parte de un sistema distribuido.

**Características:**

```text id="distributed"
Multiple Servers

Shared Information

Communication Between Nodes
```

---

# 9️⃣ Real Examples 💡

**Ejemplo:**

```text id="example"
User A

↓

Server 1


User B

↓

Server 2
```

**A envía mensaje a B:**

```text id="message"
Server 1

↓

Find User B

↓

Server 2

↓

Deliver Message
```

---

# 🔄 Multiple WebSocket Servers Flow

```text id="flow"
Client A

      |

      ▼

 Server 1


      |

      ▼

Shared Communication Layer


      |

      ▼


 Server 2


      |

      ▼

Client B
```

---

# 🧠 Conceptos principales

| Concepto                     | Significado                                  |
| ---------------------------- | -------------------------------------------- |
| 🌐 **Distributed Systems**   | Sistema formado por múltiples servidores     |
| 🧩 **Shared State**          | Información compartida entre servidores      |
| 📩 **Message Routing**       | Enrutamiento de mensajes al destino correcto |
| 🔄 **Synchronization**       | Mantener datos consistentes                  |
| 🗣️ **Server Communication** | Comunicación entre servidores                |

---

# 🎯 Al terminar

> **Cuando existen múltiples servidores WebSocket, cada servidor conoce solamente sus propias conexiones. Para enviar mensajes entre usuarios distribuidos se necesita una capa de comunicación compartida.**

```text id="summary"
Server 1

↓

Shared Communication Layer

↓

Server 2
```
