export default class IEmpleado {
  leerNombre() {
    return prompt('Ingresa el nombre del empleado: ');
  }

  leerSueldoBase() {
    return prompt('Ingresa el sueldo base del empleado: ');
  }

  leerAnios() {
    return prompt('Ingresa el anios de servicio del empleado: ');
  }

  mostrarReporte(n, a, ns) {
    return `Nombre: ${n}
            Aumento: $${a}
            Nuevo Sueldo: $${ns}`
  }
}