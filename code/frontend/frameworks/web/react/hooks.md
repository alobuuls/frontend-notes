# 🪝 REACT HOOKS

# 📚 ÍNDICE — 🪝 REACT HOOKS

- [🪝 REACT HOOKS](#-react-hooks)
- [📚 ÍNDICE — 🪝 REACT HOOKS](#-índice---react-hooks)
  - [1️⃣ 🧠 ¿QUÉ SON LOS HOOKS?](#1️⃣--qué-son-los-hooks)
    - [🧠 Idea mental](#-idea-mental)
    - [📌 Importante](#-importante)
- [2️⃣ 🗃️ useState](#2️⃣-️-usestate)
    - [📦 Puede almacenar diferentes tipos](#-puede-almacenar-diferentes-tipos)
    - [⚠️ No debes modificar directamente el state](#️-no-debes-modificar-directamente-el-state)
- [3️⃣ ⚡ useEffect](#3️⃣--useeffect)
    - [Ejemplo con API](#ejemplo-con-api)
    - [🧠 Importante](#-importante-1)
- [4️⃣ 🌐 useContext](#4️⃣--usecontext)
    - [📌 Casos comunes](#-casos-comunes)
- [5️⃣ 📍 useRef](#5️⃣--useref)
    - [🧠 También puede almacenar valores](#-también-puede-almacenar-valores)
    - [📌 Diferencia importante](#-diferencia-importante)
- [6️⃣ 🔄 useReducer](#6️⃣--usereducer)
    - [🧠 ¿Cuándo utilizarlo?](#-cuándo-utilizarlo)
- [7️⃣ ⚡ useMemo](#7️⃣--usememo)
    - [🧠 Idea](#-idea)
    - [⚠️ Importante](#️-importante)
- [8️⃣ ⚡ useCallback](#8️⃣--usecallback)
    - [🧠 Diferencia con useMemo](#-diferencia-con-usememo)
    - [⚠️ Importante](#️-importante-1)
- [9️⃣ 📜 REGLAS DE LOS HOOKS](#9️⃣--reglas-de-los-hooks)
  - [📌 Regla 1 — Solo en el nivel superior](#-regla-1--solo-en-el-nivel-superior)
    - [🧠 ¿Por qué?](#-por-qué)
  - [📌 Regla 2 — Solo en componentes o custom hooks](#-regla-2--solo-en-componentes-o-custom-hooks)
- [🔟 📋 DEPENDENCY ARRAY](#--dependency-array)
    - [📌 Tres casos importantes](#-tres-casos-importantes)
    - [Array vacío](#array-vacío)
    - [Dependencias](#dependencias)
    - [Sin array](#sin-array)
    - [🧠 Regla mental](#-regla-mental)
- [1️⃣1️⃣ 🧹 EFFECT CLEANUP](#1️⃣1️⃣--effect-cleanup)
    - [📌 Ejemplo con event listener](#-ejemplo-con-event-listener)
    - [🧠 ¿Por qué es importante?](#-por-qué-es-importante)
- [1️⃣2️⃣ 🧩 CUSTOM HOOKS](#1️⃣2️⃣--custom-hooks)
    - [🧠 ¿Qué estamos reutilizando?](#-qué-estamos-reutilizando)
    - [📌 Ejemplos comunes](#-ejemplos-comunes)
- [🧠 RESUMEN DE LOS HOOKS](#-resumen-de-los-hooks)
- [🎯 MODELO MENTAL](#-modelo-mental)
    - [🧠 Idea clave para estudiar](#-idea-clave-para-estudiar)

## 1️⃣ 🧠 ¿QUÉ SON LOS HOOKS?

Los **Hooks** son funciones especiales de React que permiten utilizar características de React dentro de **componentes funcionales**.

Por ejemplo, permiten trabajar con:

* 🗃️ Estado
* ⚡ Efectos secundarios
* 🌐 Context
* 📍 Referencias al DOM
* 🔄 Lógica más compleja
* ♻️ Lógica reutilizable

Antes de los Hooks, muchas de estas capacidades estaban principalmente asociadas a los **class components**.

Con Hooks puedes hacer:

```tsx
function Counter() {
  const [count, setCount] = useState(0);

  return <button>{count}</button>;
}
```

### 🧠 Idea mental

```text
          🪝 HOOKS
              │
      ┌───────┼────────┐
      ▼       ▼        ▼
    State   Effects   Context
      │       │        │
      └───────┼────────┘
              ▼
        Functional
        Component
```

### 📌 Importante

Los Hooks normalmente empiezan con:

```text
use...
```

Por ejemplo:

```text
useState
useEffect
useContext
useRef
useReducer
useMemo
useCallback
```

---

# 2️⃣ 🗃️ useState

`useState` permite agregar **estado** a un componente funcional.

El estado es información que puede cambiar durante la vida del componente y cuyo cambio puede provocar una nueva renderización.

Ejemplo:

```tsx
const [count, setCount] = useState(0);
```

Aquí tenemos:

```text
count
  ↓
valor actual

setCount
  ↓
función para actualizarlo
```

Ejemplo completo:

```tsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

Al hacer click:

```text
count = 0
   ↓
setCount(1)
   ↓
React actualiza el state
   ↓
re-render
   ↓
count = 1
```

### 📦 Puede almacenar diferentes tipos

```tsx
const [name, setName] = useState("");
const [isOpen, setIsOpen] = useState(false);
const [users, setUsers] = useState<User[]>([]);
```

### ⚠️ No debes modificar directamente el state

❌ Incorrecto:

```tsx
count = count + 1;
```

✅ Correcto:

```tsx
setCount(count + 1);
```

---

# 3️⃣ ⚡ useEffect

`useEffect` permite ejecutar **efectos secundarios** después del renderizado.

Un efecto secundario es una operación que interactúa con algo externo al proceso normal de renderizar UI.

Ejemplos:

* 🌐 Peticiones HTTP
* 📡 Suscripciones
* ⏱️ Timers
* 🖥️ APIs del navegador
* 📦 Sincronización con sistemas externos

Ejemplo:

```tsx
useEffect(() => {
  console.log("Component rendered");
}, []);
```

El segundo argumento:

```tsx
[]
```

es el **dependency array**.

### Ejemplo con API

```tsx
useEffect(() => {
  fetch("/api/users")
    .then(response => response.json())
    .then(data => setUsers(data));
}, []);
```

Flujo:

```text
Render
  ↓
useEffect
  ↓
API request
  ↓
Response
  ↓
setUsers()
  ↓
Re-render
```

### 🧠 Importante

`useEffect` **no debería utilizarse simplemente para calcular valores**.

Si puedes obtener un valor directamente durante el render, normalmente no necesitas un effect.

---

# 4️⃣ 🌐 useContext

`useContext` permite acceder a información compartida mediante **React Context** sin tener que pasar props manualmente por todos los componentes intermedios.

Problema:

```text
App
 ↓ props
Page
 ↓ props
Layout
 ↓ props
Header
 ↓ props
User
```

Esto puede producir **prop drilling**.

Con Context:

```text
        Context
           │
     ┌─────┼─────┐
     ▼     ▼     ▼
   Page  Header  User
```

Ejemplo:

```tsx
const ThemeContext = createContext("light");
```

Proveedor:

```tsx
<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>
```

Consumidor:

```tsx
const theme = useContext(ThemeContext);
```

### 📌 Casos comunes

* 🌙 Tema
* 👤 Usuario autenticado
* 🌍 Configuración global
* 🌐 Idioma
* ⚙️ Preferencias

⚠️ Context no significa que **todo** el estado de una aplicación deba almacenarse ahí.

---

# 5️⃣ 📍 useRef

`useRef` permite mantener una referencia mutable que persiste entre renders **sin provocar un re-render cuando cambia**.

Uno de sus usos más conocidos es acceder a un elemento del DOM.

```tsx
const inputRef = useRef<HTMLInputElement>(null);
```

Después:

```tsx
<input ref={inputRef} />
```

Puedes acceder al elemento:

```tsx
inputRef.current?.focus();
```

### 🧠 También puede almacenar valores

```tsx
const renderCount = useRef(0);

renderCount.current++;
```

Cambiar:

```tsx
renderCount.current
```

no provoca por sí mismo un nuevo render.

### 📌 Diferencia importante

```text
useState
   ↓
cambia
   ↓
re-render

useRef
   ↓
cambia
   ↓
NO re-render
```

---

# 6️⃣ 🔄 useReducer

`useReducer` sirve para manejar **estado cuya lógica de actualización es más compleja**.

En lugar de modificar el estado directamente, defines una función llamada **reducer** que determina cómo cambia.

Conceptualmente:

```text
State
  │
  │ Action
  ▼
Reducer
  │
  ▼
New State
```

Ejemplo:

```tsx
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    default:
      return state;
  }
}
```

Utilización:

```tsx
const [state, dispatch] = useReducer(reducer, {
  count: 0
});
```

Para cambiar el estado:

```tsx
dispatch({ type: "increment" });
```

### 🧠 ¿Cuándo utilizarlo?

`useState` suele ser suficiente cuando:

```text
Estado sencillo
```

`useReducer` puede ser útil cuando:

```text
Estado complejo
     ↓
Múltiples acciones
     ↓
Lógica de actualización compleja
```

---

# 7️⃣ ⚡ useMemo

`useMemo` permite **memorizar el resultado de un cálculo** para evitar recalcularlo innecesariamente.

Ejemplo:

```tsx
const filteredUsers = useMemo(() => {
  return users.filter(user => user.active);
}, [users]);
```

React volverá a calcular el resultado cuando cambie:

```tsx
users
```

### 🧠 Idea

Sin memoización:

```text
Render
 ↓
Calcular
 ↓
Render
 ↓
Calcular
 ↓
Render
 ↓
Calcular
```

Con `useMemo`:

```text
Render
 ↓
¿Cambió alguna dependencia?
 ├── No → reutilizar resultado
 └── Sí → recalcular
```

### ⚠️ Importante

`useMemo` es una **optimización**, no una herramienta que debas utilizar automáticamente para todo.

No conviene agregarlo simplemente porque "es más rápido".

---

# 8️⃣ ⚡ useCallback

`useCallback` permite memorizar una **función** para conservar su referencia entre renders mientras sus dependencias no cambien.

Ejemplo:

```tsx
const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);
```

Sin `useCallback`, una función definida dentro del componente puede tener una nueva referencia en cada render.

Esto puede ser relevante cuando:

```text
Parent
  │
  │ callback
  ▼
Memoized Child
```

y quieres evitar renders innecesarios provocados por cambios de referencia.

### 🧠 Diferencia con useMemo

| Hook          | Memoriza                |
| ------------- | ----------------------- |
| `useMemo`     | Resultado de un cálculo |
| `useCallback` | Función                 |

Conceptualmente:

```tsx
useMemo(() => resultado, dependencies)
```

vs.

```tsx
useCallback(() => function, dependencies)
```

### ⚠️ Importante

Al igual que `useMemo`, `useCallback` es principalmente una **optimización**.

No debes utilizarlo indiscriminadamente.

---

# 9️⃣ 📜 REGLAS DE LOS HOOKS

React establece reglas importantes para utilizar Hooks correctamente.

## 📌 Regla 1 — Solo en el nivel superior

No debes llamar Hooks dentro de:

```text
❌ if
❌ for
❌ while
❌ funciones anidadas
❌ condiciones
```

❌ Incorrecto:

```tsx
if (isLoggedIn) {
  const [user, setUser] = useState(null);
}
```

✅ Correcto:

```tsx
const [user, setUser] = useState(null);

if (isLoggedIn) {
  // usar user aquí
}
```

### 🧠 ¿Por qué?

React necesita que los Hooks se ejecuten siempre en el mismo orden entre renders.

---

## 📌 Regla 2 — Solo en componentes o custom hooks

Los Hooks pueden utilizarse dentro de:

```text
✅ Functional Components
✅ Custom Hooks
```

No deben utilizarse arbitrariamente en funciones normales.

---

# 🔟 📋 DEPENDENCY ARRAY

El **dependency array** indica a React de qué valores depende un Hook determinado.

Ejemplo:

```tsx
useEffect(() => {
  console.log(userId);
}, [userId]);
```

React observa:

```text
userId
```

Si cambia:

```text
userId cambia
      ↓
Effect vuelve a ejecutarse
```

### 📌 Tres casos importantes

### Array vacío

```tsx
useEffect(() => {
  // ...
}, []);
```

El effect no depende de valores reactivos externos.

### Dependencias

```tsx
useEffect(() => {
  // ...
}, [userId, token]);
```

Se ejecuta cuando cambian esas dependencias.

### Sin array

```tsx
useEffect(() => {
  // ...
});
```

Se ejecuta después de cada render.

### 🧠 Regla mental

```text
[] 
↓
Sin dependencias

[a, b]
↓
Depende de a y b

sin array
↓
Cada render
```

⚠️ El comportamiento exacto de un `useEffect` también depende del ciclo de vida y del entorno de desarrollo, por lo que no conviene memorizarlo simplemente como "`[]` = componentDidMount".

---

# 1️⃣1️⃣ 🧹 EFFECT CLEANUP

Algunos effects crean recursos que deben limpiarse.

Por ejemplo:

```text
⏱️ Timers
📡 Subscriptions
👂 Event listeners
🌐 Conexiones
```

Para limpiarlos, `useEffect` puede devolver una función.

```tsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running...");
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);
```

Flujo:

```text
Effect
  ↓
Crear recurso
  ↓
Componente sigue activo
  ↓
Cleanup
  ↓
Eliminar recurso
```

### 📌 Ejemplo con event listener

```tsx
useEffect(() => {
  const handleResize = () => {
    console.log(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
```

### 🧠 ¿Por qué es importante?

Evita:

* Memory leaks
* Listeners duplicados
* Timers ejecutándose innecesariamente
* Suscripciones que continúan activas

---

# 1️⃣2️⃣ 🧩 CUSTOM HOOKS

Un **Custom Hook** es una función creada por el desarrollador que permite **reutilizar lógica basada en Hooks**.

Normalmente su nombre empieza con:

```text
use...
```

Por ejemplo:

```tsx
function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(value => value + 1);
  };

  return {
    count,
    increment
  };
}
```

Después puedes utilizarlo:

```tsx
function Counter() {
  const { count, increment } = useCounter();

  return (
    <button onClick={increment}>
      {count}
    </button>
  );
}
```

### 🧠 ¿Qué estamos reutilizando?

No estamos reutilizando necesariamente la UI.

Estamos reutilizando **lógica**.

```text
             Custom Hook
                  │
        ┌─────────┴─────────┐
        ▼                   ▼
     Component A        Component B
        │                   │
        └─────────┬─────────┘
                  ▼
          Misma lógica
          reutilizable
```

### 📌 Ejemplos comunes

```text
useAuth()
useFetch()
useLocalStorage()
useDebounce()
useForm()
useWindowSize()
```

Por ejemplo:

```tsx
const { user, login, logout } = useAuth();
```

Esto permite mantener la lógica de autenticación fuera de los componentes visuales.

---

# 🧠 RESUMEN DE LOS HOOKS

| Hook          | ¿Para qué sirve?                                       |
| ------------- | ------------------------------------------------------ |
| `useState`    | 🗃️ Manejar estado local                               |
| `useEffect`   | ⚡ Ejecutar efectos secundarios                         |
| `useContext`  | 🌐 Consumir Context                                    |
| `useRef`      | 📍 Mantener referencias/valores mutables sin re-render |
| `useReducer`  | 🔄 Manejar estado con lógica compleja                  |
| `useMemo`     | ⚡ Memorizar resultados de cálculos                     |
| `useCallback` | ⚡ Memorizar referencias de funciones                   |
| Custom Hook   | ♻️ Reutilizar lógica basada en Hooks                   |

---

# 🎯 MODELO MENTAL

```text
                    🪝 REACT HOOKS
                         │
       ┌─────────────────┼─────────────────┐
       ▼                 ▼                 ▼
     STATE            EFFECTS          SHARED DATA
       │                 │                 │
   useState          useEffect         useContext
   useReducer
       │
       └─────────────────┐
                         ▼
                    REFERENCES
                         │
                      useRef

                  OPTIMIZATION
                         │
                 ┌───────┴───────┐
                 ▼               ▼
              useMemo       useCallback

                         │
                         ▼
                  CUSTOM HOOKS
                         │
                         ▼
                 ♻️ REUSE LOGIC
```

### 🧠 Idea clave para estudiar

> **Los Hooks permiten que los componentes funcionales utilicen estado, efectos, contexto, referencias y otras capacidades de React. Los Custom Hooks permiten tomar esa lógica y reutilizarla entre diferentes componentes.**
