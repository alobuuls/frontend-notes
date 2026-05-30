// 1️⃣2️⃣ La prueba definitiva
let students = [
  { name: 'Ana', score: 10 },
  { name: 'Luis', score: 20 },
  { name: 'Felipe', score: 30 },
  { name: 'Rodrigo', score: 2 },
  { name: 'Gabriela', score: 1 },
  { name: 'Vannessa', score: 10 },
  { name: 'Alex', score: 7 },
  { name: 'Rodrigo', score: 1 },
  { name: 'Sofia', score: 0 }
];

// estudiantes aprobados
const approvedStudents = students.filter(student => student.score > 6);

// nombres de aprobados
export const approvedNames = approvedStudents.map(student => student.name);

// cantidad de aprobados
const approvedCount = approvedStudents.length;

// promedio de nota
const average = students.map(student => student.score)
  .reduce((before, now) => before + now, 0) / students.length;

export const getApprovedStudents = approvedNamesParam => {
  if (!approvedNames.length) {
    return '😥 Nadie aprovó';
  }

  let transfromTxtFromArr = approvedNamesParam.join(', ');
  
  return approvedNamesParam.length === 1
  ? `El estudiante que ha aprobado es: ${transfromTxtFromArr}`
  : `Los estudiantes que han aprobado son: ${transfromTxtFromArr}`;
}

// resultados
console.log(`Cantidad de aprobados: ${approvedCount}`);
console.log(`Promedio de nota: ${average}`);

const ctnStu = document.getElementById('ctn-stu');
const ctnAStu = document.getElementById('list-a-stu');

const myStu = () => {

  students.forEach(stu => {
    const div = document.createElement('div');
    const nameStu = document.createElement('h1');
    const scoreStu = document.createElement('h1');
    const ctnList = document.createElement('li');
    const nameAStu = document.createElement('span');
    const scoreAStu = document.createElement('span');
    
    nameAStu.textContent = stu.name;
    scoreAStu.textContent = stu.score;
    nameStu.textContent = stu.name;
    scoreStu.textContent = stu.score;
    
    div.append(nameStu, scoreStu);
    ctnStu.append(div);
  
    ctnList.append(nameAStu, scoreAStu);
    ctnAStu.append(ctnList);
  });
}

myStu();

const greetings = ['hello', 'hallo', 'hola', 'konichiua', 'sawadikap', 'ciao'];

const generateRandomGreeting = () => {
  const txtRandom = Math.floor(Math.random() * greetings.length);
  return greetings[txtRandom];
}

export const intervalGreetings = setInterval(() => {
  console.log(generateRandomGreeting());
}, 1000);

setTimeout( () => {
  clearInterval(intervalGreetings);
}, 5000);