# 🧱 4. PARADIGMA ORIENTADO A OBJETOS

La **programación orientada a objetos (OOP)** organiza el software alrededor de **objetos**.

Un objeto combina:

```text
Datos
 +
Comportamiento
```

Por ejemplo:

```text
User
├── name
├── email
└── login()
```

En TypeScript:

```ts
class User {
  constructor(
    public name: string,
    public email: string
  ) {}

  login() {
    console.log(`${this.name} logged in`);
  }
}
```

Y:

```ts
const user = new User(
  'Alo',
  'alo@example.com'
);
```

---

## 🧩 Conceptos fundamentales

### Encapsulación

Agrupar datos y comportamiento y controlar su acceso.

```text
Object
├── State
└── Methods
```

### Abstracción

Ocultar detalles internos y exponer solamente lo necesario.

### Herencia

Permitir que una clase derive características de otra.

```text
Animal
   ↓
Dog
```

### Polimorfismo

Permitir que diferentes objetos respondan de diferentes maneras a una misma operación.

```text
Animal
├── Dog
└── Cat
```

### 📌 Idea principal

> **OOP = organizar el código alrededor de objetos que contienen datos y comportamiento.**

---
