# 📄 03 - Configuration Management

> 🔥 **CONCEPTO FUNDAMENTAL:** **Configuration Management** consiste en separar la **configuración de una aplicación** de su **código**, de manera que puedas ejecutar la misma aplicación en diferentes entornos sin tener que modificarla ni reconstruirla.
>
> La idea central es:
>
> ```text
>              SAME IMAGE
>                  │
>       ┌──────────┴──────────┐
>       ▼                     ▼
> Development             Production
>       │                     │
>  Environment            Environment
>   Variables              Variables
> ```
>
> La aplicación es la misma; **lo que cambia es su configuración**.

---

# 🧠 Configuration vs Code

Debes diferenciar entre:

## 💻 Code

Es la lógica de la aplicación:

```text
src/
├── controllers/
├── services/
├── components/
└── ...
```

Por ejemplo:

```javascript
const databaseUrl = process.env.DATABASE_URL;
```

El código dice:

> "Necesito una `DATABASE_URL`."

Pero **no debería necesariamente decidir cuál es el valor concreto**.

---

## ⚙️ Configuration

Son los valores que pueden cambiar dependiendo del entorno:

```text
NODE_ENV
PORT
DATABASE_URL
API_URL
JWT_SECRET
```

Conceptualmente:

```text
Application Code
       +
Configuration
       ↓
Running Application
```

Esto permite mantener:

```text
Code
  ↓
igual
```

mientras:

```text
Configuration
  ↓
puede cambiar
```

---

# 🧪 Development Configuration

Durante development puedes tener configuraciones como:

```env
NODE_ENV=development
PORT=3000
DATABASE_URL=postgres://localhost:5432/myapp_dev
API_URL=http://localhost:3000
```

Por ejemplo:

```text
Development
     │
     ├── Local Database
     ├── Debug enabled
     ├── Development API
     └── Development settings
```

---

# 🚀 Production Configuration

En producción los valores serán diferentes:

```env
NODE_ENV=production
PORT=3000
DATABASE_URL=postgres://production-db:5432/myapp
API_URL=https://api.example.com
```

Conceptualmente:

```text
Production
     │
     ├── Production Database
     ├── Production API
     ├── Production settings
     └── Real credentials
```

La aplicación puede seguir siendo exactamente la misma.

---

# 🌎 Environment-Specific Configuration

Un mismo proyecto puede tener diferentes entornos:

```text
Application
    │
    ├── Development
    ├── Testing
    └── Production
```

Cada uno puede tener su propia configuración:

```text
Development
   ↓
DATABASE_URL=dev-db

Testing
   ↓
DATABASE_URL=test-db

Production
   ↓
DATABASE_URL=prod-db
```

> 💡 No necesitas crear una aplicación diferente para cada entorno.

---

# 🌱 Environment Variables

Las **Environment Variables** son una de las formas principales de proporcionar configuración.

Por ejemplo:

```text
NODE_ENV=production
PORT=3000
DATABASE_URL=...
```

Una aplicación puede leerlas desde su entorno.

En Node.js:

```javascript
process.env.NODE_ENV
```

o:

```javascript
process.env.DATABASE_URL
```

El flujo es:

```text
Environment
     ↓
Environment Variables
     ↓
Application
```

---

# 📄 `.env`

Un `.env` es un archivo que facilita almacenar variables de configuración:

```env
NODE_ENV=development
PORT=3000
DATABASE_URL=postgres://localhost:5432/myapp
```

Conceptualmente:

```text
.env
  ↓
Configuration
  ↓
Environment Variables
  ↓
Application
```

> ⚠️ **IMPORTANTE:** `.env` es un archivo de configuración, **no un sistema de secrets**.
>
> Además, normalmente no debes subirlo al repositorio cuando contiene valores reales o sensibles.

---

# 📋 `.env.example`

Para documentar qué variables necesita el proyecto puedes utilizar:

```text
.env.example
```

Por ejemplo:

```env
NODE_ENV=development
PORT=3000
DATABASE_URL=
JWT_SECRET=
```

Esto permite que otro desarrollador sepa:

> "Estas son las variables que necesita la aplicación."

Sin conocer tus valores reales.

```text
.env.example
      ↓
Documenta configuración
      ↓
Developer crea .env
      ↓
Agrega valores locales
```

---

# 🔐 Secrets

Algunas variables contienen información sensible:

```text
DATABASE_PASSWORD
JWT_SECRET
API_KEY
ACCESS_TOKEN
```

Estas variables deben manejarse con mayor cuidado.

No deberías hacer:

```text
❌ GitHub
    ↓
JWT_SECRET=super-secret
```

Ni introducir secretos directamente en un `Dockerfile`:

```dockerfile
ENV JWT_SECRET=super-secret
```

Para proyectos reales, los secretos deberían proporcionarse mediante mecanismos apropiados del entorno, plataforma de deployment o CI/CD.

La idea es:

```text
Configuration
     │
     ├── Normal configuration
     │
     └── Secrets
             ↓
       Mayor protección
```

---

# 🐳 Configuration + Docker

Docker permite proporcionar configuración **cuando ejecutas el container**.

Por ejemplo:

```bash
docker run \
  -e NODE_ENV=production \
  -e PORT=3000 \
  my-api:1.0
```

La Image:

```text
my-api:1.0
```

no cambia.

Solamente cambia la configuración del container:

```text
my-api:1.0
      │
      ├── Development
      │      └── Environment A
      │
      └── Production
             └── Environment B
```

---

# 🔄 Configuración sin reconstruir la Image

> 🔥 **CONCEPTO CLAVE:** Puedes utilizar la misma Image con diferentes configuraciones.

