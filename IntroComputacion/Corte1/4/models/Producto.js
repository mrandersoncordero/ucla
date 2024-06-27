export default class Producto {
  constructor(codigo, costo, tipo) {
    this._codigo = codigo;
    this._costo = parseInt(costo);
    this._tipo = tipo;
  }

  get codigo() {
    return this._codigo;
  }

  get costo() {
    return this._costo;
  }

  get tipo() {
    return this._tipo;
  }

  set codigo(dato) {
    this._codigo = dato;
  }

  set costo(dato) {
    this._costo = dato;
  }

  set tipo(dato) {
    this._tipo = dato;
  }

  descuento() {
    return this._tipo == 3 ? this._costo * .10 : 0; 
  }

  salida() {
    return `Codigo: ${this.codigo}\nPrecio base de venta: $${this.costo}\nDescuento: $${this.descuento()}\nPrecio final: $${this._costo - this.descuento()}`;
  }
}