# 📄 04 - Firebase Architecture in Angular

🔥🔥 **Este documento sirve para unir toda la arquitectura.**

Hasta ahora estudiaste Firebase y Angular por separado. Aquí debes entender **cómo se distribuyen las responsabilidades cuando ambos trabajan juntos**.

> **Angular se encarga de la aplicación y su UI; Firebase proporciona servicios backend administrados; cada capa tiene una responsabilidad concreta.**

---

## 📑 Índice

- [📄 04 - Firebase Architecture in Angular](#-04---firebase-architecture-in-angular)
  - [📑 Índice](#-índice)
  - [🏗️ Arquitectura general](#️-arquitectura-general)
  - [🧩 Responsabilidad de cada capa](#-responsabilidad-de-cada-capa)
    - [🖥️ Component](#️-component)
    - [⚙️ Angular Service](#️-angular-service)
    - [🔥 Firebase SDK](#-firebase-sdk)
  - [🔐 Autenticación](#-autenticación)
  - [🛡️ Guards](#️-guards)
    - [⚠️ Importante](#️-importante)
  - [🗄️ Firestore](#️-firestore)
  - [📁 Storage](#-storage)
  - [🔒 Security Rules](#-security-rules)
  - [🔄 Flujo completo de datos](#-flujo-completo-de-datos)
  - [🔐 Flujo completo de autenticación](#-flujo-completo-de-autenticación)
  - [🧠 Separación de responsabilidades](#-separación-de-responsabilidades)
  - [🏛️ Arquitectura completa](#️-arquitectura-completa)
  - [⭐ Lo que debes recordar](#-lo-que-debes-recordar)

## 🏗️ Arquitectura general

Una aplicación Angular + Firebase puede verse así:

```text
                 ANGULAR
                    │
                    ▼
               Components
                    │
                    ▼
                Services
                    │
                    ▼
             Firebase SDK
                    │
          ┌─────────┼─────────┐
          ▼         ▼         ▼
        Auth     Firestore   Storage
          │         │         │
          └─────────┼─────────┘
                    ▼
               Firebase
```

Pero esta arquitectura no significa que todos los componentes deban hablar directamente con Firebase.

Lo recomendable es mantener una separación clara:

```text
Component
    ↓
Service
    ↓
Firebase SDK
    ↓
Firebase Service
```

---

## 🧩 Responsabilidad de cada capa

### 🖥️ Component

El **Component** pertenece principalmente a la capa de presentación.

Se encarga de:

* UI
* Estado de la vista
* Eventos del usuario
* Mostrar información
* Reaccionar a cambios del estado

Por ejemplo:

```text
UsersComponent
      ↓
Mostrar usuarios
      ↓
Botón "Eliminar"
      ↓
Evento del usuario
```

No debería contener toda la lógica de acceso a Firebase.

---

### ⚙️ Angular Service

El **Service** actúa como intermediario entre Angular y Firebase.

```text
Component
    ↓
UsersService
    ↓
Firebase
```

Puede encargarse de:

* Consultar datos
* Crear documentos
* Actualizar datos
* Eliminar datos
* Gestionar autenticación
* Trabajar con Storage
* Transformar datos
* Manejar errores relacionados con Firebase

Esto permite que varios componentes reutilicen la misma lógica.

---

### 🔥 Firebase SDK

El SDK es la herramienta mediante la cual Angular puede comunicarse con Firebase.

```text
Angular Service
       ↓
Firebase SDK
       ↓
Firebase
```

Dependiendo de lo que necesites, puedes trabajar con:

```text
Firebase Auth
Firestore
Storage
Functions
Realtime Database
```

---

## 🔐 Autenticación

El flujo de autenticación puede verse así:

```text
Login
  ↓
AuthService
  ↓
Firebase Authentication
  ↓
Auth State
  ↓
Angular
```

El estado de autenticación puede utilizarse posteriormente para proteger rutas.

```text
User Login
    ↓
Firebase Auth
    ↓
Authenticated User
    ↓
Auth State
    ↓
Guard
    ↓
Protected Route
```

---

## 🛡️ Guards

Un **Guard** pertenece a la navegación de Angular.

Su responsabilidad es decidir si una ruta puede activarse.

```text
User
 ↓
Navigate
 ↓
Guard
 ↓
¿Está autenticado?
 ┌───────┴───────┐
 ▼               ▼
Sí               No
 ↓               ↓
Route           Redirect
```

Por ejemplo:

```text
/login
/dashboard
/profile
/settings
```

Una ruta protegida podría requerir que exista una sesión autenticada antes de permitir el acceso.

### ⚠️ Importante

Un Guard **no reemplaza las Security Rules**.

El Guard protege la navegación de la aplicación.

Las Security Rules protegen el acceso a los recursos de Firebase.

---

## 🗄️ Firestore

Cuando Angular necesita trabajar con datos:

```text
Component
    ↓
Service
    ↓
Firestore SDK
    ↓
Firestore
```

Por ejemplo:

```text
UsersComponent
      ↓
UsersService
      ↓
Firestore
      ↓
Users Collection
```

Y la autorización del acceso se evalúa mediante las reglas correspondientes.

```text
Service
   ↓
Firestore
   ↓
Security Rules
   ↓
ALLOW / DENY
```

---

## 📁 Storage

Para archivos ocurre algo similar:

```text
Component
    ↓
StorageService
    ↓
Firebase Storage SDK
    ↓
Firebase Storage
```

Por ejemplo:

```text
ProfileComponent
      ↓
StorageService
      ↓
Storage
      ↓
profile.jpg
```

Las **Storage Security Rules** determinan si la operación está permitida.

---

## 🔒 Security Rules

Las Security Rules forman parte de la seguridad de los recursos Firebase.

No pertenecen a la UI de Angular.

```text
Angular
   ↓
Firebase Request
   ↓
Security Rules
   ↓
ALLOW / DENY
```

Por ejemplo:

```text
Authenticated User
        ↓
Firestore Request
        ↓
Security Rules
        ↓
¿Tiene permiso?
    ┌────┴────┐
    ▼         ▼
  ALLOW      DENY
```

Esto es importante porque el frontend **no es un entorno confiable**.

---

## 🔄 Flujo completo de datos

Imagina que el usuario quiere obtener sus usuarios:

```text
User
 ↓
Angular Component
 ↓
UsersService
 ↓
Firebase SDK
 ↓
Firestore
 ↓
Security Rules
 ↓
Data
 ↓
UsersService
 ↓
Component
 ↓
UI
```

La información viaja a través de las diferentes responsabilidades en lugar de poner toda la lógica en el componente.

---

## 🔐 Flujo completo de autenticación

Un login podría verse así:

```text
User
 ↓
Login Component
 ↓
AuthService
 ↓
Firebase Auth
 ↓
Authenticated User
 ↓
Auth State
 ↓
Angular
 ↓
Guard
 ↓
Protected Route
```

Después, cuando el usuario intenta acceder a datos:

```text
User
 ↓
Angular
 ↓
Service
 ↓
Firebase
 ↓
Security Rules
 ↓
ALLOW / DENY
```

Observa que **Guard y Security Rules tienen responsabilidades diferentes**.

| Elemento           | Responsabilidad                |
| ------------------ | ------------------------------ |
| **Guard**          | ¿Puede entrar a esta ruta?     |
| **Security Rules** | ¿Puede acceder a este recurso? |

---

## 🧠 Separación de responsabilidades

Esta es probablemente la parte más importante del documento:

```text
Component
    ↓
UI / interacción

Service
    ↓
Lógica de comunicación con Firebase

Guard
    ↓
Protección de rutas

Firebase SDK
    ↓
Comunicación con Firebase

Firebase
    ↓
Backend Services

Security Rules
    ↓
Authorization de recursos
```

Cada pieza tiene un trabajo diferente.

---

## 🏛️ Arquitectura completa

Puedes visualizar una aplicación Angular + Firebase así:

```text
                         ANGULAR
                            │
                 ┌──────────┴──────────┐
                 ▼                     ▼
            Components              Guards
                 │                     │
                 ▼                     ▼
              Services          Route Protection
                 │
                 ▼
            Firebase SDK
                 │
        ┌────────┼─────────┐
        ▼        ▼         ▼
       Auth   Firestore  Storage
        │        │         │
        │        │         │
        └────────┼─────────┘
                 ▼
          Security Rules
                 │
          ┌──────┴──────┐
          ▼             ▼
        ALLOW          DENY
```

---

## ⭐ Lo que debes recordar

No necesitas memorizar la arquitectura como un diagrama rígido.

Debes poder razonar:

> **¿Dónde debería ir esta responsabilidad?**

| Necesidad                                       | Capa                |
| ----------------------------------------------- | ------------------- |
| UI                                              | `Component`         |
| Lógica reutilizable o comunicación con Firebase | `Service`           |
| Protección de navegación                        | `Guard`             |
| Almacenamiento o procesamiento backend          | `Firebase Services` |
| Autorización sobre datos                        | `Security Rules`    |

Y el flujo general:

```text
Component
    ↓
Service
    ↓
Firebase SDK
    ↓
Firebase
    ↓
Security Rules
    ↓
Resource
```

🔥 **Con este documento ya tienes la visión arquitectónica de cómo encaja Angular con todo lo que has estudiado de Firebase.**
