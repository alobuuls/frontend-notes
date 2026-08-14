# 📄 01 - Fundamentals

> [!IMPORTANT]
> 🔐 Docker permite ejecutar aplicaciones aisladas dentro de containers, pero **los containers no son una barrera de seguridad absoluta**.
>
> Docker Security consiste en **reducir los permisos, accesos y exposiciones innecesarias** de cada container.

```text
Docker
   ↓
Host System
   ↓
Containers
```

---

## 📑 Índice 

- [📄 01 - Fundamentals](#-01---fundamentals)
  - [📑 Índice](#-índice)
- [🔐 ¿Por qué Docker necesita seguridad?](#-por-qué-docker-necesita-seguridad)
- [🧱 Container Isolation](#-container-isolation)
- [🖥️ Host vs Container](#️-host-vs-container)
- [⚠️ Container Privileges](#️-container-privileges)
- [⚖️ Principle of Least Privilege](#️-principle-of-least-privilege)
- [👤 Root dentro de Containers](#-root-dentro-de-containers)
- [🧩 Linux Capabilities](#-linux-capabilities)
- [🚨 `--privileged`](#---privileged)
- [🌐 Exponer puertos](#-exponer-puertos)
- [🐳 Imágenes confiables](#-imágenes-confiables)
- [🔍 Vulnerabilidades](#-vulnerabilidades)
- [🔄 Actualización de imágenes](#-actualización-de-imágenes)
- [🔑 Secrets](#-secrets)
- [🚫 Secrets y Git](#-secrets-y-git)
- [📁 Cuidado con los Mounts](#-cuidado-con-los-mounts)
- [🛡️ Seguridad por capas](#️-seguridad-por-capas)
- [🧠 Mapa mental](#-mapa-mental)
- [🎯 Idea central](#-idea-central)


# 🔐 ¿Por qué Docker necesita seguridad?

Un mismo host puede ejecutar múltiples containers:

```text
Host
 │
 ├── Container A
 ├── Container B
 └── Container C
```

Cada container debería estar aislado de los demás, pero todos comparten el mismo sistema host.

Por eso debes considerar:

```text
Application
     ↓
Container
     ↓
Docker Engine
     ↓
Host
```

Una configuración incorrecta puede aumentar el impacto de una vulnerabilidad.

> [!WARNING]
> ⚠️ **Un container está aislado, pero no es una máquina virtual completamente independiente.**

---

# 🧱 Container Isolation

Docker utiliza mecanismos del sistema operativo para aislar los procesos de los containers.

```text
Host
 │
 ├── Container A
 │      └── Process
 │
 ├── Container B
 │      └── Process
 │
 └── Container C
        └── Process
```

El aislamiento busca limitar el acceso de un container a:

* otros containers
* procesos del host
* archivos del host
* dispositivos
* recursos que no necesita

Pero este aislamiento depende también de **cómo se configure el container**.

---

# 🖥️ Host vs Container

Es importante entender que el container **no sustituye al sistema operativo host**.

La relación es:

```text
Host
 │
 ├── Docker Engine
 │
 ├── Container A
 ├── Container B
 └── Container C
```

Por eso la seguridad del host sigue siendo fundamental.

```text
Host comprometido
       ↓
Containers potencialmente comprometidos
```

> [!IMPORTANT]
> 🛡️ Docker protege y aísla procesos, pero no convierte al host en un sistema irrelevante.

---

# ⚠️ Container Privileges

Un container puede ejecutarse con diferentes niveles de permisos.

```text
Container
    ↓
Application
    ↓
Permissions
```

Mientras más permisos tenga un container:

```text
Más permisos
     ↓
Mayor capacidad de acceder a recursos
     ↓
Mayor impacto potencial de una vulnerabilidad
```

Por eso debes evitar otorgar permisos que la aplicación no necesita.

---

# ⚖️ Principle of Least Privilege

El **Principle of Least Privilege** significa:

> Un proceso debe tener únicamente los permisos necesarios para realizar su trabajo.

Por ejemplo:

```text
❌ Application
      ↓
  Muchos permisos
```

es menos seguro que:

```text
✅ Application
      ↓
Solo permisos necesarios
```

Este principio debe aplicarse a:

| Recurso         | Principio                |
| --------------- | ------------------------ |
| 👤 Usuarios     | Solo permisos necesarios |
| 📁 Archivos     | Solo acceso necesario    |
| 🧩 Capabilities | Solo las necesarias      |
| 🔌 Dispositivos | Solo los necesarios      |
| 🌐 Networks     | Solo acceso necesario    |
| 💾 Volúmenes    | Solo los necesarios      |
| 🚪 Puertos      | Solo los necesarios      |

---

# 👤 Root dentro de Containers

Algunos containers pueden ejecutar su proceso como `root`:

```text
Container
    ↓
root
    ↓
Application
```

Esto puede otorgar más privilegios de los necesarios.

Siempre que sea posible, es preferible ejecutar la aplicación con un usuario sin privilegios:

```text
Container
    ↓
Non-root user
    ↓
Application
```

Por ejemplo:

```dockerfile
FROM node:22

WORKDIR /app

COPY . .

RUN npm install

USER node

CMD ["npm", "start"]
```

La idea no es:

> "Nunca puede existir root en un container."

Sino:

> **Si la aplicación no necesita root, no debería ejecutarse como root.**

> [!TIP]
> 🔥 **Non-root** es una de las medidas más sencillas para reducir privilegios innecesarios.

---

# 🧩 Linux Capabilities

Linux divide determinados privilegios del sistema en **capabilities**.

Docker puede limitar qué capabilities tiene un container.

Conceptualmente:

```text
Container
    ↓
Capabilities
    ↓
Permissions
```

No necesitas memorizar todas las capabilities.

Lo importante es entender que:

> **Los privilegios del sistema pueden limitarse para reducir el acceso que tiene un proceso.**

Esto forma parte del principio de mínimo privilegio.

---

# 🚨 `--privileged`

Docker permite ejecutar un container con:

```bash
docker run --privileged ...
```

Esto proporciona al container muchos más privilegios y acceso a recursos del host.

| Configuración           | Acceso             |
| ----------------------- | ------------------ |
| 🟢 Normal Container     | Permisos limitados |
| 🔴 Privileged Container | Mucho más acceso   |

Por eso:

> [!CAUTION]
> 🚨 **No debes utilizar `--privileged` sin una razón específica.**
>
> Para aplicaciones normales, generalmente no es necesario.

---

# 🌐 Exponer puertos

También debes controlar qué servicios haces accesibles.

Por ejemplo:

```bash
docker run -p 3000:3000 my-api
```

publica el puerto del container hacia el host.

Pero no todos los servicios necesitan estar expuestos.

Una arquitectura puede ser:

```text
Internet
   ↓
API
   ↓
PostgreSQL
```

La API puede estar expuesta, mientras PostgreSQL solamente está disponible dentro de la Docker Network.

Por ejemplo:

```text
API
 │
 │ postgres:5432
 ▼
PostgreSQL
```

sin necesidad de publicar:

```text
5432:5432
```

> [!IMPORTANT]
> 🌐 **Expón únicamente los puertos que realmente necesitan estar accesibles.**

---

# 🐳 Imágenes confiables

Una Docker Image puede contener:

```text
Application
    +
Runtime
    +
Libraries
    +
Dependencies
    +
OS packages
```

Por lo tanto, una imagen puede introducir vulnerabilidades.

Evita depender de imágenes desconocidas:

```text
Unknown Image
      ↓
Unknown Dependencies
      ↓
Potential Risk
```

Es preferible utilizar:

* imágenes oficiales
* imágenes de fuentes confiables
* imágenes mantenidas
* versiones conocidas

Por ejemplo:

```dockerfile
FROM node:22
```

---

# 🔍 Vulnerabilidades

Las vulnerabilidades pueden encontrarse en diferentes partes de una image:

```text
Docker Image
 │
 ├── Base Image
 ├── Runtime
 ├── Dependencies
 └── Application
```

Por ejemplo:

```text
Node.js
   +
npm packages
   +
Linux packages
   ↓
Potential Vulnerabilities
```

Por eso existen herramientas de **image scanning**.

Conceptualmente:

```text
Docker Image
      ↓
Security Scan
      ↓
Vulnerabilities
      ↓
Update / Fix
      ↓
Rebuild
```

---

# 🔄 Actualización de imágenes

Las imágenes y sus dependencias pueden recibir actualizaciones de seguridad.

Por eso no debes asumir:

> "La imagen funcionó, así que ya está."

Puedes tener:

```text
Old Image
    ↓
Known Vulnerability
```

y posteriormente:

```text
Updated Base Image
    ↓
Rebuild
    ↓
New Image
```

Por ejemplo:

```text
node:22
    ↓
Updated dependencies
    ↓
docker build
    ↓
New Image
```

> [!TIP]
> 🔄 La seguridad también implica **mantener las imágenes actualizadas**.

---

# 🔑 Secrets

Nunca deberías incorporar secrets directamente en una imagen.

Por ejemplo, evita:

```dockerfile
ENV JWT_SECRET=my-secret
```

o:

```dockerfile
COPY .env .
```

si ese archivo contiene información sensible.

Los secrets pueden incluir:

* Database passwords
* API keys
* JWT secrets
* Access tokens
* Cloud credentials

La separación correcta es:

```text
Application Image
       +
Configuration / Secrets
       ↓
Running Container
```

y no:

```text
Secret
   ↓
Docker Image
```

> [!CAUTION]
> 🔐 Los secrets no deberían formar parte de la Docker Image.

---

# 🚫 Secrets y Git

Tampoco debes subir información sensible a un repositorio.

Por ejemplo:

```text
.env
credentials
private keys
API keys
```

Normalmente:

```text
.env
 ↓
.gitignore
 ↓
❌ Git
```

Puedes utilizar:

```text
.env.example
```

para documentar las variables que necesita la aplicación sin incluir sus valores reales.

---

# 📁 Cuidado con los Mounts

Los Bind Mounts también pueden introducir riesgos.

Por ejemplo:

```bash
docker run -v /:/host my-container
```

proporciona al container acceso al filesystem completo del host.

Esto puede ser extremadamente peligroso.

Es preferible:

```text
Container
   ↓
Solo necesita
   ↓
/project
```

en lugar de:

```text
Container
   ↓
Todo el filesystem del Host
```

> [!WARNING]
> ⚠️ **Dar acceso al filesystem completo del host puede aumentar enormemente el impacto de una vulnerabilidad.**

La idea vuelve a ser la misma:

> **Dar únicamente el acceso que realmente necesita la aplicación.**

---

# 🛡️ Seguridad por capas

Docker Security no depende de una sola configuración.

Debes pensar en varias capas:

```text
                 Docker Security
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
      Images        Container       Network
        │              │              │
   Vulnerabilities   Privileges      Ports
   Updates           Non-root        Exposure
        │              │              │
        └──────────────┼──────────────┘
                       ▼
                      Host
```

Por eso debes evaluar:

```text
Image
   ↓
Container
   ↓
Network
   ↓
Host
```

en lugar de pensar solamente:

> "Docker ya aísla mi aplicación."

---

# 🧠 Mapa mental

Cuando ejecutes un container, piensa:

```text
Container
   │
   ├── ¿Necesita root?
   │
   ├── ¿Qué permisos necesita?
   │
   ├── ¿Qué capabilities necesita?
   │
   ├── ¿Qué puertos debo exponer?
   │
   ├── ¿La image es confiable?
   │
   ├── ¿Está actualizada?
   │
   ├── ¿Tiene vulnerabilidades?
   │
   ├── ¿Estoy exponiendo secrets?
   │
   └── ¿Qué acceso tiene al Host?
```

---

# 🎯 Idea central

La idea central de Docker Security puede resumirse así:

```text
Menos privilegios
       +
Menos exposición
       +
Imágenes confiables
       +
Secrets protegidos
       +
Imágenes actualizadas
       ↓
Menor riesgo
```

> [!IMPORTANT]
> 🔥 **Regla que debes quedarte:**
>
> **Un container debería tener el menor nivel de acceso posible para poder realizar correctamente su trabajo.**
