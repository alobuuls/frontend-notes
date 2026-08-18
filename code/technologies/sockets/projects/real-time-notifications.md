# 📁 03 — Real-Time Notifications 🔔⚡

> 💡 **¿Cómo recibe un usuario eventos importantes sin hacer polling?**
>
> Un sistema de **Real-Time Notifications** utiliza WebSockets para enviar eventos directamente al navegador del usuario cuando ocurren.

---

## 📚 Índice

- [📁 03 — Real-Time Notifications 🔔⚡](#-03--real-time-notifications-)
  - [📚 Índice](#-índice)
- [1️⃣ Notification Architecture 🏗️](#1️⃣-notification-architecture-️)
- [2️⃣ User Authentication 🔐](#2️⃣-user-authentication-)
- [3️⃣ Private Messages 💬](#3️⃣-private-messages-)
- [4️⃣ Notification Types 🔔](#4️⃣-notification-types-)
    - [💬 New Message](#-new-message)
    - [📦 Order Updated](#-order-updated)
    - [⚠️ System Alert](#️-system-alert)
- [5️⃣ User Channels 📡](#5️⃣-user-channels-)
- [6️⃣ Event System ⚡](#6️⃣-event-system-)
- [7️⃣ Notification Storage 💾](#7️⃣-notification-storage-)
- [8️⃣ Read Status 👁️](#8️⃣-read-status-️)
- [9️⃣ Delivery Logic 📤](#9️⃣-delivery-logic-)
- [🔟 Scaling Considerations 📈](#-scaling-considerations-)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)
    - [🌎 Casos reales](#-casos-reales)

---

# 1️⃣ Notification Architecture 🏗️

La arquitectura conecta los eventos del backend con el navegador del usuario.

```text
Backend Event

      |

      ▼

Notification Service

      |

      ▼

WebSocket

      |

      ▼

User Browser
```

> 💡 **Tip:** Cuando ocurre un evento en el backend, el **Notification Service** puede enviarlo al usuario mediante WebSocket.

---

# 2️⃣ User Authentication 🔐

El sistema debe identificar al usuario para saber a quién enviar una notificación.

```text
User

   ↓

Authentication

   ↓

User Identity

   ↓

Notification
```

> 💡 **Tip:** La autenticación permite asociar las notificaciones con el usuario correspondiente.

---

# 3️⃣ Private Messages 💬

Las notificaciones pueden enviarse de forma privada a un usuario específico.

```text
Backend Event

      ↓

User A

      ↓

WebSocket

      ↓

User Browser
```

> 💡 **Tip:** Un mensaje privado está dirigido únicamente al usuario correspondiente.

---

# 4️⃣ Notification Types 🔔

Las notificaciones pueden representar diferentes tipos de eventos.

### 💬 New Message

```json
{
  "type": "new_message"
}
```

### 📦 Order Updated

```json
{
  "type": "order_update"
}
```

### ⚠️ System Alert

```json
{
  "type": "warning"
}
```

> 💡 **Tip:** El campo `type` permite identificar qué tipo de notificación recibió el usuario.

---

# 5️⃣ User Channels 📡

Los usuarios pueden tener canales privados para recibir sus notificaciones.

```text
Notification Service

      |

      ├── User A Channel

      ├── User B Channel

      └── User C Channel
```

> 💡 **Tip:** Los **User Channels** permiten dirigir eventos hacia usuarios específicos.

---

# 6️⃣ Event System ⚡

Las notificaciones se generan a partir de eventos.

```text
Backend Event

      ↓

Event System

      ↓

Notification

      ↓

User
```

> 💡 **Tip:** El sistema de eventos permite reaccionar a acciones importantes y generar notificaciones.

---

# 7️⃣ Notification Storage 💾

Las notificaciones pueden almacenarse para conservar su información.

```text
Notification

      ↓

Storage

      ↓

Notification History
```

> 💡 **Tip:** **Notification Storage** permite conservar las notificaciones para su consulta posterior.

---

# 8️⃣ Read Status 👁️

Una notificación puede tener un estado que indique si ya fue leída.

```text
Notification

      ↓

Read Status

      ↓

Read / Unread
```

> 💡 **Tip:** **Read Status** permite distinguir entre notificaciones leídas y no leídas.

---

# 9️⃣ Delivery Logic 📤

La **Delivery Logic** determina cómo se entrega una notificación al usuario.

```text
Backend Event

      ↓

Notification Service

      ↓

Identify User

      ↓

User Channel

      ↓

WebSocket

      ↓

Browser
```

> 🎯 **Objetivo:** Entregar el evento al usuario correspondiente en tiempo real.

---

# 🔟 Scaling Considerations 📈

Cuando aumenta el número de usuarios y eventos, el sistema debe considerar el escalado.

```text
Users

   ↓

WebSocket Servers

   ↓

Notification Service

   ↓

Multiple Connections
```

> 💡 **Tip:** **Scaling Considerations** permiten mantener el sistema funcionando cuando aumentan los usuarios y las notificaciones.

---

# 🧠 Conceptos principales

| Concepto                | Significado                               |
| ----------------------- | ----------------------------------------- |
| ⚡ **Events**            | Eventos que generan notificaciones        |
| 🔒 **Private Channels** | Canales destinados a usuarios específicos |
| 🎯 **User Targeting**   | Determinar qué usuario recibe un evento   |
| ⚡ **Real-Time Updates** | Actualizaciones recibidas en tiempo real  |

---

# 🎯 Al terminar

> **Un sistema de Real-Time Notifications permite que los eventos del backend lleguen directamente al navegador del usuario mediante WebSockets, sin necesidad de polling.**

```text
Backend Event

      ↓

Notification Service

      ↓

WebSocket

      ↓

User Browser
```

### 🌎 Casos reales

```text
Social Media

Banking

E-commerce

Dashboards
```
