# 🧩 MIDDLEWARE EN EXPRESS

## 📑 ÍNDICE — MIDDLEWARE EN EXPRESS

1. [🧠 ¿Qué es Middleware?](#1--qué-es-middleware)
2. [🔄 Middleware Flow](#2--middleware-flow)
3. [📥 `req`](#3--req)
4. [📤 `res`](#4--res)
5. [➡️ `next()`](#5--next)
6. [📋 Orden de Ejecución](#6--orden-de-ejecución)
7. [🌐 Application-Level Middleware](#7--application-level-middleware)
8. [🛣️ Router-Level Middleware](#8--router-level-middleware)
9. [🧰 Built-in Middleware](#9--built-in-middleware)
10. [📦 Third-Party Middleware](#10--third-party-middleware)
11. [✍️ Custom Middleware](#11--custom-middleware)
12. [🔗 Middleware Chain](#12--middleware-chain)
13. [🚨 Error Middleware](#13--error-middleware)
14. [🔄 Flujo Completo](#-flujo-completo)
15. [🧠 Tipos de Middleware](#-tipos-de-middleware)
16. [🎯 Ejemplos de Uso](#-ejemplos-de-uso)
17. [🧠 Idea Clave](#-idea-clave)

---

## 1️⃣ 🧠 ¿QUÉ ES MIDDLEWARE?

Un **middleware** es una función que se ejecuta **durante el procesamiento de una petición HTTP**, antes de que la respuesta final sea enviada al cliente.

Su función principal es **interceptar y procesar la petición** para realizar alguna tarea antes de continuar con la siguiente función.

La idea básica es:

```text
Client
   ↓
Request
   ↓
Middleware
   ↓
Route Handler
   ↓
Response
```

Un middleware puede:

* modificar `req`
* modificar `res`
* ejecutar lógica
* validar información
* autenticar usuarios
* registrar peticiones
* terminar la petición
* pasar el control al siguiente middleware

---

## 2️⃣ 🔄 MIDDLEWARE FLOW

Express procesa los middleware **en el orden en que fueron registrados**.

```text
Request
   ↓
Middleware 1
   ↓
Middleware 2
   ↓
Middleware 3
   ↓
Route
   ↓
Response
```

Por ejemplo:

```ts
app.use(logger);
app.use(auth);
app.use(validate);
app.get('/users', getUsers);
```

El flujo será:

```text
Request
   ↓
logger
   ↓
auth
   ↓
validate
   ↓
GET /users
   ↓
Response
```

> [!IMPORTANT]
> **El orden de los middleware importa.** Un middleware registrado después de una ruta no podrá procesar las peticiones que ya hayan sido manejadas por esa ruta.

---

## 3️⃣ 📥 `req`

`req` representa el **objeto Request**.

Contiene información sobre la petición que realizó el cliente.

Por ejemplo:

```ts
app.use((req, res, next) => {
  console.log(req.method);
  console.log(req.url);

  next();
});
```

El middleware puede leer información de `req` y también puede agregar información personalizada:

```ts
req.user = user;
```

Esto permite que un middleware prepare información que posteriormente utilizará otro middleware o un controller.

---

## 4️⃣ 📤 `res`

`res` representa el **objeto Response**.

Permite enviar una respuesta al cliente.

Por ejemplo:

```ts
app.use((req, res, next) => {
  res.status(200).json({
    message: 'OK'
  });
});
```

Un middleware puede utilizar `res` para **finalizar la petición**.

Si la petición termina aquí, no debe llamar a `next()`.

---

## 5️⃣ ➡️ `next()`

`next()` es la función que permite pasar el control al **siguiente middleware o handler**.

```ts
app.use((req, res, next) => {
  console.log('Middleware ejecutado');

  next();
});
```

El flujo sería:

```text
Request
   ↓
Middleware
   ↓
next()
   ↓
Siguiente middleware
```

### 📌 ¿Qué pasa si NO llamas `next()`?

Si el middleware tampoco envía una respuesta, la petición puede quedar **pendiente**.

```ts
app.use((req, res, next) => {
  console.log('Hola');

  // ❌ No next()
  // ❌ No res.json()
});
```

El cliente puede quedarse esperando indefinidamente.

### 🧠 Regla mental

Un middleware normalmente hace una de estas dos cosas:

```text
PROCESAR
   ↓
next()
```

o:

```text
PROCESAR
   ↓
res.status(...).json(...)
```

Es decir:

> **O continúas el flujo o terminas la petición.**

---

## 6️⃣ 📋 ORDEN DE EJECUCIÓN

Los middleware se ejecutan **de arriba hacia abajo**, siguiendo el orden en el que aparecen.

```ts
app.use(middlewareA);
app.use(middlewareB);
app.use(middlewareC);

app.get('/users', handler);
```

Flujo:

```text
Request
   ↓
middlewareA
   ↓
middlewareB
   ↓
middlewareC
   ↓
handler
   ↓
Response
```

Si `middlewareB` no llama a `next()` ni envía una respuesta:

```text
Request
   ↓
middlewareA
   ↓
middlewareB
   ✋
```

El flujo se detiene.

---

## 7️⃣ 🌐 APPLICATION-LEVEL MIDDLEWARE

Son middleware registrados directamente sobre la aplicación mediante `app.use()` o métodos de `app`.

```ts
app.use(logger);
```

También pueden aplicarse a determinadas rutas:

```ts
app.use('/api', logger);
```

En este caso:

```text
/api/users
/api/products
/api/orders
```

pueden pasar por `logger`.

Mientras que:

```text
/login
```

no necesariamente pasará por ese middleware.

### 📌 Uso típico

* logging
* autenticación
* CORS
* parsing
* configuración global
* manejo de errores

---

## 8️⃣ 🛣️ ROUTER-LEVEL MIDDLEWARE

Es middleware asociado a un `express.Router()`.

```ts
const router = express.Router();

router.use(authMiddleware);

router.get('/users', getUsers);
router.get('/products', getProducts);
```

El middleware se aplica a las rutas de ese router.

```text
/api
   │
   └── Router
         │
         ├── authMiddleware
         │
         ├── GET /users
         │
         └── GET /products
```

Esto permite organizar middleware por módulos o recursos.

---

## 9️⃣ 🧰 BUILT-IN MIDDLEWARE

Express incluye algunos middleware incorporados.

Uno de los más utilizados es:

```ts
app.use(express.json());
```

Permite procesar cuerpos de peticiones que contienen JSON.

Por ejemplo:

```json
{
  "name": "Alo",
  "age": 25
}
```

Después puedes acceder a ellos mediante:

```ts
req.body
```

Otros middleware incorporados incluyen:

```ts
express.json()
express.urlencoded()
express.static()
```

### 📌 `express.static()`

Permite servir archivos estáticos:

```ts
app.use(express.static('public'));
```

Por ejemplo:

```text
public/
├── index.html
├── styles.css
└── image.png
```

---

## 🔟 📦 THIRD-PARTY MIDDLEWARE

Son middleware desarrollados por terceros y publicados como paquetes npm.

Por ejemplo:

```bash
npm install cors
```

Después:

```ts
import cors from 'cors';

app.use(cors());
```

Otros ejemplos conocidos:

```text
cors
helmet
morgan
cookie-parser
```

### 📌 ¿Para qué sirven?

Permiten incorporar funcionalidades sin tener que implementarlas desde cero.

Por ejemplo:

```text
cors
 ↓
Configurar Cross-Origin Resource Sharing

helmet
 ↓
Agregar headers relacionados con seguridad

morgan
 ↓
Registrar HTTP requests
```

---

## 1️⃣1️⃣ ✍️ CUSTOM MIDDLEWARE

Un **custom middleware** es un middleware que tú mismo creas.

La estructura básica es:

```ts
const myMiddleware = (req, res, next) => {
  // lógica

  next();
};
```

Después:

```ts
app.use(myMiddleware);
```

### 📌 Ejemplo: Logger

```ts
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);

  next();
};
```

Uso:

```ts
app.use(logger);
```

Cada petición pasará por él.

---

## 1️⃣2️⃣ 🔗 MIDDLEWARE CHAIN

Una aplicación puede tener varios middleware conectados.

```text
Request
   ↓
Logger
   ↓
Authentication
   ↓
Authorization
   ↓
Validation
   ↓
Route
   ↓
Controller
   ↓
Response
```

Cada middleware puede decidir:

```text
¿Continúo?
    │
   Sí
    ↓
 next()
    │
    ▼
Siguiente middleware
```

o:

```text
¿La petición es válida?
    │
   No
    ↓
Response
    │
    ✋
  FIN
```

Este patrón se conoce como **middleware chain**.

---

## 1️⃣3️⃣ 🚨 ERROR MIDDLEWARE

Express utiliza un middleware especial para manejar errores.

Su característica principal es que recibe **cuatro parámetros**:

```ts
(err, req, res, next)
```

Ejemplo:

```ts
const errorHandler = (err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    message: 'Internal Server Error'
  });
};
```

Se registra normalmente al final:

```ts
app.use(errorHandler);
```

### 🧠 ¿Por qué tiene cuatro parámetros?

Express identifica esta firma:

```ts
(err, req, res, next)
```

como un **error-handling middleware**.

El primer parámetro representa el error:

```ts
err
```

---

# 🔄 FLUJO COMPLETO

Una aplicación Express puede tener un flujo como este:

```text
                 CLIENT
                    │
                    ▼
                 REQUEST
                    │
                    ▼
              ┌───────────┐
              │  Logger   │
              └─────┬─────┘
                    │
                  next()
                    │
                    ▼
          ┌──────────────────┐
          │ Authentication   │
          └────────┬─────────┘
                   │
                 next()
                   │
                   ▼
          ┌──────────────────┐
          │  Authorization   │
          └────────┬─────────┘
                   │
                 next()
                   │
                   ▼
          ┌──────────────────┐
          │   Validation     │
          └────────┬─────────┘
                   │
                 next()
                   │
                   ▼
                 ROUTE
                   │
                   ▼
               CONTROLLER
                   │
                   ▼
               RESPONSE
```

Si ocurre un error:

```text
Request
   ↓
Middleware
   ↓
Error ❌
   ↓
next(error)
   ↓
Error Middleware
   ↓
Response
```

---

# 🧠 TIPOS DE MIDDLEWARE

| Tipo                 | ¿Qué es?                        | Ejemplo                 |
| -------------------- | ------------------------------- | ----------------------- |
| 🌐 Application-level | Middleware registrado en `app`  | `app.use(logger)`       |
| 🛣️ Router-level     | Middleware asociado a un router | `router.use(auth)`      |
| 🧰 Built-in          | Incluido por Express            | `express.json()`        |
| 📦 Third-party       | Paquete externo                 | `cors()`                |
| ✍️ Custom            | Creado por ti                   | `logger()`              |
| 🚨 Error middleware  | Maneja errores                  | `(err, req, res, next)` |

---

# 🎯 EJEMPLOS DE USO

| Middleware        | ¿Qué hace?                        | Ejemplo             |
| ----------------- | --------------------------------- | ------------------- |
| 📝 Logger         | Registra peticiones               | Método, URL, tiempo |
| 🔐 Authentication | Comprueba identidad               | Validar JWT         |
| 🛡️ Authorization | Comprueba permisos                | Admin / User        |
| ✅ Validation      | Valida datos                      | `req.body`          |
| 🌐 CORS           | Controla solicitudes cross-origin | `cors()`            |
| 🛡️ Security      | Añade medidas de seguridad        | `helmet()`          |
| 🍪 Cookies        | Procesa cookies                   | `cookie-parser`     |
| 🚨 Error Handling | Maneja errores                    | `errorHandler`      |

> [!IMPORTANT]
> Un middleware **no necesariamente tiene que modificar la petición**. También puede simplemente observarla, validarla, bloquearla, generar una respuesta o preparar información para el siguiente middleware.

---

# 🧠 IDEA CLAVE

Piensa en un middleware como una **puerta por la que pasa una request**:

```text
                REQUEST
                   │
                   ▼
              🚪 Middleware
                   │
          ┌────────┴────────┐
          │                 │
       Permitir           Bloquear
          │                 │
       next()            Response
          │                 │
          ▼                 ✋
     Siguiente
     middleware
```

La idea fundamental de Express es:

> **Una request puede atravesar una cadena de middleware antes de llegar a la ruta que finalmente genera la respuesta.**
