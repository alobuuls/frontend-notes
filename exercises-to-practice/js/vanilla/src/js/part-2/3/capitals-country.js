// 3️⃣ Capitales del mundo 🌍

const capitals = [
  { country: 'Colombia', capital: 'Bogotá', continent: 'America' },
  { country: 'Argentina', capital: 'Buenos Aires', continent: 'America' },
  { country: 'France', capital: 'Paris', continent: 'Europe' },
  { country: 'Japan', capital: 'Tokyo', continent: 'Asia' },
  { country: 'China', capital: 'Beijing', continent: 'Asia' },
  { country: 'Brazil', capital: 'Brasilia', continent: 'America' },
  { country: 'Germany', capital: 'Berlin', continent: 'Europe' },
  { country: 'Poland', capital: 'Warsaw', continent: 'Europe' },
  { country: 'Australia', capital: 'Canberra', continent: 'Oceania' },
  { country: 'New Zealand', capital: 'Wellington', continent: 'Oceania' },
];

capitals.forEach(el => {
  console.log(el.capital);
});

export const findCountry = country => {
  return capitals.find(el => el.country === country).capital;
}

export const isCountryNameInContinentName = (countryName, continentName) => {
  const countryFound = capitals.find(el => el.country === countryName);
  const continentExists = capitals.find(el => el.continent === continentName);

  if (!countryFound) return `El país ${countryName} no existe ⚠️`;
  if (!continentExists) return `El continente ${continentName} no existe ⚠️`;
  return countryFound.continent === continentName ? `${countryName} está en ${continentName} 🤩` : `${countryName} no está en ${continentName} 😥`;
}

