# 📄 02 - Firebase Services in Angular ⭐⭐⭐

> 🔥 **Este es uno de los documentos más importantes de esta carpeta.**

Aquí estudias cómo integrar Firebase siguiendo la arquitectura de Angular, evitando colocar queries, autenticación y operaciones de Storage directamente dentro de los componentes.

---

## 📑 Índice

- [📄 02 - Firebase Services in Angular ⭐⭐⭐](#-02---firebase-services-in-angular-)
  - [📑 Índice](#-índice)
  - [🧠 ¿Por qué utilizar Angular Services?](#-por-qué-utilizar-angular-services)
  - [🧩 Responsabilidades](#-responsabilidades)
  - [💉 Dependency Injection](#-dependency-injection)
  - [🔥 Firebase dentro de los Services](#-firebase-dentro-de-los-services)
  - [🔐 AuthService](#-authservice)
  - [🗄️ Firestore Services](#️-firestore-services)
  - [📁 Storage Services](#-storage-services)
  - [♻️ Encapsulación](#️-encapsulación)
  - [♻️ Reutilización](#️-reutilización)
  - [🔄 Observables](#-observables)
  - [⚠️ Manejo de errores](#️-manejo-de-errores)
  - [🏗️ Arquitectura completa](#️-arquitectura-completa)
  - [⭐ Idea fundamental](#-idea-fundamental)
    - [🧠 Qué debes recordar](#-qué-debes-recordar)

## 🧠 ¿Por qué utilizar Angular Services?

Un componente debería concentrarse principalmente en la **interfaz y el estado de la vista**.

Si colocas toda la lógica de Firebase directamente dentro del componente:

```text
UsersComponent
      ↓
Firestore
      ↓
Queries
      ↓
CRUD
      ↓
Error handling
```

el componente empieza a acumular demasiadas responsabilidades.

Una arquitectura más limpia es:

```text
UsersComponent
      ↓
UsersService
      ↓
Firebase SDK
      ↓
Firebase
```

El componente **solicita una operación** y el service se encarga de ejecutarla.

---

## 🧩 Responsabilidades

Una separación típica sería:

| Component    | Service           |
| ------------ | ----------------- |
| UI           | Firebase          |
| Estado       | Queries           |
| Eventos      | CRUD              |
| Presentación | Auth              |
|              | Storage           |
|              | Manejo de errores |

Por ejemplo:

```text
UsersComponent
      ↓
getUsers()
      ↓
UsersService
      ↓
Firestore
```

El componente no necesita conocer todos los detalles de cómo se realiza la consulta.

---

## 💉 Dependency Injection

Angular permite que los services sean proporcionados e inyectados en los componentes.

Conceptualmente:

```text
UsersComponent
      ↓
Dependency Injection
      ↓
UsersService
      ↓
Firebase
```

Por ejemplo:

```typescript
constructor(private usersService: UsersService) {}
```

o utilizando el sistema moderno de `inject()`:

```typescript
private usersService = inject(UsersService);
```

La idea importante no es memorizar una sintaxis concreta, sino entender que:

> **El componente recibe una dependencia que contiene la lógica necesaria para trabajar con Firebase.**

---

## 🔥 Firebase dentro de los Services

Puedes tener diferentes services dependiendo del dominio o servicio de Firebase.

Por ejemplo:

```text
services/
│
├── auth.service.ts
├── users.service.ts
├── storage.service.ts
└── products.service.ts
```

Conceptualmente:

```text
AuthService
     ↓
Firebase Authentication
```

```text
UsersService
     ↓
Firestore
```

```text
StorageService
     ↓
Firebase Storage
```

Esto permite mantener separadas las responsabilidades.

---

## 🔐 AuthService

Un `AuthService` puede encapsular las operaciones relacionadas con autenticación:

```text
AuthService
   │
   ├── Login
   ├── Register
   ├── Logout
   └── Auth State
```

El componente solamente necesita interactuar con el service:

```text
LoginComponent
      ↓
AuthService
      ↓
Firebase Auth
```

No debería necesitar conocer todos los detalles internos de Firebase Authentication.

---

## 🗄️ Firestore Services

Para trabajar con Firestore puedes crear services orientados a una determinada entidad.

Por ejemplo:

```text
UsersComponent
      ↓
UsersService
      ↓
Firestore
```

Y el service puede encargarse de operaciones como:

```text
UsersService
│
├── getUsers()
├── getUser()
├── createUser()
├── updateUser()
└── deleteUser()
```

La ventaja es que la lógica de acceso a datos queda centralizada.

---

## 📁 Storage Services

El mismo principio aplica a Firebase Storage:

```text
ProfileComponent
      ↓
StorageService
      ↓
Firebase Storage
```

El service puede encargarse de:

```text
StorageService
│
├── uploadFile()
├── getDownloadUrl()
├── deleteFile()
└── replaceFile()
```

Así el componente se preocupa principalmente por:

```text
Seleccionar archivo
↓
Mostrar progreso
↓
Actualizar UI
```

mientras el service maneja la comunicación con Storage.

---

## ♻️ Encapsulación

Uno de los principales beneficios es **encapsular la implementación de Firebase**.

En lugar de que varios componentes conozcan directamente el SDK:

```text
Component A ──┐
Component B ──┼──→ Firebase
Component C ──┘
```

puedes centralizarlo:

```text
Component A ──┐
Component B ──┼──→ Service ──→ Firebase
Component C ──┘
```

Esto reduce el acoplamiento entre la UI y Firebase.

---

## ♻️ Reutilización

Un mismo service puede utilizarse desde diferentes componentes.

```text
             ┌── UsersComponent
             │
             ├── AdminComponent
             │
             └── ProfileComponent
                       ↓
                  UsersService
                       ↓
                    Firestore
```

En lugar de implementar la misma lógica de Firebase varias veces.

---

## 🔄 Observables

Los services de Angular pueden exponer datos mediante `Observable`.

Por ejemplo:

```text
Firebase
   ↓
Observable
   ↓
Service
   ↓
Component
   ↓
UI
```

Esto es especialmente útil con datos en tiempo real.

```text
Firestore
   ↓
Realtime updates
   ↓
Observable
   ↓
Angular
   ↓
UI
```

El componente puede suscribirse al flujo o consumirlo mediante mecanismos como `async`.

---

## ⚠️ Manejo de errores

El service también es un buen lugar para centralizar o transformar errores provenientes de Firebase.

Conceptualmente:

```text
Component
    ↓
Service
    ↓
Firebase
    ↓
❌ Error
    ↓
Service
    ↓
Component
```

Por ejemplo, un error de Firebase puede convertirse en un error que tenga más sentido para la aplicación:

```text
Firebase Error
      ↓
Service
      ↓
Application Error
      ↓
Component
      ↓
UI
```

Esto evita que cada componente tenga que conocer todos los códigos y detalles internos del SDK.

---

## 🏗️ Arquitectura completa

La idea general queda así:

```text
                    Angular
                       │
              ┌────────┴────────┐
              ↓                 ↓
        Components          Components
              │                 │
              └────────┬────────┘
                       ↓
                    Services
                       │
          ┌────────────┼────────────┐
          ↓            ↓            ↓
      AuthService  UsersService  StorageService
          │            │            │
          ↓            ↓            ↓
       Firebase      Firestore     Storage
```

---

## ⭐ Idea fundamental

No se trata simplemente de:

> **"Crear un service porque Angular lo recomienda."**

La idea es conseguir una separación clara:

```text
Component
   ↓
Presentación / UI
```

```text
Service
   ↓
Lógica de interacción con Firebase
```

```text
Firebase SDK
   ↓
Comunicación con Firebase
```

```text
Firebase
   ↓
Backend Services
```

Por eso, ante una operación como:

```text
Crear usuario
```

la arquitectura debería verse aproximadamente así:

```text
UsersComponent
      ↓
UsersService.createUser()
      ↓
Firebase SDK
      ↓
Firestore
```

Y no:

```text
UsersComponent
      ↓
Firebase SDK
      ↓
Firestore
```

### 🧠 Qué debes recordar

> **Los Angular Services actúan como una capa de acceso y encapsulación entre los componentes y Firebase, permitiendo reutilizar la lógica, mantener los componentes más limpios y centralizar operaciones, observables y manejo de errores.**
