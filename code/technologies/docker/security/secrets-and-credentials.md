# 📄 03 - Secrets & Credentials

> [!IMPORTANT]
> 🔐 Los **secrets** son uno de los conceptos más importantes cuando empiezas a llevar Docker hacia entornos reales, porque Docker puede facilitar muchísimo la configuración de una aplicación, pero **no debes confundir configuración con información sensible**.

---

## 📑 Índice 

- [� 03 - Secrets \& Credentials](#-03---secrets--credentials)
  - [📑 Índice](#-índice)
- [🔐 ¿Qué es un Secret?](#-qué-es-un-secret)
- [🧩 ¿Qué información debería considerarse un Secret?](#-qué-información-debería-considerarse-un-secret)
    - [🗄️ Database Credentials](#️-database-credentials)
    - [🔑 API Keys](#-api-keys)
    - [🔐 JWT Secrets](#-jwt-secrets)
    - [🎫 Access Tokens](#-access-tokens)
- [🌎 Environment Variables vs Secrets](#-environment-variables-vs-secrets)
- [📄 `.env`](#-env)
- [🚨 ¿Por qué NO guardar Secrets en el Dockerfile?](#-por-qué-no-guardar-secrets-en-el-dockerfile)
- [🚨 Tampoco guardar Secrets en Git](#-tampoco-guardar-secrets-en-git)
- [🐳 Secrets en Docker Compose](#-secrets-en-docker-compose)
- [🔄 Secrets en Runtime](#-secrets-en-runtime)
    - [❌ Evitar](#-evitar)
    - [✅ Preferir](#-preferir)
- [🏭 Secret Management en Production](#-secret-management-en-production)
- [🧠 `.env` vs Secret Manager](#-env-vs-secret-manager)
- [🔐 Principio fundamental](#-principio-fundamental)
- [🏗️ Arquitectura recomendada](#️-arquitectura-recomendada)
- [⚠️ Errores que debes evitar](#️-errores-que-debes-evitar)
    - [✅ Mejor enfoque](#-mejor-enfoque)
- [🔑 La idea que debes llevarte](#-la-idea-que-debes-llevarte)

# 🔐 ¿Qué es un Secret?

Un **Secret** es información sensible que una aplicación necesita para funcionar, pero que **no debería estar expuesta públicamente**.

Por ejemplo:

| Tipo                     | Ejemplo             |
| ------------------------ | ------------------- |
| 🔑 Passwords             | `DATABASE_PASSWORD` |
| 🔐 API Keys              | `STRIPE_API_KEY`    |
| 🗄️ Database Credentials | `DATABASE_USER`     |
| 🔒 JWT Secrets           | `JWT_SECRET`        |
| 🎫 Access Tokens         | `GITHUB_TOKEN`      |
| 🔐 Private Keys          | Claves privadas     |

Conceptualmente:

```text id="4q5h5v"
Application
     ↓
Needs Secret
     ↓
Runtime Configuration
```

Por ejemplo:

```text id="w8w4m7"
DATABASE_PASSWORD
JWT_SECRET
STRIPE_API_KEY
```

El objetivo es que la aplicación pueda acceder a estos valores **sin tenerlos escritos directamente en el código fuente o en la imagen Docker**.

---

# 🧩 ¿Qué información debería considerarse un Secret?

Algunos ejemplos comunes:

### 🗄️ Database Credentials

```env id="6kdrx3"
DATABASE_USER=admin
DATABASE_PASSWORD=super-secret-password
```

### 🔑 API Keys

```env id="yq5g4d"
STRIPE_API_KEY=sk_...
```

### 🔐 JWT Secrets

```env id="x6y6w7"
JWT_SECRET=some-long-random-secret
```

### 🎫 Access Tokens

```env id="h8s7p2"
GITHUB_TOKEN=...
```

> [!TIP]
> 🔑 **Regla general:** si alguien obtiene este valor y puede utilizarlo para acceder a un sistema, servicio o recurso, probablemente debe tratarse como un secret.

---

# 🌎 Environment Variables vs Secrets

Aquí es donde debes hacer una distinción importante.

Una **Environment Variable** es un mecanismo para proporcionar configuración a una aplicación.

Por ejemplo:

```env id="42k5rj"
NODE_ENV=production
PORT=3000
DATABASE_HOST=postgres
```

Pero también puedes proporcionar información sensible mediante environment variables:

```env id="2j3g9r"
DATABASE_PASSWORD=...
JWT_SECRET=...
```

Por eso:

> [!IMPORTANT]
> 🔥 **Environment Variable y Secret no son sinónimos.**
>
> Una environment variable es **cómo proporcionas un valor**.
>
> Un secret es **qué tipo de información estás protegiendo**.

Conceptualmente:

```text id="7a3y1n"
Environment Variable
        ↓
    Configuration
        │
        ├── PORT=3000
        ├── NODE_ENV=production
        │
        └── DATABASE_PASSWORD=🔐
```

---

# 📄 `.env`

Un archivo `.env` puede utilizarse para proporcionar variables de entorno:

```env id="p0v0v3"
NODE_ENV=development
PORT=3000
DATABASE_URL=postgres://...
JWT_SECRET=...
```

Esto puede ser muy útil durante development.

> [!WARNING]
> ⚠️ **Un `.env` no es automáticamente un Secret Manager.**
>
> Es simplemente una forma práctica de proporcionar configuración.

Por ejemplo:

```text id="k7x0fl"
.env
   ↓
Environment Variables
   ↓
Container
   ↓
Application
```

Y normalmente:

```text id="5k0t8a"
.env
   ↓
.gitignore
   ↓
❌ Git Repository
```

---

# 🚨 ¿Por qué NO guardar Secrets en el Dockerfile?

Nunca deberías hacer algo como:

```dockerfile id="9m8h0w"
ENV DATABASE_PASSWORD=myPassword123
```

Porque estás colocando información sensible directamente dentro de la definición de la imagen.

Conceptualmente:

```text id="z1n0r4"
Dockerfile
    ↓
Secret
    ↓
docker build
    ↓
Docker Image
```

El problema es que la información puede terminar formando parte de la configuración o historial asociado con la imagen.

Además, cualquier persona que tenga acceso a determinados artefactos de la imagen puede potencialmente obtener información que no debería estar ahí.

Por eso:

```dockerfile id="9g0v1n"
❌ ENV DATABASE_PASSWORD=myPassword123
```

es una mala práctica.

> [!CAUTION]
> 🔐 **Los secrets no deben formar parte de la Docker Image.**

---

# 🚨 Tampoco guardar Secrets en Git

Evita:

```text id="zq9z4y"
.env
config.ts
Dockerfile
compose.yaml
```

con secrets reales dentro del repositorio.

Por ejemplo:

```env id="j7p5t8"
JWT_SECRET=super-secret-value
DATABASE_PASSWORD=myPassword123
```

Aunque después elimines el archivo, el secreto podría haber quedado registrado en el historial de Git.

Por eso:

```text id="j7d3g4"
.env
   ↓
.gitignore
   ↓
❌ GitHub
```

Y puedes utilizar:

```text id="w2s7n4"
.env.example
```

para documentar las variables necesarias:

```env id="r9k3s2"
NODE_ENV=
PORT=
DATABASE_URL=
JWT_SECRET=
```

Sin incluir los valores reales.

---

# 🐳 Secrets en Docker Compose

Docker Compose puede trabajar con mecanismos específicos para proporcionar secrets.

Conceptualmente:

```text id="5s9f3j"
Secret
   ↓
Docker Compose
   ↓
Container
   ↓
Application
```

La idea es separar:

```text id="2j3k5q"
Application Image
        +
Runtime Secrets
        ↓
Running Container
```

Así la misma imagen puede utilizarse en diferentes entornos.

Por ejemplo:

```text id="5m0r7h"
              SAME IMAGE
                   │
        ┌──────────┴──────────┐
        ▼                     ▼
   Development             Production
        │                     │
   Dev Secrets          Prod Secrets
```

La imagen no necesita contener las credenciales de ninguno de los dos entornos.

---

# 🔄 Secrets en Runtime

Una buena arquitectura busca que los secrets sean proporcionados **cuando la aplicación se ejecuta**, no cuando se construye la imagen.

### ❌ Evitar

```text id="h6x5b0"
Dockerfile
    ↓
Secret
    ↓
docker build
    ↓
Image
```

### ✅ Preferir

```text id="p4v8w3"
Secret Management
        ↓
Runtime
        ↓
Container
        ↓
Application
```

Esto permite que una misma imagen pueda utilizar diferentes credenciales dependiendo del entorno.

---

# 🏭 Secret Management en Production

En proyectos reales, especialmente en producción, normalmente no quieres depender simplemente de archivos `.env` almacenados manualmente.

Puedes utilizar un **Secret Manager** especializado.

Conceptualmente:

```text id="5w8v0j"
Secret Manager
      ↓
Application / Container
      ↓
Secret
```

Estos sistemas permiten gestionar aspectos como:

* almacenamiento seguro
* acceso controlado
* permisos
* rotación
* auditoría
* separación entre entornos

Dependiendo de la infraestructura, pueden existir servicios especializados para esto.

---

# 🧠 `.env` vs Secret Manager

Es importante no confundirlos:

| `.env`                   | Secret Manager                                      |
| ------------------------ | --------------------------------------------------- |
| Archivo de configuración | Sistema especializado                               |
| Muy útil en development  | Más orientado a entornos controlados                |
| Fácil de utilizar        | Mayor control y seguridad                           |
| Puede contener secrets   | Diseñado específicamente para gestionarlos          |
| Normalmente local        | Puede integrarse con infraestructura y aplicaciones |

> [!NOTE]
> 💡 La idea importante no es:
>
> `.env` = inseguro
>
> sino:
>
> **`.env` es una forma de proporcionar configuración; un Secret Manager es una solución especializada para gestionar información sensible.**

---

# 🔐 Principio fundamental

Una aplicación debería separar:

```text id="x8f0a5"
CODE
   +
CONFIGURATION
   +
SECRETS
```

Por ejemplo:

```text id="j6q4m1"
Application Code
      │
      ├── Business Logic
      │
      └── Configuration
              │
              ├── NODE_ENV
              ├── PORT
              ├── DATABASE_HOST
              │
              └── DATABASE_PASSWORD 🔐
```

El código no debería necesitar conocer de antemano los valores reales.

---

# 🏗️ Arquitectura recomendada

Una aplicación puede seguir este flujo:

```text id="9q2z7v"
                Application Image
                       │
                       │
             ┌─────────┴─────────┐
             │                   │
             ▼                   ▼
      Configuration           Secrets
             │                   │
        Environment        Secret Manager
        Variables                 │
             │                   │
             └─────────┬─────────┘
                       ▼
                   Container
                       │
                       ▼
                  Application
```

De esta manera:

```text id="3y6v0w"
Same Image
    ↓
Development → Dev Configuration + Dev Secrets

Same Image
    ↓
Production → Prod Configuration + Prod Secrets
```

---

# ⚠️ Errores que debes evitar

| ❌ Error                                | Ejemplo                          |
| -------------------------------------- | -------------------------------- |
| Secret dentro del Dockerfile           | `ENV JWT_SECRET=my-secret`       |
| Secret dentro del código               | `const jwtSecret = 'my-secret';` |
| Secret dentro de Git                   | `.env → git add . → GitHub`      |
| Confundir `.env` con Secret Management | `.env ≠ Secret Manager`          |

### ✅ Mejor enfoque

```text id="3n2j7x"
Code
  ↓
Image

Configuration
  ↓
Environment

Secrets
  ↓
Secure Runtime Mechanism
```

---

# 🔑 La idea que debes llevarte

El punto principal es **no construir la imagen con tus credenciales**.

Tu imagen debería poder ser reutilizable:

```text id="7k1h4p"
                SAME IMAGE
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
     Development          Production
          │                   │
      Dev Secrets         Prod Secrets
```

Así puedes cambiar credenciales, API keys o passwords **sin tener que reconstruir la imagen**.

> [!IMPORTANT]
> 🔐 **Los secrets pertenecen al entorno de ejecución, no al código ni a la imagen.**
