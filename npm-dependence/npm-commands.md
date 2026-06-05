# 📘 NPM — COMANDOS Y FLAGS MÁS IMPORTANTES

## 🧠 ¿Qué es NPM?

**NPM (Node Package Manager)** es el gestor de paquetes de Node.js.

👉 Permite:

- Instalar librerías
- Publicar paquetes
- Gestionar dependencias
- Ejecutar scripts
- Versionar proyectos

🎯 Es una de las herramientas más importantes del ecosistema JavaScript.

---

# 📘 🟢 COMANDOS BÁSICOS

| Comando | Descripción |
|----------|-------------|
| `npm -v` | Muestra la versión de npm instalada |
| `node -v` | Muestra la versión de Node.js |

## 💡 Ejemplos

```bash
npm -v
```

```bash
node -v
```

> [!TIP]
> Antes de instalar cualquier proyecto, verifica siempre las versiones de Node.js y npm para evitar problemas de compatibilidad.

---

# 📘 🔵 INICIALIZAR PROYECTOS

## 🧠 Crear un proyecto npm

| Comando | Descripción |
|----------|-------------|
| `npm init` | Crea un `package.json` interactivo |
| `npm init -y` | Crea un `package.json` automáticamente usando valores por defecto |

## 💡 Ejemplos

### npm init

```bash
npm init
```

### npm init -y

```bash
npm init -y
```

👉 Usa valores por defecto.

---

# 📘 🟣 INSTALAR DEPENDENCIAS

## 🧠 Instalar todas las dependencias del proyecto

| Comando | Descripción |
|----------|-------------|
| `npm install` | Instala todas las dependencias definidas en `package.json` |
| `npm i` | Versión corta de `npm install` |

## 💡 Ejemplos

### npm install

```bash
npm install
```

### npm i

```bash
npm i
```

---

# 📘 🟡 INSTALAR UN PAQUETE

## 🧠 Instalar una dependencia

| Comando | Descripción |
|----------|-------------|
| `npm install paquete` | Instala una dependencia |
| `npm i paquete` | Forma corta |

## 💡 Ejemplo

### npm install rxjs

```bash
npm install rxjs
```

### npm i rxjs

```bash
npm i rxjs
```

---

# 📘 NPM — COMANDOS Y FLAGS MÁS IMPORTANTES

> 🧠 NPM (Node Package Manager) es el gestor de paquetes de Node.js

👉 Permite:

- Instalar librerías
- Publicar paquetes
- Gestionar dependencias
- Ejecutar scripts
- Versionar proyectos

🎯 Es una de las herramientas más importantes del ecosistema JavaScript

---

# 🟢 COMANDOS BÁSICOS

| Comando | Descripción |
|----------|-------------|
| `npm -v` | 🧠 Muestra la versión de npm instalada |
| `node -v` | 🧠 Muestra la versión de Node.js |

💡 Ejemplos

```bash
npm -v
```

```bash
node -v
```

---

# 🔵 INICIALIZAR PROYECTOS

| Comando | Descripción |
|----------|-------------|
| `npm init` | 🧠 Crea un package.json interactivo |
| `npm init -y` | 🧠 Crea package.json automáticamente |

👉 Usa valores por defecto

💡 Ejemplos

```bash
npm init
```

```bash
npm init -y
```

---

# 🟣 INSTALAR DEPENDENCIAS

| Comando | Descripción |
|----------|-------------|
| `npm install` | 🧠 Instala todas las dependencias del package.json |
| `npm i` | 🧠 Versión corta de install |

💡 Ejemplos

```bash
npm install
```

```bash
npm i
```

---

# 🟡 INSTALAR UN PAQUETE

| Comando | Descripción |
|----------|-------------|
| `npm install paquete` | 🧠 Instala una dependencia |
| `npm i paquete` | 🧠 Forma corta |

💡 Ejemplos

```bash
npm install rxjs
```

```bash
npm i rxjs
```

---

# 🟠 DEV DEPENDENCIES

| Comando | Descripción |
|----------|-------------|
| `npm install paquete -D` | 🧠 Instala dependencias de desarrollo |
| `npm install paquete --save-dev` | 🧠 Equivalente a `-D` |

💡 Ejemplos

```bash
npm i vite -D
```

```bash
npm i vitest -D
```

```bash
npm i eslint -D
```

👉 No se usan en producción

---

# 🔴 INSTALAR VERSIÓN ESPECÍFICA

| Comando | Descripción |
|----------|-------------|
| `npm install paquete@version` | 🧠 Instala una versión específica |

💡 Ejemplos

```bash
npm i angular@12
```

```bash
npm i rxjs@6.6.0
```

---

# ⚫ DESINSTALAR

