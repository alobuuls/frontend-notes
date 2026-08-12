# 📄 04 - ID Tokens & Refresh Tokens

## 📑 Índice

- [📄 04 - ID Tokens \& Refresh Tokens](#-04---id-tokens--refresh-tokens)
  - [📑 Índice](#-índice)
  - [🪪 ID Token](#-id-token)
  - [🔄 Refresh Token](#-refresh-token)
  - [⏱️ Expiración del ID Token](#️-expiración-del-id-token)
  - [🏷️ Claims](#️-claims)
  - [🆔 UID](#-uid)
- [🔐 Token-Based Authentication](#-token-based-authentication)
- [⚖️ ID Token vs Refresh Token](#️-id-token-vs-refresh-token)
- [⚠️ UID ≠ ID Token](#️-uid--id-token)
    - [🆔 UID](#-uid-1)
    - [🪪 ID Token](#-id-token-1)
- [🔗 Firebase ID Token y JWT](#-firebase-id-token-y-jwt)

## 🪪 ID Token

El **ID Token** es un token que Firebase Authentication entrega después de que el usuario se autentica correctamente.

Sirve para que Firebase u otros servicios que lo validen puedan comprobar **quién es el usuario y que está autenticado**.

Flujo:

```text id="1nqz8c"
Login
  ↓
Firebase Authentication
  ↓
ID Token
  ↓
Request
  ↓
Servicio que valida el token
```

El ID Token tiene una duración limitada y **expira**.

---

## 🔄 Refresh Token

El **Refresh Token** permite obtener un nuevo ID Token cuando el actual expira.

```text id="h5d9t4"
ID Token
   ↓
Expired
   ↓
Refresh Token
   ↓
New ID Token
```

La idea es que el usuario no tenga que volver a iniciar sesión simplemente porque su ID Token expiró.

---

## ⏱️ Expiración del ID Token

El ID Token tiene una duración limitada.

Cuando expira:

```text id="q4qj5k"
ID Token
   ↓
Expired
   ↓
Firebase renueva
   ↓
New ID Token
```

Firebase puede encargarse de esta renovación automáticamente en el cliente.

---

## 🏷️ Claims

Los **claims** son información incluida dentro del token sobre el usuario o sobre determinadas características de su autenticación.

Pueden incluir información como:

```text id="f3h0o6"
Claims
  ├── UID
  ├── información de autenticación
  └── otros datos autorizados
```

También existen **custom claims**, que pueden utilizarse para representar información adicional relacionada con autorización, por ejemplo un rol.

---

## 🆔 UID

El **UID (User ID)** es el identificador único del usuario dentro de Firebase Authentication.

```text id="z5cvk3"
Firebase User
      ↓
     UID
      ↓
Identifica al usuario
```

Por ejemplo:

```text id="09h8c2"
User
 ↓
UID: abc123xyz
```

El UID permanece asociado a esa cuenta mientras exista el usuario.

---

# 🔐 Token-Based Authentication

Firebase utiliza tokens para representar la autenticación del usuario.

El flujo general es:

```text id="3v5jcn"
User
 ↓
Login
 ↓
Firebase Authentication
 ↓
ID Token
 ↓
Request
 ↓
Servicio
 ↓
Token validado
 ↓
Usuario autenticado
```

En lugar de enviar usuario y contraseña en cada request, se utiliza el token para demostrar la autenticación.

---

# ⚖️ ID Token vs Refresh Token

|                                      | ID Token                | Refresh Token                    |
| ------------------------------------ | ----------------------- | -------------------------------- |
| **Propósito**                        | Demostrar autenticación | Obtener un nuevo ID Token        |
| **Duración**                         | Corta                   | Más prolongada                   |
| **Se utiliza en requests**           | ✅ Sí                    | ❌ No normalmente                 |
| **Expira**                           | ✅ Sí                    | Tiene un ciclo de vida diferente |
| **Contiene información del usuario** | ✅ Sí                    | ❌ No tiene el mismo propósito    |

La idea fundamental:

```text id="x8q2vp"
Login
 ↓
ID Token
 ↓
Requests
 ↓
Expira
 ↓
Refresh Token
 ↓
Nuevo ID Token
```

---

# ⚠️ UID ≠ ID Token

No debes confundirlos.

### 🆔 UID

```text id="0b7v8j"
UID
 ↓
Identifica al usuario
```

### 🪪 ID Token

```text id="s6i8u4"
ID Token
 ↓
Demuestra la identidad/autenticación
```

Por ejemplo:

```text id="4s8v2m"
Firebase User
    │
    ├── UID
    │    └── Identificador del usuario
    │
    └── ID Token
         └── Token de autenticación
```

---

# 🔗 Firebase ID Token y JWT

El **Firebase ID Token es un JWT**.

Por eso conecta directamente con lo que estudiaste sobre JWT:

```text id="1n8y3x"
JWT
 ↓
Firebase ID Token
```

Un Firebase ID Token utiliza la estructura y características de un JWT, incluyendo sus **claims** y firma.

No necesitas volver a estudiar aquí cómo construir un sistema JWT desde cero; eso pertenece a tu estudio específico de **JWT**.
