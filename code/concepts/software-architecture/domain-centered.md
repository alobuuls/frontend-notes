## 📚 ÍNDICE — HEXAGONAL & CLEAN ARCHITECTURE

- [🔌 7. HEXAGONAL ARCHITECTURE](#-7-hexagonal-architecture)
  - [🧠 Core](#-core)
  - [🔌 Ports](#-ports)
  - [🔌 Adapters](#-adapters)
- [🧼 8. CLEAN ARCHITECTURE](#-8-clean-architecture)
  - [🧭 DEPENDENCY RULE](#-dependency-rule)


# 🔌 7. HEXAGONAL ARCHITECTURE

También conocida como:

> **Ports and Adapters**

Busca aislar la lógica principal de la aplicación de tecnologías externas.

```text id="y0u8iz"
          REST API
             │
          Adapter
             │
           Port
             │
      ┌──────▼──────┐
      │             │
      │   DOMAIN    │
      │             │
      └──────▲──────┘
             │
           Port
             │
          Adapter
             │
         PostgreSQL
```

---

## 🧠 Core

El centro contiene la lógica importante de la aplicación.

```text id="p9h6fq"
Domain
Business Logic
Use Cases
```

Y no debería depender directamente de:

```text id="f0i0t4"
Express
PostgreSQL
MongoDB
HTTP
Frameworks
```

> 💡 **IDEA CLAVE**
>
> El **Core** conoce las reglas de negocio, pero no los detalles tecnológicos externos.

---

## 🔌 Ports

Los **Ports** definen contratos.

Por ejemplo:

```ts id="1a1w2s"
interface UserRepository {
  findById(id: string): Promise<User>;
}
```

El dominio conoce:

```text id="l9ak8g"
UserRepository
```

pero no necesita saber si la implementación utiliza:

```text id="4r1f90"
PostgreSQL
MongoDB
Firebase
```

---

## 🔌 Adapters

Implementan o conectan esos contratos.

```text id="q6dz0m"
UserRepository
      ↑
      │
PostgresUserRepository
```

Podrías cambiar:

```text id="n4y4io"
PostgreSQL
```

por:

```text id="k8y6ps"
MongoDB
```

sin cambiar la lógica principal.

> 📌 **IDEA PRINCIPAL**
>
> **Hexagonal = proteger el núcleo de la aplicación de detalles externos mediante Ports y Adapters.**

---

# 🧼 8. CLEAN ARCHITECTURE

**Clean Architecture**, popularizada por Robert C. Martin, busca separar:

```text id="s4b0wq"
Business Rules
```

de:

```text id="v6k54z"
Frameworks
UI
Database
External Systems
```

Una representación común:

```text id="c5r4g7"
┌───────────────────────────────┐
│        Frameworks/UI          │
│                               │
│   ┌───────────────────────┐   │
│   │ Interface Adapters    │   │
│   │                       │   │
│   │  ┌─────────────────┐  │   │
│   │  │ Application     │  │   │
│   │  │ / Use Cases     │  │   │
│   │  │                 │  │   │
│   │  │ ┌─────────────┐ │  │   │
│   │  │ │   Domain    │ │  │   │
│   │  │ └─────────────┘ │  │   │
│   │  └─────────────────┘  │   │
│   └───────────────────────┘   │
└───────────────────────────────┘
```

---

## 🧭 DEPENDENCY RULE

La idea fundamental es la **Dependency Rule**:

> **Las dependencias deben apuntar hacia el interior.**

```text id="e7hz4j"
Framework
   ↓
Adapter
   ↓
Use Case
   ↓
Domain
```

El `Domain` no debería depender de:

```text id="i8o9uw"
Express
Angular
PostgreSQL
Firebase
```

> 🔥 **IMPORTANTE**
>
> Tanto **Hexagonal** como **Clean Architecture** buscan proteger las reglas de negocio frente a detalles externos, aunque **no son exactamente la misma arquitectura**.
