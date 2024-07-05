import CajaRegistradora from "./models/CajaRegistradora.js";
import ICajaRegistradora from "./models/ICajaRegistradora.js";

let iCajaRegistradora = new ICajaRegistradora(),
    oneDollar = iCajaRegistradora.readOneDollar(),
    fiveDollar = iCajaRegistradora.readFiveDollar(),
    tenDollar = iCajaRegistradora.readTenDollar(),
    twentyDollar = iCajaRegistradora.readTwentyDollar(),
    fiftyDollar = iCajaRegistradora.readFiftyDollar(),
    oneHundredDollar = iCajaRegistradora.readOneHundredDollar();

    const cantidad_de_billetes = {
      oneDollar: {
        quantity: 10,
        value: 1 // $
      },
      fiveDollar: {
        quantity: 5,
        value: 5 // $
      },
      tenDollar: {
        quantity: 2,
        value: 10 // $
      },
      twentyDollar: {
        quantity: 1,
        value: 20 // $
      },
      fiftyDollar: {
        quantity: 0,
        value: 50 // $
      },
      oneHundredDollar: {
        quantity: 3,
        value: 100 // $
      },
    }

let cajaRegistradora = new CajaRegistradora(cantidad_de_billetes);
let mostrarReporte = document.querySelector('#reporte');

mostrarReporte.innerText = iCajaRegistradora.salida(cajaRegistradora._cantidad_de_billetes)

