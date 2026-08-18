# 🧾 02 — JSON Messages

> 💡 **¿Cómo enviamos datos complejos usando WebSockets?**

Los mensajes WebSocket pueden utilizar **JSON** para representar información estructurada y facilitar el intercambio de datos entre cliente y servidor.

---

## 📚 Índice

- [🧾 02 — JSON Messages](#-02--json-messages)
  - [📚 Índice](#-índice)
- [1️⃣ Why Use JSON? 📦](#1️⃣-why-use-json-)
  - [¿Por qué usar JSON?](#por-qué-usar-json)
    - [Ejemplo](#ejemplo)
- [2️⃣ JSON Message Structure 🏗️](#2️⃣-json-message-structure-️)
    - [Ejemplo simple](#ejemplo-simple)
    - [Ejemplo](#ejemplo-1)
- [3️⃣ Serialization 🔄](#3️⃣-serialization-)
    - [Flujo](#flujo)
    - [Ejemplo](#ejemplo-2)
- [4️⃣ Deserialization 🔄](#4️⃣-deserialization-)
    - [Flujo](#flujo-1)
- [5️⃣ JSON.stringify() 📝](#5️⃣-jsonstringify-)
    - [Ejemplo](#ejemplo-3)
    - [Resultado](#resultado)
- [6️⃣ JSON.parse() 📥](#6️⃣-jsonparse-)
    - [Ejemplo](#ejemplo-4)
    - [Resultado](#resultado-1)
- [7️⃣ Message Examples 💬](#7️⃣-message-examples-)
  - [Mensaje simple](#mensaje-simple)
  - [Mensaje real](#mensaje-real)
- [8️⃣ Nested Data 🗂️](#8️⃣-nested-data-️)
    - [Ejemplo](#ejemplo-5)
- [9️⃣ JSON Validation ✅](#9️⃣-json-validation-)
    - [Flujo](#flujo-2)
- [🔟 Common Patterns 🔄](#-common-patterns-)
    - [Ejemplo](#ejemplo-6)
    - [Patrón](#patrón)
- [🔄 JSON Message Flow](#-json-message-flow)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)
    - [Flujo](#flujo-3)
    - [Ejemplo](#ejemplo-7)

# 1️⃣ Why Use JSON? 📦

## ¿Por qué usar JSON?

JSON permite enviar información organizada mediante pares de:

```text
Key → Value
```

> 💡 **TIP:** JSON permite representar datos complejos de forma clara.

### Ejemplo

```json
{
  "message": "Hello"
}
```

---

# 2️⃣ JSON Message Structure 🏗️

Un mensaje JSON está formado por propiedades que contienen información.

### Ejemplo simple

```json
{
  "message": "Hello"
}
```

Cada propiedad representa un dato del mensaje.

### Ejemplo

```json
{
  "type": "chat_message",
  "data": {
    "text": "Hello world",
    "userId": 123
  }
}
```

---

# 3️⃣ Serialization 🔄

La **serialization** es el proceso de convertir un objeto en un formato que pueda ser enviado.

### Flujo

```text
Object
   ↓
JSON.stringify()
   ↓
JSON Message
```

### Ejemplo

**Objeto:**

```javascript
{
  message: "Hello"
}
```

**Se convierte en:**

```json
{
  "message": "Hello"
}
```

> 💡 **TIP:** `JSON.stringify()` prepara el objeto para poder enviarlo como JSON.

---

# 4️⃣ Deserialization 🔄

La **deserialization** es el proceso contrario.

Convierte un mensaje JSON recibido nuevamente en un objeto.

### Flujo

```text
JSON Message
   ↓
JSON.parse()
   ↓
Object
```

> 💡 **TIP:** `JSON.parse()` permite volver a trabajar con los datos como un objeto JavaScript.

---

# 5️⃣ JSON.stringify() 📝

`JSON.stringify()` convierte un objeto JavaScript en una cadena JSON.

### Ejemplo

```javascript
const message = {
  text: "Hello"
};

JSON.stringify(message);
```

### Resultado

```json
{
  "text": "Hello"
}
```

---

# 6️⃣ JSON.parse() 📥

`JSON.parse()` convierte una cadena JSON en un objeto JavaScript.

### Ejemplo

```javascript
const data = JSON.parse(message);
```

### Resultado

```javascript
{
  text: "Hello"
}
```

---

# 7️⃣ Message Examples 💬

## Mensaje simple

```json
{
  "message": "Hello"
}
```

## Mensaje real

```json
{
  "type": "chat_message",
  "data": {
    "text": "Hello world",
    "userId": 123
  }
}
```

El mensaje contiene:

```text
type
  ↓
data
  ↓
information
```

---

# 8️⃣ Nested Data 🗂️

JSON permite incluir objetos dentro de otros objetos.

### Ejemplo

```json
{
  "type": "chat_message",
  "data": {
    "text": "Hello world",
    "userId": 123
  }
}
```

Aquí:

```text
Message
   ↓
data
   ↓
text + userId
```

> 💡 **TIP:** Esto permite organizar información relacionada dentro de un mismo mensaje.

---

# 9️⃣ JSON Validation ✅

Antes de procesar un mensaje JSON, el servidor puede validar la estructura recibida.

### Flujo

```text
Receive JSON
      ↓
Validate Structure
      ↓
Process Data
```

Puede validar:

* 📌 Propiedades requeridas.
* 📌 Tipos de datos.
* 📌 Formato esperado.

---

# 🔟 Common Patterns 🔄

Los mensajes JSON suelen utilizar estructuras comunes.

### Ejemplo

```json
{
  "type": "event",
  "data": {}
}
```

### Patrón

```text
Type
 ↓
Data
 ↓
Processing
```

---

# 🔄 JSON Message Flow

```text
Object
   ↓
JSON.stringify()
   ↓
WebSocket
   ↓
JSON.parse()
   ↓
Object
```

---

# 🧠 Conceptos principales

| Concepto               | Significado                               |
| ---------------------- | ----------------------------------------- |
| 🔄 **Serialization**   | Convertir objetos a formato JSON          |
| 🔁 **Deserialization** | Convertir JSON nuevamente a objetos       |
| 📋 **JSON Schema**     | Estructura esperada de los datos          |
| 📦 **Data Format**     | Formato utilizado para enviar información |

---

# 🎯 Al terminar

JSON permite enviar información estructurada mediante WebSockets.

### Flujo

```text
Object
   ↓
JSON.stringify()
   ↓
WebSocket
   ↓
JSON.parse()
   ↓
Object
```

### Ejemplo

```json
{
  "type": "chat_message",
  "data": {
    "text": "Hello world",
    "userId": 123
  }
}
```
