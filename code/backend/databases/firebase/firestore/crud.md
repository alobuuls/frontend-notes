# 📄 03 - CRUD

CRUD representa las cuatro operaciones básicas que puedes realizar sobre los datos de Firestore:

| Operación  | Significado |
| ---------- | ----------- |
| **Create** | Crear       |
| **Read**   | Leer        |
| **Update** | Actualizar  |
| **Delete** | Eliminar    |

## 📑 Índice

- [📄 03 - CRUD](#-03---crud)
  - [📑 Índice](#-índice)
  - [➕ Create](#-create)
    - [🆔 Document ID automático](#-document-id-automático)
    - [🆔 Document ID personalizado](#-document-id-personalizado)
    - [📦 Crear documentos con datos](#-crear-documentos-con-datos)
  - [📖 Read](#-read)
    - [📄 Un documento](#-un-documento)
    - [📚 Una colección](#-una-colección)
    - [🔎 Múltiples documentos](#-múltiples-documentos)
  - [✏️ Update](#️-update)
    - [🔹 Actualizaciones parciales](#-actualizaciones-parciales)
    - [⚖️ Update vs reemplazo](#️-update-vs-reemplazo)
  - [🗑️ Delete](#️-delete)
  - [📁 ¿Qué pasa con las Subcollections?](#-qué-pasa-con-las-subcollections)
- [🔄 CRUD completo](#-crud-completo)
  - [⭐ Concepto fundamental](#-concepto-fundamental)

## ➕ Create

**Create** consiste en crear un nuevo document dentro de una collection.

```text id="q4x2vn"
Application
    ↓
Create
    ↓
Firestore
    ↓
New Document
```

Por ejemplo:

```text id="7n7gkv"
users
   ↓
user_001
   ↓
{
  name: "Alo",
  email: "alo@example.com"
}
```

### 🆔 Document ID automático

Firestore puede generar automáticamente el Document ID.

```text
users
   ↓
Firestore genera ID
   ↓
New Document
```

### 🆔 Document ID personalizado

También puedes decidir tú mismo qué ID tendrá el document.

```text
users
   ↓
user_001
```

### 📦 Crear documentos con datos

Al crear un document puedes proporcionar sus fields:

```text
{
  name: "Alo",
  age: 25,
  active: true
}
```

---

## 📖 Read

**Read** consiste en obtener información almacenada en Firestore.

Puedes leer:

### 📄 Un documento

```text
Firestore
   ↓
Collection
   ↓
Document
```

### 📚 Una colección

```text
Firestore
   ↓
Collection
   ↓
Documents
```

### 🔎 Múltiples documentos

Puedes realizar consultas que devuelvan varios documentos que cumplen determinadas condiciones.

```text
Firestore
   ↓
Query
   ↓
Documents
```

---

## ✏️ Update

**Update** consiste en modificar información existente de un document.

Por ejemplo:

```text
{
  name: "Alo",
  age: 25
}
```

Actualizar:

```text
age → 26
```

Resultado:

```text
{
  name: "Alo",
  age: 26
}
```

### 🔹 Actualizaciones parciales

Puedes modificar solamente determinados fields sin reemplazar todo el document.

```text
Document
   ↓
Update
   ↓
Solo algunos fields cambian
```

### ⚖️ Update vs reemplazo

Es importante distinguir entre:

```text
Update
 ↓
Modificar determinados fields
```

y:

```text
Replace
 ↓
Reemplazar el contenido del document
```

No son conceptualmente lo mismo.

---

## 🗑️ Delete

**Delete** consiste en eliminar un document.

```text
Firestore
   ↓
Document
   ↓
Delete
   ↓
Document eliminado
```

Por ejemplo:

```text
users
 ├── user_001
 ├── user_002
 └── user_003
```

Después de eliminar `user_002`:

```text
users
 ├── user_001
 └── user_003
```

---

## 📁 ¿Qué pasa con las Subcollections?

> ⚠️ **Este punto es muy importante.**

Eliminar un document **no significa automáticamente que sus subcollections sean eliminadas**.

Por ejemplo:

```text
users
 └── user_001
      └── posts
           ├── post_001
           └── post_002
```

Si eliminas:

```text
user_001
```

sus subcollections no deben asumirse como eliminadas automáticamente.

```text
user_001
   ❌ eliminado

posts
   ⚠️ pueden permanecer
```

Por eso, si tu aplicación necesita eliminar también los datos relacionados, debes diseñar explícitamente ese comportamiento.

---

# 🔄 CRUD completo

El flujo general es:

```text
Application
     │
     ├── Create
     ├── Read
     ├── Update
     └── Delete
              ↓
          Firestore
```

Y cada operación representa una intención diferente:

| Operación  | Intención       |
| ---------- | --------------- |
| **Create** | Crear datos     |
| **Read**   | Obtener datos   |
| **Update** | Modificar datos |
| **Delete** | Eliminar datos  |

---

## ⭐ Concepto fundamental

No necesitas memorizar todavía cada método del SDK.

Primero debes entender:

> **Qué operación estoy realizando y qué ocurre con los datos dentro de Firestore.**
