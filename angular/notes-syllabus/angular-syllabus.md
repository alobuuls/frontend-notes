# 🧱 1. ¿Qué es Angular y cómo funciona?

🧠 Angular es un framework frontend para construir aplicaciones web modernas

👉 Se basa en TypeScript y arquitectura modular

---

## 📘 🟢 ¿QUÉ ES ANGULAR?

🧠 Es un framework completo para construir SPAs

✔ Usa componentes
✔ Usa TypeScript
✔ Tiene routing, servicios, HTTP integrado

---

## 🌐 SPA (Single Page Application)

🧠 La aplicación carga una sola página

👉 Solo cambia el contenido sin recargar el navegador

💡 Ejemplo:

- Navegas /home → /about
- NO recarga la página completa

---

## 🧱 ARQUITECTURA BASADA EN COMPONENTES

🧠 Todo en Angular son componentes

✔ Cada pantalla = componente
✔ Cada UI = componente

---

## ⚔️ ANGULAR vs REACT vs VUE

🧠 Diferencias clave:

✔ Angular → framework completo (todo incluido)
✔ React → librería UI (más flexible)
✔ Vue → intermedio, más simple

---

## ⚙️ INSTALACIÓN

🧠 Requisitos:

✔ Node.js
✔ Angular CLI

💡 Comandos:

```bash
npm install -g @angular/cli
ng new mi-app
ng serve
```

---

# 🧩 2. Estructura de un proyecto Angular

🧠 Angular organiza el código por módulos y componentes

---

## 📁 ARCHIVOS IMPORTANTES

✔ main.ts → punto de entrada
✔ app.module.ts → módulo principal
✔ app.component.ts → componente raíz
✔ app.component.html → vista
✔ app.component.css → estilos

---

## 🧱 ¿QUÉ ES UN MÓDULO?

🧠 Un módulo agrupa partes de la app

✔ componentes
✔ servicios
✔ directivas

💡 Decorador:

```ts
@NgModule({})
```

---

## 🧠 ORGANIZACIÓN INTERNA

👉 Angular arranca desde main.ts
👉 Carga AppModule
👉 Renderiza AppComponent

---

# 🧱 3. COMPONENTES (LO MÁS IMPORTANTE 🔥)

🧠 Un componente es una parte de la UI

---

## 💡 CREAR COMPONENTES

```bash
ng generate component nombre
```

---

## 📦 ESTRUCTURA

✔ .ts → lógica
✔ .html → vista
✔ .css → estilos

---

## 📘 @COMPONENT

🧠 Decorador que define un componente

```ts
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
```

---

## 💡 INTERPOLACIÓN

```html
{{ nombre }}
```

👉 Muestra datos en el HTML

---

# 🔗 4. DATA BINDING (MUY CLAVE)

🧠 Comunicación entre TS y HTML

---

## 📘 TIPOS

✔ Interpolación → {{ }}
✔ Property binding → [value]
✔ Event binding → (click)
✔ Two-way binding → [(ngModel)]

---

## 💡 EJEMPLOS

```html
<input [value]="nombre" />

<button (click)="saludar()"></button>

<input [(ngModel)]="nombre" />
```

---

## ✨ TIP

🧠 Data binding = base de Angular

---

# 🧭 5. DIRECTIVAS

🧠 Manipulan el DOM

---

## 📘 TIPOS

✔ *ngIf → condicional
✔ *ngFor → loops
✔ ngClass → clases dinámicas
✔ ngStyle → estilos dinámicos

---

## 💡 EJEMPLO

```html
<div *ngIf="mostrar">Hola</div>

<li *ngFor="let item of lista">{{ item }}</li>
```

---

# 🧪 6. COMUNICACIÓN ENTRE COMPONENTES

🧠 Comunicación entre componentes

---

## 📘 PADRE → HIJO

✔ @Input()

---

## 📘 HIJO → PADRE

✔ @Output()
✔ EventEmitter

---

## 💡 EJEMPLO

```ts
@Input() data: any;

@Output() evento = new EventEmitter();
```

---

# 🌐 7. SERVICIOS Y ARQUITECTURA

🧠 Services = lógica de negocio

---

## 📘 QUÉ SON

✔ Clases reutilizables
✔ No tienen UI
✔ Centralizan lógica

---

## 💡 CREAR SERVICE

```bash
ng generate service nombre
```

---

## 📘 INYECCIÓN DE DEPENDENCIAS

🧠 Angular inyecta el service automáticamente

# 🌍 8. CONSUMO DE APIs (HTTP)

🧠 Comunicación con backend

---

## 📘 HTTPCLIENT

✔ GET
✔ POST
✔ PUT
✔ DELETE

---

## 💡 EJEMPLO

```ts
this.http.get('/api/users').subscribe((data) => {
  console.log(data);
});
```

---

## 📘 INTERFACES

🧠 Tipado de datos

```ts
interface User {
  name: string;
  age: number;
}
```

---

## ✨ TIP

🧠 Siempre tipa tus respuestas HTTP

---

# 🔄 9. OBSERVABLES (RXJS BÁSICO)

🧠 Manejo de datos asíncronos

---

## 📘 QUÉ ES UN OBSERVABLE

✔ Emite datos en el tiempo
✔ Se escucha con subscribe

---

## 💡 EJEMPLO

```ts
this.observable.subscribe((value) => {
  console.log(value);
});
```

---

## 📘 PIPE

🧠 Permite transformar datos

---

## 📘 OPERADORES

✔ map → transformar
✔ filter → filtrar

---

## ✨ TIP

🧠 RxJS es clave en Angular moderno

👉 HTTP, eventos, forms usan Observables

# 🧠 10. ROUTING (NAVEGACIÓN)

- Configurar rutas
- RouterModule
- Navegación entre páginas
- Parámetros en rutas

---

# 🧾 11. FORMULARIOS

- Template-driven forms
- Reactive forms (más importante)
- Validaciones

---

# 🎯 12. PIPES

- Pipes built-in (date, uppercase)
- Crear pipes personalizados

---

# 🧱 13. MÓDULOS AVANZADOS

- Feature modules
- Lazy loading

---

# ⚙️ 14. BUENAS PRACTICAS

- Estructura escalable
- Separación de responsabilidades
- Tipado correcto
- Naming conventions

```

```
