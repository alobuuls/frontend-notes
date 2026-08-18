# 📄 02 — Load Balancer ⚖️

> 💡 **¿Quién decide a qué servidor se conecta cada cliente?**
>
> Un **Load Balancer** distribuye las conexiones WebSocket entre múltiples servidores para mejorar la escalabilidad y disponibilidad.

---

## 📚 Índice

- [📄 02 — Load Balancer ⚖️](#-02--load-balancer-️)
  - [📚 Índice](#-índice)
- [1️⃣ What is a Load Balancer? ⚖️](#1️⃣-what-is-a-load-balancer-️)
- [2️⃣ Load Balancing HTTP vs WebSocket 🌐](#2️⃣-load-balancing-http-vs-websocket-)
    - [🌐 HTTP](#-http)
    - [🔌 WebSocket](#-websocket)
- [3️⃣ Connection Distribution 🔀](#3️⃣-connection-distribution-)
- [4️⃣ WebSocket Upgrade Handling 🔄](#4️⃣-websocket-upgrade-handling-)
- [5️⃣ Reverse Proxy 🔁](#5️⃣-reverse-proxy-)
- [6️⃣ Health Checks ❤️](#6️⃣-health-checks-️)
- [7️⃣ Traffic Distribution 📊](#7️⃣-traffic-distribution-)
- [8️⃣ Server Failover 🛡️](#8️⃣-server-failover-️)
- [9️⃣ Cloud Load Balancers ☁️](#9️⃣-cloud-load-balancers-️)
- [🔟 Common Configurations ⚙️](#-common-configurations-️)
- [🏗️ WebSocket Load Balancer Architecture](#️-websocket-load-balancer-architecture)
- [🔄 Load Balancer Responsibilities](#-load-balancer-responsibilities)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)

# 1️⃣ What is a Load Balancer? ⚖️

Un **Load Balancer** es un componente que recibe conexiones de clientes y decide a qué servidor enviarlas.

> 🎯 **Responsabilidad principal:**

```text id="lb1"
Receive Connections

        ↓

Choose Server

        ↓

Forward Traffic
```

> 💡 Permite distribuir usuarios entre varios servidores.

---

# 2️⃣ Load Balancing HTTP vs WebSocket 🌐

HTTP y WebSocket tienen diferentes comportamientos.

### 🌐 HTTP

```text id="http"
Request

   ↓

Response
```

> 💡 Cada solicitud puede ser enviada a diferentes servidores.

### 🔌 WebSocket

```text id="ws"
Connection

   ↓

Long-lived Session
```

> 💡 La conexión permanece abierta después de establecerse.

---

# 3️⃣ Connection Distribution 🔀

El Load Balancer distribuye conexiones entre servidores disponibles.

```text id="distribution"
Clients

        |

        ▼

Load Balancer

        |

   ┌────┼────┐

   ▼    ▼    ▼

 WS-1 WS-2 WS-3
```

> 📌 Cada cliente queda conectado a un servidor específico.

---

# 4️⃣ WebSocket Upgrade Handling 🔄

Antes de crear una conexión WebSocket existe un proceso de actualización desde HTTP.

**Flujo:**

```text id="upgrade"
Client

      |

      | HTTP Upgrade Request

      ▼

Load Balancer

      |

      ▼

WebSocket Server
```

> ⚠️ El Load Balancer debe permitir y manejar este cambio de protocolo.

---

# 5️⃣ Reverse Proxy 🔁

Un Load Balancer puede funcionar como **Reverse Proxy**.

```text id="proxy"
Client

      ↓

Reverse Proxy

      ↓

Backend Server
```

> 💡 El cliente no conoce directamente los servidores internos.

---

# 6️⃣ Health Checks ❤️

El Load Balancer verifica si los servidores están funcionando correctamente.

```text id="health"
Check Server

      ↓

Healthy?

      ↓

Allow Traffic
```

Si un servidor falla:

```text id="health2"
Server Down

      ↓

Stop Sending Traffic
```

---

# 7️⃣ Traffic Distribution 📊

El tráfico se reparte entre diferentes servidores.

```text id="traffic"
Clients

        ↓

Load Balancer

        ↓

WS-1

WS-2

WS-3
```

> 🎯 Ayuda a evitar que un solo servidor soporte toda la carga.

---

# 8️⃣ Server Failover 🛡️

Si un servidor deja de funcionar, el sistema puede enviar nuevas conexiones a otros servidores.

```text id="failover"
WS-1

   X

Load Balancer

   ↓

WS-2
```

> 🟢 Mantiene la disponibilidad del sistema.

---

# 9️⃣ Cloud Load Balancers ☁️

Los proveedores cloud ofrecen Load Balancers preparados para manejar tráfico distribuido.

**Permiten:**

|    |                    |
| -- | ------------------ |
| 🔀 | Connection Routing |
| ❤️ | Health Checks      |
| 📈 | Scaling            |

---

# 🔟 Common Configurations ⚙️

Configuraciones comunes:

```text id="config"
Client

↓

Load Balancer

↓

Multiple WebSocket Servers
```

> 💡 El balanceador administra la entrada de conexiones.

---

# 🏗️ WebSocket Load Balancer Architecture

```text id="lb"
              Clients


                 |

                 ▼


           Load Balancer


          /      |      \


         ▼       ▼       ▼


      WS-1    WS-2    WS-3
```

---

# 🔄 Load Balancer Responsibilities

```text id="responsibilities"
Receive connections

        ↓

Choose server

        ↓

Forward traffic

        ↓

Monitor health
```

---

# 🧠 Conceptos principales

| Concepto                    | Significado                              |
| --------------------------- | ---------------------------------------- |
| ⚖️ **Load Balancer**        | Distribuye conexiones entre servidores   |
| 🔁 **Reverse Proxy**        | Intermediario entre cliente y servidores |
| ❤️ **Health Check**         | Verificación del estado del servidor     |
| 📊 **Traffic Distribution** | Repartición del tráfico                  |
| 🔀 **Connection Routing**   | Decidir dónde enviar una conexión        |

---

# 🎯 Al terminar

> **El Load Balancer recibe las conexiones WebSocket y decide qué servidor manejará cada cliente. El balanceo ocurre al inicio porque WebSocket mantiene una conexión larga y persistente.**

```text id="summary"
Client

↓

Load Balancer

↓

WebSocket Server

↓

Long-lived Connection
```
