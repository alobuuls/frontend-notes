# 📄 01 - Multi-Stage Builds

> [!IMPORTANT]
> 🔥 **MUY IMPORTANTE**
>
> Los **Multi-Stage Builds** permiten utilizar diferentes etapas durante la construcción de una Docker Image para separar las herramientas necesarias para **construir** una aplicación de las necesarias para **ejecutarla**.

La idea principal es:

```text
Build Environment
      ↓
Build Application
      ↓
Production Environment
```

---

## 📑 Índice

- [📄 01 - Multi-Stage Builds](#-01---multi-stage-builds)
  - [📑 Índice](#-índice)
- [🧠 ¿Qué es un Multi-Stage Build?](#-qué-es-un-multi-stage-build)
- [🏗️ ¿Por qué existen?](#️-por-qué-existen)
- [❌ Problema de una sola Image](#-problema-de-una-sola-image)
- [✅ Con Multi-Stage Build](#-con-multi-stage-build)
- [🧩 Build Stage](#-build-stage)
- [🚀 Production Stage](#-production-stage)
- [🔀 `FROM ... AS`](#-from--as)
- [📦 `COPY --from`](#-copy---from)
- [🧱 Múltiples `FROM`](#-múltiples-from)
- [🎯 ¿Qué termina en la Image final?](#-qué-termina-en-la-image-final)
- [🅰️ Ejemplo: Angular → Nginx](#️-ejemplo-angular--nginx)
- [⚛️ React / Vite → Nginx](#️-react--vite--nginx)
- [🟢 Express → Node](#-express--node)
- [🧹 Build Stage vs Production Stage](#-build-stage-vs-production-stage)
- [📦 Imágenes intermedias](#-imágenes-intermedias)
- [⚡ Ventajas de Multi-Stage Builds](#-ventajas-de-multi-stage-builds)
    - [📦 Images más pequeñas](#-images-más-pequeñas)
    - [🔐 Menor superficie de ataque](#-menor-superficie-de-ataque)
    - [🧹 Separación de responsabilidades](#-separación-de-responsabilidades)
    - [🚀 Deployments más eficientes](#-deployments-más-eficientes)
- [🧠 La idea clave](#-la-idea-clave)

# 🧠 ¿Qué es un Multi-Stage Build?

Un **Multi-Stage Build** es un Dockerfile que utiliza múltiples instrucciones `FROM` para dividir el proceso de construcción en diferentes **stages**.

```dockerfile
FROM node:22 AS build

# Instalar dependencias
# Copiar código
# Construir aplicación


FROM nginx:alpine

# Copiar solamente el resultado del build
```

Conceptualmente:

```text
Source Code
     ↓
Build Stage
     ↓
Build
     ↓
Production Stage
     ↓
Final Image
```

Cada stage puede tener un propósito diferente.

---

# 🏗️ ¿Por qué existen?

Supongamos una aplicación Angular.

Para construirla necesitas herramientas como:

```text
Node.js
npm
Angular CLI
Dependencies
Source Code
Build Tools
```

Pero una vez que ejecutas:

```bash
npm run build
```

el resultado puede ser simplemente:

```text
dist/
```

Los archivos necesarios para ejecutar la aplicación pueden ser únicamente los archivos estáticos generados.

Por lo tanto, no necesitas tener en producción:

```text
❌ Source Code
❌ npm
❌ Angular CLI
❌ Build dependencies
❌ Node.js
```

si la aplicación final será servida por Nginx.

---

# ❌ Problema de una sola Image

Sin Multi-Stage Builds podrías terminar con algo así:

```text
Production Image
│
├── Node.js
├── npm
├── Angular CLI
├── node_modules
├── Source Code
├── Build Tools
├── dist/
└── Nginx
```

Esto puede producir una Image:

* Más grande.
* Con más dependencias.
* Con mayor superficie de ataque.
* Más difícil de mantener.

---

# ✅ Con Multi-Stage Build

Puedes separar las responsabilidades:

```text
Build Stage
│
├── Node.js
├── npm
├── Dependencies
├── Source Code
└── Build Tools
        │
        ↓
      npm run build
        │
        ↓
      dist/
        │
        ↓
Production Stage
│
├── Nginx
└── dist/
```

La Image final contiene solamente lo necesario para ejecutar la aplicación.

> [!TIP]
> 💡 El objetivo es que las herramientas necesarias para construir la aplicación no tengan que formar parte de la Image final.

---

# 🧩 Build Stage

El primer stage normalmente contiene las herramientas necesarias para construir la aplicación.

```dockerfile
FROM node:22 AS build
```

Aquí:

```text
node:22
    ↓
Build Environment
```

Puedes realizar operaciones como:

```dockerfile
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
```

El resultado puede ser:

```text
/app/dist
```

---

# 🚀 Production Stage

Después comienza otro stage:

```dockerfile
FROM nginx:alpine
```

Este stage representa el entorno final.

```text
Build Stage
    ↓
Production Stage
```

Aquí solamente copiamos lo que necesitamos:

```dockerfile
COPY --from=build /app/dist /usr/share/nginx/html
```

Conceptualmente:

```text
Build Stage
     │
     │ dist/
     ▼
Production Stage
     │
     ▼
Nginx
```

> [!NOTE]
> 📦 Solo copiamos el **artifact** necesario desde el Build Stage hacia el Production Stage.

---

# 🔀 `FROM ... AS`

La sintaxis:

```dockerfile
FROM node:22 AS build
```

hace dos cosas:

| Parte      | Función                      |
| ---------- | ---------------------------- |
| `node:22`  | Define una Base Image        |
| `AS build` | Le asigna un nombre al stage |

Por lo tanto:

```dockerfile
FROM node:22 AS build
```

significa conceptualmente:

```text
Stage
  ↓
build
  ↓
node:22
```

Ese nombre posteriormente puede utilizarse para referenciar el stage.

---

# 📦 `COPY --from`

Esta es una de las instrucciones más importantes de Multi-Stage Builds.

Por ejemplo:

```dockerfile
COPY --from=build /app/dist /usr/share/nginx/html
```

Significa:

```text
Stage: build
      │
      │ /app/dist
      ▼
Production Stage
      │
      │ /usr/share/nginx/html
      ▼
Nginx
```

> [!IMPORTANT]
> 📌 Copia archivos desde otro stage hacia el stage actual.
>
> No copia todo el stage. Solamente copia los archivos que especificas.

---

# 🧱 Múltiples `FROM`

Un Dockerfile Multi-Stage puede tener varios `FROM`.

```dockerfile
FROM node:22 AS build

# Build


FROM nginx:alpine

# Production
```

Cada `FROM` comienza un nuevo stage.

Conceptualmente:

```text
FROM node:22
     ↓
   build
     ↓
   dist/


FROM nginx:alpine
     ↓
production
     ↓
dist/
```

---

# 🎯 ¿Qué termina en la Image final?

🔥 Este concepto es fundamental.

Supongamos:

```dockerfile
FROM node:22 AS build

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build


FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
```

Aunque el primer stage utilizó:

```text
Node
npm
Dependencies
Source Code
Build Tools
```

la Image final está basada en:

```text
nginx:alpine
```

y solamente recibe lo que copiamos:

```text
/app/dist
```

Por lo tanto:

```text
Final Image
│
├── Nginx
└── dist/
```

> [!IMPORTANT]
> 🚨 No contiene automáticamente todo lo que existía en el `build` stage.

---

# 🅰️ Ejemplo: Angular → Nginx

Este es uno de los casos más importantes para ti como frontend developer.

```dockerfile
# =========================
# BUILD STAGE
# =========================

FROM node:22 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


# =========================
# PRODUCTION STAGE
# =========================

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
```

El proceso:

```text
Angular Source Code
       ↓
node:22
       ↓
npm install
       ↓
npm run build
       ↓
dist/
       ↓
nginx:alpine
       ↓
Production Image
```

---

# ⚛️ React / Vite → Nginx

La misma idea funciona para React o Vite:

```text
React / Vite
     ↓
Node
     ↓
npm install
     ↓
npm run build
     ↓
dist/
     ↓
Nginx
     ↓
Production Image
```

El concepto es exactamente el mismo:

```text
Build Tools
     ↓
Generate Static Files
     ↓
Production Server
```

---

# 🟢 Express → Node

También puedes utilizar Multi-Stage Builds para aplicaciones backend.

Por ejemplo:

```text
Source Code
     ↓
Build Stage
     ↓
TypeScript compilation
     ↓
JavaScript
     ↓
Production Stage
     ↓
Node
```

En un backend TypeScript podrías tener:

```text
Build Stage
│
├── Node
├── TypeScript
├── npm
├── Dependencies
└── Source Code
        ↓
      tsc
        ↓
      dist/
```

Y posteriormente una Image de producción con solamente lo necesario para ejecutar:

```text
Production Image
│
├── Node
├── Production Dependencies
└── dist/
```

Esto es especialmente útil cuando tu aplicación necesita herramientas de compilación que no son necesarias durante el runtime.

---

# 🧹 Build Stage vs Production Stage

| 🏗️ Build Stage                      | 🚀 Production Stage                          |
| ------------------------------------ | -------------------------------------------- |
| Construye la aplicación              | Ejecuta la aplicación                        |
| Contiene build tools                 | Solo contiene lo necesario                   |
| Puede contener source code           | Puede contener únicamente artifacts          |
| Puede contener dev dependencies      | Preferiblemente solo production dependencies |
| Node/npm/compilers                   | Runtime final                                |
| No necesariamente llega a producción | Se convierte en la Image final               |

Conceptualmente:

```text
BUILD
│
├── Source
├── Dependencies
├── Build Tools
└── Compiler
        ↓
      Artifact
        ↓
PRODUCTION
│
├── Runtime
└── Artifact
```

---

# 📦 Imágenes intermedias

Durante el proceso existen diferentes stages.

Por ejemplo:

```text
Stage 1
node:22
   ↓
Build


Stage 2
nginx:alpine
   ↓
Production
```

El hecho de que hayas utilizado `node:22` durante el build **no significa que Node termine formando parte de la Image final**.

La Image final depende del último stage y de los archivos que copies hacia él.

---

# ⚡ Ventajas de Multi-Stage Builds

| Ventaja                            | Resultado                                                                                      |
| ---------------------------------- | ---------------------------------------------------------------------------------------------- |
| 📦 Images más pequeñas             | Puedes excluir herramientas innecesarias                                                       |
| 🔐 Menor superficie de ataque      | Menos software significa potencialmente menos componentes que puedan contener vulnerabilidades |
| 🧹 Separación de responsabilidades | Build → Compile / Production → Run                                                             |
| 🚀 Deployments más eficientes      | Images más pequeñas pueden facilitar Push, Pull, Deployment y Startup                          |

### 📦 Images más pequeñas

```text
Build Tools
     ↓
❌ Production Image
```

### 🔐 Menor superficie de ataque

```text
Less Software
     ↓
Less Attack Surface
```

### 🧹 Separación de responsabilidades

```text
Build
  ↓
Compile

Production
  ↓
Run
```

### 🚀 Deployments más eficientes

Images más pequeñas pueden facilitar:

* Push.
* Pull.
* Deployment.
* Startup.

---

# 🧠 La idea clave

> [!IMPORTANT]
> 🐳 Multi-Stage Builds no significa simplemente:
>
> **"Tener varios containers."**
>
> Significa:
>
> **Utilizar varias etapas durante la construcción de una misma Docker Image para separar el entorno de build del entorno final.**

La idea completa:

```text
                Docker Build
                     │
          ┌──────────┴──────────┐
          ▼                     ▼
     Build Stage           Production Stage
          │                     │
   Node / npm / tools       Runtime
   Source Code              Application
   Dependencies                  ▲
          │                       │
          └─────── Artifact ──────┘
                     │
                     ▼
                Final Image
```

> [!TIP]
> 🎯 **Regla más importante para recordar:**
>
> **Los build tools no necesariamente tienen que existir en la imagen final.**
