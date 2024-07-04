// main.js
import Pizzeria from "./models/Pizzeria.js";

const nombre = prompt('Ingresa el nombre del cliente: ');
const cantidad = prompt('Ingresa la cantidad de pizzas: ');
const tamanio = prompt('Ingresa el tamaño de las pizzas en números Pequeña[1], Mediana[2], Grande[3]: ');

if (isNaN(cantidad) || isNaN(tamanio) || !['1', '2', '3'].includes(tamanio)) {
  alert('Por favor, ingresa valores válidos para la cantidad y el tamaño.');
} else {
  let pizzeria = new Pizzeria(nombre, cantidad, tamanio);

  let mostrarReporte = document.getElementById('reporte');

  let reporte = `
    Monto del descuento: $${pizzeria.calcularDescuento().toFixed(2)}
    Monto a pagar: $${pizzeria.calcularMonto().toFixed(2)}
  `;

  mostrarReporte.innerText = reporte;
}
