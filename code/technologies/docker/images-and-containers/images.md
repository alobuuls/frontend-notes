# 📄 01 - DOCKER IMAGES

# 📑 ÍNDICE — 01 - DOCKER IMAGES

- [📄 01 - DOCKER IMAGES](#-01---docker-images)
- [📑 ÍNDICE — 01 - DOCKER IMAGES](#-índice--01---docker-images)
  - [📦 ¿QUÉ ES UNA DOCKER IMAGE?](#-qué-es-una-docker-image)
  - [🧩 ¿QUÉ CONTIENE UNA IMAGE?](#-qué-contiene-una-image)
    - [📁 Application files](#-application-files)
    - [📦 Dependencies](#-dependencies)
    - [⚙️ Runtime](#️-runtime)
    - [📚 Libraries](#-libraries)
    - [⚙️ Configuration](#️-configuration)
    - [🏗️ Base Image](#️-base-image)
- [🏗️ ¿DE DÓNDE SALE UNA IMAGE?](#️-de-dónde-sale-una-image)
  - [1️⃣ Construirla con un Dockerfile](#1️⃣-construirla-con-un-dockerfile)
  - [2️⃣ Obtener una Image desde un Registry](#2️⃣-obtener-una-image-desde-un-registry)
- [🧱 IMAGE LAYERS](#-image-layers)
- [🔒 INMUTABILIDAD](#-inmutabilidad)
- [🏷️ IMAGE NAME, TAG E ID](#️-image-name-tag-e-id)
  - [🏷️ Image Name](#️-image-name)
  - [🔖 Image Tag](#-image-tag)
  - [🆔 Image ID](#-image-id)
- [🔄 IMAGE → CONTAINER](#-image--container)
- [🧠 FLUJO COMPLETO](#-flujo-completo)
    - [🏗️ Construyendo una image](#️-construyendo-una-image)
    - [📥 Obteniendo una image existente](#-obteniendo-una-image-existente)
    - [🚀 Ejecutando una image](#-ejecutando-una-image)
    - [🔗 Flujo completo](#-flujo-completo-1)

## 📦 ¿QUÉ ES UNA DOCKER IMAGE?

Una **Docker Image** es un paquete **inmutable** que contiene todo lo necesario para crear y ejecutar un container.

Puede incluir:

| Elemento         |   |
| ---------------- | - |
| La aplicación    |   |
| Sus dependencias |   |
| El runtime       |   |
| Librerías        |   |
| Configuración    |   |
| Una imagen base  |   |

Conceptualmente:

```text
Application
    +
Dependencies
    +
Runtime
    +
Configuration
        ↓
   Docker Image
```

Por ejemplo, una aplicación de Node.js podría terminar empaquetada como:

```text
Node.js
   +
Express
   +
Application
   +
Dependencies
        ↓
   Docker Image
```

> [!TIP]
> 🧠 **Image = plantilla que Docker utiliza para crear containers.**

Una misma image puede utilizarse para crear varios containers.

```text
Docker Image
      │
 ┌────┼────┐
 ▼    ▼    ▼
C-1  C-2  C-3
```

---

## 🧩 ¿QUÉ CONTIENE UNA IMAGE?

Una image puede contener diferentes elementos necesarios para que una aplicación pueda ejecutarse.

| Elemento                 | Descripción                                                          |
| ------------------------ | -------------------------------------------------------------------- |
| 📁 **Application files** | Los archivos de tu aplicación.                                       |
| 📦 **Dependencies**      | Las dependencias necesarias para ejecutar la aplicación.             |
| ⚙️ **Runtime**           | El entorno necesario para ejecutar la aplicación.                    |
| 📚 **Libraries**         | Librerías y componentes necesarios dentro del entorno del container. |
| ⚙️ **Configuration**     | Configuraciones necesarias para preparar el entorno de ejecución.    |
| 🏗️ **Base Image**       | Una image puede construirse a partir de otra image existente.        |

### 📁 Application files

Los archivos de tu aplicación:

```text
src/
package.json
server.js
...
```

### 📦 Dependencies

Las dependencias necesarias para ejecutar la aplicación.

Por ejemplo:

```text
Express
TypeScript
RxJS
...
```

### ⚙️ Runtime

El entorno necesario para ejecutar la aplicación.

Por ejemplo:

```text
Node.js
```

Una image de Node puede partir de:

```text
node:22
```

que proporciona el runtime de Node.js.

### 📚 Libraries

Librerías y componentes necesarios dentro del entorno del container.

### ⚙️ Configuration

También puede incluir configuraciones necesarias para preparar el entorno de ejecución.

### 🏗️ Base Image

Una image puede construirse a partir de otra image existente.

Por ejemplo:

```text
node:22
   ↓
Node.js runtime
```

Y posteriormente:

```text
node:22
     +
Express
     +
Application
     +
Dependencies
     ↓
my-api:1.0
```

> [!NOTE]
> Por eso una image puede entenderse como una **base sobre la que se construye el entorno de una aplicación**.

---

# 🏗️ ¿DE DÓNDE SALE UNA IMAGE?

Existen principalmente dos formas de obtener una image.

## 1️⃣ Construirla con un Dockerfile

El flujo típico es:

```text
Dockerfile
    ↓
docker build
    ↓
Docker Image
```

El **Dockerfile** contiene instrucciones que indican a Docker cómo construir la image.

Por ejemplo, conceptualmente:

```text
Dockerfile
    ↓
Base Image
    ↓
Dependencies
    ↓
Application
    ↓
Docker Image
```

> 📚 El funcionamiento del Dockerfile se estudiará posteriormente con mayor profundidad.

---

## 2️⃣ Obtener una Image desde un Registry

También puedes utilizar una image que ya fue creada y publicada.

```text
Docker Hub
    ↓
docker pull
    ↓
Docker Image
```

Por ejemplo:

```text
Docker Hub
    ↓
node:22
    ↓
Local Docker Image
```

Esto permite utilizar imágenes existentes sin tener que construirlas desde cero.

---

# 🧱 IMAGE LAYERS

Una Docker Image está formada por **layers o capas**.

Conceptualmente:

```text
Image
 ├── Layer
 ├── Layer
 ├── Layer
 └── Layer
```

Cada capa representa una parte de la image.

Puedes imaginarlo como una construcción progresiva:

```text
Base Image
     ↓
Layer
     ↓
Dependencies
     ↓
Layer
     ↓
Application
     ↓
Layer
     ↓
Final Image
```

Las layers son importantes porque Docker puede **reutilizar capas que no hayan cambiado**, lo que ayuda a evitar trabajo innecesario durante la construcción de images.

> [!WARNING]
> ⚠️ Aquí solamente necesitas entender **qué son las layers y por qué existen**.
>
> El funcionamiento detallado de las layers, el cache y la optimización de builds se estudiará posteriormente en:
>
> ```text
> 📄 05 - Layers & Cache.md
> ```

---

# 🔒 INMUTABILIDAD

Una característica importante de las Docker Images es que son **inmutables**.

Esto significa que una image existente no se modifica directamente para crear una nueva versión.

Si cambias algo en tu aplicación, normalmente construyes una **nueva image**.

```text
Old Image
    ↓
Dockerfile changes
    ↓
docker build
    ↓
New Image
```

Por ejemplo:

```text
my-api:1.0
```

Después de modificar la aplicación:

```text
my-api:1.1
```

Puedes tener ambas versiones:

```text
my-api:1.0
my-api:1.1
```

> [!TIP]
> Esto facilita trabajar con **versiones reproducibles** de una aplicación.

---

# 🏷️ IMAGE NAME, TAG E ID

Cuando trabajas con Docker encontrarás diferentes formas de identificar una image.

| Identificador      | Función                           |
| ------------------ | --------------------------------- |
| 🏷️ **Image Name** | Nombre de la image                |
| 🔖 **Image Tag**   | Identifica una versión o variante |
| 🆔 **Image ID**    | Identificador interno de Docker   |

## 🏷️ Image Name

Es el nombre de la image:

```text
my-api
```

---

## 🔖 Image Tag

El **tag** normalmente identifica una versión o variante.

```text
my-api:1.0
my-api:1.1
```

También puedes encontrar:

```text
node:22
node:22-alpine
```

La estructura general es:

```text
name:tag
```

Por ejemplo:

```text
my-api:1.0
  │      │
  │      └── Tag
  └───────── Name
```

> [!NOTE]
> 💡 El tag es una etiqueta legible que permite diferenciar versiones o variantes de una image.

---

## 🆔 Image ID

Docker también asigna un identificador interno a cada image.

Conceptualmente:

```text
my-api:1.0
     ↓
Image ID
```

Por lo tanto, puedes encontrar:

```text
Image Name → nombre de la image

Image Tag → versión o variante

Image ID → identificador interno de Docker
```

---

# 🔄 IMAGE → CONTAINER

La relación fundamental es:

```text
Docker Image
      ↓
docker run
      ↓
Docker Container
```

> [!IMPORTANT]
> La **image no es el container**.

Una forma sencilla de verlo:

```text
Image
  ↓
Plantilla
```

mientras:

```text
Container
  ↓
Instancia creada a partir de la image
```

Por ejemplo:

```text
my-api:1.0
     │
     ├── api-container-1
     ├── api-container-2
     └── api-container-3
```

La misma image puede servir como base para múltiples containers.

---

# 🧠 FLUJO COMPLETO

### 🏗️ Construyendo una image

```text
Dockerfile
    ↓
docker build
    ↓
Docker Image
```

### 📥 Obteniendo una image existente

```text
Docker Registry
    ↓
docker pull
    ↓
Docker Image
```

### 🚀 Ejecutando una image

```text
Docker Image
    ↓
docker run
    ↓
Docker Container
```

### 🔗 Flujo completo

```text
Dockerfile
    ↓
   build
    ↓
   Image
    ↓
    run
    ↓
 Container
```

> [!TIP]
> 🐳 **La Image es la plantilla inmutable; el Container es una instancia de esa plantilla ejecutándose.**

