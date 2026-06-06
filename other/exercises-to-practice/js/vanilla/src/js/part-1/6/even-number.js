export const getEvenNumbers = arr => {
  return `Los números pares de [${arr}] son: ${arr.filter(n => n % 2 === 0)}`;
}

export const sumArrayNumbers = arr => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return `la suma de [${arr}] es = ${sum}`;
}

export const sumArrayNumbersWithReduce = arr => {
  return `la suma de [${arr}] es = ${arr.reduce((acc, current) => acc + current)}`; 
}