# 🌐 HTTP & SERVER

Este documento explica **cómo se comunican un cliente y un servidor mediante HTTP** y qué ocurre desde que se realiza una petición hasta que se recibe una respuesta.

---

# 📚 ÍNDICE — HTTP & SERVER

1. 🖥️ [Client / Server](#1️⃣-client--server)
2. 🌐 [HTTP](#2️⃣-http)
3. 📤 [HTTP Request](#3️⃣-http-request)
4. 📥 [HTTP Response](#4️⃣-http-response)
5. 🛠️ [HTTP Methods](#5️⃣-http-methods)
6. 📋 [HTTP Headers](#6️⃣-http-headers)
7. 🔢 [HTTP Status Codes](#7️⃣-http-status-codes)
   - 🟢 [2xx — Success](#-2xx--success)
   - 🔴 [4xx — Client Errors](#-4xx--client-errors)
   - 🔴 [5xx — Server Errors](#-5xx--server-errors)
8. 🔄 [Request Lifecycle](#8️⃣-request-lifecycle)
9. 🖥️ [Server](#9️⃣-server)
10. 🚪 [Port](#🔟-port)
11. 🧠 [Modelo Mental Completo](#-modelo-mental-completo)

---

# 1️⃣ 🖥️ CLIENT / SERVER

La arquitectura **Client / Server** divide las responsabilidades entre dos partes.

### 🖥️ Client

Es quien **inicia la comunicación** realizando una petición.

Ejemplos:

* 🌐 Navegador
* 🅰️ Angular
* ⚛️ React
* 📱 Aplicación móvil
* 🖥️ Electron

### 🖥️ Server

Es quien **recibe la petición, procesa la información y devuelve una respuesta**.

Ejemplo:

```text
Client
   │
   │ Request
   ▼
Server
   │
   │ Response
   ▼
Client
```

### 🧠 Ejemplo real

Si Angular necesita obtener usuarios:

```text
Angular
   │
   │ GET /users
   ▼
Express
   │
   │ consulta datos
   ▼
Database
   │
   ▼
Express
   │
   │ JSON
   ▼
Angular
```

---

# 2️⃣ 🌐 HTTP

**HTTP (HyperText Transfer Protocol)** es el protocolo utilizado para la comunicación entre clientes y servidores en la web.

Define **cómo se envían y reciben los mensajes**.

Por ejemplo:

```text
Client
   │
   │ HTTP Request
   ▼
Server
   │
   │ HTTP Response
   ▼
Client
```

HTTP establece conceptos como:

* 📤 Requests
* 📥 Responses
* 🛣️ Methods
* 📋 Headers
* 📦 Body
* 🔢 Status Codes

### 🔐 HTTPS

Cuando HTTP utiliza **TLS para cifrar la comunicación**, hablamos de HTTPS.

```text
HTTP
 ↓
HTTPS
 ↓
HTTP + cifrado TLS
```

📌 HTTPS protege la información mientras viaja entre cliente y servidor.

---

# 3️⃣ 📤 HTTP REQUEST

Una **HTTP Request** es una petición que el cliente envía al servidor.

Por ejemplo:

```http
GET /users HTTP/1.1
Host: api.example.com
Accept: application/json
```

Una request puede contener diferentes partes:

```text
HTTP Request
│
├── Method
├── URL / Path
├── Headers
└── Body
```

### 🧩 Ejemplo

```http
POST /users HTTP/1.1
Content-Type: application/json

{
  "name": "Alo"
}
```

Aquí:

```text
POST
 ↓
Método

/users
 ↓
Endpoint

Content-Type
 ↓
Header

JSON
 ↓
Body
```

---

# 4️⃣ 📥 HTTP RESPONSE

Una **HTTP Response** es la respuesta que el servidor devuelve al cliente después de procesar una request.

Ejemplo:

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": 1,
  "name": "Alo"
}
```

Una response normalmente contiene:

```text
HTTP Response
│
├── Status Code
├── Headers
└── Body
```

### 🧠 Flujo

```text
Client
   │
   │ Request
   ▼
Server
   │
   │ procesa
   ▼
Response
   │
   ▼
Client
```

---

# 5️⃣ 🛠️ HTTP METHODS

Los **HTTP Methods** indican qué operación quiere realizar el cliente sobre un recurso.

| Método    | Significado                   | Ejemplo           |
| --------- | ----------------------------- | ----------------- |
| `GET`     | Obtener información           | `GET /users`      |
| `POST`    | Crear información             | `POST /users`     |
| `PUT`     | Reemplazar un recurso         | `PUT /users/1`    |
| `PATCH`   | Modificar parcialmente        | `PATCH /users/1`  |
| `DELETE`  | Eliminar información          | `DELETE /users/1` |
| `HEAD`    | Obtener headers sin body      | `HEAD /users`     |
| `OPTIONS` | Consultar opciones soportadas | `OPTIONS /users`  |

### 🧠 CRUD

Los métodos más utilizados en APIs REST suelen relacionarse con CRUD:

```text
CREATE  → POST
READ    → GET
UPDATE  → PUT / PATCH
DELETE  → DELETE
```

📌 `PUT` normalmente representa una actualización/reemplazo completo, mientras que `PATCH` se utiliza para cambios parciales.

---

# 6️⃣ 📋 HTTP HEADERS

Los **Headers** contienen información adicional sobre una request o response.

Por ejemplo:

```http
Content-Type: application/json
Authorization: Bearer TOKEN
Accept: application/json
```

Podemos dividirlos conceptualmente en:

```text
Headers
│
├── Request Headers
│
└── Response Headers
```

### 📤 Request Headers

El cliente los envía al servidor.

Ejemplo:

```http
Authorization: Bearer eyJ...
Content-Type: application/json
```

Pueden indicar:

* 🔐 Credenciales
* 📦 Tipo de contenido
* 🌐 Información del cliente
* 📋 Preferencias de respuesta

### 📥 Response Headers

El servidor los devuelve al cliente.

Ejemplo:

```http
Content-Type: application/json
Cache-Control: no-cache
```

---

# 7️⃣ 🔢 HTTP STATUS CODES

Los **Status Codes** indican el resultado de una request.

Se dividen en cinco categorías:

| Rango | Categoría     | Significado        |
| ----- | ------------- | ------------------ |
| `1xx` | Informational | Información        |
| `2xx` | Success       | Éxito              |
| `3xx` | Redirection   | Redirección        |
| `4xx` | Client Error  | Error del cliente  |
| `5xx` | Server Error  | Error del servidor |

---

## 🟢 2xx — SUCCESS

### `200 OK`

La petición se procesó correctamente.

```text
GET /users
↓
200 OK
```

---

### `201 Created`

El servidor creó correctamente un recurso.

```text
POST /users
↓
201 Created
```

---

### `204 No Content`

La operación fue exitosa, pero no hay contenido que devolver.

Ejemplo típico:

```text
DELETE /users/1
↓
204 No Content
```

---

# 8️⃣ 🔴 4xx — CLIENT ERRORS

Indican que existe un problema relacionado con la petición del cliente.

### `400 Bad Request`

La petición es inválida.

```text
POST /users
↓
Datos incorrectos
↓
400 Bad Request
```

---

### `401 Unauthorized`

El cliente **no está autenticado correctamente**.

Por ejemplo:

```text
Request
 ↓
No JWT
 ↓
401 Unauthorized
```

📌 Significa principalmente:

> **"Necesitas autenticarte correctamente."**

---

### `403 Forbidden`

El cliente está autenticado, pero **no tiene permiso para realizar la operación**.

```text
Usuario autenticado
       ↓
¿Tiene permisos?
       ↓
      NO
       ↓
403 Forbidden
```

### 🧠 Diferencia importante

```text
401
↓
No estás autenticado correctamente

403
↓
Estás autenticado
pero no tienes permiso
```

---

### `404 Not Found`

El recurso solicitado no existe.

```text
GET /users/999
↓
Usuario no encontrado
↓
404 Not Found
```

---

### `409 Conflict`

La petición entra en conflicto con el estado actual del servidor.

Ejemplo:

```text
Crear usuario
email = alo@example.com
       ↓
Ya existe
       ↓
409 Conflict
```

---

# 9️⃣ 🔴 5xx — SERVER ERRORS

Indican que el servidor tuvo un problema al procesar una petición válida.

### `500 Internal Server Error`

Error interno inesperado del servidor.

```text
Client
   ↓
Request
   ↓
Server
   ↓
💥 Error inesperado
   ↓
500 Internal Server Error
```

📌 Normalmente significa que el problema está del lado del backend/servidor.

---

# 🔄 8️⃣ REQUEST LIFECYCLE

El **Request Lifecycle** representa todo el recorrido de una petición.

```text
             CLIENT
                │
                │ HTTP Request
                ▼
         ┌──────────────┐
         │    SERVER    │
         └──────┬───────┘
                │
                ▼
            Receive
                │
                ▼
           Process Request
                │
                ▼
          Application Logic
                │
                ▼
           Generate Response
                │
                ▼
             CLIENT
```

En una API Express podríamos tener:

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
Controller
   │
   ▼
Service
   │
   ▼
Database
   │
   ▼
Response
   │
   ▼
Client
```

### 🧠 Idea clave

Una request **entra al servidor**, atraviesa el procesamiento necesario y finalmente produce una **response**.

---

# 9️⃣ 🖥️ SERVER

Un **server** es un sistema que recibe solicitudes y proporciona algún servicio o recurso.

En una aplicación web:

```text
Client
   ↓
HTTP Request
   ↓
Server
   ↓
Procesamiento
   ↓
HTTP Response
```

Un servidor puede encargarse de:

* 🔐 Autenticación
* 📦 Procesamiento de datos
* 🔌 APIs
* 🗃️ Comunicación con bases de datos
* 📁 Archivos
* 🧠 Lógica de negocio

En tu caso, por ejemplo:

```text
Node.js
   ↓
Express
   ↓
HTTP Server
   ↓
REST API
```

---

# 🔟 🚪 PORT

Un **port** es un número que permite identificar un servicio de red dentro de un dispositivo.

Por ejemplo:

```text
localhost:3000
```

Aquí:

```text
localhost
   ↓
Máquina local

3000
   ↓
Puerto
```

Un mismo equipo puede ejecutar diferentes servicios utilizando diferentes puertos:

```text
Angular
localhost:4200

Express
localhost:3000

Otro servidor
localhost:8080
```

### 🧠 Ejemplo

```text
                 💻 COMPUTER
                     │
        ┌────────────┼────────────┐
        ▼            ▼            ▼
     :4200        :3000         :8080
     Angular      Express       Server
```

El puerto ayuda al sistema operativo a saber **a qué servicio debe entregar una conexión**.

---

# 🧠 MODELO MENTAL COMPLETO

Todo lo estudiado puede resumirse así:

```text
🖥️ CLIENT
    │
    │ HTTP REQUEST
    │
    │ Method
    │ Headers
    │ Body
    ▼
🖥️ SERVER
    │
    │ Port
    │
    ▼
⚙️ APPLICATION
    │
    │ Process
    ▼
📤 HTTP RESPONSE
    │
    │ Status Code
    │ Headers
    │ Body
    ▼
🖥️ CLIENT
```

### 🎯 Lo más importante que debes recordar

| Concepto             | Pregunta que responde                           |
| -------------------- | ----------------------------------------------- |
| 🖥️ Client           | ¿Quién hace la petición?                        |
| 🖥️ Server           | ¿Quién procesa la petición?                     |
| 🌐 HTTP              | ¿Cómo se comunican?                             |
| 📤 Request           | ¿Qué está solicitando el cliente?               |
| 📥 Response          | ¿Qué devuelve el servidor?                      |
| 🛠️ Method           | ¿Qué operación quiere realizar?                 |
| 📋 Headers           | ¿Qué información adicional acompaña el mensaje? |
| 📦 Body              | ¿Qué datos se están enviando?                   |
| 🔢 Status Code       | ¿Cuál fue el resultado?                         |
| 🚪 Port              | ¿A qué servicio debe llegar la conexión?        |
| 🔄 Request Lifecycle | ¿Qué recorrido realiza la petición?             |

> [!IMPORTANT]
> **HTTP es el protocolo de comunicación.** El cliente envía una **Request**, el servidor la procesa y devuelve una **Response**. Los **Methods, Headers, Body y Status Codes** forman parte de ese mecanismo de comunicación.
