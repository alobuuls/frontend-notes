# 📄 01 - fundamentals.md

## 📑 Índice

- [� 01 - fundamentals.md](#-01---fundamentalsmd)
  - [📑 Índice](#-índice)
  - [🔥 ¿Qué es Firebase?](#-qué-es-firebase)
  - [🧠 ¿Qué problema resuelve?](#-qué-problema-resuelve)
  - [☁️ Firebase como plataforma de servicios](#️-firebase-como-plataforma-de-servicios)
  - [🆚 Firebase vs Backend tradicional](#-firebase-vs-backend-tradicional)
    - [Backend tradicional](#backend-tradicional)
    - [Firebase](#firebase)
- [🧩 Principales servicios](#-principales-servicios)
    - [🔐 Authentication](#-authentication)
    - [🗄️ Firestore](#️-firestore)
    - [🗃️ Realtime Database](#️-realtime-database)
    - [📁 Storage](#-storage)
    - [⚙️ Cloud Functions](#️-cloud-functions)
    - [🌐 Hosting](#-hosting)
    - [📱 Cloud Messaging](#-cloud-messaging)
- [📱 Firebase para Web y Mobile](#-firebase-para-web-y-mobile)
- [✅ Ventajas de Firebase](#-ventajas-de-firebase)
- [⚠️ Limitaciones generales](#️-limitaciones-generales)
- [🎯 Concepto fundamental](#-concepto-fundamental)

## 🔥 ¿Qué es Firebase?

**Firebase** es una plataforma de servicios backend administrados que permite construir aplicaciones sin tener que desarrollar y administrar toda la infraestructura backend desde cero.

Proporciona diferentes servicios que una aplicación puede consumir directamente.

---

## 🧠 ¿Qué problema resuelve?

En una aplicación tradicional tendrías que desarrollar y administrar gran parte de la infraestructura:

```text
Frontend
   ↓
Backend
   ↓
Database
   ↓
Authentication
   ↓
File Storage
   ↓
Servers / Infrastructure
```

Firebase proporciona muchos de estos servicios ya administrados:

```text
Frontend
   ↓
Firebase Services
   ↓
Google Cloud Infrastructure
```

Esto permite enfocarte más en la aplicación sin tener que construir toda la infraestructura desde cero.

---

## ☁️ Firebase como plataforma de servicios

Firebase no es una sola herramienta ni una sola database.

Es una **plataforma que reúne diferentes servicios backend**.

```text
🔥 Firebase
│
├── 🔐 Authentication
├── 🗄️ Firestore
├── 🗃️ Realtime Database
├── 📁 Storage
├── ⚙️ Cloud Functions
├── 🌐 Hosting
└── 📱 Cloud Messaging
```

Cada servicio resuelve una necesidad diferente.

---

## 🆚 Firebase vs Backend tradicional

| Backend tradicional           | Firebase            |
| ----------------------------- | ------------------- |
| Frontend → Backend → Database | Frontend → Firebase |
| API                           | Authentication      |
| Servidor                      | Firestore           |
| Authentication                | Storage             |
| Database                      | Functions           |
| Storage                       | Hosting             |
| Infraestructura               | —                   |

### Backend tradicional

```text
Frontend
   ↓
Backend
   ↓
Database
```

Tú normalmente debes desarrollar y administrar:

* API.
* Servidor.
* Authentication.
* Database.
* Storage.
* Infraestructura.

### Firebase

```text
Frontend
   ↓
Firebase
   ├── Authentication
   ├── Firestore
   ├── Storage
   ├── Functions
   └── Hosting
```

Firebase proporciona servicios administrados que puedes integrar directamente con tu aplicación.

---

# 🧩 Principales servicios

### 🔐 Authentication

Permite gestionar la autenticación de usuarios.

```text
User
 ↓
Firebase Authentication
 ↓
Authenticated User
```

Puede encargarse de aspectos como registro, login y proveedores de identidad.

---

### 🗄️ Firestore

**Cloud Firestore** es una database NoSQL orientada a documentos.

```text
Firestore
   ↓
Collections
   ↓
Documents
```

---

### 🗃️ Realtime Database

**Realtime Database** es otra database NoSQL de Firebase enfocada especialmente en sincronización de datos en tiempo real.

```text
Application
     ↕
Realtime Database
     ↕
Other Clients
```

---

### 📁 Storage

**Firebase Storage** permite almacenar archivos.

Por ejemplo:

```text
Application
   ↓
Firebase Storage
   ↓
Images / Files
```

---

### ⚙️ Cloud Functions

Permite ejecutar código backend sin administrar directamente un servidor tradicional.

```text
Event / Request
      ↓
Cloud Function
      ↓
Backend Logic
```

---

### 🌐 Hosting

**Firebase Hosting** permite desplegar aplicaciones web.

```text
Web Application
      ↓
Firebase Hosting
      ↓
Internet
```

---

### 📱 Cloud Messaging

**Firebase Cloud Messaging (FCM)** permite enviar mensajes y notificaciones a dispositivos y aplicaciones.

```text
Backend
   ↓
FCM
   ↓
📱 Device
```

---

# 📱 Firebase para Web y Mobile

Firebase está diseñado para integrarse con aplicaciones:

```text
🌐 Web
📱 Mobile
```

Por eso puede proporcionar servicios comunes como:

* Authentication.
* Databases.
* Storage.
* Notifications.
* Backend functions.

---

# ✅ Ventajas de Firebase

Entre sus principales ventajas:

* Servicios administrados.
* Integración rápida.
* Menor necesidad de administrar infraestructura.
* Authentication integrada.
* Databases y Storage disponibles como servicios.
* Escalabilidad proporcionada por la infraestructura de Google.
* Buena integración con aplicaciones Web y Mobile.

---

# ⚠️ Limitaciones generales

Firebase también tiene limitaciones.

Por ejemplo:

* Mayor dependencia del ecosistema de Firebase/Google.
* Costos que pueden crecer según el uso.
* Algunas operaciones pueden requerir adaptar la arquitectura a Firebase.
* No todos los casos de uso encajan bien con sus databases NoSQL.
* Menor control de infraestructura que con un backend completamente administrado por ti.

---

# 🎯 Concepto fundamental

Debes poder explicar:

> **Firebase es una plataforma de servicios backend administrados que permite construir aplicaciones sin tener que desarrollar y administrar toda la infraestructura backend desde cero.**
