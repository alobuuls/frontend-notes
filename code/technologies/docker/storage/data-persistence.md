# 📄 04 - Data Persistence

> 🔥 **CONCEPTO FUNDAMENTAL:** Los Docker containers son **efímeros**, lo que significa que su ciclo de vida puede terminar y el container puede ser eliminado.
>
> Por eso es importante separar los **datos persistentes** del filesystem temporal del container.

---

## 📑 ÍNDICE

- [📄 04 - Data Persistence](#-04---data-persistence)
  - [� ÍNDICE](#-índice)
- [📦 ¿Qué significa que un Container sea efímero?](#-qué-significa-que-un-container-sea-efímero)
- [💾 Container Filesystem](#-container-filesystem)
- [🚨 ¿Qué pasa al eliminar un Container?](#-qué-pasa-al-eliminar-un-container)
- [🧠 Persistencia de datos](#-persistencia-de-datos)
    - [❌ Sin persistencia](#-sin-persistencia)
    - [✅ Con persistencia](#-con-persistencia)
- [💾 Volumes y Persistencia](#-volumes-y-persistencia)
- [📂 Bind Mounts y Persistencia](#-bind-mounts-y-persistencia)
- [🐘 Databases dentro de Docker](#-databases-dentro-de-docker)
- [🔄 Recrear Containers sin perder datos](#-recrear-containers-sin-perder-datos)
- [🧱 Container vs Persistent Storage](#-container-vs-persistent-storage)
- [🐘 Ejemplo completo con PostgreSQL](#-ejemplo-completo-con-postgresql)
    - [❌ Sin persistencia](#-sin-persistencia-1)
    - [✅ Con persistencia](#-con-persistencia-1)
- [🧠 ¿Qué debe ser efímero y qué debe ser persistente?](#-qué-debe-ser-efímero-y-qué-debe-ser-persistente)
- [🔥 La idea más importante](#-la-idea-más-importante)

# 📦 ¿Qué significa que un Container sea efímero?

Un container está diseñado para poder:

* Crearse
* Ejecutarse
* Detenerse
* Eliminarse
* Recrearse

sin que la aplicación dependa de que exista siempre el mismo container.

```text
Image
   ↓
Container
   ↓
Running
   ↓
Stopped
   ↓
Removed
```

Cuando el container es eliminado, su filesystem writable también desaparece.

```text
Container
   │
   └── Filesystem
           │
           ▼
       ❌ Container removed
           │
           ▼
       ❌ Data lost
```

> ⚠️ **IMPORTANTE:** No debes confiar en el filesystem interno del container para almacenar datos que necesites conservar.

---

# 💾 Container Filesystem

Cada container tiene su propio filesystem writable.

```text
Container
│
├── /app
├── /config
├── /tmp
└── /data
```

Si la aplicación escribe información ahí:

```text
Application
     ↓
/data/users.json
```

los datos pertenecen al filesystem del container.

Mientras el container exista:

```text
Container
   ↓
/data/users.json
   ↓
✅ existe
```

Pero si eliminas el container:

```text
Container
   ↓
❌ docker rm
   ↓
Filesystem eliminado
   ↓
❌ users.json
```

---

# 🚨 ¿Qué pasa al eliminar un Container?

Supongamos:

```text
PostgreSQL Container
        │
        ▼
Database Files
```

Si esos archivos están únicamente dentro del container:

```text
PostgreSQL
     │
     ▼
Container Filesystem
     │
     ▼
❌ Container eliminado
     │
     ▼
❌ Database Data perdida
```

Esto sería un problema enorme.

> 💡 Por eso las bases de datos normalmente necesitan **almacenamiento persistente**.

---

# 🧠 Persistencia de datos

**Persistencia** significa que los datos continúan existiendo aunque el container que los estaba utilizando desaparezca.

### ❌ Sin persistencia

```text
Container
   ↓
Data
   ↓
Container removed
   ↓
❌ Data lost
```

### ✅ Con persistencia

```text
Container
   ↓
Persistent Storage
   ↓
Container removed
   ↓
Storage remains
   ↓
✅ Data preserved
```

---

# 💾 Volumes y Persistencia

Los **Docker Volumes** permiten almacenar datos independientemente del filesystem temporal del container.

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
        │
        ▼
/var/lib/postgresql/data
        │
        ▼
postgres-data
        │
        ▼
Persistent Storage
```

Si eliminamos el container:

```text
PostgreSQL Container
        │
        ❌ removed
```

el Volume puede continuar existiendo:

```text
postgres-data
      │
      ▼
✅ Data remains
```

Después puedes crear otro container y montar nuevamente ese Volume.

```text
postgres-data
      │
      ▼
New PostgreSQL Container
      │
      ▼
Existing Database
```

---

# 📂 Bind Mounts y Persistencia

Los **Bind Mounts** también pueden proporcionar persistencia porque los archivos realmente están almacenados en el Host.

```text
HOST
│
└── ./data
      │
      │ Bind Mount
      ▼
CONTAINER
│
└── /app/data
```

Si eliminas el container:

```text
Container
   ↓
❌ removed
```

los archivos del Host permanecen:

```text
Host
│
└── ./data
      ↓
      ✅ permanece
```

Al crear otro container y montar nuevamente la carpeta:

```text
Host
   │
   ▼
./data
   │
   ▼
New Container
```

los datos vuelven a estar disponibles.

---

# 🐘 Databases dentro de Docker

Las bases de datos son uno de los ejemplos más importantes de persistencia.

```text
PostgreSQL Container
        │
        ▼
Database
        │
        ▼
Docker Volume
```

Una arquitectura típica sería:

```text
Docker
│
├── API Container
│
└── PostgreSQL Container
          │
          ▼
      postgres-data
          │
          ▼
    Persistent Data
```

De esta forma, el container de PostgreSQL puede ser reemplazado sin perder necesariamente la información de la base de datos.

---

# 🔄 Recrear Containers sin perder datos

Esta es una de las ventajas más importantes.

Supongamos:

```text
PostgreSQL Container
        │
        ▼
postgres-data
```

El container tiene algún problema y decides eliminarlo:

```bash
docker rm postgres
```

El container desaparece:

```text
PostgreSQL Container
        ❌
```

pero el Volume permanece:

```text
postgres-data
        ✅
```

Después puedes crear otro container:

```text
New PostgreSQL Container
        │
        ▼
postgres-data
        │
        ▼
Existing Data
```

> 🧠 **IDEA CLAVE:** Container y datos deben considerarse cosas diferentes.

---

# 🧱 Container vs Persistent Storage

Una idea fundamental:

| 🐳 Container          | 💾 Persistent Storage         |
| --------------------- | ----------------------------- |
| Runtime               | Storage                       |
| Puede desaparecer     | Puede sobrevivir al container |
| Ejecuta la aplicación | Conserva los datos            |

Esto permite diseñar aplicaciones donde el container puede ser reemplazado fácilmente.

---

# 🐘 Ejemplo completo con PostgreSQL

### ❌ Sin persistencia

```text
PostgreSQL
     ↓
Container
     ↓
Database Files
     ↓
❌ Container removed
     ↓
❌ Data lost
```

### ✅ Con persistencia

```text
PostgreSQL Container
        │
        ▼
      Volume
        │
        ▼
 Persistent Data
```

Si el container desaparece:

```text
PostgreSQL Container
        ❌
        
        │
        ▼

      Volume
        │
        ▼
   Persistent Data
        ✅
```

Y posteriormente:

```text
New PostgreSQL Container
        │
        ▼
      Volume
        │
        ▼
Existing Data
```

---

# 🧠 ¿Qué debe ser efímero y qué debe ser persistente?

Una buena forma de pensar en Docker es:

```text
Application
     ↓
Container
     ↓
EFÍMERO
```

pero:

```text
Database Data
      ↓
Volume
      ↓
PERSISTENTE
```

| Elemento                  | ¿Debe persistir? | Solución                             |
| ------------------------- | :--------------: | ------------------------------------ |
| Container                 |         ❌        | Se puede recrear                     |
| Application runtime       |         ❌        | Image + Container                    |
| Source code en desarrollo |         ✅        | Bind Mount                           |
| PostgreSQL data           |         ✅        | Volume                               |
| Uploaded files            |         ✅        | Volume / Storage externo             |
| Database records          |         ✅        | Volume / servicio externo            |
| Logs                      |      Depende     | Logging externo o estrategia de logs |

---

# 🔥 La idea más importante

No pienses:

```text
Container = Data
```

Piensa:

```text
Container
   ↓
Ejecuta la aplicación
```

y:

```text
Storage
   ↓
Conserva los datos
```

La arquitectura fundamental es:

```text
PostgreSQL Container
        │
        ▼
      Volume
        │
        ▼
 Persistent Data
```

> 💡 **RECUERDA:** Un container puede desaparecer y ser recreado; los datos importantes deben vivir en un almacenamiento persistente independiente de ese container.
