# 📘 JSON.stringify() & JSON.parse()

## 🧠 JSON es un formato para intercambiar datos entre JavaScript y otros sistemas.

👉 Se usa mucho en APIs y almacenamiento de datos.

---

# 📗 JSON.stringify()

## 🧠 Convierte un OBJETO JavaScript a TEXTO (JSON).

---

## 🧪 Ejemplo

```js
let user = {
  name: 'Ana',
  age: 20,
};

let json = JSON.stringify(user);

console.log(json);
// '{"name":"Ana","age":20}'
```

---

# 📗 ¿PARA QUÉ SIRVE?

✔ Enviar datos a un servidor

✔ Guardar datos como texto

✔ Convertir objetos en formato legible para APIs

---

# 📗 JSON.parse()

## 🧠 Convierte un TEXTO JSON a OBJETO JavaScript.

---

## 🧪 Ejemplo

```js
let json = '{"name":"Ana","age":20}';

let user = JSON.parse(json);

console.log(user.name);
// "Ana"
```

---

# 📗 ¿PARA QUÉ SIRVE?

✔ Recibir datos de una API

✔ Convertir texto en objeto usable

✔ Trabajar con datos almacenados como JSON

---

# 📗 DIFERENCIA CLAVE 🧠

## 🧠 JSON.stringify()

👉 Objeto → Texto

---

## 🧠 JSON.parse()

👉 Texto → Objeto

---

# 📗 EJEMPLO COMPLETO 🔁

```js
let user = {
  name: 'Ana',
  age: 20,
};

// convertir a JSON
let json = JSON.stringify(user);

// volver a objeto
let newUser = JSON.parse(json);

console.log(newUser);
// { name: "Ana", age: 20 }
```

---

# 📗 REGLA RÁPIDA 🧠

👉 stringify → objeto a texto

👉 parse → texto a objeto

👉 se usan para APIs y datos externos

---

# ✨ RESUMEN

## 🧠 Flujo típico

```text
Objeto JavaScript
        ↓
 JSON.stringify()
        ↓
   Texto JSON
        ↓
   JSON.parse()
        ↓
Objeto JavaScript
```

---

## 🧠 Cuándo usar cada uno

| Método             | Convierte           | Retorna  |
| ------------------ | ------------------- | -------- |
| `JSON.stringify()` | Objeto → Texto JSON | `string` |
| `JSON.parse()`     | Texto JSON → Objeto | `object` |

---

## 🚀 Importante

👉 Las APIs normalmente envían y reciben datos en formato JSON

👉 `JSON.stringify()` prepara datos para enviarlos

👉 `JSON.parse()` convierte la respuesta en un objeto utilizable

👉 Son dos de los métodos más utilizados al trabajar con APIs y almacenamiento de datos

---
