# 🔄 6. PARADIGMA REACTIVO

La programación **reactiva** se centra en trabajar con **datos y eventos que cambian a lo largo del tiempo**.

En lugar de pensar solamente:

```text
Input → Function → Output
```

pensamos:

```text
Data Stream
     ↓
Observable
     ↓
Operators
     ↓
Subscriber
```

Un stream puede verse como:

```text
────●────●──────●────●────→
    1    2      3    4
```

Los valores llegan con el tiempo.

Ejemplos:

```text
User clicks
HTTP responses
WebSocket messages
Keyboard events
Timers
```

---

## 🧩 RxJS

Esto es especialmente importante para Angular.

Por ejemplo:

```ts
users$
  .pipe(
    map(users =>
      users.filter(user => user.active)
    )
  )
  .subscribe(users => {
    console.log(users);
  });
```

Aquí tenemos:

```text
Observable
    ↓
pipe()
    ↓
Operators
    ↓
subscribe()
```

### 🧠 Conceptos

Estudia:

* Observable
* Observer
* Subscription
* Stream
* Operators
* `map`
* `filter`
* `switchMap`
* `mergeMap`
* `concatMap`
* `debounceTime`
* `catchError`
* `combineLatest`

### 📌 Idea principal

> **Reactivo = trabajar con datos/eventos que ocurren a lo largo del tiempo y reaccionar ante ellos.**

---