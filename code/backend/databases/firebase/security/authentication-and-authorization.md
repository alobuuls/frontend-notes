# 📄 03 - Authentication & Authorization

> 🔐 Este documento conecta **Firebase Authentication** con **Security Rules**.

---

# 📑 Índice

- [� 03 - Authentication \& Authorization](#-03---authentication--authorization)
- [📑 Índice](#-índice)
  - [🔐 Authentication](#-authentication)
  - [🛡️ Authorization](#️-authorization)
- [🔗 Authentication + Authorization](#-authentication--authorization)
- [⚠️ Authentication ≠ Authorization](#️-authentication--authorization)
- [⭐ Concepto fundamental](#-concepto-fundamental)

## 🔐 Authentication

**Authentication** responde:

> **¿Quién es el usuario?**

Firebase Authentication identifica al usuario después de que se autentica.

```text
Firebase Auth
      ↓
Authenticated User
      ↓
UID
```

El resultado principal es una **identidad autenticada**.

---

## 🛡️ Authorization

**Authorization** responde:

> **¿Qué puede hacer ese usuario?**

Una vez conocida la identidad, las Security Rules pueden determinar qué acciones están permitidas.

```text
Authenticated User
        ↓
Security Rules
        ↓
Permissions
```

---

# 🔗 Authentication + Authorization

El flujo completo es:

```text
User
 ↓
Login
 ↓
Firebase Auth
 ↓
UID = abc123
 ↓
Firestore Request
 ↓
Security Rules
 ↓
¿UID permitido?
 ├── Sí → ALLOW
 └── No → DENY
```

Por ejemplo, una regla puede comprobar que:

```text
request.auth.uid == userId
```

Así, un usuario autenticado solamente puede acceder a los documentos que correspondan a su identidad.

---

# ⚠️ Authentication ≠ Authorization

Esta diferencia debes dominarla:

| Concepto              | Pregunta           | Resultado |
| --------------------- | ------------------ | --------- |
| 🔐 **Authentication** | ¿Quién eres?       | Identidad |
| 🛡️ **Authorization** | ¿Qué puedes hacer? | Permisos  |

```text
Authentication
      ↓
¿Quién eres?
      ↓
Identidad
```

vs.

```text
Authorization
      ↓
¿Qué puedes hacer?
      ↓
Permisos
```

Estar autenticado **no significa automáticamente** tener permiso para realizar cualquier operación.

---

# ⭐ Concepto fundamental

La relación completa es:

```text
Authentication
      ↓
Identidad
      ↓
Authorization
      ↓
Permisos
```

En Firebase:

```text
Firebase Authentication
          ↓
       UID / identidad
          ↓
   Firestore Security Rules
          ↓
      ALLOW / DENY
```

> **Authentication identifica al usuario; Authorization determina qué puede hacer ese usuario.**
