# 📄 02 - Dockerfile Instructions

> [!NOTE]
> 🔥 Este es el documento donde estudias las **instrucciones que pueden aparecer dentro de un Dockerfile**.
>
> Cada instrucción tiene una responsabilidad diferente. Algunas se ejecutan durante la construcción de la Image y otras definen cómo se comportará el Container cuando se ejecute.

---

## 📑 Índice 
- [📄 02 - Dockerfile Instructions](#-02---dockerfile-instructions)
  - [📑 Índice](#-índice)
- [🏗️ 1. `FROM`](#️-1-from)
- [📁 2. `WORKDIR`](#-2-workdir)
- [📋 3. `COPY`](#-3-copy)
- [⚙️ 4. `RUN`](#️-4-run)
- [▶️ 5. `CMD`](#️-5-cmd)
- [🚀 6. `ENTRYPOINT`](#-6-entrypoint)
    - [🆚 `CMD` vs `ENTRYPOINT`](#-cmd-vs-entrypoint)
- [🌐 7. `EXPOSE`](#-7-expose)
- [🌎 8. `ENV`](#-8-env)
    - [⚠️ Seguridad](#️-seguridad)
- [🔧 9. `ARG`](#-9-arg)
    - [🆚 `ARG` vs `ENV`](#-arg-vs-env)
- [🏷️ 10. `LABEL`](#️-10-label)
- [👤 11. `USER`](#-11-user)
- [💾 12. `VOLUME`](#-12-volume)
- [📦 13. `ADD`](#-13-add)
    - [🆚 `COPY` vs `ADD`](#-copy-vs-add)
- [🧠 `RUN` vs `CMD` vs `ENTRYPOINT`](#-run-vs-cmd-vs-entrypoint)
- [🧩 Dockerfile completo](#-dockerfile-completo)
- [📌 Resumen de las instrucciones](#-resumen-de-las-instrucciones)
- [🔥 Las que realmente debes dominar primero](#-las-que-realmente-debes-dominar-primero)

# 🏗️ 1. `FROM`

Define la **Image base** desde la que se construirá tu nueva Image.

```dockerfile
FROM node:22
```

Conceptualmente:

```text
Base Image
    ↓
Dockerfile
    ↓
Tu Image
```

Por ejemplo:

```dockerfile
FROM node:22
```

significa que tu Image parte de una Image que ya contiene Node.js 22.

Puedes utilizar diferentes Images base:

```dockerfile
FROM node:22
FROM nginx:alpine
FROM python:3.12
FROM ubuntu:24.04
```

> [!TIP]
> 💡 `FROM` normalmente es la primera instrucción de un Dockerfile.

---

# 📁 2. `WORKDIR`

Define el **directorio de trabajo** dentro de la Image/Container.

```dockerfile
WORKDIR /app
```

Después de esto, las instrucciones que trabajen con rutas relativas utilizarán `/app` como referencia.

Por ejemplo:

```dockerfile
WORKDIR /app

COPY package.json .
RUN npm install
```

Conceptualmente:

```text
Container
    ↓
/app
    ↓
Aquí trabaja la aplicación
```

> [!TIP]
> Es preferible utilizar `WORKDIR` en lugar de llenar el Dockerfile de comandos como:
>
> ```dockerfile
> RUN cd /app
> ```
>
> porque `WORKDIR` establece explícitamente el directorio de trabajo.

---

# 📋 3. `COPY`

Copia archivos o directorios desde el **build context** hacia la Image.

Por ejemplo:

```dockerfile
COPY package.json .
```

o:

```dockerfile
COPY . .
```

Conceptualmente:

```text
Build Context
     ↓
   COPY
     ↓
Docker Image
```

Por ejemplo:

```text
my-app/
├── Dockerfile
├── package.json
├── src/
└── ...
```

con:

```dockerfile
WORKDIR /app

COPY . .
```

obtendrías conceptualmente:

```text
Container
└── /app
    ├── package.json
    ├── src/
    └── ...
```

> [!WARNING]
> ⚠️ `COPY` copia archivos **durante el build**.

---

# ⚙️ 4. `RUN`

Ejecuta un comando **durante la construcción de la Image**.

Por ejemplo:

```dockerfile
RUN npm install
```

Conceptualmente:

```text
Dockerfile
    ↓
RUN
    ↓
Build time
    ↓
Nueva capa de Image
```

Otros ejemplos:

```dockerfile
RUN npm install
RUN npm run build
RUN apt-get update
```

> [!IMPORTANT]
> 🔥 Diferencia fundamental:
>
> | Instrucción | Momento           |
> | ----------- | ----------------- |
> | `RUN`       | Build time        |
> | `CMD`       | Container runtime |

Por ejemplo:

```dockerfile
RUN npm install
```

instala las dependencias **cuando construyes la Image**.

No cada vez que ejecutas el Container.

---

# ▶️ 5. `CMD`

Define el **comando predeterminado** que se ejecutará cuando se inicie un Container basado en esa Image.

Por ejemplo:

```dockerfile
CMD ["npm", "start"]
```

Conceptualmente:

```text
Image
   ↓
docker run
   ↓
Container
   ↓
CMD
   ↓
Application starts
```

También puede utilizarse:

```dockerfile
CMD ["node", "server.js"]
```

> [!IMPORTANT]
> 🔥 `CMD` se relaciona con el **runtime del Container**, no con el build.

```text
RUN
 ↓
Construcción

CMD
 ↓
Ejecución
```

Además, un comando proporcionado al ejecutar `docker run` puede reemplazar el `CMD` predeterminado.

---

# 🚀 6. `ENTRYPOINT`

Define el **proceso ejecutable principal** del Container.

Por ejemplo:

```dockerfile
ENTRYPOINT ["node"]
```

Esto hace que `node` sea el ejecutable principal.

La diferencia conceptual es:

```text
ENTRYPOINT
    ↓
Ejecutable principal

CMD
    ↓
Comando/argumentos predeterminados
```

Pueden trabajar juntos:

```dockerfile
ENTRYPOINT ["node"]
CMD ["server.js"]
```

Conceptualmente:

```text
ENTRYPOINT
    ↓
node
    +
CMD
    ↓
server.js
    ↓
node server.js
```

### 🆚 `CMD` vs `ENTRYPOINT`

| `CMD`                                 | `ENTRYPOINT`                        |
| ------------------------------------- | ----------------------------------- |
| Define valores/comando predeterminado | Define el ejecutable principal      |
| Puede ser reemplazado fácilmente      | Está pensado como proceso principal |
| Puede utilizarse solo                 | Puede combinarse con `CMD`          |
| Flexible                              | Más rígido en cuanto al ejecutable  |

> [!TIP]
> 💡 No necesitas memorizar todos los detalles de sus reglas de override todavía. Lo importante es entender **qué papel cumple cada uno**.

---

# 🌐 7. `EXPOSE`

Documenta el puerto que utiliza la aplicación dentro del Container.

```dockerfile
EXPOSE 3000
```

Esto comunica:

> "Esta aplicación está pensada para escuchar en el puerto 3000."

> [!WARNING]
> ⚠️ **`EXPOSE` no publica el puerto hacia tu máquina.**
>
> Para hacerlo necesitas `-p` al ejecutar el Container:
>
> ```bash
> docker run -p 3000:3000 my-api
> ```

Conceptualmente:

| Instrucción     | Función                   |
| --------------- | ------------------------- |
| `EXPOSE 3000`   | Documenta el puerto       |
| `docker run -p` | Publica / mapea el puerto |

Esta diferencia es muy importante.

---

# 🌎 8. `ENV`

Define **variables de entorno** que estarán disponibles dentro de la Image y de los Containers creados a partir de ella.

Por ejemplo:

```dockerfile
ENV NODE_ENV=production
```

Dentro del Container:

```text
NODE_ENV
    ↓
production
```

Puedes tener varias:

```dockerfile
ENV NODE_ENV=production
ENV PORT=3000
```
### ⚠️ Seguridad

> [!WARNING]
> No debes utilizar `ENV` como mecanismo para guardar secretos sensibles dentro de una Image.
>
> Por ejemplo, evita:
>
> ```dockerfile
> ENV DATABASE_PASSWORD=super-secret-password
> ```
>
> **¿Por qué?**
>
> Porque las variables definidas en el Dockerfile pueden terminar formando parte de la configuración de la Image.
>
> Para secretos debes utilizar mecanismos apropiados de gestión de secretos o variables proporcionadas en el entorno de ejecución.

---

# 🔧 9. `ARG`

Define una variable disponible **durante el build**.

```dockerfile
ARG NODE_VERSION=22
FROM node:${NODE_VERSION}
```

Conceptualmente:

```text
ARG
 ↓
Build time
 ↓
docker build
```

### 🆚 `ARG` vs `ENV`

Esta diferencia es fundamental:

| Instrucción | Disponible en         |
| ----------- | --------------------- |
| `ARG`       | Build time            |
| `ENV`       | Container environment |

Por ejemplo:

```dockerfile
ARG NODE_VERSION=22

FROM node:${NODE_VERSION}

ENV NODE_ENV=production
```

Aquí:

* `NODE_VERSION` se utiliza para construir la Image.
* `NODE_ENV` queda disponible como variable de entorno.

> [!WARNING]
> ⚠️ Tampoco debes utilizar `ARG` para manejar secretos sensibles durante builds de forma ingenua, porque los valores utilizados durante un build pueden quedar expuestos en historial/metadatos dependiendo de cómo se utilicen.

---

# 🏷️ 10. `LABEL`

Permite agregar **metadatos** a una Image.

Por ejemplo:

```dockerfile
LABEL maintainer="Alo"
```

También puedes tener información como:

```dockerfile
LABEL version="1.0"
LABEL description="My API"
```

Conceptualmente:

```text
Image
   ↓
LABEL
   ↓
Metadata
```

> [!NOTE]
> Los `LABEL` no ejecutan la aplicación ni modifican su lógica.

---

# 👤 11. `USER`

Define el usuario con el que se ejecutarán determinadas instrucciones y, especialmente, el proceso principal del Container cuando se especifica como usuario final.

Por ejemplo:

```dockerfile
USER node
```

Conceptualmente:

```text
Container
    ↓
USER node
    ↓
Application runs as node
```

> [!IMPORTANT]
> 🔥 Esto es importante para seguridad.
>
> No siempre es recomendable ejecutar aplicaciones como `root` si no es necesario.
>
> Una práctica común es utilizar un usuario sin privilegios para ejecutar la aplicación.

---

# 💾 12. `VOLUME`

Declara un punto de montaje destinado a **datos persistentes**.

Por ejemplo:

```dockerfile
VOLUME /app/data
```

Conceptualmente:

```text
Container
    ↓
/app/data
    ↓
Persistent storage
```

Esto introduce el concepto de **Volumes**, que estudiarás más profundamente en:

```text
📁 06 - STORAGE
```

> [!WARNING]
> ⚠️ No confundas:
>
> ```text
> VOLUME
>     ↓
> Declaración de un punto de almacenamiento
> ```
>
> con:
>
> ```bash
> docker run -v ...
> ```
>
> que permite realizar un montaje concreto al ejecutar el Container.

---

# 📦 13. `ADD`

También puede copiar archivos al filesystem de la Image:

```dockerfile
ADD app.tar.gz /app/
```

Sin embargo, `ADD` tiene funcionalidades adicionales que `COPY` no tiene, como ciertos comportamientos relacionados con archivos comprimidos y fuentes remotas.

Por eso, en la mayoría de casos modernos:

```dockerfile
COPY
```

es preferible a:

```dockerfile
ADD
```

cuando simplemente necesitas copiar archivos.

### 🆚 `COPY` vs `ADD`

| `COPY`                      | `ADD`                                |
| --------------------------- | ------------------------------------ |
| Copiar archivos/directorios | Copiar + funcionalidades adicionales |

> [!TIP]
> 💡 **Regla práctica:**
>
> > **Si solamente necesitas copiar archivos, normalmente utiliza `COPY`.**

---

# 🧠 `RUN` vs `CMD` vs `ENTRYPOINT`

Esta es una de las diferencias que más debes tener claras:

| Momento        | Instrucciones        | Función               |
| -------------- | -------------------- | --------------------- |
| 🏗️ **BUILD**  | `RUN`                | Construye la Image    |
| 🚀 **RUNTIME** | `CMD` / `ENTRYPOINT` | Ejecuta la aplicación |

Conceptualmente:

```text
              Dockerfile
                  │
          ┌───────┴───────┐
          ▼               ▼
        BUILD           RUNTIME
          │               │
         RUN        CMD / ENTRYPOINT
          │               │
          ▼               ▼
     Construye la      Ejecuta la
        Image           aplicación
```

Por ejemplo:

```dockerfile
RUN npm install
```

significa:

> Instala las dependencias mientras construyes la Image.

Mientras:

```dockerfile
CMD ["npm", "start"]
```

significa:

> Cuando se cree un Container desde esta Image, ejecuta `npm start` por defecto.

---

# 🧩 Dockerfile completo

Ahora podemos combinar varias instrucciones:

```dockerfile
FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV NODE_ENV=production

EXPOSE 3000

USER node

CMD ["npm", "start"]
```

El flujo conceptual sería:

```text
FROM
 ↓
Image base

WORKDIR
 ↓
Directorio de trabajo

COPY
 ↓
Archivos

RUN
 ↓
Instalar dependencias

COPY
 ↓
Código de la aplicación

ENV
 ↓
Variables de entorno

EXPOSE
 ↓
Puerto documentado

USER
 ↓
Usuario de ejecución

CMD
 ↓
Comando de inicio
```

---

# 📌 Resumen de las instrucciones

| Instrucción  | Función principal                              | Momento         |
| ------------ | ---------------------------------------------- | --------------- |
| `FROM`       | Define la Image base                           | Build           |
| `WORKDIR`    | Define el directorio de trabajo                | Build / Runtime |
| `COPY`       | Copia archivos al filesystem                   | Build           |
| `RUN`        | Ejecuta comandos                               | Build           |
| `CMD`        | Define el comando predeterminado               | Runtime         |
| `ENTRYPOINT` | Define el ejecutable principal                 | Runtime         |
| `EXPOSE`     | Documenta un puerto                            | Image metadata  |
| `ENV`        | Define variables de entorno                    | Build / Runtime |
| `ARG`        | Define variables para el build                 | Build           |
| `LABEL`      | Agrega metadatos                               | Image           |
| `USER`       | Define el usuario de ejecución                 | Build / Runtime |
| `VOLUME`     | Declara un punto de almacenamiento             | Runtime         |
| `ADD`        | Copia archivos con funcionalidades adicionales | Build           |

---

# 🔥 Las que realmente debes dominar primero

```text
FROM
WORKDIR
COPY
RUN
CMD
ENTRYPOINT
EXPOSE
ENV
ARG
USER
```

> [!TIP]
> Las demás son importantes, pero no necesitas darles el mismo peso al principio.

