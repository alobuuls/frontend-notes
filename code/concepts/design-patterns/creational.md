# 🏗️ 01. PATRONES CREACIONALES

Se enfocan en **cómo crear objetos**.

```text
Creación de objetos
        ↓
Patrones creacionales
```

## 📚 ÍNDICE

- [🏗️ 01. PATRONES CREACIONALES](#️-01-patrones-creacionales)
  - [📚 ÍNDICE](#-índice)
    - [📚 Principales](#-principales)
- [🔹 SINGLETON](#-singleton)
    - [💻 Ejemplo conceptual](#-ejemplo-conceptual)
    - [🔧 Uso](#-uso)
    - [📌 Útil para](#-útil-para)
- [🔹 FACTORY METHOD](#-factory-method)
- [🔹 ABSTRACT FACTORY](#-abstract-factory)
- [🔹 BUILDER](#-builder)
- [🔹 PROTOTYPE](#-prototype)
  - [🧠 RESUMEN](#-resumen)


### 📚 Principales

| 🔹 Patrón        | 🎯 Idea principal         |
| ---------------- | ------------------------- |
| Singleton        | Una única instancia       |
| Factory Method   | Encapsular la creación    |
| Abstract Factory | Crear familias de objetos |
| Builder          | Construir paso a paso     |
| Prototype        | Crear mediante clonación  |

---

# 🔹 SINGLETON

Garantiza que exista **una única instancia** de una clase y proporciona un punto de acceso a ella.

```text
Application
     │
     ▼
 Singleton
     │
     ▼
  Instance
```

### 💻 Ejemplo conceptual

```ts
class Database {
  private static instance: Database;

  private constructor() {}

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
}
```

### 🔧 Uso

```ts
const db1 = Database.getInstance();
const db2 = Database.getInstance();

db1 === db2;
```

Resultado:

```text
true
```

### 📌 Útil para

* ⚙️ configuraciones
* 🔧 ciertos servicios
* 🔗 conexiones compartidas
* 🌐 recursos globales

> ⚠️ **IMPORTANTE**
>
> No significa que **todo servicio global deba ser Singleton**.

---

# 🔹 FACTORY METHOD

Delegar la creación de objetos a una estructura especializada.

En lugar de:

```ts
const user = new AdminUser();
```

podemos tener:

```ts
const user = UserFactory.create('admin');
```

Conceptualmente:

```text
Factory
   │
   ├── Admin
   ├── Customer
   └── Guest
```

> 📌 **Idea**
>
> **Factory = centralizar o encapsular la creación de objetos.**

---

# 🔹 ABSTRACT FACTORY

Permite crear **familias de objetos relacionados** sin especificar directamente sus clases concretas.

Por ejemplo:

```text
UI Factory
    │
    ├── Windows Button
    ├── Windows Checkbox
    └── Windows Input
```

o:

```text
UI Factory
    │
    ├── Mac Button
    ├── Mac Checkbox
    └── Mac Input
```

> 📌 **Idea**
>
> **Abstract Factory = crear familias compatibles de objetos.**

---

# 🔹 BUILDER

Se utiliza para construir objetos complejos **paso a paso**.

```ts
const user = new UserBuilder()
  .setName('Alo')
  .setEmail('alo@example.com')
  .setAdmin(true)
  .build();
```

Conceptualmente:

```text
Builder
  │
  ├── setName()
  ├── setEmail()
  ├── setAdmin()
  │
  ▼
Object
```

> 📌 **Idea**
>
> **Builder = construir objetos complejos paso a paso.**

---

# 🔹 PROTOTYPE

Permite crear nuevos objetos a partir de un objeto existente mediante **clonación**.

```text
Prototype
    │
    ├── clone
    ▼
 Object
```

En JavaScript este concepto es especialmente importante porque el lenguaje utiliza **prototipos**.

```ts
const user = {
  name: 'Alo'
};

const copy = Object.create(user);
```

> ⚠️ **IMPORTANTE**
>
> El patrón **Prototype** y el sistema de prototipos de JavaScript están relacionados conceptualmente, pero no son exactamente lo mismo.

---

## 🧠 RESUMEN

| 🏗️ Patrón           | 🧠 Recuerda                |
| -------------------- | -------------------------- |
| **Singleton**        | Una única instancia        |
| **Factory Method**   | Centralizar la creación    |
| **Abstract Factory** | Crear familias compatibles |
| **Builder**          | Construir paso a paso      |
| **Prototype**        | Clonar objetos existentes  |

> 💡 **TIP**
>
> Todos pertenecen a los **patrones creacionales** porque el problema principal que resuelven está relacionado con la **creación de objetos**.
