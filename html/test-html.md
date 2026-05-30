# 📘 Preguntas y Respuestas de HTML

## ️1️⃣ Diferencia entre elementos Inline y Block

- **Inline** → ocupa únicamente el espacio necesario según su contenido.
- **Block** → ocupa todo el ancho disponible de su contenedor, independientemente de su contenido.

---

## ️⃣ ¿Todas las etiquetas HTML tienen cierre?

No.

Existen etiquetas **self-closing** o **empty elements**, por ejemplo:

```html
<input />
<br />
<img />
<hr />
<link />
<meta />
```

---

## 3️⃣ Crear un enlace en HTML

```html
<a href="https://www.alkosto.com"> Ir a la tienda </a>
```

---

## 4️⃣ Etiquetas de encabezado

```html
<header>
  <h1>
    <h2>
      <h3>
        <h4>
          <h5>
            <h6></h6>
          </h5>
        </h4>
      </h3>
    </h2>
  </h1>
</header>
```

---

## 5️⃣ Partes de un elemento HTML

```html
<p title="soy un título">Soy un párrafo</p>
```

### Desglose

```text
<p title="soy un título">Soy un párrafo</p> → elemento

title="soy un título" → atributo

title → nombre del atributo

"soy un título" → valor del atributo

<p></p> → etiqueta

Soy un párrafo → contenido
```

---

## 6️⃣ Formas de mostrar el símbolo ©

### Entidad HTML

```html
&#169;
```

```html
&copy;
```

### Símbolo directo

```html
©
```

### Librerías de iconos

Usando:

```html
<span></span>
```

o

```html
<i></i>
```

con la clase correspondiente.

---

## 7️⃣ ¿Qué es una entidad HTML?

Una entidad HTML:

- Siempre comienza con `&`
- Siempre termina con `;`

Se utiliza para representar caracteres que:

- No suelen existir en el teclado.
- Tienen significado especial en HTML.

### Ejemplos

```html
&lt; &gt; &amp; &copy;
```

---

## 8️⃣ Tipos de listas en HTML

### Ordered List

```html
<ol></ol>
```

### Unordered List

```html
<ul></ul>
```

### Description List

```html
<dl></dl>
```

---

## 9️⃣ Diferencia entre id y class

### id

- Debe ser único dentro del documento.

### class

- Puede ser compartida por múltiples elementos.
- Permite agrupar elementos con estilos o comportamientos comunes.

---

## 🔟 Diferencia entre etiquetas visuales y semánticas

### Negrita

```html
<b></b>
```

- Solo estilo visual.

```html
<strong></strong>
```

- Importancia semántica.
- Generalmente se muestra en negrita.

### Cursiva

```html
<i></i>
```

- Solo estilo visual.

```html
<em></em>
```

- Énfasis semántico.
- Generalmente se muestra en cursiva.

---

## 1️⃣1️⃣ ¿Se puede cambiar el color de un texto?

Sí.

Utilizando CSS.

---

## 1️⃣2️⃣ ¿Qué significa alt?

**Alternative Text**.

Texto alternativo mostrado cuando una imagen no puede cargarse.

Ejemplo:

```html
<img src="logo.png" alt="Logo de la empresa" />
```

---

## 1️⃣3️⃣ Diferencias entre HTML y HTML5

### Layout semántico

```html
<header>
  <aside>
    <nav>
      <footer>
        <main>
          <section>
            <article></article>
          </section>
        </main>
      </footer>
    </nav>
  </aside>
</header>
```

### Multimedia

```html
<video>
  <track />
  <canvas> <svg></svg></canvas>
</video>
```

### Texto semántico

```html
<bdi> <wbr /></bdi>
```

### Anotaciones fonéticas

```html
<rt>
  <ruby> <rp></rp></ruby
></rt>
```

### Contenido interactivo

```html
<details>
  <summary>
    <mark> <dialog></dialog></mark>
  </summary>
</details>
```

### Formularios mejorados

```html
<datalist>
  <output>
    <progress>
      <meter></meter></progress
  ></output>
</datalist>
```

### Otras etiquetas

```html
<time> <figure></figure></time>
```

### APIs incorporadas

- Geolocation
- Drag & Drop
- IndexedDB
- WebSockets
- Offline Applications

### Web Storage

```js
localStorage;
sessionStorage;
```

Permiten almacenar información en el navegador sin utilizar cookies.

---

## 1️⃣4️⃣ ¿Es posible insertar otra página dentro de una página web?

