# 🔌 INTEGRATIONS

Las **integraciones** permiten conectar Astro con otras tecnologías, frameworks y servicios externos.

La idea importante es que Astro **no obliga a utilizar un único framework de UI ni una única forma de obtener datos**. Puedes combinar Astro con React, Vue, Svelte, APIs externas y sistemas de autenticación.

## 📚 ÍNDICE — INTEGRATIONS

1. ⚛️ [REACT](#1️⃣-⚛️-react)
2. 🟢 [VUE](#2️⃣-🟢-vue)
3. 🟠 [SVELTE](#3️⃣-🟠-svelte)
4. 🧩 [OTROS FRAMEWORKS](#4️⃣-🧩-otros-frameworks)
5. 🌐 [REST APIs](#5️⃣-🌐-rest-apis)
6. 📡 [FETCH](#6️⃣-📡-fetch)
7. 🔐 [JWT](#7️⃣-🔐-jwt)
8. 🍪 [COOKIES](#8️⃣-🍪-cookies)
9. 🔑 [AUTHENTICATION](#9️⃣-🔑-authentication)
10. 🛠️ [INTEGRACIONES DE ASTRO](#🔟-🛠️-integraciones-de-astro)
11. 🧠 [¿CÓMO SE RELACIONA TODO?](#🧠-cómo-se-relaciona-todo)
12. 🎯 [IDEA CLAVE](#🎯-idea-clave)
    
---

## 1️⃣ ⚛️ REACT

Astro puede utilizar componentes de **React** dentro de una aplicación Astro.

Por ejemplo, puedes tener:

```text
Astro
 ├── Header.astro
 ├── Blog.astro
 └── Counter.jsx
```

El componente React puede utilizarse dentro de una página Astro.

```astro
---
import Counter from '../components/Counter.jsx';
---

<h1>Mi página</h1>

<Counter client:load />
```

### 🧠 ¿Por qué utilizar React?

Cuando necesitas componentes interactivos o quieres reutilizar componentes existentes de React.

Por ejemplo:

* formularios complejos
* dashboards
* componentes interactivos
* librerías de React

### 🏝️ Importante

React no convierte automáticamente toda la aplicación en una SPA.

Puedes utilizar React únicamente donde lo necesites:

```text
Página Astro
│
├── HTML
├── HTML
├── 🏝️ React
├── HTML
└── 🏝️ React
```

---

# 2️⃣ 🟢 VUE

Astro también permite integrar **Vue**.

Puedes utilizar componentes `.vue` dentro de una aplicación Astro.

```text
Astro
 │
 ├── Page.astro
 ├── Header.astro
 └── Counter.vue
```

Ejemplo:

```astro
---
import Counter from '../components/Counter.vue';
---

<h1>Dashboard</h1>

<Counter client:load />
```

### 🎯 ¿Cuándo utilizar Vue?

Cuando:

* ya tienes componentes Vue
* quieres aprovechar el ecosistema Vue
* necesitas interactividad en determinadas partes de la página

Al igual que React, Vue puede funcionar como una **Island**.

---

# 3️⃣ 🟠 SVELTE

Astro también puede trabajar con **Svelte**.

Puedes tener:

```text
Astro
 │
 ├── Page.astro
 └── Counter.svelte
```

Y utilizarlo:

```astro
---
import Counter from '../components/Counter.svelte';
---

<Counter client:visible />
```

En este caso:

```text
Counter
   ↓
client:visible
   ↓
Esperar hasta que sea visible
   ↓
Hydration
   ↓
🏝️ Svelte Island
```

### 🎯 ¿Cuándo utilizarlo?

Cuando:

* tienes componentes Svelte existentes
* quieres aprovechar Svelte
* necesitas interactividad localizada

---

# 4️⃣ 🧩 OTROS FRAMEWORKS

Astro tiene un sistema de integraciones que permite añadir diferentes tecnologías al proyecto.

La idea es:

```text
             ASTRO
                │
      ┌─────────┼─────────┐
      ▼         ▼         ▼
    React      Vue      Svelte
      │         │         │
      └─────────┼─────────┘
                ▼
             Islands
```

### 🧠 Concepto importante

No tienes que elegir necesariamente:

> "Mi proyecto será React"

o:

> "Mi proyecto será Vue"

Astro permite combinar tecnologías según las necesidades del proyecto.

---

# 5️⃣ 🌐 REST APIs

Astro puede consumir APIs externas para obtener información.

Por ejemplo:

```text
Astro
  ↓
REST API
  ↓
Backend
  ↓
JSON
  ↓
Astro
  ↓
HTML
```

Supongamos que tienes:

```http
GET /api/products
```

La API podría devolver:

```json
[
  {
    "id": 1,
    "name": "Laptop"
  },
  {
    "id": 2,
    "name": "Mouse"
  }
]
```

Astro puede obtener esos datos y utilizarlos para generar la página.

### 🧠 Importante

Aquí no necesitas volver a estudiar qué es una API REST.

La idea de este apartado es entender:

> **Cómo conecta Astro con una API REST existente.**

---

# 6️⃣ 📡 FETCH

`fetch()` permite realizar solicitudes HTTP desde JavaScript.

En Astro puede utilizarse, por ejemplo, para obtener datos durante el procesamiento de una página.

```astro
---
const response = await fetch('https://api.example.com/products');
const products = await response.json();
---

<h1>Productos</h1>

<ul>
  {products.map(product => (
    <li>{product.name}</li>
  ))}
</ul>
```

El flujo sería:

```text
fetch()
   ↓
API
   ↓
Response
   ↓
response.json()
   ↓
Datos
   ↓
HTML
```

### 🧠 Punto importante

Dependiendo de **dónde** ejecutes `fetch()`, la solicitud puede realizarse en el servidor o en el navegador.

Por eso es importante distinguir:

```text
SERVER
   ↓
fetch()
```

de:

```text
BROWSER
   ↓
fetch()
```

Esto también afecta la seguridad de credenciales y tokens.

---

# 7️⃣ 🔐 JWT

Aquí **no necesitas volver a estudiar qué es JWT**.

La teoría general está en tu documento:

```text
📁 JSON-WEB-TOKENS
```

En Astro debes estudiar principalmente **cómo utilizar JWT dentro de una aplicación Astro**.

Por ejemplo:

```text
Usuario
   ↓
Login
   ↓
Backend
   ↓
JWT
   ↓
Astro
   ↓
Guardar / gestionar autenticación
   ↓
Solicitar recursos protegidos
```

Un caso típico:

```text
Astro
   ↓
GET /api/profile
   ↓
Authorization: Bearer <token>
   ↓
Backend
   ↓
Validación JWT
   ↓
Datos
```

### 🧠 Lo que debes aprender aquí

* dónde obtener el token
* dónde almacenarlo
* cómo enviarlo
* cómo proteger páginas
* cómo proteger requests
* cómo manejar una sesión autenticada

La teoría de:

* JWT
* claims
* access tokens
* refresh tokens
* firma
* expiración

permanece en tu documentación de JWT.

---

# 8️⃣ 🍪 COOKIES

Las **cookies** permiten almacenar pequeños datos asociados al navegador y enviarlos posteriormente al servidor.

En aplicaciones Astro pueden utilizarse para manejar información relacionada con sesiones.

Conceptualmente:

```text
Usuario
   ↓
Login
   ↓
Servidor
   ↓
Set-Cookie
   ↓
Browser
   ↓
Cookie
   ↓
Siguiente request
   ↓
Servidor
```

Por ejemplo:

```http
Set-Cookie: session=abc123
```

Posteriormente:

```http
Cookie: session=abc123
```

### 🔐 Cookies para autenticación

En sistemas de autenticación pueden utilizarse cookies con propiedades de seguridad como:

```text
HttpOnly
Secure
SameSite
```

Estas propiedades ayudan a reducir determinados riesgos de seguridad.

### 🧠 Importante

No confundas:

```text
Cookie
```

con:

```text
JWT
```

Una cookie es un **mecanismo de almacenamiento/transporte asociado al navegador**.

JWT es un **formato de token**.

Un JWT incluso puede almacenarse dentro de una cookie.

```text
JWT
 │
 └── puede viajar/guardarse en
             ↓
          Cookie
```

---

# 9️⃣ 🔑 AUTHENTICATION

Astro puede integrarse con diferentes sistemas de autenticación.

El objetivo es determinar:

```text
¿Quién es el usuario?
        ↓
¿Está autenticado?
        ↓
¿Qué puede acceder?
```

Un flujo típico podría ser:

```text
Usuario
   ↓
Login
   ↓
Backend / Auth Provider
   ↓
Sesión
   ↓
Cookie / Token
   ↓
Astro
   ↓
Usuario autenticado
```

### 🛡️ Protección de páginas

Por ejemplo:

```text
/dashboard
```

podría requerir autenticación.

Conceptualmente:

```text
Usuario solicita /dashboard
              ↓
       ¿Está autenticado?
          /          \
        NO            SÍ
        ↓              ↓
     Login          Dashboard
```

### 🎯 Lo que debes estudiar

En este bloque interesa entender:

* cómo detectar una sesión
* cómo proteger páginas
* cómo manejar usuarios autenticados
* cómo conectar Astro con un backend de autenticación
* cómo trabajar con cookies o tokens
* cómo controlar acceso

No necesitas repetir toda la teoría de autenticación de tus apuntes anteriores.

---

# 🔟 🛠️ INTEGRACIONES DE ASTRO

Astro utiliza **integraciones** para añadir funcionalidades al proyecto.

Conceptualmente:

```text
             ASTRO
               │
       ┌───────┼────────┐
       ▼       ▼        ▼
    React     Vue     Svelte
       │       │        │
       └───────┼────────┘
               ▼
          Integrations
```

Una integración puede añadir o configurar capacidades específicas dentro del proyecto.

Por ejemplo:

```text
Astro
 │
 ├── React integration
 ├── Vue integration
 ├── Svelte integration
 ├── SSR adapter
 └── otras integraciones
```

### 🧠 ¿Por qué existen?

Porque Astro mantiene su núcleo relativamente independiente y permite agregar capacidades según las necesidades del proyecto.

Esto evita tener que incluir funcionalidades que no necesitas.

---

# 🧠 ¿CÓMO SE RELACIONA TODO?

Puedes imaginar una aplicación Astro real así:

```text
                         🌐 ASTRO
                            │
          ┌─────────────────┼─────────────────┐
          │                 │                 │
          ▼                 ▼                 ▼
       UI / Islands       Backend            Auth
          │                 │                 │
    ┌─────┼─────┐           │           ┌─────┴─────┐
    ▼     ▼     ▼           ▼           ▼           ▼
 React   Vue  Svelte      REST API     JWT        Cookies
    │     │     │           │           │           │
    └─────┼─────┘           │           └─────┬─────┘
          │                 │                 │
          └─────────────────┼─────────────────┘
                            ▼
                          fetch()
```

### 🎯 Idea clave

> **Las integraciones permiten que Astro se conecte con otras tecnologías sin perder su modelo principal: generar HTML y utilizar JavaScript solo donde sea necesario.**

Y recuerda la separación de tus apuntes:

```text
📁 JSON-WEB-TOKENS
   └── Teoría de JWT

📁 SWAGGER
   └── Teoría de Swagger / OpenAPI

📁 ASTRO
   └── Cómo utilizar JWT / APIs / Swagger
       dentro de una aplicación Astro
```

Así evitas repetir teoría y cada documento responde a una pregunta diferente: **qué es la tecnología** vs. **cómo se utiliza dentro de Astro**.
