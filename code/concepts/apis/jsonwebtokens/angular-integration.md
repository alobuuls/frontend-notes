# 🅰️ JWT en Angular

> Guía completa sobre cómo implementar autenticación basada en **JWT (JSON Web Token)** en una aplicación Angular, utilizando las herramientas que proporciona el framework para gestionar autenticación, autorización y sesiones de usuario.

---

# 📋 Índice

- [¿Qué hace Angular con JWT?](#-qué-hace-angular-con-jwt)
- [Flujo general de autenticación](#-flujo-general-de-autenticación)
- [1. HTTP Interceptor](#1-http-interceptor)
- [2. AuthService](#2-authservice)
- [3. Auth Guard](#3-auth-guard)
- [4. Manejo de errores HTTP](#4-manejo-de-errores-http)
- [5. Storage en Angular](#5-storage-en-angular)
- [6. Refresh Token](#6-refresh-token-en-angular)
- [7. Logout](#7-logout)
- [8. Flujo completo](#8-flujo-completo-en-angular)
- [Resumen de responsabilidades](#-resumen-de-responsabilidades)
- [Idea clave](#-idea-clave)

---

# 🧩 ¿Qué hace Angular con JWT?

Cuando utilizas **JWT** en una aplicación Angular, el Frontend se encarga de conectar el flujo de autenticación con el Backend.

Normalmente Angular gestiona:

- 🔐 Login
- 🗃️ Almacenamiento del token
- 🌐 Envío automático del token en las peticiones HTTP
- 🛡️ Protección de rutas
- 🚨 Manejo de errores de autenticación
- 🔄 Renovación del Access Token
- 🚪 Logout

---

# 🔄 Flujo general de autenticación

```text
👤 Usuario
    ↓
🔐 Login
    ↓
🅰️ Angular AuthService
    ↓
🖥️ Backend
    ↓
🎟️ JWT
    ↓
🅰️ Angular guarda/gestiona token
    ↓
🌐 HTTP Request
    ↓
🔑 Interceptor agrega JWT
    ↓
🖥️ Backend valida token
    ↓
✅ Respuesta
```

---

# 1️⃣ HTTP Interceptor

## 📌 ¿Qué es?

Un **HTTP Interceptor** permite interceptar todas las peticiones realizadas mediante `HttpClient`.

Su principal uso con JWT consiste en agregar automáticamente el header:

```http
Authorization: Bearer <token>
```

---

## 🧠 ¿Qué problema resuelve?

Sin interceptor habría que añadir el token manualmente en cada petición:

```ts
this.http.get('/api/profile', {
  headers: {
    Authorization: `Bearer ${token}`
  }
});
```

Repetir este código continuamente no es una buena práctica.

Con un interceptor el flujo cambia a:

```text
🌐 Request
    ↓
🧩 HTTP Interceptor
    ↓
🔑 Agrega Authorization
    ↓
🖥️ Backend
```

Los servicios permanecen mucho más limpios.

---

## 📌 Ejemplo conceptual

```ts
const token = localStorage.getItem('accessToken');

const clonedRequest = req.clone({
  setHeaders: {
    Authorization: `Bearer ${token}`
  }
});

return next(clonedRequest);
```

---

## 🔍 ¿Qué hace el interceptor?

1. Recibe la petición.
2. Obtiene el token.
3. Clona la petición.
4. Agrega el header Authorization.
5. Envía la nueva petición.

---

## ⚠️ No todas las rutas necesitan JWT

Por ejemplo:

No requieren autenticación:

```text
/api/auth/login
/api/auth/register
/api/auth/refresh
```

Generalmente sí requieren autenticación:

```text
/api/profile
/api/users
/api/orders
```

Por ello normalmente el interceptor contiene lógica para decidir cuándo debe enviar el token.

---

# 2️⃣ AuthService

## 📌 ¿Qué es?

El **AuthService** centraliza toda la lógica relacionada con autenticación.

En lugar de repartir esa lógica por distintos componentes, se concentra en un único servicio.

---

## 📋 Responsabilidades

- 🔐 Login
- 🚪 Logout
- 🎟️ Gestionar Access Token
- 🔄 Gestionar Refresh Token
- 👤 Conocer el usuario autenticado
- 🧠 Saber si existe sesión iniciada

---

## 📌 Ejemplo conceptual

```ts
login(credentials: LoginRequest) {
  return this.http.post<LoginResponse>(
    '/api/auth/login',
    credentials
  );
}
```

Después del login:

```text
🅰️ Angular
      ↓
AuthService.login()
      ↓
🖥️ Backend
      ↓
🎟️ Access Token
🔄 Refresh Token
      ↓
🅰️ Angular
```

---

## 🧠 Idea importante

El AuthService funciona como punto central.

```text
🧩 LoginComponent
        ↓
🔐 AuthService
        ↓
🖥️ Backend
```

También puede ser utilizado por:

```text
🧩 HTTP Interceptor
        ↓
🔐 AuthService
        ↓
🎟️ Obtener token
```

Y por:

```text
🧩 Auth Guard
        ↓
🔐 AuthService
        ↓
🧠 ¿Está autenticado?
```

De esta forma se evita duplicar lógica.

---

# 3️⃣ Auth Guard

## 📌 ¿Qué es?

Un **Auth Guard** controla el acceso a las rutas del Frontend.

Ejemplos:

```text
/dashboard
/profile
/admin
```

---

## 🧠 ¿Cómo funciona?

Antes de permitir la navegación:

```text
👤 Usuario intenta acceder
        ↓
🛡️ AuthGuard
        ↓
¿Está autenticado?
      ↙       ↘
    Sí         No
    ↓           ↓
 Permitir    Redirigir
 acceso      al login
```

---

## 📌 Ejemplo conceptual

```ts
canActivate(): boolean {
  return this.authService.isAuthenticated();
}
```

Uso:

```ts
{
  path: 'dashboard',
  canActivate: [authGuard],
  component: DashboardComponent
}
```

---

## ⚠️ Importante

El Guard **NO protege el Backend**.

Solo controla la navegación del Frontend.

La protección real siempre debe realizarse en el servidor.

```text
🅰️ Angular Guard
        ↓
Protege navegación

🖥️ Backend
        ↓
Protege realmente los recursos
```

---

# 4️⃣ Manejo de errores HTTP

Durante la autenticación existen dos respuestas HTTP especialmente importantes.

## 🔴 401 Unauthorized

Significa:

> No existe una autenticación válida.

Puede ocurrir cuando:

- No se envió token.
- Token inválido.
- Token expirado.
- Credenciales incorrectas.

```text
🌐 Request
      ↓
🖥️ Backend
      ↓
🎟️ Token inválido
      ↓
❌ 401 Unauthorized
```

---

## Flujo típico

```text
❌ 401
      ↓
🔄 Intentar Refresh Token
      ↓
🎟️ Nuevo Access Token
      ↓
🔁 Reintentar petición
```

Si el Refresh Token falla:

```text
❌ Refresh inválido
        ↓
🚪 Logout
        ↓
🔐 Login
```

---

## 🟠 403 Forbidden

Significa:

> El usuario está autenticado, pero no tiene permisos suficientes.

Ejemplo:

```text
👤 Usuario autenticado
        ↓
Eliminar usuarios
        ↓
¿Es administrador?
        ↓
        No
        ↓
❌ 403 Forbidden
```

---

## Diferencia entre 401 y 403

| Código | Significado |
|---------|-------------|
| **401** | No existe autenticación válida |
| **403** | Existe autenticación, pero no autorización |

---

# 5️⃣ Storage en Angular

Angular puede almacenar tokens utilizando distintos mecanismos.

- 💾 localStorage
- 🧠 sessionStorage
- 🍪 Cookies

---

# 💾 localStorage

Guardar:

```ts
localStorage.setItem('accessToken', token);
```

Leer:

```ts
const token = localStorage.getItem('accessToken');
```

Eliminar:

```ts
localStorage.removeItem('accessToken');
```

### Características

- ✅ Persistente
- ✅ Muy sencillo
- ❌ JavaScript puede acceder al contenido
- ⚠️ Debe considerarse el riesgo de XSS

---

# 🧠 sessionStorage

Muy similar:

```ts
sessionStorage.setItem('accessToken', token);
```

Características:

- ✅ Fácil de utilizar
- ✅ Se elimina al cerrar la pestaña
- ❌ JavaScript puede acceder al contenido
- ⚠️ También debe considerarse el riesgo de XSS

---

# 🍪 Cookies

Las cookies suelen configurarse mediante atributos como:

- HttpOnly
- Secure
- SameSite

## HttpOnly

Impide que JavaScript pueda leer directamente la cookie.

---

## Secure

Solo permite enviar la cookie mediante HTTPS.

---

## SameSite

Ayuda a controlar cuándo el navegador envía la cookie en peticiones cross-site, reduciendo ciertos escenarios de CSRF.

---

## Comparación

| Método | Persistencia | ¿JavaScript puede leerlo? | Consideración principal |
|---------|-------------|--------------------------|-------------------------|
| localStorage | Persistente | ✅ Sí | Riesgo de XSS |
| sessionStorage | Sesión | ✅ Sí | Riesgo de XSS |
| Cookie HttpOnly | Configurable | ❌ No | Debe considerarse CSRF |
| Cookie Secure | Configurable | Depende de HttpOnly | Solo HTTPS |

---

# 6️⃣ Refresh Token en Angular

Cuando el **Access Token** expira, Angular puede solicitar uno nuevo utilizando el **Refresh Token**.

Generalmente esta lógica vive en un HTTP Interceptor.

---

## Flujo

```text
🌐 Request
      ↓
🎟️ Access Token
      ↓
🖥️ Backend
      ↓
⏳ Expirado
      ↓
❌ 401
      ↓
🧩 Interceptor
      ↓
🔄 Solicita nuevo Access Token
      ↓
🖥️ Backend valida Refresh Token
      ↓
🎟️ Nuevo Access Token
      ↓
🔁 Reintenta petición original
      ↓
✅ Respuesta
```

---

## ⚠️ Problema habitual

Si cinco peticiones reciben un 401 al mismo tiempo:

```text
Request 1 → 401
Request 2 → 401
Request 3 → 401
Request 4 → 401
Request 5 → 401
```

Todas podrían intentar renovar el token simultáneamente:

```text
🔄 Refresh
🔄 Refresh
🔄 Refresh
🔄 Refresh
🔄 Refresh
```

La solución habitual consiste en permitir **un único proceso de renovación**, mientras el resto espera el resultado.

```text
401 ──┐
401 ──┤
401 ──┼────→ 🔄 UN SOLO REFRESH
401 ──┤
401 ──┘
              ↓
      🎟️ Nuevo Access Token
              ↓
🔁 Reintentar peticiones pendientes
```

Este es uno de los aspectos más importantes al implementar JWT en Angular.

---

# 7️⃣ Logout

El Logout limpia completamente el estado de autenticación.

Flujo típico:

```text
👤 Logout
      ↓
🗑️ Eliminar Access Token
      ↓
🗑️ Eliminar Refresh Token
      ↓
🧠 Limpiar usuario autenticado
      ↓
🧹 Limpiar estado
      ↓
🔐 Redirigir al Login
```

---

## Cuando existe Refresh Token

Puede ser necesario informar al servidor:

```text
🅰️ Angular
      ↓
POST /auth/logout
      ↓
🖥️ Backend
      ↓
🚫 Invalidar Refresh Token
```

Después:

```text
🗑️ Limpiar almacenamiento
        ↓
🔐 Volver al Login
```

---

# 8️⃣ Flujo completo en Angular

```text
👤 USUARIO
      ↓
🔐 LOGIN
      ↓
🧩 LoginComponent
      ↓
🔐 AuthService
      ↓
🖥️ BACKEND
      ↓
🎟️ ACCESS TOKEN
🔄 REFRESH TOKEN
      ↓
🗃️ Storage / Cookie
      ↓
👤 Usuario navega
      ↓
🌐 HTTP Request
      ↓
🧩 HTTP Interceptor
      ↓
🔑 Authorization: Bearer TOKEN
      ↓
🖥️ Backend
      ↓
🛡️ Valida JWT
      ↓
    ┌───────────────┐
    │               │
    ▼               ▼
  ✅ 200          ❌ Error
    │               │
    │         ┌─────┴─────┐
    │         ▼           ▼
    │       401          403
    │         │            │
    │         │            └──→ 🚫 Sin permisos
    │         ▼
    │     🔄 Refresh
    │         ▼
    │    🎟️ Nuevo JWT
    │         ▼
    │    🔁 Reintentar
    ▼
📦 Datos
    ↓
🖥️ Angular actualiza la interfaz
```

---

# 📌 Resumen de responsabilidades

| Componente | Responsabilidad |
|------------|-----------------|
| 🔐 AuthService | Centraliza la autenticación |
| 🌐 HTTP Interceptor | Agrega JWT y maneja respuestas HTTP |
| 🛡️ Auth Guard | Protege rutas del Frontend |
| 🗃️ Storage / Cookies | Mantiene el token |
| 🔄 Refresh Token | Renueva el Access Token |
| 🚨 Error Handling | Gestiona errores como 401 y 403 |
| 🚪 Logout | Finaliza la sesión y limpia el estado |

---

# 🏆 Idea clave

JWT en Angular **no se implementa mediante una única pieza**, sino combinando distintos componentes especializados.

```text
🔐 AuthService
      +
🌐 HTTP Interceptor
      +
🛡️ Auth Guard
      +
🗃️ Token Storage
      +
🔄 Refresh Token
      +
🚨 Error Handling
      +
🚪 Logout
```

Cada elemento tiene una responsabilidad específica:

- **AuthService** → Gestiona la autenticación.
- **HTTP Interceptor** → Añade el token y maneja respuestas relacionadas con autenticación.
- **Auth Guard** → Controla la navegación entre rutas protegidas.
- **Storage/Cookies** → Conserva los tokens según la estrategia elegida.
- **Refresh Token** → Permite mantener la sesión sin solicitar credenciales constantemente.
- **Logout** → Elimina el estado de autenticación del cliente y, cuando corresponda, invalida la sesión en el servidor.

> **Importante:** La seguridad real siempre reside en el **Backend**, que debe validar cada JWT y comprobar los permisos del usuario en todas las solicitudes protegidas.