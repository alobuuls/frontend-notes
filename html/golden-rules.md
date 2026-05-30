# 📋 Buenas Prácticas para Nombrar Archivos y Escribir HTML

## 1️⃣ Nombres de archivos en minúsculas

Tanto el nombre como la extensión deben escribirse completamente en minúsculas.

### ✅ Correcto

```text
index.html
styles.css
main.js
```

### ❌ Incorrecto

```text
Index.html
STYLES.css
Main.JS
```

---

## 2️⃣ No usar espacios en los nombres de archivos

Los espacios pueden generar problemas de compatibilidad y URLs poco amigables.

### ✅ Correcto

```text
mi-archivo.html
landing-page.html
```

### ❌ Incorrecto

```text
mi archivo.html
landing page.html
```

---

## 3️⃣ Separar palabras con guiones (-)

Cuando el nombre contenga varias palabras, utilizar guiones medios.

### ✅ Correcto

```text
mi-archivo-importante.html
landing-page.html
shopping-cart.js
```

### ❌ Incorrecto

```text
mi_archivo_importante.html
miArchivoImportante.html
mi archivo importante.html
```

---

## 4️⃣ Mantener nombres cortos y descriptivos

Los nombres deben ser fáciles de leer y recordar.

### ✅ Correcto

```text
contact.html
about.html
products.js
```

### ❌ Incorrecto

```text
pagina-para-mostrar-todos-los-productos-del-sitio-web.html
```

---

## 5️⃣ Escribir las etiquetas HTML en minúsculas

Aunque HTML no distingue mayúsculas y minúsculas, la convención es utilizar minúsculas.

### ✅ Correcto

```html
<img />
<header>
  <nav></nav>
</header>
```

### ❌ Incorrecto

```html
<img />
<header>
  <nav></nav>
</header>
```

---

## 6️⃣ Escribir correctamente los atributos HTML

Los atributos deben escribirse sin espacios innecesarios:

- No dejar espacios después de abrir la etiqueta.
- No dejar espacios antes de cerrar la etiqueta.
- No dejar espacios alrededor del signo `=`.
- No dejar espacios dentro de las comillas.

### ✅ Correcto

```html
<img src="images/blue.jpg" />
```

### ❌ Incorrecto

```html
< img src= "images/blue.jpg">

<img src="images/blue.jpg" />

<img src="images/blue.jpg" />

<img src=" images/blue.jpg" />

<img src="images/blue.jpg " />

<img src="images/blue.jpg" />
```

---

## 7️⃣ Utilizar comillas dobles para los atributos

Mantener una convención consistente utilizando comillas dobles.

### ✅ Correcto

```html
<input type="text" /> <a href="index.html"></a>
```

### ❌ Incorrecto

```html
<input type="text" /> <a href="index.html"></a>
```

---

## 8️⃣ Mantener una indentación consistente

Utilizar la misma cantidad de espacios en todo el documento.

### ✅ Correcto

```html
<ul>
  <li>Inicio</li>
  <li>Contacto</li>
</ul>
```

### ❌ Incorrecto

```html
<ul>
  <li>Inicio</li>
  <li>Contacto</li>
</ul>
```

---

## 9️⃣ Utilizar nombres descriptivos

El nombre del archivo debe indicar claramente su propósito.

### ✅ Correcto

```text
contact.html
about.html
products.js
```

### ❌ Incorrecto

```text
archivo1.html
nuevo.html
prueba.js
```

---

## 🔟 Mantener consistencia en todo el proyecto

Una vez definida una convención, debe aplicarse en todos los archivos y carpetas del proyecto.

### Ejemplo recomendado

```text
mi-proyecto/
│
├── index.html
├── styles.css
├── main.js
│
├── images/
│   ├── logo.png
│   └── banner.jpg
│
└── pages/
    ├── contact.html
    └── about.html
```

---

# 📌 Resumen Rápido

```text
✅ minúsculas
✅ sin espacios
✅ usar guiones (-)
✅ nombres descriptivos
✅ etiquetas en minúsculas
✅ atributos sin espacios innecesarios
✅ comillas dobles
✅ buena indentación
✅ consistencia en todo el proyecto
```
