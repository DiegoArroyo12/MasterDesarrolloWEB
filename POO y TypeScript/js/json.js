var bicicleta = {
    color: 'Rojo',
    modelo: 'BMX',
    frenos: 'De disco',
    velocidadMaxima: '60km',
    cambiaColor: function(nuevoColor) {
        this.color = nuevoColor;
    }
};

bicicleta.cambiaColor('Azul');
console.log(bicicleta);