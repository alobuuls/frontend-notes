# 🧠 20. PREGUNTAS TRAMPA / DE RAZONAMIENTO

---

## ❓ 1. ¿QUÉ PASA AQUÍ?

```typescript
console.log(a);
var a = 10;
```

### ✅ Respuesta

Imprime:

```text
undefined
```

### 🧠 ¿Por qué?

Porque las declaraciones hechas con `var` son **hoisted**.

Conceptualmente, JavaScript interpreta el código aproximadamente así:

```typescript
var a;

console.log(a);

a = 10;
```

La declaración de `a` se mueve conceptualmente al inicio del scope, pero **la asignación `10` no**.

Por eso cuando hacemos:

```typescript
console.log(a);
```

`a` existe, pero todavía tiene el valor:

```text
undefined
```

> [!TIP]
>
> ### 🎯 En entrevista
>
> "`var` es hoisted y su declaración se inicializa con `undefined`, por eso el `console.log` no genera un error."

---

## ❓ 2. ¿Y AQUÍ?

```typescript
console.log(a);
let a = 10;
```

### ❌ Respuesta

No imprime `undefined`.

Produce un:

```text
ReferenceError
```

### 🧠 ¿Por qué?

`let` también tiene **hoisting**, pero no puede utilizarse antes de su declaración debido a la **Temporal Dead Zone (TDZ)**.

Conceptualmente:

```text
Inicio del scope
      ↓
     TDZ
      ↓
let a = 10
      ↓
a disponible
```

Cuando hacemos:

```typescript
console.log(a);
```

`a` todavía está dentro de la **Temporal Dead Zone**.

Por eso obtenemos:

```text
ReferenceError: Cannot access 'a' before initialization
```

### 🔥 Diferencia importante

| Declaración     | Hoisting | Antes de la inicialización            |
| --------------- | -------- | ------------------------------------- |
| `var`           | Hoisted  | `undefined`                           |
| `let` / `const` | Hoisted  | Temporal Dead Zone → `ReferenceError` |

---

## ❓ 3. ¿QUÉ DEVUELVE?

```typescript
console.log(1 + "2");
```

### ✅ Respuesta

```text
"12"
```

### 🧠 ¿Por qué?

JavaScript realiza **type coercion**.

Cuando usamos `+` y uno de los operandos es un string, JavaScript convierte el otro operando a string.

Entonces:

```text
1 + "2"
```

se convierte conceptualmente en:

```text
"1" + "2"
```

Resultado:

```text
"12"
```

> [!WARNING]
>
> ### ⚠️ Ojo
>
> Esto es diferente:
>
> ```typescript
> 1 - "2"
> ```
>
> Aquí JavaScript convierte `"2"` a número:
>
> ```text
> 1 - 2
> ```
>
> Resultado:
>
> ```text
> -1
> ```

---

## ❓ 4. ¿Y ESTO?

```typescript
console.log([] == false);
```

### 🤯 Respuesta

Devuelve:

```text
true
```

Esta es una pregunta clásica de **type coercion**.

### 🧠 ¿Qué sucede?

Estamos utilizando:

```typescript
==
```

que permite conversión implícita de tipos.

De manera simplificada:

```text
[] 
↓
"" 
↓
0
```

Mientras:

```text
false
↓
0
```

Entonces termina comparando:

```text
0 == 0
```

Resultado:

```text
true
```

> [!TIP]
>
> ### 🔥 Por eso en código moderno generalmente se prefiere:
>
> ```typescript
> ===
> ```
>
> porque compara sin realizar coerción implícita.
>
> Por ejemplo:
>
> ```typescript
> [] === false
> ```
>
> da:
>
> ```text
> false
> ```

---

## ❓ 5. ¿QUÉ IMPRIME?

```typescript
const a = [1, 2, 3];
const b = a;

b.push(4);

console.log(a);
```

### ✅ Respuesta

```text
[1, 2, 3, 4]
```

### 🧠 ¿Por qué?

Porque `b` **no es una copia del array**.

Ambas variables apuntan al mismo objeto en memoria:

```text
        ┌───────────────┐
a ─────►│  [1, 2, 3]    │
        │               │
b ─────►│               │
        └───────────────┘
```

Cuando hacemos:

```typescript
b.push(4);
```

modificamos el mismo array al que apunta `a`.

Por eso:

```typescript
console.log(a);
```

devuelve:

```text
[1, 2, 3, 4]
```

> [!TIP]
>
> ### 🎯 Concepto clave
>
> Los arrays y objetos son **referencias a objetos**.

---

# ❓ 6. ¿Y ESTO?

```typescript
const user = {
  name: 'Alo'
};

const copy = { ...user };

copy.name = 'John';

console.log(user.name);
```

### ✅ Respuesta

