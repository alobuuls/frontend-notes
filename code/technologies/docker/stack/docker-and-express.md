# 📄 01 - Docker + Express

> [!IMPORTANT]
> 🔥 **MUY IMPORTANTE**
>
> Aquí conectas todo lo aprendido sobre Docker con una aplicación real de **Express + Node.js**.
>
> La idea es aprender a tomar una API que normalmente ejecutas con:
>
> ```bash
> npm install
> npm start
> ```
>
> y convertirla en una aplicación que pueda ejecutarse dentro de un Docker Container.

---

## 📑 Índice

- [📄 01 - Docker + Express](#-01---docker--express)
  - [📑 Índice](#-índice)
- [🧩 Express dentro de un Container](#-express-dentro-de-un-container)
- [📦 Estructura típica de un proyecto Express](#-estructura-típica-de-un-proyecto-express)
- [📝 Dockerfile para Express](#-dockerfile-para-express)
- [🏗️ `FROM`](#️-from)
- [📂 `WORKDIR`](#-workdir)
- [📦 `COPY`](#-copy)
- [▶️ `npm start`](#️-npm-start)
- [🔌 `EXPOSE`](#-expose)
- [🌐 Express debe escuchar correctamente](#-express-debe-escuchar-correctamente)
- [🌍 Host Port vs Container Port](#-host-port-vs-container-port)
- [🔐 Environment Variables](#-environment-variables)
- [⚠️ No guardar Secrets en la Image](#️-no-guardar-secrets-en-la-image)
- [🧪 Express en Development](#-express-en-development)
- [🚀 Express en Production](#-express-en-production)
- [🆚 Development vs Production](#-development-vs-production)
    - [🧪 DEVELOPMENT](#-development)
    - [🚀 PRODUCTION](#-production)
- [🐘 Express + PostgreSQL](#-express--postgresql)
- [🚨 El problema de `localhost`](#-el-problema-de-localhost)
- [✅ Utilizar el nombre del servicio](#-utilizar-el-nombre-del-servicio)
- [🌐 Puerto interno vs puerto del Host](#-puerto-interno-vs-puerto-del-host)
- [🧩 Arquitectura completa](#-arquitectura-completa)
- [🔄 Flujo completo de una API Express con Docker](#-flujo-completo-de-una-api-express-con-docker)

# 🧩 Express dentro de un Container

Una aplicación Express necesita principalmente:

```text
Express
   ↓
Node.js
   ↓
Operating System
```

Docker permite empaquetar el entorno necesario para ejecutarla:

```text
Express Application
        +
Node.js
        +
Dependencies
        ↓
Docker Image
        ↓
Docker Container
```

Conceptualmente:

```text
Express
   ↓
Node.js
   ↓
Docker Container
```

> [!NOTE]
> 🐳 El container no reemplaza a Express ni a Node.js.
>
> Simplemente proporciona un entorno aislado donde se ejecutan.

---

# 📦 Estructura típica de un proyecto Express

Por ejemplo:

```text
my-api/
│
├── src/
│   └── server.js
│
├── package.json
├── package-lock.json
├── Dockerfile
└── .dockerignore
```

Un `package.json` podría contener:

```json
{
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js"
  }
}
```

La aplicación podría ser:

```javascript
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello Docker!' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`API running on port ${PORT}`);
});
```

---

# 📝 Dockerfile para Express

Un Dockerfile básico podría ser:

```dockerfile
FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

El flujo es:

```text
Dockerfile
    ↓
Node Image
    ↓
Install Dependencies
    ↓
Express Application
    ↓
Docker Image
    ↓
Container
```

---

# 🏗️ `FROM`

La aplicación necesita Node.js para ejecutarse.

Por eso utilizamos una Node Image como base:

```dockerfile
FROM node:22
```

Conceptualmente:

```text
node:22
   ↓
Node.js Runtime
   ↓
Express Application
```

La Base Image proporciona el runtime necesario para ejecutar la aplicación.

---

# 📂 `WORKDIR`

Definimos el directorio donde trabajará nuestra aplicación:

```dockerfile
WORKDIR /app
```

Entonces:

```text
Container
│
└── /app
     ├── package.json
     ├── src/
     └── ...
```

Esto evita tener que utilizar rutas absolutas constantemente.

---

# 📦 `COPY`

Primero copiamos los archivos de dependencias:

```dockerfile
COPY package*.json ./
```

Después instalamos:

```dockerfile
RUN npm install
```

Y finalmente copiamos el código:

```dockerfile
COPY . .
```

Esta estructura también aprovecha mejor la Build Cache:

```text
package.json
package-lock.json
       ↓
   npm install
       ↓
     Cache
       ↓
   Source Code
```

> [!TIP]
> ⚡ Si solamente cambia el código de Express, Docker puede reutilizar la layer de instalación de dependencias.

---

# ▶️ `npm start`

La aplicación necesita un proceso principal.

Por ejemplo:

```json
{
  "scripts": {
    "start": "node src/server.js"
  }
}
```

Entonces:

```dockerfile
CMD ["npm", "start"]
```

Cuando se ejecuta el container:

```text
Container
   ↓
npm start
   ↓
node src/server.js
   ↓
Express
```

El proceso principal de la aplicación mantiene el container ejecutándose.

---

# 🔌 `EXPOSE`

Podemos documentar el puerto que utiliza Express:

```dockerfile
EXPOSE 3000
```

Pero recuerda:

> [!WARNING]
> ⚠️ `EXPOSE` **no publica el puerto en tu máquina.**

Para acceder desde el host necesitas hacer un port mapping:

```bash
docker run -p 3000:3000 my-api
```

Entonces:

```text
HOST
localhost:3000
      │
      ▼
CONTAINER
port 3000
      │
      ▼
Express
```

---

# 🌐 Express debe escuchar correctamente

Este detalle es **muy importante cuando trabajas con Docker**.

Dentro del container, Express debería escuchar en:

```text
0.0.0.0
```

Por ejemplo:

```javascript
app.listen(PORT, '0.0.0.0');
```

¿Por qué?

Porque:

```text
127.0.0.1
```

hace referencia al loopback del propio container.

En cambio:

```text
0.0.0.0
```

permite que el proceso escuche en las interfaces disponibles del container.

Conceptualmente:

```text
Express
   ↓
0.0.0.0:3000
   ↓
Container Network
   ↓
Port Mapping
   ↓
Host
```

---

# 🌍 Host Port vs Container Port

Supongamos:

```bash
docker run -p 8080:3000 my-api
```

Tenemos:

```text
HOST
localhost:8080
      │
      │ Port Mapping
      ▼
CONTAINER
:3000
      │
      ▼
Express
```

| Puerto | Pertenece a |
| ------ | ----------- |
| `8080` | Host        |
| `3000` | Container   |

Por eso también podrías utilizar:

```bash
docker run -p 3000:3000 my-api
```

o:

```bash
docker run -p 8080:3000 my-api
```

La aplicación sigue escuchando en:

```text
Container :3000
```

---

# 🔐 Environment Variables

Una API Express normalmente necesita configuración externa.

Por ejemplo:

```text
PORT
NODE_ENV
DATABASE_URL
JWT_SECRET
```

Dentro del container podrían existir:

```text
Container
│
├── NODE_ENV=production
├── PORT=3000
├── DATABASE_URL=...
└── JWT_SECRET=...
```

En Node puedes acceder a ellas mediante:

```javascript
process.env.PORT
process.env.NODE_ENV
process.env.DATABASE_URL
```

Por ejemplo:

```javascript
const PORT = process.env.PORT || 3000;
```

---

# ⚠️ No guardar Secrets en la Image

Evita hacer esto:

```dockerfile
ENV JWT_SECRET=my-secret-123
```

si contiene un secreto real.

Porque estás colocando información sensible dentro de la configuración de la Image.

Es mejor proporcionar la configuración durante el runtime:

```text
Runtime
   ↓
Environment Variables
   ↓
Container
   ↓
Express
```

Por ejemplo:

```bash
docker run \
  -e PORT=3000 \
  -e NODE_ENV=production \
  my-api
```

> [!NOTE]
> 🔐 Para secrets reales, posteriormente estudiarás mecanismos especializados de secret management.

---

# 🧪 Express en Development

Durante desarrollo normalmente quieres:

* Hot Reload.
* Source Code accesible.
* `nodemon`.
* Development dependencies.
* Debugging.

El flujo puede ser:

```text
Source Code
     ↓
Bind Mount
     ↓
Express Container
     ↓
nodemon
     ↓
Hot Reload
```

Por ejemplo:

```bash
npm run dev
```

donde:

```json
{
  "scripts": {
    "dev": "nodemon src/server.js"
  }
}
```

La idea es que puedas modificar:

```text
src/server.js
```

en tu máquina y que `nodemon` detecte el cambio dentro del container.

---

# 🚀 Express en Production

En producción normalmente no necesitas `nodemon`.

El flujo es más sencillo:

```text
Express
   ↓
Production Dependencies
   ↓
npm start
   ↓
Container
```

Por ejemplo:

```json
{
  "scripts": {
    "dev": "nodemon src/server.js",
    "start": "node src/server.js"
  }
}
```

| 🧪 Development           | 🚀 Production           |
| ------------------------ | ----------------------- |
| `npm run dev`            | `npm start`             |
| `nodemon`                | Node                    |
| Hot Reload               | Runtime estable         |
| Development dependencies | Production dependencies |

La diferencia no es simplemente el comando.

En producción también puedes utilizar:

* Una Image más pequeña.
* Solo production dependencies.
* Multi-Stage Builds.
* Configuración de producción.
* Usuario non-root.
* Base Image adecuada.
* Menos herramientas innecesarias.

---

# 🆚 Development vs Production

### 🧪 DEVELOPMENT

```text
Source Code
     ↓
Bind Mount
     ↓
Express Container
     ↓
nodemon
     ↓
Hot Reload
```

### 🚀 PRODUCTION

```text
Source Code
     ↓
Docker Build
     ↓
Production Image
     ↓
Express Container
     ↓
npm start
```

---

# 🐘 Express + PostgreSQL

Aquí empiezas a utilizar Docker Networking en una arquitectura real.

Supongamos que tienes:

```text
Docker Network
│
├── api
│
└── postgres
```

Entonces:

```text
Express Container
       │
       │ Docker Network
       ▼
PostgreSQL Container
```

La API necesita conectarse a PostgreSQL.

---

# 🚨 El problema de `localhost`

Si PostgreSQL está en otro container:

```text
api
postgres
```

esto normalmente está mal:

```text
DATABASE_HOST=localhost
```

Porque dentro del container de Express:

```text
localhost
   ↓
Express Container
```

No significa:

```text
PostgreSQL Container ❌
```

---

# ✅ Utilizar el nombre del servicio

Si PostgreSQL se llama:

```text
postgres
```

puedes utilizar:

```text
DATABASE_HOST=postgres
DATABASE_PORT=5432
```

Entonces:

```text
Express
   ↓
postgres:5432
   ↓
Docker DNS
   ↓
PostgreSQL Container
```

Docker puede resolver:

```text
postgres
```

a la IP correspondiente dentro de la Docker Network.

> [!TIP]
> 🌐 Dentro de una Docker Network, los containers pueden comunicarse utilizando el nombre del servicio/container en lugar de depender de una IP.

---

# 🌐 Puerto interno vs puerto del Host

Esta diferencia es **MUY importante**.

Supongamos:

```text
PostgreSQL Container
        │
        └── :5432
```

La API, al estar en la misma Docker Network, utiliza:

```text
postgres:5432
```

No necesitas que PostgreSQL esté publicado en tu máquina para que Express pueda acceder a él.

Por otro lado, si quieres conectarte desde tu computadora:

```text
localhost:5432
```

entonces necesitas publicar el puerto:

```bash
-p 5432:5432
```

Conceptualmente:

```text
                  Docker Network

Express ────────────────► PostgreSQL
          postgres:5432


                  Docker Host

localhost:5432 ─────────► PostgreSQL:5432
       │
       └── Solo si publicaste el puerto
```

---

# 🧩 Arquitectura completa

Finalmente, puedes visualizar una API Express dockerizada así:

```text
                         Docker Host
                              │
                 ┌────────────┴────────────┐
                 │                         │
                 ▼                         ▼
          Express Container       PostgreSQL Container
                 │                         │
                 │                         │
                 └──── Docker Network ─────┘
                              │
                              ▼
                       Docker DNS
                              │
                              ▼
                           postgres
```

Y desde el navegador:

```text
Browser
   ↓
localhost:3000
   ↓
Port Mapping
   ↓
Express Container :3000
   ↓
Express
   ↓
postgres:5432
   ↓
PostgreSQL Container
```

---

# 🔄 Flujo completo de una API Express con Docker

```text
Dockerfile
     ↓
docker build
     ↓
Express Image
     ↓
docker run
     ↓
Express Container
     │
     ├── Environment Variables
     │
     ├── Port Mapping
     │
     └── Docker Network
              │
              ▼
         PostgreSQL
```

La arquitectura que debes visualizar es:

```text
                    Docker
                      │
          ┌───────────┴───────────┐
          ▼                       ▼
     Express API             PostgreSQL
     Container                Container
          │                       │
          └──── Docker Network ───┘
                     │
                     ▼
                  postgres
```

> [!IMPORTANT]
> 🎯 **Las dos reglas que más debes recordar son:**
>
> **Desde tu máquina →** `localhost:HOST_PORT`
>
> **Desde un container hacia otro container →** `service-name:CONTAINER_PORT`

Por ejemplo:

```text
Browser
   ↓
localhost:3000
   ↓
Express


Express
   ↓
postgres:5432
   ↓
PostgreSQL
```
