//1️⃣ Calculadora básica
function isValidNumber(value) {
  // undefined
  if (value === undefined) {
    return {
      msg: 'Olvidaste envíar uno de los valores',
      error: true
    }
  }

  // empty string
  if ( typeof value === 'string' && value.trim() === '') {
    return {
      msg: 'Los valores no deben ir vacíos',
      error: true
    }
  }

  // success
  return {
    error: false,
    value: Number(value)
  }
}

function sum(a, b) {
  const validationA = isValidNumber(a);
  if (validationA.error) return `Primer valor: ${validationA.msg}`;

  const validationB = isValidNumber(b);
  if (validationB.error) return `Segundo valor: ${validationB.msg}`;

  let result = validationA.value + validationB.value;
  return `${a} + ${b} = ${result}`;
}

function substraction(a, b) {
  const validationA = isValidNumber(a);
  if (validationA.error) return `Primer valor: ${validationA.msg}`;

  const validationB = isValidNumber(b);
  if (validationB.error) return `Segundo valor: ${validationB.msg}`;

  let result = validationA.value - validationB.value;
  return `${a} - ${b} = ${result}`;
}

function multiplication(a, b) {
  const validationA = isValidNumber(a);
  if (validationA.error) return `Primer valor: ${validationA.msg}`;

  const validationB = isValidNumber(b);
  if (validationB.error) return `Segundo valor: ${validationB.msg}`;

  let result = validationA.value * validationB.value;
  return `${a} X ${b} = ${result}`;
}

function division(a, b) {
  const validationA = isValidNumber(a);
  if (validationA.error) return `Primer valor: ${validationA.msg}`;

  const validationB = isValidNumber(b);
  if (validationB.error) return `Segundo valor: ${validationB.msg}`;

  let result = validationA.value / validationB.value;
  return `${a} ÷ ${b} = ${result}`;
}

export { division, multiplication, substraction, sum };