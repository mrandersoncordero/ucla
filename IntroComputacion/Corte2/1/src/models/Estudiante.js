export default class Estudiante {
    constructor(nombre, nota1, nota2, nota3) {
        this._nombre = nombre;
        this._nota1 = nota1;
        this._nota2 = nota2;
        this._nota3 = nota3;
    }

    // get
    get nombre() {
        return this._nombre;
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
        this._nombre = dato
    }

    set nota1(dato) {
        this._nota1 = dato
    }

    set nota2(dato) {
        this._nota2 = dato
    }

    set nota3(dato) {
        this._nota3 = dato
    }

    notaFinal() {
        return this.nota1 + this.nota2 + this.nota3
    }

    promedioDelEstudiante() {
        return this.notaFinal / 3;
    }

    aprobo() {
        return this.notaFinal() > 47.5;
    }
}   