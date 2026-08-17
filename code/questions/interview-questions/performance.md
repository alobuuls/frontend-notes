# 🚀 16. PERFORMANCE

Esta sección es muy buena para diferenciar a alguien que **sabe usar Angular** de alguien que entiende **cómo hacer que una aplicación Angular escale y se mantenga rápida**.

> 💡 **IDEA GENERAL**
>
> La performance no consiste en aplicar optimizaciones sin medir, sino en identificar dónde está el problema y optimizar el cuello de botella correcto.

```text
🚀 PERFORMANCE
│
├── 📦 Bundle
├── 💤 Lazy Loading
├── 🔀 Code Splitting
├── 🔄 Change Detection
├── 🖼️ Imágenes
├── 🌐 HTTP / Caching
├── 🔎 Búsquedas
├── 🧠 Memoria
└── 📊 Rendering
```

---

## 📚 Índice

- [🚀 16. PERFORMANCE](#-16-performance)
  - [📚 Índice](#-índice)
- [🧠 Resumen para entrevista](#-resumen-para-entrevista)
- [🔥 Las 7 que más priorizaría](#-las-7-que-más-priorizaría)
- [⭐ Idea clave](#-idea-clave)
- [🔹 ¿Cómo mejorarías el rendimiento de una aplicación Angular?](#-cómo-mejorarías-el-rendimiento-de-una-aplicación-angular)
  - [📦 Reducir JavaScript](#-reducir-javascript)
  - [🔄 Optimizar rendering](#-optimizar-rendering)
  - [🌐 Optimizar red](#-optimizar-red)
  - [🖼️ Optimizar imágenes](#️-optimizar-imágenes)
  - [🧠 Memoria](#-memoria)
    - [🗣️ Respuesta de entrevista](#️-respuesta-de-entrevista)
- [🔹 ¿Qué es Lazy Loading?](#-qué-es-lazy-loading)
    - [🗣️ Respuesta de entrevista](#️-respuesta-de-entrevista-1)
    - [📌 Antes:](#-antes)
    - [📌 Con Lazy Loading:](#-con-lazy-loading)
- [🔹 ¿Qué es Code Splitting?](#-qué-es-code-splitting)
    - [🗣️ Respuesta de entrevista](#️-respuesta-de-entrevista-2)
- [🔹 ¿Qué es Change Detection?](#-qué-es-change-detection)
    - [🗣️ Respuesta de entrevista](#️-respuesta-de-entrevista-3)
- [🔹 ¿Qué diferencia hay entre Default y OnPush?](#-qué-diferencia-hay-entre-default-y-onpush)
  - [🟢 Default](#-default)
  - [🔵 OnPush](#-onpush)
    - [🗣️ Respuesta de entrevista](#️-respuesta-de-entrevista-4)
- [🔹 ¿Qué es `trackBy`?](#-qué-es-trackby)
    - [🗣️ Respuesta de entrevista](#️-respuesta-de-entrevista-5)
- [🔹 ¿Cómo evitarías renders innecesarios?](#-cómo-evitarías-renders-innecesarios)
  - [1️⃣ `OnPush`](#1️⃣-onpush)
  - [2️⃣ Identificar elementos de listas](#2️⃣-identificar-elementos-de-listas)
  - [3️⃣ Evitar funciones costosas en templates](#3️⃣-evitar-funciones-costosas-en-templates)
  - [4️⃣ Usar Signals / estado reactivo](#4️⃣-usar-signals--estado-reactivo)
  - [5️⃣ Dividir componentes](#5️⃣-dividir-componentes)
    - [🗣️ Respuesta de entrevista](#️-respuesta-de-entrevista-6)
- [🔹 ¿Cómo optimizarías imágenes?](#-cómo-optimizarías-imágenes)
  - [🖼️ Formatos modernos](#️-formatos-modernos)
  - [📐 Tamaño correcto](#-tamaño-correcto)
  - [💤 Lazy Loading](#-lazy-loading)
  - [📱 Responsive Images](#-responsive-images)
    - [🗣️ Respuesta de entrevista](#️-respuesta-de-entrevista-7)
- [🔹 ¿Qué es caching?](#-qué-es-caching)
    - [🗣️ Respuesta de entrevista](#️-respuesta-de-entrevista-8)
- [🔹 ¿Qué es debounce?](#-qué-es-debounce)
    - [🗣️ Respuesta de entrevista](#️-respuesta-de-entrevista-9)
- [🔹 ¿Qué es throttle?](#-qué-es-throttle)
    - [🗣️ Respuesta de entrevista](#️-respuesta-de-entrevista-10)
- [🧠 Debounce vs Throttle](#-debounce-vs-throttle)
  - [📌 Regla para memorizar](#-regla-para-memorizar)
- [🔹 ¿Cómo optimizarías una búsqueda con autocomplete?](#-cómo-optimizarías-una-búsqueda-con-autocomplete)
  - [🧩 ¿Qué hace cada operador?](#-qué-hace-cada-operador)
    - [🗣️ Respuesta de entrevista ⭐](#️-respuesta-de-entrevista-)
- [🔹 ¿Cómo detectarías memory leaks?](#-cómo-detectarías-memory-leaks)
  - [🔍 Herramientas](#-herramientas)
  - [🅰️ Angular](#️-angular)
    - [🗣️ Respuesta de entrevista](#️-respuesta-de-entrevista-11)
- [🔹 ¿Cómo reducirías el bundle size?](#-cómo-reducirías-el-bundle-size)
  - [💤 Lazy Loading](#-lazy-loading-1)
  - [✂️ Code Splitting](#️-code-splitting)
  - [📦 Eliminar dependencias innecesarias](#-eliminar-dependencias-innecesarias)
  - [🌳 Tree Shaking](#-tree-shaking)
  - [📥 Imports adecuados](#-imports-adecuados)
  - [🖼️ Separar assets](#️-separar-assets)
  - [📊 Analizar el bundle](#-analizar-el-bundle)
    - [🗣️ Respuesta de entrevista](#️-respuesta-de-entrevista-12)
- [🧠 RESUMEN PARA ENTREVISTA](#-resumen-para-entrevista-1)
- [🔥 LAS 7 QUE MÁS PRIORIZARÍA](#-las-7-que-más-priorizaría-1)
  - [1️⃣ `Default` vs `OnPush`](#1️⃣-default-vs-onpush)
  - [2️⃣ Lazy Loading vs Code Splitting](#2️⃣-lazy-loading-vs-code-splitting)
  - [3️⃣ `trackBy`](#3️⃣-trackby)
  - [4️⃣ Debounce vs Throttle](#4️⃣-debounce-vs-throttle)
  - [5️⃣ Autocomplete](#5️⃣-autocomplete)
  - [6️⃣ Memory leaks](#6️⃣-memory-leaks)
  - [7️⃣ Bundle Size](#7️⃣-bundle-size)
- [⭐ RESPUESTA "SENIOR" PARA PERFORMANCE](#-respuesta-senior-para-performance)

---

# 🧠 Resumen para entrevista

- [🚀 Performance](#-performance)
  - [💤 Lazy Loading](#-lazy-loading)
  - [✂️ Code Splitting](#️-code-splitting)
  - [🔄 Change Detection](#-change-detection)
  - [⚡ OnPush](#-onpush)
  - [📋 trackBy / track](#-qué-es-trackby)
  - [🖼️ Imágenes](#️-optimizar-imágenes)
  - [💾 Caching](#-qué-es-caching)
  - [🔎 Debounce](#-qué-es-debounce)
  - [🚦 Throttle](#-qué-es-throttle)
  - [🔍 Autocomplete](#-cómo-optimizarías-una-búsqueda-con-autocomplete)
  - [🧠 Memory](#-cómo-detectarías-memory-leaks)
  - [📦 Bundle](#-cómo-reducirías-el-bundle-size)

---

# 🔥 Las 7 que más priorizaría

1. [Default vs OnPush](#-qué-diferencia-hay-entre-default-y-onpush)

2. [Lazy Loading vs Code Splitting](#-qué-es-code-splitting)

3. [trackBy](#-qué-es-trackby)

4. [Debounce vs Throttle](#-debounce-vs-throttle)

5. [Autocomplete con RxJS](#-cómo-optimizarías-una-búsqueda-con-autocomplete)

6. [Memory leaks](#-cómo-detectarías-memory-leaks)

7. [Bundle Size](#-cómo-reducirías-el-bundle-size)

---

# ⭐ Idea clave

> "Primero medir dónde está el problema antes de optimizar. La performance consiste en identificar el cuello de botella real y aplicar la optimización adecuada."

---

# 🔹 ¿Cómo mejorarías el rendimiento de una aplicación Angular?

No existe una única técnica.

Primero **mediría dónde está el problema** y después optimizaría el cuello de botella.

---

## 📦 Reducir JavaScript

| Estrategia                            | Objetivo                                   |
| ------------------------------------- | ------------------------------------------ |
| 💤 Lazy Loading                       | Cargar funcionalidades cuando se necesitan |
| 🔀 Code Splitting                     | Dividir código en partes más pequeñas      |
| 🧹 Eliminar dependencias innecesarias | Reducir tamaño del bundle                  |
| 🌳 Tree shaking                       | Eliminar código no utilizado               |
| 📥 Optimizar imports                  | Evitar cargar código innecesario           |
| 📦 Reducir bundle size                | Menos JavaScript inicial                   |

---

## 🔄 Optimizar rendering

| Estrategia                            | Objetivo                         |
| ------------------------------------- | -------------------------------- |
| `ChangeDetectionStrategy.OnPush`      | Reducir detecciones innecesarias |
| `trackBy` / `track`                   | Reutilizar elementos DOM         |
| Evitar cálculos costosos en templates | Reducir trabajo de Angular       |
| Evitar renders innecesarios           | Mejorar actualización de UI      |
| Dividir componentes grandes           | Reducir complejidad              |

---

## 🌐 Optimizar red

| Estrategia                   | Objetivo                         |
| ---------------------------- | -------------------------------- |
| Caching                      | Evitar requests repetidas        |
| Paginación                   | Reducir cantidad de datos        |
| Debounce en búsquedas        | Evitar llamadas excesivas        |
| Evitar requests innecesarias | Reducir tráfico                  |
| Compresión                   | Reducir transferencia            |
| CDN                          | Mejorar distribución de recursos |

---

## 🖼️ Optimizar imágenes

| Estrategia        | Objetivo                            |
| ----------------- | ----------------------------------- |
| WebP / AVIF       | Reducir peso                        |
| Lazy loading      | Cargar imágenes cuando se necesitan |
| Responsive images | Adaptar tamaño                      |
| Tamaños adecuados | Evitar imágenes demasiado grandes   |

---

## 🧠 Memoria

| Estrategia                               | Objetivo             |
| ---------------------------------------- | -------------------- |
| Limpiar subscriptions cuando corresponda | Evitar fugas         |
| Evitar listeners activos                 | Liberar recursos     |
| Evitar referencias innecesarias          | Reducir consumo      |
| Detectar memory leaks                    | Mantener estabilidad |

---

### 🗣️ Respuesta de entrevista

> "Primero mediría el problema utilizando herramientas de profiling y después optimizaría según el cuello de botella. Algunas estrategias serían lazy loading y code splitting para reducir el JavaScript inicial, OnPush y un rendering eficiente, optimización de imágenes, caching, reducción de requests y prevención de memory leaks."

> 🔥 **TIP**
>
> La palabra clave aquí es:
>
> **medir antes de optimizar.**

---

# 🔹 ¿Qué es Lazy Loading?

**Lazy Loading** significa cargar una funcionalidad **solamente cuando se necesita**, en lugar de cargar toda la aplicación inicialmente.

Ejemplo:

```text
Usuario abre aplicación
        ↓
Carga Home
        ↓
Usuario entra a Admin
        ↓
Carga Admin
```

En Angular podemos hacerlo mediante rutas:

```typescript
export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./features/admin/admin.routes')
        .then(m => m.ADMIN_ROUTES)
  }
];
```

Así el código de `admin` no necesariamente forma parte del bundle inicial.

### 🗣️ Respuesta de entrevista

> "Lazy Loading consiste en cargar una funcionalidad únicamente cuando se necesita. En Angular normalmente lo aplicaría a features o rutas para reducir la cantidad de JavaScript que el usuario tiene que descargar inicialmente."

### 📌 Antes:

```text
App
├── Home
├── Users
├── Admin
├── Reports
└── Settings

Todo carga inicialmente ❌
```

### 📌 Con Lazy Loading:

```text
App
└── Home

Admin → se carga cuando se visita
Reports → se carga cuando se visita
```

---

# 🔹 ¿Qué es Code Splitting?

**Code Splitting** consiste en dividir el código de una aplicación en diferentes bundles/chunks que pueden cargarse de forma independiente.

Ejemplo:

```text
app.js
```

puede dividirse en:

```text
main.js
users.js
admin.js
reports.js
```

El navegador no necesariamente necesita descargar todo inmediatamente.

### 🗣️ Respuesta de entrevista

> "Code Splitting consiste en dividir el código de la aplicación en diferentes chunks que pueden descargarse y ejecutarse de forma independiente. Lazy Loading es una estrategia que puede aprovechar ese mecanismo para cargar esos chunks solamente cuando son necesarios."

> 🔥 **Diferencia clave**

| Concepto          | Función                        |
| ----------------- | ------------------------------ |
| 🔀 Code Splitting | Divide el código               |
| 💤 Lazy Loading   | Decide cuándo cargar una parte |

Están relacionados, pero **no son exactamente lo mismo**.

---

# 🔹 ¿Qué es Change Detection?

**Change Detection** es el mecanismo mediante el cual Angular detecta cambios en el estado de la aplicación y actualiza la vista cuando corresponde.

Flujo:

```text
Estado cambia
    ↓
Angular detecta cambio
    ↓
Actualiza template
    ↓
DOM actualizado
```

Ejemplo:

```typescript
this.userName = 'Alo';
```

Angular debe actualizar:

```html
<h1>{{ userName }}</h1>
```

### 🗣️ Respuesta de entrevista

> "Change Detection es el mecanismo que utiliza Angular para detectar cambios en el estado de la aplicación y mantener sincronizada la vista con ese estado."

> 💡 Una parte importante de performance consiste en evitar que Angular tenga que hacer trabajo innecesario.

---

# 🔹 ¿Qué diferencia hay entre Default y OnPush?

Esta es **muy importante**.

Angular puede utilizar diferentes estrategias de Change Detection.

---

## 🟢 Default

Es la estrategia tradicional.

Angular puede comprobar el componente cuando se ejecuta un ciclo de change detection.

```text
Evento
 ↓
Change Detection
 ↓
Angular revisa componentes
```

Puede terminar haciendo más trabajo del necesario en aplicaciones grandes si la estructura no está optimizada.

---

## 🔵 OnPush

Podemos utilizar:

```typescript
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})
```

Con `OnPush`, Angular puede limitar cuándo necesita revisar el componente.

Escenarios importantes:

* Cambia una referencia de `@Input`.
* Ocurre un evento dentro del componente.
* El componente se actualiza mediante mecanismos reactivos apropiados, como signals.
* Se solicita explícitamente una detección.

Ejemplo:

```typescript
user = {
  name: 'Alo'
};
```

Si hacemos:

```typescript
this.user.name = 'Ana';
```

La referencia sigue siendo la misma.

Pero:

```typescript
this.user = {
  ...this.user,
  name: 'Ana'
};
```

Creamos una nueva referencia.

### 🗣️ Respuesta de entrevista

> "Default utiliza la estrategia tradicional de detección de cambios, mientras que OnPush permite que Angular limite la comprobación del componente a determinados escenarios de cambio. Esto puede reducir trabajo innecesario, especialmente en aplicaciones grandes, aunque debe utilizarse entendiendo cómo se actualiza el estado."

> ⚠️ **No digas simplemente:**
>
> "`OnPush` hace que Angular nunca revise el componente."
>
> Eso sería incorrecto.

---

# 🔹 ¿Qué es `trackBy`?

Cuando Angular renderiza listas, necesita identificar los elementos.

Ejemplo:

```html
<div *ngFor="let user of users; trackBy: trackByUserId">
  {{ user.name }}
</div>
```

Podemos definir:

```typescript
trackByUserId(index: number, user: User): number {
  return user.id;
}
```

Angular puede identificar:

```text
User 1 → id 1
User 2 → id 2
User 3 → id 3
```

Si cambia un elemento, Angular puede reutilizar los elementos DOM correspondientes en lugar de recrearlos innecesariamente.

### 🗣️ Respuesta de entrevista

> "`trackBy` permite indicarle a Angular cómo identificar los elementos de una lista. Esto ayuda a reutilizar elementos del DOM cuando la colección cambia y puede evitar recreaciones innecesarias."

> 💡 En Angular moderno también existe la sintaxis:

```html
@for (user of users; track user.id) {
  <div>{{ user.name }}</div>
}
```
# 🔹 ¿Cómo evitarías renders innecesarios?

Hay varias estrategias.

| Estrategia                  | Descripción                                  |
| --------------------------- | -------------------------------------------- |
| 🔵 `OnPush`                 | Reduce detecciones innecesarias de cambios   |
| 🔎 `trackBy` / `track`      | Identifica elementos de listas correctamente |
| 🧠 Evitar cálculos costosos | Reduce trabajo repetido en templates         |
| ⚡ Signals / estado reactivo | Actualizaciones más precisas                 |
| 🧩 Dividir componentes      | Reduce complejidad y renders                 |

---

## 1️⃣ `OnPush`

```typescript id="b4p8j4"
changeDetection: ChangeDetectionStrategy.OnPush
```

---

## 2️⃣ Identificar elementos de listas

Con:

```text id="d7wj5s"
trackBy
```

o:

```text id="a5q7px"
track
```

---

## 3️⃣ Evitar funciones costosas en templates

Evitar:

```html id="1gy8hf"
{{ calculateSomething(user) }}
```

si esa función realiza cálculos costosos y puede ejecutarse repetidamente.

Mejor calcular cuando corresponde:

```typescript id="q7fk9x"
const total = calculateSomething(user);
```

---

## 4️⃣ Usar Signals / estado reactivo

Permite expresar de forma más precisa qué partes dependen de determinado estado.

---

## 5️⃣ Dividir componentes

En lugar de:

```text id="8sg4n4"
HugeComponent
```

tener:

```text id="e5s1f4"
Parent
├── Header
├── Filters
├── Table
└── Pagination
```

---

### 🗣️ Respuesta de entrevista

> "Utilizaría OnPush cuando sea apropiado, identificaría correctamente los elementos de listas mediante trackBy o track, evitaría cálculos costosos en templates y dividiría componentes grandes. También utilizaría un modelo de estado reactivo adecuado para limitar las actualizaciones a las partes que realmente dependen de un dato."

---

# 🔹 ¿Cómo optimizarías imágenes?

Las imágenes pueden representar una parte importante del peso de una aplicación.

Utilizaría:

---

## 🖼️ Formatos modernos

```text id="0cx7k8"
WebP
AVIF
```

en lugar de formatos más pesados cuando sea apropiado.

---

## 📐 Tamaño correcto

No tiene sentido cargar:

```text id="9l1y3k"
4000 × 4000
```

si solamente mostramos:

```text id="o5ct91"
200 × 200
```

---

## 💤 Lazy Loading

```html id="b4m8xq"
<img
  src="image.webp"
  loading="lazy"
  alt="User"
>
```

---

## 📱 Responsive Images

Podemos utilizar:

```html id="h7v0st"
<img
  src="small.webp"
  srcset="
    small.webp 480w,
    medium.webp 1024w,
    large.webp 1920w
  "
  alt="Landscape"
>
```

Así el navegador puede seleccionar un recurso apropiado.

---

### 🗣️ Respuesta de entrevista

> "Optimizaría las imágenes utilizando formatos modernos como WebP o AVIF, tamaños adecuados, compresión, lazy loading y responsive images. También evitaría cargar imágenes mucho más grandes de lo que realmente necesita el dispositivo."

---

# 🔹 ¿Qué es caching?

**Caching** consiste en almacenar temporalmente información para evitar realizar nuevamente una operación costosa.

Ejemplo:

```text id="w1af2m"
Primera petición
    ↓
API
    ↓
Datos
    ↓
Cache

Segunda petición
    ↓
Cache
    ↓
Datos
```

Puede reducir:

| Beneficio   | Resultado              |
| ----------- | ---------------------- |
| 📡 Requests | Menos llamadas         |
| ⏱️ Latencia | Respuestas más rápidas |
| 🖥️ Backend | Menor carga            |
| 🌐 Red      | Menor consumo          |

En frontend podemos tener diferentes estrategias:

```text id="6z9y9w"
Browser Cache
HTTP Cache
Service Worker
Memory Cache
Application Cache
```

También podemos cachear resultados de observables dependiendo del caso.

Ejemplo:

```typescript id="w7z8vh"
users$ = this.http.get<User[]>('/api/users').pipe(
  shareReplay(1)
);
```

---

### 🗣️ Respuesta de entrevista

> "Caching consiste en reutilizar información previamente obtenida para evitar operaciones o peticiones innecesarias. Puede reducir latencia, tráfico de red y carga del servidor. La estrategia concreta depende del tipo de datos y de cuánto tiempo sea válido reutilizarlos."

> ⚠️ **IMPORTANTE**
>
> **No todo debería cachearse.**
>
> Datos muy dinámicos pueden requerir una estrategia diferente.

---

# 🔹 ¿Qué es debounce?

**Debounce** espera a que pase un determinado tiempo desde el **último evento** antes de ejecutar una acción.

Es extremadamente útil en búsquedas.

Ejemplo:

```text id="3w3v6x"
Usuario escribe:

a
al
alo
aloi
```

Sin debounce:

```text id="5kr4a0"
4 requests ❌
```

Con:

```typescript id="k9l0p7"
debounceTime(300)
```

Esperamos 300 ms después del último cambio.

```text id="7k4a2h"
a
al
alo
aloi
        ↓
   espera 300ms
        ↓
     request ✅
```

---

### 🗣️ Respuesta de entrevista

> "Debounce permite esperar un período de tiempo después del último evento antes de ejecutar una acción. Lo utilizaría, por ejemplo, en un autocomplete para evitar realizar una petición por cada tecla que presiona el usuario."

---

# 🔹 ¿Qué es throttle?

**Throttle** limita la frecuencia con la que puede ejecutarse una acción durante un período determinado.

Ejemplo:

```text id="3skm8m"
scroll
scroll
scroll
scroll
scroll
```

Podríamos permitir una ejecución cada:

```text id="b1w9x8"
100ms
```

Conceptualmente:

```text id="q1s5kw"
Eventos:
████████████████████

Throttle:
█   █   █   █   █
```

---

### 🗣️ Respuesta de entrevista

> "Throttle limita la frecuencia con la que se ejecuta una acción. Es útil cuando recibimos muchos eventos continuos, como scroll, resize o eventos del navegador."

---

# 🧠 Debounce vs Throttle

Esta diferencia es muy preguntable.

| Concepto        | Función                                    | Casos de uso                      |
| --------------- | ------------------------------------------ | --------------------------------- |
| 🔵 **Debounce** | Espera hasta que deje de ocurrir el evento | Search, autocomplete, form inputs |
| 🟢 **Throttle** | Limita la frecuencia de ejecución          | Scroll, mouse events, resize      |

---

## 📌 Regla para memorizar

```text id="z7m8q4"
Debounce → "espera a que termine"

Throttle → "limita la frecuencia"
```

# 🔹 ¿Cómo optimizarías una búsqueda con autocomplete?

Esta es una pregunta muy típica de Angular + RxJS.

Flujo esperado:

```text id="jv3h4a"
Input
 ↓
valueChanges
 ↓
debounceTime
 ↓
distinctUntilChanged
 ↓
switchMap
 ↓
HTTP
```

Implementación:

```typescript id="7gk8nb"
this.searchControl.valueChanges.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap(term =>
    this.usersService.searchUsers(term)
  )
).subscribe(users => {
  this.users = users;
});
```

---

## 🧩 ¿Qué hace cada operador?

| Operador                  | Función                                             |
| ------------------------- | --------------------------------------------------- |
| ⏳ `debounceTime`          | Espera al usuario                                   |
| 🔁 `distinctUntilChanged` | Evita buscar el mismo valor consecutivamente        |
| 🔀 `switchMap`            | Cancela la búsqueda anterior cuando llega una nueva |

---

Ejemplo:

```text id="gk1s8h"
Usuario escribe:

a
 ↓
ab
 ↓
alo
```

No queremos:

```text id="v6x7sk"
GET /users?q=a
GET /users?q=ab
GET /users?q=alo
```

si las primeras respuestas ya no son relevantes.

Con `switchMap`:

```text id="k0c1x4"
a   → ❌
ab  → ❌
alo → ✅
```

---

### 🗣️ Respuesta de entrevista ⭐

> "Para un autocomplete utilizaría `valueChanges` junto con `debounceTime` para evitar peticiones por cada tecla, `distinctUntilChanged` para evitar búsquedas repetidas y `switchMap` para cancelar la petición anterior cuando el usuario realiza una nueva búsqueda. También consideraría un mínimo de caracteres antes de consultar la API."

Ejemplo:

```typescript id="r7p8nz"
filter(term => term.length >= 2)
```

---

# 🔹 ¿Cómo detectarías memory leaks?

Un **memory leak** ocurre cuando una aplicación mantiene en memoria objetos o recursos que ya no necesita.

En Angular pueden aparecer por:

| Causa                       | Ejemplo                      |
| --------------------------- | ---------------------------- |
| 📡 Subscriptions activas    | Observables que siguen vivos |
| 🖱️ Event listeners         | Eventos no liberados         |
| ⏱️ Timers                   | Temporizadores activos       |
| 📶 WebSockets               | Conexiones abiertas          |
| 🔗 Referencias innecesarias | Objetos retenidos            |
| 🧹 Recursos no liberados    | Falta de limpieza            |

---

## 🔍 Herramientas

Podemos utilizar:

```text id="5j9h0y"
Chrome DevTools
Memory
Performance
Heap Snapshots
```

También podemos observar:

```text id="s3n5fm"
Memory usage
↓
¿Aumenta continuamente?
```

---

## 🅰️ Angular

Podemos utilizar:

```typescript id="c1q0z4"
takeUntilDestroyed()
```

Ejemplo:

```typescript id="0n9fhh"
this.service.data$
  .pipe(
    takeUntilDestroyed(this.destroyRef)
  )
  .subscribe(data => {
    this.data = data;
  });
```

También podemos utilizar `async` pipe cuando sea apropiado:

```html id="1cv2st"
<div *ngIf="users$ | async as users">
  ...
</div>
```

---

### 🗣️ Respuesta de entrevista

> "Detectaría memory leaks utilizando herramientas como Chrome DevTools y heap snapshots, observando si la memoria sigue creciendo después de destruir componentes. En Angular también evitaría subscriptions o listeners que sobrevivan innecesariamente utilizando async pipe, takeUntilDestroyed u otros mecanismos adecuados."

---

# 🔹 ¿Cómo reducirías el bundle size?

El **bundle** es el código JavaScript que necesita descargar y ejecutar el navegador.

Podemos reducirlo mediante:

---

## 💤 Lazy Loading

No cargar funcionalidades que el usuario todavía no necesita.

---

## ✂️ Code Splitting

Dividir el código en chunks.

---

## 📦 Eliminar dependencias innecesarias

No instalar una librería enorme para una funcionalidad que podemos resolver con unas pocas líneas.

---

## 🌳 Tree Shaking

Permite eliminar código que no está siendo utilizado durante el proceso de build cuando las condiciones del código y bundler lo permiten.

---

## 📥 Imports adecuados

Evitar importar una librería completa cuando solo necesitamos una parte, especialmente en librerías que no permiten tree-shaking efectivo.

---

## 🖼️ Separar assets

No incluir recursos enormes innecesariamente en el bundle.

---

## 📊 Analizar el bundle

Podemos utilizar herramientas de análisis para descubrir qué dependencias están ocupando más espacio.

---

### 🗣️ Respuesta de entrevista

> "Para reducir el bundle analizaría primero qué está ocupando espacio y después aplicaría técnicas como lazy loading, code splitting, eliminar dependencias innecesarias, aprovechar tree shaking y revisar imports y assets. También evitaría enviar al bundle inicial código que el usuario no necesita inmediatamente."

---

# 🧠 RESUMEN PARA ENTREVISTA

```text id="0u8zq7"
🚀 PERFORMANCE
│
├── 💤 Lazy Loading
│   └── Cargar cuando se necesita
│
├── ✂️ Code Splitting
│   └── Dividir código en chunks
│
├── 🔄 Change Detection
│   └── Mantener UI sincronizada
│
├── ⚡ OnPush
│   └── Reducir comprobaciones innecesarias
│
├── 📋 trackBy / track
│   └── Identificar elementos de listas
│
├── 🖼️ Imágenes
│   ├── WebP / AVIF
│   ├── Lazy Loading
│   ├── Responsive
│   └── Tamaño adecuado
│
├── 💾 Caching
│   └── Evitar operaciones repetidas
│
├── 🔎 Debounce
│   └── Esperar al último evento
│
├── 🚦 Throttle
│   └── Limitar frecuencia
│
├── 🔍 Autocomplete
│   ├── debounceTime
│   ├── distinctUntilChanged
│   └── switchMap
│
├── 🧠 Memory
│   ├── takeUntilDestroyed
│   ├── async pipe
│   └── DevTools
│
└── 📦 Bundle
    ├── Lazy Loading
    ├── Code Splitting
    ├── Tree Shaking
    └── Eliminar dependencias
```

---

# 🔥 LAS 7 QUE MÁS PRIORIZARÍA

Si esta fuera una entrevista real, pondría especial atención a:

---

## 1️⃣ `Default` vs `OnPush`

```text id="w0p9nj"
Default → estrategia tradicional

OnPush  → limita cuándo se revisa el componente
```

---

## 2️⃣ Lazy Loading vs Code Splitting

```text id="d2h8p6"
Code Splitting → divide el código

Lazy Loading → carga una parte cuando se necesita
```

---

## 3️⃣ `trackBy`

> Identifica elementos de una lista para permitir que Angular reutilice el DOM cuando corresponda.

---

## 4️⃣ Debounce vs Throttle

```text id="1m4hqp"
Debounce  → espera al último evento

Throttle  → limita la frecuencia
```

---

## 5️⃣ Autocomplete

```text id="8s5w0q"
valueChanges
    ↓
debounceTime
    ↓
distinctUntilChanged
    ↓
switchMap
    ↓
HTTP
```

---

## 6️⃣ Memory leaks

> Detectarlos con DevTools/heap snapshots y prevenir subscriptions o recursos que sobrevivan innecesariamente.

---

## 7️⃣ Bundle Size

> Analizar primero y después aplicar lazy loading, code splitting, tree shaking y eliminación de dependencias innecesarias.

---

# ⭐ RESPUESTA "SENIOR" PARA PERFORMANCE

Si te preguntan:

**"¿Cómo mejorarías el rendimiento de una aplicación Angular?"**

> **"Primero mediría dónde está el problema antes de optimizar. Revisaría el bundle, el rendering, las peticiones de red y el consumo de memoria. Dependiendo del problema podría aplicar lazy loading y code splitting, utilizar OnPush y un tracking adecuado para listas, optimizar imágenes, implementar caching, controlar búsquedas con debounce y switchMap, y revisar posibles memory leaks. También analizaría el bundle para eliminar dependencias o código innecesario."**

> 🔥 **IDEA CLAVE**
>
> No optimizas por moda; optimizas basándote en evidencia y en el cuello de botella real.
