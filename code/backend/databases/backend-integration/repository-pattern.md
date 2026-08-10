# 📄 02 - Repository Pattern ⭐⭐

## 📚 ÍNDICE — 

- [📄 02 - Repository Pattern ⭐⭐](#-02---repository-pattern-)
  - [📚 ÍNDICE —](#-índice-)
  - [🧩 ¿Qué es Repository Pattern?](#-qué-es-repository-pattern)
  - [❓ ¿Qué problema resuelve?](#-qué-problema-resuelve)
  - [🗄️ Responsabilidad del Repository](#️-responsabilidad-del-repository)
  - [📝 CRUD dentro del Repository](#-crud-dentro-del-repository)
- [⚖️ Repository vs Service](#️-repository-vs-service)
    - [🧠 Service](#-service)
    - [🗄️ Repository](#️-repository)
    - [🔥 Diferencia](#-diferencia)
- [🌐 Repository vs Controller](#-repository-vs-controller)
    - [Controller](#controller)
    - [Repository](#repository)
- [💉 Dependency Injection](#-dependency-injection)
- [🎭 Abstracción del acceso a datos](#-abstracción-del-acceso-a-datos)
- [✅ ¿Cuándo utilizar Repository Pattern?](#-cuándo-utilizar-repository-pattern)
- [⚖️ Ventajas y desventajas](#️-ventajas-y-desventajas)
- [🧠 Flujo fundamental](#-flujo-fundamental)

## 🧩 ¿Qué es Repository Pattern?

El **Repository Pattern** es un patrón que separa el **acceso a datos** del resto de la aplicación.

La idea principal:

```text
Controller
    ↓
Service
    ↓
Repository
    ↓
Database
```

En lugar de:

```text
Controller
    ↓
SQL / Prisma / Database
```

---

## ❓ ¿Qué problema resuelve?

Evita que la lógica de acceso a datos quede mezclada con la lógica de negocio o con el manejo HTTP.

| Sin Repository | Con Repository |
| -------------- | -------------- |
| `Controller`   | `Controller`   |
| ↓              | ↓              |
| `Prisma / SQL` | `Service`      |
| ↓              | ↓              |
| `Database`     | `Repository`   |
|                | ↓              |
|                | `Database`     |

Esto permite mantener responsabilidades separadas.

---

## 🗄️ Responsabilidad del Repository

El **Repository** se encarga de comunicarse con la database.

Sus responsabilidades pueden incluir:

* Consultar datos
* Crear registros
* Actualizar registros
* Eliminar registros
* Ejecutar queries
* Encapsular el acceso al ORM o database client

Por ejemplo:

```text
users.repository

findByEmail()
create()
findById()
update()
delete()
```

---

## 📝 CRUD dentro del Repository

Las operaciones de acceso a datos pueden estar agrupadas dentro del Repository:

```text
Repository
    │
    ├── create()
    ├── findById()
    ├── findByEmail()
    ├── update()
    └── delete()
```

El Repository se ocupa de **cómo obtener o modificar los datos**, no de decidir qué significa esa operación para el negocio.

---

# ⚖️ Repository vs Service

Esta es la diferencia más importante.

### 🧠 Service

Se encarga de la **lógica de negocio**.

```text
users.service

createUser()
    ↓
¿El email ya existe?
    ↓
¿Puede registrarse?
    ↓
Crear usuario
```

El Service decide **qué debe ocurrir**.

### 🗄️ Repository

Se encarga del **acceso a datos**.

```text
users.repository

findByEmail()
create()
findById()
update()
delete()
```

El Repository decide **cómo hablar con la database**.

### 🔥 Diferencia

| Componente     | Responsabilidad                   |
| -------------- | --------------------------------- |
| **Service**    | ¿Qué debe ocurrir?                |
| **Repository** | ¿Cómo obtengo/modifico los datos? |

# 🌐 Repository vs Controller

### Controller

Se encarga principalmente de la comunicación HTTP:

```text
Request
   ↓
Controller
   ↓
Response
```

### Repository

Se encarga del acceso a datos:

```text
Repository
   ↓
Database
```

Por eso:

```text
Controller
   ↓
Service
   ↓
Repository
   ↓
Database
```

---

# 💉 Dependency Injection

La **Dependency Injection** permite proporcionar un Repository al Service en lugar de que el Service tenga que crearlo directamente.

Conceptualmente:

```text
Repository
    ↓
Dependency Injection
    ↓
Service
```

Por ejemplo:

```text
UsersService
      ↑
UsersRepository
```

Esto facilita cambiar implementaciones y realizar testing.

---

# 🎭 Abstracción del acceso a datos

El Repository puede ocultar los detalles de implementación de la database.

Por ejemplo, el Service puede hacer:

```text
userRepository.findByEmail(email)
```

sin necesitar saber si internamente se utiliza:

```text
Prisma
   ↓
PostgreSQL
```

o:

```text
TypeORM
   ↓
PostgreSQL
```

El Service trabaja con la **abstracción**, no directamente con la tecnología de database.

---

# ✅ ¿Cuándo utilizar Repository Pattern?

Es especialmente útil cuando:

* La aplicación tiene cierta complejidad.
* Hay bastante lógica de acceso a datos.
* Quieres separar responsabilidades.
* Necesitas facilitar testing.
* Puedes cambiar la implementación de persistencia.
* Existen múltiples fuentes de datos.

No siempre es necesario para aplicaciones pequeñas y simples.

---

# ⚖️ Ventajas y desventajas

| ✅ Ventajas                         | ❌ Desventajas                                            |
| ---------------------------------- | -------------------------------------------------------- |
| Separación de responsabilidades    | Más archivos y capas                                     |
| Código más organizado              | Mayor complejidad inicial                                |
| Abstracción del acceso a datos     | Puede convertirse en una abstracción innecesaria         |
| Facilita testing                   | Puede generar código repetitivo en aplicaciones pequeñas |
| Reduce el acoplamiento             |                                                          |
| Facilita cambiar la implementación |                                                          |

---

# 🧠 Flujo fundamental

```text
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
Service
   ↓
Business Logic

Repository
   ↓
Data Access

Controller
   ↓
HTTP
```

