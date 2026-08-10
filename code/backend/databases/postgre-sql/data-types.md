# 📄 PostgreSQL Data Types

PostgreSQL ofrece diferentes tipos de datos para definir **qué clase de información puede almacenar cada columna**.

Elegir correctamente el tipo de dato permite representar la información de forma adecuada y evitar almacenar valores incorrectos.

---

## 📑 ÍNDICE

- [📄 PostgreSQL Data Types](#-postgresql-data-types)
  - [📑 ÍNDICE](#-índice)
  - [🧠 Tipos de datos](#-tipos-de-datos)
  - [🔢 Numeric Types](#-numeric-types)
    - [INTEGER](#integer)
    - [SMALLINT](#smallint)
    - [BIGINT](#bigint)
    - [DECIMAL / NUMERIC](#decimal--numeric)
    - [REAL](#real)
    - [DOUBLE PRECISION](#double-precision)
    - [🧠 Idea general](#-idea-general)
  - [🔤 Character Types](#-character-types)
    - [CHAR](#char)
    - [VARCHAR](#varchar)
    - [TEXT](#text)
    - [🆚 VARCHAR vs TEXT](#-varchar-vs-text)
  - [📅 Date / Time](#-date--time)
    - [DATE](#date)
    - [TIME](#time)
    - [TIMESTAMP](#timestamp)
    - [TIMESTAMPTZ](#timestamptz)
    - [INTERVAL](#interval)
    - [🆚 TIMESTAMP vs TIMESTAMPTZ](#-timestamp-vs-timestamptz)
  - [🆔 UUID](#-uuid)
  - [📦 JSON / JSONB](#-json--jsonb)
  - [📚 Arrays](#-arrays)
    - [🧠 ¿Cuándo tienen sentido?](#-cuándo-tienen-sentido)
  - [🏷️ ENUM](#️-enum)
    - [🆚 ENUM vs CHECK](#-enum-vs-check)
  - [🚫 NULL](#-null)
  - [🔷 Special Types](#-special-types)

## 🧠 Tipos de datos

| Categoría          | Tipos                                                                             |
| ------------------ | --------------------------------------------------------------------------------- |
| 🔢 Numeric Types   | `INTEGER`, `BIGINT`, `SMALLINT`, `DECIMAL`, `NUMERIC`, `REAL`, `DOUBLE PRECISION` |
| 🔤 Character Types | `CHAR`, `VARCHAR`, `TEXT`                                                         |
| 📅 Date / Time     | `DATE`, `TIME`, `TIMESTAMP`, `TIMESTAMPTZ`, `INTERVAL`                            |
| 🆔 UUID            | `UUID`                                                                            |
| 📦 JSON / JSONB    | `JSON`, `JSONB`                                                                   |
| 📚 Arrays          | `TEXT[]`, `INTEGER[]`, `UUID[]`                                                   |
| 🏷️ ENUM           | `ENUM`                                                                            |
| 🚫 NULL            | `NULL`                                                                            |
| 🔷 Special Types   | Special Types                                                                     |

---

## 🔢 Numeric Types

PostgreSQL dispone de diferentes tipos para almacenar números:

```text
INTEGER
BIGINT
SMALLINT
DECIMAL
NUMERIC
REAL
DOUBLE PRECISION
```

| Tipo                | Descripción                                                                                           |
| ------------------- | ----------------------------------------------------------------------------------------------------- |
| `INTEGER`           | Almacena números enteros.                                                                             |
| `SMALLINT`          | Almacena enteros utilizando menos espacio que `INTEGER`, pero tiene un rango menor.                   |
| `BIGINT`            | Almacena enteros mucho más grandes que `INTEGER`.                                                     |
| `DECIMAL / NUMERIC` | Están diseñados para almacenar **números exactos**, especialmente cuando necesitas precisión decimal. |
| `REAL`              | Es un tipo de punto flotante de precisión simple.                                                     |
| `DOUBLE PRECISION`  | Es un tipo de punto flotante de doble precisión.                                                      |

### INTEGER

```sql
age INTEGER
```

Ejemplos:

```text
18
25
100
-5
```

Es adecuado cuando no necesitas valores decimales.

### SMALLINT

Puede utilizarse cuando sabes que los valores estarán dentro de un rango pequeño.

### BIGINT

Es útil cuando necesitas trabajar con valores enteros que pueden superar el rango de `INTEGER`.

### DECIMAL / NUMERIC

```sql
price NUMERIC
```

Por ejemplo:

```text
19.99
1500.50
```

Son apropiados para valores como precios o cantidades monetarias.

### REAL

Puede representar valores decimales, pero no ofrece la misma precisión exacta que `NUMERIC`.

### DOUBLE PRECISION

Permite representar números con mayor precisión que `REAL`.

### 🧠 Idea general

```text
INTEGER
   ↓
Enteros normales

BIGINT
   ↓
Enteros muy grandes

SMALLINT
   ↓
Enteros pequeños

NUMERIC / DECIMAL
   ↓
Decimales exactos

REAL
   ↓
Punto flotante

DOUBLE PRECISION
   ↓
Punto flotante de mayor precisión
```

---

## 🔤 Character Types

PostgreSQL proporciona:

```text
CHAR
VARCHAR
TEXT
```

| Tipo      | Descripción                                                                       |
| --------- | --------------------------------------------------------------------------------- |
| `CHAR`    | `CHAR(n)` almacena cadenas de una longitud fija.                                  |
| `VARCHAR` | `VARCHAR(n)` almacena cadenas de caracteres con una longitud máxima especificada. |
| `TEXT`    | `TEXT` permite almacenar cadenas de texto sin especificar una longitud máxima.    |

### CHAR

```sql
code CHAR(2)
```

Está pensado para valores que tienen una longitud determinada.

### VARCHAR

```sql
name VARCHAR(100)
```

El valor puede tener menos caracteres que el límite establecido.

### TEXT

```sql
description TEXT
```

---

### 🆚 VARCHAR vs TEXT

Ambos pueden almacenar texto.

| `VARCHAR`                                                           | `TEXT`                            |
| ------------------------------------------------------------------- | --------------------------------- |
| `VARCHAR(n)` permite establecer explícitamente una longitud máxima. | `TEXT` no requiere especificarla. |

Por ejemplo:

```sql
name VARCHAR(100)
```

limita el valor a 100 caracteres.

Mientras:

```sql
description TEXT
```

permite almacenar texto sin establecer ese límite.

---

## 📅 Date / Time

PostgreSQL dispone de diferentes tipos para representar fechas, horas y períodos:

```text
DATE
TIME
TIMESTAMP
TIMESTAMPTZ
INTERVAL
```

| Tipo          | Descripción                                                                        |
| ------------- | ---------------------------------------------------------------------------------- |
| `DATE`        | Representa únicamente una fecha.                                                   |
| `TIME`        | Representa una hora.                                                               |
| `TIMESTAMP`   | Representa una fecha y una hora.                                                   |
| `TIMESTAMPTZ` | Representa un timestamp que considera información relacionada con la zona horaria. |
| `INTERVAL`    | Representa una cantidad de tiempo.                                                 |

### DATE

```sql
birth_date DATE
```

Ejemplo:

```text
2026-08-10
```

No contiene una hora.

### TIME

```sql
start_time TIME
```

Ejemplo:

```text
14:30:00
```

### TIMESTAMP

```sql
created_at TIMESTAMP
```

Ejemplo:

```text
2026-08-10 14:30:00
```

### TIMESTAMPTZ

Es especialmente importante cuando una aplicación trabaja con usuarios o sistemas ubicados en diferentes zonas horarias.

### INTERVAL

Por ejemplo:

```text
2 days
3 hours
30 minutes
```

---

### 🆚 TIMESTAMP vs TIMESTAMPTZ

La diferencia importante es el tratamiento de la **zona horaria**.

| `TIMESTAMP`                                               | `TIMESTAMPTZ`                                                       |
| --------------------------------------------------------- | ------------------------------------------------------------------- |
| Representa una fecha y hora sin manejar una zona horaria. | Permite trabajar con timestamps teniendo en cuenta la zona horaria. |

---

## 🆔 UUID

`UUID` permite almacenar identificadores únicos.

Ejemplo:

```text
550e8400-e29b-41d4-a716-446655440000
```

Puede utilizarse como identificador de registros:

```sql
id UUID
```

En lugar de utilizar:

```text
INTEGER
BIGINT
```

Por ejemplo:

```text
INTEGER
   ↓
1
2
3
```

vs.

```text
UUID
   ↓
550e8400-e29b-41d4-a716-446655440000
```

UUID puede ser una alternativa cuando quieres identificadores que no sean simplemente números secuenciales.

---

## 📦 JSON / JSONB

PostgreSQL permite almacenar datos estructurados utilizando:

```text
JSON
JSONB
```

Por ejemplo:

```json
{
  "name": "Alo",
  "skills": ["Angular", "TypeScript"]
}
```

| Tipo    | Descripción                                                                                                       |
| ------- | ----------------------------------------------------------------------------------------------------------------- |
| `JSON`  | `JSON` almacena los datos en formato JSON.                                                                        |
| `JSONB` | `JSONB` almacena los datos en una representación binaria optimizada para trabajar con ellos dentro de PostgreSQL. |

La diferencia principal está en **cómo PostgreSQL almacena y procesa internamente los datos**.

---

## 📚 Arrays

PostgreSQL permite almacenar arrays directamente en una columna.

Por ejemplo:

```text
TEXT[]
INTEGER[]
UUID[]
```

Un `TEXT[]` puede almacenar:

```text
["Angular", "TypeScript", "React"]
```

Un `INTEGER[]`:

```text
[1, 2, 3, 4]
```

Y un `UUID[]` puede almacenar múltiples UUIDs.

### 🧠 ¿Cuándo tienen sentido?

Los arrays pueden ser útiles cuando necesitas almacenar una colección de valores relacionados directamente con un registro.

Pero cuando esos valores representan **entidades relacionadas**, puede ser mejor utilizar una tabla relacionada.

---

## 🏷️ ENUM

PostgreSQL permite crear tipos personalizados mediante `CREATE TYPE` y `ENUM`.

Por ejemplo:

```sql
CREATE TYPE user_status AS ENUM (
    'active',
    'inactive',
    'blocked'
);
```

Después puedes utilizarlo:

```sql
status user_status
```

Los valores permitidos quedan limitados a los valores definidos en el `ENUM`.

```text
active
inactive
blocked
```

---

### 🆚 ENUM vs CHECK

Otra forma de limitar los valores es mediante `CHECK`.

Por ejemplo:

```sql
status TEXT
CHECK (status IN ('active', 'inactive', 'blocked'))
```

Por lo tanto:

| `ENUM`                                                   | `CHECK`                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- |
| Puede utilizarse para restringir los valores permitidos. | Puede utilizarse para restringir los valores permitidos. |

Ambos pueden utilizarse para restringir los valores permitidos, pero funcionan de manera diferente.

---

## 🚫 NULL

`NULL` representa la **ausencia de un valor**.

No significa:

| Valor   | No significa |
| ------- | ------------ |
| `0`     | `NULL`       |
| `''`    | `NULL`       |
| `FALSE` | `NULL`       |

Por ejemplo:

```sql
middle_name TEXT
```

puede tener:

```text
middle_name = NULL
```

cuando no existe un valor almacenado.

---

## 🔷 Special Types

PostgreSQL también dispone de otros tipos de datos especializados.

Estos forman parte de los **Special Types** y permiten representar información que no encaja únicamente en números, texto, booleanos o fechas.
