# 📄 03 - Volumes vs Bind Mounts

> 💡 **CONCEPTO FUNDAMENTAL:** Docker ofrece diferentes formas de **montar y persistir datos** fuera del filesystem temporal de un container.
>
> Las dos opciones principales que debes conocer son:
>
> | 💾 Volume                     | 📂 Bind Mount            |
> | ----------------------------- | ------------------------ |
> | Gestionado por Docker         | Controlado desde el Host |
> | Ideal para datos persistentes | Ideal para desarrollo    |

---

## 📑 ÍNDICE

- [📄 03 - Volumes vs Bind Mounts](#-03---volumes-vs-bind-mounts)
  - [� ÍNDICE](#-índice)
- [🐳 ¿Qué tienen en común?](#-qué-tienen-en-común)
- [💾 Docker Volume](#-docker-volume)
    - [🛠️ Crear un Volume](#️-crear-un-volume)
    - [🔗 Montarlo en un Container](#-montarlo-en-un-container)
    - [🎯 Principal uso](#-principal-uso)
- [📂 Bind Mount](#-bind-mount)
    - [🎯 Principal uso](#-principal-uso-1)
- [⚖️ Diferencias principales](#️-diferencias-principales)
- [🧠 La diferencia fundamental](#-la-diferencia-fundamental)
    - [💾 Volume](#-volume)
    - [📂 Bind Mount](#-bind-mount-1)
- [🐘 PostgreSQL → Volume](#-postgresql--volume)
- [💻 Source Code → Bind Mount](#-source-code--bind-mount)
- [🔥 Ventajas y desventajas](#-ventajas-y-desventajas)
  - [💾 Volume](#-volume-1)
    - [✅ Ventajas](#-ventajas)
    - [❌ Desventajas](#-desventajas)
  - [📂 Bind Mount](#-bind-mount-2)
    - [✅ Ventajas](#-ventajas-1)
    - [❌ Desventajas](#-desventajas-1)
- [🎯 ¿Cuándo utilizar cada uno?](#-cuándo-utilizar-cada-uno)
    - [💾 Datos de una aplicación → Volume](#-datos-de-una-aplicación--volume)
    - [📂 Código en desarrollo → Bind Mount](#-código-en-desarrollo--bind-mount)
- [🏗️ Ejemplo de una aplicación real](#️-ejemplo-de-una-aplicación-real)
- [🧠 No los confundas](#-no-los-confundas)

# 🐳 ¿Qué tienen en común?

Tanto los **Volumes** como los **Bind Mounts** permiten que los datos existan fuera de la capa writable temporal del container.

```text
Container
    │
    ├── Filesystem temporal
    │
    └── Mounted Storage
              │
        ┌─────┴─────┐
        ▼           ▼
     Volume     Bind Mount
```

> 💡 Esto permite que ciertos datos sobrevivan al ciclo de vida del container.

---

# 💾 Docker Volume

Un **Volume** es un almacenamiento administrado por Docker.

```text
Docker
   │
   ▼
Volume
   │
   ▼
Container
```

Docker se encarga de administrar dónde se almacenan esos datos.

### 🛠️ Crear un Volume

```bash
docker volume create postgres-data
```

### 🔗 Montarlo en un Container

```bash
docker run \
  --mount type=volume,source=postgres-data,target=/var/lib/postgresql/data \
  postgres
```

Conceptualmente:

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
  Docker Storage
```

### 🎯 Principal uso

Los Volumes son especialmente útiles para **datos persistentes**, por ejemplo:

```text
PostgreSQL
MySQL
MongoDB
Redis
```

---

# 📂 Bind Mount

Un **Bind Mount** conecta directamente una ruta del Host con una ruta del container.

```text
HOST
./project
    │
    │ Bind Mount
    ▼
CONTAINER
/app
```

Por ejemplo:

```bash
docker run \
  --mount type=bind,source=./src,target=/app/src \
  my-api
```

Aquí tú controlas directamente la ubicación de los archivos en el Host.

### 🎯 Principal uso

Los Bind Mounts son especialmente útiles para:

```text
Source Code
     ↓
Development
     ↓
Hot Reload
```

---

# ⚖️ Diferencias principales

| Característica             | 💾 Volume               | 📂 Bind Mount               |
| -------------------------- | ----------------------- | --------------------------- |
| **Gestionado por**         | Docker                  | Host                        |
| **Ubicación**              | Administrada por Docker | Ruta que tú especificas     |
| **Control sobre archivos** | Menor                   | Mayor                       |
| **Desarrollo local**       | ⚠️ Menos común          | ✅ Ideal                     |
| **Source code**            | ⚠️                      | ✅                           |
| **Bases de datos**         | ✅ Ideal                 | ⚠️                          |
| **Persistencia**           | ✅                       | ✅                           |
| **Portabilidad**           | Generalmente mejor      | Depende de la ruta del Host |
| **Uso típico**             | Datos de aplicaciones   | Código/configuración        |

---

# 🧠 La diferencia fundamental

Piensa en **quién controla el almacenamiento**.

### 💾 Volume

```text
Docker
   │
   ▼
Volume
   │
   ▼
Container
```

Docker administra el almacenamiento.

### 📂 Bind Mount

```text
Host
   │
   ▼
Carpeta / archivo
   │
   │ Bind Mount
   ▼
Container
```

Tú decides exactamente qué ruta del Host utilizar.

---

# 🐘 PostgreSQL → Volume

Este es uno de los ejemplos más importantes.

```text
PostgreSQL Container
        │
        ▼
Database Files
        │
        ▼
Docker Volume
```

Si eliminamos el container:

```text
PostgreSQL Container
        │
        ❌ eliminado
```

el Volume puede continuar existiendo:

```text
postgres-data
     │
     │
     ▼
  permanece
```

Entonces puedes crear otro container y volver a montar el mismo Volume.

```text
postgres-data
      │
      ├──────► PostgreSQL Container 1
      │
      └──────► PostgreSQL Container 2
```

> 💡 Por eso los Volumes son ideales para datos que **no deberían depender del ciclo de vida de un container**.

---

# 💻 Source Code → Bind Mount

Para desarrollo:

```text
Host
│
└── my-api/
      │
      │ Bind Mount
      ▼
Container
│
└── /app
```

Modificas:

```text
src/users.service.ts
```

en tu computadora:

```text
Host
   ↓
Bind Mount
   ↓
Container
```

y el container puede ver el cambio.

Esto permite trabajar con:

* 🔥 Hot Reload
* 🅰️ Angular
* ⚛️ React
* ⚡ Vite
* 🟢 Node.js
* 🏗️ NestJS

sin reconstruir constantemente la Image.

---

# 🔥 Ventajas y desventajas

## 💾 Volume

### ✅ Ventajas

* Gestionado por Docker.
* Ideal para persistencia.
* Muy adecuado para bases de datos.
* No depende directamente de una ruta específica del Host.
* Puede reutilizarse entre containers.

### ❌ Desventajas

* Tienes menos control directo sobre dónde están los archivos.
* No es la opción más cómoda para editar código desde tu IDE.
* Requiere entender la administración de Volumes.

---

## 📂 Bind Mount

### ✅ Ventajas

* Control directo sobre los archivos.
* Muy cómodo para desarrollo.
* Permite trabajar directamente con el código del Host.
* Ideal para Hot Reload.
* Puedes montar archivos de configuración específicos.

### ❌ Desventajas

* Depende de rutas del Host.
* Puede generar problemas de permisos.
* Puede afectar el rendimiento en algunos entornos.
* Menos portable si el proyecto depende de rutas específicas de una máquina.
* Debes tener cuidado con qué archivos expones al container.

---

# 🎯 ¿Cuándo utilizar cada uno?

### 💾 Datos de una aplicación → Volume

```text
¿Son DATOS de una aplicación?
        │
        ▼
      Volume
```

Por ejemplo:

```text
PostgreSQL
     ↓
Volume
```

---

### 📂 Código en desarrollo → Bind Mount

```text
¿Es CÓDIGO que estás desarrollando?
        │
        ▼
   Bind Mount
```

Por ejemplo:

```text
Source Code
     ↓
Bind Mount
```

---

# 🏗️ Ejemplo de una aplicación real

Imagina:

```text
Docker
│
├── API
│    │
│    └── Source Code
│          ↓
│      Bind Mount
│
└── PostgreSQL
       │
       └── Database Data
                ↓
             Volume
```

La arquitectura sería:

| Servicio      | Datos         | Tipo          |
| ------------- | ------------- | ------------- |
| 🔌 API        | Source Code   | 📂 Bind Mount |
| 🐘 PostgreSQL | Database Data | 💾 Volume     |

Esta combinación es **muy común en desarrollo**:

```text
Source Code
    ↓
Bind Mount

Database
    ↓
Volume
```

---

# 🧠 No los confundas

| 💾 VOLUME                           | 📂 BIND MOUNT             |
| ----------------------------------- | ------------------------- |
| ↓                                   | ↓                         |
| Docker administra el almacenamiento | Host controla la ruta     |
| ↓                                   | ↓                         |
| Persistencia                        | Acceso directo a archivos |
| ↓                                   | ↓                         |
| Bases de datos                      | Desarrollo / Source Code  |

> 💡 **La idea clave:** Usa **Volumes** cuando quieres que Docker administre datos persistentes; usa **Bind Mounts** cuando necesitas trabajar directamente con archivos o carpetas de tu Host, especialmente durante el desarrollo.
