# 🧪 TESTING EN DESARROLLO DE SOFTWARE (GUÍA COMPLETA)

## 🧠 ¿QUÉ ES UN TEST?

Un **test (prueba)** es código que escribes para verificar automáticamente que otro código funciona correctamente.

Piensa en él como una lista de comprobaciones automáticas que responden a una pregunta:

> "¿Mi código hace realmente lo que debería hacer?"

Por ejemplo:

```ts
function sum(a: number, b: number) {
  return a + b;
}
```

Podemos crear un test:

```ts
sum(2, 3) === 5
```

Si devuelve `5`:

✅ Test aprobado

Si devuelve cualquier otra cosa:

❌ Test fallido

---

# 🎯 ¿PARA QUÉ SIRVEN LOS TESTS?

Los tests sirven para detectar errores automáticamente.

## Sin tests

```text
Cambias una función
↓
Rompes otra parte del proyecto
↓
No te das cuenta
↓
El usuario encuentra el bug
```

## Con tests

```text
Cambias una función
↓
Ejecutas tests
↓
Un test falla
↓
Detectas el problema antes de publicar
```

---

# 🤔 ¿POR QUÉ DEBERÍA USAR TESTS?

Porque el código cambia constantemente.

Hoy funciona.

Mañana:

- agregas funcionalidades
- refactorizas
- actualizas dependencias
- cambias lógica

Y algo puede romperse.

> [!IMPORTANT]
> Los tests actúan como una red de seguridad.

---

# 🚀 BENEFICIOS DE LOS TESTS

## ✅ Detectan errores rápidamente

```ts
function multiply(a, b) {
  return a + b;
}
```

El test detectaría el error inmediatamente.

---

## ✅ Permiten refactorizar sin miedo

Puedes cambiar:

```ts
function getUser() {}
```

por

```ts
class UserService {}
```

y verificar que todo sigue funcionando.

---

## ✅ Documentan el comportamiento

Un test muchas veces explica mejor el código que los comentarios.

```ts
it('should return true when password is valid')
```

Solo leyendo eso ya entiendes la intención.

---

## ✅ Mejoran la calidad del proyecto

Los proyectos con tests suelen tener:

- menos bugs
- mejor arquitectura
- menos regresiones

> [!NOTE]
> Una regresión ocurre cuando una funcionalidad que antes funcionaba deja de funcionar después de realizar cambios en el código.

# ⚠️ ¿QUÉ ES UNA REGRESIÓN?

Una **regresión** ocurre cuando arreglas o agregas algo y rompes algo que antes funcionaba.

### Ejemplo

```text
Login funciona
↓
Agregas autenticación Google
↓
Login normal deja de funcionar
```

Eso es una regresión.

> [!IMPORTANT]
> Los tests ayudan a detectarlas antes de que lleguen a los usuarios.

---

# 🏗️ TIPOS DE TESTS

## 🧪 Unit Tests

Prueban una sola unidad de código.

Normalmente:

- función
- clase
- método

### Ejemplo

```js
function add(a, b) {
  return a + b;
}
```

### Test

```js
expect(add(2, 3)).toBe(5);
```

### Ventajas

✅ rápidos

✅ fáciles

✅ baratos

> [!TIP]
> Son los tests más comunes y suelen ejecutarse en milisegundos.

---

## 🔗 Integration Tests

Prueban varias piezas juntas.

### Ejemplo

```text
Frontend
↓
Servicio
↓
Base de datos
```

Verifican que colaboren correctamente.

> [!NOTE]
> Aunque cada parte funcione por separado, la integración puede fallar.

---

## 🌐 End-to-End (E2E)

Simulan un usuario real.

### Ejemplo

```text
Abrir página
↓
Escribir email
↓
Click login
↓
Ver dashboard
```

Prueban el sistema completo.

### Características

✅ validan flujos reales

✅ detectan problemas entre múltiples capas

❌ suelen ser más lentos

---

