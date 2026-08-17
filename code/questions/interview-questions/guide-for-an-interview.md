# 🔥 21. GUÍA RÁPIDA DE ENTREVISTA — LAS 30 QUE YO PRIORIZARÍA

Esta es la guía para tener **respuestas rápidas, claras y defendibles** durante una entrevista. La idea no es memorizar párrafos completos, sino recordar **qué decir + el concepto clave**.

---

# 🟨 JAVASCRIPT

## 1. ¿QUÉ ES JAVASCRIPT?

### 💬 Respuesta

JavaScript es un **lenguaje de programación** dinámico y multiparadigma que se utiliza principalmente para crear aplicaciones web interactivas. Puede ejecutarse en el navegador y también fuera de él mediante entornos como Node.js.

### 🧠 Clave

```text
Lenguaje
↓
Frontend
↓
También puede ejecutarse en backend
```

---

## 2. ¿QUÉ DIFERENCIA HAY ENTRE `var`, `let` Y `const`?

### 💬 Respuesta

`var` tiene scope de función y permite redeclaración. `let` y `const` tienen scope de bloque. `let` permite reasignación y `const` no permite reasignar la variable.

```javascript
var a = 1;

let b = 2;
b = 3;

const c = 4;
// c = 5 ❌
```

### 🧠 Importante

| Variable | Scope          | Reasignación    |
| -------- | -------------- | --------------- |
| `var`    | function scope | redeclarable    |
| `let`    | block scope    | reassignable    |
| `const`  | block scope    | no reassignment |

⚠️ `const` no hace que un objeto sea inmutable:

```javascript
const user = { name: 'Alo' };

user.name = 'John'; // ✅
```

---

## 3. ¿QUÉ ES HOISTING?

### 💬 Respuesta

Hoisting es el comportamiento por el cual JavaScript procesa declaraciones antes de ejecutar el código del scope correspondiente. Sin embargo, el comportamiento depende de si usamos `var`, `let`, `const` o funciones.

```javascript
console.log(a);
var a = 10;
```

Produce:

```text
undefined
```

Mientras que:

```javascript
console.log(a);
let a = 10;
```

produce un `ReferenceError` porque `a` está en la **Temporal Dead Zone**.

---

## 4. ¿QUÉ ES SCOPE?

### 💬 Respuesta

Scope es el **alcance en el que una variable puede ser accedida**.

Los principales son:

```text
Global Scope
Function Scope
Block Scope
```

Ejemplo:

```javascript
if (true) {
  let x = 10;
}

console.log(x); // ❌
```

`x` solamente existe dentro del bloque.

> [!TIP]
>
> ### 🧠 Clave
>
> Scope determina **dónde puedo acceder a una variable**.

---

## 5. ¿QUÉ ES CLOSURE?

### 💬 Respuesta

Un closure ocurre cuando una función **recuerda y puede acceder a variables de su scope externo incluso después de que la función externa haya terminado de ejecutarse**.

```javascript
function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const increment = counter();

increment(); // 1
increment(); // 2
```

La función interna sigue teniendo acceso a `count`.

### 🧠 Clave

```text
Función interna
+
Scope externo
+
Recuerda variables
=
Closure
```

---

## 6. ¿QUÉ ES `this`?

### 💬 Respuesta

`this` es una referencia cuyo valor depende principalmente de **cómo se invoca una función**.

Por ejemplo:

```javascript
const user = {
  name: 'Alo',
  sayHi() {
    console.log(this.name);
  }
};
```

Aquí:

```javascript
user.sayHi();
```

`this` hace referencia a `user`.

> [!WARNING]
>
> ### ⚠️ Importante
>
> Las arrow functions no tienen su propio `this`; heredan el `this` del contexto externo.

---

## 7. ¿QUÉ DIFERENCIA HAY ENTRE `==` Y `===`?

### 💬 Respuesta

`==` realiza comparación con **coerción de tipos**, mientras que `===` compara valor y tipo sin coerción implícita.

```javascript
1 == '1'   // true
1 === '1'  // false
```

Por eso generalmente se prefiere:

