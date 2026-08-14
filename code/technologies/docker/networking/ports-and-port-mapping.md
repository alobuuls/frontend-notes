# 📄 02 - Ports & Port Mapping

> 🔌 Los **ports** son fundamentales para entender cómo acceder a una aplicación que está ejecutándose dentro de un container.

El punto clave es diferenciar:

```text
Host Port
```

de:

```text
Container Port
```

---

## 📑 Índice

- [📄 02 - Ports \& Port Mapping](#-02---ports--port-mapping)
  - [📑 Índice](#-índice)
- [🔌 ¿QUÉ ES UN CONTAINER PORT?](#-qué-es-un-container-port)
- [🌐 ¿QUÉ ES PORT MAPPING?](#-qué-es-port-mapping)
- [🧠 HOST PORT VS CONTAINER PORT](#-host-port-vs-container-port)
    - [Container Port](#container-port)
    - [Host Port](#host-port)
- [🔄 EJEMPLO COMPLETO](#-ejemplo-completo)
- [🆚 `EXPOSE` VS `-p`](#-expose-vs--p)
  - [`EXPOSE`](#expose)
  - [`-p`](#-p)
- [🏷️ EJEMPLO CON DOCKERFILE](#️-ejemplo-con-dockerfile)
- [🔢 DIFERENTES PORT MAPPINGS](#-diferentes-port-mappings)
  - [1️⃣ Mismo puerto](#1️⃣-mismo-puerto)
  - [2️⃣ Puertos diferentes](#2️⃣-puertos-diferentes)
  - [3️⃣ Otro puerto del host](#3️⃣-otro-puerto-del-host)
- [🧠 RESUMEN VISUAL](#-resumen-visual)
- [🌍 IP BINDING](#-ip-binding)
- [🏠 `localhost` Y `127.0.0.1`](#-localhost-y-127001)
- [🌐 `0.0.0.0`](#-0000)
- [⚠️ `0.0.0.0` DENTRO DE UNA APP](#️-0000-dentro-de-una-app)
- [🧩 DOS COSAS DIFERENTES](#-dos-cosas-diferentes)
  - [🟢 Aplicación escuchando](#-aplicación-escuchando)
  - [🔵 Docker publicando](#-docker-publicando)
- [🔄 FLUJO COMPLETO](#-flujo-completo)
- [🧠 PORT MAPPING VS DOCKER NETWORK](#-port-mapping-vs-docker-network)
    - [🔌 Port Mapping](#-port-mapping)
    - [🌐 Docker Network](#-docker-network)
- [📌 TABLA DE REFERENCIA](#-tabla-de-referencia)
- [🔑 LA IDEA QUE DEBES RECORDAR](#-la-idea-que-debes-recordar)

# 🔌 ¿QUÉ ES UN CONTAINER PORT?

Supongamos que tienes una aplicación Express:

```text
Express
   ↓
listen(3000)
```

Dentro del container:

```text
Container
    │
    └── :3000
          ↓
       Express
```

El puerto `3000` es el puerto en el que **la aplicación está escuchando dentro del container**.

Por ejemplo:

```javascript
app.listen(3000);
```

significa:

> 💡 Express está esperando conexiones en el puerto `3000`.

> ⚠️ Pero esto **no significa automáticamente** que puedas acceder a `localhost:3000` desde tu máquina.

---

# 🌐 ¿QUÉ ES PORT MAPPING?

**Port mapping** permite conectar un puerto del **host** con un puerto del **container**.

Por ejemplo:

```bash
docker run -p 8080:3000 my-api
```

La estructura es:

```text
-p HOST_PORT:CONTAINER_PORT
```

Por lo tanto:

| Puerto | Representa     |
| -----: | -------------- |
| `8080` | Host Port      |
| `3000` | Container Port |

Visualmente:

```text
HOST
localhost:8080
      │
      │ Port Mapping
      ▼
CONTAINER
    :3000
      │
      ▼
Express
```

Ahora puedes acceder desde tu máquina mediante:

```text
http://localhost:8080
```

y Docker redirige ese tráfico hacia:

```text
Container:3000
```

---

# 🧠 HOST PORT VS CONTAINER PORT

Esta diferencia debes tenerla muy clara.

| Concepto           | Significado                                               |
| ------------------ | --------------------------------------------------------- |
| **Container Port** | Puerto donde la aplicación escucha dentro del container   |
| **Host Port**      | Puerto mediante el cual accedes al servicio desde el host |

### Container Port

Es el puerto donde **la aplicación escucha dentro del container**.

```text
Container
    │
    └── :3000
          ↓
       Express
```

### Host Port

Es el puerto mediante el cual **accedes al servicio desde el host**.

```text
Host
    │
    └── localhost:8080
```

Ambos pueden ser diferentes:

```text
localhost:8080
      ↓
container:3000
```

O pueden ser iguales:

```text
localhost:3000
      ↓
container:3000
```

> 🎯 **Regla:** `HOST_PORT` y `CONTAINER_PORT` no tienen que ser necesariamente iguales.

---

# 🔄 EJEMPLO COMPLETO

Supongamos que tu aplicación utiliza:

```text
Express → :3000
```

Ejecutas:

```bash
docker run -p 8080:3000 my-api
```

Entonces:

```text
Browser
   │
   │ http://localhost:8080
   ▼
Docker Host
   │
   │ :8080
   ▼
Docker Port Mapping
   │
   │ :3000
   ▼
Container
   │
   ▼
Express :3000
```

Por eso puedes tener múltiples containers con aplicaciones que utilizan internamente el mismo puerto:

```text
Host :8080 → API Container :3000

Host :8081 → API Container :3000

Host :8082 → API Container :3000
```

El puerto interno puede ser `3000` en todos, mientras que los puertos del host son diferentes.

---

# 🆚 `EXPOSE` VS `-p`

> 🔥 **Esta es una de las diferencias más importantes.**

## `EXPOSE`

Dentro del Dockerfile:

```dockerfile
EXPOSE 3000
```

Esto **documenta** que la aplicación utiliza el puerto `3000`.

Conceptualmente:

```text
EXPOSE 3000
      ↓
"Esta aplicación utiliza el puerto 3000"
```

> ⚠️ `EXPOSE` **no publica el puerto automáticamente**.

---

## `-p`

Cuando ejecutas:

```bash
docker run -p 8080:3000 my-api
```

estás creando un **port mapping**:

```text
-p 8080:3000
      ↓
Host :8080
      ↓
Container :3000
```

Por lo tanto:

| Instrucción | Función                    |
| ----------- | -------------------------- |
| `EXPOSE`    | Documentación / metadata   |
| `-p`        | Publicación / port mapping |

---

# 🏷️ EJEMPLO CON DOCKERFILE

Puedes tener:

```dockerfile
FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

Aquí:

```text
EXPOSE 3000
```

indica que Express utiliza el puerto `3000`.

Pero todavía necesitas ejecutar el container con un mapping si quieres acceder desde el host:

```bash
docker run -p 8080:3000 my-api
```

Resultado:

```text
localhost:8080
       ↓
Container:3000
       ↓
Express
```

---

# 🔢 DIFERENTES PORT MAPPINGS

## 1️⃣ Mismo puerto

```bash
docker run -p 3000:3000 my-api
```

```text
Host :3000
    ↓
Container :3000
```

Accedes mediante:

```text
localhost:3000
```

---

## 2️⃣ Puertos diferentes

```bash
docker run -p 8080:3000 my-api
```

```text
Host :8080
    ↓
Container :3000
```

Accedes mediante:

```text
localhost:8080
```

---

## 3️⃣ Otro puerto del host

```bash
docker run -p 5000:3000 my-api
```

```text
Host :5000
    ↓
Container :3000
```

La aplicación **sigue escuchando en `3000` dentro del container**.

Solo cambió la forma de acceder desde el host.

---

# 🧠 RESUMEN VISUAL

```text
                PORT MAPPING
                     │
                     ▼
             -p HOST:CONTAINER
                     │
             ┌───────┴───────┐
             ▼               ▼
         HOST PORT      CONTAINER PORT
             │               │
         :8080           :3000
             │               │
             └───────┬───────┘
                     ▼
                  Express
```

> 🎯 **La idea central:** la aplicación escucha en el **Container Port** y el **Port Mapping** determina desde qué **Host Port** puedes acceder a ella.

# 🌍 IP BINDING

También puedes especificar **en qué dirección IP del host** quieres publicar el puerto.

Por ejemplo:

```bash
docker run -p 127.0.0.1:8080:3000 my-api
```

La estructura ahora es:

```text
-p HOST_IP:HOST_PORT:CONTAINER_PORT
```

Por lo tanto:

| Valor       | Significado    |
| ----------- | -------------- |
| `127.0.0.1` | Host IP        |
| `8080`      | Host Port      |
| `3000`      | Container Port |

```text
127.0.0.1
    ↓
Host IP

8080
    ↓
Host Port

3000
    ↓
Container Port
```

---

# 🏠 `localhost` Y `127.0.0.1`

`localhost` normalmente hace referencia a la propia máquina.

Por ejemplo:

```text
localhost:8080
```

equivale normalmente a:

```text
127.0.0.1:8080
```

Cuando haces:

```bash
docker run -p 127.0.0.1:8080:3000 my-api
```

estás diciendo:

> 💡 Publica el puerto `3000` del container solamente a través de `127.0.0.1` del host.

Esto significa que el servicio está pensado para ser accesible desde el propio host, no directamente desde otras interfaces de red del host.

---

# 🌐 `0.0.0.0`

También puedes encontrarte con:

```text
0.0.0.0
```

Conceptualmente significa:

> 🌐 **Escuchar en todas las interfaces de red disponibles.**

Por ejemplo:

```bash
docker run -p 0.0.0.0:8080:3000 my-api
```

Esto permite que el puerto publicado esté disponible a través de las interfaces del host, sujeto naturalmente a firewall y configuración de red.

> ⚠️ `0.0.0.0` puede hacer que el servicio sea accesible desde otras interfaces de red. La accesibilidad real también depende del firewall y de la configuración de red.

---

# ⚠️ `0.0.0.0` DENTRO DE UNA APP

Hay otra situación importante.

Supongamos que Express está dentro del container.

No basta necesariamente con:

```javascript
app.listen(3000, 'localhost');
```

porque `localhost` dentro del container significa:

```text
"este mismo container"
```

No significa:

```text
"mi computadora"
```

En aplicaciones dentro de containers suele ser necesario escuchar en:

```text
0.0.0.0
```

Por ejemplo:

```javascript
app.listen(3000, '0.0.0.0');
```

Conceptualmente:

```text
Container
    │
    ├── localhost
    │      ↓
    │   solo el container
    │
    └── 0.0.0.0
           ↓
      interfaces del container
```

Esto permite que Docker pueda enrutar correctamente el tráfico publicado hacia la aplicación.

> 🧠 **Idea clave:** `localhost` dentro de un container se refiere al propio container, no al host.

---

# 🧩 DOS COSAS DIFERENTES

Hay que evitar mezclar estas dos situaciones.

## 🟢 Aplicación escuchando

```text
Express
   ↓
0.0.0.0:3000
```

Esto determina **dónde escucha la aplicación dentro del container**.

## 🔵 Docker publicando

```bash
docker run -p 8080:3000 my-api
```

Esto determina **cómo se accede al container desde el host**.

Son conceptos diferentes:

```text
Application
     ↓
listen()
     ↓
Container Port


Docker
     ↓
-p
     ↓
Host Port → Container Port
```

---

# 🔄 FLUJO COMPLETO

Cuando tienes una aplicación web dentro de Docker:

```text
                 HOST
                  │
          localhost:8080
                  │
                  ▼
          Port Mapping
                  │
                  ▼
          CONTAINER :3000
                  │
                  ▼
              Express
                  │
                  ▼
             Application
```

Por ejemplo:

```bash
docker run -p 8080:3000 my-api
```

y dentro de la aplicación:

```javascript
app.listen(3000, '0.0.0.0');
```

La combinación sería:

```text
Browser
   ↓
localhost:8080
   ↓
Docker
   ↓
Container:3000
   ↓
Express
```

---

# 🧠 PORT MAPPING VS DOCKER NETWORK

También es importante diferenciar esto de **Docker Networking**.

| Port Mapping                      | Docker Network                         |
| --------------------------------- | -------------------------------------- |
| Principalmente `Host → Container` | Principalmente `Container ↔ Container` |
| `localhost:8080 → API:3000`       | `API ↔ PostgreSQL`                     |
| Usa `-p`                          | Usa una Docker Network                 |

### 🔌 Port Mapping

Principalmente:

```text
Host
  ↓
Container
```

Ejemplo:

```text
localhost:8080
      ↓
API:3000
```

### 🌐 Docker Network

Principalmente permite:

```text
Container
     ↕
Container
```

Por ejemplo:

```text
API Container
     ↕
Docker Network
     ↕
PostgreSQL Container
```

Por eso una API que necesita comunicarse con PostgreSQL **no necesita publicar PostgreSQL al host** solamente para que la API pueda conectarse.

Puede existir:

```text
API
 │
 ▼
Docker Network
 │
 ▼
PostgreSQL
```

sin:

```text
Host → PostgreSQL
```

> 💡 **No necesitas publicar un servicio para que otros containers de la misma network puedan comunicarse con él.**

---

# 📌 TABLA DE REFERENCIA

| Concepto           | Significado                                             |
| ------------------ | ------------------------------------------------------- |
| **Container Port** | Puerto donde escucha la aplicación dentro del container |
| **Host Port**      | Puerto utilizado en el host para acceder al servicio    |
| **Port Mapping**   | Relación entre Host Port y Container Port               |
| `-p`               | Publica/mapea un puerto                                 |
| `EXPOSE`           | Documenta el puerto utilizado por la image              |
| `localhost`        | La propia máquina/interfaz local                        |
| `127.0.0.1`        | Loopback del host                                       |
| `0.0.0.0`          | Todas las interfaces disponibles                        |
| `-p 8080:3000`     | Host `8080` → Container `3000`                          |
| `-p 3000:3000`     | Host `3000` → Container `3000`                          |

---

# 🔑 LA IDEA QUE DEBES RECORDAR

Cuando veas:

```bash
docker run -p 8080:3000 my-api
```

léelo mentalmente como:

```text
"Quiero que el puerto 8080 de mi HOST
redirija hacia el puerto 3000 del CONTAINER."
```

Y cuando veas:

```dockerfile
EXPOSE 3000
```

léelo como:

```text
"Esta aplicación utiliza el puerto 3000."
```

La diferencia fundamental es:

```text
EXPOSE
   ↓
Documenta

-p
   ↓
Publica / mapea
```

Y el flujo completo:

```text
Browser
   ↓
Host Port :8080
   ↓
Port Mapping
   ↓
Container Port :3000
   ↓
Express
```

> 🎯 **Quédate con estas tres ideas:**
>
> * `listen()` → dónde escucha la aplicación.
> * `-p` → cómo publicas el container hacia el host.
> * Docker Network → cómo se comunican los containers entre sí.
