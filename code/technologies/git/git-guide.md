# 📘 GIT — GUÍA COMPLETA DE USO (DESDE CERO)

> [!NOTE]
> Esta guía está pensada para alguien que nunca ha usado Git y quiere aprender el flujo real de trabajo utilizado en proyectos personales y profesionales.

---

# 🎯 OBJETIVO

Al terminar esta guía sabrás:

| ✔ Aprenderás |
|-------------|
| Crear repositorios |
| Conectar Git con GitHub |
| Usar SSH y HTTPS |
| Crear ramas |
| Guardar cambios |
| Subir cambios |
| Descargar cambios |
| Resolver situaciones comunes |
| Trabajar con el flujo más utilizado en la industria |

---

# 📦 PARTE 1 — INSTALAR GIT

## 🔍 Verificar instalación

| Acción | Comando |
|----------|----------|
| Ver versión de Git | `git --version` |

### 💡 Ejemplo

```bash
git version 2.50.1
```

---

## 👤 Configurar identidad

> [!IMPORTANT]
> Git necesita saber quién eres.

| Configuración | Comando |
|-------------|----------|
| Nombre | `git config --global user.name "Tu Nombre"` |
| Email | `git config --global user.email "correo@email.com"` |
| Ver configuración | `git config --list` |

---

# 📦 PARTE 2 — ENTENDER EL FLUJO DE GIT

> [!IMPORTANT]
> Todo Git gira alrededor de este flujo.

```text
Archivos
   ↓
git add
   ↓
Staging Area
   ↓
git commit
   ↓
Repositorio Local
   ↓
git push
   ↓
GitHub
```

> [!TIP]
> Debes memorizar este flujo. Es la base de todo Git.

---

# 📦 PARTE 3 — CREAR UN REPOSITORIO NUEVO

## 🚀 Crear proyecto

| Acción | Comando |
|----------|----------|
| Crear carpeta | `mkdir mi-proyecto` |
| Entrar a la carpeta | `cd mi-proyecto` |
| Inicializar Git | `git init` |

---

### 📂 Se crea automáticamente

```text
.git/
```

---

## 🔍 Verificar estado

| Acción | Comando |
|----------|----------|
| Ver estado actual | `git status` |

---

# 📦 PARTE 4 — GUARDAR CAMBIOS

## 💾 Flujo de guardado

| Acción | Comando |
|----------|----------|
| Ver cambios | `git status` |
| Agregar archivo específico | `git add archivo.js` |
| Agregar todos los cambios | `git add .` |
| Crear commit | `git commit -m "primer commit"` |
| Ver historial | `git log` |
| Historial resumido | `git log --oneline` |

---

## 🧠 Flujo mental

```text
Modificar archivo
       ↓
git add
       ↓
git commit
       ↓
Historial Git
```

---

# 📦 PARTE 5 — CREAR REPOSITORIO EN GITHUB

## 🌐 En GitHub

1. Crear **New Repository**

2. Completar:

| Campo | Valor |
|---------|---------|
| Nombre | Nombre del proyecto |
| Descripción | Opcional |
| Visibilidad | Public o Private |

3. Crear repositorio

> [!TIP]
> Una vez creado el repositorio en GitHub, el siguiente paso normalmente será conectar tu repositorio local con el remoto mediante `git remote add origin`.

# 📦 PARTE 6 — CONECTAR GIT CON GITHUB (HTTPS)

## 🌐 URL HTTPS

GitHub mostrará algo parecido a:

```text
https://github.com/usuario/proyecto.git
```

---

## 🔗 Agregar Remote

| Acción | Comando |
|----------|----------|
| Agregar repositorio remoto | `git remote add origin https://github.com/usuario/proyecto.git` |

---

## 🔍 Verificar conexión

| Acción | Comando |
|----------|----------|
| Ver remotes configurados | `git remote -v` |

### 💡 Resultado

```text
origin https://github.com/usuario/proyecto.git
```

> [!NOTE]
> `origin` es simplemente el nombre que Git usa por defecto para identificar el repositorio remoto.

---

# 📦 PARTE 7 — CONECTAR GIT CON GITHUB (SSH)

## 🤔 ¿Por qué SSH?

### ✅ Ventajas

