import Producto from "./models/Producto.js";

let codigo = prompt('Ingresa el codigo del producto: ')
let costo = prompt('Ingresa el costo del producto: ')
let tipo = prompt('Ingresa el tipo del producto en numeros Dama[1] Caballero[2] Nino[3]: ')

let producto = new Producto(codigo, costo, tipo)

let mostratReporte = document.getElementById('reporte')

let reporte = `
  Codigo: ${producto.codigo}
  Precio base de venta: $${producto.costo}
  Descuento: $${producto.descuento()}
  Precio final: $${producto.costo - producto.descuento()}
`;

mostratReporte.innerText = reporte