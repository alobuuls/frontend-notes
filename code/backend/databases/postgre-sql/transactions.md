# 📄 07 — PostgreSQL Transactions

🔥 Este tema conecta directamente con:

```text
    TRANSACTIONS & CONCURRENCY
                ↓
      PostgreSQL Transactions
                ↓
       MVCC + Isolation
                ↓
      Concurrencia real
```

Aquí dejamos la teoría general de las **Transactions** y vemos cómo PostgreSQL las implementa y maneja.

Una transaction permite agrupar varias operaciones de base de datos como **una sola unidad lógica de trabajo**.

La idea fundamental es:

```text
BEGIN
  ↓
Operation 1
  ↓
Operation 2
  ↓
Operation 3
  ↓
COMMIT
```

Si algo sale mal:

```text
BEGIN
  ↓
Operation 1
  ↓
Operation 2 ❌
  ↓
ROLLBACK
```
---

# 📑 Índice — PostgreSQL Transactions

- [📄 07 — PostgreSQL Transactions](#-07--postgresql-transactions)
- [📑 Índice — PostgreSQL Transactions](#-índice--postgresql-transactions)
- [🧠 ¿QUÉ ES UNA TRANSACTION?](#-qué-es-una-transaction)
- [1️⃣ 🟢 BEGIN](#1️⃣--begin)
- [2️⃣ ✅ COMMIT](#2️⃣--commit)
    - [🧠 Piensa en COMMIT como:](#-piensa-en-commit-como)
- [3️⃣ ❌ ROLLBACK](#3️⃣--rollback)
    - [🧠 Piensa en ROLLBACK como:](#-piensa-en-rollback-como)
- [4️⃣ 💾 SAVEPOINT](#4️⃣--savepoint)
  - [🆚 ROLLBACK vs ROLLBACK TO SAVEPOINT](#-rollback-vs-rollback-to-savepoint)
- [5️⃣ 📦 TRANSACTION BLOCKS](#5️⃣--transaction-blocks)
  - [🧩 ¿Por qué son importantes?](#-por-qué-son-importantes)
- [6️⃣ 🛡️ ACID IN POSTGRESQL](#6️⃣-️-acid-in-postgresql)
  - [⚛️ A — Atomicity](#️-a--atomicity)
    - [🧠 Idea:](#-idea)
- [🔗 C — Consistency](#-c--consistency)
- [👥 I — Isolation](#-i--isolation)
- [💾 D — Durability](#-d--durability)
    - [🧠 Idea:](#-idea-1)
- [7️⃣ 🔐 ISOLATION LEVELS](#7️⃣--isolation-levels)
  - [🟢 READ COMMITTED](#-read-committed)
- [🟡 REPEATABLE READ](#-repeatable-read)
- [🔴 SERIALIZABLE](#-serializable)
  - [📊 COMPARACIÓN](#-comparación)
- [8️⃣ ⚡ CONCURRENT TRANSACTIONS](#8️⃣--concurrent-transactions)
  - [💥 Ejemplo](#-ejemplo)
- [9️⃣ 👀 MVCC](#9️⃣--mvcc)
- [🧠 ¿POR QUÉ EXISTE MVCC?](#-por-qué-existe-mvcc)
- [🔄 MVCC Y SNAPSHOTS](#-mvcc-y-snapshots)
- [🔥 MVCC + READ COMMITTED](#-mvcc--read-committed)
- [🔥 MVCC + REPEATABLE READ](#-mvcc--repeatable-read)
- [🔒 MVCC NO SIGNIFICA "NO LOCKS"](#-mvcc-no-significa-no-locks)
    - [MVCC](#mvcc)
    - [Locks](#locks)
- [🔒 TRANSACTIONS + LOCKS](#-transactions--locks)
- [🧩 EJEMPLO COMPLETO](#-ejemplo-completo)
- [⚠️ ERRORES COMUNES](#️-errores-comunes)
  - [❌ 1. Pensar que COMMIT es opcional](#-1-pensar-que-commit-es-opcional)
  - [❌ 2. Usar ROLLBACK como si fuera un DELETE](#-2-usar-rollback-como-si-fuera-un-delete)
  - [❌ 3. Pensar que MVCC elimina los locks](#-3-pensar-que-mvcc-elimina-los-locks)
  - [❌ 4. Pensar que READ COMMITTED mantiene el mismo snapshot](#-4-pensar-que-read-committed-mantiene-el-mismo-snapshot)
  - [❌ 5. Pensar que SERIALIZABLE nunca falla](#-5-pensar-que-serializable-nunca-falla)
- [🧠 MAPA MENTAL](#-mapa-mental)
- [💡 TIPS IMPORTANTES](#-tips-importantes)
    - [🧠 Tip #1](#-tip-1)
    - [🧠 Tip #2](#-tip-2)
    - [🧠 Tip #3](#-tip-3)
    - [🧠 Tip #4](#-tip-4)
- [🎯 IDEA PRINCIPAL](#-idea-principal)

# 🧠 ¿QUÉ ES UNA TRANSACTION?

Una **Transaction** es un conjunto de operaciones que PostgreSQL trata como una **unidad lógica**.

Por ejemplo, imagina una transferencia:

```text
Cuenta A
$1000

Cuenta B
$500
```

Queremos transferir:

```text
$200
```

Necesitamos hacer dos operaciones:

```text
Cuenta A
- $200
   ↓
Cuenta B
+ $200
```

Pero existe un problema.

¿Qué pasa si la primera operación funciona y la segunda falla?

```text
Cuenta A
$1000 → $800 ✅

Cuenta B
$500  → ❌ ERROR
```

Ahora el dinero desapareció del sistema.

💀 Eso sería un problema de **integridad**.

Por eso utilizamos una transaction:

```text
BEGIN
   ↓
Restar $200 de A
   ↓
Sumar $200 a B
   ↓
COMMIT
```

Si alguna operación falla:

```text
BEGIN
   ↓
Restar $200 de A
   ↓
Sumar $200 a B ❌
   ↓
ROLLBACK
```

El estado vuelve al estado anterior.

---

# 1️⃣ 🟢 BEGIN

`BEGIN` inicia una transaction.

```sql
BEGIN;
```

A partir de ese momento, las operaciones que hagas forman parte de la transaction actual.

Ejemplo:

```sql
BEGIN;

UPDATE accounts
SET balance = balance - 200
WHERE id = 1;

UPDATE accounts
SET balance = balance + 200
WHERE id = 2;
```

Todavía no hemos terminado.

Tenemos que decidir:

```text
COMMIT
   ↓
Guardar cambios

ROLLBACK
   ↓
Deshacer cambios
```

---

# 2️⃣ ✅ COMMIT

`COMMIT` confirma una transaction.

```sql
COMMIT;
```

Cuando haces:

```sql
BEGIN;

UPDATE accounts
SET balance = balance - 200
WHERE id = 1;

UPDATE accounts
SET balance = balance + 200
WHERE id = 2;

COMMIT;
```

PostgreSQL confirma las operaciones realizadas dentro de la transaction.

Conceptualmente:

```text
BEGIN
  ↓
Cambios
  ↓
Cambios
  ↓
COMMIT
  ↓
✅ Transaction confirmada
```

### 🧠 Piensa en COMMIT como:

> "Todo salió bien. Quiero confirmar estos cambios."

---

# 3️⃣ ❌ ROLLBACK

`ROLLBACK` cancela la transaction actual.

```sql
ROLLBACK;
```

Por ejemplo:

```sql
BEGIN;

UPDATE accounts
SET balance = balance - 200
WHERE id = 1;

UPDATE accounts
SET balance = balance + 200
WHERE id = 2;

ROLLBACK;
```

Los cambios realizados dentro de esa transaction se deshacen.

Conceptualmente:

```text
Estado inicial
     ↓
BEGIN
     ↓
Cambios
     ↓
ROLLBACK
     ↓
Estado anterior
```

### 🧠 Piensa en ROLLBACK como:

> "Algo salió mal. Cancela todo lo que hice en esta transaction."

---

# 4️⃣ 💾 SAVEPOINT

Un `SAVEPOINT` permite crear un punto dentro de una transaction al que puedes regresar posteriormente.

Por ejemplo:

```sql
BEGIN;

UPDATE users
SET name = 'Ana'
WHERE id = 1;

SAVEPOINT user_update;

UPDATE users
SET email = 'incorrect@email'
WHERE id = 1;

ROLLBACK TO SAVEPOINT user_update;

COMMIT;
```

Aquí sucede:

```text
BEGIN
  ↓
UPDATE name
  ↓
SAVEPOINT
  ↓
UPDATE email
  ↓
ROLLBACK TO SAVEPOINT
  ↓
Se deshace el UPDATE de email
  ↓
COMMIT
```

El primer cambio puede mantenerse mientras revertimos el segundo.

---

## 🆚 ROLLBACK vs ROLLBACK TO SAVEPOINT

| Comando                 | ¿Qué hace?                    |
| ----------------------- | ----------------------------- |
| `ROLLBACK`              | Cancela toda la transaction   |
| `ROLLBACK TO SAVEPOINT` | Regresa a un punto específico |

Visualmente:

```text
BEGIN
  ↓
Operation A
  ↓
SAVEPOINT
  ↓
Operation B
  ↓
Operation C
  ↓
ROLLBACK TO SAVEPOINT
  ↓
Operation B ❌
Operation C ❌
  ↓
Operation A ✅
```

💡 Un `SAVEPOINT` es especialmente útil cuando una transaction tiene varias etapas y quieres poder revertir solamente una parte.

---

# 5️⃣ 📦 TRANSACTION BLOCKS

Un **Transaction Block** es un bloque delimitado por:

```sql
BEGIN;
```

y:

```sql
COMMIT;
```

o:

```sql
ROLLBACK;
```

Por ejemplo:

```sql
BEGIN;

INSERT INTO orders (user_id, total)
VALUES (1, 500);

INSERT INTO order_items (order_id, product_id)
VALUES (10, 5);

COMMIT;
```

Las operaciones forman parte de una misma unidad lógica.

---

## 🧩 ¿Por qué son importantes?

Porque muchas operaciones de una aplicación dependen unas de otras.

Por ejemplo:

```text
Create Order
      ↓
Create Order Items
      ↓
Update Stock
      ↓
Create Payment Record
```

Queremos evitar:

```text
Order ✅
Order Items ✅
Stock ❌
Payment ❌
```

Una transaction permite diseñar el proceso como:

```text
BEGIN
  ↓
Create Order
  ↓
Create Order Items
  ↓
Update Stock
  ↓
Create Payment
  ↓
COMMIT
```

Si una operación crítica falla:

```text
BEGIN
  ↓
Create Order
  ↓
Create Items
  ↓
Update Stock ❌
  ↓
ROLLBACK
```

---

# 6️⃣ 🛡️ ACID IN POSTGRESQL

Las transactions están relacionadas con las propiedades **ACID**.

```text
A → Atomicity
C → Consistency
I → Isolation
D → Durability
```

---

## ⚛️ A — Atomicity

La transaction se trata como una unidad.

```text
Todo
 ↓
o
 ↓
Nada
```

Ejemplo:

```text
Operation A ✅
Operation B ❌
```

La transaction puede terminar:

```text
ROLLBACK
```

evitando dejar solamente una parte del trabajo.

### 🧠 Idea:

> **A transaction is all-or-nothing.**

---

# 🔗 C — Consistency

La transaction debe llevar la base de datos de un estado válido a otro estado válido, respetando las reglas y restricciones definidas.

Por ejemplo:

```sql
CHECK (balance >= 0)
```

Si una operación viola una restricción:

```text
Operation
   ↓
Constraint violation ❌
   ↓
Transaction error
```

La consistencia depende tanto del comportamiento de las transactions como de las **constraints** y reglas del sistema.

---

# 👥 I — Isolation

Las transactions concurrentes no deberían interferirse de manera incorrecta.

Imagina:

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

Ambas pueden estar ejecutándose al mismo tiempo.

PostgreSQL utiliza mecanismos de concurrencia para controlar cómo una transaction observa los cambios de otras transactions.

Aquí entra un concepto MUY importante:

```text
Isolation Levels
       +
      MVCC
       +
     Locks
```

---

# 💾 D — Durability

Una vez que una transaction ha sido confirmada:

```sql
COMMIT;
```

PostgreSQL garantiza la persistencia del cambio de acuerdo con sus mecanismos de recuperación y configuración.

Conceptualmente:

```text
COMMIT
  ↓
✅ Confirmado
  ↓
Persistencia
```

### 🧠 Idea:

> **Once committed, the transaction is durable.**

---

# 7️⃣ 🔐 ISOLATION LEVELS

Los **Isolation Levels** determinan cómo una transaction puede observar los cambios producidos por otras transactions concurrentes.

PostgreSQL soporta:

```text
READ COMMITTED
REPEATABLE READ
SERIALIZABLE
```

Además, PostgreSQL acepta `READ UNCOMMITTED`, pero internamente se comporta como `READ COMMITTED`.

---

## 🟢 READ COMMITTED

Es el nivel predeterminado de PostgreSQL.

```sql
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
```

Cada sentencia dentro de una transaction obtiene una visión basada en el estado disponible al comenzar esa sentencia.

Esto significa que dos `SELECT` realizados en la misma transaction pueden observar cambios que otras transactions hayan confirmado entre ambos `SELECT`.

Ejemplo conceptual:

```text
Transaction A
      │
      │ SELECT
      ▼
   value = 100

Transaction B
      │
      ├── UPDATE → 200
      └── COMMIT

Transaction A
      │
      │ SELECT nuevamente
      ▼
   value = 200
```

⚠️ Por eso **READ COMMITTED no garantiza que todos los SELECT de una transaction vean exactamente el mismo snapshot**.

---

# 🟡 REPEATABLE READ

En `REPEATABLE READ`, la transaction trabaja con una vista consistente de los datos durante toda la transaction.

```sql
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
```

Conceptualmente:

```text
Transaction A
     │
     ├── SELECT → 100
     │
     │   Transaction B
     │      ↓
     │   UPDATE → 200
     │      ↓
     │   COMMIT
     │
     └── SELECT → 100
```

La segunda consulta continúa utilizando una visión consistente de la transaction.

💡 Es útil cuando necesitas que varias consultas dentro de una misma transaction trabajen con una vista consistente de los datos.

---

# 🔴 SERIALIZABLE

Es el nivel de aislamiento más estricto.

```sql
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
```

La idea conceptual es:

```text
Transaction A
      +
Transaction B
      ↓
Resultado equivalente a
alguna ejecución serial
```

Es decir, PostgreSQL intenta garantizar que el resultado sea equivalente a ejecutar las transactions de manera serial.

⚠️ Esto puede provocar errores de **serialization failure** que la aplicación debe estar preparada para reintentar.

---

## 📊 COMPARACIÓN

| Isolation Level   | Idea principal                                    |
| ----------------- | ------------------------------------------------- |
| `READ COMMITTED`  | Cada sentencia obtiene su propia visión           |
| `REPEATABLE READ` | La transaction mantiene una visión consistente    |
| `SERIALIZABLE`    | Busca un resultado equivalente a ejecución serial |

🧠 **Tip importante:**

No memorices solamente los nombres.

Piensa:

```text
READ COMMITTED
      ↓
Más flexible

REPEATABLE READ
      ↓
Snapshot consistente

SERIALIZABLE
      ↓
Mayor aislamiento
```

Mayor aislamiento normalmente implica más restricciones sobre la concurrencia y puede aumentar la posibilidad de conflictos que la aplicación deba manejar.

---

# 8️⃣ ⚡ CONCURRENT TRANSACTIONS

Una de las razones principales por las que existen los isolation levels es la **concurrencia**.

En una aplicación real puedes tener:

```text
User A
   ↓
API
   ↓
Transaction A
```

al mismo tiempo que:

```text
User B
   ↓
API
   ↓
Transaction B
```

Ambas pueden acceder a los mismos datos.

Por ejemplo:

```text
             Database
             /      \
            /        \
Transaction A      Transaction B
```

El problema aparece cuando ambas quieren modificar o consultar datos relacionados.

---

## 💥 Ejemplo

Supongamos:

```text
Stock = 1
```

Dos usuarios intentan comprar el último producto:

```text
User A → compra
User B → compra
```

Ambas transactions podrían intentar modificar:

```text
stock = 1
```

Si el sistema no maneja correctamente la concurrencia, podríamos terminar con un resultado incorrecto.

Por eso PostgreSQL combina mecanismos como:

```text
MVCC
 +
Locks
 +
Isolation Levels
```

---

# 9️⃣ 👀 MVCC

🔥 **ESTE ES UNO DE LOS CONCEPTOS MÁS IMPORTANTES DE POSTGRESQL.**

MVCC significa:

> **Multi-Version Concurrency Control**

Es uno de los mecanismos fundamentales que PostgreSQL utiliza para manejar la concurrencia.

La idea principal es que PostgreSQL puede mantener **múltiples versiones de una fila** para que diferentes transactions puedan trabajar de manera concurrente sin que cada lectura tenga que esperar a todas las escrituras.

---

# 🧠 ¿POR QUÉ EXISTE MVCC?

Imagina:

```text
Transaction A
      │
      │ UPDATE
      ▼
    Row X
```

Mientras otra transaction quiere leer:

```text
Transaction B
      │
      │ SELECT
      ▼
    Row X
```

Con un sistema basado únicamente en bloquear todo:

```text
A escribe
 ↓
B espera
 ↓
A termina
 ↓
B puede leer
```

Esto puede reducir la concurrencia.

PostgreSQL utiliza MVCC para permitir un modelo más flexible.

Conceptualmente:

```text
                 Row
                  │
        ┌─────────┴─────────┐
        ▼                   ▼
   Version A            Version B
   anterior              nueva
        │                   │
        └────────┬──────────┘
                 ▼
        PostgreSQL determina
        qué versión puede ver
        cada transaction
```

---

# 🔄 MVCC Y SNAPSHOTS

Una transaction necesita saber:

> "¿Qué versión de los datos puedo ver?"

Para eso PostgreSQL utiliza una **snapshot** o visión de los datos.

Conceptualmente:

```text
Database
   │
   ├── Version 1
   ├── Version 2
   └── Version 3
```

Una transaction determinada puede ver una versión mientras otra transaction puede trabajar con otra visión compatible con las reglas de aislamiento.

Por eso:

```text
Transaction A
       │
       ▼
   Snapshot A
       │
       ▼
   Version visible
```

mientras:

```text
Transaction B
       │
       ▼
   Snapshot B
       │
       ▼
   Version visible
```

---

# 🔥 MVCC + READ COMMITTED

En `READ COMMITTED`:

```text
Transaction A
     │
     ├── SELECT
     │     ↓
     │   Snapshot 1
     │
     │
     ├── SELECT
     │     ↓
     │   Snapshot 2
     │
     ▼
   COMMIT
```

Cada sentencia obtiene su propia visión de los datos.

Por eso:

```text
SELECT #1 → value = 100

Otra transaction hace UPDATE + COMMIT

SELECT #2 → value = 200
```

Esto es completamente compatible con `READ COMMITTED`.

---

# 🔥 MVCC + REPEATABLE READ

En `REPEATABLE READ`, la transaction mantiene una visión consistente durante toda su ejecución.

Conceptualmente:

```text
Transaction A
      │
      ▼
  Snapshot A
      │
      ├── SELECT → 100
      │
      ├── SELECT → 100
      │
      └── SELECT → 100
```

Aunque otra transaction confirme cambios posteriormente, la transaction A mantiene su visión consistente según las reglas del isolation level.

---

# 🔒 MVCC NO SIGNIFICA "NO LOCKS"

⚠️ Este es un error muy común.

MVCC:

```text
❌ No significa que PostgreSQL nunca utilice locks.
```

PostgreSQL utiliza tanto:

```text
MVCC
 +
Locks
```

Cada mecanismo tiene una función diferente.

### MVCC

Ayuda principalmente a controlar **qué versión de los datos puede ver una transaction**.

### Locks

Ayudan a coordinar operaciones que necesitan evitar conflictos entre transactions.

---

# 🔒 TRANSACTIONS + LOCKS

Por ejemplo, puedes solicitar un lock explícito:

```sql
SELECT *
FROM accounts
WHERE id = 1
FOR UPDATE;
```

Esto indica que quieres bloquear la fila seleccionada para determinadas operaciones concurrentes.

Un patrón común puede ser:

```sql
BEGIN;

SELECT balance
FROM accounts
WHERE id = 1
FOR UPDATE;

UPDATE accounts
SET balance = balance - 200
WHERE id = 1;

COMMIT;
```

Conceptualmente:

```text
BEGIN
  ↓
Lock row
  ↓
Read
  ↓
Update
  ↓
COMMIT
  ↓
Release lock
```

💡 Esto puede ser útil cuando necesitas coordinar cuidadosamente una operación de lectura + modificación.

---

# 🧩 EJEMPLO COMPLETO

Supongamos que tenemos:

```text
products

id | name     | stock
---|----------|------
1  | Keyboard | 5
```

Queremos vender un producto.

Una transaction podría hacer:

```sql
BEGIN;

SELECT stock
FROM products
WHERE id = 1
FOR UPDATE;

UPDATE products
SET stock = stock - 1
WHERE id = 1;

COMMIT;
```

El flujo sería:

```text
BEGIN
  ↓
SELECT ... FOR UPDATE
  ↓
Fila bloqueada para la operación correspondiente
  ↓
Leer stock
  ↓
Reducir stock
  ↓
COMMIT
  ↓
Transaction finalizada
```

Esto es mucho más seguro que simplemente hacer:

```sql
SELECT stock ...
```

y posteriormente:

```sql
UPDATE products ...
```

sin considerar la concurrencia.

---

# ⚠️ ERRORES COMUNES

## ❌ 1. Pensar que COMMIT es opcional

Si necesitas que varias operaciones formen una unidad lógica, debes controlar correctamente cuándo se confirma la transaction.

---

## ❌ 2. Usar ROLLBACK como si fuera un DELETE

`ROLLBACK` no significa:

```text
"borrar datos"
```

Significa:

```text
"deshacer los cambios realizados
en la transaction actual"
```

---

## ❌ 3. Pensar que MVCC elimina los locks

Incorrecto.

```text
MVCC ≠ No Locks
```

PostgreSQL utiliza ambos mecanismos.

---

## ❌ 4. Pensar que READ COMMITTED mantiene el mismo snapshot

No.

En PostgreSQL:

```text
READ COMMITTED
     ↓
Cada sentencia obtiene su propia visión
```

---

## ❌ 5. Pensar que SERIALIZABLE nunca falla

Tampoco.

Una transaction `SERIALIZABLE` puede abortarse debido a conflictos de serialización.

La aplicación debe estar preparada para **reintentar la transaction** cuando corresponda.

---

# 🧠 MAPA MENTAL

Todo este tema se puede resumir así:

```text
                    TRANSACTION
                         │
          ┌──────────────┼──────────────┐
          ▼              ▼              ▼
        BEGIN         COMMIT         ROLLBACK
          │
          ▼
      SAVEPOINT
          │
          ▼
         ACID
          │
    ┌─────┼─────┐
    ▼     ▼     ▼
 Atomic  Isolation Durability
          │
          ▼
    Isolation Levels
          │
    ┌─────┼─────────────┐
    ▼     ▼             ▼
 READ   REPEATABLE   SERIALIZABLE
 COMMITTED   READ
          │
          ▼
         MVCC
          │
          ▼
 Multiple Row Versions
          │
          ▼
      Snapshots
          │
          ▼
   Concurrent Access
          │
          ▼
        Locks
```

---

# 💡 TIPS IMPORTANTES

### 🧠 Tip #1

No confundas:

```text
Transaction
```

con:

```text
Query
```

Una transaction puede contener múltiples queries:

```text
Transaction
   ├── Query 1
   ├── Query 2
   ├── Query 3
   └── Query 4
```

---

### 🧠 Tip #2

En backend, una transaction suele representar una **operación de negocio que necesita consistencia**.

Por ejemplo:

```text
Crear pedido
    ↓
Reducir stock
    ↓
Registrar detalles
```

Puede tener sentido que todo eso forme parte de una misma transaction.

---

### 🧠 Tip #3

Cuando estudies ORMs o frameworks backend, volverás a ver:

```text
transaction()
```

porque el backend necesita controlar estas operaciones.

Por ejemplo, conceptualmente:

```text
API Request
     ↓
Service
     ↓
BEGIN
     ↓
Database operations
     ↓
COMMIT / ROLLBACK
```

---

### 🧠 Tip #4

**MVCC es fundamental para entender PostgreSQL.**

No necesitas memorizar todavía todos los detalles internos.

Primero asegúrate de comprender:

```text
MVCC
 ↓
Multiple versions
 ↓
Transactions can have different views
 ↓
Better concurrency
 ↓
Isolation + snapshots
```

---

# 🎯 IDEA PRINCIPAL

> **Una PostgreSQL Transaction agrupa varias operaciones en una unidad lógica que puede confirmarse mediante `COMMIT` o deshacerse mediante `ROLLBACK`.**

Y alrededor de ella aparecen:

```text
Transactions
      ↓
     ACID
      ↓
Isolation Levels
      ↓
Concurrency
      ↓
     MVCC
      ↓
Snapshots + Row Versions
      ↓
Locks
```

🔥 Si hay **tres cosas que quiero que recuerdes de este tema**, son:

```text
1️⃣ BEGIN / COMMIT / ROLLBACK
   → Controlan la transaction.

2️⃣ Isolation Levels
   → Determinan cómo las transactions
     concurrentes pueden observar los datos.

3️⃣ MVCC
   → PostgreSQL utiliza múltiples versiones
     de filas para manejar la concurrencia
     de manera eficiente.
```

> 🧠 **La idea clave de MVCC:** diferentes transactions pueden trabajar concurrentemente y PostgreSQL determina qué versión de una fila es visible para cada una según las reglas de visibilidad y aislamiento.
