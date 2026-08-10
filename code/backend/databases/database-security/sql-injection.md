# 📄 02 - SQL Injection ⭐⭐⭐

## 📑 Índice 

- [📄 02 - SQL Injection ⭐⭐⭐](#-02---sql-injection-)
  - [📑 Índice](#-índice)
  - [💉 ¿Qué es SQL Injection?](#-qué-es-sql-injection)
  - [⚠️ ¿Cómo ocurre?](#️-cómo-ocurre)
    - [🧠 Idea clave](#-idea-clave)
- [🔎 User Input + SQL](#-user-input--sql)
- [🔐 SQL Injection en Login](#-sql-injection-en-login)
- [🔎 SQL Injection en búsquedas](#-sql-injection-en-búsquedas)
- [🎛️ SQL Injection en filtros](#️-sql-injection-en-filtros)
- [🔗 SQL Injection en parámetros](#-sql-injection-en-parámetros)
- [💥 Consecuencias](#-consecuencias)
- [🛡️ ¿Cómo prevenir SQL Injection?](#️-cómo-prevenir-sql-injection)
- [🔐 Parameterized Queries](#-parameterized-queries)
    - [🧠 Idea fundamental](#-idea-fundamental)
- [📦 Prepared Statements](#-prepared-statements)
- [🧩 ORM y SQL Injection](#-orm-y-sql-injection)
- [⚠️ ORM ≠ Seguridad automática](#️-orm--seguridad-automática)
- [🧠 FLUJO CORRECTO](#-flujo-correcto)
    - [🔥 Lo que debes dominar](#-lo-que-debes-dominar)

## 💉 ¿Qué es SQL Injection?

**SQL Injection** es una vulnerabilidad que ocurre cuando datos proporcionados por un usuario son incorporados incorrectamente dentro de una consulta SQL.

El atacante intenta conseguir que su entrada sea interpretada como **parte de la consulta SQL**, en lugar de tratarse simplemente como un valor.

El flujo problemático es:

```text
User Input
    ↓
Backend
    ↓
SQL Query
    ↓
Database
```

---

## ⚠️ ¿Cómo ocurre?

El problema aparece cuando el backend construye una query utilizando directamente información proporcionada por el usuario.

Conceptualmente:

```text
User Input
    ↓
SQL concatenado
    ↓
Database
```

En este escenario, el input puede modificar la estructura o lógica de la consulta.

### 🧠 Idea clave

> **El problema no es que el usuario proporcione datos, sino que esos datos sean tratados como código SQL.**

---

# 🔎 User Input + SQL

Una aplicación puede recibir información desde:

* Formularios
* Query parameters
* URL parameters
* Request body
* Headers
* Filtros
* Búsquedas

Por ejemplo:

```text
Frontend
   ↓
username
password
   ↓
Backend
   ↓
SQL Query
```

Si esos valores se incorporan incorrectamente a SQL, puede aparecer una vulnerabilidad.

---

# 🔐 SQL Injection en Login

Un login puede ser vulnerable si utiliza directamente los valores introducidos por el usuario para construir la consulta.

```text
Login
  ↓
Username + Password
  ↓
SQL Query
  ↓
Database
```

El problema aparece cuando los valores del usuario pueden alterar la lógica de esa query.

Por eso los sistemas de autenticación deben utilizar consultas seguras y parametrizadas.

---

# 🔎 SQL Injection en búsquedas

También puede ocurrir en búsquedas:

```text
Search Input
     ↓
Backend
     ↓
SQL Query
     ↓
Database
```

Por ejemplo, una aplicación que permite buscar usuarios, productos o artículos debe tratar el término de búsqueda como **un valor**, no como código SQL.

---

# 🎛️ SQL Injection en filtros

Los filtros también pueden representar un riesgo:

```text
Filter
  ↓
Backend
  ↓
SQL Query
  ↓
Database
```

Esto incluye filtros enviados mediante:

* Query parameters
* Request body
* Formularios
* APIs

---

# 🔗 SQL Injection en parámetros

Cualquier dato controlado por el usuario que termine formando parte de una query debe tratarse cuidadosamente.

```text
URL Parameter
      ↓
Backend
      ↓
SQL
```

Por ejemplo:

```text
GET /users/:id
```

El `id` proviene del cliente, por lo que el backend debe utilizarlo de manera segura al realizar la consulta.

---

# 💥 Consecuencias

Una SQL Injection puede permitir que un atacante:

* Acceda a información que no debería poder consultar.
* Modifique datos.
* Elimine información.
* Evite restricciones de una consulta.
* Acceda a información sensible.
* En algunos escenarios, provoque consecuencias más graves dependiendo de los permisos de la database.

La gravedad depende también de los **permisos que tenga el usuario de database utilizado por la aplicación**.

Por eso SQL Injection y **Least Privilege** están relacionados.

---

# 🛡️ ¿Cómo prevenir SQL Injection?

La principal defensa es utilizar:

* Parameterized Queries
* Prepared Statements
* APIs seguras de los database drivers
* ORMs correctamente utilizados
* Validación de entrada como capa adicional

La idea fundamental es:

```text
❌ User Input
      ↓
   SQL concatenado
      ↓
   Database
```

vs.

```text
✅ User Input
      ↓
Parameterized Query
      ↓
   Database
```

---

# 🔐 Parameterized Queries

Una **Parameterized Query** separa la estructura SQL de los valores proporcionados por el usuario.

Conceptualmente:

```text
SQL Template
     +
User Values
     ↓
Database
```

El valor proporcionado por el usuario se trata como **dato**, no como parte de la estructura SQL.

### 🧠 Idea fundamental

> **Nunca construyas SQL concatenando directamente input no confiable del usuario.**

---

# 📦 Prepared Statements

Un **Prepared Statement** permite preparar una consulta SQL y proporcionar posteriormente sus valores como parámetros.

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

Esto evita que los valores proporcionados por el usuario sean interpretados como parte de la estructura de la consulta.

---

# 🧩 ORM y SQL Injection

Los ORMs normalmente proporcionan APIs que utilizan mecanismos seguros para construir consultas.

Por ejemplo, conceptualmente:

```text
Application
     ↓
ORM
     ↓
Parameterized SQL
     ↓
Database
```

Esto puede reducir considerablemente el riesgo de SQL Injection.

Pero:

> **Utilizar un ORM no significa automáticamente que una aplicación sea segura.**

---

# ⚠️ ORM ≠ Seguridad automática

Un ORM puede protegerte cuando utilizas correctamente sus APIs normales, pero todavía puedes introducir vulnerabilidades si:

* Construyes SQL dinámicamente.
* Utilizas Raw SQL incorrectamente.
* Concatenas input del usuario.
* Utilizas APIs inseguras.
* Permites que datos no confiables formen parte de la estructura de una query.

Por eso debes entender qué está haciendo realmente el ORM.

```text
ORM
 ↓
SQL
 ↓
Database
```

No debes asumir:

```text
ORM
 ↓
🛡️ Seguridad automática
```

---

# 🧠 FLUJO CORRECTO

La idea que debes memorizar conceptualmente es:

```text
User Input
     ↓
Backend
     ↓
Parameterized Query
     ↓
Database
```

Y evitar:

```text
User Input
     ↓
SQL concatenado
     ↓
Database
```

### 🔥 Lo que debes dominar

Al terminar este documento deberías poder explicar:

> **Qué es SQL Injection, por qué ocurre, dónde puede aparecer y cómo prevenirla mediante consultas parametrizadas y prepared statements, entendiendo además que utilizar un ORM no garantiza seguridad automática.**
