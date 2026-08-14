# 📄 04 - Logs, Exec & Inspect

> [!NOTE]
> 🔥 Este documento reúne las herramientas que más vas a utilizar cuando necesites **investigar, diagnosticar y entender qué está pasando con un container**.
>
> No se trata solamente de ejecutar comandos: la idea es aprender a responder preguntas como:
>
> > ¿Por qué mi container se detuvo?
> > ¿Qué error está produciendo mi aplicación?
> > ¿Qué hay dentro del container?
> > ¿Cómo está configurado?

---

## 📑 Índice

- [� 04 - Logs, Exec \& Inspect](#-04---logs-exec--inspect)
  - [📑 Índice](#-índice)
- [📜 1. Docker Logs](#-1-docker-logs)
  - [🔄 Seguir los logs en tiempo real](#-seguir-los-logs-en-tiempo-real)
  - [📌 Mostrar solamente los últimos logs](#-mostrar-solamente-los-últimos-logs)
  - [🕐 Mostrar timestamps](#-mostrar-timestamps)
  - [🧠 ¿Por qué son importantes los logs?](#-por-qué-son-importantes-los-logs)
- [🖥️ 2. Docker Exec](#️-2-docker-exec)
  - [🐚 Entrar al container mediante Shell](#-entrar-al-container-mediante-shell)
  - [🔥 `-it`](#--it)
- [⚠️ `docker exec` vs `docker run`](#️-docker-exec-vs-docker-run)
    - [`docker run`](#docker-run)
    - [`docker exec`](#docker-exec)
- [🔍 3. Docker Inspect](#-3-docker-inspect)
  - [📦 Inspect de una Image](#-inspect-de-una-image)
- [🆚 Logs vs Exec vs Inspect](#-logs-vs-exec-vs-inspect)
- [🧪 4. Flujo de Debugging](#-4-flujo-de-debugging)
  - [Caso 1 — El container está detenido](#caso-1--el-container-está-detenido)
  - [Caso 2 — El container está ejecutándose pero algo falla](#caso-2--el-container-está-ejecutándose-pero-algo-falla)
- [🧠 Mapa mental](#-mapa-mental)

# 📜 1. Docker Logs

Los **logs** permiten consultar la salida que genera un container, principalmente lo que la aplicación escribe en `stdout` y `stderr`.

```text
Application
     ↓
stdout / stderr
     ↓
Docker
     ↓
docker logs
```

El comando básico es:

```bash
docker logs my-api
```

Esto muestra los logs disponibles del container.

## 🔄 Seguir los logs en tiempo real

Puedes utilizar:

```bash
docker logs -f my-api
```

La opción `-f` significa **follow**.

Docker mantiene la terminal mostrando nuevos logs a medida que la aplicación los genera.

Es especialmente útil cuando estás desarrollando una API:

```text
Request
   ↓
Application
   ↓
Log
   ↓
Terminal
```

## 📌 Mostrar solamente los últimos logs

```bash
docker logs --tail 100 my-api
```

Muestra únicamente las últimas 100 líneas.

Esto resulta útil cuando una aplicación genera muchísimos logs.

## 🕐 Mostrar timestamps

```bash
docker logs --timestamps my-api
```

Permite visualizar cuándo se produjo cada mensaje.

---

## 🧠 ¿Por qué son importantes los logs?

Imagina que ejecutas:

```bash
docker ps
```

y descubres que tu container no está funcionando.

Los logs pueden mostrar algo como:

```text
Error: Cannot connect to database
```

o:

```text
Error: Port 3000 already in use
```

> [!IMPORTANT]
> 🔥 **Cuando un container no funciona como esperas, revisar los logs suele ser uno de los primeros pasos de debugging.**

---

# 🖥️ 2. Docker Exec

`docker exec` permite **ejecutar un comando dentro de un container que ya está ejecutándose**.

La estructura básica es:

```bash
docker exec <container> <command>
```

Por ejemplo:

```bash
docker exec my-container ls
```

Esto ejecuta `ls` dentro del container.

```text
Host
  ↓
docker exec
  ↓
Running Container
  ↓
Command
```

---

## 🐚 Entrar al container mediante Shell

Una de las formas más útiles es abrir una terminal dentro del container:

```bash
docker exec -it my-container sh
```

También puedes utilizar `bash` si la image lo incluye:

```bash
docker exec -it my-container bash
```

Una vez dentro puedes ejecutar comandos como:

```bash
ls
pwd
env
```

Por ejemplo:

```bash
docker exec my-container env
```

permite consultar las variables de entorno disponibles dentro del container.

---

## 🔥 `-it`

Cuando utilizas:

```bash
docker exec -it my-container sh
```

estás utilizando dos opciones:

| Opción | Significado |
| ------ | ----------- |
| `-i`   | Interactive |
| `-t`   | TTY         |

Juntas permiten interactuar cómodamente con una terminal dentro del container.

---

# ⚠️ `docker exec` vs `docker run`

Esta diferencia es muy importante.

| Comando       | Función                                                                |
| ------------- | ---------------------------------------------------------------------- |
| `docker run`  | Crea y ejecuta **un nuevo container**                                  |
| `docker exec` | Ejecuta un comando dentro de **un container existente y en ejecución** |

### `docker run`

```text
Image
  ↓
docker run
  ↓
New Container
```

### `docker exec`

```text
Existing Container
        ↓
    docker exec
        ↓
      Command
```

Por lo tanto:

```bash
docker run nginx
```

puede crear un nuevo container.

Mientras:

```bash
docker exec my-nginx sh
```

entra en un container que ya existe.

---

# 🔍 3. Docker Inspect

`docker inspect` permite consultar información **detallada sobre un recurso de Docker**.

Por ejemplo:

```bash
docker inspect my-container
```

Docker devuelve información estructurada sobre el container.

```text
Container
    ↓
docker inspect
    ↓
Configuration + Metadata
```

Puedes encontrar información como:

| Información          |
| -------------------- |
| Estado del container |
| Image utilizada      |
| Variables de entorno |
| Networks             |
| IP                   |
| Ports                |
| Mounts               |
| Volumes              |
| Configuración        |
| Identificadores      |

---

## 📦 Inspect de una Image

También puedes inspeccionar una image:

```bash
docker inspect nginx
```

En este caso obtendrás información relacionada con la image.

```text
Image
   ↓
docker inspect
   ↓
Image Metadata
```

---

# 🆚 Logs vs Exec vs Inspect

Son herramientas diferentes y responden preguntas diferentes:

| Comando          | ¿Para qué sirve?                         | Ejemplo                 |
| ---------------- | ---------------------------------------- | ----------------------- |
| `docker logs`    | Ver qué está mostrando la aplicación     | `docker logs my-api`    |
| `docker exec`    | Ejecutar comandos dentro de un container | `docker exec my-api sh` |
| `docker inspect` | Consultar configuración y metadata       | `docker inspect my-api` |

Puedes pensarlo así:

```text
docker logs
     ↓
¿Qué está diciendo la aplicación?


docker exec
     ↓
¿Qué puedo revisar dentro del container?


docker inspect
     ↓
¿Cómo está configurado el recurso?
```

---

# 🧪 4. Flujo de Debugging

Supongamos:

> ❌ "Mi container no funciona."

No empiezas ejecutando comandos al azar. Puedes seguir un proceso:

```text
❌ Container no funciona
        ↓
   docker ps
        ↓
¿Está ejecutándose?
     /       \
   Sí         No
   ↓           ↓
 logs       docker ps -a
   ↓           ↓
¿Hay errores? docker logs
   ↓
docker exec
   ↓
docker inspect
```

## Caso 1 — El container está detenido

Primero:

```bash
docker ps
```

Si no aparece, revisas:

```bash
docker ps -a
```

Después:

```bash
docker logs my-api
```

Los logs pueden revelar por qué terminó.

---

## Caso 2 — El container está ejecutándose pero algo falla

Puedes revisar:

```bash
docker logs my-api
```

Si necesitas investigar el entorno:

```bash
docker exec -it my-api sh
```

Y consultar:

```bash
env
ls
pwd
```

También puedes revisar su configuración:

```bash
docker inspect my-api
```

---

# 🧠 Mapa mental

La idea que debes llevarte es:

```text
             CONTAINER
                 │
        ┌────────┼────────┐
        ▼        ▼        ▼
      Logs      Exec    Inspect
        │        │        │
        ▼        ▼        ▼
     Output    Inside   Config
     Errors    Shell    Metadata
```

Y ante un problema:

```text
❌ Algo no funciona
        ↓
   docker ps
        ↓
¿Está running?
   │          │
  No          Sí
   ↓          ↓
ps -a       logs
   ↓          ↓
logs       ¿necesito
             investigar?
                ↓
             exec
                ↓
             inspect
```

> [!IMPORTANT]
> **`docker logs` te ayuda a entender qué está pasando en la aplicación, `docker exec` te permite investigar desde dentro del container y `docker inspect` te permite conocer su configuración y metadata.**
