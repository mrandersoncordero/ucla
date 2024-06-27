/*
UN VENDEDOR
De un vendedor se conoce su cédula y el monto total de sus ventas. Se sabe que el vendedor
se gana una comisión del 20% del monto total de sus ventas. Se requiere un programa que
muestre la cédula del vendedor y el monto a cobrar por comisiones.
*/

class Vendedor {
  constructor(cedula, total_ventas) {
    this._cedula = cedula;
    this._total_ventas = total_ventas;
  }

  get cedula() {
    return this._cedula;
  }

  get total_ventas() {
    return this._total_ventas;
  }

  set cedula(dato) {
    this._total_ventas = dato;
  }

  set total_ventas(monto) {
    this._total_ventas = monto;
  }

  montoPorComision() {
    let comision = .20;
    return this._total_ventas * comision
  }
}


let vendedor = new Vendedor('27410753', 500)

console.log('-'.repeat(20));
console.log('Cedula del vendedor:', vendedor.cedula);
console.log('Monto por comisión: ', `$${vendedor.montoPorComision()}`, '\n');

vendedor.total_ventas = 2000;

console.log('-'.repeat(20));
console.log('Cedula del vendedor:', vendedor.cedula);
console.log('Monto por comisión: ', `$${vendedor.montoPorComision()}`, '\n');
