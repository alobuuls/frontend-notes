# 🗃️ STATE MANAGEMENT

El **state management** es la forma en la que una aplicación **guarda, modifica y comparte información que puede cambiar durante su ejecución**.

En React, el estado puede ser algo tan simple como:

```text
isMenuOpen = true
```

o información más compleja:

```text
user
products
cart
notifications
filters
```

La pregunta principal es:

> **¿Dónde debe vivir este estado y quién necesita acceder a él?**

---

# 📑 ÍNDICE — STATE MANAGEMENT

1. [📍 Local State](#1️⃣--local-state)
2. [🔗 Shared State](#2️⃣--shared-state)
3. [🌎 Global State](#3️⃣--global-state)
4. [🧩 Context API](#4️⃣--context-api)
5. [🔄 useReducer](#5️⃣--usereducer)
6. [🟥 Redux](#6️⃣--redux)
7. [🐻 Zustand](#7️⃣--zustand)
8. [🌐 Server State](#8️⃣--server-state)
9. [⚖️ Client State vs Server State](#9️⃣--client-state-vs-server-state)
10. [🧭 ¿Cuándo usar cada solución?](#-cuándo-usar-cada-solución)
11. [🧠 Mapa Mental](#-mapa-mental)
12. [🎯 Regla Mental para Estudiar](#-regla-mental-para-estudiar)
13. [🏆 Idea Clave](#-idea-clave)

---

# 1️⃣ 📍 LOCAL STATE

El **local state** es un estado que pertenece a un componente y que normalmente **solo ese componente necesita**.

Por ejemplo:

```text
Counter
   │
   └── count
```

Un contador puede mantener su propio estado:

```text
count = 0
```

Si otro componente no necesita conocer ese valor, no tiene sentido convertirlo en estado global.

### Ejemplos

* Abrir/cerrar un modal.
* Estado de un input.
* Mostrar/ocultar un menú.
* Contador.
* Estado de un formulario pequeño.
* Selección temporal de una opción.

```text
Component
   │
   └── Local State
```

📌 En React, normalmente se maneja con:

```text
useState
```

### 🎯 Idea clave

> Si **solo un componente necesita el estado**, empieza por **local state**.

---

# 2️⃣ 🔗 SHARED STATE

El **shared state** aparece cuando **varios componentes necesitan acceder al mismo estado**.

Por ejemplo:

```text
        App
       /   \
      ▼     ▼
 Header    Cart
    │        │
    └── Cart ┘
       State
```

Ambos componentes necesitan conocer el carrito.

En lugar de tener dos estados independientes:

```text
Header → cart
Cart   → cart
```

queremos que ambos utilicen **la misma fuente de verdad**.

```text
        Cart State
        /        \
       ▼          ▼
    Header       Cart
```

Puede resolverse utilizando diferentes estrategias dependiendo de la situación:

* Props.
* Lifting state up.
* Context API.
* Redux.
* Zustand.

---

# 3️⃣ 🌎 GLOBAL STATE

El **global state** es información que puede ser utilizada por **muchas partes de la aplicación**, incluso componentes que están muy separados entre sí.

Por ejemplo:

```text
                App
                 │
        ┌────────┼────────┐
        ▼        ▼        ▼
      Header   Products  Profile
        │        │         │
        └────────┼─────────┘
                 ▼
            Global State
```

### Ejemplos

* Usuario autenticado.
* Tema claro/oscuro.
* Idioma.
* Permisos.
* Carrito.
* Preferencias globales.
* Notificaciones globales.

📌 **Global no significa automáticamente que deba utilizar Redux.**

El tamaño y complejidad del estado determinan qué solución tiene sentido.

---

# 4️⃣ 🧩 CONTEXT API

**Context API** es una funcionalidad de React que permite **compartir valores entre componentes sin tener que pasar props manualmente por cada nivel del árbol**.

Sin Context:

```text
App
 ↓ props
Layout
 ↓ props
Page
 ↓ props
Component
```

Esto puede generar **prop drilling**.

Con Context:

```text
             Context
            /       \
           ▼         ▼
       Component   Component
```

Los componentes pueden consumir directamente el valor proporcionado por el contexto.

### Ejemplos

Context suele ser útil para:

* Tema.
* Usuario actual.
* Idioma.
* Configuración.
* Estado global relativamente sencillo.

### 🎯 Importante

Context **no es necesariamente una librería de state management completa**.

Es principalmente un mecanismo de React para **compartir valores entre componentes**.

Puede combinarse con:

```text
Context
   +
useState
```

o:

```text
Context
   +
useReducer
```

---

# 5️⃣ 🔄 useReducer

`useReducer` es un Hook de React pensado para manejar estados cuya lógica de actualización es **más compleja que un simple `useState`**.

En lugar de modificar el estado directamente, se trabaja con:

```text
State
  ↓
Action
  ↓
Reducer
  ↓
New State
```

Por ejemplo:

```text
State:
{
  count: 0
}

Action:
{
  type: "increment"
}

Reducer:
    ↓

New State:
{
  count: 1
}
```

Es especialmente útil cuando existen diferentes acciones:

```text
increment
decrement
reset
setValue
```

### 🎯 Cuándo considerar `useReducer`

Cuando tienes:

* Muchas transiciones de estado.
* Lógica de actualización compleja.
* Varias acciones relacionadas.
* Estado compuesto.

Puede utilizarse junto con Context:

```text
Context
   +
useReducer
   ↓
Shared / Global State
```

---

# 6️⃣ 🟥 REDUX

Redux es una librería de **state management** diseñada para manejar estados compartidos de forma estructurada y predecible.

La idea tradicional de Redux gira alrededor de una **store central**:

```text
                 Store
                   │
        ┌──────────┼──────────┐
        ▼          ▼          ▼
      User       Cart      Products
```

Los componentes leen información de la store y envían acciones para solicitar cambios.

Conceptualmente:

```text
Component
    │
    ▼
  Action
    │
    ▼
 Reducer
    │
    ▼
  Store
    │
    ▼
 New State
    │
    ▼
 Component
```

Redux también cuenta con **Redux Toolkit**, que es actualmente la forma recomendada de escribir Redux.

### 🎯 Cuándo puede tener sentido

* Aplicaciones grandes.
* Estado global complejo.
* Muchas partes de la aplicación interactúan con el mismo estado.
* Necesitas una arquitectura muy estructurada.
* El equipo ya trabaja con Redux.

---

# 7️⃣ 🐻 ZUSTAND

Zustand es una librería ligera para manejar estado global en React.

Su objetivo es proporcionar una solución más sencilla que otras arquitecturas de state management más grandes.

Conceptualmente:

```text
             Store
          /    |    \
         ▼     ▼     ▼
       User   Cart  Theme
```

Los componentes pueden consumir solamente la parte del estado que necesitan.

### 🎯 Ventajas

* API pequeña.
* Poco código.
* Fácil de aprender.
* No necesita una arquitectura tan extensa como Redux.
* Buena opción para muchos proyectos pequeños y medianos.

---

# 8️⃣ 🌐 SERVER STATE

**Server state** es información que **pertenece al backend**, pero que nuestra aplicación necesita mostrar o utilizar.

Por ejemplo:

```text
Backend
   │
   ▼
Users
Products
Orders
Posts
   │
   ▼
React
```

Estos datos no son realmente propiedad de React.

React simplemente los está **consumiendo**.

Ejemplo:

```text
GET /api/products
        ↓
      API
        ↓
   Products data
        ↓
      React
        ↓
       UI
```

El server state tiene características particulares:

* Proviene de una API.
* Puede cambiar fuera de nuestra aplicación.
* Puede estar desactualizado.
* Puede necesitar cache.
* Puede necesitar revalidación.
* Puede requerir refetch.
* Puede estar en loading.
* Puede producir errores.

Por eso **server state no es exactamente lo mismo que client state**.

---

# 9️⃣ ⚖️ CLIENT STATE VS SERVER STATE

Esta diferencia es **muy importante**.

## 🖥️ CLIENT STATE

Es información que pertenece principalmente a la interfaz y al cliente.

Ejemplos:

```text
isModalOpen
selectedTab
theme
sidebarOpen
formValue
```

```text
React
  │
  ▼
Client State
```

---

## 🌐 SERVER STATE

Es información que proviene del backend.

Ejemplos:

```text
users
products
orders
comments
posts
```

```text
Backend
   │
   ▼
 API
   │
   ▼
Server State
```

### 🔥 Comparación

| Característica               | 🖥️ Client State  | 🌐 Server State            |
| ---------------------------- | ----------------- | -------------------------- |
| ¿Dónde nace?                 | Frontend          | Backend                    |
| ¿Quién es dueño?             | Aplicación        | Servidor                   |
| Ejemplo                      | `isModalOpen`     | `products`                 |
| Puede cambiar fuera de React | ❌ Normalmente no  | ✅ Sí                       |
| Necesita cache               | Normalmente no    | Frecuentemente             |
| Necesita refetch             | ❌                 | ✅ Puede necesitarlo        |
| Puede quedar desactualizado  | Poco común        | Muy común                  |
| Ejemplos                     | UI, filtros, tema | Usuarios, productos, posts |

---

# 🔟 🧭 ¿CUÁNDO USAR CADA SOLUCIÓN?

No existe una solución universal.

La pregunta correcta es:

> **¿Qué tipo de estado tengo y cuántos componentes necesitan acceder a él?**

### 🟢 `useState`

Utilízalo cuando:

```text
Un componente
      ↓
necesita el estado
```

Ejemplos:

* Modal.
* Input.
* Toggle.
* Contador.

---

### 🟡 Context API

Utilízalo cuando:

```text
Varios componentes
        ↓
necesitan compartir
        ↓
un valor relativamente sencillo
```

Ejemplos:

* Theme.
* Usuario.
* Idioma.

---

### 🟠 `useReducer`

Úsalo cuando:

```text
Estado complejo
      ↓
muchas acciones
      ↓
lógica de actualización compleja
```

Puede combinarse con Context.

---

### 🔴 Redux

Tiene sentido cuando:

```text
Aplicación grande
       ↓
Estado global complejo
       ↓
muchas interacciones
       ↓
necesidad de estructura
```

---

### 🐻 Zustand

Puede ser una buena opción cuando:

```text
Necesitas Global State
        ↓
pero quieres una solución
simple y ligera
```

---

### 🌐 Server State

Cuando los datos vienen del backend:

```text
API
 ↓
Server State
 ↓
Cache / Refetch / Revalidation
 ↓
UI
```

Aquí normalmente conviene utilizar herramientas especializadas para server state, en lugar de tratar toda la información de la API como simple estado global.

---

# 🧠 MAPA MENTAL

```text
                       🗃️ STATE
                          │
             ┌────────────┴────────────┐
             ▼                         ▼
      🖥️ CLIENT STATE            🌐 SERVER STATE
             │                         │
       ┌─────┴─────┐                   ▼
       ▼           ▼                  API
    Local       Shared                 │
       │           │                   ▼
   useState    ┌───┴────┐         Cache
               ▼        ▼
            Context   Global
               │        │
               │   ┌────┴─────┐
               │   ▼          ▼
               │ Redux     Zustand
               │
               ▼
           useReducer
```

---

# 🎯 REGLA MENTAL PARA ESTUDIAR

Cuando tengas que decidir cómo manejar un estado, piensa en este orden:

```text
¿El dato viene del backend?
        │
       SÍ
        ↓
🌐 SERVER STATE
        │
       NO
        ↓
¿Solo lo necesita un componente?
        │
       SÍ
        ↓
🟢 useState
        │
       NO
        ↓
¿Lo necesitan varios componentes?
        │
       SÍ
        ↓
🧩 Shared / Global State
        │
        ├── Context
        ├── useReducer
        ├── Zustand
        └── Redux
```

> [!IMPORTANT]
> **No conviertas todo en global state.** Una buena regla es mantener el estado lo más cerca posible de los componentes que realmente lo necesitan. Solo debes elevarlo o hacerlo global cuando exista una necesidad real de compartirlo.

### 🏆 IDEA CLAVE

```text
LOCAL
  ↓
useState

SHARED
  ↓
Props / Context / useReducer

GLOBAL
  ↓
Context / Redux / Zustand

SERVER
  ↓
API + Cache + Revalidation
```

La distinción más importante para React moderno es:

> **Client State ≠ Server State**

Porque no deberías tratar un `isModalOpen` de la misma manera que tratarías una lista de `products` obtenida desde una API.
