// String
let cadena: string = "Diego Arroyo";

// Number
let numero: number = 12;

// Booleano
let verdaderoFalso: boolean = true;

// Any
let cualquiera: any = 'hola';
cualquiera = 77;

// Array
var lenguajes: Array<string> = ['PHP', 'JS', 'CSS'];

let years: number[] = [12, 13, 14, 15];

let mucho: any[] = ['Hola', 56, true];

console.log(cadena, numero, verdaderoFalso, cualquiera, lenguajes, years, mucho);

let telefono: string | number = 'Diego';
console.log(telefono);

telefono = 5546;
console.log(telefono);

// Crear un tipo de dato personalizado
type alfanumerico = string | number;

let direccion: alfanumerico = 'AV.Central ' + 471
console.log(direccion);