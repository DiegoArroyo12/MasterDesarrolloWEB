'use strict'

// JSON - JavaScript Object Notation

var pelicula = {
    titulo: 'Batman vs Superman',
    year: 2017,
    pais: 'Estados Unidos'
};

pelicula.titulo = "Superman Begins";

var peliculas = [
    {titulo: 'La verdad duele', year: 2016, pais: 'Francia'},
    pelicula
];

var cajaPeliculas = document.querySelector("#peliculas");
var index;
for(index in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[index].titulo + " - " + peliculas[index].year);
    cajaPeliculas.append(p);
}