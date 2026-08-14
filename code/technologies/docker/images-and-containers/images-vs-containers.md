# 📄 03 - Images vs Containers

> [!NOTE]
> Aunque están directamente relacionados, **no son lo mismo**.

---

## 📑 ÍNDICE 
- [📄 03 - Images vs Containers](#-03---images-vs-containers)
  - [📑 ÍNDICE](#-índice)
- [🖼️ ¿Qué es una Image?](#️-qué-es-una-image)
- [📦 ¿Qué es un Container?](#-qué-es-un-container)
- [🧠 Image vs Container](#-image-vs-container)
- [⚖️ Comparación](#️-comparación)
- [🏗️ Image → Container](#️-image--container)
- [🔄 Una Image puede crear múltiples Containers](#-una-image-puede-crear-múltiples-containers)
- [🔒 Image Inmutable vs Container Mutable](#-image-inmutable-vs-container-mutable)
  - [🖼️ Image](#️-image)
  - [📦 Container](#-container)
- [🚨 Los cambios del Container no modifican la Image](#-los-cambios-del-container-no-modifican-la-image)
- [🗑️ Container eliminado ≠ Image eliminada](#️-container-eliminado--image-eliminada)
- [🧩 Image + Container + Volume](#-image--container--volume)
- [🧠 La diferencia en una frase](#-la-diferencia-en-una-frase)

# 🖼️ ¿Qué es una Image?

Una **Docker Image** es una **plantilla inmutable** utilizada para crear containers.

```text
Image
  ↓
Template
```

La image contiene lo necesario para crear el entorno de ejecución de una aplicación:

```text
Image
   ├── Application
   ├── Dependencies
   ├── Runtime
   └── Configuration
```

> [!IMPORTANT]
> Una Image **no está ejecutándose**.

---

# 📦 ¿Qué es un Container?

Un **Container** es una **instancia creada a partir de una Image**.

```text
Image
  ↓
Container
```

El container es el entorno donde realmente se ejecuta la aplicación:

```text
Container
    ↓
Application Process
```

Un container puede estar:

```text
🟢 Running
🛑 Stopped
```

pero sigue siendo una instancia creada a partir de una Image.

---

# 🧠 Image vs Container

Una analogía útil es:

```text
Class
  ↓
Object
```

Conceptualmente:

```text
Image
  ↓
Container
```

La **Image** sería la plantilla y el **Container** sería una instancia creada a partir de esa plantilla.

> [!WARNING]
> No es una equivalencia técnica exacta entre clases/objetos y Docker, pero sirve para entender la relación.

---

# ⚖️ Comparación

| 🖼️ Image              | 📦 Container                  |
| ---------------------- | ----------------------------- |
| Template               | Instance                      |
| Inmutable              | Tiene estado de ejecución     |
| Se construye           | Se ejecuta                    |
| Se almacena            | Puede estar running o stopped |
| Puede crear containers | Es creado desde una Image     |
| No ejecuta procesos    | Ejecuta procesos              |

---

# 🏗️ Image → Container

La relación fundamental es:

```text
Dockerfile
    ↓
docker build
    ↓
Image
    ↓
docker run
    ↓
Container
```

Por ejemplo:

```text
node:22
   ↓
Container
   ↓
Node.js Application
```

La Image proporciona la base necesaria para crear el Container.

---

# 🔄 Una Image puede crear múltiples Containers

Una misma Image puede utilizarse para crear **muchos containers**:

```text
             IMAGE
               │
        ┌──────┼──────┐
        ▼      ▼      ▼
    Container Container Container
```

Por ejemplo:

```text
node:22
   │
   ├── api-1
   ├── api-2
   └── api-3
```

Los tres containers pueden utilizar la misma Image.

Cada container, sin embargo, es una instancia independiente.

```text
node:22
   │
   ├── api-1 → instancia independiente
   ├── api-2 → instancia independiente
   └── api-3 → instancia independiente
```

---

# 🔒 Image Inmutable vs Container Mutable

Una diferencia importante es cómo se comportan frente a los cambios.

## 🖼️ Image

La Image se considera **inmutable**.

```text
Image
  ↓
No se modifica directamente
```

Si quieres cambiar la aplicación o sus dependencias, normalmente construyes una nueva versión de la Image:

```text
Old Image
    ↓
Dockerfile changes
    ↓
New Image
```

## 📦 Container

El Container sí puede generar cambios durante su ejecución.

```text
Container
   ↓
Application
   ↓
Runtime changes
```

Por ejemplo, la aplicación puede crear archivos temporales dentro del filesystem del container.

Pero esos cambios pertenecen a **esa instancia del container**, no modifican la Image original.

---

# 🚨 Los cambios del Container no modifican la Image

Este concepto es fundamental.

Supongamos:

```text
Image
   ↓
node:22
```

Creas:

```text
node:22
   ↓
api-container
```

Dentro del container modificas algún archivo:

```text
api-container
   ↓
modified-file
```

Eso **no significa**:

```text
❌ node:22
      ↓
   modified
```

La Image original permanece igual.

Conceptualmente:

```text
        IMAGE
          │
          ▼
      Container
          │
          ▼
   Runtime Changes
```

Los cambios pertenecen al container.

---

# 🗑️ Container eliminado ≠ Image eliminada

También son objetos independientes.

Puedes eliminar un container:

```text
Image
  ↓
Container
  ↓
❌ Remove
```

y la Image puede continuar existiendo:

```text
Image
  ↓
Still available
```

Incluso puedes crear otro container posteriormente:

```text
        Image
          │
    ┌─────┴─────┐
    ▼           ▼
Container A   Container B
    │
    ▼
  Removed
```

La Image sigue disponible para crear nuevas instancias.

---

# 🧩 Image + Container + Volume

Aquí puedes conectar este concepto con el almacenamiento que viste en el documento anterior:

```text
        Image
          ↓
      Container
       /     \
      /       \
Application   Volume
              ↓
       Persistent Data
```

La Image proporciona la plantilla.

El Container proporciona el entorno de ejecución.

El Volume permite mantener datos que deben sobrevivir al ciclo de vida del Container.

---

# 🧠 La diferencia en una frase

```text
Image
  ↓
Plantilla inmutable
```

```text
Container
  ↓
Instancia ejecutable de esa Image
```

> [!TIP]
> **Image ≠ Container**
>
> Una Image **no está ejecutándose**.
>
> Un Container es una instancia creada desde una Image y puede estar **ejecutándose o detenido**.

La relación que debes tener siempre en mente es:

```text
              IMAGE
                │
        docker run
                │
                ▼
           CONTAINER
                │
                ▼
        Application Process
```
