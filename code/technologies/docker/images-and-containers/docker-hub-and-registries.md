# 📄 05 - Docker Hub & Registries

> [!NOTE]
> Aquí estudias **dónde se almacenan, distribuyen y comparten las Docker Images**.

---

## 📑 ÍNDICE 
- [📄 05 - Docker Hub \& Registries](#-05---docker-hub--registries)
  - [📑 ÍNDICE](#-índice)
- [🌐 ¿Qué es un Registry?](#-qué-es-un-registry)
- [🐳 Docker Hub](#-docker-hub)
- [📦 Repository](#-repository)
- [⭐ Official Images](#-official-images)
- [📥 Pull](#-pull)
- [📤 Push](#-push)
- [🔄 Pull vs Push](#-pull-vs-push)
- [🔐 Public vs Private Repositories](#-public-vs-private-repositories)
  - [🌎 Public Repository](#-public-repository)
  - [🔒 Private Repository](#-private-repository)
- [👤 Publicar tus propias Images](#-publicar-tus-propias-images)
- [🌎 Otros Docker Registries](#-otros-docker-registries)
    - [🐙 GitHub Container Registry](#-github-container-registry)
    - [☁️ Cloud Registries](#️-cloud-registries)
- [🔄 Flujo completo](#-flujo-completo)
- [🧠 Registry vs Docker Hub](#-registry-vs-docker-hub)
- [🔗 Cómo encaja con lo anterior](#-cómo-encaja-con-lo-anterior)
11. [🔄 Flujo completo](#-flujo-completo)
12. [🧠 Registry vs Docker Hub](#-registry-vs-docker-hub)
13. [🔗 Cómo encaja con lo anterior](#-cómo-encaja-con-lo-anterior)

# 🌐 ¿Qué es un Registry?

Un **Docker Registry** es un servicio que permite **almacenar y distribuir Docker Images**.

Puedes imaginarlo como un repositorio de Images al que Docker puede conectarse.

```text
Developer
    ↓
Registry
    ↓
Docker Image
```

También puedes obtener una Image desde un Registry:

```text
Registry
    ↓
docker pull
    ↓
Local Image
```

Y enviar una Image al Registry:

```text
Local Image
    ↓
docker push
    ↓
Registry
```

> [!TIP]
> **Un Registry es el lugar remoto donde las Docker Images pueden almacenarse y distribuirse.**

---

# 🐳 Docker Hub

**Docker Hub** es uno de los Docker Registries más utilizados.

Puedes encontrar Images preparadas para utilizar, además de publicar tus propias Images.

Conceptualmente:

```text
Docker Hub
    │
    ├── node
    ├── postgres
    ├── nginx
    └── ...
```

Por ejemplo, puedes obtener una Image de Node:

```text
Docker Hub
    ↓
node:22
    ↓
Local Docker Image
```

Esto evita que tengas que construir desde cero determinadas Images comunes.

---

# 📦 Repository

Dentro de un Registry existen **repositories**.

Por ejemplo:

```text
Docker Hub
    │
    ├── node
    ├── postgres
    ├── nginx
    └── my-api
```

Un repository puede contener diferentes versiones o variantes mediante tags:

```text
node
 │
 ├── 20
 ├── 22
 └── 22-alpine
```

Esto conecta directamente con lo estudiado anteriormente sobre:

```text
Repository + Tag
```

Por ejemplo:

```text
node:22
```

donde:

| Parte  | Significado |
| ------ | ----------- |
| `node` | Repository  |
| `22`   | Tag         |

---

# ⭐ Official Images

Docker Hub tiene **Official Images** mantenidas y publicadas bajo criterios específicos por Docker y/o proyectos upstream.

Ejemplos conocidos:

```text
node
postgres
nginx
redis
```

Puedes utilizarlas como base para tus propias aplicaciones.

Por ejemplo:

```text
node:22
   ↓
Dockerfile
   ↓
my-api
```

Esto es especialmente útil porque no necesitas construir manualmente todo el entorno de Node.js.

---

# 📥 Pull

`pull` significa **obtener una Image desde un Registry hacia tu entorno local**.

```text
Docker Registry
      ↓
    pull
      ↓
Local Docker
      ↓
Docker Image
```

Por ejemplo:

```bash
docker pull node:22
```

El resultado es que Docker obtiene esa Image y la almacena localmente.

Después puedes utilizarla para crear containers:

```text
node:22
   ↓
docker run
   ↓
Container
```

---

# 📤 Push

`push` hace lo contrario.

Permite **enviar una Image local hacia un Registry**.

```text
Local Docker
     ↓
Docker Image
     ↓
   push
     ↓
Registry
```

Por ejemplo:

```text
my-api:1.0
     ↓
docker push
     ↓
Docker Hub
```

Esto permite compartir tu Image o utilizarla posteriormente desde otros entornos.

---

# 🔄 Pull vs Push

| Operación | Flujo                  | Significado |
| --------- | ---------------------- | ----------- |
| `pull`    | Registry → Local Image | traer       |
| `push`    | Local Image → Registry | enviar      |

Puedes pensarlo como:

```text
pull → traer
push → enviar
```

---

# 🔐 Public vs Private Repositories

Los repositories pueden tener diferentes niveles de acceso.

## 🌎 Public Repository

Una Image almacenada en un repository público puede ser obtenida por otros usuarios.

```text
Public Repository
       ↓
Otros usuarios
       ↓
docker pull
```

Por ejemplo, muchas Images públicas disponibles en Docker Hub pueden utilizarse directamente.

---

## 🔒 Private Repository

Un repository privado restringe quién puede acceder a sus Images.

```text
Private Repository
       ↓
Authorization
       ↓
Authorized User
       ↓
docker pull
```

Esto es especialmente importante para Images que contienen aplicaciones privadas o software que no quieres distribuir públicamente.

---

# 👤 Publicar tus propias Images

También puedes crear una Image para tu aplicación:

```text
Dockerfile
    ↓
docker build
    ↓
my-api:1.0
```

Y posteriormente publicarla:

```text
my-api:1.0
    ↓
docker push
    ↓
Docker Registry
```

Después, otro entorno puede obtenerla:

```text
Docker Registry
    ↓
docker pull
    ↓
my-api:1.0
```

Esto permite que una misma Image pueda utilizarse en diferentes máquinas o entornos.

---

# 🌎 Otros Docker Registries

Docker Hub no es el único Registry.

Debes reconocer al menos estos conceptos:

### 🐙 GitHub Container Registry

Permite almacenar Docker Images asociadas con GitHub.

```text
GitHub
   ↓
Container Registry
   ↓
Docker Images
```

### ☁️ Cloud Registries

Los principales proveedores cloud también ofrecen servicios para almacenar Images.

```text
Cloud Provider
      ↓
Container Registry
      ↓
Docker Images
```

Estos suelen integrarse con otros servicios de infraestructura y deployment.

> [!NOTE]
> No necesitas memorizar todavía cómo funciona cada proveedor.

---

# 🔄 Flujo completo

Ahora puedes conectar todo lo estudiado sobre Images:

```text
Dockerfile
    ↓
docker build
    ↓
Docker Image
    ↓
Tag
    ↓
docker push
    ↓
Registry
```

Y posteriormente:

```text
Registry
    ↓
docker pull
    ↓
Docker Image
    ↓
docker run
    ↓
Container
```

Por ejemplo:

```text
Developer
    ↓
Dockerfile
    ↓
my-api:1.0
    ↓
Docker Hub
    ↓
docker pull
    ↓
my-api:1.0
    ↓
docker run
    ↓
Container
```

---

# 🧠 Registry vs Docker Hub

No son exactamente lo mismo.

```text
Registry
    ↓
Concepto general
```

mientras que:

```text
Docker Hub
    ↓
Un Registry concreto
```

> [!IMPORTANT]
> **Docker Hub es un Registry, pero no todos los Registries son Docker Hub.**

Por ejemplo:

```text
Docker Registries
       │
       ├── Docker Hub
       ├── GitHub Container Registry
       └── Cloud Registries
```

---

# 🔗 Cómo encaja con lo anterior

Ya puedes conectar:

```text
Dockerfile
    ↓
docker build
    ↓
Image
    ↓
Repository + Tag
    ↓
Registry
    ↓
docker pull / docker push
    ↓
Container
```

> [!TIP]
> **Las Docker Images pueden almacenarse en Registries para poder distribuirlas, compartirlas y utilizarlas desde diferentes entornos.**
