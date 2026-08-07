# 🧭 ROUTING & AUTHENTICATION

# 📚 ÍNDICE — 🧭 ROUTING & AUTHENTICATION

- [🧭 ROUTING \& AUTHENTICATION](#-routing--authentication)
- [📚 ÍNDICE — 🧭 ROUTING \& AUTHENTICATION](#-índice---routing--authentication)
  - [1️⃣ 🧭 ROUTING](#1️⃣--routing)
- [2️⃣ ⚛️ REACT ROUTER](#2️⃣-️-react-router)
- [3️⃣ 🛣️ ROUTES](#3️⃣-️-routes)
- [4️⃣ 🔀 DYNAMIC ROUTES](#4️⃣--dynamic-routes)
- [5️⃣ 🆔 ROUTE PARAMETERS](#5️⃣--route-parameters)
- [6️⃣ 🧩 NESTED ROUTES](#6️⃣--nested-routes)
- [7️⃣ 🧭 NAVIGATION](#7️⃣--navigation)
- [8️⃣ 🛡️ PROTECTED ROUTES](#8️⃣-️-protected-routes)
- [9️⃣ 🔐 AUTHENTICATION](#9️⃣--authentication)
- [🔟 🎟️ JWT](#-️-jwt)
- [1️⃣1️⃣ 🎟️ ACCESS TOKEN](#1️⃣1️⃣-️-access-token)
- [1️⃣2️⃣ 🔄 REFRESH TOKEN](#1️⃣2️⃣--refresh-token)
- [1️⃣3️⃣ 🍪 COOKIES](#1️⃣3️⃣--cookies)
- [1️⃣4️⃣ 🔑 LOGIN](#1️⃣4️⃣--login)
- [1️⃣5️⃣ 🚪 LOGOUT](#1️⃣5️⃣--logout)
- [1️⃣6️⃣ 🧠 SESSION MANAGEMENT](#1️⃣6️⃣--session-management)
- [🧠 FLUJO GENERAL](#-flujo-general)
  - [🎯 IDEA CLAVE](#-idea-clave)

## 1️⃣ 🧭 ROUTING

**Routing** es el sistema que permite que una aplicación React tenga diferentes **rutas/páginas** y determine qué componente debe mostrarse según la URL.

Por ejemplo:

```text
/                → Home
/about           → About
/products        → Products
/products/10     → ProductDetail
/login           → Login
```

En una SPA, normalmente el navegador **no recarga toda la página** al cambiar de ruta.

La navegación ocurre dentro de la propia aplicación:

```text
Usuario
   ↓
URL cambia
   ↓
Router
   ↓
Busca la ruta correspondiente
   ↓
Renderiza el componente
```

---

# 2️⃣ ⚛️ REACT ROUTER

React Router es una de las soluciones más utilizadas para implementar routing en aplicaciones React.

Permite:

* Crear rutas.
* Navegar entre páginas.
* Trabajar con parámetros.
* Crear rutas anidadas.
* Proteger determinadas rutas.
* Obtener información de la URL.

Conceptualmente:

```text
React
  ↓
React Router
  ↓
Routes
  ↓
Components
```

---

# 3️⃣ 🛣️ ROUTES

Una **route** relaciona una URL con un componente.

Por ejemplo:

```text
/about
```

puede estar asociada con:

```text
AboutPage
```

La idea es:

```text
URL
 ↓
Route
 ↓
Component
```

Ejemplo conceptual:

```jsx
<Route path="/about" element={<About />} />
```

Esto significa:

> Cuando la URL sea `/about`, muestra el componente `About`.

---

# 4️⃣ 🔀 DYNAMIC ROUTES

Una **ruta dinámica** contiene una parte de la URL que puede cambiar.

Por ejemplo:

```text
/users/10
/users/25
/users/100
```

Todas pueden utilizar la misma estructura:

```text
/users/:id
```

Donde:

```text
:id
```

representa un valor dinámico.

```text
/users/:id
       ↑
       └── valor variable
```

Esto permite reutilizar un mismo componente para diferentes recursos.

---

# 5️⃣ 🆔 ROUTE PARAMETERS

Los **route parameters** son valores dinámicos incluidos dentro de la ruta.

Ejemplo:

```text
/products/:productId
```

Si visitamos:

```text
/products/42
```

entonces:

```text
productId = 42
```

La aplicación puede utilizar ese valor para obtener información:

```text
/products/42
      ↓
productId = 42
      ↓
GET /api/products/42
      ↓
Producto
```

Son especialmente útiles para:

* IDs.
* Usuarios.
* Productos.
* Posts.
* Detalles de recursos.

---

# 6️⃣ 🧩 NESTED ROUTES

Las **nested routes** son rutas que existen dentro de otra ruta.

Por ejemplo:

```text
/dashboard
/dashboard/profile
/dashboard/settings
/dashboard/users
```

Podemos pensar en:

```text
Dashboard
│
├── Profile
├── Settings
└── Users
```

Esto permite crear estructuras de navegación más organizadas.

Son especialmente útiles para aplicaciones con:

* Dashboards.
* Paneles administrativos.
* Configuraciones.
* Secciones con varias subsecciones.

---

# 7️⃣ 🧭 NAVIGATION

La **navigation** es el proceso de mover al usuario de una ruta a otra.

Por ejemplo:

```text
/login
   ↓
/dashboard
```

En React no siempre quieres utilizar un enlace HTML tradicional:

```html
<a href="/dashboard">
```

porque puede provocar una navegación completa del documento.

Con React Router puedes realizar navegación interna sin perder el estado general de la SPA.

Conceptualmente:

```text
Usuario
   ↓
Click
   ↓
Router
   ↓
Nueva URL
   ↓
Nuevo componente
```

---

# 8️⃣ 🛡️ PROTECTED ROUTES

Una **protected route** es una ruta que solamente puede ser accesible si el usuario cumple determinada condición.

Por ejemplo:

```text
/dashboard
```

puede requerir autenticación.

El flujo sería:

```text
Usuario intenta entrar
        ↓
¿Está autenticado?
     ↙       ↘
   SÍ         NO
   ↓           ↓
Dashboard     Login
```

Esto permite proteger páginas como:

* Dashboards.
* Perfil del usuario.
* Administración.
* Configuración.
* Recursos privados.

⚠️ Importante:

**Una protected route en React NO protege realmente los datos del backend.**

Solo controla el acceso a la interfaz.

El backend también debe validar la autenticación y autorización.

---

# 9️⃣ 🔐 AUTHENTICATION

La **authentication** responde:

> **¿Quién eres?**

Por ejemplo:

```text
Usuario
   ↓
Email + password
   ↓
Backend
   ↓
¿Credenciales válidas?
   ↓
Usuario autenticado
```

Después de autenticarse, React necesita mantener el estado de autenticación para saber si el usuario tiene una sesión válida.

Conceptualmente:

```text
Login
 ↓
Backend
 ↓
Autenticación exitosa
 ↓
Credenciales / tokens / sesión
 ↓
React conoce el estado
 ↓
Usuario puede acceder a rutas privadas
```

📌 La teoría general de autenticación y JWT pertenece a tus apuntes de **JSON Web Tokens**.

Aquí nos interesa principalmente:

> **Cómo implementar ese sistema dentro de una aplicación React.**

---

# 🔟 🎟️ JWT

JWT es uno de los mecanismos que pueden utilizarse para transportar información relacionada con la autenticación entre el frontend y el backend.

En React, el flujo puede verse así:

```text
React
  ↓
Login
  ↓
Backend
  ↓
JWT
  ↓
React
  ↓
Requests autenticadas
```

Por ejemplo:

```text
POST /login
      ↓
Backend
      ↓
JWT
      ↓
Frontend
```

Después, el token puede utilizarse para acceder a recursos protegidos.

📌 **No repetimos aquí la estructura, claims, firma, expiración, seguridad, etc. de JWT**, porque eso pertenece a tu carpeta de JWT.

---

# 1️⃣1️⃣ 🎟️ ACCESS TOKEN

El **access token** representa la credencial que permite realizar solicitudes autenticadas.

Conceptualmente:

```text
Login
  ↓
Access Token
  ↓
Request
  ↓
Backend valida
  ↓
Respuesta
```

Normalmente tiene una duración relativamente corta.

Por ejemplo:

```text
Access Token
     ↓
válido durante cierto tiempo
     ↓
expira
```

Cuando expira, dependiendo de la arquitectura utilizada, puede ser necesario obtener uno nuevo mediante un **refresh token**.

---

# 1️⃣2️⃣ 🔄 REFRESH TOKEN

El **refresh token** permite obtener un nuevo access token sin obligar al usuario a introducir nuevamente sus credenciales.

Flujo conceptual:

```text
Login
 ↓
Access Token + Refresh Token
 ↓
Access Token expira
 ↓
Refresh Token
 ↓
Backend
 ↓
Nuevo Access Token
```

Esto permite mantener una sesión durante más tiempo mientras se mantiene el access token con una duración más corta.

📌 La teoría completa de refresh tokens ya pertenece a tus apuntes de JWT.

Aquí solamente interesa cómo React participa en ese flujo.

---

# 1️⃣3️⃣ 🍪 COOKIES

Las **cookies** son datos que el navegador puede almacenar y enviar automáticamente al servidor bajo determinadas condiciones.

En autenticación pueden utilizarse para almacenar información relacionada con la sesión o tokens.

Una configuración especialmente importante es:

```text
HttpOnly
Secure
SameSite
```

Por ejemplo:

```text
Browser
   │
   │ Cookie
   ▼
Backend
```

Una cookie `HttpOnly` tiene una característica importante:

```text
JavaScript ❌ → no puede leerla
Browser     → puede enviarla al servidor
```

Esto puede ser útil para determinados diseños de autenticación.

⚠️ La elección entre cookies, `localStorage`, `sessionStorage` u otros mecanismos depende de la arquitectura y de los requisitos de seguridad de la aplicación.

---

# 1️⃣4️⃣ 🔑 LOGIN

El **login** es el proceso mediante el cual el usuario proporciona sus credenciales para autenticarse.

Ejemplo:

```text
React
 ↓
Formulario de Login
 ↓
email + password
 ↓
API
 ↓
Backend valida
 ↓
Autenticación exitosa
 ↓
Sesión / tokens
 ↓
Usuario autenticado
```

Después del login, React normalmente debe actualizar su estado de autenticación.

Por ejemplo:

```text
isAuthenticated = true
```

y permitir el acceso a las rutas correspondientes.

---

# 1️⃣5️⃣ 🚪 LOGOUT

El **logout** finaliza la sesión del usuario desde el punto de vista de la aplicación.

Dependiendo de la arquitectura puede implicar:

```text
Logout
 ↓
Eliminar / invalidar credenciales
 ↓
Actualizar estado de autenticación
 ↓
Cerrar sesión
 ↓
Redirigir a /login
```

Por ejemplo:

```text
/dashboard
    ↓
Logout
    ↓
/login
```

📌 Qué ocurre exactamente con el token depende de cómo esté implementada la autenticación.

---

# 1️⃣6️⃣ 🧠 SESSION MANAGEMENT

**Session management** es la gestión del estado de autenticación durante toda la vida de la sesión del usuario.

React necesita saber cosas como:

```text
¿Está autenticado?
¿Quién es el usuario?
¿La sesión sigue siendo válida?
¿El access token expiró?
¿Necesitamos renovarlo?
¿Qué hacemos si el usuario hace logout?
```

Podemos visualizarlo así:

```text
                 AUTHENTICATION
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
        Login       Session       Logout
          │            │            │
          ▼            ▼            ▼
       Tokens       Validación    Cleanup
                       │
                       ▼
                 Protected Routes
```

---

# 🧠 FLUJO GENERAL

Todos estos conceptos pueden conectarse en un mismo flujo:

```text
                 👤 USER
                    │
                    ▼
                 🔑 LOGIN
                    │
                    ▼
              🌐 BACKEND API
                    │
                    ▼
             🎟️ AUTHENTICATION
                    │
             ┌──────┴──────┐
             ▼             ▼
       ACCESS TOKEN    REFRESH TOKEN
             │
             ▼
        ⚛️ REACT APP
             │
             ▼
      🛡️ PROTECTED ROUTES
             │
             ▼
          📄 PAGES
             │
             ▼
       🌐 API REQUESTS
             │
             ▼
       ⏳ TOKEN EXPIRES
             │
             ▼
        🔄 REFRESH
             │
             ▼
       🎟️ NEW ACCESS TOKEN
             │
             ▼
          👤 USER
             │
             ▼
          🚪 LOGOUT
```

## 🎯 IDEA CLAVE

En este tema debes separar mentalmente **routing** de **authentication**:

```text
🧭 ROUTING
   ↓
¿A qué página quiero ir?

🔐 AUTHENTICATION
   ↓
¿Quién es el usuario?

🛡️ PROTECTED ROUTE
   ↓
¿Puede este usuario entrar aquí?

🎟️ ACCESS TOKEN
   ↓
¿Puede esta petición ser autenticada?

🔄 REFRESH TOKEN
   ↓
¿Podemos mantener la sesión cuando expira?

🚪 LOGOUT
   ↓
¿Cómo terminamos la sesión?
```

Y la arquitectura general queda:

```text
React Router
     │
     ├── Routes
     ├── Dynamic Routes
     ├── Nested Routes
     └── Protected Routes
              │
              ▼
       Authentication
              │
        ┌─────┴─────┐
        ▼           ▼
   Access Token  Refresh Token
        │
        ▼
     API / Backend
```
