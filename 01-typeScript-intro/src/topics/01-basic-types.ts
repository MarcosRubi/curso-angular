// Asignar tipos a variables
let username: string;
let age: number;

username = "Marcos Rubí";
age = 24;

//Indicamos el tipo de dato a cada prop que se le pasa a la función e indicamos el tipo de dato que debe retornar la función
function sayHi({ username, age }: { username: string; age: number }): string {
  return `Hola ${username}, tienes ${age} años`;
}

const result = sayHi({ username: "Marcos Rubí", age: 24 });
console.log(result);

//Crear nuestros propios tipos
type LanguageId = `${string}-${string}-${string}-${string}`;
type Languages = {
  id: LanguageId;
  name: string;
  numberOfProjects: number;
  score: number;
  isCurrentlyUsing?: boolean; // Parámetro opcional, pero en caso de existir debe ser un valor booleano
};

let languages: Languages = {
  //id: 234342234, -> Error, no cumple el template
  id: crypto.randomUUID(),
  name: "HTML",
  numberOfProjects: 100,
  score: 9.3,
};

interface Type1 {
  readonly id: number;
  name: string;
  age?: number;
}
type Type2 = {
  readonly id: number;
  lastName: string;
};

type Types = Type1 & Type2;

const test: Types = {
  id: 21213,
  name: "Marcos",
  lastName: "Rubí",
};
//test.id = 9999 -> Agrengando el readonly te indica que su valor no se debería mutar, en js vanilla se puede obtener el mismo resultado con Object.freeze()
console.log(test);

//Tuplas

//Configurar las restricciones para el juego 3 en raya
type CellValue = "X" | "O" | ""; // UnionType, indicamos cuales son los valores exactos que puede tener
type Board = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue]
];

const gameBoard: Board = [
  ["O", "X", "O"],
  ["", "X", "X"],
  ["X", "O", ""],
];

//Indicar los formatos para hexadecimales y RGBA
type Hexadecimal = `#${string}`;
type Rgba = readonly [number, number, number, number?]; // Readonly, si no se aplica se puede hacer un push a la variable

let primaryColor: Hexadecimal;
primaryColor = "#009933";

let bgFooter: Rgba;
bgFooter = [255, 255, 255];

/*bgFooter.push(2)
bgFooter.push(5)
*/

console.log(bgFooter);

//Enums
//Recomendable usar const para evitar que se genere al compilar, pero si es un componente que se va a mandar afuera de la aplicación se recomienda
// no usar el const para que se manden el enum
const enum TYPES_ERRROR {
  NOT_FOUND,
  UNAUTHORIZED,
  FORBIDDEN,
}

function showError(error: TYPES_ERRROR) {
  if (error === TYPES_ERRROR.NOT_FOUND) {
    console.log("Not Found");
  } else if (error === TYPES_ERRROR.UNAUTHORIZED) {
    console.log("Unauthorized");
  } else {
    console.log("Forbidden");
  }
}

//Instaceof
const canvas = document.querySelector("canvas");

//Si el elemento capturado es una etiqueta canvas ejecuta lo que este dentro de la condición y al mismo tiempo le asigna el type
if (canvas instanceof HTMLCanvasElement) {
  canvas.getContext("2d");
}
