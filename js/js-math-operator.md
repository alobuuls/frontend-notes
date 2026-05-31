# 📘 MATH EN JAVASCRIPT

## 🧠 Math es un objeto встроido en JavaScript que permite hacer operaciones matemáticas.

---

# 📗 Math.random()

## 🧠 Genera un número aleatorio entre 0 y 1 (sin incluir 1).

---

## 🧪 Ejemplo

```js
Math.random();
// 0.234567...
```

---

# 📗 Math.floor()

## 🧠 Redondea hacia abajo (elimina decimales).

---

## 🧪 Ejemplo

```js
Math.floor(4.9);
// 4
```

---

# 📗 Math.ceil()

## 🧠 Redondea hacia arriba.

---

## 🧪 Ejemplo

```js
Math.ceil(4.1);
// 5
```

---

# 📗 Math.round()

## 🧠 Redondea al número más cercano.

---

## 🧪 Ejemplo

```js
Math.round(4.5);
// 5
```

---

# 📗 Math.max()

## 🧠 Devuelve el número MÁS grande.

---

## 🧪 Ejemplo

```js
Math.max(10, 5, 100, 3);
// 100
```

---

# 📗 Math.min()

## 🧠 Devuelve el número MÁS pequeño.

---

## 🧪 Ejemplo

```js
Math.min(10, 5, 100, 3);
// 3
```

---

# 📗 Math.abs()

## 🧠 Devuelve el valor absoluto (sin signo negativo).

---

## 🧪 Ejemplo

```js
Math.abs(-10);
// 10
```

---

# 📗 EJEMPLO COMBINADO 🎲

## 🧪 Número aleatorio entre 1 y 10

```js
Math.floor(Math.random() * 10) + 1;
```

---

# 📗 REGLA RÁPIDA 🧠

👉 `random` → aleatorio

👉 `floor` → baja

👉 `ceil` → sube

👉 `round` → redondea

👉 `max` → mayor

👉 `min` → menor

👉 `abs` → valor positivo

---

# ✨ RESUMEN

## 🧠 Métodos más usados de Math

| Método          | Función                      |
| --------------- | ---------------------------- |
| `Math.random()` | Genera números aleatorios    |
| `Math.floor()`  | Redondea hacia abajo         |
| `Math.ceil()`   | Redondea hacia arriba        |
| `Math.round()`  | Redondea al más cercano      |
| `Math.max()`    | Obtiene el valor más grande  |
| `Math.min()`    | Obtiene el valor más pequeño |
| `Math.abs()`    | Obtiene el valor absoluto    |

---

# 🎲 Generar números aleatorios

## 🧠 Patrón más común

```js
Math.floor(Math.random() * 10) + 1;
```

👉 `Math.random()` genera un decimal aleatorio

👉 `* 10` amplía el rango

👉 `Math.floor()` elimina los decimales

👉 `+ 1` evita que el resultado sea 0

---

# 🚀 Tip

## 🧠 Los métodos más utilizados en proyectos reales son:

✅ `Math.random()`

✅ `Math.floor()`

✅ `Math.round()`

✅ `Math.max()`

✅ `Math.min()`

👉 Son muy comunes en juegos, formularios, validaciones, estadísticas y manejo de datos.

---
