# 🌍 CORS

**CORS (Cross-Origin Resource Sharing)** es un mecanismo de seguridad del navegador que controla si una aplicación web puede realizar requests hacia un servidor ubicado en un **origen diferente**.

Es especialmente importante cuando tienes:

```text
Angular
localhost:4200
      ↓
Express
localhost:3000
```

Porque aunque ambos estén en `localhost`, **los puertos son diferentes**, por lo que son origins diferentes.


## 📑 ÍNDICE — CORS

- [🌍 CORS](#-cors)
  - [📑 ÍNDICE — CORS](#-índice--cors)
  - [1️⃣ 🔒 SAME-ORIGIN POLICY](#1️⃣--same-origin-policy)
  - [2️⃣ 🌐 ORIGIN](#2️⃣--origin)
    - [Ejemplos](#ejemplos)
  - [3️⃣ 🔄 CORS](#3️⃣--cors)
  - [4️⃣ 📋 CORS HEADERS](#4️⃣--cors-headers)
  - [5️⃣ 🌐 `ACCESS-CONTROL-ALLOW-ORIGIN`](#5️⃣--access-control-allow-origin)
  - [6️⃣ 🛣️ `ACCESS-CONTROL-ALLOW-METHODS`](#6️⃣-️-access-control-allow-methods)
  - [7️⃣ 📋 `ACCESS-CONTROL-ALLOW-HEADERS`](#7️⃣--access-control-allow-headers)
  - [8️⃣ ✈️ PREFLIGHT REQUESTS](#8️⃣-️-preflight-requests)
    - [Flujo](#flujo)
  - [9️⃣ ⚙️ OPTIONS](#9️⃣-️-options)
  - [🔟 🍪 CREDENTIALS](#--credentials)
  - [1️⃣1️⃣ 🍪 COOKIES + CORS](#1️⃣1️⃣--cookies--cors)
  - [1️⃣2️⃣ 🛠️ CORS CONFIGURATION IN EXPRESS](#1️⃣2️⃣-️-cors-configuration-in-express)
  - [🔄 FLUJO COMPLETO](#-flujo-completo)
  - [🧠 IDEA CLAVE](#-idea-clave)
    - [🎯 Qué debes recordar](#-qué-debes-recordar)

## 1️⃣ 🔒 SAME-ORIGIN POLICY

La **Same-Origin Policy** es una regla de seguridad aplicada por los navegadores.

Un navegador restringe que una página web pueda interactuar libremente con recursos de otro **origin**.

Para que dos URLs tengan el mismo origin deben coincidir:

```text
Protocol
+
Host
+
Port
```

Por ejemplo:

```text
http://localhost:4200
http://localhost:4200/users
```

✅ Mismo origin.

Pero:

```text
http://localhost:4200
http://localhost:3000
```

❌ Diferente origin.

El puerto cambió.

## 2️⃣ 🌐 ORIGIN

Un **origin** está compuesto por:

```text
Protocol + Host + Port
```

Por ejemplo:

```text
https://example.com:443
```

Tenemos:

```text
https
  ↓
Protocol

example.com
  ↓
Host

443
  ↓
Port
```

Si cualquiera de estos elementos cambia, tenemos otro origin.

### Ejemplos

| URLs                                               | Resultado            | Motivo              |
| -------------------------------------------------- | -------------------- | ------------------- |
| `http://example.com`<br>`https://example.com`      | ❌ Diferentes origins | Cambia el protocolo |
| `https://example.com`<br>`https://api.example.com` | ❌ Diferentes origins | Cambia el host      |
| `http://localhost:4200`<br>`http://localhost:3000` | ❌ Diferentes origins | Cambia el puerto    |

## 3️⃣ 🔄 CORS

**CORS** permite que un servidor indique qué otros origins están autorizados a realizar requests desde el navegador.

Conceptualmente:

```text
Angular
localhost:4200
      │
      │ Request
      ▼
Express
localhost:3000
      │
      ▼
¿Este origin está permitido?
      │
   ┌──┴──┐
  Sí     No
   ↓      ↓
Response  Bloqueo
```

> [!IMPORTANT]
> CORS es principalmente una **restricción aplicada por el navegador**. No es un mecanismo de autenticación ni reemplaza la seguridad del backend.

## 4️⃣ 📋 CORS HEADERS

CORS utiliza **HTTP headers** para comunicar las reglas entre navegador y servidor.

Algunos de los más importantes son:

```text
Access-Control-Allow-Origin
Access-Control-Allow-Methods
Access-Control-Allow-Headers
Access-Control-Allow-Credentials
```

Estos headers permiten al navegador determinar si la request puede continuar.

## 5️⃣ 🌐 `ACCESS-CONTROL-ALLOW-ORIGIN`

Indica qué origin puede acceder al recurso.

Por ejemplo:

```http
Access-Control-Allow-Origin: http://localhost:4200
```

Significa:

```text
localhost:4200
       ↓
       ✅ Permitido
```

Un servidor puede permitir un origin específico:

```http
Access-Control-Allow-Origin: https://myapp.com
```

También existe:

```http
Access-Control-Allow-Origin: *
```

que permite cualquier origin en los casos donde esa configuración sea compatible con la request.

> [!WARNING]
> `*` no debe utilizarse indiscriminadamente, especialmente cuando trabajas con credenciales.

## 6️⃣ 🛣️ `ACCESS-CONTROL-ALLOW-METHODS`

Indica qué métodos HTTP están permitidos para requests cross-origin.

Por ejemplo:

```http
Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE
```

Esto indica:

| Método   | Permitido |
| -------- | --------- |
| `GET`    | ✅         |
| `POST`   | ✅         |
| `PUT`    | ✅         |
| `PATCH`  | ✅         |
| `DELETE` | ✅         |

## 7️⃣ 📋 `ACCESS-CONTROL-ALLOW-HEADERS`

Indica qué headers puede enviar el cliente.

Por ejemplo:

```http
Access-Control-Allow-Headers: Content-Type, Authorization
```

Esto es especialmente importante cuando utilizas JWT:

```http
Authorization: Bearer <token>
```

El servidor debe permitir ese header si la request cross-origin necesita enviarlo.

## 8️⃣ ✈️ PREFLIGHT REQUESTS

Una **preflight request** es una request que el navegador realiza **antes de la request real** para comprobar si el servidor permite determinadas operaciones cross-origin.

Normalmente utiliza:

```http
OPTIONS
```

### Flujo

```text
Angular
   │
   │ OPTIONS
   ▼
Express
   │
   │ ¿Está permitido?
   ▼
Respuesta CORS
   │
   │
   ▼
Request real
   │
   │ POST /users
   ▼
Express
```

No todas las requests necesitan preflight.

Las requests consideradas **simple requests** pueden enviarse directamente si cumplen determinadas condiciones.

## 9️⃣ ⚙️ OPTIONS

`OPTIONS` es un método HTTP que permite consultar qué opciones están disponibles para un recurso.

En CORS suele utilizarse para realizar la **preflight request**.

Por ejemplo:

```http
OPTIONS /users
```

El navegador puede preguntar:

```text
¿Puedo hacer POST?
¿Puedo enviar Authorization?
¿Este origin está permitido?
```

El servidor responde utilizando headers CORS.

## 🔟 🍪 CREDENTIALS

Las **credentials** son información que permite mantener la identidad o sesión del usuario.

Pueden incluir, entre otras cosas:

```text
Cookies
Authorization credentials
```

Cuando utilizas cookies cross-origin, el navegador necesita que tanto el cliente como el servidor estén configurados correctamente.

Por ejemplo, conceptualmente:

```text
Frontend
   ↓
credentials
   ↓
Request
   ↓
Backend
   ↓
CORS credentials
   ↓
Cookie
```

En aplicaciones web es importante distinguir:

```text
Origin permitido
        ≠
Credenciales permitidas
```

Son configuraciones diferentes.

## 1️⃣1️⃣ 🍪 COOKIES + CORS

Cuando utilizas autenticación basada en cookies, CORS requiere configuración adicional.

Por ejemplo:

```text
Angular
localhost:4200
      │
      │ Cookie
      ▼
Express
localhost:3000
```

El cliente debe indicar que quiere enviar credenciales y el servidor debe permitirlas.

Conceptualmente:

```text
Client
↓
credentials: include
↓
Server
↓
Access-Control-Allow-Credentials: true
```

Además, la cookie puede tener atributos de seguridad como:

```text
HttpOnly
Secure
SameSite
```

> [!IMPORTANT]
> CORS no protege por sí solo una cookie ni una sesión. La seguridad de las cookies depende también de su configuración y de la estrategia de autenticación.

## 1️⃣2️⃣ 🛠️ CORS CONFIGURATION IN EXPRESS

En Express normalmente puedes configurar CORS mediante middleware.

Una configuración conceptual sería:

```text
Express
   ↓
CORS Middleware
   ↓
Allowed Origins
   ↓
Allowed Methods
   ↓
Allowed Headers
   ↓
Credentials
```

Por ejemplo, puedes definir:

| Configuración   | Valor                           |
| --------------- | ------------------------------- |
| **Origin**      | `http://localhost:4200`         |
| **Methods**     | `GET, POST, PUT, PATCH, DELETE` |
| **Headers**     | `Content-Type, Authorization`   |
| **Credentials** | `true / false`                  |

La idea es que el backend declare explícitamente **qué clientes y qué operaciones están permitidos**.

## 🔄 FLUJO COMPLETO

En tu caso como frontend developer:

```text
        Angular
      localhost:4200
            │
            │ Request
            ▼
         Browser
            │
            │ ¿Cross-Origin?
            ▼
          CORS
            │
            ▼
         Express
      localhost:3000
            │
            │
       ┌────┴────┐
       │         │
    Permitido  Denegado
       │         │
       ▼         ▼
   Response   Browser
              bloquea
```

Si existe una preflight:

```text
Angular
   │
   │ OPTIONS
   ▼
Express
   │
   │ CORS validation
   ▼
Preflight Response
   │
   ▼
Angular
   │
   │ GET /users
   ▼
Express
   │
   ▼
Response
```

## 🧠 IDEA CLAVE

Cuando veas un error de CORS, piensa:

```text
Angular
localhost:4200
      ↓
      ❌ diferente origin
      ↓
Express
localhost:3000
```

El navegador está preguntando:

> **"¿El servidor permite que esta aplicación, desde este origin, haga esta request?"**

Y Express responde mediante los headers CORS correspondientes.

### 🎯 Qué debes recordar

```text
🌐 Origin
   ↓
Protocol + Host + Port

🔒 Same-Origin Policy
   ↓
Restricción del navegador

🔄 CORS
   ↓
Permite excepciones controladas

✈️ Preflight
   ↓
OPTIONS

📋 CORS Headers
   ↓
Allow-Origin
Allow-Methods
Allow-Headers
Allow-Credentials
```

> **CORS controla qué requests cross-origin permite el navegador; no sustituye autenticación, autorización ni validación del backend.**
