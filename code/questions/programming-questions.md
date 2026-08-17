# 📚 QUESTIONS ABOUT PROGRAMMING IN GENERAL

Este apunte reúne conceptos que deberías poder **explicar con tus propias palabras en una entrevista, al estudiar una tecnología nueva o al analizar una arquitectura**.

La idea no es memorizar definiciones aisladas, sino construir un **mapa mental general de programación**.

---

# 🧠 01 - ¿QUÉ ES PROGRAMACIÓN?

La **programación** es el proceso de diseñar instrucciones que una computadora puede ejecutar para resolver un problema o realizar una tarea.

Conceptualmente:

```text
Problema
   ↓
Lógica
   ↓
Algoritmo
   ↓
Código
   ↓
Programa
   ↓
Resultado
```

Por ejemplo:

```text
Problema:
Calcular el promedio de estudiantes

        ↓

Algoritmo:
1. Obtener las calificaciones
2. Sumarlas
3. Dividir entre la cantidad
4. Mostrar el resultado

        ↓

Código
```

---

# 🔢 02 - ¿QUÉ ES UN ALGORITMO?

Un **algoritmo** es una secuencia de pasos definidos para resolver un problema.

Por ejemplo:

```text
Problema:
Encontrar el número mayor

Algoritmo:

1. Recibir números
2. Tomar el primero como mayor
3. Compararlo con los demás
4. Si encontramos uno mayor, actualizarlo
5. Devolver el resultado
```

Un algoritmo debe tener:

* entrada
* proceso
* salida
* pasos definidos
* terminación

### 📌 Idea principal

> **Algoritmo = procedimiento para resolver un problema.**

---

# 🧩 03 - ¿QUÉ ES UN PROGRAMA?

Un **programa** es un conjunto de instrucciones escritas en un lenguaje de programación que una computadora puede ejecutar.

```text
Algoritmo
   ↓
Código
   ↓
Programa
   ↓
Ejecución
```

Un algoritmo es la **solución conceptual**.

El programa es una **implementación concreta** de esa solución.

---

# 💻 04 - ¿QUÉ ES UN LENGUAJE DE PROGRAMACIÓN?

Es un lenguaje diseñado para expresar instrucciones y algoritmos que posteriormente pueden ser ejecutados por una computadora.

Ejemplos:

```text
JavaScript
TypeScript
Python
Java
C
C++
Rust
Go
```

Cada lenguaje tiene:

* sintaxis
* semántica
* tipos
* reglas
* runtime o entorno de ejecución
* características propias

---

# ⚙️ 05 - ¿QUÉ ES LENGUAJE DE MÁQUINA?

El **lenguaje de máquina** es el conjunto de instrucciones que el procesador puede ejecutar directamente.

Está representado mediante instrucciones binarias/códigos de máquina.

Conceptualmente:

```text
Código fuente
     ↓
Compilador / intérprete / runtime
     ↓
Instrucciones de máquina
     ↓
CPU
```

### 🧠 Importante

No debes confundir:

```text
Lenguaje de programación
        ↓
Código fuente
```

con:

```text
Lenguaje de máquina
        ↓
Instrucciones ejecutables por la CPU
```

---

# 🪜 06 - ¿QUÉ ES UN LENGUAJE DE BAJO NIVEL?

Un lenguaje de bajo nivel está **más cerca del hardware**.

Ejemplos:

```text
Machine Code
Assembly
```

Mientras que lenguajes como:

```text
JavaScript
Python
TypeScript
Java
```

proporcionan un nivel de abstracción mucho mayor.

Conceptualmente:

```text
Más abstracción
      ↑
JavaScript
Python
Java
C++
C
Assembly
Machine Code
      ↓
Más cercano al hardware
```

### 📌 Idea principal

> **Bajo nivel = más cercano al funcionamiento del hardware.**

---

# 🔨 07 - ¿QUÉ ES UN LENGUAJE COMPILADO?

