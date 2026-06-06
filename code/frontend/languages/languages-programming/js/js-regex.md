# 📘 REGEX (EXPRESIONES REGULARES)

## 🧠 Es un patrón para buscar, validar o manipular texto.

---

# 📗 EJEMPLO BÁSICO

```js
let texto = 'hola123';
let regex = /\d+/;

console.log(regex.test(texto));
// true
```

---

## 🧠 ¿Qué significa?

👉 `/\d+/`

| Símbolo | Significado            |
| ------- | ---------------------- |
| `\d`    | Cualquier número (0-9) |
| `+`     | Uno o más caracteres   |

👉 Busca uno o más números dentro del texto.

---

# 📗 MÉTODOS COMUNES

| Método      | Función                 |
| ----------- | ----------------------- |
| `test()`    | Devuelve true/false     |
| `match()`   | Encuentra coincidencias |
| `replace()` | Reemplaza texto         |

---

# 📗 test()

## 🧠 Verifica si existe una coincidencia.

### 🧪 Ejemplo

```js
let texto = 'hola123';
let regex = /\d+/;

console.log(regex.test(texto));
// true
```

---

# 📗 match()

## 🧠 Devuelve las coincidencias encontradas.

### 🧪 Ejemplo

```js
let texto = 'hola123';

console.log(texto.match(/\d+/));
// ["123"]
```

---

# 📗 replace()

## 🧠 Reemplaza partes del texto.

### 🧪 Ejemplo

```js
let texto = 'hola123';

console.log(texto.replace(/\d+/, ''));
// "hola"
```

---

# 📗 VALIDAR EMAIL

### 🧪 Ejemplo

```js
let email = 'test@mail.com';
let regex = /\S+@\S+\.\S+/;

console.log(regex.test(email));
// true
```

---

## 🧠 ¿Qué significa?

| Patrón | Significado                              |
| ------ | ---------------------------------------- |
| `\S+`  | Uno o más caracteres que no son espacios |
| `@`    | Debe contener @                          |
| `\.`   | Punto literal                            |
| `\S+`  | Dominio                                  |

👉 Se usa para validar formatos de correo electrónico.

---

# 📗 PATRONES COMUNES

| Regex        | Significado         |
| ------------ | ------------------- |
| `/\d/`       | Un número           |
| `/\d+/`      | Uno o más números   |
| `/[a-z]/`    | Una letra minúscula |
| `/[A-Z]/`    | Una letra mayúscula |
| `/[a-zA-Z]/` | Cualquier letra     |
| `/\s/`       | Espacio en blanco   |
| `/\S/`       | No es espacio       |
| `/./`        | Cualquier carácter  |

---

# 📗 CASOS DE USO REALES

## 🧠 Regex se usa para:

✔ Validar emails

✔ Validar contraseñas

✔ Buscar palabras

✔ Limpiar texto

✔ Extraer información

✔ Validar formularios

---

# ⚠️ COSAS IMPORTANTES

🧠 Regex trabaja con patrones

🧠 Puede buscar, validar y reemplazar texto

🧠 `test()` devuelve booleanos

🧠 `match()` devuelve coincidencias

🧠 `replace()` modifica texto

---

# 📌 REGLA RÁPIDA

👉 regex = patrones de texto

👉 sirve para validar y buscar información

---

# ✨ RESUMEN

## 🧠 Regex

👉 Busca texto

👉 Valida formatos

👉 Extrae información

👉 Reemplaza contenido

---

## 🧠 Métodos más usados

👉 `test()` → true / false

👉 `match()` → buscar coincidencias

👉 `replace()` → reemplazar texto

---

## 🚀 Lo más común en proyectos

```js
regex.test(valor);
```

👉 Validar emails

👉 Validar formularios

👉 Validar contraseñas

👉 Filtrar datos de usuario

🔥 Es una de las herramientas más usadas para trabajar con texto en JavaScript.

---