```javascript
===
```

### 🧠 Clave

| Operador | Comportamiento |
| -------- | -------------- |
| `==`     | coerción       |
| `===`    | valor + tipo   |

---

## 8. ¿QUÉ ES EL EVENT LOOP?

### 💬 Respuesta

El Event Loop es el mecanismo mediante el cual JavaScript coordina la ejecución del código síncrono con tareas asíncronas, permitiendo gestionar operaciones como timers, eventos y callbacks.

Ejemplo:

```javascript
setTimeout(() => {
  console.log('A');
}, 0);

console.log('B');
```

Resultado:

```text
B
A
```

Porque el código síncrono se ejecuta primero y el callback de `setTimeout` se procesa posteriormente cuando corresponde.

### 🧠 Clave

```text
Call Stack
↓
Web APIs / runtime
↓
Task Queue
↓
Event Loop
↓
Call Stack
```

---

## 9. ¿QUÉ ES UNA PROMISE?

### 💬 Respuesta

Una Promise representa el resultado eventual de una operación asíncrona.

Tiene tres estados principales:

```text
pending
fulfilled
rejected
```

Ejemplo:

```javascript
fetch('/users')
  .then(response => response.json())
  .catch(error => console.error(error));
```

También puede utilizarse con:

```javascript
async / await
```

> [!TIP]
>
> ### 🧠 Clave
>
> Una Promise normalmente representa **un resultado futuro**.

---

# 🔥 21. GUÍA RÁPIDA DE ENTREVISTA — 10–19

## 10. ¿QUÉ DIFERENCIA HAY ENTRE PROMISE Y OBSERVABLE?

### 💬 Respuesta

Una Promise representa normalmente **un único resultado futuro**, mientras que un Observable puede producir **múltiples valores a lo largo del tiempo** y permite operaciones como cancelación mediante desuscripción y composición con operadores.

| Promise                  | Observable               |
| ------------------------ | ------------------------ |
| Un resultado             | 0, 1 o múltiples valores |
| Empieza al invocarse     | Generalmente es lazy     |
| `.then()`                | `.subscribe()`           |
| No tiene `unsubscribe()` | Puede desuscribirse      |
| `async/await`            | RxJS                     |

> [!IMPORTANT]
>
> ### 🔥 En Angular
>
> Los Observables son muy utilizados para:
>
> ```text
> HttpClient
> Router
> Forms
> Eventos
> Estado
> ```

---

# 🟨 ARRAYS / FUNCIONES

## 11. ¿QUÉ DIFERENCIA HAY ENTRE `map`, `filter`, `reduce` Y `forEach`?

### 💬 Respuesta

`map()` transforma cada elemento y devuelve un nuevo array.

```javascript
[1, 2, 3].map(x => x * 2);
// [2, 4, 6]
```

`filter()` selecciona elementos que cumplen una condición.

```javascript
[1, 2, 3].filter(x => x > 1);
// [2, 3]
```

`reduce()` acumula elementos para producir un único resultado.

```javascript
[1, 2, 3].reduce((sum, x) => sum + x, 0);
// 6
```

`forEach()` ejecuta una función por cada elemento y no devuelve un nuevo array útil para encadenamiento.

> [!TIP]
>
> ### 🧠 Memorización
>
> | Método    | Función     |
> | --------- | ----------- |
> | `map`     | transformar |
> | `filter`  | seleccionar |
> | `reduce`  | acumular    |
> | `forEach` | ejecutar    |

---

# 🟦 TYPESCRIPT

## 12. ¿QUÉ ES TYPESCRIPT?

### 💬 Respuesta

TypeScript es un **superset de JavaScript** que añade tipado estático y otras características para mejorar la seguridad, mantenibilidad y escalabilidad del código.

El código TypeScript se transpila a JavaScript.

```text
TypeScript
↓
Compiler
↓
JavaScript
↓
Runtime
```

---

## 13. ¿INTERFACE VS TYPE?

### 💬 Respuesta

Ambos permiten definir tipos, pero tienen diferencias.

