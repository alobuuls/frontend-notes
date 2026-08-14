# 📄 01 - Docker CLI

> [!NOTE]
> Aquí estudias **qué es la Docker CLI, cómo funciona y cómo leer los comandos de Docker**.

---

## 📑 ÍNDICE

1. 🐳 [¿Qué es Docker CLI?](#-qué-es-docker-cli)
2. 🔗 [Docker CLI y Docker Engine](#-docker-cli-y-docker-engine)
3. 🧩 [¿Qué es un comando Docker?](#-qué-es-un-comando-docker)
4. 📦 [Commands y Subcommands](#-commands-y-subcommands)
5. 📋 [`--help`](#-help)
6. 🔍 [`docker version`](#-docker-version)
7. ℹ️ [`docker info`](#-docker-info)
8. ⚙️ [Options / Flags](#️-options--flags)
9. 🚩 [Flags importantes](#-flags-importantes)
   - [`-d`](#-d)
   - [`-p`](#-p)
   - [`-e`](#-e)
   - [`-v`](#-v)
   - [`--name`](#--name)
10. 🧠 [Leer un comando Docker](#-leer-un-comando-docker)
11. 🆚 [Comandos modernos y aliases](#-comandos-modernos-y-aliases)
12. 🔄 [Flujo general](#-flujo-general)
13. 🧠 [La idea central](#-la-idea-central)

---
# 🐳 ¿Qué es Docker CLI?

La **Docker CLI (Command Line Interface)** es la herramienta de línea de comandos que utilizas para interactuar con Docker.

Cuando escribes:

```bash
docker
```

estás utilizando la CLI para enviar instrucciones a Docker.

La CLI permite realizar operaciones como:

| Operaciones           |
| --------------------- |
| Crear containers      |
| Construir Images      |
| Listar recursos       |
| Eliminar recursos     |
| Consultar información |
| Gestionar Networks    |
| Gestionar Volumes     |

> [!IMPORTANT]
> **La Docker CLI no es Docker Engine.**
>
> La CLI es el **cliente** que utilizas para comunicarte con Docker Engine.

---

# 🔗 Docker CLI y Docker Engine

La relación conceptual es:

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

Por ejemplo, cuando ejecutas:

```bash
docker ps
```

la CLI no está buscando directamente los containers por su cuenta.

Conceptualmente:

```text
docker ps
   ↓
Docker CLI
   ↓
Docker Engine
   ↓
Containers
   ↓
Información
```

> 💡 **Idea clave:** La CLI es el **cliente** mediante el cual le das instrucciones a Docker Engine.

---

# 🧩 ¿Qué es un comando Docker?

Un comando Docker es una instrucción que le indica a Docker qué operación quieres realizar.

La estructura general es:

```bash
docker <command> <subcommand> [options]
```

Por ejemplo:

```bash
docker container ls
```

puede entenderse como:

| Parte       | Significado                  |
| ----------- | ---------------------------- |
| `docker`    | Docker CLI                   |
| `container` | Objeto que quieres gestionar |
| `ls`        | Operación                    |

Otro ejemplo:

```bash
docker image ls
```

```text
docker
   ↓
image
   ↓
ls
```

Aquí estás trabajando con **Images**.

---

# 📦 Commands y Subcommands

Docker organiza muchos comandos por el tipo de recurso que quieres administrar.

```text
docker
   │
   ├── container
   │      ├── ls
   │      ├── start
   │      ├── stop
   │      └── rm
   │
   ├── image
   │      ├── ls
   │      ├── build
   │      └── rm
   │
   ├── network
   │
   └── volume
```

Esto te permite identificar rápidamente **sobre qué recurso estás trabajando**.

Los comandos específicos de Images y Containers los estudiarás posteriormente.

---

# 📋 `--help`

Una de las herramientas más importantes de la CLI es:

```bash
docker --help
```

Muestra información sobre los comandos disponibles.

Por ejemplo:

```bash
docker --help
```

te permite descubrir:

```text
docker container
docker image
docker network
docker volume
...
```

También puedes pedir ayuda sobre un comando concreto:

```bash
docker container --help
```

o sobre una operación:

```bash
docker container run --help
```

> [!TIP]
> Esto es muy importante porque **no necesitas memorizar todos los comandos ni todas sus opciones**.
>
> Puedes consultar la documentación directamente desde la CLI.

---

# 🔍 `docker version`

```bash
docker version
```

Muestra información sobre las versiones de los componentes de Docker.

Conceptualmente permite comprobar:

```text
Docker Client
      +
Docker Server / Engine
```

Esto puede ayudarte a detectar problemas relacionados con versiones o comunicación entre el cliente y el Engine.

---

# ℹ️ `docker info`

```bash
docker info
```

Muestra información general sobre el entorno Docker.

Por ejemplo, información relacionada con:

| Información   |
| ------------- |
| Containers    |
| Images        |
| Docker Engine |
| Storage       |
| Plugins       |
| Runtime       |
| System        |

Es especialmente útil cuando quieres conocer **el estado y configuración general del entorno Docker**.

---

# ⚙️ Options / Flags

Los comandos pueden recibir **options o flags** para modificar su comportamiento.

Por ejemplo:

```bash
docker run -d nginx
```

Aquí:

```text
-d
 ↓
Flag / option
```

Las flags suelen escribirse con:

```text
--flag
```

o con una forma corta:

```text
-f
```

Dependiendo del comando, algunas opciones pueden tener valores:

```bash
--name my-container
```

| Parte          | Significado |
| -------------- | ----------- |
| `--name`       | Option      |
| `my-container` | Value       |

---

# 🚩 Flags importantes

No necesitas memorizarlas todas todavía, pero sí reconocer algunas muy comunes.

### `-d`

Ejecuta un container en **detached mode**, es decir, en segundo plano.

```bash
docker run -d nginx
```

Conceptualmente:

```text
Terminal
   ↓
docker run
   ↓
Container
   ↓
Running in background
```

---

### `-p`

Permite publicar/mapear un puerto del container hacia el host.

```bash
docker run -p 8080:80 nginx
```

Conceptualmente:

```text
Host
8080
  ↓
Container
80
```

La explicación profunda de port mapping irá cuando estudies Containers y Networking.

---

### `-e`

Permite establecer una **environment variable** para el container.

```bash
docker run -e NODE_ENV=production my-api
```

Conceptualmente:

```text
NODE_ENV=production
        ↓
    Container
```

---

### `-v`

Permite configurar un **volume o bind mount**, dependiendo de la sintaxis utilizada.

```bash
docker run -v data:/app/data my-api
```

Conceptualmente:

```text
Storage
   ↓
Container
   ↓
/app/data
```

El funcionamiento profundo de Storage y Volumes lo estudiarás posteriormente.

---

### `--name`

Permite asignarle un nombre específico a un container.

```bash
docker run --name my-api nginx
```

En lugar de depender de un nombre generado automáticamente:

```text
Container
    ↓
my-api
```

Esto facilita posteriormente identificarlo y trabajar con él.

---

# 🧠 Leer un comando Docker

Por ejemplo:

```bash
docker run -d --name my-api -p 8080:3000 my-api:1.0
```

Puedes interpretarlo conceptualmente como:

| Parte           | Significado                   |
| --------------- | ----------------------------- |
| `docker`        | CLI                           |
| `run`           | Crear y ejecutar un container |
| `-d`            | Background                    |
| `--name my-api` | Nombre del container          |
| `-p 8080:3000`  | Mapeo de puertos              |
| `my-api:1.0`    | Image utilizada               |

> 💡 No necesitas memorizar todavía cada detalle.
>
> Lo importante es aprender a **leer la estructura del comando**.

---

# 🆚 Comandos modernos y aliases

Docker tiene comandos organizados por objetos:

```bash
docker container ls
docker image ls
```

Pero también existen formas abreviadas muy utilizadas:

```bash
docker ps
docker images
```

Por ejemplo:

```text
docker container ls
        ↕
     docker ps
```

y:

```text
docker image ls
        ↕
    docker images
```

Estas formas pueden ser aliases o comandos heredados muy comunes.

> [!NOTE]
> **Docker ofrece diferentes formas de ejecutar determinadas operaciones, pero conceptualmente estás gestionando el mismo recurso.**

---

# 🔄 Flujo general

Cuando utilizas Docker desde la terminal:

```text
Developer
    ↓
Docker CLI
    ↓
Docker API
    ↓
Docker Engine
    ↓
Images / Containers / Networks / Volumes
```

Por ejemplo:

```text
docker container ls
        ↓
Docker CLI
        ↓
Docker Engine
        ↓
Containers
```

O:

```text
docker image ls
        ↓
Docker CLI
        ↓
Docker Engine
        ↓
Images
```

---

# 🧠 La idea central

Cuando escribas:

```bash
docker <command> <subcommand> [options]
```

piensa:

| Parte                | Pregunta                   |
| -------------------- | -------------------------- |
| `docker`             | ¿Quiero hablar con Docker? |
| `command / resource` | ¿Con qué quiero trabajar?  |
| `subcommand`         | ¿Qué quiero hacer?         |
| `options`            | ¿Cómo quiero hacerlo?      |

Por ejemplo:

```bash
docker container ls -a
```

se puede leer como:

```text
Docker
  ↓
Containers
  ↓
List
  ↓
Con una opción adicional
```

Y:

```bash
docker image ls
```

como:

```text
Docker
  ↓
Images
  ↓
List
```

> [!IMPORTANT]
> **La Docker CLI es la interfaz de comandos que utilizas para comunicarte con Docker Engine y administrar recursos como Images, Containers, Networks y Volumes.**
