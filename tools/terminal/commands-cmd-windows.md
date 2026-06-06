
---

# 💻 COMANDOS CMD (WINDOWS)

🧠 CMD = consola de Windows para administración del sistema.

---

# 👤 GESTIÓN DE USUARIOS

| Comando | Uso |
|----------|-----|
| `net user` | Ver usuarios |
| `net user "Usuario" /add` | Crear usuario |
| `net user "Usuario" *` | Cambiar contraseña |
| `net user "Usuario"` | Ver información de usuario |

---

# 🛡️ ADMINISTRADORES Y GRUPOS

| Comando | Uso |
|----------|-----|
| `net localgroup` | Ver grupos locales |
| `net localgroup Administradores "Usuario" /add` | Hacer usuario administrador |

---

# 💾 DISCOS Y REPARACIÓN

| Comando | Uso |
|----------|-----|
| `chkdsk` | Analizar disco |
| `chkdsk d:` | Analizar unidad |
| `chkdsk d: /f` | Reparar errores |

📌 `/f` corrige errores automáticamente.

---

# 🔌 APAGADO Y REINICIO

| Comando | Acción |
|----------|--------|
| `shutdown /s` | Apagar equipo |
| `shutdown /r` | Reiniciar equipo |
| `shutdown /l` | Cerrar sesión |
| `shutdown /h` | Hibernar |
| `shutdown -i` | Interfaz gráfica de apagado |
| `shutdown -a` | Cancelar apagado |

---

# 🌐 RED

| Comando | Uso |
|----------|-----|
| `ipconfig` | Ver IP |
| `ipconfig /all` | Configuración completa |
| `ipconfig /renew` | Renovar IP |
| `ipconfig /flushdns` | Limpiar DNS |

---

# 🚗 CONTROLADORES

| Comando | Uso |
|----------|-----|
| `driverquery` | Ver drivers instalados |
| `driverquery > drivers.txt` | Exportar lista de drivers |

---

# 🧹 CONSOLA

| Comando | Uso |
|----------|-----|
| `cls` | Limpiar pantalla CMD |

---

# 📂 ARCHIVOS Y CARPETAS

| Comando | Uso |
|----------|-----|
| `dir` | Ver contenido de carpeta |
| `cd carpeta` | Cambiar directorio |
| `tree` | Árbol de carpetas |

---

# 🖥️ SISTEMA

| Comando | Uso |
|----------|-----|
| `systeminfo` | Información completa del sistema |
| `pwd` | Ruta actual (PowerShell) |

---

# ⚙️ PROCESOS

| Comando | Uso |
|----------|-----|
| `tasklist` | Ver procesos activos |
| `taskkill /f /im chrome.exe` | Cerrar proceso |

---

# 🔧 REPARACIÓN DE WINDOWS

| Comando | Uso |
|----------|-----|
| `sfc /scannow` | Reparar archivos del sistema |
| `DISM /Online /Cleanup-Image /RestoreHealth` | Reparación avanzada del sistema |

---

# ⭐ COMANDOS MÁS UTILIZADOS (RESUMEN)

| Comando | Función |
|----------|--------|
| `net user` | Usuarios |
| `net localgroup Administradores "Usuario" /add` | Hacer admin |
| `chkdsk c: /f` | Reparar disco |
| `shutdown /r` | Reiniciar |
| `shutdown /s` | Apagar |
| `ipconfig` | Ver IP |
| `driverquery` | Ver drivers |
| `cls` | Limpiar consola |
| `sfc /scannow` | Reparar sistema |
| `DISM /Online /Cleanup-Image /RestoreHealth` | Reparación avanzada |

---

# 🧠 RESUMEN RÁPIDO

| Categoría | Qué hace |
|------------|----------|
| 👤 Usuarios | Crear y gestionar cuentas |
| 💾 Discos | Analizar y reparar errores |
| 🌐 Red | Configuración de IP y DNS |
| ⚙️ Sistema | Información del sistema |
| ⚡ Procesos | Control de programas |
| 📂 Archivos | Navegar carpetas |
| 🔧 Reparación | Arreglar Windows |

---