`interface` está especialmente orientada a definir la forma de objetos y puede extenderse y declararse de nuevo.

`type` puede representar objetos, pero además permite unions, intersections, primitives y otras composiciones.

```typescript
interface User {
  name: string;
}
```

```typescript
type User = {
  name: string;
};
```

> [!TIP]
>
> ### 🧠 Regla práctica
>
> ```text
> interface
> ↓
> contratos de objetos
>
> type
> ↓
> tipos y composiciones más flexibles
> ```

---

## 14. ¿`any` VS `unknown`?

### 💬 Respuesta

`any` desactiva prácticamente el chequeo de tipos para ese valor.

`unknown` también permite recibir cualquier tipo de valor, pero obliga a **validarlo antes de utilizarlo de forma específica**.

```typescript
let a: any = 'hello';

a.toFixed(); // TypeScript lo permite
```

Con `unknown`:

```typescript
let value: unknown = 'hello';

value.toUpperCase(); // ❌
```

Primero debemos comprobar:

```typescript
if (typeof value === 'string') {
  value.toUpperCase();
}
```

> [!IMPORTANT]
>
> ### 🔥 Regla
>
> `unknown` es mucho más seguro que `any`.

---

## 15. ¿QUÉ SON GENERICS?

### 💬 Respuesta

Los Generics permiten crear código reutilizable que mantiene la información de los tipos sin tener que fijar un tipo específico de antemano.

```typescript
function identity<T>(value: T): T {
  return value;
}
```

Entonces:

```typescript
identity<string>('Hello');
identity<number>(123);
```

> [!TIP]
>
> ### 🧠 Clave
>
> Generics = **reutilización + seguridad de tipos**.

---

# 🟥 ANGULAR

## 16. ¿QUÉ ES ANGULAR?

### 💬 Respuesta

Angular es un **framework para desarrollar aplicaciones web**, especialmente aplicaciones SPA, utilizando TypeScript y una arquitectura basada en componentes.

Proporciona herramientas integradas para:

|                      |            |
| -------------------- | ---------- |
| Components           | Routing    |
| Forms                | HttpClient |
| Dependency Injection | Directives |
| Pipes                | Guards     |
| Interceptors         | Testing    |

---

## 17. ¿QUÉ ES UN COMPONENTE?

### 💬 Respuesta

Un componente es una unidad reutilizable de la interfaz que combina **lógica, template, estilos y configuración**.

Conceptualmente:

```text
Component
├── TypeScript
├── HTML
├── CSS
└── Metadata
```

Ejemplo:

```typescript
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
```

> [!TIP]
>
> ### 🧠 Clave
>
> Los componentes son los bloques fundamentales con los que se construye una aplicación Angular.

---

## 18. ¿QUÉ ES DEPENDENCY INJECTION?

### 💬 Respuesta

Dependency Injection es un patrón mediante el cual una clase recibe sus dependencias desde fuera en lugar de crearlas directamente.

Por ejemplo:

```typescript
constructor(private usersService: UsersService) {}
```

Angular se encarga de proporcionar `UsersService`.

### 🧠 Beneficios

```text
Menor acoplamiento
+
Reutilización
+
Testabilidad
+
Mantenibilidad
```

---

## 19. ¿QUÉ ES DATA BINDING?

### 💬 Respuesta

Data Binding es el mecanismo que permite conectar el estado del componente con el template.

Angular tiene diferentes formas:

### 🔹 Interpolation

```html
<p>{{ name }}</p>
```

### 🔹 Property Binding

```html
<img [src]="imageUrl">
```

### 🔹 Event Binding

```html
<button (click)="save()">
```

### 🔹 Two-way Binding

```html
<input [(ngModel)]="name">
```

> [!TIP]
>
> ### 🧠 Resumen
>
> ```text
> Component
>    ↕
> Template
> ```

# 20. ¿QUÉ SON `@Input()` Y `@Output()`?

### 💬 Respuesta

`@Input()` permite que un componente padre **envíe datos a un hijo**.

`@Output()` permite que el hijo **emita eventos hacia el padre**.

