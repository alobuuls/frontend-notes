# 🔐 JSON WEB TOKENS (JWT)

---

# 1️⃣ 🧠 AUTENTICACIÓN VS AUTORIZACIÓN

Antes de entender JWT, primero debes diferenciar estos dos conceptos.

Aunque están relacionados, **no significan lo mismo**.

---

## 🔑 ¿QUÉ ES LA AUTENTICACIÓN?

La autenticación responde a la pregunta:

> 🧠 **¿Quién eres?**

Es el proceso mediante el cual el sistema verifica la identidad de un usuario.

### Ejemplo:

```text
Usuario
   ↓
Ingresa email + contraseña
   ↓
Backend verifica las credenciales
   ↓
Credenciales correctas
   ↓
Usuario autenticado ✅
```

📌 Ejemplos de métodos de autenticación:

* Usuario + contraseña
* Google
* GitHub
* Facebook
* Magic Links
* Biometría

👉 La autenticación determina **la identidad del usuario**.

---

## 🛡️ ¿QUÉ ES LA AUTORIZACIÓN?

La autorización responde a la pregunta:

> 🧠 **¿Qué puedes hacer?**

Ocurre después de que el usuario ha sido autenticado.

### Ejemplo:

```text
Usuario autenticado
       ↓
¿Tiene permisos de administrador?
       ↓
     ┌───┴───┐
    Sí       No
    ↓         ↓
Puede       Acceso
eliminar    denegado
usuarios
```

📌 Ejemplos:

* Un administrador puede eliminar usuarios.
* Un usuario normal no puede eliminar usuarios.
* Un usuario puede editar su propio perfil.
* Un usuario no puede editar el perfil de otra persona.

👉 La autorización determina **qué acciones puede realizar un usuario autenticado**.

---

## 🔗 ¿QUÉ TIENE QUE VER JWT CON ESTO?

JWT puede utilizarse para transportar información relacionada con la identidad y los permisos del usuario entre el cliente y el servidor.

Por ejemplo:

```text
Usuario inicia sesión
        ↓
Backend valida credenciales
        ↓
Backend genera JWT
        ↓
Frontend recibe JWT
        ↓
Frontend envía JWT en futuras peticiones
        ↓
Backend valida el JWT
        ↓
Permite o rechaza la petición
```

📌 JWT **no es la autenticación en sí misma**.

👉 JWT es un formato de token que puede utilizarse dentro de un sistema de autenticación y autorización.

---

# 2️⃣ 🔑 ¿QUÉ ES UN JWT?

**JWT** significa:

> **JSON Web Token**

Es un estándar utilizado para transmitir información entre diferentes partes de una aplicación de forma compacta y segura mediante un **token firmado digitalmente**.

Un JWT suele utilizarse para representar información relacionada con una identidad o una sesión autenticada.

Por ejemplo:

```text
Usuario inicia sesión
        ↓
Backend verifica usuario y contraseña
        ↓
Backend genera JWT
        ↓
Frontend recibe JWT
        ↓
Frontend utiliza el JWT en futuras peticiones
```

📌 De esta manera, el servidor puede utilizar el token para identificar o validar al usuario en solicitudes posteriores.

---

## 🧠 IDEA IMPORTANTE

Un JWT **no es una contraseña**.

Tampoco es una sesión almacenada en el servidor.

Es un **token** que contiene información y que está firmado para permitir verificar que no ha sido alterado.

---

## 🔒 ¿POR QUÉ SE FIRMA?

La firma permite al servidor comprobar que el token:

✅ Fue generado por una fuente confiable.

✅ No fue modificado después de ser generado.

❌ No garantiza que el contenido sea secreto.

Por eso:

> ⚠️ **Un JWT firmado no significa que esté cifrado.**

---

# 3️⃣ 🧩 ESTRUCTURA DE UN JWT

Un JWT normalmente tiene tres partes:

```text
HEADER.PAYLOAD.SIGNATURE
```

Por ejemplo:

```text
xxxxx.yyyyy.zzzzz
```

Las tres partes están separadas por un punto:

```text
HEADER
   .
PAYLOAD
   .
SIGNATURE
```

Cada parte tiene una función diferente.

---

## 📌 HEADER

El Header contiene información sobre el token.

Normalmente especifica:

* El tipo de token.
* El algoritmo utilizado para firmarlo.

Ejemplo:

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

### `alg`

Indica el algoritmo utilizado para generar la firma.

Ejemplo:

```text
HS256
```

