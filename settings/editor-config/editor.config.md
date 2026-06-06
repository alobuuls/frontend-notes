# 📘 .EDITORCONFIG — CONFIGURACIÓN DE ESTILO DE CÓDIGO

---

## 🧠 <important>¿QUÉ ES?</important>

`.editorconfig` es un archivo de configuración que define reglas de estilo de código compartidas entre editores y equipos.

👉 Funciona para mantener el mismo estilo de código sin importar:

- VS Code  
- WebStorm  
- Sublime Text  
- otros editores compatibles  

---

## 🎯 <note>¿PARA QUÉ SIRVE?</note>

Sirve para:

✔ Evitar discusiones de estilo en equipo  
✔ Mantener consistencia en el código  
✔ Definir reglas básicas de formato  
✔ Evitar diferencias entre sistemas (Windows / Linux / Mac)  
✔ Complementar Prettier y ESLint  

---

## 🧠 💡 IDEA CLAVE

👉 No es un formateador como Prettier  
👉 Es una guía de estilo universal para editores  

---

## 📦 ¿DÓNDE SE USA?

📌 Se coloca en la raíz del proyecto:


.editorconfig


👉 VS Code lo detecta automáticamente si tienes la extensión:

- EditorConfig for VS Code  

---

## ⚙️ EJEMPLO BÁSICO

```ini
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
```

---

# 🧩 CONFIGURACIÓN POR TIPOS DE ARCHIVO

```ini
[*.js]
indent_size = 2

[*.ts]
indent_size = 2

[*.html]
indent_size = 2

[*.css]
indent_size = 2
```

👉 Permite reglas distintas por lenguaje.

---

# 🔥 ¿CÓMO FUNCIONA?

1. Abres un archivo.
2. El editor detecta `.editorconfig`.
3. Aplica las reglas automáticamente.
4. Sobrescribe configuraciones locales del editor.

---

# 🆚 DIFERENCIA CON PRETTIER

| EditorConfig | Prettier |
|-------------|----------|
| Define reglas base | Formatea código completo |
| Funciona en cualquier editor | Principalmente ecosistema JS/TS |
| No cambia código agresivamente | Reescribe el código |
| Muy ligero | Más complejo |

👉 Se complementan, no compiten.

---

# ⚠️ LIMITACIONES

- No formatea lógica del código.
- No reorganiza imports.
- No arregla sintaxis.
- Solo controla estilo básico.

---

# 🧠 BUENAS PRÁCTICAS

✔ Usarlo siempre en proyectos en equipo.  
✔ Combinarlo con Prettier + ESLint.  
✔ Mantener reglas simples.  
✔ No duplicar reglas que ya maneja Prettier.  
✔ Definirlo desde el inicio del proyecto.

---

# 💡 CUÁNDO USARLO

👉 Úsalo cuando:

- Trabajas en equipo.
- Quieres consistencia entre editores.
- Quieres reglas base universales.
- Tienes proyectos grandes o colaborativos.

---

# 🚀 RESUMEN

👉 `.editorconfig` es un archivo que:

- Define estilo básico de código.
- Funciona en cualquier editor.
- Mantiene consistencia en equipos.
- Evita problemas de formato entre desarrolladores.

---

# 🧠 IDEA FINAL

> "EditorConfig no formatea tu código...
> solo asegura que todos lo escriban con el mismo estilo desde el inicio."