# 🎯 Sistema de Productos (POO)

## 1️⃣ Crear la clase base: Producto

Crea una clase `Producto`.

Debe tener:

- `id`
- `nombre`
- `precio`
- `stock` (protegido, no accesible directamente)

### Reglas

✅ `precio` no puede ser negativo

✅ `stock` no puede ser negativo

✅ `stock` no debe modificarse directamente desde fuera de la clase

### Métodos

- `get precio`
- `get stock`
- `comprar(cantidad)`

---

## 2️⃣ Crear la subclase ProductoFisico

```js
class ProductoFisico extends Producto { ... }
```

Debe tener:

- `peso`

### Comportamiento

✅ Cuando alguien compra:

- El stock disminuye
- No puede vender más unidades de las disponibles

---

## 3️⃣ Crear la subclase ProductoDigital

```js
class ProductoDigital extends Producto { ... }
```

Debe tener:

- `tamañoMB`

### Comportamiento

✅ Las descargas son ilimitadas

✅ Comprar NO reduce el stock

---

## 4️⃣ Crear la subclase Servicio

```js
class Servicio extends Producto { ... }
```

Debe tener:

- `duracionHoras`

### Comportamiento

✅ No tiene stock real

✅ El método `comprar()` solo confirma la compra

---

## 5️⃣ Encapsulación

Usa getters para exponer información.

Ejemplos:

```js
producto.precio;
producto.stock;
```

Pero NO debe ser posible hacer:

```js
producto.stock = 1000;
```

---

## 6️⃣ Validaciones

Comprueba que:

✅ No se puedan crear productos con precio negativo

✅ No se puedan crear productos con stock negativo

✅ No se puedan comprar cantidades inválidas

---

## 7️⃣ Probar el sistema

Crea:

- Un `ProductoFisico`
- Un `ProductoDigital`
- Un `Servicio`

Realiza varias compras y muestra los resultados usando:

```js
console.log();
```

Verifica:

✅ Cambios de stock en productos físicos

✅ Descargas ilimitadas en productos digitales

✅ Compra correcta de servicios

---

## 🏆 BONUS

Implementa:

- `toString()`
- Descuentos
- IVA
- Historial de compras

Sin modificar la estructura principal de las clases.
