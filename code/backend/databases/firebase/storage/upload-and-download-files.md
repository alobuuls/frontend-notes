# 📄 02 - Upload & Download Files

## 📑 Índice

- [� 02 - Upload \& Download Files](#-02---upload--download-files)
  - [📑 Índice](#-índice)
  - [📤 Upload](#-upload)
    - [📄 File](#-file)
    - [📍 Storage Path](#-storage-path)
    - [📊 Upload Progress](#-upload-progress)
    - [✅ Upload completo](#-upload-completo)
    - [❌ Manejo de errores](#-manejo-de-errores)
- [📥 Download](#-download)
  - [🔗 Download URL](#-download-url)
- [⭐ Storage Path vs Download URL](#-storage-path-vs-download-url)
    - [Storage Path](#storage-path)
    - [Download URL](#download-url)
- [🔄 Replace Files](#-replace-files)
- [🗑️ Delete Files](#️-delete-files)
- [⚠️ Failed Uploads](#️-failed-uploads)
- [🔥 Ciclo completo](#-ciclo-completo)

## 📤 Upload

El **upload** consiste en enviar un archivo desde la aplicación hacia Firebase Storage.

El flujo básico es:

```text
User
 ↓
<input type="file">
 ↓
File
 ↓
Firebase Storage
 ↓
Upload
```

### 📄 File

Cuando el usuario selecciona un archivo mediante:

```html
<input type="file">
```

el navegador proporciona un objeto `File` que representa el archivo seleccionado.

---

### 📍 Storage Path

Antes o durante el upload se determina dónde se almacenará el archivo.

Por ejemplo:

```text
users/user-001/profile.jpg
```

Ese path identifica la ubicación lógica del archivo dentro del Storage.

---

### 📊 Upload Progress

Durante una subida puede existir información sobre el progreso:

```text
Upload
  ↓
0%
  ↓
25%
  ↓
50%
  ↓
75%
  ↓
100%
```

Esto permite mostrar al usuario el estado de la subida.

---

### ✅ Upload completo

Cuando la operación termina correctamente:

```text
File
 ↓
Upload
 ↓
Firebase Storage
 ↓
Success
```

La aplicación puede entonces guardar información relacionada con el archivo, por ejemplo en Firestore.

---

### ❌ Manejo de errores

Un upload puede fallar por diferentes motivos, por lo que la aplicación debe poder manejar:

```text
Upload
   ↓
Success / Error
```

---

# 📥 Download

El **download** consiste en obtener acceso al archivo almacenado en Firebase Storage.

El flujo conceptual es:

```text
Storage
   ↓
users/user-001/profile.jpg
   ↓
Download URL
   ↓
<img>
```

---

## 🔗 Download URL

Una **Download URL** permite acceder al archivo mediante una URL.

Por ejemplo, una imagen almacenada puede terminar utilizándose como:

```html
<img src="DOWNLOAD_URL">
```

La URL permite que la aplicación acceda al archivo según la configuración de acceso correspondiente.

---

# ⭐ Storage Path vs Download URL

Esta diferencia es fundamental.

| Storage Path                                                | Download URL                                 |
| ----------------------------------------------------------- | -------------------------------------------- |
| Identifica dónde está ubicado el archivo dentro del Storage | Es una URL utilizada para acceder al archivo |
| `users/user-001/profile.jpg`                                | `https://...`                                |

### Storage Path

Identifica **dónde está ubicado el archivo dentro del Storage**:

```text
users/user-001/profile.jpg
```

### Download URL

Es una **URL utilizada para acceder al archivo**:

```text
https://...
```

Por lo tanto:

```text
Storage Path
   ↓
Ubicación del archivo
```

vs.

```text
Download URL
   ↓
Acceso al archivo
```

No son lo mismo.

---

# 🔄 Replace Files

También puedes reemplazar un archivo existente.

Conceptualmente:

```text
Existing File
      ↓
New File
      ↓
Upload
      ↓
Same / New Path
      ↓
Updated File
```

Por ejemplo, reemplazar una imagen de perfil:

```text
users/user-001/profile.jpg
```

por una nueva versión.

---

# 🗑️ Delete Files

Los archivos también pueden eliminarse:

```text
Storage
   ↓
File
   ↓
Delete
   ↓
File removed
```

---

# ⚠️ Failed Uploads

Debes considerar qué ocurre cuando una subida falla:

```text
File
 ↓
Upload
 ↓
❌ Error
```

La aplicación debe poder:

* Detectar el error.
* Informar al usuario.
* Evitar asumir que el archivo fue subido correctamente.
* Permitir reintentar cuando corresponda.

---

# 🔥 Ciclo completo

El ciclo básico de gestión de archivos es:

```text
File
 │
 ├── Upload
 │
 ├── Download
 │
 ├── Replace
 │
 └── Delete
```

Y el concepto más importante que debes recordar es:

```text
Storage Path
      ↓
Identifica el archivo

Download URL
      ↓
Permite acceder al archivo
```
