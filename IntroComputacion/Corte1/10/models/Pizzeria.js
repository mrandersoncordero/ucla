// Pizzeria.js
export default class Pizzeria {
  constructor(nombre, cantidad, tamanio) {
    this._nombre = nombre;
    this._cantidad = parseInt(cantidad); // Convertimos a número
    this._tamanio = tamanio;
    this._descuento = 0.25;
    this._tamanios = {
      '1': 5,
      '2': 10,
      '3': 15
    };
  }

  get nombre() {
    return this._nombre;
  }

  get cantidad() {
    return this._cantidad;
  }

  get tamanio() {
    return this._tamanio;
  }

  set nombre(dato) {
    this._nombre = dato;
  }

  set cantidad(dato) {
    this._cantidad = parseInt(dato);
  }

  set tamanio(dato) {
    this._tamanio = dato;
  }

  calcularDescuento() {
    if (this._cantidad > 2) {
      let subtotal = this._tamanios[this._tamanio] * this._cantidad;
      let descuento = subtotal * this._descuento;
      return descuento;
    }
    return 0;
  }

  calcularMonto() {
    let subtotal = this._tamanios[this._tamanio] * this._cantidad;
    let descuento = this.calcularDescuento();
    return subtotal - descuento;
  }
}
