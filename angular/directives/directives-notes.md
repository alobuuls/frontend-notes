# 📘 Directivas en Angular (Completo)

## 🧠 Qué son

Directives = instrucciones que modifican el HTML.

---

## 👉 Permiten:

- Mostrar / ocultar elementos
- Repetir elementos
- Cambiar estilos
- Escuchar eventos

---

# 📘 🟢 ¿Qué son las directivas?

## 🧠 Qué son

Son “poderes” que Angular agrega al HTML.

---

## 👉 Cambian:

- Estructura (DOM)
- Apariencia
- Comportamiento

---

### 💡 Ejemplo

```html id="d1m8x3"
<p *ngIf="activo">Hola</p>
```

---

# 📘 🔵 Tipos de directivas

---

# 📘 🧱 1. Estructurales

## 🧠 Qué son

Modifican el DOM (agregan o eliminan elementos).

---

## 👉 Características

- Usan `*`
- Cambian el layout

---

## 💡 Ejemplos

### ✔️ ngIf

```html id="n4v2x7"
<p *ngIf="activo">Visible</p>
```

---

### ✔️ ngFor

```html id="f7m3q9"
<li *ngFor="let item of items">{{ item }}</li>
```

---

### ✔️ ngSwitch

```html id="s8m1v6"
<div [ngSwitch]="estado">
  <p *ngSwitchCase="'ok'">OK</p>
  <p *ngSwitchDefault>Error</p>
</div>
```

---

## 🧠 Idea clave

- `false` en `*ngIf` → el elemento NO existe en el DOM

---

# 📘 🎨 2. De atributo

## 🧠 Qué son

Modifican apariencia o comportamiento.

---

## 👉 Características

- No cambian la estructura del DOM
- Cambian estilos o comportamiento

---

## 💡 Ejemplos

### ✔️ ngClass

```html id="c5m7v2"
<p [ngClass]="{ activo: isActive }"></p>
```

---

### ✔️ ngStyle

```html id="s2v9m4"
<p [ngStyle]="{ color: 'red' }"></p>
```

---

### ✔️ ngModel

```html id="m8q1x3"
<input [(ngModel)]="nombre" />
```

---

### ✔️ click

```html id="k4v8m2"
<button (click)="saludar()"></button>
```

---

### ✔️ routerLink

```html id="r7m2v9"
<a routerLink="/home">Home</a>
```

---

# 📘 🧩 3. Personalizadas

## 🧠 Qué son

Son creadas por el desarrollador.

---

## 👉 Permiten

- Lógica reutilizable

---

## 💡 Ejemplo

```ts id="p3m8v5"
@Directive({
  selector: '[dragDrop]',
})
export class DragDropDirective {}
```

---

### 💡 Uso en HTML

```html id="h7v2m9"
<div dragDrop></div>
```

---

## ✔ Tipos

- Atributo (más común)
- Estructurales (más avanzadas, ej: `*miIf`)

---

# 📘 🟠 Decorador @Directive

## 🧠 Qué es

Define una directiva.

---

## 👉 Le dice a Angular:

- Que es una directiva
- Cómo se usa

---

## 📌 selector

- `[dragDrop]` → atributo

---

### 💡 Ejemplo

```html id="e8m4v1"
<div dragDrop></div>
```

---

## ⚠️ Cosas importantes

- Directivas modifican HTML
- No crean componentes visuales completos
- Son reutilizables
- Pueden afectar estructura, estilo o comportamiento

---

## ✨ Resumen

### 🧠 Idea clave

Directivas = instrucciones que extienden el HTML en Angular.

---

### 👉 En pocas palabras

- Estructurales → cambian DOM
- De atributo → cambian estilo o comportamiento
- Personalizadas → lógica reutilizable

---

### 🚀 Conclusión

Las directivas son una de las herramientas más potentes de Angular para controlar el DOM sin duplicar lógica.

## 📘 🔴 Ejemplo real (Custom)

### 💡 TypeScript

```ts id="d8m2v7"
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[dragDrop]',
})
export class DragDropDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.border = '2px dashed blue';
  }
}
```

---

### 💡 HTML

```html id="h3v9x1"
<div dragDrop>Arrástrame</div>
```

---

## 📘 ⚫ Eventos en directivas

### 💡 Ejemplo

```ts id="e7m4v2"
import { HostListener } from '@angular/core';

@HostListener('click')
onClick() {
  console.log('click');
}
```

---

## 📘 ⚪ Buena práctica (DOM)

### 🧠 Qué es

Se recomienda usar `Renderer2` en lugar de manipular el DOM directamente.

---

### 💡 Ejemplo

```ts id="r5v8m3"
constructor(private el: ElementRef, private renderer: Renderer2) {}

ngOnInit() {
  this.renderer.setStyle(
    this.el.nativeElement,
    'color',
    'red'
  );
}
```

---

## 📘 🟤 ng-else (con \*ngIf)

### 💡 Ejemplo

```html id="n9m2v6"
<p *ngIf="activo; else noActivo">Activo</p>

<ng-template #noActivo>
  <p>No activo</p>
</ng-template>
```

---

## 📘 🟢 Diferencia clave

### 🧠 \*ngIf vs [hidden]

- `*ngIf` → elimina del DOM
- `[hidden]` → solo oculta el elemento

---

## 📘 🟡 Reglas importantes

### ❌ Incorrecto

```html id="w1m8x4"
<div *ngIf="cond" *ngFor="let item of items"></div>
```

---

### ✔ Correcto

```html id="c7v3m9"
<ng-container *ngIf="cond">
  <div *ngFor="let item of items"></div>
</ng-container>
```

---

### 🧠 Regla clave

Solo una directiva estructural por elemento.

---

## 📘 🟠 ¿Para qué sirven?

- Controlar UI dinámicamente
- Manejar listas
- Aplicar estilos dinámicos
- Escuchar eventos

---

## ⚠️ Cosas importantes

- Estructurales usan `*`
- Atributo usan `[]`
- `ngModel` requiere `FormsModule`
- Personalizadas usan `@Directive`
- Usar `Renderer2` en lugar de manipular DOM directamente

---

## ✨ Resumen

### 🧠 Idea clave

Directivas = control del HTML

---

### 👉 Tipos principales

- `*ngIf / *ngFor` → estructura
- `ngClass / ngStyle` → apariencia
- `ngModel / (click)` → interacción
- Custom → lógica reutilizable

---

### 🚀 Conclusión

Las directivas son una pieza clave para construir aplicaciones Angular dinámicas, escalables y reutilizables.
