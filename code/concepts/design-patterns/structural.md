# 🧱 02. PATRONES ESTRUCTURALES

Se enfocan en:

> 🧠 **Cómo combinar objetos y clases para formar estructuras más grandes.**

### 📚 Principales

| 🔌      | 🌉        | 🌳        | 🎨        |
| ------- | --------- | --------- | --------- |
| Adapter | Bridge    | Composite | Decorator |
| Facade  | Flyweight | Proxy     |           |

---

## 📚 ÍNDICE

- [🧱 02. PATRONES ESTRUCTURALES](#-02-patrones-estructurales)
    - [📚 Principales](#-principales)
  - [📚 ÍNDICE](#-índice)
- [🔌 ADAPTER](#-adapter)
    - [💡 Ejemplo](#-ejemplo)
- [🌉 BRIDGE](#-bridge)
- [🌳 COMPOSITE](#-composite)
    - [💡 Ejemplo](#-ejemplo-1)
- [🎨 DECORATOR](#-decorator)
    - [💻 Ejemplo conceptual](#-ejemplo-conceptual)
- [🏛️ FACADE](#️-facade)
- [🪶 FLYWEIGHT](#-flyweight)
- [🛡️ PROXY](#️-proxy)
  - [🧠 RESUMEN](#-resumen)


# 🔌 ADAPTER

Permite que dos interfaces incompatibles puedan trabajar juntas.

```text
Client
  │
  ▼
Adapter
  │
  ▼
Existing Service
```

### 💡 Ejemplo

```text
Tu aplicación
      ↓
   Adapter
      ↓
API externa
```

Si una API devuelve:

```ts
{
  first_name: 'Alo'
}
```

pero tu aplicación espera:

```ts
{
  firstName: 'Alo'
}
```

un Adapter puede transformar la interfaz.

> 📌 **Idea**
>
> **Adapter = hacer compatibles interfaces diferentes.**

---

# 🌉 BRIDGE

Separa una **abstracción** de su **implementación**, permitiendo que evolucionen independientemente.

```text
Abstraction
     │
     ▼
Implementation
```

Es útil cuando tienes dos dimensiones que pueden variar independientemente.

> 📌 **Idea**
>
> **Bridge = separar abstracción e implementación.**

---

# 🌳 COMPOSITE

Permite tratar objetos individuales y grupos de objetos de manera uniforme.

### 💡 Ejemplo

```text
Folder
├── File
├── File
└── Folder
    ├── File
    └── File
```

El `Folder` puede contener:

```text
File
o
Folder
```

> 📌 **Idea**
>
> **Composite = tratar elementos individuales y estructuras compuestas de la misma manera.**

---

# 🎨 DECORATOR

Permite agregar comportamiento a un objeto **sin modificar directamente su implementación original**.

```text
Object
   ↓
Decorator
   ↓
Additional Behavior
```

### 💻 Ejemplo conceptual

```ts
const userService = new LoggingDecorator(
  new UserService()
);
```

Ahora:

```text
UserService
     ↓
Logging
```

También aparece mucho en:

* Angular
* TypeScript
* Java
* Python

> ⚠️ **IMPORTANTE**
>
> Los decorators de TypeScript/JavaScript y el patrón Decorator están relacionados conceptualmente, pero no son exactamente equivalentes.

---

# 🏛️ FACADE

Proporciona una interfaz sencilla frente a un sistema complejo.

```text
           Complex System
        ┌──────┼──────┐
        ▼      ▼      ▼
      API A  API B  API C
        ▲
        │
      Facade
        ▲
        │
      Client
```

En lugar de que el cliente conozca:

```text
Service A
Service B
Service C
Service D
```

utiliza:

```ts
facade.execute();
```

> 📌 **Idea**
>
> **Facade = simplificar el acceso a un sistema complejo.**

---

# 🪶 FLYWEIGHT

Permite compartir información común entre muchos objetos para reducir el consumo de memoria.

```text
       Shared Data
        /   |   \
       ▼    ▼    ▼
      Obj  Obj  Obj
```

Es útil cuando existen **muchísimos objetos similares**.

> 📌 **Idea**
>
> **Flyweight = compartir estado común para ahorrar recursos.**

---

# 🛡️ PROXY

Un Proxy actúa como intermediario entre el cliente y otro objeto.

```text
Client
  ↓
Proxy
  ↓
Real Object
```

Puede utilizarse para:

| 🎯 Uso               | 💡 Función               |
| -------------------- | ------------------------ |
| 🔐 Control de acceso | Autorizar acceso         |
| ⚡ Lazy loading       | Cargar bajo demanda      |
| 💾 Caching           | Reutilizar datos         |
| 📝 Logging           | Registrar operaciones    |
| ✅ Validación         | Validar acceso/datos     |
| 🌐 Acceso remoto     | Intermediar comunicación |

JavaScript tiene además el objeto nativo:

```ts
new Proxy(...)
```

---

## 🧠 RESUMEN

| 🧱 Patrón     | 🧠 Recuerda                              |
| ------------- | ---------------------------------------- |
| **Adapter**   | Compatibilizar interfaces                |
| **Bridge**    | Separar abstracción e implementación     |
| **Composite** | Tratar grupos e individuos uniformemente |
| **Decorator** | Agregar comportamiento                   |
| **Facade**    | Simplificar un sistema complejo          |
| **Flyweight** | Compartir estado para ahorrar recursos   |
| **Proxy**     | Intermediar el acceso a un objeto        |

> 💡 **TIP**
>
> Todos pertenecen a los **patrones estructurales** porque se enfocan en **cómo organizar y relacionar objetos y clases para construir estructuras mayores**.
