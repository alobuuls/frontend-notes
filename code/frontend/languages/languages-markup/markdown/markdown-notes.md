# 📘 MARKDOWN — GUÍA RÁPIDA PARA README PROFESIONALES

> [!NOTE]
> Markdown es un lenguaje de marcado ligero.

> [!IMPORTANT]
> Permite dar formato a texto usando caracteres simples.

---

## 🎯 ¿PARA QUÉ SE USA?

✔ README.md

✔ Documentación

✔ Wikis

✔ GitHub

✔ GitLab

✔ Notion

✔ Blogs

> [!TIP]
> Markdown se ha convertido en el estándar de documentación para proyectos de software y repositorios Git.

---

# 📘 🟢 TÍTULOS

## 💡 Sintaxis

```md
# Título H1
## Título H2
### Título H3
#### Título H4
```

---

## 💡 Ejemplo

```md
# Mi Proyecto
## Instalación
### Configuración
```

### Resultado

# Mi Proyecto

## Instalación

### Configuración

> [!IMPORTANT]
> Solo debería existir un único `H1 (#)` principal por documento.

---

# 📘 🔵 TEXTO

## ✔ Negrita

### Sintaxis

```md
**Texto**
```

### Resultado

**Texto**

---

## ✔ Cursiva

### Sintaxis

```md
*Texto*
```

### Resultado

*Texto*

---

## ✔ Negrita + Cursiva

### Sintaxis

```md
***Texto***
```

### Resultado

***Texto***

---

## ✔ Tachado

### Sintaxis

```md
~~Texto~~
```

### Resultado

~~Texto~~

> [!TIP]
> Usa negritas para conceptos importantes y cursivas para enfatizar términos específicos.

---

# 📘 🟣 LISTAS

## ✔ Lista normal

### Sintaxis

```md
- Angular
- TypeScript
- RxJS
```

### Resultado

* Angular
* TypeScript
* RxJS

---

## ✔ Lista numerada

### Sintaxis

```md
1. Instalar
2. Configurar
3. Ejecutar
```

### Resultado

1. Instalar
2. Configurar
3. Ejecutar

---

## ✔ Sublistas

### Sintaxis

```md
- Frontend
  - Angular
  - RxJS
```

### Resultado

* Frontend

  * Angular
  * RxJS

> [!NOTE]
> Las listas son ideales para pasos, características, tecnologías y documentación técnica.

---

# 📘 🟡 CÓDIGO

## ✔ Código inline

### Sintaxis

```md
`npm install`
```

### Resultado

`npm install`

---

## ✔ Bloque de código

### Sintaxis

````md
```js
console.log('Hola');
```
````

---

## 💡 Ejemplo

```ts
const name = 'Alo';
```

> [!IMPORTANT]
> Especificar el lenguaje (`js`, `ts`, `html`, `css`, `json`, etc.) activa el resaltado de sintaxis.

> [!TIP]
> Siempre indica el lenguaje del bloque de código para mejorar la legibilidad y la experiencia del lector.

---

## 🎯 RESUMEN RÁPIDO

