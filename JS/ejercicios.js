/* Programa que pida dos números y que nos diga cual es el mayor, el menor y si son iguales */
var numero1 = parseInt(prompt("Ingresa el primer número:"));
var numero2 = parseInt(prompt("Ingresa el segundo número:"));

if(numero1 == numero2){
    alert(numero1 + " es igual a " + numero2)
} else if(numero1 > numero2){
    alert(numero1 + " es mayor que " + numero2)
} else {
    alert(numero2 + " es mayor que " + numero1)
}

/* Utilizando un bucle, mostrar la suma y la media de los numero introducidos hasta introducir un número negativo y ahí mostrar el resultado */
var suma = 0;
var contador = 0;

do {
    var numero = parseInt(prompt('Introduce números hasta que metas uno negativo', 0));

    if (isNaN(numero)) {
        numero = 0;
    } else if(numero >= 0){
        suma += numero;

        contador++;
    }

    console.log(suma);
    console.log(contador);

} while (numero >= 0);

alert("La suma de todos los números es: " + suma);
alert('La media de todos los números es: ' + (suma/contador));

/* Hacer un programa que muestre todos los números entre dos números introducidos por el usuario */
document.write("<h1>De"+numero1+" a "+numero2+" están estos números:</h1>");
for (let i = numero1; i < numero2; i++) {
    document.write(i+"<br/>");
}

/* Mostrar todos los números impares que hay en los dos números introducidos por el usuario */
while (numero1 < numero2) {
    numero1++;

    if (numero1%2 != 0) {
        console.log('El '+numero1+' es impar.');
    }
}

/* Muestre todos los números divisores de un número introducido. */
for(var i = 1; i <= numero2; i++){
    if (numero%i == 0) {
        console.log('Divisor: '+i)
    }
}

/* Que nos diga si un número es par o impar. 1. Ventana promp. 2. Si no es valido que nos pida de nuevo el número. */
var numeroValidar = parseInt(prompt('Introduce un número: ', 0));

while (isNaN(numeroValidar)) {
    numeroValidar = parseInt(prompt('Introduce un número: ', 0));
}

if (numeroValidar%2 == 0) {
    alert("Es un número par");
} else {
    alert('Es impar');
}

/* Tabla de multiplicar de un número introducido por pantalla. */
var tabla = parseInt(prompt('¿De qué número quieres la tabla?', 1));

for(var i = 1; i <= 10; i++){
    document.write(i+' x '+tabla+' = '+(i*tabla)+'<br/>');
}

/* Todas las tablas de multiplicar */
for(var c = 1; c <= 10; c++){
    document.write('<h1>Tabla del '+c+'</h1>');
    for(var i = 1; i <= 10; i++){
        document.write(i+' x '+c+' = '+(i*c)+'<br/>');
    }
}

/* 
Calculadora:
- Pida dos números por pantalla
- Si metemos uno mal que nos los vuelva a pedir
- En el cuerpo de la página, en una alerta y por la consola el resultado de sumar, restar, multiplicar y dividir esas dos cifras.
*/
var numeroCalculadora = parseInt(prompt('Introduce el primer número: ', 0));
var numeroCalculadora2 = parseInt(prompt('Introduce el segundo número: ', 0));

while (numeroCalculadora < 0 || numeroCalculadora2 < 0 || isNaN(numeroCalculadora) || isNaN(numeroCalculadora2)) {
    var numeroCalculadora = parseInt(prompt('Introduce el primer número: ', 0));
    var numeroCalculadora2 = parseInt(prompt('Introduce el segundo número: ', 0));
}

var resultadoCalculadora = 'La suma es: ' +(numeroCalculadora + numeroCalculadora2)+' <br/>'+
                           'La resta es: ' +(numeroCalculadora - numeroCalculadora2)+' <br/>'+
                           'La multiplicación es: ' +(numeroCalculadora * numeroCalculadora2)+' <br/>'+
                           'La división es: ' +(numeroCalculadora / numeroCalculadora2)+' <br/>';

var resultadoCalculadoraCMD = 'La suma es: ' +(numeroCalculadora + numeroCalculadora2)+'\n'+
                           'La resta es: ' +(numeroCalculadora - numeroCalculadora2)+'\n'+
                           'La multiplicación es: ' +(numeroCalculadora * numeroCalculadora2)+'\n'+
                           'La división es: ' +(numeroCalculadora / numeroCalculadora2)+'\n';

document.write(resultadoCalculadora);
alert(resultadoCalculadoraCMD)
console.log(resultadoCalculadoraCMD)