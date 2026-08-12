# 📄 02 - Firestore Security Rules

> 🔐 **Reglas de seguridad para Cloud Firestore**

---

## 📑 Índice

- [� 02 - Firestore Security Rules](#-02---firestore-security-rules)
  - [📑 Índice](#-índice)
  - [🔐 ¿Qué son Security Rules?](#-qué-son-security-rules)
  - [🧩 `match`](#-match)
  - [✅ `allow`](#-allow)
- [📖 Operaciones de lectura](#-operaciones-de-lectura)
  - [📖 `read`](#-read)
    - [`get`](#get)
    - [`list`](#list)
  - [📊 `read` vs `get` / `list`](#-read-vs-get--list)
- [✏️ Operaciones de escritura](#️-operaciones-de-escritura)
  - [✏️ `write`](#️-write)
    - [➕ `create`](#-create)
    - [🔄 `update`](#-update)
    - [🗑️ `delete`](#️-delete)
  - [✏️ `write` vs `create` / `update` / `delete`](#️-write-vs-create--update--delete)
- [📁 Reglas por colección](#-reglas-por-colección)
- [📄 Reglas por documento](#-reglas-por-documento)
- [🃏 Wildcards](#-wildcards)
- [🌳 Reglas anidadas](#-reglas-anidadas)
- [⭐ Concepto fundamental](#-concepto-fundamental)

## 🔐 ¿Qué son Security Rules?

Las **Firestore Security Rules** son reglas que determinan si una petición puede acceder o modificar documentos de Firestore.

```text
Request
   ↓
Firestore Security Rules
   ↓
¿Cumple las condiciones?
   ┌───────┴───────┐
   ▼               ▼
 ALLOW            DENY
```

> ⚠️ Las reglas **no son filtros de datos**. Una consulta debe cumplir las condiciones de las reglas para poder ejecutarse.

---

## 🧩 `match`

`match` define **qué recurso de Firestore está siendo protegido**.

```text
match /users/{userId}
```

Significa que las reglas aplican a los documentos dentro de:

```text
users/{userId}
```

```text
match
  ↓
¿Qué recurso estoy protegiendo?
```

---

## ✅ `allow`

`allow` define **qué operación está permitida** y bajo qué condición.

```text
allow
  ↓
¿Qué operación permito?
  ↓
¿Bajo qué condición?
```

Por ejemplo:

```text
match /users/{userId} {
  allow read: if ...;
}
```

---

# 📖 Operaciones de lectura

## 📖 `read`

`read` controla las operaciones de lectura.

```text
read
 ├── get
 └── list
```

### `get`

Permite obtener un documento específico.

```text
get
 ↓
Un document
```

### `list`

Permite obtener múltiples documentos mediante una consulta.

```text
list
 ↓
Query / Collection
```

---

## 📊 `read` vs `get` / `list`

Puedes pensar en la relación:

```text
read
 ├── get
 └── list
```

| Operación | Función                          |
| --------- | -------------------------------- |
| `get`     | lectura de un documento.         |
| `list`    | lectura de múltiples documentos. |
| `read`    | engloba ambas operaciones.       |

---

# ✏️ Operaciones de escritura

## ✏️ `write`

`write` representa las operaciones de escritura.

```text
write
 ├── create
 ├── update
 └── delete
```

También puedes controlar cada operación individualmente.

### ➕ `create`

Controla la creación de un documento.

```text
create
   ↓
Crear nuevo document
```

### 🔄 `update`

Controla la modificación de un documento existente.

```text
update
   ↓
Modificar document
```

### 🗑️ `delete`

Controla la eliminación de un documento.

```text
delete
   ↓
Eliminar document
```

---

## ✏️ `write` vs `create` / `update` / `delete`

De forma similar:

```text
write
 ├── create
 ├── update
 └── delete
```

| Operación | Función                               |
| --------- | ------------------------------------- |
| `create`  | crear.                                |
| `update`  | modificar.                            |
| `delete`  | eliminar.                             |
| `write`   | engloba las operaciones de escritura. |

---

# 📁 Reglas por colección

Puedes definir reglas para una colección determinada:

```text
match /users/{userId}
```

Esto permite establecer condiciones específicas para los documentos de `users`.

```text
users
   ↓
Security Rules
   ↓
Access control
```

---

# 📄 Reglas por documento

También puedes utilizar información específica del documento mediante su identificador.

```text
users/{userId}
```

Aquí:

```text
{userId}
```

representa el ID del documento.

Esto permite crear reglas basadas en quién es el propietario del documento.

Por ejemplo:

```text
users/{userId}
       ↓
¿Usuario autenticado?
       ↓
¿request.auth.uid == userId?
       ↓
ALLOW
```

---

# 🃏 Wildcards

Los **wildcards** son variables dentro de un `match`.

Por ejemplo:

```text
{userId}
```

representa dinámicamente el ID correspondiente al documento.

```text
match /users/{userId}
```

Conceptualmente:

```text
/users/123
/users/456
/users/789
```

pueden utilizar la misma regla, mientras `{userId}` toma el valor correspondiente.

---

# 🌳 Reglas anidadas

Las reglas también pueden representar estructuras jerárquicas de Firestore.

Por ejemplo:

```text
users/{userId}/posts/{postId}
```

Conceptualmente:

```text
users
 └── {userId}
      └── posts
           └── {postId}
```

Esto permite definir reglas para recursos ubicados dentro de estructuras anidadas.

---

# ⭐ Concepto fundamental

Debes entender especialmente esta estructura:

```text
match
   ↓
¿Qué recurso?
   ↓
allow
   ↓
¿Qué operación?
   ↓
condition
   ↓
¿Se cumple?
   ↓
ALLOW / DENY
```

Por ejemplo:

```text
match /users/{userId}
       ↓
allow read, update:
       ↓
if request.auth.uid == userId
```

> **`match`** **identifica el recurso,** **`allow`** **define la operación permitida y la condición determina si la petición puede realizarla.**
