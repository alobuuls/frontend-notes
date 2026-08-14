# 📘 PATRONES DE ARQUITECTURA DE SOFTWARE

Los **patrones de arquitectura de software** son formas generales de organizar una aplicación o sistema completo.

A diferencia de los **patrones de diseño**, que normalmente resuelven problemas más específicos dentro del código, los patrones arquitectónicos definen **cómo se estructura y cómo se relacionan las partes principales de un sistema**.

```text
Aplicación
    ↓
Arquitectura
    ↓
Componentes principales
    ↓
Responsabilidades
    ↓
Comunicación
```

> 🧠 **Arquitectura de software = estructura general de un sistema y la forma en que sus partes colaboran.**

---

## 📚 ÍNDICE

- [📘 PATRONES DE ARQUITECTURA DE SOFTWARE](#-patrones-de-arquitectura-de-software)
  - [📚 ÍNDICE](#-índice)
- [🧩 PATRONES Y ESTILOS ARQUITECTÓNICOS](#-patrones-y-estilos-arquitectónicos)
- [🔥 HEXAGONAL VS CLEAN](#-hexagonal-vs-clean)
    - [🔌 Hexagonal](#-hexagonal)
    - [🧅 Clean Architecture](#-clean-architecture)
- [🆚 MONOLITH VS MICROSERVICES](#-monolith-vs-microservices)
- [🆚 MVC VS MVVM](#-mvc-vs-mvvm)
    - [MVC](#mvc)
    - [MVVM](#mvvm)
- [🔗 CÓMO SE PUEDEN COMBINAR](#-cómo-se-pueden-combinar)
- [🧠 LO QUE DEBES RECORDAR](#-lo-que-debes-recordar)
- [🎭 MVC](#-mvc)
- [🖥️ MVVM](#️-mvvm)
- [🧅 LAYERED ARCHITECTURE](#-layered-architecture)
- [🌐 CLIENT-SERVER](#-client-server)
- [🏢 MONOLITH](#-monolith)
- [🧩 MICROSERVICES](#-microservices)
- [🔌 HEXAGONAL](#-hexagonal-1)
    - [Ports \& Adapters](#ports--adapters)
- [🧅 CLEAN ARCHITECTURE](#-clean-architecture-1)


# 🧩 PATRONES Y ESTILOS ARQUITECTÓNICOS

Los que debes estudiar son:

| 🏛️ Organización | 🏗️ Arquitectura / Estilo |
| ---------------- | ------------------------- |
| MVC              | Layered Architecture      |
| MVVM             | Client-Server             |
|                  | Monolithic Architecture   |
|                  | Microservices             |
|                  | Hexagonal Architecture    |
|                  | Clean Architecture        |

> ⚠️ **IMPORTANTE**
>
> **No todos son exactamente del mismo tipo.**
>
> * MVC y MVVM → patrones de organización de aplicaciones.
> * Layered → patrón arquitectónico.
> * Client-Server → arquitectura distribuida.
> * Monolith / Microservices → estilos de arquitectura de sistemas.
> * Hexagonal / Clean → arquitecturas orientadas a separación de responsabilidades y dependencias.

---

# 🔥 HEXAGONAL VS CLEAN

Se parecen muchísimo.

### 🔌 Hexagonal

```text
Hexagonal
    ↓
Ports + Adapters
    ↓
Protección del Domain
```

### 🧅 Clean Architecture

```text
Clean Architecture
    ↓
Dependency Rule
    ↓
Protección del Domain / Business Rules
```

Ambas buscan:

* 🔗 bajo acoplamiento
* 🧩 separación de responsabilidades
* 🚫 independencia de frameworks
* 🏗️ independencia de infraestructura
* 🧪 testabilidad

> ⚠️ **IMPORTANTE**
>
> **No son exactamente la misma arquitectura**.

---

# 🆚 MONOLITH VS MICROSERVICES

| Característica      | Monolito                    | Microservices                                |
| ------------------- | --------------------------- | -------------------------------------------- |
| 🧩 Estructura       | Una aplicación              | Muchos servicios                             |
| 🚀 Deployment       | Generalmente conjunto       | Independiente                                |
| 📈 Escalabilidad    | Aplicación completa         | Por servicio                                 |
| 🌐 Networking       | Más sencillo                | Más complejo                                 |
| 🐛 Debugging        | Más sencillo                | Distribuido                                  |
| 💾 Datos            | Frecuentemente compartidos  | Puede haber DB por servicio                  |
| 🏗️ Infraestructura | Menor                       | Mayor                                        |
| 👥 Equipos          | Más sencillo                | Favorece equipos independientes              |
| 🧠 Complejidad      | Menor inicialmente          | Mayor                                        |
| 🎯 Ideal            | Proyectos pequeños/medianos | Sistemas grandes con necesidades específicas |

---

# 🆚 MVC VS MVVM

|                           | MVC                       | MVVM                     |
| ------------------------- | ------------------------- | ------------------------ |
| 🧩 Principal              | Model + View + Controller | Model + View + ViewModel |
| 🎮 Coordinador            | Controller                | ViewModel                |
| 🖥️ UI                    | View                      | View                     |
| 🧠 Estado de presentación | Puede estar distribuido   | ViewModel                |
| 💻 Uso común              | Web/backend               | Frontend/UI              |

### MVC

```text
User
 ↓
Controller
 ↓
Model
 ↓
View
```

### MVVM

```text
User
 ↓
View
 ↕
ViewModel
 ↕
Model
```

---

# 🔗 CÓMO SE PUEDEN COMBINAR

> 🔥 **IMPORTANTE**
>
> **No tienes que elegir solamente una de estas arquitecturas.**
>
> Puedes combinarlas.

Por ejemplo:

```text
                  System
                    │
              Microservices
                    │
           ┌────────┴────────┐
           ▼                 ▼
       Auth Service      Orders Service
           │                 │
           ▼                 ▼
       Layered          Hexagonal
           │                 │
       Controller         Adapter
           │                 │
        Service            Domain
           │                 │
       Repository          Port
           │                 │
           ▼                 ▼
       PostgreSQL        PostgreSQL
```

Incluso una aplicación puede ser:

```text
Monolithic
    +
Layered
    +
MVC
```

o:

```text
Monolithic
    +
Clean Architecture
```

o:

```text
Microservices
    +
Hexagonal Architecture
```

---

# 🧠 LO QUE DEBES RECORDAR

Estas preguntas son una forma excelente de estudiar **qué problema resuelve cada patrón de arquitectura**.

| 🏛️ Arquitectura         | ❓ Pregunta principal                                                                      |
| ------------------------ | ----------------------------------------------------------------------------------------- |
| **MVC**                  | ¿Cómo organizo Model, View y Controller?                                                  |
| **MVVM**                 | ¿Cómo separo View, estado y lógica de presentación?                                       |
| **Layered Architecture** | ¿Cómo separo responsabilidades en capas?                                                  |
| **Client-Server**        | ¿Cómo se comunican clientes y servidores?                                                 |
| **Monolith**             | ¿Cómo organizo una aplicación como una unidad desplegable?                                |
| **Microservices**        | ¿Cómo divido un sistema en servicios independientes?                                      |
| **Hexagonal**            | ¿Cómo protejo el dominio usando Ports & Adapters?                                         |
| **Clean Architecture**   | ¿Cómo hago que las reglas de negocio sean independientes de frameworks e infraestructura? |

---

# 🎭 MVC

```text
¿Cómo organizo Model, View y Controller?

→ Separando los datos, la interfaz y la lógica que coordina las peticiones.
```

---

# 🖥️ MVVM

```text
¿Cómo separo View, estado y lógica de presentación?

→ Separando la interfaz (View) de la lógica/estado que necesita para funcionar (ViewModel).
```

---

# 🧅 LAYERED ARCHITECTURE

```text
¿Cómo separo responsabilidades en capas?

→ Dividiendo la aplicación en capas con responsabilidades específicas.
```

Por ejemplo:

```text
Presentation
     ↓
Business Logic
     ↓
Data Access
     ↓
Database
```

---

# 🌐 CLIENT-SERVER

```text
¿Cómo se comunican clientes y servidores?

→ Separando quién solicita recursos (Client) de quién los proporciona (Server).
```

Por ejemplo:

```text
Browser
   ↓ HTTP
API
   ↓
Database
```

---

# 🏢 MONOLITH

```text
¿Cómo organizo una aplicación como una unidad desplegable?

→ Manteniendo sus funcionalidades dentro de una misma aplicación desplegable.
```

Conceptualmente:

```text
        Application
             │
     ┌───────┼───────┐
     ↓       ↓       ↓
   Users   Orders   Payments
             │
             ↓
       One Deployment
```

---

# 🧩 MICROSERVICES

```text
¿Cómo divido un sistema en servicios independientes?

→ Separando el sistema en servicios pequeños que pueden desarrollarse, desplegarse y escalarse independientemente.
```

Por ejemplo:

```text
              System
                 │
      ┌──────────┼──────────┐
      ↓          ↓          ↓
   Users       Orders     Payments
  Service      Service      Service
```

---

# 🔌 HEXAGONAL

### Ports & Adapters

```text
¿Cómo protejo el dominio usando Ports & Adapters?

→ Manteniendo la lógica de negocio en el centro y conectando infraestructura mediante interfaces (Ports) y adaptadores (Adapters).
```

Conceptualmente:

```text
             Adapters
          ↙     ↓      ↘
      HTTP     DB     CLI
          ↘     ↓      ↙
             Ports
               ↓
             Domain
```

La idea fundamental:

```text
Infrastructure
      ↓
Adapters
      ↓
Ports
      ↓
Domain
```

---

# 🧅 CLEAN ARCHITECTURE

```text
¿Cómo hago que las reglas de negocio sean independientes
de frameworks e infraestructura?

→ Colocando las reglas de negocio en el centro y haciendo que las dependencias apunten hacia ellas.
```

Conceptualmente:

```text
Frameworks
     ↓
Interface Adapters
     ↓
Application
     ↓
Domain
```

> 📌 **REGLA IMPORTANTE**
>
> **El dominio no debería depender directamente de detalles externos como bases de datos, frameworks o APIs.**

---

| 🧩 Conceptos                    | 🎯 Enfoque                                   |
| ------------------------------- | -------------------------------------------- |
| **MVC / MVVM**                  | Organización de la aplicación / presentación |
| **Layered / Hexagonal / Clean** | Estructuración interna y dependencias        |
| **Client-Server**               | Distribución y comunicación                  |
| **Monolith / Microservices**    | Estructura y despliegue del sistema          |

> 💡 **TIP**
>
> Esto te ayudará muchísimo a no pensar que **MVC, Microservices y Clean Architecture son alternativas directas entre sí**.
>
> Una aplicación podría perfectamente ser:

```text
Monolith
   +
Clean Architecture
   +
Layered / Hexagonal principles
   +
MVC
```

o:

```text
Microservices
      +
Clean Architecture
      +
Hexagonal Architecture
```

Son decisiones que pueden **combinarse en diferentes niveles**.
