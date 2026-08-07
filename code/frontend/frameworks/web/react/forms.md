# 📝 REACT FORMS

Los formularios en React permiten **capturar, controlar, validar y enviar información introducida por el usuario**.

A diferencia de Angular, React no proporciona un sistema de formularios tan completo como **Reactive Forms** de forma nativa. En React, los formularios se construyen principalmente utilizando **state, props y eventos**, y para aplicaciones más complejas es común utilizar librerías especializadas.

---
## 📚 ÍNDICE — 📝 REACT FORMS

- [📝 REACT FORMS](#-react-forms)
  - [📚 ÍNDICE — 📝 REACT FORMS](#-índice---react-forms)
- [1️⃣ 📝 INPUTS](#1️⃣--inputs)
    - [🧠 Idea principal](#-idea-principal)
- [2️⃣ 🎛️ CONTROLLED COMPONENTS](#2️⃣-️-controlled-components)
    - [🧠 Flujo](#-flujo)
    - [✅ Ventajas](#-ventajas)
    - [📌 Es el patrón más común en React](#-es-el-patrón-más-común-en-react)
- [3️⃣ 🔓 UNCONTROLLED COMPONENTS](#3️⃣--uncontrolled-components)
    - [🧠 Flujo](#-flujo-1)
    - [📌 ¿Cuándo puede ser útil?](#-cuándo-puede-ser-útil)
- [4️⃣ 🖱️ FORM EVENTS](#4️⃣-️-form-events)
    - [🧠 Los dos eventos más importantes](#-los-dos-eventos-más-importantes)
- [5️⃣ 📤 SUBMIT](#5️⃣--submit)
    - [🛑 `preventDefault()`](#-preventdefault)
    - [🧠 Flujo típico](#-flujo-típico)
- [6️⃣ ✅ VALIDATION](#6️⃣--validation)
    - [🧠 Validación típica](#-validación-típica)
    - [📌 Validación en tiempo real](#-validación-en-tiempo-real)
- [7️⃣ 🗃️ FORM STATE](#7️⃣-️-form-state)
    - [🧠 ¿Por qué es importante?](#-por-qué-es-importante)
- [8️⃣ 📚 FORM LIBRARIES](#8️⃣--form-libraries)
    - [🧠 Importante](#-importante)
- [9️⃣ 🆚 ANGULAR FORMS VS REACT FORMS](#9️⃣--angular-forms-vs-react-forms)
  - [🅰️ Angular](#️-angular)
  - [⚛️ React](#️-react)
- [🆚 COMPARACIÓN RÁPIDA](#-comparación-rápida)
    - [🔗 Concepto importante](#-concepto-importante)
- [🧠 MODELO MENTAL](#-modelo-mental)

---

# 1️⃣ 📝 INPUTS

Los inputs son los elementos mediante los cuales el usuario introduce información.

Ejemplos:

```tsx
<input />
<textarea />
<select />
```

También pueden tener diferentes tipos:

```tsx
<input type="text" />
<input type="email" />
<input type="password" />
<input type="number" />
<input type="date" />
<input type="checkbox" />
```

Ejemplo:

```tsx
<input
  type="text"
  placeholder="Enter your name"
/>
```

### 🧠 Idea principal

```text
👤 Usuario
   ↓
📝 Input
   ↓
📦 Valor introducido
   ↓
⚛️ React
```

Para trabajar correctamente con formularios, React necesita saber **qué valor tiene el input y qué hacer cuando cambia**.

---

# 2️⃣ 🎛️ CONTROLLED COMPONENTS

Un **Controlled Component** es un input cuyo valor está controlado por el **state de React**.

Es decir:

```text
React State
    ↓
  value
    ↓
  Input
    ↓
onChange
    ↓
React State
```

Ejemplo:

```tsx
function LoginForm() {
  const [email, setEmail] = useState("");

  return (
    <input
      type="email"
      value={email}
      onChange={(event) => setEmail(event.target.value)}
    />
  );
}
```

Aquí:

```tsx
value={email}
```

hace que React controle el valor.

Y:

```tsx
onChange={(event) => setEmail(event.target.value)}
```

actualiza el state cuando el usuario escribe.

### 🧠 Flujo

```text
Usuario escribe
      ↓
onChange
      ↓
setEmail()
      ↓
State actualizado
      ↓
Re-render
      ↓
value actualizado
```

### ✅ Ventajas

* El estado del formulario está centralizado.
* Puedes validar mientras el usuario escribe.
* Puedes habilitar/deshabilitar botones fácilmente.
* Puedes controlar exactamente qué aparece en cada input.

### 📌 Es el patrón más común en React

Especialmente para formularios donde necesitas controlar y validar los datos.

---

# 3️⃣ 🔓 UNCONTROLLED COMPONENTS

Un **Uncontrolled Component** es un input cuyo valor es manejado principalmente por el **DOM**, en lugar de almacenarse continuamente en React state.

React puede acceder al valor mediante `ref`.

Ejemplo:

```tsx
function LoginForm() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    console.log(inputRef.current?.value);
  };

  return (
    <>
      <input ref={inputRef} />

      <button onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
}
```

Aquí React no mantiene:

```tsx
const [value, setValue] = useState("");
```

El valor permanece en el DOM.

### 🧠 Flujo

```text
Usuario escribe
      ↓
Input / DOM
      ↓
ref
      ↓
React obtiene el valor
```

### 📌 ¿Cuándo puede ser útil?

* Formularios sencillos.
* Integración con código que trabaja directamente con el DOM.
* Cuando no necesitas reaccionar a cada cambio del input.
* Algunos casos donde quieres reducir state local.

---

# 4️⃣ 🖱️ FORM EVENTS

React utiliza eventos para detectar las interacciones del usuario con el formulario.

Los más importantes son:

| Evento      | ¿Cuándo ocurre?                 |
| ----------- | ------------------------------- |
| `onChange`  | Cuando cambia el valor          |
| `onInput`   | Cuando se introduce información |
| `onFocus`   | Cuando el elemento recibe foco  |
| `onBlur`    | Cuando pierde el foco           |
| `onSubmit`  | Cuando se envía el formulario   |
| `onKeyDown` | Cuando se presiona una tecla    |
| `onKeyUp`   | Cuando se libera una tecla      |

Ejemplo:

```tsx
<input
  onChange={(event) => {
    console.log(event.target.value);
  }}
/>
```

### 🧠 Los dos eventos más importantes

```text
onChange
   ↓
Cambió el valor

onSubmit
   ↓
Se envió el formulario
```

---

# 5️⃣ 📤 SUBMIT

`onSubmit` permite controlar el envío del formulario.

Ejemplo:

```tsx
function LoginForm() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log("Form submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" />

      <button type="submit">
        Login
      </button>
    </form>
  );
}
```

### 🛑 `preventDefault()`

Por defecto, el navegador puede realizar su comportamiento tradicional al enviar un formulario.

En aplicaciones React normalmente queremos controlar nosotros ese proceso.

Por eso utilizamos:

```tsx
event.preventDefault();
```

### 🧠 Flujo típico

```text
👤 Usuario
    ↓
Completa formulario
    ↓
Click Submit
    ↓
onSubmit
    ↓
preventDefault()
    ↓
Validación
    ↓
API
```

---

# 6️⃣ ✅ VALIDATION

La validación permite comprobar que los datos introducidos cumplen determinadas reglas.

Por ejemplo:

```text
Email
↓
¿Tiene formato válido?

Password
↓
¿Tiene mínimo 8 caracteres?

Name
↓
¿Es obligatorio?
```

Puedes realizar validaciones manualmente:

```tsx
const isValid = email.includes("@");

if (!isValid) {
  setError("Invalid email");
}
```

También puedes utilizar atributos HTML:

```tsx
<input
  type="email"
  required
/>
```

Otros atributos:

```tsx
required
minLength
maxLength
min
max
pattern
```

### 🧠 Validación típica

```text
Form Submit
     ↓
Validate
     ↓
 ┌───┴────┐
 ▼        ▼
Valid   Invalid
 │        │
 ▼        ▼
API     Errors
```

### 📌 Validación en tiempo real

También puedes validar mientras el usuario escribe:

```tsx
onChange={(event) => {
  const value = event.target.value;

  setEmail(value);

  if (!value.includes("@")) {
    setError("Invalid email");
  }
}}
```

---

# 7️⃣ 🗃️ FORM STATE

El **form state** representa toda la información relacionada con el estado actual del formulario.

Puede incluir:

```text
📦 Values
❌ Errors
👁️ Touched fields
⏳ Loading
✅ Validity
📤 Submission status
```

Por ejemplo:

```tsx
const [form, setForm] = useState({
  email: "",
  password: ""
});
```

Y puedes tener otro state:

```tsx
const [errors, setErrors] = useState({
  email: "",
  password: ""
});
```

Conceptualmente:

```text
             📝 FORM STATE
                   │
      ┌────────────┼────────────┐
      ▼            ▼            ▼
   Values        Errors       Status
      │            │            │
   email       emailError    loading
   password    passwordError  submitted
```

### 🧠 ¿Por qué es importante?

Porque una aplicación necesita saber no solamente **qué escribió el usuario**, sino también:

* si el dato es válido;
* qué campos tienen errores;
* si el formulario se está enviando;
* si ya fue enviado;
* si debe mostrar mensajes.

---

# 8️⃣ 📚 FORM LIBRARIES

Para formularios pequeños, React puede manejar todo directamente con:

```text
useState
useRef
events
```

Pero cuando los formularios crecen, la cantidad de lógica puede aumentar considerablemente.

Por ejemplo:

```text
20 inputs
      ↓
20 valores
      ↓
20 validaciones
      ↓
20 errores
      ↓
touched state
      ↓
submit state
```

Por eso existen librerías especializadas.

Algunas de las más conocidas son:

| Librería            | Característica principal                  |
| ------------------- | ----------------------------------------- |
| **React Hook Form** | Formularios eficientes y poco código      |
| **Formik**          | Librería popular para manejar formularios |
| **Zod**             | Validación basada en schemas              |
| **Yup**             | Validación mediante schemas               |
| **TanStack Form**   | Formularios tipados y flexibles           |

### 🧠 Importante

No todas cumplen exactamente la misma función.

Por ejemplo:

```text
React Hook Form
       ↓
Manejo del formulario

Zod / Yup
       ↓
Validación del formulario
```

Incluso pueden utilizarse juntas.

Por ejemplo:

```text
React Hook Form
       +
Zod
       ↓
Form management + validation
```

---

# 9️⃣ 🆚 ANGULAR FORMS VS REACT FORMS

Como ya conoces Angular Reactive Forms, esta comparación es especialmente importante.

## 🅰️ Angular

Angular proporciona un sistema de formularios integrado.

Por ejemplo:

```ts
this.form = this.fb.group({
  email: ["", Validators.required],
  password: ["", Validators.required]
});
```

Angular proporciona conceptos como:

```text
FormGroup
FormControl
FormArray
Validators
valueChanges
statusChanges
```

---

## ⚛️ React

React no proporciona un equivalente directo a `FormGroup` o `FormControl` dentro de su API principal.

Normalmente puedes construir el formulario con:

```text
useState
   +
onChange
   +
onSubmit
   +
validation
```

O utilizar una librería:

```text
React
  ↓
React Hook Form
  ↓
Zod / Yup
```

---

# 🆚 COMPARACIÓN RÁPIDA

| Concepto              | 🅰️ Angular                 | ⚛️ React                         |
| --------------------- | --------------------------- | -------------------------------- |
| Estado del formulario | `FormGroup` / `FormControl` | State / librería                 |
| Input controlado      | `FormControl`               | Controlled Component             |
| Validación            | `Validators`                | Manual / librerías               |
| Eventos               | `valueChanges`              | `onChange`                       |
| Submit                | `(ngSubmit)`                | `onSubmit`                       |
| Formularios complejos | Reactive Forms              | React Hook Form / otras          |
| Arrays dinámicos      | `FormArray`                 | State / librerías                |
| Form state            | Integrado                   | Tú lo construyes o usas librería |

### 🔗 Concepto importante

Una comparación útil sería:

```text
🅰️ ANGULAR

Reactive Forms
      ↓
FormGroup
      ↓
FormControl
      ↓
Validators


⚛️ REACT

Controlled Components
      ↓
State
      ↓
Events
      ↓
Validation
      ↓
Form Library (opcional)
```

⚠️ **No son equivalentes exactos.**

Angular tiene un sistema de formularios integrado y estructurado, mientras que React proporciona las piezas fundamentales para construir el comportamiento y deja gran parte de la arquitectura del formulario en manos del desarrollador o de librerías externas.

---

# 🧠 MODELO MENTAL

```text
                 📝 REACT FORMS
                       │
          ┌────────────┴────────────┐
          ▼                         ▼
      CONTROLLED                UNCONTROLLED
          │                         │
        State                      DOM
          │                         │
       onChange                   useRef
          │                         │
          └────────────┬────────────┘
                       ▼
                  FORM STATE
                       │
             ┌─────────┼─────────┐
             ▼         ▼         ▼
           Values    Errors    Status
                       │
                       ▼
                  Validation
                       │
                       ▼
                    Submit
                       │
                       ▼
                      API
```

> [!TIP]
> Si vienes de **Angular Reactive Forms**, piensa que en React primero debes entender muy bien **Controlled Components + State + Events**. Después, cuando los formularios sean más complejos, las form libraries te proporcionan una estructura similar a la que ya conoces en Angular.
