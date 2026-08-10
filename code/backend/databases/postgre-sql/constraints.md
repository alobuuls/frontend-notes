# 📄 05 - PostgreSQL Constraints

Las **constraints** son reglas que PostgreSQL utiliza para controlar qué datos pueden almacenarse y proteger la **integridad de los datos**.

---

## 📑 Índice

- [� 05 - PostgreSQL Constraints](#-05---postgresql-constraints)
  - [📑 Índice](#-índice)
  - [🔑 1️⃣ PRIMARY KEY](#-1️⃣-primary-key)
  - [🔗 2️⃣ FOREIGN KEY](#-2️⃣-foreign-key)
  - [🆔 3️⃣ UNIQUE](#-3️⃣-unique)
  - [🚫 4️⃣ NOT NULL](#-4️⃣-not-null)
  - [✅ 5️⃣ CHECK](#-5️⃣-check)
  - [⚙️ 6️⃣ DEFAULT](#️-6️⃣-default)
- [🚧 7️⃣ Exclusion Constraints](#-7️⃣-exclusion-constraints)
- [🔐 Constraint Hierarchy](#-constraint-hierarchy)
- [🔗 Foreign Key Constraints](#-foreign-key-constraints)

## 🔑 1️⃣ PRIMARY KEY

Una `PRIMARY KEY` identifica de manera única cada registro de una tabla.

```sql
id INTEGER PRIMARY KEY
```

Una Primary Key:

| Regla                  |    |
| ---------------------- | -- |
| Identifica un registro | ✔️ |
| Debe ser única         | ✔️ |
| No puede ser NULL      | ✔️ |

---

## 🔗 2️⃣ FOREIGN KEY

Una `FOREIGN KEY` conecta una tabla con otra y mantiene la **integridad referencial**.

```sql
user_id INTEGER REFERENCES users(id)
```

Por ejemplo:

```text
users
-----
id

orders
------
id
user_id → users.id
```

La Foreign Key evita que exista una referencia a un registro que no existe.

---

## 🆔 3️⃣ UNIQUE

`UNIQUE` garantiza que los valores de una columna no se repitan.

```sql
email TEXT UNIQUE
```

Por ejemplo:

```text
email
-----
ana@mail.com
luis@mail.com
ana@mail.com ❌
```

El tercer registro sería rechazado porque el email ya existe.

---

## 🚫 4️⃣ NOT NULL

`NOT NULL` obliga a que una columna tenga un valor.

```sql
name TEXT NOT NULL
```

Esto no está permitido:

```text
name = NULL ❌
```

Por ejemplo:

```sql
email TEXT UNIQUE NOT NULL
```

significa que:

```text
email
├── debe tener un valor
└── debe ser único
```

---

## ✅ 5️⃣ CHECK

`CHECK` permite establecer una condición que los valores deben cumplir.

Por ejemplo:

```sql
age INTEGER CHECK (age >= 18)
```

Esto permite:

```text
18
25
30
```

Pero no:

```text
17 ❌
```

Otro ejemplo:

```sql
price NUMERIC CHECK (price >= 0)
```

La database rechazará valores que no cumplan la condición.

---

## ⚙️ 6️⃣ DEFAULT

`DEFAULT` establece un valor automáticamente cuando no se proporciona uno.

Por ejemplo:

```sql
is_active BOOLEAN DEFAULT TRUE
```

Si no especificas `is_active`, PostgreSQL utilizará:

```text
TRUE
```

Otro ejemplo:

```sql
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
```

---

# 🚧 7️⃣ Exclusion Constraints

Las **Exclusion Constraints** permiten establecer reglas para evitar que determinadas combinaciones de valores entren en conflicto.

Son especialmente útiles cuando necesitas evitar **solapamientos o conflictos entre registros**.

Por ejemplo, pueden utilizarse para evitar que dos reservas ocupen el mismo recurso durante períodos de tiempo que se superponen.

---

# 🔐 Constraint Hierarchy

La integridad de los datos no depende únicamente del backend.

Existe una combinación de:

```text
Application Validation
        +
Database Constraints
        ↓
Data Integrity
```

El backend puede validar los datos antes de enviarlos:

```text
Frontend
   ↓
Backend Validation
   ↓
Database
```

Pero PostgreSQL también debe proteger los datos:

```text
Backend
   ↓
❌ Bug / invalid data
   ↓
Database Constraint
   ↓
🛡️ Data Integrity
```

Por eso las constraints funcionan como una **segunda capa de protección**.

---

# 🔗 Foreign Key Constraints

Las Foreign Keys conectan directamente:

```text
Constraints
      ↓
Relationships
      ↓
Referential Integrity
```

Por ejemplo:

```sql
user_id INTEGER REFERENCES users(id)
```

establece una relación entre:

```text
orders.user_id
       ↓
users.id
```

La Foreign Key garantiza que la relación entre ambas tablas respete las reglas de integridad referencial.
