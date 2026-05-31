# 📘 ¿Qué es JavaScript y cómo funciona?

> 🧠 JavaScript es un lenguaje de programación **interpretado**.

👉 Se usa principalmente para crear páginas web interactivas.

---

# 🟢 1. ¿Qué es JavaScript?

## 🧠 Definición

JavaScript es un lenguaje de programación que se ejecuta principalmente en el navegador.

---

## ✔️ Lo que permite hacer

- Manipular HTML y CSS
- Responder a eventos (clicks, teclas, etc.)
- Hacer peticiones a servidores (APIs)

---

## 💡 Ejemplo básico

```js
console.log('Hola mundo');
```

---

# 🔵 2. ¿Dónde se ejecuta?

## 🧠 Principalmente en el navegador

### ✔️ Navegadores comunes

- Chrome
- Firefox
- Edge

---

## 🧠 También fuera del navegador

- Node.js

👉 Permite usar JavaScript en el **backend** (servidores).

---

# 🟣 3. ¿Cómo funciona?

## 🧠 JavaScript es interpretado

El navegador tiene un **motor de JavaScript** que ejecuta el código.

---

## 💡 Flujo

```text
Código JS → Motor JS → Ejecución
```

---

# 🟡 4. Motor de JavaScript

## 🧠 ¿Qué es?

Es el sistema que interpreta y ejecuta el código JavaScript.

---

## ✔️ Ejemplos de motores

| Motor        | Navegador |
| ------------ | --------- |
| V8           | Chrome    |
| SpiderMonkey | Firefox   |

---

## 🧠 Función

Convierte tu código en instrucciones que la máquina puede entender.

---

# 🟠 5. JavaScript es dinámico

## 🧠 Definición

No necesitas declarar tipos estrictos.

---

## 💡 Ejemplo

```js
let x = 10;
x = 'hola';
```

👉 Las variables pueden cambiar de tipo fácilmente.

---

# 🔴 6. JavaScript es de un solo hilo

## 🧠 Definición

JavaScript ejecuta una tarea a la vez.

---

## 🧠 Componentes clave

- Call Stack
- Event Loop

---

## 🧠 Ventaja

Permite manejar operaciones asíncronas sin bloquear la ejecución.

---

# ⚫ 7. Event Loop (Básico)

## 🧠 ¿Qué es?

Es el sistema que gestiona tareas asíncronas en JavaScript.

---

## 💡 Ejemplo

```js
console.log('1');

setTimeout(() => {
  console.log('2');
}, 0);

console.log('3');
```

---

## 🧠 Resultado

```text
1
3
2
```

---

## 🧠 Explicación

- `console.log('1')` → se ejecuta primero
- `setTimeout` → se envía al Event Loop
- `console.log('3')` → se ejecuta
- luego vuelve el `setTimeout`

---

# 🚀 Resumen

## 🧠 JavaScript

- Es un lenguaje interpretado
- Se ejecuta en el navegador o Node.js
- Es dinámico (tipado flexible)
- Es de un solo hilo
- Usa Event Loop para tareas async

---

## 💡 Idea clave

👉 JavaScript hace posible la **interactividad en la web** y maneja la asincronía gracias al Event Loop 🚀

# 📘 Asincronía y variables en JavaScript

---

# ⚪ 8. Asincronía

## 🧠 Concepto

JavaScript puede ejecutar tareas "en segundo plano" sin bloquear el hilo principal.

---

## ✔️ Ejemplos

- `setTimeout` → retrasos temporales
- `fetch` → llamadas a APIs
- Eventos → clicks, inputs, etc.

---

# 🟤 9. JavaScript y el DOM

## 🧠 Concepto

JS puede **modificar la página web** dinámicamente.

---

## 💡 Ejemplo

```js
document.querySelector('h1').textContent = 'Hola';
```

👉 Cambia el contenido visible en pantalla.

---

# 🟢 10. JavaScript es multiparadigma

## 🧠 Concepto

Admite varios estilos de programación:

- Procedural
- Orientada a objetos
- Funcional

---

# 🔵 11. JavaScript en el frontend

## 🧠 Función

Se ejecuta en el **cliente** (navegador) y controla:

- Interacciones
- UI
- Animaciones

---

# 🟣 12. JavaScript en el backend

## 🧠 Con Node.js

Permite crear:

- Servidores
- APIs
- Manejar bases de datos

---

# 🟡 13. Ventajas

- Fácil de aprender
- Muy usado
- Compatible con todos los navegadores
- Gran comunidad de soporte

---

# 🟠 14. Desventajas

- Puede ser confuso al inicio
- Tipado débil
- Problemas con `this` si no se entiende bien

---

# ⚠️ Cosas importantes

- JS corre en navegador y backend
- Es interpretado (no compilado tradicionalmente)
- De un solo hilo, pero maneja async
- Manipula el DOM (clave para web)

---

# ✨ Resumen

- Hace las páginas interactivas
- Se ejecuta en el navegador
- Usa un motor para correr el código
- Maneja async con Event Loop

👉 Es el lenguaje base del desarrollo web 🚀

---

# 📘 Variables en JavaScript (let, const, var)

## 🧠 Concepto

Variables = espacio en memoria para guardar información.

---

## 💡 Ejemplo básico

```js
let nombre = 'Juan';
```

- `nombre` almacena el valor `'Juan'`.
- Base para manipular datos en JS.

# 📘 Variables en JavaScript (let, const, var)

---

# 🔵 2. Declarar Variables

## 🧠 Concepto

En JavaScript se utilizan tres formas principales de declarar variables:

- `let`
- `const`
- `var`

---

## 💡 Ejemplo

```js
let edad = 20;
const pais = 'Colombia';
var ciudad = 'Bogotá';
```

---

# 🟣 3. let

## 🧠 Definición

Variable cuyo valor **puede cambiar**.

---

## 💡 Ejemplo

```js
let numero = 10;
numero = 20;
```

👉 Se puede reasignar.

---

## ⚠️ Importante

- Tiene **scope de bloque** (block scope).

---

# 🟡 4. const

## 🧠 Definición

Variable **constante** (no puede ser reasignada).

---

## 💡 Ejemplo

```js
const pi = 3.14;
```

---

## ❌ Error

```js
pi = 4; // ❌ no permitido
```

---

## ⚠️ IMPORTANTE

En objetos y arrays:

```js
const persona = { nombre: 'Ana' };
persona.nombre = 'Juan'; // ✅ permitido
```

👉 No se puede reasignar la variable, pero sí mutar su contenido.

---

# 🟠 5. var (antiguo)

## 🧠 Definición

Forma antigua de declarar variables.

---

## 💡 Ejemplo

```js
var x = 10;
```

---

## ⚠️ Problemas

- Scope confuso
- Problemas con hoisting
- Comportamiento poco predecible

👉 No se recomienda en código moderno.

---

# 🔴 6. Diferencias clave

## 🧠 Comparación

| Tipo    | Reasignación | Scope   |
| ------- | ------------ | ------- |
| `let`   | Sí           | Bloque  |
| `const` | No           | Bloque  |
| `var`   | Sí           | Función |

---

# ⚫ 7. Scope (Ámbito)

## 🧠 Definición

El scope define **dónde existe una variable**.

---

## 💡 Ejemplo

```js
if (true) {
  let a = 10;
}

console.log(a); // ❌ error
```

👉 `a` solo existe dentro del bloque.

---

# ⚪ 8. Hoisting

## 🧠 Definición

JavaScript “eleva” (hoistea) declaraciones al inicio del scope.

---

## 💡 Ejemplo con var

```js
console.log(x); // undefined
var x = 5;
```

---

## ❌ Con let / const

```js
console.log(y); // ❌ error
let y = 5;
```

👉 `let` y `const` no permiten acceso antes de su declaración.

---

# 🚀 Resumen

- `let` → se puede reasignar
- `const` → no se puede reasignar
- `var` → antiguo y no recomendado

---

## 🧠 Ideas clave

- Scope = dónde vive la variable
- Hoisting = variables “suben” en ejecución
- `const` no evita mutación, solo reasignación

👉 Usa `let` y `const` en código moderno 🚀

# 📘 Variables en JavaScript (continuación)

---

# 🟤 9. Reasignación

## 🧠 Concepto

Reasignar = cambiar el valor de una variable.

---

## 💡 Ejemplo

```js
let nombre = 'Ana';
nombre = 'Luis'; // ✅ permitido
```

```js
const edad = 20;
edad = 25; // ❌ error
```

---

# 🟢 10. Buenas prácticas

## ✔️ Recomendaciones

- Usar `const` por defecto
- Usar `let` solo si el valor cambia
- Evitar `var`
- Usar nombres claros (`userName`, `totalPrice`)

---

# 🔵 11. Declaración sin valor

## 🧠 Concepto

Puedes declarar una variable sin asignarle valor.

---

## 💡 Ejemplo

```js
let dato;
```

👉 Valor inicial: `undefined`

---

# 🟣 12. Variables y tipos dinámicos

## 🧠 Concepto

JavaScript no tiene tipado fijo.

---

## 💡 Ejemplo

```js
let x = 10;
x = 'hola';
```

👉 El tipo puede cambiar en tiempo de ejecución.

---

# 🟡 13. const con arrays

## 🧠 Concepto

Con `const` NO puedes reasignar, pero sí modificar el contenido.

---

## 💡 Ejemplo

```js
const numeros = [1, 2, 3];
numeros.push(4); // ✅ permitido
```

```js
numeros = []; // ❌ error
```

---

# 🟠 14. const con objetos

## 🧠 Igual que los arrays

---

## 💡 Ejemplo

```js
const user = { nombre: 'Ana' };
user.nombre = 'Luis'; // ✅ permitido
```

```js
user = {}; // ❌ error
```

---

# ⚠️ Cosas importantes

- `let` y `const` tienen scope de bloque
- `var` es antiguo y no recomendado
- `const` no permite reasignación
- JavaScript es dinámico (tipos cambian)

---

# ✨ Resumen

## 🧠 Variables

- `let` → cambia valor
- `const` → no cambia valor
- `var` → evitar

👉 Base para almacenar datos en JavaScript 🚀

---

# 📘 Tipos de datos en JavaScript

> 🧠 Los tipos de datos definen qué tipo de valor almacena una variable.

👉 JavaScript es dinámico (los tipos pueden cambiar).

---

# 🟢 1. String (cadena de texto)

## 🧠 Concepto

Representa texto.

---

## 💡 Ejemplo

```js
let nombre = 'Juan';
let saludo = 'Hola';
let mensaje = `Hola ${nombre}`;
```

---

## 🧠 Tip importante

- `' '` → string simple
- `" "` → string doble
- `` ` ` `` → template strings (permite interpolación)

👉 Las template strings son las más potentes para trabajar con texto dinámico 🚀

# 📘 Tipos de datos en JavaScript (continuación)

---

# 🔵 2. Number (número)

## 🧠 Concepto

Representa números enteros o decimales.

---

## 💡 Ejemplo

```js
let edad = 25;
let precio = 10.5;
```

👉 No hay diferencia entre `int` y `float` en JS.

---

# 🟣 3. Boolean (booleano)

## 🧠 Concepto

Solo tiene dos valores posibles: `true` o `false`.

---

## 💡 Ejemplo

```js
let activo = true;
let esMayor = false;
```

---

# 🟡 4. Null

## 🧠 Concepto

Valor intencionalmente vacío.

---

## 💡 Ejemplo

```js
let usuario = null;
```

👉 Significa "no hay valor".

---

# 🟠 5. Undefined

## 🧠 Concepto

Variable declarada pero sin valor asignado.

---

## 💡 Ejemplo

```js
let dato;

console.log(dato); // undefined
```

👉 JS asigna automáticamente `undefined`.

---

# 🔴 6. Diferencia entre null y undefined

- `null` → valor vacío intencional
- `undefined` → valor no asignado

---

# ⚫ 7. Array

## 🧠 Concepto

Lista de elementos que pueden ser de cualquier tipo.

---

## 💡 Ejemplo

```js
let numeros = [1, 2, 3];
let nombres = ['Ana', 'Luis'];
let mezcla = [1, 'hola', true];
```

---

# ⚪ 8. Object (objeto)

## 🧠 Concepto

Colección de propiedades con clave y valor.

---

## 💡 Ejemplo

```js
let persona = {
  nombre: 'Ana',
  edad: 20,
};
```

### Acceso

```js
persona.nombre; // 'Ana'
persona.edad; // 20
```

---

# 🟤 9. typeof

## 🧠 Concepto

Permite saber el tipo de un dato.

---

## 💡 Ejemplo

```js
typeof 'hola'; // string
typeof 10; // number
typeof true; // boolean
```

### ⚠️ Detalles curiosos

```js
typeof null; // object (error histórico)
typeof []; // object (arrays son objetos)
```

---

# ✨ Resumen

| Tipo      | Ejemplo        | Notas               |
| --------- | -------------- | ------------------- |
| String    | 'Hola'         | Texto               |
| Number    | 25, 10.5       | Enteros y decimales |
| Boolean   | true, false    | Verdadero/Falso     |
| Null      | null           | Vacío intencional   |
| Undefined | let x;         | No asignado         |
| Array     | [1, 'a', true] | Lista de elementos  |
| Object    | {nombre:'Ana'} | Claves y valores    |

# 📘 Operadores en JavaScript (continuación)

---

# 🟢 1. Operadores aritméticos

## 🧠 Concepto

Permiten realizar operaciones matemáticas con números.

---

## 👉 Tipos

| Operador | Función          | Ejemplo | Resultado |
| -------- | ---------------- | ------- | --------- |
| +        | Suma             | 10 + 3  | 13        |
| -        | Resta            | 10 - 3  | 7         |
| \*       | Multiplicación   | 10 \* 3 | 30        |
| /        | División         | 10 / 3  | 3.333…    |
| %        | Módulo (residuo) | 10 % 3  | 1         |

---

## 💡 Ejemplo práctico

```js
let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.3333333333333335
console.log(a % b); // 1
```

---

# 🔵 2. Operadores de asignación

## 🧠 Concepto

Asignan valores a variables, a veces combinando con operaciones.

---

## 👉 Tipos comunes

| Operador | Función             | Ejemplo            |
| -------- | ------------------- | ------------------ |
| =        | Asignación          | x = 5              |
| +=       | Suma y asigna       | x += 3 → x = x + 3 |
| -=       | Resta y asigna      | x -= 2 → x = x - 2 |
| \*=      | Multiplica y asigna | x _= 4 → x = x _ 4 |
| /=       | Divide y asigna     | x /= 2 → x = x / 2 |
| %=       | Módulo y asigna     | x %= 3 → x = x % 3 |

---

# 🟣 3. Operadores de comparación

## 🧠 Concepto

Sirven para comparar valores y devolver `true` o `false`.

---

## 👉 Tipos

| Operador | Función                          | Ejemplo   | Resultado |
| -------- | -------------------------------- | --------- | --------- |
| ==       | Igualdad (sin tipo)              | '5' == 5  | true      |
| ===      | Igualdad estricta (tipo y valor) | '5' === 5 | false     |
| !=       | Diferente (sin tipo)             | 5 != '6'  | true      |
| !==      | Diferente estricta               | 5 !== '5' | true      |
| >        | Mayor que                        | 5 > 3     | true      |
| <        | Menor que                        | 5 < 3     | false     |
| >=       | Mayor o igual que                | 5 >= 5    | true      |
| <=       | Menor o igual que                | 5 <= 7    | true      |

---

# 🟡 4. Operadores lógicos

## 🧠 Concepto

Combinan valores booleanos (`true/false`).

---

## 👉 Tipos

| Operador | Función    | Ejemplo         | Resultado |
| -------- | ---------- | --------------- | --------- |
| &&       | AND lógico | true && false   | false     |
| \|\|     | OR lógico  | true \|\| false | true      |
| !        | NOT lógico | !true           | false     |

---

# 🟠 5. Operadores de incremento/decremento

| Operador | Función         | Ejemplo   |
| -------- | --------------- | --------- |
| ++       | Incrementa en 1 | x++ o ++x |
| --       | Decrementa en 1 | x-- o --x |

---

# 🔴 Resumen rápido

- Aritméticos → `+ - * / %`
- Asignación → `= += -= *= /= %=`
- Comparación → `== === != !== > < >= <=`
- Lógicos → `&& || !`
- Incremento/Decremento → `++ --`

✨ Base para cálculos y lógica en JS 🚀

# 📘 Operadores en JavaScript (continuación)

---

# 🔵 2. Incremento y decremento

## 🧠 Concepto

Aumentan o disminuyen el valor de una variable en 1.

---

## 💡 Ejemplo

```js
let x = 5;

x++; // 6
x--; // 5
```

- `x++` → incrementa después de evaluar
- `++x` → incrementa antes de evaluar
- Igual para `--` y `x-- / --x`

---

# 🟣 3. Operadores de comparación

## 🧠 Concepto

Permiten comparar valores y devuelven `true` o `false`.

---

## 💡 Ejemplo

```js
5 > 3; // true
5 < 3; // false
5 >= 5; // true
5 <= 4; // false
```

---

# 🟡 4. Igualdad (==)

- Compara **solo el valor**, no el tipo
- Hace conversión automática de tipos

```js
5 == '5'; // true
```

---

# 🟠 5. Igualdad estricta (===)

- Compara **valor y tipo**
- Más seguro y recomendado

```js
5 === '5'; // false
```

---

# 🔴 6. Diferencia (!= y !==)

| Operador | Función                 | Ejemplo   | Resultado |
| -------- | ----------------------- | --------- | --------- |
| !=       | Diferente (no estricto) | 5 != '5'  | false     |
| !==      | Diferente estricta      | 5 !== '5' | true      |

---

# ⚫ 7. Operadores lógicos

## 🧠 Combinan condiciones booleanas

| Operador | Función |
| -------- | ------- |
| &&       | AND     |
| \|\|     | OR      |
| !        | NOT     |

---

# ⚪ 8. AND (&&)

- Devuelve `true` solo si **todo** es `true`

```js
true && true; // true
true && false; // false
5 > 3 && 10 > 5; // true
```

---

# 🟤 9. OR (||)

- Devuelve `true` si **al menos uno** es `true`

```js
true || false; // true
false || false; // false
```

---

# 🟢 10. NOT (!)

- Invierte el valor booleano

```js
!true; // false
!false; // true
```

---

# 🔵 11. Cortocircuito (Short-circuit)

- JS puede dejar de evaluar cuando ya conoce el resultado

```js
false && console.log('no se ejecuta');
true || console.log('no se ejecuta');
```

- Optimiza ejecución y evita operaciones innecesarias

---

✨ Resumen rápido

- Incremento/decremento → `++ / --`
- Comparación → `> < >= <= == === != !==`
- Lógicos → `&& || !`
- Cortocircuito → evaluación eficiente 🚀

# 📘 Operadores en JavaScript (continuación)

---

# 🟣 12. Operadores con tipos

## 🧠 Concepto

JavaScript realiza **conversión automática de tipos** (coerción).

---

## 💡 Ejemplo

```js
'5' == 5; // true
'5' === 5; // false
```

---

## 🧠 Idea clave

- `==` → convierte tipos automáticamente
- `===` → no convierte tipos

---

# 🟡 13. OR como valor por defecto

## 🧠 Concepto

El operador `||` se usa mucho para asignar valores por defecto.

---

## 💡 Ejemplo

```js
let nombre = input || 'Invitado';
```

---

## 🧠 Explicación

- Si `input` es “falsy” → usa `'Invitado'`
- Si `input` tiene valor → lo usa directamente

---

## ⚠️ Valores falsy comunes

- `false`
- `0`
- `''` (string vacío)
- `null`
- `undefined`
- `NaN`

---

# 🟠 14. Buenas prácticas

## ✔️ Recomendaciones

- Usar `===` en lugar de `==`
- Evitar conversiones implícitas
- Usar operadores lógicos de forma clara

---

# ⚠️ Cosas importantes

- `==` → solo valor (puede confundir)
- `===` → valor y tipo (recomendado)
- `&&` y `||` → hacen cortocircuito
- JS convierte tipos automáticamente

---

# ✨ Resumen

## 🧠 Operadores

- Aritméticos → cálculos
- Comparación → true/false
- Lógicos → combinar condiciones

👉 Base fundamental para la lógica en JavaScript 🚀

---

# 📘 Estructuras de control en JavaScript (if, switch, ternario)

> 🧠 Permiten tomar decisiones en el código según condiciones.

---

# 🟢 1. if

## 🧠 Concepto

Ejecuta un bloque si la condición es verdadera.

---

## 💡 Ejemplo

```js
if (edad >= 18) {
  console.log('Eres mayor de edad');
}
```

---

# 🔵 2. else

## 🧠 Concepto

Se ejecuta si la condición es falsa.

---

## 💡 Ejemplo

```js
if (edad >= 18) {
  console.log('Mayor');
} else {
  console.log('Menor');
}
```

---

# 🟣 3. else if

## 🧠 Concepto

Permite evaluar múltiples condiciones.

---

## 💡 Ejemplo

```js
if (nota >= 90) {
  console.log('Excelente');
} else if (nota >= 70) {
  console.log('Bueno');
} else {
  console.log('Reprobado');
}
```

---

# 🟡 4. Condiciones

## 🧠 Concepto

