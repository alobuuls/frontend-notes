# 📘 🧠 TSCONFIG.APP.JSON — TABLA COMPLETA

## 🟦 HERENCIA BASE

| Propiedad | Valor | Qué hace | Uso |
|------------|--------|----------|-----|
| `extends` | `./tsconfig.json` | Hereda la configuración principal | Evita duplicar configuraciones |

---

## 📦 COMPILER OPTIONS (APP)

| Propiedad | Valor | Qué hace | Uso |
|------------|--------|----------|-----|
| `outDir` | `./dist/app` | Carpeta de salida de la aplicación | Build frontend |
| `rootDir` | `./src` | Código fuente principal | Organización |
| `types` | `[]` | Tipos globales adicionales | Node, Jest, etc. |
| `noEmit` | `false` | Permite generar JavaScript | Build activo |
| `sourceMap` | `true` | Genera mapas de código | Debug en DevTools |
| `declaration` | `false` | No genera archivos `.d.ts` | Aplicaciones, no librerías |
| `removeComments` | `true` | Elimina comentarios | Optimización |
| `strict` | `true` | Activa modo estricto | Seguridad máxima |
| `esModuleInterop` | `true` | Compatibilidad CommonJS | Interoperabilidad |
| `allowSyntheticDefaultImports` | `true` | Permite imports flexibles | Compatibilidad |
| `moduleResolution` | `node` | Resolución de imports estilo Node | Consistencia |
| `resolveJsonModule` | `true` | Permite importar JSON | Configuraciones |
| `isolatedModules` | `true` | Compatible con Vite/Babel | Tooling moderno |
| `useDefineForClassFields` | `true` | Usa estándar moderno de clases | Compatibilidad ES |
| `skipLibCheck` | `true` | Omite validación de librerías | Performance |
| `forceConsistentCasingInFileNames` | `true` | Respeta mayúsculas/minúsculas | Compatibilidad entre sistemas |
| `allowJs` | `false` | Impide usar JavaScript | Proyecto TypeScript puro |
| `checkJs` | `false` | No valida archivos JS | Menos ruido |
| `incremental` | `true` | Activa caché de compilación | Builds rápidos |
| `tsBuildInfoFile` | `./.tsbuildinfo.app` | Archivo de caché TS | Optimización |

---

## 📁 INCLUDE (ARCHIVOS DE LA APP)

| Propiedad | Valor | Qué hace | Uso |
|------------|--------|----------|-----|
| `include` | `src/**/*.ts` | Incluye archivos TypeScript | Código principal |
| `include` | `src/**/*.tsx` | Incluye componentes React | Interfaz de usuario |
| `include` | `src/**/*.d.ts` | Incluye definiciones de tipos | Tipado personalizado |

---

## 🚫 EXCLUDE (EXCLUSIONES)

| Propiedad | Valor | Qué hace | Uso |
|------------|--------|----------|-----|
| `exclude` | `node_modules` | Ignora dependencias | Obligatorio |
| `exclude` | `dist` | Ignora archivos compilados | Evita conflictos |
| `exclude` | `coverage` | Ignora reportes de pruebas | Limpieza |
| `exclude` | `*.spec.ts` | Ignora pruebas unitarias | Producción |
| `exclude` | `*.test.ts` | Ignora otros tests | Producción |

---

## ⚡ RESUMEN RÁPIDO

| Área | Controlado por `tsconfig.app.json` |
|--------|----------------------------------|
| Código de la aplicación | ✅ |
| Compilación frontend | ✅ |
| Inclusión de archivos | ✅ |
| Exclusión de pruebas | ✅ |
| Salida del build | ✅ |
| Optimización del proyecto | ✅ |

---

## 🧠 IDEA CLAVE

| Configuración | Función |
|--------------|----------|
| `extends` | Hereda la configuración global |
| `include` | Define qué archivos forman parte de la app |
| `exclude` | Define qué archivos se ignoran |
| `compilerOptions` | Controla cómo se compila la aplicación |

---

## 🚀 REGLA FÁCIL DE RECORDAR

| Si quieres... | Configuración |
|--------------|--------------|
| Reutilizar configuración | `extends` |
| Compilar la aplicación | `include` |
| Ignorar tests y builds | `exclude` |
| Mejor rendimiento | `incremental` |
| Generar archivos en otra carpeta | `outDir` |
| Mayor seguridad | `strict` |
| Compatibilidad moderna | `esModuleInterop` + `moduleResolution` |