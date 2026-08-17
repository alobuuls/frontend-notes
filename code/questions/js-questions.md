# 🟨 JAVASCRIPT — APUNTE COMPLETO

> 📌 **Objetivo:** entender JavaScript no solo como un lenguaje de sintaxis, sino también cómo funciona **por dentro**: motor, runtime, Call Stack, Event Loop, asincronía, DOM, objetos, funciones, estructuras de datos y conceptos avanzados.

---

# 🟦 1. ¿QUÉ ES ECMASCRIPT?

📘 **ECMAScript** es el **estándar que define cómo debe funcionar JavaScript**.

JavaScript es una implementación de ese estándar.

En otras palabras:

```text
ECMAScript
    ↓
Define reglas y características
    ↓
JavaScript implementa esas reglas
```

Por ejemplo, ECMAScript define características como:

* `let` / `const`
* Arrow Functions
* Classes
* Promises
* Modules
* Optional Chaining `?.`
* Nullish Coalescing `??`
* `async / await`

📌 **ECMAScript ≠ JavaScript**, pero JavaScript está basado en ECMAScript.

---

# 🟦 2. ¿JAVASCRIPT ES DE UN SOLO HILO?

Sí. 🧵

JavaScript tradicionalmente tiene un **hilo principal de ejecución (single-threaded)**.

Esto significa que el código JavaScript se ejecuta en una sola secuencia:

```text
Código
  ↓
Call Stack
  ↓
Una operación a la vez
```

Pero...

⚠️ **JavaScript puede trabajar con operaciones asíncronas.**

Esto es posible gracias al entorno donde se ejecuta:

```text
JavaScript
   ↓
Call Stack
   ↓
Web APIs / APIs del entorno
   ↓
Task Queue / Microtask Queue
   ↓
Event Loop
```

Por eso podemos hacer:

```javascript
console.log('Inicio');

setTimeout(() => {
  console.log('Timeout');
}, 1000);

console.log('Fin');
```

Resultado:

```text
Inicio
Fin
Timeout
```

---

# 🟦 3. ¿QUÉ MOTOR USA JAVASCRIPT?

Depende del entorno.

🌐 **Chrome / Edge / Node.js**

Utilizan:

> ⚡ **V8**

Otros navegadores:

```text
Chrome → V8
Edge → V8
Firefox → SpiderMonkey
Safari → JavaScriptCore
```

📌 El motor se encarga de **interpretar/compilar y ejecutar JavaScript**.

---

# 🟦 4. ¿CÓMO SE EJECUTA JAVASCRIPT EN EL NAVEGADOR?

De forma simplificada:

```text
📄 HTML
   ↓
🌐 Navegador
   ↓
⚙️ Motor JavaScript
   ↓
📚 Call Stack
   ↓
▶️ Ejecuta código
```

Pero cuando aparecen operaciones asíncronas:

```text
                  ┌───────────────┐
                  │   JavaScript  │
                  │   Call Stack  │
                  └───────┬───────┘
                          ↓
                    Web APIs
                          ↓
              ┌───────────┴──────────┐
              ↓                      ↓
        Microtask Queue          Task Queue
              └───────────┬──────────┘
                          ↓
                     Event Loop
                          ↓
                     Call Stack
```

---

# 🟦 5. ¿QUÉ ES EL RUNTIME?

📘 **Runtime** es el entorno donde se ejecuta JavaScript.

JavaScript por sí mismo define el lenguaje, pero necesita un entorno que le proporcione APIs y mecanismos para interactuar con el exterior.

### 🌐 Browser Runtime

Proporciona:

```javascript
document
window
fetch()
localStorage
setTimeout()
Web APIs
```

### 🟢 Node.js Runtime

Proporciona cosas como:

```javascript
fs
http
process
Buffer
```

📌 Por eso:

```javascript
document.querySelector(...)
```

funciona en un navegador, pero no directamente en Node.js.

---

# 🟦 6. ¿QUÉ ES EL CALL STACK?

📚 El **Call Stack** es una estructura que controla qué funciones están ejecutándose.

Funciona como una pila:

> **LIFO → Last In, First Out**

Ejemplo:

```javascript
function a() {
  b();
}

function b() {
  c();
}

function c() {
  console.log('Hola');
}

a();
```

El Stack sería aproximadamente:

```text
┌─────────┐
│    c    │ ← ejecutándose
├─────────┤
│    b    │
├─────────┤
│    a    │
└─────────┘
```

Cuando `c()` termina:

```text
c ↓
b ↓
a ↓
```

📌 Si llenamos demasiado el Call Stack:

