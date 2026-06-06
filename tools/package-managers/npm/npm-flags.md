# 📘 🟢 ¿QUÉ SON LOS FLAGS EN NPM?

🧠 Los flags en npm son opciones adicionales que se añaden a los comandos
para modificar su comportamiento.

👉 Se escriben con `-` o `--` después de un comando.

────────────────────────────────────────────────────────

# 📌 🧩 ¿PARA QUÉ SIRVEN?

Los flags sirven para:

✔ Automatizar procesos  
✔ Cambiar configuraciones del comando  
✔ Controlar instalación de dependencias  
✔ Ajustar publicación de paquetes  
✔ Mejorar debugging  
✔ Optimizar performance  

────────────────────────────────────────────────────────

# 📌 🧠 ¿POR QUÉ SON IMPORTANTES?

👉 Porque npm sin flags es limitado.

Con flags puedes:

- instalar más rápido
- evitar errores
- controlar versiones
- publicar librerías correctamente
- depurar problemas

────────────────────────────────────────────────────────

# 📌 ⚡ EJEMPLO SIMPLE

Sin flag:

```bash
npm init
```

👉 Te pregunta todo manualmente

Con flag:

```bash
npm init -y
```

👉 Lo hace automático

────────────────────────────────────────────────────────

# 📌 🧠 IDEA CLAVE

🧠 Los flags son “modificadores de comportamiento”

👉 No cambian lo que hace npm
👉 Cambian cómo lo hace

────────────────────────────────────────────────────────

# ✨ RESUMEN

🧠 Flags = opciones que modifican comandos npm

👉 Sirven para automatizar, controlar y optimizar procesos

🚀 Son esenciales para trabajar rápido y de forma profesional

# 📘 NPM — Tabla Completa de Flags

> [!NOTE]
> Los **flags** son opciones que modifican el comportamiento de los comandos `npm`.  
> Se agregan usando `-` o `--` y permiten: cambiar instalación, forzar acciones, optimizar producción, debuggear y publicar paquetes.

---

## 🚀 🟢 Flags más usados (día a día)

| Flag | Qué hace | Ejemplo |
|------|----------|---------|
| `-y` | Auto “yes” en init | `npm init -y` |
| `-D` | Dev dependency | `npm i vite -D` |
| `-g` | Instalación global | `npm i @angular/cli -g` |
| `--save-dev` | Dev dependency | `npm i eslint --save-dev` |
| `--save-exact` | Fija versión exacta | `npm i rxjs --save-exact` |
| `--production` | Solo deps de producción | `npm install --production` |
| `--force` | Fuerza ejecución | `npm cache clean --force` |

---

## ⚙️ 🟡 Flags intermedios (proyectos reales)

| Flag | Qué hace | Uso |
|------|----------|-----|
| `--legacy-peer-deps` | Ignora conflictos de dependencias | Angular / React |
| `--omit=dev` | Excluye devDependencies | Producción |
| `--no-save` | No guarda en package.json | Pruebas |
| `--dry-run` | Simula sin ejecutar | Publicación segura |
| `--ignore-scripts` | Evita scripts lifecycle | Seguridad |
| `--verbose` | Logs detallados | Debug |
| `--silent` | Oculta logs | Limpieza |
| `--prefer-offline` | Usa cache local | Velocidad |
| `--no-audit` | Desactiva auditoría | Performance |
| `--no-fund` | Oculta funding messages | Consola limpia |

---

## 🧪 📦 Flags de instalación

| Flag | Qué hace | Ejemplo |
|------|----------|---------|
| `--save-prod` | Instala en dependencies | `npm i rxjs --save-prod` |
| `--save-optional` | Dependencias opcionales | `npm i paquete --save-optional` |
| `--global-style` | Instala estilo global | Tooling avanzado |
| `--no-package-lock` | No crea `package-lock.json` | `npm install --no-package-lock` |
| `--package-lock-only` | Solo actualiza lockfile | CI/CD |

