import { onGetPost } from '../lib/firebase.js';

function wall(navigateTo) {
  const divWall = document.createElement('div');
  divWall.classList.add('divWall');
  const iconoRestaurante = document.createElement('img');
  const contenedor = document.createElement('div');
  contenedor.classList.add('contenedor');
  const iconoAgregar = document.createElement('img');
  const iconoMuro = document.createElement('img');
  const iconoPerfil = document.createElement('img');
  const postContenedor = document.createElement('div');
  postContenedor.setAttribute('id', 'postContenedor');
  postContenedor.classList.add('postContenedor');

  iconoRestaurante.src = './img/iconoRestaurante.png';
  iconoRestaurante.classList.add('iconoRestaurante');

  iconoAgregar.src = './img/iconoAgregar.png';
  iconoAgregar.classList.add('iconoAgregar');
  iconoAgregar.addEventListener('click', () => {
    navigateTo('/newpost');
  });

  iconoMuro.src = './img/iconoMuro.png';
  iconoMuro.classList.add('iconoMuro');

  iconoPerfil.src = './img/iconoPerfil.png';
  iconoPerfil.classList.add('iconoPerfil');

  contenedor.append(iconoMuro, iconoAgregar, iconoPerfil);

  divWall.append(iconoRestaurante, postContenedor, contenedor);

  // const mostrarContenedor = document.getElementById('postContenedor');
  onGetPost((querysnapshot) => {
    let html = '';
    querysnapshot.forEach((doc) => {
      const post = doc.data();
      html += `
            <div>
                <h3>${post.title}</h3>
                <p>${post.description}</p>
            </div>
        `;
    });

    postContenedor.innerHTML = html;
  });
  return divWall;
}

export default wall;
