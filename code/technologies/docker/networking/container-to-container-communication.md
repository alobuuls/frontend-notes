# 📄 04 - Container to Container Communication

> 🔥🔥 **CONCEPTO FUNDAMENTAL:** Este es uno de los conceptos **más importantes de Docker Networking**, porque aquí empiezas a conectar Docker con una arquitectura real de backend.

La idea fundamental es:

> **Los containers pueden comunicarse entre sí utilizando una Docker Network.**

Por ejemplo:

```text
API
 ↓
PostgreSQL
```

Ambos pueden ejecutarse en containers diferentes:

```text
api
postgres
```

y estar conectados a:

```text
my-network
```

Entonces:

```text
             my-network
                  │
          ┌───────┴───────┐
          ▼               ▼
     API Container   PostgreSQL Container
```

---

# 🌐 ¿CÓMO SE COMUNICAN LOS CONTAINERS?

Supongamos que tienes:

```text
my-network
    │
    ├── api
    │
    └── postgres
```

La API necesita conectarse a PostgreSQL.

El flujo es:

```text
API Container
      │
      │ Docker Network
      ▼
PostgreSQL Container
      │
      ▼
PostgreSQL :5432
```

La comunicación ocurre **internamente dentro de Docker**.

> 💡 **TIP:** No necesitas salir al host para que un container se comunique con otro.

---

# 🧠 LA IDEA DE `localhost`

🔥 Esto debes entenderlo **MUY bien**.

Cuando estás dentro de un container:

```text
localhost
```

significa:

> **el propio container en el que estás ejecutando el proceso.**

Por ejemplo:

```text
API Container
     │
     └── localhost
```

Ese `localhost` se refiere al **API Container**.

No significa:

```text
PostgreSQL Container
```

ni tampoco significa automáticamente:

```text
Docker Host
```

---

# 🚨 EJEMPLO CON `localhost`

Tenemos:

```text
my-network
    │
 ┌──┴───────┐
 ▼          ▼
api       postgres
```

La API está dentro de:

```text
api
```

Si desde la API intentas:

```text
localhost:5432
```

Docker interpreta:

```text
api container
      │
      ▼
localhost:5432
```

Por lo tanto, estás buscando PostgreSQL **dentro del mismo container de la API**.

Pero PostgreSQL está aquí:

```text
postgres container
```

Por eso normalmente sería incorrecto:

```env
DATABASE_HOST=localhost
```

cuando la base de datos está en otro container.

---

# ❌ CONFIGURACIÓN INCORRECTA

Tenemos:

```text
my-network
    │
    ├── api
    │
    └── postgres
```

Pero la API tiene:

```env
DATABASE_HOST=localhost
DATABASE_PORT=5432
```

El flujo sería:

```text
API
 ↓
localhost:5432
 ↓
API Container
```

❌ No llega al PostgreSQL que está en:

```text
postgres
```

---

# ✅ CONFIGURACIÓN CORRECTA

Si el container/servicio de PostgreSQL se llama:

```text
postgres
```

la API puede utilizar:

```env
DATABASE_HOST=postgres
DATABASE_PORT=5432
```

Entonces:

```text
API
 │
 │ postgres:5432
 ▼
PostgreSQL
```

Conceptualmente:

```text
DATABASE_HOST
      ↓
   postgres
      ↓
hostname dentro de Docker Network
```

> 🎯 **REGLA CLAVE:** Container → Container = utiliza el **hostname del otro container/servicio + su puerto interno**.

---

# 🧩 ¿POR QUÉ FUNCIONA `postgres`?

Docker proporciona resolución de nombres dentro de las networks.

Puedes pensar en:

```text
my-network
      │
      ├── api
      │
      └── postgres
```

como si Docker tuviera una especie de DNS interno:

```text
postgres
    ↓
PostgreSQL Container
```

Por eso la API puede utilizar:

```text
postgres:5432
```

en lugar de necesitar conocer una IP concreta.

---

# 🔄 CONTAINER NAME COMO HOSTNAME

Supongamos:

```bash
docker run -d \
  --name postgres \
  --network my-network \
  postgres
```

El nombre:

```text
postgres
```

puede utilizarse como hostname desde otro container conectado a la misma network.

Entonces:

```text
API
 │
 │ postgres
 ▼
Docker DNS
 │
 ▼
PostgreSQL Container
```

> 💡 **TIP:** Esto es mucho más práctico que configurar manualmente una IP.

---

# 🐘 EJEMPLO COMPLETO

