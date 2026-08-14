# 📄 01 - Environment Variables

> 🔥 **CONCEPTO FUNDAMENTAL:** Las **Environment Variables** son una forma de proporcionar configuración a una aplicación **sin escribir esos valores directamente dentro del código**.
>
> En Docker son especialmente importantes porque permiten utilizar la misma Image en diferentes entornos cambiando únicamente su configuración.

---

## 📑 ÍNDICE

- [📄 01 - Environment Variables](#-01---environment-variables)
  - [📑 ÍNDICE](#-índice)
- [🌱 ¿Qué son Environment Variables?](#-qué-son-environment-variables)
- [🎯 ¿Para qué sirven?](#-para-qué-sirven)
- [🐳 Environment Variables dentro de Docker](#-environment-variables-dentro-de-docker)
- [🏗️ `ENV` en Dockerfile](#️-env-en-dockerfile)
- [⚠️ `ENV` no significa Secret](#️-env-no-significa-secret)
- [🧪 `-e` / `--env`](#--e----env)
- [📄 `--env-file`](#---env-file)
- [🆚 `ENV` vs `-e` vs `--env-file`](#-env-vs--e-vs---env-file)
- [🔄 Development vs Production](#-development-vs-production)
    - [🧪 Development](#-development)
    - [🚀 Production](#-production)
- [🔐 Variables públicas vs sensibles](#-variables-públicas-vs-sensibles)
    - [🟢 No suelen ser secretos](#-no-suelen-ser-secretos)
    - [🔴 Pueden contener información sensible](#-pueden-contener-información-sensible)
    - [⚠️ Nunca hagas esto](#️-nunca-hagas-esto)
- [🐳 Environment Variables y la misma Image](#-environment-variables-y-la-misma-image)
- [🧠 Variables dentro del Container](#-variables-dentro-del-container)
- [🚨 ¿Por qué no hardcodear configuración?](#-por-qué-no-hardcodear-configuración)
    - [❌ Mala práctica](#-mala-práctica)
    - [✅ Mejor](#-mejor)
- [🔥 El concepto fundamental](#-el-concepto-fundamental)

# 🌱 ¿Qué son Environment Variables?

Una Environment Variable es un **valor de configuración almacenado como una variable del entorno donde se ejecuta una aplicación**.

Por ejemplo:

```text
NODE_ENV=production
PORT=3000
DATABASE_URL=postgres://...
```

La aplicación puede leer estas variables cuando se está ejecutando.

```text
Environment
   │
   ├── NODE_ENV
   ├── PORT
   ├── DATABASE_URL
   └── JWT_SECRET
          ↓
      Application
```

En lugar de escribir directamente:

```text
DATABASE_URL = "postgres://user:password@localhost:5432/app"
```

puedes utilizar:

```text
DATABASE_URL
```

y proporcionar su valor desde el entorno.

---

# 🎯 ¿Para qué sirven?

Principalmente para **separar configuración de código**.

Por ejemplo:

```text
Development
    ↓
DATABASE_URL=localhost
```

mientras que en producción:

```text
Production
    ↓
DATABASE_URL=production-database
```

La aplicación puede ser exactamente la misma.

| 🧪 Development   | 🚀 Production    |
| ---------------- | ---------------- |
| Config A         | Config B         |
| Misma aplicación | Misma aplicación |

Esto permite reutilizar la misma aplicación en diferentes entornos.

---

# 🐳 Environment Variables dentro de Docker

Un container puede recibir variables de entorno.

```text
Container
   │
   ├── NODE_ENV=production
   ├── PORT=3000
   ├── DATABASE_URL=...
   └── JWT_SECRET=...
```

La aplicación que se ejecuta dentro del container puede acceder a ellas.

```text
Docker
   ↓
Container Environment
   ↓
Environment Variables
   ↓
Application
```

---

# 🏗️ `ENV` en Dockerfile

Puedes definir variables mediante `ENV`.

```dockerfile
FROM node:22

WORKDIR /app

COPY . .

RUN npm install

ENV NODE_ENV=production

CMD ["npm", "start"]
```

Esto establece:

```text
NODE_ENV=production
```

dentro de los containers creados a partir de esa Image.

```text
Dockerfile
    ↓
ENV NODE_ENV=production
    ↓
Docker Image
    ↓
Container
    ↓
NODE_ENV=production
```

---

# ⚠️ `ENV` no significa Secret

Es importante no confundir:

```dockerfile
ENV JWT_SECRET=my-secret
```

con una forma segura de almacenar secretos.

Si colocas un secreto directamente en el Dockerfile:

```dockerfile
ENV JWT_SECRET=my-secret
```

ese valor puede terminar formando parte de la configuración de la Image y no deberías tratarlo como una forma segura de gestión de secrets.

> 🔐 **IMPORTANTE:** Para valores sensibles, normalmente se prefiere proporcionar la configuración **en runtime** o utilizar mecanismos específicos para secrets.

---

# 🧪 `-e` / `--env`

Puedes proporcionar variables cuando ejecutas un container.

```bash
docker run -e NODE_ENV=production my-api
```

Esto significa:

```text
docker run
    ↓
-e NODE_ENV=production
    ↓
Container
    ↓
NODE_ENV=production
```

También puedes definir varias:

```bash
docker run \
  -e NODE_ENV=production \
  -e PORT=3000 \
  my-api
```

Dentro del container:

```text
NODE_ENV=production
PORT=3000
```

---

# 📄 `--env-file`

Cuando tienes muchas variables, escribirlas todas mediante `-e` puede resultar incómodo.

Puedes utilizar un archivo:

```text
.env
```

Por ejemplo:

```env
NODE_ENV=production
PORT=3000
DATABASE_URL=postgres://...
JWT_SECRET=...
```

Y después:

```bash
docker run --env-file .env my-api
```

Conceptualmente:

```text
.env
 │
 ├── NODE_ENV
 ├── PORT
 ├── DATABASE_URL
 └── JWT_SECRET
          ↓
    --env-file
          ↓
      Container
```

> 💡 Esto facilita manejar configuraciones con muchas variables.

---

# 🆚 `ENV` vs `-e` vs `--env-file`

| Forma        | ¿Cuándo se define?                  | Uso                                     |
| ------------ | ----------------------------------- | --------------------------------------- |
| `ENV`        | Durante la construcción de la Image | Valores/configuración por defecto       |
| `-e`         | Al ejecutar el Container            | Pasar variables individualmente         |
| `--env-file` | Al ejecutar el Container            | Pasar muchas variables desde un archivo |

Una diferencia importante:

```text
Dockerfile
   ↓
ENV
   ↓
Image
```

mientras:

```text
docker run
   ↓
-e / --env-file
   ↓
Container
```

---

# 🔄 Development vs Production

Una de las mayores ventajas es poder utilizar **la misma Image con diferentes configuraciones**.

### 🧪 Development

```text
NODE_ENV=development
DATABASE_URL=postgres://localhost/dev
API_URL=http://localhost:3000
```

### 🚀 Production

```text
NODE_ENV=production
DATABASE_URL=postgres://production-db/app
API_URL=https://api.example.com
```

La Image puede ser:

```text
my-api:1.0
```

en ambos casos.

```text
              my-api:1.0
                   │
          ┌────────┴────────┐
          ▼                 ▼
    Development          Production
          │                 │
      Config A           Config B
```

> 💡 **IDEA FUNDAMENTAL:** La Image contiene la aplicación; el entorno proporciona parte de su configuración.

---

# 🔐 Variables públicas vs sensibles

No todas las variables tienen el mismo nivel de sensibilidad.

### 🟢 No suelen ser secretos

```text
NODE_ENV=production
PORT=3000
```

### 🔴 Pueden contener información sensible

```text
DATABASE_PASSWORD=...
JWT_SECRET=...
API_SECRET=...
```

Por eso debes distinguir:

```text
Configuration
      │
      ├── Public / non-sensitive
      │
      └── Sensitive
```

### ⚠️ Nunca hagas esto

No deberías subir accidentalmente secretos a Git:

```text
.env
    ↓
❌ GitHub
```

Es común incluir:

```text
.env
```

en:

```text
.gitignore
```

y utilizar un archivo de ejemplo:

```text
.env.example
```

con valores ficticios:

```env
NODE_ENV=development
PORT=3000
DATABASE_URL=
JWT_SECRET=
```

Así otros desarrolladores conocen qué variables necesita la aplicación sin exponer los valores reales.

---

# 🐳 Environment Variables y la misma Image

Imagina que tienes:

```text
my-api:1.0
```

Puedes ejecutar esa misma Image varias veces:

```text
my-api:1.0
     │
     ├── Development
     │      └── NODE_ENV=development
     │
     ├── Testing
     │      └── NODE_ENV=test
     │
     └── Production
            └── NODE_ENV=production
```

No necesitas construir una Image diferente solamente porque cambió la configuración.

---

# 🧠 Variables dentro del Container

Desde el punto de vista de la aplicación, las variables están disponibles en su entorno de ejecución.

```text
Container
│
├── Environment
│     │
│     ├── NODE_ENV=production
│     ├── PORT=3000
│     └── DATABASE_URL=...
│
└── Application
          │
          ▼
     Lee variables
```

En Node.js, por ejemplo, puedes acceder a ellas mediante:

```javascript
process.env.NODE_ENV
```

o:

```javascript
process.env.DATABASE_URL
```

Docker simplemente proporciona esos valores al entorno del proceso.

---

# 🚨 ¿Por qué no hardcodear configuración?

### ❌ Mala práctica

```javascript
const databaseUrl =
  'postgres://user:password@production-db:5432/app';
```

La configuración queda mezclada con el código.

### ✅ Mejor

```javascript
const databaseUrl = process.env.DATABASE_URL;
```

Y Docker proporciona:

```text
DATABASE_URL=postgres://...
```

Esto permite cambiar la configuración sin modificar la aplicación.

---

# 🔥 El concepto fundamental

Piensa en Docker de esta manera:

```text
Docker Image
     │
     │ contiene
     ▼
Application
     │
     │ necesita
     ▼
Configuration
     │
     │ proporcionada por
     ▼
Environment Variables
```

La misma Image:

```text
my-api:1.0
```

puede ejecutarse en distintos entornos:

```text
Development
     │
     └── Configuración A

Production
     │
     └── Configuración B
```

> 💡 **La configuración de la aplicación no debería estar hardcodeada dentro del código o de la Image cuando puede proporcionarse desde el entorno de ejecución.**

> 🔐 **Y especialmente:** Los valores sensibles no deben tratarse como simples valores de configuración pública; deben gestionarse mediante mecanismos adecuados para secrets.
