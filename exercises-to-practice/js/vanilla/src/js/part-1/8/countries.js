let countries = {
  'Colombia': 'Bogotá',
  'Japón': 'Tokio',
  'Francia': 'París'
};

export default function showCap(country) {
  return countries[country] ? countries[country] : 'No tengo esa capital';
}