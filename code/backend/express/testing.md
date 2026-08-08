# 🧪 TESTING

El **testing** consiste en escribir pruebas automáticas que verifican que nuestra aplicación funciona como esperamos.

En Express podemos probar diferentes partes del backend:

```text id="7m2x4q"
API
│
├── Routes
├── Controllers
├── Services
├── Middleware
└── Database
```

La idea principal es:

```text id="5k8p1v"
Código
  ↓
Test
  ↓
¿El comportamiento es correcto?
 ┌──────┴──────┐
 ▼             ▼
✅ Pass       ❌ Fail
```

# 📑 ÍNDICE — TESTING

1. 🧪 [TESTING](#1️⃣-🧪-testing)
   - 🎯 ¿Para qué sirve?

2. 🔬 [UNIT TESTING](#2️⃣-🔬-unit-testing)
   - 🧠 Característica principal

3. 🔗 [INTEGRATION TESTING](#3️⃣-🔗-integration-testing)
   - 🆚 Unit vs Integration

4. 🌐 [API TESTING](#4️⃣-🌐-api-testing)
   - 🎯 Qué podemos comprobar

5. 🎮 [TESTING CONTROLLERS](#5️⃣-🎮-testing-controllers)

6. 🧠 [TESTING SERVICES](#6️⃣-🧠-testing-services)

7. 🧩 [TESTING MIDDLEWARE](#7️⃣-🧩-testing-middleware)

8. 🛣️ [TESTING ROUTES](#8️⃣-🛣️-testing-routes)

9. 📋 [HTTP ASSERTIONS](#9️⃣-📋-http-assertions)
   - Status Code
   - Response Body
   - Headers
   - Errores

10. 🃏 [JEST](#🔟-🃏-jest)

11. ⚡ [VITEST](#1️⃣1️⃣-⚡-vitest)
    - 🆚 Jest vs Vitest

12. 🚀 [SUPERTEST](#1️⃣2️⃣-🚀-supertest)

13. 🧩 [JEST / VITEST + SUPERTEST](#🧩-jest--vitest--supertest)

14. 🏗️ [TIPOS DE TESTING EN EXPRESS](#🏗️-tipos-de-testing-en-express)
    - 🔬 Unit
    - 🔗 Integration
    - 🌐 API

15. 🧠 [FLUJO DE UN API TEST](#🧠-flujo-de-un-api-test)

16. 🎯 [IDEA CLAVE](#🎯-idea-clave)

## 1️⃣ 🧪 TESTING

**Testing** es el proceso de comprobar automáticamente el comportamiento de una aplicación.

Por ejemplo, si tenemos:

```text id="9c4r7n"
POST /users
```

podemos comprobar que cuando enviamos datos válidos:

```text id="2v6m8x"
Request
   ↓
POST /users
   ↓
201 Created
```

El test verifica que realmente recibimos:

```text id="4q7p2k"
201 Created
```

y no:

```text id="6n3x8m"
500 Internal Server Error
```

### 🎯 ¿Para qué sirve?

Permite:

* 🐛 Detectar errores.
* 🔄 Evitar regresiones.
* 🛡️ Comprobar comportamientos importantes.
* 🧩 Verificar componentes individuales.
* 🚀 Tener mayor confianza al modificar código.

## 2️⃣ 🔬 UNIT TESTING

Un **Unit Test** prueba una unidad pequeña y aislada de código.

Por ejemplo:

```text id="8w5m1c"
calculateTotal()
```

En lugar de probar toda la API, probamos solamente esa función.

```text id="3r7x9p"
Input
 ↓
Function
 ↓
Output
```

Por ejemplo:

```text id="1q6v4n"
calculateTotal(100, 20)
        ↓
       120
```

El test verifica:

```text id="5k2m8w"
100 + 20
  ↓
120
```

### 🧠 Característica principal

Los unit tests normalmente buscan ser:

```text id="9x3p6v"
⚡ Rápidos
🎯 Específicos
🧩 Aislados
```

## 3️⃣ 🔗 INTEGRATION TESTING

Los **Integration Tests** comprueban que diferentes partes de la aplicación funcionan correctamente **juntas**.

Por ejemplo:

```text id="7m4q2x"
Controller
    ↓
Service
    ↓
Repository
    ↓
Database
```

En lugar de probar cada pieza individualmente, comprobamos su interacción.

Por ejemplo:

```text id="2c8n5r"
Create User
    ↓
Controller
    ↓
Service
    ↓
Database
    ↓
User created
```

### 🆚 Unit vs Integration

| Tipo                 | Flujo                                          |
| -------------------- | ---------------------------------------------- |
| **Unit Test**        | `Function → Output`                            |
| **Integration Test** | `Controller → Service → Repository → Database` |

## 4️⃣ 🌐 API TESTING

Los **API Tests** comprueban el comportamiento de los endpoints HTTP.

Por ejemplo:

```text id="6p9v3m"
POST /users
```

El test puede enviar:

```json id="4x7k2q"
{
  "name": "Ana",
  "email": "ana@example.com"
}
```

y comprobar:

```text id="8n5c1w"
Status → 201
Response → contiene usuario
```

También podemos comprobar errores:

```text id="3m6q9v"
GET /users/999
       ↓
404 Not Found
```

### 🎯 Qué podemos comprobar

```text id="7r2x5k"
HTTP Method
URL
Headers
Request Body
Status Code
Response Body
Response Headers
```

## 5️⃣ 🎮 TESTING CONTROLLERS

Los **Controllers** reciben la request y normalmente coordinan la ejecución de la lógica.

Por ejemplo:

```text id="4m8q2x"
Request
   ↓
Controller
   ↓
Service
```

Podemos comprobar que el controller:

* 📦 recibe correctamente los datos.
* 🔄 llama al service correspondiente.
* 📤 devuelve la respuesta correcta.
* ⚠️ maneja correctamente los errores.

Conceptualmente:

```text id="7n3v6p"
Request
   ↓
Controller
   ↓
Service
   ↓
Response
```

## 6️⃣ 🧠 TESTING SERVICES

Los **Services** normalmente contienen la lógica de negocio.

Por ejemplo:

```text id="2x5k9m"
createUser()
validateUser()
calculatePrice()
findGuest()
```

Aquí los tests se enfocan en comprobar reglas de negocio.

Por ejemplo:

```text id="8q4r1c"
createUser()
     ↓
¿Email ya existe?
     ↓
Sí → Error
No → Crear usuario
```

Podemos probar diferentes escenarios:

| Escenario                   |   |
| --------------------------- | - |
| Datos válidos               | ✅ |
| Datos inválidos             | ❌ |
| Recurso inexistente         | ❌ |
| Regla de negocio incumplida | ❌ |

Los services son buenos candidatos para **unit testing**, porque muchas veces pueden probarse sin levantar toda la API.

## 7️⃣ 🧩 TESTING MIDDLEWARE

También podemos probar los middleware.

Por ejemplo:

```text id="6v2m8x"
Authentication Middleware
```

Podemos comprobar:

```text id="9p4k1w"
Request
   ↓
¿Token válido?
 ┌──────┴──────┐
 ▼             ▼
Sí             No
↓              ↓
next()         Error
```

Otros ejemplos:

```text id="3r7q5n"
Validation Middleware
Authorization Middleware
Error Middleware
Logging Middleware
```

## 8️⃣ 🛣️ TESTING ROUTES

Las rutas pueden probarse verificando que:

```text id="5x8m2c"
HTTP Method
      +
URL
      ↓
Correct Handler
```

Por ejemplo:

```text id="1q6v9p"
GET /users
      ↓
Users Controller

POST /users
      ↓
Create User Controller
```

También podemos comprobar rutas dinámicas:

```text id="7k3n5r"
GET /users/:id
```

Por ejemplo:

```text id="4m8x2q"
GET /users/123
```

## 9️⃣ 📋 HTTP ASSERTIONS

Una **assertion** comprueba que un resultado coincide con lo esperado.

En API testing podemos hacer assertions sobre:

### Status Code

```text id="6p2v9m"
POST /users
      ↓
201 Created
```

### Response Body

```json id="8r4k1x"
{
  "id": 1,
  "name": "Ana"
}
```

### Headers

```text id="3m7q5v"
Content-Type
Authorization
```

### Errores

```text id="9x2c6n"
GET /users/999
      ↓
404 Not Found
```

Conceptualmente:

```text id="5k8p3r"
Request
   ↓
API
   ↓
Response
   ↓
Assertions
   ↓
¿Coincide con lo esperado?
```

## 🔟 🃏 JEST

**Jest** es un framework de testing del ecosistema JavaScript/TypeScript.

Permite escribir:

```text id="5k2m8x"
Unit Tests
Integration Tests
Assertions
Mocks
Spies
```

Por ejemplo:

```text id="7q4v1n"
Test
 ↓
Function
 ↓
Expected Result
```

Es una de las herramientas históricamente más utilizadas en proyectos JavaScript y Node.js.

## 1️⃣1️⃣ ⚡ VITEST

**Vitest** es una herramienta moderna de testing para proyectos JavaScript/TypeScript.

Tiene una API similar a la de Jest en muchos aspectos:

```text id="3x8p5r"
describe()
it()
expect()
```

Esto hace que muchos conceptos aprendidos con Jest sean fácilmente transferibles a Vitest.

### 🆚 Jest vs Vitest

|                     | 🃏 Jest         | ⚡ Vitest    |
| ------------------- | --------------- | ----------- |
| **Ecosistema**      | Muy establecido | Más moderno |
| **TypeScript**      | ✅               | ✅           |
| **Unit testing**    | ✅               | ✅           |
| **Assertions**      | ✅               | ✅           |
| **Mocks**           | ✅               | ✅           |
| **Uso con Node.js** | ✅               | ✅           |

No necesitas estudiar ambos desde cero como si fueran conceptos completamente diferentes.

Lo importante primero es aprender:

```text id="9m6q2v"
Testing
 ↓
Assertions
 ↓
Mocks
 ↓
Unit Tests
 ↓
Integration Tests
```

Después puedes aprender la sintaxis específica de Jest o Vitest.

## 1️⃣2️⃣ 🚀 SUPERTEST

**Supertest** permite realizar requests HTTP contra una aplicación Node.js/Express durante los tests.

Es especialmente útil para **API testing**.

Conceptualmente:

```text id="4r7x1k"
Test
 ↓
Supertest
 ↓
Express
 ↓
Endpoint
 ↓
Response
 ↓
Assertion
```

Por ejemplo:

```text id="8p3m6v"
POST /users
      ↓
Supertest
      ↓
Express
      ↓
201 Created
      ↓
expect(...)
```

Puedes comprobar:

```text id="2q9w5c"
Status Code
Response Body
Headers
```

## 🧩 JEST / VITEST + SUPERTEST

Estas herramientas tienen responsabilidades diferentes.

```text id="6m4x8n"
🃏 Jest / ⚡ Vitest
        ↓
   Test Runner
        ↓
 Ejecuta los tests
        │
        ▼
    Assertions
```

Mientras que:

```text id="7v2p5r"
🚀 Supertest
      ↓
HTTP Requests
      ↓
Express
      ↓
API Response
```

Juntas:

```text id="1k8q4m"
        Test
          │
          ▼
   Jest / Vitest
          │
          ▼
      Supertest
          │
          ▼
       Express
          │
          ▼
      Endpoint
          │
          ▼
       Response
          │
          ▼
      Assertion
```

## 🏗️ TIPOS DE TESTING EN EXPRESS

Puedes imaginar tu backend así:

```text id="5n3x7q"
                    TESTING
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
      UNIT        INTEGRATION        API
        │              │              │
        ▼              ▼              ▼
     Service       Controller      Endpoint
     Function      + Service       + HTTP
```

Por ejemplo:

### 🔬 Unit

```text id="9q2m6v"
calculatePrice()
       ↓
Expected: 100
```

### 🔗 Integration

```text id="4x7p1n"
Controller
   ↓
Service
   ↓
Repository
```

### 🌐 API

```text id="8m5r3k"
POST /users
      ↓
201 Created
```

## 🧠 FLUJO DE UN API TEST

Un API test típico puede seguir este flujo:

```text id="6v9q2x"
1️⃣ Preparar datos
       ↓
2️⃣ Realizar request
       ↓
3️⃣ Recibir response
       ↓
4️⃣ Comprobar status
       ↓
5️⃣ Comprobar body
       ↓
6️⃣ Comprobar headers
```

Por ejemplo:

```text id="3k8m5p"
POST /users
      ↓
Request Body
      ↓
Express
      ↓
201 Created
      ↓
Response Body
      ↓
Assertions
```

Y para un recurso inexistente:

```text id="7q4x1v"
GET /users/999
      ↓
Express
      ↓
404 Not Found
      ↓
Assertion
      ↓
✅ Test passed
```

## 🎯 IDEA CLAVE

No pienses en testing simplemente como:

> **"Probar si el código funciona."**

Piensa:

> **"Definir qué comportamiento espero y comprobar automáticamente que la aplicación lo mantiene."**

La relación principal:

```text id="2n6r8w"
🧪 Testing
    │
    ├── 🔬 Unit
    │      └── Funciones / Services
    │
    ├── 🔗 Integration
    │      └── Varias partes trabajando juntas
    │
    └── 🌐 API Testing
           └── Endpoints HTTP
```

Y las herramientas:

```text id="5p3x9m"
🃏 Jest / ⚡ Vitest
        ↓
Ejecutan tests + assertions

🚀 Supertest
        ↓
Realiza requests HTTP

Express
        ↓
Responde a las requests
```

> **Primero aprende los conceptos de testing; después aprende Jest/Vitest y Supertest como herramientas para aplicar esos conceptos.**
