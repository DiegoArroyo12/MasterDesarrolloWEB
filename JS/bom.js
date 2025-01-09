'use strict'

// BOM - Browser Object Model

console.log(window.innerHeight); // Altura de la ventana (modificable)
console.log(window.innerWidth); // Anchura de la ventana (modificable)

console.log(screen.width); 
console.log(screen.height); // Altura de la ventana (condtsnte)

const redirect = (url) => {
    window.location.href = url;
};

const abrirVentana = (url) => {
    window.open(url, "", "width=400, height=300");
};

// Eventos

/* 
<button id="button" onclick="cambiarColor();">Presioname</button>
*/

var boton = document.querySelector("#boton");

const cambiarColor = () => {
    var bg = boton.style.background;
    if (bg == "green") {
        boton.style.background = "red";
    } else {
        boton.style.background = "green"
    }
};

// Event Listener
boton.addEventListener('click', () => {
    cambiarColor();
});

boton.addEventListener('mouseover', () => { // Sobre el botón
    cambiarColor();
});

boton.addEventListener('mouseout', () => { // Salir del botón
    cambiarColor();
});

// Eventos de teclado
/* 
<form>
    <input type="text" name="nombre" id="campo_nombre" />
</form>
*/

var input = document.querySelector("#campo_nombre");

// Focus
input.addEventListener('focus', () => {
    console.log('Estas dentro del input');
});
// Blur
input.addEventListener('blur', () => {
    console.log('Saliste del input');
});
// Keydown
input.addEventListener('keydown', (event) => {
    console.log('Estas pulsando esta tecla ', String.fromCharCode(event.keyCode))
});
// Keypress
input.addEventListener('keypress', (event) => {
    console.log('Tecla presionada ', String.fromCharCode(event.keyCode));
});
// Keyup
input.addEventListener('keyup', (event) => {
    console.log('Tecla soltada ', String.fromCharCode(event.keyCode));
});

// Event Load
window.addEventListener('load', () => {
    // Todo lo que este aquí se ejecutará después de que cargue el DOM

    // Timers
    var tiempo = setInterval(() => {
        console.log("Set interval ejecutado");
    }, 3000);

    var stop = document.querySelector("#stop");

    stop.addEventListener('click', () => {
        console.log('Haz parado el intervalo en bucle.')
        clearInterval(tiempo);
    });
});