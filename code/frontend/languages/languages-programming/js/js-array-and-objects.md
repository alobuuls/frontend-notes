# 📘 CRUD (CREATE, READ, UPDATE, DELETE)

## 🧠 CRUD es una forma de trabajar con datos:

crear, leer, actualizar y eliminar.

👉 Se usa mucho en arrays, objetos, bases de datos y APIs.

---

# 📗 CREATE (CREAR) ➕

## 🧠 Agregar nuevos datos.

---

## 🧪 ARRAY

```js
let frutas = ['manzana'];
frutas.push('pera');
// ["manzana", "pera"]
```

---

## 🧪 OBJECT

```js
let user = {};
user.nombre = 'Ana';
```

---

# 📗 READ (LEER) 👀

## 🧠 Obtener datos.

---

## 🧪 ARRAY

```js
let frutas = ['manzana', 'pera'];
console.log(frutas[0]);
// "manzana"
```

---

## 🧪 OBJECT

```js
let user = { nombre: 'Ana' };
console.log(user.nombre);
// "Ana"
```

---

# 📗 UPDATE (ACTUALIZAR) ✏️

## 🧠 Modificar datos existentes.

---

## 🧪 ARRAY

```js
let frutas = ['manzana', 'pera'];
frutas[0] = 'banana';
// ["banana", "pera"]
```

---

## 🧪 OBJECT

```js
let user = { nombre: 'Ana' };
user.nombre = 'Luisa';
```

---

# 📗 DELETE (ELIMINAR) ❌

## 🧠 Eliminar datos.

---

## 🧪 ARRAY

```js
let frutas = ['manzana', 'pera'];
frutas.splice(0, 1);
// ["pera"]
```

---

## 🧪 OBJECT

```js
let user = { nombre: 'Ana' };
delete user.nombre;
```

---

# 📘 ARRAYS

## 🧠 Estructura de datos que almacena múltiples valores.

---

## 🧪 Ejemplo

```js
let numeros = [1, 2, 3, 4];
```

---

# 📗 Métodos comunes

| Método      | Descripción        |
| ----------- | ------------------ |
| `push()`    | agrega al final    |
| `pop()`     | elimina el último  |
| `shift()`   | elimina el primero |
| `unshift()` | agrega al inicio   |
| `map()`     | transforma         |
| `filter()`  | filtra             |
| `find()`    | encuentra uno      |
| `forEach()` | recorre            |

---

# 📘 OBJECTS

## 🧠 Estructura que guarda datos en pares clave:valor.

---

## 🧪 Ejemplo

```js
let user = {
  nombre: 'Ana',
  edad: 20,
};
```

---

# 📗 Acceder a propiedades

```js
user.nombre;
user['edad'];
```

---

# 📗 Modificar

```js
user.nombre = 'Luisa';
```

---

# 📗 Eliminar

```js
delete user.edad;
```

---

# 📗 REGLA RÁPIDA 🧠

👉 Arrays → listas de cosas

👉 Objects → información con nombre

👉 CRUD → forma de manipular datos (crear, leer, actualizar, borrar)

---

# 📘 ARRAYS EN JAVASCRIPT

## 🧠 Un array es una estructura de datos que permite guardar múltiples valores en una sola variable.

---

# 📗 CREAR UN ARRAY

```js
let randomNumbers = [2026, 10, 43, 90, 15, 100, 90];
```

## 🧠 Crea un array con números.

---

# 📗 OBTENER LA CANTIDAD DE ELEMENTOS

```js
randomNumbers.length;
```

## 🧠 Devuelve la cantidad de elementos dentro del array.

---

# 📗 OBTENER EL ÚLTIMO ELEMENTO

```js
randomNumbers[randomNumbers.length - 1];
```

## 🧠 Accede al último elemento del array.

---

# 📗 OBTENER EL PRIMER ELEMENTO

```js
randomNumbers[0];
```

## 🧠 Accede al primer elemento del array.

---

# 📗 LIMPIAR UN ARRAY (VACÍARLO)

```js
randomNumbers = [];
```

## 🧠 Reemplaza el array por uno vacío.

---

# 📗 LIMPIAR UN ARRAY (MÉTODO MÁS COMÚN)

```js
randomNumbers.length = 0;
```

## 🧠 Elimina TODOS los elementos del array sin crear uno nuevo.

---

# 📗 ACCEDER A ELEMENTOS

```js
randomNumbers[index];
```

## 🧠 Los arrays empiezan en índice 0:

- 0 → primer elemento
- 1 → segundo elemento
- etc.

---

# 📗 REGLA RÁPIDA 🧠

👉 `length` → cantidad de elementos

👉 `[0]` → primer elemento

👉 `[length - 1]` → último elemento

👉 `[]` → acceso por posición

👉 `length = 0` → vaciar array

---

