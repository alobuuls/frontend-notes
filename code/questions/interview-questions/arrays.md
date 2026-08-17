# 🔥 6. ARRAYS

## 📑 ÍNDICE
- [🔥 6. ARRAYS](#-6-arrays)
  - [📑 ÍNDICE](#-índice)
  - [❓ 1. ¿QUÉ DIFERENCIA HAY ENTRE `map()` Y `forEach()`?](#-1-qué-diferencia-hay-entre-map-y-foreach)
    - [🧠 Respuesta corta de entrevista](#-respuesta-corta-de-entrevista)
    - [📌 Regla fácil](#-regla-fácil)
    - [🎯 En entrevista](#-en-entrevista)
- [❓ 2. ¿QUÉ DIFERENCIA HAY ENTRE `map()` Y `filter()`?](#-2-qué-diferencia-hay-entre-map-y-filter)
    - [📌 Regla fácil](#-regla-fácil-1)
- [❓ 3. ¿QUÉ HACE `reduce()`?](#-3-qué-hace-reduce)
    - [🎯 En entrevista](#-en-entrevista-1)
- [❓ 4. ¿QUÉ HACE `find()`?](#-4-qué-hace-find)
    - [📌 Importante](#-importante)
- [❓ 5. ¿QUÉ DIFERENCIA HAY ENTRE `find()` Y `filter()`?](#-5-qué-diferencia-hay-entre-find-y-filter)
    - [`find()`](#find)
    - [`filter()`](#filter)
    - [📌 Regla fácil](#-regla-fácil-2)
- [❓ 6. ¿QUÉ HACE `some()`?](#-6-qué-hace-some)
    - [📌 Piensa:](#-piensa)
- [❓ 7. ¿QUÉ HACE `every()`?](#-7-qué-hace-every)
    - [📌 Regla fácil](#-regla-fácil-3)
- [❓ 8. ¿QUÉ DIFERENCIA HAY ENTRE `includes()` E `indexOf()`?](#-8-qué-diferencia-hay-entre-includes-e-indexof)
    - [`includes()`](#includes)
    - [`indexOf()`](#indexof)
    - [📌 Entonces:](#-entonces)
- [❓ 9. ¿QUÉ HACE `Array.from()`?](#-9-qué-hace-arrayfrom)
    - [🎯 En entrevista](#-en-entrevista-2)
- [❓ 10. ¿QUÉ DIFERENCIA HAY ENTRE `for...in` Y `for...of`?](#-10-qué-diferencia-hay-entre-forin-y-forof)
    - [`for...in`](#forin)
    - [`for...of`](#forof)
    - [📌 Regla](#-regla)
  - [❓ 11. ¿CUÁNDO UTILIZARÍAS `for`, `for...of`, `forEach`, `map` O `reduce`?](#-11-cuándo-utilizarías-for-forof-foreach-map-o-reduce)
    - [🔹 `for`](#-for)
    - [🔹 `for...of`](#-forof)
    - [🔹 `forEach()`](#-foreach)
    - [🔹 `map()`](#-map)
    - [🔹 `reduce()`](#-reduce)
    - [🧠 Tabla mental](#-tabla-mental)
    - [🎯 Respuesta de entrevista](#-respuesta-de-entrevista)
  - [❓ 12. ¿CÓMO ELIMINARÍAS DUPLICADOS DE UN ARRAY?](#-12-cómo-eliminarías-duplicados-de-un-array)
    - [🎯 En entrevista](#-en-entrevista-3)
  - [❓ 13. ¿CÓMO ORDENARÍAS UN ARRAY?](#-13-cómo-ordenarías-un-array)
    - [⚠️ Pregunta trampa](#️-pregunta-trampa)
    - [🚨 Otra trampa clásica](#-otra-trampa-clásica)
  - [❓ 14. ¿CÓMO COPIARÍAS UN ARRAY SIN MODIFICAR EL ORIGINAL?](#-14-cómo-copiarías-un-array-sin-modificar-el-original)
    - [🎯 En entrevista](#-en-entrevista-4)
- [🧠 🔥 RESUMEN PARA MEMORIZAR](#--resumen-para-memorizar)
  - [🧠 Y LA REGLA DE ORO](#-y-la-regla-de-oro)

## ❓ 1. ¿QUÉ DIFERENCIA HAY ENTRE `map()` Y `forEach()`?

### 🧠 Respuesta corta de entrevista

`map()` transforma cada elemento y **devuelve un nuevo array**, mientras que `forEach()` simplemente recorre los elementos y **no devuelve un nuevo array**.

```ts
const numbers = [1, 2, 3];

const doubled = numbers.map(n => n * 2);

console.log(doubled);
// [2, 4, 6]
```

Con `forEach()`:

```ts
numbers.forEach(n => {
  console.log(n * 2);
});
```

`forEach()` devuelve `undefined`.

### 📌 Regla fácil

```text
map()    → transformar → devuelve array
forEach() → ejecutar algo → no devuelve array
```

### 🎯 En entrevista

> "Usaría `map()` cuando necesito transformar los elementos y obtener un nuevo array. Usaría `forEach()` cuando simplemente necesito ejecutar una acción por cada elemento."

---

# ❓ 2. ¿QUÉ DIFERENCIA HAY ENTRE `map()` Y `filter()`?

`map()` **transforma** todos los elementos.

`filter()` **selecciona** los elementos que cumplen una condición.

```ts
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8, 10]

const even = numbers.filter(n => n % 2 === 0);
// [2, 4]
```

### 📌 Regla fácil

```text
map()    → ¿Cómo transformo cada elemento?
filter() → ¿Qué elementos quiero conservar?
```

Una diferencia importante:

* `map()` normalmente devuelve un array con **la misma cantidad de elementos**.
* `filter()` puede devolver un array con **menos elementos**.

---

# ❓ 3. ¿QUÉ HACE `reduce()`?

`reduce()` permite **recorrer un array y acumular sus valores para producir un resultado final**.

Por ejemplo, sumar números:

```ts
const numbers = [1, 2, 3, 4];

const total = numbers.reduce((acc, number) => {
  return acc + number;
}, 0);

console.log(total);
// 10
```

Aquí:

```text
acc     → acumulador
number  → elemento actual
0       → valor inicial
```

También puedes usar `reduce()` para crear otros resultados:

```ts
const numbers = [1, 2, 3];

const result = numbers.reduce((acc, n) => acc * n, 1);

// 6
```

### 🎯 En entrevista

> "`reduce()` se utiliza cuando quiero recorrer un array y convertir todos sus elementos en un único resultado, como una suma, un objeto, otro array o cualquier estructura acumulada."

---

# ❓ 4. ¿QUÉ HACE `find()`?

`find()` devuelve **el primer elemento** que cumple una condición.

```ts
const users = [
  { id: 1, name: 'Ana' },
  { id: 2, name: 'Luis' },
  { id: 3, name: 'Carlos' }
];

const user = users.find(user => user.id === 2);

console.log(user);
// { id: 2, name: 'Luis' }
```

Si no encuentra ninguno:

```ts
const user = users.find(user => user.id === 10);

console.log(user);
// undefined
```

### 📌 Importante

`find()` devuelve:

```text
elemento → encontrado
undefined → no encontrado
```

---

# ❓ 5. ¿QUÉ DIFERENCIA HAY ENTRE `find()` Y `filter()`?

La diferencia principal es **qué devuelven**.

### `find()`

Devuelve **el primer elemento** que cumple la condición.

```ts
const user = users.find(user => user.id === 2);
```

Resultado:

```ts
{ id: 2, name: 'Luis' }
```

### `filter()`

Devuelve **todos los elementos** que cumplen la condición.

```ts
const users = [
  { id: 1, age: 20 },
  { id: 2, age: 30 },
  { id: 3, age: 30 }
];

const result = users.filter(user => user.age === 30);
```

Resultado:

```ts
[
  { id: 2, age: 30 },
  { id: 3, age: 30 }
]
```

### 📌 Regla fácil

```text
find()   → dame EL PRIMERO
filter() → dame TODOS
```

---

# ❓ 6. ¿QUÉ HACE `some()`?

`some()` verifica si **al menos un elemento** cumple una condición.

Devuelve un booleano:

```ts
const numbers = [1, 3, 5, 8];

const hasEven = numbers.some(n => n % 2 === 0);

console.log(hasEven);
// true
```

Porque `8` es par.

Si ninguno cumple:

```ts
const numbers = [1, 3, 5];

const hasEven = numbers.some(n => n % 2 === 0);

console.log(hasEven);
// false
```

### 📌 Piensa:

> **"¿Existe AL MENOS UNO?"**

---

# ❓ 7. ¿QUÉ HACE `every()`?

`every()` verifica si **todos los elementos** cumplen una condición.

```ts
const numbers = [2, 4, 6, 8];

const allEven = numbers.every(n => n % 2 === 0);

console.log(allEven);
// true
```

Pero:

```ts
const numbers = [2, 4, 7, 8];

const allEven = numbers.every(n => n % 2 === 0);

console.log(allEven);
// false
```

### 📌 Regla fácil

```text
some()  → ¿AL MENOS UNO?
every() → ¿TODOS?
```

---

# ❓ 8. ¿QUÉ DIFERENCIA HAY ENTRE `includes()` E `indexOf()`?

Ambos pueden utilizarse para comprobar si un valor existe en un array.

### `includes()`

Devuelve directamente un booleano:

```ts
const fruits = ['apple', 'banana', 'orange'];

fruits.includes('banana');
// true
```

### `indexOf()`

Devuelve la posición del elemento.

```ts
fruits.indexOf('banana');
// 1
```

Si no existe:

```ts
fruits.indexOf('grape');
// -1
```

### 📌 Entonces:

```text
includes() → true / false
indexOf()  → índice / -1
```

Por eso, si solamente quieres saber si existe:

```ts
fruits.includes('banana');
```

es normalmente más claro que:

```ts
fruits.indexOf('banana') !== -1;
```

---

# ❓ 9. ¿QUÉ HACE `Array.from()`?

`Array.from()` permite crear un **array a partir de un iterable o un objeto array-like**.

Por ejemplo, convertir un `Set`:

```ts
const set = new Set([1, 2, 3]);

const array = Array.from(set);

console.log(array);
// [1, 2, 3]
```

También puede convertir un `NodeList`:

```ts
const elements = document.querySelectorAll('div');

const array = Array.from(elements);
```

Y tiene un segundo argumento que permite transformar los elementos:

```ts
const numbers = Array.from([1, 2, 3], n => n * 2);

console.log(numbers);
// [2, 4, 6]
```

### 🎯 En entrevista

> "`Array.from()` sirve para convertir iterables u objetos array-like en un array real."

---

# ❓ 10. ¿QUÉ DIFERENCIA HAY ENTRE `for...in` Y `for...of`?

Esta es **muy importante**.

### `for...in`

Itera sobre las **claves o índices**.

```ts
const fruits = ['apple', 'banana', 'orange'];

for (const index in fruits) {
  console.log(index);
}
```

Resultado:

```text
0
1
2
```

### `for...of`

Itera sobre los **valores**.

```ts
for (const fruit of fruits) {
  console.log(fruit);
}
```

Resultado:

```text
apple
banana
orange
```

### 📌 Regla

```text
for...in → claves / índices
for...of → valores
```

⚠️ Para arrays normalmente prefieres `for...of` si necesitas recorrer valores.

---

## ❓ 11. ¿CUÁNDO UTILIZARÍAS `for`, `for...of`, `forEach`, `map` O `reduce`?

Esta es una pregunta excelente porque evalúa si sabes **elegir la herramienta adecuada**, no simplemente memorizar métodos.

### 🔹 `for`

Cuando necesitas máximo control sobre el loop.

```ts
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 5) {
    break;
  }
}
```

Puedes utilizar:

```text
break
continue
índice
```

### 🔹 `for...of`

Cuando quieres recorrer los **valores** de un iterable de forma sencilla.

```ts
for (const number of numbers) {
  console.log(number);
}
```

### 🔹 `forEach()`

Cuando quieres ejecutar una acción por cada elemento y **no necesitas generar un nuevo array**.

```ts
users.forEach(user => {
  console.log(user.name);
});
```

### 🔹 `map()`

Cuando quieres **transformar cada elemento**.

```ts
const names = users.map(user => user.name);
```

### 🔹 `reduce()`

Cuando quieres **acumular elementos para producir un resultado final**.

```ts
const total = numbers.reduce((sum, n) => sum + n, 0);
```

### 🧠 Tabla mental

| Método      | Uso principal          |
| ----------- | ---------------------- |
| `for`       | Control total del loop |
| `for...of`  | Recorrer valores       |
| `forEach()` | Ejecutar una acción    |
| `map()`     | Transformar            |
| `reduce()`  | Acumular               |

### 🎯 Respuesta de entrevista

> "Depende de la intención. Uso `map` para transformar, `reduce` para acumular, `forEach` para ejecutar una acción sin generar un nuevo array, `for...of` para recorrer valores y `for` cuando necesito mayor control del flujo, como usar `break`, `continue` o manejar índices."

---

## ❓ 12. ¿CÓMO ELIMINARÍAS DUPLICADOS DE UN ARRAY?

La forma más sencilla es utilizar `Set`.

```ts
const numbers = [1, 2, 2, 3, 3, 4];

const uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers);
// [1, 2, 3, 4]
```

También:

```ts
const uniqueNumbers = Array.from(new Set(numbers));
```

### 🎯 En entrevista

> "Para eliminar duplicados de un array de valores primitivos usaría un `Set`, porque solamente permite valores únicos."

> ⚠️ **Con objetos es diferente:**

```ts
const users = [
  { id: 1, name: 'Ana' },
  { id: 1, name: 'Ana' }
];
```

`Set` no elimina automáticamente objetos "duplicados" por contenido, porque son referencias diferentes.

---

## ❓ 13. ¿CÓMO ORDENARÍAS UN ARRAY?

Utilizaría `sort()`.

```ts
const numbers = [3, 1, 5, 2, 4];

numbers.sort((a, b) => a - b);

console.log(numbers);
// [1, 2, 3, 4, 5]
```

Para descendente:

```ts
numbers.sort((a, b) => b - a);
```

### ⚠️ Pregunta trampa

`sort()` **modifica el array original**.

Por eso, si quieres conservarlo:

```ts
const sortedNumbers = [...numbers].sort((a, b) => a - b);
```

O:

```ts
const sortedNumbers = numbers.toSorted((a, b) => a - b);
```

`toSorted()` devuelve un nuevo array y no modifica el original.

### 🚨 Otra trampa clásica

Esto:

```ts
[10, 2, 5, 1].sort();
```

puede producir:

```ts
[1, 10, 2, 5]
```

porque el ordenamiento por defecto compara valores como strings.

Por eso para números:

```ts
numbers.sort((a, b) => a - b);
```

---

## ❓ 14. ¿CÓMO COPIARÍAS UN ARRAY SIN MODIFICAR EL ORIGINAL?

Puedes utilizar spread:

```ts
const original = [1, 2, 3];

const copy = [...original];
```

También:

```ts
const copy = Array.from(original);
```

o:

```ts
const copy = original.slice();
```

> ⚠️ **Pero cuidado con arrays de objetos**

Esto:

```ts
const original = [
  { name: 'Ana' }
];

const copy = [...original];
```

crea una **copia superficial (shallow copy)**.

El array es nuevo, pero los objetos internos siguen siendo las mismas referencias.

```ts
copy[0].name = 'Luis';

console.log(original[0].name);
// Luis
```

Para una copia profunda puedes utilizar, dependiendo del caso:

```ts
const copy = structuredClone(original);
```

### 🎯 En entrevista

> "Para un array simple puedo usar spread, `slice` o `Array.from`. Pero hay que tener en cuenta que son copias superficiales. Si el array contiene objetos y necesito clonar también sus estructuras internas, puedo utilizar `structuredClone()`."

---

# 🧠 🔥 RESUMEN PARA MEMORIZAR

Esta parte te conviene tenerla **muy clara**, porque varias preguntas se relacionan entre sí:

| Método / concepto | Función                                | Resultado                     |
| ----------------- | -------------------------------------- | ----------------------------- |
| `map()`           | transforma elementos                   | nuevo array                   |
| `filter()`        | selecciona elementos                   | nuevo array                   |
| `find()`          | encuentra el PRIMER elemento           | elemento o `undefined`        |
| `some()`          | ¿AL MENOS UNO cumple?                  | boolean                       |
| `every()`         | ¿TODOS cumplen?                        | boolean                       |
| `forEach()`       | ejecuta una acción                     | no devuelve un nuevo array    |
| `reduce()`        | acumula                                | resultado final               |
| `includes()`      | ¿existe?                               | boolean                       |
| `indexOf()`       | ¿dónde está?                           | índice o `-1`                 |
| `Array.from()`    | convierte iterable/array-like en array | array                         |
| `for...in`        | claves / índices                       | —                             |
| `for...of`        | valores                                | —                             |
| `Set`             | valores únicos                         | —                             |
| `sort()`          | ordena                                 | cuidado: modifica el original |
| `[...array]`      | copia superficial                      | —                             |

## 🧠 Y LA REGLA DE ORO

Cuando te den un ejercicio de arrays en una entrevista, primero piensa:

| Pregunta                                       | Método      |
| ---------------------------------------------- | ----------- |
| ¿Quiero **TRANSFORMAR**?                       | `map()`     |
| ¿Quiero **FILTRAR**?                           | `filter()`  |
| ¿Quiero **ENCONTRAR UNO**?                     | `find()`    |
| ¿Quiero **SABER SI EXISTE ALGUNO**?            | `some()`    |
| ¿Quiero **SABER SI TODOS CUMPLEN**?            | `every()`   |
| ¿Quiero **RECORRER Y HACER ALGO**?             | `forEach()` |
| ¿Quiero **ACUMULAR / CONSTRUIR UN RESULTADO**? | `reduce()`  |

🔥 **Estas siete (`map`, `filter`, `find`, `some`, `every`, `forEach`, `reduce`) son de las más importantes para entrevistas frontend.**