Las condiciones usan operadores.

---

## 👉 Tipos

- Comparación → `> < ===`
- Lógicos → `&& ||`

---

## 🧠 Idea clave

Las estructuras de control dependen directamente de:

👉 operadores de comparación  
👉 operadores lógicos

---

# 🚀 Resumen

- `if` → si se cumple
- `else` → si no se cumple
- `else if` → múltiples condiciones
- condiciones = lógica + operadores

👉 Base de la toma de decisiones en JavaScript 🚀

# 📘 Estructuras de control en JavaScript (continuación)

---

# 🟠 5. switch

## 🧠 Concepto

Evalúa múltiples casos basados en un mismo valor.

---

## 💡 Ejemplo

```js
let dia = 2;

switch (dia) {
  case 1:
    console.log('Lunes');
    break;

  case 2:
    console.log('Martes');
    break;

  default:
    console.log('Otro día');
}
```

---

## 🧠 Idea clave

- `switch` compara un solo valor contra varios casos
- `break` evita que siga ejecutando los siguientes casos

---

# 🔴 6. default

## 🧠 Concepto

Se ejecuta cuando ningún `case` coincide.

---

## 💡 Ejemplo

```js
default:
  console.log('Otro día');
```

---

# ⚫ 7. Comparación en switch

## 🧠 Concepto

`switch` usa comparación estricta (`===`).

---

## 💡 Ejemplo

```js
'2' !== 2; // no coincide en switch
```

---

# ⚪ 8. Operador ternario

## 🧠 Concepto

Forma corta de escribir `if/else`.

---

## 💡 Ejemplo

```js
let mensaje = edad >= 18 ? 'Mayor' : 'Menor';
```

---

# 🟤 9. Sintaxis del ternario

## 🧠 Estructura

```js
condición ? valorSiTrue : valorSiFalse;
```

---

# 🟢 10. Ternarios anidados

## 🧠 Concepto

Se pueden encadenar condiciones.

---

## 💡 Ejemplo

```js
let resultado = nota >= 90 ? 'A' : nota >= 70 ? 'B' : 'C';
```

---

## ⚠️ Nota

👉 Puede volverse difícil de leer si es muy complejo.

---

# 🔵 11. Cuándo usar cada uno

| Estructura | Uso recomendado                 |
| ---------- | ------------------------------- |
| `if`       | lógica compleja                 |
| `switch`   | múltiples casos del mismo valor |
| `ternario` | condiciones simples             |

---

# 🟣 12. Valores falsy

## 🧠 Concepto

Valores que JavaScript evalúa como `false`.

---

## ❌ Falsy values

- `false`
- `0`
- `''` (string vacío)
- `null`
- `undefined`
- `NaN`

---

# 🟡 13. Valores truthy

## 🧠 Concepto

Todo lo que NO es falsy se considera `true`.

---

## 💡 Ejemplo

```js
if ('hola') {
  console.log('true');
}
```

---

# 🟠 14. Buenas prácticas

## ✔️ Recomendaciones

- Evitar ternarios muy largos
- Usar `switch` para muchos casos
- Mantener condiciones claras
- Usar `===` siempre

---

# 🚀 Resumen

- `switch` → múltiples casos
- `default` → caso por defecto
- ternario → if/else corto
- falsy → valores que se evalúan como false
- truthy → todo lo demás

👉 Base para controlar el flujo del programa en JavaScript 🚀

# 📘 Bucles (Loops) en JavaScript

---

# 🟢 1. for

## 🧠 Concepto

Bucle más usado; ideal cuando sabes cuántas veces repetir.

---

## 💡 Estructura

```js
for (inicio; condición; incremento) {
  // código a repetir
}
```

---

## 💡 Ejemplo

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

---

# 🔵 2. while

## 🧠 Concepto

Se ejecuta mientras la condición sea `true`.

---

## 💡 Ejemplo

```js
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
```

⚠️ Cuidado con bucles infinitos si la condición nunca cambia.

---

# 🟣 3. do...while

## 🧠 Concepto

Se ejecuta al menos una vez; la condición se evalúa después.

---

## 💡 Ejemplo

```js
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 5);
```

---

# 🟡 4. for...of

## 🧠 Concepto

Recorre **valores** de un iterable (arrays, strings, etc.).

---

## 💡 Ejemplo

```js
const numeros = [1, 2, 3];

for (let num of numeros) {
  console.log(num);
}
```

👉 Obtienes directamente el valor de cada elemento.

---

# 🟠 5. for...in

## 🧠 Concepto

Recorre **propiedades** de un objeto.

---

## 💡 Ejemplo

```js
const persona = {
  nombre: 'Ana',
  edad: 20,
};

for (let clave in persona) {
  console.log(clave);
}
```

👉 Recorre las **keys** del objeto.

---

# ⚠️ Cosas importantes

- `for` → repetir un número fijo de veces
- `while` → repetir mientras la condición sea verdadera
- `do...while` → ejecuta al menos una vez
- `for...of` → recorrer valores de un iterable
- `for...in` → recorrer propiedades de un objeto

---

# ✨ Resumen

Los bucles permiten automatizar tareas repetitivas en JavaScript 🚀

- `for` → control clásico con índice
- `while` → condición antes de ejecutar
- `do...while` → condición después de ejecutar
- `for...of` → recorrer valores
- `for...in` → recorrer propiedades de objetos

# 📘 Bucles en JavaScript (continuación)

---

# 🔴 6. Diferencia for...of vs for...in

## 🧠 Concepto clave

- `for...of` → recorre **valores**
- `for...in` → recorre **claves (keys)**

---

## 💡 Ejemplo mental

```js
const arr = ['a', 'b'];

for (let v of arr) {
  // v = valor
}

for (let k in arr) {
  // k = índice (clave)
}
```

---

# ⚫ 7. break

## 🧠 Concepto

Detiene completamente el bucle.

---

## 💡 Ejemplo

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}
```

👉 Sale del bucle cuando i === 5

---

# ⚪ 8. continue

## 🧠 Concepto

Salta la iteración actual y continúa con la siguiente.

---

## 💡 Ejemplo

```js
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}
```

👉 Omite el 2

---

# 🟤 9. Bucles infinitos

## 🧠 Concepto

Ocurren cuando la condición nunca se vuelve falsa.

---

## 💡 Ejemplo (PELIGRO ⚠️)

```js
while (true) {
  console.log('infinito');
}
```

---

## ⚠️ Importante

- Puede bloquear el navegador
- Puede consumir CPU indefinidamente

---

# 🟢 10. Recorrer arrays

## 🧠 Concepto

Los arrays pueden recorrerse de varias formas.

---

## 💡 Ejemplo con for...of

```js
const frutas = ['manzana', 'pera'];

for (let fruta of frutas) {
  console.log(fruta);
}
```

---

## 💡 Ejemplo con for clásico

```js
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
```

---

# 🔵 11. Recorrer objetos

## 🧠 Concepto

Se usa `for...in` para recorrer propiedades.

---

## 💡 Ejemplo

```js
const persona = {
  nombre: 'Ana',
  edad: 20,
};

for (let key in persona) {
  console.log(persona[key]);
}
```

---

# 🟣 12. Uso de índices

## 🧠 Concepto

El `for` clásico permite controlar el índice.

---

## 💡 Ejemplo

```js
const arr = [10, 20, 30];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

---

# 🟡 13. Cuándo usar cada uno

| Bucle        | Uso                       |
| ------------ | ------------------------- |
| `for`        | control total del índice  |
| `while`      | condición dinámica        |
| `do...while` | ejecutar al menos una vez |
| `for...of`   | recorrer arrays           |
| `for...in`   | recorrer objetos          |

---

# 🟠 14. Buenas prácticas

## ✔️ Recomendaciones

- Evitar bucles infinitos
- Usar nombres claros (`i`, `index`)
- Preferir `for...of` en arrays
- No usar `for...in` en arrays

---

# 🚀 Resumen

- `break` → detiene el bucle
- `continue` → salta iteración
- `for...of` → valores
- `for...in` → claves
- cuidado con bucles infinitos

👉 Base para control avanzado de flujo en JavaScript 🚀

# 📘 Funciones en JavaScript (Muy importante 🔥)

---

# 🟢 1. Declaración de funciones

## 🧠 Concepto

Bloques de código reutilizables que se ejecutan cuando las llamas.

---

## 💡 Ejemplo clásico

```js
function saludar() {
  console.log('Hola');
}

saludar(); // Ejecuta la función
```

👉 Puedes llamar a la función en cualquier momento.

---

# 🔵 2. Parámetros

## 🧠 Concepto

Valores que recibe la función para trabajar con ellos.

---

## 💡 Ejemplo

```js
function saludar(nombre) {
  console.log('Hola ' + nombre);
}

saludar('Juan'); // "Hola Juan"
```

- `nombre` es el parámetro que recibe la función.

---

# 🟣 3. Return

## 🧠 Concepto

Devuelve un valor desde la función.

---

## 💡 Ejemplo

```js
function sumar(a, b) {
  return a + b;
}

const resultado = sumar(2, 3);
console.log(resultado); // 5
```

- Sin `return` → devuelve `undefined`.

---

# 🟡 4. Funciones sin return

## 🧠 Concepto

Solo ejecutan código, no devuelven valor.

---

## 💡 Ejemplo

```js
function mostrar() {
  console.log('Hola');
}

mostrar(); // "Hola"
```

---

# 🟠 5. Arrow functions (=>)

## 🧠 Concepto

Forma moderna y más corta de escribir funciones.

---

## 💡 Ejemplo con return explícito

```js
const sumar = (a, b) => {
  return a + b;
};
```

## 💡 Forma corta (return implícito)

```js
const sumar = (a, b) => a + b;
console.log(sumar(2, 3)); // 5
```

---

# 🔴 6. Diferencias function vs arrow

| Aspecto  | function | arrow function        |
| -------- | -------- | --------------------- |
| `this`   | Propio   | Heredado del contexto |
| Hoisting | Sí       | No                    |
| Sintaxis | Clásica  | Corta y moderna       |

---

# ⚠️ Cosas importantes

- Funciones permiten **reutilizar código**
- `function` → clásico, hoisting y this propio
- `arrow` → moderno, más corto, this heredado
- `return` devuelve valores; sin return → undefined
- Parámetros hacen la función **dinámica**

---

# ✨ Resumen

- Las funciones son la **base de la lógica modular en JS** 🚀
- Se pueden declarar de varias formas: clásica (`function`) o moderna (`arrow`)
- Permiten **recibir datos** y **devolver resultados**
- Clave para organizar código y evitar repeticiones

# 📘 Funciones en JavaScript (Avanzado)

---

# ⚫ 7. Scope (Alcance)

## 🧠 Concepto

Define **dónde existe una variable** y dónde puede ser usada.

---

## 💡 Ejemplo

```js
function test() {
  let x = 10;
}

console.log(x); // ❌ Error: x no existe fuera de la función
```

👉 `x` solo vive dentro de la función → **scope local**.

---

# ⚪ 8. Scope global y local

## 🧠 Concepto

- **Global**: accesible en todo el código
- **Local**: accesible solo dentro de funciones o bloques

---

## 💡 Ejemplo

```js
// Global
let a = 10;

function test() {
  // Local
  let b = 20;
  console.log(a); // 10 → puede acceder a global
  console.log(b); // 20
}

console.log(a); // 10
console.log(b); // ❌ Error
```

---

# 🟤 9. Parámetros por defecto

## 🧠 Concepto

Permite asignar valores iniciales si no se pasan al llamar la función.

---

## 💡 Ejemplo

```js
function saludar(nombre = 'Invitado') {
  console.log(nombre);
}

saludar(); // "Invitado"
saludar('Juan'); // "Juan"
```

---

# 🟢 10. Funciones anónimas

## 🧠 Concepto

Funciones **sin nombre**, normalmente asignadas a variables.

---

## 💡 Ejemplo

```js
const saludo = function () {
  console.log('Hola');
};

saludo(); // "Hola"
```

---

# 🔵 11. Funciones como valores

## 🧠 Concepto

Las funciones pueden **guardarse en variables o pasarse como argumentos**.

---

## 💡 Ejemplo

```js
const fn = () => console.log('Hola');

function ejecutar(func) {
  func();
}

ejecutar(fn); // "Hola"
```

---

# 🟣 12. Hoisting en funciones

## 🧠 Concepto

Las funciones **declaradas con `function`** pueden llamarse **antes de ser declaradas**.

---

## 💡 Ejemplo

```js
saludar(); // "Hola"

function saludar() {
  console.log('Hola');
}
```

- Esto **no ocurre** con arrow functions ni funciones anónimas.

---

# 🟡 13. Return corta ejecución

## 🧠 Concepto

`return` **detiene la función** y opcionalmente devuelve un valor.

---

## 💡 Ejemplo

```js
function test() {
  return 'Hola';
  console.log('Esto no se ejecuta'); // nunca se ejecuta
}
```

---

# 🟠 14. Buenas prácticas

- Funciones **pequeñas y claras**
- Nombres descriptivos (`getUser`, `calcularTotal`)
- **Una sola responsabilidad**
- Evitar repetir código

---

# 🔴 15. Errores comunes

- Olvidar `return` cuando es necesario
- No pasar parámetros
- Confundir `this` en arrow functions

---

# ⚠️ Cosas importantes

- Scope local vs global define dónde puedes usar variables
- Parámetros por defecto hacen funciones más robustas
- Arrow functions no tienen hoisting y su `this` se hereda
- Return **detiene ejecución** y devuelve valores
- Funciones como valores permiten programación **más flexible**

# 📘 Arrays en JavaScript (Core 🔥)

---

# 🟢 1. ¿Qué es un array?

## 🧠 Concepto

Estructura de datos **ordenada** que almacena múltiples valores en una sola variable.

---

## 💡 Ejemplo

```js
const numeros = [1, 2, 3];
```

- Cada elemento tiene un **índice** que empieza en 0:

```js
numeros[0]; // 1
numeros[1]; // 2
```

---

# 🔵 2. Crear arrays

## 🧠 Forma básica

```js
const nombres = ['Ana', 'Luis', 'Juan'];
```

- Pueden contener cualquier tipo de dato:

```js
const mezcla = [1, 'hola', true, null];
```

---

# 🟣 3. Acceso y modificación

## 🧠 Leer y cambiar valores

```js
nombres[1]; // 'Luis'
nombres[1] = 'Pedro';
console.log(nombres); // ['Ana', 'Pedro', 'Juan']
```

---

# 🟡 4. Métodos básicos

## 🧠 Manipular el array

```js
const arr = [1, 2, 3];

arr.push(4); // agrega al final → [1,2,3,4]
arr.pop(); // elimina último → [1,2,3]
arr.shift(); // elimina primero → [2,3]
arr.unshift(0); // agrega al inicio → [0,2,3]
```

---

# 🟠 5. Length

## 🧠 Tamaño del array

```js
arr.length; // 3
```

---

# 🔴 6. Map

## 🧠 Crea un nuevo array transformando datos

```js
const nums = [1, 2, 3];

const dobles = nums.map((n) => n * 2);
console.log(dobles); // [2, 4, 6]
```

- **No modifica el array original**, siempre devuelve uno nuevo.

---

# ⚫ 7. Filter

## 🧠 Filtra elementos según condición

```js
const nums = [1, 2, 3, 4];

const pares = nums.filter((n) => n % 2 === 0);
console.log(pares); // [2, 4]
```

- Devuelve un **nuevo array** con los elementos que cumplen la condición.

---

# ⚪ Cosas importantes

- Los arrays son **ordenados y con índice**
- Métodos como `map` y `filter` no modifican el original
- Se pueden mezclar tipos, pero es buena práctica mantener coherencia
- `length` devuelve el número de elementos

---

# ✨ Resumen

- Arrays almacenan **múltiples valores**
- Se accede y modifica con **índices**
- Métodos clave: `push`, `pop`, `shift`, `unshift`, `map`, `filter`
- Fundamental para manejar **listas y datos** en JavaScript 🚀

# 📘 Arrays en JavaScript (Avanzado 🔥)

---

# ⚪ 8. find

## 🧠 Concepto

Devuelve el **primer elemento** que cumple una condición.

---

## 💡 Ejemplo

```js
const users = [{ id: 1 }, { id: 2 }];

const user = users.find((u) => u.id === 2);

console.log(user); // {id: 2}
```

👉 Solo devuelve **uno**, no un array.

---

# 🟤 9. reduce

## 🧠 Concepto

Reduce un array a **un solo valor**.

---

## 💡 Ejemplo

```js
const nums = [1, 2, 3];

const total = nums.reduce((acc, n) => acc + n, 0);

console.log(total); // 6
```

- `acc` = acumulador
- `0` = valor inicial

---

# 🟢 10. forEach

## 🧠 Concepto

Recorre el array, pero **NO devuelve un nuevo array**.

---

## 💡 Ejemplo

```js
nums.forEach((n) => console.log(n));
```

👉 Se usa solo para ejecutar lógica.

---

# 🔵 11. includes

## 🧠 Concepto

Verifica si un valor existe en el array.

---

## 💡 Ejemplo

```js
nums.includes(2); // true
```

---

# 🟣 12. some y every

## 🧠 Concepto

Validaciones sobre arrays.

---

## 💡 Ejemplo

```js
nums.some((n) => n > 2); // true (al menos uno)
nums.every((n) => n > 0); // true (todos)
```

---

# 🟡 13. slice vs splice

## 🧠 Concepto

Manipulan arrays de forma diferente.

---

## 💡 slice (NO modifica)

```js
const arr = [1, 2, 3, 4];

arr.slice(1, 3); // [2, 3]
```

---

## 💥 splice (SÍ modifica)

```js
arr.splice(1, 2); // elimina elementos
```

---

# 🟠 14. spread (...)

## 🧠 Concepto

Copia o expande arrays.

---

## 💡 Ejemplo

```js
const copia = [...nums];

const nuevo = [...nums, 4, 5];
```

---

# 🔴 15. destructuring

## 🧠 Concepto

Extrae valores de forma sencilla.

---

## 💡 Ejemplo

```js
const [a, b] = nums;
```

---

# ⚫ 16. arrays de objetos

## 🧠 Concepto

Muy usados en aplicaciones reales.

---

## 💡 Ejemplo

```js
const users = [
  { id: 1, nombre: 'Ana' },
  { id: 2, nombre: 'Luis' },
];
```

---

# ⚪ 17. encadenamiento

## 🧠 Concepto

Combinar métodos de arrays.

---

## 💡 Ejemplo

```js
users.filter((u) => u.id > 1).map((u) => u.nombre);
```

---

# ⚠️ Cosas importantes

- `find` → devuelve 1 elemento
- `reduce` → reduce a un valor único
- `forEach` → no retorna nada
- `slice` → no modifica
- `splice` → sí modifica
- spread (`...`) → copia o expande arrays

---

# ✨ Resumen

- Arrays avanzados permiten manipular datos de forma potente
- Métodos como `map`, `filter`, `reduce` son clave
- Spread y destructuring simplifican código
- Encadenar métodos hace código más limpio 🚀

# 📘 Arrays en JavaScript (Continuación)

---

# 📘 🟤 18. Inmutabilidad (Importante)

## 🧠 ¿Qué es?

La inmutabilidad consiste en **no modificar el array original**, sino crear uno nuevo con los cambios necesarios.

Esto ayuda a escribir código más predecible y evita efectos secundarios inesperados.

## 💡 Ejemplo

```js
const nuevo = nums.map((n) => n * 2);
```

## 👉 Observación

Es mejor crear nuevas estructuras de datos que modificar directamente las existentes.

## ✨ Tip

La inmutabilidad es una práctica muy utilizada en frameworks modernos como React para facilitar la detección de cambios y optimizar el rendimiento.

---

# 📘 🟢 19. Ordenar Arrays

## 🧠 Método `sort()`

Permite ordenar los elementos de un array.

## 💡 Ejemplo

```js
nums.sort((a, b) => a - b);
```

## 👉 Observación

La función de comparación determina el criterio de ordenamiento.

- Resultado negativo → `a` va antes que `b`
- Resultado positivo → `b` va antes que `a`
- Resultado cero → mantienen su posición relativa

## ✨ Tip

Para ordenar números siempre utiliza una función de comparación. Sin ella, JavaScript ordena como texto.

---

# 📘 🔵 20. Buenas Prácticas

## ✔️ Recomendaciones

- 👉 Usar `map()` y `filter()` en lugar de `for` cuando sea posible.
- 👉 No mutar arrays directamente.
- 👉 Utilizar nombres descriptivos.
- 👉 Preferir funciones puras.
- 👉 Mantener cada transformación simple y clara.

## ✨ Tip

Si encadenas muchos métodos (`map`, `filter`, `reduce`), intenta que cada uno tenga una única responsabilidad.

---

# ⚠️ Cosas Importantes

## 🧠 Métodos Fundamentales

| Método     | Función                  |
| ---------- | ------------------------ |
| `map()`    | Transforma elementos     |
| `filter()` | Filtra elementos         |
| `find()`   | Busca un elemento        |
| `reduce()` | Resume o acumula valores |

## 👉 Recuerda

Los arrays son una de las estructuras más utilizadas para trabajar con datos en JavaScript.

---

# ✨ Resumen

## 🧠 Arrays

### 👉 Permiten

