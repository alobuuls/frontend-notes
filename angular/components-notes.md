# 📘 Components en Angular

---

## 🧠 Qué son

Los componentes son la UI de Angular.

👉 Es lo que ves en pantalla:

- Botones
- Formularios
- Listas
- Tarjetas, etc.

---

## 📘 🟢 ¿Qué es un componente?

### 🧠 Definición

Un componente es una clase de TypeScript que:

- Tiene lógica (datos y funciones)
- Está conectada a una plantilla HTML
- Tiene estilos propios
- Controla una parte específica de la pantalla

🧩 Es la base de toda aplicación Angular

---

## 📘 🔵 Estructura de un componente

### 🧠 Partes principales

Un componente tiene 3 partes:

- `.ts` → lógica
- `.html` → vista
- `.css` → estilos

💡 Ejemplo de archivos:

```
mi-componente.component.ts
mi-componente.component.html
mi-componente.component.css
```

---

## 📘 🟣 Configuración (@Component)

### 🧠 Decorador @Component

```ts
@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
```

---

### 📌 Propiedades

- **selector** → Nombre de la etiqueta HTML que usarás
- **template / templateUrl** → HTML que se mostrará
- **Clase** → Contiene la lógica (variables, funciones)

---

## 📘 🟡 Uso del componente

### 🧠 Cómo usarlo

Se usa como etiqueta HTML:

```html
<app-mi-componente></app-mi-componente>
```

👉 Angular reemplaza esa etiqueta por el contenido del componente

---

## 📘 🟠 Ejemplo completo

### 🧠 TypeScript

```ts
export class MiComponente {
  nombre = 'Alo';

  saludar() {
    console.log('Hola');
  }
}
```

### 🧠 HTML

```html
<p>{{ nombre }}</p>
<button (click)="saludar()">Click</button>
```

---

## ✨ TIP

🧠 Usa componentes para dividir tu UI en partes pequeñas y reutilizables.
Hace tu código más limpio, mantenible y escalable 🚀

# 📘 Encapsulación de Estilos en Angular

---

## 🧠 Los estilos de un componente

👉 Solo afectan a ese componente
👉 No afectan otros

---

## ✨ TIP

🧠 Evita conflictos de estilos

---

# 📘 ⚫ ¿PARA QUÉ SIRVEN?

## 🎯 Beneficios

✔ Dividir la UI en partes pequeñas
✔ Reutilizar código
✔ Separar lógica y vista
✔ Hacer apps más mantenibles

---

# 📘 ⚪ CÓMO FUNCIONAN

## 🧠 Angular

👉 Lee el selector
👉 Renderiza el HTML
👉 Aplica estilos
👉 Ejecuta la lógica

👉 Todo automáticamente

---

## ⚠️ COSAS IMPORTANTES

🧠 Cada componente pertenece a un módulo
🧠 No mezclar lógica compleja en el HTML
🧠 Mantener componentes pequeños y reutilizables

---

## ✨ RESUMEN

🧠 Components = UI

👉 Lógica + HTML + CSS
👉 Se usan como etiquetas
👉 Controlan partes de la pantalla

👉 Son el corazón de Angular 🚀

# 📘 Decorador @Component en Angular

---

## 🧠 @Component es un decorador que define la configuración de un componente

👉 Conecta la lógica (TS) con la vista (HTML) y estilos (CSS)

---

# 📘 🟢 ¿QUÉ HACE @Component?

## 🧠 Le dice a Angular

👉 Cómo se usa el componente
👉 Qué HTML renderiza
👉 Qué estilos aplica

---

# 📘 🔵 ESTRUCTURA BÁSICA

## 💡 Ejemplo

```ts
@Component({
  selector: 'alo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
```

---

# 📘 🟣 PROPIEDADES CLAVE

## 📌 selector

🧠 Nombre de la etiqueta HTML

### 💡 Ejemplo

```html
<alo-header></alo-header>
```

👉 Angular reemplaza esa etiqueta por el componente

---

## 📌 template / templateUrl

🧠 Define el HTML del componente

👉 template → HTML inline
👉 templateUrl → archivo externo

---

## 📌 styleUrls

🧠 Define los estilos del componente

👉 Es un array de archivos CSS

---

# 📘 🟡 EJEMPLO COMPLETO

