# 🧩 COMPONENTS & ROUTING

> En esta parte vas a aprender **cómo Astro organiza las páginas y componentes** y cómo una estructura de carpetas puede convertirse directamente en las rutas de tu sitio.

La idea principal:

```text
src/
├── components/
├── pages/
└── layouts/
```

Cada carpeta tiene una responsabilidad diferente.

---

## 📑 ÍNDICE — COMPONENTS & ROUTING

- [🧩 COMPONENTS \& ROUTING](#-components--routing)
  - [📑 ÍNDICE — COMPONENTS \& ROUTING](#-índice--components--routing)
  - [1️⃣ 📄 ARCHIVOS `.ASTRO`](#1️⃣--archivos-astro)
    - [📁 Ejemplo](#-ejemplo)
    - [🧠 ¿Para qué sirven?](#-para-qué-sirven)
  - [2️⃣ 🧠 FRONTMATTER](#2️⃣--frontmatter)
    - [📌 Ejemplo](#-ejemplo-1)
    - [🧠 ¿Qué hace?](#-qué-hace)
    - [⚡ ¿Dónde se ejecuta?](#-dónde-se-ejecuta)
  - [3️⃣ 🧩 COMPONENTES](#3️⃣--componentes)
    - [📦 Props](#-props)
    - [🧠 Modelo mental](#-modelo-mental)
  - [4️⃣ 📄 PAGES](#4️⃣--pages)
    - [🏠 `index.astro`](#-indexastro)
    - [📄 `about.astro`](#-aboutastro)
    - [📄 `contact.astro`](#-contactastro)
    - [🧠 Idea clave](#-idea-clave)
  - [5️⃣ 🧭 FILE-BASED ROUTING](#5️⃣--file-based-routing)
    - [🆚 Comparación](#-comparación)
    - [🧠 Regla mental](#-regla-mental)
  - [6️⃣ 🔗 RUTAS DINÁMICAS](#6️⃣--rutas-dinámicas)
    - [🧠 Ejemplo conceptual](#-ejemplo-conceptual)
    - [📌 ¿Para qué sirve?](#-para-qué-sirve)
  - [7️⃣ 📦 LAYOUTS](#7️⃣--layouts)
    - [🧩 ¿Qué es `<slot />`?](#-qué-es-slot-)
    - [🧠 Modelo mental](#-modelo-mental-1)
  - [8️⃣ 🎨 CSS Y ESTILOS](#8️⃣--css-y-estilos)
    - [📦 CSS global](#-css-global)
    - [🧩 CSS en componentes](#-css-en-componentes)
- [🧠 ESTRUCTURA COMPLETA](#-estructura-completa)
- [🏆 IDEA CLAVE](#-idea-clave-1)

## 1️⃣ 📄 ARCHIVOS `.ASTRO`

Los archivos `.astro` son los componentes principales de Astro.

### 📁 Ejemplo

```text
src/
└── components/
    └── Welcome.astro
```

Un archivo `.astro` puede contener:

```astro
---
const name = 'Alo';
---

<h1>Hola {name}</h1>
```

Se divide conceptualmente en dos partes:

```text
┌──────────────────────┐
│ Frontmatter          │
│ ---                  │
│ JavaScript / TS      │
│ ---                  │
├──────────────────────┤
│ Template             │
│ HTML + componentes   │
└──────────────────────┘
```

### 🧠 ¿Para qué sirven?

Los archivos `.astro` pueden representar:

* páginas;
* componentes;
* layouts;
* estructuras reutilizables.

Por ejemplo:

```text
src/
├── components/
│   ├── Header.astro
│   └── Card.astro
│
├── layouts/
│   └── MainLayout.astro
│
└── pages/
    └── index.astro
```

> [!IMPORTANT]
> Un archivo `.astro` no significa necesariamente que sea una página. Puede ser un componente reutilizable o un layout.

---

## 2️⃣ 🧠 FRONTMATTER

El **Frontmatter** es la sección que aparece al principio de un archivo `.astro`, delimitada por:

```text
---
---
```

Dentro puedes escribir JavaScript o TypeScript.

### 📌 Ejemplo

```astro
---
const title = 'Mi página';
const user = {
  name: 'Alo',
  age: 25
};
---

<h1>{title}</h1>
<p>Hola {user.name}</p>
```

### 🧠 ¿Qué hace?

El código del Frontmatter se utiliza para preparar los datos que necesita el componente.

Por ejemplo:

```astro
---
const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Mouse', price: 30 }
];
---
```

Después puedes utilizar esos datos en el template:

```astro
<ul>
  {products.map((product) => (
    <li>{product.name} - ${product.price}</li>
  ))}
</ul>
```

### ⚡ ¿Dónde se ejecuta?

Una de las ideas importantes de Astro es que el código del Frontmatter **se ejecuta durante el renderizado del lado del servidor/build**, no como JavaScript enviado automáticamente al navegador.

```text
Frontmatter
     ↓
Astro procesa los datos
     ↓
Genera HTML
     ↓
Navegador
```

Por eso puedes utilizar el Frontmatter para:

* obtener datos;
* transformar información;
* consultar APIs;
* importar componentes;
* definir variables;
* preparar contenido.

---

## 3️⃣ 🧩 COMPONENTES

Un componente es una pieza reutilizable de la interfaz.

Por ejemplo:

```text
components/
├── Header.astro
├── Footer.astro
├── Button.astro
└── Card.astro
```

En lugar de repetir:

```html
<header>...</header>
```

en todas tus páginas, puedes crear:

```astro
<Header />
```

---

### 📦 Props

Los componentes pueden recibir información mediante **props**.

Por ejemplo:

```astro
---
const { title } = Astro.props;
---

<h2>{title}</h2>
```

Y utilizarlo:

```astro
<Card title="Mi proyecto" />
```

El componente recibe:

```text
title
  ↓
"Mi proyecto"
```

y genera:

```html
<h2>Mi proyecto</h2>
```

### 🧠 Modelo mental

```text
Página
  ↓
Componente
  ↓
Props
  ↓
HTML
```

Esto permite crear componentes reutilizables sin duplicar código.

---

## 4️⃣ 📄 PAGES

La carpeta:

```text
src/pages/
```

es especialmente importante porque contiene las páginas que Astro utiliza para construir las rutas del sitio.

Ejemplo:

```text
src/pages/
├── index.astro
├── about.astro
└── contact.astro
```

Representaría:

```text
/
/about
/contact
```

### 🏠 `index.astro`

Normalmente representa la ruta raíz:

```text
src/pages/index.astro
```

↓

```text
/
```

---

### 📄 `about.astro`

```text
src/pages/about.astro
```

↓

```text
/about
```

---

### 📄 `contact.astro`

```text
src/pages/contact.astro
```

↓

```text
/contact
```

### 🧠 Idea clave

> En Astro:
>
> **La estructura de `src/pages/` determina las rutas del sitio.**

---

## 5️⃣ 🧭 FILE-BASED ROUTING

**File-based routing** significa que las rutas se generan a partir de los archivos que tienes dentro de `src/pages`.

Por ejemplo:

```text
src/pages/
│
├── index.astro
├── about.astro
├── contact.astro
│
└── blog/
    ├── index.astro
    └── post.astro
```

Puede producir:

```text
/
/about
/contact
/blog
/blog/post
```

No necesitas crear manualmente algo equivalente a:

```text
routes = [
  ...
]
```

como podrías hacer en Angular.

### 🆚 Comparación

| Angular       | Astro        |
| ------------- | ------------ |
| Routes        | Archivos     |
| ↓             | ↓            |
| Configuración | `src/pages/` |
| ↓             | ↓            |
| Router        | Rutas        |

### 🧠 Regla mental

```text
📁 carpeta = segmento de URL
📄 archivo = página
```

Por ejemplo:

```text
src/pages/
└── products/
    └── index.astro
```

↓

```text
/products
```

---

## 6️⃣ 🔗 RUTAS DINÁMICAS

Las rutas dinámicas permiten crear páginas cuyo contenido depende de un valor de la URL.

Por ejemplo:

```text
/blog/hello-world
/blog/astro
/blog/javascript
```

En lugar de crear:

```text
hello-world.astro
astro.astro
javascript.astro
```

puedes utilizar un segmento dinámico:

```text
src/pages/blog/[slug].astro
```

El:

```text
[slug]
```

representa una parte variable de la URL.

```text
/blog/[slug]
       ↑
    dinámico
```

Entonces:

```text
/blog/astro
```

puede proporcionar:

```text
slug = "astro"
```

Y:

```text
/blog/javascript
```

puede proporcionar:

```text
slug = "javascript"
```

---

### 🧠 Ejemplo conceptual

```astro
---
const { slug } = Astro.params;
---

<h1>Artículo: {slug}</h1>
```

Si visitas:

```text
/blog/astro
```

puedes obtener:

```text
Artículo: astro
```

### 📌 ¿Para qué sirve?

Es especialmente útil para:

* blogs;
* productos;
* usuarios;
* documentación;
* categorías;
* artículos;
* páginas generadas desde datos.

---

## 7️⃣ 📦 LAYOUTS

Un **layout** es una estructura reutilizable que puede envolver diferentes páginas.

Por ejemplo:

```text
src/
└── layouts/
    └── MainLayout.astro
```

Puede contener:

```text
┌─────────────────────┐
│ Header              │
├─────────────────────┤
│                     │
│     CONTENIDO       │
│                     │
├─────────────────────┤
│ Footer              │
└─────────────────────┘
```

Un layout podría verse conceptualmente así:

```astro
---
const { title } = Astro.props;
---

<html>
  <head>
    <title>{title}</title>
  </head>

  <body>
    <header>
      <h1>Mi sitio</h1>
    </header>

    <main>
      <slot />
    </main>

    <footer>
      Footer
    </footer>
  </body>
</html>
```

### 🧩 ¿Qué es `<slot />`?

`<slot />` representa el lugar donde se insertará el contenido de la página.

Por ejemplo:

```astro
<MainLayout title="Inicio">
  <h1>Bienvenido</h1>
</MainLayout>
```

El:

```html
<h1>Bienvenido</h1>
```

ocupará el lugar de:

```astro
<slot />
```

### 🧠 Modelo mental

```text
MainLayout
│
├── Header
│
├── <slot />
│      ↓
│   contenido
│
└── Footer
```

Esto evita repetir la misma estructura en todas las páginas.

---

## 8️⃣ 🎨 CSS Y ESTILOS

Astro permite utilizar CSS de diferentes maneras.

Una forma muy común es colocar estilos directamente dentro del componente:

```astro
<h1>Hola Astro</h1>

<style>
  h1 {
    color: blue;
  }
</style>
```

Estos estilos se pueden asociar al componente correspondiente.

---

### 📦 CSS global

También puedes tener archivos CSS separados:

```text
src/
└── styles/
    └── global.css
```

Por ejemplo:

```css
body {
  margin: 0;
  font-family: sans-serif;
}
```

Y luego importarlo:

```astro
---
import '../styles/global.css';
---
```

---

### 🧩 CSS en componentes

Una ventaja de colocar estilos dentro de un componente `.astro` es que Astro puede aplicar un comportamiento de **scoping** a esos estilos.

Por ejemplo:

```astro
<div class="card">
  <h2>Producto</h2>
</div>

<style>
  .card {
    padding: 1rem;
  }
</style>
```

El estilo está pensado para afectar al componente donde fue declarado, evitando muchos conflictos accidentales con otros componentes.

---

# 🧠 ESTRUCTURA COMPLETA

Juntando todo:

```text
src/
│
├── 📁 components/
│   ├── Header.astro
│   ├── Footer.astro
│   └── Card.astro
│
├── 📁 layouts/
│   └── MainLayout.astro
│
├── 📁 pages/
│   ├── index.astro
│   ├── about.astro
│   │
│   └── 📁 blog/
│       ├── index.astro
│       └── [slug].astro
│
└── 📁 styles/
    └── global.css
```

El flujo sería:

```text
                    ASTRO
                      │
                      ▼
              ┌──────────────┐
              │  src/pages   │
              └──────┬───────┘
                     │
          ┌──────────┼──────────┐
          ▼          ▼          ▼
        index       about      blog
          │                      │
          │                   [slug]
          │                      │
          └──────────┬───────────┘
                     ▼
                 Layouts
                     │
                     ▼
                Components
                     │
                     ▼
                   HTML
                     │
                     ▼
                 Browser
```

---

# 🏆 IDEA CLAVE

Quédate con estas cuatro reglas:

```text
📁 src/components/
→ Componentes reutilizables

📁 src/pages/
→ Páginas + rutas

📁 src/layouts/
→ Estructuras compartidas

📄 [slug].astro
→ Ruta dinámica
```

Y el modelo mental más importante:

```text
ARCHIVO
   ↓
COMPONENTE

src/pages/
   ↓
RUTA

src/pages/[param].astro
   ↓
RUTA DINÁMICA

layouts/
   ↓
ESTRUCTURA REUTILIZABLE
```

Así puedes entender **Components & Routing** en Astro sin mezclarlo todavía con conceptos más avanzados como **Astro Islands, SSR, endpoints o content collections**.
