# 📄 11 — DISTINCT

Aquí estudias cómo **eliminar valores duplicados del resultado**.

---

## 📑 ÍNDICE

- [📄 11 — DISTINCT](#-11--distinct)
  - [📑 ÍNDICE](#-índice)
- [🔹 DISTINCT](#-distinct)
  - [1️⃣ 📝 ¿QUÉ ES `DISTINCT`?](#1️⃣--qué-es-distinct)
  - [2️⃣ 📋 DISTINCT CON UNA COLUMNA](#2️⃣--distinct-con-una-columna)
  - [3️⃣ 📊 DISTINCT CON MÚLTIPLES COLUMNAS](#3️⃣--distinct-con-múltiples-columnas)
- [🔢 DISTINCT + COUNT](#-distinct--count)
  - [4️⃣ 📊 CONTAR VALORES DISTINTOS](#4️⃣--contar-valores-distintos)
    - [🎯 IDEA CLAVE](#-idea-clave)


# 🔹 DISTINCT

## 1️⃣ 📝 ¿QUÉ ES `DISTINCT`?

`DISTINCT` permite obtener únicamente **valores diferentes** en el resultado de una consulta.

```sql
SELECT DISTINCT country
FROM users;
```

Si existen:

```text
Mexico
Mexico
Colombia
Spain
Colombia
```

El resultado será:

```text
Mexico
Colombia
Spain
```

---

## 2️⃣ 📋 DISTINCT CON UNA COLUMNA

Puedes utilizar `DISTINCT` sobre una sola columna:

```sql
SELECT DISTINCT country
FROM users;
```

Esto devuelve cada país **una sola vez**.

---

## 3️⃣ 📊 DISTINCT CON MÚLTIPLES COLUMNAS

También puedes utilizarlo con varias columnas:

```sql
SELECT DISTINCT country, city
FROM users;
```

En este caso, se eliminan los duplicados considerando **la combinación de las columnas**.

Por ejemplo:

```text
country   | city
----------|---------
Mexico    | CDMX
Mexico    | CDMX
Mexico    | Guadalajara
Colombia  | Bogotá
```

Resultado:

```text
country   | city
----------|---------
Mexico    | CDMX
Mexico    | Guadalajara
Colombia  | Bogotá
```

---

# 🔢 DISTINCT + COUNT

## 4️⃣ 📊 CONTAR VALORES DISTINTOS

Puedes combinar `DISTINCT` con `COUNT()`:

```sql
SELECT COUNT(DISTINCT country)
FROM users;
```

Esto cuenta cuántos **países diferentes** existen.

Por ejemplo:

```text
Mexico
Mexico
Colombia
Spain
Colombia
```

Resultado:

```text
3
```

Porque existen:

```text
Mexico
Colombia
Spain
```

### 🎯 IDEA CLAVE

> **`DISTINCT` elimina duplicados del resultado. Cuando se combina con `COUNT()`, permite contar cuántos valores únicos existen.**
