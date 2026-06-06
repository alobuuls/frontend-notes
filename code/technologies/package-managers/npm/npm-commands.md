# 📘 NPM — COMANDOS ESENCIALES

> [!NOTE]
> **NPM (Node Package Manager)** es el gestor de paquetes de Node.js.
>
> Permite:
>
> * Instalar librerías
> * Gestionar dependencias
> * Ejecutar scripts
> * Crear y publicar proyectos
> * Versionar aplicaciones

> [!IMPORTANT]
> NPM es una herramienta fundamental en cualquier proyecto moderno de JavaScript.

---

## 🟢 Comandos básicos

| Comando   | Descripción                   |
| --------- | ----------------------------- |
| `npm -v`  | Muestra la versión de npm     |
| `node -v` | Muestra la versión de Node.js |

### Ejemplo

```bash
npm -v
node -v
```

---

## 🔵 Iniciar proyectos

| Comando       | Descripción                                    |
| ------------- | ---------------------------------------------- |
| `npm init`    | Crea un proyecto interactivo                   |
| `npm init -y` | Crea un proyecto con configuración por defecto |

### Ejemplo

```bash
npm init -y
```

> [!TIP]
> El flag `-y` responde automáticamente todas las preguntas usando valores por defecto.

---

## 🟣 Instalar dependencias

| Comando       | Descripción          |
| ------------- | -------------------- |
| `npm install` | Instala dependencias |
| `npm i`       | Alias corto          |

### Ejemplo

```bash
npm install
npm i
```

---

## 🟡 Instalar paquetes

| Comando               | Descripción             |
| --------------------- | ----------------------- |
| `npm install paquete` | Instala una dependencia |
| `npm i paquete`       | Forma corta             |

### Ejemplo

```bash
npm i rxjs
```

---

## 🟠 Dev Dependencies

| Comando                    | Descripción               |
| -------------------------- | ------------------------- |
| `npm i paquete -D`         | Dependencia de desarrollo |
| `npm i paquete --save-dev` | Equivalente               |

### Ejemplo

```bash
npm i vite -D
```

> [!NOTE]
> Las dependencias de desarrollo no se instalan en producción.

---

## 🔴 Instalar una versión específica

| Comando                 | Descripción                  |
| ----------------------- | ---------------------------- |
| `npm i paquete@version` | Instala una versión concreta |

### Ejemplo

```bash
npm i rxjs@6.6.0
```

---

## ⚫ Desinstalar paquetes

| Comando                 | Descripción             |
| ----------------------- | ----------------------- |
| `npm uninstall paquete` | Elimina una dependencia |
| `npm un paquete`        | Alias corto             |

### Ejemplo

```bash
npm uninstall rxjs
```

---

## ⚪ Actualizar dependencias

| Comando      | Descripción                       |
| ------------ | --------------------------------- |
| `npm update` | Actualiza dependencias permitidas |

### Ejemplo

```bash
npm update
```

---

## 🟤 Scripts

> [!NOTE]
> Los scripts permiten ejecutar comandos definidos dentro de `package.json`.

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

### Ejecutar scripts

| Comando          | Descripción                     |
| ---------------- | ------------------------------- |
| `npm run script` | Ejecuta un script personalizado |

```bash
npm run dev
npm run build
npm run test
```

### Scripts especiales

| Comando     | Ejecuta |
| ----------- | ------- |
| `npm start` | start   |
| `npm test`  | test    |

---

## 🟢 Información del proyecto

| Comando              | Descripción                   |
| -------------------- | ----------------------------- |
| `npm list`           | Lista dependencias            |
| `npm list --depth=0` | Solo dependencias principales |

### Ejemplo

```bash
npm list --depth=0
```

---

## 🔵 Información de paquetes

| Comando            | Descripción             |
| ------------------ | ----------------------- |
| `npm view paquete` | Información del paquete |
| `npm info paquete` | Alias                   |

### Ejemplo

```bash
npm view rxjs
```

---

## 🟣 Buscar paquetes

| Comando              | Descripción    |
| -------------------- | -------------- |
| `npm search palabra` | Busca paquetes |

### Ejemplo

```bash
npm search alerts
```

---

## ⚫ Limpiar caché

| Comando                   | Descripción     |
| ------------------------- | --------------- |
| `npm cache clean --force` | Limpia la caché |

### Ejemplo

```bash
npm cache clean --force
```

> [!WARNING]
> Usa `--force` únicamente cuando sea necesario.

---

## 🟠 Seguridad

| Comando         | Descripción                       |
| --------------- | --------------------------------- |
| `npm audit`     | Detecta vulnerabilidades          |
| `npm audit fix` | Corrige problemas automáticamente |

