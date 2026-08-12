# 📱 PUSH NOTIFICATIONS

## 📑 Índice — PUSH NOTIFICATIONS

- [� PUSH NOTIFICATIONS](#-push-notifications)
  - [📑 Índice — PUSH NOTIFICATIONS](#-índice--push-notifications)
  - [🔔 ¿Qué es una Push Notification?](#-qué-es-una-push-notification)
  - [🔐 Permission](#-permission)
  - [🪪 Registration Token](#-registration-token)
  - [🟢 Foreground vs Background](#-foreground-vs-background)
  - [🟢 Foreground](#-foreground)
    - [Ejemplo](#ejemplo)
  - [🟡 Background](#-background)
  - [🔴 Aplicación cerrada / no activa](#-aplicación-cerrada--no-activa)
  - [🌐 Web Push](#-web-push)
    - [⚙️ Service Worker](#️-service-worker)
- [🧩 FCM + Service Worker](#-fcm--service-worker)
    - [⭐ Importante para Angular](#-importante-para-angular)
  - [🌐 Permisos del navegador](#-permisos-del-navegador)
  - [👆 User Interaction](#-user-interaction)
  - [🔄 Flujo completo](#-flujo-completo)
  - [💬 Caso de uso: nuevo mensaje](#-caso-de-uso-nuevo-mensaje)
  - [📦 Casos de uso](#-casos-de-uso)
    - [💬 Mensajería](#-mensajería)
    - [📦 E-commerce](#-e-commerce)
    - [✈️ Viajes](#️-viajes)
    - [🔔 Actividad](#-actividad)
    - [🎉 Promociones](#-promociones)
  - [🔐 Seguridad del FCM Token](#-seguridad-del-fcm-token)
  - [🧠 Lo que debes recordar](#-lo-que-debes-recordar)
    - [🔔 Push Notification](#-push-notification)
    - [🔐 Permission](#-permission-1)
    - [🪪 Registration Token](#-registration-token-1)
    - [🟢 Foreground](#-foreground-1)
    - [🟡 Background](#-background-1)
    - [⚙️ Service Worker](#️-service-worker-1)
    - [👆 User Interaction](#-user-interaction-1)
  - [🎯 Debes poder explicar este flujo](#-debes-poder-explicar-este-flujo)
    - [⭐ Idea fundamental](#-idea-fundamental)

## 🔔 ¿Qué es una Push Notification?

Una **Push Notification** es un mensaje que una aplicación puede recibir desde un servicio externo, incluso cuando el usuario no está interactuando activamente con ella.

```text
Backend
   ↓
FCM
   ↓
📱 Device / 🌐 Browser
   ↓
🔔 Notification
```

La característica importante es que **la aplicación no tiene que estar haciendo una petición constantemente para comprobar si existe un nuevo mensaje**.

---

## 🔐 Permission

Antes de que una aplicación pueda mostrar determinadas notificaciones, el usuario debe conceder permiso.

En Web Push, por ejemplo:

```text
App
 ↓
Request Permission
 ↓
┌───────────────┐
│ User          │
│               │
│ Allow / Block │
└───────────────┘
```

Si el usuario acepta:

```text
Permission
   ↓
Granted
   ↓
App puede recibir
notificaciones
```

Si rechaza:

```text
Permission
   ↓
Denied
   ↓
No se pueden mostrar
notificaciones push
```

> ⭐ **Importante:**
> **Pedir permiso no significa automáticamente que el usuario ya esté listo para recibir mensajes.**

También necesitas registrar la aplicación con el servicio de messaging y obtener su token.

---

## 🪪 Registration Token

Después de que la aplicación está preparada para utilizar FCM, puede obtener un **FCM Registration Token**.

El flujo conceptual es:

```text
App
 ↓
Permission
 ↓
FCM Registration
 ↓
Registration Token
 ↓
Backend
```

El backend puede asociar ese token con el usuario o dispositivo correspondiente.

Por ejemplo:

```text
User
 └── notificationToken
```

Entonces, cuando ocurre un evento:

```text
Backend
   ↓
User's FCM Token
   ↓
FCM
   ↓
Device
```

> ⚠️ **Recuerda:**
> El token **puede cambiar**.

Por eso la aplicación debe estar preparada para detectar cambios y comunicar el nuevo token al backend cuando corresponda.

---

## 🟢 Foreground vs Background

El comportamiento de una push notification depende también del **estado de la aplicación**.

Los tres escenarios principales son:

```text
🟢 Foreground
🟡 Background
🔴 No activa / cerrada
```

---

## 🟢 Foreground

La aplicación está abierta y el usuario está interactuando con ella.

```text
User
 ↓
Angular App
 ↓
🟢 Foreground
```

Cuando llega un mensaje, la aplicación puede recibirlo y decidir qué hacer con él.

Por ejemplo:

```text
FCM
 ↓
Angular App
 ↓
Message received
 ↓
Update UI
```

Podría:

* actualizar una lista;
* mostrar un mensaje dentro de la aplicación;
* actualizar un contador;
* mostrar una notificación propia;
* ejecutar alguna lógica.

### Ejemplo

Un usuario está viendo su chat:

```text
Chat
 ↓
🟢 App abierta
 ↓
Nuevo mensaje
 ↓
FCM
 ↓
App recibe mensaje
 ↓
Chat actualiza UI
```

---

## 🟡 Background

La aplicación no está siendo utilizada activamente, pero sigue existiendo en segundo plano según las capacidades de la plataforma.

```text
App
 ↓
🟡 Background
```

El comportamiento puede cambiar respecto al foreground.

En determinadas plataformas, el sistema puede encargarse de mostrar la notificación mientras la aplicación no está activa.

Conceptualmente:

```text
FCM
 ↓
Device
 ↓
Operating System
 ↓
🔔 Notification
```

El usuario puede posteriormente interactuar con esa notificación y volver a la aplicación.

---

## 🔴 Aplicación cerrada / no activa

Cuando la aplicación no está ejecutándose activamente, el sistema operativo o el navegador puede encargarse de gestionar la recepción y presentación de determinados mensajes.

Conceptualmente:

```text
Backend
   ↓
FCM
   ↓
Device
   ↓
Operating System
   ↓
🔔 Notification
```

Después, si el usuario pulsa la notificación:

```text
🔔 Notification
      ↓
User taps
      ↓
Application opens
      ↓
Application handles interaction
```

> ⚠️ El comportamiento exacto depende de la **plataforma, navegador, sistema operativo, tipo de mensaje y configuración de la aplicación**.

Por eso no debes memorizar una regla del tipo:

> "Background siempre hace X."

Es mejor entender que **el estado de la aplicación afecta quién procesa y muestra el mensaje**.

---

## 🌐 Web Push

Para una aplicación Angular, las **Web Push Notifications** son especialmente importantes.

Permiten enviar notificaciones al navegador del usuario.

La arquitectura conceptual es:

```text
Angular
   ↓
FCM
   ↓
Service Worker
   ↓
Browser
   ↓
🔔 Notification
```

Aquí aparece un componente que todavía no habíamos necesitado en los documentos anteriores:

### ⚙️ Service Worker

Un **Service Worker** es un script que el navegador puede ejecutar independientemente de la página web principal.

Esto permite que ciertas capacidades continúen funcionando aunque la página Angular no esté actualmente abierta de la forma tradicional.

Para Push Notifications:

```text
Browser
   ↓
Service Worker
   ↓
Receives push event
   ↓
Handles notification
```

# 🧩 FCM + Service Worker

En una aplicación web con FCM, el Service Worker participa en el manejo de mensajes push.

Conceptualmente:

```text
        Backend
           ↓
          FCM
           ↓
    Browser / Web Push
           ↓
    Service Worker
           ↓
      Notification
```

El Service Worker actúa como una pieza que permite al navegador manejar eventos push fuera del ciclo normal de la aplicación Angular.

### ⭐ Importante para Angular

No pienses:

```text
Angular Component
      ↓
      ↓
Recibe absolutamente todas
las notificaciones
```

En Web Push existe otra capa:

```text
Angular
   │
   ├── Aplicación
   │
   └── Service Worker
             ↓
        Push Events
```

Esto es especialmente importante cuando la aplicación está en background.

---

## 🌐 Permisos del navegador

En Web Push, el navegador controla el permiso para mostrar notificaciones.

Conceptualmente:

```text
Website
   ↓
Request Notification Permission
   ↓
Browser
   ↓
User
   ↓
Allow / Block
```

Si el usuario permite:

```text
Permission = Granted
```

la aplicación puede continuar con el registro necesario para utilizar Push Notifications.

Si el usuario bloquea:

```text
Permission = Denied
```

la aplicación no podrá mostrar normalmente notificaciones push al usuario mediante ese mecanismo.

---

## 👆 User Interaction

Una notificación no solamente puede **mostrar información**.

También puede convertirse en una interacción.

Por ejemplo:

```text
🔔 "Nuevo mensaje"
        ↓
User clicks
        ↓
Application
        ↓
Open conversation
```

Otro ejemplo:

```text
🔔 "Pedido enviado"
        ↓
User clicks
        ↓
Application
        ↓
/orders/123
```

Esto permite que una notificación funcione como una entrada hacia una parte específica de la aplicación.

---

## 🔄 Flujo completo

Ahora podemos juntar todo:

```text
User
 ↓
Open App
 ↓
Request Notification Permission
 ↓
User accepts
 ↓
Register App with FCM
 ↓
FCM Registration Token
 ↓
Backend stores token
```

Posteriormente:

```text
Backend
 ↓
Event occurs
 ↓
FCM
 ↓
Device / Browser
 ↓
Notification
```

Y dependiendo del estado:

```text
                    FCM
                     ↓
              Device / Browser
                     ↓
           ┌─────────┴─────────┐
           ▼                   ▼
      App Foreground       Background
           ↓                   ↓
      App handles        System / Browser
       the message          handles it
```

---

## 💬 Caso de uso: nuevo mensaje

Imagina una aplicación de chat.

Primero:

```text
User
 ↓
Accept Notifications
 ↓
FCM Token
 ↓
Backend
```

Después otro usuario envía un mensaje:

```text
User B
 ↓
Send Message
 ↓
Backend
 ↓
Database
 ↓
FCM
 ↓
User A's Device
 ↓
🔔 "Nuevo mensaje"
```

Si User A está utilizando la aplicación:

```text
🟢 Foreground
   ↓
Message received
   ↓
Update Chat UI
```

Si está en segundo plano:

```text
🟡 Background
   ↓
Push notification
   ↓
🔔 "Nuevo mensaje"
```

Si pulsa la notificación:

```text
🔔
 ↓
User interaction
 ↓
Open App
 ↓
Open Conversation
```

---

## 📦 Casos de uso

Las Push Notifications son útiles cuando quieres avisar al usuario de algo que ocurrió **fuera de su interacción actual con la aplicación**.

### 💬 Mensajería

```text
Nuevo mensaje
      ↓
🔔 Notification
```

### 📦 E-commerce

```text
Pedido actualizado
      ↓
🔔 Notification
```

### ✈️ Viajes

```text
Cambio de vuelo
      ↓
🔔 Notification
```

### 🔔 Actividad

```text
Nueva actividad
      ↓
🔔 Notification
```

### 🎉 Promociones

```text
Nueva promoción
      ↓
🔔 Notification
```

---

## 🔐 Seguridad del FCM Token

El FCM Registration Token **no debe tratarse como una contraseña o un secreto permanente**.

Pero eso no significa que puedas manejarlo sin cuidado.

Normalmente:

```text
FCM Token
   ↓
Backend
   ↓
Associated with user/device
```

El backend debería controlar quién puede registrar o modificar tokens asociados a una cuenta.

También debes tener en cuenta que:

* el token puede cambiar;
* puede dejar de ser válido;
* un usuario puede tener varios dispositivos;
* un usuario puede tener diferentes tokens a lo largo del tiempo.

Por ejemplo:

```text
User
 ├── 📱 Phone Token
 ├── 💻 Browser Token
 └── 📱 Tablet Token
```

Esto es importante porque **usuario y dispositivo no son necesariamente la misma cosa**.

---

## 🧠 Lo que debes recordar

### 🔔 Push Notification

> Mensaje enviado remotamente hacia una aplicación o navegador.

### 🔐 Permission

> Autorización del usuario para permitir notificaciones.

### 🪪 Registration Token

> Identificador utilizado para dirigir mensajes hacia una instancia de aplicación/dispositivo.

### 🟢 Foreground

> La aplicación está activa y puede procesar el mensaje directamente.

### 🟡 Background

> La aplicación no está siendo utilizada activamente y el sistema puede intervenir en el manejo de la notificación.

### ⚙️ Service Worker

> Script del navegador que puede manejar determinados eventos fuera del ciclo normal de la página, incluyendo Push Notifications.

### 👆 User Interaction

> Acción del usuario sobre una notificación, como hacer click/tap para abrir la aplicación o navegar hacia contenido específico.

---

## 🎯 Debes poder explicar este flujo

```text
App
 ↓
Request Permission
 ↓
User accepts
 ↓
FCM Registration
 ↓
FCM Token
 ↓
Backend
 ↓
FCM
 ↓
Browser / Device
 ↓
Service Worker / OS / App
 ↓
🔔 Notification
 ↓
User Interaction
 ↓
Application
```

### ⭐ Idea fundamental

**FCM se encarga del transporte del mensaje; la aplicación, el navegador, el sistema operativo y el Service Worker participan en cómo ese mensaje se procesa y se presenta dependiendo del contexto.**

Y para Angular, la idea clave es:

```text
Angular
   +
FCM
   +
Service Worker
   ↓
Web Push Notifications
```
