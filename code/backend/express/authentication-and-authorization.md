# 🔐 AUTHENTICATION & AUTHORIZATION

La **autenticación y autorización** permiten controlar **quién puede acceder a una API y qué puede hacer dentro de ella**.

En Express normalmente se implementan mediante **middleware**, tokens, sesiones, roles y permisos.

---

# 📑 ÍNDICE — AUTHENTICATION & AUTHORIZATION

- [🔐 AUTHENTICATION \& AUTHORIZATION](#-authentication--authorization)
- [📑 ÍNDICE — AUTHENTICATION \& AUTHORIZATION](#-índice--authentication--authorization)
- [1️⃣ 🪪 AUTHENTICATION](#1️⃣--authentication)
- [2️⃣ 🛡️ AUTHORIZATION](#2️⃣-️-authorization)
- [3️⃣ 🧠 AUTHENTICATION VS AUTHORIZATION](#3️⃣--authentication-vs-authorization)
- [4️⃣ 🔑 LOGIN](#4️⃣--login)
- [5️⃣ 🚪 LOGOUT](#5️⃣--logout)
    - [Con sesiones](#con-sesiones)
    - [Con JWT](#con-jwt)
- [6️⃣ 🗃️ SESSIONS](#6️⃣-️-sessions)
- [7️⃣ 🎟️ TOKENS](#7️⃣-️-tokens)
- [8️⃣ 🔐 JWT](#8️⃣--jwt)
- [9️⃣ 🎟️ ACCESS TOKEN](#9️⃣-️-access-token)
- [🔟 🔄 REFRESH TOKEN](#--refresh-token)
- [1️⃣1️⃣ 📋 AUTHORIZATION HEADER](#1️⃣1️⃣--authorization-header)
- [1️⃣2️⃣ 🪪 BEARER TOKEN](#1️⃣2️⃣--bearer-token)
- [1️⃣3️⃣ 🧩 AUTHENTICATION MIDDLEWARE](#1️⃣3️⃣--authentication-middleware)
- [1️⃣4️⃣ 🛡️ PROTECTED ROUTES](#1️⃣4️⃣-️-protected-routes)
- [1️⃣5️⃣ 👤 ROLES](#1️⃣5️⃣--roles)
- [1️⃣6️⃣ 🔑 PERMISSIONS](#1️⃣6️⃣--permissions)
- [1️⃣7️⃣ 🏷️ ROLE-BASED ACCESS CONTROL](#1️⃣7️⃣-️-role-based-access-control)
    - [🧠 Role vs Permission](#-role-vs-permission)
- [🏗️ FLUJO COMPLETO EN EXPRESS](#️-flujo-completo-en-express)
- [🅰️ ANGULAR → JWT → EXPRESS](#️-angular--jwt--express)
    - [🧠 IDEA CLAVE](#-idea-clave)

---

# 1️⃣ 🪪 AUTHENTICATION

La **autenticación** responde:

> **¿Quién eres?**

El servidor verifica la identidad del usuario.

Por ejemplo:

```text
Email + Password
       ↓
   Backend
       ↓
¿Credenciales válidas?
   ┌────┴────┐
  Sí         No
   ↓          ↓
Usuario      401
autenticado
```

Si las credenciales son correctas, el servidor puede crear una sesión o entregar un token.

---

# 2️⃣ 🛡️ AUTHORIZATION

La **autorización** responde:

> **¿Qué puedes hacer?**

Primero el usuario debe estar autenticado.

Después el servidor comprueba sus permisos.

```text
Usuario autenticado
       ↓
¿Tiene permiso?
   ┌───┴───┐
  Sí       No
   ↓        ↓
Acceso     403
```

Por ejemplo:

```text
Admin
→ eliminar usuarios ✅

User
→ eliminar usuarios ❌
```

---

# 3️⃣ 🧠 AUTHENTICATION VS AUTHORIZATION

| Concepto          | Pregunta           | Ejemplo                   |
| ----------------- | ------------------ | ------------------------- |
| 🔐 Authentication | ¿Quién eres?       | Login                     |
| 🛡️ Authorization | ¿Qué puedes hacer? | ¿Puede eliminar usuarios? |

El orden normalmente es:

```text
Authentication
      ↓
¿Quién eres?
      ↓
Authorization
      ↓
¿Qué puedes hacer?
```

> [!IMPORTANT]
> **No puedes determinar correctamente qué puede hacer un usuario si primero no sabes quién es.**

---

# 4️⃣ 🔑 LOGIN

El **login** es el proceso mediante el cual un usuario demuestra su identidad.

Ejemplo:

```http
POST /auth/login
```

```json
{
  "email": "ana@example.com",
  "password": "123456"
}
```

El backend:

```text
Request
   ↓
Buscar usuario
   ↓
Verificar password
   ↓
¿Correcto?
 ┌────┴────┐
Sí         No
↓           ↓
Token      401
```

Si es correcto, puede devolver:

```json
{
  "accessToken": "..."
}
```

---

# 5️⃣ 🚪 LOGOUT

El **logout** termina el acceso autenticado del usuario.

La implementación depende del mecanismo utilizado.

### Con sesiones

El servidor puede destruir la sesión:

```text
Logout
  ↓
Destroy Session
```

### Con JWT

Puede implicar:

```text
Logout
   ↓
Eliminar token del cliente
```

Si existen refresh tokens, también puede ser necesario **revocarlos**.

> [!NOTE]
> Un JWT access token ya emitido no desaparece mágicamente porque el usuario haga logout. Su comportamiento depende de cómo esté diseñada la estrategia de revocación y expiración.

---

# 6️⃣ 🗃️ SESSIONS

Una **session** permite mantener el estado de autenticación del usuario entre diferentes requests.

Conceptualmente:

```text
Login
  ↓
Servidor crea Session
  ↓
Session ID
  ↓
Cliente
  ↓
Request
  ↓
Servidor busca Session
```

El servidor mantiene la información de la sesión.

Por ejemplo:

```text
Session ID
    ↓
User ID: 123
Role: admin
```

Las sesiones son una alternativa a utilizar tokens como mecanismo principal de autenticación.

---

# 7️⃣ 🎟️ TOKENS

Un **token** es una credencial que el cliente puede presentar al servidor para demostrar que tiene autorización para acceder a determinados recursos.

Flujo:

```text
Login
 ↓
Servidor
 ↓
Token
 ↓
Cliente
 ↓
Request
 ↓
Token
 ↓
Servidor
```

Existen diferentes tipos y estrategias de tokens.

Uno de los formatos más conocidos es **JWT**.

---

# 8️⃣ 🔐 JWT

**JWT (JSON Web Token)** es un formato de token que puede utilizarse para transportar información relacionada con la autenticación.

En Express normalmente aparece dentro del flujo:

```text
Login
  ↓
JWT generado
  ↓
Cliente
  ↓
Request
  ↓
Express Middleware
  ↓
JWT validado
```

Aquí no necesitas repetir toda la teoría de JWT.

Tu documento de JWT contiene:

```text
📁 JSON-WEB-TOKENS
```

Este documento se concentra en:

> **¿Cómo utilizo JWT dentro de Express?**

---

# 9️⃣ 🎟️ ACCESS TOKEN

El **access token** representa la credencial utilizada para acceder a recursos protegidos.

Por ejemplo:

```http
GET /users
Authorization: Bearer <access-token>
```

El servidor recibe el token y lo valida.

```text
Request
   ↓
Access Token
   ↓
Validación
   ↓
Usuario autenticado
```

Normalmente los access tokens tienen una duración relativamente corta.

---

# 🔟 🔄 REFRESH TOKEN

Un **refresh token** permite obtener un nuevo access token sin obligar al usuario a introducir nuevamente sus credenciales.

Flujo:

```text
Access Token
      ↓
   Expira
      ↓
Refresh Token
      ↓
Backend
      ↓
Nuevo Access Token
```

Esto permite mantener una sesión durante más tiempo mientras se mantienen access tokens de vida corta.

> [!NOTE]
> El refresh token tiene implicaciones de seguridad importantes y debe protegerse cuidadosamente.

---

# 1️⃣1️⃣ 📋 AUTHORIZATION HEADER

Una forma habitual de enviar un access token es mediante el header:

```http
Authorization: Bearer <token>
```

En Express puede accederse mediante:

```js
req.headers.authorization
```

El servidor puede obtener:

```text
Authorization
       ↓
Bearer <token>
       ↓
Extraer token
       ↓
Validarlo
```

---

# 1️⃣2️⃣ 🪪 BEARER TOKEN

`Bearer` indica que quien **posee/presenta el token** puede utilizarlo como credencial.

Por ejemplo:

```http
Authorization: Bearer eyJ...
```

La estructura es:

```text
Authorization
      ↓
Bearer
      ↓
Token
```

En una API protegida, el cliente normalmente incluye este header en cada request que requiere autenticación.

---

# 1️⃣3️⃣ 🧩 AUTHENTICATION MIDDLEWARE

El **Authentication Middleware** comprueba si la request contiene credenciales válidas.

Por ejemplo:

```text
Request
   ↓
Authentication Middleware
   ↓
¿Token válido?
 ┌────┴────┐
Sí         No
↓           ↓
next()     401
↓
Controller
```

Su responsabilidad es determinar:

> **¿Esta request pertenece a un usuario autenticado?**

No debería encargarse de toda la lógica de negocio.

---

# 1️⃣4️⃣ 🛡️ PROTECTED ROUTES

Una **Protected Route** requiere autenticación para poder acceder.

Por ejemplo:

```text
GET /users
```

podría ser pública:

```text
GET /users
      ↓
Controller
```

Mientras que:

```text
DELETE /users/:id
```

podría estar protegida:

```text
DELETE /users/:id
          ↓
Authentication Middleware
          ↓
Authorization Middleware
          ↓
Controller
```

---

# 1️⃣5️⃣ 👤 ROLES

Un **role** representa una categoría o nivel de acceso de un usuario.

Ejemplo:

```text
admin
user
moderator
```

Un usuario podría tener:

```json
{
  "id": 123,
  "role": "admin"
}
```

El role puede utilizarse posteriormente para determinar qué acciones están permitidas.

---

# 1️⃣6️⃣ 🔑 PERMISSIONS

Una **permission** representa una acción concreta que un usuario puede realizar.

Por ejemplo:

```text
users:read
users:create
users:update
users:delete
```

Esto permite un control más específico que simplemente tener un role.

Por ejemplo:

```text
Admin
├── users:read
├── users:create
├── users:update
└── users:delete
```

---

# 1️⃣7️⃣ 🏷️ ROLE-BASED ACCESS CONTROL

**RBAC (Role-Based Access Control)** es un modelo donde los permisos se asignan a roles.

Por ejemplo:

```text
Admin
 ├── create users
 ├── read users
 ├── update users
 └── delete users

User
 └── read users
```

El flujo sería:

```text
Request
   ↓
Authentication
   ↓
¿Quién eres?
   ↓
User
   ↓
Role
   ↓
¿Tiene permiso?
   ↓
Authorization
   ↓
Controller
```

### 🧠 Role vs Permission

```text
Role
 ↓
"admin"

Permission
 ↓
"users:delete"
```

El role normalmente agrupa múltiples permissions.

---

# 🏗️ FLUJO COMPLETO EN EXPRESS

Una arquitectura típica podría verse así:

```text
                  Request
                     ↓
            Authentication
              Middleware
                     ↓
              ¿Quién eres?
                     ↓
                  User
                     ↓
             Authorization
              Middleware
                     ↓
             ¿Qué puede hacer?
                     ↓
                Permission
                     ↓
                Controller
                     ↓
                 Service
                     ↓
               Repository
                     ↓
                Database
```

Por ejemplo:

```text
DELETE /users/123
        ↓
Authorization Header
        ↓
Bearer Token
        ↓
Authentication Middleware
        ↓
JWT válido
        ↓
Usuario identificado
        ↓
Authorization Middleware
        ↓
¿Tiene users:delete?
    ┌────┴────┐
   Sí         No
    ↓          ↓
Controller    403
```

---

# 🅰️ ANGULAR → JWT → EXPRESS

En tu caso, puedes conectar todo lo que ya estudiaste:

```text
Angular
   ↓
HttpInterceptor
   ↓
Authorization: Bearer JWT
   ↓
Express
   ↓
Authentication Middleware
   ↓
Usuario identificado
   ↓
Authorization Middleware
   ↓
Protected Route
   ↓
Controller
```

### 🧠 IDEA CLAVE

La separación fundamental que debes recordar es:

```text
🔐 Authentication
        ↓
   ¿Quién eres?

        ↓

🛡️ Authorization
        ↓
   ¿Qué puedes hacer?
```

Y en Express:

```text
Request
   ↓
Authentication Middleware
   ↓
Authorization Middleware
   ↓
Protected Route
   ↓
Controller
```

**JWT es una herramienta dentro de este sistema; autenticación y autorización son conceptos mucho más amplios.**
