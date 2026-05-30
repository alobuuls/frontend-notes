// 5️⃣ Perfil dinámico
const person = {
  name : 'Cristian',
  age: '26',
  profession: 'Programador'
};

export const showMsg = profession => {
  if (person.profession === profession) {
    return `${person.name} es ${person.profession} y tiene ${person.age} años`;
  }
  return `La profesion de ${profession} no está registrada`;
}