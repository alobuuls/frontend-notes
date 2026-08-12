# 📄 02 - Authentication Providers

## 📑 Índice

- [📄 02 - Authentication Providers](#-02---authentication-providers)
  - [📑 Índice](#-índice)
  - [🔐 ¿Qué son los Authentication Providers?](#-qué-son-los-authentication-providers)
  - [📧 Email / Password](#-email--password)
  - [🔵 Google](#-google)
  - [🐙 GitHub](#-github)
  - [🍎 Apple](#-apple)
  - [🔵 Facebook](#-facebook)
  - [🌐 Otros OAuth Providers](#-otros-oauth-providers)
  - [👤 Anonymous Authentication](#-anonymous-authentication)
  - [🔗 Identity Provider](#-identity-provider)
  - [🔄 Diferentes métodos de autenticación](#-diferentes-métodos-de-autenticación)
  - [🔑 OAuth](#-oauth)
  - [🪪 OpenID Connect](#-openid-connect)
  - [🌐 Social Login](#-social-login)
- [⭐ Concepto fundamental](#-concepto-fundamental)

## 🔐 ¿Qué son los Authentication Providers?

Los **Authentication Providers** son los diferentes métodos que Firebase Authentication puede utilizar para autenticar a un usuario.

Por ejemplo:

```text
Firebase Authentication
│
├── Email / Password
├── Google
├── GitHub
├── Apple
├── Facebook
├── Otros OAuth Providers
└── Anonymous Authentication
```

---

## 📧 Email / Password

El usuario se autentica utilizando:

```text
Email
+
Password
```

Flujo:

```text
User
 ↓
Email + Password
 ↓
Firebase Authentication
 ↓
Firebase User
```

---

## 🔵 Google

El usuario puede autenticarse utilizando su cuenta de Google.

```text
User
 ↓
Google
 ↓
Firebase Authentication
 ↓
Firebase User
```

---

## 🐙 GitHub

Firebase también puede utilizar GitHub como proveedor de identidad.

```text
User
 ↓
GitHub
 ↓
Firebase Authentication
 ↓
Firebase User
```

---

## 🍎 Apple

Apple puede utilizarse como proveedor de identidad para autenticar usuarios.

```text
User
 ↓
Apple
 ↓
Firebase Authentication
 ↓
Firebase User
```

---

## 🔵 Facebook

Facebook puede utilizarse como otro proveedor de autenticación.

```text
User
 ↓
Facebook
 ↓
Firebase Authentication
 ↓
Firebase User
```

---

## 🌐 Otros OAuth Providers

Firebase Authentication también puede trabajar con otros proveedores que utilizan protocolos de autenticación como OAuth.

La idea general es:

```text
User
 ↓
Identity Provider
 ↓
Firebase Authentication
 ↓
Firebase User
```

---

## 👤 Anonymous Authentication

Firebase también permite autenticar usuarios **anónimamente**.

En este caso, el usuario no necesita proporcionar inicialmente una cuenta tradicional.

```text
User
 ↓
Anonymous Authentication
 ↓
Firebase User
```

Firebase genera una identidad para ese usuario aunque todavía no haya iniciado sesión mediante un proveedor tradicional.

---

## 🔗 Identity Provider

Un **Identity Provider (IdP)** es un servicio que proporciona y verifica la identidad de un usuario.

Por ejemplo, Google puede actuar como Identity Provider:

```text
User
 ↓
Google
 ↓
Firebase Authentication
 ↓
Firebase User
```

Google verifica la identidad y Firebase utiliza esa información para autenticar al usuario dentro de la aplicación.

---

## 🔄 Diferentes métodos de autenticación

Un mismo sistema puede ofrecer diferentes métodos de login:

```text
                 Firebase Authentication
                         │
        ┌────────────────┼────────────────┐
        ▼                ▼                ▼
 Email/Password       Google            GitHub
        │                │                │
        └────────────────┼────────────────┘
                         ▼
                   Firebase User
```

La aplicación puede ofrecer varias alternativas para que el usuario elija cómo autenticarse.

---

## 🔑 OAuth

**OAuth** es un protocolo utilizado para permitir que una aplicación obtenga acceso autorizado a recursos de otro servicio sin tener que recibir directamente las credenciales del usuario.

En Social Login, por ejemplo:

```text
Application
     ↓
Google
     ↓
OAuth
     ↓
Firebase Authentication
```

No necesitas profundizar todavía en la implementación de OAuth.

---

## 🪪 OpenID Connect

**OpenID Connect (OIDC)** es una capa de identidad construida sobre OAuth 2.0.

Su objetivo es permitir que una aplicación pueda **verificar la identidad del usuario**.

Conceptualmente:

```text
User
 ↓
Identity Provider
 ↓
OpenID Connect
 ↓
Application
```

---

## 🌐 Social Login

**Social Login** consiste en permitir que un usuario utilice una cuenta existente de un proveedor externo para autenticarse.

Por ejemplo:

```text
Login
 │
 ├── Google
 ├── GitHub
 ├── Apple
 └── Facebook
```

En lugar de crear una nueva contraseña específica para la aplicación, el usuario utiliza su identidad existente en el proveedor.

---

# ⭐ Concepto fundamental

Debes entender esta relación:

```text
Identity Provider
        ↓
Authentication Provider
        ↓
Firebase Authentication
        ↓
Firebase User
```

Y que Firebase puede integrar **múltiples métodos de autenticación dentro del mismo sistema**.
