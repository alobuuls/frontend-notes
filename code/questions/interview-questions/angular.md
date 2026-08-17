# 🅰️ 10. ANGULAR

## 📑 ÍNDICE

- [🅰️ 10. ANGULAR](#️-10-angular)
  - [📑 ÍNDICE](#-índice)
- [🧩 ANGULAR BÁSICO](#-angular-básico)
  - [1. ❓ ¿QUÉ ES ANGULAR?](#1--qué-es-angular)
  - [2. ❓ ¿QUÉ DIFERENCIA HAY ENTRE ANGULAR Y ANGULARJS?](#2--qué-diferencia-hay-entre-angular-y-angularjs)
    - [🟠 AngularJS](#-angularjs)
    - [🔵 Angular](#-angular)
    - [🔎 Diferencia conceptual](#-diferencia-conceptual)
  - [3. ❓ ¿QUÉ ES UN COMPONENTE?](#3--qué-es-un-componente)
  - [4. ❓ ¿QUÉ ES UN MÓDULO?](#4--qué-es-un-módulo)
  - [5. ❓ ¿QUÉ ES UN SERVICIO?](#5--qué-es-un-servicio)
  - [6. ❓ ¿QUÉ ES DEPENDENCY INJECTION?](#6--qué-es-dependency-injection)
    - [❌ Sin DI](#-sin-di)
    - [✅ Con DI](#-con-di)
    - [💡 ¿Por qué es útil?](#-por-qué-es-útil)
- [7. ❓ ¿QUÉ ES UN DECORATOR?](#7--qué-es-un-decorator)
    - [🧩 Otros ejemplos](#-otros-ejemplos)
- [8. ❓ ¿QUÉ ES UN TEMPLATE?](#8--qué-es-un-template)
    - [📄 Template](#-template)
- [9. ❓ ¿QUÉ ES DATA BINDING?](#9--qué-es-data-binding)
- [10. ❓ ¿QUÉ TIPOS DE DATA BINDING EXISTEN?](#10--qué-tipos-de-data-binding-existen)
  - [🔹 1. INTERPOLATION](#-1-interpolation)
  - [🔹 2. PROPERTY BINDING](#-2-property-binding)
  - [🔹 3. EVENT BINDING](#-3-event-binding)
  - [🔹 4. TWO-WAY BINDING](#-4-two-way-binding)
    - [📊 Resumen](#-resumen)
- [🧩 COMPONENTES](#-componentes)
- [11. ❓ ¿QUÉ ES `@COMPONENT`?](#11--qué-es-component)
- [12. ❓ ¿QUÉ ES `@INPUT()`?](#12--qué-es-input)
    - [👨‍👦 Padre](#-padre)
    - [📄 Template del padre](#-template-del-padre)
    - [👶 Hijo](#-hijo)
- [13. ❓ ¿QUÉ ES `@OUTPUT()`?](#13--qué-es-output)
    - [👶 Hijo](#-hijo-1)
    - [👨‍👦 Template del padre](#-template-del-padre-1)
- [14. ❓ ¿CÓMO SE COMUNICAN DOS COMPONENTES?](#14--cómo-se-comunican-dos-componentes)
    - [👨‍👦 Padre → Hijo](#-padre--hijo)
    - [👦 → 👨 Hijo → Padre](#---hijo--padre)
    - [👥 Componentes hermanos](#-componentes-hermanos)
    - [🌳 Componentes alejados](#-componentes-alejados)
- [15. ❓ ¿QUÉ DIFERENCIA HAY ENTRE SMART COMPONENT Y DUMB COMPONENT?](#15--qué-diferencia-hay-entre-smart-component-y-dumb-component)
  - [🧠 Smart Component](#-smart-component)
  - [🎨 Dumb Component](#-dumb-component)
    - [🏗️ Arquitectura](#️-arquitectura)
- [16. ❓ ¿QUÉ ES `VIEWCHILD`?](#16--qué-es-viewchild)
- [17. ❓ ¿QUÉ ES `CONTENTCHILD`?](#17--qué-es-contentchild)
    - [🔎 Diferencia fundamental](#-diferencia-fundamental)
- [🔄 LIFECYCLE](#-lifecycle)
  - [18. ❓ ¿QUÉ ES EL CICLO DE VIDA DE UN COMPONENTE?](#18--qué-es-el-ciclo-de-vida-de-un-componente)
    - [🪝 Los más importantes](#-los-más-importantes)
- [🔄 LIFECYCLE](#-lifecycle-1)
  - [19. ❓ ¿QUÉ HACE `NGONINIT()`?](#19--qué-hace-ngoninit)
    - [💻 Ejemplo](#-ejemplo)
  - [20. ❓ ¿QUÉ HACE `NGONCHANGES()`?](#20--qué-hace-ngonchanges)
  - [21. ❓ ¿QUÉ HACE `NGAFTERVIEWINIT()`?](#21--qué-hace-ngafterviewinit)
    - [💻 Ejemplo](#-ejemplo-1)
  - [22. ❓ ¿QUÉ HACE `NGONDESTROY()`?](#22--qué-hace-ngondestroy)
  - [23. ❓ ¿CUÁNDO UTILIZARÍAS CADA LIFECYCLE HOOK?](#23--cuándo-utilizarías-cada-lifecycle-hook)
    - [🧩 Ejemplo completo](#-ejemplo-completo)
- [🧠 RESUMEN ANGULAR BÁSICO](#-resumen-angular-básico)
- [🧠 RESUMEN DE COMPONENTES](#-resumen-de-componentes)
- [🔄 RESUMEN LIFECYCLE](#-resumen-lifecycle)


# 🧩 ANGULAR BÁSICO

## 1. ❓ ¿QUÉ ES ANGULAR?

> 💡 **Angular es un framework de desarrollo frontend basado en TypeScript**, mantenido por Google, que permite construir aplicaciones web completas y escalables.

Angular proporciona muchas herramientas integradas:

| 🧩  | Herramienta          |
| --- | -------------------- |
| 🧩  | Componentes          |
| 🛣️ | Routing              |
| 🌐  | HTTP Client          |
| 📝  | Forms                |
| 💉  | Dependency Injection |
| 🔄  | RxJS                 |
| 🛡️ | Guards               |
| 🔌  | Interceptors         |
| 🧪  | Testing              |
| 🏗️ | CLI                  |

Una aplicación Angular normalmente se construye a partir de **componentes que forman un árbol**.

```text
AppComponent
│
├── HeaderComponent
├── SidebarComponent
├── UsersComponent
│   ├── UserListComponent
│   └── UserCardComponent
└── FooterComponent
```

Cada componente puede tener:

* una clase TypeScript
* un template HTML
* estilos
* lógica propia

> 🎯 **Entrevista**
>
> Angular es un framework frontend basado en TypeScript que permite construir aplicaciones web escalables mediante componentes y proporciona herramientas integradas como routing, formularios, HTTP y dependency injection.

---

## 2. ❓ ¿QUÉ DIFERENCIA HAY ENTRE ANGULAR Y ANGULARJS?

Esta es una pregunta clásica.

### 🟠 AngularJS

AngularJS fue la primera versión del framework y utilizaba principalmente **JavaScript**.

Su arquitectura estaba basada en conceptos como:

* Controllers
* `$scope`
* Directivas
* Dependency Injection

### 🔵 Angular

Angular fue una **reescritura completa** del framework.

Utiliza principalmente:

* TypeScript
* Componentes
* Decorators
* Dependency Injection
* RxJS
* CLI
* Routing
* Reactive Forms

### 🔎 Diferencia conceptual

| AngularJS             | Angular              |
| --------------------- | -------------------- |
| JavaScript            | TypeScript           |
| `$scope`              | Components           |
| Controllers           | Services             |
| Arquitectura original | Reescritura completa |

```text
AngularJS
JavaScript
    ↓
$scope
    ↓
Controllers
```

```text
Angular
TypeScript
    ↓
Components
    ↓
Services
    ↓
Dependency Injection
```

> 🎯 **Entrevista**
>
> AngularJS y Angular son tecnologías diferentes. AngularJS corresponde a la versión original basada principalmente en JavaScript, mientras que Angular es una reescritura completa basada en TypeScript y componentes.

---

## 3. ❓ ¿QUÉ ES UN COMPONENTE?

> 🧩 **Un componente es una pieza independiente de la interfaz de usuario.**

Un componente normalmente contiene:

```text
Component
├── TypeScript → lógica
├── HTML       → template
└── CSS        → estilos
```

Por ejemplo:

```ts
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  name = 'Alo';
}
```

Y su template:

```html
<h2>{{ name }}</h2>
```

Los componentes forman un árbol:

```text
AppComponent
    │
    ├── HeaderComponent
    ├── UsersComponent
    │       └── UserCardComponent
    └── FooterComponent
```

> 🎯 **Entrevista**
>
> Un componente es una unidad reutilizable de la interfaz que encapsula una parte de la UI junto con su lógica, template y estilos.

---

## 4. ❓ ¿QUÉ ES UN MÓDULO?

En Angular tradicional, especialmente en aplicaciones basadas en **NgModules**, un módulo es una forma de **organizar y agrupar funcionalidades relacionadas**.

Por ejemplo:

```ts
@NgModule({
  declarations: [
    UsersComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class UsersModule {}
```

Un módulo puede agrupar:

* Componentes
* Directivas
* Pipes
* Imports
* Providers

```text
UsersModule
│
├── UsersComponent
├── UserCardComponent
├── UserPipe
└── ReactiveFormsModule
```

> ⚠️ **Importante en Angular moderno**
>
> Desde Angular 14 existen los **standalone components**, que permiten construir aplicaciones sin depender de `NgModule` para organizar cada funcionalidad.
>
> Por eso, en una entrevista moderna conviene saber ambas arquitecturas.

> 🎯 **Entrevista**
>
> En Angular basado en NgModules, un módulo agrupa componentes, directivas, pipes, imports y providers relacionados. En Angular moderno también existen los standalone components, que permiten reducir la dependencia de NgModules.

---

## 5. ❓ ¿QUÉ ES UN SERVICIO?

> 🛠️ **Un service es una clase destinada a encapsular lógica que queremos reutilizar o separar de los componentes.**

Por ejemplo, un servicio para obtener usuarios:

```ts
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>('/api/users');
  }
}
```

El componente puede utilizarlo:

```ts
export class UsersComponent {

  constructor(private usersService: UsersService) {}

  loadUsers() {
    this.usersService.getUsers();
  }
}
```

Los servicios suelen utilizarse para:

| Uso |                               |
| --- | ----------------------------- |
| 🌐  | Peticiones HTTP               |
| 🔐  | Autenticación                 |
| 💾  | Manejo de datos               |
| 🧠  | Lógica de negocio             |
| 🔄  | Estado compartido             |
| 🛠️ | Funcionalidades reutilizables |

> 🎯 **Entrevista**
>
> Un servicio es una clase que encapsula lógica reutilizable, como llamadas HTTP, autenticación o lógica de negocio, evitando colocar toda esa responsabilidad dentro de los componentes.

---

## 6. ❓ ¿QUÉ ES DEPENDENCY INJECTION?

> 💉 **Dependency Injection (DI)** es un patrón mediante el cual una clase recibe las dependencias que necesita desde el exterior en lugar de crearlas directamente.

### ❌ Sin DI

```ts
class UsersComponent {

  private service = new UsersService();

}
```

El componente crea directamente la dependencia.

### ✅ Con DI

```ts
constructor(
  private usersService: UsersService
) {}
```

Angular se encarga de proporcionar `UsersService`.

```text
UsersComponent
      │
      │ necesita
      ▼
UsersService
      ▲
      │
Angular Injector
```

### 💡 ¿Por qué es útil?

Porque permite:

* ♻️ Reutilización
* 🧪 Testing más sencillo
* 🧩 Menor acoplamiento
* 🏗️ Mejor arquitectura

> 🎯 **Entrevista**
>
> Dependency Injection es un patrón en el que una clase recibe sus dependencias en lugar de crearlas directamente. Angular cuenta con un sistema de inyección de dependencias que administra esas instancias.

# 7. ❓ ¿QUÉ ES UN DECORATOR?

> 💡 Un **decorator** es una función especial que permite añadir metadatos o modificar el comportamiento de una clase, propiedad, método o parámetro.

Angular utiliza decorators constantemente.

Por ejemplo:

```ts
@Component({
  selector: 'app-user',
  template: '<p>User</p>'
})
export class UserComponent {}
```

`@Component()` le indica a Angular que esa clase es un componente y proporciona información sobre cómo debe tratarlo.

### 🧩 Otros ejemplos

| Decorator       |   |
| --------------- | - |
| `@Injectable()` |   |
| `@Input()`      |   |
| `@Output()`     |   |
| `@Directive()`  |   |
| `@Pipe()`       |   |

> 🎯 **Entrevista**
>
> Un decorator permite añadir metadatos o comportamiento a una clase, propiedad, método o parámetro. Angular los utiliza para identificar y configurar elementos como componentes, servicios, directivas y pipes.

---

# 8. ❓ ¿QUÉ ES UN TEMPLATE?

> 🧩 El **template** es la parte HTML que define la interfaz visual de un componente.

Ejemplo:

```ts
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
```

### 📄 Template

```html
<h1>{{ name }}</h1>

<button (click)="sayHello()">
  Say hello
</button>
```

El template puede utilizar características de Angular como:

| Característica   |
| ---------------- |
| Interpolation    |
| Property binding |
| Event binding    |
| Directives       |
| Pipes            |
| Control flow     |
| Two-way binding  |

> 🎯 **Entrevista**
>
> El template es la vista HTML de un componente y permite utilizar la sintaxis de Angular para mostrar datos, reaccionar a eventos y controlar dinámicamente la interfaz.

---

# 9. ❓ ¿QUÉ ES DATA BINDING?

> 🔗 **Data Binding es el mecanismo que permite conectar los datos y la lógica de un componente con su template.**

Permite comunicar:

```text
Component
   ↕
Template
```

Angular tiene principalmente cuatro formas de binding:

```text
Interpolation
Property Binding
Event Binding
Two-way Binding
```

---

# 10. ❓ ¿QUÉ TIPOS DE DATA BINDING EXISTEN?

## 🔹 1. INTERPOLATION

Utiliza:

```html
{{ }}
```

Permite mostrar valores del componente en el template.

```ts
name = 'Alo';
```

```html
<h1>{{ name }}</h1>
```

Resultado:

```text
Alo
```

Es principalmente:

```text
Component → Template
```

---

## 🔹 2. PROPERTY BINDING

Utiliza:

```html
[property]="value"
```

Permite establecer propiedades de elementos HTML o componentes/directivas.

```ts
imageUrl = 'profile.jpg';
```

```html
<img [src]="imageUrl">
```

Otro ejemplo:

```html
<button [disabled]="isLoading">
  Save
</button>
```

Aquí Angular establece la propiedad `disabled` basándose en `isLoading`.

---

## 🔹 3. EVENT BINDING

Utiliza:

```html
(event)="function()"
```

Permite reaccionar a eventos del usuario.

```html
<button (click)="sayHello()">
  Click me
</button>
```

También podemos obtener el evento:

```html
<input (input)="onInput($event)">
```

Esto representa:

```text
Template → Component
```

---

## 🔹 4. TWO-WAY BINDING

Permite sincronizar el componente y el template en ambas direcciones.

La sintaxis tradicional es:

```html
[(ngModel)]="name"
```

Por ejemplo:

```ts
name = '';
```

```html
<input [(ngModel)]="name">

<p>{{ name }}</p>
```

Si el usuario escribe:

```text
Alo
```

`name` se actualiza automáticamente.

Y si `name` cambia desde el componente, el input también se actualiza.

Conceptualmente:

```text
Component ↔ Template
```

### 📊 Resumen

| Binding       | Sintaxis      | Dirección            |
| ------------- | ------------- | -------------------- |
| Interpolation | `{{ value }}` | Component → Template |
| Property      | `[property]`  | Component → Template |
| Event         | `(event)`     | Template → Component |
| Two-way       | `[(...)]`     | Ambas                |

> 🧠 **Truco para recordar**
>
> ```text
> {{ }}    → Mostrar
> [ ]      → Enviar
> ( )      → Escuchar
> [( )]    → Sincronizar
> ```

---

# 🧩 COMPONENTES

# 11. ❓ ¿QUÉ ES `@COMPONENT`?

> 🧩 `@Component()` es un decorator que le indica a Angular que una clase representa un componente.

Ejemplo:

```ts
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {}
```

Dentro de `@Component()` podemos configurar aspectos como:

```ts
selector
template
templateUrl
styles
styleUrls
imports
providers
encapsulation
```

> 🎯 **Entrevista**
>
> `@Component` es el decorator que define una clase como componente de Angular y permite configurar su selector, template, estilos, dependencias y otros metadatos.

---

# 12. ❓ ¿QUÉ ES `@INPUT()`?

> 📥 `@Input()` permite **recibir información desde un componente padre hacia un componente hijo**.

### 👨‍👦 Padre

```ts
user = {
  name: 'Alo',
  age: 25
};
```

### 📄 Template del padre

```html
<app-user-card
  [user]="user">
</app-user-card>
```

### 👶 Hijo

```ts
@Input() user!: User;
```

La comunicación es:

```text
PADRE
  │
  │ @Input
  ▼
HIJO
```

> 🎯 **Entrevista**
>
> `@Input()` permite que un componente hijo reciba datos desde su componente padre mediante property binding.

# 13. ❓ ¿QUÉ ES `@OUTPUT()`?

> 📤 `@Output()` permite que un componente hijo **emita eventos hacia su componente padre**.

### 👶 Hijo

```ts
@Output() deleted = new EventEmitter<number>();

deleteUser(id: number) {
  this.deleted.emit(id);
}
```

### 👨‍👦 Template del padre

```html
<app-user
  (deleted)="onUserDeleted($event)">
</app-user>
```

La comunicación:

```text
PADRE
  ▲
  │ @Output
  │
HIJO
```

> 🎯 **Entrevista**
>
> `@Output()` permite que un componente hijo comunique eventos al padre utilizando normalmente un `EventEmitter`.

---

# 14. ❓ ¿CÓMO SE COMUNICAN DOS COMPONENTES?

Depende de la relación entre ellos.

| Relación                | Solución principal                                   |
| ----------------------- | ---------------------------------------------------- |
| 👨‍👦 Padre → Hijo      | `@Input()`                                           |
| 👦 → 👨 Hijo → Padre    | `@Output()`                                          |
| 👥 Componentes hermanos | Servicio compartido                                  |
| 🌳 Componentes alejados | Servicios, Signals, State management, Router, Stores |

### 👨‍👦 Padre → Hijo

Utilizamos:

```text
@Input()
```

```html
<app-child [user]="user"></app-child>
```

---

### 👦 → 👨 Hijo → Padre

Utilizamos:

```text
@Output()
```

```html
<app-child
  (userSelected)="onUserSelected($event)">
</app-child>
```

---

### 👥 Componentes hermanos

Normalmente se utiliza un **servicio compartido**.

```text
Component A
     │
     ▼
 Shared Service
     ▲
     │
Component B
```

Dependiendo de la aplicación, el servicio puede utilizar:

* Signals
* RxJS
* Subjects
* BehaviorSubject
* State management

---

### 🌳 Componentes alejados

También podemos utilizar:

* Servicios
* Signals
* State management
* Router
* Stores

> 🎯 **Entrevista**
>
> Para padre e hijo utilizaría `@Input()` y `@Output()`. Para componentes hermanos o componentes alejados normalmente utilizaría un servicio compartido o una solución de manejo de estado.

---

# 15. ❓ ¿QUÉ DIFERENCIA HAY ENTRE SMART COMPONENT Y DUMB COMPONENT?

Esta es principalmente una **distinción arquitectónica**, no una característica obligatoria de Angular.

## 🧠 Smart Component

También llamado:

> **Container Component**

Se encarga principalmente de la lógica.

Puede:

* Obtener datos
* Consumir servicios
* Manejar estado
* Ejecutar acciones
* Coordinar componentes

Ejemplo:

```ts
export class UsersComponent {

  users$ = this.usersService.getUsers();

  constructor(
    private usersService: UsersService
  ) {}
}
```

---

## 🎨 Dumb Component

También llamado:

> **Presentational Component**

Se concentra principalmente en mostrar información.

Recibe datos:

```ts
@Input() user!: User;
```

Y emite eventos:

```ts
@Output() selected = new EventEmitter<User>();
```

Idealmente tiene poca lógica de negocio.

### 🏗️ Arquitectura

```text
Smart Component
      │
      ├── obtiene datos
      │
      ▼
Dumb Component
      │
      ├── muestra datos
      └── emite eventos
```

> 🎯 **Entrevista**
>
> Un Smart Component contiene principalmente lógica, estado y acceso a servicios, mientras que un Dumb Component se enfoca en presentar información y comunicarse mediante inputs y outputs. Esta separación ayuda a mantener componentes más reutilizables y fáciles de probar.

---

# 16. ❓ ¿QUÉ ES `VIEWCHILD`?

> 👁️ `@ViewChild()` permite obtener una referencia a un elemento, componente o directiva **dentro de la vista del propio componente**.

Por ejemplo:

```html
<input #inputElement>
```

```ts
@ViewChild('inputElement')
inputElement!: ElementRef<HTMLInputElement>;
```

Después podemos acceder al elemento:

```ts
this.inputElement.nativeElement.focus();
```

También podemos obtener componentes:

```html
<app-child></app-child>
```

```ts
@ViewChild(ChildComponent)
child!: ChildComponent;
```

Entonces podemos acceder a sus métodos:

```ts
this.child.someMethod();
```

> ⚠️ **Importante**
>
> La referencia normalmente está disponible después de que Angular inicializa la vista, por lo que suele utilizarse con:
>
> ```ts
> ngAfterViewInit()
> ```

> 🎯 **Entrevista**
>
> `ViewChild` permite obtener una referencia a un elemento, directiva o componente que forma parte de la vista del componente actual.

---

# 17. ❓ ¿QUÉ ES `CONTENTCHILD`?

> 📦 `@ContentChild()` permite obtener una referencia a un elemento, componente o directiva que fue **proyectado dentro del componente mediante content projection**.

Por ejemplo:

```html
<app-card>
  <p #description>
    Hello
  </p>
</app-card>
```

El componente `CardComponent` puede obtener esa referencia:

```ts
@ContentChild('description')
description!: ElementRef;
```

### 🔎 Diferencia fundamental

| Decorator      | Busca                           |
| -------------- | ------------------------------- |
| `ViewChild`    | Dentro de la propia vista       |
| `ContentChild` | Dentro del contenido proyectado |

```text
ViewChild
→ busca dentro de la propia vista

ContentChild
→ busca dentro del contenido proyectado
```

Visualmente:

```text
<app-card>

    CONTENIDO PROYECTADO
    └── <p #description>

</app-card>
```

> 🎯 **Entrevista**
>
> `ContentChild` permite obtener una referencia a contenido proyectado dentro de un componente, mientras que `ViewChild` busca elementos dentro de la propia vista del componente.

---

# 🔄 LIFECYCLE

## 18. ❓ ¿QUÉ ES EL CICLO DE VIDA DE UN COMPONENTE?

> 🔄 El **lifecycle** es el conjunto de etapas por las que pasa un componente desde que Angular lo crea hasta que lo destruye.

Conceptualmente:

```text
CREATE
  ↓
CHANGE DETECTION
  ↓
VIEW INITIALIZATION
  ↓
UPDATES
  ↓
DESTROY
```

Angular proporciona lifecycle hooks para ejecutar código en determinados momentos.

### 🪝 Los más importantes

```ts
ngOnChanges()
ngOnInit()
ngAfterViewInit()
ngOnDestroy()
```

# 🔄 LIFECYCLE

## 19. ❓ ¿QUÉ HACE `NGONINIT()`?

> 🟢 `ngOnInit()` se ejecuta una vez después de que Angular inicializa las propiedades de entrada del componente.

Es uno de los hooks más utilizados.

```ts
ngOnInit(): void {
  this.loadUsers();
}
```

Suele utilizarse para:

* Inicializar datos
* Realizar llamadas HTTP
* Inicializar lógica
* Configurar valores iniciales

### 💻 Ejemplo

```ts
export class UsersComponent implements OnInit {

  users: User[] = [];

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    // ...
  }
}
```

> 🎯 **Entrevista**
>
> `ngOnInit` se ejecuta una vez después de la inicialización de las propiedades de entrada y se utiliza normalmente para realizar la inicialización del componente.

---

## 20. ❓ ¿QUÉ HACE `NGONCHANGES()`?

> 🔄 `ngOnChanges()` se ejecuta cuando cambia alguna propiedad marcada con `@Input()`.

Ejemplo:

```ts
@Input() userId!: number;

ngOnChanges(changes: SimpleChanges): void {
  console.log(changes);
}
```

Si el padre cambia:

```ts
this.userId = 10;
```

Angular puede ejecutar:

```ts
ngOnChanges()
```

Además, recibe información sobre el cambio:

```ts
ngOnChanges(changes: SimpleChanges): void {

  const change = changes['userId'];

  console.log(change.previousValue);
  console.log(change.currentValue);
}
```

> 🎯 **Entrevista**
>
> `ngOnChanges` se ejecuta cuando cambian los valores de las propiedades `@Input()` y permite reaccionar a esos cambios.

---

## 21. ❓ ¿QUÉ HACE `NGAFTERVIEWINIT()`?

> 👁️ `ngAfterViewInit()` se ejecuta después de que Angular inicializa completamente la vista del componente.

Es especialmente útil cuando necesitamos acceder a elementos obtenidos mediante:

```ts
@ViewChild()
```

### 💻 Ejemplo

```ts
@ViewChild('input')
input!: ElementRef;

ngAfterViewInit(): void {
  this.input.nativeElement.focus();
}
```

> 🎯 **Entrevista**
>
> `ngAfterViewInit` se ejecuta después de que la vista del componente ha sido inicializada y es útil cuando necesitamos interactuar con elementos o componentes obtenidos mediante `ViewChild`.

---

## 22. ❓ ¿QUÉ HACE `NGONDESTROY()`?

> 🗑️ `ngOnDestroy()` se ejecuta justo antes de que Angular destruya el componente.

Es importante para realizar tareas de limpieza.

Por ejemplo:

* Cancelar subscriptions manuales
* Limpiar timers
* Eliminar listeners
* Liberar recursos

```ts
ngOnDestroy(): void {
  clearInterval(this.interval);
}
```

Con RxJS también puede utilizarse para gestionar el ciclo de vida de subscriptions, aunque en Angular moderno existen herramientas como:

```ts
takeUntilDestroyed()
```

que simplifican este patrón.

> 🎯 **Entrevista**
>
> `ngOnDestroy` se ejecuta antes de destruir el componente y se utiliza para liberar recursos, limpiar timers, listeners o subscriptions que necesiten gestión manual.

---

## 23. ❓ ¿CUÁNDO UTILIZARÍAS CADA LIFECYCLE HOOK?

> 🧠 Esta pregunta es excelente para comprobar si realmente entiendes Angular.

| Hook              | ¿Cuándo?             | Uso típico                 |
| ----------------- | -------------------- | -------------------------- |
| `ngOnChanges`     | Cambia un `@Input()` | Reaccionar a cambios       |
| `ngOnInit`        | Inicialización       | Cargar datos / inicializar |
| `ngAfterViewInit` | Vista inicializada   | `ViewChild`, DOM           |
| `ngOnDestroy`     | Antes de destruir    | Limpieza                   |

### 🧩 Ejemplo completo

```ts
export class UserComponent
  implements OnChanges, OnInit, AfterViewInit, OnDestroy {

  @Input() userId!: number;

  ngOnChanges(): void {
    // Cambió userId
  }

  ngOnInit(): void {
    // Inicialización
  }

  ngAfterViewInit(): void {
    // Vista lista
  }

  ngOnDestroy(): void {
    // Limpieza
  }
}
```

> 🎯 **Respuesta de entrevista**
>
> Utilizaría `ngOnChanges` cuando necesito reaccionar a cambios en inputs, `ngOnInit` para la inicialización del componente, `ngAfterViewInit` cuando necesito acceder a elementos de la vista y `ngOnDestroy` para realizar tareas de limpieza antes de destruir el componente.

---

# 🧠 RESUMEN ANGULAR BÁSICO

```text
ANGULAR
│
├── 🧩 Component
│   └── Unidad de UI
│
├── 📦 Module
│   └── Agrupa funcionalidades
│
├── 🔧 Service
│   └── Lógica reutilizable
│
├── 💉 Dependency Injection
│   └── Proporciona dependencias
│
├── 🏷️ Decorator
│   └── Metadatos/configuración
│
├── 🎨 Template
│   └── Vista HTML
│
└── 🔗 Data Binding
    ├── {{ }}   → Interpolation
    ├── [ ]     → Property Binding
    ├── ( )     → Event Binding
    └── [( )]   → Two-way Binding
```

---

# 🧠 RESUMEN DE COMPONENTES

```text
PADRE
│
├── [data]="value"
│       ↓
│    @Input()
│       ↓
│      HIJO
│       │
│       │ @Output()
│       ↓
└── (event)="handler($event)"
```

Y para comunicación más compleja:

```text
Component A
     ↕
Service / State
     ↕
Component B
```

---

# 🔄 RESUMEN LIFECYCLE

```text
@Input cambia
      ↓
ngOnChanges()
      ↓
ngOnInit()
      ↓
ngAfterViewInit()
      ↓
Componente funcionando
      ↓
ngOnDestroy()
      ↓
Componente destruido
```

> ⚠️ **Matiz importante para entrevista:** ese orden es una simplificación útil. `ngOnChanges` puede ejecutarse antes de `ngOnInit` cuando existen inputs, y `ngOnChanges` vuelve a ejecutarse posteriormente cada vez que cambian esos inputs. Además, Angular moderno incluye otros hooks como `ngAfterContentInit`, `ngAfterContentChecked`, `ngAfterViewChecked` y hooks relacionados con cambios de renderizado.
