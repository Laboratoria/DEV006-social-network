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
        <div id='avisoBorrar' style='display:none'> 
          <p>Delete post?</p>
          <button id='delete'>Delete</button>
          <button id='cancel'> Cancel</button>
       </div>
      `;
      // console.log(doc.id);
    });

    postContenedor.innerHTML = html;

    const btnsDelete = postContenedor.querySelectorAll('.deleteButton');
    const avisoBorra = document.getElementById('avisoBorrar');

    btnsDelete.forEach(btn => {
      btn.addEventListener('click', ({ target: { dataset } }) => {
        const borrando = avisoBorra.querySelector('#delete');
        const cancelar = avisoBorra.querySelector('#cancel');

        borrando.addEventListener('click', () => {
          deleteTask(dataset.id);
        });

        cancelar.addEventListener('click', () => {
          avisoBorra.style.display = 'none';
        });

        avisoBorra.style.display = 'block';
      });
    });

    const editButton = postContenedor.querySelectorAll('.editButton');

    editButton.forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const doc = await getTask(e.target.dataset.id);
        console.log(doc.id);
        const identidad = doc.id;
        // console.log(e.target.dataset.id, 'hey');
        const post = doc.data();
        // console.log(post);
        navigateTo('/newpost', { post, identidad });
      });
    });
  });
  return divWall;
}

// eslint-disable-next-line eol-last
export default wall;