## 📸 Snapshot Tests

Guardan una "foto" del resultado.

Muy usados en React.

```jsx
<Button />
```

Se compara contra una versión guardada.

### Objetivo

Detectar cambios inesperados en la salida visual o estructural de un componente.

---

# 🎯 ¿CUÁNDO HACER TESTS?

Idealmente:

### Hacer tests cuando:

✅ lógica de negocio

✅ cálculos

✅ validaciones

✅ servicios

✅ APIs

✅ componentes importantes

---

### No obsesionarse con:

❌ getters simples

❌ setters simples

❌ código trivial

> [!TIP]
> El mejor retorno de inversión suele estar en probar la lógica importante del negocio, no cada línea de código.

# 🏆 PIRÁMIDE DE TESTING

```text
        E2E
       /   \
      /     \
 Integration
   /         \
  /           \
Unit Tests
```

## 🧠 La idea

- muchos Unit Tests
- algunos Integration Tests
- pocos E2E Tests

> [!IMPORTANT]
> Los Unit Tests son rápidos y baratos.
>
> Los Integration Tests son más costosos.
>
> Los E2E son los más lentos y difíciles de mantener.
>
> Por eso la base de la pirámide debe estar formada principalmente por Unit Tests.

---

# 🧠 CONCEPTOS IMPORTANTES

## 📌 Assertion

Una comprobación.

### Ejemplo

```js
expect(result).toBe(5);
```

La assertion verifica que el resultado sea el esperado.

---

## 📌 Test Suite

Grupo de tests.

### Ejemplo

```js
describe('Calculator', () => {});
```

Una suite organiza varios tests relacionados.

---

## 📌 Test Case

Un test individual.

### Ejemplo

```js
it('should add numbers', () => {});
```

Cada caso de prueba valida un comportamiento específico.

---

## 📌 Mock

Objeto falso.

### Ejemplo

```js
const fakeApi = {
  getUser: () => ({ id: 1 })
};
```

Se utiliza para reemplazar dependencias reales durante las pruebas.

---

## 📌 Stub

Versión simplificada de algo real.

Sirve para devolver respuestas controladas durante un test.

---

## 📌 Spy

Permite observar llamadas.

### Ejemplo

```js
spyOn(service, 'save');
```

Permite verificar:

- cuántas veces se llamó
- con qué parámetros se llamó
- cuándo fue llamado

---

# 📦 LIBRERÍAS DE TESTING MÁS POPULARES

| Librería | Uso principal |
|-----------|-----------|
| Jest | Testing general |
| Jasmine | Angular tradicional |
| Vitest | Vite y proyectos modernos |
| Mocha | Framework flexible |
| Chai | Assertions |
| Cypress | E2E |
| Playwright | E2E moderno |
| Testing Library | Testing UI |
| Karma | Runner tradicional Angular |

---

# 🃏 JEST

Actualmente el más popular.

## Instalación

```bash
npm install -D jest
```

## Ejemplo

```js
function sum(a, b) {
  return a + b;
}

test('adds numbers', () => {
  expect(sum(2, 3)).toBe(5);
});
```

## Ejecutar

```bash
npm test
```

> [!TIP]
> Jest incluye assertions, mocks, spies y runner de tests en una sola herramienta.

---

# 💎 JASMINE

Muy usado históricamente en Angular.

## Ejemplo

```js
describe('Calculator', () => {
  it('should add numbers', () => {
    expect(2 + 3).toBe(5);
  });
});
```

> [!NOTE]
> Durante muchos años fue la configuración por defecto en proyectos Angular generados con Angular CLI.

# ⚡ VITEST

Alternativa moderna a Jest.

Muy popular con:

- Vite
- Vue
- React
- Svelte

## Instalación

```bash
npm install -D vitest
```

## Ejemplo

```ts
import { test, expect } from 'vitest';

test('sum', () => {
  expect(2 + 2).toBe(4);
});
```

## Ejecutar

```bash
npx vitest
```

