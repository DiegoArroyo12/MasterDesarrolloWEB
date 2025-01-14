$(document).ready(function(){
    var caja = $('#caja');
    var mostrar = $('#mostrar');
    var ocultar = $('#ocultar');
    var abrir = $('#todoenuno');
    var animame = $('#animame');

    mostrar.hide();

    mostrar.click(function (e) {
        $(this).hide();
        ocultar.show();
        caja.show('fast'); // normal
        caja.fadeIn('slow');
        caja.fadeTo('slow', 1);
    });
    
    ocultar.click(function (e) {
        $(this).hide();
        mostrar.show();
        caja.hide('fast'); // normal
        caja.fadeOut('slow');
        caja.fadeTo('slow', 0);
        caja.slideDown('fast');
    });

    abrir.click(function(){
        caja.toggle('fast');
        caja.fadeToggle('fast');
        caja.slideToggle('fast'); // Desplegable
        caja.slideUp('fast');        
    });

    animame.click(function() { 
        caja.animate({
                marginLeft: '500px',
                fontSize: '40px',
                height: '100px'
            }, 'slow')
            .animate({
                borderRadius: '900px',
                marginTop: '80px',
            }, 'slow')
            .animate({
                borderRadius: '0px',
                marginLeft: '0px'
            }, 'slow')
            .animate({
                borderRadius: '900px',
                marginTop: '0px',
            }, 'slow');
    });
});