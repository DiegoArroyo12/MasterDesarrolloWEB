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

    // Soltar elemento
    $('#elemento-movido').draggable();
    $('#area').droppable({
        drop: function () { 
            console.log('Has soltado algo dentro de el área.');
        }
    });

    // Efectos
    $('#mostrar').click(function () {         
        $('.caja-efectos').toggle('shake', 'slow'); // También podemos usar ms
    });

    // Tooltip
    $(document).tooltip();

    // Dialog
    $('#lanzar-popup').click(function () { 
        $('#popup').dialog();
    });

    // Datepicker
    $('#calendario').datepicker();
});