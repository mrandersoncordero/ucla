import CinesUnidos from "./models/CinesUnidos.js";
import ICinesUnidos from "./models/ICinesUnidos.js";

let iCinesUnidos = new ICinesUnidos(),
    monto1 = prompt('Ingresa el monto1: '),
    monto2 = prompt('Ingresa el monto2: '),
    monto3 = prompt('Ingresa el monto3: '),
    monto4 = prompt('Ingresa el monto4: '),

    cinesUnidos = new CinesUnidos(monto1, monto2, monto3, monto4),

    mostrarReporte = document.querySelector('#reporte');

mostrarReporte.innerText = iCinesUnidos.salida(cinesUnidos.totalRecaudado())