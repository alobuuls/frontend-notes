# 🌊 05 — Observables and WebSockets

> 💡 **¿Cómo manejamos mensajes WebSocket usando programación reactiva?**

Un WebSocket genera información continuamente, por lo que puede ser tratado como un **stream de datos** utilizando programación reactiva con RxJS.

---

## 📚 Índice

- [🌊 05 — Observables and WebSockets](#-05--observables-and-websockets)
  - [📚 Índice](#-índice)
- [1️⃣ What are Observables? 🌊](#1️⃣-what-are-observables-)
    - [Ejemplo](#ejemplo)
- [2️⃣ WebSocket as a Data Stream 🔌](#2️⃣-websocket-as-a-data-stream-)
    - [Ejemplo](#ejemplo-1)
- [3️⃣ RxJS Integration ⚡](#3️⃣-rxjs-integration-)
    - [🔄 Transformación](#-transformación)
- [4️⃣ Subject 📡](#4️⃣-subject-)
    - [Ejemplo conceptual](#ejemplo-conceptual)
- [5️⃣ BehaviorSubject 🔄](#5️⃣-behaviorsubject-)
    - [Características](#características)
    - [🔄 Flujo](#-flujo)
- [6️⃣ fromEvent() 🎯](#6️⃣-fromevent-)
    - [Ejemplo conceptual](#ejemplo-conceptual-1)
    - [🔄 Transforma](#-transforma)
- [7️⃣ Mapping Messages 🔄](#7️⃣-mapping-messages-)
    - [🔄 Flujo](#-flujo-1)
    - [Ejemplo](#ejemplo-2)
- [8️⃣ Filtering Events 🔎](#8️⃣-filtering-events-)
    - [🔎 Flujo](#-flujo-2)
    - [Ejemplo](#ejemplo-3)
- [9️⃣ Subscriptions 📥](#9️⃣-subscriptions-)
    - [Ejemplo conceptual](#ejemplo-conceptual-2)
    - [🔄 Flujo](#-flujo-3)
- [🔟 Unsubscribe Management 🧹](#-unsubscribe-management-)
    - [❌ Problema](#-problema)
    - [✅ Solución](#-solución)
- [🔄 WebSocket Reactive Flow](#-websocket-reactive-flow)
- [🛠️ Ejemplo conceptual](#️-ejemplo-conceptual)
- [⚙️ Operadores importantes](#️-operadores-importantes)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)
    - [🔄 Flujo](#-flujo-4)

# 1️⃣ What are Observables? 🌊

Un **Observable** representa una fuente de datos que puede emitir múltiples valores a lo largo del tiempo.

### Ejemplo

```text
Data

   ↓

Data

   ↓

Data
```

> 💡 **Tip:** Un Observable permite:
>
> * 📥 Recibir datos.
> * 🔄 Transformarlos.
> * 🔎 Filtrarlos.
> * 📡 Suscribirse a cambios.

---

# 2️⃣ WebSocket as a Data Stream 🔌

Un WebSocket produce mensajes continuamente.

### Ejemplo

```text
Message

   |

Message

   |

Message

   |

Message
```

Esto representa un:

```text
Stream
```

> 💡 El flujo permanece activo mientras exista una conexión.

---

# 3️⃣ RxJS Integration ⚡

RxJS permite convertir eventos WebSocket en streams reactivos.

### 🔄 Transformación

```text
WebSocket

      ↓

Observable

      ↓

Component

      ↓

UI
```

> 💡 El componente consume datos sin manejar directamente la conexión.

---

# 4️⃣ Subject 📡

Un **Subject** es un tipo especial de Observable que permite emitir valores manualmente.

Permite:

```text
Receive Data

        ↓

Subject

        ↓

Subscribers
```

### Ejemplo conceptual

```typescript
subject.next(message);
```

---

# 5️⃣ BehaviorSubject 🔄

Un **BehaviorSubject** mantiene el último valor emitido.

### Características

* Guarda el valor actual.
* Nuevos suscriptores reciben el último estado.

### 🔄 Flujo

```text
Value

   ↓

BehaviorSubject

   ↓

New Subscriber
```

---

# 6️⃣ fromEvent() 🎯

`fromEvent()` permite convertir eventos en Observables.

### Ejemplo conceptual

```typescript
fromEvent(
  socket,
  "message"
)
```

### 🔄 Transforma

```text
WebSocket Event

        ↓

Observable Stream
```

---

# 7️⃣ Mapping Messages 🔄

El operador:

```typescript
map()
```

permite transformar mensajes recibidos.

### 🔄 Flujo

```text
Message

   ↓

map()

   ↓

Formatted Data
```

### Ejemplo

```typescript
map(event => event.data)
```

---

# 8️⃣ Filtering Events 🔎

El operador:

```typescript
filter()
```

permite recibir solamente mensajes específicos.

### 🔎 Flujo

```text
All Messages

        ↓

filter()

        ↓

Required Messages
```

### Ejemplo

```typescript
filter(
 message => message.type === "chat"
)
```

---

# 9️⃣ Subscriptions 📥

Una **Subscription** conecta un componente con un Observable.

### Ejemplo conceptual

```typescript
observable.subscribe()
```

### 🔄 Flujo

```text
Observable

        ↓

Subscription

        ↓

Component
```

> 💡 Mientras exista la suscripción, el componente recibe datos.

---

# 🔟 Unsubscribe Management 🧹

Las suscripciones deben limpiarse para evitar problemas de memoria.

### ❌ Problema

```text
Component Destroyed

        ↓

Subscription Active

        ↓

Memory Leak
```

### ✅ Solución

```text
Unsubscribe

        ↓

Cleanup
```

---

# 🔄 WebSocket Reactive Flow

```text
WebSocket

      ↓

Observable

      ↓

Operators

      ↓

Subscription

      ↓

Component

      ↓

UI
```

---

# 🛠️ Ejemplo conceptual

```typescript
messages$ =

new Observable(observer => {


});
```

> 💡 El símbolo:

```typescript
$
```

> se utiliza comúnmente para identificar streams.

---

# ⚙️ Operadores importantes

| Operador          | Función                          |
| ----------------- | -------------------------------- |
| 🔄 `map()`        | Transforma datos                 |
| 🔎 `filter()`     | Filtra eventos                   |
| 👀 `tap()`        | Ejecuta acciones secundarias     |
| ⚠️ `catchError()` | Maneja errores                   |
| 🧹 `takeUntil()`  | Controla finalización de streams |

---

# 🧠 Conceptos principales

| Concepto               | Significado                         |
| ---------------------- | ----------------------------------- |
| 🌊 Observable          | Stream de datos reactivo            |
| 📡 Stream              | Flujo continuo de información       |
| 📥 Subscription        | Suscripción a un Observable         |
| 📡 Subject             | Observable que puede emitir valores |
| ⚡ Reactive Programming | Manejo de datos mediante streams    |

---

# 🎯 Al terminar

Un WebSocket produce mensajes continuamente, por lo que puede convertirse en un **Observable** para manejar la comunicación usando RxJS.

### 🔄 Flujo

```text
WebSocket

      ↓

Observable

      ↓

Component

      ↓

UI
```

> 💡 Los componentes consumen streams mediante suscripciones y operadores reactivos.
