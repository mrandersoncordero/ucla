/**
CINES UNIDOS
Cines Unidos necesita que se realice un programa que muestre el total recaudado en las 4
películas proyectadas, sabiendo el valor promedio pagado por los espectadores en cada película.
*/

class Pelicula {
  constructor(nombre, precio_entrada, boletos_vendidos) {
    this._nombre = nombre;
    this._precio_entrada = precio_entrada;
    this._boletos_vendidos = boletos_vendidos;
  }

  get nombre() {
    return this._boletos_vendidos;
  }

  get precio_entrada() {
    return this._precio_entrada;
  }

  get boletos_vendidos() {
    return this._boletos_vendidos;
  }

  set nombre(dato) {
    this._nombre = dato;
  }

  set precio_entrada(dato) {
    this._precio_entrada = dato;
  }

  set boletos_vendidos(dato) {
    this._boletos_vendidos = dato;
  }
}


class CinesUnidos {
  constructor(peliculas) {
    this._peliculas = [peliculas];
  }

  get peliculas() {
    return this._peliculas;
  }

  agregarPelicula(pelicula) {
    this._peliculas.push(pelicula);
  }

}

var readline = require('readline-sync');

function tomarDatos() {
  const nombre = readline.question('Nombre de la pelicula: ');
  const precio = readline.question(`Digita el precio de la pelicula ${nombre}: `);
  const boletos_vendidos = readline.question(`Digita la cantidad de boletos vendidos: `);
  console.log('\n');

  let pelicula = new Pelicula(nombre, precio, boletos_vendidos);

  return pelicula;
}

let add = true;

do {
  let cines = new CinesUnidos(tomarDatos())
  
  let desicion = readline.question('Desea agregar otra pelicula? [S]Si o [N]No ').toLowerCase();
  console.log('\n');

  if (desicion === 's' || (desicion !== 's' && desicion !== 'n')) {
    cines.agregarPelicula(tomarDatos());
  }else{
    add = false
  }
} while (add == true);

console.log(cines.peliculas);