Tenemos:

```text
                 my-network
                      │
             ┌────────┴────────┐
             ▼                 ▼
            api             postgres
             │                 │
             │                 ▼
             │             PostgreSQL
             │
             └── postgres:5432
```

El backend podría tener:

```env
DATABASE_HOST=postgres
DATABASE_PORT=5432
DATABASE_USER=myuser
DATABASE_PASSWORD=mypassword
DATABASE_NAME=mydb
```

El punto importante es:

```text
DATABASE_HOST=postgres
```

No:

```text
DATABASE_HOST=localhost
```

porque PostgreSQL vive en otro container.

---

# 🔌 ¿QUÉ PUERTO UTILIZA EL CONTAINER?

PostgreSQL normalmente escucha en:

```text
5432
```

Entonces desde la API:

```text
postgres:5432
```

significa:

| Parte      | Significado          |
| ---------- | -------------------- |
| `postgres` | Container / hostname |
| `5432`     | Puerto de PostgreSQL |

El flujo completo:

```text
API Container
      │
      │ postgres:5432
      ▼
Docker Network
      │
      ▼
PostgreSQL Container
      │
      ▼
PostgreSQL :5432
```

---

# 🌎 ¿Y `localhost:5432` DESDE MI COMPUTADORA?

Aquí aparece una diferencia **MUY importante**.

Supongamos que ejecutas PostgreSQL así:

```bash
docker run -d \
  --name postgres \
  --network my-network \
  -p 5432:5432 \
  postgres
```

Ahora tienes un mapping:

```text
HOST
localhost:5432
      │
      ▼
CONTAINER
postgres:5432
```

Por lo tanto, **desde tu computadora** puedes conectarte mediante:

```text
localhost:5432
```

Pero **desde el API Container** deberías utilizar:

```text
postgres:5432
```

> 🔑 **IDEA FUNDAMENTAL:** Son dos caminos diferentes.

| Desde dónde       | Host        | Puerto |
| ----------------- | ----------- | ------ |
| 💻 Tu computadora | `localhost` | `5432` |
| 🐳 API Container  | `postgres`  | `5432` |

```text
💻 Computadora
localhost:5432
      │
      │ Port Mapping
      ▼
🐳 PostgreSQL Container
postgres:5432


🐳 API Container
      │
      │ Docker Network
      ▼
postgres:5432
      │
      ▼
🐳 PostgreSQL Container
```

> 🧠 **RECUERDA:** `localhost` siempre depende de **desde dónde estás haciendo la conexión**. Dentro de un container, `localhost` apunta a ese mismo container.

# 🧠 HOST VS CONTAINER

Visualízalo así:

```text
                 DOCKER HOST
                      │
              localhost:5432
                      │
                Port Mapping
                      │
                      ▼
              PostgreSQL Container
                      ▲
                      │
                Docker Network
                      │
                      │ postgres:5432
                      │
                 API Container
```

### 💻 Desde tu computadora

```text
localhost:5432
```

### 🐳 Desde otro container

```text
postgres:5432
```

> 🔥 **CONCEPTO FUNDAMENTAL:** Esta diferencia es fundamental.

---

# 🚫 ¿NECESITO `-p` PARA CONTAINER → CONTAINER?

**No.**

Si ambos containers están en la misma network:

```text
my-network
    │
    ├── api
    │
    └── postgres
```

la API puede conectarse directamente:

```text
api
 ↓
postgres:5432
 ↓
postgres
```

No necesitas:

```bash
-p 5432:5432
```

para que **la API** pueda acceder a PostgreSQL.

> 💡 **TIP:** El `-p` solamente sería necesario si quieres que algo externo al network, como tu máquina, pueda acceder a PostgreSQL.

---

# 🔐 EJEMPLO SIN PUBLICAR POSTGRESQL

Puedes tener:

```bash
docker run -d \
  --name postgres \
  --network my-network \
  postgres
```

Sin:

```text
-p 5432:5432
```

Y:

```text
API
  │
  │ postgres:5432
  ▼
PostgreSQL
```

La API funciona perfectamente porque ambos están dentro de:

```text
my-network
```

Pero desde tu computadora:

```text
localhost:5432
```

❌ no estará disponible mediante un port mapping.

---

# 🏗️ ARQUITECTURA REAL

Una aplicación podría tener:

