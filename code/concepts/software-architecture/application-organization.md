## 📚 ÍNDICE — MVC, MVVM Y LAYERED ARCHITECTURE

- [🏛️ 1. MVC — MODEL VIEW CONTROLLER](#️-1-mvc--model-view-controller)
  - [📦 Model](#-model)
  - [🖥️ View](#️-view)
  - [🎮 Controller](#-controller)
  - [🌐 Ejemplo backend](#-ejemplo-backend)
    - [💻 Dónde aparece](#-dónde-aparece)
- [🪟 2. MVVM — MODEL VIEW VIEWMODEL](#-2-mvvm--model-view-viewmodel)
  - [📦 Model](#-model-1)
  - [🖥️ View](#️-view-1)
  - [🧠 ViewModel](#-viewmodel)
  - [💻 Ejemplo conceptual](#-ejemplo-conceptual)
    - [💻 Relación con frontend](#-relación-con-frontend)
- [🧱 3. LAYERED ARCHITECTURE](#-3-layered-architecture)
  - [🎮 Presentation Layer](#-presentation-layer)
  - [🧠 Business Layer](#-business-layer)
  - [🗄️ Data Access Layer](#️-data-access-layer)
  - [🧩 Ejemplo Express](#-ejemplo-express)
    - [📌 Ventajas](#-ventajas)
- [🧠 RESUMEN](#-resumen)


# 🏛️ 1. MVC — MODEL VIEW CONTROLLER

**MVC** divide una aplicación en tres responsabilidades principales:

| 🧩 Componente     | 🎯 Responsabilidad                                |
| ----------------- | ------------------------------------------------- |
| 📦 **Model**      | Datos, estado y reglas relacionadas con los datos |
| 🖥️ **View**      | Presentación de la información                    |
| 🎮 **Controller** | Recibe acciones/requests y coordina la operación  |

```text
        Application
             │
     ┌───────┼───────┐
     ▼       ▼       ▼
   Model    View   Controller
```

---

## 📦 Model

Representa los:

* datos
* estado
* reglas relacionadas con los datos

```text
Model
 ├── User
 ├── Product
 └── Order
```

---

## 🖥️ View

Se encarga de presentar la información al usuario.

```text
Model
  ↓
View
  ↓
User
```

---

## 🎮 Controller

Recibe acciones o requests y coordina la operación.

```text
Request
   ↓
Controller
   ↓
Model
   ↓
Response / View
```

---

## 🌐 Ejemplo backend

```text
HTTP Request
     ↓
Controller
     ↓
Service / Model
     ↓
Database
     ↓
Controller
     ↓
HTTP Response
```

> 📌 **IDEA PRINCIPAL**
>
> **MVC = separar datos, presentación y coordinación.**

### 💻 Dónde aparece

* Express
* Laravel
* Django
* Ruby on Rails
* aplicaciones web tradicionales

---

# 🪟 2. MVVM — MODEL VIEW VIEWMODEL

**MVVM** significa:

```text
Model
View
ViewModel
```

Conceptualmente:

```text
        Model
          ▲
          │
          ▼
      ViewModel
          ▲
          │
          ▼
         View
```

| 🧩 Componente    | 🎯 Responsabilidad                           |
| ---------------- | -------------------------------------------- |
| 📦 **Model**     | Datos y lógica relacionada                   |
| 🖥️ **View**     | Interfaz que ve el usuario                   |
| 🧠 **ViewModel** | Estado y comportamiento que la View necesita |

---

## 📦 Model

Representa los datos y la lógica relacionada con ellos.

---

## 🖥️ View

La interfaz que ve el usuario.

---

## 🧠 ViewModel

Actúa como intermediario entre:

```text
View
 ↕
ViewModel
 ↕
Model
```

Contiene el estado y comportamiento que la View necesita.

---

## 💻 Ejemplo conceptual

```text
User
 ↓
ViewModel
 ↓
User Interface
```

En frontend moderno, muchas arquitecturas pueden tener características similares a MVVM.

> 📌 **IDEA PRINCIPAL**
>
> **MVVM = separar la interfaz de su estado y lógica de presentación mediante un ViewModel.**

### 💻 Relación con frontend

Puedes encontrar conceptos relacionados en:

* Angular
* Vue
* aplicaciones UI
* frameworks con data binding

> ⚠️ **IMPORTANTE**
>
> Angular no debe considerarse simplemente "un framework MVVM". Es más correcto decir que **comparte conceptos y patrones relacionados con MVVM**, especialmente por su binding y separación entre template y lógica.

---

# 🧱 3. LAYERED ARCHITECTURE

La **arquitectura en capas** divide una aplicación en diferentes niveles.

Una estructura típica:

```text
Presentation
      ↓
Business Logic
      ↓
Data Access
      ↓
Database
```

Por ejemplo:

```text
┌──────────────────────┐
│    Controller        │
├──────────────────────┤
│    Service           │
├──────────────────────┤
│    Repository        │
├──────────────────────┤
│    Database          │
└──────────────────────┘
```

---

## 🎮 Presentation Layer

Se ocupa de:

* HTTP
* Controllers
* UI
* Requests
* Responses

---

## 🧠 Business Layer

Contiene la lógica de negocio.

```text
UserService
OrderService
PaymentService
```

---

## 🗄️ Data Access Layer

Se comunica con sistemas externos de datos.

```text
Repository
     ↓
Database
```

---

## 🧩 Ejemplo Express

```text
Request
  ↓
Controller
  ↓
Service
  ↓
Repository
  ↓
PostgreSQL
```

### 📌 Ventajas

* separación de responsabilidades
* organización
* mantenimiento más sencillo
* testabilidad

> ⚠️ **POSIBLE PROBLEMA**
>
> Si se utiliza de manera excesivamente rígida, puede generar muchas capas y abstracciones innecesarias.

> 📌 **IDEA PRINCIPAL**
>
> **Layered Architecture = dividir el sistema en capas con responsabilidades diferentes.**

---

# 🧠 RESUMEN

| 🏛️ Patrón / Arquitectura | 🎯 Idea principal                                            |
| ------------------------- | ------------------------------------------------------------ |
| **MVC**                   | Separar datos, presentación y coordinación                   |
| **MVVM**                  | Separar interfaz, estado y lógica de presentación            |
| **Layered**               | Dividir el sistema en capas con responsabilidades diferentes |

> 💡 **TIP**
>
> **MVC y MVVM** se enfocan principalmente en cómo organizar responsabilidades alrededor de la interfaz y la interacción.
>
> **Layered Architecture** organiza la aplicación en capas según sus responsabilidades.
