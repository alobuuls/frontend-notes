# 🟦 Qué es TypeScript

## 📖 Qué es

TypeScript es un lenguaje de programación creado por Microsoft que extiende a JavaScript añadiendo tipado estático y herramientas para escribir código más seguro y mantenible.

En realidad, TypeScript no reemplaza JavaScript, sino que lo mejora.

## 🧠 Idea clave

TypeScript es un superset de JavaScript, lo que significa que:

- Todo JavaScript válido funciona en TypeScript.
- TypeScript agrega tipos y verificación de errores.
- El código TypeScript se compila a JavaScript.

El navegador no entiende TypeScript, por eso primero debe convertirse a JavaScript.

## 💻 Ejemplo

### JavaScript

```js
function saludar(nombre) {
  return 'Hola ' + nombre;
}

saludar(5);
```

### TypeScript

```ts
function saludar(nombre: string): string {
  return 'Hola ' + nombre;
}

saludar(5); // Error
```

TypeScript detecta el error antes de ejecutar el programa.

## ⚠️ Cosas importantes

- TypeScript no se ejecuta directamente en el navegador.
- Primero se compila a JavaScript.
- Ayuda a detectar errores antes de correr el código.
- Es muy usado en proyectos grandes y aplicaciones modernas.

## ✨ Tip

Si ya sabes JavaScript, aprender TypeScript es mucho más fácil, porque en realidad seguirás escribiendo JavaScript, pero con tipos.

---

# 🟦 Diferencia entre TypeScript y JavaScript

## 📖 Qué es

JavaScript es un lenguaje de programación interpretado que se ejecuta directamente en el navegador o en entornos como Node.js.

TypeScript es una extensión de JavaScript que agrega tipado estático y otras herramientas para mejorar la calidad del código.

## 🧠 Idea clave

La principal diferencia es que TypeScript permite definir tipos de datos, mientras que JavaScript no lo hace de forma estricta.

Esto permite detectar errores antes de ejecutar el programa.

## 💻 Ejemplo

### JavaScript

```js
function sumar(a, b) {
  return a + b;
}

sumar(10, '5'); // Puede generar un resultado inesperado
```

### TypeScript

```ts
function sumar(a: number, b: number): number {
  return a + b;
}

sumar(10, '5'); // Error detectado antes de ejecutar
```

## ⚠️ Cosas importantes

- JavaScript se ejecuta directamente en el navegador.
- TypeScript necesita compilarse a JavaScript.
- TypeScript agrega tipado estático.
- TypeScript ayuda a detectar errores en desarrollo.
- Todo código JavaScript válido funciona en TypeScript.

## ✨ Tip

TypeScript no reemplaza a JavaScript, sino que lo mejora.

Al final, todo código TypeScript se convierte en JavaScript para poder ejecutarse.

---

# 🟦 Qué es el Tipado Estático

## 📖 Qué es

El tipado estático es una característica de algunos lenguajes de programación donde el tipo de las variables se define y se verifica antes de ejecutar el programa.

Esto permite que el sistema detecte errores de tipo durante el desarrollo.

## 🧠 Idea clave

Con tipado estático, el compilador verifica que los valores utilizados coincidan con los tipos esperados.

Si existe una incompatibilidad, el error se detecta antes de ejecutar la aplicación.

## 💻 Ejemplo

### JavaScript

```js
let edad = 25;

edad = 'veinticinco';
```

JavaScript permite este cambio porque las variables pueden almacenar distintos tipos de datos.

### TypeScript

```ts
let edad: number = 25;

edad = 'veinticinco'; // Error
```

TypeScript detecta inmediatamente que se intenta asignar un `string` a una variable de tipo `number`.

## ⚠️ Cosas importantes

- Los tipos se verifican durante el desarrollo.
- Ayuda a prevenir errores comunes.
- Facilita el mantenimiento del código.
- Mejora el autocompletado y las herramientas del editor.
- Es especialmente útil en proyectos grandes.

## ✨ Tip

Piensa en el tipado estático como una capa de seguridad que revisa tu código antes de ejecutarlo y te avisa cuando algo no coincide con los tipos definidos.

# 🟦 Qué es el Tipado Estático

## 📖 Qué es

El tipado estático es una característica de algunos lenguajes de programación donde el tipo de las variables se define y se verifica antes de ejecutar el programa.

Esto permite que el sistema detecte errores de tipo durante el desarrollo.

## 🧠 Idea clave

Con tipado estático, cada variable tiene un tipo definido (por ejemplo: `number`, `string`, `boolean`).

El compilador revisa que los valores usados en el código coincidan con esos tipos antes de ejecutar el programa.

## 💻 Ejemplo

### JavaScript

```js
let edad = 25;
edad = 'veinticinco'; // permitido
```

### TypeScript

```ts
let edad: number = 25;
edad = 'veinticinco'; // Error
```

## ⚠️ Cosas importantes

- Los tipos se verifican antes de ejecutar el código.
- Ayuda a prevenir errores comunes.
- Hace el código más claro y fácil de mantener.
- Es una de las principales características de TypeScript.

## ✨ Tip

Aunque TypeScript usa tipado estático, aún permite cierta flexibilidad gracias a la inferencia de tipos.

---

# 🟦 Ventajas en Proyectos Grandes

## 📖 Qué es

TypeScript es especialmente útil en proyectos grandes porque ayuda a organizar mejor el código y a detectar errores antes de que el programa se ejecute.

Cuando un proyecto crece y tiene muchos archivos, funciones y desarrolladores, mantener el código puede volverse difícil sin un sistema de tipos.

## 🧠 Idea clave

El tipado permite entender rápidamente qué tipo de datos usa cada variable, función o clase.

Esto reduce errores y facilita que varias personas trabajen en el mismo proyecto.

## 💻 Ejemplo

### TypeScript

```ts
function calcularTotal(precio: number, cantidad: number): number {
  return precio * cantidad;
}

calcularTotal(20, 3); // correcto
calcularTotal(20, '3'); // Error
```

## ⚠️ Cosas importantes

- Detecta errores antes de ejecutar el programa.
- Hace el código más fácil de mantener.
- Mejora el autocompletado en los editores.
- Facilita trabajar en equipo.
- Hace el código más predecible.

## ✨ Tip

En proyectos grandes es común que el código tenga cientos o miles de archivos.

TypeScript ayuda a que todo siga siendo claro y organizado.

---

# 🟦 Cómo Compila TypeScript a JavaScript

## 📖 Qué es

TypeScript no se ejecuta directamente en el navegador. Antes de ejecutarse, el código TypeScript debe convertirse a JavaScript.

Este proceso se llama compilación.

## 🧠 Idea clave

El compilador de TypeScript analiza el código, revisa los tipos y luego genera una versión equivalente en JavaScript que sí puede ejecutarse en el navegador o en Node.js.

## 💻 Ejemplo

### TypeScript

```ts
function saludar(nombre: string): string {
  return 'Hola ' + nombre;
}
```

### JavaScript generado

```js
function saludar(nombre) {
  return 'Hola ' + nombre;
}
```

## ⚠️ Cosas importantes

- El navegador no entiende TypeScript.
- TypeScript siempre se convierte a JavaScript.
- El compilador elimina los tipos al generar el JavaScript.
- El proceso se hace usando el compilador llamado `tsc`.

## ✨ Tip

Los tipos solo existen durante el desarrollo. Una vez compilado el proyecto, el código JavaScript generado ya no contiene información de tipos.

## ✨ Tip

Durante la compilación, TypeScript revisa errores en los tipos.

Si encuentra un problema, mostrará un error antes de generar el JavaScript.

---

# 🟦 Instalar TypeScript

## 📖 Qué es

Para poder usar TypeScript en tu computadora necesitas instalar su compilador.

La forma más común es instalarlo usando npm (Node Package Manager), que viene incluido cuando instalas Node.js.

## 🧠 Idea clave

Al instalar TypeScript se instala también el comando `tsc`, que es el compilador encargado de convertir el código TypeScript a JavaScript.

## 💻 Ejemplo

### Instalar TypeScript globalmente

```bash
npm install -g typescript
```

### Verificar la instalación