### Ejemplo

```bash
npm audit
npm audit fix
```

> [!IMPORTANT]
> Ejecuta auditorías regularmente para detectar dependencias vulnerables.

---

## 🔴 Versionado

> [!NOTE]
> NPM utiliza **Semantic Versioning (SemVer)**.

```text
MAJOR.MINOR.PATCH
```

| Comando             | Cambio                |
| ------------------- | --------------------- |
| `npm version patch` | Corrección de errores |
| `npm version minor` | Nueva funcionalidad   |
| `npm version major` | Cambio incompatible   |

### Ejemplo

```bash
npm version patch
```

---

## 🟣 Publicar librerías

| Comando       | Descripción        |
| ------------- | ------------------ |
| `npm login`   | Iniciar sesión     |
| `npm whoami`  | Ver usuario actual |
| `npm publish` | Publicar paquete   |

### Ejemplo

```bash
npm publish
```

> [!TIP]
> Antes de publicar utiliza:

```bash
npm publish --dry-run
```

para verificar qué archivos serán enviados.

---

## 🧠 Flujo típico de publicación

```bash
npm install
npm run build
npm version patch
git push
npm publish
```

---

## ⚡ Dependencias vs DevDependencies

| Tipo              | Uso        |
| ----------------- | ---------- |
| `dependencies`    | Producción |
| `devDependencies` | Desarrollo |

> [!IMPORTANT]
> Todo lo necesario para ejecutar la aplicación debe ir en `dependencies`.

---

## ✅ Buenas prácticas

> [!TIP]
>
> * Usa `npm init -y` para iniciar rápidamente.
> * Instala herramientas con `-D`.
> * Ejecuta `npm audit` regularmente.
> * Sigue Semantic Versioning.
> * Verifica publicaciones con `npm publish --dry-run`.

---

# ✨ Resumen

> [!IMPORTANT]
> NPM es la base del ecosistema Node.js.

| Acción                | Comando         |
| --------------------- | --------------- |
| Crear proyecto        | `npm init`      |
| Instalar dependencias | `npm install`   |
| Ejecutar scripts      | `npm run`       |
| Eliminar paquetes     | `npm uninstall` |
| Versionar             | `npm version`   |
| Publicar              | `npm publish`   |
| Seguridad             | `npm audit`     |


# 📘 NPM — Tabla Completa de Comandos

> [!NOTE]
> NPM (Node Package Manager) es el gestor de paquetes de Node.js y la herramienta principal para administrar dependencias, scripts y publicaciones.

---

## 🚀 Nivel 1 — Más usados (día a día)

> [!IMPORTANT]
> Estos son los comandos que usarás prácticamente todos los días.

| Comando                 | Qué hace                      | Uso                   |
| ----------------------- | ----------------------------- | --------------------- |
| `npm init -y`           | Crea proyecto rápido          | Inicio de proyectos   |
| `npm install` / `npm i` | Instala dependencias          | Base de todo proyecto |
| `npm i paquete`         | Instala librería              | `npm i rxjs`          |
| `npm i paquete -D`      | Dev Dependency                | Vite, ESLint          |
| `npm uninstall paquete` | Elimina paquete               | Limpieza              |
| `npm run dev`           | Ejecuta entorno de desarrollo | Angular, Vite         |
| `npm run build`         | Genera build                  | Producción            |
| `npm run test`          | Ejecuta tests                 | QA                    |
| `npm audit`             | Revisa vulnerabilidades       | Seguridad             |
| `npm update`            | Actualiza dependencias        | Mantenimiento         |

---

## 🧩 Nivel 2 — Gestión de proyecto

> [!TIP]
> Muy útiles para mantenimiento y automatización.

| Comando              | Qué hace                      | Uso                      |
| -------------------- | ----------------------------- | ------------------------ |
| `npm init`           | Configuración interactiva     | Proyectos personalizados |
| `npm list`           | Lista dependencias            | Debugging                |
| `npm list --depth=0` | Solo dependencias principales | Auditoría rápida         |
| `npm ci`             | Instalación limpia            | CI/CD                    |
| `npm rebuild`        | Recompila binarios nativos    | Dependencias nativas     |
| `npm prune`          | Elimina paquetes sobrantes    | Limpieza                 |

---

## 📦 Nivel 3 — Instalación avanzada

> [!WARNING]
> Algunos flags pueden generar incompatibilidades si se usan incorrectamente.

