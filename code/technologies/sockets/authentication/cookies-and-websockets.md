# 🍪 03 — Cookies and WebSockets

> **¿Puede WebSocket usar las cookies del navegador?**

WebSocket puede utilizar cookies del navegador durante el proceso inicial (**handshake**) para identificar usuarios.

---

## 📚 Índice

- [🍪 03 — Cookies and WebSockets](#-03--cookies-and-websockets)
  - [📚 Índice](#-índice)
- [1️⃣ What are Cookies? 🍪](#1️⃣-what-are-cookies-)
    - [📌 Se utilizan para:](#-se-utilizan-para)
- [2️⃣ Cookies in HTTP 🌐](#2️⃣-cookies-in-http-)
- [3️⃣ Cookies During WebSocket Handshake 🔄](#3️⃣-cookies-during-websocket-handshake-)
    - [🔄 Flujo:](#-flujo)
- [4️⃣ Session Cookies 🔑](#4️⃣-session-cookies-)
- [5️⃣ Secure Cookies 🔒](#5️⃣-secure-cookies-)
- [6️⃣ HttpOnly Cookies 🛡️](#6️⃣-httponly-cookies-️)
    - [⚙️ Funcionamiento:](#️-funcionamiento)
- [7️⃣ SameSite Cookies 🌍](#7️⃣-samesite-cookies-)
    - [Permite controlar escenarios:](#permite-controlar-escenarios)
- [8️⃣ Cookie Authentication Flow 🔄](#8️⃣-cookie-authentication-flow-)
    - [🔄 Flujo completo:](#-flujo-completo)
- [9️⃣ Advantages ✅](#9️⃣-advantages-)
  - [Automatic ⚡](#automatic-)
  - [Browser Managed 🌐](#browser-managed-)
  - [Good for Web Apps 💻](#good-for-web-apps-)
- [🔟 Limitations ⚠️](#-limitations-️)
  - [CSRF Considerations 🛡️](#csrf-considerations-️)
  - [Cross-domain Complexity 🌍](#cross-domain-complexity-)
- [🍪 Cookie Authentication Example](#-cookie-authentication-example)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)
    - [🔄 Flujo:](#-flujo-1)


# 1️⃣ What are Cookies? 🍪

Las **Cookies** son pequeños datos almacenados por el navegador que permiten guardar información asociada a un usuario.

### 📌 Se utilizan para:

| Uso              |
| ---------------- |
| Sessions         |
| Authentication   |
| User Preferences |

---

# 2️⃣ Cookies in HTTP 🌐

En HTTP, las cookies se envían automáticamente en las solicitudes del navegador.

```text id="q8m4vx"
Client

   ↓

HTTP Request

   ↓

Cookie: sessionId=abc123

   ↓

Server
```

> 💡 **Tip**
>
> Las cookies pueden contener información utilizada para identificar una sesión.

---

# 3️⃣ Cookies During WebSocket Handshake 🔄

Las cookies pueden enviarse durante el **WebSocket Handshake** inicial.

### 🔄 Flujo:

```text id="p5m2qx"
Client

        ↓

HTTP Upgrade Request

        ↓

Cookie: sessionId=abc123

        ↓

Server validates cookie
```

Después del handshake, la conexión WebSocket permanece abierta.

---

# 4️⃣ Session Cookies 🔑

Las **Session Cookies** permiten identificar una sesión activa de usuario.

```text id="x7m3qp"
Login

   ↓

Server creates Session Cookie

   ↓

Browser stores Cookie

   ↓

WebSocket Connection

   ↓

Cookie sent automatically

   ↓

Server identifies user
```

---

# 5️⃣ Secure Cookies 🔒

Una cookie con la opción **Secure** solamente se envía mediante conexiones seguras.

```text id="n6m8qx"
HTTPS only
```

Protege la transmisión de información sensible.

> 🔒 **Security Tip**
>
> **Secure** → HTTPS only

---

# 6️⃣ HttpOnly Cookies 🛡️

Una cookie **HttpOnly** no puede ser accedida desde JavaScript.

### ⚙️ Funcionamiento:

```text id="k4q9mp"
JavaScript ❌

Browser ✅
```

Ayuda a proteger información de sesión.

---

# 7️⃣ SameSite Cookies 🌍

**SameSite** controla cuándo una cookie puede enviarse en solicitudes entre diferentes sitios.

### Permite controlar escenarios:

| Escenario  |
| ---------- |
| Same Site  |
| Cross Site |

---

# 8️⃣ Cookie Authentication Flow 🔄

### 🔄 Flujo completo:

```text id="r5m8qx"
Login

 ↓

Server creates Session Cookie

 ↓

Browser stores Cookie

 ↓

WebSocket Connection

 ↓

Cookie sent automatically

 ↓

Server identifies user
```

---

# 9️⃣ Advantages ✅

Las cookies tienen ventajas para autenticación WebSocket.

```text id="t6m2qx"
Automatic

Browser Managed

Good for Web Apps
```

## Automatic ⚡

El navegador puede enviar cookies automáticamente durante la conexión.

## Browser Managed 🌐

El navegador administra almacenamiento y envío.

## Good for Web Apps 💻

Funcionan bien en aplicaciones web con sesiones.

---

# 🔟 Limitations ⚠️

Existen algunas limitaciones.

```text id="x3q8mv"
CSRF considerations

Cross-domain complexity
```

## CSRF Considerations 🛡️

Las cookies pueden requerir protección adicional contra ataques CSRF.

## Cross-domain Complexity 🌍

El uso de cookies entre diferentes dominios puede requerir configuración adicional.

> ⚠️ **Tip**
>
> Las cookies pueden requerir configuración adicional cuando se utilizan entre diferentes dominios.

---

# 🍪 Cookie Authentication Example

```text id="a7m4qp"
Client

        ↓

HTTP Upgrade Request

        ↓

Cookie: sessionId=abc123

        ↓

Server validates cookie

        ↓

Authenticated Connection
```

---

# 🧠 Conceptos principales

| Concepto                        | Significado                               |
| ------------------------------- | ----------------------------------------- |
| 🍪 **Cookies**                  | Datos almacenados por el navegador        |
| 🔑 **Session Cookie**           | Cookie que identifica una sesión          |
| 🛡️ **HttpOnly**                | Cookie no accesible desde JavaScript      |
| 🔒 **Secure**                   | Cookie enviada solo por HTTPS             |
| 🌍 **SameSite**                 | Control de envío cross-site               |
| 🔄 **Handshake Authentication** | Autenticación durante la conexión inicial |

---

# 🎯 Al terminar

WebSocket puede utilizar cookies del navegador durante el **handshake** inicial.

### 🔄 Flujo:

```text id="w8p2mq"
Login

↓

Session Cookie

↓

WebSocket Handshake

↓

Cookie Validation

↓

Authenticated Connection
```

> 💡 **Remember**
>
> WebSocket puede utilizar cookies del navegador durante el **handshake** inicial.
