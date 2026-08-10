# 📄 PostgreSQL Functions

PostgreSQL permite utilizar **Functions** para realizar operaciones sobre los datos y también permite crear funciones propias que viven dentro de la base de datos.

La idea general es:

```text
Input
  ↓
Function
  ↓
Output
```

Las funciones pueden trabajar con:

```text
Strings
Dates / Time
Numbers
Rows
Aggregated data
```

Y también puedes crear tus propias funciones utilizando:

```text
SQL
PL/pgSQL
```

---
## 📑 Índice

- [📄 PostgreSQL Functions](#-postgresql-functions)
  - [📑 Índice](#-índice)
- [🧠 BUILT-IN FUNCTIONS](#-built-in-functions)
- [1️⃣ 🔤 STRING FUNCTIONS](#1️⃣--string-functions)
  - [🔽 LOWER()](#-lower)
  - [🔼 UPPER()](#-upper)
  - [🔗 CONCAT()](#-concat)
  - [📊 String Functions](#-string-functions)
    - [💡 Tip](#-tip)
- [2️⃣ 📅 DATE / TIME FUNCTIONS](#2️⃣--date--time-functions)
  - [🕐 NOW()](#-now)
  - [📅 CURRENT\_DATE](#-current_date)
  - [🆚 NOW() vs CURRENT\_DATE](#-now-vs-current_date)
- [3️⃣ 🔢 NUMERIC FUNCTIONS](#3️⃣--numeric-functions)
  - [🔄 ROUND()](#-round)
  - [⬆️ CEIL()](#️-ceil)
  - [⬇️ FLOOR()](#️-floor)
  - [🆚 ROUND vs CEIL vs FLOOR](#-round-vs-ceil-vs-floor)
- [4️⃣ 📊 AGGREGATE FUNCTIONS](#4️⃣--aggregate-functions)
  - [🧠 Ejemplo conceptual](#-ejemplo-conceptual)
  - [📌 Idea principal](#-idea-principal)
- [5️⃣ 🧑‍💻 USER-DEFINED FUNCTIONS](#5️⃣--user-defined-functions)
- [🏗️ CREATE FUNCTION](#️-create-function)
- [6️⃣ 🧩 SQL FUNCTIONS](#6️⃣--sql-functions)
  - [🧠 ¿Cuándo tiene sentido?](#-cuándo-tiene-sentido)
- [7️⃣ 🐘 PL/pgSQL FUNCTIONS](#7️⃣--plpgsql-functions)
    - [🧠 No necesitas memorizar todavía toda la sintaxis.](#-no-necesitas-memorizar-todavía-toda-la-sintaxis)
- [8️⃣ 📥 PARAMETERS](#8️⃣--parameters)
  - [🧩 Múltiples Parameters](#-múltiples-parameters)
- [9️⃣ 📤 RETURN VALUES](#9️⃣--return-values)
  - [🧠 Input → Function → Output](#-input--function--output)
- [🔄 EJEMPLO COMPLETO](#-ejemplo-completo)
- [🆚 SQL FUNCTIONS vs PL/pgSQL FUNCTIONS](#-sql-functions-vs-plpgsql-functions)
- [🧠 MAPA MENTAL](#-mapa-mental)
- [⚠️ ERRORES COMUNES](#️-errores-comunes)
    - [❌ 1. Confundir una Function con una Query](#-1-confundir-una-function-con-una-query)
    - [❌ 2. Confundir Parameters con Return Values](#-2-confundir-parameters-con-return-values)
    - [❌ 3. Pensar que todas las funciones son User-Defined](#-3-pensar-que-todas-las-funciones-son-user-defined)
    - [❌ 4. Confundir SQL Functions con PL/pgSQL Functions](#-4-confundir-sql-functions-con-plpgsql-functions)
- [🎯 IDEA PRINCIPAL](#-idea-principal-1)

---

# 🧠 BUILT-IN FUNCTIONS

Las **Built-in Functions** son funciones que PostgreSQL proporciona directamente.

No necesitas crearlas.

Puedes utilizarlas directamente dentro de tus queries:

```sql
SELECT LOWER('HELLO');
```

Resultado:

```text
hello
```

Conceptualmente:

```text
Value
  ↓
Built-in Function
  ↓
Result
```

PostgreSQL proporciona funciones para diferentes tipos de operaciones:

```text
String
Date / Time
Numeric
Aggregate
```

---

# 1️⃣ 🔤 STRING FUNCTIONS

Las **String Functions** trabajan con valores de texto.

Algunas de las más importantes son:

```text
LOWER()
UPPER()
CONCAT()
```

---

## 🔽 LOWER()

`LOWER()` convierte un texto a minúsculas.

```sql
SELECT LOWER('HELLO');
```

Resultado:

```text
hello
```

Otro ejemplo:

```sql
SELECT LOWER('Ana@example.com');
```

Resultado:

```text
ana@example.com
```

Conceptualmente:

```text
'HELLO'
   ↓
LOWER()
   ↓
'hello'
```

---

## 🔼 UPPER()

`UPPER()` convierte un texto a mayúsculas.

```sql
SELECT UPPER('hello');
```

Resultado:

```text
HELLO
```

Ejemplo:

```sql
SELECT UPPER('Ana');
```

Resultado:

```text
ANA
```

Conceptualmente:

```text
'hello'
   ↓
UPPER()
   ↓
'HELLO'
```

---

## 🔗 CONCAT()

`CONCAT()` permite combinar diferentes valores de texto.

```sql
SELECT CONCAT('Hello', ' ', 'World');
```

Resultado:

```text
Hello World
```

También puedes utilizar columnas:

```sql
SELECT CONCAT(first_name, ' ', last_name)
FROM users;
```

Resultado conceptual:

```text
first_name
     +
last_name
     ↓
Full Name
```

Por ejemplo:

```text
Ana + Francisco
      ↓
Ana Francisco
```

---

## 📊 String Functions

| Function   | Función                      |
| ---------- | ---------------------------- |
| `LOWER()`  | Convierte texto a minúsculas |
| `UPPER()`  | Convierte texto a mayúsculas |
| `CONCAT()` | Combina valores              |

### 💡 Tip

Cuando veas:

```text
String
 ↓
Function
 ↓
String transformado
```

estás trabajando con una **String Function**.

---

# 2️⃣ 📅 DATE / TIME FUNCTIONS

Las **Date / Time Functions** trabajan con valores relacionados con fechas y horas.

Entre las funciones importantes de esta ruta están:

```text
NOW()
CURRENT_DATE
```

---

## 🕐 NOW()

`NOW()` devuelve la fecha y hora actuales.

```sql
SELECT NOW();
```

Resultado conceptual:

```text
2026-08-10 16:30:00
```

El valor exacto depende del momento en el que se ejecuta la consulta.

Conceptualmente:

```text
Current Date + Time
        ↓
       NOW()
        ↓
 Timestamp
```

Puede utilizarse, por ejemplo, al crear un registro:

```sql
INSERT INTO orders (created_at)
VALUES (NOW());
```

---

## 📅 CURRENT_DATE

`CURRENT_DATE` devuelve la fecha actual.

```sql
SELECT CURRENT_DATE;
```

Resultado:

```text
2026-08-10
```

A diferencia de `NOW()`:

```text
NOW()
 ↓
Fecha + hora

CURRENT_DATE
 ↓
Solo fecha
```

---

## 🆚 NOW() vs CURRENT_DATE

| Function       | Devuelve     |
| -------------- | ------------ |
| `NOW()`        | Fecha + hora |
| `CURRENT_DATE` | Solo fecha   |

Ejemplo:

```text
NOW()
→ 2026-08-10 16:30:00

CURRENT_DATE
→ 2026-08-10
```

---

# 3️⃣ 🔢 NUMERIC FUNCTIONS

Las **Numeric Functions** trabajan con números.

En esta ruta tenemos:

```text
ROUND()
CEIL()
FLOOR()
```

---

## 🔄 ROUND()

`ROUND()` redondea un número.

```sql
SELECT ROUND(10.6);
```

Resultado:

```text
11
```

Otro ejemplo:

```sql
SELECT ROUND(10.4);
```

Resultado:

```text
10
```

También puede utilizarse para controlar la cantidad de decimales.

```sql
SELECT ROUND(10.456, 2);
```

Resultado:

```text
10.46
```

Conceptualmente:

```text
10.456
   ↓
ROUND()
   ↓
10.46
```

---

## ⬆️ CEIL()

`CEIL()` redondea hacia arriba.

```sql
SELECT CEIL(10.2);
```

Resultado:

```text
11
```

Incluso:

```sql
SELECT CEIL(10.01);
```

Resultado:

```text
11
```

Conceptualmente:

```text
10.01
  ↓
CEIL()
  ↓
 11
```

---

## ⬇️ FLOOR()

`FLOOR()` redondea hacia abajo.

```sql
SELECT FLOOR(10.9);
```

Resultado:

```text
10
```

Conceptualmente:

```text
10.9
 ↓
FLOOR()
 ↓
10
```

---

## 🆚 ROUND vs CEIL vs FLOOR

| Function  | Comportamiento                |
| --------- | ----------------------------- |
| `ROUND()` | Redondea al valor más cercano |
| `CEIL()`  | Redondea hacia arriba         |
| `FLOOR()` | Redondea hacia abajo          |

Visualmente:

```text
10.6

ROUND() → 11
CEIL()  → 11
FLOOR() → 10
```

---

# 4️⃣ 📊 AGGREGATE FUNCTIONS

Las **Aggregate Functions** realizan un cálculo sobre un conjunto de filas y producen un resultado agregado.

Conceptualmente:

```text
Multiple Rows
     ↓
Aggregate Function
     ↓
One Result
```

Por ejemplo:

```text
10
20
30
40
 ↓
Aggregate
 ↓
100
```

Las aggregate functions se utilizan para obtener información resumida de múltiples registros.

---

## 🧠 Ejemplo conceptual

Imagina:

```text
sales

amount
------
100
200
300
```

Una función agregada puede procesar:

```text
100
200
300
 ↓
Aggregate Function
 ↓
Resultado
```

A diferencia de una función como:

```text
LOWER()
```

que trabaja sobre un valor individual:

```text
'HELLO'
   ↓
LOWER()
   ↓
'hello'
```

una Aggregate Function trabaja sobre un conjunto de filas.

---

## 📌 Idea principal

```text
Normal Function
      ↓
One value
      ↓
One result

Aggregate Function
      ↓
Multiple rows
      ↓
Aggregated result
```

---

# 5️⃣ 🧑‍💻 USER-DEFINED FUNCTIONS

Además de las funciones que PostgreSQL proporciona, puedes crear tus propias funciones.

Estas se conocen como:

> **User-Defined Functions**

La idea es:

```text
Input
  ↓
Your Function
  ↓
Output
```

En lugar de depender solamente de:

```text
LOWER()
NOW()
ROUND()
```

puedes crear una función que realice una operación específica para tu aplicación.

---

# 🏗️ CREATE FUNCTION

Las funciones propias se crean utilizando:

```sql
CREATE FUNCTION
```

Conceptualmente:

```text
CREATE FUNCTION
       ↓
Define Function
       ↓
Parameters
       ↓
Function Body
       ↓
Return Value
```

Una estructura simplificada puede verse así:

```sql
CREATE FUNCTION function_name()
RETURNS integer
AS $$
    ...
$$ LANGUAGE SQL;
```

La estructura importante que debes reconocer es:

```text
CREATE FUNCTION
      ↓
Function name
      ↓
Parameters
      ↓
RETURNS
      ↓
Function body
```

---

# 6️⃣ 🧩 SQL FUNCTIONS

Una **SQL Function** es una función cuyo cuerpo está escrito utilizando SQL.

Por ejemplo:

```sql
CREATE FUNCTION get_user_count()
RETURNS integer
AS $$
    SELECT COUNT(*)
    FROM users;
$$ LANGUAGE SQL;
```

Después puedes utilizarla:

```sql
SELECT get_user_count();
```

Conceptualmente:

```text
get_user_count()
       ↓
SELECT COUNT(*)
       ↓
Número de usuarios
```

La función encapsula la query:

```text
Query
 ↓
Function
 ↓
Reusable operation
```

---

## 🧠 ¿Cuándo tiene sentido?

Una SQL Function puede tener sentido cuando quieres encapsular una operación SQL que necesitas reutilizar.

En lugar de repetir:

```sql
SELECT COUNT(*)
FROM users;
```

puedes tener:

```sql
get_user_count()
```

y llamar a la función.

---

# 7️⃣ 🐘 PL/pgSQL FUNCTIONS

PostgreSQL también permite crear funciones utilizando:

```text
PL/pgSQL
```

PL/pgSQL es el lenguaje procedural de PostgreSQL.

La diferencia conceptual es:

```text
SQL Function
     ↓
SQL statements

PL/pgSQL Function
     ↓
Procedural logic
```

Una función PL/pgSQL puede tener un cuerpo con lógica procedural.

Por ejemplo:

```sql
CREATE FUNCTION example()
RETURNS integer
LANGUAGE plpgsql
AS $$
DECLARE
    result integer;
BEGIN
    result := 10;
    RETURN result;
END;
$$;
```

La estructura básica es:

```text
CREATE FUNCTION
      ↓
DECLARE
      ↓
Variables
      ↓
BEGIN
      ↓
Procedural logic
      ↓
RETURN
```

### 🧠 No necesitas memorizar todavía toda la sintaxis.

Lo importante en este punto es entender:

```text
SQL
 ↓
Queries

PL/pgSQL
 ↓
Procedural logic inside PostgreSQL functions
```

---

# 8️⃣ 📥 PARAMETERS

Una función puede recibir valores de entrada llamados **Parameters**.

Conceptualmente:

```text
Input
  ↓
Parameter
  ↓
Function
```

Por ejemplo:

```sql
CREATE FUNCTION double_number(value integer)
RETURNS integer
AS $$
    SELECT value * 2;
$$ LANGUAGE SQL;
```

Aquí:

```text
value
 ↓
Parameter
```

Podemos llamar:

```sql
SELECT double_number(5);
```

Resultado:

```text
10
```

El flujo es:

```text
5
 ↓
value
 ↓
value * 2
 ↓
10
```

---

## 🧩 Múltiples Parameters

Una función puede recibir más de un parámetro.

Por ejemplo:

```sql
CREATE FUNCTION add_numbers(
    a integer,
    b integer
)
RETURNS integer
AS $$
    SELECT a + b;
$$ LANGUAGE SQL;
```

Llamada:

```sql
SELECT add_numbers(10, 20);
```

Resultado:

```text
30
```

Conceptualmente:

```text
10 ──┐
     ├──→ Function ──→ 30
20 ──┘
```

---

# 9️⃣ 📤 RETURN VALUES

Una función puede devolver un resultado.

Esto se define mediante:

```sql
RETURNS
```

Por ejemplo:

```sql
CREATE FUNCTION double_number(value integer)
RETURNS integer
AS $$
    SELECT value * 2;
$$ LANGUAGE SQL;
```

Aquí:

```text
RETURNS integer
```

significa que la función devuelve un valor de tipo:

```text
integer
```

---

## 🧠 Input → Function → Output

Este es uno de los modelos mentales más importantes:

```text
        INPUT
          ↓
     PARAMETERS
          ↓
      FUNCTION
          ↓
     RETURN VALUE
          ↓
        OUTPUT
```

Ejemplo:

```text
5
 ↓
double_number(5)
 ↓
10
```

---

# 🔄 EJEMPLO COMPLETO

Podemos juntar:

```text
Parameters
+
Function
+
Return Value
```

```sql
CREATE FUNCTION multiply(
    a integer,
    b integer
)
RETURNS integer
AS $$
    SELECT a * b;
$$ LANGUAGE SQL;
```

Después:

```sql
SELECT multiply(5, 4);
```

Resultado:

```text
20
```

El flujo completo:

```text
5 ─────┐
       │
       ▼
   multiply()
       ▲
       │
4 ─────┘
       ↓
     20
```

---

# 🆚 SQL FUNCTIONS vs PL/pgSQL FUNCTIONS

| SQL Function                  | PL/pgSQL Function                                     |
| ----------------------------- | ----------------------------------------------------- |
| Utiliza SQL                   | Utiliza PL/pgSQL                                      |
| Adecuada para operaciones SQL | Permite lógica procedural                             |
| Puede encapsular queries      | Puede contener lógica dentro del cuerpo de la función |

La idea que debes recordar:

```text
SQL Function
    ↓
"Ejecuta SQL"

PL/pgSQL Function
    ↓
"Ejecuta lógica procedural dentro de PostgreSQL"
```

---

# 🧠 MAPA MENTAL

```text
                 PostgreSQL Functions
                         │
             ┌───────────┴───────────┐
             ▼                       ▼
       Built-in Functions      User-Defined
             │                       │
      ┌──────┼──────┐                ▼
      ▼      ▼      ▼          CREATE FUNCTION
   String   Date   Numeric            │
      │      │      │                 ▼
      ▼      ▼      ▼            Parameters
 LOWER()  NOW()  ROUND()              │
 UPPER()  CURRENT_DATE CEIL()         ▼
 CONCAT()              FLOOR()      Function
                                       │
                                       ▼
                                  Return Value
                                       │
                            ┌──────────┴──────────┐
                            ▼                     ▼
                       SQL Function         PL/pgSQL
```

---

# ⚠️ ERRORES COMUNES

### ❌ 1. Confundir una Function con una Query

Una función puede contener una query, pero son conceptos diferentes.

```text
Query
 ↓
Se ejecuta

Function
 ↓
Puede encapsular una operación
 ↓
Puede recibir parámetros
 ↓
Puede devolver un resultado
```

---

### ❌ 2. Confundir Parameters con Return Values

```text
Parameters
   ↓
ENTRAN a la función
```

mientras:

```text
Return Value
   ↓
SALE de la función
```

Recuerda:

```text
INPUT
 ↓
Function
 ↓
OUTPUT
```

---

### ❌ 3. Pensar que todas las funciones son User-Defined

No.

PostgreSQL ya proporciona muchas funciones:

```text
LOWER()
UPPER()
NOW()
ROUND()
```

Estas son **Built-in Functions**.

Las que tú creas son:

```text
User-Defined Functions
```

---

### ❌ 4. Confundir SQL Functions con PL/pgSQL Functions

La diferencia principal de esta ruta es:

```text
SQL
 ↓
SQL statements

PL/pgSQL
 ↓
Procedural logic
```

---

# 🎯 IDEA PRINCIPAL

PostgreSQL proporciona funciones integradas y también permite crear funciones propias.

La estructura mental principal es:

```text
Built-in Functions
       ↓
Funciones que PostgreSQL ya proporciona

User-Defined Functions
       ↓
Funciones que tú creas
       ↓
CREATE FUNCTION
```

Y una función propia puede pensarse como:

```text
INPUT
  ↓
Parameters
  ↓
Function
  ↓
Return Value
  ↓
OUTPUT
```

Las funciones propias pueden escribirse utilizando:

```text
SQL
```

o:

```text
PL/pgSQL
```

Mientras que las funciones integradas incluyen categorías como:

```text
String
   ↓
LOWER()
UPPER()
CONCAT()

Date / Time
   ↓
NOW()
CURRENT_DATE

Numeric
   ↓
ROUND()
CEIL()
FLOOR()

Aggregate
   ↓
Operaciones sobre múltiples filas
```

> 🧠 **La prioridad de este tema no es memorizar cientos de funciones. Es entender qué son las funciones de PostgreSQL, reconocer las principales categorías, saber cómo crear una función propia y comprender el flujo `Input → Function → Return Value`.**
