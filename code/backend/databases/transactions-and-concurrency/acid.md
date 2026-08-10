# 📄 ACID

🔥 **ACID** representa las cuatro propiedades fundamentales que ayudan a garantizar que las **transactions** sean confiables.

|       | Propiedad   |
| ----- | ----------- |
| **A** | Atomicity   |
| **C** | Consistency |
| **I** | Isolation   |
| **D** | Durability  |

Estas propiedades explican cómo debe comportarse una transaction para mantener la integridad de los datos.

---

## 📑 ÍNDICE 

- [📄 ACID](#-acid)
  - [📑 ÍNDICE](#-índice)
  - [1️⃣ ⚛️ ATOMICITY](#1️⃣-️-atomicity)
    - [💰 Ejemplo](#-ejemplo)
  - [2️⃣ ✅ CONSISTENCY](#2️⃣--consistency)
  - [3️⃣ 🔒 ISOLATION](#3️⃣--isolation)
  - [4️⃣ 💾 DURABILITY](#4️⃣--durability)
  - [5️⃣ 🤔 ¿POR QUÉ EXISTE ACID?](#5️⃣--por-qué-existe-acid)
  - [6️⃣ 🔄 ACID + TRANSACTIONS](#6️⃣--acid--transactions)
  - [7️⃣ 🌎 EJEMPLOS REALES DE ACID](#7️⃣--ejemplos-reales-de-acid)
    - [💰 Transferencia bancaria](#-transferencia-bancaria)
  - [🧠 RESUMEN](#-resumen)

## 1️⃣ ⚛️ ATOMICITY

**Atomicity** significa que una transaction se trata como una sola unidad.

```text
Todo
 ↓
o
 ↓
Nada
```

Si todas las operaciones funcionan:

```text
BEGIN
  ↓
Query 1
  ↓
Query 2
  ↓
COMMIT
```

Los cambios se confirman.

Pero si algo falla:

```text
BEGIN
  ↓
Query 1
  ↓
❌ Error
  ↓
ROLLBACK
```

Los cambios de la transaction se deshacen.

### 💰 Ejemplo

Una transferencia:

```text
A - $100
B + $100
```

No queremos que ocurra solamente:

```text
A - $100
```

Si la segunda operación falla, la primera también debe deshacerse.

> **Atomicity = todas las operaciones o ninguna.**

---

## 2️⃣ ✅ CONSISTENCY

**Consistency** significa que una transaction debe llevar la database de un **estado válido a otro estado válido**.

Conceptualmente:

```text
Estado válido
     ↓
Transaction
     ↓
Estado válido
```

Por ejemplo, si existe una regla:

```text
balance >= 0
```

una transaction no debería dejar la database en un estado que viole esa regla.

Antes:

```text
Account A
$100
```

Después de una operación válida:

```text
Account A
$50
```

La database continúa respetando sus reglas.

Si una operación intentara producir un estado inválido, la transaction puede fallar y deshacerse.

> **Consistency = mantener las reglas e integridad de la database.**


## 3️⃣ 🔒 ISOLATION

**Isolation** significa que las transactions que se ejecutan al mismo tiempo no deberían interferirse incorrectamente.

```text
Transaction A
      │
      │
      ▼
  Database
      ▲
      │
      │
Transaction B
```

Ambas transactions pueden ejecutarse concurrentemente.

La database debe controlar cómo interactúan entre sí para evitar resultados incorrectos.

Conceptualmente:

```text
Transaction A
      │
      ├──────────┐
      │          │
      ▼          ▼
   Database   Database
      ▲          ▲
      │          │
      └──────────┤
                 │
           Transaction B
```

Esto será especialmente importante cuando estudies **Concurrency**, porque múltiples transactions pueden ejecutarse simultáneamente.

> **Isolation = controlar la interacción entre transactions concurrentes.**

---

## 4️⃣ 💾 DURABILITY

**Durability** significa que, después de que una transaction realiza `COMMIT`, sus cambios deben permanecer.

Por ejemplo:

```text
BEGIN
   ↓
Operations
   ↓
COMMIT
   ↓
Cambios confirmados
```

Después:

```text
💥 Fallo
```

los cambios confirmados deben seguir existiendo.

Conceptualmente:

```text
COMMIT
   ↓
Cambios persistidos
   ↓
Fallo
   ↓
Cambios siguen existiendo
```

> **Durability = los cambios confirmados persisten.**

---

## 5️⃣ 🤔 ¿POR QUÉ EXISTE ACID?

ACID existe para proporcionar garantías sobre el comportamiento de las transactions.

Sin estas propiedades podrían aparecer problemas como:

```text
❌ Datos parcialmente modificados
❌ Estados inválidos
❌ Interferencia entre transactions
❌ Pérdida de cambios confirmados
```

ACID busca garantizar:

```text
Atomicity
    ↓
Operación completa

Consistency
    ↓
Datos válidos

Isolation
    ↓
Transactions controladas

Durability
    ↓
Cambios persistentes
```

---

## 6️⃣ 🔄 ACID + TRANSACTIONS

ACID está directamente relacionado con las transactions.

El flujo conceptual es:

```text
Transaction
     │
     ├── Atomicity
     │
     ├── Consistency
     │
     ├── Isolation
     │
     └── Durability
```

Por ejemplo:

```text
BEGIN
   ↓
Operations
   ↓
¿Todo correcto?
 ┌──────┴──────┐
Sí            No
 ↓             ↓
COMMIT       ROLLBACK
 ↓
Durability
```

Las cuatro propiedades trabajan juntas para que las transactions sean confiables.

---

## 7️⃣ 🌎 EJEMPLOS REALES DE ACID

### 💰 Transferencia bancaria

```text
Account A
   ↓
- $100

Account B
   ↓
+ $100
```

**Atomicity:**

```text
Ambas operaciones
      ↓
o
      ↓
ninguna
```

**Consistency:**

```text
Las cuentas deben permanecer
en un estado válido
```

**Isolation:**

```text
Otras transactions
no deben interferir incorrectamente
```

**Durability:**

```text
COMMIT
  ↓
Los cambios persisten
```

---

## 🧠 RESUMEN

| Propiedad         | Idea principal                        |
| ----------------- | ------------------------------------- |
| ⚛️ **Atomicity**  | Todo o nada                           |
| ✅ **Consistency** | Estado válido → estado válido         |
| 🔒 **Isolation**  | Transactions concurrentes controladas |
| 💾 **Durability** | Los cambios confirmados persisten     |

La forma más fácil de recordarlo:

```text
A → Todo o nada
C → Datos válidos
I → Transactions aisladas
D → Cambios persistentes
```

> 🔥 **ACID define las garantías fundamentales que hacen que las transactions sean confiables.**
