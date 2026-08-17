# 🐳 18. DOCKER / BACKEND BÁSICO

Esta sección es importante porque, aunque tu perfil sea **Frontend**, en una entrevista pueden querer comprobar que entiendes cómo funciona el ecosistema completo:

```text
Frontend
   ↓
API / Backend
   ↓
Base de datos
   ↓
Infraestructura
   ↓
Docker / Cloud
```

> 💡 No necesitas responder como Backend Senior, pero sí debes poder explicar **qué es cada cosa y cómo se relaciona**.

---

## 📑 Índice

- [🐳 Docker / Backend Básico](#-docker--backend-básico)
- [🔹 1. ¿Qué es Node.js?](#-1-qué-es-nodejs)
- [🔹 2. ¿Qué es npm?](#-2-qué-es-npm)
- [🔹 3. ¿Qué es Express?](#-3-qué-es-express)
- [🔥 4. ¿Qué es Docker?](#-4-qué-es-docker)
- [🔥 5. Diferencia entre una imagen y un contenedor](#-5-qué-diferencia-hay-entre-una-imagen-y-un-contenedor)
- [🔹 6. ¿Qué es Docker Compose?](#-6-qué-es-docker-compose)
- [🔹 7. ¿Qué es una variable de entorno?](#-7-qué-es-una-variable-de-entorno)
- [🔹 8. ¿Qué es una base de datos?](#-8-qué-es-una-base-de-datos)
- [🔥 9. Diferencia entre SQL y NoSQL](#-9-qué-diferencia-hay-entre-sql-y-nosql)
  - [🗃️ SQL](#-sql)
  - [📄 NoSQL](#-nosql)
- [🔹 10. ¿Qué es Firebase?](#-10-qué-es-firebase)
- [🔹 11. ¿Qué es PostgreSQL?](#-11-qué-es-postgresql)
- [🔥 12. ¿Qué es un ORM?](#-12-qué-es-un-orm)
- [🧠 Resumen para memorizar](#-resumen-para-memorizar)
- [🎯 Las que más priorizaría para entrevista Frontend](#-las-que-más-priorizaría-para-entrevista-frontend)
- [🔄 Flujos importantes Frontend + Backend](#-flujos-importantes-frontend--backend)

# 🔹 1. ¿QUÉ ES NODE.JS?

### 💬 Respuesta de entrevista

Node.js es un **entorno de ejecución de JavaScript** que permite ejecutar JavaScript fuera del navegador, utilizando el motor V8 de Chrome.

Se utiliza principalmente para desarrollar aplicaciones backend, APIs, servidores, scripts y herramientas de desarrollo.

### 🧠 Importante

```text
Chrome
   ↓
V8
   ↓
JavaScript
```

Con Node.js:

```text
Node.js
   ↓
V8
   ↓
JavaScript
   ↓
Backend / scripts / herramientas
```

### 🎯 Si te preguntan:

**"¿Node.js es un lenguaje?"**

❌ No.

Node.js es un **runtime/entorno de ejecución** para JavaScript.

---

# 🔹 2. ¿QUÉ ES NPM?

### 💬 Respuesta de entrevista

npm es el **gestor de paquetes de Node.js** y también es el nombre del registro público de paquetes JavaScript.

Permite instalar dependencias, administrar versiones y ejecutar scripts definidos en `package.json`.

Por ejemplo:

```bash
npm install express
```

Esto instala Express como dependencia del proyecto.

También puedo ejecutar scripts:

```bash
npm run start
npm run build
npm test
```

### 🧠 Archivo importante

```text
package.json
```

Contiene información como:

```json
{
  "dependencies": {
    "express": "^5.0.0"
  }
}
```

---

# 🔹 3. ¿QUÉ ES EXPRESS?

### 💬 Respuesta de entrevista

Express es un **framework minimalista para Node.js** utilizado principalmente para construir servidores y APIs HTTP.

Permite manejar:

* Rutas.
* Peticiones HTTP.
* Respuestas.
* Middleware.
* Autenticación.
* Manejo de errores.

### 🧠 Ejemplo conceptual

```text
Angular
   ↓
HTTP GET /users
   ↓
Express
   ↓
Controller
   ↓
Service
   ↓
Database
```

### 💻 Ejemplo

```javascript
app.get('/users', (req, res) => {
  res.json(users);
});
```

Express recibe la petición y devuelve una respuesta.

---

# 🔥 4. ¿QUÉ ES DOCKER?

### 💬 Respuesta de entrevista

Docker es una plataforma que permite **crear, empaquetar y ejecutar aplicaciones dentro de contenedores**, incluyendo la aplicación y las dependencias necesarias para ejecutarla.

Su objetivo principal es conseguir entornos más **consistentes y reproducibles**.

Por ejemplo:

```text
Mi computadora
       ↓
Docker
       ↓
Container
       ↓
Node + aplicación + dependencias
```

Esto evita problemas como:

> "En mi máquina funciona."

Porque podemos definir de manera controlada el entorno en el que se ejecuta la aplicación.

---

# 🔥 5. ¿QUÉ DIFERENCIA HAY ENTRE UNA IMAGEN Y UN CONTENEDOR?

Esta es una pregunta **muy típica de Docker**.

### 💬 Respuesta de entrevista

Una imagen es una **plantilla inmutable** que contiene todo lo necesario para crear un contenedor.

Un contenedor es una **instancia en ejecución de una imagen**.

### 🧠 Analogía

| Concepto       | Idea                                       |
| -------------- | ------------------------------------------ |
| **Imagen**     | Plantilla                                  |
| **Contenedor** | Instancia creada a partir de esa plantilla |

Por ejemplo:

```text
node:22
   ↓
Docker Image
   ↓
Container 1
Container 2
Container 3
```

Una misma imagen puede utilizarse para crear múltiples contenedores.

### 🧠 Analogía adicional

Piensa en:

```text
Imagen = clase
Contenedor = objeto
```

No es una equivalencia perfecta, pero ayuda mucho a recordarlo.

---

# 🔹 6. ¿QUÉ ES DOCKER COMPOSE?

### 💬 Respuesta de entrevista

Docker Compose es una herramienta que permite **definir y ejecutar múltiples contenedores como una sola aplicación**, normalmente mediante un archivo `compose.yaml` o `docker-compose.yml`.

Por ejemplo, una aplicación podría tener:

```text
Frontend
   ↓
Backend
   ↓
PostgreSQL
   ↓
Redis
```

Con Compose puedo definir esos servicios y levantarlos juntos.

Por ejemplo:

```yaml
services:

  backend:
    build: .

  database:
    image: postgres
```

Y posteriormente:

```bash
docker compose up
```

### 🧠 ¿Por qué es útil?

Porque permite reproducir fácilmente un entorno completo de desarrollo.

En lugar de configurar manualmente:

```text
Node
PostgreSQL
Redis
...
```

puedes levantar los servicios definidos en Compose.

---

# 🔹 7. ¿QUÉ ES UNA VARIABLE DE ENTORNO?

### 💬 Respuesta de entrevista

Una variable de entorno es un valor de configuración que se proporciona al proceso desde su entorno de ejecución, en lugar de tener que escribirlo directamente en el código.

Se utilizan normalmente para configurar cosas como:

```text
API_URL
DATABASE_URL
PORT
JWT_SECRET
```

Por ejemplo:

```text
DATABASE_URL=postgresql://...
```

### 🔐 ¿Por qué son importantes?

Porque permiten separar:

```text
Código
   +
Configuración
```

Y evitar hardcodear valores sensibles o específicos de cada entorno.

Por ejemplo:

```text
Development
    ↓
API_URL=http://localhost:3000


Production
    ↓
API_URL=https://api.example.com
```

> ⚠️ **Importante para Frontend**
>
> Una variable de entorno **no es automáticamente secreta** solo porque esté en `.env`.
>
> Si una variable termina incluida en el bundle del frontend, el usuario puede inspeccionarla.
>
> Por eso:
>
> **Nunca debes considerar un secreto del frontend como realmente secreto.**

---

# 🔹 8. ¿QUÉ ES UNA BASE DE DATOS?

### 💬 Respuesta de entrevista

Una base de datos es un sistema utilizado para **almacenar, organizar, consultar y gestionar información de manera persistente**.

Por ejemplo, una aplicación de usuarios podría almacenar:

```text
Users
 ├── id
 ├── name
 ├── email
 └── passwordHash
```

El backend puede comunicarse con la base de datos para:

```text
CREATE
READ
UPDATE
DELETE
```

Es decir, las operaciones CRUD.

### 🧠 Arquitectura típica

```text
Angular
   ↓
HTTP
   ↓
Backend
   ↓
Database
```

> 💡 El frontend normalmente **no debería conectarse directamente a una base de datos tradicional**.

# 🔥 9. ¿QUÉ DIFERENCIA HAY ENTRE SQL Y NoSQL?

### 💬 Respuesta de entrevista

SQL y NoSQL son dos enfoques diferentes para almacenar y consultar datos.

Las bases de datos SQL normalmente utilizan **tablas, filas, columnas y relaciones**, mientras que las NoSQL utilizan modelos más flexibles como documentos, key-value, grafos o columnas.

### 🗃️ SQL

Ejemplo:

```text
USERS
────────────────
id | name | age
1  | Alo  | 25
2  | Ana  | 30
```

Ejemplos:

```text
PostgreSQL
MySQL
SQL Server
Oracle
```

### 📄 NoSQL

Puede utilizar documentos:

```json
{
  "name": "Alo",
  "age": 25
}
```

Ejemplos:

```text
MongoDB
Firestore
DynamoDB
```

### 🧠 Comparación rápida

| SQL                               | NoSQL                                              |
| --------------------------------- | -------------------------------------------------- |
| Tablas                            | Documentos/colecciones u otros modelos             |
| Esquema generalmente estructurado | Mayor flexibilidad de estructura                   |
| Relaciones fuertes                | Puede favorecer estructuras más desnormalizadas    |
| SQL                               | Cada sistema puede tener su propio modelo/consulta |
| PostgreSQL                        | MongoDB / Firestore                                |

> ⚠️ **Cuidado en entrevista**
>
> No digas:
>
> > "SQL es mejor que NoSQL."
>
> o:
>
> > "NoSQL es más rápido."
>
> Depende completamente del **caso de uso, modelo de datos, consultas y requisitos del sistema**.

---

# 🔹 10. ¿QUÉ ES FIREBASE?

### 💬 Respuesta de entrevista

Firebase es una plataforma de Google que proporciona diferentes servicios para desarrollar aplicaciones, incluyendo autenticación, bases de datos, almacenamiento, hosting, analítica y otras funcionalidades.

Como Frontend puedo utilizar Firebase para resolver necesidades de backend sin tener necesariamente que construir toda la infraestructura desde cero.

Por ejemplo:

```text
Angular
   ↓
Firebase Authentication
   ↓
Login
```

o:

```text
Angular
   ↓
Firestore
   ↓
Datos
```

### 🧠 Algunos servicios conocidos

```text
Firebase Authentication
Firestore
Realtime Database
Cloud Storage
Hosting
Cloud Functions
```

> 🎯 **Algo interesante para entrevista**
>
> Firebase **no es simplemente una base de datos**.
>
> Es una plataforma que ofrece múltiples servicios.

---

# 🔹 11. ¿QUÉ ES POSTGRESQL?

### 💬 Respuesta de entrevista

PostgreSQL es un **sistema de gestión de bases de datos relacional de código abierto** que utiliza SQL para trabajar con los datos.

Permite trabajar con:

* Tablas.
* Relaciones.
* Constraints.
* Índices.
* Transacciones.
* Joins.
* Consultas SQL.

Por ejemplo:

```sql
SELECT *
FROM users
WHERE age >= 18;
```

### 🧠 Ejemplo de relación

Podríamos tener:

```text
users
 ├── id
 └── name

orders
 ├── id
 ├── user_id
 └── total
```

Y relacionarlas mediante:

```text
users.id
    ↓
orders.user_id
```

PostgreSQL es muy utilizado en aplicaciones backend y sistemas empresariales.

---

# 🔥 12. ¿QUÉ ES UN ORM?

### 💬 Respuesta de entrevista

Un ORM, o **Object-Relational Mapping**, es una herramienta que permite trabajar con una base de datos relacional utilizando objetos y estructuras del lenguaje de programación en lugar de escribir todas las consultas SQL manualmente.

Por ejemplo, en lugar de escribir directamente:

```sql
SELECT *
FROM users
WHERE id = 10;
```

un ORM podría permitir algo conceptualmente parecido a:

```typescript
userRepository.findOne({
  where: { id: 10 }
});
```

### 🧠 ¿Qué hace el ORM?

Realiza una especie de traducción:

```text
Código
   ↓
ORM
   ↓
SQL
   ↓
Database
```

### 📦 Ejemplos de ORM

En el ecosistema Node.js puedes encontrar:

```text
Prisma
TypeORM
Sequelize
Drizzle ORM
```

> ⚠️ **Importante**
>
> Un ORM **no reemplaza a la base de datos**.

Por ejemplo:

```text
PostgreSQL
    ↑
    │
  Prisma
    ↑
    │
 Node.js
```

PostgreSQL sigue siendo la base de datos.

Prisma sería la herramienta que facilita trabajar con ella desde el código.

---

# 🧠 RESUMEN PARA MEMORIZAR

| Concepto                 | Idea clave                                                 |
| ------------------------ | ---------------------------------------------------------- |
| **Node.js**              | Runtime para ejecutar JavaScript fuera del navegador       |
| **npm**                  | Gestor de paquetes + scripts                               |
| **Express**              | Framework para construir servidores/APIs con Node.js       |
| **Docker**               | Contenedores para empaquetar y ejecutar aplicaciones       |
| **Image**                | Plantilla para crear contenedores                          |
| **Container**            | Instancia de una imagen                                    |
| **Docker Compose**       | Orquesta múltiples contenedores/servicios                  |
| **Environment Variable** | Configuración externa al código                            |
| **Database**             | Sistema para almacenar y gestionar datos                   |
| **SQL**                  | Bases de datos relacionales                                |
| **NoSQL**                | Bases de datos con modelos no relacionales                 |
| **Firebase**             | Plataforma de servicios backend/cloud                      |
| **PostgreSQL**           | Base de datos relacional SQL                               |
| **ORM**                  | Capa que permite trabajar con una BD usando objetos/código |

---

# 🎯 LAS QUE MÁS PRIORIZARÍA

Para una entrevista **Frontend**, yo pondría estas en este orden:

### 🔥 MUY IMPORTANTES

1. **¿Qué es Node.js?**
2. **¿Qué es npm?**
3. **¿Qué es Docker?**
4. **Imagen vs contenedor**
5. **¿Qué es una variable de entorno?**
6. **SQL vs NoSQL**
7. **¿Qué es una base de datos?**

### ⭐ IMPORTANTES

8. **¿Qué es Express?**
9. **¿Qué es Docker Compose?**
10. **¿Qué es Firebase?**
11. **¿Qué es PostgreSQL?**
12. **¿Qué es un ORM?**

> 💡 **Y hay una conexión que te conviene tener clarísima** porque puede aparecer como pregunta de seguimiento:

```text
Angular
   ↓
HttpClient
   ↓
HTTP
   ↓
Express / Node.js
   ↓
ORM
   ↓
PostgreSQL
```

Mientras que en otro proyecto podrías tener:

```text
Angular
   ↓
Firebase SDK
   ↓
Firestore
```

Entender esos dos flujos te permite responder muchas preguntas de **Frontend + Backend básico** sin memorizar respuestas aisladas.
