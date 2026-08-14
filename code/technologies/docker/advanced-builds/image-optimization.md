# 📄 03 - Image Optimization

> [!IMPORTANT]
> 🔥 **MUY IMPORTANTE**
>
> La optimización de una Docker Image consiste en evitar incluir cosas innecesarias para conseguir imágenes:
>
> * 🪶 Más pequeñas.
> * ⚡ Más rápidas de construir.
> * 📥 Más rápidas de descargar.
> * 🚀 Más rápidas de desplegar.
> * 🔐 Con una menor superficie de ataque.

La idea general:

```text
Source Code
    ↓
Dockerfile
    ↓
Optimized Build
    ↓
Smaller Image
    ↓
Faster + Cleaner + Safer
```

---

# 📦 Image Size

El tamaño de una Image importa porque una Image grande requiere más recursos para almacenarse, transferirse y desplegarse.

```text
Large Image
     ↓
More Storage
     ↓
More Bandwidth
     ↓
Slower Pull
     ↓
Slower Deployment
```

Por ejemplo, cuando haces:

```bash
docker pull my-api:1.0
```

Docker necesita descargar la Image y sus layers.

Una Image innecesariamente grande significa:

```text
Large Image
    ↓
More data to download
    ↓
Longer pull
```

> [!TIP]
> ⚡ Esto puede ser especialmente importante en CI/CD y deployments frecuentes.

---

# 🪶 Minimal Base Images

Una de las primeras decisiones que afecta el tamaño es la **Base Image**.

Por ejemplo, Node ofrece diferentes variantes:

```text
node
node:22
node:22-slim
node:22-alpine
```

Conceptualmente:

```text
node
   ↓
More complete environment
   ↓
Larger


node:slim
   ↓
Reduced environment
   ↓
Smaller


node:alpine
   ↓
Very minimal environment
   ↓
Smaller
```

> [!WARNING]
> ⚠️ **Una Image más pequeña no significa automáticamente que sea mejor.**

---

# 🏔️ Alpine vs Slim

Es común escuchar:

> "Usa Alpine porque siempre es mejor."

Eso es demasiado simplista.

Una Image minimalista puede tener:

* Menos herramientas disponibles.
* Menos paquetes instalados.
* Diferencias en librerías del sistema.
* Problemas de compatibilidad con determinadas dependencias.
* Necesidad de instalar paquetes adicionales.

Por eso la decisión debe ser:

```text
Small Image
      +
Compatibility
      +
Application Requirements
      ↓
Appropriate Base Image
```

No simplemente:

```text
Alpine = Always Better ❌
```

---

# 📦 Dependencies

Otra fuente importante de tamaño son las dependencias.

Por ejemplo, una aplicación Node puede tener:

```text
dependencies
devDependencies
```

Durante el desarrollo puedes necesitar:

```text
TypeScript
Testing tools
Linters
Angular CLI
Build tools
```

Pero algunas de estas dependencias no son necesarias en producción.

Por eso puedes separar:

```text
Development
    ↓
devDependencies + dependencies
```

de:

```text
Production
    ↓
Production dependencies
```

En aplicaciones que utilizan un build stage, incluso puedes evitar que muchas de estas dependencias lleguen a la Image final.

---

# 🧹 Evitar archivos innecesarios

No todo lo que existe en tu proyecto necesita estar dentro de la Docker Image.

Por ejemplo:

```text
❌ Tests
❌ Documentation
❌ .git
❌ .env
❌ Coverage
❌ Source files innecesarios
❌ node_modules del Host
❌ Build artifacts antiguos
```

Dependiendo del proyecto, estos archivos pueden aumentar el tamaño o incluso introducir riesgos.

La Image final debería contener principalmente:

```text
Runtime
    +
Application
    +
Required Dependencies
```

---

# 🧱 Layers + Cache

La optimización también está relacionada con las **Layers**.

Recuerda:

```text
Dockerfile
    ↓
Instructions
    ↓
Layers
    ↓
Build Cache
```

El orden de las instrucciones puede afectar cuánto trabajo necesita repetir Docker.

Por ejemplo, esto puede ser menos eficiente:

```dockerfile
COPY . .

RUN npm install
```

Porque cualquier cambio dentro del proyecto puede invalidar la cache de esa parte del build.

Una estructura más eficiente:

```dockerfile
COPY package*.json ./

RUN npm install

COPY . .
```

Conceptualmente:

```text
package.json
     ↓
npm install
     ↓
Cached Layer
     ↓
Source Code
```

Si solamente modificas:

```text
src/app.ts
```

Docker puede reutilizar la layer correspondiente a:

```text
npm install
```

y reconstruir solamente las partes posteriores.

> [!TIP]
> 🧠 Separar los archivos que cambian con poca frecuencia de los archivos que cambian constantemente ayuda a aprovechar mejor la Build Cache.

---

# 🚫 `.dockerignore`

`.dockerignore` también es una herramienta de optimización.

Antes de construir:

