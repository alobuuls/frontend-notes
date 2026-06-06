# 📘 PROMESAS EN JAVASCRIPT (Promise)

## 🔒 Reglas de oro

👉 Una promesa es una cadena ordenada.

👉 Un error rompe la cadena y salta al `catch`.

👉 Si la promesa falla en cualquier punto, todos los `then` se ignoran hasta llegar al `catch`.

---

## 🧠 Una promesa es un objeto que representa un valor que estará disponible en el futuro (o fallará).

### 📌 Una promesa tiene 3 estados:

👉 `pending` → en espera

👉 `fulfilled` → resuelta

👉 `rejected` → rechazada

---

# 📗 ¿POR QUÉ EXISTEN LAS PROMESAS?

## 🧠 Antes se usaban muchos callbacks anidados:

```js
paso1(() => {
  paso2(() => {
    paso3(() => {
      paso4(() => { ... })
    })
  })
})
```

## 🧠 Esto se llama “callback hell”.

👉 Las promesas permiten escribir código más limpio y fácil de leer.

---

# 📗 CREAR UNA PROMESA

```js
const promesa = new Promise((resolve, reject) => {
  if (todoSaleBien) {
    resolve('Éxito');
  } else {
    reject('Error');
  }
});
```

---

# 📗 CONSUMIR UNA PROMESA

```js
promesa
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log('Terminó'));
```

---

# 📗 EJEMPLO SIMPLE CON setTimeout

```js
const esperar = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Listo!');
    }, 1000);
  });
};

esperar().then((msg) => console.log(msg));
```

---

# 📗 ENCADENAR PROMESAS

```js
step1()
  .then(step2)
  .then(step3)
  .then(step4)
  .catch((err) => console.log(err));
```

## 🧠 Cada `.then` recibe el resultado del paso anterior.

---

# 📗 Promise.all

## 🧠 Ejecuta varias promesas en paralelo y espera a que todas terminen.

```js
Promise.all([p1(), p2(), p3()])
  .then((values) => console.log(values))
  .catch((err) => console.log(err));
```

---

# 📗 async / await

## 🧠 Es una forma más limpia de usar promesas.

```js
const run = async () => {
  try {
    const a = await step1();
    const b = await step2(a);
    await step3(b);
  } catch (err) {
    console.log(err);
  }
};
```

---

# 📘 FRASE CLAVE

## 🧠 Una promesa es un valor que todavía no existe, pero existirá en el futuro.

---

# ⚠️ COSAS IMPORTANTES

🧠 Una promesa solo puede resolverse o rechazarse una vez

🧠 `.then()` maneja resultados exitosos

🧠 `.catch()` maneja errores

🧠 `.finally()` se ejecuta siempre

🧠 Un error rompe la cadena y salta al `catch`

---

# 📗 FLUJO DE UNA PROMESA

```text
Promise
   │
   ▼
pending
   │
   ├── fulfilled ──► then()
   │
   └── rejected ───► catch()
```

---

# 📗 Promise.all

## 🧠 Comportamiento

```text
p1 ─┐
p2 ─┼──► Promise.all() ─► resultado
p3 ─┘
```

👉 Espera a que TODAS terminen

👉 Si una falla, todo falla

👉 Ideal para peticiones paralelas

---

# 📗 async / await VS then

## 🧪 Con then

```js
step1()
  .then((result) => step2(result))
  .then((result) => step3(result))
  .catch((err) => console.log(err));
```

---

## 🧪 Con async / await

```js
try {
  const a = await step1();
  const b = await step2(a);
  await step3(b);
} catch (err) {
  console.log(err);
}
```

## 🧠 Ambos hacen lo mismo.

👉 `async/await` suele ser más fácil de leer.

---

# 📗 REGLA RÁPIDA 🧠

👉 `Promise` → valor futuro

👉 `resolve()` → éxito

👉 `reject()` → error

👉 `.then()` → resultado

👉 `.catch()` → error

👉 `.finally()` → siempre se ejecuta

👉 `Promise.all()` → varias promesas en paralelo

👉 `async/await` → sintaxis moderna para promesas

---

# ✨ RESUMEN

## 🧠 Promesas

👉 Resuelven el problema del callback hell

👉 Representan operaciones asíncronas

👉 Permiten encadenar tareas fácilmente

👉 Tienen estados (`pending`, `fulfilled`, `rejected`)

---

## 🚀 Lo más importante para entrevistas

✅ `Promise`

✅ `.then()`

✅ `.catch()`

✅ `Promise.all()`

✅ `async / await`

✅ Manejo de errores con `try/catch`

👉 Son conceptos fundamentales en JavaScript moderno y desarrollo de APIs 🔥

---
