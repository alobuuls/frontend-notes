# 🅰️ ELECTRON + ANGULAR

## 📑 ÍNDICE — ELECTRON + ANGULAR

- [🅰️ ELECTRON + ANGULAR](#️-electron--angular)
  - [📑 ÍNDICE — ELECTRON + ANGULAR](#-índice--electron--angular)
  - [1️⃣ 🧩 ANGULAR COMO RENDERER](#1️⃣--angular-como-renderer)
    - [🧠 Idea clave](#-idea-clave)
- [2️⃣ 🛠️ ANGULAR SERVICES](#2️⃣-️-angular-services)
    - [🧠 Idea clave](#-idea-clave-1)
- [3️⃣ 🌉 ANGULAR + PRELOAD](#3️⃣--angular--preload)
    - [🧠 Idea clave](#-idea-clave-2)
- [4️⃣ 🔄 ANGULAR + IPC](#4️⃣--angular--ipc)
    - [📌 `invoke()`](#-invoke)
    - [📌 `handle()`](#-handle)
    - [🧠 Idea clave](#-idea-clave-3)
- [5️⃣ 🌐 HTTPCLIENT](#5️⃣--httpclient)
    - [📌 Ejemplo](#-ejemplo)
    - [🧠 Importante](#-importante)
- [6️⃣ 🔌 REST APIs](#6️⃣--rest-apis)
    - [🧠 Idea clave](#-idea-clave-4)
- [7️⃣ 📖 SWAGGER](#7️⃣--swagger)
    - [🧠 Importante](#-importante-1)
- [8️⃣ 🔐 JWT](#8️⃣--jwt)
    - [🧠 En Electron](#-en-electron)
- [9️⃣ 🛡️ HTTP INTERCEPTOR](#9️⃣-️-http-interceptor)
    - [🧠 Idea clave](#-idea-clave-5)
- [🔟 📡 RXJS](#--rxjs)
    - [🧠 Importante](#-importante-2)
- [1️⃣1️⃣ 🧩 ARQUITECTURA ANGULAR + ELECTRON](#1️⃣1️⃣--arquitectura-angular--electron)
    - [🎯 La idea fundamental](#-la-idea-fundamental)

## 1️⃣ 🧩 ANGULAR COMO RENDERER

Cuando utilizas Angular con Electron, **Angular funciona principalmente como la interfaz gráfica** de la aplicación.

Electron se encarga de ejecutar esa interfaz dentro de un `BrowserWindow`, mientras que Angular controla:

* Componentes.
* Templates.
* Routing.
* Formularios.
* Estado de la interfaz.
* Servicios.
* Comunicación con APIs.

La relación básica es:

```text
Electron
   ↓
BrowserWindow
   ↓
Angular
   ↓
Interfaz de usuario
```

### 🧠 Idea clave

Angular **no reemplaza a Electron**.

Angular → construye la UI.
Electron → proporciona el entorno desktop y acceso controlado a funcionalidades nativas.

---

# 2️⃣ 🛠️ ANGULAR SERVICES

Los **Services de Angular** permiten organizar la lógica de la aplicación y evitar colocar toda la lógica dentro de los componentes.

En Electron pueden utilizarse para centralizar:

* Comunicación con APIs REST.
* Gestión de autenticación.
* Estado de la aplicación.
* Comunicación con APIs expuestas por `preload`.
* Lógica relacionada con archivos o funcionalidades desktop.

Por ejemplo:

```text
Angular Component
        ↓
Angular Service
        ↓
Preload API
        ↓
IPC
        ↓
Electron Main
```

### 🧠 Idea clave

El componente debería encargarse principalmente de la **interfaz**, mientras que los Services pueden encargarse de la lógica y comunicación.

---

# 3️⃣ 🌉 ANGULAR + PRELOAD

Angular se ejecuta en el **Renderer Process**, por lo que no debería acceder directamente a APIs de Node.js o Electron.

El `preload` funciona como un **puente seguro** entre Angular y Electron.

```text
Angular
   ↓
window.api
   ↓
Preload
   ↓
IPC
   ↓
Main Process
```

Por ejemplo, el `preload` puede exponer una API:

```ts
contextBridge.exposeInMainWorld('api', {
  getFiles: () => ipcRenderer.invoke('get-files')
});
```

Angular podría utilizar:

```ts
window.api.getFiles();
```

### 🧠 Idea clave

Angular **no necesita conocer directamente cómo funciona Electron internamente**.

Solo utiliza las APIs que el `preload` decide exponer.

---

# 4️⃣ 🔄 ANGULAR + IPC

**IPC (Inter-Process Communication)** permite que Angular y Electron intercambien información.

La comunicación normalmente sigue este flujo:

```text
Angular
   ↓
Preload
   ↓
ipcRenderer
   ↓
IPC
   ↓
ipcMain
   ↓
Main Process
```

Por ejemplo:

```text
Angular
   ↓
"Obtener archivos"
   ↓
Preload
   ↓
ipcRenderer.invoke()
   ↓
ipcMain.handle()
   ↓
Node.js fs
   ↓
Sistema operativo
```

### 📌 `invoke()`

Se utiliza cuando Angular necesita solicitar información o ejecutar una operación y **esperar una respuesta**.

### 📌 `handle()`

Se utiliza en el proceso principal para recibir y procesar esa solicitud.

### 🧠 Idea clave

Angular no debería comunicarse directamente con `ipcMain`.

La comunicación segura normalmente pasa por:

```text
Angular → Preload → IPC → Main
```

---

# 5️⃣ 🌐 HTTPCLIENT

Si tu aplicación Angular necesita comunicarse con un backend, puedes utilizar `HttpClient` de Angular.

El flujo sería prácticamente el mismo que en una aplicación web:

```text
Angular
   ↓
HttpClient
   ↓
HTTP
   ↓
Backend
   ↓
API REST
```

Electron **no elimina el uso de HTTP**.

Una aplicación Electron puede consumir APIs exactamente como cualquier aplicación Angular.

### 📌 Ejemplo

```ts
this.http.get('/api/users');
```

También puedes consumir una API remota:

```ts
this.http.get('https://api.example.com/users');
```

### 🧠 Importante

Hay que distinguir entre:

**Comunicación con backend**

```text
Angular → HttpClient → API
```

y

**Comunicación con el sistema operativo**

```text
Angular → Preload → IPC → Main → Node.js → OS
```

Son mecanismos diferentes.

---

# 6️⃣ 🔌 REST APIs

Electron + Angular puede utilizar APIs REST para comunicarse con servidores externos.

Por ejemplo:

```text
Electron + Angular
        ↓
     HttpClient
        ↓
      REST API
        ↓
      Backend
        ↓
      Database
```

Puedes utilizar métodos HTTP como:

| Método   | Uso                     |
| -------- | ----------------------- |
| `GET`    | Obtener información     |
| `POST`   | Crear información       |
| `PUT`    | Actualizar información  |
| `PATCH`  | Actualizar parcialmente |
| `DELETE` | Eliminar información    |

### 🧠 Idea clave

Electron no cambia los fundamentos de REST.

Lo que cambia principalmente es que tu frontend ahora está ejecutándose dentro de una **aplicación desktop**.

---

# 7️⃣ 📖 SWAGGER

Swagger/OpenAPI puede utilizarse para **documentar y explorar el backend** que consume tu aplicación Electron + Angular.

El flujo puede ser:

```text
Swagger / OpenAPI
       ↓
Documentación de API
       ↓
Angular
       ↓
HttpClient
       ↓
Backend
```

Puedes utilizar Swagger para conocer:

* Endpoints.
* Parámetros.
* Request Body.
* Headers.
* Respuestas.
* Status Codes.
* Autenticación.

### 🧠 Importante

No necesitas volver a estudiar Swagger desde cero.

Aquí solamente debes aprender **cómo utilizar una API documentada con Swagger desde tu aplicación Electron + Angular**.

---

# 8️⃣ 🔐 JWT

Si el backend utiliza JWT, Angular puede encargarse del flujo de autenticación.

Por ejemplo:

```text
Angular
   ↓
POST /login
   ↓
Backend
   ↓
JWT
   ↓
Angular
   ↓
Requests autenticadas
```

El token puede utilizarse posteriormente para enviar:

```http
Authorization: Bearer <token>
```

### 🧠 En Electron

El concepto de JWT **no cambia por utilizar Electron**.

Lo importante es decidir correctamente:

* dónde almacenar el token;
* cómo enviarlo;
* cómo renovarlo;
* cómo cerrar sesión;
* cómo proteger información sensible.

No necesitas duplicar toda la teoría de JWT aquí.

---

# 9️⃣ 🛡️ HTTP INTERCEPTOR

Un `HttpInterceptor` de Angular permite interceptar las peticiones HTTP antes de enviarlas.

Esto resulta especialmente útil para autenticación.

Por ejemplo:

```text
Angular
   ↓
HttpInterceptor
   ↓
Agregar JWT
   ↓
HttpClient
   ↓
Backend
```

El interceptor puede agregar automáticamente:

```http
Authorization: Bearer <token>
```

También puede utilizarse para:

* Manejar errores.
* Detectar `401`.
* Renovar tokens.
* Agregar headers.
* Centralizar lógica HTTP.

### 🧠 Idea clave

El interceptor pertenece a **Angular**.

Electron no reemplaza ni modifica el funcionamiento fundamental de los interceptors.

---

# 🔟 📡 RXJS

Angular utiliza RxJS para trabajar con operaciones asíncronas y streams de datos.

En Electron + Angular puedes utilizar RxJS para manejar:

* Requests HTTP.
* Eventos.
* Estados.
* Datos asíncronos.
* Comunicación entre componentes.
* Respuestas de APIs.

Por ejemplo:

```text
HttpClient
   ↓
Observable
   ↓
RxJS
   ↓
Angular Component
```

También puede combinarse con IPC.

Conceptualmente:

```text
Electron IPC
      ↓
Angular Service
      ↓
Observable
      ↓
Component
```

### 🧠 Importante

RxJS sigue siendo **RxJS de Angular**.

No necesitas volver a estudiar su teoría aquí; solo aprender cómo integrarlo con Electron cuando sea necesario.

---

# 1️⃣1️⃣ 🧩 ARQUITECTURA ANGULAR + ELECTRON

Esta es la integración completa que debes ser capaz de visualizar:

```text
                    🖥️ ELECTRON
                         │
              ┌──────────┴──────────┐
              │                     │
        Main Process            Renderer
              │                     │
         Node.js APIs            Angular
              │                     │
        Operating System       Components
                                    │
                                Services
                                    │
                              HttpClient
                                    │
                            ┌───────┴───────┐
                            │               │
                         REST API         Preload
                            │               │
                         Backend           IPC
                            │               │
                         Database       Main Process
```

Un flujo completo podría verse así:

```text
👤 Usuario
   ↓
🅰️ Angular Component
   ↓
🛠️ Angular Service
   ↓
   ├──────────────→ 🌐 HttpClient → REST API → Backend
   │
   └──────────────→ 🌉 Preload → 🔄 IPC → ⚙️ Main
                                           ↓
                                        Node.js
                                           ↓
                                   🖥️ Operating System
```

### 🎯 La idea fundamental

En una aplicación **Electron + Angular** existen dos grandes tipos de comunicación:

**🌐 Comunicación con servidores**

```text
Angular
   ↓
HttpClient
   ↓
REST API
   ↓
Backend
```

**🖥️ Comunicación con el sistema operativo**

```text
Angular
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

Y el objetivo de la arquitectura es mantener estas responsabilidades separadas y comunicarlas de forma controlada.

> [!IMPORTANT]
> **Angular = interfaz y lógica del frontend.**
> **Preload = puente seguro.**
> **IPC = comunicación entre procesos.**
> **Main Process = lógica privilegiada de Electron.**
> **Node.js = acceso a APIs del sistema.**
> **HTTPClient = comunicación con APIs externas.**
