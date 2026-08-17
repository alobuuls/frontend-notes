# 🔐 13. AUTENTICACIÓN Y JWT

> 🚀 Esta sección es **muy importante en entrevistas de Angular/Frontend**, porque aquí no solo evalúan si sabes implementar login, sino si entiendes **qué responsabilidades pertenecen al frontend y cuáles al backend**.

---

## 📑 ÍNDICE 

- [🔐 13. AUTENTICACIÓN Y JWT](#-13-autenticación-y-jwt)
  - [📑 ÍNDICE](#-índice)
  - [🔹 ¿Qué es autenticación?](#-qué-es-autenticación)
    - [🗣️ Respuesta de entrevista](#️-respuesta-de-entrevista)
  - [🔹 ¿Qué es autorización?](#-qué-es-autorización)
    - [🗣️ Respuesta de entrevista](#️-respuesta-de-entrevista-1)
- [🔹 ¿Qué es JWT?](#-qué-es-jwt)
    - [🔄 Flujo típico](#-flujo-típico)
    - [🗣️ Respuesta de entrevista](#️-respuesta-de-entrevista-2)
- [🔹 ¿Qué contiene un JWT?](#-qué-contiene-un-jwt)
- [🔹 ¿Qué diferencia hay entre Header, Payload y Signature?](#-qué-diferencia-hay-entre-header-payload-y-signature)
  - [🟦 Header](#-header)
  - [🟨 Payload](#-payload)
  - [🟥 Signature](#-signature)
    - [🗣️ Respuesta de entrevista](#️-respuesta-de-entrevista-3)
- [🔹 ¿Dónde almacenarías un JWT?](#-dónde-almacenarías-un-jwt)
    - [🗣️ Respuesta de entrevista](#️-respuesta-de-entrevista-4)
- [🔹 ¿Qué riesgos tiene `localStorage`?](#-qué-riesgos-tiene-localstorage)
    - [⚠️ Flujo del ataque](#️-flujo-del-ataque)
    - [🗣️ Respuesta de entrevista](#️-respuesta-de-entrevista-5)
- [🔹 ¿Qué es un Refresh Token?](#-qué-es-un-refresh-token)
- [🔹 ¿Access Token vs Refresh Token?](#-access-token-vs-refresh-token)
    - [🗣️ Respuesta de entrevista](#️-respuesta-de-entrevista-6)
- [🔹 ¿Qué es un Auth Guard?](#-qué-es-un-auth-guard)
    - [🗣️ Respuesta de entrevista](#️-respuesta-de-entrevista-7)
- [🔹 ¿Qué hace un HTTP Interceptor?](#-qué-hace-un-http-interceptor)
    - [🧩 Puede utilizarse para:](#-puede-utilizarse-para)
    - [🗣️ Respuesta de entrevista](#️-respuesta-de-entrevista-8)
- [🔹 ¿Cómo protegerías rutas en Angular?](#-cómo-protegerías-rutas-en-angular)
    - [🔄 Flujo](#-flujo)
    - [🗣️ Respuesta de entrevista](#️-respuesta-de-entrevista-9)
- [🔹 ¿Qué ocurre cuando expira un token?](#-qué-ocurre-cuando-expira-un-token)
    - [♻️ Si tenemos refresh token](#️-si-tenemos-refresh-token)
    - [🚨 Si no podemos renovar](#-si-no-podemos-renovar)
    - [🗣️ Respuesta de entrevista](#️-respuesta-de-entrevista-10)
- [🔹 ¿Cómo cerrarías sesión?](#-cómo-cerrarías-sesión)
    - [🗣️ Respuesta de entrevista](#️-respuesta-de-entrevista-11)
- [🔥 ¿El frontend realmente puede proteger una API?](#-el-frontend-realmente-puede-proteger-una-api)
    - [🗣️ Respuesta de entrevista ⭐](#️-respuesta-de-entrevista-)
- [🧠 RESUMEN PARA ENTREVISTA](#-resumen-para-entrevista)
- [🎯 LAS 5 QUE MÁS TE PUEDEN PREGUNTAR](#-las-5-que-más-te-pueden-preguntar)
    - [⭐ Idea fundamental](#-idea-fundamental)

---


## 🔹 ¿Qué es autenticación?

La **autenticación** es el proceso mediante el cual una aplicación verifica **quién es el usuario**.

```text
Usuario
   ↓
email + password
   ↓
Backend
   ↓
¿Las credenciales son correctas?
   ↓
Sí → Usuario autenticado
```

Ejemplo:

```text
POST /api/auth/login

{
  "email": "alo@example.com",
  "password": "123456"
}
```

Si las credenciales son válidas, el backend puede devolver un token.

### 🗣️ Respuesta de entrevista

> "La autenticación es el proceso de verificar la identidad de un usuario. Por ejemplo, cuando hacemos login, el backend valida las credenciales y, si son correctas, establece una sesión o devuelve un token que identifica al usuario autenticado."

> 💡 **Piensa:**
>
> ```text
> 🔐 Autenticación = ¿Quién eres?
> ```

---

## 🔹 ¿Qué es autorización?

La **autorización** determina **qué puede hacer un usuario** una vez que ya está autenticado.

```text
Usuario autenticado
        ↓
¿Tiene permisos de administrador?
        ↓
     Sí → /admin
     No → acceso denegado
```

Podemos tener roles:

```text
USER
ADMIN
MANAGER
MODERATOR
```

O permisos:

```text
users:read
users:create
users:delete
```

### 🗣️ Respuesta de entrevista

> "La autorización determina qué recursos o acciones puede realizar un usuario una vez autenticado. Por ejemplo, un usuario puede estar autenticado pero no tener permisos para acceder a una sección de administración."

> 💡 **Diferencia fundamental:**
>
> ```text
> 🔐 Autenticación → ¿Quién eres?
>
> 🛡️ Autorización → ¿Qué puedes hacer?
> ```

---

# 🔹 ¿Qué es JWT?

JWT significa:

**JSON Web Token**

Es un formato utilizado para transmitir información entre partes de forma compacta y verificable.

En aplicaciones web suele utilizarse para implementar autenticación basada en tokens.

### 🔄 Flujo típico

```text
Login
  ↓
Backend valida credenciales
  ↓
Backend genera JWT
  ↓
Frontend recibe JWT
  ↓
Frontend lo utiliza en requests
  ↓
Backend valida JWT
```

Por ejemplo:

```http
Authorization: Bearer <token>
```

### 🗣️ Respuesta de entrevista

> "JWT es un estándar para representar información en un token que puede ser firmado y posteriormente verificado. En aplicaciones web se utiliza frecuentemente para autenticación, permitiendo que el cliente envíe un token que el backend valida en cada petición protegida."

> ⚠️ **Importante:** **JWT no significa automáticamente que sea seguro.**
>
> La seguridad depende de cómo se genere, almacene, transmita, expire y valide.

---

# 🔹 ¿Qué contiene un JWT?

Un JWT normalmente tiene tres partes:

```text
HEADER.PAYLOAD.SIGNATURE
```

Por ejemplo:

```text
xxxxx.yyyyy.zzzzz
```

| Parte        | Función                       |
| ------------ | ----------------------------- |
| 🟦 Header    | Información sobre el token    |
| 🟨 Payload   | Claims                        |
| 🟥 Signature | Verificar que no fue alterado |

---

# 🔹 ¿Qué diferencia hay entre Header, Payload y Signature?

## 🟦 Header

Contiene información sobre el token.

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

Indica cosas como:

```text
alg → algoritmo utilizado
typ → tipo de token
```

---

## 🟨 Payload

Contiene los **claims**, es decir, información asociada al token.

```json
{
  "sub": "123",
  "role": "admin",
  "iat": 1720000000,
  "exp": 1720003600
}
```

Puede contener:

| Claim  | Significado               |
| ------ | ------------------------- |
| `sub`  | Identificador del usuario |
| `role` | Rol                       |
| `iat`  | Fecha de emisión          |
| `exp`  | Fecha de expiración       |

> ⚠️ **El payload no está cifrado por defecto.**
>
> Normalmente puede ser decodificado fácilmente.

Por eso **NO debes guardar información sensible en él**, como:

```text
❌ password
❌ credit card
❌ secretos
❌ información privada innecesaria
```

---

## 🟥 Signature

Es la firma utilizada para comprobar que el token **no fue alterado**.

Conceptualmente:

```text
Header
   +
Payload
   +
Secret/Key
   ↓
Signature
```

El backend puede verificar la firma y detectar modificaciones.

### 🗣️ Respuesta de entrevista

> "Un JWT está compuesto por Header, Payload y Signature. El Header contiene información del algoritmo y tipo de token, el Payload contiene claims como el usuario o la expiración, y la Signature permite verificar que el token no haya sido alterado."

> 💡 **Frase clave:**
>
> **JWT está codificado, no necesariamente cifrado.**

---

# 🔹 ¿Dónde almacenarías un JWT?

Aquí hay que responder con cuidado porque **depende del diseño de seguridad de la aplicación**.

Una opción común es utilizar:

```text
HttpOnly + Secure + SameSite Cookie
```

para tokens que no necesitan ser accesibles directamente por JavaScript.

También existen aplicaciones que almacenan tokens en:

```text
localStorage
sessionStorage
memoria
```

pero cada estrategia tiene diferentes implicaciones de seguridad.

### 🗣️ Respuesta de entrevista

> "Preferiría una estrategia basada en cookies `HttpOnly`, `Secure` y con una política `SameSite` adecuada cuando la arquitectura lo permite, porque JavaScript no puede acceder a una cookie HttpOnly. Si utilizara almacenamiento del lado del cliente como localStorage, tendría que considerar especialmente el riesgo de XSS."

> 🔥 Esta respuesta es mejor que simplemente decir:
>
> > "Lo guardaría en localStorage."

---

# 🔹 ¿Qué riesgos tiene `localStorage`?

El principal problema es **XSS (Cross-Site Scripting)**.

Si un atacante consigue ejecutar JavaScript malicioso dentro de nuestra aplicación, ese código podría intentar acceder a:

```typescript
localStorage.getItem('token');
```

### ⚠️ Flujo del ataque

```text
XSS
 ↓
JavaScript malicioso
 ↓
Accede a localStorage
 ↓
Roba JWT
 ↓
Atacante utiliza JWT
```

Por eso almacenar tokens sensibles en `localStorage` tiene riesgos.

### 🗣️ Respuesta de entrevista

> "El principal riesgo de almacenar un JWT en localStorage es que, si existe una vulnerabilidad XSS que permita ejecutar JavaScript malicioso, el atacante podría acceder al token. Por eso, dependiendo de la arquitectura, una cookie HttpOnly puede ser una alternativa más segura para determinados tokens."

> ⚠️ **Importante:**
>
> **HttpOnly ayuda contra el robo mediante JavaScript, pero no elimina todos los riesgos de seguridad web.**

---

# 🔹 ¿Qué es un Refresh Token?

Un **refresh token** es un token utilizado para obtener un nuevo **access token** cuando este expira.

La idea es evitar que el access token tenga una duración demasiado larga.

```text
Access Token
     ↓
  expira
     ↓
Refresh Token
     ↓
Backend
     ↓
Nuevo Access Token
```

---

# 🔹 ¿Access Token vs Refresh Token?

|                             | Access Token              | Refresh Token                 |
| --------------------------- | ------------------------- | ----------------------------- |
| **Uso**                     | Acceder a APIs protegidas | Obtener nuevo access token    |
| **Duración**                | Corta                     | Más larga                     |
| **Se envía frecuentemente** | Sí                        | Normalmente no                |
| **Riesgo**                  | Debe limitarse            | Debe protegerse especialmente |
| **Renovación**              | Sí                        | Se utiliza para renovarlo     |

Ejemplo:

```text
Access Token → 15 min
Refresh Token → días/semanas
```

Los tiempos reales dependen de la arquitectura.

### 🗣️ Respuesta de entrevista

> "El access token se utiliza para acceder a recursos protegidos y normalmente tiene una vida corta. El refresh token tiene una vida más larga y se utiliza para obtener nuevos access tokens sin obligar al usuario a iniciar sesión nuevamente."

# 🔹 ¿Qué es un Auth Guard?

Un **Auth Guard** permite controlar si una ruta puede ser activada dependiendo del estado de autenticación o autorización.

Por ejemplo:

```text
/user
/admin
/dashboard
```

Podemos comprobar:

```text
¿Usuario autenticado?
       ↓
      Sí
       ↓
Permitir navegación

      No
       ↓
Login
```

En Angular moderno podemos utilizar guards funcionales:

```typescript
export const authGuard: CanActivateFn = () => {

  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isAuthenticated()
    ? true
    : router.createUrlTree(['/login']);
};
```

### 🗣️ Respuesta de entrevista

> "Un Auth Guard permite controlar la navegación hacia determinadas rutas. Por ejemplo, puedo comprobar si existe una sesión válida y permitir el acceso al dashboard o redirigir al login."

> ⚠️ **Pero recuerda:**
>
> **Un Guard NO protege realmente el backend.**

---

# 🔹 ¿Qué hace un HTTP Interceptor?

Un HTTP Interceptor permite ejecutar lógica alrededor de las peticiones HTTP.

```text
Component
   ↓
Service
   ↓
Interceptor
   ↓
Backend
   ↓
Interceptor
   ↓
Component
```

### 🧩 Puede utilizarse para:

| Uso              | Función                    |
| ---------------- | -------------------------- |
| 🔑 JWT           | Agregar token              |
| 🧾 Headers       | Agregar headers            |
| ❌ Errores        | Manejar errores            |
| 🚨 `401`         | Manejar sesiones inválidas |
| 📊 Logging       | Registrar peticiones       |
| ⏳ Loading global | Controlar loading          |

Ejemplo:

```typescript
export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const token = getToken();

  if (!token) {
    return next(req);
  }

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  return next(authReq);
};
```

### 🗣️ Respuesta de entrevista

> "Un interceptor permite centralizar lógica relacionada con las peticiones HTTP. En autenticación lo utilizaría, por ejemplo, para agregar automáticamente el access token al header Authorization y para manejar respuestas como 401."

---

# 🔹 ¿Cómo protegerías rutas en Angular?

Utilizaría un **Auth Guard**.

Por ejemplo:

```typescript
export const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./dashboard.component')
  }
];
```

### 🔄 Flujo

```text
Usuario intenta entrar a /dashboard
              ↓
          Auth Guard
              ↓
       ¿Está autenticado?
          ↙       ↘
        Sí         No
        ↓           ↓
    Dashboard     Login
```

También puedo controlar autorización:

```text
¿Está autenticado?
       ↓
¿Tiene role ADMIN?
       ↓
     Sí → /admin
     No → acceso denegado
```

### 🗣️ Respuesta de entrevista

> "Protegería las rutas de Angular utilizando guards. El guard comprobaría si el usuario está autenticado y, si fuera necesario, también verificaría roles o permisos. Si no cumple las condiciones, redirigiría a una ruta apropiada."

---

# 🔹 ¿Qué ocurre cuando expira un token?

Depende de la arquitectura.

### ♻️ Si tenemos refresh token

```text
Access Token expira
        ↓
API responde 401
        ↓
Interceptor detecta 401
        ↓
Solicita nuevo Access Token
        ↓
Reintenta la petición original
```

### 🚨 Si no podemos renovar

```text
401
 ↓
Refresh Token inválido/expirado
 ↓
Cerrar sesión
 ↓
Eliminar credenciales
 ↓
Login
```

### 🗣️ Respuesta de entrevista

> "Si utilizamos refresh tokens, cuando expira el access token puedo intentar renovarlo y repetir la petición original. Si el refresh token tampoco es válido, entonces cierro la sesión, limpio las credenciales y redirijo al login."

> 🔥 **Este es un flujo clásico de entrevista.**

---

# 🔹 ¿Cómo cerrarías sesión?

Al cerrar sesión debemos invalidar la sesión del lado del cliente y, dependiendo de la arquitectura, también del servidor.

Por ejemplo:

```typescript
logout(): void {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');

  this.router.navigate(['/login']);
}
```

Pero si utilizamos cookies HttpOnly, JavaScript no puede eliminarlas directamente.

En ese caso normalmente hacemos:

```text
POST /api/auth/logout
        ↓
Backend invalida sesión/token
        ↓
Cookie expirada
        ↓
Frontend → Login
```

### 🗣️ Respuesta de entrevista

> "Al cerrar sesión eliminaría o invalidaría las credenciales y limpiaría el estado de autenticación. Si utilizamos cookies o refresh tokens administrados por el backend, también enviaría una petición de logout para que el servidor invalide la sesión correspondiente."

---

# 🔥 ¿El frontend realmente puede proteger una API?

**NO.**

> ⭐ Esta es una de las mejores preguntas de la sección.

El frontend puede **controlar la experiencia**, pero **la seguridad real debe estar en el backend**.

Por ejemplo:

```text
Angular Guard
     ↓
¿Puede entrar a /admin?
     ↓
No → No muestra la página
```

Pero un atacante puede ignorar completamente Angular y hacer directamente:

```http
DELETE /api/users/10
```

Por eso el backend debe comprobar:

```text
¿Está autenticado?
        ↓
¿Token válido?
        ↓
¿Tiene permisos?
        ↓
¿Puede ejecutar DELETE?
```

El backend debe rechazar la petición si no corresponde.

### 🗣️ Respuesta de entrevista ⭐

> "No. El frontend no puede ser la autoridad de seguridad de una API. Angular puede proteger rutas, ocultar opciones de la interfaz y mejorar la experiencia del usuario mediante guards, pero un atacante puede saltarse completamente el frontend y llamar directamente a la API. Por eso el backend siempre debe validar el token, la autenticación y los permisos en cada operación protegida."

> 🔥 **Esta es la respuesta que quieres recordar.**

---

# 🧠 RESUMEN PARA ENTREVISTA

```text
🔐 AUTENTICACIÓN
    ↓
¿Quién eres?

🛡️ AUTORIZACIÓN
    ↓
¿Qué puedes hacer?

🎫 JWT
    ↓
Header + Payload + Signature

🔑 ACCESS TOKEN
    ↓
Acceder a APIs protegidas
    ↓
Vida corta

♻️ REFRESH TOKEN
    ↓
Obtener nuevo Access Token
    ↓
Vida más larga

🛣️ AUTH GUARD
    ↓
Protege navegación en Angular

🌐 HTTP INTERCEPTOR
    ↓
Lógica transversal HTTP
    ├── JWT
    ├── 401
    ├── Headers
    └── Logging

🍪 STORAGE
    ↓
Preferir estrategia segura según arquitectura
    ↓
HttpOnly Cookie puede evitar acceso desde JS

🚨 401
    ↓
Access Token inválido/expirado
    ↓
Refresh Token
    ↓
Nuevo Access Token
    ↓
Reintentar
    ↓
Si falla → Logout

🔒 SEGURIDAD REAL
    ↓
BACKEND
    ↓
Siempre valida:
    ├── Token
    ├── Usuario
    ├── Roles
    └── Permisos
```

---

# 🎯 LAS 5 QUE MÁS TE PUEDEN PREGUNTAR

|  # | Pregunta                                                         |
| -: | ---------------------------------------------------------------- |
|  1 | **¿Autenticación vs autorización?**                              |
|  2 | **¿Qué es JWT y qué contiene?**                                  |
|  3 | **¿Dónde almacenarías un JWT y qué riesgos tiene localStorage?** |
|  4 | **¿Cómo manejarías la expiración del access token?**             |
|  5 | **¿El frontend realmente puede proteger una API?** ⭐             |

### ⭐ Idea fundamental

> **"Los guards protegen la navegación del frontend; el backend protege realmente los recursos."**

Esa distinción es **fundamental** para una entrevista de Frontend/Angular.

