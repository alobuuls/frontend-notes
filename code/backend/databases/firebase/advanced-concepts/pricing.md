# 💰 Firebase Pricing

Firebase utiliza principalmente un modelo de **consumo**: el costo depende de cuánto utilizas determinados servicios y de los recursos que consumes.

La idea fundamental es:

> **No pagas solamente por "tener Firebase"; dependiendo del servicio, pagas por el uso que genere tu aplicación.**

---

# 📑 Índice — Firebase Pricing

1. 💰 [Firebase Pricing](#-firebase-pricing)
2. 🆓 [Free Tier / Cuotas](#-free-tier--cuotas)
3. 💳 [Pay-as-you-go](#-pay-as-you-go)
4. 📊 [Usage-Based Pricing](#-usage-based-pricing)
5. 🔥 [Servicios que pueden generar costos](#-servicios-que-pueden-generar-costos)
6. 🗄️ [Firestore Pricing](#️-firestore-pricing)
7. 👀 [Reads y diseño de la aplicación](#-reads-y-diseño-de-la-aplicación)
8. 🔄 [Realtime Listeners y Costos](#-realtime-listeners-y-costos)
9. 📁 [Storage](#-storage)
10. ⚙️ [Cloud Functions](#️-cloud-functions)
11. 🌐 [Hosting](#-hosting)
12. 📱 [Cloud Messaging](#-cloud-messaging)
13. 📏 [Quotas y Limits](#-quotas-y-limits)
14. ⭐ [No memorices números](#-no-memorices-números)
15. 🚨 [¿Por qué una app puede volverse costosa?](#-por-qué-una-app-puede-volverse-costosa)
16. 🧠 [Cost Optimization](#-cost-optimization)
17. 🔎 [Consultar solamente lo necesario](#-consultar-solamente-lo-necesario)
18. 📄 [Diseñar bien el modelo](#-diseñar-bien-el-modelo)
19. 🔄 [Evitar operaciones innecesarias](#-evitar-operaciones-innecesarias)
20. 📦 [Controlar el tamaño de los datos](#-controlar-el-tamaño-de-los-datos)
21. 🧩 [Costo vs Performance](#-costo-vs-performance)
22. 📈 [Escalabilidad](#-escalabilidad)
23. 🎯 [Lo que realmente debes aprender](#-lo-que-realmente-debes-aprender)
24. ⭐ [Concepto fundamental](#-concepto-fundamental)
25. 🧠 [Debes poder responder](#-debes-poder-responder)

## 🆓 Free Tier / Cuotas

Firebase ofrece cuotas gratuitas en determinados servicios y planes.

Conceptualmente:

```text
Firebase Service
      ↓
Free quota
      ↓
¿Superaste la cuota?
      ↓
Billing / límites según el plan
```

Las cuotas permiten desarrollar aplicaciones pequeñas sin que necesariamente tengas un costo significativo.

⚠️ **No memorices números concretos.**

Las cuotas, precios y condiciones pueden cambiar.

Lo importante es entender:

```text
Usage
  ↓
Quota
  ↓
Billing / Limit
```

---

## 💳 Pay-as-you-go

En un modelo **pay-as-you-go**, el costo está relacionado con el consumo.

```text
Pocos usuarios
     ↓
Pocas operaciones
     ↓
Bajo consumo
     ↓
💰 Bajo costo
```

Mientras que:

```text
Muchos usuarios
     ↓
Muchas operaciones
     ↓
Mucho consumo
     ↓
💰 Mayor costo
```

Por eso Firebase puede resultar muy conveniente para comenzar un proyecto, pero debes considerar cómo crecerán tus operaciones cuando aumente el tráfico.

---

## 📊 Usage-Based Pricing

Cada servicio puede medir el uso de una manera diferente.

| Servicio  | Ejemplo de consumo       |
| --------- | ------------------------ |
| Firestore | Reads / Writes / Deletes |
| Storage   | Storage + Network        |
| Functions | Invocations + Compute    |

Por eso **no existe una única métrica de "uso de Firebase"**.

Cada servicio tiene su propio modelo de consumo.

---

## 🔥 Servicios que pueden generar costos

Debes conocer especialmente:

```text
🔥 Firebase
│
├── Firestore
├── Realtime Database
├── Storage
├── Cloud Functions
├── Hosting
└── Cloud Messaging
```

Pero **no todos se cobran exactamente de la misma manera**.

Por eso, cuando diseñes una aplicación, debes preguntarte:

> ¿Qué servicio utilizo y qué tipo de consumo genera?

---

## 🗄️ Firestore Pricing

🔥 Este es uno de los conceptos más importantes.

En Firestore debes prestar especial atención a las operaciones realizadas sobre los documentos.

Entre los conceptos importantes están:

```text
Reads
Writes
Deletes
Storage
Network usage
```

Por ejemplo:

```text
Angular
   ↓
Query
   ↓
Firestore
   ↓
1000 documents read
   ↓
Usage
   ↓
💰 Cost
```

Esto significa que **el diseño de tus queries puede tener impacto económico**.

---

## 👀 Reads y diseño de la aplicación

Imagina que tienes:

```text
users
   ↓
10,000 documents
```

Y cada vez que el usuario abre una pantalla haces una consulta que termina leyendo una gran cantidad de documentos.

```text
User opens page
      ↓
Firestore query
      ↓
Thousands of reads
      ↓
Usage increases
```

Si esto ocurre:

```text
1 usuario
   ↓
1,000 reads
```

puede no parecer importante.

Pero:

```text
10,000 usuarios
       ↓
1,000 reads cada uno
       ↓
Muchísimas operaciones
```

La escala cambia completamente.

### ⭐ Idea clave

> **Una query técnicamente correcta no necesariamente es una query eficiente desde el punto de vista de costos.**

# 🔄 Realtime Listeners y Costos

Esto conecta directamente con los **Realtime Listeners** que estudiaste anteriormente.

Un listener no es simplemente:

```text
Query
 ↓
Resultado
```

Es:

```text
Subscribe
   ↓
Initial data
   ↓
Listen
   ↓
Changes
   ↓
More data
```

Por eso debes tener cuidado con:

* ❌ Listeners innecesarios
* ❌ Escuchar colecciones enormes
* ❌ Mantener listeners cuando ya no se necesitan
* ❌ Consultar muchos documentos sin necesidad

La idea no es:

> "Nunca uses listeners."

Sino:

> **Utiliza realtime cuando realmente aporte valor y diseña el flujo de datos conscientemente.**

---

# 📁 Storage

En Storage debes pensar principalmente en:

```text
Files
   ↓
Storage usage
```

Y también en:

```text
Downloads / Network
       ↓
Data transferred
```

Una aplicación que almacena pocos archivos pequeños:

```text
100 images
 ↓
small storage
```

es muy diferente de:

```text
Millions of images
       ↓
Large files
       ↓
Many downloads
```

Por eso debes considerar tanto **cuánto almacenas** como **cuánto tráfico generan esos archivos**.

---

# ⚙️ Cloud Functions

Cloud Functions puede generar consumo relacionado con la ejecución de funciones y los recursos utilizados.

Conceptualmente:

```text
Event / Request
      ↓
Cloud Function
      ↓
Execution
      ↓
Compute usage
```

Si tienes:

```text
100 requests
```

es muy diferente de:

```text
10,000,000 requests
```

Además, funciones que realizan operaciones costosas o tardan más tiempo pueden consumir más recursos.

---

# 🌐 Hosting

Firebase Hosting también tiene consideraciones relacionadas con:

```text
Hosting
   ↓
Storage
   +
Data transfer
```

Una aplicación pequeña:

```text
Few users
   ↓
Few downloads
```

no tiene el mismo comportamiento que una aplicación con:

```text
Millions of users
   ↓
Large assets
   ↓
High traffic
```

Por eso el tamaño de tus archivos y la cantidad de tráfico también importan.

---

# 📱 Cloud Messaging

FCM tiene un modelo diferente al de servicios como Firestore.

No debes asumir:

```text
Firebase
   ↓
Everything is charged per operation
```

Cada servicio tiene sus propias condiciones.

En Cloud Messaging debes conocer especialmente que existen **cuotas, límites y condiciones de uso que pueden variar según el escenario y el producto utilizado**.

La idea importante aquí es:

> **No asumas que todos los servicios Firebase tienen el mismo modelo de pricing.**

---

# 📏 Quotas y Limits

Hay dos conceptos que debes distinguir:

## 🟢 Quota

Una **quota** representa una cantidad de uso disponible bajo determinadas condiciones.

```text
Usage
 ↓
Quota
 ↓
¿La superaste?
```

## 🔴 Limit

Un **limit** representa una restricción técnica o de servicio.

Por ejemplo:

```text
Request
   ↓
Service
   ↓
Limit
   ↓
Allowed / Rejected
```

Pueden existir límites relacionados con:

* requests;
* tamaño de datos;
* operaciones;
* frecuencia;
* recursos;
* almacenamiento;
* ejecución.

# ⭐ No memorices números

Los números concretos pueden cambiar.

Lo que debes aprender es:

> **Cada servicio tiene cuotas y límites que debes conocer antes de llevar una aplicación a producción.**

---

# 🚨 ¿Por qué una app puede volverse costosa?

Normalmente no es porque Firebase "de repente cobre mucho".

Muchas veces el problema está relacionado con **escala + arquitectura + consumo**.

```text
Poor architecture
      ↓
Too many reads
      ↓
Too much data transfer
      ↓
Too many function executions
      ↓
High usage
      ↓
💰 Higher cost
```

Un ejemplo típico:

```text
User opens dashboard
        ↓
10 Firestore queries
        ↓
Each query reads hundreds of documents
        ↓
User refreshes
        ↓
Repeat
```

Con pocos usuarios puede parecer completamente normal.

Pero al crecer:

```text
1 user
   ↓
10 users
   ↓
1,000 users
   ↓
100,000 users
```

el consumo también puede crecer enormemente.

---

# 🧠 Cost Optimization

No necesitas convertir esto todavía en una materia completa de FinOps.

Pero sí debes desarrollar algunas buenas prácticas:

### 🔎 Consultar solamente lo necesario

❌ Traer miles de documentos y filtrar en frontend:

```text
❌ Traer miles de documentos
       ↓
   filtrar en frontend
```

Mejor:

```text
✅ Filtrar en Firestore
       ↓
   traer solamente
   los datos necesarios
```

### 📄 Diseñar bien el modelo

Tu **Data Modeling** también afecta el costo.

```text
Data Model
    ↓
Queries
    ↓
Reads
    ↓
Cost
```

Por eso el modelado de Firestore no es solamente una cuestión de organización.

---

### 🔄 Evitar operaciones innecesarias

```text
❌ Query repetida
❌ Listener innecesario
❌ Descargar archivos que no necesitas
❌ Procesamiento innecesario
```

---

### 📦 Controlar el tamaño de los datos

Especialmente en:

```text
Storage
   +
Network
```

Archivos grandes pueden generar mucho tráfico.

---

# 🧩 Costo vs Performance

Hay una conexión importante:

```text
Architecture
     │
     ├── Performance
     │
     └── Cost
```

Una mala arquitectura puede afectar ambas.

Por ejemplo:

```text
Too many Firestore reads
        ↓
🐌 Más trabajo
        +
💰 Más consumo
```

Pero cuidado:

> **Optimizar costos no significa simplemente hacer menos operaciones.**

A veces una operación adicional puede mejorar mucho la experiencia del usuario o simplificar la arquitectura.

La meta es encontrar un equilibrio entre:

```text
Performance
+
Cost
+
Scalability
+
Developer complexity
```

---

# 📈 Escalabilidad

Una aplicación pequeña puede funcionar perfectamente con una arquitectura que no escala bien.

Por ejemplo:

```text
10 users
   ↓
Everything works
```

Pero:

```text
100,000 users
   ↓
Same architecture
   ↓
Huge usage
```

Por eso debes preguntarte:

> **¿Qué ocurrirá con este patrón cuando tenga 10×, 100× o 1,000× más usuarios?**

Esta pregunta es especialmente importante para:

* Firestore reads;
* listeners;
* Storage downloads;
* Cloud Functions;
* network traffic.

---

# 🎯 Lo que realmente debes aprender

No necesitas memorizar:

```text
❌ Precio exacto de cada operación
❌ Todas las cuotas
❌ Todos los límites
```

Porque pueden cambiar.

Sí debes comprender:

```text
Firebase
   ↓
Services
   ↓
Usage
   ↓
Quotas / Limits
   ↓
Billing
```

Y especialmente:

```text
Architecture
      ↓
Usage
      ↓
Scale
      ↓
Cost
```

---

# ⭐ Concepto fundamental

Firebase puede ser **muy conveniente para comenzar** porque muchos proyectos pequeños tienen un consumo bajo.

Pero cuando aumenta el tráfico:

```text
Users
  ↓
Requests
  ↓
Reads / Writes / Storage / Functions
  ↓
Usage
  ↓
💰 Cost
```

Y una mala arquitectura puede multiplicar ese consumo.

Por eso:

> **Firebase no solamente debe diseñarse pensando en "¿funciona?", sino también en "¿cuánto consume cuando escala?"**

### 🧠 Debes poder responder

> **¿Por qué una aplicación Firebase puede ser barata con pocos usuarios y costosa con muchos usuarios?**

Porque los servicios pueden tener **pricing basado en uso**, y al aumentar los usuarios aumentan las operaciones, almacenamiento, transferencias y ejecuciones. Además, decisiones de arquitectura como queries ineficientes, listeners innecesarios o archivos demasiado grandes pueden aumentar considerablemente el consumo.
