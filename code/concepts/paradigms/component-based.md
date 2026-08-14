# 🧩 8. PARADIGMA BASADO EN COMPONENTES

El desarrollo **basado en componentes** organiza una aplicación como un conjunto de **componentes independientes, reutilizables y componibles**.

```text
Application
      │
 ┌────┼────┐
 ▼    ▼    ▼
Header Main Footer
       │
   ┌───┴───┐
   ▼       ▼
 Card    Button
```

Un componente normalmente encapsula:

```text
Component
├── UI / Template
├── Logic
└── State
```

Por ejemplo:

```text
UserCard
├── Template
├── TypeScript
├── Styles
└── State
```

---

## ♻️ Reutilización

Puedes utilizar el mismo componente varias veces:

```text
UserCard
   │
   ├── User 1
   ├── User 2
   └── User 3
```

Angular:

```html
<app-user-card />
```

React:

```tsx
<UserCard />
```

---

## 🧱 Composición

Los componentes pueden componerse:

```text
App
 │
 ├── Header
 ├── Sidebar
 └── Content
       │
       ├── UserList
       │     └── UserCard
       │
       └── Pagination
```

### 🧠 Características

* modularidad
* reutilización
* composición
* encapsulación
* separación de responsabilidades

### 📌 Idea principal

> **Component-Based = construir aplicaciones mediante piezas reutilizables y componibles.**

⚠️ Técnicamente, **no todos los autores consideran component-based un paradigma de programación formal**. Es más común encontrarlo descrito como un modelo de diseño o arquitectura. Aun así, para frontend es fundamental.

---