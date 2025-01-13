var fecha = new Date();

var year = fecha.getFullYear(); // 2025
var mes = fecha.getMonth();     // 0 (Enero)
var dia = fecha.getDate();      // 13
var hora = fecha.getHours();    // 14 (2 pm)

var texto = `
    El año es: ${year}
    El mes es: ${mes}
    El dia es: ${dia}
    La hora es: ${hora}
`;

console.log(texto);