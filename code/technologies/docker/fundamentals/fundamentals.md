# 🐳 01 - WHAT IS DOCKER

> [!NOTE]
> **Docker** es una plataforma que permite **empaquetar, distribuir y ejecutar aplicaciones dentro de containers**.

---

## 📑 Índice 

1. 🐳 [01 - What is Docker](#-01---what-is-docker)
   - [🧠 ¿Qué es Docker?](#-qué-es-docker)
   - [📦 ¿Qué es la Containerización?](#-qué-es-la-containerización)
   - [🤔 ¿Por qué existe Docker?](#-por-qué-existe-docker)
     - [Ejemplo](#ejemplo)
   - [🔄 Consistencia entre entornos](#-consistencia-entre-entornos)
   - [📦 Portabilidad](#-portabilidad)
   - [🔒 Aislamiento](#-aislamiento)
   - [📦 ¿Qué es un Container?](#-qué-es-un-container)
     - [Ejemplo](#ejemplo-1)
   - [🆚 Antes de Docker vs Con Docker](#-antes-de-docker-vs-con-docker)
     - [❌ Sin Docker](#-sin-docker)
     - [🐳 Con Docker](#-con-docker)
   - [🧠 Conceptos fundamentales](#-conceptos-fundamentales)
     - [📦 Docker Image](#-docker-image)
     - [🚢 Docker Container](#-docker-container)
     - [📄 Dockerfile](#-dockerfile)
     - [🌐 Docker Registry](#-docker-registry)
   - [🔗 Mapa mental](#-mapa-mental)
   - [⭐ Idea clave](#-idea-clave)
   - [🎯 Al terminar este documento debes poder responder](#-al-terminar-este-documento-debes-poder-responder)
     - [❓ ¿Qué problema resuelve Docker?](#-qué-problema-resuelve-docker)
     - [❓ ¿Qué es un Container?](#-qué-es-un-container-1)
     - [❓ ¿Qué relación existe entre Image y Container?](#-qué-relación-existe-entre-image-y-container)

## 🧠 ¿QUÉ ES DOCKER?

Su objetivo principal es que una aplicación pueda ejecutarse de manera **consistente, aislada y reproducible** en diferentes entornos.

```text
Application
    +
Dependencies
    +
Configuration
        ↓
    Container
```

En lugar de depender completamente de lo que esté instalado y configurado en cada máquina, Docker permite definir un entorno para ejecutar la aplicación.

---

## 📦 ¿QUÉ ES LA CONTAINERIZACIÓN?

La **containerización** es la práctica de empaquetar una aplicación junto con las dependencias y configuración necesarias para ejecutarla dentro de un container.

```text
Application
      +
Dependencies
      +
Runtime
      +
Configuration
      ↓
   Container
```

Esto permite que diferentes aplicaciones puedan ejecutarse en entornos aislados dentro de la misma máquina.

---

## 🤔 ¿POR QUÉ EXISTE DOCKER?

> [!WARNING]
> Uno de los problemas clásicos del desarrollo es:
>
> **"It works on my machine."**

Una aplicación puede funcionar correctamente en la computadora de un desarrollador, pero fallar en otra debido a diferencias en:

| Diferencias comunes         |
| --------------------------- |
| Versiones de Node           |
| Versiones de bases de datos |
| Dependencias                |
| Variables de entorno        |
| Configuración del sistema   |
| Librerías instaladas        |
| Sistema operativo           |

### Ejemplo

| Developer A           | Developer B             |
| --------------------- | ----------------------- |
| Node 20               | Node 18                 |
| PostgreSQL 16         | PostgreSQL 14           |
| Dependencias actuales | Dependencias diferentes |
| ✅ Funciona            | ❌ Puede fallar          |

Docker ayuda a reducir este problema al definir un entorno de ejecución reproducible.

---

## 🔄 CONSISTENCIA ENTRE ENTORNOS

Una aplicación normalmente pasa por diferentes ambientes:

```text
Development
      ↓
Testing
      ↓
Staging
      ↓
Production
```

Con Docker:

```text
Docker Image
      ↓
Development
      ↓
Testing
      ↓
Production
```

La misma imagen puede utilizarse como base para ejecutar la aplicación en diferentes entornos compatibles.

> [!TIP]
> Docker no garantiza que absolutamente todo sea idéntico, pero ayuda considerablemente a estandarizar el entorno de ejecución.

---

## 📦 PORTABILIDAD

Los containers facilitan mover una aplicación entre diferentes entornos.

```text
Developer PC
      ↓
Docker
      ↓
Server
      ↓
Cloud
```

Mientras el entorno tenga soporte para Docker, el mismo container o image puede utilizarse como base para ejecutar la aplicación.

---

## 🔒 AISLAMIENTO

Los containers proporcionan aislamiento entre procesos y aplicaciones.

```text
Docker
 │
 ├── Container A
 │      └── Backend
 │
 ├── Container B
 │      └── PostgreSQL
 │
 └── Container C
        └── Redis
```

Cada aplicación puede tener su propio entorno, dependencias y configuración.

Esto evita que diferentes servicios tengan que compartir necesariamente las mismas versiones de sus dependencias.

---

## 📦 ¿QUÉ ES UN CONTAINER?

Un **container** es un entorno aislado donde se ejecuta una aplicación.

```text
Application
    +
Dependencies
    +
Configuration
        ↓
    Container
```

### Ejemplo

```text
Container
 ├── Node.js
 ├── Application
 ├── Dependencies
 └── Configuration
```

El container proporciona el entorno necesario para que la aplicación pueda ejecutarse de manera consistente.

> [!IMPORTANT]
> Un container **no es una máquina virtual completa**. La comparación entre containers y VMs se estudiará en:
>
> ```text
> 📄 02 - Docker vs Virtual Machines.md
> ```

---

## 🆚 ANTES DE DOCKER VS CON DOCKER

| ❌ SIN DOCKER         | 🐳 CON DOCKER            |
| -------------------- | ------------------------ |
| Instala Node         | Application              |
| Instala PostgreSQL   | ↓                        |
| Configura versiones  | Docker Image             |
| Instala dependencias | ↓                        |
| Configura servicios  | Container                |
| Entorno manual       | Application ejecutándose |

### ❌ SIN DOCKER

```text
Developer
    ↓
Instala Node
    ↓
Instala PostgreSQL
    ↓
Configura versiones
    ↓
Instala dependencias
    ↓
Configura servicios
```

Esto puede generar diferencias entre máquinas.

### 🐳 CON DOCKER

```text
Application
    ↓
Docker Image
    ↓
Container
    ↓
Application ejecutándose
```

La configuración del entorno puede quedar definida y reproducirse cuando sea necesario.

---

## 🧠 CONCEPTOS FUNDAMENTALES

> [!NOTE]
> Aquí solo necesitas conocerlos **a nivel introductorio**.

| Concepto                | Descripción                                                                             |
| ----------------------- | --------------------------------------------------------------------------------------- |
| 🐳 **Docker**           | Plataforma para construir, distribuir y ejecutar aplicaciones utilizando containers.    |
| 📦 **Docker Image**     | Una plantilla inmutable a partir de la cual se crean containers.                        |
| 🚢 **Docker Container** | Una instancia de una image que se encuentra ejecutándose.                               |
| 📄 **Dockerfile**       | Archivo que contiene instrucciones para construir una Docker Image.                     |
| ⚙️ **Docker Engine**    | Componente que permite construir y ejecutar containers y administrar objetos de Docker. |
| 🌐 **Docker Registry**  | Lugar donde se almacenan y distribuyen Docker Images.                                   |

### 📦 Docker Image

```text
Image
   ↓
Container
```

### 🚢 Docker Container

```text
Docker Image
      ↓
Docker Container
```

### 📄 Dockerfile

```text
Dockerfile
     ↓
   Build
     ↓
Docker Image
```

### 🌐 Docker Registry

```text
Docker Image
     ↓
Docker Registry
     ↓
Download / Pull
     ↓
Developer / Server
```

Estos conceptos se profundizarán posteriormente.

---

## 🔗 MAPA MENTAL

```text
                    🐳 DOCKER
                       │
          ┌────────────┴────────────┐
          │                         │
   Containerization            Portability
          │                         │
          ▼                         ▼
      Container              Different Environments
          │
          ▼
     Application
          │
     ┌────┴────┐
     ▼         ▼
Dependencies  Configuration
```

```text
Dockerfile
     ↓
   Build
     ↓
 Docker Image
     ↓
   Run
     ↓
 Docker Container
```

---

# ⭐ IDEA CLAVE

> [!TIP]
> Docker existe principalmente para **hacer más consistente y reproducible la forma en que ejecutamos aplicaciones**, utilizando containers aislados.

> **Docker permite empaquetar y ejecutar aplicaciones en containers aislados y reproducibles.**

---

## 🎯 AL TERMINAR ESTE DOCUMENTO DEBES PODER RESPONDER

### ❓ ¿Qué problema resuelve Docker?

> Reduce problemas de diferencias entre entornos y facilita empaquetar, distribuir y ejecutar aplicaciones de forma consistente.

### ❓ ¿Qué es un container?

> Un entorno aislado donde se ejecuta una aplicación junto con lo necesario para funcionar.

### ❓ ¿Qué relación existe entre Image y Container?

```text
Image
  ↓
Container
```

> Una image sirve como plantilla para crear containers.
