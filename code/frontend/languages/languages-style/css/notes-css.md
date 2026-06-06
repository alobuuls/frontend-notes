# CSS

## Sintaxis

```css
selector {
  propiedad: valor;
}
```

---

# 🎨 COLOR

Tanto para **(r)**, **(g)** y **(b)** su valor mínimo es **0** y máximo **255**.

Para **(a) alpha** se puede de dos maneras:

- Min: `0`
- Max: `1` (manejando decimales)

o

- Min: `0%`
- Max: `100%`

---

## 🔑 hsla

- 🔹 h (hue): sin límite fijo → se normaliza (`0 = 360`)
- 🔹 s (saturation): min `0%`, max `100%`
- 🔹 l (lightness): min `0%`, max `100%`
- 🔹 a (alpha): min `0`, max `1` (decimales) ó min `0%`, max `100%`

---

## 🔑 oklcha

- 🔹 OK
- 🔹 l (lightness): min `0%`, max `100%`
- 🔹 c (chroma): min `0`, sin máximo fijo (se recorta al gamut)
- 🔹 h (hue): sin límite fijo → se normaliza (`0 = 360`)
- 🔹 a (alpha): min `0`, max `1` (decimales) ó min `0%`, max `100%`

### Resumen

- 🔹 rgba = red, green, black, alpha (opacidad)
- 🔹 rgb = red, green, black
- 🔹 hsl = hue (matíz), saturación, luminosidad
- 🔹 oklch = ok, luminosidad, chroma, hue

---

# 🏷️ CLASES Y IDS

## 🔑 HTML : (class)

CSS:

```css
.clase {
}
```

## 🔑 HTML : (id)

CSS:

```css
#id {
}
```

---

# 🧬 HERENCIA

## 🔑 Propiedades que se heredan

- font-family
- font-size
- font-style
- font-variant
- font-weight
- line-height
- letter-spacing
- word-spacing
- white-space
- color
- text-align
- visibility

```css
font-family: system-ui;
```

Carga las fuentes predeterminadas para el sistema operativo.

---

## 🔑 Propiedades que NO se heredan (solo con inherit)

- text-decoration
- text-transform
- text-shadow
- vertical-align

---

## 🔑 Valores especiales de herencia

### 🔹 inherit

Fuerza que el elemento tome exactamente el mismo valor que su elemento padre.

### 🔹 initial

Fuerza que la propiedad tome su valor inicial definido por CSS.

### 🔹 unset

Combina herencia e inicial:

- Si la propiedad es heredable → actúa como `inherit`
- Si no es heredable → actúa como `initial`

### 🔹 revert

Revierte el valor al definido por el user agent stylesheet.

### 🔹 revert-layer

Parecido a `revert`, pero revierte solo hasta el límite de la capa de cascade layer.

---

# 🎯 PSEUDO-CLASES

## 🔑 Pseudo-clases de interacción con el usuario

- 🔹 `:hover` → cuando el cursor pasa sobre el elemento
- 🔹 `:active` → mientras el elemento está siendo activado (clic)
- 🔹 `:focus` → cuando el elemento tiene foco (input seleccionado)
- 🔹 `:focus-visible` → cuando el navegador decide mostrar el foco
- 🔹 `:focus-within` → si el elemento o alguno de sus hijos tiene foco
- 🔹 `:visited` → enlace ya visitado
- 🔹 `:link` → enlace no visitado
- 🔹 `:target` → cuando coincide con el fragmento de la URL (`#id`)

---

## 🔑 Pseudo-clases estructurales

- 🔹 `:first-child`
- 🔹 `:last-child`
- 🔹 `:only-child`

- 🔹 `:nth-child(n)`
- 🔹 `:nth-last-child(n)`

- 🔹 `:first-of-type`
- 🔹 `:last-of-type`
- 🔹 `:only-of-type`

- 🔹 `:nth-of-type(n)`
- 🔹 `:nth-last-of-type(n)`

- 🔹 `:root` → elemento raíz (`<html>`)
- 🔹 `:empty` → elemento sin hijos ni texto

---

# 🎯 SELECTORES

Un selector es lo que usamos para apuntar a uno o varios elementos del DOM y aplicarles estilos.

