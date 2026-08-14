# 📄 03 - Container Commands

> [!NOTE]
> Aquí estudias cómo **crear, ejecutar y administrar Docker Containers desde la CLI**.
>
> Los containers son probablemente la parte de Docker que más vas a utilizar en el día a día, por lo que conviene entender primero **qué hace cada comando** y después memorizar los más frecuentes.

---

## 📑 ÍNDICE

- [� 03 - Container Commands](#-03---container-commands)
  - [📑 ÍNDICE](#-índice)
- [🚀 Crear y ejecutar un Container](#-crear-y-ejecutar-un-container)
- [🏗️ `docker create` vs `docker run`](#️-docker-create-vs-docker-run)
    - [`docker create`](#docker-create)
    - [`docker run`](#docker-run)
- [📋 Ver Containers](#-ver-containers)
  - [`docker ps`](#docker-ps)
  - [`docker ps -a`](#docker-ps--a)
- [⏯️ Iniciar, detener y reiniciar](#️-iniciar-detener-y-reiniciar)
    - [▶️ `docker start`](#️-docker-start)
    - [⏹️ `docker stop`](#️-docker-stop)
    - [🔄 `docker restart`](#-docker-restart)
- [🗑️ Eliminar Containers](#️-eliminar-containers)
  - [`docker rm`](#docker-rm)
  - [`docker rm -f`](#docker-rm--f)
- [🏷️ Nombrar Containers](#️-nombrar-containers)
- [🔌 Publicar Ports](#-publicar-ports)
- [💤 Detached Mode](#-detached-mode)
    - [Foreground](#foreground)
    - [Detached](#detached)
- [📊 Entender `docker ps`](#-entender-docker-ps)
    - [🖼️ IMAGE](#️-image)
    - [🟢 STATUS](#-status)
    - [🔌 PORTS](#-ports)
    - [🏷️ NAMES](#️-names)
- [📋 Tabla de comandos](#-tabla-de-comandos)
- [🔄 Container Lifecycle](#-container-lifecycle)
    - [🧠 La idea clave](#-la-idea-clave)

---

# 🚀 Crear y ejecutar un Container

El comando principal es:

```bash
docker run nginx
```

`docker run` toma una **Image** y crea un Container a partir de ella para después iniciarlo.

```text
Image
  ↓
docker run
  ↓
Container
  ↓
Running
```

Por ejemplo:

```bash
docker run nginx
```

Docker:

1. Busca la Image `nginx` localmente.
2. Si no existe, intenta obtenerla de un Registry.
3. Crea un Container.
4. Inicia el Container.

---

# 🏗️ `docker create` vs `docker run`

Son parecidos, pero **no hacen exactamente lo mismo**.

| Comando         | Qué hace                                 |
| --------------- | ---------------------------------------- |
| `docker create` | Crea el Container, pero **no lo inicia** |
| `docker run`    | Hace **create + start**                  |

### `docker create`

```bash
docker create nginx
```

```text
Image
  ↓
docker create
  ↓
Container
  ↓
Created
```

### `docker run`

```bash
docker run nginx
```

```text
Image
  ↓
docker run
  ↓
Create
  ↓
Start
  ↓
Running
```

> 💡 Por eso normalmente utilizarás mucho más `docker run`.

---

# 📋 Ver Containers

## `docker ps`

Muestra los Containers que están **actualmente ejecutándose**:

```bash
docker ps
```

Por ejemplo:

```text
CONTAINER ID   IMAGE   STATUS       PORTS     NAMES
a81f3c2d91ab   nginx   Up 2 minutes 80/tcp    web
```

---

## `docker ps -a`

Muestra **todos los Containers**, incluidos los detenidos:

```bash
docker ps -a
```

Por ejemplo:

```text
CONTAINER ID   IMAGE   STATUS
a81f3c2d91ab   nginx   Up 2 minutes
b72a4c1e82bc   nginx   Exited
```

| Comando        | Resultado            |
| -------------- | -------------------- |
| `docker ps`    | Containers running   |
| `docker ps -a` | Todos los Containers |

---

# ⏯️ Iniciar, detener y reiniciar

Una vez creado un Container, puedes controlar su ciclo de vida.

### ▶️ `docker start`

Inicia un Container que estaba detenido:

```bash
docker start my-container
```

```text
Stopped
   ↓
docker start
   ↓
Running
```

---

### ⏹️ `docker stop`

Detiene un Container:

```bash
docker stop my-container
```

```text
Running
   ↓
docker stop
   ↓
Stopped
```

Docker intenta detener el proceso de manera ordenada.

---

### 🔄 `docker restart`

Reinicia un Container:

```bash
docker restart my-container
```

Conceptualmente:

```text
Running
   ↓
Stop
   ↓
Start
   ↓
Running
```

---

# 🗑️ Eliminar Containers

## `docker rm`

Elimina un Container:

```bash
docker rm my-container
```

Normalmente el Container debe estar detenido.

```text
Container
    ↓
docker rm
    ↓
❌ Container eliminado
```

> [!WARNING]
> Eliminar un Container **no elimina automáticamente la Image** de la que fue creado.

---

## `docker rm -f`

Fuerza la eliminación:

```bash
docker rm -f my-container
```

Puede detener y eliminar un Container que está ejecutándose.

---

# 🏷️ Nombrar Containers

Cuando ejecutas:

```bash
docker run nginx
```

Docker puede generar automáticamente un nombre para el Container.

Puedes definirlo tú mismo:

```bash
docker run --name my-api nginx
```

Ahora puedes utilizar:

```bash
docker start my-api
docker stop my-api
docker rm my-api
```

en lugar de trabajar con el ID del Container.

Conceptualmente:

```text
docker run --name my-api nginx
                ↓
        Container: my-api
```

---

# 🔌 Publicar Ports

Un Container puede tener un servicio escuchando en un puerto interno, pero eso **no significa automáticamente que puedas acceder a él desde tu máquina**.

Por ejemplo:

```bash
docker run -p 8080:80 nginx
```

La estructura es:

```text
-p HOST_PORT:CONTAINER_PORT
```

Por lo tanto:

```text
Host
8080
  ↓
Container
80
```

Puedes acceder desde tu máquina mediante:

```text
http://localhost:8080
```

Mientras Nginx continúa escuchando en:

```text
Container → 80
```

> [!NOTE]
> ⚠️ El networking se estudiará con más profundidad posteriormente.

---

# 💤 Detached Mode

Por defecto:

```bash
docker run nginx
```

mantiene el proceso asociado a tu terminal.

Puedes ejecutarlo en segundo plano utilizando:

```bash
docker run -d nginx
```

`-d` significa **detached mode**.

### Foreground

```bash
docker run nginx
```

```text
Terminal
   ↓
Container
   ↓
Running
```

La terminal queda asociada al proceso.

### Detached

```bash
docker run -d nginx
```

```text
Terminal
   ↓
docker run -d
   ↓
Container
   ↓
Running in background
```

Después puedes comprobarlo con:

```bash
docker ps
```

---

# 📊 Entender `docker ps`

Cuando ejecutas:

```bash
docker ps
```

verás información como:

```text
CONTAINER ID
IMAGE
COMMAND
CREATED
STATUS
PORTS
NAMES
```

Por ejemplo:

```text
CONTAINER ID   IMAGE   COMMAND   CREATED   STATUS   PORTS      NAMES
a81f3c2d91ab   nginx   ...       2 min     Up       0.0.0.0:8080->80/tcp   my-web
```

| Campo               | Significado                                        |
| ------------------- | -------------------------------------------------- |
| 🆔 **CONTAINER ID** | Identificador único del Container                  |
| 🖼️ **IMAGE**       | Image utilizada para crear el Container            |
| ⚙️ **COMMAND**      | Proceso/comando principal que ejecuta el Container |
| 🕐 **CREATED**      | Cuándo fue creado                                  |
| 🟢 **STATUS**       | Estado actual                                      |
| 🔌 **PORTS**        | Ports publicados entre el Host y el Container      |
| 🏷️ **NAMES**       | Nombre del Container                               |

### 🖼️ IMAGE

```text
IMAGE
  ↓
nginx
```

### 🟢 STATUS

Ejemplos:

```text
Up
Exited
Created
```

### 🔌 PORTS

Por ejemplo:

```text
8080 → 80
```

### 🏷️ NAMES

Por ejemplo:

```text
my-web
```

---

# 📋 Tabla de comandos

| Comando             | ¿Para qué sirve?                      | Ejemplo                          |
| ------------------- | ------------------------------------- | -------------------------------- |
| `docker run`        | Crea y ejecuta un Container           | `docker run nginx`               |
| `docker create`     | Crea un Container sin iniciarlo       | `docker create nginx`            |
| `docker ps`         | Muestra Containers ejecutándose       | `docker ps`                      |
| `docker ps -a`      | Muestra todos los Containers          | `docker ps -a`                   |
| `docker start`      | Inicia un Container detenido          | `docker start my-api`            |
| `docker stop`       | Detiene un Container                  | `docker stop my-api`             |
| `docker restart`    | Reinicia un Container                 | `docker restart my-api`          |
| `docker rm`         | Elimina un Container detenido         | `docker rm my-api`               |
| `docker rm -f`      | Fuerza la eliminación de un Container | `docker rm -f my-api`            |
| `docker run --name` | Asigna un nombre al Container         | `docker run --name my-api nginx` |
| `docker run -d`     | Ejecuta en segundo plano              | `docker run -d nginx`            |
| `docker run -p`     | Publica un puerto                     | `docker run -p 8080:80 nginx`    |

---

# 🔄 Container Lifecycle

Todos estos comandos se conectan con el ciclo de vida:

```text
              docker create
                    ↓
                CREATED
                    │
                    │ docker start
                    ▼
                RUNNING
                 ↙     ↘
        docker stop   docker restart
             ↓            ↓
          STOPPED      RUNNING
             │
             │ docker rm
             ▼
          REMOVED
```

Y el flujo más habitual será:

```text
Docker Image
     ↓
docker run
     ↓
Container
     ↓
Running
     ↓
docker stop
     ↓
Stopped
     ↓
docker start
     ↓
Running
```

### 🧠 La idea clave

No confundas el ciclo de vida de una **Image** con el de un **Container**:

```text
IMAGE
  ↓
docker run
  ↓
CONTAINER
  ↓
start / stop / restart / rm
```

> [!IMPORTANT]
> La **Image** sirve como base para crear Containers, mientras que los comandos anteriores administran las instancias creadas a partir de ella.
