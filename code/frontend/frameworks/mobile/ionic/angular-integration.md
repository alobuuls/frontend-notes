  # 🅰️ IONIC + ANGULAR

En Ionic, Angular se encarga principalmente de la **lógica de la aplicación**, mientras Ionic proporciona componentes y herramientas orientadas a interfaces móviles.

---

## 📚 ÍNDICE — 🅰️ IONIC + ANGULAR
- [🅰️ IONIC + ANGULAR](#️-ionic--angular)
  - [📚 ÍNDICE — 🅰️ IONIC + ANGULAR](#-índice--️-ionic--angular)
  - [1️⃣ 🧩 COMPONENTS](#1️⃣--components)
- [2️⃣ 🛠️ SERVICES](#2️⃣-️-services)
- [3️⃣ 💉 DEPENDENCY INJECTION](#3️⃣--dependency-injection)
- [4️⃣ 🌐 HTTPCLIENT](#4️⃣--httpclient)
- [5️⃣ 🔌 CONSUMIR APIS REST](#5️⃣--consumir-apis-rest)
- [6️⃣ 📦 INTERFACES TYPESCRIPT](#6️⃣--interfaces-typescript)
- [7️⃣ 🔄 OBSERVABLES Y RXJS](#7️⃣--observables-y-rxjs)
- [8️⃣ 📝 REACTIVE FORMS](#8️⃣--reactive-forms)
- [9️⃣ 🔐 JWT](#9️⃣--jwt)
- [🔟 🛡️ HTTP INTERCEPTOR](#-️-http-interceptor)
- [1️⃣1️⃣ 🚧 AUTH GUARD](#1️⃣1️⃣--auth-guard)
- [1️⃣2️⃣ ⚠️ MANEJO DE ERRORES](#1️⃣2️⃣-️-manejo-de-errores)
- [🧠 FLUJO GENERAL](#-flujo-general)

## 1️⃣ 🧩 COMPONENTS

Los **components** son las piezas principales de una aplicación Angular.

Un componente normalmente contiene:

* 🧠 **TypeScript** → lógica
* 🎨 **HTML** → estructura de la interfaz
* 🎨 **SCSS/CSS** → estilos
* ⚙️ **Metadata** → configuración del componente

Ejemplo:

```ts
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {

}
```

En Ionic, las páginas también son componentes:

```text
HomePage
    ↓
HTML + SCSS + TypeScript
    ↓
Pantalla de la aplicación
```

📌 **Idea clave:**

> Angular organiza la lógica y estructura de la aplicación; Ionic proporciona componentes visuales adaptados a aplicaciones móviles.

---

# 2️⃣ 🛠️ SERVICES

Los **services** contienen lógica que queremos reutilizar o separar de los componentes.

Son especialmente útiles para:

* 🌐 consumir APIs
* 🔐 autenticación
* 🗃️ gestionar datos
* 🧠 lógica reutilizable
* 📦 compartir información entre componentes

Ejemplo:

```ts
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  getUsers() {
    // lógica
  }

}
```

Un componente puede utilizar el servicio mediante **Dependency Injection**.

```text
Component
    ↓
Service
    ↓
API / lógica / datos
```

📌 **Idea clave:**

> El componente debería encargarse principalmente de la interfaz y coordinación; el service puede encargarse de la lógica reutilizable.

---

# 3️⃣ 💉 DEPENDENCY INJECTION

**Dependency Injection (DI)** es el mecanismo que Angular utiliza para proporcionar objetos y servicios a otros componentes o servicios.

En lugar de crear manualmente un servicio:

```ts
const service = new UsersService();
```

Angular puede proporcionarlo automáticamente:

```ts
constructor(
  private usersService: UsersService
) {}
```

Angular se encarga de:

1. 🏗️ Crear la dependencia.
2. 📦 Gestionarla.
3. 💉 Inyectarla donde se necesita.

📌 **Ventaja principal:**

Permite que los componentes estén menos acoplados y facilita la reutilización y testing.

---

# 4️⃣ 🌐 HTTPCLIENT

`HttpClient` es la herramienta de Angular para realizar **peticiones HTTP**.

Permite comunicarse con APIs:

```text
Ionic App
    ↓
HttpClient
    ↓
HTTP
    ↓
REST API
```

Permite utilizar métodos como:

```ts
GET
POST
PUT
PATCH
DELETE
```

Ejemplo:

```ts
this.http.get('/api/users');
```

Normalmente `HttpClient` se utiliza dentro de un service:

```ts
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('/api/users');
  }

}
```

📌 **Idea clave:**

> `HttpClient` permite que la aplicación Ionic se comunique con servicios backend.

---

# 5️⃣ 🔌 CONSUMIR APIS REST

Una aplicación Ionic puede consumir APIs REST exactamente como una aplicación Angular web.

Ejemplo:

```text
Ionic
  ↓
UsersService
  ↓
HttpClient
  ↓
GET /users
  ↓
Backend
  ↓
JSON
```

Una API REST puede proporcionar endpoints como:

```text
GET    /users
GET    /users/10
POST   /users
PUT    /users/10
DELETE /users/10
```

El service puede encapsular estas operaciones:

```ts
getUsers()
getUser(id)
createUser(user)
updateUser(id, user)
deleteUser(id)
```

📌 **Ventaja:**

La interfaz no necesita conocer directamente cómo funciona el backend.

---

# 6️⃣ 📦 INTERFACES TYPESCRIPT

Las interfaces permiten definir la **estructura de los datos** que maneja la aplicación.

Por ejemplo, si la API devuelve:

```json
{
  "id": 1,
  "name": "Ana",
  "email": "ana@email.com"
}
```

Podemos definir:

```ts
export interface IUser {
  id: number;
  name: string;
  email: string;
}
```

Entonces podemos utilizarla:

```ts
getUsers(): Observable<IUser[]> {
  return this.http.get<IUser[]>('/api/users');
}
```

Esto permite que TypeScript conozca la estructura esperada.

📌 **Beneficios:**

* 🧠 Autocompletado
* 🔎 Detección de errores
* 📐 Estructura clara
* 📦 Código más mantenible

---

# 7️⃣ 🔄 OBSERVABLES Y RXJS

Angular utiliza **RxJS** para trabajar con operaciones asíncronas.

`HttpClient` devuelve normalmente **Observables**.

Ejemplo:

```ts
getUsers(): Observable<IUser[]> {
  return this.http.get<IUser[]>('/api/users');
}
```

Podemos consumirlo:

```ts
this.usersService.getUsers().subscribe(users => {
  console.log(users);
});
```

Los Observables son especialmente importantes para:

* 🌐 HTTP
* ⏳ operaciones asíncronas
* 🔄 streams de datos
* 🧩 eventos
* 🔀 transformación de datos

RxJS también proporciona operadores como:

```ts
map()
filter()
switchMap()
catchError()
tap()
```

📌 **Idea clave:**

> En Angular/Ionic, gran parte del código relacionado con datos asíncronos se basa en Observables y RxJS.

---

# 8️⃣ 📝 REACTIVE FORMS

Los **Reactive Forms** permiten construir y controlar formularios desde TypeScript.

Ejemplo:

```ts
this.form = this.fb.group({
  name: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]]
});
```

HTML:

```html
<form [formGroup]="form">

  <ion-input
    formControlName="name">
  </ion-input>

  <ion-input
    formControlName="email">
  </ion-input>

</form>
```

Permiten controlar:

* 📝 valores
* ✅ validaciones
* ❌ errores
* 🔄 cambios
* 📤 envío de datos

Son especialmente útiles para:

```text
Login
Registro
Perfil
Configuraciones
Formularios CRUD
```

---

# 9️⃣ 🔐 JWT

JWT puede utilizarse para autenticar usuarios dentro de una aplicación Ionic.

Flujo general:

```text
Usuario
   ↓
Login
   ↓
Backend
   ↓
JWT
   ↓
Ionic
   ↓
Peticiones autenticadas
```

El token puede utilizarse para demostrar que el usuario está autenticado.

Por ejemplo:

```http
Authorization: Bearer TOKEN
```

En Ionic, normalmente se combina con:

* 🔐 Auth Service
* 🗃️ almacenamiento del token
* 🛡️ HTTP Interceptor
* 🚧 Auth Guard

📌 **Idea clave:**

> JWT permite mantener un flujo de autenticación entre la aplicación Ionic y el backend.

---

# 🔟 🛡️ HTTP INTERCEPTOR

Un **HTTP Interceptor** permite interceptar las peticiones HTTP antes de enviarlas y las respuestas antes de entregarlas a la aplicación.

Es especialmente útil para JWT.

Por ejemplo:

```text
Component
   ↓
HttpClient
   ↓
Interceptor
   ↓
Añade JWT
   ↓
Backend
```

Ejemplo conceptual:

```ts
req = req.clone({
  setHeaders: {
    Authorization: `Bearer ${token}`
  }
});
```

También puede utilizarse para:

* 🔐 agregar tokens
* 📝 agregar headers
* ⚠️ manejar errores
* 📊 logging
* 🔄 gestionar respuestas

📌 **Ventaja:**

Evita tener que añadir manualmente el token en cada petición.

---

# 1️⃣1️⃣ 🚧 AUTH GUARD

Un **Auth Guard** protege determinadas rutas de la aplicación.

Por ejemplo:

```text
/login
   ↓
usuario autenticado
   ↓
/home
```

Pero:

```text
usuario NO autenticado
   ↓
/profile
   ↓
🚫 acceso bloqueado
   ↓
/login
```

Conceptualmente:

```ts
canActivate(): boolean {
  return this.authService.isAuthenticated();
}
```

Puede utilizarse para proteger:

```text
/dashboard
/profile
/settings
/admin
```

📌 **Importante:**

El Guard protege la navegación del frontend, pero **no sustituye la autorización del backend**.

El backend debe seguir validando los permisos del usuario.

---

# 1️⃣2️⃣ ⚠️ MANEJO DE ERRORES

Una aplicación Ionic debe controlar los errores que pueden ocurrir durante las operaciones HTTP.

Ejemplos:

| Código | Significado              |
| ------ | ------------------------ |
| `400`  | ❌ Request incorrecta     |
| `401`  | 🔐 No autenticado        |
| `403`  | 🚫 Sin permisos          |
| `404`  | 🔎 Recurso no encontrado |
| `500`  | 💥 Error del servidor    |

Con RxJS podemos manejar errores:

```ts
return this.http.get<IUser[]>('/api/users').pipe(
  catchError(error => {
    console.error(error);
    throw error;
  })
);
```

La aplicación puede mostrar una respuesta adecuada:

```text
API
 ↓
❌ Error
 ↓
Service
 ↓
Component
 ↓
⚠️ Mensaje al usuario
```

Por ejemplo:

```text
"Unable to load users."
"Your session has expired."
"Something went wrong."
```

📌 **Idea clave:**

> Una aplicación profesional no solo maneja el caso exitoso; también debe saber qué hacer cuando la red, el backend o la autenticación fallan.

---

# 🧠 FLUJO GENERAL

Todos estos conceptos pueden conectarse así:

```text
                🅰️ ANGULAR
                     │
              ┌──────▼──────┐
              │  Component  │
              └──────┬──────┘
                     │
                     ▼
                 🛠️ Service
                     │
                     ▼
                🌐 HttpClient
                     │
                     ▼
              🛡️ Interceptor
                     │
              🔐 JWT + Headers
                     │
                     ▼
                 🔌 REST API
                     │
                     ▼
                  Backend
                     │
                     ▼
                  JSON Data
                     │
                     ▼
                 Observable
                     │
                     ▼
                 Component
                     │
                     ▼
                📱 Ionic UI
```

Y para la navegación protegida:

```text
📱 Ionic
   ↓
🧭 Angular Router
   ↓
🚧 Auth Guard
   ↓
¿Autenticado?
   │
   ├── ❌ NO → 🔐 Login
   │
   └── ✅ SÍ → 📱 Página protegida
```
