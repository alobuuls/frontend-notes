# 📘 Performance Web — Rendimiento en Aplicaciones Web

> Más información: <https://web.dev/learn/performance>

## 🧠 ¿Qué es Performance?

**Performance** es qué tan rápida, fluida y eficiente se siente una aplicación para el usuario.

### 👉 Impacta directamente en:

- UX (Experiencia de Usuario)
- SEO
- Conversiones
- Experiencia general

### 🎯 Objetivos

- ✅ Apps rápidas
- ✅ Menos tiempo de espera
- ✅ Mejor experiencia de usuario

También busca:

- Cargar rápido
- Evitar bloqueos
- Reducir consumo de recursos
- Mejorar la fluidez

---

# 🔵 Core Web Vitals

Las **Core Web Vitals** son métricas importantes de Google que miden la experiencia real del usuario.

### Principales métricas

- ✅ LCP
- ✅ CLS
- ✅ INP (antes FID)

---

# 🟣 LCP (Largest Contentful Paint)

Mide el tiempo que tarda en cargarse el contenido principal visible de la página.

### 💡 Ejemplos

- Hero image
- Título principal
- Banner principal

### Valores recomendados

- ✅ Bueno: menos de **2.5 segundos**
- ❌ Malo: carga lenta del contenido principal

---

# 🟡 CLS (Cumulative Layout Shift)

Mide la estabilidad visual de una página.

Detecta:

- Saltos visuales
- Movimientos inesperados
- Cambios de layout durante la carga

### ❌ Ejemplo

Un botón cambia de posición mientras la página está cargando.

### ✅ Buena práctica

Reservar espacio antes de cargar contenido dinámico.

---

# 🟠 ¿Qué causa un mal CLS?

- ❌ Imágenes sin dimensiones definidas
- ❌ Anuncios dinámicos
- ❌ Fuentes que cambian de tamaño al cargar
- ❌ Componentes renderizados tardíamente

---

# 🔴 Optimización de Recursos Locales

Siempre que sea posible, carga recursos localmente.

### Recomendado

- ✅ Fuentes locales
- ✅ Multimedia optimizada
- ✅ Recursos estáticos

### Beneficios

- Menos dependencias externas
- Menos requests HTTP
- Mayor velocidad de carga

---

# ⚫ Optimización de Imágenes

### Buenas prácticas

- ✅ Comprimir imágenes
- ✅ Utilizar formatos modernos (`WebP`, `AVIF`)
- ✅ Aplicar lazy loading
- ✅ Servir tamaños adecuados

### Evitar

- ❌ Imágenes gigantes innecesarias

---

# ⚪ Fonts y Performance

Las fuentes pueden afectar tanto la velocidad de carga como el CLS.

### Recomendaciones

- ✅ Preload de fuentes
- ✅ Utilizar pocas familias tipográficas
- ✅ Preferir fuentes locales

### Evitar

- ❌ Muchas fuentes externas

---

# 🟤 Lazy Loading

Consiste en cargar recursos únicamente cuando son necesarios.

### Beneficios

- Mejor rendimiento inicial
- Menor consumo de recursos

### Ejemplos

- ✅ Lazy Routes
- ✅ Lazy Images
- ✅ Lazy Modules

### Angular

Angular implementa lazy loading mediante:

```ts
loadChildren
```

---

# 🟢 Infinite Scroll

Carga contenido mientras el usuario hace scroll.

### Ventajas

- ✅ Mejor experiencia de usuario
- ✅ Menor carga inicial

### Desventajas

- ❌ Puede consumir mucha memoria si no se controla correctamente

---

# 🔵 Pagination

Divide la información en páginas para cargar solo pequeños grupos de datos.

### Beneficios

- ✅ Mejor rendimiento
- ✅ Mayor control sobre la información

### Ejemplo

```text
Página 1 → 10 usuarios
Página 2 → otros 10 usuarios
```

---

# 🟣 Pagination vs Infinite Scroll

## Pagination

- ✅ Más control
- ✅ Ideal para tablas y datos estructurados

## Infinite Scroll

- ✅ Más dinámico
- ✅ Ideal para feeds y redes sociales

---

# 🟡 Code Splitting

Consiste en dividir el código en múltiples chunks.

### Beneficios

- ✅ Menor bundle inicial
- ✅ Mejor tiempo de carga inicial

### Angular

Normalmente se implementa mediante Lazy Loading.

---

# 🟠 Performance en Angular

Angular permite mejorar el rendimiento utilizando:

- ✅ Lazy Loading
- ✅ Change Detection Strategy `OnPush`
- ✅ `trackBy`
- ✅ RxJS
- ✅ Async Pipe

---

# 🔴 trackBy en ngFor

Evita renders innecesarios cuando una lista cambia.

### Ejemplo

```html
<li *ngFor="let item of items; trackBy: trackById">
```

### Beneficio

- ✅ Mejor rendimiento en listas grandes

---

# ⚫ Caché

Consiste en almacenar información para evitar solicitudes repetidas.

### Herramientas comunes

- ✅ `shareReplay`
- ✅ `localStorage`
- ✅ Service Workers

---

# ⚪ Skeleton Loading

Mejora la percepción de velocidad mostrando placeholders durante la carga.

### Beneficios

- ✅ Experiencia más fluida
- ✅ Sensación de menor tiempo de espera

---

# 🟤 Buenas Prácticas

- ✅ Utilizar Lazy Loading
- ✅ Optimizar imágenes
- ✅ Reducir el tamaño del bundle
- ✅ Evitar renders innecesarios
- ✅ Usar Async Pipe
- ✅ Aplicar caché cuando tenga sentido

---

# 🟢 Errores Comunes

- ❌ Bundle demasiado grande
- ❌ Exceso de requests
- ❌ Imágenes pesadas
- ❌ No utilizar Lazy Loading
- ❌ Renders innecesarios

---

# 🔵 Herramientas Importantes

- ✅ Lighthouse
- ✅ Chrome DevTools
- ✅ WebPageTest
- ✅ web.dev

---

# ⚠️ Conceptos Clave

- 🧠 Performance afecta directamente la UX
- 🧠 LCP mide la velocidad visual
- 🧠 CLS mide la estabilidad visual
- 🧠 Lazy Loading es fundamental
- 🧠 Menos bundle implica mejor carga

---

# ✨ Resumen

**Performance** es la rapidez y fluidez con la que se percibe una aplicación.

### Métricas importantes

- 👉 **LCP** → Tiempo de carga del contenido principal
- 👉 **CLS** → Estabilidad visual
- 👉 **INP** → Capacidad de respuesta a interacciones

### Técnicas fundamentales

- 👉 Lazy Loading
- 👉 Code Splitting
- 👉 Optimización de imágenes
- 👉 Caché
- 👉 Pagination e Infinite Scroll

> 🚀 Apps rápidas = mejores experiencias de usuario.