# 📄 06 — Horizontal Scaling 📈

> 💡 **¿Cómo escalo WebSockets cuando crecen los usuarios?**
>
> **Horizontal Scaling** permite aumentar la capacidad de una aplicación agregando más servidores para distribuir las conexiones y la carga.

---

## 📚 Índice

- [📄 06 — Horizontal Scaling 📈](#-06--horizontal-scaling-)
  - [📚 Índice](#-índice)
- [1️⃣ What is Horizontal Scaling? 📈](#1️⃣-what-is-horizontal-scaling-)
- [2️⃣ Vertical vs Horizontal Scaling ⚖️](#2️⃣-vertical-vs-horizontal-scaling-️)
  - [⬆️ Vertical Scaling](#️-vertical-scaling)
  - [➡️ Horizontal Scaling](#️-horizontal-scaling)
    - [📊 Comparación](#-comparación)
- [3️⃣ Adding More Servers ➕](#3️⃣-adding-more-servers-)
- [4️⃣ Scaling WebSocket Connections 🔌](#4️⃣-scaling-websocket-connections-)
- [5️⃣ Shared State 🔄](#5️⃣-shared-state-)
- [6️⃣ Load Balancing ⚖️](#6️⃣-load-balancing-️)
- [7️⃣ Message Distribution 📨](#7️⃣-message-distribution-)
- [8️⃣ Cloud Scaling ☁️](#8️⃣-cloud-scaling-️)
- [9️⃣ Auto Scaling 🤖](#9️⃣-auto-scaling-)
    - [🟢 Low Traffic](#-low-traffic)
    - [🔴 High Traffic](#-high-traffic)
- [🔟 Production Architecture 🏗️](#-production-architecture-️)
    - [🔄 Flujo](#-flujo)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)

---

# 1️⃣ What is Horizontal Scaling? 📈

**Horizontal Scaling** es una estrategia para aumentar la capacidad de una aplicación agregando **más servidores**.

En lugar de aumentar los recursos de un solo servidor, se agregan nuevas instancias.

```text
Server 1

Server 2

Server 3
```

> 🎯 **Objetivo principal:** distribuir la carga entre múltiples servidores.

Esto permite que una aplicación pueda manejar una mayor cantidad de usuarios y conexiones simultáneas.

---

# 2️⃣ Vertical vs Horizontal Scaling ⚖️

Existen dos formas principales de aumentar la capacidad de un sistema.

## ⬆️ Vertical Scaling

Consiste en aumentar los recursos de un mismo servidor.

```text
Server

CPU ↑

RAM ↑
```

> 💡 El servidor obtiene más capacidad de procesamiento y memoria.

---

## ➡️ Horizontal Scaling

Consiste en agregar más servidores.

```text
Server 1

Server 2

Server 3
```

> 💡 La carga se distribuye entre diferentes servidores.

### 📊 Comparación

|                    | ⬆️ Vertical Scaling           | ➡️ Horizontal Scaling |
| ------------------ | ----------------------------- | --------------------- |
| 🖥️ **Servidores** | Uno                           | Múltiples             |
| ⚙️ **Estrategia**  | Más recursos                  | Más servidores        |
| 📈 **Capacidad**   | Aumenta recursos del servidor | Distribuye la carga   |

---

# 3️⃣ Adding More Servers ➕

Cuando aumenta la cantidad de usuarios, se pueden agregar más servidores WebSocket.

```text
Users

   ↓

Server 1
Server 2
Server 3
```

> 💡 Cada servidor puede manejar una parte de las conexiones.

Esto permite distribuir la carga en lugar de concentrarla en un solo servidor.

---

# 4️⃣ Scaling WebSocket Connections 🔌

Los WebSockets mantienen conexiones persistentes.

Cuando aumenta el número de usuarios, un solo servidor puede no ser suficiente.

```text
Users

   ↓

Multiple WebSocket Servers

   ↓

WS1    WS2    WS3
```

> 🎯 **Horizontal Scaling** permite distribuir las conexiones WebSocket entre múltiples servidores.

---

# 5️⃣ Shared State 🔄

Cuando existen múltiples servidores, es necesario compartir información entre ellos.

```text
WS1 ──┐
WS2 ──┼── Redis
WS3 ──┘
```

> 💡 **Shared State** permite que diferentes servidores puedan acceder a información compartida.

En una arquitectura WebSocket distribuida, Redis puede utilizarse para compartir comunicación entre servidores.

---

# 6️⃣ Load Balancing ⚖️

El **Load Balancer** distribuye las conexiones entre los diferentes servidores WebSocket.

```text
              Users

                |

                ▼

         Load Balancer

        /      |      \

      WS1     WS2     WS3
```

> 💡 Permite distribuir las conexiones y evitar que toda la carga llegue a un solo servidor.

---

# 7️⃣ Message Distribution 📨

En una arquitectura con múltiples servidores, los mensajes pueden necesitar llegar a conexiones que se encuentran en diferentes servidores.

```text
WS1 ──┐
WS2 ──┼── Redis
WS3 ──┘
```

> 💡 Redis proporciona una **Shared Communication** entre los servidores WebSocket.

Esto permite distribuir mensajes entre diferentes instancias.

---

# 8️⃣ Cloud Scaling ☁️

Los servicios cloud permiten ejecutar múltiples servidores y aumentar la capacidad de una aplicación.

```text
Users

   ↓

Load Balancer

   ↓

WS1    WS2    WS3
```

> 💡 La infraestructura cloud facilita la creación y administración de múltiples servidores.

---

# 9️⃣ Auto Scaling 🤖

**Auto Scaling** permite aumentar o disminuir automáticamente la cantidad de servidores según la demanda.

### 🟢 Low Traffic

```text
Low Traffic

    ↓

   WS1
```

### 🔴 High Traffic

```text
High Traffic

    ↓

WS1   WS2   WS3
```

> 🎯 Permite adaptar la capacidad del sistema según la cantidad de usuarios o carga.

---

# 🔟 Production Architecture 🏗️

Una arquitectura de producción puede combinar **Load Balancing**, múltiples servidores WebSocket y un sistema de comunicación compartida.

```text
                 Users

                   |

                   ▼

             Load Balancer

          /       |       \

        WS1      WS2      WS3

          \       |       /

              Redis

          Shared Communication
```

### 🔄 Flujo

```text
Users

   ↓

Load Balancer

   ↓

WebSocket Servers

   ↓

Redis

   ↓

Shared Communication
```

---

# 🧠 Conceptos principales

| Concepto                         | Significado                                        |
| -------------------------------- | -------------------------------------------------- |
| 📈 **Horizontal Scaling**        | Aumentar capacidad agregando más servidores        |
| 🤖 **Auto Scaling**              | Ajustar automáticamente la cantidad de servidores  |
| 🏗️ **Distributed Architecture** | Arquitectura formada por múltiples servidores      |
| ⚖️ **Load Balancing**            | Distribuir conexiones entre servidores             |
| 🔄 **Shared State**              | Información compartida entre diferentes servidores |

---

# 🎯 Al terminar

> **Horizontal Scaling permite escalar WebSockets agregando más servidores y distribuyendo las conexiones entre ellos.**

```text
Users

↓

Load Balancer

↓

WS1   WS2   WS3

↓

Redis

↓

Shared Communication
```
