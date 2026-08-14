# 📄 05 - Compose Volumes

> [!IMPORTANT]
> 💾 **Los Volumes permiten que los datos de los containers persistan independientemente del ciclo de vida del container.**

---

## 📚 ÍNDICE 
- [� 05 - Compose Volumes](#-05---compose-volumes)
  - [📚 ÍNDICE](#-índice)
  - [💾 ¿Qué son los Volumes en Compose?](#-qué-son-los-volumes-en-compose)
    - [🧠 Idea fundamental](#-idea-fundamental)
- [🧠 ¿Por qué utilizar Volumes con Compose?](#-por-qué-utilizar-volumes-con-compose)
- [📦 Named Volumes](#-named-volumes)
- [🏗️ Declarar un Volume en Compose](#️-declarar-un-volume-en-compose)
    - [1️⃣ Dentro del service](#1️⃣-dentro-del-service)
    - [2️⃣ A nivel raíz](#2️⃣-a-nivel-raíz)
    - [📄 Archivo completo](#-archivo-completo)
- [🔗 ¿Qué significa este montaje?](#-qué-significa-este-montaje)
- [🐘 Volumes para PostgreSQL](#-volumes-para-postgresql)
- [🔄 Persistencia al recrear Containers](#-persistencia-al-recrear-containers)
- [🚀 `docker compose down` y los Volumes](#-docker-compose-down-y-los-volumes)
- [🔁 Volumes compartidos](#-volumes-compartidos)
- [🧩 Compose Volume vs Bind Mount](#-compose-volume-vs-bind-mount)
    - [💾 Named Volume](#-named-volume)
    - [📁 Bind Mount](#-bind-mount)
- [🏗️ Ejemplo completo](#️-ejemplo-completo)
    - [🏛️ Arquitectura](#️-arquitectura)
- [🧠 La idea fundamental](#-la-idea-fundamental)
- [🗂️ RESUMEN](#️-resumen)

## 💾 ¿Qué son los Volumes en Compose?

Docker Compose permite configurar **Volumes** para que los datos de los containers puedan persistir independientemente de su ciclo de vida.

Esto es especialmente importante para servicios que manejan datos, como:

* PostgreSQL
* MySQL
* MongoDB
* Redis
* Otros servicios con almacenamiento persistente

### 🧠 Idea fundamental

| Recurso      | ¿Qué sucede?       |
| ------------ | ------------------ |
| 📦 Container | Puede eliminarse ❌ |
| 💾 Volume    | Permanece ✅        |

Por eso, si un container se recrea, puede volver a utilizar los mismos datos.

---

# 🧠 ¿Por qué utilizar Volumes con Compose?

Supongamos que tienes PostgreSQL:

```text
PostgreSQL Container
        ↓
     Database
```

Si eliminas el container:

```text
PostgreSQL Container
        ↓
       ❌
```

los datos almacenados únicamente dentro del filesystem del container pueden perderse.

Con un Volume:

```text
PostgreSQL Container
        ↓
      Volume
        ↓
Persistent Data
```

el container puede desaparecer y los datos continúan existiendo.

> [!TIP]
> 🔥 **El container ejecuta la aplicación; el Volume conserva los datos.**

---

# 📦 Named Volumes

Un **Named Volume** es un Volume administrado por Docker al que le asignas un nombre.

Por ejemplo:

```text
postgres_data
```

Conceptualmente:

```text
Docker
  │
  └── postgres_data
```

El Volume no depende de que exista un container específico.

Puede utilizarse posteriormente por otro container.

---

# 🏗️ Declarar un Volume en Compose

Un Named Volume normalmente se declara en dos lugares.

### 1️⃣ Dentro del service

```yaml
services:

  postgres:
    image: postgres:17
    volumes:
      - postgres_data:/var/lib/postgresql/data
```

### 2️⃣ A nivel raíz

```yaml
volumes:
  postgres_data:
```

### 📄 Archivo completo

```yaml
services:

  postgres:
    image: postgres:17
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

---

# 🔗 ¿Qué significa este montaje?

Esta línea:

```yaml
- postgres_data:/var/lib/postgresql/data
```

tiene dos partes:

| Parte                      | Significado                        |
| -------------------------- | ---------------------------------- |
| `postgres_data`            | 💾 Docker Volume                   |
| `/var/lib/postgresql/data` | 📁 Directorio dentro del container |

Por lo tanto:

```text
Docker Volume
postgres_data
      │
      ▼
PostgreSQL Container
/var/lib/postgresql/data
```

Los datos que PostgreSQL almacena en ese directorio quedan respaldados por el Volume.

---

# 🐘 Volumes para PostgreSQL

Este es uno de los casos de uso más importantes.

```yaml
services:

  postgres:
    image: postgres:17
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

La arquitectura sería:

```text
PostgreSQL Container
        │
        ▼
/var/lib/postgresql/data
        │
        ▼
postgres_data
        │
        ▼
Persistent Data
```

Así puedes recrear el container sin tener que recrear la base de datos desde cero.

---

# 🔄 Persistencia al recrear Containers

Supongamos que tienes:

```text
postgres
   ↓
postgres_data
```

Si eliminas el container:

```text
postgres
   ↓
❌ Container eliminado
```

el Volume continúa existiendo:

```text
postgres_data
   ↓
✅ Datos
```

Después puedes crear otro container utilizando el mismo Volume:

```text
postgres_data
      ↓
New PostgreSQL Container
```

Resultado:

```text
Old Container
     ❌
     │
     │
     ▼
postgres_data
     │
     ▼
New Container
```

> [!IMPORTANT]
> 🔥 **El Volume debe considerarse independiente del container.**

---

# 🚀 `docker compose down` y los Volumes

Cuando ejecutas:

```bash
docker compose down
```

Compose elimina los containers y otros recursos asociados, pero **los Named Volumes no se eliminan normalmente**.

Por eso puedes hacer:

```text
docker compose down
        ↓
Containers eliminados
        ↓
Volume permanece
        ↓
docker compose up
        ↓
Container recreado
        ↓
Datos disponibles
```

> [!WARNING]
> ⚠️ Existe una diferencia importante con `docker compose down -v`.

La opción:

```bash
-v
```

indica que también quieres eliminar los volumes asociados.

| Comando                  | Containers | Volumes |
| ------------------------ | ---------: | ------: |
| `docker compose down`    |          ❌ |       ✅ |
| `docker compose down -v` |          ❌ |       ❌ |

> [!CAUTION]
> ⚠️ Ten mucho cuidado con `-v` cuando el Volume contiene datos importantes.

---

# 🔁 Volumes compartidos

Un mismo Volume puede ser utilizado por más de un service.

Conceptualmente:

```text
             shared_volume
                  │
          ┌───────┴───────┐
          ▼               ▼
       Service A       Service B
```

Por ejemplo:

```yaml
services:

  app:
    image: my-app
    volumes:
      - shared_data:/data

  worker:
    image: my-worker
    volumes:
      - shared_data:/data

volumes:
  shared_data:
```

Ambos services pueden acceder al mismo almacenamiento.

> [!WARNING]
> ⚠️ Compartir un Volume no significa automáticamente que cualquier aplicación pueda leer y escribir los datos de forma segura. Hay que considerar cómo las aplicaciones manejan archivos concurrentemente.

---

# 🧩 Compose Volume vs Bind Mount

En Compose puedes utilizar diferentes tipos de mounts.

| Tipo                | Ejemplo                                  | Uso habitual                   |
| ------------------- | ---------------------------------------- | ------------------------------ |
| 💾 **Named Volume** | `postgres_data:/var/lib/postgresql/data` | Databases y datos persistentes |
| 📁 **Bind Mount**   | `./src:/app/src`                         | Desarrollo                     |

### 💾 Named Volume

```yaml
volumes:
  - postgres_data:/var/lib/postgresql/data
```

```text
Docker
  ↓
postgres_data
  ↓
Container
```

Ideal para:

* 🗄️ Databases
* 💾 Persistent application data

### 📁 Bind Mount

```yaml
volumes:
  - ./src:/app/src
```

```text
Host
  ↓
./src
  ↓
Container
  ↓
/app/src
```

Más común durante desarrollo cuando quieres que los cambios del host estén disponibles inmediatamente dentro del container.

---

# 🏗️ Ejemplo completo

Un proyecto podría tener:

```yaml
services:

  api:
    build: ./backend
    ports:
      - "3000:3000"

  postgres:
    image: postgres:17
    environment:
      POSTGRES_DB: mydb
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

### 🏛️ Arquitectura

| Service            | Función                          |
| ------------------ | -------------------------------- |
| 🚀 `api`           | Ejecuta el backend               |
| 🐘 `postgres`      | Ejecuta PostgreSQL               |
| 💾 `postgres_data` | Conserva los datos de PostgreSQL |

```text
                    Docker Compose
                         │
             ┌───────────┴───────────┐
             ▼                       ▼
            API                  PostgreSQL
             │                       │
             │                       ▼
             │                 /var/lib/postgresql/data
             │                       │
             │                       ▼
             │                 postgres_data
             │                       │
             └───────────────────────┘
                         │
                  Persistent Data
```

---

# 🧠 La idea fundamental

Piensa en la relación así:

```text
Container
   ↓
Runtime environment
   ↓
puede desaparecer
```

mientras:

```text
Volume
   ↓
Storage independiente
   ↓
puede sobrevivir al container
```

Por eso, para una base de datos:

```text
PostgreSQL Container
        │
        ▼
postgres_data
        │
        ▼
Persistent Database
```

> [!NOTE]
> 🐘 **El container ejecuta PostgreSQL; el Volume conserva sus datos.**

---

# 🗂️ RESUMEN

| Concepto                 | Idea clave                                              |
| ------------------------ | ------------------------------------------------------- |
| 📦 Container             | Ejecuta la aplicación                                   |
| 💾 Volume                | Conserva los datos                                      |
| 🏷️ Named Volume         | Volume administrado por Docker                          |
| 📁 Bind Mount            | Conecta una ruta del Host con el Container              |
| 🔄 Persistencia          | Los datos sobreviven al container                       |
| `docker compose down`    | Elimina containers, normalmente conserva Named Volumes  |
| `docker compose down -v` | Elimina containers **y** Volumes                        |
| 🔗 Volume compartido     | Varios services pueden utilizar el mismo almacenamiento |

> [!IMPORTANT]
> 🔥 **Regla mental:**
> **Container = ejecución**
> **Volume = persistencia**
