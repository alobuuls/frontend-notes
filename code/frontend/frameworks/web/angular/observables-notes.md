# 📘 RxJS en Angular — Observable, Subject & BehaviorSubject

---

## 🧠 RxJS es una librería de programación reactiva usada en Angular

👉 Permite trabajar con:

• datos asíncronos
• eventos
• streams de datos
• peticiones HTTP

---

# 📘 🟢 ¿QUÉ ES UN OBSERVABLE?

## 🧠 Observable = fuente que emite datos

👉 Puede emitir:

• valores
• eventos
• respuestas HTTP
• cambios en el tiempo

---

### 💡 Ejemplos

Observable
Subject
BehaviorSubject

---

👉 Angular usa Observables en:

• HttpClient
• forms
• routing
• RxJS

---

# 📘 🔵 ¿QUÉ ES UN OBSERVER?

## 🧠 Observer = quien escucha los datos

👉 Recibe valores emitidos por el Observable

---

### 💡 Ejemplo

```ts id="rx1"
observable.subscribe((value) => {
  console.log(value);
});
```

👉 subscribe() = escuchar

---

# 📘 🟣 FLUJO MENTAL RXJS

## 🧠 Idea simple

👉 next() → emite
👉 subscribe() → recibe

---

### 💡 Flujo

Subject ---- next() ----> subscribe()

---

# 📘 🟡 ¿QUÉ ES UN SUBJECT?

## 🧠 Subject = Observable que emite eventos manualmente

---

## ✔ Características

✔ emite valores
✔ NO guarda estado
✔ NO tiene valor inicial
✔ nuevos subscribers NO reciben emisiones anteriores

---

### 💡 Ejemplo

```ts id="rx2"
const subject = new Subject<string>();

subject.next('hola');

subject.subscribe((value) => {
  console.log(value);
});
```

👉 Si el subscribe ocurre después del next()
❌ NO recibe el valor anterior

---

# 📘 🟠 USOS TÍPICOS DE SUBJECT

✔ logout
✔ refresh
✔ abrir modal
✔ clicks
✔ notificaciones

👉 Ideal para eventos temporales

# 📘 🔴 ¿QUÉ ES UN BEHAVIORSUBJECT?

---

## 🧠 BehaviorSubject = Subject con estado

✔ Guarda estado

✔ Tiene valor inicial

✔ Nuevos subscribers reciben el último valor automáticamente

✔ Tiene `.value`

---

## 💡 Ejemplo

```ts
const users$ = new BehaviorSubject<string[]>([]);

users$.next(['Alo']);

users$.subscribe((users) => {
  console.log(users);
});
```

👉 El subscriber recibe inmediatamente el último valor.

---

# 📘 ⚫ USOS TÍPICOS DE BEHAVIORSUBJECT

---

## 🧠 Casos comunes

✔ Usuario actual

✔ Carrito

✔ Auth

✔ Tema dark/light

✔ Listas compartidas

👉 Ideal para manejo de estado.

---

# 📘 ⚪ DIFERENCIA PRINCIPAL

---

## 🧠 Subject

👉 Solo emite.

---

## 🧠 BehaviorSubject

👉 Emite + recuerda el último valor.

---

# 📘 🟤 next()

---

## 🧠 Emite un nuevo valor

### 💡 Ejemplo

```ts
subject.next(data);
```

👉 Hace que los subscribers reciban el dato.

---

# 📘 🟢 subscribe()

---

## 🧠 Escucha valores emitidos

### 💡 Ejemplo

```ts
subject.subscribe((value) => {
  console.log(value);
});
```

👉 Cada emisión ejecuta el callback.

---

# 📘 🔵 .value (SOLO BehaviorSubject)

---

## 🧠 Obtiene el valor actual

### 💡 Ejemplo

```ts
this.users$.value;
```

👉 Permite leer el estado actual.

---

# 📘 🟣 asObservable()

---

## 🧠 Protege el Subject

✔ Permite `subscribe()`

❌ Bloquea `next()`

