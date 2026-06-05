# 📘 GUÍA COMPLETA — CREAR Y PUBLICAR UNA LIBRERÍA NPM DESDE CERO

## 🧠 Objetivo

Aprender todo el flujo real para crear una librería JavaScript,  
prepararla para producción y publicarla en NPM.

👉 Exactamente el mismo proceso que usan librerías como:

- Angular
- RxJS
- Axios
- Lodash
- SweetAlert2
- FreeAlerts

---

# 📘 🟢 PASO 1 — ¿QUÉ ES UNA LIBRERÍA?

## 🧠 Una librería es código reutilizable.

👉 En lugar de copiar el mismo código entre proyectos:

```text
Proyecto A
Proyecto B
Proyecto C
```

Creamos:

```text
mi-libreria
```

y todos los proyectos la consumen.

## 🎯 Beneficios

✔ Reutilización

✔ Mantenimiento centralizado

✔ Versionado

✔ Distribución sencilla

> [!TIP]
> Si una funcionalidad se reutiliza constantemente en varios proyectos, suele ser una buena candidata para convertirse en librería.

---

# 📘 🔵 PASO 2 — CREAR EL PROYECTO

## Crear carpeta

```bash
mkdir free-alerts
```

## Entrar

```bash
cd free-alerts
```

## Inicializar npm

```bash
npm init
```

o

```bash
npm init -y
```

Esto crea:

```text
package.json
```

---

# 📘 🟣 PASO 3 — ENTENDER package.json

## Ejemplo

```json
{
  "name": "free-alerts",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {},
  "author": "",
  "license": "MIT"
}
```

### 📌 name

Nombre del paquete en npm

⚠️ Debe ser único

### 📌 version

Versión actual

### 📌 main

Punto de entrada

### 📌 scripts

Comandos npm

### 📌 author

Autor

### 📌 license

Licencia

---

# 📘 🟡 PASO 4 — ESTRUCTURA DEL PROYECTO

## Ejemplo

```text
free-alerts/

├── src/
│   ├── toast.js
│   ├── alert.js
│   └── index.js
│
├── dist/
│
├── package.json
├── README.md
├── LICENSE
└── .gitignore
```

### 📌 src

Código fuente

### 📌 dist

Código compilado

---

# 📘 🟠 PASO 5 — DESARROLLAR LA LIBRERÍA

## Ejemplo simple

```js
export function hello() {
  console.log('Hola mundo');
}
```

---

# 📘 🔴 PASO 6 — CREAR UN ENTRY POINT

### 📌 index.js

Reexporta todo:

```js
export * from './toast';
export * from './alert';
```

👉 Es el archivo que consumirán los usuarios.

---

# 📘 ⚫ PASO 7 — INSTALAR VITE (RECOMENDADO)

## Instalar

```bash
npm install vite -D
```

Crear configuración.

## Beneficios

✔ Bundling

✔ Minificación

✔ ES Modules

✔ UMD

> [!TIP]
> Vite es una de las herramientas más utilizadas actualmente para construir librerías y aplicaciones modernas gracias a su velocidad y simplicidad.

---

# 📘 ⚪ PASO 8 — CONFIGURAR BUILD

## package.json

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  }
}
```

---

# 📘 🟤 PASO 9 — GENERAR BUILD

## Ejecutar

```bash
npm run build
```

## Resultado

```text
dist/

├── mi-libreria.es.js
├── mi-libreria.umd.js
└── style.css
```

### 📌 ES Module

Para React

Angular

Vue

Vite

### 📌 UMD

Para navegador puro

---

---

# 📘 🟢 PASO 10 — README

Todo paquete serio necesita README.

Debe incluir:

✔ Qué hace

✔ Instalación

✔ Uso

✔ API

✔ Licencia

## Ejemplo

```bash
npm install mi-libreria
```

> [!TIP]
> Un buen README suele ser la primera documentación que leerán los usuarios de tu librería.

---

# 📘 🔵 PASO 11 — LICENSE

## Archivo

```text
LICENSE
```

## Licencia común

```text
MIT
```

Permite uso comercial.

---

# 📘 🟣 PASO 12 — .gitignore

## Crear

```gitignore
node_modules
dist
.env
```

---

# 📘 🟡 PASO 13 — CREAR REPOSITORIO GITHUB

Crear repo.

## Ejemplo

```text
github.com/alobuuls/free-alerts
```

## Subir

```bash
git init

git add .

git commit -m "🎉 Initial release"

git branch -M main

