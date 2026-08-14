# 📄 02 - Bind Mounts

> 🔥 **CONCEPTO FUNDAMENTAL:** Los **Bind Mounts** permiten conectar directamente una carpeta o archivo de tu computadora con una ubicación dentro de un container.
>
> Son especialmente útiles durante el **desarrollo local**, porque permiten que los cambios que haces en tu proyecto se reflejen dentro del container sin tener que reconstruir la Image.

---

## 📑 ÍNDICE

- [📄 02 - Bind Mounts](#-02---bind-mounts)
  - [� ÍNDICE](#-índice)
  - [🔗 ¿QUÉ ES UN BIND MOUNT?](#-qué-es-un-bind-mount)
- [🖥️ HOST VS CONTAINER](#️-host-vs-container)
- [📂 MONTAR UNA CARPETA](#-montar-una-carpeta)
- [📄 MONTAR UN ARCHIVO](#-montar-un-archivo)
- [🛠️ `-v`](#️--v)
- [🔧 `--mount`](#---mount)
    - [🆚 `-v` VS `--mount`](#--v-vs---mount)
- [🔥 DESARROLLO LOCAL](#-desarrollo-local)
- [⚡ HOT RELOAD](#-hot-reload)
- [💾 BIND MOUNT VS DOCKER VOLUME](#-bind-mount-vs-docker-volume)
    - [🔗 Bind Mount](#-bind-mount)
    - [💾 Docker Volume](#-docker-volume)
- [🧑‍💻 ¿CUÁNDO UTILIZAR BIND MOUNTS?](#-cuándo-utilizar-bind-mounts)
    - [🔥 Desarrollo](#-desarrollo)
    - [⚡ Hot Reload](#-hot-reload-1)
    - [⚙️ Configuración](#️-configuración)
    - [🧪 Testing / desarrollo](#-testing--desarrollo)
- [⚠️ CUIDADO CON LOS BIND MOUNTS](#️-cuidado-con-los-bind-mounts)
- [🧠 EL CONCEPTO QUE DEBES RECORDAR](#-el-concepto-que-debes-recordar)
    - [💡 EN UNA FRASE](#-en-una-frase)

## 🔗 ¿QUÉ ES UN BIND MOUNT?

Un **Bind Mount** monta una ruta específica del **Host** dentro del filesystem de un container.

```text id="l2q8r4"
HOST
  │
  │ Bind Mount
  ▼
CONTAINER
```

Por ejemplo:

```text id="m3p8az"
Mi PC
│
└── project/
     │
     │ Bind Mount
     ▼
   /app
   Container
```

La carpeta del host y la ubicación dentro del container representan el mismo contenido mientras el montaje esté activo.

---

# 🖥️ HOST VS CONTAINER

Debes diferenciar claramente ambos lados:

```text id="0v8w4d"
HOST
C:\projects\my-api
        │
        │ Bind Mount
        ▼
CONTAINER
/app
```

| Elemento       | Significado                                          |
| -------------- | ---------------------------------------------------- |
| **Host**       | Tu computadora                                       |
| **Container**  | El entorno donde se ejecuta la aplicación            |
| **Bind Mount** | Conecta una ruta del host con una ruta del container |

---

# 📂 MONTAR UNA CARPETA

Por ejemplo:

```bash id="p7j3cw"
docker run -v ./src:/app/src my-api
```

Conceptualmente:

```text id="h2p5nt"
HOST
./src
 │
 │ Bind Mount
 ▼
CONTAINER
/app/src
```

Si modificas un archivo:

```text id="a4t1nm"
./src/index.js
```

el container verá ese cambio en:

```text id="w5j7rx"
/app/src/index.js
```

> 💡 **TIP:** El cambio realizado en el Host se refleja dentro del container mientras el Bind Mount esté activo.

---

# 📄 MONTAR UN ARCHIVO

También puedes montar un archivo específico:

```bash id="8k6f1m"
docker run -v ./config.json:/app/config.json my-api
```

Conceptualmente:

```text id="c2s9ye"
HOST
config.json
    │
    │ Bind Mount
    ▼
CONTAINER
/app/config.json
```

Esto puede ser útil cuando quieres proporcionar un archivo de configuración concreto al container.

---

# 🛠️ `-v`

La forma corta de crear un Bind Mount es:

```bash id="h8q4nd"
docker run -v ./src:/app/src my-api
```

La estructura general es:

```text id="4g5t9c"
-v HOST_PATH:CONTAINER_PATH
```

Por ejemplo:

```bash id="j7k3p2"
docker run -v ./project:/app my-api
```

significa:

```text id="e8w1qx"
HOST
./project
    ↓
CONTAINER
/app
```

---

# 🔧 `--mount`

También puedes utilizar la sintaxis más explícita:

```bash id="n6f2sr"
docker run \
  --mount type=bind,source=./src,target=/app/src \
  my-api
```

La estructura conceptual es:

```text id="c9w4ab"
--mount
   │
   ├── type=bind
   ├── source=HOST_PATH
   └── target=CONTAINER_PATH
```

Por ejemplo:

```text id="r2k7vm"
source
   ↓
./src
   │
   │ Bind Mount
   ▼
target
   ↓
/app/src
```

### 🆚 `-v` VS `--mount`

Ambos pueden utilizarse para crear Bind Mounts.

| Sintaxis  | Característica         |
| --------- | ---------------------- |
| `-v`      | Sintaxis corta         |
| `--mount` | Sintaxis más explícita |

> 💡 **TIP:** Para aprender qué está ocurriendo, `--mount` puede resultar más fácil de leer porque deja claro qué representa cada propiedad.

---

# 🔥 DESARROLLO LOCAL

Este es uno de los usos más importantes de los Bind Mounts.

Supongamos que tienes:

```text id="f7w2kd"
my-api/
├── src/
├── package.json
└── Dockerfile
```

Puedes montar el proyecto:

```bash id="q8m3vz"
docker run \
  -v ./src:/app/src \
  my-api
```

Entonces:

```text id="d5s8hc"
Tu computadora
     │
     │ Bind Mount
     ▼
Container
     │
     ▼
/app/src
```

Cuando modificas:

```text id="x1q6rn"
src/app.js
```

el container puede ver inmediatamente el archivo actualizado.

No necesitas necesariamente:

```text id="v9y3km"
Modificar código
      ↓
docker build
      ↓
Crear nueva Image
      ↓
Crear nuevo Container
```

para cada cambio.

---

# ⚡ HOT RELOAD

Esto es especialmente útil con herramientas de desarrollo como:

* Angular
* React
* Vite
* Node.js
* NestJS

Por ejemplo:

```text id="z4c8wp"
Developer
    │
    ▼
Modifica código
    │
    ▼
Host
    │
    │ Bind Mount
    ▼
Container
    │
    ▼
Dev Server
    │
    ▼
Hot Reload
```

> 🚀 **IDEA CLAVE:** Así puedes desarrollar utilizando el entorno del container mientras mantienes tu código en tu computadora.

---

# 💾 BIND MOUNT VS DOCKER VOLUME

No debes confundirlos.

### 🔗 Bind Mount

```text id="b6m2qt"
Host folder
     │
     │ Bind Mount
     ▼
Container
```

El origen es una **ruta específica de tu computadora**.

### 💾 Docker Volume

```text id="w3r7na"
Docker
  │
  ▼
Volume
  │
  ▼
Container
```

El volume es administrado por Docker y existe independientemente del container.

| Bind Mount                                 | Docker Volume                              |
| ------------------------------------------ | ------------------------------------------ |
| Controlas directamente la carpeta del Host | Docker administra dónde y cómo se almacena |
| Usa una ruta específica del Host           | Es administrado por Docker                 |
| Muy útil para desarrollo                   | Muy útil para datos persistentes           |

Por tanto:

```text id="t8p4jy"
Bind Mount
→ controlas directamente la carpeta del Host

Volume
→ Docker administra dónde y cómo se almacena
```

---

# 🧑‍💻 ¿CUÁNDO UTILIZAR BIND MOUNTS?

Son especialmente útiles para:

### 🔥 Desarrollo

Montar tu código fuente:

```text id="k2v6sd"
Host source
     ↓
Container /app
```

### ⚡ Hot Reload

Permitir que los cambios del Host sean visibles dentro del container.

### ⚙️ Configuración

Montar archivos específicos:

```text id="a7n3fc"
config.json
    ↓
/app/config.json
```

### 🧪 Testing / desarrollo

Probar diferentes archivos o configuraciones sin reconstruir la Image.

---

# ⚠️ CUIDADO CON LOS BIND MOUNTS

Un Bind Mount puede **ocultar** el contenido que ya existía en la ruta del container.

Por ejemplo:

```text id="s5q8wy"
Image
└── /app
    ├── package.json
    └── src/
```

Si montas:

```text id="d8k2vp"
./project:/app
```

la ruta del Host pasa a utilizarse en `/app`.

Conceptualmente:

```text id="u4m9hx"
Host
./project
   │
   │ Bind Mount
   ▼
Container
/app
```

> ⚠️ **IMPORTANTE:** Por eso debes tener cuidado con qué directorios montas.

---

# 🧠 EL CONCEPTO QUE DEBES RECORDAR

La diferencia fundamental es:

```text id="p3x7kf"
BIND MOUNT

HOST
C:\my-project
      │
      │
      ▼
CONTAINER
/app
```

El **Host controla los archivos**.

Mientras que:

```text id="n6c2vm"
DOCKER VOLUME

Docker
   │
   ▼
Volume
   │
   ▼
Container
```

Docker **administra el almacenamiento**.

### 💡 EN UNA FRASE

> **Un Bind Mount conecta directamente una ruta de tu computadora con una ruta dentro del container, por lo que es especialmente útil para desarrollo local y Hot Reload.**
