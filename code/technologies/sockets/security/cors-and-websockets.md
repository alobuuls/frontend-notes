# 📄 04 — CORS and WebSockets 🌐

> **¿WebSocket funciona igual que HTTP con CORS?**

WebSocket y HTTP tienen diferencias en cómo manejan las restricciones de origen y la seguridad de las conexiones.

---

## 📚 Índice 

- [📄 04 — CORS and WebSockets 🌐](#-04--cors-and-websockets-)
  - [📚 Índice](#-índice)
- [1️⃣ What is CORS? 🌍](#1️⃣-what-is-cors-)
- [2️⃣ CORS in HTTP 🌐](#2️⃣-cors-in-http-)
    - [🔄 Flujo:](#-flujo)
- [3️⃣ CORS vs WebSockets 🔌](#3️⃣-cors-vs-websockets-)
    - [HTTP:](#http)
    - [WebSocket:](#websocket)
- [4️⃣ Origin Validation ✅](#4️⃣-origin-validation-)
    - [🔄 Flujo:](#-flujo-1)
- [5️⃣ Browser Restrictions 🌐](#5️⃣-browser-restrictions-)
    - [Concepto:](#concepto)
- [6️⃣ WebSocket Handshake 🤝](#6️⃣-websocket-handshake-)
    - [🔄 Flujo:](#-flujo-2)
- [7️⃣ Allowed Origins 🔒](#7️⃣-allowed-origins-)
- [8️⃣ Common Misconceptions ⚠️](#8️⃣-common-misconceptions-️)
- [🔄 WebSocket Origin Validation Flow](#-websocket-origin-validation-flow)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)
    - [🔄 Flujo:](#-flujo-3)

# 1️⃣ What is CORS? 🌍

**CORS (Cross-Origin Resource Sharing)** es un mecanismo que permite controlar solicitudes realizadas desde un origen diferente al del servidor.

> 💡 **Tip**
>
> Permite definir:
>
> `Which origins are allowed?`

**Ejemplo:**

```text id="q8m4vx"
Frontend

    ↓

Different Origin Request

    ↓

Backend
```

---

# 2️⃣ CORS in HTTP 🌐

En HTTP, el navegador aplica reglas CORS antes de permitir ciertas solicitudes.

### 🔄 Flujo:

```text id="p5m2qx"
Browser

    |

    |

CORS Rules

    |

    |

API
```

El servidor responde indicando qué orígenes están permitidos.

---

# 3️⃣ CORS vs WebSockets 🔌

WebSocket no utiliza exactamente el mismo mecanismo CORS tradicional de HTTP.

### HTTP:

```text id="x7m3qp"
Browser

    |

    |

CORS Rules

    |

    |

API
```

### WebSocket:

```text id="n6m8qx"
Browser

    |

    |

Origin Header

    |

    |

WebSocket Server
```

> ⚠️ **Important**
>
> WebSocket no utiliza exactamente el mismo mecanismo CORS tradicional de HTTP.

---

# 4️⃣ Origin Validation ✅

En WebSocket, la validación normalmente ocurre mediante el header `Origin`.

### 🔄 Flujo:

```text id="k4q9mp"
Origin Header

        ↓

Server Validation

        ↓

Accept / Reject
```

El servidor decide si acepta la conexión.

---

# 5️⃣ Browser Restrictions 🌐

Los navegadores aplican restricciones para proteger a los usuarios.

### Concepto:

```text id="v8m3qx"
Browser

      ↓

Security Rules

      ↓

Connection
```

Estas restricciones ayudan a evitar conexiones no autorizadas.

---

# 6️⃣ WebSocket Handshake 🤝

La validación del origen ocurre durante el inicio de la conexión WebSocket.

### 🔄 Flujo:

```text id="r5m8qx"
Client

      ↓

WebSocket Handshake

      ↓

Origin Header

      ↓

Server Validation
```

---

# 7️⃣ Allowed Origins 🔒

El servidor puede mantener una lista de orígenes permitidos.

**Ejemplo:**

```text id="t6m2qx"
Allowed Origins:

https://app.com

https://admin.com
```

Los orígenes fuera de esta lista pueden ser rechazados.

> 🛡️ **Security Tip**
>
> El servidor puede mantener una lista de orígenes permitidos.

---

# 8️⃣ Common Misconceptions ⚠️

Un error común es pensar:

```text id="x3q8mv"
Enable CORS

=

Secure WebSocket
```

> ❌ **Not Correct**
>
> Esto no es correcto.

La seguridad WebSocket depende de:

| Security          |
| ----------------- |
| Origin Validation |
| Authentication    |
| Authorization     |
| Secure Connection |

---

# 🔄 WebSocket Origin Validation Flow

```text id="b6n9mx"
Browser

      |

      | Origin Header

      |

      ▼

WebSocket Server

      |

      | Check Origin

      |

      ▼

Allowed?

      |

      ▼

Accept Connection
```

---

# 🧠 Conceptos principales

| Concepto                    | Significado                           |
| --------------------------- | ------------------------------------- |
| 🌐 **CORS**                 | Control de solicitudes entre orígenes |
| 🌍 **Origin**               | Sitio desde donde viene la conexión   |
| 🔒 **Same-Origin Policy**   | Regla de seguridad del navegador      |
| 🤝 **Handshake Validation** | Validación durante conexión inicial   |

---

# 🎯 Al terminar

WebSocket no utiliza exactamente el mismo mecanismo CORS que HTTP. La validación normalmente se realiza utilizando el header `Origin` durante el WebSocket Handshake.

### 🔄 Flujo:

```text id="w8p2mq"
Origin Header

↓

Server Validation

↓

Accept / Reject Connection
```

> 🎯 **Remember**
>
> WebSocket no utiliza exactamente el mismo mecanismo CORS que HTTP.
