# 📄 03 - Parameterized Queries.md ⭐⭐⭐

## 📑 Índice

- [📄 03 - Parameterized Queries.md ⭐⭐⭐](#-03---parameterized-queriesmd-)
  - [📑 Índice](#-índice)
  - [🔐 ¿Qué es una Parameterized Query?](#-qué-es-una-parameterized-query)
  - [🛡️ Prepared Statements](#️-prepared-statements)
  - [🔗 Separación entre SQL y User Input](#-separación-entre-sql-y-user-input)
    - [❌ Incorrecto](#-incorrecto)
    - [✅ Correcto](#-correcto)
  - [⚙️ ¿Cómo funciona conceptualmente?](#️-cómo-funciona-conceptualmente)
  - [🛡️ ¿Por qué evita SQL Injection?](#️-por-qué-evita-sql-injection)
  - [🔢 Parámetros](#-parámetros)
  - [🌐 Queries desde Backend](#-queries-desde-backend)
  - [🧩 Raw SQL seguro](#-raw-sql-seguro)
    - [❌ Raw SQL inseguro](#-raw-sql-inseguro)
    - [✅ Raw SQL parametrizado](#-raw-sql-parametrizado)
  - [📦 ORM y Queries Parametrizadas](#-orm-y-queries-parametrizadas)
  - [⚠️ Nunca concatenes input del usuario](#️-nunca-concatenes-input-del-usuario)
- [🧠 FLUJO FINAL](#-flujo-final)
    - [🔥 Concepto fundamental](#-concepto-fundamental)

## 🔐 ¿Qué es una Parameterized Query?

Una **Parameterized Query** es una consulta SQL en la que la estructura de la consulta y los valores proporcionados por el usuario se mantienen separados.

La idea fundamental es:

```text
SQL
 +
Parameters
     ↓
Database
```

En lugar de construir una query concatenando strings:

```text
SQL + User Input
     ↓
Database
```

Esto ayuda a prevenir **SQL Injection**.

---

## 🛡️ Prepared Statements

Un **Prepared Statement** consiste en preparar primero la estructura de una consulta y proporcionar los valores posteriormente como parámetros.

Conceptualmente:

```text
Prepare SQL
     ↓
SQL Structure
     ↓
Provide Parameters
     ↓
Execute
```

La database recibe:

```text
SQL
+
Values
```

en lugar de una única cadena construida dinámicamente.

---

## 🔗 Separación entre SQL y User Input

Este es el concepto más importante.

### ❌ Incorrecto

```text
User Input
    ↓
String Concatenation
    ↓
SQL Query
    ↓
Database
```

El input del usuario puede terminar modificando la estructura de la consulta.

### ✅ Correcto

```text
User Input
    ↓
Parameter
    ↓
SQL Query
    ↓
Database
```

El input se trata como **dato**, no como código SQL.

---

## ⚙️ ¿Cómo funciona conceptualmente?

Supongamos que queremos buscar un usuario por email.

La idea segura es:

```text
SQL:
SELECT * FROM users WHERE email = ?
```

Y posteriormente:

```text
Parameter:
user@example.com
```

Conceptualmente:

```text
SQL Template
     +
email value
     ↓
Database
```

La estructura SQL permanece separada del valor.

---

## 🛡️ ¿Por qué evita SQL Injection?

Porque el valor proporcionado por el usuario no se interpreta como parte de la estructura SQL.

```text
User Input
     ↓
Parameter
     ↓
Treated as DATA
     ↓
Database
```

En cambio, con concatenación:

```text
User Input
     ↓
String Concatenation
     ↓
Treated as SQL
     ↓
Database
```

Por eso las consultas parametrizadas son una de las principales defensas contra SQL Injection.

---

## 🔢 Parámetros

Los parámetros son los valores que se proporcionan a una consulta separadamente.

Conceptualmente:

```text
Query:
SELECT * FROM users WHERE id = ?

Parameter:
123
```

También pueden existir múltiples parámetros:

```text
Query
   +
Parameter 1
   +
Parameter 2
   +
Parameter 3
   ↓
Database
```

---

## 🌐 Queries desde Backend

En una aplicación backend el flujo normalmente es:

```text
Frontend
   ↓
HTTP Request
   ↓
Express
   ↓
Service
   ↓
Database Query
   ↓
Database
```

Cuando la query utiliza información proveniente del usuario:

```text
Frontend
   ↓
User Input
   ↓
Backend
   ↓
Parameterized Query
   ↓
Database
```

La aplicación debe mantener separados el SQL y los valores.

---

## 🧩 Raw SQL seguro

Utilizar **Raw SQL** no significa necesariamente que sea inseguro.

El problema aparece cuando se construye de forma insegura.

### ❌ Raw SQL inseguro

```text
User Input
    ↓
String Concatenation
    ↓
Raw SQL
    ↓
Database
```

### ✅ Raw SQL parametrizado

```text
Raw SQL
   +
Parameters
   ↓
Database
```

Por lo tanto:

> **Raw SQL puede ser seguro si utiliza correctamente parámetros.**

---

## 📦 ORM y Queries Parametrizadas

Los ORMs normalmente proporcionan mecanismos para generar consultas parametrizadas.

Conceptualmente:

```text
Application
     ↓
ORM
     ↓
Parameterized Query
     ↓
Database
```

Esto aplica a herramientas como:

```text
Prisma
TypeORM
```

Pero también a drivers de database como:

```text
pg
MySQL
```

El principio es el mismo:

```text
SQL
+
Parameters
↓
Database
```

---

## ⚠️ Nunca concatenes input del usuario

Debes recordar esta regla:

> **Nunca construyas queries SQL concatenando directamente input del usuario.**

Evita el patrón:

```text
"SELECT ... WHERE name = '" + userInput + "'"
```

La alternativa correcta es utilizar:

```text
SQL
+
Parameters
```

---

# 🧠 FLUJO FINAL

```text
              USER INPUT
                   │
                   ▼
                Backend
                   │
                   ▼
          Parameterized Query
              │          │
              │          │
             SQL      Parameters
              │          │
              └────┬─────┘
                   ▼
                Database
```

Y esto es válido independientemente de si utilizas:

```text
Express
Prisma
TypeORM
pg
MySQL
```

### 🔥 Concepto fundamental

> **La seguridad viene de separar la estructura SQL de los valores proporcionados por el usuario, no simplemente de utilizar una determinada herramienta.**
