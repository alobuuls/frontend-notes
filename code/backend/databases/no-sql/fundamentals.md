# 📄 NoSQL

> Aquí estudias **qué es NoSQL, por qué existe y cuándo utilizarlo**.

---

## 📑 ÍNDICE

- [📄 NoSQL](#-nosql)
  - [📑 ÍNDICE](#-índice)
  - [🧠 1️⃣ ¿QUÉ ES NOSQL?](#-1️⃣-qué-es-nosql)
    - [🗂️ Modelos comunes](#️-modelos-comunes)
  - [❓ 2️⃣ ¿POR QUÉ SURGE NOSQL?](#-2️⃣-por-qué-surge-nosql)
  - [🆚 3️⃣ SQL VS NOSQL](#-3️⃣-sql-vs-nosql)
    - [SQL](#sql)
    - [NoSQL](#nosql)
  - [🧩 4️⃣ CARACTERÍSTICAS DE NOSQL](#-4️⃣-características-de-nosql)
    - [📐 Schema flexible](#-schema-flexible)
    - [📈 Horizontal Scaling](#-horizontal-scaling)
    - [🌐 Distributed Databases](#-distributed-databases)
  - [✅ 5️⃣ VENTAJAS DE NOSQL](#-5️⃣-ventajas-de-nosql)
  - [❌ 6️⃣ DESVENTAJAS DE NOSQL](#-6️⃣-desventajas-de-nosql)
  - [🎯 7️⃣ ¿CUÁNDO UTILIZAR NOSQL?](#-7️⃣-cuándo-utilizar-nosql)
  - [🚫 8️⃣ ¿CUÁNDO NO UTILIZAR NOSQL?](#-8️⃣-cuándo-no-utilizar-nosql)
  - [⚖️ 9️⃣ CONSISTENCIA VS DISPONIBILIDAD](#️-9️⃣-consistencia-vs-disponibilidad)
  - [📐 🔟 ESCALABILIDAD HORIZONTAL](#--escalabilidad-horizontal)
  - [🌐 DISTRIBUTED DATABASES](#-distributed-databases-1)
  - [📐 CAP THEOREM — INTRODUCCIÓN](#-cap-theorem--introducción)
    - [Consistency](#consistency)
    - [Availability](#availability)
    - [Partition Tolerance](#partition-tolerance)
  - [🔄 EVENTUAL CONSISTENCY — INTRODUCCIÓN](#-eventual-consistency--introducción)
  - [🧠 MODELO MENTAL](#-modelo-mental)

## 🧠 1️⃣ ¿QUÉ ES NOSQL?

**NoSQL** significa generalmente **“Not Only SQL”**.

Es un término utilizado para describir bases de datos que no siguen necesariamente el modelo relacional tradicional basado en tablas, filas, columnas y relaciones mediante Foreign Keys.

NoSQL engloba diferentes modelos de almacenamiento y no representa una única tecnología.

### 🗂️ Modelos comunes

```text
NoSQL
  │
  ├── Document
  ├── Key-Value
  ├── Wide-Column
  └── Graph
```

| Tecnología    | Modelo      |
| ------------- | ----------- |
| **MongoDB**   | Document    |
| **Redis**     | Key-Value   |
| **Cassandra** | Wide-Column |
| **Neo4j**     | Graph       |

---

## ❓ 2️⃣ ¿POR QUÉ SURGE NOSQL?

Las bases de datos relacionales funcionan muy bien para muchos sistemas, pero determinados sistemas modernos comenzaron a necesitar características como:

* Grandes cantidades de datos.
* Distribución entre múltiples servidores.
* Escalabilidad horizontal.
* Alta disponibilidad.
* Modelos de datos más flexibles.
* Manejo de grandes volúmenes de operaciones.

Conceptualmente:

```text
Aplicación pequeña
      ↓
Database
```

puede evolucionar hacia:

```text
              Application
                   ↓
        ┌──────────┼──────────┐
        ↓          ↓          ↓
    Database    Database    Database
```

NoSQL apareció como una familia de soluciones para diferentes necesidades de este tipo.

---

## 🆚 3️⃣ SQL VS NOSQL

Una diferencia conceptual importante es el modelo de datos.

### SQL

```text
SQL
 ↓
Relaciones
 ↓
Schema estructurado
 ↓
Tables
 ↓
Rows
 ↓
Columns
 ↓
JOINs
```

### NoSQL

```text
NoSQL
 ↓
Modelos de datos flexibles
 ↓
Distribución
 ↓
Escalabilidad
```

> Esto **no significa que SQL no pueda escalar** ni que NoSQL sea siempre más rápido.

La elección depende del problema que estás intentando resolver.

---

## 🧩 4️⃣ CARACTERÍSTICAS DE NOSQL

Algunas características comunes son:

### 📐 Schema flexible

La estructura de los datos puede ser más flexible que en una base relacional.

Por ejemplo, en una base documental podrías tener:

```text
User A
{
    name: "Ana",
    email: "ana@mail.com"
}
```

y:

```text
User B
{
    name: "Luis",
    email: "luis@mail.com",
    age: 25
}
```

El modelo permite estructuras que pueden evolucionar con mayor flexibilidad.

### 📈 Horizontal Scaling

Consiste en aumentar la capacidad agregando más servidores:

```text
Server
  ↓
Server + Server
  ↓
Server + Server + Server
```

en lugar de depender únicamente de aumentar la capacidad de una sola máquina.

### 🌐 Distributed Databases

Los datos pueden distribuirse entre diferentes servidores o nodos:

```text
             Database
                 │
       ┌─────────┼─────────┐
       ↓         ↓         ↓
     Node 1    Node 2    Node 3
```

Esto permite construir sistemas distribuidos.

---

## ✅ 5️⃣ VENTAJAS DE NOSQL

Dependiendo del sistema, NoSQL puede ofrecer ventajas como:

* **Schema flexible**
* **Escalabilidad horizontal**
* **Distribución de datos**
* **Alta disponibilidad**
* Modelos de datos adaptados a determinados casos de uso.
* Facilidad para manejar estructuras de datos que cambian frecuentemente.

---

## ❌ 6️⃣ DESVENTAJAS DE NOSQL

NoSQL también tiene trade-offs.

Algunos pueden ser:

* Menos adecuado para relaciones complejas dependiendo del modelo.
* Algunas operaciones pueden requerir duplicación de datos.
* La consistencia puede tener diferentes garantías dependiendo de la tecnología.
* Los modelos distribuidos pueden aumentar la complejidad.
* No todos los sistemas NoSQL soportan las mismas operaciones o garantías.

> **NoSQL no es automáticamente mejor que SQL.**

## 🎯 7️⃣ ¿CUÁNDO UTILIZAR NOSQL?

Puede ser una buena opción cuando necesitas características como:

```text
Gran volumen de datos
        +
Escalabilidad horizontal
        +
Distribución
        +
Schema flexible
```

Por ejemplo, sistemas donde la estructura de los datos cambia frecuentemente o aplicaciones distribuidas que necesitan escalar horizontalmente.

La decisión depende del modelo de datos y de los requisitos de la aplicación.

---

## 🚫 8️⃣ ¿CUÁNDO NO UTILIZAR NOSQL?

No deberías elegir NoSQL simplemente porque:

> "Es más moderno."

Si tu aplicación necesita:

```text
Relaciones complejas
        +
Integridad referencial
        +
JOINs
        +
Transacciones relacionales
```

una base de datos relacional puede ser una opción más adecuada.

La elección debe partir de los requisitos del sistema.

---

## ⚖️ 9️⃣ CONSISTENCIA VS DISPONIBILIDAD

En sistemas distribuidos pueden existir **trade-offs** entre diferentes propiedades.

Conceptualmente:

```text
Consistencia
     ↕
Disponibilidad
     ↕
Distribución
```

Una aplicación puede necesitar priorizar diferentes características dependiendo del caso.

Por ejemplo:

```text
¿Todos los nodos deben observar
el mismo dato inmediatamente?
```

vs.

```text
¿El sistema debe continuar disponible
aunque algunos nodos tengan problemas?
```

Aquí comienza a aparecer uno de los conceptos fundamentales de las bases distribuidas:

**CAP Theorem.**

---

## 📐 🔟 ESCALABILIDAD HORIZONTAL

La escalabilidad horizontal consiste en agregar más máquinas o nodos:

```text
         1 Server
            ↓
      ┌─────┴─────┐
      ↓           ↓
   Server       Server
      ↓           ↓
      └─────┬─────┘
            ↓
          Database
```

En contraste, la escalabilidad vertical consiste en aumentar los recursos de una máquina:

```text
Server
 ↓
CPU ↑
RAM ↑
Storage ↑
```

NoSQL suele asociarse fuertemente con **horizontal scaling**, especialmente en sistemas distribuidos.

---

## 🌐 DISTRIBUTED DATABASES

Una database distribuida puede utilizar múltiples nodos:

```text
                Application
                     ↓
              Distributed DB
                     │
        ┌────────────┼────────────┐
        ↓            ↓            ↓
      Node 1       Node 2       Node 3
```

Esto introduce nuevos problemas que no aparecen de la misma manera en una database local:

* Distribución.
* Fallos de red.
* Replicación.
* Consistencia.
* Disponibilidad.

---

## 📐 CAP THEOREM — INTRODUCCIÓN

CAP Theorem estudia los trade-offs de los sistemas distribuidos.

Las tres propiedades son:

```text
C → Consistency
A → Availability
P → Partition Tolerance
```

De momento solo necesitas reconocerlas:

### Consistency

Los nodos observan datos consistentes.

### Availability

El sistema continúa respondiendo a las solicitudes.

### Partition Tolerance

El sistema continúa funcionando aunque exista una partición o fallo de comunicación entre nodos.

Conceptualmente:

```text
        CAP
     /    |    \
    C     A     P
Consistency
Availability
Partition Tolerance
```

🔥 Por ahora **no necesitas profundizar en las diferentes interpretaciones de CAP**. Lo importante es entender que los sistemas distribuidos tienen **trade-offs**.

---

## 🔄 EVENTUAL CONSISTENCY — INTRODUCCIÓN

En algunos sistemas distribuidos, los datos no tienen que ser idénticos en todos los nodos inmediatamente.

Puede ocurrir:

```text
Update
  ↓
Node A → nuevo valor
Node B → valor anterior
Node C → valor anterior
```

Después de cierto tiempo:

```text
Node A → nuevo valor
Node B → nuevo valor
Node C → nuevo valor
```

Esto se conoce como **Eventual Consistency**.

La idea fundamental es:

> Los diferentes nodos pueden estar temporalmente desincronizados, pero eventualmente convergen hacia un estado consistente.

---

## 🧠 MODELO MENTAL

La idea que debes llevarte de este documento es:

```text
SQL
 ↓
Relational Model
 ↓
Structured Schema
 ↓
Tables
 ↓
Relationships
```

vs.

```text
NoSQL
 ↓
Different Data Models
 ↓
Flexible Schemas
 ↓
Distributed Systems
 ↓
Horizontal Scaling
```

Y finalmente:

```text
NoSQL
   ↓
Distributed Databases
   ↓
CAP
   ↓
Consistency / Availability / Partition Tolerance
   ↓
Eventual Consistency
```

> 🔥 **La idea principal de NoSQL no es simplemente "no usar SQL". Es utilizar modelos de datos y arquitecturas que pueden ser más adecuados para determinados requisitos de flexibilidad, distribución y escalabilidad.**
