# 🔢 DATA TYPES

Los **Data Types** determinan qué tipo de información puede almacenar una columna.

Cuando defines una tabla, cada columna debe tener un tipo de dato:

```text
Column
   ↓
Data Type
   ↓
¿Qué tipo de valor puede almacenar?
```

Por ejemplo:

```text
users

id          → INTEGER
name        → VARCHAR
age         → INTEGER
email       → VARCHAR
birth_date  → DATE
is_active   → BOOLEAN
created_at  → TIMESTAMP
```

Elegir correctamente el tipo de dato es importante porque afecta la **validez, almacenamiento, precisión y comportamiento de las consultas**.

---

# 📑 ÍNDICE

- [🔢 DATA TYPES](#-data-types)
- [📑 ÍNDICE](#-índice)
- [🔢 NUMERIC TYPES](#-numeric-types)
  - [1️⃣ 🔢 INTEGER](#1️⃣--integer)
    - [Ejemplos](#ejemplos)
  - [2️⃣ 📏 SMALLINT](#2️⃣--smallint)
  - [3️⃣ 🏔️ BIGINT](#3️⃣-️-bigint)
  - [4️⃣ 💰 DECIMAL / NUMERIC](#4️⃣--decimal--numeric)
    - [💡 ¿Por qué no `FLOAT` para dinero?](#-por-qué-no-float-para-dinero)
  - [5️⃣ 🌊 FLOAT / REAL](#5️⃣--float--real)
    - [🧠 Diferencia fundamental](#-diferencia-fundamental)
    - [🎯 Regla práctica](#-regla-práctica)
- [🔤 CHARACTER / STRING TYPES](#-character--string-types)
  - [6️⃣ 🔤 CHAR](#6️⃣--char)
  - [7️⃣ 📝 VARCHAR](#7️⃣--varchar)
    - [💡 Uso común](#-uso-común)
  - [8️⃣ 📖 TEXT](#8️⃣--text)
    - [🆚 VARCHAR VS TEXT](#-varchar-vs-text)
  - [9️⃣ 🆚 CHAR VS VARCHAR VS TEXT](#9️⃣--char-vs-varchar-vs-text)
- [📅 DATE / TIME TYPES](#-date--time-types)
  - [🔟 📅 DATE](#--date)
  - [1️⃣1️⃣ ⏰ TIME](#1️⃣1️⃣--time)
  - [1️⃣2️⃣ 🕐 TIMESTAMP](#1️⃣2️⃣--timestamp)
  - [1️⃣3️⃣ 🌎 TIMESTAMPTZ / TIMEZONE-AWARE](#1️⃣3️⃣--timestamptz--timezone-aware)
    - [🧠 Idea importante](#-idea-importante)
- [1️⃣4️⃣ 🆚 DATE VS TIMESTAMP](#1️⃣4️⃣--date-vs-timestamp)
- [✅ BOOLEAN](#-boolean)
  - [1️⃣5️⃣ ☑️ BOOLEAN](#1️⃣5️⃣-️-boolean)
    - [🧠 No confundir con `NULL`](#-no-confundir-con-null)
- [🗂️ OTROS TIPOS](#️-otros-tipos)
  - [1️⃣6️⃣ 📦 JSON / JSONB](#1️⃣6️⃣--json--jsonb)
  - [1️⃣7️⃣ 🆔 UUID](#1️⃣7️⃣--uuid)
  - [1️⃣8️⃣ 📚 ARRAY](#1️⃣8️⃣--array)
  - [1️⃣9️⃣ 🏷️ ENUM](#1️⃣9️⃣-️-enum)
  - [2️⃣0️⃣ 💾 BINARY / BLOB](#2️⃣0️⃣--binary--blob)
- [🎯 ¿CÓMO ELEGIR UN DATA TYPE?](#-cómo-elegir-un-data-type)
- [🧠 TABLA MENTAL](#-tabla-mental)
- [🔥 EJEMPLO COMPLETO](#-ejemplo-completo)
    - [🎯 IDEA CLAVE](#-idea-clave)

# 🔢 NUMERIC TYPES

Los tipos numéricos se utilizan para almacenar números.

## 1️⃣ 🔢 INTEGER

`INTEGER` almacena números enteros, es decir, números sin parte decimal.

```text
-10
0
25
100
```

### Ejemplos

```text
age       → INTEGER
quantity  → INTEGER
stock     → INTEGER
```

No es apropiado para:

```text
19.99
3.14159
```

porque esos valores contienen decimales.

---

## 2️⃣ 📏 SMALLINT

`SMALLINT` almacena números enteros pero con un rango menor que `INTEGER`.

Puede ser útil cuando sabes que los valores estarán dentro de un rango relativamente pequeño.

Por ejemplo:

```text
rating
quantity
age
```

Pero no necesitas utilizar `SMALLINT` automáticamente solo porque el número sea pequeño.

Para muchos casos:

```text
INTEGER
```

es perfectamente suficiente.

---

## 3️⃣ 🏔️ BIGINT

`BIGINT` almacena enteros mucho más grandes que `INTEGER`.

Puede ser útil para valores que pueden crecer considerablemente:

```text
large counters
large identifiers
high-volume records
```

Conceptualmente:

```text
SMALLINT
   ↓
INTEGER
   ↓
BIGINT
```

A medida que aumenta el rango disponible, también debes considerar el espacio que ocupa el tipo.

---

## 4️⃣ 💰 DECIMAL / NUMERIC

`DECIMAL` y `NUMERIC` están pensados para **números exactos con decimales**.

Son especialmente importantes cuando la precisión es fundamental.

Ejemplo:

```text
price → DECIMAL
```

```text
19.99
250.50
1000.00
```

Son adecuados para:

* 💰 Prices
* 💳 Money
* 📊 Exact measurements

Por ejemplo:

```text
products

id | name       | price
---|------------|-------
1  | Keyboard   | 49.99
2  | Mouse      | 25.50
```

### 💡 ¿Por qué no `FLOAT` para dinero?

Porque los tipos de punto flotante pueden representar algunos números decimales de forma aproximada.

Para dinero normalmente quieres:

```text
💰 Exact value
      ↓
DECIMAL / NUMERIC
```

---

## 5️⃣ 🌊 FLOAT / REAL

Los tipos de punto flotante almacenan números de forma **aproximada**.

Son útiles cuando necesitas trabajar con valores numéricos donde una pequeña diferencia de precisión es aceptable.

Ejemplos:

```text
temperature
scientific calculations
measurements
```

Conceptualmente:

```text
DECIMAL / NUMERIC
      ↓
Precisión exacta

FLOAT / REAL
      ↓
Aproximación
```

### 🧠 Diferencia fundamental

| Tipo                  | 📌 Característica  | Ejemplo   |
| --------------------- | ------------------ | --------- |
| `INTEGER`             | Enteros            | `25`      |
| `DECIMAL` / `NUMERIC` | Decimal exacto     | `19.99`   |
| `FLOAT` / `REAL`      | Decimal aproximado | `3.14159` |

### 🎯 Regla práctica

```text
age       → INTEGER
quantity  → INTEGER
price     → DECIMAL / NUMERIC
scientific value → FLOAT / REAL
```

---

# 🔤 CHARACTER / STRING TYPES

Se utilizan para almacenar texto.

Los más importantes son:

```text
CHAR
VARCHAR
TEXT
```

---

## 6️⃣ 🔤 CHAR

`CHAR` representa una cadena de **longitud fija**.

Por ejemplo:

```text
CHAR(2)
```

puede utilizarse para valores que siempre tienen una longitud determinada.

Conceptualmente:

```text
CHAR(2)

"CO"
"US"
"MX"
```

Puede ser útil cuando el tamaño del valor es fijo.

---

## 7️⃣ 📝 VARCHAR

`VARCHAR` almacena strings de longitud variable.

Ejemplo:

```text
name → VARCHAR
```

Puede contener:

```text
Ana
Alejandro
Christopher
```

La longitud puede variar entre registros.

Puedes encontrar definiciones como:

```sql
name VARCHAR(100)
```

lo que establece un límite de longitud.

### 💡 Uso común

```text
name
email
username
phone
city
```

---

## 8️⃣ 📖 TEXT

`TEXT` está pensado para almacenar texto más largo o cuyo tamaño no quieres limitar mediante una longitud específica.

Ejemplos:

```text
description
comments
content
article
```

Por ejemplo:

```text
comments → TEXT
```

### 🆚 VARCHAR VS TEXT

En muchos RDBMS modernos, la diferencia práctica entre `VARCHAR` y `TEXT` puede ser pequeña, pero existen diferencias dependiendo del sistema.

No memorices:

> "`VARCHAR` siempre es mejor que `TEXT`"

o:

> "`TEXT` siempre es mejor que `VARCHAR`".

La elección depende del **RDBMS y del significado del dato**.

---

## 9️⃣ 🆚 CHAR VS VARCHAR VS TEXT

| Tipo      | 📌 Uso                                       |
| --------- | -------------------------------------------- |
| `CHAR`    | Texto de longitud fija                       |
| `VARCHAR` | Texto de longitud variable                   |
| `TEXT`    | Texto más largo / sin límite corto explícito |

Ejemplo conceptual:

```text
country_code → CHAR(2)
name         → VARCHAR(100)
description  → TEXT
```

---

# 📅 DATE / TIME TYPES

Los tipos temporales almacenan información relacionada con fechas y horas.

Los principales son:

```text
DATE
TIME
TIMESTAMP
TIMESTAMPTZ
```

---

## 🔟 📅 DATE

`DATE` almacena únicamente una **fecha**.

Ejemplo:

```text
2026-08-08
```

No contiene una hora.

Es ideal cuando solo importa el día:

```text
birth_date
start_date
due_date
holiday
```

Por ejemplo:

```text
birth_date → DATE
```

---

## 1️⃣1️⃣ ⏰ TIME

`TIME` almacena una **hora del día**.

Por ejemplo:

```text
15:30:00
```

Puede utilizarse cuando la fecha no es relevante.

Ejemplo:

```text
opening_time
closing_time
```

---


## 1️⃣2️⃣ 🕐 TIMESTAMP

`TIMESTAMP` representa una combinación de:

```text
Date + Time
```

Por ejemplo:

```text
2026-08-08 15:30:00
```

Es útil para registrar cuándo ocurrió algo:

```text
created_at
updated_at
deleted_at
```

---

## 1️⃣3️⃣ 🌎 TIMESTAMPTZ / TIMEZONE-AWARE

Algunos RDBMS, especialmente PostgreSQL, ofrecen un tipo que maneja timestamps considerando la zona horaria.

Por ejemplo:

```text
2026-08-08 15:30:00 +00
```

Esto es especialmente importante para aplicaciones utilizadas desde diferentes lugares del mundo.

Por ejemplo:

```text
🇨🇴 Colombia
🇲🇽 México
🇰🇷 Korea
🇺🇸 USA
```

Una aplicación global necesita tener cuidado con:

```text
Date
Time
Timezone
UTC
```

### 🧠 Idea importante

No pienses simplemente:

```text
created_at → TIMESTAMP
```

sin preguntarte:

> 🌎 **¿Qué representa este momento y en qué zona horaria debe interpretarse?**

Para timestamps de eventos reales, suele ser buena práctica trabajar con una representación consistente basada en **UTC** y convertirla a la zona horaria del usuario al mostrarla.

---

# 1️⃣4️⃣ 🆚 DATE VS TIMESTAMP

La diferencia principal:

```text
DATE
 ↓
Solo fecha

2026-08-08
```

mientras:

```text
TIMESTAMP
 ↓
Fecha + hora

2026-08-08 15:30:00
```

Por ejemplo:

```text
birth_date → DATE
created_at → TIMESTAMP / TIMESTAMPTZ
```

No necesitas almacenar una hora si el dato conceptualmente solo representa una fecha.

---

# ✅ BOOLEAN

## 1️⃣5️⃣ ☑️ BOOLEAN

`BOOLEAN` representa un valor lógico.

Normalmente:

```text
TRUE
FALSE
```

Ejemplo:

```text
users

is_active
is_verified
is_admin
```

```text
is_active → BOOLEAN
```

Ejemplo:

```text
id | name | is_active
---|------|----------
1  | Ana  | TRUE
2  | Luis | FALSE
```

### 🧠 No confundir con `NULL`

Un boolean puede tener:

```text
TRUE
FALSE
NULL
```

si la columna permite `NULL`.

Por eso:

```text
FALSE
```

significa:

> Sabemos que es falso.

Mientras:

```text
NULL
```

significa:

> No tenemos un valor definido.

---

# 🗂️ OTROS TIPOS

Además de los tipos fundamentales, algunos RDBMS ofrecen tipos adicionales.

---

## 1️⃣6️⃣ 📦 JSON / JSONB

Permiten almacenar datos con estructura JSON.

Por ejemplo:

```json
{
  "theme": "dark",
  "language": "es"
}
```

Son especialmente interesantes cuando necesitas almacenar estructuras más flexibles dentro de una base relacional.

En PostgreSQL encontrarás:

```text
JSON
JSONB
```

`JSONB` utiliza una representación binaria optimizada y ofrece características útiles para consultar y trabajar con el contenido.

> ⚠️ Que una database soporte JSON no significa que debas convertir toda tu database en documentos JSON. Las tablas y relaciones siguen siendo fundamentales.

---


## 1️⃣7️⃣ 🆔 UUID

`UUID` representa identificadores únicos.

Ejemplo:

```text
550e8400-e29b-41d4-a716-446655440000
```

Puede utilizarse como identificador de una entidad:

```text
users

id → UUID
```

En lugar de:

```text
id → INTEGER
```

Es especialmente útil cuando quieres identificadores que no sean simplemente números secuenciales.

---

## 1️⃣8️⃣ 📚 ARRAY

Algunos RDBMS permiten almacenar arrays.

Conceptualmente:

```text
tags → ARRAY
```

```text
["angular", "typescript", "rxjs"]
```

Su utilidad y comportamiento dependen bastante del RDBMS.

---

## 1️⃣9️⃣ 🏷️ ENUM

`ENUM` permite definir un conjunto limitado de valores permitidos.

Por ejemplo:

```text
status

PENDING
ACTIVE
COMPLETED
```

Conceptualmente:

```text
status → ENUM
```

y solo determinados valores serían válidos.

---

## 2️⃣0️⃣ 💾 BINARY / BLOB

Los tipos binarios permiten almacenar datos en formato binario.

Pueden utilizarse para información como:

```text
Binary data
Files
Images
Documents
```

Sin embargo, en aplicaciones web es muy común almacenar los archivos físicamente en un sistema de almacenamiento y guardar en la database únicamente información como:

```text
file_id
file_name
file_url
mime_type
```

---

# 🎯 ¿CÓMO ELEGIR UN DATA TYPE?

La pregunta que debes aprender a responder es:

> **¿Qué tipo de dato representa realmente esta columna?**

No simplemente:

> "¿Qué tipo me funciona?"

Por ejemplo:

```text
users

id          → UUID / INTEGER
name        → VARCHAR / TEXT
age         → INTEGER
email       → VARCHAR
birth_date  → DATE
is_active   → BOOLEAN
created_at  → TIMESTAMPTZ
```

---

# 🧠 TABLA MENTAL

| 📦 Data Type          | 🎯 Uso típico                          |
| --------------------- | -------------------------------------- |
| `INTEGER`             | Números enteros                        |
| `BIGINT`              | Enteros muy grandes                    |
| `DECIMAL` / `NUMERIC` | Decimales exactos                      |
| `FLOAT` / `REAL`      | Decimales aproximados                  |
| `CHAR`                | Texto de longitud fija                 |
| `VARCHAR`             | Texto de longitud variable             |
| `TEXT`                | Texto largo                            |
| `DATE`                | Fecha                                  |
| `TIME`                | Hora                                   |
| `TIMESTAMP`           | Fecha + hora                           |
| `TIMESTAMPTZ`         | Fecha + hora considerando zona horaria |
| `BOOLEAN`             | Verdadero / falso                      |
| `JSON / JSONB`        | Datos estructurados en JSON            |
| `UUID`                | Identificadores únicos                 |
| `ARRAY`               | Colecciones de valores                 |
| `ENUM`                | Conjunto limitado de valores           |
| `BLOB / Binary`       | Datos binarios                         |

---

# 🔥 EJEMPLO COMPLETO

Imagina una tabla `users`:

```text
users

id
name
email
age
salary
birth_date
is_active
created_at
metadata
```

Podrías pensar:

```text
id          → UUID
name        → VARCHAR
email       → VARCHAR
age         → INTEGER
salary      → DECIMAL
birth_date  → DATE
is_active   → BOOLEAN
created_at  → TIMESTAMPTZ
metadata    → JSONB
```

Y el razonamiento sería:

```text
🆔 id
   ↓
Identificador
   ↓
UUID

👤 name
   ↓
Texto
   ↓
VARCHAR

🎂 birth_date
   ↓
Solo fecha
   ↓
DATE

💰 salary
   ↓
Valor monetario exacto
   ↓
DECIMAL

✅ is_active
   ↓
Verdadero / falso
   ↓
BOOLEAN

🕐 created_at
   ↓
Momento exacto
   ↓
TIMESTAMPTZ
```

### 🎯 IDEA CLAVE

> **El Data Type describe la naturaleza del dato. Elige el tipo según lo que el dato representa y cómo necesitas trabajar con él, no simplemente según el valor que actualmente contiene.**

Por ejemplo, que `age` actualmente sea `25` no significa que cualquier tipo numérico sirva igual; y que `price` sea `19.99` no significa que `FLOAT` sea automáticamente apropiado. La **semántica del dato, precisión requerida y características del RDBMS** importan.