---

## 🔑 Selectores básicos

### Selector universal

```css
* {
}
```

Selecciona todos los elementos.

### Selector de tipo

```css
p {
}
```

Selecciona todos los `<p>`.

### Selector de clase

```css
.caja {
}
```

Selecciona todos los elementos con class="caja".

### Selector de ID

```css
#titulo {
}
```

Selecciona el elemento con id="titulo".

---

## 🔑 Selector de atributo

```css
[type="text"]
```

Input con atributo exacto.

```css
[type^="te"]
```

Empieza por.

```css
[type$="xt"]
```

Termina en.

```css
[type*="ex"]
```

Contiene.

---

## 🔑 Selectores combinadores

### Descendiente

```css
div p {
}
```

Todos los `<p>` dentro de un `<div>`.

### Hijo directo

```css
div > p {
}
```

Solo hijos directos.

### Hermano adyacente

```css
h1 + p {
}
```

El `<p>` inmediatamente siguiente.

### Hermano general

```css
h1 ~ p {
}
```

Todos los hermanos posteriores.

---

# ⚖️ ESPECIFICIDAD

## 🔑 Regla X,Y,Z

- 🔹 X = número de IDs
- 🔹 Y = clases, atributos y pseudo-clases
- 🔹 Z = elementos y pseudo-elementos

---

# 📏 UNIDADES RELATIVAS Y ABSOLUTAS

## 🔑 Absolutas (fijas)

- 🔹 px
- 🔹 cm
- 🔹 mm
- 🔹 in
- 🔹 pt
- 🔹 pc

---

## 🔑 Relativas

### Relativas a la fuente

- 🔹 em
- 🔹 rem
- 🔹 ex
- 🔹 ch

#### Ejemplo

```css
body {
  font-size: 16px;
}

.elemento {
  font-size: 2em;
}
```

Resultado:

```text
2em = 32px
```

---

### Relativas al viewport

- 🔹 vw
- 🔹 vh
- 🔹 vmin
- 🔹 vmax

---

### Otras relativas modernas

- 🔹 %
- 🔹 lh

---

# 🧹 RESET & NORMALIZE

## 🔑 Reset

- Elimina por completo los estilos por defecto.
- Objetivo → empezar desde cero.

---

## 🔑 Normalize

- Estandariza estilos entre navegadores.
- Mantiene estilos útiles.
- Objetivo → consistencia cross-browser.

---

# 📦 BOX MODEL

Cada elemento CSS es una caja formada por:

- 🔹 Content
- 🔹 Padding
- 🔹 Border
- 🔹 Margin

---

## 🔑 Propiedades

### Padding

```css
padding: 20px;
```

Espacio interno.

### Border

```css
border: 2px solid black;
```

Borde.

### Margin

```css
margin: 10px;
```

Espacio externo.

---

## 🔑 Box-sizing

### content-box (default)

```css
width: 100px;
padding: 10px;
border: 5px;
```

Resultado:

```text
100 + 10 + 10 + 5 + 5 = 130px
```

---

## 🔑 border-box

```css
* {
  box-sizing: border-box;
}
```

Width y height incluyen content + padding + border.

---

# 🌊 OVERFLOW

Ocurre cuando el contenido no cabe dentro del contenedor.

---

## 🔑 Overflow

- 🔹 visible
- 🔹 hidden
- 🔹 scroll
- 🔹 auto

### Ejemplo

```css
div {
  width: 200px;
  height: 100px;
  overflow: auto;
}
```

---

## 🔑 Text Overflow

```css
p {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

---

# 📍 POSITION

## 🔹 static

Valor por defecto.

---

## 🔹 relative

Se mueve respecto a su posición original.

---

## 🔹 absolute

Se posiciona respecto al primer ancestro con position distinto de static.

---

## 🔹 fixed

Se posiciona respecto al viewport.

---

## 🔹 sticky

Combinación entre relative y fixed.

---

# 📌 INSET

Shorthand para:

```css
top
right
bottom
left
```

---

## 🔑 Ejemplos

```css
inset: 0;
```

```css
inset: 10px;
```

```css
inset: 10px 20px;
```

```css
inset: 10px 20px 30px;
```

```css
inset: 10px 20px 30px 40px;
```

---

# 🏔️ Z-INDEX

Controla el orden en el eje Z.

Solo funciona con:

- relative
- absolute
- fixed
- sticky

---

## Ejemplo

```css
.caja1 {
  position: absolute;
  z-index: 1;
}

