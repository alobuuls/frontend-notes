interface User {
  name: string;
  age: number;
  rol: 'admin' | 'user'| 'guest';
  email?: string;
  phoneNumber?: number;
}

type rol = 'admin' | 'user'| 'guest' | 'all';

let users: User [] = [
  {name: 'Aris', age: 24, rol: 'user', email: 'sara23@gmail.com'},
  {name: 'Gael', age: 23, rol: 'user', phoneNumber: 1234567890},
  {name: 'Luis', age: 23, rol: 'admin', phoneNumber: 3214569871, email: 'luis23@gmail.com'},
  {name: 'Arely', age: 22, rol: 'guest', email: 'arely22@gmail.com'},
];

let newUser: User = {
  name: 'Sofia',
  age: 26,
  rol: 'user',
  phoneNumber: 987654321 
}

const addUser = (newUser: User) : string => {
  const doesItExist = users.some(u => u.name === newUser.name);
  if (doesItExist) return `El nombre de usuario ${newUser.name} ya existe, por favor cambialo`;
  users.push(newUser);
  return `Usuario ${newUser.name} agregado con éxito`;
}

// Agregar Usuario
console.log(addUser(newUser));

const editUser = (nombre: string, cambios: Partial<User>): string => {
  const findUser = users.find(u => u.name === nombre);

  if (!findUser) return 'Usuario no encontrado';

  if (findUser.rol === 'admin') {
    if (cambios.age !== undefined) findUser.age = cambios.age;
    if (cambios.phoneNumber !== undefined) findUser.phoneNumber = cambios.phoneNumber;
    return `Admin ${findUser.name} actualizado`;
  }

  if (findUser.rol === 'guest') {
    if (cambios.name !== undefined) findUser.name = cambios.name;
    if (cambios.email !== undefined) findUser.email = cambios.email;
    return `Guest ${findUser.name} actualizado`;
  }

  Object.assign(findUser, cambios);
  return `Usuario ${findUser.name} actualizado con éxito`;
}

// Cambiar teléfono de un usuario 'admin'
console.log(editUser('Luis', { phoneNumber: 55555555 }));

// Cambiar nombre y email de un 'guest'
console.log(editUser('Arely', { name: 'Arely M.', email: 'arelyM@gmail.com' }));

// Cambiar edad y rol de un 'user'
console.log(editUser('Gael', { age: 28, rol: 'admin' }));

// Intentar actualizar un usuario que no existe
console.log(editUser('NoExiste', { name: 'Alguien' }));

const deleteUser = (nombre: string) : string => {
  const findUser = users.find(u => u.name === nombre);
  if (!findUser) return `Usuario no encontrado`;
  users = users.filter(u => u.name !== nombre);
  return `El usuario ${findUser.name} ha sido eliminado`
}

const userList = (rolName: rol) => {
  if (rolName === 'all') return users;
  return users.filter(u => u.rol === rolName);
}

console.log('all', userList('all'));
console.log('admin', userList('admin'));
console.log('guest', userList('guest'));