// export default class Pelicula {
//   constructor(nombre, precio_entrada, boletos_vendidos) {
//     this._nombre = nombre;
//     this._precio_entrada = precio_entrada;
//     this._boletos_vendidos = boletos_vendidos;
//   }

//   get nombre() {
//     return this._boletos_vendidos;
//   }

//   get precio_entrada() {
//     return this._precio_entrada;
//   }

//   get boletos_vendidos() {
//     return this._boletos_vendidos;
//   }

//   set nombre(dato) {
//     this._nombre = dato;
//   }

//   set precio_entrada(dato) {
//     this._precio_entrada = dato;
//   }

//   set boletos_vendidos(dato) {
//     this._boletos_vendidos = dato;
//   }
// }


export default class CinesUnidos {
  constructor(monto1, monto2, monto3, monto4) {
    this._monto1 = parseInt(monto1);
    this._monto2 = parseInt(monto2);
    this._monto3 = parseInt(monto3);
    this._monto4 = parseInt(monto4);
  }

  get monto1() {
    return this._monto1;
  }

  get monto2() {
    return this._monto2;
  }

  get monto3() {
    return this._monto3;
  }

  get monto4() {
    return this._monto4;
  }

  set monto1(dato) {
    this._monto1 = dato;
  }

  set monto2(dato) {
    this._monto2 = dato;
  }

  set monto3(dato) {
    this._monto3 = dato;
  }

  set monto4(dato) {
    this._monto4 = dato;
  }

  totalRecaudado() {
    return (this.monto1 + this.monto2 + this.monto3 + this.monto4)
  }
}



