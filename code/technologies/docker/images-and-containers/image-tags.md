# 📄 04 - Image Tags

> [!NOTE]
> Aquí estudias **cómo se nombran, identifican y versionan las Docker Images**.

---

# 🏷️ ¿Qué es un Image Tag?

Una Docker Image puede identificarse mediante un nombre como:

```text
node:22
```

Conceptualmente se divide en:

| Parte  | Significado |
| ------ | ----------- |
| `node` | Repository  |
| `22`   | Tag         |

El **repository** identifica el conjunto o nombre de la imagen, mientras que el **tag** identifica una variante o versión dentro de ese repository.

Por ejemplo:

```text
node:22
node:20
node:22-alpine
```

Todas pertenecen al repository:

```text
node
```

pero utilizan diferentes tags.

---

# 📦 Repository

El **repository** es el nombre con el que se identifica una familia de imágenes.

Por ejemplo:

```text
node
postgres
nginx
```

Puedes tener:

```text
node:20
node:22
node:22-alpine
```

Todos pertenecen al repository:

```text
node
```

En imágenes propias podrías tener:

```text
my-api:1.0
my-api:1.1
my-api:2.0
```

Aquí:

```text
my-api
   ↓
Repository
```

---

# 🏷️ Tag

El **tag** es una etiqueta que permite distinguir diferentes variantes de una Image.

Por ejemplo:

```text
node:22
```

```text
node
 ↓
Repository

22
 ↓
Tag
```

Otro ejemplo:

```text
node:22-alpine
```

```text
node
    ↓
Repository

22-alpine
    ↓
Tag
```

Los tags pueden representar:

* versiones
* variantes
* releases
* configuraciones específicas

---

# 🔢 Versiones

Una práctica común es utilizar tags que representen versiones.

Por ejemplo:

```text
my-api:1.0
my-api:1.1
my-api:2.0
```

Puedes pensar en ellas como diferentes versiones de la misma aplicación:

```text
my-api
   │
   ├── 1.0
   ├── 1.1
   └── 2.0
```

Esto permite seleccionar explícitamente qué versión quieres utilizar.

Por ejemplo:

```text
node:20
```

es diferente de:

```text
node:22
```

---

# 🧩 Tags para variantes

Los tags no solamente representan versiones.

También pueden identificar **variantes de una Image**.

Por ejemplo:

```text
node:22
node:22-alpine
```

Ambas están relacionadas con Node.js 22, pero `22-alpine` utiliza una variante basada en Alpine Linux.

Otro ejemplo:

```text
nginx:latest
nginx:alpine
```

Aquí `alpine` identifica una variante concreta de la Image.

> [!IMPORTANT]
> Por eso no debes asumir que un tag siempre significa:
>
> > "versión de software".
>
> Puede representar una versión, una variante o ambas cosas.

---

# ⚠️ `latest`

Uno de los tags que debes conocer es:

```text
latest
```

Por ejemplo:

```text
node:latest
```

> [!WARNING]
> `latest` no significa necesariamente "la versión más reciente" en un sentido universal.
>
> Es simplemente un **tag llamado `latest`** que apunta a una determinada Image.

Por ejemplo:

```text
my-api:1.0
my-api:1.1
my-api:latest
```

`latest` puede apuntar a la Image que el proyecto haya decidido asociar con ese tag.

Cuando aparece una nueva versión, el tag puede cambiar:

```text
latest
   ↓
Image A
```

y posteriormente:

```text
latest
   ↓
Image B
```

Por eso no debes tratar `latest` como una versión fija.

---

# 🔄 Tags y Releases

Los tags son especialmente útiles para identificar releases.

Por ejemplo:

```text
my-api:1.0.0
my-api:1.1.0
my-api:2.0.0
```

Puedes tener:

```text
Release 1
   ↓
my-api:1.0.0

Release 2
   ↓
my-api:1.1.0

Release 3
   ↓
my-api:2.0.0
```

Así puedes saber qué versión de la aplicación estás utilizando.

---

# 🧠 Tag ≠ Image ID

No debes confundir un **tag** con la identidad interna de una Image.

Por ejemplo:

```text
my-api:1.0
```

es un nombre legible para humanos:

```text
Repository + Tag
```

Mientras que una Image también tiene un:

```text
Image ID
```

que identifica la Image internamente.

Conceptualmente:

```text
my-api:1.0
     ↓
Repository + Tag
     ↓
   Image
     ↓
 Image ID
```

> [!TIP]
> El tag es una **referencia**, no necesariamente la identidad permanente de la Image.

---

# 🎯 ¿Por qué son importantes los tags?

Principalmente porque permiten:

```text
Identificar
    ↓
Versionar
    ↓
Seleccionar
    ↓
Distribuir
```

una determinada Image.

Por ejemplo:

```text
Production
    ↓
my-api:1.4.0
```

mientras que:

```text
Development
    ↓
my-api:1.5.0
```

Cada entorno puede utilizar una versión diferente.

---

# ✅ Buenas prácticas

Para aplicaciones reales, es recomendable utilizar **tags explícitos** cuando necesitas reproducibilidad.

Por ejemplo:

```text
my-api:1.4.0
```

en lugar de depender ciegamente de:

```text
my-api:latest
```

La diferencia conceptual es:

| Referencia      | Significado                                                    |
| --------------- | -------------------------------------------------------------- |
| `my-api:1.4.0`  | Referencia explícita → Versión concreta                        |
| `my-api:latest` | Referencia mutable → Puede apuntar a otra Image posteriormente |

Esto es especialmente importante en producción, donde normalmente quieres saber **exactamente qué versión estás ejecutando**.

---

# 🧠 En resumen

Cuando veas:

```text
node:22-alpine
```

piensa:

```text
node
 ↓
Repository

22-alpine
 ↓
Tag
```

Y cuando veas:

```text
my-api:1.2.0
```

piensa:

```text
my-api
   ↓
Repository

1.2.0
   ↓
Tag / versión
```

> [!TIP]
> **Los Image Tags son referencias que permiten identificar y diferenciar versiones o variantes de Docker Images.**

Y recuerda:

```text
latest
  ≠
"siempre la versión más nueva"
```

Es simplemente **un tag llamado `latest`**.
