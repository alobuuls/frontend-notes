# 📘 Formularios en Angular (Template vs Reactive)

---

## 🧠 Angular tiene dos formas principales de manejar formularios

👉 Template-driven (ngModel)
👉 Reactive Forms (FormControl, FormGroup, FormBuilder)

---

# 📘 🟢 1. TEMPLATE-DRIVEN FORMS

## 🧠 Se basan en el HTML

### 💡 TypeScript

```ts id="x8m2k7"
nit: string = '';
```

### 💡 HTML

```html id="p4n9v1"
<input name="nit" [(ngModel)]="nit" />
```

👉 Usa databinding bidireccional

---

## ✔️ PROS

✔ Fácil de usar
✔ Menos código en TS
✔ Data binding automático

---

## ❌ CONS

❌ Necesitas una variable por input
❌ No puedes acceder fácilmente al formulario completo
❌ Validaciones más limitadas/manuales

---

## ⚠️ Requiere FormsModule

---

# 📘 🔵 2. FORM CONTROL (REACTIVE)

## 🧠 Control individual de un input

### 💡 TypeScript

```ts id="m7q3x5"
myControl = new FormControl('', [Validators.required]);
```

### 💡 HTML

```html id="k2v8n4"
<input [formControl]="myControl" />
```

👉 Control total desde TS

---

## ✔️ PROS

✔ Más control
✔ Validaciones más potentes

---

## ❌ CONS

❌ No hay binding automático
❌ Manejo individual (no global)

---

# 📘 🟣 3. FORM GROUP

## 🧠 Agrupa múltiples controles (formulario completo)

### 💡 TypeScript

```ts id="r5w1m9"
myForm: FormGroup = new FormGroup({
  nit: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required]),
});
```

### 💡 HTML

```html id="n8k4q2"
<form [formGroup]="myForm">
  <input formControlName="nit" />
  <input formControlName="email" />
</form>
```

👉 Manejo global del formulario

---

## ✔️ PROS

✔ Acceso al formulario completo
✔ Validaciones más fáciles
✔ Escalable

---

# 📘 🟡 4. FORM BUILDER

## 🧠 Forma simplificada de crear formularios reactivos

### 💡 TypeScript

```ts id="v3m7k8"
constructor(private fb: FormBuilder) {}

myForm = this.fb.group({
  nit: ['', [Validators.required]],
  email: ['', [Validators.required]]
});
```

👉 Menos código que FormGroup

---

## ✔️ PROS

✔ Igual que FormGroup
✔ Código más limpio
✔ No necesitas crear instancias manuales

---

## ✨ TIP

🧠 En proyectos grandes suele preferirse FormBuilder porque permite crear formularios complejos con menos código y mejor mantenibilidad.

# 📘 🟠 VALIDACIONES

---

## 🧠 Ejemplo

```ts id="a7k2m9"
new FormControl('', [Validators.required, Validators.minLength(3)]);
```

👉 Angular tiene validadores listos

---

# 📘 🔴 DIFERENCIA CLAVE

## 🧠 Template vs Reactive

👉 Template → HTML manda
👉 Reactive → TS manda

---

## ✨ TIP

🧠 Reactive Forms = más usado en apps grandes

---

# 📘 ⚠️ COSAS IMPORTANTES

🧠 ngModel → FormsModule
🧠 Reactive Forms → ReactiveFormsModule
🧠 formControlName necesita formGroup
🧠 Validaciones más fáciles en Reactive

---

# 📘 ✨ RESUMEN

## 🧠 Formas de trabajar formularios

👉 Template → simple, rápido
👉 FormControl → control individual
👉 FormGroup → formulario completo
👉 FormBuilder → versión simplificada

👉 Reactive Forms = más potente y escalable 🚀
