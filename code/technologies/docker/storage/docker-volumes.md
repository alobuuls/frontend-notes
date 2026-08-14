# 📄 01 - Docker Volumes

> 🔥 **CONCEPTO FUNDAMENTAL:** Un **Docker Volume** permite **guardar datos de forma persistente**, independientemente del ciclo de vida de un container.

---

## 📑 ÍNDICE

- [📄 01 - Docker Volumes](#-01---docker-volumes)
  - [� ÍNDICE](#-índice)
  - [💾 ¿QUÉ ES UN DOCKER VOLUME?](#-qué-es-un-docker-volume)
- [🧠 ¿POR QUÉ EXISTEN LOS VOLUMES?](#-por-qué-existen-los-volumes)
- [💾 PERSISTENCIA DE DATOS](#-persistencia-de-datos)
- [🗄️ DOCKER VOLUMES + DATABASES](#️-docker-volumes--databases)
- [🏷️ NAMED VOLUMES](#️-named-volumes)
- [➕ CREAR UN VOLUME](#-crear-un-volume)
- [📋 LISTAR VOLUMES](#-listar-volumes)
- [🔍 INSPECCIONAR UN VOLUME](#-inspeccionar-un-volume)
- [🗑️ ELIMINAR UN VOLUME](#️-eliminar-un-volume)
- [🔗 MONTAR UN VOLUME EN UN CONTAINER](#-montar-un-volume-en-un-container)
- [🧩 VOLUME VS CONTAINER FILESYSTEM](#-volume-vs-container-filesystem)
    - [❌ Sin Volume](#-sin-volume)
    - [✅ Con Volume](#-con-volume)
- [🔄 EL VOLUME TIENE SU PROPIO CICLO DE VIDA](#-el-volume-tiene-su-propio-ciclo-de-vida)
- [🧪 EJEMPLO COMPLETO](#-ejemplo-completo)
- [📦 CASOS DE USO](#-casos-de-uso)
    - [🗄️ Bases de datos](#️-bases-de-datos)
    - [📁 Archivos generados](#-archivos-generados)
    - [💾 Datos persistentes](#-datos-persistentes)
- [🧠 VOLUME VS CONTAINER](#-volume-vs-container)
- [🔥 LA IDEA MÁS IMPORTANTE](#-la-idea-más-importante)

## 💾 ¿QUÉ ES UN DOCKER VOLUME?

Un **Docker Volume** es un mecanismo de almacenamiento administrado por Docker que permite **guardar datos de forma persistente**, independientemente del ciclo de vida de un container.

La idea fundamental es:

```text
Container
    ↓
Filesystem
    ↓
Datos
```

Normalmente, los datos escritos directamente dentro del filesystem del container son **efímeros**.

Con un volume:

```text
Container
    ↓
Volume
    ↓
Datos persistentes
```

El volume puede continuar existiendo aunque el container sea eliminado.

> 💡 **TIP:** Piensa en el Volume como el lugar donde guardas los datos que **no quieres perder cuando reemplazas un container**.

---

# 🧠 ¿POR QUÉ EXISTEN LOS VOLUMES?

Los containers están diseñados para ser **reemplazables y temporales**.

Por ejemplo:

```text
Container
    ↓
Application
    ↓
Datos
```

Si eliminamos el container:

```bash
docker rm my-container
```

los datos almacenados únicamente dentro del container pueden perderse.

Por eso utilizamos un volume:

```text
              Volume
                │
                ▼
Container ──────────────► Datos
```

Si el container desaparece:

```text
Container ❌
     │
     ▼
Volume ✅
     │
     ▼
Datos ✅
```

Podemos crear otro container y volver a utilizar el mismo volume.

---

# 💾 PERSISTENCIA DE DATOS

La **persistencia** significa que los datos sobreviven al ciclo de vida del container.

| Sin Volume          | Con Volume                 |
| ------------------- | -------------------------- |
| Container → Data    | Container → Volume → Data  |
| Container eliminado | Container eliminado        |
| Data ❌              | Volume continúa existiendo |
|                     | Data ✅                     |

🔥 Esta es la razón principal por la que los volumes son especialmente importantes para aplicaciones que almacenan información.

---

# 🗄️ DOCKER VOLUMES + DATABASES

Un caso de uso muy común son las bases de datos.

Por ejemplo:

```text
PostgreSQL Container
        ↓
   PostgreSQL Data
        ↓
      Volume
```

Sin volume:

```text
PostgreSQL
    ↓
Container
    ↓
Database files
    ↓
Container eliminado
    ↓
Datos ❌
```

Con volume:

```text
PostgreSQL
    ↓
Container
    ↓
Volume
    ↓
Database files
```

Si reemplazamos el container:

```text
Old PostgreSQL Container ❌
            ↓
        Volume ✅
            ↓
New PostgreSQL Container
            ↓
     Same Database Data
```

Por eso es habitual utilizar volumes para:

* PostgreSQL
* MySQL
* MongoDB
* Redis
* otras aplicaciones que necesitan persistencia

---

# 🏷️ NAMED VOLUMES

Un **Named Volume** es un volume al que le asignamos un nombre.

Por ejemplo:

```text
postgres-data
```

Conceptualmente:

```text
postgres-data
      │
      ▼
PostgreSQL Container
```

La ventaja es que podemos identificarlo fácilmente y reutilizarlo.

---

# ➕ CREAR UN VOLUME

Puedes crear uno utilizando:

```bash
docker volume create postgres-data
```

Conceptualmente:

```text
docker volume create
        ↓
   postgres-data
```

El volume existe independientemente de cualquier container.

Puedes comprobarlo con:

```bash
docker volume ls
```

---

# 📋 LISTAR VOLUMES

Para ver los volumes administrados por Docker:

```bash
docker volume ls
```

Por ejemplo:

```text
DRIVER    VOLUME NAME
local     postgres-data
local     redis-data
```

Esto te permite saber qué volumes existen actualmente.

---

# 🔍 INSPECCIONAR UN VOLUME

Puedes consultar información detallada:

```bash
docker volume inspect postgres-data
```

Docker mostrará información como:

* nombre
* driver
* ubicación
* opciones
* metadata

Conceptualmente:

```text
Volume
   ↓
docker volume inspect
   ↓
Configuration + Metadata
```

---

# 🗑️ ELIMINAR UN VOLUME

Para eliminar un volume:

```bash
docker volume rm postgres-data
```

> ⚠️ **CUIDADO:** eliminar un volume puede significar perder los datos almacenados en él.

Por eso debes diferenciar:

```text
docker rm
    ↓
elimina Container
```

de:

```text
docker volume rm
    ↓
elimina Volume
```

> 🔑 **IMPORTANTE:** Eliminar el container **no significa automáticamente que debas eliminar el volume**.

---

# 🔗 MONTAR UN VOLUME EN UN CONTAINER

Para utilizar un volume, debemos **montarlo** dentro del container.

Por ejemplo:

```bash
docker run -d \
  --name postgres \
  -v postgres-data:/var/lib/postgresql/data \
  postgres
```

La estructura:

```text
Docker Host
     │
     ▼
postgres-data
     │
     │ mount
     ▼
PostgreSQL Container
     │
     ▼
/var/lib/postgresql/data
```

La parte:

```text
-v postgres-data:/var/lib/postgresql/data
```

significa:

```text
VOLUME_NAME : CONTAINER_PATH
```

En este caso:

```text
postgres-data
      ↓
/var/lib/postgresql/data
```

---

# 🧩 VOLUME VS CONTAINER FILESYSTEM

Esta diferencia es fundamental.

### ❌ Sin Volume

```text
Container
   │
   └── /app/data
```

Los datos pertenecen al filesystem del container.

Si el container es eliminado:

```text
Container ❌
   ↓
Data ❌
```

### ✅ Con Volume

```text
Container
   │
   └── /app/data
          │
          ▼
       Volume
```

Si eliminamos el container:

```text
Container ❌
     │
     X
     │
Volume ✅
     │
Data ✅
```

---

# 🔄 EL VOLUME TIENE SU PROPIO CICLO DE VIDA

Este es uno de los conceptos más importantes.

No debes pensar:

```text
Container
   └── Volume
```

como si el volume fuera simplemente una carpeta que desaparece con el container.

Es mejor pensar:

```text
        ┌───────────────┐
        │    Volume     │
        │               │
        │     Data      │
        └───────┬───────┘
                │
        ┌───────┴───────┐
        ▼               ▼
   Container 1      Container 2
```

Un mismo volume puede incluso utilizarse posteriormente con otro container, dependiendo del caso de uso.

---

# 🧪 EJEMPLO COMPLETO

Supongamos que queremos ejecutar PostgreSQL.

Primero creamos el volume:

```bash
docker volume create postgres-data
```

Después ejecutamos PostgreSQL:

```bash
docker run -d \
  --name postgres \
  -v postgres-data:/var/lib/postgresql/data \
  postgres
```

Tenemos:

```text
              postgres-data
                    │
                    ▼
             PostgreSQL
                    │
                    ▼
             Database Data
```

Ahora eliminamos el container:

```bash
docker rm -f postgres
```

El container desaparece:

```text
postgres ❌
```

Pero:

```text
postgres-data ✅
```

continúa existiendo.

Podemos crear otro container utilizando el mismo volume:

```bash
docker run -d \
  --name postgres-new \
  -v postgres-data:/var/lib/postgresql/data \
  postgres
```

Y:

```text
postgres-data
      │
      ▼
postgres-new
      │
      ▼
Datos existentes ✅
```

---

# 📦 CASOS DE USO

Los volumes son especialmente útiles cuando una aplicación necesita conservar datos entre diferentes containers.

### 🗄️ Bases de datos

```text
PostgreSQL
    ↓
Volume
    ↓
Database
```

### 📁 Archivos generados

```text
Application
    ↓
Generated files
    ↓
Volume
```

### 💾 Datos persistentes

```text
Container
    ↓
Application Data
    ↓
Volume
```

---

# 🧠 VOLUME VS CONTAINER

No los confundas:

| Container                  | Volume                     |
| -------------------------- | -------------------------- |
| Ejecuta procesos           | Almacena datos             |
| Es temporal/reemplazable   | Puede persistir            |
| Tiene un filesystem propio | Vive independientemente    |
| Puede eliminarse           | Puede permanecer           |
| Se crea desde una Image    | Es administrado por Docker |

La relación sería:

```text
Image
  ↓
Container
  ↓
Mount
  ↓
Volume
  ↓
Persistent Data
```

---

# 🔥 LA IDEA MÁS IMPORTANTE

Un **container puede desaparecer y el volume puede permanecer**.

```text
       IMAGE
         ↓
     CONTAINER
         │
       mount
         ↓
      VOLUME
         ↓
   PERSISTENT DATA
```

> 🎯 **REGLA MENTAL:** Los containers son reemplazables; los volumes permiten conservar los datos que necesitan sobrevivir al ciclo de vida del container.

Y especialmente con bases de datos:

```text
PostgreSQL Container
        ↓
      Volume
        ↓
   Database Data
```

> 🔑 **Recuerda:** El volume vive independientemente del container.
