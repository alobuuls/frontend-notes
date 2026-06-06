# 📝 Conventional Commits

## ✨ feat

Nueva funcionalidad, implementación, mejora importante o incorporación de un nuevo módulo.

### Ejemplos

```bash
✨ feat(auth): add login with Google
✨ feat(cart): implement shopping cart
✨ feat(ui): create responsive navbar
```

---

## 🐛 fix

Corrección de errores o comportamientos que no funcionan como se espera.

### Ejemplos

```bash
🐛 fix(auth): validate empty password field
🐛 fix(navbar): correct mobile menu behavior
🐛 fix(api): handle network errors properly
```

---

## ⚡ perf

Mejoras de rendimiento que hacen una sección, componente o página más rápida y eficiente.

### Ejemplos

```bash
⚡ perf(images): optimize image loading
⚡ perf(home): reduce initial render time
⚡ perf(api): cache repeated requests
```

---

## ♻️ refactor

Reestructuración o mejora del código sin modificar su comportamiento externo.

### Casos comunes

- Rehacer una función.
- Simplificar lógica.
- Dividir código en funciones más pequeñas.
- Eliminar duplicación.
- Mejorar legibilidad.

### Ejemplos

```bash
♻️ refactor(auth): simplify login validation
♻️ refactor(utils): split helper functions
♻️ refactor(api): improve request structure
```

---

## 📝 docs

Cambios en documentación, apuntes, comentarios o archivos como README.md.

### Ejemplos

```bash
📝 docs(readme): update installation guide
📝 docs(css): improve CSS notes readability
📝 docs(api): add endpoint documentation
```

---

## 💄 style

Cambios de formato y presentación del código sin afectar su funcionamiento.

### Casos comunes

- Espacios.
- Indentación.
- Comas.
- Punto y coma.
- Orden de propiedades.
- Reglas de linting.

### Ejemplos

```bash
💄 style(css): format styles with prettier
💄 style(js): fix indentation
💄 style(html): improve code formatting
```

---

## 🔧 chore

Tareas de mantenimiento, configuración o procesos internos que no agregan funcionalidades ni modifican la lógica de negocio.

### Casos comunes

- Actualizar dependencias.
- Configurar herramientas.
- Scripts de automatización.
- Ajustes de entorno.

### Ejemplos

```bash
🔧 chore(npm): update dependencies
🔧 chore(eslint): update configuration
🔧 chore(git): add gitignore rules
```

---

## ✅ test

Agregar, actualizar o corregir pruebas.

### Ejemplos

```bash
✅ test(auth): add login tests
✅ test(api): cover error responses
✅ test(cart): update checkout tests
```

---

## 🚀 build

Cambios relacionados con compilación, empaquetado o despliegue.

### Ejemplos

```bash
🚀 build(vite): update build configuration
🚀 build(docker): optimize image size
🚀 build(ci): improve deployment pipeline
```

---

## 🔀 merge

Fusión de ramas.

### Ejemplos

```bash
🔀 merge: merge branch feature/auth
🔀 merge: merge develop into main
```

---

## ⏪ revert

Revierte uno o varios commits anteriores.

### Ejemplos

```bash
⏪ revert: remove broken authentication update
⏪ revert: rollback navbar redesign
```

---

# 📌 Estructura recomendada

```bash
emoji tipo(scope): descripción
```

### Ejemplos

```bash
✨ feat(auth): add JWT authentication
🐛 fix(cart): prevent duplicate products
♻️ refactor(api): simplify fetch logic
📝 docs(css): migrate notes to markdown
⚡ perf(images): lazy load gallery
```
