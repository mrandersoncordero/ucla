// Archivo principal

// Modelos
import Estudiante from "./src/models/Estudiante.js";
import Seccion from "./src/models/Seccion.js";
// Interfaces
import I_Estudiante from "./src/interfaces/I_Estudiante.js";
import I_Seccion from "./src/interfaces/I_Seccion.js";


const seccionInterfaz = new I_Seccion(); // Inicializamos clase I_Seccion

const codigoSeccion = seccionInterfaz.leerCodigo();
const seccion = new Seccion(codigoSeccion); // Inicilizamos clase Seccion y pasamos el codigoSeccion
const salida = document.querySelector('#salida');

for (let i = 0; i < 5; i++) {
    let estudianteInterfaz = new I_Estudiante();
    let nombre = estudianteInterfaz.leerNombre();
    let nota1 = estudianteInterfaz.leerNota1();
    let nota2 = estudianteInterfaz.leerNota2();
    let nota3 = estudianteInterfaz.leerNota3();

    const estudiante = new Estudiante(nombre, nota1, nota2, nota3);

    salida.innerText += estudianteInterfaz.mostrarReporte(
        i + 1,
        estudiante.nombre,
        estudiante.nota1,
        estudiante.nota2,
        estudiante.nota3,
        estudiante.notaFinal()) + "\n\n";

    seccion.procesarEstudiante(estudiante);
}

salida.innerText += seccionInterfaz.salida(seccion.cantidadDeEstudiantesAprobados(),
    seccion.promedioDeLaSeccion());