```text
                         Docker Host
                              │
               ┌──────────────┴──────────────┐
               │                             │
          Host Port                    Docker Network
               │                             │
       localhost:8080                 ┌──────┴──────┐
               │                       │             │
               ▼                       ▼             ▼
          API Container              API         PostgreSQL
               │                       │             │
               │                       └─────────────┘
               │                          postgres:5432
               ▼
           Express
```

| Desde dónde  | Conexión         |
| ------------ | ---------------- |
| 🌐 Navegador | `localhost:8080` |
| 🐳 API       | `postgres:5432`  |

---

# 🧩 API + POSTGRESQL + REDIS

El mismo concepto se puede extender:

```text
                 backend-network
                       │
             ┌─────────┼─────────┐
             ▼         ▼         ▼
            API      postgres    redis
             │         ▲          ▲
             │         │          │
             └─────────┴──────────┘
```

La API podría utilizar:

```env
DATABASE_HOST=postgres
DATABASE_PORT=5432

REDIS_HOST=redis
REDIS_PORT=6379
```

Porque:

```text
postgres
    ↓
PostgreSQL Container
```

y:

```text
redis
    ↓
Redis Container
```

---

# 🔄 FLUJO DE UNA PETICIÓN

Imagina:

```text
Angular
   ↓
localhost:8080
   ↓
API Container
   ↓
postgres:5432
   ↓
PostgreSQL Container
```

Hay dos tipos de comunicación:

### 1️⃣ Host → Container

```text
Angular / Browser
      ↓
localhost:8080
      ↓
Port Mapping
      ↓
API:3000
```

### 2️⃣ Container → Container

```text
API
 ↓
Docker Network
 ↓
postgres:5432
 ↓
PostgreSQL
```

Esto conecta directamente los conceptos de:

```text
Port Mapping
+
Docker Networks
+
Container Communication
```

---

# ⚠️ ERROR MUY COMÚN

Un error típico al empezar con Docker:

```env
DATABASE_HOST=localhost
```

y pensar:

> "PostgreSQL está en mi computadora."

Pero si PostgreSQL está realmente en otro container:

```text
api
postgres
```

entonces desde la API:

```text
localhost
```

significa:

```text
API Container
```

No:

```text
PostgreSQL Container
```

Por eso debes utilizar:

```env
DATABASE_HOST=postgres
```

si `postgres` es el hostname disponible dentro de la network.

---

# 🧠 `localhost` EN DIFERENTES LUGARES

Esta tabla ayuda muchísimo:

| Desde dónde             | `localhost` significa   |
| ----------------------- | ----------------------- |
| 💻 Tu computadora       | Tu computadora          |
| 🐳 API Container        | El API Container        |
| 🐘 PostgreSQL Container | El PostgreSQL Container |
| 🔴 Redis Container      | El Redis Container      |

Por eso:

```text
API → localhost:5432
```

no significa:

```text
API → PostgreSQL
```

si PostgreSQL está en otro container.

---

# 📌 RESUMEN VISUAL

```text
                    HOST
                     │
              localhost:8080
                     │
                     ▼
                API Container
                     │
                     │ Docker Network
                     │
                     │ postgres:5432
                     ▼
             PostgreSQL Container
```

Y recuerda:

```text
localhost
    ↓
"yo mismo"
```

mientras:

```text
postgres
    ↓
"el container/servicio llamado postgres"
```

---

# 🔑 LA IDEA CENTRAL

Si tienes:

```text
api
postgres
```

conectados a:

```text
my-network
```

entonces:

```text
API
 ↓
postgres:5432
 ↓
PostgreSQL
```

es la comunicación interna correcta.

Mientras que:

```text
localhost:5432
```

desde tu computadora puede funcionar **si publicaste**:

```bash
-p 5432:5432
```

Por eso debes pensar en dos mundos:

```text
┌───────────────────────────────────┐
│             HOST                  │
│                                   │
│   localhost:5432                  │
│          ↓                        │
│      Port Mapping                 │
│          ↓                        │
│   PostgreSQL Container            │
└───────────────────────────────────┘


┌───────────────────────────────────┐
│        DOCKER NETWORK             │
│                                   │
│   API ──────→ postgres:5432       │
│                  ↓                │
│            PostgreSQL             │
└───────────────────────────────────┘
```

> 🧠 **REGLA MENTAL MÁS IMPORTANTE**
>
> **`localhost` apunta al lugar desde donde haces la conexión. Si estás dentro de un container, `localhost` es ese container. Para llegar a otro container, utiliza el hostname/nombre del servicio dentro de la Docker Network.**
