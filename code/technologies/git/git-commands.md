# 📘 Guía básica de Git

## 🔹 Básicos

### `git init`
Inicializa un repositorio Git nuevo en el proyecto actual.

### `git clone <url>`
Clona un repositorio remoto a tu máquina local.

### `git status`
Muestra el estado actual del repositorio (archivos modificados, staged, etc.).

### `git add .`
Agrega **todos los cambios** al área de staging.

### `git add <archivo>`
Agrega un archivo específico al staging.

### `git commit -m "mensaje"`
Guarda los cambios en el historial con un mensaje descriptivo.

---

## 🔹 Historial y revisión

### `git log`
Muestra el historial completo de commits.

### `git log --oneline`
Muestra el historial resumido (una línea por commit).

### `git diff`
Muestra los cambios entre archivos modificados y el último commit.

### `git show <commit>`
Muestra detalles de un commit específico.

---

## 🔹 Ramas (branches)

### `git branch`
Lista todas las ramas.

### `git branch <nombre>`
Crea una nueva rama.

### `git checkout <rama>`
Cambia a una rama existente.

### `git switch <rama>`
Alternativa moderna a `checkout` para cambiar de rama.

### `git checkout -b <rama>`
Crea una rama nueva y cambia a ella.

### `git merge <rama>`
Fusiona una rama con la rama actual.

---

## 🔹 Trabajo con remoto

### `git remote -v`
Muestra los repositorios remotos configurados.

### `git push`
Envía los commits locales al repositorio remoto.

### `git pull`
Descarga cambios del remoto y los fusiona automáticamente.

### `git fetch`
Descarga cambios del remoto **sin aplicarlos**.

---

## 🔹 Correcciones comunes

### `git commit --amend`
Modifica el último commit (mensaje o contenido).

### `git reset --soft HEAD~1`
Deshace el último commit pero mantiene los cambios en staging.

### `git reset --hard HEAD~1`
Elimina el último commit y los cambios (⚠️ irreversible).

### `git restore <archivo>`
Restaura un archivo al estado del último commit.

---

## 🔹 Extra útiles (pro)

### `git stash`
Guarda cambios temporales sin hacer commit.

### `git stash pop`
Recupera los cambios guardados con stash.

### `git rebase <rama>`
Reaplica commits sobre otra base (historial más limpio).

### `git cherry-pick <commit>`
Aplica un commit específico de otra rama a la actual.

### `find src/app -type f`
Estructura de carpetas.

---

## 🧠 Notas clave

- **Staging (`git add`)**: prepara cambios para commit  
- **Commit**: guarda cambios en el historial  
- **Branch**: permite trabajar en paralelo sin afectar la principal  
- **Merge/Rebase**: integran cambios entre ramas  

---