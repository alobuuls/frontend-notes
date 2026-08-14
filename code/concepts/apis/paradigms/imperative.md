# ⚙️ 1. PARADIGMA IMPERATIVO

El paradigma **imperativo** se centra en **cómo realizar una tarea**.

El programa se expresa como una serie de instrucciones que modifican el estado del programa.

```text
Estado
  ↓
Instrucción
  ↓
Cambio de estado
  ↓
Instrucción
  ↓
Nuevo estado
```

Por ejemplo:

```ts
const numbers = [1, 2, 3, 4];

const result = [];

for (const number of numbers) {
  if (number % 2 === 0) {
    result.push(number * 2);
  }
}
```

Aquí indicamos paso a paso:

```text
1. Recorrer los números
2. Comprobar si son pares
3. Multiplicarlos por 2
4. Guardarlos en el resultado
```

### 🧠 Características

* instrucciones paso a paso
* modificación de estado
* variables
* asignaciones
* `if`
* `for`
* `while`
* control explícito del flujo

### 📌 Idea principal

> **Imperativo = explicar cómo hacer algo.**

---