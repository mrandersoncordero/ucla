import Profesor from "./models/Profesor.js";
import IProfesor from "./models/IProfesor.js";

const categorias_permitidas = ['1', '2', '3', '4', '5'];
let iProfesor = new IProfesor(),
    cedula = iProfesor.leerCedula(),
    categoria = iProfesor.leerEstadoCivil(),
    monto = iProfesor.leerMonto();

if (!categorias_permitidas.includes(categoria)) {
  alert('Ingresa un dígito del 1 al 5 para el estado civil');
} else {
  let profesor = new Profesor(cedula, categoria, monto),
      reporte = document.querySelector('#reporte'),
      montoPrima = profesor.calcularMontoPrima(parseInt(categoria)),
      nuevoSueldo = montoPrima + profesor.monto;

  reporte.innerText = iProfesor.salida(cedula, montoPrima, nuevoSueldo);
}
