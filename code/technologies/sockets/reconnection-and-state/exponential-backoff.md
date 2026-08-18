# 🌐 05 — Offline and Online

> 💡 **¿Cómo sabe la aplicación si el dispositivo perdió Internet?**

Una aplicación WebSocket necesita detectar cambios en la conectividad del usuario para reaccionar cuando Internet se pierde o vuelve a estar disponible.

---

## 📚 Índice

- [🌐 05 — Offline and Online](#-05--offline-and-online)
  - [📚 Índice](#-índice)
- [1️⃣ Browser Network Detection 🌐](#1️⃣-browser-network-detection-)
- [2️⃣ Online Event 🟢](#2️⃣-online-event-)
    - [Ejemplo](#ejemplo)
    - [🔄 Flujo](#-flujo)
- [3️⃣ Offline Event 🔴](#3️⃣-offline-event-)
    - [Ejemplo](#ejemplo-1)
    - [🔄 Flujo](#-flujo-1)
- [4️⃣ navigator.onLine 📡](#4️⃣-navigatoronline-)
    - [Ejemplo](#ejemplo-2)
- [5️⃣ Handling Offline State ⚙️](#5️⃣-handling-offline-state-️)
    - [🔄 Flujo](#-flujo-2)
- [6️⃣ User Feedback 🖥️](#6️⃣-user-feedback-️)
    - [Ejemplo](#ejemplo-3)
- [7️⃣ Reconnect After Online 🔄](#7️⃣-reconnect-after-online-)
    - [🔄 Flujo](#-flujo-3)
- [8️⃣ Mobile Network Changes 📱](#8️⃣-mobile-network-changes-)
    - [Ejemplos](#ejemplos)
- [🔄 Connectivity Flow](#-connectivity-flow)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)
    - [🔄 Flujo](#-flujo-4)

# 1️⃣ Browser Network Detection 🌐

Los navegadores proporcionan mecanismos para detectar cambios en la conexión de red.

> 💡 Permite conocer si el dispositivo está:

```text id="m7q3xp"
Online

Offline
```

La aplicación puede utilizar esta información para controlar la conexión WebSocket.

---

# 2️⃣ Online Event 🟢

El evento **online** se ejecuta cuando el navegador detecta que la conexión a Internet volvió.

### Ejemplo

```javascript id="q8m4vx"
window.addEventListener(
  "online",
  () => {

  }
);
```

### 🔄 Flujo

```text id="p5m2qx"
Internet Available

        ↓

Online Event

        ↓

Reconnect
```

---

# 3️⃣ Offline Event 🔴

El evento **offline** se ejecuta cuando el navegador detecta pérdida de conexión.

### Ejemplo

```javascript id="x7m3qp"
window.addEventListener(
  "offline",
  () => {

  }
);
```

### 🔄 Flujo

```text id="n6m8qx"
Internet Lost

        ↓

Offline Event

        ↓

Update State
```

---

# 4️⃣ navigator.onLine 📡

`navigator.onLine` permite consultar el estado actual de conectividad del navegador.

### Ejemplo

```javascript id="k4q9mp"
navigator.onLine
```

Puede indicar:

```text id="v8m3qx"
true

↓

Online
```

```text id="r5m8qx"
false

↓

Offline
```

---

# 5️⃣ Handling Offline State ⚙️

Cuando la aplicación detecta que no hay conexión, debe manejar el estado correctamente.

### 🔄 Flujo

```text id="t6m2qx"
Connected

     ↓

Internet Lost

     ↓

Offline State

     ↓

Wait
```

---

# 6️⃣ User Feedback 🖥️

La aplicación puede mostrar al usuario el estado de la conexión.

### Ejemplo

```text id="x3q8mv"
🟢 Connected
```

```text id="a7m4qp"
🔴 No Internet Connection
```

```text id="b6n9mx"
🟡 Reconnecting...
```

---

# 7️⃣ Reconnect After Online 🔄

Cuando Internet vuelve, la aplicación puede iniciar nuevamente la conexión WebSocket.

### 🔄 Flujo

```text id="c8m4qx"
Offline Event

        ↓

Wait

        ↓

Online Event

        ↓

Reconnect
```

---

# 8️⃣ Mobile Network Changes 📱

En dispositivos móviles, la conectividad puede cambiar constantemente.

### Ejemplos

```text id="h5m8qx"
WiFi

    ↓

Mobile Data

    ↓

No Connection

    ↓

WiFi
```

> 💡 La aplicación debe reaccionar a estos cambios.

---

# 🔄 Connectivity Flow

```text id="m3q7xp"
Connected

     ↓

Internet Lost

     ↓

Offline Event

     ↓

Wait

     ↓

Online Event

     ↓

Reconnect
```

---

# 🧠 Conceptos principales

| Concepto             | Significado                             |
| -------------------- | --------------------------------------- |
| 🌐 Network Status    | Estado actual de la red                 |
| 🔴 Offline Detection | Detección de pérdida de conexión        |
| 🖥️ Browser Events   | Eventos proporcionados por el navegador |
| 📡 Connectivity      | Estado de conectividad del dispositivo  |

---

# 🎯 Al terminar

Una aplicación puede utilizar los eventos del navegador para detectar cambios de conectividad.

### 🔄 Flujo

```text id="w8p2mq"
Connected

     ↓

Internet Lost

     ↓

Offline Event

     ↓

Wait

     ↓

Online Event

     ↓

Reconnect
```

> 💡 Esto permite manejar correctamente estados offline y recuperar la conexión WebSocket cuando Internet vuelve.
