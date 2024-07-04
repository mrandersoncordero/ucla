export default class IVendedor {
  leerCedula() {
    return prompt('Ingresa el cedula del estudiante: ');
  }

  leerMonto() {
    return prompt('Ingresa la monto: ');
  }


  mostrarReporte(c, m) {
    return `Cedula del vendedor: ${c}\nMonto total ventas: $${m}`;
  }
}