> [!TIP]
> Vitest fue diseñado para integrarse perfectamente con Vite y suele ofrecer tiempos de ejecución muy rápidos.

---

# 🌐 CYPRESS

Testing E2E.

## Ejemplo

```js
describe('Login', () => {
  it('should login', () => {
    cy.visit('/login');

    cy.get('#email')
      .type('user@test.com');

    cy.get('#password')
      .type('123456');

    cy.get('button')
      .click();

    cy.contains('Dashboard');
  });
});
```

### ¿Qué hace este test?

```text
Abre la página
↓
Escribe email
↓
Escribe contraseña
↓
Hace click en Login
↓
Verifica que aparezca Dashboard
```

---

# 🚀 PLAYWRIGHT

Competidor moderno de Cypress.

## Ejemplo

```ts
test('login', async ({ page }) => {
  await page.goto('/login');

  await page.fill('#email', 'user@test.com');

  await page.fill('#password', '123456');

  await page.click('button');

  await expect(page).toHaveURL('/dashboard');
});
```

### Características

✅ rápido

✅ multiplataforma

✅ múltiples navegadores

✅ muy usado actualmente para E2E

---

# 📚 TESTING LIBRARY

## Filosofía

> "Prueba la aplicación como lo haría un usuario."

## Ejemplo React

```tsx
render(<Button />);

expect(
  screen.getByText('Save')
).toBeInTheDocument();
```

### ¿Qué busca Testing Library?

No le importa tanto la implementación interna.

Le importa que el usuario pueda:

- ver contenido
- hacer click
- interactuar correctamente

> [!IMPORTANT]
> Testing Library promueve pruebas centradas en el comportamiento del usuario, no en detalles internos del componente.

---

# 🏗️ TESTING EN ANGULAR

Angular suele usar:

| Herramienta | Función |
|------------|----------|
| Jasmine | Framework de tests |
| Karma | Ejecuta tests |
| TestBed | Simula Angular |
| Cypress | E2E |
| Playwright | E2E moderno |
| Jest | Alternativa moderna |

---

## Ejemplo

```ts
describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    service = new UserService();
  });

  it('should create user', () => {
    expect(service).toBeTruthy();
  });
});
```

---

# ⚠️ ERRORES COMUNES

## ❌ No hacer tests

El error más común.

---

## ❌ Testear implementación

### Mal

```ts
expect(privateVariable).toBe(true);
```

### Bien

```ts
expect(result).toBe(true);
```

> [!NOTE]
> Los tests deberían verificar comportamientos y resultados, no detalles internos de implementación.

---

## ❌ Tests dependientes

Un test no debe depender de otro.

Cada test debe funcionar solo.

### Incorrecto

```text
Test A
↓
Test B depende de A
↓
Test C depende de B
```

### Correcto

```text
Test A
Test B
Test C
```

Todos independientes.

---

## ❌ Mocks excesivos

Si todo es falso:

```text
Mock
Mock
Mock
Mock
```

Ya no estás probando nada real.

> [!WARNING]
> Los mocks son útiles, pero abusar de ellos puede generar una falsa sensación de seguridad.

---

# 🏆 RECOMENDACIÓN ACTUAL (2026)

| Tipo | Herramienta recomendada |
|--------|------------------------|
| Unit Tests | Vitest o Jest |
| Angular | Jasmine o Jest |
| React | Vitest + Testing Library |
| Vue | Vitest + Testing Library |
| E2E | Playwright |
| Legacy Angular | Jasmine + Karma |
| Proyectos nuevos | Vitest + Playwright |

---

# 🧠 IDEA CLAVE PARA RECORDAR

> [!IMPORTANT]
> Los tests no existen para demostrar que tu código funciona.
>
> Los tests existen para avisarte cuando deja de funcionar.

---

## Código sin tests

```text
=
Confianza basada en esperanza
```

---

## Código con tests

```text
=
Confianza basada en evidencia
```