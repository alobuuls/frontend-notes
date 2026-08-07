# 🎨 IONIC UI COMPONENTS

Los **Ionic UI Components** son componentes visuales que Ionic proporciona para construir la interfaz de una aplicación.

La ventaja principal es que no necesitas crear desde cero elementos como botones, inputs, listas, tarjetas, headers o layouts.

> [!NOTE]
> Los componentes de Ionic utilizan elementos HTML personalizados como `<ion-button>`, `<ion-input>` o `<ion-list>`, pero están diseñados específicamente para interfaces de aplicaciones.

---

# 📑 ÍNDICE — 🎨 IONIC UI COMPONENTS

- [🎨 IONIC UI COMPONENTS](#-ionic-ui-components)
- [📑 ÍNDICE — 🎨 IONIC UI COMPONENTS](#-índice---ionic-ui-components)
- [1️⃣ 🧱 COMPONENTES DE IONIC](#1️⃣--componentes-de-ionic)
- [2️⃣ 🏗️ ESTRUCTURA DE UNA PANTALLA](#2️⃣-️-estructura-de-una-pantalla)
    - [📌 Componentes principales](#-componentes-principales)
- [3️⃣ 📐 LAYOUT Y DISEÑO RESPONSIVE](#3️⃣--layout-y-diseño-responsive)
  - [📊 TABLA — LAYOUT](#-tabla--layout)
    - [Ejemplo](#ejemplo)
    - [📱 Responsive](#-responsive)
- [4️⃣ 📋 LISTAS](#4️⃣--listas)
  - [📊 TABLA — LISTAS](#-tabla--listas)
    - [Ejemplo](#ejemplo-1)
- [5️⃣ 📝 FORMULARIOS](#5️⃣--formularios)
  - [📊 TABLA — FORMULARIOS](#-tabla--formularios)
    - [📌 `ion-input`](#-ion-input)
    - [📌 `ion-select`](#-ion-select)
    - [📌 `ion-checkbox`](#-ion-checkbox)
    - [📌 `ion-toggle`](#-ion-toggle)
    - [📌 `ion-radio`](#-ion-radio)
- [6️⃣ 🧩 COMPONENTES DE UI](#6️⃣--componentes-de-ui)
  - [📊 TABLA — COMPONENTES PRINCIPALES](#-tabla--componentes-principales)
  - [🔘 `ion-button`](#-ion-button)
  - [🃏 `ion-card`](#-ion-card)
- [🧠 RESUMEN PARA ESTUDIAR](#-resumen-para-estudiar)
    - [🎯 Regla mental](#-regla-mental)

# 1️⃣ 🧱 COMPONENTES DE IONIC

Ionic proporciona una gran cantidad de componentes reutilizables para construir interfaces.

Se pueden agrupar según su función:

| Categoría      | Componentes                                                          |
| -------------- | -------------------------------------------------------------------- |
| 🏗️ Estructura | `ion-header`, `ion-toolbar`, `ion-content`, `ion-footer`             |
| 📐 Layout      | `ion-grid`, `ion-row`, `ion-col`                                     |
| 📋 Listas      | `ion-list`, `ion-item`                                               |
| 📝 Formularios | `ion-input`, `ion-select`, `ion-checkbox`, `ion-toggle`, `ion-radio` |
| 🧩 UI          | `ion-button`, `ion-card`                                             |
| 🧭 Navegación  | `ion-menu`, `ion-tabs`, `ion-tab-bar`, `ion-back-button`             |
| 🔔 Feedback    | `ion-alert`, `ion-toast`, `ion-loading`                              |
| 🪟 Overlays    | `ion-modal`, `ion-popover`, `ion-action-sheet`                       |
| 📅 Selección   | `ion-datetime`, `ion-picker`                                         |
| 🔄 Interacción | `ion-range`, `ion-segment`, `ion-searchbar`                          |

---

# 2️⃣ 🏗️ ESTRUCTURA DE UNA PANTALLA

Una pantalla de Ionic normalmente se estructura utilizando componentes como:

```html
<ion-header>
  <ion-toolbar>
    <ion-title>Home</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <!-- Contenido de la página -->
</ion-content>

<ion-footer>
  <!-- Elementos inferiores -->
</ion-footer>
```

La estructura conceptual sería:

```text
📱 Pantalla
│
├── 🏷️ Header
│   └── Toolbar
│
├── 📄 Content
│   └── Contenido principal
│
└── 🔻 Footer
```

### 📌 Componentes principales

| Componente    | ¿Para qué sirve?                               |
| ------------- | ---------------------------------------------- |
| `ion-header`  | Zona superior de la pantalla                   |
| `ion-toolbar` | Barra que contiene títulos, botones y acciones |
| `ion-content` | Contenido principal y área desplazable         |
| `ion-footer`  | Zona inferior de la pantalla                   |

---

# 3️⃣ 📐 LAYOUT Y DISEÑO RESPONSIVE

Ionic incluye un sistema de layout basado en **12 columnas**, similar a otros sistemas de grid.

Los componentes principales son:

```text
ion-grid
   ↓
ion-row
   ↓
ion-col
```

---

## 📊 TABLA — LAYOUT

| Componente | ¿Qué es?            | ¿Para qué sirve?                        | Ejemplo      |
| ---------- | ------------------- | --------------------------------------- | ------------ |
| `ion-grid` | Contenedor del grid | Organiza el layout en filas y columnas  | `<ion-grid>` |
| `ion-row`  | Fila del grid       | Agrupa columnas horizontalmente         | `<ion-row>`  |
| `ion-col`  | Columna del grid    | Define el espacio que ocupa un elemento | `<ion-col>`  |

### Ejemplo

```html
<ion-grid>
  <ion-row>
    <ion-col>
      Columna 1
    </ion-col>

    <ion-col>
      Columna 2
    </ion-col>
  </ion-row>
</ion-grid>
```

Visualmente:

```text
┌──────────────────────────────┐
│           ion-grid           │
│ ┌────────────┐ ┌───────────┐ │
│ │  ion-col   │ │  ion-col  │ │
│ │     1      │ │     2     │ │
│ └────────────┘ └───────────┘ │
└──────────────────────────────┘
```

### 📱 Responsive

Puedes indicar diferentes tamaños según el dispositivo:

```html
<ion-col size="12" size-md="6">
  Contenido
</ion-col>
```

Significa:

```text
📱 Móvil
12 columnas → 100% del ancho

💻 Pantalla mediana+
6 columnas → 50% del ancho
```

---

# 4️⃣ 📋 LISTAS

Las listas son uno de los patrones más utilizados en aplicaciones móviles.

Ionic proporciona principalmente:

```text
ion-list
    ↓
ion-item
```

---

## 📊 TABLA — LISTAS

| Componente | ¿Qué es?            | ¿Para qué sirve?                 |
| ---------- | ------------------- | -------------------------------- |
| `ion-list` | Contenedor de lista | Agrupa elementos relacionados    |
| `ion-item` | Elemento individual | Representa cada fila de la lista |

### Ejemplo

```html
<ion-list>

  <ion-item>
    <ion-label>Angular</ion-label>
  </ion-item>

  <ion-item>
    <ion-label>Ionic</ion-label>
  </ion-item>

  <ion-item>
    <ion-label>TypeScript</ion-label>
  </ion-item>

</ion-list>
```

Resultado conceptual:

```text
┌─────────────────────┐
│ Angular             │
├─────────────────────┤
│ Ionic               │
├─────────────────────┤
│ TypeScript          │
└─────────────────────┘
```

---

# 5️⃣ 📝 FORMULARIOS

Ionic proporciona componentes especializados para crear formularios adaptados a dispositivos móviles.

## 📊 TABLA — FORMULARIOS

| Componente     | ¿Qué representa? | ¿Para qué sirve?                          | Ejemplo          |
| -------------- | ---------------- | ----------------------------------------- | ---------------- |
| `ion-input`    | Campo de entrada | Texto, email, password, números, etc.     | `<ion-input>`    |
| `ion-select`   | Selector         | Permite seleccionar una opción            | `<ion-select>`   |
| `ion-checkbox` | Casilla          | Seleccionar/deseleccionar una opción      | `<ion-checkbox>` |
| `ion-toggle`   | Interruptor      | Activar/desactivar una opción             | `<ion-toggle>`   |
| `ion-radio`    | Opción única     | Seleccionar una opción dentro de un grupo | `<ion-radio>`    |

---

### 📌 `ion-input`

Campo utilizado para introducir información.

```html
<ion-input
  label="Nombre"
  placeholder="Introduce tu nombre">
</ion-input>
```

Puede utilizarse para diferentes tipos:

```html
<ion-input type="email"></ion-input>

<ion-input type="password"></ion-input>

<ion-input type="number"></ion-input>
```

---

### 📌 `ion-select`

Permite seleccionar una opción de una lista.

```html
<ion-select label="País">
  <ion-select-option value="co">
    Colombia
  </ion-select-option>

  <ion-select-option value="mx">
    México
  </ion-select-option>
</ion-select>
```

---

### 📌 `ion-checkbox`

Representa una opción que puede estar seleccionada o no.

```html
<ion-checkbox>
  Acepto los términos
</ion-checkbox>
```

Conceptualmente:

```text
☐ No seleccionado

☑ Seleccionado
```

---

### 📌 `ion-toggle`

Se utiliza para activar o desactivar una configuración.

```html
<ion-toggle>
  Notificaciones
</ion-toggle>
```

Conceptualmente:

```text
🔴 OFF  →  🟢 ON
```

---

### 📌 `ion-radio`

Permite seleccionar una opción dentro de un grupo.

```html
<ion-radio-group>

  <ion-radio value="male">
    Masculino
  </ion-radio>

  <ion-radio value="female">
    Femenino
  </ion-radio>

</ion-radio-group>
```

Conceptualmente:

```text
◯ Masculino
● Femenino
```

---

# 6️⃣ 🧩 COMPONENTES DE UI

Son componentes visuales utilizados para construir la interfaz general de la aplicación.

## 📊 TABLA — COMPONENTES PRINCIPALES

| Componente    | ¿Qué es?  | ¿Para qué sirve?                         | Uso típico                     |
| ------------- | --------- | ---------------------------------------- | ------------------------------ |
| `ion-button`  | Botón     | Ejecutar acciones                        | Guardar, eliminar, enviar      |
| `ion-card`    | Tarjeta   | Agrupar información visual               | Productos, perfiles, posts     |
| `ion-header`  | Cabecera  | Zona superior de la pantalla             | Título y acciones              |
| `ion-toolbar` | Barra     | Contenedor de acciones del header/footer | Título, botones                |
| `ion-content` | Contenido | Área principal de la pantalla            | Formularios, listas, contenido |
| `ion-footer`  | Pie       | Zona inferior                            | Navegación, acciones           |

---

## 🔘 `ion-button`

Representa un botón.

```html
<ion-button>
  Guardar
</ion-button>
```

Puede tener diferentes estilos:

```html
<ion-button fill="solid">
  Guardar
</ion-button>

<ion-button fill="outline">
  Cancelar
</ion-button>

<ion-button fill="clear">
  Más
</ion-button>
```

---

## 🃏 `ion-card`

Permite agrupar información dentro de una tarjeta.

```html
<ion-card>

  <ion-card-header>
    <ion-card-title>
      Angular
    </ion-card-title>
  </ion-card-header>

  <ion-card-content>
    Framework para aplicaciones web.
  </ion-card-content>

</ion-card>
```

Es especialmente útil para:

* 👤 Perfiles.
* 🛍️ Productos.
* 📰 Noticias.
* 📊 Información.
* 📸 Contenido visual.

---

# 🧠 RESUMEN PARA ESTUDIAR

| Categoría      | Componentes principales                                              | Idea clave                                    |
| -------------- | -------------------------------------------------------------------- | --------------------------------------------- |
| 🏗️ Estructura | `ion-header`, `ion-toolbar`, `ion-content`, `ion-footer`             | Construyen la estructura de una pantalla      |
| 📐 Layout      | `ion-grid`, `ion-row`, `ion-col`                                     | Organizan el contenido                        |
| 📋 Listas      | `ion-list`, `ion-item`                                               | Crean listas de elementos                     |
| 📝 Formularios | `ion-input`, `ion-select`, `ion-checkbox`, `ion-toggle`, `ion-radio` | Permiten introducir y seleccionar información |
| 🧩 UI          | `ion-button`, `ion-card`                                             | Construyen elementos visuales e interactivos  |

### 🎯 Regla mental

```text
📱 PANTALLA
│
├── 🏗️ Estructura
│   ├── ion-header
│   ├── ion-toolbar
│   ├── ion-content
│   └── ion-footer
│
├── 📐 Layout
│   ├── ion-grid
│   ├── ion-row
│   └── ion-col
│
├── 📋 Listas
│   ├── ion-list
│   └── ion-item
│
├── 📝 Formularios
│   ├── ion-input
│   ├── ion-select
│   ├── ion-checkbox
│   ├── ion-toggle
│   └── ion-radio
│
└── 🧩 UI
    ├── ion-button
    └── ion-card
```

> [!TIP]
> No memorices los componentes como una lista aislada. Piensa en **qué problema visual resuelve cada uno**: `ion-grid` organiza, `ion-list` agrupa, `ion-input` recibe datos, `ion-button` ejecuta acciones y `ion-card` presenta información.
