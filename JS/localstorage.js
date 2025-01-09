'use strict'

// LocalStorage

// Comprobar disponibilidad el LocalStorage
if (typeof(Storage) !== 'undefined') {
    console.log('LocalStorage disponible');
} else {
    console.log('Incompatible con LocalStorage');
}

// Guardar Datos
localStorage.setItem("titulo", "Curso Angula");

// Recuperar Elemento
var titulo = localStorage.getItem("titulo");

// Guardar objetos
var usuario = {
    nombre: "Diego Arroyo",
    email: 'diego.arroyo@gmail.com',
    web: 'diegoarroyo.com'
};

localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar Objeto
var userJS = JSON.parse(localStorage.getItem('usuario'));

// Eliminar un elemento localStorage
localStorage.removeItem("usuario");

// Eliminar todo el localStorage 
localStorage.clear();