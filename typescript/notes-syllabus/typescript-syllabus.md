# 🚀 Roadmap de TypeScript

## 1️⃣ Introducción a TypeScript

Primero entender qué es y por qué existe.

### Temas

- Qué es TypeScript
- Diferencia entre TypeScript y JavaScript
- Qué es el tipado estático
- Ventajas en proyectos grandes
- Cómo compila TypeScript a JavaScript
- Instalar TypeScript (`npm install -g typescript`)
- Usar el compilador `tsc`

### 📌 Resultado esperado

Poder crear y compilar tu primer archivo `.ts`.

---

## 2️⃣ Tipos básicos

Aquí empieza el corazón de TypeScript.

### Tipos primitivos

- `string`
- `number`
- `boolean`
- `null`
- `undefined`
- `any`
- `unknown`
- `void`
- `never`

### Ejemplo

```ts
let nombre: string = 'Juan';
let edad: number = 25;
let activo: boolean = true;
```

### 📌 Aprenderás

- Cómo declarar variables tipadas
- Cuándo usar `any` y cuándo evitarlo

---

## 3️⃣ Tipos en Arrays y Objetos

### 📦 Arrays

```ts
let numeros: number[] = [1, 2, 3];
```

o

```ts
let numeros: Array<number> = [1, 2, 3];
```

### 🧱 Objetos

```ts
let usuario: {
  nombre: string;
  edad: number;
};
```

### 📌 Aprenderás

- Tipar estructuras de datos
- Tipar objetos complejos

---

## 4️⃣ Tipos personalizados

Aquí empieza lo potente.

### 📌 Type

```ts
type Usuario = {
  nombre: string;
  edad: number;
};
```

### 📌 Interface

```ts
interface Usuario {
  nombre: string;
  edad: number;
}
```

### 📌 Aprenderás

- Diferencia entre `type` e `interface`
- Reutilizar tipos

---

## 5️⃣ Funciones tipadas

### Ejemplo

```ts
function sumar(a: number, b: number): number {
  return a + b;
}
```

### 📌 Conceptos

- Tipos en parámetros
- Tipo de retorno
- Funciones flecha tipadas
- Parámetros opcionales

```ts
function saludar(nombre?: string);
```

---

## 6️⃣ Union Types

### Ejemplo

```ts
let id: string | number;
```

### 📌 Uso principal

Muy utilizado en APIs.

---

## 7️⃣ Type Narrowing

TypeScript detecta tipos automáticamente.

### Ejemplo

```ts
if (typeof id === 'string') {
}
```

### 📌 Aprenderás

- `typeof`
- `instanceof`
- `discriminated unions`

---

## 8️⃣ Literal Types

### Ejemplo

```ts
let estado: 'loading' | 'success' | 'error';
```

### 📌 Uso principal

Muy utilizado en aplicaciones frontend.

---

## 9️⃣ Enums

### Ejemplo

```ts
enum Role {
  Admin,
  User,
  Guest,
}
```

### 📌 Nota

Actualmente suelen preferirse las unions en muchos proyectos.

---

## 🔟 Generics (MUY IMPORTANTE 🔥)

### Ejemplo básico

```ts
function identity<T>(value: T): T {
  return value;
}
```

### 📌 Beneficio

Permiten reutilizar código manteniendo el tipado.

### Ejemplo adicional

```ts
function getFirst<T>(arr: T[]): T {
  return arr[0];
}
```

---

## 1️⃣1️⃣ Tipos avanzados

### Utilidades más usadas

- `Partial`
- `Pick`
- `Omit`
- `Record`
- `Readonly`

### Ejemplo

```ts
type UsuarioParcial = Partial<Usuario>;
```

---

## 1️⃣2️⃣ Módulos en TypeScript

### Conceptos

- `export`
- `import`

### Ejemplo

```ts
export class User {}
```

---

## 1️⃣3️⃣ Configuración de TypeScript

### Archivo principal

```text
tsconfig.json
```

### 📌 Aprenderás

- `target`
- `module`
- `strict`
- `outDir`
- `rootDir`

### 🎯 Objetivo

Controlar cómo se compila el proyecto.

---

## 1️⃣4️⃣ TypeScript con Clases (POO 🧱)

### Ejemplo

```ts
class Usuario {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }
}
```

### 📌 Aprenderás

- `public`
- `private`
- `protected`
- `readonly`

---

## 1️⃣5️⃣ TypeScript con DOM 🌐

### Ejemplo

```ts
const btn = document.querySelector<HTMLButtonElement>('#btn');
```

---

## 1️⃣6️⃣ TypeScript con APIs 🔗

### Ejemplo

```ts
interface Photo {
  id: number;
  url: string;
}
```

### 📌 Beneficio

Perfecto para proyectos reales que consumen APIs.

---

## 1️⃣7️⃣ TypeScript en proyectos reales 🚀

### Tecnologías más comunes

- Node.js
- React
- Next.js

---

# 📌 Resumen Rápido

```text
✅ Introducción a TypeScript
✅ Tipos básicos
✅ Arrays y objetos
✅ Types e Interfaces
✅ Funciones tipadas
✅ Union Types
✅ Type Narrowing
✅ Literal Types
✅ Enums
✅ Generics
✅ Utility Types
✅ Módulos
✅ tsconfig.json
✅ Clases (POO)
✅ DOM
✅ APIs
✅ Proyectos reales con React, Next.js y Node.js
```
