export default class IAsegurado {
  leerCedula() {
    return prompt('Ingrasa la cedula: ');
  }

  leerEstadoCivil() {
    return prompt('Ingresa el estado civil en numeros\nSoltero[1]\nCasado[2]\nDivorciado[3]\nViudo[4]\nConcubino[5]: ');
  }

  leerMonto() {
    return prompt('Ingrasa el monto: ');
  }

  salida(c, m) {
    return `Cedula: ${c}\nMonto de la Póliza: $${m}`;
  }
}