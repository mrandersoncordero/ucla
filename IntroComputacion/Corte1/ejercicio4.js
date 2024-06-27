/**
 UN PRODUCTO
De un producto se conoce su código, costo y tipo (1: Dama, 2: Caballero, 3: niño). Se sabe
que el precio base de venta del producto resulta de incrementar un 30% al costo del mismo;
además, el precio final del producto tiene un 10% de descuento si es para niños. Realice un
programa que muestre: el código, el precio base de venta, el descuento y el precio final.
*/

class Producto {
  constructor(codigo, costo, tipo) {
    this._codigo = codigo;
    this._costo = costo;
    this._tipo = tipo;
  }

  get codigo() {
    return this._codigo;
  }

  get costo() {
    return this._costo;
  }

  get tipo() {
    return this._tipo;
  }

  set codigo(dato) {
    this._codigo = dato;
  }

  set costo(dato) {
    this._costo = dato;
  }

  set tipo(dato) {
    this._tipo = dato;
  }

  descuento() {
    return this._tipo == 3 ? this._costo * .10 : 0; 
  }

  salida() {
    return `Codigo: ${this.codigo}\nPrecio base de venta: $${this.costo}\nDescuento: $${this.descuento()}\nPrecio final: $${this._costo - this.descuento()}`;
  }
}

let producto = new Producto('123', 39, 1)
console.log('-'.repeat(20));
console.log(producto.salida());

producto.codigo = '987';
producto.costo = 52;
producto.tipo = 3;

console.log('-'.repeat(20));
console.log(producto.salida());