# 📘 VARIABLES EN JAVASCRIPT

## 🧠 Una variable es un espacio en memoria donde se guarda un valor.

Ese valor puede cambiar o mantenerse fijo.

---

# 📘 DECLARACIÓN DE VARIABLES

## 🧠 Para crear una variable se usan: `let` y `const`

---

## 📗 let

🧠 Se usa cuando el valor PUEDE cambiar.

### 💡 Ejemplo

```js
let edad = 25;
edad = 26; // válido
```

---

## 📗 const

🧠 Se usa cuando el valor NO debe cambiar.

### 💡 Ejemplo

```js
const PI = 3.14;
// PI = 3.15 ❌ Error
```

⚠️ `const` SIEMPRE debe tener un valor al declararse.

---

# 📘 VALORES QUE PUEDE GUARDAR UNA VARIABLE

## 🧠 Una variable puede guardar cualquier tipo de dato.

### 💡 Ejemplos

```js
let nombre = 'Ana'; // string
let edad = 30; // number
let activo = true; // boolean
let vacio = null; // null
let sinValor; // undefined
let grande = 1000n; // BigInt
let id = Symbol('id'); // Symbol
```

---

# 📘 REASIGNACIÓN DE VALORES

## 🧠 let permite cambiar el valor, const no.

### 💡 Ejemplo

```js
let puntos = 10;
puntos = 20; // OK

const max = 100;
// max = 200 ❌ Error
```

---

# 📘 CONST CON OBJETOS Y ARRAYS

## 🧠 Con const NO se puede cambiar la referencia, pero SÍ se puede modificar el contenido.

### 💡 Ejemplo

```js
const usuario = {
  nombre: 'Juan',
};

usuario.nombre = 'Pedro'; // OK
// usuario = {} ❌ Error
```

---

# 📘 BUENAS PRÁCTICAS

## 🧠 Usa const por defecto.

👉 Usa `let` solo cuando el valor cambie.

👉 No uses `var`.

---

# 📘 VARIABLES EN JAVASCRIPT

## 🧠 Una variable es un espacio en memoria que guarda un valor que puede cambiar o reutilizarse.

---

# 📗 ¿POR QUÉ USAR VARIABLES?

## 🧠 Usar variables es bueno porque ayuda a:

✔ Legibilidad del código

✔ Evitar repetir valores

✔ Facilitar cambios en el futuro

✔ Hacer el código más limpio y mantenible

---

# 📗 EJEMPLO SIN VARIABLES ❌

```js
console.log(10 + 10);
console.log(10 + 10);
console.log(10 + 10);
```

### 🧠 Problema

Si cambia el valor, hay que cambiarlo en todos lados.

---

# 📗 EJEMPLO CON VARIABLES ✅

```js
let number = 10;

console.log(number + number);
console.log(number + number);
console.log(number + number);
```

### 🧠 Ventaja

Si cambia el valor, solo se modifica una vez.

---

# 📗 COMPARACIÓN RÁPIDA

| Característica                 | let           | const       |
| ------------------------------ | ------------- | ----------- |
| Permite reasignar valor        | ✅ Sí         | ❌ No       |
| Debe inicializarse al declarar | ❌ No         | ✅ Sí       |
| Uso recomendado                | Cuando cambia | Por defecto |
| Disponible en bloque (`{}`)    | ✅ Sí         | ✅ Sí       |

---

# 📗 CASO REAL

### 💡 Configuración fija

```js
const API_URL = 'https://api.com';
const MAX_USERS = 100;
```

🧠 Valores que no deberían cambiar.

---

### 💡 Contador

```js
let contador = 0;

contador++;
contador++;
```

🧠 Valores que cambian durante la ejecución.

---

# ⚠️ COSAS IMPORTANTES

🧠 Una variable almacena datos

🧠 `let` permite reasignar

🧠 `const` no permite reasignar

🧠 `const` sí permite modificar objetos y arrays internamente

🧠 Evita usar `var`

---

# 📗 REGLA RÁPIDA 🧠

👉 Variables = reutilizar valores

👉 Evitan repetición

👉 Hacen el código más claro

👉 `const` por defecto

👉 `let` cuando el valor cambie

---

# ✨ RESUMEN

## 🧠 Variables

👉 Guardan información en memoria

👉 Permiten reutilizar valores

👉 Mejoran la legibilidad del código

👉 Facilitan el mantenimiento

---

## 🚀 Regla profesional

```js
const nombre = 'Ana';
let edad = 20;
```

👉 Usa `const` siempre que puedas

👉 Usa `let` solo cuando necesites cambiar el valor

👉 Evita `var` en JavaScript moderno 🔥

---
