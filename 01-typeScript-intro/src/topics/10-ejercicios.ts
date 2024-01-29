//EJERCICIO 1
// var nombre;
// nombre = "Miguelo";
// var edad;
// edad = 30;
// var PERSONAJE = {
//   nombre: nombre,
//   edad: edad,
// };

let nombre: string;
nombre = "Miguelo";
let edad: number;
edad = 30;

const PERSONAJE = {
  nombre: nombre,
  edad: edad,
};

// EJERCICIO 2
// var spiderman = {
//   nombre: "Peter parket",
//   poderes: ["trepar", "fuerza", "agilidad", "telas de araña"],
// };
interface Spiderman {
  nombre: string;
  poderes: string[];
}

let spiderman: Spiderman = {
  nombre: "Peter parket",
  poderes: ["trepar", "fuerza", "agilidad", "telas de araña"],
};

// EJERCICIOS 3
// Ahora en TypeScript vamos a crear la clase Rombo, la cual debe tener dos propiedades:
// DiagonalVertical y DiagonalHorizontal.
// Le añadiremos un constructor al que le pasaremos los valores anteriores cuando instanciemos el objeto.
// Y también debe de tener un método que calcule el area, que será la multiplicación de DiagonalVertical * DiagonalHorizontal.
// Este método devolverá un número.

class Rombo {
  constructor(
    public diagonalVertical: number,
    public diagonalHorizontal: number
  ) {
    this.diagonalVertical = diagonalVertical;
    this.diagonalHorizontal = diagonalHorizontal;
  }
  public calculate() {
    return this.diagonalVertical * this.diagonalHorizontal;
  }
}
class Rombo2 {
  public diagonalVertical: number;
  public diagonalHorizontal: number;
  constructor(
    nuevoValorDiagonalVertical: number,
    nuevoValorDiagonalHorizontal: number
  ) {
    this.diagonalVertical = nuevoValorDiagonalVertical;
    this.diagonalHorizontal = nuevoValorDiagonalHorizontal;
  }
  public calculate() {
    return this.diagonalVertical * this.diagonalHorizontal;
  }
}

const area1 = new Rombo(5, 5);
console.log(area1.calculate());

const area2 = new Rombo2(13, 15);
console.log(area2.calculate());

// EJERCICIO 4
// function suma(a, b) {
//   return a + b;
// }

const suma = (a: number, b: number): number => {
  return a + b;
};
console.log("suma:", suma(10, 5));
