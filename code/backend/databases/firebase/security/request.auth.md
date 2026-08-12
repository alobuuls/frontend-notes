# 📄 04 - `request.auth`

> 🔐 **Identidad del usuario dentro de Firebase Security Rules**

---

## 📑 Índice

- [� 04 - `request.auth`](#-04---requestauth)
  - [📑 Índice](#-índice)
  - [🔥 ¿Qué es `request`?](#-qué-es-request)
  - [🔐 ¿Qué es `request.auth`?](#-qué-es-requestauth)
  - [👤 Usuario autenticado vs no autenticado](#-usuario-autenticado-vs-no-autenticado)
  - [🆔 `request.auth.uid`](#-requestauthuid)
- [🔗 Authentication → Security Rules](#-authentication--security-rules)
- [🔥 `request.auth != null`](#-requestauth--null)
- [🛡️ `request.auth.uid` + Documento](#️-requestauthuid--documento)
  - [✅ Usuario accediendo a su propio documento](#-usuario-accediendo-a-su-propio-documento)
  - [❌ Usuario accediendo al documento de otro usuario](#-usuario-accediendo-al-documento-de-otro-usuario)
- [⭐ Patrón fundamental](#-patrón-fundamental)

## 🔥 ¿Qué es `request`?

En Firebase Security Rules, `request` representa **la petición que está intentando acceder o modificar un recurso**.

```text
Request
   ↓
Security Rules
   ↓
¿Se permite?
```

Dentro de `request` puedes acceder a información relacionada con esa petición.

---

## 🔐 ¿Qué es `request.auth`?

`request.auth` contiene la información de autenticación asociada a la petición.

```text
Request
   │
   ▼
request.auth
   │
   ├── null
   │
   └── authenticated user
```

Si existe un usuario autenticado, `request.auth` contiene información sobre su identidad.

---

## 👤 Usuario autenticado vs no autenticado

| Estado            | `request.auth`       |
| ----------------- | -------------------- |
| 🔴 No autenticado | `null`               |
| 🟢 Autenticado    | `authenticated user` |

Cuando el usuario **no está autenticado**:

```text
request.auth
     ↓
   null
```

Cuando el usuario **sí está autenticado**:

```text
request.auth
     ↓
authenticated user
```

Por eso el patrón:

```text
request.auth != null
```

significa conceptualmente:

> **El usuario está autenticado.**

---

## 🆔 `request.auth.uid`

Una de las propiedades más importantes es:

```text
request.auth.uid
```

Representa el **UID del usuario autenticado**.

```text
request.auth
    ↓
   uid
    ↓
Usuario
```

Por ejemplo:

```text
request.auth.uid
       ↓
    "abc123"
```

Este UID permite relacionar la identidad autenticada con los datos protegidos por las Security Rules.

---

# 🔗 Authentication → Security Rules

El flujo es:

```text
User
 ↓
Firebase Authentication
 ↓
Authenticated Identity
 ↓
Firestore Request
 ↓
request.auth
 ↓
Security Rules
```

Así, las reglas pueden utilizar la identidad del usuario para decidir si una operación está permitida.

---

# 🔥 `request.auth != null`

Este patrón es fundamental:

```text
request.auth != null
```

Significa:

```text
¿Existe un usuario autenticado?
       ↓
     Sí → condición verdadera
     No → condición falsa
```

Por ejemplo:

```text
allow read: if request.auth != null;
```

Conceptualmente:

> Permitir la lectura únicamente a usuarios autenticados.

---

# 🛡️ `request.auth.uid` + Documento

Uno de los patrones más importantes de Firestore Security Rules es comprobar que el UID del usuario coincide con el identificador del recurso que intenta modificar.

Supongamos:

```text
users
 ├── user_001
 ├── user_002
 └── user_003
```

La lógica sería:

```text
request.auth.uid
       ↓
¿Es igual al userId?
       ↓
   ALLOW / DENY
```

---

## ✅ Usuario accediendo a su propio documento

Usuario autenticado:

```text
abc123
```

Documento:

```text
users/abc123
```

Comparación:

```text
request.auth.uid
      ↓
   "abc123"

userId
      ↓
   "abc123"
```

Son iguales:

```text
abc123 == abc123
       ↓
     ALLOW
```

---

## ❌ Usuario accediendo al documento de otro usuario

Usuario autenticado:

```text
abc123
```

Documento:

```text
users/xyz789
```

Comparación:

```text
abc123 != xyz789
       ↓
      DENY
```

---

# ⭐ Patrón fundamental

Debes dominar esta lógica:

```text
request.auth != null
        ↓
Usuario autenticado
        ↓
request.auth.uid
        ↓
Comparar con el recurso
        ↓
ALLOW / DENY
```

Por ejemplo:

```text
users/{userId}
      ↓
request.auth.uid == userId
      ↓
ALLOW
```

> **`request.auth`** **permite que las Security Rules conozcan la identidad del usuario que realiza la petición, y** **`request.auth.uid`** **permite utilizar su UID para tomar decisiones de autorización.**