Un lenguaje compilado utiliza un proceso de **compilación** para transformar el código fuente en una forma ejecutable o intermedia antes de su ejecución.

Conceptualmente:

```text
Source Code
    ↓
Compiler
    ↓
Machine Code / Intermediate Code
    ↓
Execution
```

Ejemplos típicos:

```text
C
C++
Rust
Go
```

⚠️ La realidad moderna es más compleja: algunos lenguajes utilizan múltiples etapas, bytecode, JIT, AOT, etc.

---

# 🔄 08 - ¿QUÉ ES UN LENGUAJE INTERPRETADO?

Tradicionalmente, un lenguaje interpretado se ejecuta mediante un **intérprete/runtime** que procesa el código durante la ejecución.

Conceptualmente:

```text
Source Code
    ↓
Interpreter / Runtime
    ↓
Execution
```

JavaScript es un buen ejemplo para entender el concepto de lenguaje ejecutado mediante un runtime, aunque los motores modernos como V8 realizan compilación JIT.

### ⚠️ Importante

No pienses:

```text
JavaScript = únicamente interpretado
```

La distinción **compilado vs interpretado no siempre es absoluta**.

---

# 🔀 09 - ¿QUÉ ES TRANSPILACIÓN?

La **transpilación** transforma código fuente de un lenguaje o versión a otro código fuente equivalente o cercano.

Por ejemplo:

```text
TypeScript
    ↓
Compiler / Transpiler
    ↓
JavaScript
```

Otro ejemplo:

```text
Modern JavaScript
    ↓
Babel
    ↓
JavaScript compatible con entornos antiguos
```

### 📌 Idea principal

> **Transpilar = transformar código fuente en otro código fuente.**

---

# 📈 10 - ¿QUÉ ES BIG O?

**Big O** describe cómo crece el costo de un algoritmo cuando aumenta el tamaño de la entrada.

Principalmente se utiliza para analizar:

* tiempo
* memoria

Ejemplos:

```text
O(1)
O(log n)
O(n)
O(n log n)
O(n²)
O(2ⁿ)
```

Conceptualmente:

```text
Entrada pequeña
      ↓
Costo

Entrada grande
      ↓
¿Cómo crece el costo?
```

Por ejemplo:

```text
for (const user of users) {
  ...
}
```

normalmente tiene:

```text
O(n)
```

porque recorre `n` elementos.

### 📌 Idea principal

> **Big O = cómo escala el costo de un algoritmo con respecto al tamaño de entrada.**

---

# 🧮 11 - ¿QUÉ SIGNIFICA ASINTÓTICO?

El análisis asintótico estudia el comportamiento de un algoritmo cuando el tamaño de entrada crece mucho.

Por ejemplo:

```text
3n + 10
```

se considera:

```text
O(n)
```

porque para entradas suficientemente grandes domina el término `n`.

---

# 🧱 12 - ¿QUÉ ES UNA ESTRUCTURA DE DATOS?

Una **estructura de datos** es una forma de organizar y almacenar información para poder acceder a ella y modificarla eficientemente.

Ejemplos:

```text
Array
Linked List
Stack
Queue
Hash Table
Tree
Heap
Graph
```

Conceptualmente:

```text
Datos
 ↓
Estructura
 ↓
Operaciones eficientes
```

---

# 🧩 13 - ¿QUÉ ES UN PARADIGMA?

Un **paradigma de programación** es una forma de pensar y estructurar soluciones mediante código.

Ejemplos:

```text
Imperativo
Declarativo
Orientado a Objetos
Funcional
Reactivo
Event-Driven
Component-Based
```

### 📌 Idea principal

> **Paradigma = forma de pensar y organizar una solución.**

---

# 🏗️ 14 - ¿QUÉ ES UN PATRÓN DE DISEÑO?

Un **patrón de diseño** es una solución general y reutilizable para problemas recurrentes dentro del diseño del software.

Ejemplos:

```text
Singleton
Factory
Observer
Strategy
Adapter
Decorator
Command
Mediator
Prototype
```

