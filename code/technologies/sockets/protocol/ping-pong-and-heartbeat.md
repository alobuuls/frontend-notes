# ❤️ 06 — Ping Pong and Heartbeat

> **¿Cómo sabemos si una conexión sigue funcionando?**

Una conexión WebSocket puede permanecer abierta durante mucho tiempo, pero eso no significa que siempre esté funcionando correctamente.

Para comprobar que una conexión sigue activa, WebSocket utiliza un mecanismo llamado:

```text id="7m5p8x"
Heartbeat
```

---

## ❤️ Índice

- [❤️ 06 — Ping Pong and Heartbeat](#️-06--ping-pong-and-heartbeat)
  - [❤️ Índice](#️-índice)
- [1️⃣ Why Heartbeat Exists? ❤️](#1️⃣-why-heartbeat-exists-️)
  - [¿Por qué existe Heartbeat?](#por-qué-existe-heartbeat)
    - [❌ Sin Heartbeat](#-sin-heartbeat)
    - [✅ Con Heartbeat](#-con-heartbeat)
- [2️⃣ Ping Frames 📡](#2️⃣-ping-frames-)
    - [🔄 Flujo](#-flujo)
    - [💬 Ejemplo](#-ejemplo)
- [3️⃣ Pong Frames 📡](#3️⃣-pong-frames-)
    - [🔄 Flujo](#-flujo-1)
- [4️⃣ Connection Health 💚](#4️⃣-connection-health-)
    - [💚 Ejemplo](#-ejemplo-1)
- [5️⃣ Dead Connections 💀](#5️⃣-dead-connections-)
    - [❌ Ejemplo](#-ejemplo-2)
- [6️⃣ Timeouts ⏳](#6️⃣-timeouts-)
    - [🔄 Ejemplo](#-ejemplo-3)
    - [🔒 Flujo](#-flujo-2)
- [7️⃣ Keep Alive Mechanism 🔄](#7️⃣-keep-alive-mechanism-)
    - [🔄 Flujo](#-flujo-3)
- [8️⃣ Server Heartbeat 🖥️](#8️⃣-server-heartbeat-️)
    - [📌 Ejemplo](#-ejemplo-4)
- [9️⃣ Client Heartbeat 🖥️](#9️⃣-client-heartbeat-️)
- [🔄 Heartbeat Flow](#-heartbeat-flow)
- [🧠 Problema que resuelve](#-problema-que-resuelve)
  - [❌ Sin Heartbeat](#-sin-heartbeat-1)
  - [✅ Con Heartbeat](#-con-heartbeat-1)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)
    - [💚 Flujo normal](#-flujo-normal)
    - [❌ Sin respuesta](#-sin-respuesta)

# 1️⃣ Why Heartbeat Exists? ❤️

## ¿Por qué existe Heartbeat?

El **Heartbeat** existe para verificar que una conexión WebSocket sigue viva.

Una conexión puede parecer abierta, pero realmente puede haber problemas como:

* 🌐 Fallos de red.
* 🔌 Cliente desconectado.
* 🖥️ Servidor inaccesible.
* ⏳ Conexiones abandonadas.

### ❌ Sin Heartbeat

```text id="4q8nm2"
Client

   |

   |

   X

Network broken

   |

Server thinks connection exists
```

> ⚠️ El servidor cree que la conexión sigue activa aunque el cliente ya no esté disponible.

### ✅ Con Heartbeat

```text id="6x2kpm"
Ping

 ↓

No Pong

 ↓

Timeout

 ↓

Close connection
```

---

# 2️⃣ Ping Frames 📡

Un **Ping Frame** es un tipo de Control Frame utilizado para comprobar si una conexión sigue activa.

Su opcode es:

```text id="m5x9qz"
0x9
```

### 🔄 Flujo

```text id="t7k3vp"
Client

Ping

   ↓

Server
```

Cuando un lado envía un Ping, espera recibir una respuesta.

### 💬 Ejemplo

```text id="r8m4nw"
"¿Sigues conectado?"
```

---

# 3️⃣ Pong Frames 📡

Un **Pong Frame** es la respuesta a un Ping.

Su opcode es:

```text id="q2n7mx"
0xA
```

### 🔄 Flujo

```text id="v6p3ks"
Client                     Server


   │        Ping             │

   │────────────────────────►│


   │        Pong             │

   │◄────────────────────────│
```

Recibir un Pong indica:

```text id="x8m4qp"
Connection is alive
```

---

# 4️⃣ Connection Health 💚

El heartbeat permite conocer el estado de una conexión.

| Estado                    | Significado                        |
| ------------------------- | ---------------------------------- |
| 🟢 **Healthy Connection** | La conexión responde correctamente |
| 🟡 **Waiting**            | Se espera respuesta                |
| 🔴 **Dead Connection**    | No responde                        |

### 💚 Ejemplo

```text id="p9k4vx"
Ping

 ↓

Pong received

 ↓

Connection healthy
```

---

# 5️⃣ Dead Connections 💀

Una **Dead Connection** es una conexión que parece abierta, pero ya no funciona.

Ejemplos:

* Usuario perdió internet.
* Aplicación cerrada inesperadamente.
* Problema de red.

### ❌ Ejemplo

```text id="c5q8mw"
Client

      X

Server
```

El servidor puede seguir pensando:

```text id="z4n7kp"
"El cliente sigue conectado"
```

Aunque realmente no existe comunicación.

---

# 6️⃣ Timeouts ⏳

Un **timeout** ocurre cuando no llega una respuesta dentro de un tiempo determinado.

### 🔄 Ejemplo

```text id="h7m2qs"
Ping

 ↓

Wait

 ↓

No Pong

 ↓

Timeout
```

Cuando ocurre un timeout:

* La conexión se considera perdida.
* Puede cerrarse la conexión WebSocket.

### 🔒 Flujo

```text id="w8p3nx"
Ping

 ↓

No response

 ↓

Timeout

 ↓

Close connection
```

---

# 7️⃣ Keep Alive Mechanism 🔄

El heartbeat funciona como un mecanismo de:

```text id="d3m9qx"
Keep Alive
```

Su objetivo es mantener y verificar la conexión.

### 🔄 Flujo

```text id="b6q8mp"
Connection Open

        ↓

Send Ping periodically

        ↓

Receive Pong

        ↓

Connection stays alive
```

> 💡 Esto evita que conexiones inactivas permanezcan abiertas indefinidamente.

---

# 8️⃣ Server Heartbeat 🖥️

En un **Server Heartbeat**, el servidor envía Ping periódicamente al cliente.

```text id="k4m8vz"
Server

Ping

   ↓

Client

Pong

   ↓

Server
```

El servidor puede comprobar:

* Qué clientes siguen conectados.
* Qué conexiones deben cerrarse.

### 📌 Ejemplo

```text id="n6p2wx"
Every 30 seconds:

Server sends Ping

Client responds Pong
```

---

# 9️⃣ Client Heartbeat 🖥️

En un **Client Heartbeat**, el cliente inicia la verificación.

```text id="x7m3qp"
Client

Ping

   ↓

Server

Pong

   ↓

Client
```

> 💡 Puede utilizarse para confirmar que el servidor sigue disponible.

---

# 🔄 Heartbeat Flow

```text id="a5n8mv"
Client                     Server


   │                         │

   │        Ping             │

   │────────────────────────►│

   │                         │

   │        Pong             │

   │◄────────────────────────│

   │                         │
```

---

# 🧠 Problema que resuelve

## ❌ Sin Heartbeat

```text id="e4m7qs"
Client

   |

   |

   X

Network broken

   |

Server thinks connection exists
```

**Problema:**

El servidor mantiene una conexión que realmente está caída.

---

## ✅ Con Heartbeat

```text id="p8x2mn"
Ping

 ↓

No Pong

 ↓

Timeout

 ↓

Close connection
```

**Solución:**

El sistema detecta conexiones muertas y libera recursos.

---

# 🧠 Conceptos principales

| Concepto                 | Significado                                 |
| ------------------------ | ------------------------------------------- |
| ❤️ **Heartbeat**         | Mecanismo para verificar conexiones activas |
| 📡 **Ping Frame**        | Mensaje enviado para comprobar conexión     |
| 📡 **Pong Frame**        | Respuesta al Ping                           |
| 💚 **Connection Health** | Estado de una conexión                      |
| 💀 **Dead Connection**   | Conexión abierta pero sin funcionamiento    |
| ⏳ **Timeout**            | Tiempo máximo de espera antes de cerrar     |
| 🔄 **Keep Alive**        | Mantener una conexión activa                |

---

# 🎯 Al terminar

WebSocket utiliza **Ping y Pong Frames** para comprobar que una conexión sigue viva.

### 💚 Flujo normal

```text id="m8q4xp"
Ping

 ↓

Pong

 ↓

Connection healthy
```

### ❌ Sin respuesta

```text id="n3k7mz"
Ping

 ↓

No Pong

 ↓

Timeout

 ↓

Close connection
```

> 🧠 El **Heartbeat** permite detectar conexiones muertas y mantener conexiones WebSocket confiables.
