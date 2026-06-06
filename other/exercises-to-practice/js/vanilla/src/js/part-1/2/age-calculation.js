//2️⃣ Conversión de edad
export default function convertAge(age) {
  let months = age * 12;
  let days = age * 365;

  return {
    months: `Edad en meses: ${months}`,
    days: `Edad en dias: ${days}`
  };
}