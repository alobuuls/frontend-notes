# 📘 FUNCIONES EN JAVASCRIPT

## ⚠️ IMPORTANTE

🧠 PARA EJECTUAR UNA FUNCION SE DEBEN COLOCAR EL NOMBRE DE LA FUNCION Y PEGADO DOS PARENTESIS `"sumar()"`

🧠 LAS FUNCIONES INTERNAS DE JS SE INVOCAN CON `".nombreFuncion"`

---

## 🧠 Una función es un bloque de código que se puede reutilizar.

👉 Puede recibir datos

👉 Procesarlos

👉 Opcionalmente retornar un valor

---

# 📘 FUNCIÓN CON NOMBRE

## 🧠 Es una función tradicional que tiene un nombre.

### 💡 Ejemplo

```js
function isEven(x) {
  return x % 2 === 0;
}
```

---

# 📘 FUNCIÓN ANÓNIMA

## 🧠 Es una función sin nombre, generalmente asignada a una variable.

### 💡 Ejemplo

```js
const isAnAdult = (edad) => {
  return edad >= 18;
};
```

---

# 📘 FUNCIÓN QUE RECIBE PARÁMETROS

## 🧠 Los parámetros son valores que la función necesita para trabajar.

### 💡 Ejemplo

```js
function isEven(x) {
  return x % 2 === 0;
}
```

---

# 📘 FUNCIÓN QUE NO RECIBE PARÁMETROS

## 🧠 No necesita información externa para ejecutarse.

### 💡 Ejemplo

```js
const isDecember = () => {
  return new Date().getMonth() === 11 ? 'Navidad' : 'Espera a diciembre';
};
```

---

# 📘 FUNCIÓN QUE RETORNA UN VALOR

## 🧠 Usa `return` para devolver un resultado.

### 💡 Ejemplo

```js
const isAnAdult = (edad) => {
  return edad >= 18;
};
```

---

# 📘 FUNCIÓN QUE NO RETORNA NADA

## 🧠 Ejecuta una acción, pero no devuelve ningún valor.

### 💡 Ejemplo

```js
let canEnterToParty = false;

const isAnAdultOneLine = (edad) => {
  canEnterToParty = edad >= 18;
};
```

---

# 📘 FUNCIÓN AUTOINVOCADA (IIFE)

## 🧠 Se ejecuta automáticamente sin ser llamada.

### 💡 Ejemplo

```js
(function () {
  console.log('hola');
})();
```

---

# 📘 ¿QUÉ SON LOS PARÁMETROS?

## 🧠 Son variables que recibe una función para trabajar con datos.

### 💡 Ejemplo

```js
function saludar(nombre) {
  return `Hola ${nombre}`;
}
```

👉 `nombre` es un parámetro.

---

# 📘 ¿QUÉ SON LOS ARGUMENTOS?

## 🧠 Son los valores reales que se envían al ejecutar la función.

### 💡 Ejemplo

```js
saludar('Ana');
```

👉 `"Ana"` es un argumento.

---

# 📘 INVOCAR (EJECUTAR) UNA FUNCIÓN

## 🧠 Una función no se ejecuta por existir.

Debe ser llamada.

### 💡 Ejemplo

```js
function saludar() {
  console.log('Hola');
}

saludar();
```

👉 Los paréntesis `()` ejecutan la función.

---

# 📘 RETURN

## 🧠 `return` finaliza la función y devuelve un valor.

### 💡 Ejemplo

```js
function sumar(a, b) {
  return a + b;
}

const resultado = sumar(2, 3);
```

👉 `resultado` vale `5`.

---

# 📘 FUNCIÓN FLECHA (ARROW FUNCTION)

## 🧠 Forma moderna y corta de escribir funciones.

### 💡 Ejemplo

```js
const sumar = (a, b) => {
  return a + b;
};
```

---

### 💡 Versión corta

```js
const sumar = (a, b) => a + b;
```

---

# 📘 EJEMPLO REAL CON ARRAY

```js
const users = [
  { id: 1, name: 'Ana' },
  { id: 2, name: 'Luis' },
  { id: 3, name: 'María' },
];
```

### 💡 Buscar nombres

```js
const names = users.map((user) => user.name);
```

👉 Resultado:

```js
['Ana', 'Luis', 'María'];
```

---

# 📘 DIFERENCIA ENTRE RETORNAR Y MOSTRAR

### 📤 Mostrar

```js
function saludar() {
  console.log('Hola');
}
```

👉 Imprime en consola.

---

### 📤 Retornar

```js
function saludar() {
  return 'Hola';
}
```

👉 Devuelve un valor para usarlo después.

---

# ⚠️ COSAS IMPORTANTES

🧠 Una función es reutilizable

🧠 Puede recibir parámetros

🧠 Puede retornar valores

🧠 Puede no retornar nada

