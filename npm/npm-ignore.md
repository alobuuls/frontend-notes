# 📘 .NPMIGNORE — CONTROL DE PUBLICACIÓN EN NPM

## 🧠 ¿Qué es `.npmignore`?

`.npmignore` es un archivo que le dice a npm:

👉 **qué archivos NO deben incluirse cuando publicas un paquete**

🎯 Es como un `.gitignore`, pero para npm.

---

## 📦 ¿PARA QUÉ SIRVE?

Sirve para controlar el contenido final de tu librería publicada en npm.

👉 Evita subir:

* Código innecesario
* Archivos de desarrollo
* Tests
* Configuraciones locales
* Documentación interna
* Archivos pesados o sensibles

> [!TIP]
> Un paquete más pequeño se instala más rápido y ofrece una mejor experiencia a quienes lo consumen.

---

## ⚙️ ¿CÓMO FUNCIONA?

Cuando haces:

```bash
npm publish
```

npm:

1. Lee tu proyecto
2. Revisa `.npmignore`
3. Excluye lo que esté ahí
4. Publica solo lo permitido

---

## 📌 EJEMPLO BÁSICO

```gitignore
# .npmignore

node_modules
src
tests
*.log
*.spec.ts
.env
.vscode
dist/**/*.map
```

---

# 🚨 REGLA IMPORTANTE (MUY IMPORTANTE)

> [!WARNING]
> Si **NO tienes** `.npmignore`:
>
> 👉 npm usa automáticamente `.gitignore`

> [!CAUTION]
> Si **SÍ tienes** `.npmignore`:
>
> 👉 npm **IGNORA** `.gitignore` completamente

---

## 📦 CASO REAL EN LIBRERÍAS

### ❌ MAL (sin `.npmignore`)

Publicas:

* código fuente
* tests
* configs
* archivos innecesarios

👉 Resultado: paquete pesado y sucio

---

### ✅ BIEN (con `.npmignore`)

Publicas solo:

* `dist/`
* `README.md`
* `LICENSE`
* `package.json`

👉 Resultado: librería limpia y profesional

---

# 🚀 ¿QUÉ SE DEBERÍA PUBLICAR?

### ✔️ SOLO lo necesario

* `dist/` (build final)
* `README.md`
* `LICENSE`
* `package.json`
* `CHANGELOG.md` *(opcional)*

> [!NOTE]
> Todo archivo publicado debería aportar valor al consumidor de la librería.

---

# 🚫 ¿QUÉ DEBES IGNORAR?

## 🧱 Código de desarrollo

```text
src/
tests/
*.spec.*
*.test.*
```

---

## ⚙️ Configuración local

```text
.env
.vscode
.idea
*.log
```

---

## 📦 Dependencias

```text
node_modules
```

---

## 🧪 Archivos de build innecesarios

```text
*.map
coverage/
```

---

# 🔥 BUENAS PRÁCTICAS

✔ Publica SOLO `dist/` (no `src`)
✔ Siempre incluye `README.md`
✔ Usa `.npmignore` en librerías
✔ Revisa con `npm pack` antes de publicar
✔ Mantén el paquete lo más ligero posible
✔ Asegúrate de no subir secretos (`.env`)

> [!TIP]
> Mientras menos archivos publiques, menos superficie de mantenimiento tendrá tu paquete.

---

# 🧪 COMANDO CLAVE

## 📦 Simular lo que vas a publicar

```bash
npm pack
```

👉 Esto genera un `.tgz` con lo que realmente se publicará.

✔ Es la mejor forma de verificar `.npmignore`

> [!IMPORTANT]
> Antes de cada publicación ejecuta `npm pack` y revisa cuidadosamente el contenido generado.

---

# 🧠 RELACIÓN CON OTROS ARCHIVOS

| Archivo      | Función                        |
| ------------ | ------------------------------ |
| `.gitignore` | Ignora archivos en Git         |
| `.npmignore` | Ignora archivos en npm publish |

---

# ⚠️ ERROR COMÚN

### ❌ Confundir `.gitignore` con `.npmignore`

👉 Git ignora archivos del repo

👉 npm decide qué publicar

> [!WARNING]
> Un archivo ignorado por Git no necesariamente será ignorado por npm.

---

# 🚀 FLUJO PROFESIONAL DE PUBLICACIÓN

```bash
npm run build
npm pack
npm version patch
npm publish
```

