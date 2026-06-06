# 📘 Guards en Angular (Routing)

---

## 🧠 Un Guard es una clase que Angular ejecuta antes de permitir una acción de routing

👉 Controla si una ruta puede cargarse, activarse o abandonarse

---

# 📘 🟢 ¿PARA QUÉ SIRVEN?

## 🧠 Permiten

✔ Proteger rutas (login, roles)
✔ Evitar pérdida de datos
✔ Precargar información antes de entrar

---

## ✨ TIP

🧠 Son como "filtros de seguridad" en la navegación

---

# 📘 🔵 TIPOS DE GUARDS

## 🧠 CanActivate

👉 Antes de entrar a una ruta
👉 Uso: autenticación

---

## 🧠 CanActivateChild

👉 Antes de rutas hijas
👉 Uso: proteger sub-rutas

---

## 🧠 CanDeactivate

👉 Antes de salir de una ruta
👉 Uso: evitar pérdida de datos

---

## 🧠 CanLoad

👉 Antes de cargar módulos lazy
👉 Uso: permisos antes de cargar

---

## 🧠 Resolve

👉 Antes de entrar a una ruta
👉 Uso: precargar datos

---

# 📘 🟣 EJEMPLOS

---

## 🧠 CanActivate

```ts id="g4m8x2"
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  if (!this.authService.isLoggedIn()) {
    this.router.navigate(['/login']);
    return false;
  }
  return true;
}
```

---

## 🧠 CanActivateChild

```ts id="c9v3k7"
canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  return this.authService.hasRole('admin');
}
```

---

## 🧠 CanDeactivate

```ts id="n6x2p8"
canDeactivate(component: FormComponent): boolean {
  return component.formSaved || confirm('¿Seguro que quieres salir sin guardar?');
}
```

---

## 🧠 CanLoad

```ts id="t3k9m1"
canLoad(route: Route, segments: UrlSegment[]): boolean {
  const canEnter = this.authService.hasRole('admin');
  if (!canEnter) this.router.navigate(['/inicio']);
  return canEnter;
}
```

---

## 🧠 Alternativa moderna (UrlTree)

```ts id="v8m2q5"
return canEnter ? true : this.router.createUrlTree(['/inicio']);
```

---

## 🧠 Resolve

```ts id="r7n4x9"
resolve(route: ActivatedRouteSnapshot): Observable<User> {
  return this.userService.getUser(route.params['id']);
}
```

```ts id="d2k8v6"
// En el componente
this.route.data.subscribe((data) => {
  console.log(data.user);
});
```

---

# 📘 🟡 ¿CÓMO SE USAN?

## 🧠 Se configuran en las rutas

### 💡 Ejemplo

```ts id="a9v3m7"
{
  path: 'admin',
  component: AdminComponent,
  canActivate: [AuthGuard]
}
```

👉 Angular ejecuta el guard antes de entrar

# 📘 🟠 FLUJO DE EJECUCIÓN

---

## 🧠 Usuario navega → Angular ejecuta Guard → decide

👉 true → entra
👉 false → bloquea
👉 UrlTree → redirige

---

# 📘 🔴 BUENAS PRÁCTICAS

✔ CanLoad + CanActivate juntos para seguridad completa
✔ Usar CanDeactivate en formularios
✔ Usar Resolve para cargar datos antes de mostrar
✔ Preferir UrlTree en lugar de navigate()

---

# 📘 ⚫ REGLAS IMPORTANTES

🧠 Guards no renderizan UI
🧠 Solo controlan acceso o flujo
🧠 Pueden devolver:

• boolean
• Observable<boolean>
• Promise<boolean>
• UrlTree

---

# 📘 ⚪ RESUMEN MENTAL

## 🧠 Guards controlan navegación

🔐 CanActivate → ¿puedo entrar?
👶 CanActivateChild → ¿pueden entrar los hijos?
🚪 CanDeactivate → ¿puedo salir?
📦 CanLoad → ¿cargo el módulo?
⏳ Resolve → cargar datos antes

👉 Son clave para seguridad y control de rutas en Angular 🚀
