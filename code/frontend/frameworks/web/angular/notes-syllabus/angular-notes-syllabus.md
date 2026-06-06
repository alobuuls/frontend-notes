# 📘 INTRODUCCIÓN ANGULAR

**Angular** es un framework de frontend desarrollado por **Google** que permite crear aplicaciones web modernas, dinámicas y escalables.

- Está basado en **TypeScript**
- Organiza el código en estructuras claras
- Ideal para aplicaciones grandes

---

## 📘 🟢 ¿QUÉ ES ANGULAR?

- Es un framework que combina:
  - **HTML** (vista)
  - **CSS** (estilos)
  - **TypeScript** (lógica)

- Facilita la construcción de interfaces interactivas.

💡 **Ejemplo**  
Aplicaciones como:

- Dashboard
- Sistema de usuarios
- E-commerce

Angular organiza todo en **componentes reutilizables** y trae herramientas integradas como routing, HTTP y formularios.

---

## 📘 🔵 SPA (Single Page Application)

- Una SPA funciona en **una sola página HTML**.
- En lugar de recargar toda la página, solo cambia el contenido dinámicamente.

💡 **Ejemplo**

- Clic en "Perfil"
- La página **no se recarga**
- Solo cambia la vista

**Diferencia clave:**

- Web tradicional → recarga toda la página
- SPA → solo actualiza partes

Angular gestiona esto automáticamente con su sistema de rutas.

---

## 📘 🟣 ARQUITECTURA BASADA EN COMPONENTES

- Angular organiza la app en **componentes independientes y reutilizables**.

💡 **Ejemplo**

- `NavbarComponent`
- `LoginComponent`
- `UserListComponent`

- Cada componente tiene:
  - **Lógica** (TypeScript)
  - **Vista** (HTML)
  - **Estilos** (CSS)

**Beneficios:**

- Reutilizar código
- Mantener orden
- Escalar aplicaciones

✨ **Tip:** Piensa en los componentes como **bloques LEGO**, ensamblas toda la app a partir de piezas pequeñas.

---

## ⚠️ COSAS IMPORTANTES

- Angular es un framework completo, no solo una librería.
- Usa **TypeScript** obligatoriamente.
- Está pensado para proyectos grandes y estructurados.

---

## ✨ RESUMEN

**Angular = Componentes + SPA + Organización estructurada**

- No recarga la página
- Divide la app en piezas reutilizables
- Facilita mantener código limpio y escalable

# 📘 ESTRUCTURA BÁSICA DE UN PROYECTO ANGULAR

Un proyecto Angular tiene una **estructura organizada** para separar lógica, vista y estilos, facilitando el mantenimiento y la escalabilidad.

---

## 📘 🟢 RAÍZ DEL PROYECTO

```bash
mi-app/
├── src/
│ ├── app/
│ │ ├── app.component.ts 🧠 Componente principal (lógica)
│ │ ├── app.component.html 🧠 Vista del componente principal
│ │ └── app.component.css 🧠 Estilos del componente principal
│ ├── main.ts 🧠 Punto de entrada de la app
│ └── index.html 🧠 HTML base que se carga una sola vez, contiene <app-root>
├── package.json 🧠 Configuración de dependencias y scripts
```

## 📘 🔵 EXPLICACIÓN DE ARCHIVOS CLAVE

- **main.ts**
  - Arranca la aplicación
  - Contiene `platformBrowserDynamic().bootstrapModule(AppModule)`
  - Inicializa el módulo principal

- **app.module.ts**
  - Módulo principal de la app (NgModule)
  - Declara componentes, importa otros módulos, configura providers

- **app.component.ts / html / css**
  - Componente raíz de la aplicación
  - Aquí se renderiza `<app-root>`
  - Contiene lógica, vista y estilos

- **index.html**
  - Página base que se carga una sola vez
  - Contiene `<app-root>` que Angular reemplaza
  - Aquí van meta tags y scripts globales

---

## 📘 🟣 OTRAS CARPETAS IMPORTANTES

