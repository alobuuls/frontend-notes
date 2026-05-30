// 4️⃣ Números mágicos

const numbers = [2, 5, 10, 15, 20, 33];

export function moreThanTen() {
  const moreThanTen = numbers.filter(num => num > 10);
  return `Mayores a 10: ${moreThanTen}`;
}

export function isEvenNumber() {
  const isthereAnEvenNumber = numbers.some(num => num % 2 === 0);
  return `Existe un numero par: ${isthereAnEvenNumber}`;
}

export const showIndexAndInfo = () => {
  let arr = [];
  
  numbers.forEach( (n, idx) => {
    let obj = {
      idx,
      numbers: n
    };

    arr.push(obj);
  });

  return arr;
}