```text
Parent
  ↓
@Input()
  ↓
Child
  ↓
@Output()
  ↓
Parent
```

Ejemplo:

```typescript
@Input() user!: User;

@Output() delete = new EventEmitter<number>();
```

---

# 21. ¿QUÉ ES EL LIFECYCLE DE ANGULAR?

### 💬 Respuesta

Son las diferentes etapas por las que pasa un componente desde su creación hasta su destrucción.

Algunos hooks importantes son:

```text
ngOnChanges()
ngOnInit()
ngDoCheck()
ngAfterViewInit()
ngOnDestroy()
```

### 🧠 Los más importantes para entrevista

| Hook            | Descripción                                                         |
| --------------- | ------------------------------------------------------------------- |
| `ngOnInit()`    | Se ejecuta durante la inicialización del componente.                |
| `ngOnChanges()` | Se ejecuta cuando cambian inputs.                                   |
| `ngOnDestroy()` | Se ejecuta antes de destruir el componente y es útil para limpieza. |

---

# 🟪 RXJS

# 22. ¿QUÉ ES RXJS?

### 💬 Respuesta

RxJS es una librería para trabajar con **programación reactiva y streams de datos asíncronos** mediante Observables y operadores.

En Angular se utiliza ampliamente con:

```text
HttpClient
Forms
Router
Events
State
```

Ejemplo:

```typescript
users$
  .pipe(
    map(users => users.filter(user => user.active))
  );
```

---

# 23. ¿QUÉ ES UN OBSERVABLE?

### 💬 Respuesta

Un Observable representa un **flujo de valores que pueden emitirse a lo largo del tiempo**.

Puede emitir:

```text
0 valores
1 valor
muchos valores
```

Ejemplo:

```typescript
users$.subscribe(users => {
  console.log(users);
});
```

> [!TIP]
>
> ### 🧠 Concepto importante
>
> Los Observables de RxJS son generalmente **lazy**: la ejecución normalmente comienza cuando alguien se suscribe.

---

# 24. ¿QUÉ ES UN SUBJECT?

### 💬 Respuesta

Un Subject es un Observable que además funciona como un **Observer**, por lo que puede recibir valores mediante `next()` y emitirlos a sus suscriptores.

```typescript
const subject = new Subject<number>();

subject.subscribe(value => {
  console.log(value);
});

subject.next(10);
```

Resultado:

```text
10
```

### 🧠 Diferencia

| Observable      | Subject                  |
| --------------- | ------------------------ |
| produce valores | produce + recibe valores |

Además existen variantes como:

```text
BehaviorSubject
ReplaySubject
AsyncSubject
```

---

# 25. ¿QUÉ HACE `switchMap()`?

### 💬 Respuesta

`switchMap()` toma un valor emitido por un Observable y lo transforma en otro Observable, **cancelando o dejando sin efecto la suscripción anterior cuando llega un nuevo valor**.

Esto es especialmente útil en búsquedas:

```text
Usuario escribe "a"
↓
request A

Usuario escribe "ab"
↓
request A deja de ser relevante
↓
request B

Usuario escribe "abc"
↓
request B deja de ser relevante
↓
request C
```

### 🔥 Caso típico

```typescript
searchTerm$
  .pipe(
    switchMap(term => this.api.search(term))
  );
```

> [!TIP]
>
> ### 🧠 Regla
>
> `switchMap` = **quedarse con la emisión más reciente**.

---

# 26. ¿QUÉ ES UN INTERCEPTOR?

### 💬 Respuesta

Un interceptor de Angular permite interceptar y modificar peticiones HTTP y sus respuestas antes de que continúen por el flujo.

Puede utilizarse para:

| Uso           |
| ------------- |
| JWT           |
| Headers       |
| Logging       |
| Errores       |
| Loading       |
| Refresh token |

Por ejemplo, para agregar un token:

```text
Request
↓
Interceptor
↓
Authorization: Bearer <token>
↓
Backend
```

---

# 27. ¿QUÉ ES UN GUARD?

### 💬 Respuesta

Un Guard permite controlar si una navegación de Angular puede realizarse.

