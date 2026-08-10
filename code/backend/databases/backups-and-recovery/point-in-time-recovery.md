# 📄 04 - Point-in-Time Recovery

## 📑 Índice

- [📄 04 - Point-in-Time Recovery](#-04---point-in-time-recovery)
  - [📑 Índice](#-índice)
  - [🧠 ¿Qué es Point-in-Time Recovery?](#-qué-es-point-in-time-recovery)
  - [1️⃣ ¿Por qué existe?](#1️⃣-por-qué-existe)
  - [2️⃣ Restore a un momento específico](#2️⃣-restore-a-un-momento-específico)
  - [3️⃣ Backups + Transaction Logs / WAL](#3️⃣-backups--transaction-logs--wal)
  - [4️⃣ Recuperación antes de un error](#4️⃣-recuperación-antes-de-un-error)
- [🔥 Concepto fundamental](#-concepto-fundamental)

## 🧠 ¿Qué es Point-in-Time Recovery?

**Point-in-Time Recovery (PITR)** es una técnica que permite **restaurar una database a un momento específico del pasado**, en lugar de únicamente restaurar el estado del último backup.

Es especialmente importante en sistemas como **PostgreSQL**.

---

## 1️⃣ ¿Por qué existe?

Un backup por sí solo puede dejarte con una pérdida de datos entre el momento en que se hizo el backup y el momento del desastre.

Por ejemplo:

```text
10:00 → Backup
11:00 → Datos correctos
12:00 → Datos correctos
13:00 → ❌ Error accidental
14:00 → Descubrimos el problema
```

Si solo tienes el backup de las 10:00:

```text
Restore
   ↓
Estado de las 10:00
```

Perderías los cambios realizados entre las 10:00 y las 13:00.

Con PITR puedes recuperar la database hasta un momento específico:

```text
Restore
   ↓
Backup
   +
WAL / Transaction Logs
   ↓
Estado de la Database
   ↓
12:59
```

---

## 2️⃣ Restore a un momento específico

La idea fundamental es:

```text
Backup
   ↓
Aplicar cambios posteriores
   ↓
Elegir momento objetivo
   ↓
Database recuperada
```

Por ejemplo:

```text
10:00 → Backup
11:00 → Cambios
12:00 → Cambios
12:59 → ✅ Estado deseado
13:00 → ❌ Error
```

Puedes intentar recuperar la database hasta:

```text
12:59
```

en lugar de restaurar únicamente el backup de las 10:00.

---

## 3️⃣ Backups + Transaction Logs / WAL

PITR combina principalmente:

```text
Full Backup
     +
Transaction Logs / WAL
     ↓
Point-in-Time Recovery
```

En PostgreSQL, **WAL (Write-Ahead Logging)** registra los cambios realizados en la database.

Esto permite reconstruir el estado de la database hasta un momento determinado después de restaurar un backup base.

---

## 4️⃣ Recuperación antes de un error

Uno de los casos más importantes es recuperar la database **justo antes de una operación incorrecta**.

Por ejemplo:

```text
12:00 → Estado correcto
12:30 → Estado correcto
12:45 → ❌ DELETE accidental
13:00 → Descubrimos el problema
```

Con PITR puedes intentar recuperar la database hasta:

```text
12:44:59
```

De esta manera, el estado incorrecto ocurrido después de ese momento no forma parte del estado recuperado.

---

# 🔥 Concepto fundamental

Debes recordar:

```text
Backup
   ↓
Copia de la Database
```

Mientras que:

```text
PITR
   ↓
Backup
   +
WAL / Transaction Logs
   ↓
Recuperar un momento específico
```

> **PITR permite recuperar una database hasta un punto concreto en el tiempo, reduciendo la pérdida de datos después de un fallo o error accidental.**
