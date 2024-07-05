export default class CuentaBancaria {
  constructor(saldoInicial, montoTotalDeposito, montoTotalRetiro) {
    this._saldoInicial = parseInt(saldoInicial);
    this._montoTotalDeposito = parseInt(montoTotalDeposito);
    this._montoTotalRetiro = parseInt(montoTotalRetiro);
  }

  get saldoInicial() {
    return this._saldoInicial;
  }

  get montoTotalDeposito() {
    return this._montoTotalDeposito;
  }

  get montoTotalRetiro() {
    return this._montoTotalRetiro;
  }

  set saldoInicial(dato) {
    this._saldoInicial = dato;
  }

  set montoTotalDeposito(dato) {
    this._montoTotalDeposito = dato;
  }

  set montoTotalRetiro(dato) {
    this._montoTotalRetiro = dato;
  }

  comision() {
    let comision = this.montoTotalRetiro * .05;
    return comision;
  }

  saldoFinal() {
    return (this.saldoInicial + this.montoTotalDeposito) - this.montoTotalRetiro - this.comision()
  }
}