Por ejemplo, una ruta protegida:

```text
/user/dashboard
       ↓
AuthGuard
       ↓
¿Autenticado?
    ↙     ↘
   Sí      No
   ↓       ↓
Route    Login
```

Se utilizan para implementar reglas de navegación y autorización en el frontend.

> [!WARNING]
> ⚠️ Muy importante:
>
> Un Guard **no reemplaza la seguridad del backend**.
>
> El backend debe validar nuevamente los permisos.

---

# 🔐 AUTENTICACIÓN

# 28. ¿QUÉ ES JWT?

### 💬 Respuesta

JWT, o JSON Web Token, es un formato de token utilizado para transmitir información firmada entre partes, comúnmente para autenticación y autorización.

Tiene tres partes:

```text
Header.Payload.Signature
```

Después del login:

```text
Client
  ↓
Login
  ↓
Backend
  ↓
JWT
  ↓
Client
```

Luego el cliente puede enviarlo en:

```http
Authorization: Bearer <token>
```

> [!IMPORTANT]
>
> ### 🧠 Importante
>
> JWT sirve para **transmitir y verificar claims firmados**.
>
> No significa que el payload esté cifrado.

---

# ⚡ PERFORMANCE

# 29. ¿CÓMO MEJORARÍAS EL PERFORMANCE DE ANGULAR?

### 💬 Respuesta

Primero identificaría dónde está el problema mediante profiling y medición, en lugar de optimizar a ciegas.

Después podría aplicar estrategias como:

| Estrategias                               |
| ----------------------------------------- |
| Lazy loading                              |
| OnPush / Change Detection optimizado      |
| trackBy / @for con tracking               |
| Evitar cálculos innecesarios en templates |
| Memoización cuando tenga sentido          |
| RxJS adecuado                             |
| Code splitting                            |
| Optimización de imágenes                  |
| Reducir bundles                           |
| Virtual scrolling para listas grandes     |
| Evitar suscripciones innecesarias         |

> [!IMPORTANT]
>
> ### 🔥 Muy importante
>
> Una respuesta senior empieza por:
>
> > **"Primero mediría para identificar el cuello de botella."**
>
> No:
>
> > "Pondría OnPush en todo."

---

# 🧑‍💻 EXPERIENCIA REAL

# 30. CUÉNTAME SOBRE UN PROYECTO REAL Y UN PROBLEMA DIFÍCIL QUE HAYAS SOLUCIONADO

### 💬 Estructura ideal

Utiliza **STAR**:

```text
S — Situation
T — Task
A — Action
R — Result
```

### 💬 Ejemplo

> "En uno de mis proyectos trabajé en una aplicación Angular que tenía formularios complejos y diferentes flujos dependiendo del tipo de información que se estaba registrando.
>
> Uno de los problemas era que la estructura de datos utilizada por el formulario no coincidía exactamente con la estructura que esperaba el backend.
>
> Analicé ambos modelos y decidí mantener el modelo del frontend orientado a la interfaz y realizar una transformación específica antes de enviar la petición.
>
> También separé parte de la lógica para evitar que el componente tuviera demasiadas responsabilidades.
>
> Como resultado, el formulario quedó más fácil de mantener y el payload enviado al backend cumplía correctamente con el contrato de la API."

### 🧠 Fórmula

```text
Contexto
↓
Problema
↓
Qué hice YO
↓
Resultado
↓
Qué aprendí
```

---

# 🧑‍💼 31. PREGUNTAS QUE TÚ DEBERÍAS HACER

Esta parte también forma parte de una **buena entrevista**.

Cuando te digan:

> **"¿Tienes alguna pregunta para nosotros?"**

No necesitas preguntar diez cosas.

Lo ideal es elegir **2–4 preguntas relevantes** dependiendo de cómo haya sido la conversación.

---

## 🔹 ¿CÓMO ESTÁ COMPUESTO ACTUALMENTE EL EQUIPO DE DESARROLLO?

### 💬 Puedes preguntar:

> "¿Cómo está compuesto actualmente el equipo de desarrollo y cómo se distribuyen las responsabilidades?"

