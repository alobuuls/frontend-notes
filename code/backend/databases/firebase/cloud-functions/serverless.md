# 📄 04 - Serverless

# 📑 Índice

- [📄 04 - Serverless](#-04---serverless)
- [📑 Índice](#-índice)
  - [☁️ ¿Qué significa Serverless?](#️-qué-significa-serverless)
  - [🖥️ Serverless vs servidor tradicional](#️-serverless-vs-servidor-tradicional)
    - [Traditional Backend](#traditional-backend)
    - [Serverless](#serverless)
  - [⚡ FaaS](#-faas)
  - [🏗️ Managed Infrastructure](#️-managed-infrastructure)
  - [🔄 Event-Driven Architecture](#-event-driven-architecture)
  - [📈 Auto-Scaling](#-auto-scaling)
  - [🧠 Stateless Functions](#-stateless-functions)
  - [🥶 Cold Start](#-cold-start)
  - [⏱️ Tiempo de ejecución](#️-tiempo-de-ejecución)
  - [🚧 Límites de las funciones](#-límites-de-las-funciones)
  - [💰 Costos basados en uso](#-costos-basados-en-uso)
  - [✅ Ventajas de Serverless](#-ventajas-de-serverless)
  - [⚠️ Desventajas de Serverless](#️-desventajas-de-serverless)
  - [⭐ Idea fundamental](#-idea-fundamental)

## ☁️ ¿Qué significa Serverless?

**Serverless** es un modelo de arquitectura donde tú no administras directamente los servidores o la infraestructura que ejecuta tu aplicación.

> **"Serverless" no significa que no existan servidores.**
> Significa que la infraestructura es administrada por el proveedor.

Conceptualmente:

```text
SERVERLESS

Request / Event
      ↓
Cloud Function
      ↓
Firebase / Google Cloud

La infraestructura la administra el proveedor
```

---

## 🖥️ Serverless vs servidor tradicional

### Traditional Backend

```text
Express
   ↓
Server
   ↓
Application
   ↓
Database

Tú administras el servidor
```

### Serverless

```text
Request / Event
      ↓
Cloud Function
      ↓
Firebase / Google Cloud

El proveedor administra la infraestructura
```

---

## ⚡ FaaS

**FaaS (Function-as-a-Service)** es un modelo de Serverless donde ejecutas código mediante funciones.

```text
Event / Request
      ↓
Function
      ↓
Execute Code
      ↓
Finish
```

Cloud Functions es un ejemplo de este modelo.

---

## 🏗️ Managed Infrastructure

En Serverless, el proveedor se encarga de gran parte de la infraestructura necesaria para ejecutar tu código.

Por ejemplo:

* Servidores.
* Provisionamiento de recursos.
* Escalado de infraestructura.
* Disponibilidad de la plataforma.
* Parte de la administración operativa.

Tú te concentras principalmente en:

```text
Business Logic
      ↓
Function
```

---

## 🔄 Event-Driven Architecture

Serverless se utiliza frecuentemente junto con arquitecturas **event-driven**.

```text
Event
  ↓
Function
  ↓
Logic
```

Por ejemplo:

```text
File uploaded
      ↓
Cloud Function
      ↓
Process file
```

La ejecución comienza como respuesta a un evento.

---

## 📈 Auto-Scaling

Una de las características importantes de Serverless es el **auto-scaling**.

La plataforma puede adaptar los recursos utilizados según la cantidad de solicitudes o eventos.

Conceptualmente:

```text
Pocas requests
     ↓
Pocas ejecuciones

Muchas requests
     ↓
Más ejecuciones
```

No necesitas administrar manualmente cada servidor para aumentar la capacidad.

---

## 🧠 Stateless Functions

Una función Serverless debe considerarse normalmente **stateless**.

Esto significa que no debes asumir que una ejecución puede guardar información en memoria y que esa información estará disponible en otra ejecución.

```text
Request 1 → Function
Request 2 → Function
Request 3 → Function
```

Cada ejecución debe poder funcionar independientemente.

Si necesitas conservar información entre ejecuciones, debes utilizar un sistema externo:

```text
Function
   ↓
Database / Storage / Cache
```

---

## 🥶 Cold Start

Un **cold start** ocurre cuando una función necesita inicializarse antes de poder atender una solicitud.

Conceptualmente:

```text
Function no activa
      ↓
Request
      ↓
Inicialización
      ↓
Function ejecuta
```

Esta inicialización puede introducir un **retraso inicial**.

Por eso el tiempo de respuesta de una función puede ser diferente entre una ejecución ya preparada y una que necesita inicializarse.

---

## ⏱️ Tiempo de ejecución

Las funciones Serverless tienen límites relacionados con cuánto tiempo pueden ejecutarse.

```text
Request
   ↓
Function
   ↓
Execution Time
   ↓
Finish
```

No debes asumir que una Cloud Function puede permanecer ejecutándose indefinidamente como un servidor tradicional.

---

## 🚧 Límites de las funciones

Las plataformas Serverless establecen límites sobre aspectos como:

* Tiempo máximo de ejecución.
* Memoria.
* CPU.
* Tamaño de requests/responses.
* Concurrencia.
* Recursos disponibles.

Estos límites forman parte del modelo Serverless.

---

## 💰 Costos basados en uso

Serverless suele utilizar un modelo donde el costo depende del uso de los servicios.

Conceptualmente:

```text
Más ejecuciones
      ↓
Más consumo
      ↓
Mayor costo
```

Esto puede ser beneficioso para aplicaciones con cargas variables porque no necesariamente necesitas mantener servidores dedicados funcionando continuamente.

---

## ✅ Ventajas de Serverless

Entre sus principales ventajas:

* Menor administración de infraestructura.
* Auto-scaling administrado.
* Integración natural con eventos.
* Pago basado en uso.
* Permite concentrarse en el código y la lógica de negocio.
* Facilita implementar determinadas funcionalidades backend rápidamente.

---

## ⚠️ Desventajas de Serverless

También tiene inconvenientes:

* Cold starts.
* Límites de ejecución y recursos.
* Dependencia del proveedor.
* Posible **vendor lock-in**.
* Arquitecturas más difíciles de depurar en algunos casos.
* Costos que pueden crecer con un aumento importante del uso.
* No todas las aplicaciones encajan bien con funciones Serverless.

---

## ⭐ Idea fundamental

Serverless **no significa que no existan servidores**.

Significa:

```text
Developer
   ↓
Code / Functions
   ↓
Serverless Platform
   ↓
Managed Infrastructure
```

Y debes tener muy claros estos tres conceptos:

```text
FaaS
↓
Ejecutar código mediante funciones
```

```text
Stateless
↓
No depender del estado en memoria entre ejecuciones
```

```text
Cold Start
↓
Inicialización de una función que no estaba activa
↓
Posible retraso inicial
```
