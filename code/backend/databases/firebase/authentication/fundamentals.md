# 📄 01 - Fundamentals

## 📑 Índice

- [� 01 - Fundamentals](#-01---fundamentals)
  - [📑 Índice](#-índice)
  - [🔐 ¿Qué es Firebase Authentication?](#-qué-es-firebase-authentication)
  - [🎯 ¿Para qué sirve?](#-para-qué-sirve)
  - [🔐 Authentication vs Authorization](#-authentication-vs-authorization)
    - [Authentication](#authentication)
    - [Authorization](#authorization)
  - [👤 User Account](#-user-account)
  - [👤 Firebase User](#-firebase-user)
  - [📝 Crear usuarios](#-crear-usuarios)
  - [🔑 Iniciar sesión](#-iniciar-sesión)
  - [🚪 Cerrar sesión](#-cerrar-sesión)
  - [🔄 Recuperar contraseña](#-recuperar-contraseña)
  - [✉️ Verificación de email](#️-verificación-de-email)
  - [🟢 Estado de una sesión](#-estado-de-una-sesión)
  - [🆔 ¿Cómo Firebase identifica al usuario?](#-cómo-firebase-identifica-al-usuario)
- [🔥 Concepto fundamental](#-concepto-fundamental)

## 🔐 ¿Qué es Firebase Authentication?

**Firebase Authentication** es el servicio de Firebase encargado de **identificar y gestionar usuarios autenticados** dentro de una aplicación.

Permite implementar funcionalidades como:

* Crear cuentas.
* Iniciar sesión.
* Cerrar sesión.
* Recuperar contraseñas.
* Verificar emails.
* Mantener el estado de autenticación.

Conceptualmente:

```text
User
  ↓
Firebase Authentication
  ↓
Authenticated User
```

---

## 🎯 ¿Para qué sirve?

Firebase Authentication permite gestionar la identidad de los usuarios sin tener que construir desde cero todo el sistema de autenticación.

Por ejemplo:

```text
Angular
   ↓
Firebase Authentication
   ↓
User Account
```

Firebase se encarga de gestionar la identidad del usuario autenticado.

---

## 🔐 Authentication vs Authorization

No son lo mismo.

| Concepto           | Pregunta               |
| ------------------ | ---------------------- |
| **Authentication** | **¿Quién eres?**       |
| **Authorization**  | **¿Qué puedes hacer?** |

### Authentication

Responde:

> **¿Quién eres?**

```text
User
 ↓
Login
 ↓
Authentication
 ↓
¿Quién es?
```

### Authorization

Responde:

> **¿Qué puedes hacer?**

```text
Authenticated User
        ↓
Authorization
        ↓
¿Qué recursos puede utilizar?
```

Por ejemplo:

```text
Authentication
      ↓
"Alo está autenticado"

Authorization
      ↓
"Alo puede acceder a este recurso"
```

Firebase Authentication se enfoca principalmente en **Authentication**.

---

## 👤 User Account

Un **User Account** representa la cuenta de un usuario dentro del sistema de autenticación.

Puede contener información relacionada con su identidad, como:

```text
User Account
│
├── UID
├── Email
├── Email verification
└── Authentication state
```

---

## 👤 Firebase User

Cuando un usuario se autentica, Firebase proporciona información que representa al usuario autenticado.

Conceptualmente:

```text
Login
  ↓
Firebase Authentication
  ↓
Firebase User
```

Un identificador especialmente importante es el:

```text
UID
```

El **UID (User ID)** identifica de forma única al usuario dentro de Firebase Authentication.

---

## 📝 Crear usuarios

Firebase Authentication permite registrar nuevos usuarios.

Conceptualmente:

```text
User
  ↓
Sign Up
  ↓
Firebase Authentication
  ↓
User Account
```

---

## 🔑 Iniciar sesión

El usuario proporciona sus credenciales y Firebase intenta autenticarlo.

```text
User
 ↓
Login
 ↓
Firebase Authentication
 ↓
Authenticated User
```

Si las credenciales son válidas, el usuario queda autenticado.

---

## 🚪 Cerrar sesión

El usuario puede cerrar su sesión:

```text
Authenticated User
        ↓
     Logout
        ↓
Unauthenticated
```

Firebase actualiza el estado de autenticación de la aplicación.

---

## 🔄 Recuperar contraseña

Firebase Authentication puede gestionar el proceso de recuperación de contraseña.

Conceptualmente:

```text
User
 ↓
Forgot Password
 ↓
Recovery Process
 ↓
New Password
```

Esto evita que tengas que implementar desde cero todo el flujo de recuperación.

---

## ✉️ Verificación de email

Firebase puede permitir que el usuario confirme que tiene acceso al email registrado.

```text
User
 ↓
Email Verification
 ↓
Verified Email
```

Esto permite distinguir entre usuarios con email verificado y aquellos que todavía no lo han confirmado.

---

## 🟢 Estado de una sesión

La aplicación necesita saber si existe actualmente un usuario autenticado.

Conceptualmente:

```text
Application
      ↓
Authentication State
      ↓
┌────────────────┐
│ Authenticated  │
│      OR        │
│ Unauthenticated│
└────────────────┘
```

Por ejemplo:

```text
No User
   ↓
Login
   ↓
Authenticated User
   ↓
Logout
   ↓
No User
```

---

## 🆔 ¿Cómo Firebase identifica al usuario?

Firebase Authentication asigna un **UID único** al usuario.

```text
User
 ↓
Firebase Authentication
 ↓
UID
```

Ese UID permite identificar al mismo usuario dentro de los diferentes servicios de Firebase.

Por ejemplo:

```text
Authentication
      ↓
     UID
      ↓
Firestore / Storage / otras operaciones
```

---

# 🔥 Concepto fundamental

Debes quedarte con este flujo:

```text
User
  ↓
Firebase Authentication
  ↓
Authenticated User
  ↓
UID
```

Y recordar:

> **Firebase Authentication se encarga principalmente de identificar y gestionar usuarios autenticados.**
