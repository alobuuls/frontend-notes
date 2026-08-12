# 📄 01 - Firebase Storage

## 📑 Índice

- [� 01 - Firebase Storage](#-01---firebase-storage)
  - [📑 Índice](#-índice)
  - [📦 ¿Qué es Firebase Storage?](#-qué-es-firebase-storage)
  - [🪣 Buckets](#-buckets)
  - [📁 Files / Objects](#-files--objects)
  - [🛣️ Paths](#️-paths)
  - [📂 Folders](#-folders)
  - [🆚 Storage vs Firestore](#-storage-vs-firestore)
  - [🔗 Storage + Firestore](#-storage--firestore)
  - [🚫 Storage no es Firestore](#-storage-no-es-firestore)
  - [⭐ Concepto fundamental](#-concepto-fundamental)

## 📦 ¿Qué es Firebase Storage?

**Firebase Storage** es un servicio de almacenamiento de Firebase diseñado para guardar **archivos** de una aplicación.

Puede utilizarse para almacenar:

* Imágenes.
* Videos.
* Documentos.
* Audio.
* Otros archivos.

El flujo básico es:

```text
Angular
   ↓
Firebase Storage
   ↓
Bucket
   ↓
Files
```

---

## 🪣 Buckets

Un **bucket** es el espacio de almacenamiento donde se guardan los archivos.

```text
Firebase Storage
      ↓
    Bucket
      ↓
    Files
```

Dentro del bucket se organizan los archivos mediante sus paths.

---

## 📁 Files / Objects

Los archivos almacenados en Firebase Storage son **objects**.

Por ejemplo:

```text
profile.jpg
product.png
document.pdf
video.mp4
```

Cada archivo tiene información asociada y una ubicación dentro del Storage.

---

## 🛣️ Paths

Los archivos se identifican mediante un **path**.

Por ejemplo:

```text
users/user-001/profile.jpg
```

Puedes organizar tus archivos utilizando paths como:

```text
images/
 ├── profile/
 │    ├── user-001.jpg
 │    └── user-002.jpg
 │
 └── products/
      ├── product-001.jpg
      └── product-002.jpg
```

---

## 📂 Folders

Firebase Storage utiliza los paths para crear una **estructura lógica de carpetas**.

Por ejemplo:

```text
users/
   └── user-001/
         └── profile.jpg
```

Estas carpetas sirven principalmente para organizar los objetos mediante sus paths.

---

## 🆚 Storage vs Firestore

La diferencia fundamental es:

| Firestore           | Storage          |
| ------------------- | ---------------- |
| Datos estructurados | Archivos / Blobs |
| Documents / Fields  | Files / Objects  |

```text
Firestore
   ↓
Datos estructurados
   ↓
Documents / Fields
```

vs.

```text
Storage
   ↓
Archivos / Blobs
   ↓
Files / Objects
```

**Firestore** está pensado para datos estructurados de una aplicación.

**Storage** está pensado para archivos.

---

## 🔗 Storage + Firestore

Es muy común utilizar ambos servicios juntos.

Firestore puede almacenar la **información o metadata relacionada con un archivo**:

```text
Firestore
{
  name: "profile.jpg",
  storagePath: "users/user-001/profile.jpg"
}
```

Mientras que Firebase Storage almacena el archivo real:

```text
Storage
└── users/
     └── user-001/
          └── profile.jpg
```

El flujo sería:

```text
Application
      │
      ├──────────────→ Firestore
      │                 ↓
      │              Metadata
      │
      └──────────────→ Storage
                        ↓
                    Real File
```

---

## 🚫 Storage no es Firestore

No debes pensar que Storage es simplemente otra colección de Firestore.

Son servicios diferentes:

```text
Firestore
   ↓
Database
   ↓
Structured Data
```

```text
Storage
   ↓
File Storage
   ↓
Objects / Blobs
```

Por eso, normalmente **no almacenarías directamente un archivo grande dentro de Firestore**.

En su lugar:

```text
Firestore
   ↓
Metadata / Reference
```

y:

```text
Storage
   ↓
Actual File
```

---

## ⭐ Concepto fundamental

Debes poder explicar:

> **Firebase Storage sirve para almacenar archivos, mientras que Firestore sirve para almacenar datos estructurados.**

La relación típica es:

```text
Firestore
→ Metadata / información del archivo

Storage
→ Archivo real
```

Por ejemplo:

```text
Firestore
{
  name: "profile.jpg",
  storagePath: "users/user-001/profile.jpg"
}

        +

Storage
└── users/
     └── user-001/
          └── profile.jpg
```
