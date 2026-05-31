# 📘 SNIPPETS EN VISUAL STUDIO CODE


> 🧠 Un Snippet es una plantilla de código reutilizable.

> 👉 Permite escribir código rápidamente usando atajos.

---

## 🎯 Objetivo

✔ Ahorrar tiempo

✔ Evitar repetir código

✔ Mantener consistencia

✔ Aumentar productividad

---

# 📘 🟢 ¿QUÉ ES UN SNIPPET?

### 🧠 Definición

Es un fragmento de código que se genera automáticamente.

👉 Escribes una palabra clave (**prefix**).

👉 VS Code expande el código completo.

---

### 💡 Ejemplo

Escribes:

```txt
alo
```

Presionas:

```txt
TAB
```

Resultado:

```js
function ejemplo() {
  return true;
}
```

### ✨ Tip

Los snippets son especialmente útiles cuando escribes estructuras repetitivas como funciones, componentes, clases, interfaces o bloques HTML.

---

# 📘 🔵 ¿PARA QUÉ SIRVEN?

✔ Crear componentes Angular

✔ Crear servicios

✔ Crear interfaces

✔ Crear clases

✔ Crear estructuras repetitivas

✔ Crear templates HTML

👉 Todo lo que repitas frecuentemente.

---

### ✨ Tip

Mientras más código repitas durante el día, más valor obtendrás creando snippets personalizados para automatizarlo.

---

# 📘 🟣 ESTRUCTURA DE UN SNIPPET

### 💡 Ejemplo

```json
{
  "Mi Snippet": {
    "prefix": "alo",
    "body": [
      "console.log('$1');"
    ],
    "description": "Mi primer snippet"
  }
}
```

---

## 📌 Partes

### 🧠 Nombre

```json
"Mi Snippet"
```

👉 Nombre interno.

---

### 🧠 prefix

```json
"prefix": "alo"
```

👉 Lo que escribirás para activarlo.

---

### 🧠 body

```json
"body": []
```

👉 Código que se insertará.

---

### 🧠 description

```json
"description": ""
```

👉 Texto descriptivo.

---

### ✨ Tip

Utiliza nombres y descripciones claras para identificar rápidamente tus snippets cuando VS Code muestre sugerencias de autocompletado.

---

## 🎯 Resumen Rápido

| Concepto    | Función                            |
| ----------- | ---------------------------------- |
| Nombre      | Identifica internamente el snippet |
| prefix      | Palabra que activa el snippet      |
| body        | Código que será insertado          |
| description | Descripción mostrada por VS Code   |

---

## ⚠️ Cosas Importantes

✔ El `prefix` debe ser fácil de recordar.

✔ El `body` puede contener múltiples líneas.

✔ Un snippet puede incluir cursores y posiciones dinámicas.

✔ Los snippets ayudan a escribir código más rápido y con menos errores.

✔ Son ideales para automatizar tareas repetitivas.

---

# 📘 🟡 ¿DÓNDE SE CREAN?

### 🧠 En VS Code

### 💡 Ruta

```txt
File
  → Preferences
  → Configure User Snippets
```

👉 Crear:

```txt
javascript.json
typescript.json
html.json
angular.json
```

👉 O un archivo global.

---

### ✨ Tip

Utiliza archivos específicos por lenguaje cuando el snippet solo aplique a un tipo de archivo. Esto mantiene mejor organizados tus snippets.

---

# 📘 🟠 CÓMO USARLOS

### 🧠 Pasos

### 1️⃣ Escribir el prefix

```txt
alo
```

### 2️⃣ Presionar TAB

o

```txt
ENTER
```

### 3️⃣ VS Code genera el código

---

### ✨ Tip

Si tienes activado IntelliSense, VS Code mostrará sugerencias del snippet incluso antes de presionar TAB.

---

# 📘 🔴 PLACEHOLDERS ($1, $2, $3...)

### 🧠 Qué son

Son posiciones del cursor.

---

### 💡 Ejemplo

```json
{
  "funcion": {
    "prefix": "fn",
    "body": [
      "function $1($2) {",
      "  return $3;",
      "}"
    ]
  }
}
```

### 💡 Resultado

```js
function nombre(parametro) {
  return valor;
}
```

---

### 👉 TAB mueve el cursor

```txt
$1 → primer campo
$2 → segundo campo
$3 → tercero
```

---

### ✨ Tip

Organiza los placeholders en el orden natural en que normalmente escribirías el código para trabajar más rápido.

---

# 📘 ⚫ PLACEHOLDERS CON VALORES POR DEFECTO

### 🧠 Qué son

Puedes sugerir texto inicial.

---

### 💡 Ejemplo

```txt
"${1:Hero}"
```

### 💡 Resultado