| Elemento         | Sintaxis        |
| ---------------- | --------------- |
| H1               | `# Título`      |
| H2               | `## Título`     |
| H3               | `### Título`    |
| Negrita          | `**Texto**`     |
| Cursiva          | `*Texto*`       |
| Tachado          | `~~Texto~~`     |
| Lista            | `- Elemento`    |
| Lista numerada   | `1. Elemento`   |
| Código inline    | `` `codigo` ``  |
| Bloque de código | ` `lenguaje ``` |

---

> [!TIP]
> Un README profesional suele combinar títulos, listas, tablas, bloques de código y callouts (`[!NOTE]`, `[!TIP]`, `[!IMPORTANT]`) para mejorar la experiencia de lectura.


# 📘 🟠 LINKS

## ✔ Link

### Sintaxis

```md id="x71k3p"
[Google](https://google.com)
```

### Resultado

[Google](https://google.com)

---

## ✔ Link de documentación

### Sintaxis

```md id="c6j1mz"
[Angular Docs](https://angular.io)
```

### Resultado

[Angular Docs](https://angular.io)

> [!TIP]
> Utiliza textos descriptivos en los enlaces para que el lector sepa exactamente a dónde será dirigido.

---

# 📘 🔴 IMÁGENES

## ✔ Imagen

### Sintaxis

```md id="h5p2dw"
![Texto](imagen.png)
```

---

## 💡 Ejemplo

```md id="7g4yka"
![Logo](./assets/logo.png)
```

### Resultado

```txt id="cbnmxm"
[Imagen renderizada]
```

> [!IMPORTANT]
> Las imágenes ayudan a mostrar interfaces, diagramas, arquitecturas y resultados visuales dentro del README.

> [!TIP]
> Guarda imágenes en una carpeta `assets/` o `images/` para mantener organizado el proyecto.

---

# 📘 ⚫ CITAS

## ✔ Quote

### Sintaxis

```md id="w3yr7r"
> Este proyecto usa Angular
```

### Resultado

> Este proyecto usa Angular

> [!NOTE]
> Las citas son útiles para resaltar observaciones, notas o fragmentos importantes de documentación.

---

# 📘 ⚪ LÍNEAS DIVISORIAS

## ✔ Separador

### Sintaxis

```md id="rrp7q4"
---
```

### Resultado

---

> [!TIP]
> Los separadores mejoran la organización visual de documentos largos.

---

# 📘 🟤 CHECKLISTS

## ✔ Tareas

### Sintaxis

```md id="m84l6j"
- [x] Angular
- [x] RxJS
- [ ] Testing
```

### Resultado

* [x] Angular
* [x] RxJS
* [ ] Testing

> [!IMPORTANT]
> Las checklists son ideales para Roadmaps, TODOs, seguimiento de tareas y planificación de proyectos.

---

# 📘 🟢 TABLAS

## 💡 Sintaxis

```md id="5t4m0z"
| Nombre | Edad |
|---------|------|
| Alo     | 25   |
| Juan    | 30   |
```

---

## 💡 Resultado

| Nombre | Edad |
| ------ | ---- |
| Alo    | 25   |
| Juan   | 30   |

> [!TIP]
> Las tablas son perfectas para comparar tecnologías, versiones, configuraciones o características.

> [!IMPORTANT]
> GitHub renderiza tablas de forma nativa, por lo que son ampliamente utilizadas en documentación profesional.

---

# 📘 🔵 ESCAPAR CARACTERES

## ✔ Mostrar símbolos especiales

### Sintaxis

```md id="5v8b2y"
\*
\#
\`
```

### Resultado

```txt id="2m0ndz"
*
#
`
```

> [!NOTE]
> Escapar caracteres evita que Markdown los interprete como formato especial.

---

# 📘 🟣 EMOJIS

## 🧠 GitHub soporta emojis

### 💡 Ejemplos

```txt id="g3aw17"
🚀
📘
⚡
🔥
🛠️
🎯
💡
```

### Resultado

🚀 📘 ⚡ 🔥 🛠️ 🎯 💡

> [!TIP]
> Los emojis ayudan a organizar visualmente secciones y hacen la documentación más agradable de leer.

---

## 🎯 RESUMEN RÁPIDO

| Elemento  | Sintaxis         |         |         |   |
| --------- | ---------------- | ------- | ------- | - |
| Link      | `[Texto](url)`   |         |         |   |
| Imagen    | `![Texto](ruta)` |         |         |   |
| Cita      | `> Texto`        |         |         |   |
| Separador | `---`            |         |         |   |
| Checklist | `- [x] Tarea`    |         |         |   |
| Tabla     | `                | Columna | Columna | ` |
| Escape    | `* # ``          |         |         |   |
| Emoji     | `🚀 📘 ⚡ 🔥`     |         |         |   |

---

> [!IMPORTANT]
> Un README profesional normalmente incluye:
>
> ✔ Títulos
>
> ✔ Texto formateado
>
> ✔ Listas
>
> ✔ Código
>
> ✔ Links
>
> ✔ Imágenes
>
> ✔ Tablas
>
> ✔ Checklists
>
> ✔ Callouts (`[!NOTE]`, `[!TIP]`, `[!WARNING]`)
>
> ✔ Emojis para mejorar la experiencia visual

---

## 🚀 COMPONENTES MÁS USADOS EN README PROFESIONALES

* 📘 Títulos jerárquicos
* 💡 Ejemplos de código
* 🛠️ Instrucciones de instalación
* 🚀 Comandos de ejecución
* 📋 Tablas comparativas
* ✅ Checklists
* 🔗 Links de documentación
* 🖼️ Capturas de pantalla
* ⚠️ Advertencias importantes
* ✨ Tips y buenas prácticas

> [!TIP]
> La diferencia entre un README básico y uno profesional suele estar en la claridad visual y la organización de la información.


# 📘 🟡 BADGES (MUY USADOS)

> [!NOTE]
> Son etiquetas visuales.

---

## 💡 Ejemplos

✔ Angular

✔ TypeScript

✔ License

✔ Version

---

👉 Se obtienen normalmente desde:

```txt id="1o7v2x"
shields.io
```

---

### 💡 Ejemplo

```md id="n3gk5m"
![Angular](https://img.shields.io/badge/Angular-12-red)
```

### Resultado

![Angular](https://img.shields.io/badge/Angular-12-red)

> [!TIP]
> Los badges permiten mostrar tecnologías, estado del proyecto, cobertura de pruebas, licencia y versión de forma visual.

> [!IMPORTANT]
> Casi todos los README profesionales utilizan badges en la parte superior del documento.

---

# 📘 🟠 ANCLAS (NAVEGACIÓN)

## ✔ Tabla de contenido

### Sintaxis

```md id="8f2z0q"
- [Instalación](#instalación)
- [Uso](#uso)
```

---

👉 Permite navegar dentro del README.

---

### 💡 Ejemplo de uso

```md id="s4j9cm"
# Mi Proyecto

## Instalación

## Uso
```

Al hacer clic en los enlaces, GitHub desplazará automáticamente al encabezado correspondiente.

> [!TIP]
> Las anclas son especialmente útiles en READMEs extensos con muchas secciones.

---

# 📘 🔴 HTML DENTRO DE MARKDOWN

> [!NOTE]
> GitHub permite HTML.

---

## 💡 Centrar contenido

```html id="z9f7ma"
<div align="center">

# Mi Proyecto

</div>
```

---

## 💡 Imagen centrada

```html id="h8n2qw"
<p align="center">
  <img src="logo.png">
</p>
```

> [!IMPORTANT]
> HTML permite realizar personalizaciones visuales que Markdown por sí solo no puede hacer.

> [!TIP]
> Las etiquetas HTML más utilizadas en README son: `div`, `p`, `img`, `br` y `details`.

---

# 📘 ⚫ READMEs PROFESIONALES

## 🧠 Secciones recomendadas

✔ Título

✔ Descripción

✔ Demo

✔ Tecnologías

✔ Instalación

✔ Uso

✔ Capturas

✔ API

✔ Autor

✔ Licencia

---

> [!IMPORTANT]
> Un README bien estructurado permite que cualquier desarrollador entienda rápidamente el proyecto.

---

# 📘 ⚪ BLOQUES DESTACADOS

## 💡 Ejemplo

```md id="6w4d9e"
> ⚠️ Importante:
> Configurar variables de entorno
```

### Resultado

> ⚠️ Importante:
> Configurar variables de entorno

---

## 💡 Ejemplo

```md id="k3y6pf"
> 🚀 Proyecto desplegado en producción
```

### Resultado

> 🚀 Proyecto desplegado en producción

---

### ✨ Alternativa Moderna (GitHub Alerts)

```md id="p4c8xz"
> [!IMPORTANT]
> Configurar variables de entorno.

> [!WARNING]
> No subir archivos .env al repositorio.

> [!TIP]
> Utiliza variables de entorno para datos sensibles.
```

> [!TIP]
> Actualmente los GitHub Alerts (`[!NOTE]`, `[!TIP]`, `[!IMPORTANT]`, etc.) suelen verse mejor que los bloques tradicionales.

---

# 📘 🟤 ESTRUCTURA RECOMENDADA

```md id="v5h2kw"
# Proyecto

Descripción

## Tecnologías

## Instalación

## Uso

## Screenshots

## Autor
```

---

> [!IMPORTANT]
> Mantener una estructura consistente facilita la navegación y mejora la experiencia del lector.

---

# 📘 🟢 TRUCOS BONITOS PARA README

✔ Emojis

✔ Badges

✔ GIFs

✔ Screenshots

✔ Tablas

✔ Bloques de código

✔ Tabla de contenido

✔ Logo centrado

---

### ✨ Tip

Combinar varios de estos elementos puede transformar un README simple en una presentación profesional del proyecto.

---

# 🚀 EJEMPLO DE README PROFESIONAL

<div align="center">

# 🚀 Mi Proyecto

![Angular](https://img.shields.io/badge/Angular-20-red)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

Proyecto de ejemplo desarrollado con Angular.

</div>

---

## 📋 Tabla de Contenido

- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Uso](#uso)

---

## 🛠️ Tecnologías

- Angular
- TypeScript
- RxJS

---

## 📦 Instalación

```bash
npm install
```

```bash
npm start
```

---

## 📸 Screenshots

![App](./assets/app.png)

---

## 👨‍💻 Autor

Alo

---

## 🎯 RESUMEN RÁPIDO

| Elemento           | Uso                               |
| ------------------ | --------------------------------- |
| Badges             | Mostrar tecnologías e información |
| Anclas             | Navegación interna                |
| HTML               | Personalización visual            |
| Screenshots        | Mostrar resultados                |
| GIFs               | Mostrar funcionalidades           |
| Tabla de contenido | Navegación rápida                 |
| Logo centrado      | Mejor presentación                |
| GitHub Alerts      | Destacar información importante   |

---

> [!IMPORTANT]
> Los README más profesionales suelen incluir:
>
> 🚀 Logo centrado
>
> 🚀 Badges
>
> 🚀 Tabla de contenido
>
> 🚀 Capturas de pantalla
>
> 🚀 Bloques de código
>
> 🚀 GitHub Alerts
>
> 🚀 Instalación y uso
>
> 🚀 Tecnologías utilizadas
>
> 🚀 Información del autor y licencia

---

## 🏆 RESUMEN FINAL DEL TEMA

> [!NOTE]
> Markdown permite crear documentación clara, portable y fácil de mantener.

> [!TIP]
> La combinación de títulos, badges, tablas, imágenes, alertas y bloques de código es la base de casi todos los README modernos en GitHub.

> [!IMPORTANT]
> Un README profesional no solo explica el proyecto; también mejora su presentación y facilita que otros desarrolladores lo entiendan y utilicen.

# 📘 🔵 TAGS MÁS IMPORTANTES

## 📋 Referencia Rápida

| Tag            | Uso               |   |        |
| -------------- | ----------------- | - | ------ |
| `#`            | Títulos           |   |        |
| `**`           | Negrita           |   |        |
| `*`            | Cursiva           |   |        |
| `-`            | Listas            |   |        |
| `[ ]`          | Checklist         |   |        |
| `` ` ``        | Código inline     |   |        |
| ` ``` `        | Bloques de código |   |        |
| `[texto](url)` | Links             |   |        |
| `![]()`        | Imágenes          |   |        |
| `>`            | Citas             |   |        |
| `              |                   | ` | Tablas |
| `---`          | Separadores       |   |        |

---

## 💡 Ejemplos Rápidos

### ✔ Título

```md id="r8v3ka"
# Mi Proyecto
```

### ✔ Negrita

```md id="q1t5xy"
**Texto**
```

### ✔ Cursiva

```md id="b4j8wp"
*Texto*
```

### ✔ Lista

```md id="m7n2df"
- Angular
- TypeScript
- RxJS
```

### ✔ Checklist

```md id="h5k9sz"
- [x] Angular
- [ ] Testing
```

### ✔ Código Inline

```md id="x6p3rm"
`npm install`
```

### ✔ Bloque de Código

````md id="y2w7lt"
```ts
const name = 'Alo';
```
````

### ✔ Link

```md id="u9c4gh"
[Google](https://google.com)
```

### ✔ Imagen

```md id="j8m6vk"
![Logo](./assets/logo.png)
```

### ✔ Cita

```md id="n4r1pq"
> Este proyecto usa Angular
```

### ✔ Tabla

```md id="f2z7xd"
| Nombre | Edad |
|---------|------|
| Alo | 25 |
```

### ✔ Separador

```md id="c7y5bn"
---
```

---

> [!TIP]
> Memorizar estos tags cubre aproximadamente el 90% del Markdown utilizado en documentación profesional.

---

# ⚠️ COSAS IMPORTANTES

> [!IMPORTANT]
> Menos texto, más claridad.

> [!IMPORTANT]
> Usa títulos bien organizados.

> [!IMPORTANT]
> Usa capturas reales.

> [!IMPORTANT]
> Agrega instalación y uso.

> [!IMPORTANT]
> Un README bonito vende mejor tu proyecto.

---

> [!TIP]
> La mayoría de visitantes decide en pocos segundos si continuará leyendo tu proyecto. Una buena presentación marca la diferencia.

---

# ✨ RESUMEN

> [!NOTE]
> Markdown = documentación elegante y simple.

---

## 🚀 Elementos Principales

👉 Títulos

👉 Listas

👉 Código

👉 Links

👉 Imágenes

👉 Tablas

👉 Badges

👉 Emojis

---

## 🎯 Lo Que Debes Dominar

✔ Estructura de títulos

✔ Listas y checklists

✔ Bloques de código

✔ Tablas

✔ Imágenes

✔ Enlaces

✔ GitHub Alerts

✔ Badges

✔ Organización visual

---

> [!IMPORTANT]
> Markdown es una habilidad obligatoria para cualquier desarrollador 🚀

---

## 🏆 RESUMEN FINAL DE MARKDOWN

| Categoría     | Elementos                          |
| ------------- | ---------------------------------- |
| Estructura    | Títulos, separadores               |
| Organización  | Listas, checklists                 |
| Documentación | Código, tablas                     |
| Navegación    | Links, anclas                      |
| Visual        | Imágenes, emojis, badges           |
| Profesional   | GitHub Alerts, tablas de contenido |

---

> [!TIP]
> Un README profesional suele seguir esta fórmula:
>
> 🚀 Título atractivo
>
> 📘 Descripción clara
>
> 🛠️ Tecnologías utilizadas
>
> 📦 Instalación
>
> 💻 Uso
>
> 📸 Screenshots
>
> ⚠️ Notas importantes
>
> 👨‍💻 Autor
>
> 📄 Licencia

---

> [!NOTE]
> Aprender Markdown es una de las inversiones más rentables para mejorar documentación, portafolios, repositorios y proyectos profesionales.
