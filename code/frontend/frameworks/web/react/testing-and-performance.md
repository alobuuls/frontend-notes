# 🧪 TESTING & PERFORMANCE

En una aplicación React no solo importa que la aplicación **funcione**.

También debemos preocuparnos por:

```text
🧪 ¿Funciona correctamente?
        ↓
Testing

⚡ ¿Funciona eficientemente?
        ↓
Performance
```

---

# 🧪 TESTING

El **testing** consiste en crear pruebas automáticas que verifican que nuestra aplicación se comporta como esperamos.

Por ejemplo:

```text
Código
  ↓
Test
  ↓
¿Resultado esperado?
  │
  ├── ✅ Sí → Test pasa
  │
  └── ❌ No → Test falla
```

Los tests ayudan a detectar errores antes de que lleguen a producción y permiten modificar código con mayor confianza.

---

# 📚 ÍNDICE — TESTING & PERFORMANCE

- [🧪 TESTING \& PERFORMANCE](#-testing--performance)
- [🧪 TESTING](#-testing)
- [📚 ÍNDICE — TESTING \& PERFORMANCE](#-índice--testing--performance)
- [1️⃣ 🧩 UNIT TESTING](#1️⃣--unit-testing)
    - [🎯 Objetivo](#-objetivo)
- [2️⃣ 🧩 COMPONENT TESTING](#2️⃣--component-testing)
- [3️⃣ 🔗 INTEGRATION TESTING](#3️⃣--integration-testing)
    - [🎯 Diferencia principal](#-diferencia-principal)
- [4️⃣ 🧪 REACT TESTING LIBRARY](#4️⃣--react-testing-library)
    - [🎯 Filosofía](#-filosofía)
- [5️⃣ 🃏 JEST](#5️⃣--jest)
- [6️⃣ ⚡ VITEST](#6️⃣--vitest)
    - [🆚 Jest vs Vitest](#-jest-vs-vitest)
- [⚡ PERFORMANCE](#-performance)
- [7️⃣ 🔄 RE-RENDERS](#7️⃣--re-renders)
    - [🎯 Idea clave](#-idea-clave)
- [8️⃣ 🧠 MEMOIZATION](#8️⃣--memoization)
- [9️⃣ 🧩 React.memo](#9️⃣--reactmemo)
    - [🎯 Útil cuando](#-útil-cuando)
- [🔟 🧠 useMemo](#--usememo)
    - [🎯 Principal objetivo](#-principal-objetivo)
- [1️⃣1️⃣ 🔗 useCallback](#1️⃣1️⃣--usecallback)
- [1️⃣2️⃣ ✂️ CODE SPLITTING](#1️⃣2️⃣-️-code-splitting)
    - [🎯 Beneficio](#-beneficio)
- [1️⃣3️⃣ 💤 LAZY LOADING](#1️⃣3️⃣--lazy-loading)
    - [🎯 Beneficio](#-beneficio-1)
- [1️⃣4️⃣ ⏳ SUSPENSE](#1️⃣4️⃣--suspense)
- [1️⃣5️⃣ 📦 BUNDLE SIZE](#1️⃣5️⃣--bundle-size)
    - [🎯 Cómo reducirlo](#-cómo-reducirlo)
- [1️⃣6️⃣ 🔬 PROFILING](#1️⃣6️⃣--profiling)
    - [🎯 Idea importante](#-idea-importante)
- [🧠 MAPA MENTAL](#-mapa-mental)
- [🏆 IDEA CLAVE](#-idea-clave-1)

---

# 1️⃣ 🧩 UNIT TESTING

Un **Unit Test** prueba una unidad pequeña e independiente de código.

Por ejemplo:

```text
sum(2, 3)
   ↓
5
```

Podríamos comprobar:

```text
2 + 3
  ↓
¿5?
  ↓
✅
```

Una unidad puede ser:

* Una función.
* Una utilidad.
* Una función de transformación.
* Una pequeña pieza de lógica.

### 🎯 Objetivo

Comprobar que una pieza específica funciona correctamente **de manera aislada**.

---

# 2️⃣ 🧩 COMPONENT TESTING

El **Component Testing** prueba un componente de React y su comportamiento.

Por ejemplo:

```text
Button
  ↓
¿Se muestra?
  ↓
¿Tiene el texto correcto?
  ↓
¿Responde al click?
```

También podemos comprobar:

* Renderizado.
* Props.
* Eventos.
* Estados.
* Interacciones.
* Elementos visibles.

Ejemplo conceptual:

```text
UserForm
   │
   ├── input
   ├── button
   └── validation
```

El test verifica cómo se comporta el componente desde la perspectiva de un usuario.

---

# 3️⃣ 🔗 INTEGRATION TESTING

Un **Integration Test** comprueba que **varias partes de la aplicación funcionan correctamente juntas**.

Por ejemplo:

```text
Component
    ↓
Custom Hook
    ↓
Service
    ↓
API
```

En lugar de probar cada pieza por separado, podemos comprobar cómo colaboran.

Ejemplo:

```text
Login Form
    ↓
Submit
    ↓
Auth Logic
    ↓
Response
    ↓
UI actualizada
```

### 🎯 Diferencia principal

```text
Unit
 ↓
Una pieza

Component
 ↓
Un componente

Integration
 ↓
Varias piezas trabajando juntas
```

---

# 4️⃣ 🧪 REACT TESTING LIBRARY

React Testing Library es una librería utilizada para probar componentes React de una forma cercana a **cómo interactúa un usuario con la aplicación**.

En lugar de centrarnos demasiado en detalles internos:

```text
❌ "¿Qué variable interna tiene este componente?"
```

nos enfocamos en:

```text
✅ "¿Qué puede ver y hacer el usuario?"
```

Por ejemplo:

```text
Usuario
   ↓
Ve botón "Login"
   ↓
Hace click
   ↓
Introduce email
   ↓
Envía formulario
   ↓
Ve mensaje
```

### 🎯 Filosofía

> Testear el comportamiento observable de la aplicación, no su implementación interna.

---

# 5️⃣ 🃏 JEST

Jest es un framework de testing para JavaScript y TypeScript ampliamente utilizado en el ecosistema React.

Puede utilizarse para:

* Unit testing.
* Integration testing.
* Assertions.
* Mocking.
* Spies.
* Tests asíncronos.

Conceptualmente:

```text
Jest
 ├── Test Runner
 ├── Assertions
 ├── Mocking
 └── Reporting
```

Tradicionalmente ha sido una de las herramientas más utilizadas en proyectos React.

---

# 6️⃣ ⚡ VITEST

Vitest es un framework de testing moderno especialmente integrado con proyectos basados en Vite.

Su sintaxis resulta familiar si ya conoces Jest:

```text
describe()
it()
expect()
```

Puede utilizarse para:

* Unit tests.
* Integration tests.
* Mocking.
* Tests asíncronos.

### 🆚 Jest vs Vitest

|              | 🃏 Jest                                | ⚡ Vitest            |
| ------------ | -------------------------------------- | ------------------- |
| Ecosistema   | Muy maduro                             | Moderno             |
| Vite         | Puede requerir configuración adicional | Integración natural |
| Sintaxis     | Muy conocida                           | Similar a Jest      |
| Mocking      | ✅                                      | ✅                   |
| Unit testing | ✅                                      | ✅                   |
| React        | ✅                                      | ✅                   |

📌 La elección depende principalmente del stack y las necesidades del proyecto.

---

# ⚡ PERFORMANCE

**Performance** significa conseguir que la aplicación utilice los recursos de forma eficiente y responda rápidamente.

En React debemos prestar especial atención a:

```text
Renderizados
   ↓
JavaScript
   ↓
Bundle
   ↓
Carga
   ↓
Experiencia del usuario
```

---

# 7️⃣ 🔄 RE-RENDERS

Un **re-render** ocurre cuando React vuelve a ejecutar un componente para determinar cómo debe actualizarse la interfaz.

Por ejemplo:

```text
State cambia
   ↓
React re-renderiza
   ↓
Componente vuelve a ejecutarse
   ↓
React compara el resultado
   ↓
Actualiza el DOM necesario
```

Los re-renders **no son malos por sí mismos**.

Son parte normal del funcionamiento de React.

El problema aparece cuando existen:

```text
❌ Re-renders innecesarios
❌ Cálculos muy costosos
❌ Componentes demasiado grandes
```

### 🎯 Idea clave

> No debes intentar eliminar todos los re-renders. Debes evitar los que realmente generan un problema de rendimiento.

---

# 8️⃣ 🧠 MEMOIZATION

**Memoization** consiste en guardar un resultado para poder reutilizarlo posteriormente en lugar de calcularlo nuevamente.

Conceptualmente:

```text
Entrada
  ↓
Cálculo costoso
  ↓
Resultado
  ↓
💾 Cache
```

Si recibimos la misma entrada:

```text
Misma entrada
    ↓
¿Ya tenemos resultado?
    ↓
Sí
    ↓
Utilizar resultado guardado
```

React proporciona herramientas relacionadas con memoization:

```text
React.memo
useMemo
useCallback
```

---

# 9️⃣ 🧩 React.memo

`React.memo` permite memorizar un componente.

Conceptualmente:

```text
Parent
  ↓
Child
```

Si el padre vuelve a renderizarse, React puede evitar volver a renderizar el hijo **cuando sus props no han cambiado**.

```text
Parent re-render
       ↓
Child
       ↓
¿Props cambiaron?
   │         │
  NO        SÍ
   ↓         ↓
Skip      Re-render
```

### 🎯 Útil cuando

Un componente:

* Se renderiza frecuentemente.
* Es relativamente costoso.
* Recibe las mismas props muchas veces.

⚠️ No significa que debamos envolver todos los componentes con `React.memo`.

---

# 🔟 🧠 useMemo

`useMemo` memoriza **el resultado de un cálculo**.

Conceptualmente:

```text
useMemo()
   ↓
Cálculo
   ↓
Resultado guardado
```

Ejemplo conceptual:

```text
products
   ↓
filterProducts()
   ↓
resultado
```

Si las dependencias no cambian:

```text
products iguales
      ↓
No repetir cálculo
      ↓
Usar resultado memorizado
```

### 🎯 Principal objetivo

Evitar cálculos costosos innecesarios.

⚠️ `useMemo` no debería utilizarse indiscriminadamente. Memorizar también tiene un coste y no todos los cálculos necesitan optimización.

---

# 1️⃣1️⃣ 🔗 useCallback

`useCallback` memoriza **una función**.

La diferencia fundamental:

```text
useMemo
   ↓
Memoriza un VALOR

useCallback
   ↓
Memoriza una FUNCIÓN
```

Por ejemplo:

```text
useCallback(() => {
   ...
})
```

puede mantener la misma referencia de función mientras sus dependencias no cambien.

Esto puede ser especialmente útil cuando pasamos callbacks a componentes optimizados con `React.memo`.

```text
Parent
   │
   │ callback
   ▼
Child
```

Sin una referencia estable, el callback puede ser creado nuevamente durante cada render.

---

# 1️⃣2️⃣ ✂️ CODE SPLITTING

**Code Splitting** consiste en dividir el JavaScript de la aplicación en diferentes partes en lugar de enviar todo el código de una sola vez.

Sin Code Splitting:

```text
Application
     ↓
████████████████
Todo el JavaScript
     ↓
Browser
```

Con Code Splitting:

```text
Application
     │
     ├── Core
     ├── Login
     ├── Dashboard
     └── Admin
```

El navegador puede cargar determinadas partes cuando realmente las necesita.

### 🎯 Beneficio

```text
Menos JavaScript inicial
        ↓
Carga inicial más ligera
        ↓
Mejor experiencia
```

---

# 1️⃣3️⃣ 💤 LAZY LOADING

**Lazy Loading** significa cargar un recurso **cuando realmente se necesita**, en lugar de cargarlo inmediatamente.

Por ejemplo:

```text
Usuario abre aplicación
        ↓
Carga código principal
        ↓
Usuario entra a Admin
        ↓
Carga Admin
```

En React puede utilizarse:

```text
lazy()
```

junto con:

```text
Suspense
```

### 🎯 Beneficio

Reduce el código que necesita descargarse inicialmente.

---

# 1️⃣4️⃣ ⏳ SUSPENSE

`Suspense` permite mostrar una interfaz alternativa mientras React espera que cierta parte de la aplicación esté disponible.

Conceptualmente:

```text
Suspense
   │
   ├── Mientras carga → Loading
   │
   └── Cuando está listo → Component
```

Por ejemplo:

```text
Usuario
   ↓
Carga componente
   ↓
⏳ Loading...
   ↓
Componente listo
   ↓
UI
```

Es especialmente importante junto con mecanismos como:

```text
lazy()
+
Suspense
```

---

# 1️⃣5️⃣ 📦 BUNDLE SIZE

El **bundle size** representa cuánto código JavaScript termina formando parte de los recursos que necesita cargar la aplicación.

Conceptualmente:

```text
Source Code
    ↓
Build
    ↓
Bundling
    ↓
JavaScript
    ↓
Browser
```

Un bundle excesivamente grande puede provocar:

```text
Bundle grande
    ↓
Más bytes descargados
    ↓
Más tiempo de procesamiento
    ↓
Carga más lenta
```

### 🎯 Cómo reducirlo

Entre otras estrategias:

* Code Splitting.
* Lazy Loading.
* Eliminar dependencias innecesarias.
* Optimizar imports.
* Analizar el bundle.
* Reducir código enviado al cliente.

---

# 1️⃣6️⃣ 🔬 PROFILING

**Profiling** consiste en analizar el rendimiento de la aplicación para descubrir dónde se está gastando tiempo o recursos.

En React podemos utilizar herramientas como:

```text
React DevTools
      ↓
Profiler
      ↓
Analizar renders
```

Podemos investigar:

* Qué componentes se renderizan.
* Cuánto tardan.
* Cuántas veces se renderizan.
* Qué actualización provocó el render.
* Qué componentes podrían estar causando trabajo innecesario.

### 🎯 Idea importante

No deberíamos optimizar simplemente porque pensamos que algo es lento.

Primero:

```text
Problema
   ↓
Medición
   ↓
Identificar causa
   ↓
Optimización
   ↓
Medición nuevamente
```

---

# 🧠 MAPA MENTAL

```text
              🧪 TESTING & ⚡ PERFORMANCE
                         │
          ┌──────────────┴──────────────┐
          ▼                             ▼
      🧪 TESTING                   ⚡ PERFORMANCE
          │                             │
    ┌─────┼─────┐                ┌─────┼─────────┐
    ▼     ▼     ▼                ▼     ▼         ▼
  Unit  Component Integration  Renders Memoization Loading
    │      │        │             │       │          │
    └──────┴────────┘             │   ┌───┼───┐      │
           │                      │   ▼   ▼   ▼      │
      Testing Library             │ memo useMemo    │
      Jest / Vitest               │      useCallback│
                                  │                 │
                                  ├── Code Splitting
                                  ├── Lazy Loading
                                  ├── Suspense
                                  ├── Bundle Size
                                  └── Profiling
```

# 🏆 IDEA CLAVE

Hay dos preguntas diferentes:

```text
🧪 TESTING
"¿Mi aplicación funciona correctamente?"

⚡ PERFORMANCE
"¿Mi aplicación funciona eficientemente?"
```

Y para optimización recuerda este flujo:

```text
🐛 Detectar problema
       ↓
🔬 Medir
       ↓
🧠 Encontrar causa
       ↓
⚡ Optimizar
       ↓
🔬 Medir nuevamente
```

> [!IMPORTANT]
> **No optimices React por intuición.** Primero identifica un problema real de rendimiento y después utiliza herramientas como `React.memo`, `useMemo`, `useCallback`, Code Splitting o Lazy Loading cuando realmente aporten una mejora.
