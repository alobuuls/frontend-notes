# 📄 03 - Client SDK vs Admin SDK

🔥🔥 **Este es uno de los conceptos más importantes para entender la arquitectura de Firebase.**

Firebase ofrece dos formas principales de interactuar con sus servicios:

```text
Client SDK
    ↓
Aplicaciones cliente

Admin SDK
    ↓
Entornos backend confiables
```

La diferencia fundamental es **desde dónde se ejecuta el código y qué nivel de confianza tiene ese entorno**.

---

## 📑 Índice

- [📄 03 - Client SDK vs Admin SDK](#-03---client-sdk-vs-admin-sdk)
  - [📑 Índice](#-índice)
  - [🌐 Client SDK](#-client-sdk)
    - [🧠 ¿Qué puede hacer?](#-qué-puede-hacer)
  - [🛡️ Client SDK + Security Rules](#️-client-sdk--security-rules)
  - [🖥️ Admin SDK](#️-admin-sdk)
  - [🔐 ¿Por qué existe el Admin SDK?](#-por-qué-existe-el-admin-sdk)
  - [⚠️ Admin SDK ≠ Client SDK](#️-admin-sdk--client-sdk)
  - [🚨 ¿Por qué no usar Admin SDK en Angular?](#-por-qué-no-usar-admin-sdk-en-angular)
  - [🧩 Ejemplo arquitectónico](#-ejemplo-arquitectónico)
    - [Operación normal](#operación-normal)
  - [🔥 Client SDK vs Admin SDK](#-client-sdk-vs-admin-sdk)
  - [🧠 Qué debes recordar](#-qué-debes-recordar)

## 🌐 Client SDK

El **Client SDK** está diseñado para aplicaciones que se ejecutan del lado del cliente, como Angular, React, iOS o Android.

Por ejemplo:

```text
Angular
   ↓
Firebase Client SDK
   ↓
Firebase
```

El usuario interactúa directamente con Firebase desde la aplicación.

### 🧠 ¿Qué puede hacer?

Puede utilizar servicios como:

* 🔐 Firebase Authentication
* 🗄️ Firestore
* 📡 Realtime Database
* 📁 Storage
* ⚙️ Cloud Functions

Por ejemplo:

```text
Angular
   ↓
Firestore SDK
   ↓
Firestore
```

o:

```text
Angular
   ↓
Firebase Auth SDK
   ↓
Firebase Authentication
```

---

## 🛡️ Client SDK + Security Rules

Cuando utilizas Firebase desde el frontend, las operaciones están sujetas a las **Security Rules** correspondientes.

```text
Angular
   ↓
Client SDK
   ↓
Firebase
   ↓
Security Rules
   ↓
ALLOW / DENY
```

Por ejemplo:

```text
User
   ↓
Angular
   ↓
Firestore
   ↓
Security Rules
   ↓
¿Puede leer este documento?
   ├── Sí → ALLOW
   └── No → DENY
```

Esto significa que **el frontend no decide por sí solo qué puede hacer el usuario**.

Las reglas de Firebase son las que controlan el acceso a los recursos.

> 🔥 **Client SDK = interacción desde el cliente + Security Rules.**

---

## 🖥️ Admin SDK

El **Admin SDK** está diseñado para ejecutarse en un entorno backend confiable.

Por ejemplo:

```text
Express
   ↓
Admin SDK
   ↓
Firebase
```

o:

```text
Cloud Function
   ↓
Admin SDK
   ↓
Firebase
```

También puede utilizarse desde otros entornos backend controlados por el desarrollador.

---

## 🔐 ¿Por qué existe el Admin SDK?

Porque algunas operaciones necesitan privilegios que **no deberían estar disponibles para el frontend**.

Por ejemplo:

```text
Backend
   ↓
Admin SDK
   ↓
Firebase
   ↓
Operación administrativa
```

El backend puede realizar operaciones administrativas sobre Firebase que no deberían exponerse directamente al usuario.

---

## ⚠️ Admin SDK ≠ Client SDK

No son simplemente dos versiones de la misma librería.

La diferencia conceptual es:

```text
CLIENT SDK
    ↓
Cliente
    ↓
Usuario
    ↓
Security Rules
```

vs.

```text
ADMIN SDK
    ↓
Backend confiable
    ↓
Privilegios administrativos
```

Por eso debes pensar:

> **Client SDK → entorno no confiable**

> **Admin SDK → entorno confiable**

El frontend está bajo control del usuario. El backend es el lugar donde puedes mantener operaciones privilegiadas y secretos.

---

## 🚨 ¿Por qué no usar Admin SDK en Angular?

Porque Angular se ejecuta en el navegador.

Todo el código que envías al navegador puede ser inspeccionado por el usuario.

Si colocáramos credenciales o mecanismos administrativos en Angular:

```text
Angular
   ↓
Admin SDK
   ↓
🔥 Privilegios administrativos
```

estaríamos exponiendo capacidades que **no deberían estar disponibles para el cliente**.

La arquitectura correcta es:

```text
Angular
   ↓
Client SDK
   ↓
Firebase
   ↓
Security Rules
```

Y cuando necesitas una operación privilegiada:

```text
Angular
   ↓
HTTP Request
   ↓
Backend / Cloud Function
   ↓
Admin SDK
   ↓
Firebase
```

---

## 🧩 Ejemplo arquitectónico

Supongamos que un usuario quiere actualizar su perfil.

### Operación normal

```text
Angular
   ↓
Client SDK
   ↓
Firestore
   ↓
Security Rules
   ↓
ALLOW / DENY
```

Pero imagina que necesitas una operación administrativa que el usuario no debería poder ejecutar directamente:

```text
Angular
   ↓
HTTP Request
   ↓
Cloud Function
   ↓
Admin SDK
   ↓
Firestore
```

Aquí el frontend **no recibe privilegios administrativos**.

---

## 🔥 Client SDK vs Admin SDK

|                      | Client SDK           | Admin SDK                           |
| -------------------- | -------------------- | ----------------------------------- |
| 📍 Dónde             | Frontend             | Backend                             |
| 👤 Usuario           | Sí                   | No directamente                     |
| 🔐 Security Rules    | Sí                   | No son el mecanismo de autorización |
| 🛡️ Privilegios      | Limitados por reglas | Administrativos                     |
| 🌐 Angular           | ✅ Sí                 | ❌ No                                |
| 🖥️ Express          | ❌ Normalmente no     | ✅ Sí                                |
| ⚙️ Cloud Functions   | Puede utilizarse     | ✅ Sí                                |
| 🔑 Entorno confiable | ❌                    | ✅                                   |

---

## 🧠 Qué debes recordar

```text
                 FIREBASE
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
    CLIENT SDK            ADMIN SDK
          │                   │
      Angular            Express /
          │             Cloud Functions
          ▼                   ▼
 Security Rules        Privileged Access
```

La regla mental más importante:

> **Client SDK es para el cliente. Admin SDK es para el backend confiable.**

Y sobre todo:

> ❌ **Nunca pongas el Admin SDK directamente en Angular.**

> ✅ **Si necesitas privilegios administrativos, llévalos al backend o a una Cloud Function.**