### `typ`

Indica el tipo de token.

Normalmente:

```text
JWT
```

📌 El Header **no contiene la información principal del usuario**.

---

## 📦 PAYLOAD

El Payload contiene información llamada **claims**.

Ejemplo:

```json
{
  "sub": "12345",
  "name": "Alo",
  "role": "admin",
  "iat": 1720000000,
  "exp": 1720003600
}
```

Puede contener información como:

* Identificador del usuario.
* Rol.
* Permisos.
* Fecha de creación.
* Fecha de expiración.

⚠️ **No debes guardar información sensible en el Payload.**

Por ejemplo:

❌ Contraseñas.

❌ Tokens secretos.

❌ Información privada que no debería ser visible.

📌 El Payload normalmente puede ser **decodificado fácilmente**.

Por eso:

> 🧠 **Firmado ≠ cifrado**

---

## ✍️ SIGNATURE

La Signature es la firma digital del JWT.

Su función principal es permitir verificar que el token **no haya sido modificado**.

De forma conceptual:

```text
Header
   +
Payload
   +
Clave secreta
   ↓
Signature
```

Cuando el servidor recibe el JWT:

```text
JWT recibido
      ↓
Servidor verifica la firma
      ↓
¿Firma válida?
   ↙       ↘
 Sí         No
 ↓           ↓
Continúa   Rechaza
```

Si alguien modifica el Payload, la firma ya no coincidirá.

---

# 4️⃣ 🏷️ CLAIMS

Los **claims** son datos incluidos dentro del Payload de un JWT.

Representan información sobre el token o sobre la entidad a la que representa.

Ejemplo:

```json
{
  "sub": "12345",
  "role": "admin",
  "iat": 1720000000,
  "exp": 1720003600
}
```

---

## 🧩 CLAIMS REGISTRADOS

Son claims definidos como estándar por JWT.

### `iss` — Issuer

Indica quién emitió el token.

```json
{
  "iss": "my-api"
}
```

---

### `sub` — Subject

Identifica al sujeto principal del token.

Frecuentemente representa el ID del usuario.

```json
{
  "sub": "12345"
}
```

---

### `aud` — Audience

Indica para quién está destinado el token.

```json
{
  "aud": "my-frontend"
}
```

---

### `exp` — Expiration Time

Indica cuándo expira el token.

```json
{
  "exp": 1720003600
}
```

Después de ese momento, el token debería considerarse inválido.

---

### `iat` — Issued At

Indica cuándo fue creado el token.

```json
{
  "iat": 1720000000
}
```

---

### `nbf` — Not Before

Indica desde qué momento el token puede ser utilizado.

```json
{
  "nbf": 1720000000
}
```

---

### `jti` — JWT ID

Identificador único del token.

Puede utilizarse para identificar un token específico.

```json
{
  "jti": "abc123"
}
```

---

## 🧠 CLAIMS PERSONALIZADOS

También pueden existir claims definidos por la propia aplicación.

Por ejemplo:

```json
{
  "sub": "12345",
  "role": "admin",
  "department": "finance"
}
```

📌 `role` y `department` podrían ser claims personalizados.

⚠️ Los claims personalizados deben utilizarse con cuidado.

El servidor **no debería confiar únicamente en lo que el cliente dice**.

La autorización debe ser validada por el backend.

---

# 5️⃣ ✍️ FIRMADO VS CIFRADO

Esta diferencia es fundamental.

---

## ✍️ JWT FIRMADO

Un JWT firmado permite verificar:

> 🧠 **¿El token fue alterado?**

La firma protege la **integridad** del token.

```text
Header + Payload
       ↓
Firma
       ↓
Se puede verificar si fue modificado
```

Pero el contenido sigue siendo legible si alguien obtiene el token.

---

## 🔐 JWT CIFRADO

Un token cifrado busca proteger la **confidencialidad** de la información.

Su objetivo es que terceros no puedan leer el contenido.

📌 JWT normalmente se utiliza como token **firmado**, no necesariamente cifrado.

---

## 🧠 IDEA CLAVE

```text
Firmado
   ↓
Sé que no fue alterado

Cifrado
   ↓
No puedo leer fácilmente su contenido
```

Por eso:

> ⚠️ Nunca debes asumir que el Payload de un JWT es secreto.

---

# 6️⃣ 🌐 BEARER TOKEN

Cuando un JWT se utiliza para autenticación, es común enviarlo como un **Bearer Token**.

La palabra `Bearer` significa, de forma conceptual:

