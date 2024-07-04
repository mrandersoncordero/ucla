import CinesUnidos from "./models/CinesUnidos.js";

const monto1 = prompt('Ingresa el monto1: ')
const monto2 = prompt('Ingresa el monto2: ')
const monto3 = prompt('Ingresa el monto3: ')
const monto4 = prompt('Ingresa el monto4: ')

let cinesUnidos = new CinesUnidos(monto1, monto2, monto3, monto4);


let mostrarReporte = document.querySelector('#reporte');

let reporte = `Total recaudado: $${cinesUnidos.totalRecaudado()}`;

mostrarReporte.innerText = reporte