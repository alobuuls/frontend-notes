# 📘 SERVICES EN ANGULAR

🧠 Los services son clases que se usan para manejar la lógica de negocio y compartir datos entre componentes.

👉 A diferencia de los componentes (UI), los services manejan lógica y datos

---

# 📘 🟢 ¿QUÉ ES UN SERVICE?

🧠 Es una clase en TypeScript que:

👉 Contiene funciones reutilizables  
👉 Maneja datos  
👉 NO tiene HTML  
👉 Se puede usar en muchos componentes

🧩 Es reutilizable y centraliza la lógica

---

# 📘 🔵 CONFIGURACIÓN DEL SERVICE

🧠 Se define con el decorador @Injectable

💡 Ejemplo:

```ts
@Injectable({
  providedIn: 'root',
})
export class UserService {}
```

📌 `providedIn: 'root'`  
🧠 Hace que el servicio esté disponible en toda la aplicación

👉 Se crea una sola instancia (singleton)

---

# 📘 🟣 ¿QUÉ SIGNIFICA SINGLETON?

🧠 Una sola instancia del servicio en toda la app

👉 Todos los componentes comparten el mismo estado

✨ TIP: Ideal para compartir datos globales

---

# 📘 🟡 ¿CÓMO SE USA EN UN COMPONENTE?

🧠 Angular usa inyección de dependencias (DI)

💡 Ejemplo:

```ts
import { UserService } from './user.service';

constructor(private userService: UserService) {}
```

👉 Angular lo "inyecta" automáticamente

---

# 📘 🟠 EJEMPLO DE SERVICE

🧠 Service:

```ts
export class UserService {
  usuarios = ['Alo', 'Juan'];

  getUsuarios() {
    return this.usuarios;
  }
}
```

🧠 Componente:

```ts
constructor(private userService: UserService) {}

ngOnInit() {
  console.log(this.userService.getUsuarios());
}
```

---

# 📘 🔴 USOS COMUNES

🧠 Los services se usan para:

👉 Consumir APIs (HTTP)  
👉 Compartir datos entre componentes  
👉 Manejar lógica compleja  
👉 Centralizar estado

---

# 📘 ⚫ VENTAJAS

🧠 Beneficios:

✔ Evitar duplicar código  
✔ Reutilizar lógica  
✔ Separar responsabilidades  
✔ Mantener componentes limpios

✨ TIP: Combinar services con BehaviorSubject es ideal para manejar estado compartido en Angular

# 📘 ⚪ BUENA PRÁCTICA

🧠 No poner lógica pesada en componentes

👉 Usa services para:  
• lógica  
• datos  
• peticiones HTTP

---

## ✨ TIP

🧠 Componentes = UI  
🧠 Services = lógica + estado + datos compartidos

---

# ⚠️ COSAS IMPORTANTES

🧠 providedIn: 'root' crea un singleton  
🧠 Se usan con inyección de dependencias  
🧠 No tienen HTML  
🧠 Se pueden compartir entre múltiples componentes

---

# ✨ RESUMEN

🧠 Services = lógica + datos

👉 No manejan UI  
👉 Se inyectan en componentes  
👉 Permiten reutilización y organización

👉 Base para arquitectura limpia en Angular 🚀

# 📘 DECORADOR @Injectable EN ANGULAR (SERVICES)

🧠 @Injectable es un decorador que permite que una clase pueda ser inyectada como dependencia

👉 Se usa principalmente en servicios

---

# 📘 🟢 ¿QUÉ HACE @Injectable?

🧠 Le dice a Angular:

✔ Que la clase puede usar inyección de dependencias (DI)  
✔ Que puede ser usada en otros componentes o servicios

💡 TIP: Sin @Injectable, Angular no puede inyectar dependencias correctamente

---

# 📘 🔵 CONFIGURACIÓN BÁSICA

💡 Ejemplo:

```ts
@Injectable({
  providedIn: 'root',
})
export class UserService {}
```

---

# 📘 🟣 providedIn: 'root'

🧠 Hace que el servicio esté disponible en toda la aplicación

✔ Se crea una sola instancia (singleton)

🧠 Significa:

✔ Todos los componentes comparten el mismo servicio  
✔ No necesitas registrarlo manualmente en providers

---

# 📘 🟡 ¿QUÉ ES UN SINGLETON?

🧠 Una sola instancia del servicio

✔ Compartida en toda la app

💡 Ejemplo:  
Si guardas datos en el service → todos los componentes ven lo mismo

---

# 📘 🟠 ¿CÓMO SE USA?

🧠 Angular lo inyecta automáticamente

💡 Ejemplo:

```ts
import { UserService } from './user.service';

constructor(private userService: UserService) {}
```

👉 Ya puedes usar sus métodos y datos

---

# 📘 🔴 CUÁNDO USAR providedIn

🧠 Opciones:

✔ 'root' → global (más común)  
✔ módulo específico → solo en ese módulo

💡 TIP: Usa 'root' en la mayoría de casos

---

# 📘 ⚫ EJEMPLO CON LÓGICA

🧠 Service:

```ts
@Injectable({
  providedIn: 'root',
})
export class UserService {
  usuarios = ['Alo', 'Juan'];

  getUsuarios() {
    return this.usuarios;
  }
}
```

---

# ⚠️ COSAS IMPORTANTES

🧠 @Injectable habilita DI  
🧠 providedIn: 'root' crea un singleton  
🧠 No necesita providers manual  
🧠 Se usa en services

---

# ✨ RESUMEN

🧠 @Injectable = habilita servicios

👉 Permite inyección de dependencias  
👉 Hace el servicio reutilizable  
👉 'root' = disponible globalmente

👉 Es clave para manejar lógica en Angular 🚀
