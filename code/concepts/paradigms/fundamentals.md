# 📄 Paradigmas de Programación

Los **paradigmas de programación** son diferentes formas de **pensar, estructurar y resolver problemas mediante código**.

Un paradigma define cómo podemos organizar:

* la lógica del programa
* los datos
* el estado
* las operaciones
* la comunicación entre partes del sistema
* la forma de expresar una solución

Un mismo lenguaje puede soportar **varios paradigmas al mismo tiempo**.

Por ejemplo, TypeScript permite utilizar:

```text
Imperativo
Declarativo
Orientado a Objetos
Funcional
Reactivo
Orientado a Eventos
```

---

# 🧠 ¿QUÉ ES UN PARADIGMA?

Podemos verlo así:

```text
Problema
   ↓
Forma de pensar
   ↓
Paradigma
   ↓
Implementación
   ↓
Código
```

Por ejemplo, para resolver:

> Obtener los números pares y multiplicarlos por 2.

Podemos hacerlo de diferentes maneras dependiendo del paradigma.

---


# 🔗 LOS PARADIGMAS PUEDEN COMBINARSE

🔥 Esta es probablemente la parte más importante.

No tienes que elegir solamente uno.

Una aplicación real puede utilizar varios paradigmas simultáneamente.

Por ejemplo, una aplicación Angular:

```text
Angular Application
        │
        ├── Component-Based
        │
        ├── Declarative
        │
        ├── Object-Oriented
        │
        ├── Functional
        │
        ├── Reactive
        │
        └── Event-Driven
```

Y dentro de un mismo componente:

```ts
users$
  .pipe(
    map(users => users.filter(user => user.active))
  );
```

puedes estar utilizando:

```text
Component-Based
       +
Reactive
       +
Functional
       +
Declarative
```

---

# 🧠 MAPA GENERAL

Una forma útil de organizar todo lo aprendido:

```text
                    PROGRAMACIÓN
                         │
            ┌────────────┴────────────┐
            │                         │
      PARADIGMAS CLÁSICOS       ENFOQUES MODERNOS
            │                         │
      ┌─────┼─────┐             ┌────┼────┐
      ▼     ▼     ▼             ▼    ▼    ▼
 Imperativo OOP  Funcional   Reactivo Eventos Componentes
      │
      ▼
 Procedural
      │
      └───────────────┐
                      ▼
                   Lógico
                      
                 Data-Oriented
```

No tomes este árbol como una clasificación universal; **las categorías se solapan** y diferentes autores las organizan de distintas maneras.

---

# ⚖️ COMPARACIÓN

| Paradigma / enfoque    | Se centra en   | Pregunta principal                  |
| ---------------------- | -------------- | ----------------------------------- |
| ⚙️ **Imperativo**      | Instrucciones  | ¿Cómo lo hago?                      |
| 📜 **Declarativo**     | Resultado      | ¿Qué quiero?                        |
| 🔢 **Procedural**      | Procedimientos | ¿Cómo divido las tareas?            |
| 🧱 **OOP**             | Objetos        | ¿Qué objetos existen?               |
| 🧮 **Funcional**       | Funciones      | ¿Cómo transformo los datos?         |
| 🔄 **Reactivo**        | Streams        | ¿Cómo reacciono a cambios?          |
| 🎯 **Event-Driven**    | Eventos        | ¿Qué ocurre cuando sucede X?        |
| 🧩 **Component-Based** | Componentes    | ¿Cómo divido la aplicación?         |
| 🧠 **Lógico**          | Reglas         | ¿Qué puedo deducir?                 |
| 📊 **Data-Oriented**   | Datos          | ¿Cómo organizo y proceso los datos? |

---

# 🧠 CÓMO RECORDARLOS

```text
⚙️ IMPERATIVO
"HAZ ESTO, DESPUÉS ESTO"

📜 DECLARATIVO
"QUIERO ESTE RESULTADO"

🔢 PROCEDURAL
"DIVIDAMOS EL PROGRAMA EN PROCEDIMIENTOS"

🧱 OOP
"ORGANICEMOS EL SISTEMA EN OBJETOS"

🧮 FUNCIONAL
"TRANSFORMEMOS LOS DATOS CON FUNCIONES"

🔄 REACTIVO
"REACCIONEMOS A LOS CAMBIOS"

🎯 EVENT-DRIVEN
"REACCIONEMOS A LOS EVENTOS"

🧩 COMPONENT-BASED
"CONSTRUYAMOS CON PIEZAS REUTILIZABLES"

🧠 LÓGICO
"DEFINAMOS HECHOS Y REGLAS"

📊 DATA-ORIENTED
"PENSEMOS PRIMERO EN LOS DATOS"
```

---

# 🎯 PARA TU PERFIL DE DESARROLLO WEB

No necesitas darles a todos el mismo peso.

Yo los priorizaría así:

### 🔥 PRIORIDAD MÁXIMA

```text
Imperativo
Declarativo
Orientado a Objetos
Funcional
Reactivo
Orientado a Eventos
Basado en Componentes
```

Estos aparecen constantemente cuando trabajas con:

```text
JavaScript
TypeScript
Angular
React
Node.js
Express
RxJS
```

### 🟡 PRIORIDAD MEDIA

```text
Procedural
Data-Oriented
```

Conviene conocerlos y entender su propósito.

### 🟢 PRIORIDAD BAJA

```text
Logic Programming
```

Es importante como conocimiento general de paradigmas, pero no necesitas profundizar en él para tu stack actual.

Y una distinción importante para tus apuntes: **imperativo, declarativo, OOP, funcional y lógico son los paradigmas clásicos que más claramente aparecen en las clasificaciones académicas; reactive, event-driven y component-based son enfoques/modelos especialmente relevantes en el desarrollo moderno.** No significa que sean "menos importantes", solo que la clasificación teórica no es exactamente la misma.
