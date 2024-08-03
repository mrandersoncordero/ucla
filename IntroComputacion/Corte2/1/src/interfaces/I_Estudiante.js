export default class I_Estudiante {
    leerNombre() {
        return prompt('Ingresa el nombre del estudiante: ');
    }

    leerNota1() {
        return parseInt(prompt('Ingresa la primera nota(1) del estudiante '));
    }

    leerNota2() {
        return parseInt(prompt('Ingresa la primera nota(2) del estudiante '));
    }

    leerNota3() {
        return parseInt(prompt('Ingresa la primera nota(3) del estudiante '));
    }

    mostrarReporte(num, n, n1, n2, n3, nf) {
        return `Estudiante N-${num}
                Nombre: ${n}
                Nota 1: ${n1}
                Nota 2: ${n2}
                Nota 3: ${n3}
                Nota Final: ${nf}`;
    }
}