# 📱 Firebase Cloud Messaging (FCM)

## 📑 Índice

- [� Firebase Cloud Messaging (FCM)](#-firebase-cloud-messaging-fcm)
  - [📑 Índice](#-índice)
  - [📘 ¿Qué es Firebase Cloud Messaging?](#-qué-es-firebase-cloud-messaging)
  - [🔔 Push Notifications](#-push-notifications)
  - [🏗️ Arquitectura de FCM](#️-arquitectura-de-fcm)
  - [🪪 FCM Registration Token](#-fcm-registration-token)
  - [🔄 Registro del dispositivo](#-registro-del-dispositivo)
  - [🎯 Envío a un dispositivo específico](#-envío-a-un-dispositivo-específico)
  - [👥 Topics](#-topics)
  - [🆚 Token vs Topic](#-token-vs-topic)
    - [🎯 Token](#-token)
    - [👥 Topic](#-topic)
  - [📨 Messages](#-messages)
  - [🔔 Notification Message](#-notification-message)
  - [📦 Data Message](#-data-message)
  - [🆚 Notification Message vs Data Message](#-notification-message-vs-data-message)
  - [🔄 Flujo completo de FCM](#-flujo-completo-de-fcm)
  - [🧠 Ejemplo completo](#-ejemplo-completo)
  - [🔐 ¿Dónde encaja el backend?](#-dónde-encaja-el-backend)
  - [🧩 FCM dentro de Firebase](#-fcm-dentro-de-firebase)
  - [⭐ Conceptos que debes recordar](#-conceptos-que-debes-recordar)
    - [FCM](#fcm)
    - [Registration Token](#registration-token)
    - [Topic](#topic)
    - [Notification Message](#notification-message)
    - [Data Message](#data-message)
  - [🎯 Pregunta que debes poder responder](#-pregunta-que-debes-poder-responder)
    - [🧠 La idea central](#-la-idea-central)

## 📘 ¿Qué es Firebase Cloud Messaging?

**Firebase Cloud Messaging (FCM)** es un servicio de Firebase que permite enviar **mensajes y notificaciones** desde un backend hacia dispositivos o navegadores.

Su principal objetivo es permitir que una aplicación pueda **recibir información de forma remota**, incluso cuando el usuario no está interactuando directamente con ella.

Por ejemplo:

* 🔔 Notificaciones push
* 💬 Mensajes de una aplicación
* 📰 Noticias
* 🛒 Cambios en pedidos
* 📅 Recordatorios
* 💰 Alertas
* 💬 Nuevos mensajes

La idea general es:

```text
Backend
   ↓
FCM
   ↓
Device / Browser
   ↓
Application
```

---

## 🔔 Push Notifications

Una **push notification** es un mensaje que llega al dispositivo del usuario sin que este tenga que abrir activamente la aplicación para solicitarlo.

Por ejemplo:

```text
Backend
   ↓
"Tu pedido ha sido enviado"
   ↓
FCM
   ↓
📱 Teléfono
   ↓
🔔 Notificación
```

Esto es diferente de una petición HTTP normal.

En una petición tradicional:

```text
Frontend
   ↓
HTTP Request
   ↓
Backend
   ↓
Response
```

El frontend inicia la comunicación.

Con una push notification:

```text
Backend
   ↓
FCM
   ↓
Device
```

El backend puede iniciar el envío del mensaje.

---

## 🏗️ Arquitectura de FCM

FCM funciona como intermediario entre quien envía el mensaje y el dispositivo que lo recibe.

```text
                 SENDER
              Backend / Server
                    │
                    ▼
             Firebase Cloud
              Messaging
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
       Device              Browser
          │                   │
          ▼                   ▼
     📱 Application       🌐 Web App
```

El backend no necesita mantener una conexión directa con cada dispositivo.

FCM se encarga de entregar el mensaje al destino correspondiente.

---

## 🪪 FCM Registration Token

Uno de los conceptos más importantes de FCM es el **registration token**.

Es un identificador que permite a FCM saber **a qué instancia de aplicación/dispositivo puede entregar un mensaje**.

Conceptualmente:

```text
Application
     ↓
FCM Registration
     ↓
Registration Token
```

Por ejemplo:

```text
User
  ↓
App
  ↓
FCM
  ↓
Token
```

El backend puede almacenar ese token para posteriormente enviar mensajes a esa instancia.

```text
User
  ↓
App
  ↓
FCM Token
  ↓
Backend
  ↓
Database
```

> ⚠️ **No debes asumir que el token es permanente.**

Puede cambiar, por lo que una aplicación debe estar preparada para actualizarlo cuando sea necesario.

---

## 🔄 Registro del dispositivo

El flujo conceptual puede verse así:

```text
User
   ↓
Accepts notifications
   ↓
Application registers with FCM
   ↓
FCM Registration Token
   ↓
Backend stores token
```

Después:

```text
Backend
   ↓
Token
   ↓
FCM
   ↓
Device
```

Por eso el backend puede saber **a qué destino enviar una notificación**.

---

## 🎯 Envío a un dispositivo específico

Si quieres enviar un mensaje a una instancia concreta:

```text
Backend
   ↓
FCM Token
   ↓
FCM
   ↓
Specific Device
   ↓
Notification
```

Por ejemplo:

```text
User A
   ↓
Token A

User B
   ↓
Token B
```

Si el backend utiliza `Token A`:

```text
Backend
   ↓
Token A
   ↓
FCM
   ↓
📱 User A
```

El mensaje no está dirigido a todos los usuarios.

---

## 👥 Topics

FCM también permite agrupar destinatarios mediante **topics**.

Un topic representa un grupo al que diferentes dispositivos pueden suscribirse.

Por ejemplo:

```text
User A ──┐
User B ──┼──→ "news"
User C ──┘
```

Después:

```text
Backend
   ↓
"news"
   ↓
FCM
   ↓
Todos los dispositivos
suscritos a "news"
```

Por ejemplo, podrías tener:

```text
news
sports
promotions
updates
```

Un usuario puede suscribirse a:

```text
news
```

y otro a:

```text
news
sports
```

Entonces un mensaje enviado al topic `news` llegará a ambos.

---

## 🆚 Token vs Topic

La diferencia fundamental:

| 🎯 Token                                                                          | 👥 Topic               |
| --------------------------------------------------------------------------------- | ---------------------- |
| Destinatario específico                                                           | Grupo de destinatarios |
| Un destino específico                                                             | Muchos dispositivos    |
| Útil cuando quieres enviar algo relacionado con un usuario o dispositivo concreto | —                      |

### 🎯 Token

Destinatario específico:

```text
Backend
   ↓
FCM Token
   ↓
Un destino específico
```

Útil cuando quieres enviar algo relacionado con un usuario o dispositivo concreto.


### 👥 Topic

Grupo de destinatarios:

```text
Backend
   ↓
Topic
   ↓
Muchos dispositivos
```

Útil para mensajes generales.

Por ejemplo:

```text
"Hay una nueva versión disponible"
```

podría enviarse a:

```text
app-updates
```

---

## 📨 Messages

FCM puede transportar diferentes tipos de mensajes.

Los dos conceptos principales que debes distinguir son:

```text
Notification Message
```

y:

```text
Data Message
```

---

## 🔔 Notification Message

Un **Notification Message** está pensado principalmente para mostrar una notificación al usuario.

Conceptualmente:

```text
Backend
   ↓
Notification Message
   ↓
FCM
   ↓
Device
   ↓
🔔 Notification
```

Dependiendo de la plataforma y del estado de la aplicación, el sistema o las herramientas de Firebase pueden encargarse de mostrar la notificación.

Por ejemplo:

```text
Título:
"Nuevo mensaje"

Contenido:
"Tienes un mensaje nuevo."
```

El objetivo principal es:

> **Mostrar información al usuario.**

---

## 📦 Data Message

Un **Data Message** está pensado para entregar datos a la aplicación para que **el código de la aplicación pueda procesarlos**.

Conceptualmente:

```text
Backend
   ↓
Data Message
   ↓
FCM
   ↓
Application
   ↓
Application Logic
```

Por ejemplo:

```text
{
  type: "NEW_MESSAGE",
  conversationId: "123",
  senderId: "456"
}
```

La aplicación puede utilizar esos datos para decidir qué hacer.

Por ejemplo:

```text
Data Message
      ↓
type = NEW_MESSAGE
      ↓
Open / update conversation
```

---

## 🆚 Notification Message vs Data Message

|                      | Notification Message     | Data Message            |
| -------------------- | ------------------------ | ----------------------- |
| Objetivo             | Mostrar una notificación | Entregar datos a la app |
| Principal consumidor | Sistema / usuario        | Aplicación              |
| Uso típico           | 🔔 Alertas               | ⚙️ Lógica personalizada |
| Control de la app    | Menor                    | Mayor                   |

No necesitas memorizar todavía todas las propiedades del payload.

Lo importante es entender **quién debe encargarse principalmente del mensaje**.

---

## 🔄 Flujo completo de FCM

Un flujo típico puede ser:

```text
User
   ↓
Accepts Notifications
   ↓
Application
   ↓
FCM Registration Token
   ↓
Backend
   ↓
Stores Token
```

Después ocurre el envío:

```text
Backend
   ↓
Message + Token
   ↓
FCM
   ↓
Device
   ↓
Application
   ↓
Notification
```

---

## 🧠 Ejemplo completo

Imagina una aplicación de delivery.

El usuario instala la aplicación:

```text
User
   ↓
Delivery App
   ↓
FCM Registration
   ↓
Token
```

El backend guarda:

```text
User
 └── fcmToken
```

Más tarde, el pedido cambia:

```text
Order
   ↓
Status = "SHIPPED"
   ↓
Backend
```

El backend envía:

```text
"Tu pedido ha sido enviado"
```

a FCM:

```text
Backend
   ↓
FCM
   ↓
Token del usuario
   ↓
📱 Device
   ↓
🔔 Notification
```

El usuario recibe:

> 📦 Tu pedido ha sido enviado.

---

## 🔐 ¿Dónde encaja el backend?

Un punto importante:

**El frontend no debería ser quien controle libremente el envío de notificaciones a otros usuarios.**

Normalmente:

```text
Angular
   ↓
User Action
   ↓
Backend
   ↓
FCM
   ↓
User Device
```

Por ejemplo:

```text
Angular
   ↓
"Cambiar estado del pedido"
   ↓
Backend
   ↓
FCM
   ↓
"Tu pedido fue enviado"
```

Esto permite que el backend determine **cuándo y por qué** debe enviarse una notificación.

---

## 🧩 FCM dentro de Firebase

FCM es otro servicio dentro del ecosistema:

```text
🔥 Firebase
│
├── 🔐 Authentication
├── 🗄️ Firestore
├── 📁 Storage
├── ⚙️ Cloud Functions
├── 🌐 Hosting
└── 📱 Cloud Messaging
```

Puede trabajar junto con otros servicios.

Por ejemplo:

```text
Firestore
   ↓
Document Updated
   ↓
Cloud Function
   ↓
FCM
   ↓
User Device
   ↓
🔔 Notification
```

Esto es especialmente interesante porque permite construir sistemas **event-driven**.

---

## ⭐ Conceptos que debes recordar

### FCM

> Servicio de Firebase para enviar mensajes hacia dispositivos y navegadores.

### Registration Token

> Identificador que permite dirigir mensajes a una instancia de aplicación/dispositivo.

### Topic

> Grupo al que diferentes dispositivos pueden suscribirse para recibir mensajes destinados a ese grupo.

### Notification Message

> Mensaje orientado principalmente a mostrar una notificación.

### Data Message

> Mensaje orientado a entregar datos para que la aplicación los procese.

---

## 🎯 Pregunta que debes poder responder

> **¿Cómo llega una notificación desde mi backend hasta el dispositivo de un usuario?**

Respuesta:

```text
Backend
   ↓
FCM
   ↓
Registration Token
   ↓
Device / Browser
   ↓
Application
   ↓
🔔 Notification
```

Y si es un envío por topic:

```text
Backend
   ↓
Topic
   ↓
FCM
   ↓
Subscribed Devices
   ↓
Applications
```

### 🧠 La idea central

No pienses en FCM como:

> "Una función que muestra notificaciones."

Piensa en él como:

> **Un servicio de mensajería que permite transportar mensajes desde un sender/backend hacia las aplicaciones de los usuarios, utilizando destinos como registration tokens o topics.**
