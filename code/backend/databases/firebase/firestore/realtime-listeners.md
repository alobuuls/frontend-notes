# 📄 05 - Realtime Listeners

## 🔥 ¿Qué son los Realtime Listeners?

Los **Realtime Listeners** permiten que una aplicación permanezca escuchando los cambios que ocurren en los datos de Firestore.

A diferencia de una consulta normal, que obtiene los datos una vez, un listener mantiene una **suscripción activa** y recibe actualizaciones cuando los datos cambian.

---

## 📑 Índice

- [📄 05 - Realtime Listeners](#-05---realtime-listeners)
  - [🔥 ¿Qué son los Realtime Listeners?](#-qué-son-los-realtime-listeners)
  - [📑 Índice](#-índice)
  - [1️⃣ `onSnapshot`](#1️⃣-onsnapshot)
  - [2️⃣ Initial Snapshot](#2️⃣-initial-snapshot)
  - [3️⃣ Document Changes](#3️⃣-document-changes)
  - [4️⃣ Listener Lifecycle](#4️⃣-listener-lifecycle)
  - [5️⃣ Unsubscribe](#5️⃣-unsubscribe)
  - [6️⃣ Realtime UI Updates](#6️⃣-realtime-ui-updates)
  - [7️⃣ Listener vs Query normal](#7️⃣-listener-vs-query-normal)
    - [🔎 Query normal](#-query-normal)
    - [🔄 Realtime Listener](#-realtime-listener)
  - [🔗 Relación con Angular](#-relación-con-angular)

## 1️⃣ `onSnapshot`

`onSnapshot` permite crear un listener sobre un documento o una consulta.

```text
Angular
   │
   │ listener
   ▼
Firestore
   │
   │ data changes
   ▼
Listener
   │
   ▼
Angular
   │
   ▼
UI updates
```

Cuando se crea el listener:

```text
Subscribe
   ↓
Receive initial data
   ↓
Listen for changes
   ↓
Receive updates
```

---

## 2️⃣ Initial Snapshot

Cuando creas un listener, Firestore primero entrega un **snapshot inicial** con los datos actuales.

Después de eso, el listener permanece activo esperando cambios.

```text
Listener
   ↓
Initial Snapshot
   ↓
Current Data
   ↓
Listen...
```

---

## 3️⃣ Document Changes

Cuando los documentos cambian, Firestore puede informar qué ocurrió.

| Cambio          | Significado                                          |
| --------------- | ---------------------------------------------------- |
| ➕ **Added**     | Un documento nuevo aparece en los resultados.        |
| ✏️ **Modified** | Un documento existente cambia.                       |
| 🗑️ **Removed** | Un documento deja de formar parte de los resultados. |

Por ejemplo:

```text
users
   ↓
Listener
   ↓
┌───────────────┐
│ Added         │
│ Modified      │
│ Removed       │
└───────────────┘
```

---

## 4️⃣ Listener Lifecycle

Un listener tiene un ciclo de vida:

```text
Subscribe
    ↓
Initial Data
    ↓
Listen for Changes
    ↓
Receive Updates
    ↓
Unsubscribe
```

Es importante entender que:

> **Un listener permanece activo hasta que se cancela.**

Por eso debes gestionar correctamente su ciclo de vida.

---

## 5️⃣ Unsubscribe

Cuando ya no necesitas escuchar los cambios, debes cancelar la suscripción.

```text
Listener
   ↓
Unsubscribe
   ↓
Listener stopped
```

Esto es especialmente importante en aplicaciones frontend para evitar listeners innecesarios.

---

## 6️⃣ Realtime UI Updates

Una de las principales ventajas es que la interfaz puede actualizarse automáticamente cuando cambian los datos.

```text
Firestore
    ↓
Data changes
    ↓
Realtime Listener
    ↓
Angular
    ↓
UI updates
```

Por ejemplo:

```text
User A
   ↓
Updates document
   ↓
Firestore
   ↓
Listener
   ↓
User B
   ↓
UI updates
```

Esto permite construir interfaces donde varios usuarios pueden observar cambios prácticamente en tiempo real.

---

## 7️⃣ Listener vs Query normal

| 🔎 Query normal              | 🔄 Realtime Listener      |
| ---------------------------- | ------------------------- |
| Obtiene los datos y termina. | Mantiene una suscripción. |

### 🔎 Query normal

```text
Request
   ↓
Firestore
   ↓
Data
   ↓
Done
```

### 🔄 Realtime Listener

```text
Subscribe
   ↓
Initial Data
   ↓
Listen
   ↓
Change
   ↓
Update
   ↓
Listen
   ↓
Change
   ↓
Update
```

La diferencia fundamental es:

> **Una query obtiene datos; un listener permanece escuchando cambios en esos datos.**

---

## 🔗 Relación con Angular

En Angular puedes conectar estos listeners con tu arquitectura reactiva:

```text
Firestore
   ↓
Realtime Listener
   ↓
Observable / Signal
   ↓
Angular Service
   ↓
Component
   ↓
UI
```

Así, los cambios de Firestore pueden propagarse automáticamente hacia la interfaz.
