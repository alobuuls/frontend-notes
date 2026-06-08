# 📦 TABLA DE COMANDOS DE PNPM

> [!NOTE]
> PNPM tiene una sintaxis muy parecida a npm y Yarn, pero añade características potentes para **workspaces**, **monorepos** y **gestión eficiente de dependencias**.

---

# 🚀 COMANDOS ESENCIALES

| Comando          | Ejemplo          | ¿Qué hace?            | Uso típico       |
| ---------------- | ---------------- | --------------------- | ---------------- |
| `pnpm`           | `pnpm`           | Instala dependencias  | Uso diario       |
| `pnpm install`   | `pnpm install`   | Instala dependencias  | Primer setup     |
| `pnpm init`      | `pnpm init`      | Crea package.json     | Nuevo proyecto   |
| `pnpm init -y`   | `pnpm init -y`   | Inicialización rápida | Setup automático |
| `pnpm --version` | `pnpm --version` | Muestra versión       | Verificación     |
| `pnpm help`      | `pnpm help`      | Ayuda general         | Consultas        |

---

# 📦 INSTALAR DEPENDENCIAS

| Comando                    | Ejemplo                 | ¿Qué hace?         |
| -------------------------- | ----------------------- | ------------------ |
| `pnpm add`                 | `pnpm add axios`        | Instala paquete    |
| `pnpm add package@version` | `pnpm add react@18.2.0` | Versión específica |
| `pnpm add package@latest`  | `pnpm add react@latest` | Última estable     |
| `pnpm add package@beta`    | `pnpm add react@beta`   | Beta               |
| `pnpm add package@next`    | `pnpm add react@next`   | Próxima versión    |
| `pnpm add package@alpha`   | `pnpm add react@alpha`  | Experimental       |
| `pnpm add package@rc`      | `pnpm add react@rc`     | Release Candidate  |

---

# 🛠️ DEPENDENCIAS ESPECIALES

| Comando               | Ejemplo                      | ¿Qué hace?          |
| --------------------- | ---------------------------- | ------------------- |
| `pnpm add -D`         | `pnpm add -D typescript`     | Dev Dependency      |
| `pnpm add --save-dev` | `pnpm add --save-dev eslint` | Igual que `-D`      |
| `pnpm add -P`         | `pnpm add -P react`          | Peer Dependency     |
| `pnpm add -O`         | `pnpm add -O fsevents`       | Optional Dependency |

---

# 🗑️ ELIMINAR DEPENDENCIAS

| Comando             | Ejemplo             | ¿Qué hace?          |
| ------------------- | ------------------- | ------------------- |
| `pnpm remove`       | `pnpm remove axios` | Elimina paquete     |
| `pnpm remove react` | `pnpm remove react` | Elimina dependencia |

---

# 🔄 ACTUALIZAR DEPENDENCIAS

| Comando                | Ejemplo                | ¿Qué hace?             |
| ---------------------- | ---------------------- | ---------------------- |
| `pnpm update`          | `pnpm update`          | Actualiza dependencias |
| `pnpm update react`    | `pnpm update react`    | Actualiza paquete      |
| `pnpm update --latest` | `pnpm update --latest` | Fuerza última versión  |
| `pnpm up`              | `pnpm up`              | Alias corto            |
| `pnpm up react`        | `pnpm up react`        | Actualiza React        |

---

# 🔍 INFORMACIÓN DE PAQUETES

| Comando               | Ejemplo               | ¿Qué hace?                 |
| --------------------- | --------------------- | -------------------------- |
| `pnpm info`           | `pnpm info react`     | Información del paquete    |
| `pnpm view`           | `pnpm view react`     | Información detallada      |
| `pnpm list`           | `pnpm list`           | Lista dependencias         |
| `pnpm list --depth=0` | `pnpm list --depth=0` | Solo dependencias directas |
| `pnpm why`            | `pnpm why lodash`     | Explica por qué existe     |
| `pnpm outdated`       | `pnpm outdated`       | Busca paquetes antiguos    |

---

# ▶️ EJECUTAR SCRIPTS

