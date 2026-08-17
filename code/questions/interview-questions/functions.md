# 🧩 5. FUNCIONES — RESPUESTAS PARA ENTREVISTA

## 📑 ÍNDICE

- [¿Qué es una función?](#-qué-es-una-función)
- [¿Qué diferencia hay entre una declaración de función y una expresión de función?](#-qué-diferencia-hay-entre-una-declaración-de-función-y-una-expresión-de-función)
  - [Function Declaration](#-function-declaration)
  - [Function Expression](#-function-expression)
- [¿Qué es una Arrow Function?](#-qué-es-una-arrow-function)
- [¿Qué diferencia hay entre una función normal y una Arrow Function?](#-qué-diferencia-hay-entre-una-función-normal-y-una-arrow-function)
- [¿Qué es un Callback?](#-qué-es-un-callback)
- [¿Qué es una función de orden superior?](#-qué-es-una-función-de-orden-superior)
- [¿Qué es una función pura?](#-qué-es-una-función-pura)
- [¿Qué es recursividad?](#-qué-es-recursividad)
- [¿Cuándo utilizarías recursividad?](#-cuándo-utilizarías-recursividad)
- [¿Qué es un Closure?](#-qué-es-un-closure)
- [¿Qué es el contexto de una función?](#-qué-es-el-contexto-de-una-función)
- [¿Qué es `this`?](#-qué-es-this)
- [¿Cómo funciona `this` en una Arrow Function?](#-cómo-funciona-this-en-una-arrow-function)

## ⚔️ COMPARACIONES IMPORTANTES

- [Función normal vs Arrow — `this`](#-función-normal-vs-arrow--this)
- [Resumen para memorizar](#-resumen-para-memorizar)
- [Diferencias que debes poder explicar](#-diferencias-que-debes-poder-explicar)

## ⭐🔥 PREGUNTAS DE ENTREVISTA

- [¿Por qué usarías una Arrow Function dentro de un método?](#-por-qué-usarías-una-arrow-function-dentro-de-un-método)

# 🔹 ¿QUÉ ES UNA FUNCIÓN?

### 🎤 Respuesta para entrevista

> **Una función es un bloque de código reutilizable que puede recibir datos mediante parámetros, ejecutar una lógica y opcionalmente devolver un resultado.**

### 💻 Ejemplo

```js
function sum(a, b) {
  return a + b;
}

sum(2, 3);
```

### 📤 Resultado

```text
5
```

Una función puede:

|    |                    |
| -- | ------------------ |
| 📥 | recibir parámetros |
| ⚙️ | ejecutar lógica    |
| 📤 | retornar un valor  |

---

# 📝 ¿QUÉ DIFERENCIA HAY ENTRE UNA DECLARACIÓN DE FUNCIÓN Y UNA EXPRESIÓN DE FUNCIÓN?

### 🎤 Respuesta para entrevista

> **Una declaración de función define una función directamente mediante `function`, mientras que una expresión de función crea una función y la asigna a una variable. Una diferencia importante es su comportamiento respecto al hoisting.**

## 🟢 Function Declaration

```js
function greet() {
  console.log('Hello');
}
```

Puede llamarse antes de su declaración:

```js
greet();

function greet() {
  console.log('Hello');
}
```

✅ Funciona porque las declaraciones de funciones tienen un comportamiento de hoisting que permite su llamada antes de la línea de declaración.

---

## 🔵 Function Expression

```js
const greet = function () {
  console.log('Hello');
};
```

Aquí la función está asignada a una variable.

```js
greet();

const greet = function () {
  console.log('Hello');
};
```

❌ No funciona.

La variable `greet` está sujeta a las reglas de `const` y su **Temporal Dead Zone**.

### 🧠 Resumen

| Function Declaration                      | Function Expression                                    |
| ----------------------------------------- | ------------------------------------------------------ |
| `function greet() {}`                     | `const greet = function () {}`                         |
| → declaración directa                     | → función asignada a variable                          |
| → puede invocarse antes de la declaración | → no puede utilizarse antes de inicializar la variable |

---

# ⚡ ¿QUÉ ES UNA ARROW FUNCTION?

### 🎤 Respuesta para entrevista

> **Una Arrow Function es una sintaxis alternativa para definir funciones introducida en ES6. Además de tener una sintaxis más concisa, tiene un comportamiento diferente respecto a `this`, `arguments` y `new`.**

### 💻 Ejemplo tradicional

```js
function sum(a, b) {
  return a + b;
}
```

### ⚡ Arrow

```js
const sum = (a, b) => {
  return a + b;
};
```

Y si solo tenemos una expresión:

```js
const sum = (a, b) => a + b;
```

También:

```js
const double = n => n * 2;
```

---

# 🆚 ¿QUÉ DIFERENCIA HAY ENTRE UNA FUNCIÓN NORMAL Y UNA ARROW FUNCTION?

🔥 **Muy típica.**

### 🎤 Respuesta para entrevista

> **La principal diferencia está en cómo manejan `this`. Una función normal obtiene su `this` dependiendo de cómo es invocada, mientras que una Arrow Function no crea su propio `this`, sino que captura el `this` del contexto léxico donde fue creada. Además, las Arrow Functions no tienen su propio `arguments` y no pueden utilizarse como constructores con `new`.**

## 🟦 Función normal

```js
const user = {
  name: 'Alo',

  greet: function () {
    console.log(this.name);
  }
};

user.greet();
```

Resultado:

```text
Alo
```

Aquí `this` depende de cómo se invoca la función.

---

## 🟨 Arrow Function

```js
const user = {
  name: 'Alo',

  greet: () => {
    console.log(this.name);
  }
};
```

Aquí `this` **no apunta automáticamente a `user`**.

La Arrow Function toma `this` de su contexto léxico exterior.

### 🧠 Diferencias importantes

| Función normal                          | Arrow Function                            |
| --------------------------------------- | ----------------------------------------- |
| Tiene su propio `this` según invocación | No tiene su propio `this`                 |
| Tiene `arguments`                       | No tiene `arguments` propio               |
| Puede utilizarse con `new`              | ❌ No                                      |
| Sintaxis tradicional                    | Sintaxis más concisa                      |
| Puede ser método                        | Sí                                        |
| Puede ser método                        | Sí, pero hay que tener cuidado con `this` |

> 💡 **No significa que una sea "mejor".** Depende del caso.

---

# 🔄 ¿QUÉ ES UN CALLBACK?

### 🎤 Respuesta para entrevista

> **Un callback es una función que se pasa como argumento a otra función para que pueda ser ejecutada posteriormente o dentro de un proceso determinado.**

### 💻 Ejemplo

```js
function processUser(name, callback) {
  callback(name);
}

processUser('Alo', name => {
  console.log(name);
});
```

Aquí:

```text
callback
↓
función que pasamos como argumento
```

También:

```js
setTimeout(() => {
  console.log('Hola');
}, 1000);
```

La función:

```js
() => {
  console.log('Hola');
}
```

es un callback.

> 🧠 **Importante**
>
> Un callback **no necesariamente es asíncrono**.

Esto también es un callback:

```js
[1, 2, 3].map(number => number * 2);
```

La función pasada a `map()` es un callback, aunque `map()` sea una operación síncrona.

---

# 🏭 ¿QUÉ ES UNA FUNCIÓN DE ORDEN SUPERIOR?

### 🎤 Respuesta para entrevista

> **Una función de orden superior es una función que recibe una o más funciones como argumentos, devuelve una función, o ambas cosas.**

### 💻 Ejemplo

```js
function execute(callback) {
  callback();
}
```

`execute` es una función de orden superior porque recibe una función.

Otro ejemplo:

```js
function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}
```

Aquí devuelve otra función.

```js
const double = createMultiplier(2);

double(5);
```

### 📤 Resultado

```text
10
```

### 🧠 Muy relacionado con:

```text
map()
filter()
reduce()
forEach()
```

Por ejemplo:

```js
const numbers = [1, 2, 3];

const doubled = numbers.map(number => number * 2);
```

`map()` es una función de orden superior porque recibe una función.

# 🧪 ¿QUÉ ES UNA FUNCIÓN PURA?

### 🎤 Respuesta para entrevista

> **Una función pura es una función que, para los mismos argumentos, siempre produce el mismo resultado y no genera efectos secundarios observables fuera de ella.**

### 💻 Ejemplo

```js
function sum(a, b) {
  return a + b;
}
```

Siempre:

```text
sum(2, 3)
↓
5
```

Y no modifica nada externo.

---

### ❌ Ejemplo de función impura

```js
let total = 0;

function add(value) {
  total += value;
}
```

La función modifica una variable externa.

Eso es un **side effect**.

Otros efectos secundarios pueden ser:

|     |                                |
| --- | ------------------------------ |
| 🌐  | petición HTTP                  |
| 📝  | modificar una variable externa |
| 💾  | escribir en localStorage       |
| 🖥️ | modificar el DOM               |
| 📢  | lanzar un evento               |

### 🧠 Resumen

```text
FUNCIÓN PURA

mismos inputs
     ↓
mismo output

+
sin efectos secundarios
```

---

# 🔁 ¿QUÉ ES RECURSIVIDAD?

### 🎤 Respuesta para entrevista

> **La recursividad es una técnica en la que una función se llama a sí misma para resolver un problema dividiéndolo en problemas más pequeños, hasta alcanzar una condición de parada llamada caso base.**

### 💻 Ejemplo

```js
function countdown(n) {

  if (n === 0) {
    return;
  }

  console.log(n);

  countdown(n - 1);
}

countdown(3);
```

### 📤 Resultado

```text
3
2
1
```

Tenemos:

| Tipo               | Ejemplo              |
| ------------------ | -------------------- |
| **Caso base**      | → `n === 0`          |
| **Caso recursivo** | → `countdown(n - 1)` |

> ⚠️ **Muy importante**
>
> Toda recursividad necesita una **condición de parada**.

Si no:

```js
function infinite() {
  infinite();
}
```

terminará produciendo un error por desbordamiento del Call Stack:

```text
RangeError: Maximum call stack size exceeded
```

---

# 🤔 ¿CUÁNDO UTILIZARÍAS RECURSIVIDAD?

### 🎤 Respuesta para entrevista

> **La utilizaría principalmente cuando el problema tiene una estructura naturalmente recursiva, como árboles, estructuras jerárquicas o algoritmos de divide and conquer. No la utilizaría automáticamente para cualquier problema, porque puede consumir más memoria por el crecimiento del Call Stack y una solución iterativa puede ser más sencilla o eficiente.**

### 🌳 Árboles

```text
        📁 Root
       /      \
    📁 A      📁 B
    /  \
 📄 1  📄 2
```

Recorrer un árbol es un caso natural para recursividad.

También:

```text
📁 carpetas
🌳 árboles
🧩 estructuras anidadas
🔀 divide and conquer
```

### 🧠 Regla

```text
Problema naturalmente jerárquico
            ↓
      Recursividad
```

Pero:

```text
Problema simple
     ↓
for / while
```

puede ser más claro.

---

# 🔐 ¿QUÉ ES UN CLOSURE?

🔥🔥 **Esta es de las preguntas más importantes de JavaScript.**

### 🎤 Respuesta para entrevista

> **Un closure ocurre cuando una función mantiene acceso a las variables de su scope léxico externo incluso después de que la función externa haya terminado de ejecutarse.**

### 💻 Ejemplo

```js
function createCounter() {

  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

counter();
counter();
counter();
```

### 📤 Resultado

```text
1
2
3
```

Pero:

```js
createCounter();
```

ya terminó.

Entonces:

```text
createCounter()
       ↓
   termina
       ↓
 función interna
       ↓
 mantiene acceso a count
```

Ese es el closure.

### 🧠 Visualmente

```text
createCounter()
│
├── count = 0
│
└── function()
      ↓
   recuerda count
```

Aunque `createCounter()` haya terminado, la función interna mantiene acceso a `count`.

### 🔥 ¿Para qué sirve?

Los closures aparecen muchísimo en:

|    |                   |
| -- | ----------------- |
| 🔐 | Encapsulación     |
| 🏭 | Factory Functions |
| ⚡  | Callbacks         |
| ⏱️ | Timers            |
| 🧠 | Estado privado    |

### 💻 Por ejemplo, podemos crear un estado privado:

```js
function createBankAccount() {

  let balance = 0;

  return {
    deposit(amount) {
      balance += amount;
    },

    getBalance() {
      return balance;
    }
  };
}
```

Desde fuera no tenemos acceso directo a:

```js
balance
```

pero los métodos pueden acceder gracias al closure.

# 🧠 ¿QUÉ ES EL CONTEXTO DE UNA FUNCIÓN?

Aquí hay que tener cuidado porque **"contexto" puede utilizarse para hablar de varias cosas**.

### 🎤 Respuesta para entrevista

> **El contexto de una función se refiere al entorno en el que la función se ejecuta, incluyendo aspectos como su scope léxico y, dependiendo del tipo de función y cómo se invoque, el valor de `this`.**

### 💻 Ejemplo

```js id="n4c1g8"
const user = {
  name: 'Alo',

  greet() {
    console.log(this.name);
  }
};

user.greet();
```

Aquí:

```text id="k5g3zj"
this
↓
user
```

Pero si extraemos la función:

```js id="q3r5az"
const greet = user.greet;

greet();
```

el comportamiento de `this` cambia.

### 🧠 Por eso es importante diferenciar

| Concepto                | Significado                                              |
| ----------------------- | -------------------------------------------------------- |
| **Scope**               | → dónde puede acceder a variables                        |
| **Lexical Environment** | → entorno léxico que la función puede cerrar/capturar    |
| **`this`**              | → valor determinado por el contexto/reglas de invocación |

---

# 🧍 ¿QUÉ ES `THIS`?

🔥 **Pregunta clásica de entrevista.**

### 🎤 Respuesta para entrevista

> **`this` es una referencia cuyo valor depende de cómo se invoca una función. En una función normal, su valor se determina principalmente por el contexto de llamada; no simplemente por dónde fue definida. En una Arrow Function, `this` se obtiene léxicamente del contexto exterior.**

### 💻 Ejemplo

```js id="r1z6mp"
const user = {
  name: 'Alo',

  greet() {
    console.log(this.name);
  }
};

user.greet();
```

### 📤 Resultado

```text id="y1t7cd"
Alo
```

Porque:

```text id="2y7w8c"
user.greet()
     ↓
this = user
```

---

## 🔥 Otro ejemplo

```js id="t7m4fp"
const user = {
  name: 'Alo',

  greet: function () {
    console.log(this.name);
  }
};

const greet = user.greet;

greet();
```

Aquí `this` **ya no es automáticamente `user`**.

> 🧠 **Esto demuestra la regla:**
>
> **En una función normal, `this` depende de cómo se invoca la función.**

---

# ⚡ ¿CÓMO FUNCIONA `THIS` EN UNA ARROW FUNCTION?

### 🎤 Respuesta para entrevista

> **Una Arrow Function no tiene su propio `this`. Captura el `this` del contexto léxico donde fue creada. Por eso cambiar la forma en que se invoca una Arrow Function no cambia su `this` como ocurre con una función normal.**

### 💻 Ejemplo

```js id="5x6c9p"
const user = {
  name: 'Alo',

  greet() {

    const sayName = () => {
      console.log(this.name);
    };

    sayName();
  }
};

user.greet();
```

### 📤 Resultado

```text id="7x2g5a"
Alo
```

### 🧠 ¿Por qué?

```text id="m8r4q1"
user.greet()
     ↓
this = user

sayName()
     ↓
Arrow Function
     ↓
NO crea su propio this
     ↓
usa el this exterior
     ↓
user
```

---

# ⚔️ FUNCIÓN NORMAL VS ARROW — `THIS`

## 🟦 Función normal

```js id="9v4z2m"
const user = {
  name: 'Alo',

  greet: function () {
    console.log(this.name);
  }
};

user.greet();
```

```text id="j8q2sn"
this
↓
user
```

Porque la función fue llamada como:

```text id="n5g1w3"
user.greet()
```

---

## 🟨 Arrow Function

```js id="q9k2vr"
const user = {
  name: 'Alo',

  greet: () => {
    console.log(this.name);
  }
};
```

Aquí **no debes asumir que `this` es `user`**.

La arrow captura el `this` del contexto donde fue creada.

### 🧠 Regla de oro

| Tipo                | `this`                                     |
| ------------------- | ------------------------------------------ |
| **function normal** | → depende de la llamada                    |
| **arrow function**  | → viene del scope/contexto léxico exterior |

---

# 🔥 RESUMEN PARA MEMORIZAR

| Concepto                  | Idea clave                                                           |
| ------------------------- | -------------------------------------------------------------------- |
| **FUNCIÓN**               | → bloque reutilizable de código                                      |
| **FUNCTION DECLARATION**  | → `function greet() {}`                                              |
| **FUNCTION EXPRESSION**   | → `const greet = function() {}`                                      |
| **ARROW FUNCTION**        | → `const greet = () => {}`                                           |
| **CALLBACK**              | → función pasada como argumento                                      |
| **HIGHER-ORDER FUNCTION** | → recibe o devuelve funciones                                        |
| **FUNCIÓN PURA**          | → mismo input = mismo output<br>→ sin efectos secundarios            |
| **RECURSIVIDAD**          | → función que se llama a sí misma                                    |
| **CASO BASE**             | → condición que detiene la recursividad                              |
| **CLOSURE**               | → función recuerda/accede a variables de su scope léxico exterior    |
| **CONTEXTO**              | → entorno en el que se ejecuta una función                           |
| **THIS**                  | → referencia cuyo valor depende de las reglas de invocación/contexto |
| **ARROW + THIS**          | → no tiene this propio<br>→ captura el this léxico exterior          |

---

# ⭐🔥 DIFERENCIAS QUE DEBES PODER EXPLICAR

| Diferencia                                 | Concepto                                                                                   |
| ------------------------------------------ | ------------------------------------------------------------------------------------------ |
| **Declaration vs Expression**              | → declaración directa vs función asignada a variable                                       |
| **Normal vs Arrow**                        | → comportamiento de `this`, `arguments` y `new`                                            |
| **Callback vs Higher-Order Function**      | → callback = función que pasamos<br>→ higher-order = función que recibe/devuelve funciones |
| **Pure vs Impure**                         | → sin efectos secundarios vs puede producirlos                                             |
| **Iteración vs Recursividad**              | → repetición mediante loops vs función que se llama a sí misma                             |
| **Scope vs Closure**                       | → alcance de variables vs función que conserva acceso a su entorno léxico                  |
| **Normal Function `this` vs Arrow `this`** | → depende de la invocación vs léxico                                                       |

---

### 🧠 Pregunta de entrevista MUY buena

> **"¿Por qué usarías una Arrow Function dentro de un método?"**

Una respuesta interesante sería:

> **Porque una Arrow Function puede ser útil cuando quiero que una función interna conserve el `this` del método exterior, por ejemplo en callbacks.**

```js id="x3n8p7"
const user = {
  name: 'Alo',

  greet() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  }
};
```

Aquí la Arrow Function permite conservar el `this` del método `greet()`.

> 🔗 Esto conecta **funciones + callbacks + closures + `this` + asincronía**, que son precisamente conceptos que suelen aparecer juntos en entrevistas Frontend.
