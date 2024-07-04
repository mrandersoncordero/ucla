import Estudiante from "./models/Estudiante.js";
import IEstudiante from "./models/IEstudiante.js";

let iEmpleado = new IEstudiante(),
    nombre = iEmpleado.leerNombre(),
    apellido = iEmpleado.leerApellido(),
    cedula = iEmpleado.leerCedula(),
    nota1 = iEmpleado.leerNota1(),
    nota2 = iEmpleado.leerNota2(),
    nota3 = iEmpleado.leerNota3();

let estudiante = new Estudiante(nombre, apellido, cedula, nota1, nota2, nota3);

let mostrarReporte = document.querySelector('#reporte');

mostrarReporte.innerText = iEmpleado.mostrarReporte(estudiante.cedula, estudiante.nota1, estudiante.nota2, estudiante.nota3, estudiante.sumarNotas());