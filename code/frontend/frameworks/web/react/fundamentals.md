# 🧠 REACT FUNDAMENTALS

Este documento construye el **modelo mental básico de React**. Antes de aprender hooks, routing, formularios o consumo de APIs, necesitas entender cómo React piensa y cómo transforma el estado de una aplicación en una interfaz.

La idea central es:

```text
🧠 STATE
   ↓
⚛️ REACT
   ↓
🎨 UI
   ↓
🔄 STATE CHANGES
   ↓
🔄 RE-RENDER
   ↓
🎨 UI UPDATED
```

---
## 📚 ÍNDICE — REACT FUNDAMENTALS

1. 🧠 [¿Qué es React?](#1️⃣-qué-es-react)
2. ⚛️ [React vs Angular](#2️⃣-️react-vs-angular)
3. 🧩 [Component-Based UI](#3️⃣-component-based-ui)
4. [JSX](#4️⃣-jsx)
5. 🎨 [Rendering](#5️⃣-rendering)
6. 🔄 [Re-Render](#6️⃣-re-render)
7. 🌳 [Virtual DOM](#7️⃣-virtual-dom)
8. 🔄 [Reconciliation](#8️⃣-reconciliation)
9. 🎯 [Conditional Rendering](#9️⃣-conditional-rendering)
10. 📋 [Lists & Keys](#-lists--keys)
11. 🖱️ [Eventos](#1️⃣1️⃣-eventos)
12. 🧩 [Fragmentos](#1️⃣2️⃣-fragmentos)
13. 🧠 [Modelo Mental de React](#-modelo-mental-de-react)
14. 🏆 [La idea que debes recordar](#-la-idea-que-debes-recordar)
---

# 1️⃣ 🧠 ¿QUÉ ES REACT?

**React** es una biblioteca de JavaScript para construir interfaces de usuario mediante **componentes reutilizables**.

Su objetivo principal es permitir construir interfaces dividiéndolas en piezas independientes.

Por ejemplo, una aplicación podría estar formada por:

```text
                    ⚛️ APP
                      │
        ┌─────────────┼─────────────┐
        ▼             ▼             ▼
     Header         Main          Footer
                      │
              ┌───────┼───────┐
              ▼       ▼       ▼
            Card    Card    Card
```

Cada componente puede tener:

* estructura
* lógica
* estado
* eventos
* propiedades

### 🧠 Idea principal

En React describes **cómo debería verse la interfaz según los datos actuales**.

Por ejemplo:

```text
Estado:
count = 0

        ↓

UI:
"Contador: 0"

        ↓
Usuario hace click

        ↓

Estado:
count = 1

        ↓

React actualiza la UI

        ↓

"Contador: 1"
```

No necesitas modificar manualmente el DOM cada vez.

React se encarga de actualizar la interfaz correspondiente.

---

# 2️⃣ ⚛️ REACT VS ANGULAR

React y Angular permiten construir aplicaciones web modernas, pero tienen filosofías diferentes.

| Característica | ⚛️ React                     | 🅰️ Angular                    |
| -------------- | ---------------------------- | ------------------------------ |
| Tipo           | Biblioteca de UI             | Framework                      |
| Lenguaje       | JavaScript / TypeScript      | TypeScript                     |
| UI             | Componentes                  | Componentes                    |
| Templates      | JSX                          | HTML + Angular Templates       |
| Estado         | Hooks / librerías externas   | Servicios, Signals, RxJS, etc. |
| Routing        | Librería externa normalmente | Angular Router                 |
| HTTP           | `fetch`, Axios, etc.         | `HttpClient`                   |
| Forms          | Librerías / React APIs       | Forms integrados               |
| DI             | No es central en React       | Dependency Injection integrada |
| Arquitectura   | Más flexible                 | Más estructurada               |
| Ecosistema     | Muy amplio                   | Muy integrado                  |

### 🧠 Diferencia conceptual

Angular proporciona muchas piezas dentro del propio framework:

```text
🅰️ Angular
│
├── Components
├── Router
├── HttpClient
├── Forms
├── Dependency Injection
├── Signals
└── RxJS
```

React se concentra principalmente en la UI:

```text
⚛️ React
│
└── UI / Components
       │
       ├── Router → normalmente externo
       ├── HTTP → fetch / Axios / etc.
       ├── Forms → soluciones adicionales
       └── State → Hooks / librerías
```

### 🎯 Importante

Esto no significa que React sea "mejor" o Angular sea "mejor".

React ofrece más libertad para elegir herramientas.

Angular ofrece más estructura y convenciones desde el principio.

---

# 3️⃣ 🧩 COMPONENT-BASED UI

React construye interfaces mediante **componentes**.

Un componente es una pieza independiente de la interfaz.

Por ejemplo:

```jsx
function Button() {
  return <button>Guardar</button>;
}
```

Puedes utilizarlo:

```jsx
function App() {
  return (
    <div>
      <h1>Mi aplicación</h1>
      <Button />
    </div>
  );
}
```

La interfaz puede dividirse:

```text
App
│
├── Header
├── Sidebar
├── Main
│   ├── UserCard
│   ├── UserCard
│   └── UserCard
└── Footer
```

### 🧠 Ventajas

Los componentes permiten:

* reutilizar UI
* dividir responsabilidades
* mantener código organizado
* aislar lógica
* facilitar mantenimiento

### 🎯 Regla mental

> **Una aplicación React grande es un árbol de componentes.**

---

# 4️⃣ JSX

**JSX** es una sintaxis que permite escribir una estructura parecida a HTML dentro de JavaScript.

Ejemplo:

```jsx
const element = <h1>Hello World</h1>;
```

Pero JSX **no es HTML**.

Es una sintaxis que será transformada en JavaScript.

Por ejemplo:

```jsx
const name = 'Alo';

function App() {
  return <h1>Hello {name}</h1>;
}
```

Puedes insertar expresiones JavaScript:

```jsx
<h1>{name}</h1>
```

```jsx
<p>{2 + 2}</p>
```

```jsx
<p>{user.name}</p>
```

### 🧠 JSX combina

```text
JavaScript
     +
UI
     ↓
   JSX
```

### ⚠️ Diferencias importantes con HTML

En JSX algunas propiedades utilizan nombres diferentes:

```jsx
<div className="container">
```

en lugar de:

```html
<div class="container">
```

Y los eventos utilizan camelCase:

```jsx
<button onClick={handleClick}>
```

---

# 5️⃣ 🎨 RENDERING

**Rendering** es el proceso mediante el cual React determina qué UI debe representar según el estado y las propiedades actuales.

Por ejemplo:

```jsx
function App() {
  return <h1>Hello World</h1>;
}
```

React representa:

```text
Component
    ↓
JSX
    ↓
React elements
    ↓
DOM
    ↓
Browser
```

### 🧠 Modelo mental

Piensa en un componente como una función:

```text
Estado + Props
      ↓
  Component
      ↓
      UI
```

Por ejemplo:

```text
count = 0
   ↓
<h1>Count: 0</h1>
```

Si cambia:

```text
count = 1
   ↓
<h1>Count: 1</h1>
```

React vuelve a determinar qué debe mostrar.

---

# 6️⃣ 🔄 RE-RENDER

Un **re-render** ocurre cuando React vuelve a ejecutar un componente para determinar cómo debería verse con los valores actuales.

Por ejemplo:

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

Inicialmente:

```text
count = 0
   ↓
Render
   ↓
<button>0</button>
```

Usuario hace click:

```text
setCount(1)
   ↓
State cambia
   ↓
Re-render
   ↓
<button>1</button>
```

### ⚠️ Importante

Un re-render **no significa necesariamente que React destruya y cree todo el DOM desde cero**.

React compara el resultado y determina qué debe actualizar.

Eso nos lleva a:

```text
🌳 Virtual DOM
        +
🔄 Reconciliation
```

---

# 7️⃣ 🌳 VIRTUAL DOM

El **Virtual DOM** es una representación en memoria de la estructura de la interfaz.

Conceptualmente:

```text
React
  ↓
Virtual DOM
  ↓
Comparación
  ↓
DOM real
```

Supongamos:

```text
Antes:

<h1>Count: 0</h1>
```

Después:

```text
<h1>Count: 1</h1>
```

React puede determinar que solamente cambió:

```text
0 → 1
```

en lugar de reconstruir toda la página.

### 🧠 ¿Por qué existe?

Permite que React trabaje con una representación de la UI y determine de manera eficiente qué cambios necesita aplicar al DOM.

### ⚠️ Aclaración importante

El Virtual DOM **no significa que React nunca modifique el DOM real**.

React finalmente necesita actualizar el DOM real para que el usuario vea los cambios.

---

# 8️⃣ 🔄 RECONCILIATION

**Reconciliation** es el proceso mediante el cual React compara la representación anterior de la UI con la nueva representación para determinar qué debe cambiar.

Conceptualmente:

```text
UI anterior
     ↓
   React
     ↑
UI nueva
     ↓
Comparación
     ↓
Cambios necesarios
     ↓
DOM
```

Por ejemplo:

```text
ANTES

<h1>Hola</h1>
<p>Edad: 20</p>
```

Después:

```text
DESPUÉS

<h1>Hola</h1>
<p>Edad: 21</p>
```

React puede identificar que:

```text
<h1> → sin cambios

<p> → cambió
```

y actualizar únicamente la parte necesaria.

### 🧠 Idea clave

```text
Re-render
   ↓
React obtiene nueva descripción de UI
   ↓
Reconciliation
   ↓
Determina cambios
   ↓
Actualiza DOM
```

**Re-render** y **reconciliation** no son exactamente lo mismo.

---

# 9️⃣ 🎯 CONDITIONAL RENDERING

React permite mostrar diferentes elementos dependiendo de una condición.

Por ejemplo:

```jsx
function App({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <h1>Bienvenido</h1>
      ) : (
        <h1>Inicia sesión</h1>
      )}
    </div>
  );
}
```

Si:

```text
isLoggedIn = true
```

se muestra:

```text
Bienvenido
```

Si:

```text
isLoggedIn = false
```

se muestra:

```text
Inicia sesión
```

También puedes utilizar `&&`:

```jsx
{isAdmin && <button>Eliminar usuario</button>}
```

Significa:

```text
¿Es admin?
   │
   ├── Sí → mostrar botón
   │
   └── No → no mostrarlo
```

### 🎯 Uso común

Conditional rendering es fundamental para:

* loading
* errores
* autenticación
* permisos
* estados vacíos
* mostrar/ocultar elementos

---

# 🔟 📋 LISTS & KEYS

React permite representar listas utilizando métodos de JavaScript como `.map()`.

Por ejemplo:

```jsx
const users = [
  { id: 1, name: 'Ana' },
  { id: 2, name: 'Luis' },
  { id: 3, name: 'Carlos' }
];
```

Puedes renderizarlos:

```jsx
<ul>
  {users.map(user => (
    <li key={user.id}>
      {user.name}
    </li>
  ))}
</ul>
```

### 🔑 ¿Qué es `key`?

`key` es un identificador que permite a React distinguir los elementos de una lista.

```jsx
<li key={user.id}>
```

React puede entender:

```text
User 1
User 2
User 3
```

y posteriormente:

```text
User 1
User 3
User 4
```

De esta manera puede identificar qué elementos:

* permanecieron
* cambiaron
* fueron eliminados
* fueron agregados

### ⚠️ No uses índices como `key` cuando la lista pueda cambiar

Evita:

```jsx
users.map((user, index) => (
  <li key={index}>
```

cuando los elementos puedan:

* reordenarse
* eliminarse
* insertarse

Es preferible utilizar un identificador estable:

```jsx
key={user.id}
```

---

# 1️⃣1️⃣ 🖱️ EVENTOS

React permite responder a eventos del usuario.

Por ejemplo:

```jsx
function App() {
  const handleClick = () => {
    console.log('Click');
  };

  return (
    <button onClick={handleClick}>
      Click
    </button>
  );
}
```

Algunos eventos comunes:

| Evento         | Uso                   |
| -------------- | --------------------- |
| `onClick`      | Click                 |
| `onChange`     | Cambio en inputs      |
| `onSubmit`     | Envío de formularios  |
| `onFocus`      | Elemento obtiene foco |
| `onBlur`       | Elemento pierde foco  |
| `onMouseEnter` | Mouse entra           |
| `onMouseLeave` | Mouse sale            |
| `onKeyDown`    | Se presiona una tecla |
| `onKeyUp`      | Se libera una tecla   |

### 🧠 Concepto

```text
Usuario
   ↓
Evento
   ↓
Event Handler
   ↓
Lógica
   ↓
State cambia
   ↓
Re-render
   ↓
UI actualizada
```

Por ejemplo:

```text
Click
 ↓
setCount(...)
 ↓
State
 ↓
Re-render
 ↓
UI
```

---

# 1️⃣2️⃣ 🧩 FRAGMENTOS

Los **Fragments** permiten agrupar varios elementos sin agregar un elemento innecesario al DOM.

Sin Fragment:

```jsx
return (
  <div>
    <h1>Título</h1>
    <p>Contenido</p>
  </div>
);
```

Esto agrega:

```html
<div>
  <h1>Título</h1>
  <p>Contenido</p>
</div>
```

Con Fragment:

```jsx
return (
  <>
    <h1>Título</h1>
    <p>Contenido</p>
  </>
);
```

El resultado no necesita un `<div>` adicional.

### 🧠 ¿Por qué es útil?

Cuando necesitas devolver varios elementos:

```jsx
<>
  <Header />
  <Main />
  <Footer />
</>
```

sin introducir un elemento HTML artificial.

También puedes utilizar:

```jsx
<React.Fragment>
  ...
</React.Fragment>
```

La forma corta:

```jsx
<>
  ...
</>
```

es la más habitual.

---

# 🧠 MODELO MENTAL DE REACT

Todos estos conceptos se conectan:

```text
                    ⚛️ REACT
                       │
                       ▼
                 🧩 COMPONENT
                       │
                       ▼
                🧠 STATE + PROPS
                       │
                       ▼
                    RENDER
                       │
                       ▼
                      JSX
                       │
                       ▼
                🌳 VIRTUAL DOM
                       │
                       ▼
               🔄 RECONCILIATION
                       │
                       ▼
                   REAL DOM
                       │
                       ▼
                    🎨 UI
                       │
                       ▼
                🖱️ USER EVENT
                       │
                       ▼
                🧠 STATE CHANGE
                       │
                       ▼
                  🔄 RE-RENDER
                       │
                       └───────────────┐
                                       │
                                       ▼
                              🎨 UI UPDATED
```

### 🏆 La idea que debes recordar

> **React construye la UI a partir del estado y las propiedades actuales. Cuando esos datos cambian, React vuelve a evaluar los componentes, compara la nueva representación con la anterior y aplica al DOM los cambios necesarios.**

Ese es uno de los conceptos fundamentales para entender React antes de pasar a **Props, State y Hooks**.
