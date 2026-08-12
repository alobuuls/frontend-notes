# 📄 03 - HTTP Functions

## 📑 Índice

- [📄 03 - HTTP Functions](#-03---http-functions)
  - [📑 Índice](#-índice)
  - [🌐 ¿Qué es una HTTP Function?](#-qué-es-una-http-function)
  - [📩 Request / Response](#-request--response)
  - [🔀 HTTP Methods](#-http-methods)
  - [🧾 Headers](#-headers)
  - [📦 Body](#-body)
  - [🔎 Query Parameters](#-query-parameters)
  - [🛣️ Path Parameters](#️-path-parameters)
  - [📊 Status Codes](#-status-codes)
  - [🔗 Crear Endpoints HTTP](#-crear-endpoints-http)
  - [💻 Consumir una HTTP Function desde Frontend](#-consumir-una-http-function-desde-frontend)
  - [🔐 Autenticación de HTTP Functions](#-autenticación-de-http-functions)
  - [❌ Manejo de errores](#-manejo-de-errores)
  - [🆚 Express vs HTTP Functions](#-express-vs-http-functions)
  - [⭐ Concepto fundamental](#-concepto-fundamental)

## 🌐 ¿Qué es una HTTP Function?

Una **HTTP Function** es una Cloud Function que se ejecuta cuando recibe una **HTTP request**.

Permite crear endpoints backend sin tener que administrar directamente un servidor Express.

El flujo es:

```text
Angular
   │
   │ HTTP Request
   ▼
Cloud Function
   │
   ▼
Backend Logic
   │
   ▼
Response
   │
   ▼
Angular
```

Conceptualmente:

```text
Angular
   ↓
HTTP Function
   ↓
Backend
```

---

## 📩 Request / Response

Como cualquier endpoint HTTP, una HTTP Function recibe una **request** y produce una **response**.

```text
Request
   ↓
HTTP Function
   ↓
Response
```

La request puede contener:

* Headers
* Body
* Query parameters
* Path parameters

Y la response contiene información como:

* Status code
* Headers
* Response body

---

## 🔀 HTTP Methods

Una HTTP Function puede trabajar con los métodos HTTP habituales:

```text
GET
POST
PUT
PATCH
DELETE
```

Por ejemplo:

```text
GET /users
    ↓
HTTP Function
    ↓
Users
```

o:

```text
POST /users
    ↓
HTTP Function
    ↓
Create User
```

---

## 🧾 Headers

Los **headers** contienen información adicional sobre la request.

Por ejemplo:

```text
Authorization
Content-Type
```

Conceptualmente:

```text
HTTP Request
   ├── Method
   ├── URL
   ├── Headers
   └── Body
```

---

## 📦 Body

El **body** contiene los datos enviados en la request.

Por ejemplo:

```json
{
  "name": "Alo",
  "email": "alo@example.com"
}
```

Es común utilizarlo en operaciones como:

```text
POST
PUT
PATCH
```

---

## 🔎 Query Parameters

Los **query parameters** permiten enviar información como parte de la URL.

Por ejemplo:

```text
GET /users?country=mexico
```

Conceptualmente:

```text
/users
   ↓
?country=mexico
   ↓
Query Parameter
```

---

## 🛣️ Path Parameters

Los **path parameters** forman parte de la ruta.

Por ejemplo:

```text
GET /users/123
```

Aquí:

```text
123
```

puede representar el identificador del usuario.

Conceptualmente:

```text
/users/{userId}
        ↓
      123
```

---

## 📊 Status Codes

La HTTP Function debe devolver un **HTTP status code** que indique el resultado de la operación.

Por ejemplo:

```text
200 → OK
201 → Created
400 → Bad Request
401 → Unauthorized
403 → Forbidden
404 → Not Found
500 → Internal Server Error
```

Esto permite que el frontend interprete correctamente el resultado.

---

## 🔗 Crear Endpoints HTTP

Una HTTP Function puede actuar como un endpoint backend.

Por ejemplo:

```text
POST /users
      ↓
HTTP Function
      ↓
Create User
      ↓
Response
```

Puedes construir diferentes endpoints según la lógica que necesite tu aplicación.

---

## 💻 Consumir una HTTP Function desde Frontend

Desde Angular puedes realizar una HTTP request hacia la Function:

```text
Angular
   ↓
HttpClient
   ↓
HTTP Request
   ↓
Cloud Function
   ↓
Response
   ↓
Angular
```

Por lo tanto, para el frontend puede comportarse conceptualmente como cualquier otro endpoint HTTP.

---

## 🔐 Autenticación de HTTP Functions

Una HTTP Function también puede necesitar comprobar quién está realizando la request.

El flujo puede ser:

```text
Angular
   ↓
HTTP Request
   ↓
Authentication
   ↓
Cloud Function
   ↓
Authorization
   ↓
Backend Logic
```

La Function no debería asumir que cualquier request tiene permiso para ejecutar una operación protegida.

---

## ❌ Manejo de errores

La Function debe manejar correctamente los errores que puedan producirse durante la ejecución.

Conceptualmente:

```text
Request
   ↓
Cloud Function
   ↓
Backend Logic
   ↓
Success / Error
   ↓
HTTP Response
```

Por ejemplo:

```text
User not found
      ↓
404 Not Found
```

o:

```text
Unexpected error
      ↓
500 Internal Server Error
```

---

## 🆚 Express vs HTTP Functions

Aquí está una de las comparaciones más importantes.

Con **Express** normalmente tienes varias capas:

```text
Request
   ↓
Route
   ↓
Controller
   ↓
Service
   ↓
Database
```

Con una HTTP Function puedes tener:

```text
Request
   ↓
Function
   ↓
Backend Logic
   ↓
Database
```

Esto significa que Firebase abstrae parte de la infraestructura que tendrías que administrar con un servidor Express.

---

## ⭐ Concepto fundamental

Debes poder visualizar:

```text
Express

Request
   ↓
Route
   ↓
Controller
   ↓
Service
   ↓
Database
```

vs.

```text
Cloud Functions

Request
   ↓
HTTP Function
   ↓
Backend Logic
   ↓
Database
```

La diferencia principal no es que una HTTP Function deje de ser **backend**.

Sigue siendo código backend; simplemente se ejecuta como una función administrada por la plataforma.
