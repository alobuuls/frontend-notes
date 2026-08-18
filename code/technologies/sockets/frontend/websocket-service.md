# 🔌 04 — WebSocket Service

> 💡 **¿Cómo evitamos repetir lógica WebSocket en todos los componentes?**

Un **WebSocket Service** permite encapsular toda la lógica relacionada con la conexión WebSocket en un único lugar, creando una arquitectura reutilizable y organizada.

---

## 📚 Índice

- [🔌 04 — WebSocket Service](#-04--websocket-service)
  - [📚 Índice](#-índice)
- [1️⃣ Why Use a WebSocket Service? 🤔](#1️⃣-why-use-a-websocket-service-)
    - [❌ Problema](#-problema)
    - [✅ Solución](#-solución)
- [2️⃣ Service Responsibilities 🔌](#2️⃣-service-responsibilities-)
- [3️⃣ Creating a WebSocket Service 🏗️](#3️⃣-creating-a-websocket-service-️)
    - [Ejemplo conceptual](#ejemplo-conceptual)
- [4️⃣ Connection Method 🔗](#4️⃣-connection-method-)
    - [Ejemplo](#ejemplo)
    - [🔄 Flujo](#-flujo)
- [5️⃣ Send Method 📤](#5️⃣-send-method-)
    - [Ejemplo](#ejemplo-1)
    - [🔄 Flujo](#-flujo-1)
- [6️⃣ Receive Messages 📥](#6️⃣-receive-messages-)
    - [Ejemplo conceptual](#ejemplo-conceptual-1)
    - [🔄 Flujo](#-flujo-2)
- [7️⃣ Disconnect Method 🔒](#7️⃣-disconnect-method-)
    - [Ejemplo](#ejemplo-2)
    - [🔄 Flujo](#-flujo-3)
- [8️⃣ Error Handling ⚠️](#8️⃣-error-handling-️)
    - [Ejemplos](#ejemplos)
    - [🔄 Flujo](#-flujo-4)
- [9️⃣ Reusable Architecture ♻️](#9️⃣-reusable-architecture-️)
    - [🏗️ Arquitectura](#️-arquitectura)
- [🔟 Service Lifecycle 🔄](#-service-lifecycle-)
    - [🔄 Flujo](#-flujo-5)
- [🧩 Métodos típicos](#-métodos-típicos)
- [🏗️ Ejemplo conceptual](#️-ejemplo-conceptual)
- [✅ Ventajas](#-ventajas)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)
    - [🏗️ Arquitectura](#️-arquitectura-1)


# 1️⃣ Why Use a WebSocket Service? 🤔

Un servicio WebSocket evita crear conexiones directamente dentro de cada componente.

### ❌ Problema

```text
Component A

        ↓

WebSocket Logic
```

```text
Component B

        ↓

WebSocket Logic
```

Esto genera:

* ❌ Código repetido.
* ❌ Difícil mantenimiento.
* ❌ Lógica duplicada.

### ✅ Solución

```text
Components

        ↓

WebSocket Service

        ↓

WebSocket
```

---

# 2️⃣ Service Responsibilities 🔌

El servicio es responsable de manejar la comunicación WebSocket.

> 💡 **Tip:** El componente solamente consume la información.

| Responsabilidad    |
| ------------------ |
| Connection         |
| Messages           |
| Sending Data       |
| Receiving Data     |
| Closing Connection |
| Error Handling     |

---

# 3️⃣ Creating a WebSocket Service 🏗️

Un servicio centraliza la conexión WebSocket.

### Ejemplo conceptual

```typescript
class WebSocketService {


}
```

Dentro del servicio se mantiene la instancia:

```typescript
socket: WebSocket;
```

---

# 4️⃣ Connection Method 🔗

El método `connect()` crea la conexión WebSocket.

### Ejemplo

```typescript
connect(){

}
```

### 🔄 Flujo

```text
Component

        ↓

connect()

        ↓

WebSocket Connection

        ↓

Server
```

---

# 5️⃣ Send Method 📤

El método `send()` permite enviar mensajes al servidor.

### Ejemplo

```typescript
send(message){

}
```

### 🔄 Flujo

```text
Component

        ↓

send()

        ↓

WebSocket

        ↓

Server
```

---

# 6️⃣ Receive Messages 📥

El servicio recibe mensajes enviados desde el servidor.

### Ejemplo conceptual

```typescript
messages(){

}
```

### 🔄 Flujo

```text
Server

        ↓

WebSocket

        ↓

Service

        ↓

Component
```

---

# 7️⃣ Disconnect Method 🔒

El método `disconnect()` permite cerrar la conexión.

### Ejemplo

```typescript
disconnect(){

}
```

### 🔄 Flujo

```text
Component

        ↓

disconnect()

        ↓

Close WebSocket
```

---

# 8️⃣ Error Handling ⚠️

El servicio debe manejar errores de comunicación.

### Ejemplos

```text
Connection Error

Message Error

Network Error
```

### 🔄 Flujo

```text
Error

        ↓

Service Handles Error

        ↓

Application Response
```

---

# 9️⃣ Reusable Architecture ♻️

Un servicio permite que múltiples componentes utilicen la misma lógica.

### 🏗️ Arquitectura

```text
Component A

      |

      |

Component B

      |

      |

WebSocket Service

      |

      |

WebSocket

      |

      |

Server
```

> 💡 **Tip:** Los componentes comparten la comunicación mediante el servicio.

---

# 🔟 Service Lifecycle 🔄

El servicio administra el ciclo de vida de la conexión.

### 🔄 Flujo

```text
Create Service

        ↓

Connect

        ↓

Send / Receive Messages

        ↓

Disconnect
```

---

# 🧩 Métodos típicos

| Método            | Responsabilidad  |
| ----------------- | ---------------- |
| 🔗 `connect()`    | Crear conexión   |
| 🔒 `disconnect()` | Cerrar conexión  |
| 📤 `send()`       | Enviar mensajes  |
| 📥 `messages()`   | Recibir mensajes |

---

# 🏗️ Ejemplo conceptual

```typescript
class WebSocketService {


  connect(){

  }


  send(message){

  }


  disconnect(){

  }


}
```

---

# ✅ Ventajas

| Ventaja          | Significado                            |
| ---------------- | -------------------------------------- |
| ♻️ Reusable      | Puede utilizarse en varios componentes |
| 🎯 Centralized   | Toda la lógica está en un solo lugar   |
| 🧪 Testable      | Más fácil de probar                    |
| 🛠️ Maintainable | Más sencillo de mantener               |

---

# 🧠 Conceptos principales

| Concepto             | Significado                            |
| -------------------- | -------------------------------------- |
| 🔌 WebSocket Service | Servicio que encapsula la comunicación |
| 🔗 Connection        | Creación de conexión WebSocket         |
| 📤 Send              | Enviar mensajes                        |
| 📥 Messages          | Recibir información                    |
| 🔒 Disconnect        | Cerrar conexión                        |

---

# 🎯 Al terminar

Un **WebSocket Service** evita repetir lógica en componentes y centraliza la comunicación.

### 🏗️ Arquitectura

```text
Component A

      |

Component B

      |

WebSocket Service

      |

WebSocket

      |

Server
```

El servicio administra:

```text
connect()

send()

messages()

disconnect()
```