```text
Project
   ↓
.dockerignore
   ↓
Build Context
   ↓
docker build
```

Puedes excluir:

```text
node_modules
.git
.env
dist
coverage
```

Por ejemplo:

```dockerignore
node_modules
.git
.env
dist
coverage
npm-debug.log
```

Esto evita enviar archivos innecesarios al Build Context.

---

# 📦 `node_modules` del Host

Este caso es especialmente importante en proyectos Node.

Supongamos:

```text
my-api/
├── node_modules/
├── src/
├── package.json
└── Dockerfile
```

Si no tienes:

```text
node_modules
```

en `.dockerignore`, podrías terminar enviando todos los módulos instalados en tu máquina como parte del Build Context.

Eso es generalmente innecesario porque Docker puede instalar las dependencias dentro del build:

```text
package.json
      +
package-lock.json
      ↓
npm install
      ↓
Container dependencies
```

> [!IMPORTANT]
> 📌 Por eso normalmente:
>
> ```dockerignore
> node_modules
> ```
>
> es fundamental en proyectos Node.

---

# 🔐 Optimization + Security

La optimización también tiene un efecto importante sobre la seguridad.

Si reduces los componentes que existen dentro de una Image:

```text
Fewer Packages
      ↓
Fewer Components
      ↓
Smaller Attack Surface
```

Por ejemplo:

```text
❌ Large Image

Node
npm
Compilers
Debugging Tools
Build Tools
Development Dependencies
Extra Packages
```

vs.

```text
✅ Production Image

Runtime
Application
Production Dependencies
```

Una Image con menos software puede tener menos componentes vulnerables que mantener.

> [!WARNING]
> ⚠️ Esto **no significa que una Image pequeña sea automáticamente segura**.
>
> Una Image pequeña todavía puede contener:
>
> * Vulnerabilidades.
> * Dependencias vulnerables.
> * Configuraciones inseguras.
> * Código vulnerable.
>
> La optimización y la seguridad están relacionadas, pero no son lo mismo.

---

# 🏗️ Multi-Stage Builds + Optimization

Los **Multi-Stage Builds** son una de las mejores herramientas para optimizar Images.

```text
BUILD STAGE
│
├── Node
├── npm
├── TypeScript
├── Build Tools
├── Source Code
└── Dependencies
       │
       ↓
     Build
       │
       ↓
    dist/
       │
       ▼
PRODUCTION STAGE
│
├── Nginx
└── dist/
```

La Image final no necesita contener todas las herramientas utilizadas para construir la aplicación.

> [!NOTE]
> 🔗 Esto conecta directamente con:
>
> `📄 01 - Multi-Stage Builds.md`

---

# 🧠 Estrategia general de optimización

Cuando quieras optimizar una Docker Image, piensa en este orden:

```text
1. Base Image
       ↓
2. Dependencies
       ↓
3. Build Stages
       ↓
4. Layers + Cache
       ↓
5. .dockerignore
       ↓
6. Unnecessary Files
       ↓
7. Security
```

Por ejemplo:

```text
Base Image
    ↓
node:22-slim
    ↓
Install only required dependencies
    ↓
Multi-Stage Build
    ↓
Use Build Cache efficiently
    ↓
.dockerignore
    ↓
Remove unnecessary files
    ↓
Smaller Production Image
```

---

# ⚖️ Optimizar no significa hacerla lo más pequeña posible

> [!IMPORTANT]
> 🔥 Este concepto es importante.
>
> El objetivo **no** es:
>
> > "Conseguir la Image con menos MB posibles."
>
> El objetivo es:
>
> > **Conseguir una Image que contenga todo lo necesario para ejecutar correctamente la aplicación y nada innecesario.**

| Situación    | Problema                                                                        |
| ------------ | ------------------------------------------------------------------------------- |
| ❌ Too Large  | Unnecessary components                                                          |
| ❌ Too Small  | Missing dependencies / compatibility problems                                   |
| ✅ Right Size | Required runtime + Required dependencies + Application + Compatible environment |

La optimización siempre debe mantener el equilibrio entre:

```text
Size
 +
Performance
 +
Security
 +
Compatibility
 +
Maintainability
```

---

# 🔄 Flujo completo

Finalmente, puedes conectar todo lo aprendido:

```text
                Dockerfile
                    │
          ┌─────────┴─────────┐
          │                   │
      Base Image         Instructions
          │                   │
          └─────────┬─────────┘
                    ↓
              Build Context
                    ↓
             .dockerignore
                    ↓
               Build Cache
                    ↓
                 Layers
                    ↓
             Multi-Stage Build
                    ↓
             Production Image
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
      Smaller Size        Less Software
          │                   │
          ▼                   ▼
   Faster Deployment    Smaller Attack Surface
```

> [!TIP]
> 🎯 **La idea que debes quedarte es:**
>
> **Una Docker Image optimizada contiene únicamente lo necesario para ejecutar la aplicación, utiliza eficientemente las layers y la cache, evita archivos innecesarios y utiliza una base image adecuada para sus necesidades.**
