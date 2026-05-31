# 📘 APUNTES MIDUDEV

## 🧠 Concatenación de Strings

### 💡 Ejemplo

```js
'Perry' + 'Ornitorinco';
// 'PerryOrnitoriinco'
```

👉 El operador `+` une cadenas de texto.

---

## 🧠 Template Strings (Template Literals)

### 💡 Ejemplo

```js
`Perry el ornitorrinco cuesta ${2 * 5} COP`;
// 'Perry el ornitorrinco cuesta 10 COP'
```

👉 Permiten insertar expresiones usando `${}`.

👉 Utilizan comillas invertidas `` ` ` ``.

---

# 📘 OPERADORES DE COMPARACIÓN (BOOLEANOS)

## 🧠 Sirven para comparar valores y siempre devuelven true o false.

---

## 📋 Operadores

| Operador | Significado              |
| -------- | ------------------------ |
| `=`      | Asignación (no compara)  |
| `==`     | Igualdad de valor        |
| `===`    | Igualdad de valor y tipo |
| `!=`     | Diferente (solo valor)   |
| `!==`    | Diferente (valor y tipo) |
| `>`      | Mayor que                |
| `<`      | Menor que                |
| `>=`     | Mayor o igual que        |
| `<=`     | Menor o igual que        |

---

## 💡 Ejemplos

```js
5 == '5'; // true
5 === '5'; // false

10 > 5; // true
10 <= 5; // false

5 !== '5'; // true
```

---

# 📘 OPERADORES LÓGICOS

## 🧠 Sirven para combinar o negar valores booleanos (true / false).

---

## 📋 Operadores

| Operador | Significado                                 |
| -------- | ------------------------------------------- | --- | ---------------------------------------------- |
| `&&`     | AND (y): true si ambas condiciones son true |
| `        |                                             | `   | OR (o): true si al menos una condición es true |
| `!`      | NOT (no): niega el valor booleano           |

---

## 💡 Ejemplos

```js
true && true;
// true
```

```js
true && false;
// false
```

```js
true || false;
// true
```

```js
false || false;
// false
```

```js
!true;
// false
```

```js
!false;
// true
```

---

# 📘 NULL, UNDEFINED Y 0

## 🧠 Son valores diferentes, aunque a veces se confundan.

👉 Cada uno significa algo distinto en JavaScript.

---

# 📗 null

## 🧠 Significa: “no hay valor a propósito”.

👉 El programador decide que una variable no tenga valor.

---

### 💡 Ejemplo

```js
let usuario = null;
```

👉 Existe la variable, pero no tiene un valor asignado a propósito.

⚠️ Es falsy

---

# 📗 undefined

## 🧠 Significa: “no hay valor porque nunca se asignó”.

👉 JavaScript lo pone automáticamente.

---

### 💡 Ejemplo

```js
let edad;

console.log(edad);
// undefined
```

⚠️ Es falsy

---

# 📗 0

## 🧠 Es un número válido.

👉 Significa “cero”, no “vacío” ni “sin valor”.

👉 Se usa normalmente en operaciones matemáticas.

---

### 💡 Ejemplo

```js
let puntos = 0;

if (puntos === 0) {
  // El valor es cero, pero existe
}
```

⚠️ Es falsy, pero sigue siendo un número

---

# ⚠️ COSAS IMPORTANTES

🧠 `null` = ausencia intencional de valor

🧠 `undefined` = valor no asignado

🧠 `0` = número válido

🧠 Los tres son valores falsy

---

# 📗 DIFERENCIA RÁPIDA

| Valor       | Significado                         |
| ----------- | ----------------------------------- |
| `null`      | Sin valor intencionalmente          |
| `undefined` | Sin valor porque nunca fue asignado |
| `0`         | Número válido con valor cero        |

---

# ✨ RESUMEN

## 🧠 Operadores de comparación

👉 Comparan valores

👉 Devuelven `true` o `false`

👉 `===` es la comparación más segura

---

## 🧠 Operadores lógicos

👉 `&&` → AND

