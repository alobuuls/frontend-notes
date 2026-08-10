# 📄 05 - Permissions ⭐⭐⭐

# 📑 Índice 

- [📄 05 - Permissions ⭐⭐⭐](#-05---permissions-)
- [📑 Índice](#-índice)
  - [🔐 Permissions / Privileges](#-permissions--privileges)
  - [`GRANT`](#grant)
  - [`REVOKE`](#revoke)
- [👀 Read Permissions](#-read-permissions)
- [✏️ Write Permissions](#️-write-permissions)
- [📋 Table Permissions](#-table-permissions)
- [📁 Schema Permissions](#-schema-permissions)
- [🗄️ Database Permissions](#️-database-permissions)
- [🛡️ Least Privilege](#️-least-privilege)
- [👥 Role-Based Permissions](#-role-based-permissions)
- [🔥 Authentication vs Authorization](#-authentication-vs-authorization)
    - [Authentication](#authentication)
    - [Authorization](#authorization)
## 🔐 Permissions / Privileges

Los **permissions** o **privileges** determinan qué operaciones puede realizar un usuario o rol sobre los recursos de la database.

Conceptualmente:

```text
Role
 ↓
Permissions
 ↓
Resources
```

Por ejemplo:

```text
app_user
   │
   ├── SELECT
   ├── INSERT
   ├── UPDATE
   └── DELETE
```

---

## `GRANT`

`GRANT` se utiliza para **otorgar permisos** a un usuario o rol.

Conceptualmente:

```text
GRANT
  ↓
Otorga permiso
  ↓
User / Role
```

Por ejemplo:

```sql
GRANT SELECT ON users TO app_user;
```

Esto permite que `app_user` pueda consultar la tabla `users`.

---

## `REVOKE`

`REVOKE` se utiliza para **retirar permisos** previamente otorgados.

```sql
REVOKE SELECT ON users FROM app_user;
```

Conceptualmente:

```text
Permission
    ↓
REVOKE
    ↓
Permission removed
```

---

# 👀 Read Permissions

Los permisos de lectura permiten consultar información.

El principal permiso es:

```text
SELECT
```

Por ejemplo:

```text
readonly_user
      ↓
   SELECT
      ↓
   users
```

Puede leer los datos, pero no necesariamente modificarlos.

---

# ✏️ Write Permissions

Los permisos de escritura permiten modificar información.

Los principales son:

```text
INSERT
UPDATE
DELETE
```

Por ejemplo:

```text
app_user
   │
   ├── SELECT
   ├── INSERT
   ├── UPDATE
   └── DELETE
```

---

# 📋 Table Permissions

Los permisos pueden aplicarse específicamente sobre tablas.

Por ejemplo:

```sql
GRANT SELECT ON users TO readonly_user;
```

El permiso afecta a la tabla indicada.

Puedes controlar qué roles pueden:

```text
SELECT
INSERT
UPDATE
DELETE
```

sobre determinadas tablas.

---

# 📁 Schema Permissions

Los schemas también pueden tener permisos.

Esto permite controlar qué roles pueden acceder a objetos contenidos dentro de un schema.

Conceptualmente:

```text
Schema
   ↓
Permissions
   ↓
Role
```

En PostgreSQL, por ejemplo, existe el privilegio:

```text
USAGE
```

para permitir que un rol pueda acceder a objetos dentro de un schema, junto con los permisos específicos sobre esos objetos.

---

# 🗄️ Database Permissions

Una database también puede tener permisos.

Estos controlan determinadas capacidades sobre la database, como la posibilidad de conectarse a ella.

Conceptualmente:

```text
Database
   ↓
Permissions
   ↓
Role
```

---

# 🛡️ Least Privilege

Cada usuario o rol debería recibir **únicamente los permisos necesarios para realizar su trabajo**.

Por ejemplo:

```text
app_user
   │
   ├── SELECT
   ├── INSERT
   ├── UPDATE
   └── DELETE
```

Pero:

```text
app_user
   ↓
❌ DROP DATABASE
```

La aplicación no debería tener permisos administrativos que no necesita.

Esto reduce el impacto de:

* Credenciales comprometidas.
* Errores de programación.
* Ataques.
* Operaciones accidentales.

---

# 👥 Role-Based Permissions

En lugar de asignar permisos individualmente a cada usuario, puedes definir roles con determinados permisos.

Por ejemplo:

```text
readonly_role
   ↓
SELECT
```

```text
app_role
   ↓
SELECT
INSERT
UPDATE
DELETE
```

Y después asignar esos roles a diferentes usuarios.

```text
Users
  │
  ├── user_1 → readonly_role
  ├── user_2 → app_role
  └── user_3 → app_role
```

Esto facilita administrar permisos de manera centralizada.

---

# 🔥 Authentication vs Authorization

No son lo mismo.

### Authentication

Responde:

> **¿Quién eres?**

```text
Credentials
    ↓
Authentication
    ↓
Identity
```

### Authorization

Responde:

> **¿Qué puedes hacer?**

```text
Identity
    ↓
Permissions
    ↓
Allowed / Denied
```

En este documento estás estudiando principalmente **Authorization dentro de la database**.
