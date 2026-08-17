# 🌐 12. HTTP + APIs EN ANGULAR

## 🌐 ÍNDICE

## 📡 HTTPCLIENT Y PETICIONES

- [¿Cómo haces una petición HTTP en Angular?](#-cómo-haces-una-petición-http-en-angular)
- [¿Qué es `HttpClient`?](#-qué-es-httpclient)
- [¿Qué diferencia hay entre `GET`, `POST`, `PUT`, `PATCH` y `DELETE`?](#-qué-diferencia-hay-entre-get-post-put-patch-y-delete)

---

## ❌ MANEJO DE ERRORES

- [¿Cómo manejarías errores HTTP?](#-cómo-manejarías-errores-http)
- [¿Cómo manejarías un `401 Unauthorized`?](#-cómo-manejarías-un-401-unauthorized)
- [`catchError()`](#-cómo-manejarías-errores-http)

---

## 🔌 HTTP INTERCEPTORS

- [¿Qué es un interceptor?](#-qué-es-un-interceptor)
- [¿Para qué utilizarías un interceptor?](#-para-qué-utilizarías-un-interceptor)
- [¿Cómo agregarías un JWT automáticamente a las peticiones?](#-cómo-agregarías-un-jwt-automáticamente-a-las-peticiones)
- [Manejo global de errores con Interceptors](#-para-qué-utilizarías-un-interceptor)

---

## 🔐 AUTENTICACIÓN

- [¿Cómo agregarías un JWT automáticamente a las peticiones?](#-cómo-agregarías-un-jwt-automáticamente-a-las-peticiones)
- [¿Cómo manejarías un `401 Unauthorized`?](#-cómo-manejarías-un-401-unauthorized)
- [Flujo de autenticación con JWT](#-cómo-manejarías-un-401-unauthorized)

---

## 🔎 HTTP PARAMS Y HEADERS

- [¿Qué es un `HttpParams`?](#-qué-es-un-httpparams)
- [¿Qué son `HttpHeaders`?](#-qué-son-httpheaders)
- [Diferencia entre `HttpParams` y `HttpHeaders`](#-qué-son-httpheaders)

---

## 🧹 CANCELACIÓN Y SUBSCRIPTIONS

- [¿Cómo cancelarías una petición HTTP?](#-cómo-cancelarías-una-petición-http)
- [`takeUntil()`](#-cómo-cancelarías-una-petición-http)
- [`takeUntilDestroyed()`](#-cómo-cancelarías-una-petición-http)
- [`switchMap()` para búsquedas y autocomplete](#-cómo-cancelarías-una-petición-http)

---

## 🔄 ESTADO DE LAS PETICIONES

- [¿Cómo manejarías `loading / error / success`?](#-cómo-manejarías-loading--error--success)
- [Estado `idle`](#-cómo-manejarías-loading--error--success)
- [Estado `loading`](#-cómo-manejarías-loading--error--success)
- [Estado `success`](#-cómo-manejarías-loading--error--success)
- [Estado `error`](#-cómo-manejarías-loading--error--success)

---

## 🧩 TIPADO DE APIs

- [¿Cómo tiparías la respuesta de una API?](#-cómo-tiparías-la-respuesta-de-una-api)
- [Interfaces y Types](#-cómo-tiparías-la-respuesta-de-una-api)
- [`Observable<User>`](#-cómo-tiparías-la-respuesta-de-una-api)
- [`Observable<User[]>`](#-cómo-tiparías-la-respuesta-de-una-api)
- [`ApiResponse<T>`](#-cómo-tiparías-la-respuesta-de-una-api)

---

## 🧠 RESUMEN PARA ENTREVISTA

- [Resumen para entrevista](#-resumen-para-entrevista)
- [Ideas clave que debes poder explicar](#-las-ideas-que-debes-poder-explicar-sin-memorizar)
- [Frase clave para entrevista](#-frase-clave-para-entrevista)

---


## 🔹 ¿Cómo haces una petición HTTP en Angular?

Utilizando `HttpClient`, que normalmente se inyecta en un servicio.

```typescript
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject(HttpClient);

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users');
  }
}
```

Y desde un componente podemos suscribirnos:

```typescript
this.usersService.getUsers().subscribe(users => {
  console.log(users);
});
```

### 🗣️ Respuesta de entrevista

> "En Angular normalmente realizo las peticiones HTTP desde un servicio utilizando `HttpClient`. El método devuelve un `Observable`, que puedo consumir desde el componente o mediante otras herramientas de RxJS."

> 💡 **Buena práctica:** evitar hacer directamente las peticiones HTTP desde los componentes. Lo ideal es centralizarlas en servicios.

---

## 🔹 ¿Qué es `HttpClient`?

`HttpClient` es el servicio de Angular que permite realizar peticiones HTTP hacia APIs o servidores.

### 📌 Operaciones principales

```typescript
http.get()
http.post()
http.put()
http.patch()
http.delete()
```

Además permite:

* Enviar headers.
* Enviar parámetros.
* Enviar body.
* Manejar respuestas.
* Tipar respuestas.
* Manejar errores.
* Trabajar con `Observable` de RxJS.
* Utilizar interceptores.

```typescript
this.http.get<User[]>('/api/users');
```

### 🗣️ Respuesta de entrevista

> "`HttpClient` es el servicio de Angular que utilizo para comunicarme con APIs mediante HTTP. Permite realizar operaciones como GET, POST, PUT, PATCH y DELETE y trabaja con Observables de RxJS."

---

## 🔹 ¿Qué diferencia hay entre `GET`, `POST`, `PUT`, `PATCH` y `DELETE`?

Son diferentes métodos HTTP que representan distintas operaciones sobre los recursos.

| Método   | Uso                                       |
| -------- | ----------------------------------------- |
| `GET`    | Obtener información                       |
| `POST`   | Crear un recurso                          |
| `PUT`    | Reemplazar/actualizar un recurso completo |
| `PATCH`  | Actualizar parcialmente un recurso        |
| `DELETE` | Eliminar un recurso                       |

### 💻 Ejemplo

```typescript
// Obtener usuarios
this.http.get<User[]>('/api/users');

// Crear usuario
this.http.post<User>('/api/users', user);

// Actualizar usuario completo
this.http.put<User>('/api/users/10', user);

// Actualizar parcialmente
this.http.patch<User>('/api/users/10', {
  name: 'Alo'
});

// Eliminar usuario
this.http.delete('/api/users/10');
```

### 🗣️ Respuesta de entrevista

> "`GET` se utiliza para obtener información, `POST` normalmente para crear recursos, `PUT` para reemplazar o actualizar un recurso completo, `PATCH` para modificar parcialmente un recurso y `DELETE` para eliminarlo."

> 💡 **Pregunta típica:** **¿PUT y PATCH son lo mismo?**
>
> No.
>
> ```text
> PUT    → actualización completa
> PATCH  → actualización parcial
> ```

---

## 🔹 ¿Cómo manejarías errores HTTP?

Una forma muy común es utilizar el operador `catchError` de RxJS.

```typescript
this.http.get<User[]>('/api/users').pipe(
  catchError(error => {
    console.error(error);

    return throwError(() => error);
  })
);
```

También podemos utilizar un **interceptor HTTP** para manejar errores de forma global.

| Status | Significado           |
| ------ | --------------------- |
| `401`  | sesión/token          |
| `403`  | permisos              |
| `404`  | recurso no encontrado |
| `500`  | error del servidor    |

### 🗣️ Respuesta de entrevista

> "Puedo manejar errores HTTP utilizando operadores de RxJS como `catchError`. Si se trata de errores que deben manejarse globalmente, como un 401 o ciertos errores del servidor, también puedo utilizar un interceptor HTTP."

> 💡 La idea importante es **no manejar todos los errores directamente en cada componente** si existe un comportamiento común.

---

## 🔹 ¿Qué es un interceptor?

Un interceptor es una pieza de Angular que permite **interceptar las peticiones HTTP y sus respuestas** antes de que lleguen al servidor o al consumidor.

```text
Componente
    ↓
Servicio
    ↓
Interceptor
    ↓
Backend
    ↓
Interceptor
    ↓
Componente
```

Puede modificar:

* Request
* Headers
* URL
* Response
* Errores

En Angular moderno podemos utilizar interceptores funcionales:

```typescript
export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const token = localStorage.getItem('token');

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(req);
};
```

### 🗣️ Respuesta de entrevista

> "Un interceptor permite interceptar las peticiones y respuestas HTTP de Angular. Es útil cuando quiero aplicar lógica común a muchas peticiones, por ejemplo agregar tokens, headers, logging o manejar determinados errores."

---

## 🔹 ¿Para qué utilizarías un interceptor?

Hay varios casos muy comunes.

| Caso                           | Uso                                                    |
| ------------------------------ | ------------------------------------------------------ |
| 🔐 **Autenticación**           | Agregar automáticamente un JWT                         |
| ❌ **Manejo global de errores** | `401`, `403`, `500`                                    |
| ⏳ **Loading global**           | Mostrar un spinner mientras existen peticiones activas |
| 📊 **Logging**                 | Registrar peticiones y respuestas durante desarrollo   |
| 🧾 **Headers comunes**         | `Content-Type`, `Accept`, `Authorization`              |

### 🔐 Autenticación

```http
Authorization: Bearer eyJhbGci...
```

### ❌ Manejo global de errores

```text
401 → cerrar sesión
403 → mostrar acceso denegado
500 → mostrar error genérico
```

### 🧾 Headers comunes

```http
Content-Type
Accept
Authorization
```

### 🗣️ Respuesta de entrevista

> "Utilizaría un interceptor para lógica transversal relacionada con HTTP, como agregar automáticamente el JWT, manejar errores globales, agregar headers comunes, logging o controlar un loading global."

> 💡 **Palabra clave de entrevista:** **lógica transversal**.

---

## 🔹 ¿Cómo agregarías un JWT automáticamente a las peticiones?

Lo haría mediante un **HTTP interceptor**.

```typescript
export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const token = localStorage.getItem('token');

  if (!token) {
    return next(req);
  }

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  return next(authReq);
};
```

El resultado sería:

```http
GET /api/users

Authorization: Bearer <JWT>
```

### 🗣️ Respuesta de entrevista

> "Utilizaría un interceptor HTTP para obtener el JWT desde el mecanismo donde lo esté almacenando y clonar la petición agregando el header `Authorization` con el formato `Bearer token`. Así no tengo que agregar manualmente el token en cada servicio."

> 💡 **Importante:** las peticiones son inmutables, por eso utilizamos:
>
> ```typescript
> req.clone()
> ```
>
> en lugar de modificar directamente `req`.

---

## 🔹 ¿Cómo manejarías un `401 Unauthorized`?

Un `401` normalmente significa que la petición **no está autenticada correctamente**.

### 📌 Puede ocurrir por:

* Token inexistente.
* Token expirado.
* Token inválido.
* Sesión no válida.

Una estrategia común es manejarlo desde un interceptor.

```typescript
catchError(error => {

  if (error.status === 401) {
    // limpiar sesión
    // eliminar token
    // redirigir al login
  }

  return throwError(() => error);
})
```

### 🔄 Flujo

```text
Request
   ↓
Backend
   ↓
401 Unauthorized
   ↓
Interceptor
   ↓
Limpiar sesión
   ↓
Redirigir a Login
```

### 🗣️ Respuesta de entrevista

> "Manejaría el 401 desde un interceptor para centralizar el comportamiento. Si el token expiró o ya no es válido, limpiaría la sesión y redirigiría al usuario al login. Si la aplicación utiliza refresh tokens, podría intentar renovar el access token antes de cerrar la sesión."

> 🔥 **Esta última parte te hace sonar mucho mejor en entrevista**, porque demuestra que conoces el flujo de autenticación más allá del caso básico.

# 🔹 ¿Qué es un `HttpParams`?

`HttpParams` permite construir **query parameters** para una petición HTTP.

```text
GET /api/users?page=1&limit=10
```

En Angular:

```typescript
const params = new HttpParams()
  .set('page', 1)
  .set('limit', 10);

this.http.get<User[]>('/api/users', { params });
```

También podemos tener:

```typescript
const params = new HttpParams({
  fromObject: {
    page: '1',
    limit: '10',
    search: 'john'
  }
});
```

### 🗣️ Respuesta de entrevista

> "`HttpParams` es una clase de Angular que utilizo para construir y enviar query parameters en una petición HTTP, por ejemplo filtros, paginación, búsqueda o sorting."

```text
/api/users?page=1&limit=10&search=john
```

---

# 🔹 ¿Qué son `HttpHeaders`?

`HttpHeaders` permite trabajar con los **headers HTTP** de una petición.

```typescript
const headers = new HttpHeaders({
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json'
});
```

Y después:

```typescript
this.http.get('/api/users', {
  headers
});
```

Los headers contienen información adicional sobre la petición.

```http
Authorization: Bearer token
Content-Type: application/json
Accept: application/json
```

### 🗣️ Respuesta de entrevista

> "`HttpHeaders` permite definir y manipular los headers de una petición HTTP. Por ejemplo, puedo utilizarlos para enviar un JWT mediante Authorization o indicar el tipo de contenido."

### 💡 Diferencia clave

| Herramienta   | Función                              |
| ------------- | ------------------------------------ |
| `HttpParams`  | Parámetros de URL                    |
| `HttpHeaders` | Información adicional de la petición |

```text
/api/users?page=1
             ↑
          HttpParams

Authorization: Bearer token
↑
HttpHeaders
```

---

# 🔹 ¿Cómo cancelarías una petición HTTP?

Una opción moderna en Angular es utilizar `takeUntilDestroyed()` para que una suscripción se cancele cuando se destruye el contexto correspondiente.

```typescript
this.http.get<User[]>('/api/users')
  .pipe(
    takeUntilDestroyed(this.destroyRef)
  )
  .subscribe();
```

Otra opción es utilizar un `Subject`:

```typescript
private destroy$ = new Subject<void>();

this.http.get<User[]>('/api/users')
  .pipe(
    takeUntil(this.destroy$)
  )
  .subscribe();

ngOnDestroy() {
  this.destroy$.next();
  this.destroy$.complete();
}
```

> 💡 También es importante recordar que los Observables de `HttpClient` son normalmente **cold y de una sola emisión**, y la petición se ejecuta al suscribirse.

### 🗣️ Respuesta de entrevista

> "Puedo cancelar o limpiar la suscripción utilizando operadores de RxJS como `takeUntil`, o en Angular moderno `takeUntilDestroyed`. Esto es especialmente útil para evitar que una operación continúe cuando el componente ya fue destruido."

### 🔥 Para búsquedas/autocomplete

También existen operadores como:

```typescript
switchMap()
```

que permiten cancelar la petición anterior cuando llega un nuevo valor.

```text
Usuario escribe:

a
 ↓
ab
 ↓
abc
```

Con `switchMap`:

```text
request "a"   ❌ cancelada
request "ab"  ❌ cancelada
request "abc" ✅ continúa
```

> 🔥 **Esto aparece muchísimo en entrevistas de RxJS + Angular.**

---

# 🔹 ¿Cómo manejarías `loading / error / success`?

Una forma sencilla es mantener un estado de la petición.

```typescript
type RequestState =
  | 'idle'
  | 'loading'
  | 'success'
  | 'error';
```

### 🔄 Flujo

```text
idle
 ↓
loading
 ↓
 ├── success
 │
 └── error
```

Podemos utilizar RxJS para manejarlo.

```typescript
this.state = 'loading';

this.service.getUsers().subscribe({
  next: users => {
    this.users = users;
    this.state = 'success';
  },
  error: error => {
    this.error = error;
    this.state = 'error';
  }
});
```

En una aplicación más grande podemos centralizar este patrón mediante:

| Herramienta              |
| ------------------------ |
| Servicios                |
| RxJS                     |
| Signals                  |
| Interceptors             |
| Estados personalizados   |
| Operadores reutilizables |

### 🗣️ Respuesta de entrevista

> "Normalmente manejo el estado de la petición diferenciando loading, success y error. Al iniciar la petición activo loading, en `next` guardo la información y marco success, y en `error` guardo el error y cambio el estado a error. En aplicaciones grandes puedo abstraer este patrón mediante RxJS, signals o servicios reutilizables."

---

# 🔹 ¿Cómo tiparías la respuesta de una API?

Utilizando **interfaces o types de TypeScript** y pasando el tipo genérico a `HttpClient`.

Por ejemplo, si la API devuelve:

```json
{
  "id": 1,
  "name": "Alo",
  "email": "alo@example.com"
}
```

Creo una interfaz:

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}
```

Y después:

```typescript
getUser(): Observable<User> {
  return this.http.get<User>('/api/user/1');
}
```

Para un array:

```typescript
getUsers(): Observable<User[]> {
  return this.http.get<User[]>('/api/users');
}
```

Si la API tiene una estructura:

```json
{
  "success": true,
  "data": []
}
```

puedo crear:

```typescript
interface ApiResponse<T> {
  success: boolean;
  data: T;
}
```

Y utilizar:

```typescript
getUsers(): Observable<ApiResponse<User[]>> {
  return this.http.get<ApiResponse<User[]>>('/api/users');
}
```

### 🗣️ Respuesta de entrevista

> "Tiparía las respuestas de la API utilizando interfaces o types de TypeScript y los pasaría como genéricos a `HttpClient`. Por ejemplo, utilizaría `http.get<User[]>` si espero un array de usuarios. Si la API tiene una respuesta genérica, también puedo crear un tipo como `ApiResponse<T>`."

---

# 🧠 RESUMEN PARA ENTREVISTA

Si te preguntan rápidamente sobre HTTP en Angular, intenta tener este mapa mental:

```text
                 🌐 HTTP + APIs
                       │
        ┌──────────────┼──────────────┐
        ↓              ↓              ↓
    HttpClient      Servicios      RxJS
        │              │              │
        ↓              ↓              ↓
 GET / POST /      Centralizar      Observables
 PUT / PATCH /     peticiones       catchError
 DELETE                             switchMap
        │
        ├── HttpParams
        │     └── Query parameters
        │
        ├── HttpHeaders
        │     └── Headers
        │
        └── Interceptors
              ├── JWT
              ├── 401
              ├── Headers
              ├── Loading
              └── Logging
```

### 🔥 Las ideas que debes poder explicar sin memorizar

| Concepto          | Idea clave                                                      |
| ----------------- | --------------------------------------------------------------- |
| **`HttpClient`**  | Hace peticiones HTTP.                                           |
| **Servicio**      | Centraliza la comunicación con la API.                          |
| **Observable**    | Representa el flujo asíncrono de la respuesta.                  |
| **`HttpParams`**  | Query parameters.                                               |
| **`HttpHeaders`** | Headers de la petición.                                         |
| **Interceptor**   | Lógica transversal para requests/responses.                     |
| **JWT**           | Se puede agregar automáticamente mediante interceptor.          |
| **401**           | Token/sesión no válida → manejar globalmente.                   |
| **`catchError`**  | Manejo de errores con RxJS.                                     |
| **`switchMap`**   | Útil para cancelar la petición anterior cuando llega una nueva. |
| **Tipado**        | `http.get<User>()`, `http.get<User[]>()`, etc.                  |

### 🎯 Frase clave para entrevista

> **"En Angular intento separar responsabilidades: los componentes manejan la UI, los servicios encapsulan la comunicación con la API, RxJS maneja los flujos asíncronos y los interceptores permiten centralizar lógica transversal de HTTP."**