```txt
Hero
```

👉 El usuario puede reemplazarlo.

---

### ✨ Tip

Los valores por defecto son ideales para nombres de clases, componentes, interfaces o funciones que suelen seguir una estructura común.

---

# 📘 ⚪ EJEMPLO REAL

### 💡 Snippet

```json
{
  "Hero": {
    "prefix": "hero",
    "body": [
      "class ${1:Hero} {",
      "  constructor($2) {",
      "    console.log('${3:Hero}')",
      "  }",
      "",
      "  get data() {",
      "    return $4;",
      "  }",
      "}"
    ]
  }
}
```

### 💡 Resultado

```js
class Hero {
  constructor() {
    console.log('Hero')
  }

  get data() {
    return null;
  }
}
```

---

### ✨ Tip

Combinar placeholders con valores por defecto permite generar estructuras completas listas para personalizar en segundos.

---

## 🎯 Resumen Rápido

| Elemento     | Función                           |
| ------------ | --------------------------------- |
| `$1`         | Primera posición del cursor       |
| `$2`         | Segunda posición del cursor       |
| `$3`         | Tercera posición del cursor       |
| `${1:texto}` | Placeholder con valor por defecto |
| `TAB`        | Navega entre placeholders         |
| `ENTER`      | Puede aceptar el snippet sugerido |

---

## ⚠️ Cosas Importantes

✔ Los placeholders permiten editar múltiples partes del código rápidamente.

✔ El cursor avanzará siguiendo el orden numérico de los placeholders.

✔ Puedes combinar placeholders simples y placeholders con valores por defecto.

✔ Los snippets complejos pueden generar clases, componentes y estructuras completas.

✔ Cuanto mejor diseñes los placeholders, más rápido será tu flujo de trabajo.

---

# 📘 🟤 VARIABLES ESPECIALES

### 🧠 Qué son

VS Code tiene variables integradas.

---

### 💡 Ejemplos

```txt id="hwp2k7"
$TM_FILENAME
$TM_FILENAME_BASE
$CURRENT_YEAR
$CURRENT_MONTH
$CURRENT_DATE
```

---

### 💡 Ejemplo

```json id="h4a1pn"
{
  "fecha": {
    "prefix": "today",
    "body": [
      "$CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE"
    ]
  }
}
```

---

### ✨ Tip

Las variables integradas son muy útiles para generar automáticamente fechas, nombres de archivos y otros valores dinámicos sin tener que escribirlos manualmente.

---

# 📘 🟢 CURSOR FINAL ($0)

### 🧠 Qué es

Define dónde termina el cursor.

---

### 💡 Ejemplo

```json id="p5w6mx"
{
  "console": {
    "prefix": "cl",
    "body": [
      "console.log($1);",
      "$0"
    ]
  }
}
```

---

### 👉 Comportamiento

Después del último TAB, el cursor queda en:

```txt id="7jm2dn"
$0
```

---

### ✨ Tip

Utiliza `$0` para dejar el cursor exactamente donde continuarás escribiendo después de completar todos los placeholders.

---

# 📘 🔵 MÚLTIPLES CURSORES

### 🧠 Qué son

El mismo placeholder puede repetirse.

---

### 💡 Ejemplo

```txt id="8h3myr"
"${1:nombre}"

"${1:nombre}"
```

---

### 💡 Resultado

Si cambias uno,

se actualizan ambos.

---

### ✨ Tip

Esta característica es ideal cuando necesitas reutilizar el mismo nombre varias veces dentro de una clase, función, componente o archivo.

---

# 📘 🟣 EJEMPLO PARA ANGULAR COMPONENT

### 💡 Snippet

```json id="x5j7vb"
{
  "Angular Component": {
    "prefix": "acomp",
    "body": [
      "@Component({",
      "  selector: 'app-${1:nombre}',",
      "  templateUrl: './${1:nombre}.component.html',",
      "  styleUrls: ['./${1:nombre}.component.scss']",
      "})",
      "export class ${2:Nombre}Component {}"
    ]
  }
}
```

---

### ✨ Tip

Reutilizar el mismo placeholder (`${1:nombre}`) evita inconsistencias entre el selector, el HTML y los estilos del componente.

---

# 📘 🟡 EJEMPLO PARA SERVICE

### 💡 Snippet

```json id="9q6h3k"
{
  "service": {
    "prefix": "aservice",
    "body": [
      "@Injectable({",
      "  providedIn: 'root'",
      "})",
      "export class ${1:User}Service {",
      "",
      "}"
    ]
  }
}
```

---

### ✨ Tip

Los snippets para servicios permiten generar rápidamente la estructura base de Angular sin depender del CLI para casos simples o prototipos rápidos.

---

