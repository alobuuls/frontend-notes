# 📘 Interceptors en Angular (HTTP)

---

## 🧠 Un interceptor es una clase que permite interceptar y modificar TODAS las peticiones HTTP

👉 Antes de que salgan (request)
👉 O cuando regresan (response)

---

# 📘 🟢 ¿PARA QUÉ SIRVEN?

## 🧠 Usos principales

✔ Agregar headers (tokens, API keys)
✔ Manejar errores globales
✔ Mostrar loaders
✔ Loggear requests/responses

---

## ✨ TIP

🧠 Son como "middleware" para las peticiones HTTP

---

# 📘 🔵 CREAR UN INTERCEPTOR

## 🧠 Implementa la interfaz HttpInterceptor

### 💡 Ejemplo

```ts id="h7m3q9"
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cloneReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer TOKEN',
      },
    });

    return next.handle(cloneReq);
  }
}
```

---

# 📘 🟣 ¿CÓMO FUNCIONA?

## 🧠 Flujo

👉 Request → Interceptor → Servidor → Interceptor → Response → App

👉 Puedes modificar entrada y salida

---

# 📘 🟡 REGLAS IMPORTANTES

⚠️ Las requests son inmutables
👉 Debes usar clone()

---

⚠️ Siempre retornar:

```ts
return next.handle(req);
```

👉 Si no lo haces, la petición se rompe

---

# 📘 🟠 FILTRAR REQUESTS

## 🧠 Aplicar interceptor solo a ciertas URLs

### 💡 Ejemplo

```ts id="k2v8m4"
if (!req.url.includes('api.miapi.com')) {
  return next.handle(req);
}
```

---

# 📘 🔴 REGISTRAR INTERCEPTOR

## 🧠 Se agrega en providers

### 💡 Ejemplo

```ts id="p9x3n7"
import { HTTP_INTERCEPTORS } from '@angular/common/http';

providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HeaderInterceptor,
    multi: true,
  },
];
```

👉 multi: true permite múltiples interceptores

---

# 📘 ⚫ EJEMPLO REAL (API KEY)

### 💡 Ejemplo

```ts id="v4m8q2"
const cloneReq = req.clone({
  setHeaders: {
    Authorization: `Client-ID ${environment.apiKey}`,
  },
});
```

# 📘 ⚪ LEER HEADERS

### 💡 Ejemplo

```ts id="a8m3k7"
req.headers.keys().forEach((key) => {
  console.log(key, req.headers.get(key));
});
```

---

# 📘 🟤 INTERCEPTAR RESPUESTA

## 🧠 Usando RxJS

### 💡 Ejemplo

```ts id="r6v2n9"
import { tap } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';

return next.handle(req).pipe(
  tap((event) => {
    if (event instanceof HttpResponse) {
      console.log(event.body);
    }
  })
);
```

---

# 📘 🟢 MANEJO DE ERRORES

### 💡 Ejemplo

```ts id="k9x4m2"
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

return next.handle(req).pipe(
  catchError((err) => {
    console.error(err);
    return throwError(() => err);
  })
);
```

---

# 📘 🔵 USOS COMUNES

👉 Auth (JWT / API Key)
👉 Logs
👉 Loader global
👉 Manejo de errores
👉 Headers personalizados

---

# ⚠️ COSAS IMPORTANTES

🧠 Intercepta TODAS las requests
🧠 Usa clone() para modificar
🧠 Usa next.handle() para continuar
🧠 Puede modificar request y response

---

# ✨ RESUMEN

🧠 Interceptors = control global de HTTP

👉 Interceptan peticiones y respuestas
👉 Permiten modificar headers
👉 Manejan errores globales

👉 Son clave para apps profesionales en Angular 🚀
