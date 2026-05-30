class Animal {

  constructor(nombre, raza) {
    this._nombre = nombre;
    this._raza = raza;
  }

  get raza () {
    return this._raza;
  }

  set nombre(nuevoHombre) {
    // if ( nuevoHombre.trim() === '' ) {
    //   console.log('no se pueden nombres vacios');
    //   return;
    // }

    if ( !isNaN(nuevoHombre) ) {
      console.log('no se pueden números');
      return;
    }

    this._nombre = nuevoHombre;
  }

  run() {
    return `El animal con el nombre: ${this.nombre} está corriendo`;
  }
  
}

class BabyAnimal extends Animal {
  constructor(nombreBaby, padre) {
    super(nombreBaby, padre.raza);
  }

  grow() {
    return `El animal con el nombre: ${this.nombre} está cambiando de pelaje`;
  }
}

// const akiraDog = new Animal('akira', 'labrador');
// const dokiDog = new BabyAnimal('doki', akiraDog);


// akiraDog.nombre = 5;


// console.log(akiraDog);

class Car {

  static views = 0;

  constructor(marca) {
    this.marca = marca;
    Car.views++;
  }

  totalCars() {
    return Car.views;
  }

}

class Toy extends Car {

  static viewsT = 0;

  constructor(marca, material) {
    super(marca);
    this.material = material;
    Toy.viewsT++;
  }

  totalToys() {
    return Toy.viewsT;
  }

}
const f = new Car('f');
const l = new Car('l');

const hotWheels = new Toy('hot-wheels');
const hotWheels2 = new Toy('hot-wheels-2');
const hotWheels3 = new Toy('hot-wheels-3');

console.log(hotWheels3.totalCars());
console.log(hotWheels3.totalToys());