# 📘 ARRAY METHODS (MÉTODOS DE ARRAYS)

## 🧠 Son funciones que sirven para recorrer, buscar, filtrar y transformar los datos dentro de un array.

```js
let numeros = [1, 2, 3, 4, 5];
```

---

# 📗 map() → [] 🔒 map NO mezcla los valores entre sí cada elemento se transforma de forma independiente

## 🧠 Recorre el array y crea uno NUEVO con los valores transformados.

---

## 🧪 Ejemplo

```js
numeros.map((n) => n * 2);
// [2, 4, 6, 8, 10]
```

---

# 📗 forEach() → undefined

## 🧠 Recorre el array solo para ejecutar una acción.

NO devuelve un nuevo array.

---

## 🧪 Ejemplo

```js
numeros.forEach((n) => console.log(n));
// imprime cada número
```

---

# 📗 filter() → []

## 🧠 Devuelve un nuevo array con TODOS los elementos que cumplan una condición.

---

## 🧪 Ejemplo

```js
numeros.filter((n) => n % 2 === 0);
// [2, 4]
```

---

# 📗 find() → element | undefined

## 🧠 Devuelve el PRIMER elemento que cumpla la condición.

---

## 🧪 Ejemplo

```js
numeros.find((n) => n > 3);
// 4
```

---

# 📗 some() → boolean

## 🧠 Devuelve true si AL MENOS un elemento cumple la condición.

---

## 🧪 Ejemplo

```js
numeros.some((n) => n > 4);
// true
```

---

# 📗 every() → boolean

## 🧠 Devuelve true si TODOS los elementos cumplen la condición.

---

## 🧪 Ejemplo

```js
numeros.every((n) => n > 0);
// true
```

---

# 📗 includes('valor') → boolean

## 🧠 Devuelve true si el valor existe en el array.

---

## 🧪 Ejemplo

```js
numeros.includes(3);
// true
```

---

# 📗 reduce() → any

## 🧠 Reduce todos los valores del array a un solo valor (suma, total, acumulador, etc).

---

## 🧪 Ejemplo

```js
numeros.reduce((acc, n) => acc + n, 0);
// 15
```

---

# 📗 indexOf('valor') → number

## 🧠 Devuelve el índice del valor.

Si no existe → -1

---

## 🧪 Ejemplo

```js
numeros.indexOf(4);
// 3
```

---

# 📗 findIndex() → number

## 🧠 Devuelve el índice del primer elemento que cumple la condición.

---

## 🧪 Ejemplo

```js
numeros.findIndex((n) => n > 3);
// 3
```

---

# 📗 join() → string

## 🧠 Convierte el array en un string.

---

## 🧪 Ejemplo

```js
numeros.join(' - ');
// "1 - 2 - 3 - 4 - 5"
```

---

# 📗 slice() → []

## 🧠 Devuelve una copia de una parte del array SIN modificar el original.

---

## 🧪 Ejemplo

```js
numeros.slice(1, 3);
// [2, 3]
```

---

# 📗 splice() → []

## 🧠 Agrega, elimina o reemplaza elementos MODIFICANDO el array original.

---

## 🧪 Ejemplo

```js
numeros.splice(2, 1);
// elimina el 3 → [1, 2, 4, 5]
```

---

# ✨ RESUMEN RÁPIDO

| Método        | Retorna                |
| ------------- | ---------------------- |
| `map()`       | `[]`                   |
| `forEach()`   | `undefined`            |
| `filter()`    | `[]`                   |
| `find()`      | `element \| undefined` |
| `some()`      | `boolean`              |
| `every()`     | `boolean`              |
| `includes()`  | `boolean`              |
| `reduce()`    | `any`                  |
| `indexOf()`   | `number`               |
| `findIndex()` | `number`               |
| `join()`      | `string`               |
| `slice()`     | `[]`                   |
| `splice()`    | `[]`                   |

````

# 📘 OBJETOS EN JAVASCRIPT

## 🧠 Un objeto es una estructura de datos que permite guardar información en pares de clave:valor.

---

# 📗 CREAR UN OBJETO