## 🎯 Resumen Rápido

| Elemento            | Función                                         |
| ------------------- | ----------------------------------------------- |
| `$TM_FILENAME`      | Nombre completo del archivo                     |
| `$TM_FILENAME_BASE` | Nombre del archivo sin extensión                |
| `$CURRENT_YEAR`     | Año actual                                      |
| `$CURRENT_MONTH`    | Mes actual                                      |
| `$CURRENT_DATE`     | Día actual                                      |
| `$0`                | Posición final del cursor                       |
| `${1:nombre}`       | Placeholder reutilizable                        |
| Repetir `${1}`      | Actualiza múltiples ubicaciones automáticamente |

---

## ⚠️ Cosas Importantes

✔ Las variables especiales son generadas automáticamente por VS Code.

✔ `$0` siempre representa la posición final del cursor.

✔ Un placeholder puede aparecer múltiples veces dentro del mismo snippet.

✔ Modificar una instancia de un placeholder compartido actualiza todas las demás.

✔ Los snippets son especialmente útiles para Angular, React, Vue y cualquier proyecto con estructuras repetitivas.

---


# 📘 🟠 CUÁNDO USAR SNIPPETS

### 🧠 Casos ideales

✔ Código repetitivo

✔ Estructuras frecuentes

✔ Angular

✔ React

✔ Node

✔ Testing

✔ Interfaces

---

### ❌ Cuándo NO usarlos

❌ Código que usarás una sola vez.

---

### ✨ Tip

Si copias y pegas el mismo bloque de código varias veces durante la semana, probablemente merece convertirse en un snippet.

---

# 📘 🔴 SNIPPETS PERSONALES VS EXTENSIONES

## 🧠 Personales

✔ Tú los creas

✔ Control total

---

## 🧠 Extensiones

✔ Angular Snippets

✔ JavaScript Snippets

✔ ES7 Snippets

👉 Ya vienen preconfigurados.

---

### ✨ Tip

Comienza utilizando extensiones populares y, a medida que identifiques patrones propios de trabajo, crea tus propios snippets personalizados.

---

# 📘 ⚫ BUENAS PRÁCTICAS

✔ Nombres cortos

✔ Prefix fáciles de recordar

✔ Reutilizar placeholders

✔ Crear snippets para tareas repetidas

✔ Agrupar por tecnología

---

### ✨ Tip

Mantener una convención de nombres consistente hace que los snippets sean más fáciles de descubrir y recordar.

---

# 📘 ⚪ ERRORES COMUNES

❌ Prefix muy largos

❌ Muchos snippets iguales

❌ No usar `$0`

❌ Saltarse placeholders

❌ Crear snippets innecesarios

---

### 👉 Observación

Un exceso de snippets puede terminar ralentizando el autocompletado y dificultando encontrar el correcto.

---

# 📘 🟤 TIPS PRO

🚀 Usa snippets para Angular Components

🚀 Usa snippets para servicios

🚀 Usa snippets para RxJS

🚀 Usa snippets para `console.log` de debugging

🚀 Usa snippets para estructuras HTML repetitivas

🚀 Crea un archivo de snippets por tecnología

---

### ✨ Tip

Los snippets generan más valor cuando automatizan estructuras complejas que normalmente requieren escribir muchas líneas de código.

---

# ⚠️ COSAS IMPORTANTES

### 🧠 Conceptos clave

| Elemento      | Función               |
| ------------- | --------------------- |
| `prefix`      | Palabra para activar  |
| `body`        | Código generado       |
| `description` | Descripción           |
| `$1 $2 $3`    | Posiciones del cursor |
| `$0`          | Posición final        |
| `${1:texto}`  | Valor por defecto     |

---

### 👉 Observación

Dominar estos elementos te permitirá crear prácticamente cualquier snippet que necesites.

---

# ✨ RESUMEN
****
> 🧠 Snippets = plantillas reutilizables de código.

---

### 📌 Elementos principales

👉 `prefix` → activador

👉 `body` → código generado

👉 `$1 $2 $3` → navegación con TAB

👉 `$0` → cursor **final**

👉 `${1:texto}` → valor por defecto

---

### 🎯 Idea Principal

👉 Son una de las herramientas más productivas de VS Code 🚀

---

## 🏆 Resumen Final del Tema

✔ Reducen la cantidad de código escrito manualmente.

✔ Aumentan la velocidad de desarrollo.

✔ Ayudan a mantener consistencia entre archivos.

✔ Permiten automatizar estructuras repetitivas.

✔ Son útiles en cualquier tecnología: Angular, React, Node, TypeScript, HTML, CSS y más.

✔ Combinados con placeholders y variables dinámicas, pueden generar código muy avanzado con pocas teclas.

---
