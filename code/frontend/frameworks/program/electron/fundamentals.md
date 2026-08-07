# 🧠 ELECTRON FUNDAMENTALS

Electron es una tecnología que permite utilizar conocimientos de **desarrollo web** para crear **aplicaciones de escritorio** para Windows, macOS y Linux.

La idea fundamental es:

```text
🌐 HTML
🎨 CSS
🧠 JavaScript / TypeScript
        ↓
     ⚡ Electron
        ↓
🪟 Aplicación Desktop
```

---

## 📑 ÍNDICE — ELECTRON FUNDAMENTALS

- [🧠 ELECTRON FUNDAMENTALS](#-electron-fundamentals)
  - [📑 ÍNDICE — ELECTRON FUNDAMENTALS](#-índice--electron-fundamentals)
- [1️⃣ 🧠 ¿QUÉ ES ELECTRON?](#1️⃣--qué-es-electron)
    - [📌 Ejemplo conceptual](#-ejemplo-conceptual)
    - [🧠 Idea clave](#-idea-clave)
- [2️⃣ 🌐 ELECTRON + CHROMIUM + NODE.JS](#2️⃣--electron--chromium--nodejs)
  - [🌐 Chromium](#-chromium)
  - [🟢 Node.js](#-nodejs)
    - [🧠 Lo importante](#-lo-importante)
- [3️⃣ 🖥️ ELECTRON COMO APLICACIÓN DESKTOP](#3️⃣-️-electron-como-aplicación-desktop)
- [4️⃣ 🪟 BROWSERWINDOW](#4️⃣--browserwindow)
    - [🧠 Idea clave](#-idea-clave-1)
- [5️⃣ 🧩 ELECTRON APIS](#5️⃣--electron-apis)
- [6️⃣ 📱 MOBILE VS DESKTOP](#6️⃣--mobile-vs-desktop)
    - [📱 Ionic](#-ionic)
    - [🖥️ Electron](#️-electron)
    - [📊 Comparación](#-comparación)
- [7️⃣ 🆚 ELECTRON VS IONIC](#7️⃣--electron-vs-ionic)
  - [🖥️ ELECTRON](#️-electron-1)
  - [📱 IONIC](#-ionic-1)
- [🧠 DIFERENCIA FUNDAMENTAL](#-diferencia-fundamental)
    - [🏆 Regla mental](#-regla-mental)

# 1️⃣ 🧠 ¿QUÉ ES ELECTRON?

**Electron** es un framework para crear aplicaciones de escritorio utilizando tecnologías web.

Permite crear aplicaciones para:

* 🪟 Windows
* 🍎 macOS
* 🐧 Linux

En lugar de aprender un lenguaje específico para cada sistema operativo, puedes utilizar:

```text
HTML
CSS
JavaScript
TypeScript
```

y empaquetar la aplicación como una aplicación de escritorio.

### 📌 Ejemplo conceptual

Una aplicación web normalmente funciona así:

```text
🌐 Browser
   ↓
HTML + CSS + JS
```

Una aplicación Electron:

```text
🖥️ Electron
   ↓
HTML + CSS + JS
   ↓
Aplicación Desktop
```

### 🧠 Idea clave

> **Electron permite llevar tecnologías web al escritorio.**

---

# 2️⃣ 🌐 ELECTRON + CHROMIUM + NODE.JS

Una de las cosas más importantes de Electron es entender que combina principalmente dos tecnologías:

```text
⚡ Electron
   │
   ├── 🌐 Chromium
   │
   └── 🟢 Node.js
```

## 🌐 Chromium

**Chromium** proporciona el motor necesario para ejecutar la interfaz web.

Gracias a Chromium puedes utilizar:

```text
HTML
CSS
JavaScript
DOM
Web APIs
```

Por eso una ventana de Electron puede mostrar una interfaz como una página web.

```text
Electron
   ↓
Chromium
   ↓
HTML + CSS + JS
   ↓
🪟 Interfaz
```

---

## 🟢 Node.js

Node.js permite que Electron tenga acceso a funcionalidades que normalmente no están disponibles directamente desde una página web.

Por ejemplo:

* 📁 Sistema de archivos
* 🖥️ Procesos
* 🌐 Networking
* ⚙️ Sistema operativo
* 🔌 Comunicación con procesos

Conceptualmente:

```text
🌐 Chromium
    ↓
Interfaz

🟢 Node.js
    ↓
Sistema operativo
```

### 🧠 Lo importante

Chromium permite construir la **interfaz**.

Node.js permite interactuar con el **sistema**.

Electron conecta ambas partes.

---

# 3️⃣ 🖥️ ELECTRON COMO APLICACIÓN DESKTOP

Electron no es simplemente una página web abierta en Chrome.

Cuando ejecutas una aplicación Electron, tienes un programa de escritorio que puede interactuar con el sistema operativo.

Por ejemplo:

```text
🖥️ Mi aplicación Electron
│
├── 🪟 Ventanas
├── 📁 Archivos
├── 🔔 Notificaciones
├── 📋 Clipboard
├── 🖥️ Sistema operativo
└── ⚙️ Procesos
```

Una aplicación Electron puede tener:

* 🪟 Ventanas independientes
* 📋 Menús
* 🔔 Notificaciones
* 📁 Acceso al filesystem
* 🖥️ Icono en la bandeja del sistema
* ⌨️ Atajos de teclado
* 📂 Diálogos nativos
* 🔗 Protocolos personalizados

Por eso puede comportarse como una aplicación desktop tradicional.

---

# 4️⃣ 🪟 BROWSERWINDOW

`BrowserWindow` es uno de los conceptos fundamentales de Electron.

Representa una **ventana de la aplicación**.

Ejemplo:

```ts
const win = new BrowserWindow({
  width: 1200,
  height: 800
});
```

Conceptualmente:

```text
new BrowserWindow()
       ↓
┌──────────────────────────┐
│ 🪟 Mi aplicación         │
│                          │
│   HTML + CSS + JS        │
│                          │
└──────────────────────────┘
```

Una `BrowserWindow` puede cargar una página o una aplicación web.

Por ejemplo:

```ts
win.loadFile('index.html');
```

o una URL:

```ts
win.loadURL('http://localhost:4200');
```

### 🧠 Idea clave

> `BrowserWindow` es la ventana donde se renderiza la interfaz de tu aplicación Electron.

Una aplicación puede tener una o varias:

```text
Electron
   │
   ├── BrowserWindow
   │      └── 🪟 Main Window
   │
   └── BrowserWindow
          └── 🪟 Settings
```

---

# 5️⃣ 🧩 ELECTRON APIS

Electron proporciona APIs para interactuar con funcionalidades del sistema operativo.

Algunas de las más importantes son:

| API                | ¿Para qué sirve?                                   |
| ------------------ | -------------------------------------------------- |
| 🪟 `BrowserWindow` | Crear y controlar ventanas                         |
| 📦 `app`           | Controlar el ciclo de vida de la aplicación        |
| 💬 `dialog`        | Mostrar diálogos nativos                           |
| 🔔 `Notification`  | Mostrar notificaciones                             |
| 📋 `clipboard`     | Leer/escribir el portapapeles                      |
| 🖥️ `screen`       | Obtener información de pantallas                   |
| 🧭 `shell`         | Abrir URLs o archivos con aplicaciones del sistema |
| 📁 `session`       | Gestionar sesiones y almacenamiento web            |
| 🖥️ `Menu`         | Crear menús de aplicación                          |
| 🔗 `ipcMain`       | Comunicación desde el proceso principal            |
| 🔗 `ipcRenderer`   | Comunicación desde la interfaz                     |
| 🖥️ `Tray`         | Crear iconos en la bandeja del sistema             |

Estas APIs permiten que una aplicación web tenga capacidades propias de una aplicación de escritorio.

---

# 6️⃣ 📱 MOBILE VS DESKTOP

Aunque tanto Ionic como Electron permiten utilizar tecnologías web, su objetivo es diferente.

### 📱 Ionic

Está orientado principalmente a:

```text
📱 Mobile
```

Y puede utilizar:

* Android
* iOS

mediante Capacitor.

```text
Angular
   ↓
Ionic
   ↓
Capacitor
   ↓
📱 Android / iOS
```

---

### 🖥️ Electron

Está orientado a:

```text
🖥️ Desktop
```

Principalmente:

* Windows
* macOS
* Linux

```text
HTML + CSS + JS
       ↓
    Electron
       ↓
🖥️ Desktop
```

### 📊 Comparación

| Característica | 📱 Ionic                    | 🖥️ Electron                      |
| -------------- | --------------------------- | --------------------------------- |
| Objetivo       | Mobile                      | Desktop                           |
| Android        | ✅                           | ❌                                 |
| iOS            | ✅                           | ❌                                 |
| Windows        | No es su objetivo principal | ✅                                 |
| macOS          | No es su objetivo principal | ✅                                 |
| Linux          | No es su objetivo principal | ✅                                 |
| Motor web      | WebView                     | Chromium                          |
| Runtime nativo | Capacitor                   | Electron + Node.js                |
| Cámara/GPS     | ✅                           | Limitado / mediante APIs externas |
| Filesystem     | Mediante Capacitor          | Mediante Node/Electron            |
| Notificaciones | Mobile                      | Desktop                           |

---

# 7️⃣ 🆚 ELECTRON VS IONIC

Ambos permiten reutilizar conocimientos web, pero resuelven problemas diferentes.

## 🖥️ ELECTRON

```text
🌐 Web technologies
        ↓
⚡ Electron
        ↓
🖥️ Desktop
```

Ideal para:

* 📝 Editores
* 💻 IDEs
* 💬 Aplicaciones de comunicación
* 🎨 Herramientas de diseño
* 📊 Aplicaciones empresariales
* 🛠️ Herramientas de desarrollo

---

## 📱 IONIC

```text
🌐 Web technologies
        ↓
📱 Ionic
        ↓
⚡ Capacitor
        ↓
📱 Mobile
```

Ideal para:

* 📱 Aplicaciones móviles
* 🛒 E-commerce móvil
* 📍 Apps con GPS
* 📷 Apps con cámara
* 🔔 Apps con notificaciones
* 📱 Aplicaciones multiplataforma

---

# 🧠 DIFERENCIA FUNDAMENTAL

La forma más sencilla de recordarlo:

```text
                🌐 WEB
                  │
          ┌───────┴────────┐
          ↓                ↓
      📱 IONIC          🖥️ ELECTRON
          ↓                ↓
      Capacitor          Electron
          ↓                ↓
    Android / iOS     Windows / macOS / Linux
```

### 🏆 Regla mental

> 📱 **Ionic = llevar tecnologías web al mundo móvil.**

> 🖥️ **Electron = llevar tecnologías web al mundo desktop.**

Y una diferencia especialmente importante:

> **Ionic utiliza Capacitor para comunicarse con las capacidades nativas del móvil, mientras Electron combina Chromium + Node.js para proporcionar una aplicación de escritorio con acceso al sistema operativo.**
