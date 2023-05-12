export function wall(navigateTo) {
  // Crear elementos
  const container = document.createElement('div');
  const navegator = document.createElement('nav');
  const main = document.createElement('main');
  const logoRefresh = document.createElement('img');
 // const exitButton = document.createElement('button');
  const divposts = document.createElement('div');

  // Establecer atributos y contenido
  logoRefresh.setAttribute('src', './images/logoEasygym.png');
  logoRefresh.setAttribute('onclick','location.reload()');
  divposts.id = 'posts';
 // exitButton.id = 'exit';
  logoRefresh.classList.add('refresh');

// Agregar elementos a nav
navegator.appendChild(logoRefresh);

// Agregar elementos a main
 // main.appendChild(exitButton);

 // Agregar elementos al contenedor (div) especificado
 container.appendChild(navegator);
 container.appendChild(main);

 return container;
}

/*
 <div class="post">
      <div class="header">
        <img src>
        <input  type="date"></input>
        img src>
      </div>
      <div class="photoOrVideo">
        foto/video
      </div>
      <div class="descpriptionAndLikes">
        logo likes + cant likes
        comentarios
        descripcion
      </div>
    </div>
*/
