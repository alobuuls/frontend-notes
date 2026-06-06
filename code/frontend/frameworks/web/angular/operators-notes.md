# 📘 RXJS EN ANGULAR (OBSERVABLE, SUBJECT & BEHAVIORSUBJECT)

---

## 🧠 RxJS es una librería de programación reactiva usada en Angular

👉 Permite trabajar con:

• datos asíncronos  
• eventos  
• streams de datos  
• peticiones HTTP

---

# 📘 🟢 ¿QUÉ ES UN OBSERVABLE?

## 🧠 Observable = fuente de datos que emite valores en el tiempo

👉 Puede emitir:

• valores  
• eventos  
• respuestas HTTP  
• cambios en el tiempo

---

## ✨ TIP

🧠 Angular usa Observables en HttpClient, forms y routing

---

# 📘 🔵 ¿QUÉ ES UN OBSERVER?

## 🧠 Observer = quien escucha los datos emitidos

👉 Se conecta con subscribe()

---

## 💡 Ejemplo

```ts
observable.subscribe((value) => {
  console.log(value);
});
```

👉 subscribe() = escuchar

---

# 📘 🟣 FLUJO MENTAL RXJS

🧠 Idea simple:

👉 next() → emite datos  
👉 subscribe() → recibe datos

---

# 📘 🟡 ¿QUÉ ES UN SUBJECT?

## 🧠 Subject = Observable que emite valores manualmente

✔ Emite valores  
✔ No guarda estado  
✔ No tiene valor inicial  
✔ Nuevos subscribers NO reciben valores anteriores

---

## 💡 Ejemplo

```ts
const subject = new Subject<string>();

subject.next('hola');

subject.subscribe((value) => {
  console.log(value);
});
```

👉 Si te suscribes después del next, no recibes el valor

---

# 📘 🟠 USOS TÍPICOS DE SUBJECT

✔ logout  
✔ refresh  
✔ eventos  
✔ clicks  
✔ notificaciones

👉 Ideal para eventos temporales

---

# 📘 🔴 ¿QUÉ ES UN BEHAVIORSUBJECT?

## 🧠 BehaviorSubject = Subject con estado

✔ Guarda estado  
✔ Tiene valor inicial  
✔ Nuevos subscribers reciben el último valor automáticamente  
✔ Tiene .value

---

## 💡 Ejemplo

```ts
const users$ = new BehaviorSubject<string[]>([]);

users$.next(['Alo']);

users$.subscribe((users) => {
  console.log(users);
});
```

👉 El subscriber recibe inmediatamente el último valor

---

# 📘 ⚫ USOS TÍPICOS DE BEHAVIORSUBJECT

✔ usuario actual  
✔ carrito  
✔ auth  
✔ tema dark/light  
✔ estado global

👉 Ideal para manejo de estado

---

# 📘 ⚪ DIFERENCIA PRINCIPAL

🧠 Subject → solo emite  
🧠 BehaviorSubject → emite + recuerda último valor

---

# 📘 🟤 next()

🧠 Emite un nuevo valor

```ts
subject.next(data);
```

👉 Hace que los subscribers reciban el dato

---

# 📘 🟢 subscribe()

🧠 Escucha valores emitidos

```ts
subject.subscribe((value) => {
  console.log(value);
});
```

👉 Ejecuta callback en cada emisión

---

# 📘 🔵 .value (SOLO BehaviorSubject)

🧠 Obtiene el valor actual

```ts
this.users$.value;
```

👉 Permite leer el estado actual

---

# 📘 🟣 asObservable()

🧠 Protege el Subject

✔ Permite subscribe()  
❌ Bloquea next()

```ts
return this.users$.asObservable();
```

👉 Buena práctica en servicios

---

# 📘 🟡 unsubscribe()

🧠 Deja de escuchar el observable

❌ No mata el observable  
✔ Solo elimina esa suscripción

```ts
const sub = observable.subscribe();

sub.unsubscribe();
```

👉 Evita memory leaks

# 📘 ⚪ debounceTime → control de eventos

🧠 Retrasa emisiones

💡 Ejemplo

```ts
this.searchInput.valueChanges.pipe(debounceTime(500)).subscribe((value) => console.log(value));
```

✔ Ideal para inputs  
✔ Reduce llamadas a API

---

# 📘 🟤 COMPARACIÓN CLAVE

🧠 switchMap vs mergeMap vs concatMap

---

🔄 switchMap

👉 Cancela anteriores  
👉 Solo importa el último

✔ Uso: buscadores

---

⚡ mergeMap

👉 Paralelo  
👉 No cancela

✔ Uso: múltiples requests

---

📦 concatMap

👉 Secuencial  
👉 Mantiene orden

✔ Uso: procesos en orden

---

# 📘 🟢 RESUMEN RÁPIDO

👉 map → transformar  
👉 filter → filtrar  
👉 switchMap → cancelar  
👉 mergeMap → paralelo  
👉 concatMap → secuencial  
👉 tap → debug  
👉 debounceTime → control eventos

---

# 📘 🟡 BENEFICIOS

✔ Optimiza HTTP  
✔ Evita bugs de concurrencia  
✔ Mejora rendimiento  
✔ Controla flujos complejos

---

# ⚠️ COSAS IMPORTANTES

🧠 Siempre usar pipe()  
🧠 No abusar de subscribe()  
🧠 Elegir bien el operador  
🧠 RxJS = clave en Angular

---

# ✨ RESUMEN FINAL

🧠 RxJS = control total de datos async

👉 Permite transformar, filtrar y controlar flujos  
👉 Hace Angular más potente y reactivo

👉 Dominar esto = nivel PRO en Angular 🚀