🧠 Se ejecuta usando `()`

🧠 `return` termina la ejecución de la función

---

# 📗 REGLA RÁPIDA 🧠

👉 función = bloque reutilizable

👉 parámetros = datos que recibe

👉 argumentos = datos enviados

👉 return = devuelve un valor

👉 () = ejecuta la función

👉 arrow function = sintaxis moderna

---

# ✨ RESUMEN

## 🧠 Funciones

👉 Organizan código

👉 Evitan repetir lógica

👉 Reciben datos

👉 Devuelven resultados

👉 Son la base de JavaScript moderno

---

## 🚀 Lo más importante

```js
function sumar(a, b) {
  return a + b;
}

sumar(2, 3);
```

👉 Se define una vez

👉 Se ejecuta muchas veces

👉 Hace el código más limpio y mantenible 🔥

---

# 📘 FUNCTIONS (FUNCIONES EN JAVASCRIPT)

## 🧠 Una función es un bloque de código reutilizable que realiza una tarea específica.

Permite:

✔ Reutilizar código

✔ Organizar mejor el programa

✔ Evitar repetición

---

# 📗 DECLARAR UNA FUNCIÓN

```js
function saludar() {
  console.log('Hola');
}
```

🧠 Se define con la palabra clave `function`.

---

# 📗 LLAMAR UNA FUNCIÓN

```js
saludar();
```

🧠 Ejecuta el código dentro de la función.

---

# 📗 FUNCIONES CON PARÁMETROS

```js
function saludar(nombre) {
  console.log('Hola ' + nombre);
}

saludar('Ana');
```

🧠 Los parámetros permiten pasar datos a la función.

---

# 📗 FUNCIONES CON RETORNO (return)

```js
function sumar(a, b) {
  return a + b;
}

let resultado = sumar(2, 3);
```

🧠 `return` devuelve un valor fuera de la función.

---

# 📗 FUNCIÓN ANÓNIMA

```js
const saludar = function () {
  console.log('Hola');
};
```

🧠 No tiene nombre, se guarda en una variable.

---

# 📗 ARROW FUNCTION (FUNCIÓN FLECHA)

```js
const saludar = () => {
  console.log('Hola');
};
```

🧠 Forma moderna y más corta de escribir funciones.

---

# 📗 ARROW FUNCTION CON RETORNO IMPLÍCITO

```js
const sumar = (a, b) => a + b;
```

🧠 Si es una sola línea, el `return` es automático.

---

# 📗 FUNCIONES AUTOEJECUTADAS

```js
(function () {
  console.log('Hola');
})();
```

🧠 Se ejecutan automáticamente al crearse.

---

# 📗 DIFERENCIA ENTRE PARÁMETROS Y ARGUMENTOS

## 🧠 Aunque suelen confundirse, no son lo mismo.

### 💡 Ejemplo

```js
function saludar(nombre) {
  console.log(nombre);
}

saludar('Ana');
```

👉 `nombre` = parámetro

👉 `"Ana"` = argumento

---

# 📗 FUNCIÓN SIN RETURN

```js
function saludar() {
  console.log('Hola');
}
```

🧠 Ejecuta una acción pero no devuelve ningún valor.

---

# 📗 FUNCIÓN CON RETURN

```js
function saludar() {
  return 'Hola';
}
```

🧠 Devuelve un valor que puede guardarse o reutilizarse.

---

# 📗 EJEMPLO DE REUTILIZACIÓN

```js
function multiplicar(a, b) {
  return a * b;
}

console.log(multiplicar(2, 3));
console.log(multiplicar(4, 5));
console.log(multiplicar(10, 2));
```

🧠 La misma función puede ejecutarse muchas veces con datos distintos.

---

# 📗 TIPOS DE FUNCIONES

✔ Con nombre

✔ Anónimas

✔ Flecha

✔ Con parámetros

✔ Con return

✔ Sin return

---

# ⚠️ COSAS IMPORTANTES

🧠 Una función debe ser llamada para ejecutarse

🧠 Los parámetros reciben información

🧠 Los argumentos envían información

🧠 `return` finaliza la función y devuelve un valor

🧠 Las arrow functions son la sintaxis moderna más usada

---

# 📗 REGLA RÁPIDA 🧠

👉 function = bloque reutilizable

👉 parámetros = entrada de datos

👉 return = salida de datos

👉 arrow function = versión corta moderna

---

# ✨ RESUMEN

## 🧠 Funciones

👉 Organizan el código

👉 Evitan duplicación

👉 Reciben datos

👉 Procesan información

👉 Devuelven resultados

---

## 🚀 Lo más importante

```js
function sumar(a, b) {
  return a + b;
}

sumar(2, 3);
```

👉 Se escribe una vez

👉 Se reutiliza muchas veces

👉 Hace el código más limpio, mantenible y profesional 🔥

---