## 🧠 TypeScript

```ts
@Component({
  selector: 'alo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {}
```

## 🧠 HTML

```html
<h1>Header</h1>
```

---

## ✨ TIP

🧠 Mantén los componentes pequeños y enfocados en una sola responsabilidad para que escalen mejor en proyectos grandes.

---

# 📘 🟠 ERRORES COMUNES

## ⚠️ styleUrls mal referenciado

### ❌ Incorrecto

```ts
styleUrls: ['./app.component.css'];
```

### ✔️ Correcto

```ts
styleUrls: ['./header.component.css'];
```

👉 Cada componente debe tener su propio CSS

---

# 📘 🔴 CÓMO FUNCIONA

## 🧠 Angular

👉 Lee el selector
👉 Carga el HTML
👉 Aplica estilos
👉 Ejecuta la lógica

---

## ⚠️ COSAS IMPORTANTES

🧠 selector debe ser único
🧠 styleUrls es un array []
🧠 templateUrl apunta al HTML correcto
🧠 Cada componente tiene su propia configuración

---

## ✨ RESUMEN

🧠 @Component define un componente

👉 selector → etiqueta HTML
👉 template → vista
👉 styles → estilos

👉 Es la base para crear componentes en Angular 🚀

# 📘 Ciclo de Vida de un Componente en Angular

---

## 🧠 El ciclo de vida son las etapas por las que pasa un componente desde que se crea hasta que se destruye.

👉 Angular ejecuta ciertos métodos automáticamente en cada fase

---

# 📘 🟢 ¿PARA QUÉ SIRVE?

## 🧠 Permite

• Inicializar datos
• Detectar cambios
• Manipular el DOM en el momento correcto
• Limpiar recursos

---

## ✨ TIP

🧠 No todo se hace en ngOnInit, cada hook tiene su propósito

---

# 📘 🔵 ORDEN DEL CICLO DE VIDA

## 🧠 Angular ejecuta los hooks en este orden

1. constructor
2. ngOnChanges
3. ngOnInit
4. ngDoCheck
5. ngAfterContentInit
6. ngAfterContentChecked
7. ngAfterViewInit
8. ngAfterViewChecked
9. ngOnDestroy

---

# 📘 🟣 1. constructor

## 🧠 Se ejecuta al crear la instancia del componente

👉 Solo para:

• Inyección de dependencias
• Inicializar variables simples

---

## ⚠️ NO hacer

• llamadas HTTP
• lógica pesada

---

# 📘 🟡 2. ngOnChanges

## 🧠 Se ejecuta cuando cambian los @Input()

### 💡 Ejemplo

```ts id="5q8m2k"
ngOnChanges(changes: SimpleChanges) {
  console.log(changes);
}
```

👉 Detecta cambios en propiedades externas

---

# 📘 🟠 3. ngOnInit

## 🧠 Se ejecuta una sola vez después de inicializar el componente

👉 Ideal para:

• llamadas a APIs
• inicializar datos
• lógica principal

### 💡 Ejemplo

```ts id="8x3n7p"
ngOnInit() {
  console.log('Componente listo');
}
```

---

# 📘 🔴 4. ngDoCheck

## 🧠 Se ejecuta en cada ciclo de detección de cambios

👉 Permite detectar cambios manualmente

⚠️ Puede afectar rendimiento si se usa mal

---

# 📘 ⚫ 5. ngAfterContentInit

## 🧠 Se ejecuta cuando el contenido proyectado (ng-content) se inicializa

👉 Se ejecuta una sola vez

---

# 📘 ⚪ 6. ngAfterContentChecked

## 🧠 Se ejecuta cada vez que se verifica el contenido proyectado

👉 Puede ejecutarse múltiples veces

---

# 📘 🟤 7. ngAfterViewInit

## 🧠 Se ejecuta cuando la vista del componente ya está lista

👉 Ideal para:

• acceder al DOM
• usar ViewChild

### 💡 Ejemplo

```ts id="9v4k1m"
ngAfterViewInit() {
  console.log('Vista lista');
}
```

# 📘 🟢 8. ngAfterViewChecked

## 🧠 Se ejecuta cada vez que la vista se actualiza

👉 Se dispara frecuentemente

---

# 📘 🔵 9. ngOnDestroy

## 🧠 Se ejecuta antes de destruir el componente