```javascript
function infinite() {
  infinite();
}

infinite();
```

💥 obtenemos:

```text
Maximum call stack size exceeded
```

---

# 🟦 7. ¿QUÉ ES EL EVENT LOOP?

🔄 El **Event Loop** coordina el Call Stack con las colas de tareas.

Su función principal es comprobar:

> "¿El Call Stack está vacío? Entonces puedo ejecutar algo pendiente."

Simplificando:

```text
        Call Stack
            ↑
            │
        Event Loop
        ↙       ↘
Microtasks     Tasks
```

📌 Es fundamental para entender la asincronía de JavaScript.

---

# 🟦 8. ¿QUÉ ES LA MICROTASK QUEUE?

⚡ Es una cola de tareas de **alta prioridad**.

Principalmente contiene:

* `Promise.then()`
* `Promise.catch()`
* `Promise.finally()`
* `queueMicrotask()`
* continuaciones de `async/await`

Ejemplo:

```javascript
console.log('1');

Promise.resolve().then(() => {
  console.log('2');
});

console.log('3');
```

Resultado:

```text
1
3
2
```

📌 Las microtasks se procesan antes de pasar a la siguiente task.

---

# 🟦 9. ¿QUÉ ES LA TASK QUEUE?

También llamada **Macrotask Queue** en muchos contextos.

Puede contener tareas como:

```javascript
setTimeout()
setInterval()
```

y otros eventos del entorno.

Ejemplo:

```javascript
console.log('1');

setTimeout(() => {
  console.log('2');
}, 0);

console.log('3');
```

Resultado:

```text
1
3
2
```

⚠️ `setTimeout(..., 0)` **no significa "ejecuta inmediatamente"**.

Significa aproximadamente:

> "Cuando sea posible, coloca esta tarea para ejecutarse después."

---

# 🟦 10. MICROTASK VS TASK

⭐ Regla mental:

```text
Call Stack
   ↓
Microtasks
   ↓
Tasks
```

Ejemplo:

```javascript
console.log('A');

setTimeout(() => console.log('B'), 0);

Promise.resolve().then(() => console.log('C'));

console.log('D');
```

Resultado:

```text
A
D
C
B
```

---

# 🟦 11. ¿QUÉ ES LA ASINCRONÍA?

⏳ La **asincronía** permite iniciar una operación sin bloquear la ejecución mientras esperamos su resultado.

Ejemplos:

* Peticiones HTTP
* Timers
* Lectura de archivos
* Eventos
* Promesas

Ejemplo:

```javascript
const data = await fetch('/api/users');
```

Mientras la operación está pendiente, el entorno puede continuar trabajando.

📌 **Úsala cuando una operación puede tardar y no quieres bloquear el flujo principal.**

---

# 🟦 12. ¿QUÉ ES UN CALLBACK?

📞 Un **callback** es una función que se pasa como argumento a otra función para ejecutarse posteriormente.

```javascript
function saludar(nombre, callback) {
  console.log(`Hola ${nombre}`);
  callback();
}

saludar('Alo', () => {
  console.log('Bienvenido');
});
```

Otro ejemplo:

```javascript
setTimeout(() => {
  console.log('Han pasado 2 segundos');
}, 2000);
```

La función:

```javascript
() => {
  console.log('Han pasado 2 segundos');
}
```

es un callback.

---

# 🟦 13. ¿QUÉ ES UNA PROMESA?

🤝 Una **Promise** representa el resultado futuro de una operación asíncrona.

Tiene tres estados:

```text
⏳ pending
   ↓
✅ fulfilled

o

❌ rejected
```

Ejemplo:

```javascript
const promise = fetch('/api/users');

promise
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### ¿Cuándo usar Promises?

Cuando tienes operaciones asíncronas como:

```text
🌐 HTTP
💾 Datos
⏳ Procesos asíncronos
📡 APIs
```

---

# 🟦 14. PROMISE VS OBSERVABLE

| Promise 🤝                    | Observable 📡                          |
| ----------------------------- | -------------------------------------- |
| Un resultado                  | Puede emitir muchos                    |
| Se ejecuta una vez            | Puede emitir múltiples valores         |
| No es cancelable directamente | Puede cancelarse mediante subscription |
| `.then()`                     | `.subscribe()`                         |
| JavaScript nativo             | Muy usado con RxJS                     |

Promise:

```javascript
const promise = fetch('/users');
```

Observable:

```typescript
users$.subscribe(users => {
  console.log(users);
});
```

📌 **Promise:** una respuesta futura.

📌 **Observable:** un flujo de valores a lo largo del tiempo.

---

# 🟦 15. ¿QUÉ ES UN OBSERVABLE?

📡 Un **Observable** representa un flujo de datos que puede emitir valores a lo largo del tiempo.

Ejemplo conceptual:

```text
Observable
   ↓
