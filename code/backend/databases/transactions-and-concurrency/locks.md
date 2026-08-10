# 📄 LOCKS

Los **Locks** permiten que la database controle el acceso concurrente a los datos cuando varias transactions intentan trabajar sobre los mismos recursos.

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
   Esperando
```

---

## 📑 ÍNDICE

- [📄 LOCKS](#-locks)
  - [📑 ÍNDICE](#-índice)
  - [1️⃣ 🔒 ¿QUÉ ES UN LOCK?](#1️⃣--qué-es-un-lock)
  - [2️⃣ 🤔 ¿POR QUÉ EXISTEN LOS LOCKS?](#2️⃣--por-qué-existen-los-locks)
  - [3️⃣ 📄 ROW-LEVEL LOCKS](#3️⃣--row-level-locks)
  - [4️⃣ 🗂️ TABLE-LEVEL LOCKS](#4️⃣-️-table-level-locks)
  - [5️⃣ 📖 SHARED LOCKS](#5️⃣--shared-locks)
  - [6️⃣ 🔐 EXCLUSIVE LOCKS](#6️⃣--exclusive-locks)
  - [7️⃣ 📖 READ LOCKS](#7️⃣--read-locks)
  - [8️⃣ ✏️ WRITE LOCKS](#8️⃣-️-write-locks)
- [9️⃣ ⏱️ LOCK DURATION](#9️⃣-️-lock-duration)
- [🔟 ⚠️ LOCK CONTENTION](#-️-lock-contention)
- [1️⃣1️⃣ 🔎 SELECT ... FOR UPDATE](#1️⃣1️⃣--select--for-update)
- [💰 EJEMPLO](#-ejemplo)
    - [Transaction A](#transaction-a)
- [🧠 IDEA PRINCIPAL](#-idea-principal)

## 1️⃣ 🔒 ¿QUÉ ES UN LOCK?

Un **Lock** es un mecanismo que la database utiliza para controlar el acceso a determinados datos durante una operación.

Por ejemplo:

```text
Transaction A
      ↓
    🔒 Lock
      ↓
     Row
```

Mientras el lock está activo, otra transaction puede tener que esperar dependiendo del tipo de lock y de la operación que intenta realizar.

---

## 2️⃣ 🤔 ¿POR QUÉ EXISTEN LOS LOCKS?

Los locks existen para controlar el acceso concurrente y evitar conflictos cuando varias transactions trabajan sobre los mismos datos.

Por ejemplo:

```text
Transaction A ────┐
                  ↓
                Data
                  ↑
Transaction B ────┘
```

Si ambas intentan modificar el mismo registro al mismo tiempo, la database necesita controlar cómo se realizan esas operaciones.

Un lock puede hacer que una transaction espere:

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
   Esperando
```

---

## 3️⃣ 📄 ROW-LEVEL LOCKS

Un **Row-level Lock** bloquea una fila específica.

Por ejemplo:

```text
users

id | name
---|------
1  | Ana
2  | Luis
3  | Pedro
```

Una transaction puede bloquear solamente:

```text
id = 2
```

Conceptualmente:

```text
users
 ├── Row 1
 ├── 🔒 Row 2
 └── Row 3
```

Las demás filas pueden continuar siendo utilizadas por otras transactions dependiendo de las operaciones involucradas.

---

## 4️⃣ 🗂️ TABLE-LEVEL LOCKS

Un **Table-level Lock** bloquea una tabla completa.

```text
🔒 users
```

Conceptualmente:

```text
Database
   │
   └── 🔒 users
          │
          ├── Row 1
          ├── Row 2
          └── Row 3
```

Esto puede afectar a más operaciones concurrentes que un row-level lock.

---

## 5️⃣ 📖 SHARED LOCKS

Un **Shared Lock** permite que varias transactions puedan acceder a los mismos datos para lectura, dependiendo del mecanismo específico de la database.

Conceptualmente:

```text
Transaction A
      ↓
   🔒 Shared
      ↓
     Data
      ↑
   🔒 Shared
      ↑
Transaction B
```

La idea principal es que varias transactions pueden compartir acceso de lectura.

