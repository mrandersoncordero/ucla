export default class IProfesor {
  leerCedula() {
    return prompt('Ingrasa la cedula: ');
  }

  leerEstadoCivil() {
    return prompt('Ingresa la categoria en numeros\nInstructor[1]\nAsistente[2]\nAgregado[3]\nAsociado[4]\nTitular[5]: ');
  }

  leerMonto() {
    return prompt('Ingrasa el monto: ');
  }

  salida(c, m, ns) {
    return `Cedula: ${c}\nMonto de la Prima: $${m}\nNuevo Sueldo: $${ns}`;
  }
}