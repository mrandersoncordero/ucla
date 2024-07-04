export default class ICinesUnidos {
  leerMonto1() {
    return prompt('Ingresa el monto1: ')
  }

  leerMonto2() {
    return prompt('Ingresa el monto2: ')
  }

  leerMonto3() {
    return prompt('Ingresa el monto3: ')
  }

  leerMonto4() {
    return prompt('Ingresa el monto4: ')
  }

  salida(s) {
    return `Total recaudado: $${s}`
  }
}