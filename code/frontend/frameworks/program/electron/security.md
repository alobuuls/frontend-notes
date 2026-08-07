# 🛡️ ELECTRON SECURITY

La seguridad en Electron es especialmente importante porque una aplicación de escritorio combina **tecnologías web** con acceso a capacidades del sistema operativo.

Una mala configuración puede permitir que código que debería ser únicamente de interfaz tenga acceso innecesario a archivos, procesos, credenciales o APIs del sistema.

---

## 📑 ÍNDICE — ELECTRON SECURITY

- [🛡️ ELECTRON SECURITY](#️-electron-security)
  - [📑 ÍNDICE — ELECTRON SECURITY](#-índice--electron-security)
  - [1️⃣ 🔐 CONTEXT ISOLATION](#1️⃣--context-isolation)
    - [🧠 ¿Por qué es importante?](#-por-qué-es-importante)
    - [🛡️ Idea clave](#️-idea-clave)
  - [2️⃣ 🚫 NODE INTEGRATION](#2️⃣--node-integration)
    - [🔒 Configuración recomendada](#-configuración-recomendada)
    - [🧠 ¿Qué significa?](#-qué-significa)
  - [3️⃣ 🧩 PRELOAD SECURITY](#3️⃣--preload-security)
    - [🧠 Idea clave](#-idea-clave)
  - [4️⃣ 🔄 IPC SECURITY](#4️⃣--ipc-security)
    - [❌ Mala práctica](#-mala-práctica)
    - [✅ Mejor práctica](#-mejor-práctica)
    - [🛡️ Principios importantes](#️-principios-importantes)
    - [🧠 Idea clave](#-idea-clave-1)
  - [5️⃣ 🏖️ SANDBOX](#5️⃣-️-sandbox)
    - [🧠 ¿Por qué importa?](#-por-qué-importa)
  - [6️⃣ 🔒 CONTENT SECURITY POLICY](#6️⃣--content-security-policy)
    - [🛡️ ¿Qué ayuda a prevenir?](#️-qué-ayuda-a-prevenir)
  - [7️⃣ 🌐 HTTPS](#7️⃣--https)
    - [🔒 ¿Por qué HTTPS?](#-por-qué-https)
    - [❌ Evita](#-evita)
    - [✅ Preferible](#-preferible)
  - [8️⃣ 🔑 CREDENTIALS Y TOKENS](#8️⃣--credentials-y-tokens)
    - [🧠 Diferencia importante](#-diferencia-importante)
  - [9️⃣ 🔐 SECURE STORAGE](#9️⃣--secure-storage)
    - [📦 Ejemplos de información sensible](#-ejemplos-de-información-sensible)
    - [🧠 Importante](#-importante)
  - [🔟 ⚠️ EXPOSICIÓN DE APIs](#-️-exposición-de-apis)
    - [❌ Demasiado acceso](#-demasiado-acceso)
    - [✅ API específica](#-api-específica)
    - [🧠 Principio de mínimo privilegio](#-principio-de-mínimo-privilegio)
  - [1️⃣1️⃣ 🛡️ BUENAS PRÁCTICAS](#1️⃣1️⃣-️-buenas-prácticas)
    - [🔐 Renderer](#-renderer)
    - [🌉 Preload](#-preload)
    - [🔄 IPC](#-ipc)
    - [⚙️ Main Process](#️-main-process)
    - [🌐 Comunicación externa](#-comunicación-externa)
- [🔐 ELECTRON + JWT](#-electron--jwt)

## 1️⃣ 🔐 CONTEXT ISOLATION

**Context Isolation** permite mantener separado el contexto donde se ejecuta el código de la aplicación (`renderer`) del contexto donde se ejecutan APIs privilegiadas.

### 🧠 ¿Por qué es importante?

El Renderer puede cargar contenido web y, por seguridad, no debería tener acceso directo a APIs sensibles de Node.js o Electron.

La arquitectura recomendada es:

```text
Renderer
   ↓
Preload
   ↓
API controlada
   ↓
Main Process
   ↓
Sistema operativo
```

### 🛡️ Idea clave

> El Renderer debe tener solamente el acceso que realmente necesita.

Esto reduce el impacto de una posible vulnerabilidad XSS o de contenido malicioso.

---

## 2️⃣ 🚫 NODE INTEGRATION

`nodeIntegration` determina si el Renderer puede utilizar directamente APIs de Node.js.

Por ejemplo, con Node Integration habilitada, el Renderer podría tener acceso directo a APIs como:

```javascript
require('fs')
```

Esto es peligroso si el Renderer puede ejecutar contenido no confiable.

### 🔒 Configuración recomendada

```javascript
new BrowserWindow({
  webPreferences: {
    nodeIntegration: false
  }
})
```

### 🧠 ¿Qué significa?

```text
nodeIntegration: false
        ↓
Renderer ❌ Node.js directo
        ↓
Preload ✅ acceso controlado
```

> [!WARNING]
> Evita habilitar `nodeIntegration` simplemente para facilitar la comunicación entre Angular y Electron.

---

## 3️⃣ 🧩 PRELOAD SECURITY

El **Preload Script** funciona como una frontera entre el Renderer y las capacidades privilegiadas de Electron/Node.js.

Su función de seguridad no es darle acceso ilimitado al Renderer, sino **exponer únicamente las operaciones necesarias**.

Por ejemplo:

```javascript
contextBridge.exposeInMainWorld('electronAPI', {
  getUsers: () => ipcRenderer.invoke('get-users')
})
```

El Renderer puede hacer:

```javascript
window.electronAPI.getUsers()
```

pero no obtiene acceso directo a todo Node.js.

### 🧠 Idea clave

```text
Renderer
   ↓
API específica
   ↓
Preload
   ↓
IPC
```

> [!TIP]
> Una buena API de Preload debe ser pequeña y específica.

---

## 4️⃣ 🔄 IPC SECURITY

IPC permite que **Renderer y Main Process** se comuniquen.

Pero no deberías asumir que cualquier mensaje recibido por IPC es confiable.

### ❌ Mala práctica

Crear canales demasiado genéricos:

```javascript
ipcMain.handle('execute-command', (_, command) => {
  // Ejecutar cualquier comando recibido
})
```

Esto puede convertirse en una vulnerabilidad grave.

### ✅ Mejor práctica

Crear operaciones específicas:

```javascript
ipcMain.handle('get-user-profile', async () => {
  return getUserProfile()
})
```

### 🛡️ Principios importantes

* Validar los datos recibidos.
* Limitar las operaciones disponibles.
* No aceptar comandos arbitrarios.
* Evitar exponer APIs innecesarias.
* Mantener la lógica sensible en Main.

### 🧠 Idea clave

> IPC debe ser una **API controlada**, no una puerta abierta hacia el sistema operativo.

---

## 5️⃣ 🏖️ SANDBOX

El **Sandbox** limita las capacidades disponibles para determinados procesos, especialmente el Renderer.

Su objetivo es reducir el daño potencial si una vulnerabilidad permite ejecutar código malicioso.

Conceptualmente:

```text
Sin restricciones
      ↓
Muchas capacidades
      ↓
Mayor impacto potencial
```

Con Sandbox:

```text
Sandbox
   ↓
Capacidades limitadas
   ↓
Menor superficie de ataque
```

### 🧠 ¿Por qué importa?

Si el Renderer procesa contenido malicioso, limitar sus capacidades ayuda a evitar que esa vulnerabilidad se convierta directamente en acceso al sistema.

---

## 6️⃣ 🔒 CONTENT SECURITY POLICY

**Content Security Policy (CSP)** es una política de seguridad que controla qué recursos puede cargar una aplicación web.

Puede restringir, por ejemplo:

* Scripts.
* Estilos.
* Imágenes.
* Fuentes.
* Conexiones.
* Frames.

Un ejemplo conceptual:

```text
Content-Security-Policy:
  default-src 'self'
```

Significa que, por defecto, los recursos deben provenir del propio origen.

### 🛡️ ¿Qué ayuda a prevenir?

Principalmente reduce el impacto de ataques relacionados con la ejecución de contenido no autorizado, como ciertos escenarios de **XSS**.

> [!TIP]
> En Electron, CSP es especialmente importante porque el Renderer forma parte de una aplicación que puede tener acceso a capacidades del sistema.

---

## 7️⃣ 🌐 HTTPS

Cuando Electron se comunica con una API externa, utiliza las mismas consideraciones de seguridad de una aplicación web.

Por ejemplo:

```text
Electron
   ↓
HTTPS
   ↓
Backend
```

### 🔒 ¿Por qué HTTPS?

Protege la comunicación contra ataques como:

* Interceptación de datos.
* Modificación de solicitudes.
* Robo de credenciales durante el transporte.

### ❌ Evita

```text
http://api.example.com
```

cuando la aplicación maneja información sensible.

### ✅ Preferible

```text
https://api.example.com
```

---

## 8️⃣ 🔑 CREDENTIALS Y TOKENS

Una aplicación Electron puede trabajar con:

* JWT.
* API Keys.
* Tokens de sesión.
* Credenciales.
* Refresh Tokens.

El problema es que una aplicación de escritorio distribuye parte de su código al usuario.

Por eso:

> **Nunca debes considerar un secreto incluido dentro del código de Electron como realmente secreto.**

Por ejemplo:

```javascript
const API_KEY = 'MI_SUPER_SECRET_KEY'
```

❌ No es una forma segura de proteger una credencial.

Un usuario con suficiente acceso puede analizar los archivos de la aplicación.

### 🧠 Diferencia importante

```text
Código distribuido
        ↓
Usuario puede inspeccionarlo
        ↓
NO confiar en secretos hardcodeados
```

---

## 9️⃣ 🔐 SECURE STORAGE

Cuando una aplicación necesita guardar información sensible localmente, debe utilizar mecanismos apropiados de almacenamiento seguro.

Por ejemplo:

```text
Token
  ↓
Secure Storage
  ↓
Sistema operativo
```

Dependiendo de la plataforma, pueden utilizarse mecanismos seguros proporcionados por el sistema operativo.

### 📦 Ejemplos de información sensible

* Refresh Tokens.
* Credenciales.
* Claves privadas.
* Secretos de sesión.

### 🧠 Importante

No todo dato necesita Secure Storage.

```text
Preferencias simples
        ↓
Storage normal

Datos sensibles
        ↓
Secure Storage
```

---

## 🔟 ⚠️ EXPOSICIÓN DE APIs

Uno de los principios más importantes de seguridad en Electron es:

> **No expongas más APIs de las necesarias.**

### ❌ Demasiado acceso

```javascript
contextBridge.exposeInMainWorld('electronAPI', {
  fs,
  shell,
  ipcRenderer,
  process
})
```

Esto expone demasiadas capacidades.

### ✅ API específica

```javascript
contextBridge.exposeInMainWorld('electronAPI', {
  saveFile: (content) =>
    ipcRenderer.invoke('save-file', content)
})
```

Ahora Angular solamente conoce:

```javascript
window.electronAPI.saveFile(...)
```

### 🧠 Principio de mínimo privilegio

Cada parte de la aplicación debería tener **solamente los permisos que necesita**.

```text
Necesita leer archivo
        ↓
Exponer lectura

Necesita guardar archivo
        ↓
Exponer guardado

No necesita ejecutar comandos
        ↓
❌ No exponer ejecución
```

---

## 1️⃣1️⃣ 🛡️ BUENAS PRÁCTICAS

Al desarrollar aplicaciones Electron:

### 🔐 Renderer

* Mantener `nodeIntegration` deshabilitado.
* Utilizar Context Isolation.
* Evitar cargar contenido no confiable.
* Utilizar CSP.
* No almacenar secretos directamente en el código.

### 🌉 Preload

* Exponer APIs específicas.
* Utilizar `contextBridge`.
* Evitar exponer objetos completos de Node.js.
* Validar las operaciones disponibles.

### 🔄 IPC

* Utilizar canales específicos.
* Validar datos.
* No ejecutar comandos arbitrarios.
* Mantener operaciones sensibles en Main.

### ⚙️ Main Process

* Centralizar operaciones privilegiadas.
* Validar entradas provenientes del Renderer.
* Limitar el acceso al sistema operativo.

### 🌐 Comunicación externa

* Utilizar HTTPS.
* Validar respuestas del backend.
* Proteger credenciales y tokens.

---

# 🔐 ELECTRON + JWT

Aquí puedes conectar lo aprendido anteriormente sobre JWT con Electron:

```text
Usuario
   ↓
Angular
   ↓
Login
   ↓
Backend
   ↓
JWT
   ↓
Electron
   ↓
Secure Storage
```

El punto importante es que **la teoría de JWT no cambia por utilizar Electron**.

Lo que cambia es **cómo decides proteger y almacenar las credenciales dentro de una aplicación de escritorio**.

```text
📁 JSON-WEB-TOKENS
└── Teoría general de JWT

📁 ELECTRON
└── Seguridad de JWT dentro de Electron
```

> [!IMPORTANT]
> Electron combina una aplicación web con capacidades de escritorio. Por eso debes tratar el Renderer como una superficie potencialmente expuesta y mantener las capacidades privilegiadas detrás de **Preload + IPC + Main Process**.
