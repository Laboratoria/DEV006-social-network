/* eslint-disable dot-notation */
// OTRO coment
import { logoutFn } from '../app/logout.js';
// import { postsFn } from '../app/firestore.js';
import {
  savePost,
  onGetPosts,
  deletePost,
  getPost,
  updatePost,
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
  const savingPost = document.createElement('button');

  let editPost = false;
  let id = '';
  // window.addEventListener('DOMContentLoaded', async () => {
  onGetPosts((querySnapshot) => {
    let html = '';

    querySnapshot.forEach((doc) => {
      const userPost = doc.data();
      html += `
        <section class="user-posts">
        <div class="info-post">
        <div class="user-data-post">
        <p class="user-name-post">${userPost.name}</p> 
        <p class="date-post">${userPost.date}</p> 
        </div>
        <div class="btns-post">
        <img class='btn-delete' data-id="${doc.id}" src='img/delete.png' alt='Borrar'>
        <img class='btn-edit' data-id="${doc.id}" src='img/edit.png' alt='Editar'>
        </div>
        </div>
        <p class="posts">${userPost.post}</p>
        </section>
        `;
    });
    postsUsers.innerHTML = html;

    const btnsDelete = postsUsers.querySelectorAll('.btn-delete');

    btnsDelete.forEach((btn) => {
      btn.addEventListener('click', ({ target: { dataset } }) => {
        deletePost(dataset.id);
      });
    });
    const btnsEdit = postsUsers.querySelectorAll('.btn-edit');
    btnsEdit.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        const userPost = await getPost(e.target.dataset.id);
        const task = userPost.data();

        formDoYouWantPost['wantPost'].value = task.post;

        editPost = true;
        id = userPost.id;

        formDoYouWantPost['savingPost'].innerHTML = 'Actualizar';
      });
    });
  });

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
  savingPost.id = 'savingPost';

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
  savingPost.classList.add('saving-posts');

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

  savingPost.textContent = 'Publicar';

  formDoYouWantPost.addEventListener('submit', (e) => {
    e.preventDefault();
    const postText = formDoYouWantPost['wantPost'].value;

    if (!editPost) {
      savePost(postText);
    } else {
      updatePost(id, { post: postText });

      editPost = false;
      formDoYouWantPost['savingPost'].innerHTML = 'Publicar';
    }
    formDoYouWantPost.reset();
  });

  containerTitle.append(imgBack, title, imgLogout);
  formDoYouWantPost.append(containerFormPost, containerBtn);
  containerFormPost.append(imgUser, wantPost);
  containerBtn.appendChild(savingPost);
  containerPosts.append(containerTitle, formDoYouWantPost, postsUsers);
  section.appendChild(containerPosts);

  return section;
}

export default posts;
