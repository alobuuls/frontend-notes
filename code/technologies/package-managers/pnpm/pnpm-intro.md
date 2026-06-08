# 📦 PNPM — TEORÍA COMPLETA

## 🧠 ¿Qué es PNPM?

**PNPM** significa:

```text
Performant Node Package Manager
```

Es un **gestor de paquetes para JavaScript y TypeScript**, igual que npm o Yarn.

Su función principal es:

👉 Instalar, actualizar, eliminar y administrar dependencias de un proyecto.

Por ejemplo:

```bash
pnpm add axios
```

descarga Axios y lo deja listo para usar.

---

# 🎯 ¿Para qué sirve PNPM?

PNPM sirve para administrar todo lo relacionado con las dependencias de un proyecto.

| Acción | Ejemplo |
|----------|----------|
| Instalar paquetes | `pnpm add lodash` |
| Actualizar paquetes | `pnpm update` |
| Eliminar paquetes | `pnpm remove lodash` |
| Ejecutar scripts | `pnpm dev` |
| Gestionar versiones | Dependencias consistentes |

---

# 🤔 ¿Por qué existe PNPM?

PNPM nació para resolver uno de los problemas históricos del ecosistema JavaScript:

## 📦 Duplicación de dependencias

Imagina tres proyectos distintos:

```text
Proyecto A
└─ node_modules
   └─ react

Proyecto B
└─ node_modules
   └─ react

Proyecto C
└─ node_modules
   └─ react
```

Cada proyecto descarga su propia copia.

Esto provoca:

❌ Más espacio en disco

❌ Instalaciones más lentas

❌ Mayor consumo de recursos

❌ Dependencias repetidas innecesariamente

---

# 🚀 La idea principal de PNPM

PNPM guarda una única copia física de cada paquete en una ubicación global.

Después crea enlaces hacia cada proyecto.

En lugar de esto:

```text
Proyecto A
└─ react

Proyecto B
└─ react

Proyecto C
└─ react
```

Hace algo parecido a:

```text
Store Global
└─ react

Proyecto A
└─ enlace → react

Proyecto B
└─ enlace → react

Proyecto C
└─ enlace → react
```

---

# 💾 ¿Qué gana PNPM con esto?

| Beneficio | Descripción |
|------------|------------|
| 💽 Menos espacio | Una sola copia física |
| ⚡ Más velocidad | Menos descargas |
| 🔄 Reutilización | Evita duplicados |
| 🛡️ Consistencia | Dependencias más estrictas |
| 🚀 Mejor rendimiento | Instalaciones más rápidas |

---

# 🆚 PNPM vs npm

## npm

Instala paquetes directamente dentro de:

```text
node_modules
```

Cada proyecto mantiene su propia estructura.

---

## PNPM

Utiliza:

```text
Content Addressable Store
```

y enlaces simbólicos (symlinks).

Esto permite reutilizar dependencias entre proyectos.

---

# 🧠 ¿Qué es el Content Addressable Store?

Es la característica más importante de PNPM.

Consiste en una caché global donde cada paquete se almacena una sola vez.

Ejemplo conceptual:

```text
Store Global

react@19.1.0
axios@1.9.0
rxjs@7.8.0
vite@7.0.0
```

Todos los proyectos reutilizan esos paquetes.

---

# 📦 ¿Qué archivos usa PNPM?

## package.json

Describe el proyecto y sus dependencias.

```json
{
  "name": "mi-app",
  "version": "1.0.0"
}
```

---

## pnpm-lock.yaml

Equivalente a:

| Gestor | Lockfile |
|----------|----------|
| npm | package-lock.json |
| Yarn | yarn.lock |
| PNPM | pnpm-lock.yaml |

---

# 🧠 ¿Para qué sirve pnpm-lock.yaml?

Congela las versiones exactas instaladas.

Por ejemplo:

```json
{
  "axios": "^1.7.0"
}
```

Podría instalar:

```text
1.7.2
```

Hoy.

Y:

```text
1.7.9
```

Mañana.

El lockfile evita eso.

Todos instalan exactamente la misma versión.

---

# ⚠️ ¿Debo subir pnpm-lock.yaml a Git?

Sí.

Siempre.

✅ Se versiona

✅ Se comparte

✅ Garantiza instalaciones idénticas

❌ No debe ignorarse

---

# 📦 ¿Qué pasa con node_modules?

PNPM también crea:

```text
node_modules/
```

pero internamente su estructura es diferente.

No copia todo físicamente.

Utiliza enlaces al Store Global.

---

# 🧠 ¿Se sube node_modules a Git?

No.

Normalmente:

```gitignore
node_modules/
```

---

# 🏗️ ¿Cómo trabaja PNPM internamente?

Proceso simplificado:

```text
package.json
       ↓
PNPM lee dependencias
       ↓
Consulta Registry
       ↓
Descarga al Store Global
       ↓
Crea enlaces
       ↓
Genera node_modules
       ↓
Genera pnpm-lock.yaml
```

