# 📄 02 — WebSocket vs Socket.IO 🔌⚡

> 💡 **¿Cuándo usar WebSocket directamente y cuándo Socket.IO?**
>
> **WebSocket** es un protocolo estándar de comunicación en tiempo real, mientras que **Socket.IO** es una librería que proporciona una capa de abstracción y funcionalidades adicionales.

---

## 📚 Índice

- [📄 02 — WebSocket vs Socket.IO 🔌⚡](#-02--websocket-vs-socketio-)
  - [📚 Índice](#-índice)
- [1️⃣ Native WebSocket 🔌](#1️⃣-native-websocket-)
    - [Ejemplo](#ejemplo)
- [2️⃣ Socket.IO 📡](#2️⃣-socketio-)
    - [Ejemplo](#ejemplo-1)
- [3️⃣ Protocol Differences 🔄](#3️⃣-protocol-differences-)
    - [🔌 WebSocket](#-websocket)
    - [📡 Socket.IO](#-socketio)
- [4️⃣ API Differences 🧩](#4️⃣-api-differences-)
    - [🔌 WebSocket](#-websocket-1)
    - [📡 Socket.IO](#-socketio-1)
- [5️⃣ Features Comparison ⚖️](#5️⃣-features-comparison-️)
- [6️⃣ Performance ⚡](#6️⃣-performance-)
- [7️⃣ Compatibility 🌐](#7️⃣-compatibility-)
    - [🔌 WebSocket](#-websocket-2)
    - [📡 Socket.IO](#-socketio-2)
- [8️⃣ Use Cases 🎯](#8️⃣-use-cases-)
  - [🔌 WebSocket](#-websocket-3)
  - [📡 Socket.IO](#-socketio-3)
- [9️⃣ Advantages 👍](#9️⃣-advantages-)
  - [🔌 WebSocket](#-websocket-4)
  - [📡 Socket.IO](#-socketio-4)
- [🔟 Disadvantages ⚠️](#-disadvantages-️)
  - [🔌 WebSocket](#-websocket-5)
  - [📡 Socket.IO](#-socketio-5)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)

---

# 1️⃣ Native WebSocket 🔌

**WebSocket** es un protocolo estándar que permite establecer una conexión persistente entre cliente y servidor.

Su API proporciona operaciones básicas para enviar y recibir mensajes.

```text id="native"
Application

    |

WebSocket API

    |

Protocol
```

### Ejemplo

```javascript
socket.send(
  JSON.stringify(message)
);
```

> 💡 Con WebSocket nativo, el desarrollador trabaja directamente con la API proporcionada por el navegador o la implementación WebSocket.

---

# 2️⃣ Socket.IO 📡

**Socket.IO** es una librería que proporciona una API de mayor nivel para la comunicación en tiempo real.

```text id="sio"
Application

    |

Socket.IO API

    |

WebSocket / Polling

    |

Network
```

### Ejemplo

```javascript
socket.emit(
  "message",
  data
);
```

> 💡 Socket.IO proporciona una abstracción sobre los mecanismos de transporte y agrega funcionalidades adicionales.

---

# 3️⃣ Protocol Differences 🔄

WebSocket y Socket.IO no representan exactamente lo mismo.

### 🔌 WebSocket

```text
Application

    ↓

WebSocket API

    ↓

WebSocket Protocol
```

> 💡 WebSocket utiliza un **standard protocol**.

### 📡 Socket.IO

```text
Application

    ↓

Socket.IO API

    ↓

WebSocket / Polling

    ↓

Network
```

> ⚠️ Socket.IO utiliza su propia capa de comunicación sobre los transportes disponibles.

Por esta razón, un cliente WebSocket nativo y un servidor Socket.IO **no son directamente intercambiables**.

---

# 4️⃣ API Differences 🧩

Las APIs tienen diferentes niveles de abstracción.

### 🔌 WebSocket

Utiliza métodos como:

```javascript
socket.send(
  JSON.stringify(message)
);
```

> 💡 El mensaje se envía directamente mediante `send()`.

### 📡 Socket.IO

Utiliza un sistema basado en eventos:

```javascript
socket.emit(
  "message",
  data
);
```

> 💡 `emit()` permite enviar un evento acompañado de datos.

---

# 5️⃣ Features Comparison ⚖️

|                 | 🔌 **WebSocket**  | 📡 **Socket.IO**    |
| --------------- | ----------------- | ------------------- |
| 📜 Protocol     | Standard protocol | Library             |
| 🧩 Abstraction  | Low level         | Higher level        |
| 🔄 Reconnection | Manual reconnect  | Automatic reconnect |
| 🚪 Rooms        | Manual rooms      | Built-in rooms      |
| 📡 Events       | Manual events     | Event system        |
| ⚡ Size          | Lightweight       | More features       |

> 🎯 La principal diferencia es el nivel de abstracción y la cantidad de funcionalidades proporcionadas.

---

# 6️⃣ Performance ⚡

**WebSocket** es una opción más directa y ligera porque utiliza el protocolo WebSocket sin una capa adicional de funcionalidades de Socket.IO.

```text
WebSocket

Application
    ↓
WebSocket API
    ↓
Protocol
```

Socket.IO agrega funcionalidades y una capa de abstracción.

```text
Socket.IO

Application
    ↓
Socket.IO API
    ↓
Transport
```

> 💡 En términos generales, WebSocket puede ser preferible cuando se busca una comunicación más directa y ligera, mientras que Socket.IO prioriza funcionalidades y facilidad de desarrollo.

---

# 7️⃣ Compatibility 🌐

### 🔌 WebSocket

WebSocket utiliza un **standard protocol**, por lo que diferentes implementaciones compatibles con WebSocket pueden comunicarse mediante el mismo protocolo.

### 📡 Socket.IO

Socket.IO requiere utilizar clientes y servidores compatibles con su propio sistema.

```text
Socket.IO Client

      ↕

Socket.IO Server
```

> ⚠️ Un WebSocket Client nativo no puede utilizarse directamente como reemplazo de un Socket.IO Client.

---

# 8️⃣ Use Cases 🎯

## 🔌 WebSocket

Puede ser apropiado cuando se necesita:

* ⚡ Comunicación directa.
* 📡 Un protocolo estándar.
* 🪶 Una solución ligera.
* 🎛️ Control manual de la comunicación.

## 📡 Socket.IO

Puede ser apropiado cuando se necesitan:

* 🔄 Automatic Reconnection.
* 📡 Event system.
* 🚪 Rooms.
* 🏷️ Namespaces.
* 📢 Broadcasting.
* 🔁 Fallback Transport.

---

# 9️⃣ Advantages 👍

## 🔌 WebSocket

* 📜 **Standard protocol**
* 🪶 **Lightweight**
* ⚡ **Low level**
* 🎛️ Mayor control sobre la comunicación

## 📡 Socket.IO

* 📡 **Higher level**
* 🔄 **Automatic reconnect**
* 🚪 **Built-in rooms**
* 📡 **Event system**
* 🔁 **Fallback Transport**
* 🧩 Mayor cantidad de funcionalidades

---

# 🔟 Disadvantages ⚠️

## 🔌 WebSocket

* 🔄 Reconnection debe manejarse manualmente.
* 🚪 Rooms deben implementarse manualmente.
* 📡 Los eventos deben gestionarse manualmente.
* 🧩 Proporciona una API de menor nivel.

## 📡 Socket.IO

* 🧩 Agrega una capa de abstracción.
* 📦 Tiene más funcionalidades que una implementación WebSocket básica.
* ⚠️ No es directamente compatible con clientes WebSocket nativos.

---

# 🧠 Conceptos principales

| Concepto                 | Significado                                        |
| ------------------------ | -------------------------------------------------- |
| 📜 **Protocol**          | Reglas utilizadas para la comunicación             |
| 📚 **Library**           | Código que proporciona funcionalidades adicionales |
| 🧩 **Abstraction Layer** | Capa que simplifica el uso de una tecnología       |
| ⚡ **Performance**        | Capacidad y eficiencia de la comunicación          |
| ✨ **Features**           | Funcionalidades proporcionadas por la tecnología   |

---

# 🎯 Al terminar

> **WebSocket es un protocolo estándar, ligero y de bajo nivel que proporciona comunicación directa. Socket.IO es una librería de mayor nivel que agrega funcionalidades como eventos, reconexión automática, rooms y fallback transport.**

```text
🔌 WebSocket

Application
    ↓
WebSocket API
    ↓
Protocol
```

```text
📡 Socket.IO

Application
    ↓
Socket.IO API
    ↓
WebSocket / Polling
    ↓
Network
```
