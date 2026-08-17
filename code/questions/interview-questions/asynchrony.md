# ⏱️ 8. ASINCRONÍA

## 📑 ÍNDICE

1. [❓ 1. ¿Qué es una Promise?](#-1-qué-es-una-promise)
2. [❓ 2. ¿Qué estados tiene una Promise?](#-2-qué-estados-tiene-una-promise)
3. [❓ 3. ¿Qué diferencia hay entre `then/catch` y `async/await`?](#-3-qué-diferencia-hay-entre-thencatch-y-asyncawait)
4. [❓ 4. ¿Qué hace `async`?](#-4-qué-hace-async)
5. [❓ 5. ¿Qué hace `await`?](#-5-qué-hace-await)
6. [❓ 6. ¿Cómo manejarías errores en `async/await`?](#-6-cómo-manejarías-errores-en-asyncawait)
7. [❓ 7. ¿Qué es `Promise.all()`?](#-7-qué-es-promiseall)
8. [❓ 8. ¿Qué diferencia hay entre `Promise.all()`, `allSettled()`, `race()` y `any()`?](#-8-qué-diferencia-hay-entre-promiseall-allsettled-race-y-any)
9. [❓ 9. ¿Qué es el Event Loop?](#-9-qué-es-el-event-loop)
10. [❓ 10. ¿Qué ocurre cuando haces una petición HTTP asíncrona?](#-10-qué-ocurre-cuando-haces-una-petición-http-asíncrona)
11. [🚨 Pregunta trampa: ¿`await` bloquea JavaScript?](#-pregunta-trampa-await-bloquea-javascript)
12. [🧠 Resumen para memorizar](#-resumen-para-memorizar)
13. [🔥 Las 5 cosas que tienes que saber sí o sí](#-las-5-cosas-que-tienes-que-saber-sí-o-sí)


# ❓ 1. ¿QUÉ ES UNA PROMISE?

Una `Promise` representa el **resultado futuro de una operación asíncrona**.

> 💡 "Todavía no tengo el resultado, pero te prometo que eventualmente tendré un resultado o un error."

Por ejemplo:

```ts
const promise = fetch('/api/users');
```

La petición HTTP no termina inmediatamente. `fetch()` devuelve una Promise.

Una Promise puede:

```text
pendiente
   ↓
 ┌───────────┐
 ↓           ↓
fulfilled   rejected
```

| Estado      | Significado               |
| ----------- | ------------------------- |
| `pending`   | todavía está ejecutándose |
| `fulfilled` | terminó correctamente     |
| `rejected`  | terminó con error         |

### 🎯 En entrevista

> "Una Promise es un objeto que representa el resultado eventual de una operación asíncrona. Puede estar pendiente, cumplida o rechazada."

---

# ❓ 2. ¿QUÉ ESTADOS TIENE UNA PROMISE?

Una Promise tiene **tres estados principales**:

### 🟡 `pending`

La operación todavía no ha terminado.

```text
Promise
   ↓
pending
```

### 🟢 `fulfilled`

La operación terminó correctamente.

```text
Promise
   ↓
fulfilled
   ↓
resultado
```

### 🔴 `rejected`

La operación terminó con un error.

```text
Promise
   ↓
rejected
   ↓
error
```

### 📌 Importante

Una Promise empieza como:

```text
pending
```

y posteriormente pasa a:

```text
fulfilled
```

o:

```text
rejected
```

> ⚠️ Una vez que terminó, **no vuelve a cambiar de estado**.

---

# ❓ 3. ¿QUÉ DIFERENCIA HAY ENTRE `then/catch` Y `async/await`?

Ambos permiten trabajar con Promises.

La diferencia principal es **la sintaxis y la forma en la que estructuramos el código**.

## 🔹 `then()` / `catch()`

```ts
fetch('/api/users')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
```

`then()` maneja el resultado exitoso.

`catch()` maneja errores.

---

## 🔹 `async/await`

```ts
async function getUsers() {
  try {
    const response = await fetch('/api/users');
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

La operación sigue siendo asíncrona.

Lo que cambia es la forma de escribirla.

### 🧠 Comparación

| `then/catch`                          | `async/await`                               |
| ------------------------------------- | ------------------------------------------- |
| estilo basado en callbacks de Promise | sintaxis más parecida al código síncrono    |
|                                       | suele ser más legible para flujos complejos |

> 🚨 **Importante:** `async/await` **no convierte una operación asíncrona en síncrona**.
> Simplemente proporciona una forma más cómoda de trabajar con Promises.

### 🎯 En entrevista

> "`then/catch` y `async/await` trabajan con Promises. Prefiero `async/await` cuando tengo varios pasos asíncronos porque suele hacer el código más legible y facilita el manejo de errores con `try/catch`."

---

# ❓ 4. ¿QUÉ HACE `async`?

La palabra clave `async` indica que una función es **asíncrona y siempre devuelve una Promise**.

```ts
async function getName() {
  return 'Ana';
}
```

Aunque hagamos:

```ts
return 'Ana';
```

la función realmente devuelve:

```ts
Promise<string>
```

Podemos comprobarlo:

```ts
getName().then(name => {
  console.log(name);
});
```

### 🔹 ¿Qué ocurre si retorna una Promise?

```ts
async function getUser() {
  return Promise.resolve({
    name: 'Ana'
  });
}
```

El resultado sigue siendo una Promise.

### 🎯 En entrevista

> "`async` hace que una función siempre devuelva una Promise y permite utilizar `await` dentro de ella."

---

# ❓ 5. ¿QUÉ HACE `await`?

`await` permite **esperar el resultado de una Promise dentro de una función `async`**.

```ts
async function getUser() {
  const response = await fetch('/api/user');

  console.log(response);
}
```

La línea:

```ts
const response = await fetch('/api/user');
```

significa conceptualmente:

> "Espera el resultado de esta Promise antes de continuar con esta función."

### ⚠️ Pero cuidado

`await` **no bloquea todo JavaScript**.

No congela el navegador ni detiene el Event Loop.

Lo que se pausa es la ejecución de **esa función async** hasta que la Promise se resuelve o rechaza.

> 🚨 Esto es extremadamente importante para entrevistas.

---

# ❓ 6. ¿CÓMO MANEJARÍAS ERRORES EN `async/await`?

Normalmente utilizaría:

```ts
try/catch
```

Por ejemplo:

```ts
async function getUsers() {
  try {
    const response = await fetch('/api/users');
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}
```

El `try` contiene la operación.

El `catch` captura errores.

También puedes utilizar `finally`:

```ts
async function getUsers() {
  try {
    const response = await fetch('/api/users');
    return await response.json();
  } catch (error) {
    console.error(error);
  } finally {
    console.log('Request finished');
  }
}
```

`finally` se ejecuta independientemente de si hubo éxito o error.

### 🎯 En entrevista

> "Con `async/await` normalmente manejo errores utilizando `try/catch`, y puedo usar `finally` para lógica que debe ejecutarse independientemente del resultado."

# ❓ 7. ¿QUÉ ES `Promise.all()`?

`Promise.all()` permite ejecutar varias Promises y **esperar a que todas terminen correctamente**.

```ts
const usersPromise = fetch('/api/users');
const postsPromise = fetch('/api/posts');
const commentsPromise = fetch('/api/comments');

const results = await Promise.all([
  usersPromise,
  postsPromise,
  commentsPromise
]);
```

El resultado contiene los resultados **en el mismo orden en que pasaste las Promises**.

```text
Promise 1 ────────┐
Promise 2 ────────┼──→ Promise.all()
Promise 3 ────────┘
```

> 🚨 **Importante:** Si **una Promise falla**, `Promise.all()` rechaza toda la operación.

```ts
await Promise.all([
  getUsers(),
  getPosts(),
  getComments()
]);
```

Si `getPosts()` falla:

```text
getUsers()    → ✅
getPosts()    → ❌
getComments() → ✅

Promise.all() → ❌ rejected
```

### 🎯 ¿Cuándo utilizarlo?

Cuando necesitas **todos los resultados** y si uno falla, el conjunto deja de ser válido.

Por ejemplo:

```ts
const [users, posts] = await Promise.all([
  getUsers(),
  getPosts()
]);
```

Es mejor que hacer:

```ts
const users = await getUsers();
const posts = await getPosts();
```

si ambas peticiones son independientes.

¿Por qué?

Porque con `Promise.all()` pueden ejecutarse de forma concurrente.

---

# ❓ 8. ¿QUÉ DIFERENCIA HAY ENTRE `Promise.all()`, `allSettled()`, `race()` Y `any()`?

🔥 **Esta es una pregunta MUY buena de entrevista.**

Los cuatro métodos trabajan con múltiples Promises, pero tienen comportamientos diferentes.

---

## 🟢 `Promise.all()`

> **Necesito que todas tengan éxito.**

```ts
Promise.all([
  promise1,
  promise2,
  promise3
]);
```

Si todas tienen éxito:

```text
✅ ✅ ✅
 ↓
fulfilled
```

Si una falla:

```text
✅ ❌ ✅
 ↓
rejected
```

### 🎯 Uso típico

Cuando necesitas todos los resultados.

---

## 🟡 `Promise.allSettled()`

> **Quiero saber cómo terminó CADA Promise, independientemente de si tuvo éxito o error.**

```ts
const results = await Promise.allSettled([
  promise1,
  promise2,
  promise3
]);
```

Podrías obtener:

```ts
[
  { status: 'fulfilled', value: ... },
  { status: 'rejected', reason: ... },
  { status: 'fulfilled', value: ... }
]
```

Aunque una falle, las demás continúan y obtienes información sobre todas.

### 🎯 Uso típico

Cuando quieres un reporte completo.

Por ejemplo:

```text
Enviar 100 emails
       ↓
¿Cuáles funcionaron?
¿Cuáles fallaron?
```

---

## 🔵 `Promise.race()`

> **Me interesa la primera Promise que termine.**

```ts
const result = await Promise.race([
  promise1,
  promise2,
  promise3
]);
```

La primera que termine determina el resultado.

Puede ser éxito:

```text
Promise 1 → ⏳
Promise 2 → ✅ ← gana
Promise 3 → ⏳
```

Entonces:

```text
race() → fulfilled
```

Pero también puede ser:

```text
Promise 1 → ⏳
Promise 2 → ❌ ← termina primero
Promise 3 → ⏳
```

Entonces:

```text
race() → rejected
```

> 📌 **Importante:** `race()` significa **la primera en terminar**, no la primera en tener éxito.

---

## 🟣 `Promise.any()`

> **Me interesa la primera Promise que tenga éxito.**

```ts
const result = await Promise.any([
  promise1,
  promise2,
  promise3
]);
```

Por ejemplo:

```text
Promise 1 → ❌
Promise 2 → ❌
Promise 3 → ✅
                 ↓
              Promise.any()
                 ↓
                éxito
```

Los errores individuales no hacen que falle mientras exista alguna que tenga éxito.

Solo rechaza si **todas** fallan.

---

# 🧠 TABLA DEFINITIVA

| Método                 | ¿Cuándo termina?              | ¿Si una falla?                  |
| ---------------------- | ----------------------------- | ------------------------------- |
| `Promise.all()`        | Cuando todas terminan         | ❌ Rechaza                       |
| `Promise.allSettled()` | Cuando todas terminan         | ✅ Devuelve todos los estados    |
| `Promise.race()`       | Cuando termina la primera     | Depende de cuál termine primero |
| `Promise.any()`        | Cuando la primera tiene éxito | Solo falla si todas fallan      |

### 🧠 Memorización rápida

```text
ALL
→ quiero TODAS

ALL SETTLED
→ quiero saber cómo terminaron TODAS

RACE
→ gana la PRIMERA EN TERMINAR

ANY
→ gana la PRIMERA EN TENER ÉXITO
```

> 🔥 **Esta diferencia entre `race()` y `any()` es especialmente importante:**

```text
race() → primera en TERMINAR
any()  → primera en TENER ÉXITO
```
# ❓ 9. ¿QUÉ ES EL EVENT LOOP?

🔥 Esta probablemente es **la pregunta más importante de toda esta sección**.

JavaScript es un lenguaje de ejecución principalmente **single-threaded**: tiene un único hilo principal para ejecutar código JavaScript.

Entonces surge la pregunta:

> 💡 ¿Cómo puede manejar peticiones HTTP, timers y otras operaciones sin quedarse bloqueado?

Ahí entra el **Event Loop**.

---

## 🧠 Conceptualmente tenemos:

```text
┌─────────────────┐
│   Call Stack    │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│ Web APIs /      │
│ entorno runtime │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│ Queues          │
│                 │
│ Microtasks      │
│ Macrotasks      │
└────────┬────────┘
         │
         ↓
      Event Loop
         │
         ↓
    Call Stack
```

### 🔄 Idea fundamental

```text
JavaScript ejecuta código
        ↓
operación asíncrona
        ↓
el runtime se encarga de ella
        ↓
cuando termina → tarea en una cola
        ↓
Event Loop
        ↓
Call Stack disponible
        ↓
ejecuta la tarea
```

---

## 🔹 Call Stack

Es donde JavaScript ejecuta las funciones.

Por ejemplo:

```ts
function one() {
  two();
}

function two() {
  console.log('Hello');
}

one();
```

Conceptualmente:

```text
Call Stack

two()
one()
global
```

Las funciones entran y salen del stack siguiendo el principio **LIFO**:

```text
Last In
First Out
```

---

## 🔹 Web APIs / Runtime

El navegador proporciona APIs para operaciones que no son ejecutadas directamente por el motor JavaScript.

Por ejemplo:

```text
setTimeout()
fetch()
DOM events
```

Cuando haces:

```ts
setTimeout(() => {
  console.log('Hello');
}, 1000);
```

el timer no permanece ocupando el Call Stack durante un segundo.

El entorno del navegador se encarga del timer.

---

## 🔹 Queues

Cuando una operación asíncrona termina, su callback puede entrar en una cola.

Hay diferentes tipos de tareas.

### 🟣 Microtask Queue

Aquí entran, entre otras:

```text
Promise.then()
Promise.catch()
Promise.finally()
await
```

### 🔵 Task / Macrotask Queue

Aquí encontramos tareas como:

```text
setTimeout
setInterval
eventos del navegador
```

---

# ❓ 10. ¿QUÉ OCURRE CUANDO HACES UNA PETICIÓN HTTP ASÍNCRONA?

Esta pregunta combina prácticamente todo lo anterior.

Supongamos:

```ts
async function getUsers() {
  const response = await fetch('/api/users');

  const users = await response.json();

  console.log(users);
}

getUsers();
```

### 1️⃣ Se ejecuta `getUsers()`

JavaScript entra en la función.

```text
getUsers()
```

### 2️⃣ Se ejecuta `fetch()`

```ts
fetch('/api/users');
```

`fetch()` devuelve inmediatamente una Promise.

La petición HTTP se gestiona de forma asíncrona por el entorno/runtime.

JavaScript **no se queda bloqueado esperando la respuesta**.

### 3️⃣ Llega `await`

```ts
const response = await fetch('/api/users');
```

La función `async` queda suspendida en ese punto hasta que la Promise se resuelva o rechace.

Pero el **Call Stack queda libre para ejecutar otro JavaScript**.

### 4️⃣ El servidor responde

Cuando llega la respuesta, la Promise de `fetch()` se resuelve.

La continuación de la función se programa para ejecutarse posteriormente.

En el caso de Promises, esto está relacionado con la **Microtask Queue**.

### 5️⃣ El Event Loop interviene

Cuando el Call Stack está libre, el Event Loop permite que la continuación pendiente se ejecute.

Entonces:

```ts
const response = ...
```

puede continuar.

### 6️⃣ Se ejecuta `response.json()`

```ts
const users = await response.json();
```

Esto también devuelve una Promise.

La función vuelve a suspenderse hasta que esa Promise se resuelva.

### 7️⃣ Finalmente

Cuando todo termina:

```ts
console.log(users);
```

se ejecuta y tenemos los datos.

---

# 🧠 TODO EL FLUJO

```text
fetch()
   ↓
Promise pendiente
   ↓
Petición HTTP
   ↓
JavaScript continúa ejecutando otras tareas
   ↓
Servidor responde
   ↓
Promise se resuelve
   ↓
Microtask Queue
   ↓
Event Loop
   ↓
Call Stack disponible
   ↓
continúa async function
   ↓
response.json()
   ↓
Promise
   ↓
datos
```

### 🎯 Respuesta de entrevista

> "Cuando hago una petición HTTP asíncrona, `fetch` devuelve una Promise. La operación de red se maneja fuera del Call Stack, permitiendo que JavaScript continúe ejecutando otras tareas. Cuando la Promise se resuelve, la continuación asociada se programa como una microtask y el Event Loop la ejecuta cuando el Call Stack está disponible."

🔥 Esa es una respuesta bastante sólida para una entrevista frontend.

---

# 🚨 PREGUNTA TRAMPA: ¿`AWAIT` BLOQUEA JAVASCRIPT?

**No.**

Esto es importantísimo.

```ts
const response = await fetch('/api/users');
```

`await` hace que **esa función async espere**, pero no bloquea todo el hilo de JavaScript.

Mientras la petición está pendiente, el navegador puede seguir procesando otras cosas.

```text
async function
     ↓
   await
     ↓
función suspendida
     ↓
Call Stack libre
     ↓
otras tareas pueden ejecutarse
```

---

# 🧠 🔥 RESUMEN PARA MEMORIZAR

| Concepto               | Idea clave                                                                                                                                                       |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise`              | representa el resultado futuro de una operación asíncrona                                                                                                        |
| Estados                | `pending` → `fulfilled` → `rejected`                                                                                                                             |
| `async`                | función que devuelve Promise                                                                                                                                     |
| `await`                | espera una Promise dentro de una función async; no bloquea todo JavaScript                                                                                       |
| `try/catch`            | manejo de errores con async/await                                                                                                                                |
| `Promise.all()`        | todas deben tener éxito                                                                                                                                          |
| `Promise.allSettled()` | quiero conocer el resultado de todas                                                                                                                             |
| `Promise.race()`       | primera en terminar                                                                                                                                              |
| `Promise.any()`        | primera en tener éxito                                                                                                                                           |
| `Event Loop`           | coordina Call Stack y tareas asíncronas                                                                                                                          |
| HTTP async             | `fetch` devuelve Promise → operación de red ocurre de forma asíncrona → Promise se resuelve → continuación pasa por microtasks → Event Loop permite su ejecución |

---

## 🔥 LAS 5 COSAS QUE TIENES QUE SABER SÍ O SÍ

Si en una entrevista te dicen **"explícame asincronía en JavaScript"**, intenta conectar estas cinco:

```text
1. Promise
      ↓
2. async / await
      ↓
3. try / catch
      ↓
4. Promise.all()
      ↓
5. Event Loop + Microtask Queue
```

Y si te preguntan **"¿por qué JavaScript puede hacer peticiones HTTP sin bloquear la interfaz?"**, la idea central es:

> 💡 **Porque la operación asíncrona no mantiene ocupado el Call Stack mientras espera; el runtime gestiona la operación y, cuando termina, el resultado vuelve al flujo de JavaScript mediante las colas y el Event Loop.**
