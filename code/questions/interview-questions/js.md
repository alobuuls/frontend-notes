# 🟨 4. JAVASCRIPT — RESPUESTAS PARA ENTREVISTA

## 📑 ÍNDICE

## 🧠 FUNDAMENTOS

- [¿Qué es JavaScript?](#-qué-es-javascript)
- [¿Qué diferencia hay entre JavaScript y ECMAScript?](#-qué-diferencia-hay-entre-javascript-y-ecmascript)
- [¿JavaScript es compilado o interpretado?](#-javascript-es-compilado-o-interpretado)
- [¿JavaScript es single-threaded o multithreaded?](#-javascript-es-single-threaded-o-multithreaded)
- [¿Qué es el Runtime?](#-qué-es-el-runtime)
- [¿Qué es el Event Loop?](#-qué-es-el-event-loop)
- [¿Qué es el Call Stack?](#-qué-es-el-call-stack)
- [¿Qué es el Callback Queue?](#-qué-es-el-callback-queue)
- [¿Qué es el Web API?](#-qué-es-el-web-api)
- [¿Qué es asincronía?](#-qué-es-asincronía)

## 🔥 VARIABLES

- [Diferencia entre `var`, `let` y `const`](#-diferencia-entre-var-let-y-const)
- [¿Qué es Hoisting?](#-qué-es-hoisting)
- [Temporal Dead Zone — TDZ](#-temporal-dead-zone--tdz)
- [¿Qué es Scope?](#-qué-es-scope)
- [Global Scope](#-global-scope)
- [Function Scope](#-function-scope)
- [Block Scope](#-block-scope)
- [¿Qué es una variable mutable?](#-qué-es-una-variable-mutable)
- [¿Qué significa inmutabilidad?](#-qué-significa-inmutabilidad)

## 🔥 TIPOS DE DATOS

- [¿Cuáles son los tipos de datos de JavaScript?](#-cuáles-son-los-tipos-de-datos-de-javascript)
- [¿Qué diferencia hay entre tipos primitivos y objetos?](#-qué-diferencia-hay-entre-tipos-primitivos-y-objetos)
- [¿Qué diferencia hay entre `null` y `undefined`?](#-qué-diferencia-hay-entre-null-y-undefined)
- [¿Qué es `NaN`?](#-qué-es-nan)
- [¿Qué diferencia hay entre `==` y `===`?](#-qué-diferencia-hay-entre--y-)
- [¿Qué es Truthy y Falsy?](#-qué-es-truthy-y-falsy)
- [¿Qué es Type Coercion?](#-qué-es-type-coercion)

## 🔥 REPASO

- [Resumen de memoria](#-resumen-de-memoria)
- [Preguntas que te pueden encadenar](#-preguntas-que-te-pueden-encadenar)
  - [Ejemplo 1 — JavaScript y Single-Threaded](#-ejemplo-1)
  - [Ejemplo 2 — `const` e inmutabilidad](#-ejemplo-2)
  - [Ejemplo 3 — `null == undefined`](#-ejemplo-3)

# 🧠 FUNDAMENTOS

## 🟨 ¿QUÉ ES JAVASCRIPT?

### 🎤 Respuesta para entrevista

> **JavaScript es un lenguaje de programación de alto nivel, dinámico y multiparadigma, utilizado principalmente para agregar comportamiento e interactividad a las aplicaciones. En el navegador permite manipular el DOM, responder a eventos y realizar operaciones asíncronas, y también puede ejecutarse fuera del navegador mediante runtimes como Node.js.**

### 💻 Ejemplo

```js
const button = document.querySelector('button');

button.addEventListener('click', () => {
  console.log('Hola');
});
```

JavaScript permite trabajar con:

|     |            |
| --- | ---------- |
| 🖥️ | DOM        |
| 🎯  | Eventos    |
| 🌐  | APIs       |
| 🔄  | Asincronía |
| 📦  | Objetos    |
| 🧩  | Funciones  |
| 🗃️ | Datos      |

> 🧠 **Importante:** JavaScript **no es lo mismo que Java**.
> Son lenguajes diferentes.

---

# 🆚 ¿QUÉ DIFERENCIA HAY ENTRE JAVASCRIPT Y ECMASCRIPT?

### 🎤 Respuesta para entrevista

> **ECMAScript es el estándar que define las características y reglas del lenguaje, mientras que JavaScript es una implementación de ese estándar junto con APIs y características proporcionadas por el entorno donde se ejecuta.**

### 🧠 Forma sencilla de entenderlo

```text
ECMAScript
    ↓
Estándar
    ↓
Define cómo debe funcionar el lenguaje

JavaScript
    ↓
Implementación del estándar
    +
APIs del entorno
```

Por ejemplo:

```js
const users = [];
```

`const`, arrays, funciones, objetos, etc., forman parte del lenguaje definido por ECMAScript.

Mientras que:

```js
document.querySelector(...)
```

depende de APIs proporcionadas por el navegador.

### ⭐ Una respuesta todavía más sencilla

> **ECMAScript es la especificación y JavaScript es el lenguaje que implementa esa especificación.**

---

# 🤔 ¿JAVASCRIPT ES COMPILADO O INTERPRETADO?

🔥 Esta es una **pregunta trampa clásica**.

### 🎤 Respuesta para entrevista

> **JavaScript se ejecuta mediante engines que utilizan técnicas de interpretación y compilación, especialmente compilación Just-In-Time o JIT. Por eso actualmente no es correcto decir simplemente que JavaScript es únicamente interpretado o únicamente compilado.**

Por ejemplo, en Chrome se utiliza:

```text
V8 Engine
```

Y otros navegadores tienen sus propios engines.

### ⚙️ Conceptualmente

```text
JavaScript
    ↓
JavaScript Engine
    ↓
Parsing
    ↓
Bytecode / ejecución
    ↓
Optimización JIT
    ↓
Machine Code
```

### 🧠 Lo importante para entrevista

Si te preguntan:

> "¿JavaScript es interpretado?"

Puedes responder:

> **Tradicionalmente se describe como interpretado, pero los engines modernos utilizan una combinación de interpretación y compilación JIT para optimizar la ejecución.**

🔥 Esa respuesta demuestra más conocimiento que simplemente decir "interpretado".

---

# 🧵 ¿JAVASCRIPT ES SINGLE-THREADED O MULTITHREADED?

### 🎤 Respuesta para entrevista

> **El modelo de ejecución de JavaScript en un contexto típico utiliza un único hilo para ejecutar código JavaScript y un único call stack. Sin embargo, el entorno puede realizar operaciones asíncronas fuera de ese hilo mediante APIs del runtime, y algunos entornos permiten utilizar otros hilos mediante mecanismos como Web Workers.**

### 🧵 Forma simplificada

```text
JavaScript
    ↓
🧵 1 hilo
    ↓
Call Stack
```

Pero el navegador puede manejar otras operaciones:

```text
JavaScript
    ↓
Web APIs
    ↓
🌐 HTTP
⏱️ Timers
🖱️ Eventos
```

Y posteriormente devuelve sus resultados al mecanismo de ejecución de JavaScript.

> ⚠️ **Importante:** No digas:
>
> "JavaScript no puede usar varios hilos."
>
> Eso sería demasiado absoluto.

Mejor:

> **El código JavaScript de un contexto normalmente se ejecuta en un único hilo, pero el entorno puede utilizar otros hilos y JavaScript puede aprovecharlos mediante APIs como Web Workers.**

---

# ⚙️ ¿QUÉ ES EL RUNTIME?

### 🎤 Respuesta para entrevista

> **Un runtime es el entorno que proporciona todo lo necesario para ejecutar un programa. En JavaScript, el runtime incluye el JavaScript engine y APIs adicionales proporcionadas por el entorno, como las Web APIs en el navegador o APIs de Node.js en el servidor.**

### 🌐 Browser Runtime

```text
Browser Runtime
│
├── JavaScript Engine
├── DOM API
├── Web APIs
├── Timers
├── Fetch
└── Event Loop
```

### 🟢 Node.js Runtime

```text
Node.js
│
├── V8
├── File System
├── Network APIs
├── Timers
└── Event Loop
```

> 🧠 **Muy importante:** El **JavaScript engine no es exactamente lo mismo que el runtime**.

| Concepto   | Ejemplo                                                        |
| ---------- | -------------------------------------------------------------- |
| **V8**     | → engine                                                       |
| **Chrome** | → runtime/entorno que incluye V8 + Web APIs + otros mecanismos |

---

# 🔄 ¿QUÉ ES EL EVENT LOOP?

🔥 **Pregunta extremadamente común.**

### 🎤 Respuesta para entrevista

> **El Event Loop es el mecanismo que coordina la ejecución del código JavaScript y permite procesar operaciones asíncronas. Supervisa cuándo el Call Stack está disponible y permite que las tareas pendientes puedan entrar en el flujo de ejecución.**

### 🔄 Simplificado

```text
             ┌──────────────┐
             │  Call Stack  │
             └──────┬───────┘
                    │
                    ↓
               Event Loop
                    │
        ┌───────────┴───────────┐
        ↓                       ↓
  Microtask Queue         Task Queue
```

### 💻 Ejemplo

```js
console.log('A');

setTimeout(() => {
  console.log('B');
}, 0);

console.log('C');
```

### 📤 Resultado

```text
A
C
B
```

### 🧠 ¿Por qué?

```text
console.log(A)
↓
Call Stack
↓
A

setTimeout()
↓
se registra el callback

console.log(C)
↓
C

Call Stack queda libre
↓
Event Loop
↓
callback
↓
B
```
# 📚 ¿QUÉ ES EL CALL STACK?

### 🎤 Respuesta para entrevista

> **El Call Stack es una estructura de datos que utiliza JavaScript para controlar la ejecución de las funciones. Funciona siguiendo el principio LIFO: Last In, First Out.**

### 💻 Ejemplo

```js
function one() {
  two();
}

function two() {
  console.log('Hello');
}

one();
```

### 🧠 Conceptualmente

```text
Call Stack

┌─────────────┐
│    two()    │
├─────────────┤
│    one()    │
├─────────────┤
│   global    │
└─────────────┘
```

Cuando `two()` termina:

```text
two()
↓
sale

one()
↓
sale
```

### 🧠 LIFO

```text
Last In
First Out
```

> 🍽️ Como una pila de platos.

---

# 📥 ¿QUÉ ES EL CALLBACK QUEUE?

También puedes encontrarla como:

| Nombre             | También conocida como |
| ------------------ | --------------------- |
| **Callback Queue** | Task Queue            |
|                    | Macrotask Queue       |

### 🎤 Respuesta para entrevista

> **Es una cola donde se colocan callbacks de determinadas tareas asíncronas cuando están listos para ejecutarse. El Event Loop los procesa cuando el Call Stack está vacío y de acuerdo con las reglas de prioridad del modelo de eventos.**

### 💻 Ejemplo

```js
setTimeout(() => {
  console.log('Hola');
}, 0);
```

### 🔄 Conceptualmente

```text
setTimeout
    ↓
Web API / runtime
    ↓
Callback Queue
    ↓
Event Loop
    ↓
Call Stack
```

> ⚠️ **Importante:** no todas las operaciones asíncronas terminan específicamente en la misma cola. Las Promises utilizan **microtask queue**, que tiene prioridad sobre la task queue en los puntos correspondientes del event loop.

---

# 🌐 ¿QUÉ ES EL WEB API?

### 🎤 Respuesta para entrevista

> **Las Web APIs son funcionalidades proporcionadas por el navegador que permiten a JavaScript interactuar con capacidades del entorno, como el DOM, timers, eventos, almacenamiento y solicitudes HTTP. No forman parte del lenguaje JavaScript en sí, sino del entorno del navegador.**

### 🌐 Ejemplos

```text
DOM
fetch()
setTimeout()
localStorage
Geolocation
WebSockets
addEventListener()
```

### 💻 Ejemplo

```js
setTimeout(() => {
  console.log('Hola');
}, 1000);
```

`setTimeout()` no es una característica definida por ECMAScript.

Es proporcionada por el entorno.

### 🧠 Diferencia importante

| Concepto         | Significado                     |
| ---------------- | ------------------------------- |
| **ECMAScript**   | → lenguaje                      |
| **Browser APIs** | → funcionalidades del navegador |

---

# ⏱️ ¿QUÉ ES ASINCRONÍA?

### 🎤 Respuesta para entrevista

> **La asincronía permite iniciar una operación que puede tardar sin bloquear la ejecución del código que puede continuar mientras esa operación se completa. Cuando el resultado está disponible, se ejecuta el código correspondiente siguiendo las reglas del runtime y del Event Loop.**

### 💻 Ejemplo

```js
console.log('Inicio');

setTimeout(() => {
  console.log('Proceso terminado');
}, 2000);

console.log('Fin');
```

### 📤 Resultado

```text
Inicio
Fin

...2 segundos...

Proceso terminado
```

### 🆚 Sincronía vs Asincronía

| Sincronía | Asincronía     |
| --------- | -------------- |
| A         | A              |
| ↓         | ↓              |
| espera    | inicia proceso |
| ↓         | B              |
| B         | ↓              |
| ↓         | continúa       |
| C         | C              |
|           | ↓              |
|           | continúa       |
|           | ↓              |
|           | resultado      |
|           | ↓              |
|           | callback       |

# 🔥 VARIABLES

# 🟨 ¿DIFERENCIA ENTRE `var`, `let` Y `const`?

### 🎤 Respuesta para entrevista

> **`var`, `let` y `const` permiten declarar variables, pero tienen diferencias en cuanto a scope, redeclaración y reasignación. `var` tiene function scope, mientras que `let` y `const` tienen block scope. `let` permite reasignación, `const` no permite reasignar la variable y `var` permite tanto redeclaración como reasignación.**

### 📊 Comparación

|                            | `var`    | `let` | `const` |
| -------------------------- | -------- | ----- | ------- |
| **Scope**                  | Function | Block | Block   |
| **Reasignar**              | ✅        | ✅     | ❌       |
| **Redeclarar mismo scope** | ✅        | ❌     | ❌       |
| **Hoisting**               | ✅        | ✅*    | ✅*      |

> 🧠 `*` pero `let` y `const` están en la **Temporal Dead Zone** antes de su declaración.

### 💻 Ejemplo

```js
let age = 20;

age = 21;
```

✅ Correcto.

Pero:

```js
const age = 20;

age = 21;
```

❌ Error.

---

# 🪄 ¿QUÉ ES HOISTING?

### 🎤 Respuesta para entrevista

> **Hoisting es el comportamiento por el cual determinadas declaraciones son procesadas antes de la ejecución del código dentro de su contexto. Esto afecta de forma diferente a variables declaradas con `var`, `let`, `const` y a las declaraciones de funciones.**

### 💻 Ejemplo

```js
console.log(a);

var a = 10;
```

### 📤 Resultado

```text
undefined
```

Conceptualmente:

```js
var a;

console.log(a);

a = 10;
```

Pero con:

```js
console.log(a);

let a = 10;
```

❌ Error.

Esto ocurre porque `let` y `const` están en la:

## 🚨 Temporal Dead Zone — TDZ

Es el período desde el inicio del scope hasta la declaración de la variable en el que no puedes acceder a ella.

---

# 🌎 ¿QUÉ ES SCOPE?

### 🎤 Respuesta para entrevista

> **Scope es el alcance en el que una variable puede ser accedida dentro del código. Determina desde qué partes del programa una variable es visible y puede utilizarse.**

### 💻 Ejemplo

```js
const name = 'Alo';

function hello() {
  console.log(name);
}
```

La función puede acceder a `name` porque está disponible desde su scope externo.

---

# 🧩 ¿QUÉ DIFERENCIA HAY ENTRE GLOBAL SCOPE, FUNCTION SCOPE Y BLOCK SCOPE?

## 🌍 Global Scope

Una variable declarada fuera de funciones y bloques puede estar disponible en un ámbito global, sujeto a las reglas del entorno y del tipo de declaración.

```js
const name = 'Alo';

function hello() {
  console.log(name);
}
```

---

## 🧩 Function Scope

Una variable declarada con `var` dentro de una función pertenece a esa función.

```js
function test() {
  var message = 'Hello';

  console.log(message);
}
```

Fuera:

```js
console.log(message);
```

❌ No existe.

---

## 🧱 Block Scope

`let` y `const` respetan bloques como:

```text
if
for
while
{}
```

Ejemplo:

```js
if (true) {
  let name = 'Alo';
  const age = 25;
}

console.log(name);
```

❌ No disponible fuera del bloque.

### 🧠 Resumen

| Scope        | Ámbito                  |
| ------------ | ----------------------- |
| **Global**   | → ámbito global         |
| **Function** | → dentro de una función |
| **Block**    | → dentro de `{ }`       |

Y:

| Declaración   | Scope             |
| ------------- | ----------------- |
| `var`         | → function scoped |
| `let / const` | → block scoped    |

---

# 🔄 ¿QUÉ ES UNA VARIABLE MUTABLE?

### 🎤 Respuesta para entrevista

> **Una variable o estructura mutable es aquella cuyo valor o estado interno puede modificarse después de haber sido creada.**

### 💻 Ejemplo

```js
let user = {
  name: 'Alo'
};

user.name = 'John';
```

El objeto fue modificado.

Con arrays:

```js
const users = [];

users.push('Alo');
```

Aunque `users` sea `const`, el **contenido del array es mutable**.

> 🚨 **Esto es importantísimo.**

# 🧊 ¿QUÉ SIGNIFICA INMUTABILIDAD?

### 🎤 Respuesta para entrevista

> **La inmutabilidad significa que, en lugar de modificar directamente una estructura existente, se crea una nueva estructura con el estado actualizado. Esto ayuda a hacer el código más predecible y facilita ciertos patrones de gestión de estado.**

### 🔄 Ejemplo mutable

```js
const user = {
  name: 'Alo'
};

user.name = 'John';
```

Estamos modificando el objeto original.

### 🧊 Versión inmutable

```js
const user = {
  name: 'Alo'
};

const updatedUser = {
  ...user,
  name: 'John'
};
```

Ahora:

```text
user
↓
{ name: 'Alo' }

updatedUser
↓
{ name: 'John' }
```

El objeto original no fue modificado.

> 🧠 **Importante**
>
> `const` **NO significa inmutabilidad**.

Esto:

```js
const users = [];

users.push('Alo');
```

es perfectamente válido.

Porque `const` impide **reasignar la referencia**, no modificar el contenido del objeto.

---

# 🔥 TIPOS DE DATOS

# 🧩 ¿CUÁLES SON LOS TIPOS DE DATOS DE JAVASCRIPT?

JavaScript tiene **tipos primitivos** y **Object** como categoría general de valores no primitivos.

### 🧱 Tipos primitivos

```text
string
number
bigint
boolean
undefined
symbol
null
```

Y:

```text
object
```

incluye objetos, arrays, funciones que técnicamente son objetos de primera clase pero tienen el tipo `function` cuando se utiliza `typeof`, etc.

### 💻 Ejemplos

```js
const name = 'Alo';       // string
const age = 25;           // number
const active = true;      // boolean
const value = undefined; // undefined
const empty = null;      // null
const id = 123n;          // bigint
const symbol = Symbol();  // symbol
const user = {};          // object
```

### 🧠 Una clasificación útil

```text
PRIMITIVOS
├── string
├── number
├── bigint
├── boolean
├── undefined
├── symbol
└── null

NO PRIMITIVOS
└── object
    ├── Object
    ├── Array
    ├── Date
    ├── Map
    ├── Set
    └── ...
```

---

# 🧬 ¿QUÉ DIFERENCIA HAY ENTRE TIPOS PRIMITIVOS Y OBJETOS?

### 🎤 Respuesta para entrevista

> **Los valores primitivos representan datos simples y son inmutables. Los objetos son estructuras que permiten agrupar datos y comportamiento y se manejan mediante referencias.**

### 🔹 Ejemplo primitivo

```js
let name = 'Alo';

let otherName = name;

otherName = 'John';

console.log(name);
```

### 📤 Resultado

```text
Alo
```

### 🔸 Con objetos

```js
const user = {
  name: 'Alo'
};

const otherUser = user;

otherUser.name = 'John';

console.log(user.name);
```

### 📤 Resultado

```text
John
```

### 🧠 ¿Por qué?

Porque:

```text
user
 ↓
┌──────────────┐
│ objeto       │
│ name: Alo    │
└──────────────┘
 ↑
otherUser
```

Ambas variables apuntan al mismo objeto.

# ❓ ¿QUÉ DIFERENCIA HAY ENTRE `null` Y `undefined`?

### 🎤 Respuesta para entrevista

> **`undefined` normalmente representa la ausencia de un valor asignado o que algo no está definido, mientras que `null` representa una ausencia de valor establecida explícitamente por el programador.**

### 💻 Ejemplo

```js id="1q3s9r"
let value;

console.log(value);
```

### 📤 Resultado

```text id="v9n4gh"
undefined
```

Mientras:

```js id="4r6l4k"
let user = null;
```

significa:

> **"Intencionalmente no hay usuario."**

### 🧠 Regla mental

| Valor       | Significado                            |
| ----------- | -------------------------------------- |
| `undefined` | → no está definido / no se ha asignado |
| `null`      | → ausencia intencional de valor        |

> ⚠️ **Curiosidad clásica de entrevista:**
>
> ```js
> typeof null
> ```
>
> devuelve:
>
> ```text
> "object"
> ```
>
> Esto es un comportamiento histórico de JavaScript.

---

# 🚨 ¿QUÉ ES `NaN`?

Significa:

> **Not-a-Number**

### 🎤 Respuesta para entrevista

> **`NaN` es un valor especial de JavaScript que representa el resultado de una operación numérica que no produce un número válido.**

### 💻 Ejemplo

```js id="j9w7r2"
const result = Number('hello');

console.log(result);
```

### 📤 Resultado

```text id="k4n7ts"
NaN
```

Otro:

```js id="5f9b2u"
0 / 0
```

→ `NaN`

### ⚠️ Pregunta trampa

```js id="q6f0xw"
NaN === NaN
```

Resultado:

```text id="3o8j7m"
false
```

Para comprobarlo:

```js id="4o3c1a"
Number.isNaN(value);
```

---

# ⚔️ ¿QUÉ DIFERENCIA HAY ENTRE `==` Y `===`?

### 🎤 Respuesta para entrevista

> **`==` realiza comparación con coerción de tipos en determinados casos, mientras que `===` compara tanto el valor como el tipo sin realizar esa conversión implícita. Por eso normalmente se recomienda utilizar `===`.**

### 💻 Ejemplo

```js id="y1r6tc"
5 == '5'
```

```text
true
```

Porque convierte tipos para comparar.

Pero:

```js id="9w6f1p"
5 === '5'
```

```text
false
```

Porque:

```text id="3n0r5k"
5     → number
'5'   → string
```

### 🧠 Regla

| Operador | Significado             |
| -------- | ----------------------- |
| `==`     | → igualdad con coerción |
| `===`    | → igualdad estricta     |

---

# ✅ ¿QUÉ ES TRUTHY Y FALSY?

### 🎤 Respuesta para entrevista

> **Truthy y Falsy describen cómo JavaScript convierte un valor a booleano en contextos donde se espera una condición. Los valores Falsy se comportan como `false`, mientras que los demás valores son generalmente Truthy.**

### 🚨 Valores Falsy importantes

```text id="l0w1js"
false
0
-0
0n
''
null
undefined
NaN
```

Todo lo demás es Truthy.

### 💻 Ejemplo

```js id="b3k8qv"
if ('hello') {
  console.log('Se ejecuta');
}
```

Porque:

```text id="7f3v2m"
'hello'
↓
Truthy
↓
true
```
### ⚠️ Pregunta típica

**¿Un array vacío es falsy?**

```js
if ([]) {
  console.log('Hola');
}
```

Sí se ejecuta.

Porque:

```text
[] → Truthy
```

Lo mismo:

```js
{}
```

es Truthy.

---

# 🔄 ¿QUÉ ES TYPE COERCION?

### 🎤 Respuesta para entrevista

> **Type coercion es la conversión de un valor de un tipo de dato a otro. JavaScript puede realizar estas conversiones de forma implícita o podemos hacerlas explícitamente.**

## 🔹 Implícita

```js
'5' + 2
```

Resultado:

```text
'52'
```

JavaScript convierte el `2` a string.

Pero:

```js
'5' - 2
```

Resultado:

```text
3
```

Aquí JavaScript convierte `'5'` a número.

## 🔹 Explícita

```js
Number('5');
```

```js
String(10);
```

```js
Boolean(1);
```

### 🧠 Diferencia

| Tipo                     | Significado                            |
| ------------------------ | -------------------------------------- |
| **Coerción implícita**   | → JavaScript convierte automáticamente |
| **Conversión explícita** | → nosotros hacemos la conversión       |

---

# 🔥 RESUMEN DE MEMORIA

> 🧠 **Si antes de una entrevista quieres hacer un repaso rápido:**

| Concepto                | Idea clave                                                 |
| ----------------------- | ---------------------------------------------------------- |
| **JAVASCRIPT**          | → lenguaje de programación                                 |
| **ECMASCRIPT**          | → estándar/especificación del lenguaje                     |
| **ENGINE**              | → ejecuta JavaScript                                       |
| **RUNTIME**             | → engine + APIs del entorno + mecanismos de ejecución      |
| **V8**                  | → JavaScript engine                                        |
| **SINGLE-THREADED**     | → ejecución JS principal en un hilo por contexto           |
| **CALL STACK**          | → controla ejecución de funciones                          |
| **EVENT LOOP**          | → coordina ejecución de tareas asíncronas                  |
| **CALLBACK/TASK QUEUE** | → cola de tareas pendientes                                |
| **WEB APIs**            | → APIs proporcionadas por navegador                        |
| **ASINCRONÍA**          | → permite continuar mientras una operación termina         |
| **var**                 | → function scope                                           |
| **let**                 | → block scope + reasignable                                |
| **const**               | → block scope + no reasignable                             |
| **HOISTING**            | → declaraciones procesadas antes de ejecución              |
| **SCOPE**               | → alcance de variables                                     |
| **MUTABILIDAD**         | → podemos modificar una estructura                         |
| **INMUTABILIDAD**       | → no modificamos el original; creamos otro                 |
| **PRIMITIVOS**          | → string, number, bigint, boolean, undefined, symbol, null |
| **OBJECT**              | → estructuras por referencia                               |
| **undefined**           | → ausencia/no definición                                   |
| **null**                | → ausencia intencional                                     |
| **NaN**                 | → resultado numérico no válido                             |
| `==`                    | → comparación con coerción                                 |
| `===`                   | → comparación estricta                                     |
| **TRUTHY**              | → se comporta como true                                    |
| **FALSY**               | → se comporta como false                                   |
| **TYPE COERCION**       | → conversión entre tipos                                   |

---

# ⭐🔥 PREGUNTAS QUE TE PUEDEN ENCADENAR

En una entrevista es muy común que no se queden en una sola pregunta.

### 🧵 Ejemplo 1

> **"¿JavaScript es single-threaded?"**

Tú:

> Sí, el código JavaScript de un contexto normalmente se ejecuta en un único hilo.

Entrevistador:

> **"Entonces, ¿cómo puede hacer peticiones HTTP sin bloquear?"**

Y ahí debes conectar:

```text
JavaScript
   ↓
Web APIs / Runtime
   ↓
operación asíncrona
   ↓
Task Queue / Microtask Queue
   ↓
Event Loop
   ↓
Call Stack
```

---

### 🧊 Ejemplo 2

> **"¿Cuál es la diferencia entre `const` e inmutabilidad?"**

Respuesta:

> `const` evita reasignar la variable, pero no hace inmutable el objeto al que apunta.

```js
const user = {
  name: 'Alo'
};

user.name = 'John'; // ✅
```

---

### ⚔️ Ejemplo 3

> **"¿Qué pasa con `null == undefined` y `null === undefined`?"**

```js
null == undefined
// true

null === undefined
// false
```

Porque `==` permite coerción y `===` compara estrictamente tipos y valores.

