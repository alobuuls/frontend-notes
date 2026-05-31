# 📘 STRING METHODS (MÉTODOS DE STRINGS)

## 🧠 Son funciones para trabajar con texto:

👉 buscar

👉 reemplazar

👉 cortar

👉 convertir

👉 etc.

---

### 🧪 Texto de ejemplo

```js
let texto = '  Hola Mundo JavaScript  ';
```

---

# 📗 charAt(index) → string

## 🧠 Devuelve el carácter en esa posición.

### 🧪 Ejemplo

```js
texto.charAt(2);
// "o"
```

---

# 📗 replace('a', 'b') → string

## 🧠 Reemplaza la PRIMER coincidencia.

---

# 📗 replaceAll('a', 'b') → string

## 🧠 Reemplaza TODAS las coincidencias.

### 🧪 Ejemplo

```js
texto.replace('Mundo', 'JS');
// "  Hola JS JavaScript  "
```

---

# 📗 includes('texto') → boolean

## 🧠 Devuelve true si el texto existe.

### 🧪 Ejemplo

```js
texto.includes('Hola');
// true
```

---

# 📗 indexOf('texto') → number

## 🧠 Devuelve la posición.

👉 Si no existe → `-1`

### 🧪 Ejemplo

```js
texto.indexOf('Mundo');
// 7
```

---

# 📗 slice(inicio, fin) → string

## 🧠 Corta una parte del texto.

### 🧪 Ejemplo

```js
texto.slice(2, 6);
// "Hola"
```

---

# 📗 split('separador') → []

## 🧠 Convierte el string en array.

### 🧪 Ejemplo

```js
texto.trim().split(' ');
// ["Hola", "Mundo", "JavaScript"]
```

---

# 📗 toUpperCase() / toLowerCase()

## 🧠 Convierte a mayúsculas / minúsculas.

### 🧪 Ejemplo

```js
texto.toUpperCase();
// "  HOLA MUNDO JAVASCRIPT  "
```

---

# 📗 trim()

## 🧠 Elimina espacios al inicio y al final.

### 🧪 Ejemplo

```js
texto.trim();
// "Hola Mundo JavaScript"
```

---

# 📗 startsWith('x') / endsWith('x')

## 🧠 Verifica cómo empieza o termina el texto.

### 🧪 Ejemplo

```js
texto.trim().startsWith('Hola');
// true
```

---

# 📗 repeat(n)

## 🧠 Repite el texto n veces.

### 🧪 Ejemplo

```js
'Hi '.repeat(3);
// "Hi Hi Hi "
```

---

# 📗 concat('otro')

## 🧠 Une strings.

### 🧪 Ejemplo

```js
'Hola'.concat(' Mundo');
// "Hola Mundo"
```

---

# ⚠️ COSAS IMPORTANTES

🧠 Los strings son inmutables

🧠 Los métodos devuelven nuevos strings

🧠 No modifican el texto original

🧠 `split()` convierte string → array

🧠 `trim()` elimina espacios sobrantes

---

# 📗 MÉTODOS MÁS USADOS

| Método          | Uso               |
| --------------- | ----------------- |
| `includes()`    | Buscar texto      |
| `replace()`     | Reemplazar texto  |
| `split()`       | Convertir a array |
| `trim()`        | Limpiar espacios  |
| `toUpperCase()` | Mayúsculas        |
| `toLowerCase()` | Minúsculas        |
| `slice()`       | Cortar texto      |
| `startsWith()`  | Verificar inicio  |
| `endsWith()`    | Verificar final   |

---

# 📗 CASO REAL

### 🧪 Limpiar texto de usuario

```js
const nombre = '   Ana   ';

const limpio = nombre.trim();

console.log(limpio);
// "Ana"
```

---

### 🧪 Separar palabras

```js
const frase = 'Hola Mundo JavaScript';

const palabras = frase.split(' ');

console.log(palabras);
// ["Hola", "Mundo", "JavaScript"]
```

---

### 🧪 Validar texto

```js
const email = 'test@mail.com';

console.log(email.includes('@'));
// true
```

---

# 📗 REGLA RÁPIDA 🧠

👉 `charAt()` → carácter

👉 `replace()` → reemplazar

👉 `includes()` → buscar

👉 `indexOf()` → posición

👉 `slice()` → cortar

👉 `split()` → array

👉 `trim()` → limpiar espacios

👉 `toUpperCase()` → MAYÚSCULAS

👉 `toLowerCase()` → minúsculas

👉 `startsWith()` → empieza con

👉 `endsWith()` → termina con

👉 `repeat()` → repetir

👉 `concat()` → unir strings

---

# ✨ RESUMEN

## 🧠 String Methods

👉 Permiten manipular texto fácilmente

👉 Ayudan a buscar, validar y transformar información

👉 Son fundamentales para formularios, APIs y manejo de datos

---

## 🚀 Los más importantes para recordar

✅ `includes()`

✅ `replace()`

✅ `split()`

✅ `trim()`

✅ `slice()`

✅ `toUpperCase()`

✅ `toLowerCase()`

👉 Son de los métodos más utilizados en JavaScript moderno 🔥

---