---

## 🔐 📊 Flags de seguridad y auditoría

| Flag | Qué hace |
|------|----------|
| `--audit` | Activa auditoría |
| `--no-audit` | Desactiva auditoría |
| `--audit-level=low\|moderate\|high` | Filtra nivel de severidad |
| `--force` | Fuerza fixes de vulnerabilidades |

💡 Ejemplo:  
```bash
npm audit --audit-level=high
```
---

# 🚀 📦 FLAGS DE PUBLICACIÓN (LIBRERÍAS)

| Flag | Qué hace |
|--------|----------|
| `--dry-run` | simula publish |
| `--access public` | publica paquete público |
| `--access restricted` | privado |
| `--tag beta` | etiqueta versión |
| `--otp` | autenticación 2FA |
| `--ignore-scripts` | evita scripts en publish |

> 💡 **Ejemplo**

```bash
npm publish --dry-run
npm publish --tag beta
```

---

# ⚡ 🧠 FLAGS DE PERFORMANCE

| Flag | Qué hace |
|--------|----------|
| `--prefer-offline` | usa cache local |
| `--prefer-online` | fuerza internet |
| `--no-progress` | oculta barra progreso |
| `--progress=false` | desactiva progreso |
| `--fetch-retries` | número de intentos |
| `--fetch-retry-mintimeout` | timeout mínimo |

---

# 🧪 🔍 FLAGS DE DEBUG

| Flag | Qué hace |
|--------|----------|
| `--verbose` | logs completos |
| `--loglevel=silent` | sin logs |
| `--loglevel=error` | solo errores |
| `--loglevel=warn` | warnings |
| `--loglevel=info` | info |
| `--timing` | mide performance |

---

# 🧰 📁 FLAGS DE CONFIGURACIÓN

| Flag | Qué hace |
|--------|----------|
| `--registry` | cambia registry |
| `--userconfig` | usa config custom |
| `--cache` | ruta cache |
| `--prefix` | ruta instalación |
| `--workspace` | trabaja en monorepos |
| `--workspaces` | activa todos workspaces |

> 💡 **Ejemplo**

```bash
npm install --registry=https://registry.npmjs.org
```

---

# 📊 🟣 TABLA GENERAL RESUMIDA

| Categoría | Flags |
|------------|--------|
| Básicos | `-y`, `-D`, `-g`, `--save-exact`, `--production` |
| Instalación | `--omit=dev`, `--no-save`, `--legacy-peer-deps` |
| Seguridad | `--audit`, `--no-audit`, `--audit-level` |
| Publicación | `--dry-run`, `--access`, `--tag` |
| Performance | `--prefer-offline`, `--no-progress` |
| Debug | `--verbose`, `--loglevel` |
| Config | `--registry`, `--cache`, `--workspace` |

---

# 🧠 USO REAL EN PROYECTOS

## 🚀 Instalación moderna

```bash
npm install --legacy-peer-deps --omit=dev
```

## 🚀 Publicación segura

```bash
npm run build
npm version patch
npm publish --dry-run
npm publish --tag latest
```

## 🚀 CI/CD optimizado

```bash
npm ci --omit=dev --no-audit --prefer-offline
```

---

# ⚠️ BUENAS PRÁCTICAS

> ✔ Usa `-D` siempre para dev tools  
> ✔ Usa `--legacy-peer-deps` solo cuando sea necesario  
> ✔ Usa `--dry-run` antes de publicar  
> ✔ Evita `--force` salvo emergencia  
> ✔ Usa `--omit=dev` en producción  
> ✔ Usa `npm ci` en CI/CD

---

# ✨ RESUMEN

> 🧠 Los flags controlan cómo npm ejecuta comandos

## 🔥 MÁS IMPORTANTES

- `-y`
- `-D`
- `-g`
- `--save-exact`
- `--legacy-peer-deps`
- `--dry-run`
- `--production`
- `--omit=dev`
- `--verbose`