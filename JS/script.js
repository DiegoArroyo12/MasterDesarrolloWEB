var pais = "México";
var continente = "América";

console.log(pais, continente);

var texto = "Curso JS";
console.log(texto);

if (true) {
    "Let maneja los cambios por bloque y no como var que es distinto."
    let texto = "Curso Laravel";
    console.log(texto); 
}

console.log(texto);

var web = "https://youtube.com";
const ip = "192.80.0.12"; 

web = "facebook"
//ip = "12345"

console.log(web, ip); // Una variable constante no puede cambiar

var numero1 = 7;
var numero2 = 12;
var operacion = numero1 + numero2;

//alert("El resultado de la operación es: " + operacion)

var numeroFalso = "33";
console.log(parseInt(numeroFalso)+7);

console.log(typeof numeroFalso);
console.log(typeof numero1);

var edad = 21;
var nombre = "Diego Arroyo";

if(edad >= 18){
    // Es mayor de edad
    console.log(nombre + " tiene " + edad + " años, es mayor de edad");

    if(edad <= 33){
        console.log("Todavía eres millenial");
    } else if(edad >= 70){
        console.log("Eres anciano");
    } else {
        console.log("Ya no eres millenial");
    }
} else {
    // Es menor de edad
    console.log(nombre + " tiene " + edad + " años, es MENOR de edad");
}

// Switch
var edad = 25;
var imprime = "";

switch (edad) {
    case 18:
        imprime = "Acabas de cumplir la mayoría de edad";
        break;
    case 25:
        imprime = "Ya eres un adulto";
        break;
    case 40:
        imprime = "Crisis de los cuarenta";
        break;
    case 74:
        imprime = "Eres ya un anciano";
    default:
        imprime = "Tu edad es neutra"
        break;
}
console.log(imprime);

// For
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// While
var year = 2018;

while(year <= 2051){
    console.log("Estamos en el año: " + year);
    year++;
}

// Do While
var years = 2020;
do {
    console.log(years)
    break;
} while (years != 2025);