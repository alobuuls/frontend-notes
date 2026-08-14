# 📄 02 - DOCKER VS VIRTUAL MACHINES

Docker utiliza **containerización**, mientras que las máquinas virtuales utilizan **virtualización**. Ambas tecnologías permiten aislar aplicaciones, pero lo hacen de manera diferente.

---

## 📑 Índice 

1. 📄 [02 - Docker vs Virtual Machines](#-02---docker-vs-virtual-machines)
   - [💻 Virtual Machines](#-virtual-machines)
     - [🧩 Conceptos](#-conceptos)
   - [🐳 Containers](#-containers)
   - [🆚 Container vs Virtual Machine](#-container-vs-virtual-machine)
   - [⚡ Startup Time](#-startup-time)
     - [💻 VM](#-vm)
     - [🐳 Container](#-container)
   - [📦 Resource Usage](#-resource-usage)
   - [🔒 Isolation](#-isolation)
     - [💻 VM](#-vm-1)
     - [🐳 Container](#-container-1)
   - [🧠 Containerization vs Virtualization](#-containerization-vs-virtualization)
     - [Virtualization](#virtualization)
     - [Containerization](#containerization)
   - [⚠️ Docker no "reemplaza" a las VMs](#️-docker-no-reemplaza-a-las-vms)
   - [🎯 Idea clave](#-idea-clave)
     - [⭐ Diferencia principal](#-debes-poder-responder)

# 💻 VIRTUAL MACHINES

Una **Virtual Machine (VM)** es una máquina virtual completa que funciona sobre un sistema físico.

```text
Hardware
   ↓
Host OS
   ↓
Hypervisor
   ↓
Guest OS
   ↓
Application
```

## 🧩 Conceptos

| Concepto       | Descripción                                                           |
| -------------- | --------------------------------------------------------------------- |
| **Host OS**    | Es el sistema operativo principal de la máquina física.               |
| **Hypervisor** | Es la tecnología encargada de crear y administrar máquinas virtuales. |
| **Guest OS**   | Es el sistema operativo que se ejecuta dentro de la máquina virtual.  |

Por ejemplo:

```text
Windows
   ↓
VM
   ↓
Ubuntu
   ↓
Node.js
```

La VM tiene su propio sistema operativo, memoria, procesos y recursos virtualizados.

---

# 🐳 CONTAINERS

Un **container** aísla una aplicación y sus procesos sin necesitar un sistema operativo completo independiente para cada aplicación.

```text
Hardware
   ↓
Host OS
   ↓
Docker Engine
   ↓
Container
   ↓
Application
```

Por ejemplo:

```text
Windows / Linux
       ↓
Docker
       ↓
Node.js Container
       ↓
Angular API
```

Los containers utilizan el **kernel del sistema operativo** en lugar de incluir un Guest OS completo como una VM tradicional.

> [!NOTE]
> En Linux, los containers comparten el kernel de Linux del host.

En Windows, Docker puede utilizar una capa de virtualización para ejecutar containers Linux, por ejemplo mediante **WSL 2**. Por eso, la idea de que Docker "nunca usa virtualización" sería incorrecta.

---

# 🆚 CONTAINER VS VIRTUAL MACHINE

| Característica             | 🐳 Container             | 💻 Virtual Machine                     |
| -------------------------- | ------------------------ | -------------------------------------- |
| Sistema operativo completo | ❌                        | ✅                                      |
| Guest OS                   | ❌                        | ✅                                      |
| Startup                    | Generalmente muy rápido  | Generalmente más lento                 |
| Overhead                   | Menor                    | Mayor                                  |
| Recursos                   | Más eficientes           | Más recursos                           |
| Aislamiento                | A nivel de procesos      | A nivel de máquina                     |
| Portabilidad               | Alta                     | Alta                                   |
| Uso típico                 | Aplicaciones y servicios | Sistemas completos / entornos aislados |

---

# ⚡ STARTUP TIME

Una diferencia importante es el tiempo necesario para comenzar a ejecutarse.

### 💻 VM

Una VM necesita iniciar su sistema operativo:

```text
VM
 ↓
Boot Guest OS
 ↓
Start services
 ↓
Application
```

### 🐳 Container

Un container normalmente puede iniciar directamente el proceso de la aplicación:

```text
Container
    ↓
Application Process
```

> [!TIP]
> Por eso los containers suelen iniciar mucho más rápido.

---

# 📦 RESOURCE USAGE

Una VM necesita recursos para ejecutar su propio sistema operativo:

```text
VM
 ├── Guest OS
 ├── System processes
 └── Application
```

Un container comparte el kernel del host:

```text
Host OS
   │
   ├── Container
   │     └── Application
   │
   └── Container
         └── Application
```

Esto normalmente permite utilizar los recursos de manera más eficiente.

---

# 🔒 ISOLATION

Ambas tecnologías proporcionan aislamiento, pero a diferentes niveles.

### 💻 VM

Aísla una máquina virtual completa:

```text
Physical Machine
      │
 ┌────┴────┐
 VM 1     VM 2
  │         │
OS        OS
```

### 🐳 Container

Aísla procesos y aplicaciones:

```text
Docker
  │
  ├── Container A
  │      └── App
  │
  └── Container B
         └── App
```

> [!WARNING]
> Por eso no debes pensar:
>
> **Container = VM pequeña.**
>
> Son mecanismos diferentes.

---

# 🧠 CONTAINERIZATION VS VIRTUALIZATION

| 💻 Virtualization                                                  | 🐳 Containerization                                     |
| ------------------------------------------------------------------ | ------------------------------------------------------- |
| Virtualiza una **máquina completa**                                | Aísla **aplicaciones y procesos**                       |
| `Hardware → Hypervisor → Virtual Machine → Guest OS → Application` | `Host OS → Container Runtime → Container → Application` |

### Virtualization

```text
Hardware
   ↓
Hypervisor
   ↓
Virtual Machine
   ↓
Guest OS
   ↓
Application
```

### Containerization

```text
Host OS
   ↓
Container Runtime
   ↓
Container
   ↓
Application
```

---

# ⚠️ DOCKER NO "REEMPLAZA" A LAS VMs

No es correcto pensar:

```text
Docker
  ↓
❌ Reemplaza VMs
```

La idea correcta es:

```text
Virtual Machines
        +
Containers
```

pueden coexistir.

### Ejemplo

```text
Cloud Server
     ↓
Virtual Machine
     ↓
Docker Engine
     ↓
Containers
     ├── API
     ├── PostgreSQL
     └── Redis
```

Aquí una VM proporciona el entorno aislado y Docker administra los containers dentro de ella.

---

# 🎯 IDEA CLAVE

La diferencia fundamental es:

```text
💻 VM
   ↓
Virtualiza una máquina
   ↓
Incluye Guest OS
```

mientras que:

```text
🐳 Container
   ↓
Aísla una aplicación/proceso
   ↓
Comparte el kernel del host
```

> [!IMPORTANT]
>
> ### ⭐ Debes poder responder
>
> **¿Cuál es la diferencia principal entre un container y una máquina virtual?**
>
> Una buena respuesta sería:
>
> > **Una VM virtualiza una máquina completa y normalmente incluye su propio sistema operativo, mientras que un container aísla procesos y aplicaciones compartiendo el kernel del sistema operativo host.**
