//3️⃣ Clasificador de edades

// el parámetro se tiene que llamar igual que lo que va dentro de la funcion
export default function checkAge(years) {
  //if -> si es true
  if (years < 12) {
    return 'Niñ@';
  }
  //else if -> si el anterior fue false 
  else if (years >= 12 && years <= 17) {
    return 'Adolescente';
  }
  // else if -> si no entro en los casos anteriores
  else if (years >= 18 && years <= 64) {
    return 'Adult@';
  }

  //if -> si es true
  return 'Adult@ mayor';
}