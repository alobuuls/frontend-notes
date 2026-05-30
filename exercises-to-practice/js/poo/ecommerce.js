class Producto {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this._precio = this.validateNumber(precio, 'precio');
  }

  get precio() {
    return this._precio;
  }

  validateNumber(valor, field) {
    if (typeof valor !== 'number' || isNaN(valor) || valor < 0) {
      throw new Error(`El ${field} debe ser un número mayor o igual a 0`);
    }
    return valor;
  }

  comprar() {
    return `Compra realizada de ${this.nombre} por $${this.precio}`;
  }
}

class ProductoFisico extends Producto {
  #stock;

  constructor(id, nombre, precio, stock, peso) {
    super(id, nombre, precio);
    this.#stock = this.validateNumber(stock, 'stock');
    this.peso = peso;
  }

  get stock() {
    return this.#stock;
  }

  comprar(cantidad) {
    cantidad = this.validateNumber(cantidad, 'cantidad');

    if (cantidad === 0) {
      return 'La cantidad debe ser mayor que 0';
    }

    if (this.#stock >= cantidad) {
      this.#stock -= cantidad;
      return `Su compra de ${cantidad} ${this.nombre} por $${this.precio} ha sido exitosa`;
    }

    return `No hay suficiente stock. Solo quedan ${this.#stock}`;
  }
}

class ProductoDigital extends Producto {
  constructor(id, nombre, precio, tamañoMB) {
    super(id, nombre, precio);
    this.tamañoMB = tamañoMB;
  }

  comprar() {
    return `Descarga ilimitada de ${this.nombre} (${this.tamañoMB}MB) confirmada`;
  }
}

class Servicio {
  constructor(nombre, precio, duracionHoras) {
    this.nombre = nombre;
    this.precio = precio;
    this.duracionHoras = duracionHoras;
  }

  comprar() {
    return `Servicio ${this.nombre} contratado por ${this.duracionHoras} horas`;
  }
}