### 🎯 ¿Qué descubres?

```text
Frontend
Backend
QA
DevOps
Product
Design
```

Y también cómo colaboran.

---

## 🔹 ¿QUÉ TECNOLOGÍAS UTILIZAN PRINCIPALMENTE?

> "¿Qué tecnologías utilizan principalmente en el frontend y backend?"

Muy buena para entender:

```text
Angular / React
Node
Java / .NET
PostgreSQL
AWS / Azure
Docker
```

---

## 🔹 ¿CÓMO ES EL PROCESO DE CODE REVIEW?

> "¿Cómo manejan actualmente el proceso de code review y qué esperan de los desarrolladores antes de hacer merge?"

> [!TIP]
> 🔥 Esta pregunta demuestra interés por **calidad y colaboración**.

---

## 🔹 ¿CÓMO MANEJAN LAS RAMAS Y DEPLOYMENTS?

> "¿Cómo es el flujo que utilizan para trabajar con ramas, Pull Requests y deployments?"

Puedes descubrir:

```text
main
develop
feature branches
CI/CD
staging
production
```

---

## 🔹 ¿QUÉ METODOLOGÍA UTILIZAN?

> "¿Qué metodología utilizan para organizar el trabajo del equipo?"

Puede revelar:

```text
Scrum
Kanban
Shape Up
Trunk-based development
```

---

## 🔹 ¿CÓMO SERÍA UN DÍA NORMAL EN ESTE PUESTO?

🔥 Excelente pregunta.

> "¿Cómo sería normalmente un día de trabajo para la persona que ocupe esta posición?"

Te ayuda a descubrir si realmente vas a programar, hacer reuniones, soporte, mantenimiento, etc.

---

## 🔥 ¿QUÉ ESPERAN DE LA PERSONA DURANTE LOS PRIMEROS 3 MESES?

Esta es de las **mejores preguntas**.

> "¿Qué esperan de la persona que entre a esta posición durante los primeros tres meses?"

Te permite saber:

```text
Objetivos
Expectativas
Onboarding
Entregables
Autonomía
```

---

## 🔹 ¿QUÉ TIPO DE PROYECTOS ESTARÍA DESARROLLANDO?

> "¿Qué tipo de proyectos o funcionalidades estaría desarrollando durante los primeros meses?"

Esto conecta directamente con tu interés técnico.

---

## 🔹 ¿CÓMO MANEJAN TESTING?

> "¿Qué estrategia de testing utilizan actualmente? ¿Trabajan con unit tests, integration tests o end-to-end?"

🔥 Muy buena pregunta para una posición de desarrollo.

---

## 🔹 ¿QUÉ OPORTUNIDADES DE CRECIMIENTO EXISTEN?

> "¿Cómo suele ser el crecimiento profesional dentro del equipo?"

Permite conocer:

```text
Mentoring
Senioridad
Responsabilidades
Capacitación
Promociones
```

---

## 🔥 ¿CÓMO MIDEN EL ÉXITO DE ESTA POSICIÓN?

Esta probablemente es la **pregunta más poderosa** de todas.

> "¿Cómo miden el éxito de la persona que ocupa esta posición durante los primeros meses?"

Porque transforma la conversación de:

```text
"¿Qué me ofrecen?"
```

a:

```text
"¿Cómo puedo aportar valor?"
```

---

# 🎯 MIS 5 PREGUNTAS FAVORITAS PARA LLEVAR A UNA ENTREVISTA

No necesitas memorizar las 11.

Yo llevaría estas cinco:

| #      | Pregunta                                                                                                    |
| ------ | ----------------------------------------------------------------------------------------------------------- |
| **1.** | **"¿Cómo está compuesto actualmente el equipo de desarrollo y cómo se distribuyen las responsabilidades?"** |
| **2.** | **"¿Cómo es el proceso de code review y qué flujo utilizan para hacer merge y deployment?"**                |
| **3.** | **"¿Qué esperan de la persona que entre a esta posición durante los primeros tres meses?"**                 |
| **4.** | **"¿Qué tipo de proyectos o funcionalidades estaría desarrollando?"**                                       |
| **5.** | **"¿Cómo miden el éxito de esta posición?"**                                                                |

