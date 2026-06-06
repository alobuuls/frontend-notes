# 📘 💻 TERMINAL COMMANDS FOR POWERSHELL AND BASH — GUÍA COMPLETA

## 🟢 ARCHIVOS Y DIRECTORIOS (BÁSICOS)

| Comando | Qué hace | Ejemplo |
|----------|----------|----------|
| `ls` | Lista archivos | `ls` |
| `ls -l` | Lista detallada | `ls -l` |
| `ls -a` | Muestra archivos ocultos | `ls -a` |
| `ls -la` | Detallado + ocultos | `ls -la` |
| `cd` | Cambiar carpeta | `cd src` |
| `pwd` | Mostrar ruta actual | `pwd` |
| `mkdir` | Crear carpeta | `mkdir app` |
| `touch` | Crear archivo | `touch index.js` |
| `rm` | Eliminar archivo | `rm file.txt` |
| `rm -r` | Eliminar carpeta | `rm -r dist` |
| `rm -rf` | Forzar eliminación | `rm -rf node_modules` |
| `cp` | Copiar archivo | `cp a.txt b.txt` |
| `mv` | Mover o renombrar | `mv a.txt src/` |

---

## 🧠 COMANDOS MÁS USADOS

| Comando | Qué hace | Ejemplo |
|----------|----------|----------|
| `cp file route` | Copia archivo a una ruta | `cp app.js src/` |
| `code file` | Abre archivo en VS Code | `code index.js` |
| `nano file` | Editor de texto en terminal | `nano index.js` |
| `touch file` | Crea archivo vacío | `touch app.ts` |
| `cd` | Cambia directorio | `cd ..` |
| `mkdir name` | Crea carpeta | `mkdir components` |
| `chmod` | Cambia permisos | `chmod 755 file.sh` |
| `chown` | Cambia propietario | `chown user file.txt` |
| `rm` | Borra archivos | `rm test.js` |
| `ls` | Lista archivos | `ls` |
| `ls -l` | Lista detallada | `ls -l` |
| `ls -la` | Lista completa | `ls -la` |

---

## 🔴 FLAGS IMPORTANTES

| Flag | Qué hace | Ejemplo |
|--------|----------|----------|
| `-r` | Recursivo (carpetas) | `rm -r dist` |
| `-f` | Forzar acción | `rm -rf node_modules` |
| `-l` | Lista detallada | `ls -l` |
| `-a` | Incluye ocultos | `ls -a` |
| `-la` | Combinación de `-l` y `-a` | `ls -la` |
| `-v` | Verbose (más información) | `cp -v a b` |
| `-i` | Confirma antes de borrar | `rm -i file.txt` |
| `-h` | Tamaños legibles | `ls -lh` |

---

## 🟡 PROCESOS Y SISTEMA

| Comando | Qué hace | Ejemplo |
|----------|----------|----------|
| `ps` | Ver procesos activos | `ps` |
| `top` | Procesos en tiempo real | `top` |
| `htop` | Versión avanzada de top | `htop` |
| `kill` | Finalizar proceso | `kill 1234` |
| `kill -9` | Forzar cierre de proceso | `kill -9 1234` |
| `clear` | Limpiar terminal | `clear` |
| `history` | Historial de comandos | `history` |
| `exit` | Salir de la terminal | `exit` |

---

## 🔵 ARCHIVOS Y TEXTO

| Comando | Qué hace | Ejemplo |
|----------|----------|----------|
| `cat` | Mostrar contenido | `cat file.txt` |
| `less` | Ver archivo por páginas | `less file.txt` |
| `head` | Primeras líneas | `head file.txt` |
| `tail` | Últimas líneas | `tail file.txt` |
| `grep` | Buscar texto | `grep "error" log.txt` |
| `echo` | Imprimir texto | `echo "hola"` |
| `>` | Sobrescribir archivo | `echo hi > file.txt` |
| `>>` | Agregar contenido | `echo hi >> file.txt` |

---

## 🟣 RED / INTERNET

| Comando | Qué hace | Ejemplo |
|----------|----------|----------|
| `ping` | Probar conexión | `ping google.com` |
| `curl` | Peticiones HTTP | `curl api.com` |
| `wget` | Descargar archivos | `wget url` |
| `ifconfig` | Información de red | `ifconfig` |
| `ip a` | Mostrar IP y red | `ip a` |

---

## 🟤 PERMISOS (MUY IMPORTANTE)

| Comando | Qué hace | Ejemplo |
|----------|----------|----------|
| `chmod` | Cambia permisos | `chmod 755 file` |
| `chown` | Cambia propietario | `chown user file` |

### 📌 Permisos comunes

| Valor | Significado |
|---------|-------------|
| `755` | Lectura + escritura para dueño, lectura y ejecución para otros |
| `644` | Lectura para todos, escritura solo para dueño |
| `777` | Acceso total para todos (peligroso) |

---

## 🟢 ATAJOS DE TERMINAL

| Comando | Qué hace |
|----------|----------|
| `Ctrl + C` | Detener proceso |
| `Ctrl + Z` | Pausar proceso |
| `Ctrl + L` | Limpiar pantalla |
| `Tab` | Autocompletar |
| `↑ ↓` | Navegar historial |

---

## 🔵 COMANDOS AVANZADOS

| Comando | Qué hace | Ejemplo |
|----------|----------|----------|
| `find` | Buscar archivos | `find . -name "*.js"` |
| `which` | Ruta de un comando | `which node` |
| `alias` | Crear atajos | `alias gs="git status"` |
| `xargs` | Convierte salida en entrada | `find . -name "*.js" \| xargs rm` |
| `chmod +x` | Hacer ejecutable | `chmod +x script.sh` |

---

## 🔴 PIPELINES Y OPERADORES

| Símbolo | Qué hace | Ejemplo |
|----------|----------|----------|
| `\|` | Conecta comandos | `ls -la \| grep ".js"` |
| `&&` | Ejecuta el segundo si el primero funciona | `npm install && npm run dev` |
| `;` | Ejecuta ambos siempre | `echo a ; echo b` |

---

## 🧠 EJEMPLOS COMBINADOS

| Comando | Resultado |
|----------|-----------|
| `mkdir app && cd app` | Crear carpeta y entrar |
| `touch index.js && code index.js` | Crear y abrir archivo |
| `rm -rf node_modules && npm install` | Reinstalar dependencias |
| `ls -la \| grep ".js"` | Filtrar archivos JS |
| `find . -name "*.ts"` | Buscar archivos TS |
| `cat package.json \| grep "scripts"` | Buscar scripts |

---

## ⚡ RESUMEN

| Área | Lo que puedes hacer |
|--------|--------------------|
| Archivos | ✅ Crear, mover, copiar, borrar |
| Carpetas | ✅ Navegar y organizar |
| Procesos | ✅ Ver y finalizar |
| Red | ✅ Diagnosticar conexiones |
| Permisos | ✅ Controlar acceso |
| Automatización | ✅ Encadenar comandos |
| Desarrollo | ✅ Ejecutar proyectos |

---

## 🧠 IDEA CLAVE

| Comando | Recuerda |
|----------|----------|
| `ls` | Ver |
| `cd` | Moverse |
| `pwd` | Saber dónde estás |
| `touch` | Crear archivo |
| `mkdir` | Crear carpeta |
| `cp` | Copiar |
| `mv` | Mover o renombrar |
| `rm` | Borrar |
| `chmod` | Permisos |
| `grep` | Buscar |
| `find` | Encontrar |
| `\|` | Conectar comandos |
| `&&` | Ejecutar si el anterior funciona |