```bash
tsc -v
```

## ⚠️ Cosas importantes

- npm es el gestor de paquetes de Node.js.
- La opción `-g` instala TypeScript de forma global en tu sistema.
- Después de instalarlo podrás usar el comando `tsc` desde la terminal.
- El compilador se encargará de convertir archivos `.ts` a `.js`.

## ✨ Tip

Después de instalar TypeScript es buena práctica verificar la instalación usando:

```bash
tsc -v
```

---

# 🟦 Usar el Compilador TSC

## 📖 Qué es

`tsc` es el compilador de TypeScript. Su función es revisar el código TypeScript y convertirlo en JavaScript.

Durante este proceso también detecta errores de tipos en el código.

## 🧠 Idea clave

Cuando ejecutas `tsc` desde la terminal, el compilador analiza tus archivos `.ts` y genera archivos `.js` equivalentes que pueden ejecutarse en el navegador o en Node.js.

## 💻 Ejemplo

### Compilar un archivo TypeScript

```bash
tsc archivo.ts
```

Esto generará automáticamente:

```text
archivo.js
```

## ⚠️ Cosas importantes

- `tsc` convierte archivos `.ts` a `.js`.
- También revisa errores en los tipos.
- Puede compilar un archivo o todo un proyecto.
- Es la herramienta principal para trabajar con TypeScript.

## 💻 Comandos útiles

| Comando          | Qué hace                           |
| ---------------- | ---------------------------------- |
| `tsc archivo.ts` | Compila un archivo TS              |
| `tsc`            | Compila todo el proyecto           |
| `tsc --watch`    | Compila automáticamente al guardar |
| `tsc --noEmit`   | Solo revisa errores                |

## ✨ Tip

El modo `--watch` es muy usado en desarrollo porque recompila automáticamente cada vez que guardas un archivo.

---

# 🟦 Tipos Básicos

## 📖 Qué es

Los tipos básicos permiten definir qué tipo de datos puede tener una variable o función.

Esto ayuda a detectar errores antes de ejecutar el código y hace el código más claro y mantenible.

---

# 📘 Tipos Primitivos

## 📗 string

### 🧠 Qué es

Se utiliza para representar texto o cadenas de caracteres.

### 💡 Ejemplo

```ts
let nombre: string = 'Alo';
```

### ⚠️ Cosas importantes

- Puede contener letras, números y símbolos.
- Siempre debe escribirse entre comillas simples, dobles o backticks.
- Es uno de los tipos más utilizados en aplicaciones.

### ✨ Tip

Utiliza `string` para nombres, correos electrónicos, mensajes y cualquier dato textual.

---

## 📗 number

### 🧠 Qué es

Se utiliza para representar números enteros y decimales.

### 💡 Ejemplo

```ts
let edad: number = 25;
```

### ⚠️ Cosas importantes

- No existe diferencia entre enteros y decimales.
- Incluye valores como `10`, `3.14` o `-50`.
- También soporta valores especiales como `Infinity` y `NaN`.

### ✨ Tip

Utiliza `number` para cantidades, precios, edades, porcentajes y cálculos matemáticos.

```

```

## 📗 boolean

### 🧠 Qué es

Se utiliza para representar valores lógicos: `true` o `false`.

### 💡 Ejemplo

```ts
let esEstudiante: boolean = true;
```

### ⚠️ Cosas importantes

- Solo admite dos valores: `true` y `false`.
- Es muy utilizado en condiciones y validaciones.
- Ayuda a controlar el flujo de ejecución de una aplicación.

### ✨ Tip

Utiliza `boolean` para estados, permisos, validaciones y resultados de comparaciones.

---

## 📗 null

### 🧠 Qué es

Representa la ausencia intencional de un valor.

### 💡 Ejemplo

```ts
let valorNulo: null = null;
```

### ⚠️ Cosas importantes

- Indica que una variable no tiene valor de forma explícita.
- Es diferente de `undefined`.
- Suele utilizarse para representar datos vacíos o no disponibles.

### ✨ Tip

Usa `null` cuando quieras indicar conscientemente que una variable no tiene contenido.

---

## 📗 undefined

### 🧠 Qué es

Representa una variable que aún no tiene un valor asignado.

### 💡 Ejemplo

```ts
let valorIndef: undefined = undefined;
```

### ⚠️ Cosas importantes

- Es el valor por defecto de variables no inicializadas.
- Es diferente de `null`.
- Puede indicar que un dato aún no existe.

### ✨ Tip

Normalmente no necesitas asignar `undefined` manualmente; JavaScript lo hace automáticamente cuando corresponde.

---

## 📗 any

### 🧠 Qué es

Permite almacenar cualquier tipo de dato sin restricciones.

### 💡 Ejemplo

```ts
let cualquiera: any = 'hola';
cualquiera = 123;
```

### ⚠️ Cosas importantes

- Desactiva gran parte de las ventajas de TypeScript.
- Permite cambiar de tipo libremente.
- Reduce la seguridad del código.

### ✨ Tip

Evita usar `any` siempre que sea posible. Es preferible utilizar tipos específicos o `unknown`.

---

## 📗 unknown

### 🧠 Qué es

Puede contener cualquier valor, pero obliga a verificar su tipo antes de utilizarlo.

### 💡 Ejemplo

```ts
let desconocido: unknown = 'texto';

if (typeof desconocido === 'string') {
  console.log(desconocido.toUpperCase());
}
```

### ⚠️ Cosas importantes

- Es más seguro que `any`.
- Obliga a validar el tipo antes de usar el valor.
- Muy útil cuando no conoces el tipo de un dato recibido.

### ✨ Tip

Utiliza `unknown` cuando trabajes con datos externos, APIs o información cuyo tipo aún no conozcas.

---

## 📗 void

### 🧠 Qué es

Se utiliza en funciones que no retornan ningún valor.

### 💡 Ejemplo

```ts
function saludar(): void {
  console.log('Hola!');
}
```

### ⚠️ Cosas importantes

- Indica que la función no devuelve información.
- Es muy común en funciones que realizan acciones o efectos secundarios.
- Mejora la claridad del código.

### ✨ Tip

Utiliza `void` cuando una función solo ejecuta tareas y no necesita retornar un resultado.

---

## 📗 never

### 🧠 Qué es

Representa funciones que nunca retornan un valor porque terminan lanzando un error o ejecutándose indefinidamente.

### 💡 Ejemplo

```ts
function errorCritico(): never {
  throw new Error('¡Error crítico!');
}
```

### ⚠️ Cosas importantes

- Se utiliza en funciones que nunca finalizan normalmente.
- Puede aparecer en validaciones exhaustivas.
- Es diferente de `void`.

### ✨ Tip

Piensa en `never` como un tipo reservado para situaciones excepcionales donde la ejecución no puede continuar.

---

# ⚠️ Cosas Importantes

- Evita usar `any` si puedes usar tipos más específicos.
- `unknown` es más seguro que `any` porque obliga a verificar el tipo antes de usarlo.
- `void` se usa en funciones que no retornan nada.
- `never` indica que la función nunca termina normalmente.

---

# ✨ Tip

Define siempre los tipos básicos en tus variables y funciones.

Esto hará que tus proyectos grandes sean más fáciles de mantener y menos propensos a errores.

---

# 📘 Arrays en TypeScript

## 📖 Qué es

Un array es una colección de valores ordenados.

En TypeScript podemos definir el tipo de datos que puede contener un array para mayor seguridad.

---

## 📘 Sintaxis Básica

### 📗 type[]

#### 🧠 Qué es

Array que solo contiene valores de un tipo específico.

#### 💡 Ejemplo

```ts
let numeros: number[] = [1, 2, 3];
let nombres: string[] = ['Ana', 'Luis', 'María'];
```

---

### 📗 (type1 | type2)[]

#### 🧠 Qué es

Array que puede contener más de un tipo.

#### 💡 Ejemplo

```ts
let mezcla: (number | string)[] = [1, 'dos', 3, 'cuatro'];
```

---

### 📗 {prop: tipo}[]

#### 🧠 Qué es

Array de objetos con propiedades tipadas.

#### 💡 Ejemplo

