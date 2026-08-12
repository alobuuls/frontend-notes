# 📄 01 - Cloud Functions

## 📑 Índice

- [📄 01 - Cloud Functions](#-01---cloud-functions)
  - [📑 Índice](#-índice)
  - [⚙️ ¿Qué es Cloud Functions?](#️-qué-es-cloud-functions)
  - [🎯 ¿Qué problema resuelve?](#-qué-problema-resuelve)
  - [🖥️ Backend sin administrar directamente un servidor](#️-backend-sin-administrar-directamente-un-servidor)
  - [⚡ Funciones ejecutadas bajo demanda](#-funciones-ejecutadas-bajo-demanda)
  - [🔗 Cloud Functions + Firebase](#-cloud-functions--firebase)
  - [🌐 Frontend vs Cloud Function vs Backend tradicional](#-frontend-vs-cloud-function-vs-backend-tradicional)
    - [Frontend](#frontend)
    - [Cloud Function](#cloud-function)
    - [Backend tradicional](#backend-tradicional)
  - [🚀 ¿Cuándo usar Cloud Functions?](#-cuándo-usar-cloud-functions)
  - [🧩 Function-as-a-Service (FaaS)](#-function-as-a-service-faas)
  - [⚖️ Ventajas](#️-ventajas)
  - [⚠️ Desventajas](#️-desventajas)
  - [🔥 Evento → Function](#-evento--function)
  - [⭐ Idea fundamental](#-idea-fundamental)

## ⚙️ ¿Qué es Cloud Functions?

**Cloud Functions** es un servicio de Firebase que permite ejecutar **código backend sin tener que administrar directamente un servidor**.

La idea principal es:

```text
Angular
   ↓
Firebase
   ↓
Cloud Function
   ↓
Backend Logic
```

Una Cloud Function ejecuta código en un entorno administrado por Firebase/Google Cloud.

---

## 🎯 ¿Qué problema resuelve?

Permite ejecutar lógica backend sin tener que encargarte directamente de:

* Administrar un servidor.
* Mantener el sistema operativo.
* Configurar manualmente la infraestructura.
* Mantener un proceso backend ejecutándose permanentemente.

Conceptualmente:

```text
Código Backend
      ↓
Cloud Functions
      ↓
Infraestructura administrada
```

---

## 🖥️ Backend sin administrar directamente un servidor

En un backend tradicional puedes tener:

```text
Frontend
   ↓
Server
   ↓
Backend
   ↓
Database
```

Con Cloud Functions:

```text
Frontend
   ↓
Cloud Function
   ↓
Database
```

La infraestructura necesaria para ejecutar la función es administrada por la plataforma.

---

## ⚡ Funciones ejecutadas bajo demanda

Una Cloud Function normalmente se ejecuta cuando ocurre algo que la activa.

Por ejemplo:

```text
Evento
   ↓
Cloud Function
   ↓
Lógica
```

Cuando termina la ejecución:

```text
Cloud Function
   ↓
Execution complete
```

No debes pensar en ella simplemente como un servidor tradicional que permanece ejecutándose continuamente.

---

## 🔗 Cloud Functions + Firebase

Cloud Functions puede interactuar con diferentes servicios de Firebase y otros sistemas.

Por ejemplo:

```text
Cloud Function
    │
    ├── Firestore
    ├── Storage
    ├── Authentication
    └── External API
```

---

## 🌐 Frontend vs Cloud Function vs Backend tradicional

### Frontend

Se ejecuta en el dispositivo o navegador del usuario:

```text
Angular
   ↓
UI
   ↓
User
```

### Cloud Function

Ejecuta lógica backend en un entorno administrado:

```text
Cloud Function
   ↓
Backend Logic
```

### Backend tradicional

Normalmente tienes un servidor o infraestructura que ejecuta tu aplicación backend:

```text
Frontend
   ↓
Server
   ↓
Backend
   ↓
Database
```

La diferencia principal es **quién administra la infraestructura y cómo se ejecuta el código backend**.

---

## 🚀 ¿Cuándo usar Cloud Functions?

Son útiles cuando necesitas ejecutar lógica backend como respuesta a:

```text
HTTP Request
      ↓
Cloud Function
```

o:

```text
Firebase Event
      ↓
Cloud Function
```

Por ejemplo, conceptualmente:

```text
Nuevo documento
      ↓
Cloud Function
      ↓
Procesar datos
      ↓
Actualizar Database
```

También pueden utilizarse para:

* Procesar datos.
* Ejecutar lógica que no debería estar en el frontend.
* Integrarse con APIs externas.
* Responder a eventos de Firebase.
* Ejecutar tareas backend específicas.

---

## 🧩 Function-as-a-Service (FaaS)

Cloud Functions pertenece al modelo **Function-as-a-Service (FaaS)**.

La idea es:

```text
Developer
   ↓
Escribe una función
   ↓
Cloud Platform
   ↓
Ejecuta la función cuando corresponde
```

En lugar de administrar directamente un servidor completo, te concentras principalmente en el código que debe ejecutarse.

---

## ⚖️ Ventajas

Entre sus principales ventajas:

* Menor administración de infraestructura.
* Integración con servicios de Firebase.
* Ejecución bajo demanda.
* Escalabilidad administrada.
* Permite ejecutar lógica backend sin exponerla al frontend.

---

## ⚠️ Desventajas

También existen limitaciones:

* Dependencia del proveedor.
* Costos según uso.
* Límites propios de la plataforma.
* Posible **cold start**.
* No siempre es la mejor opción para cualquier backend.
* Mayor dificultad para migrar una arquitectura completamente dependiente de servicios específicos.

---

## 🔥 Evento → Function

Uno de los conceptos principales es:

```text
Evento
   ↓
Cloud Function
   ↓
Lógica
   ↓
Database / Storage / API
```

Por ejemplo:

```text
Firestore Event
      ↓
Cloud Function
      ↓
Procesar información
      ↓
External API
```

---

## ⭐ Idea fundamental

Una Cloud Function **no es simplemente una función de JavaScript ejecutada dentro de Firebase**.

Es:

> **Código backend que se ejecuta en un entorno administrado en respuesta a una petición o evento.**

Conceptualmente:

```text
Request / Event
       ↓
Cloud Function
       ↓
Backend Logic
       ↓
Firebase / Database / Storage / API
```
