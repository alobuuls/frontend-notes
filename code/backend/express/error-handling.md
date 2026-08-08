# 🚨 ERROR HANDLING

El **error handling** es el conjunto de técnicas que utiliza una aplicación para **detectar, manejar y responder correctamente ante errores**.

En una API Express pueden ocurrir errores en prácticamente cualquier parte:

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

Por eso necesitamos una estrategia para capturarlos y devolver respuestas apropiadas al cliente.

---

## 📑 ÍNDICE

- [🚨 ERROR HANDLING](#-error-handling)
  - [📑 ÍNDICE](#-índice)
- [1️⃣ ❌ ¿QUÉ ES UN ERROR?](#1️⃣--qué-es-un-error)
- [2️⃣ 🛑 `try / catch`](#2️⃣--try--catch)
- [3️⃣ ⚡ ASYNC ERRORS](#3️⃣--async-errors)
- [4️⃣ 🧩 ERROR MIDDLEWARE](#4️⃣--error-middleware)
- [5️⃣ 🧱 CUSTOM ERRORS](#5️⃣--custom-errors)
- [6️⃣ 🔄 ERROR PROPAGATION](#6️⃣--error-propagation)
- [7️⃣ 🌐 HTTP ERROR STATUS CODES](#7️⃣--http-error-status-codes)
    - [🧠 Idea clave](#-idea-clave)
- [8️⃣ 📦 ERROR RESPONSES](#8️⃣--error-responses)
- [9️⃣ 🎯 CENTRALIZED ERROR HANDLING](#9️⃣--centralized-error-handling)
    - [🧠 Ventajas](#-ventajas)
- [🔟 🏭 PRODUCTION ERROR HANDLING](#--production-error-handling)
    - [🧠 Regla](#-regla)
- [🔄 FLUJO COMPLETO](#-flujo-completo)
    - [🧠 IDEA CLAVE](#-idea-clave-1)


# 1️⃣ ❌ ¿QUÉ ES UN ERROR?

Un error ocurre cuando una operación **no puede completarse correctamente**.

Ejemplos:

```text
Usuario no existe
        ↓
404 Not Found
```

```text
Datos inválidos
        ↓
400 Bad Request
```

```text
Usuario no autenticado
        ↓
401 Unauthorized
```

```text
Error inesperado del servidor
        ↓
500 Internal Server Error
```

Un error no significa necesariamente que la aplicación completa haya fallado.

La aplicación puede **detectar el error, manejarlo y responder correctamente**.

---

# 2️⃣ 🛑 `try / catch`

JavaScript utiliza `try / catch` para capturar errores que ocurren durante la ejecución.

```js
try {
  // código que puede producir un error
} catch (error) {
  // manejar el error
}
```

Conceptualmente:

```text
try
 ↓
¿Error?
 ├── No → continuar
 └── Sí → catch
```

Por ejemplo:

```js
try {
  const user = await getUser();
} catch (error) {
  console.error(error);
}
```

`catch` recibe el error que ocurrió.

> [!IMPORTANT]
> `try/catch` permite **capturar** un error, pero tú debes decidir posteriormente cómo manejarlo.

---

# 3️⃣ ⚡ ASYNC ERRORS

En Express es muy común trabajar con operaciones asíncronas:

```js
await database.findUser();
```

Estas operaciones pueden fallar.

Por ejemplo:

```text
Controller
    ↓
await Service
    ↓
Database
    ↓
❌ Error
```

Si el error no se maneja correctamente, puede provocar problemas en la ejecución de la request.

Por eso debemos asegurarnos de que los errores de operaciones asíncronas lleguen al sistema de manejo de errores de Express.

Conceptualmente:

```text
Async Operation
      ↓
    Error
      ↓
next(error)
      ↓
Error Middleware
```

---

# 4️⃣ 🧩 ERROR MIDDLEWARE

Express permite crear un middleware específico para manejar errores.

Su firma característica tiene **cuatro parámetros**:

```js
(err, req, res, next)
```

Por ejemplo:

```js
app.use((err, req, res, next) => {
  res.status(500).json({
    message: 'Internal Server Error'
  });
});
```

La diferencia importante es:

```text
Middleware normal
(req, res, next)

Error middleware
(err, req, res, next)
```

El primer parámetro `err` indica que este middleware está destinado a manejar errores.

---

# 5️⃣ 🧱 CUSTOM ERRORS

Una aplicación puede crear errores personalizados para representar situaciones específicas.

Por ejemplo:

```text
UserNotFoundError
ValidationError
UnauthorizedError
ForbiddenError
```

En lugar de lanzar errores genéricos:

```js
throw new Error('User not found');
```

podemos crear una estructura que contenga información adicional:

```text
Error
├── message
├── statusCode
└── type
```

Por ejemplo:

```js
throw new AppError('User not found', 404);
```

Así el error middleware puede saber cómo responder.

---

# 6️⃣ 🔄 ERROR PROPAGATION

**Error propagation** significa hacer que un error viaje desde el lugar donde ocurrió hasta el lugar encargado de manejarlo.

Por ejemplo:

```text
Database
   ↓
Service
   ↓
Controller
   ↓
Error Middleware
```

Imagina:

```text
Database
   ↓
❌ User not found
   ↓
Service
   ↓
Controller
   ↓
Error Middleware
   ↓
404 Response
```

La idea es:

> El código que detecta el error no necesariamente tiene que encargarse de construir la respuesta HTTP.

Esto permite separar responsabilidades.

---

# 7️⃣ 🌐 HTTP ERROR STATUS CODES

Los errores de una API normalmente se comunican mediante **HTTP status codes**.

| Código | Significado           | Ejemplo                                        |
| -----: | --------------------- | ---------------------------------------------- |
|  `400` | Bad Request           | Datos inválidos                                |
|  `401` | Unauthorized          | Falta autenticación                            |
|  `403` | Forbidden             | No tiene permisos                              |
|  `404` | Not Found             | Recurso inexistente                            |
|  `409` | Conflict              | Conflicto de datos                             |
|  `422` | Unprocessable Entity  | Datos sintácticamente correctos pero inválidos |
|  `500` | Internal Server Error | Error inesperado del servidor                  |

### 🧠 Idea clave

```text
4xx
↓
Problema relacionado con la request del cliente

5xx
↓
Problema del servidor
```

---

# 8️⃣ 📦 ERROR RESPONSES

Una API debe devolver respuestas de error **consistentes y útiles**.

Por ejemplo:

```json
{
  "success": false,
  "message": "User not found"
}
```

Para errores de validación puede incluir información adicional:

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "Invalid email"
    }
  ]
}
```

El frontend puede utilizar esta información para mostrar el error apropiadamente.

---

# 9️⃣ 🎯 CENTRALIZED ERROR HANDLING

En lugar de manejar cada error individualmente en cada controller, podemos centralizar el manejo.

Sin centralización:

```text
Controller A → maneja errores
Controller B → maneja errores
Controller C → maneja errores
```

Esto puede producir código repetido e inconsistente.

Con centralización:

```text
Controller A ─┐
Controller B ─┼──→ Error Middleware
Controller C ─┘
```

El **Error Middleware** se convierte en el lugar central donde se transforman los errores en respuestas HTTP.

### 🧠 Ventajas

* Menos código repetido.
* Respuestas consistentes.
* Mejor separación de responsabilidades.
* Más fácil de mantener.
* Más fácil de modificar.

---

# 🔟 🏭 PRODUCTION ERROR HANDLING

En desarrollo podemos necesitar información detallada:

```text
Error
Stack trace
Archivo
Línea
Detalles internos
```

Pero esa información **no debería exponerse al usuario en producción**.

Por ejemplo, no queremos devolver:

```json
{
  "error": "Database password is incorrect at /server/database/config.js:42"
}
```

Una respuesta de producción debería ser más segura:

```json
{
  "success": false,
  "message": "Internal Server Error"
}
```

Mientras que los detalles técnicos pueden registrarse internamente mediante logs.

### 🧠 Regla

```text
Development
↓
Más información para debugging

Production
↓
Respuesta segura para el cliente
+
Detalles en logs internos
```

> [!WARNING]
> Nunca expongas contraseñas, tokens, credenciales, stack traces u otra información interna sensible en las respuestas de producción.

---

# 🔄 FLUJO COMPLETO

El objetivo final es conseguir un flujo centralizado:

```text
Request
   ↓
Route
   ↓
Controller
   ↓
Service
   ↓
Repository
   ↓
Database
   │
   └── ❌ Error
          ↓
     Error Propagation
          ↓
    Error Middleware
          ↓
     HTTP Response
```

Por ejemplo:

```text
GET /users/123
       ↓
   Controller
       ↓
     Service
       ↓
    Database
       ↓
 User doesn't exist
       ↓
   Custom Error
       ↓
Error Middleware
       ↓
404 Not Found
```

### 🧠 IDEA CLAVE

No se trata simplemente de poner `try/catch` por todo el proyecto.

La idea es construir un sistema donde:

```text
❌ Error
   ↓
Se propaga correctamente
   ↓
Error Middleware
   ↓
Se transforma en HTTP Response
   ↓
Frontend recibe una respuesta consistente
```

Así, **cada capa puede concentrarse en su responsabilidad**, mientras que el manejo final de los errores HTTP queda centralizado.
