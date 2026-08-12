# 📄 02 - Emulator Suite

> 🔥🔥 **Este es un tema muy importante para desarrollo y testing con Firebase.**

## 📑 Índice

- [📄 02 - Emulator Suite](#-02---emulator-suite)
  - [📑 Índice](#-índice)
  - [🧠 ¿Qué es Firebase Emulator Suite?](#-qué-es-firebase-emulator-suite)
  - [🎯 ¿Qué problema resuelve?](#-qué-problema-resuelve)
  - [🧩 ¿Qué servicios puede emular?](#-qué-servicios-puede-emular)
  - [🖥️ Emulator UI](#️-emulator-ui)
  - [🔌 Aplicación → Emulator](#-aplicación--emulator)
  - [🧪 Testing](#-testing)
  - [🔐 Testing de Security Rules](#-testing-de-security-rules)
  - [🔄 Production vs Emulator](#-production-vs-emulator)
    - [DEVELOPMENT](#development)
    - [PRODUCTION](#production)
  - [⚠️ Emulator ≠ Firebase Production](#️-emulator--firebase-production)
  - [🔥 Flujo completo](#-flujo-completo)
  - [🧠 ¿Por qué es importante?](#-por-qué-es-importante)
  - [⭐ Lo que debes recordar](#-lo-que-debes-recordar)

## 🧠 ¿Qué es Firebase Emulator Suite?

**Firebase Emulator Suite** es un conjunto de emuladores que permite ejecutar servicios de Firebase en tu máquina local.

En lugar de que tu aplicación se comunique directamente con Firebase:

```text
Angular
   ↓
Firebase Production
```

puedes trabajar:

```text
Angular
   ↓
Firebase Emulator Suite
   ↓
Local Firebase Services
```

Esto crea un entorno controlado para desarrollar y probar funcionalidades.

---

## 🎯 ¿Qué problema resuelve?

El principal problema es evitar que durante el desarrollo puedas:

* modificar datos reales
* crear usuarios reales
* ejecutar Functions reales
* subir archivos reales
* probar reglas directamente en producción
* generar costos innecesarios

Por ejemplo:

```text
❌ Desarrollo
   ↓
Firebase Production
   ↓
Datos reales
```

Con Emulator Suite:

```text
✅ Desarrollo
   ↓
Firebase Emulator
   ↓
Datos locales
```

---

## 🧩 ¿Qué servicios puede emular?

Emulator Suite puede proporcionar entornos locales para servicios como:

```text
Firebase Emulator Suite
│
├── 🔐 Authentication
├── 🗄️ Firestore
├── 🗃️ Realtime Database
├── 📁 Storage
└── ⚙️ Cloud Functions
```

No necesitas volver a estudiar aquí cómo funciona cada servicio.

> **La idea importante es:** el emulador reproduce localmente el comportamiento necesario del servicio para poder desarrollar y probar sin utilizar producción.

---

## 🖥️ Emulator UI

Firebase Emulator Suite también proporciona una interfaz web para visualizar y administrar lo que ocurre en los emuladores.

Conceptualmente:

```text
Firebase Emulator Suite
        ↓
   Emulator UI
        ↓
┌────────┼─────────┐
▼        ▼         ▼
Users    Data     Functions
```

Dependiendo de los emuladores utilizados, puedes inspeccionar información como:

* usuarios
* documentos
* datos
* requests
* logs
* ejecuciones de Functions

Esto resulta especialmente útil durante el desarrollo.

---

## 🔌 Aplicación → Emulator

Tu aplicación debe estar configurada para utilizar los servicios locales en lugar de los servicios de producción.

Conceptualmente:

```text
Angular
   ↓
Firebase SDK
   ↓
¿Entorno local?
│
├── Sí → Emulator
│
└── No → Firebase Production
```

Por eso normalmente tendrás una diferencia entre entornos:

```text
Development
    ↓
Firebase Emulator Suite
```

y:

```text
Production
    ↓
Firebase
```

---

## 🧪 Testing

Uno de los usos más importantes de Emulator Suite es probar comportamientos antes de llevarlos a producción.

Por ejemplo:

```text
Test
 ↓
Create User
 ↓
Auth Emulator
 ↓
Create Firestore Document
 ↓
Firestore Emulator
 ↓
Trigger Function
 ↓
Functions Emulator
```

Todo puede ocurrir localmente.

Esto permite probar diferentes escenarios sin afectar datos reales.

---

## 🔐 Testing de Security Rules

Los emuladores también son especialmente útiles para probar Security Rules.

Por ejemplo:

```text
Request
   ↓
Firestore Emulator
   ↓
Security Rules
   ↓
ALLOW / DENY
```

Puedes probar:

```text
Usuario autenticado
       ↓
¿Puede acceder?
       ↓
Security Rules
```

y también casos negativos:

```text
Usuario no autorizado
       ↓
Request
       ↓
Security Rules
       ↓
❌ DENY
```

Esto es mucho más seguro que experimentar directamente contra una base de producción.

---

## 🔄 Production vs Emulator

Debes tener muy clara esta diferencia:

### DEVELOPMENT

```text
Angular
   ↓
Firebase Emulator Suite
   ↓
Local Firebase Services
```

### PRODUCTION

```text
Angular
   ↓
Firebase
   ↓
Real Firebase Services
```

El objetivo es que durante el desarrollo puedas trabajar con datos y servicios locales.

---

## ⚠️ Emulator ≠ Firebase Production

Un emulador no es tu proyecto de Firebase en producción.

Es un entorno local que reproduce determinadas funcionalidades de Firebase para desarrollo y testing.

Por eso:

```text
Emulator
   ↓
Local
   ↓
Development / Testing
```

mientras que:

```text
Firebase
   ↓
Cloud
   ↓
Production
```

---

## 🔥 Flujo completo

Un flujo típico de desarrollo puede verse así:

```text
Developer
   ↓
Angular
   ↓
Firebase SDK
   ↓
Firebase Emulator Suite
│
├── Authentication
├── Firestore
├── Storage
└── Functions
   ↓
Local Testing
```

Y cuando todo funciona correctamente:

```text
Development
   ↓
Testing
   ↓
Production Deployment
   ↓
Firebase
```

---

## 🧠 ¿Por qué es importante?

Porque te permite separar claramente:

```text
DESARROLLO
   ↓
Emulators
   ↓
Datos de prueba
```

de:

```text
PRODUCCIÓN
   ↓
Firebase
   ↓
Datos reales
```

Esto reduce riesgos y facilita:

* desarrollo
* debugging
* testing
* pruebas de Security Rules
* pruebas de Functions
* pruebas de integración
* experimentación

---

## ⭐ Lo que debes recordar

Firebase Emulator Suite permite ejecutar servicios de Firebase localmente para desarrollar y probar aplicaciones sin depender directamente de Firebase Production.

La idea fundamental:

```text
Firebase Emulator Suite
   ↓
Local Firebase Environment
   ↓
Development + Testing
   ↓
Sin afectar Production
```

Y la diferencia clave:

```text
Emulator
   ↓
Local / Testing
```

vs.

```text
Firebase
   ↓
Cloud / Production
```
