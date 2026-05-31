# 📘 Angular CLI (Command Line Interface)

## 🧠 CLI = Command Line Interface

👉 Es una herramienta que permite crear, ejecutar y administrar proyectos Angular desde la terminal

---

## 📘 🟢 ¿Qué es Angular CLI?

### 🧠 Qué es

Es la herramienta oficial de Angular.

---

### 👉 Automatiza tareas como:

- Crear proyectos
- Generar componentes
- Ejecutar la app
- Construir (build)

---

## ✨ TIP

🧠 Te ahorra MUCHO tiempo

---

## 📘 🔵 Comandos principales

### 💡 Crear proyecto

```bash
ng new mi-app
```

---

### 💡 Ejecutar aplicación

```bash
ng serve
```

👉 Abre en: http://localhost:4200

---

### 💡 Generar cosas

```bash
ng generate component nombre
ng g c nombre

ng generate service nombre
ng g s nombre
```

---

### 💡 Build producción

```bash
ng build --prod
```

---

## 📘 🟣 Generadores (Scaffolding)

### 🧠 Qué es

CLI crea automáticamente:

- Archivos necesarios
- Estructura correcta
- Registro en módulos

---

### 👉 Ejemplo

```bash
ng g c header
```

---

### 👉 Crea:

- header.component.ts
- header.component.html
- header.component.css

---

## 📘 🟡 ¿Para qué sirve?

### 🎯 Beneficios:

- Automatiza tareas
- Evita errores manuales
- Mantiene estructura consistente
- Acelera desarrollo

---

## 📘 🟠 Configuración

### 🧠 Archivo importante:

```text
angular.json
```

---

### 👉 Configura:

- Builds
- Estilos globales
- Assets

---

## 📘 🔴 Workflow típico

### 🧠 Flujo común:

- ng new → crear app
- ng serve → correr app
- ng g → generar componentes
- ng build → producción

---

## 📘 ⚫ Opciones útiles

### 💡 ng serve con puerto

```bash
ng serve --port 4201
```

---

### 💡 ng generate sin tests

```bash
ng g c header --skip-tests
```

---

## ⚠️ Cosas importantes

- CLI es esencial en Angular
- Usa "ng" como comando base
- Genera código automáticamente
- Mantiene buenas prácticas

---

## ✨ Resumen

### 🧠 Idea clave

Angular CLI = herramienta de desarrollo

---

### 👉 En pocas palabras

- Crea, ejecuta y organiza proyectos
- Automatiza tareas
- Usa comandos como ng new, ng serve, ng g

---

### 🚀 Conclusión

Es clave para trabajar con Angular 🚀

//📘 COMANDOS BÁSICOS DE ANGULAR CLI

# 🧠 Angular CLI y el comando `ng`

## 🧠 Angular CLI usa el comando base: `ng`

👉 Todo se ejecuta desde la terminal

---

## 📘 🟢 Comando principal

### 🧠 Qué es

`ng` = comando base de Angular CLI

---

### 👉 Uso

Se combina con otros comandos

---

## 📘 🔵 Comandos más importantes

---

### 💡 Crear proyecto

```bash
ng new mi-app
```

👉 Crea un proyecto desde cero

---

### 💡 Ejecutar aplicación

```bash
ng serve
```

👉 Corre el proyecto en local

---

### 💡 Ver versión

```bash
ng version
```

👉 Muestra la versión de Angular

---

### 💡 Build (compilar)

```bash
ng build
```

👉 Genera el compilado del proyecto

---

## 📘 🟣 Generate (g)

### 🧠 Qué es

`ng g = generate`

👉 Sirve para crear archivos automáticamente

---

### 💡 Ejemplos

```bash
ng g component nombre
ng g c nombre

ng g service nombre
ng g s nombre

ng g pipe nombre
ng g p nombre
```

---

### 👉 Alias cortos:

- c → component
- s → service
- p → pipe

---

## 📘 🟡 ¿Qué hace generate?

### 🧠 Angular CLI:

- Crea archivos automáticamente
- Sigue buenas prácticas
- Registra en módulos

---

## 📘 🟠 Workflow básico

### 🧠 Flujo típico:

- ng new → crear app
- ng serve → correr app
- ng g → generar código
- ng build → producción

---

## 📘 🔴 Opciones útiles

### 💡 Puerto personalizado

```bash
ng serve --port 4201
```

---

### 💡 Sin tests

```bash
ng g c header --skip-tests
```

---

## ⚠️ Cosas importantes

- `ng` es el comando base
- `generate` tiene alias (`g`)
- CLI automatiza todo
- `build` crea versión final

---

## ✨ Resumen

### 🧠 Idea clave

Comandos clave de Angular CLI

---

### 👉 En pocas palabras

- ng new → nuevo proyecto
- ng serve → correr app
- ng version → ver versión
- ng build → compilar
- ng g → generar archivos

---

### 🚀 Conclusión

Son esenciales para trabajar con Angular 🚀

# 📘 Flags en Angular CLI

## 🧠 Qué son los flags

Los flags son opciones adicionales que modifican el comportamiento de los comandos.

👉 Se agregan después del comando.

---

## 📘 🟢 ¿Qué son los flags?

### 🧠 Qué son

Son parámetros que personalizan cómo se ejecuta un comando.

👉 Se usan con `-` o `--`

