# 📘 Directivas Personalizadas en Angular (Custom Directives)

## 🧠 Qué son

Son directivas creadas por el desarrollador.

Permiten reutilizar lógica y comportamiento en el HTML.

---

## 📘 🟢 ¿Qué son?

### 🧠 Qué es

Son clases decoradas con `@Directive`.

### 👉 Sirven para:

- Modificar comportamiento
- Aplicar estilos
- Reaccionar a eventos

### 💡 Ejemplo

```ts id="d1v8m3"
@Directive({
  selector: '[appHighlight]'
})
```

---

## 📘 🔵 Tipos de Directivas Personalizadas

### 🧠 1. De atributo (las más comunes)

- Modifican apariencia o comportamiento
- No cambian el DOM
- Se usan como atributos

---

### 🧠 2. Estructurales (más avanzadas)

- Cambian la estructura del DOM
- Usan `*`
- Ejemplo: `*miIf`

---

## 📘 🟣 Crear una Directiva

### 🧠 Con Angular CLI

```bash id="g5m2x9"
ng g directive highlight
```

### 👉 Resultado

Genera automáticamente la directiva.

---

## 📘 🟡 Ejemplo básico

### 💡 TypeScript

```ts id="h8v1q7"
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
}
```

---

### 💡 HTML

```html id="k3m7v2"
<p appHighlight>Texto resaltado</p>
```

---

## 📘 🟠 Escuchar eventos

### 🧠 Qué es

Se usa `HostListener` para reaccionar a eventos del DOM.

### 💡 Ejemplo

```ts id="n9v4x1"
import { HostListener } from '@angular/core';

@HostListener('mouseenter')
onMouseEnter() {
  this.el.nativeElement.style.color = 'red';
}
```

---

## 📘 🔴 Modificar el DOM (Buena práctica)

### 🧠 Qué es

Se recomienda usar `Renderer2` en lugar de manipular el DOM directamente.

### 💡 Ejemplo

```ts id="p2m8v5"
constructor(private el: ElementRef, private renderer: Renderer2) {}

ngOnInit() {
  this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
}
```

### 👉 Idea clave

Evita manipular el DOM directamente.

---

## 📘 ⚫ Recibir valores (@Input)

### 🧠 Qué es

Permite configurar la directiva desde el HTML.

---

### 💡 Ejemplo (TypeScript)

```ts id="r7v2m9"
@Input() appHighlight: string = '';

ngOnInit() {
  this.renderer.setStyle(
    this.el.nativeElement,
    'color',
    this.appHighlight
  );
}
```

---

### 💡 HTML

```html id="t4m8x3"
<p [appHighlight]="'green'">Texto</p>
```

---

## ⚠️ Cosas importantes

- Las directivas personalizadas reutilizan lógica en el DOM.
- Pueden ser de atributo o estructurales.
- `Renderer2` es la forma recomendada de manipular el DOM.
- `HostListener` permite escuchar eventos.
- `@Input` permite personalización desde el HTML.

---

## ✨ Tip

Usa directivas cuando necesites reutilizar comportamiento visual o lógico en múltiples elementos del DOM sin duplicar código.

## 📘 ⚪ Registro

### 🧠 Qué es

Debe declararse en un módulo de Angular.

### 💡 Ejemplo

```ts id="m1v8x3"
declarations: [HighlightDirective];
```

---

## 📘 🟤 ¿Cuándo usar directivas?

### 🧠 Casos de uso

- Reutilizar comportamiento
- Aplicar lógica en múltiples elementos
- Evitar repetir código
- Crear funcionalidades personalizadas

---

## 📘 🟢 Buenas prácticas

### ✔ Recomendaciones

- Usar `Renderer2`
- Hacerlas reutilizables
- Mantenerlas simples
- Usar nombres claros (ej: `appHighlight`)

---

## 📘 🟡 Errores comunes

### ❌ Evitar

- Manipular el DOM directamente
- No usar el selector correcto
- Hacer lógica demasiado compleja
- No declararlas en el módulo

---

## ⚠️ Cosas importantes

- `selector` con `[]` = atributo
- No crean HTML
- Modifican comportamiento del DOM
- Son reutilizables

---

## ✨ Resumen

### 🧠 Idea clave

Custom Directives = lógica reutilizable en HTML.

---

### 👉 En pocas palabras

- Modifican comportamiento o estilos
- Se crean con `@Directive`
- Se usan como atributos

---

### 🚀 Conclusión

Son una forma poderosa de extender Angular sin duplicar código.
