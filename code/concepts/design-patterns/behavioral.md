# 🔄 03. PATRONES DE COMPORTAMIENTO

Se enfocan en:

> 🧠 **Cómo los objetos colaboran y distribuyen responsabilidades.**


## 📚 ÍNDICE
1. 🔄 [Patrones de Comportamiento](#-03-patrones-de-comportamiento)
2. 👀 [Observer](#-observer)
3. 🎯 [Strategy](#-strategy)
4. 🎮 [Command](#-command)
5. 🤝 [Mediator](#-mediator)
6. 🔀 [State](#-state)
7. 🔗 [Chain of Responsibility](#-chain-of-responsibility)
8. 🔁 [Iterator](#-iterator)
9. 📋 [Template Method](#-template-method)
10. 💾 [Memento](#-memento)
11. 🧠 [Visitor](#-visitor)
12. 📐 [Interpreter](#-interpreter)
13. 🧩 [Patrones Adicionales Importantes](#-patrones-adicionales-importantes)
14. 💉 [Dependency Injection](#-dependency-injection)
15. 🧱 [Module](#-module)
16. 🔌 [Repository](#-repository)
17. 🏭 [Service Layer](#-service-layer)
18. 🎭 [MVC](#-mvc)
19. 🧅 [Arquitectura en Capas](#-arquitectura-en-capas)
20. 🧅 [Clean Architecture](#-clean-architecture)
21. 🏛️ [Hexagonal Architecture](#-hexagonal-architecture)
22. 📊 [CQRS](#-cqrs)
23. 🔄 [Event Sourcing](#-event-sourcing)


### 📚 Principales

| 👀       | 🎯                      | 🎮          | 🔀              |
| -------- | ----------------------- | ----------- | --------------- |
| Observer | Strategy                | Command     | State           |
| Mediator | Chain of Responsibility | Iterator    | Template Method |
| Memento  | Visitor                 | Interpreter |                 |

---

# 👀 OBSERVER

Permite que varios objetos sean notificados cuando cambia el estado de otro objeto.

```text
        Subject
           │
     ┌─────┼─────┐
     ▼     ▼     ▼
 Observer Observer Observer
```

Ejemplo:

```text
Observable
    ↓
Subscribers
```

> 🔥 **IMPORTANTE**
>
> Este patrón es especialmente importante para ti porque **RxJS utiliza conceptos fuertemente relacionados con Observer/Observable**.

```ts
observable.subscribe(value => {
  console.log(value);
});
```

> 📌 **Idea**
>
> **Observer = notificar automáticamente a quienes están interesados en un cambio.**

---

# 🎯 STRATEGY

Permite intercambiar diferentes algoritmos o comportamientos sin modificar el código que los utiliza.

```text
          Context
             │
      ┌──────┼──────┐
      ▼      ▼      ▼
 Strategy A Strategy B Strategy C
```

Por ejemplo:

```text
Payment
 ├── CreditCard
 ├── PayPal
 └── BankTransfer
```

El sistema puede seleccionar la estrategia:

```ts
payment.setStrategy(new CreditCardStrategy());
```

> 📌 **Idea**
>
> **Strategy = poder cambiar un algoritmo/comportamiento fácilmente.**

---

# 🎮 COMMAND

Convierte una acción en un objeto.

```text
User Action
     ↓
 Command
     ↓
Receiver
```

Por ejemplo:

```text
CreateUserCommand
DeleteUserCommand
UpdateUserCommand
```

Esto permite:

* ejecutar acciones
* deshacer acciones
* registrar acciones
* poner acciones en cola

> 📌 **Idea**
>
> **Command = encapsular una acción como objeto.**

---

# 🤝 MEDIATOR

Centraliza la comunicación entre varios objetos.

### ❌ Sin Mediator

```text
A ↔ B
A ↔ C
B ↔ C
A ↔ D
B ↔ D
C ↔ D
```

Puede convertirse en una red difícil de mantener.

### ✅ Con Mediator

```text
       A
       │
       ▼
    Mediator
    ▲  ▲  ▲
    │  │  │
    B  C  D
```

> 📌 **Idea**
>
> **Mediator = centralizar la comunicación para reducir acoplamiento.**

---

# 🔀 STATE

Permite que un objeto cambie su comportamiento dependiendo de su estado actual.

```text
Object
  │
  ├── Loading
  ├── Success
  └── Error
```

Por ejemplo:

```text
Order
 │
 ├── Pending
 ├── Paid
 ├── Shipped
 └── Delivered
```

Cada estado puede tener comportamientos diferentes.

> 📌 **Idea**
>
> **State = cambiar comportamiento según el estado interno.**

---

# 🔗 CHAIN OF RESPONSIBILITY

Permite pasar una solicitud por una cadena de handlers hasta que alguno pueda manejarla.

```text
Request
   ↓
Handler A
   ↓
Handler B
   ↓
Handler C
   ↓
Response
```

Muy útil conceptualmente para:

| 🔧 Uso       | Ejemplo                    |
| ------------ | -------------------------- |
| Middleware   | Procesamiento de requests  |
| Validaciones | Validar antes de continuar |
| Pipelines    | Procesar por etapas        |
| Requests     | Encadenar handlers         |

> 🔥 **RELACIÓN IMPORTANTE**
>
> En Express puedes encontrar una idea muy relacionada:

```text
Request
 ↓
Middleware
 ↓
Middleware
 ↓
Controller
```

---

# 🔁 ITERATOR

Permite recorrer una colección sin exponer cómo está implementada internamente.

Por ejemplo:

```ts
for (const user of users) {
  console.log(user);
}
```

JavaScript utiliza el concepto de **iterables e iterators**.

```ts
const iterator = users[Symbol.iterator]();
```

> 📌 **Idea**
>
> **Iterator = recorrer una colección mediante una interfaz común.**

---

# 📋 TEMPLATE METHOD

Define la estructura general de un algoritmo y permite que ciertas partes sean implementadas o modificadas por subclases.

```text
Algorithm
   │
   ├── Step A
   ├── Step B
   ├── Step C
   └── Step D
```

Algunas partes pueden variar:

```text
Base Class
     ↓
Subclass A
Subclass B
```

> 📌 **Idea**
>
> **Template Method = definir el esqueleto de un algoritmo y permitir variar ciertos pasos.**

---

# 💾 MEMENTO

Permite guardar el estado de un objeto para poder restaurarlo posteriormente.

```text
Object
  ↓
Snapshot
  ↓
Change
  ↓
Restore
```

Ejemplo:

```text
Editor
 ↓
Save state
 ↓
Modify
 ↓
Undo
```

> 📌 **Idea**
>
> **Memento = guardar y restaurar estados anteriores.**

---

# 🧠 VISITOR

Permite agregar operaciones sobre una estructura de objetos sin modificar las clases de esos objetos.

Conceptualmente:

```text
Object Structure
      │
      ▼
   Visitor
      │
 ┌────┼────┐
 ▼    ▼    ▼
 A    B    C
```

> 💡 **Nota**
>
> Es más avanzado y menos frecuente en desarrollo frontend cotidiano.

> 📌 **Idea**
>
> **Visitor = agregar operaciones a estructuras de objetos sin modificar sus clases.**

---

# 📐 INTERPRETER

Define una representación para un lenguaje y proporciona un mecanismo para interpretar sus expresiones.

Conceptualmente:

```text
Expression
    ↓
Interpreter
    ↓
Result
```

Por ejemplo, un sistema que interpreta:

```text
"10 + 20 * 2"
```

> 💡 **Nota**
>
> Es un patrón más especializado.

---

# 🧩 PATRONES ADICIONALES IMPORTANTES

Además de GoF, en desarrollo moderno encontrarás otros patrones y arquitecturas muy importantes.

---

# 💉 DEPENDENCY INJECTION

Permite proporcionar las dependencias de un objeto desde el exterior.

En lugar de:

```ts
class UserService {
  private db = new Database();
}
```

puedes tener:

```ts
class UserService {
  constructor(private db: Database) {}
}
```

Ahora:

```text
UserService
     ↑
     │
 Database
```

> 🔥 **IMPORTANTE**
>
> Es fundamental en Angular.
>
> Angular utiliza un sistema de **Dependency Injection**.

> 📌 **Idea**
>
> **Dependency Injection = recibir las dependencias en lugar de crearlas directamente.**

---

# 🧱 MODULE

Organiza funcionalidades relacionadas dentro de una unidad independiente.

```text
Module
 ├── Services
 ├── Utilities
 ├── Classes
 └── Functions
```

En JavaScript/TypeScript:

```ts
export
import
```

permiten construir sistemas modulares.

> 📌 **Idea**
>
> **Module = encapsular y organizar funcionalidades relacionadas.**

> ⚠️ **IMPORTANTE**
>
> `Module` no pertenece a los 23 patrones GoF. Es un patrón/enfoque de modularización.

---

# 🔌 REPOSITORY

Abstrae el acceso a datos.

```text
Application
     ↓
Repository
     ↓
Database
```

Por ejemplo:

```ts
userRepository.findById(id);
```

En lugar de que el resto de la aplicación conozca directamente:

```text
SQL
Database Driver
Queries
Connection
```

> 📌 **Idea**
>
> **Repository = separar la lógica de negocio del acceso a datos.**

Muy importante en:

* Node.js
* Express
* NestJS
* aplicaciones empresariales
* arquitectura por capas

---

# 🏭 SERVICE LAYER

Centraliza lógica de negocio en servicios.

```text
Controller
    ↓
Service
    ↓
Repository
    ↓
Database
```

Ejemplo:

```text
UserController
      ↓
UserService
      ↓
UserRepository
```

> 📌 **Idea**
>
> **Service Layer = encapsular lógica de negocio en una capa dedicada.**

---

# 🎭 MVC

**Model–View–Controller** separa una aplicación en responsabilidades.

```text
        Application
             │
     ┌───────┼───────┐
     ▼       ▼       ▼
   Model   View  Controller
```

En aplicaciones web:

```text
Request
   ↓
Controller
   ↓
Model / Service
   ↓
View / Response
```

> 💡 **Nota**
>
> Muy importante históricamente y todavía utilizado.

---

# 🧅 ARQUITECTURA EN CAPAS

Divide la aplicación en capas:

```text
Presentation
     ↓
Business Logic
     ↓
Data Access
     ↓
Database
```

Ejemplo backend:

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

# 🧅 CLEAN ARCHITECTURE

Busca separar la lógica de negocio de detalles externos.

Conceptualmente:

```text
        Frameworks
            ↓
      Interface Adapters
            ↓
     Application Logic
            ↓
      Domain / Core
```

> 📌 **Regla importante**
>
> Las dependencias deben apuntar hacia el núcleo de la aplicación.

---

# 🏛️ HEXAGONAL ARCHITECTURE

También conocida como **Ports and Adapters**.

```text
           REST API
              ↓
          Adapter
              ↓
          Port
              ↓
       Domain Logic
              ↓
          Port
              ↓
        Database
```

> 🔥 **IMPORTANTE**
>
> Aquí vuelve a aparecer **Adapter**, pero ahora dentro de una arquitectura.

---

# 📊 CQRS

**Command Query Responsibility Segregation**

Separa:

```text
Commands
   ↓
Cambian estado
```

de:

```text
Queries
   ↓
Leen información
```

Conceptualmente:

```text
             Application
             /         \
            ▼           ▼
       Commands      Queries
          │             │
          ▼             ▼
       Write DB      Read DB
```

> 💡 **Nota**
>
> Es un patrón arquitectónico más avanzado.

---

# 🔄 EVENT SOURCING

En lugar de guardar únicamente el estado actual, se almacenan los **eventos que produjeron ese estado**.

```text
Event 1
   ↓
Event 2
   ↓
Event 3
   ↓
Current State
```

Por ejemplo:

```text
AccountCreated
MoneyDeposited
MoneyWithdrawn
```

El estado actual puede reconstruirse a partir de esos eventos.
