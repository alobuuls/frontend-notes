# 📄 03 - Auth State

## 📑 Índice

- [� 03 - Auth State](#-03---auth-state)
  - [📑 Índice](#-índice)
  - [🔐 Auth State](#-auth-state)
  - [👤 Current User](#-current-user)
  - [🔑 User Session](#-user-session)
  - [👂 Auth State Listener](#-auth-state-listener)
  - [🔄 Cambios de autenticación](#-cambios-de-autenticación)
  - [🟢 Login → Estado autenticado](#-login--estado-autenticado)
  - [🔴 Logout → Estado no autenticado](#-logout--estado-no-autenticado)
  - [💾 Persistencia de sesión](#-persistencia-de-sesión)
  - [🅰️ Auth State en Angular](#️-auth-state-en-angular)
  - [⭐ ¿Cómo sabe mi aplicación que sigo logueado después de recargar?](#-cómo-sabe-mi-aplicación-que-sigo-logueado-después-de-recargar)

## 🔐 Auth State

El **Auth State** representa el estado actual de autenticación de un usuario.

La aplicación necesita saber si:

* Existe un usuario autenticado.
* No existe ningún usuario autenticado.
* El usuario acaba de iniciar sesión.
* El usuario acaba de cerrar sesión.

Conceptualmente:

```text
Application
     ↓
Firebase Auth
     ↓
Auth State
     ↓
┌────────────────┐
│ Authenticated  │
│      OR        │
│ Unauthenticated│
└────────────────┘
```

---

## 👤 Current User

El **Current User** es el usuario que actualmente está autenticado.

```text
Firebase Auth
      ↓
Current User
      ↓
Firebase User
```

Si no existe una sesión autenticada:

```text
Current User
     ↓
null
```

---

## 🔑 User Session

La **User Session** representa el estado de autenticación que mantiene al usuario identificado mientras utiliza la aplicación.

Flujo:

```text
Login
  ↓
Authenticated Session
  ↓
User
  ↓
Logout
  ↓
No Session
```

---

## 👂 Auth State Listener

Un **Auth State Listener** permite observar cambios en el estado de autenticación.

Por ejemplo:

```text
Auth State
    │
    ├── Login
    │     ↓
    │  User appears
    │
    └── Logout
          ↓
       User disappears
```

La aplicación puede reaccionar automáticamente cuando cambia el usuario autenticado.

---

## 🔄 Cambios de autenticación

Los cambios principales son:

```text
Login
 ↓
Unauthenticated → Authenticated
```

y:

```text
Logout
 ↓
Authenticated → Unauthenticated
```

La aplicación puede utilizar estos cambios para actualizar su UI.

---

## 🟢 Login → Estado autenticado

Cuando el usuario inicia sesión:

```text
User
 ↓
Login
 ↓
Firebase Authentication
 ↓
Authenticated
 ↓
Current User
```

La aplicación puede detectar que ahora existe un usuario autenticado.

---

## 🔴 Logout → Estado no autenticado

Cuando el usuario cierra sesión:

```text
Authenticated User
        ↓
      Logout
        ↓
Firebase Auth
        ↓
Unauthenticated
```

El **Current User** deja de existir.

---

## 💾 Persistencia de sesión

La **persistencia de sesión** permite que Firebase mantenga el estado de autenticación después de cerrar o recargar la aplicación, dependiendo de la configuración de persistencia.

Por eso, después de recargar:

```text
Application starts
       ↓
Firebase Auth
       ↓
¿Existe sesión?
   ┌───┴───┐
   ↓       ↓
  Sí       No
   ↓       ↓
 User     Guest
```

---

## 🅰️ Auth State en Angular

En Angular, el estado de autenticación puede exponerse mediante un **Observable** o **Signal**.

Conceptualmente:

```text
Firebase Auth
      ↓
Observable / Signal
      ↓
Angular Service
      ↓
Components
```

Por ejemplo, un servicio de Angular puede mantener el estado:

```text
AuthService
     ↓
authState$
     ↓
Components
```

Los componentes pueden reaccionar cuando el usuario inicia o cierra sesión.

---

## ⭐ ¿Cómo sabe mi aplicación que sigo logueado después de recargar?

Porque al iniciar nuevamente la aplicación, **Firebase Authentication restaura y comprueba el estado de autenticación persistido**.

El flujo conceptual es:

```text
Page Reload
    ↓
Application Starts
    ↓
Firebase Authentication
    ↓
Restores Auth State
    ↓
Current User
    ↓
Angular Service
    ↓
Components
```

Por eso la aplicación puede determinar si el usuario sigue autenticado sin que tenga que hacer login nuevamente.
