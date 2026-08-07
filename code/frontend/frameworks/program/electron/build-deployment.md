# 🚀 BUILD & DEPLOYMENT

## 📑 ÍNDICE

1. [🏗️ Build](#build)
2. [📦 Packaging](#packaging)
3. [📥 Installers](#installers)
4. [🪟 Windows](#windows)
5. [🍎 macOS](#macos)
6. [🐧 Linux](#linux)
7. [🎨 App Icons](#app-icons)
8. [📋 Application Metadata](#application-metadata)
9. [🔢 Versioning](#versioning)
10. [🔄 Auto Updates](#auto-updates)
11. [🐛 Debugging](#debugging)
    - [🖥️ Renderer](#renderer)
    - [⚙️ Main Process](#main-process)
    - [🛠️ DevTools](#devtools)
    - [⚡ Electron / Node.js](#electron--nodejs)
    - [🧠 Regla mental](#regla-mental)


## 1️⃣ 🏗️ BUILD

El **build** es el proceso de preparar tu aplicación Electron para que pueda ejecutarse como una aplicación de escritorio real.

Durante el desarrollo normalmente trabajas con:

```text
Código fuente
    ↓
Angular
    ↓
Electron
    ↓
Aplicación en desarrollo
```

Con el build:

```text
Código fuente
    ↓
Compilación
    ↓
Archivos optimizados
    ↓
Aplicación preparada para distribución
```

### 🧠 ¿Qué hace un build?

Puede incluir:

* Compilar Angular.
* Generar los archivos JavaScript/CSS/HTML.
* Preparar el proceso principal de Electron.
* Preparar el preload.
* Optimizar archivos.
* Preparar recursos.
* Generar una estructura lista para empaquetar.

> [!IMPORTANT]
> **Build ≠ Installer.** El build prepara la aplicación; el packaging y el installer se encargan de convertirla en algo distribuible.

---

# 2️⃣ 📦 PACKAGING

El **packaging** consiste en tomar la aplicación preparada y empaquetarla junto con Electron y los recursos necesarios.

Por ejemplo:

```text
Angular
   ↓
Build
   ↓
Electron
   ↓
Packaging
   ↓
Aplicación empaquetada
```

El resultado puede contener:

```text
app/
├── resources/
├── executable
├── package.json
└── archivos de la aplicación
```

### 🧠 ¿Por qué existe?

Porque el usuario final **no debería tener que instalar Node.js, Angular o Electron manualmente** para utilizar tu aplicación.

El paquete contiene lo necesario para ejecutarla.

---

# 3️⃣ 📥 INSTALLERS

Un **installer** es el programa que permite al usuario instalar tu aplicación en su computadora.

Ejemplos:

```text
MiAplicacion.exe
MiAplicacion.dmg
MiAplicacion.AppImage
```

Dependiendo del sistema operativo puedes generar diferentes formatos.

### 🪟 Windows

```text
.exe
.msi
```

### 🍎 macOS

```text
.dmg
.pkg
```

### 🐧 Linux

```text
.AppImage
.deb
.rpm
```

### 🧠 Diferencia

```text
Build
 ↓
Prepara la aplicación

Packaging
 ↓
Empaqueta la aplicación

Installer
 ↓
Permite instalarla
```

---

# 4️⃣ 🪟 WINDOWS

Electron permite distribuir aplicaciones para **Windows**.

Algunos formatos comunes:

| Formato  | Uso                                                         |
| -------- | ----------------------------------------------------------- |
| `.exe`   | Ejecutable / instalador                                     |
| `.msi`   | Instalador de Windows                                       |
| portable | Aplicación que puede ejecutarse sin instalación tradicional |

Una aplicación puede instalarse normalmente en:

```text
C:\Program Files\MiAplicacion
```

o en otra ubicación seleccionada por el usuario.

### 🧠 Aspectos importantes

Al distribuir para Windows debes considerar:

* Nombre de la aplicación.
* Icono.
* Versión.
* Instalador.
* Arquitectura.
* Firma del código.
* Actualizaciones.

---

# 5️⃣ 🍎 MACOS

Electron también permite generar aplicaciones para macOS.

Formatos habituales:

```text
.dmg
.pkg
.app
```

Una aplicación normalmente aparece como:

```text
MiAplicacion.app
```

### 🔐 Importante

macOS tiene mecanismos de seguridad como:

* **Code Signing**
* **Notarization**
* Gatekeeper

Por eso distribuir una aplicación para macOS requiere prestar especial atención a la firma y seguridad del software.

---

# 6️⃣ 🐧 LINUX

Electron también puede generar aplicaciones para diferentes distribuciones Linux.

Formatos comunes:

| Formato     | Ejemplo                      |
| ----------- | ---------------------------- |
| `.AppImage` | Aplicación portable          |
| `.deb`      | Debian / Ubuntu              |
| `.rpm`      | Fedora / Red Hat y derivados |

### 🧠 Ejemplo conceptual

```text
Linux
 ├── Ubuntu
 ├── Debian
 ├── Fedora
 └── otras distribuciones
```

No todos los formatos funcionan de la misma manera en todas las distribuciones, por lo que debes elegir el formato adecuado para tu público objetivo.

---

# 7️⃣ 🎨 APP ICONS

El **icono** identifica visualmente tu aplicación.

Por ejemplo:

```text
🖥️ Mi aplicación
      ↑
    icono
```

Debes proporcionar los recursos gráficos adecuados para cada plataforma.

### 🪟 Windows

Normalmente:

```text
.ico
```

### 🍎 macOS

Normalmente:

```text
.icns
```

### 🐧 Linux

Puede utilizar:

```text
.png
```

u otros formatos compatibles.

### 🧠 ¿Por qué importa?

El icono puede aparecer en:

* Instalador.
* Escritorio.
* Barra de tareas.
* Menú de aplicaciones.
* Dock.
* Archivos ejecutables.

---

# 8️⃣ 📋 APPLICATION METADATA

Los **metadatos** son información que describe tu aplicación.

Algunos ejemplos:

| Metadata      | ¿Qué representa?                |
| ------------- | ------------------------------- |
| `name`        | Nombre técnico del paquete      |
| `productName` | Nombre visible de la aplicación |
| `version`     | Versión actual                  |
| `description` | Descripción                     |
| `author`      | Autor                           |
| `license`     | Licencia                        |
| `homepage`    | Página del proyecto             |
| `repository`  | Repositorio                     |

Por ejemplo:

```json
{
  "name": "my-electron-app",
  "productName": "My Electron App",
  "version": "1.0.0",
  "description": "Desktop application",
  "author": "AloBuuls"
}
```

### 🧠 Importante

No todos los metadatos tienen exactamente el mismo propósito ni todos son obligatorios. Algunos pertenecen al ecosistema de Node/npm y otros son utilizados por las herramientas de packaging.

---

# 9️⃣ 🔢 VERSIONING

El **versionado** permite identificar qué versión de la aplicación está instalada.

Normalmente se utiliza **Semantic Versioning (SemVer)**:

```text
MAJOR.MINOR.PATCH
```

Ejemplo:

```text
1.4.2
```

Significa:

```text
1 → MAJOR
4 → MINOR
2 → PATCH
```

### 📌 MAJOR

Cambios importantes o incompatibles.

```text
1.4.2
 ↓
2.0.0
```

### 📌 MINOR

Nuevas funcionalidades compatibles.

```text
1.4.2
 ↓
1.5.0
```

### 📌 PATCH

Correcciones de errores.

```text
1.4.2
 ↓
1.4.3
```

### 🧠 ¿Por qué es importante en Electron?

Porque el versionado permite saber:

```text
¿Qué versión tengo?
        ↓
¿Qué versión está disponible?
        ↓
¿Necesito actualizar?
```

Esto es especialmente importante cuando implementas **actualizaciones automáticas**.

---

# 🔄 AUTO UPDATES

Las **actualizaciones automáticas** permiten que una aplicación Electron descargue e instale nuevas versiones sin que el usuario tenga que descargar manualmente el programa completo.

Flujo conceptual:

```text
Aplicación instalada
        ↓
Busca actualización
        ↓
¿Existe una nueva versión?
        ↓
      Sí
        ↓
Descarga
        ↓
Instala
        ↓
Reinicia / actualiza
```

Por ejemplo:

```text
Versión instalada
1.2.0

Servidor
1.3.0
        ↓
Nueva versión disponible
```

La aplicación puede detectar que existe `1.3.0` y comenzar el proceso de actualización.

### 🧠 ¿Qué necesitas considerar?

* Versionado correcto.
* Servidor o proveedor de distribución.
* Firma de la aplicación.
* Seguridad.
* Compatibilidad entre versiones.
* Qué ocurre si la actualización falla.
* Reinicio de la aplicación.

> [!IMPORTANT]
> Las actualizaciones automáticas no son simplemente "descargar otro `.exe`". Hay todo un flujo de distribución, verificación y reemplazo de la aplicación.

---

# 🐛 DEBUGGING

El debugging en Electron tiene una particularidad importante:

**no tienes un único entorno de ejecución.**

Una aplicación Electron normalmente tiene diferentes procesos:

```text
🖥️ Renderer
    ↓
🌉 Preload
    ↓
⚙️ Main Process
    ↓
🟢 Node.js
```

Por eso debes saber **qué proceso estás depurando**.

---

## 🖥️ Renderer

El Renderer contiene normalmente la interfaz de usuario.

Si utilizas Angular:

```text
Angular
   ↓
Renderer
```

Puedes utilizar:

```text
Chrome DevTools
```

para revisar:

* HTML.
* CSS.
* JavaScript.
* Network.
* Console.
* Storage.
* Performance.

Por ejemplo:

```typescript
console.log('Renderer funcionando');
```

aparecerá en la consola del Renderer.

---

## ⚙️ Main Process

El Main Process controla funcionalidades de Electron y del sistema operativo.

Por ejemplo:

```typescript
console.log('Main process funcionando');
```

Este `console.log()` pertenece al proceso principal, no al Renderer.

Aquí puedes investigar problemas relacionados con:

* `BrowserWindow`.
* IPC.
* ventanas.
* archivos.
* procesos.
* APIs de Node.js.
* configuración de Electron.

---

## 🛠️ DevTools

Electron permite utilizar las herramientas de desarrollo de Chromium.

Puedes abrirlas para inspeccionar el Renderer y utilizar herramientas como:

```text
Elements
Console
Network
Sources
Application
Performance
Security
```

Por ejemplo:

```text
Angular
   ↓
Renderer
   ↓
DevTools
```

Esto es especialmente útil para detectar errores de frontend.

---

## ⚡ Electron / Node.js

También puedes tener errores que **no pertenecen a Angular**.

Por ejemplo:

```text
Angular
   ↓
funciona correctamente

Preload
   ↓
❌ Error

IPC
   ↓
❌ Error

Main
   ↓
❌ Error
```

En estos casos debes revisar específicamente:

* Logs del Main Process.
* Logs del Preload.
* IPC.
* APIs de Node.js.
* Electron.
* Sistema operativo.

### 🧠 Regla mental

Cuando algo falla, primero pregunta:

```text
¿Dónde está ocurriendo el error?
        ↓
┌───────────────────┐
│ Renderer          │ → Angular / UI
├───────────────────┤
│ Preload           │ → APIs expuestas
├───────────────────┤
│ IPC               │ → Comunicación
├───────────────────┤
│ Main              │ → Electron / Node
└───────────────────┘
```

> [!TIP]
> Esta separación es fundamental para desarrollar y depurar Electron. Un error que parece "de Angular" puede realmente estar ocurriendo en Preload, IPC o Main Process.
