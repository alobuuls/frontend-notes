# 🔄 FLUJO DE AUTENTICACIÓN CON JWT

El flujo de autenticación con JWT describe **qué ocurre desde que un usuario inicia sesión hasta que accede a recursos protegidos, renueva su autenticación o cierra sesión**.

La idea general es:

```text
👤 Usuario
   ↓
🔐 Login
   ↓
🖥️ Backend valida credenciales
   ↓
🎟️ Backend genera JWT
   ↓
📤 JWT llega al Frontend
   ↓
🗃️ Frontend almacena el token
   ↓
🌐 Frontend hace una petición
   ↓
🔑 Envía JWT en Authorization
   ↓
🛡️ Backend valida JWT
   ↓
✅ Permite o ❌ rechaza acceso
```

---

# 1️⃣ 🔐 LOGIN

El proceso comienza cuando el usuario intenta iniciar sesión.

El usuario proporciona sus credenciales, por ejemplo:

```json
{
  "email": "usuario@email.com",
  "password": "123456"
}
```

El Frontend envía estas credenciales al Backend:

```text
👤 Usuario
    ↓
📝 Email + Password
    ↓
🌐 Frontend
    ↓
🖥️ Backend
```

Por ejemplo:

```http
POST /login
```

El Backend recibe las credenciales y las verifica.

```text
Credenciales recibidas
        ↓
¿El usuario existe?
        ↓
¿La contraseña es correcta?
        ↓
      ┌─┴─┐
     Sí   No
     ↓     ↓
  Login   Error
  válido
```

Si las credenciales son correctas, el proceso continúa.

📌 **Importante:**

El Frontend no debería encargarse de verificar si la contraseña es correcta.

👉 Esa responsabilidad pertenece al Backend.

---

# 2️⃣ 🎟️ GENERACIÓN DEL JWT

Después de validar correctamente las credenciales, el Backend genera un JWT.

El JWT puede contener información como:

```json
{
  "sub": "12345",
  "role": "admin",
  "iat": 1720000000,
  "exp": 1720003600
}
```

El Backend firma el token utilizando una clave o mecanismo criptográfico.

Conceptualmente:

```text
👤 Usuario
    ↓
🔐 Credenciales válidas
    ↓
🖥️ Backend
    ↓
📦 Crea Header + Payload
    ↓
✍️ Genera Signature
    ↓
🎟️ JWT
```

El resultado es un token similar a:

```text
xxxxx.yyyyy.zzzzz
```

📌 El Backend es quien genera y firma el JWT.

---

# 3️⃣ 📤 ENVÍO DEL JWT AL FRONTEND

Una vez generado el JWT, el Backend lo devuelve al Frontend como parte de la respuesta del login.

Por ejemplo:

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIs...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIs..."
}
```

El flujo sería:

```text
🖥️ Backend
     ↓
🎟️ Genera JWT
     ↓
📤 HTTP Response
     ↓
🌐 Frontend
```

El Frontend recibe el token y puede utilizarlo para realizar futuras peticiones autenticadas.

---

# 4️⃣ 🗃️ ALMACENAMIENTO DEL TOKEN

Después de recibir el JWT, el Frontend necesita manejarlo de alguna manera para poder utilizarlo posteriormente.

Dependiendo de la arquitectura, existen diferentes estrategias.

### 💾 Local Storage

```ts
localStorage.setItem('accessToken', token);
```

El token permanece almacenado en el navegador.

### 🧠 Session Storage

```ts
sessionStorage.setItem('accessToken', token);
```

El token se mantiene mientras dure la sesión de la pestaña o ventana.

### 🍪 Cookies

También puede utilizarse una cookie, especialmente una cookie:

```text
HttpOnly
Secure
SameSite
```

Una cookie `HttpOnly` tiene la ventaja de que JavaScript no puede leerla directamente.

---

## ⚠️ IMPORTANTE

El almacenamiento de tokens es un tema de seguridad.

No existe una solución universal que sea siempre la mejor.

La elección depende de:

* Arquitectura de la aplicación.
* Tipo de autenticación.
* Riesgos de XSS.
* Riesgos de CSRF.
* Necesidades del Backend.
* Uso de cookies o APIs.

📌 Para estudiar JWT es importante entender que:

> 🧠 **JWT explica cómo funciona el token, pero no determina por sí solo dónde debe almacenarse.**

---

# 5️⃣ 🌐 ENVÍO DEL TOKEN AL BACKEND

Una vez autenticado, el usuario puede realizar peticiones a recursos protegidos.

Por ejemplo:

```http
GET /api/profile
```

El Frontend necesita demostrar que el usuario está autenticado.

Para ello, envía el Access Token junto con la petición.

```text
🌐 Frontend
    ↓