.caja2 {
  position: absolute;
  z-index: 2;
}
```

`.caja2` estará encima de `.caja1`.

---

# 📐 FLEXBOX

## 🔑 Propiedades del contenedor

- 🔹 display: flex
- 🔹 flex-direction
- 🔹 flex-wrap
- 🔹 justify-content
- 🔹 align-items
- 🔹 align-content
- 🔹 gap

---

## 🔑 Propiedades de los ítems

- 🔹 order
- 🔹 flex-grow
- 🔹 flex-shrink
- 🔹 flex-basis
- 🔹 flex
- 🔹 align-self

### Ejemplos

```css
flex: 1;
```

Equivale a:

```css
flex: 1 1 0;
```

```css
flex: 2;
```

Crece el doble.

```css
flex: 3;
```

Crece el triple.

---

# 🔄 DIRECCIÓN DE TEXTO Y FLEXBOX

## 🔑 direction: rtl

```css
.contenedor {
  display: flex;
  direction: rtl;
  justify-content: flex-start;
}
```

Ahora el inicio está a la derecha.

---

## 🔑 writing-mode: vertical-lr

```css
.contenedor {
  display: flex;
  writing-mode: vertical-lr;
  flex-direction: row;
}
```

La fila pasa a ser vertical.

---

# 🧩 GRID

CSS Grid Layout es un sistema bidimensional que organiza elementos en filas y columnas.

---

## 🔑 Activar Grid

```css
display: grid;
```

```css
display: inline-grid;
```

---

## 🔑 Propiedades del contenedor

### Columnas

```css
grid-template-columns: 100px 200px auto;
```

```css
grid-template-columns: repeat(3, 1fr);
```

---

### Filas

```css
grid-template-rows: 100px auto 50px;
```

---

### Otras propiedades

- 🔹 grid-template-areas
- 🔹 grid-auto-rows
- 🔹 grid-auto-columns
- 🔹 grid-auto-flow
- 🔹 row-gap
- 🔹 column-gap
- 🔹 gap
- 🔹 justify-items
- 🔹 align-items
- 🔹 place-items
- 🔹 justify-content
- 🔹 align-content
- 🔹 place-content

---

## 🔑 Propiedades de los ítems

### Grid Column

```css
grid-column: 1 / 3;
```

---

### Grid Row

```css
grid-row: 2 / 4;
```

---

### Otras

- 🔹 grid-area
- 🔹 justify-self
- 🔹 align-self
- 🔹 place-self

---

## 🔑 Funciones útiles

### fr

```css
grid-template-columns: 2fr 1fr 1fr;
```

Distribución:

- Columna 1 = 50%
- Columna 2 = 25%
- Columna 3 = 25%

---

### auto

Tamaño según contenido.

### minmax()

```css
minmax(min, max)
```

### repeat()

```css
repeat(n, valor)
```

---

### auto-fill

```css
grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
```

Llena con tantas columnas como sea posible.

---

### auto-fit

```css
grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
```

Las columnas vacías desaparecen y los ítems se expanden.

---

# 🎬 ANIMACIONES

Propiedades animables y transicionables:

https://udn.realityripple.com/docs/Web/CSS/CSS_animated_properties

Animations:

https://www.w3.org/tr/css-animations-1/

---

# 🔄 TRANSICIONES

Todo lo que puede pasar de un estado a otro y tiene puntos intermedios.

```text
0 ----> 1
deg
px
%
rem
em
rgb(255, 0, 0)
```

Transitions:

https://www.w3.org/tr/css-transitions-1/

---

# 📱 MEDIA QUERIES

## Tablet horizontal y laptop pequeña

```css
@media (max-width: 1024px) {
}
```

## Tablet vertical

```css
@media (max-width: 768px) {
}
```

## Celulares

```css
@media (max-width: 480px) {
}
```
