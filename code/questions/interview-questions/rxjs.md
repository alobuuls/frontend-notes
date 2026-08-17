# 🔄 11. RXJS

> 🧠 **RxJS (Reactive Extensions for JavaScript)** es especialmente importante en Angular porque Angular utiliza RxJS ampliamente para trabajar con **eventos, streams de datos, HTTP y operaciones asíncronas**.

La idea principal que debes entender es:

```text
Observable
    ↓
emite valores
    ↓
Operators
    ↓
transforman / filtran / combinan
    ↓
subscribe()
    ↓
recibimos los resultados
```

---

## 🔄 ÍNDICE

## 📚 FUNDAMENTOS DE RXJS

- [1. ❓ ¿Qué es RxJS?](#1--qué-es-rxjs)
- [2. ❓ ¿Qué es un Observable?](#2--qué-es-un-observable)
- [3. ❓ ¿Qué diferencia hay entre Observable y Promise?](#3--qué-diferencia-hay-entre-observable-y-promise)
- [4. ❓ ¿Qué es un Observer?](#4--qué-es-un-observer)
- [5. ❓ ¿Qué es un Subscriber?](#5--qué-es-un-subscriber)
- [6. ❓ ¿Qué hace `subscribe()`?](#6--qué-hace-subscribe)
- [7. ❓ ¿Qué es un Operator?](#7--qué-es-un-operator)

---

## ⚙️ OPERATORS

- [8. ❓ ¿Qué diferencia hay entre `map`, `filter`, `tap` y `switchMap`?](#8--qué-diferencia-hay-entre-map-filter-tap-y-switchmap)
- [9. ❓ ¿Qué hace `switchMap()`?](#9--qué-hace-switchmap)
- [10. ❓ ¿Qué hace `mergeMap()`?](#10--qué-hace-mergemap)
- [11. ❓ ¿Qué hace `concatMap()`?](#11--qué-hace-concatmap)
- [12. ❓ ¿Qué hace `exhaustMap()`?](#12--qué-hace-exhaustmap)
- [13. ❓ ¿Diferencia entre `switchMap` y `mergeMap`?](#13--diferencia-entre-switchmap-y-mergemap)
- [16. ❓ ¿Qué es `pipe()`?](#16--qué-es-pipe)
- [17. ❓ ¿Qué es `catchError()`?](#17--qué-es-catcherror)
- [18. ❓ ¿Qué hace `finalize()`?](#18--qué-hace-finalize)

---

## 📢 SUBJECTS

- [14. ❓ ¿Qué es `Subject`?](#14--qué-es-subject)
- [15. ❓ ¿Qué diferencia hay entre `Subject`, `BehaviorSubject` y `ReplaySubject`?](#15--qué-diferencia-hay-entre-subject-behaviorsubject-y-replaysubject)

---

## 🧹 SUBSCRIPTIONS Y LIFECYCLE

- [19. ❓ ¿Qué es `takeUntil()`?](#19--qué-es-takeuntil)
- [20. ❓ ¿Qué es `takeUntilDestroyed()`?](#20--qué-es-takeuntildestroyed)
- [23. ❓ ¿Qué es un Memory Leak en Angular/RxJS?](#23--qué-es-un-memory-leak-en-angularrxjs)

---

## 🔥 HOT & COLD OBSERVABLES

- [21. ❓ ¿Qué es un Hot Observable?](#21--qué-es-un-hot-observable)
- [22. ❓ ¿Qué es un Cold Observable?](#22--qué-es-un-cold-observable)

---

## 🧠 OPERADORES `MAP` QUE DEBES DOMINAR

- [`switchMap` — Solo el último](#-switchmap)
- [`mergeMap` — Todos en paralelo](#-mergemap)
- [`concatMap` — Todos en orden](#-concatmap)
- [`exhaustMap` — Ignora mientras está ocupado](#-exhaustmap)

---

## 🎯 RESUMEN PARA ENTREVISTA

- [🧠 Resumen RxJS para entrevista](#-resumen-rxjs-para-entrevista)
- [⭐ Las más importantes para una entrevista Angular](#-las-más-importantes-para-una-entrevista-angular)
- [🔥 Nivel obligatorio](#-nivel-obligatorio)

---

# 1. ❓ ¿QUÉ ES RXJS?

> 💡 **RxJS es una librería para trabajar con programación reactiva utilizando Observables.**

Permite trabajar con datos que pueden llegar:

* 🔄 A lo largo del tiempo
* 🌐 Desde peticiones HTTP
* 🖱️ Desde eventos del usuario
* ⏱️ Desde timers
* 📡 Desde WebSockets
* 📦 Desde otros streams

### 💻 Ejemplo

```ts
import { Observable } from 'rxjs';

const numbers$ = new Observable<number>(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
});
```

Podemos transformar esos datos:

```ts
numbers$
  .pipe(
    map(value => value * 2)
  )
  .subscribe(value => {
    console.log(value);
  });
```

Resultado:

```text
2
4
6
```

> 🎯 **Entrevista**
>
> RxJS es una librería de programación reactiva basada en Observables que permite trabajar con streams de datos asíncronos y transformarlos, filtrarlos y combinarlos mediante operadores.

---

# 2. ❓ ¿QUÉ ES UN OBSERVABLE?

> 🔄 Un **Observable representa un stream de datos que puede emitir cero, uno o múltiples valores a lo largo del tiempo**.

Por ejemplo:

```ts
const observable$ = new Observable<number>(subscriber => {

  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);

  subscriber.complete();

});
```

El Observable puede emitir:

```text
1 → 2 → 3 → complete
```

También puede emitir valores con el paso del tiempo:

```text
0s → 1
1s → 2
2s → 3
3s → 4
...
```

> 🎯 **Entrevista**
>
> Un Observable representa una secuencia de valores que pueden emitirse de forma síncrona o asíncrona a lo largo del tiempo y a la que podemos suscribirnos.

---

# 3. ❓ ¿QUÉ DIFERENCIA HAY ENTRE OBSERVABLE Y PROMISE?

> 🔥 Esta es **muy importante**.

## 🔵 Promise

Una Promise normalmente:

* Resuelve **un solo valor**.
* Empieza su ejecución inmediatamente.
* No utiliza operators de RxJS.
* Puede resolverse o rechazarse.

```ts
const promise = fetch('/api/users');
```

Conceptualmente:

```text
Promise
   ↓
valor único
```

---

## 🟢 Observable

Un Observable:

* Puede emitir **múltiples valores**.
* Es generalmente lazy.
* Puede cancelarse mediante unsubscribe.
* Puede utilizar operadores.
* Puede representar streams continuos.

```ts
observable$
  .pipe(
    map(...),
    filter(...),
    switchMap(...)
  )
  .subscribe(...);
```

Conceptualmente:

```text
Observable
   ↓
1 → 2 → 3 → 4 → ...
```

### 📊 Comparación

| Promise                         | Observable                       |
| ------------------------------- | -------------------------------- |
| Un valor                        | 0, 1 o múltiples valores         |
| Eager                           | Generalmente lazy                |
| `.then()`                       | `.subscribe()`                   |
| Sin RxJS operators              | Muchos operators                 |
| No se cancela de la misma forma | Puede cancelarse con unsubscribe |

> ⚠️ **Matiz**
>
> Una Promise puede tener una sola respuesta, pero un Observable puede emitir múltiples valores.
>
> Por ejemplo:
>
> ```text
> HTTP request → normalmente Promise / Observable de un resultado
> WebSocket → Observable de muchos resultados
> ```

> 🎯 **Entrevista**
>
> Una Promise representa normalmente un único resultado futuro, mientras que un Observable puede emitir múltiples valores a lo largo del tiempo. Además, los Observables son lazy por defecto, permiten composición mediante operadores y pueden cancelarse mediante unsubscribe.

---

# 4. ❓ ¿QUÉ ES UN OBSERVER?

> 👀 Un **Observer es un objeto que define cómo reaccionar ante las notificaciones de un Observable**.

Normalmente puede implementar:

```ts
const observer = {
  next: (value) => {
    console.log(value);
  },

  error: (error) => {
    console.error(error);
  },

  complete: () => {
    console.log('Finished');
  }
};
```

Tiene tres callbacks principales:

```text
next()
error()
complete()
```

Por ejemplo:

```ts
observable$.subscribe(observer);
```

> 🎯 **Entrevista**
>
> Un Observer define qué hacer cuando un Observable emite un valor, produce un error o completa.

---

# 5. ❓ ¿QUÉ ES UN SUBSCRIBER?

> 📡 Un **Subscriber es la entidad que se suscribe a un Observable y recibe sus emisiones**.

Cuando hacemos:

```ts
observable$.subscribe(...)
```

RxJS crea y gestiona internamente una suscripción asociada a ese Subscriber.

Podemos pensar:

```text
Observable
    │
    │ emite
    ▼
Subscriber
```

El Subscriber recibe:

```ts
next()
error()
complete()
```

### ⚠️ Diferencia Observer vs Subscriber

> 🎯 **Entrevista**
>
> Un Observer describe los callbacks que queremos ejecutar, mientras que el Subscriber es la implementación interna que RxJS utiliza para gestionar la suscripción y recibir esas notificaciones.

Para uso cotidiano, lo más importante es entender:

```ts
observable$.subscribe(...)
```

---

# 6. ❓ ¿QUÉ HACE `SUBSCRIBE()`?

> 🔔 `subscribe()` permite **suscribirse a un Observable para recibir sus emisiones**.

```ts
observable$.subscribe(value => {
  console.log(value);
});
```

También:

```ts
observable$.subscribe({
  next: value => console.log(value),
  error: error => console.error(error),
  complete: () => console.log('Complete')
});
```

Podemos recibir:

```text
next
error
complete
```

Además, `subscribe()` devuelve un `Subscription`:

```ts
const subscription = observable$.subscribe(...);

subscription.unsubscribe();
```

Esto puede ser importante para evitar subscriptions activas cuando ya no las necesitamos.

> 🎯 **Entrevista**
>
> `subscribe()` inicia la suscripción a un Observable y permite recibir sus valores, errores y finalización. Devuelve una Subscription que puede utilizarse para cancelar la suscripción.

# 7. ❓ ¿QUÉ ES UN OPERATOR?

> ⚙️ Un **operator** es una función que permite trabajar con Observables para:

* Transformar valores
* Filtrar valores
* Combinar streams
* Manejar errores
* Controlar concurrencia
* Crear nuevos Observables

### 💻 Ejemplo

```ts
numbers$.pipe(
  map(value => value * 2),
  filter(value => value > 5)
);
```

### 🧩 Algunos operadores muy importantes

| Operators              |
| ---------------------- |
| `map`                  |
| `filter`               |
| `tap`                  |
| `switchMap`            |
| `mergeMap`             |
| `concatMap`            |
| `exhaustMap`           |
| `catchError`           |
| `finalize`             |
| `takeUntil`            |
| `debounceTime`         |
| `distinctUntilChanged` |
| `combineLatest`        |
| `forkJoin`             |

> 🎯 **Entrevista**
>
> Un operator es una función que permite transformar, filtrar, combinar o controlar el comportamiento de un Observable.

---

# 8. ❓ ¿QUÉ DIFERENCIA HAY ENTRE `MAP`, `FILTER`, `TAP` Y `SWITCHMAP`?

> 🔥 Esta comparación es **muy importante**.

---

## 🔹 `map()`

> 🔄 **Transforma cada valor.**

```ts
of(1, 2, 3).pipe(
  map(value => value * 2)
);
```

Resultado:

```text
1 → 2
2 → 4
3 → 6
```

### 🧠 Idea

```text
valor → transformación → nuevo valor
```

---

## 🔹 `filter()`

> 🔎 **Deja pasar solamente los valores que cumplen una condición.**

```ts
of(1, 2, 3, 4).pipe(
  filter(value => value % 2 === 0)
);
```

Resultado:

```text
2
4
```

### 🧠 Idea

```text
valor → condición → pasa / se elimina
```

---

## 🔹 `tap()`

> 👀 Permite ejecutar un efecto secundario **sin modificar el valor que pasa por el stream**.

```ts
users$.pipe(
  tap(users => {
    console.log(users);
  })
);
```

El valor continúa siendo el mismo.

Se utiliza para:

* Logs
* Debugging
* Actualizar variables
* Efectos secundarios

> 🧠 **Importante**
>
> `tap()` **no transforma el valor**.

---

## 🔹 `switchMap()`

> 🔀 Recibe un valor y lo transforma en **otro Observable**, cambiando a la nueva emisión y cancelando la anterior cuando llega una nueva.

```ts
searchTerm$.pipe(
  switchMap(term => this.searchUsers(term))
);
```

Si tenemos:

```text
search: A
search: An
search: Alo
```

y cada búsqueda genera un HTTP request:

```text
A    ────────X
An   ────────X
Alo  ────────────────✓
```

Las anteriores se cancelan y nos quedamos con la más reciente.

---

# 9. ❓ ¿QUÉ HACE `SWITCHMAP()`?

> 🔀 `switchMap()` sirve para **cambiar a un nuevo Observable cada vez que llega un valor y cancelar/desuscribirse del Observable anterior**.

Es muy útil para:

### 🔎 Búsquedas

```ts
searchTerm$.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap(term => this.searchUsers(term))
);
```

### 🧭 Parámetros de ruta

```ts
route.params.pipe(
  switchMap(params =>
    this.usersService.getUser(params['id'])
  )
);
```

### 🧠 Regla mental

> **Llega algo nuevo → abandona lo anterior → trabaja con lo nuevo.**

> 🎯 **Entrevista**
>
> `switchMap` proyecta cada valor a un nuevo Observable y cancela la suscripción al Observable anterior cuando llega un nuevo valor. Es muy útil para búsquedas o peticiones donde solo nos interesa el resultado más reciente.

---

# 10. ❓ ¿QUÉ HACE `MERGEMAP()`?

> 🔀 `mergeMap()` también transforma cada valor en un Observable, pero **no cancela los anteriores**.

Los Observables internos pueden ejecutarse concurrentemente.

```ts
source$.pipe(
  mergeMap(id => this.getUser(id))
);
```

Si llegan:

```text
1
2
3
```

podemos tener:

```text
Request 1 ─────────✓
Request 2 ─────✓
Request 3 ───────────✓
```

Los tres pueden estar activos simultáneamente.

### 🧠 Regla mental

> **Llega algo nuevo → mantén lo anterior → trabaja en paralelo.**

> 🎯 **Entrevista**
>
> `mergeMap` proyecta cada valor a un Observable y permite que varias suscripciones internas estén activas simultáneamente, por lo que no cancela las anteriores.

---

# 11. ❓ ¿QUÉ HACE `CONCATMAP()`?

> 📚 `concatMap()` transforma cada valor en un Observable, pero ejecuta los Observables internos **uno después del otro, respetando el orden**.

```ts
source$.pipe(
  concatMap(value => saveData(value))
);
```

Si llegan:

```text
1
2
3
```

ejecuta:

```text
Request 1 ─────✓
                 Request 2 ─────✓
                                Request 3 ─────✓
```

El segundo espera al primero.

### 🧠 Regla mental

> **Uno termina → empieza el siguiente.**

Es útil cuando el orden importa.

Por ejemplo:

```text
guardar paso 1
      ↓
guardar paso 2
      ↓
guardar paso 3
```

> 🎯 **Entrevista**
>
> `concatMap` ejecuta los Observables internos secuencialmente, esperando a que termine uno antes de iniciar el siguiente y preservando el orden.

---

# 12. ❓ ¿QUÉ HACE `EXHAUSTMAP()`?

> 🚫 `exhaustMap()` **ignora nuevos valores mientras el Observable interno actual siga activo**.

Ejemplo típico:

```ts
click$.pipe(
  exhaustMap(() => this.save())
);
```

Si el usuario hace:

```text
CLICK
CLICK
CLICK
CLICK
```

mientras la primera petición está ejecutándose:

```text
CLICK 1 → Request ─────────✓
CLICK 2 → ignorado
CLICK 3 → ignorado
CLICK 4 → ignorado
```

Cuando termina la primera, un nuevo click sí podrá iniciar otra operación.

### 🧠 Regla mental

> **Estoy ocupado → ignoro lo nuevo.**

Es especialmente útil para:

* Evitar múltiples submits
* Evitar múltiples clicks
* Operaciones que no queremos duplicar

> 🎯 **Entrevista**
>
> `exhaustMap` ignora nuevas emisiones mientras el Observable interno actual esté activo. Es útil, por ejemplo, para evitar múltiples submits mientras una petición está en progreso.

# 13. ❓ ¿DIFERENCIA ENTRE `SWITCHMAP` Y `MERGEMAP`?

> 🔥 Esta es una pregunta **muy típica**.

### 🔵 `switchMap`

Cancela la operación anterior cuando llega una nueva.

```text id="q4u2vw"
A ─────────X
B ─────────X
C ─────────────✓
```

### 🟢 `mergeMap`

Mantiene todas las operaciones.

```text id="a6z2u3"
A ─────────────✓
B ───────✓
C ───────────✓
```

### 🧠 Regla fácil

```text id="f4l7ds"
switchMap → SOLO EL ÚLTIMO
mergeMap  → TODOS EN PARALELO
```

### 💻 Ejemplo

Para búsqueda:

```ts id="h5x0p7"
search$.pipe(
  switchMap(term => searchUsers(term))
);
```

Queremos:

> Solo el resultado de la búsqueda más reciente.

Para operaciones independientes:

```ts id="q6gk2f"
users$.pipe(
  mergeMap(user => sendNotification(user))
);
```

Queremos:

> Procesar múltiples usuarios simultáneamente.

> 🎯 **Entrevista**
>
> `switchMap` cancela el Observable anterior cuando llega uno nuevo, mientras que `mergeMap` mantiene las operaciones anteriores activas y permite ejecutarlas concurrentemente.

---

# 14. ❓ ¿QUÉ ES `SUBJECT`?

> 🔄 Un **Subject es un Observable y un Observer al mismo tiempo**.

Esto significa que podemos:

### 👀 Observarlo

```ts id="2e4b9q"
subject.subscribe(value => {
  console.log(value);
});
```

### 📤 Emitir valores

```ts id="v7oz8p"
subject.next('Hello');
```

Por ejemplo:

```ts id="a9d8x3"
const subject = new Subject<number>();

subject.subscribe(value => {
  console.log('A:', value);
});

subject.subscribe(value => {
  console.log('B:', value);
});

subject.next(10);
```

Ambos subscribers reciben:

```text id="4pk5jy"
A: 10
B: 10
```

> 🎯 **Entrevista**
>
> Un Subject es un Observable multicasting al que también podemos enviar valores mediante `next()`. Permite que múltiples subscribers reciban las mismas emisiones.

---

# 15. ❓ ¿QUÉ DIFERENCIA HAY ENTRE `SUBJECT`, `BEHAVIORSUBJECT` Y `REPLAYSUBJECT`?

> 🔥 **Muy importante.**

---

## 🔵 `Subject`

No tiene valor inicial y **no conserva el último valor**.

```ts id="n7ctt5"
const subject = new Subject<number>();

subject.next(10);

subject.subscribe(value => {
  console.log(value);
});
```

El subscriber nuevo **no recibe `10`**.

---

## 🟢 `BehaviorSubject`

Necesita un valor inicial y mantiene el **último valor emitido**.

```ts id="7z7e5x"
const subject = new BehaviorSubject<number>(0);

subject.next(10);

subject.subscribe(value => {
  console.log(value);
});
```

El subscriber recibe:

```text id="ndz9ye"
10
```

Esto es muy útil para representar un estado actual.

Por ejemplo:

```ts id="s6ah5w"
const user$ = new BehaviorSubject<User | null>(null);
```

---

## 🟣 `ReplaySubject`

Puede almacenar y reproducir **varios valores anteriores**.

```ts id="n7o7z5"
const subject = new ReplaySubject<number>(2);

subject.next(1);
subject.next(2);
subject.next(3);

subject.subscribe(value => {
  console.log(value);
});
```

El subscriber recibe los últimos dos:

```text id="i1x9g0"
2
3
```

### 📊 Resumen

| Tipo              | Valor inicial | Guarda valores |
| ----------------- | ------------- | -------------- |
| `Subject`         | ❌             | ❌              |
| `BehaviorSubject` | ✅             | Último         |
| `ReplaySubject`   | ❌             | Varios         |

### 🧠 Regla mental

```text id="4f1l8r"
Subject
→ no recuerda

BehaviorSubject
→ recuerda 1

ReplaySubject
→ recuerda varios
```

---

# 16. ❓ ¿QUÉ ES `PIPE()`?

> 🔗 `pipe()` permite **encadenar operadores de RxJS** sobre un Observable.

Por ejemplo:

```ts id="d3jz4h"
users$.pipe(
  filter(user => user.active),
  map(user => user.name),
  tap(name => console.log(name))
);
```

El flujo sería:

```text id="0v6z4v"
users$
   ↓
filter()
   ↓
map()
   ↓
tap()
   ↓
Observable
```

> 🎯 **Entrevista**
>
> `pipe()` permite aplicar y encadenar operadores sobre un Observable para transformarlo, filtrarlo, combinarlo o ejecutar lógica adicional.

---

# 17. ❓ ¿QUÉ ES `CATCHERROR()`?

> 🛡️ `catchError()` permite **interceptar errores de un Observable y manejar o reemplazar ese error**.

### 💻 Ejemplo

```ts id="42p6dc"
this.usersService.getUsers().pipe(
  catchError(error => {
    console.error(error);

    return of([]);
  })
);
```

Si la petición falla:

```text id="i8jz9f"
HTTP
 ↓
ERROR
 ↓
catchError()
 ↓
of([])
```

En lugar de que el stream termine con error, devolvemos otro Observable.

### ⚠️ Importante

`catchError()` debe devolver un Observable:

```ts id="1w9r3m"
catchError(error => {
  return of([]);
});
```

También podemos volver a lanzar el error:

```ts id="p9q5tx"
catchError(error => {
  return throwError(() => error);
});
```

> 🎯 **Entrevista**
>
> `catchError` permite interceptar errores de un Observable y reemplazar el stream por otro Observable o volver a lanzar el error.

# 🧹 18. ❓ ¿QUÉ HACE `FINALIZE()`?

`finalize()` ejecuta una función cuando el Observable **termina, falla o es desuscrito**.

```ts
this.usersService.getUsers().pipe(
  finalize(() => {
    this.loading = false;
  })
);
```

### 💡 ¿Para qué sirve?

| Uso                 | Ejemplo                    |
| ------------------- | -------------------------- |
| ⏳ Ocultar loaders   | Finalizar estados de carga |
| 🧹 Liberar recursos | Ejecutar cleanup           |
| 🔄 Cleanup          | Limpiar estados            |
| 🎨 UI               | Finalizar estados de UI    |

```text
Observable
   │
   ├── success ──┐
   ├── error ────┤
   └── unsubscribe
                ↓
            finalize()
```

> 🎯 **Entrevista:** `finalize` ejecuta una función cuando el Observable termina, produce un error o la suscripción se cancela. Es muy útil para tareas de limpieza o para finalizar estados de carga.

---

# 🧹 19. ❓ ¿QUÉ ES `TAKEUNTIL()`?

`takeUntil()` permite mantener una suscripción activa **hasta que otro Observable emite un valor**.

```ts
destroy$ = new Subject<void>();

ngOnInit(): void {

  this.users$
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe();
}

ngOnDestroy(): void {

  this.destroy$.next();
  this.destroy$.complete();

}
```

### 🔄 Flujo

```text
users$
  │
  │ subscribe
  ▼
takeUntil(destroy$)
  │
  │
destroy$.next()
  ↓
subscription termina
```

> 💡 Esto históricamente se utilizaba mucho para evitar memory leaks.

> 🎯 **Entrevista:** `takeUntil` mantiene una suscripción hasta que otro Observable emite un valor. Se utiliza tradicionalmente para cancelar subscriptions cuando se destruye un componente.

---

# 🧹 20. ❓ ¿QUÉ ES `TAKEUNTILDESTROYED()`?

`takeUntilDestroyed()` es una utilidad moderna de Angular que permite **completar automáticamente una suscripción cuando se destruye el contexto de Angular asociado**.

```ts
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

this.users$
  .pipe(
    takeUntilDestroyed()
  )
  .subscribe();
```

Ya no necesitamos crear manualmente:

```ts
destroy$ = new Subject<void>();
```

ni:

```ts
ngOnDestroy() {
  this.destroy$.next();
  this.destroy$.complete();
}
```

### 🧠 Comparación

| `takeUntil()`   | `takeUntilDestroyed()`              |
| --------------- | ----------------------------------- |
| Gestión manual  | Gestión integrada con Angular       |
| `destroy$`      | Ciclo de vida de Angular            |
| `ngOnDestroy()` | Destrucción automática del contexto |

> 🎯 **Entrevista:** `takeUntilDestroyed` es una utilidad de Angular que integra el ciclo de vida de Angular con RxJS para completar automáticamente la suscripción cuando se destruye el contexto.

---

# 🔥 21. ❓ ¿QUÉ ES UN HOT OBSERVABLE?

Un **Hot Observable** produce valores independientemente de si existen subscribers.

La fuente existe por sí misma y los subscribers se conectan a ella.

```text
           Source
             │
      ┌──────┴──────┐
      ▼             ▼
 Subscriber A   Subscriber B
```

Los subscribers reciben los valores que se emiten mientras están conectados.

### 📌 Ejemplos

* Eventos del DOM
* Subjects
* WebSockets
* Streams compartidos

---

# ❄️ 22. ❓ ¿QUÉ ES UN COLD OBSERVABLE?

Un **Cold Observable** comienza su ejecución cuando alguien se suscribe.

Cada subscriber normalmente obtiene su propia ejecución independiente.

```text
Subscriber A
     ↓
 Observable → ejecución A


Subscriber B
     ↓
 Observable → ejecución B
```

Por ejemplo:

```ts
const observable$ = new Observable(subscriber => {
  console.log('Executed');
});
```

Cada subscription puede ejecutar nuevamente el código:

```ts
observable$.subscribe();
observable$.subscribe();
```

Puede producir:

```text
Executed
Executed
```

### 🧠 Regla fácil

| Tipo    | Comportamiento                                         |
| ------- | ------------------------------------------------------ |
| ❄️ Cold | Cada subscriber puede iniciar su propia ejecución      |
| 🔥 Hot  | La fuente existe independientemente de los subscribers |

---

# 🧠 23. ❓ ¿QUÉ ES UN MEMORY LEAK EN ANGULAR/RXJS?

Un **memory leak** ocurre cuando nuestra aplicación mantiene referencias o recursos que ya no deberían existir, impidiendo que sean liberados correctamente.

Un caso clásico es dejar una subscription activa después de destruir un componente.

```ts
ngOnInit() {
  this.service.data$.subscribe(data => {
    this.data = data;
  });
}
```

Si ese Observable es de larga duración y el componente se destruye, la subscription podría continuar activa si no se gestiona correctamente.

### ⚠️ Puede provocar

* 📈 Consumo innecesario de memoria
* 🔄 Ejecuciones innecesarias
* 🐌 Degradación del rendimiento
* 🐛 Comportamientos inesperados

### 🛠️ Soluciones

**`async` pipe**

```html
<div *ngFor="let user of users$ | async">
  {{ user.name }}
</div>
```

Angular gestiona la subscription.

**`takeUntilDestroyed()`**

```ts
this.users$
  .pipe(
    takeUntilDestroyed()
  )
  .subscribe();
```

**`takeUntil()`**

```ts
this.users$
  .pipe(
    takeUntil(this.destroy$)
  )
  .subscribe();
```

**`unsubscribe()` manual**

```ts
const subscription = observable$.subscribe();

subscription.unsubscribe();
```

Aunque en Angular moderno se suelen preferir mecanismos declarativos cuando son apropiados.

> 🎯 **Entrevista:** Un memory leak ocurre cuando una aplicación mantiene subscriptions, listeners, timers u otras referencias que ya no necesita. En Angular/RxJS es importante gestionar correctamente el ciclo de vida de las subscriptions utilizando herramientas como `async`, `takeUntilDestroyed` o `takeUntil`.

---

# 🧠 LOS 4 `MAP` QUE DEBES DOMINAR

| Operador     | Comportamiento                         |
| ------------ | -------------------------------------- |
| `switchMap`  | 🔄 Cancela el anterior                 |
| `mergeMap`   | ⚡ Ejecuta en paralelo                  |
| `concatMap`  | 🚂 Ejecuta en orden                    |
| `exhaustMap` | 🚫 Ignora nuevos mientras está ocupado |

### 🎯 Truco mental

```text
🔄 switchMap
"Quiero SOLO lo último"

⚡ mergeMap
"Quiero TODOS EN PARALELO"

🚂 concatMap
"Quiero TODOS EN ORDEN"

🚫 exhaustMap
"Estoy ocupado, NO ME MANDES OTRO"
```

---

# 🧠 RESUMEN RXJS PARA ENTREVISTA

```text
RXJS
│
├── 📡 Observable
│   └── Stream de valores
│
├── 👀 Observer
│   └── next / error / complete
│
├── 📥 Subscriber
│   └── Recibe emisiones
│
├── ▶️ subscribe()
│   └── Se suscribe al Observable
│
├── 🔧 Operators
│   ├── map
│   ├── filter
│   ├── tap
│   ├── switchMap
│   ├── mergeMap
│   ├── concatMap
│   ├── exhaustMap
│   ├── catchError
│   └── finalize
│
├── 🔗 pipe()
│   └── Encadena operadores
│
├── 📢 Subject
│   ├── Subject
│   ├── BehaviorSubject
│   └── ReplaySubject
│
└── 🧹 Lifecycle
    ├── takeUntil()
    └── takeUntilDestroyed()
```

# ⭐ LAS MÁS IMPORTANTES PARA UNA ENTREVISTA ANGULAR

### 🔥 Nivel obligatorio

|  # | Tema                       |
| -: | -------------------------- |
|  1 | ¿Qué es RxJS?              |
|  2 | ¿Qué es un Observable?     |
|  3 | Observable vs Promise      |
|  4 | `subscribe()`              |
|  5 | `pipe()`                   |
|  6 | `map` vs `filter` vs `tap` |
|  7 | `switchMap`                |
|  8 | `switchMap` vs `mergeMap`  |
|  9 | `concatMap`                |
| 10 | `exhaustMap`               |
| 11 | Subject vs BehaviorSubject |
| 12 | `catchError`               |
| 13 | `takeUntil`                |
| 14 | `takeUntilDestroyed`       |
| 15 | Hot vs Cold Observable     |
| 16 | Memory leaks               |

> ⭐ **Especialmente debes ser capaz de explicar `switchMap`, `mergeMap`, `concatMap` y `exhaustMap` sin mirar apuntes**, porque es una de las partes de RxJS que más fácilmente se puede convertir en una pregunta práctica de entrevista.