📤 HTTP Request
    +
🎟️ Access Token
    ↓
🖥️ Backend
```

Por ejemplo:

```http
GET /api/profile
Authorization: Bearer <TOKEN>
```

El Backend recibe la petición y procede a validar el token.

---

# 6️⃣ 🔑 AUTHORIZATION HEADER

Una forma muy común de enviar un JWT es utilizando el Header HTTP:

```http
Authorization: Bearer <TOKEN>
```

La estructura es:

```text
Authorization
      ↓
   Bearer
      ↓
    JWT
```

Ejemplo:

```http
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
```

### 🧠 ¿Qué significa `Bearer`?

Significa que quien posee el token puede presentarlo como credencial.

Conceptualmente:

```text
🎟️ Tengo un token válido
       ↓
📤 Lo presento al servidor
       ↓
🖥️ Backend lo valida
       ↓
✅ Acceso
```

⚠️ Por eso los tokens deben protegerse.

Si un atacante obtiene un Bearer Token válido, puede intentar utilizarlo mientras siga siendo válido.

---

# 7️⃣ 🛡️ VALIDACIÓN DEL TOKEN

Cuando el Backend recibe una petición protegida, debe validar el JWT.

El proceso puede incluir diferentes verificaciones.

```text
📤 Request
    ↓
🎟️ JWT recibido
    ↓
🔍 ¿Tiene formato válido?
    ↓
✍️ ¿La firma es válida?
    ↓
⏳ ¿No está expirado?
    ↓
🎯 ¿Es válido para esta aplicación?
    ↓
🛡️ ¿El usuario tiene permisos?
    ↓
✅ Permitir acceso
```

El Backend puede verificar:

### ✍️ Firma

Comprueba que el token no haya sido alterado.

### ⏳ Expiración

Comprueba que el token no haya expirado.

### 🏷️ Claims

Puede analizar información como:

```json
{
  "sub": "12345",
  "role": "admin"
}
```

### 🛡️ Autorización

Después de verificar la identidad, el Backend puede comprobar los permisos.

Por ejemplo:

```text
JWT válido
   ↓
Usuario identificado
   ↓
role = "admin"
   ↓
¿Puede eliminar usuarios?
   ↓
Sí ✅
```

📌 Es importante diferenciar:

```text
🔐 Autenticación
¿Quién eres?

🛡️ Autorización
¿Qué puedes hacer?
```

Un JWT válido no significa automáticamente que el usuario pueda realizar cualquier acción.

---

# 8️⃣ ⏳ EXPIRACIÓN

Los Access Tokens normalmente tienen una duración limitada.

Esto se establece mediante el claim:

```json
{
  "exp": 1720003600
}
```

Cuando llega la fecha de expiración:

```text
🎟️ Access Token
      ↓
⏳ Expira
      ↓
❌ Ya no es válido
```

Si el Frontend intenta utilizar un token expirado:

```text
🌐 Request
    ↓
🎟️ Token expirado
    ↓
🖥️ Backend
    ↓
❌ Rechaza petición
```

Normalmente el Backend responde con un error de autenticación, por ejemplo:

```http
401 Unauthorized
```

---

# 9️⃣ 🔄 REFRESH TOKEN

Para evitar que el usuario tenga que iniciar sesión constantemente, muchas arquitecturas utilizan Refresh Tokens.

El flujo sería:

```text
🔑 Login
   ↓
🎟️ Access Token
   +
🔄 Refresh Token
   ↓
🌐 Usuario utiliza la aplicación
   ↓
⏳ Access Token expira
   ↓
🔄 Frontend utiliza Refresh Token
   ↓
🖥️ Backend valida Refresh Token
   ↓
🎟️ Genera nuevo Access Token
   ↓
