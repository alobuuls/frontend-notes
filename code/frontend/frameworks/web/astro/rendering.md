# ⚡ RENDERING & ISLANDS

En Astro, **rendering, hydration e Islands Architecture** están directamente relacionados porque explican una de las ideas más importantes del framework: **enviar HTML al navegador con la menor cantidad posible de JavaScript, y agregar interactividad solo donde realmente se necesita**.

## 📑 ÍNDICE — RENDERING & ISLANDS

1. [🏝️ Islands Architecture](#1️⃣-🏝️-islands-architecture)
2. [⚡ Zero JavaScript by Default](#2️⃣-⚡-zero-javascript-by-default)
3. [💧 Hydration](#3️⃣-💧-hydration)
4. [🎯 Client Directives](#4️⃣-🎯-client-directives)
   - [`client:load`](#-clientload)
   - [`client:idle`](#-clientidle)
   - [`client:visible`](#-clientvisible)
   - [`client:media`](#-clientmedia)
5. [🖥️ Server vs Client](#5️⃣-🖥️-server-vs-client)
6. [🌐 SSR](#6️⃣-🌐-ssr)
7. [📦 SSG](#7️⃣-📦-ssg)
8. [🔄 Rendering Strategies](#8️⃣-🔄-rendering-strategies)
   - [📦 SSG](#-ssg)
   - [🌐 SSR](#-ssr)
   - [🏝️ Islands](#-islands)
9. [🧩 Interactive Islands](#9️⃣-🧩-interactive-islands)
10. [🏗️ Arquitectura Completa](#-arquitectura-completa)
11. [🧠 Modelo Mental](#-modelo-mental)

---

## 1️⃣ 🏝️ ISLANDS ARCHITECTURE

### 🧠 ¿Qué es?

La **Islands Architecture** es el modelo que utiliza Astro para construir páginas principalmente como **HTML estático**, agregando JavaScript únicamente a las partes interactivas.

Esas partes interactivas se conocen como **Islands (islas)**.

Por ejemplo, una página podría tener:

```text
┌──────────────────────────────┐
│        Header                │
│        HTML                  │
├──────────────────────────────┤
│                              │
│   Texto de la página         │
│   HTML                       │
│                              │
├──────────────────────────────┤
│   🏝️ Counter                │
│   JavaScript                 │
├──────────────────────────────┤
│                              │
│   Contenido                  │
│   HTML                       │
│                              │
├──────────────────────────────┤
│   🏝️ Formulario             │
│   JavaScript                 │
└──────────────────────────────┘
```

👉 Solo el `Counter` y el formulario necesitan JavaScript.

### 🎯 Idea principal

> **HTML por defecto + JavaScript solo donde hace falta.**

Esto permite reducir la cantidad de JavaScript enviado al navegador.

---

# 2️⃣ ⚡ ZERO JAVASCRIPT BY DEFAULT

Una de las características principales de Astro es:

> **Los componentes Astro no envían JavaScript al navegador por defecto.**

Por ejemplo:

```astro
---
const name = 'Alo';
---

<h1>Hola {name}</h1>
```

Astro genera HTML:

```html
<h1>Hola Alo</h1>
```

No necesitas JavaScript en el navegador para mostrar ese contenido.

### 🧠 ¿Por qué es importante?

Porque muchas páginas no necesitan JavaScript para todo.

Un sitio puede contener:

* texto
* títulos
* imágenes
* artículos
* documentación
* blogs
* información estática

Todo eso puede enviarse como HTML.

### ⚠️ Importante

**Zero JavaScript by default no significa que Astro no pueda utilizar JavaScript.**

Significa que:

```text
JavaScript
      ↓
NO se envía automáticamente
```

Solo se envía cuando una parte de la aplicación necesita interactividad.

---

# 3️⃣ 💧 HYDRATION

### 🧠 ¿Qué es Hydration?

**Hydration (hidratación)** es el proceso mediante el cual JavaScript toma un HTML que ya existe en el navegador y lo convierte en un componente **interactivo**.

Por ejemplo:

```text
Servidor
   ↓
HTML
   ↓
Navegador
   ↓
JavaScript
   ↓
Componente interactivo
```

Imagina un botón:

```html
<button>Contador: 0</button>
```

El HTML puede aparecer inmediatamente.

Pero para que el botón pueda ejecutar JavaScript cuando el usuario haga clic, necesita ser hidratado.

---

### 🧩 Sin hydration

```text
HTML
 ↓
Se muestra
 ↓
No tiene comportamiento interactivo
```

### ⚡ Con hydration

```text
HTML
 ↓
Se muestra
 ↓
JavaScript se carga
 ↓
Componente se vuelve interactivo
```

### 🎯 Idea clave

> **Hydration conecta el HTML generado previamente con el JavaScript necesario para hacerlo interactivo.**

---

# 4️⃣ 🎯 CLIENT DIRECTIVES

Las **Client Directives** indican **cuándo Astro debe cargar e hidratar un componente en el navegador**.

Ejemplo:

```astro
<Counter client:load />
```

Aquí:

```text
Counter
   ↓
client:load
   ↓
Cargar inmediatamente
   ↓
Hydration
   ↓
Interactivo
```

Astro ofrece diferentes estrategias.

---

## 🔹 `client:load`

```astro
<Counter client:load />
```

👉 Carga e hidrata el componente **inmediatamente cuando la página carga**.

### Útil para:

* elementos importantes
* componentes que deben estar disponibles inmediatamente
* interacciones principales

---

## 🔹 `client:idle`

```astro
<Counter client:idle />
```

👉 Espera hasta que el navegador esté **idle (libre)** antes de hidratar el componente.

```text
Página carga
      ↓
Contenido principal
      ↓
Navegador queda libre
      ↓
Hydration
```

### Útil para:

Componentes interactivos que **no son críticos inmediatamente**.

---

## 🔹 `client:visible`

```astro
<Counter client:visible />
```

👉 El componente se hidrata cuando **entra en el viewport**.

Por ejemplo:

```text
Página
│
│
│
├── contenido
│
├── contenido
│
└── 🏝️ Counter
        ↑
    todavía no visible
```

Cuando el usuario hace scroll:

```text
🧑 Scroll
   ↓
Counter visible
   ↓
Hydration
```

### Útil para:

* componentes debajo del fold
* carruseles
* comentarios
* elementos que aparecen más abajo

---

## 🔹 `client:media`

```astro
<Counter client:media="(max-width: 768px)" />
```

👉 Solo hidrata el componente cuando se cumple una **media query**.

En este caso:

```text
(max-width: 768px)
        ↓
¿Pantalla ≤ 768px?
        ↓
      Sí
        ↓
Hydration
```

### Útil para:

Crear comportamientos diferentes dependiendo del tamaño de pantalla.

---

## 📊 RESUMEN DE CLIENT DIRECTIVES

| Directive        | ¿Cuándo hidrata?                 | Uso típico                  |
| ---------------- | -------------------------------- | --------------------------- |
| `client:load`    | Inmediatamente                   | Componentes críticos        |
| `client:idle`    | Cuando el navegador está libre   | Componentes secundarios     |
| `client:visible` | Cuando entra en pantalla         | Componentes debajo del fold |
| `client:media`   | Cuando se cumple una media query | Comportamiento responsive   |

> 🧠 **Regla mental:** las Client Directives no indican *qué* hace el componente, sino **cuándo debe convertirse en interactivo en el navegador**.

---

# 5️⃣ 🖥️ SERVER VS CLIENT

Astro separa claramente el trabajo entre **servidor** y **navegador**.

### 🖥️ SERVER

Puede encargarse de:

* obtener datos
* generar HTML
* procesar componentes
* acceder a recursos del servidor
* preparar el contenido

### 🌐 CLIENT

Se encarga principalmente de:

* interacción del usuario
* eventos
* JavaScript
* componentes interactivos
* APIs del navegador

La idea general es:

```text
          SERVER
             │
             ▼
        Genera HTML
             │
             ▼
          CLIENT
             │
             ▼
       Muestra HTML
             │
             ▼
    ¿Necesita interacción?
          /       \
        NO         SÍ
        │           │
        ▼           ▼
      HTML      Hydration
                    │
                    ▼
             🏝️ Island
```

---

# 6️⃣ 🌐 SSR

**SSR = Server-Side Rendering**

Significa que el HTML de una página se genera **en el servidor cuando se solicita**.

```text
Usuario
   ↓
Solicita página
   ↓
Servidor
   ↓
Genera HTML
   ↓
Navegador
```

### 🧠 Ejemplo conceptual

```text
GET /products
      ↓
Servidor obtiene productos
      ↓
Genera HTML
      ↓
Envía HTML al navegador
```

### ✅ Ventajas

* contenido dinámico
* información actualizada
* buen SEO
* menor necesidad de generar todo durante el build

### ⚠️ Desventaja

El servidor debe procesar las solicitudes.

---

# 7️⃣ 📦 SSG

**SSG = Static Site Generation**

Significa que las páginas se generan **durante el proceso de build**.

```text
Código
  ↓
Build
  ↓
HTML
  ↓
Servidor estático / CDN
  ↓
Usuario
```

Por ejemplo:

```text
npm run build
      ↓
/about/index.html
/blog/index.html
/contact/index.html
```

Las páginas ya están generadas.

### ✅ Ventajas

* muy rápido
* fácil de distribuir
* excelente para CDN
* no necesita generar cada página en cada request

### ⚠️ Desventaja

El contenido generado durante el build no se actualiza automáticamente en cada petición.

Si cambia el contenido, normalmente necesitas otro proceso de generación/revalidación según la estrategia utilizada.

---

# 8️⃣ 🔄 RENDERING STRATEGIES

Astro permite utilizar diferentes estrategias dependiendo del tipo de contenido.

### 📦 SSG

```text
Build
 ↓
HTML estático
 ↓
Usuario
```

Ideal para:

* blogs
* documentación
* landing pages
* sitios principalmente estáticos

---

### 🌐 SSR

```text
Request
 ↓
Servidor
 ↓
HTML
 ↓
Usuario
```

Ideal para:

* contenido dinámico
* información personalizada
* datos que deben obtenerse en cada request

---

### 🏝️ Islands

También puedes tener una página principalmente estática y agregar componentes interactivos:

```text
HTML
HTML
HTML
🏝️ JavaScript
HTML
HTML
🏝️ JavaScript
```

Esto permite evitar convertir toda la página en una aplicación JavaScript.

---

# 9️⃣ 🧩 INTERACTIVE ISLANDS

Una **Interactive Island** es una parte de la página que necesita JavaScript para funcionar.

Por ejemplo:

```text
Página
│
├── Header
│      HTML
│
├── Article
│      HTML
│
├── 🏝️ Search
│      JavaScript
│
├── Article
│      HTML
│
└── 🏝️ Comments
       JavaScript
```

La página completa **no necesita ser interactiva**.

Solo determinadas partes.

---

## 🧠 EJEMPLO CON UN COMPONENTE

Supongamos que tienes un componente React:

```jsx
<Counter />
```

Si lo utilizas en Astro sin una Client Directive:

```astro
<Counter />
```

👉 Astro puede renderizar su HTML, pero **no lo hidrata para hacerlo interactivo**.

Si haces:

```astro
<Counter client:load />
```

Ahora:

```text
Counter
   ↓
HTML
   ↓
client:load
   ↓
JavaScript
   ↓
Hydration
   ↓
🏝️ Interactive Island
```

---

# 🏗️ ARQUITECTURA COMPLETA

La idea central puede visualizarse así:

```text
                    ASTRO
                      │
             ┌────────┴────────┐
             │                 │
             ▼                 ▼
          SERVER             CLIENT
             │                 │
             ▼                 ▼
        Render HTML       JavaScript
             │                 │
             │          ┌──────┴──────┐
             │          │             │
             │          ▼             ▼
             │       Hydration     No JS
             │          │             │
             │          ▼             │
             │       🏝️ Island       │
             │                        │
             └──────────┬─────────────┘
                        ▼
                     Browser
```

---

# 🧠 MODELO MENTAL

Cuando estudies Astro, intenta pensar en este flujo:

```text
                 ASTRO
                   │
                   ▼
             ¿Qué necesita?
                   │
          ┌────────┴────────┐
          │                 │
       Contenido        Interactividad
          │                 │
          ▼                 ▼
         HTML            JavaScript
          │                 │
          │                 ▼
          │             Hydration
          │                 │
          │                 ▼
          │            🏝️ Island
          │
          ▼
       Browser
```

### 🎯 La idea más importante

> **Astro intenta enviar HTML por defecto y JavaScript solo donde realmente hace falta.**

Por eso estos conceptos están conectados:

```text
Zero JS by default
        ↓
Islands Architecture
        ↓
Interactive Islands
        ↓
Hydration
        ↓
Client Directives
        ↓
SSR / SSG
        ↓
Rendering Strategy
```

Y esta es probablemente **la idea central que debes llevarte de este bloque**:

> 🏝️ **No toda la página necesita JavaScript. Astro permite que solo las partes interactivas se conviertan en Islands y se hidraten en el navegador.**
