# 🔒 08 — close()

> 💡 **¿Cómo termina un cliente una conexión WebSocket?**

Una conexión WebSocket puede cerrarse cuando ya no es necesaria.

Para cerrar correctamente una conexión se utiliza el método:

```javascript id="z2xq8s"
close()
```

> 💡 Este método permite finalizar la comunicación entre cliente y servidor.

---

## 🔒 indice

- [🔒 08 — close()](#-08--close)
  - [🔒 indice](#-indice)
- [1️⃣ What is close()? 🔒](#1️⃣-what-is-close-)
  - [¿Qué es close()?](#qué-es-close)
    - [📌 Sintaxis](#-sintaxis)
    - [🔄 Flujo](#-flujo)
- [2️⃣ Closing a Connection 🔌](#2️⃣-closing-a-connection-)
    - [📌 Ejemplo](#-ejemplo)
    - [🔄 Flujo](#-flujo-1)
- [3️⃣ Close Codes 🔢](#3️⃣-close-codes-)
    - [📌 Ejemplo](#-ejemplo-1)
    - [📌 Ejemplo](#-ejemplo-2)
- [4️⃣ Close Reason 📝](#4️⃣-close-reason-)
    - [📌 Ejemplo](#-ejemplo-3)
    - [🔄 Flujo](#-flujo-2)
- [5️⃣ Graceful Shutdown ✅](#5️⃣-graceful-shutdown-)
    - [🔄 Proceso](#-proceso)
    - [✅ Ventajas](#-ventajas)
- [6️⃣ Cleanup 🧹](#6️⃣-cleanup-)
    - [🧹 Ejemplos](#-ejemplos)
    - [🔄 Flujo](#-flujo-3)
- [7️⃣ Client vs Server Closing 🔄](#7️⃣-client-vs-server-closing-)
  - [👤 Client Closing](#-client-closing)
    - [📌 Ejemplo](#-ejemplo-4)
    - [🔄 Flujo](#-flujo-4)
  - [🖥️ Server Closing](#️-server-closing)
    - [🔄 Flujo](#-flujo-5)
- [🔄 close() Flow](#-close-flow)
- [📦 Close Information](#-close-information)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)
    - [🔄 El cierre correcto sigue este flujo:](#-el-cierre-correcto-sigue-este-flujo)

---

# 1️⃣ What is close()? 🔒

## ¿Qué es close()?

`close()` es un método del objeto WebSocket utilizado para cerrar una conexión activa.

### 📌 Sintaxis

```javascript id="3r0n7c"
socket.close();
```

### 🔄 Flujo

```text id="u0z8v1"
OPEN

 ↓

close()

 ↓

CLOSED
```

---

# 2️⃣ Closing a Connection 🔌

Cerrar una conexión WebSocket significa terminar la comunicación entre el cliente y el servidor.

### 📌 Ejemplo

```javascript id="k4b5q1"
socket.close();
```

### 🔄 Flujo

```text id="9q5r3v"
Client

close()

        ↓

Close Frame

        ↓

Server

        ↓

Connection Closed
```

La conexión pasa de:

```text id="h1m7p9"
OPEN
```

a:

```text id="n3x6w2"
CLOSED
```

---

# 3️⃣ Close Codes 🔢

Al cerrar una conexión se puede enviar un código que indica el motivo del cierre.

### 📌 Ejemplo

```javascript id="p8v2k4"
socket.close(
  1000
);
```

El código representa:

```text id="q4m8s1"
Close Code

        ↓

Reason for Closing
```

### 📌 Ejemplo

```text id="w7c2m5"
1000
```

Indica un cierre normal.

> 💡 **Tip:** El `Close Code` permite indicar el motivo del cierre.

---

# 4️⃣ Close Reason 📝

También se puede enviar una razón descriptiva del cierre.

### 📌 Ejemplo

```javascript id="b5n9q3"
socket.close(
  1000,
  "Finished"
);
```

El mensaje:

```text id="x2m6v8"
Finished
```

indica por qué terminó la conexión.

### 🔄 Flujo

```text id="r7p4k2"
Close Code

        +

Close Reason

        ↓

Close Information
```

---

# 5️⃣ Graceful Shutdown ✅

Un **Graceful Shutdown** significa cerrar una conexión de forma ordenada.

### 🔄 Proceso

```text id="m8q3v6"
Active Connection

        ↓

Send Close Frame

        ↓

Confirm Close

        ↓

Connection Closed
```

### ✅ Ventajas

* ✅ Evita conexiones abiertas innecesariamente.
* ✅ Permite limpiar recursos.
* ✅ Finaliza la comunicación correctamente.

---

# 6️⃣ Cleanup 🧹

Después de cerrar una conexión se deben liberar recursos.

### 🧹 Ejemplos

* 🧹 Limpiar datos temporales.
* 🔌 Eliminar referencias al socket.
* 🔄 Actualizar estado de conexión.

### 🔄 Flujo

```text id="c4x7m2"
close()

        ↓

Cleanup

        ↓

Resources Released
```

> 💡 **Tip:** El `Cleanup` permite liberar recursos después del cierre.

---

# 7️⃣ Client vs Server Closing 🔄

Una conexión WebSocket puede cerrarse desde ambos lados.

## 👤 Client Closing

El cliente inicia el cierre.

### 📌 Ejemplo

```javascript id="v9m3q6"
socket.close();
```

### 🔄 Flujo

```text id="k5r8x1"
Client

Close Request

        ↓

Server

        ↓

Connection Closed
```

## 🖥️ Server Closing

El servidor puede iniciar el cierre.

### 🔄 Flujo

```text id="p2n7m4"
Server

Close Request

        ↓

Client

        ↓

Connection Closed
```

> 🔄 Ambos lados pueden finalizar una conexión WebSocket.

---

# 🔄 close() Flow

```text id="s6q4m8"
OPEN

 ↓

close()

 ↓

Close Frame

 ↓

Connection Closed

 ↓

Cleanup
```

---

# 📦 Close Information

| Concepto       | Significado                               |
| -------------- | ----------------------------------------- |
| 🔒 Close Frame | Mensaje utilizado para cerrar la conexión |
| 🔢 Close Code  | Código que indica el motivo del cierre    |
| 📝 Reason      | Descripción del cierre                    |
| 🧹 Cleanup     | Liberación de recursos después del cierre |

---

# 🧠 Conceptos principales

| Concepto       | Significado                               |
| -------------- | ----------------------------------------- |
| 🔒 `close()`   | Método para cerrar una conexión WebSocket |
| 📦 Close Frame | Frame utilizado durante el cierre         |
| 🔢 Close Code  | Código enviado al cerrar                  |
| 📝 Reason      | Motivo del cierre                         |
| 🧹 Cleanup     | Acciones posteriores al cierre            |

---

# 🎯 Al terminar

Un cliente termina una conexión WebSocket utilizando:

```javascript id="q8m2v5"
socket.close();
```

También puede indicar un código y razón:

```javascript id="x4p7n9"
socket.close(
  1000,
  "Finished"
);
```

### 🔄 El cierre correcto sigue este flujo:

```text id="m6q3r8"
OPEN

 ↓

close()

 ↓

Close Frame

 ↓

Connection Closed

 ↓

Cleanup
```

> 🎯 Una conexión WebSocket puede cerrarse tanto desde el cliente como desde el servidor.