No es código que simplemente copias.

Es una **idea de diseño**.

### 📌 Idea principal

> **Design Pattern = solución reutilizable para un problema recurrente de diseño.**

---

# 🏛️ 15 - ¿QUÉ ES UN PATRÓN DE ARQUITECTURA?

Un patrón de arquitectura define cómo organizar las **partes principales de un sistema** y sus responsabilidades.

Ejemplos:

```text
MVC
MVVM
Layered Architecture
Client-Server
Monolith
Microservices
Hexagonal
Clean Architecture
```

### Diferencia importante

```text
Design Pattern
     ↓
Problema de diseño más específico

Architecture Pattern
     ↓
Organización general del sistema
```

---

# 🌐 16 - ¿QUÉ ES UNA API?

Una **API (Application Programming Interface)** es una interfaz mediante la cual diferentes partes de software pueden comunicarse.

Por ejemplo:

```text
Angular
   ↓
API
   ↓
Express
   ↓
Database
```

Una API define cómo solicitar o proporcionar información.

Por ejemplo:

```text
GET /users
POST /users
GET /users/123
DELETE /users/123
```

### 📌 Idea principal

> **API = contrato/interfaz que permite la comunicación entre software.**

---

# 🔗 17 - ¿QUÉ ES UN ENDPOINT?

Un **endpoint** es un punto específico de acceso a una API.

Normalmente está compuesto por:

```text
HTTP Method + URL
```

Por ejemplo:

```text
GET /users
```

o:

```text
POST /users
```

Podemos pensar:

```text
API
 │
 ├── GET /users
 ├── POST /users
 ├── GET /users/:id
 └── DELETE /users/:id
```

Cada uno representa un endpoint.

### 📌 Idea principal

> **Endpoint = punto específico mediante el cual puedes interactuar con una API.**

---

# 🖥️ 18 - ¿QUÉ ES UN SERVIDOR?

Un servidor es un sistema que **recibe solicitudes y proporciona servicios o recursos** a otros sistemas.

Por ejemplo:

```text
Client
  ↓
HTTP Request
  ↓
Server
  ↓
HTTP Response
```

Un servidor puede encargarse de:

* APIs
* archivos
* páginas web
* autenticación
* procesamiento
* acceso a bases de datos

---

# 🌐 19 - ¿QUÉ ES UN CLIENTE?

Un cliente es un programa que **consume servicios proporcionados por un servidor**.

Ejemplo:

```text
Browser
   ↓
Request
   ↓
Server
```

Un navegador es un cliente HTTP.

Una aplicación Angular también puede actuar como cliente de una API.

---

# 🎨 20 - ¿QUÉ ES FRONTEND?

El **frontend** es la parte de una aplicación con la que interactúa principalmente el usuario.

Ejemplos:

```text
HTML
CSS
JavaScript
TypeScript
Angular
React
Vue
```

Se encarga de cosas como:

* interfaz
* interacción
* formularios
* navegación
* estado de UI
* consumo de APIs

Conceptualmente:

```text
User
 ↓
Frontend
 ↓
API
```

---

# ⚙️ 21 - ¿QUÉ ES BACKEND?

El **backend** es la parte del sistema que normalmente ejecuta lógica del servidor.

Puede encargarse de:

* autenticación
* autorización
* lógica de negocio
* APIs
* acceso a bases de datos
* procesamiento
* validaciones

Ejemplo:

```text
Frontend
   ↓
Backend
   ↓
Database
```

Tecnologías:

```text
Node.js
Express
NestJS
Java
Spring
Python
Django
.NET
```

---

# 🗄️ 22 - ¿QUÉ ES UNA BASE DE DATOS?

Una base de datos es un sistema utilizado para **almacenar, organizar, consultar y modificar información**.

Ejemplos:

### SQL

```text
PostgreSQL
MySQL
SQL Server
Oracle
```

### NoSQL

```text
MongoDB
Redis
Firestore
DynamoDB
```

