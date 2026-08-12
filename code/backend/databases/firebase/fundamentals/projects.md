# 📄 04 - Firebase Projects

## 📑 Índice

- [� 04 - Firebase Projects](#-04---firebase-projects)
  - [📑 Índice](#-índice)
  - [🔥 ¿Qué es un Firebase Project?](#-qué-es-un-firebase-project)
  - [🆔 Firebase Project ID](#-firebase-project-id)
  - [🖥️ Firebase Console](#️-firebase-console)
- [📦 Firebase Project vs Application](#-firebase-project-vs-application)
    - [Firebase Project](#firebase-project)
    - [Application](#application)
- [🌐 Web App dentro de Firebase](#-web-app-dentro-de-firebase)
- [⚙️ Project Configuration](#️-project-configuration)
- [🧪 Development vs Production](#-development-vs-production)
- [🌎 Firebase Environments](#-firebase-environments)
- [🎯 Concepto fundamental](#-concepto-fundamental)

---

## 🔥 ¿Qué es un Firebase Project?

Un **Firebase Project** es el contenedor principal donde se organizan las aplicaciones y servicios de Firebase de un proyecto.

Dentro de un proyecto puedes tener:

```text
🔥 Firebase Project
│
├── 🌐 Web App
├── 📱 Android App
├── 🍎 iOS App
│
├── 🔐 Authentication
├── 🗄️ Firestore
├── 📁 Storage
└── ⚙️ Functions
```

---

## 🆔 Firebase Project ID

El **Firebase Project ID** es el identificador único del proyecto dentro de Firebase.

Se utiliza para identificar el proyecto y forma parte de diferentes configuraciones y recursos asociados a Firebase.

---

## 🖥️ Firebase Console

La **Firebase Console** es la interfaz web desde la que puedes administrar tu Firebase Project.

```text
Firebase Console
       ↓
Firebase Project
       ↓
Services
```

Desde la Console puedes administrar servicios como:

* Authentication
* Firestore
* Storage
* Functions

---

# 📦 Firebase Project vs Application

Es importante no confundir ambos conceptos.

| Firebase Project                                          | Application                                          |
| --------------------------------------------------------- | ---------------------------------------------------- |
| Es el **contenedor** que agrupa los recursos y servicios. | Es una aplicación concreta asociada al proyecto.     |
| `Firebase Project ↓ Services`                             | `Firebase Project ↓ Web App / Android App / iOS App` |

### Firebase Project

Es el **contenedor** que agrupa los recursos y servicios.

```text
Firebase Project
   ↓
Services
```

### Application

Es una aplicación concreta asociada al proyecto.

Por ejemplo:

```text
Firebase Project
│
├── 🌐 Web App
├── 📱 Android App
└── 🍎 iOS App
```

Por lo tanto:

> **Un Firebase Project puede tener varias aplicaciones asociadas.**

---

# 🌐 Web App dentro de Firebase

Una **Web App** es una aplicación web registrada dentro de un Firebase Project.

Por ejemplo:

```text
Firebase Project
       ↓
    Web App
       ↓
   Angular
       ↓
Firebase SDK
```

La Web App utiliza la configuración correspondiente para conectarse con los servicios de Firebase.

---

# ⚙️ Project Configuration

La configuración del proyecto contiene la información necesaria para que una aplicación pueda identificar y utilizar el Firebase Project.

Conceptualmente:

```text
Firebase Project
       ↓
Configuration
       ↓
Firebase SDK
       ↓
Application
```

---

# 🧪 Development vs Production

Es importante separar los entornos de desarrollo y producción.

Una arquitectura común sería:

```text
Development
     ↓
Firebase Project DEV
```

y:

```text
Production
     ↓
Firebase Project PROD
```

Esto permite que las pruebas y cambios realizados durante el desarrollo no afecten directamente a los datos reales de producción.

---

# 🌎 Firebase Environments

Un **environment** representa un entorno diferente en el que funciona una versión de la aplicación.

Por ejemplo:

```text
🧪 Development
     ↓
Firebase Project DEV
```

```text
🚀 Production
     ↓
Firebase Project PROD
```

Cada entorno puede tener sus propios:

* Authentication users
* Firestore data
* Storage files
* Functions
* Configuraciones

---

# 🎯 Concepto fundamental

Debes entender esta jerarquía:

```text
🔥 Firebase Project
        │
        ├── 🌐 Web App
        ├── 📱 Android App
        ├── 🍎 iOS App
        │
        ├── 🔐 Authentication
        ├── 🗄️ Firestore
        ├── 📁 Storage
        └── ⚙️ Functions
```

Y especialmente:

```text
Project
   ↓
App
```

Un **Project** organiza los recursos y servicios, mientras que una **App** representa una aplicación/plataforma asociada a ese proyecto.
