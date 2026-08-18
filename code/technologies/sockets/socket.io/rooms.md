# 📄 04 — Rooms 🚪

## 🎯 Objetivo

> 💡 **Aprender cómo agrupar clientes dentro de grupos lógicos.**

> ❓ **Pregunta:**
>
> **¿Cómo envío mensajes solamente a ciertos usuarios?**

---

## 📚 Contenido

| #   | Tema                  |
| --- | --------------------- |
| 1️⃣ | What are Rooms?       |
| 2️⃣ | Joining Rooms         |
| 3️⃣ | Leaving Rooms         |
| 4️⃣ | Room Management       |
| 5️⃣ | Private Rooms         |
| 6️⃣ | Chat Rooms            |
| 7️⃣ | User Groups           |
| 8️⃣ | Broadcasting to Rooms |
| 9️⃣ | Room Lifecycle        |

---

# 1️⃣ What are Rooms? 🚪

Una room es un grupo de sockets:

```text id="room"
Room: gaming


User A
User B
User C
```

> 💡 Una **Room** permite agrupar sockets dentro de un grupo lógico.

---

# 2️⃣ Joining Rooms ➕

Los sockets pueden unirse a una room.

### 🔌 Join

```javascript
socket.join(
  "game-room"
);
```

---

# 3️⃣ Leaving Rooms 🚪

Los sockets pueden salir de una room.

> 💡 **Leaving Rooms**

---

# 4️⃣ Room Management ⚙️

Las rooms permiten administrar la pertenencia de los sockets a diferentes grupos.

| Concepto      |                        |
| ------------- | ---------------------- |
| 🚪 Room       | Grupo de sockets       |
| 👥 Group      | Grupo lógico           |
| 🧩 Membership | Pertenencia a una room |

---

# 5️⃣ Private Rooms 🔒

Las rooms pueden utilizarse para crear grupos privados.

> 💡 **Private Rooms**

---

# 6️⃣ Chat Rooms 💬

Las rooms pueden utilizarse para organizar diferentes conversaciones.

### Ejemplo

```text id="chatrooms"
Room #frontend


User A
User B
User C


Room #backend


User D
User E
```

---

# 7️⃣ User Groups 👥

Las rooms permiten agrupar usuarios.

```text
Room

↓

User Group

↓

Users
```

---

# 8️⃣ Broadcasting to Rooms 📢

Se pueden emitir mensajes solamente a los sockets de una room.

### 📤 Emitir

```javascript
io.to(
  "game-room"
)
.emit(
  "message",
  data
);
```

> 🎯 Permite enviar mensajes solamente a ciertos usuarios.

---

# 9️⃣ Room Lifecycle 🔄

Una room administra el ciclo de pertenencia de los sockets.

```text
Join Room

   ↓

Membership

   ↓

Broadcasting

   ↓

Leave Room
```

---

# 🧠 Conceptos principales

| Concepto                 | Significado        |
| ------------------------ | ------------------ |
| 🚪 **Room**              | Grupo de sockets   |
| 👥 **Group**             | Grupo              |
| 🧩 **Membership**        | Pertenencia        |
| 📢 **Broadcasting**      | Envío de mensajes  |
| 🎯 **Targeted Messages** | Mensajes dirigidos |

---

> 💡 **Concepto:**
>
> Una room es un grupo de sockets.

```text
Room: gaming


User A
User B
User C
```
