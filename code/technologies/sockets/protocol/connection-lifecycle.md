# 🔄 03 — Connection Lifecycle

> **¿Qué ocurre desde que intento conectar hasta que cierro la conexión?**

Una conexión WebSocket pasa por diferentes estados durante su ciclo de vida.

Estos estados representan:

* 🔌 Inicio de conexión.
* 🟢 Conexión activa.
* 🔒 Proceso de cierre.
* ❌ Conexión terminada.

---

## 📚 Índice 

- [🔄 03 — Connection Lifecycle](#-03--connection-lifecycle)
  - [📚 Índice](#-índice)
- [1️⃣ WebSocket States 🔌](#1️⃣-websocket-states-)
- [2️⃣ Connecting State 🔄](#2️⃣-connecting-state-)
  - [`CONNECTING`](#connecting)
    - [🔄 Flujo](#-flujo)
- [3️⃣ Open State 🟢](#3️⃣-open-state-)
  - [`OPEN`](#open)
    - [💬 Enviar mensajes](#-enviar-mensajes)
    - [📩 Recibir mensajes](#-recibir-mensajes)
    - [🔄 Ejemplo](#-ejemplo)
- [4️⃣ Closing State 🔒](#4️⃣-closing-state-)
  - [`CLOSING`](#closing)
    - [🔄 Flujo](#-flujo-1)
- [5️⃣ Closed State ❌](#5️⃣-closed-state-)
  - [`CLOSED`](#closed)
- [6️⃣ Connection Flow 🔄](#6️⃣-connection-flow-)
- [7️⃣ Opening Connection 🔓](#7️⃣-opening-connection-)
    - [🔄 Proceso](#-proceso)
- [8️⃣ Sending Messages 💬](#8️⃣-sending-messages-)
    - [📡 Ejemplo](#-ejemplo-1)
- [9️⃣ Closing Connection 🔒](#9️⃣-closing-connection-)
    - [🔄 Flujo normal](#-flujo-normal)
- [🔟 Error Scenarios ⚠️](#-error-scenarios-️)
  - [✅ Normal Closure](#-normal-closure)
    - [Cierre normal](#cierre-normal)
  - [⚠️ Unexpected Closure](#️-unexpected-closure)
    - [Cierre inesperado](#cierre-inesperado)
  - [❌ Connection Error](#-connection-error)
    - [Error de conexión](#error-de-conexión)
  - [🌐 Network Failure](#-network-failure)
    - [Fallo de red](#fallo-de-red)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)

# 1️⃣ WebSocket States 🔌

Una conexión WebSocket tiene cuatro estados principales:

```text
CONNECTING

      ↓

OPEN

      ↓

CLOSING

      ↓

CLOSED
```

> 💡 Cada estado representa una etapa diferente de la conexión.

---

# 2️⃣ Connecting State 🔄

## `CONNECTING`

Es el estado inicial de la conexión.

En este momento:

* El cliente está intentando conectarse.
* El handshake todavía está ocurriendo.
* La conexión WebSocket aún no está disponible.

### 🔄 Flujo

```text
Client

Start Connection

        ↓

CONNECTING

        ↓

Handshake

        ↓

OPEN
```

> ⚠️ Durante este estado:
>
> ❌ No se pueden enviar mensajes todavía.
>
> La conexión aún no está lista.

---

# 3️⃣ Open State 🟢

## `OPEN`

Es el estado donde la conexión está activa y funcionando.

El handshake terminó correctamente.

```text
Client ◄────────► Server
```

En este estado se puede:

### 💬 Enviar mensajes

```javascript
send()
```

### 📩 Recibir mensajes

```javascript
receive()
```

### 🔄 Ejemplo

```text
Client

send(message)

        ↓

Server

        ↓

receive(message)
```

> 💡 La comunicación WebSocket ocurre mientras la conexión permanece abierta.

---

# 4️⃣ Closing State 🔒

## `CLOSING`

Es el estado donde se inicia el cierre de la conexión.

La conexión todavía existe, pero está finalizando.

### 🔄 Flujo

```text
OPEN

 ↓

Close requested

 ↓

CLOSING

 ↓

CLOSED
```

Durante este estado:

* Se procesa el cierre.
* Se envían mensajes finales de cierre.
* La conexión deja de aceptar nuevos mensajes.

---

# 5️⃣ Closed State ❌

## `CLOSED`

La conexión terminó completamente.

Ya no existe comunicación entre cliente y servidor.

```text
CLOSING

      ↓

CLOSED
```

En este estado:

* ❌ No se pueden enviar mensajes.
* ❌ No se pueden recibir mensajes.
* 🔄 Se necesita crear una nueva conexión para comunicarse nuevamente.

---

# 6️⃣ Connection Flow 🔄

El ciclo completo de una conexión WebSocket:

```text
CONNECTING

      ↓

Handshake

      ↓

OPEN

      ↓

Messages exchanged

      ↓

CLOSING

      ↓

CLOSED
```

---

# 7️⃣ Opening Connection 🔓

La apertura comienza cuando el cliente intenta conectarse.

### 🔄 Proceso

```text
Client

Create WebSocket connection

        ↓

HTTP Handshake

        ↓

Server accepts

        ↓

Connection OPEN
```

Si el handshake es exitoso:

```text
CONNECTING

        ↓

OPEN
```

---

# 8️⃣ Sending Messages 💬

Cuando la conexión está en estado:

```text
OPEN
```

se pueden intercambiar mensajes.

### 📡 Ejemplo

```text
Client

send()

   ↓

Server


Server

send()

   ↓

Client
```

> 💡 La comunicación continúa mientras la conexión permanezca abierta.

---

# 9️⃣ Closing Connection 🔒

Una conexión puede cerrarse cuando:

* Cliente solicita cierre.
* Servidor solicita cierre.
* Ocurre un problema.

### 🔄 Flujo normal

```text
OPEN

 ↓

Close request

 ↓

CLOSING

 ↓

CLOSED
```

Después del cierre:

```text
Connection finished
```

---

# 🔟 Error Scenarios ⚠️

Una conexión WebSocket puede terminar por diferentes situaciones.

## ✅ Normal Closure

### Cierre normal

La conexión termina correctamente.

```text
Client:

Close connection

        ↓

Server:

Close connection

        ↓

CLOSED
```

> 💡 Existe una finalización esperada.

---

## ⚠️ Unexpected Closure

### Cierre inesperado

La conexión termina sin un cierre normal.

Ejemplos:

* Cliente pierde conexión.
* Servidor se detiene.
* El navegador se cierra.

```text
OPEN

        ↓

Connection lost

        ↓

CLOSED
```

---

## ❌ Connection Error

### Error de conexión

Ocurre cuando no se puede establecer o mantener la conexión.

Ejemplos:

* Fallo durante handshake.
* Servidor rechazó conexión.
* Problema de protocolo.

```text
CONNECTING

        ↓

ERROR

        ↓

CLOSED
```

---

## 🌐 Network Failure

### Fallo de red

La conexión puede cerrarse debido a problemas externos.

Ejemplos:

* Pérdida de internet.
* Cambio de red.
* Problemas de infraestructura.

```text
Client ◄────────► Server


Network failure


Client       Server

      X
```

---

# 🧠 Conceptos principales

| Concepto                  | Significado                                          |
| ------------------------- | ---------------------------------------------------- |
| 🔄 **CONNECTING**         | Intentando establecer conexión                       |
| 🟢 **OPEN**               | Conexión activa lista para enviar y recibir mensajes |
| 🔒 **CLOSING**            | Proceso de cierre iniciado                           |
| ❌ **CLOSED**              | Conexión finalizada                                  |
| 🔓 **Opening Connection** | Proceso de creación de conexión                      |
| 💬 **Sending Messages**   | Intercambio de información durante OPEN              |
| ⚠️ **Error Scenario**     | Situación donde la conexión falla                    |

---

# 🎯 Al terminar

Una conexión WebSocket pasa por estos estados:

```text
CONNECTING

      ↓

OPEN

      ↓

CLOSING

      ↓

CLOSED
```

* **CONNECTING:** la conexión todavía se está creando.
* **OPEN:** la conexión está activa y permite enviar y recibir mensajes.
* **CLOSING:** se inició el cierre.
* **CLOSED:** la conexión terminó completamente.

> 🧠 El ciclo de vida de WebSocket describe todo el proceso desde la conexión inicial hasta el cierre final.
