# 📘 THIS EN JAVASCRIPT

## 🧠 `this` es una palabra clave que hace referencia al **contexto de ejecución** actual.

👉 Dependiendo de dónde y cómo se use, `this` puede apuntar a cosas distintas.

---

# 📗 EN EL CONTEXTO GLOBAL

```js
console.log(this);
```

🧠 En navegador → apunta a `window`

🧠 En Node.js → apunta a `global` (objeto global)

---

# 📗 DENTRO DE UNA FUNCIÓN

```js
function saludar() {
  console.log(this);
}

saludar();
```

🧠 En modo estricto → `undefined`

🧠 En modo normal → objeto global (`window`)

---

# 📗 DENTRO DE UN MÉTODO DE OBJETO

```js
const persona = {
  nombre: 'Ana',
  saludar: function () {
    console.log(`Hola, soy ${this.nombre}`);
  },
};

persona.saludar();
// 'Hola, soy Ana'
```

🧠 Aquí `this` apunta al **objeto que llamó al método** (`persona`)

---

# 📗 FUNCIONES FLECHA (Arrow Functions)

```js
const persona2 = {
  nombre: 'Luis',
  saludar: () => {
    console.log(this);
  },
};

persona2.saludar();
```

🧠 `this` **NO se vincula al objeto** en funciones flecha

🧠 Toma el `this` del contexto donde fue definida la función

---

# 📗 EN CLASES

```js
class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
}

const p = new Persona('Ana');
p.saludar();
// 'Hola, soy Ana'
```

🧠 `this` apunta a la instancia de la clase

---

# 📗 CAMBIAR EL CONTEXTO DE THIS

```js
function saludarEdad(edad) {
  console.log(`${this.nombre} tiene ${edad} años`);
}

const usuario = { nombre: 'Carlos' };

saludarEdad.call(usuario, 30);
saludarEdad.apply(usuario, [30]);
const nuevaFunc = saludarEdad.bind(usuario, 30);
```

### 🧠 call

👉 Llama la función con `this` específico.

```js
saludarEdad.call(usuario, 30);
```

---

### 🧠 apply

👉 Igual que `call` pero recibe los argumentos en array.

```js
saludarEdad.apply(usuario, [30]);
```

---

### 🧠 bind

👉 Devuelve una **nueva función** con `this` fijo.

```js
const nuevaFunc = saludarEdad.bind(usuario, 30);
```

---

# 📗 DIFERENCIA ENTRE call, apply Y bind

| Método    | Ejecuta inmediatamente | Argumentos                 |
| --------- | ---------------------- | -------------------------- |
| `call()`  | ✅ Sí                  | Separados por comas        |
| `apply()` | ✅ Sí                  | Dentro de un array         |
| `bind()`  | ❌ No                  | Devuelve una nueva función |

---

# 📗 EJEMPLO VISUAL

```js
const usuario = {
  nombre: 'Ana',
};

function mostrarNombre() {
  console.log(this.nombre);
}
```

### 💡 call

```js
mostrarNombre.call(usuario);
// Ana
```

### 💡 apply

```js
mostrarNombre.apply(usuario);
// Ana
```

### 💡 bind

```js
const nuevaFuncion = mostrarNombre.bind(usuario);

nuevaFuncion();
// Ana
```

---

# ⚠️ COSAS IMPORTANTES

🧠 `this` depende de cómo se llama la función

🧠 En métodos apunta al objeto que ejecuta el método

🧠 En clases apunta a la instancia

🧠 Las arrow functions no crean su propio `this`

🧠 `call`, `apply` y `bind` permiten controlar el contexto

---

# 📘 RESUMEN / REGLA RÁPIDA

## 💡 Regla rápida para recordar esto “como humano”

👉 Si ves un objeto llamando una función:

```js
persona.saludar();
```

🧠 `this` suele ser `persona`

---

👉 Si ves una clase:

```js
this.nombre;
```

🧠 `this` suele ser la instancia creada con `new`

---

👉 Si ves una arrow function:

```js
() => {};
```

🧠 No crea su propio `this`

🧠 Hereda el `this` externo

---

👉 Si ves:

```js
call();
apply();
bind();
```

🧠 Están forzando quién será `this`

---

# ✨ RESUMEN

## 🧠 this

👉 Representa el contexto actual

👉 No tiene un valor fijo

👉 Cambia según dónde se use

---

## 🧠 Contextos más comunes

👉 Global → `window` o `global`

👉 Función normal → `undefined` o global

👉 Método → objeto que lo llama

👉 Clase → instancia creada

👉 Arrow function → hereda contexto externo

---

## 🚀 Lo más importante para entrevistas

✅ `this` en objetos

✅ `this` en clases

✅ Arrow functions y `this`

✅ `call()`

✅ `apply()`

✅ `bind()`

👉 Dominar `this` es uno de los conceptos más importantes de JavaScript 🔥

---