- Guardar listas de datos.
- Recorrer información fácilmente.
- Transformar datos.
- Filtrar resultados.
- Buscar elementos específicos.

### 👉 Métodos clave

```js
map();
filter();
reduce();
find();
```

## 🚀 Conclusión

Los arrays forman parte del **CORE del desarrollo en JavaScript** y son esenciales para manipular datos de manera eficiente.

---

# 📘 Objetos en JavaScript (CORE 🔥)

## 🧠 ¿Qué son?

Los objetos permiten almacenar información utilizando el formato:

```txt
clave: valor
```

Son fundamentales para representar entidades reales como:

- 👤 Usuarios
- 🛒 Productos
- 📦 Pedidos
- 🏢 Empresas
- 🎮 Juegos

---

# 📘 🟢 1. ¿Qué es un Objeto?

## 🧠 Definición

Un objeto es una colección de propiedades organizadas mediante pares clave-valor.

## 💡 Ejemplo

```js
const persona = {
  nombre: 'Ana',
  edad: 20,
};
```

## 👉 Observación

Las propiedades del objeto son:

- `nombre`
- `edad`

## ✨ Tip

Piensa en un objeto como una ficha que agrupa toda la información relacionada con una entidad.

---

# 📘 🔵 2. Acceso a Propiedades

## 🧠 ¿Para qué sirve?

Permite leer los valores almacenados dentro de un objeto.

## 💡 Ejemplo

```js
persona.nombre; // 'Ana'

persona['edad']; // 20
```

## ✔️ Formas de acceso

### Notación punto

```js
persona.nombre;
```

### Notación corchetes

```js
persona['edad'];
```

## 👉 Observación

La notación con corchetes es útil cuando el nombre de la propiedad se obtiene dinámicamente.

## ✨ Tip

Usa la notación punto siempre que conozcas el nombre de la propiedad, ya que es más legible.

---

# 📘 🟣 3. Modificar Propiedades

## 🧠 ¿Qué permite?

Cambiar el valor de una propiedad existente.

## 💡 Ejemplo

```js
persona.nombre = 'Luis';
```

## 👉 Resultado

```js
{
  nombre: 'Luis',
  edad: 20
}
```

## ✨ Tip

Aunque el objeto se haya declarado con `const`, sus propiedades pueden modificarse.

---

# 📘 🟡 4. Agregar Propiedades

## 🧠 ¿Qué permite?

Añadir nueva información a un objeto existente.

## 💡 Ejemplo

```js
persona.pais = 'Colombia';
```

## 👉 Resultado

```js
{
  nombre: 'Luis',
  edad: 20,
  pais: 'Colombia'
}
```

## ✨ Tip

Los objetos en JavaScript son dinámicos, por lo que pueden crecer durante la ejecución del programa.

---

# 📘 🟠 5. Eliminar Propiedades

## 🧠 ¿Qué permite?

Remover propiedades de un objeto.

## 💡 Ejemplo

```js
delete persona.edad;
```

## 👉 Resultado

```js
{
  nombre: 'Luis',
  pais: 'Colombia'
}
```

## ⚠️ Importante

Eliminar propiedades modifica directamente el objeto original.

## ✨ Tip

En aplicaciones modernas suele preferirse crear un nuevo objeto sin la propiedad antes que eliminarla directamente.

---

# 🎯 Resumen Parcial de Objetos

## 🧠 Operaciones Básicas

| Acción    | Sintaxis                     |
| --------- | ---------------------------- |
| Crear     | `const obj = {}`             |
| Leer      | `obj.propiedad`              |
| Leer      | `obj['propiedad']`           |
| Modificar | `obj.propiedad = valor`      |
| Agregar   | `obj.nuevaPropiedad = valor` |
| Eliminar  | `delete obj.propiedad`       |

## 🚀 Idea Clave

Los objetos son la estructura principal para representar información en JavaScript y aparecen prácticamente en cualquier aplicación real.

# 📘 Objetos en JavaScript (Continuación)

---

# 📘 🔴 6. Métodos (Funciones en Objetos)

## 🧠 ¿Qué son?

Funciones definidas **dentro de un objeto**, que permiten que el objeto ejecute acciones relacionadas con sus datos.

## 💡 Ejemplo

```js
const user = {
  nombre: 'Ana',
  saludar() {
    console.log('Hola ' + this.nombre);
  },
};
```

## 👉 Observación

`this` dentro de un método hace referencia al **objeto al que pertenece**.

## ✨ Tip

Siempre que necesites que un objeto "haga algo" con sus propias propiedades, usa métodos.

---

# 📘 ⚫ 7. `this`

## 🧠 ¿Qué es?

`this` referencia al **contexto actual del objeto** dentro del cual se está ejecutando el código.

## 💡 Ejemplo

```js
this.nombre;
```

## 👉 Observación

En un método de un objeto, `this` apunta al objeto mismo. En funciones normales fuera de objetos, puede ser `undefined` en modo estricto.

## ✨ Tip

Evita usar `this` en funciones flecha si quieres que apunte al objeto, ya que las flechas capturan el contexto externo.

---

# 📘 ⚪ 8. Object.keys / values / entries

## 🧠 ¿Para qué sirven?

Permiten **trabajar con las propiedades de un objeto** de manera estructurada.

## 💡 Ejemplo

```js
Object.keys(persona); // ['nombre', 'edad']
Object.values(persona); // ['Ana', 20]
Object.entries(persona); // [['nombre','Ana'], ['edad',20]]
```

## 👉 Observación

- `keys` → devuelve las claves.
- `values` → devuelve los valores.
- `entries` → devuelve pares [clave, valor].

## ✨ Tip

Útil para iterar objetos con métodos como `forEach` o `map`.

---

# 📘 🟤 9. For...in

## 🧠 ¿Qué es?

Permite **recorrer todas las propiedades enumerables de un objeto**.

## 💡 Ejemplo

```js
for (let key in persona) {
  console.log(key, persona[key]);
}
```

## 👉 Observación

Recorre **todas las propiedades** heredadas y propias. Para evitar herencia, usa `hasOwnProperty`.

## ✨ Tip

`for...in` es ideal para inspeccionar objetos dinámicos o desconocidos.

---

# 📘 🟢 10. Destructuring

## 🧠 ¿Qué es?

Permite **extraer propiedades de un objeto** en variables independientes de manera rápida.

## 💡 Ejemplo

```js
const { nombre, edad } = persona;
```

## 👉 Observación

Reduce la repetición de código al acceder a propiedades varias veces.

## ✨ Tip

Se puede combinar con valores por defecto:

```js
const { nombre, pais = 'Desconocido' } = persona;
```

---

# 📘 🔵 11. Spread (`...`)

## 🧠 ¿Qué es?

Copia o combina objetos fácilmente **sin modificar el original**.

## 💡 Ejemplo

```js
const nuevo = { ...persona, activo: true };
```

## 👉 Observación

Permite **crear objetos nuevos** agregando o sobrescribiendo propiedades.

## ✨ Tip

Spread es útil para mantener **inmutabilidad**, especialmente en estados de React.

---

# 📘 🟣 12. Objetos Anidados

## 🧠 ¿Qué es?

Objetos que contienen **otros objetos como propiedades**.

## 💡 Ejemplo

```js
const user = {
  nombre: 'Ana',
  direccion: {
    ciudad: 'Bogotá',
  },
};
```

## 👉 Observación

Acceder a propiedades profundas requiere notación punto o destructuring anidado.

## ✨ Tip

Para leer sin errores, combina con optional chaining.

---

# 📘 🟡 13. Optional Chaining (`?.`)

## 🧠 ¿Qué es?

Permite **acceder a propiedades sin romper el código** si alguna no existe.

## 💡 Ejemplo

```js
user.direccion?.ciudad;
```

## 👉 Observación

Evita errores de tipo `Cannot read property 'ciudad' of undefined`.

## ✨ Tip

Se puede combinar con llamadas a funciones:

```js
user.saludar?.();
```

---

# 📘 🟠 14. Object.freeze / seal

## 🧠 ¿Qué es?

Permite **controlar cambios** en un objeto:

- `freeze()` → bloquea cualquier modificación.
- `seal()` → permite cambiar valores existentes pero no agregar/eliminar propiedades.

## 💡 Ejemplo

```js
Object.freeze(persona); // no se puede modificar
```

## 👉 Observación

Ideal para proteger objetos que no deben ser alterados en tu aplicación.

## ✨ Tip

Usar `freeze` en constantes de configuración para asegurar consistencia.

---

# 📘 🔴 15. Copia vs Referencia

## 🧠 ¿Qué significa?

En JavaScript, los objetos se pasan **por referencia**, no por valor.

## 💡 Ejemplo

```js
const a = { x: 1 };
const b = a;

b.x = 2;
```

## 👉 Observación

`a` también cambia porque `a` y `b` apuntan al **mismo objeto en memoria**.

## ✨ Tip

Para evitar efectos secundarios, crea copias con **spread** o `Object.assign`.

```js
const copia = { ...a };
```

---

# 📘 ⚫ 16. INMUTABILIDAD (IMPORTANTE)

## 🧠 Evitar modificar el original

---

## 💡 Ejemplo

```ts
const nuevo = { ...persona, nombre: 'Luis' };
```

---

# 📘 ⚪ 17. JSON (MUY IMPORTANTE)

## 🧠 Formato de datos

---

## 💡 Ejemplo

```ts
JSON.stringify(persona);
JSON.parse('{"nombre":"Ana"}');
```

---

# 📘 🟤 18. ARRAY DE OBJETOS

## 🧠 Muy común en APIs

---

## 💡 Ejemplo

```ts
const users = [
  { id: 1, nombre: 'Ana' },
  { id: 2, nombre: 'Luis' },
];
```

---

# 📘 🟢 19. COMBINAR CON MÉTODOS DE ARRAY

## 🧠 Uso real

---

## 💡 Ejemplo

```ts
users.map((u) => u.nombre);
```

---

# 📘 🔵 20. BUENAS PRÁCTICAS

👉 Usar destructuring

👉 Evitar mutar objetos

👉 Usar nombres claros

👉 Mantener estructura simple

---

# ⚠️ COSAS IMPORTANTES

🧠 Objetos = clave: valor

🧠 this apunta al objeto

🧠 Se pasan por referencia

🧠 JSON es clave para APIs

---

# ✨ RESUMEN

## 🧠 Objetos:

👉 Representan datos reales

👉 Permiten agrupar información

👉 Se combinan con arrays

👉 CORE del desarrollo en JS 🚀🔥

---

# 📘 ARRAYS vs OBJETOS EN JAVASCRIPT (DIFERENCIAS Y SIMILITUDES 🔥)

🧠 Ambos son estructuras para guardar datos.

👉 Son el núcleo del trabajo real en JavaScript.

---

## 📘 🟢 1. SIMILITUDES

🧠 Tienen cosas en común.

👉 Guardan múltiples valores  
👉 Son mutables (se pueden modificar)  
👉 Son tipo `object` en JavaScript

💡 Ejemplo:

```js
typeof []; // "object"
typeof {}; // "object"
```

---

## 📘 🔵 2. DIFERENCIA PRINCIPAL

🧠 Forma de organizar datos.

👉 Array → lista ordenada (índices)  
👉 Objeto → propiedades (`clave: valor`)

---

## 📘 🟣 3. ACCESO A DATOS

🧠 Diferente forma de acceder.

💡 Array:

```js
const arr = [10, 20];

arr[0]; // 10
```

💡 Objeto:

```js
const obj = { x: 10 };

obj.x; // 10
```

---

## 📘 🟡 4. ORDEN

🧠 Cómo se organizan.

👉 Array → mantiene orden  
👉 Objeto → no depende del orden (aunque suele mantenerlo)

---

## 📘 🟠 5. USO PRINCIPAL

🧠 Cuándo usar cada uno.

### 👉 Array

- Listas
- Colecciones
- Datos repetitivos

### 👉 Objeto

- Entidades
- Configuración
- Datos estructurados

---

## 📘 🔴 6. RECORRIDO

🧠 Cómo se recorren.

💡 Array:

```js
for (const item of arr) {
}
```

💡 Objeto:

```js
for (const key in obj) {
}
```

---

## 📘 ⚫ 7. MÉTODOS

🧠 Diferencias en funciones.

### 👉 Array

- map()
- filter()
- reduce()
- find()

### 👉 Objeto

- Object.keys()
- Object.values()
- Object.entries()

---

## 📘 ⚪ 8. CASO REAL (API)

🧠 Uso combinado.

💡 Ejemplo:

```js
const users = [
  { id: 1, nombre: 'Ana' },
  { id: 2, nombre: 'Luis' },
];
```

👉 Array de objetos (lo más común).

---

## 📘 REGLA RÁPIDA 🧠

👉 Array = listas ordenadas  
👉 Objeto = datos con nombre (clave: valor)  
👉 Array usa índices (`[0]`)  
👉 Objeto usa propiedades (`obj.nombre`)  
👉 En aplicaciones reales suele usarse: **array de objetos** 🚀

## 📘 🟤 9. MUTABILIDAD

🧠 Ambos se pueden modificar.

💡 Ejemplo:

```js
arr.push(4);

obj.nombre = 'Pedro';
```

---

## 📘 🟢 10. REFERENCIA

🧠 Ambos se pasan por referencia.

💡 Ejemplo:

```js
const a = [1, 2];
const b = a;

b.push(3);
```

👉 `a` también cambia.

---

## 📘 🔵 11. INMUTABILIDAD (PRO)

🧠 Evitar modificar los datos originales.

💡 Ejemplo:

```js
const nuevoArr = [...arr];

const nuevoObj = { ...obj };
```

👉 Se crean copias en lugar de modificar el original.

---

## 📘 🟣 12. CLAVES vs ÍNDICES

🧠 Forma de identificar datos.

👉 Array → índice (`0`, `1`, `2`...)  
👉 Objeto → clave (`nombre`, `edad`...)

---

## 📘 🟡 13. FLEXIBILIDAD

🧠 Ambos pueden mezclar tipos de datos.

💡 Ejemplo:

```js
const mezcla = [1, 'hola', true];

const obj = {
  a: 1,
  b: 'hola',
  c: true,
};
```

---

## 📘 🟠 14. CUÁNDO USAR CADA UNO

### 👉 Usa Array cuando:

- Hay una lista de elementos
- Importa el orden
- Necesitas recorrer datos

### 👉 Usa Objeto cuando:

- Hay propiedades con significado
- Necesitas acceder por nombre
- Representas entidades o configuraciones

---

## 📘 🔴 15. ERROR COMÚN

🧠 Confundir arrays y objetos.

💡 Ejemplo:

```js
arr.nombre; // ❌ no existe

obj[0]; // ❌ no tiene índice
```

---

## ⚠️ COSAS IMPORTANTES

🧠 Arrays → listas  
🧠 Objetos → estructura clave-valor  
🧠 Ambos son tipo `object`  
🧠 Se usan juntos TODO el tiempo

---

# ✨ RESUMEN

🧠 Arrays vs Objetos:

👉 Array → colección ordenada  
👉 Objeto → datos estructurados

### 👉 Similitudes

- Mutables
- Tipo `object`
- Se pasan por referencia

### 👉 Uso real

🔥 Array de objetos

```js
const users = [
  { id: 1, nombre: 'Ana' },
  { id: 2, nombre: 'Luis' },
];
```

👉 Base del manejo de datos en JavaScript 🚀

# 📘 MANIPULACIÓN DE OBJETOS EN JAVASCRIPT

🧠 Permite crear, modificar y trabajar con objetos.

👉 Es clave para manejar datos en aplicaciones reales.

---

## 📘 🟢 1. CREAR OBJETOS

🧠 Forma básica.

💡 Ejemplo:

```js
const persona = {
  nombre: 'Ana',
  edad: 20,
};
```

---

## 📘 🔵 2. ACCEDER A PROPIEDADES

🧠 Leer valores.

💡 Ejemplo:

```js
persona.nombre; // 'Ana'

persona['edad']; // 20
```

---

## 📘 🟣 3. MODIFICAR PROPIEDADES

🧠 Cambiar valores existentes.

💡 Ejemplo:

```js
persona.nombre = 'Luis';
```

---

## 📘 🟡 4. AGREGAR PROPIEDADES

🧠 Añadir nuevas propiedades.

💡 Ejemplo:

```js
persona.pais = 'Colombia';
```

---

## 📘 🟠 5. ELIMINAR PROPIEDADES

🧠 Borrar datos.

💡 Ejemplo:

```js
delete persona.edad;
```

---

## 📘 🔴 6. VERIFICAR PROPIEDADES

🧠 Comprobar si existen.

💡 Ejemplo:

```js
'nombre' in persona; // true

persona.hasOwnProperty('edad'); // true
```

# 📘 MANIPULACIÓN DE OBJETOS EN JAVASCRIPT

🧠 Permite crear, modificar y trabajar con objetos.

👉 Es clave para manejar datos en aplicaciones reales.

## 🟢 1. CREAR OBJETOS

🧠 Forma básica.

### 💡 Ejemplo

```js
const persona = {
  nombre: 'Ana',
  edad: 20,
};
```

---

## 🔵 2. ACCEDER A PROPIEDADES

🧠 Leer valores.

### 💡 Ejemplo

```js
persona.nombre; // 'Ana'
persona['edad']; // 20
```

---

## 🟣 3. MODIFICAR PROPIEDADES

🧠 Cambiar valores existentes.

### 💡 Ejemplo

```js
persona.nombre = 'Luis';
```

---

## 🟡 4. AGREGAR PROPIEDADES

🧠 Añadir nuevas propiedades.

### 💡 Ejemplo

```js
persona.pais = 'Colombia';
```

---

## 🟠 5. ELIMINAR PROPIEDADES

🧠 Borrar datos.

### 💡 Ejemplo

```js
delete persona.edad;
```

---

## 🔴 6. VERIFICAR PROPIEDADES

🧠 Comprobar si existen.

### 💡 Ejemplo

```js
'nombre' in persona; // true

persona.hasOwnProperty('edad'); // true
```

---

## ⚫ 7. OBJECT.KEYS / VALUES / ENTRIES

🧠 Obtener información del objeto.

### 💡 Ejemplo

```js
Object.keys(persona);
Object.values(persona);
Object.entries(persona);
```

---

## ⚪ 8. RECORRER OBJETOS

🧠 Iterar propiedades.

### 💡 Ejemplo

```js
for (const key in persona) {
  console.log(key, persona[key]);
}
```

---

## 🟤 9. DESTRUCTURING

🧠 Extraer propiedades fácilmente.

### 💡 Ejemplo

```js
const { nombre, edad } = persona;
```

---

## 🟢 10. SPREAD (...)

🧠 Copiar o combinar objetos.

### 💡 Ejemplo

```js
const nuevo = {
  ...persona,
  activo: true,
};
```

---

## 🔵 11. OBJECT.ASSIGN

🧠 Alternativa a spread.

### 💡 Ejemplo

```js
const nuevo = Object.assign({}, persona);
```

---

## 🟣 12. OBJETOS ANIDADOS

🧠 Objetos dentro de otros.

### 💡 Ejemplo

```js
const user = {
  nombre: 'Ana',
  direccion: {
    ciudad: 'Bogotá',
  },
};
```

---

## 🟡 13. OPTIONAL CHAINING (?.)

🧠 Acceso seguro.

### 💡 Ejemplo

```js
user.direccion?.ciudad;
```

---

## 🟠 14. OBJECT.FREEZE / SEAL

🧠 Controlar modificaciones.

### 💡 Ejemplo

```js
Object.freeze(persona);
Object.seal(persona);
```

---

## 🔴 15. COPIA vs REFERENCIA

🧠 Los objetos se comparten.

### 💡 Ejemplo

```js
const a = { x: 1 };
const b = a;

b.x = 2;
```

👉 `a` también cambia.

---

## ⚫ 16. INMUTABILIDAD

🧠 No modificar el original.

### 💡 Ejemplo

```js
const nuevo = {
  ...persona,
  nombre: 'Pedro',
};
```

---

## ⚪ 17. JSON

🧠 Convertir datos.

### 💡 Ejemplo

```js
const json = JSON.stringify(persona);
const obj = JSON.parse(json);
```

---

# ⚠️ COSAS IMPORTANTES

- 🧠 Los objetos guardan datos en pares clave-valor.
- 🧠 Se accede con `.` o `[]`.
- 🧠 Se pasan por referencia.
- 🧠 Spread (`...`) es la forma moderna de copiar.
- 🧠 JSON se usa constantemente con APIs.

# ✨ RESUMEN

👉 Crear, leer, actualizar y eliminar propiedades.

👉 Recorrer con `for...in`.

👉 Extraer datos con destructuring.

👉 Copiar con spread (`...`).

👉 Convertir con JSON.

🚀 Base fundamental del manejo de datos en JavaScript.

📘 🟤 18. ELIMINAR PROPIEDADES CON DESTRUCTURING

    🧠 Forma moderna

    💡 Ejemplo:

        const { edad, ...resto } = persona;

📘 🟢 19. RENOMBRAR PROPIEDADES

    🧠 En destructuring

    💡 Ejemplo:

        const { nombre: userName } = persona;

📘 🔵 20. BUENAS PRÁCTICAS

    👉 Usar destructuring
    👉 Evitar mutar objetos directamente
    👉 Usar spread para copias
    👉 Nombres claros

