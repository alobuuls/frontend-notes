export function checkCountry(country) {
	if (country === 'Colombia') {
		return 'Bogota';
	}
	
	if (country === 'Japon') {
		return 'Tokio';
	}

	if (country === 'Francia') {
		return 'Paris';
	}

	if (country === 'Brasil') {
		return 'Brasilia';
	}

	if (country === 'Holanda') {
		return 'Amsterdam';
	}

	return 'Pais no registrado';
}

// console.log(checkCountry('Japon'));


// 1era manera array de objetos y se encuentra por método find()
const COUNTRIES = [
  {
    nameCountry: 'Argentina',
    capital: 'Buenos Aires',
  },
  {
    nameCountry: 'Bolivia',
    capital: 'Sucre',
  },
  {
    nameCountry: 'Brasil',
    capital: 'Brasilia',
  },
  {
    nameCountry: 'Chile',
    capital: 'Santiago',
  },
  {
    nameCountry: 'Colombia',
    capital: 'Bogotá',
  },
  {
    nameCountry: 'Ecuador',
    capital: 'Quito',
  },
  {
    nameCountry: 'México',
    capital: 'Ciudad de México',
  },
  {
    nameCountry: 'Perú',
    capital: 'Lima',
  },
  {
    nameCountry: 'Estados Unidos',
    capital: 'Washington D. C.',
  },
  {
    nameCountry: 'Venezuela',
    capital: 'Caracas',
  }
];

export const dynamicCapital = (country) => {
	let matchedCountry = COUNTRIES.find(el => el['nameCountry'] === country);
	return matchedCountry ? matchedCountry['capital'] : 'Ese país de momento no existe :)';
}

// 2da manera - un array para países y uno para capitales para encontrar por indice
export const contriesEurope = ['Albania', 'Alemania', 'Andorra', 'Austria', 'Bélgica', 'Bielorrusia', 'Bosnia y Herzegovina', 'Bulgaria', 'Chipre', 'Croacia', 'Dinamarca', 'Eslovaquia', 'Eslovenia', 'España', 'Estonia', 'Finlandia', 'Francia', 'Grecia', 'Hungría', 'Irlanda', 'Islandia', 'Italia', 'Kosovo', 'Letonia', 'Liechtenstein', 'Lituania', 'Luxemburgo', 'Malta', 'Moldavia', 'Mónaco', 'Montenegro', 'Noruega', 'Países Bajos', 'Polonia', 'Portugal', 'Reino Unido', 'República Checa', 'Rumania', 'Rusia', 'San Marino', 'Serbia', 'Suecia', 'Suiza', 'Ucrania', 'Vaticano'];
export const capitalsEurope = ['Tirana', 'Berlín', 'Andorra la Vieja', 'Viena', 'Bruselas', 'Minsk', 'Sarajevo', 'Sofía', 'Nicosia', 'Zagreb', 'Copenhague', 'Bratislava', 'Liubliana', 'Madrid', 'Tallin', 'Helsinki', 'París', 'Atenas', 'Budapest', 'Dublín', 'Reikiavik', 'Roma', 'Pristina', 'Riga', 'Vaduz', 'Vilna', 'Luxemburgo', 'La Valeta', 'Chisináu', 'Mónaco', 'Podgorica', 'Oslo', 'Ámsterdam', 'Varsovia', 'Lisboa', 'Londres', 'Praga', 'Bucarest', 'Moscú', 'San Marino', 'Belgrado', 'Estocolmo', 'Berna', 'Kiev', 'Ciudad del Vaticano'];

export const getCapitalByCountry = (country) => {
  const findCountryIdxPos = contriesEurope.indexOf(country);

	return findCountryIdxPos === -1
		? `El país "${country}" no existe en Europa`
		: capitalsEurope[findCountryIdxPos];
};

// console.log(getCapitalByCountry('Wales'));

