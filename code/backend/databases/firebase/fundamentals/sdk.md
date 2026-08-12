# 📄 05 - Firebase SDK

## 📑 Índice

- [📄 05 - Firebase SDK](#-05---firebase-sdk)
  - [📑 Índice](#-índice)
  - [🧠 ¿Qué es un SDK?](#-qué-es-un-sdk)
  - [🔥 Firebase SDK](#-firebase-sdk)
  - [📱 Client SDK](#-client-sdk)
  - [🚀 Inicialización de Firebase](#-inicialización-de-firebase)
  - [⚙️ Firebase Configuration](#️-firebase-configuration)
  - [🧩 Servicios del SDK](#-servicios-del-sdk)
  - [📦 Modular API](#-modular-api)
  - [🔑 Firebase Configuration y API Keys](#-firebase-configuration-y-api-keys)
    - [⚠️ Importante](#️-importante)
  - [🎯 Flujo completo](#-flujo-completo)

---

## 🧠 ¿Qué es un SDK?

**SDK (Software Development Kit)** es un conjunto de herramientas y librerías que permiten desarrollar aplicaciones para una plataforma o servicio específico.

En Firebase, el SDK permite que tu aplicación se comunique con los diferentes servicios de Firebase.

```text
Angular
   ↓
Firebase SDK
   ↓
Firebase Services
```

---

## 🔥 Firebase SDK

El **Firebase SDK** proporciona las herramientas necesarias para utilizar Firebase desde tu aplicación.

```text
Firebase SDK
│
├── Authentication
├── Firestore
├── Storage
├── Functions
└── otros servicios
```

---

## 📱 Client SDK

El **Firebase Client SDK** se utiliza desde aplicaciones cliente, como una aplicación Angular.

```text
Angular
   ↓
Firebase Client SDK
   ↓
Firebase
```

Permite interactuar con servicios como:

```text
Angular
   ↓
Firebase Auth SDK
   ↓
Authentication
```

o:

```text
Angular
   ↓
Firestore SDK
   ↓
Cloud Firestore
```

---

## 🚀 Inicialización de Firebase

Antes de utilizar los servicios de Firebase, la aplicación debe inicializar Firebase.

Conceptualmente:

```text
Firebase Configuration
        ↓
initializeApp()
        ↓
Firebase App
        ↓
Firebase Services
```

La función:

```ts
initializeApp()
```

inicializa una instancia de Firebase utilizando la configuración del proyecto.

---

## ⚙️ Firebase Configuration

La configuración permite que la aplicación identifique el Firebase Project al que debe conectarse.

Conceptualmente:

```text
Firebase Project
       ↓
Configuration
       ↓
initializeApp()
       ↓
Firebase SDK
```

---

## 🧩 Servicios del SDK

El SDK proporciona acceso a los diferentes servicios de Firebase.

Por ejemplo:

```text
Firebase SDK
     │
     ├── Auth
     ├── Firestore
     ├── Storage
     └── Functions
```

La aplicación importa únicamente los servicios que necesita.

---

## 📦 Modular API

Firebase utiliza una **Modular API** que permite importar funcionalidades específicas en lugar de cargar todo el SDK.

Conceptualmente:

```text
Application
     ↓
Importa solamente
lo necesario
     ↓
Firebase Service
```

Por ejemplo, puedes importar las funcionalidades necesarias de Authentication o Firestore sin utilizar toda la API.

Esto ayuda a mantener el código más organizado y permite optimizar el bundle de la aplicación.

---

## 🔑 Firebase Configuration y API Keys

En una aplicación web puedes encontrar información de configuración como:

| Configuration       |
| ------------------- |
| `apiKey`            |
| `authDomain`        |
| `projectId`         |
| `storageBucket`     |
| `messagingSenderId` |
| `appId`             |

Esta información identifica y configura la conexión de la aplicación con Firebase.

### ⚠️ Importante

La configuración de Firebase de una aplicación web **no debe tratarse como un secreto**.

Por ejemplo:

```text
apiKey
projectId
appId
```

pueden aparecer en el código frontend.

La seguridad real se controla mediante:

```text
Authentication
       +
Security Rules
       +
Permissions
```

Por lo tanto:

> **La Firebase configuration identifica el proyecto, pero no sustituye los mecanismos de seguridad.**

---

## 🎯 Flujo completo

```text
Angular
   ↓
Firebase Configuration
   ↓
initializeApp()
   ↓
Firebase SDK
   ↓
Firebase Services
```

Por ejemplo:

```text
Angular
   ↓
Firebase Auth SDK
   ↓
Authentication
```

o:

```text
Angular
   ↓
Firestore SDK
   ↓
Cloud Firestore
```
