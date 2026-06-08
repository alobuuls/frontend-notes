# 📦 YARN — TEORÍA COMPLETA

## 🧠 ¿Qué es Yarn?

**Yarn** es un gestor de paquetes para JavaScript creado por Meta (antes Facebook).

Su trabajo principal es:

👉 **instalar, actualizar, eliminar y administrar dependencias** de un proyecto.

En otras palabras:

Yarn es una herramienta que ayuda a descargar y organizar librerías de forma automática.

Por ejemplo:

```bash
yarn add lodash
````

descarga:

```js
import _ from 'lodash';
```

sin que tengas que hacerlo manualmente.

---

# 🎯 ¿Para qué sirve Yarn?

Yarn existe para resolver problemas comunes en proyectos JavaScript:

| Acción                             | Comando                                 |
| ---------------------------------- | --------------------------------------- |
| 📥 Instalar dependencias           | `yarn add axios`                        |
| 🔄 Actualizar dependencias         | `yarn upgrade`                          |
| ❌ Eliminar dependencias            | `yarn remove axios`                     |
| ▶️ Ejecutar scripts                | `yarn dev`                              |
| 🔒 Mantener versiones consistentes | Mismas dependencias para todo el equipo |

---

# 🤔 ¿Por qué existe si ya existe npm?

Cuando Yarn apareció, npm tenía varios problemas:

❌ Instalaciones lentas

❌ Problemas de consistencia

❌ Dependencias instaladas de forma distinta entre máquinas

❌ Peor manejo de caché

Entonces Facebook creó Yarn para mejorar esa experiencia.

---

# 🆚 Yarn vs npm

| npm                        | Yarn                                   |
| -------------------------- | -------------------------------------- |
| Viene incluido con Node.js | Debe instalarse aparte (según versión) |
| `npm install`              | `yarn install`                         |

Actualmente:

📌 npm mejoró muchísimo

📌 Yarn sigue siendo muy popular

📌 Ambos son excelentes opciones

---

# 🧠 Idea Mental

```text
Proyecto
    ↓
Gestor de paquetes
    ↓
Descargar dependencias
    ↓
node_modules
```

Tanto npm como Yarn cumplen exactamente ese papel.

La diferencia está en cómo gestionan internamente las instalaciones, caché, rendimiento y bloqueo de versiones.

---

> [!TIP]
> 🎯 Regla rápida:
>
> * Si ves `package-lock.json`, normalmente el proyecto usa npm.
> * Si ves `yarn.lock`, normalmente el proyecto usa Yarn.
>
> Ambos pueden hacer prácticamente las mismas tareas.

```



# 🧠 ¿Qué es una dependencia?

Una dependencia es una librería que tu proyecto necesita.

### 💡 Ejemplo

```json
{
  "dependencies": {
    "axios": "^1.0.0"
  }
}
```

Sin esa dependencia:

```js
import axios from 'axios';
```

no funcionaría.

---

# 📦 ¿Qué archivos usa Yarn?

## 📄 package.json

Describe el proyecto.

### 💡 Ejemplo

```json
{
  "name": "mi-app",
  "version": "1.0.0"
}
```

### 📌 Información que suele contener

| Contenido |
|------------|
| Nombre |
| Versión |
| Scripts |
| Dependencias |
| Autor |
| Licencia |

---

## 🔒 yarn.lock

Uno de los archivos más importantes.

### 💡 Ejemplo

```text
axios@^1.7.0:
  version "1.7.2"
```

### Este archivo guarda

| Información |
|-------------|
| ✅ Versiones exactas |
| ✅ Árbol de dependencias |
| ✅ Resolución de paquetes |

---

# 🧠 ¿Para qué sirve yarn.lock?

Imagina:

Tú instalas:

```json
axios: ^1.7.0
```

Hoy npm/Yarn descarga:

```text
1.7.2
```

Pero mañana sale:

```text
1.7.8
```

Sin lockfile:

```text
cada desarrollador podría tener una versión diferente
```

Con:

```text
yarn.lock
```

todos instalan exactamente lo mismo.

---

## 📊 Resumen rápido

| Sin lockfile | Con lockfile |
|-------------|--------------|
| Versiones diferentes | Versiones idénticas |
| Posibles errores | Mayor estabilidad |
| Resultados inconsistentes | Resultados predecibles |

---

# ⚠️ ¿Debo subir yarn.lock a Git?