| Beneficio | Descripción |
|------------|------------|
| ✔ Más seguro | Utiliza claves criptográficas |
| ✔ Sin contraseñas constantes | No pide credenciales en cada push |
| ✔ Muy utilizado | Es el método preferido por muchos desarrolladores |
| ✔ Configuración única | Se configura una sola vez |

---

## 🔑 Generar clave SSH

| Acción | Comando |
|----------|----------|
| Crear clave SSH | `ssh-keygen -t ed25519 -C "correo@email.com"` |

### 💡 Ejemplo

```bash
ssh-keygen -t ed25519 -C "correo@email.com"
```

### 📌 Después

Presionar **Enter** varias veces.

---

## 🚀 Iniciar agente SSH

### Linux / Mac

```bash
eval "$(ssh-agent -s)"
```

---

## ➕ Agregar clave al agente

```bash
ssh-add ~/.ssh/id_ed25519
```

---

## 📋 Copiar clave pública

```bash
cat ~/.ssh/id_ed25519.pub
```

Copiar todo el contenido mostrado.

---

## ☁️ Agregar clave a GitHub

### Ruta en GitHub

```text
Settings
   ↓
SSH and GPG Keys
   ↓
New SSH Key
```

Pegar la clave copiada.

---

## 🧪 Probar conexión

```bash
ssh -T git@github.com
```

### ✅ Respuesta esperada

```text
Hi usuario!
You've successfully authenticated.
```

> [!TIP]
> Si ves este mensaje, la conexión SSH está funcionando correctamente.

---

## 🔗 Agregar Remote SSH

```bash
git remote add origin git@github.com:usuario/proyecto.git
```

---

## 🔍 Verificar

```bash
git remote -v
```

---

# ⚖️ HTTPS vs SSH

| HTTPS | SSH |
|---------|---------|
| Más sencillo al inicio | Requiere configuración inicial |
| Puede pedir credenciales | No pide contraseña constantemente |
| Ideal para principiantes | Muy usado profesionalmente |
| Funciona inmediatamente | Necesita generar claves |

> [!IMPORTANT]
> Ambos métodos funcionan perfectamente. SSH suele ser más cómodo a largo plazo.

---

# 📦 PARTE 8 — SUBIR EL PRIMER PROYECTO

## 🌿 Ver rama actual

```bash
git branch
```

---

## 🔄 Cambiar a main

```bash
git branch -M main
```

---

## 🚀 Primer Push

```bash
git push -u origin main
```

---

## 🧠 ¿Qué hace `-u`?

`-u` significa:

```text
upstream
```

Le dice a Git:

```text
Recuerda esta conexión
```

---

## 💡 Gracias a eso después podrás usar

```bash
git push
```

Sin escribir nada más.

---

## 🔄 Flujo Mental Completo

```text
Proyecto Local
       ↓
git init
       ↓
Crear commits
       ↓
Conectar GitHub
       ↓
git push -u origin main
       ↓
Repositorio en GitHub
```

> [!TIP]
> El primer push suele ser el más largo porque establece la conexión entre tu repositorio local y GitHub. Después normalmente bastará con usar `git push` y `git pull`.

````md
# 📦 PARTE 9 — FLUJO DIARIO DE TRABAJO

> 💡 Este será tu flujo el 90% del tiempo.

| Acción | Comando |
|---------|----------|
| Ver cambios | `git status` |
| Agregar cambios | `git add .` |
| Crear commit | `git commit -m "feat: agregar login"` |
| Subir cambios | `git push` |

## 🔄 Resumen

```bash
git status
git add .
git commit -m "mensaje"
git push
````

---

# 📦 PARTE 10 — TRAER CAMBIOS DE GITHUB

## 📥 Descargar cambios

```bash
git pull
```

### 📌 Versión explícita

```bash
git pull origin main
```

### 🧠 Esto hace

```text
GitHub
 ↓
