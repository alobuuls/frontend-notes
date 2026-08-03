# 🔐 JSON Web Tokens (JWT)

> Guía sobre los principales aspectos de **seguridad** al trabajar con **JWT (JSON Web Token)**. Más allá del propio token, una implementación segura depende de cómo se almacenan, transmiten, renuevan y protegen frente a distintos tipos de ataques.

---

# 📋 Índice

- [🔐 JSON Web Tokens (JWT)](#-json-web-tokens-jwt)
- [📋 Índice](#-índice)
- [🛡️ Seguridad en autenticación](#️-seguridad-en-autenticación)
- [1️⃣ ¿Dónde guardar el JWT?](#1️⃣-dónde-guardar-el-jwt)
- [💾 localStorage](#-localstorage)
  - [📌 Ejemplo](#-ejemplo)
  - [✅ Características](#-características)
    - [📌 Uso típico](#-uso-típico)
- [🗂️ sessionStorage](#️-sessionstorage)
  - [📌 Ejemplo](#-ejemplo-1)
  - [✅ Características](#-características-1)
    - [📌 Uso típico](#-uso-típico-1)
- [🍪 Cookies](#-cookies)
- [🔒 HttpOnly](#-httponly)
  - [📌 Ventaja principal](#-ventaja-principal)
    - [📌 Importante](#-importante)
- [🔐 Secure](#-secure)
  - [📌 Ventajas](#-ventajas)
- [🛡️ SameSite](#️-samesite)
  - [🔒 Strict](#-strict)
  - [⚖️ Lax](#️-lax)
  - [🌍 None](#-none)
    - [📌 Objetivo principal](#-objetivo-principal)
- [2️⃣ XSS](#2️⃣-xss)
  - [🚨 ¿Por qué afecta a JWT?](#-por-qué-afecta-a-jwt)
  - [🛡️ Medidas de protección](#️-medidas-de-protección)
- [3️⃣ CSRF](#3️⃣-csrf)
  - [📌 ¿Por qué afecta especialmente a las cookies?](#-por-qué-afecta-especialmente-a-las-cookies)
  - [🧠 Diferencia entre XSS y CSRF](#-diferencia-entre-xss-y-csrf)
    - [XSS](#xss)
    - [CSRF](#csrf)
- [4️⃣ CORS](#4️⃣-cors)
  - [📌 Importante](#-importante-1)
- [5️⃣ HTTPS](#5️⃣-https)
  - [📌 HTTPS protege](#-https-protege)
- [6️⃣ Content Security Policy (CSP)](#6️⃣-content-security-policy-csp)
  - [📌 Objetivo principal](#-objetivo-principal-1)
- [7️⃣ Revocación de tokens](#7️⃣-revocación-de-tokens)
  - [📌 Estrategias habituales](#-estrategias-habituales)
- [8️⃣ Blacklist](#8️⃣-blacklist)
  - [✅ Ventaja](#-ventaja)
  - [❌ Desventaja](#-desventaja)
- [9️⃣ Refresh Token Rotation](#9️⃣-refresh-token-rotation)
  - [🛡️ ¿Por qué mejora la seguridad?](#️-por-qué-mejora-la-seguridad)
- [📋 Resumen general](#-resumen-general)
- [🏆 Idea clave para recordar](#-idea-clave-para-recordar)

---

# 🛡️ Seguridad en autenticación

La seguridad en un sistema de autenticación **no depende únicamente de utilizar JWT**.

Un JWT puede estar correctamente firmado y, aun así, existir vulnerabilidades si:

- ❌ Se almacena de forma insegura.
- ❌ Se transmite sin HTTPS.
- ❌ La aplicación es vulnerable a XSS.
- ❌ No se protege contra CSRF cuando corresponde.
- ❌ Las cookies están mal configuradas.
- ❌ No se controla correctamente la expiración y renovación de los tokens.

👉 Trabajar con JWT implica proteger tanto los **tokens** como toda la **comunicación entre el frontend y el backend**.

---

# 1️⃣ ¿Dónde guardar el JWT?

Una de las decisiones más importantes al implementar autenticación es determinar dónde almacenar los tokens.

Las opciones más habituales son:

- 💾 `localStorage`
- 🗂️ `sessionStorage`
- 🍪 Cookies
- 🔒 Cookies `HttpOnly`

Cada alternativa presenta ventajas y riesgos diferentes.

---

# 💾 localStorage

`localStorage` permite almacenar información de forma persistente en el navegador.

## 📌 Ejemplo

```ts
localStorage.setItem('token', jwt);
```

Recuperarlo:

```ts
const token = localStorage.getItem('token');
```

---

## ✅ Características

- ✔ El token permanece incluso después de cerrar el navegador.
- ✔ Muy sencillo de utilizar desde JavaScript.
- ❌ JavaScript puede acceder al contenido.
- ❌ Un ataque XSS podría intentar robar el token.

### 📌 Uso típico

Aplicaciones SPA donde el frontend gestiona directamente el JWT.

> [!WARNING]
> Guardar un JWT en `localStorage` no implica automáticamente una vulnerabilidad. Sin embargo, si la aplicación sufre un ataque XSS, el impacto puede ser mayor porque el token es accesible desde JavaScript.

---

# 🗂️ sessionStorage

Funciona de forma similar a `localStorage`, pero la información queda ligada a la sesión de la pestaña.

## 📌 Ejemplo

```ts
sessionStorage.setItem('token', jwt);
```

Recuperarlo:

```ts
const token = sessionStorage.getItem('token');
```

---

## ✅ Características

- ✔ El token desaparece al cerrar la pestaña.
- ✔ Fácil de utilizar.
- ❌ JavaScript puede acceder al contenido.
- ❌ Sigue existiendo riesgo frente a XSS.

### 📌 Uso típico

Cuando se desea que la sesión dure únicamente mientras la pestaña permanezca abierta.

---

# 🍪 Cookies

Las cookies permiten almacenar información asociada al dominio.

Ejemplo conceptual:

```text
Cookie
    ↓
token=abc123
```

Las cookies pueden configurarse mediante distintos atributos de seguridad.

```text
HttpOnly
Secure
SameSite
```

Estos atributos resultan especialmente importantes cuando almacenan información de autenticación.

---

# 🔒 HttpOnly

Una cookie marcada como `HttpOnly` **no puede ser leída directamente mediante JavaScript**.

Ejemplo:

```text
Set-Cookie: token=abc123; HttpOnly
```

---

## 📌 Ventaja principal

Aunque JavaScript ejecute:

```ts
document.cookie
```

La cookie marcada como `HttpOnly` no será accesible.

Esto ayuda a reducir el riesgo de robo directo del token mediante XSS.

### 📌 Importante

`HttpOnly` **no evita un ataque XSS**.

Simplemente impide que JavaScript pueda leer esa cookie directamente.

> [!TIP]
> `HttpOnly` es especialmente recomendable cuando el frontend no necesita manipular directamente el token.

---

# 🔐 Secure

El atributo `Secure` obliga a que la cookie solo se envíe mediante conexiones HTTPS.

Ejemplo:

```text
Set-Cookie: token=abc123; Secure
```

---

## 📌 Ventajas

- ✔ Evita enviar cookies mediante HTTP.
- ✔ Protege la información durante el transporte.

> [!IMPORTANT]
> `Secure` no cifra la cookie. Lo que hace es obligar a utilizar HTTPS.

---

# 🛡️ SameSite

El atributo `SameSite` controla cuándo el navegador envía una cookie en solicitudes relacionadas con otros sitios.

Valores habituales:

```text
SameSite=Strict
SameSite=Lax
SameSite=None
```

---

## 🔒 Strict

Máximo nivel de restricción.

La cookie únicamente se envía en contextos considerados del mismo sitio.

---

## ⚖️ Lax

Equilibrio entre seguridad y compatibilidad.

Es el valor más habitual para muchas aplicaciones.

---

## 🌍 None

Permite enviar cookies en solicitudes cross-site.

Requiere obligatoriamente:

```text
Secure
```

### 📌 Objetivo principal

Reducir el riesgo de ataques CSRF.

---

# 2️⃣ XSS

XSS significa:

> **Cross-Site Scripting**

Consiste en ejecutar código JavaScript malicioso dentro del contexto de una aplicación web.

Ejemplo conceptual:

```html
<script>
  // Código malicioso
</script>
```

Si una aplicación permite insertar contenido no confiable sin protegerlo adecuadamente, un atacante podría ejecutar código en el navegador de otros usuarios.

---

## 🚨 ¿Por qué afecta a JWT?

Si el token está almacenado en:

```text
localStorage
```

o

```text
sessionStorage
```

JavaScript puede acceder a él.

En consecuencia, un ataque XSS podría intentar robar ese token.

---

## 🛡️ Medidas de protección

- ✔ Sanitizar correctamente el contenido.
- ✔ Evitar insertar HTML arbitrario.
- ✔ Utilizar frameworks con mecanismos de *escaping*.
- ✔ Implementar una **Content Security Policy (CSP)**.
- ✔ Evitar almacenar información sensible donde JavaScript no la necesite.

---

# 3️⃣ CSRF

CSRF significa:

> **Cross-Site Request Forgery**

Es un ataque en el que un sitio malicioso intenta provocar que el navegador de una víctima realice acciones sobre otro sitio donde ya está autenticada.

Ejemplo:

```text
Usuario autenticado
        ↓
Visita un sitio malicioso
        ↓
El navegador realiza una petición
        ↓
El servidor recibe automáticamente la cookie
```

---

## 📌 ¿Por qué afecta especialmente a las cookies?

Porque el navegador las envía automáticamente en muchas solicitudes.

Por ello, cuando se utilizan cookies para autenticación, suelen combinarse medidas como:

- `SameSite`
- Tokens CSRF
- Validación del origen (`Origin`)
- Validación del encabezado `Referer`
- Protección implementada en el Backend

---

## 🧠 Diferencia entre XSS y CSRF

### XSS

```text
El atacante ejecuta JavaScript dentro de tu aplicación.
```

### CSRF

```text
El atacante intenta provocar peticiones no deseadas
desde el navegador de la víctima.
```

---

# 4️⃣ CORS

CORS significa:

> **Cross-Origin Resource Sharing**

Es un mecanismo de seguridad implementado por los navegadores para controlar qué orígenes pueden realizar determinadas solicitudes a un servidor.

Ejemplo:

```text
Frontend
http://localhost:4200

        ↓

Backend
http://localhost:3000
```

Al pertenecer a distintos orígenes, el servidor debe indicar cuáles están autorizados.

Ejemplo conceptual:

```http
Access-Control-Allow-Origin:
http://localhost:4200
```

---

## 📌 Importante

CORS:

- ✔ Es una política aplicada por el navegador.
- ✔ Controla solicitudes entre distintos orígenes.
- ❌ No autentica usuarios.
- ❌ No protege directamente un JWT.

> [!IMPORTANT]
> CORS y autenticación son conceptos distintos. Es habitual utilizarlos conjuntamente, pero resuelven problemas diferentes.

---

# 5️⃣ HTTPS

HTTPS cifra la comunicación entre el cliente y el servidor.

```text
Frontend
    ↓
🔒 HTTPS
    ↓
Backend
```

Esto protege los datos durante su transmisión.

Ejemplo:

```text
Usuario
      ↓
Credenciales
      ↓
JWT
      ↓
HTTPS
      ↓
Servidor
```

---

## 📌 HTTPS protege

- ✔ Credenciales.
- ✔ Tokens.
- ✔ Cookies durante el transporte.
- ✔ Información intercambiada entre cliente y servidor.

> [!IMPORTANT]
> Un JWT firmado **no sustituye** el uso de HTTPS. Ambos resuelven problemas completamente diferentes.

---

# 6️⃣ Content Security Policy (CSP)

CSP significa:

> **Content Security Policy**

Es una política que permite controlar qué recursos puede cargar y ejecutar una página web.

Puede restringir:

- Scripts
- Estilos
- Imágenes
- Fuentes
- Conexiones
- Frames

Ejemplo conceptual:

```http
Content-Security-Policy:
script-src 'self'
```

Esto indica que únicamente pueden ejecutarse scripts provenientes del mismo origen.

---

## 📌 Objetivo principal

Reducir el impacto de ataques como XSS.

> [!TIP]
> CSP es una capa adicional de defensa. No sustituye una correcta validación, sanitización o diseño seguro de la aplicación.

---

# 7️⃣ Revocación de tokens

Una característica importante de JWT es que un token sigue siendo válido hasta que expire.

Esto puede provocar situaciones como:

```text
JWT válido
     ↓
Usuario hace logout
     ↓
El JWT sigue sin expirar
     ↓
El servidor todavía podría aceptarlo
```

Por ello algunos sistemas implementan mecanismos para invalidar tokens antes de su expiración.

A esto se le conoce como:

> **Token Revocation**

---

## 📌 Estrategias habituales

- Mantener una lista de tokens revocados.
- Invalidar sesiones en el backend.
- Utilizar Access Tokens de corta duración.
- Revocar Refresh Tokens.
- Implementar rotación de Refresh Tokens.

---

# 8️⃣ Blacklist

Una **blacklist** es una lista de tokens que ya no deben considerarse válidos.

Ejemplo:

```text
Blacklist

JWT_ABC123
JWT_XYZ789
JWT_456DEF
```

Cuando llega una petición:

```text
Cliente
      ↓
JWT
      ↓
Backend
      ↓
¿Está en la blacklist?
      ↓
Sí → ❌ Rechazar
No → ✅ Continuar
```

---

## ✅ Ventaja

Permite invalidar un token antes de que expire.

---

## ❌ Desventaja

Obliga al servidor a mantener información sobre los tokens revocados.

Esto reduce una de las principales ventajas de JWT:

> Ser un sistema **stateless**.

Por ello, muchos sistemas únicamente revocan Refresh Tokens y utilizan Access Tokens de corta duración.

---

# 9️⃣ Refresh Token Rotation

La rotación de Refresh Tokens consiste en reemplazar el Refresh Token cada vez que se utiliza.

Flujo:

```text
Refresh Token A
       ↓
Solicita renovación
       ↓
Backend valida
       ↓
❌ Refresh Token A invalidado
       ↓
✅ Se genera Refresh Token B
```

A partir de ese momento únicamente será válido:

```text
Refresh Token B
```

---

## 🛡️ ¿Por qué mejora la seguridad?

Si un atacante roba un Refresh Token:

```text
Usuario
      ↓
Refresh Token A
      ↓
Obtiene nuevos tokens
      ↓
Refresh Token A queda invalidado
      ↓
Nuevo Refresh Token B
```

Si posteriormente alguien intenta reutilizar el token anterior:

```text
Refresh Token A
       ↓
Ya fue utilizado
       ↓
🚨 Posible reutilización maliciosa
```

El Backend puede detectar este comportamiento y actuar, por ejemplo:

- Invalidando toda la sesión.
- Revocando la familia completa de Refresh Tokens.
- Obligando al usuario a autenticarse nuevamente.

> [!IMPORTANT]
> La rotación de Refresh Tokens suele combinarse con expiración, revocación y detección de reutilización para ofrecer un nivel de seguridad superior.

---

# 📋 Resumen general

| Concepto | ¿Qué protege o controla? |
|----------|---------------------------|
| 💾 `localStorage` | Almacenamiento persistente accesible por JavaScript |
| 🗂️ `sessionStorage` | Almacenamiento temporal accesible por JavaScript |
| 🍪 Cookies | Almacenamiento gestionado por el navegador |
| 🔒 `HttpOnly` | Evita que JavaScript lea directamente la cookie |
| 🔐 `Secure` | Obliga a enviar la cookie mediante HTTPS |
| 🛡️ `SameSite` | Controla el envío de cookies en solicitudes cross-site |
| 💥 XSS | Ejecución de JavaScript malicioso |
| 🔄 CSRF | Peticiones no deseadas desde el navegador |
| 🌐 CORS | Control de solicitudes entre distintos orígenes |
| 🔒 HTTPS | Cifra la comunicación entre cliente y servidor |
| 🛡️ CSP | Restringe los recursos que puede ejecutar la aplicación |
| 🚫 Revocación | Invalida tokens antes de su expiración |
| 📝 Blacklist | Lista de tokens que deben rechazarse |
| 🔄 Refresh Token Rotation | Reemplaza Refresh Tokens para reducir el riesgo de reutilización |

---

# 🏆 Idea clave para recordar

La seguridad de JWT **no consiste únicamente en firmar un token**.

Una arquitectura segura debe contemplar todo el ciclo de vida de la autenticación:

```text
🔐 Autenticación
      ↓
🎟️ Generación del JWT
      ↓
🗃️ Almacenamiento seguro
      ↓
🔒 HTTPS
      ↓
🌐 CORS correctamente configurado
      ↓
🛡️ Protección contra XSS
      ↓
🔄 Protección contra CSRF
      ↓
⏳ Expiración del Access Token
      ↓
🔄 Refresh Token Rotation
      ↓
🚫 Revocación cuando sea necesaria
```

> **JWT es únicamente una pieza del sistema de autenticación. La seguridad real depende de cómo se almacenan, transmiten, validan, expiran y revocan los tokens, así como de la protección integral de la aplicación frente a amenazas comunes como XSS y CSRF.**