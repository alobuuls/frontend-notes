# ⚡ NATIVE APIS

Las **Native APIs** de Electron permiten que una aplicación de escritorio interactúe con funcionalidades que normalmente no están disponibles en una aplicación web tradicional.

Por ejemplo:

```text
🌐 Aplicación web
      ↓
Limitada principalmente al navegador

🖥️ Electron
      ↓
Puede interactuar con:
📁 Archivos
📋 Clipboard
🔔 Notificaciones
🪟 Ventanas
📂 Diálogos
🖱️ Menús
⌨️ Atajos
⚙️ Procesos
🖥️ Sistema operativo
```

---

## 📑 ÍNDICE — NATIVE APIS

- [⚡ NATIVE APIS](#-native-apis)
  - [📑 ÍNDICE — NATIVE APIS](#-índice--native-apis)
  - [1️⃣ 📁 FILESYSTEM](#1️⃣--filesystem)
    - [🎯 ¿Para qué sirve?](#-para-qué-sirve)
    - [🧠 Idea clave](#-idea-clave)
- [2️⃣ 📋 CLIPBOARD](#2️⃣--clipboard)
    - [🎯 ¿Para qué sirve?](#-para-qué-sirve-1)
    - [🧠 Idea clave](#-idea-clave-1)
- [3️⃣ 🔔 NOTIFICATIONS](#3️⃣--notifications)
    - [🎯 ¿Para qué sirven?](#-para-qué-sirven)
    - [🧠 Idea clave](#-idea-clave-2)
- [4️⃣ 🖱️ MENUS](#4️⃣-️-menus)
    - [📌 Application Menu](#-application-menu)
    - [🎯 ¿Para qué sirve?](#-para-qué-sirve-2)
    - [📌 Context Menu](#-context-menu)
    - [🧠 Diferencia](#-diferencia)
- [5️⃣ 📂 DIALOGS](#5️⃣--dialogs)
    - [🎯 Tipos comunes](#-tipos-comunes)
    - [🧠 Idea clave](#-idea-clave-3)
- [6️⃣ 🪟 WINDOW MANAGEMENT](#6️⃣--window-management)
    - [🎯 ¿Para qué sirve?](#-para-qué-sirve-3)
    - [🧠 Idea clave](#-idea-clave-4)
- [7️⃣ ⌨️ SHORTCUTS](#7️⃣-️-shortcuts)
    - [🌐 Shortcuts globales](#-shortcuts-globales)
    - [🧠 Idea clave](#-idea-clave-5)
- [8️⃣ ⚙️ PROCESSES](#8️⃣-️-processes)
    - [🧠 Idea clave](#-idea-clave-6)
- [9️⃣ 🧩 NODE.JS APIS](#9️⃣--nodejs-apis)
    - [🧠 Idea clave](#-idea-clave-7)
- [🔟 🖥️ OPERATING SYSTEM APIS](#-️-operating-system-apis)
    - [🧠 Idea clave](#-idea-clave-8)
- [🏗️ ¿CÓMO SE CONECTA TODO?](#️-cómo-se-conecta-todo)
  - [🏆 RESUMEN](#-resumen)

## 1️⃣ 📁 FILESYSTEM

El **Filesystem** permite trabajar con archivos y carpetas del sistema operativo.

Electron puede utilizar las APIs de Node.js, especialmente el módulo:

```text
fs
```

### 🎯 ¿Para qué sirve?

Permite:

* 📖 Leer archivos.
* ✍️ Crear archivos.
* 📝 Modificar archivos.
* 🗑️ Eliminar archivos.
* 📂 Crear carpetas.
* 📁 Leer directorios.
* 🔍 Comprobar si existen archivos.

Ejemplo conceptual:

```text
Angular
   ↓
"Quiero guardar este archivo"
   ↓
Preload
   ↓
IPC
   ↓
Main
   ↓
Node.js → fs
   ↓
Filesystem
```

### 🧠 Idea clave

> **Filesystem = trabajar con archivos y carpetas del ordenador.**

⚠️ Estas operaciones deben diseñarse cuidadosamente porque implican acceso al sistema.

---

# 2️⃣ 📋 CLIPBOARD

El **Clipboard** es el portapapeles del sistema operativo.

Permite interactuar con información que el usuario copia y pega.

### 🎯 ¿Para qué sirve?

Por ejemplo:

```text
📋 Copiar texto
📋 Leer texto copiado
📋 Pegar contenido
```

Un flujo podría ser:

```text
Usuario
   ↓
"Copiar este texto"
   ↓
Electron
   ↓
Clipboard
```

También puedes hacer:

```text
Clipboard
   ↓
"Leer contenido"
   ↓
Electron
   ↓
Angular
```

### 🧠 Idea clave

> **Clipboard = comunicación con el portapapeles del sistema.**

---

# 3️⃣ 🔔 NOTIFICATIONS

Electron permite crear **notificaciones de escritorio**.

Son mensajes que aparecen fuera de la interfaz principal de la aplicación.

Por ejemplo:

```text
┌──────────────────────────────┐
│ 🔔 Mi aplicación             │
│                              │
│ El archivo se guardó         │
│ correctamente.               │
└──────────────────────────────┘
```

### 🎯 ¿Para qué sirven?

* 🔔 Informar al usuario.
* ✅ Confirmar operaciones.
* ⚠️ Avisar de eventos importantes.
* 📥 Informar sobre procesos terminados.
* 🔄 Comunicar cambios mientras la aplicación está en segundo plano.

### 🧠 Idea clave

> **Notifications = mensajes visibles a nivel del sistema operativo.**

---

# 4️⃣ 🖱️ MENUS

Electron permite crear menús propios para la aplicación.

Existen principalmente dos conceptos importantes.

---

### 📌 Application Menu

Es el menú principal de la aplicación.

Por ejemplo:

```text
Archivo
Editar
Ver
Ayuda
```

Puede contener acciones como:

```text
Archivo
├── Nuevo
├── Abrir
├── Guardar
└── Salir
```

### 🎯 ¿Para qué sirve?

Para proporcionar acciones globales de la aplicación.

---

### 📌 Context Menu

Es el menú que aparece normalmente al hacer clic derecho.

Por ejemplo:

```text
🖱️ Click derecho

┌──────────────────┐
│ Copiar           │
│ Pegar            │
│ Cortar           │
│ Eliminar         │
└──────────────────┘
```

Puede personalizarse según las necesidades de la aplicación.

### 🧠 Diferencia

| Menú                     | 📌 Función                                                           |
| ------------------------ | -------------------------------------------------------------------- |
| 🖱️ **Application Menu** | Menú principal de la aplicación                                      |
| 🖱️ **Context Menu**     | Menú contextual, normalmente asociado a una acción como clic derecho |

---

# 5️⃣ 📂 DIALOGS

Los **Dialogs** son ventanas del sistema operativo que permiten interactuar con el usuario.

Por ejemplo:

```text
📂 Seleccionar archivo
📁 Seleccionar carpeta
💾 Guardar archivo
⚠️ Mostrar confirmación
❌ Mostrar error
```

Ejemplo conceptual:

```text
Usuario
   ↓
"Abrir archivo"
   ↓
Electron
   ↓
📂 File Dialog
   ↓
Usuario selecciona archivo
   ↓
Electron recibe la ruta
```

### 🎯 Tipos comunes

```text
📂 Open Dialog
💾 Save Dialog
⚠️ Message Dialog
```

### 🧠 Idea clave

> **Dialogs = ventanas nativas para pedir información o decisiones al usuario.**

---

# 6️⃣ 🪟 WINDOW MANAGEMENT

Electron permite controlar las ventanas de la aplicación.

Por ejemplo:

```text
🪟 Crear ventana
🪟 Cerrar ventana
🪟 Minimizar
🪟 Maximizar
🪟 Restaurar
🪟 Redimensionar
🪟 Mover
🪟 Ocultar
🪟 Mostrar
```

Una aplicación puede tener:

```text
┌─────────────────────┐
│ 🪟 Main Window      │
│                     │
│       Angular       │
│                     │
└─────────────────────┘

         +

┌─────────────────────┐
│ 🪟 Settings         │
│                     │
└─────────────────────┘
```

### 🎯 ¿Para qué sirve?

Para controlar la experiencia de una aplicación desktop.

### 🧠 Idea clave

> **Window Management = controlar las ventanas de Electron.**

---

# 7️⃣ ⌨️ SHORTCUTS

Electron permite trabajar con **atajos de teclado**.

Por ejemplo:

```text
Ctrl + S
Ctrl + N
Ctrl + Shift + P
```

Puedes utilizarlos para ejecutar acciones rápidamente.

Ejemplo:

```text
Ctrl + S
   ↓
Guardar documento
   ↓
Filesystem
```

También existen conceptos como:

### 🌐 Shortcuts globales

Funcionan incluso cuando la aplicación no tiene el foco, dependiendo de la configuración y del sistema operativo.

Esto puede ser útil para aplicaciones que necesitan reaccionar a determinadas combinaciones de teclas a nivel del sistema.

### 🧠 Idea clave

> **Shortcuts = ejecutar acciones mediante combinaciones de teclas.**

---

# 8️⃣ ⚙️ PROCESSES

Electron también puede trabajar con **procesos del sistema** mediante Node.js.

Por ejemplo, una aplicación puede necesitar:

```text
⚙️ Ejecutar un proceso
⚙️ Obtener información del proceso
⚙️ Detectar procesos
⚙️ Comunicarse con procesos externos
```

Esto puede ser útil para aplicaciones que necesitan interactuar con herramientas externas.

Por ejemplo:

```text
Electron
   ↓
Node.js
   ↓
Proceso externo
   ↓
Resultado
```

### 🧠 Idea clave

> **Processes = interactuar con procesos que se ejecutan en el sistema.**

⚠️ Ejecutar procesos externos implica riesgos de seguridad si se utilizan datos proporcionados directamente por el usuario.

---

# 9️⃣ 🧩 NODE.JS APIS

Una de las características importantes de Electron es que permite utilizar APIs de Node.js de manera controlada.

Algunas APIs importantes:

| API             | 🎯 ¿Para qué sirve?                   |
| --------------- | ------------------------------------- |
| `fs`            | 📁 Archivos y carpetas                |
| `path`          | 📍 Trabajar con rutas                 |
| `os`            | 🖥️ Información del sistema operativo |
| `process`       | ⚙️ Información y control del proceso  |
| `child_process` | ⚙️ Ejecutar procesos externos         |
| `crypto`        | 🔐 Operaciones criptográficas         |
| `url`           | 🔗 Trabajar con URLs                  |
| `events`        | 📡 Sistema de eventos                 |

### 🧠 Idea clave

> **Node.js APIs proporcionan funcionalidades que van más allá de las APIs normales del navegador.**

Pero recuerda:

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

# 🔟 🖥️ OPERATING SYSTEM APIS

Electron también puede interactuar con funcionalidades específicas del sistema operativo.

Dependiendo de la plataforma:

```text
🪟 Windows
🍎 macOS
🐧 Linux
```

Puede trabajar con características como:

```text
🪟 Ventanas
🔔 Notificaciones
📋 Clipboard
📁 Filesystem
⌨️ Atajos
🖥️ Información del sistema
⚙️ Procesos
```

Electron intenta proporcionar una API común para muchas funcionalidades, aunque algunas características pueden comportarse de forma diferente dependiendo del sistema operativo.

### 🧠 Idea clave

> **Operating System APIs = funcionalidades que permiten que la aplicación se integre con el entorno desktop.**

---

# 🏗️ ¿CÓMO SE CONECTA TODO?

Las Native APIs normalmente forman un flujo parecido a este:

```text
┌──────────────────────┐
│ 🅰️ Angular           │
│ Renderer             │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│ 🌉 Preload           │
│ APIs expuestas       │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│ 🔄 IPC               │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│ ⚙️ Main Process      │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│ 🧩 Node.js / Electron│
│ Native APIs          │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│ 🖥️ Operating System  │
└──────────────────────┘
```

## 🏆 RESUMEN

| 🧩 API / Feature         | 🎯 ¿Qué permite hacer?                           |
| ------------------------ | ------------------------------------------------ |
| 📁 **Filesystem**        | Leer, crear, modificar y eliminar archivos       |
| 📋 **Clipboard**         | Copiar y leer información del portapapeles       |
| 🔔 **Notifications**     | Mostrar notificaciones del sistema               |
| 🖱️ **Menus**            | Crear menús de aplicación y contextuales         |
| 📂 **Dialogs**           | Abrir ventanas nativas de selección/confirmación |
| 🪟 **Window Management** | Crear y controlar ventanas                       |
| ⌨️ **Shortcuts**         | Ejecutar acciones mediante atajos                |
| ⚙️ **Processes**         | Interactuar con procesos del sistema             |
| 🧩 **Node.js APIs**      | Acceder a funcionalidades del entorno Node       |
| 🖥️ **OS APIs**          | Integrar la aplicación con el sistema operativo  |

> 💡 **Idea principal:** Electron permite que una aplicación web deje de estar limitada al navegador y pueda interactuar con recursos del **desktop**, pero esas capacidades deben exponerse y utilizarse de forma controlada y segura.
