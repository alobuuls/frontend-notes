# 📄 04 - DOCKER ENGINE

Docker Engine es el **motor que permite construir, ejecutar y administrar containers**.
---

## 📑 ÍNDICE

- [📄 04 - DOCKER ENGINE](#-04---docker-engine)
  - [Docker Engine es el **motor que permite construir, ejecutar y administrar containers**.](#docker-engine-es-el-motor-que-permite-construir-ejecutar-y-administrar-containers)
  - [📑 ÍNDICE](#-índice)
- [⚙️ 1. ¿QUÉ ES DOCKER ENGINE?](#️-1-qué-es-docker-engine)
- [🚀 2. ¿QUÉ HACE DOCKER ENGINE?](#-2-qué-hace-docker-engine)
    - [📦 Trabajar con Images](#-trabajar-con-images)
    - [🚀 Ejecutar Containers](#-ejecutar-containers)
    - [🌐 Administrar Networks](#-administrar-networks)
    - [💾 Administrar Volumes](#-administrar-volumes)
- [🧩 3. COMPONENTES DE DOCKER ENGINE](#-3-componentes-de-docker-engine)
    - [🖥️ Docker Client](#️-docker-client)
    - [🔌 Docker API](#-docker-api)
    - [⚙️ Docker Daemon](#️-docker-daemon)
- [🔌 4. DOCKER API](#-4-docker-api)
- [🖥️ 5. DOCKER DESKTOP](#️-5-docker-desktop)
    - [Terminal](#terminal)
    - [Interfaz gráfica](#interfaz-gráfica)
- [🐧 6. DOCKER EN WINDOWS Y WSL 2](#-6-docker-en-windows-y-wsl-2)
    - [🧠 ¿Por qué Linux?](#-por-qué-linux)
- [🐧 7. LINUX CONTAINERS](#-7-linux-containers)
  - [🔒 Namespaces](#-namespaces)
  - [📊 cgroups](#-cgroups)
- [🧠 8. DOCKER ENGINE Y LOS CONTAINERS](#-8-docker-engine-y-los-containers)
- [🧠 9. DOCKER ENGINE Y LOS RECURSOS](#-9-docker-engine-y-los-recursos)
    - [📦 Images](#-images)
    - [🚀 Containers](#-containers)
- [⚠️ 10. DOCKER ENGINE ≠ DOCKER CONTAINER](#️-10-docker-engine--docker-container)
- [🧭 11. MAPA MENTAL](#-11-mapa-mental)
    - [🔌 Comunicación](#-comunicación)
- [⭐ LO QUE DEBES SABER AL TERMINAR](#-lo-que-debes-saber-al-terminar)
    - [🐳 ¿Qué es Docker Engine?](#-qué-es-docker-engine)
    - [🔌 ¿Cómo se comunica la CLI con Docker?](#-cómo-se-comunica-la-cli-con-docker)
    - [🖥️ ¿Qué papel tiene Docker Desktop?](#️-qué-papel-tiene-docker-desktop)
    - [🐧 ¿Qué son namespaces y cgroups?](#-qué-son-namespaces-y-cgroups)
    - [🔥 Y la idea más importante:](#-y-la-idea-más-importante)


# ⚙️ 1. ¿QUÉ ES DOCKER ENGINE?

Docker Engine es la tecnología central de Docker encargada de gestionar la ejecución de containers y otros objetos de Docker.

```text
🐳 Docker Engine
      │
 ┌────┼────────┬────────┐
 ▼    ▼        ▼        ▼
Images Containers Networks Volumes
```

Es decir, Docker Engine participa en la gestión de:

| Objeto            |   |
| ----------------- | - |
| 📦 **Images**     |   |
| 🚀 **Containers** |   |
| 🌐 **Networks**   |   |
| 💾 **Volumes**    |   |

> [!TIP]
> 🧠 **Docker Engine es el motor que permite que Docker construya y ejecute containers y administre sus recursos.**

> [!NOTE]
> No necesitas memorizar sus componentes internos todavía.

---

# 🚀 2. ¿QUÉ HACE DOCKER ENGINE?

Entre sus responsabilidades principales están:

### 📦 Trabajar con Images

Puede:

```text
Build
   ↓
Image
```

y utilizar imágenes existentes para crear containers:

```text
Image
   ↓
Container
```

### 🚀 Ejecutar Containers

Docker Engine se encarga de crear y ejecutar los containers solicitados.

```text
Image
   ↓
Docker Engine
   ↓
Container
   ↓
Running Application
```

### 🌐 Administrar Networks

Permite que los containers puedan comunicarse entre sí y con otros servicios según la configuración de red.

```text
Container A
      │
      ▼
Docker Network
      │
      ▼
Container B
```

### 💾 Administrar Volumes

También gestiona almacenamiento persistente asociado a containers.

```text
Container
    │
    ▼
Volume
    │
    ▼
Persistent Data
```

> 📚 Estos conceptos se estudiarán con mayor profundidad posteriormente.

---

# 🧩 3. COMPONENTES DE DOCKER ENGINE

A nivel conceptual puedes visualizar:

```text
Docker Client
      ↓
Docker API
      ↓
Docker Daemon
      ↓
Docker Engine
```

Cada parte tiene una responsabilidad diferente:

| Componente            | Responsabilidad                                                                                      |
| --------------------- | ---------------------------------------------------------------------------------------------------- |
| 🖥️ **Docker Client** | Es la interfaz que utilizas para enviar comandos.                                                    |
| 🔌 **Docker API**     | Es el mecanismo de comunicación entre el cliente y el daemon.                                        |
| ⚙️ **Docker Daemon**  | Es el proceso que recibe las solicitudes y administra los objetos de Docker.                         |
| 🐳 **Docker Engine**  | Es el conjunto de tecnologías que permite que Docker realice estas operaciones y ejecute containers. |

### 🖥️ Docker Client

```bash
docker run
docker build
docker ps
```

### 🔌 Docker API

```text
Docker CLI
    ↓
Docker API
    ↓
Docker Daemon
```

### ⚙️ Docker Daemon

```text
Daemon
   ↓
Images
Containers
Networks
Volumes
```

---

# 🔌 4. DOCKER API

La Docker API permite que diferentes clientes puedan comunicarse con Docker Engine.

```text
Docker CLI
    ↓
Docker API
    ↓
Docker Daemon
    ↓
Docker Engine
```

Cuando ejecutas:

```bash
docker run nginx
```

conceptualmente sucede:

```text
Docker CLI
     ↓
"Quiero ejecutar nginx"
     ↓
Docker API
     ↓
Docker Daemon
     ↓
Docker Engine
     ↓
Container
```

> [!IMPORTANT]
> ⭐ **Idea importante**
>
> `docker run` **no es el motor en sí**.
>
> La CLI está enviando una solicitud al sistema de Docker para que el daemon la procese.

---

# 🖥️ 5. DOCKER DESKTOP

Si trabajas en Windows o macOS, probablemente utilizarás **Docker Desktop**.

Docker Desktop proporciona una experiencia integrada para trabajar con Docker.

```text
Docker Desktop
      │
      ├── Docker Engine
      ├── Docker CLI
      ├── Docker UI
      └── Development tools
```

Puedes interactuar con Docker mediante:

### Terminal

```bash
docker ps
docker run ...
docker build ...
```

### Interfaz gráfica

Docker Desktop también proporciona una interfaz visual para administrar elementos como:

```text
Containers
Images
Volumes
Networks
```

---

# 🐧 6. DOCKER EN WINDOWS Y WSL 2

En Windows, Docker Desktop puede utilizar **WSL 2 (Windows Subsystem for Linux 2)** para proporcionar el entorno Linux necesario para ejecutar containers Linux.

```text
Windows
   ↓
Docker Desktop
   ↓
WSL 2
   ↓
Linux Environment
   ↓
Docker Engine
   ↓
Containers
```

### 🧠 ¿Por qué Linux?

La mayoría de los containers de Docker utilizan tecnologías del **Linux kernel**.

Por eso Docker Desktop necesita proporcionar un entorno compatible cuando estás utilizando Windows.

> [!TIP]
> ⭐ **No necesitas profundizar todavía**
>
> Por ahora basta con entender:
>
> **Docker Desktop facilita ejecutar Docker en Windows proporcionando el entorno necesario para Docker Engine y los containers Linux.**

---

# 🐧 7. LINUX CONTAINERS

Los containers no son máquinas virtuales completas.

Docker utiliza mecanismos del sistema operativo para aislar procesos.

Tres conceptos importantes que debes reconocer son:

```text
Linux Kernel
     │
     ├── Namespaces
     │
     └── cgroups
```

## 🔒 Namespaces

Los **namespaces** ayudan a proporcionar aislamiento.

Permiten que un proceso dentro de un container tenga una visión aislada de determinados recursos del sistema.

```text
Host
 │
 ├── Container A
 │      └── procesos aislados
 │
 └── Container B
        └── procesos aislados
```

> [!NOTE]
> No necesitas estudiar todavía los diferentes tipos de namespaces.

## 📊 cgroups

Los **control groups (cgroups)** permiten controlar y limitar recursos utilizados por procesos.

Por ejemplo:

```text
Container
    ↓
CPU
Memory
Processes
```

Conceptualmente:

> **Namespaces → aislamiento**

> **cgroups → control de recursos**

> [!TIP]
> Esta distinción es suficiente por ahora.

---

# 🧠 8. DOCKER ENGINE Y LOS CONTAINERS

El flujo que debes tener en mente es:

```text
Dockerfile
     ↓
docker build
     ↓
Image
     ↓
docker run
     ↓
Docker Engine
     ↓
Container
     ↓
Application
```

Por ejemplo:

```text
Dockerfile
     ↓
Node Application
     ↓
Image
     ↓
Container
     ↓
Node.js Application
```

Docker Engine es quien hace posible que ese container pueda ejecutarse.

---

# 🧠 9. DOCKER ENGINE Y LOS RECURSOS

Docker Engine administra diferentes objetos:

```text
             Docker Engine
                  │
       ┌──────────┼──────────┐
       ▼          ▼          ▼
    Images    Containers   Networks
                              │
                              ▼
                           Volumes
```

| Objeto            | Función                                                                                           |
| ----------------- | ------------------------------------------------------------------------------------------------- |
| 📦 **Images**     | Plantillas utilizadas para crear containers.                                                      |
| 🚀 **Containers** | Instancias ejecutables creadas a partir de images.                                                |
| 🌐 **Networks**   | Permiten conectar containers y controlar su comunicación.                                         |
| 💾 **Volumes**    | Permiten almacenar datos que pueden persistir independientemente del ciclo de vida del container. |

### 📦 Images

```text
Image
  ↓
Container
```

### 🚀 Containers

```text
Image
  ↓
Container
```

---

# ⚠️ 10. DOCKER ENGINE ≠ DOCKER CONTAINER

No confundas:

```text
Docker Engine
```

con:

```text
Docker Container
```

> [!IMPORTANT]
> El Engine es el **motor que administra y ejecuta**.
>
> El container es una **instancia aislada donde se ejecuta una aplicación**.

Conceptualmente:

```text
Docker Engine
      │
      ├── Container A
      ├── Container B
      └── Container C
```

Puedes tener múltiples containers administrados por el mismo Docker Engine.

---

# 🧭 11. MAPA MENTAL

```text
                    DOCKER
                      │
                      ▼
               Docker Engine
                      │
          ┌───────────┼───────────┐
          ▼           ▼           ▼
       Images     Containers    Networks
                                    │
                                    ▼
                                 Volumes
```

### 🔌 Comunicación

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
Docker Objects
```

---

# ⭐ LO QUE DEBES SABER AL TERMINAR

### 🐳 ¿Qué es Docker Engine?

> Es el motor de Docker que permite construir, ejecutar y administrar containers y otros objetos como images, networks y volumes.

### 🔌 ¿Cómo se comunica la CLI con Docker?

```text
Docker CLI
    ↓
Docker API
    ↓
Docker Daemon
    ↓
Docker Engine
```

### 🖥️ ¿Qué papel tiene Docker Desktop?

> Facilita utilizar Docker en sistemas como Windows y macOS, proporcionando el entorno y herramientas necesarias para trabajar con Docker Engine y containers.

### 🐧 ¿Qué son namespaces y cgroups?

| Concepto       | Función             |
| -------------- | ------------------- |
| **Namespaces** | Aislamiento         |
| **cgroups**    | Control de recursos |

### 🔥 Y la idea más importante:

```text
Dockerfile
    ↓
Image
    ↓
Docker Engine
    ↓
Container
    ↓
Application
```

> [!CAUTION]
> **No necesitas conocer todavía los internals de Docker Engine. Lo importante es entender que es el motor que hace posible la construcción, ejecución y administración de containers.**
