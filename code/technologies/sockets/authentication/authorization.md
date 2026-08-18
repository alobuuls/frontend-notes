# 🛡️ 02 — Authorization

> **Aunque el usuario esté autenticado, ¿qué acciones puede realizar?**

La **Authorization** controla qué acciones puede ejecutar un usuario después de haber sido identificado.

---

## 📚 Índice

- [🛡️ 02 — Authorization](#️-02--authorization)
  - [📚 Índice](#-índice)
- [1️⃣ What is Authorization? 🔐](#1️⃣-what-is-authorization-)
- [2️⃣ Authentication vs Authorization 🔑🛡️](#2️⃣-authentication-vs-authorization-️)
- [3️⃣ Permissions ✅](#3️⃣-permissions-)
- [4️⃣ Roles 👥](#4️⃣-roles-)
- [5️⃣ Access Control 🔒](#5️⃣-access-control-)
- [6️⃣ Protecting Messages 💬](#6️⃣-protecting-messages-)
- [7️⃣ Protecting Channels 📡](#7️⃣-protecting-channels-)
- [8️⃣ User Permissions 👤](#8️⃣-user-permissions-)
- [9️⃣ Role Based Access Control (RBAC) 🏷️](#9️⃣-role-based-access-control-rbac-️)
- [🔟 Authorization Flow 🔄](#-authorization-flow-)
- [🔌 Authorization in WebSockets](#-authorization-in-websockets)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)

# 1️⃣ What is Authorization? 🔐

La **Authorization** es el proceso de verificar qué permisos tiene un usuario dentro de una aplicación.

> 💡 **Question**
>
> `What can you do?`

**Ejemplos:**

| Permission       |
| ---------------- |
| Access Channel   |
| Send Message     |
| Delete Data      |
| View Information |

---

# 2️⃣ Authentication vs Authorization 🔑🛡️

Son conceptos diferentes.

| Concepto              | Pregunta         |
| --------------------- | ---------------- |
| 🔑 **Authentication** | Who are you?     |
| 🛡️ **Authorization** | What can you do? |

**Ejemplo:**

**Usuario:**

```text
John
```

**Authentication:**

```text
John is logged in
```

**Authorization:**

```text
Can John access admin channel?
```

> ⚠️ **Tip**
>
> **Authentication** identifica al usuario.
> **Authorization** determina qué puede hacer.

---

# 3️⃣ Permissions ✅

Los **Permissions** definen qué acciones puede realizar un usuario.

```text
Read Data

Send Message

Delete User

Access Channel
```

---

# 4️⃣ Roles 👥

Los **Roles** agrupan permisos relacionados.

```text
Admin

User

Moderator
```

Cada rol puede tener diferentes permisos.

---

# 5️⃣ Access Control 🔒

El **Access Control** determina quién puede acceder a ciertos recursos o acciones.

**Controla:**

| Recursos / Acciones |
| ------------------- |
| Users               |
| Channels            |
| Messages            |
| Actions             |

---

# 6️⃣ Protecting Messages 💬

Los mensajes pueden requerir autorización antes de ser procesados.

**Ejemplo:**

```json
{
  "type":"delete_user",
  "payload":{
    "id":10
  }
}
```

El servidor debe validar si el usuario puede ejecutar esa acción.

> 🔐 **Security Tip**
>
> Nunca se debe ejecutar una acción protegida sin validar los permisos del usuario.

---

# 7️⃣ Protecting Channels 📡

Los canales o grupos pueden estar protegidos mediante permisos.

```text
Admin Channel

        ↓

Only Admin Users
```

---

# 8️⃣ User Permissions 👤

Cada usuario puede tener permisos específicos.

```text
John

Permissions:

- Read Messages
- Send Messages
```

---

# 9️⃣ Role Based Access Control (RBAC) 🏷️

**RBAC** significa controlar acceso basado en roles.

**Flujo:**

```text
User

   ↓

Role

   ↓

Permissions

   ↓

Access
```

**Ejemplo:**

```text
Admin

   ↓

Delete Users Permission

   ↓

Allowed
```

---

# 🔟 Authorization Flow 🔄

**Flujo de autorización:**

```text
Client

    ↓

Send Action

    ↓

Server Validates User

    ↓

Check Permission

    ↓

Execute Action
```

---

# 🔌 Authorization in WebSockets

**Ejemplo:**

**Cliente envía:**

```json
{
  "type":"delete_user",
  "payload":{
    "id":10
  }
}
```

**Servidor valida:**

```text
Is user authenticated?

        ↓

Does user have permission?

        ↓

Execute action
```

---

# 🧠 Conceptos principales

| Concepto              | Significado             |
| --------------------- | ----------------------- |
| ✅ **Permissions**     | Acciones permitidas     |
| 👥 **Roles**          | Grupo de permisos       |
| 🏷️ **RBAC**          | Control basado en roles |
| 🔒 **Access Control** | Control de acceso       |
| 📋 **Security Rules** | Reglas de seguridad     |

---

# 🎯 Al terminar

La **Authentication** identifica al usuario, mientras que la **Authorization** decide qué acciones puede realizar.

**Flujo:**

```text
User Authentication

        ↓

Check Permissions

        ↓

Allow or Reject Action
```

> 💡 **Remember**
>
> En WebSockets, cada mensaje o canal protegido debe validar los permisos antes de ejecutar una acción.