| Comando | Descripción |
|----------|-------------|
| `npm uninstall paquete` | 🧠 Elimina una dependencia |
| `npm un paquete` | 🧠 Forma corta |

💡 Ejemplos

```bash
npm uninstall rxjs
```

```bash
npm un rxjs
```

---

# ⚪ ACTUALIZAR PAQUETES

| Comando | Descripción |
|----------|-------------|
| `npm update` | 🧠 Actualiza dependencias permitidas |

💡 Ejemplo

```bash
npm update
```

---

# 🟤 EJECUTAR SCRIPTS

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

### Comando general

| Comando | Descripción |
|----------|-------------|
| `npm run script` | 🧠 Ejecuta scripts definidos en package.json |

💡 Ejemplos

```bash
npm run build
```

```bash
npm run dev
```

```bash
npm run test
```

---

# 🟢 SCRIPTS ESPECIALES

> No requieren `run`

| Comando | Ejecuta |
|----------|----------|
| `npm start` | `"start"` |
| `npm test` | `"test"` |

💡 Ejemplos

```bash
npm start
```

```bash
npm test
```

---

> [!TIP]
> 🚀 La mayoría de desarrolladores usan diariamente:
>
> `npm install`
>
> `npm i paquete`
>
> `npm i paquete -D`
>
> `npm run dev`
>
> `npm run build`
>
> `npm run test`

# 📘 🔵 COMANDOS DE VERSIONADO

> 🧠 Modifican automáticamente `package.json`

| Comando | Cambio | Uso |
|----------|----------|----------|
| `npm version patch` | `1.0.0 → 1.0.1` | ✔ Fixes<br>✔ Bugs |
| `npm version minor` | `1.0.0 → 1.1.0` | ✔ Nuevas funcionalidades |
| `npm version major` | `1.0.0 → 2.0.0` | ✔ Breaking changes |

---

### 📌 npm version patch

```text
1.0.0
   ↓
1.0.1
```

✔ Fixes  
✔ Bugs

---

### 📌 npm version minor

```text
1.0.0
   ↓
1.1.0
```

✔ Nuevas funcionalidades

---

### 📌 npm version major

```text
1.0.0
   ↓
2.0.0
```

✔ Breaking changes

---

# 📘 🟣 PUBLICAR LIBRERÍAS

| Comando | Descripción |
|----------|-------------|
| `npm login` | 🧠 Inicia sesión en npm |
| `npm whoami` | 🧠 Muestra el usuario actual |
| `npm publish` | 🧠 Publica el paquete |

### 📌 npm login

💡 Ejemplo

```bash
npm login
```

---

### 📌 npm whoami

💡 Ejemplo

```bash
npm whoami
```

---

### 📌 npm publish

💡 Ejemplo

```bash
npm publish
```

---

# 📘 🟡 RELEASES

### Flujo típico

```text
npm run build
        ↓
npm version patch
        ↓
git push
        ↓
npm publish
```

---

# 📘 🟠 INFORMACIÓN DEL PROYECTO

| Comando | Descripción |
|----------|-------------|
| `npm list` | 🧠 Lista dependencias instaladas |
| `npm list --depth=0` | 🧠 Solo dependencias principales |

### 📌 npm list

💡 Ejemplo

```bash
npm list
```

---

### 📌 npm list --depth=0

🧠 Solo dependencias principales

```bash
npm list --depth=0
```

---

# 📘 🔴 INFORMACIÓN DE PAQUETES

| Comando | Descripción |
|----------|-------------|
| `npm view paquete` | 🧠 Información de un paquete |
| `npm info paquete` | 🧠 Alias de view |

### 📌 npm view paquete

💡 Ejemplo

```bash
npm view rxjs
```

---

### 📌 npm info paquete

🧠 Alias de `view`

```bash
npm info rxjs
```

---

> [!TIP]
> 🚀 Antes de ejecutar `npm publish`, normalmente el flujo es:
>
> `npm run build`
>
> `npm version patch`
>
> `git push`
>
> `npm publish`

# 📘 ⚫ BUSCAR PAQUETES

| Comando | Descripción |
|----------|-------------|
| `npm search palabra` | 🧠 Busca paquetes relacionados con una palabra clave |

### 📌 npm search palabra

💡 Ejemplo

```bash
npm search alerts
```

---

# 📘 ⚪ LIMPIAR CACHE

| Comando | Descripción |
|----------|-------------|
| `npm cache clean --force` | 🧠 Limpia la caché de npm |

### 📌 npm cache clean --force

💡 Ejemplo

```bash
npm cache clean --force
```

---

# 📘 🟤 AUDITORÍA DE SEGURIDAD