🌐 Usuario continúa utilizando la aplicación
```

Por ejemplo:

```http
POST /auth/refresh
```

El Backend recibe el Refresh Token y, si es válido, genera un nuevo Access Token.

```text
🔄 Refresh Token válido
        ↓
🎟️ Nuevo Access Token
```

📌 La idea principal es:

> 🔑 **Access Token:** permite acceder a recursos protegidos.

> 🔄 **Refresh Token:** permite obtener nuevos Access Tokens.

---

## 🧠 EJEMPLO DE DURACIÓN

Una arquitectura podría utilizar:

```text
🎟️ Access Token
⏳ 15 minutos

🔄 Refresh Token
⏳ Días o semanas
```

Estos valores son solo ejemplos.

La duración real depende de las necesidades de seguridad de cada aplicación.

---

# 🔟 🚪 LOGOUT

Cuando el usuario cierra sesión, el comportamiento depende de cómo esté implementada la autenticación.

En un sistema sencillo:

```text
👤 Usuario pulsa Logout
       ↓
🗑️ Frontend elimina el token
       ↓
🚪 Usuario queda desconectado
```

Si existen Refresh Tokens, puede existir un proceso adicional:

```text
👤 Logout
    ↓
🗑️ Frontend elimina tokens
    ↓
🖥️ Backend invalida Refresh Token
    ↓
❌ Ya no se pueden generar nuevos Access Tokens
```

---

## ⚠️ IMPORTANTE SOBRE EL LOGOUT

Un JWT ya emitido puede seguir siendo válido hasta que expire, dependiendo de la arquitectura.

Por ejemplo:

```text
🎟️ Access Token
       ↓
Usuario hace Logout
       ↓
🗑️ Frontend elimina token
       ↓
⏳ Token todavía no ha expirado
```

Si alguien ya había robado ese Access Token, eliminarlo del navegador del usuario no necesariamente invalida el token robado.

Por eso existen estrategias como:

* Access Tokens de corta duración.
* Revocación de Refresh Tokens.
* Rotación de Refresh Tokens.
* Listas de revocación.
* Validación adicional en el servidor.

---

# 🧠 🔄 FLUJO COMPLETO

Todo el proceso se puede resumir así:

```text
1️⃣ 👤 Usuario
       ↓
2️⃣ 🔐 Login
       ↓
3️⃣ 🖥️ Backend verifica credenciales
       ↓
4️⃣ 🎟️ Backend genera JWT
       ↓
5️⃣ 📤 Backend envía JWT
       ↓
6️⃣ 🌐 Frontend recibe token
       ↓
7️⃣ 🗃️ Frontend lo almacena o gestiona
       ↓
8️⃣ 🌐 Usuario realiza una petición
       ↓
9️⃣ 🔑 Frontend envía Authorization: Bearer JWT
       ↓
🔟 🛡️ Backend valida el JWT
       ↓
1️⃣1️⃣ 🔍 Verifica firma, expiración y permisos
       ↓
1️⃣2️⃣ ✅ Acceso permitido
       ↓
1️⃣3️⃣ ⏳ Access Token expira
       ↓
1️⃣4️⃣ 🔄 Refresh Token solicita renovación
       ↓
1️⃣5️⃣ 🎟️ Backend genera nuevo Access Token
       ↓
1️⃣6️⃣ 🚪 Usuario cierra sesión
       ↓
1️⃣7️⃣ 🗑️ Tokens eliminados / invalidados
```

---

# 🏆 🧠 IDEA CLAVE PARA RECORDAR

```text
🔐 LOGIN
     ↓
🎟️ OBTENER TOKEN
     ↓
🗃️ GESTIONAR TOKEN
     ↓
🌐 ENVIAR TOKEN
     ↓
🛡️ VALIDAR TOKEN
     ↓
⏳ TOKEN EXPIRA
     ↓
🔄 RENOVAR TOKEN
     ↓
🚪 LOGOUT
```

👉 El flujo completo de JWT gira alrededor de una idea:

> **El usuario se autentica una vez, recibe un token y utiliza ese token para demostrar su autenticación en las siguientes peticiones.**

Y el ciclo se mantiene mediante:

**🔐 Login → 🎟️ Token → 🌐 Requests → 🛡️ Validación → ⏳ Expiración → 🔄 Refresh → 🚪 Logout**
