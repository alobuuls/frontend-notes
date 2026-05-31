# 📘 NEW SET() (SETS EN JAVASCRIPT)

## 🧠 Un Set es una colección de **valores únicos**.

A diferencia de los arrays:

✔ No permite valores duplicados

✔ Mantiene el **orden de inserción**

✔ Tiene métodos útiles para manejar los datos

---

# 📗 CREAR UN SET

```js
const miSet = new Set();
```

## 🧠 Crea un Set vacío.

---

# 📗 AGREGAR ELEMENTOS

```js
miSet.add(1);
miSet.add(2);
miSet.add(2);
```

## 🧠 `add(valor)` agrega un elemento al Set.

### 👉 Resultado

```js
Set {1, 2}
```

---

# 📗 VERIFICAR EXISTENCIA

```js
miSet.has(1); // true
miSet.has(3); // false
```

## 🧠 `has(valor)` devuelve true si el valor existe.

---

# 📗 ELIMINAR ELEMENTOS

```js
miSet.delete(1);
```

## 🧠 Elimina un valor específico.

---

```js
miSet.clear();
```

## 🧠 Elimina todos los elementos del Set.

---

# 📗 TAMAÑO DEL SET

```js
miSet.size;
```

## 🧠 Devuelve la cantidad de elementos únicos.

---

# 📗 RECORRER UN SET

```js
const set = new Set([1, 2, 3]);
```

---

## 🧪 Con for...of

```js
for (const valor of set) {
  console.log(valor);
}
```

---

## 🧪 Con forEach

```js
set.forEach((valor) => {
  console.log(valor);
});
```

## 🧠 Solo hay valores (no hay clave-valor como en Map).

---

# 📗 ELIMINAR DUPLICADOS

```js
const numeros = [1, 2, 2, 3, 4, 4];

const unicos = [...new Set(numeros)];
```

### 👉 Resultado

```js
[1, 2, 3, 4];
```

## 🧠 Uso más común de Set 🔥

---

# 📗 CONVERTIR ENTRE ARRAY Y SET

```js
const set = new Set([1, 2, 3]);

const array = [...set];
```

## 🧠 Muy útil para manipular datos.

---

# 📗 SET VS ARRAY

| Característica    | Array `[]`               | Set `new Set()`              |
| ----------------- | ------------------------ | ---------------------------- |
| Duplicados        | Permite                  | ❌ No permite                |
| Orden             | Sí                       | Sí                           |
| Acceso por índice | Sí (`arr[0]`)            | ❌ No                        |
| Métodos           | Muchos (`map`, `filter`) | Básicos (`add`, `has`, etc.) |
| Uso principal     | Listas generales         | Valores únicos               |

---

# 📗 CASO REAL

```js
const usuarios = ['Ana', 'Juan', 'Ana', 'Pedro'];

const usuariosUnicos = [...new Set(usuarios)];
```

### 👉 Resultado

```js
['Ana', 'Juan', 'Pedro'];
```

---

# 📗 ERRORES COMUNES

👉 Pensar que Set funciona como array

👉 Intentar acceder por índice (no existe)

👉 No usarlo para eliminar duplicados

---

# 📗 CUÁNDO USAR SET

👉 Cuando necesitas valores únicos

👉 Para eliminar duplicados rápido

👉 Para validar existencia de datos

---

# 📗 NIVEL PRO

## 🧠 Set es clave para optimizar lógica

👉 Código más limpio y eficiente

---

# ⚠️ COSAS IMPORTANTES

🧠 Set → valores únicos

🧠 No tiene claves, solo valores

🧠 Métodos principales: add, has, delete

🧠 Mantiene orden de inserción

---

# ✨ RESUMEN

## 🧠 Set:

👉 Guarda valores únicos

👉 No permite duplicados

👉 Ideal para limpiar datos

👉 CLAVE para código limpio 🚀🔥

---

# ✨ MÉTODOS PRINCIPALES

| Método          | Función                     |
| --------------- | --------------------------- |
| `add(valor)`    | Agrega un elemento          |
| `has(valor)`    | Verifica si existe          |
| `delete(valor)` | Elimina un elemento         |
| `clear()`       | Elimina todos los elementos |
| `size`          | Cantidad de elementos       |

---

# 🚀 PATRÓN MÁS UTILIZADO

## 🧠 Eliminar duplicados de un array

```js
const unicos = [...new Set(array)];
```

👉 Convierte el array en Set

👉 Elimina automáticamente los duplicados

👉 Lo vuelve a convertir en array

👉 Es una de las técnicas más utilizadas en JavaScript moderno

---
