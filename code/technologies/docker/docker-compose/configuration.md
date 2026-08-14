# 📄 03 - Compose Configuration

> [!TIP]
> Docker Compose permite definir **cómo debe configurarse y ejecutarse una aplicación compuesta por varios servicios** mediante un archivo YAML.
>
> La idea principal es pasar de configurar containers manualmente con muchos comandos a declarar toda la configuración en un solo archivo.

```text
compose.yaml
     ↓
Configuration
     ↓
Docker Compose
     ↓
Services
     ↓
Containers
```

---

## 📑 ÍNDICE

- [📄 03 - Compose Configuration](#-03---compose-configuration)
  - [📑 ÍNDICE](#-índice)
- [🧩 1. ¿Qué es `compose.yaml`?](#-1-qué-es-composeyaml)
- [🏗️ 2. `services`](#️-2-services)
- [🏗️ 3. `build`](#️-3-build)
- [🖼️ 4. `image`](#️-4-image)
    - [`build` vs `image`](#build-vs-image)
- [🔌 5. `ports`](#-5-ports)
- [🌱 6. `environment`](#-6-environment)
- [📄 7. `env_file`](#-7-env_file)
- [💾 8. `volumes`](#-8-volumes)
- [🌐 9. `networks`](#-9-networks)
- [🔗 10. `depends_on`](#-10-depends_on)
- [⚙️ 11. `command`](#️-11-command)
- [🔄 12. `restart`](#-12-restart)
- [📝 13. YAML básico](#-13-yaml-básico)
  - [Objetos](#objetos)
  - [Arrays](#arrays)
  - [Objetos](#objetos-1)
- [🔗 14. `.env` + Compose](#-14-env--compose)
- [🏗️ 15. Ejemplo completo](#️-15-ejemplo-completo)
- [🧠 La idea importante](#-la-idea-importante)

# 🧩 1. ¿Qué es `compose.yaml`?

`compose.yaml` es un archivo de configuración utilizado por Docker Compose para definir los servicios, redes, volumes, variables y demás características de una aplicación.

Por ejemplo:

```yaml
services:

  api:
    build: .

  db:
    image: postgres
```

Aquí estamos declarando que nuestra aplicación tiene dos servicios:

```text
services
   │
   ├── api
   │     ↓
   │   Build propio
   │
   └── db
         ↓
       PostgreSQL
```

Docker Compose utiliza esta información para crear y administrar los containers correspondientes.

> **Compose Configuration = descripción declarativa de cómo debe funcionar la aplicación.**

---

# 🏗️ 2. `services`

La propiedad principal de un archivo Compose es:

```yaml
services:
```

Dentro de ella defines los diferentes servicios de tu aplicación.

```yaml
services:

  api:
    ...

  db:
    ...

  redis:
    ...
```

Conceptualmente:

```text
services
   │
   ├── api
   ├── db
   └── redis
```

Cada nombre representa un servicio.

---

# 🏗️ 3. `build`

`build` indica que Docker debe **construir una Image utilizando un Dockerfile**.

```yaml
services:

  api:
    build: .
```

Esto equivale conceptualmente a:

```text
Dockerfile
    ↓
docker build
    ↓
Image
    ↓
Container
```

También puedes indicar otro directorio:

```yaml
services:

  api:
    build: ./backend
```

En este caso, `./backend` será el contexto utilizado para construir la Image.

---

# 🖼️ 4. `image`

`image` indica qué Docker Image debe utilizar el servicio.

```yaml
services:

  db:
    image: postgres:17
```

Conceptualmente:

```text
postgres:17
     ↓
Service
     ↓
Container
```

No necesitas construir esta Image desde tu proyecto porque ya existe.

Puedes utilizar:

```yaml
image: nginx
```

o:

```yaml
image: node:22
```

o:

```yaml
image: postgres:17
```

### `build` vs `image`

| `build`               | `image`                      |
| --------------------- | ---------------------------- |
| Construye una Image   | Utiliza una Image existente  |
| Utiliza un Dockerfile | Utiliza una Image disponible |

Incluso pueden combinarse:

```yaml
services:

  api:
    build: .
    image: my-api:1.0
```

En ese caso, Compose construye la Image y le asigna ese nombre/tag.

---

# 🔌 5. `ports`

`ports` permite publicar/mapping puertos del container hacia el host.

```yaml
services:

  api:
    build: .
    ports:
      - "3000:3000"
```

Significa:

```text
HOST
localhost:3000
      ↓
CONTAINER
port 3000
      ↓
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

# 🌱 6. `environment`

Permite definir variables de entorno para el servicio.

```yaml
services:

  api:
    build: .
    environment:
      NODE_ENV: production
      PORT: 3000
```

Dentro del container tendremos:

```text
NODE_ENV=production
PORT=3000
```

También puedes utilizar la sintaxis:

```yaml
environment:
  - NODE_ENV=production
  - PORT=3000
```

Ambas formas son válidas.

---

# 📄 7. `env_file`

Permite cargar variables desde un archivo externo.

```yaml
services:

  api:
    build: .
    env_file:
      - .env
```

Y:

```text
.env
```

puede contener:

```env
NODE_ENV=development
PORT=3000
DATABASE_URL=postgres://...
```

El flujo sería:

```text
.env
  ↓
env_file
  ↓
Compose
  ↓
Container
  ↓
Application
```

> [!TIP]
> Esto ayuda a separar la configuración del archivo Compose.

---

# 💾 8. `volumes`

Permite montar storage en un servicio.

Por ejemplo:

```yaml
services:

  db:
    image: postgres
    volumes:
      - postgres-data:/var/lib/postgresql/data

volumes:
  postgres-data:
```

Conceptualmente:

```text
PostgreSQL Container
        │
        ▼
postgres-data
        │
        ▼
Persistent Data
```

Esto evita depender exclusivamente del filesystem efímero del container.

También puedes utilizar bind mounts:

```yaml
services:

  api:
    volumes:
      - ./src:/app/src
```

Esto es muy común durante development.

---

# 🌐 9. `networks`

Permite definir las redes utilizadas por los servicios.

Por ejemplo:

```yaml
services:

  api:
    networks:
      - app-network

  db:
    networks:
      - app-network

networks:
  app-network:
```

Entonces:

```text
app-network
     │
 ┌───┴────┐
 ▼        ▼
API       DB
```

Los servicios conectados a la misma network pueden comunicarse entre sí.

Por ejemplo:

```text
API
 ↓
postgres:5432
 ↓
PostgreSQL
```

No necesitas utilizar las IPs internas de los containers.

---

# 🔗 10. `depends_on`

Permite indicar que un servicio depende de otro.

```yaml
services:

  api:
    build: .
    depends_on:
      - db

  db:
    image: postgres
```

Conceptualmente:

```text
api
 ↓
depends_on
 ↓
db
```

Esto permite expresar una relación de dependencia entre servicios.

> [!WARNING]
> **`depends_on` no significa necesariamente que PostgreSQL ya esté completamente listo para aceptar conexiones.** Ordenar el inicio de containers y comprobar que una aplicación está realmente lista son cosas diferentes.

---

# ⚙️ 11. `command`

Permite sobrescribir el comando utilizado para iniciar el container.

```yaml
services:

  api:
    build: .
    command: npm run dev
```

Si la Image tenía:

```dockerfile
CMD ["npm", "start"]
```

Compose puede proporcionar otro comando:

```text
Dockerfile
    ↓
CMD npm start

        ↓ Compose

command: npm run dev
        ↓
npm run dev
```

Esto es especialmente útil para configurar diferentes comportamientos durante development.

---

# 🔄 12. `restart`

Define políticas para reiniciar un servicio.

```yaml
services:

  api:
    build: .
    restart: unless-stopped
```

Algunas políticas comunes son:

```yaml
restart: no
restart: always
restart: on-failure
restart: unless-stopped
```

Conceptualmente:

```text
Container
    ↓
Stops / crashes
    ↓
Restart Policy
    ↓
Docker decide si debe reiniciarlo
```

---

# 📝 13. YAML básico

Como Compose utiliza YAML, necesitas entender algunas reglas básicas.

## Objetos

```yaml
api:
  image: node:22
  ports:
    - "3000:3000"
```

La indentación representa la estructura.

```text
api
 ├── image
 └── ports
```

> [!WARNING]
> La indentación en YAML es importante.

---

## Arrays

Por ejemplo:

```yaml
ports:
  - "3000:3000"
  - "8080:8080"
```

o:

```yaml
depends_on:
  - db
```

Los elementos precedidos por `-` forman una lista.

---

## Objetos

También puedes tener propiedades dentro de propiedades:

```yaml
environment:
  NODE_ENV: production
  PORT: 3000
```

Conceptualmente:

```text
environment
   ├── NODE_ENV
   └── PORT
```

---

# 🔗 14. `.env` + Compose

Compose puede trabajar junto con `.env`.

Por ejemplo:

```env
POSTGRES_VERSION=17
API_PORT=3000
```

Y en `compose.yaml`:

```yaml
services:

  api:
    build: .
    ports:
      - "${API_PORT}:3000"

  db:
    image: postgres:${POSTGRES_VERSION}
```

El flujo sería:

```text
.env
 │
 ├── API_PORT
 └── POSTGRES_VERSION
        ↓
 compose.yaml
        ↓
 Docker Compose
        ↓
 Services
```

> [!TIP]
> Esto permite cambiar configuraciones sin modificar directamente el archivo Compose.

---

# 🏗️ 15. Ejemplo completo

Una aplicación sencilla podría tener:

```yaml
services:

  api:
    build: ./backend
    ports:
      - "3000:3000"
    environment:
      NODE_ENV: development
      PORT: 3000
    depends_on:
      - db

  db:
    image: postgres:17
    environment:
      POSTGRES_DB: mydb
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
    volumes:
      - postgres-data:/var/lib/postgresql/data

volumes:
  postgres-data:
```

El mapa mental sería:

```text
                 compose.yaml
                      │
              ┌───────┴───────┐
              ▼               ▼
             API              DB
              │               │
        build ./backend   postgres:17
              │               │
              ▼               ▼
          Container        Container
              │               │
              └───────┬───────┘
                      │
                 Docker Network
                      │
                      ▼
                 Communication
```

Y PostgreSQL tiene:

```text
PostgreSQL Container
        ↓
postgres-data
        ↓
Persistent Data
```

---

# 🧠 La idea importante

No necesitas memorizar todas las propiedades de Compose como una lista aislada.

Lo importante es entender que cada propiedad **describe una parte de cómo debe ejecutarse un servicio**:

| Propiedad     | ¿Qué configura?                |
| ------------- | ------------------------------ |
| `services`    | Los servicios de la aplicación |
| `build`       | Cómo construir la Image        |
| `image`       | Qué Image utilizar             |
| `ports`       | Publicación de puertos         |
| `environment` | Variables de entorno           |
| `env_file`    | Variables desde un archivo     |
| `volumes`     | Persistencia o mounts          |
| `networks`    | Redes                          |
| `depends_on`  | Dependencias entre servicios   |
| `command`     | Comando de inicio              |
| `restart`     | Política de reinicio           |

En conjunto:

```text
                 compose.yaml
                      │
        ┌─────────────┼─────────────┐
        ▼             ▼             ▼
      Build          Config       Runtime
        │             │             │
        ▼             ▼             ▼
      Image       Environment    Container
                      │
             ┌────────┼────────┐
             ▼        ▼        ▼
          Ports    Volumes   Networks
```

> [!IMPORTANT]
> Así es como Compose pasa de ser simplemente **"un archivo YAML"** a convertirse en una descripción completa de la arquitectura de tu aplicación.
