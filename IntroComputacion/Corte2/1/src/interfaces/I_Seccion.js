export default class I_Seccion {
    leerCodigo() {
        return prompt('Ingresa el codigo de la seccion: ')
    }

    salida(c, p) {
        return `Cantidad de Estudiantes Aprobados: ${c}
                Promedio de la seccion: ${p}`
    }
}