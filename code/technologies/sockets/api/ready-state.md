# 🔄 09 — readyState

> 💡 **¿Cómo sé en qué estado está mi conexión?**

Una conexión WebSocket pasa por diferentes estados durante su ciclo de vida.

Para conocer el estado actual de una conexión se utiliza la propiedad:

```javascript id="7m4qxp"
readyState
```

---

## 📚 Índice

- [🔄 09 — readyState](#-09--readystate)
  - [📚 Índice](#-índice)
- [1️⃣ What is readyState? 🔄](#1️⃣-what-is-readystate-)
  - [¿Qué es readyState?](#qué-es-readystate)
    - [📌 Ejemplo](#-ejemplo)
- [2️⃣ WebSocket States 📊](#2️⃣-websocket-states-)
- [3️⃣ CONNECTING 🔄](#3️⃣-connecting-)
    - [🔢 Valor](#-valor)
    - [📌 Estado](#-estado)
    - [🔄 Ejemplo](#-ejemplo-1)
- [4️⃣ OPEN 🟢](#4️⃣-open-)
    - [🔢 Valor](#-valor-1)
    - [📌 Estado](#-estado-1)
    - [🔄 Ejemplo](#-ejemplo-2)
- [5️⃣ CLOSING 🔒](#5️⃣-closing-)
    - [🔢 Valor](#-valor-2)
    - [📌 Estado](#-estado-2)
    - [🔄 Ejemplo](#-ejemplo-3)
- [6️⃣ CLOSED ❌](#6️⃣-closed-)
    - [🔢 Valor](#-valor-3)
    - [📌 Estado](#-estado-3)
    - [🔄 Ejemplo](#-ejemplo-4)
- [7️⃣ Checking Connection Status 🔍](#7️⃣-checking-connection-status-)
    - [📌 Ejemplo](#-ejemplo-5)
    - [📊 Resultado posible](#-resultado-posible)
- [8️⃣ Using readyState Before send() 📤](#8️⃣-using-readystate-before-send-)
    - [📌 Ejemplo](#-ejemplo-6)
    - [🔄 Flujo](#-flujo)
- [📊 WebSocket States Table](#-websocket-states-table)
- [🔄 Ciclo completo](#-ciclo-completo)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)
    - [📌 Ejemplo](#-ejemplo-7)
    - [🔄 El ciclo de vida es:](#-el-ciclo-de-vida-es)

# 1️⃣ What is readyState? 🔄

## ¿Qué es readyState?

`readyState` es una propiedad del objeto WebSocket que indica el estado actual de la conexión.

### 📌 Ejemplo

```javascript id="m5q8vx"
socket.readyState
```

Permite saber si una conexión está:

* 🔄 Conectándose.
* 🟢 Abierta.
* 🔒 Cerrándose.
* ❌ Cerrada.

---

# 2️⃣ WebSocket States 📊

Una conexión WebSocket tiene cuatro estados principales:

```text id="q8m3xp"
CONNECTING

      ↓

OPEN

      ↓

CLOSING

      ↓

CLOSED
```

> 💡 Cada estado tiene un valor numérico asociado.

---

# 3️⃣ CONNECTING 🔄

### 🔢 Valor

```text id="p6n2mv"
0
```

### 📌 Estado

```javascript id="x5m8qp"
WebSocket.CONNECTING
```

Significa que la conexión todavía se está estableciendo.

### 🔄 Ejemplo

```text id="n7q3mv"
new WebSocket()

        ↓

CONNECTING
```

Durante este estado:

* 🔄 Se realiza el handshake.
* ⏳ La conexión todavía no está lista.
* ❌ No se deben enviar mensajes.

> ⚠️ **Tip:** Mientras está en `CONNECTING`, la conexión todavía no está lista para enviar mensajes.

---

# 4️⃣ OPEN 🟢

### 🔢 Valor

```text id="k8m4qx"
1
```

### 📌 Estado

```javascript id="v4n7mp"
WebSocket.OPEN
```

Significa que la conexión está activa y lista para comunicarse.

Puede realizar:

```javascript id="r6m2qx"
send()

receive messages
```

### 🔄 Ejemplo

```text id="t8m4qp"
CONNECTING

        ↓

OPEN

        ↓

Communication
```

> 💡 **Tip:** `OPEN` indica que la conexión está activa y lista para comunicarse.

---

# 5️⃣ CLOSING 🔒

### 🔢 Valor

```text id="m3q8vx"
2
```

### 📌 Estado

```javascript id="x7n2mp"
WebSocket.CLOSING
```

Significa que la conexión está en proceso de cierre.

### 🔄 Ejemplo

```text id="p9m4qx"
OPEN

 ↓

close()

 ↓

CLOSING
```

Durante este estado:

* 🔒 Se está cerrando la conexión.
* ⏳ El cierre todavía no terminó.

---

# 6️⃣ CLOSED ❌

### 🔢 Valor

```text id="w8m3qp"
3
```

### 📌 Estado

```javascript id="b6m9qx"
WebSocket.CLOSED
```

Significa que la conexión terminó completamente.

### 🔄 Ejemplo

```text id="s4m8xp"
CLOSING

        ↓

CLOSED
```

En este estado:

* ❌ No se pueden enviar mensajes.
* 🔄 Se puede crear una nueva conexión.

---

# 7️⃣ Checking Connection Status 🔍

`readyState` permite consultar el estado actual de una conexión.

### 📌 Ejemplo

```javascript id="a7m3qp"
console.log(
  socket.readyState
);
```

### 📊 Resultado posible

```text id="c8m4qx"
0 → CONNECTING

1 → OPEN

2 → CLOSING

3 → CLOSED
```

---

# 8️⃣ Using readyState Before send() 📤

Antes de enviar mensajes es recomendable comprobar que la conexión está abierta.

### 📌 Ejemplo

```javascript id="h8m4qx"
if(socket.readyState === WebSocket.OPEN){

  socket.send("Hello");

}
```

### 🔄 Flujo

```text id="n5p2vx"
Check State

        ↓

Is OPEN?

        ↓

send()
```

> ⚠️ Evita intentar enviar datos cuando la conexión todavía no está lista.

---

# 📊 WebSocket States Table

| Value | Constant     | Meaning    |
| ----: | ------------ | ---------- |
|   `0` | `CONNECTING` | Connecting |
|   `1` | `OPEN`       | Connected  |
|   `2` | `CLOSING`    | Closing    |
|   `3` | `CLOSED`     | Closed     |

---

# 🔄 Ciclo completo

```text id="x9p2mq"
CONNECTING

      |

      ▼

OPEN

      |

      ▼

CLOSING

      |

      ▼

CLOSED
```

---

# 🧠 Conceptos principales

| Concepto             | Significado                                        |
| -------------------- | -------------------------------------------------- |
| 🔄 `readyState`      | Propiedad que indica el estado actual de WebSocket |
| 🔗 `CONNECTING`      | Conexión en proceso de creación                    |
| 🟢 `OPEN`            | Conexión activa                                    |
| 🔒 `CLOSING`         | Conexión cerrándose                                |
| ❌ `CLOSED`           | Conexión terminada                                 |
| 📤 Connection Status | Estado usado antes de enviar mensajes              |

---

# 🎯 Al terminar

`readyState` permite conocer el estado actual de una conexión WebSocket.

### 📌 Ejemplo

```javascript id="m6q9xp"
if(socket.readyState === WebSocket.OPEN){

  socket.send("Hello");

}
```

### 🔄 El ciclo de vida es:

```text id="r4n8mv"
CONNECTING

      ↓

OPEN

      ↓

CLOSING

      ↓

CLOSED
```

> 🎯 La aplicación debe comprobar que la conexión está en estado `OPEN` antes de enviar mensajes.
