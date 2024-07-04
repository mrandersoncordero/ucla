import Producto from "./models/Producto.js";
import IProducto from "./models/IProducto.js";


let iProducto = new IProducto(),
    codigo = iProducto.leerCodigo(),
    costo = iProducto.leerCosto(),
    tipo = iProducto.leerTipo(),

    producto = new Producto(codigo, costo, tipo),

    mostratReporte = document.getElementById('reporte');

    mostratReporte.innerText = iProducto.mostrarReporte(codigo, costo, producto.descuento(), producto.costo - producto.descuento())