---

## 6️⃣ 🔐 EXCLUSIVE LOCKS

Un **Exclusive Lock** proporciona acceso exclusivo sobre los datos bloqueados.

Conceptualmente:

```text
Transaction A
      ↓
🔒 Exclusive Lock
      ↓
    Data
```

Otra transaction que necesita un acceso incompatible puede tener que esperar:

```text
Transaction B
      ↓
   ⏳ Waiting
```

---

## 7️⃣ 📖 READ LOCKS

Un **Read Lock** está relacionado con el acceso de lectura a los datos.

Conceptualmente:

```text
Transaction A
      ↓
📖 Read Lock
      ↓
    Data
```

Dependiendo del tipo de lock y del RDBMS, otras transactions pueden o no realizar determinadas operaciones sobre esos datos mientras el lock está activo.

---

## 8️⃣ ✏️ WRITE LOCKS

Un **Write Lock** está relacionado con operaciones que modifican datos.

```text
Transaction A
      ↓
✏️ Write Lock
      ↓
    Data
```

Mientras el lock sea incompatible con la operación de otra transaction:

```text
Transaction B
      ↓
    ⏳ Wait
```

Esto ayuda a controlar modificaciones concurrentes sobre los mismos datos.

# 9️⃣ ⏱️ LOCK DURATION

Un lock tiene una duración determinada.

```text
Transaction A
      ↓
🔒 Lock
      ↓
   Operation
      ↓
   COMMIT
      ↓
🔓 Lock released
```

Conceptualmente:

```text
BEGIN
  ↓
🔒 Lock
  ↓
Operations
  ↓
COMMIT
  ↓
🔓
```

> La duración exacta depende del tipo de lock y del comportamiento del RDBMS.

---

# 🔟 ⚠️ LOCK CONTENTION

**Lock Contention** ocurre cuando varias transactions necesitan acceder a un recurso bloqueado.

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

Si muchas transactions compiten por los mismos recursos, puede aumentar el tiempo de espera.

Conceptualmente:

```text
Muchas transactions
        ↓
   Mismo recurso
        ↓
    🔒 Lock
        ↓
    ⏳ Waiting
        ↓
Lock Contention
```

---

# 1️⃣1️⃣ 🔎 SELECT ... FOR UPDATE

`SELECT ... FOR UPDATE` permite seleccionar registros y solicitar un lock para que puedan ser modificados dentro de una transaction.

Por ejemplo:

```sql
BEGIN;

SELECT *
FROM accounts
WHERE id = 1
FOR UPDATE;
```

Conceptualmente:

```text
BEGIN
   ↓
SELECT ... FOR UPDATE
   ↓
🔒 Row Lock
   ↓
Modificar registro
   ↓
COMMIT
   ↓
🔓 Lock
```

Esto es especialmente útil cuando necesitas:

1. Leer un registro.
2. Modificarlo.
3. Evitar que otra transaction lo modifique de forma incompatible mientras realizas la operación.

---

# 💰 EJEMPLO

Supongamos:

```text
accounts

id | balance
---|--------
1  | 100
```

### Transaction A

```text
BEGIN
   ↓
SELECT ... FOR UPDATE
   ↓
🔒 account 1
   ↓
UPDATE balance
   ↓
COMMIT
   ↓
🔓
```

Mientras tanto, Transaction B intenta acceder al mismo registro mediante una operación incompatible:

```text
Transaction B
      ↓
account 1
      ↓
⏳ Waiting
```

Cuando A termina:

```text
COMMIT
   ↓
🔓
   ↓
Transaction B
   ↓
continúa
```

---

# 🧠 IDEA PRINCIPAL

Los locks permiten controlar el acceso concurrente a los datos:

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

Y el flujo típico puede verse así:

```text
BEGIN
  ↓
🔒 Lock
  ↓
Modificar / utilizar datos
  ↓
COMMIT
  ↓
🔓 Lock liberado
```

> 🔥 **Los Locks ayudan a controlar cómo múltiples transactions acceden simultáneamente a los mismos datos y evitan ciertos conflictos de concurrencia.**
