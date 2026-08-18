# 📄 Commands 🛠️💻

> 💡 **¿Qué herramientas puedo usar para probar y trabajar con WebSockets?**
>
> Estos comandos permiten desarrollar, probar, depurar y monitorear aplicaciones WebSocket.

---

## 📚 Índice

- [📄 Commands 🛠️💻](#-commands-️)
  - [📚 Índice](#-índice)
- [1️⃣ Browser DevTools 🌐](#1️⃣-browser-devtools-)
- [2️⃣ Node Commands 🟢](#2️⃣-node-commands-)
- [3️⃣ Testing Tools 🧪](#3️⃣-testing-tools-)
    - [📦 Instalación](#-instalación)
    - [🔗 Conectar](#-conectar)
    - [📤 Enviar mensaje](#-enviar-mensaje)
- [4️⃣ Server Commands 🖥️](#4️⃣-server-commands-️)
- [5️⃣ Debug Commands 🐛](#5️⃣-debug-commands-)
  - [📋 Tabla de comandos](#-tabla-de-comandos)
- [6️⃣ Package Commands 📦](#6️⃣-package-commands-)
    - [WebSocket](#websocket)
    - [Socket.IO](#socketio)
    - [Socket.IO Client](#socketio-client)
- [🔍 Debugging Checklist](#-debugging-checklist)
- [🧠 Conceptos principales](#-conceptos-principales)

---

# 1️⃣ Browser DevTools 🌐

En **Chrome**:

```text
F12
```

Luego:

```text
Network

   ↓

WS
```

Permite ver:

```text
Frames

Messages

Connection Status

Headers
```

> 💡 **Tip:** Desde **Network → WS** puedes revisar las conexiones WebSocket.

---

# 2️⃣ Node Commands 🟢

Los paquetes necesarios para trabajar con WebSockets pueden instalarse mediante `npm`.

---

# 3️⃣ Testing Tools 🧪

Una herramienta para probar conexiones WebSocket es:

```text
wscat
```

### 📦 Instalación

```bash
npm install -g wscat
```

### 🔗 Conectar

```bash
wscat -c ws://localhost:3000
```

### 📤 Enviar mensaje

```text
Hello Server
```

> 💡 **Tip:** `wscat` permite probar una conexión WebSocket directamente desde la terminal.

---

# 4️⃣ Server Commands 🖥️

Comandos útiles para revisar puertos, procesos, logs y contenedores.

---

# 5️⃣ Debug Commands 🐛

## 📋 Tabla de comandos

| 🏷️ Categoría  | 💻 Comando                     | 🎯 Uso                          |
| -------------- | ------------------------------ | ------------------------------- |
| 🌐 DevTools    | `F12`                          | Abrir Chrome DevTools           |
| 🔌 Network     | `Network → WS`                 | Ver conexiones WebSocket        |
| 📦 Node        | `npm install ws`               | Instalar WebSocket `ws`         |
| 📦 Socket.IO   | `npm install socket.io`        | Instalar Socket.IO              |
| 📦 Client      | `npm install socket.io-client` | Instalar cliente Socket.IO      |
| 🧪 wscat       | `npm install -g wscat`         | Instalar herramienta de testing |
| 🔗 wscat       | `wscat -c ws://localhost:3000` | Conectarse a un WebSocket       |
| 🌐 Ports       | `netstat -tulpn`               | Ver puertos                     |
| ⚙️ Processes   | `ps aux`                       | Ver procesos                    |
| 🐳 Docker Logs | `docker logs container_name`   | Ver logs de un contenedor       |
| 🐳 Docker      | `docker ps`                    | Ver contenedores activos        |
| 🔄 Docker      | `docker restart container`     | Reiniciar un contenedor         |

---

# 6️⃣ Package Commands 📦

### WebSocket

```bash
npm install ws
```

### Socket.IO

```bash
npm install socket.io
```

### Socket.IO Client

```bash
npm install socket.io-client
```

---

# 🔍 Debugging Checklist

```text
✓ Is server running?

✓ Is URL correct?

✓ Is using ws/wss?

✓ Is port open?

✓ Is authentication valid?

✓ Is connection accepted?
```

> ⚠️ **Tip:** Esta lista permite revisar rápidamente los puntos principales de una conexión WebSocket.

---

# 🧠 Conceptos principales

| Concepto          | Significado                       |
| ----------------- | --------------------------------- |
| 🐛 **Debugging**  | Identificar problemas             |
| 🧪 **Testing**    | Probar la conexión                |
| 🌐 **DevTools**   | Herramientas del navegador        |
| 💻 **CLI Tools**  | Herramientas de línea de comandos |
| 📊 **Monitoring** | Supervisar el funcionamiento      |
