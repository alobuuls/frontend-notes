# ⚡ NATIVE FEATURES

Las **Native Features** son funcionalidades que permiten que una aplicación Ionic utilice capacidades propias del dispositivo móvil.

Ionic se encarga principalmente de la interfaz, mientras que **Capacitor** actúa como puente entre la aplicación web y las APIs nativas de Android/iOS.

```text
📱 Ionic App
     ↓
⚡ Capacitor
     ↓
┌───────────────────────┐
│ Android / iOS         │
│                       │
│ 📷 Camera             │
│ 📍 GPS                │
│ 🔔 Notifications      │
│ 📁 Files              │
│ 📳 Haptics            │
│ 💾 Storage            │
└───────────────────────┘
```

---

# 📑 ÍNDICE — NATIVE FEATURES

- [⚡ NATIVE FEATURES](#-native-features)
- [📑 ÍNDICE — NATIVE FEATURES](#-índice--native-features)
- [1️⃣ ⚡ CAPACITOR](#1️⃣--capacitor)
- [2️⃣ 🧩 CAPACITOR PLUGINS](#2️⃣--capacitor-plugins)
- [3️⃣ 📷 CAMERA](#3️⃣--camera)
- [4️⃣ 📍 GEOLOCATION](#4️⃣--geolocation)
- [5️⃣ 🔔 PUSH NOTIFICATIONS](#5️⃣--push-notifications)
- [6️⃣ 📁 FILESYSTEM](#6️⃣--filesystem)
- [7️⃣ 📳 HAPTICS](#7️⃣--haptics)
- [8️⃣ 🔗 NATIVE APIS](#8️⃣--native-apis)
- [9️⃣ 💾 STORAGE](#9️⃣--storage)
  - [📌 Preferences](#-preferences)
    - [🧠 Úsalo para:](#-úsalo-para)
  - [📌 SQLite](#-sqlite)
  - [📌 Secure Storage](#-secure-storage)
- [🧠 ¿CUÁL USAR?](#-cuál-usar)
- [🏆 IDEA CLAVE](#-idea-clave)


# 1️⃣ ⚡ CAPACITOR

**Capacitor** es la plataforma que permite convertir una aplicación web/Ionic en una aplicación capaz de interactuar con funcionalidades nativas del dispositivo.

Por ejemplo:

```text
Angular + Ionic
      ↓
   Capacitor
      ↓
Android / iOS
```

Una aplicación Ionic puede utilizar JavaScript/TypeScript para solicitar funcionalidades que finalmente son ejecutadas mediante APIs nativas.

📌 **Idea clave:**

> Capacitor es el puente entre el código web de Ionic y las capacidades nativas del dispositivo.

---

# 2️⃣ 🧩 CAPACITOR PLUGINS

Los **Capacitor Plugins** proporcionan una API para utilizar funcionalidades específicas del dispositivo.

Por ejemplo:

```text
Camera
Geolocation
Push Notifications
Filesystem
Haptics
Preferences
```

La aplicación utiliza una API de JavaScript/TypeScript:

```ts
const photo = await Camera.getPhoto();
```

y Capacitor se encarga de comunicarse con la plataforma correspondiente.

```text
TypeScript
    ↓
Capacitor Plugin
    ↓
Android / iOS API
    ↓
📱 Dispositivo
```

📌 **Ventaja:**

Puedes utilizar una API similar desde tu código Ionic sin tener que implementar directamente toda la lógica nativa de Android o iOS.

---

# 3️⃣ 📷 CAMERA

El plugin **Camera** permite acceder a la cámara del dispositivo y, dependiendo de la configuración y plataforma, también seleccionar imágenes desde la galería.

Ejemplo conceptual:

```ts
const photo = await Camera.getPhoto({
  quality: 90,
  resultType: CameraResultType.Uri
});
```

Puede utilizarse para:

* 📷 Tomar fotografías
* 🖼️ Seleccionar imágenes
* 👤 Fotos de perfil
* 📄 Escanear documentos
* 📸 Capturar contenido

Flujo:

```text
Usuario
   ↓
📷 Camera
   ↓
Permiso
   ↓
Cámara / Galería
   ↓
Imagen
   ↓
Ionic
```

📌 **Importante:**

Las aplicaciones móviles deben solicitar los permisos necesarios para acceder a determinadas funcionalidades.

---

# 4️⃣ 📍 GEOLOCATION

**Geolocation** permite obtener la ubicación del dispositivo.

Puede proporcionar información como:

```text
Latitude
Longitude
Accuracy
Altitude
Speed
```

Ejemplo:

```ts
const position = await Geolocation.getCurrentPosition();
```

Uso típico:

* 🗺️ Mapas
* 📍 Ubicación del usuario
* 🚕 Aplicaciones de transporte
* 🏃 Aplicaciones deportivas
* 📦 Seguimiento de entregas
* 📌 Servicios basados en ubicación

Flujo:

```text
📱 Dispositivo
      ↓
📍 GPS / Location
      ↓
Coordenadas
      ↓
Ionic
```

📌 **Importante:**

La aplicación debe solicitar autorización para acceder a la ubicación.

---

# 5️⃣ 🔔 PUSH NOTIFICATIONS

Las **Push Notifications** permiten enviar notificaciones al dispositivo aunque la aplicación no esté activa en primer plano.

Ejemplo:

```text
Backend
   ↓
Push Notification Service
   ↓
📱 Dispositivo
   ↓
🔔 Notificación
```

Pueden utilizarse para:

* 💬 Mensajes
* 📦 Actualizaciones de pedidos
* 🔔 Alertas
* 📅 Recordatorios
* 📰 Noticias
* 🔐 Eventos de seguridad

Normalmente intervienen:

```text
Ionic
   ↓
Capacitor
   ↓
Push Notification Service
   ↓
Android / iOS
```

📌 **Concepto importante:**

La aplicación suele registrar el dispositivo y obtener un **token**, que el backend utiliza para enviar las notificaciones.

---

# 6️⃣ 📁 FILESYSTEM

**Filesystem** permite trabajar con archivos almacenados en el dispositivo.

Puede utilizarse para:

* 📄 Crear archivos
* 📖 Leer archivos
* ✏️ Escribir archivos
* 🗑️ Eliminar archivos
* 📂 Gestionar directorios

Ejemplo conceptual:

```ts
await Filesystem.writeFile({
  path: 'data.txt',
  data: 'Hello Ionic'
});
```

Flujo:

```text
Ionic
  ↓
Filesystem Plugin
  ↓
📁 Sistema de archivos
  ↓
📱 Dispositivo
```

📌 **Uso típico:**

Guardar archivos descargados, documentos, imágenes, información offline, etc.

---

# 7️⃣ 📳 HAPTICS

**Haptics** permite generar respuestas táctiles mediante vibraciones o efectos hápticos del dispositivo.

Ejemplo conceptual:

```ts
await Haptics.impact({
  style: ImpactStyle.Medium
});
```

Puede utilizarse para:

* ✅ Confirmaciones
* ❌ Errores
* 🔘 Interacciones con botones
* 📳 Feedback de acciones
* 🎮 Juegos

Ejemplo:

```text
Usuario toca botón
       ↓
   Acción
       ↓
📳 Vibración
       ↓
Feedback físico
```

📌 **Idea clave:**

> Haptics añade una respuesta física a las interacciones de la interfaz.

---

# 8️⃣ 🔗 NATIVE APIS

Las **Native APIs** son las APIs proporcionadas por Android o iOS para interactuar directamente con las capacidades del dispositivo.

Ejemplos:

```text
📷 Cámara
📍 GPS
🔔 Notificaciones
📁 Archivos
📳 Vibración
🔐 Biometría
📶 Bluetooth
🎙️ Micrófono
```

Una aplicación Ionic normalmente no necesita comunicarse directamente con estas APIs.

Utiliza:

```text
Ionic
   ↓
Capacitor
   ↓
Plugin
   ↓
Native API
   ↓
📱 Sistema operativo
```

📌 **Idea clave:**

> Capacitor abstrae gran parte de la comunicación entre JavaScript/TypeScript y las APIs nativas.

---

# 9️⃣ 💾 STORAGE

Las aplicaciones móviles necesitan almacenar información localmente.

Pero **no todos los datos deben almacenarse de la misma manera**.

Una forma sencilla de decidirlo es:

```text
¿Qué necesito guardar?
        ↓
┌─────────────────────────────┐
│ Datos simples               │
│ → Preferences               │
├─────────────────────────────┤
│ Datos estructurados         │
│ → SQLite                    │
├─────────────────────────────┤
│ Datos sensibles             │
│ → Secure Storage            │
└─────────────────────────────┘
```

---

## 📌 Preferences

**Preferences** está pensado para almacenar pequeños datos clave-valor.

Ejemplo:

```text
theme → dark
language → es
onboardingCompleted → true
```

Conceptualmente:

```ts
await Preferences.set({
  key: 'theme',
  value: 'dark'
});
```

### 🧠 Úsalo para:

* ⚙️ Configuraciones
* 🌙 Preferencias de usuario
* 🚩 Flags
* 🧭 Estado simple de la aplicación
* 🔑 Datos pequeños

📌 **No está pensado como una base de datos completa.**

---

## 📌 SQLite

**SQLite** es una base de datos relacional que puede ejecutarse localmente en el dispositivo.

Permite almacenar datos estructurados:

```text
Users
 ├── id
 ├── name
 └── email

Products
 ├── id
 ├── name
 └── price
```

Es apropiado cuando necesitas:

* 📊 Muchos registros
* 🔎 Consultas
* 🔗 Relaciones
* 📦 Datos estructurados
* 📴 Funcionamiento offline

Ejemplo conceptual:

```text
Ionic
  ↓
SQLite
  ↓
Database
  ↓
Tables
  ↓
Rows
```

📌 **Idea clave:**

> SQLite es mucho más apropiado que Preferences cuando los datos empiezan a comportarse como una base de datos.

---

## 📌 Secure Storage

El **Secure Storage** está pensado para información que necesita mayor protección.

Ejemplos:

```text
🔐 Tokens
🔑 Credenciales
🪪 Secretos
```

En lugar de guardar información sensible en un almacenamiento común, se utilizan mecanismos seguros proporcionados por el sistema operativo.

Conceptualmente:

```text
Ionic
   ↓
Secure Storage
   ↓
🔐 Android Keystore
🔐 iOS Keychain
```

📌 **Idea clave:**

> Los datos sensibles requieren un almacenamiento diseñado específicamente para proteger secretos.

---

# 🧠 ¿CUÁL USAR?

| Necesidad               | Solución           | Ejemplo              |
| ----------------------- | ------------------ | -------------------- |
| ⚙️ Configuración simple | **Preferences**    | `theme = dark`       |
| 🚩 Pequeños estados     | **Preferences**    | `onboarding = true`  |
| 📊 Datos estructurados  | **SQLite**         | usuarios, productos  |
| 🔎 Consultas complejas  | **SQLite**         | filtros y relaciones |
| 📴 Datos offline        | **SQLite**         | aplicación offline   |
| 🔐 Información sensible | **Secure Storage** | tokens, credenciales |

---

# 🏆 IDEA CLAVE

No debes pensar:

> "¿Dónde puedo guardar mis datos?"

Sino:

> **"¿Qué tipo de dato estoy guardando y qué nivel de persistencia/protección necesita?"**

```text
💾 STORAGE
    │
    ├── 🟢 Datos simples
    │       ↓
    │   Preferences
    │
    ├── 🔵 Datos estructurados
    │       ↓
    │     SQLite
    │
    └── 🔴 Datos sensibles
            ↓
       Secure Storage
```

Así puedes elegir correctamente la tecnología según **el tipo de información, su volumen, su estructura y su sensibilidad**.
