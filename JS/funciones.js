function calculadora(numero1, numero2) {
    console.log('Suma: ' + (numero1 + numero2));
    console.log('Resta: ' + (numero1 - numero2));
    console.log('Multiplicación: ' + (numero1 * numero2));
    console.log('División: ' + (numero1 / numero2));
    console.log('***************************************');
}

for (let i = 0; i < 10; i++) {
    console.log(i);
    calculadora(i, 8);
}

// Parámetros Opcionales
function calculadora(numero1, numero2, mostrar = false) {
    if (mostrar == true) {
        console.log("Suma: " + (numero1 + numero2));
        console.log("Resta: " + (numero1 - numero2));
        console.log("Multiplicación: " + (numero1 * numero2));
        console.log("División: " + (numero1 / numero2));
        console.log("****************************************");
    } else {
        document.write("Suma: " + (numero1 + numero2)+"<br/>");
        document.write("Resta: " + (numero1 - numero2)+"<br/>");
        document.write("Multiplicación: " + (numero1 * numero2)+"<br/>");
        document.write("División: " + (numero1 / numero2)+"<br/>");
        document.write("****************************************"+"<br/>");
    }
}

// Invocar o llamar a la función
calculadora(1,4);
calculadora(2,5, true);

// Funciones Anidadas
function porConsola(numero1, numero2) {
    console.log("Suma: " + (numero1 + numero2));
    console.log("Resta: " + (numero1 - numero2));
    console.log("Multiplicación: " + (numero1 * numero2));
    console.log("División: " + (numero1 / numero2));
    console.log("****************************************");
}

function porPantalla(numero1, numero2) {
    document.write("Suma: " + (numero1 + numero2));
    document.write("Resta: " + (numero1 - numero2));
    document.write("Multiplicación: " + (numero1 * numero2));
    document.write("División: " + (numero1 / numero2));
    document.write("****************************************");
}

function calculadora(numero1, numero2, mostrar = false) {
    if (mostrar == true) {
        porConsola(numero1, numero2);
    } else {
        porPantalla(numero1, numero2);
    }
}

calculadora(2,6);
calculadora(9,8, true);

// Parámetros rest y spread
function listadoFrutas(fruta1, fruta2, ...restoFrutas) {
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
    // Al poner los tres puntos antes de la variable, hacemos que todos los parámetros que se le pasen después de los dos primeros parámetros, se agrupen en un array
    console.log(restoFrutas); // REST
}

// SPREAD
var frutas = ['Naranja', 'Manzana'];
// Toma los elementos del array como si fueran cada uno un parámetro
listadoFrutas(...frutas, 'Sandía', 'Pera', 'Melón', 'Coco');

// Funciones anónimas y callbacks
var pelicula = function(nombre){
    return 'La película es: ' + nombre;
};

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos) {
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

sumame(2,7, function(dato){
    console.log("La suma es: ", dato);
},
function(dato){
    console.log("La suma por dos es: ", dato*2);
});

// Funciones flecha
sumame(2,7, dato => {
    console.log("La suma es: ", dato);
},
dato => {
    console.log("La suma por dos es: ", dato*2);
});

// Ámbito de las variables
function holaMundo(texto) {
    // Locales
    var hola = 'Texto dentro de función';
    console.log(texto);
    console.log(numero);
    console.log(hola);
}
// Globales
var numero = 12;
var texto = 'Hola mundo soy una variable global';
holaMundo(texto);

// Métodos para procesar textos

var numero = 444;
var texto1 = 'Bienvenido al curso de JavaScript curso de Diego';
var texto2 = 'es un muy buen curso';

var dato = numero.toString(); // A String
var dato2 = texto1.toUpperCase(); // A Mayúsculas
var dato3 = texto2.toLowerCase(); // A Minúsculas

/* Calcular longitud */
var nombre = "Diego";
console.log(nombre.length); // También sirve con arrays

/* Concatenar - Unir Textos */
var textoTotal = texto1.concat(' '+texto2);

// Métodos de búsqueda
var busqueda = texto1.indexOf('curso'); // Encuentra la primera coincidencia
var busqueda2 = texto1.lastIndexOf('curso'); // Encuentra la última coincidencia
var busqueda3 = texto1.search('cursos'); // Si no lo encuentra devuelve -1
var busqueda4 = texto1.match(/curso/g); // Devuelve un array con más detalles de la búsqueda (la g es de global)
var busqueda5 = texto1.substring(14,5); // A partir de la posición 14, extrae 5 caracteres
var busqueda6 = texto1.charAt(44); // Seleccionar una letra concreta de un string
var busqueda7 = texto1.startsWith('Bi'); // Busca esa palabra al inicio de los strings
var busqueda8 = texto1.endsWith('Diego'); // Busca esa palabra al final de los strings
var busqueda9 = texto1.includes('JavaScript'); // Busca si existe la palabra y regresa un boolenao

// Funciones de reemplazo
var reemplazo = texto1.replace('JavaScript', 'Python'); // Reemplaza el primer parámetro por el segundo
var acortar = texto1.slice(14, 22); // Muestra el string a partir del caracter 14 al 22 (segundo parámetro opcional)
var arreglo = texto1.split(" "); // Sin parámetro mete todo el string a un array y según el parámetro, busca el caracter en el string y lo separa con esas coincidencias
var formato = texto1.trim(); // Quita los espacio al principio y al final de un string

// Plantillas de texto
var nombre = prompt('Mete tu nombre');
var apellidos = prompt('Mete tus apellidos');

// Las comillas invertidas para hacer multilínea y formato a los strings
var texto = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mis apellidos son: ${apellidos}</h3>
`;
document.write(texto);