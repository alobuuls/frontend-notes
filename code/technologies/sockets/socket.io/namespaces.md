# 📄 05 — Namespaces 🏷️

> 💡 **¿Cómo puedo tener diferentes canales independientes dentro del mismo servidor?**
>
> Los **Namespaces** permiten separar diferentes áreas de comunicación dentro de una misma aplicación Socket.IO.

---

## 📚 Índice

- [📄 05 — Namespaces 🏷️](#-05--namespaces-️)
  - [📚 Índice](#-índice)
- [1️⃣ What are Namespaces? 🏷️](#1️⃣-what-are-namespaces-️)
- [2️⃣ Namespace Concept 🧩](#2️⃣-namespace-concept-)
- [3️⃣ Default Namespace 🔵](#3️⃣-default-namespace-)
- [4️⃣ Custom Namespaces 🛠️](#4️⃣-custom-namespaces-️)
    - [Ejemplo:](#ejemplo)
- [5️⃣ Namespace Authentication 🔐](#5️⃣-namespace-authentication-)
- [6️⃣ Namespace Isolation 🔒](#6️⃣-namespace-isolation-)
- [7️⃣ Namespace vs Room ⚖️](#7️⃣-namespace-vs-room-️)
    - [🏷️ Namespace](#️-namespace)
    - [🚪 Room](#-room)
- [8️⃣ Use Cases 🎯](#8️⃣-use-cases-)
    - [Ejemplo:](#ejemplo-1)
    - [💬 `/chat`](#-chat)
    - [🛟 `/support`](#-support)
    - [📊 `/dashboard`](#-dashboard)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)

---

# 1️⃣ What are Namespaces? 🏷️

Un **Namespace** es un espacio de comunicación independiente dentro de un servidor Socket.IO.

Permite separar diferentes áreas de una aplicación.

```text id="namespace"
Socket Server

   / chat

   / notifications

   / admin
```

> 💡 Cada Namespace puede representar una parte diferente de la aplicación.

---

# 2️⃣ Namespace Concept 🧩

Un Namespace define un **Communication Scope** específico.

```text id="concept"
Socket Server

      |

 ┌────┼─────────────┐
 ↓    ↓             ↓

/chat /notifications /admin
```

> 🎯 Permite organizar diferentes canales de comunicación dentro del mismo servidor.

---

# 3️⃣ Default Namespace 🔵

El **Default Namespace** es el namespace principal de Socket.IO.

```text
/
```

Los clientes que se conectan normalmente utilizan este namespace.

```text id="default"
Socket.IO Server

       |

       ▼

      /
```

> 💡 `/` representa el **Default Namespace**.

---

# 4️⃣ Custom Namespaces 🛠️

Los **Custom Namespaces** permiten crear espacios de comunicación específicos.

### Ejemplo:

```javascript id="custom"
const admin =
io.of("/admin");
```

Esto crea un Namespace llamado:

```text
/admin
```

Otros ejemplos:

```text
/chat

/support

/dashboard
```

---

# 5️⃣ Namespace Authentication 🔐

Cada Namespace puede tener su propia lógica de autenticación.

```text id="auth"
Client

   ↓

Namespace

   ↓

Authentication

   ↓

Connection
```

> 💡 Esto permite controlar qué clientes pueden acceder a determinados Namespaces.

---

# 6️⃣ Namespace Isolation 🔒

Los Namespaces proporcionan **Isolation** entre diferentes áreas de comunicación.

```text id="isolation"
Socket Server

   ├── /chat

   ├── /support

   └── /dashboard
```

> 💡 Cada Namespace puede manejar su propia lógica y comunicación.

Esto permite separar diferentes áreas dentro de una misma aplicación.

---

# 7️⃣ Namespace vs Room ⚖️

| **Namespace**               | **Room**              |
| --------------------------- | --------------------- |
| Separate communication area | Group of clients      |
| Higher level                | Inside namespace      |
| Different logic             | Same application area |

### 🏷️ Namespace

Define un área de comunicación independiente.

```text
/chat
/support
/admin
```

### 🚪 Room

Agrupa clientes dentro de un Namespace.

```text
/chat

   ├── room-1
   ├── room-2
   └── room-3
```

> 🎯 **Namespace = área de comunicación**
> 🚪 **Room = grupo de clientes dentro de esa área**

---

# 8️⃣ Use Cases 🎯

Los Namespaces pueden utilizarse para separar diferentes funcionalidades de una aplicación.

### Ejemplo:

```text id="app"
Application

   /chat

   /support

   /dashboard
```

### 💬 `/chat`

Comunicación relacionada con chats.

### 🛟 `/support`

Comunicación relacionada con soporte.

### 📊 `/dashboard`

Comunicación relacionada con dashboards.

> 💡 Cada área puede tener su propia lógica y comunicación.

---

# 🧠 Conceptos principales

| Concepto                   | Significado                           |
| -------------------------- | ------------------------------------- |
| 🏷️ **Namespace**          | Área independiente de comunicación    |
| 🔒 **Isolation**           | Separación entre diferentes áreas     |
| 📡 **Channels**            | Espacios utilizados para comunicación |
| 🎯 **Communication Scope** | Alcance de una comunicación           |

---

# 🎯 Al terminar

> **Los Namespaces permiten separar diferentes áreas de comunicación dentro del mismo servidor Socket.IO. Cada Namespace puede tener su propia lógica, autenticación y comunicación.**

```text id="summary"
Socket Server

   ├── /chat
   ├── /support
   └── /dashboard
```
