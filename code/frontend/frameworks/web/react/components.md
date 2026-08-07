# 🧩 COMPONENTS EN REACT

## 📚 ÍNDICE — COMPONENTS EN REACT

1. 🧩 [Componentes](#1️⃣--componentes)
2. ⚛️ [Functional Components](#2️⃣--functional-components)
3. 🧩 [Composición](#3️⃣--composición)
4. 📦 [Props](#4️⃣--props)
5. 📌 [Default Props](#5️⃣--default-props)
6. 👶 [Children](#6️⃣--children)
7. ➡️ [Comunicación Padre → Hijo](#7️⃣--comunicación-padre--hijo)
8. ⬅️ [Comunicación Hijo → Padre](#8️⃣--comunicación-hijo--padre)
9. ♻️ [Component Reusability](#9️⃣--component-reusability)
10. 🎛️ [Controlled Components](#🔟--controlled-components)
11. 🧠 [Component Responsibilities](#1️⃣1️⃣--component-responsibilities)
12. 🧠 [Comunicación entre Componentes](#🧠-comunicación-entre-componentes)
13. 🅰️ [Angular vs React](#🅰️-angular-vs-⚛️-react)
14. 🧠 [Modelo Mental](#🧠-modelo-mental)

## 1️⃣ 🧩 COMPONENTES

Un **componente** es una pieza reutilizable de la interfaz de usuario.

En React, normalmente un componente es una **función de JavaScript/TypeScript que retorna JSX**.

Ejemplo:

```tsx
function Welcome() {
  return <h1>Hello!</h1>;
}
```

Ese componente puede utilizarse dentro de otro componente:

```tsx
function App() {
  return (
    <div>
      <Welcome />
      <Welcome />
    </div>
  );
}
```

### 🧠 Idea clave

Piensa en una aplicación como un conjunto de piezas:

```text
                APP
                 │
        ┌────────┼────────┐
        ▼        ▼        ▼
      Header    Main     Footer
                  │
             ┌────┴────┐
             ▼         ▼
           Card       Card
```

Cada pieza puede convertirse en un componente.

### 📌 ¿Por qué usar componentes?

Porque permiten:

* ♻️ Reutilizar UI
* 🧩 Dividir una aplicación grande
* 🧠 Separar responsabilidades
* 🛠️ Mantener el código organizado
* 🧪 Facilitar testing
* 🔄 Actualizar partes específicas de la interfaz

---

# 2️⃣ ⚛️ FUNCTIONAL COMPONENTS

Los **Functional Components** son componentes creados mediante funciones.

Actualmente son la forma principal de crear componentes en React.

```tsx
function Button() {
  return <button>Click me</button>;
}
```

También puedes utilizar una arrow function:

```tsx
const Button = () => {
  return <button>Click me</button>;
};
```

Y posteriormente utilizarlo:

```tsx
function App() {
  return <Button />;
}
```

### 🧠 Importante

Un componente funcional:

```text
Función
   ↓
JSX
   ↓
UI
```

Puede además utilizar:

* Props
* State
* Hooks
* Eventos
* Context
* Effects

---

# 3️⃣ 🧩 COMPOSICIÓN

La **composición** consiste en construir componentes grandes utilizando componentes más pequeños.

En lugar de crear un componente gigante:

```text
UserPage
 ├── Header
 ├── Profile
 ├── Posts
 ├── Comments
 └── Footer
```

Cada parte puede ser un componente independiente.

```tsx
function UserPage() {
  return (
    <>
      <Header />
      <Profile />
      <Posts />
      <Comments />
      <Footer />
    </>
  );
}
```

### 🧠 Idea clave

React favorece:

```text
Componentes pequeños
        ↓
    Composición
        ↓
Componentes más completos
        ↓
      Página
        ↓
       App
```

Esto permite reutilizar las mismas piezas en diferentes lugares.

---

# 4️⃣ 📦 PROPS

Las **props** son datos que un componente recibe desde su componente padre.

`props` significa **properties**.

Ejemplo:

```tsx
function User({ name }) {
  return <h2>Hello {name}</h2>;
}
```

El padre puede enviar el dato:

```tsx
function App() {
  return <User name="Alo" />;
}
```

El flujo es:

```text
Parent
   │
   │ props
   ▼
 Child
```

En este caso:

```text
App
 │
 │ name="Alo"
 ▼
User
```

### 📌 Las props pueden contener diferentes tipos de datos

```tsx
<User
  name="Alo"
  age={25}
  active={true}
  hobbies={["coding", "music"]}
/>
```

También pueden enviar funciones:

```tsx
<User onDelete={handleDelete} />
```

### ⚠️ Importante

Las props son **read-only** para el componente que las recibe.

El hijo no debería modificar directamente sus props.

---

# 5️⃣ 📌 DEFAULT PROPS

Puedes proporcionar valores por defecto cuando una prop no sea enviada.

Una forma moderna es utilizar valores por defecto en la destructuración:

```tsx
function Button({ text = "Click" }) {
  return <button>{text}</button>;
}
```

Si haces:

```tsx
<Button />
```

obtendrás:

```text
Click
```

Pero si haces:

```tsx
<Button text="Save" />
```

obtendrás:

```text
Save
```

### 🧠 Idea

```text
Prop enviada
     │
     ▼
¿Existe?
 ┌───┴───┐
Sí      No
│        │
▼        ▼
Usarla  Default
```

---

# 6️⃣ 👶 CHILDREN

`children` es una prop especial que contiene el contenido colocado **dentro de un componente**.

Ejemplo:

```tsx
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}
```

Puedes utilizarlo así:

```tsx
<Card>
  <h2>Hello</h2>
  <p>Welcome!</p>
</Card>
```

React recibe ese contenido mediante:

```tsx
children
```

Visualmente:

```text
<Card>
   │
   │ children
   ▼
┌─────────────────┐
│ <h2>Hello</h2>  │
│ <p>Welcome!</p> │
└─────────────────┘
```

### 🧠 ¿Para qué sirve?

Principalmente para crear componentes **flexibles y reutilizables**.

Por ejemplo:

```tsx
<Card>
  <LoginForm />
</Card>
```

o:

```tsx
<Card>
  <UserProfile />
</Card>
```

El `Card` no necesita saber qué contenido tendrá dentro.

---

# 7️⃣ ➡️ COMUNICACIÓN PADRE → HIJO

La comunicación de **padre a hijo** se realiza mediante **props**.

```tsx
function Parent() {
  return <Child name="Alo" />;
}
```

El hijo recibe:

```tsx
function Child({ name }) {
  return <h1>{name}</h1>;
}
```

Flujo:

```text
        Parent
           │
           │ props
           ▼
        Child
```

### 🧠 Regla importante

La información normalmente fluye **hacia abajo**:

```text
Parent
  ↓
Child
  ↓
Grandchild
```

---

# 8️⃣ ⬅️ COMUNICACIÓN HIJO → PADRE

React no tiene un evento equivalente directo a un `@Output()` de Angular.

Para permitir que el hijo comunique algo al padre, el padre normalmente **le pasa una función mediante props**.

### Padre

```tsx
function Parent() {
  const handleMessage = (message) => {
    console.log(message);
  };

  return <Child onMessage={handleMessage} />;
}
```

### Hijo

```tsx
function Child({ onMessage }) {
  return (
    <button onClick={() => onMessage("Hello from Child")}>
      Send
    </button>
  );
}
```

El flujo es:

```text
              Parent
                │
                │ function
                ▼
              Child
                │
                │ ejecuta function
                ▼
              Parent
```

### 🧠 Idea importante

El padre proporciona la función:

```tsx
onMessage={handleMessage}
```

El hijo la ejecuta:

```tsx
onMessage("Hello")
```

Esto permite que el hijo **dispare una acción en el padre sin modificar directamente el estado del padre**.

---

# 9️⃣ ♻️ COMPONENT REUSABILITY

La **reutilización de componentes** consiste en crear componentes suficientemente genéricos para utilizarlos en diferentes partes de la aplicación.

Por ejemplo:

```tsx
function Button({ text, onClick }) {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
}
```

Ahora puedes reutilizarlo:

```tsx
<Button text="Save" onClick={save} />

<Button text="Delete" onClick={remove} />

<Button text="Cancel" onClick={cancel} />
```

Un solo componente:

```text
Button
 │
 ├── Save
 ├── Delete
 └── Cancel
```

### 🧠 Buen componente reutilizable

Idealmente:

* Tiene una responsabilidad clara.
* Recibe configuración mediante props.
* No depende innecesariamente de datos específicos.
* Puede utilizarse en diferentes contextos.

---

# 🔟 🎛️ CONTROLLED COMPONENTS

Un **Controlled Component** es un componente cuyo valor está controlado por el **state de React**.

Es especialmente común en formularios.

Ejemplo:

```tsx
function Form() {
  const [name, setName] = useState("");

  return (
    <input
      value={name}
      onChange={(event) => setName(event.target.value)}
    />
  );
}
```

Aquí:

```text
React State
    │
    │ value
    ▼
  Input
    │
    │ onChange
    ▼
React State
```

El state controla el valor del input.

### 🧠 ¿Por qué es importante?

Porque React conoce en todo momento el valor actual del formulario.

Puedes utilizar ese valor para:

* Validaciones
* Envío de formularios
* Mostrar mensajes
* Habilitar/deshabilitar botones
* Transformar información

### 📌 Comparación conceptual con Angular

En Angular puedes trabajar con:

```text
Reactive Forms
```

En React, una estrategia equivalente para tener control explícito sobre los valores es:

```text
State
 ↓
value
 ↓
onChange
```

No son exactamente el mismo mecanismo, pero cumplen una función conceptual similar en formularios controlados.

---

# 1️⃣1️⃣ 🧠 COMPONENT RESPONSIBILITIES

Cada componente debería tener una **responsabilidad clara**.

Por ejemplo:

```text
❌ UserPage
 ├── Fetch users
 ├── Validate forms
 ├── Render table
 ├── Handle authentication
 ├── Format dates
 ├── Save data
 └── Display notifications
```

Es preferible dividir responsabilidades:

```text
UserPage
   │
   ├── UserList
   │
   ├── UserForm
   │
   ├── UserCard
   │
   └── UserActions
```

Y separar lógica cuando corresponda mediante:

```text
Components
    ↓
UI

Hooks
    ↓
Reusable logic

Services / API layer
    ↓
External data
```

### 🧠 Principio importante

Un componente no debería convertirse en un lugar donde vive **toda la lógica de la aplicación**.

Busca que cada pieza tenga una responsabilidad entendible.

---

# 🧠 COMUNICACIÓN ENTRE COMPONENTES

La relación fundamental puede resumirse así:

```text
                 PARENT
                   │
             ┌─────┴─────┐
             │           │
          props        function
             │           │
             ▼           │
           CHILD         │
             │           │
             └───────────┘
               callback
```

### Padre → Hijo

```text
Props
```

### Hijo → Padre

```text
Callback function
```

### Contenido dentro del componente

```text
children
```

---

# 🅰️ ANGULAR VS ⚛️ REACT

Si vienes de Angular, puedes pensar inicialmente:

| Angular                      | React                         |
| ---------------------------- | ----------------------------- |
| `@Input()`                   | Props                         |
| `@Output()` + `EventEmitter` | Callback mediante props       |
| Component                    | Component                     |
| Template                     | JSX                           |
| `ng-content`                 | `children`                    |
| Reactive Forms               | Controlled Components + state |
| Component composition        | Component composition         |

⚠️ **No son equivalencias exactas.** Son solamente una forma útil de construir el modelo mental inicial.

---

# 🧠 MODELO MENTAL

La idea que debes quedarte de este tema es:

```text
             COMPONENT
                 │
        ┌────────┼────────┐
        ▼        ▼        ▼
      Props    State    Children
        │        │        │
        └────────┼────────┘
                 ▼
                JSX
                 │
                 ▼
                 UI
```

Y para comunicación:

```text
Parent
  │
  │ props
  ▼
Child
  │
  │ callback
  ▼
Parent
```

👉 **React construye interfaces componiendo piezas pequeñas y reutilizables, pasando información mediante props y permitiendo comunicación mediante funciones/callbacks.**