Sí.

Siempre.

| ✔ Recomendado |
|--------------|
| Se versiona |
| Se comparte |
| Garantiza instalaciones idénticas |

| ❌ Mala práctica |
|---------------|
| Ignorarlo en Git |

---

# 📦 node_modules

Cuando Yarn instala paquetes crea:

```text
node_modules/
```

Aquí viven todas las dependencias descargadas.

---

## 📌 ¿Se sube a Git?

No.

Normalmente:

```gitignore
node_modules/
```

### Motivos

| Razón |
|--------|
| Muy pesado |
| Se puede regenerar |
| Aumenta innecesariamente el repositorio |

---

# 🧠 ¿Cómo trabaja Yarn internamente?

## 🔄 Proceso simplificado

```text
package.json
      ↓
Yarn lee dependencias
      ↓
Consulta registro npm
      ↓
Descarga paquetes
      ↓
Genera node_modules
      ↓
Genera yarn.lock
```

---

## 📊 Flujo mental

| Paso | Acción |
|--------|---------|
| 1️⃣ | Lee `package.json` |
| 2️⃣ | Busca paquetes en el registro npm |
| 3️⃣ | Descarga dependencias |
| 4️⃣ | Crea `node_modules` |
| 5️⃣ | Genera o actualiza `yarn.lock` |

---

> [!TIP]
> Piensa en `package.json` como la **lista de compras** y en `yarn.lock` como el **ticket exacto de la compra realizada**. Gracias a eso, todos los desarrolladores terminan usando exactamente las mismas versiones.

# 📦 Registro de paquetes (Registry)

Por defecto Yarn descarga desde el registro de npm.

Es decir:

```bash
yarn add react
```

obtiene React del mismo lugar que:

```bash
npm install react
```

---

## 📌 Resumen

| Herramienta | Registro utilizado |
|------------|-------------------|
| npm | Registro de npm |
| Yarn | Registro de npm (por defecto) |

---

# 🏗️ Dependencias normales

Son necesarias en producción.

```json
{
  "dependencies": {
    "react": "^19.0.0"
  }
}
```

### 📌 Características

| Característica |
|---------------|
| Necesarias para ejecutar la aplicación |
| Se instalan en producción |
| Forman parte del producto final |

---

# 🧰 Dependencias de desarrollo

Solo sirven para desarrollar.

```json
{
  "devDependencies": {
    "typescript": "^5.0.0"
  }
}
```

### 💡 Ejemplos

| Herramienta |
|------------|
| TypeScript |
| ESLint |
| Prettier |
| Jest |
| Vitest |

### 📌 Características

| Característica |
|---------------|
| Solo se usan durante desarrollo |
| Ayudan a programar |
| No suelen ser necesarias en producción |

---

# 📦 Dependencias opcionales

No son obligatorias.

```json
{
  "optionalDependencies": {}
}
```

Si fallan al instalar:

✅ el proyecto sigue funcionando.

---

## 📌 Características

| Característica |
|---------------|
| No son críticas |
| Pueden fallar sin romper la instalación |
| Se usan para funcionalidades adicionales |

---

# 📦 Peer Dependencies

Indican:

> "Necesito que tengas instalada esta librería."

### 💡 Ejemplo

```json
{
  "peerDependencies": {
    "react": "^19.0.0"
  }
}
```

### 📌 Muy usadas en

| Tipo |
|--------|
| Librerías React |
| Librerías Angular |
| Plugins |
| Componentes reutilizables |

---

## 🧠 Idea mental

```text
Mi librería
      ↓
Necesita React
      ↓
Pero NO lo instala
      ↓
El usuario debe tener React instalado
```

---

# 🚀 Yarn Classic vs Yarn Modern

| Característica | Yarn Classic | Yarn Modern |
|---------------|-------------|-------------|
| Versión | 1.x | 2+ |
| Nombre alternativo | Classic | Berry |
| Compatibilidad | Muy alta | Alta |
| node_modules | Sí | Opcional |
| Plug'n'Play | No | Sí |
| Rendimiento | Bueno | Mejor |

---

## 📦 Yarn 1 (Classic)

```bash
1.x
```

La versión histórica.

Muy compatible.

Usa:

```text
node_modules
```

---

## 📦 Yarn 2+

También llamado:

```text
Berry
```

Incluye:

| Mejora |
|---------|
| Mejor rendimiento |
| Workspaces avanzados |
| Plug'n'Play (PnP) |
| Menos dependencias duplicadas |

---

# 🧠 ¿Qué es Plug'n'Play (PnP)?

Sistema moderno de Yarn.

En lugar de crear:

```text
node_modules/
```

usa un mapa interno de dependencias.

---

## 📊 Comparación

| node_modules | Plug'n'Play |
|-------------|------------|
| Miles de carpetas | Mapa interno |
| Más espacio en disco | Menos espacio |
| Instalación más lenta | Instalación más rápida |
| Resolución tradicional | Resolución estricta |

---

## ✅ Ventajas

| Ventaja |
|----------|
| Menos espacio |
| Instalaciones más rápidas |
| Resolución más estricta |

---

> [!TIP]
> Para la mayoría de proyectos actuales encontrarás dos escenarios: **npm + package-lock.json** o **Yarn + yarn.lock**. Los conceptos de dependencias, versionado y gestión de paquetes son prácticamente los mismos; lo que cambia principalmente es la herramienta utilizada para administrarlos.

# 📦 ¿Qué son los Workspaces?

Permiten manejar múltiples proyectos desde un mismo repositorio.

### 💡 Ejemplo

```text
repo/
├─ apps/
├─ packages/
└─ package.json
```

### 📌 Muy usados en

| Uso |
|------|
| Monorepos |
| Angular |
| React |
| Librerías compartidas |

---

## 🧠 Idea mental

```text
Un solo repositorio
        ↓
Varios proyectos
        ↓
Comparten dependencias
        ↓
Comparten configuración
```

---

# 🎯 ¿Cuándo usar Yarn?

## ✅ Buena opción cuando

| Situación |
|------------|
| Trabajas en equipos grandes |
| Usas monorepos |
| Quieres Workspaces potentes |
| Tu empresa ya usa Yarn |

---

## ✅ npm suele ser suficiente cuando

| Situación |
|------------|
| Proyectos pequeños |
| Proyectos personales |
| No necesitas características avanzadas |

---

# ⚖️ Yarn vs npm (visión moderna)

| Aspecto | Yarn | npm |
|----------|----------|----------|
| Incluido con Node | ❌ | ✅ |
| Lockfile | `yarn.lock` | `package-lock.json` |
| Workspaces | ✅ Excelente | ✅ Muy buenos |
| Monorepos | ✅ Muy popular | ✅ Compatible |
| Velocidad | ⚡ Muy rápida | ⚡ Muy rápida |
| Popularidad empresarial | ✅ Alta | ✅ Muy alta |
| Curva de aprendizaje | 🟢 Fácil | 🟢 Fácil |

---

# 💡 Ideas clave para recordar

## 📌 Yarn NO reemplaza JavaScript

Solo administra dependencias.

---

## 📌 Yarn NO reemplaza Node.js

Necesita Node.js para funcionar.

---

## 📌 Yarn y npm hacen prácticamente lo mismo

La diferencia está en:

| Diferencias principales |
|-------------------------|
| Experiencia de uso |
| Rendimiento |
| Workspaces |
| Características avanzadas |

---

## 📌 package.json describe

```text
Qué necesito
```

---

## 📌 yarn.lock congela

```text
Qué versión exacta se instaló
```

---

## 📌 node_modules contiene

```text
Lo que realmente fue descargado
```

---

# 📊 Relación entre los archivos

| Archivo | Función |
|----------|----------|
| `package.json` | Describe dependencias y configuración |
| `yarn.lock` | Guarda versiones exactas |
| `node_modules` | Contiene los paquetes instalados |

---

# 🏆 Resumen mental

```text
JavaScript
      ↓
Necesito librerías
      ↓
Yarn las administra
      ↓
package.json → qué quiero instalar
      ↓
yarn.lock → qué versión exacta se instaló
      ↓
node_modules → dónde quedaron instaladas
```

---

> [!TIP]
> Si ya entiendes **npm**, aprender **Yarn** es muy sencillo. La mayoría de los conceptos son exactamente los mismos: dependencias, versiones, lockfiles, scripts y publicación de paquetes. Lo que cambia principalmente son algunos comandos y características avanzadas como los **Workspaces**.

👉 Piensa en Yarn como el **administrador de dependencias** de tu proyecto: lee lo que necesitas, lo descarga, lo organiza y garantiza que todo el equipo use exactamente las mismas versiones.
