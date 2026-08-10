# 📄 RACE CONDITIONS

Una **Race Condition** ocurre cuando el resultado de una operación depende del **orden en que ocurren operaciones concurrentes**.

Es un problema especialmente importante cuando varias operaciones trabajan al mismo tiempo sobre los mismos datos.

---

## 📑 ÍNDICE 

- [📄 RACE CONDITIONS](#-race-conditions)
  - [📑 ÍNDICE](#-índice)
- [1️⃣ 🏁 ¿QUÉ ES UNA RACE CONDITION?](#1️⃣--qué-es-una-race-condition)
- [2️⃣ ⚙️ CÓMO OCURRE](#2️⃣-️-cómo-ocurre)
- [3️⃣ 🔄 READ-MODIFY-WRITE](#3️⃣--read-modify-write)
- [4️⃣ 💥 LOST UPDATES](#4️⃣--lost-updates)
- [5️⃣ 🌐 CONCURRENT REQUESTS](#5️⃣--concurrent-requests)
- [6️⃣ 🖥️ RACE CONDITIONS EN BACKEND](#6️⃣-️-race-conditions-en-backend)
- [7️⃣ 🗄️ RACE CONDITIONS EN DATABASES](#7️⃣-️-race-conditions-en-databases)
- [8️⃣ 🛡️ CÓMO PREVENIRLAS](#8️⃣-️-cómo-prevenirlas)
- [9️⃣ 🔄 TRANSACTIONS](#9️⃣--transactions)
- [🔟 🔒 LOCKS](#--locks)
- [1️⃣1️⃣ ⚛️ ATOMIC OPERATIONS](#1️⃣1️⃣-️-atomic-operations)
- [🧠 CONEXIÓN CON LOS TEMAS ANTERIORES](#-conexión-con-los-temas-anteriores)

# 1️⃣ 🏁 ¿QUÉ ES UNA RACE CONDITION?

Una Race Condition ocurre cuando dos o más operaciones concurrentes acceden o modifican un recurso y el resultado final depende de cuál operación ocurre primero.

Conceptualmente:

```text
Operation A ──┐
              ├──→ Shared Data
Operation B ──┘
```

Si el resultado cambia dependiendo del orden:

```text
A → B
```

vs:

```text
B → A
```

existe una posible **Race Condition**.

---

# 2️⃣ ⚙️ CÓMO OCURRE

Supongamos:

```text
balance = 100
```

Dos usuarios realizan una operación al mismo tiempo:

```text
User A ──→ READ 100
User B ──→ READ 100
```

Ambos obtienen:

```text
100
```

Después:

```text
User A → 100 - 80 = 20
User B → 100 - 80 = 20
```

El problema es que ambas operaciones utilizaron el mismo valor inicial.

Conceptualmente:

```text
        balance = 100
             │
       ┌─────┴─────┐
       ▼           ▼
   User A        User B
   READ 100      READ 100
       │           │
    - 80         - 80
       │           │
       ▼           ▼
     20            20
```

---

# 3️⃣ 🔄 READ-MODIFY-WRITE

Muchas Race Conditions aparecen con el patrón:

```text
READ
 ↓
MODIFY
 ↓
WRITE
```

Por ejemplo:

```text
READ balance
     ↓
balance - 80
     ↓
WRITE balance
```

El problema aparece cuando dos operaciones realizan este proceso simultáneamente:

```text
User A              User B

READ 100            READ 100
   ↓                   ↓
- 80                - 80
   ↓                   ↓
WRITE 20            WRITE 20
```

Ambas terminaron utilizando el mismo valor inicial.

---

# 4️⃣ 💥 LOST UPDATES

Un **Lost Update** ocurre cuando una modificación realizada por una transaction termina siendo sobrescrita por otra modificación concurrente.

Por ejemplo:

```text
balance = 100
```

```text
User A → READ 100
User B → READ 100
```

Después:

```text
User A → WRITE 20
User B → WRITE 20
```

El resultado final es:

```text
balance = 20
```

Pero ambas operaciones deberían haber aplicado su modificación.

El resultado esperado conceptualmente sería:

```text
100 - 80 - 80 = -60
```

La modificación de una de las operaciones se perdió.

---

# 5️⃣ 🌐 CONCURRENT REQUESTS

Las Race Conditions pueden aparecer cuando un backend recibe múltiples requests simultáneamente.

Por ejemplo:

```text
Request A ──┐
Request B ──┼──→ Express
Request C ──┘
                ↓
             Database
```

Dos requests pueden intentar modificar el mismo registro al mismo tiempo:

```text
Request A → UPDATE
Request B → UPDATE
```

Si la operación no está correctamente protegida, puede producirse una condición de carrera.

# 6️⃣ 🖥️ RACE CONDITIONS EN BACKEND

Una Race Condition no ocurre solamente dentro de la database.

También puede ocurrir en el backend cuando varias operaciones trabajan sobre un estado compartido.

Por ejemplo:

```text
Request A
    ↓
Read shared state
    ↓
Modify
    ↓
Write

Request B
    ↓
Read shared state
    ↓
Modify
    ↓
Write
```

Si ambas operaciones ocurren concurrentemente, el resultado puede depender del orden de ejecución.

---

# 7️⃣ 🗄️ RACE CONDITIONS EN DATABASES

En databases aparecen especialmente cuando varias transactions trabajan sobre los mismos datos.

Por ejemplo:

```text
Transaction A ──┐
                ├──→ balance
Transaction B ──┘
```

Ambas pueden intentar:

```text
READ
 ↓
MODIFY
 ↓
WRITE
```

Esto puede producir problemas como:

* ❌ **Lost Updates**
* ❌ **Incorrect results**
* ❌ **Inconsistent state**

---

# 8️⃣ 🛡️ CÓMO PREVENIRLAS

Las Race Conditions pueden prevenirse utilizando mecanismos que controlen las operaciones concurrentes.

Entre ellos:

```text
Transactions
Locks
Atomic Operations
```

También es importante diseñar correctamente las operaciones que modifican los datos.

---

# 9️⃣ 🔄 TRANSACTIONS

Las **Transactions** permiten agrupar varias operaciones relacionadas en una unidad de trabajo.

Por ejemplo:

```text
BEGIN
  ↓
READ
  ↓
MODIFY
  ↓
WRITE
  ↓
COMMIT
```

Si algo falla:

```text
ROLLBACK
```

Esto ayuda a mantener las operaciones relacionadas dentro de una misma unidad transaccional.

---

# 🔟 🔒 LOCKS

Los **Locks** permiten controlar el acceso concurrente a determinados datos.

Por ejemplo:

```text
Transaction A
      ↓
    🔒 Lock
      ↓
    Data
      ↑
      │
Transaction B
      ↓
   ⏳ Waiting
```

A puede modificar el dato y después:

```text
COMMIT
   ↓
🔓
```

Entonces B puede continuar.

---

# 1️⃣1️⃣ ⚛️ ATOMIC OPERATIONS

Una **Atomic Operation** se ejecuta como una única operación indivisible desde el punto de vista de la operación concurrente.

En lugar de:

```text
READ
 ↓
MODIFY
 ↓
WRITE
```

puedes realizar una operación directamente sobre el valor.

Por ejemplo:

```sql
UPDATE accounts
SET balance = balance - 80
WHERE id = 1;
```

Conceptualmente:

```text
balance = 100
       ↓
balance - 80
       ↓
balance = 20
```

La operación se realiza directamente sobre el valor almacenado en la database, en lugar de separar manualmente el `READ` y el `WRITE`.

---

# 🧠 CONEXIÓN CON LOS TEMAS ANTERIORES

Ahora se empieza a conectar toda la carpeta:

```text
             CONCURRENCY
                  │
                  ▼
          Race Conditions
                  │
        ┌─────────┼─────────┐
        ▼         ▼         ▼
   Transactions  Locks   Atomic
                          Operations
        │         │
        └────┬────┘
             ▼
      Isolation Levels
```

Y el problema fundamental:

```text
Concurrent Operations
        ↓
   READ-MODIFY-WRITE
        ↓
 Race Condition
        ↓
 Lost Update
```

> 🔥 **Una Race Condition ocurre cuando operaciones concurrentes compiten por el mismo estado y el resultado depende del orden en que se ejecutan. Transactions, Locks y Atomic Operations son mecanismos importantes para prevenir estos problemas.**
