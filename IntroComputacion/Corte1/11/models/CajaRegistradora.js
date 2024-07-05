export default class CajaRegistradora {
  constructor(cantidad_de_billetes) {
    this._cantidad_de_billetes = cantidad_de_billetes
  }
  // Get
  get oneDollar() {
    return this._cantidad_de_billetes.oneDollar.quantity;
  }

  get fiveDollar() {
    return this._cantidad_de_billetes.fiveDollar.quantity;
  }

  get tenDollar() {
    return this._cantidad_de_billetes.tenDollar.quantity;
  }

  get twentyDollar() {
    return this._cantidad_de_billetes.twentyDollar.quantity;
  }

  get fiftyDollar() {
    return this._cantidad_de_billetes.fiftyDollar.quantity;
  }

  get oneHundredDollar() {
    return this._cantidad_de_billetes.oneHundredDollar.quantity;
  }

  // Set
  set oneDollar(dato) {
    this._cantidad_de_billetes.oneDollar.quantity = dato;
  }

  set fiveDollar(dato) {
    this._cantidad_de_billetes.fiveDollar.quantity = dato;
  }

  set tenDollar(dato) {
    this._cantidad_de_billetes.tenDollar.quantity = dato;
  }

  set twentyDollar(dato) {
    this._cantidad_de_billetes.twentyDollar.quantity = dato;
  }

  set fiftyDollar(dato) {
    this._cantidad_de_billetes.fiftyDollar.quantity = dato;
  }

  set oneHundredDollar(dato) {
    this._cantidad_de_billetes.oneHundredDollar.quantity = dato;
  }
}
