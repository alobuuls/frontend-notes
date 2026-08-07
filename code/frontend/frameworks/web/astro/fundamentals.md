# 🧠 ASTRO FUNDAMENTALS

Astro es un framework orientado principalmente a **crear sitios web rápidos y con mucho contenido**, como páginas corporativas, blogs, portfolios, documentación, landing pages y sitios de marketing.

Su idea principal es:

> **Enviar al navegador HTML optimizado y solo JavaScript cuando realmente se necesita interactividad.**

---

# 🧠 ASTRO FUNDAMENTALS

## 📑 ÍNDICE

1. [🧠 ¿QUÉ ES ASTRO?](#1️⃣-🧠-qué-es-astro)
2. [🏗️ ARQUITECTURA DE ASTRO](#2️⃣-🏗️-arquitectura-de-astro)
3. [⚡ ZERO JAVASCRIPT BY DEFAULT](#3️⃣-⚡-zero-javascript-by-default)
4. [📁 ESTRUCTURA DE PROYECTO](#4️⃣-📁-estructura-de-proyecto)
5. [🛠️ ASTRO CLI](#5️⃣-🛠️-astro-cli)
6. [🌐 ASTRO VS SPA](#6️⃣-🌐-astro-vs-spa)
7. [🅰️ ASTRO VS ANGULAR](#7️⃣-🅰️-astro-vs-angular)
8. [🧠 MODELO MENTAL DE ASTRO](#🧠-modelo-mental-de-astro)

# 1️⃣ 🧠 ¿QUÉ ES ASTRO?

**Astro** es un framework web para construir sitios y aplicaciones web utilizando componentes y diferentes tecnologías del frontend.

Puede trabajar con:

* HTML
* CSS
* JavaScript
* TypeScript
* React
* Vue
* Svelte
* Preact
* Solid
* otros frameworks mediante integraciones

Por ejemplo, puedes tener componentes de React dentro de un proyecto Astro sin convertir todo el sitio en una aplicación React.

### 🎯 ¿Para qué se utiliza?

Astro es especialmente bueno para:

* 🌐 Sitios web
* 📝 Blogs
* 📚 Documentación
* 💼 Portfolios
* 🏢 Sitios corporativos
* 📢 Landing pages
* 🛍️ Sitios de contenido
* 📖 Sitios estáticos
* 🚀 Aplicaciones donde el rendimiento y SEO son importantes

### 🧠 Idea principal

Un sitio tradicional puede enviar mucho JavaScript al navegador.

Astro intenta hacer lo contrario:

```text
Servidor
   ↓
HTML
   ↓
Navegador
   ↓
Contenido visible
```

Y solamente agrega JavaScript cuando una parte de la página realmente necesita ser interactiva.

---

# 2️⃣ 🏗️ ARQUITECTURA DE ASTRO

La arquitectura de Astro está orientada a **renderizar contenido y reducir JavaScript innecesario en el navegador**.

Una idea simplificada es:

```text
           ASTRO
             ↓
      Renderiza contenido
             ↓
            HTML
             ↓
        ┌────┴────┐
        ↓         ↓
   Contenido   Componentes
   estático    interactivos
        ↓         ↓
      HTML      JavaScript
```

Esto permite que una página pueda contener:

* contenido HTML normal;
* componentes Astro;
* componentes de React;
* componentes de Vue;
* componentes de Svelte;
* etc.

### 🧩 Componentes

Astro utiliza archivos:

```text
.astro
```

Por ejemplo:

```astro
---
const title = 'Hola Astro';
---

<h1>{title}</h1>
```

La parte superior:

```astro
---
const title = 'Hola Astro';
---
```

contiene JavaScript/TypeScript que se ejecuta durante el proceso de renderizado.

La parte inferior:

```html
<h1>{title}</h1>
```

representa el HTML que se generará.

### 🧠 Concepto importante

Astro separa bastante claramente:

```text
Lógica
   ↓
Renderizado
   ↓
HTML
```

en lugar de asumir que toda la interfaz debe ejecutarse permanentemente como JavaScript en el navegador.

---

# 3️⃣ ⚡ ZERO JAVASCRIPT BY DEFAULT

Este es uno de los conceptos **más importantes de Astro**.

> **Astro no envía JavaScript al navegador por defecto para los componentes Astro estáticos.**

Por ejemplo:

```astro
---
const name = 'Alo';
---

<h1>Hola {name}</h1>
```

El navegador recibe esencialmente:

```html
<h1>Hola Alo</h1>
```

No necesita ejecutar JavaScript para mostrar ese contenido.

---

## 🧠 ¿Por qué es importante?

Menos JavaScript enviado al navegador puede significar:

* ⚡ menor cantidad de código que descargar;
* ⚡ menor trabajo para el navegador;
* 📉 menor JavaScript innecesario;
* 🚀 mejor rendimiento en determinados sitios;
* 🔎 buenas condiciones para SEO.

Pero **"Zero JavaScript" no significa que Astro no pueda utilizar JavaScript**.

Significa:

> **JavaScript solo cuando lo necesitas.**

---

## 🧩 ¿Y si necesito interactividad?

Puedes utilizar componentes interactivos.

Por ejemplo, un componente de React:

```jsx
function Counter() {
  return <button>+1</button>;
}
```

Astro puede cargarlo de forma interactiva utilizando una directiva como:

```astro
<Counter client:load />
```

Ahora sí se envía JavaScript al navegador para ese componente.

### 🧠 Modelo mental

```text
Componente Astro
      ↓
¿Necesita interacción?
      ↓
   ┌──┴──┐
   ↓     ↓
  NO     SÍ
   ↓     ↓
 HTML   JS
```

---

# 4️⃣ 📁 ESTRUCTURA DE PROYECTO

Un proyecto Astro normalmente puede tener una estructura similar a:

```text
my-astro-project/
│
├── 📁 public/
│
├── 📁 src/
│   │
│   ├── 📁 components/
│   │
│   ├── 📁 layouts/
│   │
│   ├── 📁 pages/
│   │
│   ├── 📁 content/
│   │
│   └── 📁 styles/
│
├── 📄 astro.config.mjs
├── 📄 package.json
├── 📄 tsconfig.json
└── 📄 README.md
```

### 📁 `src/`

Contiene principalmente el código fuente de la aplicación.

---

### 📁 `src/pages/`

Es una carpeta **muy importante**.

Las páginas dentro de `pages` participan en el sistema de routing basado en archivos.

Por ejemplo:

```text
src/pages/
├── index.astro
├── about.astro
└── contact.astro
```

puede representar:

```text
/
 /about
 /contact
```

---

### 📁 `src/components/`

Contiene componentes reutilizables.

Por ejemplo:

```text
components/
├── Header.astro
├── Footer.astro
├── Card.astro
└── Button.astro
```

---

### 📁 `src/layouts/`

Contiene layouts reutilizables para estructurar páginas.

Por ejemplo:

```text
layouts/
└── MainLayout.astro
```

Puede encargarse de elementos compartidos como:

```text
Header
   ↓
Contenido
   ↓
Footer
```

---

### 📁 `public/`

Contiene archivos estáticos que deben estar disponibles directamente.

Por ejemplo:

```text
public/
├── favicon.svg
├── robots.txt
└── images/
```

---

### 📄 `astro.config.mjs`

Contiene la configuración principal de Astro.

Por ejemplo:

* integraciones;
* adaptadores;
* configuración del proyecto;
* opciones de build;
* etc.

---

### 📄 `package.json`

Contiene:

* dependencias;
* scripts;
* información del proyecto;
* configuración relacionada con npm.

---

### 📄 `tsconfig.json`

Contiene la configuración de TypeScript.

---

# 5️⃣ 🛠️ ASTRO CLI

Astro proporciona una CLI para crear y administrar proyectos.

La CLI permite realizar tareas como:

* crear proyectos;
* iniciar el servidor de desarrollo;
* ejecutar el build;
* previsualizar el build;
* agregar integraciones;
* comprobar problemas.

### 🚀 Crear un proyecto

Una forma habitual es:

```bash
npm create astro@latest
```

Esto inicia el proceso para crear un proyecto Astro.

---

### ▶️ Servidor de desarrollo

Dentro del proyecto:

```bash
npm run dev
```

Permite ejecutar la aplicación en desarrollo.

Conceptualmente:

```text
Código
  ↓
Astro Dev Server
  ↓
Navegador
```

---

### 🏗️ Build

```bash
npm run build
```

Genera la versión preparada para producción según la configuración del proyecto.

---

### 👀 Preview

```bash
npm run preview
```

Permite previsualizar localmente el resultado generado por el build.

---

### 🧩 Integraciones

Astro dispone de integraciones para añadir funcionalidades y trabajar con otras tecnologías.

Por ejemplo, conceptualmente:

```text
Astro
  ├── React
  ├── Vue
  ├── Svelte
  └── otras integraciones
```

Esto permite utilizar Astro como una capa que organiza el sitio sin obligarte a utilizar un único framework de UI para todo.

---

# 6️⃣ 🌐 ASTRO VS SPA

Una **SPA (Single Page Application)** normalmente funciona con una aplicación JavaScript que se ejecuta principalmente en el navegador.

Ejemplos de frameworks utilizados para construir SPAs:

* Angular
* React
* Vue

El modelo tradicional puede verse así:

```text
Servidor
   ↓
HTML + JavaScript
   ↓
Navegador
   ↓
JavaScript ejecuta la aplicación
   ↓
Renderiza la interfaz
```

Astro puede utilizar un modelo diferente:

```text
Servidor / Build
      ↓
HTML
      ↓
Navegador
      ↓
Contenido
```

Y solamente agregar JavaScript para las partes que lo necesiten.

---

## 📊 Diferencia conceptual

| Característica        | Astro                              | SPA tradicional              |
| --------------------- | ---------------------------------- | ---------------------------- |
| HTML inicial          | ⭐⭐⭐⭐⭐                              | ⭐⭐⭐                          |
| JavaScript inicial    | Bajo                               | Normalmente mayor            |
| Interactividad        | Selectiva                          | Generalmente alta            |
| SEO                   | Muy bueno para sitios de contenido | Depende de la implementación |
| Arquitectura          | Orientada a contenido              | Orientada a aplicación       |
| Ideal para            | Webs, blogs, docs, marketing       | Aplicaciones complejas       |
| JavaScript en cliente | Bajo por defecto                   | Mayor protagonismo           |

> [!IMPORTANT]
> Esto no significa que **Astro sea mejor que una SPA**. Están optimizados para necesidades diferentes.

Una aplicación con dashboards complejos, estados globales, formularios altamente interactivos y mucha lógica de cliente puede beneficiarse más de una arquitectura SPA.

---

# 7️⃣ 🅰️ ASTRO VS ANGULAR

Aquí es importante entender que **Astro y Angular no persiguen exactamente el mismo objetivo**.

Angular está pensado como un framework completo para construir aplicaciones web.

Astro está especialmente orientado a sitios donde el **contenido, rendimiento y generación de HTML** tienen un papel importante.

---

## 🧠 Angular

Angular proporciona un ecosistema completo para construir aplicaciones:

```text
Angular
├── Components
├── Services
├── Dependency Injection
├── Routing
├── Forms
├── HttpClient
├── RxJS
├── Guards
└── etc.
```

Es especialmente adecuado para:

* dashboards;
* sistemas administrativos;
* aplicaciones empresariales;
* aplicaciones altamente interactivas;
* sistemas complejos.

---

## ⚡ Astro

Astro está muy orientado a:

```text
Astro
├── Pages
├── Components
├── Layouts
├── Content
└── Islands / interactividad
```

Es especialmente adecuado para:

* blogs;
* documentación;
* portfolios;
* landing pages;
* sitios corporativos;
* sitios de contenido;
* marketing.

---

## 📊 Comparación

| Característica             | 🧠 Astro                                   | 🅰️ Angular                    |
| -------------------------- | ------------------------------------------ | ------------------------------ |
| Tipo                       | Framework web                              | Framework web                  |
| Enfoque principal          | Contenido + rendimiento                    | Aplicaciones                   |
| JavaScript inicial         | Bajo por defecto                           | Mayor protagonismo             |
| Componentes                | `.astro` + otros frameworks                | Angular Components             |
| Routing                    | Basado principalmente en archivos          | Angular Router                 |
| DI                         | No es el enfoque central                   | Fundamental                    |
| RxJS                       | Opcional                                   | Muy integrado                  |
| Formularios                | Flexibles                                  | Sistema robusto                |
| SPA                        | No es su enfoque principal                 | Muy adecuado                   |
| SEO                        | Excelente para sitios de contenido         | Requiere arquitectura adecuada |
| Interactividad             | Selectiva                                  | Central                        |
| Aplicaciones empresariales | Posible, pero no es su principal fortaleza | ⭐⭐⭐⭐⭐                          |
| Blogs / contenido          | ⭐⭐⭐⭐⭐                                      | ⭐⭐⭐                            |
| Landing pages              | ⭐⭐⭐⭐⭐                                      | ⭐⭐⭐                            |
| Dashboards                 | ⭐⭐⭐                                        | ⭐⭐⭐⭐⭐                          |

---

# 🧠 MODELO MENTAL DE ASTRO

Si estás acostumbrada a pensar en Angular, puedes recordar Astro de esta manera:

```text
                 ASTRO
                   ↓
            Construye páginas
                   ↓
                HTML
                   ↓
        ┌──────────┴──────────┐
        ↓                     ↓
  Contenido estático      Interactividad
        ↓                     ↓
       HTML              JavaScript
                              ↓
                    React / Vue / Svelte
```

La filosofía principal es:

> **No envíes JavaScript al navegador si no lo necesitas.**

Y cuando una parte de la página sí necesita interacción:

```text
Componente interactivo
        ↓
   JavaScript
        ↓
     Browser
```

### 🏆 Idea clave para recordar

```text
Angular
→ Construir aplicaciones web completas.

Astro
→ Construir sitios rápidos orientados al contenido
  y añadir interactividad solo donde sea necesaria.
```

Esto será especialmente importante cuando más adelante estudies **Astro Islands**, porque ahí entenderás cómo Astro consigue combinar **HTML estático + componentes interactivos** sin convertir todo el sitio en una SPA.