---

# 🧠 GUÍA ULTRA RÁPIDA — 30 PREGUNTAS

> [!TIP]
> Para repasar justo antes de entrar a la entrevista:

|       # | Tema                                    | 🧠 Clave                                                        |
| ------: | --------------------------------------- | --------------------------------------------------------------- |
| **01.** | JavaScript                              | Lenguaje de programación dinámico.                              |
| **02.** | `var` / `let` / `const`                 | scope, reasignación y redeclaración.                            |
| **03.** | Hoisting                                | declaraciones procesadas antes de ejecución.                    |
| **04.** | Scope                                   | alcance de las variables.                                       |
| **05.** | Closure                                 | función que conserva acceso a su scope externo.                 |
| **06.** | `this`                                  | depende de cómo se invoca la función.                           |
| **07.** | `==` vs `===`                           | coerción vs comparación estricta.                               |
| **08.** | Event Loop                              | coordina código síncrono y tareas asíncronas.                   |
| **09.** | Promise                                 | resultado futuro de una operación asíncrona.                    |
| **10.** | Promise vs Observable                   | un resultado vs streams de valores.                             |
| **11.** | `map` / `filter` / `reduce` / `forEach` | transformar / seleccionar / acumular / ejecutar.                |
| **12.** | TypeScript                              | JavaScript + sistema de tipos.                                  |
| **13.** | Interface vs Type                       | contratos de objetos vs composición de tipos.                   |
| **14.** | `any` vs `unknown`                      | flexibilidad sin seguridad vs valor desconocido con validación. |
| **15.** | Generics                                | reutilización manteniendo tipos.                                |
| **16.** | Angular                                 | framework web basado en componentes.                            |
| **17.** | Component                               | unidad de UI con lógica y template.                             |
| **18.** | Dependency Injection                    | Angular proporciona dependencias.                               |
| **19.** | Data Binding                            | comunicación entre componente y template.                       |
| **20.** | `@Input` / `@Output`                    | padre → hijo / hijo → padre.                                    |
| **21.** | Lifecycle                               | etapas de vida del componente.                                  |
| **22.** | RxJS                                    | programación reactiva con Observables.                          |
| **23.** | Observable                              | flujo de valores en el tiempo.                                  |
| **24.** | Subject                                 | Observable + Observer.                                          |
| **25.** | `switchMap`                             | cambia al Observable más reciente.                              |
| **26.** | Interceptor                             | intercepta requests/responses HTTP.                             |
| **27.** | Guard                                   | controla navegación.                                            |
| **28.** | JWT                                     | token firmado usado para autenticación/autorización.            |
| **29.** | Angular Performance                     | medir primero + optimizar donde corresponde.                    |
| **30.** | Proyecto real                           | STAR + problema + acción + resultado.                           |

---

# 🚨 LAS 10 QUE DEBES PODER RESPONDER SIN PENSAR

Antes de tu entrevista, asegúrate de poder responder inmediatamente estas:

|    🔥 # | Pregunta                         |
| ------: | -------------------------------- |
|  **1.** | `var` vs `let` vs `const`        |
|  **2.** | Closure                          |
|  **3.** | `this`                           |
|  **4.** | Event Loop                       |
|  **5.** | Promise vs Observable            |
|  **6.** | `map` vs `filter` vs `reduce`    |
|  **7.** | Dependency Injection             |
|  **8.** | `switchMap`                      |
|  **9.** | Guard vs Interceptor             |
| **10.** | Proyecto real + problema difícil |

---

> [!IMPORTANT]
>
> ## 🎯 REGLA PARA TODA LA ENTREVISTA
>
> **No intentes sonar más senior de lo que eres. Intenta sonar como una desarrolladora que entiende lo que hace, puede explicar sus decisiones y sabe investigar cuando no conoce algo.**
>
> Eso suele ser mucho más convincente que recitar definiciones perfectas.
