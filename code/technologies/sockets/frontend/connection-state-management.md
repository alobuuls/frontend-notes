# 🔄 06 — Connection State Management

> 💡 **¿Cómo sabe la aplicación si el usuario está conectado o desconectado?**

Una aplicación WebSocket necesita conocer el estado actual de la conexión para actualizar la interfaz y reaccionar ante cambios como desconexiones o reconexiones.

---

## 📚 Índice

- [🔄 06 — Connection State Management](#-06--connection-state-management)
  - [📚 Índice](#-índice)
- [1️⃣ Connection State 🔌](#1️⃣-connection-state-)
- [2️⃣ Connected Status 🟢](#2️⃣-connected-status-)
    - [Estado](#estado)
- [3️⃣ Disconnected Status 🔴](#3️⃣-disconnected-status-)
    - [Estado](#estado-1)
- [4️⃣ Loading State 🟡](#4️⃣-loading-state-)
    - [Estado](#estado-2)
    - [🔄 Flujo](#-flujo)
- [5️⃣ Error State ⚠️](#5️⃣-error-state-️)
    - [Estado](#estado-3)
    - [Ejemplos](#ejemplos)
- [6️⃣ Connection Indicators 📊](#6️⃣-connection-indicators-)
    - [Ejemplo](#ejemplo)
- [7️⃣ State Storage 💾](#7️⃣-state-storage-)
    - [Ejemplo](#ejemplo-1)
- [8️⃣ UI Updates 🖥️](#8️⃣-ui-updates-️)
    - [🔄 Flujo](#-flujo-1)
    - [Ejemplo](#ejemplo-2)
- [9️⃣ Handling Reconnection 🔁](#9️⃣-handling-reconnection-)
    - [🔄 Estado](#-estado)
- [🔟 Global Connection State 🌐](#-global-connection-state-)
    - [🏗️ Arquitectura](#️-arquitectura)
- [🧩 Estados principales](#-estados-principales)
- [📋 Modelo](#-modelo)
- [🔄 Connection State Flow](#-connection-state-flow)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)
    - [🏗️ Arquitectura](#️-arquitectura-1)

# 1️⃣ Connection State 🔌

El **Connection State** representa el estado actual de una conexión WebSocket.

> 💡 Permite saber si la comunicación está:

```text
Connecting

Connected

Disconnected

Error

Reconnecting
```

---

# 2️⃣ Connected Status 🟢

Representa cuando la conexión está activa.

### Estado

```text
CONNECTED
```

> 💡 La aplicación puede:
>
> * 📥 Recibir mensajes.
> * 📤 Enviar información.
> * 🔄 Actualizar datos.

---

# 3️⃣ Disconnected Status 🔴

Representa cuando la conexión terminó o no existe.

### Estado

```text
DISCONNECTED
```

Puede ocurrir por:

* 🔌 Cierre manual.
* 🌐 Problemas de red.
* ⚠️ Errores de conexión.

---

# 4️⃣ Loading State 🟡

Representa cuando la aplicación está intentando conectar.

### Estado

```text
CONNECTING
```

### 🔄 Flujo

```text
Start Connection

        ↓

Loading State

        ↓

Connected
```

---

# 5️⃣ Error State ⚠️

Representa cuando ocurre un problema durante la conexión.

### Estado

```text
ERROR
```

### Ejemplos

```text
Connection Failed

Network Error

Server Error
```

---

# 6️⃣ Connection Indicators 📊

La aplicación puede mostrar visualmente el estado actual.

### Ejemplo

```text
🟢 Connected

🟡 Reconnecting

🔴 Offline
```

> 💡 Permite que el usuario conozca la situación de la conexión.

---

# 7️⃣ State Storage 💾

El estado de conexión puede almacenarse para ser utilizado por diferentes partes de la aplicación.

### Ejemplo

```typescript
interface ConnectionState {

  status:
    "connected"
    |
    "disconnected";

}
```

Guarda información como:

```text
Current Status

Connection Information
```

---

# 8️⃣ UI Updates 🖥️

La interfaz puede reaccionar cuando cambia el estado.

### 🔄 Flujo

```text
Connection Change

        ↓

State Update

        ↓

Component

        ↓

UI Update
```

### Ejemplo

```text
CONNECTED

        ↓

Show Online
```

```text
DISCONNECTED

        ↓

Show Offline
```

---

# 9️⃣ Handling Reconnection 🔁

Cuando una conexión falla, la aplicación puede intentar reconectarse.

### 🔄 Estado

```text
DISCONNECTED

        ↓

RECONNECTING

        ↓

CONNECTED
```

Durante la reconexión:

```text
🟡 Reconnecting
```

---

# 🔟 Global Connection State 🌐

Una aplicación puede manejar un estado de conexión global.

> 💡 Permite que varios componentes conozcan la conexión actual.

### 🏗️ Arquitectura

```text
WebSocket

    ↓

Connection State

    ↓

Observable

    ↓

Component

    ↓

UI
```

---

# 🧩 Estados principales

| Estado          | Significado                    |
| --------------- | ------------------------------ |
| 🔵 CONNECTING   | Intentando establecer conexión |
| 🟢 CONNECTED    | Conexión activa                |
| 🔴 DISCONNECTED | Sin conexión                   |
| ⚠️ ERROR        | Ocurrió un error               |
| 🟡 RECONNECTING | Intentando recuperar conexión  |

---

# 📋 Modelo

```typescript
interface ConnectionState {

  status:
    "connected"
    |
    "disconnected";

}
```

---

# 🔄 Connection State Flow

```text
WebSocket

    ↓

Connection State

    ↓

Observable

    ↓

Component

    ↓

UI
```

---

# 🧠 Conceptos principales

| Concepto               | Significado                         |
| ---------------------- | ----------------------------------- |
| 🔌 Connection State    | Estado actual de la conexión        |
| 🟢 Connected Status    | Conexión activa                     |
| 🔴 Disconnected Status | Conexión cerrada                    |
| 🟡 Loading State       | Intentando conectar                 |
| ⚠️ Error State         | Estado con fallo                    |
| 🌐 Global State        | Estado compartido por la aplicación |

---

# 🎯 Al terminar

Una aplicación WebSocket necesita administrar el estado de la conexión para saber si está conectada, desconectada o intentando recuperarse.

### 🏗️ Arquitectura

```text
WebSocket

    ↓

Connection State

    ↓

Observable

    ↓

Component

    ↓

UI
```

> 💡 El estado permite mostrar indicadores y actualizar la aplicación según la conexión actual.
