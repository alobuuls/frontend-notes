# 🏗️ REACT ARCHITECTURE

La **arquitectura de React** es la forma en la que organizamos una aplicación para que su código sea:

* 🧩 Fácil de entender
* ♻️ Reutilizable
* 🛠️ Fácil de mantener
* 📈 Fácil de escalar
* 🧪 Fácil de probar
* 👥 Fácil de trabajar en equipo

React no obliga a utilizar una estructura de carpetas específica. Esto significa que **tú decides cómo organizar el proyecto**.

La arquitectura empieza a ser importante especialmente cuando una aplicación deja de ser pequeña.

---

## 📑 ÍNDICE — REACT ARCHITECTURE

- [🏗️ REACT ARCHITECTURE](#️-react-architecture)
  - [📑 ÍNDICE — REACT ARCHITECTURE](#-índice--react-architecture)
- [1️⃣ 📁 ESTRUCTURA DE CARPETAS](#1️⃣--estructura-de-carpetas)
- [2️⃣ 🧩 COMPONENT ORGANIZATION](#2️⃣--component-organization)
    - [🎯 Buena práctica](#-buena-práctica)
- [3️⃣ 🧠 SEPARATION OF CONCERNS](#3️⃣--separation-of-concerns)
    - [🎯 Objetivo](#-objetivo)
- [4️⃣ ♻️ REUSABLE COMPONENTS](#4️⃣-️-reusable-components)
    - [🎯 Características](#-características)
- [5️⃣ 🪝 CUSTOM HOOKS](#5️⃣--custom-hooks)
- [6️⃣ 🌐 SERVICES](#6️⃣--services)
    - [🎯 Ventaja](#-ventaja)
- [7️⃣ 🛠️ UTILITIES](#7️⃣-️-utilities)
    - [🎯 Diferencia importante](#-diferencia-importante)
- [8️⃣ 📐 TYPES / INTERFACES](#8️⃣--types--interfaces)
- [9️⃣ 🗂️ FEATURE-BASED ARCHITECTURE](#9️⃣-️-feature-based-architecture)
    - [🆚 Comparación](#-comparación)
- [🔟 🧩 COMPONENT COMPOSITION](#--component-composition)
    - [🎯 Idea clave](#-idea-clave)
- [1️⃣1️⃣ 🎭 PRESENTATIONAL VS CONTAINER](#1️⃣1️⃣--presentational-vs-container)
  - [🎨 Presentational Components](#-presentational-components)
  - [🧠 Container Components](#-container-components)
    - [⚠️ Importante](#️-importante)
- [1️⃣2️⃣ 🔗 DEPENDENCY MANAGEMENT](#1️⃣2️⃣--dependency-management)
    - [🎯 Objetivo](#-objetivo-1)
- [1️⃣3️⃣ 📈 SCALABLE REACT APPLICATIONS](#1️⃣3️⃣--scalable-react-applications)
- [🧠 MODELO MENTAL DE ARQUITECTURA](#-modelo-mental-de-arquitectura)
- [🏆 IDEA CLAVE](#-idea-clave-1)

---

# 1️⃣ 📁 ESTRUCTURA DE CARPETAS

Una estructura tradicional puede separar el código según su responsabilidad:

```text
src/
├── components/
├── pages/
├── hooks/
├── services/
├── context/
├── utils/
├── types/
└── assets/
```

Cada carpeta tiene una responsabilidad diferente.

| Carpeta       | Responsabilidad                        |
| ------------- | -------------------------------------- |
| `components/` | Componentes reutilizables              |
| `pages/`      | Vistas o páginas                       |
| `hooks/`      | Custom Hooks                           |
| `services/`   | Comunicación con APIs y lógica externa |
| `context/`    | Contextos de React                     |
| `utils/`      | Funciones auxiliares                   |
| `types/`      | Types e interfaces                     |
| `assets/`     | Imágenes, fuentes, archivos estáticos  |

📌 Esta estructura funciona bien para proyectos pequeños y medianos.

Pero no es la única forma de organizar React.

---

# 2️⃣ 🧩 COMPONENT ORGANIZATION

Los componentes deben organizarse de acuerdo con su **responsabilidad**.

Por ejemplo:

```text
components/
├── Button/
├── Modal/
├── Navbar/
├── Card/
└── Input/
```

Cada componente puede contener sus propios archivos:

```text
Button/
├── Button.tsx
├── Button.test.tsx
└── Button.css
```

Esto permite mantener juntos los archivos relacionados con el componente.

### 🎯 Buena práctica

Un componente debería tener una responsabilidad clara.

Por ejemplo:

```text
UserCard
```

debería encargarse principalmente de **representar un usuario**, no de:

* hacer peticiones HTTP;
* manejar autenticación;
* modificar directamente la base de datos;
* contener toda la lógica de negocio de la aplicación.

---

# 3️⃣ 🧠 SEPARATION OF CONCERNS

**Separation of Concerns** significa separar diferentes responsabilidades del sistema.

En lugar de tener:

```text
Component
   │
   ├── UI
   ├── API
   ├── validación
   ├── transformación de datos
   ├── lógica de negocio
   └── estado global
```

intentamos separar esas responsabilidades:

```text
Component
   │
   └── UI

Hook
   │
   └── lógica reutilizable

Service
   │
   └── API

Utils
   │
   └── funciones auxiliares

Types
   │
   └── estructuras de datos
```

### 🎯 Objetivo

Cada parte del sistema debería hacer **una cosa concreta** y colaborar con las demás.

---

# 4️⃣ ♻️ REUSABLE COMPONENTS

Un componente reutilizable es aquel que puede utilizarse en diferentes partes de la aplicación.

Por ejemplo:

```tsx
<Button />
```

puede utilizarse en:

```text
Login
Register
Users
Guests
Settings
```

En lugar de crear:

```text
LoginButton
RegisterButton
UsersButton
GuestsButton
```

podemos crear un componente genérico:

```text
Button
```

y configurarlo mediante props.

```text
<Button variant="primary" />
<Button variant="danger" />
<Button variant="secondary" />
```

### 🎯 Características

Un buen componente reutilizable suele ser:

* Independiente.
* Configurable mediante props.
* Fácil de entender.
* Fácil de probar.
* No demasiado acoplado a una página específica.

---

# 5️⃣ 🪝 CUSTOM HOOKS

Los **Custom Hooks** permiten extraer y reutilizar lógica de React.

Por ejemplo:

```text
useAuth()
useFetch()
useForm()
useDebounce()
usePagination()
```

En lugar de repetir la misma lógica:

```text
Component A
   └── lógica de autenticación

Component B
   └── misma lógica

Component C
   └── misma lógica
```

podemos extraerla:

```text
             useAuth()
            /    |    \
           ▼     ▼     ▼
      Component Component Component
```

📌 Los Custom Hooks deben utilizarse principalmente para **reutilizar lógica**, no simplemente para mover código a otro archivo.

---

# 6️⃣ 🌐 SERVICES

Los **services** suelen encargarse de la comunicación con sistemas externos.

Por ejemplo:

```text
services/
├── auth.service.ts
├── users.service.ts
├── guests.service.ts
└── products.service.ts
```

Un servicio puede encargarse de:

```text
React
  ↓
Service
  ↓
HTTP Request
  ↓
API
```

Por ejemplo:

```text
GuestsComponent
       ↓
GuestsService
       ↓
GET /guests
       ↓
Backend
```

### 🎯 Ventaja

El componente no necesita conocer todos los detalles de cómo se realiza la petición.

El componente puede pensar en:

> "Necesito los guests."

Mientras el servicio se encarga de:

> "Cómo obtenerlos de la API."

---

# 7️⃣ 🛠️ UTILITIES

Los **utilities** son funciones auxiliares reutilizables que normalmente no necesitan pertenecer a un componente.

Ejemplos:

```text
utils/
├── formatDate.ts
├── formatCurrency.ts
├── validators.ts
├── capitalize.ts
└── debounce.ts
```

Por ejemplo:

```text
formatDate()
```

puede utilizarse desde diferentes partes:

```text
Component A ──┐
Component B ──┼──→ formatDate()
Component C ──┘
```

### 🎯 Diferencia importante

Un utility normalmente:

* No depende de React.
* No necesita JSX.
* No necesita Hooks.
* Recibe datos y devuelve resultados.

---

# 8️⃣ 📐 TYPES / INTERFACES

Los `types` e `interfaces` describen la estructura de los datos utilizando TypeScript.

Por ejemplo:

```ts
interface User {
  id: number;
  name: string;
  email: string;
}
```

Podemos organizar estos tipos:

```text
types/
├── user.types.ts
├── guest.types.ts
├── auth.types.ts
└── api.types.ts
```

Esto permite mantener contratos claros entre diferentes partes de la aplicación.

Por ejemplo:

```text
API
 ↓
User
 ↓
Service
 ↓
Component
 ↓
UI
```

Todos pueden trabajar con una estructura conocida.

---

# 9️⃣ 🗂️ FEATURE-BASED ARCHITECTURE

La arquitectura tradicional organiza el código **por tipo**:

```text
components/
hooks/
services/
types/
utils/
```

Pero otra estrategia es organizarlo **por funcionalidad**.

Por ejemplo:

```text
features/
├── auth/
├── users/
└── guests/
```

Cada feature contiene todo lo relacionado con ella.

Por ejemplo:

```text
features/
└── guests/
    ├── components/
    ├── hooks/
    ├── services/
    ├── types/
    └── utils/
```

Así:

```text
guests/
   ├── UI
   ├── lógica
   ├── API
   ├── tipos
   └── utilidades
```

### 🆚 Comparación

**Organización por tipo:**

```text
components/
hooks/
services/
types/
```

**Organización por feature:**

```text
features/
├── auth/
├── users/
└── guests/
```

La segunda suele resultar especialmente interesante cuando la aplicación empieza a crecer.

---

# 🔟 🧩 COMPONENT COMPOSITION

**Composition** significa construir componentes complejos combinando componentes más pequeños.

Por ejemplo:

```text
Dashboard
   │
   ├── Navbar
   ├── Sidebar
   ├── UserCard
   └── DataTable
```

En lugar de crear un componente gigantesco:

```text
MegaDashboardComponent
```

creamos piezas pequeñas que colaboran entre sí.

```text
Small Components
       ↓
  Composition
       ↓
Complex UI
```

### 🎯 Idea clave

> En React, muchas interfaces se construyen **componiendo componentes**, no creando una jerarquía enorme de componentes especializados.

---

# 1️⃣1️⃣ 🎭 PRESENTATIONAL VS CONTAINER

Es un patrón arquitectónico tradicional de React.

## 🎨 Presentational Components

Se enfocan principalmente en **cómo se ve la interfaz**.

Por ejemplo:

```text
UserCard
Button
Avatar
Table
```

Reciben información mediante props:

```text
Props
 ↓
Presentational Component
 ↓
UI
```

---

## 🧠 Container Components

Se encargan principalmente de la **lógica y obtención de datos**.

Por ejemplo:

```text
UsersContainer
   │
   ├── obtiene usuarios
   ├── maneja loading
   ├── maneja errores
   └── pasa datos
          ↓
       UsersTable
```

### ⚠️ Importante

Este patrón fue muy popular en React antes de la generalización de Hooks.

Actualmente no necesitas obligatoriamente separar todo en:

```text
Container
+
Presentational
```

Muchas aplicaciones modernas utilizan:

```text
Component
   +
Custom Hook
   +
Service
```

Por eso conviene **conocer el patrón**, pero no convertirlo en una regla obligatoria.

---

# 1️⃣2️⃣ 🔗 DEPENDENCY MANAGEMENT

Una aplicación tiene muchas dependencias:

```text
React
React Router
Axios
Zustand
Testing Library
etc.
```

La arquitectura debe evitar que todo dependa directamente de todo.

Por ejemplo, sería problemático tener:

```text
Component
   ↓
Component
   ↓
API
   ↓
Database
```

El componente termina demasiado acoplado.

Una separación más limpia puede ser:

```text
Component
    ↓
Hook
    ↓
Service
    ↓
API
```

Cada capa conoce únicamente lo que necesita.

### 🎯 Objetivo

Reducir el **acoplamiento** entre partes de la aplicación.

---

# 1️⃣3️⃣ 📈 SCALABLE REACT APPLICATIONS

Una aplicación escalable debe poder crecer sin convertirse en un conjunto de archivos difíciles de mantener.

Una aplicación pequeña podría comenzar así:

```text
src/
├── App.tsx
├── components/
└── pages/
```

Pero cuando crece:

```text
src/
├── components/
├── pages/
├── hooks/
├── services/
├── context/
├── utils/
├── types/
└── features/
```

Y una arquitectura basada en features podría evolucionar hacia:

```text
src/
├── app/
├── features/
│   ├── auth/
│   ├── users/
│   └── guests/
├── components/
├── hooks/
├── services/
├── utils/
└── types/
```

La idea no es agregar carpetas porque sí.

La estructura debe **evolucionar junto con la complejidad de la aplicación**.

---

# 🧠 MODELO MENTAL DE ARQUITECTURA

Una forma sencilla de entender cómo pueden relacionarse las piezas:

```text
                         🏗️ REACT APP
                              │
               ┌──────────────┴──────────────┐
               ▼                             ▼
             Pages                      Components
               │                             │
               └──────────────┬──────────────┘
                              ▼
                         Custom Hooks
                              │
                    ┌─────────┴─────────┐
                    ▼                   ▼
                Services             Context
                    │                   │
                    ▼                   ▼
                   API              Global State
                    │
                    ▼
                Backend
```

Y alrededor de todo:

```text
Types
Utils
Tests
Assets
```

---

# 🏆 IDEA CLAVE

No existe una única arquitectura "correcta" para React.

Puedes empezar con algo sencillo:

```text
src/
├── components/
├── pages/
└── App.tsx
```

y evolucionar:

```text
src/
├── components/
├── pages/
├── hooks/
├── services/
├── utils/
├── types/
└── features/
```

La decisión arquitectónica debe responder principalmente a estas preguntas:

```text
❓ ¿Quién usa este código?
❓ ¿Qué responsabilidad tiene?
❓ ¿Se reutiliza?
❓ ¿De qué depende?
❓ ¿Dónde debería vivir?
❓ ¿Qué tan grande puede llegar a ser esta aplicación?
```

> [!IMPORTANT]
> **Una buena arquitectura no consiste en tener muchas carpetas.** Consiste en conseguir que cada pieza tenga una responsabilidad clara, que el código pueda reutilizarse y que la aplicación pueda crecer sin aumentar innecesariamente la complejidad.
