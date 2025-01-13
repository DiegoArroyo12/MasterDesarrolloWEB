$(document).ready(function(){
   
    // MouseOver y MouseOut
    var caja = $('#caja');

    caja.mouseover(function () { 
        $(this).css('background', 'red');
    });

    caja.mouseout(function () { 
        $(this).css('background', 'green');
    });

    // Hover
    caja.hover(function () {
            // over
            $(this).css('cursor', 'pointer');
        }, function () {
            // out
            $(this).css('cursor', 'none');
        }
    );

    // Click, Doble Click
    caja.click(function (e) { 
        $(this).css('background', 'blue')
               .css('color', 'white');
    });

    caja.dblclick(function (e) { 
        $(this).css('background', 'pink')
               .css('color', 'yellow');
    });

    // Focus y Blur
    $('#nombre').focus(function (e) { 
        $(this).css('border', '2px solid green');
    });

    $('#nombre').blur(function (e) { 
        $(this).css('border', '1px solid gray');
        $('#datos').text($(this).val()).show();
    });

    // MouseDown y MouseUp
    $('#datos').mousedown(function () { 
        $(this).css('border-color', 'gray');
    });

    $('#datos').mouseup(function () { 
        $(this).css('border-color', 'black');
    });

    // MouseMove
    $(document).mousemove(function (e) { 
        // values: e.clientX, e.clientY, e.pageX, e.pageY
        // Eliminar el cursor
        $('body').css('cursor', 'none');
        $('#sigueme').css('left', event.clientX)
                     .css('top', event.clientY);
    });
});