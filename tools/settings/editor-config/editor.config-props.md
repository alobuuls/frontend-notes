# 📘 🧠 TABLA COMPLETA .EDITORCONFIG

| Propiedad | Ejemplo | Qué hace | Uso |
|------------|----------|----------|-----|
| `root` | `true` | Define el archivo como principal | Evita que busque otros `.editorconfig` |
| `charset` | `utf-8` | Define codificación del archivo | Soporta acentos, emojis y símbolos |
| `indent_style` | `space` | Usa espacios en vez de tabs | Estándar moderno JS/TS |
| `indent_size` | `2` | Número de espacios por indentación | Consistencia visual |
| `tab_width` | `2` | Ancho visual del tab | Mejora alineación entre editores |
| `end_of_line` | `lf` | Tipo de salto de línea | Git, Linux, CI/CD |
| `insert_final_newline` | `true` | Agrega línea final | Evita errores en tooling |
| `trim_trailing_whitespace` | `true` | Elimina espacios al final | Código limpio |
| `max_line_length` | `100` | Máximo de caracteres por línea | Legibilidad |
| `quote_type` | `single` | Preferencia de comillas | Consistencia de estilo |

---

# 📘 🟡 JAVASCRIPT

| Propiedad | Ejemplo | Qué hace | Uso |
|------------|----------|----------|-----|
| `indent_size` | `2` | Indentación JS | Código limpio |
| `quote_type` | `single` | Comillas simples | Consistencia JS |

---

# 📘 🔵 TYPESCRIPT

| Propiedad | Ejemplo | Qué hace | Uso |
|------------|----------|----------|-----|
| `indent_size` | `2` | Indentación TS | Estándar Angular/React |
| `quote_type` | `single` | Comillas simples | Evita mezcla de estilos |

---

# 📘 🌐 HTML

| Propiedad | Ejemplo | Qué hace | Uso |
|------------|----------|----------|-----|
| `indent_size` | `2` | Indentación HTML | Legibilidad |
| `end_of_line` | `lf` | Saltos de línea consistentes | Evita problemas cross-platform |
| `trim_trailing_whitespace` | `true` | Limpia espacios sobrantes | HTML limpio |

---

# 📘 🎨 CSS / SCSS / LESS

| Propiedad | Ejemplo | Qué hace | Uso |
|------------|----------|----------|-----|
| `indent_size` | `2` | Indentación de estilos | CSS organizado |

---

# 📘 📄 JSON

| Propiedad | Ejemplo | Qué hace | Uso |
|------------|----------|----------|-----|
| `indent_size` | `2` | Formato JSON limpio | Configuraciones legibles |
| `insert_final_newline` | `false` | Evita salto final | Compatibilidad estricta |

---

# 📘 🧾 MARKDOWN

| Propiedad | Ejemplo | Qué hace | Uso |
|------------|----------|----------|-----|
| `trim_trailing_whitespace` | `false` | Evita romper listas y saltos de línea | Documentación limpia |
| `insert_final_newline` | `true` | Agrega línea final | Buenas prácticas |
| `max_line_length` | `80` | Limita longitud de línea | Mejor lectura |

---

# 📘 ⚙️ YAML

| Propiedad | Ejemplo | Qué hace | Uso |
|------------|----------|----------|-----|
| `indent_size` | `2` | Indentación estricta | Configuración segura |

---

# 📘 🔐 ENV FILES

| Propiedad | Ejemplo | Qué hace | Uso |
|------------|----------|----------|-----|
| `insert_final_newline` | `true` | Agrega línea final | Limpieza de configuraciones |

---

# 📘 🧪 TEST FILES

| Propiedad | Ejemplo | Qué hace | Uso |
|------------|----------|----------|-----|
| `indent_size` | `2` | Consistencia en pruebas | Orden en testing |

---

# 📘 🧩 FRAMEWORK FILES

| Propiedad / Patrón | Ejemplo | Qué hace | Uso |
|--------------------|----------|----------|-----|
| `indent_size` | `2` | Indentación para componentes | Código consistente |
| `*.module.ts` | `2` | Módulos Angular | Organización |
| `*.component.html` | `2` | Templates Angular | UI limpia |

---

# 📘 🧠 CONFIG FILES

| Propiedad | Ejemplo | Qué hace | Uso |
|------------|----------|----------|-----|
| `indent_size` | `2` | Configuraciones consistentes | Orden del proyecto |

---

# 📘 🚫 MINIFIED FILES

| Propiedad | Ejemplo | Qué hace | Uso |
|------------|----------|----------|-----|
| `indent_style` | `none` | No aplicar formato | Evita romper builds |

---

# ⚡ RESUMEN RÁPIDO

| Área | Controlado por `.editorconfig` |
|--------|------------------------------|
| Indentación | ✅ |
| Espacios vs Tabs | ✅ |
| Saltos de línea | ✅ |
| Limpieza de archivos | ✅ |
| Consistencia entre equipos | ✅ |
| Reglas por tipo de archivo | ✅ |
| Formateo completo del código | ❌ |
| Reordenar imports | ❌ |
| Corregir sintaxis | ❌ |