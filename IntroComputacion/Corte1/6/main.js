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
  Nota Final: ${estudiante.sumarNotas()}
  Resultado: ${estudiante.aprobado() ? 'APROBADO' : 'NO APROBADO'}
`;

mostrarReporte.innerText = reporte;