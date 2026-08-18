# 📄 03 — Sticky Sessions 🍪

> 💡 **¿Qué ocurre si cada mensaje llega a un servidor diferente?**
>
> En una arquitectura con múltiples servidores WebSocket, un cliente necesita mantener su conexión con el mismo servidor para evitar problemas de estado y comunicación.

---

# 📚 Índice 

- [📄 03 — Sticky Sessions 🍪](#-03--sticky-sessions-)
- [📚 Índice](#-índice)
- [1️⃣ What are Sticky Sessions? 🍪](#1️⃣-what-are-sticky-sessions-)
- [2️⃣ Why WebSockets Need Stickiness? 🔗](#2️⃣-why-websockets-need-stickiness-)
- [3️⃣ Session Affinity 🔒](#3️⃣-session-affinity-)
- [4️⃣ Load Balancer Routing 🔀](#4️⃣-load-balancer-routing-)
    - [❌ Sin afinidad](#-sin-afinidad)
    - [✅ Con Sticky Sessions](#-con-sticky-sessions)
- [5️⃣ Problems Without Sticky Sessions ⚠️](#5️⃣-problems-without-sticky-sessions-️)
- [6️⃣ Cookie Based Affinity 🍪](#6️⃣-cookie-based-affinity-)
- [7️⃣ IP Based Affinity 🌐](#7️⃣-ip-based-affinity-)
- [8️⃣ Limitations ⚠️](#8️⃣-limitations-️)
- [9️⃣ When to Use Sticky Sessions? ✅](#9️⃣-when-to-use-sticky-sessions-)
- [🔄 Sticky Session Flow](#-sticky-session-flow)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)

# 1️⃣ What are Sticky Sessions? 🍪

**Sticky Sessions** es una técnica donde el Load Balancer mantiene un cliente conectado siempre al mismo servidor.

> 🏷️ **También se conoce como:**

```text id="sticky1"
Session Affinity
```

**Flujo:**

```text id="sticky2"
Client

   ↓

Load Balancer

   ↓

Same Server
```

---

# 2️⃣ Why WebSockets Need Stickiness? 🔗

WebSocket mantiene una conexión persistente con un servidor específico.

```text id="connect"
Client

      ↓

Server A

      ↓

WebSocket Connection
```

> 🔒 La conexión queda asociada a ese servidor.

---

# 3️⃣ Session Affinity 🔒

**Session Affinity** significa que las conexiones del mismo cliente se dirigen al mismo servidor.

```text id="affinity"
Client A

↓

Server A
```

**Siempre:**

```text id="same"
Client A

↓

Server A
```

---

# 4️⃣ Load Balancer Routing 🔀

El Load Balancer decide dónde enviar cada conexión.

### ❌ Sin afinidad

```text id="noroute"
Client

↓

Load Balancer

↓

Server A

Server B

Server C
```

### ✅ Con Sticky Sessions

```text id="route"
Client

↓

Load Balancer

↓

Server A

Always Server A
```

---

# 5️⃣ Problems Without Sticky Sessions ⚠️

Sin Sticky Sessions, una conexión puede terminar llegando a diferentes servidores.

**Primera conexión:**

```text id="stickybad"
Client

   |

Load Balancer

   |

Server A
```

**Luego:**

```text id="wrong"
Client

   |

Load Balancer

   |

Server B
```

> ⚠️ **Problema:**

```text id="problem"
Server B

↓

Does not know the connection
```

---

# 6️⃣ Cookie Based Affinity 🍪

El Load Balancer puede utilizar cookies para recordar el servidor asignado.

```text id="cookie"
Client

↓

Cookie

↓

Load Balancer

↓

Server Selection
```

---

# 7️⃣ IP Based Affinity 🌐

Otra opción es utilizar la dirección IP del cliente para decidir el servidor.

```text id="ip"
Client IP

↓

Hash

↓

Server Assignment
```

---

# 8️⃣ Limitations ⚠️

Sticky Sessions ayudan con el routing, pero no solucionan todos los problemas.

```text id="failure"
Server A dies

        ↓

Client disconnected
```

> ⚠️ Si el servidor desaparece, las conexiones activas se pierden.

---

# 9️⃣ When to Use Sticky Sessions? ✅

Sticky Sessions son útiles cuando:

```text id="use"
WebSocket Connection

        ↓

Requires Same Server
```

> 💡 Especialmente cuando el estado de la conexión vive en memoria del servidor.

---

# 🔄 Sticky Session Flow

```text id="flow"
Client

      |

      ▼

Load Balancer

      |

      ▼

Server A


      |

      ▼


Always Server A
```

---

# 🧠 Conceptos principales

| Concepto                | Significado                              |
| ----------------------- | ---------------------------------------- |
| 🍪 **Sticky Session**   | Mantener un cliente en el mismo servidor |
| 🔒 **Session Affinity** | Afinidad entre cliente y servidor        |
| 🔀 **Routing**          | Decidir dónde enviar conexiones          |
| ⚖️ **Load Balancing**   | Distribución de tráfico                  |

---

# 🎯 Al terminar

> **Sticky Sessions permiten que un cliente WebSocket permanezca conectado al mismo servidor después de establecer la conexión, evitando problemas cuando existen múltiples servidores.**

```text id="summary"
Client

↓

Load Balancer

↓

Server A

↓

Persistent Connection
```