👉 `||` → OR

👉 `!` → NOT

---

## 🧠 null, undefined y 0

👉 Son diferentes entre sí

👉 Los tres son falsy

👉 Solo `0` representa un número real

👉 Comprender esta diferencia evita muchos errores en JavaScript 🚀🔥

---

# 📘 BIGINT Y SYMBOL

## 🧠 Son tipos de datos especiales en JavaScript.

👉 No se usan tanto al inicio, pero es importante saber qué son.

---

# 📗 BigInt

## 🧠 Es un tipo de dato para números enteros MUY grandes, más grandes de lo que Number puede manejar.

👉 Se escribe agregando una `n` al final del número.

---

### 💡 Ejemplo

```js
let numeroGrande = 123456789012345678901234567890n;
```

---

### 💡 Comparación

```js
let normal = 10;
let grande = 10n;
```

```js
normal === grande;
// false
```

```js
normal == grande;
// true
```

⚠️ BigInt NO se puede mezclar con Number en operaciones matemáticas.

---

### 💡 Ejemplo

```js
10n + 5;
// ❌ Error
```

```js
10n + 5n;
// ✅ OK
```

---

# 📗 Symbol

## 🧠 Es un tipo de dato que crea valores ÚNICOS.

👉 Aunque tengan el mismo nombre, nunca son iguales.

👉 Se usa para identificadores únicos.

---

### 💡 Ejemplo

```js
let id1 = Symbol('id');
let id2 = Symbol('id');
```

```js
id1 === id2;
// false
```

---

### 💡 Uso común

```js
const usuario = {
  id: Symbol('id'),
  nombre: 'Ana',
};
```

⚠️ Cada Symbol es único, no se repite.

---

# ⚠️ COSAS IMPORTANTES

🧠 BigInt permite trabajar con números enormes

🧠 Se escribe agregando `n` al final

🧠 No puede mezclarse con Number

🧠 Symbol genera identificadores únicos

🧠 Dos Symbols nunca son iguales aunque tengan la misma descripción

---

# 📘 OPERADORES EN CONDICIONALES

## 🧠 Se usan para comparar valores.

---

## 📋 Operadores

| Operador | Significado         |
| -------- | ------------------- |
| `==`     | igual (no estricto) |
| `===`    | igual estricto      |
| `!=`     | diferente           |
| `!==`    | diferente estricto  |
| `>`      | mayor que           |
| `<`      | menor que           |
| `>=`     | mayor o igual       |
| `<=`     | menor o igual       |

---

# 📘 OPERADORES LÓGICOS

## 🧠 Permiten combinar condiciones.

---

## 📋 Operadores

| Operador | Significado    |
| -------- | -------------- | --- | ------ |
| `&&`     | AND (y)        |
| `        |                | `   | OR (o) |
| `!`      | NOT (negación) |

---

## 🧪 Ejemplo

```js
let age = 20;
let hasTicket = true;

if (age >= 18 && hasTicket) {
  console.log('Puede entrar');
}
```

---

# 📗 REGLA RÁPIDA 🧠

👉 if → una condición

👉 else if → varias condiciones

👉 switch → muchos casos sobre un mismo valor

👉 && → todas deben cumplirse

👉 || → al menos una debe cumplirse

👉 ! → niega una condición

---

# ✨ RESUMEN

## 🧠 BigInt

👉 Números enteros extremadamente grandes

👉 Se escriben con `n`

👉 No se mezclan con Number

---

## 🧠 Symbol

👉 Genera identificadores únicos

👉 Cada Symbol es diferente

👉 Muy usado para claves privadas o únicas

---

## 🧠 Operadores de comparación

👉 Comparan valores

👉 Devuelven `true` o `false`

👉 `===` es la comparación más segura

---

## 🧠 Operadores lógicos

👉 `&&` → todas las condiciones deben cumplirse

👉 `||` → al menos una condición debe cumplirse

👉 `!` → invierte el valor booleano

👉 Son fundamentales para crear condiciones complejas 🚀🔥

---
