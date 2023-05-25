/* eslint-disable indent */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
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
  // getPosts,
  getDoc,
  db,
  doc,
  auth,
} from '../app/firebase.js';

function posts(navigateTo) {
  const section = document.createElement('section');
  const containerPosts = document.createElement('div');
  const containerTitle = document.createElement('div');
  const containerFormPost = document.createElement('div');
  const containerTitleAndPost = document.createElement('div');
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
  // let isLiked = false;
  let id = '';

  onGetPosts((querySnapshot) => {
    let html = '';
    querySnapshot.forEach((doc) => {
      const userPost = doc.data();
      const user = auth.currentUser;
      const showBtnDelete = userPost.authorId === user.uid;
      const showBtnEdit = userPost.authorId === user.uid;

      html += `
        <section class="user-posts">
        <div class="img-name-user-post">
        <div class="info-post">
        <img class='user-img-post' src='img/huellaIcono.png'' alt='Imagen de usuario'>
        <div class="user-data-post">
        <p class="user-name-post">${userPost.name}</p> 
        <p class="date-post">${userPost.date}</p> 
        </div>
        </div>
        <div class='btns-post'>
        <img class="${showBtnDelete ? 'btn-delete' : ''}" data-id="${doc.id}" src="${showBtnDelete ? 'img/delete.png' : ''}" alt="${showBtnDelete ? 'Borrar' : ''}">
        <img class="${showBtnEdit ? 'btn-edit' : ''}" data-id="${doc.id}" src="${showBtnEdit ? 'img/edit.png' : ''}" alt="${showBtnEdit ? 'Editar' : ''}">
        </div>
        </div>
        <p class="posts">${userPost.post}</p>

        <div class="container-likes">
        <p id="contador" class="counter-likes">${userPost.likes ? userPost.likes.length : 0}</p>
        <img id="likePost-${doc.id}" data-id="${doc.id}" class='like-post' src='img/like.png' alt='Like'>
        </div>
        </section>
        `;
    });

    // FUNCION EDITAR Y ELIMINAR POST

    postsUsers.innerHTML = html;

    const btnsDelete = postsUsers.querySelectorAll('.btn-delete');

    btnsDelete.forEach((btn) => {
      btn.addEventListener('click', async ({ target: { dataset } }) => {
        const postId = dataset.id;
        const user = auth.currentUser;

        const post = await getPost(postId);

        if (post.data().authorId === user.uid) {
        deletePost(postId);
        }
      });
    });
    const btnsEdit = postsUsers.querySelectorAll('.btn-edit');
    btnsEdit.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        const postId = e.target.dataset.id;
        console.log(postId);
        const user = auth.currentUser;
        const userPost = await getPost(postId);
        console.log(userPost);

        if (userPost.data().authorId === user.uid) {
          const task = userPost.data();
          formDoYouWantPost['wantPost'].value = task.post;

          editPost = true;
          id = userPost.id;

          formDoYouWantPost['savingPost'].innerHTML = 'Actualizar';
        }
      });
    });

    // FUNCION LIKE POSTS

    const likeButtons = document.querySelectorAll('.like-post');

    likeButtons.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        const postId = e.target.dataset.id;
        const user = auth.currentUser;
        const postRef = doc(db, 'publicaciones', postId);
        const postSnapshot = await getDoc(postRef);
        const post = postSnapshot.data();

        if (Array.isArray(post.likes) && post.likes.includes(user.uid)) {
          const updatedLikes = post.likes.filter((userId) => userId !== user.uid);
          console.log('No hay like');
          // isLiked = false;
          // console.log(imagenLike);
          return updatePost(postId, { likes: updatedLikes });
        }
        const updatedLikes = Array.isArray(post.likes) ? [...post.likes, user.uid] : [user.uid];
        console.log('si hay like');
        // isLiked = true;
        id = postId.id;
        return updatePost(postId, { likes: updatedLikes });
      });
    });
  });

  // ID DE CADA ELEMENTO CREADO

  containerPosts.id = 'containerPosts';
  containerTitle.id = 'containerTitle';
  containerFormPost.id = 'containerFormPost';
  containerTitleAndPost.id = 'containerTitleAndPost';
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

  // AGREGAR CLASES PARA DAR ESTILO EN CSS

  containerPosts.classList.add('container-posts');
  containerTitle.classList.add('container-title-posts');
  containerFormPost.classList.add('container-form-post');
  formDoYouWantPost.classList.add('form-do-you-want-post');
  containerTitleAndPost.classList.add('container-title-and-post');
  containerBtn.classList.add('container-btn-post');
  wantPost.classList.add('want-post');
  imgBack.classList.add('img-back-posts');
  title.classList.add('title-posts');
  imgLogout.classList.add('img-logout-posts');
  formPost.classList.add('form-posts');
  imgUser.classList.add('img-user-posts');
  savingPost.classList.add('saving-posts');

  // NUMERO DE COLUMNAS EN LA TEXTARE PARA HACER UN POST
  wantPost.rows = 3;

  imgBack.src = 'img/back.png';
  imgBack.alt = 'imagen regresar';
  imgBack.addEventListener('click', () => {
    logoutFn(navigateTo);
  });

  imgLogout.src = 'img/cerrar.png';
  imgLogout.alt = 'imagen cerrar sesion';
  imgLogout.addEventListener('click', async () => {
    console.log('hiciste click');
    logoutFn(navigateTo);
  });

  title.textContent = 'Estamos Perdid@s!!!!';

  imgUser.src = 'img/huellaIcono.png';
  imgUser.alt = 'Imagen usuario';
  imgUser.addEventListener('click', () => {
    console.log('Imagen de usuario');
  });

  wantPost.placeholder = 'Deseas contarnos algo?';

  savingPost.textContent = 'Publicar';

  formDoYouWantPost.addEventListener('submit', (e) => {
    e.preventDefault();
    const postText = formDoYouWantPost['wantPost'].value;
    if (postText.trim() !== '') {
      if (!editPost) {
        savePost(postText);
      } else {
        updatePost(id, { post: postText });

        editPost = false;
        formDoYouWantPost['savingPost'].innerHTML = 'Publicar';
      }
      formDoYouWantPost.reset();
    } else {
      alert('No se puede hacer una publicacion sin contenido');
    }
  });

  containerTitleAndPost.append(containerTitle, formDoYouWantPost);
  containerTitle.append(imgBack, title, imgLogout);
  formDoYouWantPost.append(containerFormPost, containerBtn);
  containerFormPost.append(imgUser, wantPost);
  containerBtn.appendChild(savingPost);
  containerPosts.append(containerTitleAndPost, postsUsers);
  section.appendChild(containerPosts);

  return section;
}

export default posts;