Conceptualmente:

```text
Application
    ↓
Database
    ↓
Persistent Data
```

---

# 🔌 23 - ¿QUÉ ES UN SERVICIO?

Un **servicio** es un componente de software que proporciona una funcionalidad específica a otras partes del sistema.

Por ejemplo:

```text
User Service
Auth Service
Payment Service
Email Service
```

Un servicio puede:

* ejecutarse dentro del mismo proceso
* ser un módulo
* ser un proceso independiente
* ser un microservicio

⚠️ Por eso **servicio y microservicio no son sinónimos**.

---

# 📦 24 - ¿QUÉ ES UNA LIBRERÍA?

Una librería es código reutilizable que puedes incorporar en tu aplicación.

Tu aplicación normalmente **controla el flujo** y llama a la librería cuando la necesita.

```text
Tu aplicación
      ↓
   llama a
      ↓
Library
```

Ejemplos:

```text
RxJS
Lodash
Axios
date-fns
```

### 📌 Idea principal

> **Library = código que tú consumes y utilizas.**

---

# 🏗️ 25 - ¿QUÉ ES UN FRAMEWORK?

Un framework proporciona una estructura y reglas para construir aplicaciones.

En muchos frameworks existe **Inversion of Control**:

```text
Framework
    ↓
Controla el flujo
    ↓
Ejecuta tu código
```

Ejemplos:

```text
Angular
NestJS
Django
Spring
ASP.NET Core
```

### 📌 Idea principal

> **Framework = estructura sobre la cual construyes tu aplicación y que suele controlar parte del flujo de ejecución.**

---

# ⚖️ 26 - ¿LIBRERÍA O FRAMEWORK?

Una forma clásica de distinguirlos:

```text
LIBRARY

Tu código
   ↓
Library
   ↓
Resultado
```

Mientras:

```text
FRAMEWORK

Framework
   ↓
Tu código
   ↓
Framework ejecuta tu código
```

Esto se relaciona con:

> **Inversion of Control**

### 🧠 ¿Cuándo usar una librería?

Cuando necesitas resolver una funcionalidad específica.

Por ejemplo:

```text
Necesito manejar fechas
        ↓
date-fns
```

### 🧠 ¿Cuándo usar un framework?

Cuando quieres una estructura completa para construir una aplicación.

Por ejemplo:

```text
Necesito construir una SPA
        ↓
Angular
```

---

# 📦 27 - ¿QUÉ ES UN GESTOR DE PAQUETES?

Es una herramienta que permite administrar dependencias de un proyecto.

Ejemplos:

```text
npm
pnpm
Yarn
```

Permite:

```text
Instalar paquetes
Actualizar paquetes
Eliminar paquetes
Resolver dependencias
Ejecutar scripts
```

Por ejemplo:

```bash
npm install express
```

---

# 📚 28 - ¿QUÉ ES UNA DEPENDENCIA?

Una dependencia es software externo que tu proyecto necesita para funcionar.

Por ejemplo:

```text
My Project
   │
   ├── Angular
   ├── RxJS
   └── TypeScript
```

Estas dependencias pueden ser:

```text
Production Dependencies
Development Dependencies
```

---

# 🔀 29 - ¿QUÉ ES VERSIONAR?

Versionar significa mantener diferentes versiones de un proyecto o archivo a lo largo del tiempo.

Permite:

* saber qué cambió
* recuperar versiones anteriores
* trabajar en equipo
* crear ramas
* comparar cambios
* revertir errores

Conceptualmente:

```text
v1
 ↓
v2
 ↓
v3
 ↓
v4
```

---

# 🐙 30 - ¿PARA QUÉ SE USA GIT?

Git es un **sistema de control de versiones distribuido**.

Permite registrar y administrar cambios en un proyecto.

Conceptualmente:

```text
Code
 ↓
Git
 ↓
History
 ↓
Versions
```

Permite:

```text
commit
branch
merge
rebase
revert
diff
```

---

