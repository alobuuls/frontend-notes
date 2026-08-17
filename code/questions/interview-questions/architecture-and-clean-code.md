# 🏗️ 15. ARQUITECTURA Y BUENAS PRÁCTICAS

> 💡 **IMPORTANTE**
>
> Esta sección es especialmente importante porque aquí ya no buscan solamente saber **si sabes Angular**, sino entender **cómo tomas decisiones al construir una aplicación mantenible**.

En entrevistas, una respuesta senior normalmente no es *"siempre hago X"*, sino:

> **"Depende del contexto, pero intento separar responsabilidades, evitar complejidad innecesaria y mantener el código fácil de probar y mantener."**

---

## 📚 ÍNDICE 

- [🏗️ Arquitectura y Buenas Prácticas](#-arquitectura-y-buenas-prácticas)

---

## 🧼 Clean Code

- [🔹 ¿Qué es Clean Code?](#-qué-es-clean-code)

---

## 🧱 Principios SOLID

- [🔹 ¿Qué son SOLID?](#-qué-son-solid)

### Principios

- [🟢 S — Single Responsibility Principle](#-s--single-responsibility-principle)
- [🟡 O — Open/Closed Principle](#-o--openclosed-principle)
- [🔵 L — Liskov Substitution Principle](#-l--liskov-substitution-principle)
- [🟣 I — Interface Segregation Principle](#-i--interface-segregation-principle)
- [🔴 D — Dependency Inversion Principle](#-d--dependency-inversion-principle)

---

## 🧩 Separación de responsabilidades

- [🔹 ¿Qué es Separation of Concerns?](#-qué-es-separation-of-concerns)

---

## ♻️ Principios de diseño

- [🔹 ¿Qué es DRY?](#-qué-es-dry)
- [🔹 ¿Qué es KISS?](#-qué-es-kiss)
- [🔹 ¿Qué es YAGNI?](#-qué-es-yagni)

### Comparación

- [🧠 DRY vs KISS vs YAGNI](#-dry-vs-kiss-vs-yagni)

---

## 🏛️ Arquitecturas y patrones

- [🔹 ¿Qué es una arquitectura por capas?](#-qué-es-una-arquitectura-por-capas)
- [🔹 ¿Qué es MVC?](#-qué-es-mvc)

---

## 🅰️ Conceptos Angular

- [🔹 ¿Qué diferencia hay entre componente, servicio y utilitario?](#-qué-diferencia-hay-entre-componente-servicio-y-utilitario)
- [🔹 ¿Dónde colocarías la lógica de negocio?](#-dónde-colocarías-la-lógica-de-negocio)

---

## 📂 Organización de proyectos Angular

- [🔹 ¿Cómo organizarías un proyecto Angular grande?](#-cómo-organizarías-un-proyecto-angular-grande)

---

## 🧩 Componentes y reutilización

- [🔹 ¿Cómo evitarías componentes demasiado grandes?](#-cómo-evitarías-componentes-demasiado-grandes)
- [🔹 ¿Cómo reutilizarías lógica?](#-cómo-reutilizarías-lógica)
- [🔹 ¿Cuándo crearías un servicio?](#-cuándo-crearías-un-servicio)
- [🔹 ¿Cuándo crearías un componente reutilizable?](#-cuándo-crearías-un-componente-reutilizable)
- [🔹 ¿Cuándo crearías un custom pipe?](#-cuándo-crearías-un-custom-pipe)

---

## 📊 Manejo de estado

- [🔹 ¿Cómo manejarías estado global?](#-cómo-manejarías-estado-global)

---

# 🧠 Resumen

- [🧠 Resumen General](#-resumen-general)

---

# 🔥 Preparación para entrevista

- [🔥 Las más importantes para una entrevista](#-las-más-importantes-para-una-entrevista)

### Preguntas clave

1. [¿Qué es SOLID?](#1️⃣-qué-es-solid)
2. [¿Qué es Separation of Concerns?](#2️⃣-qué-es-separation-of-concerns)
3. [¿DRY vs KISS vs YAGNI?](#3️⃣-dry-vs-kiss-vs-yagni)
4. [¿Cómo organizarías un Angular grande?](#4️⃣-cómo-organizarías-un-angular-grande)
5. [¿Cómo evitarías componentes gigantes?](#5️⃣-cómo-evitarías-componentes-gigantes)
6. [¿Dónde colocarías la lógica de negocio?](#6️⃣-dónde-colocarías-la-lógica-de-negocio)
7. [¿Cuándo crearías un servicio?](#7️⃣-cuándo-crearías-un-servicio)
8. [¿Cómo manejarías estado global?](#8️⃣-cómo-manejarías-estado-global)

---

# ⭐ Idea Senior

- [⭐ Idea senior que te conviene recordar](#-idea-senior-que-te-conviene-recordar)

---

# 🔹 ¿Qué es Clean Code?

**Clean Code** es un conjunto de principios y prácticas para escribir código que sea **legible, mantenible, comprensible y fácil de modificar**.

### 📌 Algunas características

| Característica                    | Objetivo                          |
| --------------------------------- | --------------------------------- |
| 🏷️ Nombres descriptivos          | Comunicar la intención            |
| 🧩 Funciones pequeñas             | Mantener responsabilidades claras |
| 🎯 Una responsabilidad clara      | Facilitar el mantenimiento        |
| ♻️ Evitar duplicación             | Reducir código repetido           |
| 🧠 Evitar complejidad innecesaria | Facilitar la comprensión          |
| 📖 Código fácil de leer           | Mejorar la mantenibilidad         |
| ❌ Manejo adecuado de errores      | Controlar escenarios inesperados  |
| 🔗 Dependencias bien organizadas  | Reducir acoplamiento              |

Por ejemplo, esto:

```typescript
const x = users.filter(u => u.a && u.s);
```

es menos expresivo que:

```typescript
const activeUsers = users.filter(
  user => user.isActive && user.isSubscribed
);
```

El segundo código comunica mejor la intención.

### 🗣️ Respuesta de entrevista

> "Clean Code consiste en escribir código claro, legible y mantenible. Busco utilizar nombres descriptivos, funciones con responsabilidades claras, evitar duplicación y mantener la complejidad bajo control."

> 💡 **TIP**
>
> **Clean Code no significa escribir más código.**
>
> Significa escribir código que sea **fácil de entender y modificar**.

---

# 🔹 ¿Qué son SOLID?

**SOLID** son cinco principios de diseño orientados a crear software más mantenible y flexible.

| Letra    | Principio                       |
| -------- | ------------------------------- |
| 🟢 **S** | Single Responsibility Principle |
| 🟡 **O** | Open/Closed Principle           |
| 🔵 **L** | Liskov Substitution Principle   |
| 🟣 **I** | Interface Segregation Principle |
| 🔴 **D** | Dependency Inversion Principle  |

Vamos uno por uno.

---

## 🟢 S — Single Responsibility Principle

Una clase o módulo debería tener **una responsabilidad principal**.

❌ **Malo:**

```text
UserService
├── Login
├── Crear usuarios
├── Generar PDF
├── Enviar emails
├── Guardar archivos
└── Formatear fechas
```

Demasiadas responsabilidades.

✅ **Mejor:**

```text
AuthService
UserService
PdfService
EmailService
FileService
DateUtils
```

### 🗣️ Entrevista

> "Una clase debería tener una responsabilidad clara y una sola razón principal para cambiar."

---

## 🟡 O — Open/Closed Principle

El código debería estar:

```text
abierto para extensión
cerrado para modificación
```

Es decir, deberíamos poder agregar comportamiento sin tener que modificar constantemente código existente.

Por ejemplo, en lugar de tener un enorme:

```typescript
if (type === 'pdf') { ... }
else if (type === 'excel') { ... }
else if (type === 'csv') { ... }
```

podemos diseñar una estructura extensible.

### 🗣️ Entrevista

> "El principio Open/Closed establece que una parte del sistema debería poder extenderse sin tener que modificar constantemente su código existente."

---

## 🔵 L — Liskov Substitution Principle

Una implementación derivada debería poder utilizarse donde se espera su abstracción **sin romper el comportamiento esperado**.

Es más fácil entenderlo así:

```text
Animal
 ↓
Dog
Cat
```

Si una función espera:

```typescript
function makeSound(animal: Animal)
```

debería poder recibir:

```text
Dog
Cat
```

sin que el comportamiento esperado se rompa.

### 🗣️ Entrevista

> "Las implementaciones derivadas deberían poder sustituir a la abstracción base sin romper las expectativas del sistema."

---

## 🟣 I — Interface Segregation Principle

Es mejor tener **interfaces pequeñas y específicas** que una interfaz gigante que obligue a implementar cosas innecesarias.

❌:

```typescript
interface User {
  login();
  logout();
  print();
  sendEmail();
  uploadFile();
  generateReport();
}
```

Podríamos separar:

```typescript
interface AuthService {
  login();
  logout();
}

interface Printable {
  print();
}

interface EmailService {
  sendEmail();
}
```

### 🗣️ Entrevista

> "Es preferible tener interfaces pequeñas y específicas en lugar de interfaces grandes que obliguen a implementar métodos que una clase realmente no necesita."

---

## 🔴 D — Dependency Inversion Principle

Las partes de alto nivel no deberían depender directamente de implementaciones concretas, sino de **abstracciones**.

En Angular esto se relaciona mucho con la **inyección de dependencias**.

Por ejemplo:

```typescript
constructor(
  private userService: UserService
) {}
```

Angular proporciona la dependencia en lugar de que el componente tenga que crearla manualmente:

```typescript
new UserService();
```

### 🗣️ Entrevista

> "Dependency Inversion busca reducir el acoplamiento haciendo que los módulos dependan de abstracciones y no directamente de implementaciones concretas. En Angular esto se relaciona con el sistema de Dependency Injection."

---

# 🔹 ¿Qué es Separation of Concerns?

Significa **separar diferentes responsabilidades del sistema**.

Por ejemplo:

| Capa             | Responsabilidad               |
| ---------------- | ----------------------------- |
| 🧩 **Component** | UI / interacción              |
| ⚙️ **Service**   | Comunicación / lógica         |
| 🌐 **API**       | Persistencia / reglas backend |

```text
Component
   ↓
UI / interacción

Service
   ↓
Comunicación / lógica

API
   ↓
Persistencia / reglas backend
```

No queremos que un componente haga absolutamente todo.

❌:

```text
Component
├── HTTP
├── Validación
├── Transformación de datos
├── Reglas de negocio
├── LocalStorage
├── Navegación
└── UI
```

✅ **Mejor:**

```text
Component
   ↓
Service
   ↓
API
```

Y las responsabilidades se distribuyen apropiadamente.

### 🗣️ Respuesta de entrevista

> "Separation of Concerns consiste en dividir el sistema en partes con responsabilidades diferentes y bien definidas. En Angular, por ejemplo, evitaría colocar toda la lógica de negocio y comunicación HTTP directamente dentro de los componentes."

---

> 💡 **REGLA GENERAL**
>
> Una buena arquitectura busca **separar responsabilidades, reducir acoplamiento y mantener el código fácil de probar y mantener**.

# 🔹 ¿Qué es DRY?

**DRY = Don't Repeat Yourself.**

Significa evitar duplicar lógica innecesariamente.

❌ **Ejemplo:**

```typescript
const total = price * 1.19;
```

Repetido en:

```text
ComponentA
ComponentB
ComponentC
ComponentD
```

Podemos centralizar:

```typescript
calculateTotal(price: number): number {
  return price * 1.19;
}
```

> ⚠️ **TIP**
>
> **DRY no significa eliminar cualquier repetición a cualquier precio.**
>
> Si abstraer algo genera una estructura mucho más compleja que la duplicación original, puede ser mejor mantenerlo separado.

### 🗣️ Entrevista

> "DRY significa Don't Repeat Yourself. Busca evitar duplicación de conocimiento o lógica, normalmente extrayendo comportamiento reutilizable cuando realmente aporta valor."

---

# 🔹 ¿Qué es KISS?

**KISS = Keep It Simple, Stupid.**

La idea es:

> **Mantén las soluciones lo más simples posible.**

Por ejemplo, si necesitamos:

```text
Mostrar una lista
```

No necesariamente necesitamos crear:

```text
Factory
Repository
Adapter
Strategy
Facade
Manager
```

si una solución sencilla funciona correctamente.

### 🗣️ Entrevista

> "KISS significa mantener las soluciones simples y evitar complejidad innecesaria. Si una solución sencilla resuelve correctamente el problema, no agregaría abstracciones que no aporten valor."

---

# 🔹 ¿Qué es YAGNI?

**YAGNI = You Aren't Gonna Need It.**

Significa:

> **No implementes funcionalidades que actualmente no necesitas.**

Ejemplo:

```text
"Tal vez en el futuro necesitaremos
soportar 15 tipos de exportación..."
```

Y terminamos construyendo:

```text
15 estrategias
5 interfaces
3 factories
```

sin que exista el requisito.

YAGNI dice:

```text
Implementa lo necesario ahora.
```

### 🗣️ Entrevista

> "YAGNI significa You Aren't Gonna Need It. Busca evitar implementar funcionalidades o abstracciones basadas únicamente en necesidades hipotéticas futuras."

---

# 🧠 DRY vs KISS vs YAGNI

| Principio    | Idea principal                                         |
| ------------ | ------------------------------------------------------ |
| ♻️ **DRY**   | No dupliques innecesariamente                          |
| 🧩 **KISS**  | No compliques innecesariamente                         |
| 🚫 **YAGNI** | No construyas funcionalidades que todavía no necesitas |

🔥 Puedes memorizarlo como:

> **DRY evita duplicación, KISS evita complejidad y YAGNI evita funcionalidades innecesarias.**

---

# 🔹 ¿Qué es una arquitectura por capas?

Es una arquitectura donde la aplicación se divide en **capas con responsabilidades diferentes**.

Ejemplo:

```text
┌─────────────────────┐
│    Presentation     │
│   Components/UI     │
├─────────────────────┤
│     Application     │
│   Services/UseCases │
├─────────────────────┤
│       Data          │
│ API / Repositories  │
├─────────────────────┤
│    Infrastructure   │
│ DB / External APIs  │
└─────────────────────┘
```

En un frontend Angular podríamos simplificarlo:

```text
Components
    ↓
Services
    ↓
API / Data Access
```

| Capa              | Responsabilidad               |
| ----------------- | ----------------------------- |
| 🖥️ Presentation  | UI y componentes              |
| ⚙️ Application    | Servicios y casos de uso      |
| 📦 Data           | Acceso a datos y repositorios |
| 🌐 Infrastructure | APIs externas y persistencia  |

La ventaja es que cada capa tiene responsabilidades más claras.

### 🗣️ Entrevista

> "Una arquitectura por capas divide la aplicación en diferentes niveles de responsabilidad. Por ejemplo, una capa de presentación para la UI, una capa de servicios para la lógica y una capa de acceso a datos para la comunicación con APIs."

---

# 🔹 ¿Qué es MVC?

**MVC = Model - View - Controller.**

Es un patrón arquitectónico que separa:

| Parte         | Responsabilidad       |
| ------------- | --------------------- |
| 📦 Model      | Datos / estado        |
| 👁️ View      | Interfaz              |
| 🎮 Controller | Coordina las acciones |

Conceptualmente:

```text
        User
         ↓
    Controller
      ↙     ↘
  Model     View
```

Angular **no es estrictamente MVC**.

Angular utiliza principalmente una arquitectura basada en:

```text
Components
Services
Dependency Injection
Templates
Directives
etc.
```

Podemos encontrar conceptos similares a MVC, pero no es correcto decir:

> "Angular es MVC."

### 🗣️ Entrevista

> "MVC separa Model, View y Controller. Angular no implementa estrictamente MVC; utiliza principalmente componentes, templates, servicios e inyección de dependencias."

> 🔥 **TIP DE ENTREVISTA**
>
> Esta aclaración demuestra que entiendes la arquitectura de Angular.

---

# 🔹 ¿Qué diferencia hay entre componente, servicio y utilitario?

## 🧩 Component

Se encarga principalmente de la **UI y la interacción con ella**.

```text
HTML
↓
Component
↓
User interaction
```

Ejemplo:

```typescript
UsersComponent
```

---

## ⚙️ Service

Se utiliza para encapsular lógica reutilizable, comunicación con APIs, estado compartido, etc.

Ejemplos:

```typescript
UsersService
AuthService
StorageService
```

---

## 🛠️ Utilitario

Normalmente es una función o conjunto de funciones **puras y genéricas** que no necesitan depender de Angular.

Ejemplo:

```typescript
formatDate()
calculateAge()
capitalize()
isValidEmail()
```

### 🗣️ Entrevista

> "El componente está orientado a la UI, el servicio encapsula lógica o dependencias que quiero reutilizar y un utilitario normalmente contiene funciones genéricas, idealmente puras, que no necesitan depender del framework."

---

# 🔹 ¿Dónde colocarías la lógica de negocio?

Depende del tipo de lógica.

No pondría toda la lógica automáticamente en un servicio.

| Tipo de lógica                | Lugar recomendado        |
| ----------------------------- | ------------------------ |
| 🎨 UI logic                   | Component                |
| ♻️ Reusable application logic | Service / domain utility |
| 🔐 Business rules críticas    | Backend                  |

Ejemplo:

```text
UI logic
    ↓
Component

Reusable application logic
    ↓
Service / domain utility

Business rules críticas
    ↓
Backend
```

En una aplicación frontend podemos tener lógica de negocio que sea necesaria para la experiencia:

```text
calcular totales
transformar datos
determinar estados visuales
```

Pero las **reglas de seguridad y autorización reales** deben estar en el backend.

### 🗣️ Respuesta de entrevista

> "Intentaría mantener la lógica de presentación en los componentes y extraer lógica reutilizable o de aplicación a servicios o funciones específicas. Las reglas de negocio críticas y que afectan a la seguridad o integridad de los datos deben validarse también en el backend."

> 🔥 **CONEXIÓN IMPORTANTE**
>
> Esta idea conecta directamente con autenticación, JWT y seguridad en aplicaciones Angular.

# 🔹 ¿Cómo organizarías un proyecto Angular grande?

Evitaría tener una estructura basada únicamente en tipos:

```text
components/
services/
pipes/
interfaces/
```

con cientos de archivos dentro.

> 💡 **TIP**
>
> Para proyectos grandes suele ser más mantenible organizar por **features o dominios**.

Ejemplo:

```text
src/
└── app/
    ├── core/
    │   ├── auth/
    │   ├── interceptors/
    │   └── guards/
    │
    ├── shared/
    │   ├── components/
    │   ├── directives/
    │   └── pipes/
    │
    ├── features/
    │   ├── users/
    │   │   ├── components/
    │   │   ├── services/
    │   │   ├── models/
    │   │   └── pages/
    │   │
    │   └── orders/
    │       ├── components/
    │       ├── services/
    │       └── pages/
    │
    └── app.routes.ts
```

| Carpeta         | Responsabilidad                                     |
| --------------- | --------------------------------------------------- |
| 🧱 **core**     | Elementos globales como auth, guards e interceptors |
| ♻️ **shared**   | Componentes, directivas y pipes reutilizables       |
| 🧩 **features** | Funcionalidades agrupadas por dominio               |

### 🗣️ Respuesta de entrevista

> "En una aplicación Angular grande prefiero una organización por features o dominios, manteniendo separadas responsabilidades globales como core y elementos reutilizables como shared. Dentro de cada feature agruparía los componentes, servicios, modelos y páginas relacionados."

> 💡 **Feature-based organization** es una idea muy importante.

---

# 🔹 ¿Cómo evitarías componentes demasiado grandes?

Si un componente empieza a hacer demasiadas cosas, buscaría separar responsabilidades.

❌ **Ejemplo:**

```text
UsersComponent
├── Tabla
├── Formulario
├── Filtros
├── Modal
├── HTTP
├── Transformaciones
├── Validaciones
└── 1000 líneas
```

✅ Podemos separar:

```text
UsersPage
├── UsersFilters
├── UsersTable
├── UserForm
└── UserDialog
```

Y extraer lógica:

```text
UsersService
UsersMapper
Validators
Utils
```

También puedo utilizar:

| Herramienta          | Uso                         |
| -------------------- | --------------------------- |
| 🧩 Componentes hijos | Separar UI                  |
| ⚙️ Servicios         | Extraer lógica reutilizable |
| 🔄 Pipes             | Transformaciones            |
| 📌 Directivas        | Comportamiento reutilizable |
| 🛠️ Funciones        | Lógica específica           |
| ⚡ Signals / RxJS     | Estado y reactividad        |

### 🗣️ Entrevista

> "Evitaría que un componente concentre demasiadas responsabilidades. Extraería componentes hijos para la UI, servicios para lógica reutilizable o comunicación externa y funciones o utilitarios para lógica específica que no dependa del componente."

---

# 🔹 ¿Cómo reutilizarías lógica?

Depende del tipo de lógica.

| Tipo de lógica      | Solución                |
| ------------------- | ----------------------- |
| 🎨 UI               | Componente reutilizable |
| 🔄 Transformación   | Pipe / función          |
| 📌 Comportamiento   | Directiva               |
| 📡 Estado / API     | Service                 |
| 🛠️ Lógica genérica | Utility                 |

Ejemplos:

| Necesidad             | Solución       |
| --------------------- | -------------- |
| Un botón reutilizable | Componente     |
| Formatear texto       | Pipe o función |
| Comunicación con API  | Servicio       |

### 🗣️ Entrevista

> "Primero identificaría qué tipo de lógica estoy reutilizando y elegiría la abstracción adecuada. Puede ser un componente, servicio, pipe, directiva o función utilitaria. Intentaría evitar abstraer algo hasta que exista una necesidad real de reutilización."

🔥 Aquí puedes conectar:

```text
DRY + KISS + YAGNI
```

---

# 🔹 ¿Cuándo crearías un servicio?

Crearía un servicio cuando necesito **encapsular lógica o dependencias que no deberían vivir directamente en un componente**, especialmente cuando esa lógica necesita reutilizarse.

Casos típicos:

```text
🌐 HTTP
🔐 Authentication
💾 Storage
📡 WebSocket
📊 Estado compartido
🧠 Lógica reutilizable
```

Ejemplo:

```typescript
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject(HttpClient);

  getUsers() {
    return this.http.get<User[]>('/api/users');
  }
}
```

### 🗣️ Entrevista

> "Crearía un servicio cuando necesito encapsular lógica reutilizable, comunicación con APIs, manejo de estado o alguna dependencia que no debería estar acoplada a la UI."

---

# 🔹 ¿Cuándo crearías un componente reutilizable?

Cuando existe una pieza de UI que:

* Se utiliza en varios lugares.
* Tiene comportamiento propio.
* Tiene una API clara mediante Inputs/Outputs.
* Puede funcionar independientemente de una página específica.

Ejemplos:

```text
<app-confirm-dialog>
<app-data-table>
<app-search-input>
<app-user-card>
```

Podemos diseñarlo:

```typescript
@Component({
  selector: 'app-user-card'
})
```

Y utilizarlo:

```html
<app-user-card
  [user]="user"
  (selected)="onUserSelected($event)">
</app-user-card>
```

### 🗣️ Entrevista

> "Crearía un componente reutilizable cuando una pieza de UI tiene un comportamiento claro y se utiliza en diferentes partes de la aplicación. Intentaría diseñarlo con una API sencilla mediante inputs y outputs."

---

# 🔹 ¿Cuándo crearías un custom pipe?

Cuando necesito transformar o presentar datos directamente en el template.

Ejemplo:

```text
"alo buuls"
      ↓
"Alo Buuls"
```

Creamos:

```typescript
@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe {
  transform(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
```

Uso:

```html
{{ name | capitalize }}
```

Buenos casos:

```text
Fechas
Monedas
Texto
Labels
Presentación de datos
```

### 🗣️ Entrevista

> "Crearía un custom pipe cuando necesito reutilizar una transformación de presentación en los templates. Intentaría mantener el pipe enfocado en transformación y evitaría colocar lógica de negocio compleja dentro de él."

> 🔥 **IMPORTANTE**
>
> **Pipe = presentación/transformación**
>
> No lugar para meter lógica de negocio.

---

# 🔹 ¿Cómo manejarías estado global?

Depende del tamaño y complejidad de la aplicación.

> 💡 **TIP**
>
> No utilizaría automáticamente una librería de estado para todo.

Para aplicaciones pequeñas:

```text
Service
+
Signals
```

puede ser suficiente.

Para aplicaciones más complejas:

```text
NgRx
NGXS
Akita
```

o diferentes patrones basados en Signals/RxJS.

Ejemplo con Signals:

```typescript
@Injectable({
  providedIn: 'root'
})
export class AuthState {

  private _user = signal<User | null>(null);

  user = this._user.asReadonly();

  setUser(user: User) {
    this._user.set(user);
  }
}
```

Los componentes pueden consumir:

```typescript
authState.user()
```

### 🗣️ Respuesta de entrevista

> "Elegiría la estrategia de estado dependiendo de la complejidad. Para estado simple y compartido, un servicio con Signals o RxJS puede ser suficiente. Si la aplicación tiene flujos de estado complejos, múltiples consumidores y muchas transiciones, podría utilizar una solución como NgRx. Intentaría no introducir una librería de estado global si realmente no es necesaria."

🔥 Esta última frase demuestra **criterio arquitectónico**.

---

# 🧠 RESUMEN GENERAL

```text
🏗️ ARQUITECTURA
│
├── 🧼 CLEAN CODE
│   └── Código claro y mantenible
│
├── 🧱 SOLID
│   ├── S → Single Responsibility
│   ├── O → Open/Closed
│   ├── L → Liskov
│   ├── I → Interface Segregation
│   └── D → Dependency Inversion
│
├── 🧩 PRINCIPIOS
│   ├── DRY  → evitar duplicación
│   ├── KISS → evitar complejidad
│   └── YAGNI → evitar construir de más
│
├── 🏛️ ARQUITECTURA
│   ├── Capas
│   └── Features / dominios
│
└── 🅰️ ANGULAR
    ├── Component → UI
    ├── Service → lógica/dependencias
    ├── Pipe → transformación/presentación
    ├── Directive → comportamiento
    └── Utility → funciones genéricas
```

---

# 🔥 LAS MÁS IMPORTANTES PARA UNA ENTREVISTA

Si quieres priorizar, estudiaría estas **8** primero:

## 1️⃣ ¿Qué es SOLID?

Especialmente:

```text
SRP
Dependency Inversion
```

---

## 2️⃣ ¿Qué es Separation of Concerns?

> Separar responsabilidades para reducir acoplamiento y mejorar mantenibilidad.

---

## 3️⃣ ¿DRY vs KISS vs YAGNI?

```text
DRY  → no repetir
KISS → no complicar
YAGNI → no construir lo innecesario
```

---

## 4️⃣ ¿Cómo organizarías un Angular grande?

> **Por features/dominios**, separando responsabilidades globales y reutilizables.

---

## 5️⃣ ¿Cómo evitarías componentes gigantes?

> Extraer componentes, servicios, pipes, directivas y funciones según la responsabilidad.

---

## 6️⃣ ¿Dónde colocarías la lógica de negocio?

> Depende de la responsabilidad; evitaría meterla toda en el componente y las reglas críticas deben validarse en backend.

---

## 7️⃣ ¿Cuándo crearías un servicio?

> Cuando necesito encapsular lógica, dependencias, API, estado o comportamiento reutilizable.

---

## 8️⃣ ¿Cómo manejarías estado global?

> Empezaría con la solución más simple que cubra la necesidad: servicio + Signals/RxJS; utilizaría una solución como NgRx cuando la complejidad realmente lo justifique.

---

# ⭐ IDEA SENIOR QUE TE CONVIENE RECORDAR

> **"No busco aplicar patrones o abstracciones porque sí. Primero identifico la responsabilidad y la complejidad real del problema, y después elijo la solución más simple que mantenga el código desacoplado, reutilizable y fácil de mantener."**

Eso es mucho más **senior** que responder:

```text
"siempre uso servicios"
"siempre uso NgRx"
"todo debe ser reutilizable"
```