```ts
let usuarios: { nombre: string; edad: number }[] = [
  { nombre: 'Ana', edad: 25 },
  { nombre: 'Luis', edad: 30 },
];
```

---

### 📗 readonly type[]

#### 🧠 Qué es

Array que no se puede modificar después de su creación.

#### 💡 Ejemplo

```ts
const colores: readonly string[] = ['rojo', 'verde', 'azul'];

// colores.push("amarillo") ❌ Error
```

---

## ⚠️ Cosas Importantes

- TypeScript verifica que los elementos añadidos al array coincidan con el tipo declarado.
- Usar `readonly` ayuda a prevenir modificaciones accidentales.
- Los arrays pueden combinarse con tuplas, interfaces o tipos personalizados para estructuras más complejas.

---

## ✨ Tip

Siempre que puedas, define el tipo del array.

Esto evita errores sutiles y hace que tu código sea más legible y seguro.

---

# 📘 Objetos en TypeScript

## 📖 Qué es

Un objeto es una estructura que agrupa valores (propiedades) bajo un mismo nombre.

En TypeScript podemos tipar cada propiedad para mayor seguridad y claridad.

## 📘 Objeto Simple

### 🧠 Qué es

Permite declarar un objeto con propiedades de tipos específicos.

### 💡 Sintaxis

```ts id="u1nbso"
{
  prop1: type1;
  prop2: type2;
}
```

### 💡 Ejemplo

```ts id="m5z7cp"
let persona: { nombre: string; edad: number } = {
  nombre: 'Alo',
  edad: 25,
};
```

### ⚠️ Cosas importantes

- Cada propiedad debe respetar el tipo definido.
- TypeScript validará que todas las propiedades obligatorias existan.
- Ayuda a evitar errores al manipular objetos.

### ✨ Tip

Utiliza objetos tipados para describir claramente la estructura de tus datos.

---

## 📘 Propiedades Opcionales

### 🧠 Qué es

Una propiedad puede no estar definida inicialmente usando `?`.

### 💡 Sintaxis

```ts id="9yks9l"
prop?: type
```

### 💡 Ejemplo

```ts id="2hdy4j"
let producto: {
  nombre: string;
  precio?: number;
} = {
  nombre: 'Libro',
};

producto.precio = 20; // ✅ válido
```

### ⚠️ Cosas importantes

- La propiedad puede existir o no.
- Evita crear múltiples tipos para pequeñas variaciones de un mismo objeto.
- Muy útil en formularios y APIs.

### ✨ Tip

Usa propiedades opcionales cuando un dato no sea obligatorio desde el inicio.

---

## 📘 Propiedades de Solo Lectura

### 🧠 Qué es

Una propiedad marcada con `readonly` no puede modificarse después de asignarse.

### 💡 Sintaxis

```ts id="r6z79y"
readonly prop: type
```

### 💡 Ejemplo

```ts id="0nqzpu"
let persona: {
  readonly id: number;
  nombre: string;
} = {
  id: 1,
  nombre: 'Alo',
};

// persona.id = 2 ❌ Error
```

### ⚠️ Cosas importantes

- Protege datos que no deberían cambiar.
- Ayuda a mantener la integridad de la información.
- Muy utilizado para identificadores únicos.

### ✨ Tip

Utiliza `readonly` para IDs, fechas de creación u otros datos inmutables.

---

## 📘 Propiedades Dinámicas

### 🧠 Qué es

Permiten agregar propiedades adicionales usando claves dinámicas.

### 💡 Sintaxis

```ts id="s4hr4p"
[clave: string]: type
```

### 💡 Ejemplo

```ts id="5n70rv"
let dic: { [clave: string]: string } = {};

dic['nombre'] = 'Alo';
```

### ⚠️ Cosas importantes

- Todas las propiedades deben respetar el tipo definido.
- Son útiles cuando no conoces las claves de antemano.
- Se utilizan frecuentemente en diccionarios y configuraciones.

### ✨ Tip

Usa propiedades dinámicas cuando las claves se generan en tiempo de ejecución.

---

## 📘 Tipos Personalizados

### 🧠 Qué es

Puedes definir un tipo de objeto reutilizable usando `type`.

### 💡 Sintaxis

```ts id="2l4ovg"
type Nombre = {
  prop: type;
};
```

### 💡 Ejemplo

```ts id="8r6t4w"
type Persona = {
  nombre: string;
  edad?: number;
};

let p: Persona = {
  nombre: 'Alo',
};
```

### ⚠️ Cosas importantes

- Evita repetir estructuras de objetos.
- Hace el código más legible.
- Facilita el mantenimiento de proyectos grandes.

### ✨ Tip

Cuando una estructura se reutiliza varias veces, conviértela en un tipo personalizado.

---

## ⚠️ Cosas Importantes

Tipar objetos permite:

- Evitar errores al acceder a propiedades inexistentes.
- Mejor autocompletado en el editor.
- Mayor claridad al trabajar en equipo.

---

## ✨ Tip

Siempre que uses objetos grandes o reutilizables, crea un **tipo personalizado** o una **interface** para mantener tu código limpio y seguro.

---

# 📘 Tipos Personalizados en TypeScript

## 📖 Qué es

Los tipos personalizados permiten definir estructuras de datos reutilizables.

Podemos usar `type` o `interface` para crear alias, definir objetos o combinarlos.

---

## 📘 Type Alias

### 🧠 Qué es

Permite crear un nombre para un tipo. Puede representar un tipo primitivo, una unión o un objeto.

### 💡 Sintaxis

```ts id="7q0ovq"
type Nombre = tipo;
```

### 💡 Ejemplo

```ts id="6f7vzl"
type ID = string | number;

let x: ID = 123;
let y: ID = 'abc';
```

### 🧠 Nota

Un alias es flexible y puede representar tipos primitivos, uniones u objetos.

### ✨ Tip

Utiliza alias cuando quieras simplificar tipos complejos o reutilizarlos en varias partes del proyecto.

---

## 📘 Interface Básica

### 🧠 Qué es

Define la forma o estructura de un objeto.

### 💡 Sintaxis

```ts id="3cy76y"
interface Nombre {
  prop: tipo;
}
```

### 💡 Ejemplo

```ts id="1x4z6s"
interface Persona {
  id: ID;
  nombre: string;
  edad?: number;
}
```

### 🧠 Nota

Permite describir claramente las propiedades que debe tener un objeto.

### ✨ Tip

Las interfaces son ideales para modelar objetos, respuestas de APIs y entidades de negocio.

---

## 📘 Interface Extendida

### 🧠 Qué es

Permite heredar propiedades de otra interface.

### 💡 Sintaxis

```ts id="lm4tna"
interface Hija extends Madre {
  propExtra: tipo;
}
```

### 💡 Ejemplo

```ts id="frnjup"
interface Empleado extends Persona {
  puesto: string;
}
```

### 🧠 Nota

Facilita reutilizar y ampliar estructuras existentes.

### ✨ Tip

Usa herencia cuando varios objetos compartan propiedades comunes.

---

## 📘 Reutilizar Type

### 🧠 Qué es

Un type alias puede utilizarse en cualquier variable o estructura compatible.

### 💡 Ejemplo

```ts id="0uym8l"
let idUsuario: ID = 5;
let idProducto: ID = 'abc';
```

### ✨ Tip

Crear alias para tipos repetidos mejora la legibilidad y reduce duplicación.

---

## 📘 Reutilizar Interface

### 🧠 Qué es

Una interface puede utilizarse para tipar múltiples objetos.

### 💡 Ejemplo

```ts id="efz3qj"
let empleado: Empleado = {
  id: 1,
  nombre: 'Alo',
  puesto: 'Dev',
};
```

### ✨ Tip

Las interfaces permiten mantener consistencia entre distintos objetos del proyecto.

---

## 📘 Propiedades Opcionales

### 🧠 Qué es

Una propiedad opcional puede existir o no dentro de una interface o tipo.

### 💡 Sintaxis

```ts id="w63u1n"
prop?: tipo
```

### 💡 Ejemplo

```ts id="gq5f8j"
interface Persona {
  nombre: string;
  edad?: number;
}
```

