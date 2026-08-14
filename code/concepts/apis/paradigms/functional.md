# 🧮 5. PARADIGMA FUNCIONAL

La programación funcional trata el programa principalmente como una **composición de funciones**.

```text
Input
  ↓
Function
  ↓
Function
  ↓
Output
```

Por ejemplo:

```ts
const double = (number: number) => number * 2;

double(5);
```

Resultado:

```text
5
 ↓
double()
 ↓
10
```

---

## 🧠 Conceptos importantes

### Funciones puras

Una función pura produce el mismo resultado para los mismos inputs y evita efectos secundarios externos.

```ts
const add = (a: number, b: number) => a + b;
```

```text
add(2, 3)
   ↓
   5
```

---

### Inmutabilidad

Evitar modificar directamente los datos existentes.

En lugar de:

```ts
user.name = 'New Name';
```

puedes crear un nuevo objeto:

```ts
const updatedUser = {
  ...user,
  name: 'New Name'
};
```

---

### Higher-Order Functions

Funciones que reciben funciones o devuelven funciones.

```ts
numbers.map(number => number * 2);
```

---

### Composición

Combinar funciones pequeñas para construir operaciones más complejas.

```text
Input
 ↓
Function A
 ↓
Function B
 ↓
Function C
 ↓
Output
```

### 📌 Idea principal

> **Funcional = construir soluciones mediante funciones, composición, inmutabilidad y control de efectos secundarios.**

---
