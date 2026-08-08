# 🚀 DEPLOYMENT

El **deployment** es el proceso de llevar una aplicación Express desde el entorno de desarrollo hasta un entorno donde pueda ejecutarse para usuarios reales.

La idea general es:

```text id="6x2m8q"
💻 Development
      ↓
🏗️ Build / preparación
      ↓
🚀 Production
      ↓
☁️ Hosting / Cloud
      ↓
👥 Usuarios
```

# 📑 ÍNDICE

- [🚀 DEPLOYMENT](#-deployment)
- [📑 ÍNDICE](#-índice)
  - [1️⃣ 🧑‍💻 DEVELOPMENT VS PRODUCTION](#1️⃣--development-vs-production)
    - [Development](#development)
    - [Production](#production)
  - [2️⃣ 🏗️ BUILD](#2️⃣-️-build)
    - [🧠 Importante](#-importante)
  - [3️⃣ 🖥️ PRODUCTION SERVER](#3️⃣-️-production-server)
  - [4️⃣ ⚙️ ENVIRONMENT CONFIGURATION](#4️⃣-️-environment-configuration)
  - [5️⃣ ☁️ HOSTING](#5️⃣-️-hosting)
  - [6️⃣ ⚙️ PROCESS MANAGEMENT](#6️⃣-️-process-management)
  - [7️⃣ 🐳 DOCKER](#7️⃣--docker)
    - [🧠 ¿Por qué es útil?](#-por-qué-es-útil)
  - [8️⃣ 🔄 CI/CD](#8️⃣--cicd)
    - [CI — Continuous Integration](#ci--continuous-integration)
    - [CD — Continuous Delivery / Deployment](#cd--continuous-delivery--deployment)
  - [9️⃣ 📝 LOGS IN PRODUCTION](#9️⃣--logs-in-production)
  - [🔟 📈 SCALING](#--scaling)
    - [Vertical Scaling](#vertical-scaling)
    - [Horizontal Scaling](#horizontal-scaling)
  - [1️⃣1️⃣ 🔀 REVERSE PROXY](#1️⃣1️⃣--reverse-proxy)
  - [1️⃣2️⃣ ☁️ CLOUD DEPLOYMENT](#1️⃣2️⃣-️-cloud-deployment)
  - [🏗️ ARQUITECTURA DE PRODUCCIÓN](#️-arquitectura-de-producción)
  - [🔄 FLUJO COMPLETO DE DEPLOYMENT](#-flujo-completo-de-deployment)
    - [🧠 IDEA CLAVE](#-idea-clave)


## 1️⃣ 🧑‍💻 DEVELOPMENT VS PRODUCTION

### Development

Es el entorno utilizado para desarrollar y probar la aplicación.

```text id="4p7v2n"
Developer
   ↓
Express
   ↓
Localhost
```

Normalmente tenemos:

* 🔧 Debugging
* 📝 Logs detallados
* 🔄 Hot reload
* 🧪 Tests
* ⚙️ Configuración de desarrollo

### Production

Es el entorno donde la aplicación está disponible para usuarios reales.

```text id="8m3q6x"
Users
   ↓
Internet
   ↓
Express
```

En producción debemos prestar especial atención a:

| Aspecto                  |   |
| ------------------------ | - |
| 🔐 Seguridad             |   |
| ⚡ Performance            |   |
| 📊 Monitoring            |   |
| 📝 Logs                  |   |
| 🔄 Availability          |   |
| ⚙️ Environment variables |   |

## 2️⃣ 🏗️ BUILD

El **build** prepara la aplicación para ejecutarse en producción.

En un backend Node.js/Express puede incluir:

```text id="2k9r5m"
Source Code
    ↓
TypeScript compilation
    ↓
JavaScript
    ↓
Production files
```

Por ejemplo, si utilizamos TypeScript:

```text id="7x4p1v"
src/
   ↓
tsc
   ↓
dist/
```

El servidor de producción normalmente ejecutará el código generado.

### 🧠 Importante

No todos los proyectos Express necesitan un build complejo.

Si el proyecto está escrito directamente en JavaScript, puede no existir una etapa de compilación como tal.

## 3️⃣ 🖥️ PRODUCTION SERVER

El **Production Server** es el entorno donde se ejecuta nuestra aplicación.

Por ejemplo:

```text id="5q8m3x"
Server
   ↓
Node.js
   ↓
Express
   ↓
API
```

Express se encarga de manejar las requests:

```text id="9v2k6p"
Client
   ↓
HTTP Request
   ↓
Node.js + Express
   ↓
HTTP Response
```

El servidor debe permanecer disponible para recibir requests de los usuarios.

## 4️⃣ ⚙️ ENVIRONMENT CONFIGURATION

La configuración puede cambiar dependiendo del entorno.

Por ejemplo:

```text id="3m7x5q"
Development
   ↓
localhost
```

mientras que:

```text id="8p4v1n"
Production
   ↓
api.example.com
```

Por eso utilizamos **Environment Variables**.

```text id="6k2r9m"
Environment
    ↓
process.env
    ↓
Express
```

Podemos tener variables como:

```text id="4x7q8c"
PORT
DATABASE_URL
JWT_SECRET
NODE_ENV
```

La configuración de producción debe mantenerse separada del código fuente.

## 5️⃣ ☁️ HOSTING

**Hosting** significa proporcionar la infraestructura donde nuestra aplicación puede ejecutarse.

Por ejemplo:

```text id="1n6m3v"
Local Computer
      ↓
Server / Cloud
      ↓
Node.js
      ↓
Express
```

El proveedor se encarga de proporcionar recursos como:

* 🖥️ CPU
* 🧠 RAM
* 💾 Storage
* 🌐 Network

El objetivo es que nuestra API pueda ser accesible desde Internet.

```text id="7q3x9p"
Frontend
   ↓
Internet
   ↓
Hosting
   ↓
Express API
```
## 6️⃣ ⚙️ PROCESS MANAGEMENT

Una aplicación Node.js es un proceso.

En producción necesitamos asegurarnos de que ese proceso:

```text
▶️ Inicie
🔄 Se reinicie si falla
📊 Pueda ser monitoreado
📝 Genere logs
```

Una herramienta conocida para esto es **PM2**.

Conceptualmente:

```text
PM2
 │
 └── Node.js
       │
       └── Express
```

Si el proceso falla:

```text
Express
   ↓
❌ Crash
   ↓
Process Manager
   ↓
🔄 Restart
```

## 7️⃣ 🐳 DOCKER

**Docker** permite empaquetar una aplicación junto con su entorno de ejecución dentro de un **container**.

Conceptualmente:

```text
Docker Container
┌─────────────────────┐
│ Node.js             │
│ Express             │
│ Application         │
└─────────────────────┘
```

El flujo sería:

```text
Application
    ↓
Dockerfile
    ↓
Docker Image
    ↓
Container
    ↓
Express
```

### 🧠 ¿Por qué es útil?

Ayuda a conseguir entornos más consistentes:

```text
Development
      ≈
Production
```

También facilita el despliegue y la distribución de aplicaciones.

## 8️⃣ 🔄 CI/CD

**CI/CD** automatiza procesos relacionados con integración, testing y deployment.

### CI — Continuous Integration

Cada cambio puede ejecutar automáticamente:

```text
Push
 ↓
Install dependencies
 ↓
Lint
 ↓
Tests
 ↓
Build
```

### CD — Continuous Delivery / Deployment

Después de pasar las validaciones:

```text
Tests
  ↓
Build
  ↓
Deploy
  ↓
Production
```

Conceptualmente:

```text
Developer
   ↓
Git Push
   ↓
CI/CD
   ↓
Tests
   ↓
Build
   ↓
Deployment
```

## 9️⃣ 📝 LOGS IN PRODUCTION

Los logs permiten saber qué está ocurriendo en producción.

Por ejemplo:

```text
GET /users       200 45ms
POST /users      201 80ms
GET /users/999   404 12ms
```

También pueden registrar errores:

```text
ERROR
Database connection failed
```

En producción los logs sirven para:

| Uso                          |   |
| ---------------------------- | - |
| 🐛 Investigar errores        |   |
| 📊 Analizar comportamiento   |   |
| 🔍 Diagnosticar problemas    |   |
| 📈 Monitorizar la aplicación |   |

> La teoría general de logging ya está en `logging.md`; aquí interesa **cómo encaja el logging dentro de producción**.

## 🔟 📈 SCALING

**Scaling** consiste en aumentar la capacidad de una aplicación para soportar más tráfico.

### Vertical Scaling

Aumentamos los recursos de un servidor:

```text
Server
 ↓
Más CPU
Más RAM
Más recursos
```

### Horizontal Scaling

Añadimos más instancias:

```text
             Load Balancer
                  │
        ┌─────────┼─────────┐
        ▼         ▼         ▼
     Express   Express   Express
     Server    Server    Server
```

Esto permite distribuir las requests entre múltiples instancias.

## 1️⃣1️⃣ 🔀 REVERSE PROXY

Un **Reverse Proxy** se coloca delante de nuestra aplicación.

```text
Client
   ↓
Reverse Proxy
   ↓
Express
```

Puede encargarse de tareas como:

* 🌐 Recibir tráfico HTTP/HTTPS.
* 🔀 Redirigir requests.
* ⚖️ Distribuir tráfico.
* 🔒 Terminar TLS/HTTPS.
* 📦 Servir determinados recursos.

Una herramienta muy utilizada para esto es **Nginx**.

Arquitectura:

```text
Internet
   ↓
Nginx
   ↓
Node.js
   ↓
Express
```

## 1️⃣2️⃣ ☁️ CLOUD DEPLOYMENT

El **Cloud Deployment** consiste en desplegar nuestra aplicación utilizando infraestructura en la nube.

Conceptualmente:

```text
Local
  ↓
Git
  ↓
CI/CD
  ↓
Cloud
  ↓
Node.js
  ↓
Express
  ↓
API
```

La infraestructura cloud puede proporcionar:

```text
🖥️ Compute
🗄️ Database
📦 Storage
🌐 Networking
🔐 Security
📊 Monitoring
```

## 🏗️ ARQUITECTURA DE PRODUCCIÓN

Una aplicación Express puede terminar teniendo una arquitectura como:

```text
                    🌐 Internet
                         │
                         ▼
                  🔀 Reverse Proxy
                         │
                         ▼
                  ⚖️ Load Balancer
                         │
             ┌───────────┼───────────┐
             ▼           ▼           ▼
          Node.js     Node.js     Node.js
             │           │           │
             └───────────┼───────────┘
                         ▼
                      Express
                         │
              ┌──────────┼──────────┐
              ▼          ▼          ▼
           Service    Database    External APIs
```

Y Docker puede formar parte de cada instancia:

```text
             ☁️ Cloud
                 │
        ┌────────┼────────┐
        ▼        ▼        ▼
      🐳       🐳       🐳
    Docker    Docker    Docker
        │        │        │
        ▼        ▼        ▼
      Node     Node     Node
        │        │        │
        ▼        ▼        ▼
     Express  Express  Express
```

## 🔄 FLUJO COMPLETO DE DEPLOYMENT

```text
👨‍💻 Developer
      ↓
📦 Git Push
      ↓
🔄 CI/CD
      ↓
🧪 Tests
      ↓
🏗️ Build
      ↓
🐳 Docker Image
      ↓
☁️ Cloud
      ↓
🖥️ Production Server
      ↓
🔀 Reverse Proxy
      ↓
🚀 Express API
      ↓
👥 Users
```

### 🧠 IDEA CLAVE

Piensa en `deployment.md` como la respuesta a:

> **¿Qué ocurre después de terminar mi aplicación Express y cómo hago que esté disponible para usuarios reales?**

```text
💻 Código
   ↓
🧪 Tests
   ↓
🏗️ Build
   ↓
🐳 Packaging
   ↓
☁️ Infrastructure
   ↓
🚀 Deployment
   ↓
📊 Monitoring
   ↓
👥 Users
```
