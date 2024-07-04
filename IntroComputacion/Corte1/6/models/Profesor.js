export default class Profesor {
  constructor(cedula, categoria, monto) {
    this._cedula = cedula;
    this._categoria = parseInt(categoria);
    this._monto = parseInt(monto);
  }

  get cedula(){
    return this._cedula;
  }

  get categoria(){
    return this._categoria;
  }

  get monto(){
    return this._monto;
  }

  set cedula(dato){
    this._cedula = dato;
  }

  set categoria(dato){
    this._categoria = dato;
  }

  set monto(dato){
    this._monto = dato;
  }

  calcularMontoPrima(tipo) {
    switch (tipo) {
      case 1:
        return this.monto * .03;
        break;
      case 2:
        return this.monto * .05;
        break;
      case 3:
        return this.monto * .08;
        break;
      case 4:
        return this.monto * .11;
        break;
      case 5:
        return this.monto * .15;
        break;
      default:
        return 'vacio';
    }
  }
}
