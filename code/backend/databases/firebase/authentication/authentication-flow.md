# 📄 05 - Authentication Flow

> 🔐 Este documento une los conceptos anteriores: **Authentication, Auth State, ID Tokens, Refresh Tokens y sesiones**.

---

## 📑 Índice

- [� 05 - Authentication Flow](#-05---authentication-flow)
  - [📑 Índice](#-índice)
  - [🔐 Login](#-login)
    - [¿Qué sucede?](#qué-sucede)
  - [🔄 Persistencia de sesión](#-persistencia-de-sesión)
  - [🚪 Logout](#-logout)
  - [🛡️ Acceso a recursos protegidos](#️-acceso-a-recursos-protegidos)
- [🧠 Flujo completo](#-flujo-completo)
    - [🔄 Si el usuario recarga](#-si-el-usuario-recarga)
    - [🚪 Si cierra sesión](#-si-cierra-sesión)
  - [🔥 Concepto fundamental](#-concepto-fundamental)

## 🔐 Login

El flujo comienza cuando el usuario intenta iniciar sesión.

```text
User
 ↓
Login Form
 ↓
Firebase Auth
 ↓
Credentials / Provider
 ↓
Firebase
 ↓
Authenticated User
 ↓
ID Token
 ↓
Auth State
 ↓
Angular
```

### ¿Qué sucede?

1. El usuario introduce sus credenciales o utiliza un proveedor como Google.
2. La aplicación envía la información a Firebase Authentication.
3. Firebase verifica la autenticación.
4. Si es correcta, Firebase crea/identifica al usuario autenticado.
5. Firebase proporciona un **ID Token**.
6. El estado de autenticación cambia.
7. Angular puede conocer al usuario autenticado.

---

## 🔄 Persistencia de sesión

Firebase puede mantener la sesión del usuario para que no tenga que iniciar sesión nuevamente cada vez que recarga la aplicación.

```text
User Login
    ↓
Firebase Auth
    ↓
Session
    ↓
Reload Browser
    ↓
Firebase restores auth state
    ↓
Current User
```

Por eso, después de recargar la página, la aplicación puede recuperar el usuario autenticado.

> **La aplicación no simplemente "recuerda" al usuario por sí misma; Firebase Authentication mantiene y restaura el estado de autenticación según la persistencia configurada.**

---

## 🚪 Logout

Cuando el usuario cierra sesión:

```text
User
 ↓
Logout
 ↓
Firebase Auth
 ↓
Session cleared
 ↓
Auth State changes
 ↓
User = null
```

El estado de autenticación cambia de:

```text
Authenticated User
```

a:

```text
null
```

Angular puede reaccionar a este cambio y actualizar la interfaz.

---

## 🛡️ Acceso a recursos protegidos

Una vez autenticado, el usuario puede intentar acceder a recursos protegidos de Firebase.

```text
User
 ↓
Authenticated
 ↓
ID Token
 ↓
Firestore / Storage
 ↓
Security Rules
 ↓
Allow / Deny
```

El flujo conceptual es:

1. El usuario está autenticado.
2. La aplicación realiza una petición.
3. Firebase puede utilizar la información de autenticación asociada al usuario.
4. **Security Rules** evalúan si ese usuario tiene permiso.
5. El acceso es permitido o rechazado.

Por ejemplo:

```text
Authenticated User
       ↓
   Firestore
       ↓
Security Rules
       ↓
  ┌────┴────┐
  ↓         ↓
Allow      Deny
```

---

# 🧠 Flujo completo

Todos los conceptos anteriores se conectan así:

```text
                 User
                   ↓
              Login Form
                   ↓
          Firebase Authentication
                   ↓
             Authenticated
                   ↓
                ID Token
                   ↓
               Auth State
                   ↓
                Angular
                   │
          ┌────────┴────────┐
          ↓                 ↓
      Firestore          Storage
          ↓                 ↓
    Security Rules    Security Rules
          ↓                 ↓
      Allow / Deny      Allow / Deny
```

### 🔄 Si el usuario recarga

```text
Reload
  ↓
Firebase Auth
  ↓
Restore Auth State
  ↓
Current User
  ↓
Angular
```

### 🚪 Si cierra sesión

```text
Logout
  ↓
Firebase Auth
  ↓
Auth State
  ↓
User = null
```

---

## 🔥 Concepto fundamental

> **Firebase Authentication gestiona la identidad y el estado de autenticación; los recursos como Firestore y Storage utilizan ese contexto junto con Security Rules para decidir si permiten o rechazan el acceso.**

Esto conecta directamente con el siguiente tema: **Firestore + Security Rules**.
