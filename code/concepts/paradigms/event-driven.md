# 🎯 7. PARADIGMA ORIENTADO A EVENTOS

La programación **orientada a eventos** organiza el flujo de ejecución alrededor de **eventos**.

En lugar de tener únicamente:

```text
Programa
   ↓
Instrucciones
```

tenemos:

```text
Event
 ↓
Listener
 ↓
Handler
 ↓
Action
```

Por ejemplo:

```ts
button.addEventListener('click', () => {
  console.log('Clicked');
});
```

El programa espera:

```text
Usuario
  ↓
Click
  ↓
Event
  ↓
Event Handler
  ↓
Código ejecutado
```

---

## 🌐 ¿Dónde aparece?

Es extremadamente común en desarrollo web:

* JavaScript
* Node.js
* Angular
* React
* WebSockets
* interfaces gráficas
* sistemas asíncronos

Por ejemplo:

```text
HTTP Request
     ↓
Event
     ↓
Handler
     ↓
Response
```

### 🧠 Idea principal

> **Event-driven = el flujo del programa responde a eventos que ocurren.**

⚠️ Al igual que Component-Based, **event-driven puede clasificarse de diferentes maneras según el contexto**. Es especialmente útil pensarlo como un modelo de programación/arquitectura para aplicaciones web y sistemas asíncronos.

---
