# 🟨 2. HTML — RESPUESTAS PARA ENTREVISTA

## 📑 ÍNDICE

- [🟨 2. HTML — RESPUESTAS PARA ENTREVISTA](#-2-html--respuestas-para-entrevista)
  - [📑 ÍNDICE](#-índice)
  - [🌐 ¿QUÉ ES HTML?](#-qué-es-html)
    - [🎤 Respuesta para entrevista](#-respuesta-para-entrevista)
    - [🧠 Importante](#-importante)
    - [🧩 Puedes pensarlo así](#-puedes-pensarlo-así)
- [🆚 ¿QUÉ DIFERENCIA HAY ENTRE HTML Y HTML5?](#-qué-diferencia-hay-entre-html-y-html5)
    - [🎤 Respuesta para entrevista](#-respuesta-para-entrevista-1)
    - [🧠 En resumen](#-en-resumen)
- [🧠 ¿QUÉ SON LAS ETIQUETAS SEMÁNTICAS?](#-qué-son-las-etiquetas-semánticas)
    - [🎤 Respuesta para entrevista](#-respuesta-para-entrevista-2)
    - [⭐ ¿Por qué son importantes?](#-por-qué-son-importantes)
- [🆚 ¿QUÉ DIFERENCIA HAY ENTRE `<div>` Y `<section>`?](#-qué-diferencia-hay-entre-div-y-section)
    - [🎤 Respuesta para entrevista](#-respuesta-para-entrevista-3)
    - [🧠 Regla mental](#-regla-mental)
- [🧩 ¿QUÉ DIFERENCIA HAY ENTRE `<section>`, `<article>`, `<header>`, `<nav>` Y `<main>`?](#-qué-diferencia-hay-entre-section-article-header-nav-y-main)
  - [`<main>`](#main)
  - [`<section>`](#section)
  - [`<article>`](#article)
  - [`<header>`](#header)
  - [`<nav>`](#nav)
- [🧠 RESUMEN](#-resumen)
- [♿ ¿QUÉ ES ACCESIBILIDAD WEB?](#-qué-es-accesibilidad-web)
    - [🎤 Respuesta para entrevista](#-respuesta-para-entrevista-4)
    - [💡 Ejemplo](#-ejemplo)
- [♿ ¿QUÉ ES ARIA?](#-qué-es-aria)
    - [🎤 Respuesta para entrevista](#-respuesta-para-entrevista-5)
    - [⚠️ MUY IMPORTANTE PARA ENTREVISTA](#️-muy-importante-para-entrevista)
- [🖼️ ¿PARA QUÉ SIRVE EL ATRIBUTO `alt`?](#️-para-qué-sirve-el-atributo-alt)
    - [🎤 Respuesta para entrevista](#-respuesta-para-entrevista-6)
    - [❌ Incorrecto](#-incorrecto)
    - [🟢 Correcto](#-correcto)
    - [🧠 ¿Y si la imagen es decorativa?](#-y-si-la-imagen-es-decorativa)
- [🆔 ¿CUÁL ES LA DIFERENCIA ENTRE `id` Y `class`?](#-cuál-es-la-diferencia-entre-id-y-class)
    - [🎤 Respuesta para entrevista](#-respuesta-para-entrevista-7)
    - [🎨 CSS](#-css)
    - [🧠 Regla mental](#-regla-mental-1)
- [📦 ¿QUÉ DIFERENCIA HAY ENTRE ELEMENTOS `BLOCK`, `INLINE` E `INLINE-BLOCK`?](#-qué-diferencia-hay-entre-elementos-block-inline-e-inline-block)
    - [🎤 Respuesta para entrevista](#-respuesta-para-entrevista-8)
  - [🟦 BLOCK](#-block)
  - [🟨 INLINE](#-inline)
  - [🟩 INLINE-BLOCK](#-inline-block)
    - [🧠 Resumen](#-resumen-1)
- [📝 ¿QUÉ ES UN FORMULARIO HTML?](#-qué-es-un-formulario-html)
    - [🎤 Respuesta para entrevista](#-respuesta-para-entrevista-9)
    - [🧠 Elementos importantes](#-elementos-importantes)
- [🔒 ¿QUÉ DIFERENCIA HAY ENTRE `disabled` Y `readonly`?](#-qué-diferencia-hay-entre-disabled-y-readonly)
    - [🎤 Respuesta para entrevista](#-respuesta-para-entrevista-10)
    - [🔴 `disabled`](#-disabled)
    - [🟢 `readonly`](#-readonly)
    - [🧠 La diferencia clave](#-la-diferencia-clave)
- [🔥 RESUMEN PARA MEMORIZAR ANTES DE LA ENTREVISTA](#-resumen-para-memorizar-antes-de-la-entrevista)
- [⭐ LAS DIFERENCIAS QUE TE PUEDEN PREGUNTAR INMEDIATAMENTE DESPUÉS](#-las-diferencias-que-te-pueden-preguntar-inmediatamente-después)

## 🌐 ¿QUÉ ES HTML?

### 🎤 Respuesta para entrevista

> **HTML, que significa HyperText Markup Language, es un lenguaje de marcado utilizado para estructurar el contenido de una página web.** Define elementos como títulos, párrafos, enlaces, imágenes, formularios, tablas, etc.

### 🧠 Importante

HTML **no es un lenguaje de programación**.

Su función principal es definir la **estructura y significado del contenido**.

```html
<h1>Mi página</h1>

<p>Este es un párrafo.</p>

<button>Guardar</button>
```

### 🧩 Puedes pensarlo así

| Tecnología | Responsabilidad |
| ---------- | --------------- |
| HTML       | Estructura      |
| CSS        | Presentación    |
| JS         | Comportamiento  |

---

# 🆚 ¿QUÉ DIFERENCIA HAY ENTRE HTML Y HTML5?

### 🎤 Respuesta para entrevista

> **HTML5 es una versión moderna del estándar HTML que introdujo nuevas etiquetas semánticas, elementos multimedia, APIs y mejoras para aplicaciones web modernas.**

HTML5 introdujo elementos como:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

También elementos multimedia:

```html
<audio>
<video>
```

Y elementos gráficos:

```html
<canvas>
```

Además incorporó APIs y características como:

```text
Geolocation
Web Storage
Web Workers
WebSocket
```

### 🧠 En resumen

```text
HTML
↓
estructura básica

HTML5
↓
HTML moderno + semántica + multimedia + APIs
```

> 💡 En la práctica, cuando hablamos actualmente de HTML, normalmente estamos utilizando el estándar HTML moderno.

---

# 🧠 ¿QUÉ SON LAS ETIQUETAS SEMÁNTICAS?

### 🎤 Respuesta para entrevista

> **Son etiquetas HTML que describen el significado y propósito del contenido que contienen.** Ayudan a que la estructura de la página sea más clara para desarrolladores, buscadores y tecnologías de asistencia.

Por ejemplo:

```html
<header>
  <h1>Mi página</h1>
</header>

<nav>
  ...
</nav>

<main>
  <article>
    ...
  </article>
</main>

<footer>
  ...
</footer>
```

En cambio:

```html
<div>
  <div>
    <div>
      ...
    </div>
  </div>
</div>
```

funciona visualmente, pero **no comunica qué representa cada sección**.

### ⭐ ¿Por qué son importantes?

| Beneficio                       |   |
| ------------------------------- | - |
| ♿ Accesibilidad                 |   |
| 🔎 SEO                          |   |
| 🧑‍💻 Mantenibilidad            |   |
| 🧠 Comprensión de la estructura |   |

---

# 🆚 ¿QUÉ DIFERENCIA HAY ENTRE `<div>` Y `<section>`?

### 🎤 Respuesta para entrevista

> **`div` es un contenedor genérico sin significado semántico, mientras que `section` representa una sección temática del contenido que normalmente tiene un propósito concreto y, generalmente, un encabezado.**

Ejemplo:

```html
<div class="card">
  <p>Producto</p>
</div>
```

Aquí simplemente necesitamos un contenedor.

Mientras:

```html
<section>
  <h2>Productos destacados</h2>

  ...
</section>
```

representa una sección específica del documento.

### 🧠 Regla mental

| Elemento    | Idea                                                               |
| ----------- | ------------------------------------------------------------------ |
| `<div>`     | → necesito agrupar elementos                                       |
| `<section>` | → estoy agrupando contenido relacionado que representa una sección |

> 💡 No deberías reemplazar todos los `div` por `section`. Tienen propósitos diferentes.

---

# 🧩 ¿QUÉ DIFERENCIA HAY ENTRE `<section>`, `<article>`, `<header>`, `<nav>` Y `<main>`?

> ⭐ Esta es **muy buena para entrevista** porque evalúa si realmente entiendes HTML semántico.

## `<main>`

Representa el **contenido principal** de la página.

```html
<main>
  <h1>Productos</h1>

  ...
</main>
```

Normalmente debe existir **un `<main>` principal por página**.

---

## `<section>`

Representa una **sección temática** del contenido.

```html
<section>
  <h2>Productos destacados</h2>

  ...
</section>
```

---

## `<article>`

Representa contenido que tiene **sentido independiente o puede distribuirse de forma independiente**.

Ejemplos:

```html
<article>
  <h2>Cómo aprender Angular</h2>
  <p>...</p>
</article>
```

Otros ejemplos:

* 📰 Una noticia
* 📝 Un post
* 💬 Una publicación
* 🛍️ Una tarjeta de producto independiente

---

## `<header>`

Representa contenido introductorio de una página o sección.

```html
<header>
  <h1>Mi blog</h1>
</header>
```

> 💡 Importante: `<header>` **no significa necesariamente "la parte superior de toda la página"**.

Puede existir dentro de un `<article>`:

```html
<article>

  <header>
    <h2>Mi artículo</h2>
    <p>Publicado hoy</p>
  </header>

  <p>Contenido...</p>

</article>
```

---

## `<nav>`

Representa una sección que contiene **enlaces de navegación importantes**.

```html
<nav>
  <a href="/">Inicio</a>
  <a href="/about">Sobre nosotros</a>
  <a href="/contact">Contacto</a>
</nav>
```

---

# 🧠 RESUMEN

| Elemento    | Representa                |
| ----------- | ------------------------- |
| `<main>`    | → contenido principal     |
| `<section>` | → sección temática        |
| `<article>` | → contenido independiente |
| `<header>`  | → contenido introductorio |
| `<nav>`     | → navegación              |

# ♿ ¿QUÉ ES ACCESIBILIDAD WEB?

### 🎤 Respuesta para entrevista

> **La accesibilidad web consiste en diseñar y desarrollar sitios y aplicaciones que puedan ser utilizados por la mayor cantidad de personas posible, incluyendo personas con diferentes discapacidades.**

Por ejemplo, una aplicación debería poder utilizarse mediante:

| Medio / necesidad                    |
| ------------------------------------ |
| ⌨️ Teclado                           |
| 🖱️ Mouse                            |
| 🔊 Lectores de pantalla              |
| 👁️ Diferentes necesidades visuales  |
| 🧠 Diferentes necesidades cognitivas |

### 💡 Ejemplo

❌ Mala práctica:

```html
<div onclick="save()">
  Guardar
</div>
```

Aunque podemos hacerlo parecer un botón con CSS, semánticamente no es un botón.

🟢 Mejor:

```html
<button type="button">
  Guardar
</button>
```

El navegador ya sabe que es un botón y las tecnologías de asistencia pueden interpretarlo correctamente.

---

# ♿ ¿QUÉ ES ARIA?

ARIA significa **Accessible Rich Internet Applications**.

### 🎤 Respuesta para entrevista

> **ARIA es un conjunto de atributos que permite proporcionar información adicional sobre la semántica, estado y comportamiento de elementos HTML para mejorar su accesibilidad, especialmente cuando los elementos nativos de HTML no son suficientes.**

Ejemplo:

```html
<button aria-label="Cerrar">
  ✕
</button>
```

Otro ejemplo:

```html
<button
  aria-expanded="false">
  Menú
</button>
```

ARIA puede comunicar estados como:

```text
aria-expanded
aria-hidden
aria-selected
aria-checked
aria-disabled
```

### ⚠️ MUY IMPORTANTE PARA ENTREVISTA

Si HTML ya tiene un elemento semántico apropiado:

```html
<button>
```

normalmente es mejor utilizarlo que intentar crear uno con:

```html
<div role="button">
```

> ⭐ **Primero utiliza HTML semántico nativo; utiliza ARIA cuando sea necesario.**

---

# 🖼️ ¿PARA QUÉ SIRVE EL ATRIBUTO `alt`?

### 🎤 Respuesta para entrevista

> **El atributo `alt` proporciona un texto alternativo para una imagen. Es importante principalmente para accesibilidad, porque los lectores de pantalla pueden utilizarlo para comunicar el contenido de la imagen a usuarios que no pueden verla. También funciona como texto alternativo cuando la imagen no puede cargarse.**

Ejemplo:

```html
<img
  src="profile.jpg"
  alt="Fotografía de Alo">
```

### ❌ Incorrecto

```html
<img src="profile.jpg">
```

### 🟢 Correcto

```html
<img
  src="profile.jpg"
  alt="Fotografía de Alo">
```

### 🧠 ¿Y si la imagen es decorativa?

Entonces puedes utilizar:

```html
<img
  src="decoration.png"
  alt="">
```

Esto indica a los lectores de pantalla que la imagen **no aporta información relevante**.

---

# 🆔 ¿CUÁL ES LA DIFERENCIA ENTRE `id` Y `class`?

### 🎤 Respuesta para entrevista

> **`id` identifica un elemento específico dentro del documento y debería ser único, mientras que `class` permite agrupar varios elementos que comparten características o estilos.**

Ejemplo:

```html
<div id="header"></div>
```

El `id` debería ser único.

Mientras:

```html
<div class="card"></div>
<div class="card"></div>
<div class="card"></div>
```

puede repetirse.

### 🎨 CSS

```css
#header {
  ...
}

.card {
  ...
}
```

### 🧠 Regla mental

| Atributo | Idea                                  |
| -------- | ------------------------------------- |
| `id`     | → identidad única                     |
| `class`  | → grupo / característica reutilizable |

> 💡 En proyectos modernos, las `class` suelen utilizarse mucho más para estilos. Los `id` también pueden ser útiles para enlaces internos, JavaScript y relaciones de accesibilidad.

---

# 📦 ¿QUÉ DIFERENCIA HAY ENTRE ELEMENTOS `BLOCK`, `INLINE` E `INLINE-BLOCK`?

### 🎤 Respuesta para entrevista

> **Los elementos block normalmente ocupan todo el ancho disponible y comienzan en una nueva línea. Los elementos inline ocupan únicamente el espacio de su contenido y permanecen dentro de la misma línea. `inline-block` combina características de ambos: permanece en línea pero permite controlar dimensiones como width y height.**

---

## 🟦 BLOCK

Ejemplos:

```html
<div></div>
<p></p>
<h1></h1>
<section></section>
```

Conceptualmente:

```text
┌─────────────────────────┐
│        elemento         │
└─────────────────────────┘
┌─────────────────────────┐
│        elemento         │
└─────────────────────────┘
```

Cada uno comienza en una nueva línea.

---

## 🟨 INLINE

Ejemplos:

```html
<span>Hola</span>
<a>Link</a>
<strong>Importante</strong>
```

Se mantienen dentro del flujo de texto:

```text
Hola  Link  Importante
```

---

## 🟩 INLINE-BLOCK

```css
.card {
  display: inline-block;
  width: 200px;
  height: 100px;
}
```

Se comporta en línea:

```text
[ CARD ] [ CARD ] [ CARD ]
```

pero permite controlar dimensiones como:

```text
width
height
padding
margin
```

### 🧠 Resumen

| Tipo           | Comportamiento                              |
| -------------- | ------------------------------------------- |
| `block`        | → nueva línea + dimensiones                 |
| `inline`       | → misma línea + comportamiento de contenido |
| `inline-block` | → misma línea + dimensiones                 |

> 💡 Ojo: decir simplemente que los elementos `inline` "no aceptan width/height" es una simplificación. Su comportamiento respecto a dimensiones, márgenes y padding tiene matices según la propiedad y el flujo del documento.

# 📝 ¿QUÉ ES UN FORMULARIO HTML?

### 🎤 Respuesta para entrevista

> **Un formulario HTML es una estructura utilizada para recopilar datos introducidos por el usuario y enviarlos o procesarlos. Se construye principalmente mediante elementos como `form`, `input`, `label`, `select`, `textarea` y `button`.**

Ejemplo:

```html
<form>

  <label for="email">
    Email
  </label>

  <input
    id="email"
    type="email">

  <label for="password">
    Password
  </label>

  <input
    id="password"
    type="password">

  <button type="submit">
    Iniciar sesión
  </button>

</form>
```

### 🧠 Elementos importantes

| Elemento     | Función              |
| ------------ | -------------------- |
| `<form>`     | → formulario         |
| `<label>`    | → etiqueta del campo |
| `<input>`    | → entrada de datos   |
| `<select>`   | → selección          |
| `<textarea>` | → texto largo        |
| `<button>`   | → acción             |

---

# 🔒 ¿QUÉ DIFERENCIA HAY ENTRE `disabled` Y `readonly`?

> ⭐ Esta es **muy típica**.

### 🎤 Respuesta para entrevista

> **`disabled` hace que un control no pueda ser utilizado ni editado por el usuario y, en un formulario HTML tradicional, su valor no se incluye en el envío. `readonly` impide modificar el valor, pero el usuario puede seguir enfocando y seleccionando el campo, y su valor sí puede enviarse con el formulario.**

### 🔴 `disabled`

```html
<input
  value="Alo"
  disabled>
```

El usuario:

```text
❌ No puede editar
❌ No puede interactuar normalmente
❌ No se incluye en el submit de un formulario
```

### 🟢 `readonly`

```html
<input
  value="Alo"
  readonly>
```

El usuario:

```text
❌ No puede modificar

✅ Puede enfocar
✅ Puede seleccionar/copiar
✅ Su valor puede incluirse en el submit
```

### 🧠 La diferencia clave

| Atributo   | Idea                                             |
| ---------- | ------------------------------------------------ |
| `disabled` | → campo deshabilitado                            |
| `readonly` | → campo editable = NO<br>→ campo disponible = SÍ |

---

# 🔥 RESUMEN PARA MEMORIZAR ANTES DE LA ENTREVISTA

| Concepto          | Recuerda                                                          |
| ----------------- | ----------------------------------------------------------------- |
| **HTML**          | → estructura del contenido                                        |
| **HTML5**         | → HTML moderno + semántica + APIs + multimedia                    |
| **Semántica**     | → etiquetas que describen el significado del contenido            |
| `<div>`           | → contenedor genérico                                             |
| `<section>`       | → sección temática                                                |
| `<article>`       | → contenido independiente                                         |
| `<header>`        | → contenido introductorio                                         |
| `<nav>`           | → navegación                                                      |
| `<main>`          | → contenido principal                                             |
| **Accesibilidad** | → hacer la web utilizable por personas con diferentes capacidades |
| **ARIA**          | → información adicional para accesibilidad                        |
| `alt`             | → texto alternativo de imágenes                                   |
| `id`              | → identificador único                                             |
| `class`           | → agrupación reutilizable                                         |
| `block`           | → nueva línea                                                     |
| `inline`          | → permanece en línea                                              |
| `inline-block`    | → en línea + permite dimensiones                                  |
| `form`            | → recopilar/procesar datos del usuario                            |
| `disabled`        | → deshabilitado y no enviado por submit tradicional               |
| `readonly`        | → no editable pero su valor puede enviarse                        |

---

# ⭐ LAS DIFERENCIAS QUE TE PUEDEN PREGUNTAR INMEDIATAMENTE DESPUÉS

| Diferencia                 | Idea clave                                                              |
| -------------------------- | ----------------------------------------------------------------------- |
| `<div>` vs `<section>`     | → genérico vs semántico                                                 |
| `<section>` vs `<article>` | → sección temática vs contenido independiente                           |
| `id` vs `class`            | → único vs reutilizable                                                 |
| `block` vs `inline`        | → nueva línea vs misma línea                                            |
| `inline` vs `inline-block` | → comportamiento inline vs inline + dimensiones                         |
| `disabled` vs `readonly`   | → deshabilitado vs solo lectura                                         |
| HTML vs HTML5              | → HTML como estándar/lenguaje vs versión moderna con nuevas capacidades |
| HTML semántico vs ARIA     | → primero semántica nativa; ARIA complementa cuando hace falta          |

> 🎯 Con esta sección ya tienes una base bastante sólida para las **preguntas de HTML que suelen aparecer en entrevistas Frontend**.

