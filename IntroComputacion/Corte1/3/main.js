import Empleado from "./models/Empleado.js";
import IEmpleado from "./models/IEmpleado.js";

let iEmpleado = new IEmpleado(),
    nombre = iEmpleado.leerNombre(),
    sueldo_base = iEmpleado.leerSueldoBase(),
    anios = iEmpleado.leerAnios(),

    empleado = new Empleado(nombre, sueldo_base, anios),

    mostrarReporte = document.querySelector('#reporte'),
    nuevo_sueldo = empleado.aumento() + empleado.sueldo_base;

mostrarReporte.innerText = iEmpleado.mostrarReporte(nombre, empleado.aumento(), nuevo_sueldo);