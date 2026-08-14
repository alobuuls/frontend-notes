# 📄 05 - Docker DNS

> 🔥 **CONCEPTO FUNDAMENTAL:** Docker Networking no solamente permite que los containers se comuniquen; también proporciona un mecanismo para que puedan **encontrarse mediante nombres**.
>
> Esto evita tener que trabajar directamente con las IPs de los containers.

---

## 📑 ÍNDICE

- [📄 05 - Docker DNS](#-05---docker-dns)
  - [📑 ÍNDICE](#-índice)
  - [🌐 ¿QUÉ ES DOCKER DNS?](#-qué-es-docker-dns)
  - [🔗 ¿CÓMO FUNCIONA?](#-cómo-funciona)
  - [🧠 ¿POR QUÉ UTILIZAR NOMBRES?](#-por-qué-utilizar-nombres)
  - [🚫 NO HARDCODEAR IPS](#-no-hardcodear-ips)
- [🔎 CONTAINER NAME](#-container-name)
- [🏷️ SERVICE DISCOVERY](#️-service-discovery)
- [🐳 DOCKER DNS + DOCKER COMPOSE](#-docker-dns--docker-compose)
- [🌐 HOSTNAME VS IP](#-hostname-vs-ip)
- [🔄 ¿QUÉ PASA SI CAMBIA LA IP?](#-qué-pasa-si-cambia-la-ip)
- [🧩 ARQUITECTURA COMPLETA](#-arquitectura-completa)
- [⚠️ NO CONFUNDAS DOCKER DNS CON DNS PÚBLICO](#️-no-confundas-docker-dns-con-dns-público)
- [🧠 MAPA MENTAL](#-mapa-mental)
- [🎯 LA IDEA REALMENTE IMPORTANTE](#-la-idea-realmente-importante)

## 🌐 ¿QUÉ ES DOCKER DNS?

Docker proporciona un **DNS interno** para las redes que permite resolver nombres de containers o servicios hacia sus direcciones IP.

Por ejemplo, si tienes:

```text
Docker Network
│
├── api
└── postgres
```

El container `api` puede preguntar:

```text
"¿Dónde está postgres?"
        ↓
   Docker DNS
        ↓
IP del container postgres
```

Por eso puedes conectarte utilizando:

```text
postgres:5432
```

en lugar de:

```text
172.18.0.5:5432
```

> 💡 **TIP:** La aplicación trabaja con un nombre y Docker se encarga de encontrar la IP correspondiente.

---

## 🔗 ¿CÓMO FUNCIONA?

Supongamos:

```text
API Container
     │
     │ postgres:5432
     ▼
Docker DNS
     │
     ▼
PostgreSQL Container
```

Cuando la aplicación intenta conectarse a:

```text
postgres
```

Docker resuelve ese nombre hacia la IP correspondiente dentro de la red.

Conceptualmente:

```text
postgres
   ↓
DNS resolution
   ↓
172.x.x.x
   ↓
PostgreSQL
```

La aplicación **no necesita conocer la IP directamente**.

---

## 🧠 ¿POR QUÉ UTILIZAR NOMBRES?

Las IPs de los containers **no deberían considerarse identificadores permanentes**.

Por ejemplo:

```text
postgres
   ↓
172.18.0.5
```

Después el container podría recrearse:

```text
postgres
   ↓
172.18.0.8
```

Si tu aplicación tuviera:

```env
DATABASE_HOST=172.18.0.5
```

dejaría de funcionar.

En cambio:

```env
DATABASE_HOST=postgres
```

continúa funcionando mientras `postgres` pueda resolverse dentro de la red.

---

## 🚫 NO HARDCODEAR IPS

❌ **Evita:**

```env
DATABASE_HOST=172.18.0.5
```

Porque estás acoplando tu aplicación a una IP concreta.

✅ **Mejor:**

```env
DATABASE_HOST=postgres
```

Ahora Docker se encarga de encontrar dónde está `postgres`.

---

# 🔎 CONTAINER NAME

Si tienes:

```bash
docker run -d \
  --name postgres \
  --network my-network \
  postgres
```

el nombre:

```text
postgres
```

puede utilizarse para localizar el container dentro de la red.

Por ejemplo, desde `api`:

```text
postgres:5432
```

Flujo:

```text
api
 ↓
"postgres"
 ↓
Docker DNS
 ↓
PostgreSQL container
```

---

# 🏷️ SERVICE DISCOVERY

Este mecanismo está relacionado con un concepto más general llamado **Service Discovery**.

> 💡 **Service Discovery** es el proceso mediante el cual una aplicación puede localizar otros servicios sin tener que conocer directamente su dirección física.

Por ejemplo:

```text
API
 │
 ├── postgres
 ├── redis
 └── auth
```

La API puede comunicarse con:

```text
postgres:5432
redis:6379
auth:3000
```

en lugar de depender de:

```text
172.18.0.5:5432
172.18.0.6:6379
172.18.0.7:3000
```

Esto hace que la arquitectura sea mucho más flexible.

---

# 🐳 DOCKER DNS + DOCKER COMPOSE

Este concepto será especialmente importante cuando llegues a **Docker Compose**.

Por ejemplo:

```yaml
services:
  api:
    ...

  postgres:
    ...
```

Conceptualmente:

```text
Docker Network
│
├── api
│
└── postgres
```

Entonces `api` puede comunicarse con `postgres` utilizando su nombre:

```text
postgres:5432
```

Por ejemplo, una configuración podría ser:

```env
DATABASE_HOST=postgres
DATABASE_PORT=5432
```

No necesitas conocer la IP de PostgreSQL.

> 🎯 **IDEA CLAVE:** En Docker Compose, los nombres de los servicios son especialmente importantes para la comunicación entre containers.

---

# 🌐 HOSTNAME VS IP

Una IP identifica una dirección dentro de la red:

```text
172.18.0.5
```

Mientras que un hostname permite referenciar un recurso mediante un nombre:

```text
postgres
```

| Concepto     | Ejemplo      | Función                                    |
| ------------ | ------------ | ------------------------------------------ |
| **IP**       | `172.18.0.5` | Dirección dentro de la red                 |
| **Hostname** | `postgres`   | Nombre utilizado para localizar el recurso |

Conceptualmente:

```text
Hostname
   ↓
Docker DNS
   ↓
IP
   ↓
Container
```

Por eso normalmente es mejor que tu aplicación trabaje con:

```text
postgres
```

en lugar de:

```text
172.18.0.5
```

---

# 🔄 ¿QUÉ PASA SI CAMBIA LA IP?

Supongamos:

```text
postgres
   ↓
172.18.0.5
```

Tu API utiliza:

```env
DATABASE_HOST=postgres
```

Si PostgreSQL se recrea:

```text
postgres
   ↓
172.18.0.9
```

La API no necesita cambiar su configuración.

Continúa utilizando:

```text
postgres:5432
```

y Docker resuelve nuevamente el nombre.

---

# 🧩 ARQUITECTURA COMPLETA

```text
                  Docker Network
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
         API        PostgreSQL     Redis
          │             ▲            ▲
          │             │            │
          └── postgres ─┘            │
                │                    │
            Docker DNS               │
                │                    │
                └────── redis ───────┘
```

De forma simplificada:

```text
API
 ↓
postgres
 ↓
Docker DNS
 ↓
PostgreSQL
```

y:

```text
API
 ↓
redis
 ↓
Docker DNS
 ↓
Redis
```

---

# ⚠️ NO CONFUNDAS DOCKER DNS CON DNS PÚBLICO

Docker DNS es principalmente un mecanismo de **resolución de nombres dentro de las redes de Docker**.

No significa que:

```text
postgres
```

sea un dominio público de Internet.

Es un nombre que Docker puede resolver dentro del contexto de la red correspondiente.

---

# 🧠 MAPA MENTAL

```text
Docker Network
      ↓
Docker DNS
      ↓
Service / Container Name
      ↓
IP del Container
      ↓
Container
```

Por ejemplo:

```text
api
 ↓
postgres:5432
 ↓
Docker DNS
 ↓
172.x.x.x:5432
 ↓
PostgreSQL
```

---

# 🎯 LA IDEA REALMENTE IMPORTANTE

Si tienes varios containers comunicándose:

```text
API
 ↓
PostgreSQL
```

**no quieres que la API dependa de la IP de PostgreSQL.**

Quieres que dependa de un nombre estable:

```env
DATABASE_HOST=postgres
```

Docker se encarga de resolver:

```text
postgres
   ↓
IP actual
```

> 🔑 **REGLA MENTAL:**
>
> **Docker DNS + nombres de containers/servicios = una forma de Service Discovery dentro de la red de Docker.**