1
   ↓
2
   ↓
3
   ↓
4
```

Puede representar:

* Eventos
* HTTP
* WebSockets
* Formularios
* Streams
* Datos reactivos

Es especialmente importante en **RxJS y Angular**.

---

# 🟦 16. ¿QUÉ ES `this`?

🎯 `this` hace referencia al **contexto de ejecución** de una función.

Su valor depende de **cómo se llama la función**, no simplemente de dónde fue escrita.

Ejemplo:

```javascript
const user = {
  name: 'Alo',

  sayHello() {
    console.log(this.name);
  }
};

user.sayHello();
```

Resultado:

```text
Alo
```

Aquí:

```javascript
this === user
```

### ⚠️ Arrow Functions

Las arrow functions **no tienen su propio `this`**.

```javascript
const user = {
  name: 'Alo',

  sayHello: () => {
    console.log(this.name);
  }
};
```

Por eso no deben utilizarse indistintamente con métodos tradicionales.

---

# 🟦 17. ¿QUÉ ES EL DOM?

🌳 **DOM = Document Object Model**

Es la representación del HTML como un **árbol de objetos** que JavaScript puede manipular.

HTML:

```html
<body>
  <h1>Hola</h1>
  <button>Click</button>
</body>
```

Conceptualmente:

```text
Document
   │
   └── body
       ├── h1
       └── button
```

JavaScript puede modificarlo:

```javascript
document.querySelector('h1').textContent = 'Hola Alo';
```

---

# 🟦 18. ¿QUÉ ES UN NODO?

🌳 Un **Node** es una unidad dentro del DOM.

Puede ser:

* Element
* Text
* Comment
* Document

Por ejemplo:

```html
<h1>Hola</h1>
```

Tiene:

```text
Element Node → h1
Text Node    → "Hola"
```

📌 Todo elemento HTML es un nodo, pero **no todo nodo es un elemento**.

---

# 🟦 19. ¿QUÉ ES LA DELEGACIÓN DE EVENTOS?

🎯 Es una técnica donde colocamos un listener en un elemento padre para manejar eventos de sus hijos.

En lugar de:

```javascript
buttons.forEach(button => {
  button.addEventListener('click', handler);
});
```

podemos hacer:

```javascript
container.addEventListener('click', event => {
  if (event.target.matches('button')) {
    console.log('Click');
  }
});
```

Esto funciona gracias a la **propagación de eventos**.

📌 Es útil cuando:

* Hay muchos elementos.
* Los elementos se crean dinámicamente.
* Queremos reducir listeners.

---

# 🟦 20. ¿QUÉ ES `MAP`?

🗺️ `Map` es una estructura de datos que almacena pares:

```text
clave → valor
```

Ejemplo:

```javascript
const users = new Map();

users.set(1, 'Alo');
users.set(2, 'Juan');

console.log(users.get(1));
```

Resultado:

```text
Alo
```

### ¿Cuándo usar `Map`?

Cuando necesitas:

```text
clave → valor
```

y quieres una estructura diseñada específicamente para eso.

---

# 🟦 21. ¿QUÉ ES `SET`?

🧺 `Set` almacena **valores únicos**.

```javascript
const numbers = new Set([1, 2, 2, 3, 3]);

console.log(numbers);
```

Contiene:

```text
1
2
3
```

### ¿Cuándo usarlo?

Cuando necesitas evitar duplicados:

```javascript
const unique = [...new Set(numbers)];
```

---

# 🟦 22. `MAP` VS `SET`

| `Map` 🗺️                   | `Set` 🧺         |
| --------------------------- | ---------------- |
| Clave → valor               | Valores          |
| Permite asociar información | Evita duplicados |
| `set(key, value)`           | `add(value)`     |
| `get(key)`                  | `has(value)`     |

Piensa:

```text
Map → "Dame el valor asociado a esta clave"

