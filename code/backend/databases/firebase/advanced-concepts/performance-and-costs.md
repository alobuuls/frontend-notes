# ⚡ Firebase Performance & Costs

Este documento conecta algo que ya viste por separado:

```text
Firebase Architecture
        +
Data Modeling
        +
Queries
        +
Pricing
```

La idea ahora es entender que **las decisiones técnicas afectan tanto al rendimiento como al costo**.

> **En Firebase, performance no significa únicamente que algo sea rápido. También significa evitar trabajo, lecturas, transferencias y ejecuciones innecesarias.**

---

# 📑 Índice — Firebase Performance & Costs

1. 🧠 [Performance ≠ Solamente velocidad](#-performance--solamente-velocidad)
2. 🗄️ [Firestore Performance](#️-firestore-performance)
3. 👀 [Reads](#-reads)
4. 🔎 [Queries eficientes](#-queries-eficientes)
5. 📄 [Pagination](#-pagination)
6. 🔄 [Realtime Listeners](#-realtime-listeners)
7. 🔥 [Listener = Actividad continua](#-listener--actividad-continua)
8. 📑 [Indexes](#-indexes)
9. 🧩 [Document Structure](#-document-structure)
10. 🔁 [Denormalization](#-denormalization)
11. 📁 [Storage Performance](#-storage-performance)
12. 🖼️ [Optimización de imágenes](#️-optimización-de-imágenes)
13. 🌐 [Bandwidth](#-bandwidth)
14. ⚙️ [Cloud Functions](#️-cloud-functions)
15. 🥶 [Cold Starts](#-cold-starts)
16. 🧠 [Evitar invocaciones innecesarias](#-evitar-invocaciones-innecesarias)
17. 💾 [Caching](#-caching)
18. 🔗 [La relación completa](#-la-relación-completa)
19. ⭐ [Ejemplo completo](#-ejemplo-completo)
20. 🔥 [Debes recordar](#-debes-recordar)
    - 20.1 [Menos datos innecesarios](#1️⃣-menos-datos-innecesarios)
    - 20.2 [Realtime solo cuando aporta valor](#2️⃣-realtime-solo-cuando-aporta-valor)
    - 20.3 [Paginar grandes datasets](#3️⃣-paginar-grandes-datasets)
    - 20.4 [Optimizar archivos](#4️⃣-optimizar-archivos)
    - 20.5 [Cuidar Functions](#5️⃣-cuidar-functions)
    - 20.6 [Diseñar pensando en escala](#6️⃣-diseñar-pensando-en-escala)
21. 🎯 [Concepto final](#-concepto-final)

# 🧠 Performance ≠ Solamente velocidad

En una aplicación tradicional puedes pensar:

```text
Performance
    ↓
Tiempo de respuesta
```

En Firebase debes ampliar esa idea:

```text
Performance
      ↓
¿Estoy haciendo trabajo innecesario?
      ↓
Reads / Writes
Network
Listeners
Functions
Storage
      ↓
Performance + Cost
```

Por ejemplo:

```text
❌
Usuario abre una pantalla
        ↓
Descargar 5,000 documentos
        ↓
Filtrar en Angular
        ↓
Mostrar 20
```

Aunque funcione, estás haciendo mucho trabajo innecesario.

Mejor:

```text
✅
Usuario abre una pantalla
        ↓
Query específica
        ↓
limit()
        ↓
Solo documentos necesarios
```

---

# 🗄️ Firestore Performance

Aquí debes conectar lo aprendido sobre **queries y data modeling**.

Los principales aspectos son:

| Aspecto            |
| ------------------ |
| Reads              |
| Writes             |
| Queries            |
| Listeners          |
| Pagination         |
| Indexes            |
| Document structure |
| Denormalization    |

La pregunta importante no es solamente:

> "¿Puedo hacer esta query?"

Sino:

> **"¿Qué cantidad de datos y operaciones implica esta query?"**

---

# 👀 Reads

Una de las cosas que debes vigilar son las lecturas.

```text
Firestore
   ↓
Query
   ↓
1,000 documents
   ↓
Application
```

Si realmente solo necesitas:

```text
20 documents
```

estás realizando trabajo innecesario.

Por eso debes pensar:

```text
Query
 ↓
Filter
 ↓
Limit
 ↓
Pagination
 ↓
Solo datos necesarios
```

---

# 🔎 Queries eficientes

Una query eficiente intenta obtener **los datos que realmente necesita la interfaz**.

```text
❌
Obtener todos los productos
        ↓
Filtrar en frontend
        ↓
Mostrar 10
```

vs.

```text
✅
Firestore
   ↓
where(...)
   ↓
orderBy(...)
   ↓
limit(10)
   ↓
10 documentos
```

Esto reduce la cantidad de información que debe viajar desde Firebase hacia tu aplicación.

---

# 📄 Pagination

La paginación es especialmente importante cuando una colección puede crecer mucho.

Sin paginación:

```text
Users
↓
100,000 documents
↓
Query
↓
💥 Demasiados datos
```

Con paginación:

```text
Users
↓
Query
↓
20 documents
↓
Next page
↓
20 documents
```

Conceptualmente:

```text
Large Dataset
      ↓
Small chunks
      ↓
Better UX
+
Less unnecessary data
```

No significa que la paginación automáticamente haga cualquier query barata, pero evita descargar grandes cantidades de datos de una sola vez.

---

# 🔄 Realtime Listeners

Los listeners son muy útiles cuando realmente necesitas datos en tiempo real.

Pero no deberías utilizarlos indiscriminadamente.

```text
❌
Listener
   ↓
Large collection
   ↓
Constant changes
   ↓
Many updates
   ↓
Network + processing
```

Mientras que:

```text
✅
Listener
   ↓
Small relevant dataset
   ↓
Only when realtime matters
```

La pregunta que debes hacerte es:

> **¿Necesito realmente que estos datos se actualicen en tiempo real?**

---

# 🔥 Listener = Actividad continua

Recuerda que un listener no es una lectura única.

Conceptualmente:

```text
Subscribe
    ↓
Initial data
    ↓
Listen
    ↓
Data changes
    ↓
Receive updates
    ↓
Unsubscribe
```

Por eso debes considerar:

```text
Listener
   ↓
Changes
   ↓
Reads / Network activity
   ↓
Processing
   ↓
Potential cost
```

No significa:

> "Los listeners son malos."

Significa:

> **Úsalos cuando el valor del tiempo real justifique mantenerlos activos.**

---

# 📑 Indexes

Los índices ayudan a Firestore a ejecutar determinadas consultas de manera eficiente.

Conceptualmente:

```text
Query
 ↓
Index
 ↓
Find matching documents
```

En lugar de pensar solamente:

> "Necesito un índice porque Firestore me lo pidió."

Debes entender que los índices forman parte de la relación:

```text
Data Model
    ↓
Queries
    ↓
Indexes
    ↓
Performance
```

Además, los índices también forman parte del diseño de tu database, por lo que no debes crearlos sin entender qué consultas necesitas soportar.

---

# 🧩 Document Structure

La estructura de tus documentos también afecta cómo accedes a los datos.

Por ejemplo, si una pantalla necesita constantemente ciertos datos juntos:

```text
Document
├── name
├── country
├── avatar
└── status
```

puede ser más práctico que diseñar una estructura que obligue a realizar múltiples lecturas para obtener información que normalmente se utiliza junta.

Esto conecta directamente con:

```text
Firestore Data Modeling
```

y con:

```text
Embedding
Referencing
Subcollections
Denormalization
```

---

# 🔁 Denormalization

En Firestore puede ser razonable duplicar ciertos datos para evitar lecturas adicionales.

Por ejemplo:

```text
users
└── user_001
      └── name: "Alo"
```

y:

```text
posts
└── post_001
      ├── authorId: "user_001"
      └── authorName: "Alo"
```

Aquí existe duplicación:

```text
"Alo"
   ↓
Duplicated data
```

Pero puede permitir:

```text
Post
↓
Read
↓
authorName
```

sin necesitar otra lectura para obtener el nombre.

### ⚠️ Trade-off

La denormalización no es gratis.

Ahora debes mantener:

```text
Data duplicated
      ↓
Consistency
```

Por eso debes comparar:

```text
Extra read
      vs.
Duplicated data
```

---

# 📁 Storage Performance

En Storage debes prestar atención especialmente a:

| Aspecto                  |
| ------------------------ |
| tamaño de archivos       |
| bandwidth                |
| downloads                |
| formatos                 |
| compresión               |
| optimización de imágenes |

Por ejemplo:

```text
❌
Original image
 ↓
8 MB
 ↓
Upload
 ↓
Download
 ↓
Network
```

vs.

```text
✅
Optimized image
 ↓
300 KB
 ↓
Upload
 ↓
Download
 ↓
Much less data
```

---

# 🖼️ Optimización de imágenes

Si una aplicación almacena muchas imágenes, el tamaño puede tener un impacto importante.

Puedes considerar:

```text
Original
   ↓
Resize
   ↓
Compress
   ↓
Optimized format
   ↓
Storage
```

La idea no es comprimir absolutamente todo al máximo.

Debes buscar un equilibrio entre:

```text
Image Quality
+
File Size
+
Loading Time
+
Bandwidth
```

---

# 🌐 Bandwidth

Una aplicación puede tener pocos archivos almacenados pero generar mucho tráfico.

Por ejemplo:

```text
Storage
   ↓
1,000 images
```

no necesariamente significa mucho consumo de red.

Pero:

```text
1,000 images
   ↓
Millions of downloads
   ↓
High bandwidth
```

es un escenario completamente diferente.

Por eso debes distinguir:

```text
Storage
↓
¿Cuánto guardo?
```

de:

```text
Bandwidth
↓
¿Cuánto transfiero?
```

---

# ⚙️ Cloud Functions

En Functions debes prestar atención a:

| Aspecto                  |
| ------------------------ |
| número de invocaciones   |
| tiempo de ejecución      |
| memoria                  |
| cold starts              |
| operaciones innecesarias |

Conceptualmente:

```text
Request / Event
      ↓
Function invocation
      ↓
Execution
      ↓
Compute
      ↓
Cost
```

Una función que se ejecuta millones de veces requiere mucho más cuidado que una función utilizada ocasionalmente.

---

# 🥶 Cold Starts

Ya viste este concepto en Serverless.

Recuerda:

```text
Function inactive
      ↓
Request
      ↓
Initialization
      ↓
Function execution
```

Ese tiempo inicial puede afectar la latencia.

Por eso una buena práctica conceptual es:

```text
Function
   ↓
Minimal unnecessary initialization
   ↓
Fast startup
```

No significa eliminar todos los cold starts; forman parte del modelo serverless.

---

# 🧠 Evitar invocaciones innecesarias

Por ejemplo:

```text
❌
Frontend
   ↓
Request
   ↓
Function
   ↓
Another unnecessary function
   ↓
Database
```

Si una parte de ese flujo no aporta valor, estás agregando:

```text
Latency
+
Compute
+
Complexity
```

Por eso debes diseñar las Functions con una responsabilidad clara.

---

# 💾 Caching

El caching puede evitar repetir operaciones que ya realizaste.

Conceptualmente:

```text
Request
   ↓
¿Data available in cache?
   ├── Yes → Use cached data
   │
   └── No
        ↓
      Firebase
        ↓
      Cache result
```

Esto puede reducir:

```text
Network requests
+
Database reads
+
Latency
```

Pero debes tener cuidado con:

```text
Cache
   ↓
Stale data
```

Por eso el caching siempre implica un equilibrio entre:

> **Performance y frescura de los datos.**

---

# 🔗 La relación completa

Este es el concepto que debes llevarte de este documento:

```text
Database Design
       ↓
Queries
       ↓
Indexes
       ↓
Pagination
       ↓
Listeners
       ↓
Caching
       ↓
Data Transfer
       ↓
Performance + Cost
```

No son conceptos independientes.

Una decisión en el **Data Model** puede afectar las queries.

Las queries afectan las lecturas.

Las lecturas afectan el consumo.

Y todo eso puede terminar afectando:

```text
⚡ Performance
💰 Cost
📈 Scalability
```

---

# ⭐ Ejemplo completo

Imagina un dashboard que necesita mostrar los últimos 20 pedidos.

### ❌ Diseño poco eficiente

```text
Dashboard
   ↓
Listener
   ↓
All orders
   ↓
10,000 documents
   ↓
Filter in Angular
   ↓
Show 20
```

Problemas potenciales:

```text
❌ Muchos datos
❌ Muchas lecturas
❌ Más network
❌ Más procesamiento
❌ Mayor costo
```

### ✅ Diseño más adecuado

```text
Dashboard
   ↓
Firestore query
   ↓
Filter
   ↓
orderBy(...)
   ↓
limit(20)
   ↓
Pagination
   ↓
20 documents
```

Y si realmente necesitas actualización en tiempo real:

```text
Dashboard
   ↓
Small targeted listener
   ↓
Relevant orders
```

La clave es:

> **Diseñar la forma de acceso a los datos alrededor de lo que realmente necesita la aplicación.**

---

# 🔥 Debes recordar

### 1️⃣ Menos datos innecesarios

```text
Query
↓
Only what you need
```

### 2️⃣ Realtime solo cuando aporta valor

```text
Need realtime?
    ↓
Yes → Listener
No  → Normal read
```

### 3️⃣ Paginar grandes datasets

```text
Large collection
↓
Small pages
```

### 4️⃣ Optimizar archivos

```text
Large file
↓
Resize / Compress
↓
Smaller transfer
```

### 5️⃣ Cuidar Functions

```text
Invocation
↓
Execution
↓
Compute
```

### 6️⃣ Diseñar pensando en escala

```text
10 users
   ↓
1,000 users
   ↓
100,000 users
```

Una arquitectura que funciona con 10 usuarios no necesariamente es adecuada para 100,000.

---

# 🎯 Concepto final

> **En Firebase, performance y costos están profundamente relacionados con cómo diseñas tus datos, tus queries, tus listeners, tus archivos y tus funciones.**

La pregunta que debes acostumbrarte a hacer es:

```text
¿Funciona?
   ↓
¿Es eficiente?
   ↓
¿Escala?
   ↓
¿Cuánto consume?
```

Ese es el cambio de mentalidad de pasar de simplemente **"hacer que Firebase funcione"** a **diseñar una aplicación Firebase correctamente**.

