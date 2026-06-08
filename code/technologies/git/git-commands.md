# 📦 TABLA MAESTRA DE COMANDOS GIT

> Esta tabla está pensada como una referencia rápida para estudiar Git. Está organizada desde los comandos más usados hasta otros más avanzados.

---

# 🚀 INICIALIZACIÓN DEL REPOSITORIO

| Comando               | Ejemplo                               | ¿Qué hace?                     | Uso típico              |
| --------------------- | ------------------------------------- | ------------------------------ | ----------------------- |
| `git init`            | `git init`                            | Inicializa un repositorio Git  | Crear repositorio local |
| `git clone`           | `git clone URL`                       | Clona un repositorio existente | Descargar proyectos     |
| `git clone --depth 1` | `git clone --depth 1 URL`             | Clonado superficial            | Descarga rápida         |
| `git config`          | `git config --global user.name "Alo"` | Configura Git                  | Configuración inicial   |

---

# 📊 ESTADO Y CONSULTA

| Comando             | Ejemplo                | ¿Qué hace?                    | Uso típico        |
| ------------------- | ---------------------- | ----------------------------- | ----------------- |
| `git status`        | `git status`           | Estado actual del repositorio | Ver cambios       |
| `git log`           | `git log`              | Historial de commits          | Revisar historial |
| `git log --oneline` | `git log --oneline`    | Historial resumido            | Vista rápida      |
| `git show`          | `git show`             | Muestra un commit             | Inspección        |
| `git diff`          | `git diff`             | Diferencias sin staged        | Comparar cambios  |
| `git diff --staged` | `git diff --staged`    | Diferencias en staging        | Revisar commit    |
| `git blame`         | `git blame archivo.ts` | Quién modificó cada línea     | Auditoría         |
| `git shortlog`      | `git shortlog -sn`     | Resumen por autor             | Estadísticas      |
| `git reflog`        | `git reflog`           | Historial interno de Git      | Recuperación      |

---

# 📥 STAGING (PREPARAR CAMBIOS)

| Comando           | Ejemplo          | ¿Qué hace?                      | Uso típico       |
| ----------------- | ---------------- | ------------------------------- | ---------------- |
| `git add archivo` | `git add app.js` | Agrega archivo                  | Preparar cambios |
| `git add .`       | `git add .`      | Agrega todo                     | Uso diario       |
| `git add -A`      | `git add -A`     | Agrega todo incluyendo borrados | Commit completo  |
| `git add -p`      | `git add -p`     | Agrega por fragmentos           | Control fino     |

---

# 💾 COMMITS

| Comando                        | Ejemplo                        | ¿Qué hace?                      | Uso típico      |
| ------------------------------ | ------------------------------ | ------------------------------- | --------------- |
| `git commit -m`                | `git commit -m "feat: login"`  | Crea commit                     | Uso diario      |
| `git commit --amend`           | `git commit --amend`           | Modifica último commit          | Correcciones    |
| `git commit --amend --no-edit` | `git commit --amend --no-edit` | Agrega cambios al último commit | Ajustes rápidos |

---

# 🌿 RAMAS (BRANCHES)

| Comando              | Ejemplo                       | ¿Qué hace?     | Uso típico       |
| -------------------- | ----------------------------- | -------------- | ---------------- |
| `git branch`         | `git branch`                  | Lista ramas    | Navegación       |
| `git branch rama`    | `git branch feature-login`    | Crea rama      | Desarrollo       |
| `git switch rama`    | `git switch feature-login`    | Cambia de rama | Método moderno   |
| `git checkout rama`  | `git checkout feature-login`  | Cambia de rama | Método clásico   |
| `git switch -c rama` | `git switch -c feature-login` | Crea y cambia  | Muy usado        |
| `git branch -d rama` | `git branch -d feature-login` | Borra rama     | Limpieza         |
| `git branch -D rama` | `git branch -D feature-login` | Fuerza borrado | Casos especiales |
| `git branch -m`      | `git branch -m nueva-rama`    | Renombra rama  | Organización     |

---

# 🔀 MERGE Y REBASE

| Comando             | Ejemplo                   | ¿Qué hace?              | Uso típico        |
| ------------------- | ------------------------- | ----------------------- | ----------------- |
| `git merge rama`    | `git merge feature-login` | Fusiona ramas           | Integración       |
| `git merge --no-ff` | `git merge --no-ff rama`  | Conserva historial      | Equipos           |
| `git rebase rama`   | `git rebase main`         | Reaplica commits        | Historial limpio  |
| `git rebase -i`     | `git rebase -i HEAD~5`    | Rebase interactivo      | Reordenar commits |
| `git cherry-pick`   | `git cherry-pick HASH`    | Copia commit específico | Correcciones      |

---

# ☁️ REMOTOS (GITHUB, GITLAB)

| Comando              | Ejemplo                         | ¿Qué hace?      | Uso típico   |
| -------------------- | ------------------------------- | --------------- | ------------ |
| `git remote add`     | `git remote add origin URL`     | Conecta remoto  | Primera vez  |
| `git remote -v`      | `git remote -v`                 | Lista remotos   | Verificación |
| `git remote remove`  | `git remote remove origin`      | Elimina remoto  | Corrección   |
| `git remote rename`  | `git remote rename old new`     | Renombra remoto | Organización |
| `git remote set-url` | `git remote set-url origin URL` | Cambia URL      | Migraciones  |

---

# ⬆️ PUSH

