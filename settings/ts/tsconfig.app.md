# 📘🟦 TSCONFIG.APP.JSON — QUÉ ES Y PARA QUÉ SIRVE

> [!IMPORTANT]
> `tsconfig.app.json` es un archivo de configuración de TypeScript usado específicamente para la aplicación principal.
>
> Generalmente se utiliza en proyectos frontend como Angular, React o Vite para separar la configuración de la aplicación del resto del proyecto.

---

# 🧠 ¿QUÉ ES?

`tsconfig.app.json` es un archivo de configuración de TypeScript usado específicamente para la aplicación principal (frontend o app real).

👉 Es una extensión de `tsconfig.json`, pero enfocada solo en el código de la app.

---

# 🎯 ¿PARA QUÉ SIRVE?

Sirve para definir:

✅ Qué archivos de la app se compilan  
✅ Reglas específicas del frontend  
✅ Exclusión de tests  
✅ Separación entre app y otros entornos

---

# 🧠 ¿POR QUÉ EXISTE?

Porque en proyectos grandes NO todo el TypeScript es igual.

## 🏗️ Diferentes tipos de código

🟦 App (código real)

🧪 Tests

⚙️ Node / Scripts

📦 Tooling

👉 `tsconfig.app.json` separa la lógica de la aplicación del resto.

> [!NOTE]
> Esta separación hace que el proyecto sea más fácil de mantener y escalar.

---

# 🏗️ ¿CÓMO FUNCIONA?

## 🧠 TypeScript hace esto:

```text
1. Lee tsconfig.app.json
2. Extiende tsconfig.json
3. Filtra SOLO código de la app
4. Compila el frontend o aplicación principal
```

---

# 📘 🔵 ESTRUCTURA BÁSICA

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/app"
  },
  "include": ["src/**/*.ts"],
  "exclude": ["**/*.spec.ts"]
}
```

---

# 📘 🟢 PROPIEDADES IMPORTANTES

## 📌 extends

```json
"extends": "./tsconfig.json"
```

👉 Hereda la configuración base.

Beneficios:

✅ Evita duplicación

✅ Mantiene consistencia

> [!IMPORTANT]
> Es la propiedad más importante porque permite reutilizar la configuración principal del proyecto.

---

## 📌 include

```json
"include": ["src/**/*.ts"]
```

👉 Archivos que forman parte de la aplicación.

Beneficios:

✅ Solo código de producción

---

## 📌 exclude

```json
"exclude": ["**/*.spec.ts"]
```

👉 Archivos que NO se incluyen.

Normalmente:

✅ Tests

✅ Archivos auxiliares

---

## 📌 compilerOptions (override)

```json
"compilerOptions": {
  "outDir": "./dist/app"
}
```

👉 Permite modificar configuraciones específicas solo para la aplicación.

Beneficios:

✅ Salida separada

✅ Builds organizados

> [!TIP]
> Puedes sobrescribir configuraciones heredadas de `tsconfig.json` sin afectar el resto del proyecto.

---

# 📘 🧠 ¿QUÉ LO HACE DIFERENTE DE TSCONFIG NORMAL?

| tsconfig.json | tsconfig.app.json |
|--------------|-------------------|
| Global | Solo app |
| Base del proyecto | Frontend real |
| Configuración general | Configuración específica |
| Incluye todo | Filtra código |

---

# 📘 🧩 CASO REAL (ANGULAR / VITE / REACT)

## 🅰️ Angular

```text
app   → tsconfig.app.json
tests → tsconfig.spec.json
```

---

## ⚛️ Vite / React

```text
app   → configuración principal
tests → configuración separada
```

> [!NOTE]
> Angular suele usar varios archivos tsconfig por defecto, mientras que React y Vite pueden manejar configuraciones más simples.

---

# 📘 ⚡ ¿CUÁNDO SE USA?

✅ Proyectos Angular

✅ Apps grandes con separación de entornos

✅ Monorepos

✅ Proyectos con tests separados

---

# 📘 🚨 ERRORES COMUNES

❌ Meter tests dentro de la configuración de la app

❌ No extender `tsconfig.json`

❌ Duplicar configuración innecesariamente

❌ Mezclar Node.js y frontend en el mismo archivo

> [!WARNING]
> Mezclar configuraciones de distintos entornos puede generar errores difíciles de detectar durante la compilación.

---

# 📘 🧠 IDEA CLAVE

> [!IMPORTANT]
> `tsconfig.app.json` = configuración SOLO para la aplicación.

Beneficios:

✅ Limpia

✅ Separada

✅ Escalable

✅ Profesional

---

# ⚡ RESUMEN FINAL

🧠 Este archivo sirve para:

- Definir el código de la aplicación
- Separar tests y tooling
- Mantener una estructura limpia
- Evitar mezcla de configuraciones

> [!SUCCESS]
> Mientras `tsconfig.json` define las reglas generales del proyecto, `tsconfig.app.json` se enfoca exclusivamente en el código de la aplicación principal.
```**``**