# 📄 NORMALIZATION

🔥 Este es uno de los documentos más importantes de **Database Design**.

Aquí estudias cómo organizar los datos para **reducir redundancia y evitar problemas al insertar, actualizar o eliminar información**.

---

## 📑 ÍNDICE

- [📄 NORMALIZATION](#-normalization)
  - [📑 ÍNDICE](#-índice)
  - [1️⃣ 🧠 ¿QUÉ ES NORMALIZATION?](#1️⃣--qué-es-normalization)
  - [2️⃣ 🔁 REDUNDANCIA DE DATOS](#2️⃣--redundancia-de-datos)
  - [3️⃣ 📋 DATA DUPLICATION](#3️⃣--data-duplication)
  - [4️⃣ ✏️ UPDATE ANOMALY](#4️⃣-️-update-anomaly)
  - [5️⃣ ➕ INSERT ANOMALY](#5️⃣--insert-anomaly)
  - [6️⃣ 🗑️ DELETE ANOMALY](#6️⃣-️-delete-anomaly)
- [7️⃣ 1️⃣ FIRST NORMAL FORM — 1NF](#7️⃣-1️⃣-first-normal-form--1nf)
    - [❌ Ejemplo problemático](#-ejemplo-problemático)
- [8️⃣ 2️⃣ SECOND NORMAL FORM — 2NF](#8️⃣-2️⃣-second-normal-form--2nf)
- [9️⃣ 3️⃣ THIRD NORMAL FORM — 3NF](#9️⃣-3️⃣-third-normal-form--3nf)
- [🔟 🔄 DENORMALIZATION](#--denormalization)
- [🧩 EJEMPLO](#-ejemplo)
    - [❌ MAL DISEÑO](#-mal-diseño)
    - [✅ DISEÑO NORMALIZADO](#-diseño-normalizado)
- [🎯 IDEA PRINCIPAL](#-idea-principal)

## 1️⃣ 🧠 ¿QUÉ ES NORMALIZATION?

**Normalization** es el proceso de organizar los datos en una base de datos para reducir la redundancia y mejorar la integridad de la información.

La idea general es:

```text id="7w4s1x"
Datos
  ↓
Analizar dependencias
  ↓
Separar información correctamente
  ↓
Relacionar las tablas
```

---

## 2️⃣ 🔁 REDUNDANCIA DE DATOS

Existe **redundancia** cuando la misma información se almacena repetidamente sin necesidad.

Por ejemplo:

```text id="9nq2dy"
Orders

id | user | email           | product1 | product2
---|------|-----------------|----------|---------
1  | Ana  | ana@mail.com    | Laptop   | Mouse
2  | Ana  | ana@mail.com    | Keyboard | Monitor
```

La información de Ana aparece repetida.

```text id="6jsk0b"
Ana
ana@mail.com
```

Esto puede provocar inconsistencias y dificultar el mantenimiento.

---

## 3️⃣ 📋 DATA DUPLICATION

La **data duplication** ocurre cuando el mismo dato aparece en múltiples registros.

Por ejemplo:

```text id="c7yqgs"
Order 1 → Ana → ana@mail.com
Order 2 → Ana → ana@mail.com
Order 3 → Ana → ana@mail.com
```

Si el email cambia, tendrías que actualizar múltiples registros.

---

## 4️⃣ ✏️ UPDATE ANOMALY

Una **Update Anomaly** ocurre cuando un mismo dato está repetido y debes modificarlo en varios lugares.

Por ejemplo:

```text id="m8r7qj"
Orders

id | user | email
---|------|---------------
1  | Ana  | ana@mail.com
2  | Ana  | ana@mail.com
3  | Ana  | ana@mail.com
```

Si Ana cambia su email:

```text id="f7oz5v"
ana@mail.com
      ↓
nuevo@mail.com
```

deberías actualizar todos los registros.

Si uno queda sin actualizar:

```text id="2t5a8m"
Order 1 → nuevo@mail.com
Order 2 → nuevo@mail.com
Order 3 → ana@mail.com ❌
```

La información queda inconsistente.

---

## 5️⃣ ➕ INSERT ANOMALY

Una **Insert Anomaly** ocurre cuando no puedes insertar determinada información sin tener que proporcionar información que realmente no debería ser necesaria.

Por ejemplo, si una tabla mezcla:

```text id="9t0e8h"
User
Order
Product
```

puede ocurrir que para registrar un nuevo producto tengas que proporcionar información de un pedido aunque todavía no exista ningún pedido.

Esto indica que la estructura está mezclando información que debería estar separada.

---

## 6️⃣ 🗑️ DELETE ANOMALY

Una **Delete Anomaly** ocurre cuando eliminar un registro provoca accidentalmente la pérdida de información que querías conservar.

Por ejemplo:

```text id="1xv5qf"
Orders

order_id | user | product
---------|------|--------
1        | Ana  | Laptop
```

Si eliminas el único pedido de Ana:

```sql id="j6x1dn"
DELETE order 1
```

podrías perder también la única información almacenada sobre Ana.

El problema es que los datos de diferentes entidades estaban almacenados juntos.

---
# 7️⃣ 1️⃣ FIRST NORMAL FORM — 1NF

La **First Normal Form (1NF)** establece que los valores de una tabla deben ser **atómicos**, es decir, cada celda debe contener un valor individual.

### ❌ Ejemplo problemático

```text id="4y7x6e"
Orders

id | products
---|----------------------
1  | Laptop, Mouse, Phone
```

Una celda contiene múltiples valores.

Una estructura más adecuada sería:

```text id="6t3j0q"
OrderItems

order_id | product
---------|--------
1        | Laptop
1        | Mouse
1        | Phone
```

La idea principal:

> **Una celda → un valor.**

---

# 8️⃣ 2️⃣ SECOND NORMAL FORM — 2NF

La **Second Normal Form (2NF)** se basa en:

```text id="e4l1pz"
1NF
+
eliminar dependencias parciales
```

Es especialmente relevante cuando existe una **Composite Primary Key**.

La idea es que un atributo que no forma parte de la clave debe depender de **toda la clave**, no solamente de una parte de ella.

Por ejemplo:

```text id="lq0g75"
OrderItems

order_id
product_id
product_name
```

Si:

```text id="1u0ybs"
PRIMARY KEY (order_id, product_id)
```

pero:

```text id="3s9e8c"
product_name
```

depende solamente de:

```text id="x2i0rc"
product_id
```

existe una dependencia parcial.

La información del producto debería estar separada:

```text id="d3gqv6"
Products
---------
product_id
product_name
```

---

# 9️⃣ 3️⃣ THIRD NORMAL FORM — 3NF

La **Third Normal Form (3NF)** se basa en:

```text id="m7r6o0"
2NF
+
eliminar dependencias transitivas
```

La idea es que los atributos que no forman parte de la clave deben depender directamente de la clave.

Por ejemplo:

```text id="axq5qm"
Users

id
name
country_id
country_name
```

Si:

```text id="w9s2gx"
id
 ↓
country_id
 ↓
country_name
```

`country_name` depende de `country_id`, no directamente de `id`.

Puede separarse:

```text id="r2h5e9"
Users
------
id
name
country_id
```

```text id="p1x6k8"
Countries
---------
id
name
```

Y relacionarlas mediante:

```text id="0m1h4z"
Users.country_id
        ↓
Countries.id
```

---

# 🔟 🔄 DENORMALIZATION

La **Denormalization** consiste en introducir deliberadamente cierta redundancia en el diseño para obtener determinados beneficios, normalmente relacionados con el acceso o rendimiento de los datos.

Es decir:

```text id="0z1c2v"
Normalization
      ↓
Reducir redundancia
```

mientras que:

```text id="3w4x5y"
Denormalization
      ↓
Aceptar cierta redundancia
```

No significa que una base de datos denormalizada esté necesariamente mal diseñada.

La denormalización debe hacerse **intencionalmente**, teniendo en cuenta las necesidades del sistema.

---

# 🧩 EJEMPLO

### ❌ MAL DISEÑO

```text id="6a7b8c"
Orders

id | user | email | product1 | product2 | product3
```

Problemas:

```text id="9d0e1f"
❌ Datos repetidos
❌ Difícil de actualizar
❌ Difícil agregar productos
❌ Difícil eliminar datos
```

---

### ✅ DISEÑO NORMALIZADO

Separar las diferentes entidades:

```text id="2g3h4i"
Users
Orders
Products
OrderItems
```

Y conectarlas mediante relaciones:

```text id="5j6k7l"
Users
  │
  ▼
Orders
  │
  ▼
OrderItems
  │
  ▼
Products
```

---

# 🎯 IDEA PRINCIPAL

```text id="8m9n0o"
❌ Una tabla gigante
        ↓
   redundancia
        ↓
   anomalías
```

↓

```text id="1p2q3r"
✅ Datos separados correctamente
        ↓
   Relaciones
        ↓
   Mayor integridad
```

> **Normalization busca organizar los datos correctamente, reducir duplicación y evitar Update, Insert y Delete Anomalies mediante una estructura basada en entidades y relaciones.**
