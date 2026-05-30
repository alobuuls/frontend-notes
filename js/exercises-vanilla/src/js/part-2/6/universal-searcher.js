/**
 * Busca un objeto dentro de un arreglo usando una propiedad y un valor.
 *
 * Verifica primero si la propiedad (key) existe en al menos uno de los objetos.
 * Si la key no existe, retorna un mensaje de error.
 * Si la key existe, busca y retorna el primer objeto cuyo valor coincida.
 *
 * @param {Object[]} arr - Arreglo de objetos donde se realizará la búsqueda.
 * @param {string} key - Nombre de la propiedad a buscar en los objetos.
 * @param {string | number} value - Valor que debe coincidir con la propiedad indicada.
 *
 * @returns {Object|string}
 * Retorna el objeto encontrado si existe,
 * o un mensaje indicando que la key no existe
 * o que no se encontró el valor buscado.
 */
const findKeyValue = (arr, key, value) => {
  if ( !arr.find(obj => obj.hasOwnProperty(key) )) return `La key ${key} no existe en usuarios`;
  return arr.find(obj => obj[key] === value) || `No se encontró ${value} en la key ${key}`;
}

/**
 * Verifica si existe un valor dentro de un arreglo de usuarios.
 *
 * Si el arreglo está vacío, retorna un mensaje indicando que no se encontraron usuarios.
 * Si el arreglo contiene elementos, delega la búsqueda a la función `findKeyValue`.
 *
 * @param {Object[]} arr - Arreglo de usuarios a evaluar.
 * @param {string} key - Propiedad del usuario que se desea buscar.
 * @param {string | number} value - Valor que se desea encontrar en la propiedad indicada.
 *
 * @returns {Object|string}
 * Retorna el usuario encontrado,
 * o un mensaje indicando que no hay usuarios,
 * que la key no existe,
 * o que no se encontró el valor buscado.
 */
export const doesExistValueInUsers = (arr, key, value) => {
  return !arr.length ? 'No se econtraron usuarios' : findKeyValue(arr, key, value);
}

/* doesExistValueInUsers =>
  * (users, 'name', 'Alex') ✅
  * (users, 'id', 1) ✅
  * ([], 'name', 'Alex') ❌
  * ([], 'age', 20) ❌
  * (users, 'name', 'Pedro') ❌
*/
