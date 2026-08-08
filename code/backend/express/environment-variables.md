# 🌱 ENVIRONMENT VARIABLES

Las **Environment Variables (variables de entorno)** permiten almacenar valores de configuración que pueden cambiar dependiendo del entorno donde se ejecuta la aplicación.

Son especialmente importantes para:

* 🔐 Proteger información sensible.
* ⚙️ Configurar la aplicación sin modificar el código.
* 🌍 Tener configuraciones diferentes para desarrollo y producción.

La idea principal es:

```text id="v4n2kx"
.env
 ↓
process.env
 ↓
Express
```

## 📑 ÍNDICE 

1. 🌱 [ENVIRONMENT VARIABLES](#1️⃣-environment-variables)
2. 📄 [.ENV](#2️⃣-env)
3. ⚙️ [`process.env`](#3️⃣-processenv)
4. 🧩 [CONFIGURATION](#4️⃣-configuration)
5. 🔐 [SECRETS](#5️⃣-secrets)
6. 💻 [DEVELOPMENT ENVIRONMENT](#6️⃣-development-environment)
7. 🚀 [PRODUCTION ENVIRONMENT](#7️⃣-production-environment)
8. 🚫 [`.gitignore`](#8️⃣-gitignore)
9. 🌍 [ENVIRONMENT-SPECIFIC CONFIGURATION](#9️⃣-environment-specific-configuration)
10. 🧠 [`.env` VS `process.env`](#-env-vs-processenv)
11. 🏗️ [FLUJO COMPLETO](#-flujo-completo)
12. 🎯 [BUENAS PRÁCTICAS](#-buenas-prácticas)
13. ⭐ [IDEA PRINCIPAL](#-idea-principal)

## 1️⃣ 🌱 ENVIRONMENT VARIABLES

Una **Environment Variable** es un valor proporcionado al entorno donde se ejecuta la aplicación.

Por ejemplo:

```text id="m2q7cz"
PORT=3000
DATABASE_URL=...
JWT_SECRET=...
```

En lugar de escribir esos valores directamente en el código:

```js id="9n6q4p"
const port = 3000;
```

puedes obtenerlos desde el entorno:

```js id="r8w3fj"
process.env.PORT
```

Esto permite cambiar la configuración sin modificar el código fuente.

## 2️⃣ 📄 `.env`

`.env` es un archivo utilizado habitualmente para definir variables de entorno durante el desarrollo.

Por ejemplo:

```text id="t3c6hm"
PORT=3000
DATABASE_URL=postgresql://...
JWT_SECRET=super-secret
```

Conceptualmente:

```text id="q5k9bx"
.env
 │
 ├── PORT
 ├── DATABASE_URL
 └── JWT_SECRET
```

El archivo `.env` pertenece a la **configuración del entorno**, no a la lógica de negocio.

> [!WARNING]
> Un `.env` puede contener información sensible. **No debes subirlo al repositorio si contiene secrets.**

## 3️⃣ ⚙️ `process.env`

Node.js expone las variables de entorno mediante:

```js id="k4s8xz"
process.env
```

Por ejemplo:

```js id="f2p7mn"
const port = process.env.PORT;
```

Si tienes:

```text id="j6v3qw"
PORT=3000
```

puedes acceder a él mediante:

```js id="u9c5rt"
process.env.PORT
```

La relación es:

```text id="b8m4ky"
.env
 ↓
Environment
 ↓
process.env
 ↓
Application
```

## 4️⃣ 🧩 CONFIGURATION

La configuración de la aplicación debería estar separada de la lógica de negocio.

Por ejemplo:

```text id="n3w7fz"
src/
├── config/
│   └── env.ts
├── controllers/
├── services/
└── routes/
```

Conceptualmente:

```text id="x6q2vc"
Environment Variables
        ↓
     Config
        ↓
   Application
```

Esto evita tener referencias a `process.env` repartidas por toda la aplicación.

Por ejemplo, en lugar de:

```js id="e7h3ps"
const service = new Service(process.env.DATABASE_URL);
```

en muchos archivos diferentes, puedes centralizar la configuración:

```text id="z4m8wd"
process.env
    ↓
config
    ↓
services
```

### 🎯 Objetivo

Que exista un único lugar responsable de interpretar la configuración del entorno.

## 5️⃣ 🔐 SECRETS

Los **secrets** son valores sensibles que deben mantenerse privados.

Ejemplos:

```text id="c5r9vn"
JWT_SECRET
DATABASE_PASSWORD
API_KEY
PRIVATE_KEY
```

No deberían aparecer directamente en el código:

```js id="p2k6hx"
const jwtSecret = '123456';
```

Ni en archivos públicos:

```text id="w8q3jm"
GitHub
 ↓
❌ JWT_SECRET
```

La idea correcta es:

```text id="s6f4bt"
Secret
  ↓
Environment / Secret Manager
  ↓
process.env
  ↓
Backend
```

> [!IMPORTANT]
> Las Environment Variables ayudan a **evitar hardcodear secrets en el código**, pero no hacen que un secret sea automáticamente seguro. También hay que proteger el entorno donde esas variables están almacenadas.

---

## 6️⃣ 💻 DEVELOPMENT ENVIRONMENT

El **Development Environment** es el entorno utilizado mientras desarrollas y pruebas la aplicación localmente.

Por ejemplo:

```text id="q4v8ns"
Frontend
localhost:4200

Backend
localhost:3000

Database
localhost
```

Puedes tener variables específicas:

```text id="j7m2cx"
PORT=3000
DATABASE_URL=localhost
NODE_ENV=development
```

El objetivo es que tu aplicación pueda funcionar localmente sin utilizar necesariamente la configuración de producción.

## 7️⃣ 🚀 PRODUCTION ENVIRONMENT

**Production** es el entorno donde se ejecuta la aplicación utilizada por los usuarios reales.

Por ejemplo:

```text id="r5k9wd"
Frontend
https://app.example.com

Backend
https://api.example.com
```

La configuración puede ser diferente:

```text id="x2f6qm"
PORT=8080
DATABASE_URL=production-database
NODE_ENV=production
```

La misma aplicación puede utilizar diferentes valores:

```text id="m8c3vp"
             Application
                  │
        ┌─────────┴─────────┐
        ▼                   ▼
   Development          Production
        │                   │
   localhost            real server
        │                   │
    dev database       prod database
```

## 8️⃣ 🚫 `.gitignore`

`.gitignore` indica a Git qué archivos o carpetas **no debe incluir en el control de versiones**.

Por ejemplo:

```text id="h6n4tz"
node_modules/
.env
```

Una configuración habitual sería:

```text id="k9p2rw"
node_modules/
.env
.env.*
!.env.example
```

La idea es:

```text id="c7m5vx"
.env
 ↓
❌ Git
 ↓
❌ GitHub
```

Pero puedes mantener un archivo de ejemplo:

```text id="z3q8fb"
.env.example
```

con variables sin valores sensibles:

```text id="t4w6nj"
PORT=
DATABASE_URL=
JWT_SECRET=
```

Así otros desarrolladores saben qué variables necesita el proyecto.

## 9️⃣ 🌍 ENVIRONMENT-SPECIFIC CONFIGURATION

Una aplicación puede necesitar diferentes configuraciones dependiendo del entorno.

Por ejemplo:

```text id="p6s2km"
Development
├── API_URL=http://localhost:3000
├── LOG_LEVEL=debug
└── NODE_ENV=development

Production
├── API_URL=https://api.example.com
├── LOG_LEVEL=error
└── NODE_ENV=production
```

Conceptualmente:

```text id="v8r3qx"
                    Application
                         │
              Environment Variables
                         │
             ┌───────────┴───────────┐
             ▼                       ▼
       Development                Production
             │                       │
       localhost                  HTTPS
       debug logs               real database
       dev database             production config
```

Esto permite que **el código de la aplicación sea el mismo**, mientras cambia su configuración.

## 🧠 `.env` VS `process.env`

Es importante no confundirlos.

| Concepto                | Qué es                                                         |
| ----------------------- | -------------------------------------------------------------- |
| 📄 `.env`               | Archivo donde puedes definir variables                         |
| ⚙️ `process.env`        | Objeto mediante el cual Node.js accede a variables del entorno |
| 🌱 Environment Variable | El valor de configuración proporcionado al proceso             |
| 🔐 Secret               | Información sensible que debe protegerse                       |

La idea:

```text id="n5d7yc"
.env
 ↓
Variables de entorno
 ↓
process.env
 ↓
Express
```

## 🏗️ FLUJO COMPLETO

En desarrollo puedes imaginarlo así:

```text id="w2k6fp"
             .env
               │
               ▼
      Environment Variables
               │
               ▼
          process.env
               │
               ▼
             Config
               │
        ┌──────┴──────┐
        ▼             ▼
     Express       Services
        │             │
        └──────┬──────┘
               ▼
            Database
```

Y en producción:

```text id="b9x4mv"
Production Environment
        │
        ▼
Environment Variables
        │
        ▼
   process.env
        │
        ▼
     Express
```

Aquí **no necesariamente existe un archivo** **`.env`** **en producción**. Muchos servicios de hosting, contenedores y plataformas cloud proporcionan las variables directamente al proceso.

## 🎯 BUENAS PRÁCTICAS

| Práctica                                       |   |
| ---------------------------------------------- | - |
| No hardcodear secrets                          | ✅ |
| No subir `.env` a Git                          | ✅ |
| Utilizar `.gitignore`                          | ✅ |
| Mantener `.env.example`                        | ✅ |
| Separar configuración de lógica                | ✅ |
| Tener configuraciones por entorno              | ✅ |
| Validar que las variables requeridas existan   | ✅ |
| No guardar passwords directamente en el código | ❌ |
| No imprimir secrets en logs                    | ❌ |
| No enviar variables privadas al frontend       | ❌ |

### ⭐ IDEA PRINCIPAL

Piensa en las Environment Variables como una **capa de configuración externa a tu código**:

```text id="f7q3sz"
                 CODE
                  │
                  ▼
             ┌─────────┐
             │ CONFIG  │
             └────┬────┘
                  ▲
                  │
        Environment Variables
                  ▲
                  │
        ┌─────────┴─────────┐
        │                   │
   Development          Production
```

> **El código define cómo funciona la aplicación; las variables de entorno definen con qué configuración funciona.**
