# 🏗️ CONTROLLERS & SERVICES

Este documento explica **cómo organizar internamente una aplicación Express** para que cada parte tenga una responsabilidad clara.

La idea principal es evitar colocar toda la lógica dentro de las rutas.

```text
Route
   ↓
Controller
   ↓
Service
   ↓
Repository
   ↓
Database
```

---

## 📑 ÍNDICE — CONTROLLERS & SERVICES

1. [🎮 Controllers](#1-controllers)
2. [⚙️ Services](#2-services)
3. [🗄️ Repositories](#3-repositories)
4. [🧩 Separation of Concerns](#4-separation-of-concerns)
5. [🧠 Business Logic](#5-business-logic)
6. [🛣️ Route → Controller](#6-route--controller)
7. [🎮 Controller → Service](#7-controller--service)
8. [⚙️ Service → Repository](#8-service--repository)
9. [🔄 Dependency Flow](#9-dependency-flow)
10. [🏗️ Project Architecture](#10-project-architecture)
11. [🧩 Ejemplo de Flujo](#-ejemplo-de-flujo)
12. [🧠 Idea Clave](#-idea-clave)

---

# 1️⃣ 🎮 CONTROLLERS

Un **Controller** recibe la petición HTTP y se encarga de coordinar la respuesta.

Normalmente trabaja con:

```text
req
res
```

Por ejemplo:

```text
POST /users
      ↓
UserController
      ↓
procesa la petición
      ↓
devuelve response
```

El Controller debería encargarse principalmente de la **capa HTTP**, no de toda la lógica de negocio.

### 📌 Responsabilidades

* Recibir `req`.
* Obtener datos de la petición.
* Llamar al Service correspondiente.
* Elegir el status HTTP.
* Enviar `res`.

### ❌ Evitar

Que un Controller contenga:

```text
HTTP
+
Business Logic
+
Database Queries
+
Validaciones complejas
```

Eso dificulta mantener y probar la aplicación.

---

# 2️⃣ ⚙️ SERVICES

Un **Service** contiene principalmente la **lógica de negocio** de la aplicación.

Por ejemplo:

```text
UserController
      ↓
UserService
      ↓
¿El usuario puede registrarse?
¿El email ya existe?
¿Qué datos necesita?
      ↓
Repository
```

### 📌 Responsabilidades

* Aplicar reglas de negocio.
* Coordinar operaciones.
* Procesar información.
* Comunicarse con repositories.
* Reutilizar lógica desde diferentes partes de la aplicación.

### 🧠 Idea clave

```text
Controller
↓
¿Cómo llega la petición?

Service
↓
¿Qué debe hacer la aplicación?
```

---

# 3️⃣ 🗄️ REPOSITORIES

El **Repository** se encarga de la comunicación con la fuente de datos.

Normalmente puede comunicarse con:

```text
Database
API externa
ORM
Sistema de archivos
```

Por ejemplo:

```text
UserService
     ↓
UserRepository
     ↓
Database
```

### 📌 Responsabilidad principal

Separar la lógica de acceso a datos de la lógica de negocio.

Por ejemplo:

```text
userRepository.findById(123)
```

El Service no necesita saber exactamente cómo se ejecuta la consulta.

Puede simplemente pedir:

> Dame el usuario con ID 123.

---

# 4️⃣ 🧩 SEPARATION OF CONCERNS

**Separation of Concerns** significa dividir la aplicación en diferentes responsabilidades.

En lugar de tener:

```text
Route
   ↓
TODO
```

separamos:

```text
Route
   ↓
Controller
   ↓
Service
   ↓
Repository
```

Cada capa tiene una responsabilidad específica.

| Capa       | Responsabilidad        |
| ---------- | ---------------------- |
| Route      | Define la URL y método |
| Controller | Maneja HTTP            |
| Service    | Lógica de negocio      |
| Repository | Acceso a datos         |
| Database   | Almacenamiento         |

> [!IMPORTANT]
> El objetivo no es crear muchas carpetas porque sí. El objetivo es que cada parte del código tenga una responsabilidad clara.

---

# 5️⃣ 🧠 BUSINESS LOGIC

La **Business Logic** son las reglas que determinan cómo funciona realmente la aplicación.

Por ejemplo, en una aplicación de reservas:

```text
Un usuario quiere reservar
        ↓
¿Existe?
        ↓
¿Tiene disponibilidad?
        ↓
¿La fecha es válida?
        ↓
Crear reserva
```

Estas reglas pertenecen normalmente al **Service**.

### ❌ No ideal

```text
Route
   ↓
50 líneas de reglas de negocio
```

### ✅ Mejor

```text
Route
   ↓
Controller
   ↓
BookingService
   ↓
reglas de negocio
```

---

# 6️⃣ 🛣️ ROUTE → CONTROLLER

La **Route** define qué ocurre cuando llega una determinada petición.

Por ejemplo:

```text
POST /users
```

La ruta puede delegar el trabajo al Controller:

```text
POST /users
     ↓
UserController.create
```

La Route se concentra en:

```text
Método HTTP
+
URL
+
Middleware
+
Controller
```

No debería contener toda la lógica de negocio.

---

# 7️⃣ 🎮 CONTROLLER → SERVICE

El Controller recibe la petición y delega el trabajo al Service.

```text
Request
   ↓
Controller
   ↓
Service
```

Ejemplo conceptual:

```text
POST /users
      ↓
UserController.create()
      ↓
UserService.createUser()
```

El Controller puede obtener:

```text
req.body
```

y pasarlo al Service.

El Service se encarga de decidir qué hacer con esos datos.

---

# 8️⃣ ⚙️ SERVICE → REPOSITORY

Cuando el Service necesita consultar o modificar datos, puede utilizar un Repository.

```text
UserController
      ↓
UserService
      ↓
UserRepository
      ↓
Database
```

Por ejemplo:

```text
UserService.createUser()
        ↓
UserRepository.create()
        ↓
Database
```

### 🧠 Diferencia importante

**Service:**

> ¿Qué debe hacer la aplicación?

**Repository:**

> ¿Cómo obtengo o guardo los datos?

---

# 9️⃣ 🔄 DEPENDENCY FLOW

Las dependencias deberían seguir un flujo claro.

```text
Route
  ↓
Controller
  ↓
Service
  ↓
Repository
  ↓
Database
```

La petición comienza en la capa HTTP y va descendiendo hasta la fuente de datos.

Después, el resultado vuelve:

```text
Database
   ↑
Repository
   ↑
Service
   ↑
Controller
   ↑
Response
```

### 🧠 Flujo completo

```text
HTTP Request
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
     ↓
 Repository
     ↓
   Service
     ↓
 Controller
     ↓
HTTP Response
```

---

# 🔟 🏗️ PROJECT ARCHITECTURE

Una estructura posible para una aplicación Express:

```text
src/
├── routes/
├── controllers/
├── services/
├── repositories/
├── models/
├── middlewares/
└── utils/
```

### 📁 `routes/`

Define:

```text
URLs
HTTP Methods
Middleware
Controllers
```

### 📁 `controllers/`

Maneja:

```text
req
res
HTTP status
HTTP response
```

### 📁 `services/`

Contiene:

```text
Business Logic
```

### 📁 `repositories/`

Contiene:

```text
Database Access
```

### 📁 `models/`

Representa la estructura de los datos o entidades, dependiendo de la arquitectura y ORM utilizado.

### 📁 `middlewares/`

Contiene funciones que participan en el flujo de una petición:

```text
Authentication
Authorization
Validation
Logging
Error Handling
```

### 📁 `utils/`

Contiene funciones auxiliares reutilizables que no pertenecen directamente a una capa específica.

---

# 🧩 EJEMPLO DE FLUJO

Supongamos:

```http
POST /users
```

El usuario envía:

```json
{
  "name": "Ana",
  "email": "ana@example.com"
}
```

El flujo podría ser:

```text
POST /users
      ↓
UserRoute
      ↓
UserController
      ↓
UserService
      ↓
UserRepository
      ↓
Database
```

Y la respuesta:

```text
Database
    ↓
Repository
    ↓
Service
    ↓
Controller
    ↓
HTTP Response
```

---

# 🧠 IDEA CLAVE

No memorices solamente los nombres de las carpetas. Entiende **qué pregunta responde cada capa**:

| Capa           | Pregunta                                |
| -------------- | --------------------------------------- |
| 🛣️ Route      | **¿A qué función llega esta petición?** |
| 🎮 Controller  | **¿Cómo manejo esta petición HTTP?**    |
| ⚙️ Service     | **¿Qué debe hacer la aplicación?**      |
| 🗄️ Repository | **¿Cómo accedo a los datos?**           |
| 🗃️ Database   | **¿Dónde se almacenan los datos?**      |

Por eso:

```text
Route
  ↓
Controller
  ↓
Service
  ↓
Repository
  ↓
Database
```

no es simplemente una estructura de carpetas: es una **separación de responsabilidades** que ayuda a construir aplicaciones Express más mantenibles, testeables y escalables.
