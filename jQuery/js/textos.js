$(document).ready(function(){

    reloadLinks();

    $('#add_button').click(function (e) { 
        //$('#menu').html('<li><a href="'+$('#add_link').val()+'"></a></li>'); // Elimina lo que ya existe
        $('#menu').append('<li><a href="'+$('#add_link').val()+'"></a></li>'); // Agrega
        reloadLinks();
    });
});

reloadLinks = () => {
    $('a').each(function (index, element) {
        var that = $(this);  
        var enlace = that.attr('href');

        that.attr('target', '_blank'); // Abrir en nueva pestaña
        that.text(enlace);        
    });
};