Set → "¿Este valor ya existe?"
```

---

# 🟦 23. ¿QUÉ ES UN ARRAY?

📦 Un **Array** es una estructura ordenada de elementos.

```javascript
const fruits = ['🍎', '🍌', '🍊'];
```

Tiene índices:

```text
0 → 🍎
1 → 🍌
2 → 🍊
```

### ¿Cuándo usarlo?

Cuando necesitas:

* Mantener un orden.
* Recorrer elementos.
* Trabajar con colecciones.
* Usar métodos como `map`, `filter`, `reduce`.

---

# 🟦 24. ¿QUÉ ES UNA MATRIZ?

🔢 Una **matriz** es un array cuyos elementos pueden ser otros arrays.

```javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
```

Conceptualmente:

```text
1  2  3
4  5  6
7  8  9
```

### ¿Cuándo usarla?

Para representar datos bidimensionales:

* Tableros
* Matrices matemáticas
* Mapas
* Grids
* Juegos

---

# 🟦 25. ¿QUÉ ES UN DICCIONARIO?

📖 En JavaScript normalmente usamos un **objeto** o `Map` para representar algo parecido a un diccionario.

```javascript
const countries = {
  MX: 'México',
  CO: 'Colombia',
  ES: 'España'
};
```

Puedes hacer:

```javascript
countries.MX;
```

Resultado:

```text
México
```

📌 Si necesitas una estructura más especializada para claves dinámicas, `Map` suele ser mejor opción.

---

# 🟦 26. ¿QUÉ ES UN OBJETO?

📦 Un objeto representa una entidad mediante **propiedades y comportamientos**.

```javascript
const user = {
  name: 'Alo',
  age: 25,

  greet() {
    console.log('Hola');
  }
};
```

Tiene:

```text
Propiedades
↓
name
age

Métodos
↓
greet()
```

### ¿Cuándo usar objetos?

Cuando quieres representar una entidad:

```text
👤 Usuario
🚗 Auto
📦 Producto
🏠 Casa
🎮 Juego
```

---

# 🟦 27. ¿QUÉ ES UN MÉTODO?

⚙️ Un **método es una función asociada a un objeto o clase.**

```javascript
const user = {
  name: 'Alo',

  greet() {
    console.log('Hola');
  }
};
```

Aquí:

```javascript
greet()
```

es un método.

---

# 🟦 28. ¿QUÉ ES UN PARÁMETRO?

📥 Un parámetro es una variable definida en una función para recibir información.

```javascript
function greet(name) {
  console.log(`Hola ${name}`);
}
```

`name` es un **parámetro**.

Cuando hacemos:

```javascript
greet('Alo');
```

`'Alo'` es un **argumento**.

📌 Diferencia:

```text
Parámetro → variable de la función

Argumento → valor que enviamos
```

---

# 🟦 29. `FOR` VS `WHILE`

### 🔁 `for`

Se utiliza mucho cuando conocemos o controlamos claramente la iteración.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### 🔄 `while`

Es útil cuando queremos repetir mientras una condición sea verdadera.

```javascript
while (condition) {
  // ...
}
```

### Regla mental

```text
for   → "repite X veces / recorre esto"

while → "repite mientras ocurra esto"
```

---

# 🟦 30. `MAP` VS `FOREACH`

⚠️ Son muy diferentes.

### `map()`

Transforma un array y **devuelve otro array**.

```javascript
const numbers = [1, 2, 3];

const doubled = numbers.map(number => number * 2);
```

Resultado:

```javascript
[2, 4, 6]
```

### `forEach()`

Sirve para ejecutar una acción por cada elemento.

```javascript
numbers.forEach(number => {
  console.log(number);
});
```

No está pensado para transformar y devolver un nuevo array.

### Regla:

```text
map     → transformar
forEach → ejecutar algo
```

---

# 🟦 31. ¿QUÉ HACE `Array.from()`?

🔄 Convierte un objeto iterable o parecido a un array en un **Array real**.

Ejemplo:

```javascript
const text = 'Hola';

const letters = Array.from(text);
```

Resultado:

```javascript
['H', 'o', 'l', 'a']
```

También:

```javascript
const divs = document.querySelectorAll('div');

const array = Array.from(divs);
```

📌 Es útil cuando tienes algo que **parece un array pero no lo es realmente**.

---

# 🟦 32. `FOR...IN` VS `FOR...OF`

### `for...in`

🔑 Recorre **propiedades/keys**.

```javascript
const user = {
  name: 'Alo',
  age: 25
};

for (const key in user) {
  console.log(key);
}
```

Resultado:

```text
name
age
```

### `for...of`

📦 Recorre **valores de elementos iterables**.

```javascript
const numbers = [10, 20, 30];

