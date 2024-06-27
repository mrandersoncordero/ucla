export default class Empleado {
  constructor(nombre, sueldo_base, anios_de_servicio) {
    this._nombre = nombre;
    this._sueldo_base = parseInt(sueldo_base);
    this._anios_de_servicio = parseInt(anios_de_servicio);
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