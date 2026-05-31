# 📘 REGLAS DE ORO

## 🧠 Convenciones de nombres en JavaScript

👉 Un parámetro debe ir en `camelCase`

👉 Las propiedades de los objetos deben ir en `camelCase`

👉 Las variables creadas con `let` deben ir en `camelCase`

👉 Las funciones deben ir en `camelCase`

👉 El nombre de un archivo `.js` debe ir en `kebab-case` (skewer-case) o `snake_case`

---

## 💡 Ejemplos

### 🟢 camelCase

```js
let userName = 'Ana';

function getUserData() {}

const user = {
  firstName: 'Ana',
};

function calculateTotalPrice() {}
```

---

### 🟢 kebab-case (skewer-case)

```text
user-service.js
get-user-data.js
shopping-cart.js
```

---

### 🟢 snake_case

```text
user_service.js
get_user_data.js
shopping_cart.js
```

---

# 📘 prompt & alert

## 🧠 Son funciones del navegador para interactuar con el usuario.

---

# 📗 alert()

## 🧠 Muestra un mensaje emergente.

---

## 🧪 Ejemplo

```js
alert('Hola mundo');
```

---

# 📗 prompt()

## 🧠 Pide información al usuario y devuelve un texto.

---

## 🧪 Ejemplo

```js
let name = prompt('¿Cuál es tu nombre?');

console.log(name);
```

---

# 📌 REGLA RÁPIDA

👉 `alert` → mostrar mensaje

👉 `prompt` → pedir datos

---

# ✨ RESUMEN

## 🧠 Convenciones

👉 Variables → `camelCase`

👉 Funciones → `camelCase`

👉 Parámetros → `camelCase`

👉 Propiedades de objetos → `camelCase`

👉 Archivos → `kebab-case` o `snake_case`

---

## 🧠 Interacción con el usuario

| Función    | Uso                        |
| ---------- | -------------------------- |
| `alert()`  | Mostrar mensajes           |
| `prompt()` | Solicitar datos al usuario |

---

# 🚀 Importante

👉 `alert()` y `prompt()` son funciones del navegador

👉 `prompt()` siempre devuelve texto (`string`) o `null`

👉 Son útiles para aprender JavaScript y realizar pruebas rápidas

---
