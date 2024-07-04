import Asegurado from "./models/Asegurado.js";
import IAsegurado from "./models/IAsegurado.js";

const estados_permitidos = ['1', '2', '3', '4', '5'];
let iAsegurado = new IAsegurado(),
    cedula = iAsegurado.leerCedula(),
    estado_civil = iAsegurado.leerEstadoCivil(),
    monto = iAsegurado.leerMonto();

if (!estados_permitidos.includes(estado_civil)) {
  alert('Ingresa un dígito del 1 al 5 para el estado civil');
} else {
  let asegurado = new Asegurado(cedula, estado_civil, monto),
      reporte = document.querySelector('#reporte');

  reporte.innerText = iAsegurado.salida(cedula, asegurado.calcularMontoAAsegurar(parseInt(estado_civil)));
}
