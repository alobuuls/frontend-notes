# Ejercicios de JavaScript (Nivel Intermedio)

## 1️⃣ Clasificador inteligente

Crea una función que reciba un número y devuelva:

- `"Positivo"`
- `"Negativo"`
- `"Cero"`

**Usa operador ternario.**

---

## 2️⃣ Validación de texto

Crea una función que:

- Reciba un string
- Devuelva `true` si tiene más de 10 caracteres
- Devuelva `false` en caso contrario

```js
function hasMoreThanTenChars(text) {
  return text.length > 10;
}
```

---

## 3️⃣ Capitales del mundo 🌍

Dado:

```js
const capitals = [
  { country: 'Colombia', capital: 'Bogotá', continent: 'America' },
  { country: 'France', capital: 'Paris', continent: 'Europe' },
  { country: 'Japan', capital: 'Tokyo', continent: 'Asia' },
  { country: 'Brazil', capital: 'Brasilia', continent: 'America' },
  { country: 'Germany', capital: 'Berlin', continent: 'Europe' },
];
```

- Imprime todas las capitales
- Crea un array con los países de Europa
- Busca la capital de Japan
- Verifica si existe algún país de Asia

---

## 4️⃣ Números mágicos

Dado:

```js
const numbers = [2, 5, 10, 15, 20, 33];
```

- Crea un array con los números mayores a 10
- Verifica si existe algún número par
- Imprime cada número junto a su índice

---

## 5️⃣ Perfil dinámico

Crea una función que:

- Reciba un objeto `person`
- Reciba un callback

El callback debe decidir qué mensaje mostrar.

Ejemplo:

```js
processPerson(person, callback);
```

---

## 6️⃣ Buscador universal

Crea una función que:

- Reciba un array de objetos
- Reciba una `key`
- Reciba un `value`
- Devuelva el objeto encontrado o un mensaje personalizado

---

## 7️⃣ Cuenta regresiva ⏳

Crea una función que:

- Reciba un número
- Imprima una cuenta regresiva cada segundo
- Termine con `"🚀 Despegue!"`

**Usa `setInterval`.**

---

## 8️⃣ Mensajes programados

Crea una función que:

- Reciba un mensaje
- Lo muestre después de 3 segundos

---

## 9️⃣ Sistema de estudiantes

Dado:

```js
const students = [
  { name: 'Ana', grade: 8 },
  { name: 'Luis', grade: 4 },
  { name: 'Sofia', grade: 9 },
  { name: 'Pedro', grade: 6 },
];
```

- Obtén los estudiantes aprobados (`grade >= 6`)
- Verifica si todos aprobaron
- Busca al primer estudiante reprobado
- Imprime un mensaje por estudiante:

```txt
Ana aprobó
Luis reprobó
```

---

## 🔟 Reto final – nivel crack 🧨

Crea una función que reciba un continente y devuelva:

```js
{
  totalCountries: X,
  capitals: [...],
  hasMoreThan3: true / false
}
```

**Usando el array `capitals`.**

---

## 🏆 BONUS MENTAL (importantísimo)

Explica con tus propias palabras:

- Diferencia entre `filter()` y `find()`
- Cuándo usar `some()`
- Qué es un callback

👉 Si puedes explicarlo sin leer apuntes, ya estás pensando como programadora.
