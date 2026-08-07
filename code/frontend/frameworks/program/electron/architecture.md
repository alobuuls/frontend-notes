# 🏗️ ELECTRON ARCHITECTURE

La arquitectura de Electron se basa en varios componentes que trabajan juntos para separar la **interfaz**, la **comunicación** y el **acceso al sistema operativo**.

La idea general es:

```text
Angular
   ↓
Renderer
   ↓
Preload
   ↓
IPC
   ↓
Main Process
   ↓
Node.js
   ↓
Operating System
```

---

## 📑 ÍNDICE — ELECTRON ARCHITECTURE

- [🏗️ ELECTRON ARCHITECTURE](#️-electron-architecture)
  - [📑 ÍNDICE — ELECTRON ARCHITECTURE](#-índice--electron-architecture)
  - [1️⃣ ⚙️ MAIN PROCESS](#1️⃣-️-main-process)
    - [🎯 ¿Para qué sirve?](#-para-qué-sirve)
    - [🧠 Idea clave](#-idea-clave)
  - [2️⃣ 🖥️ RENDERER PROCESS](#2️⃣-️-renderer-process)
    - [📌 Ejemplo](#-ejemplo)
    - [⚠️ Importante](#️-importante)
    - [🧠 Idea clave](#-idea-clave-1)
- [3️⃣ 🌉 PRELOAD SCRIPT](#3️⃣--preload-script)
    - [🧠 Idea clave](#-idea-clave-2)
- [4️⃣ 🔄 IPC](#4️⃣--ipc)
    - [🔹 `ipcMain`](#-ipcmain)
    - [🔹 `ipcRenderer`](#-ipcrenderer)
    - [🔹 `invoke`](#-invoke)
    - [🔹 `handle`](#-handle)
    - [🧠 Idea clave](#-idea-clave-3)
- [5️⃣ 🔗 COMUNICACIÓN ENTRE PROCESOS](#5️⃣--comunicación-entre-procesos)
    - [📌 Ejemplo conceptual](#-ejemplo-conceptual)
    - [🧠 Idea clave](#-idea-clave-4)
- [6️⃣ 🧩 CONTEXT ISOLATION](#6️⃣--context-isolation)
    - [🧠 Idea clave](#-idea-clave-5)
- [7️⃣ 🔐 EXPOSING APIs](#7️⃣--exposing-apis)
    - [🧠 Principio importante](#-principio-importante)
- [8️⃣ 🏗️ ARQUITECTURA COMPLETA](#8️⃣-️-arquitectura-completa)
    - [🖥️ Renderer](#️-renderer)
    - [🌉 Preload](#-preload)
    - [🔄 IPC](#-ipc)
    - [⚙️ Main](#️-main)
    - [🟢 Node.js](#-nodejs)
    - [🖥️ Operating System](#️-operating-system)
- [🧠 DIAGRAMA PRINCIPAL](#-diagrama-principal)
  - [🏆 🧠 IDEA CLAVE PARA ESTUDIAR](#--idea-clave-para-estudiar)

## 1️⃣ ⚙️ MAIN PROCESS

El **Main Process** es el proceso principal de una aplicación Electron.

Es el encargado de controlar aspectos importantes de la aplicación y tiene acceso a las APIs principales de Electron y, según la configuración, a capacidades de Node.js.

### 🎯 ¿Para qué sirve?

Puede encargarse de:

* 🪟 Crear ventanas.
* 📋 Crear menús.
* 🔔 Mostrar diálogos y notificaciones.
* 📁 Trabajar con archivos.
* 🖥️ Interactuar con funcionalidades del sistema.
* 🔄 Recibir comunicaciones desde el Renderer.
* ⚙️ Controlar el ciclo de vida de la aplicación.

Por ejemplo:

```text
Main Process
     ↓
BrowserWindow
     ↓
🪟 Ventana de Electron
```

### 🧠 Idea clave

> **Main Process = controla la aplicación Electron y coordina las operaciones que necesitan privilegios.**

---

## 2️⃣ 🖥️ RENDERER PROCESS

El **Renderer Process** es donde se ejecuta la interfaz de usuario.

Si utilizas Angular con Electron, aquí es donde se ejecutará tu aplicación Angular.

```text
🅰️ Angular
     ↓
🖥️ Renderer
     ↓
HTML + CSS + JavaScript
     ↓
👤 Usuario
```

Aquí normalmente encontrarás:

* 🧩 Components
* 🛠️ Services
* 🎨 HTML
* 🎨 CSS
* 🧠 JavaScript / TypeScript
* 🌐 APIs web

### 📌 Ejemplo

```text
Angular Component
      ↓
Renderer Process
      ↓
BrowserWindow
      ↓
🖥️ Interfaz
```

### ⚠️ Importante

El Renderer **no debería tener acceso directo e ilimitado a Node.js o al sistema operativo**.

Para realizar operaciones privilegiadas debe utilizar mecanismos como:

```text
Renderer
   ↓
Preload
   ↓
IPC
   ↓
Main
```

### 🧠 Idea clave

> **Renderer Process = la parte visual de tu aplicación.**

---

# 3️⃣ 🌉 PRELOAD SCRIPT

El **Preload Script** funciona como un **puente seguro** entre el Renderer y Electron.

Se ejecuta antes de que se cargue la página del Renderer.

Su función principal es exponer determinadas funcionalidades de forma controlada.

```text
🖥️ Renderer
      ↓
🌉 Preload
      ↓
⚙️ Electron
```

Por ejemplo:

```text
Angular
   ↓
window.api.saveFile()
   ↓
Preload
   ↓
IPC
   ↓
Main
```

El Renderer no necesita conocer directamente cómo funciona el sistema de archivos.

Solo utiliza una API previamente expuesta.

### 🧠 Idea clave

> **Preload = puente entre la interfaz y las capacidades de Electron.**

---

# 4️⃣ 🔄 IPC

**IPC** significa:

> **Inter-Process Communication**

Es el mecanismo que permite que diferentes procesos de Electron se comuniquen.

Por ejemplo:

```text
🖥️ Renderer
      ↓
      IPC
      ↓
⚙️ Main Process
```

Esto es necesario porque Renderer y Main tienen responsabilidades diferentes.

---

### 🔹 `ipcMain`

`ipcMain` se utiliza en el **Main Process**.

Permite escuchar y gestionar comunicaciones provenientes del Renderer.

```text
Renderer
   ↓
IPC
   ↓
ipcMain
   ↓
Main Process
```

---

### 🔹 `ipcRenderer`

`ipcRenderer` se utiliza desde el contexto del Renderer/Preload para comunicarse con el Main Process.

```text
Renderer
   ↓
ipcRenderer
   ↓
IPC
   ↓
Main
```

---

### 🔹 `invoke`

`invoke()` permite enviar una petición desde el Renderer y **esperar una respuesta**.

Conceptualmente:

```text
Renderer
   │
   │ invoke()
   ↓
Main
   │
   │ procesa
   ↓
Response
   │
   ↓
Renderer
```

Es especialmente útil para operaciones que necesitan devolver un resultado.

---

### 🔹 `handle`

`handle()` se utiliza en el Main Process para responder a una petición realizada mediante `invoke()`.

La relación es:

```text
ipcRenderer.invoke()
        ↓
ipcMain.handle()
```

### 🧠 Idea clave

Puedes recordarlo así:

```text
📤 invoke()
"Main, necesito que hagas algo"

📥 handle()
"Recibí la petición y voy a responder"
```

---

# 5️⃣ 🔗 COMUNICACIÓN ENTRE PROCESOS

La comunicación típica de una aplicación Electron puede verse así:

```text
🅰️ Angular
     ↓
🖥️ Renderer
     ↓
🌉 Preload
     ↓
📤 ipcRenderer.invoke()
     ↓
🔄 IPC
     ↓
📥 ipcMain.handle()
     ↓
⚙️ Main Process
     ↓
🟢 Node.js
     ↓
🖥️ Operating System
```

### 📌 Ejemplo conceptual

Imagina que Angular necesita leer un archivo:

```text
Angular
   ↓
"Quiero leer este archivo"
   ↓
Preload
   ↓
invoke("read-file")
   ↓
Main
   ↓
Node.js
   ↓
Filesystem
   ↓
Contenido del archivo
   ↓
Main
   ↓
Preload
   ↓
Angular
```

### 🧠 Idea clave

> **El Renderer solicita la operación y el Main se encarga de realizarla.**

---

# 6️⃣ 🧩 CONTEXT ISOLATION

`contextIsolation` es una medida de seguridad de Electron que separa el contexto de la aplicación web del contexto utilizado por APIs privilegiadas.

Conceptualmente:

```text
┌─────────────────────────┐
│ 🖥️ Renderer             │
│                         │
│ Angular                 │
│ HTML / CSS / JS         │
└────────────┬────────────┘
             │
        🔐 Isolation
             │
┌────────────▼────────────┐
│ 🌉 Preload              │
│                         │
│ APIs controladas        │
└─────────────────────────┘
```

Esto ayuda a evitar que el código de la interfaz pueda acceder directamente a funcionalidades sensibles.

### 🧠 Idea clave

> **Context Isolation = separación de contextos para mejorar la seguridad.**

Por eso una arquitectura moderna suele buscar:

```text
❌ Renderer → Node.js directamente

✅ Renderer
      ↓
   Preload
      ↓
     IPC
      ↓
    Main
      ↓
   Node.js
```

---

# 7️⃣ 🔐 EXPOSING APIs

El Renderer puede necesitar funcionalidades que pertenecen al mundo de Electron.

Por ejemplo:

```text
📁 Guardar archivo
📋 Leer clipboard
🔔 Mostrar notificación
🖥️ Obtener información del sistema
```

Pero no es recomendable exponer todas las APIs de Electron.

En su lugar, el **Preload** puede exponer únicamente funciones específicas.

Por ejemplo:

```text
window.api.saveFile()
window.api.readFile()
window.api.showNotification()
```

La arquitectura sería:

```text
Angular
   ↓
window.api.saveFile()
   ↓
Preload
   ↓
IPC
   ↓
Main
   ↓
Node.js
   ↓
Filesystem
```

### 🧠 Principio importante

> **Expón únicamente las capacidades que realmente necesita el Renderer.**

No:

```text
❌ Exponer todo Node.js
❌ Exponer todo Electron
```

Sino:

```text
✅ Exponer APIs específicas
```

---

# 8️⃣ 🏗️ ARQUITECTURA COMPLETA

Aquí se juntan todas las piezas anteriores.

### 🖥️ Renderer

Es donde vive la interfaz.

```text
Angular
HTML
CSS
TypeScript
JavaScript
```

⬇️

### 🌉 Preload

Actúa como puente seguro.

```text
window.api
```

⬇️

### 🔄 IPC

Transporta las comunicaciones.

```text
invoke()
   ↕
handle()
```

⬇️

### ⚙️ Main

Controla Electron y las operaciones privilegiadas.

```text
BrowserWindow
dialog
Menu
Notification
etc.
```

⬇️

### 🟢 Node.js

Permite trabajar con capacidades del entorno de ejecución.

Por ejemplo:

```text
fs
path
process
etc.
```

⬇️

### 🖥️ Operating System

Es donde finalmente se realizan las operaciones.

```text
Windows
macOS
Linux
```

---

# 🧠 DIAGRAMA PRINCIPAL

```text
Angular
   ↓
Renderer
   ↓
Preload
   ↓
IPC
   ↓
Main Process
   ↓
Node.js
   ↓
Operating System
```

Una versión más detallada:

```text
┌─────────────────────────────┐
│ 🅰️ ANGULAR                  │
│ Components / Services       │
└──────────────┬──────────────┘
               ↓
┌─────────────────────────────┐
│ 🖥️ RENDERER PROCESS         │
│ UI / HTML / CSS / JS        │
└──────────────┬──────────────┘
               ↓
┌─────────────────────────────┐
│ 🌉 PRELOAD SCRIPT           │
│ APIs expuestas              │
└──────────────┬──────────────┘
               ↓
┌─────────────────────────────┐
│ 🔄 IPC                      │
│ invoke() ↔ handle()         │
└──────────────┬──────────────┘
               ↓
┌─────────────────────────────┐
│ ⚙️ MAIN PROCESS             │
│ Electron APIs               │
└──────────────┬──────────────┘
               ↓
┌─────────────────────────────┐
│ 🟢 NODE.JS                  │
│ Filesystem / Processes      │
└──────────────┬──────────────┘
               ↓
┌─────────────────────────────┐
│ 🖥️ OPERATING SYSTEM         │
│ Windows / macOS / Linux     │
└─────────────────────────────┘
```

## 🏆 🧠 IDEA CLAVE PARA ESTUDIAR

| 🧩 Pieza                 | 🧠 Recuerda                                     |
| ------------------------ | ----------------------------------------------- |
| 🖥️ **Renderer**         | 🎨 Aquí está la interfaz                        |
| 🌉 **Preload**           | 🌉 Es el puente                                 |
| 🔄 **IPC**               | 📡 Permite comunicarse                          |
| ⚙️ **Main**              | 🧠 Controla Electron                            |
| 🟢 **Node.js**           | 🔧 Permite trabajar con capacidades del sistema |
| 🖥️ **Operating System** | 💻 Ejecuta las operaciones reales               |
| 🔐 **Context Isolation** | 🛡️ Aísla los contextos                         |
| 🔐 **Exposing APIs**     | 🎯 Expone solamente lo necesario                |

> 📌 **No conviene estudiar `IPC`, `Preload` y `Context Isolation` como conceptos completamente separados:** forman parte de la misma arquitectura de comunicación y seguridad de Electron.