⚠️ COSAS IMPORTANTES

    🧠 Objetos se manipulan constantemente
    🧠 Se pasan por referencia
    🧠 Spread y destructuring son clave
    🧠 JSON es esencial para APIs

✨ RESUMEN

    🧠 Manipulación de objetos:

    👉 Crear, leer, modificar, eliminar
    👉 Copiar con spread
    👉 Acceder de forma segura
    👉 Convertir con JSON

    👉 CLAVE para trabajar con datos en JS 🚀🔥

//📘 DESTRUCTURING EN JAVASCRIPT

🧠 Permite extraer valores de arrays y objetos fácilmente

👉 Hace el código más limpio y legible

📘 🟢 1. ¿QUÉ ES DESTRUCTURING?

    🧠 Forma de "desempaquetar" datos

    💡 Ejemplo:

        const persona = { nombre: 'Ana', edad: 20 };

        const { nombre, edad } = persona;

    👉 Extraes propiedades directamente

📘 🔵 2. DESTRUCTURING EN OBJETOS

    🧠 Basado en nombres de propiedades

    💡 Ejemplo:

        const user = { nombre: 'Luis', edad: 30 };

        const { nombre } = user;

📘 🟣 3. RENOMBRAR VARIABLES

    🧠 Cambiar nombre al extraer

    💡 Ejemplo:

        const { nombre: userName } = user;

📘 🟡 4. VALORES POR DEFECTO

    🧠 Si no existe la propiedad

    💡 Ejemplo:

        const { ciudad = 'Bogotá' } = user;

📘 🟠 5. DESTRUCTURING EN ARRAYS

    🧠 Basado en posición

    💡 Ejemplo:

        const numeros = [10, 20, 30];

        const [a, b] = numeros;

📘 🔴 6. SALTAR ELEMENTOS

    🧠 Ignorar posiciones

    💡 Ejemplo:

        const [ , segundo] = numeros;
## 🟤 18. Eliminar Propiedades con Destructuring

### 🧠 Forma Moderna

Permite excluir propiedades de un objeto sin modificar el original.

### 💡 Ejemplo

```js
const { edad, ...resto } = persona;
```

### 👉 Resultado

- `edad` se extrae del objeto.
- `resto` contiene todas las demás propiedades.

### ✨ Tip

Esta técnica es muy utilizada para eliminar propiedades sensibles antes de enviar datos a una API o mostrar información al usuario.

---

## 🟢 19. Renombrar Propiedades

### 🧠 En Destructuring

Permite extraer una propiedad y asignarla a una variable con otro nombre.

### 💡 Ejemplo

```js
const { nombre: userName } = persona;
```

### 👉 Resultado

- La propiedad `nombre` se guarda en la variable `userName`.

### ✨ Tip

Es especialmente útil para evitar conflictos de nombres o seguir convenciones de nomenclatura dentro de tu código.

---

## 🔵 20. Buenas Prácticas

### ✔️ Recomendaciones

- Usar destructuring siempre que sea posible.
- Evitar mutar objetos directamente.
- Utilizar spread operator para crear copias.
- Elegir nombres descriptivos y claros.
- Mantener los objetos organizados y consistentes.

### ✨ Tip

En aplicaciones grandes, evitar mutaciones directas facilita el mantenimiento y reduce errores inesperados.

---

# ⚠️ Cosas Importantes

## 🧠 Conceptos Clave

- Los objetos se manipulan constantemente en JavaScript.
- Los objetos se pasan por referencia.
- Spread (`...`) y destructuring son herramientas fundamentales.
- JSON es esencial para intercambiar datos con APIs.

---

# 🎯 Resumen General

## 🧠 Manipulación de Objetos

### 👉 Operaciones más comunes

- Crear objetos.
- Leer propiedades.
- Modificar valores.
- Eliminar propiedades.
- Copiar objetos con spread.
- Acceder de forma segura.
- Convertir datos con JSON.

### 🚀 Idea Clave

> Dominar la manipulación de objetos es una habilidad fundamental para trabajar con datos en JavaScript moderno.

---

<br>

# 📘 Destructuring en JavaScript

> [!INFO]
> Destructuring permite extraer valores de arrays y objetos de forma sencilla y elegante.
>
> Es una de las características más utilizadas del JavaScript moderno porque mejora significativamente la legibilidad del código.

---

## 🟢 1. ¿Qué es Destructuring?

### 🧠 Concepto

Es una forma de "desempaquetar" información de objetos y arrays.

### 💡 Ejemplo

```js
const persona = {
  nombre: 'Ana',
  edad: 20
};

const { nombre, edad } = persona;
```

### 👉 Resultado

- Se crean las variables `nombre` y `edad`.
- Sus valores provienen directamente del objeto.

### ✨ Tip

Reduce la necesidad de escribir repetidamente:

```js
persona.nombre
persona.edad
```

---

## 🔵 2. Destructuring en Objetos

### 🧠 Característica Principal

Funciona utilizando los nombres de las propiedades.

### 💡 Ejemplo

```js
const user = {
  nombre: 'Luis',
  edad: 30
};

const { nombre } = user;
```

### 👉 Resultado

```js
console.log(nombre); // Luis
```

### ✨ Tip

El nombre de la variable debe coincidir con el nombre de la propiedad, salvo que utilices renombramiento.

---

## 🟣 3. Renombrar Variables

### 🧠 Cambiar Nombre al Extraer

Permite asignar otro nombre a la variable obtenida.

### 💡 Ejemplo

```js
const { nombre: userName } = user;
```

### 👉 Resultado

```js
console.log(userName);
```

### ✨ Tip

Muy útil cuando trabajas con datos externos cuyos nombres no siguen tus convenciones de código.

---

## 🟡 4. Valores por Defecto

### 🧠 Si la Propiedad No Existe

Puedes asignar un valor automáticamente.

### 💡 Ejemplo

```js
const { ciudad = 'Bogotá' } = user;
```

### 👉 Resultado

Si `user.ciudad` no existe:

```js
console.log(ciudad); // Bogotá
```

### ✨ Tip

Ayuda a prevenir errores por valores `undefined`.

---

## 🟠 5. Destructuring en Arrays

### 🧠 Basado en Posición

A diferencia de los objetos, aquí importa el orden.

### 💡 Ejemplo

```js
const numeros = [10, 20, 30];

const [a, b] = numeros;
```

### 👉 Resultado

```js
a // 10
b // 20
```

### ✨ Tip

Ideal para trabajar con funciones que retornan múltiples valores.

---

## 🔴 6. Saltar Elementos

### 🧠 Ignorar Posiciones

Puedes omitir elementos que no necesitas.

### 💡 Ejemplo

```js
const numeros = [10, 20, 30];

const [, segundo] = numeros;
```

### 👉 Resultado

```js
segundo // 20
```

### ✨ Tip

Utiliza comas vacías para avanzar posiciones sin crear variables innecesarias.

---

# 🎯 Resumen Rápido de Destructuring

| Técnica | Uso |
|----------|----------|
| `{ propiedad }` | Extraer propiedades de objetos |
| `{ prop: nuevoNombre }` | Renombrar variables |
| `{ prop = valor }` | Asignar valor por defecto |
| `[a, b]` | Extraer elementos de arrays |
| `[, valor]` | Saltar posiciones |
| `...resto` | Obtener elementos restantes |

---

## 🚀 Idea Clave

> Destructuring es una de las herramientas más importantes de JavaScript moderno porque permite escribir código más limpio, expresivo y fácil de mantener.
>
## ⚫ 7. Rest (`...`)

### 🧠 Agrupar el Resto

Permite capturar todos los elementos o propiedades restantes en una nueva variable.

### 💡 Ejemplo en Arrays

```js
const [a, ...resto] = numeros;
```

### 👉 Resultado

- `a` recibe el primer elemento.
- `resto` contiene los elementos restantes.

### 💡 Ejemplo en Objetos

```js
const { nombre, ...otros } = user;
```

### 👉 Resultado

- `nombre` se extrae individualmente.
- `otros` contiene el resto de propiedades.

### ✨ Tip

El operador Rest es ideal para excluir propiedades específicas sin modificar el objeto original.

---

## ⚪ 8. Destructuring en Funciones

### 🧠 Muy Usado en Parámetros

Permite acceder directamente a las propiedades necesarias.

### 💡 Ejemplo

```js
function saludar({ nombre }) {
  console.log(nombre);
}
```

### 👉 Ventajas

✔️ Menos código  
✔️ Mayor claridad  
✔️ Fácil mantenimiento

### ✨ Tip

Esta técnica es extremadamente común en React cuando se reciben props.

---

## 🟤 9. Objetos Anidados

### 🧠 Extraer Propiedades Profundas

Permite acceder directamente a propiedades dentro de otros objetos.

### 💡 Ejemplo

```js
const user = {
  nombre: 'Ana',
  direccion: {
    ciudad: 'Bogotá'
  }
};

const {
  direccion: { ciudad }
} = user;
```

### 👉 Resultado

```js
console.log(ciudad);
```

### ✨ Tip

Evita abusar del destructuring muy profundo, ya que puede afectar la legibilidad del código.

---

## 🟢 10. Combinar con Arrays

### 🧠 Muy Común en APIs

Frecuentemente se reciben listas de objetos desde servidores.

### 💡 Ejemplo

```js
const users = [
  { nombre: 'Ana' },
  { nombre: 'Luis' }
];

const [u1] = users;
```

### 👉 Resultado

```js
console.log(u1.nombre);
```

### ✨ Tip

Extraer el primer elemento suele ser útil para trabajar con respuestas de APIs o consultas.

---

## 🔵 11. Intercambio de Variables

### 🧠 Sin Variable Temporal

Permite intercambiar valores de forma elegante.

### 💡 Ejemplo

```js
let a = 1;
let b = 2;

[a, b] = [b, a];
```

### 👉 Resultado

```js
a // 2
b // 1
```

### ✨ Tip

Una de las aplicaciones más conocidas de destructuring en arrays.

---

## 🟣 12. Destructuring + Spread

### 🧠 Uso Combinado

Permite crear nuevos objetos fácilmente.

### 💡 Ejemplo

```js
const nuevo = {
  ...user,
  activo: true
};
```

### 👉 Resultado

- Copia todas las propiedades de `user`.
- Agrega o sobrescribe la propiedad `activo`.

### ✨ Tip

Esta técnica es fundamental para trabajar con datos inmutables.

---

## 🟡 13. Errores Comunes

### ⚠️ Situaciones Frecuentes

#### 👉 Nombres Incorrectos en Objetos

```js
const { apellido } = user;
```

Si la propiedad no existe:

```js
undefined
```

---

#### 👉 Olvidar que los Arrays Dependen de la Posición

```js
const [a, b] = numeros;
```

La posición determina el valor asignado.

---

#### 👉 Destructuring de `undefined`

```js
const { nombre } = undefined;
```

Genera error:

```js
TypeError
```

### ✨ Tip

Utiliza valores por defecto cuando exista la posibilidad de recibir datos incompletos.

---

## 🟠 14. Buenas Prácticas

### ✔️ Recomendaciones

- Usar destructuring para simplificar código.
- Evitar destructuring excesivamente profundo.
- Utilizar valores por defecto cuando sea necesario.
- Elegir nombres descriptivos.
- Mantener la legibilidad como prioridad.

### ✨ Tip

Si una línea de destructuring se vuelve difícil de leer, probablemente sea mejor dividirla en varias líneas.

---

## 🔴 15. Uso Real

### 🧠 Muy Común en

#### 👉 React

```js
function Card({ title, description }) {}
```

---

#### 👉 Angular

Extracción de datos desde servicios y respuestas HTTP.

---

#### 👉 APIs

```js
const { data } = response;
```

### ✨ Tip

Si trabajas con frameworks modernos, usar destructuring correctamente es prácticamente obligatorio.

---

# ⚠️ Cosas Importantes

## 🧠 Reglas Fundamentales

### Objetos

👉 Se extraen por nombre de propiedad.

### Arrays

👉 Se extraen por posición.

### Beneficios

✔️ Mejora la legibilidad.  
✔️ Reduce código repetitivo.  
✔️ Facilita el mantenimiento.  
✔️ Es estándar en JavaScript moderno.

---

# 🎯 Resumen General

## 🧠 Destructuring

### Permite

👉 Extraer valores fácilmente.  
👉 Trabajar con arrays y objetos.  
👉 Renombrar variables.  
👉 Definir valores por defecto.  
👉 Agrupar elementos restantes mediante Rest.  
👉 Escribir código más limpio y expresivo.

---

## 📋 Resumen Rápido

| Característica | Uso |
|---------------|------|
| Objetos | Extraer por nombre |
| Arrays | Extraer por posición |
| Renombrar | Cambiar nombre de variables |
| Defaults | Valores por defecto |
| Rest (`...`) | Agrupar elementos restantes |
| Funciones | Extraer parámetros directamente |
| APIs | Acceder fácilmente a datos |

---

## 🚀 Idea Clave

> Destructuring es una de las características más importantes de JavaScript moderno porque permite escribir código más limpio, legible y mantenible con muy poco esfuerzo.
> 
# 📘 Spread Operator (`...`) en JavaScript

> [!INFO]
> El **Spread Operator (`...`)** permite expandir elementos de arrays y objetos.
>
> Es una de las características más utilizadas de JavaScript moderno para copiar, combinar y manipular datos de forma sencilla e inmutable.

---

## 🟢 1. ¿Qué es Spread?

### 🧠 Concepto

El operador `...` permite expandir los elementos de una estructura.

### 👉 Función Principal

- Expandir arrays.
- Expandir objetos.
- Pasar argumentos a funciones.
- Crear copias rápidas.

### 💡 Ejemplo

```js
const nums = [1, 2, 3];

console.log(...nums);
```

### 👉 Resultado

```js
1 2 3
```

### ✨ Tip

Piensa en Spread como una forma de "desempaquetar" una estructura para acceder a sus elementos individualmente.

---

## 🔵 2. Copiar Arrays

### 🧠 Crear una Copia de un Array

Permite clonar un array sin modificar el original.

### 💡 Ejemplo

```js
const arr = [1, 2, 3];

const copia = [...arr];
```

### 👉 Ventajas

✔️ Código simple.  
✔️ Evita referencias compartidas.  
✔️ Mantiene el array original intacto.

### ✨ Tip

Es la forma moderna recomendada para copiar arrays en JavaScript.

---

## 🟣 3. Combinar Arrays

### 🧠 Unir Varios Arrays

Spread facilita fusionar múltiples arrays en uno solo.

### 💡 Ejemplo

```js
const a = [1, 2];
const b = [3, 4];

const total = [...a, ...b];
```

### 👉 Resultado

```js
[1, 2, 3, 4]
```

### ✨ Tip

Puedes combinar tantos arrays como necesites utilizando varios operadores Spread.

---

## 🟡 4. Agregar Elementos

### 🧠 Añadir Valores Fácilmente

Permite crear nuevos arrays agregando elementos.

### 💡 Ejemplo

```js
const nums = [1, 2];

const nuevo = [...nums, 3, 4];
```

### 👉 Resultado

```js
[1, 2, 3, 4]
```

### ✨ Tip

Muy útil cuando trabajas con estados inmutables en React.

---

## 🟠 5. Copiar Objetos

### 🧠 Clonar Objetos

Permite crear una copia superficial de un objeto.

### 💡 Ejemplo

```js
const user = {
  nombre: 'Ana'
};

const copia = {
  ...user
};
```

### 👉 Resultado

```js
{
  nombre: 'Ana'
}
```

### ✨ Tip

La copia es superficial (*shallow copy*). Los objetos anidados seguirán compartiendo referencia.

---

## 🔴 6. Combinar Objetos

### 🧠 Fusionar Objetos

Puedes unir múltiples objetos en uno nuevo.

### 💡 Ejemplo

```js
const a = { x: 1 };
const b = { y: 2 };

const nuevo = {
  ...a,
  ...b
};
```

### 👉 Resultado

```js
{
  x: 1,
  y: 2
}
```

### ✨ Tip

Es una forma mucho más limpia que utilizar múltiples asignaciones manuales.

---

## ⚫ 7. Sobrescribir Propiedades

### 🧠 El Último Valor Gana

Si existen propiedades repetidas, prevalece la última definida.

### 💡 Ejemplo

```js
const user = {
  nombre: 'Ana'
};

const nuevo = {
  ...user,
  nombre: 'Luis'
};
```

### 👉 Resultado

```js
{
  nombre: 'Luis'
}
```

### 🧠 Regla Importante

```js
const obj = {
  ...primero,
  ...segundo
};
```

Las propiedades de `segundo` sobrescriben las de `primero` si tienen el mismo nombre.

### ✨ Tip

Este comportamiento es muy útil para actualizar propiedades específicas sin modificar el objeto original.

---

## ⚪ 8. Pasar Argumentos a Funciones

### 🧠 Expandir Arrays en Parámetros

Permite enviar los elementos de un array como argumentos individuales.

### 💡 Ejemplo

```js
const nums = [1, 2, 3];

function sumar(a, b, c) {
  return a + b + c;
}

sumar(...nums);
```

### 👉 Equivale a

```js
sumar(1, 2, 3);
```

### ✨ Tip

Es especialmente útil cuando una función espera varios parámetros y ya dispones de ellos en un array.

---

## 🟤 9. Spread vs Rest

### 🧠 Diferencia Fundamental

Aunque ambos utilizan `...`, cumplen funciones completamente distintas.

---

### 👉 Spread

Expande elementos.

### 💡 Ejemplo

```js
const nums = [1, 2, 3];

console.log(...nums);
```

---

### 👉 Rest

Agrupa elementos.

### 💡 Ejemplo

```js
const [a, ...resto] = [1, 2, 3];
```

### 👉 Resultado

```js
a      // 1
resto  // [2, 3]
```

### ✨ Tip

Una forma fácil de recordarlo:

| Operador | Acción |
|-----------|-----------|
| Spread | Expande |
| Rest | Agrupa |

---

# ⚠️ Cosas Importantes

## 🧠 Conceptos Clave

### Arrays

✔️ Copiar.  
✔️ Combinar.  
✔️ Agregar elementos.

### Objetos

✔️ Clonar.  
✔️ Fusionar.  
✔️ Actualizar propiedades.

### Funciones

✔️ Pasar argumentos dinámicamente.

### Inmutabilidad

✔️ Permite crear nuevas estructuras sin modificar las originales.

---

# 🎯 Resumen General

## 🧠 Spread Operator (`...`)

### Permite

👉 Expandir arrays.  
👉 Expandir objetos.  
👉 Copiar estructuras.  
👉 Combinar datos.  
👉 Actualizar propiedades.  
👉 Pasar argumentos a funciones.

---

## 📋 Resumen Rápido

| Uso | Ejemplo |
|------|----------|
| Copiar Array | `[...arr]` |
| Combinar Arrays | `[...a, ...b]` |
| Agregar Elementos | `[...arr, valor]` |
| Copiar Objeto | `{ ...obj }` |
| Combinar Objetos | `{ ...a, ...b }` |
| Sobrescribir Propiedades | `{ ...obj, nombre: 'Nuevo' }` |
| Pasar Argumentos | `fn(...array)` |

---

## 🚀 Idea Clave

> El Spread Operator es una de las herramientas más importantes de JavaScript moderno porque permite trabajar con datos de forma más limpia, segura e inmutable.
>
> Dominarlo es esencial para React, APIs, manipulación de estados y desarrollo moderno en JavaScript.

# 📘 🟢 10. INMUTABILIDAD (IMPORTANTE)

---

### 🧠 Qué es

No modificar datos originales; mantener los valores intactos evita errores inesperados en el código.

---

### 💡 Ejemplo

```ts
const nuevo = [...nums];

const nuevoObj = { ...user };
```

---

### ✨ Tip

Usa spread operator para crear nuevas versiones de datos sin afectar los originales. Esto es crucial cuando manejas estados en frameworks modernos como React.

---

# 📘 🔵 11. COPIA SUPERFICIAL

---

### 🧠 Qué es

El operador spread **NO copia profundamente**; solo copia el primer nivel de propiedades.

---

### 💡 Ejemplo

```ts
const obj = { a: { x: 1 } };

const copia = { ...obj };

copia.a.x = 2;
```

👉 Resultado: `obj.a.x` también cambia.

---

### ✨ Tip

Para objetos anidados, considera usar librerías como `lodash` (`cloneDeep`) o `structuredClone` para copias profundas.

---

# 📘 🟣 12. USO CON ARRAYS DE OBJETOS

---

### 🧠 Qué es

Muy común trabajar con arrays de objetos y crear nuevas versiones sin mutar el original.

---

### 💡 Ejemplo

```ts
const users = [{ id: 1 }];

const nuevo = [...users, { id: 2 }];
```

---

### ✨ Tip

Spread operator facilita añadir, eliminar o actualizar elementos en arrays sin mutar el estado original.

---

# 📘 🟡 13. USO EN REACT / ANGULAR

---

### 🧠 Qué es

Muy utilizado en frameworks modernos para **actualizar estados sin mutar** los datos originales.

---

### 👉 Observación

Permite a librerías de UI detectar cambios fácilmente, ya que los nuevos objetos/arrays son referencias diferentes.

---

# 📘 🟠 14. BUENAS PRÁCTICAS

