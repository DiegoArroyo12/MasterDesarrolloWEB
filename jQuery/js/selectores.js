$(document).ready(() => {
    // Selector de ID
    var rojo = $("#rojo").css("background", 'red')
                         .css('color', 'white');

    $('#amarillo').css('background', 'yellow')
                  .css('color', 'green');

    $('#verde').css('background', 'green')
               .css('color', 'white');
    
    // Selector de Clases
    var miClase = $('.zebra').css('padding', '5px');
    //miClase.css('border', '5px dashed black');
    $('.sin_borde').click(function() {
        console.log('Click dado');
        $(this).addClass('zebra');
    });

    // Selectores de Etiqueta
    var parrafos = $('p').css('cursor', 'pointer ');

    parrafos.click(function(){
        var This = $(this);
        if (!This.hasClass('grande')) {            
            This.addClass('grande');
        } else{
            This.removeClass('grande');
        }
    });

    // Selectores de Atributos
    $('[title="Google"]').css('background', '#ccc');
    $('[title="Facebook"]').css('background', 'blue');

    // Otros
    $('p, a').addClass('margen-superior');

    var busqueda = $('#caja').find('.resaltado');
    console.log(busqueda);

    var google = $('#caja .resaltado').eq(0).parent().parent().parent().find('[title="Google"]');
    console.log(google);
});