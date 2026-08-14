# 📄 02 - Compose Services

> [!TIP]
> En Docker Compose, el concepto de **Service** es fundamental porque permite definir los diferentes componentes que forman una aplicación.

Por ejemplo:

```text
Application
│
├── API
├── PostgreSQL
└── Redis
```

En Compose, cada uno puede representarse mediante un **service**.

---

## 📑 ÍNDICE 

- [📄 02 - Compose Services](#-02---compose-services)
  - [📑 ÍNDICE](#-índice)
- [🧩 ¿Qué es un Service?](#-qué-es-un-service)
- [🆚 Service vs Container](#-service-vs-container)
    - [Service](#service)
    - [Container](#container)
- [🏗️ `services:`](#️-services)
- [🖼️ `image`](#️-image)
- [🏗️ `build`](#️-build)
- [🏷️ `container_name`](#️-container_name)
- [🔌 `ports`](#-ports)
- [🌱 `environment`](#-environment)
- [📄 `env_file`](#-env_file)
- [🔄 `environment` vs `env_file`](#-environment-vs-env_file)
    - [`environment`](#environment)
    - [`env_file`](#env_file)
- [🔁 `restart`](#-restart)
- [▶️ `command`](#️-command)
- [🧩 Ejemplo completo](#-ejemplo-completo)
- [🔄 `image` vs `build`](#-image-vs-build)
    - [`image`](#image)
    - [`build`](#build)
- [🏗️ Service → Container](#️-service--container)
- [🧠 Un Service no es simplemente "un container"](#-un-service-no-es-simplemente-un-container)
- [🔥 La idea fundamental](#-la-idea-fundamental)

# 🧩 ¿Qué es un Service?

Un **Service** es una definición dentro de `compose.yaml` que describe **cómo debe crearse y ejecutarse un componente de la aplicación**.

```yaml
services:

  api:
    image: my-api:1.0

  postgres:
    image: postgres:17
```

Aquí tenemos:

```text
services
   │
   ├── api
   │
   └── postgres
```

Cada service contiene la configuración necesaria para ejecutar ese componente.

> [!IMPORTANT]
> **Un service es la definición/configuración de un tipo de container dentro de Compose.**
>
> Cuando ejecutas Compose, esa definición se utiliza para crear y administrar los containers correspondientes.

---

# 🆚 Service vs Container

No debes confundirlos.

| Service                   | Container                                    |
| ------------------------- | -------------------------------------------- |
| Es la **definición**      | Es la **instancia que realmente se ejecuta** |
| Describe la configuración | Ejecuta esa configuración                    |
| Blueprint / Definition    | Running Instance                             |

### Service

```yaml
api:
  image: my-api:1.0
  ports:
    - "3000:3000"
```

### Container

```text
api service
     ↓
Container
```

Conceptualmente:

```text
Service
   ↓
Configuration
   ↓
Container
```

> **El service describe cómo debe ejecutarse el componente; el container es la instancia creada a partir de esa configuración.**

---

# 🏗️ `services:`

Todos los services de una aplicación se definen dentro de:

```yaml
services:
```

Por ejemplo:

```yaml
services:

  api:
    image: my-api:1.0

  postgres:
    image: postgres:17

  redis:
    image: redis:7
```

La estructura sería:

```text
services
│
├── api
├── postgres
└── redis
```

Los nombres:

```text
api
postgres
redis
```

son los **nombres de los services** dentro de Compose.

---

# 🖼️ `image`

Indica qué Docker Image utilizará el service.

```yaml
services:

  api:
    image: my-api:1.0

  postgres:
    image: postgres:17
```

Conceptualmente:

```text
api
 ↓
my-api:1.0
 ↓
Container
```

Y:

```text
postgres
 ↓
postgres:17
 ↓
Container
```

Puedes utilizar imágenes existentes de registries o imágenes que hayas construido tú.

---

# 🏗️ `build`

En lugar de utilizar directamente una Image existente, puedes indicarle a Compose que **construya una Image utilizando un Dockerfile**.

```yaml
services:

  api:
    build: ./backend
```

Conceptualmente:

```text
./backend
   │
   ├── Dockerfile
   ├── package.json
   └── src/
        ↓
      build
        ↓
     Image
        ↓
    Container
```

Esto es muy común durante el desarrollo.

Por ejemplo:

```text
project/
│
├── backend/
│   ├── Dockerfile
│   └── src/
│
└── compose.yaml
```

Entonces:

```yaml
services:

  api:
    build: ./backend
```

le indica a Compose dónde encontrar el contexto necesario para construir la Image.

---

# 🏷️ `container_name`

Permite especificar explícitamente el nombre del container:

```yaml
services:

  api:
    image: my-api:1.0
    container_name: my-api
```

Entonces:

```text
api service
    ↓
my-api container
```

Sin embargo, **no siempre necesitas utilizar `container_name`**.

Compose puede generar nombres automáticamente.

Además, cuando trabajas con varias réplicas de un service, establecer un nombre fijo puede limitar ciertas capacidades.

> [!TIP]
> **Utiliza `container_name` solamente cuando realmente necesites controlar el nombre del container.**

---

# 🔌 `ports`

Permite publicar/m mapear puertos entre el host y el container.

```yaml
services:

  api:
    image: my-api:1.0
    ports:
      - "3000:3000"
```

Esto significa:

```text
HOST
localhost:3000
      │
      ▼
CONTAINER
port 3000
      │
      ▼
API
```

La estructura es:

```text
HOST_PORT:CONTAINER_PORT
```

Por ejemplo:

```yaml
ports:
  - "8080:3000"
```

significa:

```text
localhost:8080
      ↓
container:3000
```

---

# 🌱 `environment`

Permite proporcionar **Environment Variables** al container.

```yaml
services:

  api:
    image: my-api:1.0
    environment:
      NODE_ENV: production
      PORT: 3000
```

Dentro del container:

```text
NODE_ENV=production
PORT=3000
```

La aplicación puede acceder a esos valores desde su entorno.

```text
Compose
   ↓
environment
   ↓
Container
   ↓
Environment Variables
   ↓
Application
```

---

# 📄 `env_file`

En lugar de escribir las variables directamente:

```yaml
environment:
  NODE_ENV: production
  PORT: 3000
```

puedes utilizar un archivo:

```text
.env
```

y especificarlo mediante:

```yaml
services:

  api:
    image: my-api:1.0
    env_file:
      - .env
```

Entonces:

```text
.env
 ↓
env_file
 ↓
Container
 ↓
Environment Variables
```

Por ejemplo, `.env`:

```env
NODE_ENV=production
PORT=3000
DATABASE_URL=postgres://...
```

---

# 🔄 `environment` vs `env_file`

Ambos sirven para proporcionar variables de entorno, pero la configuración es diferente.

| `environment`                            | `env_file`                          |
| ---------------------------------------- | ----------------------------------- |
| Variables directamente en `compose.yaml` | Variables almacenadas en un archivo |
| `NODE_ENV: production`                   | `- .env`                            |

### `environment`

```yaml
environment:
  NODE_ENV: production
  PORT: 3000
```

### `env_file`

```yaml
env_file:
  - .env
```

> [!NOTE]
> No necesitas memorizar cuál utilizar siempre; lo importante es entender **de dónde recibe el container su configuración**.

---

# 🔁 `restart`

Permite definir una política para reiniciar un container.

```yaml
services:

  api:
    image: my-api:1.0
    restart: unless-stopped
```

Esto indica cómo debe comportarse Compose/Docker cuando el container termina o cuando ocurre determinada condición.

Algunas políticas comunes son:

```yaml
restart: "no"
restart: always
restart: on-failure
restart: unless-stopped
```

Conceptualmente:

```text
API Container
     ↓
termina inesperadamente
     ↓
Restart Policy
     ↓
Docker intenta reiniciarlo
```

Es especialmente útil para servicios que deberían permanecer disponibles.

---

# ▶️ `command`

Permite modificar el comando que ejecutará el container.

Por ejemplo, si la Image tiene:

```dockerfile
CMD ["npm", "start"]
```

puedes cambiarlo desde Compose:

```yaml
services:

  api:
    image: my-api:1.0
    command: npm run dev
```

Conceptualmente:

```text
Docker Image
     ↓
Default CMD
     ↓
Compose command
     ↓
Container
```

Esto es especialmente útil cuando quieres utilizar la misma Image con diferentes comportamientos.

---

# 🧩 Ejemplo completo

Podemos combinar varias de estas propiedades:

```yaml
services:

  api:
    build: ./backend
    container_name: my-api
    ports:
      - "3000:3000"
    environment:
      NODE_ENV: development
      PORT: 3000
    restart: unless-stopped
    command: npm run dev

  postgres:
    image: postgres:17
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: password
    restart: unless-stopped
```

Ahora podemos visualizar:

```text
services
│
├── api
│    │
│    ├── build
│    ├── container_name
│    ├── ports
│    ├── environment
│    ├── restart
│    └── command
│          ↓
│       Container
│
└── postgres
     │
     ├── image
     ├── environment
     └── restart
           ↓
        Container
```

---

# 🔄 `image` vs `build`

Esta diferencia es especialmente importante.

| `image`                     | `build`             |
| --------------------------- | ------------------- |
| Utiliza una Image existente | Construye una Image |
| `image: postgres:17`        | `build: ./backend`  |

### `image`

```yaml
services:

  postgres:
    image: postgres:17
```

Flujo:

```text
Image
  ↓
Service
  ↓
Container
```

### `build`

```yaml
services:

  api:
    build: ./backend
```

Flujo:

```text
Dockerfile
    ↓
docker build
    ↓
Image
    ↓
Container
```

Por eso puedes tener en la misma aplicación:

```yaml
services:

  api:
    build: ./backend

  postgres:
    image: postgres:17
```

Es decir:

```text
API
 ↓
Build local
 ↓
Image
 ↓
Container


PostgreSQL
 ↓
Existing Image
 ↓
Container
```

---

# 🏗️ Service → Container

La relación fundamental que debes conservar es:

```text
                 compose.yaml
                      │
                   services
                      │
            ┌─────────┴─────────┐
            ▼                   ▼
          api                postgres
            │                   │
       Configuration       Configuration
            │                   │
            ▼                   ▼
        Container           Container
```

Y cada service puede definir cosas como:

| Propiedad     | Propósito                    |
| ------------- | ---------------------------- |
| `image`       | Image a utilizar             |
| `build`       | Construcción de una Image    |
| `ports`       | Publicación/mapeo de puertos |
| `environment` | Variables de entorno         |
| `env_file`    | Variables desde un archivo   |
| `restart`     | Política de reinicio         |
| `command`     | Comando a ejecutar           |

---

# 🧠 Un Service no es simplemente "un container"

Esta distinción es importante:

```text
❌ Service = Container
```

Más correctamente:

```text
Service
   ↓
Definition / Configuration
   ↓
Container(s)
```

El **service** pertenece al modelo declarativo de Compose.

El **container** es el recurso que Docker realmente ejecuta.

Por eso, cuando modificas:

```yaml
services:
  api:
    image: my-api:2.0
```

estás modificando la **definición del service**.

Después Compose se encarga de aplicar esa configuración a los containers correspondientes.

---

# 🔥 La idea fundamental

Piensa en `services:` como el lugar donde describes **qué componentes forman tu aplicación y cómo deben ejecutarse**:

```text
services
   │
   ├── api
   │    ├── build
   │    ├── ports
   │    ├── environment
   │    └── command
   │
   └── postgres
        ├── image
        ├── environment
        └── restart
```

> [!IMPORTANT]
> **Un Service es una definición declarativa de un componente de la aplicación. Compose utiliza esa definición para crear y administrar los containers que ejecutan ese componente.**