for (const number of numbers) {
  console.log(number);
}
```

Resultado:

```text
10
20
30
```

📌 Regla:

```text
for...in → keys
for...of → values
```

---

# 🟦 33. ¿QUÉ ES `localStorage`?

💾 `localStorage` permite guardar información en el navegador.

```javascript
localStorage.setItem('name', 'Alo');
```

Leer:

```javascript
localStorage.getItem('name');
```

Eliminar:

```javascript
localStorage.removeItem('name');
```

Limpiar:

```javascript
localStorage.clear();
```

⚠️ Solo almacena strings directamente.

Para objetos:

```javascript
localStorage.setItem(
  'user',
  JSON.stringify(user)
);
```

Y recuperar:

```javascript
const user = JSON.parse(
  localStorage.getItem('user')
);
```

📌 **No guardes información extremadamente sensible en `localStorage`**, especialmente secretos que no deberían quedar accesibles al JavaScript de la página.

---

# 🟦 34. ¿QUÉ ES TRUTHY Y FALSY?

JavaScript convierte valores a booleanos cuando es necesario.

### ❌ Falsy

Son valores que se comportan como `false`:

```javascript
false
0
-0
0n
''
null
undefined
NaN
```

### ✅ Truthy

Prácticamente todo lo demás.

```javascript
'Hola'
[]
{}
42
true
```

Ejemplo:

```javascript
if (user) {
  console.log('Existe');
}
```

---

# 🟦 35. ¿QUÉ ES UN PRIMITIVO?

🔹 Un valor primitivo es un tipo de dato básico de JavaScript.

Los principales son:

```text
string
number
bigint
boolean
undefined
symbol
null
```

Ejemplo:

```javascript
const name = 'Alo';
const age = 25;
const active = true;
```

⚠️ Los objetos, arrays y funciones **no son primitivos**.

---

# 🟦 36. ¿QUÉ ES LA INMUTABILIDAD?

🧊 La **inmutabilidad** significa que no modificamos directamente un valor existente, sino que creamos uno nuevo.

Ejemplo:

```javascript
const user = {
  name: 'Alo',
  age: 25
};
```

En vez de modificar directamente:

```javascript
user.age = 26;
```

podemos crear otro objeto:

```javascript
const updatedUser = {
  ...user,
  age: 26
};
```

Ahora:

```text
user
 ↓
age: 25

updatedUser
 ↓
age: 26
```

📌 Es especialmente importante en programación funcional y frameworks como React, y también resulta muy útil para manejar estados de forma predecible.

---

# 🟦 37. ¿QUÉ ES UNA CLASE?

🏗️ Una **class** es una forma de definir la estructura y comportamiento de objetos.

```javascript
class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hola ${this.name}`);
  }
}
```

Crear instancia:

```javascript
const user = new User('Alo');
```

---

# 🟦 38. CLASE VS FUNCIÓN

### 🏗️ Clase

Está orientada a crear **instancias/objetos** con una estructura y comportamiento definidos.

```javascript
class User {
  constructor(name) {
    this.name = name;
  }
}
```

### ⚙️ Función

Está pensada principalmente para ejecutar una lógica.

```javascript
function add(a, b) {
  return a + b;
}
```

📌 Importante:

Una clase en JavaScript está construida sobre el sistema de **prototipos** del lenguaje. `class` proporciona una sintaxis más cómoda para trabajar con ese modelo.

---

# 🟦 39. ¿QUÉ ES HERENCIA?

🧬 La **herencia** permite que una clase reutilice características de otra.

```javascript
class Animal {
  speak() {
    console.log('Sonido');
  }
}

class Dog extends Animal {
  bark() {
    console.log('Guau');
  }
}
```

`Dog` hereda de `Animal`.

```text
Animal
  ↑
 Dog
```

---

# 🟦 40. ¿QUÉ ES ABSTRACCIÓN?

🎭 La **abstracción** consiste en ocultar detalles innecesarios y exponer solamente lo importante.

Por ejemplo:

```javascript
car.start();
```

No necesitas saber todos los detalles internos del motor para utilizarlo.

En programación:

```text
Complejidad interna
       ↓
   ABSTRACCIÓN
       ↓
Interfaz sencilla
```

---

# 🟦 41. ¿QUÉ ES POLIMORFISMO?

🔄 **Polimorfismo** significa que diferentes objetos pueden responder a una misma operación de diferentes maneras.

```javascript
class Dog {
  speak() {
    return 'Guau';
  }
}

class Cat {
  speak() {
    return 'Miau';
  }
}

function makeSpeak(animal) {
  console.log(animal.speak());
}
```

Podemos hacer:

```javascript
makeSpeak(new Dog());
makeSpeak(new Cat());
```

Mismo método:

```text
speak()
```

Pero diferente comportamiento.

---

# 🟦 42. ¿QUÉ ES RECURSIVIDAD?

🔁 Una función recursiva es una función que **se llama a sí misma**.

```javascript
function countdown(number) {
  if (number === 0) {
    return;
  }

  console.log(number);

  countdown(number - 1);
}
```

