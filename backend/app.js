'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Cargar Archivos de Rutas

// Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Cors

// Rutas
app.get('/', (req, res) => {
    res.status(200).send(
        "<h1>Página de Inicio</h1>"
    );
});

app.get('/test', (req, res) => {
    res.status(200).send({
        message: "Hola mundo desde mi api de nodejs"
    });
});

// Exportar
module.exports = app;