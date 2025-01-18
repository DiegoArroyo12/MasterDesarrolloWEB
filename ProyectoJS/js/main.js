$(document).ready(function(){

  // Slider
  $('.bxslider').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1200
  });

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
});