Sí.

Utilizando contenido embebido mediante:

```html
<iframe></iframe>
```

---

## 1️⃣5️⃣ ¿Qué es una etiqueta deprecada?

Es una etiqueta que fue útil en versiones anteriores de HTML, pero que actualmente está obsoleta y no se recomienda utilizar.

---

## 1️⃣6️⃣ Metadatos importantes

```html
<meta name="viewport" />
<meta name="description" />
<meta name="keywords" />
<meta name="author" />
<meta charset="UTF-8" />
```

---

## 1️⃣7️⃣ Diferencia entre div y span

### div

- Elemento de bloque.
- Se utiliza para agrupar y organizar contenido.

### span

- Elemento inline.
- Se utiliza para agrupar pequeñas partes de contenido.

---

## 1️⃣8️⃣ Diferencia entre Canvas y SVG

### Canvas

- Basado en píxeles.
- Requiere JavaScript para dibujar.
- Los objetos no pueden manipularse individualmente después de dibujarse.
- Ideal para:
  - Juegos.
  - Animaciones.
  - Gráficos dinámicos.

### SVG

- Basado en vectores.
- Se escribe en HTML/XML.
- Los elementos forman parte del DOM.
- Puede modificarse con CSS y JavaScript.
- Escala sin perder calidad.

Ideal para:

- Iconos.
- Logotipos.
- Diagramas.
- Gráficos estáticos.

---

## 1️⃣9️⃣ ¿Qué es un Image Map?

Permite crear múltiples zonas clicables dentro de una imagen.

Se construye utilizando:

```html
<map> <area /></map>
```

y se asocia mediante:

```html
<img usemap="" />
```

---

## 2️⃣0️⃣ ¿Para qué sirve Drag and Drop?

Permite arrastrar y soltar información o elementos dentro de una aplicación web.

---

## 2️⃣1️⃣ Formas de mostrar gráficos e imágenes

### Imágenes comunes

```html
<img />
```

Formatos:

- PNG
- JPG
- GIF
- WebP

### SVG

Gráficos vectoriales escalables.

### Canvas

Gráficos dinámicos basados en píxeles.

### JavaScript + Canvas/SVG

Permiten crear:

- Gráficos de barras.
- Gráficos de líneas.
- Gráficos circulares.
- Gráficos interactivos.

---

## 2️⃣2️⃣ Tipos de input modernos

```html
email url tel number range date time datetime-local month week color search
```

---

## 2️⃣3️⃣ Etiquetas multimedia

```html
<video>
  <audio>
    <track />
    <canvas> <svg></svg></canvas>
  </audio>
</video>
```

---

## 2️⃣4️⃣ Tecnologías de almacenamiento en el navegador

```js
localStorage
sessionStorage
IndexedDB
Service Workers
```

---

## 2️⃣5️⃣ Formatos de imagen comunes

```text
PNG
JPG
GIF
WebP
SVG
```

---

## 2️⃣6️⃣ Extensión de archivos HTML

```text
.html
```

---

## 2️⃣7️⃣

Pendiente.

---

## 2️⃣8️⃣ ¿Qué es la semántica en HTML?

La semántica consiste en utilizar etiquetas que describan el significado del contenido en lugar de únicamente su apariencia.

### Buenas prácticas

- Buena estructura.
- Buena indentación.
- Uso correcto de etiquetas semánticas.

---

## 2️⃣9️⃣ ¿Qué es la accesibilidad?

La accesibilidad consiste en diseñar páginas web que puedan ser utilizadas por todas las personas, incluyendo usuarios con discapacidades:

- Visuales.
- Auditivas.
- Motoras.
- Cognitivas.

### Ejemplos

#### Texto alternativo

```html
alt=""
```

#### Etiquetas semánticas

```html
<header>
  <nav>
    <main></main>
  </nav>
</header>
```

#### ARIA

```html
role aria-label aria-hidden
```

#### Otras prácticas

- Contraste adecuado.
- Subtítulos con `<track>`.
- Navegación por teclado.
- Orden correcto del DOM.

---

## 3️⃣0️⃣ Diferencia entre HTML y XML

### HTML

Se utiliza para visualizar contenido en la web.

### XML

Se utiliza para almacenar y transportar datos.

---

## 3️⃣1️⃣ Buenas prácticas generales

- Buena indentación.
- Uso de semántica.
- Accesibilidad.
- Metadatos adecuados.