# 📝 31 - ¿QUÉ SON LOS CONVENTIONAL COMMITS?

Es una convención para escribir mensajes de commit de forma estructurada.

Ejemplo:

```text
feat: add login form
fix: resolve authentication error
refactor: simplify user service
docs: update README
chore: update dependencies
```

Formato general:

```text
type: description
```

Tipos comunes:

```text
feat
fix
docs
refactor
test
chore
perf
style
build
ci
```

### 🎯 ¿Para qué sirven?

Ayudan a:

* mantener historial consistente
* entender rápidamente cambios
* automatizar changelogs
* automatizar releases
* facilitar colaboración

---

# 🔐 32 - ¿QUÉ ES AUTENTICACIÓN?

La autenticación responde:

> **¿Quién eres?**

Por ejemplo:

```text
Login
 ↓
Email + Password
 ↓
Authentication
 ↓
User identified
```

---

# 🛡️ 33 - ¿QUÉ ES AUTORIZACIÓN?

La autorización responde:

> **¿Qué puedes hacer?**

Por ejemplo:

```text
User
 ↓
Authenticated
 ↓
Role = admin
 ↓
Can access /admin
```

Diferencia:

```text
Authentication
    ↓
Who are you?

Authorization
    ↓
What can you do?
```

---

# 🌐 34 - ¿QUÉ ES HTTP?

HTTP es un protocolo utilizado para la comunicación entre clientes y servidores en la web.

Conceptualmente:

```text
Client
   ↓
HTTP Request
   ↓
Server
   ↓
HTTP Response
```

Métodos comunes:

```text
GET
POST
PUT
PATCH
DELETE
```

---

# 📡 35 - ¿QUÉ ES REQUEST Y RESPONSE?

### Request

La solicitud enviada por el cliente.

```text
Client
 ↓
Request
 ↓
Server
```

Puede contener:

```text
Method
URL
Headers
Body
Query Params
Path Params
```

### Response

La respuesta del servidor.

```text
Server
 ↓
Response
 ↓
Client
```

Puede contener:

```text
Status Code
Headers
Body
```

---

# 🚦 36 - ¿QUÉ ES UN STATUS CODE?

Es un código HTTP que indica el resultado de una solicitud.

### 2xx — éxito

```text
200 OK
201 Created
204 No Content
```

### 3xx — redirección

```text
301
302
304
```

### 4xx — error del cliente

```text
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
```

### 5xx — error del servidor

```text
500 Internal Server Error
502 Bad Gateway
503 Service Unavailable
```

---

# 🧠 37 - ¿QUÉ ES LÓGICA DE NEGOCIO?

La lógica de negocio son las **reglas que determinan cómo debe funcionar el sistema según el dominio**.

Ejemplo:

```text
Una transferencia bancaria:

Saldo >= cantidad
        ↓
Permitir transferencia
```

No es simplemente:

```text
if
for
function
```

Es la regla del negocio que esas instrucciones están implementando.

---

# 🏛️ 38 - ¿QUÉ ES ARQUITECTURA DE SOFTWARE?

La arquitectura define cómo se organizan las partes principales de un sistema y cómo se relacionan.

```text
Application
     │
 ┌───┼────┐
 ▼   ▼    ▼
UI  Logic Data
```

Ejemplos:

```text
MVC
MVVM
Layered
Clean
Hexagonal
Microservices
Monolith
Client-Server
```

---

# 🎨 39 - ¿QUÉ ES UI?

**UI — User Interface** es la interfaz con la que interactúa el usuario.

```text
Buttons
Forms
Menus
Tables
Cards
Dialogs
```

Por ejemplo:

```text
Angular Component
      ↓
     UI
      ↓
    User
```

---

# 🧠 40 - ¿QUÉ ES UX?

**UX — User Experience** es la experiencia completa que tiene una persona al utilizar un producto.

Incluye:

* facilidad de uso
* navegación
* accesibilidad
* feedback
* tiempos de respuesta
* flujo de usuario

