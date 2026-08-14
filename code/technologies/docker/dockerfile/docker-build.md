# 📄 03 - Docker Build

> [!NOTE]
> Aquí estudias **cómo Docker transforma un Dockerfile en una Docker Image**.
>
> La idea principal es entender qué ocurre cuando ejecutas `docker build`, qué información utiliza Docker y cómo se construye finalmente la Image.

---

## 📑 Índice

- [📄 03 - Docker Build](#-03---docker-build)
  - [📑 Índice](#-índice)
- [🏗️ ¿Qué es `docker build`?](#️-qué-es-docker-build)
- [📄 Dockerfile + Build Context](#-dockerfile--build-context)
- [🔍 ¿Por qué existe el Build Context?](#-por-qué-existe-el-build-context)
- [🚀 Estructura de `docker build`](#-estructura-de-docker-build)
- [🏷️ `-t`](#️--t)
- [🔢 Repository + Tag](#-repository--tag)
- [🔨 Build Process](#-build-process)
- [🧱 Build y Layers](#-build-y-layers)
- [📊 Build Output](#-build-output)
- [❌ Errores durante el Build](#-errores-durante-el-build)
- [🔧 `--build-arg`](#---build-arg)
- [🧹 `--no-cache`](#---no-cache)
- [🆚 `docker build` normal vs `--no-cache`](#-docker-build-normal-vs---no-cache)
- [🧪 Ejemplo completo](#-ejemplo-completo)
- [🧠 Build Context y `.dockerignore`](#-build-context-y-dockerignore)
- [🔄 Flujo completo](#-flujo-completo)
- [📌 Comandos principales de este tema](#-comandos-principales-de-este-tema)
    - [🔥 La idea central](#-la-idea-central)

# 🏗️ ¿Qué es `docker build`?

`docker build` es el comando utilizado para **construir una Docker Image a partir de un Dockerfile y un Build Context**.

El flujo general es:

```text
Dockerfile
    +
Build Context
    ↓
docker build
    ↓
Build Process
    ↓
Docker Image
```

Por ejemplo:

```bash
docker build -t my-api:1.0 .
```

Docker lee las instrucciones del Dockerfile, procesa los archivos disponibles en el Build Context y genera una nueva Image.

---

# 📄 Dockerfile + Build Context

Para construir una Image necesitas principalmente:

| Elemento             | Función                                          |
| -------------------- | ------------------------------------------------ |
| 📄 **Dockerfile**    | Contiene las instrucciones del build             |
| 📁 **Build Context** | Archivos y directorios disponibles para el build |

Por ejemplo:

```text
my-api/
├── Dockerfile
├── package.json
├── package-lock.json
├── src/
└── README.md
```

Si ejecutas:

```bash
docker build -t my-api .
```

el:

```text
.
```

indica que el directorio actual será el **Build Context**.

Conceptualmente:

```text
my-api/
     ↓
Build Context
     ↓
Docker Build
```

---

# 🔍 ¿Por qué existe el Build Context?

Porque instrucciones como:

```dockerfile
COPY . .
```

necesitan saber **de dónde pueden obtener los archivos**.

Por ejemplo:

```dockerfile
COPY package.json .
```

Docker busca `package.json` dentro del Build Context.

> [!WARNING]
> ⚠️ Una instrucción `COPY` no puede copiar arbitrariamente cualquier archivo de tu computadora.
>
> Solo puede acceder a archivos disponibles dentro del Build Context, respetando además las exclusiones configuradas mediante `.dockerignore`.

---

# 🚀 Estructura de `docker build`

Observa:

```bash
docker build -t my-api:1.0 .
```

Cada parte tiene una función:

| Parte          | Función             |
| -------------- | ------------------- |
| `docker build` | Construir una Image |
| `-t`           | Asignar nombre/tag  |
| `my-api:1.0`   | Repository + Tag    |
| `.`            | Build Context       |

---

# 🏷️ `-t`

La opción `-t` permite asignar un **nombre y tag** a la Image.

Por ejemplo:

```bash
docker build -t my-api:1.0 .
```

produce una Image identificada como:

```text
my-api:1.0
```

También puedes utilizar:

```bash
docker build -t my-api .
```

En ese caso Docker utiliza el tag:

```text
latest
```

por defecto si no especificas otro.

Por lo tanto:

```bash
docker build -t my-api .
```

es equivalente conceptualmente a:

```text
my-api:latest
```

---

# 🔢 Repository + Tag

Una referencia típica de Image tiene esta estructura:

```text
repository:tag
```

Por ejemplo:

```text
my-api:1.0
my-api:2.0
my-api:latest
```

El repository identifica la Image y el tag permite distinguir diferentes versiones o variantes.

Esto conecta directamente con el tema anterior:

```text
📄 04 - Image Tags.md
```

---

# 🔨 Build Process

Cuando ejecutas:

```bash
docker build -t my-api:1.0 .
```

Docker procesa el Dockerfile siguiendo sus instrucciones.

Por ejemplo:

```dockerfile
FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]
```

Conceptualmente:

```text
Dockerfile
    ↓
FROM
    ↓
WORKDIR
    ↓
COPY
    ↓
RUN
    ↓
COPY
    ↓
CMD
    ↓
Docker Image
```

> [!NOTE]
> Las instrucciones se procesan en orden.

---

# 🧱 Build y Layers

Muchas instrucciones del Dockerfile participan en la construcción de las **layers** de la Image.

Por ejemplo:

```text
Dockerfile
    ↓
FROM
    ↓
Layer
    ↓
COPY
    ↓
Layer
    ↓
RUN
    ↓
Layer
    ↓
COPY
    ↓
Layer
    ↓
Image
```

Esto permite que Docker pueda reutilizar partes de builds anteriores cuando sea posible.

El funcionamiento detallado de las layers, cache e invalidación lo estudiarás en:

```text
📄 05 - Layers & Cache.md
```

> [!TIP]
> 💡 Aquí solamente necesitas entender que **el build no es simplemente ejecutar todo desde cero cada vez**.

# 📊 Build Output

Cuando ejecutas:

```bash
docker build -t my-api:1.0 .
```

Docker muestra información del proceso de construcción.

Por ejemplo, puedes encontrar mensajes relacionados con:

```text
[1/5] FROM node:22
[2/5] WORKDIR /app
[3/5] COPY package*.json ./
[4/5] RUN npm install
[5/5] COPY . .
```

El output te permite saber **qué está haciendo Docker en cada etapa del build**.

> [!IMPORTANT]
> También es fundamental cuando ocurre un error.

---

# ❌ Errores durante el Build

Si una instrucción falla:

```dockerfile
RUN npm install
```

el build puede detenerse.

Conceptualmente:

```text
Dockerfile
    ↓
FROM        ✅
WORKDIR     ✅
COPY        ✅
RUN         ❌
    ↓
Build failed
```

El output normalmente indica:

* qué instrucción estaba ejecutándose
* qué comando falló
* cuál fue el error
* en qué etapa ocurrió

> [!TIP]
> 💡 Por eso, cuando un build falla, debes buscar **la primera instrucción que aparece como fallida**.

---

# 🔧 `--build-arg`

Permite proporcionar valores para instrucciones `ARG` durante el build.

Por ejemplo, Dockerfile:

```dockerfile
ARG NODE_VERSION=22

FROM node:${NODE_VERSION}
```

Puedes construirlo utilizando otro valor:

```bash
docker build \
  --build-arg NODE_VERSION=20 \
  -t my-api:1.0 .
```

Conceptualmente:

```text
--build-arg
      ↓
ARG
      ↓
Docker Build
```

Esto conecta directamente con:

```dockerfile
ARG NODE_VERSION=22
```

que estudiaste en **Dockerfile Instructions**.

---

# 🧹 `--no-cache`

Normalmente Docker intenta reutilizar el **build cache** cuando es posible.

Puedes desactivarlo utilizando:

```bash
docker build --no-cache -t my-api .
```

Conceptualmente:

```text
Normal Build
    ↓
Puede reutilizar cache
```

vs.

```text
--no-cache
    ↓
No utilizar cache existente
    ↓
Construcción desde cero
```

Esto puede ser útil cuando quieres comprobar que una construcción realmente se ejecuta nuevamente sin reutilizar las capas almacenadas.

> [!WARNING]
> ⚠️ No significa que `--no-cache` elimine las Images anteriores. Solamente afecta al proceso de construcción actual.

---

# 🆚 `docker build` normal vs `--no-cache`

| Build normal                                     | Build con `--no-cache`                    |
| ------------------------------------------------ | ----------------------------------------- |
| `docker build -t my-api .`                       | `docker build --no-cache -t my-api .`     |
| Puede reutilizar cache                           | Ignora cache existente                    |
| Construye utilizando el cache cuando corresponde | Construye sin utilizar el cache existente |

Conceptualmente:

```text
Dockerfile
    ↓
Build
    ↓
Utiliza cache cuando corresponde
    ↓
Image
```

Mientras:

```text
Dockerfile
    ↓
Build
    ↓
Ignora cache existente
    ↓
Image
```

---

# 🧪 Ejemplo completo

Supongamos este proyecto:

```text
my-api/
├── Dockerfile
├── package.json
├── package-lock.json
└── src/
    └── server.js
```

Dockerfile:

```dockerfile
FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

Construyes la Image:

```bash
docker build -t my-api:1.0 .
```

El flujo es:

```text
Project
    ↓
Dockerfile + Build Context
    ↓
docker build
    ↓
FROM node:22
    ↓
WORKDIR /app
    ↓
COPY package*.json
    ↓
RUN npm install
    ↓
COPY .
    ↓
EXPOSE
    ↓
CMD
    ↓
my-api:1.0
```

Después puedes utilizar esa Image para crear un Container:

```bash
docker run --name my-api-container my-api:1.0
```

Y queda:

```text
Dockerfile
    ↓
docker build
    ↓
Docker Image
    ↓
docker run
    ↓
Container
```

---

# 🧠 Build Context y `.dockerignore`

Cuando haces un build, no siempre quieres enviar todos los archivos del proyecto como contexto.

Por ejemplo, un proyecto Node podría contener:

```text
node_modules/
.git/
.env
dist/
coverage/
```

Muchos de estos archivos no deberían formar parte del Build Context.

Para excluir archivos puedes utilizar:

```text
.dockerignore
```

Por ejemplo:

```text
node_modules
.git
.env
coverage
```

Entonces:

```text
Project
   │
   ├── Dockerfile
   ├── src/
   ├── package.json
   │
   └── .dockerignore
          ↓
     excluye archivos
          ↓
     Build Context
          ↓
     docker build
```

> [!TIP]
> Esto ayuda a reducir el tamaño del contexto y evita enviar archivos innecesarios al proceso de build.

---

# 🔄 Flujo completo

Ahora puedes visualizar todo el proceso:

```text
Developer
    ↓
Dockerfile
    +
Build Context
    ↓
docker build
    ↓
Build Process
    ↓
Instructions
    ↓
Layers / Cache
    ↓
Docker Image
    ↓
Image Tag
    ↓
my-api:1.0
```

Y posteriormente:

```text
Docker Image
    ↓
docker run
    ↓
Container
```

---

# 📌 Comandos principales de este tema

| Comando                                           | Para qué sirve                                   |
| ------------------------------------------------- | ------------------------------------------------ |
| `docker build -t my-api .`                        | Construye una Image y le asigna un nombre        |
| `docker build -t my-api:1.0 .`                    | Construye una Image con un tag específico        |
| `docker build --no-cache -t my-api .`             | Construye ignorando el cache                     |
| `docker build --build-arg NAME=value -t my-api .` | Proporciona un valor a un `ARG` durante el build |
| `docker build --help`                             | Consulta las opciones disponibles                |

### 🔥 La idea central

```text
Dockerfile
      +
Build Context
      ↓
 docker build
      ↓
 Docker Image
      ↓
 repository:tag
```

> [!IMPORTANT]
> Y recuerda la diferencia:
>
> ```text
> docker build
>     ↓
> Construye una Image
> ```
>
> mientras:
>
> ```text
> docker run
>     ↓
> Crea y ejecuta un Container desde una Image
> ```