Resultado:

```text
3
2
1
```

Toda recursividad necesita:

```text
1️⃣ Caso base
2️⃣ Llamada recursiva
```

### ¿Cuándo usarla?

Es útil para estructuras naturalmente jerárquicas:

🌳 Árboles
📁 Directorios
🧩 Algoritmos divide-and-conquer
🔗 Estructuras recursivas

⚠️ Evita usarla cuando un simple loop sea mucho más claro.

---

# 🟦 43. ¿QUÉ ES UN CLOSURE?

🔐 Un **closure** ocurre cuando una función conserva acceso al ámbito donde fue creada, incluso después de que esa función externa haya terminado.

Ejemplo:

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
increment(); // 3
```

Aunque `counter()` terminó, la función interna todavía puede acceder a:

```javascript
count
```

📌 Los closures son muy importantes para:

* Encapsulación
* Estado privado
* Callbacks
* Funciones de orden superior
* Currying

---

# 🟦 44. ¿QUÉ ES LA DEAD ZONE?

⚠️ **Temporal Dead Zone (TDZ)**

Es el periodo entre el inicio del scope y la declaración de una variable con `let` o `const`, durante el cual no puedes acceder a ella.

```javascript
console.log(name);

let name = 'Alo';
```

💥 Error:

```text
ReferenceError
```

Conceptualmente:

```text
Scope comienza
      ↓
🚫 TDZ
      ↓
let name
      ↓
✅ Disponible
```

---

# 🟦 45. ¿QUÉ ES TOP-LEVEL `AWAIT`?

⏳ Normalmente `await` se utiliza dentro de una función `async`.

Pero en módulos ES podemos utilizarlo directamente en el nivel superior:

```javascript
const response = await fetch('/api/users');

const users = await response.json();
```

Esto se llama:

> **Top-level await**

📌 Es útil especialmente en módulos cuando necesitamos esperar una inicialización asíncrona antes de continuar.

---

# 🟦 46. ¿QUÉ ES UTILITY TYPES?

🛠️ Los **Utility Types** pertenecen a TypeScript, no al JavaScript estándar.

Permiten transformar tipos existentes.

Ejemplos:

```typescript
Partial<User>
Required<User>
Readonly<User>
Pick<User, 'name' | 'email'>
Omit<User, 'password'>
Record<string, string>
```

Por ejemplo:

```typescript
interface User {
  name: string;
  email: string;
}
```

Podemos hacer:

```typescript
const update: Partial<User> = {
  name: 'Alo'
};
```

📌 Son muy importantes cuando trabajas con TypeScript.

---

# 🟦 47. JAVASCRIPT VS TYPESCRIPT

| JavaScript 🟨              | TypeScript 🔷                    |
| -------------------------- | -------------------------------- |
| Lenguaje de programación   | Superset de JavaScript           |
| Tipado dinámico            | Tipado estático opcional         |
| `.js`                      | `.ts`                            |
| Se ejecuta directamente    | Se transpila a JavaScript        |
| Menos información de tipos | Más seguridad durante desarrollo |

TypeScript:

```typescript
const age: number = 25;
```

JavaScript:

```javascript
const age = 25;
```

📌 TypeScript finalmente termina convertido en JavaScript que puede ejecutar el runtime.

---

# 🟦 48. ¿QUÉ ES UN UTILITY TYPE `RECORD`?

Uno especialmente importante:

```typescript
Record<string, string>
```

Representa un objeto donde:

```text
clave → string
valor → string
```

Ejemplo:

```typescript
const countries: Record<string, string> = {
  MX: 'Mexico',
  CO: 'Colombia',
  ES: 'Spain'
};
```

---

# 🟦 49. ¿QUÉ ES UN DATO INMUTABLE VS MUTABLE?

### 🔴 Mutable

Puede modificarse:

```javascript
const user = {
  name: 'Alo'
};

user.name = 'Juan';
```

### 🟢 Inmutable

Creamos una nueva versión:

```javascript
const updatedUser = {
  ...user,
  name: 'Juan'
};
```

⚠️ `const` **no significa que el objeto sea inmutable**.

Esto es perfectamente válido:

```javascript
const user = {
  name: 'Alo'
};

