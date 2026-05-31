# 📘 DATA TYPES EN JAVASCRIPT

## 🧠 Los tipos de datos son los diferentes tipos de valores que puede tener una variable en JavaScript.

---

# 📗 string → 'texto'

## 🧠 Cadena de texto (letras, palabras, frases).

### 🧪 Ejemplo

```js
let saludo = 'hola';
```

---

# 📗 number → number

## 🧠 Número (enteros y decimales).

### 🧪 Ejemplo

```js
let edad = 10;
let precio = 10.5;
```

---

# 📗 boolean → true / false

## 🧠 Representa verdadero o falso.

### 🧪 Ejemplo

```js
let activo = true;
```

---

# 📗 undefined

## 🧠 Variable declarada pero SIN valor.

### 🧪 Ejemplo

```js
let x;

console.log(x); // undefined
```

---

# 📗 null → vacío intencional

## 🧠 Se asigna para indicar que NO hay valor.

### 🧪 Ejemplo

```js
let data = null;
```

---

# 📗 array → []

## 🧠 Estructura que almacena varios valores.

### 🧪 Ejemplo

```js
let lista = ['hola', 20, true, 'green', 60, false];
```

---

# 📗 object → {}

## 🧠 Agrupa datos (propiedades) y funciones (métodos).

### 🧪 Ejemplo

```js
let persona = {
  nombre: 'Ana',
  edad: 20,
};
```

---

# 📗 function

## 🧠 Bloque de código reutilizable que realiza una tarea.

### 🧪 Ejemplo

```js
function saludar() {
  return 'hola';
}
```

---

# 📗 Date

## 🧠 Representa fechas y horas.

### 🧪 Ejemplo

```js
let fecha = new Date();
```

---

# 📗 Infinity

## 🧠 Representa infinito positivo.

### 🧪 Ejemplo

```js
let infinito = Infinity;
```

---

# 📗 NaN (Not a Number)

## 🧠 Resultado de una operación numérica inválida.

### 🧪 Ejemplo

```js
let resultado = 0 / 0; // NaN
```

---

# 📗 TIPOS PRIMITIVOS 🧠

✔ `string`

✔ `number`

✔ `boolean`

✔ `undefined`

✔ `null`

✔ `symbol`

✔ `bigint`

---

# 📗 TIPOS NO PRIMITIVOS (REFERENCIA)

✔ `object`

✔ `array`

✔ `function`

---

# 📗 EJEMPLO RÁPIDO 🧪

```js
let nombre = 'Ana'; // string
let edad = 20; // number
let activo = true; // boolean
let data = null; // null
let lista = [1, 2, 3]; // array
let user = { name: 'Ana' }; // object
```

---

# 📗 REGLA RÁPIDA 🧠

👉 Primitivos → valores simples

👉 Objetos → estructuras complejas (arrays, objetos, funciones)

---

# ✨ RESUMEN

## 🧠 Tipos Primitivos

👉 Guardan valores simples

👉 Se copian por valor

👉 Son inmutables

- `string`
- `number`
- `boolean`
- `undefined`
- `null`
- `symbol`
- `bigint`

---

## 🧠 Tipos No Primitivos

👉 Guardan referencias en memoria

👉 Se copian por referencia

👉 Pueden contener múltiples valores

- `object`
- `array`
- `function`

---

## 🚀 Importante

👉 Todo en JavaScript gira alrededor de los tipos de datos

👉 Conocerlos es fundamental para trabajar con variables, funciones, objetos y APIs

---
