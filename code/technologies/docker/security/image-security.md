# 📄 04 - Image Security

> [!IMPORTANT]
> 🔐 Una parte importante de la seguridad de Docker comienza **antes de ejecutar el container**: en la Docker Image que utilizas.
>
> ```text
> Docker Image
>      ↓
> Docker Container
> ```
>
> Si la Image contiene vulnerabilidades, el Container creado a partir de ella también puede verse afectado.

---

## 📑 Índice

- [� 04 - Image Security](#-04---image-security)
  - [📑 Índice](#-índice)
  - [🔐 ¿Por qué las Images pueden tener vulnerabilidades?](#-por-qué-las-images-pueden-tener-vulnerabilidades)
- [🏗️ Base Images](#️-base-images)
- [✅ Official Images](#-official-images)
- [🛡️ Trusted Images](#️-trusted-images)
- [🔄 Image Updates](#-image-updates)
- [🐛 Vulnerable Dependencies](#-vulnerable-dependencies)
- [🔎 Image Scanning](#-image-scanning)
- [📦 Minimal Images](#-minimal-images)
- [🏔️ Alpine y Slim Images](#️-alpine-y-slim-images)
- [🏷️ Image Tags](#️-image-tags)
- [⚠️ Problema de `latest`](#️-problema-de-latest)
- [🔁 Reproducibilidad](#-reproducibilidad)
- [🧠 Image Security como proceso](#-image-security-como-proceso)
  - [🔗 La idea importante](#-la-idea-importante)

## 🔐 ¿Por qué las Images pueden tener vulnerabilidades?

Una Docker Image normalmente está construida a partir de varias capas:

```text
Base Image
    ↓
System Libraries
    ↓
Runtime
    ↓
Dependencies
    ↓
Application
    ↓
Docker Image
```

Cada componente puede contener:

* Vulnerabilidades conocidas
* Dependencias desactualizadas
* Librerías innecesarias
* Configuraciones inseguras
* Software que ya no recibe actualizaciones

Por ejemplo:

```text
node:22
   ↓
Node.js
   +
Linux libraries
   +
System packages
   +
Application dependencies
   ↓
my-api
```

> [!TIP]
> 💡 Aunque tu código sea seguro, una vulnerabilidad puede existir en una dependencia o en la propia Base Image.

---

# 🏗️ Base Images

Una **Base Image** es la imagen desde la cual comienza la construcción de tu propia Image.

```dockerfile
FROM node:22
```

Conceptualmente:

```text
node:22
   ↓
Base Image
   ↓
Dockerfile
   ↓
My Application Image
```

La seguridad de tu Image depende parcialmente de la seguridad de esa Base Image.

Por eso debes prestar atención a:

| Aspecto            | Pregunta                 |
| ------------------ | ------------------------ |
| 🖼️ Imagen         | ¿Qué imagen utilizas?    |
| 🏷️ Versión        | ¿Qué versión utilizas?   |
| 🔗 Procedencia     | ¿De dónde proviene?      |
| 🔄 Actualizaciones | ¿Recibe actualizaciones? |
| 📦 Contenido       | ¿Qué software incluye?   |

---

# ✅ Official Images

Docker Hub ofrece **Official Images** para tecnologías populares.

Por ejemplo:

```text
node
postgres
nginx
redis
```

Conceptualmente:

```text
Official Image
      ↓
Base Image
      ↓
Your Image
```

Las Official Images son una buena opción como punto de partida porque siguen procesos de mantenimiento y publicación específicos.

> [!WARNING]
> ⚠️ **Official Image no significa que sea automáticamente libre de vulnerabilidades.**
>
> Una imagen oficial también puede contener vulnerabilidades debido a sus componentes o dependencias.

---

# 🛡️ Trusted Images

Cuando eliges una Base Image, debes considerar su procedencia.

| ❌ Unknown Image             | ✅ Trusted Source       |
| --------------------------- | ---------------------- |
| ❓ Procedencia desconocida   | Fuente conocida        |
| ❓ Mantenimiento incierto    | Mantenimiento conocido |
| ❓ Actualizaciones inciertas | Recibe actualizaciones |
| ❓ Contenido desconocido     | Software identificable |

Antes de utilizar una imagen, conviene conocer:

* Quién la mantiene.
* De dónde proviene.
* Si recibe actualizaciones.
* Qué versión estás utilizando.
* Qué software contiene.

---

# 🔄 Image Updates

Las vulnerabilidades aparecen y también pueden ser corregidas.

```text
node:22
   ↓
Vulnerability discovered
   ↓
Updated Image
   ↓
Security fix
```

Por eso mantener las imágenes actualizadas forma parte del mantenimiento de seguridad.

Pero actualizar no significa simplemente ejecutar:

```bash
docker pull node:latest
```

sin analizar qué versión estás utilizando.

Debes considerar:

```text
Update
   +
Compatibility
   +
Testing
   ↓
New Image
```

> [!TIP]
> 💡 Actualizar una Image también implica comprobar compatibilidad y realizar pruebas antes de utilizarla.

---

# 🐛 Vulnerable Dependencies

Tu aplicación también puede introducir vulnerabilidades mediante sus dependencias.

```text
Docker Image
│
├── Node.js
├── Express
├── Dependency A
├── Dependency B  ← Vulnerable
└── Application
```

Aunque tu código no tenga una vulnerabilidad directa, una dependencia vulnerable puede afectar a la aplicación.

Por eso la seguridad de una Image debe analizar:

```text
Base Image
     +
System Libraries
     +
Runtime
     +
Application Dependencies
     +
Application Code
```

---

# 🔎 Image Scanning

El **Image Scanning** consiste en analizar una Docker Image para detectar vulnerabilidades conocidas.

```text
Docker Image
     ↓
Image Scanner
     ↓
Vulnerabilities
     ↓
Security Report
```

Un scanner puede identificar problemas en:

* OS packages
* Libraries
* Dependencies
* Runtime components

Por ejemplo:

```text
my-api:1.0
     ↓
    Scan
     ↓
┌─────────────────────┐
│ Critical     0      │
│ High         2      │
│ Medium       5      │
│ Low          8      │
└─────────────────────┘
```

> [!IMPORTANT]
> 🔎 Esto permite detectar problemas antes de desplegar una Image.

---

# 📦 Minimal Images

Una buena práctica es evitar incluir software innecesario dentro de la Image.

| Large Image          | Minimal Image      |
| -------------------- | ------------------ |
| Runtime              | Runtime            |
| Libraries            | Required libraries |
| Tools                | Application        |
| Package managers     |                    |
| Debug utilities      |                    |
| Unnecessary packages |                    |
| Application          |                    |

Una Image más pequeña puede significar:

* Menos componentes que mantener.
* Menor superficie de ataque.
* Menor cantidad de dependencias.
* Menor tamaño.
* Descargas más rápidas.

> [!NOTE]
> ⚠️ **Más pequeña no siempre significa automáticamente más segura.**
>
> También debes considerar compatibilidad, mantenimiento y facilidad de debugging.

---

# 🏔️ Alpine y Slim Images

Es común encontrar variantes como:

```text
node:22
node:22-slim
node:22-alpine
```

Conceptualmente:

| Variante         | Característica               |
| ---------------- | ---------------------------- |
| `node:22`        | Image más completa           |
| `node:22-slim`   | Image reducida               |
| `node:22-alpine` | Image basada en Alpine Linux |

Las variantes `slim` y `alpine` pueden reducir el tamaño de la Image.

Sin embargo, no debes elegirlas únicamente porque sean pequeñas.

Debes comprobar:

```text
Size
+
Compatibility
+
Security
+
Maintenance
```

Por ejemplo, algunas aplicaciones o dependencias pueden comportarse diferente en determinadas bases.

---

# 🏷️ Image Tags

Los tags permiten identificar qué versión de una Image estás utilizando.

Por ejemplo:

```text
node:22
node:22-slim
node:22-alpine
```

Esto es preferible a depender de una referencia completamente ambigua.

Puedes tener:

```text
my-api:1.0
my-api:1.1
my-api:2.0
```

De esta manera puedes identificar qué versión fue utilizada para construir una aplicación.

---

# ⚠️ Problema de `latest`

Puedes encontrar imágenes como:

```text
node:latest
```

Pero:

> [!WARNING]
> ⚠️ `latest` es solamente un tag; no garantiza que estés expresando de forma explícita qué versión exacta necesitas.

Por ejemplo:

```text
node:latest
      ↓
Puede apuntar a una imagen diferente con el tiempo
```

Mientras:

```text
node:22
      ↓
Expresa explícitamente la línea de versión utilizada
```

Esto es especialmente importante para:

* Reproducibilidad.
* Builds consistentes.
* CI/CD.
* Producción.
* Debugging.

> [!NOTE]
> 💡 Esto no significa que `latest` sea "malo" en todos los casos, sino que **no deberías depender ciegamente de él en entornos donde necesitas controlar exactamente qué ejecutas**.

---

# 🔁 Reproducibilidad

Una aplicación es más reproducible cuando puedes reconstruirla utilizando las mismas versiones y obtener un resultado equivalente.

```text
Dockerfile
   +
Base Image version
   +
Dependencies
   +
Configuration
   ↓
Docker Image
```

Si utilizas referencias demasiado variables:

```text
node:latest
```

puedes terminar construyendo diferentes Images en distintos momentos.

En cambio:

```text
node:22
```

o una referencia todavía más específica permite tener mayor control sobre qué estás utilizando.

La reproducibilidad es especialmente importante en:

```text
Development
      ↓
CI
      ↓
Testing
      ↓
Production
```

---

# 🧠 Image Security como proceso

La seguridad de una Image no consiste simplemente en elegir una imagen "segura".

Es un proceso:

```text
Choose Base Image
       ↓
Use Trusted Source
       ↓
Control Versions
       ↓
Keep Dependencies Updated
       ↓
Scan Image
       ↓
Remove Unnecessary Components
       ↓
Build
       ↓
Deploy
```

Y posteriormente:

```text
Monitor
   ↓
New Vulnerability
   ↓
Update
   ↓
Rebuild
   ↓
Scan Again
   ↓
Deploy
```

---

## 🔗 La idea importante

Una Docker Image es el resultado de combinar muchos componentes:

```text
Base Image
      +
Runtime
      +
Libraries
      +
Dependencies
      +
Application
      ↓
Docker Image
      ↓
Security Analysis
```

> [!IMPORTANT]
> 🔐 Por eso la seguridad de tus containers comienza **desde la Image que utilizas para construirlos**.
>
> **Una Docker Image debe provenir de una fuente confiable, utilizar versiones controladas, contener solamente lo necesario y analizarse periódicamente para detectar vulnerabilidades.**
