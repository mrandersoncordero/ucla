export default class Asegurado {
  constructor(cedula, estado_civil, monto) {
    this._cedula = cedula;
    this._estado_civil = parseInt(estado_civil);
    this._monto = parseInt(monto);
  }

  get cedula(){
    return this._cedula;
  }

  get estado_civil(){
    return this._estado_civil;
  }

  get monto(){
    return this._monto;
  }

  set cedula(dato){
    this._cedula = dato;
  }

  set estado_civil(dato){
    this._estado_civil = dato;
  }

  set monto(dato){
    this._monto = dato;
  }

  calcularMontoAAsegurar(tipo) {
    switch (tipo) {
      case 1:
        return this.monto * .07;
      case 2:
        return this.monto * .09;
      case 3:
        return this.monto * .05;
      case 4:
        return this.monto * .04;
      case 5:
        return this.monto * .08;
      default:
        return 'vaico';
    }
  }
}
