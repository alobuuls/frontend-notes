# 📘 NPM DEPENDENCIES

> [!NOTE]
> NPM (Node Package Manager) es el gestor de paquetes más usado en JavaScript.

👉 Permite instalar, compartir y reutilizar código creado por otros desarrolladores.

---

## 🎯 Objetivo

✔ Reutilizar código

✔ Evitar reinventar la rueda

✔ Compartir librerías

✔ Gestionar versiones

✔ Mantener proyectos organizados

---

# 📘 🟢 ¿QUÉ ES UNA DEPENDENCY?

> [!NOTE]
> Una dependency es una librería que tu proyecto necesita para funcionar.

## 💡 Ejemplos

* Angular
* RxJS
* Lodash
* Axios
* FreeAlerts

👉 Tu proyecto depende de ellas.

---

### 💡 Ejemplo package.json

```json
{
  "dependencies": {
    "free-alerts": "^1.0.0"
  }
}
```

> [!TIP]
> Si eliminas una dependency necesaria, tu aplicación puede dejar de funcionar correctamente.

---

# 📘 🔵 ¿PARA QUÉ SIRVEN?

## 🎯 Beneficios

✔ Reutilizar código probado

✔ Ahorrar tiempo

✔ Reducir errores

✔ Compartir funcionalidades

✔ Mantener proyectos escalables

👉 En lugar de programar todo desde cero.

---

> [!TIP]
> Una buena dependencia puede ahorrar cientos o miles de líneas de código.

---

# 📘 🟣 TIPOS DE DEPENDENCIAS

## 📌 dependencies

> [!NOTE]
> Necesarias en producción.

### 💡 Ejemplos

* Angular
* RxJS
* FreeAlerts

---

## 📌 devDependencies

> [!NOTE]
> Solo para desarrollo.

### 💡 Ejemplos

* Vitest
* Jest
* ESLint
* Prettier
* TypeScript

---

### 💡 Ejemplo

```json
{
  "dependencies": {},
  "devDependencies": {}
}
```

---

## 🎯 Diferencia rápida

| Tipo            | Se usa en producción | Se usa en desarrollo |
| --------------- | -------------------- | -------------------- |
| dependencies    | ✔️ Sí                | ✔️ Sí                |
| devDependencies | ❌ No                 | ✔️ Sí                |

> [!IMPORTANT]
> Todo lo que necesite ejecutarse cuando la aplicación esté en producción debe ir en `dependencies`.

> [!IMPORTANT]
> Herramientas como testing, linting o compilación suelen ir en `devDependencies`.

---

# 📘 🟡 INSTALAR DEPENDENCIAS

## ✔ Instalar paquete

```bash
npm install nombre-paquete
```

### 💡 Ejemplo

```bash
npm install free-alerts
```

---

## ✔ Instalar como dependencia de desarrollo

```bash
npm install -D vitest
```

o

```bash
npm install --save-dev vitest
```

> [!TIP]
> `-D` es simplemente la versión corta de `--save-dev`.

---

# 📘 🟠 ¿DÓNDE SE GUARDAN?

> [!NOTE]
> NPM crea automáticamente la carpeta:

```text
node_modules/
```

👉 Aquí viven todas las dependencias.

---

> [!WARNING]
> Normalmente nunca se sube `node_modules` a Git.

---

### 💡 Se ignora mediante

```gitignore
node_modules/
```

---

## 🧠 ¿Por qué no se sube?

Porque:

✔ Puede ocupar cientos de MB

✔ Puede contener miles de archivos

✔ Puede regenerarse automáticamente

✔ Ya queda registrada en `package.json`

✔ Ya queda registrada en `package-lock.json`

---

> [!IMPORTANT]
> Cuando otra persona clona el proyecto, simplemente ejecuta:

```bash
npm install
```

y NPM reconstruye toda la carpeta `node_modules`.

---

# ✨ RESUMEN

> [!NOTE]
> Dependency = librería que tu proyecto necesita para funcionar.

👉 `dependencies` → producción

👉 `devDependencies` → desarrollo

👉 `npm install paquete` → instala una dependencia

👉 `npm install -D paquete` → instala una dependencia de desarrollo

👉 `node_modules/` → almacena todas las dependencias

👉 `.gitignore` → evita subir `node_modules`

---

> [!TIP]
> Entender bien la diferencia entre `dependencies` y `devDependencies` es fundamental para mantener proyectos profesionales organizados y optimizados.

# 📘 🔴 PACKAGE.JSON

> [!NOTE]
> Es el corazón de un proyecto NPM.

👉 Describe información fundamental del proyecto:

- Nombre
- Versión
- Scripts
- Dependencias
- Autor
- Licencia

---

### 💡 Ejemplo

```json
{
  "name": "free-alerts",
  "version": "1.0.0"
}
```

