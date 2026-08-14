# 📄 04 - Build Context

> [!NOTE]
> El **Build Context** es el conjunto de archivos y directorios que Docker puede utilizar durante un proceso de construcción de una Image.
>
> Es especialmente importante porque determina **qué archivos están disponibles para instrucciones como `COPY` y `ADD`**.

---

## 📑 Índice

- [📄 04 - Build Context](#-04---build-context)
  - [📑 Índice](#-índice)
- [🧠 ¿Qué es Build Context?](#-qué-es-build-context)
- [📂 Ejemplo básico](#-ejemplo-básico)
- [📦 ¿Por qué existe el Build Context?](#-por-qué-existe-el-build-context)
- [📍 El `.` de `docker build`](#-el--de-docker-build)
- [📄 Dockerfile vs Build Context](#-dockerfile-vs-build-context)
- [⚠️ Archivos fuera del Build Context](#️-archivos-fuera-del-build-context)
- [🔐 ¿Por qué Docker hace esto?](#-por-qué-docker-hace-esto)
- [📦 Build Context + `COPY`](#-build-context--copy)
- [📦 Build Context + `.dockerignore`](#-build-context--dockerignore)
- [⚠️ Build Context ≠ Docker Image](#️-build-context--docker-image)
- [🔄 Flujo completo](#-flujo-completo)
- [🧠 Ejemplo práctico](#-ejemplo-práctico)
- [🔥 Conceptos que debes diferenciar](#-conceptos-que-debes-diferenciar)

# 🧠 ¿Qué es Build Context?

Cuando ejecutas:

```bash
docker build -t my-api .
```

ese:

```text
.
```

indica cuál será el **Build Context**.

En este caso, `.` significa:

> "Utiliza el directorio actual como contexto del build."

Conceptualmente:

```text
Project
│
├── Dockerfile
├── package.json
├── src/
├── README.md
└── ...
        ↓
   Build Context
        ↓
   docker build
        ↓
      Image
```

Docker utiliza ese contexto como fuente de archivos durante el proceso de construcción.

---

# 📂 Ejemplo básico

Supongamos este proyecto:

```text
my-project/
├── Dockerfile
├── package.json
├── package-lock.json
├── src/
│   └── app.js
└── README.md
```

Si estás dentro de `my-project` y ejecutas:

```bash
docker build -t my-api .
```

el contexto será:

```text
my-project/
```

Por lo tanto, Docker puede utilizar archivos de ese contexto:

```dockerfile
COPY package.json .
COPY package-lock.json .
COPY src ./src
```

Conceptualmente:

```text
my-project/
     │
     ├── package.json ──────┐
     ├── package-lock.json ─┤
     ├── src/ ──────────────┤
     │                       ↓
     └── Dockerfile      Docker Build
                              ↓
                           Image
```

---

# 📦 ¿Por qué existe el Build Context?

Porque Docker necesita saber **qué archivos tiene permitido utilizar durante el build**.

Por ejemplo:

```dockerfile
COPY package.json .
```

Docker busca `package.json` dentro del Build Context.

También:

```dockerfile
COPY src ./src
```

busca el directorio `src` dentro del contexto.

Por eso puedes pensar en el Build Context como:

> **El conjunto de archivos que Docker tiene disponibles como entrada para construir la Image.**

---

# 📍 El `.` de `docker build`

Cuando escribes:

```bash
docker build .
```

el punto significa:

```text
.
↓
Directorio actual
↓
Build Context
```

Pero no estás obligado a utilizar `.`.

Puedes especificar otro directorio:

```bash
docker build -t my-api ./my-project
```

Aquí:

```text
./my-project
       ↓
Build Context
```

También puedes utilizar un contexto diferente al lugar donde está el Dockerfile.

Por ejemplo:

```bash
docker build -f docker/Dockerfile .
```

Aquí:

```text
-f docker/Dockerfile
        ↓
Indica qué Dockerfile utilizar

.
↓
Indica el Build Context
```

> [!IMPORTANT]
> 🔥 Esto es importante:
>
> **La ubicación del Dockerfile y el Build Context son conceptos diferentes.**

---

# 📄 Dockerfile vs Build Context

No son lo mismo:

| Dockerfile                            | Build Context                         |
| ------------------------------------- | ------------------------------------- |
| Instrucciones para construir la Image | Archivos disponibles durante el build |

Por ejemplo:

```text
my-project/
│
├── docker/
│   └── Dockerfile
│
├── src/
├── package.json
└── package-lock.json
```

Puedes ejecutar:

```bash
docker build -f docker/Dockerfile .
```

y tener:

```text
docker/Dockerfile
       ↓
   Dockerfile
       │
       │
       ▼
       .
       ↓
Build Context
       ↓
my-project/
```

Por lo tanto, el Dockerfile puede estar en una ubicación diferente al Build Context.

---

# ⚠️ Archivos fuera del Build Context

Esta es una de las partes más importantes.

Supongamos:

```text
project/
├── Dockerfile
├── src/
└── package.json

secret.txt
```

Si ejecutas:

```bash
docker build .
```

el contexto es:

```text
project/
```

Por lo tanto, `secret.txt` está fuera del contexto.

Intentar:

```dockerfile
COPY ../secret.txt .
```

no funciona como esperarías.

Conceptualmente:

```text
Build Context
│
├── Dockerfile
├── src/
├── package.json
│
└── ...

❌ secret.txt
   fuera del contexto
```

> [!WARNING]
> ⚠️ Docker no permite que `COPY` simplemente escape del Build Context mediante `../`.

# 🔐 ¿Por qué Docker hace esto?

Principalmente para que el proceso de build tenga un **contexto claramente definido**.

Cuando Docker recibe:

```text
Build Context
      ↓
Docker Build
```

sabe exactamente qué archivos están disponibles como entrada.

> [!IMPORTANT]
> Esto también evita que un Dockerfile pueda acceder arbitrariamente a cualquier archivo de tu computadora.

---

# 📦 Build Context + `COPY`

La relación más importante es:

```text
Build Context
      ↓
   COPY / ADD
      ↓
Docker Image
```

Por ejemplo:

```dockerfile id="g7q3xs"
COPY package.json .
```

significa conceptualmente:

```text
Build Context
    │
    └── package.json
            ↓
          COPY
            ↓
       Docker Image
```

Mientras:

```dockerfile id="3y2f4d"
COPY src ./src
```

significa:

```text
Build Context
    │
    └── src/
         ↓
       COPY
         ↓
   /app/src/
```

---

# 📦 Build Context + `.dockerignore`

El Build Context también está relacionado directamente con `.dockerignore`.

Supongamos:

```text id="3p6x4j"
my-project/
├── Dockerfile
├── package.json
├── src/
├── node_modules/
├── .git/
└── .dockerignore
```

Puedes tener:

```text id="v4u5ip"
node_modules
.git
```

dentro de `.dockerignore`.

Conceptualmente:

```text id="mnywpm"
Project
   ↓
Build Context
   ↓
.dockerignore
   ↓
Excluye determinados archivos
   ↓
Docker Build
```

Por ejemplo:

```text id="s4z5b8"
Build Context
│
├── Dockerfile
├── package.json
├── src/
│
├── ❌ node_modules
└── ❌ .git
```

> [!TIP]
> Esto evita enviar archivos innecesarios al proceso de build.

La configuración detallada de `.dockerignore` se estudiará en:

```text
📄 06 - .dockerignore.md
```

---

# ⚠️ Build Context ≠ Docker Image

No confundas estos conceptos:

```text
Build Context
    ↓
Archivos de entrada
    ↓
docker build
    ↓
Docker Image
    ↓
Resultado
```

El Build Context **no es la Image**.

Por ejemplo:

```text id="2ezd4g"
my-project/
├── Dockerfile
├── package.json
└── src/
```

es parte del contexto.

Después del build puedes obtener:

```text id="c7l6d3"
my-api:1.0
```

que es una **Docker Image**.

---

# 🔄 Flujo completo

Puedes visualizar el proceso así:

```text id="w6u2jy"
Project
   │
   ├── Dockerfile
   ├── package.json
   ├── src/
   └── ...
        │
        ▼
   Build Context
        │
        ▼
   .dockerignore
        │
        ▼
   Docker Build
        │
        ▼
   Dockerfile Instructions
        │
        ▼
   Docker Image
```

---

# 🧠 Ejemplo práctico

Tenemos:

```text id="8z6k9x"
my-api/
├── Dockerfile
├── package.json
├── package-lock.json
├── src/
│   └── server.js
├── node_modules/
└── .dockerignore
```

Dockerfile:

```dockerfile id="3j8d6f"
FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY src ./src

CMD ["npm", "start"]
```

Ejecutamos:

```bash id="w4x7de"
docker build -t my-api:1.0 .
```

Entonces:

```text id="d0h7a2"
.
↓
my-api/
↓
Build Context
↓
.dockerignore
↓
Docker Build
↓
Dockerfile
↓
COPY / RUN / ...
↓
my-api:1.0
```

Y cuando Docker encuentra:

```dockerfile id="m3j8sx"
COPY package*.json ./
```

busca esos archivos dentro del Build Context.

---

# 🔥 Conceptos que debes diferenciar

| Concepto            | Significado                                                |
| ------------------- | ---------------------------------------------------------- |
| **Dockerfile**      | Archivo que contiene las instrucciones del build           |
| **Build Context**   | Archivos disponibles como entrada para el build            |
| **`.`**             | Directorio actual utilizado como contexto                  |
| **`-f`**            | Permite indicar qué Dockerfile utilizar                    |
| **`COPY`**          | Copia archivos desde el Build Context hacia la Image       |
| **`.dockerignore`** | Excluye archivos del Build Context                         |
| **Docker Image**    | Resultado construido a partir del Dockerfile y el contexto |

La relación fundamental es:

```text id="x4r7jp"
Dockerfile
    +
Build Context
    ↓
docker build
    ↓
Docker Image
```

> [!IMPORTANT]
> 🔥 **La regla que más debes recordar:**
>
> **`COPY` puede acceder a archivos del Build Context, pero no puede escapar de él para acceder arbitrariamente a archivos externos.**