### 💡 Uso recomendado

```ts
return this.users$.asObservable();
```

👉 Buena práctica en servicios.

---

# 📘 🟡 unsubscribe()

---

## 🧠 Deja de escuchar el observable

👉 Importante:

✔ NO mata el observable

✔ Solo elimina ESA suscripción

### 💡 Ejemplo

```ts
const sub = observable.subscribe();

sub.unsubscribe();
```

👉 Evita memory leaks.

---

## ✨ TIP

🧠 Piensa en un `BehaviorSubject` como una variable reactiva.

Siempre conoce su valor actual y además puede emitir cambios futuros 🚀

# 📘 🟠 ¿CUÁNDO USAR unsubscribe()?

---

## 🧠 Casos típicos

✔ subscribe manual

✔ streams infinitos

✔ eventos

✔ intervalos

---

## ❌ Normalmente NO necesario con

• HttpClient

• async pipe

---

# 📘 🔴 async pipe

---

## 🧠 Angular hace subscribe y unsubscribe automáticamente

👉 Ideal cuando SOLO muestras datos en HTML

---

## 💡 Ejemplo

```html
{{ users$ | async }}
```

---

## ✅ Ventajas

✔ Más limpio

✔ Evita memory leaks

✔ Recomendado en Angular moderno

---

## ✨ TIP

🧠 Siempre que solo necesites mostrar datos en la plantilla, prefiere `async pipe` sobre `subscribe()` manual.

---

# 📘 ⚫ complete()

---

## 🧠 Cierra el stream definitivamente

👉 Después de complete()

❌ next() ya NO funciona

---

## 💡 Ejemplo

```ts
subject.complete();
```

---

# 📘 ⚪ ¿CUÁNDO USAR complete()?

---

## 🧠 Casos típicos

✔ descarga terminada

✔ websocket cerrado

✔ procesos temporales

✔ destroy$

---

## ❌ NO usar en

• state global

• BehaviorSubject de servicios

---

## ⚠️ Importante

Una vez ejecutado `complete()`, el observable queda cerrado permanentemente.

---

# 📘 🟤 ¿CUÁNDO USAR CADA COSA?

---

## 🧠 Resumen rápido

| Situación                    | Qué usar         |
| ---------------------------- | ---------------- |
| Mostrar datos en HTML        | async pipe       |
| Ejecutar lógica en subscribe | subscribe manual |
| Cancelar subscribe manual    | unsubscribe      |
| Stream terminado             | complete         |
| Manejo de estado             | BehaviorSubject  |
| Eventos temporales           | Subject          |

---

# 📘 🟢 REGLA PRÁCTICA MODERNA

---

## 🧠 Si SOLO muestras datos

👉 async pipe

---

## 🧠 Si necesitas lógica

👉 subscribe manual

---

## ✨ TIP

Usa `subscribe()` únicamente cuando necesites ejecutar código, transformar datos o reaccionar a eventos.

---

# 📘 🔵 IDEA MENTAL FINAL

---

## 🧠 Subject

👉 evento en vivo

---

## 🧠 BehaviorSubject

👉 estado actual + emisiones futuras

---

## 🚀 Resumen mental

🧠 Subject = "algo ocurrió"

🧠 BehaviorSubject = "este es el estado actual y además te avisaré cuando cambie"

# 📘 🟣 EJEMPLO REAL EN SERVICIO

---

## 💡 Service

```ts
private users$ = new BehaviorSubject<User[]>([]);

getUsers() {
  return this.users$.asObservable();
}

addUser(user: User) {

  const current = this.users$.value;

  this.users$.next([...current, user]);
}
```

👉 Estado reactivo compartido

---

## 🧠 ¿Qué está pasando aquí?

✔ El estado vive dentro del servicio

✔ `getUsers()` expone solo el Observable

✔ Los componentes pueden suscribirse

✔ `addUser()` actualiza el estado

✔ Todos los subscribers reciben el cambio automáticamente

---

## ✨ TIP

