# 📘 CONDICIONALES EN JAVASCRIPT

## 🧠 Los condicionales permiten ejecutar código dependiendo de si una condición es true o false.

---

# 📘 IF

## 🧠 Ejecuta el código si la condición es true.

### 💡 Ejemplo → Se ejecuta

```js
let edad = 18;

if (edad >= 18) {
}
```

---

# 📘 IF / ELSE

## 🧠 else se ejecuta cuando la condición es false.

### 👉 ELSE NUNCA LLEVA CONDICION

---

### 💡 Ejemplo → No se ejecuta

```js
let edad = 16;

if (edad >= 18) {
} else {
}
```

---

# 📘 ELSE IF ( “si no, entonces si…”)

## 🧠 Permite evaluar varias condiciones. (siempre va despues de if)

---

### 💡 Ejemplo

```js
let nota = 8;

if (nota >= 9) {
} else if (nota >= 6) {
} else {
}
```

---

# 📘 CONDICIONES CON OPERADORES LÓGICOS

## 🧠 Se pueden combinar condiciones usando && y ||.

---

### 💡 Ejemplo → Se ejecuta

```js
let edad = 20;
let tieneID = true;

if (edad >= 18 && tieneID) {
}
```

---

# 📘 TRUTHY Y FALSY EN CONDICIONALES

## 🧠 JavaScript evalúa valores no booleanos como true o false.

---

### 💡 Ejemplo → no se ejecuta (string vacío es falsy)

```js
let nombre = '';

if (nombre) {
}
```

---

# 📘 TERNARIO (CONDICIONAL CORTO)

## 🧠 Versión corta del if / else.

---

### 💡 Ejemplo

```js
let edad = 18;

let mensaje = edad >= 18 ? 'Mayor de edad' : 'Menor de edad';
```

---

# ⚠️ COSAS IMPORTANTES

## 🧠 Reglas clave

👉 `if` ejecuta código cuando la condición es `true`

👉 `else` se ejecuta cuando la condición es `false`

👉 `else` nunca lleva condición

👉 `else if` permite agregar más condiciones

👉 Puedes combinar condiciones con `&&` y `||`

👉 JavaScript evalúa valores truthy y falsy automáticamente

---

# ✨ RESUMEN RÁPIDO

| Estructura     | Uso                                   |
| -------------- | ------------------------------------- | --- | ------------------------------------- |
| `if`           | Ejecutar si la condición es verdadera |
| `if / else`    | Elegir entre dos caminos              |
| `else if`      | Evaluar múltiples condiciones         |
| `&&`           | Todas las condiciones deben cumplirse |
| `              |                                       | `   | Al menos una condición debe cumplirse |
| `ternario ? :` | Versión corta de `if / else`          |

---

## 🚀 Flujo típico

```text
if
 ↓
else if
 ↓
else
```

👉 Primero se evalúa `if`

👉 Si no se cumple, se evalúan los `else if`

👉 Si ninguna condición se cumple, se ejecuta `else`

---

# 📘 SWITCH / CASE

## 🧠 Se usa para ejecutar diferentes bloques de código según el valor de una expresión.

👉 Es una alternativa más clara que muchos `if / else if`.

---

# 📗 switch(valor)

## 🧠 Compara el valor con cada case usando `===`

---

## 📌 Estructura básica

```js
switch (expresion) {
  case valor1:
    // código
    break;

  case valor2:
    // código
    break;

  default:
  // código si ningún case coincide
}
```

---

# ✨ Ejemplo

```js
const color = 'rojo';

switch (color) {
  case 'azul':
    console.log('El color es azul');
    break;

  case 'rojo':
    console.log('El color es rojo');
    break;

  case 'verde':
    console.log('El color es verde');
    break;

  default:
    console.log('Color no reconocido');
}
```

---

# ⚠️ IMPORTANTE

👉 `break` evita que siga ejecutando los otros `case`

👉 `default` es opcional, pero recomendado

👉 Usa `===` (comparación estricta)

---

# 🧠 Cómo funciona

1. Se evalúa la expresión del `switch`
2. Se compara con cada `case`
3. Si encuentra coincidencia, ejecuta ese bloque
4. `break` detiene la ejecución del `switch`
5. Si no hay coincidencias, se ejecuta `default`

---

# ✨ RESUMEN RÁPIDO

| Elemento  | Función                            |
| --------- | ---------------------------------- |
| `switch`  | Evalúa una expresión               |
| `case`    | Define un valor posible            |
| `break`   | Detiene la ejecución               |
| `default` | Se ejecuta si no hay coincidencias |

---

## 🚀 Cuándo usar switch

👉 Cuando comparas una misma variable contra varios valores

👉 Cuando tienes muchos `if / else if`

👉 Cuando quieres un código más limpio y fácil de leer

---
