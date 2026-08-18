# 📦 04 — Payloads

> 💡 **¿Qué información lleva realmente un mensaje?**

Un mensaje WebSocket normalmente contiene diferentes partes que permiten identificar la acción, agregar información adicional y transportar los datos principales.

---
## 📚 Índice
- [📦 04 — Payloads](#-04--payloads)
  - [📚 Índice](#-índice)
- [1️⃣ What is a Payload? 📦](#1️⃣-what-is-a-payload-)
  - [¿Qué es un Payload?](#qué-es-un-payload)
    - [Ejemplo](#ejemplo)
- [2️⃣ Message Envelope ✉️](#2️⃣-message-envelope-️)
    - [Conceptualmente](#conceptualmente)
- [3️⃣ Payload Data 📄](#3️⃣-payload-data-)
    - [Ejemplo](#ejemplo-1)
- [4️⃣ Metadata 🏷️](#4️⃣-metadata-️)
    - [Ejemplo](#ejemplo-2)
- [5️⃣ User Information 👤](#5️⃣-user-information-)
    - [Ejemplo](#ejemplo-3)
- [6️⃣ Timestamps 🕒](#6️⃣-timestamps-)
    - [Ejemplo](#ejemplo-4)
- [7️⃣ IDs 🆔](#7️⃣-ids-)
    - [Ejemplos](#ejemplos)
- [8️⃣ Nested Payloads 🗂️](#8️⃣-nested-payloads-️)
    - [Ejemplo](#ejemplo-5)
    - [Flujo](#flujo)
- [9️⃣ Payload Validation ✅](#9️⃣-payload-validation-)
    - [Flujo](#flujo-1)
- [🔟 Payload Size 📏](#-payload-size-)
    - [Problema](#problema)
- [🧾 Ejemplo completo](#-ejemplo-completo)
- [🧩 Partes del mensaje](#-partes-del-mensaje)
  - [🏷️ Type](#️-type)
  - [🏷️ Metadata](#️-metadata)
  - [📦 Payload](#-payload)
- [🔄 Message Structure Flow](#-message-structure-flow)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)
    - [Ejemplo](#ejemplo-6)

# 1️⃣ What is a Payload? 📦

## ¿Qué es un Payload?

Un **Payload** es la información principal que contiene un mensaje.

Representa los datos que el cliente o servidor quiere enviar.

### Ejemplo

```json id="m7q3xp"
{
  "payload":{
    "text":"Hello",
    "userId":123
  }
}
```

> 💡 **TIP:** El payload contiene la información importante del mensaje.

---

# 2️⃣ Message Envelope ✉️

Un **Message Envelope** es la estructura que envuelve toda la información de un mensaje.

### Conceptualmente

```text id="q8m4vx"
Message
├── Type
├── Metadata
└── Payload
```

> 📦 **TIP:** El envelope organiza las diferentes partes del mensaje.

---

# 3️⃣ Payload Data 📄

El **Payload Data** contiene los datos principales que serán procesados.

### Ejemplo

```json id="p5n2mq"
{
  "payload":{
    "text":"Hello",
    "userId":123
  }
}
```

Puede contener:

* 📝 Texto.
* 👤 Información de usuario.
* 📊 Datos específicos.

---

# 4️⃣ Metadata 🏷️

La **Metadata** contiene información adicional sobre el mensaje.

No representa el contenido principal, sino información complementaria.

### Ejemplo

```json id="x7m3qp"
{
  "metadata":{
    "timestamp":"2026-01-01"
  }
}
```

Puede incluir:

```text id="n6m8qx"
timestamp
messageId
senderId
```

> 💡 **TIP:** La metadata aporta información complementaria al mensaje.

---

# 5️⃣ User Information 👤

Los mensajes pueden incluir información relacionada con usuarios.

### Ejemplo

```json id="k4q9mp"
{
  "userId":123
}
```

Permite identificar quién envió o está relacionado con un mensaje.

---

# 6️⃣ Timestamps 🕒

Un timestamp indica cuándo ocurrió un evento o cuándo fue creado un mensaje.

### Ejemplo

```json id="v8m3qx"
{
  "timestamp":"2026-01-01"
}
```

Se utiliza para registrar el momento del mensaje.

---

# 7️⃣ IDs 🆔

Los identificadores permiten distinguir elementos dentro de la comunicación.

### Ejemplos

```text id="r5n8mq"
messageId
senderId
userId
```

Ayudan a identificar:

* 👤 Usuarios.
* 💬 Mensajes.
* 🔄 Eventos.

---

# 8️⃣ Nested Payloads 🗂️

Un payload puede contener estructuras internas.

### Ejemplo

```json id="t6m2qx"
{
  "payload":{
    "user":{
      "id":123,
      "name":"John"
    },
    "message":{
      "text":"Hello"
    }
  }
}
```

### Flujo

```text id="x3q8mv"
Payload
   ↓
Nested Objects
   ↓
Data
```

---

# 9️⃣ Payload Validation ✅

Antes de procesar un mensaje, el servidor debe validar el payload recibido.

### Flujo

```text id="a7m4qp"
Receive Message
      ↓
Validate Payload
      ↓
Process Data
```

Puede validar:

* 📌 Campos requeridos.
* 📌 Tipos de datos.
* 📌 Estructura esperada.

> ✅ **TIP:** La validación verifica que el payload tenga los datos y estructura esperados.

---

# 🔟 Payload Size 📏

El tamaño del payload debe ser controlado.

### Problema

```text id="b6n9mx"
Large Payload
      ↓
More Data
      ↓
More Resources
```

El servidor debe controlar la cantidad de información enviada.

> ⚠️ **TIP:** Un payload grande implica más datos y más recursos.

---

# 🧾 Ejemplo completo

```json id="c8m4qx"
{
  "type":"chat_message",

  "metadata":{
    "timestamp":"2026-01-01"
  },

  "payload":{
    "text":"Hello",
    "userId":123
  }
}
```

---

# 🧩 Partes del mensaje

| Parte            | Función               |
| ---------------- | --------------------- |
| 🏷️ **Type**     | Define la acción      |
| 🏷️ **Metadata** | Información adicional |
| 📦 **Payload**   | Datos principales     |

## 🏷️ Type

Define la acción:

```text id="h5m8qx"
chat_message
user_joined
notification
```

## 🏷️ Metadata

Información adicional:

```text id="m3q7xp"
timestamp
messageId
senderId
```

## 📦 Payload

Datos principales:

```text id="w8p2mq"
message
content
object
```

---

# 🔄 Message Structure Flow

```text id="s6m9qx"
Message
   ↓
Envelope
   ↓
Type + Metadata + Payload
   ↓
Validation
   ↓
Processing
```

---

# 🧠 Conceptos principales

| Concepto         | Significado                                  |
| ---------------- | -------------------------------------------- |
| ✉️ **Envelope**  | Estructura que contiene el mensaje completo  |
| 🏷️ **Metadata** | Información adicional del mensaje            |
| 📦 **Payload**   | Datos principales enviados                   |
| 📋 **Schema**    | Estructura esperada de los datos             |
| ✅ **Validation** | Verificación de que los datos sean correctos |

---

# 🎯 Al terminar

Un mensaje WebSocket normalmente está organizado como:

```text id="m8q3vx"
Message
├── Type
├── Metadata
└── Payload
```

### Ejemplo

```json id="q4m8xp"
{
  "type":"chat_message",

  "metadata":{
    "timestamp":"2026-01-01"
  },

  "payload":{
    "text":"Hello",
    "userId":123
  }
}
```

> 🧠 **TIP:** El **payload** contiene los datos principales, mientras que la metadata aporta información adicional para manejar el mensaje.
