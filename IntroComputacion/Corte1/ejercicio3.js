/**
 * EMPLEADO
De un empleado se conocen los siguientes datos: nombre, sueldo base y años de servicio; el
empleado recibirá un aumento del 15% de su sueldo base si tiene más de 5 años de servicio.
Desarrolle un programa que muestre el nombre, el aumento y el nuevo sueldo del empleado.
 */

class Empleado {
  constructor(nombre, sueldo_base, anios_de_servicio) {
    this._nombre = nombre;
    this._sueldo_base = sueldo_base;
    this._anios_de_servicio = anios_de_servicio;
  }

  get nombre() {
    return this._nombre;
  }

  get sueldo_base() {
    return this._sueldo_base;
  }

  get anios_de_servicio() {
    return this._anios_de_servicio;
  }

  set nombre(dato) {
    this._nombre = dato;
  }

  set sueldo_base(dato) {
    this._sueldo_base = dato;
  }

  set anios_de_servicio(dato) {
    this._anios_de_servicio = dato;
  }

  aumento() {
    // if (this._anios_de_servicio > 5) {
    //   return this.sueldo_base * .15;
    // }
    // return 0;
    return this._anios_de_servicio > 5 ? this.sueldo_base * .15 : 0; // if ternario
  }

  salida() {
    const texto = `Nombre: ${this._nombre}\nAumento: ${this.aumento()}\nNuevo Sueldo: $${this.sueldo_base}`;
    return texto;
  }
}


let empleado = new Empleado('Luis', 1600, 5);
console.log('-'.repeat(20));
console.log(empleado.salida());

empleado.nombre = 'Ana';
empleado.sueldo_base = 2000;
empleado.anios_de_servicio = 7

console.log('-'.repeat(20));
console.log(empleado.salida());