# 📘 PIPES EN ANGULAR

🧠 Pipes = filtros  
🧠 Es una “tubería” por donde pasa la data y se transforma

👉 Transforman datos en el HTML sin modificar el TypeScript

---

# 📘 🟢 ¿QUÉ SON LOS PIPES?

🧠 Son herramientas para formatear o transformar valores

👉 El dato entra → el pipe lo transforma → sale modificado

---

## 💡 Sintaxis

```html
{{ valor | pipe }}
```

---

## 💡 Ejemplo

```html
{{ nombre | uppercase }} {{ fecha | date }}
```

---

# 📘 🔵 TIPOS DE PIPES

🧠 Pipes más usados:

👉 uppercase → MAYÚSCULAS  
👉 lowercase → minúsculas  
👉 titlecase → Primera letra mayúscula  
👉 date → formatea fechas  
👉 currency → formato moneda  
👉 percent → porcentaje  
👉 json → muestra objetos

✨ TIP: Los pipes built-in son muy usados en UI porque evitan crear lógica innecesaria en el componente.

---

# 📘 🟣 PARÁMETROS EN PIPES

🧠 Puedes pasar parámetros

```html
{{ precio | currency:'USD' }} {{ fecha | date:'short' }}
```

👉 Personalizan la transformación

✨ TIP: Cada pipe puede tener múltiples formatos según el parámetro (muy útil en `date` y `currency`).

---

# 📘 🟡 ENCADENAR PIPES

🧠 Puedes usar varios pipes

```html
{{ nombre | lowercase | uppercase }}
```

👉 Se ejecutan de izquierda a derecha

---

# 📘 🟠 PIPES PERSONALIZADOS (PRO)

🧠 Puedes crear tus propios pipes

```bash
ng generate pipe miPipe
```

👉 Útil para lógica reutilizable en la vista

✨ TIP: Si repites lógica de formato en varios componentes, probablemente debería ser un pipe.

---

# 📘 🔴 ¿PARA QUÉ SIRVEN?

🎯 Beneficios:

✔ Formatear datos fácilmente  
✔ Mantener limpio el HTML  
✔ Evitar lógica en el template  
✔ Reutilizar transformaciones

---

# ⚠️ COSAS IMPORTANTES

🧠 No modifican el valor original  
🧠 Solo transforman la visualización  
🧠 Se usan solo en el HTML  
🧠 Evita lógica compleja en pipes

---

# ✨ RESUMEN

🧠 Pipes = filtros de datos

👉 Se usan con |  
👉 Transforman valores en el HTML  
👉 No afectan el TypeScript

👉 Hacen la UI más clara y limpia 🚀

# 📘 DECORADOR @Pipe EN ANGULAR

🧠 @Pipe es un decorador que define un pipe en Angular

👉 Permite transformar datos en el HTML de forma sencilla

---

# 📘 🟢 ¿QUÉ HACE @Pipe?

🧠 Le dice a Angular:

✔ Que la clase es un pipe  
✔ Cómo se llama el pipe en el HTML

💡 Ejemplo:

```ts
@Pipe({
  name: 'date'
})
```

✨ TIP: El nombre debe ser único en toda la aplicación para evitar conflictos.

---

# 📘 🔵 PROPIEDAD CLAVE

## 📌 name

🧠 Nombre del pipe

👉 Es el identificador que usas en el template

💡 Ejemplo:

```html
{{ fecha | date }}
```

---

# 📘 🟣 ¿CÓMO FUNCIONA?

🧠 Un pipe recibe un valor, lo transforma y devuelve un nuevo valor

👉 Flujo: Entrada → Transformación → Salida

---

# 📘 🟡 EJEMPLO DE PIPE PERSONALIZADO

🧠 TypeScript:

```ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas',
})
export class MayusculasPipe implements PipeTransform {
  transform(valor: string): string {
    return valor.toUpperCase();
  }
}
```

🧠 HTML:

```html
{{ nombre | mayusculas }}
```

✨ TIP: Los pipes personalizados se usan mucho para formateo consistente en toda la app, evita repetir lógica en múltiples componentes.

---

# 📘 🟠 PIPE BUILT-IN (date)

🧠 Angular ya trae varios pipes integrados, como:

✔ date → formatea fechas  
✔ uppercase → mayúsculas  
✔ lowercase → minúsculas  
✔ currency → moneda  
✔ json → mostrar objetos

💡 Ejemplo:

```html
{{ fecha | date:'short' }}
```

---

# 📘 🔴 PARÁMETROS EN PIPES

🧠 Puedes enviar argumentos al pipe para personalizar la transformación

💡 Ejemplo:

```html
{{ fecha | date:'fullDate' }}
```

👉 Observación: Cada pipe tiene parámetros específicos según su funcionalidad.

---

# 📘 ⚫ REGISTRO DEL PIPE

🧠 Todo pipe debe declararse en un módulo para que Angular lo reconozca

💡 Ejemplo:

```ts
@NgModule({
  declarations: [MayusculasPipe],
})
export class SharedModule {}
```

✨ TIP: Decláralos en módulos compartidos (SharedModule) si los vas a usar en varios componentes.

---

# 📘 ⚪ PURE VS IMPURE

🧠 Por defecto los pipes son **pure**, se ejecutan solo cuando el valor de entrada cambia

💡 Opcional: `impure: true` para ejecutar en cada cambio de la vista

```ts
@Pipe({
  name: 'miPipe',
  pure: false
})
```

⚠️ Cuidado: pipes impuros pueden afectar el rendimiento si se usan mucho.

---

# ⚠️ COSAS IMPORTANTES

🧠 `name` → identificador del pipe  
🧠 Se usa con `|` en templates  
🧠 No modifica el valor original  
🧠 Debe declararse en un NgModule

---

# ✨ RESUMEN

🧠 @Pipe = define un pipe en Angular

✔ name → cómo usarlo en HTML  
✔ transform → lógica del pipe  
✔ Se aplica con `|`

👉 Permite transformar datos directamente en el template de manera reutilizable

🚀 Clave para mantener la UI limpia y consistente