---

✔️ Usar para copiar datos  
✔️ Evitar mutaciones directas  
✔️ Entender que es copia superficial  
✔️ Usar con destructuring  

---

# 📘 🔴 15. ERRORES COMUNES

---

👉 Pensar que copia todo profundamente  
👉 Sobrescribir sin querer  
👉 Confundir con rest operator  

---

# ⚠️ COSAS IMPORTANTES

---

🧠 `...` expande datos  
🧠 Funciona con arrays y objetos  
🧠 No hace copia profunda  
🧠 Clave para código moderno  

---

# ✨ RESUMEN

---

### 🧠 Spread operator:

👉 Copia arrays y objetos  
👉 Combina datos  
👉 Evita mutaciones  
👉 Expande valores  

### 🚀 HERRAMIENTA ESENCIAL en JS 🔥

# 📘 DOM EN JAVASCRIPT (JavaScript en el navegador 🔥)

---

> 🧠 El DOM permite a JavaScript interactuar con la página web.

👉 Es la base para crear páginas dinámicas, interactivas y manipulables desde JavaScript.

---

# 📘 🟢 1. ¿QUÉ ES EL DOM?

---

### 🧠 Definición

**DOM (Document Object Model)**

Representa el HTML como una estructura de objetos que JavaScript puede leer y modificar.

---

### 💡 Ejemplo

```html
<h1>Hola</h1>
```

👉 JavaScript lo interpreta como un objeto manipulable.

---

### ✨ Tip

Piensa en el DOM como un puente entre el HTML y JavaScript. Gracias a él puedes modificar cualquier elemento de la página sin recargarla.

---

# 📘 🔵 2. DOCUMENT

---

### 🧠 Definición

Es el objeto principal del DOM.

👉 Representa toda la página web cargada en el navegador.

👉 Es el punto de entrada para acceder a cualquier elemento HTML.

---

### 💡 Ejemplo

```js
document
```

---

### ✨ Tip

Prácticamente todas las operaciones del DOM comienzan desde `document`.

---

# 📘 🟣 3. QUERYSELECTOR

---

### 🧠 Definición

Permite seleccionar un elemento del HTML utilizando selectores CSS.

---

### 💡 Ejemplo

```js
const titulo = document.querySelector('h1');
```

---

### 📌 También puedes seleccionar

```js
document.querySelector('.clase');
document.querySelector('#id');
```

---

### ✨ Tip

`querySelector()` siempre devuelve el primer elemento que coincida con el selector.

---

# 📘 🟡 4. QUERYSELECTORALL

---

### 🧠 Definición

Permite seleccionar múltiples elementos del HTML.

---

### 💡 Ejemplo

```js
const items = document.querySelectorAll('.item');
```

---

### 👉 Observación

Devuelve una colección de elementos (`NodeList`).

---

### ✨ Tip

Es común recorrer los resultados usando `forEach()`.

```js
items.forEach(item => {
  console.log(item);
});
```

---

# 📘 🟠 5. MANIPULAR TEXTO

---

### 🧠 Definición

Permite cambiar el contenido de texto de un elemento.

---

### 💡 Ejemplo

```js
titulo.textContent = 'Nuevo texto';
```

---

### 👉 Resultado

```html
<h1>Nuevo texto</h1>
```

---

### ✨ Tip

`textContent` es más seguro que `innerHTML` cuando solo necesitas mostrar texto.

---

# 📘 🔴 6. MANIPULAR HTML

---

### 🧠 Definición

Permite insertar contenido HTML dentro de un elemento.

---

### 💡 Ejemplo

```js
titulo.innerHTML = '<span>Hola</span>';
```

---

### 👉 Resultado

```html
<h1>
  <span>Hola</span>
</h1>
```

---

### ⚠️ Importante

Ten cuidado al usar `innerHTML` con contenido proveniente de usuarios.

---

### ✨ Tip

Utiliza `innerHTML` únicamente cuando necesites insertar etiquetas HTML dinámicamente.

---

# 📘 ⚫ 7. MANIPULAR ESTILOS

---

### 🧠 Definición

Permite modificar propiedades CSS desde JavaScript.

---

### 💡 Ejemplo

```js
titulo.style.color = 'red';
```

---

### 👉 Resultado

El texto cambiará de color a rojo.

---

### ✨ Tip

Para cambios complejos suele ser mejor agregar o quitar clases CSS usando `classList`.

---

# 📘 ⚪ 8. CLASSLIST

---

### 🧠 Definición

Permite gestionar clases CSS de forma sencilla.

---

### 💡 Ejemplo

```js
titulo.classList.add('activo');

titulo.classList.remove('activo');

titulo.classList.toggle('activo');
```

---

### ✔️ Métodos más usados

| Método | Descripción |
|----------|----------|
| `add()` | Agrega una clase |
| `remove()` | Elimina una clase |
| `toggle()` | Activa o desactiva una clase |
| `contains()` | Verifica si existe |

---

### ✨ Tip

`toggle()` es ideal para menús, modales y elementos que cambian entre estados.

---

# 📘 🟤 9. EVENTOS

---

### 🧠 Definición

Los eventos permiten reaccionar a acciones realizadas por el usuario.

---

### ✔️ Ejemplos de eventos comunes

- `click`
- `submit`
- `change`
- `input`
- `keydown`
- `mouseover`

---

### 👉 Observación

Los eventos son la base de la interactividad en aplicaciones web.

---

### ✨ Tip

La forma moderna de escuchar eventos es mediante `addEventListener()`.

---

# 📘 🟢 10. CLICK

---

### 🧠 Definición

Se ejecuta cuando el usuario hace clic sobre un elemento.

---

### 💡 Ejemplo

```js
titulo.addEventListener('click', () => {
  console.log('click');
});
```

---

### ✔️ Flujo

1. El usuario hace clic.
2. Se dispara el evento.
3. Se ejecuta la función asociada.

---

### ✨ Tip

Puedes reutilizar una misma función para múltiples eventos.

```js
function manejarClick() {
  console.log('Click detectado');
}

titulo.addEventListener('click', manejarClick);
```

---

# ⚠️ COSAS IMPORTANTES

---

🧠 El DOM representa el HTML como objetos.

🧠 `document` es el punto de entrada principal.

🧠 `querySelector()` selecciona un elemento.

🧠 `querySelectorAll()` selecciona varios elementos.

🧠 `textContent` modifica texto.

🧠 `innerHTML` inserta HTML.

🧠 `style` modifica CSS.

🧠 `classList` administra clases.

🧠 Los eventos permiten crear interacción con el usuario.

---

# ✨ RESUMEN

---

### 🧠 DOM (Document Object Model)

👉 Convierte el HTML en objetos manipulables.

### ✔️ Herramientas principales

- `document`
- `querySelector()`
- `querySelectorAll()`
- `textContent`
- `innerHTML`
- `style`
- `classList`
- `addEventListener()`

### 🚀 Gracias al DOM puedes:

👉 Modificar contenido

👉 Cambiar estilos

👉 Escuchar eventos

👉 Crear aplicaciones web dinámicas

🔥 Es uno de los pilares fundamentales del desarrollo Frontend.

# 📘 🔵 11. INPUT

---

### 🧠 Qué es

Permite detectar cambios en campos de entrada (`input`, `textarea`, etc.).

---

### 💡 Ejemplo

```js
input.addEventListener('input', (e) => {
  console.log(e.target.value);
});
```

---

### 👉 Observación

El evento se dispara cada vez que el usuario escribe, borra o modifica el contenido.

---

### ✨ Tip

Ideal para validaciones en tiempo real, buscadores dinámicos y formularios reactivos.

---

# 📘 🟣 12. CREAR ELEMENTOS

---

### 🧠 Qué es

Permite crear elementos HTML desde JavaScript.

---

### 💡 Ejemplo

```js
const div = document.createElement('div');
```

---

### 👉 Resultado

Se crea el elemento en memoria, pero aún no aparece en la página.

---

### ✨ Tip

Puedes asignarle contenido, clases o atributos antes de insertarlo en el DOM.

```js
div.textContent = 'Hola';
div.classList.add('card');
```

---

# 📘 🟡 13. INSERTAR ELEMENTOS

---

### 🧠 Qué es

Permite agregar elementos al DOM.

---

### 💡 Ejemplo

```js
document.body.appendChild(div);
```

---

### 👉 Resultado

El elemento aparece visualmente en la página.

---

### ✨ Tip

Existen métodos más modernos como:

```js
element.append(div);
```

o

```js
element.prepend(div);
```

---

# 📘 🟠 14. ELIMINAR ELEMENTOS

---

### 🧠 Qué es

Permite quitar elementos del DOM.

---

### 💡 Ejemplo

```js
div.remove();
```

---

### 👉 Resultado

El elemento desaparece de la página.

---

### ✨ Tip

Es muy utilizado para cerrar modales, eliminar tarjetas o borrar elementos dinámicamente.

---

# 📘 🔴 15. NAVEGACIÓN EN EL DOM

---

### 🧠 Qué es

Permite moverse entre elementos relacionados dentro del árbol DOM.

---

### 💡 Ejemplo

```js
elemento.parentElement;

elemento.children;
```

---

### ✔️ Propiedades comunes

| Propiedad | Descripción |
|------------|------------|
| `parentElement` | Elemento padre |
| `children` | Hijos directos |
| `firstElementChild` | Primer hijo |
| `lastElementChild` | Último hijo |
| `nextElementSibling` | Hermano siguiente |
| `previousElementSibling` | Hermano anterior |

---

### ✨ Tip

Comprender la navegación DOM ayuda a manipular estructuras complejas de forma eficiente.

---

# 📘 ⚫ 16. EVENT OBJECT

---

### 🧠 Qué es

Objeto que contiene información sobre el evento ocurrido.

---

### 💡 Ejemplo

```js
e.target;

e.preventDefault();
```

---

### ✔️ Propiedades y métodos comunes

| Elemento | Descripción |
|-----------|-----------|
| `e.target` | Elemento que disparó el evento |
| `e.type` | Tipo de evento |
| `e.preventDefault()` | Evita comportamiento por defecto |
| `e.stopPropagation()` | Detiene propagación |

---

### ✨ Tip

El objeto `event` es fundamental para saber qué ocurrió y dónde ocurrió.

---

# 📘 ⚪ 17. DELEGACIÓN DE EVENTOS

---

### 🧠 Qué es

Consiste en manejar eventos desde un elemento padre en lugar de asignarlos individualmente a cada hijo.

---

### 💡 Ejemplo

```js
lista.addEventListener('click', (e) => {
  if (e.target.matches('li')) {
    console.log('click en li');
  }
});
```

---

### 👉 Ventajas

✔️ Menos listeners

✔️ Mejor rendimiento

✔️ Funciona con elementos creados dinámicamente

---

### ✨ Tip

Es una técnica muy utilizada en listas, tablas y componentes dinámicos.

---

# 📘 🟤 18. BUENAS PRÁCTICAS

---

### ✔️ Recomendaciones

👉 Usar `querySelector()`

👉 Evitar manipular excesivamente el DOM (performance)

👉 Usar clases CSS en lugar de estilos directos

👉 Separar lógica y presentación (UI)

👉 Reutilizar funciones para eventos

👉 Mantener el código organizado

---

### ✨ Tip

Cuantas menos modificaciones directas hagas al DOM, mejor será el rendimiento de la aplicación.

---

# 📘 🟢 19. ERROR COMÚN

---

### ⚠️ Problema

Intentar acceder a elementos antes de que el DOM haya terminado de cargarse.

---

### 💡 Solución

```js
document.addEventListener('DOMContentLoaded', () => {
  // tu código
});
```

---

### 👉 Observación

Garantiza que todos los elementos HTML existan antes de manipularlos.

---

### ✨ Tip

Si tu script se carga al final del `<body>`, muchas veces no será necesario usar este evento.

---

# 📘 🔵 20. FLUJO REAL

---

### 🧠 Cómo funciona en una aplicación

```text
Usuario
   ↓
Evento
   ↓
JavaScript
   ↓
DOM
   ↓
Interfaz (UI)
```

---

### 💡 Ejemplo práctico

```text
Usuario hace clic
       ↓
Evento click
       ↓
JavaScript ejecuta código
       ↓
Modifica el DOM
       ↓
La página se actualiza visualmente
```

---

### ✨ Tip

Este flujo ocurre constantemente en cualquier aplicación web moderna.

---

# ⚠️ COSAS IMPORTANTES

---

🧠 El DOM conecta JavaScript con HTML.

🧠 `querySelector()` selecciona elementos.

🧠 `createElement()` crea elementos.

🧠 `appendChild()` inserta elementos.

🧠 `remove()` elimina elementos.

🧠 `addEventListener()` maneja eventos.

🧠 El objeto `event` contiene información del evento.

🧠 La delegación de eventos mejora el rendimiento.

🧠 Puedes modificar HTML y CSS dinámicamente.

---

# ✨ RESUMEN

---

## 🧠 DOM

👉 Permite manipular la página web.

👉 Escucha acciones del usuario.

👉 Modifica contenido y estilos.

👉 Crea y elimina elementos.

👉 Gestiona eventos.

👉 Actualiza la interfaz dinámicamente.

---

## ✔️ Herramientas más usadas

- `querySelector()`
- `querySelectorAll()`
- `createElement()`
- `appendChild()`
- `remove()`
- `classList`
- `textContent`
- `innerHTML`
- `addEventListener()`

---

## 🚀 Resultado

Gracias al DOM, JavaScript puede transformar páginas estáticas en aplicaciones interactivas y dinámicas.

🔥 Es uno de los pilares fundamentales del desarrollo Frontend moderno.

# 📘 EVENTOS EN JAVASCRIPT (LISTA COMPLETA 🔥)

---

> 🧠 Los eventos permiten reaccionar a acciones del usuario.

👉 Son la base de la interactividad en aplicaciones web modernas.

👉 Cada vez que un usuario hace clic, escribe, desplaza la página o interactúa con un elemento, se genera un evento.

---

# 📘 🟢 1. EVENTOS DE MOUSE

---

### 🧠 Qué son

Permiten detectar interacciones realizadas con el mouse.

---

### ✔️ Eventos más comunes

| Evento | Descripción |
|----------|----------|
| `click` | Clic simple |
| `dblclick` | Doble clic |
| `mouseenter` | El cursor entra al elemento |
| `mouseleave` | El cursor sale del elemento |
| `mouseover` | Pasa por encima del elemento |
| `mouseout` | Sale del elemento (incluye hijos) |
| `mousedown` | Botón presionado |
| `mouseup` | Botón liberado |
| `contextmenu` | Clic derecho |

---

### 💡 Ejemplo

```js
boton.addEventListener('click', () => {
  console.log('Click detectado');
});
```

---

### ✨ Tip

`mouseenter` y `mouseleave` suelen ser más predecibles que `mouseover` y `mouseout` cuando existen elementos hijos.

---

# 📘 🔵 2. EVENTOS DE TECLADO

---

### 🧠 Qué son

Permiten reaccionar cuando el usuario interactúa con el teclado.

---

### ✔️ Eventos principales

| Evento | Descripción |
|----------|----------|
| `keydown` | Tecla presionada |
| `keyup` | Tecla liberada |
| `keypress` | Obsoleto ⚠️ |

---

### 💡 Ejemplo

```js
document.addEventListener('keydown', (e) => {
  console.log(e.key);
});
```

---

### ✨ Tip

`keydown` es el evento más utilizado para detectar atajos de teclado.

---

# 📘 🟣 3. EVENTOS DE FORMULARIOS

---

### 🧠 Qué son

Permiten controlar formularios e inputs.

---

### ✔️ Eventos principales

| Evento | Descripción |
|----------|----------|
| `input` | Cambia el valor |
| `change` | Cambia y pierde foco |
| `submit` | Envío del formulario |
| `focus` | Entra al input |
| `blur` | Pierde el foco |
| `reset` | Reinicia formulario |

---

### 💡 Ejemplo

```js
form.addEventListener('submit', (e) => {
  e.preventDefault();
});
```

---

### ✨ Tip

Usa `input` para validaciones en tiempo real y `change` cuando solo necesites reaccionar al valor final.

---

# 📘 🟡 4. EVENTOS DE VENTANA

---

### 🧠 Qué son

Eventos globales relacionados con la ventana o documento.

---

### ✔️ Eventos principales

| Evento | Descripción |
|----------|----------|
| `load` | Página completamente cargada |
| `DOMContentLoaded` | DOM listo |
| `resize` | Cambio de tamaño |
| `scroll` | Desplazamiento |
| `unload` | Salir de la página |

---

### 💡 Ejemplo

```js
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM listo');
});
```

---

### ✨ Tip

`DOMContentLoaded` suele ser suficiente en la mayoría de aplicaciones.

---

# 📘 🟠 5. EVENTOS DE PORTAPAPELES

---

### 🧠 Qué son

Permiten reaccionar cuando el usuario copia, corta o pega contenido.

---

### ✔️ Eventos principales

| Evento | Descripción |
|----------|----------|
| `copy` | Copiar |
| `cut` | Cortar |
| `paste` | Pegar |

---

### 💡 Ejemplo

```js
input.addEventListener('paste', () => {
  console.log('Contenido pegado');
});
```

---

### ✨ Tip

Muy útiles para validar o transformar contenido pegado por el usuario.

---

# 📘 🔴 6. EVENTOS DE DRAG & DROP

---

### 🧠 Qué son

Permiten implementar funcionalidades de arrastrar y soltar.

---

### ✔️ Eventos principales

| Evento | Descripción |
|----------|----------|
| `drag` | Arrastrando |
| `dragstart` | Inicio del arrastre |
| `dragend` | Fin del arrastre |
| `dragover` | Sobre zona destino |
| `drop` | Soltar elemento |

---

### 💡 Ejemplo

```js
elemento.addEventListener('dragstart', () => {
  console.log('Iniciando arrastre');
});
```

---

### ✨ Tip

Para que `drop` funcione correctamente normalmente debes usar `e.preventDefault()` en `dragover`.

---

# 📘 ⚫ 7. EVENTOS DE MEDIA

---

### 🧠 Qué son

Permiten controlar audio y video.

---

### ✔️ Eventos principales

| Evento | Descripción |
|----------|----------|
| `play` | Reproducción iniciada |
| `pause` | Reproducción pausada |
| `ended` | Reproducción finalizada |
| `volumechange` | Cambio de volumen |

---

### 💡 Ejemplo

```js
video.addEventListener('play', () => {
  console.log('Video iniciado');
});
```

---

### ✨ Tip

Muy utilizados en reproductores multimedia personalizados.

---

# 📘 ⚪ 8. EVENTOS DE TOUCH (MÓVIL)

---

### 🧠 Qué son

Permiten detectar gestos en pantallas táctiles.

---

### ✔️ Eventos principales

| Evento | Descripción |
|----------|----------|
| `touchstart` | Comienza el toque |
| `touchend` | Finaliza el toque |
| `touchmove` | Movimiento del dedo |

---

### 💡 Ejemplo

```js
elemento.addEventListener('touchstart', () => {
  console.log('Pantalla tocada');
});
```

---

### ✨ Tip

Son fundamentales para aplicaciones móviles y experiencias táctiles.

---

# 📘 🟤 9. EVENTOS DE INPUT AVANZADOS

---

### 🧠 Qué son

Ofrecen mayor control sobre los campos de entrada.

---

### ✔️ Eventos principales

| Evento | Descripción |
|----------|----------|
| `select` | Selección de texto |
| `invalid` | Input inválido |

---

### 💡 Ejemplo

```js
input.addEventListener('invalid', () => {
  console.log('Campo inválido');
});
```

---

### ✨ Tip

Combinados con validaciones HTML permiten crear formularios más robustos.

---

# 📘 🟢 10. EVENTOS MÁS USADOS (TOP)

---

### 🧠 Los más importantes en desarrollo web

✔️ `click`

✔️ `input`

✔️ `change`

✔️ `submit`

✔️ `keydown`

✔️ `DOMContentLoaded`

---

### 💡 Ejemplo general

```js
document.addEventListener('DOMContentLoaded', () => {
  console.log('Aplicación iniciada');
});
```

---

### ✨ Tip

Dominar estos seis eventos cubre una gran parte de los casos de uso cotidianos en Frontend.

---

# ⚠️ COSAS IMPORTANTES

---

🧠 Los eventos permiten responder a acciones del usuario.

🧠 Todos los eventos generan un objeto `event`.

🧠 `addEventListener()` es la forma moderna de escuchar eventos.

🧠 Existen eventos para mouse, teclado, formularios, multimedia y dispositivos táctiles.

🧠 Los eventos son esenciales para construir interfaces interactivas.

---

# 🎯 MAPA MENTAL RÁPIDO

---

```text
EVENTOS
│
├── Mouse
│   ├── click
│   ├── mouseenter
│   └── contextmenu
│
├── Teclado
│   ├── keydown
│   └── keyup
│
├── Formularios
│   ├── input
│   ├── change
│   └── submit
│
├── Ventana
│   ├── load
│   ├── DOMContentLoaded
│   └── scroll
│
├── Portapapeles
│   ├── copy
│   ├── cut
│   └── paste
│
├── Drag & Drop
│   ├── dragstart
│   └── drop
│
├── Media
│   ├── play
│   └── pause
│
└── Touch
    ├── touchstart
    └── touchend
```

