# 📄 05 - Layers & Cache

> [!IMPORTANT]
> 🔥 **Este es uno de los conceptos más importantes de Docker**, porque explica cómo se construyen las Images y por qué el orden de tu Dockerfile puede hacer que un build tarde segundos o varios minutos.

---

## 📑 Índice

- [📄 05 - Layers \& Cache](#-05---layers--cache)
  - [📑 Índice](#-índice)
- [🧱 ¿Qué son las Layers?](#-qué-son-las-layers)
- [🏗️ Layers y Dockerfile](#️-layers-y-dockerfile)
- [⚡ ¿Qué es el Build Cache?](#-qué-es-el-build-cache)
- [🚀 ¿Por qué el Cache es importante?](#-por-qué-el-cache-es-importante)
- [🧠 El orden de las instrucciones importa](#-el-orden-de-las-instrucciones-importa)
- [✅ Una estructura más eficiente](#-una-estructura-más-eficiente)
- [🔄 Ejemplo completo](#-ejemplo-completo)
- [🧹 Cache Invalidation](#-cache-invalidation)
- [🔥 Regla importante](#-regla-importante)
- [📦 Dependencias vs código](#-dependencias-vs-código)
    - [❌ Menos eficiente](#-menos-eficiente)
    - [✅ Mejor aprovechamiento del cache](#-mejor-aprovechamiento-del-cache)
- [🔍 Ver las Layers de una Image](#-ver-las-layers-de-una-image)
- [📊 Ver el tamaño de las Images](#-ver-el-tamaño-de-las-images)
- [♻️ Reutilización de Layers](#️-reutilización-de-layers)
- [🧠 Ejemplo mental](#-ejemplo-mental)
- [🧩 Layers vs Cache](#-layers-vs-cache)
    - [Layers](#layers)
    - [Build Cache](#build-cache)
- [🔄 Flujo completo](#-flujo-completo)
- [🧠 El concepto clave](#-el-concepto-clave)

# 🧱 ¿Qué son las Layers?

Una Docker Image no es simplemente un archivo gigante.

Conceptualmente, está formada por diferentes **layers (capas)**.

```text id="y6zj7m"
Image
│
├── Layer 1 → Base Image
├── Layer 2 → WORKDIR
├── Layer 3 → Dependencies
├── Layer 4 → Application
└── Layer 5 → Configuration
```

Cada layer representa cambios realizados durante la construcción de la Image.

Puedes imaginarlo como una serie de capas que se van agregando:

```text id="6j8w2v"
Layer 5
   ↓
Layer 4
   ↓
Layer 3
   ↓
Layer 2
   ↓
Layer 1
```

La combinación de todas estas capas forma la Docker Image final.

---

# 🏗️ Layers y Dockerfile

Supongamos este Dockerfile:

```dockerfile id="4k5w8q"
FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]
```

Conceptualmente:

```text id="e9t4xv"
FROM node:22
      ↓
   Layer

WORKDIR /app
      ↓
   Layer

COPY package*.json ./
      ↓
   Layer

RUN npm install
      ↓
   Layer

COPY . .
      ↓
   Layer
```

Por eso el Dockerfile no solamente define **qué debe contener la Image**.

También influye en:

> **Cómo Docker puede reutilizar las partes que ya construyó.**

---

# ⚡ ¿Qué es el Build Cache?

Docker puede guardar y reutilizar resultados de builds anteriores.

Esto se conoce como **Build Cache**.

```text id="yd5paz"
Previous Build
      ↓
Cached Layers
      ↓
New Build
      ↓
Reutilizar capas que no cambiaron
      ↓
Reconstruir solamente lo necesario
```

Esto evita repetir trabajo innecesariamente.

Por ejemplo, si Docker ya ejecutó:

```dockerfile id="t2c7dv"
RUN npm install
```

y nada de lo que afecta esa instrucción cambió, Docker puede reutilizar el resultado almacenado en cache.

---

# 🚀 ¿Por qué el Cache es importante?

Imagina que tienes:

```text id="y9aq7w"
100 dependencias
+
10 minutos de instalación
```

Si Docker tuviera que ejecutar:

```bash id="v8d8h5"
npm install
```

cada vez que modificas un archivo de tu aplicación, el desarrollo sería muy lento.

Con cache:

| Build         | Resultado                                 |
| ------------- | ----------------------------------------- |
| Primer build  | `npm install` → 10 minutos                |
| Segundo build | Cache → No necesita repetir `npm install` |

Por eso un buen Dockerfile busca que las partes que cambian poco puedan aprovechar la cache.

---

# 🧠 El orden de las instrucciones importa

> [!IMPORTANT]
> Este es uno de los conceptos más importantes del documento.

Considera:

```dockerfile id="xq38mc"
COPY . .

RUN npm install
```

Aquí estás copiando **todo el proyecto** antes de instalar las dependencias.

Si modificas cualquier archivo que forme parte de ese `COPY`, Docker puede considerar que esa capa cambió.

Por ejemplo:

```text id="w3bq1k"
COPY . .
   ↓
archivo cambiado
   ↓
Cache invalidada
   ↓
RUN npm install
   ↓
Se vuelve a ejecutar
```

Aunque solamente hayas cambiado:

```text id="c3p0xx"
src/button.ts
```

podrías terminar ejecutando nuevamente:

```bash id="f8p1ko"
npm install
```

---

# ✅ Una estructura más eficiente

Es mejor separar los archivos de dependencias del código fuente:

```dockerfile id="3c4k2a"
COPY package*.json ./

RUN npm install

COPY . .
```

Ahora Docker puede aprovechar mejor la cache.

El flujo es:

```text id="cb8j1n"
package.json
package-lock.json
        ↓
      COPY
        ↓
   npm install
        ↓
      Cache
        ↓
   COPY source
```

Si solamente modificas código:

```text id="p0j8as"
package.json
      ↓
    igual
      ↓
npm install
      ↓
  ✅ Cache
      ↓
COPY source
      ↓
🔨 Rebuild
```

> [!TIP]
> **Los archivos que cambian frecuentemente deberían copiarse después de las partes que cambian poco.**

---

# 🔄 Ejemplo completo

Supongamos:

```dockerfile id="m2h3fa"
FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY src ./src

RUN npm run build
```

Conceptualmente:

```text id="2n0w2x"
FROM node:22
      ↓
   Layer 1

COPY package*.json
      ↓
   Layer 2

RUN npm install
      ↓
   Layer 3

COPY src
      ↓
   Layer 4

RUN npm run build
      ↓
   Layer 5
```

Ahora imagina que solamente modificas:

```text id="d4a5fq"
src/app.ts
```

Docker puede reutilizar:

```text id="a1r7bw"
Layer 1 → Cache ✅
Layer 2 → Cache ✅
Layer 3 → Cache ✅
```

y reconstruir:

```text id="q4b7s0"
Layer 4 → Rebuild
Layer 5 → Rebuild
```

> [!TIP]
> 💡 Esto es mucho más eficiente.

# 🧹 Cache Invalidation

**Cache invalidation** significa que una capa ya no puede reutilizarse porque alguna condición que afecta su construcción cambió.

Por ejemplo:

```text
FROM
 ↓
COPY package.json
 ↓
RUN npm install
 ↓
COPY src
 ↓
RUN npm build
```

Si cambia:

```text
package.json
```

puede ocurrir:

```text
FROM
 ↓
COPY package.json     🔨
 ↓
RUN npm install       🔨
 ↓
COPY src              🔨
 ↓
RUN npm build         🔨
```

¿Por qué?

Porque las capas posteriores dependen del resultado de las anteriores.

---

# 🔥 Regla importante

Puedes pensar en el cache de forma secuencial:

```text
Layer 1
   ↓
Layer 2
   ↓
Layer 3
   ↓
Layer 4
```

Si Docker necesita reconstruir una capa:

```text
Layer 1
   ↓
Layer 2 ❌ cambia
   ↓
Layer 3 ❌
   ↓
Layer 4 ❌
```

Las capas posteriores pueden necesitar reconstruirse.

> [!IMPORTANT]
> **Un cambio temprano en el Dockerfile puede provocar mucho más trabajo que un cambio al final.**

---

# 📦 Dependencias vs código

Este patrón es muy común en aplicaciones Node:

### ❌ Menos eficiente

```dockerfile
COPY . .

RUN npm install
```

Conceptualmente:

```text
Código
+
package.json
+
Otros archivos
      ↓
    COPY
      ↓
npm install
```

Cambios frecuentes en el proyecto pueden afectar el cache de `npm install`.

---

### ✅ Mejor aprovechamiento del cache

```dockerfile
COPY package*.json ./

RUN npm install

COPY . .
```

Conceptualmente:

```text
package.json
package-lock.json
        ↓
      COPY
        ↓
   npm install
        ↓
      CACHE
        ↓
    COPY source
```

> [!TIP]
> Así, mientras las dependencias no cambien, Docker puede reutilizar esa parte.

---

# 🔍 Ver las Layers de una Image

Puedes utilizar:

```bash
docker image history my-api
```

Esto permite observar información sobre las capas y las instrucciones que participaron en la construcción de la Image.

Conceptualmente:

```text
my-api
   ↓
docker image history
   ↓
Layers / instrucciones
```

Por ejemplo, puede ayudarte a identificar qué instrucciones agregaron cambios a la Image.

---

# 📊 Ver el tamaño de las Images

Puedes utilizar:

```bash
docker image ls
```

para consultar las Images disponibles y observar información como su tamaño.

Por ejemplo:

```text
REPOSITORY   TAG     SIZE
my-api       1.0     ...
node         22      ...
```

Esto resulta útil para analizar cuánto ocupa una Image.

> [!WARNING]
> ⚠️ El tamaño de una Image y el funcionamiento de las layers están relacionados, pero **no debes asumir que simplemente sumar los tamaños mostrados de todas las layers siempre representa exactamente el espacio físico total utilizado**, porque Docker puede compartir layers entre Images.

---

# ♻️ Reutilización de Layers

Una ventaja importante de las layers es que pueden reutilizarse.

Por ejemplo:

```text
node:22
    │
    ├── my-api
    └── another-api
```

Ambas Images pueden utilizar la misma base:

```text
node:22
    ↓
Shared Layers
```

Esto evita tener que almacenar múltiples copias idénticas de una misma layer.

---

# 🧠 Ejemplo mental

Imagina que tienes:

```text
Layer 1 → Node.js
Layer 2 → package.json
Layer 3 → npm install
Layer 4 → Application
```

Construyes:

```text
my-api:1.0
```

Después modificas solamente:

```text
Application
```

Docker puede mantener:

```text
Layer 1 ✅
Layer 2 ✅
Layer 3 ✅
```

y reconstruir:

```text
Layer 4 🔨
```

Por eso:

```text
Dependencies
     ↓
   Cache
     ↓
Application
```

es un patrón tan importante.

---

# 🧩 Layers vs Cache

Aunque están relacionadas, **Layers y Build Cache no son exactamente lo mismo**.

| Concepto        | Qué representa                                                                                      |
| --------------- | --------------------------------------------------------------------------------------------------- |
| **Layers**      | Son las capas que forman la Image                                                                   |
| **Build Cache** | Mecanismo que permite reutilizar resultados de construcciones anteriores cuando todavía son válidos |

### Layers

Son las capas que forman la Image.

```text
Image
 ├── Layer
 ├── Layer
 ├── Layer
 └── Layer
```

### Build Cache

Es el mecanismo que permite reutilizar resultados de construcciones anteriores cuando todavía son válidos.

```text
Previous Build
      ↓
Cached Result
      ↓
New Build
      ↓
Reuse
```

Puedes pensarlo así:

```text
Dockerfile
    ↓
Instructions
    ↓
Layers
    ↓
Build Cache puede reutilizar
esas capas/resultados
```

---

# 🔄 Flujo completo

```text
Dockerfile
    ↓
Instruction 1
    ↓
Layer
    ↓
Instruction 2
    ↓
Layer
    ↓
Instruction 3
    ↓
Layer
    ↓
Docker Image
```

En un nuevo build:

```text
Dockerfile
    ↓
Docker Build
    ↓
¿Existe resultado reutilizable?
    │
    ├── Sí → ⚡ Cache
    │
    └── No → 🔨 Rebuild
```

---

# 🧠 El concepto clave

El objetivo no es memorizar:

> "`COPY package*.json` debe ir antes de `RUN npm install` porque Docker lo dice."

Lo importante es entender **por qué**:

```text
Archivos que cambian poco
        ↓
Primero
        ↓
Layers estables
        ↓
Cache
        ↓
Archivos que cambian frecuentemente
        ↓
Después
```

Por eso, el orden del Dockerfile puede afectar directamente:

* ⚡ Tiempo de build
* 💻 Trabajo que Docker necesita repetir
* 📦 Reutilización de layers
* 🚀 Velocidad del desarrollo

> [!IMPORTANT]
> 🔥 La idea fundamental es:
>
> ```text
> Dockerfile
>     ↓
> Layers
>     ↓
> Cache
>     ↓
> Orden de instrucciones
>     ↓
> Menos trabajo repetido
>     ↓
> Builds más rápidos
> ```

