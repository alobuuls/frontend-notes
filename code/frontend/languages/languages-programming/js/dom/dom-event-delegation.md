# 📘 Delegación de Eventos (Event Delegation)

> 🧠 La delegación de eventos es una técnica donde se coloca **un solo event listener en un elemento padre** para manejar eventos de sus hijos.

---

# 🧠 ¿Por qué se usa?

## ✔️ Ventajas

- Mejora el rendimiento
- Evita múltiples event listeners
- Funciona con elementos dinámicos
- Más fácil de mantener

👉 Es una técnica clave en aplicaciones con muchos elementos dinámicos.

---

# 📗 `closest()`

## 🧠 Definición

Busca el elemento más cercano que coincida con un selector, incluyendo:

- El propio elemento
- Sus elementos padres

---

## 🧪 Ejemplo

```js
document.addEventListener('click', (e) => {
  const button = e.target.closest('.btn');

  if (button) {
    console.log('Click en botón o hijo del botón');
  }
});
```

---

## 🧠 Idea clave

👉 Sirve para detectar clicks dentro de un elemento aunque el click ocurra en un hijo.

---

# 📗 `matches()`

## 🧠 Definición

Verifica si el elemento **coincide directamente** con un selector.

---

## 🧪 Ejemplo

```js
document.addEventListener('click', (e) => {
  if (e.target.matches('.btn')) {
    console.log('Click directo en botón');
  }
});
```

---

## 🧠 Idea clave

👉 Solo valida el elemento exacto que disparó el evento.

---

# 📗 Diferencia Clave

| Método      | Comportamiento                    |
| ----------- | --------------------------------- |
| `closest()` | Busca en el elemento y sus padres |
| `matches()` | Verifica SOLO el elemento actual  |

---

# 📗 Casos de Uso

## ✔️ Cuándo usar cada uno

- `matches()` → cuando el evento debe venir directamente del elemento
- `closest()` → cuando el click puede venir de hijos
- Delegación de eventos → usar en elementos dinámicos
- Validación exacta → `matches()`

---

# 📗 Ejemplo Real 🔥

```js
document.body.addEventListener('click', (e) => {
  const item = e.target.closest('.item');

  if (!item) return;

  console.log('Elemento clickeado:', item);
});
```

👉 Un solo listener maneja múltiples elementos dinámicamente.

---

# ⚠️ Regla Rápida

- 👉 `matches()` → “¿soy este elemento?”
- 👉 `closest()` → “encuentra el padre más cercano”
- 👉 Delegación → un solo listener para muchos elementos

---

# 🚀 Resumen

## 🧠 Delegación de eventos

Permite manejar múltiples elementos con un solo listener.

### ✔️ Herramientas clave

- `closest()` → detecta el contenedor correcto
- `matches()` → valida el elemento exacto

👉 Es una técnica fundamental para optimizar eventos en aplicaciones web dinámicas 🚀