Supongamos que construyes:

```text
my-api:1.0
```

Puedes utilizarla en development:

```text
my-api:1.0
     ↓
DATABASE_URL=dev-db
```

y posteriormente en production:

```text
my-api:1.0
     ↓
DATABASE_URL=prod-db
```

No necesitas:

```text
❌ cambiar código
❌ modificar Dockerfile
❌ reconstruir Image
```

Puedes simplemente proporcionar otra configuración.

```text
              my-api:1.0
                   │
        ┌──────────┴──────────┐
        ▼                     ▼
 Development             Production
        │                     │
    Config A               Config B
        │                     │
        ▼                     ▼
    Container A           Container B
```

---

# 🐳 Configuration en Docker Compose

Docker Compose facilita manejar configuración de varios servicios.

Por ejemplo:

```yaml
services:
  api:
    image: my-api:1.0
    environment:
      NODE_ENV: production
      DATABASE_URL: ${DATABASE_URL}

  postgres:
    image: postgres:17
    environment:
      POSTGRES_DB: ${POSTGRES_DB}
      POSTGRES_USER: ${POSTGRES_USER}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
```

Y el `.env`:

```env
DATABASE_URL=postgres://...
POSTGRES_DB=myapp
POSTGRES_USER=admin
POSTGRES_PASSWORD=...
```

El flujo sería:

```text
.env
  ↓
Docker Compose
  ↓
Environment Variables
  ↓
Containers
  ↓
Applications
```

---

# 🔄 Configuration en CI/CD

En un proyecto real, la configuración también puede venir del sistema de **CI/CD**.

Por ejemplo:

```text
GitHub Actions
      ↓
Environment Variables / Secrets
      ↓
Docker
      ↓
Container
      ↓
Application
```

Esto permite que los valores sensibles no tengan que estar escritos directamente en el código.

Por ejemplo:

```text
CI/CD
 │
 ├── DATABASE_URL
 ├── JWT_SECRET
 └── API_KEY
        ↓
    Deployment
```

La plataforma de CI/CD proporciona esos valores durante el proceso correspondiente.

---

# 🏗️ Build-time vs Runtime Configuration

Esta diferencia es muy importante en Docker.

## 🔨 Build-time

Ocurre cuando construyes la Image:

```text
Dockerfile
    ↓
docker build
    ↓
Image
```

Aquí pueden existir valores necesarios durante el build, por ejemplo mediante `ARG`.

```dockerfile
ARG NODE_VERSION=22
```

---

## ▶️ Runtime

Ocurre cuando ejecutas el container:

```text
Image
   ↓
docker run
   ↓
Container
```

Aquí puedes proporcionar:

```text
Environment Variables
Secrets
Configuration
```

Por ejemplo:

```bash
docker run \
  -e NODE_ENV=production \
  my-api:1.0
```

Conceptualmente:

```text
Build Time
    ↓
Dockerfile
    ↓
Image
    │
    │
    ▼
Runtime
    ↓
Environment
    ↓
Container
    ↓
Application
```

---

# 🚨 ¿Por qué es importante esto?

Imagina que tienes:

```text
my-api:1.0
```

y necesitas cambiar:

```text
DATABASE_URL
```

Si esa configuración está correctamente separada del código:

```text
my-api:1.0
      ↓
Environment
      ↓
DATABASE_URL=...
```

puedes cambiarla sin reconstruir la Image.

Pero si haces algo como:

```dockerfile
ENV DATABASE_URL=production-db
```

y necesitas cambiar ese valor modificando el Dockerfile, entonces tendrías que volver a construir la Image.

> 🧠 **Pregunta clave:**
>
> **¿Esta información pertenece a la aplicación o al entorno donde se ejecuta?**

---

# 🧩 El objetivo de Configuration Management

Un buen diseño intenta separar:

```text
             Application
                  │
        ┌─────────┴─────────┐
        ▼                   ▼
       Code            Configuration
        │                   │
        │              Environment
        │                   │
        └─────────┬─────────┘
                  ▼
             Application
              Running
```

El código contiene **qué hace la aplicación**.

La configuración determina **con qué valores y servicios funciona**.

---

# 🔥 Ejemplo completo

Supongamos una API:

```text
my-api:1.0
```

La aplicación utiliza:

```javascript
process.env.DATABASE_URL
process.env.JWT_SECRET
process.env.NODE_ENV
```

### 🧪 Development

```text
my-api:1.0
     ↓
NODE_ENV=development
DATABASE_URL=dev-db
JWT_SECRET=dev-secret
```

### 🚀 Production

```text
my-api:1.0
     ↓
NODE_ENV=production
DATABASE_URL=prod-db
JWT_SECRET=prod-secret
```

La Image sigue siendo:

```text
my-api:1.0
```

Lo que cambia es:

```text
Environment
```

---

# 🧠 La idea fundamental

La arquitectura que debes tener en mente es:

```text
                  SAME IMAGE
                      │
           ┌──────────┴──────────┐
           ▼                     ▼
      Development            Production
           │                     │
     Environment             Environment
      Variables               Variables
           │                     │
           ▼                     ▼
       Container              Container
           │                     │
           └──────────┬──────────┘
                      ▼
                  Application
```

> 🔥 **REGLA DE ORO:** Construye la Image con la aplicación y proporciona la configuración desde el entorno donde esa Image se ejecuta.

Esto permite que una misma Image pueda pasar de:

```text
Development
     ↓
Testing
     ↓
Production
```

**sin modificar el código ni reconstruirla simplemente porque cambió la configuración.**
