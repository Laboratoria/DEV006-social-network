import { onGetPost } from '../lib/firebase.js';

function wall(navigateTo) {
  const form = document.createElement('form');
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

  form.append(iconoRestaurante, postContenedor, contenedor);

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
  return form;
}

export default wall;
