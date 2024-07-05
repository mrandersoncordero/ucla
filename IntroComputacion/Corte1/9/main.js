import CuentaBancaria from "./models/CuentaBancaria.js";
import ICuentaBancaria from "./models/ICuentaBancaria.js";

let iCuentaBancaria = new ICuentaBancaria(),
    saldoInicial = iCuentaBancaria.leerSaldoInicial(),
    deposito = iCuentaBancaria.leerDeposito(),
    retiro = iCuentaBancaria.leerRetiro(),

    cuentaBancaria = new CuentaBancaria(saldoInicial, deposito, retiro),

    mostrarReporte = document.querySelector('#reporte');

let comision = cuentaBancaria.comision();
// let saldoFinal = (cuentaBancaria.saldoInicial + cuentaBancaria.montoTotalDeposito) - cuentaBancaria.montoTotalRetiro - cuentaBancaria.comision();

mostrarReporte.innerText = iCuentaBancaria.salida(comision, cuentaBancaria.saldoFinal())