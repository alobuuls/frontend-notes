# 📄 02 - Non-Root Containers

> [!IMPORTANT]
> 👤 Los containers pueden ejecutar procesos como diferentes usuarios. En muchos casos, el proceso termina ejecutándose como `root`, pero **una aplicación no debería tener más privilegios de los que realmente necesita**.
>
> La idea principal es aplicar el principio de **Least Privilege**: darle a cada proceso solamente los permisos necesarios para funcionar.

---

## 📑 Índice

- [📄 02 - Non-Root Containers](#-02---non-root-containers)
  - [📑 Índice](#-índice)
- [👤 ¿Qué es `root`?](#-qué-es-root)
- [🐳 Root dentro de un Container](#-root-dentro-de-un-container)
- [⚠️ Riesgos de ejecutar como `root`](#️-riesgos-de-ejecutar-como-root)
- [🔐 Principle of Least Privilege](#-principle-of-least-privilege)
- [👤 Non-Root User](#-non-root-user)
- [🧩 `USER` en Dockerfile](#-user-en-dockerfile)
- [👨‍💻 Crear un usuario](#-crear-un-usuario)
- [📁 Permisos de archivos](#-permisos-de-archivos)
- [🔄 Ownership y Permissions](#-ownership-y-permissions)
    - [👤 User](#-user)
    - [👥 Group](#-group)
    - [🔐 Permissions](#-permissions)
- [🐳 Non-Root + Docker](#-non-root--docker)
- [⚠️ Non-Root no significa "seguridad total"](#️-non-root-no-significa-seguridad-total)
- [🧠 La idea importante](#-la-idea-importante)
    - [❌ Ejecutar como `root`](#-ejecutar-como-root)
    - [✅ Ejecutar como non-root](#-ejecutar-como-non-root)


# 👤 ¿Qué es `root`?

En Linux, `root` es el usuario con privilegios administrativos.

Tiene permisos para realizar operaciones que un usuario normal no puede hacer, como:

* modificar archivos protegidos
* cambiar configuraciones del sistema
* administrar procesos
* cambiar permisos y ownership
* acceder a determinados recursos del sistema

Dentro de un container también existen usuarios.

```text
Container
   │
   ├── root
   ├── node
   └── otros usuarios
```

---

# 🐳 Root dentro de un Container

Un container tiene su propio entorno de usuarios y filesystem, pero **no debes asumir que ser `root` dentro del container es equivalente a estar completamente aislado del host**.

El container comparte mecanismos del sistema operativo con el host.

```text
Host
 │
 ├── Container
 │      │
 │      └── root process
 │
 └── Other processes
```

Por eso, si una vulnerabilidad permite que una aplicación comprometida abuse de privilegios, ejecutar como `root` puede aumentar el impacto.

> [!WARNING]
> ⚠️ **Que una aplicación esté dentro de un container no significa que pueda ignorarse la seguridad del usuario que ejecuta el proceso.**

---

# ⚠️ Riesgos de ejecutar como `root`

Si tu aplicación no necesita privilegios administrativos, ejecutarla como `root` aumenta innecesariamente los permisos disponibles.

```text
❌ Application
       ↓
     root
       ↓
Más privilegios de los necesarios
```

Una aplicación web normalmente necesita:

```text
Leer archivos
Ejecutar la aplicación
Escuchar un puerto
```

pero no necesariamente necesita:

```text
Modificar cualquier archivo
Administrar el sistema
Cambiar configuraciones privilegiadas
```

Por eso es preferible:

```text
✅ Application
       ↓
  non-root user
       ↓
Solo los permisos necesarios
```

---

# 🔐 Principle of Least Privilege

El **Principle of Least Privilege** establece que un proceso, usuario o servicio debe tener **únicamente los permisos necesarios para realizar su trabajo**.

Por ejemplo:

```text
Application
     ↓
Necesita ejecutar Node.js
     ↓
No necesita privilegios administrativos
     ↓
non-root user
```

Esto reduce el impacto potencial de una vulnerabilidad.

> [!TIP]
> 🔥 **Menos privilegios = menor impacto potencial si la aplicación es comprometida.**

---

# 👤 Non-Root User

Un **non-root user** es simplemente un usuario que no tiene los privilegios administrativos de `root`.

Por ejemplo, algunas imágenes oficiales ya proporcionan usuarios preparados para ejecutar determinadas aplicaciones.

En Node.js puedes encontrar un usuario como:

```text
node
```

Entonces puedes hacer que tu aplicación se ejecute utilizando ese usuario:

```dockerfile
FROM node:22

WORKDIR /app

COPY . .

USER node

CMD ["npm", "start"]
```

La instrucción:

```dockerfile
USER node
```

indica que las instrucciones posteriores y, especialmente, el proceso principal del container se ejecutarán como ese usuario.

---

# 🧩 `USER` en Dockerfile

La instrucción:

```dockerfile
USER
```

permite especificar qué usuario utilizará Docker para ejecutar las instrucciones posteriores y el proceso del container.

Por ejemplo:

```dockerfile
USER node
```

Conceptualmente:

```text
Dockerfile
    ↓
USER node
    ↓
Container
    ↓
Application
    ↓
node user
```

En lugar de:

```text
Dockerfile
    ↓
Container
    ↓
Application
    ↓
root
```

---

# 👨‍💻 Crear un usuario

También puedes crear tu propio usuario dentro de una imagen.

Por ejemplo, conceptualmente:

```dockerfile
RUN useradd -m appuser

USER appuser
```

El proceso sería:

```text
Base Image
    ↓
Create user
    ↓
Configure permissions
    ↓
USER appuser
    ↓
Run application
```

No necesitas memorizar todavía los comandos específicos de creación de usuarios de Linux.

> [!IMPORTANT]
> **El usuario que ejecuta la aplicación debe tener únicamente los permisos que necesita.**

---

# 📁 Permisos de archivos

Aquí aparece un problema muy común.

Supongamos:

```dockerfile
FROM node:22

WORKDIR /app

COPY . .

USER node

CMD ["npm", "start"]
```

Si los archivos de `/app` pertenecen a `root` y el usuario `node` necesita modificarlos, pueden aparecer errores de permisos.

Conceptualmente:

```text
root
 │
 └── /app
       │
       └── files
             ↓
        USER node
             ↓
       ❌ Permission denied
```

Por eso, cuando utilizas un usuario non-root, debes considerar:

* quién es el propietario de los archivos
* qué permisos tienen
* qué necesita modificar la aplicación
* qué usuario ejecutará el proceso

> [!TIP]
> 📁 **Non-root no elimina los problemas de permisos:** debes asegurarte de que el usuario pueda acceder a los archivos que realmente necesita.

---

# 🔄 Ownership y Permissions

Hay tres conceptos que debes reconocer:

| Concepto           | Significado                                          |
| ------------------ | ---------------------------------------------------- |
| 👤 **User**        | Quién es el propietario de un archivo o proceso      |
| 👥 **Group**       | Un conjunto de usuarios que puede compartir permisos |
| 🔐 **Permissions** | Determinan qué operaciones pueden realizarse         |

### 👤 User

Quién es el propietario de un archivo o proceso.

```text
node
root
appuser
```

### 👥 Group

Un conjunto de usuarios que puede compartir permisos.

```text
appuser
   ↓
appgroup
```

### 🔐 Permissions

Determinan qué operaciones pueden realizarse.

```text
File
 │
 ├── Owner
 ├── Group
 └── Permissions
```

Por ejemplo:

```text
read
write
execute
```

No necesitas profundizar todavía en `chmod`, `chown`, permisos octales, etc. Eso pertenece más al estudio de Linux.

---

# 🐳 Non-Root + Docker

Un patrón habitual es:

```dockerfile
FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

USER node

CMD ["npm", "start"]
```

El flujo sería:

```text
Base Image
    ↓
Install dependencies
    ↓
Copy application
    ↓
Switch user
    ↓
USER node
    ↓
Run application
```

La aplicación termina ejecutándose como:

```text
node
```

y no como:

```text
root
```

---

# ⚠️ Non-Root no significa "seguridad total"

Ejecutar como non-root **mejora la seguridad**, pero no convierte automáticamente al container en seguro.

Todavía existen otros aspectos importantes:

```text
Container Security
       │
       ├── Non-root users
       ├── Capabilities
       ├── Network exposure
       ├── Secrets
       ├── Image vulnerabilities
       ├── Resource limits
       └── Host security
```

Por eso `USER` es **una capa de seguridad**, no una solución completa.

> [!WARNING]
> 🛡️ **Non-root es una capa dentro de Docker Security, no una solución completa de seguridad.**

---

# 🧠 La idea importante

Piensa en la diferencia:

### ❌ Ejecutar como `root`

```text
Container
   ↓
Application
   ↓
root
   ↓
Privilegios innecesarios
```

### ✅ Ejecutar como non-root

```text
Container
   ↓
Application
   ↓
non-root user
   ↓
Solo permisos necesarios
```

La razón para hacerlo es simple:

> **Si la aplicación es comprometida, queremos limitar al máximo lo que un atacante pueda hacer dentro del container.**

Y esto conecta directamente con el concepto de:

```text
Least Privilege
       ↓
Menores privilegios
       ↓
Menor impacto potencial
```

> [!IMPORTANT]
> 🔥 **Regla mental:**
> **Si la aplicación no necesita `root`, ejecuta el proceso como non-root.**
