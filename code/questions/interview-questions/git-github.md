# 🐙 17. GIT / GITHUB

Esta sección es **muy importante para una entrevista de Frontend**, porque no basta con saber usar `git add`, `git commit` y `git push`. Pueden preguntarte conceptos y también darte situaciones prácticas.

> 💡 **Vamos pregunta por pregunta**, con una respuesta que puedas **decir directamente en una entrevista**, seguida de una explicación para que entiendas el concepto.

---

## 📚 Índice

- [🐙 Git / GitHub](#-git--github)

---

# 🔹 Fundamentos de Git

- [1️⃣ ¿Qué es Git?](#-1-qué-es-git)
- [2️⃣ ¿Qué diferencia hay entre Git y GitHub?](#-2-qué-diferencia-hay-entre-git-y-github)
- [3️⃣ ¿Qué es un Commit?](#-3-qué-es-un-commit)
- [4️⃣ ¿Qué es una Branch?](#-4-qué-es-una-branch)

---

# 🌿 Trabajo con ramas

- [5️⃣ ¿Qué es Merge?](#-5-qué-es-merge)
- [6️⃣ ¿Qué es Rebase?](#-6-qué-es-rebase)
- [🔥 7️⃣ Merge vs Rebase](#-7-merge-vs-rebase)
- [8️⃣ ¿Qué es Cherry-pick?](#-8-qué-es-cherry-pick)
- [9️⃣ ¿Qué es Stash?](#-9-qué-es-stash)

---

# 🔄 Deshacer cambios en Git

- [🔟 ¿Qué es Git Reset?](#-10-qué-es-git-reset)
- [🔥 11️⃣ Reset vs Revert vs Restore](#-11-reset-vs-revert-vs-restore)

---

# 🤝 Colaboración con GitHub

- [12️⃣ ¿Qué es un Pull Request?](#-12-qué-es-un-pull-request)
- [13️⃣ ¿Qué es un Conflicto?](#-13-qué-es-un-conflicto)
- [🔥 14️⃣ ¿Cómo resolverías un conflicto?](#-14-cómo-resolverías-un-conflicto)

---

# 🏗️ Estrategias y convenciones

- [15️⃣ ¿Qué es Git Flow?](#-15-qué-es-git-flow)
- [16️⃣ ¿Qué son los Conventional Commits?](#-16-qué-son-los-conventional-commits)
- [🔥 17️⃣ ¿Cómo escribirías un buen commit?](#-17-cómo-escribirías-un-buen-commit)

---

# 🎯 Prioridad para entrevista

1. ⭐ [Git vs GitHub](#-2-qué-diferencia-hay-entre-git-y-github)
2. ⭐ [Commit](#-3-qué-es-un-commit)
3. ⭐ [Branch](#-4-qué-es-una-branch)
4. ⭐ [Merge](#-5-qué-es-merge)
5. 🔥 [Merge vs Rebase](#-7-merge-vs-rebase)
6. 🔥 [Reset vs Revert vs Restore](#-11-reset-vs-revert-vs-restore)
7. ⭐ [Pull Request](#-12-qué-es-un-pull-request)
8. 🔥 [Resolución de conflictos](#-14-cómo-resolverías-un-conflicto)
9. ⭐ [Cherry-pick](#-8-qué-es-cherry-pick)
10. ⭐ [Stash](#-9-qué-es-stash)
11. [Conventional Commits](#-16-qué-son-los-conventional-commits)
12. [Git Flow](#-15-qué-es-git-flow)

## 🔹 1. ¿QUÉ ES GIT?

### 💬 Respuesta de entrevista

Git es un **sistema de control de versiones distribuido** que permite registrar y gestionar los cambios realizados en un proyecto.

Con Git puedo mantener un historial de modificaciones, trabajar con diferentes ramas, volver a versiones anteriores y colaborar con otros desarrolladores.

### 🧠 Para entenderlo

Git guarda la evolución de tu proyecto.

```text
Proyecto
   ↓
commit 1 → Login creado
   ↓
commit 2 → Validaciones agregadas
   ↓
commit 3 → Error corregido
```

Gracias a ese historial puedes saber **qué cambió, cuándo cambió y quién lo cambió**.

---

## 🔹 2. ¿QUÉ DIFERENCIA HAY ENTRE GIT Y GITHUB?

### 💬 Respuesta de entrevista

Git es la herramienta de **control de versiones** que utilizamos localmente para gestionar el historial de un proyecto.

GitHub es una **plataforma que utiliza Git** para almacenar repositorios remotamente y facilitar la colaboración entre desarrolladores.

### 🧠 Ejemplo

| Git                          | GitHub                            |
| ---------------------------- | --------------------------------- |
| Controla versiones           | Almacena repositorios remotamente |
| Localmente en mi computadora | Colaboración                      |
|                              | Pull Requests                     |
|                              | Code Reviews                      |
|                              | Issues                            |

> 🧠 **Una forma sencilla de recordarlo:**
>
> **Git = herramienta de control de versiones.**
> **GitHub = plataforma para trabajar con repositorios Git.**

---

## 🔹 3. ¿QUÉ ES UN COMMIT?

### 💬 Respuesta de entrevista

Un commit es un **registro de cambios** dentro del historial de Git.

Representa un punto concreto de la evolución del proyecto y contiene información sobre los cambios realizados.

Por ejemplo:

```bash
git add .
git commit -m "feat: add login form"
```

Ese commit representa:

> "Agregué el formulario de login."

### 🧠 Importante

Un commit debería representar un cambio **coherente y relacionado**.

❌ **Mal:**

```text
fix login + update README + change button + delete service
```

✅ **Mejor:**

```text
feat: add login form
```

---

## 🔹 4. ¿QUÉ ES UNA BRANCH?

### 💬 Respuesta de entrevista

Una branch es una **rama del historial de Git** que permite trabajar sobre cambios de manera independiente sin afectar directamente otra rama.

Por ejemplo:

```text
main
 │
 ├── feature/login
 ├── feature/register
 └── fix/header
```

Esto permite que varios desarrolladores trabajen simultáneamente en diferentes funcionalidades.

### 🧠 Ejemplo

```bash
git checkout -b feature/login
```

o, actualmente:

```bash
git switch -c feature/login
```

---

## 🔹 5. ¿QUÉ ES MERGE?

### 💬 Respuesta de entrevista

`merge` permite **integrar los cambios de una rama dentro de otra**, conservando el historial de ambas ramas.

Por ejemplo:

```text
main
 │
 ├───────●───────●
          \
           ●────● feature/login
```

Si quiero integrar `feature/login`:

```bash
git switch main
git merge feature/login
```

Git intentará combinar ambos historiales.

---

## 🔹 6. ¿QUÉ ES REBASE?

### 💬 Respuesta de entrevista

`rebase` permite mover los commits de una rama para colocarlos encima de otra base, creando un historial más lineal.

Por ejemplo:

```text
Antes:

A──B──C main
    \
     D──E feature
```

Después del rebase:

```text
A──B──C──D'──E' feature
```

Los commits `D` y `E` se vuelven a aplicar sobre `C`.

> ⚠️ **Muy importante**
>
> Rebase **reescribe el historial**.
>
> Por eso hay que tener cuidado cuando la rama ya fue compartida con otros desarrolladores.

---

# 🔥 7. ¿MERGE VS REBASE?

Esta es una pregunta **muy típica**.

### 💬 Respuesta de entrevista

`merge` integra dos ramas conservando sus historiales y puede crear un merge commit.

`rebase` mueve los commits de una rama sobre otra y genera un historial más lineal, pero puede reescribir el historial.

### 🧠 Comparación

| Merge                             | Rebase                             |
| --------------------------------- | ---------------------------------- |
| Conserva historial                | Reescribe historial                |
| Puede crear merge commit          | Historial más lineal               |
| Más seguro para ramas compartidas | Mejor para limpiar historial local |
| No cambia commits existentes      | Crea nuevos commits                |

### 💡 Regla práctica

```text
Rama compartida
    ↓
MERGE suele ser más seguro


Rama personal/local
    ↓
REBASE puede ser útil
```

> 💬 **Una buena respuesta adicional en entrevista sería:**
>
> "Evitaría hacer rebase de una rama que otros desarrolladores ya están utilizando, porque estaría reescribiendo el historial compartido."

# 🔹 8. ¿QUÉ ES CHERRY-PICK?

### 💬 Respuesta de entrevista

`git cherry-pick` permite tomar **un commit específico de otra rama y aplicarlo sobre la rama actual**, sin tener que integrar toda la rama.

```bash
git cherry-pick abc123
```

Si tengo:

```text
feature
 ├── A
 ├── B
 └── C ← necesito solamente este commit
```

Puedo llevar `C` a otra rama.

> 💡 **Caso práctico**
>
> Imagina que tienes un bugfix en:
>
> ```text
> feature/payment
> ```
>
> pero necesitas ese mismo fix inmediatamente en:
>
> ```text
> hotfix/production
> ```
>
> Puedes hacer:
>
> ```bash
> git cherry-pick <commit>
> ```

---

# 🔹 9. ¿QUÉ ES STASH?

### 💬 Respuesta de entrevista

`git stash` permite guardar temporalmente cambios que todavía no quiero hacer commit, dejando el working tree limpio.

Por ejemplo:

```bash
git stash
```

Después puedo recuperar los cambios:

```bash
git stash pop
```

### 🧠 Caso típico

Estás trabajando:

```text
feature/login
```

y tienes cambios sin terminar.

Pero aparece un bug urgente en producción.

Puedes:

```bash
git stash
git switch main
```

trabajar en el hotfix y después recuperar tus cambios.

---

# 🔹 10. ¿QUÉ ES GIT RESET?

### 💬 Respuesta de entrevista

`git reset` permite mover el `HEAD` a otro commit y modificar el estado del historial y/o del staging area dependiendo del modo utilizado.

Los tres modos principales son:

```bash
git reset --soft
git reset --mixed
git reset --hard
```

### 🧠 Diferencia

| Modo      | Resultado                                  |
| --------- | ------------------------------------------ |
| `--soft`  | Mantiene cambios staged                    |
| `--mixed` | Mantiene cambios pero los saca del staging |
| `--hard`  | Elimina los cambios                        |

Ejemplo:

```bash
git reset --soft HEAD~1
```

Esto elimina el último commit, pero conserva sus cambios preparados para commit.

> ⚠️ `--hard` debe utilizarse con mucho cuidado porque puede eliminar cambios locales.

---

# 🔥 11. ¿RESET VS REVERT VS RESTORE?

Otra pregunta **muy probable**.

### 💬 Respuesta de entrevista

Son comandos diferentes para deshacer cambios:

| Comando   | Función                                                                                               |
| --------- | ----------------------------------------------------------------------------------------------------- |
| `reset`   | Mueve el historial y puede modificar commits.                                                         |
| `revert`  | Crea un nuevo commit que deshace los cambios de otro commit.                                          |
| `restore` | Se utiliza principalmente para recuperar el estado de archivos y modificar el working tree o staging. |

### 🧠 Resumen

```text
RESET
↓
Mueve HEAD
↓
Puede reescribir historial


REVERT
↓
Crea un nuevo commit
↓
Deshace otro commit


RESTORE
↓
Trabaja con archivos
↓
Descarta/restaura cambios
```

### 💡 Ejemplo

Si ya hiciste:

```text
A → B → C
```

y `C` tiene un error:

En una rama compartida es más seguro:

```bash
git revert C
```

Resultado:

```text
A → B → C → C'
```

`C'` deshace los cambios de `C` sin borrar el historial.

---

# 🔹 12. ¿QUÉ ES UN PULL REQUEST?

### 💬 Respuesta de entrevista

Un Pull Request, o PR, es una solicitud para **integrar los cambios de una rama en otra**, normalmente después de pasar revisión de código y validaciones automáticas.

Un flujo típico sería:

```text
feature/login
      ↓
push
      ↓
Pull Request
      ↓
Code Review
      ↓
CI / Tests
      ↓
Approval
      ↓
Merge
      ↓
main
```

GitHub proporciona herramientas para revisar el código, comentar cambios y ejecutar checks antes de hacer merge.

---

# 🔹 13. ¿QUÉ ES UN CONFLICTO?

### 💬 Respuesta de entrevista

Un conflicto ocurre cuando Git no puede determinar automáticamente cómo combinar cambios incompatibles realizados en diferentes ramas.

Por ejemplo, dos ramas modifican las mismas líneas:

```text
main
 ↓
name = "Alo"

feature
 ↓
name = "Alex"
```

Git no puede decidir cuál debe conservar.

Entonces marca el conflicto:

```text
<<<<<<< HEAD
name = "Alo"
=======
name = "Alex"
>>>>>>> feature
```

---

# 🔥 14. ¿CÓMO RESOLVERÍAS UN CONFLICTO?

### 💬 Respuesta de entrevista

Primero identificaría los archivos en conflicto, revisaría ambas versiones y decidiría cuál código debe mantenerse o cómo combinarlo.

Después eliminaría los marcadores del conflicto, probaría la aplicación y finalmente haría `git add` y continuaría el proceso de merge o rebase.

### 🧠 Flujo

```bash
git status
```

Identifico los conflictos.

Después edito los archivos:

```text
<<<<<<<
código actual
=======
código de la otra rama
>>>>>>>
```

Dejo la versión correcta.

Después:

```bash
git add .
```

Si estaba haciendo merge:

```bash
git commit
```

Si estaba haciendo rebase:

```bash
git rebase --continue
```

> ⚠️ **Punto importante en entrevista**
>
> No deberías decir simplemente:
>
> > "Elijo mi código."
>
> Lo correcto es:
>
> > "Analizo ambas modificaciones y determino cuál debe mantenerse según el comportamiento esperado de la aplicación."

---

# 🔹 15. ¿QUÉ ES GIT FLOW?

### 💬 Respuesta de entrevista

Git Flow es un modelo de trabajo basado en ramas que define una estructura para organizar el desarrollo, releases, features y hotfixes.

Tradicionalmente utiliza ramas como:

```text
main
develop
feature/*
release/*
hotfix/*
```

Por ejemplo:

```text
main
 │
 └── develop
      │
      ├── feature/login
      ├── feature/register
      └── feature/profile
```

> ⚠️ **Importante**
>
> Git Flow **no es una funcionalidad de Git**, sino una estrategia de branching.
>
> Y actualmente muchos equipos utilizan flujos más simples, como **trunk-based development** o ramas cortas basadas en `main`.

# 🔹 16. ¿QUÉ SON LOS CONVENTIONAL COMMITS?

### 💬 Respuesta de entrevista

Conventional Commits es una convención para estructurar los mensajes de commit de manera consistente y fácil de entender.

La estructura básica es:

```text
type: description
```

### 📌 Ejemplos

```text
feat: add login form
fix: resolve authentication error
refactor: simplify user service
docs: update README
test: add login tests
chore: update dependencies
```

### 🏷️ Algunos tipos comunes

| Tipo       |   |
| ---------- | - |
| `feat`     |   |
| `fix`      |   |
| `refactor` |   |
| `docs`     |   |
| `test`     |   |
| `chore`    |   |
| `perf`     |   |
| `style`    |   |

### 🧠 ¿Por qué utilizarlo?

Porque facilita:

* Entender el historial.
* Revisar cambios.
* Generar changelogs.
* Automatizar releases.
* Mantener consistencia en el equipo.

---

# 🔥 17. ¿CÓMO ESCRIBIRÍAS UN BUEN COMMIT?

### 💬 Respuesta de entrevista

Un buen commit debería ser **claro, específico y representar un cambio lógico y relacionado**.

### ❌ Malo

```text
changes
```

### ❌ Malo

```text
fix stuff
```

### ✅ Bueno

```text
fix: prevent duplicate login requests
```

### ✅ Bueno

```text
feat: add guest filtering by country
```

### ✅ Bueno

```text
refactor: extract guest table filtering logic
```

### 🧠 Regla sencilla

Un buen commit debería responder:

> **¿Qué cambió?**

Y, cuando sea necesario, dejar claro **para qué**.

---

# 🧠 RESUMEN PARA MEMORIZAR

| Concepto                 | Idea clave                                            |
| ------------------------ | ----------------------------------------------------- |
| **Git**                  | Control de versiones                                  |
| **GitHub**               | Plataforma para repositorios Git y colaboración       |
| **Commit**               | Punto del historial                                   |
| **Branch**               | Línea independiente de desarrollo                     |
| **Merge**                | Combina ramas                                         |
| **Rebase**               | Reubica commits sobre otra base → Reescribe historial |
| **Cherry-pick**          | Aplica un commit específico                           |
| **Stash**                | Guarda cambios temporalmente                          |
| **Reset**                | Mueve HEAD / puede reescribir historial               |
| **Revert**               | Crea un commit que deshace otro                       |
| **Restore**              | Restaura archivos                                     |
| **Pull Request**         | Solicitud para integrar cambios                       |
| **Conflict**             | Git no puede combinar automáticamente                 |
| **Git Flow**             | Estrategia de branching                               |
| **Conventional Commits** | Convención para mensajes de commit                    |

---

# 🎯 LAS QUE YO PRIORIZARÍA PARA TU ENTREVISTA

Si tienes poco tiempo, aprende **muy bien** estas:

1. ⭐ **Git vs GitHub**
2. ⭐ **Commit**
3. ⭐ **Branch**
4. ⭐ **Merge**
5. 🔥 **Merge vs Rebase**
6. 🔥 **Reset vs Revert vs Restore**
7. ⭐ **Pull Request**
8. 🔥 **Cómo resolver un conflicto**
9. ⭐ **Cherry-pick**
10. ⭐ **Stash**
11. **Conventional Commits**
12. **Git Flow**

> 🎯 Y especialmente **Merge vs Rebase** y **Reset vs Revert vs Restore**, porque ahí es donde una entrevista puede pasar de preguntas básicas a comprobar si realmente entiendes Git.
