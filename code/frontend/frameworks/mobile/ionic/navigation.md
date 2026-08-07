# 🧭 IONIC NAVIGATION

La **navegación** en Ionic determina cómo el usuario se mueve entre las diferentes pantallas de una aplicación.

Cuando utilizas Ionic con Angular, la navegación se basa principalmente en el **Angular Router**, mientras que Ionic añade componentes y comportamientos pensados para aplicaciones móviles.

---

# 📑 ÍNDICE — 🧭 IONIC NAVIGATION

1. [🅰️ Angular Router](#1️⃣--angular-router)
2. [🛣️ Routes](#2️⃣--routes)
3. [🔗 Navigation](#3️⃣--navigation)
4. [🆔 Route Parameters](#4️⃣--route-parameters)
5. [🔎 Query Parameters](#5️⃣--query-parameters)
6. [📚 Navigation Stack](#6️⃣--navigation-stack)
7. [📑 Tabs](#7️⃣--tabs)
8. [🧩 Nested Routes](#8️⃣--nested-routes)
9. [⬅️ Back Navigation](#9️⃣--back-navigation)
10. [🧠 Resumen de navegación](#-resumen-de-navegación)


# 1️⃣ 🅰️ ANGULAR ROUTER

**Angular Router** es el sistema encargado de controlar las rutas de una aplicación Angular.

Permite relacionar una URL con un componente.

Por ejemplo:

```text
/home
    ↓
HomePage

/profile
    ↓
ProfilePage

/settings
    ↓
SettingsPage
```

En Angular puedes definir rutas así:

```typescript
const routes: Routes = [
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'profile',
    component: ProfilePage
  }
];
```

En Ionic, este mismo sistema se utiliza para navegar entre las páginas de la aplicación.

### 🧠 Idea clave

> **Angular Router decide qué pantalla debe mostrarse según la ruta actual.**

---

# 2️⃣ 🛣️ ROUTES

Una **route** es una regla que indica qué debe ocurrir cuando el usuario accede a determinada ruta.

Ejemplo:

```typescript
const routes: Routes = [
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'users',
    component: UsersPage
  }
];
```

Tenemos:

| URL      | Componente  |
| -------- | ----------- |
| `/home`  | `HomePage`  |
| `/users` | `UsersPage` |

### 📌 `path`

Indica la parte de la URL que identifica la ruta.

```typescript
{
  path: 'home',
  component: HomePage
}
```

### 📌 `component`

Indica qué componente se debe mostrar.

```typescript
component: HomePage
```

---

# 3️⃣ 🔗 NAVIGATION

La navegación consiste en **pasar de una ruta a otra**.

Angular ofrece diferentes formas de hacerlo.

### 🔗 Desde HTML

Puedes utilizar `routerLink`:

```html
<ion-button routerLink="/profile">
  Ver perfil
</ion-button>
```

También puedes utilizarlo en elementos HTML:

```html
<a routerLink="/home">
  Home
</a>
```

### ⚙️ Desde TypeScript

Puedes utilizar `Router`:

```typescript
import { Router } from '@angular/router';

constructor(private router: Router) {}

goToProfile(): void {
  this.router.navigate(['/profile']);
}
```

Entonces:

```text
Usuario
   ↓
click
   ↓
router.navigate()
   ↓
/profile
   ↓
ProfilePage
```

### 🧠 Diferencia importante

| Método              | Uso                          |
| ------------------- | ---------------------------- |
| `routerLink`        | Navegación desde el template |
| `router.navigate()` | Navegación desde TypeScript  |

---

# 4️⃣ 🆔 ROUTE PARAMETERS

Los **route parameters** permiten incluir información dinámica dentro de la URL.

Por ejemplo:

```text
/users/25
```

Aquí:

```text
25
```

puede representar el ID del usuario.

La ruta se define:

```typescript
{
  path: 'users/:id',
  component: UserDetailPage
}
```

El `:id` significa:

> Este segmento de la URL es dinámico.

Por ejemplo:

```text
/users/10
/users/25
/users/100
```

Todas utilizan la misma ruta:

```text
/users/:id
```

---

## 📥 Obtener el parámetro

Puedes utilizar `ActivatedRoute`.

```typescript
import { ActivatedRoute } from '@angular/router';

constructor(private route: ActivatedRoute) {}

ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');
}
```

Si la URL es:

```text
/users/25
```

entonces:

```typescript
id === '25'
```

📌 El valor obtenido normalmente es un **string**, incluso si representa un número.

---

# 5️⃣ 🔎 QUERY PARAMETERS

Los **query parameters** son parámetros que aparecen después de `?` en la URL.

Ejemplo:

```text
/users?country=co&age=25
```

Aquí tenemos:

```text
country = co
age = 25
```

Son especialmente útiles para:

* 🔎 Búsquedas.
* 🎛️ Filtros.
* 📄 Paginación.
* ↕️ Ordenamiento.
* ⚙️ Opciones de visualización.

### 📌 Route parameter vs Query parameter

| Tipo               | Ejemplo             | Uso típico                       |
| ------------------ | ------------------- | -------------------------------- |
| 🆔 Route parameter | `/users/25`         | Identificar un recurso           |
| 🔎 Query parameter | `/users?country=co` | Filtrar o modificar una consulta |

---

## 📥 Obtener query parameters

Puedes utilizar `ActivatedRoute`:

```typescript
this.route.queryParamMap.subscribe(params => {
  const country = params.get('country');
});
```

Para:

```text
/users?country=co
```

obtendríamos:

```typescript
country === 'co'
```

---

# 6️⃣ 📚 NAVIGATION STACK

Las aplicaciones móviles normalmente mantienen un **historial de navegación**.

Por ejemplo:

```text
Home
  ↓
Profile
  ↓
Settings
```

Podemos imaginarlo como una pila:

```text
┌─────────────┐
│  Settings   │ ← pantalla actual
├─────────────┤
│  Profile    │
├─────────────┤
│  Home       │
└─────────────┘
```

Cuando el usuario vuelve atrás:

```text
Settings
   ↓
Back
   ↓
Profile
```

La pantalla actual sale del historial.

### 🧠 ¿Por qué es importante?

Porque la navegación móvil normalmente espera un comportamiento parecido al de las aplicaciones nativas:

```text
Pantalla A
   ↓
Pantalla B
   ↓
Pantalla C
   ↓
⬅️ Back
   ↓
Pantalla B
```

Ionic trabaja junto con Angular para proporcionar este tipo de experiencia.

---

# 7️⃣ 📑 TABS

Los **tabs** permiten dividir una aplicación en diferentes secciones principales.

Por ejemplo:

```text
┌─────────────────────────────┐
│                             │
│        CONTENIDO            │
│                             │
├─────────────────────────────┤
│ 🏠 Home │ 🔎 Search │ 👤 Profile │
└─────────────────────────────┘
```

Un ejemplo conceptual:

```text
/tabs/home
/tabs/search
/tabs/profile
```

Cada tab representa una sección independiente de la aplicación.

Ionic proporciona componentes específicos para este patrón:

```html
<ion-tabs>
  <ion-tab-bar slot="bottom">

    <ion-tab-button tab="home">
      <ion-label>Home</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="search">
      <ion-label>Search</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="profile">
      <ion-label>Profile</ion-label>
    </ion-tab-button>

  </ion-tab-bar>
</ion-tabs>
```

### 🎯 ¿Cuándo utilizar tabs?

Cuando tienes varias secciones principales que el usuario visita frecuentemente.

Ejemplo:

```text
📱 Instagram
├── 🏠 Home
├── 🔎 Search
├── ➕ Create
└── 👤 Profile
```

---

# 8️⃣ 🧩 NESTED ROUTES

Las **nested routes** son rutas que existen dentro de otra ruta.

Por ejemplo:

```text
/users
/users/profile
/users/settings
```

Podemos pensar en ellas como una jerarquía:

```text
/users
   │
   ├── profile
   │
   └── settings
```

Una configuración podría ser:

```typescript
const routes: Routes = [
  {
    path: 'users',
    component: UsersPage,
    children: [
      {
        path: 'profile',
        component: ProfilePage
      },
      {
        path: 'settings',
        component: SettingsPage
      }
    ]
  }
];
```

### 🧠 ¿Para qué sirven?

Son útiles cuando una sección de la aplicación tiene sus propias subsecciones.

Por ejemplo:

```text
/dashboard
    ├── overview
    ├── analytics
    └── settings
```

Esto permite organizar las rutas de manera jerárquica.

---

# 9️⃣ ⬅️ BACK NAVIGATION

La **back navigation** permite regresar a la pantalla anterior.

En aplicaciones móviles es una interacción fundamental.

Por ejemplo:

```text
Home
  ↓
Details
  ↓
Edit
```

El usuario pulsa:

```text
⬅️ Back
```

Y vuelve a:

```text
Details
```

---

## 🔙 Navegar hacia atrás con Angular

Puedes utilizar:

```typescript
this.router.navigate(['/home']);
```

Pero esto significa:

> Ve específicamente a `/home`.

Para regresar realmente a la navegación anterior, puedes utilizar el historial del navegador:

```typescript
window.history.back();
```

También puedes utilizar el servicio de navegación correspondiente según la arquitectura de tu aplicación.

---

## 🧩 `ion-back-button`

Ionic proporciona un componente específico para mostrar un botón de regreso:

```html
<ion-back-button></ion-back-button>
```

Normalmente se coloca dentro de un toolbar:

```html
<ion-header>
  <ion-toolbar>

    <ion-buttons slot="start">
      <ion-back-button></ion-back-button>
    </ion-buttons>

    <ion-title>
      Details
    </ion-title>

  </ion-toolbar>
</ion-header>
```

Visualmente:

```text
┌──────────────────────────────┐
│ ←  Details                   │
├──────────────────────────────┤
│                              │
│         Content              │
│                              │
└──────────────────────────────┘
```

---

# 🧠 RESUMEN DE NAVEGACIÓN

| Concepto                | ¿Qué significa?                              | Ejemplo                 |
| ----------------------- | -------------------------------------------- | ----------------------- |
| 🅰️ **Angular Router**  | Sistema que controla la navegación           | `Router`                |
| 🛣️ **Route**           | Regla que relaciona una URL con una pantalla | `/home`                 |
| 🔗 **Navigation**       | Acción de cambiar de pantalla                | `router.navigate()`     |
| 🆔 **Route Parameter**  | Dato dinámico dentro de la ruta              | `/users/:id`            |
| 🔎 **Query Parameter**  | Parámetro después de `?`                     | `/users?active=true`    |
| 📚 **Navigation Stack** | Historial de pantallas visitadas             | `Home → Details → Edit` |
| 📑 **Tabs**             | Secciones principales de la aplicación       | Home / Search / Profile |
| 🧩 **Nested Routes**    | Rutas dentro de otras rutas                  | `/dashboard/settings`   |
| ⬅️ **Back Navigation**  | Regresar a la pantalla anterior              | `ion-back-button`       |

> [!TIP]
> La idea fundamental es: **Angular Router controla las rutas; Ionic adapta esa navegación a la experiencia de una aplicación móvil**. Los parámetros permiten transportar información en la URL, mientras que tabs, nested routes y back navigation ayudan a construir una estructura de navegación más completa.
