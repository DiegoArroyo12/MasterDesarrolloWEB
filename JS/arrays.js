'use strict'

// Arrays
var nombres = ["Diego Arroyo", "Emmanuel Arteaga", "Emilio Varela", "Sarai Gómez"];

var elemento = parseInt(prompt('Qué elemento del array quieres?', 0));
if (elemento >= nombres.length) {
    alert('Introduce el número correcto menor que ' + nombres.length);
} else {
    alert(`El usuario seleccionado es: ${nombres[elemento]}`)
}

document.write('<h1>Nombres</h1>');
document.write("<ul>");

for (let i = 0; i < nombres.length; i++) {
    document.write("<li>"+nombres[i]+"</li>");
}

document.write("</ul>");

// ForEach
nombres.forEach((elemento, index, data) => { // Los otros son parámetros opcionales
    document.write("<li>"+elemento+"</li>")
});

document.write("</ul>");

// Multidimensionales
var categorias = ['Acción', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];

var cine = [categorias, peliculas]; // Un array con dos elementos que son un array cada uno

console.log(cine[0][1]);

// Operaciones con Arrays
peliculas.push("Batman"); // Añadir
peliculas.pop(); // Saca el último elemento
peliculas[0] = undefined; // Cambiamos el valor del primer elemento
var indice = peliculas.indexOf('Gran torino'); // Obtiene el índice de ese elemento si es -1 no encontró el elemento
if (indice > -1) {
    peliculas.splice(indice, 1); // Elimina el elemento que tiene ese índice
}
var peliculasString = peliculas.join(); // Un array a un string separados por comas

// Convertir un String a un Array
var cadena = "texto1, texto2, texto3";
var cadenaArray = cadena.split(", "); // Crea el array con elementos separados por coma y espacio

// Ordenar Arreglo
peliculas.sort(); // Ordena por orden alfabético
peliculas.reverse(); // Orden inverso

// Correr arreglos for in
for(let elemento in nombres){
    document.write("<li>"+nombres[elemento]+"</li>")
}
document.write("</ul>");

// Buscar en un Array
var busqueda = nombres.find(nombre => nombre == "Diego Arroyo"); // Busca el elemento y lo devuelve
var busqueda = nombres.findIndex(nombre => nombre == "Diego Arroyo"); // Devuelve el índice

var precios = [10, 20, 50, 80, 12];

var buscar = precios.some(precio => precio >= 79); // Busca en una condición concreta

// Ejercicio Array
/* 
1. Pida 6 números por pantalla y los meta en un array
2. Mostrar el array entero (todos los elementos) en el cuerpo de la página y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su índice (Se valorará el uso de funciones)
*/
const mostrarArray = (elementos, textoCustom="") => {
    document.write("<h1>Contenido del array"+textoCustom+"</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index) => {
        document.write("<strong>"+elemento+"</strong></br>");
    });
    document.write("</ul>");
};
// Pedir 6 números
var numeros = new Array(6);

for (let i = 0; i < 5; i++) {
    numeros.push(parseInt(prompt("Introduce un número: ", 0)));
}
// Mostrar en el cuerpo de la página
mostrarArray(numeros);

// Mostrar array en la consola
console.log(numeros);

// Ordenar y mostar
numeros.sort();
mostrarArray(numeros, 'ordenado');
console.log(numeros);

// Invertir y mostrar
numeros.reverse();
mostrarArray(numeros, 'revertido');

// Contar elementos
document.write("<h1>El array tiene: "+numeros.length+"<h1>");

// Busqueda
var busqueda = parseInt(prompt("Busca un número", 0));
var posicion = numeros.findIndex(numero => numero == busqueda);

if (posicion && posicion != -1) {
    document.write("<hr/><h1>ENCONTRADO</h1>");
    document.write("<h1>Posición de la búsqueda: "+posicion+"</h1><hr/>");
} else {
    document.write("<hr/><h1>NO ENCONTRADO</h1><hr/>");
}