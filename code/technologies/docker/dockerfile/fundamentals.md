# 📄 01 - Dockerfile

> [!NOTE]
> 🐳 Un **Dockerfile** es uno de los elementos fundamentales de Docker porque permite definir **cómo debe construirse una Docker Image**.
>
> En lugar de crear una image manualmente paso a paso, describes en un archivo qué necesita tu aplicación y Docker utiliza esas instrucciones para construirla.

---

## 📑 Índice

- [📄 01 - Dockerfile](#-01---dockerfile)
  - [📑 Índice](#-índice)
- [🧠 1. ¿Qué es un Dockerfile?](#-1-qué-es-un-dockerfile)
- [🏗️ 2. ¿Para qué sirve?](#️-2-para-qué-sirve)
- [🆚 3. Dockerfile vs Docker Image vs Container](#-3-dockerfile-vs-docker-image-vs-container)
    - [📄 Dockerfile](#-dockerfile)
    - [📦 Docker Image](#-docker-image)
    - [🚀 Docker Container](#-docker-container)
- [🔨 4. Proceso de construcción](#-4-proceso-de-construcción)
- [📄 5. Estructura básica de un Dockerfile](#-5-estructura-básica-de-un-dockerfile)
- [📁 6. ¿Dónde debe estar el Dockerfile?](#-6-dónde-debe-estar-el-dockerfile)
- [📝 7. El nombre del archivo](#-7-el-nombre-del-archivo)
- [🛠️ 8. Development vs Production](#️-8-development-vs-production)
- [🔄 9. Dockerfile → Image → Container](#-9-dockerfile--image--container)

# 🧠 1. ¿Qué es un Dockerfile?

> [!IMPORTANT]
> **Un Dockerfile es un archivo de texto que contiene instrucciones para construir una Docker Image.**

```text
Dockerfile
    ↓
Instrucciones
    ↓
docker build
    ↓
Docker Image
```

El Dockerfile funciona como una especie de **receta** para construir una image.

Por ejemplo, puedes indicarle:

| Puede definir                                 |
| --------------------------------------------- |
| Qué image base utilizar.                      |
| Dónde colocar la aplicación.                  |
| Qué archivos copiar.                          |
| Qué dependencias instalar.                    |
| Qué puerto documentar.                        |
| Qué comando ejecutar al iniciar el container. |

---

# 🏗️ 2. ¿Para qué sirve?

El principal objetivo es poder **reproducir la construcción de una Image de forma consistente**.

Sin Dockerfile podrías tener que realizar manualmente procesos como:

```text
Instalar Node
    ↓
Instalar dependencias
    ↓
Copiar aplicación
    ↓
Configurar entorno
    ↓
Configurar comando de inicio
```

Con un Dockerfile puedes describir ese proceso:

```text
Dockerfile
    ↓
docker build
    ↓
Image
```

Así puedes reconstruir la misma aplicación en diferentes entornos.

> 💡 **Idea clave:** el Dockerfile permite describir el proceso de construcción de forma reproducible y consistente.

---

# 🆚 3. Dockerfile vs Docker Image vs Container

Estos tres conceptos suelen confundirse.

| Elemento                | Qué es                                                     |
| ----------------------- | ---------------------------------------------------------- |
| 📄 **Dockerfile**       | El **conjunto de instrucciones** para construir una image. |
| 📦 **Docker Image**     | El **resultado construido** a partir del Dockerfile.       |
| 🚀 **Docker Container** | Una **instancia ejecutable de una image**.                 |

### 📄 Dockerfile

```text
Dockerfile
    ↓
Instructions
```

### 📦 Docker Image

```text
Dockerfile
    ↓
docker build
    ↓
Image
```

### 🚀 Docker Container

```text
Image
    ↓
docker run
    ↓
Container
```

Por lo tanto:

```text
Dockerfile
    ↓
docker build
    ↓
Docker Image
    ↓
docker run
    ↓
Docker Container
```

> 🧠 **Una forma sencilla de recordarlo:**
>
> 📄 **Dockerfile = instrucciones**
> 📦 **Image = resultado construido**
> 🚀 **Container = instancia ejecutándose**

---

# 🔨 4. Proceso de construcción

Cuando ejecutas:

```bash
docker build -t my-app:1.0 .
```

Docker utiliza el Dockerfile del contexto indicado para construir una image.

Conceptualmente:

```text
Dockerfile
     +
Application Files
     +
Build Context
       ↓
   docker build
       ↓
   Docker Image
```

Después puedes crear un container:

```text
Docker Image
     ↓
docker run
     ↓
Docker Container
```

---

# 📄 5. Estructura básica de un Dockerfile

Un Dockerfile puede verse así:

```dockerfile
FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

Estas instrucciones describen, de manera general:

| Instrucción | Función                   |
| ----------- | ------------------------- |
| `FROM`      | Image base                |
| `WORKDIR`   | Directorio de trabajo     |
| `COPY`      | Archivos de la aplicación |
| `RUN`       | Comandos durante el build |
| `EXPOSE`    | Puerto documentado        |
| `CMD`       | Comando de inicio         |

> [!TIP]
> ⚠️ **No necesitas memorizar todavía qué hace exactamente cada instrucción.**
>
> Eso lo estudiarás en:
>
> ```text
> 📄 02 - Dockerfile Instructions.md
> ```
>
> Aquí lo importante es reconocer que todas esas instrucciones forman parte de la receta que Docker utiliza para construir la image.

---

# 📁 6. ¿Dónde debe estar el Dockerfile?

Normalmente colocas el Dockerfile dentro del proyecto:

```text
my-app/
├── Dockerfile
├── package.json
├── package-lock.json
├── src/
└── ...
```

Después puedes ejecutar:

```bash
docker build -t my-app .
```

El `.` indica el **build context**, es decir, el directorio que Docker utilizará como contexto para la construcción.

---

# 📝 7. El nombre del archivo

Por convención, el archivo se llama:

```text
Dockerfile
```

Sin extensión:

```text
❌ Dockerfile.txt
❌ Dockerfile.js
❌ Dockerfile.md

✅ Dockerfile
```

También puedes tener diferentes Dockerfiles cuando un proyecto necesita diferentes configuraciones.

Por ejemplo:

```text
my-app/
├── Dockerfile
├── Dockerfile.dev
├── Dockerfile.prod
└── ...
```

Esto permite definir diferentes procesos de construcción.

---

# 🛠️ 8. Development vs Production

Una aplicación puede necesitar diferentes configuraciones dependiendo del entorno.

Por ejemplo:

```text
Development
    ↓
Dockerfile.dev
    ↓
Herramientas de desarrollo
Hot Reload
Debugging
```

Mientras que:

```text
Production
    ↓
Dockerfile.prod
    ↓
Build optimizado
Solo dependencias necesarias
```

No significa que siempre necesites varios Dockerfiles. Depende de la arquitectura del proyecto.

> 💡 La idea importante es:
>
> **El Dockerfile describe cómo quieres construir el entorno de tu aplicación para un determinado propósito.**

---

# 🔄 9. Dockerfile → Image → Container

Este es el flujo que debes tener completamente claro:

```text
             DOCKERFILE
                  │
                  │ docker build
                  ▼
            DOCKER IMAGE
                  │
                  │ docker run
                  ▼
             CONTAINER
```

Por ejemplo:

```text
Dockerfile
    ↓
FROM node:22
COPY application
RUN npm install
CMD npm start
    ↓
docker build
    ↓
my-api:1.0
    ↓
docker run
    ↓
my-api-container
```

El **Dockerfile no es el container** y tampoco es la image.

Son tres cosas diferentes:

```text
📄 Dockerfile
   = instrucciones

📦 Image
   = resultado de la construcción

🚀 Container
   = instancia ejecutable de la image
```

> [!IMPORTANT]
>
> ### 🧠 La idea central
>
> **Un Dockerfile es un archivo de instrucciones que Docker utiliza para construir una Docker Image.**

Y el flujo completo es:

```text
Dockerfile
     ↓
docker build
     ↓
Docker Image
     ↓
docker run
     ↓
Docker Container
```
