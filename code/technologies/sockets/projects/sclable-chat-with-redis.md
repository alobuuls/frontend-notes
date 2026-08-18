# 📁 05 — Scalable Chat with Redis 🚀💬

> 💡 **¿Cómo funciona un chat cuando tienes múltiples servidores WebSocket?**
>
> Un chat escalable utiliza múltiples servidores WebSocket junto con **Redis Pub/Sub** para compartir mensajes y eventos entre diferentes instancias.

---

## 📚 Índice

- [📁 05 — Scalable Chat with Redis 🚀💬](#-05--scalable-chat-with-redis-)
  - [📚 Índice](#-índice)
- [1️⃣ Scalable Architecture 🏗️](#1️⃣-scalable-architecture-️)
- [2️⃣ Multiple WebSocket Servers 🖥️](#2️⃣-multiple-websocket-servers-️)
- [3️⃣ Load Balancer ⚖️](#3️⃣-load-balancer-️)
- [4️⃣ Redis Pub/Sub 📡](#4️⃣-redis-pubsub-)
- [5️⃣ Message Broadcasting 📢](#5️⃣-message-broadcasting-)
    - [Flujo:](#flujo)
- [6️⃣ Shared State 🔄](#6️⃣-shared-state-)
- [7️⃣ User Sessions 👤](#7️⃣-user-sessions-)
- [8️⃣ Horizontal Scaling 📈](#8️⃣-horizontal-scaling-)
- [9️⃣ Fault Handling ⚠️](#9️⃣-fault-handling-️)
- [🔟 Production Deployment 🚀](#-production-deployment-)
- [✨ Features](#-features)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)

---

# 1️⃣ Scalable Architecture 🏗️

Una arquitectura escalable permite que un chat funcione con múltiples servidores WebSocket.

```text id="scalable"
Clients

     |

     ▼

Load Balancer

     |

 ┌───┴───┐

 ▼       ▼

WS-1   WS-2

     |

   Redis
```

> 💡 **Tip:** Los usuarios pueden estar conectados a diferentes servidores y seguir comunicándose.

---

# 2️⃣ Multiple WebSocket Servers 🖥️

Cuando aumenta la cantidad de usuarios, se agregan más servidores WebSocket.

```text id="multiple-servers"
Users

  |

  ├── Server A

  |

  └── Server B
```

> 💡 **Tip:** Cada servidor administra sus propias conexiones WebSocket.

---

# 3️⃣ Load Balancer ⚖️

El **Load Balancer** distribuye las conexiones entre los servidores disponibles.

```text id="load-balancer"
Users

   |

   ▼

Load Balancer

   |

 /       \

▼         ▼

Server A  Server B
```

> 🎯 **Objetivo:** Permite repartir usuarios entre múltiples servidores.

---

# 4️⃣ Redis Pub/Sub 📡

**Redis Pub/Sub** permite que diferentes servidores compartan mensajes y eventos.

```text id="redis"
Server A

    |

 Publish Message

    |

    ▼

Redis Pub/Sub

    |

    ▼

Server B
```

> 💡 **Tip:** Redis funciona como medio de comunicación entre servidores WebSocket.

---

# 5️⃣ Message Broadcasting 📢

El servidor puede enviar mensajes a otros servidores mediante Redis.

### Flujo:

```text id="message-flow"
User A

   ↓

Server A

   ↓

Publish Message

   ↓

Redis

   ↓

Server B

   ↓

User B
```

> 💡 **Tip:** Esto permite que usuarios conectados a diferentes servidores reciban mensajes.

---

# 6️⃣ Shared State 🔄

Los servidores necesitan compartir información para funcionar como un único sistema.

```text id="shared-state"
Server A

     \

      Redis

     /

Server B
```

> 💡 **Tip:** **Shared State** permite mantener información común entre diferentes servidores.

---

# 7️⃣ User Sessions 👤

Las sesiones de usuarios deben administrarse cuando existen múltiples servidores.

```text id="sessions"
User

   ↓

Session

   ↓

WebSocket Server
```

> 💡 **Tip:** Una sesión permite identificar y mantener la información del usuario conectado.

---

# 8️⃣ Horizontal Scaling 📈

El sistema escala agregando más servidores WebSocket.

```text id="horizontal"
Server A

Server B

Server C
```

> 💡 **Tip:** **Horizontal Scaling** aumenta la capacidad agregando más instancias.

---

# 9️⃣ Fault Handling ⚠️

El sistema debe manejar fallos de servidores o conexiones.

```text id="fault"
Server Failure

      ↓

Detect Problem

      ↓

Continue Service
```

> 💡 **Tip:** **Fault Handling** permite mantener la disponibilidad cuando ocurre un problema.

---

# 🔟 Production Deployment 🚀

Una arquitectura de producción utiliza múltiples componentes.

```text id="production"
                 Clients


                    |


                    ▼


              Load Balancer


              /          \


          WS Server    WS Server


              \          /


                Redis


                  |

              Shared Events
```

> 🎯 **Objetivo:** Esta arquitectura permite ejecutar un chat preparado para producción.

---

# ✨ Features

```text id="features"
✓ Multiple servers

✓ Redis communication

✓ Rooms

✓ Authentication

✓ Reconnection

✓ Scaling
```

---

# 🧠 Conceptos principales

| Concepto                       | Significado                                          |
| ------------------------------ | ---------------------------------------------------- |
| 📈 **Horizontal Scaling**      | Agregar más servidores para aumentar capacidad       |
| 📡 **Redis Pub/Sub**           | Comunicación de mensajes entre servidores            |
| 🌐 **Distributed Systems**     | Sistema compuesto por múltiples servicios conectados |
| 📨 **Message Routing**         | Dirección y distribución de mensajes                 |
| 🚀 **Production Architecture** | Diseño preparado para ambientes reales               |

---

# 🎯 Al terminar

> **Un Scalable Chat utiliza múltiples servidores WebSocket junto con Redis Pub/Sub para compartir mensajes y eventos, permitiendo que los usuarios se comuniquen aunque estén conectados a diferentes servidores.**

```text id="summary"
                 Clients

                    |

                    ▼

              Load Balancer

              /          \

          WS Server    WS Server

              \          /

                Redis

                  |

              Shared Events
```
