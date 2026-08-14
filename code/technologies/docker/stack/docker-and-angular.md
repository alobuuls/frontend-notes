# 📄 02 - Docker + Angular

> [!IMPORTANT]
> 🔥 **MUY IMPORTANTE**
>
> Aquí estudias cómo llevar una aplicación Angular a Docker, diferenciando claramente entre **development** y **production**.
>
> La idea principal es entender que Angular necesita un entorno diferente para desarrollar que para servir la aplicación final.

---

## 📑 Índice — 02 - Docker + Angular

1. 🧩 [Angular dentro de Docker](#-angular-dentro-de-docker)
2. 🧪 [Development](#-development)

   * 📦 [¿Qué necesitas en Development?](#-qué-necesitas-en-development)
   * 🔌 [Port Mapping](#-port-mapping)
   * 🔄 [Hot Reload](#-hot-reload)
3. 🚀 [Production](#-production)

   * 🏗️ [¿Por qué no usar `ng serve` en Production?](#️-por-qué-no-usar-ng-serve-en-production)
   * 🌐 [Nginx](#-nginx)
   * 📦 [Angular + Nginx](#-angular--nginx)
4. 🏗️ [Angular + Multi-Stage Build](#️-angular--multi-stage-build)
5. 🌐 [Puerto de Nginx](#-puerto-de-nginx)
6. 🔀 [Angular + API](#-angular--api)
7. 🔗 [Angular → Express](#-angular--express)
8. 🔀 [Reverse Proxy](#-reverse-proxy)
9. 🧠 [Development vs Production](#-development-vs-production)
10. 🔥 [La idea que debes llevarte](#-la-idea-que-debes-llevarte)


# 🧩 Angular dentro de Docker

Una aplicación Angular necesita principalmente:

```text
Angular Application
       ↓
    Node.js
       ↓
Docker Container
```

Durante el desarrollo, Node.js ejecuta herramientas como Angular CLI.

En producción, normalmente **Angular ya no necesita Node.js para ejecutarse**. El código se compila y el resultado son archivos estáticos que pueden ser servidos por un servidor web como Nginx.

> [!TIP]
> 🧠 **Idea clave:**  
> En development → **Node + Angular CLI**  
> En production → **Nginx + archivos estáticos**

---

# 🧪 Development

Durante el desarrollo normalmente utilizas:

```text
Angular Source Code
       ↓
    ng serve
       ↓
Docker Container
       ↓
Browser
```

Por ejemplo:

```text
Browser
   ↓
localhost:4200
   ↓
Angular Container
   ↓
ng serve
```

Aquí Docker proporciona un entorno donde puedes ejecutar Angular CLI y las dependencias necesarias.

---

## 📦 ¿Qué necesitas en Development?

Normalmente:

| Elemento | Uso |
|---|---|
| Node.js | Runtime |
| Angular CLI | Desarrollo |
| `node_modules` | Dependencias |
| `devDependencies` | Herramientas de desarrollo |
| Código fuente | Aplicación |
| `ng serve` | Development Server |
| Bind Mounts | Sincronizar código |
| Port Mapping | Acceso desde el Host |
| Hot Reload | Detectar cambios |

Por ejemplo:

```text
Host
 │
 │ Bind Mount
 ▼
Angular Container
 │
 ├── Source Code
 ├── node_modules
 └── ng serve
       │
       ▼
     :4200
```

---

# 🔌 Port Mapping

Angular normalmente utiliza el puerto:

```text
4200
```

Si el container escucha en `4200`, puedes publicarlo:

```bash
docker run -p 4200:4200 my-angular
```

Conceptualmente:

```text
HOST
localhost:4200
      │
      ▼
CONTAINER
port 4200
      │
      ▼
  ng serve
```

Esto conecta directamente con lo estudiado en:

```text
📁 05 - NETWORKING
```

---

# 🔄 Hot Reload

Una de las ventajas del entorno de desarrollo es poder modificar el código y ver los cambios inmediatamente.

Conceptualmente:

```text
Host
 │
 │ Bind Mount
 ▼
Container
 │
 └── Angular Source
        ↓
     ng serve
        ↓
   Hot Reload
        ↓
     Browser
```

Por ejemplo:

```text
src/app/app.component.ts
        ↓
     modificas
        ↓
Angular detecta cambio
        ↓
  recompila
        ↓
Browser actualiza
```

> [!TIP]
> ⚡ Por eso los **Bind Mounts** son especialmente útiles durante development.

---

# 🚀 Production

El flujo cambia completamente.

En producción normalmente **no ejecutas `ng serve`**.

En su lugar:

```text
Angular Source Code
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
Source Code
    ↓
Angular Build
    ↓
dist/
    ↓
Nginx
    ↓
Container
    ↓
Browser
```

---

# 🏗️ ¿Por qué no usar `ng serve` en Production?

`ng serve` está pensado principalmente para **desarrollo**.

Durante production quieres:

- Archivos optimizados.
- Menor tamaño.
- Menos dependencias.
- Mejor rendimiento.
- Menor superficie de ataque.
- Un servidor preparado para servir archivos estáticos.

Por eso la aplicación Angular se transforma primero en archivos estáticos:

```text
Angular
   ↓
Build
   ↓
HTML
CSS
JavaScript
Assets
   ↓
dist/
```

Y esos archivos pueden ser servidos por Nginx.

---

# 🌐 Nginx

Nginx puede actuar como servidor web para los archivos generados por Angular.

Conceptualmente:

```text
Browser
   ↓
Nginx
   ↓
Angular dist/
```

Una imagen típica para esto es:

```dockerfile
nginx:alpine
```

La idea es:

```text
Angular
   ↓
npm run build
   ↓
dist/
   ↓
Nginx
   ↓
Production Container
```

---

# 📦 Angular + Nginx

Una imagen de producción puede contener únicamente lo necesario para servir la aplicación:

```text
Nginx
   +
Angular dist/
   ↓
Production Image
```

Ya no necesitas incluir necesariamente:

```text
❌ Angular CLI
❌ npm
❌ TypeScript
❌ devDependencies
❌ source code
```

Esto conecta directamente con:

```text
📁 09 - ADVANCED BUILDS
```

especialmente:

```text
📄 01 - Multi-Stage Builds.md
```

---

# 🏗️ Angular + Multi-Stage Build

Un patrón muy común es:

```text
Build Stage
────────────────────

Node
Angular CLI
Dependencies
Source Code
       ↓
 npm run build
       ↓
     dist/
```

y después:

```text
Production Stage
────────────────────

Nginx
   +
dist/
   ↓
Production Image
```

Conceptualmente:

```text
Angular Source
      ↓
Node Build Stage
      ↓
    dist/
      ↓
Nginx Production Stage
      ↓
Docker Image
      ↓
Container
```

> [!IMPORTANT]
> 🔥 La ventaja es que **las herramientas utilizadas para construir Angular no tienen que formar parte de la imagen final**.

---

# 🌐 Puerto de Nginx

Nginx normalmente sirve la aplicación mediante:

```text
port 80
```

Por ejemplo:

```bash
docker run -p 8080:80 my-angular
```

Entonces:

```text
Browser
localhost:8080
      │
      ▼
Container
port 80
      │
      ▼
Nginx
      │
      ▼
Angular dist/
```

> [!NOTE]
> 🔌 El puerto del Host y el del Container **no tienen que ser iguales**.

---

# 🔀 Angular + API

En una aplicación real probablemente tendrás:

```text
Angular
   ↓
HTTP
   ↓
Express API
   ↓
PostgreSQL
```

Si están dockerizados:

```text
┌─────────────────┐
│ Angular         │
│ Container       │
└────────┬────────┘
         │
         │ HTTP
         ▼
┌─────────────────┐
│ Express         │
│ Container       │
└────────┬────────┘
         │
         │ Docker Network
         ▼
┌─────────────────┐
│ PostgreSQL      │
│ Container       │
└─────────────────┘
```

Aquí aparecen varios conceptos que ya estudiaste:

```text
Docker Networking
        +
Environment Variables
        +
Docker Compose
        +
Service Names
```

---

# 🔗 Angular → Express

Angular necesita conocer la URL de la API.

Por ejemplo:

```text
API_URL=http://localhost:3000
```

durante cierto escenario de desarrollo.

Pero dentro de una arquitectura Dockerizada, **no debes asumir automáticamente que `localhost` significa el mismo lugar desde todos los componentes**.

Recuerda:

```text
localhost
   ↓
el propio entorno/container
```

Por eso la forma correcta de comunicar servicios depende de **desde dónde se realiza la petición** y de cómo esté diseñada la arquitectura.

Por ejemplo:

```text
Angular Browser
      ↓
API pública
      ↓
Express
```

es diferente de:

```text
Angular Container
      ↓
Express Container
```

Este detalle será especialmente importante cuando estudies:

```text
Docker Compose
Reverse Proxy
Environment Configuration
```

---

# 🔀 Reverse Proxy

También debes reconocer el concepto de **reverse proxy**.

Una arquitectura común puede ser:

```text
Browser
   ↓
Nginx
   ├── /        → Angular
   │
   └── /api     → Express
```

Conceptualmente:

```text
                Nginx
                  │
         ┌────────┴────────┐
         ▼                 ▼
      Angular           Express
      dist/                API
```

Esto permite que el navegador pueda comunicarse con un único punto de entrada mientras Nginx decide hacia dónde dirigir cada petición.

> [!NOTE]
> 🧠 No necesitas estudiar todavía Nginx a profundidad. Aquí basta con entender **qué problema resuelve y cómo encaja con Angular + API**.

---

# 🧠 Development vs Production

| Development | Production |
|---|---|
| `ng serve` | `npm run build` |
| Node.js | Nginx |
| Angular CLI | Archivos estáticos |
| Source code | `dist/` |
| Hot Reload | Aplicación compilada |
| Bind Mounts | Imagen optimizada |
| Dev dependencies | Solo lo necesario |
| Mayor comodidad | Menor tamaño y superficie de ataque |

Visualmente:

### 🧪 DEVELOPMENT

```text
Source Code
    ↓
Bind Mount
    ↓
Node + Angular CLI
    ↓
ng serve
    ↓
Browser
```

### 🚀 PRODUCTION

```text
Source Code
    ↓
Node Build Stage
    ↓
npm run build
    ↓
dist/
    ↓
Nginx
    ↓
Production Image
    ↓
Container
    ↓
Browser
```

---

# 🔥 La idea que debes llevarte

Una aplicación Angular **no necesita ejecutarse de la misma manera en development y production**.

En development:

```text
Angular
   ↓
ng serve
   ↓
Hot Reload
```

En production:

```text
Angular
   ↓
Build
   ↓
dist/
   ↓
Nginx
```

Y Docker permite empaquetar ambos entornos de forma reproducible, mientras que **Multi-Stage Builds** permite mantener fuera de la imagen final todas las herramientas que solo fueron necesarias para construir la aplicación.

> [!TIP]
> 🎯 **Regla mental:**
>
> 🧪 **Development** → `Node + Angular CLI + ng serve + Hot Reload`
>
> 🚀 **Production** → `Build + dist/ + Nginx`