### Diferencia

```text
UI
↓
¿Cómo se ve/interactúa?

UX
↓
¿Cómo se siente y funciona la experiencia?
```

---

# 🧪 41 - ¿QUÉ ES TESTING?

Testing es el proceso de verificar que el software funciona como esperamos.

Tipos comunes:

```text
Unit Tests
Integration Tests
E2E Tests
```

Conceptualmente:

```text
Unit
 ↓
Component
 ↓
Application
```

---

# 🧱 42 - ¿QUÉ ES MODULARIDAD?

La modularidad consiste en dividir un sistema en partes relativamente independientes y bien definidas.

```text
Application
│
├── Auth
├── Users
├── Payments
└── Reports
```

Una buena modularidad facilita:

* mantenimiento
* testing
* reutilización
* colaboración
* escalabilidad

---

# 🔗 43 - ¿QUÉ ES ACOPLAMIENTO?

El acoplamiento indica **qué tan dependiente es un componente de otros componentes**.

### Alto acoplamiento

```text
A
 ↓
B
 ↓
C
 ↓
D
```

Cambiar una parte puede afectar muchas otras.

### Bajo acoplamiento

```text
A ──→ Interface ←── B
```

Los componentes dependen menos de implementaciones concretas.

### 🎯 Objetivo

> **Preferir bajo acoplamiento cuando sea razonable.**

---

# 🎯 44 - ¿QUÉ ES COHESIÓN?

La cohesión indica qué tan relacionadas están las responsabilidades dentro de un módulo.

### Alta cohesión

```text
AuthService
 ├── login
 ├── logout
 └── refreshToken
```

Todo está relacionado con autenticación.

### Baja cohesión

```text
Utils
 ├── login
 ├── calculateTax
 ├── sendEmail
 ├── formatDate
 └── connectDatabase
```

Tiene responsabilidades poco relacionadas.

### 📌 Idea principal

> **Alta cohesión + bajo acoplamiento** suele ser una buena meta de diseño.

---

# 🧹 45 - ¿QUÉ ES REFACTORING?

Refactoring es modificar la estructura interna del código **sin cambiar su comportamiento externo esperado**.

Por ejemplo:

```text
Código complicado
       ↓
Refactor
       ↓
Código más limpio
```

Puede mejorar:

* legibilidad
* mantenibilidad
* reutilización
* estructura
* complejidad

---

# 📐 46 - ¿QUÉ ES UNA ABSTRACCIÓN?

Una abstracción oculta detalles innecesarios y expone solamente lo importante.

Por ejemplo:

```text
Database
   ↓
Repository
   ↓
Application
```

La aplicación puede utilizar:

```text
repository.findUser()
```

sin necesitar conocer todos los detalles internos de PostgreSQL.

### 📌 Idea principal

> **Abstracción = ocultar complejidad innecesaria detrás de una interfaz más simple.**

---

# 🔌 47 - ¿QUÉ ES UNA INTERFAZ?

Una interfaz define un **contrato** que establece qué operaciones o estructura debe proporcionar algo.

En TypeScript:

```ts
interface User {
  id: number;
  name: string;
}
```

También puede utilizarse para abstraer comportamientos:

```ts
interface PaymentGateway {
  pay(amount: number): Promise<void>;
}
```

---

# 🧩 48 - ¿QUÉ ES UN MÓDULO?

Un módulo es una unidad de código que agrupa funcionalidades relacionadas y define qué puede importar o exportar.

Por ejemplo:

```text
auth/
├── auth.service.ts
├── auth.controller.ts
├── auth.guard.ts
└── index.ts
```

Conceptualmente:

```text
Module
 ↓
Encapsula funcionalidad
 ↓
Exports / Imports
```

---

# 📦 49 - ¿QUÉ ES UN PACKAGE?

Un package es una unidad distribuible de software que puede contener código, metadata y dependencias.

Por ejemplo, en npm:

```text
express
rxjs
lodash
```

se distribuyen como paquetes.

