# 📄 03 — Origin 🌐

> **¿Cómo sabe el servidor quién está intentando abrir una conexión?**

El **Origin** permite identificar desde qué sitio web viene una solicitud WebSocket y ayuda al servidor a decidir si acepta o rechaza la conexión.

---

## 📚 Índice

- [📄 03 — Origin 🌐](#-03--origin-)
  - [📚 Índice](#-índice)
- [1️⃣ What is Origin? 🌍](#1️⃣-what-is-origin-)
    - [Un origin identifica:](#un-origin-identifica)
- [2️⃣ Origin Header 📋](#2️⃣-origin-header-)
- [3️⃣ Browser Origin Policy 🌐](#3️⃣-browser-origin-policy-)
    - [Concepto:](#concepto)
- [4️⃣ Validating Origins ✅](#4️⃣-validating-origins-)
    - [🔄 Flujo:](#-flujo)
- [5️⃣ Trusted Origins 🔒](#5️⃣-trusted-origins-)
    - [Ejemplo:](#ejemplo)
- [6️⃣ Blocking Unknown Origins 🚫](#6️⃣-blocking-unknown-origins-)
    - [🔄 Flujo:](#-flujo-1)
- [7️⃣ Origin Spoofing ⚠️](#7️⃣-origin-spoofing-️)
    - [Concepto:](#concepto-1)
- [8️⃣ Server Verification 🖥️](#8️⃣-server-verification-️)
    - [Proceso:](#proceso)
- [🔄 Origin Validation Flow](#-origin-validation-flow)
- [🛡️ Importance of Origin Validation](#️-importance-of-origin-validation)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)
    - [🔄 Flujo:](#-flujo-2)

---

# 1️⃣ What is Origin? 🌍

**Origin** representa el origen de una solicitud realizada desde un navegador.

### Un origin identifica:

| Elemento |
| -------- |
| Protocol |
| Domain   |
| Port     |

**Ejemplo:**

```text id="q8m4vx"
https://myapp.com
```

---

# 2️⃣ Origin Header 📋

Durante el WebSocket Handshake, el navegador puede enviar un header llamado `Origin`.

**Ejemplo:**

```http id="p5m2qx"
GET /chat HTTP/1.1

Origin: https://myapp.com
```

El servidor puede leer este valor para validar el origen.

> 💡 **Tip**
>
> El `Origin` indica desde qué sitio web viene una solicitud realizada desde un navegador.

---

# 3️⃣ Browser Origin Policy 🌐

Los navegadores aplican reglas de origen para controlar la comunicación entre sitios.

### Concepto:

```text id="x7m3qp"
Website A

        ↓

WebSocket Connection

        ↓

Server
```

El servidor puede decidir qué orígenes acepta.

---

# 4️⃣ Validating Origins ✅

El servidor puede comprobar el `Origin` recibido durante la conexión.

### 🔄 Flujo:

```text id="n6m8qx"
Check Origin

      ↓

Allowed?

      ↓

Accept Connection
```

Si el origen no es válido:

```text id="k4q9mp"
Reject Connection
```

---

# 5️⃣ Trusted Origins 🔒

Un servidor puede mantener una lista de orígenes confiables.

### Ejemplo:

```text id="v8m3qx"
Allowed Origins:

https://app.com

https://admin.com
```

Solo estos sitios podrán iniciar conexiones.

---

# 6️⃣ Blocking Unknown Origins 🚫

Los orígenes desconocidos pueden ser bloqueados.

### 🔄 Flujo:

```text id="r5m8qx"
Unknown Website

        ↓

Attempts WebSocket Connection

        ↓

Server Rejects
```

> 🛡️ **Security Tip**
>
> El servidor puede decidir qué orígenes acepta.

---

# 7️⃣ Origin Spoofing ⚠️

El **Origin Spoofing** ocurre cuando alguien intenta falsificar información del origen.

### Concepto:

```text id="t6m2qx"
Fake Origin

      ↓

Server Verification

      ↓

Accept or Reject
```

El servidor debe validar correctamente los orígenes permitidos.

---

# 8️⃣ Server Verification 🖥️

El servidor es responsable de verificar el origen antes de aceptar la conexión.

### Proceso:

```text id="x3q8mv"
Receive Origin

      ↓

Compare with Trusted Origins

      ↓

Accept / Reject
```

---

# 🔄 Origin Validation Flow

```text id="a7m4qp"
Client

      |

      | Origin: https://myapp.com

      |

      ▼

Server

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

# 🛡️ Importance of Origin Validation

La validación de origen ayuda a evitar conexiones desde sitios no autorizados.

**Ejemplo:**

```text id="b6n9mx"
Unknown Website

        ↓

Attempts WebSocket Connection

        ↓

Server Rejects
```

---

# 🧠 Conceptos principales

| Concepto               | Significado                         |
| ---------------------- | ----------------------------------- |
| 🌐 **Origin**          | Sitio desde donde viene la conexión |
| 📋 **Origin Header**   | Header enviado durante handshake    |
| 🔒 **Trusted Domains** | Dominios permitidos                 |
| ✅ **Validation**       | Verificación del origen             |

---

# 🎯 Al terminar

El servidor puede validar el `Origin` enviado durante el WebSocket Handshake para aceptar solamente conexiones desde sitios confiables.

### 🔄 Flujo:

```text id="w8p2mq"
Client

↓

Origin Header

↓

Server Validation

↓

Accept / Reject Connection
```

> 🎯 **Remember**
>
> El servidor puede validar el `Origin` para aceptar solamente conexiones desde sitios confiables.
