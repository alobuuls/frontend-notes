# 🅰️ 03 — WebSocket with Angular

> 💡 **¿Dónde debe vivir una conexión WebSocket dentro de una aplicación Angular?**

En Angular, una conexión WebSocket debe integrarse siguiendo la arquitectura de la aplicación, separando la lógica de comunicación de la interfaz de usuario.

---

## 📚 Índice

- [🅰️ 03 — WebSocket with Angular](#️-03--websocket-with-angular)
  - [📚 Índice](#-índice)
- [1️⃣ Angular Architecture 🏗️](#1️⃣-angular-architecture-️)
- [2️⃣ Components vs Services 🧩](#2️⃣-components-vs-services-)
  - [🖥️ Component](#️-component)
  - [🔌 Service](#-service)
- [3️⃣ WebSocket Integration 🔗](#3️⃣-websocket-integration-)
    - [❌ No recomendado](#-no-recomendado)
    - [✅ Mejor arquitectura](#-mejor-arquitectura)
- [4️⃣ Dependency Injection 💉](#4️⃣-dependency-injection-)
    - [Flujo](#flujo)
    - [Ejemplo conceptual](#ejemplo-conceptual)
- [5️⃣ Lifecycle Hooks 🔄](#5️⃣-lifecycle-hooks-)
- [6️⃣ ngOnInit 🚀](#6️⃣-ngoninit-)
    - [Flujo](#flujo-1)
    - [Ejemplo](#ejemplo)
- [7️⃣ ngOnDestroy 🧹](#7️⃣-ngondestroy-)
    - [Flujo](#flujo-2)
    - [Ejemplo](#ejemplo-1)
- [8️⃣ Component Communication 💬](#8️⃣-component-communication-)
    - [Flujo](#flujo-3)
- [9️⃣ State Updates 🔄](#9️⃣-state-updates-)
    - [Flujo](#flujo-4)
- [🔟 Example Application 💻](#-example-application-)
    - [Ejemplo de arquitectura](#ejemplo-de-arquitectura)
    - [Responsabilidades](#responsabilidades)
      - [🖥️ Component](#️-component-1)
      - [🔌 Service](#-service-1)
- [🔄 WebSocket Lifecycle in Angular](#-websocket-lifecycle-in-angular)
- [🧠 Conceptos principales](#-conceptos-principales)
- [🎯 Al terminar](#-al-terminar)
    - [La arquitectura correcta es:](#la-arquitectura-correcta-es)



# 1️⃣ Angular Architecture 🏗️

Angular organiza una aplicación usando diferentes responsabilidades.

Una aplicación Angular normalmente contiene:

```text id="m7q3xp"
Component
      ↓
Service
      ↓
Backend
```

Cada parte tiene una responsabilidad específica.

> 💡 **TIP:** La arquitectura separa las responsabilidades entre interfaz, comunicación y backend.

---

# 2️⃣ Components vs Services 🧩

Angular separa la lógica de presentación y comunicación.

## 🖥️ Component

Responsable de:

```text id="q8m4vx"
Display Data

User Interaction

UI State
```

El componente controla la interfaz.

## 🔌 Service

Responsable de:

```text id="p5n2mq"
Connection

Messages

Communication
```

El servicio administra la comunicación WebSocket.

---

# 3️⃣ WebSocket Integration 🔗

Una conexión WebSocket no debe vivir directamente dentro de un componente.

### ❌ No recomendado

```text id="x7m3qp"
Component

    |

    |

WebSocket
```

### ✅ Mejor arquitectura

```text id="n6m8qx"
Component
    |
    |
WebSocket Service
    |
    |
WebSocket Connection
    |
    |
Backend
```

> 🔌 **TIP:** El **WebSocket Service** separa la comunicación de la interfaz de usuario.

---

# 4️⃣ Dependency Injection 💉

Angular utiliza **Dependency Injection** para entregar servicios a los componentes.

Permite que un componente utilice un servicio sin crear la instancia manualmente.

### Flujo

```text id="k4q9mp"
Component
    ↓
Inject Service
    ↓
Use WebSocket
```

### Ejemplo conceptual

```typescript id="v8m3qx"
constructor(
  private websocketService: WebSocketService
){

}
```

---

# 5️⃣ Lifecycle Hooks 🔄

Angular tiene ciclos de vida que permiten ejecutar lógica en momentos específicos.

Los principales para WebSocket son:

```text id="r5n8mq"
ngOnInit()

ngOnDestroy()
```

---

# 6️⃣ ngOnInit 🚀

`ngOnInit` se ejecuta cuando el componente es inicializado.

Se utiliza para iniciar la conexión.

### Flujo

```text id="t6m2qx"
Component Created
        ↓
ngOnInit()
        ↓
Connect WebSocket
```

### Ejemplo

```typescript id="x3q8mv"
ngOnInit(){

  this.websocketService.connect();

}
```

> 🚀 **TIP:** `ngOnInit` se utiliza para iniciar la conexión.

---

# 7️⃣ ngOnDestroy 🧹

`ngOnDestroy` se ejecuta cuando el componente es eliminado.

Se utiliza para limpiar recursos.

### Flujo

```text id="a7m4qp"
Component Destroyed
        ↓
ngOnDestroy()
        ↓
Close Connection
```

### Ejemplo

```typescript id="b6n9mx"
ngOnDestroy(){

  this.websocketService.close();

}
```

> 🧹 **TIP:** `ngOnDestroy` permite limpiar recursos y cerrar la conexión.

---

# 8️⃣ Component Communication 💬

El componente se comunica con el servicio para enviar y recibir información.

### Flujo

```text id="c8m4qx"
Component
    ↓
WebSocket Service
    ↓
WebSocket
    ↓
Backend
```

El componente no maneja directamente la conexión.

---

# 9️⃣ State Updates 🔄

Cuando llegan mensajes WebSocket, el estado de la aplicación puede actualizarse.

### Flujo

```text id="h5m8qx"
Server Message
    ↓
WebSocket Service
    ↓
Component Update
    ↓
UI Refresh
```

El servicio recibe datos y el componente actualiza la interfaz.

> 🔄 **TIP:** El servicio recibe los datos y el componente actualiza la interfaz.

---

# 🔟 Example Application 💻

### Ejemplo de arquitectura

```text id="m3q7xp"
Angular Component
        |
        |
WebSocket Service
        |
        |
WebSocket Connection
        |
        |
Backend
```

### Responsabilidades

#### 🖥️ Component

```text id="w8p2mq"
Display Data

User Interaction

UI State
```

#### 🔌 Service

```text id="s6m9qx"
Connection

Messages

Communication
```

---

# 🔄 WebSocket Lifecycle in Angular

```text id="n4q8mv"
Component Created
        ↓
Connect WebSocket
        ↓
Receive Messages
        ↓
Update State
        ↓
Component Destroyed
        ↓
Close Connection
```

---

# 🧠 Conceptos principales

| Concepto                     | Significado                         |
| ---------------------------- | ----------------------------------- |
| 🏗️ **Angular Architecture** | Organización de responsabilidades   |
| 🧩 **Component**             | Maneja la interfaz y usuario        |
| 🔌 **Service**               | Maneja la conexión WebSocket        |
| 💉 **Dependency Injection**  | Proporciona servicios a componentes |
| 🚀 **ngOnInit**              | Inicializa la conexión              |
| 🧹 **ngOnDestroy**           | Limpia y cierra recursos            |

---

# 🎯 Al terminar

En Angular, la conexión WebSocket debe vivir dentro de un **Service**, no directamente en un componente.

### La arquitectura correcta es:

```text id="m8q3vx"
Component
    |
    |
WebSocket Service
    |
    |
WebSocket Connection
    |
    |
Backend
```

> 🎯 **TIP:** El componente se encarga de mostrar datos, mientras que el servicio administra la comunicación.
