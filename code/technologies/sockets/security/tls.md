# 📄 02 — TLS 🔐

> **¿Qué ocurre internamente cuando usamos `wss`?**

TLS es la tecnología que permite crear una conexión segura para WebSocket mediante cifrado, autenticación e integridad de datos.

---

## 📚 Índice

- [📄 02 — TLS 🔐](#-02--tls-)
  - [📚 Índice](#-índice)
- [1️⃣ What is TLS? 🔒](#1️⃣-what-is-tls-)
    - [🔐 TLS crea un canal seguro:](#-tls-crea-un-canal-seguro)
- [2️⃣ TLS Handshake 🤝](#2️⃣-tls-handshake-)
    - [🔄 Durante este proceso:](#-durante-este-proceso)
- [3️⃣ Encryption 🔐](#3️⃣-encryption-)
    - [Flujo:](#flujo)
- [4️⃣ Certificates 📜](#4️⃣-certificates-)
    - [🔎 Flujo:](#-flujo)
- [5️⃣ Public and Private Keys 🔑](#5️⃣-public-and-private-keys-)
    - [Conceptos:](#conceptos)
- [6️⃣ HTTPS + WebSocket 🌐](#6️⃣-https--websocket-)
    - [Relación:](#relación)
- [7️⃣ Secure WebSocket Flow 🔄](#7️⃣-secure-websocket-flow-)
    - [Flujo completo:](#flujo-completo)
- [8️⃣ Certificate Validation ✅](#8️⃣-certificate-validation-)
    - [Proceso:](#proceso)
- [9️⃣ TLS Versions 🔐](#9️⃣-tls-versions-)
    - [Concepto:](#concepto)
- [🔟 Common Problems ⚠️](#-common-problems-️)
- [🛡️ TLS Protection](#️-tls-protection)
- [🔄 Flujo completo con WebSocket Seguro](#-flujo-completo-con-websocket-seguro)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)
    - [🔄 Flujo:](#-flujo-1)

# 1️⃣ What is TLS? 🔒

**TLS (Transport Layer Security)** es un protocolo de seguridad que protege la comunicación entre un cliente y un servidor.

### 🔐 TLS crea un canal seguro:

```text
Client

   |

   | TLS Handshake

   |

   ▼

Server

   |

   |

Encrypted Channel
```

---

# 2️⃣ TLS Handshake 🤝

El **TLS Handshake** es el proceso inicial donde cliente y servidor establecen una conexión segura.

### 🔄 Durante este proceso:

```text
Client

      ↓

TLS Handshake

      ↓

Server

      ↓

Secure Connection
```

> 💡 **Tip**
>
> El **TLS Handshake** ocurre al inicio para establecer una conexión segura.

---

# 3️⃣ Encryption 🔐

TLS cifra la información para evitar que terceros puedan leer los datos.

### Flujo:

```text
Original Data

      ↓

Encryption

      ↓

Encrypted Data
```

La comunicación viaja protegida:

```text
Client

   ↓

Encrypted Data

   ↓

Server
```

---

# 4️⃣ Certificates 📜

Los certificados permiten comprobar la identidad del servidor.

### 🔎 Flujo:

```text
Server presents:

Certificate

        ↓

Client verifies

        ↓

Trust established
```

---

# 5️⃣ Public and Private Keys 🔑

TLS utiliza claves para establecer una comunicación segura.

### Conceptos:

```text
Public Key

Private Key
```

Permiten:

| Función               |
| --------------------- |
| Secure Exchange       |
| Encryption            |
| Identity Verification |

---

# 6️⃣ HTTPS + WebSocket 🌐

WebSocket seguro utiliza TLS mediante `wss`.

### Relación:

```text
HTTP

   ↓

HTTPS + TLS

   ↓

WebSocket Upgrade

   ↓

Secure WebSocket
```

---

# 7️⃣ Secure WebSocket Flow 🔄

### Flujo completo:

```text
Browser

   |

   | HTTPS/TLS

   |

   ▼

WebSocket Upgrade

   |

   |

   ▼

Secure WebSocket Connection
```

---

# 8️⃣ Certificate Validation ✅

El cliente valida el certificado presentado por el servidor.

### Proceso:

```text
Certificate

      ↓

Client verifies

      ↓

Trust established
```

> 🛡️ **Security Tip**
>
> El cliente valida el certificado presentado por el servidor.

---

# 9️⃣ TLS Versions 🔐

TLS tiene diferentes versiones utilizadas para mejorar seguridad y rendimiento.

### Concepto:

```text
TLS Versions

↓

Security Improvements
```

---

# 🔟 Common Problems ⚠️

Los problemas comunes relacionados con TLS incluyen:

| Common Problems              |
| ---------------------------- |
| Invalid Certificate          |
| Certificate Expired          |
| Certificate Validation Error |

---

# 🛡️ TLS Protection

TLS proporciona:

| Protección             | Significado                   |
| ---------------------- | ----------------------------- |
| 🔒 **Confidentiality** | Los datos permanecen privados |
| ✅ **Integrity**        | Los datos no son modificados  |
| 👤 **Authentication**  | Verifica la identidad         |

---

# 🔄 Flujo completo con WebSocket Seguro

```text
Browser

   |

   | HTTPS/TLS

   |

   ▼

WebSocket Upgrade

   |

   |

   ▼

Secure WebSocket Connection
```

---

# 🧠 Conceptos principales

| Concepto           | Significado                        |
| ------------------ | ---------------------------------- |
| 🔐 **TLS**         | Protocolo de seguridad             |
| 📜 **Certificate** | Identidad del servidor             |
| 🔒 **Encryption**  | Cifrado de datos                   |
| 🔑 **Keys**        | Claves usadas para seguridad       |
| 🤝 **Handshake**   | Proceso inicial de conexión segura |

---

# 🎯 Al terminar

Debes poder explicar:

TLS permite que una conexión `wss` sea segura creando un canal cifrado entre cliente y servidor.

### 🔄 Flujo:

```text
Client

↓

TLS Handshake

↓

Certificate Validation

↓

Encrypted Channel

↓

Secure WebSocket Connection
```

> 🎯 **Remember**
>
> `wss` utiliza TLS para crear una conexión segura entre cliente y servidor.