---

# ✨ RESUMEN

---

## 🧠 Eventos en JavaScript

👉 Detectan acciones del usuario.

👉 Permiten crear interfaces dinámicas.

👉 Se gestionan mediante `addEventListener()`.

👉 Son fundamentales para cualquier aplicación web moderna.

---

## 🚀 Los eventos que debes dominar primero

- `click`
- `input`
- `change`
- `submit`
- `keydown`
- `DOMContentLoaded`

🔥 Con estos eventos puedes construir la mayoría de aplicaciones Frontend modernas.

# 📘 🔵 11. EJEMPLO BÁSICO

---

### 🧠 Qué es

La forma más común de escuchar eventos es utilizando `addEventListener()`.

---

### 💡 Ejemplo

```js
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  console.log('click');
});
```

---

### 👉 Flujo

```text
Usuario hace clic
        ↓
Se dispara el evento
        ↓
JavaScript ejecuta la función
        ↓
Se actualiza la interfaz
```

---

### ✨ Tip

`addEventListener()` permite agregar múltiples eventos al mismo elemento sin sobrescribir otros.

---

# 📘 🟣 12. EVENT OBJECT (e)

---

### 🧠 Qué es

Cada evento genera automáticamente un objeto llamado `event` (normalmente `e`).

👉 Contiene información sobre lo ocurrido.

---

### 💡 Ejemplo

```js
input.addEventListener('input', (e) => {
  console.log(e.target.value);
});
```

---

### ✔️ Propiedades más utilizadas

| Propiedad | Descripción |
|------------|------------|
| `e.target` | Elemento que disparó el evento |
| `e.type` | Tipo de evento |
| `e.currentTarget` | Elemento que escucha el evento |
| `e.preventDefault()` | Evita comportamiento por defecto |
| `e.stopPropagation()` | Detiene propagación |

---

### ✨ Tip

Aprender a usar `e.target` es fundamental para trabajar con formularios y delegación de eventos.

---

# 📘 🟡 13. PREVENIR COMPORTAMIENTO

---

### 🧠 Qué es

Permite evitar acciones predeterminadas del navegador.

---

### 💡 Ejemplo

```js
form.addEventListener('submit', (e) => {
  e.preventDefault();
});
```

---

### 👉 Casos comunes

✔️ Evitar recarga de formularios

✔️ Evitar apertura de enlaces

✔️ Controlar completamente la lógica desde JavaScript

---

### ✨ Tip

Es extremadamente común en aplicaciones SPA (Single Page Applications).

---

# 📘 🟠 14. PROPAGACIÓN

---

### 🧠 Qué es

Los eventos viajan por el DOM.

👉 Este comportamiento se conoce como **Event Bubbling**.

---

### 💡 Ejemplo visual

```text
<button>
   ↓
<div>
   ↓
<body>
```

Si haces clic en el botón:

```text
button
   ↓
div
   ↓
body
```

El evento "sube" por los elementos padres.

---

### 👉 Concepto clave

**Bubbling = el evento asciende por el árbol DOM.**

---

### ✨ Tip

Puedes detener la propagación usando:

```js
e.stopPropagation();
```

---

# 📘 🔴 15. BUENAS PRÁCTICAS

---

### ✔️ Recomendaciones

👉 Usar `addEventListener()`

👉 Evitar eventos inline (`onclick`, `onchange`, etc.)

👉 Manejar correctamente el objeto `event`

👉 Utilizar delegación cuando existan muchos elementos

👉 Mantener la lógica separada de la interfaz

👉 Remover listeners cuando ya no sean necesarios

---

### ✨ Tip

Evitar eventos inline mejora la organización, escalabilidad y mantenimiento del código.

---

# ⚠️ COSAS IMPORTANTES

---

🧠 Los eventos hacen posible la interactividad web.

🧠 `click` e `input` son los eventos más utilizados.

🧠 `e.target` proporciona información del elemento que originó el evento.

🧠 `preventDefault()` evita comportamientos automáticos del navegador.

🧠 Los eventos se propagan mediante bubbling.

---

# ✨ RESUMEN

---

## 🧠 Eventos

👉 Detectan acciones del usuario.

👉 Se utilizan mediante `addEventListener()`.

👉 Permiten controlar la interfaz de usuario.

👉 Facilitan la comunicación entre usuario y aplicación.

---

## 🚀 Conceptos clave

- `addEventListener()`
- `event (e)`
- `e.target`
- `preventDefault()`
- `stopPropagation()`
- `bubbling`

🔥 Son la base de toda la interactividad en JavaScript.

---

<br>

# 📘 PROGRAMACIÓN ORIENTADA A OBJETOS EN JAVASCRIPT (POO 🔥)

---

> 🧠 Permite organizar el código utilizando objetos y clases.

👉 Facilita la reutilización, mantenimiento y escalabilidad del código.

---

# 📘 🟢 1. ¿QUÉ ES POO?

---

### 🧠 Definición

POO (**Programación Orientada a Objetos**) es un paradigma de programación basado en objetos.

---

### 👉 Objetivo

Representar entidades reales mediante código.

Ejemplos:

- Usuario
- Producto
- Pedido
- Cliente
- Vehículo

---

### ✨ Tip

La POO ayuda a modelar problemas complejos de forma más organizada y reutilizable.

---

# 📘 🔵 2. CLASES (CLASS)

---

### 🧠 Qué son

Las clases son plantillas para crear objetos.

---

### 💡 Ejemplo

```js
class Persona {
  nombre = 'Ana';
}
```

---

### 👉 Observación

La clase define cómo serán los objetos creados a partir de ella.

---

### ✨ Tip

Piensa en una clase como un "molde" y en los objetos como las "copias" creadas con ese molde.

---

# 📘 🟣 3. CONSTRUCTOR

---

### 🧠 Qué es

Método especial que se ejecuta automáticamente al crear una instancia.

---

### 💡 Ejemplo

```js
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

const p1 = new Persona('Ana', 20);
```

---

### 👉 Resultado

```js
p1.nombre; // Ana
p1.edad;   // 20
```

---

### ✨ Tip

Utiliza el constructor para inicializar propiedades al crear objetos.

---

# 📘 🟡 4. THIS

---

### 🧠 Qué es

`this` hace referencia a la instancia actual del objeto.

---

### 💡 Ejemplo

```js
this.nombre
```

---

### 👉 En contexto

```js
class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }
}
```

---

### ✔️ Significado

```text
this
 ↓
Objeto actual
```

---

### ✨ Tip

Uno de los conceptos más importantes de JavaScript es entender qué valor tiene `this` en cada contexto.

---

# 📘 🟠 5. MÉTODOS

---

### 🧠 Qué son

Los métodos son funciones definidas dentro de una clase.

👉 Describen los comportamientos que tendrán los objetos creados a partir de esa clase.

---

### 💡 Ejemplo

```js
class Persona {
  saludar() {
    console.log('Hola');
  }
}
```

---

### 👉 Uso

```js
const persona = new Persona();

persona.saludar();
```

---

### ✨ Tip

Los métodos permiten agrupar comportamientos relacionados con los datos del objeto.

---

# 📘 🔴 6. INSTANCIAS

---

### 🧠 Qué son

Son objetos creados a partir de una clase.

---

### 💡 Ejemplo

```js
const p1 = new Persona('Ana', 20);
```

---

### 👉 Relación

```text
Clase
  ↓
Instancia
```

```text
Persona
  ↓
p1
```

---

### ✨ Tip

Una misma clase puede generar múltiples instancias con valores diferentes.

---

# 📘 ⚫ 7. HERENCIA

---

### 🧠 Qué es

Permite que una clase reutilice propiedades y métodos de otra clase.

---

### 💡 Ejemplo

```js
class Animal {
  hablar() {
    console.log('Sonido');
  }
}

class Perro extends Animal {}
```

---

### 👉 Resultado

```js
const perro = new Perro();

perro.hablar();
```

```text
Sonido
```

---

### ✔️ Beneficios

- Reutilización de código
- Menos duplicación
- Mejor organización

---

### ✨ Tip

La herencia modela relaciones del tipo:

```text
Perro ES UN Animal
```

---

# 📘 ⚪ 8. SUPER

---

### 🧠 Qué es

Permite llamar al constructor o métodos de la clase padre.

---

### 💡 Ejemplo

```js
class Perro extends Animal {
  constructor(nombre) {
    super();
    this.nombre = nombre;
  }
}
```

---

### 👉 Importante

Cuando una clase hija tiene constructor propio, normalmente debe llamar a `super()` antes de usar `this`.

---

### ✨ Tip

Piensa en `super()` como una forma de inicializar la parte heredada del objeto.

---

# 📘 🟤 9. SOBRESCRITURA (OVERRIDE)

---

### 🧠 Qué es

Consiste en reemplazar el comportamiento heredado por uno nuevo.

---

### 💡 Ejemplo

```js
class Perro extends Animal {
  hablar() {
    console.log('Guau');
  }
}
```

---

### 👉 Comparación

```text
Animal.hablar() → Sonido

Perro.hablar() → Guau
```

---

### ✨ Tip

La sobrescritura permite personalizar comportamientos heredados sin modificar la clase original.

---

# 📘 🟢 10. ENCAPSULACIÓN

---

### 🧠 Qué es

Permite ocultar datos internos para protegerlos de accesos directos.

---

### 💡 Ejemplo

```js
class Cuenta {
  #saldo = 0;

  depositar(cantidad) {
    this.#saldo += cantidad;
  }
}
```

---

### 👉 Importante

```js
#saldo
```

Indica que la propiedad es privada.

---

### ❌ Esto genera error

```js
cuenta.#saldo;
```

---

### ✔️ Beneficios

- Mayor seguridad
- Menor acoplamiento
- Control sobre los datos

---

### ✨ Tip

La encapsulación ayuda a evitar modificaciones accidentales en propiedades sensibles.

---

# 📘 🔵 11. GETTERS Y SETTERS

---

### 🧠 Qué son

Permiten controlar cómo se leen y modifican las propiedades.

---

### 💡 Ejemplo

```js
class Persona {
  constructor(nombre) {
    this._nombre = nombre;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(valor) {
    this._nombre = valor;
  }
}
```

---

### 👉 Uso

```js
const persona = new Persona('Ana');

console.log(persona.nombre);

persona.nombre = 'Juan';
```

---

### ✔️ Ventajas

- Validar datos
- Controlar modificaciones
- Ocultar implementación interna

---

### ✨ Tip

Los getters y setters permiten que una propiedad se comporte como si fuera pública, manteniendo control interno.

---

# 📘 🟣 12. MÉTODOS ESTÁTICOS

---

### 🧠 Qué son

Métodos que pertenecen a la clase y no a las instancias.

👉 No requieren crear objetos para utilizarlos.

---

### 💡 Ejemplo

```js
class MathUtil {
  static sumar(a, b) {
    return a + b;
  }
}
```

---

### 👉 Uso

```js
MathUtil.sumar(2, 3);
```

---

### ❌ Incorrecto

```js
const math = new MathUtil();

math.sumar(2, 3);
```

---

### ✔️ Casos de uso

- Utilidades matemáticas
- Funciones auxiliares
- Métodos de fábrica
- Conversores

---

### ✨ Tip

Los métodos estáticos funcionan de forma similar a `Math.random()` o `Math.max()`.

---

# 🎯 RESUMEN VISUAL

---

```text
POO
│
├── Clase
│     ↓
│  Instancias
│
├── Constructor
│
├── this
│
├── Métodos
│
├── Herencia
│     ↓
│  extends
│
├── super()
│
├── Override
│
├── Encapsulación
│     ↓
│    #privado
│
├── Getters
│
├── Setters
│
└── Métodos Static
```

---

# ⚠️ COSAS IMPORTANTES

---

🧠 Una clase es una plantilla para crear objetos.

🧠 Una instancia es un objeto creado desde una clase.

🧠 `this` representa el objeto actual.

🧠 La herencia reutiliza código entre clases.

🧠 `super()` permite acceder al constructor padre.

🧠 La sobrescritura modifica comportamientos heredados.

🧠 `#` crea propiedades privadas.

🧠 Los getters y setters controlan el acceso a propiedades.

🧠 Los métodos estáticos pertenecen a la clase y no a las instancias.

---

# ✨ RESUMEN FINAL

---

## 🧠 POO en JavaScript

👉 Organiza el código mediante clases y objetos.

👉 Facilita la reutilización.

👉 Reduce duplicación.

👉 Mejora el mantenimiento.

👉 Permite modelar entidades reales.

---

## 🚀 Conceptos fundamentales

- `class`
- `constructor`
- `this`
- Métodos
- Instancias
- Herencia (`extends`)
- `super()`
- Override
- Encapsulación (`#`)
- Getters y Setters
- Métodos `static`

🔥 La POO es uno de los pilares más importantes para construir aplicaciones escalables en JavaScript.

# 📘 🟡 13. COMPOSICIÓN (EXTRA PRO)

---

### 🧠 Qué es

La composición consiste en usar objetos dentro de otros para combinar funcionalidades.

---

### 💡 Ejemplo

```js
class Motor {}

class Auto {
  constructor() {
    this.motor = new Motor();
  }
}
```

---

### 👉 Observación

La composición permite construir objetos complejos a partir de piezas más simples.

---

### ✨ Tip

Separa responsabilidades evitando la herencia excesiva; favorece la flexibilidad del código.

---

# 📘 🟠 14. BUENAS PRÁCTICAS

---

### ✔️ Recomendaciones

- Clases con **una sola responsabilidad**.
- Nombres **claros y descriptivos**.
- Usar **encapsulación** para proteger datos.
- Evitar clases **monstruosas** con demasiadas responsabilidades.

---

### ✨ Tip

Aplica el principio **SRP (Single Responsibility Principle)** de la POO.

---

# 📘 🔴 15. ERRORES COMUNES

---

### ✔️ Cosas a evitar

- Olvidar usar `new` al instanciar.
- Mal uso de `this` dentro de métodos.
- No definir correctamente el `constructor`.

---

# ⚠️ COSAS IMPORTANTES

---

🧠 `class` es una **plantilla** para crear objetos.  
🧠 `constructor` inicializa datos al crear la instancia.  
🧠 `this` referencia la instancia actual.  
🧠 `extends` permite **herencia**.  
🧠 `#` crea **propiedades privadas**.

---

# ✨ RESUMEN

---

## 🧠 Conceptos Clave de POO

- **Clases** → plantillas  
- **Objetos** → instancias  
- **Métodos** → funciones  
- **Herencia** → reutilización  
- **Encapsulación** → control  

👉 BASE para estructurar aplicaciones grandes en JS 🚀🔥

---

# 📘 ASINCRONÍA EN JAVASCRIPT (CLAVE 🔥🔥)

---

> 🧠 La asincronía permite ejecutar tareas sin bloquear el hilo principal de JS.

👉 Fundamental para APIs, timers, eventos y cualquier operación que tarde tiempo.

---

# 📘 🟢 1. ¿QUÉ ES ASINCRONÍA?

---

### 🧠 Qué es

JavaScript **ejecuta una cosa a la vez** (single thread), pero puede manejar tareas en segundo plano.

---

### 💡 Ejemplo

```js
console.log('1');

setTimeout(() => {
  console.log('2');
}, 1000);

console.log('3');
```

---

### 👉 Resultado

```text
1
3
2
```

---

### ✨ Tip

El event loop de JS gestiona la cola de tareas asíncronas para que el hilo principal no se bloquee.

---

# 📘 🔵 2. CALLBACKS

---

### 🧠 Qué son

Funciones que se pasan como argumento y se ejecutan después de que otra función termine.

---

### 💡 Ejemplo

```js
function saludar(nombre, callback) {
  console.log('Hola ' + nombre);
  callback();
}

saludar('Ana', () => {
  console.log('Adiós');
});
```

---

### 👉 Uso común

✔️ Eventos  
✔️ `setTimeout` / `setInterval`  
✔️ APIs antiguas que dependen de callbacks

---

### ✨ Tip

Los callbacks son la base de la asincronía en JS, aunque hoy se usan **Promises** y **async/await** para mayor claridad.

---

# 📘 🟣 3. PROBLEMA: CALLBACK HELL

---

### 🧠 Qué es

Sucede cuando se anidan demasiados callbacks, generando código difícil de leer y mantener.

---

### 💡 Ejemplo

```js
setTimeout(() => {
  console.log('1');
  setTimeout(() => {
    console.log('2');
    setTimeout(() => {
      console.log('3');
    }, 1000);
  }, 1000);
}, 1000);
```

---

### 👉 Observación

El código se vuelve **difícil de seguir**, propenso a errores y poco escalable 😵

---

### ✨ Tip

Para evitar callback hell, utiliza **Promises** o **async/await**, que hacen el código más lineal y legible.

---

# 📘 🟡 4. PROMESAS (PROMISE)

---

### 🧠 Qué son

Una **Promise** es un objeto que representa un valor que estará disponible ahora, en el futuro o nunca.

---

### ✔️ Estados de una Promesa

| Estado | Descripción |
|----------|----------|
| `pending` | Pendiente |
| `fulfilled` | Completada correctamente |
| `rejected` | Ocurrió un error |

---

### 💡 Flujo visual

```text
Promise
   │
   ├── Pending
   │
   ├── Fulfilled ✅
   │
   └── Rejected ❌
```

---

### ✨ Tip

Las Promises fueron creadas para solucionar gran parte de los problemas del Callback Hell.

---

# 📘 🟠 5. CREAR UNA PROMESA

---

### 🧠 Qué es

Se crea utilizando el constructor `Promise`.

---

### 💡 Ejemplo

```js
const promesa = new Promise((resolve, reject) => {
  const ok = true;

  if (ok) resolve('Todo bien');
  else reject('Error');
});
```

---

### 👉 Elementos importantes

| Función | Descripción |
|----------|----------|
| `resolve()` | Éxito |
| `reject()` | Error |

---

### ✨ Tip

Una promesa solo puede resolverse o rechazarse una vez.

---

# 📘 🔴 6. CONSUMIR PROMESAS (.then / .catch)

---

### 🧠 Qué es

Permite manejar el resultado de una promesa.

---

### 💡 Ejemplo

```js
promesa
  .then(res => console.log(res))
  .catch(err => console.error(err));
```

---

### 👉 Flujo

```text
Promise
   │
   ├── then()  ✅ éxito
   │
   └── catch() ❌ error
```

---

### ✨ Tip

Siempre es recomendable manejar errores con `.catch()`.

---

# 📘 ⚫ 7. ENCADENAR PROMESAS

---

### 🧠 Qué es

Permite ejecutar varias operaciones asíncronas en secuencia.

---

### 💡 Ejemplo

```js
getData()
  .then(data => process(data))
  .then(result => console.log(result))
  .catch(err => console.error(err));
```

---

### 👉 Beneficio

Evita anidar múltiples callbacks.

---

### Comparación

❌ Callback Hell

```text
callback
 └── callback
      └── callback
           └── callback
```

✅ Promise Chaining

```text
.then()
.then()
.then()
.catch()
```

---

### ✨ Tip

Cada `.then()` devuelve una nueva promesa.

---

# 📘 ⚪ 8. ASYNC / AWAIT

---

### 🧠 Qué es

Sintaxis moderna para trabajar con Promises.

👉 Hace que el código parezca síncrono y sea mucho más legible.

---

### Comparación

#### Promise

```js
fetch(url)
  .then(res => res.json())
  .then(data => console.log(data));
```

#### Async/Await

```js
const res = await fetch(url);
const data = await res.json();
```

---

### ✨ Tip

Actualmente es la forma más utilizada para trabajar con asincronía.

---

# 📘 🟤 9. USAR ASYNC / AWAIT

---

### 🧠 Qué es

La palabra clave `async` convierte una función en asíncrona.

La palabra clave `await` espera la resolución de una promesa.

---

### 💡 Ejemplo

```js
async function obtenerDatos() {
  try {
    const res = await fetch('api');
    const data = await res.json();

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

---

### 👉 Flujo

```text
async
   ↓
await Promise
   ↓
Resultado
```

---

### ✨ Tip

`await` solo puede utilizarse dentro de funciones `async`.

---

# 📘 🟢 10. TRY / CATCH

---

### 🧠 Qué es

Permite capturar errores y evitar que la aplicación falle.

---

### 💡 Ejemplo

```js
try {
  // código
} catch (error) {
  console.error(error);
}
```

---

### 👉 Beneficios

✔️ Manejo centralizado de errores

✔️ Código más seguro

✔️ Mejor experiencia de usuario

---

### ✨ Tip

`try/catch` es el compañero natural de `async/await`.

---

# 📘 🔵 11. FETCH (APIs)

---

### 🧠 Qué es

`fetch()` permite realizar peticiones HTTP desde JavaScript.

---

### 👉 Características

✔️ Integrado en el navegador

✔️ Devuelve una Promise

✔️ Compatible con async/await

✔️ Muy utilizado para consumir APIs REST

---

### 💡 Ejemplo conceptual

```text
Frontend
    ↓
 fetch()
    ↓
API
    ↓
Respuesta JSON
```

---

### ✨ Tip

Prácticamente cualquier aplicación moderna utiliza `fetch()` o librerías similares para comunicarse con servidores.

---

# 📘 🟣 12. EJEMPLO FETCH

---

### 🧠 Uso con Promises

---

### 💡 Ejemplo

```js
fetch('https://api.com/users')
  .then(res => res.json())
  .then(data => console.log(data));
