# 📄 DEADLOCKS

Un **Deadlock** ocurre cuando dos o más transactions quedan esperando indefinidamente por recursos que están bloqueados por las otras transactions.

---

# 1️⃣ 💀 ¿QUÉ ES UN DEADLOCK?

Un Deadlock ocurre cuando existe una **dependencia circular** entre transactions.

Por ejemplo:

```text id="w6k1ep"
Transaction A
    ↓
🔒 Lock A
    ↓
espera Lock B
```

Mientras:

```text id="5a7v9n"
Transaction B
    ↓
🔒 Lock B
    ↓
espera Lock A
```

Entonces:

```text id="w6z4qj"
A → espera B
B → espera A

      💀
   DEADLOCK
```

Ninguna puede continuar porque cada una necesita un recurso que la otra está reteniendo.

---

# 2️⃣ ⚙️ CÓMO OCURRE

Supongamos que existen dos recursos:

```text id="r0px8v"
Data A
Data B
```

Transaction A obtiene primero A:

```text id="l7r2js"
Transaction A
      ↓
🔒 Lock A
```

Transaction B obtiene primero B:

```text id="q5s8dc"
Transaction B
      ↓
🔒 Lock B
```

Después A intenta obtener B:

```text id="6b7x9m"
Transaction A
      ↓
🔒 Lock A
      ↓
⏳ espera Lock B
```

Pero B intenta obtener A:

```text id="8j1c3k"
Transaction B
      ↓
🔒 Lock B
      ↓
⏳ espera Lock A
```

Resultado:

```text id="x9n4mv"
A → espera B
B → espera A
```

💀 **Deadlock**

---

# 3️⃣ 🔄 DEADLOCK ENTRE TRANSACTIONS

Los Deadlocks normalmente involucran múltiples transactions que mantienen locks mientras esperan otros locks.

Conceptualmente:

```text id="n5x2qk"
Transaction A
    │
    ├── 🔒 Resource 1
    │
    └── ⏳ Resource 2
             ↑
             │
    ┌────────┘
    │
Transaction B
    │
    ├── 🔒 Resource 2
    │
    └── ⏳ Resource 1
```

Cada transaction posee un recurso que la otra necesita.

---

# 4️⃣ 🔢 LOCK ORDERING

**Lock Ordering** consiste en acceder a los recursos siguiendo siempre un orden consistente.

Por ejemplo, decidir:

```text id="u2k6hz"
Siempre:

Resource A
   ↓
Resource B
```

Transaction A:

```text id="j4m8pq"
🔒 A
 ↓
🔒 B
```

Transaction B también:

```text id="f7w3ls"
🔒 A
 ↓
🔒 B
```

En lugar de que una haga:

```text id="m3r8tc"
A → B
```

y otra:

```text id="v6q1dy"
B → A
```

Mantener un orden consistente ayuda a evitar dependencias circulares.

---

# 5️⃣ 🔎 DEADLOCK DETECTION

Las databases pueden detectar que existe un Deadlock.

Conceptualmente:

```text id="c8k2wf"
Transaction A
    ↓
⏳ espera B

Transaction B
    ↓
⏳ espera A

        ↓
   Deadlock Detection
        ↓
      💀
```

Cuando la database detecta el ciclo, puede intervenir para romperlo.

# 6️⃣ 🛡️ DEADLOCK PREVENTION

La **Deadlock Prevention** busca evitar que el Deadlock ocurra.

Una estrategia importante es mantener un orden consistente al adquirir locks:

```text
A → B
A → B
A → B
```

en lugar de:

```text
A → B
B → A
```

También puede ayudar reducir el tiempo durante el cual una transaction mantiene locks.

---

# 7️⃣ 🔄 DEADLOCK RECOVERY

Cuando ocurre un Deadlock, la database necesita romper el ciclo.

Conceptualmente:

```text
A → espera B
B → espera A
       ↓
    DEADLOCK
       ↓
Rollback de una transaction
       ↓
Locks liberados
       ↓
La otra transaction continúa
```

Una transaction puede ser abortada mediante un rollback para liberar los recursos que estaba reteniendo.

---

# 8️⃣ 🔁 RETRY STRATEGIES

Después de que una transaction falla debido a un Deadlock, la aplicación puede intentar ejecutar nuevamente la operación.

Conceptualmente:

```text
Transaction
    ↓
Deadlock
    ↓
Rollback
    ↓
Retry
    ↓
Transaction
```

La estrategia de retry debe utilizarse cuidadosamente y normalmente debe tener un límite de intentos.

---

# 9️⃣ ⏱️ TRANSACTION TIMEOUT

Un **Transaction Timeout** establece un límite de tiempo para una operación o transaction.

Conceptualmente:

```text
Transaction
    ↓
⏳ Waiting
    ↓
Timeout
    ↓
Rollback
```

Esto evita que una transaction permanezca esperando indefinidamente.

---

# 🆚 🔒 LOCK VS 💀 DEADLOCK

Es muy importante diferenciarlos.

### 🔒 LOCK

Un lock puede ser completamente normal:

```text
Transaction A
    ↓
🔒 Data
```

Otra transaction puede esperar:

```text
Transaction B
    ↓
⏳ Waiting
```

Cuando A termina:

```text
COMMIT
   ↓
🔓
   ↓
B continúa
```

Eso **no es un Deadlock**.

---

### 💀 DEADLOCK

Existe una dependencia circular:

```text
Transaction A
    ↓
🔒 A
    ↓
⏳ espera B

Transaction B
    ↓
🔒 B
    ↓
⏳ espera A
```

Entonces:

```text
A → espera B
B → espera A
      ↓
     💀
  DEADLOCK
```

La diferencia fundamental es:

> **Un lock puede provocar una espera normal; un Deadlock ocurre cuando las transactions se esperan mutuamente formando una dependencia circular.**

---

# 🧠 CÓMO SE CONECTA TODO

Ahora la carpeta completa queda así:

```text
📦 Transactions
       ↓
¿Cómo garantizo una operación completa?
       ↓
🧠 ACID
       ↓
¿Qué propiedades debe cumplir?
       ↓
👥 Concurrency
       ↓
¿Qué pasa si hay varias operaciones al mismo tiempo?
       ↓
🔒 Isolation Levels
       ↓
¿Cuánto pueden interferirse?
       ↓
🔐 Locks
       ↓
¿Cómo controlo el acceso?
       ↓
🏎️ Race Conditions
       ↓
¿Qué pasa si las operaciones compiten?
       ↓
💀 Deadlocks
       ↓
¿Qué pasa si se bloquean mutuamente?
```

La idea final:

```text
Concurrency
    ↓
Locks
    ↓
Conflicts
    ↓
Deadlocks
    ↓
Detection / Prevention / Recovery
```

> 🔥 **Un Deadlock no es simplemente que una transaction esté esperando. Es una espera circular donde dos o más transactions necesitan recursos que están bloqueados entre sí.\**
