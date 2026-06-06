# 📘 NEW MAP() (MAPAS EN JAVASCRIPT)

## 🧠 Un Map es una colección de **pares clave-valor**.

A diferencia de los objetos normales:

✔ Las claves pueden ser de cualquier tipo (string, number, object, etc.)

✔ Mantiene el **orden de inserción**

✔ Tiene métodos útiles para manejar los datos

---

# 📗 CREAR UN MAP

```js
const miMapa = new Map();
```

## 🧠 Crea un Map vacío.

---

# 📗 AGREGAR ELEMENTOS

```js
miMapa.set('nombre', 'Ana');
miMapa.set(25, 'edad');
miMapa.set(true, 'esActivo');
```

## 🧠 `set(clave, valor)` agrega un elemento al Map.

---

# 📗 OBTENER VALORES

```js
miMapa.get('nombre'); // 'Ana'
miMapa.get(25); // 'edad'
```

## 🧠 `get(clave)` devuelve el valor de la clave.

---

# 📗 VERIFICAR EXISTENCIA

```js
miMapa.has('nombre'); // true
miMapa.has('apellido'); // false
```

## 🧠 `has(clave)` devuelve true si existe la clave.

---

# 📗 ELIMINAR ELEMENTOS

```js
miMapa.delete('nombre');
```

## 🧠 Elimina un elemento por su clave.

---

```js
miMapa.clear();
```

## 🧠 Elimina todos los elementos del Map.

---

# 📗 TAMAÑO DEL MAP

```js
miMapa.size;
```

## 🧠 Devuelve la cantidad de elementos en el Map.

---

# 📗 RECORRER UN MAP

```js
const mapa = new Map([
  ['nombre', 'Ana'],
  ['edad', 25],
  ['activo', true],
]);
```

---

## 🧪 Con for...of

```js
for (const [clave, valor] of mapa) {
  console.log(clave, valor);
}
```

---

## 🧪 Con forEach

```js
mapa.forEach((valor, clave) => {
  console.log(clave, valor);
});
```

## 🧠 Puedes recorrer claves, valores o ambos.

---

# 📘 OBJECT VS NEW MAP

| Característica     | Object `{}`                                  | Map `new Map()`                                      |
| ------------------ | -------------------------------------------- | ---------------------------------------------------- |
| Claves             | Solo strings o symbols                       | Cualquier tipo (string, number, object, etc.)        |
| Orden de elementos | No garantizado                               | Sí, mantiene **orden de inserción**                  |
| Tamaño             | Debes calcular con `Object.keys(obj).length` | `.size` directamente                                 |
| Iteración          | `for…in` + `obj[key]` o `Object.entries`     | `for…of` directamente sobre `[clave, valor]`         |
| Métodos nativos    | Pocos (`hasOwnProperty`, etc.)               | Muchos (`set`, `get`, `delete`, `has`, `clear`)      |
| Rendimiento        | Bien para pocos pares                        | Mejor cuando hay **muchos pares o claves no-string** |

---

# ✨ MÉTODOS MÁS IMPORTANTES

| Método              | Función                           |
| ------------------- | --------------------------------- |
| `set(clave, valor)` | Agrega o actualiza elementos      |
| `get(clave)`        | Obtiene un valor                  |
| `has(clave)`        | Verifica si existe una clave      |
| `delete(clave)`     | Elimina un elemento               |
| `clear()`           | Elimina todos los elementos       |
| `size`              | Devuelve la cantidad de elementos |

---

# 📗 REGLA RÁPIDA 🧠

👉 `new Map()` → crea un mapa

👉 `set()` → agregar

👉 `get()` → obtener

👉 `has()` → verificar

👉 `delete()` → eliminar uno

👉 `clear()` → eliminar todos

👉 `size` → cantidad de elementos

---

# 🚀 CUÁNDO USAR MAP

## 🧠 Usa Map cuando:

👉 Necesitas claves que no sean strings

👉 Quieres mantener el orden de inserción

👉 Vas a almacenar muchos pares clave-valor

👉 Necesitas métodos especializados para manipular datos

---

# 🎯 RESUMEN

## 🧠 Object

👉 Ideal para representar entidades y estructuras de datos

👉 Muy usado para objetos de negocio y APIs

---

## 🧠 Map

👉 Ideal para colecciones clave-valor dinámicas

👉 Más flexible y potente para manipulación de datos

👉 Mejor opción cuando las claves no son strings

---

```

```
