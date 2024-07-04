import CuentaBancaria from "./models/CuentaBancaria.js";

const saldoInicial = prompt('Ingresa el saldo inicial: ')
const deposito = prompt('Ingresa el monto Deposito: ')
const retiro = prompt('Ingresa el monto Retiro: ')

let cuentaBancaria = new CuentaBancaria(saldoInicial, deposito, retiro);

let mostrarReporte = document.querySelector('#reporte');

let reporte = `
  Comision por retiros: $${cuentaBancaria.comision()}
  Saldo final: $${(cuentaBancaria.saldoInicial + cuentaBancaria.montoTotalDeposito) - cuentaBancaria.montoTotalRetiro - cuentaBancaria.comision()}
`;

mostrarReporte.innerText = reporte