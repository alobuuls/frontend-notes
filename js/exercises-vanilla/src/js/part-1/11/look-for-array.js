//1️⃣1️⃣ Buscar en array
export const names = ['Ana', 'Jorge', 'Matias', 'Aris', 'Lupe'];

export const namesArrays = (arr, foundName) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === foundName) {
      return 'Encontrado ' + foundName;
    }
  }
  
  return 'No encontrado';
}

export const findName = (arr, foundName) => {
  let result = arr.find(name => name === foundName);

  return result ? `Encontrado ${result}` : `El nombre ${foundName} no ha sido encontrado`
}