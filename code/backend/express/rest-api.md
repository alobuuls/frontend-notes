# 📦 REST API

## 📑 ÍNDICE — REST API

- [📦 REST API](#-rest-api)
  - [📑 ÍNDICE — REST API](#-índice--rest-api)
  - [1️⃣ 🌐 ¿QUÉ ES REST?](#1️⃣--qué-es-rest)
- [2️⃣ 📦 RESOURCES](#2️⃣--resources)
    - [Ejemplo](#ejemplo)
- [3️⃣ 🛣️ RESTful ENDPOINTS](#3️⃣-️-restful-endpoints)
- [4️⃣ 🌐 HTTP METHODS](#4️⃣--http-methods)
    - [🧠 Regla mental](#-regla-mental)
- [5️⃣ 📝 CRUD](#5️⃣--crud)
    - [Ejemplo con usuarios](#ejemplo-con-usuarios)
- [6️⃣ 🏷️ RESOURCE NAMING](#6️⃣-️-resource-naming)
    - [✅ Recomendado](#-recomendado)
    - [❌ Menos recomendable](#-menos-recomendable)
    - [📌 Convención](#-convención)
- [7️⃣ 🔢 STATUS CODES](#7️⃣--status-codes)
    - [✅ Éxito](#-éxito)
    - [⚠️ Error del cliente](#️-error-del-cliente)
    - [💥 Error del servidor](#-error-del-servidor)
- [8️⃣ 📤 REQUEST / RESPONSE](#8️⃣--request--response)
    - [Request](#request)
    - [Response](#response)
- [9️⃣ 🧾 JSON](#9️⃣--json)
    - [📌 Request](#-request)
    - [📌 Response](#-response)
- [🔟 🔢 API VERSIONING](#--api-versioning)
    - [Ejemplo](#ejemplo-1)
- [1️⃣1️⃣ 📄 PAGINATION](#1️⃣1️⃣--pagination)
    - [🧠 ¿Por qué?](#-por-qué)
- [1️⃣2️⃣ 🔎 FILTERING](#1️⃣2️⃣--filtering)
- [1️⃣3️⃣ ↕️ SORTING](#1️⃣3️⃣-️-sorting)
- [1️⃣4️⃣ 🔍 SEARCHING](#1️⃣4️⃣--searching)
    - [🧠 Filtering vs Searching](#-filtering-vs-searching)
- [🧠 API REST COMPLETA](#-api-rest-completa)
- [🏗️ EJEMPLO DE API REST](#️-ejemplo-de-api-rest)

## 1️⃣ 🌐 ¿QUÉ ES REST?

**REST** (*Representational State Transfer*) es un estilo de arquitectura para diseñar APIs que permiten que diferentes aplicaciones se comuniquen mediante **HTTP**.

Una API REST organiza la información como **recursos** y utiliza los métodos HTTP para realizar operaciones sobre ellos.

Por ejemplo:

```text
Frontend
   ↓
HTTP Request
   ↓
REST API
   ↓
Backend
   ↓
Database
```

Un recurso podría ser:

```text
/users
/guests
/products
/orders
```

> [!IMPORTANT]
> REST no es una librería ni un framework. Es un conjunto de principios y convenciones para diseñar APIs.

---

# 2️⃣ 📦 RESOURCES

En REST, los datos se representan como **recursos**.

Por ejemplo, si nuestra aplicación administra usuarios:

```text
/users
```

representa el recurso **users**.

Un usuario específico:

```text
/users/123
```

representa el usuario cuyo ID es `123`.

### Ejemplo

```text
/users
   ↓
Colección de usuarios

/users/123
   ↓
Usuario específico
```

Los recursos normalmente se representan mediante **sustantivos**, no acciones.

```text
/users
/products
/orders
```

En lugar de:

```text
/getUsers
/createUser
/deleteUser
```

---

# 3️⃣ 🛣️ RESTful ENDPOINTS

Un **endpoint** es una combinación de:

```text
HTTP Method + URL
```

Por ejemplo:

```http
GET /users
```

Representa una operación sobre el recurso `users`.

Una API RESTful normalmente utiliza los métodos HTTP para indicar **qué operación queremos realizar**.

| Método   | Endpoint     | Acción             |
| -------- | ------------ | ------------------ |
| `GET`    | `/users`     | Obtener usuarios   |
| `GET`    | `/users/123` | Obtener un usuario |
| `POST`   | `/users`     | Crear usuario      |
| `PATCH`  | `/users/123` | Modificar usuario  |
| `DELETE` | `/users/123` | Eliminar usuario   |

---

# 4️⃣ 🌐 HTTP METHODS

Los métodos HTTP indican **qué queremos hacer con un recurso**.

| Método   | Significado            | Ejemplo             |
| -------- | ---------------------- | ------------------- |
| `GET`    | Obtener                | `GET /users`        |
| `POST`   | Crear                  | `POST /users`       |
| `PUT`    | Reemplazar             | `PUT /users/123`    |
| `PATCH`  | Modificar parcialmente | `PATCH /users/123`  |
| `DELETE` | Eliminar               | `DELETE /users/123` |

### 🧠 Regla mental

```text
GET
↓
Quiero información

POST
↓
Quiero crear algo

PUT
↓
Quiero reemplazar algo

PATCH
↓
Quiero modificar parte de algo

DELETE
↓
Quiero eliminar algo
```

---

# 5️⃣ 📝 CRUD

**CRUD** representa las cuatro operaciones fundamentales sobre datos.

| CRUD       | Acción     | HTTP            |
| ---------- | ---------- | --------------- |
| **C**reate | Crear      | `POST`          |
| **R**ead   | Leer       | `GET`           |
| **U**pdate | Actualizar | `PUT` / `PATCH` |
| **D**elete | Eliminar   | `DELETE`        |

### Ejemplo con usuarios

```text
CREATE
POST /users

READ
GET /users

UPDATE
PATCH /users/123

DELETE
DELETE /users/123
```

> [!NOTE]
> CRUD describe la operación sobre los datos. HTTP proporciona los métodos que normalmente utilizamos para representar esas operaciones en una API REST.

---

# 6️⃣ 🏷️ RESOURCE NAMING

Los nombres de los recursos deben ser **claros, consistentes y representar entidades**.

### ✅ Recomendado

```text
/users
/products
/orders
/guests
```

### ❌ Menos recomendable

```text
/getUsers
/createUser
/deleteProduct
/getAllOrders
```

¿Por qué?

Porque la acción ya está representada por el método HTTP.

```http
GET /users
```

ya significa:

> Obtener usuarios.

No necesitamos:

```http
GET /getUsers
```

### 📌 Convención

Normalmente los recursos se escriben como **sustantivos**, frecuentemente en plural:

```text
/users
/products
/orders
```

---

# 7️⃣ 🔢 STATUS CODES

Una API REST utiliza **HTTP status codes** para indicar qué ocurrió con una petición.

### ✅ Éxito

| Código | Significado | Ejemplo                         |
| ------ | ----------- | ------------------------------- |
| `200`  | OK          | Consulta exitosa                |
| `201`  | Created     | Recurso creado                  |
| `204`  | No Content  | Operación exitosa sin contenido |

### ⚠️ Error del cliente

| Código | Significado  | Ejemplo                        |
| ------ | ------------ | ------------------------------ |
| `400`  | Bad Request  | Datos inválidos                |
| `401`  | Unauthorized | Falta autenticación            |
| `403`  | Forbidden    | No tiene permisos              |
| `404`  | Not Found    | Recurso inexistente            |
| `409`  | Conflict     | Conflicto con el estado actual |

### 💥 Error del servidor

| Código | Significado           |
| ------ | --------------------- |
| `500`  | Internal Server Error |

Ejemplo:

```http
POST /users
```

Si el usuario se crea correctamente:

```http
201 Created
```

---

# 8️⃣ 📤 REQUEST / RESPONSE

Una API REST funciona mediante un intercambio de:

```text
Request
   ↓
Backend
   ↓
Response
```

### Request

El cliente puede enviar:

```text
Method
URL
Headers
Body
```

Ejemplo:

```http
POST /users
Content-Type: application/json
```

```json
{
  "name": "Ana",
  "email": "ana@example.com"
}
```

### Response

El servidor devuelve:

```text
Status Code
Headers
Body
```

Por ejemplo:

```http
201 Created
```

```json
{
  "id": 123,
  "name": "Ana",
  "email": "ana@example.com"
}
```

---

# 9️⃣ 🧾 JSON

**JSON** (*JavaScript Object Notation*) es uno de los formatos más utilizados para intercambiar información entre frontend y backend.

Ejemplo:

```json
{
  "id": 123,
  "name": "Ana",
  "email": "ana@example.com"
}
```

Un flujo típico sería:

```text
Angular / React
      ↓
JSON
      ↓
Express API
      ↓
JSON
      ↓
Angular / React
```

### 📌 Request

```json
{
  "name": "Ana"
}
```

### 📌 Response

```json
{
  "id": 123,
  "name": "Ana"
}
```

---

# 🔟 🔢 API VERSIONING

El **versionado de una API** permite mantener diferentes versiones de una API cuando existen cambios importantes.

Por ejemplo:

```text
/api/v1/users
/api/v2/users
```

Esto permite que una aplicación que todavía utiliza `v1` pueda seguir funcionando mientras los clientes migran a `v2`.

### Ejemplo

```text
Frontend antiguo
      ↓
/api/v1/users

Frontend nuevo
      ↓
/api/v2/users
```

> [!IMPORTANT]
> El versionado es especialmente importante cuando un cambio rompe la compatibilidad con clientes existentes (*breaking change*).

---

# 1️⃣1️⃣ 📄 PAGINATION

La **paginación** permite dividir grandes cantidades de datos en varias páginas.

En lugar de devolver:

```text
10,000 usuarios
```

la API puede devolver:

```text
20 usuarios
```

por página.

Un ejemplo común:

```http
GET /users?page=2&limit=20
```

Significa:

```text
page = 2
limit = 20
```

Es decir:

> Dame la segunda página con hasta 20 usuarios.

### 🧠 ¿Por qué?

Evita enviar cantidades enormes de información innecesariamente.

```text
10,000 registros
      ↓
❌ Una sola respuesta enorme

      vs

20 registros
      ↓
Página 1
Página 2
Página 3
...
```

---

# 1️⃣2️⃣ 🔎 FILTERING

**Filtering** permite solicitar únicamente los recursos que cumplen determinadas condiciones.

Ejemplo:

```http
GET /products?category=books
```

La API puede interpretar:

> Dame los productos cuya categoría sea `books`.

Otro ejemplo:

```http
GET /users?country=Mexico
```

---

# 1️⃣3️⃣ ↕️ SORTING

**Sorting** permite controlar el orden en que se devuelven los resultados.

Por ejemplo:

```http
GET /users?sort=name
```

Podemos establecer convenciones para indicar dirección:

```http
GET /users?sort=name&order=asc
```

o:

```http
GET /users?sort=name&order=desc
```

Donde:

```text
asc
↓
ascendente

desc
↓
descendente
```

> [!NOTE]
> Los nombres exactos de los parámetros (`sort`, `order`, etc.) dependen del diseño de la API. Lo importante es entender el concepto.

---

# 1️⃣4️⃣ 🔍 SEARCHING

**Searching** permite buscar recursos que coincidan con un término.

Por ejemplo:

```http
GET /users?search=ana
```

La API podría devolver usuarios cuyo nombre, email u otros campos coincidan con `ana`.

### 🧠 Filtering vs Searching

No son exactamente lo mismo.

```text
Filtering
↓
Quiero recursos que cumplan una condición concreta

/users?country=Mexico
```

```text
Searching
↓
Quiero encontrar recursos relacionados con un término

/users?search=ana
```

---

# 🧠 API REST COMPLETA

Todos estos conceptos pueden trabajar juntos.

Por ejemplo:

```http
GET /users?page=2&limit=20&country=Mexico&search=ana&sort=name&order=asc
```

Aquí tenemos:

```text
/users
   ↓
Resource

?page=2
   ↓
Pagination

&limit=20
   ↓
Pagination

&country=Mexico
   ↓
Filtering

&search=ana
   ↓
Searching

&sort=name
   ↓
Sorting

&order=asc
   ↓
Sorting
```

---

# 🏗️ EJEMPLO DE API REST

Una API para gestionar usuarios podría quedar así:

| Operación          | Método   | Endpoint     |
| ------------------ | -------- | ------------ |
| Obtener usuarios   | `GET`    | `/users`     |
| Obtener usuario    | `GET`    | `/users/:id` |
| Crear usuario      | `POST`   | `/users`     |
| Reemplazar usuario | `PUT`    | `/users/:id` |
| Modificar usuario  | `PATCH`  | `/users/:id` |
| Eliminar usuario   | `DELETE` | `/users/:id` |

Y para consultar:

```text
GET /users
    │
    ├── ?page=2
    ├── &limit=20
    ├── &country=Mexico
    ├── &search=ana
    └── &sort=name
```

---

> [!IMPORTANT]
> La idea central de REST es **trabajar con recursos mediante HTTP**. El recurso se identifica mediante la URL y el método HTTP indica la operación que queremos realizar sobre él.

```text
             REST API
                │
        ┌───────┴────────┐
        ▼                ▼
     RESOURCE          HTTP
        │                │
     /users          GET / POST
     /products       PUT / PATCH
     /orders         DELETE
```

Así puedes pensar en una API REST como:

**Recurso + HTTP Method + Request → Response**.
