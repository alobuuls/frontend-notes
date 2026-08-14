# 📄 01 - What is Docker Compose

> [!TIP]
> **Docker Compose existe para facilitar el trabajo con aplicaciones formadas por múltiples containers.**
>
> En lugar de ejecutar y configurar cada container manualmente, puedes describir toda la aplicación en un archivo y levantarla como un conjunto.

---

## 📑 ÍNDICE

- [� 01 - What is Docker Compose](#-01---what-is-docker-compose)
  - [📑 ÍNDICE](#-índice)
- [🐳 ¿Qué es Docker Compose?](#-qué-es-docker-compose)
- [🤔 ¿Por qué utilizar Docker Compose?](#-por-qué-utilizar-docker-compose)
- [🆚 Docker CLI vs Docker Compose](#-docker-cli-vs-docker-compose)
- [📄 `compose.yaml`](#-composeyaml)
- [🧩 Declarative Configuration](#-declarative-configuration)
- [🧩 ¿Qué es un Service?](#-qué-es-un-service)
- [🏗️ Ejemplo básico](#️-ejemplo-básico)
- [🚀 `docker compose up`](#-docker-compose-up)
- [💤 Detached Mode](#-detached-mode)
- [🛑 Detener la aplicación](#-detener-la-aplicación)
- [🗑️ `docker compose down`](#️-docker-compose-down)
- [🔄 `up` vs `down`](#-up-vs-down)
- [🆚 Sin Compose vs con Compose](#-sin-compose-vs-con-compose)
  - [❌ Sin Compose](#-sin-compose)
  - [✅ Con Compose](#-con-compose)
- [🧠 Compose como definición de la aplicación](#-compose-como-definición-de-la-aplicación)
- [🔗 Compose y lo que ya estudiaste](#-compose-y-lo-que-ya-estudiaste)
- [🏗️ Flujo mental](#️-flujo-mental)
- [🔥 La idea fundamental](#-la-idea-fundamental)

# 🐳 ¿Qué es Docker Compose?

**Docker Compose** es una herramienta de Docker que permite **definir y administrar aplicaciones compuestas por múltiples services/containers** mediante un archivo de configuración.

Por ejemplo, una aplicación podría tener:

| Application | Component  |
| ----------- | ---------- |
| 🖥️         | API        |
| 🗄️         | PostgreSQL |
| ⚡           | Redis      |

Sin Compose tendrías que configurar y ejecutar cada container individualmente.

Con Compose puedes describirlos juntos:

```text
compose.yaml
     │
     ├── API
     ├── PostgreSQL
     └── Redis
            ↓
    docker compose up
```

---

# 🤔 ¿Por qué utilizar Docker Compose?

Imagina que tienes:

```text
Angular
   ↓
API
   ↓
PostgreSQL
   ↓
Redis
```

Cada servicio necesita su propio container.

Sin Compose podrías terminar ejecutando:

```bash
docker run ...
docker run ...
docker run ...
```

Además tendrías que recordar:

* nombres de containers
* images
* ports
* environment variables
* networks
* volumes
* relaciones entre servicios

Esto rápidamente se vuelve incómodo.

> [!TIP]
> Compose permite declarar esa configuración en un solo lugar:

```text
compose.yaml
      ↓
Toda la configuración
      ↓
docker compose up
      ↓
Todos los servicios
```

---

# 🆚 Docker CLI vs Docker Compose

Docker CLI permite administrar containers individualmente:

```text
Docker CLI
    │
    ├── docker run
    ├── docker stop
    ├── docker rm
    └── ...
```

Compose trabaja con la aplicación completa:

```text
Docker Compose
      │
      ├── API
      ├── PostgreSQL
      └── Redis
```

| Docker CLI                           | Docker Compose                                            |
| ------------------------------------ | --------------------------------------------------------- |
| Administrar recursos individualmente | Administrar una aplicación compuesta por varios servicios |
| `docker run`                         | `docker compose up`                                       |
| `docker stop`                        | `docker compose stop`                                     |
| `docker rm`                          | `docker compose down`                                     |

> [!IMPORTANT]
> **Docker CLI** → administrar recursos individualmente.
> **Docker Compose** → administrar una aplicación compuesta por varios servicios.

---

# 📄 `compose.yaml`

Docker Compose utiliza normalmente un archivo llamado:

```text
compose.yaml
```

También puedes encontrarte proyectos antiguos utilizando:

```text
docker-compose.yml
```

Por ejemplo:

```text
my-project/
│
├── compose.yaml
├── Dockerfile
├── src/
└── package.json
```

El archivo describe cómo debe funcionar la aplicación.

---

# 🧩 Declarative Configuration

Compose utiliza un enfoque **declarativo**.

Esto significa que describes:

> **Qué quieres que exista.**

En lugar de escribir manualmente todos los pasos para conseguirlo.

Por ejemplo:

```yaml
services:
  api:
    image: my-api:1.0

  postgres:
    image: postgres:17
```

Estás declarando:

```text
Quiero:

API
+
PostgreSQL
```

Y Compose se encarga de crear y ejecutar los recursos necesarios según esa configuración.

---

# 🧩 ¿Qué es un Service?

Un **service** representa un componente de la aplicación que Compose administra.

Por ejemplo:

```yaml
services:

  api:
    image: my-api:1.0

  postgres:
    image: postgres:17
```

Aquí existen dos services:

```text
services
   │
   ├── api
   │
   └── postgres
```

Cada service normalmente termina ejecutándose como uno o más containers, dependiendo de la configuración y del uso.

> [!NOTE]
> Por ahora piensa:
>
> **Un service representa un componente de nuestra aplicación dentro de Compose.**

---

# 🏗️ Ejemplo básico

Supongamos:

```text
Application
│
├── API
└── PostgreSQL
```

Podríamos definir:

```yaml
services:

  api:
    image: my-api:1.0

  postgres:
    image: postgres:17
```

Entonces:

```text
compose.yaml
      │
      ├── api
      │
      └── postgres
```

---

# 🚀 `docker compose up`

El comando principal para levantar la aplicación es:

```bash
docker compose up
```

Conceptualmente:

```text
compose.yaml
      ↓
docker compose up
      ↓
Services
      ↓
Containers
```

Si tienes:

```yaml
services:

  api:
    image: my-api:1.0

  postgres:
    image: postgres:17
```

Compose puede levantar:

```text
api container
postgres container
```

como parte de la misma aplicación.

---

# 💤 Detached Mode

También puedes utilizar:

```bash
docker compose up -d
```

La opción `-d` ejecuta los servicios en **detached mode**, dejando los containers ejecutándose en segundo plano.

| Comando                | Comportamiento                      |
| ---------------------- | ----------------------------------- |
| `docker compose up`    | Terminal permanece mostrando output |
| `docker compose up -d` | Services ejecutándose en background |

---

# 🛑 Detener la aplicación

Para detener los servicios:

```bash
docker compose stop
```

Esto detiene los containers, pero no necesariamente elimina los recursos creados por Compose.

```text
Running
   ↓
docker compose stop
   ↓
Stopped
```

---

# 🗑️ `docker compose down`

Para detener y eliminar los recursos principales creados por Compose:

```bash
docker compose down
```

Conceptualmente:

```text
Running Services
      ↓
docker compose down
      ↓
Containers removed
Network removed
```

> [!WARNING]
> Los detalles sobre volumes y su eliminación dependen de cómo ejecutes el comando y de la configuración, así que **`down` no debe interpretarse simplemente como "borra absolutamente todo"**.

---

# 🔄 `up` vs `down`

La relación fundamental:

```text
compose.yaml
     │
     ▼
docker compose up
     │
     ▼
Application Running
     │
     ▼
docker compose down
     │
     ▼
Application Resources Removed
```

Esto hace que trabajar con una aplicación de varios containers sea mucho más sencillo.

---

# 🆚 Sin Compose vs con Compose

## ❌ Sin Compose

Imagina:

```text
API
PostgreSQL
Redis
```

Podrías terminar haciendo:

```text
docker run API
       ↓
docker run PostgreSQL
       ↓
docker run Redis
```

Y además configurando manualmente:

```text
Networks
Ports
Volumes
Environment Variables
Container names
```

Conceptualmente:

```text
Docker CLI

docker run
docker run
docker run
docker network ...
docker volume ...
      ↓
Muchos comandos
```

---

## ✅ Con Compose

Defines la aplicación:

```text
compose.yaml
      ↓
docker compose up
      ↓
API
PostgreSQL
Redis
```

Toda la configuración queda descrita en un mismo archivo.

---

# 🧠 Compose como definición de la aplicación

Una de las ideas más importantes es que `compose.yaml` puede convertirse en una especie de **documentación ejecutable de la arquitectura local**.

Por ejemplo:

```yaml
services:

  api:
    image: my-api:1.0

  postgres:
    image: postgres:17

  redis:
    image: redis:7
```

Al leerlo puedes identificar rápidamente:

```text
Application
│
├── API
├── PostgreSQL
└── Redis
```

No necesitas recordar todos los comandos utilizados para crear esa infraestructura.

---

# 🔗 Compose y lo que ya estudiaste

Docker Compose reúne muchos conceptos anteriores:

| Concepto                 | Uso                        |
| ------------------------ | -------------------------- |
| 📦 Containers            | Ejecutar los servicios     |
| 🌐 Networks              | Communication              |
| 💾 Volumes               | Persistent Data            |
| 🖼️ Images               | Base de los containers     |
| 🔌 Ports                 | Exponer servicios          |
| 🔐 Environment Variables | Configuración              |
| 🔗 Dependencies          | Relaciones entre servicios |

Conceptualmente:

```text
                    compose.yaml
                         │
        ┌────────────────┼────────────────┐
        ▼                ▼                ▼
    Containers        Networks         Volumes
        │                │                │
        ▼                ▼                ▼
       API            Communication    Persistent Data
```

También puede definir:

```text
Images
Ports
Environment Variables
Volumes
Networks
Dependencies
```

Por eso Compose es especialmente útil cuando tu aplicación deja de ser un único container.

---

# 🏗️ Flujo mental

Piensa en Compose de esta manera:

```text
Developer
    ↓
compose.yaml
    ↓
docker compose up
    ↓
Docker Engine
    ↓
┌───────────────┐
│ Application   │
│               │
│ API           │
│ PostgreSQL    │
│ Redis         │
└───────────────┘
```

Y para detenerla:

```text
Application
     ↓
docker compose down
     ↓
Compose-managed resources
     ↓
Removed
```

---

# 🔥 La idea fundamental

La diferencia que debes conservar es:

```text
Docker CLI

docker run
docker run
docker run
      ↓
Administración manual
```

vs.

```text
Docker Compose

compose.yaml
      ↓
docker compose up
      ↓
Toda la aplicación
```

> [!IMPORTANT]
> **Docker Compose no reemplaza Docker.** Se apoya en Docker para definir y administrar de manera más cómoda una aplicación compuesta por múltiples containers.
>
> La idea clave es:
>
> > **Docker CLI te permite administrar recursos de Docker; Docker Compose te permite describir y levantar una aplicación completa formada por varios servicios.**
