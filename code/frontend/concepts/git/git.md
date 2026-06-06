# 📦 Subir un Proyecto a GitHub desde Cero (SSH)

## 1️⃣ Inicializar el repositorio

```bash
git init
git add .
git commit -m "primer commit"
```

---

## 2️⃣ Verificar la rama local

```bash
git branch
```

Si quieres usar `main`:

```bash
git branch -M main
```

---

## 3️⃣ Agregar el repositorio remoto (SSH)

```bash
git remote add origin git@github.com:TU_USUARIO/TU_REPO.git
```

### Ejemplo

```bash
git remote add origin git@github.com:alobuuls/arkanoid-game.git
```

---

## 4️⃣ Verificar el remote

```bash
git remote -v
```

---

## 5️⃣ Subir el proyecto

```bash
git push -u origin main
```

Si usas `master`:

```bash
git push -u origin master
```

---

## ✅ A partir de ahora, para subir cambios

```bash
git add .
git commit -m "mensaje descriptivo"
git push
```

---

# 📘 GIT BÁSICO

## 🧠 ¿Qué es Git?

Git es un sistema de control de versiones.

Permite:

* Llevar registro de cambios.
* Trabajar con ramas.
* Sincronizar proyectos con repositorios remotos (GitHub).

---

# 📗 INICIALIZAR REPOSITORIO

## Crear un repositorio local

```bash
git init
```

🧠 Crea un repositorio local dentro de tu proyecto.

---

# 📗 ESTADO DE ARCHIVOS

## Ver estado actual

```bash
git status
```

🧠 Muestra:

* Archivos modificados.
* Archivos agregados.
* Archivos sin seguimiento (untracked).

---

# 📗 AGREGAR ARCHIVOS (STAGING)

## Archivo específico

```bash
git add <archivo>
```

## Todos los cambios

```bash
git add .
```

🧠 Prepara los archivos para ser incluidos en el próximo commit.

---

# 📗 GUARDAR VERSIÓN (COMMIT)

```bash
git commit -m "mensaje descriptivo"
```

🧠 Guarda los cambios en el historial del proyecto.

---

# 📗 RAMAS (BRANCHES)

## Crear rama

```bash
git branch <nombre-rama>
```

## Cambiar de rama (método clásico)

```bash
git checkout <nombre-rama>
```

## Cambiar de rama (método moderno)

```bash
git switch <nombre-rama>
```

🧠 Permite trabajar en diferentes líneas de desarrollo sin afectar la rama principal.

---

# 📗 FUSIONAR RAMAS (MERGE)

## Ir a la rama principal

```bash
git checkout main
```

## Fusionar una rama

```bash
git merge <rama>
```

🧠 Integra los cambios de otra rama dentro de la rama actual.

---

# 📗 REPOSITORIO REMOTO (GITHUB)

## Conectar repositorio local con GitHub

```bash
git remote add origin git@github.com:USUARIO/REPO.git
```

## Verificar conexión

```bash
git remote -v
```

🧠 Permite conectar y validar el repositorio remoto.

---

# 📗 SUBIR CAMBIOS (PUSH)

## Primer push

```bash
git push -u origin main
```

## Push normal

```bash
git push
```

## Subir una nueva rama

```bash
git push -u origin <rama>
```

🧠 El parámetro `-u` (upstream) hace que Git recuerde la rama remota para futuros push y pull.

---

# 📗 TRAER CAMBIOS (PULL)

## Desde main

```bash
git pull origin main
```

## Desde otra rama

```bash
git pull origin <rama>
```

🧠 Actualiza tu repositorio local con los cambios existentes en el remoto.

---

# 📗 EXTRAS ÚTILES

## Historial de commits

```bash
git log
```

## Eliminar rama local

```bash
git branch -d <rama>
```

## Deshacer cambios no agregados al staging

```bash
git checkout -- <archivo>
```

## Deshacer último commit manteniendo cambios

```bash
git reset --soft HEAD~1
```

## Deshacer último commit y eliminar cambios

```bash
git reset --hard HEAD~1
```

## Guardar cambios temporalmente

```bash
git stash
```

## Recuperar cambios guardados

```bash
git stash pop
```

---

# 📗 FLUJO TÍPICO DE TRABAJO

### 1️⃣ Ver cambios

```bash
git status
```

### 2️⃣ Preparar cambios

```bash
git add .
```

### 3️⃣ Guardar versión

```bash
git commit -m "mensaje descriptivo"
```

### 4️⃣ Subir a GitHub

```bash
git push
```

---

# 🚀 Resumen Rápido

```text
git status
   ↓
git add .
   ↓
git commit -m "mensaje"
   ↓
git push
```

📌 Este es el flujo que usarás la mayor parte del tiempo en proyectos personales y profesionales.
