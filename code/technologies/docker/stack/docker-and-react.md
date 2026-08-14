# 📄 03 - Docker + React

> [!IMPORTANT]
> ⚛️ Aquí estudias cómo **dockerizar una aplicación React**, especialmente usando **Vite**.
>
> Muchos conceptos serán iguales a los que ya viste con Angular, así que el objetivo es **reconocer el patrón y entender qué cambia**.

---

## 📑 Índice

1. ⚛️ [¿Qué significa ejecutar React con Docker?](#-qué-significa-ejecutar-react-con-docker)
2. 🧪 [Development](#-development)

   * 📦 [Node Image](#-node-image)
   * 📂 [Bind Mounts](#-bind-mounts)
   * 🔥 [Hot Reload](#-hot-reload)
   * 🌐 [Port Mapping](#-port-mapping)
3. 🚀 [Production](#-production)

   * 🏗️ [React Build](#-react-build)
   * 🐳 [Multi-Stage Build](#-multi-stage-build)
   * 🌐 [Nginx](#-nginx)
4. 🔀 [SPA Routing](#-spa-routing)
5. 🔗 [React + API](#-react--api)
6. 🆚 [Development vs Production](#-development-vs-production)
7. 🧠 [El patrón que debes reconocer](#-el-patrón-que-debes-reconocer)

   * 🅰️ [Angular](#-angular)
   * ⚛️ [React](#-react)


# ⚛️ ¿Qué significa ejecutar React con Docker?

Docker permite empaquetar el entorno necesario para desarrollar o construir una aplicación React.

```text
React
   ↓
Node.js
   ↓
Docker Image
   ↓
Container
```

Durante **development**, el container ejecuta el servidor de desarrollo de React/Vite.

Durante **production**, React primero se construye y después los archivos estáticos pueden servirse mediante Nginx.

---

# 🧪 DEVELOPMENT

Durante el desarrollo normalmente utilizas **Vite**:

```text
React
   ↓
Vite
   ↓
Docker Container
   ↓
Development Server
```

Por ejemplo:

```text
localhost:5173
       ↓
React/Vite Container
       ↓
Vite Dev Server
```

Vite normalmente utiliza el puerto:

```text
5173
```

Por lo tanto:

```bash
docker run -p 5173:5173 my-react-app
```

| Host             | Container | Servicio |
| ---------------- | --------- | -------- |
| `localhost:5173` | `5173`    | Vite     |

```text
HOST
localhost:5173
      ↓
CONTAINER
port 5173
      ↓
Vite
      ↓
React
```

---

## 📦 Node Image

Para development necesitas un entorno con Node.js:

```dockerfile
FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
```

La idea es:

```text
node:22
   ↓
Node.js
   ↓
npm
   ↓
Vite
   ↓
React
```

> [!TIP]
> 🧠 No necesitas memorizar este Dockerfile todavía. Lo importante es entender **qué papel cumple cada parte**.

---

# 📂 BIND MOUNTS

Durante development normalmente quieres modificar el código en tu máquina y que esos cambios aparezcan inmediatamente dentro del container.

Por eso puedes utilizar un **Bind Mount**:

```text
HOST
React Source Code
       │
       │ Bind Mount
       ▼
CONTAINER
/app
       │
       ▼
Vite
```

Esto permite trabajar con:

```text
Code change
    ↓
Bind Mount
    ↓
Container
    ↓
Vite detects change
    ↓
Hot Reload
```

Por ejemplo:

```bash
docker run \
  -p 5173:5173 \
  -v ${PWD}:/app \
  my-react-app
```

> [!NOTE]
> La sintaxis exacta puede variar dependiendo del sistema operativo y shell que utilices.

---

# 🔥 HOT RELOAD

Una de las ventajas principales durante development es poder modificar el código sin reconstruir manualmente toda la imagen.

```text
Editar React
    ↓
Archivo cambia en Host
    ↓
Bind Mount
    ↓
Archivo cambia en Container
    ↓
Vite detecta cambio
    ↓
Hot Reload
```

Por ejemplo:

```text
src/App.jsx
```

cambia:

```text
Host
  ↓
Container
  ↓
Vite
  ↓
Browser
```

Esto hace que Docker sea mucho más cómodo para desarrollo.

---

# 🌐 PORT MAPPING

Debes diferenciar:

| Concepto           | Significado                 |
| ------------------ | --------------------------- |
| **Host Port**      | Puerto de tu máquina        |
| **Container Port** | Puerto dentro del container |

Por ejemplo:

```bash
docker run -p 5173:5173 my-react-app
```

significa:

```text
localhost:5173
       ↓
Container:5173
       ↓
Vite
```

> [!IMPORTANT]
> El servidor de desarrollo debe poder aceptar conexiones desde fuera del container.
>
> En algunos escenarios necesitas configurar Vite para escuchar en:
>
> ```text
> 0.0.0.0
> ```
>
> en lugar de únicamente:
>
> ```text
> localhost
> ```

Por ejemplo:

```json
{
  "scripts": {
    "dev": "vite --host 0.0.0.0"
  }
}
```

La idea es:

```text
localhost
```

dentro del container significa **el propio container**.

---

# 🚀 PRODUCTION

Aquí cambia completamente el flujo.

En producción **no necesitas Vite ejecutando la aplicación**.

Primero construyes React:

```text
React
   ↓
npm run build
   ↓
dist/
```

Después esos archivos pueden ser servidos por Nginx:

```text
React
   ↓
npm run build
   ↓
dist/
   ↓
Nginx
   ↓
Docker Container
```

Por ejemplo:

```text
Browser
   ↓
Nginx
   ↓
React dist/
```

---

# 🏗️ REACT BUILD

Cuando ejecutas:

```bash
npm run build
```

Vite genera los archivos optimizados de producción.

```text
src/
   ↓
Vite Build
   ↓
dist/
```

El resultado puede contener:

```text
dist/
├── index.html
├── assets/
└── ...
```

Estos archivos ya no necesitan Node.js para ser servidos.

> [!IMPORTANT]
> La diferencia fundamental:
>
> | Development         | Production           |
> | ------------------- | -------------------- |
> | React + Vite + Node | Static Files + Nginx |

---

# 🐳 MULTI-STAGE BUILD

Aquí aparece uno de los usos más importantes de **Multi-Stage Builds**.

Puedes utilizar Node únicamente para construir la aplicación:

```text
BUILD STAGE
─────────────────
Node
npm
Vite
React
Dependencies
     ↓
npm run build
     ↓
dist/
```

Y después utilizar Nginx para la imagen final:

```text
PRODUCTION STAGE
─────────────────
Nginx
dist/
```

Conceptualmente:

```text
             React
                ↓
        ┌───────────────┐
        │  Build Stage  │
        │     Node      │
        │     npm       │
        │     Vite      │
        └───────┬───────┘
                ↓
              dist/
                ↓
        ┌───────────────┐
        │ Production    │
        │    Nginx      │
        └───────┬───────┘
                ↓
          Docker Image
```

Por ejemplo:

```dockerfile
FROM node:22 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build


FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
```

> [!IMPORTANT]
> 🔥 La imagen final **no necesita contener Node, npm ni Vite**.
>
> Solamente necesita:
>
> ```text
> Nginx
> +
> dist/
> ```
>
> Esto conecta directamente con:
>
> `📁 09 - ADVANCED BUILDS`
>
> `└── 01 - Multi-Stage Builds.md`

---

# 🌐 NGINX

Nginx funciona como servidor de archivos estáticos.

```text
Browser
   ↓
Nginx
   ↓
index.html
   ↓
JavaScript
   ↓
CSS
   ↓
React Application
```

Una imagen común para este propósito es:

```text
nginx:alpine
```

El puerto habitual de Nginx es:

```text
80
```

Por lo tanto:

```bash
docker run -p 8080:80 my-react-app
```

| Host             | Container | Servicio |
| ---------------- | --------- | -------- |
| `localhost:8080` | `80`      | Nginx    |

```text
HOST
localhost:8080
       ↓
CONTAINER
port 80
       ↓
Nginx
       ↓
React dist/
```

---

# 🔀 SPA ROUTING

React normalmente utiliza **client-side routing**.

Por ejemplo:

```text
/
```

```text
/users
```

```text
/profile
```

El problema es que Nginx puede interpretar:

```text
/profile
```

como si fuera un archivo físico.

Pero en una SPA realmente quieres:

```text
/profile
   ↓
index.html
   ↓
React Router
   ↓
Profile Component
```

Por eso una aplicación React en producción puede necesitar una configuración de Nginx que redirija las rutas desconocidas hacia:

```text
index.html
```

> [!TIP]
> 🧠 No necesitas estudiar Nginx profundamente todavía; basta con entender **por qué existe esta configuración**.

---

# 🔗 REACT + API

En una aplicación real probablemente tengas:

```text
React
   ↓
HTTP
   ↓
Express API
```

Y si ambos están en Docker:

```text
Docker Network
       │
   ┌───┴────┐
   ▼        ▼
React      API
           │
           ▼
       PostgreSQL
```

Aquí vuelven a aparecer los conceptos que ya estudiaste:

* 🌐 Docker Networking
* 🔗 Service Names
* 🔌 Ports
* ⚙️ Environment Variables
* 🐳 Docker Compose
* 🔀 Reverse Proxy

Por ejemplo:

```text
React
   ↓
http://api:3000
```

puede tener sentido **desde otro container dentro de la misma Docker Network**, pero hay que tener cuidado: el navegador del usuario no está dentro de esa red Docker.

Por eso, en aplicaciones frontend reales, la URL de la API requiere una estrategia adecuada, como:

```text
Browser
   ↓
Nginx
   ↓
API
```

o una URL accesible externamente:

```text
Browser
   ↓
https://api.example.com
   ↓
Express
```

---

# 🆚 DEVELOPMENT vs PRODUCTION

| 🧪 Development     | 🚀 Production     |
| ------------------ | ----------------- |
| Node.js            | Nginx             |
| Vite               | Static files      |
| `npm run dev`      | `npm run build`   |
| Source code        | `dist/`           |
| Bind Mount         | Image             |
| Hot Reload         | Optimización      |
| Dev dependencies   | Solo lo necesario |
| Development server | Web server        |

### 🧪 DEVELOPMENT

```text
React
   ↓
Vite
   ↓
Node
   ↓
Docker
   ↓
Hot Reload
```

### 🚀 PRODUCTION

```text
React
   ↓
npm run build
   ↓
dist/
   ↓
Nginx
   ↓
Docker
```

---

# 🧠 EL PATRÓN QUE DEBES RECONOCER

Lo más importante es que puedas reconocer que **Angular y React siguen prácticamente el mismo patrón de containerización**.

### 🅰️ ANGULAR

```text
Angular
   ↓
Node
   ↓
Build
   ↓
dist/
   ↓
Nginx
```

### ⚛️ REACT

```text
React
   ↓
Node
   ↓
Build
   ↓
dist/
   ↓
Nginx
```

Y para development:

### 🅰️ ANGULAR

```text
Angular
   ↓
ng serve
   ↓
Node
   ↓
Docker
```

### ⚛️ REACT

```text
React
   ↓
Vite
   ↓
Node
   ↓
Docker
```

> [!IMPORTANT]
> 🔥 La diferencia principal no está en Docker.
>
> Está en **las herramientas y comandos propios de cada framework**:
>
> | Framework | Herramienta / comando    |
> | --------- | ------------------------ |
> | Angular   | Angular CLI / `ng serve` |
> | React     | Vite / `npm run dev`     |
>
> Docker simplemente proporciona el **entorno aislado** donde esos procesos se ejecutan.
