# 🧪 VALIDATION

La **validación** consiste en comprobar que los datos recibidos por el backend cumplen las reglas esperadas **antes de procesarlos o almacenarlos**.

En Express, la validación normalmente ocurre después de recibir la petición y antes de ejecutar la lógica de negocio.

```text
Request
   ↓
Validation
   ↓
¿Válido?
 ┌─┴───┐
Sí    No
│      │
▼      ▼
Next   400
│
▼
Controller
```

> [!IMPORTANT]
> El backend debe validar siempre los datos que recibe. La validación del frontend mejora la experiencia del usuario, pero **no es una medida de seguridad**.

---

## 📑 ÍNDICE — VALIDATION

- [🧪 VALIDATION](#-validation)
  - [📑 ÍNDICE — VALIDATION](#-índice--validation)
- [1️⃣ 📥 INPUT VALIDATION](#1️⃣--input-validation)
- [2️⃣ 🌐 REQUEST VALIDATION](#2️⃣--request-validation)
- [3️⃣ 📦 BODY VALIDATION](#3️⃣--body-validation)
- [4️⃣ 🆔 PARAMS VALIDATION](#4️⃣--params-validation)
- [5️⃣ 🔎 QUERY VALIDATION](#5️⃣--query-validation)
- [6️⃣ 📋 VALIDATION SCHEMAS](#6️⃣--validation-schemas)
- [7️⃣ ⚠️ VALIDATION ERRORS](#7️⃣-️-validation-errors)
    - [🧠 Idea importante](#-idea-importante)
- [8️⃣ 🟦 ZOD](#8️⃣--zod)
- [9️⃣ 🟣 JOI](#9️⃣--joi)
- [🔟 🧩 EXPRESS-VALIDATOR](#--express-validator)
- [🆚 ZOD VS JOI VS EXPRESS-VALIDATOR](#-zod-vs-joi-vs-express-validator)
- [🛡️ VALIDACIÓN FRONTEND VS BACKEND](#️-validación-frontend-vs-backend)
    - [🖥️ Frontend](#️-frontend)
    - [🖥️ Backend](#️-backend)
- [🧠 FLUJO COMPLETO](#-flujo-completo)

---

# 1️⃣ 📥 INPUT VALIDATION

**Input Validation** significa comprobar que los datos proporcionados por el cliente son válidos.

Por ejemplo, si una API espera:

```json
{
  "name": "Ana",
  "age": 25
}
```

podemos establecer reglas:

```text
name
↓
Debe existir
↓
Debe ser string
↓
No debe estar vacío

age
↓
Debe existir
↓
Debe ser number
↓
Debe ser mayor que 0
```

La validación evita que datos inesperados lleguen a las siguientes capas.

---

# 2️⃣ 🌐 REQUEST VALIDATION

La **Request Validation** consiste en validar la información que llega dentro de una petición HTTP.

Una request puede contener información en diferentes lugares:

```text
Request
├── Body
├── Params
├── Query
└── Headers
```

Por eso debemos validar cada parte según corresponda.

---

# 3️⃣ 📦 BODY VALIDATION

El **Body** contiene los datos enviados normalmente en operaciones como `POST`, `PUT` o `PATCH`.

Por ejemplo:

```http
POST /users
```

```json
{
  "name": "Ana",
  "email": "ana@example.com",
  "age": 25
}
```

Podemos validar:

```text
name
→ requerido
→ string

email
→ requerido
→ email válido

age
→ number
→ mayor o igual que 18
```

Si los datos no cumplen las reglas:

```text
❌ Validation Error
      ↓
400 Bad Request
```

---

# 4️⃣ 🆔 PARAMS VALIDATION

Los **Route Parameters** forman parte de la URL.

Por ejemplo:

```http
GET /users/123
```

La ruta:

```text
/users/:id
```

contiene:

```text
id = 123
```

También debemos validar estos valores.

Por ejemplo:

```text
id
↓
Debe existir
↓
Debe tener el formato esperado
```

Si esperamos un ID numérico:

```text
/users/123
✅

/users/abc
❌
```

> [!NOTE]
> Aunque el parámetro parezca simple, sigue siendo información enviada por el cliente y debe validarse.

---

# 5️⃣ 🔎 QUERY VALIDATION

Los **Query Parameters** aparecen después de `?`.

Ejemplo:

```http
GET /users?page=2&limit=20
```

Aquí tenemos:

```text
page = 2
limit = 20
```

Podemos validar:

```text
page
→ número entero
→ mayor que 0

limit
→ número entero
→ mayor que 0
→ máximo permitido
```

Por ejemplo:

```text
?page=2&limit=20
✅

?page=-5&limit=abc
❌
```

---

# 6️⃣ 📋 VALIDATION SCHEMAS

Un **Validation Schema** define las reglas que deben cumplir los datos.

Por ejemplo, conceptualmente:

```text
UserSchema

name
├── required
└── string

email
├── required
└── email

age
├── required
├── number
└── minimum: 18
```

El schema funciona como un contrato:

```text
Datos recibidos
      ↓
Validation Schema
      ↓
¿Cumplen las reglas?
```

Esto permite centralizar las reglas de validación y evitar escribirlas manualmente en diferentes partes del código.

---

# 7️⃣ ⚠️ VALIDATION ERRORS

Cuando los datos no cumplen las reglas, la API debe responder indicando que la petición es inválida.

Un código habitual es:

```http
400 Bad Request
```

Por ejemplo:

```json
{
  "name": "",
  "email": "correo-invalido"
}
```

La API podría responder:

```json
{
  "message": "Validation failed",
  "errors": [
    {
      "field": "name",
      "message": "Name is required"
    },
    {
      "field": "email",
      "message": "Invalid email"
    }
  ]
}
```

### 🧠 Idea importante

No basta con responder:

```text
400 Bad Request
```

En aplicaciones reales suele ser útil indicar **qué campos fallaron y por qué**.

---

# 8️⃣ 🟦 ZOD

**Zod** es una librería de validación basada en schemas, muy utilizada con TypeScript.

Permite definir la estructura esperada de los datos y validarlos.

Conceptualmente:

```text
Data
 ↓
Zod Schema
 ↓
Valid
or
Invalid
```

Una de sus ventajas principales es que funciona muy bien con TypeScript porque permite trabajar con **tipos inferidos a partir de schemas**.

> [!TIP]
> Zod es especialmente interesante en proyectos TypeScript porque puedes utilizar el mismo schema como fuente de información para la validación y para obtener tipos.

---

# 9️⃣ 🟣 JOI

**Joi** también permite crear schemas para validar datos.

Conceptualmente:

```text
Request Body
      ↓
Joi Schema
      ↓
Validation
```

Puedes definir reglas como:

```text
name
→ string
→ required

email
→ email
→ required
```

Joi es una alternativa madura y ampliamente utilizada para validar datos en aplicaciones Node.js.

---

# 🔟 🧩 EXPRESS-VALIDATOR

**express-validator** es una librería diseñada específicamente para trabajar con Express.

Permite validar directamente elementos de una request como:

```text
req.body
req.params
req.query
```

Conceptualmente:

```text
Request
   ↓
express-validator
   ↓
Validation Result
   ↓
Controller
```

Es especialmente útil cuando quieres integrar la validación directamente dentro del flujo de middleware de Express.

---

# 🆚 ZOD VS JOI VS EXPRESS-VALIDATOR

| Librería                 | Enfoque principal    | Característica destacada      |
| ------------------------ | -------------------- | ----------------------------- |
| 🟦 **Zod**               | Schemas + TypeScript | Excelente integración con TS  |
| 🟣 **Joi**               | Schemas              | Librería madura y flexible    |
| 🧩 **express-validator** | Express Middleware   | Integración directa con `req` |

No necesitas aprender las tres inmediatamente.

Lo importante primero es entender el concepto:

```text
Request
   ↓
Schema
   ↓
Validation
   ↓
Valid / Invalid
```

---

# 🛡️ VALIDACIÓN FRONTEND VS BACKEND

Una aplicación puede validar los datos en ambos lados.

```text
Angular / React
      ↓
Frontend Validation
      ↓
HTTP Request
      ↓
Express
      ↓
Backend Validation
      ↓
Database
```

### 🖥️ Frontend

Sirve principalmente para:

* mejorar UX
* mostrar errores rápidamente
* evitar requests innecesarias
* ayudar al usuario a introducir datos correctamente

### 🖥️ Backend

Es obligatorio porque el cliente **no es confiable**.

El usuario podría:

* modificar el JavaScript.
* utilizar Postman.
* utilizar `curl`.
* crear su propio frontend.
* enviar directamente requests a la API.

Por eso:

> [!IMPORTANT]
> **Nunca confíes en las validaciones del frontend.**

La validación del frontend es para la experiencia del usuario.

La validación del backend es la que protege la lógica y los datos de la aplicación.

---

# 🧠 FLUJO COMPLETO

Una petición puede seguir este flujo:

```text
                 HTTP Request
                      ↓
                 Validation
                      ↓
              ¿Datos válidos?
                 ┌────┴────┐
                Sí         No
                 ↓          ↓
               next()      400
                 ↓
             Controller
                 ↓
               Service
                 ↓
             Repository
                 ↓
              Database
```

Y recuerda:

```text
📦 Body
🆔 Params
🔎 Query
📋 Headers
```

**Todo dato que venga del cliente debe considerarse no confiable hasta que el backend lo valide.**
