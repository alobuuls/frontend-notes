# 📄 01 - Fundamentals ⭐⭐⭐

## 📑 Índice 

- [📄 01 - Fundamentals ⭐⭐⭐](#-01---fundamentals-)
  - [📑 Índice](#-índice)
  - [🔐 ¿Qué es Database Security?](#-qué-es-database-security)
  - [⚠️ Amenazas](#️-amenazas)
  - [🔑 Authentication vs Authorization](#-authentication-vs-authorization)
    - [Authentication](#authentication)
    - [Authorization](#authorization)
  - [👤 Database Users](#-database-users)
  - [👥 Database Roles](#-database-roles)
  - [🛡️ Permissions](#️-permissions)
  - [🔒 Principle of Least Privilege](#-principle-of-least-privilege)
    - [🧠 Idea clave](#-idea-clave)
  - [💉 SQL Injection](#-sql-injection)
  - [🛡️ Parameterized Queries](#️-parameterized-queries)
  - [🔑 Secrets](#-secrets)
  - [🔐 Credentials](#-credentials)
  - [🔒 Encryption](#-encryption)
    - [Encryption at Rest](#encryption-at-rest)
    - [Encryption in Transit](#encryption-in-transit)
  - [🌐 Network Security](#-network-security)
  - [💾 Backups y recuperación](#-backups-y-recuperación)
  - [📋 Auditoría / Logging](#-auditoría--logging)
- [🧠 VISIÓN GENERAL](#-visión-general)
    - [🔥 Idea fundamental](#-idea-fundamental)

## 🔐 ¿Qué es Database Security?

**Database Security** es el conjunto de medidas utilizadas para proteger una database contra:

* Acceso no autorizado
* Modificación de datos
* Eliminación de datos
* Robo de información
* Ataques
* Uso indebido de permisos

> **El objetivo es proteger tanto los datos como el acceso a ellos.**

---

## ⚠️ Amenazas

Debes conocer las principales amenazas que pueden afectar una database:

| Amenaza                       |
| ----------------------------- |
| SQL Injection                 |
| Credenciales comprometidas    |
| Acceso no autorizado          |
| Permisos excesivos            |
| Exposición de datos sensibles |
| Ataques a la red              |
| Pérdida de datos              |
| Configuraciones inseguras     |

---

## 🔑 Authentication vs Authorization

Son conceptos diferentes.

### Authentication

Responde:

> **¿Quién eres?**

Verifica la identidad de un usuario o sistema.

```text
User
 ↓
Credentials
 ↓
Authentication
 ↓
¿Quién eres?
```

### Authorization

Responde:

> **¿Qué puedes hacer?**

Determina qué recursos y operaciones puede utilizar un usuario autenticado.

```text
Authenticated User
       ↓
Authorization
       ↓
¿Qué puede hacer?
```

---

## 👤 Database Users

Una database puede tener **usuarios** que se utilizan para conectarse y realizar operaciones.

```text
Application
     ↓
Database User
     ↓
Database
```

Cada usuario puede tener diferentes permisos.

---

## 👥 Database Roles

Los **roles** permiten definir y administrar permisos dentro de una database.

Conceptualmente:

```text
Role
 ↓
Permissions
 ↓
Resources
```

Un usuario puede pertenecer a un rol y recibir los permisos asociados a él.

---

## 🛡️ Permissions

Los permisos determinan qué operaciones puede realizar un usuario o rol.

Por ejemplo:

```text
SELECT
INSERT
UPDATE
DELETE
```

Un usuario puede tener acceso a determinadas tablas y operaciones, pero no necesariamente a toda la database.

---

## 🔒 Principle of Least Privilege

El **Principle of Least Privilege** establece que cada usuario, aplicación o servicio debe tener **solamente los permisos necesarios para realizar su trabajo**.

```text
Application
     ↓
Database User
     ↓
Minimum Required Permissions
     ↓
Database
```

Por ejemplo, si una API solamente necesita:

```text
SELECT
INSERT
```

no debería tener innecesariamente:

```text
❌ DROP DATABASE
❌ DROP TABLE
❌ ALTER TABLE
```

### 🧠 Idea clave

> **Más permisos no significa más capacidad segura.**

Los permisos deben limitarse a lo estrictamente necesario.

---

## 💉 SQL Injection

**SQL Injection** ocurre cuando datos proporcionados por un usuario terminan siendo interpretados como parte de una consulta SQL.

Conceptualmente:

```text
User Input
    ↓
Application
    ↓
SQL Query
    ↓
❌ Input modifica la consulta
```

Esto puede permitir que un atacante altere el comportamiento de una query.

Por eso nunca debes construir queries concatenando directamente datos proporcionados por usuarios.

---

## 🛡️ Parameterized Queries

Las **Parameterized Queries** separan la consulta SQL de los valores proporcionados por el usuario.

Conceptualmente:

```text
SQL Query
    +
Parameters
    ↓
Database
```

En lugar de:

```text
User Input
    ↓
Concatenación
    ↓
SQL
```

se utilizan parámetros separados:

```text
SQL
 +
Values
 ↓
Database
```

Esto ayuda a prevenir SQL Injection.

Los ORMs y drivers modernos suelen proporcionar mecanismos para trabajar con consultas parametrizadas.

---

## 🔑 Secrets

Los **secrets** son valores sensibles utilizados por la aplicación.

Por ejemplo:

```text
Database Password
API Keys
Encryption Keys
Connection Strings
```

No deberían estar expuestos públicamente ni almacenados directamente en el código fuente.

---

## 🔐 Credentials

Las **credentials** son datos utilizados para autenticarse.

Por ejemplo:

```text
Username
Password
```

Para una database:

```text
Application
    ↓
Username + Password
    ↓
Database
```

Las credenciales deben protegerse y gestionarse adecuadamente.

---

## 🔒 Encryption

La **encryption** protege información para que no pueda ser leída fácilmente por personas no autorizadas.

Debes distinguir principalmente:

### Encryption at Rest

Protege los datos almacenados.

```text
Database
 ↓
Encrypted Storage
```

### Encryption in Transit

Protege los datos mientras viajan entre sistemas.

```text
Application
      ↓
🔒 Encrypted Connection
      ↓
Database
```

---

## 🌐 Network Security

La database también debe estar protegida a nivel de red.

Debes estudiar conceptos como:

* Firewalls
* Network access
* Private networks
* IP restrictions
* TLS/SSL
* Database ports
* Public vs private database access

Conceptualmente:

```text
Internet
   ↓
❌ Acceso directo
   ↓
Database
```

es menos seguro que:

```text
Internet
   ↓
Application
   ↓
🔒 Network Controls
   ↓
Database
```

---

## 💾 Backups y recuperación

La seguridad también incluye proteger los datos contra pérdida.

Debes estudiar:

* Database Backups
* Backup frequency
* Backup storage
* Restore
* Point-in-Time Recovery
* Disaster Recovery

El objetivo es poder recuperar los datos si ocurre:

```text
Data Loss
   ↓
Backup
   ↓
Restore
   ↓
Database Recovery
```

---

## 📋 Auditoría / Logging

La **auditoría** permite registrar actividades importantes realizadas sobre los sistemas y datos.

Debes estudiar:

* Database logs
* Access logs
* Authentication logs
* Query logging
* Audit trails
* Monitoring

Conceptualmente:

```text
User / Application
        ↓
Database
        ↓
Logs
        ↓
Audit / Monitoring
```

Esto permite investigar qué ocurrió cuando existe un problema o comportamiento sospechoso.

---

# 🧠 VISIÓN GENERAL

Todo se conecta así:

```text
                 🔐 DATABASE SECURITY
                         │
        ┌────────────────┼────────────────┐
        ↓                ↓                ↓
 Authentication    Authorization    Least Privilege
        │                │                │
        └────────────────┼────────────────┘
                         ↓
                  Database Roles
                         ↓
                    Permissions
                         ↓
                      Database
```

Y además:

```text
SQL Injection
      ↓
Parameterized Queries

Secrets / Credentials
      ↓
Secure Management

Encryption
      ↓
Data Protection

Network Security
      ↓
Protected Connections

Backups
      ↓
Data Recovery

Logging
      ↓
Auditing
```

### 🔥 Idea fundamental

> **Database Security no consiste solamente en poner una contraseña a la database.**

Se trata de controlar **quién puede acceder, qué puede hacer, cómo se protegen los datos, cómo se protegen las conexiones y cómo se recuperan y auditan los datos.**
