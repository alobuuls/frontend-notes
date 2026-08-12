# 📄 05 - Security Rules Validation

> 🛡️ **Validación y control de datos con Security Rules**

---

## 📑 Índice

- [� 05 - Security Rules Validation](#-05---security-rules-validation)
  - [📑 Índice](#-índice)
  - [🛡️ Validación de datos](#️-validación-de-datos)
- [📦 `resource`](#-resource)
- [🆕 `request.resource`](#-requestresource)
- [🔥 `resource` vs `request.resource`](#-resource-vs-requestresource)
- [✏️ Validar modificaciones](#️-validar-modificaciones)
- [🧩 Validar campos](#-validar-campos)
- [🔢 Validar tipos y valores](#-validar-tipos-y-valores)
- [👤 Validar ownership](#-validar-ownership)
- [⭐ Concepto fundamental](#-concepto-fundamental)

## 🛡️ Validación de datos

Las Security Rules no solamente pueden controlar:

> **Quién puede acceder.**

También pueden controlar:

> **Qué datos puede guardar o modificar.**

El flujo es:

```text id="y8j2qp"
Request
   ↓
Nuevo documento
   ↓
Security Rules
   ↓
¿Datos válidos?
 ┌───────┴───────┐
 ▼               ▼
ALLOW           DENY
```

Puedes utilizar las reglas para validar:

* Campos.
* Tipos.
* Valores.
* Ownership.
* Campos obligatorios.
* Modificaciones permitidas.

---

# 📦 `resource`

`resource` representa **los datos que actualmente existen en Firestore**.

```text id="b3x9cz"
Firestore
   ↓
resource
   ↓
Current Data
```

Por ejemplo, si actualmente existe:

```text id="g6e0rp"
users/abc123

{
  name: "Alo",
  role: "user"
}
```

`resource` representa esos datos actuales.

---

# 🆕 `request.resource`

`request.resource` representa **los datos que tendría el documento después de aceptar la operación**.

```text id="j4p8uv"
Request
   ↓
request.resource
   ↓
New Data
```

Por ejemplo, si el usuario intenta cambiar:

```text id="m2w7qx"
{
  name: "Alo",
  role: "admin"
}
```

`request.resource` representa ese nuevo estado.

---

# 🔥 `resource` vs `request.resource`

Esta diferencia es fundamental:

| Referencia         | Representa                                        |
| ------------------ | ------------------------------------------------- |
| `resource`         | Current Data — ¿Qué existe ahora?                 |
| `request.resource` | New Data — ¿Qué quedaría después de la operación? |

Visualmente:

```text id="f0kq7z"
              Firestore
                  │
             Current Data
                  │
                  ▼
              resource


Request
   │
   │ New Data
   ▼
request.resource
```

---

# ✏️ Validar modificaciones

Esta diferencia es especialmente importante en operaciones `update`.

Supongamos:

```text id="d4y6sj"
users/{userId}
```

y el documento actual es:

```text id="k1p8rs"
{
  name: "Alo",
  role: "user"
}
```

Quieres permitir que el usuario modifique `name`, pero **no** **`role`**.

La comparación sería:

```text id="x7c3mn"
Current Document
       ↓
resource
       ↓
role = "user"

New Document
       ↓
request.resource
       ↓
role = "admin"
```

La regla puede detectar que:

```text id="h5v2wb"
resource.role
      ≠
request.resource.role
```

y rechazar la operación.

```text id="u9r4ka"
role changed
     ↓
Security Rules
     ↓
❌ DENY
```

---

# 🧩 Validar campos

Puedes comprobar que determinados campos cumplan las condiciones esperadas.

Conceptualmente:

```text id="s8m3qd"
request.resource
       ↓
Fields
       ↓
¿Cumplen las condiciones?
       ↓
ALLOW / DENY
```

Por ejemplo:

```text id="k2w6hz"
name
email
age
```

pueden tener diferentes reglas de validación.

---

# 🔢 Validar tipos y valores

Las reglas también pueden comprobar que los datos tengan el tipo o valor esperado.

Conceptualmente:

```text id="q6z1px"
request.resource
       ↓
Field
       ↓
Type / Value
       ↓
Valid?
   ├── Sí → ALLOW
   └── No → DENY
```

Por ejemplo, puedes establecer condiciones sobre:

```text id="n8c5jr"
age
```

para impedir valores que no sean válidos para tu aplicación.

---

# 👤 Validar ownership

También puedes combinar la validación de datos con la identidad del usuario.

```text id="v3h7lm"
request.auth.uid
       ↓
¿Es propietario?
       ↓
request.resource
       ↓
¿Los nuevos datos son válidos?
       ↓
ALLOW / DENY
```

Así puedes controlar simultáneamente:

```text id="a5s2kd"
Quién puede modificar
        +
Qué puede modificar
```

---

# ⭐ Concepto fundamental

Debes recordar:

```text id="p7n4wx"
resource
   ↓
Datos actuales
```

```text id="c9m2vf"
request.resource
   ↓
Datos nuevos
```

Por eso:

> **`resource`** **sirve para conocer el estado actual del documento, mientras que** **`request.resource`** **permite validar el estado que tendría después de la operación.**

Especialmente en `update`, esta diferencia permite controlar **qué cambios puede realizar un usuario sobre sus datos**.
