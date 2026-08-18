# 📄 03 — WebSocket vs Polling 🔄🔌

> [!TIP]
> 💡 **¿Cómo recibíamos datos en tiempo real antes de WebSocket?**
>
> Antes de WebSocket, una de las formas utilizadas para obtener actualizaciones del servidor era **Polling**, donde el cliente realizaba peticiones para comprobar si existían nuevos datos.

---

## 📚 Índice

- [📄 03 — WebSocket vs Polling 🔄🔌](#-03--websocket-vs-polling-)
  - [📚 Índice](#-índice)
- [1️⃣ What is Polling? 🔄](#1️⃣-what-is-polling-)
- [2️⃣ Short Polling 🔁](#2️⃣-short-polling-)
- [3️⃣ Long Polling ⏳](#3️⃣-long-polling-)
    - [Flujo](#flujo)
- [4️⃣ WebSocket Approach 🔌](#4️⃣-websocket-approach-)
    - [Flujo](#flujo-1)
- [5️⃣ Network Overhead 📡](#5️⃣-network-overhead-)
    - [🔄 Polling](#-polling)
    - [🔌 WebSocket](#-websocket)
- [6️⃣ Latency ⚡](#6️⃣-latency-)
    - [🔄 Polling](#-polling-1)
    - [🔌 WebSocket](#-websocket-1)
- [7️⃣ Server Load 🖥️](#7️⃣-server-load-️)
- [8️⃣ Scalability 📈](#8️⃣-scalability-)
    - [🔄 Polling](#-polling-2)
    - [🔌 WebSocket](#-websocket-2)
- [9️⃣ Use Cases 🎯](#9️⃣-use-cases-)
    - [🔄 Polling](#-polling-3)
    - [🔌 WebSocket](#-websocket-3)
- [🔟 Evolution Timeline 🕐](#-evolution-timeline-)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)

---

# 1️⃣ What is Polling? 🔄

**Polling** es una técnica donde el cliente realiza peticiones al servidor periódicamente para comprobar si existe nueva información.

```text
Client

   ↓

Request

   ↓

Server

   ↓

Response
```

> [!TIP]
> 💡 El cliente debe realizar nuevas peticiones para verificar si existen actualizaciones.

---

# 2️⃣ Short Polling 🔁

En **Short Polling**, el cliente pregunta constantemente al servidor si existe nueva información.

```text
Client:

Any update?

Server:

No


Client:

Any update?

Server:

No
```

El proceso continúa repetidamente:

```text
Client

   ↓ Request

Server

   ↓ Response

Client

   ↓ Request

Server

   ↓ Response
```

> [!WARNING]
> ⚠️ **Problema:** se generan muchas peticiones innecesarias cuando no existen nuevos datos.

---

# 3️⃣ Long Polling ⏳

En **Long Polling**, el cliente mantiene una petición abierta mientras el servidor espera hasta que exista nueva información.

```text
Client

   Request

      |

      |

Server waits

      |

Response when data exists
```

### Flujo

```text
Client

   ↓ Request

Server

   ↓

Wait

   ↓

Data exists

   ↓

Response

   ↓

Client
```

> [!TIP]
> 💡 El servidor espera antes de enviar la respuesta hasta que exista información disponible.

---

# 4️⃣ WebSocket Approach 🔌

WebSocket utiliza una conexión permanente entre cliente y servidor.

```text
Connect once

      ↓

Exchange messages
```

### Flujo

```text
Client

   ↕

WebSocket Connection

   ↕

Server
```

> [!IMPORTANT]
> 🎯 Después de establecer la conexión, ambos lados pueden intercambiar mensajes mediante la misma conexión.

---

# 5️⃣ Network Overhead 📡

**Network Overhead** representa el trabajo adicional generado por las comunicaciones.

### 🔄 Polling

```text
Request

↓

Response

↓

Request

↓

Response

↓

Request
```

> [!WARNING]
> ⚠️ Muchas peticiones generan mayor overhead de red.

### 🔌 WebSocket

```text
One Connection

      ↓

Multiple Messages
```

> [!TIP]
> 💡 Una conexión persistente reduce la necesidad de crear continuamente nuevas peticiones.

---

# 6️⃣ Latency ⚡

La **Latency** representa el tiempo que tarda la información en llegar.

### 🔄 Polling

```text
Wait

  ↓

Request

  ↓

Response
```

> [!WARNING]
> ⚠️ La información puede tardar en llegar dependiendo del momento en que se realice el siguiente polling.

### 🔌 WebSocket

```text
Server

   ↓

Message

   ↓

Client
```

> [!TIP]
> ⚡ WebSocket permite una comunicación de baja latencia mediante una conexión permanente.

---

# 7️⃣ Server Load 🖥️

Polling puede generar una carga considerable cuando existen muchas peticiones.

```text
Clients

 ↓ ↓ ↓ ↓ ↓

Requests

 ↓ ↓ ↓ ↓ ↓

Server
```

> [!WARNING]
> ⚠️ Muchas peticiones pueden aumentar el trabajo del servidor.

Con WebSocket:

```text
Clients

 ↓ ↓ ↓

Persistent Connections

       ↓

Server
```

> [!TIP]
> 💡 El servidor mantiene conexiones persistentes en lugar de recibir constantemente nuevas peticiones.

---

# 8️⃣ Scalability 📈

Cuando aumenta el número de clientes, las diferencias entre ambos modelos se vuelven más importantes.

### 🔄 Polling

```text
Many Clients

      ↓

Many Requests

      ↓

Server Load
```

### 🔌 WebSocket

```text
Many Clients

      ↓

Persistent Connections

      ↓

WebSocket Servers
```

> [!IMPORTANT]
> 🎯 WebSocket permite manejar comunicación en tiempo real mediante conexiones persistentes, aunque requiere administrar esas conexiones.

---

# 9️⃣ Use Cases 🎯

### 🔄 Polling

Puede utilizarse cuando las actualizaciones no necesitan ser inmediatas.

```text
Periodic Updates

Data Checks
```

### 🔌 WebSocket

Es adecuado para aplicaciones que necesitan comunicación en tiempo real.

```text
Chat

Gaming

Live Updates

Tracking
```

---

# 🔟 Evolution Timeline 🕐

La comunicación en tiempo real evolucionó progresivamente:

```text
Polling

    ↓

Long Polling

    ↓

WebSocket

    ↓

Modern Real-Time Systems
```

> [!TIP]
> 💡 Cada enfoque buscó mejorar la forma de obtener y distribuir información en tiempo real.

---

# 🧠 Conceptos principales

| Concepto           | Significado                                                         |
| ------------------ | ------------------------------------------------------------------- |
| 🔄 **Polling**     | Cliente realiza peticiones periódicas                               |
| ⏳ **Long Polling** | Servidor mantiene una petición abierta hasta que existe información |
| ⚡ **Latency**      | Tiempo que tarda la información en llegar                           |
| 📡 **Overhead**    | Trabajo adicional generado por las comunicaciones                   |
| ⚡ **Real-Time**    | Comunicación y actualización de información en tiempo real          |

---

# 🎯 Al terminar

> **Polling utiliza peticiones repetidas para comprobar si existen nuevos datos. Long Polling mantiene una petición abierta hasta que existe información. WebSocket utiliza una conexión permanente para intercambiar mensajes, reduciendo la necesidad de realizar múltiples peticiones.**

```text
Polling

    ↓

Long Polling

    ↓

WebSocket

    ↓

Modern Real-Time Systems
```
