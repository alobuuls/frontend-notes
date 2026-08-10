# 📄 FILTERING

Aquí estudias todo lo relacionado con **filtrar resultados** utilizando `WHERE` y diferentes operadores.

---

## 📑 ÍNDICE

- [📄 FILTERING](#-filtering)
  - [📑 ÍNDICE](#-índice)
  - [🔎 `WHERE`](#-where)
    - [1️⃣ 📝 ¿QUÉ ES `WHERE`?](#1️⃣--qué-es-where)
  - [⚖️ OPERADORES DE COMPARACIÓN](#️-operadores-de-comparación)
    - [2️⃣ 🟰 IGUAL](#2️⃣--igual)
    - [3️⃣ ❌ DIFERENTE](#3️⃣--diferente)
    - [4️⃣ 📏 MAYOR QUE](#4️⃣--mayor-que)
    - [5️⃣ 📉 MENOR QUE](#5️⃣--menor-que)
    - [6️⃣ ⬆️ MAYOR O IGUAL](#6️⃣-️-mayor-o-igual)
    - [7️⃣ ⬇️ MENOR O IGUAL](#7️⃣-️-menor-o-igual)
  - [🧠 LOGICAL OPERATORS](#-logical-operators)
    - [8️⃣ 🔗 `AND`](#8️⃣--and)
    - [9️⃣ 🔀 `OR`](#9️⃣--or)
  - [🔟 🚫 `NOT`](#--not)
  - [📋 `IN`](#-in)
    - [1️⃣1️⃣ 📋 `IN`](#1️⃣1️⃣--in)
  - [📏 `BETWEEN`](#-between)
    - [1️⃣2️⃣ 📏 `BETWEEN`](#1️⃣2️⃣--between)
  - [🔤 `LIKE`](#-like)
    - [1️⃣3️⃣ 🔤 `LIKE`](#1️⃣3️⃣--like)
    - [1️⃣4️⃣ `%`](#1️⃣4️⃣-)
    - [1️⃣5️⃣ `_`](#1️⃣5️⃣-_)
  - [🚫 `NOT`](#-not)
    - [1️⃣6️⃣ `NOT IN`](#1️⃣6️⃣-not-in)
- [🧠 MODELO MENTAL](#-modelo-mental)
    - [🎯 IDEA CLAVE](#-idea-clave)


## 🔎 `WHERE`

### 1️⃣ 📝 ¿QUÉ ES `WHERE`?

`WHERE` permite establecer una condición para determinar **qué registros serán incluidos en el resultado**.

```sql
SELECT *
FROM users
WHERE age > 18;
```

Conceptualmente:

```text
SELECT
   ↓
FROM users
   ↓
WHERE condición
   ↓
Registros que cumplen la condición
```

---

## ⚖️ OPERADORES DE COMPARACIÓN

### 2️⃣ 🟰 IGUAL

```sql
WHERE age = 18;
```

`=` comprueba si dos valores son iguales.

### 3️⃣ ❌ DIFERENTE

Puedes utilizar:

```sql
WHERE country != 'Mexico';
```

o:

```sql
WHERE country <> 'Mexico';
```

Ambos representan **diferente de**.

### 4️⃣ 📏 MAYOR QUE

```sql
WHERE age > 18;
```

Selecciona valores mayores que `18`.

### 5️⃣ 📉 MENOR QUE

```sql
WHERE age < 18;
```

Selecciona valores menores que `18`.

### 6️⃣ ⬆️ MAYOR O IGUAL

```sql
WHERE age >= 18;
```

Selecciona valores mayores o iguales a `18`.

### 7️⃣ ⬇️ MENOR O IGUAL

```sql
WHERE age <= 18;
```

Selecciona valores menores o iguales a `18`.

---

## 🧠 LOGICAL OPERATORS

### 8️⃣ 🔗 `AND`

`AND` permite combinar condiciones.

```sql
WHERE age >= 18
AND country = 'Mexico';
```

El registro debe cumplir **ambas condiciones**.

```text
age >= 18
    AND
country = 'Mexico'
    ↓
    TRUE
```

### 9️⃣ 🔀 `OR`

`OR` permite combinar condiciones donde **al menos una** debe cumplirse.

```sql
WHERE country = 'Mexico'
OR country = 'Colombia';
```
## 🔟 🚫 `NOT`

`NOT` niega una condición.

```sql
WHERE NOT country = 'Mexico';
```

La condición se invierte.

---

## 📋 `IN`

### 1️⃣1️⃣ 📋 `IN`

`IN` permite comprobar si un valor pertenece a una lista de valores.

```sql
WHERE country IN ('Mexico', 'Colombia', 'Spain');
```

Es útil cuando quieres comprobar múltiples valores posibles.

Conceptualmente:

```text
country
   ↓
¿Mexico?
¿Colombia?
¿Spain?
   ↓
IN
```

---

## 📏 `BETWEEN`

### 1️⃣2️⃣ 📏 `BETWEEN`

`BETWEEN` permite comprobar si un valor se encuentra dentro de un rango.

```sql
WHERE age BETWEEN 18 AND 30;
```

Esto busca edades dentro del rango indicado.

---

## 🔤 `LIKE`

### 1️⃣3️⃣ 🔤 `LIKE`

`LIKE` permite realizar búsquedas utilizando patrones sobre valores de texto.

```sql
WHERE name LIKE 'A%';
```

Este ejemplo busca nombres que comienzan con `A`.

### 1️⃣4️⃣ `%`

`%` representa **cero o más caracteres**.

Por ejemplo:

```sql
WHERE name LIKE 'A%';
```

Puede coincidir con:

```text
Ana
Alex
Alo
Andrew
```

### 1️⃣5️⃣ `_`

`_` representa **un único carácter**.

Por ejemplo:

```sql
WHERE name LIKE 'A_o';
```

Puede coincidir con:

```text
Alo
Ado
Año
```

siempre que el patrón corresponda a la cantidad de caracteres.

---

## 🚫 `NOT`

### 1️⃣6️⃣ `NOT IN`

`NOT` también puede utilizarse con `IN`.

```sql
WHERE country NOT IN ('Mexico', 'Colombia', 'Spain');
```

Esto selecciona los registros cuyo `country` **no pertenece** a esa lista.

Conceptualmente:

```text
country
   ↓
NOT IN
   ↓
Mexico      ❌
Colombia    ❌
Spain       ❌
Otros       ✅
```

---

# 🧠 MODELO MENTAL

```text
WHERE
 │
 ├── Comparación
 │   ├── =
 │   ├── !=
 │   ├── <>
 │   ├── >
 │   ├── <
 │   ├── >=
 │   └── <=
 │
 ├── Lógica
 │   ├── AND
 │   ├── OR
 │   └── NOT
 │
 ├── IN
 │
 ├── BETWEEN
 │
 └── LIKE
     ├── %
     └── _
```

### 🎯 IDEA CLAVE

> **`WHERE`** filtra los registros según una condición. Los operadores de comparación, lógicos, **`IN`**, **`BETWEEN`** y **`LIKE`** permiten construir esas condiciones.
