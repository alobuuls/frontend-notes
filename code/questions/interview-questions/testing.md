# 🧪 14. TESTING

> 🎯 Esta sección busca comprobar si entiendes **cómo verificar que tu aplicación funciona correctamente** y si sabes diferenciar los distintos niveles de testing.

---
## 📑 ÍNDICE 

- [🧪 14. TESTING](#-14-testing)
  - [📑 ÍNDICE](#-índice)
  - [🔹 ¿Qué es testing?](#-qué-es-testing)
    - [🎯 ¿Para qué sirve?](#-para-qué-sirve)
    - [🗣️ Respuesta de entrevista](#️-respuesta-de-entrevista)
- [🔹 ¿Qué diferencia hay entre Unit Test, Integration Test y E2E?](#-qué-diferencia-hay-entre-unit-test-integration-test-y-e2e)
    - [🧩 Unit Test](#-unit-test)
    - [🔗 Integration Test](#-integration-test)
    - [🌎 E2E — End to End](#-e2e--end-to-end)
    - [🗣️ Respuesta de entrevista](#️-respuesta-de-entrevista-1)
- [🔹 ¿Qué es un test unitario?](#-qué-es-un-test-unitario)
    - [🗣️ Respuesta de entrevista](#️-respuesta-de-entrevista-2)
- [🔹 ¿Qué es un Mock?](#-qué-es-un-mock)
    - [🗣️ Respuesta de entrevista](#️-respuesta-de-entrevista-3)
- [🔹 ¿Qué es un Spy?](#-qué-es-un-spy)
    - [🗣️ Respuesta de entrevista](#️-respuesta-de-entrevista-4)
- [🔹 ¿Qué es un Stub?](#-qué-es-un-stub)
    - [🗣️ Respuesta de entrevista](#️-respuesta-de-entrevista-5)
- [🧠 Mock vs Spy vs Stub](#-mock-vs-spy-vs-stub)
    - [🎯 Forma sencilla de recordarlo](#-forma-sencilla-de-recordarlo)
- [🔹 ¿Qué es Jest?](#-qué-es-jest)
    - [🧩 Permite:](#-permite)
    - [🗣️ Respuesta de entrevista](#️-respuesta-de-entrevista-6)
  - [🔹 ¿Qué es Jasmine?](#-qué-es-jasmine)
    - [📌 Ejemplo](#-ejemplo)
    - [🗣️ Respuesta de entrevista](#️-respuesta-de-entrevista-7)
  - [🔹 ¿Qué es Karma?](#-qué-es-karma)
    - [📌 Flujo tradicional](#-flujo-tradicional)
    - [🗣️ Respuesta de entrevista](#️-respuesta-de-entrevista-8)
- [🔹 ¿Qué deberías testear en un componente?](#-qué-deberías-testear-en-un-componente)
    - [🗣️ Respuesta de entrevista](#️-respuesta-de-entrevista-9)
- [🔹 ¿Qué deberías testear en un servicio?](#-qué-deberías-testear-en-un-servicio)
    - [📡 Peticiones HTTP](#-peticiones-http)
    - [🧠 Lógica](#-lógica)
    - [❌ Errores](#-errores)
    - [🔄 Estados](#-estados)
    - [🗣️ Respuesta de entrevista](#️-respuesta-de-entrevista-10)
- [🧠 RESUMEN PARA ENTREVISTA](#-resumen-para-entrevista)
  - [🧪 Tipos de Testing](#-tipos-de-testing)
  - [🛠️ Herramientas](#️-herramientas)
  - [🎭 Test Doubles](#-test-doubles)
  - [🧩 Componentes](#-componentes)
  - [⚙️ Servicios](#️-servicios)
- [🔥 LAS 5 QUE MÁS PRIORIZARÍA](#-las-5-que-más-priorizaría)
    - [1️⃣ ¿Unit Test vs Integration vs E2E?](#1️⃣-unit-test-vs-integration-vs-e2e)
    - [2️⃣ ¿Qué es un Mock?](#2️⃣-qué-es-un-mock)
    - [3️⃣ ¿Mock vs Spy vs Stub?](#3️⃣-mock-vs-spy-vs-stub)
    - [4️⃣ ¿Jasmine vs Karma?](#4️⃣-jasmine-vs-karma)
    - [5️⃣ ¿Qué testearías en un componente?](#5️⃣-qué-testearías-en-un-componente)

## 🔹 ¿Qué es testing?

El **testing** es el proceso de comprobar mediante pruebas que una aplicación funciona como esperamos.

### 🎯 ¿Para qué sirve?

* 🐛 Detectar errores.
* 🔒 Evitar regresiones.
* ♻️ Poder refactorizar con confianza.
* 📋 Verificar requisitos.
* 🚀 Mantener la calidad del código.

Por ejemplo, si tenemos:

```typescript
function sum(a: number, b: number): number {
  return a + b;
}
```

Podemos crear un test:

```typescript
it('should sum two numbers', () => {
  expect(sum(2, 3)).toBe(5);
});
```

Estamos comprobando que:

```text
2 + 3 → 5
```

### 🗣️ Respuesta de entrevista

> "Testing es el proceso de crear y ejecutar pruebas para verificar que una aplicación o una parte de ella funciona como esperamos. Ayuda a detectar errores, prevenir regresiones y tener mayor confianza al modificar el código."

---

# 🔹 ¿Qué diferencia hay entre Unit Test, Integration Test y E2E?

La diferencia principal está en **qué parte de la aplicación estamos probando y cuánto dependemos de otras partes**.

```text
Unit
 ↓
Una unidad aislada

Integration
 ↓
Varias piezas trabajando juntas

E2E
 ↓
La aplicación completa
```

| Tipo                    | ¿Qué prueba?                    |
| ----------------------- | ------------------------------- |
| 🧩 **Unit Test**        | Una unidad aislada              |
| 🔗 **Integration Test** | Varias piezas trabajando juntas |
| 🌎 **E2E**              | La aplicación completa          |

### 🧩 Unit Test

Prueba una unidad pequeña de código de forma aislada.

Por ejemplo:

```text
function
method
service
component
pipe
```

Ejemplo:

```typescript
expect(sum(2, 3)).toBe(5);
```

### 🔗 Integration Test

Comprueba que **varias partes funcionan correctamente juntas**.

Por ejemplo:

```text
Component
   ↓
Service
   ↓
HTTP
```

Aquí nos interesa comprobar la interacción entre diferentes piezas.

### 🌎 E2E — End to End

Prueba un flujo completo desde la perspectiva del usuario.

```text
Abrir aplicación
      ↓
Login
      ↓
Dashboard
      ↓
Crear usuario
      ↓
Guardar
      ↓
Ver usuario creado
```

Herramientas habituales:

```text
Cypress
Playwright
```

### 🗣️ Respuesta de entrevista

> "Un Unit Test prueba una unidad de código de forma aislada. Un Integration Test verifica que varias partes de la aplicación funcionan correctamente juntas. Un E2E prueba un flujo completo de la aplicación desde la perspectiva del usuario."

> 💡 **Fácil de recordar:**
>
> ```text
> Unit        → pieza
> Integration → piezas
> E2E         → aplicación completa
> ```

---

# 🔹 ¿Qué es un test unitario?

Un **test unitario** es una prueba que verifica el comportamiento de una unidad pequeña de código de manera aislada.

Por ejemplo:

```typescript
function isAdult(age: number): boolean {
  return age >= 18;
}
```

Test:

```typescript
it('should return true when user is adult', () => {
  expect(isAdult(20)).toBe(true);
});
```

También podemos testear:

* Componentes.
* Servicios.
* Pipes.
* Guards.
* Directivas.
* Funciones.

### 🗣️ Respuesta de entrevista

> "Un test unitario comprueba una unidad pequeña de código de manera aislada. Por ejemplo, podría probar un método de un servicio verificando diferentes entradas y comprobando que devuelve el resultado esperado."

---

# 🔹 ¿Qué es un Mock?

Un **mock** es un objeto o implementación falsa que utilizamos para **reemplazar una dependencia real durante un test**.

Supongamos que tenemos:

```typescript
class UserService {
  getUsers() {
    // petición real a API
  }
}
```

No queremos llamar realmente al backend durante un Unit Test.

Podemos crear un mock:

```typescript
const userServiceMock = {
  getUsers: jest.fn()
};
```

Y definir qué debe devolver:

```typescript
userServiceMock.getUsers.mockReturnValue([
  {
    id: 1,
    name: 'Alo'
  }
]);
```

Así podemos controlar completamente la dependencia.

### 🗣️ Respuesta de entrevista

> "Un mock es una implementación falsa de una dependencia que utilizamos durante un test para aislar la unidad que estamos probando y controlar el comportamiento de esa dependencia."

---

# 🔹 ¿Qué es un Spy?

Un **spy** permite observar cómo se utiliza una función o método.

Por ejemplo, podemos comprobar:

```text
¿Se llamó?
¿Cuántas veces?
¿Con qué argumentos?
```

Con Jasmine:

```typescript
spyOn(userService, 'getUsers');
```

Después:

```typescript
expect(userService.getUsers).toHaveBeenCalled();
```

También podemos comprobar argumentos:

```typescript
expect(userService.getUser)
  .toHaveBeenCalledWith(10);
```

### 🗣️ Respuesta de entrevista

> "Un spy permite observar una función o método durante un test. Puedo comprobar si fue llamado, cuántas veces y con qué argumentos."

> 💡 **Piensa:**
>
> ```text
> Mock → reemplazar comportamiento
>
> Spy → observar comportamiento
> ```
>
> Aunque en la práctica las herramientas de testing permiten combinarlos.

---

# 🔹 ¿Qué es un Stub?

Un **stub** es una implementación controlada que proporciona una respuesta predefinida.

Por ejemplo:

```typescript
const userServiceStub = {
  getUser: () => ({
    id: 1,
    name: 'Alo'
  })
};
```

Cuando el código llama:

```typescript
userServiceStub.getUser();
```

siempre obtiene el resultado que nosotros definimos.

### 🗣️ Respuesta de entrevista

> "Un stub es una implementación controlada que reemplaza una dependencia y devuelve valores predeterminados para que podamos controlar el escenario del test."

---

# 🧠 Mock vs Spy vs Stub

Esta diferencia puede confundirte al principio.

| Concepto | Idea principal                                           |
| -------- | -------------------------------------------------------- |
| **Mock** | Reemplazar una dependencia y controlar su comportamiento |
| **Spy**  | Observar llamadas a una función                          |
| **Stub** | Proporcionar respuestas predeterminadas                  |

### 🎯 Forma sencilla de recordarlo

```text
🎭 Mock
"Yo reemplazo esta dependencia."

👀 Spy
"Yo observo qué hizo esta función."

📦 Stub
"Yo te doy este resultado predeterminado."
```

> ⚠️ En distintas librerías y comunidades estos términos pueden utilizarse con cierta variación, así que en una entrevista importa más explicar **el propósito** que memorizar una definición rígida.

---

# 🔹 ¿Qué es Jest?

**Jest** es un framework de testing para JavaScript y TypeScript.

### 🧩 Permite:

* Crear tests.
* Ejecutarlos.
* Crear mocks.
* Crear spies.
* Hacer assertions.
* Generar coverage.

Ejemplo:

```typescript
describe('sum', () => {

  it('should return 5', () => {
    expect(sum(2, 3)).toBe(5);
  });

});
```

Tiene una sintaxis muy utilizada:

```typescript
describe()
it()
test()
expect()
```

### 🗣️ Respuesta de entrevista

> "Jest es un framework de testing para JavaScript y TypeScript que permite crear y ejecutar pruebas, hacer assertions, mocks, spies y obtener información de cobertura."

> 💡 En proyectos modernos de Angular puedes encontrarte configuraciones basadas en **Jest** u otras herramientas, dependiendo de la versión y del proyecto.

## 🔹 ¿Qué es Jasmine?

**Jasmine** es un framework de testing utilizado tradicionalmente en proyectos Angular.

Proporciona una sintaxis BDD:

```typescript
describe()
it()
expect()
```

### 📌 Ejemplo

```typescript
describe('Calculator', () => {

  it('should add numbers', () => {
    expect(2 + 3).toBe(5);
  });

});
```

También proporciona herramientas como:

```typescript
spyOn()
```

> 💡 **TIP:** Jasmine permite definir suites, tests y assertions.

### 🗣️ Respuesta de entrevista

> "Jasmine es un framework de testing que proporciona una sintaxis para definir suites, tests y assertions. Ha sido utilizado tradicionalmente junto con Angular para realizar pruebas unitarias."

---

## 🔹 ¿Qué es Karma?

**Karma** es un **test runner**.

Su responsabilidad principal es ejecutar los tests en diferentes navegadores o entornos y mostrar los resultados.

| Herramienta    | Responsabilidad   |
| -------------- | ----------------- |
| 🧪 **Jasmine** | Define los tests  |
| 🏃 **Karma**   | Ejecuta los tests |

### 📌 Flujo tradicional

```text
Angular
   ↓
Jasmine → escribir tests
   ↓
Karma → ejecutar tests
   ↓
Browser
```

### 🗣️ Respuesta de entrevista

> "Karma es un test runner que permite ejecutar pruebas, tradicionalmente en navegadores reales. En el ecosistema Angular se utilizó ampliamente junto con Jasmine, donde Jasmine define los tests y Karma se encarga de ejecutarlos."

> ⚠️ **NO CONFUNDIR**
>
> **Jasmine** → framework de testing
> **Karma** → test runner

---

# 🔹 ¿Qué deberías testear en un componente?

No necesitas probar absolutamente todo.

Debes probar principalmente **el comportamiento del componente**.

| Área                  | ¿Qué probar?                                                               |
| --------------------- | -------------------------------------------------------------------------- |
| 🧩 **Estado inicial** | ¿El componente inicia correctamente? ¿Los valores iniciales son correctos? |
| 🖱️ **Interacciones** | `click`, `submit`, `change`                                                |
| 📤 **Outputs**        | Comprobar que se emiten cuando corresponde                                 |
| 📥 **Inputs**         | Comprobar que responde correctamente a diferentes valores                  |
| ❌ **Validaciones**    | Formulario inválido, formulario válido, campo requerido                    |
| 🔀 **Condicionales**  | `loading`, `success`, `error`, `empty`                                     |
| 🧩 **Dependencias**   | Utilizar mocks/stubs para aislar el componente                             |

Por ejemplo:

```typescript
@Output()
saved = new EventEmitter<void>();
```

Podemos comprobar que se emite cuando corresponde.

Si el componente utiliza un servicio:

```text
Component
   ↓
UserService
```

podemos utilizar un mock/stub del servicio para probar el componente de forma aislada.

### 🗣️ Respuesta de entrevista

> "En un componente testearía principalmente su comportamiento: estado inicial, inputs, outputs, interacciones del usuario, validaciones, cambios de estado y diferentes escenarios como loading, success o error. Las dependencias externas normalmente las aislaría utilizando mocks o stubs."

> 💡 **TIP:** No necesitas testear el framework.
>
> Por ejemplo, no necesitas demostrar que Angular sabe ejecutar `ngIf`.
>
> Debes probar **tu lógica**.

---

# 🔹 ¿Qué deberías testear en un servicio?

En un servicio debemos probar principalmente **su lógica y comportamiento**.

### 📡 Peticiones HTTP

Si tenemos:

```typescript
getUsers(): Observable<User[]> {
  return this.http.get<User[]>('/api/users');
}
```

podemos comprobar:

```text
¿Hace GET?
¿Utiliza la URL correcta?
¿Envía los parámetros correctos?
¿Maneja correctamente la respuesta?
¿Maneja errores?
```

### 🧠 Lógica

Si el servicio transforma datos:

```text
API
 ↓
Service
 ↓
Mapper
 ↓
Resultado
```

podemos verificar que la transformación sea correcta.

### ❌ Errores

Por ejemplo:

```text
404
401
500
```

y comprobar qué hace nuestro servicio.

### 🔄 Estados

Si el servicio mantiene estado:

```text
loading
success
error
```

también podemos probar esos escenarios.

### 🗣️ Respuesta de entrevista

> "En un servicio probaría principalmente su lógica y sus interacciones con dependencias externas. Si realiza peticiones HTTP, comprobaría el método, URL, parámetros, headers, respuesta y manejo de errores. También probaría cualquier transformación o lógica propia del servicio."

---

# 🧠 RESUMEN PARA ENTREVISTA

## 🧪 Tipos de Testing

| Tipo               | Alcance              |
| ------------------ | -------------------- |
| 🧩 **Unit**        | Una unidad aislada   |
| 🔗 **Integration** | Varias piezas juntas |
| 🌎 **E2E**         | Flujo completo       |

## 🛠️ Herramientas

| Herramienta    | Función              |
| -------------- | -------------------- |
| 🧪 **Jest**    | Framework de testing |
| 🧪 **Jasmine** | Framework de testing |
| 🏃 **Karma**   | Test runner          |

## 🎭 Test Doubles

| Tipo        | Función                            |
| ----------- | ---------------------------------- |
| 🎭 **Mock** | Reemplaza/controla una dependencia |
| 👀 **Spy**  | Observa llamadas                   |
| 📦 **Stub** | Devuelve respuestas controladas    |

## 🧩 Componentes

```text
Component
├── Inputs
├── Outputs
├── Events
├── Forms
├── Validaciones
├── Estados
└── Comportamiento
```

## ⚙️ Servicios

```text
Service
├── Lógica
├── HTTP
├── Params
├── Headers
├── Respuestas
├── Errores
└── Transformaciones
```

---

# 🔥 LAS 5 QUE MÁS PRIORIZARÍA

Si estás estudiando para una entrevista y tienes poco tiempo:

### 1️⃣ ¿Unit Test vs Integration vs E2E?

```text
Unit        → una pieza
Integration → varias piezas
E2E         → flujo completo
```

### 2️⃣ ¿Qué es un Mock?

> Una dependencia falsa que permite aislar y controlar el comportamiento durante el test.

### 3️⃣ ¿Mock vs Spy vs Stub?

| Concepto | Función                  |
| -------- | ------------------------ |
| **Mock** | Reemplazar/controlar     |
| **Spy**  | Observar llamadas        |
| **Stub** | Respuesta predeterminada |

### 4️⃣ ¿Jasmine vs Karma?

```text
Jasmine → escribe/define tests
Karma   → ejecuta tests
```

### 5️⃣ ¿Qué testearías en un componente?

> **Comportamiento**, no simplemente implementación: inputs, outputs, eventos, validaciones, estados, interacciones y escenarios de éxito/error.

> 💡 **TIP DE ENTREVISTA**
>
> **Un buen test no debería comprobar cómo está implementado algo, sino qué comportamiento debe cumplir.**
