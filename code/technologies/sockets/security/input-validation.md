# 📄 06 — Input Validation 🛡️

> **¿Podemos confiar en los mensajes que llegan por WebSocket?**

### Respuesta:

```text
No.
```

Los datos enviados por los clientes deben ser validados antes de ser procesados por el servidor.

---

## 📚 Índice 

- [📄 06 — Input Validation 🛡️](#-06--input-validation-️)
    - [Respuesta:](#respuesta)
  - [📚 Índice](#-índice)
- [1️⃣ Why Validate Input? 🛡️](#1️⃣-why-validate-input-️)
    - [Los clientes pueden enviar:](#los-clientes-pueden-enviar)
- [2️⃣ Client vs Server Validation 🌐](#2️⃣-client-vs-server-validation-)
    - [Client Validation](#client-validation)
    - [Server Validation](#server-validation)
- [3️⃣ Message Validation 💬](#3️⃣-message-validation-)
    - [🔄 Ejemplo:](#-ejemplo)
    - [Se verifica:](#se-verifica)
- [4️⃣ Schema Validation 📋](#4️⃣-schema-validation-)
- [5️⃣ Data Types 🔢](#5️⃣-data-types-)
    - [Esperado:](#esperado)
    - [Incorrecto:](#incorrecto)
- [6️⃣ Required Fields ✅](#6️⃣-required-fields-)
    - [Ejemplo:](#ejemplo)
- [7️⃣ Malicious Payloads ⚠️](#7️⃣-malicious-payloads-️)
- [8️⃣ Sanitization 🧹](#8️⃣-sanitization-)
    - [🔄 Flujo:](#-flujo)
- [9️⃣ Error Responses ❌](#9️⃣-error-responses-)
    - [🔄 Flujo:](#-flujo-1)
- [🔟 Validation Libraries 📚](#-validation-libraries-)
    - [Permiten validar:](#permiten-validar)
- [🔄 Input Validation Flow](#-input-validation-flow)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)
    - [🔄 Flujo:](#-flujo-2)

# 1️⃣ Why Validate Input? 🛡️

**Input Validation** consiste en comprobar que los datos recibidos cumplen con las reglas esperadas antes de utilizarlos.

### Los clientes pueden enviar:

| Problemas          |
| ------------------ |
| Invalid Data       |
| Wrong Format       |
| Malicious Payloads |

Por eso el servidor debe validar cada mensaje recibido.

> ⚠️ **Warning**
>
> El cliente no es confiable. El servidor debe validar cada mensaje recibido.

---

# 2️⃣ Client vs Server Validation 🌐

La validación puede existir en cliente y servidor.

### Client Validation

Ayuda a mejorar la experiencia del usuario.

```text
User Input

↓

Client Check
```

### Server Validation

Es obligatoria porque el cliente no es confiable.

```text
Message

↓

Server Validation

↓

Process
```

---

# 3️⃣ Message Validation 💬

Cada mensaje WebSocket debe ser revisado antes de procesarse.

### 🔄 Ejemplo:

```text
Receive Message

        ↓

Validate

        ↓

Process
```

### Se verifica:

| Validation      |
| --------------- |
| Message Type    |
| Required Fields |
| Data Format     |

---

# 4️⃣ Schema Validation 📋

Un **Schema** define la estructura que debe tener un mensaje.

**Ejemplo:**

```json
{
  "type": "message",
  "text": "Hello"
}
```

El servidor valida:

```text
Does the message match the schema?
```

---

# 5️⃣ Data Types 🔢

El servidor debe verificar que los datos tengan el tipo correcto.

### Esperado:

```json
{
  "userId": 123
}
```

### Incorrecto:

```json
{
  "userId": "hello"
}
```

> 💡 **Tip**
>
> El servidor debe verificar que los datos tengan el tipo correcto.

---

# 6️⃣ Required Fields ✅

Algunos campos son obligatorios.

### Ejemplo:

```text
Message

Required:

type

payload

userId
```

Si falta información:

```text
Reject Message
```

---

# 7️⃣ Malicious Payloads ⚠️

Los clientes pueden enviar datos maliciosos.

**Ejemplo:**

```json
{
  "type":"message",
  "text":"<script>alert()</script>"
}
```

El servidor debe detectar contenido peligroso antes de procesarlo.

> 🛡️ **Security Tip**
>
> El servidor debe detectar contenido peligroso antes de procesarlo.

---

# 8️⃣ Sanitization 🧹

**Sanitization** limpia los datos recibidos para eliminar contenido no seguro.

### 🔄 Flujo:

```text
Receive

   ↓

Validate

   ↓

Sanitize

   ↓

Process
```

Ayuda a prevenir:

| Prevención      |
| --------------- |
| Invalid Content |
| Security Issues |
| Unsafe Data     |

---

# 9️⃣ Error Responses ❌

Cuando un mensaje no pasa la validación, el servidor debe responder con un error.

### 🔄 Flujo:

```text
Client

   ↓

Invalid Message

   ↓

Server Validation

   ↓

Error Response
```

**Ejemplo:**

```json
{
  "type":"error",
  "message":"Invalid data"
}
```

---

# 🔟 Validation Libraries 📚

Las aplicaciones pueden utilizar librerías para validar estructuras y datos.

### Permiten validar:

| Validation      |
| --------------- |
| Schemas         |
| Data Types      |
| Required Fields |
| Formats         |

---

# 🔄 Input Validation Flow

```text
Client

      |

      | Message

      ▼

WebSocket Server

      |

      | Validate

      ▼

Valid?

   /       \

 YES       NO

  |         |

Process   Reject

          Message
```

---

# 🧠 Conceptos principales

| Concepto            | Significado                           |
| ------------------- | ------------------------------------- |
| 🛡️ **Validation**  | Comprobar que los datos son correctos |
| 📋 **Schema**       | Estructura esperada de los datos      |
| 🧹 **Sanitization** | Limpieza de datos inseguros           |
| 🔒 **Security**     | Protección contra datos maliciosos    |
| 📦 **Payload**      | Información enviada en un mensaje     |

---

# 🎯 Al terminar

**Los mensajes recibidos por WebSocket no deben confiarse directamente. El servidor debe validar, sanitizar y comprobar los datos antes de procesarlos.**

### 🔄 Flujo:

```text
Message

↓

Validation

↓

Sanitization

↓

Process
```

> 🎯 **Remember**
>
> El servidor debe validar, sanitizar y comprobar los datos antes de procesarlos.
