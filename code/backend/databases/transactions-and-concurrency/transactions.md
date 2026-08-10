# 📄 TRANSACTIONS

Una **Transaction** permite agrupar varias operaciones de una database para tratarlas como **una sola unidad de trabajo**.

Esto es especialmente importante cuando varias operaciones dependen unas de otras.

---

# 📑 ÍNDICE 

- [📄 TRANSACTIONS](#-transactions)
- [📑 ÍNDICE](#-índice)
  - [1️⃣ 🔄 ¿QUÉ ES UNA TRANSACTION?](#1️⃣--qué-es-una-transaction)
  - [2️⃣ 🎯 ¿POR QUÉ UTILIZAR TRANSACTIONS?](#2️⃣--por-qué-utilizar-transactions)
  - [3️⃣ ▶️ BEGIN](#3️⃣-️-begin)
  - [4️⃣ ✅ COMMIT](#4️⃣--commit)
  - [5️⃣ ↩️ ROLLBACK](#5️⃣-️-rollback)
  - [6️⃣ ⚛️ ATOMIC OPERATIONS](#6️⃣-️-atomic-operations)
  - [7️⃣ 🚧 TRANSACTION BOUNDARIES](#7️⃣--transaction-boundaries)
  - [8️⃣ 🔗 MULTIPLE QUERIES IN A TRANSACTION](#8️⃣--multiple-queries-in-a-transaction)
  - [9️⃣ ❌ TRANSACTION FAILURE](#9️⃣--transaction-failure)
  - [🔟 🚀 TRANSACTIONS EN APLICACIONES BACKEND](#--transactions-en-aplicaciones-backend)
- [💰 EJEMPLO CLÁSICO — TRANSFERENCIA](#-ejemplo-clásico--transferencia)
- [🧠 IDEA PRINCIPAL](#-idea-principal)

## 1️⃣ 🔄 ¿QUÉ ES UNA TRANSACTION?

Una **Transaction** es un conjunto de operaciones que la database ejecuta como una unidad.

```text
Transaction
    │
    ├── Operation 1
    ├── Operation 2
    └── Operation 3
```

La idea es que todas las operaciones formen parte de la misma operación lógica.

---

## 2️⃣ 🎯 ¿POR QUÉ UTILIZAR TRANSACTIONS?

Las transactions son necesarias cuando varias operaciones deben mantenerse consistentes.

Por ejemplo, una transferencia de dinero:

```text
Account A
$100
   ↓
- $100

Account B
$100
   ↓
+ $100
```

No queremos que solamente una de las dos operaciones se complete.

La transferencia debe funcionar como una unidad:

```text
A - $100
+
B + $100
```

---

## 3️⃣ ▶️ BEGIN

`BEGIN` marca el **inicio de una transaction**.

```sql
BEGIN;
```

Conceptualmente:

```text
BEGIN
  ↓
Transaction starts
  ↓
Operations
```

A partir de aquí, las operaciones forman parte de la transaction.

---

## 4️⃣ ✅ COMMIT

`COMMIT` confirma las operaciones realizadas dentro de la transaction.

```sql
COMMIT;
```

Conceptualmente:

```text
BEGIN
   ↓
Operations
   ↓
COMMIT
   ↓
Cambios confirmados
```

Una vez realizado el `COMMIT`, la transaction termina y sus cambios quedan confirmados.

---

## 5️⃣ ↩️ ROLLBACK

`ROLLBACK` deshace las operaciones realizadas dentro de la transaction.

```sql
ROLLBACK;
```

Conceptualmente:

```text
BEGIN
   ↓
Operations
   ↓
❌ Error
   ↓
ROLLBACK
   ↓
Cambios deshechos
```

---

## 6️⃣ ⚛️ ATOMIC OPERATIONS

Una transaction permite tratar múltiples operaciones como una **unidad atómica**.

La idea es:

```text
Todo
 ↓
o
 ↓
Nada
```

Por ejemplo:

```text
A - $100
B + $100
```

Ambas operaciones deben completarse correctamente.

Si una falla:

```text
A - $100
   ↓
❌ Error
   ↓
ROLLBACK
```

La operación completa se deshace.

## 7️⃣ 🚧 TRANSACTION BOUNDARIES

Las **Transaction Boundaries** determinan dónde comienza y dónde termina una transaction.

```text id="f3xq1c"
BEGIN
  │
  │ Transaction
  │
  ├── Query
  ├── Query
  └── Query
  │
COMMIT / ROLLBACK
```

La transaction comienza con:

```text
BEGIN
```

y termina con:

```text
COMMIT
```

o:

```text
ROLLBACK
```

---

## 8️⃣ 🔗 MULTIPLE QUERIES IN A TRANSACTION

Una transaction puede contener múltiples queries.

Por ejemplo:

```sql id="k7q9xv"
BEGIN;

UPDATE accounts
SET balance = balance - 100
WHERE id = 1;

UPDATE accounts
SET balance = balance + 100
WHERE id = 2;

COMMIT;
```

Conceptualmente:

```text id="7px9tq"
BEGIN
  ↓
Query 1
  ↓
Query 2
  ↓
COMMIT
```

Las operaciones forman parte de la misma transaction.

---

## 9️⃣ ❌ TRANSACTION FAILURE

Si una operación falla, la transaction puede hacer `ROLLBACK`.

Por ejemplo:

```text id="8m7j4v"
BEGIN
   ↓
A - $100
   ↓
❌ Error
   ↓
ROLLBACK
```

El resultado es:

```text id="3t4j1s"
A
↓
$100

B
↓
$100
```

Los cambios realizados dentro de la transaction se deshacen.

---

## 🔟 🚀 TRANSACTIONS EN APLICACIONES BACKEND

Las transactions son especialmente importantes en aplicaciones backend cuando una operación requiere modificar varios datos relacionados.

El flujo puede ser:

```text id="7z4g8c"
Request
   ↓
Controller
   ↓
Service
   ↓
BEGIN
   ↓
Query
   ↓
Query
   ↓
Query
   ↓
¿Todo correcto?
 ┌──────┴──────┐
Sí            No
 ↓             ↓
COMMIT       ROLLBACK
 ↓             ↓
Response     Error
```

Por ejemplo:

```text id="0x8f6a"
Express
   ↓
Service
   ↓
Transaction
   ├── Query 1
   ├── Query 2
   └── Query 3
   ↓
COMMIT
   ↓
Response
```

---

# 💰 EJEMPLO CLÁSICO — TRANSFERENCIA

Tenemos:

```text id="f1k8r2"
Account A
$100
```

y:

```text id="q6w9ps"
Account B
$100
```

La transferencia debe realizar:

```text id="n3d7va"
BEGIN
   ↓
A - $100
   ↓
B + $100
   ↓
COMMIT
```

Si todo funciona:

```text id="r8c2lm"
A → $0
B → $200
```

Pero si ocurre un error:

```text id="b5j9xq"
BEGIN
   ↓
A - $100
   ↓
❌ Error
   ↓
ROLLBACK
```

Entonces:

```text id="m2v7kd"
A → $100
B → $100
```

La operación completa se deshace.

---

# 🧠 IDEA PRINCIPAL

Una transaction permite agrupar varias operaciones para que puedan **confirmarse juntas o deshacerse juntas**.

```text id="h4n8sz"
BEGIN
   ↓
Multiple Queries
   ↓
¿Todo correcto?
 ┌──────┴──────┐
Sí            No
 ↓             ↓
COMMIT       ROLLBACK
```

> **Una transaction protege la consistencia de una operación que involucra múltiples cambios en la database.**