```

---

### 👉 Flujo

```text
fetch()
   ↓
Respuesta
   ↓
json()
   ↓
Datos
```

---

### ✨ Tip

`res.json()` también devuelve una Promise.

---

# 📘 🟡 13. FETCH CON ASYNC/AWAIT

---

### 🧠 Forma moderna

---

### 💡 Ejemplo

```js
async function getUsers() {
  const res = await fetch('https://api.com/users');

  const data = await res.json();

  console.log(data);
}
```

---

### ✔️ Ventajas

- Más legible
- Más fácil de mantener
- Menos anidación
- Mejor manejo de errores

---

### ✨ Tip

Es la forma recomendada actualmente para consumir APIs.

---

# 📘 🟠 14. CUÁNDO USAR CADA UNO

---

### 🧠 Comparación rápida

| Técnica | Cuándo usar |
|----------|----------|
| Callbacks | Eventos simples |
| Promises | Flujo asíncrono organizado |
| Async/Await | Código moderno y legible |

---

### 👉 Recomendación

```text
Eventos
   ↓
Callbacks

Operaciones Async
   ↓
Promises

Aplicaciones Modernas
   ↓
Async/Await
```

---

### ✨ Tip

Aprende Promises primero y luego Async/Await. Internamente, Async/Await está basado en Promises.

---

# ⚠️ COSAS IMPORTANTES

---

🧠 JavaScript es Single Thread.

🧠 La asincronía evita bloquear la aplicación.

🧠 Las Promises tienen tres estados.

🧠 `.then()` maneja éxitos.

🧠 `.catch()` maneja errores.

🧠 `async/await` simplifica el código asíncrono.

🧠 `fetch()` devuelve una Promise.

🧠 `try/catch` captura errores.

---

# 🎯 MAPA MENTAL

---

```text
ASINCRONÍA
│
├── Callbacks
│
├── Callback Hell 😵
│
├── Promises
│   ├── pending
│   ├── fulfilled
│   └── rejected
│
├── then()
│
├── catch()
│
├── async
│
├── await
│
├── try/catch
│
└── fetch()
```

---

# ✨ RESUMEN FINAL

---

## 🧠 Asincronía en JavaScript

👉 Permite ejecutar tareas sin bloquear la aplicación.

👉 Hace posible trabajar con APIs, timers y eventos.

👉 Evolución del código asíncrono:

```text
Callbacks
     ↓
Promises
     ↓
Async/Await 🚀
```

---

## 🚀 Herramientas fundamentales

- `Promise`
- `.then()`
- `.catch()`
- `async`
- `await`
- `try/catch`
- `fetch()`

🔥 Dominar estos conceptos es indispensable para consumir APIs y desarrollar aplicaciones modernas en JavaScript.

# 📘 🔴 15. PARALELISMO (Promise.all)

---

### 🧠 Qué es

Permite ejecutar varias promesas en **paralelo** y esperar a que todas se completen.

---

### 💡 Ejemplo

```js
Promise.all([p1, p2])
  .then(([r1, r2]) => console.log(r1, r2));
```

---

### 👉 Observaciones

✔️ Útil cuando varias tareas independientes deben completarse antes de continuar.  
✔️ Si alguna promesa falla, `Promise.all` falla.

---

### ✨ Tip

Para manejar errores individuales sin detener todo, usar `Promise.allSettled`.

---

# 📘 ⚫ 16. EVENT LOOP (BÁSICO)

---

### 🧠 Qué es

Mecanismo que permite a JavaScript manejar tareas asíncronas a pesar de ser single-threaded.

---

### 👉 Componentes

- **Call Stack** → Pila de ejecución de funciones.
- **Queue** → Cola de tareas pendientes.

---

### 💡 Flujo conceptual

```text
Call Stack
   │
   └── function()
Queue (tasks/microtasks)
   ↓
Se ejecuta cuando Stack está vacío
```

---

### ✨ Tip

El Event Loop asegura que JS no se bloquee, incluso con operaciones async.

---

# 📘 ⚪ 17. MICROTASKS vs TASKS

---

### 🧠 Qué es

Determina el **orden de ejecución** de código asíncrono.

---

### 👉 Diferencia principal

| Tipo       | Ejemplo                  | Orden de ejecución |
|------------|--------------------------|-----------------|
| Microtasks | Promises                | Antes de la siguiente Task |
| Tasks      | setTimeout, setInterval | Después de microtasks   |

---

### 💡 Ejemplo

```js
setTimeout(() => console.log('task'), 0);

Promise.resolve().then(() => console.log('microtask'));

// Output: microtask → task
```

---

### ✨ Tip

Siempre que uses Promises, recuerda que son microtasks y se ejecutan antes que timers.

---

# 📘 🟤 18. ERROR COMÚN

---

### 👉 Errores frecuentes al trabajar con async/await

- Olvidar usar `await` → resultado inesperado  
- No usar `try/catch` → errores no capturados  
- No retornar promesas → cadenas rotas

---

### ✨ Tip

Cada función `async` devuelve automáticamente una promesa.

---

# 📘 🟢 19. BUENAS PRÁCTICAS

---

✔️ Usar `async/await` en vez de callbacks cuando sea posible  
✔️ Manejar errores siempre con `try/catch`  
✔️ Evitar callback hell  
✔️ Usar `Promise.all` para tareas paralelas cuando sea necesario

---

### ✨ Tip

Divide tareas en funciones pequeñas y manejables, cada una con su propia promesa.

---

# 📘 🔵 20. FLUJO REAL

---

### 🧠 Concepto

```text
Usuario → petición → espera → respuesta → UI
```

---

### ⚠️ Cosas importantes

- JS no es paralelo, pero maneja async  
- Promesas representan valores futuros  
- `async/await` simplifica la sintaxis  
- `fetch` es clave para consumir APIs

---

### ✨ Resumen

- Callbacks → base de la asincronía  
- Promesas → mejor control del flujo  
- Async/Await → código limpio y legible  
- Fetch → consumir APIs en tiempo real

🚀 Clave para aplicaciones modernas y reales.

---

# 📘 MANEJO AVANZADO DE JAVASCRIPT (NIVEL PRO 🔥)

---

> 🧠 Conceptos clave para entender el funcionamiento interno de JS.  
> 👉 Muy importantes para entrevistas y desarrollo real.

---

# 📘 🟢 1. CLOSURES

---

### 🧠 Qué es

Función que recuerda variables de su **entorno léxico**, aunque la función externa ya haya terminado.

---

### 💡 Ejemplo

```js
function crearContador() {
  let contador = 0;

  return function() {
    contador++;
    return contador;
  };
}

const contar = crearContador();

contar(); // 1
contar(); // 2
```

---

### 👉 Observaciones

✔️ El contador sigue "vivo" gracias al closure  
✔️ Encapsula variables privadas

---

### ✨ Tip

Útil para crear datos privados y funciones con estado sin exponer variables globales.

---

# 📘 🔵 2. ¿CUÁNDO USAR CLOSURES?

---

### ✔️ Casos de uso

- Encapsular datos  
- Crear funciones privadas  
- Mantener estado en funciones  

---

### ✨ Tip

Evita el abuso de closures grandes; pueden generar consumo de memoria si se retienen muchos datos innecesarios.

---

# 📘 🟣 3. HOISTING

---

### 🧠 Qué es

JavaScript **eleva las declaraciones** al inicio de su contexto de ejecución.

---

### 💡 Ejemplo

```js
console.log(x); // undefined
var x = 5;
```

---

### 👉 Observaciones

✔️ Solo las declaraciones (`var`, `function`) se "hoistean"  
✔️ `let` y `const` existen, pero no se inicializan antes de la línea de declaración (Temporal Dead Zone)

---

### ✨ Tip

Evita errores usando `let`/`const` y declarando variables antes de usarlas.

# 📘 🟡 4. HOISTING CON LET Y CONST

---

### 🧠 Qué es

`let` y `const` también se elevan (hoisting), pero **no pueden usarse antes de su declaración**.

👉 Esto se debe a la **Temporal Dead Zone (TDZ)**.

---

### 💡 Ejemplo

```js
console.log(a); // ❌ Error

let a = 10;
```

---

### 👉 Observación

- La variable existe en memoria
- Pero no está inicializada aún

---

### ✨ Tip

Usa siempre `let` y `const` para evitar comportamientos inesperados del hoisting.

---

# 📘 🟠 5. HOISTING EN FUNCIONES

---

### 🧠 Qué es

Las funciones declaradas con `function` se elevan completamente.

---

### 💡 Ejemplo

```js
saludar();

function saludar() {
  console.log('Hola');
}
```

---

### 👉 Resultado

```text
Hola
```

---

### ⚠️ Importante

Las **arrow functions NO se elevan** como funciones completas.

```js
saludar(); // ❌ Error

const saludar = () => {
  console.log('Hola');
};
```

---

### ✨ Tip

Prefiere funciones declaradas si necesitas usarlas antes en el código.

---

# 📘 🔴 6. EVENT LOOP (CONCEPTUAL)

---

### 🧠 Qué es

Sistema interno que permite a JavaScript manejar tareas asíncronas sin bloquear el hilo principal.

---

### ✔️ Componentes

- **Call Stack**
- **Callback Queue**
- **Event Loop**

---

### 👉 Idea clave

```text
JS ejecuta código síncrono primero
Luego procesa tareas asíncronas
```

---

### ✨ Tip

El Event Loop es la razón por la que JS puede manejar múltiples operaciones sin ser multihilo.

---

# 📘 ⚫ 7. EJEMPLO EVENT LOOP

---

### 💡 Ejemplo

```js
console.log('1');

setTimeout(() => {
  console.log('2');
}, 0);

console.log('3');
```

---

### 👉 Resultado

```text
1
3
2
```

---

### 🧠 Explicación

- `1` → síncrono
- `3` → síncrono
- `2` → async (callback queue)

---

### ✨ Tip

Incluso con `0ms`, `setTimeout` siempre se ejecuta después del código síncrono.

---

# 📘 ⚪ 8. ORDEN DE EJECUCIÓN

---

### 🧠 Regla general

👉 Primero se ejecuta el código síncrono  
👉 Después el código asíncrono

---

### 👉 Flujo mental

```text
Síncrono → Call Stack
Asíncrono → Queue
```

---

### ✨ Tip

Si entiendes esto, entiendes el 70% del comportamiento de JavaScript.

---

# 📘 🟤 9. MICROTASKS vs TASKS

---

### 🧠 Qué es

JavaScript prioriza ciertos tipos de tareas.

---

### ✔️ Comparación

| Tipo | Ejemplo | Prioridad |
|------|--------|----------|
| Microtasks | Promises | Alta |
| Tasks | setTimeout | Baja |

---

### 💡 Ejemplo

```js
setTimeout(() => console.log('task'), 0);

Promise.resolve().then(() => console.log('microtask'));
```

---

### 👉 Resultado

```text
microtask
task
```

---

### ✨ Tip

Las Promises siempre se ejecutan antes que los timers.

---

# 📘 🟢 10. THIS (CLAVE 🔥)

---

### 🧠 Qué es

`this` depende de **cómo se llama la función**, no dónde se define.

---

### ✨ Tip

Es uno de los conceptos más confusos de JavaScript.

---

# 📘 🔵 11. THIS EN OBJETOS

---

### 🧠 Qué es

Dentro de un objeto, `this` apunta al propio objeto.

---

### 💡 Ejemplo

```js
const user = {
  nombre: 'Ana',
  saludar() {
    console.log(this.nombre);
  }
};
```

---

### 👉 Resultado

```text
Ana
```

---

### ✨ Tip

En métodos de objetos, `this` suele ser predecible.

---

# 📘 🟣 12. THIS EN FUNCIONES

---

### 🧠 Qué es

En funciones normales, `this` depende del contexto de ejecución.

---

### 💡 Ejemplo

```js
function test() {
  console.log(this);
}
```

---

### 👉 Observación

- En modo estricto → `undefined`
- En navegador → `window`

---

### ✨ Tip

Evita depender de `this` en funciones sueltas si quieres código predecible.

---

# 📘 🟡 13. THIS EN ARROW FUNCTIONS

---

### 🧠 Qué es

Las arrow functions **NO tienen su propio `this`**.

👉 Heredan el `this` del contexto donde fueron creadas.

---

### 💡 Ejemplo

```js
const obj = {
  nombre: 'Ana',
  saludar: () => {
    console.log(this.nombre);
  }
};
```

---

### ⚠️ Resultado

```text
undefined
```

---

### 👉 Explicación

`this` no pertenece al objeto, sino al contexto global.

---

### ✨ Tip

Usa arrow functions para callbacks, pero no para métodos de objetos si necesitas `this`.

---

# ⚠️ COSAS IMPORTANTES

---

🧠 `let` y `const` tienen hoisting pero no acceso antes de declaración.

🧠 Las funciones declaradas sí se elevan completamente.

🧠 El Event Loop maneja la asincronía.

🧠 Síncrono siempre va primero que asíncrono.

🧠 Microtasks (Promises) tienen prioridad sobre Tasks (`setTimeout`).

🧠 `this` depende del contexto de ejecución.

🧠 Arrow functions no tienen `this` propio.

---

# 🎯 MAPA MENTAL

---

```text
JS AVANZADO
│
├── Hoisting
│   ├── var ✔
│   ├── let/const (TDZ)
│   └── function ✔✔
│
├── Event Loop
│   ├── Call Stack
│   ├── Queue
│   └── Microtasks vs Tasks
│
└── this
    ├── objetos
    ├── funciones
    └── arrow functions
```

---

# ✨ RESUMEN FINAL

---

## 🧠 JavaScript avanzado

👉 Controla cómo se ejecuta el código internamente.

👉 Explica comportamiento de variables, funciones y asincronía.

---

## 🚀 Conceptos clave

- Hoisting
- TDZ (let/const)
- Event Loop
- Call Stack
- Microtasks vs Tasks
- this

🔥 Dominar esto te lleva a nivel intermedio/avanzado real en JavaScript.

# 📘 🟠 14. THIS EN EVENTOS

---

### 🧠 Qué es

En eventos del DOM, `this` hace referencia al **elemento que disparó el evento**.

---

### 💡 Ejemplo

```js
btn.addEventListener('click', function() {
  console.log(this); // botón
});
```

---

### 👉 Observación

✔️ `this` apunta al elemento HTML  
✔️ Solo funciona así con funciones normales (no arrow functions)

---

### ✨ Tip

Si usas arrow functions, `this` ya no será el elemento:

```js
btn.addEventListener('click', () => {
  console.log(this); // window o undefined
});
```

---

# 📘 🔴 15. BIND, CALL, APPLY

---

### 🧠 Qué son

Permiten controlar manualmente el valor de `this`.

---

### ✔️ Métodos

| Método | Descripción |
|----------|----------|
| `call()` | Ejecuta función con `this` definido |
| `apply()` | Igual que call, pero con array |
| `bind()` | Devuelve una nueva función con `this` fijo |

---

### 💡 Ejemplo

```js
function saludar() {
  console.log(this.nombre);
}

saludar.call({ nombre: 'Ana' });
```

---

### 👉 Resultado

```text
Ana
```

---

### ✨ Tip

`bind()` es muy útil para eventos y callbacks donde `this` se pierde.

---

# 📘 ⚫ 16. CLOSURE + ASYNC

---

### 🧠 Qué es

Combinación de closures con asincronía.

👉 Uno de los errores más comunes en JavaScript.

---

### 💡 Ejemplo

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

---

### 👉 Resultado

```text
3
3
3
```

---

### 🧠 Explicación

- `var` no crea scope de bloque
- El closure captura la misma variable `i`
- Cuando se ejecuta `setTimeout`, `i` ya vale 3

---

### ✨ Tip

Este error es clásico en entrevistas técnicas.

---

# 📘 ⚪ 17. SOLUCIÓN CON LET

---

### 🧠 Qué cambia

`let` crea un **scope de bloque**, generando una copia de `i` por iteración.

---

### 💡 Ejemplo

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

---

### 👉 Resultado

```text
0
1
2
```

---

### ✨ Tip

Usa siempre `let` en loops con asincronía.

---

# 📘 🟤 18. ERRORES COMUNES

---

### ⚠️ Errores típicos en JS avanzado

- No entender correctamente `this`
- Confundir hoisting con inicialización
- Problemas con closures en loops
- Manejo incorrecto de asincronía

---

### ✨ Tip

La mayoría de bugs en JS no son de sintaxis, sino de **contexto y ejecución**.

---

# 📘 🟢 19. BUENAS PRÁCTICAS

---

✔️ Usar `let` y `const` en lugar de `var`  
✔️ Entender profundamente `this`  
✔️ Dominar closures  
✔️ Manejar async/await correctamente  
✔️ Evitar código difícil de razonar con efectos secundarios

---

### ✨ Tip

El mejor código es el que es fácil de leer, no el más corto.

---

# 📘 🔵 20. NIVEL PRO

---

### 🧠 Qué representa

Estos conceptos son los que diferencian nivel junior de senior.

---

### 👉 Incluye

- Entrevistas técnicas
- Debugging avanzado
- Arquitectura de código
- Optimización de comportamiento JS

---

### ✨ Tip

Si entiendes closures, event loop y this, ya tienes una base sólida de nivel avanzado.

---

# ⚠️ COSAS IMPORTANTES

---

🧠 Closures guardan estado en memoria  
🧠 Hoisting mueve declaraciones al inicio  
🧠 Event Loop maneja asincronía  
🧠 `this` depende del contexto de ejecución  

---

# 🎯 MAPA MENTAL FINAL

---

```text
JS AVANZADO
│
├── this
│   ├── objetos
│   ├── eventos
│   ├── funciones
│   └── bind/call/apply
│
├── Closures
│   ├── estado
│   └── async bugs
│
├── Async + Closures
│   ├── var ❌
│   └── let ✅
│
└── Buenas prácticas
    ├── let/const
    ├── async/await
    └── código limpio
```

---

# ✨ RESUMEN FINAL

---

## 🧠 JavaScript avanzado (nivel pro)

👉 Entender cómo piensa JS internamente.

👉 Controlar ejecución, contexto y asincronía.

---

## 🚀 Conceptos clave

- Closures → memoria de funciones  
- Hoisting → elevación de declaraciones  
- Event Loop → ejecución asíncrona  
- this → contexto dinámico  
- bind/call/apply → control de this  

🔥 Dominando esto, ya estás en nivel profesional real de JavaScript.

# 📘 MÓDULOS EN JAVASCRIPT (ORGANIZACIÓN DE CÓDIGO 🔥)

---

> 🧠 Los módulos permiten dividir el código en archivos reutilizables.

👉 Mejoran la organización, escalabilidad y mantenimiento del proyecto.

---

# 📘 🟢 1. ¿QUÉ ES UN MÓDULO?

---

### 🧠 Qué es

Un módulo es un **archivo JavaScript independiente**.

👉 Puede exportar e importar código entre archivos.

---

### 💡 Ejemplo

```js
// math.js

export const sumar = (a, b) => a + b;
```

---

### 👉 Observación

Cada archivo puede ser un módulo reutilizable.

---

### ✨ Tip

Piensa en módulos como piezas de LEGO: cada una tiene una función específica.

---

# 📘 🔵 2. EXPORT

---

### 🧠 Qué es

Permite compartir funciones, variables o clases entre archivos.

---

### ✔️ Tipos de export

- Export nombrado
- Export default

---

### ✨ Tip

La elección depende de si quieres exportar uno o varios elementos.

---

# 📘 🟣 3. EXPORT NOMBRADO

---

### 🧠 Qué es

Permite exportar múltiples elementos desde un mismo archivo.

---

### 💡 Ejemplo

```js
export const sumar = (a, b) => a + b;
export const restar = (a, b) => a - b;
```

---

### 👉 Observación

Cada export debe importarse con el mismo nombre.

---

### ✨ Tip

Ideal para utilidades (utils) con varias funciones pequeñas.

---

# 📘 🟡 4. IMPORT NOMBRADO

---

### 🧠 Qué es

Permite importar funciones específicas desde un módulo.

---

### 💡 Ejemplo

```js
import { sumar, restar } from './math.js';
```

---

### 👉 Flujo

```text
math.js → export
main.js → import
```

---

### ✨ Tip

Solo importa lo que necesitas, mejora el rendimiento y claridad.

---

# 📘 🟠 5. EXPORT DEFAULT

---

### 🧠 Qué es

Permite exportar un único valor principal por archivo.

---

### 💡 Ejemplo

```js
export default function saludar() {
  console.log('Hola');
}
```

---

### 👉 Observación

Un archivo solo puede tener **un default export**.

---

### ✨ Tip

Útil cuando el archivo representa una sola entidad principal.

---

# 📘 🔴 6. IMPORT DEFAULT

---

### 🧠 Qué es

Permite importar el valor por defecto sin llaves.

---

### 💡 Ejemplo

```js
import saludar from './saludo.js';
```

---

### 👉 Diferencia

```text
Named export → { }
Default export → sin { }
```

---

### ✨ Tip

Puedes nombrarlo como quieras al importarlo.

---

# 📘 ⚫ 7. IMPORTAR TODO

---

### 🧠 Qué es

Permite importar todo el módulo como un objeto.

---

### 💡 Ejemplo

```js
import * as math from './math.js';

