# 📚 ESTRUCTURAS DE DATOS

Las **estructuras de datos** son formas de **organizar y almacenar información en memoria** para poder acceder, modificar, buscar y procesar datos de manera eficiente.

La estructura que eliges depende de lo que necesites hacer:

```text
Datos
  ↓
Estructura de datos
  ↓
Acceder / Buscar / Insertar / Eliminar / Ordenar
  ↓
Algoritmo
```

Por ejemplo:

```text
Usuarios
   ↓
Array
   ↓
Buscar usuario
   ↓
Algoritmo de búsqueda
```

> [!TIP]
> 🧠 La estructura de datos y el algoritmo trabajan juntos: **la estructura organiza los datos y el algoritmo define cómo procesarlos**.

---

## 📚 ÍNDICE

1. 🧠 [¿Qué son las Estructuras de Datos?](#-estructuras-de-datos)
2. 🧠 [¿Por qué son importantes?](#-por-qué-son-importantes)
3. 📊 [Complejidad](#-complejidad)
4. 📦 [Array — Arreglo](#1️⃣-array--arreglo)
5. 🔢 [Matrix — Matriz](#2️⃣-matrix--matriz)
6. 🔗 [Linked List — Lista Enlazada](#3️⃣-linked-list--lista-enlazada)
7. ↔️ [Doubly Linked List](#4️⃣-doubly-linked-list)
8. 🥞 [Stack — Pila](#5️⃣-stack--pila)
9. 🚶 [Queue — Cola](#6️⃣-queue--cola)
10. 🔑 [Hash Table — Tabla Hash](#7️⃣-hash-table--tabla-hash)
11. 🎯 [Set](#8️⃣-set)
12. 🌳 [Tree — Árbol](#9️⃣-tree--árbol)
13. 🌲 [Binary Tree](#-binary-tree)
14. 🔎 [BST — Binary Search Tree](#-bst--binary-search-tree)
15. 🏔️ [Heap — Montículo](#-heap--montículo)
16. 🚦 [Priority Queue](#-priority-queue)
17. 🕸️ [Graph — Grafo](#-graph--grafo)
18. 🔤 [Trie — Árbol de Prefijos](#-trie--árbol-de-prefijos)
19. ↔️ [Deque — Double-Ended Queue](#-deque--double-ended-queue)
20. 📊 [Graph Representations](#-graph-representations)

    * Adjacency List
    * Adjacency Matrix
21. 🧩 [Estructuras Abstractas Importantes — ADT](#-estructuras-abstractas-importantes)
22. 📊 [Tabla General](#-tabla-general)
23. 🧠 [Cómo se Relacionan](#-cómo-se-relacionan)
24. 🎯 [¿Cuáles Debes Dominar?](#-cuáles-debes-dominar)

    * 🔥 Nivel 1 — Fundamentales
    * 🔥 Nivel 2 — Estructuras Clásicas
    * 🔥 Nivel 3 — Más Avanzadas
25. ⭐ [Estructuras + Operaciones + Big O](#-y-hay-algo-más-importante)


# 🧠 ¿POR QUÉ SON IMPORTANTES?

La misma información puede almacenarse de diferentes maneras.

Por ejemplo:

```text
[10, 20, 30, 40, 50]
```

puede representarse como:

| Estructura  |
| ----------- |
| Array       |
| Linked List |
| Tree        |
| Hash Table  |
| Graph       |

Pero cada estructura tiene diferentes ventajas y costos.

Por eso debes aprender a pensar:

> **¿Qué estructura de datos es más adecuada para este problema?**

---

# 📊 COMPLEJIDAD

Las estructuras de datos están muy relacionadas con **Big O**.

Las operaciones que normalmente debes analizar son:

| Operación |
| --------- |
| Access    |
| Search    |
| Insertion |
| Deletion  |

Por ejemplo:

```text
O(1)
O(log n)
O(n)
O(n log n)
O(n²)
```

No basta con saber implementar una estructura.

También debes entender:

> **Qué tan eficiente es cada operación.**

---

# 1️⃣ ARRAY — ARREGLO

Un **Array** almacena elementos en una colección ordenada.

```text
Array

Index
  0    1    2    3
  ↓    ↓    ↓    ↓
[10] [20] [30] [40]
```

En JavaScript:

```ts
const numbers = [10, 20, 30, 40];
```

Acceso:

```ts
numbers[2];
```

Resultado:

```text
30
```

## 🧠 Características

* Elementos ordenados
* Acceso mediante índice
* Fácil de recorrer
* Muy utilizado
* Excelente para colecciones secuenciales

## ⏱️ Complejidad aproximada

| Operación        | Complejidad |
| ---------------- | ----------: |
| Access           |    **O(1)** |
| Search           |    **O(n)** |
| Insert al final  |   **O(1)*** |
| Insert al inicio |    **O(n)** |
| Delete al inicio |    **O(n)** |

> [!NOTE]
> * En arrays dinámicos puede haber ocasiones en las que una expansión implique copiar elementos.

### 📌 Idea principal

> **Array = colección indexada de elementos.**

---

# 2️⃣ MATRIX — MATRIZ

Una **Matrix** es una estructura bidimensional.

Puedes imaginarla como una tabla:

```text
       Col
       0   1   2
     ┌───┬───┬───┐
  0  │ 1 │ 2 │ 3 │
     ├───┼───┼───┤
  1  │ 4 │ 5 │ 6 │
     ├───┼───┼───┤
  2  │ 7 │ 8 │ 9 │
     └───┴───┴───┘
```

En JavaScript:

```ts
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
```

Acceder:

```ts
matrix[1][2];
```

Resultado:

```text
6
```

## 🧠 Usos

| Uso                    |
| ---------------------- |
| Tablas                 |
| Videojuegos            |
| Imágenes               |
| Mapas                  |
| Cálculos matemáticos   |
| Procesamiento de datos |

### 📌 Idea principal

> **Matrix = estructura bidimensional organizada por filas y columnas.**

---

# 3️⃣ LINKED LIST — LISTA ENLAZADA

Una **Linked List** está formada por nodos.

Cada nodo contiene:

```text
Data
 +
Reference → siguiente nodo
```

Conceptualmente:

```text
[10 | ●] → [20 | ●] → [30 | ●] → null
```

Cada nodo conoce al siguiente.

---

## 🧩 Nodo

```ts
class Node {
  constructor(
    public value: number,
    public next: Node | null = null
  ) {}
}
```

## 🧠 Características

* Elementos conectados mediante referencias
* No necesita memoria contigua como un array
* Insertar/eliminar nodos puede ser eficiente si ya tienes la referencia adecuada
* Acceso por posición no es directo

## ⏱️ Complejidad

| Operación        | Complejidad |
| ---------------- | ----------: |
| Access           |    **O(n)** |
| Search           |    **O(n)** |
| Insert al inicio |    **O(1)** |
| Delete al inicio |    **O(1)** |

> [!TIP]
> 🔗 La principal diferencia frente a un Array es que una Linked List no depende de acceder directamente mediante un índice.

### 📌 Idea principal

> **Linked List = colección de nodos conectados mediante referencias.**

---

# 4️⃣ DOUBLY LINKED LIST

Es una lista enlazada donde cada nodo apunta hacia:

```text
Previous
   ↓
[Data]
   ↓
Next
```

Por ejemplo:

```text
null ← [10] ⇄ [20] ⇄ [30] → null
```

Cada nodo tiene:

```text
prev
data
next
```

## 📌 Ventaja

Puedes recorrerla:

```text
Forward →
← Backward
```

### 📌 Idea principal

> **Doubly Linked List = Linked List con referencias hacia adelante y hacia atrás.**

# 5️⃣ STACK — PILA

Una **Stack** sigue el principio:

> **LIFO — Last In, First Out**

El último elemento que entra es el primero que sale.

```text
      ┌────┐
      │ 30 │ ← TOP
      ├────┤
      │ 20 │
      ├────┤
      │ 10 │
      └────┘
```

Si hacemos:

```text
push(40)
```

obtenemos:

```text
40 ← TOP
30
20
10
```

Y:

```text
pop()
```

elimina:

```text
40
```

---

## 🧠 Operaciones

| Operación | Función                       |
| --------- | ----------------------------- |
| `push()`  | Agrega un elemento            |
| `pop()`   | Elimina el elemento superior  |
| `peek()`  | Consulta el elemento superior |

### 📌 Ejemplo real

El historial de navegación:

```text
Page A
  ↓
Page B
  ↓
Page C
```

Volver atrás:

```text
C → B
```

### 📌 Otros usos

* Undo / Redo
* Call Stack
* Navegación
* Parsing
* Algoritmos DFS

> [!TIP]
> 🧠 **Stack = LIFO.**
>
> El último elemento en entrar es el primero en salir.

---

# 6️⃣ QUEUE — COLA

Una **Queue** sigue:

> **FIFO — First In, First Out**

El primero que entra es el primero que sale.

```text
OUT ← [10] [20] [30] [40] ← IN
```

Si hacemos:

```text
enqueue(50)
```

queda:

```text
10 20 30 40 50
```

Y:

```text
dequeue()
```

elimina:

```text
10
```

## 🧠 Operaciones

| Operación   | Función                     |
| ----------- | --------------------------- |
| `enqueue()` | Agrega un elemento          |
| `dequeue()` | Elimina el primer elemento  |
| `peek()`    | Consulta el primer elemento |

### 📌 Usos

* Procesamiento de tareas
* Colas de impresión
* Sistemas de mensajes
* Requests
* Procesamiento asíncrono
* BFS

> [!TIP]
> 🧠 **Queue = FIFO.**
>
> El primer elemento en entrar es el primero en salir.

---

# 7️⃣ HASH TABLE — TABLA HASH

Una **Hash Table** almacena información utilizando una **clave**.

Conceptualmente:

```text
Key
 ↓
Hash Function
 ↓
Index
 ↓
Value
```

Por ejemplo:

```text
"user123"
    ↓
Hash
    ↓
42
    ↓
User Object
```

En JavaScript podemos utilizar:

```ts
const users = new Map();

users.set('user123', {
  name: 'Alo'
});
```

Y después:

```ts
users.get('user123');
```

### 🧠 Ventaja principal

Permite búsquedas muy rápidas en promedio.

### ⏱️ Complejidad promedio

| Operación | Complejidad |
| --------- | ----------: |
| Search    |    **O(1)** |
| Insert    |    **O(1)** |
| Delete    |    **O(1)** |

En el peor caso puede llegar a:

```text
O(n)
```

---

## ⚠️ Collision

Dos claves pueden producir el mismo índice:

```text
Key A ──┐
        ├──→ Index 10
Key B ──┘
```

Esto se llama:

> **Hash Collision**

Debes conocer conceptualmente cómo las implementaciones pueden resolverlas.

> [!NOTE]
> 🔑 Una colisión no significa que los datos se pierdan. La implementación de la Hash Table debe utilizar alguna estrategia para manejar claves que terminan en el mismo índice.

### 📌 Idea principal

> **Hash Table = acceso rápido mediante claves y funciones hash.**

---

# 8️⃣ SET

Un **Set** almacena valores **únicos**.

```ts
const numbers = new Set([
  1,
  2,
  3,
  3
]);
```

Resultado conceptual:

```text
1
2
3
```

El `3` duplicado no se conserva.

### 🧠 Usos

| Uso                        |
| -------------------------- |
| Eliminar duplicados        |
| Comprobar existencia       |
| Manejar colecciones únicas |

```ts
numbers.has(2);
```

### 📌 Idea principal

> **Set = colección de valores únicos.**

---

# 9️⃣ TREE — ÁRBOL

Un **Tree** es una estructura jerárquica.

```text
             Root
            /    \
           A      B
          / \    / \
         C   D  E   F
```

## 🧩 Conceptos

| Concepto    | Significado                           |
| ----------- | ------------------------------------- |
| **Root**    | Nodo principal                        |
| **Node**    | Elemento del árbol                    |
| **Parent**  | Nodo que tiene hijos                  |
| **Child**   | Nodo descendiente                     |
| **Leaf**    | Nodo sin hijos                        |
| **Edge**    | Conexión entre nodos                  |
| **Depth**   | Distancia de un nodo respecto al Root |
| **Height**  | Altura del árbol/subárbol             |
| **Subtree** | Parte de un árbol                     |

### 🧠 Ejemplos reales

Los árboles aparecen en:

* Sistemas de archivos
* DOM
* Estructuras organizativas
* Bases de datos
* Compiladores
* Índices

> [!TIP]
> 🌳 Piensa en un Tree como una estructura que permite representar **relaciones jerárquicas**.

### 📌 Idea principal

> **Tree = estructura jerárquica de nodos.**

# 🔟 BINARY TREE

Un **Binary Tree** es un árbol donde cada nodo puede tener como máximo:

```text
2 children
```

Por ejemplo:

```text
        10
       /  \
      5    20
     / \
    2   7
```

Cada nodo puede tener:

| Número de hijos |
| --------------: |
|               0 |
|               1 |
|               2 |

### 📌 Idea principal

> **Binary Tree = árbol donde cada nodo tiene como máximo dos hijos.**

---

# 1️⃣1️⃣ BST — BINARY SEARCH TREE

Un **Binary Search Tree** agrega una regla de orden:

```text
Left
 ↓
Smaller values

Root

Right
 ↓
Greater values
```

Por ejemplo:

```text
        50
       /  \
     30    70
    / \    / \
   20 40  60 80
```

## 🧠 Regla

Para cada nodo:

```text
left < node < right
```

## ⏱️ Complejidad

En un árbol balanceado:

| Operación |  Complejidad |
| --------- | -----------: |
| Search    | **O(log n)** |
| Insert    | **O(log n)** |
| Delete    | **O(log n)** |

Pero si se degrada:

```text
10
  \
   20
     \
      30
        \
         40
```

puede convertirse prácticamente en una lista:

```text
O(n)
```

> [!WARNING]
> ⚠️ Un BST no garantiza `O(log n)` por sí solo. Esa complejidad depende de que el árbol se mantenga razonablemente balanceado.

### 📌 Idea principal

> **BST = Binary Tree ordenado para facilitar búsquedas.**

---

# 1️⃣2️⃣ HEAP — MONTÍCULO

Un **Heap** es una estructura especializada para obtener rápidamente el elemento de mayor o menor prioridad.

Existen principalmente:

```text
Min Heap
Max Heap
```

## 🔽 Min Heap

El menor elemento está en la raíz:

```text
        1
       / \
      3   5
     / \
    7   8
```

## 🔼 Max Heap

El mayor elemento está en la raíz:

```text
        10
       /  \
      8    7
     / \
    3   5
```

### 🧠 Usos

* Priority Queue
* Scheduling
* Algoritmos de búsqueda
* Dijkstra
* Heap Sort

### 📌 Idea principal

> **Heap = estructura optimizada para manejar prioridades.**

---

# 1️⃣3️⃣ PRIORITY QUEUE

Una **Priority Queue** es una cola donde los elementos se procesan según su **prioridad**, no simplemente por orden de llegada.

Por ejemplo:

```text
Task A → priority 3
Task B → priority 1
Task C → priority 2
```

Podría procesarse:

```text
Task B
   ↓
Task C
   ↓
Task A
```

Normalmente puede implementarse utilizando un:

```text
Heap
```

> [!TIP]
> 🧠 Una Priority Queue puede utilizar un **Heap** para organizar eficientemente los elementos según su prioridad.

### 📌 Idea principal

> **Priority Queue = primero se procesa el elemento con mayor prioridad.**

---

# 1️⃣4️⃣ GRAPH — GRAFO

Un **Graph** representa relaciones entre elementos.

Está formado por:

```text
Vertices / Nodes
+
Edges
```

Por ejemplo:

```text
A ─── B
│     │
│     │
C ─── D
```

Los nodos representan entidades:

```text
A = User
B = User
```

Las conexiones representan relaciones:

```text
A follows B
```

---

## 🧠 Tipos de Graph

### ➡️ Directed Graph

Las conexiones tienen dirección:

```text
A → B
```

No significa necesariamente:

```text
B → A
```

### ↔️ Undirected Graph

```text
A ─ B
```

La relación es bidireccional.

### ⚖️ Weighted Graph

Las conexiones tienen peso:

```text
A ──5── B
```

Ese `5` puede representar:

| Peso | Ejemplo |
|---|
| Distance | Distancia |
| Cost | Costo |
| Time | Tiempo |

### 📌 Usos

* Redes sociales
* Mapas
* Rutas
* Relaciones entre usuarios
* Dependencias
* Redes
* Sistemas de recomendación

> [!TIP]
> 🔗 Piensa en un Graph como una estructura donde lo importante son las **relaciones entre entidades**.

### 📌 Idea principal

> **Graph = estructura para representar relaciones entre entidades.**

---

# 1️⃣5️⃣ TRIE — ÁRBOL DE PREFIJOS

Un **Trie** es un árbol especializado en almacenar y buscar **strings por prefijos**.

Por ejemplo:

```text
        root
       /    \
      c      d
      |
      a
     / \
    t   r
```

Representa palabras como:

```text
cat
car
```

### 🧠 Usos

* Autocomplete
* Búsqueda por prefijos
* Diccionarios
* Correctores ortográficos

Por ejemplo:

```text
Usuario escribe:

"ca"
 ↓
Trie
 ↓
cat
car
camera
calendar
```

> [!TIP]
> 🔎 El Trie es especialmente útil cuando necesitas encontrar rápidamente palabras que comienzan con un determinado prefijo.

### 📌 Idea principal

> **Trie = árbol optimizado para trabajar con cadenas y prefijos.**

# 1️⃣6️⃣ DEQUE — DOUBLE-ENDED QUEUE

Una **Deque** permite insertar y eliminar elementos desde ambos extremos.

```text id="3h7j9x"
← [10] [20] [30] [40] →
```

Puedes hacer:

```text id="2o5k8f"
pushFront()
pushBack()

popFront()
popBack()
```

Es una combinación de comportamientos de:

```text id="6z1d3w"
Stack
+
Queue
```

### 📌 Idea principal

> **Deque = cola de doble extremo.**

---

# 1️⃣7️⃣ GRAPH REPRESENTATIONS

No solamente debes estudiar **Graph**.

También debes saber cómo representarlo.

## 📋 Adjacency List

```text id="5f0b2n"
A → [B, C]
B → [A, D]
C → [A]
D → [B]
```

Muy utilizada.

## 🧮 Adjacency Matrix

```text id="6j5w1q"
    A B C D
A   0 1 1 0
B   1 0 0 1
C   1 0 0 0
D   0 1 0 0
```

### 📌 Debes conocer ambas

```text id="h6f2s0"
Graph
 ├── Adjacency List
 └── Adjacency Matrix
```

> [!TIP]
> 🧠 **Adjacency List** suele ser conveniente cuando el grafo tiene relativamente pocas conexiones, mientras que una **Adjacency Matrix** permite comprobar directamente si existe una conexión entre dos nodos.

---

# 🧩 ESTRUCTURAS ABSTRACTAS IMPORTANTES

También hay algo que debes diferenciar:

> **Una estructura de datos concreta no es exactamente lo mismo que una estructura de datos abstracta (ADT).**

Por ejemplo:

```text id="9d7k1a"
Queue
```

describe un comportamiento:

```text id="2v4x0c"
FIFO
```

pero puede implementarse utilizando diferentes estructuras.

Por ejemplo:

```text id="8o2p6y"
Queue
  ↓
Array
```

o:

```text id="k7q3w9"
Queue
  ↓
Linked List
```

Lo mismo ocurre con:

```text id="0c6h5p"
Stack
Priority Queue
Deque
```

> [!IMPORTANT]
> 🧠 El **ADT define qué operaciones y comportamiento ofrece**, mientras que la estructura concreta define **cómo se almacenan y gestionan los datos**.

---

# 📊 TABLA GENERAL

| Estructura            | Idea principal        | Uso típico              |
| --------------------- | --------------------- | ----------------------- |
| 📦 Array              | Colección indexada    | Listas                  |
| 🔢 Matrix             | Datos 2D              | Tablas / mapas          |
| 🔗 Linked List        | Nodos enlazados       | Inserciones             |
| ↔️ Doubly Linked List | Nodos bidireccionales | Navegación              |
| 🥞 Stack              | LIFO                  | Undo / Call Stack       |
| 🚶 Queue              | FIFO                  | Tareas / requests       |
| 🔑 Hash Table         | Clave → valor         | Búsqueda rápida         |
| 🎯 Set                | Valores únicos        | Eliminar duplicados     |
| 🌳 Tree               | Jerarquía             | DOM / archivos          |
| 🌲 Binary Tree        | Máx. 2 hijos          | Estructuras jerárquicas |
| 🔎 BST                | Árbol ordenado        | Búsquedas               |
| 🏔️ Heap              | Prioridades           | Priority Queue          |
| 🚦 Priority Queue     | Prioridad             | Scheduling              |
| 🕸️ Graph             | Relaciones            | Redes / mapas           |
| 🔤 Trie               | Prefijos              | Autocomplete            |
| ↔️ Deque              | Doble extremo         | Colas flexibles         |

---

# 🧠 CÓMO SE RELACIONAN

Una buena forma de visualizarlo:

```text id="5v8k1r"
                 DATA STRUCTURES
                       │
        ┌──────────────┼──────────────┐
        │              │              │
        ▼              ▼              ▼
     LINEALES      JERÁRQUICAS    RELACIONALES
        │              │              │
   ┌────┼────┐      ┌───┼───┐         ▼
   ▼    ▼    ▼      ▼   ▼   ▼       Graph
 Array Stack Queue  Tree BST Heap
   │
   ▼
Linked List
```

Y además:

```text id="2j4m7x"
HASH TABLE
SET
TRIE
MATRIX
DEQUE
```

son estructuras especializadas que conviene conocer.

---

# 🎯 ¿CUÁLES DEBES DOMINAR?

Para tu perfil de **JavaScript / TypeScript / Angular / React / Node**, yo las estudiaría en este orden:

## 🔥 NIVEL 1 — FUNDAMENTALES

```text id="1q6z8m"
Array
Matrix
Object / Hash Table
Set
Stack
Queue
```

## 🔥 NIVEL 2 — ESTRUCTURAS CLÁSICAS

```text id="4n8p2s"
Linked List
Doubly Linked List
Tree
Binary Tree
BST
Heap
Priority Queue
```

## 🔥 NIVEL 3 — MÁS AVANZADAS

```text id="7k3v9c"
Graph
Trie
Deque
Adjacency List
Adjacency Matrix
```

---

# ⭐ Y HAY ALGO MÁS IMPORTANTE

No estudies estructuras de datos únicamente como:

> "¿Qué es un Stack?"

Estúdialas junto con **operaciones y complejidad**:

```text id="6x2m8q"
                 DATA STRUCTURE
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
       Access        Search       Insert
          │            │            │
          └────────────┼────────────┘
                       ▼
                    Delete
                       │
                       ▼
                    Big O
```

Por ejemplo:

| Estructura   | Operación |      Complejidad |
| ------------ | --------- | ---------------: |
| Array        | Access    |         **O(1)** |
| Linked List  | Access    |         **O(n)** |
| Hash Table   | Search    | **O(1) average** |
| BST balanced | Search    |     **O(log n)** |
| Graph        | Traversal |     **O(V + E)** |

> [!IMPORTANT]
> 🔥 **Ese es realmente el objetivo de estudiar estructuras de datos:** aprender a elegir la estructura adecuada según las operaciones que necesitas realizar, no memorizar una lista de nombres.

