# 📘 "use strict" EN JAVASCRIPT

## 🧠 "use strict" activa el modo estricto en JavaScript, haciendo que el código sea más seguro y evitando errores comunes.

---

# 📗 ¿CÓMO SE USA?

```js
'use strict';

function ejemplo() {
  'use strict';
}
```

🧠 Se puede usar al inicio del archivo o dentro de una función.

---

# 📗 ¿QUÉ HACE "use strict"?

## 🧠 Cambia la forma en que JavaScript se comporta:

✔ Evita errores silenciosos

✔ Obliga a escribir código más limpio

✔ Prohíbe malas prácticas

✔ Hace el código más seguro

---

# 📗 EJEMPLOS DE CAMBIOS CON STRICT MODE

---

# ❌ 1. No permite variables sin declarar

```js
'use strict';

x = 10; // ERROR
```

🧠 Debes usar `let`, `const` o `var`.

```js
let x = 10;
```

---

# ❌ 2. No permite duplicar parámetros

```js
'use strict';

function sumar(a, a) {
  return a + a;
}
// ERROR
```

---

# ❌ 3. this en funciones normales es undefined

```js
'use strict';

function test() {
  console.log(this);
}

test();
// undefined
```

---

# ❌ 4. No permite borrar variables o funciones

```js
'use strict';

let nombre = 'Ana';
delete nombre; // ERROR
```

---

# 📗 ¿POR QUÉ USAR "use strict"?

## 🧠 Porque ayuda a escribir código más seguro y limpio.

✔ Detecta errores temprano

✔ Evita bugs difíciles

✔ Mejora buenas prácticas

---

# 📗 DIFERENCIA ENTRE MODO NORMAL Y STRICT MODE

| Situación                | Modo Normal      | Strict Mode |
| ------------------------ | ---------------- | ----------- |
| Variable sin declarar    | ✅ Permitido     | ❌ Error    |
| Parámetros duplicados    | ✅ Permitido     | ❌ Error    |
| `this` en función normal | Objeto global    | `undefined` |
| Borrar variables         | Puede intentarlo | ❌ Error    |
| Errores silenciosos      | Sí               | No          |

---

# 📗 CASO REAL

### ❌ Sin strict mode

```js
nombre = 'Ana';

console.log(nombre);
```

🧠 JavaScript crea una variable global accidentalmente.

---

### ✅ Con strict mode

```js
'use strict';

nombre = 'Ana';
// ERROR
```

🧠 El error aparece inmediatamente.

---

# 📗 STRICT MODE Y THIS

### ❌ Modo normal

```js
function mostrar() {
  console.log(this);
}

mostrar();
```

👉 Apunta al objeto global.

---

### ✅ Strict mode

```js
'use strict';

function mostrar() {
  console.log(this);
}

mostrar();
```

👉 Devuelve `undefined`.

---

# ⚠️ COSAS IMPORTANTES

🧠 `"use strict"` debe escribirse como string

🧠 Suele colocarse al inicio del archivo

🧠 Hace que JavaScript sea más estricto

🧠 Ayuda a detectar errores antes

🧠 Es una buena práctica profesional

---

# 📗 REGLA RÁPIDA 🧠

👉 `"use strict"` = modo estricto

👉 evita errores silenciosos

👉 obliga a buenas prácticas

👉 hace JS más seguro

---

# ✨ RESUMEN

## 🧠 Strict Mode

👉 Activa reglas más estrictas en JavaScript

👉 Hace el código más seguro

👉 Evita comportamientos inesperados

👉 Detecta errores rápidamente

---

## 🧠 Beneficios principales

✅ Variables declaradas correctamente

✅ Menos bugs

✅ Mejor mantenimiento

✅ Código más profesional

---

## 🚀 Lo más importante para recordar

```js
'use strict';
```

👉 Colócalo al inicio del archivo

👉 Ayuda a escribir JavaScript moderno y seguro

👉 Es una herramienta clave para evitar errores difíciles de detectar 🔥

---