| Comando                    | Qué hace                      | Uso                   |
| -------------------------- | ----------------------------- | --------------------- |
| `npm i paquete@version`    | Instala versión específica    | Control de versiones  |
| `npm i -g paquete`         | Instalación global            | CLI Tools             |
| `npm i --save-exact`       | Fija versión exacta           | Estabilidad           |
| `npm i --force`            | Fuerza instalación            | Resolver conflictos   |
| `npm i --legacy-peer-deps` | Ignora Peer Dependencies      | Fixes Angular / React |
| `npm i --production`       | Solo dependencias productivas | Deploy                |

---

## ⚙️ Nivel 4 — Scripts

> [!NOTE]
> Los scripts se definen dentro de `package.json`.

| Comando            | Qué hace                     | Uso        |
| ------------------ | ---------------------------- | ---------- |
| `npm run <script>` | Ejecuta script personalizado | Tooling    |
| `npm start`        | Ejecuta script start         | Apps Node  |
| `npm test`         | Ejecuta script test          | Testing    |
| `npm run build`    | Build de aplicación          | Producción |
| `npm run lint`     | Análisis de código           | Calidad    |

### Ejemplo

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "test": "vitest"
  }
}
```

---

## 🔐 Nivel 5 — Seguridad

> [!IMPORTANT]
> Ejecuta auditorías regularmente para detectar vulnerabilidades.

| Comando                 | Qué hace                 | Uso            |
| ----------------------- | ------------------------ | -------------- |
| `npm audit`             | Detecta vulnerabilidades | Seguridad      |
| `npm audit fix`         | Corrige automáticamente  | Mantenimiento  |
| `npm audit fix --force` | Fuerza correcciones      | Último recurso |

---

## 📊 Nivel 6 — Información

| Comando            | Qué hace                     | Uso           |
| ------------------ | ---------------------------- | ------------- |
| `npm view paquete` | Información detallada        | Investigación |
| `npm info paquete` | Alias de view                | Documentación |
| `npm outdated`     | Dependencias desactualizadas | Mantenimiento |
| `npm config list`  | Configuración actual         | Debug         |

---

## 🧼 Nivel 7 — Limpieza

> [!TIP]
> Útiles cuando aparecen errores extraños relacionados con dependencias.

| Comando                   | Qué hace                       | Uso             |
| ------------------------- | ------------------------------ | --------------- |
| `npm cache clean --force` | Limpia caché                   | Problemas raros |
| `npm prune`               | Elimina dependencias sobrantes | Optimización    |

---

## 🌍 Nivel 8 — Publicación de librerías

> [!IMPORTANT]
> Utiliza Semantic Versioning (SemVer) antes de publicar.

| Comando             | Qué hace               | Uso          |
| ------------------- | ---------------------- | ------------ |
| `npm login`         | Inicia sesión          | Publicación  |
| `npm whoami`        | Usuario actual         | Verificación |
| `npm publish`       | Publica paquete        | Releases     |
| `npm version patch` | Bug fixes              | SemVer       |
| `npm version minor` | Nuevas funcionalidades | SemVer       |
| `npm version major` | Breaking changes       | SemVer       |

### Flujo típico

```bash
npm install
npm run build
npm version patch
git push
npm publish
```

---

## 🧪 Nivel 9 — Debug y diagnóstico

> [!TIP]
> Comandos poco conocidos pero muy útiles para troubleshooting.

| Comando               | Qué hace                        | Uso           |
| --------------------- | ------------------------------- | ------------- |
| `npm doctor`          | Analiza el entorno NPM          | Diagnóstico   |
| `npm ping`            | Verifica conexión al registry   | Red           |
| `npm explore paquete` | Entra al directorio del paquete | Debug interno |

---

## 📁 Nivel 10 — Utilidades poco usadas

| Comando          | Qué hace                            |
| ---------------- | ----------------------------------- |
| `npm link`       | Conecta paquetes localmente         |
| `npm unlink`     | Elimina enlaces locales             |
| `npm dedupe`     | Elimina dependencias duplicadas     |
| `npm shrinkwrap` | Bloquea versiones instaladas        |
| `npm pack`       | Genera un tarball (`.tgz`)          |
| `npm root`       | Muestra ubicación de `node_modules` |

---

# ⚡ Cheatsheet rápida

> [!SUCCESS]
> Los 10 comandos que más debes recordar:

```bash
npm init -y
npm install
npm i paquete
npm i paquete -D
npm uninstall paquete
npm run dev
npm run build
npm audit
npm update
npm publish
```

---

# ✨ Resumen

> [!IMPORTANT]
>
> **Nivel 1 → Uso diario**
>
> **Nivel 2-4 → Gestión del proyecto**
>
> **Nivel 5 → Seguridad**
>
> **Nivel 6-7 → Información y mantenimiento**
>
> **Nivel 8 → Publicación**
>
> **Nivel 9-10 → Diagnóstico y herramientas avanzadas**
