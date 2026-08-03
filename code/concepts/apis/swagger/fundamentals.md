# 🧠 Swagger Fundamentals

> **Swagger** es un ecosistema de herramientas diseñado para **documentar, visualizar, probar y facilitar el consumo de APIs**. En la actualidad, trabaja principalmente junto con la especificación **OpenAPI**, convirtiéndose en una pieza fundamental para la colaboración entre equipos de desarrollo.

---

# 📋 Índice

- [🧠 Swagger Fundamentals](#-swagger-fundamentals)
- [📋 Índice](#-índice)
- [🎯 Objetivos](#-objetivos)
- [📚 Prerrequisitos](#-prerrequisitos)
- [🧠 ¿Qué es Swagger?](#-qué-es-swagger)
  - [🎯 ¿Cuál es su objetivo?](#-cuál-es-su-objetivo)
- [❓ ¿Qué problema resuelve?](#-qué-problema-resuelve)
- [⚙️ ¿Cómo ayuda Swagger?](#️-cómo-ayuda-swagger)
- [🧩 Ejemplo conceptual](#-ejemplo-conceptual)
  - [Sin documentación](#sin-documentación)
  - [Con Swagger](#con-swagger)
- [🧠 ¿Para qué sirve Swagger?](#-para-qué-sirve-swagger)
  - [📖 Documentar APIs](#-documentar-apis)
  - [🔍 Visualizar endpoints](#-visualizar-endpoints)
  - [🧪 Probar endpoints](#-probar-endpoints)
  - [📦 Mostrar modelos de datos](#-mostrar-modelos-de-datos)
  - [🔐 Documentar autenticación](#-documentar-autenticación)
  - [🤝 Facilitar la integración entre equipos](#-facilitar-la-integración-entre-equipos)
  - [⚙️ Generar código automáticamente](#️-generar-código-automáticamente)
- [📊 Resumen](#-resumen)
- [⚠️ Errores comunes](#️-errores-comunes)
- [💡 Buenas prácticas](#-buenas-prácticas)
- [🏆 Idea clave](#-idea-clave)
- [2️⃣ 📖 Swagger vs OpenAPI](#2️⃣--swagger-vs-openapi)
- [📖 ¿Qué es OpenAPI?](#-qué-es-openapi)
  - [📝 ¿En qué formato se escribe?](#-en-qué-formato-se-escribe)
    - [YAML](#yaml)
    - [JSON](#json)
  - [🧩 ¿Qué describe una especificación OpenAPI?](#-qué-describe-una-especificación-openapi)
- [🧰 ¿Qué es Swagger?](#-qué-es-swagger-1)
- [⚙️ ¿Cómo trabajan juntos?](#️-cómo-trabajan-juntos)
- [🧠 Diferencia sencilla](#-diferencia-sencilla)
- [📌 Ejemplo mental](#-ejemplo-mental)
- [📊 Comparación](#-comparación)
- [⚠️ Errores comunes](#️-errores-comunes-1)
- [💡 Buenas prácticas](#-buenas-prácticas-1)
- [🏆 Idea clave](#-idea-clave-1)
- [3️⃣ 🧩 ¿Qué problema resuelve Swagger?](#3️⃣--qué-problema-resuelve-swagger)
- [🚨 Problemas comunes sin Swagger](#-problemas-comunes-sin-swagger)
  - [❌ Problema 1: Falta de documentación](#-problema-1-falta-de-documentación)
  - [❌ Problema 2: Documentación desactualizada](#-problema-2-documentación-desactualizada)
  - [❌ Problema 3: Información incompleta](#-problema-3-información-incompleta)
  - [❌ Problema 4: Mala comunicación entre equipos](#-problema-4-mala-comunicación-entre-equipos)
  - [❌ Problema 5: Dificultad para probar endpoints](#-problema-5-dificultad-para-probar-endpoints)
- [🎯 ¿Cómo ayuda Swagger?](#-cómo-ayuda-swagger)
  - [🤝 Beneficios para el equipo](#-beneficios-para-el-equipo)
- [💡 Buenas prácticas](#-buenas-prácticas-2)
- [🏆 Idea clave](#-idea-clave-2)
- [4️⃣ 🖥️ Swagger UI](#4️⃣-️-swagger-ui)
- [🧠 ¿Qué es Swagger UI?](#-qué-es-swagger-ui)
- [⚙️ ¿Cómo funciona?](#️-cómo-funciona)
- [🧪 ¿Qué permite hacer Swagger UI?](#-qué-permite-hacer-swagger-ui)
- [▶️ Botón **Try it out**](#️-botón-try-it-out)
- [🔐 Autenticación](#-autenticación)
- [🔄 Flujo completo](#-flujo-completo)
- [⚠️ Errores comunes](#️-errores-comunes-2)
- [💡 Buenas prácticas](#-buenas-prácticas-3)
- [🏆 Idea clave](#-idea-clave-3)
- [5️⃣ 🧰 Herramientas del ecosistema Swagger](#5️⃣--herramientas-del-ecosistema-swagger)
- [🖥️ Swagger UI](#️-swagger-ui)
  - [🎯 ¿Para qué sirve?](#-para-qué-sirve)
  - [🧩 Uso típico](#-uso-típico)
- [✍️ Swagger Editor](#️-swagger-editor)
  - [⚙️ ¿Qué hace Swagger Editor?](#️-qué-hace-swagger-editor)
  - [🎯 ¿Para qué sirve?](#-para-qué-sirve-1)
- [⚙️ Swagger Codegen](#️-swagger-codegen)
  - [🎯 ¿Qué puede generar?](#-qué-puede-generar)
  - [🧩 Ejemplo conceptual](#-ejemplo-conceptual-1)
- [📊 Comparación entre las herramientas](#-comparación-entre-las-herramientas)
- [🧠 ¿Cómo trabajan juntas?](#-cómo-trabajan-juntas)
- [🏗️ Flujo de trabajo recomendado](#️-flujo-de-trabajo-recomendado)
- [⚠️ Errores comunes](#️-errores-comunes-3)
- [💡 Buenas prácticas](#-buenas-prácticas-4)
- [🏆 Idea clave](#-idea-clave-4)

# 🎯 Objetivos

Al finalizar esta sección serás capaz de:

- ✅ Comprender qué es Swagger.
- ✅ Entender qué problemas resuelve.
- ✅ Identificar para qué se utiliza en proyectos reales.
- ✅ Diferenciar Swagger de una API o de un framework.
- ✅ Comprender por qué es una herramienta tan utilizada en el desarrollo Backend.

---

# 📚 Prerrequisitos

Para aprovechar mejor este tema es recomendable conocer:

- 🌐 Conceptos básicos de HTTP.
- 🔗 Qué es una API REST.
- 📦 Formato JSON.
- 📡 Métodos HTTP (GET, POST, PUT, DELETE).

---

# 🧠 ¿Qué es Swagger?

Swagger es un **ecosistema de herramientas** utilizado para **diseñar, documentar, visualizar y probar APIs**.

Su objetivo principal es proporcionar una documentación clara, estructurada e interactiva que permita a cualquier desarrollador comprender cómo utilizar una API sin necesidad de revisar el código fuente del Backend.

En proyectos modernos, Swagger suele trabajar junto con **OpenAPI**, una especificación estándar que describe el funcionamiento de una API de forma estructurada.

> [!NOTE]
>
> Aunque muchas personas utilizan los términos **Swagger** y **OpenAPI** como si fueran sinónimos, en realidad representan conceptos diferentes. Más adelante veremos con detalle cuál es la diferencia entre ambos.

---

## 🎯 ¿Cuál es su objetivo?

Cuando un Backend expone una API, existen distintos equipos que necesitan conocer cómo consumirla correctamente.

Por ejemplo:

- 👨‍💻 Desarrolladores Frontend.
- 📱 Equipos Mobile.
- 🧪 Equipos de QA o Testing.
- 🔗 Sistemas externos que se integran con la API.
- 👥 Otros desarrolladores Backend.

Todos ellos necesitan responder preguntas como:

- ¿Qué endpoint debo consumir?
- ¿Qué método HTTP utiliza?
- ¿Qué parámetros acepta?
- ¿Necesita autenticación?
- ¿Qué información devuelve?
- ¿Qué errores puede generar?

Swagger centraliza toda esta información en una única documentación.

---

# ❓ ¿Qué problema resuelve?

Imagina que el Backend únicamente comunica el siguiente endpoint:

```http
GET /api/users
```

Con esa información todavía existen muchas dudas.

```text
❓ ¿Necesita autenticación?

❓ ¿Recibe parámetros?

❓ ¿Qué estructura tiene la respuesta?

❓ ¿Qué códigos HTTP devuelve?

❓ ¿Cómo debo enviar los datos?

❓ ¿Qué ocurre si el usuario no tiene permisos?
```

Sin una documentación adecuada, el desarrollador tendría que:

- Leer el código del Backend.
- Preguntar al equipo de desarrollo.
- Consultar documentos externos.
- Probar manualmente hasta descubrir cómo funciona.

Esto ralentiza el desarrollo y aumenta la probabilidad de errores.

---

# ⚙️ ¿Cómo ayuda Swagger?

Swagger permite describir todos los aspectos importantes de una API de forma organizada.

Por ejemplo:

```text
GET /api/users

🔐 Authentication
Bearer Token

📥 Query Parameters

• page
• limit

📤 Responses

200 OK

{
    "users": [...]
}

401 Unauthorized

500 Internal Server Error
```

De esta forma, cualquier desarrollador puede conocer cómo consumir el endpoint sin necesidad de investigar su implementación interna.

---

# 🧩 Ejemplo conceptual

## Sin documentación

El Backend comunica únicamente:

```text
GET /api/users
```

El equipo Frontend comienza a hacerse preguntas.

```text
               Backend

                  │

                  ▼

          GET /api/users

                  │

                  ▼

        🤔 Frontend pregunta...

      ❓ ¿Necesita token?

      ❓ ¿Qué parámetros acepta?

      ❓ ¿Cómo responde?

      ❓ ¿Qué errores devuelve?

      ❓ ¿Existe paginación?
```

Toda esta información debe obtenerse preguntando al equipo Backend o revisando el código.

---

## Con Swagger

Ahora toda la información aparece documentada.

```text
                 Swagger

                    │

                    ▼

          GET /api/users

      🔐 Bearer Authentication

      📥 Parameters

      • page

      • limit

      📤 Responses

      • 200 OK

      • 401 Unauthorized

      • 500 Internal Server Error
```

El desarrollador dispone de toda la información necesaria en un único lugar.

---

# 🧠 ¿Para qué sirve Swagger?

Swagger ofrece múltiples funcionalidades que facilitan el desarrollo de aplicaciones.

## 📖 Documentar APIs

Permite describir cada endpoint indicando:

- Método HTTP.
- Ruta.
- Parámetros.
- Headers.
- Autenticación.
- Cuerpo de la petición.
- Respuestas posibles.
- Códigos HTTP.

---

## 🔍 Visualizar endpoints

Organiza todos los recursos de la API de forma clara.

Ejemplo conceptual:

```text
📂 Users

   GET    /users

   POST   /users

   GET    /users/{id}

   PUT    /users/{id}

   DELETE /users/{id}
```

Esto facilita localizar rápidamente cualquier endpoint.

---

## 🧪 Probar endpoints

Swagger también permite ejecutar peticiones directamente desde la documentación.

```text
Seleccionar endpoint

        │

        ▼

Completar parámetros

        │

        ▼

Enviar petición

        │

        ▼

Visualizar respuesta
```

Esto resulta muy útil para validar el comportamiento de la API durante el desarrollo.

---

## 📦 Mostrar modelos de datos

Swagger documenta la estructura de los datos que recibe y devuelve la API.

Ejemplo:

```json
{
  "id": 1,
  "name": "Alice",
  "email": "alice@example.com"
}
```

Esto evita tener que deducir manualmente el formato esperado.

---

## 🔐 Documentar autenticación

También permite especificar cómo debe autenticarse un cliente.

Por ejemplo:

```http
Authorization: Bearer <JWT>
```

Otras estrategias comunes son:

- API Key
- OAuth2
- Basic Authentication
- Cookies
- OpenID Connect

---

## 🤝 Facilitar la integración entre equipos

Swagger actúa como un punto de comunicación entre todos los consumidores de la API.

```text
           🖥️ Backend

                │

                ▼

      📖 Documentación Swagger

      ┌──────────┼──────────┐

      ▼          ▼          ▼

👨‍💻 Frontend   📱 Mobile   🧪 QA
```

Todos consultan la misma documentación, reduciendo dudas y evitando inconsistencias.

---

## ⚙️ Generar código automáticamente

Algunas herramientas del ecosistema permiten generar automáticamente:

- Clientes HTTP.
- SDKs.
- Modelos.
- Código base para servidores.
- Tipos de datos.

Esto reduce la cantidad de código repetitivo que debe escribirse manualmente.

---

# 📊 Resumen

| Funcionalidad | Descripción |
|--------------|-------------|
| 📖 Documentar | Describe cómo funciona una API. |
| 🔍 Visualizar | Organiza todos los endpoints de forma clara. |
| 🧪 Probar | Permite ejecutar peticiones desde la documentación. |
| 📦 Modelar | Describe solicitudes y respuestas. |
| 🔐 Autenticar | Explica cómo acceder a recursos protegidos. |
| 🤝 Integrar | Facilita la comunicación entre equipos. |
| ⚙️ Automatizar | Permite generar código en determinados escenarios. |

---

# ⚠️ Errores comunes

- ❌ Pensar que Swagger crea una API.
- ❌ Creer que Swagger reemplaza al Backend.
- ❌ Confundir Swagger con OpenAPI.
- ❌ Suponer que la documentación siempre está actualizada automáticamente.
- ❌ Documentar solo algunos endpoints y dejar el resto sin describir.

---

# 💡 Buenas prácticas

- ✅ Mantener la documentación sincronizada con la API.
- ✅ Documentar todos los endpoints disponibles.
- ✅ Incluir ejemplos reales de solicitudes y respuestas.
- ✅ Describir claramente los posibles errores.
- ✅ Explicar el mecanismo de autenticación utilizado.
- ✅ Mantener una estructura consistente en toda la documentación.

---

> [!IMPORTANT]
>
> **Swagger no es una API, ni un framework, ni un servidor Backend.**
>
> Es un **ecosistema de herramientas** cuyo propósito es facilitar la documentación, exploración y consumo de APIs utilizando, en la mayoría de los casos, la especificación **OpenAPI** como base.

---

# 🏆 Idea clave

Swagger no implementa la lógica de una API.

Su función consiste en **hacer que una API sea fácil de entender, documentar, explorar y probar**, permitiendo que desarrolladores Frontend, Backend, Mobile y QA trabajen utilizando una única fuente de información confiable y estructurada.

# 2️⃣ 📖 Swagger vs OpenAPI

Uno de los conceptos que más confusión genera al comenzar a trabajar con APIs es la diferencia entre **Swagger** y **OpenAPI**.

Es muy común escuchar frases como:

> *"Voy a crear un Swagger."*

o

> *"La API tiene un Swagger."*

Sin embargo, desde un punto de vista técnico, **Swagger y OpenAPI no son exactamente lo mismo**.

Comprender esta diferencia ayuda a entender cómo funciona todo el ecosistema de documentación de APIs.

---

# 📖 ¿Qué es OpenAPI?

**OpenAPI** es una **especificación estándar** utilizada para describir el comportamiento de una API HTTP de forma estructurada.

Una especificación OpenAPI funciona como un **contrato** entre el servidor y cualquier cliente que vaya a consumir la API.

Este contrato describe aspectos como:

- 🌐 Endpoints disponibles.
- 📡 Métodos HTTP.
- 📥 Parámetros.
- 📤 Respuestas.
- 🔐 Mecanismos de autenticación.
- 📦 Modelos de datos.
- 🚦 Códigos de estado HTTP.
- 📝 Información general de la API.

> [!NOTE]
>
> OpenAPI **no ejecuta la API**, **no procesa peticiones** y **no implementa lógica de negocio**.
>
> Su única función es describir cómo funciona una API mediante un formato estándar.

---

## 📝 ¿En qué formato se escribe?

Una especificación OpenAPI puede escribirse utilizando dos formatos:

- 📄 YAML *(el más utilizado por su legibilidad)*.
- 📄 JSON.

Ambos representan exactamente la misma información.

Por ejemplo:

### YAML

```yaml
openapi: 3.0.0

info:
  title: Users API
  version: 1.0.0

paths:
  /users:
    get:
      summary: Obtener usuarios
```

### JSON

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Users API",
    "version": "1.0.0"
  }
}
```

La elección entre YAML y JSON depende principalmente de las preferencias del equipo o de la herramienta utilizada.

---

## 🧩 ¿Qué describe una especificación OpenAPI?

Una especificación puede contener prácticamente toda la información necesaria para consumir una API.

```text
📖 OpenAPI Specification

├── Información general

├── Endpoints

├── Métodos HTTP

├── Parámetros

├── Request Body

├── Responses

├── Modelos

├── Seguridad

└── Componentes reutilizables
```

En otras palabras, actúa como un manual técnico de la API.

---

# 🧰 ¿Qué es Swagger?

Swagger es el nombre del **ecosistema de herramientas** que permite trabajar con especificaciones OpenAPI.

Mientras que **OpenAPI define el formato**, Swagger proporciona herramientas que aprovechan esa información para ofrecer distintas funcionalidades.

Entre ellas:

- 📖 Visualizar documentación.
- 🧪 Ejecutar pruebas.
- ✍️ Editar especificaciones.
- ⚙️ Generar código automáticamente.

Conceptualmente:

```text
📖 OpenAPI

      │

      ▼

Describe la API

      │

      ▼

🧰 Swagger

      │

      ├──────────────┬──────────────┐

      ▼              ▼              ▼

🖥️ UI         ✍️ Editor      ⚙️ Codegen
```

Swagger **consume** una especificación OpenAPI para ofrecer herramientas útiles a los desarrolladores.

---

# ⚙️ ¿Cómo trabajan juntos?

La relación entre ambos puede entenderse mediante el siguiente flujo.

```text
👨‍💻 Desarrollador Backend

            │

            ▼

Escribe la especificación OpenAPI

            │

            ▼

📖 Documento OpenAPI

            │

            ▼

🧰 Swagger

            │

     ┌──────┼─────────┐

     ▼      ▼         ▼

Swagger UI  Editor  Codegen
```

OpenAPI representa el documento.

Swagger representa las herramientas que utilizan ese documento.

---

# 🧠 Diferencia sencilla

Una forma muy fácil de recordarlo es la siguiente.

```text
📖 OpenAPI

Es el lenguaje.

Describe la API.

────────────────────────────

🧰 Swagger

Son las herramientas.

Trabajan utilizando esa descripción.
```

O incluso:

```text
OpenAPI

        ≈

El plano de una casa

────────────────────────────

Swagger

        ≈

Las herramientas que utilizan ese plano
```

El plano describe cómo debe construirse la casa.

Las herramientas permiten trabajar utilizando ese plano.

---

# 📌 Ejemplo mental

Supongamos que tenemos el siguiente documento.

```yaml
openapi: 3.0.0
```

Ese archivo ya es una **especificación OpenAPI**.

Ahora una herramienta como Swagger UI puede leer ese documento y convertirlo en una interfaz visual.

```text
📄 OpenAPI Document

          │

          ▼

🖥️ Swagger UI

          │

          ▼

📖 Documentación interactiva
```

La documentación que vemos en el navegador no proviene directamente de Swagger.

Proviene del documento OpenAPI que Swagger interpreta.

---

# 📊 Comparación

| Característica | OpenAPI | Swagger |
|----------------|----------|----------|
| ¿Qué es? | Especificación | Ecosistema de herramientas |
| Función principal | Describir una API | Trabajar con la especificación |
| Define endpoints | ✅ Sí | ❌ No |
| Genera documentación | ❌ No directamente | ✅ Sí |
| Permite probar endpoints | ❌ No | ✅ Sí (Swagger UI) |
| Genera código | ❌ No | ✅ Sí (Swagger Codegen y herramientas relacionadas) |
| Es un estándar | ✅ Sí | ❌ No |

---

# ⚠️ Errores comunes

- ❌ Pensar que Swagger y OpenAPI son exactamente lo mismo.
- ❌ Creer que OpenAPI genera documentación automáticamente.
- ❌ Suponer que Swagger define el formato de la especificación.
- ❌ Pensar que OpenAPI ejecuta una API.
- ❌ Creer que Swagger implementa la lógica del servidor.

---

# 💡 Buenas prácticas

- ✅ Utilizar siempre una especificación OpenAPI actualizada.
- ✅ Considerar OpenAPI como el contrato oficial de la API.
- ✅ Utilizar herramientas de Swagger para facilitar el trabajo del equipo.
- ✅ Mantener sincronizada la implementación del Backend con la especificación.
- ✅ Documentar todos los endpoints y modelos importantes.

---

> [!TIP]
>
> Una regla muy sencilla para no volver a confundir ambos conceptos:
>
> **📖 OpenAPI describe la API.**
>
> **🧰 Swagger proporciona herramientas para trabajar con esa descripción.**

---

# 🏆 Idea clave

La relación entre ambos conceptos puede resumirse así:

```text
📖 OpenAPI

Especificación estándar

        │

Describe la API

        ▼

🧰 Swagger

Utiliza esa descripción

        │

        ├── 📖 Mostrar documentación

        ├── 🧪 Probar endpoints

        ├── ✍️ Editar especificaciones

        └── ⚙️ Generar código
```

**OpenAPI es el contrato que define cómo funciona una API.**  
**Swagger es el conjunto de herramientas que aprovecha ese contrato para facilitar el desarrollo, la documentación y la integración entre equipos.**

# 3️⃣ 🧩 ¿Qué problema resuelve Swagger?

Antes de que existieran herramientas como Swagger, la documentación de una API solía distribuirse en distintos lugares.

Era común encontrar información repartida entre:

```text
📄 Documentos Word

📄 Archivos PDF

📄 README del proyecto

💬 Mensajes de Slack

📝 Wikis internas

📧 Correos electrónicos
```

Cada uno podía contener información diferente o incluso contradictoria.

Esto hacía que consumir una API fuera mucho más difícil de lo necesario.

---

# 🚨 Problemas comunes sin Swagger

## ❌ Problema 1: Falta de documentación

El Backend implementa un nuevo endpoint.

```http
GET /users
```

Sin embargo, el equipo Frontend no sabe cómo utilizarlo.

```text
👨‍💻 Frontend

        │

        ▼

¿Cómo consumo este endpoint?

¿Necesita autenticación?

¿Qué devuelve?

¿Qué parámetros acepta?
```

La única solución suele ser preguntar directamente al desarrollador del Backend o revisar el código fuente.

---

## ❌ Problema 2: Documentación desactualizada

Uno de los problemas más frecuentes ocurre cuando la API evoluciona pero la documentación no.

Por ejemplo, inicialmente el endpoint era:

```http
POST /users
```

Tiempo después el Backend cambia la ruta a:

```http
POST /api/users
```

Pero la documentación continúa mostrando:

```http
POST /users
```

El resultado suele ser el siguiente:

```text
👨‍💻 Frontend

        │

        ▼

Realiza la petición

        │

        ▼

❌ 404 Not Found
```

El error no está en el código del Frontend, sino en que la documentación ya no refleja el estado real de la API.

---

## ❌ Problema 3: Información incompleta

En ocasiones el desarrollador conoce la existencia del endpoint.

```http
GET /users
```

Pero desconoce aspectos fundamentales como:

- 📥 Parámetros requeridos.
- 📦 Formato del Request Body.
- 📤 Estructura de la respuesta.
- 🚦 Códigos HTTP posibles.
- 🔐 Requisitos de autenticación.

Consumir la API se convierte en un proceso de prueba y error.

---

## ❌ Problema 4: Mala comunicación entre equipos

Cuando Frontend y Backend trabajan de forma independiente, ambos pueden tener interpretaciones diferentes sobre el funcionamiento de la API.

Por ejemplo:

```text
👨‍💻 Frontend

Piensa que:

POST /users

devuelve

201 Created

────────────────────────────

🖥️ Backend

Realmente devuelve

200 OK
```

O bien:

```text
Frontend espera

{
    "users":[]
}

────────────────────────────

Backend responde

{
    "data":[]
}
```

Estas diferencias provocan errores de integración y retrasan el desarrollo.

---

## ❌ Problema 5: Dificultad para probar endpoints

Cuando no existe una documentación interactiva, es necesario utilizar herramientas externas para probar la API.

Por ejemplo:

- 🧪 Postman.
- 🧪 Insomnia.
- 💻 cURL.
- 🌐 Clientes HTTP.

Aunque estas herramientas son excelentes, requieren configurar manualmente cada petición.

Swagger UI permite realizar muchas de estas pruebas directamente desde la documentación.

---

# 🎯 ¿Cómo ayuda Swagger?

Swagger centraliza toda la información importante sobre una API en un único lugar.

En vez de consultar varios documentos, todos los equipos utilizan la misma especificación.

```text
                    API

                     │

                     ▼

          📖 OpenAPI Specification

                     │

      ┌──────────────┼──────────────┐

      ▼              ▼              ▼

📖 Documentación   🧪 Pruebas   ⚙️ Herramientas
```

Esto convierte la documentación en una única fuente de verdad (*Single Source of Truth*).

---

## 🤝 Beneficios para el equipo

Con Swagger:

- 👨‍💻 El Frontend sabe exactamente cómo consumir la API.
- 🧪 QA conoce todas las respuestas posibles.
- 📱 Mobile utiliza la misma documentación.
- 🖥️ Backend mantiene una especificación centralizada.
- 👥 Nuevos desarrolladores pueden comprender la API rápidamente.

Todos trabajan utilizando el mismo contrato.

---

# 💡 Buenas prácticas

- ✅ Mantener la documentación sincronizada con el código.
- ✅ Documentar todos los endpoints.
- ✅ Añadir ejemplos reales.
- ✅ Especificar todos los códigos HTTP.
- ✅ Describir claramente los mecanismos de autenticación.

---

# 🏆 Idea clave

Swagger resuelve uno de los mayores problemas del desarrollo de APIs: **la falta de una documentación centralizada, consistente y actualizada**.

Gracias a una especificación única, todos los equipos trabajan utilizando la misma información, reduciendo errores, dudas y problemas de integración.

---

# 4️⃣ 🖥️ Swagger UI

Hasta ahora hemos visto que **OpenAPI describe una API**.

Pero todavía falta responder una pregunta importante:

> **¿Cómo visualizamos esa especificación de una forma cómoda e interactiva?**

La respuesta es **Swagger UI**.

Swagger UI es una herramienta que toma una especificación OpenAPI y la transforma en una **interfaz web interactiva**, permitiendo explorar y probar una API desde el navegador.

---

# 🧠 ¿Qué es Swagger UI?

Swagger UI es una aplicación web capaz de interpretar un documento OpenAPI y mostrarlo de forma visual.

En lugar de leer un archivo como este:

```yaml
openapi: 3.0.0

paths:
  /users:
    get:
      summary: Obtener usuarios
```

El desarrollador ve una interfaz similar a la siguiente:

```text
Users API

▼ GET /users

   Obtener todos los usuarios

────────────────────────────

▼ GET /users/{id}

   Obtener usuario por ID

────────────────────────────

▼ POST /users

   Crear usuario

────────────────────────────

▼ PUT /users/{id}

   Actualizar usuario

────────────────────────────

▼ DELETE /users/{id}

   Eliminar usuario
```

Toda la información queda organizada por recursos y métodos HTTP.

---

# ⚙️ ¿Cómo funciona?

El flujo es bastante sencillo.

```text
👨‍💻 Backend

        │

Genera documento OpenAPI

        │

        ▼

📖 OpenAPI Specification

        │

        ▼

🖥️ Swagger UI

        │

        ▼

📖 Documentación interactiva
```

Swagger UI **no inventa la documentación**.

Simplemente interpreta la especificación OpenAPI y la presenta de forma mucho más amigable.

---

# 🧪 ¿Qué permite hacer Swagger UI?

Dependiendo de cómo esté configurada la API, Swagger UI permite:

- 📖 Explorar todos los endpoints.
- 🌐 Identificar el método HTTP utilizado.
- 📥 Consultar parámetros.
- 📦 Ver el Request Body esperado.
- 📤 Analizar las respuestas.
- 🚦 Revisar los códigos HTTP documentados.
- 📄 Explorar modelos de datos.
- 🔐 Configurar autenticación.
- 🧪 Ejecutar peticiones reales.

En otras palabras, convierte la documentación en una herramienta interactiva.

---

# ▶️ Botón **Try it out**

Una de las funcionalidades más conocidas de Swagger UI es el botón **Try it out**.

Permite ejecutar una petición sin abandonar la documentación.

Por ejemplo:

```text
GET /users/{id}

id: 25

[ Try it out ]
```

Después de introducir los parámetros, aparece el botón:

```text
[ Execute ]
```

Swagger UI envía la petición al servidor.

Si todo funciona correctamente, la respuesta podría ser:

```json
{
  "id": 25,
  "name": "Alice"
}
```

Esto permite validar rápidamente el comportamiento de un endpoint.

---

# 🔐 Autenticación

Swagger UI también soporta distintos mecanismos de autenticación.

Por ejemplo, para una API protegida con JWT es habitual encontrar un botón como este:

```text
🔒 Authorize
```

Al pulsarlo, el usuario puede introducir su token.

```text
Bearer eyJhbGciOiJIUzI1NiIs...
```

A partir de ese momento, Swagger UI incluirá automáticamente el encabezado:

```http
Authorization: Bearer <JWT>
```

en todas las peticiones que lo requieran.

---

# 🔄 Flujo completo

```text
🖥️ Backend

        │

Genera especificación OpenAPI

        │

        ▼

📖 OpenAPI

        │

        ▼

🖥️ Swagger UI

        │

        ├── 📖 Visualizar documentación

        ├── 🔐 Configurar autenticación

        ├── 🧪 Ejecutar pruebas

        └── 📤 Enviar peticiones HTTP
```

Swagger UI actúa como una interfaz entre el desarrollador y la API.

---

# ⚠️ Errores comunes

- ❌ Pensar que Swagger UI crea la documentación automáticamente.
- ❌ Creer que Swagger UI reemplaza completamente herramientas como Postman.
- ❌ Suponer que Swagger UI implementa la lógica del Backend.
- ❌ Pensar que las peticiones simuladas no llegan al servidor (sí llegan si se ejecutan).

---

# 💡 Buenas prácticas

- ✅ Documentar correctamente todos los endpoints antes de publicarlos.
- ✅ Incluir ejemplos de solicitudes y respuestas.
- ✅ Configurar correctamente los esquemas de autenticación.
- ✅ Mantener la especificación OpenAPI sincronizada con la implementación.
- ✅ Aprovechar Swagger UI para validar rápidamente los cambios realizados en la API.

---

> [!IMPORTANT]
>
> **Swagger UI no sustituye necesariamente herramientas como Postman o Insomnia.**
>
> Su propósito principal es ofrecer una **documentación interactiva** que permita comprender, explorar y realizar pruebas básicas sobre una API directamente desde el navegador, utilizando como base una especificación OpenAPI.

---

# 🏆 Idea clave

Swagger UI transforma un documento OpenAPI en una **interfaz visual e interactiva**, permitiendo consultar la documentación, configurar autenticación, explorar endpoints y ejecutar peticiones sin necesidad de leer manualmente el archivo de especificación.

# 5️⃣ 🧰 Herramientas del ecosistema Swagger

Hasta ahora hemos aprendido que:

- 📖 **OpenAPI** define el estándar para describir una API.
- 🧰 **Swagger** es el ecosistema de herramientas que trabaja con esa especificación.

Pero Swagger no es una única herramienta.

En realidad, está formado por varias aplicaciones, cada una diseñada para resolver una necesidad diferente dentro del ciclo de vida de una API.

Las herramientas más representativas son:

- 🖥️ Swagger UI
- ✍️ Swagger Editor
- ⚙️ Swagger Codegen

Aunque todas trabajan sobre una especificación OpenAPI, **cada una tiene una responsabilidad específica**.

---

# 🖥️ Swagger UI

Swagger UI es probablemente la herramienta más conocida del ecosistema.

Su objetivo consiste en **convertir una especificación OpenAPI en una documentación web interactiva**.

En lugar de leer un archivo YAML o JSON manualmente, el desarrollador obtiene una interfaz amigable donde puede explorar y probar la API.

```text
📖 OpenAPI Specification

            │

            ▼

🖥️ Swagger UI

            │

            ▼

📖 Documentación interactiva
```

---

## 🎯 ¿Para qué sirve?

Swagger UI permite:

- 📖 Explorar todos los endpoints.
- 🌐 Identificar métodos HTTP.
- 📥 Consultar parámetros.
- 📤 Visualizar respuestas.
- 📄 Explorar modelos de datos.
- 🔐 Configurar autenticación.
- 🧪 Ejecutar peticiones directamente desde el navegador.

---

## 🧩 Uso típico

Supongamos que un equipo Backend desarrolla una API.

```text
👨‍💻 Backend

        │

        ▼

📖 OpenAPI Specification

        │

        ▼

🖥️ Swagger UI

        │

        ▼

👨‍💻 Frontend consulta la documentación
```

El desarrollador Frontend verá una interfaz similar a:

```text
Users API

▼ GET    /users

▼ POST   /users

▼ GET    /users/{id}

▼ PUT    /users/{id}

▼ DELETE /users/{id}
```

Cada endpoint puede desplegarse para consultar toda su información y, si está habilitado, ejecutarlo directamente.

---

# ✍️ Swagger Editor

Mientras que Swagger UI sirve para **consumir documentación**, Swagger Editor está pensado para **crear y editar especificaciones OpenAPI**.

Es una herramienta que permite escribir el documento OpenAPI utilizando:

- 📄 YAML.
- 📄 JSON.

---

## ⚙️ ¿Qué hace Swagger Editor?

Swagger Editor ofrece un entorno donde el desarrollador puede redactar la especificación mientras obtiene una vista previa del resultado.

Por ejemplo:

```yaml
openapi: 3.0.0

info:
  title: Users API
  version: 1.0.0

paths:
  /users:
    get:
      summary: Obtener usuarios
```

Mientras el documento se escribe, el editor valida automáticamente la sintaxis y muestra cómo será interpretada la documentación.

Conceptualmente:

```text
┌────────────────────────────┬────────────────────────────┐
│ Documento OpenAPI          │ Vista previa              │
│                            │                            │
│ paths:                     │ GET /users                │
│   /users:                  │ Obtener usuarios          │
│     get:                   │                            │
│       summary: ...         │                            │
└────────────────────────────┴────────────────────────────┘
```

---

## 🎯 ¿Para qué sirve?

Swagger Editor suele utilizarse para:

- ✍️ Diseñar una API antes de implementarla.
- 📖 Crear la documentación oficial.
- ✅ Validar la sintaxis OpenAPI.
- 🛠 Detectar errores en la especificación.
- 🤝 Definir el contrato entre Frontend y Backend antes de escribir código.

En muchos proyectos se adopta una estrategia conocida como **API First**, donde primero se diseña la especificación OpenAPI y posteriormente se implementa la API.

---

# ⚙️ Swagger Codegen

Otra herramienta importante del ecosistema es **Swagger Codegen**.

Su función consiste en **generar código automáticamente a partir de una especificación OpenAPI**.

En lugar de escribir manualmente modelos, clientes HTTP o estructuras básicas del servidor, la herramienta los crea utilizando la información definida en la especificación.

```text
📖 OpenAPI Specification

            │

            ▼

⚙️ Swagger Codegen

            │

            ▼

💻 Código generado
```

---

## 🎯 ¿Qué puede generar?

Dependiendo del lenguaje y de la configuración utilizada, Swagger Codegen puede producir:

- 📦 Modelos de datos.
- 🌐 Clientes HTTP.
- 📚 SDKs.
- 🖥️ Código base para servidores.
- 📄 Interfaces.
- 🧩 Estructuras iniciales del proyecto.

---

## 🧩 Ejemplo conceptual

Supongamos que existe una especificación OpenAPI.

```text
📖 OpenAPI

        │

        ▼

⚙️ Swagger Codegen

        │

        ▼

Angular Client
```

El resultado podría incluir un servicio listo para consumir la API.

```ts
usersService.getUsers();

usersService.createUser(user);

usersService.deleteUser(id);
```

De esta forma, el desarrollador evita escribir manualmente gran parte del código repetitivo asociado a las peticiones HTTP.

---

> [!NOTE]
>
> Actualmente existen otras herramientas modernas para la generación de código a partir de OpenAPI, como **OpenAPI Generator**, que surgió como una bifurcación de Swagger Codegen y es ampliamente utilizada en proyectos actuales.
>
> Sin embargo, Swagger Codegen sigue siendo una referencia importante para comprender la evolución del ecosistema.

---

# 📊 Comparación entre las herramientas

Cada herramienta cumple un propósito diferente.

| Herramienta | Función principal | Usuario típico |
|-------------|-------------------|----------------|
| 🖥️ **Swagger UI** | Visualizar y probar APIs | Frontend, Backend, QA |
| ✍️ **Swagger Editor** | Crear y editar especificaciones OpenAPI | Backend, Arquitectos |
| ⚙️ **Swagger Codegen** | Generar código automáticamente | Backend, Frontend |
| 📖 **OpenAPI** | Definir el contrato de la API | Todo el equipo |
| 🧰 **Swagger** | Ecosistema de herramientas | Todo el equipo |

---

# 🧠 ¿Cómo trabajan juntas?

Las herramientas del ecosistema suelen utilizarse como parte de un flujo de trabajo.

```text
           👨‍💻 Desarrollador

                   │

                   ▼

       ✍️ Diseña la especificación

                   │

                   ▼

        📖 OpenAPI Specification

          ┌────────┼─────────┐

          ▼        ▼         ▼

   🖥️ Swagger UI  ✍️ Editor  ⚙️ Codegen

          │        │         │

          ▼        ▼         ▼

 📖 Documentación  Edición   💻 Código generado

 🧪 Pruebas
```

Todas las herramientas comparten un mismo punto de partida: **la especificación OpenAPI**.

---

# 🏗️ Flujo de trabajo recomendado

En un proyecto moderno, el flujo habitual podría ser el siguiente.

```text
1️⃣ Diseñar la API

        │

        ▼

✍️ Swagger Editor

        │

        ▼

📖 OpenAPI Specification

        │

        ├──────────────┐

        ▼              ▼

🖥️ Swagger UI    ⚙️ Codegen

        │              │

        ▼              ▼

📖 Documentación   💻 Clientes HTTP

        │

        ▼

👨‍💻 Frontend y QA consumen la API
```

Este flujo permite mantener la documentación, el código generado y la implementación alineados.

---

# ⚠️ Errores comunes

- ❌ Pensar que Swagger UI crea una especificación OpenAPI.
- ❌ Creer que Swagger Editor sirve para ejecutar una API.
- ❌ Suponer que Swagger Codegen reemplaza toda la implementación manual.
- ❌ Confundir el ecosistema Swagger con OpenAPI.
- ❌ Utilizar documentación generada a partir de una especificación desactualizada.

---

# 💡 Buenas prácticas

- ✅ Diseñar primero la especificación OpenAPI.
- ✅ Mantener el documento sincronizado con la implementación.
- ✅ Utilizar Swagger UI para validar la documentación publicada.
- ✅ Aprovechar la generación automática de código cuando sea apropiado.
- ✅ Considerar la especificación OpenAPI como el contrato oficial entre todos los equipos.

---

# 🏆 Idea clave

El ecosistema Swagger está formado por herramientas especializadas que trabajan sobre una misma base: **la especificación OpenAPI**.

```text
                 📖 OpenAPI

          Describe la API

                    │

                    ▼

            🧰 Swagger

                    │

     ┌──────────────┼──────────────┐

     ▼              ▼              ▼

🖥️ Swagger UI  ✍️ Swagger Editor  ⚙️ Swagger Codegen

     │              │              │

 Visualizar      Crear y       Generar

 y probar         editar        código
```

Cada herramienta tiene una responsabilidad concreta:

- 📖 **OpenAPI** define cómo se describe una API.
- 🖥️ **Swagger UI** convierte esa descripción en documentación interactiva.
- ✍️ **Swagger Editor** permite crear y mantener la especificación.
- ⚙️ **Swagger Codegen** utiliza la especificación para generar código automáticamente.

Comprender esta relación permite entender cómo se organiza el proceso moderno de documentación, diseño y consumo de APIs.