> [!TIP]
> Todo proyecto profesional debería tener un `package.json` bien documentado y organizado.

---

# 📘 ⚫ PACKAGE-LOCK.JSON

> [!NOTE]
> Guarda las versiones exactas de todas las dependencias instaladas.

👉 Garantiza que todos los desarrolladores instalen exactamente las mismas versiones.

### ✔ Beneficios

✔ Más estabilidad

✔ Menos errores

✔ Instalaciones reproducibles

✔ Evita diferencias entre entornos

---

> [!IMPORTANT]
> `package-lock.json` sí debe subirse a Git.

---

## 🧠 Diferencia rápida

| Archivo | Función |
|----------|----------|
| `package.json` | Describe el proyecto y sus dependencias |
| `package-lock.json` | Guarda las versiones exactas instaladas |

---

# ✨ RESUMEN

> [!NOTE]
> NPM utiliza dos archivos fundamentales para gestionar dependencias.

👉 `package.json` → configuración principal del proyecto

👉 `package-lock.json` → versiones exactas instaladas

👉 `npm init` → crear proyecto

👉 `npm install` → instalar dependencias

👉 `npm uninstall` → eliminar dependencias

👉 `npm update` → actualizar dependencias

👉 `MAJOR.MINOR.PATCH` → Semantic Versioning

👉 `^` → permite actualizaciones minor y patch

👉 `~` → permite solo actualizaciones patch

👉 `1.2.0` → versión exacta

---

> [!TIP]
> Comprender Semantic Versioning y los operadores de versión es fundamental para evitar errores inesperados al actualizar dependencias en proyectos reales.

# 📘 🟣 ¿CUÁNDO CREAR UNA LIBRERÍA?

> [!NOTE]
> Una librería tiene sentido cuando una funcionalidad se reutiliza muchas veces en distintos proyectos.

---

## 💡 Ejemplos

- Sistema de alertas
- Componentes UI
- Utilidades
- Validaciones
- SDKs

👉 Si una solución se repite constantemente, puede ser buena candidata para convertirse en una librería.

---

## 🎯 Beneficios de crear una librería

✔ Reutilización de código

✔ Menos duplicación

✔ Mantenimiento centralizado

✔ Distribución sencilla

✔ Uso en múltiples proyectos

---

> [!TIP]
> Antes de crear una librería, asegúrate de que la funcionalidad sea suficientemente reutilizable y no esté demasiado ligada a un único proyecto.

---
# 📘 ⚫ RELEASE DE UNA LIBRERÍA

> [!NOTE]
> Un release es el proceso completo para publicar una nueva versión

---

## 🎯 Flujo recomendado

### 1️⃣ Realizar cambios

- Nuevas funcionalidades
- Correcciones
- Mejoras

---

### 2️⃣ Ejecutar build

```bash
npm run build
```

---

### 3️⃣ Actualizar versión

```bash
npm version patch
```

o

```bash
npm version minor
```

o

```bash
npm version major
```

---

### 4️⃣ Subir cambios a Git

```bash
git push
```

---

### 5️⃣ Publicar en NPM

```bash
npm publish
```

---

### 🎉 Resultado

```txt
Nueva versión disponible para todos los usuarios
```

---

> [!TIP]
> Mantener un CHANGELOG ayuda a que los usuarios sepan exactamente qué cambió en cada release.

---

# ⚠️ COSAS IMPORTANTES

> [!IMPORTANT]
> Una librería debe resolver un problema reutilizable.

> [!IMPORTANT]
> `npm login` es necesario antes de publicar.

> [!IMPORTANT]
> `npm publish` publica la versión actual definida en `package.json`.

> [!IMPORTANT]
> Debes actualizar la versión antes de cada nueva publicación.

> [!IMPORTANT]
> Semantic Versioning permite comunicar claramente el tipo de cambios realizados.

---

# ✨ RESUMEN

> [!NOTE]
> Publicar una librería en NPM sigue un flujo relativamente simple.

👉 Crear proyecto

👉 Desarrollar funcionalidad

👉 Generar build

👉 Iniciar sesión con `npm login`

👉 Actualizar versión con `npm version`

👉 Publicar con `npm publish`

👉 Compartir la librería con la comunidad

---

> [!TIP]
> Si una funcionalidad aparece repetidamente en varios proyectos, probablemente sea una buena candidata para convertirse en una librería NPM 🚀

# 📘 ⚪ ESTRUCTURA TÍPICA DE UNA LIBRERÍA

> [!NOTE]
> La mayoría de las librerías JavaScript siguen una estructura similar para mantener organización y facilitar el mantenimiento.

---

## 📁 Estructura básica

```text
my-library/

├── src/
├── dist/
├── package.json
├── README.md
├── LICENSE
└── .gitignore
```

---

## 🧠 Descripción de cada elemento

