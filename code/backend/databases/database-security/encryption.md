# 📄 07 - Encryption ⭐⭐

# 📑 Índice 

- [📄 07 - Encryption ⭐⭐](#-07---encryption-)
- [📑 Índice](#-índice)
  - [🔐 Encryption](#-encryption)
  - [💾 Encryption at Rest](#-encryption-at-rest)
  - [🌐 Encryption in Transit](#-encryption-in-transit)
  - [🔒 TLS / HTTPS](#-tls--https)
  - [🗄️ Database Encryption](#️-database-encryption)
  - [🔐 Encrypted Connections](#-encrypted-connections)
- [🔄 Encryption vs Hashing](#-encryption-vs-hashing)
  - [🔑 Password Hashing](#-password-hashing)
    - [❌ Incorrecto](#-incorrecto)
    - [✅ Correcto](#-correcto)
  - [🔐 Secrets vs Encrypted Data](#-secrets-vs-encrypted-data)
    - [Secret](#secret)
    - [Encrypted Data](#encrypted-data)
  - [🧩 Password Hashing vs Encryption](#-password-hashing-vs-encryption)
  - [🛠️ Herramientas](#️-herramientas)
    - [🔥 Concepto fundamental](#-concepto-fundamental)

## 🔐 Encryption

La **encryption (cifrado)** transforma información legible en información que no puede entenderse directamente sin la clave correspondiente.

Conceptualmente:

```text
Plaintext
   ↓
Encryption + Key
   ↓
Ciphertext
```

Y posteriormente:

```text
Ciphertext
   ↓
Decryption + Key
   ↓
Plaintext
```

La característica fundamental es:

> **La información cifrada está diseñada para poder recuperarse mediante una clave.**

---

## 💾 Encryption at Rest

**Encryption at rest** protege los datos mientras están almacenados.

Por ejemplo:

```text
Database
   ↓
Stored Data
   ↓
Encryption at Rest
```

Puede proteger información almacenada en:

* Databases.
* Discos.
* Backups.
* Storage.

El objetivo es reducir el impacto si alguien obtiene acceso físico o lógico al almacenamiento.

---

## 🌐 Encryption in Transit

**Encryption in transit** protege los datos mientras viajan entre sistemas.

Por ejemplo:

```text
Frontend
   ↓
🔐 Encrypted Connection
   ↓
Backend
```

O:

```text
Backend
   ↓
🔐 Encrypted Connection
   ↓
Database
```

---

## 🔒 TLS / HTTPS

**TLS (Transport Layer Security)** permite establecer conexiones seguras entre sistemas.

Cuando utilizas:

```text
HTTPS
```

la comunicación HTTP se realiza sobre una conexión protegida mediante TLS.

Conceptualmente:

```text
Client
   ↓
TLS
   ↓
HTTPS
   ↓
Server
```

Esto ayuda a proteger los datos durante el tránsito.

---

## 🗄️ Database Encryption

Una database puede utilizar mecanismos de cifrado para proteger información almacenada.

Conceptualmente:

```text
Application
    ↓
Database
    ↓
Encrypted Storage
```

El objetivo es proteger los datos **at rest**.

---

## 🔐 Encrypted Connections

También puedes proteger la conexión entre el backend y la database.

```text
Backend
   ↓
🔐 TLS / Encrypted Connection
   ↓
Database
```

Esto protege la información mientras viaja entre ambos sistemas.

---

# 🔄 Encryption vs Hashing

Esta es una de las diferencias más importantes.

| 🔐 Encryption                                                         | #️⃣ Hashing                                                  |
| --------------------------------------------------------------------- | ------------------------------------------------------------ |
| Data → Encryption → Encrypted Data → Decryption → Original Data       | Data → Hash Function → Hash                                  |
| La información puede recuperarse utilizando la clave correspondiente. | El hashing no está diseñado para recuperar el dato original. |

Por eso:

> **Encryption es reversible mediante una clave; hashing no está diseñado para ser reversible.**

---

## 🔑 Password Hashing

Las contraseñas de los usuarios **no deberían almacenarse como texto plano**.

### ❌ Incorrecto

```text
Password
   ↓
Database

password123
```

Si la database es comprometida, las contraseñas quedarían expuestas directamente.

### ✅ Correcto

```text
Password
   ↓
Password Hashing
   ↓
Database
```

La database almacena el hash, no la contraseña original.

Cuando el usuario inicia sesión:

```text
Password
   ↓
Hash Verification
   ↓
Stored Hash
   ↓
Match / No Match
```

---

## 🔐 Secrets vs Encrypted Data

No son exactamente lo mismo.

| Concepto           | Definición                                                              |
| ------------------ | ----------------------------------------------------------------------- |
| **Secret**         | Un **secret** es información que debe mantenerse confidencial.          |
| **Encrypted Data** | Son datos que han sido transformados mediante cifrado para protegerlos. |

### Secret

Ejemplos:

```text
DATABASE_PASSWORD
JWT_SECRET
API_KEY
```

### Encrypted Data

```text
Sensitive Data
      ↓
Encryption
      ↓
Encrypted Data
```

Un secret puede utilizarse como parte del mecanismo que protege otros datos, pero **secret y encrypted data no son sinónimos**.

---

## 🧩 Password Hashing vs Encryption

Las contraseñas normalmente deben utilizar **hashing**, no encryption.

```text
Password
   ↓
Hashing
   ↓
Stored Hash
```

No:

```text
Password
   ↓
Encryption
   ↓
Stored Encrypted Password
```

Porque la aplicación no necesita recuperar la contraseña original; necesita comprobar si la contraseña proporcionada coincide con la almacenada.

---

## 🛠️ Herramientas

Posteriormente puedes estudiar algoritmos/herramientas utilizados para password hashing, como:

```text
bcrypt
Argon2
```

Pero en este documento lo fundamental es comprender:

```text
Encryption
    ↓
Puede descifrarse

Hashing
    ↓
No está diseñado para recuperarse
```

### 🔥 Concepto fundamental

> **Cifra los datos cuando necesitas protegerlos y recuperarlos; utiliza hashing para información que no necesitas recuperar, como las contraseñas.**
