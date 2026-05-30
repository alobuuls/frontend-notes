class Personaje {
  #vida;
  #vidaMaxima;

  constructor(nombre, vidaInicial, vidaMaxima) {
    this.nombre = nombre;
    this.#vida = vidaInicial;
    this.#vidaMaxima = vidaMaxima;
  }

  recibirDanio(cantidad) {
    this.#vida -= cantidad;

    if (this.#vida < 0) {
      this.#vida = 0;
    }

    console.log(`${this.nombre} recibió ${cantidad} de daño`);
  }

  obtenerVida() {
    return this.#vida;
  }
}

class Arquero extends Personaje {
  constructor (nombre, vidaInicial, vidaMaxima, defensa, flechas) {
    super(nombre, vidaInicial, vidaMaxima);
    this.defensa = defensa;
    this.flechas = flechas;
  }
  
  atacar(objetivo) {
  if (!(objetivo instanceof Personaje)) return;

  if (this.flechas > 0) {
    objetivo.recibirDanio(10);
    this.flechas--;
    console.log(`${this.nombre} atacó con flecha. Flechas restantes: ${this.flechas}`);
  } else { console.log(`${this.nombre} no tiene flechas`)
    }
  }   

  recargarFlechas(cantidad = 5) {
    this.flechas += cantidad
    console.log(`${this.nombre} recargó flechas, ahora tiene ${this.flechas} flechas`);
  }
}

const arquero1 = new Arquero("Merida", 100, 100, 5, 10);
const arquero2 = new Arquero("Sofia", 100, 100, 3, 8);

for (let turno = 1; turno <= 3; turno++) {
  console.log(`           TURNO ${turno}           `);

  arquero1.atacar(arquero2);
  console.log(`${arquero1.nombre}: Vida=${arquero1.obtenerVida()}, Flechas=${arquero1.flechas}`);
  console.log(`${arquero2.nombre}: Vida=${arquero2.obtenerVida()}, Flechas=${arquero2.flechas}`);

  arquero2.atacar(arquero1);
  console.log(`${arquero1.nombre}: Vida=${arquero1.obtenerVida()}, Flechas=${arquero1.flechas}`);
  console.log(`${arquero2.nombre}: Vida=${arquero2.obtenerVida()}, Flechas=${arquero2.flechas}`);

  if (arquero1.flechas === 0) {
  arquero1.recargarFlechas();
  }
  if (arquero2.flechas === 0) {
  arquero2.recargarFlechas();
  }
}