### ⚠️ Cosas importantes

- No es obligatorio proporcionar la propiedad.
- Ayuda a modelar datos incompletos.
- Muy común en formularios y respuestas de APIs.

### ✨ Tip

Utiliza propiedades opcionales cuando ciertos datos dependan del contexto o no estén siempre disponibles.

## 📘 Propiedades de Solo Lectura

### 🧠 Qué es

Una propiedad marcada con `readonly` no puede modificarse después de asignarse.

### 💡 Sintaxis

```ts id="w7s2k9"
readonly prop: tipo
```

### 💡 Ejemplo

```ts id="v3m8q1"
readonly id: number;
```

### ⚠️ Cosas importantes

- El valor solo puede asignarse una vez.
- Evita modificaciones accidentales.
- Muy útil para identificadores únicos y datos inmutables.

### ✨ Tip

Utiliza `readonly` cuando un dato no deba cambiar durante la vida útil del objeto.

---

## 📘 Combinar Type + Interface

### 🧠 Qué es

Puedes usar `type` para definir tipos dinámicos y `interface` para modelar objetos.

### 💡 Ejemplo

```ts id="x6r4n2"
type ID = string | number;

interface Persona {
  id: ID;
  nombre: string;
  edad?: number;
}
```

### 🧠 Nota

✅ Útil para IDs dinámicos, uniones de tipos o valores reutilizables.

### ⚠️ Cosas importantes

- `type` puede representar tipos primitivos, uniones y objetos.
- `interface` está diseñada principalmente para objetos.
- Ambos pueden trabajar juntos sin problemas.

### ✨ Tip

Combina ambos enfoques para aprovechar las fortalezas de cada uno.

---

## ⚠️ Cosas Importantes

- `type` es más flexible, pero no puede ser extendido de la misma forma que una `interface`.
- `interface` es ideal para objetos y herencia.
- Ambos pueden coexistir y combinarse según la necesidad.

---

## ✨ Tip

Usa `type` para tipos primitivos, uniones o alias complejos e `interface` para objetos reutilizables y estructuras claras.

Esto hará tu código más legible y escalable.

---

# 📘 Funciones Tipadas en TypeScript

## 📖 Qué es

En TypeScript, las funciones pueden tener tipos en los parámetros y en el valor de retorno.

Esto permite detectar errores y mejorar la autocompletación en el editor.

---

## 📘 Función Normal con Parámetros Tipados y Retorno

### 🧠 Qué es

Sintaxis básica para declarar tipos en parámetros y retorno.

### 💡 Sintaxis

```ts id="u9f2s8"
function nombre(param: tipo): tipo {
  ...
}
```

### 💡 Ejemplo

```ts id="m4p8x6"
function sumar(a: number, b: number): number {
  return a + b;
}
```

### ⚠️ Cosas importantes

- Los parámetros pueden tener tipos específicos.
- El tipo de retorno indica qué valor devuelve la función.
- TypeScript validará que el valor retornado coincida con el tipo declarado.

### ✨ Tip

Define siempre el tipo de retorno para mejorar la claridad del código.

---

## 📘 Función Flecha con Parámetros Tipados y Retorno

### 🧠 Qué es

Las funciones flecha también pueden ser tipadas.

### 💡 Sintaxis

```ts id="j8q7d5"
const nombre = (param: tipo): tipo => {
  ...
};
```

### 💡 Ejemplo

```ts id="n3z6r1"
const multiplicar = (x: number, y: number): number => x * y;
```

### ⚠️ Cosas importantes

- Funciona igual que una función tradicional.
- Es muy utilizada en React y JavaScript moderno.
- Permite una sintaxis más compacta.

### ✨ Tip

Las funciones flecha son ideales para callbacks y operaciones cortas.

---

## 📘 Parámetro Opcional

### 🧠 Qué es

Un parámetro puede ser opcional utilizando `?`.

### 💡 Sintaxis

```ts id="c4w9k2"
param?: tipo
```

### 💡 Ejemplo

```ts id="q7v3m5"
function saludar(nombre?: string): string {
  return `Hola ${nombre ?? 'amigo'}`;
}
```

### ⚠️ Cosas importantes

- El argumento puede omitirse al llamar la función.
- Su valor será `undefined` si no se proporciona.
- Generalmente se coloca al final de la lista de parámetros.

### ✨ Tip

Usa parámetros opcionales cuando cierta información no sea obligatoria.

---

## 📘 Valor por Defecto en Parámetro

### 🧠 Qué es

Permite asignar un valor automáticamente si no se recibe un argumento.

### 💡 Sintaxis

```ts id="d2p5x8"
param: tipo = valor;
```

### 💡 Ejemplo

```ts id="f9n1r4"
function saludar(nombre: string = 'amigo'): string {
  return `Hola ${nombre}`;
}
```

### ⚠️ Cosas importantes

- El valor por defecto se usa únicamente cuando no se envía un argumento.
- Evita tener que escribir validaciones adicionales.
- Hace las funciones más fáciles de utilizar.

### ✨ Tip

Prefiere valores por defecto cuando existe una opción lógica predeterminada.

---

## 📘 Combinación Opcional + Default

### 🧠 Qué es

En algunos casos se combinan parámetros con valor por defecto y parámetros opcionales.

### 💡 Ejemplo

```ts id="h5t2z7"
function presentarse(nombre: string = 'desconocido', edad?: number): string {
  return `Hola ${nombre}, edad: ${edad ?? 'no especificada'}`;
}
```

### ⚠️ Cosas importantes

- Normalmente basta con usar un valor por defecto.
- Los parámetros opcionales suelen colocarse al final.
- Permite funciones más flexibles.

### ✨ Tip

Combina ambas técnicas únicamente cuando aporten claridad a la función.

---

## 📘 Uso de Tipos Personalizados en Parámetros

### 🧠 Qué es

Puedes utilizar tipos o interfaces personalizadas como parámetros de una función.

### 💡 Sintaxis

```ts id="z8m6n4"
(p: TypeName)
```

### 💡 Ejemplo

```ts id="b1k7r3"
function saludarPersona(p: Persona): string {
  return `Hola ${p.nombre}`;
}
```

### ⚠️ Cosas importantes

- Permite reutilizar estructuras definidas previamente.
- Hace el código más mantenible.
- Reduce la duplicación de tipos.

### ✨ Tip

Siempre que trabajes con objetos complejos, utiliza tipos personalizados.

---

## 📘 Función Flecha con Tipo Personalizado

### 🧠 Qué es

Las funciones flecha también pueden recibir tipos o interfaces personalizadas.

### 💡 Sintaxis

```ts id="y4q8m2"
(p: TypeName): tipo => {
  ...
}
```

### 💡 Ejemplo

```ts id="g2v5n9"
const saludarPersonaFlecha = (p: Persona = { nombre: 'amigo' }): string => {
  return `Hola ${p.nombre}`;
};
```

### ⚠️ Cosas importantes

- Combina las ventajas de las funciones flecha y los tipos personalizados.
- Muy común en aplicaciones modernas.
- Facilita la reutilización de código.

### ✨ Tip

Cuando una función recibe objetos, tiparlos mejora enormemente la experiencia de desarrollo.

---

## ⚠️ Cosas Importantes

- Siempre define los tipos de los parámetros y del retorno.
- Evita usar `any` para mantener la seguridad de tipos.
- Los parámetros opcionales deben ir al final de la lista.
- Los valores por defecto se ejecutan si no se pasa el argumento.

---

## ✨ Tip

Tipar funciones hace tu código más predecible y ayuda a detectar errores antes de ejecutar.

# 📘 Union Types y Type Narrowing en TypeScript

## 📖 Qué es

Los **Union Types** permiten que una variable pueda tener más de un tipo de dato.

Esto es muy útil cuando trabajas con APIs o datos que pueden cambiar de tipo.

---

## 📘 Union Types

### 🧠 Qué es

Permite declarar varios tipos posibles para una misma variable.

### 💡 Sintaxis

```ts id="j4x7k2"
let variable: tipo1 | tipo2;
```

### 💡 Ejemplo

```ts id="m9v2p6"
let id: string | number;

id = 123; // ✅ válido
id = 'abc'; // ✅ válido

// id = true; ❌ Error
```

