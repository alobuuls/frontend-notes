  <a href="https://web.dev/learn/performance" target="_blank">more info<a>

    📘 PERFORMANCE WEB — RENDIMIENTO EN APLICACIONES WEB

    🧠 Performance = qué tan rápida, fluida y eficiente se siente una aplicación

    👉 Impacta:
       • UX  
       • SEO  
       • conversiones  
       • experiencia general  

    📘 🟢 ¿QUÉ ES PERFORMANCE?

        🧠 Es la optimización del rendimiento de una app

        👉 Busca:
           • cargar rápido  
           • evitar bloqueos  
           • reducir consumo  
           • mejorar fluidez  

        🎯 Objetivo:

        ✔ Apps rápidas  
        ✔ Menos tiempo de espera  
        ✔ Mejor experiencia  

    📘 🔵 CORE WEB VITALS

        🧠 Métricas importantes de Google

        👉 Miden experiencia real del usuario

        ✔ LCP  
        ✔ CLS  
        ✔ INP (antes FID)  

    📘 🟣 LCP (Largest Contentful Paint)

        🧠 Tiempo que tarda en cargar el contenido principal

        👉 Mide velocidad de carga visual

        💡 Ejemplo

        Hero image  
        título principal  
        banner  

        ✔ Bueno:
           menos de 2.5s

        ❌ Malo:
           carga lenta

    📘 🟡 CLS (Cumulative Layout Shift)

        🧠 Mide estabilidad visual

        👉 Detecta:
           • saltos  
           • movimientos inesperados  
           • cambios de layout  

        ❌ Ejemplo malo:

        Un botón cambia de posición mientras cargas

        ✔ Buena práctica:

        reservar espacio antes de cargar contenido

    📘 🟠 ¿QUÉ CAUSA MAL CLS?

        ❌ Imágenes sin tamaño
        ❌ Ads dinámicos
        ❌ Fonts que cambian tamaño
        ❌ Componentes cargando tarde

    📘 🔴 OPTIMIZAR RECURSOS LOCALES

        🧠 Lo que puedas cargar localmente, mejor

        ✔ Fonts locales  
        ✔ Multimedia optimizada  
        ✔ Recursos estáticos  

        👉 Reduce requests externas

    📘 ⚫ OPTIMIZACIÓN DE IMÁGENES

        ✔ Comprimir imágenes  
        ✔ Usar formatos modernos (webp, avif)  
        ✔ Lazy loading de imágenes  
        ✔ Tamaños correctos  

        ❌ Imágenes gigantes innecesarias

    📘 ⚪ FONTS Y PERFORMANCE

        🧠 Las fonts afectan carga y CLS

        ✔ Preload fonts  
        ✔ Usar pocas fuentes  
        ✔ Preferir local fonts  

        ❌ Muchas fonts externas

    📘 🟤 LAZY LOADING

        🧠 Cargar contenido solo cuando se necesita

        👉 Mejora rendimiento inicial

        💡 Ejemplos

        ✔ Lazy routes  
        ✔ Lazy images  
        ✔ Lazy modules  

        👉 Angular usa lazy loading con:
           loadChildren

    📘 🟢 INFINITE SCROLL

        🧠 Carga contenido mientras haces scroll

        👉 No carga TODO al inicio

        ✔ Mejor UX  
        ✔ Menos carga inicial  

        ❌ Puede consumir mucha memoria si no se controla

    📘 🔵 PAGINATION

        🧠 Divide datos en páginas

        👉 Solo carga pequeños grupos de datos

        ✔ Mejor performance  
        ✔ Mejor control  

        💡 Ejemplo

            Página 1 → 10 usuarios
            Página 2 → otros 10

    📘 🟣 PAGINATION vs INFINITE SCROLL

        🧠 Pagination

        ✔ Más control  
        ✔ Mejor para tablas  

        🧠 Infinite Scroll

        ✔ Más dinámico  
        ✔ Mejor para feeds  

    📘 🟡 CODE SPLITTING

        🧠 Dividir el código en chunks

        👉 Angular lo hace con lazy loading

        ✔ Menor bundle inicial  
        ✔ Mejor first load  

    📘 🟠 PERFORMANCE EN ANGULAR

        🧠 Angular mejora performance usando:

        ✔ Lazy loading  
        ✔ OnPush change detection  
        ✔ trackBy  
        ✔ RxJS  
        ✔ Async pipe  

    📘 🔴 trackBy EN ngFor

        🧠 Evita renders innecesarios

        💡 Ejemplo

            <li *ngFor="let item of items; trackBy: trackById">

        👉 Mejora rendimiento en listas

    📘 ⚫ CACHE

        🧠 Guardar datos para evitar recargas

        ✔ shareReplay  
        ✔ localStorage  
        ✔ service workers  

    📘 ⚪ SKELETON LOADING

        🧠 Mejora percepción de velocidad

        👉 Muestra placeholders mientras carga

        ✔ UX más fluida

    📘 🟤 BUENAS PRÁCTICAS

        ✔ Lazy loading  
        ✔ Optimizar imágenes  
        ✔ Reducir bundle  
        ✔ Evitar renders innecesarios  
        ✔ Usar async pipe  
        ✔ Cachear cuando tenga sentido  

    📘 🟢 ERRORES COMUNES

        ❌ Bundle gigante
        ❌ Muchas requests
        ❌ Imágenes pesadas
        ❌ No usar lazy loading
        ❌ Renders innecesarios

    📘 🔵 HERRAMIENTAS IMPORTANTES

        ✔ Lighthouse  
        ✔ Chrome DevTools  
        ✔ WebPageTest  
        ✔ web.dev  

    ⚠️ COSAS IMPORTANTES

        🧠 Performance afecta UX
        🧠 LCP = velocidad visual
        🧠 CLS = estabilidad visual
        🧠 Lazy loading es clave
        🧠 Menos bundle = mejor carga

    ✨ RESUMEN

        🧠 Performance = rapidez y fluidez

        👉 LCP → tiempo de carga  
        👉 CLS → estabilidad visual  
        👉 Lazy loading → carga inteligente  
        👉 Pagination / infinite scroll → optimización de datos  

        👉 Apps rápidas = mejores apps 🚀