## package.json

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "test": "vitest"
  }
}
```

| Comando        | Equivale a      |
| -------------- | --------------- |
| `pnpm dev`     | Ejecuta dev     |
| `pnpm build`   | Ejecuta build   |
| `pnpm test`    | Ejecuta test    |
| `pnpm start`   | Ejecuta start   |
| `pnpm lint`    | Ejecuta lint    |
| `pnpm run dev` | Forma explícita |

---

# 🧪 TESTING

| Comando             | ¿Qué hace?     |
| ------------------- | -------------- |
| `pnpm test`         | Ejecuta tests  |
| `pnpm test --watch` | Modo watch     |
| `pnpm coverage`     | Coverage       |
| `pnpm jest`         | Ejecuta Jest   |
| `pnpm vitest`       | Ejecuta Vitest |

---

# 🧹 LIMPIEZA

| Comando            | ¿Qué hace?                        |
| ------------------ | --------------------------------- |
| `pnpm prune`       | Elimina dependencias innecesarias |
| `pnpm store prune` | Limpia store global               |
| `pnpm dedupe`      | Elimina duplicados                |
| `pnpm remove`      | Desinstala paquetes               |

---

# 💾 STORE GLOBAL (EXCLUSIVO DE PNPM)

| Comando              | ¿Qué hace?                |
| -------------------- | ------------------------- |
| `pnpm store path`    | Ruta del store            |
| `pnpm store status`  | Estado del store          |
| `pnpm store prune`   | Limpia paquetes no usados |
| `pnpm store add`     | Añade al store            |
| `pnpm store inspect` | Inspecciona store         |

---

# ⚙️ CONFIGURACIÓN

| Comando              | ¿Qué hace?        |
| -------------------- | ----------------- |
| `pnpm config list`   | Ver configuración |
| `pnpm config get`    | Obtener valor     |
| `pnpm config set`    | Modificar valor   |
| `pnpm config delete` | Eliminar valor    |

---

# 🔒 LOCKFILE

| Comando                          | ¿Qué hace?             |
| -------------------------------- | ---------------------- |
| `pnpm install --frozen-lockfile` | Respeta pnpm-lock.yaml |
| `pnpm install --lockfile-only`   | Actualiza lockfile     |
| `pnpm install --prefer-offline`  | Prioriza caché local   |

---

# 🌐 WORKSPACES / MONOREPOS

| Comando                  | ¿Qué hace?                      |
| ------------------------ | ------------------------------- |
| `pnpm -r install`        | Instala en todos los workspaces |
| `pnpm -r build`          | Ejecuta build en todos          |
| `pnpm -r test`           | Ejecuta tests en todos          |
| `pnpm recursive install` | Alias de `-r install`           |
| `pnpm recursive build`   | Alias de `-r build`             |

---

# 🏗️ FILTRADO DE WORKSPACES

| Comando                     | ¿Qué hace?                     |
| --------------------------- | ------------------------------ |
| `pnpm --filter app dev`     | Ejecuta script en un workspace |
| `pnpm --filter app build`   | Build de un workspace          |
| `pnpm --filter app test`    | Tests de un workspace          |
| `pnpm --filter app install` | Instala en workspace           |

---

# 🔗 LINKING

| Comando             | ¿Qué hace?            |
| ------------------- | --------------------- |
| `pnpm link`         | Crear enlace global   |
| `pnpm unlink`       | Eliminar enlace       |
| `pnpm link package` | Enlazar paquete local |

---

# 🚀 EJECUTAR PAQUETES SIN INSTALAR

| Comando                | ¿Qué hace?                |
| ---------------------- | ------------------------- |
| `pnpm dlx vite`        | Ejecuta Vite sin instalar |
| `pnpm dlx create-vite` | Crear proyecto            |
| `pnpm dlx cowsay hola` | Ejecutar paquete temporal |

---

# 📦 PUBLICAR PAQUETES

| Comando                   | ¿Qué hace?      |
| ------------------------- | --------------- |
| `pnpm version`            | Cambia versión  |
| `pnpm publish`            | Publica paquete |
| `pnpm publish --tag beta` | Publica beta    |
| `pnpm pack`               | Genera `.tgz`   |

---

# 🔍 DEPURACIÓN

| Comando            | ¿Qué hace?                        |
| ------------------ | --------------------------------- |
| `pnpm doctor`      | Diagnóstico del entorno           |
| `pnpm audit`       | Auditoría de seguridad            |
| `pnpm audit --fix` | Intenta corregir vulnerabilidades |

---

# 📂 IMPORTAR DESDE OTROS GESTORES

| Comando       | ¿Qué hace?                  |
| ------------- | --------------------------- |
| `pnpm import` | Convierte package-lock.json |
| `pnpm import` | Convierte yarn.lock         |
| `pnpm import` | Genera pnpm-lock.yaml       |

---

# ⚡ EQUIVALENCIAS NPM ↔ YARN ↔ PNPM

| npm                   | Yarn                | PNPM                |
| --------------------- | ------------------- | ------------------- |
| `npm install`         | `yarn`              | `pnpm install`      |
| `npm install axios`   | `yarn add axios`    | `pnpm add axios`    |
| `npm uninstall axios` | `yarn remove axios` | `pnpm remove axios` |
| `npm update`          | `yarn upgrade`      | `pnpm update`       |
| `npm run dev`         | `yarn dev`          | `pnpm dev`          |
| `npm list`            | `yarn list`         | `pnpm list`         |
| `npm audit`           | `yarn audit`        | `pnpm audit`        |
| `npx vite`            | `yarn dlx vite`     | `pnpm dlx vite`     |

---

# 🎯 COMANDOS QUE MÁS USARÁS

| Prioridad | Comando            | Frecuencia          |
| --------- | ------------------ | ------------------- |
| 🥇        | `pnpm install`     | Todos los proyectos |
| 🥇        | `pnpm add`         | Muy frecuente       |
| 🥇        | `pnpm remove`      | Muy frecuente       |
| 🥇        | `pnpm dev`         | Diario              |
| 🥇        | `pnpm build`       | Diario              |
| 🥇        | `pnpm test`        | Muy frecuente       |
| 🥈        | `pnpm update`      | Regular             |
| 🥈        | `pnpm outdated`    | Regular             |
| 🥈        | `pnpm why`         | Debugging           |
| 🥈        | `pnpm store prune` | Mantenimiento       |
| 🥉        | `pnpm link`        | Avanzado            |
| 🥉        | `pnpm publish`     | Librerías           |
| 🥉        | `pnpm --filter`    | Monorepos           |
| 🥉        | `pnpm dlx`         | Utilidades          |

---

# 🏆 Flujo diario típico con PNPM

```text
pnpm install
      ↓
pnpm add paquete
      ↓
pnpm dev
      ↓
pnpm test
      ↓
pnpm build
      ↓
pnpm update
```

💡 **Regla mental rápida:**

* **npm** → instala dependencias.
* **Yarn** → instala dependencias más rápido.
* **PNPM** → instala dependencias reutilizando todo lo posible y ahorrando espacio.

Y en el día a día, el **90% del tiempo** vivirás entre:

```bash
pnpm install
pnpm add
pnpm remove
pnpm dev
pnpm test
pnpm build
pnpm update
```