👉 Ideal para:

• cancelar suscripciones
• limpiar recursos

### 💡 Ejemplo

```ts id="k7m2q8"
ngOnDestroy() {
  console.log('Componente destruido');
}
```

---

# 📘 🟣 FLUJO VISUAL

## 🧠 Creación → Inicialización → Render → Cambios → Destrucción

👉 Angular controla todo automáticamente

---

# 📘 🟡 EJEMPLO COMPLETO

### 💡 Ejemplo

```ts id="n4v9x2"
export class AppComponent implements OnInit, OnDestroy {
  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
```

---

## ✨ TIP

🧠 Hooks más usados en la vida real:

👉 ngOnInit
👉 ngOnChanges
👉 ngOnDestroy

---

## ⚠️ COSAS IMPORTANTES

🧠 constructor ≠ ngOnInit
🧠 ngOnInit se usa para lógica inicial
🧠 ngOnDestroy para limpieza
🧠 Algunos hooks se ejecutan muchas veces

---

## ✨ RESUMEN

🧠 Ciclo de vida = etapas del componente

👉 constructor → creación
👉 ngOnInit → inicio
👉 hooks intermedios → cambios/render
👉 ngOnDestroy → limpieza

👉 Control total sobre el comportamiento del componente 🚀

---

# 📘 Smart Components vs Dumb (Dump) Components en Angular

---

## 🧠 Es un patrón para separar responsabilidades en Angular

👉 Smart = lógica
👉 Dumb/Dump = UI

---

# 📘 🟢 ¿QUÉ ES ESTE PATRÓN?

## 🧠 Divide los componentes en dos tipos

👉 Smart Components → manejan lógica
👉 Dump Components → muestran UI

---

## ✨ TIP

🧠 Hace el código más limpio y escalable

---

# 📘 🔵 SMART COMPONENTS

## 🧠 Son componentes inteligentes

👉 Manejan:

• lógica de negocio
• estado
• servicios (APIs)

---

## 📌 Características

✔ Obtienen datos
✔ Controlan estado
✔ Se conectan a servicios
✔ Coordinan otros componentes

---

### 💡 Ejemplo

```ts id="p8w3n6"
export class SmartComponent implements OnInit {
  data: any;

  constructor(private myService: MyService) {}

  ngOnInit() {
    this.myService.getData().subscribe((resp) => {
      this.data = resp;
    });
  }
}
```

# 📘 🟣 DUMB / DUMP COMPONENTS

## 🧠 Son componentes de presentación

👉 Solo muestran datos

---

## 📌 Características

✔ NO tienen lógica de negocio
✔ Reciben datos con @Input()
✔ Emiten eventos con @Output()
✔ Son reutilizables

---

### 💡 Ejemplo

```ts id="v5m8q3"
export class DumpComponent {
  @Input() data: any;
  @Output() actionEvent = new EventEmitter<void>();

  onAction() {
    this.actionEvent.emit();
  }
}
```

---

# 📘 🟡 CÓMO TRABAJAN JUNTOS

## 🧠 Flujo

👉 Smart obtiene datos (API/service)
👉 Smart → pasa datos con @Input()
👉 Dump muestra UI
👉 Dump → emite evento con @Output()
👉 Smart responde al evento

👉 Data Down, Events Up 🔁

---

# 📘 🟠 DIFERENCIAS CLAVE

## 🧠 Smart vs Dump

### 👉 Responsabilidad

• Smart → lógica + estado
• Dump → UI

### 👉 Complejidad

• Smart → complejo
• Dump → simple

### 👉 Reutilización

• Smart → baja
• Dump → alta

### 👉 Testing

• Smart → más difícil
• Dump → fácil

---

# 📘 🔴 VENTAJAS

✔ Código organizado
✔ Separación de responsabilidades
✔ Mejor testing
✔ Reutilización de componentes
✔ Escalabilidad

---

# 📘 ⚫ ERROR COMÚN

## ⚠️ Meter lógica en Dump Components

👉 Si un componente:

• llama servicios
• maneja estado complejo

❌ Ya NO es Dump → debe ser Smart

---

# 📘 ⚪ BUENA PRÁCTICA

## 🧠 Regla mental

👉 Smart → piensa
👉 Dump → muestra

---

## ✨ TIP

