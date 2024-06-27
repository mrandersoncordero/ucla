export default class Vendedor {
  constructor(cedula, total_ventas) {
    this._cedula = cedula;
    this._total_ventas = total_ventas;
  }

  get cedula() {
    return this._cedula;
  }

  get total_ventas() {
    return this._total_ventas;
  }

  set cedula(dato) {
    this._total_ventas = dato;
  }

  set total_ventas(monto) {
    this._total_ventas = monto;
  }

  montoPorComision() {
    let comision = .20;
    return this._total_ventas * comision
  }
}
