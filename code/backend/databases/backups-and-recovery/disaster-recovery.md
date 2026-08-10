# 📄 03 - Disaster Recovery ⭐⭐⭐

# 📑 Índice

- [� 03 - Disaster Recovery ⭐⭐⭐](#-03---disaster-recovery-)
- [📑 Índice](#-índice)
  - [🚨 ¿Qué es Disaster Recovery?](#-qué-es-disaster-recovery)
  - [💥 Database Failure](#-database-failure)
  - [🖥️ Server Failure](#️-server-failure)
  - [🔧 Hardware Failure](#-hardware-failure)
  - [💾 Data Corruption](#-data-corruption)
  - [🗑️ Accidental Deletion](#️-accidental-deletion)
  - [🛡️ Cyberattack](#️-cyberattack)
- [📋 Disaster Recovery Plan](#-disaster-recovery-plan)
- [🔄 Recovery Procedures](#-recovery-procedures)
- [🏗️ Redundancy](#️-redundancy)
- [🔁 Replication](#-replication)
- [🔀 Failover](#-failover)
- [🎯 RPO — Recovery Point Objective](#-rpo--recovery-point-objective)
    - [🟢 RPO bajo](#-rpo-bajo)
    - [🟠 RPO alto](#-rpo-alto)
- [⏱️ RTO — Recovery Time Objective](#️-rto--recovery-time-objective)
    - [🟢 RTO bajo](#-rto-bajo)
    - [🟠 RTO alto](#-rto-alto)
- [🧠 RPO vs RTO](#-rpo-vs-rto)

## 🚨 ¿Qué es Disaster Recovery?

**Disaster Recovery (DR)** es el conjunto de estrategias, procesos y procedimientos utilizados para **recuperar un sistema después de un desastre o fallo grave**.

No se trata únicamente de recuperar la database.

```text
Disaster
   ↓
Recovery Plan
   ↓
Recover Infrastructure
   ↓
Recover Database
   ↓
Recover Application
   ↓
System Online
```

La pregunta cambia de:

> ¿Cómo recupero mi database?

a:

> **¿Cómo recupero todo el sistema?**

---

## 💥 Database Failure

Ocurre cuando la database deja de funcionar correctamente.

Puede deberse a:

* Corrupción de datos.
* Fallos del servidor.
* Errores de configuración.
* Problemas de almacenamiento.
* Fallos del software.

El sistema debe tener mecanismos para recuperar la información y volver a operar.

---

## 🖥️ Server Failure

El servidor donde funciona la aplicación o la database puede dejar de estar disponible.

```text
Server
   ↓
❌ Failure
   ↓
Recovery
```

Por eso un sistema de producción no debería depender necesariamente de un único servidor.

---

## 🔧 Hardware Failure

Los componentes físicos pueden fallar:

* Discos.
* Memoria.
* CPU.
* Servidores.
* Storage.

Una estrategia de Disaster Recovery debe contemplar estos escenarios.

---

## 💾 Data Corruption

Los datos pueden quedar dañados o inconsistentes.

Por ejemplo:

```text
Database
   ↓
Data Corruption
   ↓
❌ Datos incorrectos
```

Los backups y mecanismos de recuperación permiten volver a un estado válido.

---

## 🗑️ Accidental Deletion

Un usuario o administrador puede eliminar información accidentalmente.

```text
User
 ↓
DELETE
 ↓
❌ Data Lost
 ↓
Backup
 ↓
Restore
```

---

## 🛡️ Cyberattack

Un ataque puede afectar:

* Aplicaciones.
* Servidores.
* Databases.
* Backups.
* Infraestructura.

Por eso Disaster Recovery también debe considerar escenarios de seguridad.

---

# 📋 Disaster Recovery Plan

Un **Disaster Recovery Plan** define qué hacer cuando ocurre un desastre.

Debe contemplar:

```text
Disaster
   ↓
Detection
   ↓
Response
   ↓
Recovery
   ↓
Verification
   ↓
System Restored
```

También debe definir:

* Qué sistemas deben recuperarse.
* En qué orden.
* Qué backups utilizar.
* Quién es responsable.
* Cómo realizar el restore.
* Cuánto tiempo debería tomar.
* Cuánta información se puede perder.

---

# 🔄 Recovery Procedures

Son los procedimientos concretos utilizados para recuperar el sistema.

Por ejemplo:

```text
1. Detectar fallo
2. Evaluar impacto
3. Activar recovery plan
4. Recuperar infraestructura
5. Restaurar database
6. Verificar datos
7. Recuperar aplicación
8. Verificar sistema
9. Volver a producción
```

---

# 🏗️ Redundancy

**Redundancy** significa tener componentes adicionales para evitar que un único fallo provoque la caída completa del sistema.

```text
Server A
   │
   ├── Primary
   │
Server B
   │
   └── Backup / Standby
```

Si un componente falla, otro puede asumir su función.

---

# 🔁 Replication

**Replication** consiste en mantener copias de los datos en diferentes sistemas o servidores.

Conceptualmente:

```text
Primary Database
       │
       ├────────→ Replica 1
       │
       └────────→ Replica 2
```

La replicación puede ayudar con:

* Disponibilidad.
* Recuperación.
* Redundancia.
* Distribución de datos.

⚠️ **Replication no es exactamente lo mismo que Backup.**

Una réplica puede reproducir también errores o eliminaciones que ocurran en la database principal.

---

# 🔀 Failover

**Failover** es el proceso mediante el cual el sistema cambia de un componente principal que falló hacia otro disponible.

```text
Primary
   ↓
❌ Failure
   ↓
Failover
   ↓
Secondary
   ↓
System continues
```

Por ejemplo:

```text
Primary Database
       ↓
      ❌
       ↓
   Failover
       ↓
Replica / Standby
```

---

# 🎯 RPO — Recovery Point Objective

**RPO** responde:

> **¿Cuánta información estoy dispuesto a perder?**

Por ejemplo:

```text
RPO = 1 hora
```

Significa que el objetivo permite una pérdida máxima aproximada de **1 hora de datos** en el peor escenario.

```text
Último backup
      │
      │ ← hasta 1 hora de datos
      │
   Disaster
```

### 🟢 RPO bajo

```text
RPO = 5 minutos
```

Se tolera muy poca pérdida de datos.

### 🟠 RPO alto

```text
RPO = 24 horas
```

Se puede tolerar una pérdida mayor de datos.

---

# ⏱️ RTO — Recovery Time Objective

**RTO** responde:

> **¿Cuánto tiempo puede estar el sistema fuera de servicio?**

Por ejemplo:

```text
RTO = 30 minutos
```

Significa que el objetivo es recuperar el servicio en aproximadamente **30 minutos o menos**.

```text
Failure
   ↓
Recovery
   ↓
30 min
   ↓
System Online
```

### 🟢 RTO bajo

```text
RTO = 5 minutos
```

La recuperación debe ser muy rápida.

### 🟠 RTO alto

```text
RTO = 24 horas
```

El sistema puede permanecer fuera de servicio durante más tiempo.

---

# 🧠 RPO vs RTO

La diferencia fundamental:

```text
RPO
 ↓
¿Cuántos datos puedo perder?
```

vs.

```text
RTO
 ↓
¿Cuánto tiempo puedo estar caído?
```

| Concepto | Pregunta                                      |
| :------- | :-------------------------------------------- |
| **RPO**  | ¿Cuántos datos puedo perder?                  |
| **RTO**  | ¿Cuánto tiempo puedo estar fuera de servicio? |

🔥 **RPO y RTO son fundamentales para diseñar una estrategia de Disaster Recovery.**
