# 🚫🎨 📘 .prettierignore

🧠 El archivo **.prettierignore** sirve para decirle a Prettier qué archivos o carpetas **NO** debe formatear.  

👉 Es básicamente un “filtro” de formato automático.

---

# 📌 🟢 ¿QUÉ ES .prettierignore?

🧠 Es un archivo de configuración donde defines rutas o patrones que Prettier debe ignorar.  

👉 Funciona igual que `.gitignore`, pero para formateo.

💡 Ejemplo simple:

```
node_modules
dist
build
```

> [!TIP]
> Úsalo para archivos que nunca quieres que Prettier toque, como dependencias o builds.

---

# 📌 🔵 ¿PARA QUÉ SIRVE?

🧠 Sirve para evitar que Prettier:

✔ formatee archivos innecesarios  
✔ rompa archivos generados automáticamente  
✔ toque código compilado  
✔ ralentice el formateo  

---

# 📌 🟣 ¿DÓNDE SE USA?

🧠 Se coloca en la raíz del proyecto:

```
project/
 ├── src/
 ├── .prettierrc
 └── .prettierignore
```

👉 Prettier lo detecta automáticamente.

---

# 📌 🟡 ¿POR QUÉ ES IMPORTANTE?

🧠 Porque hay archivos que **NO deben tocarse**:

- código compilado  
- dependencias  
- archivos generados  
- builds automáticos  

👉 Evita errores y mejora el rendimiento de Prettier.

---

# 📌 🔴 EJEMPLO COMPLETO

```gitignore
# Dependencias
node_modules/

# Builds
dist/
build/
out/

# Logs
*.log

# Coverage tests
coverage/

# Archivos de sistema
.DS_Store

# Archivos generados
*.min.js
*.map
```

---

# 📌 ⚫ PATRONES IMPORTANTES

## 📁 Carpetas
```
dist/
node_modules/
```
👉 Ignora toda la carpeta.

## 📄 Archivos específicos
```
*.min.js
*.map
```
👉 Ignora todos los archivos que coincidan con el patrón.

## 🧩 Regex tipo glob
```
**/*.generated.js
```
👉 Ignora archivos generados en cualquier subcarpeta.

> [!TIP]
> Usa glob patterns para ignorar automáticamente todos los archivos generados por tu build o herramientas de CI/CD.

---

# 📌 🧠 CASOS DE USO REALES

✔ Proyectos Angular / React  
✔ Librerías npm  
✔ Monorepos  
✔ CI/CD pipelines  
✔ Proyectos con build automático  

---

# 📌 🚀 BENEFICIOS

✔ Evita formatear código generado  
✔ Mejora rendimiento de Prettier  
✔ Evita conflictos en builds  
✔ Protege archivos críticos  
✔ Mantiene limpieza del repo  

---

# 📌 ⚠️ ERRORES COMUNES

❌ No ignorar `dist/`  
❌ Formatear `node_modules`  
❌ Olvidar archivos generados  
❌ Ignorar logs o cache innecesariamente  

---

# 📌 🧠 IDEA CLAVE

🧠 `.prettierignore` = “esto **NO se toca**”  

👉 Prettier solo formatea lo que realmente importa.

---

# ✨ RESUMEN

🧠 `.prettierignore` sirve para:

✔ Excluir archivos del formateo  
✔ Evitar errores en builds  
✔ Mejorar rendimiento  
✔ Mantener control del proyecto  

🚀 Es esencial en proyectos medianos y grandes donde hay archivos generados o compilados.


# 📘 🚫 .prettierignore — TABLA COMPLETA

---

## 📦 Dependencias

| Categoría | Patrón | Qué es | Por qué se ignora |
|------------|--------|--------|-------------------|
| 📦 Dependencias | `node_modules/` | Librerías instaladas | Nunca se formatean, son externas |
| 📦 Dependencias | `package-lock.json` | Lockfile npm | Controla versiones exactas |
| 📦 Dependencias | `yarn.lock` | Lockfile Yarn | Bloquea versiones |
| 📦 Dependencias | `pnpm-lock.yaml` | Lockfile PNPM | Control de dependencias |

---

## 🏗️ Build

| Categoría | Patrón | Qué es | Por qué se ignora |
|------------|--------|--------|-------------------|
| 🏗️ Build | `dist/` | Build final | Código compilado |
| 🏗️ Build | `build/` | Build de frameworks | React / Angular / Vite |
| 🏗️ Build | `out/` | Output generado | Archivos de producción |
| 🏗️ Build | `coverage/` | Reportes tests | No es código fuente |
| 🏗️ Build | `.cache/` | Caché de herramientas | Datos temporales |

