# 📄 04 - Users & Roles ⭐⭐


## 📑 Índice 

- [📄 04 - Users \& Roles ⭐⭐](#-04---users--roles-)
  - [📑 Índice](#-índice)
  - [👤 Database Users](#-database-users)
  - [🛡️ Roles](#️-roles)
  - [👤 User vs Role](#-user-vs-role)
  - [🔗 Role Inheritance](#-role-inheritance)
- [🚀 Application Database User](#-application-database-user)
- [👑 Admin User](#-admin-user)
- [👀 Read-only User](#-read-only-user)
- [⚙️ Service Accounts](#️-service-accounts)
- [🧩 Separation of Users](#-separation-of-users)
- [⚠️ ¿Por qué la aplicación no debería usar un administrador?](#️-por-qué-la-aplicación-no-debería-usar-un-administrador)
    - [❌ Mala práctica](#-mala-práctica)
    - [✅ Mejor práctica](#-mejor-práctica)
## 👤 Database Users

Un **database user** es una identidad que puede autenticarse y acceder a una base de datos.

Un usuario puede tener determinados permisos para:

* Leer datos.
* Insertar datos.
* Modificar datos.
* Eliminar datos.
* Ejecutar determinadas operaciones.

Conceptualmente:

```text
Application
    ↓
Database User
    ↓
Permissions
    ↓
Database
```

---

## 🛡️ Roles

Un **Role** representa una identidad o conjunto de permisos dentro de la database.

Los roles permiten organizar y controlar el acceso a los recursos.

Conceptualmente:

```text
Role
  ↓
Permissions
  ↓
Database Objects
```

Dependiendo del DBMS, un role puede representar tanto a un usuario como a un conjunto de permisos reutilizables.

---

## 👤 User vs Role

La diferencia depende del sistema de database, pero conceptualmente:

| Concepto | Representa                       |
| -------- | -------------------------------- |
| **User** | Identidad utilizada para acceder |
| **Role** | Identidad / conjunto de permisos |

En PostgreSQL, por ejemplo, **users y roles están estrechamente relacionados**: un usuario es esencialmente un role que tiene capacidad de login.

---

## 🔗 Role Inheritance

Los roles pueden heredar permisos de otros roles.

Conceptualmente:

```text
Role A
   ↓
Permissions

Role B
   ↓
inherits Role A
   ↓
Permissions de A
```

Esto permite reutilizar permisos sin tener que asignarlos individualmente a cada usuario.

---

# 🚀 Application Database User

La aplicación debería utilizar una identidad específica para conectarse a la database.

Por ejemplo:

```text
Application
    ↓
app_user
    ↓
Database
```

Ese usuario debería tener únicamente los permisos que la aplicación necesita.

Por ejemplo:

```text
app_user
 ├── SELECT
 ├── INSERT
 ├── UPDATE
 └── DELETE
```

---

# 👑 Admin User

Un **admin user** tiene permisos mucho más amplios.

Puede realizar operaciones como:

```text
CREATE
ALTER
DROP
GRANT
REVOKE
```

Por eso debe utilizarse para tareas administrativas y no como identidad habitual de una aplicación.

---

# 👀 Read-only User

Un **read-only user** solamente necesita permisos de lectura.

Por ejemplo:

```text
readonly_user
      ↓
   SELECT
      ↓
   Database
```

No debería poder:

```text
❌ INSERT
❌ UPDATE
❌ DELETE
```

Puede ser útil para:

* Reportes.
* Analytics.
* Dashboards.
* Consultas de lectura.
* Herramientas que no necesitan modificar datos.

---

# ⚙️ Service Accounts

Una **Service Account** es una identidad utilizada por una aplicación, servicio o proceso en lugar de una persona.

Por ejemplo:

```text
Backend API
    ↓
service_account
    ↓
Database
```

Esto permite separar las identidades utilizadas por diferentes aplicaciones o servicios.

---

# 🧩 Separation of Users

No todas las aplicaciones o procesos deberían utilizar el mismo usuario.

Por ejemplo:

```text
Database
   │
   ├── admin
   │
   ├── app_user
   │
   └── readonly_user
```

Cada identidad puede tener permisos diferentes.

| Identidad         | Permisos                                  |
| ----------------- | ----------------------------------------- |
| **admin**         | Administración completa                   |
| **app_user**      | Operaciones necesarias para la aplicación |
| **readonly_user** | Solo lectura                              |

---

# ⚠️ ¿Por qué la aplicación no debería usar un administrador?

Porque si las credenciales de la aplicación fueran comprometidas, el atacante podría obtener todos los permisos del administrador.

### ❌ Mala práctica

```text
Application
     ↓
admin
     ↓
Full Database Access
```

### ✅ Mejor práctica

```text
Application
     ↓
app_user
     ↓
Solo permisos necesarios
     ↓
Database
```

Esto aplica directamente al:

> **Principle of Least Privilege**

La aplicación debe tener **solamente los permisos que realmente necesita**.
