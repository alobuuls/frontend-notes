# 📝 CONTENT

En Astro, **Content** engloba las herramientas para trabajar con contenido como artículos, blogs, documentación y páginas escritas en Markdown o MDX.

---

## 📑 ÍNDICE — CONTENT

1. [📄 Markdown](#1️⃣-📄-markdown)
2. [🧩 MDX](#2️⃣-🧩-mdx)
3. [📚 Content Collections](#3️⃣-📚-content-collections)
4. [🧱 Content Schemas](#4️⃣-🧱-content-schemas)
5. [🗂️ Contenido Estructurado](#5️⃣-🗂️-contenido-estructurado)
6. [📝 Blogs](#6️⃣-📝-blogs)
7. [📖 Documentación](#7️⃣-📖-documentación)
8. [🖼️ Imágenes y Assets](#8️⃣-🖼️-imágenes-y-assets)
9. [🧠 Estructura General](#-estructura-general)
10. [🎯 Idea Clave](#-idea-clave)

---

## 1️⃣ 📄 MARKDOWN

**Markdown (`.md`)** es un formato de texto que permite escribir contenido utilizando una sintaxis sencilla.

Ejemplo:

```md
# Mi artículo

Este es un texto en **negrita**.

- Elemento 1
- Elemento 2
```

Astro puede convertir ese contenido en HTML para mostrarlo en una página.

### ¿Para qué se utiliza?

* 📝 Blogs
* 📖 Documentación
* 📚 Artículos
* 📰 Contenido estático
* 📄 Páginas informativas

### Ventaja principal

Permite separar el **contenido** de la lógica y de la estructura de la aplicación.

---

## 2️⃣ 🧩 MDX

**MDX** es una extensión de Markdown que permite utilizar **componentes dentro del contenido**.

Por ejemplo:

```mdx
# Mi artículo

Este es un texto.

<MyComponent />
```

Esto permite combinar:

```text
Markdown
   +
Componentes
   ↓
MDX
```

### ¿Para qué sirve?

Es especialmente útil cuando un documento necesita algo más que texto:

* 🧩 Componentes interactivos
* 📊 Gráficos
* 🖼️ Componentes personalizados
* 💻 Ejemplos de código
* 📚 Documentación avanzada

### Diferencia

| Formato | Característica                 |
| ------- | ------------------------------ |
| `.md`   | Contenido escrito con Markdown |
| `.mdx`  | Markdown + componentes         |

---

## 3️⃣ 📚 CONTENT COLLECTIONS

Las **Content Collections** permiten organizar y gestionar contenido estructurado dentro de Astro.

Normalmente se encuentran dentro de:

```text
src/
└── content/
```

Ejemplo:

```text
src/
└── content/
    ├── blog/
    │   ├── articulo-1.md
    │   └── articulo-2.md
    │
    └── docs/
        ├── intro.md
        └── installation.md
```

Una colección puede representar un tipo de contenido.

Por ejemplo:

```text
blog
docs
products
authors
```

### ¿Para qué sirven?

Permiten:

* 🗂️ Organizar contenido.
* 🔎 Consultarlo desde Astro.
* 🧱 Definir estructuras consistentes.
* ✅ Validar los datos mediante schemas.
* 📚 Trabajar con grandes cantidades de contenido.

---

## 4️⃣ 🧱 CONTENT SCHEMAS

Un **Content Schema** define qué estructura debe tener cada contenido de una colección.

Por ejemplo, un artículo podría necesitar:

```text
title
description
author
date
image
tags
```

El schema permite especificar:

* qué campos existen;
* qué tipo de dato tiene cada campo;
* cuáles son obligatorios;
* qué estructura debe seguir el contenido.

Conceptualmente:

```text
Content
   ↓
Schema
   ↓
Validación
   ↓
Contenido estructurado
```

### Ejemplo conceptual

```text
title       → string
description → string
date        → date
tags        → array
```

### ¿Por qué es importante?

Evita que diferentes documentos tengan estructuras inconsistentes.

Por ejemplo:

```text
Artículo A
title
description
date
```

mientras otro tenga:

```text
Artículo B
name
text
published
```

El schema ayuda a mantener una estructura común.

---

## 5️⃣ 🗂️ CONTENIDO ESTRUCTURADO

El contenido estructurado es información organizada siguiendo una estructura definida.

Por ejemplo:

```text
Artículo
├── title
├── description
├── author
├── date
├── image
└── tags
```

Esto permite que Astro pueda trabajar con el contenido de forma programática.

Por ejemplo:

```text
Contenido
   ↓
Datos estructurados
   ↓
Astro
   ↓
Página
   ↓
HTML
```

Es especialmente importante cuando tienes muchos documentos y necesitas:

* 🔎 Filtrarlos.
* 🔢 Ordenarlos.
* 🏷️ Clasificarlos.
* 🔗 Generar páginas dinámicamente.
* 📚 Crear listados de contenido.

---

## 6️⃣ 📝 BLOGS

Astro es especialmente adecuado para crear blogs porque permite combinar:

```text
Markdown / MDX
       ↓
Content Collections
       ↓
Astro
       ↓
Páginas del blog
```

Un proyecto podría organizarse así:

```text
src/
├── content/
│   └── blog/
│       ├── primer-articulo.md
│       ├── segundo-articulo.md
│       └── tercer-articulo.md
│
└── pages/
    └── blog/
```

Cada archivo puede representar un artículo.

### Un blog puede necesitar

* 📝 Título
* 👤 Autor
* 📅 Fecha
* 🖼️ Imagen
* 🏷️ Categorías
* 🔖 Tags
* 📄 Contenido
* 🔗 URL

---

## 7️⃣ 📖 DOCUMENTACIÓN

Astro también puede utilizarse para crear sitios de documentación.

Por ejemplo:

```text
src/
└── content/
    └── docs/
        ├── introduction.md
        ├── installation.md
        ├── configuration.md
        └── deployment.md
```

Esto permite construir documentación organizada por temas.

Un sitio de documentación podría tener:

```text
📖 Documentation
│
├── Introduction
├── Installation
├── Configuration
├── API
└── Deployment
```

Las Content Collections y los schemas ayudan a mantener todos esos documentos consistentes.

---

## 8️⃣ 🖼️ IMÁGENES Y ASSETS

Astro también permite trabajar con recursos asociados al contenido, como:

* 🖼️ Imágenes
* 🎨 Iconos
* 📄 Archivos
* 🎬 Videos
* 📦 Otros assets

Estos recursos pueden estar relacionados con contenido del proyecto.

Por ejemplo:

```text
src/
├── content/
│   └── blog/
│       └── astro.md
│
└── assets/
    └── astro-cover.png
```

Las imágenes pueden utilizarse dentro de páginas y contenido para crear artículos más completos.

---

# 🧠 ESTRUCTURA GENERAL

Una forma sencilla de entender todo este sistema es:

```text
                    📚 CONTENT
                        │
          ┌─────────────┼─────────────┐
          ↓             ↓             ↓
     📄 Markdown       🧩 MDX     🗂️ Collections
          │             │             │
          │             │             ↓
          │             │       🧱 Content Schema
          │             │             │
          └─────────────┴─────────────┘
                        ↓
               🗂️ Contenido estructurado
                        ↓
                  🚀 Astro
                        ↓
                🌐 Página final
```

### 🎯 Idea clave

> **Markdown/MDX** define cómo escribes el contenido, **Content Collections** lo organizan, **Schemas** definen su estructura y **Astro** utiliza esos datos para construir las páginas.