🧠 Mantén los Dump lo más simples posible

---

## ✨ RESUMEN

🧠 Smart vs Dump:

👉 Smart → lógica, datos, servicios
👉 Dump → UI, inputs, outputs

👉 Trabajan juntos con:

• Data Down
• Events Up

👉 Patrón clave para apps grandes en Angular 🚀

# 📘 HOT 🔥 vs COLD ❄️ COMPONENTS EN ANGULAR

---

## 🧠 Clasificación de componentes según cuándo se cargan en la app

👉 Hot → se cargan al inicio
👉 Cold → se cargan bajo demanda (lazy loading)

---

# 📘 🟢 ¿POR QUÉ ES IMPORTANTE?

## 🧠 Impacta directamente en

👉 Tiempo de carga inicial
👉 First Contentful Paint (FCP)
👉 Tamaño del bundle
👉 Experiencia del usuario

---

## ✨ TIP

🧠 Separar bien esto mejora mucho el rendimiento

---

# 📘 🔥 HOT COMPONENTS

## 🧠 Son componentes que Angular carga al iniciar la aplicación

### 📌 Definición

👉 Están en el bundle inicial
👉 Forman parte del AppModule o rutas iniciales
👉 Son necesarios para la navegación base

---

### ⚙️ Características

✔ Carga inmediata
✔ Eager loading
✔ No se separan en chunks
✔ Uso frecuente
✔ Deben ser livianos

---

### 🧩 Ejemplos

👉 AppComponent (root)
👉 Navbar / toolbar
👉 Sidebar principal
👉 Home inicial
👉 Login básico
👉 Footer global

---

# 📘 ❄️ COLD COMPONENTS

## 🧠 Son componentes que se cargan solo cuando el usuario los necesita

### 📌 Definición

👉 NO se cargan al inicio
👉 Se cargan bajo demanda
👉 Se separan en chunks

---

### ⚙️ Características

✔ Lazy loading
✔ Reducen bundle inicial
✔ Mejoran performance
✔ Se cargan con rutas o imports dinámicos
✔ Ideales para features grandes

---

### 🧩 Ejemplos

👉 Panel de administración
👉 Reportes pesados
👉 Gráficas avanzadas
👉 Configuración
👉 Tabs ocultos / modales
👉 Dashboards secundarios

---

# 📘 🟣 DIFERENCIAS CLAVE

## 🧠 Hot vs Cold

### 👉 Carga inicial

• Hot → Sí
• Cold → No

### 👉 Tipo de carga

• Hot → Eager loading
• Cold → Lazy loading

### 👉 Bundle

• Hot → Principal
• Cold → Chunks separados

### 👉 Uso

• Hot → Frecuente
• Cold → Ocasional

# 📘 🟡 ARQUITECTURA RECOMENDADA

---

## 🔥 Hot Layer (Core App)

👉 AppComponent
👉 Layout principal
👉 Navbar / Sidebar
👉 UI base

⚠️ Debe ser mínimo y estable

---

## ❄️ Cold Layer (Features)

👉 Admin module
👉 Reports
👉 Settings
👉 Analytics

👉 Todo lo pesado o no inmediato

---

# 📘 🟠 BUENAS PRÁCTICAS

## ✔️ Hot Components

✔ Mantenerlos livianos
✔ Evitar lógica compleja
✔ Evitar llamadas pesadas
✔ Reutilizar UI simple

---

## ✔️ Cold Components

✔ Usar loadChildren o loadComponent
✔ Dividir por features
✔ Usar guards si es necesario
✔ Agregar loaders o skeletons

---

# 📘 🔴 IMPACTO EN PERFORMANCE

## 🧠 Separar Hot vs Cold mejora

⬇️ Bundle inicial más pequeño
⚡ Carga más rápida (First Load)
📉 Menos bloqueo de JS
📈 Mejor Lighthouse score

---

## ⚠️ COSAS IMPORTANTES

🧠 No todo debe ser lazy
🧠 Hot = base mínima
🧠 Cold = features pesadas
🧠 Balance es clave

---

## ✨ RESUMEN

🧠 Hot vs Cold:

🔥 Hot → carga inicial, rápido, esencial
❄️ Cold → carga bajo demanda, optimización

👉 Separarlos correctamente = mejor rendimiento 🚀
