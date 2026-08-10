# 📄 06 - Secrets & Credentials ⭐⭐⭐

# 📑 Índice

- [📄 06 - Secrets \& Credentials ⭐⭐⭐](#-06---secrets--credentials-)
- [📑 Índice](#-índice)
  - [🔐 Database Username](#-database-username)
  - [🔑 Database Password](#-database-password)
  - [🔗 Connection Strings](#-connection-strings)
  - [🔑 API Keys](#-api-keys)
  - [🔐 JWT Secrets](#-jwt-secrets)
- [🌎 Environment Variables](#-environment-variables)
- [📄 `.env`](#-env)
- [🚫 `.gitignore`](#-gitignore)
- [🔐 Secret Management](#-secret-management)
- [🚀 Production Secrets](#-production-secrets)
- [🔄 Rotación de Credenciales](#-rotación-de-credenciales)
- [❌ Nunca Hardcodear Secrets](#-nunca-hardcodear-secrets)
- [🚫 `.env` NO debe llegar a GitHub](#-env-no-debe-llegar-a-github)
- [🌐 Secrets del Backend vs Frontend](#-secrets-del-backend-vs-frontend)
    - [❌ Incorrecto](#-incorrecto)
    - [✅ Correcto](#-correcto)
- [🧠 FLUJO SEGURO](#-flujo-seguro)
    - [🔥 Concepto fundamental](#-concepto-fundamental)
## 🔐 Database Username

Es el nombre de usuario utilizado por el backend para autenticarse ante la database.

```text
Backend
   ↓
Database Username
   ↓
Database
```

Por ejemplo:

```text
DATABASE_USER=app_user
```

---

## 🔑 Database Password

Es la contraseña asociada al usuario de la database.

```text
DATABASE_USER
DATABASE_PASSWORD
       ↓
Backend
       ↓
Database
```

Debe mantenerse privada y nunca incluirse directamente en el código fuente.

---

## 🔗 Connection Strings

Una **Connection String** contiene la información necesaria para conectarse a una database.

Puede incluir información como:

| Información |
| ----------- |
| Host        |
| Port        |
| Database    |
| Username    |
| Password    |

Conceptualmente:

```text
Connection String
       ↓
Database Client
       ↓
Database
```

Como puede contener credenciales, debe tratarse como un **secret**.

---

## 🔑 API Keys

Una **API Key** es una credencial utilizada para autenticar una aplicación o servicio ante otra API.

```text
Backend
   ↓
API Key
   ↓
External API
```

Las API Keys privadas deben mantenerse en el backend y no exponerse públicamente.

---

## 🔐 JWT Secrets

Los **JWT Secrets** son valores utilizados por el backend para operaciones relacionadas con la firma o validación de JWT.

Conceptualmente:

```text
JWT Secret
    ↓
Backend
    ↓
Sign / Verify JWT
```

Debe permanecer privado.

Si un secret utilizado para firmar tokens se expone, un atacante podría comprometer la seguridad de la autenticación.

---

# 🌎 Environment Variables

Las **Environment Variables** permiten proporcionar configuración a una aplicación desde el entorno donde se ejecuta.

Por ejemplo:

```text
DATABASE_USER
DATABASE_PASSWORD
DATABASE_HOST
DATABASE_PORT
JWT_SECRET
```

Conceptualmente:

```text
Environment
     ↓
Environment Variables
     ↓
Backend
```

Esto permite separar la configuración del código fuente.

---

# 📄 `.env`

Un archivo `.env` suele utilizarse durante el desarrollo para almacenar variables de entorno.

Por ejemplo:

```env
DATABASE_USER=app_user
DATABASE_PASSWORD=myPassword
DATABASE_HOST=localhost
JWT_SECRET=mySecret
```

El backend puede leer estas variables desde el entorno.

---

# 🚫 `.gitignore`

Los archivos que contienen secrets no deberían subirse al repositorio.

Por ejemplo:

```text
.env
```

puede incluirse en:

```text
.gitignore
```

Conceptualmente:

```text
.env
 ↓
.gitignore
 ↓
❌ Git
```

---

# 🔐 Secret Management

En aplicaciones reales, especialmente en producción, los secrets suelen gestionarse mediante sistemas especializados de **Secret Management**.

Conceptualmente:

```text
Secret Manager
      ↓
Production Backend
      ↓
Database
```

Esto permite almacenar y controlar credenciales sin colocarlas directamente en el código.

---

# 🚀 Production Secrets

Los secrets utilizados en producción deben estar separados de los utilizados durante el desarrollo.

Por ejemplo:

```text
Development
    ↓
Development Database
    ↓
Development Credentials
```

y:

```text
Production
    ↓
Production Database
    ↓
Production Credentials
```

No deberías utilizar las mismas credenciales para todos los entornos.

---

# 🔄 Rotación de Credenciales

La **rotación de credenciales** consiste en reemplazar periódicamente o cuando sea necesario credenciales y secrets.

Por ejemplo:

```text
Old Password
     ↓
Rotate
     ↓
New Password
```

Es especialmente importante cuando una credencial:

* Fue expuesta.
* Fue comprometida.
* Ya no debería utilizarse.
* Necesita ser reemplazada por políticas de seguridad.

---

# ❌ Nunca Hardcodear Secrets

Nunca deberías colocar directamente secrets en el código:

```text
❌ Código

password = "myDatabasePassword"
```

En cambio:

```text
Environment
     ↓
DATABASE_PASSWORD
     ↓
Backend
     ↓
Database
```

El código utiliza la variable, mientras que el valor secreto permanece fuera del código fuente.

---

# 🚫 `.env` NO debe llegar a GitHub

Debes entender este flujo:

```text
.env
   ↓
❌ Git
❌ GitHub
```

Por eso normalmente:

```text
.env
```

se agrega a:

```text
.gitignore
```

Y en producción se utilizan mecanismos apropiados de configuración y secret management.

---

# 🌐 Secrets del Backend vs Frontend

Este punto es **muy importante**.

Las variables secretas del backend **no deben exponerse al frontend**.

### ❌ Incorrecto

```text
Database Password
      ↓
Frontend
      ↓
Browser
```

Cualquier usuario puede inspeccionar información que llega al navegador.

### ✅ Correcto

```text
Frontend
    ↓
HTTP Request
    ↓
Backend
    ↓
DATABASE_PASSWORD
    ↓
Database
```

El frontend solamente interactúa con el backend y nunca necesita conocer las credenciales privadas de la database.

---

# 🧠 FLUJO SEGURO

```text
Environment
     ↓
DATABASE_USER
DATABASE_PASSWORD
JWT_SECRET
API_KEYS
     ↓
Backend
     ↓
Database / External APIs
```

Mientras:

```text
Secrets
   ↓
❌ Source Code
❌ GitHub
❌ Frontend Bundle
❌ Browser
```

### 🔥 Concepto fundamental

> **Los secrets deben permanecer del lado del servidor y fuera del código fuente y repositorios públicos.**