user.name = 'Juan';
```

`const` impide reasignar la variable:

```javascript
user = {};
```

pero no congela automáticamente el objeto.

---

# 🟦 50. ¿QUÉ SON LAS BUENAS PRÁCTICAS?

✅ Son recomendaciones que ayudan a escribir código:

* Legible
* Mantenible
* Seguro
* Predecible
* Escalable
* Fácil de probar

Ejemplo:

❌

```javascript
const x = 25;
```

✅

```javascript
const userAge = 25;
```

O:

❌

```javascript
function f(a, b) {
  return a + b;
}
```

✅

```javascript
function calculateTotal(price, tax) {
  return price + tax;
}
```

---

# 🟦 51. ¿QUÉ ES CLEAN CODE?

🧼 **Clean Code** es escribir código que sea fácil de:

```text
👀 Leer
🧠 Entender
🔧 Modificar
🧪 Probar
♻️ Mantener
```

Algunas ideas:

### Nombres claros

```javascript
const userName = 'Alo';
```

### Funciones pequeñas

```javascript
function calculateTotal() {}
```

### Evitar duplicación

```text
DRY → Don't Repeat Yourself
```

### Evitar complejidad innecesaria

```text
KISS → Keep It Simple
```

📌 Clean Code no significa hacer el código más complicado o más largo.

---

# 🟦 52. ¿QUÉ ES UN ARRAY VS OBJETO?

### Array

Colección **ordenada**:

```javascript
const users = [
  'Alo',
  'Juan',
  'Pedro'
];
```

Piensa:

> "Tengo una lista."

### Objeto

Representa una **entidad**:

```javascript
const user = {
  name: 'Alo',
  age: 25
};
```

Piensa:

> "Tengo una cosa con propiedades."

---

# 🟦 53. ¿QUÉ ES UNA FUNCIÓN?

⚙️ Una función es un bloque reutilizable de código que puede recibir datos y devolver un resultado.

```javascript
function add(a, b) {
  return a + b;
}
```

Uso:

```javascript
const result = add(2, 3);
```

Resultado:

```text
5
```

Las funciones son **first-class citizens** en JavaScript, es decir, pueden:

```text
📦 Guardarse en variables
📥 Pasarse como argumentos
📤 Retornarse desde otras funciones
```

---

# 🟦 54. ¿QUÉ ES UNA FUNCIÓN DE ORDEN SUPERIOR?

🧠 Una función de orden superior es una función que:

1. Recibe una función.
2. Devuelve una función.
3. O ambas.

Ejemplo:

```javascript
const numbers = [1, 2, 3];

numbers.map(number => number * 2);
```

`map()` recibe una función:

```javascript
number => number * 2
```

Por eso trabaja con funciones de orden superior.

---

# 🟦 55. ¿QUÉ ES EL SCOPE?

🔎 **Scope** determina dónde una variable puede ser utilizada.

Ejemplo:

```javascript
function test() {
  const message = 'Hola';

  console.log(message);
}
```

`message` existe dentro del scope de `test()`.

Fuera:

```javascript
console.log(message);
```

❌ No existe.

Tipos importantes:

```text
🌎 Global Scope
📦 Function Scope
🧱 Block Scope
```

`let` y `const` tienen **block scope**.

---

# 🟦 56. ¿QUÉ ES HOISTING?

⬆️ **Hoisting** describe cómo JavaScript procesa declaraciones antes de ejecutar el código.

Por ejemplo:

```javascript
console.log(foo);

var foo = 'Hola';
```

produce:

```text
undefined
```

Pero:

```javascript
console.log(foo);

let foo = 'Hola';
```

produce:

```text
ReferenceError
```

Esto se relaciona con la **Temporal Dead Zone**.

---

# 🟦 57. ¿QUÉ ES `STRICT MODE`?

🔒 JavaScript puede ejecutarse en modo estricto:

```javascript
'use strict';
```

Ayuda a detectar ciertos errores y evita algunos comportamientos problemáticos.

En módulos ES y código moderno, existen reglas estrictas por defecto.

---

# 🟦 58. ¿QUÉ ES `NULL` VS `UNDEFINED`?

### `undefined`

🚫 Generalmente significa:

> "No se ha asignado un valor."

```javascript
let name;

console.log(name);
```

Resultado:

```text
undefined
```

### `null`

🕳️ Representa intencionalmente:

> "No hay valor."

```javascript
const user = null;
```

📌 Regla mental:

```text
undefined → no asignado / ausente
null      → ausencia intencional
```

---

# 🟦 59. ¿QUÉ ES `==` VS `===`?

### `==`

Hace conversión de tipos:

```javascript
5 == '5'
```

Resultado:

```text
true
```

### `===`

Compara valor **y tipo**:

```javascript
5 === '5'
```

Resultado:

```text
false
```

⭐ Buena práctica:

```javascript
===
```

y

```javascript
!==
```

salvo que tengas una razón concreta para usar igualdad abstracta.

---

# 🟦 60. ¿QUÉ ES DESTRUCTURING?

📦 Permite extraer valores de arrays u objetos fácilmente.

Objeto:

```javascript
const user = {
  name: 'Alo',
  age: 25
};

