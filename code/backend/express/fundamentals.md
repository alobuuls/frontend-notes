# 🧠 EXPRESS FUNDAMENTALS

Express es uno de los frameworks más utilizados para construir aplicaciones web y APIs sobre Node.js.

Este documento busca construir el **modelo mental básico de Express** antes de entrar en temas como routing, middleware, autenticación o bases de datos.

---
# 📚 ÍNDICE — EXPRESS FUNDAMENTALS

1. 🧠 [¿Qué es Express?](#1--qué-es-express)
2. 🆚 [Node.js vs Express](#2--nodejs-vs-express)
3. 🏗️ [Express como Framework](#3-️-express-como-framework)
4. 🚀 [Ventajas de Express](#4--ventajas-de-express)
5. 📦 [Instalación](#5--instalación)
6. 🏗️ [Crear una Aplicación Express](#6-️-crear-una-aplicación-express)
7. 🗂️ [Estructura Básica de una Aplicación](#7-️-estructura-básica-de-una-aplicación)
8. 🧩 [`app`](#8--app)
9. 🚀 [`app.listen()`](#9--applisten)
10. 🔄 [Request Lifecycle](#10--request-lifecycle)
11. 🧠 [Modelo Mental de Express](#-modelo-mental-de-express)

---

# 1️⃣ 🧠 ¿QUÉ ES EXPRESS?

Express es un **framework web para Node.js** que facilita la creación de:

* 🌐 Aplicaciones web
* 🔌 APIs REST
* 🛣️ Rutas y endpoints
* 🧩 Middleware
* 🔐 Sistemas de autenticación
* 📦 Servidores HTTP

Express no reemplaza a Node.js.

Más bien, proporciona herramientas y una estructura que hacen mucho más sencillo trabajar con el servidor HTTP de Node.js.

### 🧠 Idea mental

```text
Node.js
   ↓
Servidor HTTP
   ↓
Express
   ↓
Routes + Middleware + APIs
```

Sin Express, tendrías que trabajar directamente con muchas de las APIs de Node.js.

Con Express, puedes construir el servidor de una forma mucho más sencilla y organizada.

---

# 2️⃣ 🆚 NODE.JS VS EXPRESS

Es importante no confundirlos.

### 🟢 Node.js

Node.js es el **runtime** que permite ejecutar JavaScript fuera del navegador.

Por ejemplo:

```text
Browser
   ↓
JavaScript
   ↓
Frontend
```

Mientras que:

```text
Node.js
   ↓
JavaScript
   ↓
Backend
```

Node.js proporciona funcionalidades para trabajar con:

* HTTP
* Archivos
* Procesos
* Networking
* Streams
* Módulos
* Sistema operativo

---

### ⚡ Express

Express es un **framework construido sobre Node.js**.

Proporciona herramientas para simplificar el desarrollo de aplicaciones web y APIs.

```text
Node.js
   ↓
Express
   ↓
Application
```

### 🎯 Diferencia fundamental

| Node.js                            | Express                       |
| ---------------------------------- | ----------------------------- |
| Runtime                            | Framework                     |
| Ejecuta JavaScript                 | Facilita construir servidores |
| Proporciona APIs de bajo nivel     | Proporciona abstracciones     |
| Puede crear servidores HTTP        | Simplifica servidores HTTP    |
| Base sobre la que funciona Express | Funciona sobre Node.js        |

> [!IMPORTANT]
> **Express necesita Node.js.** No son tecnologías competidoras: Express utiliza Node.js como entorno de ejecución.

---

# 3️⃣ 🏗️ EXPRESS COMO FRAMEWORK

Un **framework** proporciona herramientas y estructuras para desarrollar aplicaciones siguiendo determinados patrones.

Express proporciona principalmente:

```text
Express
 │
 ├── 🛣️ Routing
 ├── 🧩 Middleware
 ├── 📥 Request handling
 ├── 📤 Response handling
 └── 🔌 API development
```

Por ejemplo, podemos definir:

```text
GET /users
```

y decirle a Express qué debe hacer cuando alguien solicite ese endpoint.

```text
Client
   │
   │ GET /users
   ▼
Express
   │
   ▼
Route
   │
   ▼
Controller / Logic
   │
   ▼
Response
```

---

# 4️⃣ 🚀 VENTAJAS DE EXPRESS

Express es popular porque permite construir servidores y APIs de forma relativamente sencilla.

### 🧩 1. Simplicidad

Su API es pequeña y fácil de aprender.

### 🛣️ 2. Routing

Permite definir fácilmente endpoints:

```text
GET    /users
POST   /users
GET    /users/:id
PUT    /users/:id
DELETE /users/:id
```

### 🔄 3. Middleware

Permite ejecutar lógica durante el procesamiento de una request.

Por ejemplo:

```text
Request
   ↓
Middleware
   ↓
Route
   ↓
Response
```

### 🔌 4. APIs REST

Es muy utilizado para crear APIs que posteriormente consumen aplicaciones como:

```text
Angular
React
Ionic
Mobile Apps
Electron
```

### 📦 5. Ecosistema de Node.js

Puede utilizar miles de paquetes disponibles en npm.

---

# 5️⃣ 📦 INSTALACIÓN

Express se instala dentro de un proyecto Node.js.

Primero necesitas tener:

```text
Node.js
npm
```

Después puedes crear un proyecto:

```bash
npm init
```

o:

```bash
npm init -y
```

Y posteriormente instalar Express:

```bash
npm install express
```

Esto genera la dependencia:

```json
"dependencies": {
  "express": "..."
}
```

### 🧠 ¿Qué ocurre?

```text
Proyecto Node.js
      ↓
npm install express
      ↓
Express añadido al proyecto
      ↓
node_modules/
```

---

# 6️⃣ 🏗️ CREAR UNA APLICACIÓN EXPRESS

Una aplicación Express comienza creando una instancia de Express.

Por ejemplo:

```js
const express = require('express');

const app = express();
```

Aquí ocurren dos cosas:

### 📦 Importamos Express

```js
const express = require('express');
```

Obtenemos la funcionalidad de Express.

### 🧩 Creamos la aplicación

```js
const app = express();
```

`app` representa nuestra aplicación Express.

---

# 7️⃣ 🗂️ ESTRUCTURA BÁSICA DE UNA APLICACIÓN

Una aplicación Express puede comenzar siendo muy pequeña:

```text
my-api/
│
├── node_modules/
├── package.json
├── package-lock.json
└── app.js
```

Y `app.js` podría contener:

```js
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000);
```

El flujo sería:

```text
app.js
   ↓
Express
   ↓
Application
   ↓
Route
   ↓
Server
```

En proyectos reales, la estructura normalmente crece y se separan responsabilidades:

```text
src/
├── routes/
├── controllers/
├── services/
├── middlewares/
└── app.js
```

📌 La organización avanzada se estudiará posteriormente.

---

# 8️⃣ 🧩 `app`

`app` es la **instancia principal de nuestra aplicación Express**.

Cuando hacemos:

```js
const app = express();
```

obtenemos un objeto que proporciona métodos para configurar nuestra aplicación.

Por ejemplo:

```js
app.get(...)
app.post(...)
app.use(...)
app.listen(...)
```

Podemos pensar en `app` como el **centro de configuración del servidor**.

```text
             app
              │
      ┌───────┼────────┐
      ▼       ▼        ▼
   Routes  Middleware  Server
```

---

# 9️⃣ 🚀 `app.listen()`

`app.listen()` inicia el servidor y hace que nuestra aplicación pueda recibir requests.

Ejemplo:

```js
app.listen(3000);
```

Esto significa:

```text
Express
   ↓
Inicia servidor
   ↓
Puerto 3000
```

Entonces podemos acceder a:

```text
http://localhost:3000
```

También podemos utilizar un callback:

```js
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

### 🧠 ¿Qué hace el puerto?

El puerto es el punto donde el servidor escucha las conexiones.

```text
localhost
    :
  3000
```

```text
localhost = nuestra máquina
3000      = puerto
```

---

# 🔟 🔄 REQUEST LIFECYCLE

El **request lifecycle** representa el recorrido que realiza una petición desde que llega al servidor hasta que se devuelve una respuesta.

Por ejemplo:

```text
Client
  │
  │ GET /users
  ▼
Express
  │
  ▼
Middleware
  │
  ▼
Route
  │
  ▼
Controller / Logic
  │
  ▼
Response
  │
  ▼
Client
```

### 📥 1. Request

El cliente realiza una petición:

```http
GET /users
```

---

### 🧩 2. Middleware

Express puede ejecutar middleware antes de llegar a la ruta.

Por ejemplo:

```text
Request
   ↓
Logger
   ↓
Authentication
   ↓
Validation
```

---

### 🛣️ 3. Route

Express busca una ruta que coincida con:

```text
GET /users
```

Por ejemplo:

```js
app.get('/users', (req, res) => {
  // ...
});
```

---

### ⚙️ 4. Application Logic

La aplicación ejecuta la lógica necesaria.

Por ejemplo:

```text
Route
  ↓
Controller
  ↓
Service
  ↓
Database
```

---

### 📤 5. Response

Finalmente se devuelve una respuesta:

```json
{
  "success": true,
  "data": []
}
```

El cliente recibe esa respuesta.

---

# 🧠 MODELO MENTAL DE EXPRESS

La idea más importante de estos fundamentos es entender este flujo:

```text
              CLIENT
                 │
                 │ HTTP Request
                 ▼
          ┌─────────────┐
          │   EXPRESS   │
          │     app     │
          └──────┬──────┘
                 │
                 ▼
            Middleware
                 │
                 ▼
               Route
                 │
                 ▼
          Application Logic
                 │
                 ▼
             Response
                 │
                 ▼
              CLIENT
```

Y a nivel tecnológico:

```text
Node.js
   │
   ▼
Express
   │
   ├── app
   ├── routes
   ├── middleware
   └── responses
```

> [!IMPORTANT]
> **Node.js es el runtime; Express es el framework web que se ejecuta sobre Node.js.** Una vez entiendas esta relación, será mucho más fácil comprender cómo funcionan las rutas, middleware, controllers, APIs REST y autenticación en Express.
