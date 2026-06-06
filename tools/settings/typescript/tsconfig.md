# 📘🔷 TSCONFIG.JSON — QUÉ ES Y PARA QUÉ SIRVE

> [!IMPORTANT]
> `tsconfig.json` es el archivo de configuración principal de TypeScript.
>
> Define cómo se compila, valida y organiza todo el proyecto.

---

# 🧠 ¿QUÉ ES?

`tsconfig.json` es el archivo de configuración de TypeScript.

👉 Le dice al compilador de TypeScript:

- Cómo compilar el código
- Qué archivos incluir o excluir
- Qué reglas aplicar
- A qué versión de JavaScript convertir el código

---

# 🎯 ¿PARA QUÉ SIRVE?

Sirve para controlar todo el comportamiento de TypeScript:

✅ Compilación del proyecto  
✅ Reglas de tipado  
✅ Compatibilidad con navegadores  
✅ Estructura del proyecto  
✅ Optimización del build

---

# 🧠 ¿POR QUÉ ES IMPORTANTE?

## ❌ Sin `tsconfig.json`

- TypeScript no sabe cómo compilar
- No hay reglas consistentes
- El proyecto no escala bien

## ✅ Con `tsconfig.json`

- Comportamiento controlado
- Errores más estrictos
- Código más seguro
- Mejor mantenimiento

> [!NOTE]
> En proyectos profesionales prácticamente siempre existe un archivo `tsconfig.json`.

---

# 🏗️ ¿CÓMO FUNCIONA?

## 🧠 TypeScript hace esto:

```text
1. Lee tsconfig.json
2. Encuentra archivos .ts
3. Aplica reglas de compilación
4. Genera JavaScript final
5. Reporta errores de tipos
```

---

# 📘 🔵 ESTRUCTURA BÁSICA

```json
{
  "compilerOptions": {
    // configuración del compilador
  },
  "include": [],
  "exclude": []
}
```

---

# 📘 🟢 COMPILER OPTIONS (LO MÁS IMPORTANTE)

> [!IMPORTANT]
> `compilerOptions` es el corazón de TypeScript.
>
> Aquí se configuran las reglas principales del compilador.

---

## 🎯 target

### 🧠 Configuración principal

```json
{
  "compilerOptions": {
    "target": "ES2020"
  }
}
```

👉 Define a qué versión de JavaScript se compila.

> [!TIP]
> Mientras más moderno sea el target, más características de JavaScript podrá conservar el código generado.

---

## 📌 module

```json
"module": "ESNext"
```

👉 Sistema de módulos.

Opciones comunes:

- `CommonJS` (Node clásico)
- `ESNext` (moderno)

---

## 📌 strict

```json
"strict": true
```

🧠 Activa todas las reglas estrictas.

Beneficios:

✅ Tipado más seguro  
✅ Menos errores en runtime

> [!IMPORTANT]
> En proyectos nuevos se recomienda mantenerlo en `true`.

---

## 📌 outDir

```json
"outDir": "./dist"
```

👉 Carpeta donde se genera el código compilado.

---

## 📌 rootDir

```json
"rootDir": "./src"
```

👉 Carpeta base del código fuente.

---

## 📌 moduleResolution

```json
"moduleResolution": "node"
```

👉 Define cómo TypeScript busca dependencias.

---

## 📌 esModuleInterop

```json
"esModuleInterop": true
```

👉 Permite importar librerías CommonJS en ESModules.

---

## 📌 allowJs

```json
"allowJs": true
```

👉 Permite usar archivos `.js` dentro del proyecto.

---

## 📌 skipLibCheck

```json
"skipLibCheck": true
```

👉 Ignora errores en librerías externas para acelerar la compilación.

> [!TIP]
> Muy usado en proyectos grandes para mejorar el rendimiento del build.

---

## 📌 forceConsistentCasingInFileNames

```json
"forceConsistentCasingInFileNames": true
```

👉 Evita errores entre Windows y Linux relacionados con mayúsculas y minúsculas.

---

# 📘 🟡 INCLUDE / EXCLUDE

---

## 📌 include

```json
"include": ["src"]
```

👉 Archivos que TypeScript va a compilar.

---

## 📌 exclude

```json
"exclude": ["node_modules"]
```

👉 Archivos o carpetas que NO se compilan.

> [!NOTE]
> Normalmente se excluyen:
>
> - `node_modules`
> - `dist`
> - archivos temporales

---

# 📘 🧠 TIPOS DE TSCONFIG

## 🟢 tsconfig base

👉 Configuración general del proyecto.

---

## 🔵 tsconfig.app.json

👉 Solo código de aplicación.

---

## 🧪 tsconfig.spec.json

👉 Solo tests.

---

## ⚙️ tsconfig.node.json

👉 Configuración para Node.js.

---

# 📘 🧩 EJEMPLO COMPLETO REAL

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "strict": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "rootDir": "./src",
    "outDir": "./dist",
    "allowJs": false
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

---

# 📌 🧠 IDEAS CLAVE

✅ TypeScript usa este archivo para compilar

✅ Define reglas de seguridad del código

✅ Controla la estructura del proyecto

✅ Mejora la escalabilidad

> [!TIP]
> Aprender `tsconfig.json` te ayuda a entender cómo funciona TypeScript detrás de escena y a configurar proyectos profesionales con mayor control.

---

# ⚡ RESUMEN FINAL

> [!IMPORTANT]
> `tsconfig.json` es el cerebro de TypeScript.

Controla:

- Compilación
- Reglas de tipado
- Estructura del proyecto
- Salida del build
- Compatibilidad con JavaScript

🚀 Sin él, TypeScript funciona de forma básica.

🚀 Con él, puedes controlar completamente el comportamiento del proyecto.