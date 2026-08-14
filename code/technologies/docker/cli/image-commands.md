# 📄 02 - Image Commands

> [!NOTE]
> Aquí estudias **cómo administrar Docker Images utilizando la Docker CLI**.
>
> Las Images son uno de los objetos principales de Docker, y la CLI permite **listarlas, descargarlas, construirlas, etiquetarlas, inspeccionarlas y eliminarlas**.

---

## 📑 ÍNDICE

1. 📦 [Ver Docker Images](#-ver-docker-images)
2. ⬇️ [Descargar una Image](#️-descargar-una-image)
3. 🏷️ [Pull con un Tag](#️-pull-con-un-tag)
4. 🏗️ [Construir una Image](#️-construir-una-image)
5. 📍 [El `.` de `docker build`](#-el--de-docker-build)
6. 🏷️ [Crear un Tag](#️-crear-un-tag)
7. 🧠 [Repository + Tag](#-repository--tag)
8. 🗑️ [Eliminar una Image](#-eliminar-una-image)
9. 🧹 [`docker image prune`](#-docker-image-prune)
10. 🔎 [Inspeccionar una Image](#-inspeccionar-una-image)
11. 📊 [Ver el historial de una Image](#-ver-el-historial-de-una-image)
12. 🔄 [Ciclo de una Docker Image](#-ciclo-de-una-docker-image)
13. 🧠 [Cómo pensar en los Image Commands](#-cómo-pensar-en-los-image-commands)

---

# 📦 Ver Docker Images

Para listar las Images disponibles localmente:

```bash
docker image ls
```

Esto muestra información como:

| Información  |
| ------------ |
| `REPOSITORY` |
| `TAG`        |
| `IMAGE ID`   |
| `CREATED`    |
| `SIZE`       |

Por ejemplo:

```text
REPOSITORY   TAG       IMAGE ID       SIZE
node         22        abc123         1.1GB
nginx        latest    def456         190MB
my-api       1.0       ghi789         350MB
```

También existe la forma abreviada:

```bash
docker images
```

Conceptualmente:

```text
Docker Engine
      ↓
Local Images
      ↓
docker image ls
      ↓
Listado
```

---

# ⬇️ Descargar una Image

Puedes obtener una Image desde un Registry utilizando:

```bash
docker pull nginx
```

El flujo es:

```text
Docker Registry
      ↓
  docker pull
      ↓
Local Docker
      ↓
Docker Image
```

Por ejemplo:

```bash
docker pull node:22
```

Docker buscará:

| Parte      | Valor  |
| ---------- | ------ |
| Repository | `node` |
| Tag        | `22`   |

y descargará esa Image a tu entorno local.

Después puedes comprobar que existe:

```bash
docker image ls
```

---

# 🏷️ Pull con un Tag

También puedes especificar exactamente qué versión quieres:

```bash
docker pull node:22
```

o:

```bash
docker pull postgres:17
```

La estructura es:

```text
docker pull <repository>:<tag>
```

Por ejemplo:

```text
node:22
  │   │
  │   └── Tag
  │
  └────── Repository
```

Si no especificas un tag, Docker puede utilizar `latest` como valor predeterminado en muchos casos:

```bash
docker pull nginx
```

Conceptualmente:

```text
nginx
  ↓
nginx:latest
```

---

# 🏗️ Construir una Image

Una Image también puede construirse a partir de un **Dockerfile**.

El comando principal es:

```bash
docker build -t my-app:1.0 .
```

Aquí aparecen varias partes importantes:

| Parte           | Significado     |
| --------------- | --------------- |
| `docker`        | Docker          |
| `build`         | Construcción    |
| `-t my-app:1.0` | Tag de la Image |
| `.`             | Build context   |

El flujo completo:

```text
Dockerfile
    ↓
docker build
    ↓
Docker Image
```

Por ejemplo:

```text
my-app:1.0
```

Después podrás utilizar esa Image para crear un Container:

```text
my-app:1.0
      ↓
 docker run
      ↓
 Container
```

---

# 📍 El `.` de `docker build`

En:

```bash
docker build -t my-app:1.0 .
```

el `.` representa el **build context** actual.

Conceptualmente:

```text
.
↓
Directorio actual
↓
Build Context
↓
docker build
```

El build context contiene los archivos que Docker puede utilizar durante el proceso de construcción.

> [!TIP]
> Por eso es importante entender que:
>
> ```bash
> docker build .
> ```
>
> no significa simplemente:
>
> > "Busca el Dockerfile en cualquier lugar."
>
> Significa que estás indicando el contexto de construcción ubicado en el directorio actual.

---

# 🏷️ Crear un Tag

Puedes asignar otro tag a una Image utilizando:

```bash
docker tag my-app:1.0 my-app:latest
```

Esto no construye una nueva Image desde cero.

Conceptualmente:

```text
my-app:1.0
      │
      ├── 1.0
      └── latest
```

Puedes comprobar los tags:

```bash
docker image ls
```

Podrías encontrar:

```text
REPOSITORY   TAG
my-app       1.0
my-app       latest
```

Ambos tags pueden apuntar a la misma Image.

---

# 🧠 Repository + Tag

Cuando trabajas con Images, normalmente encontrarás nombres como:

```text
node:22
postgres:17
nginx:alpine
my-api:1.0
```

La estructura es:

```text
repository:tag
```

Por ejemplo:

```text
my-api:1.0
│     │
│     └── Tag
│
└──────── Repository
```

> 💡 El tag permite identificar diferentes versiones o variantes de una misma Image.

---

# 🗑️ Eliminar una Image

Para eliminar una Image:

```bash
docker image rm my-app:1.0
```

También puedes utilizar:

```bash
docker rmi my-app:1.0
```

La idea es:

```text
Local Image
     ↓
docker image rm
     ↓
Image removed
```

> [!WARNING]
> Una Image puede estar siendo utilizada por un Container. Dependiendo de la situación, Docker puede impedir su eliminación hasta que se resuelva esa dependencia.

---

# 🧹 `docker image prune`

Docker también permite eliminar Images que ya no son necesarias mediante:

```bash
docker image prune
```

Su objetivo es limpiar **Images no utilizadas que Docker considera eliminables según el criterio del comando**.

Conceptualmente:

```text
Unused Images
      ↓
docker image prune
      ↓
Cleanup
```

> [!WARNING]
> No debes pensar que `prune` significa:
>
> > "Borra todas mis Images."
>
> Es un comando de limpieza y debes entender qué recursos considera eliminables antes de utilizarlo.

---

# 🔎 Inspeccionar una Image

Para obtener información detallada de una Image:

```bash
docker image inspect nginx
```

Esto devuelve información estructurada sobre la Image.

Puedes encontrar información relacionada con:

| Información   |
| ------------- |
| Image ID      |
| Architecture  |
| OS            |
| Layers        |
| Configuration |
| Environment   |
| Entrypoint    |
| Cmd           |
| Metadata      |

Conceptualmente:

```text
Docker Image
     ↓
docker image inspect
     ↓
Detailed information
```

Es especialmente útil cuando necesitas saber **cómo está configurada una Image**.

---

# 📊 Ver el historial de una Image

Puedes consultar las capas y pasos que forman parte del historial de una Image:

```bash
docker image history nginx
```

Conceptualmente:

```text
Docker Image
     ↓
docker image history
     ↓
Layers / build history
```

Por ejemplo:

```text
IMAGE
CREATED
CREATED BY
SIZE
```

Esto conecta directamente con el concepto de **Image Layers**.

No necesitas estudiar todavía cómo Docker administra internamente el cache de cada layer; eso corresponde al documento dedicado a:

```text
📄 05 - layers-and-cache.md
```

---

# 🔄 Ciclo de una Docker Image

### ⬇️ Obtener una Image existente

```text
Registry
   ↓
docker pull
   ↓
Local Image
```

### 🏗️ Construir una Image

```text
Dockerfile
   ↓
docker build
   ↓
Image
```

### 🏷️ Etiquetar una Image

```text
Image
   ↓
docker tag
   ↓
Repository:Tag
```

### 🔎 Inspeccionar

```text
Image
   ↓
docker image inspect
   ↓
Information
```

### 🗑️ Eliminar

```text
Image
   ↓
docker image rm
   ↓
Removed
```

Y finalmente:

```text
Image
   ↓
docker run
   ↓
Container
```

---

# 🧠 Cómo pensar en los Image Commands

No necesitas memorizar comandos aislados. Piensa en las operaciones que puedes hacer sobre una Image:

```text
             IMAGE
               │
     ┌─────────┼─────────┐
     ▼         ▼         ▼
   Obtener   Construir  Inspeccionar
   pull      build      inspect
     │         │         │
     ▼         ▼         ▼
   Registry  Dockerfile  Metadata

               │
          ┌────┴────┐
          ▼         ▼
        tag        rm
        │          │
        ▼          ▼
     Versionar   Eliminar
```

Así, cuando veas un comando como:

| Comando                | ¿Para qué sirve?                                            | Ejemplo                               |
| ---------------------- | ----------------------------------------------------------- | ------------------------------------- |
| `docker image ls`      | 📋 Lista las Images locales                                 | `docker image ls`                     |
| `docker images`        | 📋 Alias común para listar Images                           | `docker images`                       |
| `docker pull`          | ⬇️ Descarga una Image desde un Registry                     | `docker pull nginx`                   |
| `docker build`         | 🏗️ Construye una Image desde un Dockerfile                 | `docker build -t my-app:1.0 .`        |
| `docker tag`           | 🏷️ Crea otro tag para una Image                            | `docker tag my-app:1.0 my-app:latest` |
| `docker image inspect` | 🔎 Muestra información detallada de una Image               | `docker image inspect nginx`          |
| `docker image history` | 📊 Muestra el historial/layers de una Image                 | `docker image history nginx`          |
| `docker image rm`      | 🗑️ Elimina una Image local                                 | `docker image rm nginx`               |
| `docker rmi`           | 🗑️ Alias común de `docker image rm`                        | `docker rmi nginx`                    |
| `docker image prune`   | 🧹 Limpia Images no utilizadas según el criterio de `prune` | `docker image prune`                  |

puedes identificar inmediatamente **qué operación estás realizando sobre una Docker Image**.