---

# 🌐 Registry

Por defecto PNPM utiliza el mismo registro que npm.

Por ejemplo:

```bash
pnpm add react
```

descarga React desde:

```text
registry.npmjs.org
```

Igual que npm y Yarn.

---

# 📦 Tipos de dependencias

## Dependencias normales

Necesarias para ejecutar la aplicación.

```json
{
  "dependencies": {
    "react": "^19.0.0"
  }
}
```

---

## Dependencias de desarrollo

Solo necesarias durante el desarrollo.

```json
{
  "devDependencies": {
    "typescript": "^5.0.0"
  }
}
```

Ejemplos:

- TypeScript
- ESLint
- Prettier
- Vitest
- Jest

---

## Dependencias opcionales

No son obligatorias.

```json
{
  "optionalDependencies": {}
}
```

Si fallan:

✅ El proyecto sigue funcionando.

---

## Peer Dependencies

Indican:

> "Necesito que esta librería exista en el proyecto."

Ejemplo:

```json
{
  "peerDependencies": {
    "react": "^19.0.0"
  }
}
```

Muy comunes en:

- React
- Angular
- Vue
- Librerías compartidas

---

# 🛡️ Una diferencia importante de PNPM

PNPM es más estricto que npm.

Muchas veces detecta errores que npm permite.

Ejemplo:

Una librería intenta usar una dependencia que no declaró correctamente.

npm puede permitirlo.

PNPM suele bloquearlo.

---

# 🎯 ¿Por qué eso es bueno?

Porque obliga a que las dependencias estén declaradas correctamente.

Beneficios:

✅ Menos errores ocultos

✅ Proyectos más mantenibles

✅ Dependencias más limpias

✅ Menos sorpresas en producción

---

# 📦 Monorepos y Workspaces

PNPM es muy popular en proyectos grandes.

Permite administrar múltiples aplicaciones desde un mismo repositorio.

Ejemplo:

```text
repo/
├─ apps/
│  ├─ web/
│  └─ api/
│
├─ packages/
│  ├─ ui/
│  └─ shared/
│
└─ package.json
```

---

# 🚀 ¿Por qué muchas empresas usan PNPM?

Porque suele ofrecer:

✅ Instalaciones más rápidas

✅ Menor consumo de disco

✅ Mejor manejo de monorepos

✅ Dependencias más estrictas

✅ Excelente integración con TypeScript

---

# 🆚 PNPM vs Yarn vs npm

| Característica | npm | Yarn | PNPM |
|---------------|------|------|------|
| Incluido con Node | ✅ | ❌ | ❌ |
| Popularidad | ✅ Muy alta | ✅ Alta | 🚀 Creciendo |
| Velocidad | ⚡ Rápido | ⚡ Rápido | ⚡⚡ Muy rápido |
| Espacio en disco | 😐 Normal | 😐 Normal | ✅ Excelente |
| Monorepos | ✅ | ✅ | 🚀 Excelente |
| Workspaces | ✅ | ✅ | ✅ |
| Lockfile | package-lock.json | yarn.lock | pnpm-lock.yaml |
| Estricto con dependencias | 😐 | 😐 | ✅ Muy estricto |

---

# 🎯 ¿Cuándo usar PNPM?

### Muy recomendable cuando:

✅ Trabajas con muchos proyectos

✅ Usas monorepos

✅ Quieres ahorrar espacio

✅ Buscas instalaciones rápidas

✅ Trabajas con TypeScript

✅ Quieres dependencias más controladas

---

### npm suele ser suficiente cuando:

✅ Aprendes JavaScript

✅ Proyectos pequeños

✅ No necesitas características avanzadas

---

# 💡 Ideas clave para recordar

### 📌 PNPM no reemplaza JavaScript

Solo administra dependencias.

---

### 📌 PNPM no reemplaza Node.js

Necesita Node para funcionar.

---

### 📌 PNPM hace lo mismo que npm y Yarn

La diferencia está en:

- rendimiento
- almacenamiento
- workspaces
- manejo de dependencias

---

### 📌 package.json describe

```text
Qué necesito instalar
```

---

### 📌 pnpm-lock.yaml congela

```text
Qué versión exacta fue instalada
```

---

### 📌 node_modules contiene

```text
Lo que el proyecto utiliza
```

---

### 📌 Store Global guarda

```text
La copia real de los paquetes
```

---

# 🏆 Resumen mental

```text
JavaScript
      ↓
Necesito librerías
      ↓
PNPM las administra
      ↓
package.json
      ↓
PNPM descarga al Store Global
      ↓
Crea enlaces
      ↓
node_modules
      ↓
pnpm-lock.yaml
```

👉 Piensa en PNPM como un gestor de paquetes que intenta evitar descargas duplicadas, ahorrar espacio y acelerar instalaciones reutilizando una única copia global de cada dependencia.