### 🧠 Uso común

Es muy utilizado en APIs donde un valor puede llegar como `string` o `number`, especialmente en identificadores.

### ⚠️ Cosas importantes

- Una variable puede almacenar cualquiera de los tipos definidos.
- TypeScript impedirá asignar tipos no incluidos en la unión.
- Permite escribir código más flexible sin perder seguridad.

### ✨ Tip

Utiliza Union Types cuando una variable pueda representar varios tipos válidos.

---

## 📘 Type Narrowing

### 🧠 Qué es

TypeScript puede detectar automáticamente qué tipo tiene una variable dentro de un bloque condicional.

Esto se conoce como **Type Narrowing** y permite usar métodos y propiedades correctas según el tipo identificado.

### 💡 Ejemplo

```ts id="p5z8n4"
if (typeof id === 'string') {
  console.log(id.toUpperCase()); // ✅ id tratado como string
} else {
  console.log(id + 1); // ✅ id tratado como number
}
```

### ⚠️ Cosas importantes

- Reduce errores al trabajar con Union Types.
- Permite acceder a métodos específicos de cada tipo.
- TypeScript ajusta automáticamente el tipo dentro del bloque correspondiente.

### ✨ Tip

Siempre que utilices Union Types, intenta aplicar algún mecanismo de narrowing antes de acceder a propiedades o métodos.

---

## 📘 Cuándo Usar Cada Técnica de Narrowing

### 🧠 Técnicas más comunes

| Técnica      | Cuándo usar                   | Ejemplo                  |
| ------------ | ----------------------------- | ------------------------ |
| `typeof`     | Tipos primitivos              | `typeof x === "string"`  |
| `instanceof` | Clases                        | `obj instanceof MiClase` |
| `in`         | Propiedades únicas de objetos | `"propiedad" in obj`     |
| `String()`   | Mostrar cualquier union type  | `${String(valor)}`       |

---

## 📘 Narrowing con typeof

### 🧠 Qué es

Se utiliza para verificar tipos primitivos.

### 💡 Ejemplo

```ts id="r8w2f5"
let valor: string | number = 'Hola';

if (typeof valor === 'string') {
  console.log(valor.toUpperCase());
}
```

### ✨ Tip

Es la técnica más utilizada para trabajar con `string`, `number`, `boolean`, `undefined` y `symbol`.

---

## 📘 Narrowing con instanceof

### 🧠 Qué es

Permite verificar si un objeto pertenece a una clase específica.

### 💡 Ejemplo

```ts id="y7m4c1"
class Usuario {}

const obj = new Usuario();

if (obj instanceof Usuario) {
  console.log('Es un Usuario');
}
```

### ✨ Tip

Utiliza `instanceof` cuando trabajes con clases personalizadas.

---

## 📘 Narrowing con in

### 🧠 Qué es

Permite comprobar si una propiedad existe dentro de un objeto.

### 💡 Ejemplo

```ts id="t3p9v8"
type Perro = {
  ladrar: () => void;
};

type Gato = {
  maullar: () => void;
};

function hablar(animal: Perro | Gato) {
  if ('ladrar' in animal) {
    animal.ladrar();
  } else {
    animal.maullar();
  }
}
```

### ✨ Tip

Muy útil cuando trabajas con objetos que comparten algunas propiedades pero no todas.

---

## ⚠️ Cosas Importantes

- Union Types permiten escribir código flexible y seguro.
- Type Narrowing garantiza que accedas a métodos y propiedades solo cuando el tipo sea correcto.
- Combinar ambas técnicas ayuda a evitar errores en tiempo de ejecución.

---

## ✨ Tip

Usa:

- `typeof` para tipos primitivos.
- `instanceof` para clases.
- `in` para propiedades de objetos.
- `String()` para mostrar cualquier valor de un Union Type.

---

# 📘 Tuplas en TypeScript

## 📖 Qué es

Una tupla es un tipo especial de array donde el número de elementos y su tipo están definidos en un orden específico.

A diferencia de un array normal, cada posición tiene un tipo concreto.

---

## 📘 Sintaxis Básica

### 🧠 Qué es

Se define usando corchetes con los tipos en orden.

### 💡 Sintaxis

```ts id="f1m7r3"
let variable: [tipo1, tipo2, tipo3];
```

### 💡 Ejemplo

```ts id="k8v2q6"
let persona: [string, number] = ['Alo', 25];
```

### 🧠 Aquí

- Posición `0` → `string`
- Posición `1` → `number`

### ⚠️ Cosas importantes

- El orden es obligatorio.
- Cada posición tiene un tipo específico.
- No puede alterarse el orden definido.

### ✨ Tip

Utiliza tuplas cuando el significado de cada posición sea importante.

---

## 📘 Acceder a los Valores

### 🧠 Qué es

Los valores se acceden mediante índices, igual que en los arrays.

### 💡 Ejemplo

```ts id="w5c8n1"
let usuario: [string, number] = ['Ana', 30];

console.log(usuario[0]); // "Ana"
console.log(usuario[1]); // 30
```

### ✨ Tip

TypeScript conoce el tipo exacto de cada posición y ofrecerá autocompletado adecuado.

---

## 📘 Tuplas con Más Tipos

### 🧠 Qué es

Puedes combinar tantos tipos como necesites.

### 💡 Ejemplo

```ts id="n2r6x4"
let producto: [number, string, boolean] = [1, 'Laptop', true];
```

### ⚠️ Cosas importantes

- Cada posición debe coincidir con el tipo declarado.
- El orden sigue siendo obligatorio.

### ✨ Tip

Las tuplas son ideales para representar datos compactos con estructura fija.

---

## 📘 Tuplas con Elementos Opcionales

### 🧠 Qué es

Algunas posiciones pueden marcarse como opcionales usando `?`.

### 💡 Ejemplo

```ts id="q9w4e2"
let usuario: [string, number?];

usuario = ['Alo'];
usuario = ['Alo', 25];
```

### ⚠️ Cosas importantes

- Los elementos opcionales suelen ubicarse al final.
- Permiten mayor flexibilidad sin perder tipado.

### ✨ Tip

Úsalas cuando ciertos valores no siempre estén disponibles.

---

## 📘 Tuplas con Rest (...)

### 🧠 Qué es

Permiten agregar múltiples elementos del mismo tipo después de una posición determinada.

### 💡 Ejemplo

```ts id="v7k1m9"
let datos: [string, ...number[]];

datos = ['puntos', 10, 20, 30];
```

### ⚠️ Cosas importantes

- El operador `...` funciona de forma similar a los parámetros rest.
- Todos los elementos adicionales deben respetar el mismo tipo.

### ✨ Tip

Muy útil cuando conoces el inicio de la estructura pero no la cantidad exacta de elementos posteriores.

---

## 📘 Tuplas de Solo Lectura

### 🧠 Qué es

Puedes evitar modificaciones utilizando `readonly`.

### 💡 Ejemplo

```ts id="b4n8z5"
const coordenada: readonly [number, number] = [10, 20];

// coordenada[0] = 15 ❌ Error
```

### ⚠️ Cosas importantes

- Impide modificar cualquier posición de la tupla.
- Protege datos que deben permanecer constantes.

### ✨ Tip

Utiliza `readonly` para coordenadas, configuraciones o datos que no deban cambiar una vez creados.

## 📘 Uso Común de Tuplas

### 🧠 Qué es

Las tuplas se utilizan cuando la posición de los datos es importante.

### 💡 Ejemplo típico

```ts
let coordenada: [number, number] = [40.7128, -74.006];
```

### 🧠 También se usan en retornos de funciones

### 💡 Ejemplo

```ts
function obtenerUsuario(): [number, string] {
  return [1, 'Alo'];
}
```

### ⚠️ Cosas importantes

- Las tuplas tienen orden y longitud definidos.
- Cada posición tiene un tipo específico.
- Son útiles cuando quieres representar datos estructurados simples.
- Se parecen a los arrays, pero con tipos más estrictos.

### ✨ Tip

Usa tuplas cuando el orden de los datos tenga significado, como coordenadas, pares clave-valor o resultados de funciones.

