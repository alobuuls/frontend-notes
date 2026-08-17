# 🗃️ 7. OBJETOS

## ÍNDICE

1. [❓ 1. ¿Qué es un objeto?](#-1-qué-es-un-objeto)
2. [❓ 2. ¿Cómo accederías a una propiedad?](#-2-cómo-accederías-a-una-propiedad)
3. [❓ 3. ¿Qué diferencia hay entre `obj.property` y `obj[property]`?](#-3-qué-diferencia-hay-entre-objproperty-y-objproperty)
4. [❓ 4. ¿Qué es Destructuring?](#-4-qué-es-destructuring)
5. [❓ 5. ¿Qué es el Spread Operator?](#-5-qué-es-el-spread-operator)
6. [❓ 6. ¿Qué es el Rest Operator?](#-6-qué-es-el-rest-operator)
7. [❓ 7. ¿Cómo copiarías un objeto?](#-7-cómo-copiarías-un-objeto)
8. [❓ 8. ¿Qué diferencia hay entre Shallow Copy y Deep Copy?](#-8-qué-diferencia-hay-entre-shallow-copy-y-deep-copy)
9. [❓ 9. ¿Qué es `Object.keys()`?](#-9-qué-es-objectkeys)
10. [❓ 10. ¿Qué es `Object.values()`?](#-10-qué-es-objectvalues)
11. [❓ 11. ¿Qué es `Object.entries()`?](#-11-qué-es-objectentries)
12. [❓ 12. ¿Qué diferencia hay entre `Object.freeze()` y `Object.seal()`?](#-12-qué-diferencia-hay-entre-objectfreeze-y-objectseal)
13. [🧠 Resumen de Objetos](#-resumen-de-objetos)
14. [🎯 Trampas importantes para entrevista](#-las-trampas-que-yo-memorizaría-para-entrevista)

## ❓ 1. ¿QUÉ ES UN OBJETO?

Un objeto es una estructura de datos que permite almacenar información mediante **pares clave-valor (`key: value`)**.

```ts
const user = {
  name: 'Ana',
  age: 25,
  active: true
};
```

Aquí:

| Key    | Value   |
| ------ | ------- |
| `name` | `'Ana'` |
| `age`  | `25`    |

Una propiedad puede contener prácticamente cualquier tipo de dato:

```ts
const user = {
  name: 'Ana',
  age: 25,
  skills: ['Angular', 'TypeScript'],
  address: {
    city: 'Bogotá'
  },
  greet() {
    console.log('Hello');
  }
};
```

### 🎯 En entrevista

> "Un objeto es una estructura de datos basada en pares clave-valor que permite representar entidades y agrupar información relacionada."

---

## ❓ 2. ¿CÓMO ACCEDERÍAS A UNA PROPIEDAD?

Hay dos formas principales:

### 🔹 Notación de punto

```ts
const user = {
  name: 'Ana',
  age: 25
};

console.log(user.name);
// Ana
```

### 🔹 Notación de corchetes

```ts
console.log(user['name']);
// Ana
```

Ambas permiten acceder a propiedades, pero tienen diferencias importantes.

---

## ❓ 3. ¿QUÉ DIFERENCIA HAY ENTRE `obj.property` Y `obj[property]`?

La diferencia principal es que la notación de corchetes permite utilizar una **expresión dinámica**.

### 🔹 Notación de punto

```ts
const user = {
  name: 'Ana',
  age: 25
};

console.log(user.name);
```

Aquí `name` se interpreta literalmente como el nombre de la propiedad.

### 🔹 Notación de corchetes

```ts
const property = 'name';

console.log(user[property]);
// Ana
```

Aquí JavaScript evalúa `property` y utiliza su valor:

```text
property → "name"
          ↓
user["name"]
```

### 🚨 Pregunta clásica

Esto:

```ts
user.property
```

busca una propiedad llamada literalmente:

```text
"property"
```

Mientras que:

```ts
user[property]
```

utiliza el valor almacenado en la variable `property`.

### 🎯 ¿Cuándo usar corchetes?

Cuando el nombre de la propiedad es dinámico:

```ts
const field = 'email';

user[field];
```

También son necesarios para propiedades que no puedes expresar cómodamente con notación de punto:

```ts
const user = {
  'first-name': 'Ana'
};

user['first-name'];
```

### 📌 Regla

| Notación        | Uso                           |
| --------------- | ----------------------------- |
| `obj.property`  | propiedad conocida y estática |
| `obj[property]` | propiedad dinámica            |

---

## ❓ 4. ¿QUÉ ES DESTRUCTURING?

Destructuring permite **extraer valores de objetos o arrays y asignarlos a variables** de una manera más sencilla.

```ts
const user = {
  name: 'Ana',
  age: 25
};

const { name, age } = user;

console.log(name);
// Ana

console.log(age);
// 25
```

Sin destructuring tendríamos:

```ts
const name = user.name;
const age = user.age;
```

### 🔹 También puedes renombrar propiedades

```ts
const { name: userName } = user;

console.log(userName);
// Ana
```

Aquí:

| Elemento   | Significado                 |
| ---------- | --------------------------- |
| `name`     | propiedad del objeto        |
| `userName` | nombre de la nueva variable |

### 🔹 También puedes establecer valores por defecto

```ts
const { name, country = 'Colombia' } = user;
```

Si `country` no existe, se utiliza:

```text
Colombia
```

### 🎯 En entrevista

> "Destructuring permite extraer propiedades de objetos o elementos de arrays directamente en variables, haciendo el código más limpio y legible."

---

## ❓ 5. ¿QUÉ ES EL SPREAD OPERATOR?

El **spread operator (`...`)** permite expandir los elementos de un iterable o las propiedades de un objeto.

### 🔹 Con objetos

```ts
const user = {
  name: 'Ana',
  age: 25
};

const copy = {
  ...user
};
```

### 🔹 También puedes combinar objetos

```ts
const personal = {
  name: 'Ana'
};

const professional = {
  role: 'Frontend Developer'
};

const user = {
  ...personal,
  ...professional
};
```

Resultado:

```ts
{
  name: 'Ana',
  role: 'Frontend Developer'
}
```

### 🔹 También puedes sobrescribir propiedades

```ts
const user = {
  name: 'Ana',
  age: 25
};

const updatedUser = {
  ...user,
  age: 26
};
```

### 📌 Regla mental

```text
...objeto
→ "expande/copia sus propiedades aquí"
```

---

## ❓ 6. ¿QUÉ ES EL REST OPERATOR?

Aquí aparece una de las preguntas trampa de JavaScript:

El operador también utiliza:

```ts
...
```

pero **spread y rest tienen funciones diferentes**.

### 🔹 Spread

**Expande** valores.

```ts
const user = {
  name: 'Ana',
  age: 25
};

const copy = {
  ...user
};
```

### 🔹 Rest

**Agrupa** los valores restantes.

```ts
const user = {
  name: 'Ana',
  age: 25,
  country: 'Colombia'
};

const { name, ...rest } = user;

console.log(rest);
```

Resultado:

```ts
{
  age: 25,
  country: 'Colombia'
}
```

El `...rest` recoge todas las propiedades que no fueron extraídas.

### 🔹 También funciona en funciones

```ts
function sum(...numbers: number[]) {
  return numbers.reduce((total, n) => total + n, 0);
}

sum(1, 2, 3, 4);
```

Aquí `...numbers` agrupa los argumentos:

```text
1, 2, 3, 4
    ↓
[1, 2, 3, 4]
```

### 🧠 Diferencia clave

| Operador            | Función              |
| ------------------- | -------------------- |
| **SPREAD** `...obj` | → expande            |
| **REST** `...rest`  | → agrupa lo restante |

> 📌 La sintaxis es igual, pero **el contexto determina si es spread o rest**.

---

## ❓ 7. ¿CÓMO COPIARÍAS UN OBJETO?

La forma más común es utilizar spread:

```ts
const user = {
  name: 'Ana',
  age: 25
};

const copy = {
  ...user
};
```

También puedes utilizar:

```ts
const copy = Object.assign({}, user);
```

Pero ambas realizan una **copia superficial**.

### ⚠️ Importante

Si el objeto tiene objetos anidados:

```ts
const user = {
  name: 'Ana',
  address: {
    city: 'Bogotá'
  }
};

const copy = { ...user };
```

`copy.address` y `user.address` apuntan al **mismo objeto**.

---

## ❓ 8. ¿QUÉ DIFERENCIA HAY ENTRE SHALLOW COPY Y DEEP COPY?

Esta es **una de las preguntas más importantes** de objetos.

### 🔹 Shallow Copy

Una copia superficial copia solamente el **primer nivel**.

```ts
const original = {
  name: 'Ana',
  address: {
    city: 'Bogotá'
  }
};

const copy = { ...original };
```

Tenemos:

```text
original
   │
   ├── name
   │
   └── address ─────┐
                    │
copy                │
   │                │
   ├── name         │
   │                │
   └── address ─────┘
```

Los objetos `address` son la misma referencia.

Por eso:

```ts
copy.address.city = 'Medellín';

console.log(original.address.city);
// Medellín
```

😱 Aunque hayas creado `copy`, modificaste el objeto original.

### 🔹 Deep Copy

Una copia profunda crea copias independientes también de las estructuras anidadas.

Una opción moderna:

```ts
const copy = structuredClone(original);
```

Ahora:

```ts
copy.address.city = 'Medellín';

console.log(original.address.city);
// Bogotá
```

Porque ya no comparten la misma referencia.

### 📌 Comparación

| Tipo             | Característica                                             |
| ---------------- | ---------------------------------------------------------- |
| **Shallow copy** | copia primer nivel → objetos anidados comparten referencia |
| **Deep copy**    | copia estructuras internas → objetos independientes        |

### ⚠️ `JSON.parse(JSON.stringify())`

Probablemente escucharás esta técnica:

```ts
const copy = JSON.parse(JSON.stringify(original));
```

Puede funcionar para datos JSON simples, pero **no es una solución general** porque pierde o modifica ciertos tipos de datos, como `Date`, `Map`, `Set`, `undefined`, funciones, etc.

Para una copia profunda general de datos compatibles, `structuredClone()` es una opción mucho mejor.

---

## ❓ 9. ¿QUÉ ES `Object.keys()`?

`Object.keys()` devuelve un array con las **propiedades enumerables propias** de un objeto.

```ts
const user = {
  name: 'Ana',
  age: 25,
  country: 'Colombia'
};

const keys = Object.keys(user);

console.log(keys);
```

Resultado:

```ts
[
  'name',
  'age',
  'country'
]
```

### 🎯 ¿Para qué sirve?

Por ejemplo, para recorrer las propiedades:

```ts
Object.keys(user).forEach(key => {
  console.log(key);
});
```

### 📌 Recuerda

```text
Object.keys()
→ propiedades / claves
→ devuelve array
```

---

## ❓ 10. ¿QUÉ ES `Object.values()`?

`Object.values()` devuelve un array con los **valores** de las propiedades.

```ts
const user = {
  name: 'Ana',
  age: 25,
  country: 'Colombia'
};

const values = Object.values(user);

console.log(values);
```

Resultado:

```ts
[
  'Ana',
  25,
  'Colombia'
]
```

### 📌 Recuerda

```text
Object.values()
→ valores
→ devuelve array
```

---

## ❓ 11. ¿QUÉ ES `Object.entries()`?

`Object.entries()` devuelve un array con pares:

```text
[key, value]
```

Por ejemplo:

```ts
const user = {
  name: 'Ana',
  age: 25
};

const entries = Object.entries(user);

console.log(entries);
```

Resultado:

```ts
[
  ['name', 'Ana'],
  ['age', 25]
]
```

Esto es especialmente útil cuando quieres recorrer **clave y valor al mismo tiempo**:

```ts
Object.entries(user).forEach(([key, value]) => {
  console.log(key, value);
});
```

### 🧠 Relación importante

| Método             | Devuelve                         |
| ------------------ | -------------------------------- |
| `Object.keys()`    | `['name', 'age']`                |
| `Object.values()`  | `['Ana', 25]`                    |
| `Object.entries()` | `[['name', 'Ana'], ['age', 25]]` |

> 🔥 Esta tríada aparece muchísimo en entrevistas.

---
# ❓ 12. ¿QUÉ DIFERENCIA HAY ENTRE `Object.freeze()` Y `Object.seal()`?

Ambos métodos sirven para **restringir modificaciones de un objeto**, pero no hacen exactamente lo mismo.

---

## 🔒 `Object.freeze()`

Congela el objeto.

No puedes:

```text
❌ modificar propiedades existentes
❌ agregar propiedades
❌ eliminar propiedades
```

### 💻 Ejemplo

```ts
const user = {
  name: 'Ana',
  age: 25
};

Object.freeze(user);
```

Después:

```ts
user.age = 30;       // ❌
user.country = 'CO'; // ❌
delete user.name;    // ❌
```

---

## 🔐 `Object.seal()`

Sella el objeto.

No puedes:

```text
❌ agregar propiedades
❌ eliminar propiedades
```

Pero **sí puedes modificar propiedades existentes**.

```ts
const user = {
  name: 'Ana',
  age: 25
};

Object.seal(user);
```

Esto:

```ts
user.age = 30;
```

sí está permitido.

Pero:

```ts
user.country = 'CO'; // ❌
delete user.name;    // ❌
```

---

## 🧠 `freeze()` VS `seal()`

| Operación           | `Object.freeze()` | `Object.seal()` |
| ------------------- | :---------------: | :-------------: |
| Modificar propiedad |         ❌         |        ✅        |
| Agregar propiedad   |         ❌         |        ❌        |
| Eliminar propiedad  |         ❌         |        ❌        |
| Cambiar estructura  |         ❌         |        ❌        |

> 🎯 **Respuesta de entrevista:**
> "`Object.freeze()` hace que las propiedades existentes no puedan modificarse y tampoco permite agregar o eliminar propiedades. `Object.seal()` también impide agregar y eliminar propiedades, pero permite modificar las propiedades existentes."

> ⚠️ **Ojo con esto:**
> Ni `freeze()` ni `seal()` hacen automáticamente un **deep freeze/seal**.

Por ejemplo:

```ts
const user = {
  name: 'Ana',
  address: {
    city: 'Bogotá'
  }
};

Object.freeze(user);

user.address.city = 'Medellín';
```

El objeto `user` está congelado, pero `address` sigue siendo mutable porque es un objeto anidado.

---

# 🧠 🔥 RESUMEN DE OBJETOS

```text
OBJETO
→ estructura clave → valor

obj.property
→ propiedad estática

obj[property]
→ propiedad dinámica

DESTRUCTURING
→ extraer propiedades

SPREAD (...)
→ expandir/copiar

REST (...)
→ agrupar lo restante

{ ...obj }
→ shallow copy

structuredClone(obj)
→ deep copy

Object.keys()
→ claves

Object.values()
→ valores

Object.entries()
→ [clave, valor]

Object.freeze()
→ no modificar/agregar/eliminar

Object.seal()
→ no agregar/eliminar
→ sí modificar
```

## 🎯 LAS TRAMPAS QUE YO MEMORIZARÍA PARA ENTREVISTA

Hay **4 especialmente importantes**:

### 1️⃣ Punto vs corchetes

```ts
obj.property
obj[property]
```

> 💡 Punto = nombre literal.
> 💡 Corchetes = expresión dinámica.

### 2️⃣ Spread vs Rest

```ts
...obj
```

> 💡 Spread = expande.

```ts
const { name, ...rest } = user;
```

> 💡 Rest = agrupa lo restante.

### 3️⃣ Shallow vs Deep Copy

```ts
{ ...obj }
```

> 💡 Shallow copy.

```ts
structuredClone(obj)
```

> 💡 Deep copy.

### 4️⃣ Freeze vs Seal

```text
freeze
→ no modificar
→ no agregar
→ no eliminar

seal
→ sí modificar
→ no agregar
→ no eliminar
```

