# 📄 02 - Functions Triggers

## 📑 Índice

- [📄 02 - Functions Triggers](#-02---functions-triggers)
  - [📑 Índice](#-índice)
  - [⚡ ¿Qué es un Trigger?](#-qué-es-un-trigger)
  - [🔄 Event-Driven Architecture](#-event-driven-architecture)
  - [🗄️ Database Triggers](#️-database-triggers)
  - [🔐 Authentication Triggers](#-authentication-triggers)
  - [📁 Storage Triggers](#-storage-triggers)
  - [⏰ Scheduled Functions](#-scheduled-functions)
  - [📦 Información del evento](#-información-del-evento)
  - [🔄 Evento vs Request](#-evento-vs-request)
    - [Trigger-based Function](#trigger-based-function)
    - [HTTP Function](#http-function)
  - [⭐ Idea fundamental](#-idea-fundamental)

## ⚡ ¿Qué es un Trigger?

Un **trigger** es el mecanismo que hace que una Cloud Function se ejecute cuando ocurre un evento determinado.

El flujo es:

```text
Event
  ↓
Trigger
  ↓
Cloud Function
  ↓
Logic
```

La Function no necesita ser llamada directamente por el frontend; puede ejecutarse automáticamente cuando ocurre el evento configurado.

---

## 🔄 Event-Driven Architecture

Una arquitectura **event-driven** se basa en eventos.

En lugar de:

```text
Request
   ↓
Function
```

puedes tener:

```text
Event
   ↓
Function
```

Por ejemplo:

```text
User creates account
        ↓
Authentication Event
        ↓
Cloud Function
        ↓
Create user profile
```

La función reacciona a lo que ocurrió.

---

## 🗄️ Database Triggers

Una Function puede ejecutarse cuando ocurre un cambio en una database compatible con los triggers de Firebase.

Por ejemplo, con Firestore:

```text
Document created
        ↓
Firestore Trigger
        ↓
Cloud Function
        ↓
Send notification
```

Los eventos pueden estar relacionados con operaciones como:

```text
Create
Update
Delete
```

La Function recibe información relacionada con el evento ocurrido.

---

## 🔐 Authentication Triggers

Una Function puede reaccionar a determinados eventos relacionados con Authentication.

Por ejemplo:

```text
User creates account
        ↓
Authentication Event
        ↓
Cloud Function
        ↓
Create user profile
```

Esto permite ejecutar lógica backend relacionada con el ciclo de vida de los usuarios.

---

## 📁 Storage Triggers

También puedes reaccionar a eventos relacionados con archivos.

Por ejemplo:

```text
File uploaded
        ↓
Storage Trigger
        ↓
Cloud Function
        ↓
Process image
```

Esto puede utilizarse para ejecutar procesamiento backend después de que un archivo haya sido almacenado.

---

## ⏰ Scheduled Functions

No todos los triggers tienen que producirse por una acción de un usuario.

Una **Scheduled Function** se ejecuta siguiendo una programación determinada.

Conceptualmente:

```text
Scheduled Time
      ↓
Cloud Function
      ↓
Execute Task
```

Por ejemplo:

```text
Every day
    ↓
Function
    ↓
Cleanup old data
```

---

## 📦 Información del evento

Cuando una Function es ejecutada por un evento, recibe información relacionada con **lo que ocurrió**.

Conceptualmente:

```text
Event
   ↓
Event Data
   ↓
Cloud Function
   ↓
Logic
```

Por ejemplo, si se crea un documento:

```text
Document Created
       ↓
Function
       ↓
Información del documento
       ↓
Procesamiento
```

La información exacta disponible depende del tipo de trigger.

---

## 🔄 Evento vs Request

Esta diferencia es fundamental.

### Trigger-based Function

Se ejecuta porque ocurrió un **evento**:

```text
Event
  ↓
Trigger
  ↓
Cloud Function
```

Por ejemplo:

```text
Document Created
      ↓
Function
```

### HTTP Function

Se ejecuta porque alguien realiza una **HTTP request**:

```text
HTTP Request
      ↓
Cloud Function
      ↓
Response
```

Por ejemplo:

```text
POST /process-image
       ↓
HTTP Function
       ↓
Process
       ↓
HTTP Response
```

---

## ⭐ Idea fundamental

Debes poder diferenciar claramente:

```text
Trigger-based Function
        ↓
Se ejecuta por un evento
```

vs.

```text
HTTP Function
        ↓
Se ejecuta por una HTTP request
```

Y entender el patrón:

```text
Event
  ↓
Trigger
  ↓
Cloud Function
  ↓
Logic
```

Los triggers permiten construir una arquitectura donde **las acciones ocurren como respuesta a eventos del sistema**, sin que el frontend tenga que invocar directamente cada función.
