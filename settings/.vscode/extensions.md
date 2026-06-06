# 🧩 📘 extensions.json en VS Code

🧠 El archivo **extensions.json** se usa para **recomendar extensiones de VS Code dentro de un proyecto**.

👉 Es como decir: *“si trabajas en este proyecto, instala estas extensiones para hacerlo correctamente”*.

---

# 📌 🟢 ¿QUÉ ES extensions.json?

🧠 Es un archivo que vive dentro de:

```
.vscode/extensions.json
```

👉 Define una lista de extensiones recomendadas para un proyecto.

💡 Ejemplo básico:

```json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "angular.ng-template"
  ]
}
```

---

# 📌 🔵 ¿PARA QUÉ SIRVE?

🧠 Sirve para estandarizar el entorno de desarrollo.

👉 Especialmente útil en equipos o proyectos grandes.

✔ Asegura que todos usen las mismas herramientas  
✔ Evita errores por falta de extensiones  
✔ Mejora productividad desde el inicio  

---

# 📌 🟣 ¿DÓNDE SE USA?

🧠 Siempre dentro del proyecto:

```
project/
 └── .vscode/
      └── extensions.json
```

👉 VS Code lo detecta automáticamente.

---

# 📌 🟡 ¿CÓMO FUNCIONA?

🧠 Cuando alguien abre el proyecto:

👉 VS Code detecta `extensions.json`  
👉 Muestra un popup:

> “Este proyecto recomienda instalar estas extensiones”

👉 El usuario puede instalarlas con un click.

---

# 📌 🟠 ESTRUCTURA COMPLETA

```json
{
  "recommendations": [],
  "unwantedRecommendations": []
}
```

---

# 📌 🔴 RECOMMENDATIONS

🧠 Lista de extensiones recomendadas.

💡 Ejemplo:

```json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "angular.ng-template",
    "ms-vscode.vscode-typescript-next"
  ]
}
```

---

# 📌 ⚫ UNWANTED RECOMMENDATIONS

🧠 Lista de extensiones que NO quieres que se usen.

💡 Ejemplo:

```json
{
  "unwantedRecommendations": [
    "some.random-theme-extension",
    "old-linter.bad-extension"
  ]
}
```

👉 Sirve para evitar malas prácticas en equipo.

---

# 📌 🧩 CASOS DE USO REALES

✔ Proyectos Angular → recomendar Angular Language Service  
✔ React → ESLint + Prettier + React snippets  
✔ Node.js → Nodemon + ESLint  
✔ Equipos grandes → estandarizar tooling  

---

# 📌 🧠 EJEMPLO REAL (ANGULAR PRO)

```json
{
  "recommendations": [
    "angular.ng-template",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "ms-vscode.vscode-typescript-next",
    "formulahendry.auto-rename-tag"
  ]
}
```

---

# 📌 ⚠️ ERRORES COMUNES

❌ Meter demasiadas extensiones  
❌ No actualizar recomendaciones  
❌ Usar extensiones innecesarias  
❌ No usarlo en equipos (pierdes consistencia)

---

# 📌 🚀 BUENAS PRÁCTICAS

✔ Solo incluir extensiones realmente necesarias  
✔ Separar herramientas de formato y linting  
✔ Mantenerlo actualizado  
✔ Usarlo en proyectos colaborativos  
✔ Evitar “bloat” de extensiones  

> [!TIP]
> Menos extensiones = VS Code más rápido y entorno más estable.

---

# 📌 🧠 IDEA CLAVE

🧠 `extensions.json` = “setup automático del entorno de desarrollo”

👉 No configura código  
👉 Configura el editor  

---

# ✨ RESUMEN

🧠 `extensions.json` sirve para:

✔ recomendar extensiones  
✔ estandarizar equipos  
✔ mejorar productividad  
✔ evitar configuraciones manuales  

🚀 Es clave en proyectos profesionales bien organizados


# 📌 EXTENSIONES RECOMENDADAS VS CODE TABLA

> 👉 VS Code sugerirá instalar estas extensiones al abrir el proyecto

## 🎨 FORMATEO Y CALIDAD DE CÓDIGO
| Extensión | Qué hace |
|-----------|----------|
| `esbenp.prettier-vscode` | Formateador automático de código |
| `dbaeumer.vscode-eslint` | Linter para detectar errores en JS/TS |
| `editorconfig.editorconfig` | Mantiene estilos consistentes entre equipos |

## 🧠 ANGULAR / TYPESCRIPT
| Extensión | Qué hace |
|-----------|----------|
| `angular.ng-template` | IntelliSense oficial de Angular (templates + bindings) |
| `ms-vscode.vscode-typescript-next` | Versión avanzada de TypeScript |
| `johnpapa.angular2-snippets` | Snippets para Angular (componentes, servicios, etc.) |

## ⚛️ REACT (si aplica)
| Extensión | Qué hace |
|-----------|----------|
| `dsznajder.es7-react-js-snippets` | Snippets de React modernos |
| `bradlc.vscode-tailwindcss` | Soporte Tailwind CSS con autocompletado |

## 🌐 WEB / HTML / CSS
| Extensión | Qué hace |
|-----------|----------|
| `formulahendry.auto-rename-tag` | Renombra etiquetas HTML automáticamente |
| `formulahendry.auto-close-tag` | Cierra etiquetas HTML automáticamente |
| `naumovs.color-highlight` | Muestra colores directamente en el código |
| `pranaygp.vscode-css-peek` | Ir del HTML al CSS rápidamente |

## 🧹 PRODUCTIVIDAD
| Extensión | Qué hace |
|-----------|----------|
| `streetsidesoftware.code-spell-checker` | Detecta errores de ortografía en código |
| `mhutchie.git-graph` | Visualiza el historial de Git |
| `eamodio.gitlens` | Git avanzado (blame, historial, autor) |

## 🚀 RENDIMIENTO / UTILIDADES
| Extensión | Qué hace |
|-----------|----------|
| `visualstudioexptteam.vscodeintellicode` | Mejora autocompletado con IA |
| `ms-vscode.live-server` | Servidor local para HTML |

## 🧪 TESTING
| Extensión | Qué hace |
|-----------|----------|
| `vitest.explorer` | Soporte para Vitest |
| `orta.vscode-jest` | Soporte para Jest |

## 🧩 JSON / API / BACKEND
| Extensión | Qué hace |
|-----------|----------|
| `humao.rest-client` | Hacer requests HTTP desde VS Code |
| `redhat.vscode-yaml` | Soporte YAML (configs, pipelines) |

---

## 🚫 EXTENSIONES NO RECOMENDADAS
> 👉 Estas extensiones se bloquean o desaconsejan en el proyecto

| Extensión | Motivo |
|-----------|--------|
| `some-old-theme.bad-theme-extension` | Themes innecesarios o inconsistentes |
| `random-linter.outdated-linter` | Linters antiguos que generan conflictos |
| `deprecated.angular-old-extension` | Extensiones antiguas de Angular |