// main.js
import IPizzeria from "./models/IPizzeria.js";
import Pizzeria from "./models/Pizzeria.js";

const iPizzeria = new IPizzeria(),
      nombre = iPizzeria.leerNombre(),
      cantidad = iPizzeria.leerCantidad(),
      tamanio = iPizzeria.leerTamanio();

if (isNaN(cantidad) || isNaN(tamanio) || !['1', '2', '3'].includes(tamanio)) {
  alert('Por favor, ingresa valores válidos para la cantidad y el tamaño.');
} else {
  let pizzeria = new Pizzeria(nombre, cantidad, tamanio);

  let mostrarReporte = document.getElementById('reporte');
  let descuento = pizzeria.calcularDescuento().toFixed(2);
  let montoAPagar = pizzeria.calcularMonto().toFixed(2);

  mostrarReporte.innerText = iPizzeria.salida(descuento, montoAPagar);
}
