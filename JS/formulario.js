'use strict'

window.addEventListener('load', () => {
    var formulario = document.querySelector("#formulario");
    var boxDashed = document.querySelector(".dashed");    
    boxDashed.style.display = "none";

    formulario.addEventListener('submit', () => {
        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = document.querySelector("#edad").value;

        if (nombre.trim() == null || nombre.trim().length == 0) {
            alert('El nombre no es válido.')
            document.querySelector("#error_nombre").innerHTML = "El nombre no es válido.";
            return false;
        } else {
            document.querySelector("#error_nombre").style.display = 'none';
        }

        if (apellidos.trim() == null || apellidos.trim().length == 0) {
            alert('El apellido no es válido.')
            return false;
        }

        if (edad == null || edad <= 0 || isNaN(edad)) {
            alert('La edad no es válida.')
            return false;
        }

        boxDashed.style.display = "block";

        var datosUsuario = [nombre, apellidos, edad];

        var p_nombre = document.querySelector("#p_nombre span");      
        var p_apellidos = document.querySelector("#p_apellidos span");      
        var p_edad = document.querySelector("#p_edad span");

        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellidos;
        p_edad.innerHTML = edad;
    })
});