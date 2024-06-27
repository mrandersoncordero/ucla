import Vendedor from "./models/Vendedor.js";

const cedula = prompt('Ingresa la cedula del vendedor: ')
const monto = prompt('Ingresa la monto: ')

let vendedor = new Vendedor(cedula, monto)


let mostrarReporte = document.querySelector('#reporte');

let reporte = `
  Cedula del vendedor: ${vendedor.cedula}
  Monto por comisión: $${vendedor.montoPorComision()}
`;

mostrarReporte.innerText = reporte;