# 🎨 3. CSS — RESPUESTAS PARA ENTREVISTA

## 📑 Índice 

- [🎨 3. CSS — RESPUESTAS PARA ENTREVISTA](#-3-css--respuestas-para-entrevista)
  - [📑 Índice](#-índice)
- [🎨 ¿QUÉ ES CSS?](#-qué-es-css)
    - [🎤 Respuesta para entrevista](#-respuesta-para-entrevista)
    - [🧠 Regla mental](#-regla-mental)
- [📦 ¿QUÉ ES EL BOX MODEL?](#-qué-es-el-box-model)
    - [🎤 Respuesta para entrevista](#-respuesta-para-entrevista-1)
    - [🧩 Los cuatro componentes](#-los-cuatro-componentes)
- [📏 ¿QUÉ DIFERENCIA HAY ENTRE `margin`, `padding` Y `border`?](#-qué-diferencia-hay-entre-margin-padding-y-border)
    - [🎤 Respuesta](#-respuesta)
    - [🧠 Fácil](#-fácil)
- [🧩 ¿QUÉ ES `display: flex`?](#-qué-es-display-flex)
    - [🎤 Respuesta para entrevista](#-respuesta-para-entrevista-2)
    - [🧠 Conceptos importantes](#-conceptos-importantes)
- [🏗️ ¿QUÉ ES CSS GRID?](#️-qué-es-css-grid)
    - [🎤 Respuesta para entrevista](#-respuesta-para-entrevista-3)
- [⚔️ FLEXBOX VS GRID](#️-flexbox-vs-grid)
    - [🎤 Respuesta para entrevista](#-respuesta-para-entrevista-4)
    - [🧠 Comparación](#-comparación)
- [📍 ¿QUÉ ES `position: relative`?](#-qué-es-position-relative)
    - [🎤 Respuesta para entrevista](#-respuesta-para-entrevista-5)
    - [🧠 Muy importante](#-muy-importante)
- [📌 ¿QUÉ DIFERENCIA HAY ENTRE `absolute`, `relative`, `fixed` Y `sticky`?](#-qué-diferencia-hay-entre-absolute-relative-fixed-y-sticky)
    - [🎤 Respuesta para entrevista](#-respuesta-para-entrevista-6)
  - [🟦 `relative`](#-relative)
  - [🟥 `absolute`](#-absolute)
  - [🟩 `fixed`](#-fixed)
  - [🟨 `sticky`](#-sticky)
- [🧠 RESUMEN DE `position`](#-resumen-de-position)
- [🧱 ¿QUÉ ES `z-index`?](#-qué-es-z-index)
    - [🎤 Respuesta para entrevista](#-respuesta-para-entrevista-7)
    - [⚠️ Pregunta típica](#️-pregunta-típica)
- [🎯 ¿QUÉ ES LA ESPECIFICIDAD?](#-qué-es-la-especificidad)
    - [🎤 Respuesta para entrevista](#-respuesta-para-entrevista-8)
    - [🧠 Orden simplificado](#-orden-simplificado)
- [❗ ¿QUÉ SIGNIFICA `!important`?](#-qué-significa-important)
    - [🎤 Respuesta para entrevista](#-respuesta-para-entrevista-9)
    - [⚠️ ¿Por qué evitarlo?](#️-por-qué-evitarlo)
- [🧙‍♀️ ¿QUÉ SON LAS PSEUDO-CLASES?](#️-qué-son-las-pseudo-clases)
    - [🎤 Respuesta para entrevista](#-respuesta-para-entrevista-10)
    - [🧩 Ejemplos](#-ejemplos)
    - [⭐ Algunas muy conocidas](#-algunas-muy-conocidas)
- [✨ ¿QUÉ SON LOS PSEUDO-ELEMENTOS?](#-qué-son-los-pseudo-elementos)
    - [🎤 Respuesta para entrevista](#-respuesta-para-entrevista-11)
    - [⭐ Algunos comunes](#-algunos-comunes)
- [🆚 ¿QUÉ DIFERENCIA HAY ENTRE `:hover` Y `::before`?](#-qué-diferencia-hay-entre-hover-y-before)
    - [🎤 Respuesta para entrevista](#-respuesta-para-entrevista-12)
    - [`hover`](#hover)
    - [`before`](#before)
    - [🧠 Fácil](#-fácil-1)
- [📱 ¿QUÉ SON MEDIA QUERIES?](#-qué-son-media-queries)
    - [🎤 Respuesta para entrevista](#-respuesta-para-entrevista-13)
- [📱 ¿QUÉ ES RESPONSIVE DESIGN?](#-qué-es-responsive-design)
    - [🎤 Respuesta para entrevista](#-respuesta-para-entrevista-14)
- [📏 ¿QUÉ DIFERENCIA HAY ENTRE `px`, `%`, `em`, `rem`, `vh` Y `vw`?](#-qué-diferencia-hay-entre-px--em-rem-vh-y-vw)
  - [`px`](#px)
  - [`%`](#)
  - [`em`](#em)
  - [`rem`](#rem)
  - [`vh`](#vh)
  - [`vw`](#vw)
- [🧠 RESUMEN](#-resumen)
- [📱 ¿QUÉ ES MOBILE FIRST?](#-qué-es-mobile-first)
    - [🎤 Respuesta para entrevista](#-respuesta-para-entrevista-15)
    - [💻 Ejemplo](#-ejemplo)
    - [📐 La idea](#-la-idea)
    - [🧠 ¿Por qué se utiliza?](#-por-qué-se-utiliza)
- [🧱 ¿QUÉ ES BEM?](#-qué-es-bem)
  - [🟦 BLOCK](#-block)
  - [🟨 ELEMENT](#-element)
  - [🟥 MODIFIER](#-modifier)
    - [🧠 Estructura](#-estructura)
    - [🎤 Respuesta para entrevista](#-respuesta-para-entrevista-16)
- [🔥 RESUMEN PARA MEMORIZAR](#-resumen-para-memorizar)
- [⭐ DIFERENCIAS QUE DEBES PODER EXPLICAR SIN PENSAR](#-diferencias-que-debes-poder-explicar-sin-pensar)

# 🎨 ¿QUÉ ES CSS?

### 🎤 Respuesta para entrevista

> **CSS, que significa Cascading Style Sheets, es un lenguaje utilizado para definir la presentación y apariencia de los documentos HTML.** Permite controlar aspectos como colores, tamaños, tipografías, espaciado, posicionamiento, layouts, animaciones y diseño responsive.

Por ejemplo:

```css id="7q1b2m"
button {
  background: blue;
  color: white;
  padding: 10px 20px;
}
```

### 🧠 Regla mental

| Tecnología | Responsabilidad  |
| ---------- | ---------------- |
| HTML       | → estructura     |
| CSS        | → presentación   |
| JS         | → comportamiento |

---

# 📦 ¿QUÉ ES EL BOX MODEL?

### 🎤 Respuesta para entrevista

> **El Box Model es el modelo que utiliza CSS para representar cada elemento como una caja compuesta por cuatro áreas: content, padding, border y margin.**

Visualmente:

```text id="9k8z1f"
┌──────────────────────────────┐
│            margin            │
│  ┌────────────────────────┐  │
│  │         border         │  │
│  │  ┌──────────────────┐  │  │
│  │  │      padding     │  │  │
│  │  │  ┌────────────┐  │  │  │
│  │  │  │  content   │  │  │  │
│  │  │  └────────────┘  │  │  │
│  │  └──────────────────┘  │  │
│  └────────────────────────┘  │
└──────────────────────────────┘
```

### 🧩 Los cuatro componentes

| Componente | Representa        |
| ---------- | ----------------- |
| `content`  | → contenido       |
| `padding`  | → espacio interno |
| `border`   | → borde           |
| `margin`   | → espacio externo |

---

# 📏 ¿QUÉ DIFERENCIA HAY ENTRE `margin`, `padding` Y `border`?

### 🎤 Respuesta

> **Padding es el espacio interno entre el contenido y el borde. Border es el borde del elemento. Margin es el espacio externo entre el elemento y otros elementos.**

Ejemplo:

```css id="1hzxqf"
.card {
  margin: 20px;
  border: 1px solid black;
  padding: 16px;
}
```

Visualmente:

```text id="c4qv78"
otros elementos
      ↕
   margin
      ↓
 ┌───────────────┐
 │    border     │
 │  ┌─────────┐  │
 │  │ padding │  │
 │  │ content │  │
 │  └─────────┘  │
 └───────────────┘
```

### 🧠 Fácil

| Propiedad | Idea      |
| --------- | --------- |
| `margin`  | → afuera  |
| `border`  | → límite  |
| `padding` | → adentro |

---

# 🧩 ¿QUÉ ES `display: flex`?

### 🎤 Respuesta para entrevista

> **Flexbox es un modelo de layout de CSS diseñado principalmente para distribuir y alinear elementos dentro de un contenedor en una dimensión, ya sea en fila o en columna.**

Ejemplo:

```css id="9r0n8z"
.container {
  display: flex;
}
```

Puedes controlar:

```css id="3y8k5j"
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
```

### 🧠 Conceptos importantes

```text id="y7j0x2"
flex-direction
justify-content
align-items
align-self
flex-wrap
gap
flex-grow
flex-shrink
flex-basis
```

---

# 🏗️ ¿QUÉ ES CSS GRID?

### 🎤 Respuesta para entrevista

> **CSS Grid es un sistema de layout bidimensional que permite organizar elementos utilizando filas y columnas.** Es especialmente útil para estructuras donde necesitamos controlar simultáneamente ambas dimensiones.

Ejemplo:

```css id="n2h8mq"
.container {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 20px;
}
```

Resultado conceptual:

```text id="4e5d8k"
┌──────┐ ┌──────┐ ┌──────┐
│      │ │      │ │      │
│  1   │ │  2   │ │  3   │
└──────┘ └──────┘ └──────┘

┌──────┐ ┌──────┐ ┌──────┐
│  4   │ │  5   │ │  6   │
└──────┘ └──────┘ └──────┘
```

---

# ⚔️ FLEXBOX VS GRID

### 🎤 Respuesta para entrevista

> **Flexbox está pensado principalmente para layouts unidimensionales, mientras que Grid está pensado para layouts bidimensionales. Flexbox suele ser muy útil para alinear elementos en una fila o columna, mientras que Grid es especialmente útil cuando necesitamos controlar simultáneamente filas y columnas.**

### 🧠 Comparación

| Flexbox              | Grid                      |
| -------------------- | ------------------------- |
| 1 dimensión          | 2 dimensiones             |
| Fila o columna       | Filas y columnas          |
| Alineación           | Layout completo           |
| Componentes pequeños | Estructuras más complejas |

Por ejemplo:

```text id="4s0b8j"
Flexbox
→ menú
→ botones
→ navbar
→ alineación de elementos
```

```text id="y1m3n8"
Grid
→ dashboard
→ galería
→ layout de página
→ estructuras de filas/columnas
```

> 💡 **No significa que Grid sea "mejor" que Flexbox.** Se complementan.

---

# 📍 ¿QUÉ ES `position: relative`?

### 🎤 Respuesta para entrevista

> **`position: relative` mantiene el elemento dentro del flujo normal del documento, pero permite desplazarlo visualmente usando `top`, `right`, `bottom` o `left`. Además, suele utilizarse como referencia para elementos hijos con `position: absolute`.**

Ejemplo:

```css id="z4x5rk"
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 0;
  right: 0;
}
```

### 🧠 Muy importante

```text id="q2b6cz"
parent
position: relative
        ↓
child
position: absolute
```

El hijo utilizará al padre como referencia de posicionamiento, en determinadas condiciones.

# 📌 ¿QUÉ DIFERENCIA HAY ENTRE `absolute`, `relative`, `fixed` Y `sticky`?

### 🎤 Respuesta para entrevista

> **`relative` mantiene el elemento en el flujo normal y permite desplazarlo. `absolute` saca el elemento del flujo normal y lo posiciona respecto al containing block. `fixed` lo posiciona respecto al viewport y permanece fijado mientras se desplaza la página. `sticky` se comporta inicialmente como un elemento normal, pero puede quedar fijado al alcanzar un umbral de desplazamiento.**

| `position` | Idea principal                                                     |
| ---------- | ------------------------------------------------------------------ |
| `relative` | Permanece en el flujo y puede desplazarse                          |
| `absolute` | Sale del flujo y se posiciona respecto al containing block         |
| `fixed`    | Sale del flujo y se posiciona normalmente respecto al viewport     |
| `sticky`   | Participa inicialmente en el flujo y se pega al alcanzar un umbral |

---

## 🟦 `relative`

```css id="9q2x1v"
position: relative;
```

```text id="2t7m5r"
Flujo normal
     ↓
┌─────────┐
│ Element │ ← puede desplazarse
└─────────┘
```

---

## 🟥 `absolute`

```css id="h7z3pk"
position: absolute;
```

Sale del flujo normal.

```text id="4m8w2q"
┌──────────────────────┐
│ Parent               │
│                      │
│              ┌────┐  │
│              │Child│ │
│              └────┘  │
└──────────────────────┘
```

Es muy utilizado para:

```text id="7y5k1n"
badges
dropdowns
iconos
overlays
elementos posicionados
```

---

## 🟩 `fixed`

```css id="6v3n9a"
position: fixed;
```

Se posiciona respecto al viewport.

Por ejemplo:

```text id="1q8r4s"
┌──────────────────────┐
│ 🔔                   │
│                      │
│       contenido      │
│                      │
│                      │
└──────────────────────┘
```

El botón puede permanecer en la misma posición mientras haces scroll.

---

## 🟨 `sticky`

```css id="p4x7mz"
position: sticky;
top: 0;
```

Se comporta como elemento normal hasta alcanzar el límite establecido.

Por ejemplo:

```text id="k5n2wr"
Scroll ↓

Header
────────────

Contenido

────────────
Header ← se queda pegado
────────────
```

Muy común para:

```text id="f8c1ya"
headers
navbars
tablas
secciones
```

---

# 🧠 RESUMEN DE `position`

```text id="w6m3qs"
relative
→ permanece en flujo
→ puede desplazarse
→ referencia para absolute

absolute
→ sale del flujo
→ se posiciona respecto a su containing block

fixed
→ sale del flujo
→ referencia normalmente viewport
→ permanece fijo al hacer scroll

sticky
→ participa inicialmente en el flujo
→ se "pega" al alcanzar un umbral
```

---

# 🧱 ¿QUÉ ES `z-index`?

### 🎤 Respuesta para entrevista

> **`z-index` controla el orden de apilamiento de elementos cuando se superponen. Un elemento con un nivel de apilamiento mayor puede aparecer por encima de otro, siempre teniendo en cuenta el stacking context correspondiente.**

Ejemplo:

```css id="d4q9xv"
.modal {
  z-index: 1000;
}

.header {
  z-index: 10;
}
```

Conceptualmente:

```text id="8r2k5m"
z-index: 1000
┌──────────────┐
│    MODAL     │
└──────────────┘
       ↑
       │
z-index: 10
┌──────────────┐
│    HEADER    │
└──────────────┘
```

### ⚠️ Pregunta típica

> "Le puse `z-index: 999999` pero no funciona, ¿por qué?"

Porque `z-index` **no es simplemente un número global de capas**. Los elementos pueden pertenecer a diferentes **stacking contexts**, y eso afecta cómo se comparan.

---

# 🎯 ¿QUÉ ES LA ESPECIFICIDAD?

### 🎤 Respuesta para entrevista

> **La especificidad es el mecanismo que utiliza CSS para determinar qué selector tiene mayor prioridad cuando varias reglas aplican al mismo elemento.**

Ejemplo:

```css id="v9m2kx"
p {
  color: blue;
}

.text {
  color: red;
}

#title {
  color: green;
}
```

Si tenemos:

```html id="c7r4pn"
<p id="title" class="text">
  Hola
</p>
```

gana:

```css id="m5q8tw"
#title
```

porque tiene mayor especificidad.

### 🧠 Orden simplificado

De menor a mayor:

```text id="x3k7vz"
elementos
↓
clases / atributos / pseudo-clases
↓
IDs
↓
!important
```

Pero ⚠️ hay más factores involucrados, como:

```text id="n8p4qs"
Cascade layers
Specificity
Source order
!important
```

> 💡 Por eso no conviene memorizarlo únicamente como "ID siempre gana".

---

# ❗ ¿QUÉ SIGNIFICA `!important`?

### 🎤 Respuesta para entrevista

> **`!important` aumenta la prioridad de una declaración CSS dentro de la cascada, haciendo que tenga prioridad frente a declaraciones normales que entren en conflicto.**

Ejemplo:

```css id="j2w6rm"
.title {
  color: red !important;
}
```

Aunque exista:

```css id="q8v3kp"
#title {
  color: blue;
}
```

el `!important` puede hacer que gane esa declaración, salvo que exista otra regla `!important` con mayor prioridad según la cascada.

### ⚠️ ¿Por qué evitarlo?

Porque puede:

* complicar la cascada;
* dificultar sobrescribir estilos;
* generar CSS difícil de mantener.

> 🧠 Usarlo **cuando realmente es necesario**, no como solución habitual.

# 🧙‍♀️ ¿QUÉ SON LAS PSEUDO-CLASES?

### 🎤 Respuesta para entrevista

> **Las pseudo-clases permiten seleccionar elementos según un estado, condición o posición determinada, sin necesidad de agregar una clase adicional al HTML.**

### 🧩 Ejemplos

```css id="8x4k2m"
button:hover {
  ...
}
```

```css id="3q7v9p"
input:focus {
  ...
}
```

```css id="5m1r8c"
li:first-child {
  ...
}
```

```css id="7z2n4w"
input:disabled {
  ...
}
```

### ⭐ Algunas muy conocidas

```text id="q9k3x7"
:hover
:focus
:active
:visited
:first-child
:last-child
:nth-child()
:not()
:checked
:disabled
```

---

# ✨ ¿QUÉ SON LOS PSEUDO-ELEMENTOS?

### 🎤 Respuesta para entrevista

> **Los pseudo-elementos permiten seleccionar o generar una parte específica del contenido de un elemento, como su primera letra, primera línea o contenido generado antes o después.**

Ejemplos:

```css id="m4v8q2"
p::first-letter {
  font-size: 30px;
}
```

O:

```css id="x7n2k5"
.card::before {
  content: '';
}
```

### ⭐ Algunos comunes

```text id="r5p9w3"
::before
::after
::first-letter
::first-line
::selection
```

---

# 🆚 ¿QUÉ DIFERENCIA HAY ENTRE `:hover` Y `::before`?

### 🎤 Respuesta para entrevista

> **`:hover` es una pseudo-clase que representa un estado del elemento cuando el usuario coloca el puntero sobre él. `::before` es un pseudo-elemento que permite generar contenido antes del contenido del elemento.**

### `hover`

```css id="v8m2q4"
button:hover {
  background: black;
}
```

```text id="n5x3k7"
Estado
↓
usuario pasa el mouse
```

### `before`

```css id="p4r7w9"
.card::before {
  content: '';
}
```

```text id="c8m2v6"
Contenido generado
↓
antes del contenido del elemento
```

### 🧠 Fácil

| Sintaxis | Tipo            | Representa        |
| -------- | --------------- | ----------------- |
| `:`      | Pseudo-clase    | → estado          |
| `::`     | Pseudo-elemento | → parte/contenido |

---

# 📱 ¿QUÉ SON MEDIA QUERIES?

### 🎤 Respuesta para entrevista

> **Las media queries permiten aplicar determinadas reglas CSS dependiendo de características del dispositivo o del entorno, como el ancho del viewport, permitiendo adaptar la interfaz a diferentes tamaños de pantalla.**

Ejemplo:

```css id="k7p2x9"
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
  }
}
```

Conceptualmente:

```text id="m3q8v5"
Desktop
[ 1 ][ 2 ][ 3 ]

Mobile
[ 1 ]
[ 2 ]
[ 3 ]
```

---

# 📱 ¿QUÉ ES RESPONSIVE DESIGN?

### 🎤 Respuesta para entrevista

> **Responsive Design es un enfoque de desarrollo que permite que una interfaz se adapte a diferentes tamaños y características de pantalla, manteniendo una buena experiencia de usuario en dispositivos como móviles, tablets y desktops.**

Se puede conseguir utilizando:

| Técnica             |
| ------------------- |
| Flexbox             |
| Grid                |
| Media Queries       |
| Unidades relativas  |
| Imágenes adaptables |
| Mobile First        |

Por ejemplo:

```text id="w6r2k9"
🖥️ Desktop
┌────┬────┬────┐
│  1 │  2 │  3 │
└────┴────┴────┘

📱 Mobile
┌────┐
│ 1  │
├────┤
│ 2  │
├────┤
│ 3  │
└────┘
```

---

# 📏 ¿QUÉ DIFERENCIA HAY ENTRE `px`, `%`, `em`, `rem`, `vh` Y `vw`?

> ⭐ Esta es **muy importante**.

## `px`

Unidad absoluta de CSS.

```css id="j8q4m2"
font-size: 16px;
```

Se utiliza cuando queremos un tamaño específico.

---

## `%`

Es relativo al tamaño de referencia correspondiente, que depende de la propiedad.

```css id="v3k7p9"
width: 50%;
```

Significa aproximadamente:

```text id="q5m2x8"
50% del tamaño de referencia
```

---

## `em`

Es relativo al **tamaño de fuente del contexto correspondiente**.

Por ejemplo:

```css id="r9w4k2"
.parent {
  font-size: 20px;
}

.child {
  font-size: 2em;
}
```

El `child` tendrá:

```text id="n6p3v8"
2 × 20px = 40px
```

> ⚠️ `em` puede acumularse de forma menos predecible cuando hay varios niveles de elementos anidados, dependiendo de la propiedad.

---

## `rem`

Es relativo al tamaño de fuente del **elemento raíz (`html`)**.

```css id="x2m7q4"
html {
  font-size: 16px;
}

.title {
  font-size: 2rem;
}
```

Resultado:

```text id="k8r3w5"
2 × 16px = 32px
```

Por eso `rem` suele ser muy útil para mantener escalas de tamaños consistentes.

---

## `vh`

Significa **viewport height**.

```css id="p7n4x2"
height: 100vh;
```

Representa el tamaño relativo a la altura del viewport.

---

## `vw`

Significa **viewport width**.

```css id="m5q8r3"
width: 50vw;
```

Representa el tamaño relativo al ancho del viewport.

---

# 🧠 RESUMEN

| Unidad | Idea                                        |
| ------ | ------------------------------------------- |
| `px`   | → tamaño fijo                               |
| `%`    | → relativo al contexto correspondiente      |
| `em`   | → relativo al tamaño de fuente del contexto |
| `rem`  | → relativo al font-size de html             |
| `vh`   | → relativo a viewport height                |
| `vw`   | → relativo a viewport width                 |

# 📱 ¿QUÉ ES MOBILE FIRST?

### 🎤 Respuesta para entrevista

> **Mobile First es un enfoque de diseño y desarrollo en el que primero se construye la interfaz pensando en pantallas pequeñas y después se agregan mejoras para pantallas más grandes mediante media queries.**

### 💻 Ejemplo

```css
.card {
  width: 100%;
}

@media (min-width: 768px) {
  .card {
    width: 50%;
  }
}
```

### 📐 La idea

| Orden | Pantalla    |
| ----- | ----------- |
| 1️⃣   | 📱 Mobile   |
| 2️⃣   | Tablet      |
| 3️⃣   | 🖥️ Desktop |

### 🧠 ¿Por qué se utiliza?

Porque obliga a priorizar:

* contenido importante;
* navegación;
* rendimiento;
* simplicidad;
* espacio limitado.

---

# 🧱 ¿QUÉ ES BEM?

BEM significa:

> **Block — Element — Modifier**

Es una metodología para nombrar clases CSS de manera consistente.

---

## 🟦 BLOCK

Es un componente independiente.

```css
.card {}
```

HTML:

```html
<div class="card">
</div>
```

---

## 🟨 ELEMENT

Es una parte del bloque.

Se representa con:

```text
__
```

Ejemplo:

```css
.card__title {}
.card__image {}
.card__button {}
```

HTML:

```html
<div class="card">

  <h2 class="card__title">
    Producto
  </h2>

  <img class="card__image">

  <button class="card__button">
    Comprar
  </button>

</div>
```

---

## 🟥 MODIFIER

Representa una variación o estado.

Se representa con:

```text
--
```

Ejemplo:

```css
.card--featured {}
.card--dark {}
.card__button--disabled {}
```

HTML:

```html
<div class="card card--featured">
</div>
```

### 🧠 Estructura

| Tipo         | Ejemplo               |
| ------------ | --------------------- |
| **BLOCK**    | `.card`               |
| **ELEMENT**  | `.card__title`        |
| **MODIFIER** | `.card--featured`     |
| **MODIFIER** | `.card__title--large` |

### 🎤 Respuesta para entrevista

> **BEM es una metodología de nomenclatura para CSS que divide las clases en bloques, elementos y modificadores. Su objetivo es crear estilos más predecibles, reutilizables y fáciles de mantener.**

---

# 🔥 RESUMEN PARA MEMORIZAR

| Concepto           | Idea clave                              |
| ------------------ | --------------------------------------- |
| **CSS**            | → estilos y presentación                |
| **BOX MODEL**      | → content + padding + border + margin   |
| **margin**         | → afuera                                |
| **padding**        | → adentro                               |
| **border**         | → borde                                 |
| **Flexbox**        | → layout 1D                             |
| **Grid**           | → layout 2D                             |
| **relative**       | → mantiene flujo + puede ser referencia |
| **absolute**       | → sale del flujo                        |
| **fixed**          | → fijado al viewport                    |
| **sticky**         | → se pega al alcanzar un umbral         |
| **z-index**        | → orden de apilamiento                  |
| **specificity**    | → prioridad de selectores               |
| **!important**     | → aumenta prioridad de una declaración  |
| **pseudo-class**   | → estado/condición                      |
| `:hover`           | → estado/condición                      |
| `:focus`           | → estado/condición                      |
| **pseudo-element** | → parte/contenido                       |
| `::before`         | → parte/contenido                       |
| `::after`          | → parte/contenido                       |
| **media query**    | → reglas según condiciones del entorno  |
| **responsive**     | → adaptación a diferentes pantallas     |
| **px**             | → unidad absoluta                       |
| **%**              | → unidad relativa                       |
| **em**             | → relativo al contexto tipográfico      |
| **rem**            | → relativo a html                       |
| **vh**             | → viewport height                       |
| **vw**             | → viewport width                        |
| **Mobile First**   | → empezar por móvil                     |
| **BEM**            | → Block + Element + Modifier            |

---

# ⭐ DIFERENCIAS QUE DEBES PODER EXPLICAR SIN PENSAR

| Conceptos                          | Diferencia                                               |
| ---------------------------------- | -------------------------------------------------------- |
| **Flexbox vs Grid**                | → 1 dimensión vs 2 dimensiones                           |
| **margin vs padding**              | → espacio externo vs interno                             |
| **relative vs absolute**           | → flujo normal vs fuera del flujo                        |
| **absolute vs fixed**              | → containing block vs viewport                           |
| **fixed vs sticky**                | → siempre fijado vs se fija al alcanzar un umbral        |
| **pseudo-class vs pseudo-element** | → estado vs parte/contenido                              |
| **em vs rem**                      | → contexto tipográfico vs raíz html                      |
| **responsive vs Mobile First**     | → concepto de adaptación vs estrategia de desarrollo     |
| **id/class**                       | → no es CSS específicamente, pero: único vs reutilizable |

---

> 💡 **Pregunta de oro que pueden hacerte:** *"¿Cómo centrarías un elemento horizontal y verticalmente?"*

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

Y si te preguntan **"¿por qué?"**, ahí demuestras que sabes que `justify-content` trabaja sobre el **main axis** y `align-items` sobre el **cross axis**, dependiendo de `flex-direction`.