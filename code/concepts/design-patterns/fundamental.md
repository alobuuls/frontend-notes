# 📘 PATRONES DE DISEÑO

Los **patrones de diseño (Design Patterns)** son soluciones generales y reutilizables para problemas comunes de diseño de software.

No son código que debas copiar literalmente.

Son **formas de organizar clases, objetos y responsabilidades** para resolver determinados problemas.

> 💡 **TIP**
>
> 🧠 **Patrón de diseño = solución reutilizable para un problema recurrente de diseño de software.**

---

## 📚 ÍNDICE 

1. 📘 [¿Qué son los Patrones de Diseño?](#-patrones-de-diseño)
2. 🧠 [¿Para qué sirven?](#-para-qué-sirven)
3. 🏛️ [Categorías Principales](#-categorías-principales)

   * 🏗️ Creational Patterns
   * 🧱 Structural Patterns
   * 🔄 Behavioral Patterns
4. 🏛️ [Design Patterns vs Architectural Patterns](#-design-patterns-vs-architectural-patterns)

   * 🧩 Design Patterns
   * 🏛️ Architectural Patterns
5. 🔑 [Diferencia Principal](#-diferencia-principal)
6. 🧠 [Resumen](#-resumen)


# 🧠 ¿PARA QUÉ SIRVEN?

Los patrones ayudan a:

| 🎯 Objetivo       | 💡 Beneficio                                    |
| ----------------- | ----------------------------------------------- |
| 🧩 **Organizar**  | Mejorar la estructura del código                |
| ♻️ **Reutilizar** | Aplicar soluciones conocidas                    |
| 📦 **Separar**    | Dividir responsabilidades                       |
| 🔗 **Reducir**    | Disminuir el acoplamiento                       |
| 🔄 **Facilitar**  | Hacer más sencillos los cambios                 |
| 🧪 **Mejorar**    | Facilitar la testabilidad                       |
| 📐 **Establecer** | Utilizar estructuras conocidas                  |
| 👥 **Comunicar**  | Facilitar la comunicación entre desarrolladores |

Por ejemplo, en lugar de explicar:

> "Tenemos una clase que crea diferentes tipos de objetos dependiendo de una condición..."

puedes decir:

> 🏭 **"Estamos utilizando Factory."**

---

# 🏛️ CATEGORÍAS PRINCIPALES

Los patrones clásicos de **Gang of Four (GoF)** se dividen en:

| 🏗️ Creacionales | 🧱 Estructurales | 🔄 Comportamiento       |
| ---------------- | ---------------- | ----------------------- |
| Factory          | Adapter          | Observer                |
| Singleton        | Decorator        | Strategy                |
| Prototype        | Facade           | Command                 |
| Builder          | Proxy            | State                   |
| Abstract Factory | Composite        | Iterator                |
|                  | Bridge           | Mediator                |
|                  | Flyweight        | Template Method         |
|                  |                  | Chain of Responsibility |
|                  |                  | Memento                 |
|                  |                  | Visitor                 |

> 📌 **IDEA CLAVE**
>
> Los patrones se agrupan según **qué problema principal ayudan a resolver**:
>
> * 🏗️ **Creational** → creación de objetos
> * 🧱 **Structural** → composición y relación entre objetos
> * 🔄 **Behavioral** → comunicación y comportamiento de objetos

---

# 🏛️ DESIGN PATTERNS vs ARCHITECTURAL PATTERNS

Una distinción que conviene guardar en la cabeza:

| 🧩 Design Patterns   | 🏛️ Architectural Patterns         |
| -------------------- | ---------------------------------- |
| Soluciones de diseño | Organización de sistemas completos |
| Factory              | MVC                                |
| Singleton            | Layered                            |
| Prototype            | Clean                              |
| Builder              | Hexagonal                          |
| Abstract Factory     | CQRS                               |

### 🔑 Diferencia principal

```text
Design Patterns
       ↓
soluciones de diseño
       │
       ├── Creational
       ├── Structural
       └── Behavioral

Architectural Patterns
       ↓
organización de sistemas completos
       │
       ├── MVC
       ├── Layered
       ├── Clean
       ├── Hexagonal
       └── CQRS
```

> ⚠️ **IMPORTANTE**
>
> **No son lo mismo:** un `Factory` resuelve principalmente un problema de **creación de objetos**, mientras que `Clean Architecture`, por ejemplo, define una estrategia mucho más amplia para organizar toda una aplicación.

---

## 🧠 RESUMEN

> **Design Pattern = solución reutilizable para un problema recurrente de diseño.**
>
> **Architectural Pattern = estrategia para organizar un sistema completo.**
