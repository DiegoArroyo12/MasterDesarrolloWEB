'use strict'

/* Empieza a devolver desde el 1 la ruta del archivo, por eso debemos ocupar siempre desde el 2 en el slice */
var params = process.argv.slice(2);

var numero = parseFloat(params[0]);
var numero2 = parseFloat(params[1]);

var plantilla = `
La suma es: ${numero + numero2}
La resta es: ${numero - numero2}
La multiplicación es: ${numero * numero2}
La divsión es: ${numero / numero2}
`

console.log(plantilla)
console.log("Hola Mundo con NodeJS");