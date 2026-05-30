export let capitalsList = ['London', 'Dublin', 'Ankara', 'Ciudad de México', 'Nueva delhi'];

export function isMoreThanSix() {
  let morethan6List = [];

  for (let i = 0; i < capitalsList.length; i++) {   
   if (capitalsList[i].length > 6) {
     morethan6List.push(capitalsList[i]);
   }
 }

  return {
    msg: 'Solución con for:',
    result: morethan6List
  };
}

export const isMoreThanSixWithFilter = () => {
  let result = capitalsList.filter(capital => capital.length > 6);

  return {
    msg: 'Solución con filter',
    result
  }
}

console.log(`Hay ${capitalsList.length} capitales`);