Piensa en el servicio como una pequeña "store" de estado compartido.

---

# ⚠️ COSAS IMPORTANTES

---

## 🧠 Conceptos clave

🧠 Observable = emite datos

🧠 Observer = escucha datos

🧠 Subject NO guarda estado

🧠 BehaviorSubject SI guarda estado

🧠 async pipe es recomendado

🧠 unsubscribe evita memory leaks

---

## 🚀 Regla rápida

👉 Si necesitas estado → BehaviorSubject

👉 Si necesitas eventos → Subject

👉 Si solo muestras datos → async pipe

---

# ✨ RESUMEN

---

## 🧠 RxJS = flujo reactivo de datos

👉 Observable → emite

👉 Observer → escucha

👉 Subject → eventos

👉 BehaviorSubject → estado

---

## 🎯 Idea mental

Subject = "algo ocurrió"

BehaviorSubject = "este es el estado actual"

---

👉 Base de Angular moderno 🚀

---

# 📘 🟦 shareReplay vs BehaviorSubject EN ANGULAR (RxJS)

---

## 🧠 Ambos se usan para manejar datos reactivos, pero tienen propósitos diferentes

👉 shareReplay → cache de datos (HTTP)

👉 BehaviorSubject → manejo de estado

---

# 📘 🟦 shareReplay

---

## 🧠 ¿Qué es?

Es un operador de RxJS.

👉 Se usa con Observables (pipe)

---

## ✅ Características

✔ Trabaja sobre observables fríos

✔ Cachea automáticamente el último valor

✔ No necesitas emitir manualmente

---

## 💡 Ejemplo

```ts
this.users$ = this.http.get('/api/users').pipe(shareReplay(1));
```

👉 Evita múltiples llamadas HTTP

---

## 👍 Ventajas

✔ Simple

✔ Ideal para HTTP

✔ Cache automático

---

## 👎 Desventajas

❌ Puede cachear datos incorrectos

❌ Cachea errores

❌ Menos control

---

## 🎯 Cuándo usarlo

👉 Peticiones HTTP

👉 Datos que cambian poco

👉 Cache de consultas

---

# 📘 🟩 BehaviorSubject

---

## 🧠 ¿Qué es?

Es un tipo de Subject con estado.

👉 Guarda el valor actual

---

## ✅ Características

✔ Siempre tiene un valor

✔ Emite el último valor a nuevos suscriptores

✔ Tú controlas cuándo cambia

---

## 💡 Ejemplo

```ts
private user$ = new BehaviorSubject<User | null>(null);

setUser(user: User) {
  this.user$.next(user);
}
```

---

## 👍 Ventajas

✔ Control total del estado

✔ No cachea errores automáticamente

✔ Ideal para estado global

---

## 👎 Desventajas

❌ Más código

❌ Manejo manual

❌ Fácil de usar mal

---

## 🎯 Cuándo usarlo

👉 Usuario autenticado

👉 Carrito de compras

👉 Tema dark/light

👉 Estado compartido

👉 Datos que cambian constantemente

---

# ⚔️ COMPARACIÓN RÁPIDA

| Característica         | shareReplay | BehaviorSubject |
| ---------------------- | ----------- | --------------- |
| Guarda valor actual    | ✔           | ✔               |
| Requiere valor inicial | ❌          | ✔               |
| next() manual          | ❌          | ✔               |
| Ideal para HTTP        | ✔           | ❌              |
| Ideal para estado      | ❌          | ✔               |
| Cache automático       | ✔           | ❌              |
| Control del estado     | Medio       | Alto            |

---

# ✨ REGLA PRÁCTICA

🧠 Si viene de una API HTTP y quieres cachear:

👉 shareReplay()

---

🧠 Si necesitas guardar y modificar estado:

👉 BehaviorSubject()

---

## 🚀 Resumen final

👉 shareReplay = cache inteligente

👉 BehaviorSubject = estado reactivo

👉 En Angular moderno normalmente se usan ambos, cada uno para problemas distintos