Tu PC
```

---

# 📦 PARTE 11 — TRABAJAR CON RAMAS

## 🌱 Crear rama

```bash
git branch login
```

## 🔄 Cambiar a rama

```bash
git switch login
```

o

```bash
git checkout login
```

## ⚡ Crear y cambiar

```bash
git switch -c login
```

o

```bash
git checkout -b login
```

## 👀 Ver ramas

```bash
git branch
```

### 💡 Resultado

```text
main
* login
```

---

# 📦 PARTE 12 — SUBIR UNA RAMA

## 🚀 Primera vez

```bash
git push -u origin login
```

## 🚀 Después

```bash
git push
```

> 💡 Gracias al `-u`, Git recuerda la conexión entre tu rama local y la remota.

---

# 📦 PARTE 13 — FUSIONAR RAMAS

## 1️⃣ Ir a main

```bash
git switch main
```

## 2️⃣ Actualizar

```bash
git pull
```

## 3️⃣ Fusionar

```bash
git merge login
```

### 🧠 Resultado

```text
login
 ↓
main
```

---

# 📦 PARTE 14 — ELIMINAR RAMAS

| Tipo              | Comando                          |
| ----------------- | -------------------------------- |
| 🖥️ Local         | `git branch -d login`            |
| ⚠️ Forzar borrado | `git branch -D login`            |
| ☁️ Remota         | `git push origin --delete login` |

---

# 📦 PARTE 15 — DESHACER ERRORES

| Acción                                     | Comando                           |
| ------------------------------------------ | --------------------------------- |
| Quitar archivo del staging                 | `git restore --staged archivo.js` |
| Deshacer cambios no guardados              | `git restore archivo.js`          |
| Deshacer último commit manteniendo cambios | `git reset --soft HEAD~1`         |
| Eliminar commit y cambios                  | `git reset --hard HEAD~1`         |

> [!WARNING]
> ⚠️ `git reset --hard HEAD~1`
>
> Elimina el commit y también los cambios asociados.
>
> Úsalo únicamente cuando estés seguro de que no necesitas recuperar esos cambios.

---
````md
# 📦 PARTE 16 — STASH

> 💡 Permite guardar cambios temporalmente sin crear un commit.

## 📥 Guardar cambios

```bash
git stash
````

## 📋 Ver stashes

```bash
git stash list
```

## 📤 Recuperar cambios

```bash
git stash pop
```

---

# 📦 PARTE 17 — HISTORIAL

## 📜 Ver historial completo

```bash
git log
```

## 📌 Versión resumida

```bash
git log --oneline
```

## 🌳 Historial gráfico

```bash
git log --oneline --graph --all
```

---

# 📦 PARTE 18 — CLONAR REPOSITORIOS

## 🌐 HTTPS

```bash
git clone https://github.com/usuario/repo.git
```

## 🔐 SSH

```bash
git clone git@github.com:usuario/repo.git
```

### 🧠 Resultado

```text
GitHub
 ↓
Tu PC
```

---

# 📦 PARTE 19 — CAMBIAR REMOTES

## 👀 Ver remotes

```bash
git remote -v
```

## ❌ Eliminar remote

```bash
git remote remove origin
```

## ➕ Agregar nuevo remote

```bash
git remote add origin git@github.com:usuario/repo.git
```

---

# 📦 PARTE 20 — COMANDOS QUE MÁS USARÁS

| Comando             | Uso                   |
| ------------------- | --------------------- |
| `git status`        | Ver cambios           |
| `git add .`         | Agregar cambios       |
| `git commit -m`     | Crear commit          |
| `git push`          | Subir cambios         |
| `git pull`          | Descargar cambios     |
| `git branch`        | Ver ramas             |
| `git switch`        | Cambiar rama          |
| `git merge`         | Fusionar ramas        |
| `git stash`         | Guardar temporalmente |
| `git log --oneline` | Ver historial         |
| `git clone`         | Descargar repo        |
| `git remote -v`     | Ver conexión GitHub   |

---

# 🏆 FLUJO PROFESIONAL RECOMENDADO

```text
Crear rama
      ↓
Desarrollar
      ↓
git add .
      ↓
git commit
      ↓
git push
      ↓
Pull Request
      ↓
Merge a main
      ↓
Eliminar rama
```

---

# 🧠 REGLA MENTAL PARA RECORDAR TODO GIT

Piensa en Git como una oficina de correos:

```text
Archivo modificado
       ↓
git add
       ↓
Paquete preparado
       ↓
git commit
       ↓
Paquete sellado
       ↓
git push
       ↓
Enviado a GitHub
```

---

# 🎯 IDEA CLAVE

Si entiendes este flujo:

```text
add
 ↓
commit
 ↓
push
```

ya entiendes la base de Git que usarás prácticamente todos los días.

```
```
