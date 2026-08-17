# 🧠 9. TYPESCRIPT

## 📑 ÍNDICE

- [🧠 9. TYPESCRIPT](#-9-typescript)
  - [📑 ÍNDICE](#-índice)
  - [1. ❓ ¿QUÉ ES TYPESCRIPT?](#1--qué-es-typescript)
- [2. ❓ ¿QUÉ DIFERENCIA HAY ENTRE JAVASCRIPT Y TYPESCRIPT?](#2--qué-diferencia-hay-entre-javascript-y-typescript)
    - [🔹 JavaScript](#-javascript)
    - [🔹 TypeScript](#-typescript)
    - [🧠 Diferencias principales](#-diferencias-principales)
- [3. ❓ ¿POR QUÉ UTILIZAR TYPESCRIPT?](#3--por-qué-utilizar-typescript)
    - [🐛 1. Detecta errores antes de ejecutar](#-1-detecta-errores-antes-de-ejecutar)
    - [🧠 2. Mejor autocompletado](#-2-mejor-autocompletado)
    - [📖 3. Código más fácil de entender](#-3-código-más-fácil-de-entender)
    - [🏗️ 4. Mejor mantenimiento](#️-4-mejor-mantenimiento)
- [4. ❓ ¿QUÉ ES UN TIPO?](#4--qué-es-un-tipo)
- [5. ❓ ¿QUÉ ES UNA INTERFACE?](#5--qué-es-una-interface)
- [6. ❓ ¿QUÉ ES UN TYPE?](#6--qué-es-un-type)
- [7. ❓ ¿DIFERENCIA ENTRE INTERFACE Y TYPE?](#7--diferencia-entre-interface-y-type)
    - [🔵 Interface](#-interface)
    - [🟣 Type](#-type)
    - [🎯 ¿Cuál utilizar?](#-cuál-utilizar)
    - [🎯 Entrevista](#-entrevista)
- [8. ❓ ¿QUÉ SON UNION TYPES?](#8--qué-son-union-types)
    - [🎯 Entrevista](#-entrevista-1)
- [9. ❓ ¿QUÉ SON INTERSECTION TYPES?](#9--qué-son-intersection-types)
    - [🎯 Entrevista](#-entrevista-2)
- [10. ❓ ¿QUÉ SON GENERICS?](#10--qué-son-generics)
    - [💡 Ejemplo típico](#-ejemplo-típico)
    - [🎯 Entrevista](#-entrevista-3)
- [11. ❓ ¿QUÉ ES `any`?](#11--qué-es-any)
    - [🎯 Entrevista](#-entrevista-4)
- [12. ❓ ¿QUÉ ES `unknown`?](#12--qué-es-unknown)
- [13. ❓ ¿QUÉ DIFERENCIA HAY ENTRE `any` Y `unknown`?](#13--qué-diferencia-hay-entre-any-y-unknown)
    - [🔴 `any`](#-any)
    - [🟢 `unknown`](#-unknown)
    - [🎯 Regla fácil de recordar](#-regla-fácil-de-recordar)
    - [🎯 Entrevista](#-entrevista-5)
- [14. ❓ ¿QUÉ ES `never`?](#14--qué-es-never)
    - [🎯 Entrevista](#-entrevista-6)
- [15. ❓ ¿QUÉ ES `void`?](#15--qué-es-void)
    - [⚡ Diferencia importante](#-diferencia-importante)
    - [🎯 Entrevista](#-entrevista-7)
- [16. ❓ ¿QUÉ SON OPTIONAL PROPERTIES?](#16--qué-son-optional-properties)
    - [🎯 Entrevista](#-entrevista-8)
- [17. ❓ ¿QUÉ ES TYPE INFERENCE?](#17--qué-es-type-inference)
    - [🎯 Entrevista](#-entrevista-9)
- [18. ❓ ¿QUÉ SON UTILITY TYPES?](#18--qué-son-utility-types)
    - [🧠 Algunos de los más importantes](#-algunos-de-los-más-importantes)
- [19. ❓ ¿QUÉ HACEN `PARTIAL`, `REQUIRED`, `PICK`, `OMIT`, `READONLY` Y `RECORD`?](#19--qué-hacen-partial-required-pick-omit-readonly-y-record)
  - [🔹 `Partial<T>`](#-partialt)
  - [🔹 `Required<T>`](#-requiredt)
  - [🔹 `Pick<T, K>`](#-pickt-k)
  - [🔹 `Omit<T, K>`](#-omitt-k)
  - [🔹 `Readonly<T>`](#-readonlyt)
  - [🔹 `Record<K, T>`](#-recordk-t)
- [20. ❓ ¿QUÉ ES TYPE ASSERTION?](#20--qué-es-type-assertion)
    - [🎯 Entrevista](#-entrevista-10)
- [21. ❓ ¿QUÉ DIFERENCIA HAY ENTRE `AS` Y TYPE INFERENCE?](#21--qué-diferencia-hay-entre-as-y-type-inference)
    - [🔵 Type inference](#-type-inference)
    - [🟣 Type assertion](#-type-assertion)
    - [🎯 Entrevista](#-entrevista-11)
- [22. ❓ ¿QUÉ SON ENUMS?](#22--qué-son-enums)
    - [⚠️ ¿Son siempre recomendables?](#️-son-siempre-recomendables)
    - [🎯 Entrevista](#-entrevista-12)
- [23. ❓ ¿CUÁNDO EVITARÍAS UTILIZAR `any`?](#23--cuándo-evitarías-utilizar-any)
    - [🟢 ¿Cuándo podría aceptar `any`?](#-cuándo-podría-aceptar-any)
    - [🎯 Entrevista](#-entrevista-13)
- [🧠 RESUMEN PARA ENTREVISTA](#-resumen-para-entrevista)
  - [⭐ Las que yo consideraría MÁS IMPORTANTES para una entrevista Frontend](#-las-que-yo-consideraría-más-importantes-para-una-entrevista-frontend)


## 1. ❓ ¿QUÉ ES TYPESCRIPT?

**TypeScript es un superset de JavaScript que añade tipado estático y otras características al lenguaje.**

Esto significa que todo código JavaScript válido también puede ser código TypeScript, pero TypeScript permite agregar información sobre los tipos de datos.

```ts
const name: string = 'Alo';
const age: number = 25;
const isDeveloper: boolean = true;
```

TypeScript se **transpila/compila a JavaScript**, porque los navegadores ejecutan JavaScript, no TypeScript directamente.

> 🎯 **Respuesta corta para entrevista**
>
> TypeScript es un superset de JavaScript que añade tipado estático y herramientas adicionales para detectar errores durante el desarrollo. Finalmente, el código TypeScript se transforma a JavaScript para poder ejecutarse.

---

# 2. ❓ ¿QUÉ DIFERENCIA HAY ENTRE JAVASCRIPT Y TYPESCRIPT?

La principal diferencia es que **TypeScript incorpora un sistema de tipos estático sobre JavaScript**.

### 🔹 JavaScript

```js
let age = 25;

age = 'hello';
```

JavaScript permite esto porque es dinámicamente tipado.

### 🔹 TypeScript

```ts
let age: number = 25;

age = 'hello';
// ❌ Error
```

TypeScript detecta el problema durante el desarrollo.

### 🧠 Diferencias principales

| JavaScript                        | TypeScript                                       |
| --------------------------------- | ------------------------------------------------ |
| Tipado dinámico                   | Tipado estático                                  |
| Se ejecuta directamente           | Se transpila a JavaScript                        |
| Detecta muchos errores en runtime | Puede detectar muchos errores en desarrollo      |
| No necesita compilación           | Requiere un proceso de compilación/transpilación |
| Más flexible                      | Más estricto y mantenible                        |

> 🎯 **Entrevista**
>
> JavaScript es un lenguaje dinámicamente tipado, mientras que TypeScript añade tipado estático y herramientas adicionales para detectar errores antes de ejecutar la aplicación.

---

# 3. ❓ ¿POR QUÉ UTILIZAR TYPESCRIPT?

Principalmente para **mejorar la seguridad, mantenibilidad y escalabilidad del código**.

### 🐛 1. Detecta errores antes de ejecutar

```ts
function add(a: number, b: number): number {
  return a + b;
}

add(10, '20');
// ❌ Error
```

### 🧠 2. Mejor autocompletado

El editor conoce los tipos y puede sugerir propiedades y métodos.

```ts
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: 'Alo',
  age: 25
};

user.
// VS Code puede sugerir:
// name
// age
```

### 📖 3. Código más fácil de entender

```ts
function getUser(id: number): User {
  // ...
}
```

Podemos entender inmediatamente qué recibe y qué devuelve.

### 🏗️ 4. Mejor mantenimiento

Es especialmente útil en proyectos grandes donde muchas personas trabajan sobre el mismo código.

> 🎯 **Entrevista**
>
> Utilizaría TypeScript porque permite detectar errores durante el desarrollo, mejora el autocompletado y la documentación del código y facilita el mantenimiento de aplicaciones grandes.

---

# 4. ❓ ¿QUÉ ES UN TIPO?

Un **tipo** define qué clase de valor puede almacenar una variable o recibir una función.

Por ejemplo:

```ts
let name: string = 'Alo';
let age: number = 25;
let active: boolean = true;
```

Aquí estamos indicando:

| Variable | Tipo      |
| -------- | --------- |
| `name`   | `string`  |
| `age`    | `number`  |
| `active` | `boolean` |

También existen tipos más complejos:

```ts
let numbers: number[] = [1, 2, 3];

let user: {
  name: string;
  age: number;
};
```

> 🎯 **Entrevista**
>
> Un tipo define qué valores puede tener una variable, propiedad, parámetro o retorno de una función.

---

# 5. ❓ ¿QUÉ ES UNA INTERFACE?

Una **interface** define la estructura que debe tener un objeto.

```ts
interface User {
  id: number;
  name: string;
  email: string;
}
```

Podemos utilizarla:

```ts
const user: User = {
  id: 1,
  name: 'Alo',
  email: 'alo@example.com'
};
```

Si falta una propiedad:

```ts
const user: User = {
  id: 1,
  name: 'Alo'
};

// ❌ Falta email
```

También podemos utilizar interfaces con clases:

```ts
interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  name = 'Firulais';

  makeSound(): void {
    console.log('Woof');
  }
}
```

> 🎯 **Entrevista**
>
> Una interface define la estructura y el contrato que debe cumplir un objeto o una clase.

---

# 6. ❓ ¿QUÉ ES UN TYPE?

`type` permite crear un **alias para un tipo**.

```ts
type User = {
  id: number;
  name: string;
};
```

Después podemos utilizarlo:

```ts
const user: User = {
  id: 1,
  name: 'Alo'
};
```

Pero `type` puede hacer más cosas que definir objetos.

Por ejemplo:

```ts
type ID = string | number;
```

O:

```ts
type Status = 'loading' | 'success' | 'error';
```

> 🎯 **Entrevista**
>
> Un `type` permite crear alias para tipos y es especialmente útil cuando necesitamos trabajar con unions, intersections, tipos primitivos o estructuras más complejas.

---

# 7. ❓ ¿DIFERENCIA ENTRE INTERFACE Y TYPE?

Ambos pueden describir la estructura de un objeto:

```ts
interface User {
  name: string;
}
```

```ts
type User = {
  name: string;
};
```

Pero existen diferencias importantes.

### 🔵 Interface

Las interfaces pueden **extenderse**:

```ts
interface User {
  name: string;
}

interface Admin extends User {
  permissions: string[];
}
```

También tienen **declaration merging**:

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}
```

TypeScript las combina conceptualmente como:

```ts
interface User {
  name: string;
  age: number;
}
```

### 🟣 Type

Los `type` pueden representar unions:

```ts
type Status = 'loading' | 'success' | 'error';
```

También intersections:

```ts
type Admin = User & {
  permissions: string[];
};
```

### 🎯 ¿Cuál utilizar?

No existe una regla universal, pero una buena práctica es:

| Usar        | Cuando                                                                              |
| ----------- | ----------------------------------------------------------------------------------- |
| `interface` | cuando modelamos **objetos o contratos que pueden extenderse**                      |
| `type`      | cuando necesitamos **unions, intersections, aliases o composiciones más complejas** |

### 🎯 Entrevista

> Ambos pueden definir la estructura de objetos. Las interfaces soportan extensión mediante `extends` y declaration merging, mientras que los `type` son más flexibles para unions, intersections y otros alias de tipos.

---

# 8. ❓ ¿QUÉ SON UNION TYPES?

Una **union type** permite que un valor pueda ser de **uno de varios tipos**.

Se utiliza `|`.

```ts
let id: string | number;

id = 10;
id = 'abc';
```

También podemos utilizar valores literales:

```ts
type Status = 'loading' | 'success' | 'error';

let status: Status;

status = 'loading';
status = 'success';

// ❌ status = 'finished';
```

Es muy común en aplicaciones frontend.

```ts
type RequestState =
  | 'loading'
  | 'success'
  | 'error';
```

### 🎯 Entrevista

> Una union type permite que un valor pueda pertenecer a uno de varios tipos posibles utilizando el operador `|`.

---

# 9. ❓ ¿QUÉ SON INTERSECTION TYPES?

Una **intersection type** combina varios tipos en uno utilizando `&`.

```ts
type User = {
  name: string;
};

type Employee = {
  company: string;
};

type EmployeeUser = User & Employee;
```

Ahora `EmployeeUser` necesita ambas propiedades:

```ts
const employee: EmployeeUser = {
  name: 'Alo',
  company: 'Google'
};
```

Conceptualmente:

```ts
{
  name: string;
  company: string;
}
```

### 🎯 Entrevista

> Una intersection type combina varios tipos en uno solo utilizando `&`, por lo que el resultado debe cumplir las características de todos los tipos combinados.

---

# 10. ❓ ¿QUÉ SON GENERICS?

Los **generics** permiten crear código reutilizable manteniendo la información de tipos.

Por ejemplo:

```ts
function identity<T>(value: T): T {
  return value;
}
```

Podemos utilizarlo con diferentes tipos:

```ts
const number = identity<number>(10);

const name = identity<string>('Alo');
```

También TypeScript puede inferir el tipo:

```ts
const number = identity(10);
const name = identity('Alo');
```

Aquí `T` representa un tipo que será determinado cuando utilicemos la función.

### 💡 Ejemplo típico

```ts
function getFirst<T>(items: T[]): T {
  return items[0];
}
```

```ts
const number = getFirst([1, 2, 3]);
// number → number

const name = getFirst(['Alo', 'John']);
// name → string
```

### 🎯 Entrevista

> Los generics permiten crear componentes, funciones o clases reutilizables que trabajan con diferentes tipos sin perder seguridad de tipos.

---

# 11. ❓ ¿QUÉ ES `any`?

`any` básicamente **desactiva el sistema de tipos para ese valor**.

```ts
let value: any = 'hello';

value = 10;
value = true;
value = {};
```

TypeScript permite prácticamente cualquier operación:

```ts
let value: any = 'hello';

value.foo.bar();
```

TypeScript no nos advertirá sobre ese acceso.

> ⚠️ Por eso `any` debe utilizarse con cuidado.

### 🎯 Entrevista

> `any` permite que un valor sea de cualquier tipo y prácticamente desactiva las comprobaciones de TypeScript para ese valor.

---

# 12. ❓ ¿QUÉ ES `unknown`?

`unknown` representa un valor cuyo tipo **no conocemos todavía**, pero a diferencia de `any`, TypeScript obliga a comprobarlo antes de utilizarlo.

```ts
let value: unknown;

value = 'hello';
value = 10;
value = true;
```

No podemos hacer directamente:

```ts
value.toUpperCase();
// ❌ Error
```

Primero debemos comprobar el tipo:

```ts
if (typeof value === 'string') {
  value.toUpperCase();
}
```

Esto hace que `unknown` sea mucho más seguro.

---

# 13. ❓ ¿QUÉ DIFERENCIA HAY ENTRE `any` Y `unknown`?

🔥 Esta es **muy importante en entrevistas**.

### 🔴 `any`

Permite hacer prácticamente cualquier cosa:

```ts
let value: any = 'hello';

value.foo.bar();
```

TypeScript no se queja.

### 🟢 `unknown`

No permite utilizar el valor hasta comprobar su tipo:

```ts
let value: unknown = 'hello';

value.foo;
// ❌ Error
```

Tenemos que hacer narrowing:

```ts
if (typeof value === 'string') {
  value.toUpperCase();
}
```

### 🎯 Regla fácil de recordar

> `any` = "confía en mí".

> `unknown` = "no sé qué es, compruébalo primero".

### 🎯 Entrevista

> `any` desactiva prácticamente las comprobaciones de tipos, mientras que `unknown` también permite representar cualquier valor, pero obliga a hacer una comprobación antes de utilizarlo. Por eso `unknown` es más seguro.

---

# 14. ❓ ¿QUÉ ES `never`?

`never` representa un valor que **nunca ocurre**.

Un caso típico es una función que nunca termina normalmente porque siempre lanza un error:

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

Otro caso:

```ts
function infiniteLoop(): never {
  while (true) {}
}
```

También aparece en **exhaustiveness checking**:

```ts
type Status = 'loading' | 'success';

function handleStatus(status: Status) {
  switch (status) {
    case 'loading':
      return 'Loading';

    case 'success':
      return 'Success';

    default:
      const exhaustiveCheck: never = status;
      return exhaustiveCheck;
  }
}
```

### 🎯 Entrevista

> `never` representa valores que nunca pueden ocurrir, por ejemplo en funciones que nunca terminan normalmente o en comprobaciones exhaustivas de unions.

# 15. ❓ ¿QUÉ ES `void`?

`void` normalmente indica que una función **no devuelve un valor útil**.

```ts
function logMessage(message: string): void {
  console.log(message);
}
```

La función ejecuta una acción pero no devuelve un resultado que nos interese.

### ⚡ Diferencia importante

| Tipo    | Significado                               |
| ------- | ----------------------------------------- |
| `void`  | "Esta función no devuelve un valor útil." |
| `never` | "Esta función nunca termina normalmente." |

```ts
function test(): void {
  // ...
}
```

significa:

> "Esta función no devuelve un valor útil."

Mientras que:

```ts
function test(): never {
  throw new Error();
}
```

significa:

> "Esta función nunca termina normalmente."

### 🎯 Entrevista

> `void` se utiliza principalmente para indicar que una función no devuelve un valor útil, mientras que `never` indica que nunca existe un retorno normal.

---

# 16. ❓ ¿QUÉ SON OPTIONAL PROPERTIES?

Son propiedades que **no son obligatorias**.

Se indican con `?`.

```ts
interface User {
  name: string;
  age?: number;
}
```

Podemos hacer:

```ts
const user: User = {
  name: 'Alo'
};
```

O:

```ts
const user: User = {
  name: 'Alo',
  age: 25
};
```

La propiedad `age` puede estar presente o no.

### 🎯 Entrevista

> Las optional properties son propiedades que pueden omitirse al crear un objeto y se indican utilizando `?`.

---

# 17. ❓ ¿QUÉ ES TYPE INFERENCE?

**Type inference** significa que TypeScript puede **deducir automáticamente el tipo** sin que tengamos que escribirlo explícitamente.

```ts
const name = 'Alo';
```

TypeScript infiere:

```ts
const name: string
```

Otro ejemplo:

```ts
const age = 25;
```

TypeScript sabe que:

```ts
age: number
```

También funciona con funciones:

```ts
function add(a: number, b: number) {
  return a + b;
}
```

TypeScript puede inferir que el retorno es:

```ts
number
```

Por eso no siempre necesitamos escribir:

```ts
function add(a: number, b: number): number
```

aunque hacerlo explícito puede ser útil en APIs públicas o código donde queremos dejar clara la intención.

### 🎯 Entrevista

> Type inference es la capacidad de TypeScript para deducir automáticamente el tipo de una variable, expresión o retorno sin necesidad de declararlo explícitamente.

---

# 18. ❓ ¿QUÉ SON UTILITY TYPES?

Los **Utility Types** son tipos proporcionados por TypeScript que permiten **transformar tipos existentes**.

Por ejemplo:

```ts
interface User {
  id: number;
  name: string;
  email: string;
}
```

Podemos crear una versión donde todas las propiedades sean opcionales:

```ts
type UpdateUser = Partial<User>;
```

Ahora:

```ts
const update: UpdateUser = {
  name: 'New name'
};
```

No necesitamos redefinir todo el objeto.

### 🧠 Algunos de los más importantes

```text
Partial
Required
Pick
Omit
Readonly
Record
```

---

# 19. ❓ ¿QUÉ HACEN `PARTIAL`, `REQUIRED`, `PICK`, `OMIT`, `READONLY` Y `RECORD`?

🔥 Esta pregunta es **muy probable en una entrevista de TypeScript**.

---

## 🔹 `Partial<T>`

Convierte todas las propiedades en opcionales.

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

type UpdateUser = Partial<User>;
```

Equivale conceptualmente a:

```ts
{
  id?: number;
  name?: string;
  email?: string;
}
```

Muy útil para formularios de actualización:

```ts
function updateUser(id: number, data: Partial<User>) {
  // ...
}
```

---

## 🔹 `Required<T>`

Hace que todas las propiedades sean obligatorias.

```ts
interface User {
  name?: string;
  age?: number;
}

type CompleteUser = Required<User>;
```

Ahora ambas son obligatorias.

---

## 🔹 `Pick<T, K>`

Selecciona determinadas propiedades de un tipo.

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type UserPreview = Pick<User, 'id' | 'name'>;
```

Resultado:

```ts
{
  id: number;
  name: string;
}
```

---

## 🔹 `Omit<T, K>`

Hace lo contrario de `Pick`.

**Elimina determinadas propiedades.**

```ts
type PublicUser = Omit<User, 'password'>;
```

Resultado:

```ts
{
  id: number;
  name: string;
  email: string;
}
```

Muy útil para crear tipos donde queremos excluir información.

---

## 🔹 `Readonly<T>`

Hace que las propiedades sean de solo lectura.

```ts
interface User {
  name: string;
  age: number;
}

type ReadonlyUser = Readonly<User>;
```

Entonces:

```ts
user.name = 'John';
// ❌ Error
```

---

## 🔹 `Record<K, T>`

Crea un objeto cuyas claves y valores siguen determinados tipos.

```ts
type UserRoles = Record<string, string>;
```

Podemos tener:

```ts
const roles: UserRoles = {
  admin: 'Administrator',
  user: 'Regular user'
};
```

También es muy útil para diccionarios o mapas tipados:

```ts
type UserById = Record<string, User>;
```

# 20. ❓ ¿QUÉ ES TYPE ASSERTION?

Una **type assertion** le dice a TypeScript:

> 💡 "Yo sé algo sobre este valor que TypeScript no puede inferir."

Se puede hacer utilizando `as`:

```ts
const value: unknown = 'hello';

const name = value as string;
```

Ahora TypeScript trata `name` como `string`.

También existe esta sintaxis:

```ts
const name = <string>value;
```

Aunque `as` es la forma más utilizada, especialmente en proyectos modernos.

> ⚠️ **Importante**
>
> La assertion **no convierte realmente el valor**.

Esto:

```ts
const value = '123' as unknown as number;
```

no transforma el string `"123"` en el número `123`.

Para convertirlo realmente:

```ts
const value = Number('123');
```

### 🎯 Entrevista

> Type assertion permite indicarle al compilador qué tipo creemos que tiene un valor. No realiza una conversión en runtime.

---

# 21. ❓ ¿QUÉ DIFERENCIA HAY ENTRE `AS` Y TYPE INFERENCE?

Son conceptos prácticamente opuestos.

### 🔵 Type inference

TypeScript **deduce** el tipo.

```ts
const name = 'Alo';
```

TypeScript infiere:

```ts
string
```

### 🟣 Type assertion

Nosotros **indicamos** a TypeScript qué tipo creemos que tiene.

```ts
const value: unknown = 'Alo';

const name = value as string;
```

### 🎯 Entrevista

> Con type inference TypeScript deduce automáticamente el tipo, mientras que con type assertion nosotros le indicamos al compilador cómo queremos tratar ese valor. La assertion no cambia el valor en runtime.

---

# 22. ❓ ¿QUÉ SON ENUMS?

Los `enum` permiten definir un conjunto de **constantes con nombre**.

```ts
enum Role {
  Admin,
  User,
  Guest
}
```

Podemos utilizar:

```ts
const role = Role.Admin;
```

También pueden ser string enums:

```ts
enum Status {
  Loading = 'loading',
  Success = 'success',
  Error = 'error'
}
```

Y:

```ts
const status = Status.Success;
```

### ⚠️ ¿Son siempre recomendables?

No necesariamente.

En muchos proyectos modernos se prefieren unions de literales:

```ts
type Status = 'loading' | 'success' | 'error';
```

Porque son más simples y no generan el mismo código adicional que un `enum` tradicional.

### 🎯 Entrevista

> Un enum permite definir un conjunto de valores constantes con nombres. Aunque son útiles en determinados casos, en muchos proyectos modernos se prefieren unions de literales cuando solo necesitamos restringir un valor a un conjunto de opciones.

---

# 23. ❓ ¿CUÁNDO EVITARÍAS UTILIZAR `any`?

**Siempre que sea posible.**

`any` elimina gran parte de las ventajas de TypeScript.

Por ejemplo:

```ts
const user: any = getUser();

user.name;
user.email;
user.foo.bar();
```

TypeScript no puede ayudarnos correctamente porque hemos perdido información sobre el tipo.

En su lugar, podemos utilizar tipos concretos:

```ts
const user: User = getUser();
```

O `unknown` cuando realmente desconocemos el tipo:

```ts
const data: unknown = getData();
```

Y después hacemos narrowing:

```ts
if (typeof data === 'string') {
  console.log(data.toUpperCase());
}
```

### 🟢 ¿Cuándo podría aceptar `any`?

En situaciones muy específicas, por ejemplo:

* Migraciones progresivas de JavaScript a TypeScript.
* Librerías antiguas sin buenos tipos.
* Código extremadamente dinámico donde no existe una alternativa razonable.

Pero incluso entonces conviene **aislarlo y documentarlo**.

### 🎯 Entrevista

> Evitaría `any` porque elimina la seguridad de tipos y el autocompletado de TypeScript. Preferiría un tipo concreto o `unknown` cuando realmente no conozco el tipo del dato. Solo utilizaría `any` en casos muy concretos donde no exista una alternativa razonable.

---

# 🧠 RESUMEN PARA ENTREVISTA

Si te hacen preguntas rápidas de TypeScript, recuerda estas ideas:

| Concepto         | Idea clave                             |
| ---------------- | -------------------------------------- |
| `interface`      | Define contratos/estructuras           |
| `type`           | Alias de tipos más flexible            |
| `union \|`       | Uno u otro tipo                        |
| `intersection &` | Combina tipos                          |
| `generics`       | Reutilización manteniendo tipos        |
| `any`            | Desactiva prácticamente el tipado      |
| `unknown`        | Tipo desconocido pero seguro           |
| `never`          | Algo que nunca ocurre                  |
| `void`           | No devuelve un valor útil              |
| `?`              | Propiedad opcional                     |
| Type inference   | TS deduce el tipo                      |
| Utility Types    | Transforman tipos existentes           |
| `Partial`        | Todo opcional                          |
| `Required`       | Todo obligatorio                       |
| `Pick`           | Selecciona propiedades                 |
| `Omit`           | Excluye propiedades                    |
| `Readonly`       | Solo lectura                           |
| `Record`         | Objeto tipado por claves/valores       |
| Type assertion   | Le indicamos a TS cómo tratar un valor |
| `enum`           | Conjunto de constantes nombradas       |

---

## ⭐ Las que yo consideraría MÁS IMPORTANTES para una entrevista Frontend

**🔥 Imprescindibles:**

1. `interface` vs `type`
2. Union types
3. Intersection types
4. Generics
5. `any` vs `unknown`
6. `never` vs `void`
7. Type inference
8. Utility Types
9. `Partial`, `Pick`, `Omit`, `Record`
10. Type assertion
11. Cuándo evitar `any`

> 🎯 Estas son las que conviene que puedas **explicar con tus propias palabras y acompañar con un ejemplo**, no solo memorizar.

