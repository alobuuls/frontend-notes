const studentsTwo = [
  { name: "Ana", grade: 8 },
  { name: "Luis", grade: 1 },
  { name: "Sofia", grade: 10 },
  { name: "Pedro", grade: 8 }
];

export const approvedStudentsTwo = () => {
  return studentsTwo.filter(student => student.grade >= 6);
}
// Verifica si todos aprobaron usando Every

export const didAllStudentsApproved = () => {
  return studentsTwo.every(student => student.grade >= 6);
}

// Verifica si todos aprobaron usando Filter

const didAllStudentsApprovedWithFilter = () => {
  const qtyStudentsPassed = studentsTwo.filter(student => student.grade >= 6);  
  return qtyStudentsPassed.length === studentsTwo.length;
}

export const failedStudents = () => {
  return studentsTwo.find(student => student.grade < 6);
}

const msgStudent = () => {
  studentsTwo.forEach(student => {
    if (student.grade >= 6 ) {
      console.log(student.name + ' aprobo');
      return;
    }
    console.log(student.name + ' reprobo');
  });
}

msgStudent()


