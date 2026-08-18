# 📄 01 — ws vs wss 🔒

> **¿Cómo protegemos la comunicación WebSocket?**

WebSocket tiene dos protocolos principales para establecer conexiones:

| Protocolo | Descripción                  |
| --------- | ---------------------------- |
| `ws://`   | WebSocket sin cifrado        |
| `wss://`  | WebSocket seguro con cifrado |

---

## 📚 Índice 
- [📄 01 — ws vs wss 🔒](#-01--ws-vs-wss-)
  - [📚 Índice](#-índice)
- [1️⃣ What is ws? 🌐](#1️⃣-what-is-ws-)
- [2️⃣ What is wss? 🔐](#2️⃣-what-is-wss-)
- [3️⃣ ws Protocol 🌐](#3️⃣-ws-protocol-)
    - [Características:](#características)
- [4️⃣ wss Protocol 🔒](#4️⃣-wss-protocol-)
    - [Características:](#características-1)
- [5️⃣ Encryption Differences 🔐](#5️⃣-encryption-differences-)
    - [🌐 ws](#-ws)
    - [🔒 wss](#-wss)
- [6️⃣ Security Risks of ws ⚠️](#6️⃣-security-risks-of-ws-️)
    - [Riesgo:](#riesgo)
- [7️⃣ When to Use wss? 🛡️](#7️⃣-when-to-use-wss-️)
    - [Especialmente en:](#especialmente-en)
- [8️⃣ Browser Requirements 🌎](#8️⃣-browser-requirements-)
    - [Concepto:](#concepto)
- [9️⃣ HTTPS and WSS 🔐](#9️⃣-https-and-wss-)
    - [Comparación:](#comparación)
- [🔟 Production Recommendations 🚀](#-production-recommendations-)
- [⚖️ Comparación ws vs wss](#️-comparación-ws-vs-wss)
- [🔄 Connection Flow](#-connection-flow)
    - [🌐 ws](#-ws-1)
    - [🔒 wss](#-wss-1)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)

# 1️⃣ What is ws? 🌐

`ws` significa **WebSocket**.

Es el protocolo básico para comunicación WebSocket sin cifrado.

**Ejemplo:**

```text
ws://example.com
```

La información viaja sin protección:

```text
Client

   |

   |

Plain Data

   |

   |

Server
```

---

# 2️⃣ What is wss? 🔐

`wss` significa **WebSocket Secure**.

Es la versión segura de WebSocket que utiliza cifrado mediante TLS.

**Ejemplo:**

```text
wss://example.com
```

La información viaja protegida:

```text
Client

   |

   |

Encrypted Data

   |

   |

Server
```

> 🔐 **Security Tip**
>
> `wss://` utiliza cifrado mediante TLS para proteger la comunicación.

---

# 3️⃣ ws Protocol 🌐

El protocolo `ws://` permite establecer conexiones WebSocket normales.

### Características:

| Característica      |
| ------------------- |
| No Encryption       |
| Plain Communication |
| Development Usage   |

**Ejemplo:**

```text
ws://localhost:3000
```

---

# 4️⃣ wss Protocol 🔒

El protocolo `wss://` agrega seguridad utilizando TLS.

### Características:

| Característica          |
| ----------------------- |
| Encrypted Communication |
| Secure Transport        |
| Production Usage        |

**Ejemplo:**

```text
wss://example.com
```

---

# 5️⃣ Encryption Differences 🔐

La principal diferencia está en cómo viajan los datos.

### 🌐 ws

```text
Client

   ↓

Plain Data

   ↓

Server
```

### 🔒 wss

```text
Client

   ↓

Encrypted Data

   ↓

Server
```

---

# 6️⃣ Security Risks of ws ⚠️

Una conexión `ws` no cifra la información enviada.

### Riesgo:

```text
Attacker

    ↓

Reads messages

    ↓

Steals data
```

Los datos pueden quedar expuestos durante la comunicación.

> ⚠️ **Warning**
>
> Una conexión `ws` no cifra la información enviada.

---

# 7️⃣ When to Use wss? 🛡️

`wss` debe utilizarse cuando la comunicación necesita protección.

### Especialmente en:

| Uso                     |
| ----------------------- |
| Production Applications |
| Private Data            |
| User Authentication     |
| Sensitive Information   |

---

# 8️⃣ Browser Requirements 🌎

Los navegadores modernos soportan WebSocket seguro mediante `wss`.

### Concepto:

```text
HTTPS Application

        ↓

wss Connection
```

---

# 9️⃣ HTTPS and WSS 🔐

`wss` funciona de forma similar a HTTPS porque utiliza TLS para proteger la comunicación.

### Comparación:

```text
HTTP  → HTTPS

ws    → wss
```

> 💡 **Tip**
>
> Así como **HTTPS** protege HTTP, **wss** protege WebSocket.

---

# 🔟 Production Recommendations 🚀

Para ambientes reales se recomienda utilizar:

| Recommendation   |
| ---------------- |
| `wss://`         |
| TLS Encryption   |
| Secure Transport |

---

# ⚖️ Comparación ws vs wss

| ws              | wss              |
| --------------- | ---------------- |
| ❌ No encryption | ✅ Encrypted      |
| Similar to HTTP | Similar to HTTPS |
| Development     | Production       |
| Data visible    | Data protected   |

---

# 🔄 Connection Flow

### 🌐 ws

```text
Client

      |

      |

 Plain Data

      |

      |

Server
```

### 🔒 wss

```text
Client

      |

      |

 Encrypted Data

      |

      |

Server
```

---

# 🧠 Conceptos principales

| Concepto                 | Significado           |
| ------------------------ | --------------------- |
| 🌐 **ws**                | WebSocket sin cifrado |
| 🔒 **wss**               | WebSocket seguro      |
| 🌍 **HTTPS**             | HTTP con TLS          |
| 🔐 **Encryption**        | Protección de datos   |
| 🛡️ **Secure Transport** | Transporte seguro     |

---

# 🎯 Al terminar

`ws` permite comunicación WebSocket sin cifrado, mientras que `wss` utiliza TLS para proteger los datos.

```text
ws://

↓

No Encryption


wss://

↓

Encrypted Communication
```

> 🎯 **Remember**
>
> `ws://` → No Encryption
> `wss://` → Encrypted Communication
