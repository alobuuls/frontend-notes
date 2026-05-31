# 📘 ROUTES EN ANGULAR (ROUTING)

🧠 Routes = sistema de navegación en Angular

👉 Permiten cambiar de vista SIN recargar la página (SPA)

---

# 📘 🟢 ¿QUÉ SON LAS ROUTES?

🧠 Son configuraciones que conectan URLs con componentes

👉 Ejemplo:  
👉 /home → HomeComponent  
👉 /about → AboutComponent

💡 Ejemplo:

```ts
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
];
```

---

# 📘 🔵 ¿PARA QUÉ SIRVEN?

🎯 Beneficios:

✔ Navegación sin recarga  
✔ Separar vistas  
✔ Mejor UX  
✔ Integración con lazy loading

---

# 📘 🟣 CONFIGURACIÓN BÁSICA

🧠 Paso 1: Importar RouterModule

```ts
imports: [RouterModule.forRoot(routes)];
```

---

🧠 Paso 2: Colocar router-outlet

```html
<router-outlet></router-outlet>
```

👉 Aquí se renderizan los componentes

✨ TIP: `router-outlet` es el “contenedor dinámico” de toda la app Angular.

---

# 📘 🟡 TIPOS DE RUTAS

🧠 Ruta básica

```ts
{ path: 'home', component: HomeComponent }
```

---

🧠 Ruta por defecto

```ts
{ path: '', redirectTo: 'home', pathMatch: 'full' }
```

---

🧠 Ruta wildcard (404)

```ts
{ path: '**', component: NotFoundComponent }
```

---

🧠 Ruta con parámetros

```ts
{ path: 'user/:id', component: UserComponent }
```

---

# 📘 🟠 NAVEGACIÓN

🧠 Desde HTML

```html
<a routerLink="/home">Home</a>
```

---

🧠 Desde TypeScript

```ts
constructor(private router: Router) {}

this.router.navigate(['/home']);
```

---

# 📘 🔴 PARÁMETROS DE RUTA

🧠 Obtener parámetros

```ts
constructor(private route: ActivatedRoute) {}

this.route.params.subscribe(params => {
  console.log(params['id']);
});
```

👉 URL: /user/10

✨ TIP: Los parámetros de ruta son clave para páginas dinámicas (usuarios, productos, etc.).

---

# 📘 ⚫ LAZY LOADING EN ROUTES

🧠 Cargar módulos bajo demanda

```ts
{
  path: 'admin',
  loadChildren: () =>
    import('./admin/admin.module')
    .then(m => m.AdminModule)
}
```

✨ TIP: Lazy loading mejora muchísimo el rendimiento en apps grandes porque reduce el bundle inicial.

# 📘 ⚪ GUARDS EN ROUTES

🧠 Proteger rutas

💡 Ejemplo:

```ts
{
  path: 'admin',
  component: AdminComponent,
  canActivate: [AuthGuard]
}
```

✨ TIP: Los guards son clave para seguridad en aplicaciones reales (auth, roles, permisos).

---

# 📘 🟤 RUTAS HIJAS

🧠 Permiten anidar rutas

💡 Ejemplo:

```ts
{
  path: 'admin',
  children: [
    { path: 'users', component: UsersComponent },
    { path: 'settings', component: SettingsComponent }
  ]
}
```

---

✨ TIP: Las rutas hijas suelen usarse en dashboards para mantener una estructura limpia y escalable.

---

# 📘 🟢 BUENAS PRÁCTICAS

✔ Usar AppRoutingModule  
✔ Separar rutas por módulos  
✔ Usar lazy loading  
✔ Proteger rutas con guards

---

# 📘 🟡 ERRORES COMUNES

❌ No usar router-outlet  
❌ Mal uso de rutas  
❌ No manejar rutas 404  
❌ No usar pathMatch en redirect

---

# ⚠️ COSAS IMPORTANTES

🧠 routerLink = navegación en HTML  
🧠 Router = navegación en TS  
🧠 router-outlet = renderiza vistas  
🧠 Funciona sin recargar la página

---

# ✨ RESUMEN

🧠 Routes = navegación en Angular

👉 Conectan URLs con componentes  
👉 Permiten SPA  
👉 Integran lazy loading y guards

👉 Base para navegación en Angular 🚀

```md id="l2y8pz"

```

# 📘 LAZY LOADING EN ANGULAR (CARGA BAJO DEMANDA)

🧠 Lazy Loading = cargar módulos solo cuando se necesitan

👉 Mejora el rendimiento de la aplicación

---

# 📘 🟢 ¿QUÉ ES LAZY LOADING?

🧠 Es una técnica donde Angular NO carga todo al inicio

👉 En lugar de eso:  
• Divide la app en módulos  
• Carga cada módulo cuando el usuario lo necesita

💡 Ejemplo:  
Ir a /admin → carga AdminModule SOLO en ese momento

---

# 📘 🔵 ¿PARA QUÉ SIRVE?

🎯 Beneficios:

✔ Reduce el bundle inicial  
✔ Mejora tiempo de carga (First Load)  
✔ Optimiza performance  
✔ Hace la app más escalable

---

# 📘 🟣 ¿CÓMO FUNCIONA?

🧠 Angular divide la app en chunks

👉 App inicia con lo mínimo (AppModule)  
👉 Los módulos lazy se cargan después

✨ TIP: Lazy loading + preloadingStrategy = mejora UX sin comprometer performance

---

# 📘 🟡 ¿CÓMO HACER LAZY LOADING?

🧠 Paso 1: Crear un Feature Module

```bash
ng g module admin --route admin --module app.module
```

👉 Esto genera automáticamente lazy loading

---

📘 Forma manual:

🧠 Paso 1: Crear módulo

```bash
ng g module admin
```

🧠 Paso 2: Crear routing del módulo

```bash
ng g module admin-routing --flat --module=admin
```

🧠 Paso 3: Configurar rutas

```ts
// app-routing.module.ts
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
  },
];
```

👉 Angular cargará el módulo solo al entrar a /admin

---

# 📘 🟠 ESTRUCTURA INTERNA

🧠 Dentro del módulo lazy:

```ts
const routes: Routes = [{ path: '', component: AdminComponent }];
```

👉 Define sus propias rutas

---

# 📘 🔴 ¿CUÁNDO USARLO?

🧠 Siempre que tengas cosas grandes

👉 Ejemplos:

✔ Panel admin  
✔ Reportes  
✔ Dashboard  
✔ Configuración

❌ NO usar para cosas pequeñas

---

# 📘 ⚫ RELACIÓN CON FEATURE MODULES

🧠 Lazy loading usa Feature Modules

👉 Cada módulo lazy = una feature

---

# 📘 ⚪ BUENAS PRÁCTICAS

✔ Dividir por funcionalidades  
✔ Usar lazy loading en features grandes  
✔ Mantener AppModule liviano  
✔ Usar guards si es necesario

---

# 📘 🟤 ERRORES COMUNES

❌ No usar lazy loading  
❌ Poner todo en AppModule  
❌ No separar rutas  
❌ Lazy loading mal configurado

---

# ⚠️ COSAS IMPORTANTES

🧠 Usa loadChildren  
🧠 Carga bajo demanda  
🧠 Mejora performance  
🧠 Funciona con routing

---

# ✨ RESUMEN

🧠 Lazy Loading = carga inteligente

👉 Solo carga lo necesario  
👉 Reduce peso inicial  
👉 Mejora velocidad

👉 Clave para apps grandes 🚀

```

```
