export default class Estudiante {
  constructor(nombre, apellido, cedula, nota1, nota2, nota3) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._cedula = cedula;
    this._nota1 = parseInt(nota1);
    this._nota2 = parseInt(nota2);
    this._nota3 = parseInt(nota3);
  }

  // get
  get nombre() {
    return this._nombre;
  }

  get apellido() {
    return this._apellido;
  }

  get cedula() {
    return this._cedula;
  }

  get nota1() {
    return this._nota1;
  }

  get nota2() {
    return this._nota2;
  }

  get nota3() {
    return this._nota3;
  }

  // set
  set nombre(dato) {
    this._nombre = dato;
  }

  set apellido(dato) {
    this._apellido = dato;
  }

  set cedula(dato) {
    this._cedula = dato;
  }

  set nota1(dato) {
    this._nota1 = dato;
  }

  set nota2(dato) {
    this._nota2 = dato;
  }

  set nota3(dato) {
    this._nota3 = dato;
  }

  nombreCompleto() {
    return `${this._nombre} ${this._apellido}`
  }

  sumarNotas() {
    return this.nota1 + this.nota2 + this.nota3
  }

  aprobado() {
    if (this.sumarNotas() >= 48) {
      return true;
    }else{
      return false;
    }
  }
}
