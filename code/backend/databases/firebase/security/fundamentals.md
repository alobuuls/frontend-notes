# 📄 01 - Fundamentals

> 🔐 **Firebase Security Fundamentals**

---

## 📑 Índice

- [� 01 - Fundamentals](#-01---fundamentals)
  - [📑 Índice](#-índice)
  - [🔐 ¿Qué significa asegurar una aplicación Firebase?](#-qué-significa-asegurar-una-aplicación-firebase)
  - [🖥️ Client vs Server](#️-client-vs-server)
  - [🔐 Authentication](#-authentication)
  - [🛡️ Authorization](#️-authorization)
  - [📜 Firebase Security Rules](#-firebase-security-rules)
  - [🗄️ Firestore Security Rules](#️-firestore-security-rules)
  - [📁 Storage Security Rules](#-storage-security-rules)
  - [⚖️ Least Privilege](#️-least-privilege)
  - [⚠️ Nunca confiar en el Frontend](#️-nunca-confiar-en-el-frontend)
- [🔥 Authentication ≠ Authorization](#-authentication--authorization)
  - [🧩 ¿Qué puede proteger Firebase?](#-qué-puede-proteger-firebase)
- [⭐ Concepto fundamental](#-concepto-fundamental)

## 🔐 ¿Qué significa asegurar una aplicación Firebase?

Asegurar una aplicación Firebase significa controlar **quién puede acceder a los recursos y qué operaciones puede realizar**.

Firebase Security se basa principalmente en:

```text
Authentication
      ↓
Authorization
      ↓
Security Rules
      ↓
Firebase Resources
```

> ⚠️ La seguridad no depende únicamente del frontend.

---

## 🖥️ Client vs Server

En una aplicación Firebase debes distinguir entre:

| Entorno        | Ejemplo           |
| -------------- | ----------------- |
| 🖥️ **Client** | Angular / Browser |
| 🖧 **Server**  | Trusted Backend   |

```text
Client
   ↓
Angular / Browser
```

y:

```text
Server
   ↓
Trusted Backend
```

El frontend está bajo control del usuario, por lo que **no puede considerarse un entorno confiable para proteger recursos**.

La seguridad debe aplicarse en la capa que controla el acceso a Firebase.

---

## 🔐 Authentication

**Authentication** determina quién es el usuario.

```text
User
   ↓
Authentication
   ↓
¿Quién eres?
```

Firebase Authentication permite identificar al usuario que realiza una petición.

---

## 🛡️ Authorization

**Authorization** determina qué puede hacer ese usuario.

```text
Authenticated User
       ↓
Authorization
       ↓
¿Qué puedes hacer?
```

Por ejemplo, un usuario puede estar autenticado pero solamente tener permitido modificar sus propios documentos.

---

## 📜 Firebase Security Rules

Las **Firebase Security Rules** permiten definir las condiciones bajo las cuales una petición puede acceder a determinados recursos.

```text
Request
   ↓
Security Rules
   ↓
ALLOW / DENY
```

Firebase utiliza reglas específicas para proteger diferentes servicios.

---

## 🗄️ Firestore Security Rules

Las **Firestore Security Rules** controlan el acceso a los datos almacenados en Cloud Firestore.

Permiten definir condiciones para operaciones como:

```text
Firestore
   ↓
Security Rules
   ├── Read
   ├── Create
   ├── Update
   └── Delete
```

Por ejemplo:

```text
User
   ↓
¿Puede modificar este document?
   ↓
Firestore Rules
   ↓
ALLOW / DENY
```

---

## 📁 Storage Security Rules

Las **Storage Security Rules** controlan el acceso a archivos almacenados en Firebase Storage.

```text
User
   ↓
Storage Request
   ↓
Storage Rules
   ↓
ALLOW / DENY
```

Pueden determinar quién puede leer, subir, modificar o eliminar determinados archivos.

---

## ⚖️ Least Privilege

El principio de **Least Privilege** significa proporcionar solamente los permisos necesarios para realizar una determinada acción.

```text
User
   ↓
Minimum required permissions
   ↓
Resource
```

> No debes permitir más acceso del necesario.

---

## ⚠️ Nunca confiar en el Frontend

El frontend **no es una capa de seguridad confiable**.

Por ejemplo, ocultar un botón:

```text
❌ Ocultar botón "Delete"
```

no significa que el usuario no pueda intentar realizar la operación directamente.

La protección real debe estar en las reglas que controlan el acceso al recurso:

```text
Frontend
   ↓
Request
   ↓
Security Rules
   ↓
ALLOW / DENY
```

---

# 🔥 Authentication ≠ Authorization

Esta diferencia es fundamental:

| Concepto              | Pregunta           |
| --------------------- | ------------------ |
| 🔐 **Authentication** | ¿Quién eres?       |
| 🛡️ **Authorization** | ¿Qué puedes hacer? |

```text
Authentication
      ↓
¿Quién eres?
```

vs.

```text
Authorization
      ↓
¿Qué puedes hacer?
```

Por lo tanto:

```text
request.auth != null
```

solamente indica que existe un usuario autenticado.

**No significa que ese usuario tenga acceso a todos los recursos.**

Por ejemplo:

```text
User autenticado
       ↓
¿Puede modificar este documento?
       ↓
Security Rules
       ↓
ALLOW / DENY
```

---

## 🧩 ¿Qué puede proteger Firebase?

Firebase puede ayudarte a proteger recursos mediante:

```text
Authentication
       +
Firestore Rules
       +
Storage Rules
```

Pero la seguridad debe estar correctamente configurada.

Firebase **no sustituye automáticamente las decisiones de autorización de tu aplicación**.

---

# ⭐ Concepto fundamental

La idea completa es:

```text
Angular
   ↓
Firebase
   ↓
Security Layer
   ├── Authentication
   ├── Firestore Rules
   └── Storage Rules
```

> **Estar autenticado no significa tener permiso para hacer cualquier cosa.**