```text
"Alo"
```

### 🧠 ¿Por qué?

Aquí sí estamos creando un **nuevo objeto** mediante spread:

```typescript
const copy = { ...user };
```

Conceptualmente:

```text
user
 ↓
{name: "Alo"}

        ↓ spread

copy
 ↓
{name: "Alo"}
```

Son objetos diferentes:

```text
user ──► { name: "Alo" }

copy ──► { name: "Alo" }
```

Entonces:

```typescript
copy.name = 'John';
```

solo modifica `copy`.

Resultado:

```text
user.name
↓
"Alo"
```

> [!WARNING]
>
> ### ⚠️ PERO OJO
>
> El spread hace una **copia superficial**, o **shallow copy**.
>
> Por ejemplo:
>
> ```typescript
> const user = {
>   name: 'Alo',
>   address: {
>     city: 'Bogotá'
>   }
> };
>
> const copy = { ...user };
>
> copy.address.city = 'Medellín';
> ```
>
> Aquí:
>
> ```typescript
> user.address.city
> ```
>
> también sería:
>
> ```text
> "Medellín"
> ```
>
> porque el objeto `address` interno sigue siendo la misma referencia.
>
> 🔥 Esto es muy preguntable.

---

# ❓ 7. ¿QUÉ OCURRE?

```typescript
setTimeout(() => {
  console.log('A');
}, 0);

console.log('B');
```

### ✅ Respuesta

Imprime:

```text
B
A
```

### 🧠 ¿Por qué?

Aunque el `setTimeout` tenga:

```typescript
0
```

su callback **no se ejecuta inmediatamente**.

Tenemos:

```text
setTimeout(...)
↓
se registra el callback

console.log('B')
↓
se ejecuta inmediatamente

Event Loop
↓
cuando corresponde
↓
callback de setTimeout
↓
console.log('A')
```

Resultado:

```text
B
A
```

---

# 🔥 PREGUNTA DE SEGUIMIENTO

El entrevistador puede preguntarte:

> **"¿Entonces `setTimeout(..., 0)` significa que se ejecuta inmediatamente?"**

### ❌ No.

Significa que el callback puede ejecutarse **después de que haya pasado el tiempo mínimo indicado y cuando el event loop pueda procesarlo**.

Por eso:

```typescript
setTimeout(() => {
  console.log('A');
}, 0);

console.log('B');
```

produce:

```text
B
A
```

---

# 🧠 LOS CONCEPTOS QUE ESTÁN EVALUANDO

Estas preguntas parecen pequeñas, pero realmente están comprobando conceptos importantes de JavaScript:

| Pregunta                | Concepto                             |
| ----------------------- | ------------------------------------ |
| `var` antes de declarar | Hoisting                             |
| `let` antes de declarar | Temporal Dead Zone                   |
| `1 + "2"`               | Type coercion                        |
| `[] == false`           | Loose equality + coercion            |
| `b = a`                 | Referencias                          |
| `{ ...user }`           | Shallow copy                         |
| `setTimeout(..., 0)`    | Event Loop / Asynchronous JavaScript |

---

# 🎯 LO QUE DEBES HACER EN UNA ENTREVISTA

No respondas únicamente:

> "`undefined`."

Intenta siempre responder:

> **"Devuelve `undefined` porque..."**

Por ejemplo:

### ❌ Respuesta débil

> "`console.log(a)` imprime `undefined`."

### 🔥 Respuesta fuerte

> "`console.log(a)` imprime `undefined` porque `var` tiene hoisting. La declaración de `a` se procesa antes de la ejecución, pero la asignación de `10` ocurre después del `console.log`, por lo que en ese momento `a` todavía tiene el valor `undefined`."

Eso demuestra que **entiendes el comportamiento de JavaScript y no simplemente memorizaste el resultado**.

---

# 🧠 MINI TABLA PARA MEMORIZAR

```text
var antes de declarar
↓
undefined


let / const antes de declarar
↓
ReferenceError
↓
Temporal Dead Zone


1 + "2"
↓
"12"


[] == false
↓
true
↓
Type coercion


const b = a
↓
misma referencia


{ ...a }
↓
nuevo objeto
↓
shallow copy


setTimeout(..., 0)
↓
no es inmediato
↓
B
↓
A
```

> [!IMPORTANT]
>
> ### 🔥 Y esta sección probablemente es de las más valiosas de toda tu preparación
>
> Porque muchas preguntas de entrevista de JavaScript tienen exactamente este formato:
>
> > **"¿Qué devuelve esto?"**
>
> Pero la segunda pregunta casi siempre es más importante:
>
> > **"¿Por qué?"**
>
> Si puedes explicar el **por qué**, ya no estás simplemente memorizando JavaScript: estás demostrando que entiendes cómo funciona.
