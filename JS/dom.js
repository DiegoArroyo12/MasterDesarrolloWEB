'use strict'

// DOM - Document Object Model

const cambiaColor = (color) => {
    caja.style.back = color;
};

//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");

caja.innerHTML = "¡Texto en la caja desde JS";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola hola2";

console.log(caja);

// Seleccionar y modificar elementos de la página
/* Conseguir elemento por su etiqueta */
var todosDivs = document.getElementsByTagName('div');
var seccion = document.querySelector("#miseccion")
var hr = document.createElement("hr");

var contenidoTexto = todosDivs[2].textContent;
// Cambiar el texto del div
contenidoTexto.innerHTML = "Otro texto para el segundo elemento";

todosDivs.forEach((valor, indice) => {
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(valor);
    parrafo.appendChild(texto);
    //document.querySelector("#miseccion").appendChild(parrafo); // Para este debe ser un for in
});

var valor;
for (valor in todosDivs) {
    if (typeof todosDivs[valor].textContent == 'string') {
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
}
seccion.append(hr);

/* Agregar esta sección en el html */
/* 
<section id="miseccion">
    <h1>Listado de textos de los divs</h1>
</section>
*/

console.log(contenidoTexto);