| Archivo / Carpeta | Función |
|-------------------|----------|
| `src/` | Código fuente de la librería |
| `dist/` | Build compilado para distribución |
| `package.json` | Configuración del proyecto |
| `README.md` | Documentación principal |
| `LICENSE` | Licencia del proyecto |
| `.gitignore` | Archivos que Git debe ignorar |

---

> [!TIP]
> Mantener una estructura consistente facilita que otros desarrolladores entiendan y contribuyan a tu librería.

---

# 📘 🟤 README IMPORTANTE

> [!NOTE]
> Toda librería debería incluir documentación clara desde el primer día.

---

## ✔ Contenido mínimo recomendado

- Instalación
- Uso
- API
- Ejemplos
- Licencia

---

👉 Facilita la adopción por otros desarrolladores.

👉 Reduce preguntas y problemas de integración.

👉 Mejora la experiencia de quienes utilizan tu librería.

---

> [!IMPORTANT]
> Una buena librería con mala documentación suele ser difícil de adoptar.

---

# 📘 🟢 VENTAJAS DE PUBLICAR EN NPM

## ✔ Beneficios

✔ Compartir código

✔ Reutilización

✔ Comunidad

✔ Versionado automático

✔ Distribución sencilla

---

## 🎯 Resultado

Una vez publicada, cualquier desarrollador puede instalarla mediante:

```bash
npm install nombre-paquete
```

---

> [!TIP]
> Publicar en NPM convierte tu código en una herramienta reutilizable para miles de desarrolladores.

---

# 📘 🔵 DESVENTAJAS

## ❌ Retos comunes

❌ Mantenimiento continuo

❌ Compatibilidad entre versiones

❌ Gestión de bugs

❌ Documentación obligatoria

---

## 🧠 Realidad

Publicar una librería implica una responsabilidad continua.

Los usuarios esperarán:

- Correcciones
- Actualizaciones
- Compatibilidad
- Soporte

---

> [!WARNING]
> Una librería abandonada puede generar problemas a quienes dependen de ella.

---

# 📘 🟣 BUENAS PRÁCTICAS

## ✔ Recomendaciones

✔ Usar Semantic Versioning

✔ Mantener README actualizado

✔ Crear changelog

✔ Escribir tests

✔ No romper compatibilidad innecesariamente

✔ Versionar antes de publicar

---

## 📋 Checklist profesional

- [ ] README actualizado
- [ ] Tests funcionando
- [ ] Build generado
- [ ] Versión actualizada
- [ ] Changelog actualizado
- [ ] Código revisado

---

> [!TIP]
> Automatizar pruebas y builds ayuda a reducir errores antes de cada publicación.

---

# 📘 🟡 CASOS REALES

> [!NOTE]
> Muchas de las herramientas más utilizadas en JavaScript se distribuyen mediante NPM.

---

## 🧠 Angular

👉 Se instala desde npm.

---

## 🧠 RxJS

👉 Se instala desde npm.

---

## 🧠 FreeAlerts

👉 Se instala desde npm.

---

## 🎯 Conclusión

Todas son dependencias reutilizables que otros proyectos consumen.

---

# 📘 🟠 REGLA MENTAL

## 🧠 Proyecto

```txt
Consume dependencias
```

---

## 🧠 Librería

```txt
Es una dependencia para otros
```

---

## 🎯 Diferencia visual

| Concepto | Función |
|-----------|-----------|
| Proyecto | Consume librerías |
| Librería | Es consumida por otros proyectos |

---

👉 Una misma aplicación puede hacer ambas cosas.

Por ejemplo:

```txt
Mi aplicación
    ↓

Usa Angular
Usa RxJS
Usa FreeAlerts

    ↓

Pero también publica

Mi propia librería
```

---

# ⚠️ COSAS IMPORTANTES

> [!IMPORTANT]
> `node_modules` no se sube a Git.

> [!IMPORTANT]
> `package.json` describe el proyecto.

> [!IMPORTANT]
> `package-lock.json` bloquea versiones exactas.

> [!IMPORTANT]
> `npm publish` publica una librería en NPM.

> [!IMPORTANT]
> Semantic Versioning controla los cambios entre versiones.

---

# ✨ RESUMEN

> [!NOTE]
> NPM es el gestor de paquetes que impulsa gran parte del ecosistema JavaScript moderno.

---

## 🧠 Conceptos clave

👉 `dependency` = librería usada por tu proyecto

👉 `package.json` = configuración del proyecto

👉 `node_modules` = paquetes instalados

👉 `npm install` = instalar dependencias

👉 `npm publish` = publicar una librería

👉 `npm version` = actualizar versión

---

## 🎯 Regla final

```txt
Proyecto → consume dependencias

Librería → es una dependencia para otros
```

---

> [!TIP]
> Comprender cómo funcionan las dependencias, el versionado y la publicación en NPM es una de las habilidades fundamentales para cualquier desarrollador JavaScript moderno 🚀