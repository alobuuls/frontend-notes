# 📘 🧠 TSCONFIG.JSON — TABLA COMPLETA

## 🟦 COMPILER OPTIONS (CONFIGURACIÓN PRINCIPAL)

| Propiedad | Valor | Qué hace | Uso |
|------------|--------|----------|-----|
| `target` | `ES2020` | Versión de JavaScript de salida | Compatibilidad moderna |
| `module` | `ESNext` | Sistema de módulos | ES Modules moderno |
| `moduleResolution` | `node` | Forma de resolver imports | Igual que Node.js |
| `baseUrl` | `./` | Base para imports absolutos | Evita rutas largas |
| `rootDir` | `./src` | Carpeta de código fuente | Organización |
| `outDir` | `./dist` | Carpeta de salida | Build final |
| `declaration` | `true` | Genera archivos `.d.ts` | Librerías TypeScript |
| `sourceMap` | `true` | Genera mapas de código | Debug en navegador |
| `removeComments` | `true` | Elimina comentarios | Optimización |
| `importHelpers` | `true` | Reduce helpers duplicados | Mejor performance |
| `esModuleInterop` | `true` | Compatibilidad con CommonJS | Imports modernos |
| `allowSyntheticDefaultImports` | `true` | Permite imports flexibles | Compatibilidad |
| `forceConsistentCasingInFileNames` | `true` | Respeta mayúsculas/minúsculas | Evita errores entre sistemas |

---

## 🧠 STRICT MODE (SEGURIDAD)

| Propiedad | Valor | Qué hace | Uso |
|------------|--------|----------|-----|
| `strict` | `true` | Activa todas las reglas strict | Seguridad máxima |
| `noImplicitAny` | `true` | Prohíbe `any` implícito | Tipado fuerte |
| `strictNullChecks` | `true` | Controla `null` y `undefined` | Evita crashes |
| `strictFunctionTypes` | `true` | Tipado estricto de funciones | Seguridad |
| `strictBindCallApply` | `true` | Valida `bind`, `call` y `apply` | Precisión |
| `strictPropertyInitialization` | `true` | Obliga inicializar propiedades | Clases seguras |
| `noUnusedLocals` | `true` | Detecta variables no utilizadas | Limpieza |
| `noUnusedParameters` | `true` | Detecta parámetros no utilizados | Código limpio |
| `noImplicitReturns` | `true` | Obliga retornos explícitos | Evita bugs |

---

## ⚡ PERFORMANCE / BUILD

| Propiedad | Valor | Qué hace | Uso |
|------------|--------|----------|-----|
| `skipLibCheck` | `true` | Omite validación de librerías | Acelera compilación |
| `incremental` | `true` | Activa caché de compilación | Builds más rápidos |
| `tsBuildInfoFile` | `./.tsbuildinfo` | Archivo de caché | Optimización |

---

## 📦 COMPATIBILIDAD

| Propiedad | Valor | Qué hace | Uso |
|------------|--------|----------|-----|
| `resolveJsonModule` | `true` | Permite importar JSON | Configuraciones |
| `isolatedModules` | `true` | Compatible con Vite y Babel | Tooling moderno |
| `useDefineForClassFields` | `true` | Usa estándar moderno para clases | Compatibilidad ES |
| `allowJs` | `false` | Bloquea archivos JavaScript | Proyecto TS puro |
| `checkJs` | `false` | No valida archivos JS | Menos ruido |

---

## 📁 ARCHIVOS INCLUIDOS

| Propiedad | Valor | Qué hace | Uso |
|------------|--------|----------|-----|
| `include` | `src/**/*.ts` | Define qué archivos compilar | Código fuente |

---

## 🚫 ARCHIVOS EXCLUIDOS

| Propiedad | Valor | Qué hace | Uso |
|------------|--------|----------|-----|
| `exclude` | `node_modules` | Ignora dependencias | Obligatorio |
| `exclude` | `dist` | Ignora archivos compilados | Evita loops |
| `exclude` | `coverage` | Ignora reportes de pruebas | Limpieza |
| `exclude` | `*.spec.ts` | Ignora tests unitarios | Producción |
| `exclude` | `*.test.ts` | Ignora tests | Producción |

---

## ⚡ RESUMEN RÁPIDO

| Área | Controlado por `tsconfig.json` |
|--------|------------------------------|
| Compilación | ✅ |
| Seguridad del código | ✅ |
| Rendimiento | ✅ |
| Compatibilidad | ✅ |
| Estructura del proyecto | ✅ |
| Archivos incluidos | ✅ |
| Archivos excluidos | ✅ |

---

## 🧠 IDEA CLAVE

| Configuración | Función principal |
|--------------|------------------|
| `strict` | Seguridad |
| `outDir` | Carpeta de salida |
| `include` / `exclude` | Qué compilar |
| `module` | Sistema de módulos |
| `target` | Versión de JavaScript generada |

---

## 🚀 REGLA FÁCIL DE RECORDAR

| Si quieres... | Configuración |
|--------------|--------------|
| Más seguridad | `strict: true` |
| JS más moderno | `target: ES2020+` |
| Salida organizada | `outDir: ./dist` |
| Imports más limpios | `baseUrl: ./` |
| Builds rápidos | `incremental: true` |
| Compatibilidad Node | `moduleResolution: node` |