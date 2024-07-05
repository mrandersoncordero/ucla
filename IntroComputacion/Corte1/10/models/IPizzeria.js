export default class IPizzeria {
  leerNombre() {
    return prompt('Ingresa el nombre del cliente: ');
  }

  leerCantidad() {
    return prompt('Ingresa la cantidad de pizzas: ');
  }

  leerTamanio() {
    return prompt('Ingresa el tamaño de las pizzas en números Pequeña[1]\nMediana[2]\nGrande[3]: ');
  }

  salida(descuento, montoAPagar) {
    return `
    Monto del descuento: $${descuento}
    Monto a pagar: $${montoAPagar}`;
  }
}