---

# 🚀 50 - ¿QUÉ ES DEPLOYMENT?

Deployment es el proceso de poner una aplicación en un entorno donde puede ser utilizada.

Conceptualmente:

```text
Source Code
   ↓
Build
   ↓
Artifact / Image
   ↓
Server / Cloud
   ↓
Application Running
```

---

# 🔄 51 - ¿QUÉ ES CI/CD?

**CI/CD** representa prácticas para automatizar procesos como integración, testing, build y deployment.

### CI

Continuous Integration:

```text
Push
 ↓
Build
 ↓
Tests
 ↓
Validation
```

### CD

Continuous Delivery/Deployment:

```text
Validated Code
      ↓
   Release
      ↓
 Deployment
```

Herramientas:

```text
GitHub Actions
GitLab CI/CD
Jenkins
CircleCI
```

---

# 📦 52 - ¿QUÉ ES UN CONTENEDOR?

Un container es una unidad aislada de ejecución que contiene una aplicación y lo necesario para ejecutarla.

Conceptualmente:

```text
Application
     +
Dependencies
     +
Runtime
     ↓
Container
```

Docker utiliza containers para ejecutar aplicaciones de manera reproducible.

---

# 🐳 53 - ¿QUÉ ES DOCKER?

Docker es una plataforma para construir, distribuir y ejecutar aplicaciones utilizando containers.

Conceptualmente:

```text
Dockerfile
   ↓
Image
   ↓
Container
```

---

# 🖼️ 54 - ¿QUÉ ES UNA IMAGE?

Una Docker Image es un artefacto inmutable utilizado como plantilla para crear containers.

```text
Image
  ↓
docker run
  ↓
Container
```

---

# ☁️ 55 - ¿QUÉ ES CLOUD?

Cloud computing permite utilizar recursos informáticos a través de infraestructura proporcionada por un proveedor.

Ejemplos:

```text
AWS
Azure
Google Cloud
```

Puedes consumir:

```text
Compute
Storage
Database
Networking
Containers
Serverless
```

---

# 📈 56 - ¿QUÉ ES ESCALABILIDAD?

La escalabilidad es la capacidad de un sistema para manejar un aumento de carga.

### Vertical

Aumentar recursos de una máquina:

```text
2 CPU
 ↓
8 CPU
```

### Horizontal

Agregar más instancias:

```text
Instance 1
Instance 2
Instance 3
Instance 4
```

---

# ⚡ 57 - ¿QUÉ ES PERFORMANCE?

Performance describe qué tan eficientemente funciona un sistema.

Puede medirse mediante:

```text
Latency
Throughput
CPU
Memory
Response Time
Load Time
```

### Ejemplo

```text
Request
   ↓
100 ms
```

tiene menor latencia que:

```text
Request
   ↓
2 seconds
```

---

# 🔐 58 - ¿QUÉ ES SEGURIDAD?

La seguridad busca proteger:

```text
Confidentiality
Integrity
Availability
```

Conocido como:

```text
CIA Triad
```

Debes estudiar también:

* autenticación
* autorización
* cifrado
* hashing
* secrets
* validación
* sanitización
* HTTPS
* vulnerabilidades
* principio de mínimo privilegio

---

# 🧠 59 - ¿QUÉ ES ABSTRACCIÓN DE COMPLEJIDAD?

Una gran parte de la ingeniería de software consiste en **no tener que conocer todos los detalles internos de cada herramienta**.

Por ejemplo:

```text
Angular
   ↓
HTTP Client
   ↓
Browser
   ↓
TCP/IP
   ↓
Network
   ↓
Server
```

Tú puedes utilizar:

```ts
http.get('/users');
```

sin implementar manualmente todo TCP/IP.

Esto es posible gracias a capas de abstracción.

---

# 🗺️ MAPA MENTAL GENERAL

Todos estos conceptos se relacionan:

