# 🔒 SECURITY

La **seguridad del backend** consiste en proteger la aplicación, sus datos y sus usuarios frente a ataques, accesos no autorizados y comportamientos maliciosos.

En Express no existe una única herramienta que haga segura una aplicación. La seguridad se construye mediante **múltiples capas**:

```text
Client
   ↓
HTTPS
   ↓
Security Headers
   ↓
CORS
   ↓
Rate Limiting
   ↓
Validation / Sanitization
   ↓
Authentication
   ↓
Authorization
   ↓
Business Logic
   ↓
Database
```

## 📑 ÍNDICE 

1. 🔐 [HTTPS](#1️⃣-https)
2. 🛡️ [SECURITY HEADERS](#2️⃣-security-headers)
3. 🪖 [HELMET](#3️⃣-helmet)
4. 💥 [XSS](#4️⃣-xss)
5. 🔄 [CSRF](#5️⃣-csrf)
6. 🚦 [RATE LIMITING](#6️⃣-rate-limiting)
7. 🔨 [BRUTE FORCE PROTECTION](#7️⃣-brute-force-protection)
8. 🧼 [INPUT SANITIZATION](#8️⃣-input-sanitization)
9. 🔑 [SECRETS](#9️⃣-secrets)
10. 🔐 [PASSWORD HASHING](#1️⃣0️⃣-password-hashing)
11. 🍪 [SECURE COOKIES](#1️⃣1️⃣-secure-cookies)
12. 🎟️ [JWT SECURITY](#1️⃣2️⃣-jwt-security)
13. 🌍 [CORS SECURITY](#1️⃣3️⃣-cors-security)
14. 📦 [DEPENDENCY SECURITY](#1️⃣4️⃣-dependency-security)
15. 🏰 [DEFENSA EN PROFUNDIDAD](#defensa-en-profundidad)
16. 🧠 [IDEA CLAVE](#idea-clave)

> [!IMPORTANT]
> **El backend nunca debe confiar en el frontend.**
> Cualquier validación o restricción importante debe volver a comprobarse en el servidor.

## 1️⃣ 🔐 HTTPS

**HTTPS** es HTTP protegido mediante **TLS (Transport Layer Security)**.

Permite cifrar la comunicación entre el cliente y el servidor.

Sin HTTPS:

```text
Angular
   ↓
HTTP
   ↓
Express
```

La información puede quedar expuesta durante el transporte.

Con HTTPS:

```text
Angular
   ↓
🔒 HTTPS / TLS
   ↓
Express
```

La comunicación viaja cifrada.

### 🎯 ¿Qué protege?

Principalmente ayuda a proteger:

* 🔑 credenciales
* 🎟️ tokens
* 🍪 cookies
* 📦 datos enviados en requests
* 📤 respuestas del servidor

En producción, una API que maneja autenticación debería utilizar HTTPS.

## 2️⃣ 🛡️ SECURITY HEADERS

Los **Security Headers** son headers HTTP que permiten establecer determinadas políticas de seguridad para el navegador.

Por ejemplo:

```text
Content-Security-Policy
X-Content-Type-Options
Referrer-Policy
Strict-Transport-Security
```

Estos headers pueden ayudar a reducir determinados tipos de ataques.

Conceptualmente:

```text
Request
   ↓
Express
   ↓
Security Headers
   ↓
Response
   ↓
Browser
```

## 3️⃣ 🪖 HELMET

**Helmet** es un middleware para Express que ayuda a configurar varios **HTTP security headers**.

Conceptualmente:

```text
Express
   ↓
Helmet
   ↓
Security Headers
   ↓
Browser
```

En lugar de configurar manualmente diferentes headers, Helmet proporciona una forma centralizada de establecer varias protecciones habituales.

> [!NOTE]
> Helmet no convierte automáticamente una aplicación en segura. Es una **capa de seguridad**, no una solución completa.

## 4️⃣ 💥 XSS

**XSS (Cross-Site Scripting)** ocurre cuando un atacante consigue introducir contenido que termina siendo interpretado como código por el navegador.

Conceptualmente:

```text
Attacker
   ↓
Malicious Input
   ↓
Backend
   ↓
Application
   ↓
Browser
   ↓
💥 Script ejecutado
```

Por eso es importante:

```text
Input
 ↓
Validation
 ↓
Sanitization
 ↓
Safe Output
```

### 🧠 Importante

El backend debe tratar los datos recibidos del cliente como **no confiables**.

Nunca debes asumir:

```text
"Angular ya validó esto"
```

porque un atacante puede enviar directamente una request a la API.

## 5️⃣ 🔄 CSRF

**CSRF (Cross-Site Request Forgery)** ocurre cuando un atacante consigue que el navegador de una víctima realice una acción no deseada contra una aplicación donde la víctima ya está autenticada.

Conceptualmente:

```text
Usuario autenticado
       ↓
Tiene Cookie de sesión
       ↓
Sitio malicioso
       ↓
Request hacia tu API
       ↓
Servidor
```

Este problema es especialmente relevante en sistemas que utilizan **cookies automáticamente enviadas por el navegador**.

### 🛡️ Medidas relacionadas

| Medida                        | Uso                                 |
| ----------------------------- | ----------------------------------- |
| `SameSite Cookies`            | Protección relacionada con cookies  |
| `CSRF Tokens`                 | Protección contra CSRF              |
| `Origin / Referer validation` | Validación del origen de la request |

> [!NOTE]
> CSRF y CORS son conceptos diferentes. CORS controla requests cross-origin desde el navegador; CSRF trata de evitar acciones no deseadas realizadas utilizando las credenciales de una víctima.
## 6️⃣ 🚦 RATE LIMITING

**Rate Limiting** limita la cantidad de requests que un cliente puede realizar durante un determinado período.

Por ejemplo:

```text id="7bqk7x"
IP
 ↓
100 requests / minuto
```

Si supera el límite:

```text id="7gqj3s"
101st request
      ↓
🚫 Too Many Requests
      ↓
429
```

Ayuda a reducir:

* spam
* abuso de API
* ataques automatizados
* ciertos ataques de fuerza bruta
* consumo excesivo de recursos

### Flujo

```text id="i8yv8u"
Request
   ↓
Rate Limiter
   ↓
¿Superó el límite?
 ┌────┴────┐
No         Sí
 ↓          ↓
next()     429
```

## 7️⃣ 🔨 BRUTE FORCE PROTECTION

Un ataque de **brute force** consiste en intentar repetidamente diferentes credenciales hasta encontrar las correctas.

Por ejemplo:

```text id="5t6j4n"
POST /login
      ↓
password 1 ❌
password 2 ❌
password 3 ❌
password 4 ❌
...
```

Una API puede implementar medidas como:

```text id="a6xv3q"
Rate Limiting
+
Login Attempt Limits
+
Temporary Delays
+
Account Locking
```

Especialmente importante en:

```text id="h8c0bv"
POST /login
POST /auth/login
POST /password-reset
```

## 8️⃣ 🧼 INPUT SANITIZATION

La **sanitización** consiste en transformar o limpiar datos de entrada para reducir contenido potencialmente peligroso o no deseado.

Por ejemplo:

```text id="2e9w6v"
User Input
    ↓
Sanitization
    ↓
Validated Data
    ↓
Application
```

Es importante distinguir:

| Mecanismo        | Pregunta                             |
| ---------------- | ------------------------------------ |
| **Validation**   | ¿El dato cumple las reglas?          |
| **Sanitization** | ¿Podemos limpiar/normalizar el dato? |

Por ejemplo:

```text id="5p6m3h"
Email
 ↓
Validation
 ↓
¿Tiene formato válido?
```

Mientras que:

```text id="is4v8c"
Input
 ↓
Sanitization
 ↓
Normalizar / limpiar
```

> [!IMPORTANT]
> Sanitizar no sustituye la validación. Son mecanismos complementarios.

## 9️⃣ 🔑 SECRETS

Los **secrets** son datos que no deberían estar expuestos públicamente.

Por ejemplo:

```text id="3ijm3m"
Database Password
JWT Secret
API Keys
Encryption Keys
Third-party Credentials
```

Nunca deberían estar directamente en el código:

```js
const JWT_SECRET = 'mi-secreto-super-secreto';
```

Ni deberían subirse al repositorio.

Normalmente se utilizan:

```text id="4q7x2k"
Environment Variables
        ↓
process.env
```

Y en entornos más avanzados:

```text id="u7x5v4"
Secret Manager
```

### ❌ Nunca

```text id="p4x9n1"
GitHub
   ↓
JWT_SECRET
   ↓
❌
```

### ✅

```text id="c8m2yr"
Secret Manager / Environment
        ↓
Backend
        ↓
process.env
```


# 🔟 🔐 PASSWORD HASHING

Las contraseñas **no deben almacenarse en texto plano**.

Nunca:

```text
password
↓
Database

❌ 123456
```

En su lugar se utiliza un algoritmo de hashing diseñado para contraseñas.

Conceptualmente:

```text
Password
   ↓
Password Hashing
   ↓
Hash
   ↓
Database
```

Durante el login:

```text
Password introducida
       ↓
Comparar con hash
       ↓
¿Coincide?
```

Herramientas comunes en el ecosistema Node.js incluyen:

```text
bcrypt
Argon2
```

### 🧠 Hashing ≠ Encryption

```text
Hashing
↓
No está diseñado para recuperar el password original.

Encryption
↓
Puede descifrarse utilizando una clave.
```

Para contraseñas se utiliza **password hashing**, no simplemente cifrado reversible.

---

# 1️⃣1️⃣ 🍪 SECURE COOKIES

Cuando utilizas cookies para autenticación, puedes utilizar atributos que aumentan su seguridad.

Los más importantes son:

| Atributo       | Función                                                       |
| -------------- | ------------------------------------------------------------- |
| 🔒 `Secure`    | La cookie se envía mediante HTTPS                             |
| 🚫 `HttpOnly`  | JavaScript del navegador no puede acceder directamente a ella |
| 🛡️ `SameSite` | Controla cuándo se envía en contextos cross-site              |

Por ejemplo:

```text
Cookie
├── HttpOnly
├── Secure
└── SameSite
```

### 🧠 HttpOnly

Una cookie `HttpOnly` no puede ser leída directamente mediante:

```js
document.cookie
```

Esto ayuda a reducir el impacto de determinados escenarios de robo de cookies mediante JavaScript.

> [!NOTE]
> `HttpOnly` no hace que una cookie sea completamente inmune a CSRF. La configuración `SameSite` y/o mecanismos CSRF siguen siendo relevantes dependiendo de la arquitectura.

---

# 1️⃣2️⃣ 🎟️ JWT SECURITY

Cuando utilizas JWT debes considerar diferentes aspectos de seguridad.

Por ejemplo:

```text
JWT
├── Expiration
├── Secret / Signing Key
├── Algorithm
├── Storage
└── Transport
```

### ⏳ Expiration

Los access tokens deberían tener una duración limitada.

```text
Login
 ↓
Access Token
 ↓
Expira
```

### 🔑 Signing Secret / Key

La clave utilizada para firmar los tokens debe mantenerse secreta.

```text
JWT Secret
   ↓
❌ GitHub
❌ Frontend
❌ Logs

✅ Backend / Secret Manager
```

### 📦 Storage

También debes decidir dónde guardar los tokens en el cliente.

Esto conecta directamente con tu documento de JWT:

```text
📁 JSON-WEB-TOKENS
```

Aquí no repetimos toda la teoría, sino que nos interesa:

> **¿Cómo implementar JWT de forma segura dentro de Express?**

---

# 1️⃣3️⃣ 🌍 CORS SECURITY

CORS debe configurarse de forma controlada.

No deberías asumir que:

```text
*
```

es siempre la mejor opción.

En una aplicación real puedes definir explícitamente los origins permitidos:

```text
Frontend
   ↓
https://app.example.com
   ↓
API
   ↓
CORS
   ↓
✅ Allowed
```

Mientras que:

```text
https://unknown-site.com
        ↓
      CORS
        ↓
        ❌
```

Esto es especialmente importante cuando trabajas con **cookies y credentials**.

La teoría general de CORS permanece en:

```text
📁 cors.md
```

Aquí solamente estudiamos sus implicaciones de seguridad.

---
## 1️⃣4️⃣ 📦 DEPENDENCY SECURITY

Una aplicación Node.js puede depender de cientos de paquetes.

Cada dependencia representa una posible superficie de ataque.

Por eso es importante mantenerlas actualizadas y revisar vulnerabilidades conocidas.

Por ejemplo:

```text id="k8f2qp"
Your Application
      ↓
Dependencies
      ↓
Package A
Package B
Package C
      ↓
¿Vulnerabilidades?
```

Una herramienta habitual es:

```bash id="6zq1cn"
npm audit
```

También puedes utilizar herramientas de seguridad y automatización del ecosistema para detectar dependencias vulnerables.

### 🧠 Buenas prácticas

| Práctica                                   |   |
| ------------------------------------------ | - |
| Mantener dependencias actualizadas         | ✅ |
| Revisar vulnerabilidades                   | ✅ |
| Eliminar dependencias innecesarias         | ✅ |
| Usar lockfiles                             | ✅ |
| Instalar paquetes desconocidos sin revisar | ❌ |

## 🏰 DEFENSA EN PROFUNDIDAD

La seguridad del backend no depende de una sola medida.

Una aplicación segura utiliza **defense in depth**:

```text id="9k1r4w"
                    INTERNET
                       │
                       ▼
                    HTTPS
                       │
                       ▼
                Security Headers
                       │
                       ▼
                     CORS
                       │
                       ▼
                 Rate Limiting
                       │
                       ▼
              Input Validation
                       │
                       ▼
                 Sanitization
                       │
                       ▼
              Authentication
                       │
                       ▼
              Authorization
                       │
                       ▼
             Business Logic
                       │
                       ▼
                    Database
```

Si una capa falla, otras capas todavía pueden limitar el daño.

## 🧠 IDEA CLAVE

La regla más importante que debes llevarte de este documento es:

> **El backend nunca debe confiar en el frontend.**

Si Angular dice:

```json id="h8z5r2"
{
  "role": "admin"
}
```

Express **no debe asumir que el usuario es administrador**.

Debe obtener y verificar esa información de una fuente confiable:

```text id="2q5m9c"
Request
   ↓
Authentication
   ↓
Identificar usuario
   ↓
Obtener sus permisos/roles
   ↓
Authorization
   ↓
¿Está permitido?
```

Lo mismo ocurre con:

| No confiar en                     |   |
| --------------------------------- | - |
| Validaciones del frontend         | ❌ |
| Roles enviados por el frontend    | ❌ |
| Precios enviados por el frontend  | ❌ |
| Permisos enviados por el frontend | ❌ |
| Tokens manipulados                | ❌ |
| Datos del usuario                 | ❌ |

El frontend mejora la **experiencia del usuario**.

El backend garantiza la **seguridad real de la aplicación**.
