import Empleado from "./models/Empleado.js";

const nombre = prompt('Ingresa el nombre del empleado: ')
const sueldo_base = prompt('Ingresa el sueldo base del empleado: ')
const anios = prompt('Ingresa el anios de servicio del empleado: ')

let empleado = new Empleado(nombre, sueldo_base, anios);

let mostrarReporte = document.querySelector('#reporte');

let reporte = `
  Nombre: ${empleado.nombre}
  Aumento: $${empleado.aumento()}
  Nuevo Sueldo: $${empleado.aumento() + empleado.sueldo_base}
`;

mostrarReporte.innerText = reporte;