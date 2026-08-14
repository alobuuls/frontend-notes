## 📚 ÍNDICE — PATRONES DE ARQUITECTURA DE SOFTWARE

- [🏢 5. MONOLITHIC ARCHITECTURE](#-5-monolithic-architecture)
  - [🧠 Ejemplo](#-ejemplo)
    - [✅ Ventajas](#-ventajas)
    - [❌ Desventajas](#-desventajas)
- [🧩 6. MICROSERVICES](#-6-microservices)
  - [🧠 Ejemplo](#-ejemplo-1)
    - [✅ Ventajas](#-ventajas-1)
    - [❌ Desventajas](#-desventajas-1)
- [🆚 MONOLITH VS MICROSERVICES](#-monolith-vs-microservices)

# 🏢 5. MONOLITHIC ARCHITECTURE

Una aplicación **monolítica** concentra sus principales funcionalidades en una misma unidad desplegable.

```text id="4e5g1m"
            Application
                 │
      ┌──────────┼──────────┐
      ▼          ▼          ▼
    Users      Orders     Payments
      │          │          │
      └──────────┼──────────┘
                 ▼
              Database
```

Normalmente:

```text id="8j6b1q"
Build
  ↓
Deploy
  ↓
One Application
```

---

## 🧠 Ejemplo

Un backend Express puede contener:

```text id="u4b7jv"
Express Application
├── Auth
├── Users
├── Products
├── Orders
└── Payments
```

Todo se despliega como una aplicación.

### ✅ Ventajas

* 🚀 sencillo de comenzar
* ⚡ desarrollo inicial rápido
* 📦 deployment simple
* 🐛 debugging relativamente sencillo
* 🏗️ menos infraestructura

### ❌ Desventajas

* 📈 puede crecer demasiado
* 🔗 partes pueden quedar muy acopladas
* 🚀 deployments pueden afectar toda la aplicación
* 📊 escalar componentes individualmente es más difícil

> 📌 **IMPORTANTE**
>
> **Monolítico no significa necesariamente "mal diseñado".**
>
> Un monolito bien estructurado puede ser una excelente arquitectura, especialmente para proyectos pequeños y medianos.

---

# 🧩 6. MICROSERVICES

Los **microservicios** dividen una aplicación grande en varios servicios relativamente independientes.

```text id="qz9s8f"
                 API Gateway
                     │
       ┌─────────────┼─────────────┐
       ▼             ▼             ▼
    Auth Service  User Service  Order Service
       │             │             │
       ▼             ▼             ▼
      DB            DB             DB
```

Cada servicio puede:

| ⚙️ Capacidad                         | 🎯 Significado                               |
| ------------------------------------ | -------------------------------------------- |
| 🛠️ Desarrollarse independientemente | Cada servicio puede evolucionar por separado |
| 🚀 Desplegarse independientemente    | No requiere desplegar todo el sistema        |
| 📈 Escalar independientemente        | Escalar solo los servicios necesarios        |
| 🔧 Tener su propia tecnología        | Diferentes tecnologías por servicio          |

---

## 🧠 Ejemplo

```text id="q1p8cg"
Auth Service
     ↓
Users Service
     ↓
Orders Service
     ↓
Payments Service
```

En lugar de:

```text id="w0f9jp"
One Big Application
```

tenemos:

```text id="g0c6sm"
Multiple Services
```

### ✅ Ventajas

* 🚀 despliegues independientes
* 📈 escalabilidad independiente
* 👥 equipos independientes
* 🛡️ aislamiento de ciertos problemas
* 🔧 posibilidad de utilizar diferentes tecnologías

### ❌ Desventajas

* 🧠 mayor complejidad
* 🌐 networking
* 👀 observabilidad
* 🚀 deployment
* 🐛 debugging distribuido
* 💾 consistencia de datos
* 🔗 comunicación entre servicios
* 🏗️ mayor infraestructura

> ⚠️ **MUY IMPORTANTE**
>
> **Microservices no significa automáticamente mejor arquitectura.**
>
> Para una aplicación pequeña puede introducir mucha complejidad innecesaria.

---

# 🆚 MONOLITH VS MICROSERVICES

| 🧩 Característica | 🏢 Monolito           | 🧩 Microservices |
| ----------------- | --------------------- | ---------------- |
| Estructura        | Una aplicación        | Varios servicios |
| Deployment        | Generalmente conjunto | Independiente    |
| Escalabilidad     | Aplicación completa   | Por servicio     |
| Networking        | Más sencillo          | Más complejo     |
| Debugging         | Más sencillo          | Distribuido      |
| Infraestructura   | Menor                 | Mayor            |
| Complejidad       | Menor inicialmente    | Mayor            |

> 💡 **TIP**
>
> La pregunta no es **"¿Monolito o Microservices, cuál es mejor?"**, sino **"¿qué nivel de complejidad necesita realmente el sistema?"**.