| Comando                       | Ejemplo                       | ¿Qué hace?         | Uso típico        |
| ----------------------------- | ----------------------------- | ------------------ | ----------------- |
| `git push`                    | `git push`                    | Sube cambios       | Uso diario        |
| `git push -u origin main`     | `git push -u origin main`     | Primer push        | Configuración     |
| `git push origin rama`        | `git push origin feature`     | Subir rama         | Trabajo en equipo |
| `git push --force`            | `git push --force`            | Sobrescribe remoto | Mucho cuidado     |
| `git push --force-with-lease` | `git push --force-with-lease` | Force seguro       | Rebase            |
| `git push --tags`             | `git push --tags`             | Sube tags          | Releases          |

---

# ⬇️ PULL Y FETCH

| Comando                | Ejemplo                | ¿Qué hace?            | Uso típico     |
| ---------------------- | ---------------------- | --------------------- | -------------- |
| `git pull`             | `git pull`             | Descarga y fusiona    | Uso diario     |
| `git pull origin main` | `git pull origin main` | Rama específica       | Actualizar     |
| `git fetch`            | `git fetch`            | Descarga sin fusionar | Revisión       |
| `git fetch --all`      | `git fetch --all`      | Todos los remotos     | Sincronización |

---

# ⏪ DESHACER CAMBIOS

| Comando                    | Ejemplo                        | ¿Qué hace?                         | Riesgo      |
| -------------------------- | ------------------------------ | ---------------------------------- | ----------- |
| `git restore archivo`      | `git restore app.js`           | Recupera archivo                   | Bajo        |
| `git restore .`            | `git restore .`                | Recupera todo                      | Bajo        |
| `git restore --staged`     | `git restore --staged archivo` | Quita del staging                  | Bajo        |
| `git reset --soft HEAD~1`  | `git reset --soft HEAD~1`      | Elimina commit conservando cambios | Medio       |
| `git reset --mixed HEAD~1` | `git reset --mixed HEAD~1`     | Elimina commit y staging           | Medio       |
| `git reset --hard HEAD~1`  | `git reset --hard HEAD~1`      | Borra todo                         | Alto ⚠️     |
| `git revert HASH`          | `git revert HASH`              | Revierte commit seguro             | Recomendado |

---

# 📦 STASH

| Comando           | Ejemplo           | ¿Qué hace?                |
| ----------------- | ----------------- | ------------------------- |
| `git stash`       | `git stash`       | Guarda cambios temporales |
| `git stash list`  | `git stash list`  | Lista stashes             |
| `git stash pop`   | `git stash pop`   | Recupera y elimina stash  |
| `git stash apply` | `git stash apply` | Recupera sin borrar       |
| `git stash drop`  | `git stash drop`  | Borra stash               |
| `git stash clear` | `git stash clear` | Borra todos               |

---

# 🏷️ TAGS (VERSIONES)

| Comando                  | Ejemplo                          | ¿Qué hace?  |
| ------------------------ | -------------------------------- | ----------- |
| `git tag`                | `git tag`                        | Lista tags  |
| `git tag v1.0.0`         | `git tag v1.0.0`                 | Crea tag    |
| `git tag -a`             | `git tag -a v1.0.0 -m "release"` | Tag anotado |
| `git push origin v1.0.0` | `git push origin v1.0.0`         | Sube tag    |
| `git push --tags`        | `git push --tags`                | Sube todos  |

---

# 🧹 LIMPIEZA

| Comando         | Ejemplo         | ¿Qué hace?                |
| --------------- | --------------- | ------------------------- |
| `git clean -n`  | `git clean -n`  | Simula limpieza           |
| `git clean -f`  | `git clean -f`  | Borra untracked           |
| `git clean -fd` | `git clean -fd` | Borra archivos y carpetas |
| `git gc`        | `git gc`        | Optimiza repositorio      |
| `git prune`     | `git prune`     | Limpia objetos huérfanos  |

---

# 🔍 BÚSQUEDA

| Comando           | Ejemplo                | ¿Qué hace?           |
| ----------------- | ---------------------- | -------------------- |
| `git grep`        | `git grep "login"`     | Busca texto          |
| `git log --grep`  | `git log --grep="fix"` | Busca commits        |
| `git log archivo` | `git log app.js`       | Historial de archivo |
| `git show HASH`   | `git show HASH`        | Ver commit           |

---

# 🚨 RECUPERACIÓN Y EMERGENCIAS

| Comando             | Ejemplo             | ¿Qué hace?                 |
| ------------------- | ------------------- | -------------------------- |
| `git reflog`        | `git reflog`        | Recuperar commits perdidos |
| `git fsck`          | `git fsck`          | Verificar integridad       |
| `git checkout HASH` | `git checkout HASH` | Estado temporal            |
| `git switch -`      | `git switch -`      | Volver a rama anterior     |

---

# 🏆 LOS 15 COMANDOS QUE MÁS USARÁS

| Prioridad | Comando             |
| --------- | ------------------- |
| 🥇        | `git status`        |
| 🥈        | `git add .`         |
| 🥉        | `git commit -m ""`  |
| ⭐         | `git push`          |
| ⭐         | `git pull`          |
| ⭐         | `git log --oneline` |
| ⭐         | `git branch`        |
| ⭐         | `git switch`        |
| ⭐         | `git merge`         |
| ⭐         | `git stash`         |
| ⭐         | `git restore`       |
| ⭐         | `git remote -v`     |
| ⭐         | `git fetch`         |
| ⭐         | `git clone`         |
| ⭐         | `git init`          |

> 💡 Si dominas solamente estos 15 comandos, ya puedes trabajar cómodamente en la mayoría de proyectos profesionales.
