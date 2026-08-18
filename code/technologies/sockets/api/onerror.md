# ⚠️ 05 — onerror

> 💡 **¿Qué pasa si algo falla durante la comunicación?**

Durante una conexión WebSocket pueden ocurrir problemas que impidan establecer o mantener la comunicación.

Para detectar estos problemas existe el evento:

```javascript
onerror
```

> 💡 Este evento permite reaccionar cuando ocurre un error en la conexión WebSocket.

---

## 📑 Índice

- [⚠️ 05 — onerror](#️-05--onerror)
  - [📑 Índice](#-índice)
- [1️⃣ What is onerror? ⚠️](#1️⃣-what-is-onerror-️)
  - [¿Qué es onerror?](#qué-es-onerror)
    - [📌 Ejemplo](#-ejemplo)
    - [🔄 Flujo](#-flujo)
- [2️⃣ WebSocket Errors ❌](#2️⃣-websocket-errors-)
    - [🔄 Ejemplo](#-ejemplo-1)
- [3️⃣ Connection Failures 🔌](#3️⃣-connection-failures-)
    - [❌ Ejemplos](#-ejemplos)
    - [🔄 Flujo](#-flujo-1)
- [4️⃣ Network Problems 🌐](#4️⃣-network-problems-)
    - [❌ Ejemplos](#-ejemplos-1)
    - [🔄 Ejemplo](#-ejemplo-2)
- [5️⃣ Server Errors 🖥️](#5️⃣-server-errors-️)
    - [❌ Ejemplos](#-ejemplos-2)
    - [🔄 Flujo](#-flujo-2)
- [6️⃣ Error Handling 🛠️](#6️⃣-error-handling-️)
    - [📌 Ejemplo](#-ejemplo-3)
    - [🛠️ Acciones comunes](#️-acciones-comunes)
    - [🔄 Ejemplo](#-ejemplo-4)
- [7️⃣ Difference Between Error and Close 🔄](#7️⃣-difference-between-error-and-close-)
    - [⚠️ onerror](#️-onerror)
    - [📌 Ejemplo](#-ejemplo-5)
    - [🔒 onclose](#-onclose)
    - [📌 Ejemplo](#-ejemplo-6)
    - [📊 Comparación](#-comparación)
    - [🔄 Flujo](#-flujo-3)
- [📌 Casos comunes de error](#-casos-comunes-de-error)
  - [❌ Invalid URL](#-invalid-url)
  - [🖥️ Server unavailable](#️-server-unavailable)
  - [🌐 Network failure](#-network-failure)
  - [🚫 Connection refused](#-connection-refused)
  - [⚠️ Protocol errors](#️-protocol-errors)
- [🔄 onerror Flow](#-onerror-flow)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)
    - [📌 Ejemplo](#-ejemplo-7)
    - [🔄 Diferencia](#-diferencia)

# 1️⃣ What is onerror? ⚠️

## ¿Qué es onerror?

`onerror` es un evento de WebSocket que se ejecuta cuando ocurre un error durante la comunicación.

### 📌 Ejemplo

```javascript
socket.onerror = (error) => {

  console.error(error);

};
```

### 🔄 Flujo

```text
WebSocket Error

        ↓

onerror executes
```

---

# 2️⃣ WebSocket Errors ❌

Un error WebSocket ocurre cuando la conexión no puede funcionar correctamente.

Puede suceder durante:

* 🔗 Creación de conexión.
* 🤝 Handshake.
* 📡 Comunicación.
* 🔒 Cierre.

### 🔄 Ejemplo

```text
Create Connection

        ↓

Error

        ↓

onerror
```

---

# 3️⃣ Connection Failures 🔌

Una conexión puede fallar cuando el cliente no logra conectarse correctamente al servidor.

### ❌ Ejemplos

* Servidor no disponible.
* URL incorrecta.
* Conexión rechazada.

### 🔄 Flujo

```text
Client

Connect

   ↓

Server

Unavailable

   ↓

onerror
```

---

# 4️⃣ Network Problems 🌐

Los problemas de red pueden afectar una conexión WebSocket.

### ❌ Ejemplos

* 📡 Pérdida de internet.
* 🔌 Interrupción de conexión.
* 🌍 Problemas de red.

### 🔄 Ejemplo

```text
Client ◄────────► Server


Network Failure


Client       Server

      X
```

La aplicación puede detectar el problema mediante:

```javascript
socket.onerror
```

> ⚠️ **Tip:** Los problemas de red pueden afectar una conexión WebSocket.

---

# 5️⃣ Server Errors 🖥️

El servidor puede causar errores durante una conexión WebSocket.

### ❌ Ejemplos

* Servidor apagado.
* Error interno.
* Rechazo de conexión.
* Problemas durante handshake.

### 🔄 Flujo

```text
Client

Connection Request

        ↓

Server Error

        ↓

onerror
```

---

# 6️⃣ Error Handling 🛠️

El manejo de errores permite responder correctamente cuando ocurre un problema.

### 📌 Ejemplo

```javascript
socket.onerror = (error) => {

  console.error(
    "WebSocket error",
    error
  );

};
```

### 🛠️ Acciones comunes

* Mostrar mensaje al usuario.
* Registrar el error.
* Actualizar estado de conexión.

### 🔄 Ejemplo

```text
Connected 🟢

        ↓

Error ⚠️

        ↓

Update UI
```

---

# 7️⃣ Difference Between Error and Close 🔄

`onerror` y `onclose` representan situaciones diferentes.

### ⚠️ onerror

Indica que ocurrió un problema.

```text
Something went wrong
```

### 📌 Ejemplo

```javascript
socket.onerror = () => {

};
```

### 🔒 onclose

Indica que la conexión terminó.

```text
Connection ended
```

### 📌 Ejemplo

```javascript
socket.onclose = () => {

};
```

### 📊 Comparación

| Evento       | Significado                            |
| ------------ | -------------------------------------- |
| ⚠️ `onerror` | Algo salió mal durante la comunicación |
| 🔒 `onclose` | La conexión finalizó                   |

### 🔄 Flujo

```text
Error:

Something went wrong

        ↓

onerror
```

```text
Close:

Connection ended

        ↓

onclose
```

---

# 📌 Casos comunes de error

## ❌ Invalid URL

La URL utilizada para crear la conexión no es válida.

```text
Invalid WebSocket URL
```

---

## 🖥️ Server unavailable

El servidor no está disponible.

```text
Client

        X

Server
```

---

## 🌐 Network failure

Problema en la comunicación de red.

```text
Connection lost
```

---

## 🚫 Connection refused

El servidor rechaza la conexión.

```text
Connection refused
```

---

## ⚠️ Protocol errors

Error relacionado con el protocolo WebSocket.

```text
Protocol Error

        ↓

onerror
```

---

# 🔄 onerror Flow

```text
WebSocket Connection

        ↓

Problem occurs

        ↓

onerror

        ↓

Handle Error
```

---

# 🧠 Conceptos principales

| Concepto               | Significado                             |
| ---------------------- | --------------------------------------- |
| ⚠️ `onerror`           | Evento ejecutado cuando ocurre un error |
| ❌ WebSocket Errors     | Problemas durante la comunicación       |
| 🔌 Connection Failures | Fallos al establecer conexión           |
| 🌐 Network Problems    | Problemas externos de red               |
| 🖥️ Server Errors      | Errores producidos por el servidor      |
| 🛠️ Error Handling     | Manejo de errores en la aplicación      |

---

# 🎯 Al terminar

`onerror` permite detectar problemas durante una conexión WebSocket.

### 📌 Ejemplo

```javascript
socket.onerror = (error) => {

  console.error(error);

};
```

### 🔄 Diferencia

```text
onerror

↓

Something went wrong
```

```text
onclose

↓

Connection ended
```

> 🎯 `onerror` detecta problemas, mientras que `onclose` indica que la conexión terminó.