```js
let person = {
  name: 'alo',
  age: 23,
  favColor: 'blue',
};
````

## 🧠 Crea un objeto con propiedades.

---

# 📗 ACCEDER A UNA PROPIEDAD

```js
person.name;
```

## 🧠 Devuelve el valor de la propiedad "name".

---

# 📗 AGREGAR UNA PROPIEDAD

```js
person.lastName = 'francisco';
```

## 🧠 Agrega una nueva propiedad al objeto.

---

# 📗 MODIFICAR UNA PROPIEDAD

```js
person.favColor = 'green';
```

## 🧠 Cambia el valor de una propiedad existente.

---

# 📗 ELIMINAR UNA PROPIEDAD

```js
delete person.name;
```

## 🧠 Elimina una propiedad del objeto.

---

# 📗 ACCESO ALTERNATIVO

```js
person['age'];
```

## 🧠 Otra forma de acceder a propiedades usando strings.

---

# 📗 REGLA RÁPIDA 🧠

👉 Objetos = información con nombre

👉 clave:valor = estructura básica

👉 `.propiedad` = acceder

👉 `=` → agregar o modificar

👉 `delete` → eliminar

---

# ✨ RESUMEN

## 🧠 Objetos

👉 Permiten almacenar información relacionada en una sola estructura

👉 Cada dato se guarda como un par `clave:valor`

👉 Se pueden crear, leer, actualizar y eliminar propiedades

👉 Son fundamentales para trabajar con APIs, aplicaciones y datos complejos 🚀

---

# 📘 OBJECT METHODS (MÉTODOS DE OBJETOS)

## 🧠 Sirven para trabajar con objetos:

leer propiedades, recorrerlos, copiarlos y combinarlos.

```js
let user = {
  nombre: 'Ana',
  edad: 20,
  pais: 'Colombia',
};
```

---

# 📗 Object.keys(obj) → []

## 🧠 Devuelve un array con las CLAVES del objeto.

---

## 🧪 Ejemplo

```js
Object.keys(user);
// ["nombre", "edad", "pais"]
```

---

# 📗 Object.values(obj) → []

## 🧠 Devuelve un array con los VALORES del objeto.

---

## 🧪 Ejemplo

```js
Object.values(user);
// ["Ana", 20, "Colombia"]
```

---

# 📗 Object.entries(obj) → []

## 🧠 Devuelve un array de pares [clave, valor].

---

## 🧪 Ejemplo

```js
Object.entries(user);
// [["nombre","Ana"],["edad",20],["pais","Colombia"]]
```

---

# 📗 Object.assign(target, source) → object

## 🧠 Copia propiedades de un objeto a otro.

---

## 🧪 Ejemplo

```js
Object.assign({}, user, { edad: 21 });
// { nombre:"Ana", edad:21, pais:"Colombia" }
```

---

# 📗 Object.freeze(obj)

## 🧠 Congela el objeto. NO permite cambios.

---

## 🧪 Ejemplo

```js
Object.freeze(user);

user.edad = 30; // no cambia
```

---

# 📗 Object.seal(obj)

## 🧠 Permite modificar valores, pero NO agregar ni eliminar propiedades.

---

## 🧪 Ejemplo

```js
Object.seal(user);

user.edad = 25; // ok
user.email = 'a@a.com'; // no se agrega
```

---

# 📗 Object.hasOwn(obj, key) → boolean

## 🧠 Verifica si la propiedad es propia del objeto.

---

## 🧪 Ejemplo

```js
Object.hasOwn(user, 'nombre');
// true
```

---

# 📗 hasOwnProperty(key) → boolean

## 🧠 Versión clásica para verificar propiedades.

---

## 🧪 Ejemplo

```js
user.hasOwnProperty('edad');
// true
```

---

# 📗 delete obj.prop

## 🧠 Elimina una propiedad del objeto.

---

## 🧪 Ejemplo

```js
delete user.pais;
// { nombre:"Ana", edad:20 }
```

---

# 📗 in operator → boolean

## 🧠 Verifica si una propiedad existe (incluye herencia).

---

## 🧪 Ejemplo

```js
'nombre' in user;
// true
```

---

# 📗 for...in

## 🧠 Recorre las propiedades del objeto.

---

## 🧪 Ejemplo

```js
for (let key in user) {
  console.log(key, user[key]);
}
```

---

# 📗 JSON.stringify(obj) → string

## 🧠 Convierte un objeto en texto JSON.

---

## 🧪 Ejemplo

```js
JSON.stringify(user);
// '{"nombre":"Ana","edad":20,"pais":"Colombia"}'
```

---

# 📗 JSON.parse(string) → object

## 🧠 Convierte texto JSON en objeto.

---

## 🧪 Ejemplo

```js
JSON.parse('{"nombre":"Ana","edad":20}');
```

---

# ✨ RESUMEN RÁPIDO

| Método             | Retorna           |
| ------------------ | ----------------- |
| `Object.keys()`    | `[]`              |
| `Object.values()`  | `[]`              |
| `Object.entries()` | `[]`              |
| `Object.assign()`  | `object`          |
| `Object.freeze()`  | objeto congelado  |
| `Object.seal()`    | objeto sellado    |
| `Object.hasOwn()`  | `boolean`         |
| `hasOwnProperty()` | `boolean`         |
| `delete`           | elimina propiedad |
| `in`               | `boolean`         |
| `for...in`         | recorrido         |
| `JSON.stringify()` | `string`          |
| `JSON.parse()`     | `object`          |

---

```

```
