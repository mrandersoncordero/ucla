import Estudiante from "./models/Estudiante.js";


const nombre = prompt('Ingresa el nombre del estudiante: ');
const apellido = prompt('Ingresa el apellido del estudiante: ');
const cedula = prompt('Ingresa el cedula del estudiante: ');
const nota1 = prompt('Ingresa la primera nota(1) del estudiante ');
const nota2 = prompt('Ingresa la primera nota(2) del estudiante ');
const nota3 = prompt('Ingresa la primera nota(3) del estudiante ');

let estudiante = new Estudiante(nombre, apellido, cedula, nota1, nota2, nota3);

let mostrarReporte = document.querySelector('#reporte');

let reporte = `
  Cedula: ${estudiante.cedula}
  Nota 1: ${estudiante.nota1}
  Nota 2: ${estudiante.nota2}
  Nota 3: ${estudiante.nota3}
  Nota Final: ${estudiante.sumarNotas()}
`;

mostrarReporte.innerText = reporte;