git remote add origin URL

git push -u origin main
```

---

# 📘 🟠 PASO 14 — CREAR CUENTA NPM

## Ir a

```text
https://www.npmjs.com
```

Crear usuario.

---

# 📘 🔴 PASO 15 — LOGIN NPM

## Ejecutar

```bash
npm login
```

Pedirá:

```text
username
password
email
```

---

# 📘 ⚫ PASO 16 — VERIFICAR LOGIN

## Ejecutar

```bash
npm whoami
```

## Resultado

```text
alobuuls
```

---
---

# 📘 ⚪ PASO 17 — PUBLICAR

## Ejecutar

```bash
npm publish
```

## Resultado

```text
https://npmjs.com/package/mi-libreria
```

🎉 Librería publicada.

---

# 📘 🟤 PASO 18 — VERSIONADO

## 🧠 Nunca sobrescribes una versión.

NPM no lo permite.

Debes subir una nueva.

---

# 📘 🟢 SEMANTIC VERSIONING

## Formato

```text
MAJOR.MINOR.PATCH
```

## Ejemplo

```text
1.4.2
```

---

# 📘 PATCH

```text
1.0.0
    ↓
1.0.1
```

## Para

✔ Bugs

✔ Fixes

---

# 📘 MINOR

```text
1.0.0
    ↓
1.1.0
```

## Para

✔ Nuevas funcionalidades

---

# 📘 MAJOR

```text
1.0.0
    ↓
2.0.0
```

## Para

✔ Breaking Changes

---

# 📘 COMANDOS DE VERSIONADO

## PATCH

```bash
npm version patch
```

---

## MINOR

```bash
npm version minor
```

---

## MAJOR

```bash
npm version major
```

---

> [!TIP]
> Utiliza PATCH para correcciones, MINOR para nuevas funcionalidades y MAJOR cuando existan cambios incompatibles con versiones anteriores.

---

# 📘 PASO 19 — NUEVA RELEASE

## Flujo real

```text
Cambiar código
    ↓

Testear
    ↓

Build
    ↓

npm version patch
    ↓

git push
    ↓

npm publish
```

---

---

# 📘 PASO 20 — INSTALAR TU LIBRERÍA

## En otro proyecto

```bash
npm install mi-libreria
```

## Uso

```js
import MiLib from 'mi-libreria';
```

---

# 📘 DEPENDENCIES VS DEVDEPENDENCIES

## dependencies

Necesarias en producción

### Ejemplos

```text
rxjs
free-alerts
angular
```

---

## devDependencies

Solo desarrollo

### Ejemplos

```text
vite
vitest
eslint
```

---

# 📘 FLUJO COMPLETO MENTAL

```text
Idea
    ↓

npm init
    ↓

Crear código
    ↓

Crear README
    ↓

Crear LICENSE
    ↓

GitHub
    ↓

npm login
    ↓

npm run build
    ↓

npm publish
    ↓

Librería pública
    ↓

Actualizaciones
    ↓

npm version
    ↓

npm publish
```

---

# 📘 ERRORES COMUNES

## ❌ No cambiar versión

```text
npm publish falla
```

---

## ❌ No generar build

```text
se publica código roto
```

---

## ❌ README incompleto

```text
mala adopción
```

---

## ❌ Nombre ya existente

```text
npm publish falla
```

---

## ❌ Publicar secretos

```text
API Keys
Tokens
.env
```

---

# 📘 BUENAS PRÁCTICAS

✔ README profesional

✔ Semantic Versioning

✔ Tests

✔ GitHub

✔ Changelog

✔ Licencia MIT

✔ API simple

✔ Ejemplos de uso

> [!TIP]
> Cuanto más fácil sea instalar, entender y utilizar una librería, mayor será su adopción por otros desarrolladores.

---

# ✨ RESUMEN FINAL

## 🧠 Crear una librería npm consiste en:

✔ Crear proyecto

```bash
npm init
```

✔ Desarrollar funcionalidad

✔ Crear build

```bash
npm run build
```

✔ Crear README

✔ Crear repositorio GitHub

✔ Iniciar sesión

```bash
npm login
```

✔ Publicar

```bash
npm publish
```

✔ Versionar cambios

```bash
npm version patch
npm version minor
npm version major
```

✔ Publicar nuevamente

```bash
npm publish
```

👉 Una librería npm es simplemente código reutilizable empaquetado,
versionado y distribuido para que otros proyectos puedan instalarlo fácilmente 🚀

---