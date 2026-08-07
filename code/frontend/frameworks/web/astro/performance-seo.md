# 🚀 PERFORMANCE & SEO

Este apartado reúne las técnicas que permiten que una aplicación Astro sea **rápida, eficiente y fácil de encontrar en buscadores**.

La idea principal es entender dos objetivos:

```text
⚡ PERFORMANCE
      ↓
Que la página cargue y responda rápido

🔍 SEO
      ↓
Que los buscadores puedan entenderla y posicionarla
```
---

## 📚 ÍNDICE — PERFORMANCE & SEO

1. ⚡ [PERFORMANCE](#1️⃣-⚡-performance)
2. 📦 [JAVASCRIPT DEL CLIENTE](#2️⃣-📦-javascript-del-cliente)
3. 🏝️ [ISLANDS Y PERFORMANCE](#3️⃣-🏝️-islands-y-performance)
4. 💧 [HYDRATION](#4️⃣-💧-hydration)
5. 💤 [LAZY LOADING](#5️⃣-💤-lazy-loading)
6. 🖼️ [OPTIMIZACIÓN DE IMÁGENES](#6️⃣-🖼️-optimización-de-imágenes)
7. ✂️ [CODE SPLITTING](#7️⃣-✂️-code-splitting)
8. 🌐 [CDN](#8️⃣-🌐-cdn)
9. 💾 [CACHING](#9️⃣-💾-caching)
10. 🔍 [SEO](#🔍-seo)
    - 🏷️ title
    - 📝 meta description
    - 🌐 Open Graph
    - 🔗 canonical
    - 🗺️ sitemap
    - 🤖 robots.txt
    - 🧱 semantic HTML
11. 📈 [CORE WEB VITALS](#🔟-📈-core-web-vitals)
    - ⚡ LCP — Largest Contentful Paint
    - 🖱️ INP — Interaction to Next Paint
    - 📐 CLS — Cumulative Layout Shift
12. 🚀 [DEPLOYMENT](#🚀-deployment)
    - 🌐 Static Hosting
    - 🖥️ SSR Hosting
    - 🔌 Adapters
    - 🏗️ Build
13. 🧠 [IDEA CLAVE](#🧠-idea-clave)

---

# 1️⃣ ⚡ PERFORMANCE

**Performance** es el conjunto de técnicas utilizadas para mejorar la velocidad, eficiencia y capacidad de respuesta de una aplicación web.

Una página con buena performance debería:

* cargar rápidamente
* enviar pocos recursos innecesarios
* utilizar poco JavaScript
* mostrar contenido rápidamente
* responder rápido a las interacciones
* consumir pocos recursos del dispositivo

En Astro esto es especialmente importante porque su arquitectura está diseñada para enviar **HTML con el mínimo JavaScript posible**.

```text
Usuario
   ↓
Request
   ↓
Servidor
   ↓
HTML
   ↓
Browser
```

En lugar de enviar automáticamente una gran aplicación JavaScript al navegador.

### 🧠 Objetivo

```text
Menos JavaScript
        +
Menos recursos innecesarios
        +
Contenido optimizado
        ↓
   ⚡ Mejor Performance
```

---

# 2️⃣ 📦 JAVASCRIPT DEL CLIENTE

JavaScript en el navegador permite crear interactividad:

```text
Botones
Formularios
Menús
Animaciones
Componentes dinámicos
```

Pero JavaScript también tiene un costo.

El navegador debe:

```text
Descargar
   ↓
Parsear
   ↓
Compilar
   ↓
Ejecutar
```

Por eso Astro utiliza una estrategia diferente:

```text
HTML
 ↓
Browser

JavaScript
 ↓
Solo cuando realmente se necesita
```

### 🧠 Idea clave

Una página estática como:

```text
Blog
Artículo
Documentación
Landing page
```

probablemente no necesita que toda la página sea JavaScript.

En cambio:

```text
Chat
Dashboard
Editor
Carrito interactivo
```

pueden necesitar componentes interactivos.

---

# 3️⃣ 🏝️ ISLANDS Y PERFORMANCE

Las **Islands** permiten limitar el JavaScript únicamente a las partes interactivas de la página.

Por ejemplo:

```text
Página
│
├── Header          → HTML
├── Article         → HTML
├── Image           → HTML
├── Counter         → 🏝️ JavaScript
└── Footer          → HTML
```

En lugar de:

```text
Toda la página
      ↓
JavaScript
```

Astro puede hacer:

```text
HTML estático
      +
🏝️ pequeñas islas interactivas
```

### 🚀 Ventaja

Se reduce la cantidad de JavaScript que el navegador necesita descargar y ejecutar.

Esto puede mejorar:

* tiempo de carga
* uso de CPU
* consumo de memoria
* capacidad de respuesta

---

# 4️⃣ 💧 HYDRATION

**Hydration** es el proceso mediante el cual un componente que inicialmente llegó como HTML obtiene JavaScript y se vuelve interactivo en el navegador.

Conceptualmente:

```text
Servidor
   ↓
HTML
   ↓
Browser
   ↓
Hydration
   ↓
Componente interactivo
```

Por ejemplo:

```text
<button>
  Contador: 0
</button>
```

Inicialmente puede existir como HTML.

Después de la hydration:

```text
Click
 ↓
JavaScript
 ↓
Contador cambia
```

### 🧠 En Astro

Astro permite controlar **cuándo debe hidratarse una Island**.

Por ejemplo:

```text
client:load
client:idle
client:visible
client:media
```

Esto permite evitar ejecutar JavaScript antes de que sea necesario.

---

# 5️⃣ 💤 LAZY LOADING

**Lazy loading** significa cargar un recurso **solo cuando realmente se necesita**.

En lugar de cargar todo inmediatamente:

```text
Página
 ↓
Cargar TODO
```

se puede hacer:

```text
Página
 ↓
Cargar lo necesario
 ↓
Usuario necesita algo
 ↓
Cargarlo
```

Puede aplicarse a:

* imágenes
* componentes
* JavaScript
* recursos externos

### 🖼️ Ejemplo conceptual

```text
Imagen fuera de pantalla
        ↓
No cargar inmediatamente
        ↓
Usuario hace scroll
        ↓
Imagen se necesita
        ↓
Cargar imagen
```

### 🎯 Beneficio

Reduce los recursos que deben descargarse durante la carga inicial.

---

# 6️⃣ 🖼️ OPTIMIZACIÓN DE IMÁGENES

Las imágenes pueden representar una gran parte del peso de una página.

Una imagen sin optimizar puede ser:

```text
imagen.jpg
↓
5 MB
```

Mientras que una versión optimizada podría ser mucho más pequeña.

La optimización puede incluir:

* compresión
* formatos modernos
* diferentes tamaños
* responsive images
* lazy loading
* dimensiones apropiadas

### 🧠 Ejemplo

No tiene sentido cargar:

```text
4000 × 3000 px
```

si solamente se mostrará:

```text
400 × 300 px
```

### 🎯 Objetivo

```text
Menor tamaño
     ↓
Menos bytes
     ↓
Carga más rápida
```

---

# 7️⃣ ✂️ CODE SPLITTING

**Code splitting** consiste en dividir el código JavaScript en diferentes partes en lugar de enviar todo el código de una sola vez.

Sin splitting:

```text
Aplicación
   ↓
bundle.js
   ↓
TODO el JavaScript
```

Con splitting:

```text
Aplicación
   │
   ├── home.js
   ├── dashboard.js
   ├── admin.js
   └── profile.js
```

El navegador puede descargar solamente lo necesario.

### 🚀 Beneficio

Reduce la cantidad de JavaScript inicial.

Esto es especialmente importante en aplicaciones grandes.

---

# 8️⃣ 🌐 CDN

Una **CDN (Content Delivery Network)** es una red de servidores distribuidos geográficamente.

En lugar de que todos los usuarios obtengan los recursos desde un único servidor:

```text
Usuario Colombia ──┐
Usuario México ────┼──→ Servidor único
Usuario España ────┘
```

una CDN puede servirlos desde ubicaciones más cercanas:

```text
                 CDN
          ┌───────┼───────┐
          ▼       ▼       ▼
       América  Europa   Asia
          │       │       │
        Users   Users   Users
```

### 📦 Puede servir

* HTML
* JavaScript
* CSS
* imágenes
* fuentes
* otros assets

### 🎯 Beneficio

Menor latencia y distribución más eficiente de los recursos.

---

# 9️⃣ 💾 CACHING

**Caching** consiste en guardar temporalmente recursos para evitar descargarlos o generarlos nuevamente cuando no es necesario.

Por ejemplo:

```text
Primera visita
    ↓
Descargar recurso
    ↓
Guardar en cache

Segunda visita
    ↓
Usar cache
    ↓
⚡ Más rápido
```

Puede existir caching en diferentes niveles:

```text
Browser Cache
      ↓
CDN Cache
      ↓
Server Cache
      ↓
Database Cache
```

### 🧠 Objetivo

Evitar trabajo y transferencias innecesarias.

---

# 🔍 SEO

**SEO (Search Engine Optimization)** es el conjunto de prácticas utilizadas para ayudar a que los buscadores puedan **entender, indexar y mostrar correctamente** una página.

Astro es especialmente adecuado para sitios donde el contenido y el HTML tienen mucha importancia:

* blogs
* documentación
* páginas corporativas
* portfolios
* sitios de contenido
* tiendas

---

## 🏷️ `title`

Define el título de la página.

```html
<title>Guía de Astro</title>
```

Los buscadores pueden utilizarlo como parte del resultado de búsqueda.

También ayuda al usuario a identificar la página en:

* pestañas del navegador
* favoritos
* resultados de búsqueda

---

## 📝 `meta description`

Describe brevemente el contenido de la página.

```html
<meta
  name="description"
  content="Aprende Astro desde cero."
/>
```

Ayuda a proporcionar contexto sobre la página a los buscadores y puede utilizarse como fragmento descriptivo en los resultados.

---

## 🌐 Open Graph

**Open Graph** permite definir cómo se representa una página cuando se comparte en plataformas sociales y aplicaciones que leen metadatos Open Graph.

Ejemplo:

```html
<meta property="og:title" content="Guía de Astro" />
<meta property="og:description" content="Aprende Astro desde cero." />
<meta property="og:image" content="/images/astro.png" />
```

Conceptualmente:

```text
URL compartida
      ↓
Open Graph
      ↓
Título
Descripción
Imagen
```

---

## 🔗 canonical

Una URL **canonical** indica cuál es la versión principal de una página cuando existen URLs que podrían representar el mismo contenido.

```html
<link
  rel="canonical"
  href="https://example.com/blog/astro"
/>
```

Ayuda a evitar problemas relacionados con contenido duplicado.

```text
/page
/page/
/page?ref=google
```

pueden representar el mismo contenido.

La canonical permite indicar:

```text
Esta es la URL principal:
        ↓
/page
```

---

## 🗺️ sitemap

Un **sitemap** es un archivo que proporciona a los buscadores información sobre las URLs que forman parte de un sitio.

Normalmente:

```text
/sitemap.xml
```

Puede ayudar a los buscadores a descubrir páginas.

Conceptualmente:

```text
Website
 │
 ├── /
 ├── /blog
 ├── /about
 └── /contact
        ↓
   sitemap.xml
```

---

## 🤖 robots.txt

`robots.txt` proporciona instrucciones para los crawlers de los buscadores.

Normalmente se encuentra en:

```text
/robots.txt
```

Puede utilizarse para indicar qué partes del sitio pueden o no rastrearse.

### ⚠️ Importante

`robots.txt` **no es un mecanismo de seguridad**.

No debe utilizarse para proteger información privada.

---

## 🧱 semantic HTML

El **HTML semántico** utiliza elementos que describen el significado del contenido.

Por ejemplo:

```html
<header>
<nav>
<main>
<article>
<section>
<footer>
```

En lugar de construir todo utilizando únicamente:

```html
<div>
```

### 🧠 Beneficios

El HTML semántico ayuda a:

* buscadores
* accesibilidad
* lectores de pantalla
* estructura del documento
* mantenimiento del código

Por ejemplo:

```html
<main>
  <article>
    <h1>Aprendiendo Astro</h1>

    <section>
      <h2>Performance</h2>
    </section>
  </article>
</main>
```

La estructura proporciona información sobre la relación entre los contenidos.

---

# 🔟 📈 CORE WEB VITALS

Los **Core Web Vitals** son métricas utilizadas para evaluar aspectos importantes de la experiencia de usuario de una página.

Entre las métricas principales están:

### ⚡ LCP — Largest Contentful Paint

Mide cuánto tarda en aparecer el elemento de contenido principal.

```text
Página comienza a cargar
        ↓
Contenido principal aparece
        ↓
LCP
```

---

### 🖱️ INP — Interaction to Next Paint

Mide la capacidad de respuesta de la página ante interacciones del usuario.

Por ejemplo:

```text
Click
 ↓
Procesamiento
 ↓
Actualización visual
```

Una buena respuesta significa que la interfaz reacciona rápidamente.

---

### 📐 CLS — Cumulative Layout Shift

Mide cuánto se mueve inesperadamente el contenido mientras la página carga.

Mal ejemplo:

```text
Texto
Texto
Texto
   ↓
Imagen carga
   ↓
Todo se desplaza
```

Una buena página intenta mantener estable el layout.

### 🧠 Resumen

```text
LCP
↓
¿Qué tan rápido aparece el contenido principal?

INP
↓
¿Qué tan rápido responde a las interacciones?

CLS
↓
¿Qué tan estable es visualmente?
```

---

# 🚀 DEPLOYMENT

Una vez desarrollada y optimizada una aplicación Astro, hay que **generar el build y desplegarlo** en un entorno donde los usuarios puedan acceder.

El proceso general es:

```text
Código Astro
     ↓
   Build
     ↓
Archivos / servidor
     ↓
Hosting
     ↓
🌐 Internet
```

---

## 🌐 Static Hosting

Si el proyecto puede generarse completamente como HTML estático:

```text
Astro
 ↓
Build
 ↓
HTML + CSS + JS + Assets
 ↓
Static Hosting
```

Es ideal para:

* blogs
* documentación
* portfolios
* landing pages
* sitios de contenido

No necesita necesariamente un servidor Node ejecutando Astro.

---

## 🖥️ SSR Hosting

Cuando utilizas **Server-Side Rendering (SSR)**, algunas páginas necesitan ser generadas en el servidor cuando llegan las solicitudes.

```text
Browser
   ↓
Request
   ↓
Servidor
   ↓
Astro SSR
   ↓
HTML
   ↓
Browser
```

Esto permite trabajar con funcionalidades que necesitan ejecución del lado servidor.

---

## 🔌 Adapters

Los **adapters** permiten adaptar Astro al entorno donde se ejecutará.

Conceptualmente:

```text
             Astro
               │
        ┌──────┼──────┐
        ▼      ▼      ▼
      Node   Serverless  Cloud
        │      │      │
        └──────┼──────┘
               ▼
            Hosting
```

El adapter conecta el output de Astro con el runtime o plataforma de deployment correspondiente.

---

## 🏗️ Build

El **build** prepara la aplicación para producción.

Conceptualmente:

```text
Código fuente
     ↓
Astro Build
     ↓
Optimización
     ↓
HTML / JS / CSS / Assets
     ↓
Producción
```

Dependiendo de la configuración del proyecto, el resultado puede ser:

```text
Static
   ↓
Archivos estáticos
```

o:

```text
SSR
   ↓
Código preparado para ejecutarse en un servidor
```

### 🧠 Idea clave

El flujo completo de este documento puede visualizarse así:

```text
                    🚀 ASTRO
                       │
          ┌────────────┴────────────┐
          ▼                         ▼
     ⚡ PERFORMANCE                 🔍 SEO
          │                         │
   ┌──────┼──────┐          ┌───────┼────────┐
   ▼      ▼      ▼          ▼       ▼        ▼
 Islands Images  Cache     Meta   Sitemap Semantic
   │      │      │          │       │        HTML
   └──────┼──────┘          └───────┼────────┘
          │                         │
          └────────────┬────────────┘
                       ▼
                    🏗️ BUILD
                       │
             ┌─────────┴─────────┐
             ▼                   ▼
        Static Hosting       SSR Hosting
             │                   │
             └─────────┬─────────┘
                       ▼
                     🌐 WEB
```

> [!TIP]
> **Performance** busca que la página sea rápida y eficiente. **SEO** busca que los buscadores puedan entender, indexar y presentar correctamente el contenido. En Astro, ambos se benefician de su enfoque en HTML, bajo JavaScript por defecto y rendering flexible.
