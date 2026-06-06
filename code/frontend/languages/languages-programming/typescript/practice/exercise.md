# 🎯 Sistema de Gestión de Usuarios (TypeScript)

## 1️⃣ Definir el tipo de usuario

Crea un `interface` o `type` para representar un usuario.

Debe incluir:

- `id`
- `name`
- `age`
- `role` (`admin`, `user` o `guest`)

### Opcional

Agrega propiedades opcionales como:

- `email`
- `phone`

---

## 2️⃣ Crear el registro de usuarios

Crea un array para almacenar todos los usuarios.

### Requisito

✅ El array debe estar tipado usando el tipo o interfaz creada anteriormente.

---

## 3️⃣ Funciones para gestionar usuarios

### Agregar usuario

Crea una función que:

- Reciba los datos de un usuario
- Lo agregue al registro

### Validaciones

✅ Verifica que no exista otro usuario con el mismo `id` o nombre.

---

### Actualizar usuario

Crea una función que permita:

- Cambiar edad
- Cambiar rol
- Modificar otras propiedades

### Extra

Usa **type narrowing** para aplicar lógica según el rol:

- `admin`
- `user`
- `guest`

---

### Eliminar usuario

Crea una función que:

- Reciba un criterio (`id` o nombre)
- Elimine el usuario correspondiente

---

### Listar usuarios

Crea una función que:

- Muestre todos los usuarios
- Permita filtrar por rol

Usa un **union type**:

```ts
type UserFilter = 'all' | 'admin' | 'user' | 'guest';
```

---

## 4️⃣ Subtipos e herencia

Crea un tipo o interfaz `Employee` que extienda de `User`.

Debe incluir además:

- `salary`
- `department`

### Objetivo

Practicar:

- `extends`
- Herencia de interfaces
- Subtipos en TypeScript

---

## 5️⃣ Validaciones y lógica

Asegúrate de que:

✅ La edad sea un número válido

✅ El rol sea uno de los permitidos

✅ No existan usuarios duplicados

✅ Los datos sean validados antes de agregarlos al registro

### Sugerencia

Utiliza:

- Type narrowing
- Union types
- Type guards (opcional)

---

## 🏆 BONUS

Implementa funcionalidades adicionales:

- Buscar usuario por ID
- Buscar usuario por nombre
- Ordenar usuarios por edad
- Contar usuarios por rol
- Mostrar estadísticas del sistema

Ejemplo:

```ts
{
  totalUsers: 10,
  admins: 2,
  users: 6,
  guests: 2
}
```

### Conceptos que practicarás

- Interfaces
- Types
- Union Types
- Optional Properties
- Arrays tipados
- Funciones tipadas
- Type Narrowing
- Extends
- Validaciones
- Manipulación de datos
