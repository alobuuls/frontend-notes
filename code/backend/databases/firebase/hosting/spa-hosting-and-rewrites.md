# 📄 03 - SPA Hosting & Rewrites

## 📑 Índice

- [📄 03 - SPA Hosting \& Rewrites](#-03---spa-hosting--rewrites)
  - [📑 Índice](#-índice)
  - [🌐 ¿Qué es una SPA?](#-qué-es-una-spa)
  - [🧭 Client-Side Routing](#-client-side-routing)
  - [⚠️ El problema al refrescar una ruta](#️-el-problema-al-refrescar-una-ruta)
  - [🔀 ¿Qué es un Rewrite?](#-qué-es-un-rewrite)
  - [📄 `index.html`](#-indexhtml)
  - [🔄 Flujo completo](#-flujo-completo)
  - [⚙️ Firebase Hosting Rewrites](#️-firebase-hosting-rewrites)
  - [⭐ Idea fundamental](#-idea-fundamental)
    - [Firebase Hosting](#firebase-hosting)
    - [Angular](#angular)

## 🌐 ¿Qué es una SPA?

Una **Single Page Application (SPA)** es una aplicación web donde la navegación entre diferentes vistas ocurre principalmente en el cliente, sin cargar una página HTML completamente nueva desde el servidor para cada ruta.

En Angular puedes tener rutas como:

```text
/
/home
/users
/users/123
/settings
```

El **Angular Router** se encarga de interpretar esas rutas y mostrar el componente correspondiente.

---

## 🧭 Client-Side Routing

En una SPA, la navegación ocurre principalmente en el navegador:

```text
Browser
   ↓
Angular
   ↓
Angular Router
   ↓
Component
```

Por ejemplo:

```text
/users/123
      ↓
Angular Router
      ↓
UserDetailComponent
```

La ruta `/users/123` no necesariamente corresponde a un archivo físico llamado `users/123`.

---

## ⚠️ El problema al refrescar una ruta

Aquí aparece un problema importante.

Si navegas desde Angular:

```text
/
 ↓
/users
 ↓
/users/123
```

Angular puede manejar perfectamente la navegación.

Pero si escribes directamente en el navegador:

```text
https://example.com/users/123
```

la petición llega primero a **Firebase Hosting**.

Firebase Hosting sirve archivos, por lo que puede intentar encontrar:

```text
/users/123
```

como si fuera un archivo físico.

Si no existe:

```text
/users/123
     ↓
❌ 404
```

---

## 🔀 ¿Qué es un Rewrite?

Un **rewrite** permite indicar a Firebase Hosting que una determinada petición debe ser servida utilizando otro recurso.

Para una SPA, normalmente se utiliza:

```text
/users/123
      ↓
rewrite
      ↓
index.html
```

El navegador recibe `index.html` y entonces Angular puede tomar el control.

---

## 📄 `index.html`

`index.html` es el punto de entrada de una aplicación Angular compilada.

El flujo es:

```text
Firebase Hosting
       ↓
index.html
       ↓
Angular
       ↓
Angular Router
       ↓
/users/123
```

Angular recibe la URL y determina qué componente debe mostrar.

---

## 🔄 Flujo completo

Cuando un usuario accede directamente a una ruta:

```text
Browser
   │
   │ /users/123
   ▼
Firebase Hosting
   │
   │ rewrite
   ▼
index.html
   │
   ▼
Angular
   │
   ▼
Angular Router
   │
   ▼
/users/123
```

Sin el rewrite:

```text
/users/123
     ↓
Firebase Hosting
     ↓
❌ 404
```

---

## ⚙️ Firebase Hosting Rewrites

Los rewrites de Hosting se configuran en:

```text
firebase.json
```

Conceptualmente:

```text
Request
   ↓
Firebase Hosting
   ↓
Rewrite
   ↓
index.html
```

Esto permite que las rutas gestionadas por Angular no sean interpretadas como archivos físicos.

---

## ⭐ Idea fundamental

Debes entender que existen **dos niveles de routing**:

### Firebase Hosting

```text
Request URL
     ↓
Firebase Hosting
     ↓
index.html
```

### Angular

```text
index.html
     ↓
Angular Router
     ↓
/users/123
     ↓
UserDetailComponent
```

Por eso el flujo correcto para una SPA es:

```text
Browser
   ↓
/users/123
   ↓
Firebase Hosting
   ↓
Rewrite
   ↓
index.html
   ↓
Angular
   ↓
Angular Router
   ↓
/users/123
```

El **rewrite no hace que Firebase Hosting conozca la ruta de Angular**; simplemente permite entregar `index.html` para que **Angular Router pueda resolver la ruta en el cliente**.
