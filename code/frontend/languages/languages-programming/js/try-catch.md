# 📘 try, catch

## 🧠 Se usa para manejar errores sin romper el programa.

---

# 📗 try

## 🧠 Código que puede fallar.

---

# 📗 catch

## 🧠 Captura el error si ocurre.

### 🧪 Ejemplo

```js
try {
  let x = y + 1; // error
} catch (error) {
  console.log('Ocurrió un error:', error);
}
```

---

# 📗 ¿CÓMO FUNCIONA?

## 🧠 Flujo de ejecución

1️⃣ Se ejecuta el código dentro de `try`

2️⃣ Si NO ocurre error → continúa normalmente

3️⃣ Si ocurre error → se detiene el `try`

4️⃣ El error pasa automáticamente al `catch`

5️⃣ Se ejecuta el código del `catch`

---

# 📗 OBJETO ERROR

## 🧠 El parámetro `error` contiene información sobre el problema.

### 🧪 Ejemplo

```js
try {
  throw new Error('Algo salió mal');
} catch (error) {
  console.log(error.message);
}
```

---

# ⚠️ COSAS IMPORTANTES

🧠 `try` no evita errores

🧠 Solo permite manejarlos correctamente

🧠 El programa puede seguir funcionando

🧠 Muy usado con APIs, promesas y validaciones

---

# 📌 REGLA RÁPIDA

👉 try → intentar

👉 catch → atrapar error

---

# 📘 VALIDACIÓN DE DATOS EN JAVASCRIPT

## 🧠 La validación sirve para comprobar que los datos son correctos antes de continuar con la ejecución del programa.

Se usa mucho en formularios, APIs y lógica de negocio.

---

# 📗 EJEMPLO DE VALIDACIÓN REAL

```js
const validation = ({ name, age }) => {
  if (!name) throw new ErrorUI('No se ha enviado el nombre');
  if (!age) throw new ErrorUI('No se ha enviado la edad');
  if (age < 18) throw new ErrorUI('Debe ser mayor de edad');

  return 'Bienvenido a https://alo.com';
};
```

---

# 📗 ¿QUÉ ESTÁ PASANDO?

## 🧠 Se está usando destructuring en los parámetros:

```js
{
  (name, age);
}
```

## 🧠 Se valida paso a paso:

✔ Si no hay nombre → error

✔ Si no hay edad → error

✔ Si es menor de 18 → error

Si todo está bien → retorna mensaje de éxito

---

# 📗 THROW NEW ERROR

## 🧠 Sirve para detener la ejecución y lanzar un error.

### 🧪 Ejemplo

```js
throw new Error('Algo salió mal');
```

---

# 📗 FLUJO DE LA FUNCIÓN

1️⃣ Recibe datos

2️⃣ Valida campos

3️⃣ Si hay error → se detiene

4️⃣ Si todo está bien → retorna mensaje

---

# 📗 EJEMPLO DE USO 🧪

```js
try {
  const result = validation({ name: 'Ana', age: 20 });
  console.log(result);
} catch (error) {
  console.log(error.message);
}
```

---

# 📗 ¿QUÉ SUCEDE SI FALLA?

### 🧪 Ejemplo

```js
try {
  const result = validation({ name: '', age: 20 });
  console.log(result);
} catch (error) {
  console.log(error.message);
}
```

### 📤 Resultado

```txt
No se ha enviado el nombre
```

🧠 La ejecución se detiene en el `throw` y pasa directamente al `catch`.

---

# 📗 THROW VS RETURN

| throw                | return               |
| -------------------- | -------------------- |
| Detiene la ejecución | Devuelve un valor    |
| Genera un error      | Indica éxito         |
| Va al catch          | Continúa normalmente |

### 🧪 Ejemplo

```js
if (!name) {
  throw new Error('Nombre requerido');
}

return 'Usuario válido';
```

---

# 📗 VALIDACIÓN TÍPICA DE FORMULARIOS

### 🧪 Ejemplo

```js
const validation = ({ email, password }) => {
  if (!email) throw new Error('Email requerido');
  if (!password) throw new Error('Password requerido');

  return 'Formulario válido';
};
```

🧠 Patrón muy común en aplicaciones web.

---

# ⚠️ COSAS IMPORTANTES

🧠 Validar evita errores futuros

🧠 `throw` detiene la ejecución

🧠 `catch` captura errores

🧠 Los errores deben tener mensajes claros

🧠 Es mejor validar antes de procesar datos

---

# 📗 REGLA RÁPIDA 🧠

👉 validar antes de usar datos

👉 throw = detener ejecución

👉 return = éxito

👉 si falla → error controlado

---

# ✨ RESUMEN

## 🧠 Validación

👉 Comprueba que los datos sean correctos

👉 Evita errores inesperados

👉 Protege la lógica del programa

---

## 🧠 Manejo de errores

👉 `try` intenta ejecutar código

👉 `throw` lanza un error

👉 `catch` captura el error

👉 Permite que la aplicación siga funcionando

---

## 🚀 Patrón profesional

```js
try {
  const result = validation(data);
  return result;
} catch (error) {
  console.log(error.message);
}
```

👉 Validar primero

👉 Lanzar errores cuando algo falle

👉 Capturarlos con `try/catch`

👉 Mantener el código seguro y predecible 🔥

---