---

# 📘 Type Guards en TypeScript

## 📖 Qué es

Los Type Guards son técnicas para verificar o asegurar el tipo de una variable antes de usarla.

Esto ayuda a evitar errores en tiempo de ejecución y mejora la seguridad de tipos.

---

## 📘 `is` → Verificar el Tipo (Seguro)

### 🧠 Qué es

Permite comprobar el tipo de una variable antes de usarla.

Funciona como una verificación real, no fuerza nada.

### 💡 Sintaxis

```ts
function esString(valor: any): valor is string {
  return typeof valor === 'string';
}
```

### 💡 Ejemplo

```ts
let dato: string | number = 'Hola';

if (esString(dato)) {
  console.log(dato.toUpperCase()); // ✅ seguro, dato es string
} else {
  console.log(dato + 1); // ✅ seguro, dato es number
}
```

### ⚠️ Cosas importantes

- Verifica el tipo antes de usarlo.
- Aumenta la seguridad del código.
- Es ideal para trabajar con Union Types.

### ✨ Tip

Siempre que tengas dudas sobre el tipo de una variable, utiliza Type Guards.

---

## 📘 `as` → Forzar el Tipo (Peligroso si No Estás Seguro)

### 🧠 Qué es

Convierte una variable a un tipo determinado sin verificarlo.

⚠️ Solo debe utilizarse cuando estás completamente seguro del tipo.

### 💡 Sintaxis

```ts
let elemento = document.getElementById('input') as HTMLInputElement;
```

### 💡 Ejemplo

```ts
const input = document.getElementById('nombre') as HTMLInputElement;

console.log(input.value);
```

```ts
// ❌ Si el elemento no es un input,
// puede provocar errores en tiempo de ejecución.
```

### ⚠️ Cosas importantes

- No valida el tipo.
- Simplemente le indica a TypeScript que confíe en ti.
- Un uso incorrecto puede provocar errores.

### ✨ Tip

Utiliza `as` únicamente en situaciones controladas donde conozcas exactamente el tipo del valor.

---

## 📘 Uso Recomendado

### 🧠 Cuándo usar cada uno

### ✅ `as`

Cuando estás 100% seguro del tipo.

#### 💡 Ejemplos

- Elementos HTML conocidos.
- Respuestas de APIs bien tipadas.
- Librerías externas controladas.

### ✅ `is` / Type Guard

Cuando no estás seguro del tipo.

#### 💡 Ejemplos

- Union Types.
- Datos dinámicos.
- Información proveniente de APIs externas.

### ✨ Tip

Ante la duda, utiliza Type Guards.

---

## 📘 Combinando con Union Types

### 🧠 Qué es

Los Type Guards son especialmente útiles cuando trabajas con Union Types.

### 💡 Ejemplo

```ts
function procesar(id: string | number) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else {
    console.log(id + 1);
  }
}
```

### ⚠️ Cosas importantes

- Permiten trabajar con múltiples tipos de forma segura.
- Evitan errores de acceso a métodos inexistentes.
- Mejoran la legibilidad del código.

### ✨ Tip

Union Types + Type Guards es una de las combinaciones más utilizadas en TypeScript.

---

## ⚠️ Cosas Importantes

- `as` no valida, simplemente fuerza el tipo.
- `is` y los Type Guards verifican el tipo antes de usarlo.
- `typeof` e `instanceof` son mecanismos de narrowing seguros.
- Siempre que no estés completamente seguro del tipo, utiliza verificaciones.

---

## ✨ Tip

Combina Union Types + Type Guards para escribir código flexible y seguro, y utiliza `as` solo en casos controlados.

---

# 📘 Modificadores de Acceso en TypeScript

## 📖 Qué es

En TypeScript podemos controlar quién puede acceder a las propiedades y métodos de una clase usando modificadores de acceso.

Esto ayuda a encapsular datos y evitar usos incorrectos.

---

## 📘 Tipos de Modificadores

### 💡 Tabla de acceso

| Modificador | Acceso desde fuera | Acceso desde clase hija |
| ----------- | ------------------ | ----------------------- |
| `public`    | ✅                 | ✅                      |
| `private`   | ❌                 | ❌                      |
| `protected` | ❌                 | ✅                      |

---

## 📘 Public

### 🧠 Qué es

Acceso libre desde cualquier lugar.

### 💡 Ejemplo

```ts id="p1q7m4"
class Persona {
  public nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }
}

const p = new Persona('Alo');
console.log(p.nombre); // ✅ funciona desde fuera
```

### ⚠️ Cosas importantes

- Es el modificador por defecto en TypeScript.
- Permite acceso desde cualquier parte del código.
- No restringe el uso de la propiedad o método.

### ✨ Tip

Usa `public` cuando quieras que una propiedad o método sea accesible desde cualquier parte de la aplicación.

---

## 📘 Private

### 🧠 Qué es

Solo accesible dentro de la clase donde se declara.

⚠️ En TypeScript esto solo se valida en compilación, no en runtime real.

### 💡 Ejemplo

```ts id="a8k3v1"
class Persona {
  private edad: number;

  constructor(edad: number) {
    this.edad = edad;
  }

  mostrarEdad() {
    console.log(this.edad); // ✅ accesible dentro de la clase
  }
}

const p = new Persona(25);

// console.log(p.edad); ❌ Error
```

### ⚠️ Cosas importantes

- Solo accesible dentro de la clase.
- No puede ser usado desde instancias externas.
- TypeScript lo valida solo en tiempo de compilación.

### ✨ Tip

Usa `private` para proteger datos internos que no deben ser modificados desde fuera.

---

## 📘 Protected

### 🧠 Qué es

Accesible dentro de la clase y sus subclases (hijas).

### 💡 Ejemplo

```ts id="v7m2x9"
class Persona {
  protected nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }
}

class Empleado extends Persona {
  mostrarNombre() {
    console.log(this.nombre); // ✅ accesible en subclase
  }
}

const e = new Empleado('Alo');

// console.log(e.nombre); ❌ Error
```

### ⚠️ Cosas importantes

- Accesible en la clase base y en clases hijas.
- No accesible desde fuera.
- Muy útil en herencia.

### ✨ Tip

Usa `protected` cuando quieras que las clases hijas puedan acceder a datos internos sin exponerlos públicamente.

---

## ⚠️ Cosas Importantes

- `private` → solo dentro de la clase.
- `protected` → clase y subclases.
- `public` → acceso libre.
- En JavaScript moderno existe `#` para privacidad real en runtime.
- En TypeScript, `private` y `protected` se validan en compilación.

---

## ✨ Tip

Usa:

- `private` para datos internos que no deben modificarse.
- `protected` para lógica compartida con clases hijas.
- `public` para lo que deba ser accesible desde cualquier parte.

---

# 📘 Clases, Extends y Implements en TypeScript

## 📖 Qué es

Las clases en TypeScript permiten crear objetos con propiedades y métodos, siguiendo la programación orientada a objetos.

Se pueden extender con `extends` o cumplir contratos con `implements`.

---

## 📘 Extends

### 🧠 Qué es

Permite heredar propiedades y métodos de otra clase (clase base).

⚠️ Solo se permite una clase base.

### 💡 Ejemplo

```ts id="c8q1z7"
class Animal {
  comer() {
    console.log('Comiendo');
  }
}

class Perro extends Animal {}

const p = new Perro();
p.comer(); // ✅ heredado de Animal
```

### 🧠 Beneficios

- Reutiliza código de la clase base.
- Permite especializar clases hijas.
- Facilita jerarquías de objetos.

---

## 📘 Implements

### 🧠 Qué es

Permite que una clase cumpla con una interfaz (contrato).

⚠️ No hereda código, solo obliga a implementar estructura.

Una clase puede implementar múltiples interfaces.

### 💡 Ejemplo

```ts id="f4m8v2"
interface Volador {
  volar(): void;
}

class Pajaro implements Volador {
  volar() {
    console.log('Volando');
  }
}

const p = new Pajaro();
p.volar(); // ✅ cumple la interfaz
```

### 🧠 Beneficios

- Garantiza estructuras consistentes.
- Ideal para contratos en código.
- Mejora escalabilidad.