math.sumar(2, 3);
```

---

### 👉 Observación

Convierte el módulo en un namespace.

---

### ✨ Tip

Útil cuando quieres agrupar todas las funciones bajo un solo objeto.

---

# 📘 ⚪ 8. RENOMBRAR IMPORTS

---

### 🧠 Qué es

Permite cambiar el nombre de una importación.

---

### 💡 Ejemplo

```js
import { sumar as add } from './math.js';
```

---

### 👉 Uso

```js
add(2, 3);
```

---

### ✨ Tip

Útil para evitar conflictos de nombres.

---

# 📘 🟤 9. ORGANIZACIÓN DE ARCHIVOS

---

### 🧠 Qué es

Estructurar el proyecto en carpetas lógicas.

---

### 💡 Ejemplo

```text
/services
/utils
/components
```

---

### ✔️ Beneficios

- Código más limpio
- Fácil mantenimiento
- Mejor escalabilidad
- Separación de responsabilidades

---

### ✨ Tip

Un buen proyecto empieza con una buena estructura de carpetas.

---

# 📘 🟢 10. VENTAJAS

---

### ✔️ Beneficios de los módulos

- Código reutilizable
- Fácil mantenimiento
- Mejor organización
- Escalabilidad
- Menos duplicación

---

### ✨ Tip

Los módulos son fundamentales en proyectos grandes y frameworks modernos.

---

# 📘 🔵 11. IMPORTACIÓN DINÁMICA

---

### 🧠 Qué es

Permite cargar módulos solo cuando se necesitan.

---

### 💡 Ejemplo

```js
const module = await import('./math.js');
```

---

### 👉 Observación

Es asíncrono y devuelve una promesa.

---

### ✨ Tip

Ideal para optimizar rendimiento (lazy loading).

---

# 📘 🟣 12. USO EN NAVEGADOR

---

### 🧠 Qué es

Para usar módulos en el navegador, debes activar el modo módulo.

---

### 💡 Ejemplo

```html
<script type="module" src="main.js"></script>
```

---

### 👉 Importante

Sin `type="module"`, los imports/exports no funcionan.

---

### ✨ Tip

Los módulos en navegador permiten usar sintaxis moderna sin bundlers en proyectos simples.

---

# ⚠️ COSAS IMPORTANTES

---

🧠 Los módulos dividen el código en partes reutilizables.

🧠 `export` comparte código.

🧠 `import` lo reutiliza.

🧠 Default export = uno por archivo.

🧠 Named export = múltiples elementos.

🧠 `type="module"` es obligatorio en navegador.

---

# 🎯 MAPA MENTAL

---

```text
MÓDULOS
│
├── export
│   ├── named
│   └── default
│
├── import
│   ├── named
│   ├── default
│   ├── *
│   └── as rename
│
├── estructura
│   ├── utils
│   ├── services
│   └── components
│
└── dynamic import
    └── import()
```

---

# ✨ RESUMEN FINAL

---

## 🧠 Módulos en JavaScript

👉 Permiten dividir el código en partes reutilizables.

👉 Mejoran la organización del proyecto.

👉 Son la base del desarrollo moderno en JS.

---

## 🚀 Conceptos clave

- `export`
- `import`
- Named exports
- Default exports
- Dynamic import
- type="module"

🔥 Los módulos son esenciales para cualquier proyecto profesional en JavaScript.

# 📘 🟡 13. EXTENSIONES

---

### 🧠 Qué es

En módulos ES6, es obligatorio especificar la extensión del archivo al importar.

---

### 💡 Ejemplo

```js
import { sumar } from './math.js';
```

---

### 👉 Observación

✔️ El navegador necesita la ruta completa  
✔️ Sin extensión puede fallar según el entorno

---

### ✨ Tip

En Node.js moderno también se recomienda usar `.js` explícitamente para evitar errores de resolución.

---

# 📘 🟠 14. SCOPE DE MÓDULOS

---

### 🧠 Qué es

Cada archivo módulo tiene su **propio scope aislado**.

---

### 👉 Beneficios

- Evita conflictos de variables  
- No contamina el scope global  
- Código más seguro y organizado  

---

### 💡 Ejemplo conceptual

```text
moduleA.js → variables propias
moduleB.js → variables propias
```

---

### ✨ Tip

A diferencia de scripts normales, los módulos no comparten variables globales automáticamente.

---

# 📘 🔴 15. ERRORES COMUNES

---

### ⚠️ Errores frecuentes

- Olvidar `export`
- Rutas incorrectas o mal escritas
- Confundir `default export` con `named export`

---

### 👉 Ejemplo de error típico

```js
import sumar from './math.js'; // ❌ si no es default export
```

---

### ✨ Tip

La mayoría de errores en módulos vienen de rutas o tipos de exportación mal usados.

---

# 📘 ⚫ 16. REEXPORTAR

---

### 🧠 Qué es

Permite exportar elementos desde otro módulo sin reescribirlos.

---

### 💡 Ejemplo

```js
export * from './math.js';
```

---

### 👉 Uso

Se usa para crear archivos “índice” que centralizan exports.

---

### ✨ Tip

Muy útil para organizar librerías o carpetas grandes de utilidades.

---

# 📘 ⚪ 17. BUENAS PRÁCTICAS

---

### ✔️ Recomendaciones

- Un módulo = una responsabilidad
- Nombres claros y descriptivos
- Agrupar lógica relacionada
- Evitar archivos demasiado grandes

---

### ✨ Tip

Si un archivo supera ~200-300 líneas, probablemente debería dividirse.

---

# 📘 🟤 18. ESTRUCTURA REAL

---

### 🧠 Ejemplo típico de proyecto

```text
/api
/helpers
/models
/services
/components
```

---

### 👉 Observación

Cada carpeta representa una capa lógica del sistema.

---

### ✨ Tip

Una buena arquitectura de carpetas es clave para escalar proyectos grandes sin caos.

---

# 📘 🟢 19. DIFERENCIA CON SCRIPT NORMAL

---

### 🧠 Modules vs Scripts

| Característica | Script normal | Module |
|----------------|--------------|--------|
| Scope global   | ✔️ Sí        | ❌ No |
| Strict mode    | ❌ No        | ✔️ Sí |
| import/export   | ❌ No        | ✔️ Sí |

---

### 👉 Observación

Los módulos son más seguros y modernos.

---

### ✨ Tip

Hoy en día casi todo JavaScript moderno usa módulos por defecto.

---

# 📘 🔵 20. CUÁNDO USAR

---

### 🧠 Cuándo usar módulos

✔️ Proyectos grandes  
✔️ Código reutilizable  
✔️ Aplicaciones escalables  
✔️ Arquitecturas organizadas  

---

### 👉 Flujo mental

```text
pequeño script → script normal
proyecto real  → módulos
```

---

### ✨ Tip

Si tu proyecto tiene más de un archivo, probablemente ya necesitas módulos.

---

# ⚠️ COSAS IMPORTANTES

---

🧠 `import/export` conectan archivos entre sí  
🧠 `default export` = uno por archivo  
🧠 `named export` = múltiples  
🧠 Cada módulo tiene scope propio  
🧠 Es la base de aplicaciones escalables  

---

# 🎯 MAPA MENTAL FINAL

---

```text
MÓDULOS JS
│
├── export
│   ├── named
│   └── default
│
├── import
│   ├── named
│   ├── default
│   ├── dynamic
│   └── reexport
│
├── scope
│   └── aislado
│
├── estructura
│   ├── api
│   ├── helpers
│   ├── models
│   └── services
│
└── buenas prácticas
    ├── responsabilidad única
    └── archivos pequeños
```

---

# ✨ RESUMEN FINAL

---

## 🧠 Módulos en JavaScript

👉 Permiten dividir el código en partes independientes.

👉 Mejoran organización, escalabilidad y mantenimiento.

👉 Son estándar en desarrollo moderno.

---

## 🚀 Conceptos clave

- import / export  
- scope aislado  
- reexport  
- estructura modular  
- buenas prácticas  

🔥 Los módulos son la base de cualquier arquitectura profesional en JavaScript.

/# 📘 BUENAS PRÁCTICAS EN JAVASCRIPT (CLEAN CODE 🔥)

---

🧠 Son reglas para escribir código limpio, entendible y mantenible

👉 Marcan la diferencia entre código amateur y profesional

---

# 📘 🟢 1. CLEAN CODE

---

🧠 Código fácil de leer y entender

👉 Debe parecer escrito para humanos, no solo para máquinas

---

💡 Ejemplo:

```js
// ❌ Malo
let x = 10;

// ✅ Bueno
let edadUsuario = 10;
```

---

# 📘 🔵 2. DRY (DON'T REPEAT YOURSELF)

---

🧠 No repetir código innecesariamente

---

💡 Ejemplo:

```js
// ❌ Malo
function saludar1() { console.log('Hola Ana'); }
function saludar2() { console.log('Hola Luis'); }

// ✅ Bueno
function saludar(nombre) {
  console.log('Hola ' + nombre);
}
```

---

# 📘 🟣 3. NOMBRADO DE VARIABLES

---

🧠 Nombres claros y descriptivos

👉 Evitar nombres genéricos

---

💡 Ejemplo:

```js
// ❌ Malo
let a = 5;

// ✅ Bueno
let totalProductos = 5;
```

---

# 📘 🟡 4. FUNCIONES PEQUEÑAS

---

🧠 Una función = una responsabilidad

---

💡 Ejemplo:

```js
// ❌ Malo
function procesarTodo() {}

// ✅ Bueno
function validar() {}
function guardar() {}
```

---

# 📘 🟠 5. EVITAR CÓDIGO MUERTO

---

🧠 Código que no se usa

👉 Eliminarlo

---

# 📘 🔴 6. CONSISTENCIA

---

🧠 Mantener estilo uniforme

👉 Ejemplo:
camelCase en variables

---

# 📘 ⚫ 7. COMENTARIOS

---

🧠 Solo cuando aportan valor

👉 No explicar lo obvio

---

# 📘 ⚪ 8. ESTRUCTURA DE PROYECTO

---

🧠 Organizar archivos correctamente

---

💡 Ejemplo:

```text
/components
/services
/utils
/models
```

---

# 📘 🟤 9. SEPARACIÓN DE RESPONSABILIDADES

---

🧠 Cada archivo hace una cosa

---

# 📘 🟢 10. EVITAR FUNCIONES LARGAS

---

🧠 Mejor dividir lógica

---

# 📘 🔵 11. USAR CONST Y LET

---

🧠 Evitar var

---

# 📘 🟣 12. EVITAR SIDE EFFECTS

---

🧠 Funciones puras

---

💡 Ejemplo:

```js
function sumar(a, b) {
  return a + b;
}
```

# 📘 🟡 13. VALIDACIONES

---

🧠 Validar datos siempre

---

# 📘 🟠 14. MANEJO DE ERRORES

---

🧠 Usar try/catch

---

# 📘 🔴 15. USO DE MÓDULOS

---

🧠 Separar código en archivos

---

# 📘 ⚫ 16. REUTILIZACIÓN

---

🧠 Crear funciones reutilizables

---

# 📘 ⚪ 17. LEGIBILIDAD > COMPLEJIDAD

---

🧠 Código simple es mejor

---

# 📘 🟤 18. EVITAR ANIDACIONES PROFUNDAS

---

🧠 Código difícil de leer

---

# 📘 🟢 19. EJEMPLO REAL

---

💡 Malo:

```js id="n8v9kl"
if (a) {
  if (b) {
    if (c) {}
  }
}
```

---

💡 Bueno:

```js id="m3x1pq"
if (!a || !b || !c) return;
```

---

# 📘 🔵 20. MENTALIDAD PRO

---

🧠 Escribir código para otros devs

---

# ⚠️ COSAS IMPORTANTES

---

🧠 Código limpio = fácil de mantener  
🧠 DRY evita duplicación  
🧠 Naming es clave  
🧠 Estructura mejora escalabilidad  

---

# ✨ RESUMEN

---

🧠 Buenas prácticas:

👉 Clean code → legibilidad  
👉 DRY → no repetir  
👉 Naming → claridad  
👉 Estructura → orden  

🚀 NIVEL PRO en desarrollo

---

# 📘 HERRAMIENTAS MODERNAS EN JAVASCRIPT (ECOSISTEMA 🔥)

---

🧠 Son herramientas que facilitan el desarrollo moderno

👉 Automatizan tareas, organizan código y mejoran productividad

---

# 📘 🟢 1. NPM (NODE PACKAGE MANAGER)

---

🧠 Gestor de paquetes de Node.js

👉 Permite instalar librerías externas

---

💡 Ejemplo:

```bash
npm init -y
npm install axios
```

---

👉 Genera el archivo `package.json`

---

# 📘 🔵 2. PACKAGE.JSON

---

🧠 Archivo principal del proyecto

---

👉 Contiene:

- dependencias  
- scripts  
- configuración  

---

💡 Ejemplo:

```json
{
  "scripts": {
    "start": "node index.js"
  }
}
```

---

# 📘 🟣 3. INSTALAR DEPENDENCIAS

---

🧠 Librerías externas que se agregan al proyecto

---

💡 Ejemplo:

```bash
npm install lodash
```

---

# 📘 🟡 4. DEPENDENCIAS DEV

---

🧠 Dependencias solo para desarrollo

---

💡 Ejemplo:

```bash
npm install eslint --save-dev
```

# 📘 🟠 5. YARN

---

🧠 Alternativa a npm

👉 Más rápido en algunos casos

---

💡 Ejemplo:

```bash id="yarn1"
yarn add axios
```

---

# 📘 🔴 6. DIFERENCIA NPM vs YARN

---

🧠 Ambos hacen lo mismo

👉 npm → más usado  
👉 yarn → más rápido (antes)

---

# 📘 ⚫ 7. SCRIPTS

---

🧠 Automatizar tareas

---

💡 Ejemplo:

```json id="scripts1"
"scripts": {
  "dev": "vite",
  "build": "vite build"
}
```

---

# 📘 ⚪ 8. VITE

---

🧠 Herramienta moderna de desarrollo

👉 Levanta servidor rápido

---

💡 Ejemplo:

```bash id="vite1"
npm create vite@latest
```

---

# 📘 🟤 9. WEBPACK (BÁSICO)

---

🧠 Bundler (empaqueta código)

👉 Une archivos JS, CSS, etc.

---

# 📘 🟢 10. ¿QUÉ ES UN BUNDLER?

---

🧠 Junta todo en un solo archivo

👉 Optimiza rendimiento

---

# 📘 🔵 11. DIFERENCIA VITE vs WEBPACK

---

👉 Vite → rápido, moderno  
👉 Webpack → más complejo, tradicional

---

# 📘 🟣 12. ESLINT

---

🧠 Detecta errores y malas prácticas

---

💡 Ejemplo:

```bash id="eslint1"
npx eslint .
```

---

# 📘 🟡 13. PRETTIER

---

🧠 Formatea código automáticamente

---

💡 Ejemplo:

```bash id="prettier1"
npx prettier --write .
```

---

# 📘 🟠 14. ESLINT + PRETTIER

---

🧠 Combinación ideal

👉 ESLint → reglas  
👉 Prettier → formato

---

# 📘 🔴 15. CONFIGURACIÓN BÁSICA

---

💡 Ejemplo:

```
.eslintrc
.prettierrc
```

---

# 📘 ⚫ 16. NODE_MODULES

---

🧠 Carpeta de dependencias

👉 Se genera automáticamente

---

# 📘 ⚪ 17. PACKAGE-LOCK / YARN LOCK

---

🧠 Bloquean versiones de las dependencias

---

# 📘 🟤 18. ENTORNO REAL

---

🧠 Flujo típico

👉 npm install → dev → build

# 📘 🟢 19. BUENAS PRÁCTICAS

---

👉 No subir `node_modules`  
👉 Usar scripts  
👉 Configurar ESLint  
👉 Formatear con Prettier  

---

# 📘 🔵 20. NIVEL PRO

---

🧠 Estas herramientas son estándar en la industria

---

# ⚠️ COSAS IMPORTANTES

---

🧠 npm/yarn gestionan paquetes  
🧠 vite/webpack construyen apps  
🧠 eslint detecta errores  
🧠 prettier formatea código  

---

# ✨ RESUMEN

---

🧠 Herramientas modernas:

👉 npm / yarn → dependencias  
👉 vite / webpack → build  
👉 eslint / prettier → calidad  

🚀 BASE del desarrollo moderno

---

# 📘 TESTING EN JAVASCRIPT (NIVEL PRO 🔥)

---

> 🧠 Permite verificar que tu código funciona correctamente  
👉 Evita errores y mejora la calidad del software

---

# 📘 🟢 1. ¿QUÉ ES TESTING?

---

🧠 Probar el código automáticamente

👉 Validar que hace lo que debe

---

# 📘 🔵 2. UNIT TESTING

---

🧠 Pruebas de unidades pequeñas

👉 Se prueba una función o parte específica

---

💡 Ejemplo:

```js id="test1"
function sumar(a, b) {
  return a + b;
}
```

---

👉 Se prueba solo esa función

---

# 📘 🟣 3. ¿POR QUÉ USAR TESTING?

---

👉 Detectar errores  
👉 Evitar bugs en producción  
👉 Facilitar cambios  
👉 Código más confiable  

---

# 📘 🟡 4. TIPOS DE TEST

---

🧠 Principales:

👉 Unit → funciones pequeñas  
👉 Integration → varias partes  
👉 E2E → flujo completo  

---

# 📘 🟠 5. JEST (¿QUÉ ES?)

---

🧠 Framework de testing para JavaScript

👉 Muy usado en React, Node.js, etc.

---

# 📘 🔴 6. INSTALAR JEST

---

💡 Ejemplo:

```bash id="jest1"
npm install jest --save-dev
```

---

# 📘 ⚫ 7. PRIMER TEST

---

🧠 Estructura básica

---

💡 Ejemplo:

```js id="test2"
test('suma correctamente', () => {
  expect(1 + 2).toBe(3);
});
```

---

# 📘 ⚪ 8. EXPECT

---

🧠 Validación del resultado

👉 Compara valor esperado vs real

---

# 📘 🟤 9. MATCHERS

---

🧠 Métodos de comparación

---

💡 Ejemplo:

```js id="test3"
expect(2 + 2).toBe(4);
expect(true).toBeTruthy();
expect([1,2,3]).toContain(3);
```

---

👉 Matchers permiten validar distintos tipos de resultados

# 📘 🟢 10. TESTEAR FUNCIONES

---

💡 Ejemplo:

```js id="tfn1"
function sumar(a, b) {
  return a + b;
}

test('suma 2 + 3', () => {
  expect(sumar(2, 3)).toBe(5);
});
```

---

# 📘 🔵 11. BEFORE / AFTER

---

🧠 Preparar y limpiar el entorno de pruebas

---

💡 Ejemplo:

```js id="setup1"
beforeEach(() => {
  // setup antes de cada test
});

afterEach(() => {
  // cleanup después de cada test
});
```

---

# 📘 🟣 12. TEST ASÍNCRONOS

---

🧠 Permite probar código async

---

💡 Ejemplo:

```js id="async1"
test('fetch data', async () => {
  const data = await getData();
  expect(data).toBeDefined();
});
```

---

# 📘 🟡 13. MOCKS

---

🧠 Simulan funciones, APIs o dependencias externas

---

💡 Ejemplo:

```js id="mock1"
jest.fn();
```

---

# 📘 🟠 14. SNAPSHOTS

---

🧠 Guardan el estado de salida (muy usado en UI testing)

👉 Detectan cambios inesperados en componentes

---

# 📘 🔴 15. COVERAGE

---

🧠 Mide cuánto código está testeado

---

💡 Ejemplo:

```bash id="cov1"
npm run test -- --coverage
```

---

👉 Genera reporte de cobertura de tests

---

# 📘 ⚫ 16. ESTRUCTURA

---

🧠 Organización de archivos de testing

---

👉 Convenciones comunes:

```text id="struct1"
nombre.test.js
__tests__/
```

---

# 📘 ⚪ 17. BUENAS PRÁCTICAS

---

✔️ Tests simples  
✔️ Un test = una sola cosa  
✔️ Nombres claros  
✔️ Evitar dependencias externas  

---

# 📘 🟤 18. ERRORES COMUNES

---

👉 Tests demasiado complejos  
👉 No probar errores  
👉 Ignorar código asíncrono  

---

# 📘 🟢 19. CUÁNDO TESTEAR

---

🧠 Priorizar lo importante

---

👉 Lógica crítica  
👉 Funciones importantes  
👉 APIs  

---

# 📘 🔵 20. NIVEL PRO

---

🧠 El testing es estándar obligatorio en equipos profesionales

---

# ⚠️ COSAS IMPORTANTES

---

🧠 Testing valida comportamiento del código  
🧠 Unit testing = funciones pequeñas  
🧠 Jest es el framework más usado  
🧠 `expect` compara resultados  

---

# ✨ RESUMEN

---

🧠 Testing en JS:

👉 Unit testing → funciones  
👉 Jest → framework  
👉 expect → validaciones  
👉 async → también se prueba  

🚀 CLAVE del desarrollo profesional