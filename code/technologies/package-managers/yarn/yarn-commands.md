# 📦 YARN — COMANDOS Y FLAGS MÁS IMPORTANTES

> [!NOTE]
> Los comandos pueden variar ligeramente entre Yarn Classic (v1) y Yarn Modern/Berry (v2+), pero esta guía cubre los más utilizados y relevantes.

---

# 🚀 COMANDOS ESENCIALES

| Comando | Ejemplo | ¿Qué hace? | Uso típico |
|----------|----------|------------|------------|
| `yarn` | `yarn` | Instala dependencias | Instalación rápida |
| `yarn install` | `yarn install` | Instala dependencias del proyecto | Primer uso |
| `yarn init` | `yarn init` | Crea un `package.json` | Nuevo proyecto |
| `yarn init -y` | `yarn init -y` | Inicialización automática | Setup rápido |
| `yarn --version` | `yarn --version` | Muestra la versión instalada | Verificación |
| `yarn help` | `yarn help` | Muestra ayuda general | Consultas |

---

# 📦 INSTALAR DEPENDENCIAS

| Comando | Ejemplo | ¿Qué hace? |
|----------|----------|------------|
| `yarn add` | `yarn add axios` | Instala una dependencia |
| `yarn add package@version` | `yarn add react@18.2.0` | Instala una versión específica |
| `yarn add package@latest` | `yarn add react@latest` | Instala la última versión estable |
| `yarn add package@beta` | `yarn add react@beta` | Instala una versión beta |
| `yarn add package@next` | `yarn add react@next` | Instala la próxima versión |
| `yarn add package@alpha` | `yarn add react@alpha` | Instala una versión experimental |
| `yarn add package@rc` | `yarn add react@rc` | Instala una Release Candidate |

---

# 🛠️ DEPENDENCIAS ESPECIALES

| Comando | Ejemplo | Tipo |
|----------|----------|----------|
| `yarn add -D` | `yarn add -D typescript` | Dev Dependency |
| `yarn add --dev` | `yarn add --dev eslint` | Dev Dependency |
| `yarn add -P` | `yarn add -P react` | Peer Dependency |
| `yarn add -O` | `yarn add -O fsevents` | Optional Dependency |

> [!TIP]
> `-D` es probablemente el flag que más usarás después de `yarn add`.

---

# 🗑️ ELIMINAR DEPENDENCIAS

| Comando | Ejemplo | ¿Qué hace? |
|----------|----------|------------|
| `yarn remove` | `yarn remove axios` | Elimina un paquete |
| `yarn remove react` | `yarn remove react` | Elimina React |

---

# 🔄 ACTUALIZAR DEPENDENCIAS

| Comando | Ejemplo | ¿Qué hace? |
|----------|----------|------------|
| `yarn upgrade` | `yarn upgrade` | Actualiza dependencias |
| `yarn upgrade package` | `yarn upgrade react` | Actualiza un paquete específico |
| `yarn upgrade --latest` | `yarn upgrade --latest` | Fuerza la última versión |
| `yarn up` | `yarn up react` | Upgrade moderno (Berry) |

---

# 🔍 INFORMACIÓN DE PAQUETES

| Comando | Ejemplo | ¿Qué hace? |
|----------|----------|------------|
| `yarn info` | `yarn info react` | Información de un paquete |
| `yarn why` | `yarn why lodash` | Explica por qué está instalado |
| `yarn list` | `yarn list` | Lista dependencias |
| `yarn list --depth=0` | `yarn list --depth=0` | Solo dependencias principales |
| `yarn outdated` | `yarn outdated` | Muestra paquetes desactualizados |

---

# ▶️ EJECUTAR SCRIPTS

