# 📖 API Documentation

> La documentación de una API describe **cómo consumir correctamente los recursos y funcionalidades que ofrece un Backend**. Es la guía que utilizan desarrolladores Frontend, aplicaciones móviles, integraciones externas y equipos de QA para comunicarse con la API de forma correcta y consistente.

---

# 📋 Índice

- [📖 API Documentation](#api-documentation)
- [🔌 Endpoints](#endpoints)
- [🛣️ Path Parameters](#path-parameters)
- [🔎 Query Parameters](#query-parameters)
- [📋 Headers](#headers)
- [📦 Request Body](#request-body)
- [🧱 Schemas](#schemas)
- [📤 Responses](#responses)
- [⚠️ Status Codes](#status-codes)
- [🔐 Autenticación](#autenticación)
- [🔒 Authorize](#authorize)
- [🧩 CRUD](#crud)
- [🧠 Mapa mental para analizar un endpoint](#mapa-mental-para-analizar-un-endpoint)
- [🏆 Idea clave](#idea-clave)

# 🎯 Objetivos

Al finalizar esta sección serás capaz de:

- ✅ Comprender qué es la documentación de una API.
- ✅ Identificar la información que proporciona.
- ✅ Entender qué es un endpoint.
- ✅ Diferenciar una ruta de una operación HTTP.
- ✅ Comprender el funcionamiento de los Path Parameters.

---

# 📚 Prerrequisitos

Antes de continuar es recomendable conocer:

- 🌐 Conceptos básicos de HTTP.
- 📡 Métodos HTTP (GET, POST, PUT, DELETE).
- 🔗 Qué es una API REST.
- 📦 Formato JSON.

---

# 🧠 ¿Qué es la documentación de una API?

La documentación de una API es un conjunto de información que explica **cómo interactuar correctamente con un servicio Backend**.

En lugar de analizar el código fuente del servidor, cualquier desarrollador puede consultar la documentación para conocer exactamente cómo utilizar la API.

Su objetivo principal es actuar como un **manual de uso** para todos los consumidores de la API.

---

## 🎯 ¿Qué información proporciona?

Cuando trabajas como desarrollador Frontend, la documentación responde preguntas fundamentales como:

- 📍 ¿A qué URL debo enviar la petición?
- 🌐 ¿Qué método HTTP debo utilizar?
- 📥 ¿Qué datos debo enviar?
- 📤 ¿Qué respuesta recibiré?
- 🔐 ¿Necesito autenticarme?
- 🚦 ¿Qué códigos HTTP puede devolver?
- ⚠️ ¿Qué errores pueden ocurrir?

Gracias a esta información, el cliente puede comunicarse correctamente con el servidor sin necesidad de conocer su implementación interna.

---

## ⚙️ ¿Cómo se presenta en Swagger?

Swagger organiza toda esta información de forma visual e interactiva.

Por cada endpoint suele mostrar:

```text
GET /users

├── Descripción

├── Parámetros

├── Request Body

├── Responses

├── Authentication

└── Try it out
```

Esto facilita tanto la consulta como las pruebas de la API.

---

# 🧩 ¿Por qué es importante?

Sin documentación, consumir una API suele convertirse en un proceso de prueba y error.

```text
👨‍💻 Frontend

        │

        ▼

¿Cómo funciona este endpoint?

¿Qué datos necesita?

¿Qué devuelve?

¿Necesita autenticación?
```

Con una documentación adecuada, todas esas respuestas están disponibles desde el primer momento.

---

# 1️⃣ 🔌 Endpoints

Uno de los conceptos más importantes al trabajar con APIs es el de **endpoint**.

Un endpoint representa una operación específica que un cliente puede ejecutar sobre la API.

En términos sencillos, es la combinación de:

- 🌐 Una ruta.
- 📡 Un método HTTP.

---

## 📖 ¿Qué es un endpoint?

Un endpoint es una **URL específica** que permite acceder a un recurso o ejecutar una operación determinada dentro de una API.

Por ejemplo:

```http
GET /api/users
```

Podemos dividirlo en dos partes.

```text
GET

↓

Método HTTP

────────────────────────────

/api/users

↓

Ruta del recurso
```

La combinación de ambos define un endpoint.

---

## 🧠 Un endpoint no es solo la URL

Es muy común pensar que el endpoint corresponde únicamente a la ruta.

Sin embargo, técnicamente un endpoint está formado por:

```text
Método HTTP

        +

Ruta
```

Por ejemplo:

```http
GET /api/users
```

y

```http
POST /api/users
```

utilizan exactamente la misma ruta, pero representan operaciones completamente diferentes.

---

## 📌 Ejemplo

Supongamos la siguiente colección de endpoints.

```http
GET    /api/users

POST   /api/users

GET    /api/users/25

PUT    /api/users/25

DELETE /api/users/25
```

Aunque varias rutas sean similares, cada combinación de **método HTTP + ruta** representa una operación distinta.

```text
GET     /users

        ↓

Obtener usuarios

────────────────────────────

POST    /users

        ↓

Crear usuario

────────────────────────────

PUT     /users/25

        ↓

Actualizar usuario

────────────────────────────

DELETE  /users/25

        ↓

Eliminar usuario
```

---

## 💡 Buenas prácticas

Al diseñar APIs REST es recomendable que los endpoints representen recursos y no acciones.

Por ejemplo:

✅ Correcto

```text
GET /users

POST /users
```

En lugar de:

```text
GET /getUsers

POST /createUser
```

La operación ya está representada por el método HTTP.

---

# 2️⃣ 🛣️ Path Parameters

En muchas ocasiones una API necesita operar sobre un recurso concreto.

Para ello se utilizan los **Path Parameters**.

---

# 📖 ¿Qué es un Path Parameter?

Un Path Parameter es un valor que forma parte de la propia URL.

Generalmente se utiliza para identificar un recurso específico.

Por ejemplo:

```http
GET /api/users/{id}
```

En este caso:

```text
{id}

↓

Path Parameter
```

El servidor espera que el cliente sustituya ese marcador por un valor real.

---

## 📌 Ejemplo

Una petición real podría ser:

```http
GET /api/users/25
```

Aquí ocurre la siguiente sustitución.

```text
{id}

↓

25
```

El significado de la petición sería:

> "Obtén el usuario cuyo identificador es **25**."

---

## 🧩 Más de un Path Parameter

Una URL puede contener varios parámetros de ruta.

Por ejemplo:

```http
GET /api/users/25/orders/10
```

En este caso:

```text
25

↓

ID del usuario

────────────────────────────

10

↓

ID de la orden
```

La API ya sabe exactamente qué recurso debe buscar.

---

## ⚙️ ¿Cómo aparecen en Swagger?

Swagger identifica claramente todos los Path Parameters.

Normalmente encontrarás una sección similar a esta.

```text
Parameters

────────────────────

id

Type: integer

Required: true
```

Esto indica que:

- El parámetro se llama **id**.
- Debe ser un número entero.
- Es obligatorio para ejecutar la petición.

En la interfaz de Swagger UI suele aparecer un campo donde introducir el valor antes de pulsar **Try it out**.

---

## 🧠 ¿Por qué forman parte de la URL?

Los Path Parameters representan la identidad del recurso solicitado.

```text
/api/users/{id}

            ▲

      Identificador
      del recurso
```

El propio camino (*path*) indica qué recurso concreto desea obtener el cliente.

Por eso reciben el nombre de **Path Parameters**.

---

## 📊 Ejemplos

| Endpoint | Significado |
|-----------|-------------|
| `GET /users/10` | Obtener el usuario 10 |
| `PUT /users/10` | Actualizar el usuario 10 |
| `DELETE /users/10` | Eliminar el usuario 10 |
| `GET /users/10/orders/5` | Obtener la orden 5 del usuario 10 |

---

## ⚠️ Errores comunes

- ❌ Confundir un Path Parameter con un Query Parameter.
- ❌ Pensar que `{id}` se envía en el cuerpo de la petición.
- ❌ Omitir un parámetro obligatorio.
- ❌ Utilizar un tipo de dato diferente al esperado por la API.

---

# 💡 Buenas prácticas

- ✅ Utilizar Path Parameters únicamente para identificar recursos.
- ✅ Asignar nombres claros como `id`, `userId` o `orderId`.
- ✅ Mantener una estructura de rutas consistente.
- ✅ Documentar el tipo de dato esperado para cada parámetro.

---

# 🏆 Idea clave

La documentación de una API explica **cómo comunicarse correctamente con un Backend**, indicando qué operaciones están disponibles y cómo ejecutarlas.

Dentro de esa documentación:

- 🔌 Un **endpoint** representa una operación específica, definida por la combinación de un **método HTTP** y una **ruta**.
- 🛣️ Un **Path Parameter** forma parte de la URL y permite identificar un recurso concreto, como un usuario, una orden o un producto.

Comprender estos dos conceptos es fundamental antes de aprender otros elementos de una API, como los **Query Parameters**, el **Request Body**, los **Headers** y las **Responses**.

# 3️⃣ 🔎 Query Parameters

Después de comprender los **Path Parameters**, el siguiente concepto importante son los **Query Parameters**.

Aunque ambos permiten enviar información al servidor, **su propósito es completamente diferente**.

Mientras los Path Parameters identifican un recurso específico, los Query Parameters permiten **modificar la forma en que se consulta ese recurso**.

---

# 📖 ¿Qué es un Query Parameter?

Un Query Parameter es un dato que se añade al final de la URL, después del símbolo `?`.

Se utiliza para proporcionar información adicional sobre cómo debe procesarse la petición.

Su función habitual es:

- 🔍 Buscar información.
- 🎯 Filtrar resultados.
- 📄 Paginar datos.
- ↕️ Ordenar registros.
- ⚙️ Aplicar opciones de consulta.

---

## 🧩 Sintaxis

La estructura general es:

```text
URL

?

clave=valor

&

clave=valor
```

Por ejemplo:

```http
GET /api/users?page=2&limit=10
```

Aquí aparecen dos Query Parameters.

```text
page = 2

limit = 10
```

Cada parámetro está formado por una pareja **clave = valor**.

Cuando existen varios parámetros, se separan mediante el carácter `&`.

---

## 📌 Ejemplo

Supongamos la siguiente petición.

```http
GET /api/users?name=alice&country=colombia
```

La API recibirá:

```text
name

↓

alice

────────────────────────────

country

↓

colombia
```

El servidor podrá utilizar estos valores para devolver únicamente los usuarios que coincidan con esos criterios.

---

## 🎯 ¿Para qué se utilizan?

Los Query Parameters permiten modificar el resultado de una consulta sin cambiar el recurso solicitado.

Por ejemplo:

```http
GET /api/users
```

Solicita la colección completa de usuarios.

Mientras que:

```http
GET /api/users?page=2
```

Solicita la misma colección, pero únicamente la segunda página.

El recurso sigue siendo el mismo.

Lo único que cambia es **cómo queremos consultarlo**.

---

# 🆚 Path Parameters vs Query Parameters

Es muy habitual confundir ambos conceptos.

La diferencia principal es la siguiente.

### 🛣️ Path Parameter

Forma parte de la propia URL.

```http
GET /api/users/25
```

```text
↓

Identifica un recurso concreto
```

En este caso, la petición hace referencia exclusivamente al usuario con identificador **25**.

---

### 🔎 Query Parameter

Se añade después del símbolo `?`.

```http
GET /api/users?page=2
```

```text
↓

Modifica la consulta
```

Aquí no se identifica un usuario concreto.

Simplemente se solicita una página determinada de la colección de usuarios.

---

## 📊 Comparación

| Path Parameter | Query Parameter |
|----------------|-----------------|
| Forma parte de la URL | Se añade después de `?` |
| Identifica un recurso | Modifica la consulta |
| Normalmente es obligatorio | Habitualmente es opcional |
| Ejemplo: `/users/25` | Ejemplo: `?page=2` |

---

# 💡 Usos más habituales

Los Query Parameters suelen emplearse para tareas muy comunes en APIs REST.

---

## 📄 Paginación

Permiten dividir grandes cantidades de información en varias páginas.

```text
?page=2
```

Solicita la segunda página.

---

## 📦 Límite de resultados

Permiten controlar cuántos registros devuelve la API.

```text
?limit=10
```

Solicita un máximo de diez elementos.

---

## 🔍 Búsqueda

Permiten buscar información concreta.

```text
?search=angular
```

La API puede devolver únicamente los resultados relacionados con "angular".

---

## ↕️ Ordenamiento

Permiten indicar el criterio de orden.

```text
?sort=name
```

Los resultados podrían ordenarse por nombre.

---

## 🎯 Filtrado

Permiten restringir los resultados.

```text
?country=CO
```

La API podría devolver únicamente usuarios cuyo país sea Colombia.

---

## 🧩 Ejemplo completo

```http
GET /api/users?page=2&limit=20&sort=name&country=CO
```

Conceptualmente:

```text
Colección: users

        │

        ├── Página 2

        ├── 20 resultados

        ├── Ordenados por nombre

        └── Solo usuarios de Colombia
```

---

## ⚠️ Errores comunes

- ❌ Confundir Query Parameters con Path Parameters.
- ❌ Pensar que siempre son obligatorios.
- ❌ Colocar `?` varias veces en una misma URL.
- ❌ Separar parámetros con comas en lugar de `&`.

---

# 💡 Buenas prácticas

- ✅ Utilizar nombres descriptivos.
- ✅ Mantener una nomenclatura consistente.
- ✅ Reservarlos para modificar consultas.
- ✅ Evitar incluir información sensible en la URL.

---

# 4️⃣ 📋 Headers

Además de la URL y los parámetros, una petición HTTP puede incluir información adicional denominada **Headers**.

Los Headers permiten enviar metadatos sobre la petición para que el servidor sepa cómo debe interpretarla o procesarla.

---

# 📖 ¿Qué es un Header?

Un Header es un par **clave : valor** que acompaña a una petición o respuesta HTTP.

No forma parte de la URL ni del cuerpo de la petición.

Su función consiste en aportar información adicional acerca de la comunicación entre cliente y servidor.

---

## 🧩 Ejemplo

Un Header muy habitual es:

```http
Authorization: Bearer eyJhbGci...
```

En este caso:

```text
Authorization

↓

Nombre del Header

────────────────────────────

Bearer eyJhbGci...

↓

Valor enviado
```

El servidor utilizará esta información para autenticar al usuario.

---

## 📦 Content-Type

Otro Header muy importante es:

```http
Content-Type: application/json
```

Este Header indica el formato del contenido enviado en el cuerpo de la petición.

Conceptualmente:

```text
Content-Type

↓

application/json

↓

El Body contiene JSON
```

Gracias a esta información, el servidor sabe cómo interpretar los datos recibidos.

---

## 📥 Accept

Otro Header habitual es:

```http
Accept: application/json
```

Su función consiste en indicar qué formato de respuesta espera recibir el cliente.

Por ejemplo:

```text
Cliente

↓

Accept: application/json

↓

Servidor

↓

Responde utilizando JSON
```

---

## 📊 Headers comunes

| Header | Función |
|----------|---------|
| `Authorization` | Enviar credenciales o tokens |
| `Content-Type` | Indicar el formato del Body |
| `Accept` | Indicar el formato esperado en la respuesta |
| `User-Agent` | Identificar la aplicación cliente |
| `Accept-Language` | Indicar el idioma preferido |

---

# 🔐 Authorization

Cuando una API requiere autenticación, normalmente solicita el Header:

```http
Authorization: Bearer <token>
```

Conceptualmente:

```text
Cliente

        │

Authorization

Bearer JWT

        │

        ▼

Servidor

        │

Valida el token

        │

        ▼

Permite o rechaza la petición
```

Este Header suele configurarse automáticamente mediante un **HTTP Interceptor** en aplicaciones Frontend.

---

# ⚙️ ¿Cómo aparecen en Swagger?

Swagger identifica claramente los Headers requeridos por cada endpoint.

Normalmente podrás encontrar una sección similar a:

```text
Headers

────────────────────

Authorization

Content-Type

Accept
```

Si la API utiliza autenticación, Swagger UI suele mostrar además el botón:

```text
🔒 Authorize
```

Desde él es posible introducir el token o las credenciales necesarias para probar la API.

---

## 🧠 ¿Dónde se envían?

Es importante recordar que los Headers **no forman parte de la URL**.

Tampoco pertenecen al Body.

Una petición HTTP puede representarse conceptualmente así.

```text
HTTP Request

├── URL

├── Query Parameters

├── Headers

└── Body
```

Cada uno cumple una función distinta.

---

## ⚠️ Errores comunes

- ❌ Pensar que los Headers forman parte de la URL.
- ❌ Enviar el token dentro del Body en lugar del Header `Authorization`.
- ❌ Utilizar un `Content-Type` incorrecto.
- ❌ Omitir Headers obligatorios definidos por la API.

---

# 💡 Buenas prácticas

- ✅ Utilizar siempre el Header `Authorization` para autenticación cuando la API lo requiera.
- ✅ Configurar correctamente el `Content-Type` según el formato enviado.
- ✅ Revisar la documentación para conocer los Headers obligatorios.
- ✅ Evitar incluir información sensible en la URL cuando puede enviarse mediante Headers.

---

# 🏆 Idea clave

Los **Query Parameters** permiten modificar la forma en que se consulta un recurso, mientras que los **Headers** proporcionan información adicional sobre la petición HTTP.

```text
HTTP Request

├── 🌐 URL

├── 🛣️ Path Parameters

├── 🔎 Query Parameters

├── 📋 Headers

└── 📦 Body
```

Comprender la diferencia entre estos elementos es esencial para interpretar correctamente la documentación de una API y consumir sus endpoints de forma adecuada.

# 5️⃣ 📦 Request Body

Hasta ahora hemos visto cómo una petición HTTP puede incluir información en la URL, mediante **Path Parameters**, **Query Parameters** y **Headers**.

Sin embargo, cuando necesitamos **enviar datos al servidor**, utilizamos el **Request Body**.

---

# 📖 ¿Qué es el Request Body?

El **Request Body** es el contenido que el cliente envía dentro de una petición HTTP.

Generalmente se utiliza cuando el servidor necesita recibir información para crear, actualizar o procesar un recurso.

Es el lugar donde viajan los datos principales de la petición.

---

## 🎯 ¿Cuándo se utiliza?

Normalmente aparece en métodos HTTP como:

- **POST** → Crear recursos.
- **PUT** → Reemplazar recursos.
- **PATCH** → Actualizar parcialmente un recurso.

Por ejemplo:

```http
POST /api/users
```

El cliente debe enviar la información del nuevo usuario.

---

## 📌 Ejemplo

```http
POST /api/users
```

Body:

```json
{
  "name": "Alice",
  "email": "alice@email.com",
  "age": 25
}
```

Conceptualmente:

```text
Cliente

        │

POST /users

        │

        ▼

📦 Request Body

├── name

├── email

└── age

        │

        ▼

Servidor
```

El Backend recibe estos datos y realiza la operación correspondiente.

---

## ⚙️ ¿Cómo aparece en Swagger?

Swagger muestra el modelo esperado para el cuerpo de la petición.

Por ejemplo:

```json
{
  "name": "string",
  "email": "string",
  "age": 0
}
```

Esto permite conocer:

- 📦 Qué propiedades existen.
- 🏷️ Cómo se llaman.
- 🔠 Qué tipo de dato espera cada una.
- ✅ Cuáles son obligatorias.
- ❌ Cuáles son opcionales.

---

## 🧠 ¿Qué representa?

El Request Body puede entenderse como:

> 📦 "Estos son los datos que deseo enviar al servidor."

Es el mecanismo principal para transferir información desde el cliente hacia la API.

---

## ⚠️ Errores comunes

- ❌ Pensar que el Body forma parte de la URL.
- ❌ Enviar un formato diferente al indicado por `Content-Type`.
- ❌ Omitir propiedades obligatorias.
- ❌ Confundir el Request Body con los Query Parameters.

---

# 💡 Buenas prácticas

- ✅ Enviar únicamente la información necesaria.
- ✅ Respetar el formato documentado por la API.
- ✅ Utilizar JSON cuando la API lo requiera.
- ✅ Validar los datos antes de enviarlos.

---

# 6️⃣ 🧱 Schemas

Una API no solo necesita indicar **qué datos enviar**, sino también **cómo están estructurados**.

Para ello existen los **Schemas**.

---

# 📖 ¿Qué es un Schema?

Un Schema define la estructura de un objeto utilizado por la API.

Es un contrato que describe cómo deben ser los datos.

Por ejemplo, un usuario podría representarse así:

```json
{
  "id": 25,
  "name": "Alice",
  "email": "alice@email.com"
}
```

Su Schema podría describirse de forma conceptual como:

```text
User

├── id

│     └── integer

├── name

│     └── string

└── email

      └── string
```

---

## 🧩 ¿Qué información proporciona?

Un Schema puede indicar:

- 📦 Qué propiedades existen.
- 🔠 El tipo de dato de cada una.
- ✅ Qué campos son obligatorios.
- ❌ Qué campos son opcionales.
- 📏 Restricciones y formatos permitidos.

---

## 📌 Ejemplo OpenAPI

En OpenAPI los Schemas suelen escribirse de forma similar a:

```yaml
User:
  type: object

  properties:

    id:
      type: integer

    name:
      type: string

    email:
      type: string
```

Este documento describe la estructura esperada del objeto **User**.

---

## 🤝 El contrato entre Frontend y Backend

Los Schemas funcionan como un contrato compartido.

```text
Backend

        │

        ▼

📖 Schema

        │

        ▼

Frontend
```

Ambos equipos trabajan sobre la misma definición de datos.

---

## 🧩 Relación con TypeScript

En aplicaciones Angular es habitual representar ese contrato mediante interfaces.

Por ejemplo:

```ts
interface User {
  id: number;
  name: string;
  email: string;
}
```

Conceptualmente:

```text
📖 OpenAPI Schema

        │

        ▼

💻 Interface TypeScript
```

El Schema documenta la estructura.

La interfaz TypeScript la representa dentro del código Frontend.

---

## ⚠️ Errores comunes

- ❌ Confundir un Schema con una respuesta concreta.
- ❌ Pensar que el Schema contiene datos reales.
- ❌ Ignorar los campos obligatorios.
- ❌ No respetar los tipos de datos definidos.

---

# 💡 Buenas prácticas

- ✅ Mantener los Schemas sincronizados con la implementación.
- ✅ Utilizar nombres descriptivos.
- ✅ Reutilizar Schemas cuando sea posible.
- ✅ Considerarlos como el contrato oficial de la API.

---

# 7️⃣ 📤 Responses

Después de procesar una petición, el servidor devuelve una **Response**.

La Response informa al cliente del resultado de la operación.

---

# 📖 ¿Qué es una Response?

Una Response es el mensaje que el servidor envía tras recibir y procesar una petición HTTP.

Puede contener:

- 📊 Un código de estado.
- 📦 Un cuerpo con datos.
- 📋 Headers de respuesta.

---

## 📌 Ejemplo

Petición:

```http
GET /api/users/25
```

Respuesta:

```json
{
  "id": 25,
  "name": "Alice",
  "email": "alice@email.com"
}
```

Conceptualmente:

```text
Cliente

        │

GET /users/25

        │

        ▼

Servidor

        │

        ▼

📤 Response

├── Status Code

├── Headers

└── Body
```

---

## ⚙️ ¿Cómo aparece en Swagger?

Swagger suele mostrar todas las respuestas posibles.

```text
Responses

──────────────────

200

Usuario encontrado

──────────────────

404

Usuario no encontrado
```

Esto permite conocer todos los escenarios que el cliente debe contemplar.

---

## 🧩 Componentes de una Response

Una respuesta HTTP suele estar formada por:

```text
HTTP Response

├── Status Code

├── Headers

└── Response Body
```

Ejemplo:

```text
200 OK

↓

Body

↓

{
  "id": 25,
  "name": "Alice"
}
```

---

## ⚠️ Errores comunes

- ❌ Pensar que todas las respuestas devuelven datos.
- ❌ Ignorar los códigos de error.
- ❌ Asumir que todas las respuestas tienen la misma estructura.

---

# 💡 Buenas prácticas

- ✅ Revisar todas las respuestas documentadas.
- ✅ Manejar correctamente los errores.
- ✅ Validar la estructura del Response Body.

---

# 8️⃣ ⚠️ Status Codes

Los **Status Codes** indican el resultado de una petición HTTP.

Son códigos numéricos estandarizados que permiten al cliente saber qué ocurrió.

---

# 📖 Categorías

Los códigos se agrupan en cinco familias.

| Código | Categoría | Significado |
|---------|-----------|-------------|
| `1xx` | ℹ️ Informativo | Información sobre el procesamiento |
| `2xx` | ✅ Éxito | La petición fue correcta |
| `3xx` | 🔄 Redirección | Se requiere una acción adicional |
| `4xx` | ⚠️ Error del cliente | La petición presenta un problema |
| `5xx` | 💥 Error del servidor | El servidor no pudo completar la petición |

---

## 📌 Códigos más habituales

| Código | Significado |
|----------|-------------|
| `200 OK` | Petición exitosa |
| `201 Created` | Recurso creado |
| `204 No Content` | Éxito sin contenido |
| `400 Bad Request` | Petición inválida |
| `401 Unauthorized` | Falta autenticación |
| `403 Forbidden` | No autorizado |
| `404 Not Found` | Recurso inexistente |
| `409 Conflict` | Conflicto con el estado actual |
| `422 Unprocessable Content` | Datos válidos pero no procesables |
| `500 Internal Server Error` | Error interno |
| `503 Service Unavailable` | Servicio no disponible |

---

## ⚙️ ¿Cómo aparecen en Swagger?

Cada endpoint documenta los posibles códigos que puede devolver.

```text
GET /users/{id}

────────────────────

200

Usuario encontrado

────────────────────

401

No autenticado

────────────────────

404

Usuario inexistente

────────────────────

500

Error interno
```

Esto ayuda al Frontend a preparar todos los escenarios posibles.

---

# 💡 Buenas prácticas

- ✅ Manejar tanto respuestas exitosas como errores.
- ✅ No asumir que siempre llegará un `200 OK`.
- ✅ Utilizar el código HTTP para decidir el flujo de la aplicación.

---

# 9️⃣ 🔐 Autenticación

Muchas APIs protegen determinados recursos.

Para acceder a ellos es necesario demostrar la identidad del cliente.

---

# 📖 ¿Qué documenta Swagger?

Swagger indica:

- 🔐 Si un endpoint requiere autenticación.
- 🪪 Qué mecanismo utiliza.
- 📋 Qué credenciales deben enviarse.

---

## 🧩 Métodos habituales

Las APIs pueden utilizar distintos mecanismos.

```text
Bearer Token

API Key

Basic Authentication

OAuth 2.0

OpenID Connect
```

---

## 📌 Ejemplo

```http
Authorization: Bearer <TOKEN>
```

Petición completa:

```http
GET /api/users

Authorization: Bearer eyJhbGciOi...
```

El servidor utilizará ese token para validar la identidad del cliente.

---

## ⚙️ ¿Cómo aparece en Swagger?

Swagger suele indicar claramente que el endpoint requiere autenticación.

```text
🔒 Requires authentication
```

Además, especifica el esquema utilizado.

---

## ⚠️ Errores comunes

- ❌ Enviar el token en el Body.
- ❌ Utilizar un esquema incorrecto.
- ❌ Omitir el Header `Authorization`.

---

# 🔟 🔒 Authorize

Swagger UI incorpora una herramienta muy útil llamada **Authorize**.

No es un mecanismo de autenticación.

Es simplemente una interfaz para introducir las credenciales necesarias.

---

# 📖 ¿Cómo funciona?

En Swagger UI suele aparecer el botón:

```text
🔒 Authorize
```

Al pulsarlo, el usuario puede introducir un token o las credenciales correspondientes.

Por ejemplo:

```text
Bearer eyJhbGciOi...
```

Una vez autorizada la sesión:

```text
🔒 Authorized
```

Swagger añadirá automáticamente el Header correspondiente a las peticiones protegidas.

```http
Authorization: Bearer eyJhbGciOi...
```

---

# 🆚 Autenticación vs Authorize

Es importante no confundir ambos conceptos.

| Concepto | Función |
|-----------|---------|
| 🔐 Autenticación | Mecanismo utilizado por la API para verificar la identidad |
| 🔒 Authorize | Interfaz de Swagger UI para introducir las credenciales |

En otras palabras:

```text
API

↓

Define cómo autenticar

────────────────────────

Swagger UI

↓

Permite introducir esas credenciales
```

---

# 🏆 Idea clave

Una petición HTTP completa puede incluir numerosos elementos documentados por Swagger.

```text
HTTP Request

├── 🌐 URL

├── 🛣️ Path Parameters

├── 🔎 Query Parameters

├── 📋 Headers

├── 📦 Request Body

└── 🔐 Authentication

                │

                ▼

Servidor

                │

                ▼

HTTP Response

├── ⚠️ Status Code

├── 📋 Headers

├── 📤 Response Body

└── 🧱 Schemas
```

Comprender cómo se relacionan todos estos componentes permite interpretar correctamente la documentación de una API y consumir cualquier endpoint de forma segura y predecible.

# 1️⃣1️⃣ 🧩 CRUD

Después de comprender cómo está documentado un endpoint, el siguiente concepto fundamental es **CRUD**.

CRUD representa las cuatro operaciones básicas que una aplicación realiza sobre cualquier recurso almacenado.

Prácticamente todas las APIs REST implementan estas operaciones.

---

# 📖 ¿Qué significa CRUD?

CRUD es un acrónimo formado por las operaciones:

```text
C → Create

R → Read

U → Update

D → Delete
```

En español:

- 🟢 **Create** → Crear.
- 🔵 **Read** → Consultar.
- 🟡 **Update** → Actualizar.
- 🔴 **Delete** → Eliminar.

Estas operaciones representan el ciclo de vida habitual de cualquier recurso dentro de una aplicación.

---

## 🧩 Ejemplo cotidiano

Imagina una aplicación para gestionar usuarios.

Durante el día podrías realizar acciones como:

- Crear un usuario.
- Consultar sus datos.
- Modificar su información.
- Eliminar su cuenta.

Todas estas acciones corresponden a operaciones CRUD.

```text
👤 Usuario

        │

        ├── Crear

        ├── Consultar

        ├── Actualizar

        └── Eliminar
```

---

# 🔗 Relación entre CRUD y HTTP

En una API REST, cada operación CRUD suele asociarse a un método HTTP determinado.

| Operación | Significado | Método HTTP | Ejemplo |
|------------|-------------|-------------|----------|
| 🟢 Create | Crear | `POST` | `POST /users` |
| 🔵 Read | Consultar | `GET` | `GET /users` |
| 🟡 Update | Actualizar | `PUT` / `PATCH` | `PUT /users/25` |
| 🔴 Delete | Eliminar | `DELETE` | `DELETE /users/25` |

Aunque existen excepciones, esta es la convención utilizada en la gran mayoría de APIs REST.

---

# 🟢 Create

La operación **Create** permite crear un nuevo recurso.

Generalmente utiliza el método HTTP **POST**.

Por ejemplo:

```http
POST /users
```

El cliente envía un Request Body.

```json
{
  "name": "Alice"
}
```

Conceptualmente:

```text
Cliente

        │

POST /users

        │

📦 Datos del usuario

        │

        ▼

Servidor

        │

Crea un nuevo usuario

        │

        ▼

201 Created
```

El servidor almacena el nuevo recurso y normalmente devuelve un código **201 Created**.

---

# 🔵 Read

La operación **Read** permite consultar información.

Se realiza utilizando el método HTTP **GET**.

Puede utilizarse para obtener una colección completa.

```http
GET /users
```

O un recurso concreto.

```http
GET /users/25
```

Conceptualmente:

```text
GET /users

↓

Lista de usuarios

────────────────────────────

GET /users/25

↓

Usuario con ID 25
```

Como puede observarse, ambos utilizan el mismo método HTTP, pero el recurso solicitado es diferente.

---

# 🟡 Update

La operación **Update** permite modificar un recurso existente.

Las APIs REST suelen utilizar dos métodos diferentes.

- **PUT**
- **PATCH**

---

## ✏️ PUT

Generalmente representa una actualización completa del recurso.

```http
PUT /users/25
```

El cliente envía una nueva representación del recurso.

```json
{
  "name": "Alice",
  "email": "alice@email.com"
}
```

Conceptualmente:

```text
Reemplazar

↓

Toda la información
```

---

## 🩹 PATCH

PATCH está orientado a modificaciones parciales.

```http
PATCH /users/25
```

Por ejemplo:

```json
{
  "email": "nuevo@email.com"
}
```

Aquí únicamente cambia el correo electrónico.

Conceptualmente:

```text
Modificar

↓

Solo algunos campos
```

---

## 📊 PUT vs PATCH

| PUT | PATCH |
|------|--------|
| Actualización completa | Actualización parcial |
| Suele enviar todo el recurso | Envía únicamente los cambios |
| Reemplaza la representación | Modifica atributos concretos |

Es importante recordar que el comportamiento exacto depende de la implementación de la API.

---

# 🔴 Delete

La operación **Delete** elimina un recurso.

Normalmente utiliza el método HTTP **DELETE**.

Por ejemplo:

```http
DELETE /users/25
```

Conceptualmente:

```text
Cliente

        │

DELETE /users/25

        │

        ▼

Servidor

        │

Elimina el recurso

        │

        ▼

204 No Content
```

Muchas APIs responden con **204 No Content**, aunque también pueden utilizar otros códigos dependiendo de la implementación.

---

# 🧩 CRUD completo

Supongamos que existe el recurso:

```text
/users
```

Las operaciones habituales serían:

```http
POST   /users
```

Crear un usuario.

---

```http
GET /users
```

Consultar todos los usuarios.

---

```http
GET /users/25
```

Consultar un usuario concreto.

---

```http
PUT /users/25
```

Actualizar completamente el usuario.

---

```http
PATCH /users/25
```

Actualizar parcialmente el usuario.

---

```http
DELETE /users/25
```

Eliminar el usuario.

---

# 📊 CRUD visual

```text
            👤 Usuario

                 │

     ┌───────────┼───────────┐

     ▼           ▼           ▼

 Crear      Consultar    Actualizar

     │                       │

     └───────────┬───────────┘

                 ▼

             Eliminar
```

---

## ⚠️ Errores comunes

- ❌ Utilizar `GET` para modificar datos.
- ❌ Utilizar `POST` para consultar información.
- ❌ Confundir `PUT` con `PATCH`.
- ❌ Pensar que CRUD solo aplica a bases de datos.

---

# 💡 Buenas prácticas

- ✅ Utilizar el método HTTP adecuado para cada operación.
- ✅ Mantener una nomenclatura REST consistente.
- ✅ Aprovechar los códigos HTTP correctos para cada respuesta.
- ✅ Documentar claramente qué operación realiza cada endpoint.

---

# 🧠 Mapa mental para analizar un endpoint

Cuando abras un endpoint en Swagger, puedes recorrer la documentación siguiendo siempre el mismo orden.

```text
🔌 ENDPOINT

        │

        ▼

¿Qué URL y qué método HTTP debo utilizar?

──────────────────────────────────────────

🛣️ PATH PARAMETERS

        │

        ▼

¿Debo indicar un identificador en la URL?

──────────────────────────────────────────

🔎 QUERY PARAMETERS

        │

        ▼

¿Necesito filtrar, buscar, ordenar o paginar?

──────────────────────────────────────────

📋 HEADERS

        │

        ▼

¿Qué información adicional debo enviar?

──────────────────────────────────────────

📦 REQUEST BODY

        │

        ▼

¿Qué datos espera el servidor?

──────────────────────────────────────────

🧱 SCHEMAS

        │

        ▼

¿Cómo están estructurados esos datos?

──────────────────────────────────────────

🔐 AUTENTICACIÓN

        │

        ▼

¿Necesito credenciales?

──────────────────────────────────────────

🔒 AUTHORIZE

        │

        ▼

¿Dónde configuro esas credenciales en Swagger?

──────────────────────────────────────────

📤 RESPONSES

        │

        ▼

¿Qué devolverá el servidor?

──────────────────────────────────────────

⚠️ STATUS CODES

        │

        ▼

¿Cómo interpreto cada respuesta?

──────────────────────────────────────────

🧩 CRUD

        │

        ▼

¿Qué operación estoy realizando sobre el recurso?
```

---

# 🏆 Idea clave

Aprender a utilizar Swagger significa **aprender a interpretar correctamente la documentación de una API**.

Cada endpoint proporciona toda la información necesaria para consumirlo correctamente.

Antes de realizar una petición, deberías ser capaz de responder preguntas como:

- 🌐 ¿Qué endpoint debo utilizar?
- 📡 ¿Qué método HTTP corresponde?
- 🛣️ ¿Necesito Path Parameters?
- 🔎 ¿Existen Query Parameters opcionales?
- 📋 ¿Qué Headers son obligatorios?
- 📦 ¿Qué información debo enviar en el Request Body?
- 🧱 ¿Cuál es la estructura de los datos?
- 🔐 ¿Necesito autenticarme?
- 📤 ¿Qué respuestas puedo recibir?
- ⚠️ ¿Qué significan los diferentes Status Codes?
- 🧩 ¿Qué operación CRUD estoy realizando?

Cuando domines este proceso, podrás analizar prácticamente cualquier endpoint documentado en Swagger y utilizarlo desde aplicaciones como Angular, React, aplicaciones móviles o cualquier otro cliente HTTP con confianza y precisión.