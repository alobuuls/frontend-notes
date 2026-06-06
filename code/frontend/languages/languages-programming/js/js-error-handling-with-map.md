# 📘 MANEJO DE ERRORES CON MAPA (ERROR HANDLING MAP)

## 🧠 Es una técnica donde usamos un objeto (mapa) para manejar diferentes tipos de errores de forma organizada.

👉 En lugar de muchos `if/else`, usamos un “diccionario de errores”.

---

# 📗 MAPA DE ERRORES

```js
const ERROR_HANDLING = {
  ErrorUI: (err) => err.message,
  ErrorTimeOut: () => 'Tu conexión es demasiado lenta, reintenta mas tarde',
  ErrorServer: () => 'Hubo un problema con el servidor',
  default: () => 'Error inesperado',
};
```

## 🧠 Cada clave representa un tipo de error y cada valor es una función que devuelve un mensaje.

---

# 📗 FUNCIÓN PRINCIPAL

```js
const main = () => {
  try {
    const user = { name: 'Alo', age: 15 };
    const resp = validation(user);
    return resp;
  } catch (err) {
    console.log(err);

    if (!(err instanceof Error)) {
      err = new ErrorUnexpected();
    }

    const handler = ERROR_HANDLING[err.name] || ERROR_HANDLING.default;
    const errMsg = handler(err);

    console.log(errMsg);
    return errMsg;
  }
};

main();
```

---

# 📗 FLUJO DEL CÓDIGO 🧠

### 1️⃣ Se ejecuta la función principal

### 2️⃣ Se intenta ejecutar `validation()`

### 3️⃣ Si todo está bien → retorna respuesta

### 4️⃣ Si hay error → entra en `catch`

### 5️⃣ Se identifica el tipo de error

### 6️⃣ Se busca en `ERROR_HANDLING`

### 7️⃣ Se ejecuta el handler correspondiente

### 8️⃣ Se retorna un mensaje final

---

# 📗 INSTANCEOF

## 🧠 Verifica si un objeto pertenece a una clase específica.

---

## 🧪 Ejemplo

```js
if (err instanceof Error) {
  console.log('Es un error válido');
}
```

---

# 📗 FALLBACK (DEFAULT)

## 🧠 Si el error no existe en el mapa, se usa el valor por defecto.

---

## 🧪 Ejemplo

```js
const handler = ERROR_HANDLING[err.name] || ERROR_HANDLING.default;
```

---

# 📗 VENTAJA DE ESTE PATRÓN

✔ Código más limpio

✔ Fácil de escalar

✔ Evita muchos `if/else`

✔ Manejo centralizado de errores

---

# 📗 REGLA RÁPIDA 🧠

👉 error handling = mapa de respuestas

👉 cada error tiene su función

👉 default = fallback

👉 más limpio que `if/else`

---

# ✨ RESUMEN

## 🧠 ¿Qué hace este patrón?

👉 Centraliza la lógica de errores en un único objeto

👉 Asocia cada tipo de error con una función específica

👉 Permite agregar nuevos errores fácilmente

👉 Reduce código repetitivo

---

## 🧠 Conceptos clave

| Concepto         | Función                      |
| ---------------- | ---------------------------- |
| `try`            | Intenta ejecutar código      |
| `catch`          | Captura errores              |
| `instanceof`     | Verifica el tipo de error    |
| `ERROR_HANDLING` | Mapa de errores              |
| `handler`        | Función asociada al error    |
| `default`        | Error por defecto (fallback) |

---

## 🚀 Beneficio principal

👉 En lugar de tener muchos bloques:

```js
if (...) {
} else if (...) {
} else if (...) {
}
```

👉 Se utiliza un mapa de errores mucho más limpio, mantenible y escalable.

---
