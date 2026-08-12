# 📄 02 - Deployments

## 📑 Índice

- [� 02 - Deployments](#-02---deployments)
  - [📑 Índice](#-índice)
  - [🚀 ¿Qué es un Deployment?](#-qué-es-un-deployment)
  - [🏗️ Production Build](#️-production-build)
  - [🔥 Firebase CLI](#-firebase-cli)
  - [🔐 `firebase login`](#-firebase-login)
  - [⚙️ `firebase init`](#️-firebase-init)
  - [📄 `firebase.json`](#-firebasejson)
  - [🔗 `.firebaserc`](#-firebaserc)
  - [📁 Public Directory](#-public-directory)
  - [🚀 `firebase deploy`](#-firebase-deploy)
  - [🔄 Deploy de un proyecto](#-deploy-de-un-proyecto)
  - [🆚 Firebase Project vs proyecto local](#-firebase-project-vs-proyecto-local)
    - [Proyecto local](#proyecto-local)
    - [Firebase Project](#firebase-project)
  - [🔄 Rollback y versiones anteriores](#-rollback-y-versiones-anteriores)
  - [⭐ Concepto fundamental](#-concepto-fundamental)

## 🚀 ¿Qué es un Deployment?

Un **deployment** es el proceso de llevar una aplicación desde tu entorno local hasta un entorno donde los usuarios puedan acceder a ella.

En Firebase Hosting, el flujo es:

```text
LOCAL
  │
  ▼
Angular Project
  │
  ▼
Production Build
  │
  ▼
dist/
  │
  ▼
Firebase CLI
  │
  ▼
Firebase Hosting
  │
  ▼
🌎 Production
```

---

## 🏗️ Production Build

Antes de desplegar una aplicación Angular normalmente se genera un **build de producción**.

```text
Angular Project
      ↓
Production Build
      ↓
dist/
```

El directorio `dist/` contiene los archivos que Firebase Hosting va a servir.

---

## 🔥 Firebase CLI

La **Firebase CLI** permite interactuar con Firebase desde la terminal.

Entre otras cosas, permite:

* Autenticarse.
* Inicializar Firebase en un proyecto local.
* Configurar Hosting.
* Desplegar la aplicación.

---

## 🔐 `firebase login`

```text
firebase login
```

Sirve para **autenticar la Firebase CLI** con una cuenta de Firebase.

```text
Terminal
   ↓
firebase login
   ↓
Firebase Account
```

Después de esto, la CLI puede trabajar con los proyectos a los que esa cuenta tiene acceso.

---

## ⚙️ `firebase init`

```text
firebase init
```

Se utiliza para **inicializar Firebase dentro de un proyecto local**.

Permite configurar los servicios que utilizará ese proyecto.

Para Hosting, establece información como:

```text
Local Project
     ↓
Firebase Init
     ↓
Hosting Configuration
```

Esto genera archivos de configuración necesarios para el proyecto.

---

## 📄 `firebase.json`

`firebase.json` contiene la **configuración local de Firebase** para el proyecto.

Para Hosting puede indicar, entre otras cosas, qué directorio contiene los archivos que deben publicarse.

```text
firebase.json
      ↓
Hosting Configuration
      ↓
Public Directory
```

---

## 🔗 `.firebaserc`

`.firebaserc` contiene información que permite asociar el proyecto local con uno o más **Firebase Projects**.

```text
Local Project
      ↓
.firebaserc
      ↓
Firebase Project
```

---

## 📁 Public Directory

El **public directory** es el directorio cuyos archivos serán enviados a Firebase Hosting.

En una aplicación Angular normalmente corresponde al resultado del build:

```text
Angular
   ↓
Build
   ↓
dist/
   ↓
Public Directory
   ↓
Firebase Hosting
```

---

## 🚀 `firebase deploy`

```text
firebase deploy
```

se utiliza para **desplegar la configuración y archivos del proyecto hacia Firebase**.

En el caso de Hosting:

```text
dist/
   ↓
firebase deploy
   ↓
Firebase Hosting
   ↓
Production
```

---

## 🔄 Deploy de un proyecto

El proceso completo puede visualizarse así:

```text
Local Angular Project
        ↓
Production Build
        ↓
dist/
        ↓
Firebase CLI
        ↓
Firebase Project
        ↓
Firebase Hosting
        ↓
🌎 Production
```

---

## 🆚 Firebase Project vs proyecto local

No son lo mismo.

| Proyecto local                                       | Firebase Project                                                                    |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Código y configuración que tienes en tu computadora. | Proyecto creado dentro de Firebase que contiene los servicios y recursos asociados. |

### Proyecto local

Es el código y configuración que tienes en tu computadora:

```text
my-angular-app/
├── src/
├── angular.json
├── firebase.json
└── .firebaserc
```

### Firebase Project

Es el proyecto creado dentro de Firebase que contiene los servicios y recursos asociados.

```text
Firebase Project
   ├── Hosting
   ├── Firestore
   ├── Authentication
   └── Storage
```

La configuración local permite conectar ambos.

---

## 🔄 Rollback y versiones anteriores

Un deployment no significa necesariamente que solamente exista una versión.

Firebase Hosting mantiene información sobre los deployments realizados, permitiendo trabajar con **versiones anteriores** y recuperar una versión previa cuando sea necesario.

Conceptualmente:

```text
Version 1
    ↓
Version 2
    ↓
Version 3
    ↓
❌ Problem
    ↓
Rollback
    ↓
Version anterior
```

La idea es poder volver a una versión estable si un deployment nuevo presenta problemas.

---

## ⭐ Concepto fundamental

Debes entender qué hace cada comando a nivel conceptual:

| Comando           | Concepto                                         |
| ----------------- | ------------------------------------------------ |
| `firebase login`  | Autenticar la CLI                                |
| `firebase init`   | Inicializar/configurar Firebase → Proyecto local |
| `firebase deploy` | Desplegar → Firebase Project                     |

Y el flujo completo:

```text
Angular Project
      ↓
Production Build
      ↓
dist/
      ↓
Firebase CLI
      ↓
Firebase Hosting
      ↓
Production
```
