$(document).ready(function(){
   
    // Load - Incrustar Resultados en un html
    var datos = $('#datos');
    var formulario = $('#formulario');

   // datos.load('https://reqres.in/');

    // Get y Post
    // $.get("https://reqres.in/api/users", {page: 2},
    //     function (response) {
    //         console.log(response);
    //         response.data.forEach((element, index) => {
    //             datos.append('<p>'+element.first_name+" "+element.last_name+'</p>')
    //         });
    // });

    formulario.submit(function (e) { 
        e.preventDefault(); // Para no ser redirijidos
        var usuario = {
            'name': $('input[name="name"]').val(),
            'edad': $('input[name="age"]').val()
        }
        console.log(usuario);
        $.post($(this).attr('action'), usuario,
            function (response, textStatus, jqXHR) {
                console.log(response)
        }).done(function() { 
            alert('Usuario añadido correctamente');
         });
        return false;
    });
});