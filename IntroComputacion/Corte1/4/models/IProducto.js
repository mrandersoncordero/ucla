export default class IProducto {
  leerCodigo() {
    return prompt('Ingresa el codigo del producto: ');
  }

  leerCosto() {
    return prompt('Ingresa el costo del producto: ');
  }

  leerTipo() {
    return prompt('Ingresa el tipo del producto en numeros Dama[1] Caballero[2] Nino[3]: ');
  }

  mostrarReporte(c, pbv, d, pf) {
    return `Codigo: ${c}
            Precio base de venta: $${pbv}
            Descuento: $${d}
            Precio final: $${pf}`;
  }
}