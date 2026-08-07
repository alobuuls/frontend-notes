# 🌐 DATA & APIs

Cuando una aplicación React necesita información de un backend, normalmente sigue este flujo:

```text
⚛️ React
   ↓
🌐 HTTP Request
   ↓
🔌 REST API
   ↓
📦 JSON
   ↓
🗃️ React
   ↓
🖥️ UI
```

La idea principal de este tema es aprender **cómo obtener datos externos, controlar el estado de la petición y mantener esos datos sincronizados con la interfaz**.

---
## 📚 ÍNDICE — 🌐 DATA & APIs

1. [📡 Fetch](#1--fetch)
2. [📦 Axios](#2--axios)
3. [🔌 Consumir REST APIs](#3--consumir-rest-apis)
4. [⏳ Loading](#4--loading)
5. [✅ Success](#5--success)
6. [❌ Error](#6--error)
7. [🛑 Request Cancellation](#7--request-cancellation)
8. [🛠️ API Services](#8--api-services)
9. [🪝 Custom Hooks para APIs](#9--custom-hooks-para-apis)
10. [🧠 Server State](#10--server-state)
11. [📚 Data Fetching Libraries](#11--data-fetching-libraries)
12. [💾 Cache](#12--cache)
13. [🔄 Revalidation](#13--revalidation)
14. [🧠 Flujo Completo](#-flujo-completo)
---

# 1️⃣ 📡 FETCH

`fetch()` es una API disponible en los navegadores que permite realizar **peticiones HTTP**.

No pertenece específicamente a React.

Puedes utilizarla para:

```text
GET
POST
PUT
PATCH
DELETE
```

Ejemplo:

```tsx
const response = await fetch("/api/users");
const data = await response.json();
```

### 🧠 Flujo

```text
fetch()
   ↓
HTTP Request
   ↓
Server
   ↓
Response
   ↓
response.json()
   ↓
Data
```

### 📌 Importante

`fetch()` devuelve una **Promise**.

Por eso normalmente se utiliza con:

```tsx
async / await
```

o:

```tsx
.then()
.catch()
```

---

# 2️⃣ 📦 AXIOS

**Axios** es una librería externa para realizar peticiones HTTP.

A diferencia de `fetch`, Axios no forma parte de las APIs estándar del navegador.

Ejemplo:

```tsx
const response = await axios.get("/api/users");

console.log(response.data);
```

También permite:

```tsx
axios.get()
axios.post()
axios.put()
axios.patch()
axios.delete()
```

### 🆚 Fetch vs Axios

| Característica            | `fetch`                 | Axios                               |
| ------------------------- | ----------------------- | ----------------------------------- |
| ¿Es nativo del navegador? | ✅ Sí                    | ❌ No                                |
| ¿Necesita instalación?    | ❌ No                    | ✅ Sí                                |
| JSON automático           | ❌ Debes llamar `json()` | ✅ Más directo                       |
| Interceptors              | ❌ No nativos            | ✅ Sí                                |
| Cancelación               | `AbortController`       | APIs propias/estándar según versión |
| Tamaño de dependencia     | 0                       | Añade dependencia                   |
| Uso                       | Simple y directo        | Más funcionalidades                 |

### 🧠 Idea clave

```text
fetch
 ↓
API nativa

Axios
 ↓
Librería HTTP
```

No necesitas Axios obligatoriamente para consumir APIs desde React.

---

# 3️⃣ 🔌 CONSUMIR REST APIs

Consumir una API significa que tu aplicación frontend realiza peticiones a un backend para **obtener o modificar información**.

Por ejemplo:

```text
React
  ↓
GET /users
  ↓
Backend
  ↓
JSON
  ↓
React
```

Ejemplo:

```tsx
const response = await fetch("/api/users");
const users = await response.json();
```

Para crear información:

```tsx
await fetch("/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "John"
  })
});
```

### 📌 Métodos HTTP

| Método   | Uso habitual            |
| -------- | ----------------------- |
| `GET`    | Obtener información     |
| `POST`   | Crear                   |
| `PUT`    | Reemplazar/actualizar   |
| `PATCH`  | Actualizar parcialmente |
| `DELETE` | Eliminar                |

---

# 4️⃣ ⏳ LOADING

Cuando haces una petición HTTP, la respuesta no llega inmediatamente.

Por eso la interfaz necesita representar el estado:

```text
Request
   ↓
⏳ Loading
   ↓
Response
```

Puedes manejarlo con state:

```tsx
const [loading, setLoading] = useState(false);
```

Ejemplo:

```tsx
setLoading(true);

try {
  const response = await fetch("/api/users");
  const data = await response.json();

  setUsers(data);
} finally {
  setLoading(false);
}
```

En la UI:

```tsx
{loading && <p>Loading...</p>}
```

### 🧠 ¿Por qué es importante?

Evita que el usuario piense que:

* la aplicación está congelada;
* el botón no funcionó;
* no existe información.

---

# 5️⃣ ✅ SUCCESS

Una petición puede terminar correctamente.

Por ejemplo:

```text
Request
   ↓
Server
   ↓
200 OK
   ↓
Data
   ↓
State
   ↓
UI
```

Puedes almacenar los datos:

```tsx
const [users, setUsers] = useState<User[]>([]);
```

Después:

```tsx
const data = await response.json();

setUsers(data);
```

Y React actualizará la interfaz:

```tsx
{users.map(user => (
  <p key={user.id}>{user.name}</p>
))}
```

### 🧠 Estados típicos

```text
⏳ loading
   ↓
✅ success
   ↓
📦 data
```

---

# 6️⃣ ❌ ERROR

Una petición también puede fallar.

Por ejemplo:

```text
Request
   ↓
Server
   ↓
❌ Error
```

Puedes manejarlo con state:

```tsx
const [error, setError] = useState<string | null>(null);
```

Ejemplo:

```tsx
try {
  const response = await fetch("/api/users");

  if (!response.ok) {
    throw new Error("Request failed");
  }

  const data = await response.json();

  setUsers(data);
} catch (error) {
  setError("Unable to load users");
}
```

Después:

```tsx
{error && <p>{error}</p>}
```

### 🧠 Estado completo

```text
       REQUEST
          │
    ┌─────┴─────┐
    ▼           ▼
 LOADING      Request
                │
          ┌─────┴─────┐
          ▼           ▼
       SUCCESS       ERROR
          │           │
          ▼           ▼
         DATA        MESSAGE
```

---

# 7️⃣ 🛑 REQUEST CANCELLATION

A veces necesitas cancelar una petición HTTP.

Por ejemplo:

```text
Usuario entra a página
       ↓
Request comienza
       ↓
Usuario abandona página
       ↓
Request ya no es necesaria
```

Con `fetch()` puedes utilizar `AbortController`.

```tsx
const controller = new AbortController();

fetch("/api/users", {
  signal: controller.signal
});
```

Para cancelar:

```tsx
controller.abort();
```

### 🧠 En React

Es especialmente importante cuando una petición está relacionada con el ciclo de vida de un componente.

Ejemplo:

```tsx
useEffect(() => {
  const controller = new AbortController();

  fetch("/api/users", {
    signal: controller.signal
  });

  return () => {
    controller.abort();
  };
}, []);
```

### 📌 ¿Por qué cancelar?

Puede ayudar a evitar:

* peticiones innecesarias;
* trabajo que ya no necesitas;
* resultados de requests obsoletas;
* problemas cuando el usuario cambia rápidamente de pantalla.

---

# 8️⃣ 🛠️ API SERVICES

En proyectos pequeños podrías hacer:

```tsx
fetch("/api/users");
```

directamente dentro de un componente.

Pero conforme crece la aplicación, es mejor separar la lógica de comunicación con el backend.

Por ejemplo:

```text
src/
├── components/
├── pages/
├── hooks/
└── services/
    └── users.service.ts
```

El service podría encargarse de:

```tsx
export async function getUsers() {
  const response = await fetch("/api/users");

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
}
```

El componente:

```tsx
const users = await getUsers();
```

### 🧠 Separación de responsabilidades

```text
Component
   ↓
UI

Service
   ↓
HTTP / API

Backend
   ↓
Data
```

Esto hace que los componentes sean más fáciles de mantener.

---

# 9️⃣ 🪝 CUSTOM HOOKS PARA APIs

Un Custom Hook puede encapsular la lógica relacionada con una petición.

Por ejemplo:

```tsx
function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // lógica de fetching...

  return {
    users,
    loading,
    error
  };
}
```

Después:

```tsx
function UsersPage() {
  const {
    users,
    loading,
    error
  } = useUsers();

  // UI
}
```

### 🧠 ¿Qué estamos separando?

```text
Component
   ↓
UI

Custom Hook
   ↓
Estado + fetching

Service
   ↓
HTTP
```

Esto permite reutilizar la lógica:

```text
useUsers()
   │
   ├── UsersPage
   ├── AdminPage
   └── Dashboard
```

---

# 🔟 🧠 SERVER STATE

**Server State** es la información que pertenece al servidor pero que la aplicación frontend necesita mostrar o utilizar.

Ejemplos:

```text
👤 Users
📦 Products
📝 Posts
💳 Orders
📊 Statistics
```

No es exactamente lo mismo que el estado local de un componente.

### 🆚 Client State vs Server State

| Tipo             | Ejemplo       | Propietario |
| ---------------- | ------------- | ----------- |
| 🖥️ Client State | Modal abierto | Frontend    |
| 🖥️ Client State | Input value   | Frontend    |
| 🖥️ Client State | Tema oscuro   | Frontend    |
| 🌐 Server State  | Users         | Backend     |
| 🌐 Server State  | Products      | Backend     |
| 🌐 Server State  | Orders        | Backend     |

### 🧠 Diferencia fundamental

```text
CLIENT STATE

React
  ↓
useState
  ↓
UI


SERVER STATE

Backend
  ↓
API
  ↓
React
  ↓
Cache
  ↓
UI
```

El Server State tiene características especiales:

* puede cambiar fuera de React;
* puede estar desactualizado;
* necesita sincronización;
* puede almacenarse en cache;
* puede requerir refetch.

---

# 1️⃣1️⃣ 📚 DATA FETCHING LIBRARIES

Cuando una aplicación empieza a tener muchas peticiones, manejar manualmente:

```text
loading
error
data
cache
refetch
retry
cancellation
```

puede generar bastante código.

Por eso existen librerías especializadas.

Algunas conocidas en el ecosistema React son:

| Librería           | Enfoque                                   |
| ------------------ | ----------------------------------------- |
| **TanStack Query** | Server state, cache y sincronización      |
| **SWR**            | Data fetching + cache + revalidation      |
| **RTK Query**      | Data fetching integrado con Redux Toolkit |
| **Apollo Client**  | GraphQL + cache                           |
| **urql**           | GraphQL                                   |

### 🧠 Ejemplo conceptual

Sin librería:

```text
Component
 ↓
useEffect
 ↓
fetch
 ↓
loading
 ↓
error
 ↓
data
 ↓
cache
 ↓
refetch
```

Con una librería especializada:

```text
Component
   ↓
Data fetching library
   ↓
API
```

La librería se encarga de gran parte de la infraestructura.

---

# 1️⃣2️⃣ 💾 CACHE

Una **cache** permite guardar temporalmente información para evitar solicitudes innecesarias.

Ejemplo:

```text
Primera visita

React
 ↓
API
 ↓
Users
 ↓
Cache
```

Después:

```text
Segunda visita

React
 ↓
Cache
 ↓
Users
```

En lugar de solicitar siempre los mismos datos al servidor.

### 🧠 ¿Qué puede mejorar?

* ⚡ Velocidad percibida.
* 🌐 Menos requests.
* 📉 Menor carga del servidor.
* 📱 Mejor experiencia con conexiones lentas.

### ⚠️ Problema

Los datos almacenados pueden quedar desactualizados.

Por ejemplo:

```text
Cache:
User name = "John"

Backend:
User name = "Jonathan"
```

Entonces necesitas estrategias para decidir **cuándo volver a consultar el servidor**.

---

# 1️⃣3️⃣ 🔄 REVALIDATION

La **revalidación** consiste en comprobar si los datos que tienes siguen siendo correctos o necesitan actualizarse.

Conceptualmente:

```text
Cache
  ↓
¿Los datos siguen siendo válidos?
  │
 ┌┴───────┐
 ▼        ▼
Sí       No
 │        │
 ▼        ▼
Usar     Refetch
cache      │
           ▼
          API
           │
           ▼
      Actualizar cache
```

Por ejemplo:

```text
Usuario abre dashboard
       ↓
Hay datos en cache
       ↓
Mostrar datos rápidamente
       ↓
Consultar servidor
       ↓
¿Cambió algo?
       ↓
Actualizar UI
```

### 📌 ¿Por qué existe?

Porque el Server State puede cambiar **aunque el usuario no haga nada en la aplicación**.

Otro usuario podría modificar:

```text
User
Product
Order
Post
```

directamente en el backend.

Por eso la aplicación necesita estrategias para mantener los datos razonablemente actualizados.

---

# 🧠 FLUJO COMPLETO

Una aplicación React puede terminar teniendo una arquitectura como esta:

```text
                 ⚛️ REACT
                    │
                    ▼
             🪝 Custom Hook
                    │
                    ▼
          📚 Data Fetching Layer
                    │
             ┌──────┴──────┐
             ▼             ▼
           Cache         Request
                           │
                           ▼
                      🌐 REST API
                           │
                           ▼
                         JSON
                           │
                           ▼
                       Server
                           │
                           ▼
                    Response
                           │
                  ┌────────┼────────┐
                  ▼        ▼        ▼
               Loading   Success   Error
                           │
                           ▼
                         Data
                           │
                           ▼
                        🖥️ UI
```

### 🎯 Idea clave

> **Consumir una API en React no consiste únicamente en hacer un `fetch()`. Una aplicación real debe manejar el ciclo completo de la petición: loading, success, error, cancelación, estado de los datos, cache y sincronización con el servidor.**
