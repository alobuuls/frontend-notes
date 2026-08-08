# 📩 REQUESTS & RESPONSES

En Express, una petición HTTP llega al servidor como un objeto `req` (**request**) y el servidor responde utilizando un objeto `res` (**response**).

La idea central de este documento es aprender a **leer la información que envía el cliente** y a **construir correctamente la respuesta que recibe**.

---

## 📑 ÍNDICE — REQUESTS & RESPONSES

- [📩 REQUESTS \& RESPONSES](#-requests--responses)
  - [📑 ÍNDICE — REQUESTS \& RESPONSES](#-índice--requests--responses)
- [1️⃣ 📥 REQUEST OBJECT](#1️⃣--request-object)
    - [🧠 Ejemplo](#-ejemplo)
- [2️⃣ 📤 RESPONSE OBJECT](#2️⃣--response-object)
- [3️⃣ 🆔 `req.params`](#3️⃣--reqparams)
    - [🧠 Varios parámetros](#-varios-parámetros)
- [4️⃣ 🔎 `req.query`](#4️⃣--reqquery)
    - [🧠 ¿Para qué se utilizan?](#-para-qué-se-utilizan)
- [5️⃣ 📦 `req.body`](#5️⃣--reqbody)
    - [⚠️ Importante](#️-importante)
- [6️⃣ 📋 `req.headers`](#6️⃣--reqheaders)
    - [🔐 Ejemplo con JWT](#-ejemplo-con-jwt)
- [7️⃣ 🍪 `req.cookies`](#7️⃣--reqcookies)
    - [🧠 Uso común](#-uso-común)
- [8️⃣ 🔢 `res.status()`](#8️⃣--resstatus)
    - [🧠 Ejemplos comunes](#-ejemplos-comunes)
- [9️⃣ 📦 `res.json()`](#9️⃣--resjson)
    - [🧠 Con status](#-con-status)
- [🔟 📤 `res.send()`](#--ressend)
    - [🧠 Diferencia básica](#-diferencia-básica)
- [1️⃣1️⃣ ⛔ `res.end()`](#1️⃣1️⃣--resend)
- [1️⃣2️⃣ 📋 RESPONSE HEADERS](#1️⃣2️⃣--response-headers)
    - [🧠 Ejemplo](#-ejemplo-1)
- [🆚 PATH PARAMETERS VS QUERY PARAMETERS VS BODY](#-path-parameters-vs-query-parameters-vs-body)
  - [🆔 PATH PARAMETER](#-path-parameter)
    - [🧠 ¿Para qué?](#-para-qué)
- [🔎 QUERY PARAMETER](#-query-parameter)
    - [🧠 ¿Para qué?](#-para-qué-1)
- [📦 REQUEST BODY](#-request-body)
    - [🧠 ¿Para qué?](#-para-qué-2)
- [🧠 COMPARACIÓN DIRECTA](#-comparación-directa)
- [🎯 EJEMPLO COMPLETO](#-ejemplo-completo)
- [🧠 MODELO MENTAL](#-modelo-mental)

---

# 1️⃣ 📥 REQUEST OBJECT

El objeto `req` representa la **petición HTTP que recibió Express**.

Express lo proporciona automáticamente al handler:

```js
app.get('/users', (req, res) => {
  // req contiene información sobre la petición
});
```

El objeto `req` contiene información como:

```text
req
│
├── params
├── query
├── body
├── headers
├── cookies
└── ...
```

### 🧠 Ejemplo

Si llega:

```http
GET /users/123?active=true
Authorization: Bearer token
```

`req` permite acceder a las diferentes partes de esa petición.

```js
req.params
req.query
req.headers
```

📌 `req` **lee información del cliente**.

---

# 2️⃣ 📤 RESPONSE OBJECT

El objeto `res` representa la **respuesta que Express enviará al cliente**.

```js
app.get('/users', (req, res) => {
  res.json({
    message: 'Users found'
  });
});
```

Con `res` podemos controlar:

* 🔢 Status code
* 📦 Response body
* 📋 Response headers
* ⛔ Finalizar la respuesta

```text
req
 ↓
Express procesa
 ↓
res
 ↓
Cliente
```

📌 `res` **construye la respuesta que recibe el cliente**.

---

# 3️⃣ 🆔 `req.params`

`req.params` contiene los **Route Parameters** definidos en la ruta mediante `:`.

Ruta:

```js
app.get('/users/:id', (req, res) => {
  console.log(req.params);
});
```

Request:

```text
GET /users/123
```

Resultado:

```js
req.params
```

```json
{
  "id": "123"
}
```

Para obtener únicamente el `id`:

```js
req.params.id
```

### 🧠 Varios parámetros

```js
app.get('/users/:userId/posts/:postId', (req, res) => {
  console.log(req.params.userId);
  console.log(req.params.postId);
});
```

Request:

```text
/users/10/posts/25
```

Resultado:

```js
req.params.userId // "10"
req.params.postId // "25"
```

📌 Los parámetros de ruta forman parte del **path** de la URL.

---

# 4️⃣ 🔎 `req.query`

`req.query` contiene los **Query Parameters** enviados después de `?`.

Por ejemplo:

```text
GET /users?page=2&limit=10
```

Express permite acceder a ellos mediante:

```js
req.query
```

Resultado conceptual:

```js
{
  page: '2',
  limit: '10'
}
```

También puedes acceder individualmente:

```js
req.query.page
req.query.limit
```

### 🧠 ¿Para qué se utilizan?

Son muy comunes para:

* 🔎 Búsquedas
* 📄 Paginación
* ↕️ Ordenamiento
* 🎯 Filtros
* ⚙️ Opciones de consulta

Ejemplo:

```text
GET /users?country=colombia&active=true
```

```js
req.query.country
req.query.active
```

---

# 5️⃣ 📦 `req.body`

`req.body` contiene los datos enviados en el **body de la request**.

Es especialmente común con:

```text
POST
PUT
PATCH
```

Por ejemplo:

```http
POST /users
Content-Type: application/json

{
  "name": "Alo",
  "email": "alo@example.com"
}
```

En Express:

```js
app.post('/users', (req, res) => {
  console.log(req.body);
});
```

Resultado:

```js
{
  name: 'Alo',
  email: 'alo@example.com'
}
```

### ⚠️ Importante

Para recibir JSON, Express normalmente necesita el middleware:

```js
app.use(express.json());
```

Sin él, Express no procesará automáticamente un JSON enviado en el body.

---

# 6️⃣ 📋 `req.headers`

`req.headers` contiene los **headers enviados por el cliente**.

Por ejemplo:

```http
GET /users
Authorization: Bearer eyJ...
Accept: application/json
```

Podemos acceder a ellos:

```js
req.headers
```

O individualmente:

```js
req.headers.authorization
req.headers.accept
```

### 🔐 Ejemplo con JWT

```js
const authorization = req.headers.authorization;
```

Podríamos recibir:

```text
Bearer eyJhbGciOiJIUzI1NiIs...
```

📌 Los headers se utilizan para transportar **información adicional sobre la petición**, como autenticación, tipo de contenido y preferencias.

---

# 7️⃣ 🍪 `req.cookies`

`req.cookies` contiene las cookies que el cliente envía al servidor.

Para trabajar cómodamente con cookies en Express suele utilizarse:

```bash
npm install cookie-parser
```

Después:

```js
const cookieParser = require('cookie-parser');

app.use(cookieParser());
```

Entonces:

```js
app.get('/profile', (req, res) => {
  console.log(req.cookies);
});
```

Si el navegador envía:

```http
Cookie: sessionId=abc123
```

podemos acceder a:

```js
req.cookies.sessionId
```

Resultado:

```text
abc123
```

### 🧠 Uso común

Las cookies pueden utilizarse para:

* 🔐 Sesiones
* 🎟️ Tokens
* ⚙️ Preferencias
* 🧠 Información persistente del cliente

---

# 8️⃣ 🔢 `res.status()`

`res.status()` permite establecer el **HTTP Status Code** de la respuesta.

```js
res.status(200);
```

Normalmente se combina con otro método para finalizar la respuesta:

```js
res.status(200).json({
  message: 'Success'
});
```

Ejemplo de creación:

```js
res.status(201).json({
  message: 'User created'
});
```

### 🧠 Ejemplos comunes

```js
res.status(200); // OK
res.status(201); // Created
res.status(204); // No Content
res.status(400); // Bad Request
res.status(401); // Unauthorized
res.status(403); // Forbidden
res.status(404); // Not Found
res.status(500); // Internal Server Error
```

---

# 9️⃣ 📦 `res.json()`

`res.json()` envía una respuesta en formato **JSON**.

```js
app.get('/users', (req, res) => {
  res.json({
    id: 1,
    name: 'Alo'
  });
});
```

El cliente recibe:

```json
{
  "id": 1,
  "name": "Alo"
}
```

Es uno de los métodos más utilizados al crear **REST APIs** con Express.

### 🧠 Con status

```js
res.status(200).json({
  message: 'Users found',
  data: users
});
```

---

# 🔟 📤 `res.send()`

`res.send()` envía una respuesta al cliente.

Puede utilizarse con diferentes tipos de contenido:

```js
res.send('Hello World');
```

También:

```js
res.send({
  message: 'Hello'
});
```

Express puede determinar cómo responder según el contenido enviado.

### 🧠 Diferencia básica

```js
res.send('Hello');
```

👉 Envía contenido.

```js
res.json({
  message: 'Hello'
});
```

👉 Envía específicamente una respuesta JSON.

📌 Para APIs REST, `res.json()` suele ser más explícito y habitual cuando estás devolviendo datos estructurados.

---

# 1️⃣1️⃣ ⛔ `res.end()`

`res.end()` **finaliza la respuesta HTTP**.

```js
res.end();
```

Puede utilizarse cuando no necesitas enviar un body.

Por ejemplo:

```js
app.delete('/users/:id', (req, res) => {
  // eliminar usuario...
  res.status(204).end();
});
```

Aquí:

```text
204
 ↓
No Content
 ↓
end()
```

📌 `res.end()` indica que la respuesta terminó.

---

# 1️⃣2️⃣ 📋 RESPONSE HEADERS

Los **Response Headers** son headers que el servidor envía al cliente.

Puedes establecerlos con:

```js
res.set()
```

Por ejemplo:

```js
res.set('X-App-Version', '1.0.0');
```

También puedes utilizar:

```js
res.set({
  'X-App-Version': '1.0.0',
  'Cache-Control': 'no-cache'
});
```

Después puedes enviar la respuesta:

```js
res.json({
  message: 'Hello'
});
```

### 🧠 Ejemplo

```http
HTTP/1.1 200 OK
Content-Type: application/json
X-App-Version: 1.0.0
```

Los headers pueden proporcionar información sobre:

* 📦 Tipo de contenido
* 💾 Caché
* 🔐 Seguridad
* 🌐 CORS
* ⚙️ Configuración de la respuesta

---

# 🆚 PATH PARAMETERS VS QUERY PARAMETERS VS BODY

Esta es una de las diferencias **más importantes** que debes aprender.

---

## 🆔 PATH PARAMETER

Ejemplo:

```text
/users/123
```

Ruta:

```js
app.get('/users/:id', (req, res) => {
  console.log(req.params.id);
});
```

Se obtiene mediante:

```js
req.params.id
```

### 🧠 ¿Para qué?

Para identificar **un recurso específico**.

```text
/users/123
       ↑
       recurso específico
```

---

# 🔎 QUERY PARAMETER

Ejemplo:

```text
/users?id=123
```

Se obtiene mediante:

```js
req.query.id
```

### 🧠 ¿Para qué?

Para proporcionar **opciones, filtros o parámetros de consulta**.

Por ejemplo:

```text
/users?country=colombia&active=true
```

Aquí:

```text
country → filtro
active  → filtro
```

---

# 📦 REQUEST BODY

Ejemplo:

```http
POST /users

{
  "name": "Alo",
  "email": "alo@example.com"
}
```

Se obtiene mediante:

```js
req.body
```

### 🧠 ¿Para qué?

Para enviar **datos que forman parte de la información que se quiere crear o modificar**.

---

# 🧠 COMPARACIÓN DIRECTA

| Tipo               | Ejemplo                     | Express                     | Uso principal                           |
| ------------------ | --------------------------- | --------------------------- | --------------------------------------- |
| 🆔 Path Parameter  | `/users/123`                | `req.params.id`             | Identificar un recurso                  |
| 🔎 Query Parameter | `/users?id=123`             | `req.query.id`              | Consultar, filtrar o modificar opciones |
| 📦 Request Body    | `{ "name": "Alo" }`         | `req.body`                  | Enviar datos                            |
| 📋 Header          | `Authorization: Bearer ...` | `req.headers.authorization` | Información adicional                   |
| 🍪 Cookie          | `sessionId=abc`             | `req.cookies.sessionId`     | Datos enviados mediante cookies         |

---

# 🎯 EJEMPLO COMPLETO

Imagina esta request:

```http
POST /users/123?notify=true
Authorization: Bearer TOKEN
Content-Type: application/json
Cookie: sessionId=abc123

{
  "name": "Alo",
  "email": "alo@example.com"
}
```

Express puede acceder a cada parte:

```js
app.post('/users/:id', (req, res) => {

  console.log(req.params.id);
  // "123"

  console.log(req.query.notify);
  // "true"

  console.log(req.headers.authorization);
  // "Bearer TOKEN"

  console.log(req.cookies.sessionId);
  // "abc123"

  console.log(req.body);
  // {
  //   name: "Alo",
  //   email: "alo@example.com"
  // }

  res.status(200).json({
    message: 'User updated'
  });
});
```

Visualmente:

```text
POST /users/123?notify=true
        │       │
        │       └──── req.query
        │
        └──────────── req.params

Headers
   ↓
req.headers

Cookies
   ↓
req.cookies

JSON Body
   ↓
req.body
```

---

# 🧠 MODELO MENTAL

Piensa en `req` como **todo lo que el cliente está enviando**:

```text
                    📥 REQUEST
                        │
              ┌─────────┴─────────┐
              │                   │
           req.params         req.query
              │                   │
       /users/:id           ?page=2
              │
              └─────────┬─────────┘
                        │
                    req.body
                        │
                  { ...datos }
                        │
              ┌─────────┴─────────┐
              ▼                   ▼
         req.headers         req.cookies
```

Y `res` como **todo lo que el servidor está devolviendo**:

```text
                    📤 RESPONSE
                        │
              ┌─────────┼─────────┐
              ▼         ▼         ▼
         res.status() res.json() Headers
              │         │
              │         └── Body
              │
              └── Status Code
```

> [!IMPORTANT]
> 🧠 **`req` = leer la petición del cliente.**
> 📤 **`res` = construir la respuesta del servidor.**
>
> Y recuerda esta diferencia:
>
> ```text
> /users/:id       → req.params
> /users?id=123    → req.query
> { "id": 123 }    → req.body
> ```
>
> Los tres pueden contener información relacionada con un usuario, pero **representan mecanismos diferentes para transportar esa información**.
