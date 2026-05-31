# 📘 DOM (Document Object Model)

> 🧠 El DOM es la forma en que JavaScript puede **ver, acceder y modificar** una página HTML.

---

## 🧠 Qué es el DOM

- DOM = Document Object Model
- Es la **representación del HTML como objetos** que JavaScript puede manipular.

### Gracias al DOM, JavaScript puede:

- Leer elementos HTML
- Cambiar texto
- Cambiar estilos
- Escuchar eventos (clics, teclas, etc.)

---

## 🧠 Cómo funciona el DOM

1. El navegador lee el HTML.
2. Lo convierte en un **árbol de nodos**.
3. JavaScript interactúa con ese árbol.

---

## 🧠 Ejemplo mental

Imagina el HTML como un árbol:

```
html
└─ body
    └─ h1
    └─ p
    └─ button
```

JavaScript puede acceder a cada rama.

---

## 🧠 Acceder al DOM

- Se usa el objeto `document`.

```js
document.title; // título de la página
document.body; // cuerpo del HTML
```

---

## 🧠 Seleccionar elementos

- Antes de modificar, hay que seleccionarlos.

```js
const titulo = document.querySelector('h1');
```

---

## 🧠 Modificar elementos

```js
const titulo = document.querySelector('h1');
titulo.textContent = 'Hola DOM';
```

---

## 🧠 Ejemplo completo

### HTML

```html
<h1>Hola</h1>
```

### JavaScript

```js
const titulo = document.querySelector('h1');
titulo.textContent = 'Hola desde JavaScript';
```

---

## 🧠 Idea clave

> El DOM **conecta JavaScript con HTML**.  
> Sin el DOM, JavaScript no podría cambiar la página.

---

# 📘 Regla de oro del DOM 🧠

- Si ves `"Element"` en el nombre → ignora nodos de texto
- Si NO dice `"Element"` → incluye TODO (texto, comentarios, etc.)

---

# 📘 Events (Eventos del DOM)

> 🧠 Son acciones que ocurren en la página: clics, teclas, movimiento del mouse, envío de formularios, etc.

---

## 📗 `DOMContentLoaded`

- Se ejecuta cuando el HTML ya fue cargado y parseado.
- Ideal para empezar a usar el DOM sin errores.

```js
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM listo');
});
```

---

## 📗 Eventos del mouse

| Evento        | Descripción                  |
| ------------- | ---------------------------- |
| `mousedown`   | presionas el botón del mouse |
| `mouseup`     | sueltas el botón del mouse   |
| `mousemove`   | mueves el mouse              |
| `mouseenter`  | el mouse entra al elemento   |
| `mouseleave`  | el mouse sale del elemento   |
| `click`       | clic normal                  |
| `dblclick`    | doble clic                   |
| `contextmenu` | clic derecho                 |

---

## 📗 Eventos de foco

| Evento  | Descripción                 |
| ------- | --------------------------- |
| `focus` | cuando un input recibe foco |

---

## 🧠 Tip

- Siempre escucha `DOMContentLoaded` antes de manipular elementos para evitar errores.
- El DOM + Eventos = interactividad en tu página 🚀

# 📘 Eventos avanzados y propiedades del DOM

---

## 📗 Eventos de animaciones CSS

| Evento           | Descripción                  |
| ---------------- | ---------------------------- |
| `animationstart` | cuando empieza una animación |
| `animationend`   | cuando termina una animación |

---

## 📗 Eventos del teclado

| Evento    | Descripción                |
| --------- | -------------------------- |
| `keydown` | cuando presionas una tecla |
| `keyup`   | cuando sueltas una tecla   |

---

## 📗 Eventos de la ventana

| Evento   | Descripción                           |
| -------- | ------------------------------------- |
| `resize` | cuando cambia el tamaño de la ventana |
| `scroll` | cuando haces scroll                   |

---

## 📗 Eventos de formularios

| Evento   | Descripción                        |
| -------- | ---------------------------------- |
| `change` | cuando cambia el valor de un input |
| `submit` | cuando se envía un formulario      |

---

# 📘 Funciones de eventos

### `preventDefault()`

- 🧠 Evita el comportamiento por defecto del navegador
- 💡 Ejemplo: evitar que un formulario se envíe automáticamente

### `stopPropagation()`

- 🧠 Evita que el evento siga propagándose a elementos padres

```js
button.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
});
```

---

# 📘 Referenciar elementos HTML

| Método                                  | Descripción                                           |
| --------------------------------------- | ----------------------------------------------------- |
| `document.getElementById('el-id')`      | Obtiene un solo elemento por su ID                    |
| `document.querySelector('selector')`    | Devuelve el primer elemento que coincide              |
| `document.querySelectorAll('selector')` | Devuelve todos los elementos que coinciden (NodeList) |

---

# 📘 Obtener información de un elemento

| Propiedad / Método       | Descripción                           |
| ------------------------ | ------------------------------------- |
| `el.id`                  | Obtiene el id del elemento            |
| `el.className`           | Todas las clases como texto           |
| `el.getAttribute('alt')` | Valor de un atributo específico       |
| `el.textContent`         | Todo el texto, incluso oculto por CSS |
| `el.innerText`           | Solo el texto visible                 |
| `el.attributes`          | Todos los atributos del elemento      |
| `el.dataset`             | Atributos `data-*`                    |

