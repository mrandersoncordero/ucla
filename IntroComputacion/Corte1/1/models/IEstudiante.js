export default class IEstudiante {
  leerNombre() {
    return prompt('Ingresa el nombre del estudiante: ');
  }

  leerApellido() {
    return prompt('Ingresa el apellido del estudiante: ');
  }

  leerCedula() {
    return prompt('Ingresa el cedula del estudiante: ');
  }

  leerNota1() {
    return prompt('Ingresa la primera nota(1) del estudiante ');
  }

  leerNota2() {
    return prompt('Ingresa la primera nota(2) del estudiante ');
  }

  leerNota3() {
    return prompt('Ingresa la primera nota(3) del estudiante ');
  }

  mostrarReporte(c, n1, n2, n3, nt) {
    return `Cedula: ${c}
            Nota 1: ${n1}
            Nota 2: ${n2}
            Nota 3: ${n3}
            Nota Final: ${nt}`;
  }
}