> [!TIP]
> Este flujo ayuda a detectar errores antes de que lleguen al registro público.

---

# 📦 EJEMPLO REAL DE `.NPMIGNORE` (PRO)

```gitignore
# source
src/
tests/
*.spec.ts

# configs
.env
.vscode
.idea

# logs
*.log

# build artifacts (solo si no quieres publicarlos)
*.map
coverage/
```

---

# 🧠 IDEA CLAVE

> [!IMPORTANT]
> `.npmignore` no es para proteger Git.
>
> 👉 Es para definir el producto final de tu librería.

---

# ✨ RESUMEN

🧠 `.npmignore` controla qué archivos se publican en npm

### 🔥 Lo más importante

* Define qué entra al paquete final
* Evita archivos innecesarios
* Mejora performance y limpieza
* Es clave en librerías profesionales

---

# 🚀 REGLA FINAL

> [!SUCCESS]
> **"Lo que publicas en npm debe ser mínimo, limpio y usable."**

# 📘 `.npmignore` — TABLA DE REFERENCIA RÁPIDA

> 🧠 `.npmignore` le dice a npm qué archivos **NO debe incluir** cuando publicas un paquete con `npm publish`.

---

# 📦 ARCHIVOS Y CARPETAS MÁS COMUNES

| Regla | Qué ignora | ¿Por qué se ignora? |
|---------|------------|---------------------|
| `node_modules/` | Dependencias instaladas | npm las reinstala automáticamente |
| `dist/` | Build generado | A veces no quieres publicarlo |
| `build/` | Archivos compilados | Puede regenerarse |
| `coverage/` | Reportes de tests | No son necesarios para usuarios |
| `.cache/` | Cachés temporales | Solo sirven localmente |
| `tmp/` | Archivos temporales | No forman parte del paquete |
| `temp/` | Archivos temporales | No forman parte del paquete |
| `logs/` | Logs | Información innecesaria |
| `.vite/` | Caché de Vite | Solo desarrollo |
| `.angular/` | Caché de Angular | Solo desarrollo |
| `.next/` | Build de Next.js | Según necesidad |
| `.nuxt/` | Build de Nuxt | Según necesidad |
| `.svelte-kit/` | Build de SvelteKit | Según necesidad |

---

# 📄 ARCHIVOS GENERADOS

| Regla | Qué ignora | Uso |
|---------|------------|-----|
| `*.map` | Source Maps | Reducir tamaño |
| `*.min.js` | JavaScript minificado | Si publicas el código fuente |
| `*.min.css` | CSS minificado | Si publicas el código fuente |
| `*.generated.*` | Archivos generados | No editables |
| `*.cache` | Cachés | Temporales |
| `*.tmp` | Temporales | Innecesarios |
| `*.bak` | Backups | Respaldo |

---

# 🧪 TESTING

| Regla | Qué ignora | Uso |
|---------|------------|-----|
| `test/` | Carpeta de pruebas | Usuarios no la necesitan |
| `tests/` | Carpeta de pruebas | Usuarios no la necesitan |
| `__tests__/` | Tests de Jest | Desarrollo |
| `*.spec.js` | Tests unitarios | Desarrollo |
| `*.spec.ts` | Tests unitarios | Desarrollo |
| `*.test.js` | Tests unitarios | Desarrollo |
| `*.test.ts` | Tests unitarios | Desarrollo |
| `jest.config.js` | Configuración Jest | Solo desarrollo |
| `vitest.config.ts` | Configuración Vitest | Solo desarrollo |

---

# 📝 DOCUMENTACIÓN

| Regla | Qué ignora | Uso |
|---------|------------|-----|
| `docs/` | Documentación | Opcional |
| `examples/` | Ejemplos | Opcional |
| `demo/` | Demostraciones | Opcional |
| `screenshots/` | Imágenes del README | Opcional |
| `assets/` | Recursos estáticos | Según necesidad |

---

# ⚙️ CONFIGURACIONES

| Regla | Qué ignora | Uso |
|---------|------------|-----|
| `.editorconfig` | Configuración del editor | Desarrollo |
| `.prettierrc` | Configuración de Prettier | Desarrollo |
| `.prettierignore` | Exclusiones de Prettier | Desarrollo |
| `.eslintrc` | Configuración ESLint | Desarrollo |
| `.eslintignore` | Exclusiones ESLint | Desarrollo |
| `.stylelintrc` | Configuración Stylelint | Desarrollo |
| `.vscode/` | Configuración VS Code | Desarrollo |
| `.idea/` | Configuración JetBrains | Desarrollo |