---

## ⚠️ Cosas Importantes

- `extends` → hereda código (propiedades y métodos).
- `implements` → obliga a cumplir una estructura.
- Una clase puede extender solo una clase.
- Una clase puede implementar múltiples interfaces.
- Se pueden combinar `extends` + `implements`.

---

## ✨ Tip

Usa `extends` para reutilizar código y `implements` para definir contratos claros.

En proyectos grandes, esta combinación ayuda a mantener el código organizado, escalable y fácil de mantener.

# 📘 Literal Types en TypeScript

## 🧠 Qué es

Los Literal Types permiten definir valores exactos y específicos como tipo.

En lugar de permitir cualquier `string` o `number`, limitas la variable a valores concretos.

---

## 📘 Literal Types básicos

### 🧠 Qué es

Puedes usar valores exactos como tipos.

### 💡 Ejemplo

```ts id="l1q8v2"
let estado: 'activo';

estado = 'activo'; // ✅ válido
// estado = "inactivo"; ❌ Error
```

### 🧠 Idea clave

La variable solo puede tener ese valor exacto.

### ⚠️ Cosas importantes

- No admite otros valores fuera del definido.
- Es útil para estados simples o controlados.
- Aumenta la seguridad del código.

---

## 📘 Combinar con Union Types

### 🧠 Qué es

Es muy común usar literal types junto con union types para permitir varias opciones específicas.

### 💡 Ejemplo

```ts id="m8v3n7"
let rol: 'admin' | 'user' | 'guest';

rol = 'admin'; // ✅
rol = 'user'; // ✅

// rol = "superadmin"; ❌ Error
```

### ⚠️ Cosas importantes

- Permite un conjunto cerrado de valores.
- Evita valores inválidos.
- Muy utilizado en roles y estados.

---

## 📘 Uso en Objetos

### 🧠 Qué es

Puedes usar literal types dentro de objetos para restringir valores.

### 💡 Ejemplo

```ts id="c5q1z9"
type Usuario = {
  nombre: string;
  rol: 'admin' | 'user';
};

const u: Usuario = {
  nombre: 'Alo',
  rol: 'admin',
};
```

### ✨ Tip

Ideal para modelar permisos o configuraciones estrictas.

---

## 📘 Uso en Funciones

### 🧠 Qué es

Permite controlar exactamente qué valores puede recibir una función.

### 💡 Ejemplo

```ts id="r7m2x5"
function cambiarEstado(estado: 'on' | 'off'): void {
  console.log(estado);
}

cambiarEstado('on'); // ✅
// cambiarEstado("idle"); ❌ Error
```

### ⚠️ Cosas importantes

- Limita entradas a valores específicos.
- Reduce errores en tiempo de ejecución.
- Mejora la legibilidad del código.

---

## 📘 Const Assertions (`as const`)

### 🧠 Qué es

Permite que los valores se mantengan como literal types en lugar de generalizarse.

### 💡 Ejemplo

```ts id="t9v4k2"
const config = {
  modo: 'oscuro',
} as const;
```

### 🧠 Resultado

- `modo` ya no es `string`
- Ahora es el literal `"oscuro"`

### ⚠️ Cosas importantes

- Convierte propiedades en valores inmutables.
- Evita la ampliación de tipos.
- Muy útil en configuraciones.

---

## ⚠️ Cosas importantes

- Literal types restringen valores a opciones específicas.
- Se usan mucho con union types.
- Ayudan a evitar errores de valores inválidos.
- Son clave en patrones como discriminated unions.

---

## ✨ Tip

Usa literal types cuando tengas un conjunto fijo de opciones (roles, estados, tipos).

Esto hace tu código más seguro, explícito y fácil de entender.

---

# 📘 Enums en TypeScript

## 🧠 Qué es

Un enum (enumeración) permite definir un conjunto de valores constantes con nombre.

Se usa para representar opciones fijas como roles, estados o tipos.

---

## 📘 Enum básico

### 🧠 Qué es

Se define usando la palabra clave `enum`.

### 💡 Ejemplo

```ts id="u3n8q1"
enum Rol {
  Admin,
  User,
  Guest,
}

let usuarioRol: Rol = Rol.Admin;
```

### 🧠 Idea clave

Por defecto, TypeScript asigna valores numéricos:

- Admin = 0
- User = 1
- Guest = 2

---

## 📘 Enum con valores personalizados

### 🧠 Qué es

Puedes asignar valores manualmente.

### 💡 Ejemplo

```ts id="v5m2x7"
enum Estado {
  Activo = 1,
  Inactivo = 0,
}

let estado: Estado = Estado.Activo;
```

---

## 📘 Enum de Strings

### 🧠 Qué es

También puedes usar strings en lugar de números.

### 💡 Ejemplo

```ts id="x9q1k6"
enum Rol {
  Admin = 'ADMIN',
  User = 'USER',
  Guest = 'GUEST',
}

let rol: Rol = Rol.User;
```

---

## ⚠️ Cosas importantes

- Los enums ayudan a representar conjuntos fijos de valores.
- Mejoran la legibilidad del código.
- Evitan valores inválidos fuera del conjunto definido.
- Pueden ser numéricos o basados en strings.

---

## ✨ Tip

Usa enums cuando tengas un conjunto fijo y reutilizable de valores (roles, estados, tipos de usuario).

En proyectos modernos, muchas veces se prefieren literal unions, pero enums siguen siendo útiles en estructuras grandes o legacy.

# 📘 Acceso a valores en Enums

## 🧠 Qué es

Puedes acceder a los valores de un enum usando su nombre.

---

## 📘 Acceso a valores

### 💡 Ejemplo

```ts id="e1q8v4"
console.log(Rol.Admin); // "ADMIN" o 0 según definición
```

### 🧠 Idea clave

El valor depende de cómo esté definido el enum (numérico o string).

### ⚠️ Cosas importantes

- Permite acceder a valores de forma clara.
- Mejora la legibilidad del código.
- Depende del tipo de enum definido.

---

## 📘 Uso en funciones

### 🧠 Qué es

Los enums permiten restringir valores válidos en parámetros de funciones.

### 💡 Ejemplo

```ts id="f7m2x9"
function crearUsuario(rol: Rol): void {
  console.log(rol);
}

crearUsuario(Rol.Admin); // ✅
```

### ⚠️ Cosas importantes

- Asegura valores válidos.
- Evita errores por strings o números incorrectos.
- Mejora la mantenibilidad del código.

---

## ⚠️ Cosas importantes

- Los enums agrupan constantes relacionadas.
- Pueden ser numéricos o de tipo string.
- Mejoran la legibilidad del código.
- Son útiles para valores fijos reutilizables.

---

## ✨ Tip

Usa enums cuando tengas un conjunto de valores constantes con nombre.

Para casos simples, también puedes usar literal types con union types.

---

# 📘 Generics en TypeScript

## 🧠 Qué es

Los Generics permiten crear código reutilizable sin perder el tipo.

En lugar de usar `any`, usas un tipo dinámico que se define automáticamente.

---

## 📘 Función genérica básica

### 🧠 Qué es

Se usa `<T>` como tipo genérico.

### 💡 Ejemplo

```ts id="g3v9k2"
function identidad<T>(valor: T): T {
  return valor;
}
```

### 🧠 Idea clave

- `T` se define automáticamente.
- Entrada = salida.

### 💡 Uso

```ts id="h8m1q7"
identidad(10); // T = number
identidad('hola'); // T = string
```

---

## 📘 Generics con arrays

### 🧠 Qué es

Muy común usar generics con arrays.

### 💡 Ejemplo

```ts id="j4n6x1"
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

getFirst([1, 2, 3]); // number
getFirst(['a', 'b']); // string
```

---

## 📘 Múltiples tipos genéricos

### 🧠 Qué es

Puedes usar más de un tipo genérico.

### 💡 Ejemplo

```ts id="k9v2m5"
function combinar<T, U>(a: T, b: U) {
  return { a, b };
}

combinar(1, 'hola'); // { a: number, b: string }
```

---

## 📘 Generics con restricciones (`extends`)

### 🧠 Qué es