---

### 💡 Ejemplo

```bash id="f1g3k9"
ng serve -o
ng serve --port 4201
```

---

## 📘 🔵 Flags en `ng serve`

### 🧠 Ejecutar la aplicación

---

### 💡 Abrir navegador automáticamente

```bash id="s8v2m1"
ng serve -o
ng serve --open
```

👉 Abre el navegador al iniciar

---

### 💡 Especificar puerto

```bash id="p4m7x2"
ng serve -p 2332
ng serve --port 2332
```

👉 Corre la app en un puerto específico

---

## 📘 🟣 Flags en `ng build`

### 🧠 Compilar proyecto

---

### 💡 Producción

```bash id="b9v1q6"
ng build --prod
```

👉 Genera build optimizado

---

## ✨ TIP

🧠 Reduce tamaño y mejora rendimiento

---

## 📘 🟡 Flags en `ng generate component`

### 🧠 Crear componentes

---

### 💡 No generar tests

```bash id="t2m8x5"
ng g c header --skip-tests
```

👉 No crea archivo `.spec.ts`

---

### 💡 Inline styles

```bash id="i6v3n9"
ng g c header --inline-style
```

👉 No crea archivo CSS, lo pone en el TS

---

### 💡 Inline template

```bash id="e3m7k1"
ng g c header --inline-template
```

👉 No crea HTML, lo pone en el TS

---

## 📘 🟠 ¿Para qué sirven?

### 🎯 Beneficios:

- Personalizar comandos
- Ahorrar tiempo
- Evitar archivos innecesarios
- Ajustar entorno (dev / prod)

---

## 📘 🔴 Ejemplo combinado

### 💡 Ejemplo

```bash id="c7m2v8"
ng serve -o -p 4201
```

👉 Abre navegador en puerto 4201

---

## ⚠️ Cosas importantes

- `-` es forma corta
- `--` es forma larga
- Se pueden combinar
- Cambian el comportamiento del comando

---

## ✨ Resumen

### 🧠 Idea clave

Flags = configuración extra

---

### 👉 En pocas palabras

- `-o` → abrir navegador
- `-p` → puerto
- `--prod` → producción
- `--skip-tests` → sin tests
- `--inline-style/template` → sin archivos extra

---

### 🚀 Conclusión

Te dan más control sobre Angular CLI 🚀

---

# 📘 Instalación de Angular desde cero

## 🧠 Qué es

Para trabajar con Angular necesitas preparar tu entorno de desarrollo.

---

### 👉 Importante

- Angular no funciona solo
- Necesita herramientas como Node.js y Angular CLI

# 📘 Instalación de Angular desde cero

---

## 📘 🟢 1. Instalar Node.js

### 🧠 Qué es

Node.js permite ejecutar JavaScript fuera del navegador.

👉 Es obligatorio para usar Angular

---

### 💡 Verificar instalación

```bash
node -v
npm -v
```

---

### 👉 Interpretación

- Si ves versiones → ya está instalado
- Si no → debes instalarlo

---

### ⚠️ Importante

npm viene incluido con Node.js

---

## 📘 🔵 2. Instalar Angular CLI

### 🧠 Qué es

Angular CLI es una herramienta para crear y manejar proyectos Angular.

---

### 💡 Instalación global

```bash
npm install -g @angular/cli
```

---

### 👉 Uso

Esto te permite usar el comando:

```bash
ng
```

---

### 💡 Verificar instalación

```bash
ng version
```

---

### 👉 Resultado

Si funciona → todo listo

---

## ✨ TIP

🧠 CLI = te ahorra escribir código manual repetitivo

---

## 📘 🟣 3. Crear un proyecto Angular

### 🧠 Qué es

Una vez instalado Angular CLI, puedes crear una app.

---

### 💡 Comando

```bash
ng new mi-app
```

---

### 👉 Angular te preguntará:

- ¿Routing? (yes/no)
- ¿CSS, SCSS, etc?

---

### 👉 Resultado

Crea toda la estructura automáticamente

---

## 📘 🟡 4. Entrar al proyecto

### 💡 Comando

```bash
cd mi-app
```

---

### 👉 Qué hace

Te mueve a la carpeta del proyecto

---

## 📘 🟠 5. Levantar el servidor

### 🧠 Qué es

Ejecuta la aplicación en modo desarrollo

---

### 💡 Comando

```bash
ng serve
```

---

### 👉 Abre en el navegador:

[http://localhost:4200](http://localhost:4200)

---

### 👉 Importante

Se recarga automáticamente al guardar cambios

---

## 📘 🔴 6. Estructura básica del proyecto

### 🧠 Qué contiene Angular

---

### 📂 src/

- app/ → componentes principales
- index.html → página base
- main.ts → punto de entrada

---

### ⚙️ angular.json

Configuración del proyecto

---

## ⚠️ Cosas importantes

- Siempre instala Angular CLI globalmente
- Usa `ng serve` para desarrollo
- No edites archivos fuera de `src` sin saber qué haces

---

## ✨ Resumen

### 🧠 Pasos básicos

1. Instalar Node.js
2. Instalar Angular CLI
3. Crear proyecto → `ng new`
4. Entrar → `cd`
5. Ejecutar → `ng serve`

---

### 🚀 Conclusión

Con esto ya puedes empezar a programar en Angular 🚀