---

# 📘 Propiedades de tamaño y estilo

| Propiedad / Método                                   | Descripción                            |
| ---------------------------------------------------- | -------------------------------------- |
| `el.naturalWidth` / `el.naturalHeight`               | Ancho y alto real de una imagen        |
| `clientWidth` / `clientHeight`                       | Incluye padding, no border             |
| `offsetWidth` / `offsetHeight`                       | Incluye padding + border               |
| `el.style.getPropertyValue('propiedad')`             | Obtiene estilos inline                 |
| `getComputedStyle(el).getPropertyValue('propiedad')` | Obtiene estilos finales (CSS completo) |
| `el.style.cssText`                                   | Todos los estilos inline como texto    |
| `getComputedStyle(el, '::after')`                    | Obtiene estilos de pseudoelementos     |

---

## 🧠 Tip clave

- `textContent` = todo el texto
- `innerText` = solo visible
- Usa `getComputedStyle` para conocer **estilos finales** calculados por CSS
- `dataset` es ideal para manejar atributos personalizados (`data-*`)

> Con esto, ya puedes leer, modificar, medir y reaccionar a cualquier elemento de la página 🚀

# 📘 Manipulación avanzada del DOM

---

## 📘 Agregar cosas a un elemento

| Método / Propiedad                | Descripción                         |
| --------------------------------- | ----------------------------------- |
| `el.classList.add('nueva-clase')` | Agrega una clase al elemento        |
| `el.setAttribute('alt', 'texto')` | Agrega o modifica un atributo       |
| `el.textContent += 'nuevo texto'` | Agrega texto al contenido existente |

---

## 📘 Modificar valores del elemento

| Propiedad / Método                   | Descripción                 |
| ------------------------------------ | --------------------------- |
| `el.id = 'nuevo-id'`                 | Cambia el id del elemento   |
| `el.className = 'nueva-clase'`       | Reemplaza todas las clases  |
| `el.textContent = 'nuevo contenido'` | Reemplaza el texto completo |

---

## 📘 Modificar estilos (inline)

| Método / Técnica                                     | Descripción                                 |
| ---------------------------------------------------- | ------------------------------------------- |
| `el.style.color = 'red'`                             | Estilo inline directo                       |
| `el.style.setProperty('prop', 'valor', 'important')` | Define estilos con prioridad !important     |
| `Object.assign(el.style, stylesToApply)`             | Aplica múltiples estilos desde un objeto JS |

---

## 📘 Eliminar cosas del elemento

| Método / Propiedad                      | Descripción                 |
| --------------------------------------- | --------------------------- |
| `el.remove()`                           | Elimina el elemento del DOM |
| `el.removeAttribute('nombre-atributo')` | Elimina un atributo         |
| `el.classList.remove('nombre-clase')`   | Elimina una clase           |

---

## 📘 Insertar elementos en el DOM

| Método / Propiedad               | Descripción                                 |
| -------------------------------- | ------------------------------------------- |
| `container.prepend(el)`          | Inserta al inicio del contenedor            |
| `container.append(el)`           | Inserta al final del contenedor             |
| `el.before(...) / el.after(...)` | Inserta antes o después de un elemento      |
| `insertAdjacentHTML(pos, html)`  | Inserta HTML en la posición indicada        |
| `insertAdjacentElement(pos, el)` | Inserta un elemento en la posición indicada |

### 📗 Posiciones posibles

- `beforebegin` → antes del elemento mismo
- `afterbegin` → dentro, al inicio
- `beforeend` → dentro, al final
- `afterend` → después del elemento mismo

---

## 📘 innerHTML

```js
el.innerHTML = `
  <div>
    <p>Hola</p>
  </div>
`;
```

- 🧠 Inserta HTML directamente
- ⚠️ Cuidado con contenido dinámico para evitar XSS

---

## 📘 Navegación entre elementos

| Propiedad / Método     | Descripción                        |
| ---------------------- | ---------------------------------- |
| `childElementCount`    | Cantidad de hijos (solo elementos) |
| `firstElementChild`    | Primer hijo elemento               |
| `lastElementChild`     | Último hijo elemento               |
| `children`             | HTMLCollection de todos los hijos  |
| `replaceWith(el)`      | Reemplaza el elemento actual       |
| `replaceChildren(...)` | Reemplaza todos los hijos          |

---

## 📘 Relación entre elementos

| Método / Propiedad    | Descripción                                |
| --------------------- | ------------------------------------------ |
| `closest('selector')` | Busca el ancestro más cercano que coincida |
| `contains(el)`        | Verifica si un elemento contiene a otro    |

---

### 🧠 Tip clave

- Usa `prepend` / `append` para agregar elementos dinámicamente
- Usa `replaceWith` / `replaceChildren` para actualizaciones rápidas
- `closest` es ideal para delegación de eventos y navegación por el DOM
- `contains` ayuda a validar jerarquías de elementos

> Con estas técnicas puedes **agregar, modificar, eliminar, y navegar elementos de forma eficiente** 🚀
