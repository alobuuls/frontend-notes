# 📜 2. PARADIGMA DECLARATIVO

El paradigma **declarativo** se centra en **qué resultado quieres obtener**, dejando muchos detalles de implementación a la herramienta o lenguaje.

```text
Imperativo
    ↓
¿Cómo hacerlo?

Declarativo
    ↓
¿Qué quiero?
```

Por ejemplo:

```ts
const result = numbers
  .filter(number => number % 2 === 0)
  .map(number => number * 2);
```

Estamos expresando:

```text
Quiero:
→ números pares
→ multiplicados por 2
```

Otro ejemplo muy claro es SQL:

```sql
SELECT name
FROM users
WHERE age >= 18;
```

No describes manualmente cómo recorrer la tabla.

Describes:

> Quiero los usuarios cuya edad sea mayor o igual a 18.

### 💻 Ejemplos

El paradigma declarativo aparece en:

* SQL
* HTML
* CSS
* JSX
* configuraciones
* programación funcional

### 📌 Idea principal

> **Declarativo = describir qué quieres obtener.**

---
