# 🔒 06 — onclose

> 💡 **¿Cómo sé que un WebSocket se desconectó?**

Cuando una conexión WebSocket termina, el navegador ejecuta un evento llamado:

```javascript
onclose
```

> 💡 Este evento permite detectar que la conexión fue cerrada y realizar acciones después de la desconexión.

---

## 📑 Índice

- [🔒 06 — onclose](#-06--onclose)
  - [📑 Índice](#-índice)
- [1️⃣ What is onclose? 🔒](#1️⃣-what-is-onclose-)
  - [¿Qué es onclose?](#qué-es-onclose)
    - [📌 Ejemplo](#-ejemplo)
    - [🔄 Flujo](#-flujo)
- [2️⃣ Close Event 📦](#2️⃣-close-event-)
    - [📌 Ejemplo](#-ejemplo-1)
- [3️⃣ Normal Closure ✅](#3️⃣-normal-closure-)
    - [🔄 Ejemplo](#-ejemplo-2)
    - [📌 Casos](#-casos)
    - [📌 Ejemplo](#-ejemplo-3)
    - [🔄 Resultado](#-resultado)
- [4️⃣ Unexpected Closure ⚠️](#4️⃣-unexpected-closure-️)
    - [❌ Ejemplos](#-ejemplos)
    - [🔄 Flujo](#-flujo-1)
- [5️⃣ Close Code 🔢](#5️⃣-close-code-)
    - [📌 Ejemplo](#-ejemplo-4)
    - [🔄 Ejemplo conceptual](#-ejemplo-conceptual)
- [6️⃣ Close Reason 📝](#6️⃣-close-reason-)
    - [📌 Ejemplo](#-ejemplo-5)
    - [🔄 Ejemplo conceptual](#-ejemplo-conceptual-1)
- [7️⃣ Reconnection Preparation 🔄](#7️⃣-reconnection-preparation-)
    - [🔄 Flujo](#-flujo-2)
    - [🛠️ Acciones comunes](#️-acciones-comunes)
    - [🔄 Ejemplo](#-ejemplo-6)
- [🔄 onclose Flow](#-onclose-flow)
- [📦 Close Event Properties](#-close-event-properties)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)
    - [📌 Ejemplo](#-ejemplo-7)
    - [🔄 El flujo es:](#-el-flujo-es)

# 1️⃣ What is onclose? 🔒

## ¿Qué es onclose?

`onclose` es un evento de WebSocket que se ejecuta cuando una conexión se cierra.

### 📌 Ejemplo

```javascript
socket.onclose = (event) => {

  console.log(
    "Connection closed"
  );

};
```

### 🔄 Flujo

```text
WebSocket Connection

        ↓

Closed

        ↓

onclose executes
```

---

# 2️⃣ Close Event 📦

Cuando `onclose` se ejecuta recibe un objeto llamado:

```text
Close Event
```

### 📌 Ejemplo

```javascript
socket.onclose = (event) => {

  console.log(event);

};
```

Este objeto contiene información sobre cómo terminó la conexión.

Incluye:

```javascript
event.code

event.reason

event.wasClean
```

> 💡 **Tip:** El objeto `event` proporciona información sobre el cierre de la conexión.

---

# 3️⃣ Normal Closure ✅

Un cierre normal ocurre cuando la conexión termina correctamente.

### 🔄 Ejemplo

```text
OPEN

 ↓

Close Request

 ↓

Connection Closed
```

### 📌 Casos

* Cliente cierra la conexión.
* Servidor cierra correctamente.
* Finalización esperada.

### 📌 Ejemplo

```javascript
socket.close();
```

### 🔄 Resultado

```text
OPEN

 ↓

CLOSED
```

---

# 4️⃣ Unexpected Closure ⚠️

Un cierre inesperado ocurre cuando la conexión termina sin un cierre normal.

### ❌ Ejemplos

* 🌐 Pérdida de red.
* 🖥️ Servidor detenido.
* 🔌 Conexión interrumpida.

### 🔄 Flujo

```text
OPEN

 ↓

Connection Lost

 ↓

onclose
```

> ⚠️ La aplicación puede detectar que la conexión terminó inesperadamente.

---

# 5️⃣ Close Code 🔢

La propiedad:

```javascript
event.code
```

contiene el código que indica cómo se cerró la conexión.

### 📌 Ejemplo

```javascript
socket.onclose = (event) => {

  console.log(event.code);

};
```

Permite identificar el motivo del cierre.

### 🔄 Ejemplo conceptual

```text
Close Code

        ↓

Reason for closing
```

---

# 6️⃣ Close Reason 📝

La propiedad:

```javascript
event.reason
```

contiene una descripción del motivo del cierre.

### 📌 Ejemplo

```javascript
socket.onclose = (event) => {

  console.log(event.reason);

};
```

### 🔄 Ejemplo conceptual

```text
Reason:

"Server shutdown"
```

---

# 7️⃣ Reconnection Preparation 🔄

Cuando una conexión se cierra, la aplicación puede prepararse para una nueva conexión.

### 🔄 Flujo

```text
OPEN

 ↓

Connection Lost

 ↓

onclose

 ↓

Cleanup / Reconnect
```

### 🛠️ Acciones comunes

* 🧹 Limpiar recursos.
* 🔄 Intentar reconectar.
* 🖥️ Actualizar estado visual.

### 🔄 Ejemplo

```text
Connected 🟢

        ↓

Disconnected 🔴

        ↓

Reconnect
```

---

# 🔄 onclose Flow

```text
OPEN

 ↓

Connection Lost

 ↓

onclose

 ↓

Cleanup / Reconnect
```

---

# 📦 Close Event Properties

| Propiedad           | Significado                    |
| ------------------- | ------------------------------ |
| 🔢 `event.code`     | Código del cierre              |
| 📝 `event.reason`   | Motivo del cierre              |
| 🧼 `event.wasClean` | Indica si el cierre fue limpio |

---

# 🧠 Conceptos principales

| Concepto              | Significado                                 |
| --------------------- | ------------------------------------------- |
| 🔒 `onclose`          | Evento ejecutado cuando la conexión termina |
| 📦 Close Event        | Información del cierre de conexión          |
| ✅ Normal Closure      | Cierre esperado y correcto                  |
| ⚠️ Unexpected Closure | Cierre inesperado                           |
| 🔢 Close Code         | Código que indica el motivo del cierre      |
| 📝 Close Reason       | Descripción del cierre                      |
| 🔄 Reconnection       | Preparación para volver a conectar          |

---

# 🎯 Al terminar

`onclose` permite saber cuándo una conexión WebSocket terminó.

### 📌 Ejemplo

```javascript
socket.onclose = (event) => {

  console.log(
    "Connection closed"
  );

};
```

### 🔄 El flujo es:

```text
OPEN

 ↓

Connection Lost

 ↓

onclose

 ↓

Cleanup / Reconnect
```

> 🎯 `onclose` permite manejar la desconexión y preparar acciones posteriores como limpieza o reconexión.