| Comando | Descripción |
|----------|-------------|
| `npm audit` | 🧠 Busca vulnerabilidades |
| `npm audit fix` | 🧠 Intenta corregirlas automáticamente |

### 📌 npm audit

💡 Ejemplo

```bash
npm audit
```

---

### 📌 npm audit fix

🧠 Intenta corregirlas automáticamente

```bash
npm audit fix
```

---

# 📘 🟢 FLAGS MÁS IMPORTANTES

| Flag | Descripción | Ejemplo |
|--------|-------------|----------|
| `-y` | 👉 Responde "yes" automáticamente | `npm init -y` |
| `-D` | 👉 Dev Dependency | `npm i vite -D` |
| `-g` | 👉 Instalación global | `npm i @angular/cli -g` |
| `--save-exact` | 👉 Guarda versión exacta | `npm i rxjs --save-exact` |
| `--force` | 👉 Fuerza una acción | `npm cache clean --force` |
| `--production` | 👉 Instala solo dependencias de producción | `npm install --production` |

---

## 📌 -y

👉 Responde "yes" automáticamente

💡 Ejemplo

```bash
npm init -y
```

---

## 📌 -D

👉 Dev Dependency

💡 Ejemplo

```bash
npm i vite -D
```

---

## 📌 -g

👉 Instalación global

💡 Ejemplo

```bash
npm i @angular/cli -g
```

✔ Disponible en toda la máquina

---

## 📌 --save-exact

👉 Guarda versión exacta

💡 Ejemplo

```bash
npm i rxjs --save-exact
```

### package.json

```json
"rxjs": "6.6.0"
```

---

## 📌 --force

👉 Fuerza una acción

💡 Ejemplo

```bash
npm cache clean --force
```

---

## 📌 --production

👉 Instala solo dependencias de producción

💡 Ejemplo

```bash
npm install --production
```

---

> [!TIP]
> 🚀 Los flags que más se usan en el día a día suelen ser:
>
> `-y`
>
> `-D`
>
> `-g`
>
> `--save-exact`
>
> `--force`

## 📌 --dry-run

👉 Simula una acción

👉 No ejecuta cambios

💡 Ejemplo

```bash
npm publish --dry-run
```

---

# 📘 🟣 COMANDOS MÁS USADOS EN EL DÍA A DÍA

| Comando | Uso |
|----------|----------|
| `npm init -y` | Crear proyecto rápidamente |
| `npm install` | Instalar dependencias |
| `npm i paquete` | Instalar un paquete |
| `npm i paquete -D` | Instalar dependencia de desarrollo |
| `npm uninstall paquete` | Eliminar paquete |
| `npm run dev` | Ejecutar entorno de desarrollo |
| `npm run build` | Generar build |
| `npm run test` | Ejecutar tests |
| `npm version patch` | Incrementar versión PATCH |
| `npm publish` | Publicar librería |
| `npm audit` | Revisar vulnerabilidades |

---

# 📘 🟡 DIFERENCIA IMPORTANTE

| Tipo | Descripción | Ejemplos |
|--------|-------------|----------|
| `dependencies` | 🧠 Necesarias para ejecutar la aplicación | `rxjs`, `angular`, `free-alerts` |
| `devDependencies` | 🧠 Solo necesarias durante desarrollo | `vite`, `eslint`, `vitest`, `prettier` |

### dependencies

🧠 Necesarias para ejecutar la aplicación

#### Ejemplos

```text
rxjs
angular
free-alerts
```

---

### devDependencies

🧠 Solo necesarias durante desarrollo

#### Ejemplos

```text
vite
eslint
vitest
prettier
```

---

# ⚠️ BUENAS PRÁCTICAS

✔ Usa `npm init -y` para empezar rápido

✔ Usa `-D` para herramientas de desarrollo

✔ Ejecuta `npm audit` regularmente

✔ Usa semantic versioning

✔ Prueba `npm publish --dry-run` antes de publicar

✔ Mantén actualizado `package.json`

---

# ✨ RESUMEN

> 🧠 NPM es el gestor de paquetes de JavaScript

| Comando | Función |
|----------|----------|
| `npm init` | Crear proyecto |
| `npm install` | Instalar dependencias |
| `npm uninstall` | Eliminar paquetes |
| `npm run` | Ejecutar scripts |
| `npm version` | Versionar releases |
| `npm publish` | Publicar librerías |
| `npm audit` | Revisar seguridad |

🚀 Dominar estos comandos es suficiente para trabajar cómodamente con la mayoría de proyectos JavaScript.

---

> [!TIP]
> Antes de publicar una librería, es común ejecutar:
>
> ```bash
> npm run build
> npm audit
> npm publish --dry-run
> npm publish
> ```
>
> Esto ayuda a detectar errores antes de que la publicación sea definitiva.