```text
                    PROGRAMACIÓN
                         │
          ┌──────────────┴──────────────┐
          ▼                             ▼
       PROBLEMA                       DATOS
          │                             │
      ALGORITMO                 ESTRUCTURAS DE DATOS
          │                             │
          ▼                             ▼
       CÓDIGO                        STORAGE
          │
          ▼
      PARADIGMAS
          │
    ┌─────┼─────────┐
    ▼     ▼         ▼
 Imperativo OOP  Funcional
    │
    └───── Reactivo / Declarativo
          │
          ▼
       DISEÑO
          │
    ┌─────┴──────┐
    ▼            ▼
Design Patterns  Architecture
    │            │
    ▼            ▼
 Factory        MVC
 Observer       Clean
 Strategy       Hexagonal
 Adapter        Microservices
          │
          ▼
      APLICACIÓN
          │
    ┌─────┴──────┐
    ▼            ▼
  Frontend     Backend
    │            │
    └──────┬─────┘
           ▼
          API
           │
           ▼
       Database
           │
           ▼
      Deployment
           │
     ┌─────┴─────┐
     ▼           ▼
    Cloud      Docker
                 │
                 ▼
              CI/CD
```

# ⭐ PREGUNTAS QUE DEBERÍAS PODER RESPONDER

Al terminar este bloque, intenta poder explicar sin apuntes:

```text
❓ ¿Qué es un algoritmo?

❓ ¿Qué diferencia hay entre código fuente y lenguaje de máquina?

❓ ¿Qué diferencia hay entre compilado, interpretado y transpilado?

❓ ¿Qué es Big O y para qué sirve?

❓ ¿Qué es una estructura de datos?

❓ ¿Qué es un paradigma?

❓ ¿Qué es una librería?

❓ ¿Qué es un framework?

❓ ¿Cuál es la diferencia entre librería y framework?

❓ ¿Qué es una API?

❓ ¿Qué es un endpoint?

❓ ¿Qué diferencia hay entre frontend y backend?

❓ ¿Qué es un servidor?

❓ ¿Qué es una base de datos?

❓ ¿Qué es un servicio?

❓ ¿Qué es un patrón de diseño?

❓ ¿Qué es un patrón de arquitectura?

❓ ¿Qué diferencia hay entre arquitectura y patrón de diseño?

❓ ¿Qué es Git?

❓ ¿Para qué sirve versionar código?

❓ ¿Qué son Conventional Commits?

❓ ¿Qué es autenticación?

❓ ¿Qué es autorización?

❓ ¿Qué es HTTP?

❓ ¿Qué es un request?

❓ ¿Qué es un response?

❓ ¿Qué es un status code?

❓ ¿Qué es lógica de negocio?

❓ ¿Qué es modularidad?

❓ ¿Qué es acoplamiento?

❓ ¿Qué es cohesión?

❓ ¿Qué es una abstracción?

❓ ¿Qué es una interfaz?

❓ ¿Qué es refactoring?

❓ ¿Qué es testing?

❓ ¿Qué es CI/CD?

❓ ¿Qué es deployment?

❓ ¿Qué es un container?

❓ ¿Qué es Docker?

❓ ¿Qué es una Docker Image?

❓ ¿Qué es escalabilidad?

❓ ¿Qué es performance?

❓ ¿Qué es seguridad?
```

### 🎯 La idea final

No necesitas convertirte en experto en cada uno de estos temas antes de continuar con tu stack.

Lo importante es que cuando aparezca algo como:

```text
Angular
RxJS
Express
PostgreSQL
Docker
GitHub Actions
```

puedas ubicarlo dentro del mapa:

```text
¿Qué problema resuelve?
        ↓
¿Qué concepto utiliza?
        ↓
¿Qué paradigma aplica?
        ↓
¿Qué estructura utiliza?
        ↓
¿Qué patrón podría usar?
        ↓
¿Cómo se comunica?
        ↓
¿Cómo se despliega?
```

Ese tipo de **pensamiento conceptual** es mucho más valioso que simplemente memorizar comandos o APIs.
