# 📄 01 - Realtime Database

## 📑 Índice

- [� 01 - Realtime Database](#-01---realtime-database)
  - [📑 Índice](#-índice)
  - [🔥 ¿Qué es Realtime Database?](#-qué-es-realtime-database)
  - [🌳 JSON Tree](#-json-tree)
  - [📍 Nodes](#-nodes)
  - [🛣️ Paths](#️-paths)
- [📖 Lectura de datos](#-lectura-de-datos)
- [✏️ Escritura de datos](#️-escritura-de-datos)
- [🔄 Actualización de datos](#-actualización-de-datos)
- [🗑️ Eliminación de datos](#️-eliminación-de-datos)
- [👂 Listeners](#-listeners)
- [📡 Realtime Synchronization](#-realtime-synchronization)
- [📱 Offline Capabilities](#-offline-capabilities)
- [🆚 Firestore vs Realtime Database](#-firestore-vs-realtime-database)
- [⭐ Concepto fundamental](#-concepto-fundamental)
## 🔥 ¿Qué es Realtime Database?

**Firebase Realtime Database** es una base de datos **NoSQL** de Firebase diseñada para sincronizar datos entre clientes en tiempo real.

Su modelo está basado en un **árbol JSON**:

```text
Realtime Database
        ↓
    JSON Tree
        ↓
      Nodes
        ↓
      Values
```

---

## 🌳 JSON Tree

A diferencia de Firestore, que utiliza **Collections y Documents**, Realtime Database organiza los datos como un único árbol JSON.

Por ejemplo:

```text
users
 ├── user_001
 │    ├── name: "Alo"
 │    └── age: 25
 │
 └── user_002
      ├── name: "Luis"
      └── age: 30
```

Cada elemento del árbol representa un **node**.

---

## 📍 Nodes

Los **nodes** son las unidades que forman el árbol de datos.

```text
users
   ↓
user_001
   ↓
name
   ↓
"Alo"
```

Un node puede contener otros nodes o un valor.

---

## 🛣️ Paths

Los **paths** indican la ubicación de los datos dentro del árbol.

Por ejemplo:

```text
users/user_001/name
```

Conceptualmente:

```text
users
  ↓
user_001
  ↓
name
```

El path permite localizar un dato concreto dentro del JSON Tree.

---

# 📖 Lectura de datos

Puedes leer información ubicada en un determinado path.

```text
Path
  ↓
Realtime Database
  ↓
Data
```

Por ejemplo:

```text
users/user_001
```

permite acceder a los datos correspondientes a ese usuario.

---

# ✏️ Escritura de datos

La escritura permite agregar datos al árbol.

```text
Application
    ↓
Write
    ↓
Path
    ↓
Realtime Database
```

---

# 🔄 Actualización de datos

Puedes modificar datos existentes dentro de un path.

```text
Existing Data
      ↓
   Update
      ↓
Realtime Database
```

---

# 🗑️ Eliminación de datos

También puedes eliminar datos de un determinado path.

```text
Path
  ↓
Delete
  ↓
Realtime Database
```

---

# 👂 Listeners

Realtime Database permite escuchar cambios en los datos.

```text
Application
      ↓
   Listener
      ↓
Realtime Database
      ↓
Data changes
      ↓
Listener
      ↓
Application
```

La característica importante es que los cambios pueden llegar automáticamente a los clientes que están escuchando esos datos.

---

# 📡 Realtime Synchronization

El concepto central de Realtime Database es la **sincronización en tiempo real**.

```text
User A
  ↓
Realtime Database
  ↓
Data changes
  ↓
User B
  ↓
UI updates
```

Por ejemplo, si User A modifica un dato, los clientes que estén escuchando ese dato pueden recibir la actualización sin tener que realizar manualmente otra consulta.

---

# 📱 Offline Capabilities

Realtime Database también proporciona capacidades **offline**.

Conceptualmente:

```text
Application
    ↓
Offline
    ↓
Local data
    ↓
Connection restored
    ↓
Synchronization
```

Esto permite que determinadas operaciones y datos puedan continuar funcionando cuando el cliente pierde temporalmente la conexión.

---

# 🆚 Firestore vs Realtime Database

La diferencia conceptual principal está en el **modelo de datos**:

| Firestore   | Realtime Database |
| ----------- | ----------------- |
| Collections | JSON Tree         |
| Documents   | Nodes             |
| Fields      | Paths             |
|             | Values            |

No son simplemente dos formas diferentes de llamar a las mismas estructuras: **utilizan modelos de datos diferentes**.

---

# ⭐ Concepto fundamental

Debes poder explicar:

> **Realtime Database es una base de datos NoSQL basada en un árbol JSON que sincroniza los datos entre clientes en tiempo real.**

Y recordar su modelo mental:

```text
Realtime Database
        ↓
    JSON Tree
        ↓
      Nodes
        ↓
      Paths
        ↓
      Values
```
