# 📄 02 - Docker Containers

## 📑 ÍNDICE

- [📄 02 - Docker Containers](#-02---docker-containers)
  - [📑 ÍNDICE](#-índice)
  - [📦 ¿Qué es un Container?](#-qué-es-un-container)
  - [🧠 Container vs Image](#-container-vs-image)
- [▶️ Container Lifecycle](#️-container-lifecycle)
    - [🆕 Created](#-created)
    - [🟢 Running](#-running)
    - [🛑 Stopped](#-stopped)
    - [🗑️ Removed](#️-removed)
- [🔄 Operaciones del ciclo de vida](#-operaciones-del-ciclo-de-vida)
- [🧩 Container vs Application](#-container-vs-application)
- [🔒 Aislamiento](#-aislamiento)
- [💾 Container Filesystem](#-container-filesystem)
- [🗑️ ¿Qué pasa con los datos cuando eliminas el Container?](#️-qué-pasa-con-los-datos-cuando-eliminas-el-container)
- [🔄 Ephemeral Containers](#-ephemeral-containers)
- [💿 ¿Entonces dónde guardo los datos?](#-entonces-dónde-guardo-los-datos)
- [🔄 Image → Container → Storage](#-image--container--storage)

## 📦 ¿Qué es un Container?

Un **Docker Container** es una **instancia ejecutable de una Docker Image**.

La relación fundamental es:

```text
Docker Image
      ↓
   docker run
      ↓
Docker Container
```

Si tienes una image de Node.js:

```text
node:22
   ↓
Container
   ↓
Node.js
   ↓
Express Application
```

La **Image** funciona como la plantilla y el **Container** es una instancia creada a partir de ella.

Por ejemplo, una misma image puede utilizarse para crear varios containers:

```text
        node:22
           │
     ┌─────┼─────┐
     ▼     ▼     ▼
 Container Container Container
```

---

## 🧠 Container vs Image

Es importante no confundirlos.

| 📦 Image                                                   | ▶️ Container                              |
| ---------------------------------------------------------- | ----------------------------------------- |
| Es la plantilla inmutable utilizada para crear containers. | Es una instancia ejecutable de esa image. |
| `Image → Plantilla`                                        | `Container → Instancia en ejecución`      |

Por ejemplo:

```text
my-api:1.0
    │
    ├── api-container-1
    ├── api-container-2
    └── api-container-3
```

Los tres containers pueden haber sido creados a partir de la misma image.

---

# ▶️ Container Lifecycle

Un container tiene un **ciclo de vida**.

```text
Created
   ↓
Running
   ↓
Stopped
   ↓
Removed
```

Cada estado representa una situación diferente.

### 🆕 Created

El container ya fue creado, pero todavía no está ejecutando su proceso principal.

```text
Image
  ↓
Container
  ↓
Created
```

### 🟢 Running

El container está ejecutándose.

```text
Container
   ↓
Running
   ↓
Application / Process
```

Mientras está en este estado, Docker mantiene funcionando el proceso principal del container.

### 🛑 Stopped

El container dejó de ejecutarse, pero todavía existe.

```text
Running
   ↓
Stopped
```

Puedes volver a iniciarlo posteriormente.

### 🗑️ Removed

El container fue eliminado.

```text
Stopped
   ↓
Removed
```

Una vez eliminado, ese container deja de existir como objeto de Docker.

> [!TIP]
> **Detener un container y eliminar un container no son lo mismo.**

```text
stop
  ↓
deja de ejecutarse

remove
  ↓
deja de existir
```

---

# 🔄 Operaciones del ciclo de vida

Conceptualmente, Docker permite:

```text
Create
   ↓
Start
   ↓
Running
   ↓
Stop
   ↓
Start nuevamente
   ↓
Running
```

O finalmente:

```text
Stop
  ↓
Remove
```

También puedes reiniciar un container:

```text
Running
   ↓
Restart
   ↓
Running
```

Los comandos concretos para realizar estas operaciones se estudiarán posteriormente en:

```text
📁 03 - DOCKER CLI
```

> 💡 Aquí lo importante es comprender **qué ocurre con el container**, no memorizar comandos.

---

# 🧩 Container vs Application

Un container **no es simplemente "la aplicación"**.

> **Un entorno aislado en el que se ejecuta uno o varios procesos.**

Por ejemplo:

```text
Container
   │
   ├── Filesystem
   ├── Environment
   ├── Network
   └── Process
          ↓
     Express App
```

La aplicación se ejecuta **dentro** del container.

```text
Container
      ↓
Application Process
```

Por eso puedes tener:

| Container   | Servicio    |
| ----------- | ----------- |
| Container A | Express API |
| Container B | PostgreSQL  |
| Container C | Redis       |

Cada servicio puede ejecutarse de forma aislada.

Esto será especialmente importante cuando estudies posteriormente **Docker Compose** y arquitecturas con múltiples containers.

---

# 🔒 Aislamiento

Los containers proporcionan un entorno aislado para los procesos que ejecutan.

Conceptualmente:

```text
Host
 │
 ├── Container A
 │      ↓
 │   Node.js
 │
 ├── Container B
 │      ↓
 │   PostgreSQL
 │
 └── Container C
        ↓
      Redis
```

Cada container tiene su propio entorno de ejecución, aunque todos utilizan los recursos del sistema host mediante Docker.

> 🧠 El aislamiento permite ejecutar diferentes aplicaciones o versiones sin tener que instalarlas directamente en el sistema host de la misma manera.

---

# 💾 Container Filesystem

Un container tiene su propio filesystem:

```text
Container
    ↓
Filesystem
    ├── Application
    ├── Dependencies
    ├── Configuration
    └── Temporary Data
```

La aplicación puede leer y escribir dentro de ese filesystem mientras el container existe.

Por ejemplo:

```text
Container
   ↓
/app
   ↓
files
logs
temporary data
```

> ⚠️ **El filesystem del container es efímero.**

---

# 🗑️ ¿Qué pasa con los datos cuando eliminas el Container?

Imagina:

```text
Container
   ↓
/app/uploads
   ↓
photo.jpg
```

Si eliminas el container:

```text
Container
   ↓
❌ Removed
```

Los datos almacenados únicamente dentro de ese filesystem pueden desaparecer junto con el container.

```text
Container
   ↓
Filesystem
   ↓
Data
   ↓
Remove Container
   ↓
❌ Data perdida
```

> ⚠️ **Por eso no debes utilizar el filesystem interno del container como almacenamiento persistente para datos importantes.**

---

# 🔄 Ephemeral Containers

Por esta razón se dice que los containers son **ephemeral**, es decir, temporales.

El container puede ser:

```text
Created
   ↓
Running
   ↓
Stopped
   ↓
Removed
```

Y posteriormente puedes crear otro container a partir de la misma image:

```text
Docker Image
      │
      ├── Container A
      │       ↓
      │    Removed
      │
      └── Container B
```

El nuevo container puede comenzar nuevamente desde la image.

> 🧠 **El container puede ser reemplazado; los datos importantes deben vivir fuera de él.**

---

# 💿 ¿Entonces dónde guardo los datos?

Cuando necesitas que los datos sobrevivan al ciclo de vida del container, utilizas mecanismos de **persistencia**, principalmente:

```text
Container
     │
     ▼
  Volume
     │
     ▼
Persistent Data
```

Por ejemplo:

```text
PostgreSQL Container
       ↓
     Volume
       ↓
Database Data
```

Aunque elimines y vuelvas a crear el container, los datos pueden permanecer almacenados en el volume.

Esto prepara el terreno para:

```text
📁 06 - STORAGE
```

donde estudiarás **Volumes, Bind Mounts y otros mecanismos de almacenamiento de Docker**.

---

# 🔄 Image → Container → Storage

Puedes conectar los conceptos que ya estudiaste:

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
    │
    ├── Application
    ├── Process
    ├── Filesystem
    └── Network
```

Y cuando necesitas conservar datos:

```text
Container
    ↓
Volume
    ↓
Persistent Data
```

La idea completa es:

```text
           Docker Image
                ↓
           Docker Run
                ↓
           Container
                ↓
        Application Process
                │
        ┌───────┴────────┐
        ▼                ▼
   Ephemeral FS       Volume
        │                │
   Temporary Data   Persistent Data
```

> 🐳 **Un container está pensado principalmente como un entorno de ejecución reemplazable. La aplicación puede desaparecer con el container; los datos que necesites conservar deben almacenarse mediante mecanismos persistentes como volumes.**
