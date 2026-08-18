# 🔢 05 — Opcodes

> **¿Cómo sabe WebSocket qué significa un frame?**

Dentro de una conexión WebSocket, los frames contienen información sobre los datos enviados.

Para identificar qué tipo de información contiene un frame, WebSocket utiliza un campo llamado:

```text
Opcode
```

> 💡 Los **opcodes** indican qué tipo de frame está siendo enviado.

---

## 🔢 Índice

- [🔢 05 — Opcodes](#-05--opcodes)
  - [🔢 Índice](#-índice)
- [1️⃣ What are Opcodes? 🔢](#1️⃣-what-are-opcodes-)
  - [¿Qué son los Opcodes?](#qué-son-los-opcodes)
    - [📌 Ejemplo](#-ejemplo)
- [2️⃣ Opcode Field 📋](#2️⃣-opcode-field-)
    - [🏗️ Estructura conceptual](#️-estructura-conceptual)
    - [📌 Ejemplo](#-ejemplo-1)
- [3️⃣ Data Frames 📦](#3️⃣-data-frames-)
- [4️⃣ Control Frames 🎛️](#4️⃣-control-frames-️)
- [5️⃣ Text Opcode 📝](#5️⃣-text-opcode-)
    - [📌 Ejemplo](#-ejemplo-2)
    - [💬 Casos comunes](#-casos-comunes)
- [6️⃣ Binary Opcode 💾](#6️⃣-binary-opcode-)
    - [📌 Ejemplo](#-ejemplo-3)
- [7️⃣ Close Opcode 🔒](#7️⃣-close-opcode-)
    - [🔄 Flujo](#-flujo)
- [8️⃣ Ping Opcode ❤️](#8️⃣-ping-opcode-️)
    - [🔄 Flujo](#-flujo-1)
- [9️⃣ Pong Opcode ❤️](#9️⃣-pong-opcode-️)
    - [🔄 Flujo](#-flujo-2)
- [📊 Opcode Table](#-opcode-table)
- [🧠 Data Frames vs Control Frames](#-data-frames-vs-control-frames)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)
    - [📌 Ejemplo](#-ejemplo-4)

# 1️⃣ What are Opcodes? 🔢

## ¿Qué son los Opcodes?

Los **Opcodes** son valores utilizados por WebSocket para identificar la función o el tipo de un frame.

Indican:

```text
"What type of frame is this?"
```

### 📌 Ejemplo

Un frame contiene:

```text
Opcode: Text
```

Significa:

```text
Este frame contiene datos de texto
```

**Payload:**

```text
"Hello"
```

---

# 2️⃣ Opcode Field 📋

El **Opcode Field** es una parte del WebSocket Frame Header.

Su función es indicar qué tipo de frame está siendo transmitido.

### 🏗️ Estructura conceptual

```text
+----------------+
| Frame Header   |
|                |
| Opcode         |
+----------------+

| Payload        |
+----------------+
```

> 💡 El receptor revisa el opcode para saber cómo procesar la información.

### 📌 Ejemplo

```text
Frame received

Opcode: 0x1

↓

Text Frame
```

---

# 3️⃣ Data Frames 📦

Los **Data Frames** contienen información enviada por la aplicación.

Incluyen:

* 📝 Text Frames.
* 💾 Binary Frames.

Estos frames transportan datos reales.

```text
Client

Message:

"Hello"

        ↓

Text Frame

        ↓

Server
```

---

# 4️⃣ Control Frames 🎛️

Los **Control Frames** son frames utilizados para controlar el estado de la conexión WebSocket.

No contienen datos de la aplicación.

Sirven para:

* 🔒 Cerrar conexiones.
* ❤️ Verificar que una conexión sigue activa.
* 🔄 Mantener comunicación.

| Opcode | Tipo  |
| ------ | ----- |
| `0x8`  | Close |
| `0x9`  | Ping  |
| `0xA`  | Pong  |

---

# 5️⃣ Text Opcode 📝

El opcode:

```text
0x1
```

representa un:

```text
Text Frame
```

Se utiliza cuando el payload contiene texto.

### 📌 Ejemplo

```text
Opcode:

0x1


Payload:

"Hello"
```

### 💬 Casos comunes

* Mensajes de chat.
* Datos JSON.
* Eventos de aplicación.

---

# 6️⃣ Binary Opcode 💾

El opcode:

```text
0x2
```

representa un:

```text
Binary Frame
```

Se utiliza cuando los datos están en formato binario.

Ejemplos:

* Archivos.
* Imágenes.
* Audio.
* Datos comprimidos.

### 📌 Ejemplo

```text
Opcode:

0x2


Payload:

Binary Data
```

---

# 7️⃣ Close Opcode 🔒

El opcode:

```text
0x8
```

representa un:

```text
Close Frame
```

Se utiliza para iniciar o confirmar el cierre de una conexión WebSocket.

### 🔄 Flujo

```text
Client

Close Frame

        ↓

Server

Close Frame

        ↓

Connection Closed
```

---

# 8️⃣ Ping Opcode ❤️

El opcode:

```text
0x9
```

representa un:

```text
Ping Frame
```

Ping se utiliza para comprobar si la conexión sigue activa.

### 🔄 Flujo

```text
Client

Ping

   ↓

Server
```

El receptor debe responder con un:

```text
Pong
```

---

# 9️⃣ Pong Opcode ❤️

El opcode:

```text
0xA
```

representa un:

```text
Pong Frame
```

Es la respuesta a un Ping.

### 🔄 Flujo

```text
Ping

 ↓

Pong
```

Sirve para confirmar:

```text
Connection is alive
```

---

# 📊 Opcode Table

| Opcode | Meaning      |
| ------ | ------------ |
| `0x0`  | Continuation |
| `0x1`  | Text Frame   |
| `0x2`  | Binary Frame |
| `0x8`  | Close        |
| `0x9`  | Ping         |
| `0xA`  | Pong         |

---

# 🧠 Data Frames vs Control Frames

| Tipo                   | Opcodes             | Uso                     |
| ---------------------- | ------------------- | ----------------------- |
| 📦 **Data Frames**     | `0x1`, `0x2`        | Transportar información |
| 🎛️ **Control Frames** | `0x8`, `0x9`, `0xA` | Controlar la conexión   |

---

# 🧠 Conceptos principales

| Concepto             | Significado                     |
| -------------------- | ------------------------------- |
| 🔢 **Opcode**        | Identificador del tipo de frame |
| 📋 **Opcode Field**  | Campo dentro del frame header   |
| 📝 **Text Opcode**   | Frame con datos de texto        |
| 💾 **Binary Opcode** | Frame con datos binarios        |
| 🔒 **Close Opcode**  | Solicitud de cierre             |
| ❤️ **Ping Opcode**   | Verificación de conexión        |
| ❤️ **Pong Opcode**   | Respuesta a Ping                |

---

# 🎯 Al terminar

Los **opcodes** permiten que WebSocket identifique qué tipo de frame está enviando.

### 📌 Ejemplo

```text
Opcode: Text

Payload:

"Hello"
```

El receptor interpreta:

```text
Opcode 0x1

↓

Text Frame
```

> 🧠 Los opcodes permiten diferenciar entre datos de aplicación y frames de control dentro de una conexión WebSocket.
