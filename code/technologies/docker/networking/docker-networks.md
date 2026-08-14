# 📄 03 - Docker Networks

Una **Docker Network** permite conectar containers para que puedan comunicarse entre sí de forma controlada.

Es uno de los conceptos más importantes de Docker Networking porque permite construir aplicaciones compuestas por varios servicios.

Por ejemplo:

```text
             my-network
                  │
        ┌─────────┼─────────┐
        ▼         ▼         ▼
       API    PostgreSQL   Redis
```

La API puede comunicarse con PostgreSQL y Redis a través de la misma network.

> 💡 **Idea clave:** Una Docker Network permite conectar servicios sin necesidad de exponer todos sus puertos hacia el host.

---

## 📑 ÍNDICE

- [📄 03 - Docker Networks](#-03---docker-networks)
  - [📑 ÍNDICE](#-índice)
- [🌐 ¿QUÉ ES UNA DOCKER NETWORK?](#-qué-es-una-docker-network)
- [🧠 ¿POR QUÉ UTILIZAR UNA NETWORK?](#-por-qué-utilizar-una-network)
- [🏗️ CREAR UNA NETWORK](#️-crear-una-network)
- [📋 VER NETWORKS](#-ver-networks)
- [🔍 INSPECCIONAR UNA NETWORK](#-inspeccionar-una-network)
- [🗑️ ELIMINAR UNA NETWORK](#️-eliminar-una-network)
- [🔗 CONECTAR UN CONTAINER AL CREARLO](#-conectar-un-container-al-crearlo)
- [🚀 CONECTAR OTRO CONTAINER](#-conectar-otro-container)
- [🔄 API → POSTGRESQL](#-api--postgresql)
- [🧠 NOMBRE DEL CONTAINER COMO HOSTNAME](#-nombre-del-container-como-hostname)
- [🆚 NETWORK VS PORT MAPPING](#-network-vs-port-mapping)
  - [🌐 Docker Network](#-docker-network)
  - [🔌 Port Mapping](#-port-mapping)
- [🔐 ¿NECESITO PUBLICAR EL PUERTO DE POSTGRESQL?](#-necesito-publicar-el-puerto-de-postgresql)
- [🎯 LA IDEA CENTRAL](#-la-idea-central)
- [🧱 NETWORK DRIVERS](#-network-drivers)
- [🌉 BRIDGE](#-bridge)
- [🖥️ HOST](#️-host)
- [🚫 NONE](#-none)
- [🌍 OVERLAY](#-overlay)
- [🧩 COMPARACIÓN DE DRIVERS](#-comparación-de-drivers)
- [🔄 CREAR Y CONECTAR UNA ARQUITECTURA](#-crear-y-conectar-una-arquitectura)
  - [1️⃣ Crear network](#1️⃣-crear-network)
  - [2️⃣ Crear PostgreSQL](#2️⃣-crear-postgresql)
  - [3️⃣ Crear API](#3️⃣-crear-api)
- [🔌 CONECTAR UN CONTAINER EXISTENTE](#-conectar-un-container-existente)
- [🔓 DESCONECTAR UN CONTAINER](#-desconectar-un-container)
- [🧠 UN CONTAINER PUEDE ESTAR EN VARIAS NETWORKS](#-un-container-puede-estar-en-varias-networks)
- [🏗️ EJEMPLO DE ARQUITECTURA REAL](#️-ejemplo-de-arquitectura-real)
- [🧠 MAPA MENTAL](#-mapa-mental)
- [🔑 LA IDEA CENTRAL](#-la-idea-central-1)

# 🌐 ¿QUÉ ES UNA DOCKER NETWORK?

Una Docker Network es una **red virtual administrada por Docker** a la que puedes conectar containers.

Conceptualmente:

```text
Docker Engine
      ↓
Docker Network
      │
 ┌────┼────┐
 ▼    ▼    ▼
API   DB   Redis
```

Los containers conectados a una misma network pueden comunicarse entre sí.

Esto permite separar la comunicación de los servicios de una aplicación.

---

# 🧠 ¿POR QUÉ UTILIZAR UNA NETWORK?

Imagina una aplicación formada por:

```text
Frontend
Backend
Database
Redis
```

Podrías tener:

```text
Frontend Container
Backend Container
PostgreSQL Container
Redis Container
```

La aplicación podría organizarse así:

```text
                 Docker
                   │
             backend-network
                   │
          ┌────────┼────────┐
          ▼        ▼        ▼
         API       DB      Redis
```

La network permite que estos servicios se comuniquen sin tener que exponer todos sus puertos hacia el host.

Por ejemplo:

```text
API
 ↓
PostgreSQL
```

puede ser comunicación interna dentro de Docker.

---

# 🏗️ CREAR UNA NETWORK

Para crear una network:

```bash
docker network create my-network
```

Docker crea:

```text
my-network
```

que posteriormente puedes utilizar para conectar containers.

---

# 📋 VER NETWORKS

Para listar las networks existentes:

```bash
docker network ls
```

Puedes encontrar algo conceptualmente parecido a:

```text
NETWORK ID     NAME
abc123         bridge
def456         host
ghi789         none
xyz000         my-network
```

Las networks predeterminadas como `bridge`, `host` y `none` forman parte de la configuración de Docker.

---

# 🔍 INSPECCIONAR UNA NETWORK

Puedes consultar información detallada:

```bash
docker network inspect my-network
```

Esto permite conocer información como:

| Información          | Ejemplo                     |
| -------------------- | --------------------------- |
| Configuración        | Configuración de la network |
| Driver               | Driver utilizado            |
| Subnet               | Subred                      |
| Gateway              | Gateway                     |
| Containers           | Containers conectados       |
| Configuración de red | Información de networking   |

Conceptualmente:

```text
my-network
    ↓
docker network inspect
    ↓
Network configuration
+
Connected containers
```

> 🔎 Es especialmente útil para **debugging**.

---

# 🗑️ ELIMINAR UNA NETWORK

Para eliminar una network:

```bash
docker network rm my-network
```

> ⚠️ Una network que todavía tenga containers conectados puede no poder eliminarse hasta desconectarlos.

Puedes pensar:

```text
Network
   │
   ├── API
   └── DB
```

Primero necesitas resolver las conexiones existentes antes de eliminar la network.

---

# 🔗 CONECTAR UN CONTAINER AL CREARLO

Puedes conectar un container directamente a una network utilizando:

```bash
docker run -d \
  --name postgres \
  --network my-network \
  postgres
```

Aquí:

```text
--network my-network
```

significa:

> 🔗 Conecta este container a `my-network`.

Resultado:

```text
my-network
     │
     ▼
postgres
```

---

# 🚀 CONECTAR OTRO CONTAINER

Ahora puedes ejecutar la API en la misma network:

```bash
docker run -d \
  --name api \
  --network my-network \
  my-api
```

Resultado:

```text
             my-network
                  │
             ┌────┴────┐
             ▼         ▼
            API     PostgreSQL
```

Como ambos containers pertenecen a la misma network, pueden comunicarse mediante la red interna de Docker.

---

# 🔄 API → POSTGRESQL

Supongamos que PostgreSQL escucha en:

```text
5432
```

La API puede conectarse conceptualmente mediante:

```text
postgres:5432
```

Por ejemplo, una configuración podría tener:

```text
DB_HOST=postgres
DB_PORT=5432
```

Aquí:

| Valor      | Significado                                          |
| ---------- | ---------------------------------------------------- |
| `postgres` | Nombre del container / hostname dentro de la network |
| `5432`     | Puerto de PostgreSQL                                 |

Esto es mucho más conveniente que depender de una IP concreta.

---

# 🧠 NOMBRE DEL CONTAINER COMO HOSTNAME

Dentro de una network Docker, los containers pueden encontrarse mediante nombres.

Por ejemplo:

```text
my-network
    │
    ├── api
    │
    └── postgres
```

La API puede dirigirse a:

```text
postgres
```

en lugar de necesitar algo como:

```text
172.x.x.x
```

Conceptualmente:

```text
API
 │
 │ postgres:5432
 ▼
PostgreSQL
```

Esto también hace que la arquitectura sea más estable porque no necesitas configurar manualmente las IPs de los containers.

> 💡 **En lugar de depender de una IP concreta, la aplicación puede utilizar el nombre del servicio/container como hostname dentro de la network.**

---

# 🆚 NETWORK VS PORT MAPPING

No confundas estos dos conceptos.

| Docker Network                         | Port Mapping                         |
| -------------------------------------- | ------------------------------------ |
| Principalmente `Container ↔ Container` | Principalmente `Host → Container`    |
| Comunicación entre servicios           | Publica un puerto hacia el host      |
| Ejemplo: `API → PostgreSQL`            | Ejemplo: `localhost:8080 → API:3000` |

## 🌐 Docker Network

Permite principalmente:

```text
Container
     ↕
Container
```

Por ejemplo:

```text
API
 ↓
my-network
 ↓
PostgreSQL
```

## 🔌 Port Mapping

Permite publicar un puerto del container hacia el host:

```text
Host
 ↓
-p 8080:3000
 ↓
Container
```

Por ejemplo:

```text
Browser
   ↓
localhost:8080
   ↓
API Container:3000
```

Por lo tanto:

```text
Docker Network
     ↓
Comunicación entre servicios


Port Mapping
     ↓
Acceso desde el host / exterior
```

---

# 🔐 ¿NECESITO PUBLICAR EL PUERTO DE POSTGRESQL?

**No necesariamente.**

Si tienes:

```text
API
 │
 ▼
my-network
 │
 ▼
PostgreSQL
```

la API puede comunicarse directamente con PostgreSQL mediante la network.

No necesitas necesariamente:

```text
Host
 ↓
localhost:5432
 ↓
PostgreSQL
```

para que la API funcione.

> 🔒 Esto permite mantener servicios internos sin exponerlos innecesariamente al host.

---

# 🎯 LA IDEA CENTRAL

Piensa en una Docker Network como una **red privada para los servicios que necesitan comunicarse**:

```text
             my-network
                  │
        ┌─────────┼─────────┐
        ▼         ▼         ▼
       API    PostgreSQL   Redis
        │
        │ postgres:5432
        ▼
    PostgreSQL
```

Y recuerda:

```text
Docker Network
      ↓
Comunicación interna
      ↓
Container ↔ Container
```

Mientras que:

```text
Port Mapping
      ↓
Publicación
      ↓
Host → Container
```

> 🧠 **No necesitas publicar un servicio interno al host solamente para que otro container de la misma network pueda utilizarlo.**


# 🧱 NETWORK DRIVERS

Docker utiliza **network drivers** para determinar cómo funciona una network.

Los tres que debes conocer inicialmente son:

```text
bridge
host
none
```

---

# 🌉 BRIDGE

`bridge` es el caso más habitual para containers.

```text
Container
    │
    ▼
Bridge Network
    │
    ├── Container
    └── Container
```

Una network creada con:

```bash
docker network create my-network
```

normalmente utiliza el driver `bridge` si no especificas otro.

Por ejemplo:

```text
my-network
     │
 ┌───┴────┐
 ▼        ▼
API       DB
```

> 💡 **TIP:** Es el modelo que más utilizarás para aplicaciones con varios containers.

---

# 🖥️ HOST

Con el driver `host`, el container utiliza directamente la red del host en lugar de tener el aislamiento de red típico de una network `bridge`.

```text
Host Network
      │
      ▼
Container
      │
      ▼
Application
```

Esto reduce parte del aislamiento de red.

> ⚠️ **IMPORTANTE:** Es un modo más específico y no es el patrón que normalmente utilizarás para tus aplicaciones Docker cotidianas.

---

# 🚫 NONE

El driver `none` proporciona al container prácticamente **ninguna conectividad de red**.

```text
Container
    │
    ▼
   NONE
    │
    ✕
 Networking
```

Puede ser útil para escenarios donde quieres que un container esté aislado de la red.

---

# 🌍 OVERLAY

También existe:

```text
overlay
```

Está pensado para conectar containers a través de **múltiples Docker hosts**, especialmente en escenarios distribuidos y orquestación.

```text
Docker Host A              Docker Host B
     │                          │
     ▼                          ▼
   API                       Worker
     │                          │
     └──────── Overlay ─────────┘
```

> 💡 **TIP:** Para tu nivel actual basta con saber que `overlay` existe y se utiliza principalmente en arquitecturas distribuidas. No necesitas estudiarlo profundamente todavía.

---

# 🧩 COMPARACIÓN DE DRIVERS

| Driver    | Idea principal                       | Uso típico              |
| --------- | ------------------------------------ | ----------------------- |
| `bridge`  | Red virtual aislada para containers  | ⭐ Uso habitual          |
| `host`    | Utiliza directamente la red del host | Casos específicos       |
| `none`    | Sin conectividad de red              | Aislamiento             |
| `overlay` | Red entre múltiples hosts            | Escenarios distribuidos |

---

# 🔄 CREAR Y CONECTAR UNA ARQUITECTURA

## 1️⃣ Crear network

```bash
docker network create backend-network
```

## 2️⃣ Crear PostgreSQL

```bash
docker run -d \
  --name postgres \
  --network backend-network \
  postgres
```

## 3️⃣ Crear API

```bash
docker run -d \
  --name api \
  --network backend-network \
  my-api
```

Resultado:

```text
              Docker Host
                   │
                   ▼
          backend-network
                   │
              ┌────┴────┐
              ▼         ▼
             API      PostgreSQL
              │
              │ postgres:5432
              └───────────────►
```

La comunicación entre API y PostgreSQL ocurre dentro de Docker.

> 💡 **TIP:** Cuando varios containers están en la misma network, pueden comunicarse entre ellos a través de esa red.

---

# 🔌 CONECTAR UN CONTAINER EXISTENTE

También puedes conectar un container que ya existe a una network:

```bash
docker network connect my-network api
```

Conceptualmente:

```text
Antes:

API
```

Después:

```text
API
 │
 ▼
my-network
```

Esto resulta útil cuando necesitas conectar un container existente a otra red.

---

# 🔓 DESCONECTAR UN CONTAINER

Para desconectar un container:

```bash
docker network disconnect my-network api
```

Resultado:

```text
Antes:

my-network
    │
    ▼
   API
```

Después:

```text
my-network

API
```

El container deja de estar conectado a esa network.

---

# 🧠 UN CONTAINER PUEDE ESTAR EN VARIAS NETWORKS

Esto es muy importante para arquitecturas más complejas.

Un container puede conectarse a varias networks:

```text
             API
            /   \
           /     \
          ▼       ▼
 frontend-net   backend-net
                 │
                 ▼
                 DB
```

Por ejemplo:

| Network            | Containers    |
| ------------------ | ------------- |
| `frontend-network` | API           |
| `backend-network`  | API, Database |

Así puedes controlar mejor qué servicios pueden comunicarse.

---

# 🏗️ EJEMPLO DE ARQUITECTURA REAL

Una aplicación podría tener:

```text
                    Docker Host
                         │
             ┌───────────┴───────────┐
             │                       │
      frontend-network        backend-network
             │                       │
             ▼                 ┌─────┼─────┐
         Frontend              ▼     ▼     ▼
                              API    DB   Redis
```

El `API` pertenece a ambas networks:

```text
Frontend
   │
   ▼
frontend-network
   │
   ▼
  API
   │
   ▼
backend-network
   │
 ┌─┴──────┐
 ▼        ▼
DB      Redis
```

> 🎯 **IDEA CLAVE:** Puedes diseñar la comunicación entre servicios en lugar de conectar indiscriminadamente todos los containers.

---

# 🧠 MAPA MENTAL

```text
                 DOCKER NETWORK
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
       create         ls          inspect
          │
          ▼
       Network
          │
     ┌────┼────┐
     ▼    ▼    ▼
    API   DB  Redis
     │
     ▼
Container-to-Container
```

Y los drivers:

```text
Network Drivers
      │
 ┌────┼─────────┬─────────┐
 ▼    ▼         ▼         ▼
bridge host     none    overlay
```

---

# 🔑 LA IDEA CENTRAL

Cuando pienses en **Docker Networks**, piensa:

```text
Containers
    ↓
Docker Network
    ↓
Comunicación controlada
```

Por ejemplo:

```text
API
 │
 │ backend-network
 ▼
PostgreSQL
```

Y recuerda la diferencia:

| Concepto         | Función                           |
| ---------------- | --------------------------------- |
| **Network**      | Conecta containers                |
| **Port Mapping** | Expone un container hacia el host |

Una arquitectura típica puede terminar siendo:

```text
Browser
   │
   │ localhost:8080
   ▼
Host
   │
   │ Port Mapping
   ▼
API Container
   │
   │ Docker Network
   ▼
PostgreSQL Container
```

> 🚀 **CONCEPTO FUNDAMENTAL:** Ese flujo es la base de prácticamente cualquier aplicación **multi-container** que vas a construir con Docker.