> 🧠 "Quien posee este token puede presentarlo."

Normalmente se envía en el Header HTTP:

```http
Authorization: Bearer <TOKEN>
```

Ejemplo:

```http
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
```

El flujo sería:

```text
Frontend
   ↓
HTTP Request
   ↓
Authorization: Bearer JWT
   ↓
Backend
   ↓
Valida JWT
   ↓
Procesa petición
```

⚠️ Si alguien obtiene un Bearer Token válido, podría intentar utilizarlo para acceder a recursos protegidos mientras el token siga siendo válido.

Por eso es importante proteger los tokens.

---

# 7️⃣ ⏳ EXPIRACIÓN DEL TOKEN

Los JWT normalmente tienen un tiempo de vida limitado.

Esto se controla mediante el claim:

```text
exp
```

Ejemplo conceptual:

```text
Token creado
    ↓
Token válido
    ↓
Tiempo pasa
    ↓
Token expira
    ↓
Backend rechaza el token
```

Esto ayuda a reducir el impacto si un token es robado.

---

## 🔑 ACCESS TOKEN

El **Access Token** se utiliza para acceder a recursos protegidos.

Ejemplo:

```text
Frontend
    ↓
Access Token
    ↓
GET /api/profile
    ↓
Backend valida token
    ↓
Respuesta
```

Normalmente tiene una duración relativamente corta.

Ejemplo conceptual:

```text
Access Token
⏳ 15 minutos
```

📌 La duración exacta depende de la aplicación.

---

## 🔄 REFRESH TOKEN

El Refresh Token se utiliza para obtener un nuevo Access Token cuando este expira.

Ejemplo:

```text
Access Token expira
        ↓
Frontend utiliza Refresh Token
        ↓
Backend valida Refresh Token
        ↓
Genera nuevo Access Token
        ↓
Usuario continúa utilizando la aplicación
```

Normalmente tiene una duración más larga que el Access Token.

Ejemplo conceptual:

```text
Access Token
⏳ corta duración

Refresh Token
⏳ larga duración
```

---

# 8️⃣ 🔄 REFRESH TOKEN

El sistema de Refresh Tokens permite mantener una sesión durante más tiempo sin utilizar un Access Token de larga duración.

Flujo típico:

```text
1. Usuario inicia sesión
          ↓
2. Backend valida credenciales
          ↓
3. Backend entrega:
      ├── Access Token
      └── Refresh Token
          ↓
4. Frontend utiliza Access Token
          ↓
5. Access Token expira
          ↓
6. Frontend solicita renovación
          ↓
7. Backend valida Refresh Token
          ↓
8. Backend entrega nuevo Access Token
```

📌 La idea es:

> 🔑 Access Token → acceso frecuente y corta duración.

> 🔄 Refresh Token → renovar el acceso.

---

## 🧠 ¿POR QUÉ USAR DOS TOKENS?

Porque permite combinar:

✅ Seguridad.

✅ Sesiones más largas.

✅ Access Tokens de corta duración.

Si un Access Token es robado:

```text
Access Token robado
       ↓
Tiempo limitado
       ↓
Expira rápidamente
```

El Refresh Token debe protegerse especialmente porque permite obtener nuevos Access Tokens.

---

# 9️⃣ 🚪 LOGOUT

Cerrar sesión con JWT requiere entender algo importante:

> 🧠 Un JWT normalmente es **stateless**.

Esto significa que el servidor puede validar el token sin tener que mantener una sesión tradicional para cada usuario.

Por eso, un JWT ya emitido **no desaparece automáticamente** cuando el usuario presiona "Logout".

---

## 📌 Logout simple en el frontend

El frontend puede eliminar el token almacenado:

```text
Usuario pulsa Logout
       ↓
Frontend elimina token
       ↓
Usuario deja de estar autenticado
```

Esto evita que el navegador siga utilizando el token.

Pero:

⚠️ Si el token sigue siendo válido y alguien más lo posee, podría intentar utilizarlo.

---

## 🔐 Logout con Refresh Token

Un sistema más completo puede invalidar el Refresh Token en el backend.

```text
Logout
   ↓
Frontend elimina tokens
   ↓
Backend invalida Refresh Token
   ↓
No se pueden generar nuevos Access Tokens
```

El Access Token existente normalmente seguirá siendo válido hasta que expire, dependiendo de la arquitectura.

---

# 🔟 🧠 JWT VS SESSION

JWT y Sessions son dos formas diferentes de manejar autenticación.

