# 📘 TRUTHY & FALSY EN JAVASCRIPT

## 🧠 En JavaScript, todos los valores pueden evaluarse como:

👉 `true` (truthy)

👉 `false` (falsy)

👉 Esto se usa mucho en condicionales (`if`, `||`, `&&`, etc).

---

# 📗 FALSY VALUES ❌

## 🧠 Son valores que se convierten automáticamente en false.

### 📋 Lista completa

```js
false;
0 - 0;
0n;
('');
null;
undefined;
NaN;
```

---

### 🧪 Ejemplo

```js
if (0) {
  console.log('entra');
} else {
  console.log('no entra');
}
// "no entra"
```

---

# 📗 TRUTHY VALUES ✅

## 🧠 TODO lo que NO es falsy es truthy.

### 📋 Ejemplos comunes

```js
true
1
-1
"0"
"hola"
[]
{}
Infinity
```

---

### 🧪 Ejemplo

```js
if ('hola') {
  console.log('entra');
}
// "entra"
```

---

# 📗 EJEMPLO CLÁSICO 🧪

```js
let nombre = '';

if (!nombre) {
  console.log('No hay nombre');
}
```

👉 entra porque `""` es falsy

---

# 📗 USO CON || (OR)

## 🧠 Devuelve el PRIMER valor truthy.

### 🧪 Ejemplo

```js
let user = '';
let nombre = user || 'Invitado';

console.log(nombre);
// "Invitado"
```

---

### 🧠 Cómo funciona

```js
'' || 'Invitado';
```

👉 `""` es falsy

👉 Continúa evaluando

👉 Devuelve `"Invitado"`

---

# 📗 USO CON && (AND)

## 🧠 Devuelve el PRIMER falsy o el último truthy.

### 🧪 Ejemplo

```js
let activo = true;
let resultado = activo && 'Usuario activo';

console.log(resultado);
// "Usuario activo"
```

---

### 🧠 Cómo funciona

```js
true && 'Usuario activo';
```

👉 Ambos son truthy

👉 Devuelve el último valor

```js
'Usuario activo';
```

---

# 📗 CUIDADO IMPORTANTE ⚠️

```js
'0'; // truthy
0; // falsy
```

### 🧪 Ejemplo

```js
if ('0') console.log('entra');
// sí
```

```js
if (0) console.log('entra');
// no
```

---

# 📗 FALSY MÁS IMPORTANTES

| Valor       | Tipo      |
| ----------- | --------- |
| `false`     | boolean   |
| `0`         | number    |
| `-0`        | number    |
| `0n`        | bigint    |
| `""`        | string    |
| `null`      | null      |
| `undefined` | undefined |
| `NaN`       | number    |

---

# 📗 TRUTHY MÁS COMUNES

| Valor      | Resultado |
| ---------- | --------- |
| `"hola"`   | truthy    |
| `"0"`      | truthy    |
| `[]`       | truthy    |
| `{}`       | truthy    |
| `1`        | truthy    |
| `-1`       | truthy    |
| `Infinity` | truthy    |

---

# 📗 CASOS REALES

## 🧪 Valor por defecto

```js
const nombre = userName || 'Invitado';
```

👉 Muy usado para valores por defecto.

---

## 🧪 Validar datos

```js
if (email) {
  console.log('Email válido');
}
```

👉 Solo entra si existe un valor truthy.

---

## 🧪 Ejecutar código condicionalmente

```js
isAdmin && mostrarPanel();
```

👉 Solo ejecuta `mostrarPanel()` si `isAdmin` es truthy.

---

# ⚠️ COSAS IMPORTANTES

🧠 Solo existen 8 valores falsy

🧠 Todo lo demás es truthy

🧠 `[]` es truthy

🧠 `{}` es truthy

🧠 `"0"` es truthy

🧠 `0` es falsy

---

# 📗 REGLA RÁPIDA 🧠

👉 Falsy → valores "vacíos" o inválidos

👉 Truthy → todo lo demás

---

# ✨ RESUMEN

## 🧠 Falsy

👉 `false`

👉 `0`

👉 `-0`

👉 `0n`

👉 `""`

👉 `null`

👉 `undefined`

👉 `NaN`

---

## 🧠 Truthy

👉 Todo lo que no sea falsy

👉 Strings con contenido

👉 Arrays

👉 Objetos

👉 Números distintos de cero

---

## 🧠 Operadores

👉 `||` devuelve el primer truthy

👉 `&&` devuelve el primer falsy o el último truthy

👉 `!` invierte el valor booleano

---

## 🚀 Lo más importante para recordar

✅ Solo hay 8 valores falsy

✅ `[]` y `{}` son truthy

✅ `"0"` es truthy

✅ `0` es falsy

👉 Entender Truthy y Falsy evita muchísimos errores en JavaScript 🔥

---
