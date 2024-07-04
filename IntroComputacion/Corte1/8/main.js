import Estudiante from "./models/Estudiante.js";
import IEstudiante from "./models/IEstudiante.js";

let iEstudiante = new IEstudiante(),
    nombre = prompt('Ingresa el nombre del estudiante: '),
    apellido = prompt('Ingresa el apellido del estudiante: '),
    cedula = prompt('Ingresa el cedula del estudiante: '),
    nota1 = prompt('Ingresa la primera nota(1) del estudiante '),
    nota2 = prompt('Ingresa la primera nota(2) del estudiante '),
    nota3 = prompt('Ingresa la primera nota(3) del estudiante '),

    estudiante = new Estudiante(nombre, apellido, cedula, nota1, nota2, nota3),

    mostrarReporte = document.querySelector('#reporte');

    mostrarReporte.innerText = iEstudiante.mostrarReporte(estudiante.sumarNotas(), estudiante.aprobado());