---

## 📄 Generados

| Categoría | Patrón | Qué es | Por qué se ignora |
|------------|--------|--------|-------------------|
| 📄 Generados | `*.min.js` | JS minificado | Ya está optimizado |
| 📄 Generados | `*.min.css` | CSS minificado | No necesita formato |
| 📄 Generados | `*.map` | Source maps | Debug automático |
| 📄 Generados | `*.generated.*` | Archivos generados | No escritos a mano |

---

## 🪵 Logs

| Categoría | Patrón | Qué es | Por qué se ignora |
|------------|--------|--------|-------------------|
| 🪵 Logs | `*.log` | Logs del sistema | Solo debug |
| 🪵 Logs | `npm-debug.log*` | Logs npm | Errores temporales |
| 🪵 Logs | `yarn-error.log*` | Logs Yarn | Debug instalación |
| 🪵 Logs | `pnpm-debug.log*` | Logs PNPM | Debug |
| 🪵 Logs | `tmp/` | Temporales | Archivos efímeros |
| 🪵 Logs | `temp/` | Temporales | No permanentes |

---

## 🖥️ Sistema

| Categoría | Patrón | Qué es | Por qué se ignora |
|------------|--------|--------|-------------------|
| 🖥️ Sistema | `.DS_Store` | MacOS metadata | No es código |
| 🖥️ Sistema | `Thumbs.db` | Windows cache | Miniaturas |
| 🖥️ Sistema | `.desktop.ini` | Config Windows | Sistema operativo |

---

## ⚙️ IDE

| Categoría | Patrón | Qué es | Por qué se ignora |
|------------|--------|--------|-------------------|
| ⚙️ IDE | `.vscode/` | Config VS Code | Opcional / local |
| ⚙️ IDE | `.idea/` | JetBrains config | Local machine |
| ⚙️ IDE | `*.swp` | Vim temp files | Temporales |
| ⚙️ IDE | `*.swo` | Vim swap files | Temporales |

---

## 🌐 Frameworks

| Categoría | Patrón | Qué es | Por qué se ignora |
|------------|--------|--------|-------------------|
| 🌐 Frameworks | `.next/` | Next.js build | Output automático |
| 🌐 Frameworks | `.nuxt/` | Nuxt build | Generado |
| 🌐 Frameworks | `.angular/` | Cache Angular | Interno |
| 🌐 Frameworks | `.svelte-kit/` | Build SvelteKit | Generado |
| 🌐 Frameworks | `.vite/` | Cache Vite | Performance cache |

---

## 🧪 Testing

| Categoría | Patrón | Qué es | Por qué se ignora |
|------------|--------|--------|-------------------|
| 🧪 Testing | `jest-cache/` | Cache Jest | No necesario |
| 🧪 Testing | `cypress/videos/` | Videos tests | Evidencias |
| 🧪 Testing | `cypress/screenshots/` | Screenshots | Debug tests |

---

## 📦 Distribución

| Categoría | Patrón | Qué es | Por qué se ignora |
|------------|--------|--------|-------------------|
| 📦 Distribución | `*.tgz` | Paquete npm | Build empaquetado |
| 📦 Distribución | `*.tar` | Archivo comprimido | Release |

---

## 🔐 Seguridad

| Categoría | Patrón | Qué es | Por qué se ignora |
|------------|--------|--------|-------------------|
| 🔐 Seguridad | `.env` | Variables entorno | Sensible |
| 🔐 Seguridad | `.env.*` | Variantes env | dev/prod/test |
| 🔐 Seguridad | `secret.*` | Archivos secretos | Crítico |
| 🔐 Seguridad | `*.pem` | Certificados | Claves privadas |
| 🔐 Seguridad | `*.key` | Keys privadas | Seguridad |

---

## 🚀 Especiales

| Categoría | Patrón | Qué es | Por qué se ignora |
|------------|--------|--------|-------------------|
| 🚀 Especiales | `storybook-static/` | Storybook build | Output |
| 🚀 Especiales | `playwright-report/` | Reportes E2E | Debug tests |

---

# 🧠 RESUMEN RÁPIDO

🟢 `.prettierignore` evita formatear:

- dependencias  
- builds  
- logs  
- caches  
- archivos del sistema  
- archivos sensibles  
- outputs de frameworks  

---

# 💡 IDEA CLAVE

👉 “Solo se formatea el código fuente real, todo lo demás es generado o externo”