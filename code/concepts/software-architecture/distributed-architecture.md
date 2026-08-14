## 📚 ÍNDICE — CLIENT-SERVER

- [🌐 4. CLIENT-SERVER](#-4-client-server)
  - [💻 Client](#-client)
  - [🖥️ Server](#️-server)
  - [🔥 Ejemplo de tu stack](#-ejemplo-de-tu-stack)


# 🌐 4. CLIENT-SERVER

La arquitectura **cliente-servidor** divide el sistema principalmente en:

```text id="r9d2x4"
Client
   │
   │ Request
   ▼
Server
   │
   │ Response
   ▼
Client
```

| 🧩 Parte       | 🎯 Responsabilidad                       |
| -------------- | ---------------------------------------- |
| 💻 **Client**  | Consume servicios y realiza requests     |
| 🖥️ **Server** | Proporciona servicios y procesa requests |

---

## 💻 Client

Puede ser:

* 🌐 navegador
* 📱 aplicación móvil
* 🖥️ aplicación desktop
* 🅰️ frontend Angular
* ⚛️ frontend React

---

## 🖥️ Server

Puede encargarse de:

* 🧠 lógica de negocio
* 🔐 autenticación
* 🗄️ acceso a datos
* 🔌 APIs

---

## 🔥 Ejemplo de tu stack

```text id="y2h5xw"
Angular
   │
   │ HTTP
   ▼
Express
   │
   ▼
PostgreSQL
```

Aquí:

```text id="l3m2eu"
Angular = Client

Express = Server
```

> 📌 **IDEA PRINCIPAL**
>
> **Client-Server = separar consumidores de servicios y proveedores de servicios.**

---

> 💡 **TIP**
>
> En este modelo, el **Client solicita** y el **Server responde**. La comunicación suele realizarse mediante protocolos como **HTTP/HTTPS**.
