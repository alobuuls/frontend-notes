# 🛣️ EXPRESS ROUTING

El **routing** es el mecanismo que permite a Express determinar **qué código debe ejecutarse cuando recibe una petición HTTP dirigida a una determinada URL y método**.

En otras palabras:

> 🧠 **Routing = decidir qué hacer con cada request según su método HTTP y su ruta.**

---

# 📚 ÍNDICE — EXPRESS ROUTING

1. 🛣️ [Routes](#1️⃣-routes)
2. 🛠️ [HTTP Methods](#2️⃣-http-methods)
3. 🔎 [`app.get()`](#3️⃣-appget)
4. 📦 [`app.post()`](#4️⃣-apppost)
5. ✏️ [`app.put()`](#5️⃣-appput)
6. 🩹 [`app.patch()`](#6️⃣-apppatch)
7. 🗑️ [`app.delete()`](#7️⃣-appdelete)
8. 🧩 [Route Handlers](#8️⃣-route-handlers)
9. 🆔 [Route Parameters](#9️⃣-route-parameters)
10. 🎯 [Route Matching](#-route-matching)
11. 🧩 [`express.Router()`](#1️⃣1️⃣-expressrouter)
12. 🌳 [Nested Routers](#1️⃣2️⃣-nested-routers)
13. 🗂️ [Route Organization](#1️⃣3️⃣-route-organization)
14. 🧠 [Ejemplo Completo](#-ejemplo-completo)
15. 🎯 [Modelo Mental del Routing](#-modelo-mental-del-routing)

---

# 1️⃣ 🛣️ ROUTES

Una **route** define qué debe hacer la aplicación cuando recibe una determinada combinación de:

```text
HTTP Method + URL
```

Por ejemplo:

```text
GET /users
```

puede significar:

> "Quiero obtener la lista de usuarios."

Mientras que:

```text
POST /users
```

puede significar:

> "Quiero crear un usuario."

### 🧠 Ejemplo

```js
app.get('/users', (req, res) => {
  res.json([]);
});
```

Esta ruta responde únicamente a:

```text
GET /users
```

---

# 2️⃣ 🛠️ HTTP METHODS

Las rutas utilizan métodos HTTP para indicar **qué operación se quiere realizar**.

| Método   | Uso habitual           | Ejemplo           |
| -------- | ---------------------- | ----------------- |
| `GET`    | Obtener datos          | `GET /users`      |
| `POST`   | Crear datos            | `POST /users`     |
| `PUT`    | Reemplazar un recurso  | `PUT /users/1`    |
| `PATCH`  | Modificar parcialmente | `PATCH /users/1`  |
| `DELETE` | Eliminar un recurso    | `DELETE /users/1` |

Por ejemplo, podemos tener varias rutas con la misma URL pero diferentes métodos:

```text
GET    /users
POST   /users
```

Aunque ambas utilizan `/users`, **no son la misma route**, porque el método HTTP es diferente.

---

# 3️⃣ 🔎 `app.get()`

`app.get()` define una ruta que responde a peticiones HTTP `GET`.

```js
app.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'Alo' },
    { id: 2, name: 'Ana' }
  ]);
});
```

Cuando llega:

```http
GET /users
```

Express ejecuta el handler correspondiente.

```text
GET /users
    ↓
app.get()
    ↓
Handler
    ↓
Response
```

---

# 4️⃣ 📦 `app.post()`

`app.post()` define una ruta para peticiones `POST`.

Normalmente se utiliza para **crear recursos**.

```js
app.post('/users', (req, res) => {
  res.status(201).json({
    message: 'User created'
  });
});
```

Request:

```http
POST /users
```

Flujo:

```text
POST /users
    ↓
app.post()
    ↓
Crear usuario
    ↓
201 Created
```

---

# 5️⃣ ✏️ `app.put()`

`app.put()` define una ruta para peticiones `PUT`.

Normalmente se utiliza para **reemplazar completamente un recurso existente**.

```js
app.put('/users/:id', (req, res) => {
  res.json({
    message: 'User replaced'
  });
});
```

Ejemplo:

```http
PUT /users/10
```

Conceptualmente:

```text
Usuario actual
     ↓
PUT
     ↓
Nuevo recurso completo
```

📌 Si solo quieres modificar algunos campos, normalmente utilizarías `PATCH`.

---

# 6️⃣ 🩹 `app.patch()`

`app.patch()` define una ruta para realizar una **modificación parcial**.

```js
app.patch('/users/:id', (req, res) => {
  res.json({
    message: 'User updated'
  });
});
```

Por ejemplo:

```http
PATCH /users/10
```

Podríamos enviar solamente:

```json
{
  "name": "Alo"
}
```

En lugar de enviar todos los datos del usuario.

### 🧠 Diferencia

```text
PUT
 ↓
Reemplazo completo

PATCH
 ↓
Modificación parcial
```

---

# 7️⃣ 🗑️ `app.delete()`

`app.delete()` define una ruta para eliminar un recurso.

```js
app.delete('/users/:id', (req, res) => {
  res.status(204).send();
});
```

Ejemplo:

```http
DELETE /users/10
```

Flujo:

```text
DELETE /users/10
       ↓
app.delete()
       ↓
Eliminar usuario
       ↓
204 No Content
```

---

# 8️⃣ 🧩 ROUTE HANDLERS

Un **route handler** es la función que Express ejecuta cuando una request coincide con una ruta.

Por ejemplo:

```js
app.get('/users', (req, res) => {
  res.json([]);
});
```

Esta parte:

```js
(req, res) => {
  res.json([]);
}
```

es el **route handler**.

### 🧠 `req` y `res`

```text
(req, res)
    │    │
    │    └── Response → respuesta al cliente
    │
    └─────── Request → información enviada por el cliente
```

El handler puede:

* 📥 Leer información de la request.
* 🧠 Ejecutar lógica.
* 🗃️ Consultar una base de datos.
* 📤 Enviar una response.

---

# 9️⃣ 🆔 ROUTE PARAMETERS

Los **Route Parameters** permiten capturar valores dinámicos directamente desde la URL.

Se escriben utilizando `:`.

```js
app.get('/users/:id', (req, res) => {
  console.log(req.params.id);
});
```

Si el cliente solicita:

```text
GET /users/25
```

Express obtiene:

```js
req.params.id
```

con el valor:

```text
25
```

### 🧠 Estructura

```text
/users/:id
       ↑
       parámetro
```

```text
/users/25
       ↑
       valor
```

### Ejemplo con varios parámetros

```js
app.get('/users/:userId/posts/:postId', (req, res) => {
  console.log(req.params.userId);
  console.log(req.params.postId);
});
```

Request:

```text
/users/10/posts/50
```

Resultado:

```js
req.params.userId // "10"
req.params.postId // "50"
```

---

# 🔟 🎯 ROUTE MATCHING

**Route matching** es el proceso mediante el cual Express determina **qué ruta corresponde a una request**.

Supongamos que tenemos:

```js
app.get('/users', ...);

app.get('/users/:id', ...);

app.post('/users', ...);
```

Ahora llegan diferentes requests:

```text
GET /users
```

Coincide con:

```text
GET /users
```

---

```text
GET /users/25
```

Coincide con:

```text
GET /users/:id
```

---

```text
POST /users
```

Coincide con:

```text
POST /users
```

### 🧠 Importante

Express considera **método + ruta**.

Por eso:

```text
GET  /users
POST /users
```

son rutas diferentes.

---

# 1️⃣1️⃣ 🧩 `express.Router()`

Cuando una aplicación empieza a crecer, poner todas las rutas directamente en `app.js` puede resultar difícil de mantener.

Para organizar las rutas podemos utilizar:

```js
express.Router()
```

Ejemplo:

```js
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json([]);
});

router.post('/', (req, res) => {
  res.status(201).json({});
});

module.exports = router;
```

Después podemos conectar ese router a la aplicación:

```js
const usersRouter = require('./routes/users');

app.use('/users', usersRouter);
```

Entonces:

```text
/users
```

se convierte en el prefijo de las rutas del router.

### 🧠 Resultado

Si el router tiene:

```js
router.get('/');
```

la aplicación tendrá:

```text
GET /users
```

Y si tiene:

```js
router.get('/:id');
```

tendremos:

```text
GET /users/:id
```

---

# 1️⃣2️⃣ 🌳 NESTED ROUTERS

Los **Nested Routers** permiten organizar rutas que pertenecen a diferentes niveles de recursos.

Por ejemplo:

```text
/users
/users/:userId/posts
/users/:userId/posts/:postId
```

Podemos tener un router para usuarios:

```js
app.use('/users', usersRouter);
```

Y dentro de él otro router para posts:

```js
router.use('/:userId/posts', postsRouter);
```

Conceptualmente:

```text
/users
   │
   └── /:userId
          │
          └── /posts
                 │
                 └── /:postId
```

Esto resulta útil cuando existen relaciones entre recursos.

Por ejemplo:

```text
User
 └── Posts
      └── Comments
```

---

# 1️⃣3️⃣ 🗂️ ROUTE ORGANIZATION

En una aplicación pequeña podrías tener:

```text
app.js
```

con todas las rutas:

```js
app.get('/users', ...);
app.post('/users', ...);
app.get('/guests', ...);
app.post('/guests', ...);
```

Pero conforme crece el proyecto, es mejor separarlas.

Por ejemplo:

```text
src/
│
├── app.js
│
├── routes/
│   ├── users.routes.js
│   ├── guests.routes.js
│   └── auth.routes.js
│
├── controllers/
│   ├── users.controller.js
│   ├── guests.controller.js
│   └── auth.controller.js
│
└── services/
    ├── users.service.js
    ├── guests.service.js
    └── auth.service.js
```

La idea es separar responsabilidades:

```text
Route
  ↓
Controller
  ↓
Service
  ↓
Database
```

### 🧠 Ejemplo

```text
POST /users
     ↓
users.routes.js
     ↓
users.controller.js
     ↓
users.service.js
     ↓
Database
```

📌 **Routing** se encarga principalmente de determinar **qué endpoint y qué lógica inicial corresponden a una request**. La lógica de negocio puede mantenerse en controllers y services.

---

# 🧠 EJEMPLO COMPLETO

Una API sencilla de usuarios podría tener:

```text
GET    /users
GET    /users/:id
POST   /users
PUT    /users/:id
PATCH  /users/:id
DELETE /users/:id
```

Conceptualmente:

```text
                    USERS
                      │
        ┌─────────────┼─────────────┐
        ▼             ▼             ▼
       GET           POST          DELETE
        │             │             │
   Obtener       Crear usuario   Eliminar
        │
        ▼
   /users/:id
        │
   ┌────┴────┐
   ▼         ▼
  PUT      PATCH
   │         │
Completo   Parcial
```

---

# 🎯 MODELO MENTAL DEL ROUTING

Quédate con esta idea:

```text
                 HTTP REQUEST
                      │
             Method + URL
                      │
                      ▼
                ROUTE MATCHING
                      │
                      ▼
                 EXPRESS ROUTER
                      │
                      ▼
               ROUTE HANDLER
                      │
                      ▼
             CONTROLLER / LOGIC
                      │
                      ▼
                  RESPONSE
```

Y los ejemplos fundamentales:

```text
GET    /users
        ↓
Obtener usuarios

GET    /users/:id
        ↓
Obtener un usuario

POST   /users
        ↓
Crear usuario

PUT    /users/:id
        ↓
Reemplazar usuario

PATCH  /users/:id
        ↓
Modificar parcialmente

DELETE /users/:id
        ↓
Eliminar usuario
```

> [!IMPORTANT]
> Una **route** en Express no es solamente una URL. Es la combinación de **método HTTP + path + handler**. `express.Router()` permite agrupar y organizar estas rutas para que una aplicación grande sea más fácil de mantener.
