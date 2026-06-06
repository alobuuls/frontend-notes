# ⚙️ 📘 settings.json en VS Code

🧠 El archivo **settings.json** es donde VS Code guarda y aplica todas las configuraciones personalizadas del editor.

👉 Es como el “panel de control avanzado” de tu entorno de desarrollo.

---

# 📌 🟢 ¿QUÉ ES settings.json?

🧠 Es un archivo en formato JSON donde defines cómo quieres que funcione VS Code.

👉 Permite personalizar:

- Editor
- Formato de código
- Extensiones
- Tema
- Comportamiento general

💡 Ejemplo básico:

```json
{
  "editor.fontSize": 16,
  "editor.tabSize": 2,
  "editor.wordWrap": "on"
}
```

---

# 📌 🔵 ¿PARA QUÉ SIRVE?

🧠 Sirve para adaptar VS Code a tu forma de trabajar.

👉 Ejemplos reales:

- Hacer el código más legible
- Activar autoformato
- Cambiar atajos o comportamiento
- Configurar ESLint / Prettier
- Mejorar productividad

---

# 📌 🟣 ¿DÓNDE SE USA?

🧠 Hay 2 niveles principales:

---

## 🧩 1. User Settings (global)

👉 Afecta TODO VS Code

📍 Ruta:

```
Preferences → Settings → Open Settings (JSON)
```

---

## 🧩 2. Workspace Settings (proyecto)

👉 Solo afecta el proyecto actual

📍 Ruta:

```
.vscode/settings.json
```

---

# 📌 🟡 ¿POR QUÉ ES IMPORTANTE?

🧠 Porque te permite:

✔ Estándar de código  
✔ Automatizar formato  
✔ Evitar errores humanos  
✔ Mantener consistencia en equipos  
✔ Mejorar velocidad de desarrollo  

---

# 📌 🔴 CONFIGURACIONES MÁS USADAS

---

## 🎨 Editor

```json
{
  "editor.fontSize": 14,
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "editor.formatOnSave": true
}
```

---

## 💾 Auto guardado

```json
{
  "files.autoSave": "afterDelay"
}
```

---

## 🧹 Prettier

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

---

## 🔍 ESLint

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

---

## 📁 Archivos

```json
{
  "files.exclude": {
    "node_modules": true,
    "dist": true
  }
}
```

---

## 🧭 UI / UX del editor

```json
{
  "workbench.colorTheme": "Default Dark+",
  "editor.minimap.enabled": false
}
```

---

# 📌 ⚫ SETTINGS MÁS IMPORTANTES EXPLICADOS

## ✍️ editor.fontSize

👉 Tamaño del texto

---

## 📏 editor.tabSize

👉 Espacios de indentación

---

## 🔄 editor.formatOnSave

👉 Formatea al guardar

---

## 💾 files.autoSave

👉 Guarda automáticamente

---

## 🎨 workbench.colorTheme

👉 Tema visual

---

## 🧹 ESLint / Prettier integration

👉 Formato automático del código

---

# 📌 🟤 WORKSPACE vs USER SETTINGS

| Tipo               | Alcance | Uso                 |
|------------------|--------|---------------------|
| User Settings      | Global | Todos los proyectos |
| Workspace Settings | Local  | Un solo proyecto    |

---

# 📌 🧠 REGLA IMPORTANTE

🧠 Prioridad de configuración:

```
Workspace > User Settings > Default VS Code
```

👉 El proyecto puede sobrescribir lo global.

---

> [!TIP]
> Si trabajas en equipo, lo ideal es definir reglas en `workspace settings` para evitar diferencias de estilo entre desarrolladores.

---

# 📌 ⚠️ ERRORES COMUNES

❌ Configurar todo solo en user settings  
❌ No usar formatOnSave  
❌ Mezclar Prettier y ESLint sin orden  
❌ No tener settings por proyecto  

---

# 📌 🚀 CASOS DE USO REALES

✔ Proyectos con equipo → workspace settings  
✔ Estilo personal → user settings  
✔ ESLint + Prettier → autoformat  
✔ Angular / React apps → configuración por proyecto  

---

# ✨ RESUMEN

🧠 `settings.json` = configuración total de VS Code

👉 Permite personalizar el editor  
👉 Se divide en global y por proyecto  
👉 Controla formato, estilo y comportamiento  

🚀 Es clave para tener un entorno profesional y consistente


# ⚙️ VS CODE — `settings.json` TABLA

## 🎨 UI / APARIENCIA
| Propiedad | Valor | Qué hace | Uso |
|-----------|-------|----------|-----|
| `workbench.colorTheme` | `"Default Dark+"` | Tema del editor | Personalización visual |
| `workbench.iconTheme` | `"material-icon-theme"` | Iconos de archivos | Mejora navegación |
| `editor.minimap.enabled` | `false` | Desactiva minimapa | Mejor rendimiento |
| `workbench.startupEditor` | `"none"` | No muestra pantalla inicio | UX más rápida |