---

# 🔒 ARCHIVOS SENSIBLES

| Regla | Qué ignora | Riesgo evitado |
|---------|------------|----------------|
| `.env` | Variables de entorno | Exposición de secretos |
| `.env.*` | Variantes de entorno | Exposición de secretos |
| `*.pem` | Certificados | Seguridad |
| `*.key` | Llaves privadas | Seguridad |
| `secret.*` | Secretos personalizados | Seguridad |
| `credentials.*` | Credenciales | Seguridad |
| `*.crt` | Certificados SSL | Seguridad |

---

# 🪵 LOGS

| Regla | Qué ignora | Uso |
|---------|------------|-----|
| `*.log` | Logs | No útiles para usuarios |
| `npm-debug.log*` | Logs de npm | Debug local |
| `yarn-error.log*` | Logs de Yarn | Debug local |
| `pnpm-debug.log*` | Logs de PNPM | Debug local |

---

# 🖥️ SISTEMA OPERATIVO

| Regla | Qué ignora | Sistema |
|---------|------------|----------|
| `.DS_Store` | Metadata | macOS |
| `Thumbs.db` | Caché de miniaturas | Windows |
| `desktop.ini` | Configuración de carpetas | Windows |

---

# 📦 PAQUETES Y DISTRIBUCIÓN

| Regla | Qué ignora | Uso |
|---------|------------|-----|
| `*.tgz` | Paquetes npm generados | Evitar recursión |
| `*.tar` | Archivos comprimidos | Distribución |
| `release/` | Releases locales | Opcional |

---

# 🌐 FRAMEWORKS

| Regla | Framework |
|---------|-----------|
| `.next/` | Next.js |
| `.nuxt/` | Nuxt |
| `.angular/` | Angular |
| `.svelte-kit/` | SvelteKit |
| `.vite/` | Vite |
| `.astro/` | Astro |
| `.output/` | Nitro / Nuxt |

---

# 🎯 REGLAS ESPECIALES

| Regla | Significado |
|---------|-------------|
| `*.js` | Todos los archivos JavaScript |
| `*.ts` | Todos los archivos TypeScript |
| `*.css` | Todos los archivos CSS |
| `*.html` | Todos los archivos HTML |
| `folder/` | Carpeta completa |
| `folder/*` | Todo dentro de una carpeta |
| `!archivo.js` | Excepción (no ignorar) |
| `!dist/index.js` | Re-incluir archivo específico |
| `**/*.spec.ts` | Todos los tests recursivos |
| `src/**/*.test.ts` | Tests dentro de `src` |

---

# 🚀 EJEMPLO TÍPICO PARA UNA LIBRERÍA NPM

| Regla | Motivo |
|---------|--------|
| `node_modules/` | Dependencias |
| `coverage/` | Testing |
| `tests/` | Testing |
| `.vscode/` | Configuración local |
| `.idea/` | Configuración local |
| `.env*` | Seguridad |
| `*.log` | Logs |
| `src/` | Si solo publicas `dist` |
| `examples/` | Ejemplos |
| `demo/` | Demostraciones |
| `screenshots/` | Imágenes |

---

# 🧠 RESUMEN RÁPIDO

| Categoría | Normalmente se ignora |
|------------|----------------------|
| 📦 Dependencias | `node_modules/` |
| 🧪 Tests | `*.spec.ts`, `*.test.ts` |
| 🏗️ Build temporal | `coverage/`, `.cache/` |
| ⚙️ Config local | `.vscode/`, `.idea/` |
| 🔒 Secretos | `.env`, `*.pem`, `*.key` |
| 🪵 Logs | `*.log` |
| 🖥️ Sistema | `.DS_Store`, `Thumbs.db` |
| 📄 Documentación opcional | `docs/`, `examples/`, `demo/` |

---

# 💡 TIP IMPORTANTE

| Comando | Para qué sirve |
|----------|---------------|
| `npm pack` | Simula el paquete que se publicará |
| `npm publish` | Publica el paquete en npm |

```bash
npm pack
```

👉 Antes de publicar una librería, ejecuta `npm pack` y revisa exactamente qué archivos serán incluidos. Es la forma más rápida de verificar que tu `.npmignore` funciona correctamente.