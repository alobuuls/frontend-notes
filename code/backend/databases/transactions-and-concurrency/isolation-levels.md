# 📄 ISOLATION LEVELS

Los **Isolation Levels** determinan cuánto puede una transaction **ver de los cambios realizados por otras transactions concurrentes**.

Son parte fundamental de **Concurrency** y están directamente relacionados con **Isolation**, una de las propiedades de ACID.

---

## 📑 ÍNDICE 

- [📄 ISOLATION LEVELS](#-isolation-levels)
  - [📑 ÍNDICE](#-índice)
  - [1️⃣ 🔒 ¿QUÉ ES TRANSACTION ISOLATION?](#1️⃣--qué-es-transaction-isolation)
  - [2️⃣ 🤔 ¿POR QUÉ NECESITAMOS ISOLATION LEVELS?](#2️⃣--por-qué-necesitamos-isolation-levels)
    - [Menor aislamiento](#menor-aislamiento)
    - [Mayor aislamiento](#mayor-aislamiento)
  - [3️⃣ 🟢 READ UNCOMMITTED](#3️⃣--read-uncommitted)
  - [4️⃣ 🟡 READ COMMITTED](#4️⃣--read-committed)
  - [5️⃣ 🟠 REPEATABLE READ](#5️⃣--repeatable-read)
  - [6️⃣ 🔴 SERIALIZABLE](#6️⃣--serializable)
  - [7️⃣ 🚫 DIRTY READS](#7️⃣--dirty-reads)
  - [8️⃣ 🔄 NON-REPEATABLE READS](#8️⃣--non-repeatable-reads)
  - [9️⃣ 👻 PHANTOM READS](#9️⃣--phantom-reads)
  - [🔟 ⚡ ISOLATION VS PERFORMANCE](#--isolation-vs-performance)
  - [📊 NIVELES DE AISLAMIENTO](#-niveles-de-aislamiento)
  - [🧠 CONEXIÓN CON LO ANTERIOR](#-conexión-con-lo-anterior)

## 1️⃣ 🔒 ¿QUÉ ES TRANSACTION ISOLATION?

**Transaction Isolation** es el mecanismo que controla cómo interactúan las transactions cuando se ejecutan simultáneamente.

```text
Transaction A
      │
      ▼
   Database
      ▲
      │
Transaction B
```

Ambas pueden estar trabajando al mismo tiempo sobre los mismos datos.

El aislamiento determina qué puede observar una transaction de la otra.

---

## 2️⃣ 🤔 ¿POR QUÉ NECESITAMOS ISOLATION LEVELS?

Porque las transactions concurrentes pueden generar problemas como:

```text
❌ Dirty Reads
❌ Non-Repeatable Reads
❌ Phantom Reads
```

Los **Isolation Levels** permiten elegir cuánto aislamiento queremos.

### Menor aislamiento

```text
Menor aislamiento
      ↓
Más concurrencia
      ↓
Más posibles anomalías
```

### Mayor aislamiento

```text
Mayor aislamiento
      ↓
Más protección
      ↓
Más restricciones
```

---

## 3️⃣ 🟢 READ UNCOMMITTED

**READ UNCOMMITTED** es el nivel con menor aislamiento.

Una transaction puede llegar a leer cambios realizados por otra transaction que todavía **no ha hecho** **`COMMIT`**.

Por ejemplo:

```text
Transaction A
   ↓
UPDATE
   ↓
Cambio no confirmado
```

Mientras:

```text
Transaction B
   ↓
READ
   ↓
Puede ver el cambio
```

Si A hace:

```text
ROLLBACK
```

el cambio desaparece.

Esto permite:

```text
🚨 Dirty Reads
```

Es el nivel con menor aislamiento.

---

## 4️⃣ 🟡 READ COMMITTED

**READ COMMITTED** permite que una transaction solamente vea datos que han sido confirmados.

Conceptualmente:

```text
Transaction A
   ↓
UPDATE
   ↓
❌ No COMMIT
```

Transaction B:

```text
READ
   ↓
No ve el cambio no confirmado
```

Después:

```text
Transaction A
   ↓
COMMIT
```

Ahora una nueva lectura puede observar el cambio.

Este nivel evita los **Dirty Reads**.

Sin embargo, una misma transaction puede obtener valores diferentes si otra transaction modifica y confirma los datos entre dos lecturas.

Por eso puede existir:

```text
Non-Repeatable Read
```

---

## 5️⃣ 🟠 REPEATABLE READ

**REPEATABLE READ** proporciona un nivel mayor de aislamiento.

La idea principal es que una transaction pueda volver a leer los mismos datos y obtener resultados consistentes durante su ejecución.

Conceptualmente:

```text
Transaction A

READ
 ↓
Dato
 ↓
READ nuevamente
 ↓
Mismo resultado
```

Mientras otra transaction intenta modificar los datos:

```text
Transaction B
   ↓
UPDATE
   ↓
COMMIT
```

la transaction A mantiene una visión consistente de los datos que está leyendo.

Este nivel evita los **Non-Repeatable Reads**.

## 6️⃣ 🔴 SERIALIZABLE

**SERIALIZABLE** es el nivel de aislamiento más alto de los principales niveles.

Busca que las transactions concurrentes produzcan un resultado equivalente a ejecutarlas **una después de otra**.

Conceptualmente:

```text
Transaction A
      ↓
      ↓
      ↓
Transaction B
```

se comportaría conceptualmente como:

```text
Transaction A
      ↓
   termina
      ↓
Transaction B
```

o:

```text
Transaction B
      ↓
   termina
      ↓
Transaction A
```

El objetivo es evitar las anomalías de concurrencia mediante un aislamiento muy estricto.

Sin embargo, esto puede requerir más control sobre las transactions y reducir la concurrencia.

---

## 7️⃣ 🚫 DIRTY READS

Un **Dirty Read** ocurre cuando una transaction lee cambios que otra transaction todavía no ha confirmado.

```text
A → UPDATE
      ↓
  no COMMIT
      ↓
B → READ
      ↓
🚨 Dirty Read
```

En términos generales:

```text
READ UNCOMMITTED
      ↓
Puede permitir Dirty Reads
```

Mientras los niveles superiores buscan evitar este comportamiento.

---

## 8️⃣ 🔄 NON-REPEATABLE READS

Ocurre cuando una transaction lee el mismo registro dos veces y obtiene valores diferentes porque otra transaction lo modificó y confirmó entre ambas lecturas.

```text
Transaction A

READ → 100
```

Después:

```text
Transaction B

UPDATE → 50
COMMIT
```

A vuelve a leer:

```text
READ → 50
```

Resultado:

```text
Primera lectura → 100
Segunda lectura → 50
```

---

## 9️⃣ 👻 PHANTOM READS

Un **Phantom Read** ocurre cuando una transaction vuelve a ejecutar una consulta y encuentra nuevas filas o deja de encontrar filas debido a cambios realizados por otra transaction.

Por ejemplo:

```text
Transaction A

SELECT *
FROM users
WHERE age >= 18;

→ 10 rows
```

Otra transaction:

```text
Transaction B

INSERT user
COMMIT
```

A vuelve a ejecutar:

```text
SELECT *
FROM users
WHERE age >= 18;

→ 11 rows
```

La nueva fila es el **phantom**.

---

## 🔟 ⚡ ISOLATION VS PERFORMANCE

Aquí está uno de los conceptos más importantes.

En general:

```text
Más aislamiento
      ↑
      │
      │ protección
      │
      ↓
Más restricciones
```

Y:

```text
Más restricciones
      ↓
Menor concurrencia potencial
      ↓
Mayor coste
```

Por eso no siempre conviene utilizar el nivel máximo.

La elección depende de las necesidades de la aplicación.

---

## 📊 NIVELES DE AISLAMIENTO

Conceptualmente:

```text
                 MÁS AISLAMIENTO
                      ↑
                      │
READ UNCOMMITTED      │
READ COMMITTED        │
REPEATABLE READ       │
SERIALIZABLE          │
                      ↓
                 MÁS RESTRICCIÓN
```

Una forma sencilla de recordarlos:

| Nivel                   | Aislamiento   |
| ----------------------- | ------------- |
| 🟢 **READ UNCOMMITTED** | Mínimo        |
| 🟡 **READ COMMITTED**   | Mayor         |
| 🟠 **REPEATABLE READ**  | Mayor todavía |
| 🔴 **SERIALIZABLE**     | Máximo        |

---

## 🧠 CONEXIÓN CON LO ANTERIOR

Ahora puedes conectar:

```text
Transactions
     ↓
ACID
     ↓
Isolation
     ↓
Concurrency
     ↓
Isolation Levels
```

Y las anomalías:

```text
Concurrent Transactions
        ↓
   ┌────┼─────────────┐
   ↓    ↓             ↓
Dirty  Non-Repeatable  Phantom
Read      Read          Read
```

La idea principal:

> 🔥 **Los Isolation Levels permiten controlar cuánto aislamiento existe entre transactions concurrentes. Mayor aislamiento normalmente implica más protección, pero puede reducir concurrencia y performance.**
