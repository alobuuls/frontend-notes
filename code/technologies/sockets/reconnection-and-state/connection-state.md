# 🔄 01 — Connection State

> 💡 **¿Cómo sabe una aplicación si está conectada, desconectada o intentando reconectar?**

Una aplicación WebSocket necesita representar y controlar el estado actual de la conexión para saber qué está ocurriendo y cómo debe reaccionar.

---

## 📚 Índice

- [🔄 01 — Connection State](#-01--connection-state)
  - [📚 Índice](#-índice)
- [1️⃣ What is Connection State? 🔌](#1️⃣-what-is-connection-state-)
- [2️⃣ Why Track Connection State? 🤔](#2️⃣-why-track-connection-state-)
    - [Permite:](#permite)
- [3️⃣ WebSocket States 🔌](#3️⃣-websocket-states-)
    - [Estados internos](#estados-internos)
- [4️⃣ Application Connection States 🏗️](#4️⃣-application-connection-states-️)
    - [Estados de aplicación](#estados-de-aplicación)
- [5️⃣ Connected State 🟢](#5️⃣-connected-state-)
    - [Estado](#estado)
- [6️⃣ Disconnected State 🔴](#6️⃣-disconnected-state-)
    - [Estado](#estado-1)
- [7️⃣ Connecting State 🟡](#7️⃣-connecting-state-)
    - [Estado](#estado-2)
    - [🔄 Flujo](#-flujo)
- [8️⃣ Reconnecting State 🔁](#8️⃣-reconnecting-state-)
    - [Estado](#estado-3)
    - [🔄 Flujo](#-flujo-1)
- [9️⃣ Error State ⚠️](#9️⃣-error-state-️)
    - [Estado](#estado-4)
    - [Ejemplos](#ejemplos)
- [🔟 State Management Patterns 🧩](#-state-management-patterns-)
    - [Ejemplo](#ejemplo)
- [🔄 Connection State Flow](#-connection-state-flow)
- [🧠 Connection State Model](#-connection-state-model)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)
    - [WebSocket tiene estados internos:](#websocket-tiene-estados-internos)
    - [Pero una aplicación necesita estados más descriptivos:](#pero-una-aplicación-necesita-estados-más-descriptivos)

# 1️⃣ What is Connection State? 🔌

El **Connection State** representa la situación actual de una conexión WebSocket.

> 💡 Permite conocer si la aplicación está:

```text
CONNECTING

CONNECTED

DISCONNECTED

RECONNECTING

FAILED
```

---

# 2️⃣ Why Track Connection State? 🤔

Controlar el estado de conexión permite que la aplicación sepa qué hacer en cada momento.

### Permite:

* 📊 Mostrar el estado al usuario.
* 🔄 Manejar reconexiones.
* ⚠️ Detectar errores.
* 🖥️ Actualizar la interfaz.

---

# 3️⃣ WebSocket States 🔌

WebSocket tiene estados internos propios.

### Estados internos

```text
CONNECTING

        ↓

OPEN

        ↓

CLOSING

        ↓

CLOSED
```

> 💡 Estos representan el ciclo interno de la conexión.

---

# 4️⃣ Application Connection States 🏗️

Una aplicación necesita más información que los estados internos de WebSocket.

### Estados de aplicación

```text
CONNECTING

CONNECTED

DISCONNECTED

RECONNECTING

FAILED
```

> 💡 Permiten representar situaciones específicas de la aplicación.

---

# 5️⃣ Connected State 🟢

Representa una conexión activa.

### Estado

```text
CONNECTED
```

La aplicación puede:

* 📤 Enviar mensajes.
* 📥 Recibir datos.
* 🔄 Actualizar información.

---

# 6️⃣ Disconnected State 🔴

Representa que no existe una conexión activa.

### Estado

```text
DISCONNECTED
```

Puede ocurrir por:

* 🌐 Pérdida de red.
* 🔒 Cierre de conexión.
* ⚠️ Fallo del servidor.

---

# 7️⃣ Connecting State 🟡

Representa el intento inicial de establecer conexión.

### Estado

```text
CONNECTING
```

### 🔄 Flujo

```text
Application Start

        ↓

CONNECTING

        ↓

CONNECTED
```

---

# 8️⃣ Reconnecting State 🔁

Representa cuando la aplicación intenta recuperar una conexión perdida.

### Estado

```text
RECONNECTING
```

### 🔄 Flujo

```text
DISCONNECTED

        ↓

RECONNECTING

        ↓

CONNECTED
```

---

# 9️⃣ Error State ⚠️

Representa cuando la conexión falla.

### Estado

```text
FAILED
```

### Ejemplos

```text
Connection Error

Network Failure

Server Error
```

---

# 🔟 State Management Patterns 🧩

El estado de conexión puede manejarse utilizando patrones de administración de estado.

### Ejemplo

```typescript
type ConnectionStatus =

| "connecting"

| "connected"

| "disconnected"

| "reconnecting"

| "error";
```

> 💡 Este modelo permite representar todos los estados posibles.

---

# 🔄 Connection State Flow

```text
Application Start

        ↓

CONNECTING

        ↓

CONNECTED

        ↓

Network Lost

        ↓

DISCONNECTED

        ↓

RECONNECTING

        ↓

CONNECTED
```

---

# 🧠 Connection State Model

```typescript
type ConnectionStatus =

| "connecting"

| "connected"

| "disconnected"

| "reconnecting"

| "error";
```

---

# 🧠 Conceptos principales

| Concepto                | Significado                              |
| ----------------------- | ---------------------------------------- |
| 🔄 State                | Estado actual de una conexión            |
| 🏷️ Status              | Valor que representa la situación actual |
| 🔌 Connection Lifecycle | Ciclo de vida de la conexión             |
| 🔁 State Machine        | Modelo de estados y transiciones         |
| 🖥️ UI Feedback         | Información visual del estado            |

---

# 🎯 Al terminar

Debes poder explicar:

### WebSocket tiene estados internos:

```text
CONNECTING

OPEN

CLOSING

CLOSED
```

### Pero una aplicación necesita estados más descriptivos:

```text
CONNECTING

CONNECTED

DISCONNECTED

RECONNECTING

FAILED
```

> 💡 Estos estados permiten controlar la conexión y mostrar información correcta al usuario.
