# 📝 LOGGING

El **logging** consiste en registrar información sobre lo que ocurre dentro de una aplicación.

En un backend, los logs permiten saber:

* qué requests están llegando.
* qué errores están ocurriendo.
* cuánto tardan las operaciones.
* qué está haciendo el servidor.
* qué problemas ocurrieron durante la ejecución.

Por ejemplo:

```text
GET /users       200 45ms
POST /users      201 80ms
GET /users/999   404 12ms
```

---

## 📑 ÍNDICE — LOGGING

1. [🧠 ¿Qué es Logging?](#1--qué-es-logging)
2. [🌐 Request Logging](#2--request-logging)
3. [🚨 Error Logging](#3--error-logging)
4. [🎚️ Log Levels](#4--log-levels)
5. [🟢 Morgan](#5--morgan)
6. [🟡 Winston](#6--winston)
7. [🔵 Pino](#7--pino)
8. [🏗️ Development vs Production Logs](#8--development-vs-production-logs)
9. [🔄 Flujo de Logging en Express](#flujo-de-logging-en-express)
10. [🧠 Idea Clave](#-idea-clave)

---

# 1️⃣ 🧠 ¿QUÉ ES LOGGING?

**Logging** es el proceso de generar y almacenar registros sobre los eventos que ocurren en una aplicación.

Por ejemplo:

```text
Servidor iniciado
Request recibida
Usuario creado
Error de conexión con database
Request completada
```

Estos registros se llaman **logs**.

### 🎯 ¿Para qué sirven?

Principalmente para:

* 🐛 debugging
* 🔎 investigar errores
* 📊 monitorear aplicaciones
* 📈 analizar comportamiento
* 🚨 detectar problemas
* 🛠️ diagnosticar problemas en producción

---

# 2️⃣ 🌐 REQUEST LOGGING

El **Request Logging** registra información sobre las peticiones HTTP que recibe el servidor.

Por ejemplo:

```text
GET /users 200 45ms
POST /users 201 80ms
DELETE /users/10 204 20ms
```

Normalmente puede registrar:

```text
Método
↓
URL
↓
Status Code
↓
Tiempo de respuesta
```

Por ejemplo:

```text
GET /users/999 404 12ms
```

Significa:

```text
GET
↓
/users/999
↓
404 Not Found
↓
12 ms
```

Esto permite saber rápidamente qué está ocurriendo con las requests.

---

# 3️⃣ 🚨 ERROR LOGGING

El **Error Logging** registra información relacionada con errores.

Por ejemplo:

```text
ERROR Database connection failed
```

O:

```text
ERROR User 123 not found
```

Los logs de errores pueden contener información como:

```text
Error message
Stack trace
Timestamp
Request
Endpoint
Status code
```

Por ejemplo:

```text
ERROR
POST /users
500
Database connection failed
```

### 🧠 Diferencia

```text
Request Logging
↓
¿Qué requests están ocurriendo?

Error Logging
↓
¿Qué errores están ocurriendo?
```

Ambos suelen utilizarse juntos.

---

# 4️⃣ 🎚️ LOG LEVELS

Los **Log Levels** permiten clasificar los logs según su importancia.

Los niveles más comunes son:

| Nivel      | Significado                           | Ejemplo                       |
| ---------- | ------------------------------------- | ----------------------------- |
| 🐛 `debug` | Información para debugging            | Valor de una variable         |
| ℹ️ `info`  | Información general                   | Servidor iniciado             |
| ⚠️ `warn`  | Situación potencialmente problemática | Uso de una API antigua        |
| 🚨 `error` | Ocurrió un error                      | Database desconectada         |
| 💀 `fatal` | Error crítico                         | Aplicación no puede continuar |

Por ejemplo:

```text
INFO   Server started on port 3000
WARN   API version is deprecated
ERROR  Database connection failed
```

### 🧠 ¿Por qué existen?

Porque no toda la información tiene la misma importancia.

Podemos decidir:

```text
Development
↓
debug + info + warn + error

Production
↓
info + warn + error
```

Así evitamos generar cantidades innecesarias de información.

---

# 5️⃣ 🟢 MORGAN

**Morgan** es un middleware de Express utilizado principalmente para **registrar HTTP requests**.

Su objetivo principal es:

```text
Request
   ↓
Morgan
   ↓
Log
```

Por ejemplo:

```text
GET /users 200 45 ms
```

Es especialmente útil para comenzar a implementar **request logging** en Express.

### 🧠 Idea clave

```text
Express
   ↓
Morgan
   ↓
HTTP Request Logs
```

Morgan se enfoca principalmente en las requests HTTP.

---

# 6️⃣ 🟡 WINSTON

**Winston** es una librería de logging más completa y configurable.

Permite trabajar con:

* diferentes niveles de logs.
* diferentes formatos.
* diferentes destinos.
* archivos.
* consola.
* transports.

Conceptualmente:

```text
Application
     ↓
  Winston
     ↓
 ┌───┴──────────┐
 ↓              ↓
Console        File
```

Por ejemplo:

```text
info.log
error.log
```

Esto resulta útil cuando necesitas un sistema de logging más elaborado.

---

# 7️⃣ 🔵 PINO

**Pino** es otra librería de logging para Node.js conocida especialmente por su **alto rendimiento** y por trabajar muy bien con logs estructurados.

Puede generar logs en formato JSON:

```json
{
  "level": 30,
  "msg": "User created",
  "userId": 123
}
```

Esto resulta especialmente útil para sistemas donde los logs serán procesados posteriormente por herramientas de monitoreo.

### 🧠 Comparación rápida

| Librería       | Principal enfoque               |
| -------------- | ------------------------------- |
| 🟢 **Morgan**  | HTTP request logging            |
| 🟡 **Winston** | Logging configurable y completo |
| 🔵 **Pino**    | Logging rápido y estructurado   |

---

# 8️⃣ 🏗️ DEVELOPMENT VS PRODUCTION LOGS

Los logs pueden variar dependiendo del entorno.

## 💻 Development

Durante el desarrollo queremos información detallada para poder encontrar problemas.

```text
DEBUG Database query started
INFO  Server running on port 3000
INFO  GET /users 200 45ms
DEBUG User ID: 123
```

Aquí puede ser útil tener logs bastante detallados.

---

## 🚀 Production

En producción debemos evitar generar información innecesaria o sensible.

Podemos mantener:

```text
INFO  Server started
INFO  GET /users 200
WARN  Slow request
ERROR Database connection failed
```

Pero debemos evitar registrar información sensible como:

```text
❌ Passwords
❌ JWT completos
❌ API keys
❌ Secret keys
❌ Tokens
❌ Información personal innecesaria
```

> [!WARNING]
> Los logs también son información sensible. Un sistema de logging mal configurado puede convertirse en una fuga de información.

---

# 🔄 FLUJO DE LOGGING EN EXPRESS

Una aplicación puede generar logs en diferentes puntos:

```text
                    Request
                       ↓
                 Request Logger
                       ↓
                    Route
                       ↓
                  Controller
                       ↓
                   Service
                       ↓
                 Repository
                       ↓
                   Database
                       │
             ┌─────────┴─────────┐
             ↓                   ↓
          Success              Error
             ↓                   ↓
          Log info          Log error
```

Por ejemplo:

```text
INFO  POST /users
INFO  Creating user
INFO  User created
INFO  Response 201
```

Si ocurre un problema:

```text
INFO  POST /users
ERROR Database connection failed
ERROR Response 500
```

---

# 🧠 IDEA CLAVE

Piensa en **logging** como el historial de lo que está ocurriendo dentro de tu backend:

```text
Request
   ↓
¿Qué pasó?
   ↓
Log
   ↓
¿Funcionó?
   ├── Sí → info
   ├── Algo extraño → warn
   └── Falló → error
```

Y recuerda:

> **Logging sirve para saber qué está pasando y qué pasó; no reemplaza el manejo de errores ni el monitoreo.**
