# 📄 04 - Storage Security Rules

## 📑 Índice

- [� 04 - Storage Security Rules](#-04---storage-security-rules)
  - [📑 Índice](#-índice)
  - [🔐 Storage Security Rules](#-storage-security-rules)
  - [👤 Authentication](#-authentication)
  - [🔑 Authorization](#-authorization)
  - [📂 `request`](#-request)
  - [👤 `request.auth`](#-requestauth)
  - [📦 `resource`](#-resource)
  - [📦 `request.resource`](#-requestresource)
  - [📖 Read / Write](#-read--write)
  - [🔐 Ownership](#-ownership)
  - [🧪 File Validation](#-file-validation)
  - [🖼️ Content Type Validation](#️-content-type-validation)
  - [📏 File Size Validation](#-file-size-validation)
  - [🛡️ Angular vs Security Rules](#️-angular-vs-security-rules)
  - [⭐ Idea fundamental](#-idea-fundamental)

## 🔐 Storage Security Rules

Las **Storage Security Rules** controlan quién puede acceder y qué operaciones puede realizar sobre los archivos almacenados en Firebase Storage.

El flujo básico es:

```text id="m2x7qa"
User
 ↓
Storage Request
 ↓
Storage Security Rules
 ↓
¿Está permitido?
 ┌───────┴───────┐
 ▼               ▼
ALLOW           DENY
```

---

## 👤 Authentication

Las Rules pueden comprobar si el usuario está autenticado mediante:

```text id="a8k3pd"
request.auth
```

Conceptualmente:

```text id="v6r1ns"
request.auth != null
```

significa que existe un usuario autenticado.

---

## 🔑 Authorization

Estar autenticado no significa automáticamente tener acceso a todos los archivos.

Las Rules pueden determinar qué puede hacer ese usuario:

```text id="q5w9cx"
Authenticated User
       ↓
Storage Security Rules
       ↓
Permissions
       ↓
ALLOW / DENY
```

---

## 📂 `request`

`request` representa información relacionada con la solicitud que está intentando realizar el cliente.

Dentro de ella puedes acceder, entre otras cosas, a información de autenticación y del archivo que se está intentando escribir.

```text id="h7n4mz"
request
 ├── auth
 └── resource
```

---

## 👤 `request.auth`

`request.auth` permite acceder a la información del usuario autenticado.

```text id="k3p8vf"
request.auth
      ↓
Authenticated User
      ↓
request.auth.uid
      ↓
User ID
```

Si no existe un usuario autenticado:

```text id="r6t2yb"
request.auth == null
```

---

## 📦 `resource`

`resource` representa el **archivo que actualmente existe en Storage**.

```text id="x9m4qa"
Storage
   ↓
resource
   ↓
Current File
```

Es especialmente relevante cuando estás comprobando información de un archivo que ya existe.

---

## 📦 `request.resource`

`request.resource` representa el **archivo que se está intentando escribir**.

```text id="p2v7nc"
Request
   ↓
request.resource
   ↓
New File
```

Esto permite validar características del archivo antes de permitir la operación.

---

## 📖 Read / Write

Las Rules pueden controlar operaciones de lectura y escritura:

```text id="e8k5wr"
read
write
```

También puedes diferenciar operaciones como:

```text id="u4c9js"
create
update
delete
```

Por ejemplo:

```text id="b6q1zm"
create
   ↓
Subir archivo nuevo
```

```text id="f3n8vx"
update
   ↓
Modificar / reemplazar archivo
```

```text id="t7p2ka"
delete
   ↓
Eliminar archivo
```

---

## 🔐 Ownership

Uno de los patrones más importantes es restringir los archivos según su propietario.

Supongamos esta estructura:

```text id="w5r9ld"
users/{userId}/profile.jpg
```

La lógica sería:

```text id="c8m2qy"
request.auth.uid
       ↓
       =
       ↓
    userId
       ↓
    ALLOW
```

Si:

```text id="n4v7px"
request.auth.uid != userId
```

entonces:

```text id="j6k3zs"
❌ DENY
```

De esta forma, un usuario puede quedar limitado a sus propios archivos.

---

## 🧪 File Validation

Las Storage Rules también pueden validar características del archivo.

Por ejemplo:

```text id="s9x4vb"
Upload
  ↓
Authenticated?
  ↓
Correct owner?
  ↓
Correct contentType?
  ↓
Valid size?
  ↓
ALLOW
```

---

## 🖼️ Content Type Validation

Puedes restringir qué tipos de archivos pueden almacenarse.

Por ejemplo, permitir:

```text id="d3p8mq"
image/jpeg
image/png
```

y rechazar tipos que no correspondan con lo permitido:

```text id="y7n2kc"
application/x-executable
```

Esto se basa en el **Content Type / MIME Type** que ya estudiaste en File Metadata.

---

## 📏 File Size Validation

También puedes establecer un límite de tamaño.

Conceptualmente:

```text id="q8v5la"
File
   ↓
size < límite permitido
   ↓
ALLOW
```

Si supera el límite:

```text id="m4r7xe"
size > límite
   ↓
DENY
```

---

## 🛡️ Angular vs Security Rules

Una validación realizada únicamente en Angular **no es suficiente como mecanismo de seguridad**.

Por ejemplo:

```text id="z2c6pw"
Angular
 ↓
¿Archivo < 5 MB?
 ↓
Sí
 ↓
Upload
```

El usuario podría intentar realizar la operación de otra manera.

Por eso la validación de seguridad debe existir también en Firebase:

```text id="k9s3nf"
Client
 ↓
Upload
 ↓
Storage Security Rules
 ↓
Authentication
 ↓
Ownership
 ↓
Content Type
 ↓
File Size
 ↓
ALLOW / DENY
```

> **Las validaciones del frontend mejoran la experiencia del usuario; las Security Rules protegen realmente el acceso a Storage.**

---

## ⭐ Idea fundamental

Debes poder entender este flujo:

```text id="v5q8mx"
Upload File
      ↓
request.auth
      ↓
¿Usuario autenticado?
      ↓
Ownership
      ↓
Content Type
      ↓
File Size
      ↓
ALLOW / DENY
```

Y diferenciar:

| Elemento           | Significado                               |
| ------------------ | ----------------------------------------- |
| `request.auth`     | ¿Quién realiza la operación?              |
| `resource`         | ¿Qué archivo existe actualmente?          |
| `request.resource` | ¿Qué archivo se está intentando escribir? |