Permite limitar qué tipos se pueden usar.

### 💡 Ejemplo

```ts id="m1q7v8"
function fn<T extends { length: number }>(x: T): number {
  return x.length;
}
```

### 🧠 Idea clave

“Debe tener esa propiedad”.

### 💡 Ejemplos válidos

```ts id="n5v2x1"
fn('hola'); // ✅ string tiene length
fn([1, 2, 3]); // ✅ array tiene length
```

### ❌ Ejemplo inválido

```ts id="p8m4q6"
// fn(123); ❌ number no tiene length
```

---

## 📘 Generics en Type Aliases

### 🧠 Qué es

También puedes usar generics en tipos personalizados.

### 💡 Ejemplo

```ts id="q2v9k3"
type Caja<T> = {
  contenido: T;
};

const caja: Caja<string> = {
  contenido: 'hola',
};
```

---

## 📘 Generics en Interfaces

### 🧠 Qué es

Muy útiles para estructuras reutilizables.

### 💡 Ejemplo

```ts id="r6m1x8"
interface Respuesta<T> {
  data: T;
  error: boolean;
}

const res: Respuesta<string> = {
  data: 'ok',
  error: false,
};
```

---

## ⚠️ Cosas importantes

- Generics permiten reutilizar código sin perder tipado.
- Evitan el uso de `any`.
- Se adaptan automáticamente al tipo recibido.
- Funcionan en funciones, tipos e interfaces.

---

## ✨ Tip

Usa generics cuando quieras crear funciones o estructuras reutilizables que deban funcionar con múltiples tipos sin perder seguridad.

# 📘 Generics en Clases en TypeScript

## 🧠 Qué es

Los Generics en clases permiten crear estructuras flexibles y reutilizables sin perder el tipado.

---

## 📘 Generics en clases

### 🧠 Qué es

Permiten definir clases que funcionan con cualquier tipo de dato.

### 💡 Ejemplo

```ts id="c1v8m4"
class Stack<T> {
  private items: T[] = [];

  push(item: T) {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }
}

const stack = new Stack<number>();
```

---

## ⚠️ Cosas importantes

- Evita el uso de `any` cuando puedes usar generics.
- Mantienen el tipado fuerte en toda la clase.
- Se adaptan automáticamente al tipo que se les asigna.
- Funcionan en funciones, tipos, interfaces y clases.

---

## ✨ Tip

Usa Generics cuando quieras reutilizar lógica sin perder seguridad de tipos.

Son fundamentales en librerías, APIs y estructuras complejas.

---

# 📘 Utility Types en TypeScript

## 🧠 Qué es

Los Utility Types son herramientas integradas en TypeScript que permiten transformar tipos existentes de forma rápida y reutilizable.

---

## 📘 🟢 Partial<T>

### 🧠 Qué es

Convierte todas las propiedades de un tipo en opcionales.

### 💡 Sintaxis

```ts id="p1m7x2"
Partial<T>;
```

### 💡 Ejemplo

```ts id="q8v2n5"
type Usuario = {
  nombre: string;
  edad: number;
};

type UsuarioParcial = Partial<Usuario>;
```

### 🧠 Resultado

```ts
{
  nombre?: string;
  edad?: number;
}
```

### 👉 Idea clave

Convierte todo en opcional.

---

## 📘 🔵 Readonly<T>

### 🧠 Qué es

Hace que todas las propiedades sean de solo lectura.

### 💡 Sintaxis

```ts id="r4m9v1"
Readonly<T>;
```

### 💡 Ejemplo

```ts id="s7x2q8"
type Usuario = {
  nombre: string;
};

const u: Readonly<Usuario> = {
  nombre: 'Alo',
};

// u.nombre = "Otro"; ❌ Error
```

### 👉 Idea clave

Evita modificaciones después de la creación.

---

## 📘 🟣 Pick<T, K>

### 🧠 Qué es

Permite seleccionar solo algunas propiedades de un tipo.

### 💡 Sintaxis

```ts id="t3v8m6"
Pick<T, 'prop1' | 'prop2'>;
```

### 💡 Ejemplo

```ts id="u9m2x7"
type Usuario = {
  id: number;
  nombre: string;
  email: string;
};

type UsuarioBasico = Pick<Usuario, 'id' | 'nombre'>;
```

### 👉 Idea clave

Selecciona solo lo necesario.

---

## 📘 🔴 Omit<T, K>

### 🧠 Qué es

Permite eliminar propiedades de un tipo.

### 💡 Sintaxis

```ts id="v5x1q9"
Omit<T, 'prop'>;
```

### 💡 Ejemplo

```ts id="w2m7v4"
type Usuario = {
  id: number;
  nombre: string;
  password: string;
};

type UsuarioPublico = Omit<Usuario, 'password'>;
```

### 👉 Idea clave

Elimina propiedades no deseadas.

---

## ⚠️ Cosas importantes

- Utility Types ayudan a reutilizar y transformar tipos.
- Reducen duplicación de código.
- Mejoran la mantenibilidad del sistema.
- Son fundamentales en proyectos grandes.

---

## ✨ Tip

Combina Utility Types con interfaces y generics para construir sistemas de tipos más limpios, escalables y reutilizables.

# 📘 🟡 Record<K, T>

## 🧠 Qué es

Crea un objeto con claves y valores tipados.

---

## 💡 Ejemplo

```ts id="r1k8m3"
type Roles = 'admin' | 'user';

const permisos: Record<Roles, boolean> = {
  admin: true,
  user: false,
};
```

---

## 👉 Idea clave

Muy útil para construir diccionarios tipados.

---

## ⚠️ Cosas importantes

- Define de forma estricta las claves permitidas.
- Asegura que todas las claves estén presentes.
- Ideal para mapas o configuraciones.

---

# 📘 🟠 Required<T>

## 🧠 Qué es

Convierte todas las propiedades de un tipo en obligatorias.

---

## 💡 Ejemplo

```ts id="m7v2x9"
type Usuario = {
  nombre?: string;
};

type UsuarioCompleto = Required<Usuario>;
```

---

## 🧠 Resultado

```ts id="q9m3v1"
{
  nombre: string;
}
```

---

## ⚠️ Cosas importantes

- Elimina opcionalidad (`?`).
- Obliga a definir todas las propiedades.
- Útil en validaciones o formularios completos.

---

# 📘 ⚫ Exclude<T, U>

## 🧠 Qué es

Elimina tipos específicos de una unión.

---

## 💡 Ejemplo

```ts id="x4m8q2"
type Rol = 'admin' | 'user' | 'guest';

type SinGuest = Exclude<Rol, 'guest'>;
// "admin" | "user"
```

---

## ⚠️ Cosas importantes

- Funciona solo con union types.
- Permite filtrar valores no deseados.
- Muy útil para restringir opciones.

---

# 📘 ⚪ Extract<T, U>

## 🧠 Qué es

Extrae solo los tipos que coinciden dentro de una unión.

---

## 💡 Ejemplo

```ts id="t2v7m9"
type Rol = 'admin' | 'user' | 'guest';

type SoloAdmin = Extract<Rol, 'admin'>;
// "admin"
```

---

## ⚠️ Cosas importantes

- Hace lo contrario de `Exclude`.
- Selecciona solo tipos compatibles.
- Útil para filtrado de uniones.

---

# 📘 🔥 Combinaciones (Nivel Pro)

## 🧠 Qué es

Puedes combinar varios Utility Types para crear transformaciones avanzadas.

---

## 💡 Ejemplo

```ts id="c8v2m6"
type Usuario = {
  id: number;
  nombre: string;
  password: string;
};

type SafeUser = Readonly<Partial<Omit<Usuario, 'password'>>>;
```

---

## 🧠 Traducción

- Quita `password`
- Hace todo opcional
- Hace todo de solo lectura

---

## ⚠️ Cosas importantes

- Los Utility Types transforman tipos existentes.
- Son fundamentales en APIs modernas.
- Reducen duplicación de código.
- Mejoran mantenibilidad.

---

## ✨ Tip

Usa Utility Types para evitar repetir tipos manualmente.

Son esenciales en proyectos grandes y arquitectura escalable.
