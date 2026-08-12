# 🧰 01 - Firebase CLI

## 📑 Índice

- [🧰 01 - Firebase CLI](#-01---firebase-cli)
  - [📑 Índice](#-índice)
  - [💻 ¿Qué es Firebase CLI?](#-qué-es-firebase-cli)
  - [🔐 Autenticación](#-autenticación)
    - [`firebase login`](#firebase-login)
    - [`firebase logout`](#firebase-logout)
  - [📋 Firebase Projects](#-firebase-projects)
    - [`firebase projects:list`](#firebase-projectslist)
  - [⚙️ `firebase init`](#️-firebase-init)
  - [📄 `firebase.json`](#-firebasejson)
  - [🔗 `.firebaserc`](#-firebaserc)
  - [🎯 `firebase use`](#-firebase-use)
  - [🚀 `firebase deploy`](#-firebase-deploy)
  - [🧪 Firebase Emulators](#-firebase-emulators)
  - [🔄 Flujo completo](#-flujo-completo)
  - [⭐ Comandos esenciales](#-comandos-esenciales)
  - [🧠 Lo que realmente debes recordar](#-lo-que-realmente-debes-recordar)

## 💻 ¿Qué es Firebase CLI?

**Firebase CLI (Command Line Interface)** es una herramienta que permite interactuar con Firebase desde la terminal.

En lugar de realizar determinadas operaciones exclusivamente desde Firebase Console, puedes utilizar comandos para:

* Autenticarte.
* Inicializar proyectos.
* Seleccionar proyectos.
* Desplegar aplicaciones.
* Ejecutar emuladores localmente.
* Consultar proyectos de Firebase.

```text
Terminal
   ↓
Firebase CLI
   ↓
Firebase
```

---

## 🔐 Autenticación

Antes de realizar determinadas operaciones, la CLI necesita saber con qué cuenta de Firebase estás trabajando.

### `firebase login`

```text
firebase login
```

Autentica la CLI con tu cuenta de Firebase.

```text
Terminal
   ↓
firebase login
   ↓
Firebase Account
```

### `firebase logout`

```text
firebase logout
```

Cierra la sesión de la cuenta utilizada por la CLI.

---

## 📋 Firebase Projects

Puedes consultar los proyectos de Firebase a los que tienes acceso.

### `firebase projects:list`

```text
firebase projects:list
```

Conceptualmente:

```text
Firebase Account
      ↓
Projects
      ↓
Project A
Project B
Project C
```

Esto resulta especialmente útil cuando trabajas con diferentes proyectos o entornos.

---

## ⚙️ `firebase init`

```text
firebase init
```

Inicializa Firebase dentro de un proyecto local.

Durante la inicialización puedes seleccionar los servicios que quieres configurar.

Conceptualmente:

```text
Local Project
     ↓
firebase init
     ↓
Firebase Configuration
```

Esto genera o configura los archivos necesarios para trabajar con Firebase.

---

## 📄 `firebase.json`

`firebase.json` contiene la **configuración de Firebase asociada al proyecto local**.

Puede contener configuraciones para servicios como:

```text
firebase.json
     │
     ├── Hosting
     ├── Functions
     ├── Firestore
     └── Emulators
```

Por ejemplo, puede indicar cómo debe configurarse Firebase Hosting o qué emuladores utilizar.

La idea fundamental es:

```text
firebase.json
      ↓
Configuración de Firebase
```

---

## 🔗 `.firebaserc`

`.firebaserc` relaciona el proyecto local con uno o más **Firebase Projects**.

Conceptualmente:

```text
Local Project
      ↓
.firebaserc
      ↓
Firebase Project
```

Esto permite indicar, por ejemplo, qué Firebase Project corresponde al proyecto local actual.

---

## 🎯 `firebase use`

```text
firebase use
```

Permite consultar o seleccionar el **Firebase Project** que utilizará el proyecto local.

Esto es especialmente útil cuando trabajas con diferentes proyectos, por ejemplo:

```text
Local Project
      │
      ├── DEV
      └── PROD
```

Puedes asociar diferentes aliases o seleccionar el proyecto correspondiente según el entorno.

---

## 🚀 `firebase deploy`

```text
firebase deploy
```

Despliega los servicios configurados en el proyecto local hacia Firebase.

Conceptualmente:

```text
Local Project
     ↓
Firebase CLI
     ↓
firebase deploy
     ↓
Firebase Project
```

Dependiendo de la configuración, el deployment puede involucrar Hosting, Functions, Firestore u otros servicios.

---

## 🧪 Firebase Emulators

Firebase proporciona **Local Emulator Suite** para ejecutar determinados servicios de Firebase localmente.

El comando principal es:

```text
firebase emulators:start
```

Esto permite desarrollar y probar sin depender directamente de los servicios de producción.

Conceptualmente:

```text
Angular / Backend
       ↓
Firebase Emulator
       ↓
Local Environment
```

Por ejemplo, puedes trabajar localmente con servicios como:

```text
Firestore Emulator
Authentication Emulator
Functions Emulator
Hosting Emulator
```

Esto es especialmente útil para probar cambios sin modificar datos reales de producción.

---

## 🔄 Flujo completo

El flujo que debes tener en mente es:

```text
Local Project
     ↓
firebase init
     ↓
Firebase Configuration
     ↓
firebase use
     ↓
Firebase Project
     ↓
firebase deploy
     ↓
Firebase
```

Y durante desarrollo:

```text
Local Project
     ↓
firebase emulators:start
     ↓
Firebase Emulator Suite
     ↓
Local Testing
```

---

## ⭐ Comandos esenciales

No necesitas memorizar decenas de comandos. Estos son los importantes conceptualmente:

| Comando                    | Concepto                        |
| -------------------------- | ------------------------------- |
| `firebase login`           | Autenticar CLI                  |
| `firebase logout`          | Cerrar sesión                   |
| `firebase projects:list`   | Ver proyectos disponibles       |
| `firebase init`            | Inicializar/configurar Firebase |
| `firebase use`             | Seleccionar Firebase Project    |
| `firebase deploy`          | Desplegar                       |
| `firebase emulators:start` | Ejecutar servicios localmente   |

---

## 🧠 Lo que realmente debes recordar

```text
Firebase CLI
     ↓
Herramienta para gestionar Firebase
     │
     ├── Authentication
     ├── Configuration
     ├── Projects
     ├── Deployments
     └── Emulators
```

Y los dos archivos fundamentales:

```text
firebase.json
    ↓
Configuración de Firebase
```

```text
.firebaserc
    ↓
Relación entre proyecto local
y Firebase Project
```
