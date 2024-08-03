export default class Seccion {
    constructor(codigo) {
        this._codigo = codigo;
        this._cantidadDeEstudiantesAprobados = 0 // Contador
        this._sumaDeNotas = 0
    }

    get codigo () {
        return this._codigo;
    }

    set codigo(dato) {
        this._codigo = dato;
    }

    procesarEstudiante(estudiante) {
        this._sumaDeNotas = estudiante.notaFinal()
        
        if (estudiante.aprobo()) {
            this._cantidadDeEstudiantesAprobados += 1
        }
    }

    cantidadDeEstudiantesAprobados() {
        return this._cantidadDeEstudiantesAprobados;
    }

    promedioDeLaSeccion() {
        return this._sumaDeNotas / 5;
    }
}
