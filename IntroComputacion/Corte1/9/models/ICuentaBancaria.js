export default class ICuentaBancaria {
  leerSaldoInicial() {
    return prompt('Ingresa el saldo inicial: ')
  }

  leerDeposito() {
    return prompt('Ingresa el monto Deposito: ')
  }

  leerRetiro() {
    return prompt('Ingresa el monto Retiro: ')
  }

  salida(comision, saldo_final) {
    return `Comision por retiros: $${comision}
            Saldo final: $${saldo_final}`;
  }
}