## ✍️ EDITOR PRINCIPAL
| Propiedad | Valor | Qué hace | Uso |
|-----------|-------|----------|-----|
| `editor.fontSize` | `14` | Tamaño de fuente | Legibilidad |
| `editor.fontLigatures` | `true` | Ligaduras tipográficas | Mejor estética |
| `editor.tabSize` | `2` | Espacios por tab | Estilo de código |
| `editor.insertSpaces` | `true` | Usa espacios | Consistencia |
| `editor.wordWrap` | `"on"` | Salto de línea automático | Evita scroll horizontal |
| `editor.lineHeight` | `22` | Espaciado vertical | Legibilidad |
| `editor.cursorBlinking` | `"smooth"` | Animación cursor | UX visual |
| `editor.cursorSmoothCaretAnimation` | `"on"` | Movimiento suave cursor | UX fluida |
| `editor.formatOnSave` | `true` | Formatea al guardar | Código limpio automático |
| `editor.formatOnPaste` | `true` | Formatea al pegar | Evita errores |

## 💾 ARCHIVOS
| Propiedad | Valor | Qué hace | Uso |
|-----------|-------|----------|-----|
| `files.autoSave` | `"afterDelay"` | Auto guarda archivos | Seguridad |
| `files.autoSaveDelay` | `1000` | Delay auto save (ms) | Control de guardado |
| `files.trimTrailingWhitespace` | `true` | Elimina espacios finales | Limpieza código |
| `files.insertFinalNewline` | `true` | Nueva línea al final | Estándar Unix |
| `files.exclude` | `{}` | Oculta carpetas | Explorer limpio |

## 🧹 FORMATTERS (PRETTIER / ESLINT)
| Propiedad | Valor | Qué hace | Uso |
|-----------|-------|----------|-----|
| `editor.defaultFormatter` | `"prettier"` | Formateador por defecto | Consistencia |
| `editor.codeActionsOnSave` | `{ "source.fixAll.eslint": true }` | Auto-fix ESLint | Corrección automática |

## 🧠 INTELLISENSE / AUTOCOMPLETE
| Propiedad | Valor | Qué hace | Uso |
|-----------|-------|----------|-----|
| `editor.suggestSelection` | `"first"` | Primer sugerido automático | Velocidad |
| `editor.quickSuggestions` | `{}` | Autocompletado inteligente | Productividad |
| `editor.parameterHints.enabled` | `true` | Ayuda funciones | DX mejorada |

## 🔍 BÚSQUEDA
| Propiedad | Valor | Qué hace | Uso |
|-----------|-------|----------|-----|
| `search.exclude` | `{}` | Excluye carpetas búsqueda | Rendimiento |
| `search.useIgnoreFiles` | `true` | Respeta .gitignore | Consistencia |

## ⚡ RENDIMIENTO
| Propiedad | Valor | Qué hace | Uso |
|-----------|-------|----------|-----|
| `files.watcherExclude` | `{}` | Evita monitoreo pesado | Performance |

## 🌐 LENGUAJES / IMPORTS
| Propiedad | Valor | Qué hace | Uso |
|-----------|-------|----------|-----|
| `javascript.updateImportsOnFileMove.enabled` | `"always"` | Actualiza imports JS | Refactor seguro |
| `typescript.updateImportsOnFileMove.enabled` | `"always"` | Actualiza imports TS | Refactor seguro |
| `typescript.preferences.importModuleSpecifier` | `"relative"` | Imports relativos | Control estructura |

## 🧪 GIT
| Propiedad | Valor | Qué hace | Uso |
|-----------|-------|----------|-----|
| `git.enableSmartCommit` | `true` | Commit rápido | Flujo ágil |
| `git.autofetch` | `true` | Fetch automático | Sync repos |

## 🎯 UX (EXPERIENCIA)
| Propiedad | Valor | Qué hace | Uso |
|-----------|-------|----------|-----|
| `explorer.confirmDelete` | `false` | No confirma borrado | Flujo rápido |
| `explorer.confirmDragAndDrop` | `false` | Sin confirmación DnD | UX rápida |
| `terminal.integrated.defaultProfile.windows` | `"Git Bash"` | Terminal por defecto | Setup dev |

## 🧩 EXTENSIONES
| Propiedad | Valor | Qué hace | Uso |
|-----------|-------|----------|-----|
| `extensions.ignoreRecommendations` | `false` | Muestra sugerencias | Descubrir tools |

## 🚀 PERFORMANCE GLOBAL
| Propiedad | Valor | Qué hace | Uso |
|-----------|-------|----------|-----|
| `editor.largeFileOptimizations` | `true` | Optimiza archivos grandes | Evita lag |
| `files.simpleDialog.enable` | `true` | Mejora diálogos archivos | UX sistema |

## 🧠 RESUMEN RÁPIDO
- 🟢 Editor → estilo + escritura  
- 🔵 Files → guardado + limpieza  
- 🟣 Formatters → Prettier + ESLint  
- 🟡 IntelliSense → autocompletado  
- ⚡ Performance → velocidad  
- 🌐 Imports → refactor automático  
- 🧪 Git → flujo de commits  
- 🎯 UX → experiencia general  

### 💡 IDEA CLAVE
> 👉 “VS Code se optimiza combinando formato automático + limpieza de archivos + performance”