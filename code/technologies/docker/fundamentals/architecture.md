# 📄 03 - DOCKER ARCHITECTURE

Este documento construye el **mapa mental de Docker**: qué piezas existen y cómo se relacionan entre sí.

> [!NOTE]
> 🧠 La idea no es memorizar internals, sino entender **quién le pide qué a quién**.

---

## 📑 Índice 

1. 📄 [03 - Docker Architecture](#-03---docker-architecture)
   - [🐳 1. ¿Qué es Docker Architecture?](#-1-qué-es-docker-architecture)
   - [🖥️ 2. Docker Client](#️-2-docker-client)
   - [⚙️ 3. Docker Daemon](#️-3-docker-daemon)
   - [🔌 4. Docker API](#-4-docker-api)
   - [🐳 5. Docker Engine](#-5-docker-engine)
   - [📦 6. Docker Objects](#-6-docker-objects)
   - [🌐 7. Docker Registry](#-7-docker-registry)
   - [🔄 8. Flujo general de Docker](#-8-flujo-general-de-docker)
   - [🏗️ 9. De Dockerfile a Container](#️-9-de-dockerfile-a-container)
   - [🌐 10. Registry + Docker](#-10-registry--docker)
   - [🧠 11. Mapa mental](#-11-mapa-mental)
   - [⭐ Lo que debes saber al terminar](#-lo-que-debes-saber-al-terminar)

# 🐳 1. ¿QUÉ ES DOCKER ARCHITECTURE?

Docker utiliza varios componentes que trabajan juntos para **crear, ejecutar y administrar containers**.

De forma simplificada:

```text
Developer
    ↓
Docker Client
    ↓
Docker API
    ↓
Docker Daemon
    ↓
Docker Engine
    ↓
Docker Objects
```

Los principales objetos que Docker administra son:

| Objeto            | Función general                           |
| ----------------- | ----------------------------------------- |
| 📦 **Images**     | Plantillas para crear containers          |
| 🚀 **Containers** | Instancias ejecutables de images          |
| 🌐 **Networks**   | Comunicación entre containers y servicios |
| 💾 **Volumes**    | Almacenamiento persistente                |

---

# 🖥️ 2. DOCKER CLIENT

El **Docker Client** es la herramienta que utilizas para interactuar con Docker.

La forma más común de utilizarlo es mediante la CLI:

```text
docker
```

Por ejemplo:

```bash
docker run
docker build
docker ps
```

Cuando ejecutas un comando como:

```bash
docker run nginx
```

la CLI **no hace todo el trabajo directamente**.

Envía una solicitud al Docker Daemon.

```text
Docker CLI
    ↓
Request
    ↓
Docker Daemon
```

> [!TIP]
> 🧠 **Docker Client = interfaz mediante la cual le das instrucciones a Docker.**

Los comandos se estudiarán con profundidad posteriormente en:

```text
📁 03 - DOCKER CLI
```

---

# ⚙️ 3. DOCKER DAEMON

El **Docker Daemon** es el proceso encargado de administrar Docker.

Se encarga de trabajar con objetos como:

```text
Images
Containers
Networks
Volumes
```

Por ejemplo, cuando solicitas:

```bash
docker run nginx
```

el daemon recibe esa petición y se encarga de realizar las operaciones necesarias para crear y ejecutar el container.

```text
Docker Client
      ↓
Docker Daemon
      ↓
Create / Run Container
```

> [!TIP]
> 🧠 **Docker Daemon = proceso que recibe solicitudes y administra los recursos de Docker.**

---

# 🔌 4. DOCKER API

El Docker Client necesita comunicarse con el Docker Daemon.

Para eso existe una **API**.

```text
Docker CLI
     ↓
Docker API
     ↓
Docker Daemon
```

Esto significa que:

```bash
docker run
```

no es simplemente:

> "Ejecutar un container."

Conceptualmente ocurre algo más parecido a:

```text
Developer
    ↓
docker run
    ↓
Docker CLI
    ↓
Docker API
    ↓
Docker Daemon
    ↓
Create / Start Container
```

> [!IMPORTANT]
> ⭐ ¿Por qué importa?
>
> Porque te ayuda a entender que Docker tiene una arquitectura **cliente-servidor**.
>
> El cliente solicita operaciones y el daemon las ejecuta.

---

# 🐳 5. DOCKER ENGINE

**Docker Engine** es la tecnología principal que permite **construir y ejecutar containers**.

De forma conceptual:

```text
Docker
   ↓
Docker Engine
   ├── Images
   ├── Containers
   ├── Networks
   └── Volumes
```

El Engine proporciona la infraestructura necesaria para trabajar con estos objetos.

> [!WARNING]
>
> ### 🧠 No confundas
>
> No pienses:
>
> ```text
> Docker = solamente Docker CLI
> ```
>
> La CLI es solamente una de las formas de interactuar con Docker.

Una simplificación útil es:

```text
Docker Client
      ↓
Docker API
      ↓
Docker Daemon
      ↓
Docker Engine
```

---

# 📦 6. DOCKER OBJECTS

Docker administra diferentes tipos de objetos.

Los principales son:

```text
Images
Containers
Networks
Volumes
```

> [!NOTE]
> Por ahora basta con entender su función general.

| Objeto           | Descripción                                                                              |
| ---------------- | ---------------------------------------------------------------------------------------- |
| 🖼️ **Image**    | Es una plantilla inmutable utilizada para crear containers.                              |
| 🚀 **Container** | Es una instancia ejecutable creada a partir de una image.                                |
| 🌐 **Network**   | Permite que los containers se comuniquen entre sí y con otros servicios.                 |
| 💾 **Volume**    | Permite almacenar datos de forma persistente fuera del filesystem efímero del container. |

### 🖼️ Image

```text
Image
   ↓
Container
```

### 🚀 Container

```text
Image
   ↓
Container
```

### 🌐 Network

```text
Container
    ↕
Network
    ↕
Container
```

### 💾 Volume

```text
Container
    ↓
Volume
    ↓
Persistent Data
```

> 📚 Estos conceptos tendrán documentos propios posteriormente, así que aquí solo necesitas reconocerlos.

---

# 🌐 7. DOCKER REGISTRY

Un **Docker Registry** es un servicio donde se almacenan y distribuyen Docker Images.

Conceptualmente:

```text
Docker
   ↓
Registry
   ↓
Images
```

Un ejemplo muy conocido es:

```text
Docker Hub
```

Puedes obtener una image desde un registry:

```text
Registry
   ↓
Docker Image
   ↓
Local Docker
   ↓
Container
```

También puedes construir una image localmente y posteriormente subirla:

```text
Dockerfile
    ↓
Build
    ↓
Image
    ↓
Registry
```

La explicación profunda de registries y publicación de images irá posteriormente en:

```text
📁 12 - REGISTRIES & DEPLOYMENT
```

---

# 🔄 8. FLUJO GENERAL DE DOCKER

Ahora podemos juntar las piezas.

Cuando trabajas con Docker:

```text
Developer
    ↓
Docker CLI
    ↓
Docker API
    ↓
Docker Daemon
    ↓
Docker Engine
    ↓
Container
```

Por ejemplo:

```bash
docker run nginx
```

Conceptualmente:

```text
docker run nginx
       ↓
   Docker CLI
       ↓
   Docker API
       ↓
 Docker Daemon
       ↓
 Docker Engine
       ↓
   nginx Image
       ↓
    Container
```

---

# 🏗️ 9. DE DOCKERFILE A CONTAINER

Otro flujo fundamental es entender cómo llegas desde el código hasta un container.

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

Por ejemplo:

```text
Dockerfile
    ↓
Define cómo construir la aplicación
    ↓
docker build
    ↓
Image
    ↓
docker run
    ↓
Container
```

> [!TIP]
> 🧠 **Diferencia fundamental:**

```text
Dockerfile
    ↓
Describe cómo construir

Image
    ↓
Plantilla creada

Container
    ↓
Instancia ejecutándose
```

---

# 🌐 10. REGISTRY + DOCKER

También puedes incorporar un registry al flujo:

```text
Dockerfile
    ↓
docker build
    ↓
Image
    ↓
Push
    ↓
Docker Registry
```

Y posteriormente:

```text
Docker Registry
    ↓
Pull
    ↓
Image
    ↓
docker run
    ↓
Container
```

Por ejemplo:

```text
Developer A
    ↓
Build Image
    ↓
Docker Hub
    ↓
Developer B
    ↓
Pull Image
    ↓
Run Container
```

Esto es una de las bases de cómo las images pueden distribuirse entre diferentes entornos.

---

# 🧠 11. MAPA MENTAL

Quédate con esta estructura:

```text
                         DOCKER
                            │
              ┌─────────────┴─────────────┐
              ▼                           ▼
        Docker Client                Docker Engine
              │                           │
              ▼                           ├── Images
         Docker API                      ├── Containers
              │                           ├── Networks
              ▼                           └── Volumes
       Docker Daemon
```

### 📦 Images

```text
Dockerfile
    ↓
docker build
    ↓
Image
    ↓
docker run
    ↓
Container
```

### 🌐 Compartir Images

```text
Image
    ↓
Docker Registry
    ↓
Pull
    ↓
Another Environment
    ↓
Container
```

---

# ⭐ LO QUE DEBES SABER AL TERMINAR

Debes poder explicar:

| Concepto                                   | Debes entender que...                                                     |
| ------------------------------------------ | ------------------------------------------------------------------------- |
| **Docker Client**                          | Es la interfaz que utilizamos para enviar instrucciones.                  |
| **Docker API**                             | Permite la comunicación entre el cliente y el daemon.                     |
| **Docker Daemon**                          | Recibe las solicitudes y administra los objetos de Docker.                |
| **Docker Engine**                          | Proporciona la tecnología necesaria para construir y ejecutar containers. |
| **Images, Containers, Networks y Volumes** | Son objetos fundamentales que Docker administra.                          |
| **Docker Registry**                        | Permite almacenar y distribuir Docker Images.                             |

### 🔑 Flujo principal

```text
Docker CLI
    ↓
Docker API
    ↓
Docker Daemon
    ↓
Docker Engine
    ↓
Docker Objects
```

### 🔑 Flujo de construcción

```text
Dockerfile
    ↓
Build
    ↓
Image
    ↓
Run
    ↓
Container
```

> [!CAUTION]
> ⚠️ **No necesitas memorizar todavía cómo funcionan internamente el daemon, el Engine o la API.** Eso sería profundizar demasiado pronto.
>
> Lo importante aquí es que tengas claro **qué pieza existe, qué responsabilidad tiene y cómo se conecta con las demás**.