---

## 🟢 JWT

Con JWT, el servidor genera un token que contiene información y que puede ser validado mediante su firma.

Flujo:

```text
Login
  ↓
Servidor genera JWT
  ↓
Cliente guarda token
  ↓
Cliente envía token
  ↓
Servidor valida token
```

### Ventajas

✅ Arquitectura stateless.

✅ Fácil de utilizar entre diferentes servicios.

✅ Puede ser útil en APIs y arquitecturas distribuidas.

✅ No requiere mantener una sesión tradicional por cada usuario.

### Desventajas

❌ Revocar tokens puede ser más complicado.

❌ Si un token es robado, puede utilizarse hasta que expire.

❌ El almacenamiento del token requiere cuidado.

❌ Un JWT grande aumenta el tamaño de las peticiones.

---

## 🔵 SESSION

Con sesiones tradicionales:

```text
Login
  ↓
Servidor crea sesión
  ↓
Servidor guarda información de sesión
  ↓
Cliente recibe Session ID
  ↓
Cliente envía Session ID
  ↓
Servidor busca la sesión
```

El cliente normalmente guarda un identificador de sesión, mientras que la información de la sesión se mantiene del lado del servidor.

### Ventajas

✅ Revocar sesiones es relativamente sencillo.

✅ El servidor mantiene el control de la sesión.

✅ El cliente no necesita almacenar toda la información de autenticación.

### Desventajas

❌ El servidor debe mantener el estado de las sesiones.

❌ Puede requerir almacenamiento compartido en arquitecturas distribuidas.

❌ La escalabilidad puede requerir infraestructura adicional, como un almacén de sesiones compartido.

---

## ⚖️ DIFERENCIA PRINCIPAL

| Característica   | JWT                                    | Session                                 |
| ---------------- | -------------------------------------- | --------------------------------------- |
| Estado principal | En el token                            | En el servidor                          |
| Identificador    | JWT                                    | Session ID                              |
| Validación       | Firma del token                        | Consulta de sesión                      |
| Revocación       | Más compleja                           | Más sencilla                            |
| Escalabilidad    | Muy conveniente para APIs distribuidas | Requiere gestionar sesiones compartidas |
| Información      | Puede viajar dentro del token          | Se mantiene principalmente en servidor  |
| Expiración       | Claim `exp`                            | Configuración de sesión                 |
| Logout           | Requiere estrategia de invalidación    | El servidor puede destruir la sesión    |

---

# 🧠 IDEA GENERAL DEL FLUJO JWT

```text
👤 USUARIO
    ↓
🔑 LOGIN
    ↓
🖥️ BACKEND VERIFICA CREDENCIALES
    ↓
✍️ BACKEND GENERA JWT
    ↓
📦 FRONTEND RECIBE TOKEN
    ↓
🌐 FRONTEND ENVÍA TOKEN
    ↓
🛡️ BACKEND VALIDA TOKEN
    ↓
✅ ACCESO PERMITIDO
```

Si el token expira:

```text
⏳ ACCESS TOKEN EXPIRA
          ↓
🔄 REFRESH TOKEN
          ↓
🖥️ BACKEND VALIDA REFRESH TOKEN
          ↓
🔑 NUEVO ACCESS TOKEN
          ↓
🌐 USUARIO CONTINÚA
```

---

# 🏆 🧠 IDEAS CLAVE PARA RECORDAR

* 🔐 **Autenticación** → ¿Quién eres?
* 🛡️ **Autorización** → ¿Qué puedes hacer?
* 🎫 **JWT** → Token firmado utilizado para transportar información entre cliente y servidor.
* 🧩 **Header** → Información sobre el token y su algoritmo.
* 📦 **Payload** → Contiene claims.
* ✍️ **Signature** → Permite verificar la integridad del token.
* 🏷️ **Claims** → Información contenida en el Payload.
* ✍️ **Firmado** → Permite detectar modificaciones.
* 🔐 **Cifrado** → Protege la confidencialidad.
* 🌐 **Bearer Token** → Forma común de enviar un token mediante `Authorization`.
* ⏳ **Access Token** → Acceso a recursos protegidos, normalmente de corta duración.
* 🔄 **Refresh Token** → Permite obtener nuevos Access Tokens.
* 🚪 **Logout** → Requiere una estrategia para eliminar o invalidar tokens.
* 🧠 **JWT vs Session** → JWT suele llevar el estado necesario en el token; Session mantiene la información de sesión principalmente en el servidor.