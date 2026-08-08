# 📖 SWAGGER & OPENAPI

Este documento se enfoca en **cómo utilizar Swagger/OpenAPI dentro de un proyecto Express** para documentar una API y hacer que otros desarrolladores puedan entenderla y probarla.

La teoría general de Swagger ya está en tu documento de Swagger; aquí nos concentramos en su **integración con Express**.

## 📑 ÍNDICE 

1. 📖 [OPENAPI](#1️⃣-openapi)
2. 🧩 [SWAGGER](#2️⃣-swagger)
3. 📚 [API DOCUMENTATION](#3️⃣-api-documentation)
4. 🛣️ [ENDPOINTS](#4️⃣-endpoints)
5. 📦 [REQUEST SCHEMAS](#5️⃣-request-schemas)
6. 📤 [RESPONSE SCHEMAS](#6️⃣-response-schemas)
7. 🔎 [PARAMETERS](#7️⃣-parameters)
8. 🔐 [AUTHENTICATION DOCUMENTATION](#8️⃣-authentication-documentation)
9. 🖥️ [SWAGGER UI](#9️⃣-swagger-ui)
10. 🧩 [EXPRESS + SWAGGER](#1️⃣0️⃣-express--swagger)
11. 🔄 [FLUJO COMPLETO](#-flujo-completo)
12. 🧠 [IDEA CLAVE](#-idea-clave)

## 1️⃣ 📖 OPENAPI

**OpenAPI** es una especificación que permite describir formalmente una API HTTP.

Define información como:

```text id="7h3k1m"
API
├── Endpoints
├── Methods
├── Parameters
├── Request Bodies
├── Responses
├── Schemas
└── Authentication
```

Por ejemplo, una API podría describirse como:

```text id="2f8n5q"
GET /users
POST /users
GET /users/{id}
```

OpenAPI proporciona una estructura estándar para describir estas operaciones.

### 🧠 Idea clave

```text id="6j4p9v"
Express
   ↓
API
   ↓
OpenAPI Specification
```

OpenAPI describe **qué ofrece tu API**, no implementa la API.

## 2️⃣ 🧩 SWAGGER

**Swagger** es el nombre utilizado para un conjunto de herramientas relacionadas con OpenAPI.

Por ejemplo:

```text id="9m2x7c"
OpenAPI
   ↓
Specification
   ↓
Swagger Tools
   ├── Swagger UI
   ├── Swagger Editor
   └── Swagger tooling
```

En un proyecto Express puedes utilizar estas herramientas para generar una interfaz donde otros desarrolladores puedan explorar tu API.

## 3️⃣ 📚 API DOCUMENTATION

La documentación explica cómo utilizar tu API.

Una buena documentación debería permitir responder:

```text id="3q7v5k"
¿Qué endpoint utilizo?
        ↓
¿Qué método HTTP?
        ↓
¿Qué parámetros necesita?
        ↓
¿Qué body envío?
        ↓
¿Necesita autenticación?
        ↓
¿Qué respuesta recibo?
```

Por ejemplo:

```text id="8w4n2p"
POST /users
```

puede documentar:

```text id="5c9r1x"
Request Body
   ↓
name
email
password

Response
   ↓
201 Created
```

Esto evita que otro desarrollador tenga que leer todo el código de Express para descubrir cómo funciona la API.

## 4️⃣ 🛣️ ENDPOINTS

OpenAPI permite documentar cada endpoint disponible.

Por ejemplo:

```text id="1z6m8q"
/users
/users/{id}
```

Y asociarles sus métodos:

```text id="4p7x3n"
GET    /users
POST   /users

GET    /users/{id}
PATCH  /users/{id}
DELETE /users/{id}
```

La documentación puede explicar para cada operación:

```text id="6v2k9r"
Endpoint
   ↓
HTTP Method
   ↓
Descripción
   ↓
Parameters
   ↓
Request
   ↓
Responses
```

## 5️⃣ 📦 REQUEST SCHEMAS

Un **Request Schema** describe la estructura de los datos que el cliente debe enviar.

Por ejemplo:

```text id="7b5m2x"
POST /users
```

puede recibir:

```json id="9n3q6w"
{
  "name": "Ana",
  "email": "ana@example.com",
  "age": 25
}
```

El schema puede especificar:

```text id="2k8v4p"
UserCreate
├── name → string
├── email → string
└── age → number
```

También puede indicar restricciones como:

```text id="5x1m7c"
required
type
format
minimum
maximum
```

### 🧠 Relación

```text id="8q4j2n"
Frontend
   ↓
Request Body
   ↓
OpenAPI Schema
   ↓
Express
```

Esto permite que el frontend sepa exactamente qué estructura espera el backend.

## 6️⃣ 📤 RESPONSE SCHEMAS

También puedes documentar la estructura de las respuestas.

Por ejemplo:

```http id="4k7m2x"
201 Created
```

con:

```json id="8p3v6n"
{
  "id": 123,
  "name": "Ana",
  "email": "ana@example.com"
}
```

El schema podría ser:

```text id="5q9r1w"
User
├── id → number
├── name → string
└── email → string
```

Así el consumidor de la API sabe qué estructura esperar.

```text id="2m6x8c"
Express
   ↓
Response
   ↓
OpenAPI Response Schema
   ↓
Frontend
```

## 7️⃣ 🔎 PARAMETERS

OpenAPI permite documentar los diferentes tipos de parámetros que puede recibir un endpoint.

| Tipo                | Ejemplo                         | Ubicación                          |
| ------------------- | ------------------------------- | ---------------------------------- |
| **Path Parameter**  | `GET /users/{id}`               | `id` → Path Parameter              |
| **Query Parameter** | `GET /users?page=2&limit=10`    | `page`, `limit` → Query Parameters |
| **Header**          | `Authorization: Bearer <token>` | `Authorization` → Header           |
| **Request Body**    | `{"name": "Ana"}`               | `name` → Request Body              |

### Path Parameter

```text id="9c4w7m"
GET /users/{id}
```

```text id="6v2n8p"
id
↓
Path Parameter
```

### Query Parameter

```text id="3x5q1k"
GET /users?page=2&limit=10
```

```text id="8m7r4v"
page
limit
↓
Query Parameters
```

### Header

```http id="5k9x2c"
Authorization: Bearer <token>
```

```text id="1q6n8w"
Authorization
↓
Header
```

### Request Body

```json id="7p3m5v"
{
  "name": "Ana"
}
```

```text id="4c8r2x"
name
↓
Request Body
```

## 8️⃣ 🔐 AUTHENTICATION DOCUMENTATION

OpenAPI también permite documentar cómo se autentica una API.

Por ejemplo, una API puede utilizar:

```text id="6m2v9q"
Bearer Token
```

Y documentar:

```http id="3x7k5n"
Authorization: Bearer <token>
```

El flujo sería:

```text id="8q4r1m"
Login
  ↓
Access Token
  ↓
Authorization Header
  ↓
Protected Endpoint
```

Swagger UI puede utilizar esta información para permitir introducir las credenciales mediante el botón **Authorize**.

> [!NOTE]
> Aquí no repetimos la teoría de JWT. En este documento estudiamos **cómo documentar la autenticación de una API con OpenAPI/Swagger**.

## 9️⃣ 🖥️ SWAGGER UI

**Swagger UI** transforma una especificación OpenAPI en una interfaz visual e interactiva.

Por ejemplo:

```text id="2n6x8c"
OpenAPI
   ↓
Swagger UI
   ↓
┌───────────────────────────────┐
│ GET    /users                 │
│ POST   /users                 │
│ GET    /users/{id}            │
│ PATCH  /users/{id}            │
│ DELETE /users/{id}            │
└───────────────────────────────┘
```

El desarrollador puede:

* 📖 Leer la documentación.
* 🔎 Explorar endpoints.
* 📦 Ver request schemas.
* 📤 Ver response schemas.
* 🔐 Configurar autenticación.
* ▶️ Probar endpoints.

Por eso es especialmente útil durante el desarrollo de APIs.

## 🔟 🧩 EXPRESS + SWAGGER

En Express puedes integrar Swagger para documentar los endpoints de tu aplicación.

La arquitectura conceptual es:

```text id="8k3m6p"
             Express
                │
                ▼
             REST API
                │
                ▼
          OpenAPI Document
                │
                ▼
           Swagger UI
                │
                ▼
       Frontend Developer
```

Por ejemplo:

```text id="4q7x2n"
Express
  │
  ├── GET /users
  ├── POST /users
  ├── GET /users/:id
  └── DELETE /users/:id
          │
          ▼
      OpenAPI
          │
          ▼
     Swagger UI
```

El objetivo es que la documentación represente correctamente lo que realmente ofrece Express.

## 🔄 FLUJO COMPLETO

Una API Express documentada puede verse así:

```text id="6v9r2c"
                Express
                   │
                   ▼
              REST API
                   │
          ┌────────┴────────┐
          ▼                 ▼
      Endpoints          Schemas
          │                 │
          └────────┬────────┘
                   ▼
                OpenAPI
                   │
                   ▼
             Swagger UI
                   │
                   ▼
          Frontend Developer
```

Por ejemplo, para un endpoint:

```text id="3m8x5q"
POST /users
      ↓
Request Schema
      ↓
Authentication
      ↓
Express
      ↓
Response Schema
      ↓
Swagger UI
```

## 🧠 IDEA CLAVE

Piensa en cada tecnología con una responsabilidad diferente:

| Tecnología         | Responsabilidad                             |
| ------------------ | ------------------------------------------- |
| 🟢 **Express**     | Implementa la API                           |
| 📖 **OpenAPI**     | Describe la API                             |
| 🖥️ **Swagger UI** | Muestra y permite explorar la documentación |
| 👨‍💻 **Frontend** | Consume la API                              |

La relación completa:

```text id="7p4n1w"
Express
   ↓
Implementación
   ↓
OpenAPI
   ↓
Descripción
   ↓
Swagger UI
   ↓
Documentación interactiva
   ↓
Frontend Developer
```

> **Express construye la API; OpenAPI la describe; Swagger UI convierte esa descripción en una documentación interactiva.**
