# 📦 04 — WebSocket Frames

> **¿Cómo viajan los datos dentro de una conexión WebSocket?**

Una vez que una conexión WebSocket está establecida, los datos no se envían directamente como un bloque completo.

Los mensajes se transportan utilizando una estructura llamada:

```text
Frame
```

> 💡 Los **frames** son las unidades pequeñas que permiten enviar información dentro de una conexión WebSocket.

---

## 📦 Índice

- [📦 04 — WebSocket Frames](#-04--websocket-frames)
  - [📦 Índice](#-índice)
- [1️⃣ What is a WebSocket Frame? 📦](#1️⃣-what-is-a-websocket-frame-)
  - [¿Qué es un WebSocket Frame?](#qué-es-un-websocket-frame)
    - [🔄 Flujo](#-flujo)
- [2️⃣ Why Frames Exist? 🤔](#2️⃣-why-frames-exist-)
  - [¿Por qué existen los Frames?](#por-qué-existen-los-frames)
    - [📦 Ejemplo](#-ejemplo)
- [3️⃣ Frame Structure 🏗️](#3️⃣-frame-structure-️)
- [4️⃣ Frame Header 📋](#4️⃣-frame-header-)
- [5️⃣ Payload Data 📦](#5️⃣-payload-data-)
- [6️⃣ Text Frames 📝](#6️⃣-text-frames-)
    - [📄 Ejemplo](#-ejemplo-1)
    - [🔄 Flujo](#-flujo-1)
- [7️⃣ Binary Frames 💾](#7️⃣-binary-frames-)
    - [🔄 Flujo](#-flujo-2)
- [8️⃣ Fragmentation 🧩](#8️⃣-fragmentation-)
- [9️⃣ Message vs Frame 🧠](#9️⃣-message-vs-frame-)
  - [💬 Message](#-message)
  - [📦 Frame](#-frame)
- [🔄 Message Flow](#-message-flow)
    - [📡 Ejemplo](#-ejemplo-2)
- [🧠 Tipos de Frames](#-tipos-de-frames)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)

# 1️⃣ What is a WebSocket Frame? 📦

## ¿Qué es un WebSocket Frame?

Un **WebSocket Frame** es una unidad de datos utilizada por el protocolo WebSocket para transportar información entre cliente y servidor.

Cada mensaje enviado por WebSocket viaja dentro de uno o varios frames.

### 🔄 Flujo

```text id="k4zq8m"
Message

   ↓

Frames

   ↓

Network

   ↓

Receiver
```

Un frame contiene:

* 📋 Información de control.
* 📦 Datos del mensaje.

---

# 2️⃣ Why Frames Exist? 🤔

## ¿Por qué existen los Frames?

Los frames permiten que WebSocket pueda transportar mensajes de manera eficiente dentro de una conexión persistente.

Sirven para:

* Dividir mensajes grandes.
* Identificar el tipo de información enviada.
* Controlar cómo se transmite cada parte del mensaje.

### 📦 Ejemplo

Un mensaje grande:

```text id="v5m8qx"
Large Message

        ↓

Frame 1

Frame 2

Frame 3

        ↓

Receiver combines data
```

---

# 3️⃣ Frame Structure 🏗️

Un WebSocket Frame tiene una estructura formada principalmente por:

```text id="z6q3mb"
+----------------+
| Frame Header   |
+----------------+
| Payload        |
+----------------+
```

| Parte               | Descripción                      |
| ------------------- | -------------------------------- |
| 📋 **Frame Header** | Información de control del frame |
| 📦 **Payload Data** | Datos reales enviados            |

---

# 4️⃣ Frame Header 📋

El **Frame Header** contiene información necesaria para interpretar el frame.

Incluye datos como:

* Tipo de frame.
* Tamaño del payload.
* Información de control.

```text id="u4r7hp"
+----------------+
| Frame Header   |
+----------------+

Information about frame
```

> 💡 El receptor utiliza el header para saber cómo procesar los datos recibidos.

---

# 5️⃣ Payload Data 📦

El **Payload Data** contiene la información real del mensaje.

```text id="d3p9kx"
Frame Header

        +

Payload:

"Hello Server"
```

El payload puede contener:

* Texto.
* Datos binarios.
* Información de control.

---

# 6️⃣ Text Frames 📝

Los **Text Frames** contienen información en formato texto.

```text id="j8q2wm"
Message:

"Hello"
```

Son utilizados comúnmente para:

* Mensajes de chat.
* Datos JSON.
* Eventos simples.

### 📄 Ejemplo

```json
{
  "message": "Hello"
}
```

### 🔄 Flujo

```text id="p7m4sx"
Client

Text Frame

        ↓

Server
```

---

# 7️⃣ Binary Frames 💾

Los **Binary Frames** transportan información en formato binario.

Ejemplos:

* Archivos.
* Imágenes.
* Audio.
* Datos comprimidos.

### 🔄 Flujo

```text id="h5q8vn"
Client

Binary Frame

        ↓

Server
```

| Tipo                | Uso                       |
| ------------------- | ------------------------- |
| 📝 **Text Frame**   | Texto, JSON, mensajes     |
| 💾 **Binary Frame** | Archivos y datos binarios |

---

# 8️⃣ Fragmentation 🧩

La fragmentación permite dividir un mensaje grande en múltiples frames.

```text id="r6k2mw"
Message

        ↓

+---------+
| Frame 1 |
+---------+

+---------+
| Frame 2 |
+---------+

+---------+
| Frame 3 |
+---------+
```

> 💡 El receptor recibe los frames y reconstruye el mensaje original.

Se utiliza cuando:

* El mensaje es grande.
* Se necesita enviar datos por partes.

---

# 9️⃣ Message vs Frame 🧠

Es importante diferenciar:

## 💬 Message

Es la información completa que la aplicación quiere enviar.

```text id="b9v3km"
"Hello, user"
```

## 📦 Frame

Es la unidad utilizada por WebSocket para transportar ese mensaje.

```text id="q8n5zs"
Message

        ↓

Frame 1

Frame 2

Frame 3
```

| Concepto       | Significado                                  |
| -------------- | -------------------------------------------- |
| 💬 **Message** | Información lógica enviada por la aplicación |
| 📦 **Frame**   | Unidad de transporte del protocolo WebSocket |

---

# 🔄 Message Flow

Un mensaje WebSocket no viaja directamente.

El proceso es:

```text id="k5m8qp"
Message

   ↓

Frames

   ↓

Network

   ↓

Frames

   ↓

Message
```

### 📡 Ejemplo

```text id="f7n2cx"
Application Message

        ↓

WebSocket Frames

        ↓

Network Transfer

        ↓

Receiver Rebuilds Message
```

---

# 🧠 Tipos de Frames

WebSocket maneja diferentes tipos de frames:

| Tipo                   | Descripción                                  |
| ---------------------- | -------------------------------------------- |
| 📝 **Text Data**       | Datos de texto                               |
| 💾 **Binary Data**     | Datos binarios                               |
| 🎛️ **Control Frames** | Frames utilizados para controlar la conexión |

---

# 🧠 Conceptos principales

| Concepto               | Significado                                    |
| ---------------------- | ---------------------------------------------- |
| 📦 **WebSocket Frame** | Unidad de datos del protocolo WebSocket        |
| 📋 **Frame Header**    | Información de control del frame               |
| 📦 **Payload Data**    | Datos reales enviados                          |
| 📝 **Text Frame**      | Frame con datos de texto                       |
| 💾 **Binary Frame**    | Frame con datos binarios                       |
| 🧩 **Fragmentation**   | División de un mensaje en varios frames        |
| 💬 **Message**         | Información completa enviada por la aplicación |

---

# 🎯 Al terminar

Un mensaje WebSocket no viaja directamente por la red.

El flujo es:

```text id="p3m7sx"
Message

   ↓

Frames

   ↓

Network
```

> 💡 Los **frames** son las unidades utilizadas por WebSocket para transportar mensajes, pudiendo contener texto, datos binarios o información de control.
