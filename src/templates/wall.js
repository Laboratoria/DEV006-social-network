/* eslint-disable no-console */
/* eslint-disable arrow-parens */
import { onGetPost, deleteTask, getTask } from '../lib/firebase.js';

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
                <div id='editDelete'>
                <img class='deleteButton' data-id = '${doc.id}' src="./img/trash.png" alt="trash"/>
                <img class='editButton' data-id = '${doc.id}' src="./img/edit.png" alt="edit"/>
                </div>
            </div>
        `;
    });

    postContenedor.innerHTML = html;

    const btnsDelete = postContenedor.querySelectorAll('.deleteButton');

    btnsDelete.forEach(btn => {
      btn.addEventListener('click', ({ target: { dataset } }) => {
        deleteTask(dataset.id);
      });
    });
    const editButton = postContenedor.querySelectorAll('.editButton');

    editButton.forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const doc = await getTask(e.target.dataset.id);
        const post = doc.data();
        // const title = post.title;
        // const description = post.description;
        console.log(post);
        navigateTo('/newpost', { post });
        // editButton(title.value, description.value).then(() => {
        //   navigateTo('/newpost');
        // });

        //  divWall['textAreaTitle'].value = post.title;
        //  divWall['textAreaReview'].value = post.description;

        //  editStatus = true;
        //  id = e.target.dataset.id;
      });
    });
  });
  return divWall;
}

export default wall;
