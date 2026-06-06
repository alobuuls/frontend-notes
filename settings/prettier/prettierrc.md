# 🎨 📘 .prettierrc en VS Code / proyectos JS

🧠 El archivo **.prettierrc** es donde defines la **configuración de Prettier**, una herramienta que formatea automáticamente tu código.

👉 Es básicamente: “cómo quiero que se vea mi código siempre”.

---

# 📌 🟢 ¿QUÉ ES .prettierrc?

🧠 Es un archivo de configuración (JSON, YAML o JS) que controla el estilo de formato del código.

👉 Lo usa Prettier para aplicar reglas como:

- comillas simples o dobles  
- punto y coma  
- indentación  
- ancho de línea  
- comas finales  

💡 Ejemplo básico:

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2
}
```

> [!TIP]
> Este es el setup mínimo recomendado para empezar con Prettier sin complicarte.

---

# 📌 🔵 ¿PARA QUÉ SIRVE?

🧠 Sirve para mantener el código:

✔ limpio  
✔ consistente  
✔ legible  
✔ sin discusiones de estilo en equipo  

👉 Evita cosas como:

- “yo uso comillas simples”  
- “yo prefiero doble”  
- “tu código está desordenado”  

> [!IMPORTANT]
> Prettier no mejora la lógica del código, solo su apariencia. Aun así, impacta mucho en la productividad del equipo.

---

# 📌 🟣 ¿DÓNDE SE USA?

🧠 Se coloca en la raíz del proyecto:

```
project/
 ├── src/
 ├── package.json
 └── .prettierrc
```

👉 Prettier lo detecta automáticamente.

---

# 📌 🟡 FORMATOS POSIBLES

🧠 Puedes usar varios formatos:

- ✔ `.prettierrc` (JSON)  
- ✔ `.prettierrc.json`  
- ✔ `.prettierrc.js`  
- ✔ `.prettierrc.yml`  

💡 El más común:

👉 JSON

> [!TIP]
> Si estás empezando, usa JSON. Es el más simple, estable y fácil de compartir en equipo.

---

# 📌 🔴 CONFIGURACIÓN COMPLETA TÍPICA

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false,
  "trailingComma": "es5",
  "printWidth": 80,
  "bracketSpacing": true,
  "arrowParens": "always",
  "endOfLine": "lf"
}
```

---

# 📌 ⚫ PROPIEDADES EXPLICADAS

## ✍️ semi
👉 Usa punto y coma  

```js
true → const a = 1;
```

---

## 🧾 singleQuote
👉 Usa comillas simples  

```js
'hello'
```

---

## 📏 tabWidth
👉 Espacios por indentación  

```
2 espacios recomendado
```

---

## 🔄 useTabs
👉 Usa tabs en vez de espacios  

---

## 📌 trailingComma
👉 Comas finales  

```json
"es5"
```

✔ útil para diffs más limpios en Git  

---

## 📐 printWidth
👉 Ancho máximo de línea antes de saltar  

> [!TIP]
> 80 es un estándar clásico, pero muchos equipos modernos usan 100 o 120.

---

## 🧱 bracketSpacing
👉 Espacios en objetos  

```js
{ a: 1 } ✔
{a:1} ❌
```

---

## ➡️ arrowParens
👉 Paréntesis en arrow functions  

```js
(a) => {}
```

---

## 📄 endOfLine
👉 Tipo de salto de línea  

- `lf` → Linux/Mac (recomendado)  
- `crlf` → Windows  

> [!WARNING]
> Mezclar `lf` y `crlf` en equipos puede causar problemas en Git y diffs innecesarios.

---

# 📌 🧠 ¿POR QUÉ ES IMPORTANTE?

🧠 Porque asegura:

✔ mismo estilo en todo el equipo  
✔ código más limpio  
✔ menos discusiones de estilo  
✔ menos errores visuales  
✔ commits más claros  

---

# 📌 🔵 PRETTIER vs ESLINT

| Herramienta | Función |
|------------|---------|
| Prettier   | Formato del código |
| ESLint     | Reglas de lógica y errores |

👉 Prettier = estética  
👉 ESLint = calidad del código  

> [!NOTE]
> En proyectos modernos, lo ideal es usarlos juntos sin que se pisen entre sí.

---

# 📌 ⚠️ ERRORES COMUNES

❌ usar Prettier sin ESLint  
❌ duplicar reglas en ambos  
❌ no activar `formatOnSave`  
❌ no compartir configuración en equipo  

---

# 📌 🚀 USO RECOMENDADO EN VS CODE

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

> [!TIP]
> Activar `formatOnSave` es uno de los “quick wins” más importantes para mejorar tu flujo de trabajo.

---

# 📌 🧠 IDEA CLAVE

🧠 `.prettierrc` = “reglas de belleza del código”

👉 no cambia lógica  
👉 solo formato  

---

# ✨ RESUMEN

🧠 Prettier sirve para:

✔ formatear código automáticamente  
✔ mantener estilo consistente  
✔ mejorar legibilidad  
✔ evitar debates de estilo  

🚀 Es una de las herramientas más importantes en proyectos modernos JavaScript/TypeScript

# 📘 🧠 PRETTIER CONFIG — TABLA DE PROPIEDADES

| Propiedad                       | Tipo     | Valor ejemplo       | Qué hace                                    | Uso / Impacto                       |
|---------------------------------|---------|------------------|--------------------------------------------|------------------------------------|
| `semi`                         | boolean | true             | Agrega `;` al final de cada línea         | Estilo consistente, evita errores JS |
| `singleQuote`                  | boolean | true             | Usa `'` en lugar de `"`                     | Código más limpio y estándar        |
| `tabWidth`                     | number  | 2                | Número de espacios por indentación         | Define estructura visual            |
| `useTabs`                       | boolean | false            | Usa espacios en vez de tabs                 | Consistencia entre editores         |
| `printWidth`                   | number  | 80               | Máximo de caracteres por línea             | Mejora lectura y control de líneas |
| `trailingComma`                | string  | "es5"            | Agrega comas finales donde sea posible     | Mejores diffs en Git                |
| `bracketSpacing`               | boolean | true             | Espacios en objetos `{ a: 1 }`             | Legibilidad                        |
| `arrowParens`                  | string  | "always"         | Siempre usa paréntesis en arrow functions  | Evita ambigüedad                   |
| `endOfLine`                     | string  | "lf"             | Tipo de salto de línea                      | Compatibilidad entre OS             |

---

## ⚛️ JSX / FRAMEWORKS

| Propiedad              | Tipo     | Ejemplo | Qué hace                        | Uso                     |
|------------------------|---------|---------|---------------------------------|------------------------|
| `jsxSingleQuote`      | boolean | true    | Usa `'` en JSX                  | Consistencia en React   |
| `bracketSameLine`     | boolean | false   | `>` en nueva línea              | Estilo JSX moderno      |
| `jsxBracketSameLine`  | boolean | false   | Legacy de Prettier              | Compatibilidad vieja    |

---

## 📁 OVERRIDES (por tipo de archivo)

| Propiedad   | Tipo  | Ejemplo       | Qué hace                            | Uso                     |
|------------|-------|---------------|------------------------------------|------------------------|
| `overrides` | array | ver config    | Reglas específicas por archivo     | Configuración avanzada  |

📌 Ejemplo interno:

| Archivo    | Propiedad       | Qué cambia                          |
|-----------|----------------|------------------------------------|
| `*.html`  | printWidth: 120 | Permite líneas más largas          |
| `*.json`  | printWidth: 100 | Config más flexible                |
| `*.md`    | proseWrap: always | Ajuste automático de texto        |

---

## 🧾 FORMATO DE TEXTO

| Propiedad                       | Tipo   | Ejemplo      | Qué hace                             | Uso                         |
|---------------------------------|--------|-------------|------------------------------------|-----------------------------|
| `proseWrap`                    | string | "preserve"  | Mantiene texto en Markdown          | Evita cambios innecesarios  |
| ``htmlWhitespaceSensitivity``    | string | "css"       | Respeta CSS en HTML                 | Evita bugs visuales         |
| `embeddedLanguageFormatting`   | string | "auto"      | Formatea código embebido            | HTML, Markdown, etc         |

---

## ⚙️ CONFIGURACIÓN GENERAL

| Propiedad                          | Tipo    | Ejemplo | Qué hace                                     | Uso                       |
|----------------------------------|--------|---------|---------------------------------------------|----------------------------|
| `requirePragma`                  | boolean | false   | Solo formatea si hay comentario especial   | Control manual             |
| `insertPragma`                   | boolean | false   | No agrega comentarios automáticos          | Evita ruido                |
| `vueIndentScriptAndStyle`        | boolean | true    | Indenta scripts en Vue                     | Mejor legibilidad          |

---

## 🚀 OPTIMIZACIÓN / RANGO

| Propiedad     | Tipo   | Ejemplo    | Qué hace                        | Uso                |
|--------------|--------|-----------|---------------------------------|------------------|
| `rangeStart` | number | 0         | Desde qué línea formatea        | Formateo parcial  |
| `rangeEnd`   | number | Infinity  | Hasta dónde formatea            | Archivo completo  |

---

## 🧠 RESUMEN RÁPIDO

- 🟢 `semi, singleQuote, tabWidth` → estilo base  
- 🔵 `printWidth` → control visual  
- 🟣 `trailingComma` → mejores diffs  
- ⚛️ `JSX` → reglas para frameworks  
- 📁 `overrides` → reglas por archivo  
- ⚙️ `proseWrap, htmlWhitespaceSensitivity` → comportamiento de texto  
- 🚀 `rangeStart / rangeEnd` → formateo parcial

> [!TIP]
> Combina estas propiedades con `.prettierrc` y `.prettierignore` para un formateo consistente y seguro en proyectos grandes o equipos.