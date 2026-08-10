# 📄 CONCURRENCY

> **Concurrency** estudia qué ocurre cuando **varias operaciones o transactions acceden a los mismos datos al mismo tiempo**.

```text
User A ─────┐
            │
            ├──→ Database
            │
User B ─────┘
```

Ambos usuarios podrían intentar modificar:

```text
balance = 100
```

al mismo tiempo.

---

## 📑 ÍNDICE

- [📄 CONCURRENCY](#-concurrency)
  - [📑 ÍNDICE](#-índice)
  - [1️⃣ 🔄 ¿QUÉ ES CONCURRENCY?](#1️⃣--qué-es-concurrency)
  - [2️⃣ 🆚 CONCURRENCY VS PARALLELISM](#2️⃣--concurrency-vs-parallelism)
    - [Concurrency](#concurrency)
    - [Parallelism](#parallelism)
  - [3️⃣ 🔀 CONCURRENT TRANSACTIONS](#3️⃣--concurrent-transactions)
  - [4️⃣ 📖 READ OPERATIONS](#4️⃣--read-operations)
  - [5️⃣ ✏️ WRITE OPERATIONS](#5️⃣-️-write-operations)
  - [6️⃣ 📖 CONCURRENT READS](#6️⃣--concurrent-reads)
  - [7️⃣ ✏️ CONCURRENT WRITES](#7️⃣-️-concurrent-writes)
  - [8️⃣ ⚠️ DATA CONFLICTS](#8️⃣-️-data-conflicts)
  - [9️⃣ ❌ LOST UPDATES](#9️⃣--lost-updates)
  - [🔟 🚫 DIRTY READS](#--dirty-reads)
  - [1️⃣1️⃣ 🔄 NON-REPEATABLE READS](#1️⃣1️⃣--non-repeatable-reads)
  - [1️⃣2️⃣ 👻 PHANTOM READS](#1️⃣2️⃣--phantom-reads)
  - [🧠 LOS PRINCIPALES PROBLEMAS](#-los-principales-problemas)
  - [🎯 PREGUNTA FUNDAMENTAL](#-pregunta-fundamental)

## 1️⃣ 🔄 ¿QUÉ ES CONCURRENCY?

**Concurrency** es la capacidad de una database para manejar múltiples operaciones que ocurren durante el mismo periodo de tiempo.

```text
Transaction A
      │
      ├──────→ Database
      │
Transaction B
      │
      └──────→ Database
```

Las operaciones pueden estar ejecutándose de manera concurrente.

Esto es importante porque una aplicación real puede recibir muchas requests simultáneamente.

---

## 2️⃣ 🆚 CONCURRENCY VS PARALLELISM

Aunque están relacionados, **Concurrency** y **Parallelism** no significan exactamente lo mismo.

| Concepto        | Descripción                                                                                                             |
| --------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Concurrency** | Varias tareas progresan durante el mismo periodo de tiempo                                                              |
| **Parallelism** | Varias tareas se ejecutan **literalmente al mismo tiempo**, normalmente utilizando diferentes recursos de procesamiento |

### Concurrency

Varias tareas progresan durante el mismo periodo de tiempo:

```text
Task A ──────────
      Task B ──────────
```

Las tareas pueden intercalarse.

### Parallelism

Varias tareas se ejecutan **literalmente al mismo tiempo**, normalmente utilizando diferentes recursos de procesamiento:

```text
CPU 1 → Task A
CPU 2 → Task B
```

Conceptualmente:

```text
Concurrency
→ varias tareas en progreso

Parallelism
→ varias tareas ejecutándose simultáneamente
```

---

## 3️⃣ 🔀 CONCURRENT TRANSACTIONS

Una database puede tener múltiples transactions ejecutándose al mismo tiempo.

```text
Transaction A
      │
      ▼
   Database
      ▲
      │
Transaction B
```

Por ejemplo:

```text
Transaction A
→ UPDATE account

Transaction B
→ UPDATE account
```

Si ambas trabajan con los mismos datos, pueden producirse conflictos.

---

## 4️⃣ 📖 READ OPERATIONS

Una **Read Operation** obtiene información de la database.

Por ejemplo:

```sql
SELECT balance
FROM accounts
WHERE id = 1;
```

Conceptualmente:

```text
Transaction
   ↓
READ
   ↓
Database
```

Varias transactions pueden realizar lecturas al mismo tiempo.

---

## 5️⃣ ✏️ WRITE OPERATIONS

Una **Write Operation** modifica información.

Por ejemplo:

```sql
UPDATE accounts
SET balance = 50
WHERE id = 1;
```

Conceptualmente:

```text
Transaction
   ↓
WRITE
   ↓
Database
```

Las operaciones de escritura son especialmente importantes cuando varias transactions modifican los mismos datos.

---

## 6️⃣ 📖 CONCURRENT READS

Varias transactions pueden leer datos simultáneamente.

```text
Transaction A ── READ ──┐
                        ├──→ Database
Transaction B ── READ ──┘
```

Por ejemplo:

```text
A → SELECT balance
B → SELECT balance
```

Ambas pueden acceder al mismo registro.

---

## 7️⃣ ✏️ CONCURRENT WRITES

El problema se vuelve más complejo cuando varias transactions escriben sobre los mismos datos.

```text
Transaction A ── WRITE ──┐
                         ├──→ Database
Transaction B ── WRITE ──┘
```

Por ejemplo:

```text
balance = 100

A → modificar balance
B → modificar balance
```

La database debe controlar cómo interactúan ambas operaciones.

## 8️⃣ ⚠️ DATA CONFLICTS

Un **Data Conflict** ocurre cuando operaciones concurrentes interfieren sobre los mismos datos.

```text
balance = 100

User A → modificar
User B → modificar
```

Si ambas transactions no se manejan correctamente, el resultado podría no ser el esperado.

Conceptualmente:

```text
Transaction A
      │
      ├──→ mismo dato ←──┤
      │                  │
Transaction B
```

---

## 9️⃣ ❌ LOST UPDATES

Un **Lost Update** ocurre cuando una actualización realizada por una transaction termina siendo sobrescrita por otra.

Por ejemplo:

```text
balance = 100
```

Ambos usuarios leen:

```text
A → 100
B → 100
```

Después:

```text
A → 100 - 10 = 90
B → 100 - 20 = 80
```

Si ambas escriben basándose en el valor original:

```text
A → 90
B → 80
```

El resultado final podría ser:

```text
80
```

y la actualización de A se habría perdido.

---

## 🔟 🚫 DIRTY READS

Un **Dirty Read** ocurre cuando una transaction lee datos modificados por otra transaction que **todavía no ha hecho COMMIT**.

Conceptualmente:

```text
Transaction A
   ↓
UPDATE
   ↓
dato no confirmado
```

Mientras:

```text
Transaction B
   ↓
READ
   ↓
lee el dato no confirmado
```

Si A posteriormente hace:

```text
ROLLBACK
```

el dato que B había leído nunca llegó a confirmarse.

---

## 1️⃣1️⃣ 🔄 NON-REPEATABLE READS

Un **Non-Repeatable Read** ocurre cuando una transaction lee el mismo registro dos veces y obtiene valores diferentes porque otra transaction lo modificó entre ambas lecturas.

Por ejemplo:

```text
Transaction A

READ → balance = 100
```

Mientras tanto:

```text
Transaction B

UPDATE → balance = 50
COMMIT
```

Después A vuelve a leer:

```text
Transaction A

READ → balance = 50
```

La misma transaction obtuvo:

```text
Primera lectura → 100
Segunda lectura → 50
```

---

## 1️⃣2️⃣ 👻 PHANTOM READS

Un **Phantom Read** ocurre cuando una transaction ejecuta una consulta y posteriormente vuelve a ejecutar la misma consulta, pero aparecen o desaparecen filas debido a cambios realizados por otra transaction.

Por ejemplo:

```text
Transaction A

SELECT *
FROM users
WHERE age >= 18;
```

Obtiene:

```text
10 users
```

Mientras tanto:

```text
Transaction B

INSERT new user
COMMIT
```

A vuelve a ejecutar la consulta:

```text
SELECT *
FROM users
WHERE age >= 18;
```

Ahora obtiene:

```text
11 users
```

La nueva fila es el **phantom**.

---

## 🧠 LOS PRINCIPALES PROBLEMAS

Puedes visualizar los problemas de concurrency así:

```text
Concurrent Transactions
          │
          ▼
     Data Conflicts
          │
    ┌─────┼──────────────┐
    ▼     ▼              ▼
 Lost   Dirty      Non-Repeatable
Updates  Reads         Reads
                           │
                           ▼
                     Phantom Reads
```

| Problema                   | Idea                                         |
| -------------------------- | -------------------------------------------- |
| ❌ **Lost Update**          | Una actualización sobrescribe otra           |
| 🚫 **Dirty Read**          | Se leen cambios no confirmados               |
| 🔄 **Non-Repeatable Read** | El mismo registro cambia entre lecturas      |
| 👻 **Phantom Read**        | Aparecen o desaparecen filas entre consultas |

---

## 🎯 PREGUNTA FUNDAMENTAL

Cuando dos usuarios intentan modificar los mismos datos:

```text
User A ─────┐
            │
            ▼
         Database
            ▲
            │
User B ─────┘
```

la database debe controlar la interacción entre sus transactions para evitar resultados incorrectos.

Esto conecta directamente con el siguiente concepto:

```text
Concurrency
    ↓
Concurrent Transactions
    ↓
Data Conflicts
    ↓
Isolation
    ↓
Isolation Levels
```

> 🔥 **Concurrency consiste en manejar correctamente múltiples operaciones que ocurren sobre los mismos datos durante el mismo periodo de tiempo.**
