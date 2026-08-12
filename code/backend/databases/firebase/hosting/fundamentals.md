# 📄 01 - Firebase Hosting

## 📑 Índice

- [📄 01 - Firebase Hosting](#-01---firebase-hosting)
  - [📑 Índice](#-índice)
  - [🌐 ¿Qué es Firebase Hosting?](#-qué-es-firebase-hosting)
  - [📦 Static Hosting](#-static-hosting)
  - [🔒 HTTPS Automático](#-https-automático)
  - [🌍 CDN](#-cdn)
  - [🌐 Domains](#-domains)
  - [🔥 Firebase Hosting vs otros servicios de hosting](#-firebase-hosting-vs-otros-servicios-de-hosting)
  - [🔗 Firebase Hosting + Firebase Project](#-firebase-hosting--firebase-project)
  - [🆚 Hosting vs Functions vs Firestore](#-hosting-vs-functions-vs-firestore)
  - [⭐ Idea fundamental](#-idea-fundamental)

## 🌐 ¿Qué es Firebase Hosting?

**Firebase Hosting** es un servicio de Firebase para **publicar y servir aplicaciones web** en Internet.

Está especialmente orientado a aplicaciones web estáticas o aplicaciones frontend que ya fueron compiladas.

```text
Angular
   ↓
Build
   ↓
HTML + CSS + JS
   ↓
Firebase Hosting
   ↓
🌎 Internet
```

---

## 📦 Static Hosting

En el caso de Angular, el código TypeScript y los archivos de la aplicación se transforman mediante el proceso de build en archivos que el navegador puede ejecutar.

Por ejemplo:

```text
Angular
   ↓
ng build
   ↓
dist/
   ├── index.html
   ├── *.js
   ├── *.css
   └── assets/
```

Firebase Hosting sirve estos archivos al navegador.

> **Hosting sirve los archivos de tu aplicación; no ejecuta el código Angular como un servidor Node.**

---

## 🔒 HTTPS Automático

Firebase Hosting proporciona **HTTPS** para las aplicaciones desplegadas.

```text
User
   ↓
HTTPS
   ↓
Firebase Hosting
   ↓
Web App
```

Esto permite que la aplicación sea servida mediante una conexión segura.

---

## 🌍 CDN

Firebase Hosting utiliza una **CDN (Content Delivery Network)** para distribuir contenido y servirlo desde infraestructura cercana a los usuarios.

```text
Firebase Hosting
      ↓
     CDN
  ┌───┼───┐
  ↓   ↓   ↓
User User User
```

Esto ayuda a reducir la latencia al entregar archivos estáticos.

---

## 🌐 Domains

Una aplicación publicada en Firebase Hosting puede utilizar:

| Tipo                  |                                        |
| --------------------- | -------------------------------------- |
| Dominio               | El dominio proporcionado por Firebase. |
| Dominio personalizado | Un dominio personalizado.              |

Conceptualmente:

```text
Domain
   ↓
Firebase Hosting
   ↓
Web Application
```

---

## 🔥 Firebase Hosting vs otros servicios de hosting

Firebase Hosting cumple principalmente la función de **servir y publicar contenido web**.

Por ejemplo:

```text
Angular Build
      ↓
Static Files
      ↓
Firebase Hosting
      ↓
Internet
```

Otros servicios de hosting pueden ofrecer capacidades diferentes, como ejecutar servidores backend, contenedores o aplicaciones completas.

Por eso debes distinguir:

> **Hosting = dónde y cómo se sirven los archivos de tu aplicación.**

---

## 🔗 Firebase Hosting + Firebase Project

Firebase Hosting pertenece al ecosistema de un **Firebase Project**.

```text
Firebase Project
       │
       ├── Hosting
       ├── Authentication
       ├── Firestore
       ├── Storage
       └── Functions
```

Hosting utiliza la configuración asociada al proyecto para desplegar y servir la aplicación correspondiente.

---

## 🆚 Hosting vs Functions vs Firestore

Es importante no confundir las responsabilidades:

| Servicio             | Responsabilidad         |
| -------------------- | ----------------------- |
| **Firebase Hosting** | Sirve la aplicación web |
| **Cloud Functions**  | Ejecuta código backend  |
| **Firestore**        | Almacena datos          |

Una aplicación puede utilizar los tres:

```text
User
  ↓
Firebase Hosting
  ↓
Angular
  ├──→ Firestore
  └──→ Cloud Functions
```

---

## ⭐ Idea fundamental

Debes entender este flujo:

```text
Angular
   ↓
ng build
   ↓
dist/
   ↓
Firebase Hosting
   ↓
🌎 Internet
```

Firebase Hosting **sirve la aplicación ya compilada**; no funciona como un servidor Node que ejecuta directamente tu código Angular.