### package.json

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "test": "vitest"
  }
}
```

| Comando | Equivale a |
|----------|------------|
| `yarn dev` | Ejecuta `dev` |
| `yarn build` | Ejecuta `build` |
| `yarn test` | Ejecuta `test` |
| `yarn start` | Ejecuta `start` |
| `yarn lint` | Ejecuta `lint` |
| `yarn serve` | Ejecuta `serve` |

---

# 🧪 TESTING

| Comando | ¿Qué hace? |
|----------|------------|
| `yarn test` | Ejecuta tests |
| `yarn test --watch` | Modo watch |
| `yarn coverage` | Coverage |
| `yarn jest` | Ejecuta Jest |
| `yarn vitest` | Ejecuta Vitest |

---

# 🧹 LIMPIEZA

| Comando | ¿Qué hace? |
|----------|------------|
| `yarn cache clean` | Limpia caché |
| `yarn autoclean` | Limpieza automática |
| `yarn autoclean --init` | Genera configuración |
| `yarn dedupe` | Elimina dependencias duplicadas |

---

# ⚙️ CACHE

| Comando | ¿Qué hace? |
|----------|------------|
| `yarn cache dir` | Muestra ubicación del caché |
| `yarn cache clean` | Limpia caché |
| `yarn cache list` | Lista contenido del caché |

---

# 🌐 WORKSPACES (MONOREPOS)

| Comando | ¿Qué hace? |
|----------|------------|
| `yarn workspaces list` | Lista workspaces |
| `yarn workspace app dev` | Ejecuta script en un workspace |
| `yarn workspaces foreach` | Ejecuta en todos los workspaces |
| `yarn workspaces focus` | Instala solo algunos workspaces |

---

# 🔗 LINKING

| Comando | ¿Qué hace? |
|----------|------------|
| `yarn link` | Crea enlace global |
| `yarn unlink` | Elimina enlace |
| `yarn link package` | Conecta paquete local |

---

# 🔒 LOCKFILES

| Comando | ¿Qué hace? |
|----------|------------|
| `yarn install --frozen-lockfile` | Respeta el `yarn.lock` |
| `yarn install --immutable` | Versión moderna |
| `yarn install --check-files` | Verifica archivos instalados |

---

# 🏗️ PUBLICAR PAQUETES

| Comando | ¿Qué hace? |
|----------|------------|
| `yarn version` | Cambia versión |
| `yarn publish` | Publica paquete |
| `yarn publish --tag beta` | Publica versión beta |
| `yarn npm publish` | Publicación moderna |

---

# 🔧 CONFIGURACIÓN

| Comando | ¿Qué hace? |
|----------|------------|
| `yarn config list` | Muestra configuración |
| `yarn config get` | Lee un valor |
| `yarn config set` | Cambia un valor |
| `yarn config delete` | Elimina un valor |

---

# 🔐 SEGURIDAD

| Comando | ¿Qué hace? |
|----------|------------|
| `yarn audit` | Busca vulnerabilidades |
| `yarn audit --fix` | Intenta corregirlas |
| `yarn npm audit` | Auditoría moderna |

---

# 🚀 YARN BERRY (v2+)

| Comando | ¿Qué hace? |
|----------|------------|
| `yarn set version berry` | Actualiza a Berry |
| `yarn set version stable` | Instala la última estable |
| `yarn plugin import` | Instala plugins |
| `yarn plugin list` | Lista plugins |
| `yarn dlx` | Ejecuta paquetes sin instalar |

---

# ⚡ EQUIVALENCIAS NPM ↔ YARN

| npm | Yarn |
|------|------|
| `npm install` | `yarn` |
| `npm install axios` | `yarn add axios` |
| `npm uninstall axios` | `yarn remove axios` |
| `npm update` | `yarn upgrade` |
| `npm run dev` | `yarn dev` |
| `npm list` | `yarn list` |
| `npm audit` | `yarn audit` |
| `npx vite` | `yarn dlx vite` |
| `npm init -y` | `yarn init -y` |

---

# 🎯 COMANDOS QUE MÁS USARÁS

| Prioridad | Comando | Frecuencia |
|------------|----------|------------|
| 🥇 | `yarn` | Todos los proyectos |
| 🥇 | `yarn add` | Muy frecuente |
| 🥇 | `yarn remove` | Muy frecuente |
| 🥇 | `yarn dev` | Diario |
| 🥇 | `yarn build` | Diario |
| 🥇 | `yarn test` | Muy frecuente |
| 🥈 | `yarn upgrade` | Regular |
| 🥈 | `yarn outdated` | Regular |
| 🥈 | `yarn why` | Debugging |
| 🥉 | `yarn cache clean` | Ocasional |
| 🥉 | `yarn link` | Avanzado |
| 🥉 | `yarn workspace` | Monorepos |
| 🥉 | `yarn publish` | Librerías |

---

# 🧠 REGLA MENTAL RÁPIDA

```text
Git:
add → commit → push

Yarn:
install → add → dev → build → test
```

> [!TIP]
> Si dominas `yarn`, `yarn add`, `yarn remove`, `yarn dev`, `yarn build` y `yarn test`, ya cubres la gran mayoría del trabajo diario con Yarn.