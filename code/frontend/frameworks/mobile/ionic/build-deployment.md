# 🚀 BUILD & DEPLOYMENT

Cuando desarrollas una aplicación con **Ionic + Angular**, durante el desarrollo trabajas principalmente con tecnologías web. Pero para convertirla en una aplicación móvil real necesitas **compilarla, integrarla con Android/iOS y finalmente distribuirla**.

El flujo general es:

```text
🧑‍💻 Desarrollo
      ↓
🌐 Ionic + Angular
      ↓
⚡ Capacitor
      ↓
🏗️ Build
      ↓
📱 Android / 🍎 iOS
      ↓
📦 APK / AAB / App
      ↓
🏪 Google Play / 🍎 App Store
      ↓
🚀 Deployment
```

---

# 📑 ÍNDICE — BUILD & DEPLOYMENT

- [🚀 BUILD \& DEPLOYMENT](#-build--deployment)
- [📑 ÍNDICE — BUILD \& DEPLOYMENT](#-índice--build--deployment)
- [1️⃣ 🏗️ BUILD](#1️⃣-️-build)
- [2️⃣ 📱 ANDROID](#2️⃣--android)
- [3️⃣ 🍎 IOS](#3️⃣--ios)
- [4️⃣ 🛠️ ANDROID STUDIO](#4️⃣-️-android-studio)
- [5️⃣ 🛠️ XCODE](#5️⃣-️-xcode)
- [6️⃣ 📦 APK](#6️⃣--apk)
- [7️⃣ 📦 AAB](#7️⃣--aab)
- [8️⃣ 🏪 GOOGLE PLAY](#8️⃣--google-play)
- [9️⃣ 🍎 APP STORE](#9️⃣--app-store)
- [🔟 🚀 DEPLOYMENT](#--deployment)
- [🐛 DEBUGGING](#-debugging)
- [🌐 CHROME DEVTOOLS](#-chrome-devtools)
- [🤖 ANDROID STUDIO / LOGCAT](#-android-studio--logcat)
- [🍎 XCODE / CONSOLE](#-xcode--console)
- [🧠 WEB DEBUGGING VS MOBILE DEBUGGING](#-web-debugging-vs-mobile-debugging)
- [🏆 FLUJO COMPLETO](#-flujo-completo)
    - [🧠 Qué debes recordar](#-qué-debes-recordar)


# 1️⃣ 🏗️ BUILD

Un **build** es el proceso de convertir tu código fuente en una versión preparada para ejecutarse o distribuirse.

En Ionic normalmente tienes:

```text
Angular
   ↓
Código TypeScript
   ↓
Angular Build
   ↓
Archivos HTML + CSS + JavaScript
   ↓
Capacitor
   ↓
Proyecto Android / iOS
```

Por ejemplo:

```bash
ionic build
```

Esto genera los archivos compilados de la aplicación.

📌 **Importante:**

`ionic build` **no significa que ya tengas un APK o una aplicación publicada**.

Simplemente prepara la parte web de la aplicación.

---

# 2️⃣ 📱 ANDROID

Para convertir tu aplicación Ionic en una aplicación Android, Capacitor genera o utiliza un proyecto nativo de Android.

Flujo:

```text
Ionic + Angular
      ↓
ionic build
      ↓
Capacitor
      ↓
📱 Android Project
      ↓
Android Studio
      ↓
APK / AAB
```

Normalmente se agrega la plataforma Android con:

```bash
npx cap add android
```

Después puedes sincronizar los cambios:

```bash
npx cap sync android
```

Y abrir el proyecto:

```bash
npx cap open android
```

📌 El proyecto Android resultante puede utilizarse para:

* 🧪 Probar la aplicación
* 🐛 Debuggear
* 📦 Generar APK
* 📦 Generar AAB
* 🚀 Preparar publicación en Google Play

---

# 3️⃣ 🍎 IOS

El proceso para iOS es similar, pero utiliza las herramientas del ecosistema Apple.

```text
Ionic + Angular
      ↓
ionic build
      ↓
Capacitor
      ↓
🍎 iOS Project
      ↓
Xcode
      ↓
📦 App
      ↓
🍎 App Store
```

Se puede agregar la plataforma:

```bash
npx cap add ios
```

Sincronizar:

```bash
npx cap sync ios
```

Y abrir el proyecto:

```bash
npx cap open ios
```

📌 Para desarrollar y generar aplicaciones iOS necesitas normalmente:

* 🍎 macOS
* 🛠️ Xcode
* 🔐 Certificados/provisioning
* 👤 Apple Developer Account

---

# 4️⃣ 🛠️ ANDROID STUDIO

**Android Studio** es el IDE oficial para desarrollar aplicaciones Android.

Aunque utilices Ionic, cuando agregas Android con Capacitor terminas teniendo un proyecto Android nativo que puedes abrir en Android Studio.

Permite:

* 🐛 Debugging
* 📱 Emuladores
* 🧪 Testing
* 📦 Generar APK
* 📦 Generar AAB
* 📋 Revisar logs
* ⚙️ Configurar Android

Flujo:

```text
Ionic
 ↓
Capacitor
 ↓
Android Project
 ↓
Android Studio
```

📌 **Importante:**

No necesitas abandonar Angular/Ionic para utilizar Android Studio.

Android Studio se utiliza principalmente para la **parte nativa de Android**.

---

# 5️⃣ 🛠️ XCODE

**Xcode** es el IDE utilizado para desarrollar, compilar, probar y distribuir aplicaciones para el ecosistema Apple.

En Ionic + Capacitor:

```text
Ionic
 ↓
Capacitor
 ↓
iOS Project
 ↓
Xcode
```

Permite:

* 🐛 Debugging
* 📱 Simuladores de iPhone/iPad
* 🧪 Testing
* 🔐 Gestionar certificados
* 📦 Generar aplicaciones
* 🚀 Preparar publicación en App Store

📌 **Importante:**

Xcode es específico del ecosistema Apple.

---

# 6️⃣ 📦 APK

**APK** significa:

> Android Package Kit

Es un archivo que contiene una aplicación Android preparada para instalarse.

Ejemplo:

```text
my-app.apk
```

Conceptualmente:

```text
Código Ionic
     ↓
Build
     ↓
Android
     ↓
APK
     ↓
📱 Instalación
```

Puede utilizarse para:

* 🧪 Testing
* 📱 Instalación manual
* 👥 Distribución interna
* 🔧 Pruebas antes de publicar

📌 Un APK puede instalarse directamente en dispositivos Android, dependiendo de la configuración y permisos del dispositivo.

---

# 7️⃣ 📦 AAB

**AAB** significa:

> Android App Bundle

Es el formato utilizado principalmente para distribuir aplicaciones Android mediante Google Play.

Ejemplo:

```text
my-app.aab
```

La diferencia conceptual:

| Formato | Propósito                                |
| ------- | ---------------------------------------- |
| 📦 APK  | Aplicación instalable                    |
| 📦 AAB  | Paquete para distribución en Google Play |

Con AAB:

```text
Developer
    ↓
   AAB
    ↓
Google Play
    ↓
Genera APKs optimizados
    ↓
📱 Cada dispositivo recibe lo necesario
```

📌 **Idea clave:**

> APK está pensado como paquete instalable; AAB está pensado principalmente para distribución mediante Google Play.

---

# 8️⃣ 🏪 GOOGLE PLAY

**Google Play** es la plataforma principal de distribución de aplicaciones Android.

El proceso general es:

```text
👨‍💻 Desarrollo
      ↓
🏗️ Build
      ↓
📦 AAB
      ↓
Google Play Console
      ↓
🧪 Testing / revisión
      ↓
🏪 Publicación
      ↓
📱 Usuarios
```

Antes de publicar normalmente debes configurar aspectos como:

* 📱 Nombre de aplicación
* 🖼️ Iconos
* 📝 Descripción
* 📸 Screenshots
* 🔐 Permisos
* 📦 Versiones
* 🔑 Firma de la aplicación
* 🧪 Testing
* 📋 Información de privacidad

---

# 9️⃣ 🍎 APP STORE

**App Store** es la plataforma de distribución de aplicaciones de Apple.

Flujo:

```text
👨‍💻 Desarrollo
      ↓
🏗️ Build
      ↓
🍎 Xcode
      ↓
📦 App
      ↓
App Store Connect
      ↓
🧪 Testing
      ↓
Apple Review
      ↓
🍎 App Store
```

Normalmente debes gestionar:

* 👤 Apple Developer
* 🔐 Certificados
* 🔑 Signing
* 📱 Identificador de aplicación
* 🖼️ Iconos
* 📸 Screenshots
* 📝 Información de la aplicación
* 🧪 Testing
* 📋 Privacidad

---

# 🔟 🚀 DEPLOYMENT

**Deployment** es el proceso de llevar una aplicación desde el entorno de desarrollo hasta un entorno donde los usuarios puedan utilizarla.

En una aplicación móvil:

```text
🧑‍💻 Desarrollo
      ↓
🧪 Testing
      ↓
🏗️ Build
      ↓
📦 Package
      ↓
🔐 Signing
      ↓
🏪 Store
      ↓
👥 Usuarios
```

No debe confundirse:

```text
Build
 ↓
Construir la aplicación
```

con:

```text
Deployment
 ↓
Distribuir/publicar la aplicación
```

📌 Por ejemplo:

```text
ionic build
```

➡️ construye la aplicación web.

Mientras que:

```text
AAB
 ↓
Google Play
 ↓
Publicación
```

➡️ forma parte del deployment.

---

# 🐛 DEBUGGING

Debuggear una aplicación móvil es diferente de debuggear únicamente una aplicación web.

En una aplicación web normalmente puedes utilizar:

```text
🌐 Browser
 ↓
Chrome DevTools
```

Pero en una aplicación móvil tienes diferentes niveles:

```text
Ionic / Angular
      ↓
Capacitor
      ↓
WebView
      ↓
Android / iOS
      ↓
Hardware
```

Por eso puedes tener errores que no aparecen simplemente ejecutando la aplicación en el navegador.

---

# 🌐 CHROME DEVTOOLS

Chrome DevTools permite inspeccionar la parte web de la aplicación.

Puedes revisar:

* 🧱 HTML
* 🎨 CSS
* 🧠 JavaScript
* 🌐 Network
* 🗃️ Storage
* ⚠️ Console
* 📊 Performance

Por ejemplo:

```text
Ionic
 ↓
Angular
 ↓
WebView
 ↓
Chrome DevTools
```

Es especialmente útil para encontrar problemas relacionados con:

* Componentes
* Estilos
* HTTP requests
* JavaScript
* Angular
* APIs

---

# 🤖 ANDROID STUDIO / LOGCAT

En Android, **Logcat** permite visualizar mensajes y errores generados por la aplicación y por el sistema Android.

Conceptualmente:

```text
📱 Android App
      ↓
Android Runtime
      ↓
📋 Logcat
      ↓
🐛 Error / Warning / Logs
```

Es útil cuando tienes problemas como:

* 💥 Crash de la aplicación
* 🔐 Permisos
* 📷 Cámara
* 📍 GPS
* 📁 Filesystem
* 🔌 Plugins de Capacitor
* ⚡ Problemas nativos

Por ejemplo, puede ocurrir:

```text
Angular funciona correctamente
        ↓
Capacitor Plugin
        ↓
❌ Error Android
```

En ese caso, revisar solamente `console.log()` de Angular puede no ser suficiente.

---

# 🍎 XCODE / CONSOLE

En iOS puedes utilizar Xcode y sus herramientas de debugging para revisar errores de la aplicación.

Conceptualmente:

```text
🍎 iOS App
      ↓
Xcode
      ↓
Console / Debugger
      ↓
🐛 Logs y errores
```

Es especialmente útil para problemas relacionados con:

* 🔐 Permisos
* 📷 Cámara
* 📍 Ubicación
* 🔔 Notificaciones
* ⚡ Capacitor
* 🍎 APIs nativas
* 💥 Crashes

---

# 🧠 WEB DEBUGGING VS MOBILE DEBUGGING

| 🌐 Web               | 📱 Mobile                              |
| -------------------- | -------------------------------------- |
| Chrome DevTools      | Chrome DevTools + herramientas nativas |
| Browser              | Android / iOS                          |
| JavaScript           | JavaScript + código nativo             |
| Network              | Network + APIs nativas                 |
| Console              | Console + Logcat / Xcode               |
| Browser APIs         | Capacitor + Native APIs                |
| Un entorno principal | Diferentes plataformas                 |

---

# 🏆 FLUJO COMPLETO

Este es el flujo que conviene tener en mente cuando trabajas con Ionic:

```text
                 👨‍💻 DESARROLLO
                       ↓
                Ionic + Angular
                       ↓
                  🧪 TESTING
                       ↓
                   🏗️ BUILD
                       ↓
                  ⚡ CAPACITOR
                       ↓
              ┌────────┴────────┐
              ↓                 ↓
          📱 ANDROID          🍎 IOS
              ↓                 ↓
      🛠️ Android Studio       🛠️ Xcode
              ↓                 ↓
          📦 APK/AAB          📦 APP
              ↓                 ↓
       🏪 Google Play       🍎 App Store
              ↓                 ↓
              └────────┬────────┘
                       ↓
                   👥 USUARIOS
```

### 🧠 Qué debes recordar

> **Ionic** → construye la interfaz y lógica de la aplicación.

> **Capacitor** → conecta Ionic con las capacidades nativas.

> **Android Studio** → entorno para trabajar con Android.

> **Xcode** → entorno para trabajar con iOS.

> **APK** → paquete instalable de Android.

> **AAB** → paquete utilizado principalmente para distribuir Android mediante Google Play.

> **Google Play / App Store** → plataformas de distribución.

> **Deployment** → proceso completo de llevar la aplicación a los usuarios.

> **Debugging móvil** → requiere revisar tanto la parte web como la parte nativa.
