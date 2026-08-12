# 📄 02 - Firebase as BaaS

## 📑 Índice

- [📄 02 - Firebase as BaaS](#-02---firebase-as-baas)
  - [📑 Índice](#-índice)
  - [🧠 ¿Qué significa BaaS?](#-qué-significa-baas)
  - [🧩 ¿Qué servicios proporciona un BaaS?](#-qué-servicios-proporciona-un-baas)
  - [❓ ¿Qué problemas resuelve?](#-qué-problemas-resuelve)
- [🔥 Firebase como ejemplo de BaaS](#-firebase-como-ejemplo-de-baas)
- [🆚 BaaS vs Backend tradicional](#-baas-vs-backend-tradicional)
    - [🏗️ Backend tradicional](#️-backend-tradicional)
    - [☁️ BaaS](#️-baas)
- [✅ Ventajas de BaaS](#-ventajas-de-baas)
- [⚠️ Limitaciones de BaaS](#️-limitaciones-de-baas)
- [🔒 Vendor Lock-in](#-vendor-lock-in)
- [🔥 Concepto fundamental](#-concepto-fundamental)

## 🧠 ¿Qué significa BaaS?

**BaaS (Backend as a Service)** significa **Backend como Servicio**.

Es un modelo en el que un proveedor ofrece servicios backend ya construidos y administrados para que puedas utilizarlos desde tu aplicación sin tener que desarrollar y administrar toda esa infraestructura por tu cuenta.

```text
Frontend
   ↓
BaaS
   ↓
Backend Services
```

---

## 🧩 ¿Qué servicios proporciona un BaaS?

Un BaaS puede proporcionar servicios como:

| Servicio |                       |
| -------- | --------------------- |
| 🔐       | Authentication        |
| 🗄️      | Database              |
| 📁       | File Storage          |
| ⚙️       | Server-side Functions |
| 📱       | Push Notifications    |
| 🌐       | Hosting               |

Firebase reúne varios de estos servicios.

---

## ❓ ¿Qué problemas resuelve?

Sin BaaS, normalmente tienes que construir y administrar diferentes partes del backend:

```text
Authentication
Database
API
Storage
Server
Infrastructure
```

Con BaaS, muchos de estos servicios ya están disponibles:

```text
Application
    ↓
BaaS
    ├── Authentication
    ├── Database
    ├── Storage
    └── Functions
```

Esto permite desarrollar aplicaciones más rápidamente sin tener que construir toda la infraestructura backend desde cero.

---

# 🔥 Firebase como ejemplo de BaaS

Firebase es un ejemplo de **Backend as a Service** porque proporciona múltiples servicios backend administrados.

```text
Angular
   │
   ├── Firebase Auth
   ├── Firestore
   ├── Storage
   └── Functions
```

La aplicación puede consumir estos servicios sin que tengas que implementar cada componente desde cero.

---

# 🆚 BaaS vs Backend tradicional

### 🏗️ Backend tradicional

```text
Angular
   ↓
Express
   ↓
Controllers
   ↓
Services
   ↓
Database
```

Tú desarrollas y administras gran parte de la infraestructura y lógica del backend.

### ☁️ BaaS

```text
Angular
   │
   ├── Firebase Auth
   ├── Firestore
   ├── Storage
   └── Functions
```

El proveedor administra gran parte de la infraestructura y proporciona servicios backend listos para utilizar.

---

# ✅ Ventajas de BaaS

* ⚡ Desarrollo más rápido.
* 🛠️ Menos infraestructura que administrar.
* 🔐 Servicios de autenticación disponibles.
* 🗄️ Database administrada.
* 📁 Storage administrado.
* 📈 Escalabilidad proporcionada por el proveedor.
* 🚀 Permite enfocarse más en la aplicación.

---

# ⚠️ Limitaciones de BaaS

* Menor control sobre la infraestructura.
* Dependencia del proveedor.
* Posibles costos según el uso.
* Algunas arquitecturas pueden no encajar bien con BaaS.
* Puede ser más difícil migrar posteriormente a otra solución.

---

# 🔒 Vendor Lock-in

**Vendor lock-in** ocurre cuando una aplicación depende fuertemente de un proveedor y migrarla a otra plataforma resulta difícil o costoso.

Por ejemplo:

```text
Application
    ↓
Firebase
    ↓
Firestore
    ↓
Firebase-specific Architecture
```

Cuanto más dependas de servicios y características específicas de Firebase, mayor puede ser la dificultad de migrar posteriormente.

---

# 🔥 Concepto fundamental

```text
BaaS
 ↓
Proveedor administra gran parte
de la infraestructura backend
```

Pero:

> **BaaS no significa que no exista backend.**

Firebase simplemente proporciona **servicios backend ya construidos y administrados**.
