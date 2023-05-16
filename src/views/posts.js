import { logoutFn } from '../app/logout.js';
import { postsFn } from '../app/firestore.js';
import {
  onGetPosts,
} from '../app/firebase.js';

function posts(navigateTo) {
  const section = document.createElement('section');
  const containerPosts = document.createElement('div');
  const containerTitle = document.createElement('div');
  const containerFormPost = document.createElement('div');
  const formDoYouWantPost = document.createElement('form');
  const postsUsers = document.createElement('div');
  const containerBtn = document.createElement('div');
  const wantPost = document.createElement('textarea');
  const imgBack = document.createElement('img');
  const title = document.createElement('p');
  const imgLogout = document.createElement('img');
  const formPost = document.createElement('form');
  const imgUser = document.createElement('img');
  const savePost = document.createElement('button');

  containerPosts.id = 'containerPosts';
  containerTitle.id = 'containerTitle';
  containerFormPost.id = 'containerFormPost';
  postsUsers.id = 'postsUsers';
  formDoYouWantPost.id = 'formDoYouWantPost';
  containerBtn.id = 'containerBtn';
  wantPost.id = 'wantPost';
  imgBack.id = 'imgBack';
  title.id = 'title';
  imgLogout.id = 'imgLogout';
  formPost.id = 'formPost';
  imgUser.id = 'imgUser';
  savePost.id = 'savePost';

  containerPosts.classList.add('container-posts');
  containerTitle.classList.add('container-title-posts');
  containerFormPost.classList.add('container-form-post');
  formDoYouWantPost.classList.add('form-do-you-want-post');
  containerBtn.classList.add('container-btn-post');
  wantPost.classList.add('want-post');
  imgBack.classList.add('img-back-posts');
  title.classList.add('title-posts');
  imgLogout.classList.add('img-logout-posts');
  formPost.classList.add('form-posts');
  imgUser.classList.add('img-user-posts');
  savePost.classList.add('save-posts');

  window.addEventListener('DOMContentLoaded', async () => {
    onGetPosts((querySnapshot) => {
      let html = '';

      querySnapshot.forEach((doc) => {
        const userPost = doc.data();
        html += `
        <div>
        <p>${userPost.post}</p>
        <button class='btn-delete' data-id="${doc.id}">Borrar</button>
        </div>
        `;
      });
      postsUsers.innerHTML = html;

      const btnsDelete = postsUsers.querySelectorAll('.btn-delete');

      btnsDelete.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          console.log(e.target.dataset.id);
        });
      });
    });
  });

  wantPost.rows = 3;

  imgBack.src = 'img/back.png';
  imgBack.alt = 'imagen regresar';
  imgBack.addEventListener('click', () => {
    navigateTo('/login');
  });

  imgLogout.src = 'img/cerrar.png';
  imgLogout.alt = 'imagen cerrar sesion';
  imgLogout.addEventListener('click', async () => {
    logoutFn(navigateTo);
  });

  title.textContent = 'Estamos Perdid@s!!!!';

  imgUser.src = 'img/huellaIcono.png';
  imgUser.alt = 'Imagen usuario';

  wantPost.placeholder = 'Deseas contarnos algo?';

  savePost.textContent = 'Publicar';

  formDoYouWantPost.addEventListener('submit', (e) => {
    e.preventDefault();
    postsFn();
  });

  containerTitle.append(imgBack, title, imgLogout);
  formDoYouWantPost.append(containerFormPost, containerBtn);
  containerFormPost.append(imgUser, wantPost);
  containerBtn.appendChild(savePost);
  containerPosts.append(containerTitle, formDoYouWantPost, postsUsers);
  section.appendChild(containerPosts);

  return section;
}

export default posts;
