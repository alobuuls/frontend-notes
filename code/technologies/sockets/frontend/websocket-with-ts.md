# 🟦 02 — WebSocket with TypeScript

> 💡 **¿Cómo hacemos que la comunicación WebSocket sea más segura usando tipos?**

TypeScript permite agregar tipado a la comunicación WebSocket para definir qué tipo de datos se envían y reciben.

---

## 📚 Índice

- [🟦 02 — WebSocket with TypeScript](#-02--websocket-with-typescript)
  - [📚 Índice](#-índice)
- [1️⃣ WebSocket Types 🔌](#1️⃣-websocket-types-)
    - [Problema en JavaScript](#problema-en-javascript)
- [2️⃣ TypeScript Interfaces 📋](#2️⃣-typescript-interfaces-)
    - [Ejemplo](#ejemplo)
- [3️⃣ Message Models 🧩](#3️⃣-message-models-)
    - [Ejemplo](#ejemplo-1)
- [4️⃣ Typed Payloads 📦](#4️⃣-typed-payloads-)
    - [Ejemplo](#ejemplo-2)
    - [Mensaje](#mensaje)
- [5️⃣ Message Events ⚡](#5️⃣-message-events-)
    - [Ejemplo](#ejemplo-3)
- [6️⃣ Type Safety 🛡️](#6️⃣-type-safety-️)
    - [Sin tipos](#sin-tipos)
    - [Con tipos](#con-tipos)
    - [Beneficios](#beneficios)
- [7️⃣ Enums for Message Types 🏷️](#7️⃣-enums-for-message-types-️)
    - [Ejemplo](#ejemplo-4)
    - [Uso](#uso)
- [8️⃣ Generic Messages 🧬](#8️⃣-generic-messages-)
    - [Ejemplo](#ejemplo-5)
- [9️⃣ Error Types ⚠️](#9️⃣-error-types-️)
    - [Ejemplo](#ejemplo-6)
    - [Ejemplo](#ejemplo-7)
- [🔟 WebSocket Wrapper Class 🏗️](#-websocket-wrapper-class-️)
    - [Conceptualmente](#conceptualmente)
    - [Ejemplo](#ejemplo-8)
- [🧾 Ejemplo completo](#-ejemplo-completo)
  - [Message Interface](#message-interface)
  - [Message Types](#message-types)
  - [Chat Message](#chat-message)
    - [Mensaje](#mensaje-1)
- [🔄 Typed Message Flow](#-typed-message-flow)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)
    - [Ejemplo](#ejemplo-9)

# 1️⃣ WebSocket Types 🔌

TypeScript permite definir tipos para los mensajes que viajan mediante WebSocket.

### Problema en JavaScript

```javascript
{
  type:"message",
  data:"hello"
}
```

No sabemos:

```text
What type is data?

What fields exist?
```

> 💡 **TIP:** Con TypeScript podemos definir estructuras claras.

---

# 2️⃣ TypeScript Interfaces 📋

Una **Interface** define la estructura que debe tener un objeto.

### Ejemplo

```typescript
interface Message {

  type: string;

  payload: unknown;

}
```

Define que un mensaje debe tener:

```text
type

payload
```

---

# 3️⃣ Message Models 🧩

Los **Message Models** representan la estructura de los mensajes utilizados en la comunicación.

### Ejemplo

```typescript
interface Message {

  type: string;

  payload: unknown;

}
```

Permiten mantener una estructura consistente entre:

```text
Client

   ↕

Server
```

> 🧩 **TIP:** Los modelos ayudan a mantener una estructura consistente entre cliente y servidor.

---

# 4️⃣ Typed Payloads 📦

Un **Typed Payload** define exactamente qué información contiene un mensaje.

### Ejemplo

```typescript
interface ChatPayload {

  text: string;

  userId: number;

}
```

### Mensaje

```typescript
interface ChatMessage {

  type: string;

  payload: ChatPayload;

}
```

Ahora el payload tiene una estructura conocida.

---

# 5️⃣ Message Events ⚡

Los eventos WebSocket también pueden trabajar con tipos.

### Ejemplo

```typescript
socket.onmessage = (event) => {

  const message: Message =
    JSON.parse(event.data);

};
```

El mensaje recibido tiene una estructura definida.

---

# 6️⃣ Type Safety 🛡️

**Type Safety** significa que TypeScript ayuda a evitar errores relacionados con tipos.

### Sin tipos

```text
data

???
```

### Con tipos

```text
payload

↓

Known Structure
```

### Beneficios

* ✅ Detectar errores antes de ejecutar.
* ✅ Mejor autocompletado.
* ✅ Código más predecible.

> 🛡️ **TIP:** TypeScript ayuda a detectar errores relacionados con tipos antes de ejecutar el código.

---

# 7️⃣ Enums for Message Types 🏷️

Los **Enums** permiten definir valores posibles para los tipos de mensajes.

### Ejemplo

```typescript
enum MessageType {

  CHAT = "chat",

  NOTIFICATION = "notification"

}
```

### Uso

```typescript
{
  type: MessageType.CHAT
}
```

Evita escribir valores incorrectos:

```text
chat

chatt ❌
```

---

# 8️⃣ Generic Messages 🧬

Los **Generics** permiten crear mensajes reutilizables con diferentes tipos de payload.

### Ejemplo

```typescript
interface Message<T> {

  type: string;

  payload: T;

}
```

Permite diferentes datos:

```text
Message<ChatPayload>

Message<UserPayload>
```

Cada mensaje mantiene su propio tipo.

> 🧬 **TIP:** Los Generics permiten reutilizar la misma estructura con diferentes tipos de payload.

---

# 9️⃣ Error Types ⚠️

También se pueden definir tipos específicos para errores.

### Ejemplo

```typescript
interface ErrorMessage {

  type: string;

  message: string;

}
```

Permite manejar errores con una estructura conocida.

### Ejemplo

```javascript
{
  type:"error",

  message:"Invalid data"
}
```

---

# 🔟 WebSocket Wrapper Class 🏗️

Una clase wrapper permite encapsular la lógica del WebSocket.

### Conceptualmente

```typescript
class WebSocketClient {

}
```

Puede manejar:

```text
Connection

Sending Messages

Receiving Messages

Errors
```

### Ejemplo

```typescript
class WebSocketClient {

  private socket: WebSocket;

}
```

Centraliza la comunicación WebSocket.

> 🏗️ **TIP:** Una wrapper class permite centralizar la lógica relacionada con WebSocket.

---

# 🧾 Ejemplo completo

## Message Interface

```typescript
interface Message {

  type: string;

  payload: unknown;

}
```

## Message Types

```typescript
enum MessageType {

  CHAT = "chat",

  NOTIFICATION = "notification"

}
```

## Chat Message

```typescript
interface ChatPayload {

  text:string;

  userId:number;

}
```

### Mensaje

```typescript
const message: Message<ChatPayload> = {

  type: MessageType.CHAT,

  payload:{
    text:"Hello",
    userId:123
  }

};
```

---

# 🔄 Typed Message Flow

```text
Create Message

        ↓

Type Checking

        ↓

Serialize

        ↓

WebSocket

        ↓

Deserialize

        ↓

Typed Object
```

---

# 🧠 Conceptos principales

| Concepto            | Significado                       |
| ------------------- | --------------------------------- |
| 📋 **Interface**    | Define la estructura de un objeto |
| 🛡️ **Type Safety** | Seguridad mediante tipos          |
| 🧩 **Models**       | Representan estructuras de datos  |
| 🏷️ **Enums**       | Valores definidos para tipos      |
| 🧬 **Generics**     | Permiten mensajes reutilizables   |

---

# 🎯 Al terminar

TypeScript permite definir contratos para los mensajes WebSocket usando interfaces, modelos y tipos.

### Ejemplo

```typescript
interface Message {

  type: string;

  payload: unknown;

}
```

> 🎯 **TIP:** Esto permite que la comunicación entre cliente y servidor sea más segura y predecible.
