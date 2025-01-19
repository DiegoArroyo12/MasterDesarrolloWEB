$(document).ready(function(){

  // Slider
  if (window.location.href.indexOf('index') > -1) {
    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1200
    });
  }

  // Posts
  const date = new Date();
  month = date.toLocaleString('default', {month: 'long'});
  var posts = [
    {
      title: 'Prueba de título 1',
      date: `Publicado el día ${new Date().getDate()} de ${month} del ${new Date().getFullYear()}`,
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore quos fugit repellendus quae debitis minima! Ratione, modi. Vitae, quibusdam? Quo facere at itaque obcaecati molestiae iste aut amet placeat dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, culpa veniam! Qui praesentium soluta iure! Dolorum, sequi? Rem ipsum accusantium sint odit excepturi pariatur voluptatibus assumenda ullam nostrum incidunt. Omnis? '
    },
    {
      title: 'Prueba de título 2',
      date: `Publicado el día ${new Date().getDate()} de ${month} del ${new Date().getFullYear()}`,
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore quos fugit repellendus quae debitis minima! Ratione, modi. Vitae, quibusdam? Quo facere at itaque obcaecati molestiae iste aut amet placeat dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, culpa veniam! Qui praesentium soluta iure! Dolorum, sequi? Rem ipsum accusantium sint odit excepturi pariatur voluptatibus assumenda ullam nostrum incidunt. Omnis? '
    },
    {
      title: 'Prueba de título 3',
      date: `Publicado el día ${new Date().getDate()} de ${month} del ${new Date().getFullYear()}`,
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore quos fugit repellendus quae debitis minima! Ratione, modi. Vitae, quibusdam? Quo facere at itaque obcaecati molestiae iste aut amet placeat dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, culpa veniam! Qui praesentium soluta iure! Dolorum, sequi? Rem ipsum accusantium sint odit excepturi pariatur voluptatibus assumenda ullam nostrum incidunt. Omnis? '
    },
    {
      title: 'Prueba de título 4',
      date: `Publicado el día ${new Date().getDate()} de ${month} del ${new Date().getFullYear()}`,
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore quos fugit repellendus quae debitis minima! Ratione, modi. Vitae, quibusdam? Quo facere at itaque obcaecati molestiae iste aut amet placeat dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, culpa veniam! Qui praesentium soluta iure! Dolorum, sequi? Rem ipsum accusantium sint odit excepturi pariatur voluptatibus assumenda ullam nostrum incidunt. Omnis? '
    },
    {
      title: 'Prueba de título 5',
      date: `Publicado el día ${new Date().getDate()} de ${month} del ${new Date().getFullYear()}`,
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore quos fugit repellendus quae debitis minima! Ratione, modi. Vitae, quibusdam? Quo facere at itaque obcaecati molestiae iste aut amet placeat dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, culpa veniam! Qui praesentium soluta iure! Dolorum, sequi? Rem ipsum accusantium sint odit excepturi pariatur voluptatibus assumenda ullam nostrum incidunt. Omnis? '
    }
  ];
  
  posts.forEach((element, index) => {
    var post = `
        <article class="post">
          <h2>${element.title}</h2>
          <span class="date">${element.date}</span>
          <p>${element.content}</p>
          <a href="#" class="button-more">Leer Más</a>
        </article>
    `;
    $('#posts').append(post);
  });

  // Selector de tema
  var theme = $('#theme');
  
  $('#to-green').click(function () { 
    theme.attr('href', 'css/green.css');
  });

  $('#to-red').click(function () { 
    theme.attr('href', 'css/red.css');
  });

  $('#to-blue').click(function () { 
    theme.attr('href', 'css/blue.css');
  });

  // Scroll arriba de la web
  $('.subir').click(function (e) { 
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  // Login Falso
  $('#login form').submit(function (e) { 
    e.preventDefault();
    var form_name = $('#form_name').val();

    localStorage.setItem('form_name', form_name);
  });

  var form_name = localStorage.getItem('form_name');

  if (form_name != null && form_name != 'undefined') {
    var aboutParrafo = $('#about p');
    aboutParrafo.html('<br><strong>Bienvenido, '+form_name+'</strong>');
    aboutParrafo.append('<a href="#" id="logout">Cerrar Sesión</a>');

    $('#login').hide();

    $('#logout').click(function() {
      localStorage.clear();
      location.reload();
    });
  }

  if (window.location.href.indexOf('about') > -1) {
    $('#acordeon').accordion();
  }
});