- **assets/** → imágenes, íconos, archivos estáticos
- **environments/** → configuración (dev, prod)
- **styles.css** → estilos globales
- **angular.json** → configuración del proyecto
- **tsconfig.json** → configuración de TypeScript

---

✨ **Tip**

- `app/` es el corazón de la aplicación
- Cada componente sigue la estructura: **lógica + HTML + CSS**
- Mantén el proyecto organizado desde el inicio

---

## ⚠️ COSAS IMPORTANTES

- `main.ts` inicia la app
- `app.module.ts` conecta todo
- `index.html` solo se carga una vez

---

## ✨ RESUMEN

Angular organiza todo en:

- **src/** → código principal
- **app/** → componentes
- **main.ts** → arranque
- **index.html** → base HTML

👉 Todo trabaja junto para construir la aplicación 🚀

# 📘 NgModule (`app.module.ts`)

> 🧠 **NgModule** es la "caja organizadora" de Angular.
>
> Define cómo se estructura y conecta una parte de la aplicación.

👉 Todo componente, servicio o funcionalidad debe pertenecer a un módulo.

---

# 🟢 ¿Qué es NgModule?

## 🧠 Definición

Es una clase decorada con `@NgModule` que agrupa elementos relacionados dentro de una aplicación Angular.

---

## 💡 Ejemplo

```ts
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

👉 Es el punto central de configuración de la aplicación.

---

# 🔵 Propiedades Clave de NgModule

## 🧩 `declarations`

### 🧠 ¿Qué contiene?

Todo lo relacionado con la vista:

- Componentes
- Directivas
- Pipes

👉 Todo elemento visual que pertenece al módulo debe declararse aquí.

---

## 📦 `imports`

### 🧠 ¿Qué contiene?

Otros módulos necesarios para utilizar funcionalidades externas.

### ✔️ Ejemplos comunes

- `BrowserModule`
- `FormsModule`
- `HttpClientModule`

👉 Permite reutilizar funcionalidades proporcionadas por Angular u otros módulos.

---

## 🔧 `providers`

### 🧠 ¿Qué contiene?

Servicios que pueden ser inyectados mediante Dependency Injection.

### ✔️ Funciones principales

- Registrar servicios
- Gestionar dependencias
- Compartir lógica entre componentes

👉 Define qué servicios estarán disponibles dentro del módulo.

---

## 🚀 `bootstrap`

### 🧠 ¿Qué contiene?

El componente principal que inicia la aplicación.

### ✔️ Generalmente

```ts
bootstrap: [AppComponent];
```

👉 Es el primer componente que Angular renderiza.

---

# 🟣 ¿Cómo Funciona Todo Junto?

## 🧠 Flujo de arranque de Angular

Angular comienza desde el archivo:

```ts
main.ts;
```

---

### 🔄 Proceso Interno

```ts
bootstrapModule(AppModule);
```

Luego Angular:

1. Carga `AppModule`
2. Lee la configuración del módulo
3. Usa `bootstrap` para renderizar `AppComponent`
4. Inserta `<app-root>` dentro de `index.html`

---

## 📊 Flujo Visual

```text
main.ts
   │
   ▼
AppModule
   │
   ▼
bootstrap(AppComponent)
   │
   ▼
<app-root>
   │
   ▼
index.html
```

---

# 🟡 Angular CLI

## 🧠 ¿Qué es?

Angular CLI automatiza gran parte del trabajo repetitivo.

---

## 💡 Ejemplo

```bash
ng generate component mi-componente
```

---

## ✔️ ¿Qué hace automáticamente?

- Crea los archivos del componente
- Genera HTML, CSS y TypeScript
- Registra el componente en `declarations`
- Actualiza el módulo correspondiente

👉 Reduce trabajo manual y evita errores comunes.

---

## ✨ Tip

Cuando trabajas en proyectos grandes, utiliza Angular CLI siempre que sea posible para mantener una estructura consistente y evitar olvidos al registrar componentes.

---

# 🟠 Tipos de Módulos en Angular

## 🧠 AppModule no es el único módulo disponible

Angular permite dividir la aplicación en módulos especializados.

---

## 📦 Feature Modules

### 🧠 ¿Para qué sirven?

Agrupan funcionalidades específicas de una aplicación.

### ✔️ Ejemplos

- Usuarios
- Productos
- Administración

👉 Facilitan la modularización y mantenimiento.

---

## ♻️ Shared Modules

### 🧠 ¿Para qué sirven?

Contienen componentes, directivas o pipes reutilizables.

### ✔️ Ejemplos

- Botones personalizados
- Componentes de tabla
- Pipes comunes

👉 Evitan duplicación de código.

---

## 🌐 Core Module

### 🧠 ¿Para qué sirve?

Centraliza servicios globales de la aplicación.

### ✔️ Ejemplos

- Autenticación
- Interceptores HTTP
- Configuración global

👉 Normalmente se carga una sola vez.

---

## ✨ Tip

Una buena separación entre `Core`, `Shared` y `Feature Modules` hace que las aplicaciones Angular sean mucho más fáciles de escalar y mantener.

---

# ⚠️ Cosas Importantes

✔️ Un componente debe declararse en **un único módulo**.

✔️ `imports` permite reutilizar funcionalidades entre módulos.

✔️ `providers` controla la inyección de dependencias.

✔️ `bootstrap` define el punto de inicio de la aplicación.

✔️ Angular carga primero el módulo raíz antes de renderizar cualquier componente.

---

# 🚀 Resumen Rápido

| Propiedad      | Función                             |
| -------------- | ----------------------------------- |
| `declarations` | Elementos visuales del módulo       |
| `imports`      | Módulos que necesitas utilizar      |
| `providers`    | Servicios disponibles               |
| `bootstrap`    | Componente inicial de la aplicación |

---

## 🎯 Idea Clave

🧠 **NgModule organiza la aplicación Angular.**

### ✔️ Recordatorio rápido

- `declarations` → Lo que pertenece al módulo
- `imports` → Lo que necesitas usar
- `providers` → Servicios disponibles
- `bootstrap` → Punto de inicio

👉 Es la base estructural sobre la que se construye una aplicación Angular. 🚀

# 📘 Flujo Interno de Angular (SPA)

> 🧠 Angular sigue un flujo interno desde que se carga la aplicación hasta que se renderiza en pantalla.

👉 Todo ocurre sin recargar la página (Single Page Application - SPA).

---

# 🟢 Paso a Paso del Flujo

## 1️⃣ El navegador carga `index.html`

### 🧠 Detalles

- Es la **única página HTML real** de la app.
- Contiene `<app-root>`.

---

## 2️⃣ Angular busca `<app-root>`

### 🧠 Detalles

- `<app-root>` es el **selector del componente principal**.
- Angular inyecta la app dentro de este elemento.

---

## 3️⃣ `main.ts` arranca la aplicación

### 💡 Código clave

```ts
platformBrowserDynamic().bootstrapModule(AppModule);
```

### 🧠 Función

Inicializa el **módulo principal** de la aplicación.

---

## 4️⃣ `AppModule` se carga

### 🧠 Detalles

- Revisa la propiedad `bootstrap`.
- Indica qué **componente iniciar** (`AppComponent`).

---

## 5️⃣ Angular renderiza `AppComponent`

### 🧠 Detalles

- Reemplaza `<app-root>` con su template.
- Comienza a renderizar **componentes hijos**.

---

## 6️⃣ Se construye toda la aplicación

### 🧠 Detalles

- Angular arma el **árbol de componentes**.
- Cada componente renderiza su **HTML** correspondiente.

---

## 7️⃣ La app funciona como SPA

### 🧠 Detalles

- No hay recargas completas de página.
- Solo cambia el contenido de forma **dinámica**.

---

# 🔵 ¿Qué Significa SPA?

### 🧠 Definición

**SPA (Single Page Application)**

- Una sola página HTML.
- Navegación **sin recarga completa**.

### 💡 Ejemplo

- Cambias de "Home" a "Perfil".
- La página **no se recarga**.
- Angular solo actualiza la **vista** correspondiente.

---

# 🟣 ¿Cómo Angular Logra Esto?

### 🧠 Mecanismos

- Routing con `RouterModule`.
- Manipulación directa del **DOM**.
- Renderizado dinámico de componentes.

👉 Angular **solo actualiza lo necesario**, evitando recargas completas.

---

# 🟡 Renderizado Dinámico

### 🧠 Qué Hace Angular

- Inserta componentes dinámicamente.
- Actualiza datos en la UI.
- Re-renderiza **partes específicas** sin tocar el resto.

### ✨ Tip

Piensa que Angular "pinta" la UI **encima de `index.html`**, sin reemplazar toda la página.

---

# ⚠️ Cosas Importantes

✔️ `index.html` se carga **una sola vez**.

✔️ `<app-root>` es el **punto de entrada visual**.

✔️ `main.ts` inicia toda la aplicación.

✔️ `AppModule` define qué componente se renderiza primero.

✔️ Angular controla toda la navegación interna.

---

# 💡 Recuerda

🧠 `index.html` **nunca se recarga**.

👉 Esto es lo que permite que Angular funcione como **SPA**.

---

# 🚀 Resumen del Flujo Angular SPA

1. `index.html` se carga.
2. Angular busca `<app-root>`.
3. `main.ts` arranca `AppModule`.
4. `AppModule` usa `bootstrap`.
5. Se renderiza `AppComponent`.
6. Se construyen los **componentes hijos**.
7. La app funciona **sin recargar la página**.

👉 Todo ocurre de manera **dinámica y fluida**, característico de una SPA.

# 📘 Componentes en Angular

> 🧠 Los componentes son la **unidad básica** de Angular.
>
> Controlan una parte específica de la interfaz (UI).

👉 Toda aplicación Angular está construida con componentes.

---

# 🟢 1. ¿Qué es un Componente?

## 🧠 Definición

Es una clase que controla:

- **Lógica** (TypeScript)
- **Vista** (HTML)
- **Estilos** (CSS)

👉 Representa una parte específica de la pantalla.

---

## 💡 Ejemplos de Componentes

- Navbar
- Login
- Lista de usuarios

👉 Angular está completamente basado en componentes.

---

# 🔵 2. Crear Componentes

## 🧠 Cómo crear

Angular CLI permite generar componentes automáticamente.

### 💡 Comandos

```bash
ng generate component nombre
ng g c nombre
```

### ✔️ Qué hace Angular automáticamente

- Crea archivos: `.ts`, `.html`, `.css`.
- Registra el componente en `declarations` del `NgModule`.

---

## ✨ Tip

Usa nombres **claros y descriptivos** para tus componentes para mantener la aplicación organizada.

---

# 🟣 3. Estructura de un Componente

## 🧠 Archivos clave

- `archivo.ts` → lógica
- `archivo.html` → vista
- `archivo.css` → estilos encapsulados

### 💡 Ejemplo de nombres

- `contador.component.ts`
- `contador.component.html`
- `contador.component.css`

👉 La **encapsulación** garantiza que los estilos solo afecten a ese componente.

---

# 🟡 4. Decorador `@Component`

## 🧠 Definición

Define la **configuración del componente**, conectando la lógica con la vista y estilos.

### 💡 Ejemplo

```ts
@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css'],
})
export class ContadorComponent {}
```

### 🧠 Propiedades clave

- `selector` → Cómo usar el componente en HTML.
- `templateUrl` → Archivo HTML del componente.
- `styleUrls` → Archivos de estilos del componente.

---

# 🟠 5. Uso del Selector

## 🧠 Cómo usar

El selector se emplea como **etiqueta HTML**.

### 💡 Ejemplo

```html
<app-contador></app-contador>
```

👉 Angular reemplaza esa etiqueta por el componente correspondiente.

---

# 🔴 6. Interpolación `{{ }}`

## 🧠 Definición

Permite mostrar datos de TypeScript directamente en el HTML.

### 💡 Ejemplos

```html
{{ nombre }} {{ edad + 5 }}
```

👉 Soporta **expresiones simples**.

---

## 🧠 Ejemplo en componente

```ts
export class AppComponent {
  nombre = 'Alo';
  edad = 20;
}
```

👉 Luego se muestran en HTML usando `{{ nombre }}` y `{{ edad }}`.

# 🔵 7. Regla Importante de Interpolación

## 🧠 Definición

Interpolación (`{{ }}`) **solo debe usarse para mostrar datos**.

### ❌ Qué NO hacer

- Lógica compleja
- Asignaciones
- Funciones pesadas

### ⚠️ Ejemplo Incorrecto

```html
{{ nombre = 'otro' }} ❌
```

### ✨ Tip

Mantén **toda la lógica en el archivo `.ts`**, no en el HTML.

---

# ⚪ 8. Flujo de un Componente

## 🧠 Qué hace Angular automáticamente

1. Lee el selector del componente.
2. Renderiza el template (`.html`).
3. Aplica estilos encapsulados (`.css`).
4. Ejecuta la lógica del archivo `.ts`.

👉 Todo esto ocurre **sin intervención manual**.

---

# ⚠️ Cosas Importantes

✔️ Cada componente debe estar declarado en **un módulo**.

✔️ El HTML **solo muestra datos**, no debe contener lógica compleja.

✔️ Los estilos están **encapsulados por defecto**.

✔️ Angular renderiza componentes en forma de **árbol jerárquico**.

---

# ✨ Resumen

### 🧠 Componente Angular

- Lógica (`.ts`) + Vista (`.html`) + Estilos (`.css`)

### ✔️ Recordatorio

- Se crea con **Angular CLI**.
- Se configura con `@Component`.
- Se usa con su **selector**.
- Muestra datos con `{{ }}`.

👉 Es la **base de toda aplicación Angular** 🚀

---

# 📘 Data Binding en Angular

> 🧠 Conecta **TypeScript (lógica)** con **HTML (vista)**.

👉 Permite que los datos fluyan entre el componente y la UI.

---

# 🟢 1. ¿Qué es Data Binding?

## 🧠 Definición

Comunicación bidireccional **TS ↔ HTML**.

### ✔️ Ventajas

- Angular sincroniza datos automáticamente.
- Evita manipulación manual del DOM.

### ✨ Tip

Es una de las **bases más importantes de Angular** para construir aplicaciones dinámicas.

---

# 🔵 2. Interpolación `{{ }}`

## 🧠 Definición

Permite mostrar datos del archivo TypeScript en el HTML.

### 💡 Ejemplos

```html
{{ nombre }} {{ edad + 5 }}
```

### 🧠 Ejemplo en componente

```ts
export class AppComponent {
  nombre = 'Alo';
  edad = 20;
}
```

### ⚠️ Restricciones

No usar:

- Lógica compleja
- Asignaciones dentro de `{{ }}`

---

# 🟣 3. Property Binding `[ ]`

## 🧠 Definición

Envía datos desde TypeScript hacia propiedades del HTML/DOM.

### 💡 Ejemplo

```html
<img [src]="imagen" />
<p [textContent]="nombre"></p>
```

### 🧠 Ejemplo en componente

```ts
export class AppComponent {
  imagen = 'foto.jpg';
  nombre = 'Alo';
}
```

👉 Controla atributos de elementos HTML de manera **dinámica y reactiva**.

# 🟡 4. Event Binding `( )`

## 🧠 Definición

Captura eventos del HTML hacia TypeScript.

### ✔️ Ventaja

Permite reaccionar a **acciones del usuario** de manera declarativa.

---

### 💡 Ejemplo en HTML

```html
<button (click)="saludar()"></button>
```

### 🧠 Ejemplo en componente

```ts
saludar() {
  console.log('Hola');
}
```

### 👉 Eventos comunes

- `click`
- `input`
- `change`

---

# 🟠 5. Two-Way Binding `[( )]`

## 🧠 Definición

Comunicación **bidireccional** entre TS y HTML.

### ✔️ Ventaja

Sincroniza automáticamente:

- Si cambia el input → cambia el TS.
- Si cambia el TS → cambia el input.

---

### 💡 Ejemplo

```html
<input [(ngModel)]="nombre" />
```

### ⚠️ Requisitos

Debe importarse `FormsModule`:

```ts
import { FormsModule } from '@angular/forms';
```

### ✨ Tip

Muy útil en **formularios** para mantener datos sincronizados automáticamente.

---

# 🔴 6. Resumen Mental de Data Binding

### 🧠 Tipos de Data Binding

| Sintaxis | Función                                          |
| -------- | ------------------------------------------------ |
| `{{ }}`  | Mostrar datos en HTML                            |
| `[ ]`    | Enviar datos desde TS al HTML (Property Binding) |
| `( )`    | Escuchar eventos del HTML (Event Binding)        |
| `[( )]`  | Sincronización bidireccional (Two-Way Binding)   |

---

# ⚫ 7. Flujo de Datos en Angular

### 🧠 Cómo maneja Angular los datos

- **TS → HTML**: interpolación `{{ }}` y property binding `[ ]`
- **HTML → TS**: event binding `( )`
- **Ambos sentidos**: two-way binding `[( )]`

---

# ⚠️ Cosas Importantes

✔️ No manipules el DOM manualmente.  
✔️ Usa binding para todo el flujo de datos.  
✔️ Mantén la lógica en el archivo `.ts`.  
✔️ Two-way binding requiere `FormsModule`.

---

# ✨ Resumen

### 🧠 Concepto clave

**Data Binding** conecta la lógica del componente con la vista HTML.

### ✔️ Beneficios

- Mostrar, enviar, escuchar y sincronizar datos.
- Permite interfaces **reactivas y dinámicas**.
- Es fundamental para construir aplicaciones Angular interactivas 🚀

# 📘 Directivas en Angular

> 🧠 Las directivas son instrucciones que **modifican el comportamiento del HTML**.

👉 Permiten cambiar el DOM, estilos o comportamiento de manera dinámica.

---

# 🟢 1. ¿Qué Son?

## 🧠 Definición

Son "poderes especiales" que Angular agrega al HTML.

- Se usan como **atributos** o con `*` (asterisco).

### 💡 Ejemplo

```html
<p *ngIf="activo">Hola</p>
```

---

# 🔵 2. Tipos de Directivas

## 🧠 Estructurales

- Cambian el DOM.
- Ejemplos: `*ngIf`, `*ngFor`.

## 🧠 De Atributo

- Modifican **estilos o comportamiento**.
- Ejemplos: `ngClass`, `ngStyle`.

👉 Las directivas estructurales siempre usan `*` como prefijo.

---

# 🟣 3. \*ngIf

## 🧠 Definición

Muestra o elimina elementos del DOM según una condición.

### 💡 Ejemplo

```html
<p *ngIf="isVisible">Contenido</p>
```

- `true` → se muestra
- `false` → NO existe en el DOM

⚠️ Nota: no solo oculta, lo **elimina completamente**.

---

# 🟡 4. \*ngFor

## 🧠 Definición

Recorre listas y genera elementos dinámicamente.

### 💡 Ejemplo básico

```html
<li *ngFor="let item of items">{{ item }}</li>
```

### 💡 Ejemplo con índice

```html
<li *ngFor="let item of items; let i = index">{{ i }} - {{ item }}</li>
```

👉 Crea un **elemento por cada ítem**.

---

# 🟠 5. ngClass

## 🧠 Definición

Agrega o quita **clases dinámicamente** según una condición.

### 💡 Ejemplo

```html
<p [ngClass]="{ activo: isActive }"></p>
```

👉 Aplica la clase si la condición es `true`.

### ✨ Tip

Puedes usar **múltiples clases dinámicas** combinando objetos o arrays.

---

# 🔴 6. ngStyle

## 🧠 Definición

Aplica **estilos dinámicos** desde TypeScript.

### 💡 Ejemplo

```html
<p [ngStyle]="{ color: 'red', fontSize: '20px' }"></p>
```

👉 Permite cambiar estilos sin modificar CSS estático.

---

# ⚫ 7. Diferencia Clave

### 🧠 \*ngIf vs [hidden]

| Directiva  | Comportamiento                            |
| ---------- | ----------------------------------------- |
| `*ngIf`    | Elimina del DOM                           |
| `[hidden]` | Solo oculta, el elemento sigue existiendo |

⚠️ `*ngIf` mejora el rendimiento al **no renderizar** elementos innecesarios.

---

# ⚪ 8. Regla Importante

## 🧠 Restricción

No usar **dos directivas estructurales** en el mismo elemento.

### ❌ Incorrecto

```html
<div *ngIf="cond" *ngFor="let item of items"></div>
```

### ✔️ Correcto

```html
<ng-container *ngIf="cond">
  <div *ngFor="let item of items"></div>
</ng-container>
```

---

# 🔥 9. ¿Cómo Funcionan Internamente?

## 🧠 Mecanismo Angular

- Angular transforma las directivas estructurales en `<ng-template>`.
- Decide dinámicamente **cuándo renderizar** elementos.

---

# ⚠️ Cosas Importantes

✔️ `*ngIf` elimina elementos del DOM.  
✔️ `*ngFor` genera múltiples elementos dinámicamente.  
✔️ `ngClass` y `ngStyle` son **dinámicos y reactivos**.  
✔️ Solo **una directiva estructural por elemento**.

---

# ✨ Resumen

### 🧠 Directivas Angular

- **`*ngIf`** → mostrar/ocultar elementos eliminándolos del DOM.
- **`*ngFor`** → recorrer listas dinámicamente.
- **`ngClass`** → aplicar clases dinámicas.
- **`ngStyle`** → aplicar estilos dinámicos.

👉 Son fundamentales para crear **interfaces interactivas y dinámicas** 🚀

# 📘 Comunicación Entre Componentes en Angular

> 🧠 Angular permite que los componentes **se comuniquen entre sí**, clave para compartir datos y manejar eventos.

---

# 🟢 1. Tipos de Comunicación

## 🧠 Definición

- **Padre → Hijo** → `@Input()`
- **Hijo → Padre** → `@Output()` + `EventEmitter`

👉 Flujo controlado y organizado para mantener la lógica clara.

---

# 🔵 2. @Input

## 🧠 Definición

Permite **recibir datos** en el componente hijo desde el padre.

### 💡 Ejemplo en el hijo

```ts
@Input() nombre: string;
```

### 💡 Ejemplo en el padre

```html
<app-hijo [nombre]="nombrePadre"></app-hijo>
```

👉 El padre envía datos al hijo.

### ✨ Tip

Funciona de manera similar a **props** en frameworks como React.

---

# 🟣 3. @Output + EventEmitter

## 🧠 Definición

Permite **enviar datos del hijo al padre** mediante eventos.

### 💡 Ejemplo en el hijo

```ts
@Output() evento = new EventEmitter<string>();

enviar() {
  this.evento.emit('mensaje');
}
```

### 💡 Ejemplo en el padre

```html
<app-hijo (evento)="recibir($event)"></app-hijo>
```

👉 El hijo emite eventos que el padre puede escuchar y manejar.

---

# 🟡 4. $event

## 🧠 Definición

Contiene el valor que el hijo **emite hacia el padre**.

### 💡 Ejemplo

```ts
recibir(valor: string) {
  console.log(valor);
}
```

👉 `$event` = datos emitidos por el hijo.

---

# 🟠 5. Flujo de Datos

## 🧠 Definición

Angular mantiene un flujo claro y predecible:

- **Data Down** → `@Input`
- **Events Up** → `@Output`

### ✨ Tip

Mantener este flujo asegura un **código ordenado y fácil de mantener**.

---

# 🔴 6. Regla Importante

## 🧠 Restricciones

- El hijo **NO modifica directamente al padre**.
- El padre controla la lógica; el hijo **solo recibe datos y emite eventos**.

⚠️ Evita acoplamiento innecesario.

---

# ⚫ 7. Ejemplo Completo

## 🧠 Componente Padre

```ts
nombrePadre = 'Alo';

recibir(mensaje: string) {
  console.log(mensaje);
}
```

```html
<app-hijo [nombre]="nombrePadre" (evento)="recibir($event)"> </app-hijo>
```

## 🧠 Componente Hijo

```ts
@Input() nombre!: string;

@Output() evento = new EventEmitter<string>();

enviar() {
  this.evento.emit('Hola desde hijo');
}
```

---

# ⚠️ Cosas Importantes

✔️ `@Input` recibe datos del padre.  
✔️ `@Output` emite eventos al padre.  
✔️ `$event` contiene el valor enviado.  
✔️ El flujo siempre debe ser controlado por el padre.

---

# ✨ Resumen

### 🧠 Comunicación Angular

- **Padre → Hijo** → `@Input`
- **Hijo → Padre** → `@Output`

### ✔️ Flujo

- **Data Down**
- **Events Up**

👉 Es la **base para trabajar con múltiples componentes** y construir aplicaciones escalables 🚀

# 📘 Consumo de APIs en Angular

> 🧠 Permite obtener y enviar datos a servidores (backend).

👉 Es fundamental para aplicaciones reales como login, gestión de usuarios, productos, dashboards, etc.

---

# 🟢 1. HttpClient

## 🧠 ¿Qué es?

`HttpClient` es el servicio que Angular proporciona para realizar peticiones HTTP.

### 💡 Importación

```ts
import { HttpClientModule } from '@angular/common/http';
```

```ts
@NgModule({
  imports: [HttpClientModule],
})
export class AppModule {}
```

👉 Sin `HttpClientModule`, Angular no puede realizar peticiones HTTP.

---

## ✨ Tip

En Angular moderno, `HttpClient` es la forma estándar y recomendada para consumir APIs.

---

# 🔵 2. Inyección de Dependencias (DI)

## 🧠 ¿Qué es?

Angular utiliza **Dependency Injection (DI)** para proporcionar servicios automáticamente.

### 💡 Ejemplo

```ts
constructor(private http: HttpClient) {}
```

👉 Ahora puedes acceder a `this.http` dentro del componente o servicio.

---

## 🧠 ¿Qué ocurre internamente?

Angular:

1. Detecta la dependencia.
2. Crea una instancia de `HttpClient`.
3. La inyecta automáticamente.

---

## ✨ Tip

Aunque puedes usar `HttpClient` directamente en componentes, la práctica recomendada es utilizarlo dentro de **servicios**.

---

# 🟣 3. Tipos de Peticiones HTTP

## 🧠 Métodos más comunes

| Método   | Función                  |
| -------- | ------------------------ |
| `GET`    | Obtener datos            |
| `POST`   | Enviar datos             |
| `PUT`    | Actualizar completamente |
| `PATCH`  | Actualizar parcialmente  |
| `DELETE` | Eliminar datos           |

---

### 💡 Ejemplo GET

```ts
this.http.get('api/usuarios');
```

👉 Se utiliza para solicitar información al servidor.

---

# 🟡 4. subscribe()

## 🧠 ¿Qué es?

Las peticiones HTTP en Angular son asíncronas y retornan un **Observable**.

Para ejecutar la petición debes suscribirte.

### 💡 Ejemplo

```ts
this.http.get('api').subscribe({
  next: (resp) => console.log(resp),
  error: (err) => console.error(err),
  complete: () => console.log('done'),
});
```

---

## 🧠 Callbacks disponibles

### ✔️ `next`

Se ejecuta cuando llegan datos.

```ts
next: (resp) => console.log(resp);
```

---

### ✔️ `error`

Se ejecuta si ocurre un error.

```ts
error: (err) => console.error(err);
```

---

### ✔️ `complete`

Se ejecuta cuando la operación finaliza.

```ts
complete: () => console.log('done');
```

---

## ⚠️ Importante

Sin `subscribe()`, la petición **no se ejecuta**.

```ts
this.http.get('api');
```

❌ No realiza la petición.

```ts
this.http.get('api').subscribe();
```

✅ Ejecuta la petición.

---

## ✨ Tip

Piensa en los Observables como una "promesa avanzada" capaz de emitir múltiples valores a lo largo del tiempo.

---

# 🟠 5. Tipado con Interfaces

## 🧠 ¿Por qué usar interfaces?

Permiten definir la estructura esperada de los datos.

### 💡 Ejemplo

```ts
interface Usuario {
  id: number;
  nombre: string;
}
```

---

### 💡 Uso con HttpClient

```ts
this.http.get<Usuario[]>('api/usuarios');
```

👉 Angular sabe exactamente qué tipo de datos esperar.

---

# 🔴 6. Beneficios del Tipado

## ✔️ Ventajas

- Autocompletado inteligente.
- Validación en tiempo de compilación.
- Menos errores.
- Código más mantenible.
- Mejor experiencia de desarrollo.

---

## 💡 Ejemplo

```ts
usuario.nombre;
```

TypeScript sabe que existe la propiedad `nombre`.

---

## ✨ Tip

Tipar siempre las respuestas de las APIs mejora enormemente la productividad y reduce errores difíciles de detectar.

---

# ⚫ 7. Uso Recomendado: Servicios

## 🧠 Buena Práctica

Separar la lógica HTTP de los componentes.

👉 Los componentes muestran información.

👉 Los servicios obtienen información.

---

## 💡 Ejemplo de Servicio

```ts
@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  getUsuarios() {
    return this.http.get<Usuario[]>('api/usuarios');
  }
}
```

---

## 🧠 Consumo desde un componente

```ts
constructor(private usuarioService: UsuarioService) {}

ngOnInit() {
  this.usuarioService
    .getUsuarios()
    .subscribe(usuarios => {
      console.log(usuarios);
    });
}
```

👉 El componente delega la comunicación HTTP al servicio.

---

## ✨ Tip

Una regla muy utilizada en Angular es:

> 🧠 **"Los componentes presentan datos, los servicios gestionan datos."**

---

# 📊 Flujo Recomendado

```text
Componente
    │
    ▼
Servicio
    │
    ▼
HttpClient
    │
    ▼
API / Backend
    │
    ▼
Respuesta
    │
    ▼
Servicio
    │
    ▼
Componente
    │
    ▼
Vista (HTML)
```

---

# ⚠️ Cosas Importantes

✔️ Debes importar `HttpClientModule`.

✔️ `HttpClient` se obtiene mediante Dependency Injection.

✔️ Las peticiones retornan Observables.

✔️ Sin `subscribe()` la petición no se ejecuta.

✔️ Usa interfaces para tipar respuestas.

✔️ Mantén la lógica HTTP dentro de servicios.

---

# 🚀 Resumen

### 🧠 Consumo de APIs en Angular

- `HttpClient` → realiza peticiones HTTP.
- `GET`, `POST`, `PUT`, `PATCH`, `DELETE` → operaciones principales.
- `subscribe()` → ejecuta y maneja respuestas.
- Interfaces → tipan los datos.
- Servicios → centralizan la lógica HTTP.

### ✔️ Flujo recomendado

```text
Componente → Servicio → HttpClient → API
```

👉 Es la forma estándar, escalable y profesional de consumir APIs en Angular 🚀

# ⚪ 8. Consumir el Servicio

## 💡 Uso en el componente

```ts
constructor(private usuarioService: UsuarioService) {}

ngOnInit() {
  this.usuarioService.getUsuarios()
    .subscribe(data => console.log(data));
}
```

👉 El componente delega la lógica HTTP al servicio.

---

# 🟤 9. Observables (CLAVE)

## 🧠 ¿Qué son?

`HttpClient` trabaja con **Observables (RxJS)**.

👉 Son flujos de datos asíncronos.

---

## 🧠 Características

- Manejan datos en el tiempo.
- Son cancelables.
- Permiten composición de operadores.

---

## ✨ Tip

Puedes usar operadores de **RxJS** como:

- `map`
- `catchError`
- `filter`
- `switchMap`

👉 Para transformar o manejar datos de forma avanzada.

---

# 🟢 10. Manejo de Errores

## 💡 Ejemplo

```ts
this.http.get('api').subscribe({
  next: (data) => {},
  error: (err) => {
    console.error('Error:', err);
  },
});
```

---

## ⚠️ Importante

Siempre debes manejar errores en peticiones HTTP.

👉 Evita que la aplicación falle silenciosamente.

---

# 🔵 11. Async Pipe (PRO)

## 🧠 ¿Qué es?

Alternativa a `subscribe()` directamente en el HTML.

---

## 💡 Ejemplo

```ts
usuarios$ = this.http.get<Usuario[]>('api');
```

```html
<div *ngFor="let u of usuarios$ | async">{{ u.nombre }}</div>
```

---

## 🧠 Ventajas

- Angular maneja la suscripción automáticamente.
- Evita memory leaks.
- Código más limpio.

---

## ✨ Tip

El `async pipe` es la forma más limpia y recomendada en Angular moderno para consumir Observables en la vista.

---

# 🟣 12. Headers y Configuración

## 💡 Ejemplo

```ts
this.http.get('api', {
  headers: {
    Authorization: 'Bearer token',
  },
});
```

---

## 🧠 Uso común

- Autenticación (tokens JWT)
- Configuración de requests
- APIs protegidas

---

# 🟡 13. Environments

## 🧠 ¿Por qué usarlo?

Evita escribir URLs directamente en el código.

---

## 💡 Ejemplo

```ts
environment.apiUrl;
```

```ts
this.http.get(`${environment.apiUrl}/usuarios`);
```

---

## 🧠 Beneficios

- Separación de entornos (dev / prod).
- Fácil mantenimiento.
- Menos errores de configuración.

---

# 🟠 14. Flujo Real de una App Angular

## 🧠 Arquitectura típica

```text
Componente → Servicio → API → Respuesta → UI
```

---

## 🧠 Responsabilidades

- **Componente** → muestra datos
- **Servicio** → maneja lógica HTTP
- **API** → provee datos
- **UI** → renderiza información

👉 Separación clara = código escalable.

---

# ⚠️ Cosas Importantes

✔️ `HttpClient` requiere `HttpClientModule`.  
✔️ `subscribe()` ejecuta la petición.  
✔️ Usa interfaces para tipado seguro.  
✔️ Los servicios deben manejar HTTP.  
✔️ Siempre maneja errores.  
✔️ Observables son la base del flujo asíncrono.

---

# ✨ Resumen

## 🧠 Consumo de APIs en Angular

- `HttpClient` → realiza peticiones HTTP.
- `subscribe()` → ejecuta y gestiona respuestas.
- `Observables` → flujo de datos asíncrono.
- `Async Pipe` → alternativa limpia en HTML.
- `Interfaces` → tipado seguro.
- `Servicios` → organización y buenas prácticas.

---

## 🚀 Idea clave

👉 Angular conecta frontend y backend mediante un sistema reactivo basado en Observables, servicios y HttpClient.
