# 📄 02 - Development vs Production Images

> [!IMPORTANT]
> 🐳 Una aplicación normalmente tiene **necesidades diferentes durante el desarrollo y durante producción**.
>
> Por eso, una Docker Image diseñada para desarrollar **no necesariamente debería ser igual** a la Image que utilizas para producción.

La idea principal:

```text
Development
    ↓
Developer Experience
    ↓
Flexibility + Debugging + Hot Reload


Production
    ↓
Runtime
    ↓
Security + Size + Performance
```

---

## 📑 Índice

- [📄 02 - Development vs Production Images](#-02---development-vs-production-images)
  - [📑 Índice](#-índice)
- [🧪 Development Images](#-development-images)
- [🔥 Hot Reload](#-hot-reload)
- [📦 Development Image: ejemplo](#-development-image-ejemplo)
- [🚀 Production Images](#-production-images)
- [🧹 ¿Qué se intenta eliminar en producción?](#-qué-se-intenta-eliminar-en-producción)
- [🅰️ Frontend: Development vs Production](#️-frontend-development-vs-production)
  - [🧪 Development](#-development)
  - [🚀 Production](#-production)
- [🟢 Backend: Development vs Production](#-backend-development-vs-production)
  - [🧪 Development](#-development-1)
  - [🚀 Production](#-production-1)
- [⚖️ Development vs Production](#️-development-vs-production)
- [🔄 La misma aplicación, diferentes necesidades](#-la-misma-aplicación-diferentes-necesidades)
- [🧠 ¿Por qué no utilizar siempre la Development Image?](#-por-qué-no-utilizar-siempre-la-development-image)
- [🔗 Development + Bind Mounts vs Production + Images](#-development--bind-mounts-vs-production--images)
    - [🧪 Development](#-development-2)
    - [🚀 Production](#-production-2)
- [🎯 La idea importante](#-la-idea-importante)
    - [🧪 DEVELOPMENT](#-development-3)
    - [🚀 PRODUCTION](#-production-3)

# 🧪 Development Images

Durante el desarrollo necesitas herramientas que faciliten escribir, probar y depurar código.

```text
Source Code
    ↓
Docker Container
    ↓
Dev Server
    ↓
Hot Reload
```

Una Development Image puede contener:

* Source code.
* Development dependencies.
* Build tools.
* Debugging tools.
* Source maps.
* Angular/React/Vite dev server.
* `nodemon`.
* TypeScript.
* Herramientas de desarrollo.

Por ejemplo, un proyecto Node podría utilizar:

```bash
npm install
npm run dev
```

Y mantener el código sincronizado mediante un **Bind Mount**:

```text
Host
│
│ Source Code
│
▼
Bind Mount
│
▼
Container
│
▼
npm run dev
```

Así puedes modificar un archivo en tu máquina y hacer que el servidor dentro del container detecte el cambio.

---

# 🔥 Hot Reload

Una de las principales ventajas de una Development Image es poder trabajar con **Hot Reload**.

```text
Developer
    ↓
Modifica código
    ↓
Host
    ↓
Bind Mount
    ↓
Container
    ↓
Dev Server
    ↓
Detecta cambios
    ↓
Reload
```

> [!TIP]
> ⚡ Esto permite desarrollar sin tener que reconstruir constantemente la Docker Image.

---

# 📦 Development Image: ejemplo

Un backend Node podría tener:

```text
Development Image
│
├── Node.js
├── npm
├── Source Code
├── devDependencies
├── TypeScript
├── nodemon
└── Debugging Tools
```

El objetivo principal es:

> **Hacer que desarrollar sea cómodo y rápido.**

No necesariamente que la Image sea lo más pequeña posible.

---

# 🚀 Production Images

En producción cambian las prioridades.

Ya no necesitas todas las herramientas utilizadas para desarrollar la aplicación.

El objetivo es tener un entorno:

```text
Production
    ↓
Minimal
    ↓
Predictable
    ↓
Secure
    ↓
Optimized
```

Una Production Image normalmente intenta contener solamente lo necesario para ejecutar la aplicación.

```text
Production Image
│
├── Runtime
├── Production Dependencies
└── Application
```

En algunos casos, gracias a **Multi-Stage Builds**, incluso puedes eliminar completamente las herramientas utilizadas durante el build.

---

# 🧹 ¿Qué se intenta eliminar en producción?

Dependiendo de la aplicación, pueden eliminarse:

```text
❌ Source files innecesarios
❌ Development dependencies
❌ Compilers
❌ Build tools
❌ Debugging tools
❌ Dev servers
```

Por ejemplo:

```text
Development
│
├── Node
├── npm
├── TypeScript
├── Angular CLI
├── Source Code
├── devDependencies
└── Build Tools
```

puede convertirse en:

```text
Production
│
└── Runtime + Application
```

> [!NOTE]
> 🧹 La idea es mantener en producción solamente los componentes necesarios para ejecutar la aplicación.

---

# 🅰️ Frontend: Development vs Production

Un frontend Angular puede tener flujos completamente diferentes.

## 🧪 Development

```text
Angular
   ↓
ng serve
   ↓
Development Server
   ↓
Docker Container
```

Puedes tener:

```text
Source Code
    ↓
Bind Mount
    ↓
Container
    ↓
ng serve
    ↓
Hot Reload
```

Aquí interesa principalmente:

> **Developer Experience**

---

## 🚀 Production

En producción no necesitas ejecutar `ng serve`.

Primero construyes la aplicación:

```text
Angular
   ↓
npm run build
   ↓
dist/
```

Después puedes utilizar Nginx:

```text
Angular
   ↓
npm run build
   ↓
dist/
   ↓
Nginx
   ↓
Production Image
```

La Image final puede ser mucho más pequeña que el entorno de desarrollo.

---

# 🟢 Backend: Development vs Production

También ocurre con Node/Express.

## 🧪 Development

```text
Node
   ↓
npm run dev
   ↓
nodemon
   ↓
Docker
```

Puedes tener:

```text
Source Code
devDependencies
TypeScript
nodemon
Debugging Tools
```

---

## 🚀 Production

En producción puedes tener:

```text
Source Code
    ↓
npm run build
    ↓
JavaScript
    ↓
npm start
    ↓
Docker
```

Por ejemplo:

```text
Build Stage
│
├── Node
├── npm
├── TypeScript
├── Source Code
└── devDependencies
       ↓
     Build
       ↓
Production Stage
│
├── Node
├── Production Dependencies
└── dist/
```

> [!TIP]
> 🔗 Esto conecta directamente con:
>
> `📄 01 - Multi-Stage Builds.md`

---

# ⚖️ Development vs Production

| 🧪 Development       | 🚀 Production                |
| -------------------- | ---------------------------- |
| Developer Experience | Runtime                      |
| Hot Reload           | Optimización                 |
| Source Code          | Application Build            |
| devDependencies      | Production Dependencies      |
| Debugging Tools      | Solo herramientas necesarias |
| Dev Server           | Production Server            |
| Bind Mounts          | Images reproducibles         |
| Flexibilidad         | Consistencia                 |
| Conveniencia         | Seguridad                    |
| Builds frecuentes    | Image estable                |

---

# 🔄 La misma aplicación, diferentes necesidades

No significa necesariamente que tengas **dos aplicaciones diferentes**.

Es la misma aplicación ejecutándose bajo diferentes condiciones:

```text
                    APPLICATION
                         │
             ┌───────────┴───────────┐
             ▼                       ▼
       DEVELOPMENT               PRODUCTION
             │                       │
       Dev Server                Build
       Hot Reload                   ↓
       Debugging               Optimized App
       Source Code                  ↓
             │                    Runtime
             ▼                       │
         Container               Container
```

---

# 🧠 ¿Por qué no utilizar siempre la Development Image?

Porque una Development Image puede contener muchas cosas que **no son necesarias para ejecutar la aplicación**.

Por ejemplo:

```text
Angular CLI
TypeScript
Source Code
nodemon
devDependencies
Debugging Tools
```

Si nada de eso es necesario en producción, incluirlo simplemente aumenta el tamaño y la cantidad de componentes de la Image.

Por eso:

```text
Development Image
        ↓
Convenience
```

mientras:

```text
Production Image
        ↓
Security
Size
Performance
Predictability
```

> [!IMPORTANT]
> 🔐 Lo que facilita el desarrollo no necesariamente aporta valor durante el runtime de producción.

---

# 🔗 Development + Bind Mounts vs Production + Images

Una diferencia muy importante es cómo manejas el código.

### 🧪 Development

```text
Host
 │
 │ Bind Mount
 ▼
Container
 │
 ▼
Dev Server
```

El código está constantemente cambiando.

### 🚀 Production

```text
Source Code
    ↓
Docker Build
    ↓
Production Image
    ↓
Container
```

La aplicación queda empaquetada dentro de una Image versionada y reproducible.

---

# 🎯 La idea importante

> [!IMPORTANT]
> 🧠 No pienses:
>
> **"Docker necesita una Image diferente porque development y production son dos aplicaciones diferentes."**
>
> Piensa:
>
> **"Development y production tienen necesidades diferentes, por lo que sus entornos Docker pueden estar optimizados para objetivos diferentes."**

En resumen:

### 🧪 DEVELOPMENT

```text
Source Code
    ↓
Bind Mount
    ↓
Container
    ↓
Dev Server
    ↓
Hot Reload
```

### 🚀 PRODUCTION

```text
Source Code
    ↓
Build
    ↓
Optimized Image
    ↓
Container
    ↓
Production Runtime
```

> [!TIP]
> 🎯 **Regla mental:**
>
> **Development prioriza la comodidad del desarrollador; Production prioriza una ejecución pequeña, segura, reproducible y optimizada.**