const { name, age } = user;
```

Array:

```javascript
const numbers = [10, 20];

const [first, second] = numbers;
```

---

# 🟦 61. ¿QUÉ ES EL SPREAD OPERATOR?

✨ `...` permite expandir elementos.

Array:

```javascript
const a = [1, 2];
const b = [...a, 3];
```

Resultado:

```javascript
[1, 2, 3]
```

Objeto:

```javascript
const user = {
  name: 'Alo'
};

const updatedUser = {
  ...user,
  age: 25
};
```

Es muy utilizado para trabajar con **inmutabilidad**.

---

# 🟦 62. ¿QUÉ ES EL REST OPERATOR?

También utiliza:

```javascript
...
```

pero recoge múltiples valores.

```javascript
function sum(...numbers) {
  return numbers;
}

sum(1, 2, 3);
```

`numbers` será:

```javascript
[1, 2, 3]
```

📌

```text
Spread → expande
Rest   → agrupa
```

---

# 🟦 63. ¿QUÉ ES OPTIONAL CHAINING?

❓ Permite acceder a propiedades sin lanzar error si algo es `null` o `undefined`.

```javascript
user?.address?.city
```

En lugar de:

```javascript
if (user && user.address) {
  // ...
}
```

---

# 🟦 64. ¿QUÉ ES NULLISH COALESCING?

❔ `??` proporciona un valor alternativo cuando el valor es:

```text
null
undefined
```

Ejemplo:

```javascript
const name = user.name ?? 'Invitado';
```

⚠️ No es igual que `||`.

```javascript
0 || 10
```

produce:

```text
10
```

pero:

```javascript
0 ?? 10
```

produce:

```text
0
```

---

# 🟦 65. ¿QUÉ ES MODULARIZACIÓN?

📦 Consiste en dividir el código en módulos independientes.

```javascript
// user.js
export function getUser() {}
```

```javascript
// app.js
import { getUser } from './user.js';
```

Beneficios:

```text
🧹 Código organizado
♻️ Reutilización
🧪 Testing más fácil
📦 Separación de responsabilidades
```

---

# 🟦 66. ¿QUÉ ES `FETCH`?

🌐 `fetch()` es una API para realizar solicitudes HTTP.

```javascript
const response = await fetch('/api/users');

const users = await response.json();
```

Puede utilizar:

```text
GET
POST
PUT
PATCH
DELETE
```

Ejemplo:

```javascript
await fetch('/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Alo'
  })
});
```

---

# 🟦 67. ¿QUÉ ES JSON?

📄 **JSON = JavaScript Object Notation**

Es un formato de intercambio de datos.

```json
{
  "name": "Alo",
  "age": 25
}
```

JavaScript:

```javascript
JSON.stringify(object);
```

➡️ Objeto → JSON string

```javascript
JSON.parse(json);
```

➡️ JSON string → objeto

---

# 🟦 68. ¿QUÉ ES EL GARBAGE COLLECTOR?

🗑️ JavaScript tiene **Garbage Collection**.

El motor detecta objetos que ya no pueden ser alcanzados por el programa y puede liberar la memoria asociada.

Conceptualmente:

```text
Objeto creado
    ↓
Se utiliza
    ↓
Ya no existe referencia
    ↓
♻️ Garbage Collector
    ↓
Memoria liberada
```

No tienes que liberar memoria manualmente como en lenguajes como C.

---

# 🟦 69. ¿CÓMO PENSAR JAVASCRIPT COMPLETO?

Una buena forma de visualizar todo lo anterior:

```text
                    🟨 JAVASCRIPT
                         │
          ┌──────────────┴──────────────┐
          ↓                             ↓
      LENGUAJE                       RUNTIME
          │                             │
          │                       ┌─────┴─────┐
          │                       ↓           ↓
          │                    Browser      Node.js
          │                       │
          ↓                       ↓
 Variables                   Web APIs
 Funciones                       │
 Objetos                         ↓
 Arrays                      Async APIs
 Classes                         │
 Promises                        ↓
 Modules                     Event Loop
                               │
                 ┌─────────────┴─────────────┐
                 ↓                           ↓
             Call Stack                Queues
                 │                    ┌──────┴──────┐
                 │                    ↓             ↓
                 │               Microtasks      Tasks
                 │                    │             │
                 └────────────────────┴─────────────┘
                                      ↓
                                  Event Loop
```

---
