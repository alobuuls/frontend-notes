# 👥 05 — Multiple Clients

> 💡 **¿Cómo maneja el servidor cientos o miles de conexiones?**

> 💡 **Tip:** Cuando un servidor WebSocket tiene muchos clientes conectados al mismo tiempo, necesita administrar cada conexión de forma organizada.

El servidor debe poder:

* 💾 Guardar clientes conectados.
* 🆔 Identificar clientes.
* 📤 Enviar mensajes específicos.
* 🧹 Eliminar conexiones cerradas.

---

## 📚 Índice

- [👥 05 — Multiple Clients](#-05--multiple-clients)
  - [📚 Índice](#-índice)
- [1️⃣ Managing Multiple Clients 👥](#1️⃣-managing-multiple-clients-)
  - [¿Qué cambia con múltiples clientes?](#qué-cambia-con-múltiples-clientes)
    - [🏗️ Arquitectura](#️-arquitectura)
    - [Ejemplo](#ejemplo)
- [2️⃣ Client Registry 📋](#2️⃣-client-registry-)
    - [💻 Ejemplo conceptual](#-ejemplo-conceptual)
- [3️⃣ Client Identification 🆔](#3️⃣-client-identification-)
    - [Ejemplo](#ejemplo-1)
- [4️⃣ Connection Storage 💾](#4️⃣-connection-storage-)
    - [Ejemplo](#ejemplo-2)
- [5️⃣ Sending to Specific Clients 🎯](#5️⃣-sending-to-specific-clients-)
    - [🔄 Flujo](#-flujo)
    - [Ejemplo](#ejemplo-3)
- [6️⃣ Removing Disconnected Clients 🧹](#6️⃣-removing-disconnected-clients-)
    - [🔄 Flujo](#-flujo-1)
    - [Antes](#antes)
    - [Después](#después)
- [7️⃣ Memory Management 💾](#7️⃣-memory-management-)
    - [⚠️ Problema](#️-problema)
- [8️⃣ Scaling Considerations 📈](#8️⃣-scaling-considerations-)
    - [Ejemplo](#ejemplo-4)
- [9️⃣ Connection Limits 🚦](#9️⃣-connection-limits-)
    - [Factores](#factores)
- [🔟 Real Examples 🌎](#-real-examples-)
    - [💬 Chat Applications](#-chat-applications)
    - [🎮 Multiplayer Games](#-multiplayer-games)
    - [📊 Real-Time Dashboards](#-real-time-dashboards)
- [🔄 Multiple Clients Flow](#-multiple-clients-flow)
- [🏗️ Client Management Architecture](#️-client-management-architecture)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)
    - [💻 Ejemplo conceptual](#-ejemplo-conceptual-1)

# 1️⃣ Managing Multiple Clients 👥

## ¿Qué cambia con múltiples clientes?

Un servidor WebSocket no maneja una sola conexión, sino muchas conexiones simultáneas.

### 🏗️ Arquitectura

```text id="m7q3xp"
              Server


       ┌──────┼──────┐

       │      │      │


       ▼      ▼      ▼


    Client  Client Client

       A      B      C
```

Cada cliente mantiene una conexión independiente con el servidor.

### Ejemplo

```text id="q8m4vx"
Client A

      ↕

Server


Client B

      ↕

Server


Client C

      ↕

Server
```

---

# 2️⃣ Client Registry 📋

El servidor necesita mantener un registro de los clientes conectados.

### 💻 Ejemplo conceptual

```javascript id="p5n2mq"
clients = [

 socket1,

 socket2,

 socket3

]
```

Este registro permite saber:

```text id="x7m3qp"
Who is connected?

        ↓

Where to send messages?
```

---

# 3️⃣ Client Identification 🆔

Cuando existen muchos clientes, el servidor necesita identificar cada conexión.

Puede utilizar:

```text id="n6m8qx"
Connection ID
```

### Ejemplo

```text id="k4q9mp"
Client A

ID: 001


Client B

ID: 002
```

> 💡 **Tip:** Esto permite enviar mensajes a clientes específicos.

---

# 4️⃣ Connection Storage 💾

El servidor debe almacenar información de las conexiones activas.

### Ejemplo

```javascript id="v8m3qx"
clients = [

 socket1,

 socket2,

 socket3

]
```

Representa:

```text id="r5n8mq"
Active Connections

        ↓

Stored Sockets
```

El almacenamiento permite administrar las conexiones existentes.

---

# 5️⃣ Sending to Specific Clients 🎯

Además de enviar mensajes a todos, el servidor puede enviar información a un cliente específico.

### 🔄 Flujo

```text id="t6m2qx"
Server

        ↓

Find Client

        ↓

Send Message
```

### Ejemplo

```text id="x3q8mv"
Client A

        ↓

Server

        ↓

Client B
```

El servidor utiliza la identificación del cliente para encontrar la conexión correcta.

---

# 6️⃣ Removing Disconnected Clients 🧹

Cuando un cliente se desconecta, el servidor debe eliminarlo del registro.

### 🔄 Flujo

```text id="a7m4qp"
Client Disconnects

        ↓

Detect Disconnect

        ↓

Remove Socket

        ↓

Update Registry
```

### Antes

```text id="b6n9mx"
clients = [

 socket1,

 socket2,

 socket3

]
```

### Después

```text id="c8m4qx"
clients = [

 socket1,

 socket3

]
```

---

# 7️⃣ Memory Management 💾

Cada conexión consume recursos del servidor.

El servidor debe controlar:

* 📌 Conexiones activas.
* 📌 Datos almacenados.
* 📌 Conexiones cerradas.

### ⚠️ Problema

```text id="h5m8qx"
Disconnected Clients

        ↓

Unused Memory

        ↓

Resource Waste
```

> ⚠️ **Importante:** Por eso es importante limpiar conexiones que ya no existen.

---

# 8️⃣ Scaling Considerations 📈

Cuando aumenta la cantidad de clientes, aparecen nuevos retos.

### Ejemplo

```text id="m3q7xp"
100 Clients

        ↓

1000 Clients

        ↓

Large Scale
```

El servidor debe considerar:

* ⚙️ Capacidad del servidor.
* 💾 Uso de memoria.
* 🔗 Número de conexiones activas.

---

# 9️⃣ Connection Limits 🚦

Un servidor tiene límites de conexiones simultáneas.

```text id="w8p2mq"
Server Capacity

        ↓

Maximum Connections
```

### Factores

* 💻 Recursos del servidor.
* 🌐 Red disponible.
* ⚙️ Configuración del sistema.

---

# 🔟 Real Examples 🌎

Ejemplos donde existen muchos clientes conectados:

### 💬 Chat Applications

Muchos usuarios conectados enviando mensajes.

### 🎮 Multiplayer Games

Jugadores conectados al mismo tiempo.

### 📊 Real-Time Dashboards

Muchos clientes recibiendo actualizaciones.

---

# 🔄 Multiple Clients Flow

```text id="s6m9qx"
Client Connects

        ↓

Create Socket

        ↓

Store Client

        ↓

Identify Client

        ↓

Send Messages

        ↓

Remove on Disconnect
```

---

# 🏗️ Client Management Architecture

```text id="n4q8mv"
              Server


       ┌──────┼──────┐

       │      │      │


       ▼      ▼      ▼


    Client  Client Client

       A      B      C
```

---

# 🧠 Conceptos principales

| Concepto                     | Significado                                  |
| ---------------------------- | -------------------------------------------- |
| 👥 **Multiple Clients**      | Muchos clientes conectados al mismo servidor |
| 📋 **Client Registry**       | Registro de clientes activos                 |
| 🆔 **Client Identification** | Forma de identificar conexiones              |
| 💾 **Connection Storage**    | Almacenamiento de sockets activos            |
| 🎯 **Specific Clients**      | Enviar mensajes a clientes concretos         |
| 🧹 **Removing Clients**      | Eliminar conexiones desconectadas            |
| 📈 **Scaling**               | Capacidad de manejar más conexiones          |

---

# 🎯 Al terminar

Un servidor WebSocket con múltiples clientes necesita administrar sus conexiones:

```text id="m8q3vx"
Store clients

        ↓

Identify clients

        ↓

Send messages

        ↓

Remove inactive clients
```

### 💻 Ejemplo conceptual

```javascript id="q4m8xp"
clients = [

 socket1,

 socket2,

 socket3

]
```

Los principales problemas al escalar son:

```text id="z5p7mx"
Memory usage

        ↓

Disconnected clients

        ↓

Large number of connections
```