# 📘 🟣 DIFERENCIA CLAVE

---

## 🧠 Concepto principal

👉 shareReplay = cache automático

👉 BehaviorSubject = estado controlado

---

## 🎯 Idea mental

🟦 shareReplay recuerda datos automáticamente

🟩 BehaviorSubject permite administrar y modificar el estado

---

# 📘 🟡 CUÁNDO USAR CADA UNO

---

## 🧠 Regla práctica

👉 🟦 shareReplay → datos de API

👉 🟩 BehaviorSubject → estado de la app

---

## ✨ TIP

Si los datos vienen del backend y solo quieres reutilizarlos, normalmente `shareReplay()` es suficiente.

Si los datos cambian por acciones del usuario, normalmente necesitas `BehaviorSubject`.

---

# 📘 🟠 CASOS REALES

---

## 🧠 Casos típicos con shareReplay

👉 API de usuarios

👉 Catálogo de productos

---

## 🧠 Casos típicos con BehaviorSubject

👉 Estado de login

👉 Carrito de compras

---

## 🚀 Regla rápida

Datos externos → shareReplay

Estado interno → BehaviorSubject

---

# 📘 🔴 TABLA RÁPIDA

---

## 🧠 Comparación

### 👉 shareReplay

• Cache automático

• HTTP

• Menos control

---

### 👉 BehaviorSubject

• Estado

• Manual

• Más control

---

# ⚠️ COSAS IMPORTANTES

---

## 🧠 Puntos clave

🧠 shareReplay puede cachear errores

🧠 BehaviorSubject necesita valor inicial

🧠 No mezclar sin entender propósito

🧠 Ambos son muy usados en Angular

---

## ⚠️ Error común

Usar BehaviorSubject para todo.

Muchas veces una simple petición HTTP con `shareReplay()` es suficiente.

---

# ✨ RESUMEN

---

## 🧠 Dos enfoques

👉 shareReplay → cachear datos

👉 BehaviorSubject → manejar estado

---

## 🎯 Objetivo

Elegir la herramienta correcta según el problema.

---

👉 Elegir bien = mejor arquitectura 🚀

---

# 📘 SUBJECT vs BEHAVIORSUBJECT EN ANGULAR (RxJS)

---

## 🧠 Ambos son tipos de Observables especiales (Subjects)

👉 Permiten emitir valores manualmente

---

# 📘 🟢 ¿QUÉ ES UN SUBJECT?

---

## 🧠 Es un Observable + Observer

👉 Puede:

• emitir valores (`next`)

• ser suscrito

---

## ✅ Características

✔ NO tiene valor inicial

✔ Solo emite a suscriptores actuales

---

## 💡 Ejemplo

```ts
const subject = new Subject<string>();

subject.next('Hola');

subject.subscribe((value) => console.log(value));
```

👉 El suscriptor NO recibe valores anteriores

---

## ⚠️ Importante

Si emites antes de que alguien se suscriba, ese valor se pierde.

---

## 🎯 Idea mental

Subject = radio en vivo 📻

Solo escuchas desde el momento en que te conectas.

---

# 📘 🔵 ¿QUÉ ES UN BEHAVIORSUBJECT?

---

## 🧠 Es un Subject con estado

👉 Siempre tiene un valor actual

---

## ✅ Características

✔ Requiere valor inicial

✔ Emite el último valor a nuevos suscriptores

---

## 💡 Ejemplo

```ts
const subject = new BehaviorSubject<string>('Inicio');

subject.subscribe((value) => console.log(value));

subject.next('Nuevo valor');
```

👉 El suscriptor SIEMPRE recibe el valor actual

---

## ⚠️ Importante

Un nuevo subscriber recibe inmediatamente el último valor almacenado.

---

## 🎯 Idea mental

BehaviorSubject = marcador electrónico 📟

Siempre muestra el estado actual aunque llegues tarde.

# 📘 🟣 DIFERENCIA CLAVE

---

## 🧠 Concepto

👉 Subject → no guarda estado

