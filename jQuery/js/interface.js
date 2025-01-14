$(document).ready(function(){
    var elemento = $('.elemento');
    // Mover elemento por la página
   elemento.draggable();

   // Redimensionar elementos
    elemento.resizable();

    // Seleccionar elementos
    //$('.lista-seleccionable').selectable();

    // Ordenar elementos
    $('.lista-seleccionable').sortable({
        update: function (event, ui) { 
            console.log('Ha cambiado la lista');
        }
    });
});