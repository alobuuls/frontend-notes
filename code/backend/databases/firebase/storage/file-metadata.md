# 📄 03 - File Metadata

## 📑 Índice

- [📄 03 - File Metadata](#-03---file-metadata)
  - [📑 Índice](#-índice)
  - [🧠 ¿Qué es Metadata?](#-qué-es-metadata)
  - [📄 File Name](#-file-name)
  - [📍 Full Path](#-full-path)
  - [📏 Size](#-size)
  - [🧩 Content Type / MIME Type](#-content-type--mime-type)
  - [🕐 Creation Time](#-creation-time)
  - [🔄 Updated Time](#-updated-time)
  - [🔐 Download Tokens / Access Information](#-download-tokens--access-information)
  - [🧩 Custom Metadata](#-custom-metadata)
  - [⚠️ Metadata ≠ Database](#️-metadata--database)
  - [⭐ Idea clave](#-idea-clave)

## 🧠 ¿Qué es Metadata?

La **metadata** es información asociada a un archivo almacenado en Firebase Storage.

No es el contenido del archivo, sino información que describe el archivo.

Por ejemplo:

```text id="7g0k2p"
profile.jpg

name:
profile.jpg

size:
245 KB

contentType:
image/jpeg

fullPath:
users/user-001/profile.jpg
```

---

## 📄 File Name

Es el nombre del archivo:

```text id="u8q4k1"
profile.jpg
```

Permite identificar el archivo dentro de su ubicación.

---

## 📍 Full Path

Indica la ubicación completa del archivo dentro del Storage:

```text id="h9v3mx"
users/user-001/profile.jpg
```

---

## 📏 Size

Indica el tamaño del archivo.

Por ejemplo:

```text id="w4j7za"
245 KB
```

Puede utilizarse para conocer cuánto espacio ocupa el archivo y para realizar validaciones de tamaño.

---

## 🧩 Content Type / MIME Type

El **MIME type** indica qué tipo de contenido contiene el archivo.

Ejemplos:

```text id="5u8s0d"
image/jpeg
image/png
application/pdf
video/mp4
```

Es especialmente importante cuando necesitas validar qué tipos de archivos puede subir un usuario.

Por ejemplo:

```text id="k7c1vy"
File
 ↓
contentType
 ↓
¿Es image/jpeg?
 ↓
Sí → permitir
No → rechazar
```

---

## 🕐 Creation Time

Indica cuándo fue creado o almacenado el archivo.

```text id="n2f6qa"
creationTime
    ↓
Fecha de creación
```

---

## 🔄 Updated Time

Indica cuándo fue actualizada la información o el archivo según corresponda.

```text id="p8d3rx"
updatedTime
    ↓
Última actualización
```

---

## 🔐 Download Tokens / Access Information

La metadata puede contener información relacionada con el acceso al archivo, como **download tokens**.

Estos elementos están relacionados con cómo puede obtenerse acceso al archivo mediante una URL.

No debes confundirlos con:

```text id="y6m1zc"
Storage Path
```

ni con:

```text id="q4s9bt"
Download URL
```

---

## 🧩 Custom Metadata

Puedes asociar metadata personalizada a un archivo.

Por ejemplo:

```text id="e5k2wp"
{
  "uploadedBy": "user-001",
  "category": "profile"
}
```

Esto permite guardar información adicional directamente asociada al objeto almacenado.

---

## ⚠️ Metadata ≠ Database

La metadata sirve para describir el archivo, pero **no debe utilizarse como sustituto de una database**.

Si necesitas información compleja sobre una entidad, normalmente esa información debería estar en Firestore.

Por ejemplo:

```text id="r1v7nx"
Storage
   ↓
Archivo + Metadata
```

vs.

```text id="a6j4ku"
Firestore
   ↓
Información estructurada de la entidad
```

---

## ⭐ Idea clave

Debes poder reconocer la metadata básica de un archivo:

```text id="t9b3hf"
File
 │
 ├── name
 ├── fullPath
 ├── size
 ├── contentType
 ├── creationTime
 └── updatedTime
```

Y especialmente:

> **MIME type identifica el tipo de contenido del archivo**, por ejemplo `image/jpeg`, `image/png` o `application/pdf`.