👉 BehaviorSubject → guarda el último valor

---

## 🎯 Idea mental

🟢 Subject = evento

🟩 BehaviorSubject = estado

---

# 📘 🟡 EJEMPLO COMPARATIVO

---

## 💡 Subject

```ts
const s = new Subject<number>();

s.next(1);

s.subscribe((v) => console.log(v)); // ❌ no imprime 1
```

👉 El valor se pierde porque no había suscriptores cuando se emitió.

---

## 💡 BehaviorSubject

```ts
const bs = new BehaviorSubject<number>(0);

bs.next(1);

bs.subscribe((v) => console.log(v)); // ✔ imprime 1
```

👉 El último valor queda almacenado y se entrega al nuevo suscriptor.

---

## ⚠️ Diferencia importante

Con Subject llegas tarde y pierdes el dato.

Con BehaviorSubject llegas tarde y recibes el último valor.

---

# 📘 🟠 USOS EN ANGULAR

---

## 🧠 Subject

✔ Eventos

✔ Comunicación simple

---

## 🧠 BehaviorSubject

✔ Estado global

✔ Login

✔ Carrito

✔ Datos compartidos

---

## ✨ TIP

Si la información representa el estado actual de la aplicación, normalmente necesitas un `BehaviorSubject`.

---

# 📘 🔴 VENTAJAS Y DESVENTAJAS

---

## 🟢 Subject

### 👍 Ventajas

✔ Simple

✔ Ligero

### 👎 Desventajas

❌ No guarda estado

❌ Pierde valores anteriores

---

## 🟩 BehaviorSubject

### 👍 Ventajas

✔ Tiene estado

✔ Emite último valor

✔ Ideal para apps

### 👎 Desventajas

❌ Requiere valor inicial

❌ Puede ser mal usado

---

# 📘 ⚫ MÉTODOS IMPORTANTES

---

## 🧠 Métodos más usados

👉 `next(valor)` → emitir valor

👉 `subscribe()` → escuchar

👉 `asObservable()` → exponer solo lectura

---

## 💡 Ejemplo rápido

```ts
subject.next(data);

subject.subscribe((value) => {
  console.log(value);
});

return subject.asObservable();
```

---

# 📘 ⚪ BUENA PRÁCTICA (PRO)

---

## 🧠 Encapsular el subject

### 💡 Ejemplo

```ts
private user$ = new BehaviorSubject<User | null>(null);

getUser() {
  return this.user$.asObservable();
}

setUser(user: User) {
  this.user$.next(user);
}
```

👉 Evita acceso directo

---

## ✨ ¿Por qué hacerlo?

✔ Protege el estado

✔ Evita llamadas externas a `next()`

✔ Mantiene el control dentro del servicio

✔ Facilita mantenimiento

---

# 📘 🟤 ¿CUÁNDO USAR CADA UNO?

---

## 🧠 Regla rápida

👉 Subject → eventos

👉 BehaviorSubject → estado

---

## 🎯 Casos reales

| Situación           | Recomendado     |
| ------------------- | --------------- |
| Clicks y eventos    | Subject         |
| Login               | BehaviorSubject |
| Carrito de compras  | BehaviorSubject |
| Comunicación simple | Subject         |
| Estado compartido   | BehaviorSubject |

---

# ⚠️ COSAS IMPORTANTES

---

## 🧠 Puntos clave

🧠 BehaviorSubject guarda valor

🧠 Subject no guarda nada

🧠 Ambos permiten emitir manualmente

🧠 Muy usados en Angular

---

## 🚀 Regla mental

Si necesitas recordar información → BehaviorSubject

Si solo necesitas avisar que ocurrió algo → Subject

---

# ✨ RESUMEN

---

## 🧠 Subject vs BehaviorSubject

👉 Subject → sin estado

👉 BehaviorSubject → con estado

---

## 🎯 Idea final

🟢 Subject = evento temporal

🟩 BehaviorSubject = estado persistente

---

👉 Elegir bien = mejor arquitectura 🚀

```

```
