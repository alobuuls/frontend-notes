# 📄 01 - Docker Networking

> 🐳 **Docker Networking** es el sistema que permite que los **containers se comuniquen entre sí, con el host y con redes externas**.

Es una parte fundamental de Docker porque una aplicación real normalmente no vive dentro de un único container.

Por ejemplo:

```text
        Docker Host
             │
      ┌──────┴──────┐
      ▼             ▼
 API Container   DB Container
      │             │
      └──────┬──────┘
             │
       Docker Network
```

La API necesita comunicarse con la base de datos, y posiblemente la API también necesite acceder a Internet.

---

## 📑 Índice

- [📄 01 - Docker Networking](#-01---docker-networking)
  - [📑 Índice](#-índice)
- [🧠 ¿QUÉ ES DOCKER NETWORKING?](#-qué-es-docker-networking)
- [❓ ¿POR QUÉ LOS CONTAINERS NECESITAN REDES?](#-por-qué-los-containers-necesitan-redes)
- [🔄 FLUJOS DE RED EN DOCKER](#-flujos-de-red-en-docker)
- [1️⃣ HOST → CONTAINER](#1️⃣-host--container)
- [2️⃣ CONTAINER → CONTAINER](#2️⃣-container--container)
- [3️⃣ CONTAINER → INTERNET](#3️⃣-container--internet)
- [4️⃣ INTERNET → CONTAINER](#4️⃣-internet--container)
- [🔌 PUERTO DEL HOST VS PUERTO DEL CONTAINER](#-puerto-del-host-vs-puerto-del-container)
    - [🧠 Regla para recordar](#-regla-para-recordar)
- [🌐 DOCKER NETWORK](#-docker-network)
- [🔐 AISLAMIENTO DE RED](#-aislamiento-de-red)
- [🧩 NETWORK NAMESPACE](#-network-namespace)
- [🔌 VIRTUAL NETWORK INTERFACE](#-virtual-network-interface)
- [🏗️ ARQUITECTURA BÁSICA](#️-arquitectura-básica)
- [🧠 EJEMPLO: API + DATABASE](#-ejemplo-api--database)
- [🆚 NETWORKING VS PORT PUBLISHING](#-networking-vs-port-publishing)
    - [🌐 Docker Network](#-docker-network-1)
    - [🔌 Port Publishing](#-port-publishing)
- [🔄 MAPA MENTAL](#-mapa-mental)
- [🎯 LA IDEA CENTRAL](#-la-idea-central)
    - [🧠 En una frase](#-en-una-frase)

# 🧠 ¿QUÉ ES DOCKER NETWORKING?

Docker Networking es el conjunto de mecanismos que Docker utiliza para **conectar containers y controlar su comunicación de red**.

Conceptualmente:

```text
Docker Engine
      ↓
Docker Networking
      ↓
Docker Network
      ↓
Containers
```

Una Docker Network proporciona un entorno de comunicación donde los containers conectados pueden intercambiar tráfico según la configuración de la red.

> 💡 **Idea clave:** Docker Networking permite que los servicios dentro de una aplicación distribuida puedan comunicarse de forma controlada.

---

# ❓ ¿POR QUÉ LOS CONTAINERS NECESITAN REDES?

Un container está aislado del resto del sistema.

Si tienes:

```text
API Container
```

y:

```text
Database Container
```

no quieres asumir que automáticamente pueden comunicarse de cualquier manera.

Necesitas establecer una red:

```text
API
 │
 ▼
Docker Network
 │
 ▼
Database
```

Esto permite construir arquitecturas como:

```text
             Docker Network
                  │
       ┌──────────┼──────────┐
       ▼          ▼          ▼
      API         DB        Redis
```

Cada servicio puede estar en su propio container y comunicarse mediante la red.

---

# 🔄 FLUJOS DE RED EN DOCKER

Hay **cuatro escenarios** que debes diferenciar:

| Flujo                     | Comunicación                                  |
| ------------------------- | --------------------------------------------- |
| 1️⃣ Host → Container      | El host accede a un container                 |
| 2️⃣ Container → Container | Un container se comunica con otro             |
| 3️⃣ Container → Internet  | Un container accede a redes externas          |
| 4️⃣ Internet → Container  | Tráfico externo llega a un servicio publicado |

---

# 1️⃣ HOST → CONTAINER

El host puede comunicarse con un container cuando existe una ruta de acceso adecuada.

Por ejemplo:

```text
Host
 │
 │ localhost:8080
 ▼
Container
 │
 │ :3000
 ▼
Application
```

Esto suele utilizar **port publishing**.

Por ejemplo:

```bash
docker run -p 8080:3000 my-api
```

Significa conceptualmente:

```text
Host
8080
 │
 ▼
Container
3000
```

Por lo tanto:

```text
http://localhost:8080
```

puede llegar a la aplicación que escucha en el puerto `3000` dentro del container.

> 💡 **`-p` publica un puerto del container en el host.**

---

# 2️⃣ CONTAINER → CONTAINER

Este es uno de los casos más importantes.

Imagina:

```text
API Container
      │
      ▼
Docker Network
      │
      ▼
DB Container
```

La API puede comunicarse con la base de datos a través de la red Docker.

Por ejemplo:

```text
API
 │
 │ PostgreSQL :5432
 ▼
DB
```

En una red Docker correctamente configurada, los containers pueden comunicarse utilizando el **nombre del servicio/container** como hostname, dependiendo de la red.

Por ejemplo:

```text
API
 │
 │ db:5432
 ▼
Database
```

Aquí:

```text
db
```

puede actuar como nombre de host dentro de la red.

> 🧠 Esto es mucho más útil que intentar descubrir manualmente la IP del container.

---

# 3️⃣ CONTAINER → INTERNET

Los containers también pueden realizar conexiones hacia redes externas.

Por ejemplo:

```text
API Container
      │
      ▼
Docker Network
      │
      ▼
Internet
      │
      ▼
External API
```

Una aplicación podría hacer:

```text
Container
    ↓
https://api.example.com
    ↓
External API
```

Esto permite que una aplicación dentro de Docker consuma APIs externas, descargue dependencias o se comunique con otros servicios.

---

# 4️⃣ INTERNET → CONTAINER

Este flujo es diferente.

Por defecto, un container **no debería quedar automáticamente expuesto a Internet simplemente porque una aplicación esté escuchando dentro del container**.

Normalmente necesitas publicar un puerto:

```bash
docker run -p 8080:3000 my-api
```

Conceptualmente:

```text
Internet / Host
       │
       │ :8080
       ▼
Docker Host
       │
       ▼
Container :3000
       │
       ▼
Application
```

Esto permite que tráfico externo llegue al servicio publicado.

> ⚠️ **Escuchar en un puerto dentro del container no significa automáticamente que ese puerto esté publicado hacia el host.**

---

# 🔌 PUERTO DEL HOST VS PUERTO DEL CONTAINER

Esta distinción es fundamental.

Cuando escribes:

```bash
docker run -p 8080:3000 my-api
```

tienes:

| Puerto | Representa     |
| -----: | -------------- |
| `8080` | Host Port      |
| `3000` | Container Port |

Visualmente:

```text
Host
localhost:8080
      │
      ▼
Container
    :3000
      │
      ▼
Application
```

Por eso:

```text
-p HOST_PORT:CONTAINER_PORT
```

> 🎯 **No son necesariamente el mismo puerto.**

### 🧠 Regla para recordar

```text
-p HOST:CONTAINER
       │
       └── "Desde qué puerto entro al host
           → hacia qué puerto del container voy"
```

# 🌐 DOCKER NETWORK

Una **Docker Network** funciona como una red virtual a la que puedes conectar containers.

Por ejemplo:

```text
             my-network
                 │
        ┌────────┼────────┐
        ▼        ▼        ▼
       API       DB      Redis
```

Los containers conectados a la misma red pueden comunicarse según las reglas de esa red.

Esto permite separar aplicaciones en diferentes redes:

```text
Network A
   │
   ├── API
   └── DB


Network B
   │
   ├── Frontend
   └── Other Service
```

> 💡 **Idea clave:** No todos los containers tienen que estar conectados a todas las redes.

---

# 🔐 AISLAMIENTO DE RED

Una de las ventajas de Docker Networking es que permite controlar **qué containers pueden comunicarse entre sí**.

Por ejemplo:

```text
Network: backend
      │
 ┌────┴────┐
 ▼         ▼
API        DB
```

Mientras otro container podría estar fuera:

```text
Frontend
   ✕
   │
   │ no conectado
   ▼
backend network
```

Esto ayuda a diseñar una arquitectura donde solamente los servicios que necesitan comunicarse están conectados.

> 🔒 **Concepto importante:** La conexión a una misma network determina qué containers pueden participar directamente en esa comunicación.

---

# 🧩 NETWORK NAMESPACE

A nivel conceptual, los containers tienen su propio **network namespace**.

Puedes imaginarlo como un espacio de red aislado:

```text
Container
     │
     ▼
Network Namespace
     │
 ┌───┴────┐
 ▼        ▼
Network  Interfaces
```

Esto permite que cada container tenga su propia perspectiva de:

* interfaces de red
* direcciones IP
* rutas
* puertos

No necesitas estudiar todavía los internals de Linux networking.

> 🧠 **Lo importante:** El aislamiento de red ayuda a que cada container tenga su propio entorno de networking.

---

# 🔌 VIRTUAL NETWORK INTERFACE

Docker utiliza interfaces virtuales para conectar los containers con las redes.

Conceptualmente:

```text
Container
    │
    ▼
Virtual Network Interface
    │
    ▼
Docker Network
    │
    ▼
Other Containers
```

Esto permite que un container pueda enviar y recibir tráfico a través de una red Docker.

---

# 🏗️ ARQUITECTURA BÁSICA

Puedes visualizar Docker Networking así:

```text
Docker Engine
      │
      ▼
Docker Networking
      │
      ▼
Docker Network
      │
 ┌────┼─────┐
 ▼    ▼     ▼
API   DB   Redis
```

Cada container puede tener conexiones de red dependiendo de las networks a las que esté conectado.

---

# 🧠 EJEMPLO: API + DATABASE

Una arquitectura muy común:

```text
                 Docker Host
                     │
              backend-network
                     │
             ┌───────┴───────┐
             ▼               ▼
        API Container    DB Container
             │               │
             │   db:5432     │
             └───────────────┘
```

La API no necesita conocer necesariamente la IP de la base de datos.

Puede comunicarse conceptualmente mediante:

```text
db:5432
```

donde:

| Parte  | Significado                   |
| ------ | ----------------------------- |
| `db`   | Nombre del servicio/container |
| `5432` | Puerto de PostgreSQL          |

> 💡 En una Docker Network correctamente configurada, el nombre puede utilizarse como **hostname** para localizar el servicio/container.

---

# 🆚 NETWORKING VS PORT PUBLISHING

No confundas estos conceptos.

| Docker Network               | Port Publishing                          |
| ---------------------------- | ---------------------------------------- |
| Comunicación entre servicios | Permite acceso desde fuera del container |
| `Container ↔ Container`      | `Host → Container`                       |
| Ejemplo: `API ↔ Database`    | Ejemplo: `-p 8080:3000`                  |

### 🌐 Docker Network

Sirve principalmente para:

```text
Container
    ↕
Container
```

Por ejemplo:

```text
API ↔ Database
```

### 🔌 Port Publishing

Sirve principalmente para permitir acceso desde fuera del container:

```text
Host
  ↓
Published Port
  ↓
Container
```

Por ejemplo:

```bash
docker run -p 8080:3000 my-api
```

Por lo tanto:

```text
Docker Network
     ↓
Comunicación entre servicios


Port Publishing
     ↓
Acceso desde el host/red externa
```

---

# 🔄 MAPA MENTAL

```text
                    DOCKER NETWORKING
                           │
             ┌─────────────┼─────────────┐
             ▼             ▼             ▼
        Containers       Host         Internet
             │
             ▼
       Docker Network
             │
       ┌─────┼─────┐
       ▼     ▼     ▼
      API    DB   Redis
```

Y los principales flujos:

```text
Host → Container
Container → Container
Container → Internet
Internet → Container
```

Cada uno tiene mecanismos y consideraciones diferentes.

---

# 🎯 LA IDEA CENTRAL

Cuando pienses en Docker Networking, piensa en estas tres preguntas:

```text
1. ¿Quién quiere comunicarse?
           ↓
2. ¿A través de qué network?
           ↓
3. ¿El tráfico es interno o necesita
   entrar/salir del host?
```

Por ejemplo:

```text
Angular / Browser
       ↓
Published Port
       ↓
API Container
       ↓
Docker Network
       ↓
Database Container
```

> 🎯 **Así empiezas a ver Docker no como containers aislados, sino como servicios conectados dentro de una arquitectura.**

### 🧠 En una frase

> **Docker Network conecta servicios; Port Publishing permite exponer servicios hacia fuera.**
