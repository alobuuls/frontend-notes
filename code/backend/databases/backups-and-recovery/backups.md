# 📄 01 - Backups ⭐⭐⭐

# 📑 Índice

- [� 01 - Backups ⭐⭐⭐](#-01---backups-)
- [📑 Índice](#-índice)
  - [💾 ¿Qué es un Backup?](#-qué-es-un-backup)
  - [❓ ¿Por qué son necesarios?](#-por-qué-son-necesarios)
  - [🗄️ Backup vs Database](#️-backup-vs-database)
  - [📦 ¿Qué información se respalda?](#-qué-información-se-respalda)
- [🟢 Full Backup](#-full-backup)
- [🟡 Incremental Backup](#-incremental-backup)
- [🔵 Differential Backup](#-differential-backup)
- [🤖 Backup Automático vs Manual](#-backup-automático-vs-manual)
    - [Manual](#manual)
    - [Automático](#automático)
- [⏰ Frecuencia de Backups](#-frecuencia-de-backups)
- [🗃️ Retention](#️-retention)
- [☁️ ¿Dónde almacenar backups?](#️-dónde-almacenar-backups)
- [💻 Backup Local vs Remoto](#-backup-local-vs-remoto)
    - [Local](#local)
    - [Remoto](#remoto)
- [🚀 Backup de Producción](#-backup-de-producción)
- [⚠️ Riesgo de depender de un solo Backup](#️-riesgo-de-depender-de-un-solo-backup)
- [🔄 Backup ≠ Recovery](#-backup--recovery)
## 💾 ¿Qué es un Backup?

Un **backup** es una copia de los datos de una database que se almacena separadamente para poder recuperarlos en caso de pérdida, corrupción o fallo.

```text
Database
   ↓
Backup
   ↓
Storage seguro
```

---

## ❓ ¿Por qué son necesarios?

Los backups permiten recuperar información ante situaciones como:

* Fallos de hardware.
* Eliminación accidental de datos.
* Corrupción de datos.
* Errores humanos.
* Ataques o incidentes de seguridad.
* Fallos de infraestructura.
* Problemas durante operaciones de mantenimiento.

La idea es:

```text
Database
   ↓
❌ Problema
   ↓
Backup
   ↓
Recuperación
```

---

## 🗄️ Backup vs Database

Una **database** es el sistema donde la aplicación trabaja con los datos.

Un **backup** es una copia independiente utilizada para recuperación.

```text
Database
   ↓
Datos actuales

Backup
   ↓
Copia para recuperación
```

> El backup **no reemplaza a la database**.

---

## 📦 ¿Qué información se respalda?

Dependiendo de la estrategia, un backup puede incluir:

* Datos de las tablas.
* Estructura de la database.
* Schemas.
* Índices.
* Constraints.
* Otros objetos necesarios para reconstruir la database.

El objetivo es que la copia contenga lo necesario para poder realizar un **restore**.

---

# 🟢 Full Backup

Un **full backup** realiza una copia completa de los datos seleccionados.

```text
Database
   ↓
Full Backup
   ↓
Todos los datos respaldados
```

| Ventaja                              | Desventaja                       |
| ------------------------------------ | -------------------------------- |
| Restauración relativamente sencilla. | Puede requerir bastante espacio. |
|                                      | Puede tardar más en realizarse.  |

---

# 🟡 Incremental Backup

Un **incremental backup** guarda únicamente los cambios realizados desde el backup anterior.

```text
Full Backup
    ↓
Incremental 1
    ↓
Incremental 2
    ↓
Incremental 3
```

Cada incremental depende de los backups anteriores necesarios para reconstruir el estado.

| Ventaja                             | Desventaja                              |
| ----------------------------------- | --------------------------------------- |
| Menor cantidad de datos por backup. | La restauración puede ser más compleja. |

---

# 🔵 Differential Backup

Un **differential backup** guarda los cambios realizados desde el último **full backup**.

```text
Full Backup
    ↓
Differential 1
    ↓
Differential 2
    ↓
Differential 3
```

Cada differential representa los cambios acumulados desde el full backup.

---

# 🤖 Backup Automático vs Manual

### Manual

Un administrador ejecuta el backup explícitamente.

```text
Developer / Admin
       ↓
Backup
       ↓
Storage
```

### Automático

El sistema realiza backups siguiendo una programación.

```text
Schedule
   ↓
Automatic Backup
   ↓
Storage
```

En producción, los backups automáticos suelen ser preferibles porque reducen la dependencia de acciones manuales.

---

# ⏰ Frecuencia de Backups

La frecuencia determina cuánto tiempo puede transcurrir entre backups.

Por ejemplo:

```text
Cada hora
Cada 6 horas
Cada día
Cada semana
```

Una mayor frecuencia puede reducir la cantidad de datos que podrían perderse entre backups.

La frecuencia debe depender de cuánto **data loss** puede tolerar el sistema.

---

# 🗃️ Retention

**Retention** define cuánto tiempo se conservan los backups.

Por ejemplo:

```text
Daily Backup
    ↓
30 days
```

Después de ese período, los backups pueden eliminarse según la política establecida.

La retención debe equilibrar:

```text
Necesidad de recuperación
        +
Storage disponible
```

---

# ☁️ ¿Dónde almacenar backups?

Los backups deben almacenarse de manera segura y preferiblemente separados de la infraestructura principal.

Por ejemplo:

```text
Database
   ↓
Backup
   ↓
Remote Storage
```

El almacenamiento puede ser:

* Local.
* Remoto.
* Cloud storage.
* Infraestructura independiente.

---

# 💻 Backup Local vs Remoto

### Local

El backup se encuentra en la misma infraestructura o ubicación.

```text
Database
   ↓
Local Backup
```

Es fácil de acceder, pero puede existir un riesgo importante si ocurre un fallo que afecta tanto a la database como al backup.

### Remoto

El backup se almacena en otra ubicación.

```text
Database
   ↓
Remote Backup
```

Esto proporciona mayor protección frente a ciertos tipos de fallos.

---

# 🚀 Backup de Producción

Las databases de producción contienen información real y crítica.

Por eso deben contar con una estrategia de backup adecuada:

```text
Production Database
        ↓
    Backup Strategy
        ↓
Secure Storage
```

No deberías depender únicamente de backups realizados manualmente cuando el sistema es importante.

---

# ⚠️ Riesgo de depender de un solo Backup

Tener únicamente una copia también es un riesgo.

```text
Database
   ↓
Backup
   ↓
❌ Backup corrupto
```

Si ese era el único backup disponible, podrías no tener una forma confiable de recuperar los datos.

Por eso es importante mantener **múltiples backups** y, cuando sea posible, almacenarlos de forma independiente.

---

# 🔄 Backup ≠ Recovery

🔥 Este es uno de los conceptos más importantes.

Tener un backup:

```text
❌ Backup
```

no significa necesariamente:

```text
✅ Recovery
```

Porque todavía necesitas poder **restaurar** la database correctamente.

El proceso completo es:

```text
Database
   ↓
Backup
   ↓
Storage
   ↓
Restore
   ↓
Recovered Database
```

Por eso los backups deben **probarse mediante procesos de restore**.

> ### 🧠 Concepto fundamental
>
> **Un backup solo es realmente útil si puedes utilizarlo para recuperar los datos cuando los necesitas.**
