# 📄 03 - Firebase Architecture

## 📚 ÍNDICE

- [📄 03 - Firebase Architecture](#-03---firebase-architecture)
  - [📚 ÍNDICE](#-índice)
  - [🔥 ¿Qué es Firebase Architecture?](#-qué-es-firebase-architecture)
  - [💻 Firebase Client](#-firebase-client)
  - [📦 Firebase Services](#-firebase-services)
  - [☁️ Backend / Cloud](#️-backend--cloud)
  - [🔐 Authentication](#-authentication)
  - [🗄️ Firestore](#️-firestore)
  - [📁 Storage](#-storage)
  - [⚙️ Cloud Functions](#️-cloud-functions)
  - [🌐 Hosting](#-hosting)
  - [🛡️ Security Rules](#️-security-rules)
  - [📱 Client SDK](#-client-sdk)
  - [🔐 Admin SDK](#-admin-sdk)
  - [🔄 Flujo Client → Firebase](#-flujo-client--firebase)
  - [⚡ ¿Cuándo aparece Cloud Functions?](#-cuándo-aparece-cloud-functions)
- [🔥 CLIENT SDK vs ADMIN SDK](#-client-sdk-vs-admin-sdk)
    - [CLIENT SDK](#client-sdk)
    - [ADMIN SDK](#admin-sdk)
## 🔥 ¿Qué es Firebase Architecture?

La arquitectura de Firebase describe **cómo se conectan el frontend, los SDK y los diferentes servicios de Firebase**.

La idea general es:

```text
             FRONTEND
            Angular / React
                  │
            Firebase SDK
                  │
    ┌─────────────┼─────────────┐
    ▼             ▼             ▼
  Auth        Firestore      Storage
    │             │             │
    └─────────────┼─────────────┘
                  ▼
           Firebase Cloud
```

---

## 💻 Firebase Client

El **Firebase Client** es la aplicación que se ejecuta en el dispositivo del usuario.

Por ejemplo:

```text
Angular
React
Mobile App
```

Esta aplicación utiliza el **Firebase Client SDK** para comunicarse con los servicios de Firebase.

---

## 📦 Firebase Services

Firebase está compuesto por diferentes servicios especializados:

```text
Firebase
│
├── Authentication
├── Firestore
├── Storage
├── Cloud Functions
└── Hosting
```

Cada servicio cumple una responsabilidad diferente.

---

## ☁️ Backend / Cloud

Los servicios de Firebase funcionan sobre infraestructura cloud administrada.

```text
Client
   ↓
Firebase
   ↓
Cloud Infrastructure
```

No necesitas administrar directamente los servidores que ejecutan estos servicios.

---

## 🔐 Authentication

Firebase Authentication gestiona la identidad y autenticación de los usuarios.

```text
Client
   ↓
Firebase Auth
   ↓
Authenticated User
```

---

## 🗄️ Firestore

Firestore proporciona almacenamiento de datos mediante una database NoSQL orientada a documentos.

```text
Client
   ↓
Firebase SDK
   ↓
Firestore
```

---

## 📁 Storage

Firebase Storage permite almacenar archivos como:

* Imágenes.
* Videos.
* Documentos.
* Otros archivos.

```text
Client
   ↓
Firebase SDK
   ↓
Storage
```

---

## ⚙️ Cloud Functions

**Cloud Functions** permite ejecutar lógica backend en la infraestructura de Firebase.

Puede aparecer cuando necesitas ejecutar código del lado del servidor.

```text
Frontend
   ↓
Firebase
   ↓
Cloud Function
   ↓
Database / External API
```

Por ejemplo, una Function puede:

* Procesar datos.
* Responder a eventos.
* Ejecutar lógica privada.
* Comunicarse con APIs externas.

---

## 🌐 Hosting

Firebase Hosting permite servir aplicaciones web desde la infraestructura de Firebase.

```text
Application
   ↓
Firebase Hosting
   ↓
User
```

---

## 🛡️ Security Rules

Las **Security Rules** determinan qué operaciones pueden realizar los clientes sobre determinados recursos de Firebase.

Conceptualmente:

```text
Client
   ↓
Request
   ↓
Security Rules
   ↓
Allow / Deny
   ↓
Firebase Service
```

Son especialmente importantes para proteger recursos como Firestore y Storage.

---

## 📱 Client SDK

El **Client SDK** proporciona las herramientas que utiliza el frontend para comunicarse con Firebase.

```text
Angular
   ↓
Firebase Client SDK
   ↓
Firebase Services
```

Por ejemplo, el frontend puede utilizarlo para interactuar con Authentication, Firestore o Storage.

---

## 🔐 Admin SDK

El **Admin SDK** está diseñado para utilizar Firebase desde un **entorno backend confiable**.

Conceptualmente:

```text
Backend
   ↓
Firebase Admin SDK
   ↓
Firebase
```

Tiene capacidades administrativas que no deberían exponerse directamente al usuario.

---

## 🔄 Flujo Client → Firebase

Un flujo típico puede ser:

```text
User
 ↓
Frontend
 ↓
Firebase Client SDK
 ↓
Security Rules
 ↓
Firebase Service
 ↓
Response
 ↓
Frontend
```

Por ejemplo:

```text
Angular
   ↓
Firebase SDK
   ↓
Firestore
   ↓
Document
   ↓
Angular
```

---

## ⚡ ¿Cuándo aparece Cloud Functions?

No todas las operaciones necesitan una Cloud Function.

El frontend puede comunicarse directamente con servicios de Firebase:

```text
Frontend
   ↓
Firebase SDK
   ↓
Firestore
```

Pero cuando necesitas ejecutar **lógica del lado del servidor**, puede aparecer:

```text
Frontend
   ↓
Firebase
   ↓
Cloud Function
   ↓
Database / External API
```

---

# 🔥 CLIENT SDK vs ADMIN SDK

Esta diferencia es fundamental.

| CLIENT SDK | ADMIN SDK         |
| ---------- | ----------------- |
| ↓          | ↓                 |
| Frontend   | Backend           |
| ↓          | ↓                 |
| Usuario    | Entorno confiable |

### CLIENT SDK

```text
CLIENT SDK
     ↓
Frontend
     ↓
Usuario
```

Se utiliza desde aplicaciones cliente y sus operaciones están sujetas a los mecanismos de seguridad correspondientes.

### ADMIN SDK

```text
ADMIN SDK
     ↓
Backend
     ↓
Entorno confiable
```

Se utiliza desde entornos backend confiables y proporciona capacidades administrativas.

> **Client SDK = aplicación del usuario.**
> **Admin SDK = backend / entorno confiable.**

No necesitas profundizar todavía en la implementación del Admin SDK.
