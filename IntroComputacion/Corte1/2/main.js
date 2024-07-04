import Vendedor from "./models/Vendedor.js";
import IVendedor from "./models/IVendedor.js";

let iVendedor = new IVendedor(),
    cedula = iVendedor.leerCedula(),
    monto = iVendedor.leerMonto(),

    vendedor = new Vendedor(cedula, monto),

    mostrarReporte = document.querySelector('#reporte');

mostrarReporte.innerText = iVendedor.mostrarReporte(vendedor.cedula, vendedor.montoPorComision());